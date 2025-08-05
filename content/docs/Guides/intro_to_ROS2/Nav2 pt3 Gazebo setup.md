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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=072e14a44b10f62fa0748126935aacb096ee5e40366713ad9b7465aa48bab311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=c79f7d4da4bb3b766b5d83622820aad9ca0561525125dd6dfd6008a5a7ccae19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=7376ee2df80175fbb214ac7ccd60afd0143fcd66bae363d65f724bb2d35537fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=69373147865a8a83687eb7591f81e4bfbf787e24fc3e679cb6337bd3c617f948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W666M4TA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICtvz%2BaAWLR3yBtuhIM3KtD%2BWhL%2FruUqES5%2Bu76wXQKqAiAWbVf2BM6sMiqY%2FLjxeKxkGU5DfdGgZHpieqxVWiKB8Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMc6K7r4XR5JBJUDA7KtwDKHmxi7F%2Fabot%2BVGXQOkaG6gOryI8jWLhqdbsJ35JSVvV0SfYc%2BCgCyoJh1YYXo9r8s2WZ6kJ7TLlBsILdFgu14bPySvxhknu30tvc2E5IRYKzzkR79g%2B26J%2F2kHEf21gis2h26Q70jCc1jJJfHiJC9YZqUnWmmmgEHSK%2BNS9ZMMzFs17UzH4a5FtjfMPnnPiGb2WhtQ7U7WJqh4mmXIT3lsvJ3YmNo28wx8JMk8JGRYirrSOjPkSJBJEeGyP2ldcXike2EMNv6m%2BZLyp3fXLYVfZj5x%2FqBSKfjEYjZIK8QVmBkujDsUCYIQq9x1W4069aFfNMPiKV4BtqchnQQnb1raN4rgFnMTNUWh%2FxytwKVQ9fPMW481iBsyBb2Lcdj8lbQNu8A45%2FUCYxH5%2FtLMctt3mXsJmwgerPfG81nhJZ6ZiFIPFkny9abR2pIwxjkl9LFiZ1hzCUSQhNbq6JLFkROlgCEeX2OD8JThKxGGEagypmApifJs6jlsqOaFvPtvXmzAy7nyQYPV%2FDipfz2QjvY34w65ScDqG1E07z7nGzh2AUDBXOmCT%2B9jKLoj93uPBptolFD8TmMmdRVCw1aQn1ccHmTOwB5aMojn9%2FjsM63Tu5obkSTauayEJlCowwKzHxAY6pgGHaZGg%2Bv8gs8IqcHmYm5cBpohLmE4pVcRql86gxhIsFeS0Bw2gTR8RqxAi7VBnPXb9jRNgGoimo2pRCw0gUBw5LVQXvwVAmPcfSyrTm%2Fa5tncX2lo%2BdlJJYiUhWaaBXHqb0m4BFYkplnQgpdVZoBEva2Co8T7rEe44WAVwdcmq9oK%2FgyROPtuhbyl%2Br7UPx%2FrbxTsowxp0DEp2yjIHfTuXbPnlA%2BGw&X-Amz-Signature=acb6ce71d39dab5461e9c2183b4dcfe59f25c6cba0e6194dc969551884eb89af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=c2b34a9a8c539c051c64b91a9ac3cf8568e8a118983b3fd6dfdec8c7c41308ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=b52ea03f3fe9ec8709bd8b35c8673ad3f7c8f133e0fb873fc325f47f1b17ce0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=93bd173b532008f3b3eee0cb84ddc1bd9b1eb33fcf2f8da137433ebf32a44dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=f4769ec01cb886e7bf6fff691f6d3ca22760cbff9d6cc45b13a02097d6144c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=76ee37f5527d495a5f012b329a2bdb472b1497f03c6c51c87c74092b07eda56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=6dad88c13e3f4457f8ea564b9be14def152483a6b5ed3af9b7af0d51ce463dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
