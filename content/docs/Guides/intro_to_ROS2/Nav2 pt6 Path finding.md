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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=9d9c2dcb3214496e747b0d6ea8c6de6322a4748df98b608bf796c72bd16aec62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=782628993d36dec5f09bfd487dc7d6421b8f09c1651292cfbdf8ce57b2dd599a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=83af16a44bceeb190fb8ddf7954b683abed6519cbc733014129045227395e7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=10c31c5e2994ec4137bdbd99f2aeacfafd9b8c92170e7e1b2684d64dc8949574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=daca50b7fff0dd0c617d048c75e772e808edc2c9154e962db8147323500cd1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=cc778e86305056a920df0450561b0934b5914baf73edab9f6b36de0e16add68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=0ba07c2e193c3eed528ab74aaf428d007c61840688b16881f06a941d6c780a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=8b1d96b3e6169c28be87f6cb99c33ed7a68289d15789c5a39af80febfec81f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=42a610c1bf3ad6114410f4c556d2ef2cdb7eb6405bda8f465a4782ab45c986be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=f5d3d7cfd212d2a52a836251319945a9e890ddcca0d0b64be70b0f34a1190dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=7b1a64e5f8a30f479d37bd1fc404e627b4cf4b8639a340f73d11e1d880af6999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=1cc84b9e1e67ff8319053a131f131debaf1065498ac3739da6a1a5d104239919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPVY6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDXc4kbBT1%2Bif1R5bZIXfVJiGBstUC5R%2BwX%2BShh9H5iRAiEAhXhh7h0LZQRiJbk70St%2BHi5Y2Nh7CmGknVDE6RxLRyYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqQwq8mihocI3o6IircA7rXqPanvCaQQ3rqn98mgDA2ezC%2Bv9SNo3SpZVnzlFcj1IWnzT7my%2Fd%2BC%2FEsrBt1YisAzG3NLKF21%2BgwCYiV3GHNN4OkhmtYEptotNok3EWLpE4GblRo2qu5TyJ451q%2FDgXee4%2Fi%2BXfsysdmHdUdnYsi96Necoob1Bbr04L1kwDvcA6elT55r5DYNAKlU5a7scleVC3tQLjZtlHicEaIxl7czm795yv8%2B0BdB7dmgq8ciuljb%2FTWKQOGT8F%2FOTiXr8HPZRUYn%2FEAt169YjVOrfimNxgR9anEkWhuLWrxD0rviOi5zAp60KmbFMr%2FPDA9WAqfg6FeLlzQypgJ34kHqzOQ7w0MJyMjCAJ%2BXFqVrPuiYe9bFBzjskSx5%2FxnNJtzfMPH5vq0wggJujzCk57p3AQ3sPRUFI2UzZOkQkP4pKRR52Ypox56cezvT965sk3ooPa0mSsX%2Bl9tnN5abQo9GgH3c%2B2HggY7fAMUoP0xoByS4qPmGMVvJ4D4WbGtHCEWHpDa3QVs7iE0mDZH3AaNfMSZMrr8Ni5odhx1Z7N%2FpiUqvPlCwlGYHUqqRSZRffbNeyUBrB53wX%2BO%2Fv%2FiU%2Bc6GQcGHTgFhrVaUK7QPU88GKaCenTZ8zh1P4FxD0LoMMz4w8QGOqUB8FyOODkfi7tuJbc5ssecZx9D7KokiPSF5SY1yb%2Ba6r9hvUwHd%2B6YFTpLJXtFRf1dXojCGlkgOnNInIHo3rUGQX54krqCcCpqZXuBPrPqxUV%2FRO5f2DQrM4Ps7TBpN%2By6B0C4PebMIUGmm316iDFfQn0ZshBm58QEdRZyPuOeqP3pBopVA0CGg6coVW4sLX4ehYEOyLyIu9Fkdb3Ba6XX9qjPBGER&X-Amz-Signature=a69b0b4478857714a06d5823bbf1ed8e2176627b1f8bdfcc5f865ac626602c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
