---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

</details>



ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=3d616f1cd7007da20f06a7a63eb8c2e80aecf84e524f2b41350289c0a99e642f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=e9200081571c1ebe6c695548c6c822ab79d69e2ed2a7553c60414755662e0e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=a94e9c2f52784e33d5d19dd4aef52a763bac13eeb7a45b227984558a2ebd8399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=c75df6740b96b5b55becc05088c562a39c3f2c139bbce219887808856deb6fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=4e72512ab4c9ac94aff68e571ee13d2b3150d2d7915af5e83624ed63f175d8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=b54d45319861ff4e5ef599b09812bbb2ba0639e7f8ed1ed5bb15a6600f5a644f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=cb0d7127bfaecb80a22519b0f70b035cb7166ee0aaaf9c08cd4a24dc704293f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=5a9eb683486c975b9eb81820013cd58b0761a0574e102ebf5ce6fd858be33608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=4c8684b69aba45c3458286d78937ce1055df7fc32c0e4fe1e4fce06ce8dbdc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=db43bd792fd42876dad6fba38cb5e2a53c9779c25793d3162693cf003fa52860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=3db2d2d55737a8dcd8fd6b6183ad0f0709b9cdde4587a53fc4cb0bcec72150aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=67f19e5b76690ff3c7b270055ce4a7da35667a203c85fa5e1269a7a38d0553ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=e035f815d550e822b350df17c6d3b557ca1031950a71bee0bb94d4c5035ac890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWBO773%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGPWqluJL%2FklJvCJGbu7tug%2Fvscf6czeIUfa%2F58tgfAiEAgIcYs8DUH9SIlfNgTnEhP7s8W%2BaQYt5sNxNkxHONrUcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOlWlJcwxk1z1VWVhircA1V7AJK6rw0kBDY9ds3btKnY9zb7fPjT7T70PvKnIf0Y1BDcGMqRbGdSs45KLtTftSSInpGDtITn5FWMNy2%2ByxQ1mO9h%2Fc4nTTeZxQajn30uT6onmI6ONDK3DUlSAmgdhKY%2F3XyIpL5QVvRtcJv4CX9CjIjwiQYRlLTjerkwf7iGvs3QND3ytOG6mty1WGnNVpMOrypfKGrcLTlLVtlJruUW0QYD9ujMW%2FYceAnRAcViPjYy%2FLC8IDITdMcRsplltNSuuxUe9wc9F%2Bg9yelM%2BN4aPMQLrSEikgayUE%2Falcf920yHZIUUZZu%2BUzClF%2FEnTiDkpaE1DuFNOgIdVLjeeVGUYH8vCK5s3KOqB0SVrTwtFLJQq0jcsg%2F4v8UYqGYXqE4%2FGtfjgJ%2FGYUKf6AB3zRxchiOkNidUjeDc%2BZFWkH41fmjOECQZReAU7H7hojUtQWWPloz9SrpMSJaPR0aMUNrxR8a%2Fdwd5Uihm25DpGUS0D3Qdg636h2gKiPE8kAFMbsSGn68qcsW2giwUCtE%2FixfODQ9onHhWdT4B3UyqiChrCcwIWRfrCpqnKxkbVZPTJiIUuJOx71SytIzyAI1ewy6E%2BdJQ58tVlzx9%2BmO%2BORgUgBJlak0C31Z%2BbWNsMObs2dMGOqUBiil%2F9SXexeOYsYNYakSlxcvc5Y8NR6u0Ha%2BePKfqeg%2F4%2BYbGuFlluPSAwrVnHa5SoQ0vMrhmeOXf3meAuOR4c0pYlfnRYe98qq80PSpbi6PhelNG0acZoL%2BnRoGSLCqH4O0vpbzEbtgPUDFNBS0xV3JNogENflKD67JDQQxGW15kplOt37VZtTRJfX0nIDXE2XCRWAHFAuF3NojRAhe1lBQvwO5K&X-Amz-Signature=e139b9d8b81d15587abaec4c692edb8d28a304108376d791a4a59f416240cf91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
