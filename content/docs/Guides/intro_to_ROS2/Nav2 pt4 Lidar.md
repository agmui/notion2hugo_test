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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NE5O2B%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRrQaepa5Y4VZVvshQJ2c4bLP8MXkoTBd2qdDfzIIAcgIgdHIYVwYvVTwhMYHqtYHP%2FzACpb626xjEGletPHcNM8QqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8B0Uueq6t1VEJGjCrcA0atNDkVyEeI22uh39bebEK55g6eUjks83TXOfXBZgmEkwxRb5Bb4y1C9CskAVX7DqPtRh7DmVy5k5ZcCPSyBkSmF9kssyAh7x56ewLlq4NwqAfpYtoIHBCHtO5qLMxPfP2cmUkUxe8zRFpmBjVj10%2F%2BKB3S9uOqeRSo41LSBLlIshCWedDC2y%2BCpVoegiR%2BQq4bSP%2ButXBEv4uY3xk3T8a94fiLfy1MPlXaFvHfA563jrkPUTMDU6F7BbWdhoFqhWtzHQv%2Bt%2FOfhqNEu%2FipQD%2B%2FZoTMscjf%2F%2BJ7M9XxY3PtOwP07rxlh%2B%2BvfZYzHyLd1J51QT3FgFq170S4%2Fd9A2ofkkSm4tuVDQjTXX5Na2z8jSiEKgIpM5xP1XzGQF9yhCPZSh%2FOPuCNcnW6rPaHbWQMnuqaYc2n7VoXJ3GGgEsLxKz2Ef9cRBm5R3Z5qIsxOAlieRP2oJ6jfiHk2jpDRYkVjwFdgFxSoCQLLlEI%2FKccgkdmEOOqiGaVIOZXFlAgaUWEPrFkNlyobZ6xMe9wGFKfdFTbQL%2B2oEJwIGE2EyN8n%2FiYVVbdKxNVS52JoEscIEgGpJjLoUwbDVk14yhC6Hb%2BKPQfE4R11WZo%2BOWCmbS4yL4oDCF9EYfoaOi8QMJiQ2M0GOqUB5czBBgOzIQXMB8seMj6LA6WCL2I0v2tU4MfTpLiaLG6vMmHuFMmSM6Gqa2c24GKKDNvwF6CHsEKKqekcgVq4kQizfrzrXZ09whhvFd5Nf8ETWRv%2FYJ9ZX7sxSEAfKzojKsxVUzby8oTEvLJY78elybVke747hOd27dyWjALbdm9jdt8cDo8qe8rKZO0AToZALupYegME0g3YmQcWgf7mf6%2Ff8wTd&X-Amz-Signature=c87d8f930571586014e8f4a80cdb920b468aa7f1098104b7587382edd3a13960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=5c0308bd9fe7bc5e7b4c4295997fd83a0aa75ec44fcadaca6577359a2555162a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=1f43e4dec2889daefe17409fcc8422fa2b3a88d7aef858066068cafbf67cd5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=22cd3b6c2eaa51a492dd6f2b9ceffe7f80cb329e9e470a1fd3b982d35a998511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=4096c498ff5629466393346524c4d94285fe96ae6fc05d8edaf5b87a8472936f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=a09d6b5aec9a41cea1de1178cb4dc11568190569b8e9fbd21ed65c843d938a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=7577c398d96f1fa7bbe169be8af1f58e85433674039f8984a50eafa324ac2de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=037cbc331bd489f9a756914e177df20fdd274f6a514d665dcc28751aab2d4461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=1c0e3fb15a08fca312970c05802399cdb73b48b187519dee753f7c7d790829ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=b24c9dd7f574dd03ed287fb4fec4d8e70a5a135ca967c5526e431f96f184d055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6JSNAG%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVRNJENKHeEv7TzULulhA5Uyl4jC5MgBmJsoCcXp3beAiEArEf85Z8%2B4D9p8YcCGCnJwTlYPrIfDPb9oPeTYDMkicEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDPIU%2FNFLvjuefe7yrcA9IhVMsLfIfa2YkXs6eU%2Fjuzzfs9YqEJ42RJRWpfJNyha1nBN%2BtRuEOQhDacXEm781kKbpXgtIFi2cGgirPR73NLK5maeU4DcmslY%2FHbiI0WawA2O%2Bk8fPy9dso6PdrUiOIGlV4McF8HyrGgW8CE4fL%2BvTZ4hxZTZhxMGLxH3doBVAaDScur1Od8fELvXUdNOwI12kinOJ2lKFlOc10WItk6YNpdaN%2FTDYoTaXlP10SF%2Faaoq4BCN%2BUhAtIwJJ0vtvsGpm1FjiHPGcsT1iMJkLBhdAKOum%2FFhK2nTxoiReyCAwTyRczvNHqWH2ypQ3A2TGtfNEDJxHzT4y3s%2Bb38v9S3U8FMpzFfLYWxmKXzrXC%2FzWh8HiBXgA4e19co2DqlIkWxe2A3LiF0krnzrTVDecPoCI4KemEF83cuDqFGqJK2%2BAsXWOXEQEgGPDCo%2FIkJd9uq8F%2B7H%2FAZIc8vBLmBsXND5YaKCPcajoVItm%2BZYkEPj0Twu%2BAQAdL21TB4IjsqePziUZ%2FtPEIrMoGDxavQUecc4z3KdJmeKngEJKqDGP%2FEo7Caglp%2Fr1qKSjcPkBpmb%2B4PYcmCm6tQlHB1gbS6cgi%2FgjRiUeFbZY8vGE8h0iWlTLAYuREudVBt98T9MNWQ2M0GOqUBmjySr810ALnjc24ogRVyAOzUGTLHgOj%2FuEAYMzg7UD3EzHsO%2FmckLfdn8V7DD6mjgh2RzPFvp4jiSErekzs1IImKQGQErANfo6gg2R%2BGdhcDeQ8oNg8m6%2FlBJyA%2B5M8Eu%2B0XsUiWoQKB0aQOTL3xL%2ByuNz%2FzZZgV41oYJlNukBbV%2FrZzOA%2BTBjEeDRH9av3MypjvafFE1dPF4XeAfzTv3hSLCrYD&X-Amz-Signature=894ad3bcd53c2ae2abb1d270dd3058709665107fbf029ec841a433b62ac0135c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
