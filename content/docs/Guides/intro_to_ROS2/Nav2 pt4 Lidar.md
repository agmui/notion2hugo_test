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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INOMLXX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFPdZmLzwvI8LD2tos1VCJXRJ3SsMQXUVDbrJpcQni3LAiA%2B%2FW7uqLTmfyjKflmd%2BbSFtgfFAscHiUmDAuzo2dWpeCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEj3H9JL81Z08r7ZyKtwDMqwYR7MXCBnGA%2FLkyCwDJauMxch3wAYuGk4xQQaxJXnwqaXYK0DT4Gba2Sf9pxOt9819t2thiug2DM2zeTLaE1I5Ix2smeFfZUyuBYeqPTZ%2FQLgx7KFj6A2ymWT7sDOGrQ5Cdj7IUEVsT7u8HyhgJ31UQtn%2BTQ3IsqxR7QHvTlM%2B0NyR9nIYExuF8Pm4r75brwzX%2BvVRQzqNLu4byJYdUcZf1NchYlFRTSfykj4qeV6rrAIuFn66yxdAv%2F96Eh%2BKwpWWNMauy9X5x0vM6pkquggglwmC5OaaGSN6s2IBybrNv%2BDT3Co4THklPAc%2BBsuDoOt%2B7VieXkiVdpf4pwznDs1snFwQ27jM5hHGltv4Rl57dh%2F1JDaZuFiMHCLGPdVT09vlS%2Bc%2FEJYzhFl1avfIXKEeTOn8pnCMjB9plaU8jf0aJkgDGpeH%2FQckygcdiX5nemOjpYU3FZ1L0ms3LuSSbGN%2BT7CbG%2BNxE1NEanAK3xUBOMBJIBYJxOgP9XnzUB41ui%2F91Mhpxz1unV9vPSYK3O%2B7nH%2FoC77BTmHwdvdo8ahz8ZNCtqBFQBdvFFBC8AMpl7ny106dWU1TIXUkMtlRIBb%2BYjBUbrmQLLYhME5WJjSNO8jiTjyCSh5GdH4w%2BdvXxAY6pgHfYHzfPvR8%2BXgkHiOmT8HZDNLTYnKhyYvgWUqjoqdYsXlKD%2BTBrLVbk4vq%2BbTXigpjn7n%2BZbMdaCQiLF0xdo3wzzzMWvlmERCIIaVrDxHszrcThtegW0Dtdi9daibzE2gQagGqpmKbxS9sz4y0pS4zBaul8C%2BwXyk%2FcdmYNAjRACl%2BKbjo8W%2Fw6TxWChrovXY%2FmtnaoqUZebleM304PYvbuJtzLQID&X-Amz-Signature=3aa7c1b72c509233eb19896e9b7c2d9d12f216b95e4d20db698a63db03e514f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=6018bf9845ea2f27082b495cc047f70e333ad5d67c9b6e8aea664531bd082e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=6bb3f8b40078820f535c9e7b6efa2a67d6c524a3ae061a4ab74782c41e85d395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=6acc64a0fa4aedfb9c01c38723772c6bcfb2d1d65920438e2a61d4cd9545546b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=8e52b4e8971caabb970bd88b89832725b8da44be95c759fafe3f02b051851fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=3e9489496fc276ba03a5f1de0f086e980dc5b0df64e38643fbe8c0436ed640d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=69e58ae6b03d346d6fa9d9f283aaaecd44744db4ce79535e95ba07d5b0582e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=dfa2ec9a28e526001bb630370a05be431864a7c94a9b261124f14d2b0b6e4e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=8a42478964fd3746178c11a8e1ba48bab336b294d60c7cfc32ec541e45016532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=5348ac72fba76ddd952e879f8e02ee6576239b0af860ea8d0a413d1954ae6c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQUKDO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC7I09fPdddTvuOG3RfFEJcNzslirDsqDNt4d0%2FSXTdAQIhAJxyuguEdJ129SGHRGUrWQnwo4gLMGS2eeAHZ6oD5JZNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGqJwg7dsNOEXfNC4q3ANiO%2BoXHIRyXrHtCp3I44IXB224yNADCX8ov0v6OJPsgKtpgHK%2F6bj89IFRZ6M5B9CQRqK288w%2FUyKc7YUwjxMJE69A%2BM2dm%2Fxq1ZmOYLvIh%2Bt6oX6nzJuzeio2vEnr%2FJjzXZLNI1PFNaDxL0h2GcuRSV13wt9KDSs6NNRZXcFe3MG7P%2F%2BZEHJVTdXdmxQpKhbmDEt3BLP3eTdmj0xPMzkFpge4cpIDClfixZmiWNi2%2BdrRnVXHj3ifijCxkb76z5LIn2F9BbgrHfZV8QH4zL9dSOnAitZt5qdcMSo4S3sL%2FIftKk1Hyes4NE7M0LzvGfVIFBBoJs7MMRWvAVB%2BctcbCu8O7XsbA6%2BmxQANhNzc%2BBfhkyHRHrhHU%2Bf66pMnugydfGK1KOnXsRc5EtNxJmVG3%2FjzDyhF6e1KPVwiwac5XpM73q7Ca3IWQlQtb8NggiqwisPS8jvbzyPeGvfO3TC6Gwb9NvjjJtPfyg%2BedSiHT5cjs%2BKE9KlLsZowbl4o0sMnU78EUM2G6FVoq8G6zIzfQjZf9XCfGQLeixbr8ThvkmL0QhDTmtO4WmfVGc1Ck14bWpI6xenKcwRl1dXmi9CgPCsGhYkOv7VmAMq0g3CxdTYR8p%2BoN6ih57S8DTCS29fEBjqkAd9EAZanHEVyjrX0RB8OeZusRxB0zd9vum6TlwWxIzjto%2BPGZAlPxVzpyztc7t8NxffSTD31D2xH2ymgy21OrObNZ7TgbV5QSvVoUY6b%2B2qiq7uJdUVbGuSnThk%2BNOrxgDEiv4w8jlTFBpYZuaczj2RnJJvvqr%2BiP0Wc1%2BD9F8dxRX6jEOXC1jBrtxWAlW5LLq3SDnRNg97y7a6tt5RBnAmrKIgP&X-Amz-Signature=8e52b4e8971caabb970bd88b89832725b8da44be95c759fafe3f02b051851fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
