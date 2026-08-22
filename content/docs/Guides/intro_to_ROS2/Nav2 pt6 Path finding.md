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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=29067d6b216bd3cabbe9ef139d7752352d9de8696f212a56933fbd549cfe032d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=6f21c6cbaa6a38729ac5b6010c625c9704796e6ca4f0d170c27182cd8fd5a690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=16d5d3074a907b0ddeb306b155c6b60fabba2b2ecb3cd0f01e867b95dc8f9ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=124dca7c9a8aa8156b2dc5c06f5f1e094b71a6bc58439b3a81bf1def4c790c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=9091e429d1f7e287be9f318f17314ace2428150b8c2f833e08520e6b7284a5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=07c62cc8d7fbc2b2cb451ecc1e4a6246698e5a59c151f23a4ed4c0fec0dbe3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=7490016744952e3372ebc3d3cbaf4bedc39348cb8ea90638084aea3ce159402c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=bb4671988ff330c15c2f5d1fa0d369709e4cad4c85073bab09c0f74e137cc94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=8491936af701093ff21f128fbd6fffee125bc41a8b8bbd4525fbc9b4e5895f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=bb95d063be880c6cf4903b09793a57c41faec4e9f6545d2aeef2d16503682d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=5190db901a2637d2374fc55aebbfda5d659c05b8ed6b2bf1401fc164e1576521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=bd2335e18fc1377fa775511efcfabbe03d13980b66fb8ccf446f5ea7fd9ce296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEZSDO4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0O3nwVJdni5DdjO8aUhMxrM%2FYZWpDhxnJlCZ2UE0hVAiBIN141ftnZUAKUimNclyXA9j604lTavtif4w%2BJVHfHjiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcMqWzAfpok6B81BJKtwD4dROZXXbXowEBawxAuWpJytMY7yW8iljE%2Frlkv5k%2FnL5gwJbuj23l491L7sq0QyJqdHKjWu7Tfa4XRvAvWqhyRQXFc8HKxuyG4SZFG0rWqlOms2A5aTVUmiH5VaVpaot%2FC7kzw%2F63bjulwrhOhwNFwKCeBQJGkpiBrUp5Pb0mAGvjeiOfS%2BWWzzjzIj%2BCIrGWNWbHPouY8MIj9CkUBlSec0fMJrlp2FgiIdBoaXsf2OLJlHA%2FX1kQEF345FPBP3XlPGcihg9RDBr8blj1%2FUmKv1LNc9QxonoENra7Zy2O8sIg%2FTVoqPWOa9dUyGfWRyR0TEiB1PqOuNegvetCXQ8K6bTrMU0ZCSLNlezSIZkOfSM4vHoaTdOltOMagNqByXeIXYa5Ud%2F%2BKjLxuHWuItqy5wHcDCfe3AJoAqwvQQutiUIrLKuZPkNPsDs8KcmDdFB%2FxJakeQoM5k0M6QMfaw27uo%2FjC29SBhHbm41KXeYNgHD9HQ8L5SFwQRN%2Bi%2Bl%2BMOLNvSZQkTlYrqwYHIKwSAz5e8XEV1EqFpXFAPeofRkyIg22mlR5NI0J860SAnMSKRlOR9eNcYRspq1%2FdWvYoefY2SogvvDiB4pQM4N2Pdjgs9J0newdY14XdSwKj8wosKj1AY6pgH7pNJCI9lkOl1zm2Jz2lS9ZGSP2RqECac%2F%2B752E%2B41bIySvuXJ56XCiZ49bzASK%2By8FXnHo84XZRDfj%2B7%2Bzg9M7uEmafltMy%2F1rzg%2BoQS64p%2FSmVvt66NHy36%2BLDtoa8YqcoLrWePA3jSoTJHTz3IvCXIoUdF04mGuUow1L9hbmTDvEfwiYwU0BS6AStZWdXDScfpo5TwS8IqJxf%2Bfy5IQDwFqvpRJ&X-Amz-Signature=656af2c194a627819102e27dfcf0ce728a34c660d0a9dbea188cfa14aed298de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
