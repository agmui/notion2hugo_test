---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=a55898178873e2467270a5ddd5373b7a1f7bc69dec01252adac12328b2d4cd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=b795ffb209aad3ea0dfa20cd549471137198cb8adea94553e7214703b33abca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=1da0d62584c41449adb3a0a81a881b1572d6308821b78c47573ddf9042145175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=483ba91490147ae7b7c306e5280d1626fef765e5ff314e6ca07c0020346a415d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=9481d0becc1b077fdf5994b49f7da8d9be170830a33b10ac75cef7f7153ac9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=d5ca4448817531477f2c9fcfaef07a5ca955215f3ad1cb3e33d7ac08826ccdfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=4c5ae05794d7b9200d35570b61894c9da7ae215e9b53d183a1d4f3b73dcc3d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=af3edd6a80e1cfd39b805501260641aca83c783c8ebd955aeab253191679259c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=b93d0786a750e4d195abfa1957d3fb4881770e7ecc5fe4559d4511279c7050a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=e3e5b18a070d1d4933103243faec80f7feb597af7cb8c401c8deca735fad9435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=abbfdb48dd47fb47a966c76d42fab4e61a6738e3534f04c5f7f183581e3a84b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=c4d44b1073a73d33511f4104fd9bec5562ca2913f9ffaa4b63525e426d8a8609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6C6KU3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2B2cvanLgyhuB%2FunZ2xVEYK6vszCI0KBieyTFgzfRlwIgSV7exhMmijCnyxUW3CGWfiO40aRsCzzkMD60L%2B2xe58qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX0qcg6rlTIq%2BUUJyrcA1XWRDx1OaJJTdu43xnAnu%2BqaExd6u28htiJ9XQ%2F0UfQDNiTA3X37pdP1GcZydgmpEO4jvy2Pg2Cy4ERWdFj44yWLxHvdBr1TnTfy08kJa3kNazafFmH4LllPrSQ%2FW3YaK0PvvbRacKNKnlOdEylGpKbKh%2FiA4UBrXhgWt41tx5XVtg4YT9OG4IWK7QSEiwDsZAiHESb6ayES1BwISds%2BLzi0uDyJZiNqdM%2FvcOaDdiK9Tyudk%2FNqbLyFVFW689tIz6%2FrQkPvg7SN4CES25dm1FJ%2FnHJNxg1%2B1H2m7aAJWzVgy6Zw%2B7ACuV%2FOIFU40yHQQ%2BVwUXPeHeA9QbnZ2kFDMz%2BcRRKbZbNabMtuklND0Wf%2B%2FKz%2BLjMk%2FtxXIi71w%2FeNpLNaDeJlP9pvAT3Es9MfSlJ%2F9saM2wMWWu%2BXMrond%2BB9KcBzCn60YJKp6MteVmJNg5NAcZprQUKQuhHMBtUPDvZ9MD6IA29fgo7X8c7b7xCbAEtp6P0WOL0FntCZs2nLSIAuarX%2BHiQR1UiD8b12mplTkiMNakj6Z77ZXLkViIvre3hiDQOHcrEJT3%2FqAu6kSUasJjY04YAualuvKl6KrmczEe7WsE%2FoVSHQJHh6IuJ3GrNtk0etcy1m6TOMJqjqMQGOqUB2AD%2FnQhSjI7Xpwzz1JPZg5s%2Fzj%2Fa8Z7PtTbg8XWkTfLoSXfEXh1e%2F7GL8DAmXv6tsFvEVC89UnyTKklnnLK6yTCeuZvLnC%2FlPis%2BEoZA8zUT2gDaP1O1vFZS9Pshb5Jhu0wzNCCzcNCbkNuUAFLvJgm%2FVuZtFHhOajUgzUBMCg0Qbplx3Jvmmub0vRDUTASHvYCqMnDins1hTStPs9YnxhEEpIqq&X-Amz-Signature=2aef64382bd6b2efc9fe7a8798e0573d60de8a241caed308729a36eca402ecbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
