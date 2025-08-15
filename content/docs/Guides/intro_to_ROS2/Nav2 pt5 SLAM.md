---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=491cbeeaf2ca21784b1b09c9ad0cf2ae9cda642555c0de3429244c9cba6b3eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=e6e6a1e5b342bee79f06b9ffffc6698c1b7d5d8915bf3c65a55afa11a2f70021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=03bb009ec1f11d73d02cc39ecaf02581ba9ad3e967af909c88e916c048d0d23e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=6407cc822142b7ebfb48b7601c772c6ba94cf8894c23a138af6458bcc5cc0495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=95734ed6cbbc236514250a8be6605415df3ecfce9514e346a414e93c991b0baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=0c60fb02b669c67b12d5c8a77ed2aad6799d26fd32ca0e819a5cd4570fc3a3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=8d580b469580b1a72d2f2e3d2900f72e23737a12dc85bc86525c6bbc9d06ba27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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
        
        lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=94adb9a0c4ab7832bb973b375d91d4eee7aaac81ebbb6d3c9101c7e2b208b61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=f86427ebbab892800f9dbc46750d90607d9020ad5fbb009da2cad7ced7de2c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=f3ff4a741a02e06373fb8c275f14af28145f8d521b6458bcb8a24ee2c9d9a852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=38f3b7d6fa23c6df2b9dcd6dd9f936da28aaf58e84bdcbf39c7e08e34b6fbfa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=d53e2e6dccb383752011d80634acce401841b198524ab05c3666fdfc5446faed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=b097a4d4380abd0bcc0fc1e965f33c9f0e7d039f5372d7f85d74bae8410ae9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVCYGGT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUJdfeMVQeghs8nlnAG5epVFjAWiUeBsWEonD1WgB%2B3gIhANameEuv2l2DsF8EfnSFBv5yIH%2BuM%2Bq9gN77fuSVHVesKv8DCFkQABoMNjM3NDIzMTgzODA1Igz8D5s0ZZCNWAjOkhIq3AOX2xt88ft%2FwiFjAifdX4CQU7WYRSHOsH%2F%2F1uKs6H5WgGeobdwR8pvTHfATRBt%2B7nrUJu69HB5Nn166llY4N3%2FIppZYLNy3iBnlzhxu5XnFUbpl9MAtG2adFoJfummiWmzrNUQ4iMCD%2BlMMfIv6ZElIc6rsnze7HewBofVM08qPvytPMfNMhqVQktTHhJIodq5K1dOCtjsw0VAb3uXFTX8GQEZ5cU9XHUbm4bahNC19hFShb77WtiobwDu1%2BX2L5xxiZQ%2Bwtxu8sjKS8EyVuZpEoh1zhXZygSxMlYu1O30NdMJNVYF7lX7VAOkBg1kIcPxFqA7wtn6WJvtRKdmpSyXomqlH2DetN9MDfkS0vpBjCIx2buMYUxk%2F6NwQB5N5SlvLEca1VTg6m17bhm4ecRkbIpr5sIf5HvQyeskZRZeh1xfmAkP6S4LWgssDr1rivYtDP0Ho72xW4YsWykr5tUayHKF9p%2Bg0iu60swQbDCbAbklOvq0lFbACnlWSVVhGVPd6gkhFBmjQgzuODCaSwwUBALnEdO8lSnCvsyxh67WpPU2IywLYQqYBYsebB3NtQnTza4LKxzqANhZasTcyWi737If29IbVc%2B4cB%2BROLQHbcOD%2FIaZNM0w4RvjGjDDryvvEBjqkATRlM%2Bhzk7w7jPyKZ9eP9%2BjiVr%2BE7ZNRlE6NYRJq1Qa8dbp5v16ey9MZT9V1sWECD%2FCoFMi2dAbux87Ze0SDklYLnE%2BO5lENpH%2FOA1GCiTnzN1TO0TiOEsOnxNnhdTOaP3Pt9uUEJ9pVaYvbhTHVz2qxE0KSu86gKgE2GTE3YVfaQV9lGAWV1qluaB3O4z4eEAkERhjhnxBW437bjyoZ3vY8Bvkk&X-Amz-Signature=066b2af835412785f3a45b12428f67dd814ac57348bd168d5b7e6a321fff3fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
