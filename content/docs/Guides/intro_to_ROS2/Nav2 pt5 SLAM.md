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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=b189cbbaf743c6f646886db80dffc2968df74ecd9e425e22e469bd3ee7e96db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=c22b6715479432dc2f9bf608c834a19d1a449e1f31f1ae5c267c65dd702b945d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=105030862ac185a3677168c663492fae46babb9012dbf14a58ea8c365f5bac16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=eabc5e94a1f47cfeb8bb6f0a5bc614a3a9541f2e878a7183abe4e3fc15973499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=764cd61c9112894f6ad49fa5a632e4ea95bfcfe1bfbe71a5bc87bca0b88e6001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=522a0475341db15eb9da686e343a68e1c246bde8afed5548617688e8cd17902c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=2954c48dc0b5370b7be6aac78cbac80311591917438d80b7ea2478fc4acf2e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=5ce03f8763e50415e1696031a3e9c672dd30dcb2e40fd01c400810ee89748221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=6dda86602345c9f6058197d731b91cbd856281e55e63bae6bc567dde1bad87fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=391debdb9e1088bcb16cad0e5a4f28012542c667f08cfcbebbe645683143f7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=621668d6ea781537a02b5cfb16c22c00f1dcfa34e2bc90504fc853f014d80b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=ddd6660f14750f86e589b370e0255f59b23010ed241f5968fa7d8709b56ce8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=da7752ceb8fce6bd8ab9e8862db595ad6d6970e72e5b3854b01547f0bce76b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKTA6HNO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDfHIQIwuMiLk8c8kcCvq5lrSxQg3pGhWG1IJtdGaf31QIgLevUEi%2F6%2BsGmbOpd0pUXd%2F5EhCKEmP3C05sPH5o%2Bhd4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPwXdZsVOOwfPyAodSrcAz9M91W3Ufo9aJDzIXe7gIT9UmHGh1f8sFHJmB5nZtCkVpzSsd0Fi92uF5ULh0qgOIiHXI897NsVcXk9TzaHqxIk5zvSU%2F1xcXFtxnrVL9rq9Ry9MEzQ9UKpaRtHelmkVa6aqJjyTdPQA3ERKXS%2Bg1vNCI6JSbsdrgl2kgGnORsbdRIyLrKBak%2BraPOGnpyCA5h4Nc5ZB1WgnnAug1mTYDhmdaF9fA0x7i8bDgNnK8fpePCjXv9Ef4lb9eSeC8IOBe6GQV5IZEzZ%2F5B6Uy27UZdx0aRQAEHBgnPyXEoE35JrDCZtz14bpJcNMxH9OPxFeZy5u%2ByfmvF2uwok3rgYrcL0UcVYfKXGp80Ei2YyO9eytyq0soURVaYs2wjsC2uCZPTBDzESCZ6dADqdPBLQC3QlYrSz%2Byb4oc%2F0TS%2Bi1OJjerx%2FNz%2FZRgQjXqVDjbqZV9uky8%2FnJxNJDnCwCC7brj5RaKxk6HCMR%2FQR%2FiHF9DtLNGaiVXvlTLlarlj6VOQ2%2B4eLfZtU48utYUajofCcqx0PtrcSbbbAQrLjF1YYB2ZEKqJa02PO347VaQ%2BknflFq%2Fnrx7POTrjIrSWRXLoaZWPB49uDG9CB9D9YVFJGoDgqveYQsRvJkj4BsZRQMIfPw8QGOqUBNJPyGleDkRV3OdQjtiGWbo9j7wSOmFXft5OLWw%2Fz6ugRS6%2B9jT7DmsbLvXp4nBzQQ0LOL5nqurqUtiYYsxYjki5nesHZouOUM3Zrz6cIDhqTrMXvawNnbgLxpE2Urmbgm%2FOQieQrqXECnCqMf29gGAMEQlmqPF3gSPf6TRMZoma6zuvO6Ulwv26vtS8crgVnFSA4iCpnVVjhkSG%2F4igSF%2FcCpB%2FL&X-Amz-Signature=bdaebe603007329fc8665552cf9f34f36388868c919d96b933a2a126822bdf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
