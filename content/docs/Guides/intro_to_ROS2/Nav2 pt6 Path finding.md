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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=d781a17ff23230fcdbde2735c4efe0358d4b192d40a797a05a1635b0242e7f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=3dc12debb4f218e2baa9c51706152285af8b33ad97cd6503df9fc514e79dff5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=8ce65a25ee2d1bf8e9bc72b6572996c7b031e5377137bcd43cc5f3bc73d70dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=2dd389ab67fa189914fdcb41e8f42545a245b09bc7f888cc86f7ca6a5ab33c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=7303ab1fe57e5bf622b2ecefbfa6ec37c2591c76738cc857bbd96ea1466e65dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=17334827c2dac734c6ab62d12f299cd77e859ddc5109543aff680f992567fc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=fa70951c9e1587d12d25e071cc8ad4b404da3e328769878626ae5885bac8114f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=0df120e1d0a71d2762279f4892823cce22b01c851e5e1603f638a622f07bfd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=16af14ec3febff6c7491ef43078e320ef4b0c703272308e7b545c6c9805d1d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=3724ce3ad12c5e6f83991f8f07eb16baba403451a7551946b08888c4a813592e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=0269ed2613a661e30f5ba8406266e3754a90244ab8bc29b54569bda2561d653b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=72457ad5d40457586a25ab09b9f761d9424ebd69e73cfb776cb127269620abf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4UXMJN%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIB0TiHJyGcw3%2BoeQOccswfmJWLRDNZfTdvQu101KHfIkAiEAxhAnbzUzsr2tJijZiJ1IM%2B%2B5hdZb45sV9b6xUqanNpIq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMRO6uofsBWnF5p3JyrcAz5IgibqyAU05dJTcjWlGtf7sXhL83yTxWQN58y8bQcFO1mAYsa4o1HfuJ5WNKfec4ovQPQUqzaLxUWHPfODeU4bEbpplz%2F7l6STySbAgwj8A6Fo7Qka0RSgVbVHdzHd54NjfJrNNJNJfbHS2IdTVQxQsPqMN1k6n5v9C9PMRlgGca5RkEdzJ0087LWFCBTCKfSgJsGeRN9IRmKAX7zcFuU31VwOTLBZgOXqxxXXXGXc%2BJhaJzDCh7yBzQAzmI5Zbj0%2BCkGPvhLlPsZYI6BXay2SR6lhfqJceCZqyPwqjnHY6dccwiOhQEHFdy4m5wrjQ6RA88EUgAO6Z9h%2FbD6VBFhsPS9ufm2jF0nUu0YElHl%2FopYLzG%2BWhGCkQaY26%2Bs8rvy7l5U6%2FAMQrPvg3R3u8PQO3rRQw5vwmb6GXdng%2FX3XkHcQOYiDg%2F1CKrvyCfR3lqEelvW6vCzttrKl7UCh7h469d5O4Agxm8ZQAkx0dims7jEjhfok1P5A9iMoccanWXqyJScOkZiRMAEH4fdEPx3xkPpRO0PDpnVXcOsAsJRDzo8UgOBkDPEsL0eZWCHT3uqcrllczbG5OIuGZtb6Io1BJ43W%2BhqTejxO9wBXLjLwzT5g0XmJKf54nyjWMJ6A%2F8gGOqUB3%2Bf%2FnrpBADiiJczT1%2BAeI2ZqJCaezuzq%2BhXj3UjgauA70UPVPlrvpsQ6x%2BI3Fa%2FEvqMk%2BH1NdcsiPrPbC2%2BCFoziWHjTGIQQOq0CerRJVLAweYS5v%2F6fHo1r%2BhbdLa2KserYtVEQNgfR7THyoJ1P0CAXdD4fzhlfQQfcWOJzrgtdlDwaFLSJt5BAYExkw8M9MA2MfWBM3nUbank7DVD0aKtVKljL&X-Amz-Signature=e547e629ff9b86ac8e02a1ffdce1b79c334b2363abf67760bceb63532faada45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
