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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=007c1b8b8cfe421ff2c5f2ab4d49796861596b0c89c837e909367185bb1d3e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=ef37d46495cbd8701e4889ddc6f110187d07b1e9279a6bdbecda46505c911fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=723d39a970abee26a28aff921d5b12ce63005e7e81051ba382c1167c43ade65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=0095a5ecdceef7994e745055edf598762386df73490f7025e18c0e73c5fde2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=e273449a6bdceab945d15da19def6adb7dd10c2347d1e745ef0e212bc31c269e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=f196d16c011984bb29c1b96e8ca6d0e69fd90a20eeb0607acdd94694b0b12d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=62b3aa262bdfe51dea62e7035cf1ac8d6b1e5c7e81e267f127d881828426cc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=d914e07555d630c10b55109e8a869dc3d6dd7b72610cd2cae919c3be42b3c7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=e009bf612fa2aad7a8f4155dd9ec08f36e7d3113cc02945a2b0ac013bccc8b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=55d8f06b58872a531308e6689399ad4e156f1062ba7122538fdbd7bd8711da4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=27d69827e13499ffbd8c19981a1202af9fcbf604cb7437511eec4581212dabb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=2290e25b0cc0a27b33bd4de503b17e45545c2d90f351ae8f95a96d78387550a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXKET2V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl3LoXWnkdhu0T7vXux8Sf02nZDdxfqF5Q0r5db%2BT4RQIgZdq0o%2BwSyveqPhagafSTxUGExf0DOnjqWfnqc%2Bre9h8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBxHO3a5Y6%2FdLyP%2BSyrcAy835Tl3yInswSyYiA6St%2FHtue0tF4VvkK8B1p88SlMNdQAIh%2BmeE4JXJuy7vFURD6Ahe%2FmB7J7S10SuHIgFaxyImfko8Dds%2FJWAaxFjal%2BsbAMrciPN5n3ItZQFYmCdQACuWraJypLu9sCb6W5L8xHu8sp8qbkZ%2F3AMM%2FWyNGOTr2ZQ1TwJktGQToqOufYcbjX8nVJU7pfMUY1vFk4EIjpw%2BeGD3XcwTymXtNB0YVoKPJavRerfzjLR3EFEvGcPyJDpEtgxyL5HiLXiaPgGM5LkPqGna19b9lhyT463xWYK0lEopYVeYYy%2BcBIdgcjNwuhfeheJY0KPqpVqhy0YKFgp7D1uQMlzqsfbDBMIaLkGV4PjbLYsv2jBERjPmD8yYoMCi5K6psDk0BQx9%2Fq5WbDkpARw%2FB3LFbAvRb2h9hGF%2FiDGSrpjKIC0SFC89kpd%2B3agc0rDsfGl%2FAO5fsSLi31NuD4OGH9KFSglvPmp0YFMrsLj4yZFZkTZpXbHQ4riFT2%2FQV0kUTlXKaqOeu%2B5dtztj7iReoby%2FzADg6Qbdm05BIkCSWRup6An8uR0BBtpNFByFdbz1sTkqHlMoSe9ZtFRaolsD7g81PPlWtalEnLhe6LwZ3PX%2BexCaogQMMWE98QGOqUB1lt9nDSo4BsR60aTsHUhaDrlgESX5Y8jHZ0nfdKpoPE2GW%2BdMhzeACQYPfXG3xCPD%2FXV266jwTsKnfXPuKexZlk4GCDmEbfIUR0srI03fesCAif2Sj3guIyfHiq5whPpZjDYxAMR699EYar%2BE0fibKQmXX1r7PQURgPuWVoMrcEcpXEUku8E6Kjb5rgqSmemtwqPWhNdprcqqs3pbp5fSZA%2BI8iZ&X-Amz-Signature=4ebed141602385d30e99b7f3485309dbc3c2de458edc7dfb6635522b3cd6e739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
