---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=8e66738026f6dd26af042d805e2baa9d0dc89557a5e940110ec4430183851780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=a76f68b3533842624b7621310e703ed9cc74dec0c768a5b0ff666cd700197d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=d839566e3a504e3fea72157d464e4208bfc2aac85bae8ada25ad44909fdb54ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=c5517bffa855ce89e7b8cf5dd291b2a89750b2744b074798291b986d925399b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=4aa103f39e53da29a17cb5e69a76633cb0e0cd7dc5cd6030c8250ab4877c6b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=2e4a8c1cbf3a0d030432f8dcfca0343f8f2c396f9597b0477cc0e3883d086ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=8ac0fefbc6b14fbcff77f8da36560eeaebfa3ecc96f7d6d48cc85f23dad08faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=82e6c7b0cab138be1cb7a188711d9d2ba8815fcd4a73495766386c8cd059e84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

TODO: get official docs link

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=f76ad4aeac7f28ccacae9f5f0af7943a1e397ce7d1c5e9a3eea8866dfb2a8999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO62X333%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC54wNcvXJkHIyOpnn8C%2F8Mf1zYkN%2BmQ6hzYzVDnCggQgIga%2F7nM9RDy8Cm%2BpIAMEVhnMb2WwMN2%2Bsg%2BCAGVc5%2BkxMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPtHfgBKpg7pi2ZyrcA8B2NnzPntjGt%2FUpNDXeEQBmZc%2Bhxydr5399ggPykaxMPq%2BzY0WnFL4V%2Bu5%2FeDUpWlVFl8H1a1c7cWkiSSGNrUegw7ZGvtsVl%2BJ1XOYyJNiYGpEIG%2BhDqWz9frlV%2FsBOny51M4M9Gxgw1PoF91MdZd4u%2FHi4bodpGK8vOfbJGNqBNwTT3uYrZlNuyZFPyKI824CIV1hqq23wAAJaNIWhNZ5A2%2BxLapi8xCs83jun71ONIK2%2FBhhYREJGFiAYYKCHA223gN62QN4ew8zgSVsPtBAIQK23BSjaI7HFkwBBKuPKrPD1F1fzJwVgZOnfjXMG8W0AHm3tnGUUP%2F7dqmxn865Xl2JVOZQWwPskziF5zL%2BA8B7d1I2Tmq8vuYQV7xyI1TvT99qKznO8ic%2F3DnLW35Pv0DhCtP6KqZLmqOAdoHKscLSBYDW9PxYf9jE8EsZov%2FwFy2CGAYd7PBJjSlfEqR1FGnAXA4V%2BD%2Fa%2F5a8FdBoYSkLGH%2FbJuVY5uGa9zpxj7rnMFT8way3tpl6kLG72qETfd0sZsDktFgFgi3OMnOMbqYr4bkLECTQ77VoLl22zy9WO5alnSaODkjKgRkMcBBlYxaWI%2FTDkez5p8vfUctWXEQqtgYiSpEhBNPZ0MNHcrsQGOqUB9oNf9vNG41G3sNLxr%2BO8UIlYxkb5OuQhYYQXWpSNyzo0l%2B%2FK7oa1nHtroep5bxFf8fQ2tA9J0bQAPrXZCMH2NRj0cZqtd%2FSlKqvwIrG6agidZg01zf0bXqlv3aKZZk5%2B2I115zDW0tg6jJ9Z2bDu605e82cGEDxrQk5xZ%2FYU98qZ%2BB%2BqOEtIoxUz6vVtMmsL9uLdWKMP4p4cQDkD6zJFP9rLzbhB&X-Amz-Signature=c6ee35846578ec7408313784daf2e2a4a400cc02c1631107195a071056234f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
