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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=f00adfc3f6e4408ab63046760f4495b8916bf299a85e815c0f054a1a2345cb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=dab62d94a9fe3f7e0a8e850728c5124d567c5890e3ca3ea6d51c01080074e7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=4298e9652959cdaa0f14b2768b08d908a7cc3f02ecd877194acd16508a69bf21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=df9a9b78ea3427aa6ef1ffb8a871796c740773fcd05f989af43664e3ee6c7e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZP7C3AW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFczN2MPalRZKZAI09Jq1a7j4W%2F0O9gvM9HcaTmDFwZYAiEAlCATXIqMz%2BWF6fzwjYyvh58h%2Fp1CK0QA3Qda6U4rGW4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL39zSa3VE%2Bvup0Q2SrcAzSM%2Bu9dZgcT4qT0QxIReF6KiKvNhsvtjmKMIxFcZtcF6AgjJcc7CP3wwm1wTWVavzkvCbEVATZceuNO%2FNSLtj0AwJc07KNuxhk8qOiO9sCG0vQpc%2F6J4jozV27dSKY1GYRvaqcqvUjddeQz8rbjQ38U4ZchGa0zsxVCJUF6wQAQM9%2B0eXwPtKN3MNIGqaBOfsLHNv%2FHh%2B01AVY%2FZJYTVnkcRQbmG2QsMmjhfcqHoOHMfdAxrZJegcpkdMQHK0rmENXgWFjq8SSD7jjcjDXRmKvCvnwaMe1TDBrl80V3QcNgZr0IQMp3fmTlEFSwjkkvNkCJv7hKa8kOIy7T5gDRZhMICKzErLKQMHe3usSFSSeV5bmPPSNwzQf7NGnze5Aa1vPlvEAFucPwj8kTvy3x%2BTaNx1KaKbm2Kz1Dpgp%2B0KMwGeN2Tgit%2FGP354QyIp3gv4z1zEffJ%2BkdHzfA54kyPndzQRYImMch2vRm%2B%2BJMKNIShf%2Fw%2FnhuohKwzVUydcPFS7nrKxGXG73ZhlWpSNvfw5F%2BDwOqfYFEV2bTbafmRGFdV%2FN6dDEyvdel7iQymt3%2FASzV4d72tGQDc%2F8BgW4NuiThQ7P4bPgfqkUZOEzvxGSD2bCkjJv2efB08eFSMLvo%2BMQGOqUB%2BqYFDGz99je8T52DVzFq6IoyL2VchCPOX68yo%2BVOz8lM7T3nPxX3ZIgsjv3gTkR6h1WpdsOQrxOItp1B3OsToXCV4yQB6Q0TVStTdGTEOllET0RQY9Nc7QnfxFr3qrjKpABzlC5qK4uxYBlx6NcPkLM7qWKJNEk552WVRW2IZpE1SKWAE%2FZZzjsb4dkEwj1uLiBym9vUtAX%2F9TQSLXJ6RZYWomht&X-Amz-Signature=e117a93874621f78c6c84fb2e0ad68463c975b23f8b5e0203587d8b1e9a5b2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=7401f0e8f352ccab1b79a7bf54cc1f6dbffd13cd92927ecbc4ea12fa0182ca40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=f6714c88cf504661062efbfe2af1b7090399b67857bad21908249d768cedf9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=581da37c4c9922960eea19dd97bfdca6154abc6886b9b77f4cc0ce947666b567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=17d4a37e4bb39b854eb360384f2eeef58607c95f0a45ed9f22afbc26f46a9b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=817ba63a75f0b1a8089dedfe61c7c9652365040c12256ab2f81226b3e2a9f98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2D3FE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBnLcaobV%2BqpO6oWi4uyMd3u2KC7pehurY65Y6OKCVj7AiEAvUALqQm5O64Up3yRfSrf76JtfX0o2Fi%2BvezCcXg7YQkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMezcyCAqZUOJyzxZircA4WAOaQheqltp0xpmJQiHZSOY8aGosQfJMCE5zAjzPwETGyWq8FP%2BJ94ojVX%2FSDpYcIvI4e%2B6NRiAGZUW25Jyiup8w%2BOG1l1xTvt42VmCPC1fKBJ%2BmUn5Jl%2BjW0tsI%2BCFyghxeZ5LuIaiaoz5wHUUfYbI9WafrFtFcyNCrdfDaZiNm4iw8YYJlVA2w4IHRvsvP1s7hux%2Fq%2BEXlsf3Vr%2FFADoVcDaL2HUkHYZ8Ob%2BqUwZUzuiBKbHY7%2FMfM0z20FBxoLeT9WFuivZdkVCWZlp3vkvamPW0xvWTbOzo4NXYTUHcrFvxH1q%2BWXqEyZUyMxrHOlPsahJp8MA5XF9xeRYGoLh12G7VqnhiGc%2B2FMxT8VgYbWEFNc8DQL1Vd0SLYDec3JYFGeoDt7l2GKRLVMaKwArlE1kzhjc8u5s1D1cLErQFl92wnaJDqZW4k1RloUckRR0LCgj9y%2BDlez035XDN%2FZh5YSLxQkio%2BJGN2bGY5dzS8%2F4uMVvXSpjRjDqe304e9LK%2FBCVRPkGOmnre9%2BwSIIk7i8Qds2yJZ%2Bb15krk5ouO9lGbPO%2B3eeA%2B%2BIBt6%2FFgZSRsz2xpvOh%2BMeVXpdYNKJfeNSnlvJjm897m8SkFCEv4YplRUUuD3TLxegfMLno%2BMQGOqUBFp11fnpZf%2BzSA0wSMNYpvBOxHA4ask7CQ%2FXoZe5MhbelNPKTFPNuk10Y2O4UC9cm%2BIIfmCAZwPutaxQPfutGFA8MdQjY%2FCJGRm680jpR3KW4DLb6rJkaaNzIBRVh%2Bzw5rdjWvjmB6GkmZ%2Buivuouq3TcCtnYdwrS7akaRgN57a0ZW2bKNLzIIW1kwEA6ZlvrVuqj28u%2B%2FyrsghqGnNYeUssftWCv&X-Amz-Signature=808da13de510520d882fc039663a71c32b72746a7613aa744a5e868b249956db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
