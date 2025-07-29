---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T16:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T16:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=ec9bf8f0a6eef2a3c400c22a93a8ab51e83499311a1de88f4961b011803b0f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=0184b9ad70404fcafc7432154883a80e2c8f5721784c0eb5abb7fdc394b588fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=d62548eb80e8f5995f62bc052764d13b790bc2e09e743f7c67e11b9ba92c70ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=b22c6b24e923f82f4ff0965fd816ec451c30d5543e6ecfa38a67ee813cdcdad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=dbd56b890667109a31e47b4cda72f4bef33a7a2c93528c22e186c3777c6e75cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=84a9dff0922febede70c49b80d457611b29f19963f2f5b3f1c9323c9d65d7b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=bd3ccf7e60c75a530cdcbb790bbe00534eb4f00ebe01e117fd13b42b68f3dfa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=48810aa1fc5becf93521b7456ce0756b9cef7aba0aa241692c4a09eb591304cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=74e4cf5090f18d2088b4eada6394426047ceeb9c8aae4f554e3ca5ff68768c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=c8f5c6d4c82c25b8bd8a72861c895f4462d4794ff203241d235412907b903078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=1c7fab1c0298d7b7ed8f14fec0acd43faf35bf1663a0da6eca9e9562a8606bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=7e66d4dd29f833a71fa3957b9c8c3d750d5751a0b98945f84a9b62a907613dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=262c349ee74898aa0b054aa0eed36248e13f415949f618f91b0859b05c3ece60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQF5S6I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCatC7L1FJRxUNFYtWZmimbd%2F%2B5DOvO8dG1Wl%2Fll18AIhAPYUF2%2FPdCW5YENAVLEO0H9NTXZpJ13nS9Yn%2FcAg49OnKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1kslQLEWwnhsx3gq3AO0E8oNSTD%2BxmTLGZ0vs5vv1liELS01yEALSPR5mNgQ1IeNs%2FfY9QVmV8sS9mFGrqmn2Dz%2Bq%2BoUz25yBIJuyhRKJUwUvGSNuFC6YPRcScLgPocE8bvPfYB%2FH9s9VtkKj87%2FD8Q2uPfNdICS4gqvGlnkL1wzlL2nWyreLqojWrNtONWT7Nt7KnkSb2Re6MOiVotUFk43Ue8JV0PnpvUrqKlTPYowqw%2FXWtdbCFWxrHpQi1FGriBbeghQU6%2Bls%2FzWLRk6O%2FlE9FDHXW6oFZ9raf0fRXAB08gjs0hNcLSRX4II9eKNf58OC%2Fb4psmWOXx6JC1pHzC0CzrhL6XgPQsEJyKqEzbVoe32%2B8wq%2BASTcYeUtjfKc84m0OmZmky%2F6unumiTqrazcso1WH%2FiKVEdwZRUe4QDs1lvnmmEdPAqua7jm4545Ye%2FDyzWvblsiigTd0a8nYdy3KIJ822rBjw0X8WlgmgSue%2BGrDRscaNya6vWqcc09zgHa3BhG0cG1MGEI5ofkcyWD1z1J1fc90KBs4VoonkstmWOJWwEuWvy3QSKJxJ5KlwUIsbG2TVK8z%2Bx8gR4aTRGBndaxMeejmIWJBzHyHRtQcdCjy7v%2FVO14ULNVmPZRPnn8UAJSarywJDCV%2FqPEBjqkAVGc36aibZCChk0bQEOljHHZJIET8Pg3Bid%2FjWxMuijbVG4GmNjAHIXMMac%2BDOFS6zlxONzqMUf6hWnPVqck08%2FjhZtqd5hGuq6AJeKovJ%2FyFHSqQCwCOiN%2B4UsrBS6E1Q4OCzYw%2FQTRNIOB594TBRo9%2BpF1%2FUgjv9hpmlHXyXpkPk0zdoflY6N7kFW7estKBMjFQixLSi7PxGDTpza1%2FiGeumJa&X-Amz-Signature=6415bc496789b73d19c39b1e1bafbae51fb22d23a16710722b8d12f10dfcd793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
