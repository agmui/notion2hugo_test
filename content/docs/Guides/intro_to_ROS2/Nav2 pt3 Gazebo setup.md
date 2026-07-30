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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=33f084d321395a34cf7ff0bd910d6488d4abd11d4030945c303251af42f3ce27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}


#### Outputs:

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

#### Params:

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=fb79f14c8859fa2d550d7c2ec46346cc289b95e466038a22c2d386b21ba2ba92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=cfe77e879e4db7f2d6718bae9b6b7b8b7ef13f490bbb51fd2ba891b9dfdc4a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=683e681d8cf9bf4f3c969428f7be65ec4286f6ada464e2b93f55184f9cbe6d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "17-21"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSFBQFE%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B6oDOGaXK%2Bi95zKvPJpU2PPDrcnht8dVaeZk285L8fgIgLObL7xqUhecZrnu%2B7i%2B76pyV349oeP7CqRFNBirulRkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgd7ednDMvoOgzpeSrcAyKjKAn02Xh5bia%2BWPhhxxdHF%2BxT9WGrI5TTfGZzhtDeffzB871wJ0Rmhs2GXsu0qT0hv0ccr7caC%2B%2FbOHSm9WcSz9Y0ym943pep%2BgdTPH1aZbiN1OsyUGstE6YyltKF0B%2FGSeip%2FWPOUmNzQCcn84CYIo7zoI7LVnKsMGbgIDagARzpIP0U7X5dIyP23BlJh6xdSxanEJ2AmrPLYngCx7gdzmoHAVkZAzJBHQHjYoRaOuCHq3fhFAwrm99XmEs9hO1S8unwvEMAJ4U8KhQbbFu7M%2FkZvtxsEoG9fOfFzeA%2FvrYCw9EBKgsg3XlIj0JAhJEaImHKmkDOra8WoOFIHNmElJel68G9XP8sDnsCxwK%2F8jlIZIXmw6SldpPDygV9IWzdG4UQbNZcR7Gmz58xP0PkdXxqzx2SZ3R%2FTfe0anM%2BCNMgWU2bsyv8FCnJXMb6fdOj4od%2FOncxngakuPIOBieW36LPqsvqGd2IxRtbLG%2BMR31Oc%2BqefPvTB3m5l4SGyY3EFtmQoyLWw6vHDMlVHqIv673E3KAPPHCcXVYUqtzD0ty9BF%2F5ff8wHxQeWH%2FcFlg76%2FsInYwVGUqCm62T5iYH%2BAcrop8SXYzbgfgMo%2FWt55nowwxOXf6fc1N%2FMJDfqtMGOqUBnqhGYL%2BvibZdslB8ciVV7YRP52HRYeSM6fB8bdGngPRgq2WtMBOqmJ9oSFHDp8Bz8MmRJq2i8inxU32s1ajYOE585vsitS7MV%2FowgcP1HNpwEkXUD4u%2BFVppau4Tc8r1BB3snCAEggNuRkAnE0qRXa9QO8bzbpReQc3YtahcCHHIdwCMOJyv91PLMAXV6gRhbFCalAVSfXHHyBKgGAcG7lcb9NQd&X-Amz-Signature=d9cef8ce76b6fa419ab4ea8e5dc7f02b2ad8ba70c40f24f2ee1e1acb82311a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=2b99ed36bc4a9d718dab2932fe46bedae8a606d701e423c4e4cc71c4bc6ebadd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=91c8b8726b6a72f2c6ba7a6efe4da52ebaa60b7ff3ffe244c0716d7bd16f3be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=5fedc3836be6aafa588b0f3966e2ab52d41019f16994b2c08c296c883236e5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=b04c21db583697a4635b77f7998ae604fb76352a713e83da498ff6d939520dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python "5-5","6-6"
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

```python "5-5"
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

```python "3-3","5-5","10-13"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=31a8d38e6e7df778d0990c47b6a334f29b4d47a7b3a8caf605cff60addbc8180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6BHRBK%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpQDe6zcwgqNbZfR%2BCxpRZDiDOk7dY4Qr8HIfMU87UAiEA7HgIrE2KciYDI8j0wVNfjaFHAXHA47KGJIrxOr93Ov4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoJqwV9xvsfImximCrcA9WLSQAJiYH5a1mwSCbuhExMsuSnlVQ0efetySUjMv8I2lrFQfQ%2F79CAYF8aHTLUp0iWO6nPolD%2BCjc46DqeHEbChn0%2BLIxdYfx7izbKI9H8TpgnTSWICJtZWbRUuk5g9eq%2FIIHsFLwCmcPw%2BopA9dnkCZGtRwFkuJ17z2Z5ElnNDnArV9Cgy%2F6CgaIhwRBsIMFIXjwjys02UCjoQCv888EguBwwns7eHMiz6dVVQYttjP80ChsLzn9aOGstiKOfNVJ2PLA9JJ0tWb5jVuWMwlBYABTfKNZXNIBZnu0feuO%2BI6TwrZY6PgS02cyoDEKgfJpbe%2Be49pf8LBS0oX8YZi%2Bq8hkEtO1Lb%2FP8P3X20W7NpNKGPULfYT4PbfU2%2B4khpILf1buvsY6EQq65GTHJv2GWoqPx7FpQGjSz34%2B6E1majlYOAjXd41H%2BBXfnYzgKLLw%2BUTwhzd1ZPFVIMtht28eJhRHsAez6qtznMM6PjSt3NavAzWLd7fLGbR%2FJYiqDCxFPzinr84%2BS1cSlwoaOI8kt3u%2Fe70vtHPcAzqXET3%2B4ktgZKsP4rKzjlrvA3Dw%2B6LnSwPQbjK8x4vq%2FDGvQCjPywFLqfU7Tji%2BJ5lhnkgCsxFiD%2B1U%2FCh45aA3aMP%2FgqtMGOqUBeVeIt3PHGU9Mi%2F7aTq2EgMyvYIFsG4oY4RS09tK39A2dbKWPq62uXkVR9E6F2ZjKTsbN4cQ9Q5vNXcap%2FFWWnGx769berHJB%2FWQRxE8PV%2FiAhpNWBB%2B2%2FkCSN44ZVGt41LSA7xfphyrPQVOlrDRX7QxYxzqghlGcQZ6F2JzuHLVfkgOPP6RnuA79dRVgzXsufEBq6Xt1i3RnVNzD96m%2Bo1w2Wkx9&X-Amz-Signature=9dabbeced2de6f85dcf4c7c4e268e361eb7f0d333274eb662e1c1ea630f6e3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


