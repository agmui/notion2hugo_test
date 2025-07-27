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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRFWRVA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGCTKa8I6gw%2F6MhBnUPTeOvt5eN9NI8dp2H1VtKi7YvvAiEA2mwAPpBHZuNiEGXbsS5tePTV0K48gbW8z3gF%2Fm4%2F1iYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGo2EbBIX%2BxuahGIPCrcAxP4Qp6JbXaZqc3ocvipg4cScBeUUasJO8LbciyGhntlI8ANlqpovSOVrm7T603NI4YpCfe%2Fe5j%2FxdwWnOOjoHQAMSSrlmMdYV4QWEZ%2BAVz1N4w%2BVvgRA7YgaQf%2FR43sIrvWsVJP%2Fh6svg3JDsrc6kljwwm%2FSDI37gZc1D%2BULvhzar3fpPyQ6EKgt60uSxYed8z4RyE5HwjYOD4glfCLLI%2FoIHMbdU%2F8U11TLWNGoE5lpkbqP%2BDhAdW9OcJVeQOPOOEHpc2ZVqYd9pXx3gydS2sHw8HNcGJnoiCADMI8WH2fLLlTH4sQADzl02bJEfGR9fwNbzjHQM7ORHwiBSpCy212%2FMcKzrQzXjhtVFaL44PM%2Fd5yIaSJDbbkcsjx1M8sUFmx0xdi2Ym8oyAqwc4fKijq9EF0wFWnBgL0Lvm4HpE5pGywMaU8Ak87s9PGZtboxigggnRouscP8LQTGcJI6IsHMVn%2FFcLghJhpwz32aCmsHjotOtqmGt0xa%2FT1iqP77PZMJEA4OlThvD4mh9OAm6YJCnDEt9O6W4EPwfy%2FuEi6XK5c8zruOsJFqT8AsswHbveZzpwRYEFtZOlhe%2FF76%2FzW8XPPnRjtI8H%2Fbu62YikTr9dwCa%2BePrgo0MvMMKuAmcQGOqUBmRwRCZMO01uf1DDvdXCdZu1F%2BfVlFYpLLaVq%2B5CdBfrUsoqn9CqSID0ou0UP5oayiWhoTJt%2Fbh5DzVL5vTl2qlG2dmBBFiwMb0BLtzO%2FiSYh22UCl7unbqUSBlciN%2B1zyd7PYsfiIdrxM%2Bohc6K%2Bu%2FvZvnBTx8ty62dAJdnE5Y%2Bs69PQRnxO65%2BFLqd6VCrBmO6NoP0NWdcK%2BkTsrJGXfSPFS5%2FT&X-Amz-Signature=8334e12c14210be8a6fd7b60a1dd6d7216f6efcf6931551a35049c5d392bb054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRFWRVA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGCTKa8I6gw%2F6MhBnUPTeOvt5eN9NI8dp2H1VtKi7YvvAiEA2mwAPpBHZuNiEGXbsS5tePTV0K48gbW8z3gF%2Fm4%2F1iYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGo2EbBIX%2BxuahGIPCrcAxP4Qp6JbXaZqc3ocvipg4cScBeUUasJO8LbciyGhntlI8ANlqpovSOVrm7T603NI4YpCfe%2Fe5j%2FxdwWnOOjoHQAMSSrlmMdYV4QWEZ%2BAVz1N4w%2BVvgRA7YgaQf%2FR43sIrvWsVJP%2Fh6svg3JDsrc6kljwwm%2FSDI37gZc1D%2BULvhzar3fpPyQ6EKgt60uSxYed8z4RyE5HwjYOD4glfCLLI%2FoIHMbdU%2F8U11TLWNGoE5lpkbqP%2BDhAdW9OcJVeQOPOOEHpc2ZVqYd9pXx3gydS2sHw8HNcGJnoiCADMI8WH2fLLlTH4sQADzl02bJEfGR9fwNbzjHQM7ORHwiBSpCy212%2FMcKzrQzXjhtVFaL44PM%2Fd5yIaSJDbbkcsjx1M8sUFmx0xdi2Ym8oyAqwc4fKijq9EF0wFWnBgL0Lvm4HpE5pGywMaU8Ak87s9PGZtboxigggnRouscP8LQTGcJI6IsHMVn%2FFcLghJhpwz32aCmsHjotOtqmGt0xa%2FT1iqP77PZMJEA4OlThvD4mh9OAm6YJCnDEt9O6W4EPwfy%2FuEi6XK5c8zruOsJFqT8AsswHbveZzpwRYEFtZOlhe%2FF76%2FzW8XPPnRjtI8H%2Fbu62YikTr9dwCa%2BePrgo0MvMMKuAmcQGOqUBmRwRCZMO01uf1DDvdXCdZu1F%2BfVlFYpLLaVq%2B5CdBfrUsoqn9CqSID0ou0UP5oayiWhoTJt%2Fbh5DzVL5vTl2qlG2dmBBFiwMb0BLtzO%2FiSYh22UCl7unbqUSBlciN%2B1zyd7PYsfiIdrxM%2Bohc6K%2Bu%2FvZvnBTx8ty62dAJdnE5Y%2Bs69PQRnxO65%2BFLqd6VCrBmO6NoP0NWdcK%2BkTsrJGXfSPFS5%2FT&X-Amz-Signature=0728731ece8b8bbc45133517068a5f6220560b5364ee358c0191fb80b245ff38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRFWRVA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGCTKa8I6gw%2F6MhBnUPTeOvt5eN9NI8dp2H1VtKi7YvvAiEA2mwAPpBHZuNiEGXbsS5tePTV0K48gbW8z3gF%2Fm4%2F1iYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGo2EbBIX%2BxuahGIPCrcAxP4Qp6JbXaZqc3ocvipg4cScBeUUasJO8LbciyGhntlI8ANlqpovSOVrm7T603NI4YpCfe%2Fe5j%2FxdwWnOOjoHQAMSSrlmMdYV4QWEZ%2BAVz1N4w%2BVvgRA7YgaQf%2FR43sIrvWsVJP%2Fh6svg3JDsrc6kljwwm%2FSDI37gZc1D%2BULvhzar3fpPyQ6EKgt60uSxYed8z4RyE5HwjYOD4glfCLLI%2FoIHMbdU%2F8U11TLWNGoE5lpkbqP%2BDhAdW9OcJVeQOPOOEHpc2ZVqYd9pXx3gydS2sHw8HNcGJnoiCADMI8WH2fLLlTH4sQADzl02bJEfGR9fwNbzjHQM7ORHwiBSpCy212%2FMcKzrQzXjhtVFaL44PM%2Fd5yIaSJDbbkcsjx1M8sUFmx0xdi2Ym8oyAqwc4fKijq9EF0wFWnBgL0Lvm4HpE5pGywMaU8Ak87s9PGZtboxigggnRouscP8LQTGcJI6IsHMVn%2FFcLghJhpwz32aCmsHjotOtqmGt0xa%2FT1iqP77PZMJEA4OlThvD4mh9OAm6YJCnDEt9O6W4EPwfy%2FuEi6XK5c8zruOsJFqT8AsswHbveZzpwRYEFtZOlhe%2FF76%2FzW8XPPnRjtI8H%2Fbu62YikTr9dwCa%2BePrgo0MvMMKuAmcQGOqUBmRwRCZMO01uf1DDvdXCdZu1F%2BfVlFYpLLaVq%2B5CdBfrUsoqn9CqSID0ou0UP5oayiWhoTJt%2Fbh5DzVL5vTl2qlG2dmBBFiwMb0BLtzO%2FiSYh22UCl7unbqUSBlciN%2B1zyd7PYsfiIdrxM%2Bohc6K%2Bu%2FvZvnBTx8ty62dAJdnE5Y%2Bs69PQRnxO65%2BFLqd6VCrBmO6NoP0NWdcK%2BkTsrJGXfSPFS5%2FT&X-Amz-Signature=4afbe0924527614da821e68e396321304116fcd69f38945ddf633ea7d8ac3aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRFWRVA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGCTKa8I6gw%2F6MhBnUPTeOvt5eN9NI8dp2H1VtKi7YvvAiEA2mwAPpBHZuNiEGXbsS5tePTV0K48gbW8z3gF%2Fm4%2F1iYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGo2EbBIX%2BxuahGIPCrcAxP4Qp6JbXaZqc3ocvipg4cScBeUUasJO8LbciyGhntlI8ANlqpovSOVrm7T603NI4YpCfe%2Fe5j%2FxdwWnOOjoHQAMSSrlmMdYV4QWEZ%2BAVz1N4w%2BVvgRA7YgaQf%2FR43sIrvWsVJP%2Fh6svg3JDsrc6kljwwm%2FSDI37gZc1D%2BULvhzar3fpPyQ6EKgt60uSxYed8z4RyE5HwjYOD4glfCLLI%2FoIHMbdU%2F8U11TLWNGoE5lpkbqP%2BDhAdW9OcJVeQOPOOEHpc2ZVqYd9pXx3gydS2sHw8HNcGJnoiCADMI8WH2fLLlTH4sQADzl02bJEfGR9fwNbzjHQM7ORHwiBSpCy212%2FMcKzrQzXjhtVFaL44PM%2Fd5yIaSJDbbkcsjx1M8sUFmx0xdi2Ym8oyAqwc4fKijq9EF0wFWnBgL0Lvm4HpE5pGywMaU8Ak87s9PGZtboxigggnRouscP8LQTGcJI6IsHMVn%2FFcLghJhpwz32aCmsHjotOtqmGt0xa%2FT1iqP77PZMJEA4OlThvD4mh9OAm6YJCnDEt9O6W4EPwfy%2FuEi6XK5c8zruOsJFqT8AsswHbveZzpwRYEFtZOlhe%2FF76%2FzW8XPPnRjtI8H%2Fbu62YikTr9dwCa%2BePrgo0MvMMKuAmcQGOqUBmRwRCZMO01uf1DDvdXCdZu1F%2BfVlFYpLLaVq%2B5CdBfrUsoqn9CqSID0ou0UP5oayiWhoTJt%2Fbh5DzVL5vTl2qlG2dmBBFiwMb0BLtzO%2FiSYh22UCl7unbqUSBlciN%2B1zyd7PYsfiIdrxM%2Bohc6K%2Bu%2FvZvnBTx8ty62dAJdnE5Y%2Bs69PQRnxO65%2BFLqd6VCrBmO6NoP0NWdcK%2BkTsrJGXfSPFS5%2FT&X-Amz-Signature=9a585c1c45028b91a935bbf7507d3f66482d7b78cf98f77ad424d3a6719cd699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRFWRVA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGCTKa8I6gw%2F6MhBnUPTeOvt5eN9NI8dp2H1VtKi7YvvAiEA2mwAPpBHZuNiEGXbsS5tePTV0K48gbW8z3gF%2Fm4%2F1iYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGo2EbBIX%2BxuahGIPCrcAxP4Qp6JbXaZqc3ocvipg4cScBeUUasJO8LbciyGhntlI8ANlqpovSOVrm7T603NI4YpCfe%2Fe5j%2FxdwWnOOjoHQAMSSrlmMdYV4QWEZ%2BAVz1N4w%2BVvgRA7YgaQf%2FR43sIrvWsVJP%2Fh6svg3JDsrc6kljwwm%2FSDI37gZc1D%2BULvhzar3fpPyQ6EKgt60uSxYed8z4RyE5HwjYOD4glfCLLI%2FoIHMbdU%2F8U11TLWNGoE5lpkbqP%2BDhAdW9OcJVeQOPOOEHpc2ZVqYd9pXx3gydS2sHw8HNcGJnoiCADMI8WH2fLLlTH4sQADzl02bJEfGR9fwNbzjHQM7ORHwiBSpCy212%2FMcKzrQzXjhtVFaL44PM%2Fd5yIaSJDbbkcsjx1M8sUFmx0xdi2Ym8oyAqwc4fKijq9EF0wFWnBgL0Lvm4HpE5pGywMaU8Ak87s9PGZtboxigggnRouscP8LQTGcJI6IsHMVn%2FFcLghJhpwz32aCmsHjotOtqmGt0xa%2FT1iqP77PZMJEA4OlThvD4mh9OAm6YJCnDEt9O6W4EPwfy%2FuEi6XK5c8zruOsJFqT8AsswHbveZzpwRYEFtZOlhe%2FF76%2FzW8XPPnRjtI8H%2Fbu62YikTr9dwCa%2BePrgo0MvMMKuAmcQGOqUBmRwRCZMO01uf1DDvdXCdZu1F%2BfVlFYpLLaVq%2B5CdBfrUsoqn9CqSID0ou0UP5oayiWhoTJt%2Fbh5DzVL5vTl2qlG2dmBBFiwMb0BLtzO%2FiSYh22UCl7unbqUSBlciN%2B1zyd7PYsfiIdrxM%2Bohc6K%2Bu%2FvZvnBTx8ty62dAJdnE5Y%2Bs69PQRnxO65%2BFLqd6VCrBmO6NoP0NWdcK%2BkTsrJGXfSPFS5%2FT&X-Amz-Signature=d22e9b3a2e25069cf1838103d89ea9355d18876a8eb8b999ebef6786e2e2f50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRFWRVA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGCTKa8I6gw%2F6MhBnUPTeOvt5eN9NI8dp2H1VtKi7YvvAiEA2mwAPpBHZuNiEGXbsS5tePTV0K48gbW8z3gF%2Fm4%2F1iYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGo2EbBIX%2BxuahGIPCrcAxP4Qp6JbXaZqc3ocvipg4cScBeUUasJO8LbciyGhntlI8ANlqpovSOVrm7T603NI4YpCfe%2Fe5j%2FxdwWnOOjoHQAMSSrlmMdYV4QWEZ%2BAVz1N4w%2BVvgRA7YgaQf%2FR43sIrvWsVJP%2Fh6svg3JDsrc6kljwwm%2FSDI37gZc1D%2BULvhzar3fpPyQ6EKgt60uSxYed8z4RyE5HwjYOD4glfCLLI%2FoIHMbdU%2F8U11TLWNGoE5lpkbqP%2BDhAdW9OcJVeQOPOOEHpc2ZVqYd9pXx3gydS2sHw8HNcGJnoiCADMI8WH2fLLlTH4sQADzl02bJEfGR9fwNbzjHQM7ORHwiBSpCy212%2FMcKzrQzXjhtVFaL44PM%2Fd5yIaSJDbbkcsjx1M8sUFmx0xdi2Ym8oyAqwc4fKijq9EF0wFWnBgL0Lvm4HpE5pGywMaU8Ak87s9PGZtboxigggnRouscP8LQTGcJI6IsHMVn%2FFcLghJhpwz32aCmsHjotOtqmGt0xa%2FT1iqP77PZMJEA4OlThvD4mh9OAm6YJCnDEt9O6W4EPwfy%2FuEi6XK5c8zruOsJFqT8AsswHbveZzpwRYEFtZOlhe%2FF76%2FzW8XPPnRjtI8H%2Fbu62YikTr9dwCa%2BePrgo0MvMMKuAmcQGOqUBmRwRCZMO01uf1DDvdXCdZu1F%2BfVlFYpLLaVq%2B5CdBfrUsoqn9CqSID0ou0UP5oayiWhoTJt%2Fbh5DzVL5vTl2qlG2dmBBFiwMb0BLtzO%2FiSYh22UCl7unbqUSBlciN%2B1zyd7PYsfiIdrxM%2Bohc6K%2Bu%2FvZvnBTx8ty62dAJdnE5Y%2Bs69PQRnxO65%2BFLqd6VCrBmO6NoP0NWdcK%2BkTsrJGXfSPFS5%2FT&X-Amz-Signature=afd038881aec8c3bd71476f827a6dfede78541c40de46f2d55cdbfd551d3b9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
