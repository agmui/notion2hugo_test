---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T01:01:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T01:01:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=cc0159a4638cf73ae2d36287b3733a64dd90a9a85f78a262b2ddb82cb9811169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=1fffc02b7534071feececd7a32094c64c8b88c986173590c764405cfd31ad214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=621dc023654416efc533a5290f5a9a5306a732661bd4378a881513dc58d45c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=d0c539d78dd6419ea572c86a5dfc56e06f61a669686cb1047a41e0fdb5c221d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: test `fdir`

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
          ~~<fdir1>1 0 0</fdir1>~~
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZP2EC7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEshKrpk1zCsyXExh%2FiAKwoMEIEfVGucfETAlpA8%2FBsAiA6jEX59oKl0n4HAlKAtxedLt7ngIpPstf6xnM%2BxlwiuyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJkaE9xsoY0ZL7S2lKtwDQ9QRL1HdB%2FbeeW4zBb8x3ieUceNItQhjMrN%2B2eekP3Y%2Fv5qOp3jwtsEog5kvkzxkn7HFwlicXZp%2FjSByqTRVLXmSdyP2%2B9bhg8NsXQ%2FYE4EZ%2BCakfoMaIVDAoHMEIoOHLKriYuqHCkWP1rt36e%2FFeGNwi7stsCI52X2ap225%2BDH3LR8MTN6nGTmqQ%2BLS%2FuxECYgfeZ14x0mXaGHHuzA5VYFE%2B1uw7wnuv7Nz6DDzVTlFh8XIQbZFrrMjfbte3pjVVbGNvkkfyck7%2F%2F3VilXpecGvDJFEshNwYp%2FrQX3%2F18JvW6MgKDtKRUXPeJ0xDoRY2Ib2PWy7ErIqwKAoD5vKF8q1KOLcUul4J4qRgpdXh%2BlO%2Fom7BEuezrYBKhMc2GRnFLJbv%2BHVmB103f%2BBO2Yled7%2BDsnEWzmENiBUQXoOZ87EsThctSLL6hyzC8R5yxSRfBC4lfX%2BleI%2BRPJTL7DOMnoeG7GRF6XXem4tMy348mYcSmq2MuogyqYQsjAi43KuLf%2Bc3GXgXH6Btyi8MrP%2B6992uyBevgr8A95KWZC94x1sE26Lf18tfzLSiuSkKYiU%2FLvuYPd7jJiUGDgnptSEcAxDLF1W2yc%2BDFwwBwcvcd%2BslxZpjzkuCmf32hMw0Pe1xAY6pgEtMj4mfsM3jPB%2F%2FH%2BOqrv1Eq9WGa654S7t8uLUg8IXxOvozyx1P2mXhdu4XIpW8RS6wVJiF8C8UCk6EdtxdAOBqPZs6ABeip6zLJjov3bwMgHDmUD%2FQq8wJT9x52FzzklmjV6zG3v9LHKAlpM2mzuVMem%2F3hVOhvMBrBE4imcH2n9OJzLzYOrGOh0YjtXbYdkR%2BkNVPOkc8%2BxiAIergegyWzWe7CzT&X-Amz-Signature=ece0e4ffaa99fda51b5b2894e329b2b97f85d59f73bb5d0e390ce0a0290dd525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=5d35ed934dba3c7a7d319788062d42233e195bc77daaaa8a269ad7f745cefd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=2307deee883617d3747298c7cf466c8151a73f6c261fe0c4ff9ae711eefeb00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=b3bf18d11ee7effacf9789343a9acea682b9c86f268cf9cc07f02675a79d3926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=0b6ec89e58c3cc9cf19e3f55b1071fc87899bcd06efda10525cde49d3a07dc22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=388dd63fa3d16fd8af19ec2b95dc9772b6b79100079f9e25a5299a07ad3cd64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4LDCO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLwudVtro1YT%2FHHvL%2BKs0uykgdIzfELEPwoMfQ7rzfUAiEAmwvZb7V%2Feoc23RbaFbGxwzdH0R%2Fn1zQAUJD3Qi8AQx8qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2Fko0FmMczOHHDN%2BSrcAw%2BZswTObB2cytz2BwMvOjCU2BB4AG0cTR2IXCwfxy2RPyNT44ZP6bprGkpriHA%2Fy5bESGA2u9chwueGpUaG%2BM9iMbivmEILztnKEFxrmXwwyqlRcebgajWlp2TUfWb88yWhRyNHuSzkCQy755KqlCzUmYFkQEJmzeGp9bblkkxrOOXAduqK3zVIRyVeIlVAfkaX7HGFNvhbkYTvBvqtNRdgQn2KCNUSlkLk3IF2TChF5WGC9DjeE7QDujKe5LH3oVvZ0WYJn8LOeAvN%2F2RBZBRQJlqCkpiEI7l3I5AIDH5fM7E%2F9hYFukCT5yo%2FrdaRTkvUAHyfIUdW%2Bf%2Fe9w442eevv3PNy3GBVIMs9OgxbQgs0bm5dSWtJxrgmY5lIT4BiU%2BssqLGE0pf8PC6ccbn5xlPU3j7Yz2qRP3WkP9m2ibPqIBp4kDz3cWAVzh92IpdR2OpvwTO1VL8VF3NMghbmSrh9ndm00DGGq%2BnEI7X%2F%2Bu%2F86uqUruYRd2Ax2RCIajvJ8KDtFqWLCxRpsnXb%2Fbb39sMlZ9%2BC1Qw%2FFvVoXMAeRpO6aMYmYyqp1yYbasbWBIF58W%2FJxjiIWsw6RbTMOsiRsETTB%2FJsYCjjIRk5GhxRpLEVBs%2BaiuXei%2F469eMMJv3tcQGOqUBH%2FOGuZFMZxAHQIDz4VX1WYgQTJbezsXXFr%2Bad8ICeBR4keXzbOku8B4qUpcV9VkAVs3rdOXyibE60ZVKjQma190XcmksA8VuqoNTx0ahkdLBjcEJsCbBFxmmukKgX8gxurCTm58izsFGjsyDwyZFtYC2UWy4YSWXez9ip19hffSMMQR3PcPykH1XRNVmO1BXTdHMfaemvaGVqhCDXu4sggpVCNQo&X-Amz-Signature=6296605d74ab46b43bb8f7e8da5bd8cdd8e7dcb0efe6ec72efbf6769e030741f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
