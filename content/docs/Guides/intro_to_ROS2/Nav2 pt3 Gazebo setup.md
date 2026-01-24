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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=0280f4f4fe7f31c7b0b5c297d355f32d93074e443c91feddc120bc30b5f026bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=0e233332801a88f9d87c3ddf15cd294ef872b9b8b9e20e07ff047242cad6bea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=c0b5da79332af314bd4b26c3f8e5be228151b87abe4f34649e987f902c3dc961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=6d03c48334bea86f105b9908ec1331b0a48899be9f328e08a994868364ab29b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF54LCDZ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIC2d6N%2FE0cTH8oEk6IZX31QGJxtZ07QZhYqq74vUIVNeAiEA1ZN3UD1zezZX3v%2F1rBa9IH5dEN5bw3MDIcOQn%2FSl2mAq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDIgb8N0zI%2BbA5P31ryrcA7lbiIzD1RXyftq2FfEu0FaywtD76J26mNJ573elh4X59ycRToMBf3syHIEzAmVeDPI5zzDrCrIyDWhJcrunnfckqhTGrCsBHnur0rJ7CzDHtluoI6La9yMaRX7z9Xoi7aQDLUY3BYjp3KuF%2FXKOnWR8vyJ7%2BDxbBjqAaVA8R34NYFoDB%2Ba89By1VZ7DJaSWQoXZ21s%2FffIqaBFXzl6ER7%2Bwz9Tl8hmDSJALczy4UgHtk%2BUZ5v8fC2menFXSEVmgfA1ycosX%2BbminPlQKEYFFCfleTgfJf0YPaY9Dnivewpcy4rl6youGz539z%2FDDuD7URZDaylk3c9IlelGNS5lzZVSJB5opoiOUn%2F%2BYyjSm7skPw6aYux4ZCHbcFsfxAgsL8wv9Zz6Wd81FiZWDn7JMifMhquxjibgydubYRX4SV1KTHzy%2FJh2VG1IHwaEAnzvRd%2F7bQcIEX4beJxfChkqu5Xo36j6LCXLrahvN3ywpBvReNcNEtolH83hrKa2jMS7IhEiXCwAUf9zEVlw65ak1d4e%2Fpp3rrjKGMvshYen%2F7IwxhvEWkleRb1CPt6UFiqihSoA2nww9%2BWoDYzHHTGv8wZyqvjwiHsocxHrvOq0XYsRy3vZxK9NvUFbFL1dMLqr0MsGOqUBt69QHKakFnYkts9mqUtFmsFp5kb3YgUOLR9hUFyJYode%2FGPOjaIzJRnd2yx0d50%2BYa7O9vymuU5EgvxbYcNnWQmGnlWP5gBODK7BKVLCLjj6hKybEHtpxManexOjjrscMdkBfMBzTE9zsI5%2FbKWWtTcCcS%2B45XqJoU8V9HiVENR63Il47oyL1USzU7aBBCkyeMosNzDXuqsgOtavvIwI%2FPrle5m6&X-Amz-Signature=bfe8910ed0f340e3acd6c88283072fe3b465e79bf852263bb16bcf99b121eba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=aec9b6818a2b240fb6f4e8630489b063cfc2fb01398ed04a515f67799d5916a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=dbb63754519ea91666686796d104399a6413039848da1828a48979adab4b7aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=4d3b2c364b2f2572c37b79a71b8fc0fe31ea344c7f73122cb59698c1616f1392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=3ae94cb7c719a6328ed9938cee74f4ca957bc45412bcdd29e655b7317f843e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=e85a87522412f3c8baa44f20bd54a0d95a467d858e8d40ce0ffe31fb4b82d1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZ56HY%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIB5nCzgrM03yPDkL4JcrjMVO2jhcIdzNzrUHVgz4sulYAiEA95UHwRVDgZLdKpUzmftluk4LprPjCphr5wVGDM6FLUMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFGOoRV6322raDYkOircA7y3YuY6LunjoZnKDuPhiLKCWs0sKaKuHDypj5MR3MTyahQcvtYIVKDAxL4aXiGPH3i4qIwpJa%2BoZ3OpHsBWjHAZlvC0cbbyzPRcxHKL7R2MK0FClBwURT4A4WJ7uVbCD4k9qBp1nDt2Cu%2F%2Bw4TOIEqIXVuqrfpHcRt7plK6i00r9sVq29Iu6KGVEAwJCh418a4tZ8AyQgmDxuyRqDgFPvUPg5PQ7NYYXmD72j97hbd9KElvrDHCbUWFSaryigWH4ZKownGI2QXkZruhkmxJ87HE4nKMo6dG7jOChqoq2o2klRLLlryWEbkC%2Bzqub%2FFnE1FPus7zcTn6Gor2%2FkAkopFLpkSazNUStMykwIaPnNIaHbH0IbzqCKWfKyb5L4dtA1CsfG08tbGpHCKw%2B51LnP64PjC%2BqcnMlVqCGmmmFR0phowSNZ5kIfiqbzQvVIzwayN18invEAkHSqy89R%2FZS0WfMldonJFqwtOYoWvThl1kc4YGipUFIcXC%2Bx%2F87lLbwSHVo4Y7pStRZEKpIpXfl75CR8ubfgoFImbZ3rQtgreVC9TFasSZHxxPm8Y6MhajCahRstH9xMNJv7ocEZhByGa%2F4s69menq0HMdWsX%2FsFL5xX1mq1yPhd2HmF6%2FMKys0MsGOqUBC0hrFDkDFteqtxem%2BxvFhZnGpnkG0m0hpAIimO1yHHJSoQ25lij2g0fEgPVZhgzwwoTH3CoSUkyRGVx19Ct%2Fh%2BIJXQafGZh1S9zAkj39rHR5oigDJxYeVXm0EebK9HSiIW0UFri680j4HV7tCDFrMwRGrZ5Nu1DlIFDBMu6fO5KPZzRVRTUD2iCjHQKSycmWbrbempzp2fr1NsD18KORq4OuRJT8&X-Amz-Signature=edaa27b1707df7c3b2e5e860073272483ec3336f167dd951ade3a0321395676c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


