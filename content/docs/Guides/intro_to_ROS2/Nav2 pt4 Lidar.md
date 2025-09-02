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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVMKEBV%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqdLIeA3pOWOy76f1cOZhK05Y49rB7dsFqSaChs611KQIgZQw8opEFLWZ9RMC%2BXYXPNyMULFpTUMinruta5YM%2BsUYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAawZbA%2Bqtw6GkFhPCrcA%2BYjBUDinoYAnWgiWFpAQKH%2BYcOaoBq7IU5dkFKWYs5RJzJSK7xSD1uCWBI1F8CDjzl5hDicHc74AI0SB3i4SSQXX%2Baaidb9lYWwrB3dxNUf4gayBWpXXaAF1EOONpl2AWMGHzruqPfyNgeIjYnIP8mbOmJisAlMqnY23nwqdUktQlwDfZOuSWS3mHLeplpIOGwkWrU%2FJ6G9UYlSsuQgWRtvZZP5Bw9%2FMag9vmEy63LJ9mzmTC7O8p0rxEifxji51rCxMzuzJxKgKLgepsJTpFIzIQ5LU9ZfYwzssh90GvgygZYMZjcarIOZc121Jd88LyGmOeumbT4y8Ky5SIR4F%2BvyHNZ3QhMt%2FAB5aqTCyvOP3gzhq5qOnOG37xL6WBAqltuigJKEP9rQ2e%2BRn1EDswmDMU6hkXknj5BtELFbXgFbbDwRJ0Nvo75FWOeqZUEkje9mytaHYLEKohEI%2BWpg7Fl8wIHKsKtUv%2FhU7eXHyrpAMYPMglDu9s6qKR6B9oUEDPj5MJhMSyYP0AcrfyrZNs1DNLFe6ayM%2FcORGQmplDRCoPyuf4Jcs4bRHWt5Fio7myyZxI9B3y7bZlIYJmC6N%2BFTJeymN%2FcvJNyFkxOI1gfsYMYnO1yoiQv3Zk4EMLmJ2cUGOqUBm%2BlPX1GvMoOgb0O99FxHdezKRVb1pwNNbPFiqNehPSR5HwBPeFO34tvc%2FzdxITgGRtomQTnHxmddS6DnffA3NujjDv1ESeHLsJV9UxtwbgRCGspaSgzj4uLF7IIysq9IvR06pMuQMmQtRG5LQhRGB0Iat1ISbudYjA5NC33IQRNP84WzQJ4uwfO5rTAMpoepv2jmsURKFKrpVfKQd9635%2Fq%2Fm4Ps&X-Amz-Signature=97e012ca35738abeb9ea305d9a4fb762c4bd918e12ca76cf06d4ffba27b04911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=664babaa3b861d676482803ee9ead46d43663d68f04e5b8576e17497d7a34c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=a42d038369e880c83d837626a4eb9edd1f4dafeafe87b0aa6e45c86a055e4010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=4655bf21b08c4acaebb663713eda6cd82717db4cde6c318fe24278d95ca81bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=93090a05032de0ce74de4d4adbb68e401116f9abc38ef4c98149374a36ac72d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=869633c263ca5c8e8bc177d6d249b85c27fa167e0d1e315575d1eae2378088c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=d2a4189dd4a394ff6b0c68787c30b05991b45a65d192467a3a453d47dfa31559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=63b19a2c65c1c7f9f6064c97d5a3430391aeaf4501807f481e09812b4a8bc138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=b48478282dbf8639b8aaedea2bcadadd007c8d7c980cbacec8f3c32bd10f1ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=afaad0fe042af289a7138ab0b7bdc9aa80904ff2bbbf1e8291f488534096bbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NPWG7HO%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9y%2BctvGGiG8CQIVZ20BH9m6BiULnA1W%2BAoi4ArTEJQAiB7kh3lby%2BKgpKHsfDmzmSF0usWdhV7XWpBVe2v%2FUjJ6yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0SttgsUL7oYR0RaGKtwDTCy1vUTPsNgPxBbQjGm%2B5mnxx5zx5Gymon8wU%2BJiwwRVEl6AGUYg0UmObrPnlRAChLPhuSdhZC%2B1u%2Bohs1SlUmUbaD9Hjk3TOHQhS1ImoBLXXifCgfoD38s9ybTeyCdwHq3oRwSfcuSgY%2FWOSkuWiBbM0cIrXsVRQBvb%2FIptfSB0pyxZFxStQwh7OutHPo0e6fNe3dOJX09KIsli1m3u6e8C5oLvWkUv2Je7ycaXV0CS1vYfPG1EZwhNGtMcFAtc8A5HlyO%2FjlGN6FCn4oXr2Ni4PgAtxcMEeuSuG%2F7Gaxk8Qpqy9BFD0e7ZxcLmxLcdwdL%2BaN%2BlyqWMylgpDr4xbkfUZZMt%2BGVkr%2BXpEzlRxZ%2BzlMQI8OblhAB6YeqN2VhwWECLX4qfjH28IG2OKEwZ49aqBx1AIdI0st8PIYrUhKay0tRvOqu3hO3ZVlsl26c94VQUQRVA6ey55SvkFdahUlB59bjUA41PE1%2B5ObWZW2T%2BrnkjyOUQRKbQeTJ1Fekr0i8uJViY2pAVsW38uqDoQEGGp%2FnlHDUYZSDMq%2BbGJ6jDEYQowcchh2zW1RzquW3LSQlPF7u4iG0tfaZ0%2BaBiMmrCz%2FudX4zXQKuq4ZPrwd8rw7zsJKkCkDbzV0Uw9YnZxQY6pgG%2Bf%2FNsHZhj00go7AFkSGTDxerQoGq0rTItZwr7QMTadnbtqIHvPWYKgTa0mGnMVYnNmbxNknhRIX0mBjM1cF16ssHuOi3FmZWrYiJKJ%2BZfuAxvUTzV8Jq%2Bi6VIHw%2BlYWcRH0UYj2jkejlxKLwRTrg6myynKbl9n1TSrjVVGsYji3%2B3b9Kgix%2Fy9C4F%2FcTXsc0XXJdtpZ9Ay3msDJehI7V84kK07lQa&X-Amz-Signature=93090a05032de0ce74de4d4adbb68e401116f9abc38ef4c98149374a36ac72d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
