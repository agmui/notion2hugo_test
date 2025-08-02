---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=e390f733158c3e6cb3114922e307d936c77f47148f426dfb49711b78402e039b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=57d7155b66605777ee524b279c0a6c2fbfde13129f44a76870a58b4dfb95ac52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=fca4f4efd7bdc8c577687b4bb167931bb164d4bee2aa03e24b1b9b67c055cbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=33d5ded84767cd54da35f37d4beb49d2c007301c3e6235893470b003b330fa49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=bed9a5baf201b92be5449723037686ab0a41744d236f2ca2e5498bba17ea6fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=65feedc5076441d00cded25f08a5afc4648c1b7df1d3d2611df80f33d371f968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=7f13bd52c1be3153941da43b5a4aa114eb4e2e8132afc0f7b8ccc96a8a01d04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=5ceb1b3b1acfe30f2261b926386b038159ae94e486e9aef2845a468ca50bc21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=cac62cc86d5413c08e2eb044e255e5ec6401c70a83a4928e616620a2ef37d1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=e2821fe4bea9c88cd42883506beeda4b962919d9f94e8b3bac85e831d4e0bf8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=3bc95defcff2f95ecfdb2f4acf91c0133eade0c34a1d3d9f30b0aba3a325b2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=898522dd0870d91cb0bc98d3596a20d445c21b310b9d3341dd02594f9f29290a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674OVGRE6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPKMZs0Qo1HnIz%2FrDN36l8WUhnwrUqCdaZ10Bok4lMnAiByimRj1aMhYZLCu6b5pxY%2BWzlGtPz9Q051gMewP5%2B1mCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMAXcdjv1IZirPFxpuKtwDJZETlwb4RSNQRICT%2BJr8LkCrqosV0IKkDlZmTEIak65PN8roM34S040qtVWt1rZrKDpc0oLtvmm9mSbbJTmCVceNUOoej%2B2z0C%2FafKHIZdSaYloj%2B1VV9AdZydh2NglhwCjio0rBWbKxlVzWricZooMw786eDcBxcGxH006RdVYG2OZfsZS8TUUGTkZti6T%2F5%2FY%2FBJnm26dWUa3O2xz5pTiWg8gLyc9LcqqDTiNNJ1O3v5RtFz5VisYlcg8GL6fPKpErQrqW68L65B5tlFzv4mAeCHRVQz3PtCLESd1cEb7E9t25KWdW1YmrXPdspaifewo2P5Ay2n%2FIYywtzhzbJ5fm9ff%2B%2BoDviIIQhqk3LCJkCoYoKv0TYNZ7QJI7p%2B58Iovn4k0%2BvQWzD3LCp2RdYTL6lbjw7M%2F3Dx1DO%2FQZ0orBDYU5Fa7cJGcyETLdeaEv46O%2BToUsayc5P3sTU%2FxOq9DSPiPYQXzZuIec24IVb8UKGkhgog5Gdu5OEcgRZ10ymLZhlXtON44%2BPgTbyCepPunBzNqwKHsbr9h9nNDqeDQqbA%2FugYLlHsyrc1F5t81LHfwK5K%2BEIHfdY1E0X4u%2B9toNCMq%2BnB9TU8FWIjMNRqKx3mCUYUkR8N2TyfUwufC2xAY6pgEhCFaoIly2A3s1CuT76O7oZcAftshoBJDcly6eFyaOqACIqTxka7u6AV5u86vk4O%2FJnGn2bXMshIDWSV7oZ7M7O63S5QNkcS6oZ9gDgIH8t8EHiPpskviCUiISCj5a%2B9QyKxlXuMTInjS4vYUbYd72abnr6QzqNJo561vkb8100mvBdfaeMz5C6JQCmDGGMEcd07Qy8EBhDEqQ33%2Fk7ncuRNF%2FYYhK&X-Amz-Signature=d49765bde3548cf60daa566efeaaa5264d839acd24bf342c2a99b83d087d8cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
