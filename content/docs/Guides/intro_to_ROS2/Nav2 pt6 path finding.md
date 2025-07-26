---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMPGLFA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDY3fhKtyte1yZCyCY9TxVHPr8W6xDpqocwvZJ37xRHlgIgSmlnpZJ4qtOg9RniTj7%2FZA2Rpe0Z88By%2FTR121xZiwUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXXEY7pAWmE30hcSyrcA06zH0XJ6j3aBCCxelG1qtNPkC8Ao31YxJUOYuj8h9Tv%2BEPN%2F6wIdfkldZg0K1lsOhrm1rUM2ScLFZTiIRvuNDkngN63nZQpu5UJByZp9h3N3%2F3%2FoGHelKnVO1o6KqpOfYOlR3GHNxYrkdvPw6ehj0lsZzbrY%2FLZzazNbXVjLkXkc6oWADOowHfI8gJWrG5E8asJfJfidx7KpB3kL76ksSDI2dGZUaQwYslyC8zyhg03fKWkNNk4A9Sz3otZhJW5BjfGrGrHTBuRqi2w2tBb16Ry7O1mSes8XvTNZgH1CugXpW6wSnkYDmZcRGvASd3CwGzD4IhfWppXhaFbPfBuaSZhXH9tj%2FZWy%2F5IW6KdGA8GaYM0dZUUHSPI0zOPmCh84scVTV7F3nZwKlo3lkEDGeSW1wVn2huB68ZtpDGbuijUDlx1d2pcn5YdKMCI%2BtY8mZW8VtCQvRgCakAIxadLwTQGbF4D2LjAEvsbZ2zd%2Fa5f0bodWXV5H8gBzTqSkh%2F%2BG9sLdO8tzCizvW7ew5k7Ecm8hbheXp1Mz38Vlr91YG%2FtJrEOYRjLeZ0FjOXM002riAZv4%2B6%2BMbLikXR6pPVPeXd209JsHRnkSpX%2FDXVDa9R3Fy28PQHnDFYPAedyMM3Bk8QGOqUB19jsHAdDTeUsQ8jTcKWCvZBH8n%2BPv2zs%2B8W%2Fw5Ph%2F7kwqUklHuyKwAhl7sEdiERIRX5rHRXFd%2B7qGBhbsnBTClZ9hYXCz2ZpE3D%2FZtwFve269NZlxvFbqgwJyY4VmqTyV6N5UkMDJ4vXena8d8jPRC%2FzOmI3r8ToauOi5lKICnRQuY3kmkYg4DHvg2pNO%2FmRdx%2FGt3DV1lwcN5MtHEIUUcyX4nNg&X-Amz-Signature=6a3a6f945ac436c0e5d113e503b91dc32ff9e5a63fb62fbdf124ce7aa2877e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMPGLFA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDY3fhKtyte1yZCyCY9TxVHPr8W6xDpqocwvZJ37xRHlgIgSmlnpZJ4qtOg9RniTj7%2FZA2Rpe0Z88By%2FTR121xZiwUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXXEY7pAWmE30hcSyrcA06zH0XJ6j3aBCCxelG1qtNPkC8Ao31YxJUOYuj8h9Tv%2BEPN%2F6wIdfkldZg0K1lsOhrm1rUM2ScLFZTiIRvuNDkngN63nZQpu5UJByZp9h3N3%2F3%2FoGHelKnVO1o6KqpOfYOlR3GHNxYrkdvPw6ehj0lsZzbrY%2FLZzazNbXVjLkXkc6oWADOowHfI8gJWrG5E8asJfJfidx7KpB3kL76ksSDI2dGZUaQwYslyC8zyhg03fKWkNNk4A9Sz3otZhJW5BjfGrGrHTBuRqi2w2tBb16Ry7O1mSes8XvTNZgH1CugXpW6wSnkYDmZcRGvASd3CwGzD4IhfWppXhaFbPfBuaSZhXH9tj%2FZWy%2F5IW6KdGA8GaYM0dZUUHSPI0zOPmCh84scVTV7F3nZwKlo3lkEDGeSW1wVn2huB68ZtpDGbuijUDlx1d2pcn5YdKMCI%2BtY8mZW8VtCQvRgCakAIxadLwTQGbF4D2LjAEvsbZ2zd%2Fa5f0bodWXV5H8gBzTqSkh%2F%2BG9sLdO8tzCizvW7ew5k7Ecm8hbheXp1Mz38Vlr91YG%2FtJrEOYRjLeZ0FjOXM002riAZv4%2B6%2BMbLikXR6pPVPeXd209JsHRnkSpX%2FDXVDa9R3Fy28PQHnDFYPAedyMM3Bk8QGOqUB19jsHAdDTeUsQ8jTcKWCvZBH8n%2BPv2zs%2B8W%2Fw5Ph%2F7kwqUklHuyKwAhl7sEdiERIRX5rHRXFd%2B7qGBhbsnBTClZ9hYXCz2ZpE3D%2FZtwFve269NZlxvFbqgwJyY4VmqTyV6N5UkMDJ4vXena8d8jPRC%2FzOmI3r8ToauOi5lKICnRQuY3kmkYg4DHvg2pNO%2FmRdx%2FGt3DV1lwcN5MtHEIUUcyX4nNg&X-Amz-Signature=55b7e818661b41d319b88d45d7a904cba99684e3348e4c722bac604aefde65f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMPGLFA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDY3fhKtyte1yZCyCY9TxVHPr8W6xDpqocwvZJ37xRHlgIgSmlnpZJ4qtOg9RniTj7%2FZA2Rpe0Z88By%2FTR121xZiwUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXXEY7pAWmE30hcSyrcA06zH0XJ6j3aBCCxelG1qtNPkC8Ao31YxJUOYuj8h9Tv%2BEPN%2F6wIdfkldZg0K1lsOhrm1rUM2ScLFZTiIRvuNDkngN63nZQpu5UJByZp9h3N3%2F3%2FoGHelKnVO1o6KqpOfYOlR3GHNxYrkdvPw6ehj0lsZzbrY%2FLZzazNbXVjLkXkc6oWADOowHfI8gJWrG5E8asJfJfidx7KpB3kL76ksSDI2dGZUaQwYslyC8zyhg03fKWkNNk4A9Sz3otZhJW5BjfGrGrHTBuRqi2w2tBb16Ry7O1mSes8XvTNZgH1CugXpW6wSnkYDmZcRGvASd3CwGzD4IhfWppXhaFbPfBuaSZhXH9tj%2FZWy%2F5IW6KdGA8GaYM0dZUUHSPI0zOPmCh84scVTV7F3nZwKlo3lkEDGeSW1wVn2huB68ZtpDGbuijUDlx1d2pcn5YdKMCI%2BtY8mZW8VtCQvRgCakAIxadLwTQGbF4D2LjAEvsbZ2zd%2Fa5f0bodWXV5H8gBzTqSkh%2F%2BG9sLdO8tzCizvW7ew5k7Ecm8hbheXp1Mz38Vlr91YG%2FtJrEOYRjLeZ0FjOXM002riAZv4%2B6%2BMbLikXR6pPVPeXd209JsHRnkSpX%2FDXVDa9R3Fy28PQHnDFYPAedyMM3Bk8QGOqUB19jsHAdDTeUsQ8jTcKWCvZBH8n%2BPv2zs%2B8W%2Fw5Ph%2F7kwqUklHuyKwAhl7sEdiERIRX5rHRXFd%2B7qGBhbsnBTClZ9hYXCz2ZpE3D%2FZtwFve269NZlxvFbqgwJyY4VmqTyV6N5UkMDJ4vXena8d8jPRC%2FzOmI3r8ToauOi5lKICnRQuY3kmkYg4DHvg2pNO%2FmRdx%2FGt3DV1lwcN5MtHEIUUcyX4nNg&X-Amz-Signature=bb01137028ecb91f7996cf877260e7e332468733d7a7791312035eca2d02f887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMPGLFA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDY3fhKtyte1yZCyCY9TxVHPr8W6xDpqocwvZJ37xRHlgIgSmlnpZJ4qtOg9RniTj7%2FZA2Rpe0Z88By%2FTR121xZiwUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXXEY7pAWmE30hcSyrcA06zH0XJ6j3aBCCxelG1qtNPkC8Ao31YxJUOYuj8h9Tv%2BEPN%2F6wIdfkldZg0K1lsOhrm1rUM2ScLFZTiIRvuNDkngN63nZQpu5UJByZp9h3N3%2F3%2FoGHelKnVO1o6KqpOfYOlR3GHNxYrkdvPw6ehj0lsZzbrY%2FLZzazNbXVjLkXkc6oWADOowHfI8gJWrG5E8asJfJfidx7KpB3kL76ksSDI2dGZUaQwYslyC8zyhg03fKWkNNk4A9Sz3otZhJW5BjfGrGrHTBuRqi2w2tBb16Ry7O1mSes8XvTNZgH1CugXpW6wSnkYDmZcRGvASd3CwGzD4IhfWppXhaFbPfBuaSZhXH9tj%2FZWy%2F5IW6KdGA8GaYM0dZUUHSPI0zOPmCh84scVTV7F3nZwKlo3lkEDGeSW1wVn2huB68ZtpDGbuijUDlx1d2pcn5YdKMCI%2BtY8mZW8VtCQvRgCakAIxadLwTQGbF4D2LjAEvsbZ2zd%2Fa5f0bodWXV5H8gBzTqSkh%2F%2BG9sLdO8tzCizvW7ew5k7Ecm8hbheXp1Mz38Vlr91YG%2FtJrEOYRjLeZ0FjOXM002riAZv4%2B6%2BMbLikXR6pPVPeXd209JsHRnkSpX%2FDXVDa9R3Fy28PQHnDFYPAedyMM3Bk8QGOqUB19jsHAdDTeUsQ8jTcKWCvZBH8n%2BPv2zs%2B8W%2Fw5Ph%2F7kwqUklHuyKwAhl7sEdiERIRX5rHRXFd%2B7qGBhbsnBTClZ9hYXCz2ZpE3D%2FZtwFve269NZlxvFbqgwJyY4VmqTyV6N5UkMDJ4vXena8d8jPRC%2FzOmI3r8ToauOi5lKICnRQuY3kmkYg4DHvg2pNO%2FmRdx%2FGt3DV1lwcN5MtHEIUUcyX4nNg&X-Amz-Signature=000296defb8c56a7dc242464d8fccff68dceec1e838bef41b695924db9d686cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMPGLFA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDY3fhKtyte1yZCyCY9TxVHPr8W6xDpqocwvZJ37xRHlgIgSmlnpZJ4qtOg9RniTj7%2FZA2Rpe0Z88By%2FTR121xZiwUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXXEY7pAWmE30hcSyrcA06zH0XJ6j3aBCCxelG1qtNPkC8Ao31YxJUOYuj8h9Tv%2BEPN%2F6wIdfkldZg0K1lsOhrm1rUM2ScLFZTiIRvuNDkngN63nZQpu5UJByZp9h3N3%2F3%2FoGHelKnVO1o6KqpOfYOlR3GHNxYrkdvPw6ehj0lsZzbrY%2FLZzazNbXVjLkXkc6oWADOowHfI8gJWrG5E8asJfJfidx7KpB3kL76ksSDI2dGZUaQwYslyC8zyhg03fKWkNNk4A9Sz3otZhJW5BjfGrGrHTBuRqi2w2tBb16Ry7O1mSes8XvTNZgH1CugXpW6wSnkYDmZcRGvASd3CwGzD4IhfWppXhaFbPfBuaSZhXH9tj%2FZWy%2F5IW6KdGA8GaYM0dZUUHSPI0zOPmCh84scVTV7F3nZwKlo3lkEDGeSW1wVn2huB68ZtpDGbuijUDlx1d2pcn5YdKMCI%2BtY8mZW8VtCQvRgCakAIxadLwTQGbF4D2LjAEvsbZ2zd%2Fa5f0bodWXV5H8gBzTqSkh%2F%2BG9sLdO8tzCizvW7ew5k7Ecm8hbheXp1Mz38Vlr91YG%2FtJrEOYRjLeZ0FjOXM002riAZv4%2B6%2BMbLikXR6pPVPeXd209JsHRnkSpX%2FDXVDa9R3Fy28PQHnDFYPAedyMM3Bk8QGOqUB19jsHAdDTeUsQ8jTcKWCvZBH8n%2BPv2zs%2B8W%2Fw5Ph%2F7kwqUklHuyKwAhl7sEdiERIRX5rHRXFd%2B7qGBhbsnBTClZ9hYXCz2ZpE3D%2FZtwFve269NZlxvFbqgwJyY4VmqTyV6N5UkMDJ4vXena8d8jPRC%2FzOmI3r8ToauOi5lKICnRQuY3kmkYg4DHvg2pNO%2FmRdx%2FGt3DV1lwcN5MtHEIUUcyX4nNg&X-Amz-Signature=2711ce7920cb2af23cf083dea11bbd548e668edca4fae9236e7a2e90c0b96dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMPGLFA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDY3fhKtyte1yZCyCY9TxVHPr8W6xDpqocwvZJ37xRHlgIgSmlnpZJ4qtOg9RniTj7%2FZA2Rpe0Z88By%2FTR121xZiwUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXXEY7pAWmE30hcSyrcA06zH0XJ6j3aBCCxelG1qtNPkC8Ao31YxJUOYuj8h9Tv%2BEPN%2F6wIdfkldZg0K1lsOhrm1rUM2ScLFZTiIRvuNDkngN63nZQpu5UJByZp9h3N3%2F3%2FoGHelKnVO1o6KqpOfYOlR3GHNxYrkdvPw6ehj0lsZzbrY%2FLZzazNbXVjLkXkc6oWADOowHfI8gJWrG5E8asJfJfidx7KpB3kL76ksSDI2dGZUaQwYslyC8zyhg03fKWkNNk4A9Sz3otZhJW5BjfGrGrHTBuRqi2w2tBb16Ry7O1mSes8XvTNZgH1CugXpW6wSnkYDmZcRGvASd3CwGzD4IhfWppXhaFbPfBuaSZhXH9tj%2FZWy%2F5IW6KdGA8GaYM0dZUUHSPI0zOPmCh84scVTV7F3nZwKlo3lkEDGeSW1wVn2huB68ZtpDGbuijUDlx1d2pcn5YdKMCI%2BtY8mZW8VtCQvRgCakAIxadLwTQGbF4D2LjAEvsbZ2zd%2Fa5f0bodWXV5H8gBzTqSkh%2F%2BG9sLdO8tzCizvW7ew5k7Ecm8hbheXp1Mz38Vlr91YG%2FtJrEOYRjLeZ0FjOXM002riAZv4%2B6%2BMbLikXR6pPVPeXd209JsHRnkSpX%2FDXVDa9R3Fy28PQHnDFYPAedyMM3Bk8QGOqUB19jsHAdDTeUsQ8jTcKWCvZBH8n%2BPv2zs%2B8W%2Fw5Ph%2F7kwqUklHuyKwAhl7sEdiERIRX5rHRXFd%2B7qGBhbsnBTClZ9hYXCz2ZpE3D%2FZtwFve269NZlxvFbqgwJyY4VmqTyV6N5UkMDJ4vXena8d8jPRC%2FzOmI3r8ToauOi5lKICnRQuY3kmkYg4DHvg2pNO%2FmRdx%2FGt3DV1lwcN5MtHEIUUcyX4nNg&X-Amz-Signature=e87d1cca4c00e1d91f4eba3971f8ef6ae1b3d8205cdc993e225a26c5ba8bb905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
