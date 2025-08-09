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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT4FDJIZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRZjiivhu6Fvv0RcxW53LgLd%2BCsVCzS5LJVi2oPfxPDQIhAKBdPN5wPmhhKtSbgps2bYLwAFQQsw3MKiZszvrl%2FjJ9KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3hyDZSo%2Fd7dtzDKMq3AOnAt3ubhIgwODIWX%2FcuQNXTe9dl7%2BoJwEXhjWq%2Fef2PDg%2BYQZ8zAuXAz1J8OU8j0P28Ch61DuiNy6IJqHr4DlpBNnwxmY1mS8g63tW%2FEFM9T1ibAhl%2B6jfaTu6sSc%2Fx4Mxpv4kfuVqpP38g8%2BzZCSSOgrjhRPSV5b7pqYZncR8ZOsWgXtyor9ilmuyGIVX0rIH38HU8h9et81Up3HmbFdv6F4LhwV4%2FkGalj%2F2VjbFJoQKUkWjNWHhUgQqbErnefz1TsOC3Lt581w9ras9pk4ItoITHn95WnDRKUl0teFcobB%2FiH6GOBv%2BLqC1Srj0QcIVjBPg1zXaO5u7eDllOZFOWSMj%2Bs6TjztYSNIZnMO0U4%2FAwGO1G0dstcit4lK8bH9neAO4MSrv5tTJDe0r3mxZMXEbwUYGN6SmYnNFAKBy%2FKGIzKxWhMGRDqvk8QN1pQJmSZMQYc4sEuRxktNn3QHBjWL%2BSO6BAER07FVuB1qqHuULYGXRIz9HCqH%2BMZEB0AKM2igwJjlR43naaZ68hoHfzXDraRV7R65wjkk9uYPjLAj9JKgkztfwXyzusUaPTrNjuCgAsiA40j6Sm%2BE%2FFz4h78qvoMKDRlAvHFABhpC3O4%2FHnSIr5FAAcQtuWzCx59zEBjqkAdBqk4oWfAOICHdgJDl6MvgAIfi5naOEl8suGjMTmVW27anQDzsdGpi2AGsyQgy%2Fo8bW6ZluGRT0Fqh7jcoCh6wviqrd8UHv0bi0ix5Vu%2FfCy3tYWqlHhCB3GM2pgeSfE85ezsIuuFvM1SiN280j0vl9HCQhA2gYNCECn%2FnkypZQC7rSqF3Gu%2Bplzar9uMGV9YyJQp9tud%2Bh4JGz2XX88%2BRXJLb8&X-Amz-Signature=07446fffedec533a7bf9d9f0ae98d4549855abc84da8592ad6a158732abb80b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=7aed00e2c4ef9448e4c45b1f32d275585573f6ae4f9cb27a5d1a65cb45064ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=52e9138fa2237f5fa050166289583e323c587d46d87df498c7c42fd1edeb8804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=485d05bd28d5861752683e4a374d6982aa54fbed3dcd6f9ce7b8373972160d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=059181a1b5940fb1e14924b90c6682cd85b019ab4bfc1932fd521317000e9c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=b0d4cac5ed8544a488c23a6a7e8aebf6d994d7a3417fe8a29ed5155b493c4170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=afe8e4697def7bf97806a7871c66789beab1bf3c7d3f37fc62b333eb37e92f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=9577923f1f2697d4df990b5e8bd97a3e14b9d644ad3d262dde62a61170b3eacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=49dc17f508ebca2f1c190fcb1ea00f52dfbf157c94ff98edf66cdf28767e1f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=aef7c34767e8765931ea35a2a267e290c97fd4aa59a9e23c9ec5e6c071641dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQSR4TS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGex3lpVT1Kquzb%2BafJvOkqj%2B7x0DJChHvex1zfn7VpZAiBxjtQr92MT7Zk0mfCDZtJfLPf6SvrY4pOWmilPsEcIsCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGMlJ0dYAA0UkZYqIKtwDj7Z40XGce6klZn2vR3FueYckgXBtoWWJthh1DYDo1kfvD%2FcXcQOxNBFXJ6W2Lkk1Km4sxocVdcJzYbf7r7raYl4rcxAJ%2BbwJ%2Fov6kRVgTrNpivIr1xSlLZsyrKHhG7IXyhYOshClyI1IouRJhZbJW%2B%2F4ncN0d8YhN63jd3i1zGl5JnPDPnGzQU6%2FRV10YuwPBiE7gMjAmU07QwgRoALicZ056BBgTGr2YYdAm%2FqfUszR6w6pJ%2BML0e5tOaaOBiPLC6gTSYJuBk3aYSuTcQA4GCN2OblNKuBCP0iRS2Os1OF4eQpxTDZ6MbG4bdS2tW5DPA5fRoyuqam7e3%2BE6uaJJNTIBjwSjkgjkB6HpYJJbPIoAeijIKaa%2FUAZa4YZ6W3kPc97kjzsnZoE9bvZkDkS9EBHWQ4IWTyENx%2B1Oiz8dM9N7D4%2F7r0FPPSiY7AZOfLu7GxWibJj7kCrWriKb%2F8MVIcXBC2NRaQihAaRWQSDT1EszFSoeP7apMouK6q3pIuCBWy%2BTWWZdRxoG%2F567Rraq%2Bqp82COSkctOO4d5KiesmCG58obFxJfA7WT%2Bp7U7PcfbCcK96Dx11Ak4512DOuQh3kF1xSWExlBTTKVwH0bUvjHh17vo03CLdsSj%2FAw5urcxAY6pgEr8hJm4yMhZOHwwlDC6digXLkBpap92HrkloRziw%2BslZKAVoEPKtqtwoE6oLMl0yCb%2BDvpt%2F%2BQmiaeaFeVO4GtVrXpixJA3WvIAP02l1bYdmDYUxS7LR2C6cC%2BKMAaHaPiqxDi44ThUWzJ6uvJ%2FoJNGxVF4czmZoZz36FjLXPVZDPw%2BuSXFYpMWtWLPyGjTtvi%2BRUVpkOy0ua9KLkM0nvZDWBK%2BlAt&X-Amz-Signature=059181a1b5940fb1e14924b90c6682cd85b019ab4bfc1932fd521317000e9c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
