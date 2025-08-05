---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POZCIUS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCxTKN46F5kg1Wd4Uw4zOsn1OiLX%2BvFGEAmKJmNImwXLwIhALAJaPikjHL1wFdSZz0RmXu3FZA2a1B4zFDvPxNNOIGfKv8DCFsQABoMNjM3NDIzMTgzODA1IgygDE0YTaU1MEj4yfgq3ANiBi5V%2Bn6kkUPoXlNa21d0%2FePcKO%2BgxW6AxPB99ynAn0wMXcxkjwYQ2TN%2FKWRNBxsWZ%2FB7USBc%2FU9blKjHRd6mVQ5iw%2BJZ2nCgBjUlCoWZCjlNaU8B6PJ0sJKn2q3v7zXoDQjUoo%2BaEVpvEXWoLFieFxMABLj%2Bz7dq7Aoch%2BOGzj%2BrkURgC6jrDyMwwBU1EmTCTCjl7F7RbkrjXI4e24hHyyi5SgoiKv6ELvywpRp9IAxPvBW00rqZkL2pCKqE%2BqvadwUwa0IuKTi2%2FmZ8BfgAA15VqLDLlnpBJIDH7t9Eg3dvA%2BFcrIfuq5Z17AxtspnNiDddtEjMEAbC9cwrcBHTgwK4ShSBtZro3T2vsKoXQR%2B3lZfnZWTNjGwJYuWcX4pI7QL5X7mJ1GTaMEtTpojZvfUqKvU93ZAUFDLHr%2FW7acAKRbAt1hrJvpGyxeoir5WeV6xNPve0DPyCdVPrciedTy11nPfdtGBh9kpuW4RVBgyyxYgYIDBCVcZ27mVKap59qSHjgLFVqRtRZ79Ei9tpKEtjJt%2F%2BHSIZOObZS6oHBCTBlVNyPpTp8qDne%2Fe5DAtbntn%2BHM6JJMfIF4tJQoukUV3d2%2BkK3fBiaP7GlOJ9i%2FzkjKRxhHcKkT7JTTDNrMfEBjqkAbLxth9uYHvLZl3DoRks3pIZf2Ef7%2Fnuo6Y3M6DQsgFiSe7OydKw1ILqv1jir6oNgtGpwbvEHLyXKaw1wC8ZvJ1Wp3G8nne8JlbJ3Ihqyjsv97Ji%2FOy1yGRE3WFQtELO3XRvmzratlZ4XKfzAs6WShBcpTrFkfhfpNv9tpvOtvWppLMAUlYZ0%2FP0B0bauaXiLkpgjxx8lhcxIBnmjiJFfCaOhmIk&X-Amz-Signature=39a02c8e8300840c23a6879714b895e2d8a7aeb47170ce8164b64b1a4fe247d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POZCIUS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCxTKN46F5kg1Wd4Uw4zOsn1OiLX%2BvFGEAmKJmNImwXLwIhALAJaPikjHL1wFdSZz0RmXu3FZA2a1B4zFDvPxNNOIGfKv8DCFsQABoMNjM3NDIzMTgzODA1IgygDE0YTaU1MEj4yfgq3ANiBi5V%2Bn6kkUPoXlNa21d0%2FePcKO%2BgxW6AxPB99ynAn0wMXcxkjwYQ2TN%2FKWRNBxsWZ%2FB7USBc%2FU9blKjHRd6mVQ5iw%2BJZ2nCgBjUlCoWZCjlNaU8B6PJ0sJKn2q3v7zXoDQjUoo%2BaEVpvEXWoLFieFxMABLj%2Bz7dq7Aoch%2BOGzj%2BrkURgC6jrDyMwwBU1EmTCTCjl7F7RbkrjXI4e24hHyyi5SgoiKv6ELvywpRp9IAxPvBW00rqZkL2pCKqE%2BqvadwUwa0IuKTi2%2FmZ8BfgAA15VqLDLlnpBJIDH7t9Eg3dvA%2BFcrIfuq5Z17AxtspnNiDddtEjMEAbC9cwrcBHTgwK4ShSBtZro3T2vsKoXQR%2B3lZfnZWTNjGwJYuWcX4pI7QL5X7mJ1GTaMEtTpojZvfUqKvU93ZAUFDLHr%2FW7acAKRbAt1hrJvpGyxeoir5WeV6xNPve0DPyCdVPrciedTy11nPfdtGBh9kpuW4RVBgyyxYgYIDBCVcZ27mVKap59qSHjgLFVqRtRZ79Ei9tpKEtjJt%2F%2BHSIZOObZS6oHBCTBlVNyPpTp8qDne%2Fe5DAtbntn%2BHM6JJMfIF4tJQoukUV3d2%2BkK3fBiaP7GlOJ9i%2FzkjKRxhHcKkT7JTTDNrMfEBjqkAbLxth9uYHvLZl3DoRks3pIZf2Ef7%2Fnuo6Y3M6DQsgFiSe7OydKw1ILqv1jir6oNgtGpwbvEHLyXKaw1wC8ZvJ1Wp3G8nne8JlbJ3Ihqyjsv97Ji%2FOy1yGRE3WFQtELO3XRvmzratlZ4XKfzAs6WShBcpTrFkfhfpNv9tpvOtvWppLMAUlYZ0%2FP0B0bauaXiLkpgjxx8lhcxIBnmjiJFfCaOhmIk&X-Amz-Signature=e71749403b86791783868f21a84f14e8899160b39301ea73647690da84573061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POZCIUS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCxTKN46F5kg1Wd4Uw4zOsn1OiLX%2BvFGEAmKJmNImwXLwIhALAJaPikjHL1wFdSZz0RmXu3FZA2a1B4zFDvPxNNOIGfKv8DCFsQABoMNjM3NDIzMTgzODA1IgygDE0YTaU1MEj4yfgq3ANiBi5V%2Bn6kkUPoXlNa21d0%2FePcKO%2BgxW6AxPB99ynAn0wMXcxkjwYQ2TN%2FKWRNBxsWZ%2FB7USBc%2FU9blKjHRd6mVQ5iw%2BJZ2nCgBjUlCoWZCjlNaU8B6PJ0sJKn2q3v7zXoDQjUoo%2BaEVpvEXWoLFieFxMABLj%2Bz7dq7Aoch%2BOGzj%2BrkURgC6jrDyMwwBU1EmTCTCjl7F7RbkrjXI4e24hHyyi5SgoiKv6ELvywpRp9IAxPvBW00rqZkL2pCKqE%2BqvadwUwa0IuKTi2%2FmZ8BfgAA15VqLDLlnpBJIDH7t9Eg3dvA%2BFcrIfuq5Z17AxtspnNiDddtEjMEAbC9cwrcBHTgwK4ShSBtZro3T2vsKoXQR%2B3lZfnZWTNjGwJYuWcX4pI7QL5X7mJ1GTaMEtTpojZvfUqKvU93ZAUFDLHr%2FW7acAKRbAt1hrJvpGyxeoir5WeV6xNPve0DPyCdVPrciedTy11nPfdtGBh9kpuW4RVBgyyxYgYIDBCVcZ27mVKap59qSHjgLFVqRtRZ79Ei9tpKEtjJt%2F%2BHSIZOObZS6oHBCTBlVNyPpTp8qDne%2Fe5DAtbntn%2BHM6JJMfIF4tJQoukUV3d2%2BkK3fBiaP7GlOJ9i%2FzkjKRxhHcKkT7JTTDNrMfEBjqkAbLxth9uYHvLZl3DoRks3pIZf2Ef7%2Fnuo6Y3M6DQsgFiSe7OydKw1ILqv1jir6oNgtGpwbvEHLyXKaw1wC8ZvJ1Wp3G8nne8JlbJ3Ihqyjsv97Ji%2FOy1yGRE3WFQtELO3XRvmzratlZ4XKfzAs6WShBcpTrFkfhfpNv9tpvOtvWppLMAUlYZ0%2FP0B0bauaXiLkpgjxx8lhcxIBnmjiJFfCaOhmIk&X-Amz-Signature=dffc104466fe22c58ce3923325c4dc359fdc2d5124454249a930673d75758d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
