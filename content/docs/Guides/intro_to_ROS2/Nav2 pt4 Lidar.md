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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRT7CI3%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT28dbbyqmc4bgCNkxDa8MdAWbE1MCBrqugxHICk762gIhALtrQjL0hPnd2M9VWH628gJ4btSMwJbgYi8Aa8amSh9RKv8DCCwQABoMNjM3NDIzMTgzODA1IgxaVV9F1mi7EKpMLAIq3AN086yt4A0Mid1lrnDtXFg0nbFXWzrjQ53Ot%2BAxcPDQHJE4KxJR8mUmsFknVzNFieMLfxKZ4pXaYrJUS%2B6oV0zWkItl1k0lAyhCURQ4IlHm5zwUFyCav7Dc9gjKljMzohlvVzWXTQADlRKuvhX%2F5boh9Z%2F6mSfycWX%2BU1Cgkv%2FOsLP5Gy8%2BPSVSDQaYgiqNPWzYaBgWb9v3W2MqAjJWow%2BrFQALRnSdXwDaz9yA%2BrLUAZqqPRfZbRhBbwtSGKuF53D5QOmTrZ2DUWxXrcdK32jZaLR4s7imQ0ONuUXaaAGjTngzdMi%2BWtI4uCEY9neNhOUYsErIwRri6EWF%2FhLTtC6%2BNqdRtNqkRNSUMK4ahr5hkNm7Xukj%2BDplefY0Y86vx5i%2FsfBXSuTbtDG1NieQfzYwam7bvKk6O%2FUzJED1FuiP3pTs9F5xxFw%2Bv3lqOar9PxBhrDofyjttOLAm5YhJyOXWIWgwMD4xpFWLV5UMJmmZLq2e%2BsrGd%2FNqGUs%2BJbPDYP6woA9coL9M3uWftT%2BTQrqXmDz78ZApy%2B5PwRgeu2ac3YeQ3SBI%2FMnpStXWEzT2oiCFqmwVhwBiVCwKDJvzn3JxFhMv5eRIfyjW%2BJyHx5YOdCf%2FIXKRc4YjNcDKiTCT55XTBjqkARf3JWSDxaIyasWrGzCn7usv6ef%2FqLQ38rDPOxdkxUiJcS3DOoOZX3HUrDYQmlnj6zzaN704jg7c5SZe2sbnjghK2xiTP9NuCecl2cLO3OlnFcHaFnboeJfP%2BXLos90XAFJ0Y7LZErJLEdyKQBp1%2B9caoUbdv6JhY4xzN2wq7VjuKIo3tFao9JAbfncLuTcRH0FLRhgbwfs43u2SfrXgM0kdu%2Fbf&X-Amz-Signature=86b6c5010939096f478845995e74b45c9f46088278c6485581b0d4a68638e496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=72471d926889893f6933168841013b821220d68443c64dd62dd70bc9e420f0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=10fc267d560adedbe225929e72cd41cb2b9ab87b5fb8bb08db27ff2e46015137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=40214b13049e703085bc6d03ec7627794078a7217d9f8d46d52fc51b4b77ba40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=33ec9705236837b5afae905991dcf0a0dd0b3e0621789b05e594101bd7e12271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=bdbd7a38155b05332a167cdab2a60e47c72c1e8a4067dd7cc121f4ed80525061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=4997ea15e538b6664322ca4679fcfcaae152213079353eef4497aafb7c00cd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=da398be05c556b487260cfbb2389a5add5fb3115d99593ade62efb8e313dad37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=6beda8130439dda73b5e78b4c82f253638fd36c4585c45ff639976f2267f3033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=8c2e507a5f83e1224275ddb8f9eb84b568e74241dc93af0b34b2c46f192989df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMQXUGR%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDs%2FNTdCUCQ7nrJm%2B%2BBMO3NNViV2yic%2B3Kftr9kxNF%2FcQIhALz0nSw01blW7WfTzFoo5Cu8PngJJjnqIo1xs4rq5KgoKv8DCCsQABoMNjM3NDIzMTgzODA1Igxe%2BY%2BPvM5H0DKLVtUq3AMritAaxV90acjb%2FoTtKGiEw5coTOY8JXOKnoOJ%2FO4i5efPKne7RvJ2Hn22FR4IJfKN18GQlaGoJaRKwNwgTqIiRrB6SNlSM01Qw%2F6Vri5r0ByCuQK0pd2qGVDx1qBb%2FUHSfjroHStoklKyqvz5ng1yoMiyxbzhlF3ZYcE4SNHDz%2F8Hk1mVIKrm55ODNhShSDML95EX4%2FuIGGHPcyZf2IlNs8Lcs%2B7XJEQhGqkKowvBzCzaot9Dtuh9Z2eNx2cynmNMrI2xgMFhBQHN%2FHPi3v5l%2FchsPznRnG%2FcYMDS8O333LiF%2BB3%2BvzFbxcH%2BB8EbqRNWAMPvjtyO%2BqGjI5k%2FHZNAdlf66eTtakjJthYKcZpusYzArMb97JGNTjWpFnxIZ20Ugx1A8fwL9yOSpFwudeAy%2BSodqrlQk5M1H1pzs4McXh2X567G1vO%2BX5P8OxbzMZZlfIDK6ckHpCajpg7vdkltxLvHSsl2%2FzzTij%2BXtzzrxaBwnvCCCzz6ccvda5WkjfA8EefO2ZyiWSgMXuOKXynblYenHreu%2F9gFX%2BuiN1HOuipxg681Y1ie3F78hx%2FLyDRgqANlcpIZl%2F9e1J0FkO6Yv7vid2yYZDsBI5QacPcU6uT6g3luIaNRrtiomzCOyZXTBjqkAeoDyA2BRyR9ocJaHNc8dw5FUHHlZDMln9FT%2FsSpcyFixykd6Ogqsc%2BL8rv0JNwyw0NZKm10yYgVNQKVc26Kz0CQp9NEvX4nmF7bFQfcD6XY%2F%2BR70ivuEHx4biH9lAO2hvir6fR3lXWMrNUDL1nDqT604TLiuZJsHf7g%2Br1oYc2ymqqCzAUns4rwaLfifyihvGm3OZaa6q9cMfK1Pds7fqnUm1j1&X-Amz-Signature=33ec9705236837b5afae905991dcf0a0dd0b3e0621789b05e594101bd7e12271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
