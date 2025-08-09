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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPZBYMI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWt8Q3RE9WoWLgv86QRG6ucdemTkUb05i6bb3Vq5qLkAiEA1%2BlUlpd48IvCTZ0%2FDYokKUKzpxb9yXQ2k9hpJyvgdqYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjE0XWADUHWehla5ircA6c1asXXlcgfBstA%2BmWhd%2B%2B0oPM%2BMOY%2FRauy2D0dQbJVlpsKrusgv6%2Fz9kSLNOfilDTztCs%2FjH4uk%2Bj7VrE6DzfmcUOrdJCeINQSLbiM7rYgFPMfv%2FJhJNgHSUWwWvFo7jnDRd917XC8ZolQKM5PiTtV6nv7zHO7tUbWxcjTi0sz95gs634qAeDDoiu8sjsb3FV2ooy0XQk5bDnr4LvhF%2B2qSOfC1tp1vRd6VQqtk83sBh9Gtq%2FkZ7xbhCnEZyqaaSamFLp3xt0tbYo9R2dkISGmuS%2FRykMGQVcVO%2FPIhpy1%2BfMffkjAzrwbVmVWdrldMih0HXAxH2vm1jx92hTZoIOHGaPbDjDfZNUuaTdGhHndFiD6T9%2Bkp6eRWzHZBhRUtEQp05hVKfuCMBmvvXs0Qw5SLc7MpxQcriYUe33Zh7QyHqzDsuL8ilxcHmRGCM8VBctxKeEPndR2tOQFdzL7mTpwDe1NBcxnXsRTkT1ZAIoMIwBcBNTsQNjvY46KSDoeqHAfgUY2J4F%2BuCEM8tQ81ugx5ByV%2FhF1XB%2BWXtMOifAvK%2BKEqCyS2XrOhcnmQL6nkDGBtNQPCpPj5bkBp8qT3Y%2BpsDPdyra5JTMPWcyyIEOThqwAa6LAEsQssbKeMJbj3MQGOqUBsqGdAGTWvrQfx8i8tARNuWT4Oj5VD96F2HLU4mHq3TBFLIeFXzJRjPKPHdknC6jRJwnO2cdXIEjklxX%2BgaIYuEHZ8P8EXjDrUdMrl6yvI04IcajEOUMM0h%2B55u5Q8MLPk0uLqru6gcDN6hkBZKCQFvlFNFyY5Ch7yanieuwHbZN7p37ivluVWnIDAMQKgWiOmxiARChkZv2BiXNOiDoJSX%2FqQDQb&X-Amz-Signature=c4a755423668e2fef616b80d39b6e65227615edfc7f40b0460358d0dec847fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=53776a2408810a551e4ae66596717d04d49f0f6b04512a1da0004bddf6627a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=05ab5d378121c72d7102c5aee3fafdb8cd597fea331bbc85126f5994667f568a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=8588afb76a725162aca6284845e9c6c8f7ce824e4a8c69143cfe93c7d26f0dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=21283684ecdf814db719bf7be8468498a3306626724d74eb0aac9a60b83c3415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=9e251aef522f64abf05cb32d128d4ffa19f7c7f4e988a37558005af01cb2fd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=1ab7c2111990ab0610b9193b540af0ecff9136267322b609d59c9a95e3aa212c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=d1afc16031cda450415f84393f0b87d426db419eae70585df817f0c008332635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=2c29de29e262584a132d4f8cae736b8f0c70042f49c93e7182d82aa31ae38fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=3487171ecba16f158bc4ff0fe14e5b334eff42ebadf620a833c6a1c593e82e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUBAVDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoGX4CpYVUzKr45af4Fp%2BQAV5XrzOgfZiACQZ8i0iougIhANtKe9CpoVJVKHa2X7puhFPSI0C%2Bjmewt%2B2FLgqaUdYgKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MFsqfEp5rQf88k4q3APDdje3ePQykKiOQT5ClJvMJSKoD%2FOmWIzKhS31tpMg4E2xnruI5LqpUb2y0nj1H6SgBaEzOFVTdHBeGe1HnqR5kYuqhjesngjOISqaAi4NY6oszvLBywzGrNpenWHrbcZ9pH4C2kSvYMeyvKIaerWwrqEfZfCfcnztXAopuLRG4AaG50zRlHW1wGVuqNkYVWPZEHmqyywQpyB1D%2FLKgULFCHiEOueY2opO5STl9IkgCOBReT3LdtBkn1vNVMfNukIoA5xZYCjk4D4VEk82xg%2FrXFm22MRY08vnUcf67QmDP1E2BEykfz1M6BZdVxCoWGVbotApTyMtbPGuxStO2GGDHKHXHxFmqRmA0VgI%2F9KYgCYPmfXae%2FiOM3qIdkw5uiBh%2BKhGpVlAXAOTiQpqQkM75vH61MRLKMZb00g4WcKaZ0IRelLrFlg0u%2BmdwzCU1KYu3ApJSThziHxo9Tw4ZlAX7DrfNkLdm9fG3uX%2BxeFIwDwNGJpuUcWCBB%2BAEJs0teoyrDzsBASJ%2F2qsKCXJujLZjr2MTNmkOmpSYh4OCVfyEMuDM1iE90Ej6Y%2B2jtyvYzysyxs9KY4R2kEWc%2FV5ZHx2Hg%2FpZwh198XCRIHu6k43fQo1TPYxrUBDdAK%2FgDCh6NzEBjqkAcXQEoV37WwXWRODV8lBtEt5r5jPHpOBRsszI5gewycgNz%2By8SzppBv0tBaoenDtfHVgerHa8%2FtUnA5R6%2FONmldu%2Bb%2BGvd9vaiE%2BgnTlxitmVv1%2BadYkgQNjqWtEYEKXHsN9OMgEnA2JusM4kfHAMNuATr0kmCTbT66afbL4FW6vxMsAmrgl12LUaxiFYbX%2F%2FqFTUXtwPjuWxYRkAdOg5to7cikY&X-Amz-Signature=21283684ecdf814db719bf7be8468498a3306626724d74eb0aac9a60b83c3415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
