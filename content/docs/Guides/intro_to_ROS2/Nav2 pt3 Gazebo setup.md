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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=01d8052ac950188fa58dad8c7f723f3bc8d6dd047b007d030c066ea070723cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=6fea38cd0b776b8d5239714c20ce98648a3515b03ef11023e700b76d3fa45d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=fac20bd5530add300a5ecb0d1d5a558bdd89d8658ad21cd8cb47658b9e1e750b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=874c78c6c25885ea2d2e3f6a1650e9991c7abaf715064f85f9f244e970441790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=b61d9c93fea31bd4f1d9df7b635f96b74ef05e0e5d3458cce5a96f053c232b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=7f6c6428a95c599fc6ebeb7971bfb1e413de8385bbeccfbbcecc862c5c51cf25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=8ce42e68cc90c86f4c3407509a7b6974e8adaba1c2bdb20719904a88507d16db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=d1e5ae2444f341660934345ba7ffe4e9402baa561376aa0957cd52700067b716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=dc6ecf239b3c53901b0c21bfb46effcec8ae7f91b7a4844f11db096086bad6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=13381a760f1cfecf858d55bd52c47ed35f30616c2e1984e1b57f92c87406d36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCOQY24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID4t%2BnJKgWXy7YTQ4U5ojoxwIP1tyHdKoanpxObMUcPZAiAFHHsIrKbofAvDMoayvqKlIZJSrjPX2YdmXXkiyh4G3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMt%2FgXh8OkBeucPlirKtwDLOfnzHVSixFSIyYNJNzs53QszRRF%2BARQxW3VfiHLuc%2BOmvHwn5q5MJ9m6EEJulmPnPxE%2FhcVF50q%2BMqFaw2cETJFrKPi%2BZ1cACaNbbX%2FXfVo2zjFG7qIoZRFdXY%2BuZaAnl2UhGVrL2syqtNwm7P9dhpVBMWo3vvdJAPPu%2F8M0fB33h%2B6%2BKLAdG0J2k%2FTimZrFPTxrOZR4cg0vhuXsxfqE0LR6suBmtS8XLQFFlNRps5yD3EMqw%2B8eRJDVYUX%2BkDICZ8xQmdngNc%2BSYzBVnk5G81A6hX65FqE4wpAGaeApe9Y6xw2Dpdmt4lp2lGgoLU3VG8lm3FsubAkXAejvqyzzMIIksN5V4wa7BZrPRNtcSR3VwgfxFoD3j27mzs4ydHXvBiGohJ11bopKR2QT2dy5jVPLJEb5RAN1QEf%2FszaAfkbdCh2mLPGgpJXdackAqGls1DHoVITMjVDXCHR5JAtjYgStE8YXQWfBZzKIasWaQM0D2qMv2nVmoUIQ6Tf2jpzLwJilAu1E4Js8uoJqMVtCOBL%2FqcD9ICFlzc906b2NcisLdtEMSGyj6qjuTrZLSjWTY4GG6Vpu0xxRuIe4NORnt7ld9cAjnI09mel3B1e7P0mOKIqIW%2BT%2Fjhrd6IwqJ2CxQY6pgFEHNInSbmCxlY6prrKhMMJOlnmxaXPAD%2FoQhyN%2B25lrhp4m%2FouYi0GTi0FjNl0UlU6H%2FWCUG9ezhqEKe90jeB8NdArR%2FywmnFBPyelOWIIfgksyjAlCmknu4uuMWsR9IB12EXWWv0Q%2Btpp%2BHFRgOmZ5hVbwGMJmma6T5XanhnlARhaEkuBhNEYBPDj5MXGQ9kz8jSjE9RMBckwGx5eFqYLPQ1FRM95&X-Amz-Signature=bbbb73cff35670548cdc68fa653d0e2a8511204c16a1819688e8a77cd4d4367f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
