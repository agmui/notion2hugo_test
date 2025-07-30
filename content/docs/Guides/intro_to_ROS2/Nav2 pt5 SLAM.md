---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=fe02bffd98c0f7491d1bf615614210f3958a76c3eb8a3fc0bd51a9e5dec750a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=e0e5db2e768abf7d2c02fdf40274a90629c80e970963179f15a44e525db56696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=32d2b3b14aafc8bbd84d627fb87eee49f4f7954bed66bc0f06b227fbd67d3269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=45c9dcf2c84540c26d3388b4423fbd5e91e9afdbb51ed5740f3c51f86862026c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=28d1c1f07938302161694dffc764a48b3e1201932c67bb20d802849aedd128b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=66da692f8d3ee51cbbec34ea3d893eab04ba0e2d415b45215b5bc2b65dc2e128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=9066b9d642317995b2dbf90bdae8719cac438df91a9b330ac14ba43c8b3723ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=bfbdff0c5e60e746fc68701e1a86bec0a05efe3f1c96541316a70a25994b3d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=8370362301e02938a1ad7163a1c53676cb5eb89d5b1a8ecc211ce65bb26b180a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=eec2f4ea59da7dd224a467ef77444e39aebb19d8c52a0d08b926127078fef33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=b78447f83bd7a758562c3b537f7e172773e1e5380513d7ec9aa09c69f00ca407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=1700e9d5b31cdfe5bbbcc38df18898ef215786563649470c60c9d19784f68d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=23e535f4f944f3e0f647d64535a838d5230178e2f4b1ace7503e4b164af56c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWGVDW3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPGvlm92du0db5hzuyo6mP4XWbQHHv4YHDo%2B%2B8OvsbAiEAnd6VoRLLTXPAiF6O6VKV0ww4hUOu0i97I22rLEA9qP0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUCaEXmmpcOXwvIRyrcA3ZzQ%2BZf3KZ%2Fl2sVy1ga2HmDo8bVg3idGQ8PXYUOW2DQVnrwd98va1XWQaauiq5Ojq%2FPbGGbThd1yjlr1ki4nA19ro3jaWVn6QK%2BFGA%2BicvsrfrFbtPZterScRzAcnjSs2PO83VYHTyJO0OHmmx2HJOloKg9XjNDkt3UlbJT064GOdF%2BuguUcxUA%2FCxUtCTE0VNrFdqU5E54T0ndKuSNci74kN1kwiIN2PZrncfyRekduW%2B4APtOssauDFpu6ubn7nEoFzfzX7fE2iSF%2BTP0DUQ4%2ByDD1p19DB3tsKODpdy3Eu%2FLGENtEdC2z7wvLHre53P2M3gVhI5%2BePpPbxnIrxYAj0Od6cngT1Rtx%2BQI%2FPlZuuDpLHrbOq0OVsfpsrtZPIqN7cXXxX%2BgtbnOaCGcnP2PVqu1RMqoKgN%2FN9dmjT3DRdpp2yDkkQebCd96DRlSiNu%2BkkVZGlWOFzi%2F2HLBlu1Z6a7ELsqwewgYRrkTTl693c8mZvvD%2FAMl2Pi0eTbUp%2B4lHONcJ1SQFp%2BC%2FOfN6yu0luWoG%2BcA4PvY629BEqPfP6O3rVaid%2FnJDnyjM8tBy%2BU%2FSf7QMp9CFUjkCOUPV5vrWmrcHdLCnPnkZ%2Bf%2FNvJ%2BYKeFHUVptv%2BT6PbgMKeiqMQGOqUBS6nacnsCfZ3nOGN1TBS6ZDsIWbWmY21jNJhDczYg8DCbVD5EC0biV6aCg%2FN90K4pQE4Ue%2F4Z%2F1tsp7FMHMRewkZLwAL08XK2BX4TrdsPMu4Aa5ow9uSXXb4NgG%2FPWvOf3M7sIKuQ0F88uZ3ZnXMzvS4%2BALdcG9CB4n8rJCaIVIxtknf4hK2NVf6Z6m%2BX416BZpZrNcneHT%2FoEL9fVGC2nBaTPOfy&X-Amz-Signature=f7d451701ae5b6ed408643a102f17140d48a3165e7df82e6009e0b28d7a958a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
