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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=0c5d013a46b0a7b58727ad0ce7fdf04ca230d3cca25441e71d9b9231385222d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=2cd2c7cdfdd30686718a4f8e9d8cbe5a65226cfc75aa925c36e0a40ede8068bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=9e9f2a6ad9bf38f86cd0f4a0dcb91e5d5fb8e6e60c59a9a49212a02cea83a5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=19a95eee41e49f4fe8b74d82ca7ab68e89f08abea61572dcd09da7efe3358ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=d2cb093697804d95b89275b899692f904c5a612d93d6a04d1d2cbdf9561d5b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=b2ae30e00ea6310af0ab67ede9604cd7eb41ad74d6008c8109bb5093d14d78ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=9a3ed3efa1ff576b75c878e67fdaa2eeca0c7d1cdd4307e4c8c7b23e5d0c3f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=70dd9dcb771cb01ac263425ff4284a69f0ba849780e2f6ce51357950a4ec2f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=1743c7e33db66124d7b5028ab5a24108c4918d0b67415b6641a6daa57e55ac41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=849997857497b32e5219dc5500e561e1a3ae9cde9c282d5a8eb62bbdf5890509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=be1ce6d696ff4e072f93c9bf5346f985b6ba70576f91aaa32d4e43c1cd7dc0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=28be1ae2eecd066c357c8911ec46480cef640cea9ed7e344e415173e5fb0d497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=38a51fa59ef2aace77482d1100061ab7740c3bab0f2263c5a1e3f3afc1c439a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ORKVQ67%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDzAfs8YqCryyH3UDdf6s3qZ6rnBgZslK0NxNVUGTXTAiBBx20jofStZ%2ForgkKF3hxrKXLBC8aLPFf4Y9N4Oqo8lSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhhvAhCQdB%2BmpaNcKtwD6WXV%2BPggkSSLWGpJPtZgXprURJqJZl1dPfINZd3%2B1NnTYFBdR4wc5Ez1qNk3lkOy4UWJv%2BV4PqdvGwZ4GVa0V1iBIDCr3uhO%2B5FTuQ2eqrEcvEGKvfL2gl5Uohuqtlx7en4Sofgtj%2FeT%2BrSzgfGp2IW%2BoxaGV9WkvwrKCUzKHSGmLeVZb1lJqW80jlFOBbChZJPdaKC4ysn%2BotMpweSvzhOxbBAfpYaOkiRigbM7O%2BS0NCb90fqM%2BwWw1veGlMkNksq7%2BOdNVfFTZj%2FSRO1N%2BKe4ui55xYDl3mtx351Q%2BWevblsAi%2BY5zYBY%2BzK44yYo4DHCxrfx%2FBOgxrFSfbQPggPFVe3ybIv6%2FP4enRxk3MXgh8RWQn6E7jDZk1lYPW6oLWQO2YVx1toX48mDLJt8utUy2Af%2FJPil68R7OJnBPqX9ID01poV91afb7T9pX8Djc3ahYBCbOawty4YRyMYbi7MWFV%2FPoI4g%2FgeE%2BQGFjr3KbpE707PhNCi2sJk4MU4MUa%2BBD9R4zyhGBmacvrJkcVy751b%2Bvq0iiUqcyOEdCf8F%2Be%2FULcuWifYY2q0rdxABDue8819bWeDiEYPYd6n1SPjod4owxlYltsRUmKkKSONVU9sw1wTuDvmRQlIw2Je1yAY6pgH%2BoFs%2FwQCbhKOKzkNuxzG26Bx1lnitgIu1%2F902UDryMmRlCxkJnRqG3WQ93FHi31%2BFht5dvFONihpLo58lI0dOo2QzCyP8pbSZgKohAlkCF6XeG1ZsTSYC3f%2B0qOIKVEFacb3dF7HJWxNXxJLCeWx%2FJOkJfFtcABkdpjEjYtZJT5pYpI8mwD%2BvcuBgR0Z90STEL2GKgJN3B0axnH7bHIUOK1fqfBjP&X-Amz-Signature=d61fca7a6ba5effcf1e6fd9948165d3a1d1fd9a9ee34e28f337a704ba1ed9012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
