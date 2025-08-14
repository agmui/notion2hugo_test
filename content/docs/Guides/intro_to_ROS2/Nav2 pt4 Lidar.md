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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCWHJKS6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN3hUzZ035w38rFCjK4T6ulIIc%2BnFIynbpL8zt2QxMNAiAtX4YF0sv2vn%2FweLRCzw2kPKJvg31K8DhBkdjxOKCIzyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM0R9eJ%2BXlyoWIa5QoKtwDa6P4IG34i%2FVcbK2qfkjymYhXiE928a2SOAdf4n0nfxQ5QxRKN%2B0HhHCQk4jjjVGsMA5LJxSheEfUVQ7OVGtdPAO67TSiHX93o8dArsawHgnaT6M%2B2unhFnyjx%2FUGCaZkJXsBFYHVgqlX1CNIXqfHqukqpIuEiHiptacjY1uj1hZ2VNAXJ9i0vEA2Jo4KRu8wsFeesUegmgFgFST%2FxTCzZVs14laSSPx4q5%2BfzA7y3qdXojvLrlxPA%2FkL3hbDaS1F9ZKY0orQ5vGqdeuITJIY0BpFlXE9Mcad3O4CJWY1X9zYbbFKJJDfzvXutez6MFLdFDF5gXsiiikp2W7yzhb0d0X3B7R%2BcOh0vGQHc6ODbAFhWfmTUAm4mlahS6YiqWrqR5DJIhouhlWOuKcF5mYpZK6EaCkD9z5W4xOkwA2%2FqvtW63X3NSXItuuTUg5PoZ0cxnz4d4hJk1dqb7cnjVXiSKLM0I5lWmtSXZ5Xm%2FWKtXyp3WR2zn9pxfRr9gMiDZdzubaeaCTBceEkfEaG7qrZjrLbNKgJnEynNwMoI9zAa9Fet9lSztiBCd2b7x3NhgPRO9b%2BMmyIEw7n7CIH8l4KhE0dfhejV2eEzAfhwo9yYdX4w9LZCpenDkGYRN8w7Lr1xAY6pgHo0gor4tNapXHZ5yARCUh3Vmhgu8QcoKxBk5Yo%2FBjZ41hbjuhTBaRmzeGILKqOEaAlMbstYUOLYTe7zwELiAoZAZLAB8bsicDtbge3hpYr5C%2FWxAk5bZ%2FpebrEf8zscSNin401xw5Xd0bQXCEEZXilgmMjQrYe5XblZePqUxSQQ3Hci3yM%2FASmZlfrdNhof4YGR%2FxviB%2FKC%2Fu4dHQZu3BVnBGTFFN7&X-Amz-Signature=23ceb3d85dd2d0a6100c0559b7c5966461f2deee43b261ba43ef149ef39b3bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=da4ca41e243dfdfab3d7f6d78aae036ff92a9a06d5e3b5cec9461a786c0ef42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=e9117b5bc24eba01c2988ce0941a51e24415e2e0003754fedde070b9d7ca85db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=c59fdfb7c39e611efff97fa4c1167d20cf2bd655ffa7dabc9acc35c8810bea12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=06e6d18d3b133c5f5750a09a47c6e7477de7536f4ec31a7ee891a33a1f444d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=6f023d406e7c335d885ceb6904e5c3cfe17f42690ca50a818f79e0035b05dbb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=28438a9cd1a59a6ac847fab2729c106dda29dbdac55798890f2b5a269eed29bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=234faab863e54c25efed81c80262446f7872133a85e3cc0dfee65d85786bcbc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=f0dbcb35efae61b340a85fea64b60d12fe7399f8db8544432b33c3f7c2c82fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=354e13e7b7ded2e5dfa3e9b12dc4271d57ba7a1ee5329771795250fa2a5eaa57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUKX565%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xQNl2k9Ih7CdrVgGv9yCmt2pvALbH%2BoQaeWIipZcDAIgA%2BwMegu9DAtdMdhxfssT4rmopezmryMvNQBwIJdNTPIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAMIbhQMRpEP6lB2XircAzp7JV0pcmH6Qo2NXLbvjZdlvZK3bCzk%2FVVarlm2Bk4euqw7Gy3txenR56vkLBuTXQcXIad1OHR4cyYfLVVilHR1DggHNrofxw08gShxcl7OcUVSB5DFTz0%2F5lkvPDm8M%2BL%2FhCG5nUvXM59y9rJWYGz27TVbCy4AvmxS7h6pWREU0SZRsef2jCFIjT%2BC0L%2BXgnMGclXo%2FCBuwbEJINzSdp8HTEYtMyip%2F%2FfSlpo1FIXGTURIimzi7ocID7RnTJ8a1%2FLda%2FXga9GEX%2BMGffExMpEu9dCHcFF7suB9LpT3RvtjUb5sRLsWoJ3%2FH8YOvWDCHNzNolAOe7YVSfn8k2htZpIAZyWBS1yZVgTAzaTw%2B1K3zvVXT0aJaSCEydyDfNGFqO7iDkbes%2F3SsQ5e8reYqDMSo3nJKW5YEP5sKCqPEvJaj0D2rXKfSzK8WfUwzeN9ZKK7x81AR1kOHI7I9MzS6vYCKfkQ6OrdG9NwdhdutKHJaLi0rZDtX5QAayGPT1%2BxAlNu2spFDuk331VKf%2B97sL4AwValdVj61fu7TytO%2FhI3%2BqZB4p1G1LD4JmcK22GlBuhDlGLwFTRi7uVUdxWmCiWpnVoiFz1v9fBMLpgpVkG2LerlmOnHdnEFOIzBMNq69cQGOqUBm%2Bhk4QQSx1nfN2yx4Q38u84kWd%2FmHupTBA%2BdugfAaqExT%2B4qqJNG2znQBMLUTN%2FKlkBWvGN803Cm8xiOQmmOoFU2efT8xA6TkXCH3%2BzXjXb7MghycKFbjqOvW95cNujqSQ6BtckQ6cL6AUg3aSfJ%2FIpiQ3e3KSyGdhf65JXA60K230vbl3y0KA6u5oHZOcyC14mSfAkrZK1onc%2Bn34BL4LVttD3u&X-Amz-Signature=06e6d18d3b133c5f5750a09a47c6e7477de7536f4ec31a7ee891a33a1f444d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
