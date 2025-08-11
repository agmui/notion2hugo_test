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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=5bd6844b9b467a8001e7a9ac8a5d8a2223194ebeb10a566fceb1706c9ba05998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=49af13fca2eb80b998e626466bf76943897c8d572b962d0d139490b10953cc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=c991243ecdc2c733738218357305a8f7e0981a42ae93d0ec0d8496c21a67e660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=857df23edd26e71058375e25e6241832a9b3fd79635fd1d176eb19245b293bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=219c9858a8af1421d396ba9ec5475b63ea37b625745e68ea03b5f4090820b847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=57c04ec164e05aaba6de9beab7a5b67023b22166eca5d2d64c95b4d2fbd8b486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=f2fc4db493bdd3faaa67dcd45bc25267e4db72401c1c4789cfd35733c637d59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=66d1750772385333ef4691bb3f7730c129e716bf5ffdbcab660b02d0df0c9bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=ca74d393a5cc5e0a3f8b66e427464dba8173b22757cdff19a7e054557d4e46dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=6a591c126076ebcd6d1f7a22b5041dec7688283c371ac0570ec06b06e94262ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=b7bdb46537f5ab95a5bb90e7c9175ebc75416792a14c1dd6df0eeb8de6c6e5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=47b2d0bc9ea9eee06dc65803aa24c8fdee51317a2231ac7a77f26b6ab32ff6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHYMNQQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9ds3LX0vI%2FE5bbWQtGLy%2BaJbcWpmIhLFKBuF%2BlAcYkwIgL7KGxcp7kzngEHj5Feu5NHFnwAHdOJMUdAdcOoc2RdsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9GH0yCnSHowt%2BYircA4NWLIkVXDfGuAes5c3f5ATCFasQBXoFghm9vbJ%2BZUHUhXEEnroRL0x6Kv6uGl1PG9AJafTcHF1n%2FEMcTlxYM7jE34lgnykuC8u%2FlqNhbdEIi%2BOlxmDT9qrXjsEOEtLNJ5PzZvCdBENTrY2TcNV2Kjf9idY0uyYUQCel3hPeZQM2dWOeQodkURJQ3qJEp6jXniLRCMO1uW2RUqYXzLJHkTRcR6XzNn0lIwufI7bANO3PSXlV5FFSmLUB2pZ7yYvcZED7QeBfEGMo33qeLBNhPffdsZ0eLgpU80mYay6MJ4%2FQ6pN7hZvF77qjFv6zSx4VWdjfbMgVYVL%2F2J2YrPhNF3Q%2BZfG5XHUmJZ1qiEDEoJTc1OpoxHm26Ov4s%2FlcvMiOKnXcw5W6hRX9l7tAUH80Ht0RqC8FXMU3rmQLzCi45rEbRwfsrnysNbZCb8t8jdAUj0v5w0eBoD5ZT3cWNRI7j85RNOPwKkQjzZZnNV1eFv10OgGM2%2F%2B6IYFdLuNLeLraBZn9e8qY42sCEIoqoNUi2f3tv4fSXBIlPcltonA4%2FAKgRFeszvX%2B1urEGFkfYXLBd%2F3wL8S3V1ZmSy5NIApL46wGGSUwi11tNsm9szA8hWa43HUBSDB4ZJeTM64uMOL35cQGOqUBPB1YqF2C2WvzW4uLuHkFQ%2F8vrJ5LcU7jOsAtAbteNOpqZz6UhgZt2bEuxZgoxNFyicZWkq%2FtaSpGkCvRcaPmITV1%2F4%2BHXy9rzZf%2Fyf4JhKr06vOgSV0FK93Gt5623MbXqi6OIeE99ZIjxL1CFslfNYBW%2FtnqqU5gca%2F5a9c3RPEh6hpQo%2Bt5stxrYGcVCAi7YtxHGptLBg7jngOl0Pn0OOrU7i81&X-Amz-Signature=294d2ae97302f526e8cb362b0a620ecce40244d59318d52723cbc57188d3a7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
