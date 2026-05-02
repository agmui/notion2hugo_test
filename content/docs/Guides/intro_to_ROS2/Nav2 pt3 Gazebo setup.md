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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=ea4a041a3759c507f568889bbd0d2bc073b7373b4c08a44801542349aa890013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=98bb9dbf3fdef79256427c0f709d38f383a8db2ac635bea5fcbe7aac44433dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=1cb660ceb1283f4cd1ac7fc062c5251abed0be6306d9bee6cc6b414e66ce8af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=a2b85b865fbee94104406dd5db3e322a070021894d7d29c01e77afaed8153c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764JR6YO%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD02SXPzSsij5qCwC8RCmNnwJVJ4L4kRPYZgNzO%2BMTOTgIhAM8qWBasugCyuBjzsUJBuyKLpuZ%2FN7hj0%2BI7ZGQFl5AIKv8DCDMQABoMNjM3NDIzMTgzODA1IgzT3xuMIHACWufEpp8q3AOTId8hBxdu4QwDy4ubGwtGOmQHPpgQtxJPl%2FBF1ITojjWqSfS%2BqoEo4ZChZg%2FSHY8jcxM1dpzcCRnBmOenrde5svkMiSaOYU5U1kfYQtnLwZLR2lY7emEznuz2dkdRSPccSpBC%2FpijySWyqmaV20rTNNOZJF%2B75d%2FDCOKsdL5HpeTFHDCb%2BlLTnSE%2FPbj1BDeUYUpXT0RAEUN33Aiv%2FJQ9Auxp3TZWB%2BaP60pa%2BastL%2BV8CTDYWxdImF7eP9ZXvCBKiYOnK4p4Gbl9WSVVsyn0IEdTabGXPzwlL5UDCQIXkC4ZgzeHlPf6nK4WnvUAijlWPKdqZmYxpvBn6XiiDq%2B3mLwAwWo3raH6APu%2BCO2nYJiZ51PP8zrZGjI6tJOBLBFVqaUMVB6oTY3PMby5J7whhC8TZs%2FJp0uyHUsFWQizrt1x1zTfwqqnXp%2FiH5yw9T%2FoiPMAt3HfBbtNO4WNl5T9H2PaLbSGzayP32N0wBTYLBT6d7AatERB7AppxgCpGNWXWpB2h3yi06Ie2e4ta6wVk%2BOMmaJ8EiCXF1PXmguNF%2Fbd8roK8bNT%2F0HsnjxGQc77OZs9AdhP2mSCg1liGHQiLVoJz3djdgTZ1f6nFv68W7Qq86mkpQTQKXqfPzD9ptXPBjqkAU1%2BL85z9N2G5g5pv12qYVZt5Zi3NJrSrpKq3wVtrsMSNN7wIUl4nWxUY31HApSV3m%2FVs8izNXTasB1UziJCrmIJJjrAmYjDCFtHOSCDL0TDxCsOLb7RAxDrzMFe68mFtXW%2F2LMZ4D1gG2RVSrVIzfBuINRFrjOlvVkkkqlPyr491AvSAd5bFlsR3i4fhifk2GP5d66A%2Fwd9b8cXfelUdMCmpIfF&X-Amz-Signature=41aceeb3864b11059a067b3107e9e17e4043826339cbbdd3354d78ae4cac005a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=a89ff1dbed53aac41078ebbc7e773bc10bbfdc18519934ed207877e219f3e46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=0eb96c98377e3cc66da58015e05314d9442ec195dce36f1f02030e9e7dc6805f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=68263054159d83a418be29098dd79cb2b33f7b030e0854c9230159b56b60002f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=8661ae584dab01aeea6259d796a0ee5269fa9d7e9eb5b9c6ab55a23381bb41cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=a1451e5cf8e4c1f106f97180ff6ce2046f99c5ee3cb7e051497e2036acb07f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5RKER7%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC7uA95M2yKN23h495yFSQu07cQZEkQymhBv1%2Bo6DMJQwIgS%2BD%2FAeeirJ8v7%2FOa5lZKiAOHP%2BJ7azyPtXhsVtRoa94q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFCux%2BuWOXAXF%2B6JZyrcAyNKo5m5XGMffwdgjEzAJk5JnJRRiebiSrgtba254KZ8KqOewbN2iDKV0d7BHI3vmB%2F%2FOurPzz4JGD%2F663d8w0aHtC2RmH599c6Ipz4KeiE8%2BpQXxP3crOs9dXG%2FSE4e4EmfadtXmt0taSSu49wxNoporu%2B7Z67p1LEmInW%2FOF1YKoeww7H0t2%2F4SiJE7Ll4nGesW3f7xR%2F0qdSJu43UrVGmVX7QzpSvacCet6K9s5fbbujgYxZJSnp7rIF97qS6Y%2FZ5iiKIVVSC6oh1I22Xr5K23gqu12LbIwvOExzl7ICIa8x8tlcz1lHxke3yh32CuNkDqgSjhmoOzv1nZWMP0oflh39kfMRMYkrlsEuDGt2guCMIgzYual1TN4ECtEWLLlCJS9sYfQ5ntBcXH71g%2BzYgUq2u%2FPM%2FO%2FpqOTNe9S5cc2iNLst%2FBldWescgwtXRa7%2BnIZD1zObxQHQW43kTr%2BJw5PQ7MW5gnhtWYPHTvOAI1J2qrCgLOAyCpJsUHARx9nU5kIvjYLyol%2FrULas3%2FzTsNoe3ixWkVQIvbdDWysHuwsR2SCTUtCuXhul4tOPA8sJOXt%2FT4KhDfL7XokfWGF0rv3FbElKUAQ0%2BukYKFMVLoiJNyg9Uh166xBX5MOnJ1c8GOqUBxmCW0%2Bz4dECKW0fNsPVPP2lMocaqwU%2BIRMnnRhZLb5GjE0e8uF3%2FpYvCjyE6y8NSW6WxbK8KPMCwtCJxPjB94zQMMERTxLQEZvyadWcFu4fTLTmQlqh9gAsS5kvE%2FSUf18235oQUA4YJrBoscrBSJRfVm1pe3VTqSmMKX5cbBkv81Nx%2BRICDzNO4omkGdbTyZKavlD7WTG%2FD07VFWrSx8gnKV0%2Fn&X-Amz-Signature=09cb1b09c265f47ffcbc431550783f678f9146b2ce700589dc8e8422b7f8ca4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


