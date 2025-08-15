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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSU4T5D%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCYLtqQoGAitQrMEcS6envygLnT2n21GeTGUa0eAJqo5wIgPBIm7XBBLP%2FSTaV0HXlQYftXZbPmVsLDqYTVR%2BNHw8wq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDExxqolXcQ1T716%2BGircA9hoa3KiPhJtM%2BJpyqv4p3GW%2FaquiGyMwnhS9%2BETG6VanwbNpTPsMRl4CZ8xmppIZpJD4YO7srgT%2BoMYlFj7eGNTkO2vT0gW3LpDDRiXEjWDQiB05oirzgtIjaN%2BY7xz9DXEjFB5g1PBcH682OeiFtZfeq6KQlLNi%2FhirzE0NpsN%2FUiKedhx2eH0NrAOeBICU5ZjWCvMWMj7SFyMQCsgCe0riQQVuR0d6LFHQSlbPjI%2BA6kK%2FYaFJoHmUMOIIzzBL4w9yBE3a5cKf2RSbrYRtORDAiXD6DkmqeTnoQjGrwdIuKspQnyfn8SiuN8xL%2BieHrm4Nc%2FaQiwP3sPti%2FMrZXLbq7daTUEAiiCg83jMks%2BaE9P24cbUwpS3GjhsmkcXIMXFh1CQB4NXyU8bIBcHOjdDF8nGsCkjWdDU3Aa8tRoGLn%2BniABCirHXNuwLu8wJ1Omvme9LUxSZFF8a%2FXR074stmih3Uq5QCqMAmt%2BNMBy%2F7GYl%2FxKrYqPTioh1BbTPu%2Bch8LMEcgZUNNywj6F0g20o1QitedTSFM73Be76JjJgsfz8NQyI3SxrDflt9T6mMb2P5NrD%2F8UdEzfUkHce12Um62TF6raRaISnrTmWbo3PqQBp5O6w4qq17BhDMLja%2FcQGOqUBO%2F2kkTOGY1uRiJT%2B2qpoFPjykSFNJZuGr4e472%2BIYqkkaz%2BMKnJhIGEAOFeTpClfB6hbe2MQbo07X1VSBXgVvQV%2FyqPTGOCRqa7lmbkxVToj%2B0cJJZuUKrowaoL9Q%2Boa39FSxEHKexCTYiHNqGalYLh6ocvxyLUIWNBUuoA8JhAcoxHvWfyIKOUp29bciGB9kkyD8Py6P8k%2BpRUMGdoATmcVt4BL&X-Amz-Signature=ed9503824945e72ce2232479ec34ade1d4f83fdf66e6b2863347a97977489d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=40e407a08f34290793f180d2e31a369f443264a84145089173ce4873114832f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=8f7e04902c8b5d9d589ac2714e03d746f987c7b96b4c1214fe938ea7158d2098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=0a9197e56a9cee69d2445fff8a29dc44ea3e493bc88f5cc16cb9262767918302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=dfae1412d0399aa6c2eef6863f00fbf2244ddefb14e33e3e6414b2eab1d291ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=6f9d647a37ce0a3b28e804ded2ec97f838ed9af5fb62d6f086ee8fbe0f7af26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=f0b6b857ae96bf4701e86de34a5fad144fd29e0dd643665587f1018ff590bac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=9d8f022a4266fc1e1c27d64fdd7bdb793dc85bc07cbb3be00e2a7f858984def0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=c41d8b20817ed0dd50911c6c035a23e18c13a2be1cebd8a41a0d66b0782e6be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=34a6aab631a7c5b438189c4c91d70d2723eda6b676f6dfcaaebe83f26fccaf86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DMJ3XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDWa02O6rk4zq3GFDRrskjKbVArEOnd4nHW0hX6U3SM1gIgAWkjBnAiv7gYGPK8gWAt3CHmLivOAnXo2pquF63Irc0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDExi3bTHrf%2FjbhMjACrcA%2BFNncLaDc%2BCX2%2B1wUm9D62vObKnewp6%2Bj%2FU3WoWEdnT9QULy5hV%2B4uvrZj9mUzjHT0XyqP99x7NrsZBktzxbQA%2Fx2FsX%2BUZAL6aThiz%2Bc%2BXbaFtC%2FZvCwLK09aaEyyZZIBePwrRwya3jxeJBUccIW23jkWnRsWPmJxLZFP6Y5lfrUtG9ICU2t7KlVoieITbMgi%2BEtyPhpSducmGZYn8m2RfpUmNM7yrVLpSUS4%2FPV%2FgzQSfniqA8auop7AanwF8kbNi67JroHEG%2B2UhdltazLrC4gWRQoCVWA1P0Dt70o1B0BzldI%2FYZd1nWHuMYqxZ3mAvn9M%2B384ZmWbS0b%2FK5gYnNFKbzUFRKUhTJnOp3rUh57WGjtnpBk771JYWNS31qc%2FQhrT382dTd0zxnn%2FLz3f%2BcFL4WeQ2Rzasa5GqcnqJ8O0H3WGv9YfsUezgVDciIkJevtdU33mY1Nag0gw4K5TEtburzCvEyXDUfl1FNBHUvvF9K8Y7nU5hiQ2gUni%2FAR3azYisLN7Fo4BwFgzmZee0yOV5jiIYavNjeJOUGWCmASQKjVJziz0mYCRPR05TGWUSienwQ%2FhMm1UsYLQhPkGoI81zDhxqdBkj4H3zs1nvZwc2BQesrZwbr60SML7a%2FcQGOqUBygS%2F2coi%2FO4x%2BT4GCxAoHJPlQppMjjEZNFoqwTDpS0fsdONATIPd2eYbXRzZf7UBNdxd90Joh3%2FBgpDO7S8XZ9%2Byee1AYQfsmvg3wDtGX%2FjeJu57Sl66XmLmpaQ5OoKWQXiu7IGWsUcoO89PaRlCwUvfDtWXQgeBT1rcgJSJZgGwoAFzvxtIm8PuJRWKLp9FTB%2FYekSXkhKEKeCvipzSo%2FYI40fG&X-Amz-Signature=dfae1412d0399aa6c2eef6863f00fbf2244ddefb14e33e3e6414b2eab1d291ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
