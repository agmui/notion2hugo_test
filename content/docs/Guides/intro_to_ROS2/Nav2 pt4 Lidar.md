---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=93aa1cdce5e48a342837751f2ed402b68f707b61f5f091580070aa371d6d54de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=c6fe7fde980f6b613b384abdd4f0075f19644f6191b2590d3a0688e5832b12b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=43458dec1d2e13007bde3cf6d7937e8ce1e3875b9f391f9779a4076c26f347bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=4daf50d623e4bb966b4532c5c0e4ad91f1d5f6c185dbc4359ed23ef59d9d62b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=98fdfe8ca3d68a9045542876a4d2f2bc4b71629b5e9f1ab7cfea17a1d8598817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=e3ee2dc2c11899d10000dd1a3ad5cc48bcd5262d385d433c729e87eb7a91cebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=4a274a36c384974e25969f95f74ffce814609acfb971be0740948c7d382eb385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=4867daab4922b3be96980aadbd4bcf1b4dbf11b92a21de3f89565d7c2bf9b346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

TODO: get official docs link

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=4655ff5588990d1d0ff4b85b029f878eb3ab1eeef565bfc43b3be86a49fcc6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SADJ4LIF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj6zf%2Br5YPad36qKhlhQ0YN0rA7jwH9dd%2FNSSliuLK%2BAIhAIkueutaREBlzqxGAeRGnzQUb4dcuXWHDM3DCwOl58WgKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5Gm%2FlcDxI%2BEJOeMQq3ANWlkmRZOjS1sAiDFfuHZc2%2FKnWaLeQ3CcJRqXv9JJZ5gFSwZLirYwJg2y%2BRKwtel%2BRceaIeW9zUQpAivEJjGZRsggDvoOh%2ByG7nt83elHqxrhmBnHxi4L86fDv1Its8h2VB8JEp5MbEGPQzFJFHWZCiSLKis1MX3DDkjgEsShBdqaY3DSI3AZ94FbRC3%2BzKqC8YzqtFX8I%2Foa9LNFsoZixqYT7xSujOROk1p3PV5%2F3DMtF6biumZEaynfz88bO9kealg4Qt2DDMf%2BeI3p5Uq%2BoDarEbReeb%2BusfaE0ZRJmcCS2P%2FU3suN9kVnbe8Tcg9XlB5sXRGupf0yyUXn3%2BqmMWOrlp2HzVVuLdXXcs77LlBWrIjJ6MrRvhInWaQoeqVaXEJOy%2F1I7nljb%2FZBmymgfmEPPZJOipiEhy4YeQixLERKNBeqwQE1j19Rzs1eVuSL3O6R729XneYaR8oGz1NWqKmYyGohjeDtr9NJ6z0USPjvQjuaEIlZdhEuupIhHcWSSfGZdBOUZOLYgOTGBI3zNfSxCVt651vEVS7GllW5Yn7QL4rm%2Fjd9zNJbtDnKpEC6%2BvSnaD87cPSgS9zLzW7nY5CalwSOiCbl2bgWpjoy%2B5T1wBIlcxTghbSS4hzCX86XEBjqkAfzTnjwgjNuCsTMiurSgcR1m10JUvmFcaSOl%2Fb%2FLzb0RL%2B4CRv6aolRf1p64PSc4nypEz5ZmIJO%2FrMZWxvMV7zUSnaBsOG86%2F7f5ZFp8pbUTuw1zvRa4tUy08PYJycnHat0TC2FsvetUAL4LMgWKspBwWPN16cEvcaorlH7H5%2FrfCgbjdRROweaY4lekGs4eHgdRGmGuliQmQwhtwRofsrKKsdS5&X-Amz-Signature=59bd349d59db119b4a6bd19812c330298de8aad23680646590148361901e7b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
