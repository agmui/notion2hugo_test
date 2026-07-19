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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=aa69a14c5a6a8d644727d17b56313d5179047eccbbf1ff6aae0c1a59dd68f7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=6f820134c584503a25a67cb5bd847512b6499b773888538be245b6193f1e1b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=7aa7091bbc4b747304cb0807742287bdb7908e5dbdadf0019a65c9008387ae9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=0135d9e575e6004b2984ca3067c1609db68a5eb3e97c188131edc776178af50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=2bce266c699ab585c1f725a3d2f085dc2deda9bf0913344ff22c717292b1557e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=aa3f83c6bb8d83b500509db9bf4be3501c3731705c922d107a4c474abcc9c9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=446c92bd5acd3256fbe5f7a1c9267a43e966e4d0222ac097c12b3b0ee7e6b010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=05d860bd8cdca6f7b24e7af52cce7f45dfdd54aca19be3b99c8380ee6951f9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=f9936c0b8327adebb334b970be08e019f30a42cd5467fa0aa4ad8803916814ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=01e523ad62cb400fd540774338779214fd4fc22a217a9299d41875ca10799385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=57d4abf692ca872ce01608da6b31b9bf6bec63d4dba8c2e12700ba75b4b0fb7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=3ca00b3b81a780ab996fe6658187a31a373992151b0f4fdfb6850e65322a8ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MO6FAA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyOthc8lJvNW3pXAhLPe8HL2Pewime0OVvfkRNMaEJ1AiEA2ekRpMi6JA2AI3dRBgBHE5EI3ZqBjjhBtFDbFyvz7HkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLdCAjtCInYEktj4ircA3w6Rdvu5ENG6wwNXOJknIqOXZnuL%2FaVhZHjOWGsU4RzsBhi6DuqBD%2BJVvk5TIbt2hDACrQPTyndMucB7B1zjkdcw%2FkuyyiDP97e3eoJNxFyoX%2FDAGD5DWz4W6AlOLb5p2V8X3rGwkoIERxR4NedEECQk9ZeWP0ArajV7OKZGl3AihsuiCPqbdCG7zW6%2FfYz9G9yDEn3tEgQXRMtw2qAZRzJELaFMOKLLpg4S96dOx5GGLuFWczRNtrrEGBHxq%2FQIZJsiV7hgb%2FgmZYl0BQRdLwvC83J8oCwWWHZ1spZ1anjKyOJXcNaFQuJlMwhgTVwpjhELTla5WvKDzIvStyV6jXbBqmqWRCocfGty%2FmIDjCJpO%2FgViFfLQ6ItTj5LXPS2D8U0PzdOQxVXPQTPzuOoCiHCB5HP6Iixxf58lPK%2FstEmac6pBLD6pfNIEFF6jJzlgY9D%2F9Mw0JPD1%2BPPPyvouHZT9P%2FSUGY1%2FWFVzmKPMretahD8uxHTVzYmU9L0DtF%2BVtOhuWezCKD3R3O3xL9i7mq1dGAmUk%2BG9B3yn2GQTu%2FjQRxXOntmlW3iMQ%2FrwwTUW1xw6tIeDbZJopM%2FunMI25VolPlWIA90z6lXftodJpwPeU940S%2BI4OC3yC5MKHW8NIGOqUBs%2BroB65jmax%2FMqdGqHgtguZS8HMqCe8eVRiYZ1D41drwMx5liPjZpaFsr8wc97gatXYGX43I9HShM3MWKyYj1qgI5JxIhKkfTjKYg1QiOSkeiVsIsXrinwD3Dwsv77UFZC4i7TUZrL2Sz97fWEVTUNlwtv3H1fCXQ2kkVKh6ctMFtdx8ey1wvS0lp8UM11yAflECN0JjNsY2HAEc0LGP7eGvwp%2Fo&X-Amz-Signature=6e4319e9a71a66adb97caf50fedcdf1161aa895168fde35a60bbd28dee0c949a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
