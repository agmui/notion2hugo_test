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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=50e610b043b3b5c58dd31cdb80a7185b45d5dbf5455d5a68e74853d838eacc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=e47460003669ae9ed80cfdaeca473d209a908b55ceae329e38e945b28fb4d6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=5485e0461e5813bdce5418808ceb05efbd2f8ddad72b41bcb66c193f53006857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=4f332aabff9fabe00c7cd02987e45d896597ca4615c5ccd2f88b5b44af7f1f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC3GSEI5%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIG8lUjsm2ESykK2y2pteFUOJGZk01YsnSSbmyT5Pj2unAiEAw%2B6KhQZ2KVg128HmEHDkGGZXmwH71GdtTgPq3bzLII4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe0GdtVi0nGVreKGircA%2Fc%2Bwg7ASRwczpIMgvkbR244H1yn%2FHgrwnLpsmW3uYzFfhpd7YG8jDlYXZFAR5OS7TyTTHKUJVDjOnK2VHA%2FYcLDp3IJap8825jR9OGGosA6w5SYHXqcdrQbXvYjD5COPPU9jO1LYP%2F69z13YtFX%2BPVGrJ525e9HG60SWAcm9LKwcKtzBz2HD8ws7CSc2TY9iZcxMYVliETMtG0QbVXIZcrcjRo8AH33kFcquSD0WZleVNCnCbAjYvDkbGsR5utFK%2BBaU9F3e4xTTiNpT%2FYibn0KUGwdMTKonQtmq3jAjPD%2BwsS8xHUWZ2b9PER6visQT439p2K5tlEgg6NohUN5OUEPNGkZAuqsIebc8NxxTf7EfWlh6%2Bsd1KNMVoNt3CoLrwilJ7vxcYH7pP2H6CCL89Lk4Jz06dURfgBmGOk0KjFxbUi4e0reES%2FQjhjhQUMOOWaaCjVSmAb1JtT2LDYAZa94w78TEo%2FNCVTCi9gbT%2B202n2%2BY8bi5Qd%2Fmn1zai%2BgCaIYBvY0zpXpKMg%2FqH9sW7bIsZ4sqhPr9sva2CGgLm1rQwMj3BelQOVdUH%2FN3RqmrizAHGoQR5WopKlriTJol3fuVIxtHVlBig8mqtet2z8mcSEyAR%2Fx0yr%2FSgTRMLHez8cGOqUB%2FCGXJUj37wK%2FTMUCJaUSTIpVM%2B3jTzkH6mCHcsUlupXiuffJwbVHQ75naZksiKxYtAh2GcdGzTlglepvSE2zvEaskwIMtFTfJsuYMApyV47jE8iqQX6lUJ1g4SjR7UkyJwhm9Zyi4nTBsgNld5FVVQVGHPh6fxQxhbGQMZ2ok5TjRzXnc90Vb6t8WIGpue78HUyP4lNi3SW0J7OpfaoOgPYpg4ut&X-Amz-Signature=01deedc44911d8f2db7d0623d270e83bc4a8980f82a8ee38d15c02fd6c3ea70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=98fe1e4e94d1e21ec71feca3c034514b51c7a17caed7451d5dec735a6faad8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=3762a4381652db59a2d42e1f51147b5c3e9f7be9806160a1518d63c3cff20604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=0637cac01f9b72953e08520f0138a1496b56e5cdb2b0af302576c36334e43db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=1988d9fb7ead9bb52c7d1dfb2b23329bfd99a05a04ed1c10b91ac6e2fcb70970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=caf81340c505dc311691bf377c02824f503d129e1a8c57c75a005e957e2477c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBPS5D2%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCNWtAA3K4HRLuA%2B3Bxo%2FRCY%2Bc5Yt2bVW%2F2jilZ1Md7lwIhAOE33J1Eyv3FmWFn2NQ%2BV8n0xMcvQBLXOEMjP9atTwHZKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrvWGhFDKQgGiXPYq3AN7uddlWBuEA51t7ICwHerfexV039SMXOqlg705GsT3brgXRe3pMshKer5Y24XlWUlox9aNSNe%2FOHH1FhSiS4QcNmp1NhuHCrfoS6w3%2BZ6r%2FSYd1V%2FTHrmyWFSOJyi4DmTfv0oYtKehvzjN5NuXCjGaqvkiq3y1aB0GydZcBD1QCE2zhuvKE92lgxBibGJ0Xfv4o3YezxBats4ufZ5Sw%2FVKonD8DPD43dxYE4WVakkjxnRJZEFq2sol4yXDM0s47hptoqMqCeO%2BkXDmbl%2BaYLYEyyXaPx83lwEsvF4FlTBo06Fz9tyTPenF41v86zv2Dn8ueb2MOq3OJk%2BXWoaP1y093HnOSb90OF0dgX%2FvQHeGmK40xVEGOz%2BO7%2BlSAwvdWmNaJGOGz05cZDNig3%2Bpjm42Xdfm7J1ySEWbFDAI1EWaNpBhcXbek20IMT5x6khhWwP0%2B84LTBffLW3HVhfoRoqB37d6PenVyOaZ9TG4VvkUEv09kJ0pGtZl5lpnzUgmogNw%2BECAsg6NTNebe2ORWMBPkz%2B48%2BdJRkREgVhrfDXdKw6PJC%2F6euRGs3UvHhiRP1kMHcZYL812LH8vFSmBysSdKn0rpkdoLJJaNBVsVhn7SanOsKHWS%2FLcy3OqGDDI3s%2FHBjqkAT0nCZY0SzIxTjj%2BI0Nhn%2BHDPfrUzCOXOdPZ%2F3NFX1iToYJXMhtOykj8AyfRlj93Rg92gLpITnRLkk8oZf6QCye5UFqbQRd8Rlwnlqp9j7HsDllV8CDOMxwn2G61wql7eNAAuzuhIFjdwItDt1pWsdW%2FRbRa7wVyXOeUtw7hEQTNtkugxP2oKE7Kfp%2FrQ5lZjTfNZ2rRrG7UBS%2Bl9E%2BHWDWi3F0f&X-Amz-Signature=0bc1674a730bbe9065df9ca0bf2a88417c4773c7972bdf6b177f762445da262a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


