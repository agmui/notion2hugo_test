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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ID3OPL3%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4E7Ecjc15njHoSQp%2FqBrsI7pQ%2BFY7aAwtXCc1ad%2FctgIgPDp2kieQlX50ESQm%2BK2tc0W%2B%2FHJLbvrorOcuE%2F6AjnQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJSgJXO6tjYfMz3HFircA5vEUCqo3NHppseBzTFkxaC9ib26yKDtZNP8tvSXSoKY2kd6qvqgfanDvEEBciVEkN0m5DMwH7lZ5xjSiojFicvRotEslFl%2B9bu9I%2BG3tmborsSfOW%2FjvFosdCpk8flgUJLJYzmaHch1a8TEONDjKgI36QtPm%2F%2BNU5iMusYvP%2B9PO2w1e92s4VDttR7usgl9c1ANYDlV5ht04eINnOb1LLsqfarPLjLEacKEYQBq5yZHm%2FHyF%2Fp9t3p3XtOTQg78BCHtH7ZZ5DqbeatRj29GZAvf3M7P%2Bl87mfJkMLyXNR2ZJ5UkElRj6MMdTP75wVcfrybepbd8TE6SgNUZIpnXdqH84tw2GUggUA0eBGQuo9TDNhSNdm%2B1b6SAV32sG%2Bgs7J0BKaTLTqz9hp1RdNwCEiP3uUBN4oPXDMcJJs5yH%2BbgG0q%2F9O9q7daFpz1wMHxAG61Hr67mHTXj0t5WP8wEy7XsxN0xDbxfI9WEQN%2B1xP2O76J1WRTIRS4V%2BgkBfhUgFJfd8S%2F5i5AsRWMAt8JZrwMxXJqfnuNWVk1h2R%2F1Il3dGbc5LpYCX6%2FL%2BDkRzBqMOAXTA%2Fn5hytKJ470VFDk2Nno7j%2FtwdZDTPuT%2BxrnOfWPQvFde7RQ0GasYhlqMP%2FpvMoGOqUBvW%2FiT8Go3NJYaFYfqn2sgjUeHXZLgos%2FfnnzABOI2FW8ZhA6KfBtifIx5ya8NyPv4FBJP63ccIcmDSgeGmh7Hc6lh%2B5uDpk5weVDR0C8Ic6Qy24rhKO%2FSDc0s2dOMp0Guhqy%2BpxCwyl0FjEB%2FCBo7Wzk9mHlf%2BP04JjwSpZd1dYBaV1kvvS6B5xacUieoej9Q%2BZHA4UXphTDQ1B4UuKJQ%2FeQbAGO&X-Amz-Signature=71db6d4fc2fc4284341f7d2113207fb6213a89760a744f16f7409a7cfab6c470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=d6923052b4ff99f6be282137cbe7bb960f7dbdaa1d8251bb8d5d525705c73448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=a8be0cddcfcadf1eb827a56a5608e83a30bc07351d7995c235e847855034591b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=d49c03ba855a808c7bded9c76d96da8b30dc18c9a3abd17a6aa75cbc64d1faed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=53599cd68bd2ce99570d099c1abc0f975c19f4d8bdbcdc1819945529956b10b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=ff274b167924e2a97be0ace0bfe7d0c5dfaa66401c6873a06d8ad93fb63fb8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=b2e653da125ab5ca982972172d5579faa66ac5e152c24ab1b72b1a2dbf9f1612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=233c21ac437c1092caa88fa8642a01760e5dc7fc43e568ee4a7f5d09ff0c3618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=43000ba06ff3890e3dbeb1d8660a47a610204415291b11f65a720f3cb15a870c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=b62cc2fb568e285a721e3e13a91ba1d39caa22228d234a68928668c9cea7366f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHR5GMU5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0S5wf2tBeurrUdYZ3dbXM%2FQuFkMiJ4m7oQZZvSERjfQIhAMc769ijS0XSrqtAFKJEjLlwBsogOLyUQyPNh8AuNgxdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzjuH3RFk%2Fc5o6r09gq3ANHVFp96cd5P%2FR2TstCp3jLW5m7eL%2BiX0SdgIojgfr0s%2FSsFMnJga%2F19S2QN13XFRXA1dIXNF%2FEy6pv8V9cw4v2adew7zqk0uYp1eAWL9%2BDOXf5StN%2FEQGec3sPx2h2qTjfpmFC7iI9J4%2BVIV6hzZpaqCzGnGooAZDujQS%2BWP5HLNEzUFANyX1H5e%2F8UAcO4HoZ4fdZP9A9XWHnAbg2gArkf0F%2F2xwrK4iPYMmEOBtICkA14pKzRY1G9LyfQ41fy9Zm92xLTiESaYYMi1cBZs%2BTSiTA88PzXsRCMoMJd017KwYoxHX3VEcfipo%2B3VxxYXz%2FSRuXrgcIsSwRz%2F7YSWQG26HP6o%2Flc68Rw6PjDqLMib6cp8PMtFOKWhnL4IH9Tvsp%2F8PcVOmLaWF%2BiSa1xslcTwCMnsgF%2FvCAml1J%2FmDpeHAYpHnQh%2FcxNjfZj1INGtzD2El9joQBDur7tWLH4Y0EOLKb18cMu2dQBQGVchrq4H4RsPFymhWYar9Joa802WSM%2FVa5mCCirV5ZLh95DXBZUPmVYDPHrhHE8wYpeqiIPaVosP9dYRh7alSwuIhVadjMqpawwXXmKxAMUL%2BK5ZLSC%2FlSobF4oFfbZnRqpwlGg7yb%2F8XOBasdPXjYWTDw7LzKBjqkASpI9ohwSguGjWVwgq8ZTd24yHhoamA1KvVvTc9676%2FaYoxrEFe09gymNsVckaDQWyudDF3p%2F0Tl8tUpXNsSQL7KJbmKhSN5BRP7gCmzOVxxUCM92K3I45RH1Q83zCmZ8IQ6c0KPwOj7BqctTj6D%2FXzIi5SrMkOxkj9vonNLGo%2B3KITn0FYRYr2Z7PMShsk68DlUdhRujFYpDd5MvCWZI2Qpwpks&X-Amz-Signature=3a9189ef7292c1ebfc5f0537d479ec751dcedd62fb42ef6a9ce93abc46bed6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
