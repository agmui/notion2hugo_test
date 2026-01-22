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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=feee26741731588b2eadbb2ab025308255df185234a694785ed89e0a58fdba71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=509334342323ecba9e207fe18efa1af93e478eb8f9748576dbfdd24ac5339759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=7fdc5648c5ca2489aec470ab2875f8996ce621e4b8c1d2dd3838f5de6fb94761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=0e23ff3f64291bff7da80a8e574beb083b8030d1fed1414061296b2d8c0ec206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=aa3c56ff58068840da25bb64b27256584cc482a5150474c0066261bd3d286d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=73abb54ab7f1c5e9a49d81f1e4ed805051a007a34cab6eaf48fdc71d2b28e532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=069857852a7246d3a20ad3a976c22d1da063437af5193906ec6687e4cf1c1b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=0df519a4ed249df037f11411e412d035ec00ad4ac969fe9467e875fc16c863bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=4e2c0a8aa60c19e9ab139145c7b77e9d2f432940198a343590ce53b244106aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=42b67d1a81042856fc3e5f8aad98e7927069d6ea086b5caa9f9dfd4e0771e26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=a6a9c4bc80ac1b351a501b43dc07a97a79739c86c7b9f2c0b2937def56cad62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=f35b81158bf925a7574101eab36fd26e3d7715cb72994d45756d502ce2344cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=19746d0f229ce35a8436aec62ae59f3caa926d3f7f7cb22aa36874466be77cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPPPSZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCp1Rl1xOY8%2Bnk%2FTBKvYde48GEZnAD6wYt1GWHSMzVEjAIgO%2BOvhuHfGF3AMhLKB6u84ATiLDZyIV0wyfmVMRHs5IkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZHA4uo%2Bb6zPgzVPSrcAzOlMcwhABTPsJoFQhI%2Bkl5vhbi6pqGl7Sl8iNQLC%2FJr%2BtdXgn6fWkLIIlJxTNFtCDClHIFfs5mxSjKAzKmXVAdLOmesr8PSOtcfPzX8ucvHKrOwpaSrhMVrE6qoCZHOntNQVvgXQ3yLM2Qp3AnO%2BV0jUvZG7ekepSi%2FmZugaWo7xO0oR8DjLBVfJOpMHgbekJo4BKQsoE%2B%2BCiLakQC3LWsEmF8xchMFyTD8EznR8wJ09cvrCYJsF%2BNbujnhmyE%2BO0Qe%2BMjmMShHRc26qcagqJ%2FTpQujQV7cxsCscM9n%2FQqfeQytKRJ69aEUBVKH9pu2x3HNdeFqM2rRUigT%2BAjXjEZ5JOcWUDaYj4E20znL0PmxXG5lVHA0C7k7mSHoxZvxk1a2Uxyrlo0NKs%2F4in9vBVdn%2BGRfYG8eVSfoR2nQt%2B00h1AAGOVVkSWX0Pe8KLBDCEzIHeGv4vYSmBjs9iOYZ4JlLbGhEviMTdX0u%2Bxa6Pcnc6yirVZs0UbZ3itE5xnBCHn%2FrNvXBnHHJ%2BeVmYS23qBHE4sw9Pf1pp0e6C2qOf94SKQFNvztkrN9gjYXAT3YtSGm7%2F51UAZiJJYlfPQlLpkJ%2FJlVBQ99ZA7TQKkFcHmqMMXKkhON0q80L33IMOjXxcsGOqUBLyFnT0xwFX%2BipmiZfhKV6Vk%2BqfpIyhPEPILrAGYZDOPM0W1HMxyxKpwuDqtQo7LC%2FOgsFkgS3xYXU9QspnvgR9WDgzzND08t8UQcaP0jN7Xo884pxMX7Vfh32SJq4fWg1YjfPd21jXLxQLLGRtmMKB28UjA%2B95L2rUxB%2B7jc9Rt5H111F7xC1wcJ2AGpbG40r86H6UgKQ%2BORCyYI%2BbNukFxGG24q&X-Amz-Signature=ee9265ec2a34096cc64d68d892163203474cfd39235f7df191f7c0fd3422a9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
