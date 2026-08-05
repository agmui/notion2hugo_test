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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=d11bc0d9f6dda222a25abc4e8fc3321a63d05a1320317bb629198f0647fdf211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=c0943da16da17fb965042aa831ed1ba3939ec1c0e00030bd95da3d423ba9ac14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=01f826db36448da6192474c0b33b3e469c56601bf1fbff98748e8daead8d58a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=528eda414bfb1b2462f118192c3e714181d0fde8c141b069ae5e19246d4ebafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THCEHLEV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDOaF33N%2BvzmOqFq%2FY6nG5zV31iieSKaOtHF0Lix6ZWbQIgfCJhlFXorsInc804jgvzkmYYy1BxOR6TF1%2FzuPXGpsYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEBHiuEa271umGqRhCrcA7Iw%2Bq3l6MK9vpXjPXWILe0RYS76EZsW%2FbO2yjrNa6BBQTMqHr%2FuAByukehM1b%2BzhvwEJuEkTHo3M%2BBcI%2Fx6m%2BpReooTETmlhhaFjQ59BLQ7%2FzDlo9vNW7D5P1YriB0vBIqTOtXLlsESnTwNAdRFsjNHOWvdz7DTtUfHhcDaEXuG4DH1eOqRmx6sSoD3QgnUwtzRMMZigI1rme87lUnQBdVUc5GJpRCcbPrjnwbjVOommpfgA65UToU0F4TqqOZp%2BeFYD%2Bq1N%2BSxROqXrgCH2wnlQu6yp%2BKOKx1Xn4RQgFXtOjFydOOfqNJQZSY%2Fs%2BlglGEFkk4KQAyS5qE80s3g252qfyLakETMOecFMs4uoD0f9ZqeqH1id%2B%2FhFlR7459emlJeuhvXWOpCndrPvs7WS3MzmepJ7BWKzS5QNE%2FOwXgdfPGi8I6BPjEAitjZwLcrpxzXALx703z9V7zjGWkjjkcgtpfjiZrZeGVgeL%2FtfCc72IS7cWFVIG%2B5DcFzhxHgAzJw6zsAk%2F%2Fray8CJoO7Jsd4CtUMhtIIR%2Bzogk2UjIkJGKDYIV9CuKzBn%2FDAF8WC1%2FqBNiQsK0C398ONdrvgmbIuwJlv%2Bst%2B4W662%2FHvp%2FgBcyqIaihZEs7%2BrMWJMPaUytMGOqUBEj8k1%2F88RifG%2Ft6wC0s2DMg6bsLa7Qozl4SHqtsm%2BSEww7lqps7vGLNx46o8IiILn7BFbhuBqHAoiXB2bngf44hM%2BooVubQLm%2BXshhXQuo5XnI%2FCPxMJWtZFcyEnL8xHlOKF3hyCfGeqP4PxyUaDnz8i0JNrZsjMrj2EtDvvtJq1nBt9tiBNQOKWzNgKE64EtJ11b2r5kg4kSD6L9CPyI02HHRSD&X-Amz-Signature=cb4a3168eb49cd43f05861663352a6924ecc20683e3f98ba899b0a4aa8461884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=f178c36026fe74ab1d8249db60bb00b6f8257b35c2a9686f8aa88128d9c0e505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=197a5f9d966a913dfb1edae98f096f0da81c8b304d6c80ec1c3049207df59cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=98c6c341f80568eabb86342d54dbcd4c521ff8cb20ca142b9dcabfcb1f1ce421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=c0e20d8a1cc73630a3149e0cb7d1609cef99dec42e52af8c48bd580e7ee526b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=573321b786e8509db3f1fe4a23aa471ec605974782133301ed945abc1ee69691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HRY3ZT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDnHY4y8TF5538md5MgBomcRHKzI86NKv7Tprca3jUuiAIhAINljHQcwcRaLPX1%2BZrtgU5hkDHJ9ae5pXdAmqO0e3TrKv8DCBoQABoMNjM3NDIzMTgzODA1Igw5I9Tw3r8CyBUy%2B78q3AOOAiqXwde2CTf%2FPadWabGLIvaVgB4nJlcwmDl209nw7XAiXO8jVrhLZw1SXR5z8MF%2BKHNv%2FqVMAQBWRwpnzDzK5OAr%2BZ7LCrwIum3GWnnOC67gU53Rew2sRYBeQvhnblNi4jkvNSZa%2BQT4GxzR1lCCHHzVWVGrV6z0fmFDEdKupWGpbttJLmllWRcE5ESm%2F%2FAl%2F25yJiYZ70N%2FqOxgxoPkxSryL7FXBtYTKZJQYESjnYxUu5EcyRY%2Fr%2BcHiJXZMAuqIJ7AUx17EX%2BOHuBXurY1ll4s3oTc6smCi%2Fjj2j4TFqzPWOfiKdp2q3bSuDN%2BUscZfjrjVAcX%2BZ%2FyT0j3dHo7JGeO8LZfdC1qxCH%2BaZWh1J%2FVPbNOXSg8lrk3iXchB5Fw%2F%2BPfM8wrPW0lw36zH6xFDWXar3UA75FtsFndAitCjhm38JAzeXoUQnTYIiB2mTl%2FSG4bN%2BnKzbPiI4gN2hIrWugkYILjdz9Fs3RRxITf8osQUYKkHH9snQqLutX%2FVDdIfl9vr4BHkNQXUYQo15%2BY1sTIJCTXfebiTqlR1tKq4QG6Q3ZtYMFI87W722LXc%2BYAO8vxViEwf80bJXJtlGdzrKCmZNJZp5drd0HdzMcJ4AJjSlo0nu0mNXSe0TCel8rTBjqkAUEn00maTWZa0rGvRh5pFo8dkZ3TvsJ%2BTPfb4sNfCtxofr7SdpgwkiV0H%2ByzG1wkGG14DX1zeUqg%2FKAYQJd%2FkdAOQTPfgUaHmMDYql8M%2F6S57jbMMdZMejIxcyGWyYDG9oMnMGwtu6GdQSnNSi7VPge2P4M0tfyZtHTH8gU4QY8g0vEAdHan9BZRpg8DBHe1LmcHkZi1FXGfy%2B6pPittVfZGcGQT&X-Amz-Signature=319494cb54e665f8d81fb8517802854debdcbaa8508a3bedcc9fccf7dd69ccfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


