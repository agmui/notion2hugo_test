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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=998637655729f15314f1c2e1c918e63126f8ac6a33e19f7e637846f18f223b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=44738c66303d6e5bc8c009d313d456d0683f474e4f04bbc5439e6dc8d33282f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=b41ef528a760a8e73eea26faa6d7ed97439f825d5bcb9a2889439d63df67e7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=298b6aa8a31274d5da95b18bb591f680d8c6d64e023836b3c8696db718daeb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=18269405f59de4bb0fa47f1cc035ca8847153dca7563c23cb9df3b075350f933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=30c606c527f360fad15915fdc400c5eed53c25fe7ce9d3442d2eaf158e249ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=5ed4518e099c15728842aed2d809ce45f152bd579fee1934434f45a088111482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=7619a8ad577f252a4d9a01d487c86775429916fc94cd70b6eccbf86666e5f901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=c9f01a1e833e50f4e610e52b479a408180946ebbdd50f84c30c843297cf4fdaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=cf6f8d9a342c79a06818a0958bec4e8fa9c855c8405259d2cf2b278983a3d75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=5fa83d639ece5fa9f65f1ffa9449d391538fe11ced62cdcba241b5c7d6ca3078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=b546f235249197ff1de6cd39804ebc73a85e93690b5b7abefc5cc07d11d09937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666P27Z7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGkCq3uiikmjlmbDQ0abGgOk67wsmaGhugLQUyNYXzhgAiEAzPsVP2ckpZh%2FdzSrQpNMB3r1IpWs3aee7Il8cBZ7SHQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTP5tPFqCFRORtroyrcA3sez%2BPbypyO5aCbiUDC82rIt4SkUBtlCuAu%2F530DeMyTpbQ%2B6FqPIltHo8rLTJXwi4UPBExAV%2BC9BendD1cO3g2n5NwueYiScZ69iHYa4paDyAIrLNBdX35Q4vZ4D2xIGlM5f9ZxpHKv9XhgW8W%2FU7nifhlcRmbnCNbP8FaFN0bVuWTy7ClkXaWC1pPUrv%2FY3FDDDit3XmdfZ9UXkXxcq6U%2FJniSx9pjjnJu5bCqZtztQGMT7CBXSEx2dXtl64J2qMJ4tKPqJ%2FNQ2eakMlaUIYnHpe6sBWrxAw00wcx3lInUx3n4RyZwlypijHi2ESSrvvAbUQ6RaOnUrF8u86XG1ddFNV6hhZEiwe0dv2t%2BYrG%2B0Caw5tdcd3YbDQDqLsetiU1J%2B2k6imCM9C%2Bh0SmAHYFLB55NgaltSqA4CJUfu2YVfzngA9QqsK8d0qFklqU9SNrlqbgzKJabXau9RsSPoJfPweoi4Ak%2FDEReMWjWHvCy6kTOfIjkB%2B9BeRKMbv9Fm4VUWNndT0zCVdLQaadWd4qIeq93ervJMnHn9HKAzDBmeiqCibpmNuZCacbpIh5Vmz99sD3N5OsvhX1dyPmZHIs4JfN61dWH6rs0esWos9BgTYVqrmhhCXSqoGIMJ760sQGOqUBJuazrfyTzfXxFzCYr2XzMw7F7inQ2SattpOGc2zqv%2FDadpaFgOYiayc8g8HEpmMZz%2FQ1KLy3esCu8jJcFA502MjDjG232l7Lhq7QV5rcLHj357oVqLcnp9hj2hPV%2FusGYfsEO69O4s1jvAeQUbrXxmJEfbsbEtZCrInkZwVhrVgv2%2BaxhhwSRpSLk%2Bkl9AFhxH0RU7l%2Br59%2BAh33x8Kq3k0cSybJ&X-Amz-Signature=a8076e689c32cc8552b423812ce133121cd081372300be4c23a5024e9547c6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
