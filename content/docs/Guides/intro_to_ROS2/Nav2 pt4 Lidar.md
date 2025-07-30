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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=1866c41769c39f9c6c44113906defe88b3dd8d62f6d429f49ed111c1158807e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=26748bbab68d4a64799fff3c0701c37630c3b6680fe4e2d6392f6d8426daa885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=0b7cdfdcecf25c8b9e925af41be106190c984a894e96401870e35e458cf5b57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=3bf0405668dbd8513c7da17470c5f083596e31d90b975b97ac77a3c286a65967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=7cef200950d48727cc1ed0fb723449049eb936e798f20736ea6e24fb331bab40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=79ec96532d2791a1ca51ea5c1e21ca01389606a80f895f9d969779c757162892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=92ae0ca4271748d719b6131417c44565c35264bbf088973b6fd8a3faf6e5e827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=d45fa64d8ec773104be8d279f5696c4f48605b7d28b355866489542ad5797e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=f61c4635fa923f27e4c1cbf8ba06fc5a25b6d7ca61a7a4773830ed87ac466a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EUSHJA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbXQu7FhCoLEab8IYgUVDiq3WQ1hIjNzHdO4Hmot2hlAiBjOEMR7BaXHeESa2s6abl7yKnTWCOGq64SOw%2BTgG9kySqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW2ACQjJHkgr1tJ42KtwD5tTQv%2FJ4HyZuh%2FNgtmKFFMLnfcAb2y10cjoz6%2BJNrRdFy%2FsSahfCj0XpKySGliACyXFw50B7JZ6ZM9rWdDcQXdh8yHV7eBuU9h1oKgEGkLXnH0RrSixbV5BA%2BkcyottbByqxuG8j0PFhmr%2FkA4lcfV1gMMwNa2t2ZjdiN9mT%2Frx9bVht4lEme19%2BL%2FSDvA9Ffg4Way2OrY8hMja915Lo8HeF5u2lY07CpVJ8UerL%2FkCNPMv3OygzGMcxFm0OyG%2FfQRMj1yCxq8AtWNmPPozfhEdbDtK1WNW%2Fi83UpG9fgUPoqcbWFl%2BHqjHKeUXhWlAxlFo4foozpd9c1TdOYMqx6vSh8ByW5dTmtNLeBc44oLkmmWhFmV%2BsNKen%2FdfunezRxXEG%2FZ%2BWYBqF6oF21VJeD7J0ZCX7c4n8xZflNIUc9lf0z%2BtS5V42HToH6A30DfV%2Bbg1sRXeRpelHENZGTEHwao2WWUvTeUNC3k5eAch3RYdrMki4n74HhwbNdJaDLz1j6YfU4U8GBdw%2FvwWdBuI4Sl%2FC8w%2Barjx2NQzLPb%2BZLtrxklvgkspYZvKbMIYoABCJRp%2BHfxfdP76ZB73XAEiQxPwNDnGdM4xkHTdXOVyzTA8EEGvhTTZGxq94QjEwmompxAY6pgEPPdaUlKOXJm2faQI%2F%2F3IAQCcZ1A5qzNp0Afjuug0cVfFojTnr0Tnc9696gTXAgF5IveMKmP%2FXQ2HgSvSwKbweXO1SZpVJhdTk%2B%2FqoN2ou%2BCWzysdnwfIXBr14Sl1NWObMY6dQJDtp9SNjl3%2Bs5hEA6oy97jnqlF5SSssnDKQr3noMOCp9Ouc3J9enhzP%2BnKIsdQhgAvvowuOs7sV9bm7%2FDotF7QyU&X-Amz-Signature=27fee7cfc529f9e8a58fc780bcfc58984e7cda3db4d5af01a3fc35e70b06cadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
