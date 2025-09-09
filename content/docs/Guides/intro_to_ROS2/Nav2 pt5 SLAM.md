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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=31f633b2a14be68fe8afcf72cad7dd778ceab701ff1670fbf1d6267609c0e68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=6442ccf6361d2a10a8761c89a68c6a78a5fb02e4c852dbcb986d95d6afb163e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=090b2a73e0b6a319737d959ebb5b31a3c0393262e045e7f6107e0d18323478bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=20c454ef3ff9d1cd436b8e31471237245fc63269980a03bdc96e5f458aea2f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=009bd678ae80c8429d967801bd4a5547255bfaf530e07d60ed7ebebbc3a557b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=24e2780d29d5972a5f410746d6c767302d48785c9e71fff8a8a31f27aeec6d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=f1b99657e02f2a3ef7a4a3b9e020aa8ad24d8420471302472b9a87e297289074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=e16402d2fc7855288efaf913b7292434df603d9623aa4a06632b99e8233ed470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=1d51f40b6ced95d55b4119aff133ad4fa3cf4aca16b06888a4d564bc950bb6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=d4f516e4d88bb022d163a6614d70e1b28c2dc2f035ded45ee3d0528cf9069ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=5999e219d53463389c2a83ff45f35fc76410b41b2be2957a6b98646430a40b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=4db630085fd499ad906c7dcbcaa69c4e575707aea207412e44ca50ac1037090d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=c813765ae96f932cf4c006aadf849e06fdee7ecd502f8da8d17ae8e279248268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUT6W2TP%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGD62e37GJ9VdMGqpnbZvugx%2FT3Xeos4pXwDronMs0CjAiEA%2B%2FbufxZg5JrllToKAPRgANnCG37q%2Bd%2B6VsbRM%2BSgac4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnTMmCXaRqoYPbnLircA64Oqr%2F2wl2rzQ%2FD6gSpHncFDQ4xehgmG8eac%2B85Y2PdcmyzgCy42hwmrGlufCStWuIYLQHD9JqvmfAjxVWo0pKYxpC3392RVmlnD4LwrFCa%2F0a1N9oaBN8AjSRRhl7BTKKeCb%2B2EYj1jeOX8WG1sgkDeBVjCVPr1WPGrlhAkleqKfSd4o%2FXnnYDCfTZmmjS6GyCA3nHH%2BQbt6rur8WHn5jbdDOjFxohki8R9O0dgMFsw%2FLOUlzIjCz5DZyZugaaeZ1mfxutKmC9lvPsg6ziZSd7Xd9yMqGHg0PXipjGeQnLCQ%2F1f927nY2buuzvWYQvEz%2BQeZ6xUF5wNHppfexwqJr0hWwFSqmsLTJPTxA1u3smayBxMsjZ9j3ls2F4fO0mUdROpW%2BAi%2BpF%2FeZ7QERg8evc9oCU70JHyAktUmYGGHcLel7KWBwLSkZ3msacnfv39oc4kY%2BXEg6OdiUjH%2FRZ2r97N17zBnNsFEVVF1QPXqBRUNI9c78yWyzaba4M82vtpXkPem8x7%2FrMmmkkstzmdPzkUNaEaqGlPrckOtTqYRJZGetGI47ZBBxtmSaQGnpsOHK%2BsEqjR74KeQMOPEwcrWQyuhYyPfTDlPwhAvxY%2F7ow9EDdZrWzQF2d5GtIMIvz%2FcUGOqUBYeXsVnQiglSuPiKesDyzkr2BgXg8%2Fne0ySyarKNP9kiWR8UNjPOzuuveieIvlYSVCpNk7SAfZ0p2usyBeXCsRxHip8pjhp8CzjeoNSvhnr543qD5liH7fpntCWESN6lZOGzJ%2B4AYos0SPL2ji3YTF24m8tzOA1BoT1nASnPjaZ0tNLdkhUarr9X4GlgR8aa26fkxNATHjvhDZVq6F2SKyDARo1Xe&X-Amz-Signature=7c9dfe5677db0a6c6eb70ea7544d9cca2186c4295c004418739425040a60991e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
