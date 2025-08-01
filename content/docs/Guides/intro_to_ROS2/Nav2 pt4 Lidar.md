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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=5dda08b43420a97bb6d03083f8ec5b543a3c4e2308e2f7b2781d6bddc246c2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=b789f137abf9aee1690efc57afc82142eb3a9608f9a5840ed0322bb93cb02afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=580a8225e138e6d27834bb81fe0f761a7cbd309b733ccbf2af0b4de0f58954d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=0b7c3b39fda67543579fecd14b1d5b276f6b22a05b12935918585a57615f95b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=3a3e4cfa9a416cd99d49fb104dc8ea2cc769b5cb67eae3c32165e68d985133ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=8e9293e4ff0de2d1f3217090477ce63877d9b9d32684a5117488f81aef74aa28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=30d3d9272d0d01e91d564ec176fca98bc90a348d25856be2ed64a4fcdb05736e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=058cfa6cb3001e1c15b210770cdf15d0e0fec129bde91e5c0e80ccddde126b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=2144afaf37e4b5a1c9df9e1a9aae1d3df03ea8b450c233518823f3a54fe816e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XMLGMJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoGJvwypx0p6xY%2BtLIMkrAohdcpOeIgaRmmwcHU4VIeAiEAxDj%2FCpu3fgoY79ebQxbyvxX3IoMFljVbzXFhJ23qWQkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX6iN5PPYe0bfBzVyrcA8sOKKs%2BQZlXf4QNwVynA5sL1%2B3mZyo%2FQuEYVNzwg3a8zbcXFOaJ7KgTNrhQZuUXacs2lzK9RwaGkMy9MgepjohhuFkRQeXpvH4qYY3z98pH%2FPIYhWocKBNpHYTn45DzSrWQitdvMOQuHRBP1SJ57KPbHkfqHq2Tc4q6xhJ6nqsWVIXq6kXzYIoMcR%2Bp%2Fb6MNNcOfdYyWEKb88FsWadCpYJ%2B0FC057tJSmfVcpNTn2ka5uB57FAl4fUG9tmHhULa9ujB4PPzpY3CGKN3pTdhKHqvcQJened%2Fo9zAJLeW4WSx7DXqLYSWvhrITOFuJGIzhW3CJsnlOB8dTclfsV0j1zzTjvG8aokJaGs%2B%2B7uQ7DibtOMtPqXe76Fe9m9iYoQqprP34DGDEbQKSt6iAZxrcOiPBxoUei168%2BPhb3AB%2BedtpvNGiBrAfUxMFyT%2BUD9qN0QEq06Aqhsc4nfjA9O66JbyufZEGTeDMfgR%2BSe8RNfayLT9sovAoUCvgmsVTJ5WKdd0Oy3RSa1Ga2Q24AFFa%2BFUm1b91mUlNScCjDmTncXpm0S8t9VBqHOSb55fgqEeOu%2B8yHl1FOsfwn%2B5GzUY3O4P6DOUKirgcCUuT%2FSP7CF9yQS4OhY%2F7WWJ1m0LMP%2FGtMQGOqUBY6ccHRGenAbePF%2F0vT0gjqz4Ze0L4k7HRh17ilZBiot6tKmLvsMBAaXITo9%2FNLGBnM7dwT4tfzdxw0whOqOO%2FbyW4ojFT94emJh4q0N%2FaDP2VbHBa%2F3slb%2FyugahQEfpJh6iLyrmSIEutAC%2BBByajdn2zFOMdi%2FWkudEZKNG5k8OOKVn4v9pRy%2FB6DXtE4WkszAebK9walfQep1Qs7jU6BMeb4e5&X-Amz-Signature=71835808ad41143e41e47a4418c313feb121e73470c42cbb97c6ebfbd601a95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
