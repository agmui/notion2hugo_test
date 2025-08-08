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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSYGGJ6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDPEOzw959oNm9%2FS1VujFhAgBVLH81H%2BGcMc66g1frnSAiEA8iWuf4TVr%2B%2FrVPhoPzKQ%2BvMwxzD67%2BYRoZav3rKpAYgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzysbG09oTdglNAMSrcA5%2FXCmWDEy7G16QJ6%2FR19wvlgsZMMDRWX1swtFFnemv9dMQ6fGSJoai6OT%2BXlPGKxwq%2F5cve8MYNjBFKTKEA5RHpbM%2FKAiKzxOKDebINz%2B7L0LkFgnRqQ64q%2FrzGUwenq15zJVaKMIJTom1eFzG3XmaKi50kOwvgIlVRzfRCuavxXfp6ENCKkhFcbAwyhuoSfNSTpY51TrWyDE%2FB8kLqtm%2Fyt08uTwfmBwRGVlh0ZVHjqJ3In%2F7Dtn7EShz3eBuY1rGt3L58tWMGh38px0mu%2FqQUq0RgdfwLZc6T0LY0S4V9a38fPhLLxEZx1PELrf2Hl3ONycDhKYgfzqAF49a5%2FmMjqne3iupW%2FaDe2WS%2BT95UNVDb%2Fue4eVgTgsz6%2BlISqSgkQNdIQnvyCwL4Pj9hS60xKbpGhu69cA0pt26rD4TnTkhhGC5amnN%2B3flToYwdYwdm3WeTTA3qRjcsazeztSKn7hBQcriF0GDvPpD1X8FPRIRYYw28NhWqvl3EkVlP%2BZiWkx%2FkZYv16I0B8l%2BN%2BFkYT%2BQwPWaHGS4mEJoFtThLE3%2BIyOkIMCh0HwJBrZ3VWb%2FQdKEAnRZDxjNQgDNX45GgejMUMFzaDp9HI2lcY6Lx1l%2BmE0B50wwcVDfwMJ361cQGOqUB6VKcaHTULMgjFAE8v18euL3eC3dslmVik8YrT4bTs4eaYF9PJhAx2X%2BhVo3W%2B0RW8kteooWXuCQdYrNzfkmLw2unJ6ZGm0CBFBwRQ9wM0ZmV3lb6HAilX1G7dFEccAlMFwAVWTfalFS1o9xhk3idb%2BmLnDebkveKU78t1L3TnHhM3QMZGeoYunjTIjf%2FlpQRWmuywco6hZo9z%2BNedIEWHad%2FkdiD&X-Amz-Signature=0a6ae7f4d28fed960409cc363fcd2828d96bed4f17b75d7f240579a8716db076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=f71d1d11f3114bc4a24114072bbde2a9a126a9ce841cb43a82ebfbd38c28b60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=72c5090698f71c6b72a787a37778418a39f8196e4a90248396c5f8573025b1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=e1a7590fcb91ee75282c47c6e51fd9195027cf1623ffd4fcf9641f864e1d498e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=b3e2b832f7e84bf536d2bcfd00eace76d0c0220f62e18febe115fe449e6e5253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=48761b2a159550ca3c3bf0c251e7cbcd035e12d5af0fc34b4ea4c38d70f68d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=5b43a72e2be377a194e37c08c3116ff7187a950acd98e07ec6a4142fc5d066d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=91b45ad312fd11e0f4fbd6ecd334c2d3c12104a9d8604f5aa9e7fac7075eabf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=5aac11919029ef98af7b7678bea5c92b246ecfc69d93155cf9d98de27eea1c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=8211a1a86abca8b2453f88adac63f4f444fc3613a18a83152391e343ab9c4c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJF3N2W%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCLltT9x1IOQEpfHDrTauZ0FhYmUCXlHJQ2uhdcV9XViAIhAJPKVSNffsAlL9IBGNtjZDu7lGTIwNOS1VqTCKaAm8rRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDngq8hoYnLVsg0PMq3AMTHSN%2FDJtcerTH4kuDJLYdSN5kctnp97IRC3NgoNgQGygYAVcG9cFtsFAxhUuLQ96Im48adOzcKlgqvKjjVeMjRb5jAEV%2BemvK%2B2SQgGaXehT5mx1KYUgOjQBgym2ql%2BpRSlf%2BUprP5%2FXOWjZLQciwWd6JUu4Hnc7TISib%2FfkeN0fgwhju1Fq8Yj9vM%2BuO4QJeEHkv78vzhk3WfH02MkRi02581ifZRrY0E38kbZ3ofsDwowBw8e2TqVj4hmb3PTN8JqIVhE%2F1TO4xK7YYqJnzHX6eCAdgA9hom7LnOJLFH4HWaix9NAJs86d%2BIAKIn85TyV9913a3CTqVIvymSkp7DuBgi8f%2BiePH145%2FTCJUW%2BeqBQBdUSFZy7OK7GO8p31iGt7iL%2BExBm%2BYg%2BM4GdoBtWDvMqI2jcMEaHODX0dDYzwglWGKfVr5CxT83%2FCdda9Cil34cwLS1JxmSEfelW7%2F6SzW8jaUzcQJa6UVFu23%2BRGbQ9bPkA1swcuWNRNPbizrvQMm8JxZUL%2ByfWgF3hsnwDsBgEVYMeAlLRycvWI6faqIHS5F0U%2F4TQnRTACnNy7lOvtstV66b4R1zRxm%2BBpq6tmAyUSWBVzgFtiNTUVDQi%2BoxiJY2QFzDToxaTDq%2BtXEBjqkAT7vFt8THqdFpEBvQJTr%2FC4njZYYb8zFZDtrR%2BfjTtuchQmSeCDB1UygYXpy5Us3%2BjDsXJYReDQXP2RTFAuvDY%2BuzOIiCIckGPGJjOMN9iVfrP8ctkLGOCeb0lZHG7Ob1E0kmKjaCVcAPHDwiAlEnVQUN3jtR%2BKwWNl9AeHLYvuAeW8j4Kdz8D67UbJw0Fkpu9%2BwRycS7ctK68G6edO07HP%2FRTeS&X-Amz-Signature=b3e2b832f7e84bf536d2bcfd00eace76d0c0220f62e18febe115fe449e6e5253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
