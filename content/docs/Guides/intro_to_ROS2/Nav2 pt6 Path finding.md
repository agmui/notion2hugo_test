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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=bec7c3a5b6f9287baf266f869384dc6a9680f73976a6d0dbcbb287995c42cae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=920af1a5053450b5eaded33bd24543746ac6734392e9e2d5a9c79b8454887e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=6a4b1efde75daa20bf1383820808769eb2aa3bc1d9f4c4549674865d522e00de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=3f99e43f5d724631a00ddd7277b83b9cae6399fac45e87d034c9409a1ef3107d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=008b066b94f3a28506770fcb97e0dc52f656e6daeefaffcdf2785268ba072c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=8e92c4d4dd4514b87f5448ce17f009b0e20667588865bc1ec3d7787964e13cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=aecea595b004c97696b933db28a6e397bfb834a31b17e8bc3084245f5a59dc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=6077b1df995a21ad6bc4bcf3fb3d41d24e6f1e5f1ac6cb3c717c4384ca19b553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=a139978620cc38b7623d18743998afa9a4f8b0384a2103fe44c5d851c4bebf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=21c9f9b942bb3ed1cbc35b3411a585cc705e67d7d1e6284eecc5951603f670fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=d84477d16966e37a584d7ef24eaecdf0ac3e4371127bcdc1a44428dd0cd6b109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=e196a4f5f5c9b68304f42f2525f7b8f2077e7494d7f553f8e66f2c18726f459b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4ZPWZA%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDUii8dDjuwVyf7YkNKuplKEZLO0PbbNeNxH9HdXii5ZwIgGUfQVAbLOpFMavZ7qteC5pjVZXO1L54mp7lhQ4g4tnkqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz17uK9uWLHt6kVUSrcA5iYtCVO9VihbuiRlmmMgnJGfeR7zrdZHqFT%2B494%2BWudWe5wi62MlPKsAolvMTpx9zKkAvk2F28wxi1y5mP8IuFL60%2FoqkgjNQS1ZTprl8ako%2F7YUN%2Flfrbt%2FumnCZPy1u0JMk%2BvM7lyGzVA5mHBwHIRZ5bBuA9pScqIhGlLM29KG6kIuXytZUQi0vVUlV%2BL3EFyIKuuAM4FERfAzM4TpZbKXMPsbFQlP8MnHAwA8oubuPlSXiVmW7C3wEN3rrEroF5LEx8EJYrblOlkI9vvPIvqmmDoURRjHuVz6wkr0EYXkpSkiGTEAbxiJm8DeqaxN%2B%2BzPOBnlKjeru51eLBFIIznlW41fCNFLJxWgARCKL9hWcuMmwEeVMaiDQgECjAeLR7EN7TB0e4PD6zGeBDzPKyd1qOJeI5LYARIfDSD8aae%2F2Xp2PcpHLwvqYHklrBXaEV7%2FPrHzbrUYd81lWqsvRXQVRJrH9Ve3P%2BwfCshTB4BONqxYWCT6GtkFt6ImxJRC5BHssOg2mX2YEWzDh%2BWSUUyi1z50FPGaA%2BamQRsyNJKBIRJ5%2B0%2Fcy5pR41sPl1wDDrv77M9N4lqrmG2VhWnTMauPXt9pkIg08LTxyS6hbwxZB%2FphaKJmnJqEDYaMOPn4s0GOqUB1AUO35BkrxANh7IPtBbLOw1TofSWEhsxTTRyFDu1yaMBHqzGDH6JjmP6V1MfAGi1RJl4%2By%2B3vzGifme6FecC5tgb7YCY3F4iUGVqfdJGSiflmJm1lsekY9T2XpFw%2BLmovc6DKlscnp565d7dC8GfjF1%2FAkaLeVDboDmuEy%2Bp%2FrTTS1wdo7IHjKFwaB0EPLSkV%2BG26UAKHFDvIqlHBiLHSGNxqa0Q&X-Amz-Signature=eba6dd0f9825a73adade9064a1ead3c5c157da3bec1da6a324d4ce659923e7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
