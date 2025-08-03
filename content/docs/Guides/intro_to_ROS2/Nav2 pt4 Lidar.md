---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFEPL5Z%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvMp7phVKRztl5K8FMmbKqQkrp7sWOgCDetJabkdVJbAiAqJ3LKOl65eSJgA4Xe4EAi1hXA0QRYqcBGSKdlVJXKaSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDFNZ0GGbURvufiuFKtwDPFskCju%2BiWFYImYouyo2%2FKfyds%2FVPVGOwP5G7w3w%2FkjpHnOyffgWCcZfEg%2B2NJPkauyNY%2BUrYs8817Qbm0PIfxPavYXQPAfuyFlflZ8EUN1xkKxE6yZ1EwqAC73MqdNA7j69afkcWVcFeBvOW9q6FYeyBur8hCKOd3worg0WvkyVu%2Bw%2Bg0%2BqrZekrKkzedMjfpPYzBj9xAqMXkUx25hesC2IMZsKV4E1MtU55VdHMOzafhyO%2ByVMP0aRRyUAccCooIQr5hfBqpuR5x6xYp66%2B8OIjhze3udO0qoa81ZHrEFyZN%2Bth31jWfXhqLxGrZGLAAf48D1uBhgYMv6l9w55fVlIzs4p0xc%2Fp5XP7iaKRx1V%2F2mNBPaysu2XyjmsuKBf%2B0ec5KhRcDJOIyCkGNU2G5VtzzFmw9IP9Z5Jab3TWt7yk9qDWuygzT%2FVk3j%2FaOrvzkYiIq2%2F11o5PvrPArNfQKdM%2FskODr8f5jDA3F9NSo%2FZ%2BEGU5OSNwMPBjGA0vA2mT2D0lQjjLKF76o78qZ4VHvl1EvR66Gwkgp3r9GDHtdKGiL%2BIPvT0X416nIwQJIlrtGG0zkwFxgIg9Be6%2Bf83T0a5klpKFsUc5npy%2B1tLRFMovBM3lx9Q2k4jsmww9Nm%2BxAY6pgGCZpKmBUj%2F2P%2BkrSZwV8Q4gbEV%2FRbCRTKAt64k3iT7a7%2BPa0tZXXpxHGLd1GR8EwJHI%2BpcDJYDXA4OaEm4YjULDP%2B5HmNb4wY5%2BvF8jQphWNa8UrjTSk9JhZG3Tl1fK5XOeXtEoOK2%2FXjZV8VjmJS5jI7jMyX7uC4ykrS9nidALWjuarQeC8aR3vawePB4P8GioAKxTr6B3pIozrrQm%2Bkf1ihOzrD5&X-Amz-Signature=fc1e57c7c7b69138001db67505e4b08416fc0af10ed532e409ddf8b94e30b663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=46c79817948abdb644c37f2b2552721164bcbf499958d2c3e951174f1414918f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=2d3f263ca03b69c4253c371757db06320560d5857ec3c62b8cf32331668fdeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=283dd199e969ed9b9561dfb0bde8d535121a2c849d693ff518d13135db3a9806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=d1cb9c00d13130f770f360d4608ff73e2ee218c1f0b6d6d1a07717d1422b795f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=707544ec7bf7667be8a27b185e7fe3459362ce1a33700a6fd0bf8731745b41fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=35221e8fa2a39fec9ee28fdcfaa645219191353fd290c32e2d92406bfe6b2236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=b0d2ed89c397069539a9e46f5c37796e57b1884724cdbe014a964f8e20adc16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=97c9c490fd35ef26a700778f0544df962df641a34de74e1c7288c519434b1a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=1e67cdd4dc0d050397f927f5480dc34b292b637eabd46ebca6c44fda300c5f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ7BL4U%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRrsnZ7AEuV4OMgogn%2BzQHBWwYQW9%2BtGfTgVAegAlrQIgZtUaUsgxR6HgtKPgkkowkKzpUmO9X%2BT1y2hwZReVBvcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKKkI2h%2FUFq46FqL9CrcAwc3onDVJ5oZot91%2BrbWA3vTtpMTUiTuhQLQabFqTcanyPgT9WU%2BeEPO0Ghe9%2F%2FY4qKb5qaS%2FzYXz9e9n80sNRXX%2F2zxeHMAZxaLv6I5hFdFc053C468hjLlh3eCgLzeOzSMzXzsgAZaf0c%2F17Don6BeluROTiGh4ixPfpcD%2Bb5QfhqrqS3%2FuCISB31VXX0keUSYKYhy1AVl1uRpUWphAfJCGqWerSXYYqzVKcAK3ckuTPJ8%2F7go1wyOw4DrFRtRo8TyqvGl7G9nf7gkuzZRn7ObxdcA%2Bve3d6SJBYSGiVKUkmd5GkVIMloyFK81ohWdHwN2wHKz4n60WyS4LNsfeYd6PZCwG3JkRc82OD7Y1%2B0XFbWyMF8MChWUiTlukTcZaUYbeGz1TYVGKtQ6J74QgMw5YYob6mDY2VqMK2MJfSwJcTWeYdXWhgqCByyfqR44FXsRcwR7EigdMbGG9jkP21CAUSJpOnh1zZxlKjQLqqGtcbK7XSKXgATlXifvIQF%2FtRlR2aNc3SdPB1BfPagSyINEABGEQK%2F5ihnEeAA4S68aTQT0n1svcVFLfTMMUUdp2oL%2FADigY4YuZ%2F9wm%2B6XKrnQPpXKMJMQwyIcvj4yZd%2BhYuvIYJEM1XJvEoLZMK3ZvsQGOqUBzudKxxjLPfpEHixFEdEMMlYEmdzJXEzjzv%2FZu32MEAbAHlfoHerQQ8BCfyOAT9cam6mBZ3Fxyk8K9%2FuOEYOlF4ph6%2FvmOUSyKlzN1uWvFOhyh95ZHcJj70YDFmey0ILgqQQmZtm%2FQco7RfzyoArooM%2BRixX6q3%2BBMRbm1CGUZTD4zWnD6vlHuqx2gk8o05vgWzYegcbbTvzX3YZqc5UoCXoreEMj&X-Amz-Signature=d1cb9c00d13130f770f360d4608ff73e2ee218c1f0b6d6d1a07717d1422b795f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
