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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=8b8999b5c28cf682d84b8f0c7824554946be75a313ac2e6287c17c1b41a014cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=60c0da913d59b2527eb8c84f79b815dd2d5a0925bdbb509e7272ce6845f5b032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=03685a9b00efadb46e1e4155eae43e95099b56a3fdfef667d43cdbae492843ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=24109f2cde2172be7298c8d17c713031975b1d04918ce49cb6a0b828f04e7cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=da1e0e08960a71d054c19258f4c97260d8f30f26cb35eb25615e383eb67ddef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=667a43ff494dc0f40ba11972abf90a2759bddd8f0470332e706514bdbea11b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=8ee7272775c06094ea419702a43a8e4f5bf27c9de466ad78e31e2ab5d3b672d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=a9d72730e57ce3f91fb22e7108a8569f5e41458dc2f45de8788b8ef782f8be30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=e90addf3335024f5d18401019b37d68422e31acf0fcc24a2c5b9db3e6f2e89c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=6b0528345a4e8d279ce0625b144b4d8039084a9e4a0ddf95b36ae4e02ebdfac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=365952f18c6042f32603783970a0d9989bc61675361792542f94ee2dd3529d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=e4b5e1857b1cb7801aa9e9a5519ff68c08706dee970223342ca5c7967a5491a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2FFYU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH1GYTWO9yb9g0cBEIE0Tq%2FwvEEDIEU44N6HrJRVZSU1AiBDvURpjmEcWRa%2FYHHHuALaT8V%2FUVnd8rZSx5vuLxNTySqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDN1t%2FzbhgAYyCP7KtwDRd3Akir%2BBHDypjFY0aktv6RxjpV0M8gA0sFjaZNa7%2F4Ij1klM9e1e6gL%2Be2ysnddgVtoG078WVsEYnONf3hKovcAJql%2FeW81ek9%2Bz7ElHs0Rvtu5a79%2Fj6NaPy7jnZXn2v6f21cekTCdqRWl4C1QrGrzdM3BcU%2BMY8zKEZVgzd7uRHwgfKLGUL10GTbCNPmlScnP%2Bz6EPyBvf%2F8QFovJPaYmIBMc54SrSzEOvzgIg%2B%2B61rqKKySucc3SHLa1xmZf9QW7f%2FR%2FAiMsRnF6m%2FAhxCNQlsFqQNxkOjkV2NXp7LeJf%2F4OOxhzCUt9Jql2uBxLDIBny7tGONz%2Fp1lHzCO%2FbiKUbvp2CuFvu9lQwO5zIMz8Q%2BHeuLI6Mi7izsqxm1LFSB33lRdJTi6tjbfgeO%2FlNIPYCZZ1TxnH647tcjdIKSvt9Jh6qCYl0LZDYZ3iPdWPaSwXNeEFeZa0Zdsh%2F9sT1I%2BxNNqSx7aC0WPsqxOdUQYNTujVkHZX8%2Bcam7HhG3lTWXOhyYpA6MbF6kNjllMg0zqW2eCfWk3xR13li3yGrWGjGkKlyIIs6AJt7SF0kJJyVvO4qQrCQGXUhCxs4C4Gc7Kyj3nhgkMvCgV6KVdks5GCsXUSqu6BhSi%2BLIsw5fXaxAY6pgGjDVjlf6HP46KrOqrPaUW3oHtZH%2FGtCYJVRipakfEYGAD%2ByGoWABSDxWX3XyTq5t1FYdqVR9YtKyJPMMnKss2R5LZSW3fCqe1znh88ajvGakHWeL8%2FirNnQj21zWmaTuDTN24VlQ8sro%2BExGHU3THHPNvmJ2KReYNwo2dV3%2BwKlL1zRKiaqG5yaXig%2FhwMoQkc%2BXMqPSOeMbMwtISr6S%2FxjihACB6A&X-Amz-Signature=15a96fdda660c9a8b689f5a4fcab9e48f36dcf5da606233d4fac403248a099b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
