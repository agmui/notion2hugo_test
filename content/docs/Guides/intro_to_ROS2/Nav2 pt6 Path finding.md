---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=2d421a338ade302362ec976b77591fea6e540ef4e17bfde73b9d93f466feef0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}


#### Outputs:

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=2d9165bdc93fe254d69d34f8ab67b44600075a9d257453eb6a9a4ad04985eb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=3509bef18a69b7c2ebf2ca49913678a74147fc1ec6b395fd33a83ba9c1381f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=89873ea596ae165a28304d29a4ee8a79e16b14bf5a039a2564e88149015d92a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=f90cfa95c7bae286dd47738db9fa27133c625dcd56c0dcff112b25972f69cd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=7bf8647e49e2f704d243094e1f0570739ccd02deb3384bb99a74aaf8f5493dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=addc3fc8adcae33fdaede2283d99ee11ef75622ab3af17b64883ca66d0b7671f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=dd2f19cb6870f5999e9216bc797a39e01820c707398ac7c6517e6590b196f191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=7e0fe1bce1d240109147505b5f8e027034620266f157e85fa0b6ecb1005b6dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=aa3cdf010f98bbbeaf8b98eafa859678913695b2a74755e52044b181c7d7547c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=660223fd7d7220fc18b7859e309471f1c689b6617235416d7f0b5ba92d154cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=cb2305dba4a99684370bfb3ddc6489c01b2e7e72bfd40621020c5f7dd276e9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB4YMFLO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD5AhS%2Fjs2qOJqHzBwd9EJAhuvMWScjZWW0GYLASzLUsAIgQJAzfGGjWTO85uzgzBESsGVKgtA60XB43cVsHcV%2Fcm0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAOs%2FNfBj6q333q7yrcA8IDu4iMsFmOEMiWi1MEK6H5JuuUAbze4%2B0cB8SR9oW9eblj46GJZNIct1bfqSycrzuMClKwFT%2BkcN4FXJ4eO6wfBpPNOJ5kviKwCtINRSNU9ovlm%2FXrFALWoJ6X9RxbtXUhVsYcQuWBeWvbTbZCND%2F%2FPV7V9soGZ3KNx5oAfYSOqaahbvaugFOmnor69uMBMB4QEU7eGE3%2Flh2Dmzs1T3ZFTgjCIMmcN40OOLzVsZ63dMKzrvrAo7AtoxRBZyIXH8tK%2FoTMnWTN6QyPgTW39UBKg6%2BxHJfWN7VAyYG4My8aEJC%2FXINjFIjXMKVbJ7%2B71f31C1eB86J7yd6vBnHZ7o%2F8e3L9Ge%2FKvfotxDDqRz95Kbr421HvcIhRSCt7pAwFKQdpaA8Wkcr63MZuSL0%2FW%2BJhqD880AAUQ%2BVIuHpy2FN0mgC%2FYAUa%2ByRN0WA7y2yiXb4XDRSfvHahXmcnziCqof5RnctasqYYq6GvcpZ3n5032nT3eMgfdKbeLRpn3Xd5%2BrHQ%2FNhiqH6dYDuBEtIHCcQys2R6TPnmKUR4OUdSRM6d2tMixpUwuRd5TYAzRAc417ZIp1FtTJY5AzE7xHSuyAeZPj99qILf7zze1S4LHhlOk5sARTC7IWrdH1ADMK308skGOqUBO6zM2fp%2BO3aNWaSvf7gSbAYZgioETyn7EIKoi%2B7EmylUpjz%2BpjWM9MbgN2bxEIoH5jwDbvgdDqusQw4zy3jCIAsT6ET6tycgLaYe85Dh%2F%2BUxHgxeKnk9f%2BQX3W1N0%2FvuTDrPhRS3jODaSFavjOVzezGcqyofZRC3lzOIBrjmiV386EOpT4vuqCT5oBb%2B%2FiTUfweKTkohNtMbjmoFVzcW%2BQ7Foe6v&X-Amz-Signature=ed2d535e077f9a3e365f4c9c578ed2e62aa11c11b1098d706047ec9994642107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

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
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
