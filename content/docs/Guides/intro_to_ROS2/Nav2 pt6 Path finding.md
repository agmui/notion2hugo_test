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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=80cc4dce5cfd27012598e7142c75e51c20f5d7243f4fe3d222272e857eff6e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=7c949f8ab73bc822d90603689f2c39797bf97eab319fa2d861567d3febdbf52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=ff7c5da4b1caddda0ee311d80b64e318cb91cd98bda069b6fa120bcc42bf674a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=671ee7ae712a11454f1117a13e926b002904d97ed248e78a26bde668e9896190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=31b4b13597aea7c7395d2458c1f158747a15518ad91b30ba32d7032fdb8a4842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=80c11dd645543789df816fd45dd474271e4fe7311902696f2b27213d3ac79dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=caf142ea590cf4640040a2055b3c6421365bc5bf590ca9ace465974a22dc79bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=b2b3e6a4811422db1766eebe3827a394cbc87702666aa2cece37c99a6d53da45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=c5f29285fa2314725d8c756689532d8f9cb665b9848d804a169fe59fdb326b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=1d096080c751ef0e042f04805870a4c12a5f16322bb64419324cbdf3997dff2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=31cb314fcaf696dfba32f121130ffe2396e9695c0a6253b7cf5825d8983f37a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=3cbe19348f66de00f5afd419f5e44958ab0ec2b8427f2ac12e26bae9902496ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQRE57A%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKHsYiikSXarEBpRq5%2B5rlXsdT0fEvTzgG3WJsLCo8DAIhAO1AbXRC5LowFx0xFN3A%2BZGnSg0JuYB29wnL5G%2FUKDyDKv8DCFEQABoMNjM3NDIzMTgzODA1Igz0Xwj49v%2Bd9u2PxBMq3AODse%2FsMJ%2FwIhtTAYXXd0fgN%2Bl9sF%2FthnTh6H1VXRwBMKg4cM10PJWplMB%2Bd0EHGUXh2XvFvvugfGttxvfFtizZUYY3x8eoKORvVwnNWYVZGZCXrc9UYh6i%2F3%2B%2FzAh7wLSbiJLLdNk7XeEnk1E1suhsDfl%2BgPyvjhM2oiCo4Jwh%2BaUKyrLITkga4ibXq3CSNo4z2lgniIjNESBnuEHHp1AK5Ddm23xgyqoLlWsTsMCNZf1euECcrrD7KxezIQ989z7ZruJ2RdKolvBy%2B41heJwQc%2BaEvoCVQslL6Y5feb1DLyEtvG8Soi%2FMKE0J17lh%2B7KAif3JerMves7ToXtWsRU5nLDiRzc0UNHl96il6BqzuYJJy98IQgMDP%2BV%2BAy54fMVgJFC9QnPPYTwV2gbsoMv54e3SuQ4aeGYzopUfJMlWBJwAKQ4hufgXDyquxVHEEzRpn30KEZwxoZzsGr%2Bm3hnqssuN4qzOTLwgKPU30vUw0rhKdNLIXFscwvFNTGvAXbT0mehl43dRd79c73pgIWEGCrSG%2BHrfr4IoJsAwmksYbuQ0wVhHF4YtX%2BWp700JyPWkj65rgrbx3KeSKN3MUExyFs0bQyZuO53gHIkvDmnILykA58S4LBN%2FuRMTFDCVq7bHBjqkAaCZKT0im%2F6Dat5KpwFNvQZw5zOZ4qjPnMc223SM974wR8tqSwqeG38iJmKg%2FNUzvGKI74xoZTzAYNywv%2Bbdm1LdIfoUX1haum%2BopwbCxdi5AQvweTp%2FNFb2IYiUELx9jdIDkyBisHT9IyEY%2B9O2AVcuNH1XtlkAUnOCS5wHjQAefyZ5bFDWzNhsrSchwY2uSv9O1WkSomNKobh%2Bscjm6r6qtRcV&X-Amz-Signature=4193dbc96b5b715d1a7340b3a04f17dc266f74d78dd405becb6a26653595b82f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
