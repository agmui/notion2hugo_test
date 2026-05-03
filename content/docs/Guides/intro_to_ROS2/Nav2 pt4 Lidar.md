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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHE5SX2%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eQAiETMHQa8NaNocSaw6C1wGTQpPjUlQ%2FQKeH3YYuwIhALQ0jt1TQzXd7TUDoXVA4mlyrBDV9nNhmubV779G%2F3%2BdKv8DCEsQABoMNjM3NDIzMTgzODA1IgztNrIwuPfE6XdMWqoq3AOgsGO9RqF0TW4gC%2FtfsuZVmQuvkfGNlFjuyX%2BDUhirgNZn4%2BEnbvQ273Ya9yeX6emV9%2BwzBSTGpus5gMw%2Fi6akyDFc2l3PSOB8q1o6pcvsat5GSNWNjE5sNbzL9JJcuepcMwY4r2DulSPQeGrvJdOAjmMgbrHYybZ6WNaJCp1CYxKNFj59Bfq98%2BzpjJFVtRpvDeLZjcWF6l%2BfFrwpA9SjVFDUI1evWpd7PDZSWxZdrJy0RVW3x686Rz3YPhNRnEyEBFcUJ4x6fAPTQv%2Bo2%2F6dGFLsWlW98ZkAbxSPyZP7guqHGMZoaZgSuLHPICfqW0cztCXY5x7SKNYppUe7JH8FD8lUFnHhwt19t58NqfbdvzSMhWo7g1i2CDBeI2ycrJ%2FEnYIZiJSvS%2FqgIMGPtOlwws4PAIuJZv1gYJWlzUm8pL0lX3RWSLOy1cpSIt%2FQsYV%2BYVWvJO7n2fOHMsn9Z0COjmZv6g%2B3OH%2BsXCg2DwEP0DduHd1Ys6HWQ%2BopO%2F0qJ6j5EPCVK02EML245zednKFHypyNGpoGPPRUIlc2DR0c2RCgUaaEA0N3iGubuakD50pcPSNqbUu0FN1tycupYzCEUHiPPgpkzS5OiXc76HBFqQJ2kV0Xr7wjmZ18MTCs2NrPBjqkAVD7EcTfTKTOy1heu%2BiCi9akzvqpnNqdhqFUsYdYPIUkAbBCYuVOAEZqwQHoKw%2BDAm%2FdjDxNZmYIRnNA6cqC9h7Vv5bO7SBmTEWu0w%2BT1mvC1mo2TJn%2FIKOOTXyfm8Xkb2%2B07sKZ9ol6CQsTXsn86ZLg3F%2FZvZiTYAUmw5xNROWvRPbr1L2sT4qH9gwMt32EtI8IsSjyaRTlQKnrkAjO92lqS0R%2F&X-Amz-Signature=e6073aec3b174e4effdec3ad1e87840081767b702a05cc17b54ff5897d04ea4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=8e70dbb98e8b30a98824973847299af9f01633c28617632216a9c7399934cf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=eb68bf8fd19fd79462b5ee5b2be127d3ee46569048ebc9222b69c2c85a0ba56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=200d53bcf00589cfe0b29f9a4869c68c781f3a7d5bbd07e1b3d25d9e3e8590b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=eab22d3678c31cf6f6240a31b5d6d23ec244a49f8e936a7e76020ca68adce3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=a2f53259ad457ee24d0a6c253f0dc96eff5d84e69c3d5f30cd449b3e9fb25149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=7cf1bf2f97a83a0287e9cc858fff10b9314afe1e5b120e8aea0e7fa1790276fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=7e48a9b8834ca944151f98ed5dda522e2a981599425c1c3e1acd668bacc2c6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=4e8e4b59c983860343b9e06bdc9c5e71add2c23d47f8e1d45dec1fd5fa57465d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=d46e949a6a1cc57a2401c271b8fe3856c67c3a210a5f7f585973135f2f16662e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPV6V7%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOIdIB6nQ3ilMObefLrcAYubhemHwZ71sH6Gu3JabyQIhAOzOmhDwNI4Iykcx083b5fqZPwpqenZITCyPo7W%2B%2BalMKv8DCEsQABoMNjM3NDIzMTgzODA1IgzfwFqeXy3zheK%2FCPgq3AMsO5QO%2FYy%2B9yxFfJl5khfLMr77y%2BCFjtglHRQUUT9Owz3x4bAIL4qESfkvDy%2FLOHmarX4Z2YYjQQPyFdhUDXC84DKYCwln3Qur1ej4h68tTv7sudKh3ZLF2r8uDlwsJ2Hkjon1vlED7HjnxJUmPOFOsBOs6ghH8hVGYdTetSnpPUaZ4ZNgIi%2BMsETp%2FNwDBVHD553NyPy4Lf53LT3rvxK60iq20a8EMTacuFK9yICAtmWPGr%2FpGreU%2FXyzAJ8ksYGO5FYgS%2B4lRZA9nBcwlGRGbBGitgOGFV7WHKrksv4xQyktajCEU%2F9NLrnRFXb%2FX695%2FLZM9780EyXDlCYGhakrD44qyKrxnfvUKTh3Fqu0x7j2F9q%2BptenhTvkz2tkq3onHDPfkcJeROXzhv3xgtMuloKMJnDcqA3OctaoFEVGEJmDAyGCMObSv27kXJJg2wcN%2Bbnbeh3xqTWa3M2Mhe7egJ1htMJuC4MxmCFyg0oEqjUOOboRqWuwVH8PBTWLtTVLAY3IJWtU1vS%2BkEJyMEIJJAj%2ByFsXKgmRcVxVmUVmPdsoAeArOfPFSQ4HSnQgc6R5NDHNnEZrM%2BR5lQFZwaM324zNuGK5uMZcA2xMwcyKEaG8NprX05OPjulALTC419rPBjqkAdZaULyjDcUz6GYUlc9w7R1id3U96FyJEr81iO5nocOyERoebKqZnCgt%2FOSbuwRb36Gr2DVIhG9kK2ZL%2Ftmnz9wgi3bMem4VFI7JARLR6J14OGs3eEwLSYc3O1cK0tmV4A3VXtkNRRAMDjUK5Ue6vTiyu7JNqgaXl%2BNI23ZnkWWluNPFHs%2BtoLF%2B2cGeMeixTz6rWkN3DHIhKrnFnDtWbaW1EpsL&X-Amz-Signature=eab22d3678c31cf6f6240a31b5d6d23ec244a49f8e936a7e76020ca68adce3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
