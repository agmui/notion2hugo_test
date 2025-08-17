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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=7f2a7bd4dac85b822364890d6be84ce08107a108688ba1f99d73fed5cab6091b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=a13271ef7e4b33b8f077b681a2a565cd408a6ebf6f62c6160918a4449b03001b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=e945f382e70f7dc8b3e93856e02d5c3aef6cf7cf511b9a2809e87da005e37f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=ddf8d84f41c58f1b4c31b452301db7e16d4365ffffbe58c9b07f0f9f1cc3afce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=d854f287b5c4acb76c7f804cf9c6cc733d03464252f458556a14257bfc90c35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=b739142a0b152224c50f1ab79b2f1b3aec723948314181bc4851702e19d4ff17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=ccf3f6be2115b1ed068e0563a27b4d8da48194ce5481532847596d32ebda27f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=e845ae20248dbb3797f39a5ca2351a1aa01c884c2e07a533fdc1b7c66f86315b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=cca26ec353b253f40e66405faf890403d582a838daf05c2c7d21662e454493a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=7f2e6870f13b1bc1565851a90959e336ed9be194ac4b97717d1732534818e673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=cb1fc995b470fc7e5c955438758e3e22492f39a0e1f1854366d7d89f307b4c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=5189b9d330f16ff3d4bbe4cd822af4949681542281a3d9d67fc71caf5eb91c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGLNBMO%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIB1vqmlsLaOzbjXulAzUljUA0ZXu%2FK%2B7o%2F1AdqeZ9O%2B%2BAiBUbNnbiztRNYGb6KOXQnnDR1jnFbc8L9to4pOlXubCYCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGmfp9zRJqhnSD9E4KtwDr3XBlBFr1FbHIbw9U2T6%2BBX4GcTXziCvbgntfwZ%2BQoRUsYD0flt%2FtohNjjTfz70uOwmVvrCSUFPzZBGwv%2Bp5GS8Qamt%2Fj5MRS1rJ%2FT10YAAL%2BLjotgXZ6tVQJQhf68u3NXCeDNwJ1fXTF%2BA9WUtdMLbc1htlHTJwCYIlrhl3GZjIP3iyTlio9edai9f6M5mr83c0zgU5A0jwQAhkcZwM%2FKmYnmThGNJbw9TokSdBb27oX3qFYNot7JX8OewpoaBnvJ8c31vLS4zfxN%2BsjfS%2FRT36FM0pLUaxXUy67E4CdAyEqaRr5JmgkAiTjnvX6FikV6XGNMaP1%2FE4OJVwTbIuc83oN07o%2BM7hA%2BAqKwTMCe0gsgdk7Hmwuum%2BAtVbyY6%2Bef8AInlUw052ok8getZolpdkaEjUfaMLTLpOrwQpKXS0DlI9Tjfl7lu6HGSI%2F3YtvKM7Kbmdg8AXAcYntBK%2FuXZbDJmt0R0Pan7rnyuyfFpPfYBHp7fDQGigPmOp3nno2VmzDmzptOl%2FLfgxjKMVPMu4xguxAShvBJnhTH%2BRxJMHb%2Fm3P7JlnmgKYB4QsDzxS3Ep6I%2Bum4gzcakVSclFndhG95cgMDT5sRcNZHF7j8lAsB2y6i1AaQvzfx8wpc2ExQY6pgHTiXWgt9TJsrYw5Wk6SY%2BQ%2F%2FxjiO7y0EUcAN0B2jsmB0BiecqzHE%2B8te4wKRiN%2BWRTZPlvD90GiN0drEatEdnyD9yojIUKC9gdFyHF64hDSM9OpvnOz9QuExb9h5uknJgr4rAM56i3HAQyL0K%2FAtw7b7RjV2zVARcVRliMwd78TbPR5J39IVKPGJLqpG%2BjSzhIevvdMvsBuM3FkFspjj4o1ou%2FN1Ek&X-Amz-Signature=e8ee29f23b20217a895475aaabf614c9030d546050adcf997c877f464a6d877b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
