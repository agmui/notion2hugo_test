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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KHGWNG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDKDJWMohBZxssmabP5soqtZ%2FtByxqLlvVtayqoHnbNogIgIqO9MLuRxUXDJM1a0WxBSTkVnRiCvuvvboxPbQ4H30Eq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLWLCMTRgnUvAGnGVCrcAw9spn942NX1vcs62XnRoFjkYcNlntMVPPEmM8RfXwdc1IEBxh%2FBTmZ5ngetAkf1t5VL7S%2F6bTYspeGS5qVzWfJa3fOtQHe1%2BIKX79x5TIoSOk1MEn8beEV0e6jaKSuYQMQdKtPXKbvRXwu%2B4JHIDpAZMgtBL4ipaSkGkd3Y%2F%2BSpC247TR%2FQI4XJ7A%2F3R56leIfsiCWhj0aeT3WQzbcsEhIr6RA3oaRciQDCh0LPmvYmrO9eWrHnfDihk6SKSkeZOYugzYcZ16P48st4z1pu7Ztnl2c6vBi6H2EvMM8IXedQqCrwcfAJq2gYWCtgt2h%2FeeCImAKQJam1R5Xb8u27K3qoE%2BYYzxabmF3NWQ%2BYvKQvsaMcrR8Cuoz6JwFofyvJ4FZr6hVQqtZ1nWPXqhr%2B5CIun2S%2F2JOCmFHoYEjSvUoNC0xrZAYUfdqDDPfMaLePvsHRXFd%2B%2B1J%2Bvf8t6l0e0oQVPINGY06RzMx6KheqDRZnOB7e9sW6D1u12rS0Ek%2Bt3yuq%2BKnWvpWpiEj8LMigmNDktlG6N99mlztyQjy5%2B2ecCMfStuHYgsNGPp5B4YJfYwyKRTf4CJMbCRMweY1lOkO5a2o0yuBQTNY1KZdMLxpoTT%2FhEDR73uqlv%2Bo1MPCsm88GOqUBmFOyn0ayfJZ3IV%2BsdmPE%2FCfsluynGrA7IdD%2Fy4MHv%2F1vWetJlhMq6nWBgOf%2FtPk%2BZys9rmNz6atyjI6EHCnAu8JlF3%2B0aqYtzljwQPcVy23KwU%2F6Gu6md91V9G3D3OTZiLR26eoMJm4kdf5XfsgWIxsFzh8i%2FyI4L%2Fyt6K3v05mmyJybz5zo%2BQuj4RN8kDsz2EdQ%2FuVTFk34lD%2FVikgxoAq7SRBZ&X-Amz-Signature=d464a7c8371115c998fec28592fb50e297942ff924518c9f91eda0a8f2f086a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=4174ebe1e4dc917e62ac4c619b850dfe45b246f386cc212d363f30756085ae49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=5dfdfaf6d31a97be091c6692680244004f1691ac0ff8bf95d7eeae05755ec09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=071c17bb2f10b8ace4f348e0823d4a4b70740a49ea9c1e0656c6cbdfad3f3469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=b1c77f408f72f58a8d0fad95ea720f3aa9debe09c934dfb5d180d1b8c378be5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=cbbf7edd7c98ea8fdaf7bb84e4eecc8ef308d12124fd771cd3ee7b04b09e7155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=6445393446bff24171e356cb8236ce120aaa1bdb5f5ea3932e7e0c0f0351dde5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=159cc779c95ea46e0f3807cf20e87e748244c825d08b07ffc4582b29f8e5c725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=06a86d4ec9ada33acdfbd80aae702e6b8f40726fd3092a861fcf3e5fe05e49e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=27d7c5695cd92f248bb4e8851389309590c2113a713ac712dd261ee9d953cf1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCS7IUW%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF6Q3Q5WEpHKb4HaJeaX2WpUlT5zry%2FtXfn8TaVg3i92AiBpISfWRPWnZa6c%2FFTS7jFgHnvbfYZ7DdnYzcIk94EPtir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMYMOQt9BJZKrMv8TVKtwDkNUoTLl8AA%2FfpDQI9%2FqtiIU%2FSVDvNYJgJozCW1dU%2FfzWphuuJHTf3uC2pqkASzBmYBRL03qZUkr%2FPDFr4XsWZIL5aFfsMv7ltc1BbdUAAtXwP%2FdxMkLyXTSarbt3wlbvcq%2F4vhFxywXguqUIc6FFd8Hj7TntVZ1m6nwmoKai44cHYUTW8kaL3zyPPkPSkwYsG%2FtNuJzuE3ogGSmyC833QxRv0SSo1HeC7qc7DQT2vCrZ9mYCA%2BAuPSh99YxOkIZAhjdmhnob6vJjKy%2BtYpL2m67%2FcWBSQRfgNzRCoblSkq34p0G%2F%2BrKMC8HrakjzrQHvpRs4q3AHk3AdpJcE147kLnzn9H8KLIadBur%2FHsjgu2ezXwR8rg09R1wRAr4%2F54nbVs8QpfBhABrJdSQaMo069yVZJZIZXGg6dT7OowxkB7nvjCA9EW%2BDgcjZIZKUBM3WOh7VN7Vo9EA4wqDZJRFbIMLpP%2FTx3lPGpE35Fo8Qi8W1BYDwwyngPzi%2BfNOz1hRKfZ5FrYXI4dT69PXyhc%2BmwT51awaRv5AUTFnwC1U%2B5FiKr6JPEXQo0cLmcHbCl4ODNL9ysr7DI3d9Oe0LFg4IX3vKpQhD3%2B%2FAH8OKT8rs1Vbm6H90mWWB3B5OKeYwn6ubzwY6pgETrsvUHvo2du3WYrtJp1xdfcia6d6goE0FSoPtt%2F1BnFo4BrmflEQ9dHFTdfML9PQv6zrXXOTK3QJUHqMYL63Y5HQHonqS%2FFhGoj83idOK0MY6ohgPH%2F%2FeJjazrYqLcXU0rOEoiovnKR1t3wchSHwsrxJpqx0cwDzZKaoDfxUWKLgdA%2Fh2OUtu0lbco8pdb4mcHo2WJXcmsDGfiS2UMuTRgRNSjXhS&X-Amz-Signature=b1c77f408f72f58a8d0fad95ea720f3aa9debe09c934dfb5d180d1b8c378be5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
