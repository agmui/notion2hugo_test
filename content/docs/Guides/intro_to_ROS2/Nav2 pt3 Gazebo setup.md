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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=aeb8f52a73a72294b2ebff5d58d65880069e76efcc81441920164481da116a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=d0866b09b7fe7d9c5d3549e77ea9bbb772c08de43d0f39abdc0a3886b9849d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=c4ef95834e9fa86048f938d019589f16616cee48715f0d9325e31378530e6b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=b244ad8d24c9582e9d87ab0faaf360b484cd4c40636bb0478f2b1e13f620ac16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HF2PMI%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC08CM0uURmQWrsgcAnpAml8klZ8vg3rmPjNCGsDqMoIgIhAPInLyA8nh8aM4a1ZBaM5jzl5eKjUZ874jJi81umD753Kv8DCDoQABoMNjM3NDIzMTgzODA1Igzih1%2F6Tjf7r7TVJ%2Fcq3AOqgPj1iFC8YzGou2Jwp8T1FpVskHUZhHLywN7LWkLXwYt035%2BfJNuXzLHUF26ClGZnuPvJjmwp4XX9yZQmihdjTjd2oKI8E1VLknekfVWx1fQETTpzA89M8jLZvUOhiWRt1%2FTTuxbmaXGzZl8hOd%2Bh6hc3qUp3BteAum%2F9Gr5Br0YzJpnn8HChdWmW1iNF7uOAX6Y%2B92AI7JF6H5iHJNs32ZwUoJQJPMnes%2FhWAd%2Bk3AWwTNUD3QXVYulahZ71U9xmn8OUwV2aRexpKJiHb39jy9AG3FGUnk%2BXstscy%2B%2FoF9HX2sNSwuPAn3%2Fbe96Rcj5vzvuEr0tGSe3dA98ndQWT3mzkWeisnO%2FHS8iSVcfPZNd76yFicxiAc4Fq%2Bu7UNLWB1T72MT3ZcTAerY0OV5o52YimJ1TO4nxXE2iDHRWzrPGtcM%2BWIQnh5bqWfFOSMg1nz0MBepQYx1yMyzx9NsPuPaFJ9JWmiZHJpeHzIibQSuAs%2Fl2sN%2F7p9Wgrt6Yak0IAba7b3I4xDMCWAnZIWDxMLZ5hy8o0fPj9wMEdppDbatmYDqkNuPKuJRFsRukaNLq0kiAnhGXm4VpO%2BtYw%2FzmTW49tmd8diE4tQkOD%2BdYEoc2oCtrW7%2FxoJDlIuDD98OXHBjqkAZCC%2FNQV36trrq6G%2FmZHyeHIrN%2FmucCYDntLwtDQRl%2BFNMKrSbmywKIRSmXZ4lfAeBOQPcccK%2FLqOUzobsxSWTQ1HA6lfCGa43J0TFnlWj7obpUoWEQuyVA1JVOqoFKvj5vpgWhnBtV4xVLe8OM3dcQlXFeqF63A0L3pQ1trMoYgEUZxLWRS6ujIJvC3hCFVh7%2BzLET5JR%2F3fMjGFm2Y7d04GTk9&X-Amz-Signature=f9eb00eaf41e77d6dc2ef52f89004a0d6e13a25e707555b02d4ef6cd12e94a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=82a42d06677b59fee74085912cfb0733f0b2d0d2199aa1d6be7cee710a783061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=aa2312320048ae6a02663f1de8c6c753ef3805f2e44bde86f7f14af1efbb7f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=1a5d2da450066df4cbc9b0abbf15ed06a4a49601ef23bf3f306413a23f64e97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=885415f140ddb3989be2732917a266284e704d87df7fb306dc7d69c7d70623eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=00c06b424abcd4feee279da35153596598ab25707830c5619c83ed8f6d1316e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZQCIC4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVDBWmA1pvYXDLC9R9D5T5R3tIkATcQoA5YQu7G5NYAiAzMR3ZrfiPb4RDnW1F4mIoc%2FNxhWdbYLdfHOWdRVaLXCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMc250NSk7whFe7fnAKtwDTI9%2BR9J8cvJ6miKbO8eWDwl0LMXth2GNW2%2BStqtviku7ydXKPGonWCkuCegZSJJHu08hffRZAjqNCMvBN7LSrC3FfvV5Qk0dmMJE805BTjJXa7dfWsCp3JcYHbYkXepfQ8YpC54bZTm5Zzvmu0uc0kzQisrZKYOW0B9OJPslSR3Tf1h4rbSndiLHR6%2BarA5EXvsu0hNoADxgYm8DIhr7lk4FkqAQIBGbhveoR81nV88DNqcZwCb2FsPCj2fBP5NZQ8wW%2BOGAYZxSxIqsHj9VckGdyXCdc2C%2B%2FrNZVQ7laPSxRGxB8SDurr3IJFFqNNkkjjuRKv%2FkEnZ51GANYIUzRs8498SRSsNOXndukSwln3T82N%2BoSCO%2F%2FSr9bL1KMPamr6JNXVv%2FmA8Bu1OhplhJFtm%2B4faXmahWnyRGPzOJmggMJ2NPWHsyzU56xsJWqmm0aTjKl2lraWygZLzZAQamZI9SX1Us8ujKAEicnshEbHKS8%2B2AUXRM8HO7nshxtaF37Sp53ggZfHl7iouHioV2uisWaDFXOFY4Q9sqewyu1oPp%2Bf3VkzieyS8AulmLA6jXvUNvBVGnHK319bCDL6%2BZtmwLZo8SN9SJAYW0goBT72iufQE3mZVnHn7puywwxvDlxwY6pgGXgKrWBlxdQ6Gv5PkI%2BxLLU%2B3RACU9zz6hya4zvLsRV1LDjxA9%2FaT0mkH1DNXySXSl80ZNWgM4S5UVGMbnI%2B7qdArS03LsI6UyNPZhAFjUVKwKchGCpJKn8oWr3YwFg0RGM2Boaj2LZZKvZmVSG2HbSbVxjC4Z05ZCL2KVsnofVpwFPEE733tX1wG1%2F%2F50oSwIQthhrgjdlX8nYmi6%2FVwcIM9jBd2A&X-Amz-Signature=a762efb5e8ba74ac7701761ca9b9cd04ee7c742b9c3edefbbc14ba04bc310a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


