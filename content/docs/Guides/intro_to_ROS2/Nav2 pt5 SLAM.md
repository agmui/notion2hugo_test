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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=4b341c9f6bdd7725e88b45871914dfff0f9e2e8e38578c0cc9ec9b4a91dc9a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=074cdf88ad3e8140026b8d32aa56d73be4b335f4bf743d936ecc2be52471f9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=8ffb127a712ddb571c764388023c8c613489af83ade1667d85dd9d701504c403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=0cab8a1e37c062e076afa7106b9e6d03f05849905c0dc47372f96ff0fdf7b247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=715d8e430ccac951b0f2a62e55cdb19120179b87cbf2d56a8a2d5c3cb7c111bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=8ee4c0c27928c5ef3badf566390593f72c91f06d4c828f3aa2d085094083ae89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=73d35f98f5a16a54ccfad7a375a561e534cd5ae3b3d60345e2a7ec11b80bfbe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=380b3fc1a7b07957774e9a2d63f5f38e6a308f5393e10bbcfff18aba735c6a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=22ebce6b2c38ef0b7dec71eac099ea872dd8af5cb607a521868d3d945db86f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=08087a11d74c36d4c681193b7a06ac0e18863a93c3db6ab660de1f32a37cdf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=d7d91360b413d18d55f8198872850dc5f61733377b6e8429778a13690ce18a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=22ed5b7c7d3a25388b0bd49147069d79048321632362432d068b1e8c05f69c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=495d502279e1234cfaff75440c35915154a1263f109ee0a9f6eada59372ab124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULL5NBYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCyCwRlsJr0n5FNWmTfx%2BDsAMStrorTgXXpQ3FeJOSByAIhAPUi2J1rlXt5UNRshHca%2FP1G9mPCjg3KpE0AN4XX%2BqERKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaV3X069QnIVDMQxYq3APeG7P8z33YWaqdzPMHT82jvtUnS4QI7B2DkARxBpWJTFSDsW1TAymmi6bTDtchnhxB43WUqK5YGkbJbs4FvbhOxszJlzLZbxcicRsrRVYQI66xojomS%2FdnXc1BnCck4EeC6m3wQBwu7W8JxrZqfo74gUFpgJ2%2BJljuVsMxQruqPkQRC6oVDteMd%2BmE9Y8Su3M7BdPZbdPcSxXiMAR1xKjF1D5yNGDix12dALZpP%2B7xykmYtt0WmQS0rj45Tms0bPFW2umGY2YdEqzUHRHG3KJDr%2BuHbPTwSaRJwjQjvusgScD%2BkeZ%2B%2BYsSSmUSSml5utLa6MQM4pVVtHWbagMK4SPr9HaatvKyR33LKVNtS7cFJx%2FZ7ihpwrIhpYUzjVFAX9uRgaHxMX36zF%2Bx9VPwCdanciZDzgjqQmwqVDgun1YiuUYpVMuiX314xacUv18Aw%2BwFmwjDiw%2FgYwd7iNradfMjDgS9OFZrTn25%2FJRwkojdyDnVHlXvockq4QM%2B7coZ9kb30axI4KXm1SzM0Mcc2S6hd75aK21zwd50biTn3Xiu0ECM6B6UkhMofSvxxoMPoKRiBpaFopepLs9CXPNzaflAH0xz5%2Bldxk%2FvRZ%2B5O26%2BFfKwxAN%2BrtGMo8VpZjClkcPEBjqkAVrUxFBt2tnrdqKCaLVYzfana5dmCUHaBUr6i8qWaiBZygyD4ir2slARQ907zrbxpCLMmIjy%2FtmE5xfg2jvGCFZvxxdQwAwE7yOgZKtQxlZ9ON53tmDUm8uwiXkF9F5kvItyOJojTGphSKh6IqvggM61clNLSKQRkau4s0uCOWYQ3Bu6FypT6aINX707zydIncXnkzdEhhUWYaz%2BzCwh6nHVIt3s&X-Amz-Signature=0bed430e144d78d2e90c44e32a9c0b5ffeade2adb6c85536300e1456275e7455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
