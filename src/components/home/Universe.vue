<template>
  <div id="universe"></div>
</template>

<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  name: 'universe',
  data () {
    return {
      scene: null, // 场景对象
      camera: null, // 照相机对象
      renderer: null, // 渲染对象
      controls: null, // 控制插件
      earthGroup: null, // 地球组模型
      earthImage: require('../../assets/img/earth.jpg'),
      textureImg1: require('../../assets/img/universe_1.jpg'),
      textureImg2: require('../../assets/img/universe_2.jpg'),
      textureImg3: require('../../assets/img/universe_3.jpg'),
      textureImg4: require('../../assets/img/universe_4.jpg'),
      textureImg5: require('../../assets/img/universe_5.jpg'),
      textureImg6: require('../../assets/img/universe_6.jpg')
    }
  },
  mounted () {
    this.init()
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
      this.camera = new Three.PerspectiveCamera(45, k, 1, 1000)
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
    initObject () { // 初始化几何体
      /* 太阳 */
      const sun = new Three.SphereGeometry(100, 100, 100)
      new Three.TextureLoader()
        .load(this.earthImage, texture => { // 太阳纹理贴图加载
          const material = new Three.MeshPhysicalMaterial({
            map: texture
          })
          const sunMesh = new Three.Mesh(sun, material)
          sunMesh.position.x = 500
          sunMesh.position.z = 700
          this.scene.add(sunMesh)
        })
      /* 地球组 */
      this.earthGroup = new Three.Group()
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
              const satelliteMesh = new Three.Mesh(satellite, material)
              satelliteMesh.position.x = 120
              this.earthGroup.add(satelliteMesh)
              this.scene.add(this.earthGroup)
            })
          // 渲染调用
          this.render()
        })
    },
    init () { // 初始化
      this.initScene()
      this.initObject()
      this.initRenderer()
      this.initCamera()
      this.initLight()
      // 控制器
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enableDamping = true
      this.controls.target = new Three.Vector3(100, 10, 0)
    },
    render () { // 渲染
      this.earthGroup.rotation.y += 0.001
      this.renderer.render(this.scene, this.camera)
      this.controls.update()
      requestAnimationFrame(this.render)
    }
  }
}
</script>

<style scoped>

</style>
