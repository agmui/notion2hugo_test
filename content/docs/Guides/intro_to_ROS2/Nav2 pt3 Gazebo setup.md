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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=ab45e27404ebf03d7d912396ac777ae00447d95af2161dbc2e868a8654b3cf47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=4b1a5edb8c2f56bf8d28a53f41b2c9e5ba98e2155cdfa969444ef0885d8e67cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=65573c3971e92a757120683b60828acf3b83bcc57bd2d25ea940b95ccac21c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=3c1351c8093ace4b3a7907784c52f88e29bf33070f9390c468233295a8a3b19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKQMIMC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAoMd0tH6q61VS3PJKIHJQUJtffu%2BKghAjwK1nj0Ofl3AiEAvli6NYdb6BKxYDULHpBHPP%2BmFi6FvZO9SuXnx%2FAdBd8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGwrZ73XxuphTIwdVSrcA%2BJKPHGbJfHGemrLdd3bQpOtsohqkQxq3fijxcOLss0O%2BebjOgERapsnJIXnC9F8t6%2FZ5iJhNk0sfeJrKBpE8qDRj9lRneT4NzhvnAvLhS4KFXkmgGK%2Bl0QF9EV5I3JUUTKXY7FrQmfBDDH93DIFSTcavAaC0qVO2XwDh%2FWp%2BMeblwA0pGGbWa%2F4EA3PnCSX%2FWd%2FDUcAm3HQQjO8B48fjE8s%2FL%2BDirvhYJN1TKThtX11WRqDFu9sTIptvvEir%2FuVtPejlFxrS%2F2aB%2BwWEyL%2B86tMAYzBwNoseAcI6qhcbKSDd1TRWEKKhbf8El5CgTVpDW7AMGuHepUGdjU%2BPOVhHzAl4al8xpMsert7f8EaMkpdqEeMX9HblxzGaJcS7ayblC7WbCIO4cYKcovuLmbL7PIPSdPEa7%2FViI8lokHYOymNNymcgV8CuEx5hKCVgKYBAJi0dOqlWrZ8ClaLwVs2teP2J3jxF%2FuWHP8h%2BCwZp3jrusCksUviZ9nEeWUU0XIh4qeHbCCmFVTUo9hH%2B%2BLWbwdWxO7VSw%2FHRWDn9ElzclafinRefKCofKwS8%2BmJFO3YEAuWeq3oSchJi4vKy8h92qudNF1hWsNGExwaxdzEnxw8RUwEivqyLJghdcrUMJ%2FLy8QGOqUB9tJPhSH7SRejLiNkrikH7OcuTN98m8xGVCUyfxFS3Bm%2BpHMJ3J1Lzz1DZQNcT%2Fc9KHXQiaOdnFIyj9opdMsitxZaTT%2B2QlUyRQGgZlhrsRCr%2Fe8uJHaa3PU2N36H6r3fAFnZrCF00EEYWX34%2BAdqLFaF7AGhMpK5aC%2BpfpQdDpvRySMQN9buwqhfym7CL7rXumd8geRP7HUbaB2FBQ7A6tWR0LGP&X-Amz-Signature=88697ab14cb10749aafa943d95d351bffb13eb1370bd41a2775d2c0b2b76f9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=4e6ec1510cf345c54e3375b2006fbb2fbd602717ef514ea4332970f51b463a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=c6fd4297627fcc6008e3806928f321cb6485cad6a3f650818b72d4d831eb516c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=d6c1352e568e061f761c45356b67c33b950834b0927772f92634e4b61271a1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=d8ed63e93d49eeeb98101783948bcc17e7bb5332936c7c8f0090205783dbe2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=10347361f1acba90f4abcf501b2bac7a435e7ab72e56453bb4c741c1a1b0a141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ7LMX5O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFaTULX%2Fe0%2FTATR7ZnCm7OOuvS6I35ymelBlrtjMtYNeAiBj0GaGKxegN7sxMsEjatwNDwGD9QUZf6eNLGd5pbz7ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMr5elhv60PFKCpY57KtwDUUc3%2BUtXTv4GrFlJPJg%2BkSd5SVhyk3l4tDDRwvsI0u3wL9mUh6SW%2FOsYs8BZK7cCUutWoc0vf43gjyIJFzYW5iNTE6UFRYGnLmAAsaOnETP839lXHv1ndlqo44sYNlaA%2FwJsLPnH28kndFuS548EM2qsIHWiEx%2Bgd7Ql7JAKe3%2BRFGTljazb7lcGxY%2B%2FyOWVahlyqfTBX1G3GebMDDwZ9cVJadqnfmUlvsZQAuIxhQUSwrFXMZ%2FwiVnKC9jPJkVKpa7SYva%2FpLle8TrmWpsy1GPRbdh7jtQtPwhmrm2OFIZDwkWtkOQYAadDWTkJxAICoF66hPs104SLvS6Bun6d2CcNWOq1PKBSCJDKpikcwLBcrhrByPRmZu8Gl0z1zrAKjJlvW9NPfNSdokNppCUj44UIbGD2EgKJ%2FbKw4zb0YQZil%2FOEOfCafZzoThyiHIG3JtW9kM0qJspx%2Ba8%2FJbGzPvaRdEpL6Yv6b8yJPer9BevKZzXylZFDOQ%2BtxquGXwgh52K8hLrlLtmf2yNl1RTTXz%2FzEJOqUg5ZDjON3KrjjeE9l5YOU%2BF0oGnDf2uDFV5X8FTf%2BKf3JNMGu5lXv2j0RTV3u6l8tHrnwGJyWy1k%2FyQKlTOmVtAvu5ghYbowncvLxAY6pgFRu6SEFZF3XzNraBoIWVhUwT%2BKwYNSFmrV01I40NpW7sA0KNEHEuGXeHw%2FlHBz1yHNUbusL2W%2FNDrfaCQT0%2BrSapIZUboJwIknfYlZe96WxccGAuZLpkxoshhP7H9buJCHvAf8h0qZ%2F2VuUB9NpaP1%2BJsLtYdq8GbdVTHIo5Qc00x14QwQQYDyMSFvJXaMkmWQ%2BjMIflbg6XeeO%2BYEhjUHHVXSkQXK&X-Amz-Signature=c6b044574d6ebd886ca60f326b81473babbfe8325511f66f8a89c1220a450160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
