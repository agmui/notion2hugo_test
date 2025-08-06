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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=0b8e85cb117be995cc9b7c5ae82a66c952e0e1f179880bdeeec0b6e943bbb88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=0f6d7e689f2ca264d238a9dd6a93acfae60240a4c27dfc19b16a42afb97170ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=e68110885db9f0f88bffb9e8069d647cd161f9c7a8ee9fe4debb2b061fac3491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=8d7117af6277f4887a8b7b232bb3206d3a342ccef0486bca456a4c8680b0a5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=4a56d2f93f8a5f6b3f885ebbcb684fb9f6c26718fa6630f034c22b957626d4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=c898aa40854f57c6255ff9c626e629da78cc1d9f028dbf241ec27d9a43e45ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=9fc4b05db86487eb39bf602e8c09a35470dda326474c89774185dce2a9b45f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=ee480740e56cec50d26cf13c6ec14ba71cd1e3b9d0b8799dd874545642b1be74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=49c231ea23a45800ac6d1afbf1fb4eed2e3e4c89c61b053f13d3fa7fde3ee772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=3a39b41ad08e30425985128e05322d172e2755212def092c388aaf9349013b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=801912f9d49d7f3816191f2196181615b1d8da0270766a26b21aac3fd0339abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=0a8b64f500e44660e350777a20a4aced76206b9c9c86f49503f4ed74ef1f95f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLCRQ37%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjVkDKOY8DQro7kEnUhxnbbfeL4x9mzK%2FHzUbWB1vMLgIgFRX0LMVTROUmxH0Qe8FUOK4vpAfNxo3M7qFGYecSJFsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLJdV6VuCpk9kPheDCrcA6fxl3BbkMfyunT8eJxJovOB0ptohnltpB0MS13IWVEY%2B17jWRqes4uVW5G%2BpVhHZYxHSmzjT63qz7gagfKA4BsZi%2FmMfi3lRryZxbeO4xBsjojItJb30vuzsQ5KcsFCp8QZ8iuRikBQUn%2B3JMTRM%2BfSi5TmjjuXFm9n9oLmp0QhwRYsaJmDovySIBaCDKqoRLz2d8JeEXzI3aqc3bNoCx%2FRHpk5XMZeY9q%2B6dH%2BNiclyI19MagCpLQtjeH3bU0Ux2Q%2FzC%2BEKz7PStoE50ypJr6VTQGjBQBmzw34LHfDS0A26JJbiVM852iK9mo7%2FQvj7mEorfPOZNDxWfNnVAAy1RYWS2%2F%2FzIVIrr9Fj9QxfKur1Ui8BbZL2s%2FhfLZnOzn3d%2FjgBnvbp7P4JiY5dsJHHEnzxQ8o4CtXEnXKdDHq%2FoJm0F07xrw4DwDFWum4NbHq%2FGs%2FOKNebnscfKBVUyoCn3EgOjV3WmkDTOjVXU5%2BUYHcjtnyBeR%2BMIgfSSM6xOVexqhpbYM5uSgxkphkHL7ALvs4i95EUcPadfGCI7g6kseKZTNsqFofCb9rBS7fvaJHXsUPfpXwotBZtKATRrHNN4F2bribv%2BiD5u1FPWYcc50ZiVCT5ISXOLa%2FVeFhMLitzcQGOqUBtgS8hZqAo%2B4CHkeP5GYo66xEDIDR3DyJuOrevUwXGsHBP3jP4NQjsTnIoFdVPm2ZPTUnCKx%2FDGVzZv0X9ztsIXr1PqIIdSsGNDhRQ2GcHOi8VtZaLbUxPzd6MSsiD9wo1I6nDTfUmuf1Qa4ordEKwAQBndYfwGhOamMjoaHivvM1esZt%2BcW5mQoyupHrmTEJYoXel1JxQ9pvBMR4VbW9%2FRcOnVSX&X-Amz-Signature=4228b6a4e95057075c1a862a7704fe74b1e780dd822185ea7e2567b3a8cf1e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
