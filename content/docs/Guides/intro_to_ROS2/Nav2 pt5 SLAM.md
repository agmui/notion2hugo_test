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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=fad566fd722996cee4817881585d2c14046b8bcb9d6e95cb0d2849d8940630b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=4b886411047e261c79d34d852c8971026933c2fea580c923b61a91c5166f9e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=170b0d3b515ec4c2e80e3b32ad7ac9184dcfc844a66e5dfb060f376109a9ca70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=6e1a7b1130ca2afce1b23a1bca3ee34f77edda18d989c88b3ac981c4f4f637eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=225a2ae908824663e6a374c357765b1dc0438465e96013086ac323053e33ba08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=876b955d022ab7363273848e435d3d23ae2280745e23b949931b300775f30f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=053738b0d4a843e144ab785603d4ab5f10ebf08a621e52344b349e2b4a63afb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=72c7139c59729e3a2a77656788b908971bb4941089ab7ac0c5c568e6c1a0df54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=83e9d0ebddb0affb896bd8968459da80fab34832c8800def962d236a97145383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=d1a205b6e4e252ff5279d02bbcea3fecbe1ec3345b4ba5014f95f706b76c5563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=e3e0464814ea719da2dbdc68c04ac1196b8538f80c3c2e6a6dcf56902e8aa2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=b3837475f7c378f4a01d19e98f8f3e1ec9e923df6e4a474402442f6b8e264760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=0030bd743e192ec0a0075b6041a4532bb3481c2e3584845f215a68dc7f812649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMAJ7NT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg9FC8twqE4w1zP%2BY81MVm76pMX5ztTS%2BLT5LE4zKbPAiBiKWxIXiDtXE30vOWl45XEmaVbkeMFEXd8qo8VfKa5cSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMCN0ptBZUOI2EQyKTKtwD2cHRPaYqlbqujft1QRJ8fr7A32URoSq%2BGjIBL%2FVaOdGTGNEXNtQHhvOKxS%2B4AxQw25jWmS4z8KE0E1hpLU5OnA%2BrY8Jlr8iZhL7dkFg3S%2FfFYu5Vk7YRMO40yjlrFo5MbEdtLtYlJybtcVIRhyA5p9S6%2FD0K9Uj%2Bx1PSqmrUo76tQv%2Fk8K0vmXJtwTxtKZgizKBjLyvOcbuO9G2v2rBUUWs6rQ6aX1H3hW44aOmeUHYXzJTWrqOtvRDbFEd8sY7QkHqKQT%2F2EcUvvk1M7DvL%2FE%2F%2Bk3ydQZ%2BtPlpeTHNW9gG9k8%2F7CcRq4vtfZ53Yf67wUq%2FOlVMfxPmrZvHAM5qd5Qnh0TpHAfqUzvx6vTQZNTdFVnXO%2Bp5nQyskCEj7mzLbKXPnlrkVewdWBrFb4K7VByFvSH6ebzHQ2MVIJMsIkI0ZonWqI6PRiH4O7jad2cG%2FQtSI3RzvRxR6j75U07BymTzuV6O9TKcnNR5W%2BiX61RDI3R%2FlN87ddQETrV2WWUSJlL1fVplXhFEBl21VWxFM785QC%2BGZtH9helMULLEqvC14sYvyGTsihHlJko7LC6RFe%2Fm0XPhF3liShmg1%2FgYt%2FG8%2FDlwFfkYbde%2F6WEKfNqKLwBE2l%2BjWSpA3RIUwiavwxAY6pgGjSYddCSeXFP8l%2FJaJ3ZD7DjY9P96i4ovEli1UhQ%2FRir%2FjDsp4kOYqSsDl8lwiMZHLypbfGGUxfj4HmNrNpChCslUd53ATMQG4bVrWDG6Bim3be%2FFcWRv4ArAUOt9h01g08cGdHQTgGg2y2pMsMOP5ldDnKIHHmiSoOjHGOkv1AfShGmqvdmcoM9gg2zaLPC4zYE4tAh8D1kTrvmhbEMHhM%2BEvSuDv&X-Amz-Signature=333603fa973924690520c7aceca117863e6ece7e1d6075da152e30be0dc2baa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
