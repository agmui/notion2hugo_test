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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=b043a1f36f78393bea6edd2eb487de660863aec04a0c3c1eca8ee47fbb7a084b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=22ff9dc97f79258e7c0207ce4dcec55db56185e912e394fcc3ad6a42d016a340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=9441f2d646bc273b9de254905b81070775202d446817408646f422c2814879e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=13646e2e2b62d0b767713ecfc65b9c372c72ebc7128ca4a2d586494c158c2a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=5f3d91e61f8ab52e9cde9ba9ee7050a2a8c83b235a3507da246b3ed54503e796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=4f905db6e80f9095e247f7164b2aa143a8c851a943ec174d53c5da0b68c78dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=61656f748a5a0a6d60801f278b71907dc75e816418647d7a9bee3341daffb9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=0c956e4da7850f7a7810c3bda17ce786569ecb90e10d0c19e8d74661efbfec1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=170ea975fcfc11225a7c3f9e4516e7d3e4cad74adcebb0637013ad33049818d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=15821ef09f0785db752db866ceea9cc44468b5a70a0164ba991887db5672f958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=34e9216c10fbe92998499b3fc5e7af7e06d6be4f7ecef95155c57986d637acdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=4975f86c085dcae0378d576fb13258888f4ff111acf9c67efce7a231e4c9e327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=c53f9069eccfda77aa83a905f2ef66d2796c7dfae0590afcfd742805b09440bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLFIHYA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCwK%2BdVhGZCYPZoetHJDLDtr5AKHDwFQugDI4A6DlqgIgAav0pGzUfn0UAgYxMdZcrZ3Y5%2BoELyPN8xGVlqMDZfsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJXXquPvy0mx%2B62%2FFCrcA9JXTpjhmfv12d%2Bwb8eZBHqKlK%2FmjqpUf%2FB7t4glIlhf4f70BKJFBZk%2BQMJjC4ymJmONVjdqTJV2%2B5VTW3MEF5C2vR36wQPZyaLX4KCD350iuogQ7WQIPHYP47FuOZsm9C3kkvL3y1wzk13IUg%2BjlGkIv6EVmY8k3VVRkE5uD%2BVT222XCxrgObU4XHGkY3whgWJoDiagwzpi5Je5ogRhglHE4SfBFxsgLwiStphMNOZJPGz7hHaWR9NLLrYku8WPCCQ2dIaEOYXpR8f4APBBxU8Fg6TT8BoyIYaVhPRoX5PYRUc9wQiwEth%2FlkQ6u5l0XmjMlcbDu1vh5FAiGMVsCAFpWLWx2dZ3sCgOGWNRua6aGbhFKUQlXfL8qVdKxHmswiBHTaEdm8fD63PwvApCyGZ1X1ma8cJBRKk0N7SOQBG2nZcWZe0HDtPV%2F4CPeDtdATai75IuvfGAIz06UfvJ1yJbDAT%2FlHprFsM4Vx6OIVBN%2FyWoESPtbuBTbShrkmbm4ucX3utVKKGvkM9T4enhWOJyyZ4JpzDOv3YefUT1Br9Of%2FgfrU7JjjhZdph5BrbvFGDWag8Jfh%2B9XdPyjUr5G4uP698gmaI5V8pDps2DjQnRKnwmk2LeDyTlGJGuMJ3JvMQGOqUBteH9phoP2N%2BsBqyZlFGNvY1Pda79wqPsI7DAGd%2BmaxgcDzCIw7h67yJ54n7%2B36n69VEK4mz20P5ZrNm0WeVD3IIWnBemeYBpgsRuJM2maN87I%2FtSe4NWehjQpWvmwm7LPqBGn5ZZyhi0%2Ba1fJA6cPPosvZu19i%2BKC95kW8nm6nA1hJ7gKJNaFEBIsONeV2zsuWFYEp0col67dhGrbwadxJCVMca5&X-Amz-Signature=3b55b265230b90568532540a91c369dbd139daf18d0582ad8c35c1524969c710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
