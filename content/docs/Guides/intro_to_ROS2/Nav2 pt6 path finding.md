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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ7QDTY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHovZTPXKvZCT4oEp%2FW3hg5wdM6RYG7oPM6iPvGk5DhLAiEA0NqJesTXQ0Hy%2BFRA7BXruUm4g0QN%2BiT1q8JYiBuFmAsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE6oMrCgK5hmdMW7cSrcA3Yo2gX1MeFQB7cNZ6Q7r9bGkG2iJh5jU%2B2tI8fbt6ogrKxObqyPNdCPJgqWZZlWyWW30e17zz%2Bm%2FD1xGXdsw1W3hzIFTECqg2Z1%2BYhTJD1YrzDKxjtbcOcWUBZj5250KPbma1eyCKwW%2FykIPGYAEMYKd%2FUSLTEHtK6OOo7LBDlO3KzwrCBC32w0%2Be%2BgpDoxYLXP0QVq1VSYV9yUn3xhJIYfI54rPytldTCkSgaKaOlcTz%2Fmv%2BDVSlOKrGde%2FmeRn3q1z7DgkaRi7M5WFlifPYOa3QObkvx7BSkhPt%2B3GvnUD7fEz%2B3tHWz2RKg63ZR%2F1yATBDf27Dj5V3SD8LDA4bupN7hOyPUgqUsfv1xh6jvlNdUWKdWjATfTGBEeFVO8bk5Wcnr99nnEdd55ukAsxhO6AVWpsFdBQwTszx6wDw%2F%2BoThGbw2JttYYKB23Mm%2FJj%2FW1dnZ89myWM5J1%2FaWSqEta1lVCACiX%2BFvSY1jufXYbQGl6isTCxPfy8frFmWJlGoMshcpks5Re2G4rspwHRNhyNzvWewQeSECgeNS688M9WQ9NFNEiQuC8NvYPXQz4pUU8ZKWpspQKpRQc%2Bj18%2BS5nV%2BXr2810ZNEIQbF7x4SZ7KQxIKfF9iWh9ATYMMmrksQGOqUBytlHeQ5PrUvoHNuPU1O1d2WimtollWqeCCakYCgsVia7VwHc6tf8v8R6INa0NmQwaO0ZlwtxLjpBN7iZvKuFTfz1tuyCg8HcuIqyU%2BI%2B13i9gpepqOVd7LlsBHIKPiLNQvZ3csx60tF6MGzakn1NVUBcKX6%2BD2Dwy%2Bir6LxprP5aJ9rBWeaw6Nm%2BEphvK6pu%2Bv%2FJoM5%2FyNMzSiF6WppKoQK%2B5oLP&X-Amz-Signature=0d4e6b92e8b2c177babf966a2544640acbc405355a2bce66ed54268a0e7f2330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ7QDTY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHovZTPXKvZCT4oEp%2FW3hg5wdM6RYG7oPM6iPvGk5DhLAiEA0NqJesTXQ0Hy%2BFRA7BXruUm4g0QN%2BiT1q8JYiBuFmAsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE6oMrCgK5hmdMW7cSrcA3Yo2gX1MeFQB7cNZ6Q7r9bGkG2iJh5jU%2B2tI8fbt6ogrKxObqyPNdCPJgqWZZlWyWW30e17zz%2Bm%2FD1xGXdsw1W3hzIFTECqg2Z1%2BYhTJD1YrzDKxjtbcOcWUBZj5250KPbma1eyCKwW%2FykIPGYAEMYKd%2FUSLTEHtK6OOo7LBDlO3KzwrCBC32w0%2Be%2BgpDoxYLXP0QVq1VSYV9yUn3xhJIYfI54rPytldTCkSgaKaOlcTz%2Fmv%2BDVSlOKrGde%2FmeRn3q1z7DgkaRi7M5WFlifPYOa3QObkvx7BSkhPt%2B3GvnUD7fEz%2B3tHWz2RKg63ZR%2F1yATBDf27Dj5V3SD8LDA4bupN7hOyPUgqUsfv1xh6jvlNdUWKdWjATfTGBEeFVO8bk5Wcnr99nnEdd55ukAsxhO6AVWpsFdBQwTszx6wDw%2F%2BoThGbw2JttYYKB23Mm%2FJj%2FW1dnZ89myWM5J1%2FaWSqEta1lVCACiX%2BFvSY1jufXYbQGl6isTCxPfy8frFmWJlGoMshcpks5Re2G4rspwHRNhyNzvWewQeSECgeNS688M9WQ9NFNEiQuC8NvYPXQz4pUU8ZKWpspQKpRQc%2Bj18%2BS5nV%2BXr2810ZNEIQbF7x4SZ7KQxIKfF9iWh9ATYMMmrksQGOqUBytlHeQ5PrUvoHNuPU1O1d2WimtollWqeCCakYCgsVia7VwHc6tf8v8R6INa0NmQwaO0ZlwtxLjpBN7iZvKuFTfz1tuyCg8HcuIqyU%2BI%2B13i9gpepqOVd7LlsBHIKPiLNQvZ3csx60tF6MGzakn1NVUBcKX6%2BD2Dwy%2Bir6LxprP5aJ9rBWeaw6Nm%2BEphvK6pu%2Bv%2FJoM5%2FyNMzSiF6WppKoQK%2B5oLP&X-Amz-Signature=8fb6e19b7f3ae32f7c88eabb935fa249ab1f1b35e2b6bf4f01bfbcc62c67f9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ7QDTY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHovZTPXKvZCT4oEp%2FW3hg5wdM6RYG7oPM6iPvGk5DhLAiEA0NqJesTXQ0Hy%2BFRA7BXruUm4g0QN%2BiT1q8JYiBuFmAsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE6oMrCgK5hmdMW7cSrcA3Yo2gX1MeFQB7cNZ6Q7r9bGkG2iJh5jU%2B2tI8fbt6ogrKxObqyPNdCPJgqWZZlWyWW30e17zz%2Bm%2FD1xGXdsw1W3hzIFTECqg2Z1%2BYhTJD1YrzDKxjtbcOcWUBZj5250KPbma1eyCKwW%2FykIPGYAEMYKd%2FUSLTEHtK6OOo7LBDlO3KzwrCBC32w0%2Be%2BgpDoxYLXP0QVq1VSYV9yUn3xhJIYfI54rPytldTCkSgaKaOlcTz%2Fmv%2BDVSlOKrGde%2FmeRn3q1z7DgkaRi7M5WFlifPYOa3QObkvx7BSkhPt%2B3GvnUD7fEz%2B3tHWz2RKg63ZR%2F1yATBDf27Dj5V3SD8LDA4bupN7hOyPUgqUsfv1xh6jvlNdUWKdWjATfTGBEeFVO8bk5Wcnr99nnEdd55ukAsxhO6AVWpsFdBQwTszx6wDw%2F%2BoThGbw2JttYYKB23Mm%2FJj%2FW1dnZ89myWM5J1%2FaWSqEta1lVCACiX%2BFvSY1jufXYbQGl6isTCxPfy8frFmWJlGoMshcpks5Re2G4rspwHRNhyNzvWewQeSECgeNS688M9WQ9NFNEiQuC8NvYPXQz4pUU8ZKWpspQKpRQc%2Bj18%2BS5nV%2BXr2810ZNEIQbF7x4SZ7KQxIKfF9iWh9ATYMMmrksQGOqUBytlHeQ5PrUvoHNuPU1O1d2WimtollWqeCCakYCgsVia7VwHc6tf8v8R6INa0NmQwaO0ZlwtxLjpBN7iZvKuFTfz1tuyCg8HcuIqyU%2BI%2B13i9gpepqOVd7LlsBHIKPiLNQvZ3csx60tF6MGzakn1NVUBcKX6%2BD2Dwy%2Bir6LxprP5aJ9rBWeaw6Nm%2BEphvK6pu%2Bv%2FJoM5%2FyNMzSiF6WppKoQK%2B5oLP&X-Amz-Signature=2cd50772048f1c7e59b2d60d4c8a1ac9c080a8804aa6fe8b2049856914bcef93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ7QDTY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHovZTPXKvZCT4oEp%2FW3hg5wdM6RYG7oPM6iPvGk5DhLAiEA0NqJesTXQ0Hy%2BFRA7BXruUm4g0QN%2BiT1q8JYiBuFmAsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE6oMrCgK5hmdMW7cSrcA3Yo2gX1MeFQB7cNZ6Q7r9bGkG2iJh5jU%2B2tI8fbt6ogrKxObqyPNdCPJgqWZZlWyWW30e17zz%2Bm%2FD1xGXdsw1W3hzIFTECqg2Z1%2BYhTJD1YrzDKxjtbcOcWUBZj5250KPbma1eyCKwW%2FykIPGYAEMYKd%2FUSLTEHtK6OOo7LBDlO3KzwrCBC32w0%2Be%2BgpDoxYLXP0QVq1VSYV9yUn3xhJIYfI54rPytldTCkSgaKaOlcTz%2Fmv%2BDVSlOKrGde%2FmeRn3q1z7DgkaRi7M5WFlifPYOa3QObkvx7BSkhPt%2B3GvnUD7fEz%2B3tHWz2RKg63ZR%2F1yATBDf27Dj5V3SD8LDA4bupN7hOyPUgqUsfv1xh6jvlNdUWKdWjATfTGBEeFVO8bk5Wcnr99nnEdd55ukAsxhO6AVWpsFdBQwTszx6wDw%2F%2BoThGbw2JttYYKB23Mm%2FJj%2FW1dnZ89myWM5J1%2FaWSqEta1lVCACiX%2BFvSY1jufXYbQGl6isTCxPfy8frFmWJlGoMshcpks5Re2G4rspwHRNhyNzvWewQeSECgeNS688M9WQ9NFNEiQuC8NvYPXQz4pUU8ZKWpspQKpRQc%2Bj18%2BS5nV%2BXr2810ZNEIQbF7x4SZ7KQxIKfF9iWh9ATYMMmrksQGOqUBytlHeQ5PrUvoHNuPU1O1d2WimtollWqeCCakYCgsVia7VwHc6tf8v8R6INa0NmQwaO0ZlwtxLjpBN7iZvKuFTfz1tuyCg8HcuIqyU%2BI%2B13i9gpepqOVd7LlsBHIKPiLNQvZ3csx60tF6MGzakn1NVUBcKX6%2BD2Dwy%2Bir6LxprP5aJ9rBWeaw6Nm%2BEphvK6pu%2Bv%2FJoM5%2FyNMzSiF6WppKoQK%2B5oLP&X-Amz-Signature=58e6036a2eed6c535f90aa3a89fbc1995d57337897cddb88dba3675d95aee0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ7QDTY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHovZTPXKvZCT4oEp%2FW3hg5wdM6RYG7oPM6iPvGk5DhLAiEA0NqJesTXQ0Hy%2BFRA7BXruUm4g0QN%2BiT1q8JYiBuFmAsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE6oMrCgK5hmdMW7cSrcA3Yo2gX1MeFQB7cNZ6Q7r9bGkG2iJh5jU%2B2tI8fbt6ogrKxObqyPNdCPJgqWZZlWyWW30e17zz%2Bm%2FD1xGXdsw1W3hzIFTECqg2Z1%2BYhTJD1YrzDKxjtbcOcWUBZj5250KPbma1eyCKwW%2FykIPGYAEMYKd%2FUSLTEHtK6OOo7LBDlO3KzwrCBC32w0%2Be%2BgpDoxYLXP0QVq1VSYV9yUn3xhJIYfI54rPytldTCkSgaKaOlcTz%2Fmv%2BDVSlOKrGde%2FmeRn3q1z7DgkaRi7M5WFlifPYOa3QObkvx7BSkhPt%2B3GvnUD7fEz%2B3tHWz2RKg63ZR%2F1yATBDf27Dj5V3SD8LDA4bupN7hOyPUgqUsfv1xh6jvlNdUWKdWjATfTGBEeFVO8bk5Wcnr99nnEdd55ukAsxhO6AVWpsFdBQwTszx6wDw%2F%2BoThGbw2JttYYKB23Mm%2FJj%2FW1dnZ89myWM5J1%2FaWSqEta1lVCACiX%2BFvSY1jufXYbQGl6isTCxPfy8frFmWJlGoMshcpks5Re2G4rspwHRNhyNzvWewQeSECgeNS688M9WQ9NFNEiQuC8NvYPXQz4pUU8ZKWpspQKpRQc%2Bj18%2BS5nV%2BXr2810ZNEIQbF7x4SZ7KQxIKfF9iWh9ATYMMmrksQGOqUBytlHeQ5PrUvoHNuPU1O1d2WimtollWqeCCakYCgsVia7VwHc6tf8v8R6INa0NmQwaO0ZlwtxLjpBN7iZvKuFTfz1tuyCg8HcuIqyU%2BI%2B13i9gpepqOVd7LlsBHIKPiLNQvZ3csx60tF6MGzakn1NVUBcKX6%2BD2Dwy%2Bir6LxprP5aJ9rBWeaw6Nm%2BEphvK6pu%2Bv%2FJoM5%2FyNMzSiF6WppKoQK%2B5oLP&X-Amz-Signature=c4f0f1131cab62bc05332d9206ad736540b6ba712d263787348933c411d1f2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ7QDTY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHovZTPXKvZCT4oEp%2FW3hg5wdM6RYG7oPM6iPvGk5DhLAiEA0NqJesTXQ0Hy%2BFRA7BXruUm4g0QN%2BiT1q8JYiBuFmAsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE6oMrCgK5hmdMW7cSrcA3Yo2gX1MeFQB7cNZ6Q7r9bGkG2iJh5jU%2B2tI8fbt6ogrKxObqyPNdCPJgqWZZlWyWW30e17zz%2Bm%2FD1xGXdsw1W3hzIFTECqg2Z1%2BYhTJD1YrzDKxjtbcOcWUBZj5250KPbma1eyCKwW%2FykIPGYAEMYKd%2FUSLTEHtK6OOo7LBDlO3KzwrCBC32w0%2Be%2BgpDoxYLXP0QVq1VSYV9yUn3xhJIYfI54rPytldTCkSgaKaOlcTz%2Fmv%2BDVSlOKrGde%2FmeRn3q1z7DgkaRi7M5WFlifPYOa3QObkvx7BSkhPt%2B3GvnUD7fEz%2B3tHWz2RKg63ZR%2F1yATBDf27Dj5V3SD8LDA4bupN7hOyPUgqUsfv1xh6jvlNdUWKdWjATfTGBEeFVO8bk5Wcnr99nnEdd55ukAsxhO6AVWpsFdBQwTszx6wDw%2F%2BoThGbw2JttYYKB23Mm%2FJj%2FW1dnZ89myWM5J1%2FaWSqEta1lVCACiX%2BFvSY1jufXYbQGl6isTCxPfy8frFmWJlGoMshcpks5Re2G4rspwHRNhyNzvWewQeSECgeNS688M9WQ9NFNEiQuC8NvYPXQz4pUU8ZKWpspQKpRQc%2Bj18%2BS5nV%2BXr2810ZNEIQbF7x4SZ7KQxIKfF9iWh9ATYMMmrksQGOqUBytlHeQ5PrUvoHNuPU1O1d2WimtollWqeCCakYCgsVia7VwHc6tf8v8R6INa0NmQwaO0ZlwtxLjpBN7iZvKuFTfz1tuyCg8HcuIqyU%2BI%2B13i9gpepqOVd7LlsBHIKPiLNQvZ3csx60tF6MGzakn1NVUBcKX6%2BD2Dwy%2Bir6LxprP5aJ9rBWeaw6Nm%2BEphvK6pu%2Bv%2FJoM5%2FyNMzSiF6WppKoQK%2B5oLP&X-Amz-Signature=dfb23931d27386b7c5d7b0cd55b5c7e97b8cd1782ed71bd0f3d8d0645cf97cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
