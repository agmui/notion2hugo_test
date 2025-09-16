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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=b72a08f5c46578e9fb8fa5bf82ec97883b71c310bd94e10babedd4a20c9bbdf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=c56c378ff4bbf32ad0d8f6a4967d02b9cce22e8a1122064731a6e3c7cdfd2375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=474121582533fb1a12454852586ff266a568bd51b1d3b23e8b9df6694f0efa1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=453ebc1955ed7c006f71d64b5eeb8f786a49fe079d461b53e9c15721f0caf045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=0543067f3ba0969e372832a47d5011c9c370169846639526f8d9c6d60ce78b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=9d371e16c3c1a85787c6c278467966c39a0f7003d505e19ff8543f18da31e006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=60341096d71b19d3cd0015dc12a9f068e2fc776d1a598a068f46b28ab1215194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=1a7cd5d8efed3a194d2c0f04871342fe429997d163e077c744cd5cb62773e623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=9be5dae9a8248f0d51d8983a91a9aeec562f4082b934d13b3d80c002830e5cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=f2f57f4f9d1dddd7e81edf83c776149f808c2c2c3c95b38385bcbffd3a32c707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=2266dfd1419cac83445e6c8a56df52448a713135117237220fc2cb8593de3c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=5811b50cc9a76e275e5686a6105295e83ad5e75d7966ed5f8d04c6893f42b028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDZGP7I%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIHCXSKKSaCLKooGUh%2BPYrzgBRDOD8hbHRHIgqEY4klNRAiEAhLNzNJ1Ra8Kbmg8EJdTuiVhFgNQdbZKHok1AHJJS69IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBf849MlIKVw%2F9GI9ircA8DGUjONlugQy3vG7D%2Bol5AMJVeQ6B1759TNd57WTtRKYSdL7UiBw0IVJ5u3WFMtN%2FGeyrGsJSpEDgqy5ExvzqOgoD8PVt8zjADBmd6wvhnGx0As0GZG%2F7IgqirHu2Fklz8kgRpq06YibqoC%2F245SofzvGqnt884HeftxqcFmmfG8xiT5jpjXr1THwJt9nE65JeARza3tHb5fEbIbmCica0lBFsQRYeJWAJKjAmdqv9Hre1WRgeDWYozTl5yP3U9WAdqMnQZ%2BkmxEOXZCPZur%2BgIKf7U26hMftnxK8rBRe36Oa2o1l9lKXPM%2F36ciAzPusz1rG27bow1IAqKBcCKuq3aSU2H9FJjB3ykViSOfx2zjTQR8TjXdjybEeSyV2t7Z6dsSvfmOESl4pnOpT85Jqp3Uzw4Hixd1V5gVH49KjHzHz5UWp2mi%2Bd7RpydOOtty76iJBYqMkpOzjh%2BktRsNjAhvDcjp40ZCx3yMo%2BQuQgY1SiM3%2Bq0MPhM%2B3T%2FILQNTJGvgaPn8bHgAcv4f%2FOAfaXfN%2FViKI6AP7Y9yA2nh2wKpP4Q%2BRVzU6QQYuzPATLGi02799qMSwnV3w3xe7d4KQJsZ31A9Obb57hjmDTYRCIM%2FQyBvvXT%2FbhKyrj%2BMLPwosYGOqUBnA3Dy84rsIWHNc7MoLS89OJczZjUnHVGruEWSalxCjwgqv4AQPz7WatCRei%2Fzw2jKAy8GSowqWE1t6RmepIcEEeLkIHLlY9CcNkm2lPRVuoiLe%2BKLkjsG3VNY7b0Q84dCFiv7KHGPJD3rW27MwcWNz%2Buewoj09IZGWZ2kiVJqY%2Bj%2B4YPufarETTeafPlJPynhfg73Jjwx0wg5jdff%2BiaZxz%2FTcIk&X-Amz-Signature=a7009b6f489a6b762ac292b874a3324cbb4782f9bfbfe74a43f0ab7b5f4a8752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
