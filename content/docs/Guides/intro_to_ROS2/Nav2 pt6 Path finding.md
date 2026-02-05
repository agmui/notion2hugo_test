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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=6dc53a5ea52fe7949adedbd7fd1617dc12fe26fa06477fcb353c1b01c4ed7652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=61167537658544c28a5c4808084d499a8c9b3811a34693ea81440674b72b5eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=d9c3e6d83f504717b661cae3775761afcd1e001d969aeffd1e0fa7ac06195f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=fed857a802946c3af2ae327925e8d1c17dd761bac29f0c64b73863a30fe35425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=061edd453aad616541073e684041e57bcb87e3338bb2d9c7e5ef4a68ce0d3c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=f133484223a692d2c139063befdbf8da9ccf4ed6d74f8ac7739f3bd7a2524c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=bff16438ff5cb48474aec70a5697a1a73464b0d71713f9168ab22d529c837635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=936b3556b663c1eea2f8446517b9ef3dfa3c36cb897e4b030be22f394e054daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=ef00e5f30091477b257d3093a4832039a200494f5c557cc017377937104524ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=cc58770663267d56cc5522f28160bde9bd156721b774aa040f0fc2b7c759a381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=81dc0a0f04c2ca99aff7ad0990624ea29efb73a4dcb140739dabf64dcc7014e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=9f317a20d2642db0faf65db6dfe92c4f4b69eb913a8531cf2a100a070f3a3d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3XMKKN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGfSwZkSmNfEtj13c%2BBgM%2FkzXxkYXjNcyb7F2Ux4qyuwIgCzOm5z0GAeo%2F8HuIbG5KlCJcjOhTTDpQHdljJWUDCsMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHsPwKFf0KveM6qY2ircA5FV1nquRluPx7UwWUc8NNqG1PNJcXbjtFHhRTvpiKZOrVsFeD2MxgAEt05l1ljRpWaOpx8Wrxvn1HwMWmqhcLc6ELJGa77i08YeBs7FNmXgArQvBENBmd8ce6Hek%2BKaTsnrJaDabkj%2BnokoCI5FnuyD%2BjNeOZlpKGG%2F%2FoOdaWV8V%2F4Rx8Ot8iyLj85Kn5E2j53bxxyilvVYjPXhnykJDP2tFkuo860djPGBjK4W2rmU9lCGMGh46zuFCAhh2RUWVbzYUd5OYuA3qCe5u2YRo9QAqxJkxNN%2BqZ6vFEmzsI1IkPy7bgj1MjqqnKeYR%2FAFg%2FheAeejf55sQCh%2B0HUYtLkHnBwMv7BkEiJL4T1YXMI7cRKmOnbk1j3Fwcsn3qSmV5j3FfQ3ZyZqzc2loTbBhmEcdGV1FvRY3Rp3MqU80XVjS6%2Bsn0%2BIeev3DZkJ%2Fy%2BqA37%2BubNxXumCYpSjaZZOy35g%2Bm5e9T7TjKfRaMopZR0i9Jq5dS8%2B6ozbKs60%2FqPAVJIov%2BhCe4ypg2eDLgTCFrfLixJ0cNhycAfo7YtvFVbFffaEyCdASukRpe30fOyaYubceZ62RQO54GJYq78AnWPGjib%2BtvApTk9zUGxpVdYYkbu4MMpnYDe4YCxvMPXNj8wGOqUBvhenIdwVxj3usd%2BM37ZsNhlCF3iCBQiCsQrPbHSzzy9Xj80zs%2BdNRsllKNzYM1uAXmNmh7DwTG7sIeoZzKabfDJjpMv5Ic1i5S0S0Qto1CBtIhAFZl0g5mIR%2FnuEu%2B%2BfZaR7wqBWzUo3UcpflzCjeyd6lOko%2BsYMOxTkKQ%2BiEiPcgIR9sB%2Bm9MfM8s9fYSjdxaYYV83%2BVwTm5jzX5cTfZ%2F7avMLl&X-Amz-Signature=f057e9f63219e6324c2a963fb0182cd51708e4eef0a85495e7ea53da82fe79da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
