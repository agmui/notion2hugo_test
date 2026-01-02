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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=ccea91eb54c7e0b9fbb96c0f2b4124284c6a44a23de9e43b1da30b6c7aeea68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=20a753bfb1407b540782d5a5084e91bea5c6c89f9f2d5a4e5d234670fcb8877f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=361fbb2c31518a919680a6a26ac5815f09aa828c13d5883fe4811f8aec2eb034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=9e279d1985f1e82edd3fa511d3d7abe99635564509df956692c6ca7d221921e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJERCED%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICFqEnxgd4TXvySrShoqCR27O9v6UpZQYw4FzI7%2FT6MpAiAdDwnHIpujV6SF3FkYZqi30YGXBc2jpkbj0BXI0z75yyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvoUcAiSdPKfRQeY%2FKtwDNPnxcP6a0vuSeGrE0%2BWW2zSDYRPpBEpaAML%2Bm5BuvhxpZXUVNh9kszYyrz2SwEO1wyVtpQCRxVJKrk3crQQb2vD0YkWdXLBDE6D3W9ptfLjPkVJyr3Lwwa37DjOivSRiYUWwS7ebyFOZ1rO%2FcI1%2FjCxB58sPzLcPVQY9aXAfccpXnhz1YZdxYoF%2F0whBAZM6XNxfGtIw7HIVGFDBdXcgKIaGigRBysSBYXTdSXLehwCEZALOq882YzhWEip7BDemxVHtywpZFAhc30IH3EL3kSB5oABY6qiNYz1oz2%2BXbPigc2VtTUgEffL92KFFjjZlutFNyScsEEAsWJnMIQHTLYOt0opf8%2FltkpbuHVgBQ6a6pacYQ1P1y2gmZ1Ey3%2BMRrN2OeVxqWokDB184Xss4n0q0K1ZmETWg%2BaS%2FboQ32ZUXmauqQATKAy4kp4SYgRE%2BHZmOePrgTttKXJyF0GnsCcbTO%2BJt0jTvU9G1yu7Gu4Q2zLuzmizS5GWpqA4extbYqw2aXKdq%2BuGDKNkt7%2FCJ3ql%2F4B7GGCThtmRA2Ax%2BYnoXEYLAqCRzcM47%2BlQrI78jEcCLnlv9xS5sXy9crytrADkdkqs1MifKWLtd8bnHbV3ZryIDhm%2B19FUaEBsw18DbygY6pgE5KJbGjXOvpwo6%2FJppTLCDdyKaLa%2BftRur%2BiBz2po6gSRTMTQ24CE4ibU%2Fr5OgfJTLEQMzktCdDNxtE8w%2F8IH7UPtn40uZ6SJfjd8eTtVVSYx9jzOFoQ7GOupX1X5E9TEt%2BIOmrsu%2Bqk8XV7xlp1UP%2Bth7OIpghF4LteKkXUz2jmzhhnO9G2l%2F2Sx92JKL%2BixewrT8pApnjGtyUyBkSuAJTETBfft1&X-Amz-Signature=0c58b701b378c33cadd37eb9fb7b80b81d6da7ce27aefe3f451d3410906ad3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=203bbfaa7075c90cae1db7ef3c5b4851205a0621f4053da035cb0cc6543c786a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=23839b8ff2eb4d455e32d0a6614e9a92c343c0398a3ba067e6dc55a82894592d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=e9cf7a215d1375e2462bb69151467bb2a5394b884fef33a7838097b5ce74a39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=6c90806e122bfabfcec31369e0b5103973a9c0082849a979646b164141278074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=a2502ceaaf680d8513880ea03b71bd128686c14d8ef254e96ec21cca77aae7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGQZU24%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDN4mo4HFT8r3apcnxp4tiqXMQZMuZk7AXVkL%2FFBrh3tAiBxEHwARZFi7k5yIn0rq8ldpQt4Lv54woCWhW7AHJo1iSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMmNnzZJy9SnQ0TOKtwDjaGA9pVqLuG51Y4z5ad6xP%2F3813pjdN899XE7LLL9ufDS2gEEi%2BXnXJ5YuxartNaON5VOY9iYnV2AM3gUSAnTiRf2yJbkuTkRaMtEN4cupmRc4NxJ5PtJOwBnmXuEslh3acnclQ%2FmqLfo2jXQaJgENJVOxe6Tz2UbnJv4FA9t1fnwYFqoFiLP6fjY74akxtVIsARzWHGNOw1xz3TkW67cRiZTT8nnlxoWYppon9GFTsZE2PSUbRlHRBFUl%2FhDLUR5z1AD9o9BbYBLSdiQRspS7BlhzfoTOQTwK0TzMrXFebS8y8nTBl%2FV%2FeesHWnM4Fyvj5na4HUjSa0AV1FI%2BJspe1OnKF3go3PAek4aGWMDfq1n5DObhzi472Zpdggwbndan%2Fl2Z%2FmKP3JhpFmPC5GyCtKd%2FToxj6YAEKe2ZRnGDzA2TIZyOE2adt93v6uxTAZ5YOtj4E0HcS20F15gY9ZL6VqF2lQTlSO4ylzgzsSwg1sfvXorlqH4dNFr4%2F%2FDKa64jReiubJGA2XUIHT4xLZ7J0C9dGebma%2Bhofv6nIwyd%2BDys5ProH5AIKMf%2F20nA6VGnfXy0MfV76ZTtKr0OwoUQM0ddxbEwnWYtxW9bO6HZca8qeS44JNX%2FGgDEowxL7cygY6pgGW6BykaHXQVozpVMiutLtklxVAk0rVBPD47sPah86aw6Bkh%2BPfVCvKqZlm9qVWeiPimtvTqVn3XqpkszSAooBqp7zGEUc%2BrPLufOxH3h8%2BO7oq3sbOKJUuvWHiaZwRVFSwxNoD5p8eZV%2BHtdQhwYASQAGlf%2BjzGewST2qFpb7FfXblZmf%2F%2B%2FyROwDHhwr1zGZh5FpMt3Qv6obWZkfApO%2B286zq30Yh&X-Amz-Signature=9749b2c91d110b449c0287987b656945dc74970cc12fb64518202ce2e2708ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


