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
      <summary>What is slam?</summary>
      TODO:
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=a2631100a4e2ae9e6ca250337a30a6b4c8d3338795aadc57514f8179f19a8c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=81918c045d023d3dad379063f14e4e67f41c3cbc26961e41b8ebecfa3c76f044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=adc05332bf783eff97f697898904b15fe53f34cd8dc6b849ab0f9c2619eba07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=9b3e9f13072c009a8a70d7e868f80dc9fb3e265dcca7f947825130b6865b1026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=8bfd798e1cfbec5cc285d5cac31cb8324758fb65a416e4c48678329a73edbe78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=f478bdbd16bd4c7602b94311fd2ba7565b48fef981b0f4dbc0be286446fffd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=70e54cfee3ec834a45c2541111715823000dc3095a90017fbb0c1323bd18256b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=588616454b37b012825b37696aa5a0748bd5011f93f1bcbe8646d8aac3edf161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=da7d40d3934d14b65b78f17b3c74cfcb6eab1d0f8d6e78b4585762b3d57ac40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=45e5764c402519bdf2cb51e83eed71e9599e5b03ee261e08d289af59ef179973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=2931eaa135f2b12f34875eedeff491002f1ba796f51307bc02b3804cdf9a0013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=ffe9d79590bd9ab86bf2e9544e58b2d15f91824966c9bf1eafed641009e92e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=94e80dedaf26a4d351bea455ecab67bd1917518e44839bd1511d9745b12c3ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PKG3VY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCGcbE4MJGI%2BCKsh3bQNBjzeTIsLurAUtHvnkco7tPptgIgf0JI0yQJ7K8TAgnNiCKJIWv8f%2Bwsl1N6WJ0ca39rOekqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChiduxg4aHODppA%2FCrcA87sKPcdOuOlWeMBxgL0QskVV%2Fof9hjQB32gVqRY0vCiTajRaf6LSJKFT4SZaAUd1W3HiEus6cB4onkp4etqCO3UayeF8LNrr714O%2B%2FNkaOoLaH3yDN%2FPPCBZO2EWA09R%2FNeIOq2Q8BewVTKchHgBx%2B8ZvWWmZO6hhSID7hIvm%2BOOqVGVAFhBdfjLIdyaQ%2FqQbc5I20YOsz6F0%2BLGsEmV4AwrvWFXgLEmXbGFdBK6uSs8K8QvjSWHCNllMgGPhkpg3cW5g%2BJBA5B%2BFGcEEjRizf7bNvnX7VSK%2FLOwGqP%2FT6JINH8xP7eYd%2BUsIt%2BqRqUr%2F9ErsEI7OZyAEDMl6aFrvhOn2UiIJ8v%2FgsB1b%2BBV7DHD89o4HrkqV%2FNCK8tgJKHq61iuZPBMMuaDfAQjbcuRGS6fT89n6Nwc3omQQQxbV5s4TKIw%2F0dA%2BasgU0B3cbaKI%2BvItYKpS9VzdAwPUBeOw8BjBvo1W5oEhBFM4eN5s8%2BTWJCoTBHTXNv2rwY3dc9t4l8oU9qJbemx2m1tWPT5q8SlqFjMDtamdSqy7ERU9CFYs9M2WOYojil1NIFmotNt8NsqSOPwhAj%2BDTyzS46vRf5GColX61rwLL2ecZ7hat%2BhICQAWyXPw%2BeUuPUMJXV0sQGOqUBSVCDkYwasLUC0xNIQNwMN8VKuSZeOVyR2AJW0d8vGbHwjX%2F9UhQ5zdCIK50htAAc9fBfahMdc9eU38ZvOOWFQKSuO5rQ6rrPlrLRXxWDWc2LsvfcA3SEI9zLo%2F1BPbUFaz7ZCZo1s9%2FsbKSVFzdqmWRvKwPmveUcumXgB35fzDsnzID1S97QUQjXOEIakbhzhfZZzn6m%2FF%2FLsFMshBUVKE9NKOdD&X-Amz-Signature=4c2f49880ff1c0318a5a23ce3bd7ca3974d6c81a4bfdd4033ccb92285137a767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
