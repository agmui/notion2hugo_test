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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=45e8c5af5e635d22b7f351a7522c85f46931cc0dc925c82e3cce7b3ccdd4c23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=6627875c7baa8088b33d8826999cef35ad1a6667940a25ef920fc80976d1c140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=2755b683f1afded3f352c0faa69b15a5e98c0d4b30db8b502beba8f82d67d2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=9f2dbbe201c47e76992ede3af1b7de2f6ac920b4424b70d9e99f470b75c89aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=ab38e283f9685283694d16201832ad0e6608ebdd38876c3fb9b62e948324bb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=7e54de8a93dc6f5dfd6ac9521c24092f3a0982fe623c5a2db46de5ff59354cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=1f5f1b9b9dedcb6bc2588795b4efcc563875088786278bd81a7d2b01503beccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=bb50cb2aa4b1b5f326a27e7e0a9bcbaaf17cde96e41c82a36c8a83f121d756ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=0ec0b7deec57fcdbbd1655ca4c7e74124f5feff5f72f2b6c685b4d281dba2114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=a6553197ba40bf663ec25ff0fd9fd0d5f66cab0f040d78cd74342f0336141d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=a45b227747727452f49d04dffed4ea934d2550bee279305002914757584f30d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=9188b70874cee8151900f7f28f0a79450b926cebb2d8b1a6da7e77a63bc4ec87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=3c68483f0fb5ba8bc9f7fd83eb8d17a9e2c952dae07cc5e470b76f17047c0fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRDDG4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Wh7gwWrX1E9s6NasSMfZEmNxWwtybTLR%2BfMb8PlHeAiEAjFUq%2BpJuY2hCWbdEoRyLtM%2BHZGewQbA04Vv8k5nXKp4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrXpK1fnaGHmq%2FN%2FSrcA84wDVJRWMjAfPISVDJVRLC15hJ9TUUp%2FdKuZEwsmih65zO7fEquMSOkrukriz4C0BapXIZJBaxvdqK32mayAeVX%2FIt9k%2FiTY5l6WZFcxVG1ColauFr6%2B1o%2FZwCbA%2BmDBJCh37aXKeWfbnoUEuZUJSzKGTgeUxGhOAvGRj5Isa6OOxLDhH4UDSIlOmrq7VSYE0SO6Sy9uj%2F6P5rET2KoQuIMZYmuPjPfZ1SQERCVGxoPUa6FQ1m5LW6ZqHYpeTvH1%2BZIksC1%2BQFPV6utR3OS8AK2n8HHKRE57Nm1C4v2j1tIRqq1tBFdMFTNI3naHWtD9XO8p9zo2XRL5YfAIevNgWQ8Ywx%2FlnIh75H8cslKiFmz5ATXcO9RBQ%2Fcm3CD7scYe%2FwiKDVNDsdG1PJ%2F7ZnoAmiViyeQEALA7SrjopeEm5Cmc70Tfrio0XILFatLdzsqXWlXYRtg507LlvWKiBOYWJxRZNWAg5ALf6KSrtXAptlvxGYuw%2Fx8AP2hZUlC0n9mDE2X8ySrw4QgMyXvtB0V49743ZMYqQoMZK7GEdHa001LG0rW%2FM46CoXhm82O6wGDPc84vzDNZlQ91WVQfKerBeVdtsSu56%2BUb6F6y%2FUw4Jc5cy0tSo%2FqEKii4dR0MPv04MQGOqUBsVI2j7vX0voPrqX5k7hMwYBRmKqLHgBWi2CNq%2BH3PkfGDhujJejv1psiSvphZXsIA97n4%2BXsPmIGjm1Eiv%2FzMN90BahXVGjWDSzTxxIKUXJkonof7xoiDaTbBZkDLdEhxQPxrVZdQcpowMJnP%2FI24%2FPReOILs%2FTnfYOJi9CUSDD2KtnkaxH483Fr4nqnk2d5NK0kPA07cPrXUQ1OKo1Ta8%2FmmXv9&X-Amz-Signature=9e15c365b5ec901c2dfb8295cc2b4ab3db49800eb586b71a48177ccd8e1d1ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
