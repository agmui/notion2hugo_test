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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZSBDWD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDqlD%2BLbkqe%2BbIMJ7VsUIyQpgRWkriRo2yb1wdKMyJVMAIhAJprggVyL1DruKrr6FO8lyRrfOT4uKXILlI5cOlAzujxKv8DCEsQABoMNjM3NDIzMTgzODA1Igwkrf2F4VpqpQQZzzcq3APLsFCgqW%2BIDpDjL2MsVXYZ2fzvropddxwwFM2sJ99e93zwVwPNXl2Oo21JTiweQpaTdQRy%2BDLsUHwdC7AkMfxG%2BPd%2BBqWlsvKdz1Zf0E7ueD%2FBkSV4lPzZnRW4Tas7k88jyvQJYGP1lqW9r3EnhASuPsyHPQBsUOLBP8khd2ssdwUm0F0%2BxY1AU8SNMR34%2FwHsXve49VhYjrzlqA8Ca5amIUK2NNWMd2ypnr7K8mAqXTxGuoJSNcpMVgY1OHenk%2Bylft53%2B2EZVC5P32O0oJl3TBMl9hRPx%2F%2F%2FwTh2akM%2F8wpK6innonE3XkzoP5rrii83OlPZyR6VAzAa4TV4kMyXdQ9VslGBBq5yC0sBZIscOSiZ4yxkC3E5MRv5no3NcKSz6LoXG0O2NtgD44uV4giBzu3w8PNaCXVYqrr1IYqMB0GG8OkKaCx4NrCeQoZWvjslIhNSigjxYTfs4GaTPvtgt44MArV4wHzmDJC2cjLxLynao2ZdjsDN3K6zzcZtjdy7KqJiFglv0Hkw0rQuHmYTuSpoTazPLsXEyuODPXeIoYxdH8KUil2b8TVP26A%2FH5B3DivqdYPTeqc%2Fhc4WwbQVrFBV11gzv57NX1mMHYMhMlpdJEcEfnHn2RUXSDC5ho%2FEBjqkAdDw5vIRvgx3RKxPaex%2FFiOYtm0De8vFPBJj7f7vKAq0aZUUa5pPkgY9wWDEo%2FZkTOa4Rb1UYuDcUk%2BvC1Ub%2F1eX%2FxF6EAAdKp7QA3UE0iQG9JkhU4CZrSWbfsLCO%2FUs5TK%2B8pRM7B6q06YOk5qWOIYyBfA5gLsTcW3UOQ1j6y1mJn0lhuViESvDvJZBl2q5FwN4m2U4B6bqmA%2Bu8U37bYeR7x8V&X-Amz-Signature=c64db8b61f62dde9e305a813d0570c2f9c6fca863ecc40c8c550782b42632ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZSBDWD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDqlD%2BLbkqe%2BbIMJ7VsUIyQpgRWkriRo2yb1wdKMyJVMAIhAJprggVyL1DruKrr6FO8lyRrfOT4uKXILlI5cOlAzujxKv8DCEsQABoMNjM3NDIzMTgzODA1Igwkrf2F4VpqpQQZzzcq3APLsFCgqW%2BIDpDjL2MsVXYZ2fzvropddxwwFM2sJ99e93zwVwPNXl2Oo21JTiweQpaTdQRy%2BDLsUHwdC7AkMfxG%2BPd%2BBqWlsvKdz1Zf0E7ueD%2FBkSV4lPzZnRW4Tas7k88jyvQJYGP1lqW9r3EnhASuPsyHPQBsUOLBP8khd2ssdwUm0F0%2BxY1AU8SNMR34%2FwHsXve49VhYjrzlqA8Ca5amIUK2NNWMd2ypnr7K8mAqXTxGuoJSNcpMVgY1OHenk%2Bylft53%2B2EZVC5P32O0oJl3TBMl9hRPx%2F%2F%2FwTh2akM%2F8wpK6innonE3XkzoP5rrii83OlPZyR6VAzAa4TV4kMyXdQ9VslGBBq5yC0sBZIscOSiZ4yxkC3E5MRv5no3NcKSz6LoXG0O2NtgD44uV4giBzu3w8PNaCXVYqrr1IYqMB0GG8OkKaCx4NrCeQoZWvjslIhNSigjxYTfs4GaTPvtgt44MArV4wHzmDJC2cjLxLynao2ZdjsDN3K6zzcZtjdy7KqJiFglv0Hkw0rQuHmYTuSpoTazPLsXEyuODPXeIoYxdH8KUil2b8TVP26A%2FH5B3DivqdYPTeqc%2Fhc4WwbQVrFBV11gzv57NX1mMHYMhMlpdJEcEfnHn2RUXSDC5ho%2FEBjqkAdDw5vIRvgx3RKxPaex%2FFiOYtm0De8vFPBJj7f7vKAq0aZUUa5pPkgY9wWDEo%2FZkTOa4Rb1UYuDcUk%2BvC1Ub%2F1eX%2FxF6EAAdKp7QA3UE0iQG9JkhU4CZrSWbfsLCO%2FUs5TK%2B8pRM7B6q06YOk5qWOIYyBfA5gLsTcW3UOQ1j6y1mJn0lhuViESvDvJZBl2q5FwN4m2U4B6bqmA%2Bu8U37bYeR7x8V&X-Amz-Signature=a54eba5df2192f87fdb38ee48d59ec844bc307f9beb06adbf17a0758997993b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZSBDWD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDqlD%2BLbkqe%2BbIMJ7VsUIyQpgRWkriRo2yb1wdKMyJVMAIhAJprggVyL1DruKrr6FO8lyRrfOT4uKXILlI5cOlAzujxKv8DCEsQABoMNjM3NDIzMTgzODA1Igwkrf2F4VpqpQQZzzcq3APLsFCgqW%2BIDpDjL2MsVXYZ2fzvropddxwwFM2sJ99e93zwVwPNXl2Oo21JTiweQpaTdQRy%2BDLsUHwdC7AkMfxG%2BPd%2BBqWlsvKdz1Zf0E7ueD%2FBkSV4lPzZnRW4Tas7k88jyvQJYGP1lqW9r3EnhASuPsyHPQBsUOLBP8khd2ssdwUm0F0%2BxY1AU8SNMR34%2FwHsXve49VhYjrzlqA8Ca5amIUK2NNWMd2ypnr7K8mAqXTxGuoJSNcpMVgY1OHenk%2Bylft53%2B2EZVC5P32O0oJl3TBMl9hRPx%2F%2F%2FwTh2akM%2F8wpK6innonE3XkzoP5rrii83OlPZyR6VAzAa4TV4kMyXdQ9VslGBBq5yC0sBZIscOSiZ4yxkC3E5MRv5no3NcKSz6LoXG0O2NtgD44uV4giBzu3w8PNaCXVYqrr1IYqMB0GG8OkKaCx4NrCeQoZWvjslIhNSigjxYTfs4GaTPvtgt44MArV4wHzmDJC2cjLxLynao2ZdjsDN3K6zzcZtjdy7KqJiFglv0Hkw0rQuHmYTuSpoTazPLsXEyuODPXeIoYxdH8KUil2b8TVP26A%2FH5B3DivqdYPTeqc%2Fhc4WwbQVrFBV11gzv57NX1mMHYMhMlpdJEcEfnHn2RUXSDC5ho%2FEBjqkAdDw5vIRvgx3RKxPaex%2FFiOYtm0De8vFPBJj7f7vKAq0aZUUa5pPkgY9wWDEo%2FZkTOa4Rb1UYuDcUk%2BvC1Ub%2F1eX%2FxF6EAAdKp7QA3UE0iQG9JkhU4CZrSWbfsLCO%2FUs5TK%2B8pRM7B6q06YOk5qWOIYyBfA5gLsTcW3UOQ1j6y1mJn0lhuViESvDvJZBl2q5FwN4m2U4B6bqmA%2Bu8U37bYeR7x8V&X-Amz-Signature=5a16aea2f4c260e0179dfd6426f310e744aaf3a25f67a80557507669a4a3c3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZSBDWD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDqlD%2BLbkqe%2BbIMJ7VsUIyQpgRWkriRo2yb1wdKMyJVMAIhAJprggVyL1DruKrr6FO8lyRrfOT4uKXILlI5cOlAzujxKv8DCEsQABoMNjM3NDIzMTgzODA1Igwkrf2F4VpqpQQZzzcq3APLsFCgqW%2BIDpDjL2MsVXYZ2fzvropddxwwFM2sJ99e93zwVwPNXl2Oo21JTiweQpaTdQRy%2BDLsUHwdC7AkMfxG%2BPd%2BBqWlsvKdz1Zf0E7ueD%2FBkSV4lPzZnRW4Tas7k88jyvQJYGP1lqW9r3EnhASuPsyHPQBsUOLBP8khd2ssdwUm0F0%2BxY1AU8SNMR34%2FwHsXve49VhYjrzlqA8Ca5amIUK2NNWMd2ypnr7K8mAqXTxGuoJSNcpMVgY1OHenk%2Bylft53%2B2EZVC5P32O0oJl3TBMl9hRPx%2F%2F%2FwTh2akM%2F8wpK6innonE3XkzoP5rrii83OlPZyR6VAzAa4TV4kMyXdQ9VslGBBq5yC0sBZIscOSiZ4yxkC3E5MRv5no3NcKSz6LoXG0O2NtgD44uV4giBzu3w8PNaCXVYqrr1IYqMB0GG8OkKaCx4NrCeQoZWvjslIhNSigjxYTfs4GaTPvtgt44MArV4wHzmDJC2cjLxLynao2ZdjsDN3K6zzcZtjdy7KqJiFglv0Hkw0rQuHmYTuSpoTazPLsXEyuODPXeIoYxdH8KUil2b8TVP26A%2FH5B3DivqdYPTeqc%2Fhc4WwbQVrFBV11gzv57NX1mMHYMhMlpdJEcEfnHn2RUXSDC5ho%2FEBjqkAdDw5vIRvgx3RKxPaex%2FFiOYtm0De8vFPBJj7f7vKAq0aZUUa5pPkgY9wWDEo%2FZkTOa4Rb1UYuDcUk%2BvC1Ub%2F1eX%2FxF6EAAdKp7QA3UE0iQG9JkhU4CZrSWbfsLCO%2FUs5TK%2B8pRM7B6q06YOk5qWOIYyBfA5gLsTcW3UOQ1j6y1mJn0lhuViESvDvJZBl2q5FwN4m2U4B6bqmA%2Bu8U37bYeR7x8V&X-Amz-Signature=6a91fe73a68697c9864fd9d42e4279f66976c2ccad38125353bbd9a6c26c3eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZSBDWD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDqlD%2BLbkqe%2BbIMJ7VsUIyQpgRWkriRo2yb1wdKMyJVMAIhAJprggVyL1DruKrr6FO8lyRrfOT4uKXILlI5cOlAzujxKv8DCEsQABoMNjM3NDIzMTgzODA1Igwkrf2F4VpqpQQZzzcq3APLsFCgqW%2BIDpDjL2MsVXYZ2fzvropddxwwFM2sJ99e93zwVwPNXl2Oo21JTiweQpaTdQRy%2BDLsUHwdC7AkMfxG%2BPd%2BBqWlsvKdz1Zf0E7ueD%2FBkSV4lPzZnRW4Tas7k88jyvQJYGP1lqW9r3EnhASuPsyHPQBsUOLBP8khd2ssdwUm0F0%2BxY1AU8SNMR34%2FwHsXve49VhYjrzlqA8Ca5amIUK2NNWMd2ypnr7K8mAqXTxGuoJSNcpMVgY1OHenk%2Bylft53%2B2EZVC5P32O0oJl3TBMl9hRPx%2F%2F%2FwTh2akM%2F8wpK6innonE3XkzoP5rrii83OlPZyR6VAzAa4TV4kMyXdQ9VslGBBq5yC0sBZIscOSiZ4yxkC3E5MRv5no3NcKSz6LoXG0O2NtgD44uV4giBzu3w8PNaCXVYqrr1IYqMB0GG8OkKaCx4NrCeQoZWvjslIhNSigjxYTfs4GaTPvtgt44MArV4wHzmDJC2cjLxLynao2ZdjsDN3K6zzcZtjdy7KqJiFglv0Hkw0rQuHmYTuSpoTazPLsXEyuODPXeIoYxdH8KUil2b8TVP26A%2FH5B3DivqdYPTeqc%2Fhc4WwbQVrFBV11gzv57NX1mMHYMhMlpdJEcEfnHn2RUXSDC5ho%2FEBjqkAdDw5vIRvgx3RKxPaex%2FFiOYtm0De8vFPBJj7f7vKAq0aZUUa5pPkgY9wWDEo%2FZkTOa4Rb1UYuDcUk%2BvC1Ub%2F1eX%2FxF6EAAdKp7QA3UE0iQG9JkhU4CZrSWbfsLCO%2FUs5TK%2B8pRM7B6q06YOk5qWOIYyBfA5gLsTcW3UOQ1j6y1mJn0lhuViESvDvJZBl2q5FwN4m2U4B6bqmA%2Bu8U37bYeR7x8V&X-Amz-Signature=f75b8e4d9e6f0e541ffcb8bc98e6f0f00fc949939cb70ef0048284edfecb2caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZSBDWD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDqlD%2BLbkqe%2BbIMJ7VsUIyQpgRWkriRo2yb1wdKMyJVMAIhAJprggVyL1DruKrr6FO8lyRrfOT4uKXILlI5cOlAzujxKv8DCEsQABoMNjM3NDIzMTgzODA1Igwkrf2F4VpqpQQZzzcq3APLsFCgqW%2BIDpDjL2MsVXYZ2fzvropddxwwFM2sJ99e93zwVwPNXl2Oo21JTiweQpaTdQRy%2BDLsUHwdC7AkMfxG%2BPd%2BBqWlsvKdz1Zf0E7ueD%2FBkSV4lPzZnRW4Tas7k88jyvQJYGP1lqW9r3EnhASuPsyHPQBsUOLBP8khd2ssdwUm0F0%2BxY1AU8SNMR34%2FwHsXve49VhYjrzlqA8Ca5amIUK2NNWMd2ypnr7K8mAqXTxGuoJSNcpMVgY1OHenk%2Bylft53%2B2EZVC5P32O0oJl3TBMl9hRPx%2F%2F%2FwTh2akM%2F8wpK6innonE3XkzoP5rrii83OlPZyR6VAzAa4TV4kMyXdQ9VslGBBq5yC0sBZIscOSiZ4yxkC3E5MRv5no3NcKSz6LoXG0O2NtgD44uV4giBzu3w8PNaCXVYqrr1IYqMB0GG8OkKaCx4NrCeQoZWvjslIhNSigjxYTfs4GaTPvtgt44MArV4wHzmDJC2cjLxLynao2ZdjsDN3K6zzcZtjdy7KqJiFglv0Hkw0rQuHmYTuSpoTazPLsXEyuODPXeIoYxdH8KUil2b8TVP26A%2FH5B3DivqdYPTeqc%2Fhc4WwbQVrFBV11gzv57NX1mMHYMhMlpdJEcEfnHn2RUXSDC5ho%2FEBjqkAdDw5vIRvgx3RKxPaex%2FFiOYtm0De8vFPBJj7f7vKAq0aZUUa5pPkgY9wWDEo%2FZkTOa4Rb1UYuDcUk%2BvC1Ub%2F1eX%2FxF6EAAdKp7QA3UE0iQG9JkhU4CZrSWbfsLCO%2FUs5TK%2B8pRM7B6q06YOk5qWOIYyBfA5gLsTcW3UOQ1j6y1mJn0lhuViESvDvJZBl2q5FwN4m2U4B6bqmA%2Bu8U37bYeR7x8V&X-Amz-Signature=2a33cbce1faad04ee4d662f2b29f917c7b479405d584530aece391fc0ca27a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
