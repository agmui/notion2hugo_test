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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=92e796e1161215e4eaf31f6a214ebc2812debce1742e213c5ec19a96caa5f61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=a261fdca1325b0a3c7afa2d57023852bbe974c4415f7c3ad2c08c62ad0ce28ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=6e0609b099c72af0c8c4c1a0edb04aa3b7f6db209e61655142f8809bd1df5a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=b3dd08dfddf813f948bfb746ae85b104ff0b33fe700cc3da51110d8b06e02639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=36782802d1c164c4a725d83efa9e27a010a7a045d843f06c07809b0939a620d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=2cdc9907369c908c44812ec9f2a0d2dea003f300cf3ac1947f647ca70cb1a778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=90ca7b278c271236f26ecb662f4e953cc79a38405c67893c1865f211f0eeef21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=f1f7621b10b8927b5b1e29589dd417386b4cc736cbec9dce66c2b6fb40b6327f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=f232d1f6b9a8b84c74b7e2b4ad09c835aaee45c680afeb3d2fbee3c7aad97de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=5ea552ba677a39933ce578620a7029ea7b4d09ff69be70f1bbe34a2993a5a2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=cb5832a1c26903c3e952e86e49f85e40162e9750baa3e9bedaee16e8ec70f708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=ddf8b8863068bc6ee08745a3226df3071ad9fbbeaec616a322c01019b3c27803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=be4adef05b56c15c28fc82a21241e06ab12e982446c0a6178a50ffbb243dc710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7E2SS5%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD4rU6cdeYoCR%2Bu1Kd1po6Px003KGk7%2BMYYEt9yxnyrnQIgWKQaC7XD7j0%2FrmYraF0%2FH3j5W4I9D1aSIczwvCUEdhoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaW4qOcpN%2Fk01rqfSrcAzGfILNBlKfOFgXsqYqdapwNcCRDONhnN0k%2BFqyIIqAKsHoYOkMbth5%2B%2BCq1HqhSx0xfeYE%2F7lk8vkxPQelAuAn27EOqQ6kABMTf4aFm12FmTArV%2FRLrJeMzqlMMs7gkgib7VGI4WuAC4GanLF%2BGqpsXqpbigaTxWO5lVatnvi%2F863RN0MZDv%2FAQrRKvuABpWEAW92cgnVvHTLUwKkFWKxfPa4n1HEDT%2FsjgMax4cSsAYyZc3LvTYJSV6oR6Tkzd%2FpcXKj%2FPazc%2F5p7INl9B63R0xgsKqJZXiImMaI3Z9aZ%2F2Qrx7eOEBIGI1v3pgF0OehOUEWe9vG9cj3YYMyVaD5Tt6rP2bANCTgdOsmZFBvk8lRDene%2FiZpt%2BPOgjA10WrIEWLTJgnjurmtOMrrYaE8J0LCUmJK%2BUv4svqgwAIkp5T%2B%2Fd6yfNEz065vtM9WQYVlGFxchlCYWlzyfftcgN1QFSHaXhbRckvuueRwBycVsHKlqeZxUldDDYM3%2FI79PWVNQfi0i1FYKU8PvL3n1kg3OYAoGHGMiWfIK97DREiglwGQwBFB8UW6mruDdiGMH4cEsJeUYQvV0wfxFqKh47uTSsDS0vfX10lJOS1T9WZ69EQ8G8YBKZclyP20YGMMPorc0GOqUBhIPlTjfObMqNHpegt5fv0yepcrQVgwzJe4Zve702bKJryjtGZzqxuTWWnv1cIZ6nNeQ4gjMS%2F6uJqUP3GI%2BaPC8prV99FnPPmZByzh2dEQXQU3w7jo9MBB44Fz0rVv7DFq3yP8Iqj153uENI4FE45%2F5FbiG97oS6hsG3Qnu3Kvr%2B6G%2FHCUG9coUaWIxZjAn33UeZpXXL7LfIcGXljecjppapPn0t&X-Amz-Signature=a66593816cc62c575dbd44da383c102e4787c9a22d81f9a8e89faa2fbb466e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
