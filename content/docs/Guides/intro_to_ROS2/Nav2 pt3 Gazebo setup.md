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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=79c94da52700d31892be410d9df6a4d1339771fe9f38e3c4c99f1834d7faee75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=5eaa431759775ba32d3b58fa14d46c46fd36ab3fb21abd360782d33035ee33e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=a6020b51e631da42a374a568d0ebb7d9a0471905a18bbd4752148cad2b05f2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=f32cabaafa6833a213d951f8124037d4f701cd3b7875e8a2391943adfb0a61d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCA2MBQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIQDNK6gm8mUcUeFtlB1LvsakyAuHfSTPYA93BYhD1m4fogIfDhEyJV75eOkNYL%2FedgXr1mOnz5aL5Kx4bIHYzU6fwCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMeviCeluX4sOIQoxRKtwDSS456hqRMljm%2BDwD9hhjq5TaEzrRdjh1Oq5j5WR3Uw%2FFE4oGDVFyOZSC8ERuA8uhdclClDYL%2FxIpGYZrzL5YWp5wc2Gz3NcrY%2Bxq8GHbBfYCOUGBD%2B%2FiF6EvMw7GJjqKIWPjgPU%2BP%2FEExHfbf8zx1u%2FEGFWdLy75o9bAPhCN0GWaQEI1yFJlup1ZE7%2BN8l5TTIuqEFhLvNmNsTNauVnXdoML%2FuwhZzw6tGBtJFEH5cf%2F%2F1sie9ljgxzAQY9QLBAZ%2Fe6iLkqek39QAeub3Vw4GMgqc6L4zwIYfRBBVmkQPbwWm6FoPNajD2csHFUr7xbRmAo3St6uDNqQLviJz7uSPGZ%2FxiaZFNOk%2FMFamX6ubg1QNmwd%2FXyspvkVRDNgiajnUbMPjpYqTt0TRRDYcsfbwTLguUQobFUwJ0i7M1lhDPVX5n2M%2FWn1kbM9wamPUXQEE9AS3GJiH6vRNViv12pq9Nhba3X%2Fmky7NLIOgTViLqkwyhoMSd77zA9JunX5OkmyVhe0VW8cLGiAeryAx2bvzY1raXVh%2BffnXGO%2BKhbIJ86F3g9VjyWOzNGkwbdfK8NdnUoYoPBT5tZgY9Y1hLYuU5AgDYpzcFuwcnJxwrLkBgBb3AcFpF45ReCPP4wwtKzHxAY6pgEtHltoAVEvzWBGJN%2FybyeCwjbQifjHTAaGpzcl3Ymi1lrzWDAs8SUQHyMruKCn99xrnj3S0f%2F1UnR1010FqpVyOZj0Vj2q8k8B7IYC5iforzXejxouiWXihG2tRJMT%2F8g8YNgzcyy6jcd6V9tTlxqfI%2BtmoG4d%2FMxBQ6dT7U%2Bj3YkYNek7JebzmrRTFhPJbJeqyYptn%2F%2FxCvuO03%2BPbhIM5YVDyXbq&X-Amz-Signature=219d05eed15dd3c569833f0acb32e7918efb4704407445df63bbb32cb5d6ec10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=72cefbbfb553c64354937d350ed5cbe86b56b29198f63b56934a17d1b1473fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=f1eee0f432a972ecdad3a763b8b25556ad7f1613473c0e4b4387df1ab1a73223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=ca16dfb761116b36f1ee5bfe7ac7ed6b1dfe157411435a39dd6f8bc09212feae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=483e32e4ac67b627542e3e07b80b0b94dbc5f1627c3ab6206e280a4a82e45266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=63ccb066fcfdcba6bbd67aa294c9c67a552988467f8ff70340a6d68bd2a298e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZQ5OXD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGQpke5uftupYNK7L1uAwWf5chuf6%2B7x2h%2BbqGxxENqzAiBTtSO8q1P91nPsIRkNpGc3A1xrWh40NvhTNviGeWD3sir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMord%2FmMLpgD01tuQCKtwDQFZ%2BtXpExqKfs4tTsKFzd%2F3zq6k7mAJ%2BtEVgcoH6NVwceWj4FzEo1ZH3jkcRLcEQovdEN4o0H1pcPNk4LEMLlp0B0Z8XZtMiQLw39vTjnXeCVE8r2wNPV%2FSvpN1zWcUdfsk8Q3H57MuCXbhTt4JfYrNe0Kw6rr6UOAV1WD2yxmZiOHZxQO4GqOXX2ho9lLp2UXUAY%2FeFwMaaauGminkVA%2B4096MlaQ9sS5EniCc1gSS17jfD5NhZRGV%2Fpf2vrJNI8DUKv7xjiWKD0qWRXlkbtp2o2oux9ClR3jXRcrFGODOk1las4wcSxaKYSh96yWlEKT%2FljRFmNL6yHu7aqRIp10%2FICkxs922EChEyvJMhgpgg5FzMJfjuCu8iWlE9fpJvdWFDNUHZqL%2FydRs5ag%2FDZjO6Y7qx%2FgsXIwMjT7U7qIzqVrWG6%2B5F4SKOaRxk%2FOQgQPeitc0EIyplgXyzd2Yh8BwjNri9RvnSsOJtQ4IoUnUk43mIYWMvZCBu50AvlD2F0iouT5t1RAJeU4yQ%2FDxNsjQ8rEzP8CEjrDm9LWJcaP4l8oOclB%2F%2BuEIqVO7bAQsrvY0QnQXmwRPk8n4oo6RrwwBB3q9HaPCaxo7gEK5BjsYNVDRdUoW%2BxlENdJAwpq3HxAY6pgGMG%2FQ0pTzIJ0gQVacrPS6%2FI0f3xhjFcTHtCtKzV71th3KG6lWqiiqY7nujxufsjqIX0oue9jQQGvEqL3JJGQbZpU2DkMzTmRsqe67xM3VFKfeLgFIoUY%2BHiOwTJ576Tb3JLOozBuor2VZX4RyaWc8G4mjTsfa85pJAOfVG25iYEeQLHM2e17hhQ33OLLCAZobq38Z9KFx2rBb1beTk7GfrEQ4aro1%2B&X-Amz-Signature=c3e23865ff3bee618153b5f1dbab9fca03e026be4caac6cee7e3525848d23311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
