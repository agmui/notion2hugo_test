---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=5b43ecb74842a31c55803559fb420b1209ed77eae76f677b92faa5bbc040b2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=f33ec48e840dcc28aac83a9f03e00b51059900dbabb862f8e90fba3ce83bbf47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=4b3ff861036a95e9e732a246ed19748bc2a2907c7ba7edf53ccacf6f93e05041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=245a3aed7bf28713ccf4c40e49a528f101eabf67bf5258c1bc69b258dd6fd924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=c8bee74afe0a47bb32da3af0154c4b8c1e699204acbddbb461023b9479eea0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=4f282270e9c9bfa0ff74a4ac96e663e263b88485a943ed45b12f527eaf430859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=e430fbe28d0b44912d8e23c545db73520fd81478a2678b66f4c7c6b592ae99d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=c05b41a3e34fc89de1396f3d6a1e563e9afd171c8f191ff1661bb0cd96bf3cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=ed3a78d0535129e7d1a91e6984d8b0dab3c8484d40fffbf165043da55be4b3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=f7a20a30fed9fcf3240665db655d0df1018c75f98f27568df5fb85f664c36af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=120e3058040e00a0411f846b98d803f114f7d4d348e46b928414f23675967929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=35b16cd78ee6bacd23c7607828826b737ed5b78b76bfd4c956f65f3e2cddf328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBBDWKRS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC6O%2F5zlsCa5yOuZLX2Q%2Fwe10b%2BrQFLhlS4fTm10qDtGAiAyeN%2FYoQAE3pjizD9JBx3G3uOQqvE12eN4CXyk86neTSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM7DemoBTUDsK02QRdKtwDgGk0oBP9WBk%2FZgM7MbqwpO5SNJ4KauanRkcVWCuELvy%2FAx2Scvp8HG3AnS8wjhIBIJlhfDaCbeiCqC3xyzvE117oaBwRiHq6XOnATe5KBJNSIdtvOU%2B%2FawwUdGVA4Y3K7j5EL7s7KFZeiLamqYAf2t9YHnX5LPktw7tpqiczFFf%2FbNuqylfrGd7m4QGzuON%2BhcJUPnleXwb630PJhS%2FRr%2FNCc208i5790Xu4edLaBkiKKi%2Fg0N0VWxtOeSBLg50WjztOXIB6VCh94fcRzTimakpjIeVEalszmEh01pTbZ46U%2FIDLfv8PwU%2FhPElMqHwmtJD2sE8kwqrCPNhcCjecB0vt0YKxWsHLdKvqJ2uXZHMvek2OXh2TOQWHnUfliasmaCQnIU3bZJskKTeHg4VcLriBiAmR4pk%2Fh03H%2BW2CZSJSIvoUr1A%2BZmQcinO%2FeuCmpBurc%2FH%2B8dAIoYj14RoNBr9GbVnpAVDY4bsQzqSQwpHTHMU5yffC1ndDXhlgHIKNnE8g9ScXAwB3CAp68v7A3Qk3ypru2DfwiqTPzc9XgqLt1MMI6jJ6WG7pTwdODReGgZDs9%2B6dnYaP7ev29TjEX4kwl6fYdnOdolFBD9%2FWyQikWPlWEY8f7yFhUfMwuoPIxAY6pgEtuGvels90Fbfn%2Bb1pAi1UecToQ0LMN%2FmqGRooBfTcIotlvu%2BTPvuSvzG6b9EI%2FbI3fRGKtHxD9%2BQByzvJ5F7%2BSHmdUbuRmKwg%2FUXTq9nqr5poe9r1hNfwmaCE1tDVBQX5zZ3ATMMRo3sWA1bQdG0zBb4qs7qhNk5646QTeLJkFmfGGxYSVyx8GqPuyhgkp%2FAuekGdU1s5wNgZCPWtnOtIojQe8gJx&X-Amz-Signature=7d3a3c15701e0abfeb22511da09b1f3a1b19ee222e4b3b13f34a0ae8e829864d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
