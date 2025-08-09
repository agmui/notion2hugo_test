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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=67c1a173712e6115764236fb27f49489c65e0f4abded08e4fef153e25fabc820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=aa0a11b3da03ba08ef1eca6e0eb499b42d45473c4c07fdbac321b0fd60458d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=02b14912c62ebeda44c983360bd1a64cd9675b0e778a61ca5af0ea21546c3283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=37b778f28fd80d8454d33f6e86dc78b798ed3ce71373daa98a0732f5d9e43ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=9fbd4f7c202cb2492101c64266be9a753b67f17fd18e1cce05ff79b025eea03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=46ec31ac9b546b088360639bde9dbd9d6d09f12da43f6aecc0a63986b50a8b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=01c17e2e6f3c602ba3f7f35650e26b26f3f241efb5455f8c7178be6b6e292516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=da3eb38a25103e0623054c49a24585033831a2d82bf0853f3fa72cddef6f84e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=9dbbc71b5f04fecf6e672e27c4e69edfe0799e21ff73ad70d70d9af6a44d1519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=01e5c632e834d8e4e4cc987f9737c0fd751bd1135e0a59ba6537fbe87d2eaa69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=ab1b44f4916428c93f811e9b97d88e22090acffcd495906279282e6fa3199802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=13b28a6a16935591a1c5f15514b0c50f9c4004c1ec1720ef326fed9db72e7c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=00f1a3be841b87dacf89435bcfdcbba490db6afbe836a36d9ec8667fa309814d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAEIJUA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdM3lg619ptb7eu2qFrUk9x%2F72qgoGPWelNRMjfnztTQIhAIM0LLMTt2mGJ6M475BUxeU64QTdgL9bnY8i7mkc8vnPKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35Omk1Be2KIpSNVYq3APOJsH4EvId5r4wO%2FS4WFhEo11Wj0tdJfUmJfVrERJNfuFeKvceo00Ze3f%2FCBAoAf1K1oda4BLbvpwp%2FDn5BOAp8P8S8R0gFq%2BAaC0MBr2WiI3an9625b58IeIzN2%2F3kf1SJBTwmdsbB8Tc%2BC2NVibT9efH96uuUzprchYYGigNOre5qsqIDLUwzD%2B1UApgUUZYyTz%2B3IaCcMb%2FA4RPy3zctrjC%2BPFeqwmYIBAs0rgEFkc8Mq0rQuyU0IohVpqAVVgLI93ttZLVwfWsQaRCdzwkVsUxlBhJRAprHJJt9gqtIWnIJOHvjOwzqCmOv27HH0X%2BoQuXMcj6u%2B6K4MM2pcfz2D9v%2BYzrXgFyqToWNPp7mX8py%2FhUYkDksgM81zXBRT2kERXOD5fl12XNUzF4GWo6D9Qtx2m9qqObqBcdVR6W9Mjrh71dRVI41NRj5mrUHQQqe4bP7tcMsvDMFlXfVC6zy5HFnyb6efE4IL%2FhO9Qjh%2FHZ4w%2BFehdY4TkjNoqkScup%2BVe9EpFi1UjHTSGDm%2FM3LIz0Udc3KicfERnqTtiVWngpGfEoyFBb1RVodNSbMsPdmUzEkBASnNY%2BgPO9be64VPGJDCUmMZwi4w3doHMH8uoNGFMQefK%2BY6XjgjDM6NzEBjqkAVAk7NQEH1u3eeCjwVBy9dEUeq9Eu3yWdwq0CZ4zAVASCG0JA7OCnIlnOfmgJxAZkWsDgU1VstcVqpjBRaYEQmoUtrLZLyyIQUHYJNl0vLaFPY2wZSmvtMcLkYQQu2t63%2BT5nlyAFLwWrmcy3Cbu3dNPeGnOn8Fr2c2wK5mig018jnGzDlm0z0XWy36vbC%2BgyfUGJzeKQxDktoQEcSYFA2btqUKb&X-Amz-Signature=a1b895c21dd1c8c07ed7ffb2487567df2a172c10098daa5a44e6ca1d63c1ff64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
