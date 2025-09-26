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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=3c7ce755ec033956cf12c825c1ec9403279e9e73350cca343669eb0c7ef6cfc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=af9545591dd6e6737dff68c376709d2fa6284256de881da341a4b9d73bb4f2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=0b06e7e243f08799cfd5d266dd17eb1f458fad93c2cfb65a9982c7894d1bc76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=7108189284ddd8619ccbc35d9f5397c7118630a3316cff3dc172419c19ba4bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=5c21de4be5ce8ec50f1936af66335fa658387e33a50b63749fe5a10188ff138d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=0ffc2ad89b3b997214114de6f229c022a030a5e8220c0eee2cc9aba0d5881b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=c527e76a98a8c7fa96c6656d1e9b860c189b4665ce189b5ca6e5675f05e3f5b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=bef41f6a95da16aaa083ebc196ec17603684ee7deaf0d89a1580ba77fb525670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=78db0a0436fcb0e995e1e10a5cf41dd04e87f62347728f3336b608a2ecd8fb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=3a2fece7e95ae4f39351b39ee737e2bdf4c413bc17e4b5e3d109e0709ac8c704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=cbdeec595c8f6d9241060286877a27c4f8943978036504d22449595c6ca71478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=52e5abbc9955f439d33d667ccfaaf1905d1e52e60e9789aecf8c6c2404d313b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JPSMZK%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQYg3wJ%2FrC4yQ2cOfIUN27INSgpWE5ayvb238VlnYVyAIgARGUs7vvvBH89DQfis50yr2TEIN86jXQSyxqGIYQTAMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXwacAqLRQuFhNnHyrcAyPaLn%2BKXa%2Fo1oQjusr8bem4nJf2bfrbt2GVJ9lxKgHbosyAIXVpWRZZlzzRUpbhoEH3pmsb4uC2hkfOpBA7V%2B2peaVb1MQqRxz8ypiFaDKUkwUiLDiMsPEkfiqarTxy9J02jFX3%2F%2BY7AgTq%2BHQL0J7hOXCWlCrWPdggqnwy3RTtSJeDcuuAxkDleTX8X9h6ReroIE%2FokozVzG%2FCKK1lf4jeq7bER5k8YCOiDslt7y10hhDHvuy9aSFjDaDYccRlwjRQAGc%2FV47SsixPSKUXCyOzkZ%2F20o0xq5EVfsE%2FGZpixouBf7i6CIwjZ%2F6nSBGRl9wG4QQ%2F1MARttWOyOK05DWcD7GkKzH4si7dkYGZCfThg5UxI22Bvc54WucwyhYqvhSTIdSbjqRK%2F2ZFlSzan2aONoLJrQOd70%2BV1tLqahhtBif6Ts73sLw8vACKhiKjs%2ByZ%2BkSQmPlPoMc7Y17ijYvgLNADahmC1a5G024iBxADlIYSjmDueLR2oluYrgkg2v%2FHDgcVdhAxz2aAzO5njCQcIDirB4DXIhWdvOXGHBUDyuI9U5cd7ntdHDUTupI6TE8IBifs%2BCz7331GJeHFWpg0HrKetpm%2BQRh1%2FBBuSASrDIXlTMpw6iU81o5AMLyn18YGOqUBoPmsO9wMi5jEEtPFsFMx8A5y5YiuNUo6wsoxlwMQ5pqpfIV8CV%2Fe4B8D%2BmcQ4s%2BtEUS5xqvEZ5Zx5TKD5b9Ie1eHHelli36qkFZsbS7HCNkXQKQoO9rIV8EFzMUA%2FcSfH%2BE58WaE7Uqy8CmOy%2BdJshnvseI%2FfaMAgVyzDRqY6hnGZ6xjpbZ37URMF8%2Fs0z3AyxiOspkEpDxxnRg%2FUsQBMLTFF4df&X-Amz-Signature=50e825021f0a6cc1a16b0e809f247a3cce3bf5c93b432bb63b291dcc131ce2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
