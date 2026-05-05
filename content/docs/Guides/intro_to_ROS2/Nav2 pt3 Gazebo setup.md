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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=07f5e6a5156826335369ec55f01a562d1b65bcad2253d8134224702f623026f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=6632e7ab830bafaa413479fa291e41bd1e3b4656d51d566d251127c832bfb7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=759de4982d835c776afbeb514e2828400da4ce4763b76f63b57623374ee35d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=b8df58bed0dd2de32f14348eaa976887932d699fb40ed610fe9397839815d58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZU2YI25%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVfXoiLORtVqL1WAlcuiehpl56t6mz3xNds0k8xq7qAwIhAItJSTQYV8UweUUikpVMdr1SPudq3LPajjDGG%2FbN9cavKv8DCHsQABoMNjM3NDIzMTgzODA1Igw5hUUaP3huzW4MULoq3AME3%2B1J2hY6dWn2G4FHVzAWimDSWMbx60jn9nFk%2FTs2mH7689%2BYNQYVr8R6y0xUo8enFfYTSQzeyDBiyBX4yGmHRHUUGUmipWDkkd81dPz4jsCM0UiUJY0uXCU%2B85e%2F1KV4%2Bf0LymJuRauIr5wo8MiNxnC8G0LUgKh0owOD7hheupMCpJM5qssDip%2BzW%2BGvznJY5Xh%2F6EDXVGAZ9CFO7GgaOuQZtJT0xNsUlQ%2Fk7h0anOR2lwQ63uDCWV70Lb%2BJnCMQEHaQXbEgDCdpYUKrWj5bM0IOOXvnWZFqf9YCBjPbOmSfJXKW9gV5VEf0cdPA3kQ%2F7TrN7HIoxnw7WJRMVP90POEgz%2BDrQwq27dsJGKnKjvGbPZzZrVXh7DYv1LxBTOQSTTbc8Q%2BWqnwsgFSlOy98RjV8GzuktgkC%2FUszrFx0mYuRdQ2ilE2TaTHzcH%2FF1lMT%2BLGPnfQAnhaZ11KeVwMsP5LTE9uPWol8gltkTHfdhLY59xjtdt0SAUJqdEH6VUAwfUIZnLT3h7CAbgiFeXUJcqh6suOUwrmIPM5TMwxDERNk78W3YM%2F4h8oU3jqrERF1UT6wMC7nz6ifZS76jRMXuwC%2Bu8mvbfFkWaiv%2FQgs9rQ7gzLKgFSbZc9C1jDWpuXPBjqkAcsACDrR7zJoa6d5zbAuMnU6J%2BuI4mRqJ1xls3wrGMowcFBl9z5Bl7pqnN9vN9sur3mDbuixGtmDIZWDET55IOsSMijF2G5ZVkUQHS1Ct60p2Tg%2BMMlMXIbVmQfXw9aa4jqpBk9eIZeN7Zys1GAmAqNrq%2FTiwZ4q9lv5T2HfV9A5Ab1Gr6hWBCmxHmgxMJqsyJW7eDztufPQc94QrvN5WRbLsn%2Fm&X-Amz-Signature=ddfd9aeda9bdb450b6d84d8b57b7063f5686e86513eee302a68090f59f831913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=d74f75dd50ba8440be6f520a3b92dbfbcb2492451ea273a44c275fd4891b8782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=bdeb3892553cfcb932d50c401c9be57fb4d53959d9b0766f81f3eb69e10f05fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=e44e7630229d68d596f00883f98db61f7c914b5fcda04f381756a34f4f51916a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=dd49ed1b5a18b6d1722965e07b2549ad983dd5b9578e7c034077f8a3b9f4237b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=e97db9545a8b768af6761e19512604a4ca24a49a6260334cf1b6115f3c0a4c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESNXD5%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOWmB3vHqo9HTH752KRQtpCcAz7ROh87gIMqxoSHQsLAIhALzoFpc9UwPK%2BPzhWU5FUCkh7ROtoLyqgDHs%2B31iOht0Kv8DCHsQABoMNjM3NDIzMTgzODA1Igy4Wkz23TG3DdveS8cq3AMutseMBI8%2FlHwoxIfDfVBR2hnKKEFTof0AQp%2FN%2F1W0oHOh9of62uw1ILMdiyRMqXipq4g8AL7VkoDH47mafivtaJvqKVwKw9YvxNc3f3OW1TlT6ZmJoU5MlL0lJz4NfgHm%2F%2BwStK%2B%2FdROScJOvkq7WZQIx1Be7zVMxvENMiMPmFZ%2BBgJ6uvb5E7medLCnvJDbYSHnSlDXMSwG%2Blxzk%2F1XqTnFF89QJBT521ZU9Fl8taFBPCzbPTM9g%2BiHVd9d9UkDuoCVrGuoEYNMB70zABpp1opnaoZu6sCxBU%2BrZqwh8T7qh%2FQSumuiU7ioZBRpT3mTIYSs5NJcVQaNKmaZH%2F%2FmRv%2FBeykXqkSPd%2FwFF5WydxvRh6APra%2BqEcN35wGzBITbCIaBGwnEKzknKxtTieF2AGxeay2PZrgyivxAa%2FaDM8iwUz57PGxlVyrartqJq4Phrwk5gPdXB6jLvjDvF%2BMRDsCCTSgsb%2BIC3NmXhnzaPJZ%2BO2PuxU5LyMwagrPVFr7oIwo9vXvvoyGEfhlJmv6FSeZsht4NWO0%2Bw%2Fkw3bL%2Bbuc00sAcQL%2B9zC9C1jEPQCROWZ9h2xeARyvgXPkaoZDpdpRI9CejKU5K%2BgT4CyWZecmPba966UIBmMbo%2FhjDypeXPBjqkATU1DqCnhEUHgiH8wJPEIvup7kGPbr9DlapLxxVVenQ3%2FWjNarAFHA4kNYnItxLKouzCo99JeE0dDlX9c%2Bz3mRiETqfRu3wDKjc8RJ4ag7pfTnVrMVVkn9BsNbAOQ0JLqE5JmG4Ks3EC7VdgqI1wsHmszMZ%2BOu1D6JR%2BX66po2NXzFrPUN7iGvItOb%2BYyKGm%2FPffiW5xdquKs6BcjyErQjekE0Ka&X-Amz-Signature=3c085c6b7df51e2179f71ba908876b51a652afa609a15e3f2c67b7017ec33867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


