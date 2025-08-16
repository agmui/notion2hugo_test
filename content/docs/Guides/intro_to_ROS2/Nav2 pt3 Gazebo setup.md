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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=d164ed5a7062f70d6fc97c938f0b1f1885e37056033cc1d905bb65864a23225f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=fab32ee4fadd5755fb89d11045e0d6bfd232c7b8f8188d36ef946dd8bbc73d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=77ff1c6b003262ad467666efad901a82fbd029b0cc4c8250d3f15f0534005b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=705577df944e008eec2934059fbce421af51701788350e7b9a9e3ba86c0cbf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHLCZCV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH4Euxf%2BpGENGXXnXh8xHh4aedTFimQultNnLE5urg%2FxAiBtPaVaxCMMWaQ7TeGuvB5AKULOcq6slvVVVqY3IySSRyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMNrQSMOf4ztqS9CkGKtwDHbImtcVPb6YArEtP%2FvNIy5PcDMHHdwqnrPlw0464cKoM0L%2BF9Fos8H7RbyPUtoPZlaKTxi%2BXiNTyV%2FYwr3bf65dKwc1eGnIfrX8ybtGjm1I%2BwWg2nxLCDspLHnUv6tFfovPwiQi3Ef7wt1jFiFATDbab9Nfd2AzSwnnN5tsQtsQyCrmWKTYjZJYLrvGZDUfrao83H4NiP7grOJPGAfR57ERBUCNWKVoN%2BrdPUWmtxzkFCXh4423YY%2FaTuBbkRc%2B%2BPJJ%2FcYdcMDGVBK78qQmIMijtSuF5sGpK47ZUzAAP2TCEnOPK6OxacEAze0XQdmI%2B%2Bvudle%2FVJobAS9v2BNnhFO%2FstkCGe4BzB2sCR7XuEBxcVTECnohIx3CpHX87tqZ8EsoRB79rPcGWMZjZMJH5AlI1koIZy5%2Bc%2Btels2pj252iFwlgpqwGaK3ZwQn4gAFM7ZlkOSqhKekObu1YQRvn6LNDpSRJ44xpVSbx0SMwV0jTBJNBGSzLzEIG3%2FHaE5ftWvNS%2F3Q3yHJAFTKaAV2gfbI7pto8wcVACZ9J%2BdI6gbV%2FHXYEyxU7dW2C%2BJ7YNv5gkFmzYjB%2BhfIyDpOwPWvqjd5r1JEatynLezYcebkc82MQkCQCEJjnrwn2pfMwzfeAxQY6pgFKglVM3sYCZH46cDyjhfgW%2BISBVlbIR%2B%2FAVVL0p%2Fif2ELPUP6ThsR6c8lrf231MDkYX8BoBNeuGOdiE9HDvK7CMCxkka3fW3z2wr98taDAICXSbAP1mv1wCr%2F2hyv7k25%2BAXtJw9SzjkkhaWcWucsjjdkhMkRQo3X%2BiB1pTNdutBbb7PocmANO1oOXvzXPwGUZ0RbSkcxctu54ao0seYTlteBMHlzS&X-Amz-Signature=d4c6091ffe7d1cb12a8d065ec69fff13aae19caf86a16e84aba0c71ce32e60a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=55bb8e5af4f6dcd875be09e8966f06364a0c682156ea84d6229500f499683b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=0c3162839fa52ff245f3983c9da6de686784033ef5f49e1e98a6ce1d3c3ff74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=233814a61c9ea01d5844301fbf08e96b9a7fed8f0d9aa9c88fb00dc7cb54c82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=73484c3ac841c8b3f1c0202104547b788c8ff1b185fa35c618e5073a1e1a4a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=817066b80c5a63b5e952cf5b1a64c87d0de4dfbb0312416803e64d1623f8e9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJDKTNDM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCG7RgVGOnFq35eXi3c6Gtiu4d6x0OwK1KMC%2FRazKN3MwIhAPrtmbdpRs%2FwxY1dB5k4VRSWqlRvwoCUf3W1JjnuQNPDKv8DCHEQABoMNjM3NDIzMTgzODA1Igwt0Frq7I%2Bm8pI2TaEq3AMqgviy0XrCAQCeXvYxekTmm8%2BUIRvZCL8zEV8n43MqA3bAlekCMKYe3C%2F7cUoGO7o%2FVwxSaX0lDSkA8j12bxpE6xPETbjw7q8fsgTHXihNb7yOuKJWDpZPH0QvFja%2Fk7QNu8Nd9lMiHxfUThH3urgFBFnx2EqgWpblERaWh1aAnl8Nenj5KsMU3Z7OlzI9mZbPpSXGS59XLPakiDy6bkNeSpDktgoPUpQw9hlXXdRUmWm0cOynRUhOrfKUsWW0ntyD6kjs5nvYmEXU4THUjvXn90GBer5PCsPuQQ5PSNEpHc%2FTH4rJgt1aqRVWmHW7bVQnoob7N%2BS%2BMTtogDXOIKoSygBZjmdZriJ65OQ%2FroPr7E29yKKiS%2F3Tz%2B5N3zYuV%2FiFW1vd8Ht82Woea31aUYuFRFZqBFw51zcsymWpjKTWe9mIRRC0XSWjaUlR5WHoj0zy4Fra3hDz55VqZ1g%2BHJAC0HQLuH5B3vCQ3eaRwDECYnxS4ufOkUWrTgzj4xxOIWAvSixIWMKnglJ2QBZ5ak%2BPm7m3jVTqwRpFzTNgAlrlTlUQYG0zcJoK2gs%2B%2Fy7CFrUTHeoEiwXWKh3JRwlKW1tSofaYruXIJrIg3YNtIgzzYN41koA525YyAkK0PjDo94DFBjqkAZQxWaRRGK5WsuD280V7SLC8FjplfqCjELtZbfDOHf3nxAgsfVhIuZ7oiaI6JnEFyLmZgOcnB%2FGa4l%2BXD1K%2BiJRaE0X%2B69EKoSxZeyKbAG7Y8cS3ZNPGVvW5398aRAidfhtGeUSd1%2Fw%2F7x0q24Bnw2ay0GzrZYDK5%2F9GGGftyKy%2Bj1GiP832%2BDhrT8VwJrHrE6QLruy%2FPbCwgJtdrUdFOtmO%2BCgB&X-Amz-Signature=1cb31973e9875cd0a57f73a2bac060e264ed2f6e53908138273798808837fa29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
