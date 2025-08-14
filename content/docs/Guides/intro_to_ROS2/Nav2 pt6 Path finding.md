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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=b8e701bd1ae1dacad45aad580d7d8732d7f7be2badf5ff901ee28bf6088c4afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=6ee86714dd682f8cd0bc53cd53d225810532c6305bbc6151fccee67e0cf7307c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=bcaeb29fb6cc686a688b0eb5872fc9d056ab42923b67818de0793cd14b4e623d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=eed3d0daedba27b893393f6587fb9dc3126f8e1175807d8d360129dd27c9b838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=293a48451ef71d6b9fbea0307f1c076d2d76e07c8f688bde44b35cc470322e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=ac085a0e8df0c8652df57ddecdd2edc40584bd748b20523b244eb59a70dee790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=02abe037ddb64b443b33d129f6f5c22f0bcccd73ad7557e5a2cebfecf95777fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=85bc74e6c94e0b4aaa5681eee91ed8176110b3537edc94575a8ef860d6c904e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=d8a64af97cab27a10dda478b5ecb6c62e88cfe6592f38f45b9044e3cd05b6251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=eb3f1b5f7bbb3b4bae6ce7cbc7a5f20d466e2d4c4d1e46aa0e5c0b95d24bc0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=95d8da6b4ac4fd79a0a320a76f9a37cb31adeacac0ff8e6b6cd7c48ff9e95b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=f9e373d63405fd8a933ec47ef5cfb4e46a682a720415c24e37f55eebc7809f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNHBHGG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBplWhQDO0%2BwL7qolMsybNRA29Ujc1TGfFrUQsU5J6%2BjAiEA%2F0pZ8kE2zgXNVES%2BLWMsexeAGDmGHB01PncxkO10gF0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEH9gCJOAmjzMOnRByrcA7aUi%2BGlX3Q2OncmcD%2B573opE700kWugWKRDrHge0SzTdZn%2F1kCnLKs3rVZ%2BHmeFHl9JOPRBzrp26WytxIzdZ6HrAuWeOnw70ia1eZDtAOpvLS4LDTMiKXfckc%2FXQEFYE66ZIc1SUve8TW1twP466yHqqHcGfgDgys0B5L7iJwW5dpBq92qKh9vZRHkIlEuV%2FizSxegPT6yMKP2iPtectl29aazMENShNdY5zbB%2FCo8WZs3z4pL59Lno3TpEZVdGAxDXNzf3uyJt6oe8anrEz9cMFzvJVtqwiiWVQ1vWGdu0FiM7H3g1RArX0LR8Ko7J%2BIM6hUxGs0FJr8buQj7l7l6Ojnt1VPPztR8SA2QFSGB9lez26ueKrNuL6228t%2Fj9j%2FXNO6J8JFqe%2B34aF0Ex1deaAHscRDPVGvQknHZRMt6t2lrf30MMi8fgPRQeEvcSZX%2BY3TjReINeDA%2BMaqdN9F5XFQlmf6JlHvXzVjS1ZZpo9qJ%2F1GjQJhEfn3eIUEm7pV7K66qj%2F0L5sSRJIpWuSjQvrOEQ0HakBbC4d0bQGxYXIhm4hDjwXEm67w94QYOs%2BlPOZb69FY0kh%2BUjCOcQ3ZHvbJMT3k8RWNeJmTqckgk5CMxZcmdtgPBst4BNMIPg9sQGOqUBwOAtUyE2z72cKgcahJfOwLsY1GnKYpDV8mDgYVeirlCJhu2ec3PBSRdVSlZUPUBLAFnvVOMXX0fOkOCm2dhgNrhu2%2B0Mx7vdCrt4cVbD2AdA4Bl90vzCmda1YPLuE%2FDd6EGdcpw7Ct2vpEYwWFf1rhPI1BAXD2d9xT3g1L3HbVmU%2FvzhaJ1DosggB%2BaNDqfnHJMnxEdTUxkKZM2NLvb23R8AElUF&X-Amz-Signature=e0d2e3b17795d3e6e4fa7e1db36bb412ac729360c4853cc9b96ee67f3406c0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
