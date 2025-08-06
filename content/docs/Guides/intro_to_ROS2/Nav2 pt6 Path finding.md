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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=4d43708a5316b1ebf7b9d10a61b39078cf1b97b2a075dfbe341dea72e612a914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=c4297da66f68a4183d6692aaa30baa6fef1a9113c6d917042331e2df111759ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=d9082aa12e379a2983266bd497bc31f05c50688ec9907befe83975698c851ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=237037d50bdc24f4cfc9deeb923a50f0d43e1d8f35528d52ca7ca7ecfe1557e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=6e3b068d8d2f1ff920e9a72ed6708a313a1ffa4194bd187b88af784b2d2a03c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=90960e9f0e7b0b5624fd646905a45979b04bcde43d51ab5653f03b468cf8913f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=197736f4964fa1141d48218a6325ecbd1cfdcb1bf8bccd94bbbb90a344c00407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=982c3f9f75c9e2189cfded670875f3fd755f31f3881e16626f661795fbd15b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=f3468e4b689a1b43157215b0692d6926ee5f26ce7bbdac98d408ad47448c8243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=724abfc948ce23c99bac5001bbad8aada3515747d10696e4d8bd3c0a1cfabe68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=2d436963815df830150e8bf30783aded9477a7361dbca4eae91c03155108a6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=80ee0d1477cc94a8e6d16099834a72d9de00a0abc7fea14728c04e3dc6ed42cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6O3WJEH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICcpxLDZQm7da%2B7ox80t8Oo4%2BObCooLiQLmkAkhIM%2BGwAiBf3h4x2a4pqMCBKeI3PWWXTpGHAeUr4kT0Zs48XjYClyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1CDJXKGfuNIJ6Po5KtwDQSHr8W00w%2BvIsai%2FcZTZQDz%2BegTrW8jdGO8TToLMyfvX%2FPytf9T8ASUkiG%2Fb%2F99JnAXZdFh4Se5JdbZBAM3iEyKhYZMyHp9jG4623XI%2B%2BqceWLv8mUrZM5h2Pi4iDJjefmOy1lM%2FnAe9DAu39%2FunyAKfw5A2ZxjSbQrjgMQEitZfLcjbe%2Ft89wyPf348byz%2F%2F0hQqVyI5LzELIrfGQNXwvSMqjsbDJOhh3%2FrhFYe2GsyA1%2F1U20ehSvXKu5Oq02bYMU9M5ddSt7KigU3Wr6xCZHWHxdELlFFhA1jspc%2Bi%2F8W%2F76A1oliBbsAj2nLFvJEsqmaHYgL8HCoIwMen%2FG5GHS8ul1GF3jUp18ghS8N%2Bz4fD6yq8eiOBhCAS9goNknpDjyhl4uGzoKFlLDHQM5AWcaniNW6l%2FEKQbvHZETHLqk1I6zO7X00KVit2JJ%2FdrmbGRVcDVKjyjJoz%2BXSghiPhVEh1Yeki9YvhCnXP49f9RzSyzeMJzT3keksk0ScY7%2BgbxOZSW0FwIHPYHeW42nukUCIZWAWe%2FG%2BOce2%2BXZEJ9lCzA9cUzPyA7h099%2BiKbtMDfM7CK6bbKbmuz0Wnqqod0UDjSMq3hH85eXVMBSvppWih%2FkJUH8Pd3M95VUw0I7PxAY6pgFSUGx2EYERZTiQhcqI923C8%2B7wmwUl8Pyo6E2DgFJZ5KbQOCjfYWeyKX6V7K0JSBrCWvPp6PWG6BG3jzWUakNb7awKVUFqOCjT2WrVR66PvAB%2ByH94QhkrU8%2B1uEm0JJHp2LVaEDjjlNkQd1ohYkbE%2BKFiLBC8pvFJZUS%2B0Tb%2FzDSsT0lQfYWmWVWQ4twKjWnOqECqCtB7Q1oItZGfNQycbm0zs3Ep&X-Amz-Signature=909012da3ee4616dba2faa0f56c6c718adb569041348fba27f083af0e30b555d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
