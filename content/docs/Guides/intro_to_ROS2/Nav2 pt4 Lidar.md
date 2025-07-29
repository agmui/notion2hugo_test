---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=276b6e852c5136437737453d7982a14d3af19250a9a14d86bb414908fd530546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=faed7c4de3c152a8d3c80563ab65244b960f4cfaa90d4bbecb70c2f99b511eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=c8ba8fa1d5d621bd320acf8a59f3599a99af180509a063333d6c0bea46ccffe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=0ce2e34de60f9ec753572d9d08365c1d9ad3d3e3cc107a0e74ad10557b2372f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=a1c4460ccaee0895d46c4c738a2fd35977e298a41cc60d8010ab33314993c0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=8aeec8c9836c96795003d9f100fbc2eb345bc1cc1bbf0a212d78116b9ef41d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=2870f7da36dc9aed9c3c892913e52ac61b3671575316326d43a544097c9e65f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=34dc52c8d15fef7bc9dc011c4789de1cc942848dc4c41099d6f98850eb3e1b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=4917f58c2d139f4f94eba44fcc561eab080c569ed61b53160e3048af8b1a18d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ5M6ED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCY0u96YIhCAF0vpOgL1cpu5zNc9XIlE4K2F6ToRqQiSAIgVqb%2BlM5ahZ51r9%2FT1C7Mo6LIwrtQV5QeOc%2BQbifk3NIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyqAv0jVWxWiwFNDyrcAxh%2B4pE1ohNP8QGZykSvpya6nrviWrdEiXqmTRkoeTBgz1fFJl2WyBPDtXMz%2FUA5NHX0WcNGe02rdG1hjQDjgTflhkOo9%2BONaSdtpNZBpv3AuqmBCe6T5IegSIk%2BVIeOZUtzgmm60%2Fo7cQErxSRvTFesxUZDcBGy8p3QtNtcKHCdeTT24pahsexYnxqPBBpvjPfYa76FIiAcV6LEB%2F1KKT2oKMkwj7lHMADvbfAYZnoJN3Ny7XFpGF23%2FmIZ6fvx5JkkyDG%2FZugfE8yKPcMp4QH7boTH1yNS%2B%2BKA6kESsOBDowVzuDzykqyCRt2Vjbzrze%2BdVb5DgtqSYEBggPY1XAhB%2BQ5AV55tEru3sx5aiQndZj8hq1s3Q2V04anjxwesDYzcqw5POVpxT%2BriggGZBJOF7ndrKEEPEWkF9MAHuG07%2Bjn5l5NuCYrF5kLFv4EN2rk5CVULHxHKsUBY0rsWfOewmgukc0FJ%2BVMN%2FNyd73qj6%2BRaz80FovcTw77MnLlT%2B5u%2BbbFRTAN5L1Oei8N57OW9NgL8qhbS5P%2BIkhbOD%2FcYMIBo8piSeAyYGSxmANIxmruxPeQostNunIvW8fWWRHLM1n5PzV0zAnSALw95admCgJln7mU7V3gDRFaHMNTLo8QGOqUBvjvcX1tO%2BTcEbR8IQ9F2MNX1iKDPUACeECbX%2BkCq5Ethg6GTu4k9i8gPDe3Kvjnkj53EAEmxS521tt3UslxrJZDflJMBjGsNqv7mej2CGkPgcL3a5CAIbbHQZNGm0oqXZq4acUDS0pwQfT0Dn0K8fW0cXcwFjNXe54q68YwZIO0%2Bi7uhqNFt27oWLNqqLsYV%2Ft7MYg15gVsMX%2FIm2ZtMOrCF3bSw&X-Amz-Signature=055b6e2867f99d6b0ba51c8adef734ce7ba0b994b700654d942dd92ec2a98ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
