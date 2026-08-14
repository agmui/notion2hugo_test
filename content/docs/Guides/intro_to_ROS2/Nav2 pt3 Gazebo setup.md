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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=50cd741d1489d34a6808736b43e5aa8aaaaf1cf8eccb7b28165352c6a9aca39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=99a3d57424daf8b202542919d8dd08f63a272097b9ec956aec59ca7a5780eda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=91d854b6d99ff4a708c204bb93b0b00499a4852046053f3ec455f3d696049bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=42fba3a076ea3e9925a38242d0ab3c2a8ce3dd3b4321395b7993203f7df5c22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLX6VJ6%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIELOnHZ2y7Y1m98ReZp2z1Gzg%2BcbSd2gVKYbr0dLBn%2FvAiB%2ByrO0z4KVDNahaoF2BUf5JofkXngXd7PlrTdu0UDDQyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqpA6m5JxuyKPgWL%2BKtwDzG%2BYHUaC9HGhCKKWkUc17hg%2FRMWqqnH0szUQX7o0i3ZvGXFixZq7VECZuiU37aenuVoOaFEykX%2BqvHJURvZj8JcT6tCOitzO9AvFRG31PMEWpYin39w%2FpbqeHDs9Kd9g%2BTx5%2BMdtxn83FiM0BsSLY1JGdB3C%2B5U23rUt2L0%2BI%2Bk6YJM0nNK9rFT8ZsUioR7b1BzfNrDwc78r1HueSp5y2h6YG2%2BWrG8p%2F1JeezM2WNLOjh%2FdLPkvkdS59OVFjOLLsNlsvruIHWSJJTr7MpbhgCWezDalcU6K08KfGyMzBPF0DaH9aXmY2ofHK1TFs%2BtHSJTCRgFr0p1gXBp%2BOFED7sRv5lQAC9pm676UbiTikA5%2FrrEan7DNjpj17q%2F8r59ZV1dnFxAJMFfpnI4Z4Ql1Yf%2FYiTNtk%2FAU5gpxYqjvVqK993RBkP7j2MqZeqZzehkxPgYemVM%2FFER0emp7osvAA1T2HKvEZGGuPtWgJ%2Bb%2FA5nBfkyxxlKfAcq57FwKnzbzxqXxT2aPFdPvqw%2FbXo3%2B0wkmnYV%2ByA2BA1GOyB3vK9Tr%2B5DxANi2RXITD4dhSniLjLrq5INwVQRWkg2W2BPcwxsF3%2Bs%2BJUlwsXC5ozeLPc72fe0PJ7SvKu74pTYwlrL50wY6pgGBHK26bSYwqXB8vqrUxJtRb2VEQyAXuyRP9m8Nv3KliE18kySL8b%2Bk2IHSSZ%2BlbsqqMhegUEMiCIlGqGFkGuNeQFuGbxsiZL5rE0px5m%2FxXQS5pNvFUItJONCN3MFetGdmYBleUzhA3YqaAVPCie%2FjSvFsg%2B8%2BdNDgWjXFAdbqliAL1%2FRdQ%2BBg1%2BTf7U21o5zVOg8W2Oog6UrLCAobKgR%2FhzRwddJY&X-Amz-Signature=6fa5bde287c0cd598732c219a204ea92bf47cf0fd27e9bbe2ac4a4c80b1639f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=cece37c5aa2bab514f8e3da72efeaa699117902e97c23d8af3a11f9555fa5ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=96e631474b6a7263aa6a87e0522d8ae917e85586137e0afbce3f993da5c5cae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=9bc75b29be66b0060521bf096e5dbb30137f5e2d407e992ffbbc50788114164d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=de3de2805439ef4b520e365086cfde9884418957c3e7398bf5c3f1e1b7ff160b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=34508a95397466f708094fb488808f2cc207ebd9f698c0631d13cb9c341dca26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A65WZX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ2mEH0hckZqFK38hTM%2FzQ%2FuQak1Ly1bbiCUR39wPvbQIhAMVmP7636aGCtDvsCh1q7ETKfGb9p7i%2Bp5jHhY1CMpU%2BKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf6ag8JrL%2FuB4d3cq3AN4wPFVERvgyj8mm%2BF9dgPSYLnddOgFMmKjr6si4V7%2FnCU3UvEsqIWwqW5sdpFq%2FdexTmTU6p6RPm1kpfOVorWtgij4vVgNSmlHLsbimi%2FYYeBXdEMsN5wRep9hfO16%2FbPc%2BH2jmnjH9d2BNRu7j3G%2FeJ4ap%2B94pbVtRN0OYLUxv%2FpvcCv0V9cIwO5X7EfShRfaGlvWhEW4uerGhqt%2FqOLZtB0cvu3sHyyJmNh7f7%2B6aPNvTeBBEos0rmVBThJLqCv6B0V1lYBgWmQESp1eUVNXYslGtw5oDwZOsU%2Bx%2FaEFkBjWk36EkoEH513BeKIHTzIXbfMEZHpzOhzjdeHMC%2Bmn1rbVVykinykBdbQLTGQbn%2FR7A9Xy7M9WCWKjWAmNiAWt8iDysZs0kr9y%2F%2FpzFLur1dSFIIyxhqrdj6STfm1zGHxWhCN2Bpq0n%2FyTcgQreq5MidZL5cfrEo2o%2BsjdJdlNd1%2FbKaaDWh%2FL30SfjJgq%2Fehdly5iyKpX9D0EnUIdy7kwpYsk0L7aFdxSsgOe9%2FSI8ABS2%2BaUFCs4O85ALojk081qksfoJsR3ekdDSGo11O12sLWNn0FJv3UUTuafaArUzgO%2B0%2BEhuLovBVo2WeZ6AeeyRyBVszRfSUXypDDEsvnTBjqkAQkJ1%2BaFg01o3TeAaOosfvrTp7MfnSWaCvM7JsNUu6H%2Bc1Tv39yeRTybqblKlLqHa46qQvn6IwYtHBWyTSFdDi5z%2FSC0dQJDKFBUjOp%2Fcjp3d9fYX4G2pZveZDxfcffXlic5P83dxoBU3JVuF%2BuCMGa1Ta8JmCzq3rVJF4rqLATQzoyzgudvWzU%2B9eEbTM%2Bq9lgH4t9mH5cPy7llmWxoOyntJKAR&X-Amz-Signature=3859faa335495185a68c2686478eb06f6e0235b85ddb95fd2627e5ac9bb540b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


