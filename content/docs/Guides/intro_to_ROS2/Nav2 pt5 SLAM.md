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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=04d99663a41736590836d4efe57be89b21ff0f3b4f22ba2184f633bfcf772b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=d72b909085af84237052d91842feee7723e2f5fee36cd610a610e9718d0db686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=0fcc421e7c537a164aea56b76e4c67d53622787118ae669da9f61b5023cc2bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=182dd78387d714f7e1b0d025882f4f7f63c7130296ba1be9b62b217a05a92187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=9863954c587bda446ea9bf802322837b7ccd3960fb56af01b34a93921247cc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=7adb80022315eb10a49b5733a1cb777c68bd5c208c5c6b6593e5b48d37efb16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=e4556397a4ed8ae8e0278b2db5a2938d1b94a85da90beb4e6ec0eac824edc081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=d19343dbce240b394b7068b57583a88e844eb566320997a37779df65557f8901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=74479084bff7b5229d9bcbb40bd344aaad14e7a847fb069957e5923b3721a0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=540c8aead8a8fddfe899a24a71015f06fe37ad59c6ccb87ab962e79a512c5eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=ba22311db567cecd6987d1b7c7e4bb863e44f8daf082e510799c1fd2c7a10a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=72ef3484357d58149e661273fbaa7ed803b8bd93bc39e564d7f8801182b70c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=b5e11884378037aa2366eadcc2aac8f566d0a494ec5fade9c2c2d094c0d0e4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4AC2DM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqn2WeSi9hy6LGe5DN3kNE4e1k7Sm80Sa09qkn7ZSpBAiBTc6WO1L0Iexw1tjMONnzxu52hubHPphufgMNVscRzhSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1k%2FXNFbViDwzejl5KtwDcv4jjdcoYGk8nJda36PURbuvn1ydpe2NvpTn49MvWeNwCCql%2Fi2pTMzBSHfa7XF8uQotglVU%2F7CpToP1jGyJ57hY6xxo9jkRZYtE1UfugON2FWKGW%2B2lrMCWI7HauF7v6LlG8DFGkFUFqhdBwnQTlY%2BnLsGnOTYrjDEtahOJ9ybOH9NRH7gY94kp1S8uIbFjOIauTqwljV7oFau6khkTq7nXCPvu1ke5qiNU7P0SbNqud%2FdGf432eUpdOi9LCuWKo0TgmMnbN26ixGGWplx6OS9glSqphhSQ3bk%2Bhs%2BBoDXlr%2B65nFMQY6MjC2gRw1m6HWjOb19vbywotGzcNKN7OzXV8O2lj7PDcvDMlwAh7UZyYhI5N00OPugm7ZFenYWLduCAozWxVBG5npL4hvwPdJW8rpMTCK77FMqT56HjetQ3Yjp0aLp5jo98ko3K3Mg59e8mjZKgYQuIPprDml%2Ftoap1JrnOnZjl6I8cJJisP3e8IcGnqyXBur1lbfb%2BfO1ZLG4QBg0iVOHBMEb%2FRNQLqIOK1F%2Bl18ivR7B9iP9q%2FxxbSnK9sBK7wyhk2T8PV3qbTRs%2BgUkpdu84FP8jVwSAn1GqRcadmfVS%2Bhpu1rDKRx36XMH8gzODyTBbse0w46L6xAY6pgEOR0QszRmoizzSFEAlYBg97oRAP2%2Buu5lj5s5o%2B2G%2Becw3ungyHiV1VT7UliWaJL6leO1HcKfGq6Z%2FJEX8prTPtAdJ253jR59NCkM2WXNA2%2BeBE1WaRNuXh8rqx6frpszaAusPpsA%2B5cfhk5ULC3D1ISgbdZwI%2BJ96crzEs%2FqoJ%2F2RdzdKUoFdwbQg9xu02AHkhtlunoKYUqQKVn4NEMcjjLjC3kjW&X-Amz-Signature=85d6739ab5c88aae0b6ad96feaa0e38a1cb6e169912f94c8b1434544078bb1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
