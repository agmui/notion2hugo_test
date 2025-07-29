---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T16:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T16:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=2205c09e4a1471e3621a6005a4b55531f6d62cc8304cb03632ce6fdd766ce917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=fc4c543ffdf5b6bb86569fba65a5ce9c5deab7ca127a05fcb75f68e6c5e8382b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=8aa3c44a7d34681edeb0d60404c127fead69fb36df0130a31e4f79cf585e1bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=237de643bb9d6ff5e723186653bdf73bdca17ba4a44ce367efb95e7a414ed65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=6eb18cba4b5490d7d297ff8d67b5123bddee8124177e88350e33c7f0b2276f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=7bc6056f680278585c71628d526138fed07edf03ec7c261b0429ad5a52af8c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=9f7fbd01663497bee03d6d93a167ab63e0fd97ac98e7f57f49677273a182e4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=23fdc35283cd2c43eca10f63e2de26bababaa605ce3edd15d25aece301c0b335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=f259459658e123ed729d54876b1a22defa65fcef529e2647848a0594ef78e999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=cbd03ee8a7a18e75c93bc6171cda73a1aff09fef39118d343a231e0b75fd934c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=84ff8c696844741111509f667392e200450e1534edbd810fbd25d89a4ffac61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=656a02af152989f2aa2536b4d9bad0c044d55d06c096aefc2b1e4bc546dd0ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=1257a1676233dd31ac3f4ac8698335b107df0b20aa50a8a05242424fb91897ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWMHTBQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcwPfqPf8TTofP6AGaCiNbxMHAQsGZrRQ%2BWiRHl2xmAiBbIZh4EZFHmqQopPq8iwAnHII4Ggm1vNuF33MTmU3%2FuyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGj75Pgc6KBZS7Py3KtwDa%2FNzoyXbcKmdWnLied3AUUPgA6TbpkxMKOBA6Zp%2BwneHnvjYWe7Okv7QxLvh593ZDckCNfnwbRFMQ6pVujv2AogM73GsI012%2BUk7J9hEBHrrEEu4qi8ta6QH20ragDdDawvxd10FT4ZK0lTMzGYTAd2HZYnKMaqe9nj9xLC2UJUd7QrWKtD4pINvrrfvggW8Bah2kn22VUXYDUVQX4IJ5i6cFY91TA2gINrg7OrxZV7kPiQjnLMz1fY1qJL9HUYvU%2BsphVGa%2F0mugFvFh4fY2o3wN7QW09s6%2BzqcsMtw3tg99rPTmFg066wW%2FtSKlXmNc0TjMT64lh4P5lfgSZW%2Bb0JBEWxatQ9yUEGS%2B5KP8BkXMPLaDzN8NYAuO9mb3MhMLI0zfCCpZRiUrZWW3piFADKjubWoT35KFlwSLWXRpFNhGmbAa8OyjzDK94NaDkf3YqnBk0wXRIvtlelmoy1D5k9wc88zzwGSTpUZqD6MAh0irgA1ODPOGrtVyIwlTAk%2Fp9MqwcKY9yqITZTU5BSAzd93rY7%2BV9eXeJO4AQQMOhytdWgvuumhzai8mAMTyEqBnK4b5NOP3c6OzaOVncdhdn%2BlVRw9ZwoZGe70LTh2wiACDRfBaBmMJJtfhRcww4qlxAY6pgH5eSue8nxk2501l2MUIAjOB%2F1wZ1%2BW5%2Fwql1UyTzRqHxlh2yNaR91zFZYMySXD5fc9T5jqCCX2SVC75k3jkkDywnGGCSjFUGZ%2Fh2UvQQA6KzakAfd1oRe9LjIRjDnkFAC%2B3XXNcBL8haTmR1zvd4pH47wUnP81vGiR%2BZihvFUm%2BaWJM9UJx8s0qbdqPoQiPCIfwzeHH33ufo6alY6u%2Ftlg99%2BoBcDM&X-Amz-Signature=266eeb0f709df196e2c4e6a369859f3ec9c80aba9ac9c2d144b774d3fea31c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
