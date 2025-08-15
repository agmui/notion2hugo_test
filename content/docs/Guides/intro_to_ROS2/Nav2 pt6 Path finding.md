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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=db342cc212e8b39b1a4e229ff673992d4df27562b39e75bcb6eaab3fefc4a2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=105ffb494ca265ea485b5fd3f93da803afc7c953c0ee8c996590b860bcb13467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=a1295f556f963418a53a4460c706f3d9fde0b8f0556be3f702f322d191fcaea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=a5b086398e8cab3c9acf0b94617c699ffb861ac3735173c7c3f85dc700f89c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=1c9b8ee9f3e0407b54ec409aed05aa1b0bdc471a5c368d9564817494753edf13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=7bae49e39f7927bf397e917cdca690030c335fddef960e5ca69118ce2de70301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=4772abf4c74b9e0b960a9c1804f7434225c730daa8b97803239e41254898a178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=b544c41127a7de309ba6d41d5f0d45632ec7f012ec4bedad02fed5228361e4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=af9d738f92cd40e52579637a92e02033f7e65d8fb2691eb3d9e909b7ca5c8251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=402f1a5ba29131fcae669d38bef10293880410fd29c0dbdcaac74feaa7f4918b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=381f14b32e8199dfa7e283ba93808c72217627cbbe02489a727d1dd676c41690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=a3701b48f5dd2d0803daecee950857d0342a1b709acf5a41ddbec5b6fe25597f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GLKNXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDDvFRkwbyIRHcdmWKUNMjyQr%2FDeaeLxwZd4%2BZ0DBExNAIgWhYjPp6LvRv3B2LU%2BVaUtb0VgWzL41NJ6wXUiKuKS%2Bgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJgVp4dbzNG0DST9HSrcA%2FWIEKtxXS7sKYyD30xIY36Qu2PuF3zdBByACwRgx4EemTYHYVDPWPJ3toKo4r6Tm3pxtpUKkxS8AmTJ6swcMs3%2FD7hs7x7RSA1pqeRRIxDSIBG07UAwvJKRlAUk%2BulYiY9cu3vPUTYgjnAesUsNrNsy135OLgbSg9kpq0lYfgWOYoz8QT5NeDcM60WGs3jURNnqy91rduZYEQDSJFGEh0lRLAHRgqv%2FWDq0ZpfNbpuhZIuHEEP34q0MQdpd9x4MOu8IpN7xLMNFVukNoAFDKJK4KKqBlCsEVbqDCH5YAKWCLk%2F5iQ%2FQbVVL9BA12z6VIKxum3xVYLf2z10Ufzsfl%2B7x2kWazCHq5tX5uC0d%2Bys4yncWQI0vmYo8nhjo4Bx8oBd%2BNsIQrizi%2BrFsuoTliSbTcVXWCAJxYTYMbaoTJHgJmzi3pbrdxXZyGLsTgj4fbSn5yzNIZLyJ%2BuvxjvmFEl2Gq6j5TbG2mea2YsOM9gWJrd3Xr%2F8Ua%2Fvv%2BqFRdu7lov4wopaFhBSO2nj%2BG5l7lgsncogX27pcM1mQaIgwAWRvB2MnXMrZMd89DgJYk10K30pA2k%2BfNg4En6QIPeIB8BKKP%2BwVvCOaZll9D99q5dwhUGrf5hRHpwv%2B2ic1MLba%2FcQGOqUBnT%2BCv%2BDDdfOX1FMZKPteigV55EnkyhewWJeeLLO0vgHhtUYb8JkTxI%2BXHXavCX%2BrrZDZFTSbcsKZqGBVZO65T5Kf95TKzEgeeS%2BXW%2BYJkXdaBDQ5xOIocCgHp4jBTm79SXvrQhJdeHHRKqQtkr0YajOmn2LZYQNK2uRqYyJ6ZiF%2Fi%2BE18IU6%2Bj7ANqVvZg1kd6IkyhcS3AHplNqEGnCDycgTvDHs&X-Amz-Signature=ccfd6d7f1e921ae48c68e65fd249c8664ece8cb49bc06f020a0bb22bfa0d6b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
