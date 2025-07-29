---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=a1550aa3ff19a795632742cb2c320f6e935bc0caa925b47b21d21897f716b55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=ab0754bfa166f98d7e7d47aea5142707e650b1e8e9c44c6b8fcaaa41c93a97bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=6465089f63227f9b2c2bed534ff99743ae4f39e0abefc42bcb027290b3b9d35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=a06e8dec73e65609287533b98ac8118953d458d1f2d57e5887cdae059ef64b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=988d211aff9b8a960fe698ba1179ca1064105d62bd34372c25fe32e052fbe027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=6a221c9174b9e4c3aae2753fe0a7fc530cd669eb71a0057230b935e6238dea22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=7f76190d834fabb961c62ed3fb9316a581c0cda0372c03956f760a0b81f1e398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=3fcb7b28d8e35e11254ba5df6ee73b9fc5bf5c4c70df1206ccbff0ce3fdb743f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=0a9776512a31ec5d4b42208b7cffec7c5b65f801b1cfb081dd7fc7cb86f8cf79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLYVP5L%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1D4X1SaBiNKJT2kUZ2zdj4BXl7umUJh65JYFh4HUXmAiBTpo9R9kDDyXWP4EcAbo7NfCeUe%2BAWhFwncV%2B3%2B8PW8iqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuwJRbN%2FzGXQIQm%2BjKtwDj9FK9ExcNjs1FGP6dRsSWoyWGLulgUokyNK%2Fi6eywW2MgwIhuDDrcdWgiJUg2XG%2F%2F9pX5lizO3JxcY2BBBEFfHf%2BUwA9M%2BoU1kVE4NguU%2BUxqsbdD9VKhpwSD9dDKeettdRtd2190e%2F6RGFTUzntPvh0oYOFDSxH0V1FCaqUReFxWA4mUgYOz5d83dy38SBcWC%2BdHhXuUcfpq%2FQg2Va4g8V%2BCN4VRYGXRoSnuvYtpn7Uk9%2FV1zQLpA%2B6%2BbXf7pbbi4gLUnnLG5%2FENRlPzomZjLqWBzQesnsPjTohFtWjqLXmHvVlr0Y49UFG89fltacNjv660IPRz28R%2BdXjxTUuNTMUOPRsAXuFSGmUeXSRtrDGO8oeudhbMUvIcWo4QCaPs6wdtt0EoR8vKnveu5%2BCz7eq9mSGKl8XL9uGssrgauBuoS8YK%2FsOwHBJWtFAayjMBOxT%2F%2BV9y1pI2PiWC8dOYdIlOD0ARGILzQFDnA7YELD4S8jqrJLxxYcTLvkqUHiwDXh%2F8AUGajzo8riPOcTZkl8TtLuwTxY4UhvP66463ZUJOj%2F9coopqvQ0xYbzV9oVQXe0Fslnp4Gsi7Q2QqvFwU4T79MUKM8wsHkO5vcT02JARfuM6RRtkFF6GDEwk4OixAY6pgHCvpMLQZYSyNHpoMrBsFj5jDmYJSURQcpreeRaogC4ktnKnFNr5wr00JF%2BwpY5EVo0jDsgXsgiM472QRaV4b3NZvGceFmXXIZHTm3V7PMn10acd1Rv38yRZLZn7M96mw%2BvTruHqFAMB5Zinw9UTttflMBT%2FT%2FtS27fHnTNp1aegLP8HSZLplmKmm5nOqu2qOcuVK4wHEY2VXFBiIquytUDKDUtDQu6&X-Amz-Signature=dde5e85d2445ee081dfeefddeaa7295d64da51dc8af9f02463f123bd1ccf42a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
