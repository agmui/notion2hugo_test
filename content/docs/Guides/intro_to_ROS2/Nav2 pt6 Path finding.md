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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=d144ba2d5e577449439e3862764dda1deacc8fed05f685a3b0673379b8f5e858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=1971900008735fb1f22402478cb5446b434ee12261b9975d8a23de503153a0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=1bdca55f5d1496cdea27aec1803e6df82dbf3f0823c6ba705879666e8f4593be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=dc24d24ca49c77e9d871b439b9dbad33a783f4a2c9cc8451a6f4d9d3cd86e04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=35ef7b166bc7f7d1cab235391f8b572ff57e6c5378af5e404027884445112fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=b3455caa63af162b56d5a81842f11b9b29f37bb1d0807ed509d3bc12f798fbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=8ba73934a33f60c72c90e4614130b22af3d4afa9271f8663dc3c911e6e5d2d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=dbbee029b225d410bc89cbe02bb3e845a5d3d3e09c7318795b53c55172db9471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=11965d5d261c48ce3ee59c79dbdca5a7b1533d6702193e7ddd45e2bfb669f29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=0e48eca40416910fdffb96cc93405622397e18b71a219761fd5ea2e8c7a7c9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=41a3aae9071ab38ee2ffe6427129847d8ea792b211c3043c976e3ae7f0bb6630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=c5eafb14fd8364fb76fa2276a442592ee5dc23bc5fe4796d73c71b75ef16c441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2FHM27D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMSa8XXiFkq%2BKvbr7WoJOW6uiAPPvYcELAbzbmzvIE1AiEAiMCQU3O5V16Qd61A0A5NpbBT31HrQCYDuCrmDSDTaA4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMhZqzfgTLkQCaQDXyrcA2QFS0iqTYofv4sNujlXBH%2B1UfOxG3S67%2BmcaCJJZ5yumktDzelLeRBRencDTHxHQ3ceZ2kAX3KmYMLhkaAAAYCi%2BjARCRmyPg5QakwNaMlujOC7AfK4D6cPVcDlWtqwavKRZJHLfRS1qow01sBJJNYPEPcZVIyEuJcYRkLi4cQBpX9WC271dwwzQ840LvXOBCIaIuTpNfTMM%2F%2FvDjUuNF4CXjqIrJIgD5TP0ofz1ZAqcZJhQPqAsqqRY2ZeGVCKMcsx1b5%2FUWnCLj9u%2FavkiSHb0P9UdRT0Etdtxe2PEVKXO%2FTJ40hISLyTE%2FZ9Yg6tN23bQS1VQ9fAgKpEq08XD3lj9J3dFDGFeWj8F%2BlygeyAo7YlDkI8PEmi2n0978zqkPdxIfMiixuMGxPGC6nBVTGd%2BMg2OPELvSMjqa%2F7lbRKAzhZOZVXvruhvkRFU3o0EQZNaWHtBcnJoyB89E87C3NCEjHKBQG596lUDTXopokhWzZACQYNWYfqUlN46EZSqq7ItNQ2yROQw5NhyjUtRj3XLxEqEFCk6PwwEl%2BKO6y5Y%2BQArbZvLhkbMb9lI3bUXaAmqPYNIPVpOmY7S6oVzJfp%2FzKN%2BXi9VmruLN1ScdrWy8B49CfSYYWLFqjXMI2eucQGOqUBDm%2F4H3bBEufbNl8A90P9%2BskxNpl5Q4W%2FPS%2FVoyeCCtbBGFwxeRMxmSkaWpS2XvCcEXPeNA06bT2sMfNdiuel1bDyYq5e7ovuUkEi1WBLql0ReCSrP7vMWrJBDQjmr7vFI6am1oufy5ZrKZic1OjX281HpQxz9G6tqj7j%2BP7HP5cs6NPN1CHf16RgEjygmcYJnJa7t5yarliFfAO9XKgogqQhf9l9&X-Amz-Signature=dd15c9b35578e065b2de8e033fea7b44704e79004208cb24a0e2addb3201959e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
