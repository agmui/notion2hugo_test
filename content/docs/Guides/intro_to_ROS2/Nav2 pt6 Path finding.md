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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=0cf6ec33641d7c2f14b29df17971e0dd54b058e96f39ecac14f60f5aa29dc06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=533675162625432a0cdd78e1b156703697bd46095a28f919eb6f70c3d1a2613c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=4e6865157d5c21a6f971eb38f46f8d59adbf3883da10e405928d1e1c24a6f966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=aa5e7aa92a26c1ffce9c183b2ef5fbf685a30603a409c9035a889654b06bd7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=84384c71a80c5584830938f90fcf579d44391b6ab13548a99a5077588ba67a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=70b28bc75a2b0c29f7f4bda007314172fd0eff05256b38e970e3c4769fe445ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=b21e4b8514404b053733b8baf7536d74e86b2a13e238b281988bc793dc89374d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=065ceff20a59f05152d5bdea4234db1a2c2898923bc3b55465a6e900f9172d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=689709d47a6019f6e3c9bbc6939282a499e374c83ea2d02b7ede28acaaf215ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=3425b168503e6a2160ab500bd1247c23342e3c9dc61d598ae773982239ac0534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=75af9bae179ef837a118299d58b0821965c7fc978827e990f851c07d30abdd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=aa4db2371053c7b7ee6fc1f49d8aa5547e7ad038546bb6c3c787dd142e049ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWZ3BA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTXu8VwYd%2F6Gsz%2FmtrMStKjm3gMyOfTt89pFXcZhIhAIhAMwCz8nA38%2BSybpMhi4KQQg0SpAHBrrzNFbOg6VRSLV0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtaQ1blJRITMnYxtAq3AM9N5bHvTG9OaFa4RKb1cY6jLMFm64gYA%2FgN3hZJs19pokzxEIqEU32CN0iJjWwtkvOvBhLb704t3sFtAqo6wM%2BjHtuHZ58%2BrSLrZDCkCTaL9ugLsPaqdC9SHgMPhwZsRvJFzSkl148wameC4omZ2CldP0InUQHgO%2FGlvsbsffgPZXTctteiEqQRfmC5zmnwSi75PPsGu%2B6f3L5pxo%2BlPV9bAeuQSylaTggJGPhZm2e1PjDFVMBf0I61Y8F2eeJiRxnLzaR7V7wJqfjav%2FmW3BIpdh%2FzYS4tpHi2TejzrT2qaKV6iCeS6OahtPKy2o6sKSS9hIwfX%2F2KnZSFwbSg22JOcCy4Ie7YFgTExbhApwfep7yf8cS23%2BP37y5uQvkqv6ccoKLC%2By3tVqLeQXFMatisH9xmKt7kb2SsN1hjMZUyrQ%2FFs%2FH4TETw7Zuzo0A2K9Om%2Bpu153hXE3fbsThQZ9djpd2XCBfKWqIQ3e4g7FL3PIICwc5VIPNK8OtrCXFGpd8VqyPebDcP%2FbBFSekc5pPZjSAbIWFHXn94Q6F7bXAIWXqBun9VfvafpXQ5sLTYj%2FNIU6DwtQ8NyomMcZdrWW%2BBPB6wt1%2BQSwMDixnfH5pY%2BrAt2%2B4hHTX8%2FCEgjCZu%2BPEBjqkARAmfljv4UMTCfz9tCjH6SYzuEILu4dqIk7ltxYLuFZ7UHMnlD85joWs7xasNFyyTSJKat6K3sVnLb%2BaTyQCqwg70kFvu17oM4m%2BEiGYwNEwTACIWNMXK5hNiO%2Foa6I2Iq6FM4IoIXUeBZj1vy%2BJGiEUS7hD7QiWSdLVhckjmzexEgfc9kOHvtgq8SWmlf3jbBUjEe2O%2FbRtHupbPl138Pmtizhx&X-Amz-Signature=ab33b3c9888699802271d7d6ecf29f85053e5667ac8e7a2f03ec12e467c8c228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
