---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRYQKBBC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIF8cyCZP1MHI5NUHaWSJKKNXJkuf5LNKuQ4TJ11tRFFAAiAjQV5Q43VyI4xeKtL1fbidaVqUaNlTvcNSHREESxHl8ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKw2Zf1PPkIFmhOW3KtwDoFNaAlM8VXKxekQNp00dI0WL%2BvlHLBr2aBeehNqX7pRo%2FM7Av0GksBDKqA1aUq6XqW7LfEamqLhPtPxXBZSdkhLdR%2BOYBbrV%2BnGsAmqwTj8yENjYoA5hnv2gJNuUkkPMN5DQrIQcMUpZBtIUdSHWFICwv8C8fM3Tp%2F2VVnFab3rT6G3Rg12R2TYI4JtVMdqHGJH%2FS8eWLZqlVRog%2FKMNsGNliG0mI10BAoZYuhVTtUdIQcG2iktAUSs6zLwlmcfdtK12tnh81zry4ZJ9y2MaRQSShYCov%2FCWDmQX%2BUx%2B6KCID2zatoD3EmAPeX5iOLBIgFuaDqYWVIXlnqb6fNq%2FWIEiXxYpi9G3WWLkQs6Sru%2FzZIwOjmLiCQzgq8uomBkb2QLCy91uVseexw1FSsHJOQZ2dRHoF7ylcxM9TGrHqMtk6z57pQ0yXOk2UymmFTPcysIifsbqrfBjU9zR9xIyD1pngqFbZyB9s6b7XCpuxgtUYaZy1PRDp%2B9rXqkfVtTbo0KiAxqYejrazQT0lzxEdE3Ry6OBBT09kxchKCydo6QUBgmsH%2FOMI%2Bh3G4zG3nFPHGnpY%2FC%2B5en9gN0EzFuT6QHbuMYrMvLt3070T%2BUjjeADZxmBuz9pZlHiU68wlI2NxAY6pgEid0RanyPrhHuaFrksuH0JTRe5kfnmjstWhgFkRUKm%2FFaelvKyz035e3B1Cn99debj1UBrNFyFVpe2g4KWYN0GTNxqUlaSsG8Zz5tt29ABMriJMZkCkoD8PMc8mHUcHO7fUAA780B%2BilZbBpVOneY6ubTMnDogpjVGo1um0sMHXZLyrsUx0MBFSQ5%2BRb20G84N4OMygdGUrF8O3lX3DrivcVxih%2BBT&X-Amz-Signature=424739a819be84240e5c40974229825e88b0a482b19c3a33167892d1a95e302a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRYQKBBC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIF8cyCZP1MHI5NUHaWSJKKNXJkuf5LNKuQ4TJ11tRFFAAiAjQV5Q43VyI4xeKtL1fbidaVqUaNlTvcNSHREESxHl8ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKw2Zf1PPkIFmhOW3KtwDoFNaAlM8VXKxekQNp00dI0WL%2BvlHLBr2aBeehNqX7pRo%2FM7Av0GksBDKqA1aUq6XqW7LfEamqLhPtPxXBZSdkhLdR%2BOYBbrV%2BnGsAmqwTj8yENjYoA5hnv2gJNuUkkPMN5DQrIQcMUpZBtIUdSHWFICwv8C8fM3Tp%2F2VVnFab3rT6G3Rg12R2TYI4JtVMdqHGJH%2FS8eWLZqlVRog%2FKMNsGNliG0mI10BAoZYuhVTtUdIQcG2iktAUSs6zLwlmcfdtK12tnh81zry4ZJ9y2MaRQSShYCov%2FCWDmQX%2BUx%2B6KCID2zatoD3EmAPeX5iOLBIgFuaDqYWVIXlnqb6fNq%2FWIEiXxYpi9G3WWLkQs6Sru%2FzZIwOjmLiCQzgq8uomBkb2QLCy91uVseexw1FSsHJOQZ2dRHoF7ylcxM9TGrHqMtk6z57pQ0yXOk2UymmFTPcysIifsbqrfBjU9zR9xIyD1pngqFbZyB9s6b7XCpuxgtUYaZy1PRDp%2B9rXqkfVtTbo0KiAxqYejrazQT0lzxEdE3Ry6OBBT09kxchKCydo6QUBgmsH%2FOMI%2Bh3G4zG3nFPHGnpY%2FC%2B5en9gN0EzFuT6QHbuMYrMvLt3070T%2BUjjeADZxmBuz9pZlHiU68wlI2NxAY6pgEid0RanyPrhHuaFrksuH0JTRe5kfnmjstWhgFkRUKm%2FFaelvKyz035e3B1Cn99debj1UBrNFyFVpe2g4KWYN0GTNxqUlaSsG8Zz5tt29ABMriJMZkCkoD8PMc8mHUcHO7fUAA780B%2BilZbBpVOneY6ubTMnDogpjVGo1um0sMHXZLyrsUx0MBFSQ5%2BRb20G84N4OMygdGUrF8O3lX3DrivcVxih%2BBT&X-Amz-Signature=3fa24f99a04463516a740e454de33886c95cdfd29c696cfd255e89a9e552652a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRYQKBBC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIF8cyCZP1MHI5NUHaWSJKKNXJkuf5LNKuQ4TJ11tRFFAAiAjQV5Q43VyI4xeKtL1fbidaVqUaNlTvcNSHREESxHl8ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKw2Zf1PPkIFmhOW3KtwDoFNaAlM8VXKxekQNp00dI0WL%2BvlHLBr2aBeehNqX7pRo%2FM7Av0GksBDKqA1aUq6XqW7LfEamqLhPtPxXBZSdkhLdR%2BOYBbrV%2BnGsAmqwTj8yENjYoA5hnv2gJNuUkkPMN5DQrIQcMUpZBtIUdSHWFICwv8C8fM3Tp%2F2VVnFab3rT6G3Rg12R2TYI4JtVMdqHGJH%2FS8eWLZqlVRog%2FKMNsGNliG0mI10BAoZYuhVTtUdIQcG2iktAUSs6zLwlmcfdtK12tnh81zry4ZJ9y2MaRQSShYCov%2FCWDmQX%2BUx%2B6KCID2zatoD3EmAPeX5iOLBIgFuaDqYWVIXlnqb6fNq%2FWIEiXxYpi9G3WWLkQs6Sru%2FzZIwOjmLiCQzgq8uomBkb2QLCy91uVseexw1FSsHJOQZ2dRHoF7ylcxM9TGrHqMtk6z57pQ0yXOk2UymmFTPcysIifsbqrfBjU9zR9xIyD1pngqFbZyB9s6b7XCpuxgtUYaZy1PRDp%2B9rXqkfVtTbo0KiAxqYejrazQT0lzxEdE3Ry6OBBT09kxchKCydo6QUBgmsH%2FOMI%2Bh3G4zG3nFPHGnpY%2FC%2B5en9gN0EzFuT6QHbuMYrMvLt3070T%2BUjjeADZxmBuz9pZlHiU68wlI2NxAY6pgEid0RanyPrhHuaFrksuH0JTRe5kfnmjstWhgFkRUKm%2FFaelvKyz035e3B1Cn99debj1UBrNFyFVpe2g4KWYN0GTNxqUlaSsG8Zz5tt29ABMriJMZkCkoD8PMc8mHUcHO7fUAA780B%2BilZbBpVOneY6ubTMnDogpjVGo1um0sMHXZLyrsUx0MBFSQ5%2BRb20G84N4OMygdGUrF8O3lX3DrivcVxih%2BBT&X-Amz-Signature=b231d1407fee83b0d9d55676e9ac0ed5ed9390f50edba5e420c4078ace528e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRYQKBBC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIF8cyCZP1MHI5NUHaWSJKKNXJkuf5LNKuQ4TJ11tRFFAAiAjQV5Q43VyI4xeKtL1fbidaVqUaNlTvcNSHREESxHl8ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKw2Zf1PPkIFmhOW3KtwDoFNaAlM8VXKxekQNp00dI0WL%2BvlHLBr2aBeehNqX7pRo%2FM7Av0GksBDKqA1aUq6XqW7LfEamqLhPtPxXBZSdkhLdR%2BOYBbrV%2BnGsAmqwTj8yENjYoA5hnv2gJNuUkkPMN5DQrIQcMUpZBtIUdSHWFICwv8C8fM3Tp%2F2VVnFab3rT6G3Rg12R2TYI4JtVMdqHGJH%2FS8eWLZqlVRog%2FKMNsGNliG0mI10BAoZYuhVTtUdIQcG2iktAUSs6zLwlmcfdtK12tnh81zry4ZJ9y2MaRQSShYCov%2FCWDmQX%2BUx%2B6KCID2zatoD3EmAPeX5iOLBIgFuaDqYWVIXlnqb6fNq%2FWIEiXxYpi9G3WWLkQs6Sru%2FzZIwOjmLiCQzgq8uomBkb2QLCy91uVseexw1FSsHJOQZ2dRHoF7ylcxM9TGrHqMtk6z57pQ0yXOk2UymmFTPcysIifsbqrfBjU9zR9xIyD1pngqFbZyB9s6b7XCpuxgtUYaZy1PRDp%2B9rXqkfVtTbo0KiAxqYejrazQT0lzxEdE3Ry6OBBT09kxchKCydo6QUBgmsH%2FOMI%2Bh3G4zG3nFPHGnpY%2FC%2B5en9gN0EzFuT6QHbuMYrMvLt3070T%2BUjjeADZxmBuz9pZlHiU68wlI2NxAY6pgEid0RanyPrhHuaFrksuH0JTRe5kfnmjstWhgFkRUKm%2FFaelvKyz035e3B1Cn99debj1UBrNFyFVpe2g4KWYN0GTNxqUlaSsG8Zz5tt29ABMriJMZkCkoD8PMc8mHUcHO7fUAA780B%2BilZbBpVOneY6ubTMnDogpjVGo1um0sMHXZLyrsUx0MBFSQ5%2BRb20G84N4OMygdGUrF8O3lX3DrivcVxih%2BBT&X-Amz-Signature=620836f63542e0984e8d6b9c5c0583f9dd4feb0962cc9225c70ec780f947da20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRYQKBBC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIF8cyCZP1MHI5NUHaWSJKKNXJkuf5LNKuQ4TJ11tRFFAAiAjQV5Q43VyI4xeKtL1fbidaVqUaNlTvcNSHREESxHl8ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKw2Zf1PPkIFmhOW3KtwDoFNaAlM8VXKxekQNp00dI0WL%2BvlHLBr2aBeehNqX7pRo%2FM7Av0GksBDKqA1aUq6XqW7LfEamqLhPtPxXBZSdkhLdR%2BOYBbrV%2BnGsAmqwTj8yENjYoA5hnv2gJNuUkkPMN5DQrIQcMUpZBtIUdSHWFICwv8C8fM3Tp%2F2VVnFab3rT6G3Rg12R2TYI4JtVMdqHGJH%2FS8eWLZqlVRog%2FKMNsGNliG0mI10BAoZYuhVTtUdIQcG2iktAUSs6zLwlmcfdtK12tnh81zry4ZJ9y2MaRQSShYCov%2FCWDmQX%2BUx%2B6KCID2zatoD3EmAPeX5iOLBIgFuaDqYWVIXlnqb6fNq%2FWIEiXxYpi9G3WWLkQs6Sru%2FzZIwOjmLiCQzgq8uomBkb2QLCy91uVseexw1FSsHJOQZ2dRHoF7ylcxM9TGrHqMtk6z57pQ0yXOk2UymmFTPcysIifsbqrfBjU9zR9xIyD1pngqFbZyB9s6b7XCpuxgtUYaZy1PRDp%2B9rXqkfVtTbo0KiAxqYejrazQT0lzxEdE3Ry6OBBT09kxchKCydo6QUBgmsH%2FOMI%2Bh3G4zG3nFPHGnpY%2FC%2B5en9gN0EzFuT6QHbuMYrMvLt3070T%2BUjjeADZxmBuz9pZlHiU68wlI2NxAY6pgEid0RanyPrhHuaFrksuH0JTRe5kfnmjstWhgFkRUKm%2FFaelvKyz035e3B1Cn99debj1UBrNFyFVpe2g4KWYN0GTNxqUlaSsG8Zz5tt29ABMriJMZkCkoD8PMc8mHUcHO7fUAA780B%2BilZbBpVOneY6ubTMnDogpjVGo1um0sMHXZLyrsUx0MBFSQ5%2BRb20G84N4OMygdGUrF8O3lX3DrivcVxih%2BBT&X-Amz-Signature=b03f34413e3b53c2173f1ae3bbdf8814ea1fb142b000b94ac514fb48ef2fbe2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRYQKBBC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIF8cyCZP1MHI5NUHaWSJKKNXJkuf5LNKuQ4TJ11tRFFAAiAjQV5Q43VyI4xeKtL1fbidaVqUaNlTvcNSHREESxHl8ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKw2Zf1PPkIFmhOW3KtwDoFNaAlM8VXKxekQNp00dI0WL%2BvlHLBr2aBeehNqX7pRo%2FM7Av0GksBDKqA1aUq6XqW7LfEamqLhPtPxXBZSdkhLdR%2BOYBbrV%2BnGsAmqwTj8yENjYoA5hnv2gJNuUkkPMN5DQrIQcMUpZBtIUdSHWFICwv8C8fM3Tp%2F2VVnFab3rT6G3Rg12R2TYI4JtVMdqHGJH%2FS8eWLZqlVRog%2FKMNsGNliG0mI10BAoZYuhVTtUdIQcG2iktAUSs6zLwlmcfdtK12tnh81zry4ZJ9y2MaRQSShYCov%2FCWDmQX%2BUx%2B6KCID2zatoD3EmAPeX5iOLBIgFuaDqYWVIXlnqb6fNq%2FWIEiXxYpi9G3WWLkQs6Sru%2FzZIwOjmLiCQzgq8uomBkb2QLCy91uVseexw1FSsHJOQZ2dRHoF7ylcxM9TGrHqMtk6z57pQ0yXOk2UymmFTPcysIifsbqrfBjU9zR9xIyD1pngqFbZyB9s6b7XCpuxgtUYaZy1PRDp%2B9rXqkfVtTbo0KiAxqYejrazQT0lzxEdE3Ry6OBBT09kxchKCydo6QUBgmsH%2FOMI%2Bh3G4zG3nFPHGnpY%2FC%2B5en9gN0EzFuT6QHbuMYrMvLt3070T%2BUjjeADZxmBuz9pZlHiU68wlI2NxAY6pgEid0RanyPrhHuaFrksuH0JTRe5kfnmjstWhgFkRUKm%2FFaelvKyz035e3B1Cn99debj1UBrNFyFVpe2g4KWYN0GTNxqUlaSsG8Zz5tt29ABMriJMZkCkoD8PMc8mHUcHO7fUAA780B%2BilZbBpVOneY6ubTMnDogpjVGo1um0sMHXZLyrsUx0MBFSQ5%2BRb20G84N4OMygdGUrF8O3lX3DrivcVxih%2BBT&X-Amz-Signature=ab20b101609a57b03c41b8db9d11cfd203444da7a18d23cada1f634e5789c46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
