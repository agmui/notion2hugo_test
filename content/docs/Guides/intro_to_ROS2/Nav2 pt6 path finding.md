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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=ba4202941c28876d0cd11612329ae04fdd82f1d2f7affd9ff5cb32b84d224205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=741f1475728fa1d866ce866139226fd783286f6d65f2f564800f01fb865ed8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=5e6320dc1639c43f29db3ab7b767816b9777cf3f15e2ae2659b660d381718954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=0711168227c6cb60401dd9e163e48b55c8afd6b003d73e96a80869952d9c2759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=3f3fb69189662d250158ddd4ac2dce0e7de9998a2d89c60d397f18983b84c954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYBHUXC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFHjLcy2U7m%2BFdc8deCOF1OeU%2FDSJU5akEcVUTuzWkMnAiEAsqeTdRgJfNiNZBWXru0oDj%2BE6V6cKoZRppl%2FTPCqdKEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOyn1nLDP%2BdgLl0J8CrcA6IhL6cvUcz7TJG2LEpccJAGej%2FClttq%2Fojnc%2F4N3dIz%2BsH5IzuLQJT748VGmKu9Bb3ttqI92%2BGICbamEcwSqoVeeQ%2BxOkGKmyvV5A17SrOhsDLg38cn54JBmE18joad1V34SLLgikzYuu6Eh7I%2FEytxUZnvEVLy5O8ZwsTd%2FBs%2BxHqQkvKHrf4g8KmoBCGEXfnHcJcYsGv%2FKdDkY3Vk5tt%2BiHTxtA6nwZH7aWqAHaOnsXKmXeyHjRhB3Sh%2Bt6qTJhqlk2%2Ft4SNarXVzt79frh7rb0dLz2TZumARZPoQNPRzOEHZAp3CPxeFR4xgwe92O1E61g4V59oZy0fd5mPQD2KW207xF8lczdskndBRQryMkWss%2FfcXVBZWyie4SuzkDT0ywrZO%2FkI5t5ePQwfuozPIZIHORijAflnTVSvHAWWOAR4gE77BUAPSsDbmwJ3UvC1jsALgLwVQLstLAO5LkwqjNDbqfKeWBXHVnpe21PG5D0uIAHMwmtFG7cv26aEfM8hMytLmLgSeflXrFxt%2BMkkz8L%2F24EVKItP1i287QK3gUQvF74eL7pH%2FgTw70GgtXuZCv3YKh7aoIAMBHreVtYQn7TaUvFoxUX7ngD3dvkuQUaX8rs72NTPVTYCeMKakmsQGOqUBddSQ311hAfaflp3UlCENNWRLgavl%2F3ZF0bGofIco2GGOQd3CthQg1O5jgco8d09GRqqPSGQWIjj%2BuMu5R1PfmjjftoYzkNs6xp%2B84%2BieqU66EnzDcu5Cbsc4z930Ah3qrzWbdNuYCXvSZjI3yqmrx1A%2Bhy6vOMF%2B6WkTxPDEUfGcKOSOGp65LVlksiqEFAT3UivUYuXbp35MmFmZTR4aTGoSPCDC&X-Amz-Signature=8eab3c5d881f80a778365308c5ee156ada5f136644426cb3d7c85d09b40c5644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
