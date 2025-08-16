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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=86055c3636f859908f2b0db758878949b6113048073ac195b731e182f734abd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=3fee8a348341078c7fc8b652670579f5f145e328e4ff0a098f021e67890c3160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=a7f0bc96a9d634074d138be7e2806339d242cfdfbec3e11dbb345a933cfbccb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=63875eb4f8d4c121287ba4218d4c56b497cdb4d73adcf5c814d1b900e89f063b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=54297d7530c7acafbcfeb3b7dd7d309954b80ead6ad28adfb15ed007e40c85c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=6c0854461f9e2f7194f4c6fec84277937e387ce82e4a6564033aa142e25c8c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=3aa44a70ac0c3d91c0657ffe2af35cd03cb1971c879249e790450d3f32a6cf3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=b7b73cc8aaf5c4968eecb7ecec2e8fa51bd0813fa6f56d228b48357df61cf1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=a5bcc7fd79833f12b5087970a6f2cd8a3df1dcef80cbe119d89ee13d9635b861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=1aa6d03bb7c3959e796c2f222006edf9449bcef7f03d1977ad43d8f990b33e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=9fdc1a38b24795f1e7c531c144e8a409f513e97e2c7e7607bfad532caea06f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=3a61506018d5732a985fd268005290dac204a0d4ee974b61b5791f53348ea504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTBVW44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIC9Bo0cMrrwX39swZVed1x2ch7tMjzm0lXSuerDrcfZCAiEA9D%2F266K3chl9T5ZmK23DG%2BK%2FYphdhbc%2BqS8bAMUFy3Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGqJsvj6GmNwRmMxUircA41ryeNfcxjTgehyYoFGL8ko%2B1RTNYtDr1BwBPwyIUEuJkRj9dP33aSrAl1RRVxP8pf0P5V%2F6IeeOXAH41M4slh2l4zaEIWh241FCz10tMhlTQPStNC%2FE3swQ5yg18ests9KsPcWznjRXXv9K6Mt4X86R0%2B1ERLQs3MNGK1Hq2MuJctZeXZeMTJN%2FksKkInFapMse8a%2BY3Q34ytyAXo6xJTMooAa7hWm9aBYnF8GcV98Y1b%2B3ZPiB0MtT4lchG8fL%2FDIoRvxak0qSmNEdjgMsNRxxgvkXEtfSAajEcr%2BDrVUihDtiNi37VEFu9ZxKRjroqrcaFXRA%2Br769Nyw92Fn5rzROgScmRQEc8lc8NDAikV%2B%2FtkEDAizKwKEreOgt6LzKPBhSmuL6zynGrmYFaBD7UPB%2FJ%2BDrOPfz8q1bd7NJUbZp22HxAnb%2BVIW27tx0dXIf8oD7E6bDrhufZN%2FvoVQScvFh12ax1pxnTpJgAH%2BxfOMpuha3Uvxsynju%2FixMof7jCU53gwQgEYbUCAc3KJq2wkl58MaY6vWLiLdpPtHPNcvxOKkzgx4t72xxbXn7Oz2apqgQUBhV%2FeNKngsqsPvCiKwg0ss9HayrUd5lx80AZQTr8vDJ%2BdQXHxLfQXMPqdgsUGOqUBuJobN1ReNhhakBMtmNQxLbv7EYUS0I6Oy41ffCoTGywR8ebh0IaOE641jY45t3HcrO73z3cCMmU84rcBzwBzMlhaSjpM69H4cPJk12hUcpzTas%2B5uMf9%2F0%2FliJwFSN5iHacLXmbwvNlbbG91AAONNnIlVXO%2BzK%2BNpiPyyXNyZw3ckOMVg1EzKRsH4BnKdeCpxba3YM0JjOrq52h3SNWG%2FSWK8wP1&X-Amz-Signature=c59a67f4e0509150eee4accd499c030e0ffe43a45aa0136fc9346274c9839c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
