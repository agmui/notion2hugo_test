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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=86a9bd84be8b2156bd3aa423d91d749665a69143170b34819e5e7e6456cecf53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=b83ea175df0fcf9e3d571e174c900ba10ab2228cac7b9d260da437face116e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=2298c670db980754489600cda4e89fb34019d551daed648a249a0465f7d9dc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=77bd87be6ba42da71b523ab8210a827915ac23dd38e31d42421382a28d3ca136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=40f78f2b7de89564fb1e206d338f9365d7a8baea73a51a19f0cbc385b95d2f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=63079100389d2441b72c2de8f1af35719085334d009141f38893e36d60006bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=e9e9e3bbcf99911596462444ff0e3dddce302596ffcba903f749c797c838834a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=5aa9b641bbbd1a8bed4926509e9be53afc51562a403109536e5a2db71964eb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=94355a1fb3eba0db632e352cd556845422e8d9e0ee766ddd5fd36e75af8b3d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=cc20d4f4fa1a892362294cebf45f7d5da35239f8890a60d2a9ec48322152ec88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=65f5018c1ba78e43e12328ad8cf77bb939887c3b5fc2c3f2471c1ffec97329d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=98da12f4df039fbd5f77c1e24ca39bc3ee92de5a317651f344ce5d529847dba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBURHGHE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD1VZPgYhbq4Ah7IaWDX4Jv0wWCx%2Fb%2FN3vY9518nNqf0QIgO%2FHeM4fFSlQ55eOy9bpGLGbzYyKPPIIdZ45I8UcBYysqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzrGTKHIqP9GENfDCrcA4o71TITD%2FWXvY3z3caX%2FTheYadlWMizOwFfdVsKS1yH7Lox4isTrlDkBSqm044s3vW2jRBsy2zhLhvyMilsUOauAvcDFjAws2AGSXYmhAu4Sl6hw4X%2BMHSJhqj2tsvm3rUQiPaJB%2FeAWeDW3hXqxO41tz%2BBxks%2Fcdfn32seJQJWuRqgVzXXy02WzvZmcpBwRJIrLCc10Aq16KqXr8N%2FOBYWP%2FA%2B4TZcIsvmMrWR57R46Gnpesihn4CeLcFX6bD20%2BXc36Sobb37mCfKz%2F0ncgB3Eurt16uKNWVcBNTnrxzQRSp1y7fGy7FpCrzVsA6lGYfRSmgzSbDYcpYAzUOc%2BwyvNLsVDqSSCCovGwijolw%2F0d8JtvmnqeMTOROfXlGjlAh2URotmkjyZRriBYydiS0QTyf6NQYyIXZtCXNotsPTGFlJlxNnBRcNssJAL5Kte7NOnlWZ39Md6%2F0PPfXzjoRQ2wi4Y4XQBJs4gvZxxHe9DcjG3OBgD4woxG6jA0j%2BOhuDItthZ6Xji5ZJAGl%2BRm7tj3RLo4F6giEL3MPnD%2F0%2BJz9U2sN%2Bfl5%2B5zFvAEnwKbN7GzgWRll4donaUjde8a5qgAyicZfEboJdzREHKEJ4l4NIYn0Th0MdwoEPMMjvls4GOqUB1F1x1n4Z41veFArLhiCiZOfWBCXbrO2zIBHNWVSfHGBNmD1Knas9kY1niH4SA%2FfHVcfuz%2FfCXAwNHm3k8COHRBdVDBO6aAB1QclhdpU8q%2FHcwvtNHdj7MSxDCWQB1QaOrD0jBrtIgXU4NZ7LfTfS3Wr9kEfXxeqlbkZ5AYJiKyThJR%2Bq9Pby6skmlDw7uGDrT59h6vkqUULPzl68aXFgkor6hAKX&X-Amz-Signature=99f9f25245fca45a3651cc68bd966df2d0e0bdb41724fe39d19367c179a3bb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
