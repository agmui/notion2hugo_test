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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7Y2I3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCnNBBJ%2F%2BOm0FSgPRjCvPD5ug2exKJSAdxqWnULjmVULgIgFNiVLpDhHZAWy6NPl0iHEl11FJEBj%2FHrb0WviUfTvx8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAJ3HJs%2Fkypp8wwQ9yrcAzRlNGOLtu%2B8bLhYXJpOfA%2FOUDaCcnuWHlZi1RKSRmCyzz0vWEYtjrMdGsYhVaVcxY0SQKe4LNUciPN5QqoGR7trl5buIkxHp9bVJrb6ftQ4zFv2t%2F32Cpw7Q7IFHJzd9I890ue7O6OhgLjwkoU0jeAikVoaBZoGdIyipE480Lyv9djOWS4%2B5qUjNqHAlL28bj%2BAkks75fHqFpJsIpjkvpE76Q2N9TvUMhCPVS6i%2BzvcpyRnHClLlHre53%2BDnZK%2FQ06HymAp3GXLFUn87YGCo%2B5Mp2tltN8Rez0ToeWeeroetahmDkz55UncZ1wzvjVgHF6EjwARA4Vw4LqixjWhX71yfMRkbKx9zokSxQO%2BeZIl5AWmkRAXXMGKGVA5DQPZnx17ZXBmmoobIT7HG59u3twJ04oXCdBfOyUjXbChW5FEWRggMpC9RwslPIKg7Bq8je9V%2BSBlXopFTiJqdKACEEtEi28VMDv8%2FYtEEwtpAnAuWXvoz7nmip%2FlFYLP4awc0oDBZt%2BIeysiuH23F4WPc9brZIB9%2BGBtMeQ7nuJ2UcbdStr2Aph2p%2Fqfl1PWDB73Q82fD%2Fs3Dox6osMQNYJo5ZMAXlnlDwcF8vRHCnM9tsFE%2BWjJ4O2eE05EtC%2F2MNKGjsQGOqUBb7vgt2QNRmwn%2BubK3IgdJ8Hjmw%2BBuFETRdF8vN40QfU3TPEBeF4Vjgmnen%2FYIvV4qfbfz%2FFdsSimEJsjmVVJ7746lRPf9W1fyhtalHjjKsaPaYb03SzoUYaKtT5gYGoal77gjDGuWCl8hgnEZTVw9HVrp3Ekrw%2F1Kd%2Fq4mw2rbKfOKAAJfyTRIRxGh38sxMAbVTXW5wVBtwpE%2Fyj9c9wQwj0HGQn&X-Amz-Signature=4f5e67e470a69a6e58d5f863cf9883b8aca272769b1a3b886315bd35f641b672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7Y2I3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCnNBBJ%2F%2BOm0FSgPRjCvPD5ug2exKJSAdxqWnULjmVULgIgFNiVLpDhHZAWy6NPl0iHEl11FJEBj%2FHrb0WviUfTvx8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAJ3HJs%2Fkypp8wwQ9yrcAzRlNGOLtu%2B8bLhYXJpOfA%2FOUDaCcnuWHlZi1RKSRmCyzz0vWEYtjrMdGsYhVaVcxY0SQKe4LNUciPN5QqoGR7trl5buIkxHp9bVJrb6ftQ4zFv2t%2F32Cpw7Q7IFHJzd9I890ue7O6OhgLjwkoU0jeAikVoaBZoGdIyipE480Lyv9djOWS4%2B5qUjNqHAlL28bj%2BAkks75fHqFpJsIpjkvpE76Q2N9TvUMhCPVS6i%2BzvcpyRnHClLlHre53%2BDnZK%2FQ06HymAp3GXLFUn87YGCo%2B5Mp2tltN8Rez0ToeWeeroetahmDkz55UncZ1wzvjVgHF6EjwARA4Vw4LqixjWhX71yfMRkbKx9zokSxQO%2BeZIl5AWmkRAXXMGKGVA5DQPZnx17ZXBmmoobIT7HG59u3twJ04oXCdBfOyUjXbChW5FEWRggMpC9RwslPIKg7Bq8je9V%2BSBlXopFTiJqdKACEEtEi28VMDv8%2FYtEEwtpAnAuWXvoz7nmip%2FlFYLP4awc0oDBZt%2BIeysiuH23F4WPc9brZIB9%2BGBtMeQ7nuJ2UcbdStr2Aph2p%2Fqfl1PWDB73Q82fD%2Fs3Dox6osMQNYJo5ZMAXlnlDwcF8vRHCnM9tsFE%2BWjJ4O2eE05EtC%2F2MNKGjsQGOqUBb7vgt2QNRmwn%2BubK3IgdJ8Hjmw%2BBuFETRdF8vN40QfU3TPEBeF4Vjgmnen%2FYIvV4qfbfz%2FFdsSimEJsjmVVJ7746lRPf9W1fyhtalHjjKsaPaYb03SzoUYaKtT5gYGoal77gjDGuWCl8hgnEZTVw9HVrp3Ekrw%2F1Kd%2Fq4mw2rbKfOKAAJfyTRIRxGh38sxMAbVTXW5wVBtwpE%2Fyj9c9wQwj0HGQn&X-Amz-Signature=cfcfa57911845aea8096bd77bae832e10250da30cb785079e9c960aaf40b06e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7Y2I3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCnNBBJ%2F%2BOm0FSgPRjCvPD5ug2exKJSAdxqWnULjmVULgIgFNiVLpDhHZAWy6NPl0iHEl11FJEBj%2FHrb0WviUfTvx8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAJ3HJs%2Fkypp8wwQ9yrcAzRlNGOLtu%2B8bLhYXJpOfA%2FOUDaCcnuWHlZi1RKSRmCyzz0vWEYtjrMdGsYhVaVcxY0SQKe4LNUciPN5QqoGR7trl5buIkxHp9bVJrb6ftQ4zFv2t%2F32Cpw7Q7IFHJzd9I890ue7O6OhgLjwkoU0jeAikVoaBZoGdIyipE480Lyv9djOWS4%2B5qUjNqHAlL28bj%2BAkks75fHqFpJsIpjkvpE76Q2N9TvUMhCPVS6i%2BzvcpyRnHClLlHre53%2BDnZK%2FQ06HymAp3GXLFUn87YGCo%2B5Mp2tltN8Rez0ToeWeeroetahmDkz55UncZ1wzvjVgHF6EjwARA4Vw4LqixjWhX71yfMRkbKx9zokSxQO%2BeZIl5AWmkRAXXMGKGVA5DQPZnx17ZXBmmoobIT7HG59u3twJ04oXCdBfOyUjXbChW5FEWRggMpC9RwslPIKg7Bq8je9V%2BSBlXopFTiJqdKACEEtEi28VMDv8%2FYtEEwtpAnAuWXvoz7nmip%2FlFYLP4awc0oDBZt%2BIeysiuH23F4WPc9brZIB9%2BGBtMeQ7nuJ2UcbdStr2Aph2p%2Fqfl1PWDB73Q82fD%2Fs3Dox6osMQNYJo5ZMAXlnlDwcF8vRHCnM9tsFE%2BWjJ4O2eE05EtC%2F2MNKGjsQGOqUBb7vgt2QNRmwn%2BubK3IgdJ8Hjmw%2BBuFETRdF8vN40QfU3TPEBeF4Vjgmnen%2FYIvV4qfbfz%2FFdsSimEJsjmVVJ7746lRPf9W1fyhtalHjjKsaPaYb03SzoUYaKtT5gYGoal77gjDGuWCl8hgnEZTVw9HVrp3Ekrw%2F1Kd%2Fq4mw2rbKfOKAAJfyTRIRxGh38sxMAbVTXW5wVBtwpE%2Fyj9c9wQwj0HGQn&X-Amz-Signature=9fc0ede9194bfbcd008b9997c524ce3ff99c28dc348827f28c2c3148b1d45a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7Y2I3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCnNBBJ%2F%2BOm0FSgPRjCvPD5ug2exKJSAdxqWnULjmVULgIgFNiVLpDhHZAWy6NPl0iHEl11FJEBj%2FHrb0WviUfTvx8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAJ3HJs%2Fkypp8wwQ9yrcAzRlNGOLtu%2B8bLhYXJpOfA%2FOUDaCcnuWHlZi1RKSRmCyzz0vWEYtjrMdGsYhVaVcxY0SQKe4LNUciPN5QqoGR7trl5buIkxHp9bVJrb6ftQ4zFv2t%2F32Cpw7Q7IFHJzd9I890ue7O6OhgLjwkoU0jeAikVoaBZoGdIyipE480Lyv9djOWS4%2B5qUjNqHAlL28bj%2BAkks75fHqFpJsIpjkvpE76Q2N9TvUMhCPVS6i%2BzvcpyRnHClLlHre53%2BDnZK%2FQ06HymAp3GXLFUn87YGCo%2B5Mp2tltN8Rez0ToeWeeroetahmDkz55UncZ1wzvjVgHF6EjwARA4Vw4LqixjWhX71yfMRkbKx9zokSxQO%2BeZIl5AWmkRAXXMGKGVA5DQPZnx17ZXBmmoobIT7HG59u3twJ04oXCdBfOyUjXbChW5FEWRggMpC9RwslPIKg7Bq8je9V%2BSBlXopFTiJqdKACEEtEi28VMDv8%2FYtEEwtpAnAuWXvoz7nmip%2FlFYLP4awc0oDBZt%2BIeysiuH23F4WPc9brZIB9%2BGBtMeQ7nuJ2UcbdStr2Aph2p%2Fqfl1PWDB73Q82fD%2Fs3Dox6osMQNYJo5ZMAXlnlDwcF8vRHCnM9tsFE%2BWjJ4O2eE05EtC%2F2MNKGjsQGOqUBb7vgt2QNRmwn%2BubK3IgdJ8Hjmw%2BBuFETRdF8vN40QfU3TPEBeF4Vjgmnen%2FYIvV4qfbfz%2FFdsSimEJsjmVVJ7746lRPf9W1fyhtalHjjKsaPaYb03SzoUYaKtT5gYGoal77gjDGuWCl8hgnEZTVw9HVrp3Ekrw%2F1Kd%2Fq4mw2rbKfOKAAJfyTRIRxGh38sxMAbVTXW5wVBtwpE%2Fyj9c9wQwj0HGQn&X-Amz-Signature=455396e4b5d1323a0d37da4f61cb024de7e4133aac1913085cb42b2259569bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7Y2I3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCnNBBJ%2F%2BOm0FSgPRjCvPD5ug2exKJSAdxqWnULjmVULgIgFNiVLpDhHZAWy6NPl0iHEl11FJEBj%2FHrb0WviUfTvx8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAJ3HJs%2Fkypp8wwQ9yrcAzRlNGOLtu%2B8bLhYXJpOfA%2FOUDaCcnuWHlZi1RKSRmCyzz0vWEYtjrMdGsYhVaVcxY0SQKe4LNUciPN5QqoGR7trl5buIkxHp9bVJrb6ftQ4zFv2t%2F32Cpw7Q7IFHJzd9I890ue7O6OhgLjwkoU0jeAikVoaBZoGdIyipE480Lyv9djOWS4%2B5qUjNqHAlL28bj%2BAkks75fHqFpJsIpjkvpE76Q2N9TvUMhCPVS6i%2BzvcpyRnHClLlHre53%2BDnZK%2FQ06HymAp3GXLFUn87YGCo%2B5Mp2tltN8Rez0ToeWeeroetahmDkz55UncZ1wzvjVgHF6EjwARA4Vw4LqixjWhX71yfMRkbKx9zokSxQO%2BeZIl5AWmkRAXXMGKGVA5DQPZnx17ZXBmmoobIT7HG59u3twJ04oXCdBfOyUjXbChW5FEWRggMpC9RwslPIKg7Bq8je9V%2BSBlXopFTiJqdKACEEtEi28VMDv8%2FYtEEwtpAnAuWXvoz7nmip%2FlFYLP4awc0oDBZt%2BIeysiuH23F4WPc9brZIB9%2BGBtMeQ7nuJ2UcbdStr2Aph2p%2Fqfl1PWDB73Q82fD%2Fs3Dox6osMQNYJo5ZMAXlnlDwcF8vRHCnM9tsFE%2BWjJ4O2eE05EtC%2F2MNKGjsQGOqUBb7vgt2QNRmwn%2BubK3IgdJ8Hjmw%2BBuFETRdF8vN40QfU3TPEBeF4Vjgmnen%2FYIvV4qfbfz%2FFdsSimEJsjmVVJ7746lRPf9W1fyhtalHjjKsaPaYb03SzoUYaKtT5gYGoal77gjDGuWCl8hgnEZTVw9HVrp3Ekrw%2F1Kd%2Fq4mw2rbKfOKAAJfyTRIRxGh38sxMAbVTXW5wVBtwpE%2Fyj9c9wQwj0HGQn&X-Amz-Signature=01e367d52dc8618eb6bb8e2a8f1eaee2b0173a8fa4cb488279ce2ed575377a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7Y2I3I%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCnNBBJ%2F%2BOm0FSgPRjCvPD5ug2exKJSAdxqWnULjmVULgIgFNiVLpDhHZAWy6NPl0iHEl11FJEBj%2FHrb0WviUfTvx8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAJ3HJs%2Fkypp8wwQ9yrcAzRlNGOLtu%2B8bLhYXJpOfA%2FOUDaCcnuWHlZi1RKSRmCyzz0vWEYtjrMdGsYhVaVcxY0SQKe4LNUciPN5QqoGR7trl5buIkxHp9bVJrb6ftQ4zFv2t%2F32Cpw7Q7IFHJzd9I890ue7O6OhgLjwkoU0jeAikVoaBZoGdIyipE480Lyv9djOWS4%2B5qUjNqHAlL28bj%2BAkks75fHqFpJsIpjkvpE76Q2N9TvUMhCPVS6i%2BzvcpyRnHClLlHre53%2BDnZK%2FQ06HymAp3GXLFUn87YGCo%2B5Mp2tltN8Rez0ToeWeeroetahmDkz55UncZ1wzvjVgHF6EjwARA4Vw4LqixjWhX71yfMRkbKx9zokSxQO%2BeZIl5AWmkRAXXMGKGVA5DQPZnx17ZXBmmoobIT7HG59u3twJ04oXCdBfOyUjXbChW5FEWRggMpC9RwslPIKg7Bq8je9V%2BSBlXopFTiJqdKACEEtEi28VMDv8%2FYtEEwtpAnAuWXvoz7nmip%2FlFYLP4awc0oDBZt%2BIeysiuH23F4WPc9brZIB9%2BGBtMeQ7nuJ2UcbdStr2Aph2p%2Fqfl1PWDB73Q82fD%2Fs3Dox6osMQNYJo5ZMAXlnlDwcF8vRHCnM9tsFE%2BWjJ4O2eE05EtC%2F2MNKGjsQGOqUBb7vgt2QNRmwn%2BubK3IgdJ8Hjmw%2BBuFETRdF8vN40QfU3TPEBeF4Vjgmnen%2FYIvV4qfbfz%2FFdsSimEJsjmVVJ7746lRPf9W1fyhtalHjjKsaPaYb03SzoUYaKtT5gYGoal77gjDGuWCl8hgnEZTVw9HVrp3Ekrw%2F1Kd%2Fq4mw2rbKfOKAAJfyTRIRxGh38sxMAbVTXW5wVBtwpE%2Fyj9c9wQwj0HGQn&X-Amz-Signature=7aa3648031e5b42313debbf446db39d8f98fc0b303d1e119146ddc867d01086f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
