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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=6bb60b2ed41ecf42e7f2f29440481a5aba38f9bea074b422404a0913a768b117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=2594eadaa76063b2f6691221c7322817429039588599fededb47fc6a49f659a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=b601f6bc43ad3ed4fa387ec614edd09c0d3a1732296e5cb52b36112881ebe6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=5591a3f152d6a1e913cec733d61dd3d36bc6f17b45b04708618a30210d7861fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=d49d483ce34c329e79a511ca27598c4900471b8896fdd756bbc26c31c0ee2942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=33cbfab2d40f827b7e14e73e9f9123504b1be87af230d2968ef248df5f77e5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=45f5ea35f26e25ebce6be4b40bc32026852801e77bce548b27e84ec4a0ee7b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=e6dce9e91c960b8bec2e550c77a2779fb12623efaf7c802e6368d28ef91aafc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=7425d1b3af72699a6c9b5f536c23f45949434ac3f2ebc41897e55492ae5c5d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=8332074f0f8c467656d0154efa4ad64ce4f28d71ed4bf6d6c8c2d55e68225861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=879b466e215525c792707f88fc5169787d06700f0bf1be281cdaf78685600b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=1aea56087cff75d76948807b966db13dd2f4d2071a55c52efd547b231a22ba05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HHDKMI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoaNVZlmnBWZ%2FogY0pWP4HaDxA6DVmrCP2lTbozJAJgIhAJwZ5G%2FUEm5DDGRgVV1xxwpJ5nsXFy5JiVKsnB%2FSBMx2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWkss%2Fu79Fk%2Bum6Fgq3ANONmx7OSEMFfHfrU5ZxovqJ6dLLSTfhIu72z5iRB6n4DN%2FP70cbxqQLMl1AXErifVMwxPyBgmb6pWKlCWMFibUQMBtMcPli0A2ZgFo1zI6ryGCe33zVCkVfMpv1QqMk1i1tH%2B5WULGYUNjanyflQHc0oAjPGBYQ6g84l%2FupZt83pYEuxB8LD0GKRCoRbSmBcs3z4upw5MIZvNNn8kI5G95qpZ2TqgUWi%2Fy6riBBfX5Y3%2BYrHcQAjhbUhJBSLndpVjzO1UHQox9tD3qvv5pYpgwq6SG0SjD5CFoEG5V7uoQszKOEgCbQ9IufJxdhUvRn84CwB7Md%2Fu8TTMtr27o30FgHJGc1xnpXtugcct7bCGq69ximwXQ1274mdpaLSZ0L8Gf%2FeNmfUgbE9GMpvR5ueF5XbkirbFkF72gxiLZilCPYEouGVhUhyyL3BpNPHg43WX7KGXozOzXc3SPFCprcLyvEqQfOB5Lp1%2Fdrbp54wyNr1uPJX2OmBjBPn7bG927zei4XZ7FaHp%2F3L3uWmFpzyehU9CBTkX4CIFVvos%2BoEr5%2BRhGwspwGfSCHziUBQIyVi%2FZF7pTJI%2F5wvdPPwafTjnCXPX7rKO%2Feb6cH38QrDewLGrf4NB4f6fdJQ0NEzDFubXTBjqkAe0%2FHdo6RFCy2JbV8fWI2lpyIcKY5DG0asK6xcnZb8dRNh%2BNx8yC3auwdxKsxmlHbyWKN3Fe1%2BUAE9Gu%2B%2BXGeWue9gVUUv0iY8zYeawwlLkPhSKBikRZfxLP%2BlMKjPvLAXHdmZWUNft%2BzwJ%2FASjufGVE4hpsRe8KYwzINkbW9uOUr85NemKmP5Ivx9MeK0Usrz9lvkaaTEB8LwMb21vDw0AKx6Hr&X-Amz-Signature=8f43bc740ef0b124efa7585f39a2e6d0833da101893f9af7d8d8df6d39a0f632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
