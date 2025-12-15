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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=501669df1f9a6412ebd7c6709a9d37e7814ef190f33659113ffd13b01bbaf5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=aa51b8b8288828125e0b24ce24a9e8505bea2178dfbae60b12d3556bfe88a725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=565fb280e147a67ca564aebe394e872483b3318c6b448dbf2e3c68bef1a32dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=a7e75853d1e7d7f4570adfc64f890afbe2cf39c9b27c12b40253d4dec96efeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=3f28618251638de5150ba67cfd977c20f7e74f73ab71ce750dc83c832e65c19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=4f77f710d4d240a8001ecf76d48815ad82cc8522090bd0659f80d0903a798e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=bd6574bb457da2da12ab9a7aa1e0753adca8d6e03df436dd4e3469f8c446a213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=d29aee7fcaea00556de474e30a8a4e93953c089cf9a9e18016816a2641688e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=72534dcede665ed2564edcafa86b5693c50d88206396cebe72ad147420ba151e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=cc5f0f36cfd8d5cddc208f04f49c27b8d591a532187c343402e10327298c712a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=8c344a1185c60dcc55dcd44daad35034539c40ee8249352a3a758aad49e1797b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=6be96c43a8d2ac824a919308741398b50f6a7047c0f67c361874c2601d03e34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJDPHMU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDEFcLSLLfReI1Ne59zrkA04oqVN77n2Tq0wm%2Fx6FIzkAiBPpG69VnNT5%2F8eRkz77fATIhu6pnTBVoOqB1yh0djzKCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdxX7g71Gc6WW16GrKtwDP1M5ooNAx%2FfLAQ8CXx2S1ldvmSEzm%2FoUWhjvy1hOLpwhrb%2BJvyat9k%2FA8%2BKm63bOynSGl60kO5zJP30eJFVjNTWl6ND6ijHiJoK9NGSCTOvTkM0Z0m2ayXwaDR6tCW2Ykz8kzMY7IsnA2A5BalyR6XpX1B9TVdUM4Ix06jyn5NMgDMCNz0NRccDdMHzeffHayZO27R27rTbyRAQUHSU4jQHdFT4Kpcg%2B3vMrQRP4stqCdog8aMPBtWHxPHMtauNIgun1GU%2Bm5Br%2F9soxuFKaenIrUj%2BbFVKN6QQ08KvJbh5mlQOprlJgXUP%2B5Ig1jDwt2TEVXSvIvkNdXpUKF2W9Lvr3kpQf4acsXGmqGJxOuvnEdxIuYibUxZnA6gDyF78kx9%2BSZX0mni%2F52w1k1Fp5gZ4NTbQvrQ58H2PAFIlVSsAIr1G4F5wU0XBIu4f1%2FhKgOuc%2FS5X8n3QhTjcobTkkMk%2Fdk22spPvWp3XJV2jem%2BUr6mGj%2BayMomvSsGURi4%2Fkrz40hHw%2FQkRzlutElrXEqrJTdldH8YnhnwkmOmWWnbu%2Fhz2uTHggXU4En0CfTIoRVutwc4PGxmtRqjSw4ra8Gt6wwLsvs6eJaaZL7ZCR48WRpdNn362D4FtpBAkwytr8yQY6pgHdeFnAQ9sYhRX1mEkveraTCT6CnbTqn8H64JAPOKUhAhOT3pbwruWsnv2FQVWKBUwoiSYd6DnkXgTNEMUQGShkHxqpj%2Ff48Twv9DPWCHUhZ%2B6c9kCQtjVpuPJVAy7XZdkDrSmZBOIf%2FTioVvad7xivqldpH6MaQPPymVmn39Sk85NltickL1RTZjX5AyyXpEKH%2FbB6Ah51C6eRjtqzVFSt2THdpOK9&X-Amz-Signature=5fd11fef7cf9a4f4d2a9455a4b3d2c20c42279cad8e31727d9f7700c5d980898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
