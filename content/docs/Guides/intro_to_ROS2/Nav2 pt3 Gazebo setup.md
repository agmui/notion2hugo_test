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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=820389577955f212af76c30507b215c6c5fff77e4ba03e799d4e77f9b7cb3c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=eede916568349d2f9e100ebaed443d227d57ef13d03233c77232dd965099f6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=98ff7610897fa7dac4fe404f99ba3d710b1955bb62ab6632d306b3bebc993db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=03b621fca7f5b50a6cfd52bf58db30c737d0bac4e89b4550bfff624e8b6341e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFNMEGS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFA5SFyKxHwlV%2FtTjCI%2FzCwLngXpNXLR26idT7FslowKAiEApPJBM5u3Ijtf4VhXJj%2BVZRVAZfRtCJ1qznPSij3Z2PIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEhFnHZzMsaH9lc%2FyCrcAxR6BP7TgC0DmtFqKGgh5VNLn7e58aMZj0Eg7Zoc9JteW2StSUW9hJVSy%2FhduKS8e6H13XDEWJZnLt3pda5R9B9AEOJwCkR275u055qtNeDOlyoFiVrTVa2D3luiNkqbEcaRIeYE2o5METqhezn56AkVeKctPwqlhUrcz9jptn2CP3DQG1FaOrLmHDr9q0Pw4%2FvB5%2FWrOdhaZQJsz3kGBSof7cfcN3f9j1p1g5Xgp9KkrwfnJZ8pSDvM8q2qnS%2F8xZYTmsvv0ffdXGaeUCu7JTP6EntDrOczahoIA4hg%2Fg8WvpfWbA1S1JOYP7drYx1umer19WNF5Cf04R%2BfpMciOr3A4HJf3wTBFM5mkDH5GACGP3kc8WPyJZ66aYHJs44tPGd3%2BdKk4pQn0xqfw8UlZMvbHgFP%2FXBnOHV3EzhketqhqR6Lh9YSl69x%2BXXT1Q6zQKKRiyDMcA6dilpURs2fh2VZxGIW%2FX7knmFkMgI%2FR%2B35FVKCDQjg6Th%2BfpQWpxzDarHdZ1BDUA%2BYRyidBR%2FWd%2F91hIpO0q9jqGMn2nW%2Bo%2Fkv7tHGHPgd2Z10MIpMJArM42wC%2F8jqH9j99POgc2nbJYGbEXanog6o%2BT0BQoJ%2FD5HBk4wqHigYcijjiXIxMMfG88QGOqUBlNdNb2pTDpE4gpAWLELZE0atq1w8VZA2lYGxSbSY1lE6f2xbynfSEUZGg4VgAZ66AcsimEhjQiLi3AHzRSzMMd33sVhUg8N%2BeXshUvNuZb%2B5MVg1YysQLlWUVbyPjYwIhXZUzrAGVHvyIG%2B%2FUNo9NnjssZe84Cfb8wl38PJKpMCaq00zBbBs2UYNGGe6OjQsM9i7dVxTQpQjpntFj7Y4MQ8cfeTy&X-Amz-Signature=1ec38d298956074aa6a0d32803cd87192aaa7a126cc22ea180285dd351922ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=a6c039b176d4c955e2b288dbdd190055156732454ab997a8c21f1419deddc778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=68aecf60bd1d830ea412c73107c233f8b917083cd1a3557d0a7cfd08b928b084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=681fb126eb75b842e0429d882b4eda6ca28e39818373a70ada2ef2f6f99dc4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=04d54bd6fd3070ebeecb9f369f46edb0b9c48884775f2c1f7c48f1279d155e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=1115745306915766b64531fa2f4563faa2eb738833eb9a9f7d9f905dc4becd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4MLOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRhxBFFvblC3OYqFcXCpPXoK5KgSGbaTFm9IAefL0EwIhANlX6HCbRQxXUBltna0M1KPIqfvQKI%2Ful5m1oqKSTEhPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwq%2F7wAZ9hZcUzRClAq3APh2zQbjBj1ozu6PYqNY3OgBRooyvYDPQXV7d7Ryytw3d5iyZO53ZQmZ1RPLGUUtdXabFKVQ3UCqMVObQgk%2FwnN2xEeR%2BQJ35je41cPfYaWx%2Bk4nrzlg9XY9fSyQxlexVGviUUhu3UsUuSiRFLrEBLScOirr5hA5LXMDbDCCqa8LL8DQK1YeLkOI35uBvtNUFKQKJXHQ2El%2FWqydWrH6XCWSIeLElwCM%2F3MJdLHbvh1d61FRWfTvXQeFJpz9fsJMYqY7UmGuaLOefw9YWSzdH9krjWUmcS2zkbABRI0SSg%2Fs598pvPz5cZUnm2WNfGF2AGCVkAM16kcv%2BzKIpEM6mWLbX0hXsoa1qnIGTS2CeDwytJdk%2FhXf0PpWPKjOA3NaYPjUB%2BaG3sKQCscfEd9PSVz16hdxG8IWex0IUqBqd4k5tHO3aZvORzCY8wVLgllzOztKdphQwm%2B0ElkieyNN4q8UzS7d3m9vemcYDPJL6QaWL%2FnArbuMbJTMlRI5HV%2BH7uXM5X6dmIgAJcjMW5SMsLtfaC2SH3ufDpQjn4plOLxbZOE4dM2%2F%2BvSX3IvSGIy8n5YYNoK71ZH1i5uPDBwPmiZxuo0fWwunORvbm2Vdw49mUZphR48CgK3UVVZ%2BjCdxvPEBjqkAapEVWiryVB2R8dmc3Ez5YudxO%2F08FW%2FPcOIx1oJiGknF8zvUjl44fpy8qJ%2FTIee5sj1Y%2Fsb9X1KIQ3t0PqFCn2HsykX1HTANol5TltrB2BnrUWdwWENqRAIDNN2cjanQsyOUkQf1UC50R6UXVWG1F8o87IdrsDKG1Kx86mehOkeAERy9Yuz6VvtWEmjU5suVYF196zNhxlSC7fKUMIMcqzlRhfB&X-Amz-Signature=e9fd7ff3f0abc4e1f0618b7398f437533f8513c23f759256e37af14ddaf56e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
