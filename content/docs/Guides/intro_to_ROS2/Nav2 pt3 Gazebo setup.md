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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=130f5daf292a6406921558903d8bae446160721a85b1864985d7bed77417c4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=bf767a4db3a4038bbb8c171793c4ea5cc35e6d8da99492e4846ca90ebf488a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=6085b82496a9e280771aba99ef5ed52067dbdfe3b1c50403115f403fa4db4b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=33776a730fb1a5b3d098c97b9b695df403aeb9c84c003889651f04cacde1b37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646Y32H4W%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDb4ChZ8h53RE118rmzfXpJ0bL76bv9nhkWMPN9W%2BluRgIhAOhx76Pi4fcz2uxv238EatvVCzXBNg8bE9zOXte22FJDKv8DCAoQABoMNjM3NDIzMTgzODA1IgypnAtPOrRTxB1%2F%2BGAq3AP9mOGquxTG9hcw0Wlbg7eAUuhN1xen8riDGH9Od8qbOA92OS8%2BLb3ICuN%2FZw%2FuOGeO7tjn19ePZBZWbyZpQjWW5VuzqCG55dubgqRyj8n6%2BcoOfvPpu9uSEgIcuVCfNvCRtEsrrEusmiyS2QipqGxw%2BfqJkk6%2BsLvYi2UhQ3GIFxfNp7twFqop8y%2BW%2B59FWtIxyZwHdDvoeKpivpGYSFVfJtu%2B3bBOoGZBuxc6dn5NUq1UVNv3qlMlFG2%2Fl8T5YTJlr52UYfGM3L796iaDmuit5dpCaiA6217FB%2FiHKz%2FeYbmWd3Hfm%2FvoHgktaaXIJKnP11g8yyxht49pqasCRfiLAYmK12e5xYcoUR42aNyyYU3uleMqWoZQVD6W9WGZhVJ19cD24nXAU4J9gaW9GGUENA8z3Yi8iK3lWuPOXE5doY4Tqll9GfB2GFPBJEIM9SPPllZSybh5mH%2BqGHl2wxSaSwibdoot7vlc%2Fb80TefSaMEreGARq5%2BtbNs2Bkx1k8rfX8mewkkqltYndy8WNwMYBHU%2B9fbyRrPN3V4p%2FvQGImEnkC3e6i%2BBfdjz0vFGXQ0q56Ychzpe2FPxEd4imz9PiBS%2FpDz4c6U%2Bz8Dc3RrCC0lFHdssyfK%2FMTZusDCFnrPNBjqkAbGado%2FBc0BsdIkEMbhDrZDhjHiVe%2BGSurMDlJtUOFiRRBuN2m1LMNL2Ozwq8lhLxmCh4sP8KgEMFo8PgSIRLWjUGQO%2BICPeFpXZn%2B7hkPE%2FO69YSDUI4yMqXUwTwlGPONs%2BHhkPqXOwvpu0qaVvhpZ2A3VJHzex86QVJpi5VnnHfdCCZgaSFlNJtMd%2FCY1aPDmIcV9ilP8BFvdXqMXg01VLEY6i&X-Amz-Signature=4e6d3a04bc29dbe5c831cd569257b27455b2590f685e014bd44d8df4622da95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=b42883c81d5ad248f835ac06b2311a2c77d5ec714ce4e59e711653da5e084457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=36ee154c374893082dd6d7c14bdd164e04ad89f040b4cda6d1d52355168dfa73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=2661ead5fac771489f50b167804c14244955eab6fcbb68502e858d9ebb5393a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=9056a7e5e350d135f5ace2fd014d9ef405be300d8499ce9ce98558eadeb82b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=50a3891ad887fc165b14d22be7ad31501a8ca301e2689dc66beb846f2e5c2033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDCRKTK%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCoF5g8vaDWRag3qwm7TWSSieHFlWW2ZZaH0ADhVHrsaAIhAN%2FmZkYn9OrK%2BjetabIClEe62V4LGTRmvxJkMDK1bZ0EKv8DCAoQABoMNjM3NDIzMTgzODA1IgwfWTwMis43dmXVuQIq3APcsMs9jawwRgwkmiW9Noe0JuiMjNqPwua2%2BPVKXgyPz%2Bla4oY4vTMIyNxgT6ceboMCcFW2BLoSL97QaqcOiIuAq8MUV2mhQfO9qpaAGvU2YSvdcBTopth9etyr8MMDllyE73S6rSMIW7ZjYhLuIYIC2UJJi%2FdB19w15oX2yaBYWn44fXnAsGemZF4QyWTBjIiuea4z0gnZc%2Bz5tmabGSafilObaIW53a3U2FCmobD9PVGwYt2uMMn3ocFPSaqat1lpjMpVaqbEjrRbZqK26OjZaZFD%2BHIveMlNn5Gq2eCNnpvZ1b%2FQ53ezln%2FQx8xFh3ciNbeJ9rUMJCl1Wn%2BBjwXWaveXdDBTR5fumFyI1ReQY7efRuzkJSALSrJEhZGk%2BkPd92E3W%2FTX2KaERr%2BilNiK2jq2U5EZIIKl5qnDXY4blzNdkfD4mdRHd9s%2Fy9Id1nhaox%2Bml5KsotMsS22jDo726dVpLwzs%2FAV0M6B6cEqzL2NRCWipaOGUGlO8r4vcaVr9R7z29Qm6HZjX11gFV792AfKrSWxb5KdiSxVdmrxngAyO%2BfIfoD9p6nw%2BsRJkcNJFBx0mJ6dDNdoKYnHMw1VRhXHOFQVSkk4l2BWXQH3A5C9%2F7HcJ%2B1SndNylGTCGnbPNBjqkAfm1IFYMGwz251JFc%2B7b5lRUqfOFOCgVXmZu%2BL8Ch8FTZPNdUEyoXhxWTOhX8JlNfC7kqCqDixC4fRLR957x472Ox6mr9sT6NEjhouNT9j6pFNB5VwyOJWO4c3MK8FBkolweoDMnjT%2BE0mTATAbVM6vbAsGlJVObjacoq8RfrT5eug3a%2FDcTVmmswWrV1OunChu9iNu8So0VPd0FXOap7C%2BI8eA9&X-Amz-Signature=d2144fd8d8bc9d9d9225da7d8deb4db75e8ba596ea632578fc3200c99f4a2c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


