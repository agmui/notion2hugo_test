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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KWATEOZ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBThlUgYWPIeRZTA8%2Be%2FCcdZaC7A5pcotTJ%2BuqebKxRFAiEAxAoHaULdck501FbWlbcg6wV0pzFnLLtYW1rbOst35lAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBpWKm3lNUdSSMI%2B7yrcA%2BQRzZ59j%2ByBxSRLw2oJiE2SzzCMXS245ORVD9IAYeWVECpn0uh%2Bonlruad6h8JX3ShA1TLk%2BTS629%2BZc%2BjafmJFOnm3zTtWDuBAe8PkCByd4qblg%2FnCHcMS3Zq8f%2BVqcPGc7Y%2B5UucZgAJ3KbEQlKQF0w5AxzIB13%2B01uCEUzxNTwhtKzJyXB5l%2FLXZbsCWHfI90zXQuM9kC8IFOxFloE695Jwz2YVA81mRp%2FpJ2zEsvgxdaPdp%2Fmfv12LrlG3UUZmauKVLYNycF1ApOQawICXG3HsBrxJOTyR%2BTaWmjBxUWQn%2FQShtwdUVxgULlfcznc8yA8lQSdlmsbDHBiyEdjEhXYruOYOTU29dF7Z1eIBgUn5WSzzkZMN6sG3DBBqYXtD5dfrUyG6YjOarnA7qNoxYaVN%2Bvi01Ltl293vH6GmpATSxodtDTT2fevisLNHCmCcrVx%2F75zWNOP00yYpDfp1CcIASOOUrg9Fotx3VdRv7LX2Ag%2FtP6W%2FfEq9Y7ZV40J9a9R2V6cv83cWo0U2sdfnztkambmnmYxgtjS%2FsKSNtCLDm0aP2YFz5gkT7Q73g0JEeUq5yF5VFd19TsZf4SRaCGjl27KjFPzyrfAW7vwwwQU%2B%2FdPtBRPYoUXInMKG5q8cGOqUBYzAhJKw3p1s%2F6xgJHlp9DNap%2B6%2FV5ebP5x%2Bj1N5tTKt2Fo6Okg9sGPRWHAJdt%2Bb5qzVF6RBtZrJbsAVVRJO1C28sbUhOTaxtw5Ze9pCVnMHIm3%2B6vpwlhmzbtFdZEg8t3ZS8DDoHl8eH%2BVwfoKB15ooa9eSMj97fJiWCSRcEAOLxkRz81F02bFwtljP1I6DMFz6pQ5APHvP288M5aiFk%2BbNxM8HW&X-Amz-Signature=57c72838af9a7823088dfc5b4ad23f5838b5d8cebdb4c21b0517e8f2cc1746d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=172c295c080c02c4fdf07cd03ca37a36cfa6ab16cab8dabf024ce582a74e1270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=94195e51e00200be34095da4232852d48ffbd73a0e9dd45d7aac7f812be54c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=ea644429edc3f07e4ba186f87363dac9b98fef88f3bcbb5caa05a9cf8d111b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=f09f90cd5e68290e9de524ee6b429286715b16ff1399520ecdc78a43bf78c099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=9c237276867bf0ac7981cf0f018fbccf7d35fa3659b2fc17df0d6fa74734f4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=c3fda7ff7d26b6d9623b7d4ee51bccf92f380ec5671d0f897a603768b94c94db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=365f23d8341c2283f4b17d38e295828418dfb83529e6076ec1f6a0d809c427b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=1eee17cbac2ebf5d3376f31d5258cfacad572579d341a03aa7c99e162fe3a87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=779db032e02a4f28ee6aaa1273da6b7378257b6e58f607d360bee6adacfa1d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3TNSB%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChT0U37fgKY4J5pCWXJtqronLaYGX7hqCs0iTOacS3TwIhAMWcI8l87k7JlABqbsT3UzUrtRNWJTYzAWysTzoFEpSRKv8DCCAQABoMNjM3NDIzMTgzODA1IgwbR00t8A67O6LmXBEq3AMIfA1KvqhotIlQfPuEgB7jF5zd0bHHjOP9vmzLoEPjmd0ZJ2lLhCnDxRJoXUFx2k1nmAnGhOHWVHGwav3PFdWwyUDHKpQlpdG4c48ZoabPJkd6SRmvg%2F1s8TD4ZO9dZo9K%2FNwn%2FvDM8zj1P9VYp0PgqeoFr6cWFhS0Tsdh52VCqjOiQcf2K%2F240xXtaznTFLzcka1tNB8rja0Fnd7Cjhw0M7C0lRCwtunB%2FmHeju2QEfQmkdJQ38JAmMdAnShyqPA6GusNReGKu7rAenTE6xJDJhJFRrNpqHzen4qQ2GG4j9JuwaNAymmKyCTVBBj%2FR82Emvrvts4vkF17YqJ1WAuXBRSWEc27zMPip3tBc5LiCM%2FtLnPlEgYQR%2FJ0ZQcwVBjRZOzxO%2FHJgl9u4ztzusDUKR3QtjW2OLRRT1Z4gIcHv9u2EYZVR5Upqb%2FTyMHlxJCt7bA7dGYtD8g28nMhd9ZyS%2BCK7Apcv7nR%2FjSi2GyUXFclhI80ftFX5zPLYbogGSWMwNsIBpLNzwNQpuF7xozkDvl8bSo0x8bkdHNMFc3A04aNluJvLVIT2%2Bl6f14rwysdbCXefRI%2FaXvesH1noIHs8%2FIoWpYx7lfMgDBwWkQXznbDDQCOA5FKKUF75TCuuavHBjqkAfkBEZiNUtlKHz9bOsKHcqziFaTnRV4ueRLTLf%2Bm2u%2Fsgfo8YIQw2slSSdRKEmc1wRyeg9JNmD%2B%2FyS2X09fRo9Hg8w8%2BZnfYB0HIZzl0xQolZt62nZgkqyGoUPSxHY7XHTC4u6ltwZOihPCPvcp21PpNy5sy1bq5NBCz5nRG6Au8yINH0HzUp7xFvSzZR0OK1YvZ2I4n8uEJS6YbORWu031GmOQZ&X-Amz-Signature=f09f90cd5e68290e9de524ee6b429286715b16ff1399520ecdc78a43bf78c099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
