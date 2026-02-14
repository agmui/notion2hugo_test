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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=22af81f00dc3fefd4efb6ad30a4a6fc5d2e63158ab88b3138030849bc315b68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=8cd7e73f132ed8f63fe6a6773c25b659306fd2e27d019aae574875e4c94a0e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=40b64dfa4dc263110d408247db9f6a7a780c9fa7537680233368daf631ea9f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=b968dad5217cb34430bee1515f1bea052680ab3fb9ac57b8d96446004d386500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=13df30376ca7123c77ae74d3e3036f29f46d5fa75c7c42c15a35f7e371d4db18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=efc676d3389c5d610033f944b914c473163e7564f5cca3851dd3d66eb35d060f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=a3668a81432da9aa78b9a583a9161f1dee21cd0e9eaba2cd1a94aca62e7cbc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=faf3457d66212e0500ca02c2c20acbee8e23f070c588fba4eeb4f43669971682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=09c4ef9d447b6c9ad4cf6900b8ad0927da88ae58ffd524de3d0347b404880e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=ad0cf5f8191da093ab525198919a5607cf17223796b1de369805bdb9198e3ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=c14de15a6d808e1a16ce6582ed6cf66b4f68d43cf923659f414a505c958b3cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=cd6d52d937c88d5a10fce805cdf5377a82739aade8b2a1ae5ddc68bfd3f7e541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=d499599dd9552b93917efb9bcadc826ef6a83def19bc7a9a8acebbc515b6dc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMQT4BX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDKKDgLhcemK0HmjhrRrmLL5ic7Zsji0uq4FUXTITqkKwIgQKXRQOCEpeTkieMgMrgkhVFdyaCRdj8Ad2vF5Zno7AwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD4Hyw0p1T4g%2FZIVSrcAxsnreBa8txkMkKqlj5sAuDfe%2FfDwqEKOQLxercvUYuv19Y1NNQEZx00UkzsNAJZkAZo7mevlmwCdgyP3iPQ9xDvZdGXNnXBTK9AGnOW7KAPvRgJPxGMhJyQj9KyE98QLVmMPm83mDIxm%2FxLPO9ja32c02ZA5FMaE%2BD%2BM1v67eCvErQgC%2F%2FaPkbimFA6T3m5su7M8GZ2LaPAowqiRBpSZnuWrGPqGDqol0GLuTZjkZFfdoBAGuJPEs0H6vaQYMCSCDDWTajuXPHaZ2TVHXmWsQf5vfvNhA%2Fp80LEzorLEQ1ekUo1T500aCmmYu89DKLJuEYqspyEHSxHJ4RAzkcLmlQGT3wLkbBvRL8qE2JnYxOm0JuAGSg1lam5OqUEfVWiRE96slFiZT1a1JoZ%2FI98aPxbscfV%2F%2Bro1ZVD5vgveXN8NK64UL1G25EyKhmialcxDwMT9S%2B4TfwRlH29Z03%2BmFr0ta0oGC4QdKTYWncUXO%2FUBezO2bYqPwRVw8%2Flmv9O4wAb0S3MPlpT6%2FVudtAo4UHpdaU8RhLsnfwQeg4%2F6pN%2BFble4Am6GU0aDZ0c616H7wgm7er98nkWMGx2kibZ0IPXus7TLZzYZogXsIjRahTldFW6Ori%2FiYKZdCK5MNGSv8wGOqUBWaepRPP6a7WPeN0lm%2BWaUUt3sbS1bN9QsDwp3VqzGitYTvWG17xS6DPt0%2FRpwQM6SjUrZmP%2BdzxNAsvxDSWpdRSMRsrN67vUEJ%2BarSUYaKKd%2FNA3DPlWsy5lwFrpM15Xg2EjoMzIyufkbit03G9FYswsY2xwUcelvrZd6INp23R8X%2BJ%2Ba%2BEL4poG86rWY5bQ9%2Fiv5gF%2Fek5kkkr3SfJ6oe7UR6CF&X-Amz-Signature=52a2975ea17fa69ffd64cfecb52af90d640ce1925337edf994a388784031d889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
