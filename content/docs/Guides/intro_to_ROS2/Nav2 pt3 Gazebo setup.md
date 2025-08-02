---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T10:08:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T10:08:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 153
toc: false
icon: ""
---

Gazebo is a simulation software suite. It can simulate many kinds of sensors such as Lidar, Depth sense cameras, IMU, and more.

Here is the official [link to their website](https://gazebosim.org/home) if you want to learn more

We are going to set up Gazebo simulation for our project

## Install

```bash
sudo apt install ros-$ROS2_DISTRO-ros-gz
```

### New nodes

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=35d24f552c8572679c98d9daaa10bc3b2975c7e9796a9c414e766fc1e3bc7826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

{{< /table >}}

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=9d9cfee1d10bf5298964eea55b7955e52ec4d0b4c2689cb6c63d49aa98a593be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=fbf554298efe91c2361f4a5ccc1cd4c0d838c241cab88ec5b504323707d5fa8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=5fa8413e22102fcd7c3055f31a3642403f89d4d7f48f3a8a02e6873d17c69729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

paste this inside `bridge_config.yaml`. 

This file just describes what topics to _bridge_ between ROS and Gazebo

```yaml
---
- ros_topic_name: "/clock"
  gz_topic_name: "/clock"
  ros_type_name: "rosgraph_msgs/msg/Clock"
  gz_type_name: "gz.msgs.Clock"
  direction: GZ_TO_ROS

# Topic published by DiffDrive plugin
- ros_topic_name: "/odom"
  gz_topic_name: "/odom"
  ros_type_name: "nav_msgs/msg/Odometry"
  gz_type_name: "gz.msgs.Odometry"
  direction: GZ_TO_ROS

# Topic published by JointStatePublisher plugin
- ros_topic_name: "/joint_states"
  gz_topic_name: "/joint_states"
  ros_type_name: "sensor_msgs/msg/JointState"
  gz_type_name: "gz.msgs.Model"
  direction: GZ_TO_ROS

# Topic subscribed to by DiffDrive plugin
- ros_topic_name: "/cmd_vel"
  gz_topic_name: "/cmd_vel"
  ros_type_name: "geometry_msgs/msg/TwistStamped"
  gz_type_name: "gz.msgs.Twist"
  direction: ROS_TO_GZ

- ros_topic_name: "/tf"
  gz_topic_name: "/tf"
  ros_type_name: "tf2_msgs/msg/TFMessage"
  gz_type_name: "gz.msgs.Pose_V"
  direction: GZ_TO_ROS
```

## Updating `urdf`

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `mbot_description.urdf` **right before the** **`</robot>`** **tag**.

This plugin does emulates most of what `my_node` did.

```xml

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>1.0</max_linear_acceleration>

      <!-- input -->
      <topic>/cmd_vel</topic>

      <!-- output -->
      <odom_topic>/odom</odom_topic>
      <tf_topic>/tf</tf_topic>

      <frame_id>odom</frame_id>
      <child_frame_id>base_link</child_frame_id>
    </plugin>

    <plugin
      filename="gz-sim-joint-state-publisher-system"
      name="gz::sim::systems::JointStatePublisher">
      <topic>joint_states</topic>
    </plugin>
  </gazebo>
```

We also need to simulate friction on the wheels or else the robot will not be able to move in the sim.

Add the friction tag in the wheel macro we made: 

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>

        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EH64LA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3fCMe%2BlbXFn8eSpjhHGBbc6ZUIWaUuu5oTr%2Bf9RdeXAiEA9MAnBUszw9ClJJ8xpTPD9MQaiU4UFZlkWlG7JdLKHVcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2BdCAiT76xa%2BsgpSyrcA3IEnPzz%2B4k7P0bHK%2Bk7SA4x%2Bz7wDzyrP3rC49xKupg7eeWJYPdMN4RDPbP6IYAMhz3kb2GfAjKWvLD6t7bAapBdXatUqN46%2FtuY4stkWUqO%2Bs%2BjiO23j8jMaWSd5skHeqUUN12l5orBqAW43SW8KzQCfiFVR9CGV8mbuMgmdqXV3NbLCuFDS8IsMUUinA%2F%2BBdroNvHF5i%2B%2FB%2BgYEFANuNkDD%2FtTERjIXkhgJ4BHtlCwuM0VKMBjPF1qcsEPyqZ2zsj8H68dScUurYLcoVMAbmRfue0KXa5Wv4xD9SajH9hhEj96EdgiqIApTfAOscBbf%2FxkYNR8HJ2XptBInMajJI4qioTaECamitQRHoumUkt6Eq6C0e7NZPy4JwqkJCi1d%2Blq1RcUeOeRFN86u06BwJ8ic8PUGsVcSVNfr%2FLhhirloocmmLWAH9doqcJfxKqPWl%2F54xNtHuRnK7%2FDeeh4KTTViwiDLlok7zxcmZQ83GzB2b3yo6BhhiMvGpCFNGasVaweYCAJDyzdiPUC6v7xkDGBoibA9yPZCLlSDyIbk4km4XEc5EceDtzTm67LZO%2FzlJzDtFYIMET6vSPbVDASuDkesUZF5VjfdcCOpnyC1WRDsE%2FDZbAjAh%2B%2FVVWWMJuBusQGOqUBsapuLfL3jNtVQw3PaZXXHvTQHYX0e1pKJBxaxgbEDkJUMOjAOTCHbCP9tKV9KWvtrCerr3ilzrdpIBWiSxAKv0S9YHsJcNCamEKP4Z8heijM5sE%2BLECosJKUvblTuU4Zar%2BC2rWEkdwkN2APRdLtozHpBfA%2F1yrUnfpctBgcnqlwSOy%2FVSCrY%2BHUz0yaKU6edL8j%2Fftsy1PRCg8wfQ1g7ji7uUwE&X-Amz-Signature=acc5652e7116c2f6f507f0f37a3e16f23c9546149801f75ce74e9e54eeade364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=0d9a0dd9d99e26fe705a04830e17ddceebbe1ad828a75bd982e15d7d2d367606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=fd4aafd11cc8023311faff3b189b39a2a4c9b11b6c48cc2ad57edeebb1724654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=0eaf9974a02246b5812cb29841c60139f690f2e3883f916b961d54577b854f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=a92dea388102b6718659912716c7d48512959a56653d6327b04dfa7d4e2c2342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    
    robot_state_publisher_node = Node(
    ...
```

We also must add the `use_sim_time` parameter to `robot_state_publisher` because we are using a simulator 

```python
    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])},
        {'use_sim_time': LaunchConfiguration('use_sim_time')}]
    )
```

Here are the nodes required to start Gazebo

```python
    gz_server = GzServer(
        world_sdf_file=world_path,
        container_name='ros_gz_container',
        create_own_container='True',
        use_composition='True',
    )
    ros_gz_bridge = RosGzBridge(
        bridge_name='ros_gz_bridge',
        config_file=bridge_config_path,
        container_name='ros_gz_container',
        create_own_container='False',
        use_composition='True',
    )
    ros_gz_sim_share = get_package_share_directory('ros_gz_sim')
    gz_spawn_model_launch_source = os.path.join(ros_gz_sim_share, "launch", "gz_spawn_model.launch.py")
    spawn_entity = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(gz_spawn_model_launch_source),
        launch_arguments={
            'world': 'my_world',
            'topic': '/robot_description',
            'entity_name': 'mbot',
            'z': '0.65',
        }.items(),
    )
```

At the bottem remember to comment out `my_node` and swap it out for the Gazebo nodes

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
        
        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
    ])
```

Remember to build because we added `bridge_config.yaml` and `my_world.sdf` to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

{{% alert context="warning" %}}

# Always use `use_sim_time:=True` flag when using Gazebo

{{% /alert %}}

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=db8055b83efb89f4b395d2f1cc30cb90b918f06ec82b0c3bb419bfabefa1e8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3HHSDX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAdRBfH%2Fo55Ly0zlvC0Mn6yaysnfo1L%2FjQBntaFU%2FCAiBK%2BEO77DNv8QRCE%2BO0BFexADI5F8sQV7SHTVygE7oqsir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMeRK0p6cfj%2FuW7FlBKtwDJdDW47bGdgn7VRksYqsPNs1Uo%2BK84nrmhHMZr%2FPwN3jUHTb88ojw0y9%2B%2Fi6sGgsrQP%2BivlElMU%2BNTIOx3wDUGiRF9hL%2FjI8eTwnto6lhIdLFeUtEzzosNlLdxKUFZoXGfm%2BdmCKQ%2Fu%2B7o%2B548FyrlwG3pOKLEbS7qYNCDSP%2FJe1rBHrM%2FTpn6azOL9OEIUqPrjLgKJCmq5M8wTGhhbGHdgqd07lMdWVCawxpWDNqUKci%2BAlblmhH%2FUP%2FjZ1SUExk4KwVMIKTKkQb8r4jHKszutEZRRnLMYOWWnbaEh3W6sgsdjO0WE3uma1sonuACgyKS6czoBC5gAaQwKXx8%2BMTOZgRIuGI0P1bZVeXoVIoH4O1oK4pvOUB95gvcWXPk%2F0H2C%2Bl1HG6PInCz3VcTJenx9ZcO1SeGKYGx%2FFgOMa4Ob66zYt4jVZJdz%2B0rl2bf0UIniHfU2FcfqoFspfn8Sv4liIEZn%2Fm2%2BPmRIzSsP7ICRLSFt4JnLvOUFUWOebeTx1ZK7lgmXHogSB8KKLgxyXEMkhu%2B8rafOb0LN%2Fyiq9w38EVCaFhMasxjt%2FU8CDGKgGQEZG3qQtuogVjzLeS0s2dxTpRdt7%2FOPv%2BhZuAd%2BeIkAj1%2B0dZzaauw5DDc6MwiYG6xAY6pgE7po3PHNpC0eQKLmvQNVaM4dYHrHmhrTIP2lrewPqY6gg%2BL9xwjvuyHZHm55tR6nslb%2BRXpXprCGzwllAWbxK9A8Yrr9JAuwMUmKypxI5QeeWkCkCU3KnOUJPNhDF%2BI1Qs57AdSAJxDIKHg663P13Om4JnDs27C0tv%2BGdzXYMPZmlJIgoIqy4Apn4gfc%2B7BJhkBZWPEN6TQmc7%2BGhdeJdIjFDiPndg&X-Amz-Signature=ab25ee52cd8e31c5354ec4ae9baa32ab26daa7a2988f445abbfc808226def1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
