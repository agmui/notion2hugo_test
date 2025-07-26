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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYFJMMO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAPBx0mdeyZGxgaVsg3UEeCnA35oUqS3YIxvThP1MxEPAiBelWJagY8lU1AtD09OPmZ8wjJ%2BBks9CEEUGu6IFNcwwSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjTVZiE4nJqjFhuciKtwD6yEel%2BkttBer1PvAxCkywTe%2FTk%2ByM6qOzflhTfZHPHNsMBiq9XQd715p2WrIuhGiZmwXsdS1wy1VdDgYqSDUBttNCNaSaDncoOK2JDM9UhJyOBFhoH52vuryUSIHRTQOvXqklGTQ0dD%2BiHcCaMv3ecieTtqbkVz%2FmUHlYB7g8ct%2F5uhRw9vrxfceQoiS26nBwJvti4pczA%2Fb2bDi22%2FANJidtpQqldf2JBTdqNRAajgOIFXt2OZArKvgztEmSAK5kF4yCOcEA6ja0TdEraJ%2BmdsYY8Xf1jKtaDHVzay0xe%2BputcRtRSCntppTDflNBysVh1IRV8EfSECpi843u0OPPBbgqINJo0Vy8IXG1QIbK9Tg00mkTAS10ES707dH3nzWhrVIi9FAa9AwuMUC6lX0BXqBcOGW%2BzQCeC7beNyDZ8GooX3%2FDwymzZxGTrwj8shqHhUIPNdwDD9hGsEN%2FHOdUlgs5sAyM0A2AK5cx5R1Xlpp59wty4dNAWm3q8BqcZtK5GtaOY4aZUQ7dyJVIzg6OZKUZgPNF1wG5KrRM42MzlNPoE7pOG034oyc2mqYv46NMUzCHI71Lh95oHVNzZzutCMl5mqKm0RmxC1lcS6Vi7ztTAzdMEKxYSNSEwwwv%2BUxAY6pgEZZ2Cu9s2vuLHd6zoTkgc058HSpEzQoiVSOO%2BpaTo9aJQ2HuRSyqTBjIvhQHH4CLGRYyfQGxq77%2BwwMqCwisDxV7o%2BxWlITszeKcC4S%2FbQQ0VBZDEMLKEeEtSNA3h3tulfHIaY2A9EJPClIsroGadmao76ZbOPQP1AJPyK5ceXXrKLPtDh2s3I%2BUFAYhypTF%2FPRdgwUlyZ5qm9dRmS2Ym%2F%2BNcKzXDw&X-Amz-Signature=c6aec2d835c58c908f63ba7d608e0093dfa05010403a38309139e3f01c2835eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYFJMMO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAPBx0mdeyZGxgaVsg3UEeCnA35oUqS3YIxvThP1MxEPAiBelWJagY8lU1AtD09OPmZ8wjJ%2BBks9CEEUGu6IFNcwwSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjTVZiE4nJqjFhuciKtwD6yEel%2BkttBer1PvAxCkywTe%2FTk%2ByM6qOzflhTfZHPHNsMBiq9XQd715p2WrIuhGiZmwXsdS1wy1VdDgYqSDUBttNCNaSaDncoOK2JDM9UhJyOBFhoH52vuryUSIHRTQOvXqklGTQ0dD%2BiHcCaMv3ecieTtqbkVz%2FmUHlYB7g8ct%2F5uhRw9vrxfceQoiS26nBwJvti4pczA%2Fb2bDi22%2FANJidtpQqldf2JBTdqNRAajgOIFXt2OZArKvgztEmSAK5kF4yCOcEA6ja0TdEraJ%2BmdsYY8Xf1jKtaDHVzay0xe%2BputcRtRSCntppTDflNBysVh1IRV8EfSECpi843u0OPPBbgqINJo0Vy8IXG1QIbK9Tg00mkTAS10ES707dH3nzWhrVIi9FAa9AwuMUC6lX0BXqBcOGW%2BzQCeC7beNyDZ8GooX3%2FDwymzZxGTrwj8shqHhUIPNdwDD9hGsEN%2FHOdUlgs5sAyM0A2AK5cx5R1Xlpp59wty4dNAWm3q8BqcZtK5GtaOY4aZUQ7dyJVIzg6OZKUZgPNF1wG5KrRM42MzlNPoE7pOG034oyc2mqYv46NMUzCHI71Lh95oHVNzZzutCMl5mqKm0RmxC1lcS6Vi7ztTAzdMEKxYSNSEwwwv%2BUxAY6pgEZZ2Cu9s2vuLHd6zoTkgc058HSpEzQoiVSOO%2BpaTo9aJQ2HuRSyqTBjIvhQHH4CLGRYyfQGxq77%2BwwMqCwisDxV7o%2BxWlITszeKcC4S%2FbQQ0VBZDEMLKEeEtSNA3h3tulfHIaY2A9EJPClIsroGadmao76ZbOPQP1AJPyK5ceXXrKLPtDh2s3I%2BUFAYhypTF%2FPRdgwUlyZ5qm9dRmS2Ym%2F%2BNcKzXDw&X-Amz-Signature=c9586a03cdab8525432d6ed40cf411ef84c064ddcc2247709342bb21130fb0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYFJMMO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAPBx0mdeyZGxgaVsg3UEeCnA35oUqS3YIxvThP1MxEPAiBelWJagY8lU1AtD09OPmZ8wjJ%2BBks9CEEUGu6IFNcwwSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjTVZiE4nJqjFhuciKtwD6yEel%2BkttBer1PvAxCkywTe%2FTk%2ByM6qOzflhTfZHPHNsMBiq9XQd715p2WrIuhGiZmwXsdS1wy1VdDgYqSDUBttNCNaSaDncoOK2JDM9UhJyOBFhoH52vuryUSIHRTQOvXqklGTQ0dD%2BiHcCaMv3ecieTtqbkVz%2FmUHlYB7g8ct%2F5uhRw9vrxfceQoiS26nBwJvti4pczA%2Fb2bDi22%2FANJidtpQqldf2JBTdqNRAajgOIFXt2OZArKvgztEmSAK5kF4yCOcEA6ja0TdEraJ%2BmdsYY8Xf1jKtaDHVzay0xe%2BputcRtRSCntppTDflNBysVh1IRV8EfSECpi843u0OPPBbgqINJo0Vy8IXG1QIbK9Tg00mkTAS10ES707dH3nzWhrVIi9FAa9AwuMUC6lX0BXqBcOGW%2BzQCeC7beNyDZ8GooX3%2FDwymzZxGTrwj8shqHhUIPNdwDD9hGsEN%2FHOdUlgs5sAyM0A2AK5cx5R1Xlpp59wty4dNAWm3q8BqcZtK5GtaOY4aZUQ7dyJVIzg6OZKUZgPNF1wG5KrRM42MzlNPoE7pOG034oyc2mqYv46NMUzCHI71Lh95oHVNzZzutCMl5mqKm0RmxC1lcS6Vi7ztTAzdMEKxYSNSEwwwv%2BUxAY6pgEZZ2Cu9s2vuLHd6zoTkgc058HSpEzQoiVSOO%2BpaTo9aJQ2HuRSyqTBjIvhQHH4CLGRYyfQGxq77%2BwwMqCwisDxV7o%2BxWlITszeKcC4S%2FbQQ0VBZDEMLKEeEtSNA3h3tulfHIaY2A9EJPClIsroGadmao76ZbOPQP1AJPyK5ceXXrKLPtDh2s3I%2BUFAYhypTF%2FPRdgwUlyZ5qm9dRmS2Ym%2F%2BNcKzXDw&X-Amz-Signature=d8ace0dc9f57324d32d0131a90c94a454d358c2935bc5941d4ca0d2c8bd53bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYFJMMO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAPBx0mdeyZGxgaVsg3UEeCnA35oUqS3YIxvThP1MxEPAiBelWJagY8lU1AtD09OPmZ8wjJ%2BBks9CEEUGu6IFNcwwSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjTVZiE4nJqjFhuciKtwD6yEel%2BkttBer1PvAxCkywTe%2FTk%2ByM6qOzflhTfZHPHNsMBiq9XQd715p2WrIuhGiZmwXsdS1wy1VdDgYqSDUBttNCNaSaDncoOK2JDM9UhJyOBFhoH52vuryUSIHRTQOvXqklGTQ0dD%2BiHcCaMv3ecieTtqbkVz%2FmUHlYB7g8ct%2F5uhRw9vrxfceQoiS26nBwJvti4pczA%2Fb2bDi22%2FANJidtpQqldf2JBTdqNRAajgOIFXt2OZArKvgztEmSAK5kF4yCOcEA6ja0TdEraJ%2BmdsYY8Xf1jKtaDHVzay0xe%2BputcRtRSCntppTDflNBysVh1IRV8EfSECpi843u0OPPBbgqINJo0Vy8IXG1QIbK9Tg00mkTAS10ES707dH3nzWhrVIi9FAa9AwuMUC6lX0BXqBcOGW%2BzQCeC7beNyDZ8GooX3%2FDwymzZxGTrwj8shqHhUIPNdwDD9hGsEN%2FHOdUlgs5sAyM0A2AK5cx5R1Xlpp59wty4dNAWm3q8BqcZtK5GtaOY4aZUQ7dyJVIzg6OZKUZgPNF1wG5KrRM42MzlNPoE7pOG034oyc2mqYv46NMUzCHI71Lh95oHVNzZzutCMl5mqKm0RmxC1lcS6Vi7ztTAzdMEKxYSNSEwwwv%2BUxAY6pgEZZ2Cu9s2vuLHd6zoTkgc058HSpEzQoiVSOO%2BpaTo9aJQ2HuRSyqTBjIvhQHH4CLGRYyfQGxq77%2BwwMqCwisDxV7o%2BxWlITszeKcC4S%2FbQQ0VBZDEMLKEeEtSNA3h3tulfHIaY2A9EJPClIsroGadmao76ZbOPQP1AJPyK5ceXXrKLPtDh2s3I%2BUFAYhypTF%2FPRdgwUlyZ5qm9dRmS2Ym%2F%2BNcKzXDw&X-Amz-Signature=989319555cf98993b5ae75000ab6317271283dc70ae7266f46f3978437049fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYFJMMO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAPBx0mdeyZGxgaVsg3UEeCnA35oUqS3YIxvThP1MxEPAiBelWJagY8lU1AtD09OPmZ8wjJ%2BBks9CEEUGu6IFNcwwSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjTVZiE4nJqjFhuciKtwD6yEel%2BkttBer1PvAxCkywTe%2FTk%2ByM6qOzflhTfZHPHNsMBiq9XQd715p2WrIuhGiZmwXsdS1wy1VdDgYqSDUBttNCNaSaDncoOK2JDM9UhJyOBFhoH52vuryUSIHRTQOvXqklGTQ0dD%2BiHcCaMv3ecieTtqbkVz%2FmUHlYB7g8ct%2F5uhRw9vrxfceQoiS26nBwJvti4pczA%2Fb2bDi22%2FANJidtpQqldf2JBTdqNRAajgOIFXt2OZArKvgztEmSAK5kF4yCOcEA6ja0TdEraJ%2BmdsYY8Xf1jKtaDHVzay0xe%2BputcRtRSCntppTDflNBysVh1IRV8EfSECpi843u0OPPBbgqINJo0Vy8IXG1QIbK9Tg00mkTAS10ES707dH3nzWhrVIi9FAa9AwuMUC6lX0BXqBcOGW%2BzQCeC7beNyDZ8GooX3%2FDwymzZxGTrwj8shqHhUIPNdwDD9hGsEN%2FHOdUlgs5sAyM0A2AK5cx5R1Xlpp59wty4dNAWm3q8BqcZtK5GtaOY4aZUQ7dyJVIzg6OZKUZgPNF1wG5KrRM42MzlNPoE7pOG034oyc2mqYv46NMUzCHI71Lh95oHVNzZzutCMl5mqKm0RmxC1lcS6Vi7ztTAzdMEKxYSNSEwwwv%2BUxAY6pgEZZ2Cu9s2vuLHd6zoTkgc058HSpEzQoiVSOO%2BpaTo9aJQ2HuRSyqTBjIvhQHH4CLGRYyfQGxq77%2BwwMqCwisDxV7o%2BxWlITszeKcC4S%2FbQQ0VBZDEMLKEeEtSNA3h3tulfHIaY2A9EJPClIsroGadmao76ZbOPQP1AJPyK5ceXXrKLPtDh2s3I%2BUFAYhypTF%2FPRdgwUlyZ5qm9dRmS2Ym%2F%2BNcKzXDw&X-Amz-Signature=0168fbe7eeb0b3aec51255b186ee8cd1d4b36c883c36cf257333cf82e1d56294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYFJMMO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAPBx0mdeyZGxgaVsg3UEeCnA35oUqS3YIxvThP1MxEPAiBelWJagY8lU1AtD09OPmZ8wjJ%2BBks9CEEUGu6IFNcwwSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjTVZiE4nJqjFhuciKtwD6yEel%2BkttBer1PvAxCkywTe%2FTk%2ByM6qOzflhTfZHPHNsMBiq9XQd715p2WrIuhGiZmwXsdS1wy1VdDgYqSDUBttNCNaSaDncoOK2JDM9UhJyOBFhoH52vuryUSIHRTQOvXqklGTQ0dD%2BiHcCaMv3ecieTtqbkVz%2FmUHlYB7g8ct%2F5uhRw9vrxfceQoiS26nBwJvti4pczA%2Fb2bDi22%2FANJidtpQqldf2JBTdqNRAajgOIFXt2OZArKvgztEmSAK5kF4yCOcEA6ja0TdEraJ%2BmdsYY8Xf1jKtaDHVzay0xe%2BputcRtRSCntppTDflNBysVh1IRV8EfSECpi843u0OPPBbgqINJo0Vy8IXG1QIbK9Tg00mkTAS10ES707dH3nzWhrVIi9FAa9AwuMUC6lX0BXqBcOGW%2BzQCeC7beNyDZ8GooX3%2FDwymzZxGTrwj8shqHhUIPNdwDD9hGsEN%2FHOdUlgs5sAyM0A2AK5cx5R1Xlpp59wty4dNAWm3q8BqcZtK5GtaOY4aZUQ7dyJVIzg6OZKUZgPNF1wG5KrRM42MzlNPoE7pOG034oyc2mqYv46NMUzCHI71Lh95oHVNzZzutCMl5mqKm0RmxC1lcS6Vi7ztTAzdMEKxYSNSEwwwv%2BUxAY6pgEZZ2Cu9s2vuLHd6zoTkgc058HSpEzQoiVSOO%2BpaTo9aJQ2HuRSyqTBjIvhQHH4CLGRYyfQGxq77%2BwwMqCwisDxV7o%2BxWlITszeKcC4S%2FbQQ0VBZDEMLKEeEtSNA3h3tulfHIaY2A9EJPClIsroGadmao76ZbOPQP1AJPyK5ceXXrKLPtDh2s3I%2BUFAYhypTF%2FPRdgwUlyZ5qm9dRmS2Ym%2F%2BNcKzXDw&X-Amz-Signature=a6c147891e6c6088c6058a4968fd3e204a87ed5c4ab4843e403706955e55240a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
