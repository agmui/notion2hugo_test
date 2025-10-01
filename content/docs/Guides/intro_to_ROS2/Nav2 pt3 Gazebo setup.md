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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=564a3d587ff681dc7972ffa10890eb02061300221ed72bf6a16ba69ab2f16ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=c92086f073b52f8df5fc2cadc64a434449d2ee51e29e99b10bed2a6bd266d54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=e681f72d01227b864be06b30c36c4f6bb11c4ba389e82d46f98bdaaed74878b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=85e7d258d6bb25f6231a8812002e05070c6aa678c00fadfbef001d9e38a1d337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJYNL4VN%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCuyZ9vOik%2FEnWiW5VMktrLcinen5Uy%2FAgfplEUbQ2qCwIhAMvBc5ygh7Ngwlq6u3J%2BqEXMiyPHo2%2BUINRrjnc7o%2FxkKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx18zfdtnMFM4quc7gq3AOdnAaHVMk3n2l%2FYltWpoO79sGAsEgyBwR%2BR103PilG62ib9WyKGzQyvyF17V27vHEQVillZtXVmKkV3kDfjAs3yTMSa3suBMc8M80x3Y6xK8PD6TusXVQ6ml7v8YmuC5wVAbPWkiQeaP8jsbfiZ1bH4UzFx%2FW%2FXyUG5dmxJ%2F6XHvPhhceKOTwTvyJj1DEE1v1CPfcjzDMr8T0S0Ckj4RoT%2B1GVmxLqmiyh5wHKbRrslFjWm2M6OK0TkHyGiv2antQ4%2BarGTC27%2F3ZYMHRueXKgU2v9wJQZ7p1diJnI2eBnUtOsv%2B1BM7je2%2FyUwujyo6HLjP8yp5jmGJaP%2FV79HZk5CaCmhnQEndoq5How25JDbWQmKyS%2Fzd3a2LwmGL7gVuAEWjhZfZXrwBZ2Hv6ab3TvUmBCcF7R6Bq1SoBeiw5Wxg7NV9PnHEJmOOvBdQ3OgtpYjxdNLb0LtBvj%2FtZv4xt20W2WCptfZ290Z8bqwGip%2BkWpoq6wD1qEn0X1GCPbF7gVj0EfaGIbPeni1fZTBbWP%2BoPJU%2Bpz9pNKpmYfE3X4OXaClSAWx6Ki5W%2BEOWA5jcPmBJx9U2VkN5SWL1EBRSxJjWD3yoqgvjwVBDNm5yR4niGEmRLunvDjQXRleDCEhvLGBjqkAe%2FouqbnJMK15ov7ctjKg5Oy4x4JqH9yYic0f%2FZRKFFiDeW%2BH1LXNh%2B%2F4ccLZ%2FwtkW9KLN7bf1qf0MrcO206JQyP%2FD9VWbUyJaP54rtbHW6FxacZat6%2BRz3675G%2Bx2E67cziOh5YUO2k2ju9JvDIGSRfgMyGS%2BXqPvnwZiUE%2Fc7clKQbWK8DISl9ZsGetj1bHaqPKiSFpfRUXkQ%2BVpSxe3t%2BOQWy&X-Amz-Signature=36f998eaf4737743419092025aa93f0ede339ace25086dd603e8af3eaec7aef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=1868e1985c1aef65937b285f0d8029bb2a78131b32c754de683c8e2c921b4b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=11c7ddf466e66c029d5672da01349530561dac6da4ac6c641b861c1a8b11951e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=f78cc4c9ed6de6ec36914f4974838bf1a7467265b93876f011b8828ae111f3e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=230f83f1640bd2b95bf74b256d2aaba255fd0d42e170b555e1642eab40f9fd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=b7ab241045761150bad1ea002ec154e37b25c9acf42a7e4afc3efe2a237ad1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJFUE7P%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBWTSrqqMupUlktOvbrwtMMCwHtEQuK4o9CN0fzbKJOQAiEAvme2QxoceSrk27LxqDOQ2e3N7QZeH92JgsXRUkUcwZgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqfy4ygV8uWWVCgCrcA2fAAPoKmT1snuy%2B6gYfelXXmkgHb1DUBTwo2qwDEWH8l%2FLhGrGk5jck%2B6c7DXF3%2FSITUBrm7gTfs7u5%2FrxlrU3pUkZBGxI5OQcw1Adnos75Gx0zvnW%2B9zS8JubdlDYLnlIJ7QM0U5wRmUzi7MeBYpsc%2BZeZJtAwRgQlQfoxXCMrO21hI%2FAUuWCXRwtjUSPjiWeVbqj2V0Y8K25cm%2FihcwVoceQIQCY1sVC1KldetElVPSTkHMT8k1xBrOFIffJ76RgrwkQarB%2BKvWVbc9Y0WjiwaRBVzsVHkYMr5KrPWPFl0%2BqtXJ%2F8bM8b6WYd7MuApDGAPVmWgV55SxDQx%2FHAGvwDiwEg1g8AfYGPB2WSTJsZdVkmc3syXejhBVD%2FFSzeVvXrt%2FBEpMU5RobQhb1avuIjnTUl8arr5BKwFWLLrE1y3RDe8%2FPkfCxeQVOWjoNWDzbD02WgUyI3Ax6yrfdsJTHbPfDl8PSeDXxFeZ5Ti2pUInsiJ3RgUXY6wCZDRzX7bkYC2JNrEP0c7SuAoN4EA1dPJNuhan15IFsFJWVKrkGdS%2BAYUxinTBzl0G3GEy49vLQC5BqXT6TIpBEDt8MYxt3V%2FCA%2B%2Fukt%2F93RqsXdswXT0DqPQ0DDeHpqhF5OMJCK8sYGOqUBZAVV%2F1NYi9lr1FAGEeydnvRgTykbk6evZVcrWlLiF0J7IhcncemHvz%2BXA1r9g1WDPDXdnaZVOFkc5Z2QAVYosgwk9aHCinWW0LczQSTF27yiRUtfyrj7B1C%2B9K1ui9g5QmuWMt86Pvgd9eXpCC8ScN%2BAbasnFICSIQQ1XxaEvJtMtm9rRvtaLW%2Fj3ituVxt5s7ZvGe5Yhx3emPA%2F6s0OdZJSXI6t&X-Amz-Signature=e311a2289e57a98ff060ab879e8b6346b1d3cbfef9f7bb1d2df32a1999e08654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


