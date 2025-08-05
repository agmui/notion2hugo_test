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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=c8202baeb9d3ec440bc6f471995d0ac5b59986a55caaec19f9a038917fafa278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=79e3baf8fbede6aab31bc8d480e0c6937cd838236dc9fc01c3e65f91d9b63a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=052572dd08f454222f732e2fdc2a46a419ab1bdf43aed5ff15613e2affc95627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=f6ca2832ba49d815312f4a4b5a04b42e983b80fad8c21fcce2d1966e4a36e4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=8f7d1c6c0e517713ebc9e3afc8db433c13445a2a4804a1408243ac7e6e6adbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=27f74386dc6360ce6b8e829955ca4d7094ab7689fcb25c202702c684c5db22a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=0981cb0faa4388ff595bc3c32be0de3757334bec477f311ec07f127a661f09bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=93739a0132571582fbfaee3adde4c3deb2a8680d9b4d3b65b6b3179fa518ac8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=b53feebe83d5ed7d199b50e159def164b726346235e5459c45c3ddd19a021950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=3f48887e80deb38f8f91ab82b134b7476227e11af015af2a19eee6cec6595973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=5387ad5e52b5685fef434a7af57627cc21f75182690ec9dd046a0e3ba18f668f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=e85758a32bb05970fbfa91f44dc950f22d448076c1e5a8041da49201d25f4598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RML3526%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIDI5rWmky%2Bw3WAOFiXpiu%2B2k4DHKbFIuQ6GLZfpCjUEeAiEA2xIE5jBLYvdmBQxwR1S59Q58jviylXKsMzHtavrunkkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLa1pTCO8FZugh9AuCrcA8FvJG5R1WJOhXIBbvdaQBCfXOjC5TMgi%2BCMd2VesrXXwTAvlM0V%2F%2F1QcamikOB5t1OfcvmfasW0JIoAtuvSkZ0qW60HhwJEzibky6Qfnldt0NeJMRhU2tNE2oszY4gILBoIWlkogOMwI8lGYo0ihGQXcGYRkdNTonFmcje%2Fb%2Frz3gj6KeALA4uwgdjSQ9RSejCg61XC%2BFEfiE%2FqIlVrI9fQs%2FClNT38O6LDdIsZlOBdDfE4tG7Bp2%2FVbzbBbGaesm3xYhxb00FCGyWtyehK0wFmEU%2FU3HkhQ9WWbFjFEE%2BF4NhGLS5E2ntw35NauE%2B9uuT1iF3A4cSoHsRZwtzi01y7jbSLGUWpRxw4KpyWAeo%2BqGRCgtZoo2ypwKtEeA8GfQ%2FiBbOu3qkROXMYVi1EIIynmQ0sZAL70zuZ00a1SlU6fDRQQYzgo844%2FAQZuEuitUXXQ%2F4xuL49lhD9ss7PCCo72dqDEoXEWInovDO4WtREpSYymrVWekqc1TDsEWbiJ6NJOfRkiKsDUjW%2FGUYpkORGZ78ma4h%2FjOjdr3gIaJ9vTDghO6emjfSluuEM77BOqfynp25ysiEZbc9Le5MNMedsId6MbRWqNDEL4ArtVVI%2FOo7lnuyyf6%2FBIkCyMJKJysQGOqUBpFzTBboGx%2FQjZz7LugkvqP4Ek7DSWtiv3tUy8%2BSVeqGNmp40xy8r4WrkxKvxXjNos%2Fslp2VLUyZylvEYQQL2U6CtKqO8jYjKHkJTjw4YAPG1Xc23Wv%2BL9ZhwHYm%2BrDRWRBIlKeFyf6UgPscrlxqZIDoqGC%2FDq7fGZw8CDHjECIn8ZieIqayEHf598rCyM3dBKt9fdELCdRlaMv6XtJteSQRB9QgX&X-Amz-Signature=e93fc4b79c63e816cbe81ff194ce554548354c62883d8d045d6b6f0fbac7b67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
