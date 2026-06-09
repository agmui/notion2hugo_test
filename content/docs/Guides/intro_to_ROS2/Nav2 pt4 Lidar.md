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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIRUXJZD%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgsoTanq28C0X%2BTDTEpy%2FfjkBRFdF85eXkUxoMONJ4%2FAIhAMPaxb2TdjcFD7uRRCrYJIAjRfFLVU98I9rf9UDkrGdLKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk8pVo0KiK6ugNedMq3AOiloAtr2SyigP8IqnZgWLUL7ExWvnI7QXafvycCAJSuJLad5qecs6ex3nO%2FqBmoa%2FeG47Cu%2BrvWcZuOXFFdHydJWMiGZlT7zaw343yGp9VfUdA3rILLyMlJEEwqLZl%2Ff2CeQDSgr8uDlIfGZ%2BZJvvSNpik0FT4wEGlW%2FW2D%2FQu2cYK04ICRISF4woECdp4BXjv7Qrnvz6A0olpbOaj3TRYkpVyfzfiK%2FVpeDH0%2B738z4LAc1RGq6yjSk4HBB6kxvPnuv3qGhfiFMrWcJcj00HPgIzZ4a%2FG8e3wiORmlnx06VQWkeFv%2BKArsUHMWYdflyMRFDI6UxYQ6er6fMVmQ22i9WowxLwyeXXezX4FHARxDO71eNCCbB0KOIBnoTLBnxpkZ%2FOqA85QM3o4u5XOxkHAzH78uThOoASZVS3d11cbdWWr0RGWIPY0AidEcoN8Jau8al3s6SSUhWHw3KLVI0995v9pDKdtoe%2BLK1eXe9J6a4IT99oH2Ii9gdrwwDcd52S4OTmMFICkcmqXdOr7c1aNnH%2BoaCwAlzs53Qrnich4%2BatX9vCQjssYquoOx%2Fo5VQXjfvfy2oY3HMy%2FLDsc76CxwP9WMlA02wehX4sxhlGP3XbvjsaeChpuKhV0jDCIhp7RBjqkASUK%2BHrHEHAG1UZSi4RAudlUiurIFz9pYq4L4F6mEciCKKHAG3HOM9Cdp70pIeSrTHIUtOsxdT8TW32rm0NrGiinnv5H%2Bxh%2BzdCDnMk1EO7eZsXtS%2FrrZDu4cbALKksSULywrx5SwBq0UsWIvdj%2B3bP352042dSeQJkcFLvx6lSJx0X0fAO%2Bwqj3n7ijiO%2B5roqzUPYWnPNLHHbCvZmlAS%2BWRHIP&X-Amz-Signature=950c854de47639f250d3359773bc7268d373d613ba9b10f3c519c318efc6c862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=fbd564c966a298cb1dcf8d855a0859ce4bcb18fcff515b69bf6b51b0b5c3bd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=8702965e55d6edcdc2cf5c49f8d221d50da735a46aaa5698277d3ddf6bae2918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=1c29189274887285f117ef1a16d0f5104ae380260740d66c37711405cd723ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=d5e44b6d6d77e6bb68ab424e0f31431cd640a71866435576380f516ee5d8be96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=68bb44e2c9cc808beecb60dc61245ea12dfd22cc46420a19dfb0767124df3302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=933c6caf70ea3a4aa1e5f3abf1ff2f474bcd0df15d47f2c597b5a6be9a82abe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=cfa87a4720fe526effad0d68dbccdf00fb9e4c85e4afe79d3394f9006a590c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=d591d6b7d3b056502a4b2d0a1f31cd1ab6c74a296ef128fec8e14319eb602933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=1c083c1263874d8eb329835fe3e307df17061645fb35f3904332915978ba30cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3CMKD2%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKhqiPf76QQTJ%2FYjK1hNgMl%2F%2BD6%2F%2FOLFPCDm%2FCm9egVAiEAuuYRzJ%2BKZ5epwvZk93FMALVblNtEUIpNmEDRvORqUpIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNKZfdR%2FUHmCay0ISrcA6nTTXnvHlODiSqO9WVgb2dUfApB%2F4jM4PNG%2FhXhbQHKOxktbpAEZGgV%2Brez8%2BcwAAKoxxL2X%2F3uX3W4e9UZlymbtUzSHIom9Z6lJRC8yPlpadKTH6tgLx%2B31R1wzmgZQtXHqcbfxr7aA0P19%2FtS7s0GfoxiVFdcNiGySVDHNZu1E85wryGP%2BSMYqsOw2W2yxb10AfgQu4xUiyK2%2BDIR8NuoW4hdW6TmxO%2FLRaPjah7hbcSihfJ9yZAdR7xYzGKQT%2F2RuhCWlj2QV%2FxZuTLEFjJ%2BUkoVJlovnsq13h5U7YnGrX%2F5J8Qfm%2BbGPzefVZeYy6t%2FEo96P6qPIZGz%2BIkpQ%2BWLlPETc0AaXsasgwNT0WR%2B8Nd89c40dIyUWmivubPRigEffwHJX5elV1mgkFOxnzEa3TH%2B38WspFV7Ij9%2FHOOEbpMC3dgmNba9kSQIz4imRVoPrCHk5GGviMIYuybJ1HNc1SJLvT%2B0NVN0Ncp50r2KwjYLdeivnDp5mhBE1vrb3BgMY8fxJjQBNba2vUpfpeJRDX8ygSYsERYbzqRYFeVdFSu51LqYa04UbzqCDQnXYZoTG0PqNKyW%2FZZITvXKF556UBk4Ll0PLi1wm2SUxCxUFqH%2BsTySkkv9iR4OMMmGntEGOqUBVWTf4DtuCJ%2BiXYdrPz47qIMau%2FL2yOq8KYGgodAehLhW72MXQE7iLUpHVvdBOSLSXJnOB%2BZOGCxYvVTnizWUQ3Mm%2Bjr5ZkoqbQF6Ggt4wiuqgKeavP1YvLVynUou7r9xxFjYSJGf5WwsujR00YQ7vDzGaYImyfEluXVbcl21WHhbhsBSsnhLhZwSZyWV6vlrBkh9NoEhBifbD8%2FEsvYIrqJZuMTg&X-Amz-Signature=d5e44b6d6d77e6bb68ab424e0f31431cd640a71866435576380f516ee5d8be96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
