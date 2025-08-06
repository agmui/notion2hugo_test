---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVOHWLJA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQChAjb1yBoq3lnAKCeVDz5Y1HaplNhfWv94ZXyBpxuc9AIhAJ6YXpUdE9W5NuZy46PoM9e54Tphr07NKD5HDTjoXpzaKv8DCHEQABoMNjM3NDIzMTgzODA1Igw7TgyKlvWAnHzKUI8q3AOT6bpVlpt2w8kQsoneJCQncOd4rfPVUJXM%2BRBJ8B5maS9cUJyk8ZBtdFYVFKxz8%2F%2FtkkAbD49aJRjqGDpfWSnHQKhAkGQk0opSO0VSephcmpeYsden2TUe6zcuD1wG8n%2B9AVsZ3dc0jiyl5rQmt%2BLtCcy%2BQuwQqNsumSHm86WSG797I03LGwdZ9aHp9WtMa5slH9TdHAcjMw9wVg2FllE3temivKS60K9be1Fs4vlmDGpwol5X85ZNapSSO0mNUyzB0qb9CYY9Mf6%2FtcT8Qqzf5uSZsuZioQg81qz6bZqBplC0nK2LHBSvys0hpyXBY3Y8X4%2FQlk2WG1J6Q8X8kQcWRhB19LcBOgeppOHySL82WcQ%2BnMf0WDlT3b8ayyhFjd7TYWHsavmIHueegz%2F6H%2F2XyPKy3u%2BPFVscSLEfZlHjUD2asMe54R6200F%2BMeYtKJQcyS871XbVSBjAxU9CfWoqJo2rLk96mNvy6xXzE%2BY6176NE%2FrOX%2B4M9ckvMwUUmxSDFr4md8ZkmgUYAE%2BkYv8%2F9az7xiKl9njfQzEYBpFBfYfYp90FYm4oB5UIGY2%2BHgo1V8Owflwsb0x%2F7MfbvCpmqnUyL9TImGPDrtce4tuHymDkrWB5YsxYSSSDkTCgl8zEBjqkARw4KmDqb9NmLDH0pvVvHTRFsJSP84m1JzK%2Bvt11RuJKEPzFae8Na4GiwZoCXCHWzgX92JmtpUbWRrryKlpPaXA5cSUfu%2FiNzvRTN3F1dErLRIM3uXXEnVE%2BVRTbZJORGJgUGhRqyU0PhU126zlC0wh7QrsiZxRlGyhLDSFhtYLuWnqhEGFfK90r66cG%2FprsfCCeiQMMqf%2B48%2FKFJXGLPmvQE%2BkQ&X-Amz-Signature=e9dbf5b75a0702b6066486b9302d9573ef43e7306488b642845124b5c5fa4fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=75bec615f6c1fefca3db79ac8436a6e9bc20e36447f8ddefb023edbb98d34020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=71573d9d7fa17f14d278dc9423a6a747158f2b31dc98d11ecbee326842d1f024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=267dd560ea4357b8dfbce2648e39aaa86bac6a38cded182bc6fec639922382b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=141fb2888c3d1b0aa471682cad4e9aa04092c197da7b2b76da8f40f7c1e07684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=1fbc0190b93df4117c21af2a4f62e00570799e28bf4a234fe04aaa1f79f6d1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=c8b6e7ad12e393c1211def3b4636e03a338962fb90281f0bf75f0fbc4e110cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=5a4f9566128545f839576548144573109e1e137908a99b8be99698282b82077a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=c2d5d16da5f82c2ad5e9d769879703c2869fa910fec59a1971030775cd2b474e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

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

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=adab9a173536b23c5df06a87073686a87554735cf3ff38ed5d1a894e5ed59fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFIQXPL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFrX0fD8Pj4cKkZGkdgZtKAHMlL0W9E9lLu7htqa1aL5AiBVDDj567BPGJUIQbq5EXEM8G8v7BdvcxEB7TLQCgycYCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMK5ydFueLtn1PUjg5KtwD8qyX3dmQCO7YhF%2F69V%2FLNrIzWStWSUvZ4jGbb9e7eTFHtM1iKZoz%2Bsq0JPB6g0eQ1rJUyEy3wacn0WJnuPgSA7USd0eOyAUokvVLK0mKvQ1%2BfPt6c8Ygpzxjhm6y%2BBvvAACdkK%2Bwp%2BXhV9KF4uzIc%2BEcEUDfbfCe0AViZ%2B3V1G2YiY483pgml16WGjfIOhTyKKqutdu0MSz%2B3BOZFdnhZ72h5IlByZ5ZDoOTkV2aqZgAqzUeCSrDJnsOX3kgx3vKf6N1OHRbr0jUYr9hhFDXFuB4NX4YvAwYs1IVrBmWATymVp0kRzXSMSUwCzp55vq0va0NcVp2Y7TE0h%2B0XNlvoYcCzqxZVypC03Qt8hLttOBd9MByQ%2FHcj2kMUR3hpshF1Gz0mIHdrC7nwjPfjCTW2uc0ZHsmtlY9%2Fi87vAhnpwh0yM%2BjTi3bdcOXiEQ0mj8O2fcg7vqrVXMgGSrtZOIGXYCVFwJLaCi9Q18Ste4hlv0a7EonG0kgDQtP8pYF%2FpOT%2B5X2mlVC3UrtuU6mPFvcdevL3%2F2e1ZGFVbjsL1juk9fYJvtHK1YgfFVLM9Q5RGU3MuXdYyfkFE59Mk8f0VxQydAhTPd103SkD5KkI7QlRZLJNk91eyTG%2FYfY4zkwz5bMxAY6pgF7G3h%2FT1FPUO6GzZi4vfYNlCL8aQggLvPs%2BOoytZhUomM8xGvma30sjg7PYVFjVQM8EFs30b1ci5eeqp0vL2fTUASNOUNhMgnDzx5ZATwKtb9kBC3oNYBwmybxjXQA%2BinF6PUwwHiSB82zCE%2FFVre7oIyeyRN7RhQ%2F%2BGDUDLLdzj2bL35%2BbJMoXrgPvSN0zA3J8kRE2JLKffgTpxot0jq1nE1uI26e&X-Amz-Signature=141fb2888c3d1b0aa471682cad4e9aa04092c197da7b2b76da8f40f7c1e07684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
