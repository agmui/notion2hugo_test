---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN565JY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt4Okio3JzKmWOel58Q3ZdaqpXrNm5sRqZEialPzlNtQIgKVsajc7jsTjGWgcNIEEal28QdbozwLib9ok6xurjie4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD9dhXvgJCQFpfW3jyrcAz7c6EHZ7VwwxKNTwv5eEcQbHzP2rEaFIkMPe8AuCRXoXerXeyaA2uIcOLxVa5fwY0UYspqDI3k2OWP%2FUJsXGEP%2BMoCOfWSN9oXrXoPi7cUY0SiNvPWSgElgIlGQrcvSrGNevG7naqjB57CFpt1PQAtj6k6XpcQzF%2BX2Bru2MzNJc6xerxw5JoyZtHbjrvUnsZ6j1gONA1a8vf88gm0X3IneNiI3lvLOtxfzDU%2BOuEVZKus0iXuPdL8PA6nuJ2%2F1%2FKIQFlW%2FeSJfzsDKD8VhBmVjUKelOd4V0tWtAFOGAh%2BAPnfMhcwRISEdmB9kyP8lTnG%2BpGOYE4QKY6eQL2qcFnSR1wQBB1B0URcR60D%2FclG5fkhT5BzBtbTF%2FY%2Fzd3aN%2BdUfyMwnkT5bPFIxLpeaVlCAVVQ8Xf6Ib0urFn5VrYOouHDvdlF2F1XXiLMoVC08NxKgjQq7I7TRCLB2KDhyPhyQSyiF2CtvbHG8JRzASyKf5isMSFmlJ4SSTwWH3MZWCWWuoUUFXXnGxhFCcdmW2qK6iycq071lXzrUcTJzJXE8mbYYr01%2BllG%2FeNRPDcUy6Pe2g3HDISYEgyw4UjkSqTHtq%2Fxil5sSdrIBHTh5y7%2B7Ebr57xSpDuPaxF8KMNrZvsQGOqUBGDEKzVK3%2FjyyI636ln%2FkJOA2BpaWz46sj8ZD5AtZvhaNDVE%2Bmc0WMGYCZNoUyEw2DOB16P04vEKaJtJXHT7YiZ2zKvzKHEwYp6qB0PYcom%2BS7ullOAKt2X2SPVFN%2F2DEve5JCotIzpr7UGke5lc2i3YGsOUGFPkw4cxw9J%2Bp2Muj6EwCm9zg1AIJ86iLz6NebpGyaRnkiuvyLH8of2eSb1qMduKq&X-Amz-Signature=7d709e08bc32179106e59c8444f530588f004967661581fc45cb6bd6857f9a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=b3d111d0f973bd455d71485a6341b6860a56f5060985c853075f6e6632a60ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=2b4428141c4c81fda92db7b9e08b81c78ddc9b31b5b7b584c76c77029090bb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=e76de2d66d7c80dde24341e68f788307c2b4fea6767de21937cab400892821e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=47e329517d37eb5e8b721a3c7e96be8cb74f859b086b04ace3510651583744c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=13a39001d654eac3714117f2064cabf66c15dfa8dfffac5dda3cd216fd3d2722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=34df3656260d1b3fef39592077b47f246273b3ed629aaa29a0359ce095be1594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=f0409945303f23a76095bf844530a4aede1c4b4d3b3a8931fde49513bc5e8042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=63077fcfaf568a83d8d8f0af0e0ecf9ae0d9db378a2822c5f44d69a9fce33918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=e0cc5ea45894c00d6207401d779593605f913c3b46e791caaf8ffb5a5c977676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WBIAXN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDdzA3cuZOtE3DFMU4sN3T2YDyKj9QN9O%2FK1OhpAMTHwIhANOln3DcCEdjst19vz4xyghjE75WHrjg1FyadWmfjkoZKv8DCDQQABoMNjM3NDIzMTgzODA1Igwp9EEtbSBQrDvXfDMq3AP%2BylYlfAG54SPwFSb0eYSJQi6n8l41rZyW6Bkc4WhyOleP4JmJvLoKD%2BsBIXp9a%2Bg3sKhUxDEuHesGmtBl%2FWIpkorvvXox1ncP3cc9i0IcgoQpQOwDWSMXxcqQOHu9BnonQcwguPmdzRHXkijpZZAiXJPszwbNM%2FYmP9p76X0pEB%2BGAFm8JFP%2BJjuNGBwYiMH9QS28y13wJWErR4Iz53nhEALm6smuWu%2BqV1ttwB8Z8L7PvbeDqdAQmbJLwo1CPmeZtX6dmPP2vI3Qm4m6IUk6rFBcGZkTgMsQXquirGWBVEvgYuf5IVqbZMcrBlx8jpb9tR%2BnkO%2Fe0fMRGGBGTxqAyFlWQhcB7ozpRssoReWgirIa21YhCMo2CFBZSKCpABPBckntze%2FcC9ofaiHSinIPaSmvl4T8r3C8dlPOy7stIEZjRv2VDqQ4HoFGFg8Xya6LcdYGHAnDaxYlrzf95KKPZ%2B9fhT2vtXFzf4pRTfsNRrcr1RIMQ0%2By7PVZrSMU%2Fdo7w7MNUAw3gcnI8rxHn%2FfUj2qvUsH3RDG0aAJ234WCFAXt6LNKE%2FI49hZibOiXkfMjFs8VfJccOuzCDuTYxgPw2LydIxCvj7zRxpdImRtLGJgdBN6pK1Gy8jNg2TC%2F2b7EBjqkAY9an%2BkZ8uEw4irjMaFFyeGpJZ307w4pol%2B2rHWfUHGOz5AQznhURGZR%2FW%2F2mmJqrT4oOSYfPgvueFZEEi9yPDhP6BeoOeVIJCjpiBXm%2Fzmm9%2BdtEjb8Q0sUzmAtpFT%2BdT%2FjbL5s4iPHpQT742IX5DSIZHZFCwzjliD7DR%2FWG35nnqA1dfSomwg5tsmLh%2BNjbPPwB3rEW06x9PusjR5WkFsE%2Bkhn&X-Amz-Signature=814e9f4d46be831dd2f181ad7a0baab003c5c4f969499de09796dfe0a7dcf90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
