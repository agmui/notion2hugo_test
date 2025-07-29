---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T01:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T01:30:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=9e7d8a37ed6e4b3650385304b32d91333b14b160a4cba1f9f20b382a804b54b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=00f3b4045e47b480ccca3a91876afb04de216cfcc34c10304f23e8275a905f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=a28052b4f3ad32c7d83e15e441dd8e68f07b55e1021cba56b69a10e0a970421b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=ade50e37963bc8b059f5c07859d72eddb8509850383546ad96618951d7f4b94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=650ce2b84203aeca044fa3a44b783b98072f23bfec7abdaff36c18c7481f4326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=8545b0acb670a9643472a7395d27dc6bbd88bb1495db33ca8e6c1cdeee0403b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=ba643899051d5cabff9c72b05a3a7e992ea82e6510f90695282cbaa49d240a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=6cf6aa2b3773fe392f968b694daf18cdd576adead9c94cb7456ea61f02e6b216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=c46005112f994102f8677c30588d140b1e241d06b7fe340c6e7934125cff99b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=636b8a47be47df7ca2dbae1be17bad4f8657528cebf721512ece8d504df6b0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=15225fb0ac6c4d2fa115c899e85f1d4bdc8f1c6c0773cbdea7d8bec785416c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=8dc6a1491817478854af2530f165de2c355a4485425893691d9bda3b8c7cdbf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJRXSTZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDbkkffq0yFF4ZK3MkjpnAs6G9sxZivsrSlf1riGAxbQAIgfgbDrwqyPbc%2Fl1N1jQRWfB7WtyimBTWTZ6Lwy4r2hUIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZK2FzVPwCw9cFWbircA%2FkxTG5u2tJBKuOwH7NYAkZWbMz8osmSwGbP5arEIFuTpjjN7oQPnmKimvGRtrTvk4br5ghtDiqedXUVSHyE9tEy7jocto9qYVT6IaT19PxmzfAnD%2F15hVNCwiRcRS5WsTXtViZWzhjnrCiD00n0x6QmHEYKJQuPc4JTqSQSCkYozbXOzEkx1QVqdMoC5BM1%2FgrqvInS%2F4kKehCoEzKzjpy3AKCbjpAB0ajaSXWZz9ZDekN9sl%2FVIwCx2s%2FI4wI9ILq5Lb1D3MU8vT5PppbzTUBCQsAJ1yKOayVkqa%2BhLvF%2FxH%2FLiy3AZZzJ6AA9b65gYpGIrs1TQiWcFshiQs8uLJH2XS2tLH1FsOk4GVRbGQNu1qZ0WEQUrikBznXxTfDAM1CzAffs7FwbeLHTgz5odHpttDrzVISxc1nLv5grRv%2FkuNNi0KYLRd28K%2BTlO1Q%2BvtfH4GF0QgKiQ%2Fif7a7ixlJh0VogjAHZQX8mXIMwb8Mmrrst5vaboM69RqQ1%2FGJN9AQiEaxl8CGoQlC37WsyM%2FjGmaZrbig29TKBMPzTENisMzkC1WEOz62A8yF6%2BbgvSJ5vB95TTBOagvmaeh8gn%2Bc1C3ONcXhhZUo1fYgFLamvnkJqa9cQaBiGCcRJMLGYo8QGOqUBM4SFZ0DSxEaFOQLfZBoswTHwhf4%2F0aOJc8eRDyYwquONGu9Y0sfwc0SpQ9tZ%2B6EJYwlHPDvSglzAeeXL6xf0c5Nr5j5CJIz6FLjsUqDm7JzXgwlgT8q8i5f3C00fp4fa9I75lNI7exaJ1NegRkMrZaUpk2wIQbqRwFRzi37jktUg0%2BpEviNLK1N8Vntha8RXlTXcGoO8%2FEd6U9Y79NxxuLuBP2HH&X-Amz-Signature=bc17138ea4d6024e1f255d46b0ad841ee28e3ee507a9ddd296b899a05e3e06ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
