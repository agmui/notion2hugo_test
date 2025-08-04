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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7VZ3ACX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEmYemdVaA5lQikXCCk%2FNXwzVjU3s6%2BcGB7nBFWFPNFxAiA2Pfz2T5kvVwmEP%2BkQJ%2BiCag9%2FpFic42DXmIBRWhatHyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMDXmeLlA2ky3pJaDnKtwDBWDUkEhLcWx3T8tch%2FOz9noUcSGNtt3Magsk7I9qM802ZyVV0Rg03fwbsu4ZyYRa7gxJo2skCoxmHwWKmFIZD0gsbdijNcbUpSsAm2YKbKctS9CySB%2B90K8dOss2Naaz0tSCkDzIxOHND%2FB8ar0grE2V6uxC6bXkIFx5XG27IFkCbyYkajmrLrcl5fI%2FPb7XSeRP3DqTNyUx4tUvRQehWPZayKfNSLisdcDqXINzJVINJDKSZwZFweaufGknyfdleGnFwLLdyxBf%2F%2B1izBs7J7wBUTxOzLDRMmnLyqrKWAh%2BWd1P04diNU5lu7rZ1VTkyDTovcvZu6vzvFSvevYkjvZPjfx72hhBIlQdovEb7tCvZUyUwmiMvANuHpWkie2xlgq92ZOS6TMENT%2FEvfumMhJjgLAot0deHO0BmcOjkQOONorxL7R8%2FpTVD6AGv6dJDqTW5BPrlQWgqOOH80gA%2B8VkS9%2BlsB%2BzebwFxmd5y%2FDeMELrLm23A4l2VeF9HWwHRhtzT97v%2FmSw5%2F70btYEAxkPuknqczYRE3ObmrlT2upzn6NfvLwO0gzTaZ%2FFJDNcviVCQjqTqlZqmUkIF4kgkW4%2BqnYKzm9PJtBWqA7Rl9O%2FiqdUW7TwQYzMfcowtunAxAY6pgH4rfmWtyUxt9%2FVECt72aveqtV1vtET0huHIkUr8fbothgqd0V1KieTtdjjLaDc27uXGBq4kYG%2FTPvmwfT9pZJ5%2Ffbvk4rVSBBGgbkeOjWJCDKRcAaNvDyalesKtj1OgMs8n1JrIvd8PG7VVdZ%2BvJDWMzyIMxqQxVCgaHoJUYC318bB3dtKuds316XLrzUCM6zBFQ7s0li3hpsshzrbJ77FAYNdRvp%2F&X-Amz-Signature=5bb243556ee2c568bdb4eea10f9fe25922cda621dd756fbf893c1f233cfbda2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=7a41503236f783825c8812794a919407c5ce66b02ffbff0bb5b85232a743168e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=8c64db3cfe2d9b93daa2cac96f9a9d64ae27855294575edcfec335e6ba59e12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=7ca3e56de5072858c01019dedb8d849c18f7c9e59297678579d970a6522dc059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=859d1d2a1e5e7f4ba5ad2b149dd03a1b38f9f233e1cc527df8750f85f559e4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=39edbb99170879c7b862ee805ab74b56636c75157002b6639a5ff965d487581d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=e76060b8653b9bff7d2cfcf32b4131a607e2effc87cdb0b01117167609791afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=3cba8ad1c092f414ca98830d342c56fc31a7e87386147b8ab2afb4f60432a2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=61a1f1b76ce4af87ea4106d508d37dc7663f15c2dbaf84adb2cdc60f38a6d8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=982217542e1928b1d1e955a088e46fc242ca358a55e9a1878db411e2296b529a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXF6KTT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH21QGdXlYc8izO2T4CqlMzYzBhnHWMAji%2BpJ1XFvOH5AiADEYii0BnOBmdEuP3Q%2Bbc8%2BE9%2FILVMod7Duz5o%2Be4ueCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMVCLT%2BLs3y2fgYPfZKtwDwUIdkqcekXDkznfu8Gdx7NOOnG782dV%2Fhnqf%2BiGXpMwKfkGpBrwVnsTuESzExTHgyZwpDD6gBFVvEtpNwYltfJEJ36yybq%2Fh9BJ6MSXFXXVEDD3JMz3R8I1v8gf34r%2BrIwWajN1DZnB1PLPf%2ByNEXgmRh6FM%2FpVMjjQS7NfL0Kug5pIITi1dYpWEgzNJK8j%2F%2BpwQKCTw6QaUmH08zCZs4eOJo90YMcuMi6upE1p1KwOwv40RHqwOBNuxQMGRI3cS12ShTHJ3%2Bh9NSjZw7545jDL3Tu0aSbQ4qRuBbetQICiU6HPtjsEeenySuI6mQ6Hhy0gV0VIJ7I05VPTFJv7qJfkcnSP8SJzgKGQRV4C3ELITUJYKwLm2qPYbzeAQsZi63FYAtqyMpjusGyEl47Fr0pIWKT9ERz%2BeInOmyh087p%2BCOZkdOEjYFCYqSBHA3iZiSI%2B3BeL3vVZRLnlMTCzoG0gZbwr9iSKmXPO38b8JfWLq0kDFimfEu3RAKKczB%2BImHoIgAFujaeEVpsCLPC4cwxVMuOly8IhTCuczlxKGfNiVbdyjU3wNtuHM0ZVnk1YNrVABTY5thkVa1ipIR1Dup7v0gNVm1zFXPO%2FDJT%2B5awr5XEUo4hO1zT8wqTgwz%2BnAxAY6pgFd4C6lItWpiludNoN41o36v9IPJoO8nGVu5j%2BZzflhvFBVScuNJT%2BdJ1%2Bdb72iJ9jg1FP51E%2FrfsokAyZoITsTtgNzcFbjpY52tFJ5a2n03OcaXYk2%2FVPb5mQhY2TFSZGzEU8mSzsE49RNDg59Km79hXKr%2FScfPYywy9LgjoJIZcHd5%2FzLg%2F07yCVp%2FKhHoYYK4%2B3FqlC2lwwqALy4LScmbOJY%2B45r&X-Amz-Signature=859d1d2a1e5e7f4ba5ad2b149dd03a1b38f9f233e1cc527df8750f85f559e4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
