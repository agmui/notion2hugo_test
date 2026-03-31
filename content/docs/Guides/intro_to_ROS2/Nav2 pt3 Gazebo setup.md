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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=f9cd5dcd33be10a6054d375104476f68e7252420bcd3ad65f9e0c67b579754b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=4bdd1e365be39ba3b3cb55914583e8b9a860a77a2874774044f93c670bf6efad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=65f4aa0a5c358f179db3cd991713831d2a9d5813b8a610942c206f73e49be79d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=d9f6f59438e1c20f0cac2dee63c2b5772c2e1cd1320ce4e1ad9d1e8a9d0987bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGQ4IXQ%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCG7ey%2FVDPAWyio7FuSnrtpXUGQ3OfUsMvBdf8XiZXVeQIhAJS0qVHBfs2oOUUN2rVp9B%2B2vbcXrN1H%2BKscCmYoGm7SKv8DCDIQABoMNjM3NDIzMTgzODA1IgyYsjps4jxfKAyccHoq3AMzBqQ0EyHdRRubQhdA0U9t6V7zUzHKIk4rMNQmhGeXs%2BX2dRDOtRrYNUEOo4w2tKfnOLis9bxQ026DSAT0PxZkSSVulsZn2OIT4J699utRCCyBeqbm6NlRecZG9BhqqiKxewnat1puzE%2BO0VeycEg0NDxbCIUvjR%2Fq3oFedvsnv11z16mqTrdHlounAdUaVME8y%2ByY%2FZSvy600Q9eeCXtk2FKcUpVjRGvnukaczgn7hfsVTPo8kiG%2F094vxNRR4b36tMOZOwdOu%2FDXQCsQTaf%2Bl44ETbF%2BaA9vfOkUOyyZESZDpU9yEL3seJwdBPfnFqC6hbXjV8r2GukRUie9qHv8KKVOyk9qWL28LgUohpy0Bovy3toUXZKBNxF8V06wEBWIs2nn8dx7xQyQrV2jp2g0RonZfEmi43DDYAv9SFv7zdNB1f9I9Zbi3ev%2BW33SroZidPY7Y2M5LuLx5gfAIpCSUCjsluwfmMr81qA%2BEL%2FjPF2jK19TbKGW4QNofIDBW8AOLCUpoozNizU7CziDqM9WNeeVLjg2syN5Gv%2BQaoFWdPsfrtCfeWqw3c%2B0qETCiSyJ%2FgnSsHOUMnbRGrHkYClPhuGioCcBE97bZ5%2BLuRllDGEXNQ%2F753qdhr3sqDDau6zOBjqkAR8JSDXXQnbJn1VputKSDJspmKu56QoS%2BGYPdNJX50ksP5s7cwcSVirlO5EhfHIVnSdQGzWcivvasd1F1%2F4fCeNj3COAffCppPM0mkmwZ6WmIRQPPdxQpv0A0%2FcUa8ngoijgC9A%2BXn35aes%2F4B7D3BoRGOOxpmyu21MLvx1lWDHlkbfoy3abQMjUXKuuG2Jzrk3c0LW6Kfo%2BSm90DKG3XSQU0ku6&X-Amz-Signature=8317c7c71ac0735496738de4eaacf7c04c80a81993e053ba1b9550b2baad850a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=329ab62d4651e1aa13d6f2f9d2505618dba4f54f9eee104487ed1b19bd46e151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=82f7e6ed4d7ad017ba3b83a8cd095e930759bc8242eba193b7941419b355a625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=d8d0c4dcb66d98e16ad6fe3bfcd2ffbef5ac44579d99d52d167c59469d9b7b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=4b68a29426433437513359d2048381bca8e30447a5e10bef5262182f4447dc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=7b1dfc018f75a97bdbbc264148954ddd2f3470b2b480153da2237868ea3bad51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VR22KFT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC31FPKeOL4ByVYUg107WMlgKnB94Gn4cN6I55HmXV%2BewIgSRQDPVMBvO7Q5qcmJOvQ8MCyjPj3hk2Bag3yXbSpG8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHVtnNZKqbq6jeIamCrcA7jC%2FhCOwY%2FpPlBe3z5CrgOLK98%2FKG1f6JaslxHTAW7YPzVq%2B0A7T5RkKJIaySK%2Fqy9xml%2F6TllCfFYhfQplgtqh11DSh0Xshx9dMuZiSWweSKW8so5PO8SPsbyd2wiM5N%2BaOZQeJwJF0N47j1%2FgE%2FWeblhJIsijnRMxYywe4Vn9n%2BaOgN7YiYwOtWMKZqCxNtMbf19AJdQuBpKJygAq6DzM2UHsPbKaKFgoprkNOYbFWN0vR%2FL1COyWrCOtPlkbx%2B5iswAWzA%2BAsqGtxTJTzu1g587aBLLjmSm0wNviJfW5rjxmYmyRi0VjuzASaGwroD5U5yvuguUsfrR1k8q%2FiGzesQJFbEN37wRo4vW8zlKxNaBFhJhffJVpT5AJutB3DAPuwnOyYGJlrUdD9V91kiLyt9Kr0%2Fpt31jw9nI6qhN46xhH13VnNXyRmkRohMXPI4%2Ft5xwN0Jyycet4jKTcwrG7ZLSw3jVum5jumBofnuUeKk2jyZeSG%2F12ru9grgnnS4Dak84qHiDY9vpz01xs1qGQ9hZAiLjW4CcQ41XRuUdb8j67V50gnyqbf24s%2B2kcjaeiHZVvtxtQ19AGNhGA0c7ZG5%2FbSZTlEoaPGMA7%2FlJNLuaYBny2ARM4x8rFMI26rM4GOqUB83N%2Fls%2BnNNNioYdKa1fwCML1B2Hc%2FW3GeR7UeQrBIuYSdKLJ0EeV2G%2BThOhbKkLGnEiVhXEtSV3zjs2k9FB5OLKRtdHglB6AEXh2H%2B96TUBs%2BIlkora%2FGGEcnMRI2CQXkiz8cCCgtZWuIOH7cKPgfWwZHk%2BkaATiClC7OPcB%2FRKCFHeCr221VjjMMjVPTHe5Dqs%2BWeehhTejp3JrZtSsaE%2FKpr33&X-Amz-Signature=92057c90570f03752319155c43ae5ea4c834905de4fd8e1a36ef2049c7607c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


