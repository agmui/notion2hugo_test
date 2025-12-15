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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=46a4e7f6db5f31a1c8a14c6a2a5405317038434b652de234205d6142a9e3a91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=20fcbf8ad89a28f919e0656f84ad8b5e1a0c7319a02965c44c8a04b47688a325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=41516d63c8a0987215162e55e3744cceaf3c79d839977aa0bf25fbbf94719359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=959138fa9ace0b57ab8f64e66abeb420cc0d0f5b002746431c6437578bd496ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=b532a8d14363bdb8c56512fd35ba7c15a37c1634eb9c10be564da5098c45c545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=50de4e38f48d6d378a5892df9bd9f92f00339a31779b1bbba12abd26fa21a429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=0ddfd4af365c83503f41edd20e4004ed76e7f41cade4db65c62722b8dedb6dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=1b0111ff73af101ea53b2ced8ca09bbd1b40c46b1bcfe94f49f4db1d484e2357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=2744b5bf15d4ebd23884d6c9744feafadbd88fb37aebb9f870df130f68f096d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=482f1eb417494650ee158ac5a239c35381c34df8fbe5fbc0df8d9fd102bede4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=e3551d2e96e8be5ae86a757b4486b28d997d1dd553ab99c2173fd59c662093dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=edfc92e79df06853b7b56d4a2785c2e1ca9aeec766ecf38dfee267e9a51086d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=ead0df6878f4bb206a442785b554b715117507e5dba9bb66302e613c7c04e000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CA5PCG%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDLJJb49ZpYmVQI6kjnfjHMciM4jU9d3EymCBeH7%2F3o3wIgNfAAPy7XSoV1vWeHuM6BxQ%2FcLuue%2BqNYKYizcGKY10Iq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCqAKTBW4iJpthVK0CrcAxt0UyaBb146fwnKWX5wD929t89fy8nnK2ze6fMOloFmSU%2BwGn4F3tVgW%2Bp2XIAOGT4Xpxv4UpVQ4MKJOVPwr5jPGwTRdfonzyvlsCJRV4dzbmGXsBpN73N5YMCosgSlUxEULm5aJ1U3JLsvLna4aUYWxqdqwohBHfNYfCCPQalCcHWUsVcEGL0jlIsV0GXsnec18H65x60%2Bvn7gR36BuQLuXdWosxZ1l8djVCdRJZPMyYKIrrbcPDQTd92Vrzsw0zlyTEEpomAcctKoLsiAo0Am%2FErgU0TioSfwQMSqY5YQRgPhfnOre0Bh6jH%2FkJezlehKW8uOy2aJZFx6osMuqevHEwFC%2BUn8gZ0mw7pgC6AO6w%2FTWblOaeBkziYkyETvsOoPHVV44ZJX5aQWJeS5sSgsxHgrpwFxwoRRaMByeNw7VtggXhJE6XRi8QChExXIubiIxAHDZPGGPGgyyQVffwWBfePWxWC8CFWwQNtaQ11lICByUa%2Bxvix1QeHIpy8jiuYmCfLyPLhm%2Bl%2BvGrClPxQrLNaDqTo9asxujRgbmK0PmCBKMPzynUGytwXqaqSm854KSdB4E%2BTGQTr9A0wd5rMQtGxzNVjTVG5Xxo%2BW7gzPP0oSAWyeRGVuEHX3MMPa%2FMkGOqUBP7eQPglu3c9bth%2B%2BcfXdkip%2BrZXIu2bCr4mymOb%2BEo71ZYaaXZ2%2BlVt%2FpLhT7xFnEQJrPYby6om%2BxJDSGPxSdYf4lszSeCQ7DGS%2BeGKaEpYfNdxVrnCWLjMmlsEMBBpw5ez3WJJ3OgADvl9b7VbH%2BeML7yYe8GmCVo0Zs0%2BUCdsw5lTAnw%2F06JRUbxg7gxbMUL2lIOGNkEJY2takkBl4EkhVuLTM&X-Amz-Signature=66eab63c6e5c843cd2f2c12c47ab7d1b3e7c79486234d72fbb0fb9e20eb5d043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
