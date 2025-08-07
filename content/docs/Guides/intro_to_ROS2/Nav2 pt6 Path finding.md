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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=71d3ad9428d20e89bed59d71efccaba1c5df1994ae60fcb329a10dacf52dfcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=dd852e06e79b38d2efe7c7fa979a8b2adc4f258f10351571e41bb024a827f3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=b11b471808019b6e321468503f593c7437987509132c8fe4788856f6cfba97ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=493c4958e2cc58e229bf533f518f53de79d9d349e9679c802efbfd923853ca38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=7a6fc9bbdb27d40ab269b137a16c9cb09a0225a67ba570143130a7e4a401ae5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=735e2edae9bab58fc2ba00bbee6677b3a0c0babfecaee706d0ffd2e2aabf3149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=5f9903b73d21647c259607be463eee96f37707886b42221819e8173c044a91f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=8fea416f008c7ee1fcd7fb2027e02997e193bba08ac873c21042c72b68a1b927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=9f6bd926874339bdc298ce40716fe341a8b90a14bbe48e920cace68c034b0d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=8c4eda3453fe651a708947bbdd2d86e309be6020ff2ed4198b5701b870b05e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=dedae7f641a8079c08ed0509114de40b578425e1cb41d166fea3ca34b7802337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=13f6fcee3edc1b3b18eaedc8a9bd4d09bf040d6f60fdf90c208781f3666a4aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D4LQ7S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFvsbZOqsC2rmg6bS%2BtX9drLxaG4ieALUld9qO3ZwmznAiEArcC7C%2BQE%2BT0yeiueKo3eDtpSO0p7KvL3Fn6Rj%2B5FQTAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDthGKBdf%2BrrLIwLCSrcAwPeXymXa6T02H0S2HvP0F%2BGwGYBDGZkYWbmHWLNJyB%2FfZiN0JJ80eMwah8fUldSJb3lpMnM%2Bg4lOLj7tMuB0YrJPi3s%2FuHIzC2QbdknOUVNIu8YsehB57sI3RvNbGkbj10pVQPxKSqVWY2c%2FmecKoZNgsOfpCQcODqqgHn4D%2BJdBoRqsrlX1KyykYVHVaTsmqJmZvAxN1%2B7abw%2BeaafNSgyjnAXy9xdegrJ4ABsoX7rNhJxMe%2BrakWQb9AJG6AvZsSDs5e4Q4Xpefp9tL4lSq%2FhQkm%2BeeAdVufM2gg6nirUTHVyM0BKpcFaFpFbDgeECf9j6PXgPIZ89mFNpMUb2jK%2FfTsKzs2jnik2mpIoyQPp6ZQsOKSrRRsyrZrnlFmOY5wBZNYjN2%2BI8seX8KETx7zM9ZeSjG6HMMRlW6YJybXCZSZAEXc64puW9T6vOhwvS3CjnZIpMCxek3n5bzMLcLBj7mFoGOWKzNtNlczwZJp2geEuQReTLI%2BVvr4J8%2B39mk1j5U9a6c84fWFRRuHG3wfDYKDilKeSfFEglPvswOCwqPbemXioW3QH8F7XZhe%2B965aA5cSzKGcy5Mxl5EJoJlj86%2FoClaTVcGwUpDqnLB2ZwuhcBvU%2FLrB1NHTMPvj0cQGOqUBi3vo%2FFaG2eu2Xc2nx2Uz9SU%2BnXPvPg8%2FxvC1aDHvOIU4yrWyioVsDcDKzyfqt7oBiKTDswwk3W73oCy9tgbPgpqDtjPbarjbeT6o8iQIix1F00KjzApOOEFNHNClWKFNcqwNgfkgJ%2B%2BBFxmbc75I6guBgQakQ2n8KWcPumuo7vMCX9c5ROQt%2FX6QUz8spQLWCH6i70k%2FhM4n5LySUFKUbGgoS%2Brj&X-Amz-Signature=950c56df57362601332bb65d1013284b51fb0acd00d2f2feefaa1be0667ca49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
