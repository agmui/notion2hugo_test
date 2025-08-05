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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=bb5622668a0abada177661073e78c9def38c3cdb1c200604c4ed38bcdd04297d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=d0896314547e6a20921dd585ceef20185175706ab82abdaccbd4927ed6ebdbbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=65203623d7d5e699bbaaf429120df0c54b73374bf48d5de13903972af4b06ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=dbf55b09510cd033e1248dfc226e934acf4198a40c5b85444b66222cec3a9794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=f2934eaa370f9913309f9daa3be88adda978b3f2b1b30839a85622b5d60b843d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=c1827e93d94b405cb9a07816f44a019a79036346c9b5691b9c659ccd37b7ff87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=9a0354e99bb882a3fad8d3606b615334506bed1b84d5d22f81a21ba3f87edab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=0e1eff0a80f613c543f8d773f5171d0e713ffcbcb0cef55ebd2fc8481f3a0678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=c700ad849f85ed233422eafe119dcd51660a18b5ced8dc7612d298249ceb30a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=ba6232254327a959bc1152578f9285d6bdb7fe2d822115203b7271b36ca459f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=775df19d9850211d6380fd3353858065dfeaac879859bf796dc5c0c3af378f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=7caeabad43b59a8317b12def18d616be97e363b9f0e2846ce81f9c1ff8659ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=5bd13096ca62ae56659ae2508cb93f736f577f03dd687517466b264c1e6ddd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=c99e55661c2c64e2c8210c3f45396538d67f73396d9b616af9e5cbada8e199f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
