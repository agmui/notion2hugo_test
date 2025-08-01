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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=0f6093eb30e02d61df6a27f00c1235dd5a4df8197b1826ec95a292bddc4e3462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=ccb7c498a88bfd0498c2373f7d349ef24e07aad451b9b72ac43a5c26803094ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=00f9eae97aef341856db8d16b69d7e0b491b6550d1caba8ead486313ec42480f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=1a41b95ce6697a371229d9ccdc61130010ccdb4938208baf8503baeb4afa50ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=b31147a83a3de929d2c557ea7056e2d8433a6c210ccdc4ad3a4ddeb0235771aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=4fe9a2514f163397f1699cb6175c787cec2d510d9557cd29dcf96e137f3bdf1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=5f7ecef86d4bfd334b564244c35f4dd4dd06f49e155ae0cde26682aa142f7452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=a65cd8ea24e5bc330350d0a216a2951a1ee81f0b9fb3b7466f4c8fcc8ecfe0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=470ce0b250f995fbb8c12c9797a6127fdaed7c857b6c9179a2db8d6693607c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NGYFEA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJVuVaHbE9nXS6kFl3vtOspsXJh9iV80CoWfV8OgrzAiAtiTop6lpPzSHo2%2BDjzc9Tu6KQ6x1cdA9VLyLP4dIRqyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yKNmUdwwDCtz7HBKtwDj3oqu7owcQzr3gy2cXKWZUjg75uA8ABex3IhyqTeBKoAYH%2BaLqO%2FC08VDnUyvO5mb5EsROzhtMY2KJzRThjzOCwZuOwXuzwh6ppaK%2BHmA8q6ZyVhFIFFOUsl%2FD8oMB2%2FWH%2FXyq5SFfJ6Z5UiI0zmObcfska%2FLD%2Fr5G7%2BKEkR5kfQpRLBzi8Dl55jawkg1tR%2Bxp9y7wrw0UGVJIGrDsZY8vAfs4pHvGISNF5o8MOYEEiW2xsvZwnvtaC%2BVX6OXd%2FwJEPkGTeppixiJufxPfQ5FDP8T33Q93YIYV06TCNEmRxRQLYPh19emCi0k7mvGckAQx6%2BAvO9bhNToSZqI5FTOzRbleuD5RQnk0dudyCWHhgLK4VHvVTaSdzBUIVGMjuE3IN2cTXRzLUcIdFB94OZ1%2F5S9JmTc8O%2F965AvwxsbeqjqXWa10f6zD8tXkMZ7mGx%2B1CDzlSazBuZA2DoSR00UKd5tbMB3bTbce4ojInUiBCGVePSwU9LdWdsYPmo%2FNm3JjkYMa2dtWLOT6Chv7ry3SVINKp5EoiTZJvOR1QKkHBs9Bq9Tjxv2HY2RHliId%2BEjEUxh7zqLU2EU%2BMKMVQkDzyyDIRy0xP3u6U9%2BCFT7Ca71KogoV86e8LlQiUw5fSwxAY6pgGl5QvojmcwZadrGwvk73x8TD1sVy7qM2k6q829maCYnilogQC0CbqFL6ROat4FiehpmGjR8vmmiwd6nYffJbE0JSyE6ZliNWH%2F2K%2Bdfq8U5naKktnV4cXdIlR9LkZ1RaqEPBqiD%2BpjInO8OWYlR7s9COOj4100vfEGyVC8f%2FCJGD30%2FeceoWxjFIeiG3XmXl7vFtvcGTMyNwv9Nj8WgYU%2B28tKqkFJ&X-Amz-Signature=f65af3790aa4113c62266592a2ce4b5d3e6eea6d9bf9d1db3f5c2f01253b851d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
