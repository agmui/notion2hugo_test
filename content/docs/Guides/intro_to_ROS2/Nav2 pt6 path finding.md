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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5RI3KN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAxA1XaLs%2FCsUuxBndQDkXTPPCoIk%2Fqvo%2BnKoUFlO%2BjhAiBxxbEBGWHRL1s4NY6tk50Cxp2qZxJvJPde1gkBQLa4pyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC69EVdCOqhHwh9UKtwDbhdrXGncV0Eq3Hx%2Fp%2FxWzTDtpILd59TbOz%2BApfx%2FOW9bQ0j1qKqmFv7XIm%2Bz6EJSLxWzJkC9YEuPSYnEN7ARDvhMQQGoT%2F2pv%2FzLuRHe5qVf%2Fk02wavRym8n79hKHOmqU62GmKxqo2LxLTU2t6LCbG75giZPSQ%2B%2BADE%2Fh6BjeAEu13A9sCORloeQTZKDGZ9iS6HwDhE8OfJ1xiBeKCL34uzaNpu5ULe6dgjzdYQNxlDDqwl1eM2%2BACcSy07gPxPR%2Bb4ljaG4il4dcx%2F7tiq4ujiHS%2B83tdwwxwbxhW%2Ft%2By%2BMEVgJfefkpnl3a2xTAlW86kAjjqrlpPpZSSXpi6kP6y9QMd6bWaGDUpX6rRzH5uGcguOV5PQlLDBrUdnhYlUSd2moQpJnU09f5FbF4D7S7QwfLf5w7JkhtKWVoaORmW5Qkg1hQ38Q5Ys4hvggcCOvQ52a6IKrBaQqmeOAV%2BoeNg85cHRETu9JKcjnxtgT2n9x8aQcS4h%2BG38O2W0ObJf%2Fku2taoKmUL%2Bb8Vqf6G4zrmW5FFJp64tZL0rxIVCF54kaMWesYhhHo2PhrOF40FCqY8RIxMviFbkpKqmcm1YmsqDc9Gc0dBjrjGguTp%2BIjEf1e31lp%2B5g%2BfPxdSIwmdedxAY6pgHUfzkKoXMbPH6Y%2B2BlM%2BcNoU00SfwwNEOlu%2BZhGEEjDHEstMgIh2KFUAKjtHguOEb9IdoI9ikitZt1cpy9BWPGyQZ9JYkJY6YhEFkVK8aXAqmPXoFMWy3HiTBQql%2FZimJQ1Qj3Od%2FbIG01Cvj%2BcmmPYCIvPRzmkY3tR9lPP7t1CCFJxtKQ6ygTecy4R810uX2AkVk%2FSRqfYgGbAW3wLunbGZoDJHLv&X-Amz-Signature=854d2dabc6109678714e9d30f033a53efbb53e260f37ed258c86eda65b4822d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5RI3KN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAxA1XaLs%2FCsUuxBndQDkXTPPCoIk%2Fqvo%2BnKoUFlO%2BjhAiBxxbEBGWHRL1s4NY6tk50Cxp2qZxJvJPde1gkBQLa4pyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC69EVdCOqhHwh9UKtwDbhdrXGncV0Eq3Hx%2Fp%2FxWzTDtpILd59TbOz%2BApfx%2FOW9bQ0j1qKqmFv7XIm%2Bz6EJSLxWzJkC9YEuPSYnEN7ARDvhMQQGoT%2F2pv%2FzLuRHe5qVf%2Fk02wavRym8n79hKHOmqU62GmKxqo2LxLTU2t6LCbG75giZPSQ%2B%2BADE%2Fh6BjeAEu13A9sCORloeQTZKDGZ9iS6HwDhE8OfJ1xiBeKCL34uzaNpu5ULe6dgjzdYQNxlDDqwl1eM2%2BACcSy07gPxPR%2Bb4ljaG4il4dcx%2F7tiq4ujiHS%2B83tdwwxwbxhW%2Ft%2By%2BMEVgJfefkpnl3a2xTAlW86kAjjqrlpPpZSSXpi6kP6y9QMd6bWaGDUpX6rRzH5uGcguOV5PQlLDBrUdnhYlUSd2moQpJnU09f5FbF4D7S7QwfLf5w7JkhtKWVoaORmW5Qkg1hQ38Q5Ys4hvggcCOvQ52a6IKrBaQqmeOAV%2BoeNg85cHRETu9JKcjnxtgT2n9x8aQcS4h%2BG38O2W0ObJf%2Fku2taoKmUL%2Bb8Vqf6G4zrmW5FFJp64tZL0rxIVCF54kaMWesYhhHo2PhrOF40FCqY8RIxMviFbkpKqmcm1YmsqDc9Gc0dBjrjGguTp%2BIjEf1e31lp%2B5g%2BfPxdSIwmdedxAY6pgHUfzkKoXMbPH6Y%2B2BlM%2BcNoU00SfwwNEOlu%2BZhGEEjDHEstMgIh2KFUAKjtHguOEb9IdoI9ikitZt1cpy9BWPGyQZ9JYkJY6YhEFkVK8aXAqmPXoFMWy3HiTBQql%2FZimJQ1Qj3Od%2FbIG01Cvj%2BcmmPYCIvPRzmkY3tR9lPP7t1CCFJxtKQ6ygTecy4R810uX2AkVk%2FSRqfYgGbAW3wLunbGZoDJHLv&X-Amz-Signature=da34dc727d0210395046b50d78b553bef0286c4e9b30690e090a4a529a6bf957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5RI3KN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAxA1XaLs%2FCsUuxBndQDkXTPPCoIk%2Fqvo%2BnKoUFlO%2BjhAiBxxbEBGWHRL1s4NY6tk50Cxp2qZxJvJPde1gkBQLa4pyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC69EVdCOqhHwh9UKtwDbhdrXGncV0Eq3Hx%2Fp%2FxWzTDtpILd59TbOz%2BApfx%2FOW9bQ0j1qKqmFv7XIm%2Bz6EJSLxWzJkC9YEuPSYnEN7ARDvhMQQGoT%2F2pv%2FzLuRHe5qVf%2Fk02wavRym8n79hKHOmqU62GmKxqo2LxLTU2t6LCbG75giZPSQ%2B%2BADE%2Fh6BjeAEu13A9sCORloeQTZKDGZ9iS6HwDhE8OfJ1xiBeKCL34uzaNpu5ULe6dgjzdYQNxlDDqwl1eM2%2BACcSy07gPxPR%2Bb4ljaG4il4dcx%2F7tiq4ujiHS%2B83tdwwxwbxhW%2Ft%2By%2BMEVgJfefkpnl3a2xTAlW86kAjjqrlpPpZSSXpi6kP6y9QMd6bWaGDUpX6rRzH5uGcguOV5PQlLDBrUdnhYlUSd2moQpJnU09f5FbF4D7S7QwfLf5w7JkhtKWVoaORmW5Qkg1hQ38Q5Ys4hvggcCOvQ52a6IKrBaQqmeOAV%2BoeNg85cHRETu9JKcjnxtgT2n9x8aQcS4h%2BG38O2W0ObJf%2Fku2taoKmUL%2Bb8Vqf6G4zrmW5FFJp64tZL0rxIVCF54kaMWesYhhHo2PhrOF40FCqY8RIxMviFbkpKqmcm1YmsqDc9Gc0dBjrjGguTp%2BIjEf1e31lp%2B5g%2BfPxdSIwmdedxAY6pgHUfzkKoXMbPH6Y%2B2BlM%2BcNoU00SfwwNEOlu%2BZhGEEjDHEstMgIh2KFUAKjtHguOEb9IdoI9ikitZt1cpy9BWPGyQZ9JYkJY6YhEFkVK8aXAqmPXoFMWy3HiTBQql%2FZimJQ1Qj3Od%2FbIG01Cvj%2BcmmPYCIvPRzmkY3tR9lPP7t1CCFJxtKQ6ygTecy4R810uX2AkVk%2FSRqfYgGbAW3wLunbGZoDJHLv&X-Amz-Signature=f98e31624c1ae4321d5cbd3f5abe501b78c667c27bdd7835f096433096f0ab1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5RI3KN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAxA1XaLs%2FCsUuxBndQDkXTPPCoIk%2Fqvo%2BnKoUFlO%2BjhAiBxxbEBGWHRL1s4NY6tk50Cxp2qZxJvJPde1gkBQLa4pyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC69EVdCOqhHwh9UKtwDbhdrXGncV0Eq3Hx%2Fp%2FxWzTDtpILd59TbOz%2BApfx%2FOW9bQ0j1qKqmFv7XIm%2Bz6EJSLxWzJkC9YEuPSYnEN7ARDvhMQQGoT%2F2pv%2FzLuRHe5qVf%2Fk02wavRym8n79hKHOmqU62GmKxqo2LxLTU2t6LCbG75giZPSQ%2B%2BADE%2Fh6BjeAEu13A9sCORloeQTZKDGZ9iS6HwDhE8OfJ1xiBeKCL34uzaNpu5ULe6dgjzdYQNxlDDqwl1eM2%2BACcSy07gPxPR%2Bb4ljaG4il4dcx%2F7tiq4ujiHS%2B83tdwwxwbxhW%2Ft%2By%2BMEVgJfefkpnl3a2xTAlW86kAjjqrlpPpZSSXpi6kP6y9QMd6bWaGDUpX6rRzH5uGcguOV5PQlLDBrUdnhYlUSd2moQpJnU09f5FbF4D7S7QwfLf5w7JkhtKWVoaORmW5Qkg1hQ38Q5Ys4hvggcCOvQ52a6IKrBaQqmeOAV%2BoeNg85cHRETu9JKcjnxtgT2n9x8aQcS4h%2BG38O2W0ObJf%2Fku2taoKmUL%2Bb8Vqf6G4zrmW5FFJp64tZL0rxIVCF54kaMWesYhhHo2PhrOF40FCqY8RIxMviFbkpKqmcm1YmsqDc9Gc0dBjrjGguTp%2BIjEf1e31lp%2B5g%2BfPxdSIwmdedxAY6pgHUfzkKoXMbPH6Y%2B2BlM%2BcNoU00SfwwNEOlu%2BZhGEEjDHEstMgIh2KFUAKjtHguOEb9IdoI9ikitZt1cpy9BWPGyQZ9JYkJY6YhEFkVK8aXAqmPXoFMWy3HiTBQql%2FZimJQ1Qj3Od%2FbIG01Cvj%2BcmmPYCIvPRzmkY3tR9lPP7t1CCFJxtKQ6ygTecy4R810uX2AkVk%2FSRqfYgGbAW3wLunbGZoDJHLv&X-Amz-Signature=cc6099fbafa0f076f8a19494505cf8b0730fb6a194bfa52fe6845779c688ef80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5RI3KN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAxA1XaLs%2FCsUuxBndQDkXTPPCoIk%2Fqvo%2BnKoUFlO%2BjhAiBxxbEBGWHRL1s4NY6tk50Cxp2qZxJvJPde1gkBQLa4pyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC69EVdCOqhHwh9UKtwDbhdrXGncV0Eq3Hx%2Fp%2FxWzTDtpILd59TbOz%2BApfx%2FOW9bQ0j1qKqmFv7XIm%2Bz6EJSLxWzJkC9YEuPSYnEN7ARDvhMQQGoT%2F2pv%2FzLuRHe5qVf%2Fk02wavRym8n79hKHOmqU62GmKxqo2LxLTU2t6LCbG75giZPSQ%2B%2BADE%2Fh6BjeAEu13A9sCORloeQTZKDGZ9iS6HwDhE8OfJ1xiBeKCL34uzaNpu5ULe6dgjzdYQNxlDDqwl1eM2%2BACcSy07gPxPR%2Bb4ljaG4il4dcx%2F7tiq4ujiHS%2B83tdwwxwbxhW%2Ft%2By%2BMEVgJfefkpnl3a2xTAlW86kAjjqrlpPpZSSXpi6kP6y9QMd6bWaGDUpX6rRzH5uGcguOV5PQlLDBrUdnhYlUSd2moQpJnU09f5FbF4D7S7QwfLf5w7JkhtKWVoaORmW5Qkg1hQ38Q5Ys4hvggcCOvQ52a6IKrBaQqmeOAV%2BoeNg85cHRETu9JKcjnxtgT2n9x8aQcS4h%2BG38O2W0ObJf%2Fku2taoKmUL%2Bb8Vqf6G4zrmW5FFJp64tZL0rxIVCF54kaMWesYhhHo2PhrOF40FCqY8RIxMviFbkpKqmcm1YmsqDc9Gc0dBjrjGguTp%2BIjEf1e31lp%2B5g%2BfPxdSIwmdedxAY6pgHUfzkKoXMbPH6Y%2B2BlM%2BcNoU00SfwwNEOlu%2BZhGEEjDHEstMgIh2KFUAKjtHguOEb9IdoI9ikitZt1cpy9BWPGyQZ9JYkJY6YhEFkVK8aXAqmPXoFMWy3HiTBQql%2FZimJQ1Qj3Od%2FbIG01Cvj%2BcmmPYCIvPRzmkY3tR9lPP7t1CCFJxtKQ6ygTecy4R810uX2AkVk%2FSRqfYgGbAW3wLunbGZoDJHLv&X-Amz-Signature=80fdd1e610d7faf46247125e885b1e4df9dce7882f48f665512b170fd5e29945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5RI3KN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAxA1XaLs%2FCsUuxBndQDkXTPPCoIk%2Fqvo%2BnKoUFlO%2BjhAiBxxbEBGWHRL1s4NY6tk50Cxp2qZxJvJPde1gkBQLa4pyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC69EVdCOqhHwh9UKtwDbhdrXGncV0Eq3Hx%2Fp%2FxWzTDtpILd59TbOz%2BApfx%2FOW9bQ0j1qKqmFv7XIm%2Bz6EJSLxWzJkC9YEuPSYnEN7ARDvhMQQGoT%2F2pv%2FzLuRHe5qVf%2Fk02wavRym8n79hKHOmqU62GmKxqo2LxLTU2t6LCbG75giZPSQ%2B%2BADE%2Fh6BjeAEu13A9sCORloeQTZKDGZ9iS6HwDhE8OfJ1xiBeKCL34uzaNpu5ULe6dgjzdYQNxlDDqwl1eM2%2BACcSy07gPxPR%2Bb4ljaG4il4dcx%2F7tiq4ujiHS%2B83tdwwxwbxhW%2Ft%2By%2BMEVgJfefkpnl3a2xTAlW86kAjjqrlpPpZSSXpi6kP6y9QMd6bWaGDUpX6rRzH5uGcguOV5PQlLDBrUdnhYlUSd2moQpJnU09f5FbF4D7S7QwfLf5w7JkhtKWVoaORmW5Qkg1hQ38Q5Ys4hvggcCOvQ52a6IKrBaQqmeOAV%2BoeNg85cHRETu9JKcjnxtgT2n9x8aQcS4h%2BG38O2W0ObJf%2Fku2taoKmUL%2Bb8Vqf6G4zrmW5FFJp64tZL0rxIVCF54kaMWesYhhHo2PhrOF40FCqY8RIxMviFbkpKqmcm1YmsqDc9Gc0dBjrjGguTp%2BIjEf1e31lp%2B5g%2BfPxdSIwmdedxAY6pgHUfzkKoXMbPH6Y%2B2BlM%2BcNoU00SfwwNEOlu%2BZhGEEjDHEstMgIh2KFUAKjtHguOEb9IdoI9ikitZt1cpy9BWPGyQZ9JYkJY6YhEFkVK8aXAqmPXoFMWy3HiTBQql%2FZimJQ1Qj3Od%2FbIG01Cvj%2BcmmPYCIvPRzmkY3tR9lPP7t1CCFJxtKQ6ygTecy4R810uX2AkVk%2FSRqfYgGbAW3wLunbGZoDJHLv&X-Amz-Signature=3087634e0d38bc2ad6cc4e9366f142a7a7011dd9e267976df294866edd83b795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
