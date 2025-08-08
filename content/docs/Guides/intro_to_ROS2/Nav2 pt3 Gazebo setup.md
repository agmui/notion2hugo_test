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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=dbd98c58f4a61c225c0136ecc519ee40ee5bcf634355ca9c3556a4b8d47a1a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=0db79095d6cad7ad1aa5c9a951013db2acf391e24f6ae166ad804449e95520cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=ac692ed4a64f29fbb64aa73c69393b27ddd09f0539c7a5a6872b6c2e67fa9c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=67c58dae694e3681c4a66cacd60a18a22b041214dccf9412a49717c2ea841865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADNKXCX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDiYAmDNrbsRcN3XZTNV2VnuqFSDp0abhD3tfS0fXiYZQIhAM2rVEM4C4m41T4Wmwn%2BxH6DNcTwzua8MQcis93zmA6kKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr%2B%2F2vdj4YLYbPr6Eq3AOjJRZfQPqBmMHRsbC6zq4mXfrjW67jZuFLEk9UON3hXFRu7HvbT3hHAfebxjqExX%2BJWBCj37kud%2FPraQpJHe1g%2FAddmpjA3lU76K6F71VU5L8%2FkWHpyFeGLMDzD%2BUTRQ9Qffa1zmhqvIqNR6ya9zdVEbk7Tl9g0zN%2F5ZALN17%2BEi0mcAh%2FK3tW7IhqumPEOqMp%2BlETMT3AWHyxTopX4KWREoR%2Fiypao45e3cDlavg6go7zCH6fUIXBBwkAr0ccYZrVj%2BqDO5tL9Oe4MrWSAwYkoXU0M%2FbMKkO3c%2B2VoVxSTt1%2BBtH%2BHKlHV4wgXj4xlLLqSVj3zfPAf7SUcU5g3UTRer8YUO%2FR7waQJCoz8NR7QdXjE7ouCyAtbGFitEXJNnSwn1sCoLnfhxgsaGrWxBu2ZvP74h6wvqVeZJeBCe7GXnamTndgw02Vp1xvmmsdIi3U4%2FqSahf6gwQx4Ds3k%2Fb4XSgKHjcMSgtD4Un%2FBo3AjjKnsU7O9xhVmrBtvul0rq43jO%2FsmLCTu9ycCMs8%2FeB%2F8%2BoO1zgT%2BXDYVl9JOMZyqN9WUk1TZKcu5Rcr%2BXsrGhUYh4Gg92EugeK77MxHxbTaRJN6hppqsFvKo%2FebVmbK90e2HsZQR433j%2BdUGTCin9bEBjqkAW2QMDMedbmpRIgEdfJ5Xw1AR76L0pVuSNy3pxEVCO4B05ALKm27ToGJ%2FFIKp0D6ZC6aPAHLZ54xO%2BI0lN%2Foobv1d%2BZyWexUxeIE6jxS8G6m%2B7eItG7VExBLcAaT2L3kkpS49sFfGaWPS3ULjxiba4cAV2BjFM1EV1TJ64fWYMt1Z%2BkMmzRdu4HF3wLktHxEfcmH%2FMr9zD6DTE1s2rUUDCiA08A3&X-Amz-Signature=fe8e2ed03f9e4d30f1903e8097ba4577d181a12be2555547a28e1227560d0b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=7445b322c422065b695ec153e344220e7cc83056061ffcbf9f67e7a6c3c1ec95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=8344b3484a2a0110ceb74e0be481f714d2f9e00d47ff70fe8912358c51bc72a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=faef915c3f763676201c0aa123de4bcacfdba07e306e678f622d35259e20ba42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=df15933559816b5fec5a75f29b5e5a21cdc7cd3574c9b7fc8f889e5104a111fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=867adbe89b664506fc36b3e9f052628144a54f3342ba848d331ab53344f28166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3W6BSUN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCewc3Aqmz7RG14vtcTSYihCreYKCQKeI9hmXiBj6ujOgIhAPjzq0blLPqsXuaG6RVeBHMWsyofdw3MMioWGDPCOQbFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2geUJyxOP0BcdTncq3AM9FeN3BDS3MFGG%2BfmqLBaHyojFxh%2FqZllMNoOlnOpyhgcv4lHGaXIBecs0efdILbDr17tyuopzupPvW4LpD179my%2BBX%2FVVXBot3WiFO3uwOH2NlnbEJcqQzcsO3LM%2BFq%2BI3HZJ7uhF3dyFQE%2BhfAs2ZAbilf%2FV5vHS7hFOmZTBaxuvo4BdINVUWn8ij7YbfinQ7QAR72rBRwdajnT76G8W9CjhwMbKuL7L5kh9a0I5MIH994IXKerNUwZFevRrUxnULIY7yEJHe7CR9Y7phfs5Z6nPt1Z1NScKufnvh3NRLLhaN45DJlmgf8Oi0dPoWPE1%2BRykJ0KLrKWpM3jdKWc5C%2FF6SU8JZGI%2B%2BH0AsDg85ZvhsXcDpizxkEn2QkWhn%2F56qdmr6oh67LK3%2FYw00xeLMYMumhIDJoi1LOuXZZNrI1BkF6tVAbPawHcO%2F8pivxYRAlbphsSW0XLQ3lI8XhWystNBTqzxrzNZsA%2Fy2hN0Qkzb3guxpcg15ev6y%2BAubHNKQjkafrkpCHkHHLdDawXiJZOmrgXun%2Fq2%2Bnwi8tLDcbHn9OHEwBAzo0jRe%2BSsri2LKVNmTwsLV4M2%2FlihGMyviIq%2FacaDk5ep44W9soWfx28d7V%2FhBa8BZZa2KjCmn9bEBjqkAUwFeW8M1moQAvhz6sEMxvZCd8kO4Kg60c4dmSziDRN%2FoFEdvk4%2BNhTGeDcHdUP1mlWKUydtByLcdhYoXe79YQ%2B2b4%2BLv3S7MY9IvGqQduDdy9BOgQIDaVSn82AetkHiIx0XXAjDxgpUTri7zS1TygaBW2t6ua5eXa8eqWJSsw8PW5gyo1Ige7Ha81PeTVj%2Ft93JfUmhYeihlOQWP%2Byjg17ax66Z&X-Amz-Signature=da5d23c50ead7010e5edd0bbe55690230e9f9f79469b15ce9f6a4e4ef30345e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
