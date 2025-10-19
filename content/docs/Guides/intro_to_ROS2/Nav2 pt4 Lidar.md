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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAFGRRW%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDKUv5hTmA4kYdrm%2B%2BvviZr8N1WSyUeicoZftJS2I3gkQIhAJfXDQKBVYyF4CQuZw3k8w%2BmFbLVPCYuhY8g72fGoyKnKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9H3wDD8VWcejwzpoq3AMhVy3Ojz5iUPbsLvJl1u6hY9t8gNKRp%2BiPSZXZdZT84deWnWB0zqU0zC5t8dNOaCUgmSUPCN244Jah0p2lku8ICKYFDPczK6LWuIcfTsh6eOW7MDb2ZguDoCsC%2B0nIzgX9KRxew0S3JGP5M6MkvCEaTh3W8z2q470iK0%2FZUYqzf9SxAz8b7BKs4dQL3hhqQX3KCBDVJwCVAJ5i6RWmXt4ZUVziem60wnJLSXzTPBkXzcVy8grUSdzTsZkEQdw8X4dMgUP4bFVXrdF%2FQS4WoFc9UqzLtKmRhHOSwrJ8uwoTHeFIRcQaKOmpCrgZP%2BSJdK%2BJIgZSSbgJFi1JeNnn6MKM7Vil%2BqBnppp7il%2BYnhPI0K%2BO3qlxvYqd7YR24xsKZOXPOEJMKn6QzxGkkxsrfC8Mnm9rD68%2FfDRAU7q2KvazNpsi%2BaeXfwhYc5T3eGZyINKmunjYX6c87qQe6qm0J0DrSV324FxnORH1I1AM4NDj56xlOyu5pq8pOx0xtHkn4645CZjeX7LYRG2Ui5mRCg%2FFxs1wPsaoH%2Ff%2BTFUcDVjen0j08C5d%2BJ%2FzMrTAS4oZKrPJ8ESeOs7PfJGSKFc1BYt5IPKHkMlksUfXbAtZ9rSwSXHBYun8GsWiE2b8WTCJhNHHBjqkAeXXEIBhTfWS7Q81hapbZnCE1sIdtY%2FjQmJA4CNL0M5NuV%2BFPBvaHRIwLsL5m54HH%2Fvb2xhIKlJxxcszcZ5bCT%2FDXw3Stu0akqBijOmLSxEc%2Fwmk0pVmyaDdgrJSSVv57FO0b1VHal9kwxSJkZVQ%2FR2q97Xdc%2BG53tM5TBqfIK6G%2BkanDdvmRMPqWBXe5wi9qgkhjtytVkAa5zATBz6EBfYeaiXR&X-Amz-Signature=c2e9025e6c9986060d247bdb7f8d5da94812fbc862c5d5494a7ab7e6949c6840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=34174ba3a7a52159560179ada6cc638acb706e0d1138161101b250477cc61805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=9645c2bb58ddb0fe2e032699c79f9072431c7b7f3b555f778288ea128cf0dcf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=3db41d80248f4652796a74f770bccb9d64ddf86316d9d5c45c75e522c896a720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=e2a9730a65624b93982ce5ad2ef32edb240e5a4845b6fa2fa06ee03b7f8fdd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=b404aec558fe48355ff70d7774506b1e0c228cfb376d49d24126bdcfd7c6362e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=ada40cfc4f332fe8d985c524bc0e559ea72985e3997437fe6699e568121c4b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=1b3d13e75c6090ac26a3f8e02eba71670115648633ea8e6357822cd09a5bcd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=1a22f6882ecad117e51aad4df22847cbed94aa7d992a71bbaba66e9d8edc96ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=393c8b984862910688d16d648391b6fee4bf31a0758fd20b8d81820e94c94b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ5QKDKU%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDEVpydQatvxgVoZeb4lKEZhygCNaR3vn1%2BjGxGyrDGuwIgJQtL5BpQ8nNRtC2txC95qoNnEgHgYXSTKKDuodkxhWUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSxuk%2FngMiuBAlY4yrcA38B%2BMhbOhwV61Y57Su67mEFETTQ6J4wWvkQPE3HPULJ6KlY3zRUpCAqOgQ4PwYiR8JERAzG42sgo%2FtF%2F2j1UyUHhFlkmJ8Zd0fCHSZFiwLpV5VlfiPKWt63htGQPZ22iKBvo6GdblHijwK30H64jWl4fvj322TayPbJlSEBdtBTPBMexPAvdFz8hurm8OSS2qzcOtP5F8wtEWa7HN5sHugWV97Gw9FuqAEPbLJFiZpSkscKAdz6Hhl8Tx%2FePKyQaWZw8yubWNkt907D4xC0es%2B3%2FNr5Ye%2FWr7E57nR5r%2FcQCgTdCxU8CbyTKVuyuoM%2BucsPlNjEuIytKZYmnHv9eU%2BJ0nxuV8m0U1soG3ma2rCmMkA37Zf5H2Cg9kNzEs3VZuUMSXvwm87fsSUDnADgwCrYQ6EjM%2BhulY%2Ba0x8Z%2BHMKJ35B2vOhsIxY7Nsn5cPBuaf%2BL6Cn0FKbwzaprV6o0HN8H%2FGibSKkkTDpSLBNhYUEapgukXMmi7RisLo%2Fn7lIkCe7kcaScdixG0TN6Mp%2BU4EaEtfI3t8qlyff8cOEMllL9PaRAPw5waK7m95LVII5NaivlBljG4toBU53rm6N9AoGFSA1f9T7AOch%2B4q3wSyLsEJZbJsWznwP2R9tMP2B0ccGOqUBH7z03TrCzpp15%2BCK6G1O0Uoc%2FPyk2ymJy%2B6fu9x16T4CSxm3YmQadvRC5vZKHsxiENoAm4K8um3m2c3vOSRkx9Ae4VbWZPf3pOhl%2FTtzrB48K%2BXdAmaz1hWXsnFudKAOMej0usvlmLRQUh0SgurGe97%2BfHY9RqiaRmCHUbbg5ZwtQNayEm0jqc%2FtrUuupMy03H0K%2FWRoN9eeRsYZ3i%2Bi7OG9%2F6bT&X-Amz-Signature=e2a9730a65624b93982ce5ad2ef32edb240e5a4845b6fa2fa06ee03b7f8fdd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
