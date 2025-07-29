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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNNOHYW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD7NwlHkRDCKLuSpPMR3KmsW6%2BPSWPC7iw4jyR9Th3uZgIhAMc9jz1p1lFDGOLd8wowbedhTuK9aDI%2B4cjEmLiz1mqgKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybvAyPY8WE39ZOqx4q3AMW%2FxK8j1N2EbnzSARkN7bjbBrfCEpv%2FHuQqGjTWmIniOTtj%2Bb7oqyfxkqMk8EfhcPg%2Bifi2vFpoTUBHD2kMivUafuOjEKO%2BPHK1lFhhc4mlB3fG5CJgyjKtnRpjRWAVsr0tMsE%2F%2F47m722msGrzFWMqUMY8B53a9OR2TarLOVGHf8t%2FZItxOaQmUlorxElrOp0Ju2uQA%2FUBSVP1F0AC9GGPCUlYrVoZxLGE8tRiWgVjq0kD5%2BUPtWbG6XKSZ%2BTfllFpa6tTRR0DeKiyUtf%2F3cNIwqUjlYOuSxSyLi7KEei2A6X4mhnGUsNFcRaTFie0hI6THLZkMw%2FRphywg5gLko4CzLWB%2F73M%2BNj1fSPwP%2BLmyqMM15EiNM6Qn1X%2F8d%2BAZP5X%2F%2BKI1WTuxQ7gyyXuK1%2F86NNdMc2NND%2BwcjYKFo5Se9h4VbhcKAg22hTD3G6Pq8A16vVQoXIXDZkshnACYgNcjsn1iDZaKOhFznFUPlCoSDvCGP5KRdzKTsRvP6cx537uY1rl2fvrVH338kb6RAk4RHShMF2FjwnbqJwCma27OvTuoMO5%2BwqtLuYso0SSQOEsFcaATaQ%2B6g7Zi9NJGXERyLVDTLvlUs4ftPWdb7wVlpf%2BE5ShdJmS0hUfjCQzaDEBjqkAXBUwDGE1cJ3zJfA9XbPgR%2BmHOSdz6PiTa0b7cvakvxqKkH6AiZx2gDtBGW%2FQp35kZTbPwABKP2J6WpzRjJozI5%2Bo8SkBSf9rRcU2FDLI8XnjlOeAL8NIqCmrozpP82m2f3H1oQN6ReVnrKWxYUC7DeKD3ppx%2BcVmiobpaeUAx4QJhKo2s2CcS9t%2BG1q8fzRsEZBG6OewWGxpPQLAs0MyqYp0x6W&X-Amz-Signature=c27250fd10108a0336c2c17d4fc67a7b2560e86735c84b74d855124e4832b372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNNOHYW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD7NwlHkRDCKLuSpPMR3KmsW6%2BPSWPC7iw4jyR9Th3uZgIhAMc9jz1p1lFDGOLd8wowbedhTuK9aDI%2B4cjEmLiz1mqgKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybvAyPY8WE39ZOqx4q3AMW%2FxK8j1N2EbnzSARkN7bjbBrfCEpv%2FHuQqGjTWmIniOTtj%2Bb7oqyfxkqMk8EfhcPg%2Bifi2vFpoTUBHD2kMivUafuOjEKO%2BPHK1lFhhc4mlB3fG5CJgyjKtnRpjRWAVsr0tMsE%2F%2F47m722msGrzFWMqUMY8B53a9OR2TarLOVGHf8t%2FZItxOaQmUlorxElrOp0Ju2uQA%2FUBSVP1F0AC9GGPCUlYrVoZxLGE8tRiWgVjq0kD5%2BUPtWbG6XKSZ%2BTfllFpa6tTRR0DeKiyUtf%2F3cNIwqUjlYOuSxSyLi7KEei2A6X4mhnGUsNFcRaTFie0hI6THLZkMw%2FRphywg5gLko4CzLWB%2F73M%2BNj1fSPwP%2BLmyqMM15EiNM6Qn1X%2F8d%2BAZP5X%2F%2BKI1WTuxQ7gyyXuK1%2F86NNdMc2NND%2BwcjYKFo5Se9h4VbhcKAg22hTD3G6Pq8A16vVQoXIXDZkshnACYgNcjsn1iDZaKOhFznFUPlCoSDvCGP5KRdzKTsRvP6cx537uY1rl2fvrVH338kb6RAk4RHShMF2FjwnbqJwCma27OvTuoMO5%2BwqtLuYso0SSQOEsFcaATaQ%2B6g7Zi9NJGXERyLVDTLvlUs4ftPWdb7wVlpf%2BE5ShdJmS0hUfjCQzaDEBjqkAXBUwDGE1cJ3zJfA9XbPgR%2BmHOSdz6PiTa0b7cvakvxqKkH6AiZx2gDtBGW%2FQp35kZTbPwABKP2J6WpzRjJozI5%2Bo8SkBSf9rRcU2FDLI8XnjlOeAL8NIqCmrozpP82m2f3H1oQN6ReVnrKWxYUC7DeKD3ppx%2BcVmiobpaeUAx4QJhKo2s2CcS9t%2BG1q8fzRsEZBG6OewWGxpPQLAs0MyqYp0x6W&X-Amz-Signature=3ae68abcff68187903726f5cbf4165c57859b88a721b3770172aae644d81678c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNNOHYW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD7NwlHkRDCKLuSpPMR3KmsW6%2BPSWPC7iw4jyR9Th3uZgIhAMc9jz1p1lFDGOLd8wowbedhTuK9aDI%2B4cjEmLiz1mqgKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybvAyPY8WE39ZOqx4q3AMW%2FxK8j1N2EbnzSARkN7bjbBrfCEpv%2FHuQqGjTWmIniOTtj%2Bb7oqyfxkqMk8EfhcPg%2Bifi2vFpoTUBHD2kMivUafuOjEKO%2BPHK1lFhhc4mlB3fG5CJgyjKtnRpjRWAVsr0tMsE%2F%2F47m722msGrzFWMqUMY8B53a9OR2TarLOVGHf8t%2FZItxOaQmUlorxElrOp0Ju2uQA%2FUBSVP1F0AC9GGPCUlYrVoZxLGE8tRiWgVjq0kD5%2BUPtWbG6XKSZ%2BTfllFpa6tTRR0DeKiyUtf%2F3cNIwqUjlYOuSxSyLi7KEei2A6X4mhnGUsNFcRaTFie0hI6THLZkMw%2FRphywg5gLko4CzLWB%2F73M%2BNj1fSPwP%2BLmyqMM15EiNM6Qn1X%2F8d%2BAZP5X%2F%2BKI1WTuxQ7gyyXuK1%2F86NNdMc2NND%2BwcjYKFo5Se9h4VbhcKAg22hTD3G6Pq8A16vVQoXIXDZkshnACYgNcjsn1iDZaKOhFznFUPlCoSDvCGP5KRdzKTsRvP6cx537uY1rl2fvrVH338kb6RAk4RHShMF2FjwnbqJwCma27OvTuoMO5%2BwqtLuYso0SSQOEsFcaATaQ%2B6g7Zi9NJGXERyLVDTLvlUs4ftPWdb7wVlpf%2BE5ShdJmS0hUfjCQzaDEBjqkAXBUwDGE1cJ3zJfA9XbPgR%2BmHOSdz6PiTa0b7cvakvxqKkH6AiZx2gDtBGW%2FQp35kZTbPwABKP2J6WpzRjJozI5%2Bo8SkBSf9rRcU2FDLI8XnjlOeAL8NIqCmrozpP82m2f3H1oQN6ReVnrKWxYUC7DeKD3ppx%2BcVmiobpaeUAx4QJhKo2s2CcS9t%2BG1q8fzRsEZBG6OewWGxpPQLAs0MyqYp0x6W&X-Amz-Signature=2c87efee63245bd567221d659b99debe914361a4ccca172ea2bda28a57bee0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNNOHYW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD7NwlHkRDCKLuSpPMR3KmsW6%2BPSWPC7iw4jyR9Th3uZgIhAMc9jz1p1lFDGOLd8wowbedhTuK9aDI%2B4cjEmLiz1mqgKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybvAyPY8WE39ZOqx4q3AMW%2FxK8j1N2EbnzSARkN7bjbBrfCEpv%2FHuQqGjTWmIniOTtj%2Bb7oqyfxkqMk8EfhcPg%2Bifi2vFpoTUBHD2kMivUafuOjEKO%2BPHK1lFhhc4mlB3fG5CJgyjKtnRpjRWAVsr0tMsE%2F%2F47m722msGrzFWMqUMY8B53a9OR2TarLOVGHf8t%2FZItxOaQmUlorxElrOp0Ju2uQA%2FUBSVP1F0AC9GGPCUlYrVoZxLGE8tRiWgVjq0kD5%2BUPtWbG6XKSZ%2BTfllFpa6tTRR0DeKiyUtf%2F3cNIwqUjlYOuSxSyLi7KEei2A6X4mhnGUsNFcRaTFie0hI6THLZkMw%2FRphywg5gLko4CzLWB%2F73M%2BNj1fSPwP%2BLmyqMM15EiNM6Qn1X%2F8d%2BAZP5X%2F%2BKI1WTuxQ7gyyXuK1%2F86NNdMc2NND%2BwcjYKFo5Se9h4VbhcKAg22hTD3G6Pq8A16vVQoXIXDZkshnACYgNcjsn1iDZaKOhFznFUPlCoSDvCGP5KRdzKTsRvP6cx537uY1rl2fvrVH338kb6RAk4RHShMF2FjwnbqJwCma27OvTuoMO5%2BwqtLuYso0SSQOEsFcaATaQ%2B6g7Zi9NJGXERyLVDTLvlUs4ftPWdb7wVlpf%2BE5ShdJmS0hUfjCQzaDEBjqkAXBUwDGE1cJ3zJfA9XbPgR%2BmHOSdz6PiTa0b7cvakvxqKkH6AiZx2gDtBGW%2FQp35kZTbPwABKP2J6WpzRjJozI5%2Bo8SkBSf9rRcU2FDLI8XnjlOeAL8NIqCmrozpP82m2f3H1oQN6ReVnrKWxYUC7DeKD3ppx%2BcVmiobpaeUAx4QJhKo2s2CcS9t%2BG1q8fzRsEZBG6OewWGxpPQLAs0MyqYp0x6W&X-Amz-Signature=073c51226c37e0cf08684d5fee42a04fc74eeb0ee9461f68424cdc04f4ac7aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNNOHYW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD7NwlHkRDCKLuSpPMR3KmsW6%2BPSWPC7iw4jyR9Th3uZgIhAMc9jz1p1lFDGOLd8wowbedhTuK9aDI%2B4cjEmLiz1mqgKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybvAyPY8WE39ZOqx4q3AMW%2FxK8j1N2EbnzSARkN7bjbBrfCEpv%2FHuQqGjTWmIniOTtj%2Bb7oqyfxkqMk8EfhcPg%2Bifi2vFpoTUBHD2kMivUafuOjEKO%2BPHK1lFhhc4mlB3fG5CJgyjKtnRpjRWAVsr0tMsE%2F%2F47m722msGrzFWMqUMY8B53a9OR2TarLOVGHf8t%2FZItxOaQmUlorxElrOp0Ju2uQA%2FUBSVP1F0AC9GGPCUlYrVoZxLGE8tRiWgVjq0kD5%2BUPtWbG6XKSZ%2BTfllFpa6tTRR0DeKiyUtf%2F3cNIwqUjlYOuSxSyLi7KEei2A6X4mhnGUsNFcRaTFie0hI6THLZkMw%2FRphywg5gLko4CzLWB%2F73M%2BNj1fSPwP%2BLmyqMM15EiNM6Qn1X%2F8d%2BAZP5X%2F%2BKI1WTuxQ7gyyXuK1%2F86NNdMc2NND%2BwcjYKFo5Se9h4VbhcKAg22hTD3G6Pq8A16vVQoXIXDZkshnACYgNcjsn1iDZaKOhFznFUPlCoSDvCGP5KRdzKTsRvP6cx537uY1rl2fvrVH338kb6RAk4RHShMF2FjwnbqJwCma27OvTuoMO5%2BwqtLuYso0SSQOEsFcaATaQ%2B6g7Zi9NJGXERyLVDTLvlUs4ftPWdb7wVlpf%2BE5ShdJmS0hUfjCQzaDEBjqkAXBUwDGE1cJ3zJfA9XbPgR%2BmHOSdz6PiTa0b7cvakvxqKkH6AiZx2gDtBGW%2FQp35kZTbPwABKP2J6WpzRjJozI5%2Bo8SkBSf9rRcU2FDLI8XnjlOeAL8NIqCmrozpP82m2f3H1oQN6ReVnrKWxYUC7DeKD3ppx%2BcVmiobpaeUAx4QJhKo2s2CcS9t%2BG1q8fzRsEZBG6OewWGxpPQLAs0MyqYp0x6W&X-Amz-Signature=871bc6a683623850674b3b0600d44901244a074cb0512d3b244ee43a6b94d76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNNOHYW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD7NwlHkRDCKLuSpPMR3KmsW6%2BPSWPC7iw4jyR9Th3uZgIhAMc9jz1p1lFDGOLd8wowbedhTuK9aDI%2B4cjEmLiz1mqgKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybvAyPY8WE39ZOqx4q3AMW%2FxK8j1N2EbnzSARkN7bjbBrfCEpv%2FHuQqGjTWmIniOTtj%2Bb7oqyfxkqMk8EfhcPg%2Bifi2vFpoTUBHD2kMivUafuOjEKO%2BPHK1lFhhc4mlB3fG5CJgyjKtnRpjRWAVsr0tMsE%2F%2F47m722msGrzFWMqUMY8B53a9OR2TarLOVGHf8t%2FZItxOaQmUlorxElrOp0Ju2uQA%2FUBSVP1F0AC9GGPCUlYrVoZxLGE8tRiWgVjq0kD5%2BUPtWbG6XKSZ%2BTfllFpa6tTRR0DeKiyUtf%2F3cNIwqUjlYOuSxSyLi7KEei2A6X4mhnGUsNFcRaTFie0hI6THLZkMw%2FRphywg5gLko4CzLWB%2F73M%2BNj1fSPwP%2BLmyqMM15EiNM6Qn1X%2F8d%2BAZP5X%2F%2BKI1WTuxQ7gyyXuK1%2F86NNdMc2NND%2BwcjYKFo5Se9h4VbhcKAg22hTD3G6Pq8A16vVQoXIXDZkshnACYgNcjsn1iDZaKOhFznFUPlCoSDvCGP5KRdzKTsRvP6cx537uY1rl2fvrVH338kb6RAk4RHShMF2FjwnbqJwCma27OvTuoMO5%2BwqtLuYso0SSQOEsFcaATaQ%2B6g7Zi9NJGXERyLVDTLvlUs4ftPWdb7wVlpf%2BE5ShdJmS0hUfjCQzaDEBjqkAXBUwDGE1cJ3zJfA9XbPgR%2BmHOSdz6PiTa0b7cvakvxqKkH6AiZx2gDtBGW%2FQp35kZTbPwABKP2J6WpzRjJozI5%2Bo8SkBSf9rRcU2FDLI8XnjlOeAL8NIqCmrozpP82m2f3H1oQN6ReVnrKWxYUC7DeKD3ppx%2BcVmiobpaeUAx4QJhKo2s2CcS9t%2BG1q8fzRsEZBG6OewWGxpPQLAs0MyqYp0x6W&X-Amz-Signature=63c4514c21a212f3915657c80fb7bd0f0be04ba1f05c7de692bcea659f9fe041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
