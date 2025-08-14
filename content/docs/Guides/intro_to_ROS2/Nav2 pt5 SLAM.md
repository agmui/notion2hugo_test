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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=166c814df5c52080c924e49377b1bc87733e40782c6eb1ac3b9195790b8686f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=1201d7f89c9adeb85b285a1712276dab1be691ba3798e18cb5dba9fb36c7118b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=cbfb6b79e050aa93b2c7038a0dd9bcb31bf368022b33f59b896a9ce7ec0d94b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=4675b02dd12de3fbb21d57bfee99e3bc0bd8efe5a252d1f044bcf7f6afe05cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=011bcee630a01146f2c8ba65bed79ae5d88bedaf31be72a2b426cdc2093fb0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=5d88e71ca792200af07dbeabc0f571d0ef41b1aa508854499b7a7a7a399d5d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=3339d48799e1aed6e88eae14ea6d0c6cb47bf0c6c4699082c41823d7e8cb729c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=e5e5357b5995c52b70a26afca0713311f6a790660d17ca8ac11e355bc078e1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=3a4ed15f2f6ce221ee7ecf3f78929896c8ce4f5a76cd3ce170aad41abcd7611f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=675ed2f698a216bcef76aa0dffd02e3105bbdb978bcff5225c77aedd4b7cb564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=85eeabf16cd72e3a645f84ffb56cd2d9ff3d920a301a61c4dc4b5fca1f8105fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=bdf51ca6f3fdd531283eda740c691974ae0e80162a09033699911deab5072294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=db256342e37f54e2a42a6d4d43c30cee1a25e529dc86a7e8e0b50bd603d50da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDDUN77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiroAr7EiAkAIz%2ByLbpfjpi0lkML6EUiMaGuEd2CmSfAiA1UcQGQKFyfV%2Fdvj8wWHewpVP%2Bq7vAXIo64tDjDcmIYSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMse34YCDy1Iy%2Fden1KtwDl%2BAfrkLwJuvckuR5%2BwmZuvC%2FQgLMVBehhICuigeHonSSIZ6DA1iNCp4MccJMvtDbdhnwNwYPjS8KFdXFtGnAOSfbNk0ZWzux9cHfipbWneLgCv7qq6ABWoUaAIWDMZ6%2FVbYEoOdbmWKeQJNAYE%2FIebXD8%2BW6HxoPKKzfBkEltzH5GP9fpNnhYpzpcgUAKe7uPMPtGkbd9nlQUBXpiGfphe9ua6GdrbBzfGxwGJALJCeFSMPb6ztR0wXm5YaEwyURTmR%2BuyZspQaPbdaIrJP6iEI%2FcrH8aDRFAlPxc4RH45tkmOYd1tTRANcEEfgTIMiPBGCOtl6jEgvlmhKl5rfpcaBDyKxyOp1k1tJzomSwRIBRflksaOXYD1bBrDJGFthXpJaLTbvg1pc2LvTY15gw07ePod8t4BLeMsrhydfOD%2BM9INKbVTeL1jZhsO%2BkQ8pn3YntYy7i6C8Jw%2F6nnjQSZXiMaO9OGf%2FqBFC9RxRDSrMuiK0THN2f0Po7NtVR2gwh%2BzmTtPnHIdnuUuaQpGM4271ApcMZZMbktkptJXmFXaYS0r0J%2B998hm5g%2FiMkFM9z83pH84vA5Gr3kMavq1w6wEi%2Fbb5CyiOmpUexUr5I8V2unqZjL8rvEFP%2BPJAw%2BYT3xAY6pgEDq5RavUKXt%2FhfTxeiMBRDjV8xr2fRowi90wfJOf%2FSccYuJz5ICoWseadRUVOblaJ0lMFaE5GmTnWWAYn1dMdx4xIbgcdfga%2FvivPP2C5WWsWGFUDcyLWHO6pTLXfPHW4cKGixs6UMPzJ3Gd%2Fe%2FjP3IFQW4hTtMtXJFfEtA0gNRJK80QOnd7wZCLctdf1Gh%2FfT6Nqg6xOtZ8y9JC58eD%2BMr5pmnfDE&X-Amz-Signature=a11f3de01998b5371c7b862f5f55bbc477caa621e96a7d42e1b19a8165a28514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
