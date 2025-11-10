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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=2f90dd60e2d81d50de1ad52047e05a360c1e546fd15b578af9c98bd503ad12c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=2abc3f88903d3539f37aa1b48bcb6f9a1212fcecb810f5834cfdf4f1685b6323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=a2afe6eac0d1fe4eba6d0f7b7c5dac18bed3eaa4c10eaab0568ac58ea39853dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=2180578caccd4deb69d464776eaa3abb6925d997c6a3d46e64fa1c0224569633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEDD43YL%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDR7P8PqTw6Bm9wLsUHhN8JpUBAzhzpsUH7O%2FNfIVzEugIgK0wDYfJp1qAehXKbJtKZlCytzniCzmrnmaVz%2BVgSzjgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL6D7ZDAYltc3mgvCrcA6Ul74QSxLgukhSn9Yx6w8fX5U%2FdnORR4yKaGLufA7iqtUW7TBQCZP465pMKXQRQsvffsY1MdLDARW6HPULmdS8t%2F6w%2BCabaOwFQRdx%2Bq8GkfzcIWsllSB54KBuyMH%2Fip9jLx65XEDYu3QdjUA6xhnWxs1h6WTGabSWLPhi4Noyy6N8GEDAgG3FrVIkkm%2FrvsvfnTX4poDKkbtN4LsjppCSI5vNjtP2NDq7z%2FsZ%2BWBWo2TwspB0nOWTxSev5QJDAAJVPyg2pvmpRTcHgY5dIG4vN7dIFR1EpAoaSdO7ByDM%2BdoYGGK9wenknbNznA%2F45beiTRKT9nB6hyo%2FvONlr%2FRxlwEY9b6hPwqENxLMCL2jNCyu%2Fdv9oaI2zlB1XQlLs1fGJFeoOkL2iS9oWl3mxdaBBTOoTrHci93iUs%2FHHcIq1rerTBhS1vQxYcJ4lTXhYAuURFqQVmR%2BADOoDbIp1w0f8Ow9Uqi3GAqlsoeKvsRddHbM8Zczg8VuBTRhIV53gor94zfR2Sbt3Oei3pTAuzqkVHOM0ZXJPDo1gPK8rcVce6xF2cOQoBI5YMAUuGXWsrgz%2BAV0bstbBE%2Bw5WtUK1nM2Z6ProAAGq9pLSKL0N6IIN4s0gIuf3sbZSpeJMPW5xMgGOqUBaDu%2FA5LsVqwf9AKA9IjiyFr%2Bxx4mxMwuYjNJPngVQk%2FR4bqZQDXfqyrUFrQpXZ0mKzKOTkyNO1RLHFlQipOwem4IJIsTOhdwATipz0RYOWDBWDj4HH5C9AlrtFV7xiYaDVreQ8Po%2BirM%2BPat4YE7StBcEliV8cqmXcFxGZqxaQjGMdUiBEUmCKov3F%2BL74l785Eb4m8eH0fCS0tiRt7coK5vBTza&X-Amz-Signature=3f6fc3cc45a57e1948ff689a8595ccd909a826b0e51fe21898821ec9574c4283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=3fd1b295c2449d7a4c0efca954406940a6a330dce6334569b2b815623989bd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=89ae4f621035f1a1224b5e8b8beed3eda73500b33fe9c75b9ea382fd54e8c127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=c08b892bc44aef9640320c73b09bfe1938e6a29842302a81a616dad5e99da15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=f98b4b315ad6aef07ce1866325791ff0e7357fca278deb21f1ee3322a2d6a75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=6b0dba5a66605df1fe886f66bee0822d5385cc586eacb64a8bf52965a2f4f18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3KP6XC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCW5ELxqyuPvwCx8YyLB2Kc1VoPKPKnUVhdnhp0t6SFvAIgbsHqenvtVyAjaBR4vhxwazn5QSsX2mJvSGGzP6M8KJoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG58a7wxGO1V4xQ8%2BircAzuDjlj94SbBfRdraFY94z4M2NO754BZVnZdYHJIWqXzFp2iW6isv1I3YugF2LuL1j4q38oRQzSmhwe7QrKv0ThGSTKLRnnjEy3q0PjFz%2Fqf79w7CYXXFTPadlf90hF3IPCTMQIESQTlSAQYzYt6YK2k6a%2BHyVLY5uZTe0AN9jE5jGmaoRQ%2BMbApLUF5kYbxqAjt6UJOPds2q1HDNT619fo1Ik8lCyUakxClYCnJ3nXJBBe8A2jB2SNJDLBFNfOyza%2FxqiLHUUSOUGYphJk8XadHQYL2b46QxJEeX03K2J0c2tmiezUF9I1f0YeP6%2FGGFdVDbicYEpyKRtiXwmx2Jvt9VYlV2oSEtPZFuGiQj1UHlG2A7vPscIIQ1BqvKkmBBE6gSG4k8BOAH3XvakFZFE6%2FpSTEAAG3kedT%2F84nSuGkIf6rWIEWD59oIguwmGE%2BM%2BTyOEoOU%2B1SYpiLBr%2FcYTe9msDFzd5rpJBR47LVOHOifYCddROcYAYo1fIjk9twR%2BrSeR2ey05wvdH4JmNGZ2x3tE%2FR%2Fc2se1xOqXY0ohTpGxvCdIVkMyV41RweehlcPrX%2BxSZAxuGEqlgli27S4gW0iOFRIF42K5yF8ArbTRgexScCFrrqmpYqefJfMIa0xMgGOqUBSiRsnlK6bTD0iOSfgkdgJKxbsqCxu7%2Fsy1u5j73XCwInB9XrOZ%2BetIYeLlPqW%2Bz8%2BrbhkKRqS1o3AwROCy4osbqcfefInB%2BFsS8cOLpq9pCG6F8od7kLVOGWqNKXMqfI%2BkYMU%2F0Di7MPROkRYzKih%2BJd%2F%2BTWDyCogFHNglWqNehD%2FKT0wHZQhfeHCYXHyhxbx2BpXpG3PPFotq9g7A4Npo%2Bntqf4&X-Amz-Signature=3718eb08f66c65b97ea6655e3d460ff072a0fe2df2db8d7790d662721c18af5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


