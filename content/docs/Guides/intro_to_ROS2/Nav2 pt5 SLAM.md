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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=d1163475fb4f5bbbaba8f6254afed1b5089de214355cca1ea8feab1357f08119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=b72b92ef5bd9cf34be3f3b2597ee0365a62b26aedf06be6a82ac1ae794fe487b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=b81112763c1a09eed38c4778147bbc261df33c3352451d2bf63b32928800dd95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=d3aa83951c9d339a6273703b33e63d6c2137011a216513044e0b3152bc46287a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=2807cfd0e6e4fe198c42292f277b9715b49fff2d35c88117acc245b37db8cb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=070eb8ae1b61c5fa20683d108b319a89762097ea47ecd9f9d0c01f678756fad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=6454540d60eb577e0d05404f43e7c2ab49239f7db0004cc8d504b124a43df00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=8179aff69b645e6129fca7d8f181c5e416cdc9a0495b4d5c085b170fc4a33541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=1f3f65dba11a951ea6eb638fa97b54b53e5074d4ab38696421f5afcaa1ff20b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=340d3e03c877b2808ad14124ce6eff9b66fe123bb429cd2378769e1ac78f5db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=ff1b99d89965e83b285d3c5883b2d4581723abe1ce43db39a6b02f674d3418f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=f7ec254c7d4d0a0be79c99f59d4dab1057ed0b9d2c2d3638ae9a95ca3d31e5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=d596b035346e189a00f2335f3ccdd18f87ef185645dcc375ceb4444ccd66b72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2KV2KA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQD83nqF3MA56SqKWQsApG6j25Aq17AWh%2BbZYBg0QNb5TAIgbMu%2FBVtP0v0WAqall49IxcF8uDkDe0iIyu9qs5yqwrEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKWQwm%2FgP8528cCjMCrcAyTz7vyItkaO4wbBteXOzb9PJRIrrB5Cn3%2Bdssuboi6WbtIx1EsyC0sK290kF%2BTtxiTJGFDylXWuTAkhUFLNIBZcwiQuuReOmyxzxY5RauT11n%2BnrxxcSbDfglWePn3chja6H%2BpNnOxwHFi0HBpuK3BnHcrgV7%2FKJYlF4Q45UF4LHNp5SpxdTVWLINRHC4f4G4JRLBM8OQAj5oL%2F0v5JkG%2BeFhRNM6KEk4tWBFpO23F8Lpyl0zTmhrYhXtSgX7DWNe0j4dzeZD5i%2Bgd46dedGycnrITdgpIkaS%2BcLmpztdJ%2BfL7%2F27xl2nDBIUEMpsrk5bSb9ESggbW2jQkRr5KOQJNk2Q9SUzCgcfYLTn5JX0n%2FDxp50ws2hzAkVRzN%2Bz4KHaC%2B3cNXtff5StxccrcmDepdlZFDtiVxzbSZ%2Fz8JiVcIGsDo1%2BNrQZV7frznlAKFLEvfU4eDCkI1u38QL1VLnf8GVUTUOS%2BISu8aBNvaKCRmdkaqlZo9JkArh76EOqBeYK2rxhrMOlldCSlh%2FQtcR8%2FNTTr8o%2BqscVEAey5jVfAlCnz7sqFZdeDDKaF9AN5FpGcqVYB4iF6TH9DwmzToEOhSIuBh1JUFQ4OZypZ5qPHIDbixyRHne0NeCAJ8MK6nwsQGOqUBJkaLVQKXjz0ci26p363RmAVDa7%2F4BTBXAvqX8EVbAQ2wHQDqeHZn2SKVtE8A5SQ2YO%2FuPf6P8vDJx3qTiNbBQC7QHA3htehfA9vlLGzeXU6W%2BhwqmkK5Sxtrtg3yJ7gI92qAbr55iMtE6NRsNCVGsfZtjfz9uZdNKqEEoFkNJYvIsVi6dbY9UdRqTSdjE0aWUNWZCDztreAL1TVYqkghjXsY%2FHbn&X-Amz-Signature=1fb42d7a80188d1897f5dfca4d07b7f3b025bc433be571733e4b84ed4c6f3af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
