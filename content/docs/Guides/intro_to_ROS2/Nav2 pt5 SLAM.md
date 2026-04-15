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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=c9812152c166b5c8feb12350dd8116a70a017dffde4299f3f9bd04515231cccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=4285bde991f0bac813f51d7a6e8d39a8249d21adcee4f9d60e260d5054b8d78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=dcad8d8603c12a711f1bee0299731b8c42b6791802191d593239f76b18a90412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=a86bdb8036c397c2a0851be2d2da11829e2d0fa5b67398ecd407c09ebe31616c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=e035a19b580c27b0ce288c899be87999c6ed040c8146cba02669d71807d6cb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=bf425d6bfcdcae860609d84958f112ab341c6a70976e60c829377f34a504054f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=db8c56a3aea9a503417f49d08137f5f21d8aa04c439fadb9a66afbde08557e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=42db9fefe415431f05fb67e31caec17c440dbd0cc4e003c80e818db747adc788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=2cd0f9091ea6c03d1e7c15076db7a794f8e886f62e0d1d600ee819b88d74d7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=9dd5001d26b1bc662fe44be892a4eb37d53a5fcf48c3450a2145cebfe0b83ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=adb1e6244a58ccc602d233e8463e16c2d357c8c6dddd54ea42ad934b502f0e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=8e85ce7ea6351ebb785562642096c828565a7119f32091e959fbcf65b301f35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=ef036226e30b45479de6e0415f3a685c457f774e2e3c1a499672590f738a8abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPWNIRA%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun6pKoFzIkJjONBFOAWN%2BHB8JUZZLowygzz0qbZ%2FHTAIgPYSa8s%2FatNsPUDsg%2FJdjdmY0b%2BzyYWHo05f%2FC8ZzM18qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcYNkzGHEW5w6Qb2yrcA1ifWcjrWoGyLJw7UyQrrIX2PIVjId3FDYpaAXsJzeHZ71thAExh2ooF6qOA%2FNS1Vrq7p1pWLE%2FV2Frh5KbQWOSrxGsoteAYiSY6%2Bffe0RINBLV1KFLh7%2BbY9bXqrD%2Bp2IThzpjehkcMqEWPWozeyoL3xzQ8oMZnPf4ywfJrhRsfJvqP6Gjz0V6YW7ub%2FkhQnSwA0wIEUEIxVR58fl1sjmTkS3pQTYlAxQSfL2X1Pb0w9T6CVYP8CRlzBSGvYdFYnfrehp8Mu%2BCuKGM4HuffAD1CKi%2BC0f6inFBJFQCrQs0BuJQjeKyKOOmDvQmAmmrMtjDPYcQI1f8pjoKf0I7xJA8kFKw6doo%2F7gKr1MJpeZd4%2FpxTDCH9PkcTHnuoNLntw19oJgYm5%2BK1A3I%2BAmcSEarQf82l9ZhVPLklPL2%2Bx%2BT90wVmkgtgyplDMgAyg1nmtVFnOEUhbU%2F2ign1KOesgrYDcXollTIXqq%2FVbEP0QpfLdOq9TRR6rOG%2BXw4UdHFEruxum%2FPDoHlyXoWmx6WJsxEbJGKiNQlTMLgl6JFgTnATeP2tZ9FXg1e6zUJm21YxP7XGOPiZidfFv0GoQ7pEuZbjH%2BPwnF4uTmF1xoQWWYNpdgefvaBYxaqIhvNPMOPh%2B84GOqUBXPRYgKMnnQg5xyfcRksSt45%2BrZV%2BxWP%2BirMY0pHn%2FmW%2FXcvxt9SoFhv74QmY5bGdVBw4I%2F7PD4hy4L5SNLi8ajg2iVlNt3tKOzBmIBocMRw%2By5kRhIbk1WuO6XvedeIfpHJbg1yVy1c%2FTYVNeA0rZQaaRTPAC5cH7ryCdebMxqirni7A6uDPk5ACtdYDGmN693Qzbcoz6CmHmOWCZrLFAekJy9kH&X-Amz-Signature=57f3c3a1082b5217860fc6a70292e1a43a1c2a5a9b89d68d156ad5810fe8513b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
