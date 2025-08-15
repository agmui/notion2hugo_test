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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=7242401c762daaf0c7ffad3105cb1cae50bd0cfdb5ea6a7ab8559a4abc0fafea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=d2f658e619ec439587eea3c4a9a8225fe8ea87cfb379488c5da7aace5ba2cd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=636682f36c82bed9d8e7deb74935da70bc60d970c864dbe520a5eee6376a1775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=9cfd87bfa7dc2e33537d0b33e9e6f2a53dd7a50c3b744f40972c533b616bc5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=5883d3b7186fc801f9d48702fbc37c49be706db99f8a02da480e2b9abf03d76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=8359b89d317db9321ae8132d4471599dc833720bf7b24a6eef3a1f9ef1e8b7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=1752c92d948febc5caae1cc52456b50d7b991a39f1d037b9e248d130757d4cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=3ed89f10d42fca244fb5ab02222d0f03510a6ae11e1cd92c143c3614d9e1880d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=736524b3a3bb49d03d6e0278b9de88178c9695391d64f02da9708abfac6d7d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=7177d17238fc45def0aba8053a33c157acc42d7a1596f9fdf06249a0af5752bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=4717849e4f6a5ce7c923f1e168e9b72b50bbd4da9fef2af6584a31d53ed72f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=a08d9a90f52169585e0ed28d6baba17814038bb4bc8ffb3d4fc85f0852d4b760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GISKQHS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE%2FKrPEXhpazN%2BVzOTxQobcaj9xjv3rW65CK%2FM7ZS8qRAiB4KKMI%2FiBwz4Gx68YZ1u8vUiltQDVmW2INA9RdluQYMyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMV2lyZgC8BHANwfeZKtwDaQyFgq%2Be%2BEEFaDMVKs%2Bbr4QT9kpFEjIEgdzGDZbcj73sp9VnKrTWtMmAFzTgLz%2BmwmPMARGIDTVw20nxqr30l0weBczLDstphE%2FOOoCRI3i1HUMadlVXZKsdsvE4CZXwDhXzRRpEJd9A05OE5vJFLexXlWAKN5zKA%2BTGGjzntXDuk0m%2BkMA2YNi7m2xzSAvCsJR%2BMylDaFxp5Z358vn6L%2FvKhr9CnahyB%2FCbmyDPOJTAeYf%2BSJV4yJz9%2By06zmFyNjPGCxxqXET4vSKJTojNvSE7zu1oMDUEdvmhBj4hJFzFbkJ%2FZkD%2F%2FH0I8fzJgyV1xSTnURKMbCJAxckpszcDrZYd%2FN5FAaF61FONlTeRwHYVXEyeQ4q2yKeVL5ZFH%2Fdlan4S5M09zyev%2F3glcAbmamT45YWkoHWGgZuL%2FXetMOGhM0KQ%2BI4lTHvsnz4Mr7qY9pxyqfUmtDSscQickCTfNwtMoAoRtsCr0s62jwoa9U7WPR6DAohLV3gXYPZ3M0YKmTKNCLh3M8DCnP8l9jf3tuJUixLX%2BDFGd3%2FFo18coJSp%2FBzqQCPhfEVS%2F6yr4ZuXDZZ2bojPvzUm5nlzQL57tQWw16pp0xcCBW5bYm8bVxBg%2FLRd9XJqziYCGGUw8KL6xAY6pgEF0RyINvgxEZtwr81vVPIKFfTlLVFSZWwC23%2BImbyrPDaOS0D7u9j%2FqMTGTAlE2gSNkCb6gdKRz8Xihoi40j5A6GUzvsJWw62uGQ5kmA%2B%2Bq3QW9TvxmaeAX7kiHCW%2B8KJEk%2BS26nWoCjz83XpJ2MKJ40Sqqcn9aER4vBHwQ4pI5g99pRhXd4p6kCOEiXjH1PCgTAGpeWVuqcwGJP9et5cR2MhcZzRP&X-Amz-Signature=a880734d20c66f8f5af058e0784fd3821d120d56cadb4a2eb0450513da8a9fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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
