<template>
  <div id="universe"></div>
</template>

<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'stats.js/src/Stats'
import * as dat from 'dat.gui'
import { eventBus } from '../../main'
import SpeedControl from '../../assets/js/util/speedControl'

export default {
  name: 'universe',
  data () {
    return {
      stats: null, // 性能监测对象
      scene: null, // 场景对象
      camera: null, // 照相机对象
      renderer: null, // 渲染对象
      orbitControls: null, // 控制插件 -- 测试使用
      guiControls: null, // GUI插件 -- 测试使用
      earthGroup: null, // 地球组模型 -- 测试使用
      satelliteMesh: null, // 卫星模型对象 -- 测试使用
      sunMesh: null, // 太阳模型对象 -- 测试使用
      earthImage: require('../../assets/img/earth.jpg'),
      textureImg1: require('../../assets/img/universe_1.jpg'),
      textureImg2: require('../../assets/img/universe_2.jpg'),
      textureImg3: require('../../assets/img/universe_3.jpg'),
      textureImg4: require('../../assets/img/universe_4.jpg'),
      textureImg5: require('../../assets/img/universe_5.jpg'),
      textureImg6: require('../../assets/img/universe_6.jpg')
    }
  },
  created () {
    eventBus.$on('removePerspective', target => {
      this.updatePerspective(target)
    })
  },
  mounted () {
    // this.init()
  },
  methods: {
    initRenderer () { // 渲染器
      this.renderer = new Three.WebGLRenderer({
        antialias: true // 抗锯齿
      })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.getElementById('universe').appendChild(this.renderer.domElement)
    },
    initCamera () { // 照相机
      const k = window.innerWidth / window.innerHeight
      this.camera = new Three.PerspectiveCamera(45, k, 1, 2000)
      this.camera.position.set(120, -70, 130)
      // lookAt方法由于OrbitControls插件的原因已失效，直接调用OrbitControls内部target属性控制
    },
    initScene () { // 场景
      // 场景
      this.scene = new Three.Scene()
      this.scene.background = new Three.CubeTextureLoader()
        .load([this.textureImg1, this.textureImg2, this.textureImg3, this.textureImg4, this.textureImg5, this.textureImg6])
    },
    initLight () { // 光源
      // 点光源
      const light = new Three.PointLight(0xffffff)
      light.position.set(600, 600, 600)
      this.scene.add(light)
    },
    initObject () { // 初始化几何体aaa
      /* 太阳 */
      const sun = new Three.SphereGeometry(100, 100, 100)
      new Three.TextureLoader()
        .load(this.earthImage, texture => { // 太阳纹理贴图加载
          const material = new Three.MeshPhysicalMaterial({
            map: texture
          })
          this.sunMesh = new Three.Mesh(sun, material)
          this.sunMesh.position.x = 500
          this.sunMesh.position.z = 700
          this.scene.add(this.sunMesh)
        })
      /* 地球组 */
      this.earthGroup = new Three.Group()
      this.earthGroup.name = 'earthGroup'
      // 地球
      const earth = new Three.SphereGeometry(100, 100, 100)
      // 卫星
      const satellite = new Three.SphereGeometry(15, 15, 15)
      new Three.TextureLoader()
        .load(this.earthImage, texture => { // 地球纹理贴图加载
          const material = new Three.MeshPhysicalMaterial({
            map: texture
          })
          const earthMesh = new Three.Mesh(earth, material)
          this.earthGroup.add(earthMesh)
          new Three.TextureLoader()
            .load(this.earthImage, texture => { // 卫星纹理贴图加载
              const material = new Three.MeshPhysicalMaterial({
                map: texture
              })
              this.satelliteMesh = new Three.Mesh(satellite, material)
              this.satelliteMesh.name = 'satelliteMesh'
              this.satelliteMesh.position.x = 120
              this.earthGroup.add(this.satelliteMesh)
              this.scene.add(this.earthGroup)
              // 渲染调用
              this.render()
            })
        })
    },
    init () { // 初始化
      this.initStats()
      this.initDatGUI()
      this.initScene()
      this.initRenderer()
      this.initCamera()
      this.initLight()
      this.initObject()
      // 控制器
      this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)
      this.orbitControls.enableDamping = true
      this.orbitControls.target = new Three.Vector3(100, 10, 0)
    },
    render () { // 渲染
      this.stats.update()
      // Object3D属性控制
      this.updateObject3D()
      this.renderer.render(this.scene, this.camera)
      this.orbitControls.update()
      requestAnimationFrame(this.render)
    },
    initStats () { // 初始化性能监测插件
      this.stats = new Stats()
      // 设置统计模式
      this.stats.setMode(1) // 0: FPS, 1: ms, 2: 内存
      // 统计信息显示位置
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = '0px'
      this.stats.domElement.style.top = '100px'
      document.body.appendChild(this.stats.domElement)
    },
    initDatGUI () {
      this.guiControls = {
        earthRotationSpeed: 0.001, // 地球旋转速度
        satellitePositionX: 120, // 卫星X轴坐标
        satellitePositionY: 0, // 卫星Y轴坐标
        satellitePositionZ: 0, // 卫星Z轴坐标
        sunPositionX: 500, // 太阳X轴坐标
        sunPositionY: 0, // 太阳Y轴坐标
        sunPositionZ: 700, // 太阳Z轴坐标
        cameraPositionX: 120, // 照相机X轴坐标
        cameraPositionY: -70, // 照相机Y轴坐标
        cameraPositionZ: 130 // 照相机Z轴坐标
      }
      const gui = new dat.GUI()
      // 地球组
      const earthGroup = gui.addFolder('地球组')
      earthGroup.add(this.guiControls, 'earthRotationSpeed', 0, 0.2).name('地球旋转速度').onChange(this.updateObject3D)
      // 卫星组
      const satelliteGroup = gui.addFolder('卫星组')
      satelliteGroup.add(this.guiControls, 'satellitePositionX', 100, 500).name('卫星X轴坐标').onChange(this.updateObject3D)
      satelliteGroup.add(this.guiControls, 'satellitePositionY', 0, 200).name('卫星Y轴坐标').onChange(this.updateObject3D)
      satelliteGroup.add(this.guiControls, 'satellitePositionZ', 0, 200).name('卫星Z轴坐标').onChange(this.updateObject3D)
      // 太阳组
      const sunGroup = gui.addFolder('太阳组')
      sunGroup.add(this.guiControls, 'sunPositionX', 0, 1000).name('太阳X轴坐标').onChange(this.updateObject3D)
      sunGroup.add(this.guiControls, 'sunPositionY', 0, 1000).name('太阳Y轴坐标').onChange(this.updateObject3D)
      sunGroup.add(this.guiControls, 'sunPositionZ', 0, 1000).name('太阳Z轴坐标').onChange(this.updateObject3D)
      // 照相机组
      const cameraGroup = gui.addFolder('照相机组')
      cameraGroup.add(this.guiControls, 'cameraPositionX', 0, 2000).name('照相机X轴坐标').onChange(this.updateObject3D)
      cameraGroup.add(this.guiControls, 'cameraPositionY', 0, 2000).name('照相机Y轴坐标').onChange(this.updateObject3D)
      cameraGroup.add(this.guiControls, 'cameraPositionZ', 0, 2000).name('照相机Z轴坐标').onChange(this.updateObject3D)
    },
    updatePerspective (target) { // 移动相机视角
      console.log(target)
      switch (target) {
        case 0: {
          new SpeedControl().uniformSpeed().map(item => {
            this.camera.position.set(item, 0, 0)
            console.log(item)
          })
          this.orbitControls.target = new Three.Vector3(0, 0, 0)
          break
        }
        default: {
          break
        }
      }
    },
    updateObject3D () {
      this.earthGroup.rotation.y += this.guiControls.earthRotationSpeed
      this.satelliteMesh.position.set(
        this.guiControls.satellitePositionX,
        this.guiControls.satellitePositionY,
        this.guiControls.satellitePositionZ
      )
      this.sunMesh.position.set(
        this.guiControls.sunPositionX,
        this.guiControls.sunPositionY,
        this.guiControls.sunPositionZ
      )
      this.camera.position.set(
        this.guiControls.cameraPositionX,
        this.guiControls.cameraPositionY,
        this.guiControls.cameraPositionZ
      )
    }
  }
}
</script>

<style scoped>

</style>
