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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=c08da8dda984432939110cf87ecff6041000a6b007b1ef658833fd4e6289219b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=10e30c9dfd0593d5a8ffeb7d6dfd4a0f14e0bd5df3050ae240284e09b050b96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=19766d99de0c0e3c9d506e497ba0a04143c79f425337ba43579e9679268cee4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=d01c15da4ddff6e2e731cfe55e2cbc2305c6b92bff8bef43b17d08ec801f09d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=1320819815a3018d1db5ef13977c15946f08ed56f3459cd353b966e71ed0cb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=7b17bdf1ce2a9cf109ff3ac761b42ca646a5db5c73d04b7a9ea355848943bd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=49e26c2425407d6f97f1a244fd5fb62a645e50c40971cc68d0596953555ca0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=d2a22c44c5b72210d666f739a80a07674ed839cb610a8889f5b906c8fe75a39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=826a38cf3bbfccd2216850d8fb7d4acf4723b64cd40cf9264bb506fdbe7f3c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=6a5557c8245a818051be0a646d40a93d3503ab4c23aae9c0bd451a12c717e6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=d55c3f2364aaa150e2e27c52ae8292dc8b05d61a6e73f5fbaa17dc06b192e377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=91b92b4546e729b273e455e77608e5990a935b14fd97d317514ba0ebca34bcdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=0e56852f8c01267f3d8686e206931f478edd019ee41358e5c5ec1ccc030ead6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVCDVH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD%2B4g6w0oUsVjQQlQ4VPdlzJcdQ0KBCfzRLcJwUt60ZfgIhAI7wonL0qxVFcbDjY%2ByoWBCOxMJp02rXvfpOlfflmhoUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQL9%2FWCD%2BiSJTJBsq3AO2eFkMs5bZBDNrQR9P5zH2xXjU96tNsVEDrnCsOqR3He5MztlgGEW3PhX6cUG5GojsPBnj%2FhSgfToEuQwA3aY%2Bv2fqvJC7i6inX31UQuNVHkIylfIzufMcAl7buKsFiPdvHT2pQGCGFAiNWPeLWCwCHm%2B9ClW5Ucg5iA3O0co8ez8Li9wqgWn1rdRxFtVYM6k9brvsZSki49nL3Stgx49N0GAXZTNHTLbWguwWGyIDuDGurIX2RQeDf4Thcb%2Fcz9Jtu9CQpaNljaI5BLfSwAcPn3XOzICeLsSC2JCkfQs3Kesh6ZGYhbl9d5nmjDxhLEAIf9qyMsu5eWJMgmRVK%2FJSQBhoNgZbiCZb1UticvOQ%2B6UVT%2FP0U%2B%2BSkP2mZCZ4fpP1pK8%2BRlpsYucDL0h8V4aYSz4Mup%2B6nPxPi3coTh%2BIfVqWnvGnr0Lv6WutRPNKmk8jP74QfNVsLMHMRxd828STX1oYExla4cmbF1htnDskEFHpc5R4QsHScUIjHHSCAOeiYbbjNlZ9BWPhvRgacw8KtpzZiPVXugrgeO2QLyMHweOsAPzUwSzZZD2RuD0jUMfpkmJcs%2F8OZz4T%2BZ4CQnZgkyoeEaGXbYaUkJKm%2B7WCXsIapjIAhk%2F6uWBL%2BjDUs8%2FEBjqkAS5kd3CCbNl5jpiEDGmiB4omTDMp8hSYHboK4N%2FmNRESP5ttv9qadrzBZ8pTCqpJXC3pyhTtdzsoIt%2F7sOtEy0dtoBbYzw39Yf1IvtjUqscUf0HptmgImuIGzOV%2FNetZS3Ls%2BcawVgIwOqZY7t%2FCbx7rN6ImOJB37NDJEhdAVu5ie%2Bmnxw9DOdqB0lTDxMmvFgYkYY9VVd9ZxIY6Fti%2F7YXKaMa6&X-Amz-Signature=85c37419d39d67ffc4516d9d8cd171880ba623b282a045a1724065e31a0cd77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
