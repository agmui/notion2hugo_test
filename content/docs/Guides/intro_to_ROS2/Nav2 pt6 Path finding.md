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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=17c4a5911eccd0fca590f7854a470aad8b2ed534ae8b83658a3cd042f6beac6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=6ace169039a6974b18d89b361594e1c040807d3e25235e7f061b542f24678758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=c12fe2f59ec5c828f69eb3db9d83eef626efb787e60fea2050ef78a5d6a94e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=cc07ffa58794d4bbf69d2aac61bb28265855098fa01fe138165ab1eec7596a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=e8c0d66d37e438dc9180b9a4f2a3090b5827eb14810f58303f46ce80504598bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=7d03c36566482e1bb06da3fe40cc1e3d45e9f296bdbedfdd3cb7db67a31e2245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=06b1e7fca8cc660ca28648d96134e85d38b8cea1371830b1a979d2bd53fe3e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=1440423e494fd759a9cd7142e28d57d48dfc5dc0bdda6336326157683576bba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=96192b6cd12fce2ec17e0ca26434a3ebc098a9cc08ea050afffbcd1a63a6a828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=d6c2018bde6a5c710ef9273604bd7a2970d7d9475f3138c3daa3c229403bc605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=526fd077894fcac07130b44b6fe7ea7e55eaf6330d644f42da7e0a9a9df6a1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=6ab83f8472196d6d0e9d1ce99771bd66959fb0c405134427a92c6a21f0a8c4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYQZTGK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDNk2QStA4MjLb7TRSvQachpqRPkg%2ByYPg9od1C49jgIhAKW%2Fkx6m6QuQZfEUcqSfgGwL0VThO0im9ik5P8Ktjgp5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycBdXEpZIdOWvo0Jwq3AOdo02kf1uvQ%2BfJxnvKOhUgssVj7Y5kFp%2FXh7rw56oyfjLsNbq3TGCIxNwlKUdeRrc0Ho8Xs48jmrSS%2FI%2FbwEJOgIXkrfRZ6l5%2B%2FulSVk6ihA%2FO94lyVT%2FVEZb2iUAOaOwbGuYCIZ6mPYy084UtPZOhM7CXktMb7iu2FUNTYdFN2oIJVZ9TWhhLC750G12cA%2B8aZtPtCyoi3lmi3aQ%2B0gbzmTLlU2ZC86rk%2BTYzp6sILRidzuHv39H%2Fd0JTfcTc1yeIGOGG5LfIFsbYl5R2%2FqExQVpnS3KytwQ3DwJTLaZL0r40MixPFusdA0FO1YU9U6pcdwLi6XbwGzNne%2BKj3kiqKqUdrYFdneUGR%2FOYDrN2%2BWotKF6w1NY57SY3tncgHL%2B71ZyoB8k4x8FRyIKOP2LFSKaXtsTZVqfQ2%2BP8m9pHXBF%2FsZMllplCe%2FYZ5IhxWzuqtSVuSvQ1W%2FBb44ntnBBINjE%2Bq%2B9S0f0zFcAVPeXqDxDU0vCYRjH5CgNDHCCDfevnuKpsW6oogc%2FVVtI%2FiFXkdqVcMbheVIUwkgERQ%2F%2FUzt5Tb35Py41xAt2S171Kb9OnDsvSw2mL3kz3Du7GYjE0cpdUVojf4EGTqbfvv17jbmLgymcCSe65u2DlLjDT2KLJBjqkAY77hRTa5Juu5iCSGB4UJbJXbA6HYUfcB4%2B1AYYWXRbjcg%2B4SZdxgh3drZDJ5JympfeV9PcJV%2BxEyqTC3d3SpQKuk%2Bj4pI%2FoLpQvZULzEs55Ji7sdJWaOu7C9Z%2BtonufS1gDEAcRX%2FpbjsyNd2pXJdeqaKUkAziCIgYYgCCjMFqgplGFpxXiUCshYPb%2FpXaS%2BBLSvve9YqYgs9L1oUdz9pMOdK8J&X-Amz-Signature=3a30554d9e5e72ef0ba205412e0c6219a5ecc9985736b42dff68b11be60774e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
