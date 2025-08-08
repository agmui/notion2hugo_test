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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=e9ca853dbe2a90b9ccc8f34f3e1f09a17d8acd1773dd4b58b74c848de5990c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=0e7c8420f7efae81db90aa348580cd4e7ac17281a53d7f6bd68e15159dae2175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=a22eb9b617cd9d0edeaecc42d2e6dd94843e7166936af41f29d1c08358ccbf88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=c21bf5629e7255451e8bb4b79d71389868375d8d66c4d4e21a79e104d51cac95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=2b7cef4a1c01a7a0c6310a90de58630115d9c49b59986e23253d9a28eb8cc1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=46d3bb597d1ffae58f31cea3937317482f475319c1fb3a9706d0c13644df4b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=a80fbe81c7f0a57a2be88b0a3c33359e1b4362b07630585e79b3e12614946f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=dff8dbd8164f262ec9c416f85dfd2381ba32c3254ffb6cca4b5bf1181dc2033c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=92044eb3b27a00e4479482b29f1d66506364eb736f678825304925489161017d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=c1f78e2c3b631ba0558aa1adc46acf3958e740b0281d84f163c8ae4a34b57b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=b0eaac6c26b17f9954d210ff20fedfb3cb5b5f6159b21634004f2ca1a9656ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=57c967789f66052490b6385413c232cf33d46609c93e2d8f1902b25d3bc7c2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=3783d2fffe711d581f151b1c120ec637ee6f1f944252ee6261f3ec6d6b77f9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLSFDU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGVxxXF2FQMPO2qft7uNG%2F9B1iK5nXNAbD0g5nIJRoa8AiATeiNcJ1dM7bKJm6mstDm%2F%2BwX0h7xI411ubfq%2BudFwjSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgziMDY3xifMDTLpaKtwDg9Xf7UtZlfyiWwuRRJD%2BpHKSbC%2FFxC3%2FB96uXNpP1PBjm3JLbpcdYmpltM1mjoAic3XrU8ZsKsH7lxVz7AGTM73Y6DkEqtT%2FAFyOsEhCRdJ282mmA76CPUPlelO1M5p2uI90dkqeMVQXn1d%2B3mpfBq4y9ytbaN%2BaTqCXuowymInvOuS1BBuvzRP5uuG9BryaYXGvnmYHIvjtFWXZ%2FTkrDPUe7ZCBUeM%2BJgenHjwbkMyPSaOmDtiEqvHkQspYIamE4ZGVKJ526yPeDSZUJ2A9lyNtOm6429zpAdrgKqkfwKgOqwFSUaeVJLabsTgXoRAKYPStxgGqyrvVUIX4YG77gZFh%2B5xou3Bb%2FVfD%2B7qe9kkkP%2Bwt0e7P%2B4hyH9S7VhIVa1MvwpaHdS2V100u9oRE%2FlhCi7CFN36b%2FzPQQDRGu49Y0f%2FiAR9SJIW81mdfUR2HLLPBXw%2BrtwWO19FyQSzs3wk1awtiRTsrV4rATFZKYtbcSwuCq%2FvVuDGP4I7twy6A7zFIYQZIIQKWwLlNQMAu6ZFECUTAdgozk1F43i%2BZoe%2BKnt0T9%2Bstwbglq%2BiGRT%2F5npTPAODfwdj7IpFtG2sT5k%2F%2FQdTON9EVyKd2cktHCC1XSM6DdOvUxXC7uAgwlLfXxAY6pgFik%2FI50jBJSRRBH33HM8lcBcMaZgRcv%2BcIZb9Ga9yI3m4jjJhR16D7pUI5gzqxUoyVrxHc5uuubyTcyfnUM8h%2FJ%2FS%2B9v6inv05tFq%2BervoAUKbvvAZQrcl5cl4RfrfCgSoKPwhqWJ5XYTtaQ8bJJqnKWc9kQvLS2MZyUGooql2z%2FTBPgyApVrOope8qmsjtXJc5PlHKehqh%2B6FBo56RlNp00v7uFHn&X-Amz-Signature=2c3b5033a0560965258b690738ee32a98dbc4b19083ee8b60f00d990ec8cf6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
