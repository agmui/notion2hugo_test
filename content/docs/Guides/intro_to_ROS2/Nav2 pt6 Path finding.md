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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=602bea1e178276da9f1fe7d9a1724557499b20f2864de9a55bbda295dc02347a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=2bb8026d5138daab75e35cd8484f3e78e3d355fd3e73a0909be35e73dd236824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=aa318815b9672694dc1355257d502a8ed9218d6e28ba5a1fa051e92b882eabeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=78f3cdf0f8b909f6ba0e1b7437e6d00602e10ef7d81c01b8f9c45046240d7164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=f16b36b4e4aa1208ae7ec63b7dbae622b245c9f13ee129115b50cc760aa96415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=c120c2ba9aad8efeec1963018fd991697504557cdf8b6e26b4683e6021d9f19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=85c5d0a238cc9b741e9248f3853e060c4bf98ea49a5c3ec1d4083ee96803e940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=9ac7e5fe3ec5f355efaf8e184f599c2e651db3f59c8cb5302b01aae518472bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=590279c2c399ad3f4c690807cc403e1a58eb94d2285aa1b06b3fffd62e91d5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=82cd4243d225cf18b8377904cb2955b30fc336bb2ef74b97e8d89d218e1f06cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=af73eaf72c227b416493a41b6bdb01713b0787c609f134cbcf50af5bdc5875ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=8597b8826da864aaefd9262bdd64adc9a3ce8a75d65fef8f4935849ad773aa8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AC24KDJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBf8BEV8k%2BB2oB6F8fFYu2dQoR7Rk6FQLTi9qm7GrS6uAiBV8rSA6ZhCy0MrJ%2Ft2GjZbATgj79C1Nq2aRhpAmr0jgyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMCrRrkM3fn0XYHcR0KtwDqlNeXQDw9z5pg7VQsuZMDlzQJE7mK6Xom28FY%2F68MsOFcv9DdJ8rOElLryxDwskkBKW9F3yoRgCxEU5iZ%2Ft2DzS%2FuVyHNjbYny5n4%2FUWX8ocj3Tgxg12LCFERDz2L2B7xwc4SoQKxwD74dm03YwpehRDUxDyLoOd%2FIVusN8m8%2FI09GsR0Abo4qKcTVJM60kpMwczLLuuZ9j%2B1zj7nfbID1v2zRAoOZBp6NyiXSbHG2t%2Bs8n40MOwgoi%2Bjybk2AMVBTDW0TD7uQ1TEFUd%2BBaBjvD6agDuCLqOoOavvgr25Xz9p3QBBWYT3QZ6BAOdBckC2FR0%2F%2BIfTPZfetyaY5oTy6xD%2F8072s6GvGXTJkcIOvIpj1wwtXcsr2QEc8vYGGJkkHKq0ZEqXAKCGSQM%2FPuA3WUxgAU2pqy9nA72qkWPa42pcAk9tAnbcYE12M%2BLZ0Fb%2BL7vMR%2B2A1OzV6cMs8UpfKXPCNh3ycc%2BD21cr4KnQgTdNSvNsjVmgNHhCcB7IBZi4qUB3GshU%2FT%2BSpMR9cCyy9sOd71tSsm%2FoyJACghjImKjZo34Z0PcF7Rl9okX8T7d4FcdWbJBF6ZMyMzzJ7KqqY9Q247FNFfm8H0xjeYGwv3B9lPC2r4nZ1JLa0ww0JGCxQY6pgEk%2BK4syKcFM96LPxeQwupVbkGpb3jDeNQ2z0L98ZZgwasLLkrO%2BKGHw0Vyb7BiSUAubSlTXbLroTci1HBBTIAGH447jO4C3rE8DD2iIvyPUTEhGZglIj%2FqRn6x1H1jIDr285YZcXE5rgKUevYVtipm86LMSJVmMecnw9jSIBxgAX1jlNV%2FUeyZzkKrs2komXknXPlzrQ0KKRGniBhsEXx02S%2FgHZUh&X-Amz-Signature=96d20706b18e4211d5c003aa5e0a3d49c501804cf29046b461aecaac7e7ea564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
