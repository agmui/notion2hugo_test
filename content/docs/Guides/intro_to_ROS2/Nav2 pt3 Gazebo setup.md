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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=e3523927976ba77e222ed4d3fb1cbf294041bb03573165a967850f32a5079c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=d1a21775327e887e2634499cfd05ca67fcf5b9d8e3e5daef9d78beca870f9767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=44ace93b8bd8dbff357e521ce47edc119771e8d555573a07474608daa28e8e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=6688fa436a28a194111fbb1d68218866f78e9ceb6d83858f42c55e6ad28c0eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KLDRMU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDJHtW2Va39y8SFZx%2BmiCvLwC16Wo5Rpyhj60DRIFfWVwIgXQNp%2BS%2FnY2BRqhmcX58BgkeO0zCV%2FCqBjvdmRzvBOSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLLTuFthuz%2FY4riaXCrcAx9rm8GTfcKa6lzdP0mjzhllXfbh6prPUZTlpn4r9pTfMFCFHjBiTYXbm%2FfWDhLDSIlL%2BH1%2FUvx0g59flxByAhXv4fh9mNz9%2FdqG9elYCe74G9nIdLjqy6%2FVeTYNJDGzpDu29fJ42N83cx5MO3AR%2BIDXJHn9SEZhlu4xXlvxUulnE05CnUlM27DTlghZihts3yZZ3B9GTSsxDxT%2FOgwzNWiKIGgzrFie64p9d6eAYTf%2FiG4BnebsPw2inXMtNk7AJH6EmdiCIMFRpnNXPtfKCc7FDd66z%2FsbalFVSuZpG5%2BK7lQvFYJ2uYW5i%2B5o9LMESGwPHN2JVWAyQ8soPNnEbVTQejUhwm9WucqdcXEZTLg6lCtppXKe%2BU1098NiS%2BmFDKOTkCcAw7R7PvI8kK89kfW0Ki6OJfKPTKSYi1tD6CidstxuZ4vlnUEsdhGyUmergfSBkfIFj9RTcqtx9xe28PlLkhsilkgaaNljljRhbpp79x6cxOFjRzfvVfpLQ7fQ5YAH1FOvJw1%2FVjOmQeCyISBre1fBXu8kYR8oWo5%2BQCy03Da9ATFq80mTK6vGRTShpTDhuqvi8Gtg7gAXSq%2BdYq%2BcRk7IaSppfz6T9fSSnyd%2FoYR0UsJ7QE%2BRz2HkMImYgsUGOqUBNIc9ENIVl6ZKf6qc%2F4CnjWKSGIwuH8cmBxSJbY%2FnPgIAEpvJYv6CRdXdxm9IHTqQ5i95QgXZkYTh%2FnBsMfPUeHOrB4R%2B8UFM4UXtPzmcCVQ%2Fb7w31HvDyEu0JrKPRjM%2BeeuN8rMR%2FZmZdkYyAtE5NBj5DVoo0GZ2IczxXcTzqD4EGYCX5UqO0u2xkKWWqDUIiZs3zSJ6PYt58dI6tqE0kfoW4YSD&X-Amz-Signature=8946436cc344d9445cdd3f12b903378e435021fda5210d2312bf1d49125ada5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=43654210adb937c3e32897dd439a7c87f819c9ef3a71abbe60115b5d6876f4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=fcdd5fb1c29976239f1475f6099fcd2ed133f1d8250f5ba986be5f1ea067c4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=1b7d5c08b1af14eafd8bde4d1ba284538da6bf95bd08087af6358f75ab0a035c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=bbe84a754975f62f87834eac69016a7b6ef49ceb93f76e78542821685dfa92ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=eeab7dcf61526c5e0eefcc2e2872e0d114aadcbb20987d23d0618df277f03fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHRFT3P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH26yiUN9NTcXFXM4lcPPLiMglEnx%2BkYUMZ2h7qpXg%2BlAiAPrdFtKgkCvcGdYSD3dd5T0Y13VrSuruFPdbcE%2BrM5Eir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMTh%2FEXoEfiv%2BxuI0aKtwD89EsdP2Tt7QsGqtF6lF29WaEeEbMQD%2BvDxcMiayu4aLsO5Vwq6DSkOi3oUrYn%2FqT6z8uHRvUiLTgSQmQI6MW08MVhtihbPPfUkcxg8YhTuEWh6DB1EjVgcUwWVNnFYCqEm2Oik2FND4AHIpmg47CX8sMwUeMxBwFi1HuEny05yXG27W6ap%2BYvniwVls0kUWM2x4apmLoqJAaOtgbGKJ%2BEQAYm5vJLYlOgzAiK7kFk5oHJZTbk59rxXr6Eardi03dVP%2BGQgev5O5GaiM6DOC9wSvgP6Neo1YyP0FPhcDzgqxbdg28JMRTQk6PB8DsUROx2EOz80ldM9osxjjjs%2B%2B7r%2BBCG9SWewKce6DKUNr3MBnF%2Bxh3Gojio4VMunvg8smsUX9KblJBHG7n9KuV%2FarDeWACRR1OSKqmU02tJAOseDbTxpz%2BMtsyZ%2BaTwbo9i2%2BMdzbCFkNfjgR4EQHv7OfUMCKLyzTZAcNRiMSPN2oS%2FKbYo7Kk9cEnwVg91u1jyphIBpTEXQ2VklKdWHciF%2B5Eif8OgrZtPlmBkkMJH2idUqBdYbWqPeaajVBe9lg7d%2B4fc8SXZL5r%2F3yL3fWyoeHUgfYHm68NWSxHE5%2FHtuGWa74lCsV%2FGwHSDuRDl%2BMwpp6CxQY6pgFx0eSqbnOAE%2FthzlfVnnoTCzTdNRwlhdWaYUK0KxNutlI%2FmyFM3fF5xuZKxu9HhfTBnaa53nHLngiEk2IdLSilo4FWaxinGTIy9USnesn7BIb%2FZ%2FyeqEkZLW0FiNCrxL7QFqSu9wc7fJtWZ8ORpl%2B6lnbClzi9UhLEY8X0Ee54b7KDmhNwJJ3ivi3ad2sWSiYYU7LAHA0ovXij0omtnwQiHmqFl2Ki&X-Amz-Signature=f511a6cbdc979045fb81019d163da4b308dee2d3380d30ed0ec90615b3d37178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
