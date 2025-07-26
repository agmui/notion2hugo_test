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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOLVVKZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDyLNeXr454iD4KcNjq69wQSthaV0Gw%2B4fw%2B2gJXXfbIQIgepNfeAflIrOoETJQYsMbfKb2qJ%2BCc4fURuczQAod25cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBWfH%2BZhewMyTe6aFSrcA%2Fl0rtBsh8U%2Bpu7g5WD%2BbQY54B%2BNyXxS23DBfamiFiAv0ut6cparADkn5BTj1wV7tCqyTsQ3p3n9U7s90AxoQlfizDMQcWcov99trCs8jSoLfWXskJFyWToo5N0wVg6%2FZX%2Fdzpw0NgUxlGxTqcJN%2FuPR1YZWKdxGiAd0qzmmow0mEO4%2FKM1%2BrmKncMveO6C6qp09%2Fp3ELAyzrkjooKLt9lg77il2ciocBxTqb5SarkPBPLYeo0g6fnY68NZ3HmvTphpiUmxP%2FpeHh%2FBlTrMHcwM%2Bd8ZnHghLfM7HXbUSyAY1jxox9upDEOWF9PHPcHmcVRTSbjJvR%2F0q3MpYpKt%2BeWr%2BGDb8ngTG5vVQPmdOmL6GdD%2FKTIU729pBUjzizwMU9cdRJQ%2BjL3c%2BsdIaBiJPVlRKCSO37Y5LNcDTnmz8C5d%2FXNS2uwF6N846B56vvp9rme7O8wfvA8MC3ntvxANSApMiBQP3hbhXHd0Q53Pb4%2FuQuoxIMct1%2FF7t6S11VfMNrMhSTrDEfih5NRUODtdRN8fclmkGlIfitNyg3d64q8agqiMx53cFab%2BHJ8rs9Egwpa0Y9KLeKjbsbc%2FXQGMwWegRdyqISVTCFMToBS%2F09KGZ1kDfm%2FdR4IbljVjdMMWrksQGOqUBVcNQLS3SUeyyRmAfQOTBPHBMAx95x%2BqM1ddFdtNJebKp5BLxHD%2BJzmLwK5pitpoDePeqnD3E%2B06T6aoSbxicleHGCOCBGGze%2B9Le%2FJqvs6tr00WzUPqgaDrEAue1yKAu0kWwRmfux%2FMlQpt3XQwrZmT4qIaAY0%2Fm7vdCdahDB9x6DYCbaS%2BRUu%2BvhespCj%2BbmNRpv2SRVv1I5vPZkVxQtQd3DU9h&X-Amz-Signature=78f2431996678401ac93790a4c0b809db36d30d0236feafd53c02633ca84a1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOLVVKZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDyLNeXr454iD4KcNjq69wQSthaV0Gw%2B4fw%2B2gJXXfbIQIgepNfeAflIrOoETJQYsMbfKb2qJ%2BCc4fURuczQAod25cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBWfH%2BZhewMyTe6aFSrcA%2Fl0rtBsh8U%2Bpu7g5WD%2BbQY54B%2BNyXxS23DBfamiFiAv0ut6cparADkn5BTj1wV7tCqyTsQ3p3n9U7s90AxoQlfizDMQcWcov99trCs8jSoLfWXskJFyWToo5N0wVg6%2FZX%2Fdzpw0NgUxlGxTqcJN%2FuPR1YZWKdxGiAd0qzmmow0mEO4%2FKM1%2BrmKncMveO6C6qp09%2Fp3ELAyzrkjooKLt9lg77il2ciocBxTqb5SarkPBPLYeo0g6fnY68NZ3HmvTphpiUmxP%2FpeHh%2FBlTrMHcwM%2Bd8ZnHghLfM7HXbUSyAY1jxox9upDEOWF9PHPcHmcVRTSbjJvR%2F0q3MpYpKt%2BeWr%2BGDb8ngTG5vVQPmdOmL6GdD%2FKTIU729pBUjzizwMU9cdRJQ%2BjL3c%2BsdIaBiJPVlRKCSO37Y5LNcDTnmz8C5d%2FXNS2uwF6N846B56vvp9rme7O8wfvA8MC3ntvxANSApMiBQP3hbhXHd0Q53Pb4%2FuQuoxIMct1%2FF7t6S11VfMNrMhSTrDEfih5NRUODtdRN8fclmkGlIfitNyg3d64q8agqiMx53cFab%2BHJ8rs9Egwpa0Y9KLeKjbsbc%2FXQGMwWegRdyqISVTCFMToBS%2F09KGZ1kDfm%2FdR4IbljVjdMMWrksQGOqUBVcNQLS3SUeyyRmAfQOTBPHBMAx95x%2BqM1ddFdtNJebKp5BLxHD%2BJzmLwK5pitpoDePeqnD3E%2B06T6aoSbxicleHGCOCBGGze%2B9Le%2FJqvs6tr00WzUPqgaDrEAue1yKAu0kWwRmfux%2FMlQpt3XQwrZmT4qIaAY0%2Fm7vdCdahDB9x6DYCbaS%2BRUu%2BvhespCj%2BbmNRpv2SRVv1I5vPZkVxQtQd3DU9h&X-Amz-Signature=a2d10f148e0dfc83e73770af7c165680a561126bbd952c4acfbf98b3567747f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOLVVKZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDyLNeXr454iD4KcNjq69wQSthaV0Gw%2B4fw%2B2gJXXfbIQIgepNfeAflIrOoETJQYsMbfKb2qJ%2BCc4fURuczQAod25cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBWfH%2BZhewMyTe6aFSrcA%2Fl0rtBsh8U%2Bpu7g5WD%2BbQY54B%2BNyXxS23DBfamiFiAv0ut6cparADkn5BTj1wV7tCqyTsQ3p3n9U7s90AxoQlfizDMQcWcov99trCs8jSoLfWXskJFyWToo5N0wVg6%2FZX%2Fdzpw0NgUxlGxTqcJN%2FuPR1YZWKdxGiAd0qzmmow0mEO4%2FKM1%2BrmKncMveO6C6qp09%2Fp3ELAyzrkjooKLt9lg77il2ciocBxTqb5SarkPBPLYeo0g6fnY68NZ3HmvTphpiUmxP%2FpeHh%2FBlTrMHcwM%2Bd8ZnHghLfM7HXbUSyAY1jxox9upDEOWF9PHPcHmcVRTSbjJvR%2F0q3MpYpKt%2BeWr%2BGDb8ngTG5vVQPmdOmL6GdD%2FKTIU729pBUjzizwMU9cdRJQ%2BjL3c%2BsdIaBiJPVlRKCSO37Y5LNcDTnmz8C5d%2FXNS2uwF6N846B56vvp9rme7O8wfvA8MC3ntvxANSApMiBQP3hbhXHd0Q53Pb4%2FuQuoxIMct1%2FF7t6S11VfMNrMhSTrDEfih5NRUODtdRN8fclmkGlIfitNyg3d64q8agqiMx53cFab%2BHJ8rs9Egwpa0Y9KLeKjbsbc%2FXQGMwWegRdyqISVTCFMToBS%2F09KGZ1kDfm%2FdR4IbljVjdMMWrksQGOqUBVcNQLS3SUeyyRmAfQOTBPHBMAx95x%2BqM1ddFdtNJebKp5BLxHD%2BJzmLwK5pitpoDePeqnD3E%2B06T6aoSbxicleHGCOCBGGze%2B9Le%2FJqvs6tr00WzUPqgaDrEAue1yKAu0kWwRmfux%2FMlQpt3XQwrZmT4qIaAY0%2Fm7vdCdahDB9x6DYCbaS%2BRUu%2BvhespCj%2BbmNRpv2SRVv1I5vPZkVxQtQd3DU9h&X-Amz-Signature=9725aaa91c03b0273845a8f77a25d362c6aa42a621cf665faa09ca903c3f42d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOLVVKZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDyLNeXr454iD4KcNjq69wQSthaV0Gw%2B4fw%2B2gJXXfbIQIgepNfeAflIrOoETJQYsMbfKb2qJ%2BCc4fURuczQAod25cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBWfH%2BZhewMyTe6aFSrcA%2Fl0rtBsh8U%2Bpu7g5WD%2BbQY54B%2BNyXxS23DBfamiFiAv0ut6cparADkn5BTj1wV7tCqyTsQ3p3n9U7s90AxoQlfizDMQcWcov99trCs8jSoLfWXskJFyWToo5N0wVg6%2FZX%2Fdzpw0NgUxlGxTqcJN%2FuPR1YZWKdxGiAd0qzmmow0mEO4%2FKM1%2BrmKncMveO6C6qp09%2Fp3ELAyzrkjooKLt9lg77il2ciocBxTqb5SarkPBPLYeo0g6fnY68NZ3HmvTphpiUmxP%2FpeHh%2FBlTrMHcwM%2Bd8ZnHghLfM7HXbUSyAY1jxox9upDEOWF9PHPcHmcVRTSbjJvR%2F0q3MpYpKt%2BeWr%2BGDb8ngTG5vVQPmdOmL6GdD%2FKTIU729pBUjzizwMU9cdRJQ%2BjL3c%2BsdIaBiJPVlRKCSO37Y5LNcDTnmz8C5d%2FXNS2uwF6N846B56vvp9rme7O8wfvA8MC3ntvxANSApMiBQP3hbhXHd0Q53Pb4%2FuQuoxIMct1%2FF7t6S11VfMNrMhSTrDEfih5NRUODtdRN8fclmkGlIfitNyg3d64q8agqiMx53cFab%2BHJ8rs9Egwpa0Y9KLeKjbsbc%2FXQGMwWegRdyqISVTCFMToBS%2F09KGZ1kDfm%2FdR4IbljVjdMMWrksQGOqUBVcNQLS3SUeyyRmAfQOTBPHBMAx95x%2BqM1ddFdtNJebKp5BLxHD%2BJzmLwK5pitpoDePeqnD3E%2B06T6aoSbxicleHGCOCBGGze%2B9Le%2FJqvs6tr00WzUPqgaDrEAue1yKAu0kWwRmfux%2FMlQpt3XQwrZmT4qIaAY0%2Fm7vdCdahDB9x6DYCbaS%2BRUu%2BvhespCj%2BbmNRpv2SRVv1I5vPZkVxQtQd3DU9h&X-Amz-Signature=5218ad1b8dd52ab9dc758d0d115d91d87f018a9d7ad6cf2dfeef30fedca009a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOLVVKZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDyLNeXr454iD4KcNjq69wQSthaV0Gw%2B4fw%2B2gJXXfbIQIgepNfeAflIrOoETJQYsMbfKb2qJ%2BCc4fURuczQAod25cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBWfH%2BZhewMyTe6aFSrcA%2Fl0rtBsh8U%2Bpu7g5WD%2BbQY54B%2BNyXxS23DBfamiFiAv0ut6cparADkn5BTj1wV7tCqyTsQ3p3n9U7s90AxoQlfizDMQcWcov99trCs8jSoLfWXskJFyWToo5N0wVg6%2FZX%2Fdzpw0NgUxlGxTqcJN%2FuPR1YZWKdxGiAd0qzmmow0mEO4%2FKM1%2BrmKncMveO6C6qp09%2Fp3ELAyzrkjooKLt9lg77il2ciocBxTqb5SarkPBPLYeo0g6fnY68NZ3HmvTphpiUmxP%2FpeHh%2FBlTrMHcwM%2Bd8ZnHghLfM7HXbUSyAY1jxox9upDEOWF9PHPcHmcVRTSbjJvR%2F0q3MpYpKt%2BeWr%2BGDb8ngTG5vVQPmdOmL6GdD%2FKTIU729pBUjzizwMU9cdRJQ%2BjL3c%2BsdIaBiJPVlRKCSO37Y5LNcDTnmz8C5d%2FXNS2uwF6N846B56vvp9rme7O8wfvA8MC3ntvxANSApMiBQP3hbhXHd0Q53Pb4%2FuQuoxIMct1%2FF7t6S11VfMNrMhSTrDEfih5NRUODtdRN8fclmkGlIfitNyg3d64q8agqiMx53cFab%2BHJ8rs9Egwpa0Y9KLeKjbsbc%2FXQGMwWegRdyqISVTCFMToBS%2F09KGZ1kDfm%2FdR4IbljVjdMMWrksQGOqUBVcNQLS3SUeyyRmAfQOTBPHBMAx95x%2BqM1ddFdtNJebKp5BLxHD%2BJzmLwK5pitpoDePeqnD3E%2B06T6aoSbxicleHGCOCBGGze%2B9Le%2FJqvs6tr00WzUPqgaDrEAue1yKAu0kWwRmfux%2FMlQpt3XQwrZmT4qIaAY0%2Fm7vdCdahDB9x6DYCbaS%2BRUu%2BvhespCj%2BbmNRpv2SRVv1I5vPZkVxQtQd3DU9h&X-Amz-Signature=debe11ebc2b3b97683ad34fb755f3cf04acd0d84da2799938cbc79405d41d9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOLVVKZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDyLNeXr454iD4KcNjq69wQSthaV0Gw%2B4fw%2B2gJXXfbIQIgepNfeAflIrOoETJQYsMbfKb2qJ%2BCc4fURuczQAod25cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBWfH%2BZhewMyTe6aFSrcA%2Fl0rtBsh8U%2Bpu7g5WD%2BbQY54B%2BNyXxS23DBfamiFiAv0ut6cparADkn5BTj1wV7tCqyTsQ3p3n9U7s90AxoQlfizDMQcWcov99trCs8jSoLfWXskJFyWToo5N0wVg6%2FZX%2Fdzpw0NgUxlGxTqcJN%2FuPR1YZWKdxGiAd0qzmmow0mEO4%2FKM1%2BrmKncMveO6C6qp09%2Fp3ELAyzrkjooKLt9lg77il2ciocBxTqb5SarkPBPLYeo0g6fnY68NZ3HmvTphpiUmxP%2FpeHh%2FBlTrMHcwM%2Bd8ZnHghLfM7HXbUSyAY1jxox9upDEOWF9PHPcHmcVRTSbjJvR%2F0q3MpYpKt%2BeWr%2BGDb8ngTG5vVQPmdOmL6GdD%2FKTIU729pBUjzizwMU9cdRJQ%2BjL3c%2BsdIaBiJPVlRKCSO37Y5LNcDTnmz8C5d%2FXNS2uwF6N846B56vvp9rme7O8wfvA8MC3ntvxANSApMiBQP3hbhXHd0Q53Pb4%2FuQuoxIMct1%2FF7t6S11VfMNrMhSTrDEfih5NRUODtdRN8fclmkGlIfitNyg3d64q8agqiMx53cFab%2BHJ8rs9Egwpa0Y9KLeKjbsbc%2FXQGMwWegRdyqISVTCFMToBS%2F09KGZ1kDfm%2FdR4IbljVjdMMWrksQGOqUBVcNQLS3SUeyyRmAfQOTBPHBMAx95x%2BqM1ddFdtNJebKp5BLxHD%2BJzmLwK5pitpoDePeqnD3E%2B06T6aoSbxicleHGCOCBGGze%2B9Le%2FJqvs6tr00WzUPqgaDrEAue1yKAu0kWwRmfux%2FMlQpt3XQwrZmT4qIaAY0%2Fm7vdCdahDB9x6DYCbaS%2BRUu%2BvhespCj%2BbmNRpv2SRVv1I5vPZkVxQtQd3DU9h&X-Amz-Signature=286b9eac84871fc3329ae3934b8b820e49c85b28421969927ae945254ad01757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
