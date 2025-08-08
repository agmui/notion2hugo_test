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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOY6HRRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICjLWdXPma76e6Nssi70ly81A9kSMd7O59Y2h7YRoJbBAiEAy%2Bm%2BQAWOoAMCbTJ7eD5b%2Bw2QBKU1gdSy5mPFPAVx59QqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvQUw%2Bp917VYX5TeCrcAwNrW2UEHwVPnJMozsT2Ol4lP0ydzcmv8JOlYrSfXGwvX%2BZ2sqA8iA8lDV%2FK3Elye9LODy%2Fn62R1Ks50LLBnOq0gTwKhtoS%2FJI%2FyWUss1fmuEUnSY1tX89QxWfhWVb%2F9fbiHthEt3cGH9lJNDc3RDr3lXZ1WWWQeqvM5tgQ5jrNu5UgBYBJUkrrXNLQcPr5UwlVGq3g2NxmEhf3bsCFtgb3Rr1rZfJopYe0hefvno%2BvcuRAlZI5kXXfAWKF70meeSc5Sj1Wj3DzovAwuT%2FT3LHtMOT72IiuIvBlQFYeOP3C6U1w0QGjKF2l0ZA%2FBfGMdAgu%2FBV%2FCat3RmOrPaoruYqEMJvl6QZ4ss6AFomd6deh30mIIi88cpSb%2B3PJAq3ANN4P9N2%2FAWsuu29S%2BN352e2Q8GOwi%2BdMzjpUfMnseeL8Tp%2BhOcXdyuEbCuNke3N4Jo31VhWewFcAVOUghfT7XFG4i4g6jGlv%2FDZvcSKM6%2FuWmBQn9m3ncpKt%2F%2B6YsPrzXyhY2RJtDqfPFoQIU4O6EMFNyDkIEznA9DIdiO%2FiEgD3w50X%2FL%2FmCd%2FvLD8hbTpwOrT7U%2BA9y0p4KHi%2F3%2BH0x4JMaZQT5Y11rfGJgvYGJuO6L0CVlZcDSX%2BurjPfWMPOC2MQGOqUB29kRczQQNIBP0WSzke7QFTKkBFJ%2FVbQriWWLpos%2F9yn315giPPeWe6jNrCD6A8elSGtKz9mQex7BYUaEijsgaRUE70ZS38WnYcSzwi8GWgUf%2FNPG1JJZkKLLnKm57aSRWYKEwUCtPf6Eg5UU%2FuubRcBd3zJ7Awtzuw7FMLvD%2F6%2BkO8vAyo%2B6Y%2FZbbJ70GPjlA3EdEcXuMJJVkTV8wHPK0GrKwkSM&X-Amz-Signature=20763f31224c4f22a7ae132ccc6eeec01cdbc592fa145975ff90dd92867a76db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=60867784d651e22ae4107582c5de930b5ef6e1db16f9fb89c8e31de9d2f2f555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=5e0d3faa7a38401901f10e8712c2af24c0e96284e053bf7085366927f9ff495b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=79e5f8ee16c0c62f6dc7932b8dc674fe832fccca8d910a502cd0e5d4c19c4cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=edf8ef589f2e72281cc752bcc9e4ee6aa8dabd9e62e94e1a6847ea32759c9ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=8102a39cb837e7acd31ea064f9d2402637fa156f17c86abbe429d6d6280242aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=3524a7e2126318f12d6f2fab9a0e4d3ee70f8e498828a61a97f628180de0c2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=25afd22dc970e154578ba808b8fbfa7ecf4b64cee426f2809425bdbf6c46688d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=9603921768f6932d4937e624c4dd2a46420d38b81fc18a4bcb7ff9426e0244d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=76b7db5b8f979839503758212ac50f9bb8aff6bddce07923c384111398ce4b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYNLSZ4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDA3o4wYLAOIgy7vzFVgN%2BP4QuFcyjA8ENR6uibgcTJEQIgF3NMzdq75jzbMdfHUzGuMgeoHcGXyDsOmj4NdGlKy8sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7KBgEO4ySxy2cL3ircA1eTewo5FEceMJCWUndyb2%2Fw2qse0i54vnNK6SBwmfcM92wVy%2BMPqBYm%2F2HF6mdj6rPSuKMP9t8z8Y1aSxRC3NEv62old%2FUbSdFfn1I326ILJ3RndeMy2paY%2BO9dSo9phktTFKaKicmHLQHAjpwoUxV8tq%2FX8MSYGmqZdTUrFzfv3z3jE2xSwHD630gPEmausgZDg6xoHjeliS02LmHsTtUJCukFMTp%2FT5qfim7ZCH4UB%2BMQUHMSdnsO4jAG4P7INQeCjqWXqgQn4zwnbGFA0csTN5%2FaxsmcHf%2BJ73xF77oLftGq%2F5t7jI21f86w%2FlUVeEV1c2ery%2FzKXr3uEgt%2F4jnbFjeWl7eXgT6AqgT%2BqgQoI5vxmg%2BwSZlrroZgR96KKQD6z%2FyV4ogGC9btG4QAEYMCCg0uUGPP%2FSvY9Q6DMW6ShasoM%2BOCFwdIEPc9%2FomYRqS0%2FXOOBI2Q3JLp72ZbUHWaHGG0cc4fnFC2Ur%2B%2BhXyshzsRcZSrq05%2BZk%2Bj2F1PsJflid2dD9GlonFX1EokPmSiO5VTPH6k5Aa3eD0iTZtIHlwiQSjHEk0C3AMXEugXu2DAVjRKOZgVwmZxsS3fnvmWZFWoJhokzKOQxqfB2%2BiIgBGViXyncB3iimdNMOCB2MQGOqUB1eMPTUOIequ5Spo9oFbJ4rrOTiKprPjVQWlUE7DiPQpc%2F%2Fov3MMOH2Rla8iWy5yWIoRXfi4bqtgJXmvevE2zOlRKlYN3PbKMXNctBWUepRb%2FoySU3vEjRXsvJt3zHIzOU4cnGNTTOBqWmGvyBVff%2Bsbx5fu1SAD8CgXPTbL%2Fc1AWr%2F79C6TaAcn5CjB34kV84HJrtxLYvKlBCwi2DUO0o5DNfhV9&X-Amz-Signature=edf8ef589f2e72281cc752bcc9e4ee6aa8dabd9e62e94e1a6847ea32759c9ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
