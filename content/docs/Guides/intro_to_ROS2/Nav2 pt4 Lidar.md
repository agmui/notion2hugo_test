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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTB4P5AA%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgpF6VlY9ZYi6Heytv1v8VTsqCSFJUoTl1ZKLWWKAJawIgDArzLLBiFox%2FCCXEsuAK4q9eLPE6nwBxFnl2FDtKg7Aq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHz07ZlZBM3eswTWIircA0hSHEHanhLCB98c2m96Ma2udqNybr8L8w2N%2FBSATvzuewDjeZuZeanyZ2NYFFQ2nrrpdDs4UoPltxg8y3FTj7Neiq2GRZP6MP7bqK6iIjslzV0vF94Ati12zfeK3%2FYQT6awPpyDxB2SStbpBQuzQJV647GAiILSzUBcvpSsp92VHlWLz3HS9AS4ZYztg%2F0taaCO95EepxkPO3ypIBr0NbtDvklloffZNExrsSoTslQPH5XIQUP5%2FHHm2CYwtTiA9HbYiSC92Y32m1ZsGpebj7kaL9%2FqHzs8qFLFdMpucdj%2BJTHNSkp7fda8irS0%2BPDUgCEkyENdWERLLa%2Fpjwd8yf9fErkoyu4%2BSS2BGjYSwjWI82CAxuvueUiI9ZOmALnw8iEI5k3YZpw7%2F6muC2iKMis6aU1YbX7ZmJ6cl9UYeABxpbgbaDRqaXcyjE%2BuJrRTK%2B4gpt%2BuNptSrkrSDcMI7h6PImZWIRQRGe65%2FxKZyQTwC%2Bqm3WkSBz7%2Br5%2B1UpPx0LL1eZfMECKSIkEwvjVYbRq4FWPP%2BNW2BddTK%2F147OX1eikdhHXNfs9d5g8xfKxT%2Fsu2il%2FB7VYM%2FLtft9oax8yqi8%2B4C5UAfO0Fp3JGjetCHLPwklqbK4ARkTXUMPDFu84GOqUBxtbjEnTXvInioKsPTcqA3H28lsaXmOrF%2BzWadHVjAptbsgwWa83HdvazMJyPJNNawxUi6%2BSe0x%2BB2wpYmI0%2Fgfm7UhRURrhTH7E6anGZITCPcRAOyF8VbKTiygLLJvLFQxtxdH30dmQf%2BOIofG5SIgaWbyN4scENLpSCAxtP7C8rahEIYZgG5iuMLEuhOAYu8PHCOMfMUMoJ1qjtCMeOjdeD9MEI&X-Amz-Signature=ae5db5d6ff1349257b05729e03c308ab81178e44ae48244a9e08a155fef033cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=14d4d9c4b4718702b786ec19c0d84be4511608a70c0dac65d709254ec5b550a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=36bddb3d8efd554c51b9c08a7b0d480fc669fd76afe3fb71eece0680e6b603b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=b5cd28d104ffcff14ff0e721cc7482550552c83a3992f037f2737f8793b0e16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=f37d83e2c1c1ff454ea760c942d43074a37ad00cfa69af7e673a0ed1bf6e8c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=63fbc566b381bf240963357135b097d4abc03a37eae56eb10eb87aaa5689d082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=3a57f76302901098c045114e9cf76c511a45cd9d64752549a532a2e8e4c1046f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=c8548437528e15fa0fbbbb6da05a8d27dee1adfd817a43b6e1232e3c2c2ccfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=78f745001d915d2e0baf18e0398958a6e7047bc270efefcf77c279283c5ce6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=9b6a3046078b72bf33ae6d9c60c6e6c6442ea38358db87f388e1aec0d75efa07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S37UGJ%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BbDGrhkiyeCC6CZItU6IMGRP0VrMZmH%2FH2dmpOh1igIgEBZcCFHtjGZaF04rS1qL3%2BaqMaYz8gzLll4S7qHOqAEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGJpZstggSE%2FxoBn1CrcA%2F3TQgbMHuUH3S1F5O1GYbTTCA9oQxU6WF%2FJdCTxHetFk1DOhb3096BaQwIQGFW9fAbon8Av3nMnEaxTiMWTaX70WRt5OFUlGjJ8lMmVXk1ZcGpQos3WI2In8nutdgwSqjEyHS70KN2CqBx14ZdhETEqAJE9z2ZWMTbZZDCFI7DNNY2YKKZUGYIw2%2FLUFivVfqhktMAJEKWw2Punw%2FJYu4lJJM7bmZiFIRRogkOB0is8YixHDDK4Qoq9cF7aq%2Fkyc9kvRsHyPMC1qoAmjP3ndFd4YLC4chRnNHA%2BYUHftRv%2Bg%2F%2F%2FGACed%2FVZsbNvoCsky1XSTg7RYb%2Fwo9dWdokugc5R9%2BSfDFhJoBLRBmMAJQq%2BufbDrH%2FYc5f6Gqea%2FJ%2Futj5FOVhUT9oUE9n6v12%2FsydhwDlxaTqgeO1Tpyt2VtuyJsTm0OgaFVnfhfBa6u9wxz8OvIqYDIj84bXza0y8Pz4M0RpyxLoFeD9OXrxiRtl%2BbKYuBJj%2BIaxfNoi%2BJy8PLo7jIItK8OlVCRROikygC7t3WpPPwu5oYQGaE0pua95lvB0%2Bdyt1rlXjHKRsjdZNDDoC037E2nav6L0EtvxNCoG0%2BAzUzNrcj8cXxHnpVVIjyTIyiFjSXP63NwiWMLfFu84GOqUBdhibmBZ9%2BVEiFiMDuFpOOGdJ9c4440Sl4Eu39JL58dcyC0vHYfYRIVHNPlXHowmTl2rJ71dXAPUYtRB3ALYHmEXfDMM9ZWoN9mVdLwQY2SPtt3wvSfrpUtf5tSdMOOIG7k6Zz7jnlE4RVDIUXVYsHfpPLiItCjDKjMF0lwSXaBFxMwCfJWbo1Ngh6a2CeqN8bWFZ9hD34NJ7AT8ksbdmGAYTaKo3&X-Amz-Signature=85ac1c856fd2017f5b2f71b412de4b1903b6efd1067ab3f4fb2e9d3a52d56101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
