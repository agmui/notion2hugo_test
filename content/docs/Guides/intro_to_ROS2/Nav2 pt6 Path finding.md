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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=c13232178d00aa3ee5298a6eb394d82d415d46978c5432f94401e5ef0898b518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=8c8cc0c7e3b487cef04133ef7f4cc3df52c1fc2ccd9dec8ff9cddec6fff5316d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=f4e962d32accb36cf5346bd53b850774ac73608ead13e6241cd4bb16507fe966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=c61661f5583e81504c62d24901ecf1d7008509b6b1b918650670474e06f2f3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=1e978d5cc9cf02e2948816f8bead2a43a001ab8504e70c853734c3e45620c56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=4f47c7f8791d777ab452f986c8105ef1b55574771441ff833f4ea3322b66a62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=5406e84bf731c40d4e991fba89def0b9175b1817029a6c0e8c32480f60c5cafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=0d06298c704fa677634209a293c54d0f8dd9d75d42f33edab9869940ae2d9280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=00a5381075f8a3704f360c2830a4da965c0cc9aa5d76c157e8817f072f0f394d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=3826cd8b1723c671df1481b1f2ea348e88f37e50293aa513b91de9efafc3aaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=4bff8d6f7382b216c59fc8480c1458bb3c11845265625600d484ac934abebebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=eba2b6f0ae6b8ca5b6aff13f9e60dabc367e568ceed806bb079467ef9bc3017d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEFCDZE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIDDGUYMVfL8tQdeojb1ipQM0NyrSrtYz5UxhZ%2Bj05%2F%2BLAiEA5%2FfvgNFCeyI7FE3g5xb7IOu38r%2BcqlJnwFIRl9nVUekqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoiiJczuFtJx8LRSrcAy3dD8ln%2BG6b0bdeo%2BTmeQmXUK1IX0taeyy2azVaIYY17SZ8YT0tcLNVfLcjlEXedFS8uaZf3Xk7v%2BHZ9FdFyE8WYz3obaRAnOo69ymW%2B7nY45F19lSBJjJXDyml4bwDtyP4Ak1K0YGqb%2B2GC%2FZCHEnbI%2FjHnohh%2Fio9paeZ48quRGMnAGp6VOTBGEAL1ZZcVuyz%2FNuXb6%2BDkoVo%2BH55EoGM4HzAFbJF%2BassKyXkf27qPsaBg%2BGgM70%2FDDx14lGxNdFbWvE1lHJj%2Fa0iqmdR6aauauhCMKPeFGjwGrLZ8ZL7nbrDdx9548OPYbMNs2B9Ll42qYuv4%2B%2ByYexGpmBwU4Trah4HLgq8HqDqg86zGb4gyXWeWYELjFuBH5rTtambH1ebuILVnEQRFu%2BcgrjA%2ByV4Vn3oO7Bnew4qw6iO3jYjjE3nJE4piQnIzgudkOq53l6zXlq8LlqEbYsevgfNQyWq0PnRKrURTVFafj6LprPYxxkXgWGRPDNhVD57adsZugsfo3BHC18ppjefhQh7qYqAjvf05We7IscXBEtQCAYoUUqQsCQq5pYUOcl7l4fYUusvSlwsn1z4RIhdWsUBsB59DMvRsqh0SivmfzR708eO1vlduomqNa%2BGg2CSMLKj3MoGOqUBeT8%2FQAFjzOvHB2dsgteafVJPv0pj2EJaI%2BGTShO5%2BI3Fg0xJnGzkQ69h%2FcqzptMFWgJkbTgWrk4ukmIUG%2Fjs06eQ0U%2FAXikB%2Bi%2B%2FU4bD%2BTCc51xrV8QR07K0IacNGsKte6CMOSbf5GPgCdHfT%2FdJvvvlsDworpBrGCGJkcxaPKUb1Ap9rUzcrJ74xOIABJAPAqACTbMyrfYIV3XJCB5IoWLTd1ad&X-Amz-Signature=8b407a336635c686756e427094ad6acf181b0bbcc92bc8425ba57b02e4faa3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
