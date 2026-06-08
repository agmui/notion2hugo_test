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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=8a4c6674fa26838bad33fc383b4be4b974643b72d7d2ac102bd462fc999679ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=95abc17c9dbcd00a4036c3fd8cfd95ee5401381f743ce2c70e6d0c73dc182c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=ab7f4871ac3129316a7a20ddd56d9d9940e3fc90f617e4a7026c867201f8ff1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=212c1f2b0ef892ee4917f3661ed1375b1f04c72a5ccb3069ac59fe586f1482e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=df774709f6e55c26a1e425cd30a97c8de04f5fe96c7db5040e31e6bece345baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=c65f1eff62df8cea155a8ef1f34ce79452b8dcaa3388417ea466198421f80054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=ce2216b22c1012d515dc5798c7cd46b719c81eeb723a2f5d865c0b003850482c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=9205e385fc33ca4c02ad06aa750bc2f21d58fbffab4afb742ca3ff95f13cac59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=da64b3d38763edce0afaf4c0ec969f1b02ee95f7e910f483d92b973ccbc7440e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=ae8be39051cf9dfbe2dcbb3b53a913fba527f9369c5fea0dc86a3058c7e9cc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=f9737f07feb7240528b8f191e3524efa38636f942c16fa523ea2d33fd3bc49d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=716e030e34f147cacb8d9968e68a7a492fbe3204cee33a5ee07509926a9fd124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=8396e2eda9802ef84c7e6e1c61514a54c9bf93a1ad63f1bc62d814c7a1651120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVI2XB5R%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEooOO3s492%2FGZdQWsQfLSI71HTk3NtIDOTMxmq3zUe1AiEA8Lt92xQPd4M5VXk5MUrFrVq3YRcH%2BHJJVLOBNwFoYt4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLkITbSYKsRZ0O2LCrcAwVTLx%2B4934gap%2BlP4ruMT8XodhVd6YC%2BGnqdOtl4wgsfucGIiiIsVw14STQLoVrumFTGRUR4RANWpJ5jh%2Bm8zDxr5PBPU1bX%2Br02N8DTgv9I47ovIQYjtSK3kr0WoX1UWICdf1hJ2oiI%2F%2Bm8gxzTFcK0NHOn1Ii8l6LpTiFAU518aFsXGtUoK8r1R30mVegLVgnvAoVlBVAX71%2F7ngO%2B6E5zkfAFm6bgprWBKhldAsaFOUHFZjZIgSQtiHEKg9dniADcGxiSSWu6BQXYLkIk7IqyNE1cjtJOUp7629ot4WdIFMHXjnNHvngCjFCUDfwuCS6E4oDNqxzC%2F22ZeXB6ji06UAVf7%2BIRG5g4aYNWkTYM8hIBEvtmq5Gu6y%2FaJhcAf130P0XGm1TXwRQGxcgEqY0VCoAaS8Koo%2Fl8JX%2FxG3lNhyIB2ADepCRY%2Bli6KSAVblHgEqsxi0FCY7NZlTmEDuwkV%2Bl8L9UpVa6C57O9wuHhWypJBlioLPvpBwMcXDUATbmJbu2Th5EKv34fbXzjuhOjYGkzLzVsQhuHy3nKaQf%2Fyp4Iixba%2BkqjnZgqAbPlbIITXmOwaZprwBMGZbjmQp3hyRHJtMtOLGZCqgunD5UAPUAdODZP4D8v4Q1MMC%2FmNEGOqUB4pWwlKXU7EStD18vAHFISPw4eBkw9Cq82%2Fue37ho0guYM0Qp7AGDghaHUqTDokOJinbN%2B3CvwvR8P9GIpu%2FlGYd7lux73faFxafFzm%2BKAbpMhVTAP90NP8GuICg2vqLmwkoDAeCxmKgtF0xuhEwKuOzhKgI85jJfuFrfcMaaGH81Vng3K2jztZMK3ov9l%2FQ7Tqveo2e3MMW5c8EVFh1VaZRWy7ql&X-Amz-Signature=0e3b32bb95815a9a9061ec7d6ec45c5f7531e68e8927d25837e98e4c2dd792e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
