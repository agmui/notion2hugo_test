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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=f66caa006112877c4b96dcd09023af9202a780aa07512ddbecb4a760105ed21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=27a9815dd599eb1fb37b08789dba38c91e591a08fbd96865200477a1c368c2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=8111fcad9dcd3f52e57da8c8bfb35c8e1a8ca702aa1fa20f227055af4ae42765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=0f7b2768ea39c173b69c7822b1b51b00bbb6a4f8a29c49b4f6d9f96b22c0ec2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=a5cacae430eb2df14f1685e8e84023eae6a6f7c66c47d0638234b1eb5aae9e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=0db247fd9af4634f2499948bce931180b6f352ff15ef42d91b4d091a6df7e69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=aca1480e96ad3af47fa99eb98d21fa1ec2ba404b000fed6d3b489513f6cb5d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=06dcdf03fc37c06c0300781c28bf118e2784e2a8ed2fe4e6b6c2b5d9c6ad7b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=7e8fec8c496e828c71d770218584ee06c85942aed55d968e48c0cd46850c452c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=39cf14e8d25e68fe229b81a849bff81013b5ecd95d02e20430daec09949a0aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=35611a9721161fa8e371e23176fe02d035cb48216258ff36024974ea5f49d2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=41e662482dbaa9e6ba37dd7d8204d66431c113105c85f671a523f1b62e6a878c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VFYQ6V%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIE3jtoeBe5chnmvWFfb8Wfud%2BJmasDGlho9RuuG72Kc4AiEAijtpMsej9rWMU8garqtcLE80XQhxXkG%2FuH2v8acCr%2BoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUFBMVebGRuxUGGcyrcA2ViyCe22rPavaYC44jhYndF%2Bs5Iaib%2F%2Fs8sXZjD8Qv1e%2BZJiBO%2FwkCwXdoosLOwahhwzyhvrk5ZGxcdS7m6RZK21plpEXRwtRPamHDGiUD6RAHVU5A86Ep0JdrmPmYGYP5nN0vPAvV1uxE4GEQ0eFv8o5%2BFc2k04XTNFQtnNRx82lm1TsdKlH41SyGSjw8%2FsMNfBTZOTbbhbM8FKcGfutFJaCioF8rh1Dcwd6pgPAeWABMHn3LUHdGTyRUsq7sgMIJEVQ1ASeAh5vN7sYVKMG2wA0W8z50yUWtfqrFrIoWjqarZWyDR0%2BYhy2gc%2FdAwVFv8xqfQ%2FEKOpXxaoAlH8HgU1B5jT9udqUfo4AxOKQgZ7tfa0%2BMyRUuyD6qq3RrK6sCMEnAMYFHTexDiC1rcJXWAhs28wwUaImTs8sckr96AKqy6OfPeUmG%2FJnvWAUl6UNwnu3tEUIIgOaCC1r1liRPvCIHgGX0zqshIYSfktJTXjLCTlEXQoxKS7fDu34Q0gQwnhAHdYnHYF2NX4bFEI4dlGJt4CubIPShZEUagUKi8xhswEsJUneZcYJ0cHG9FjCWTiznU27AjpZ%2FJ8ErYWIpy%2FTxQWztw%2B2pldtyAoSGEblV9pq1hb9ugpuxFMMKy%2BdMGOqUBweA6V0SydRi9fzB8c7szTs%2Bdqbq6JmsmbvooozgLdk35bXZm2uhjwqBv8KoDTkwBiekIo%2FqWeKdM6YlB6wrLnXIPNADiQymASRKLgoPACMnFTaH1hpUQL9pGgzxk1cMFb5Kw1XYDeGtX2csdZv0EOF%2BsXda6u%2BLKoNOevsvir1502BabwOQXxFWi7cLFlwyW3KtAv8Riu1I7BcAzEuW9uDkclPVO&X-Amz-Signature=3066cfbe93e80d1ab6fb50cd5f743ce2b563bb925e1064917f9a31aa791d7b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
