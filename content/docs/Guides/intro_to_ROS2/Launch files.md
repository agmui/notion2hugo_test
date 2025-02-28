---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCOYZK7%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEsR4iarOcIvGEuvkgo7nONoy3LF%2BdmDtUk0QQNti9oIAiEAwy9OjhptY6RspRs3M5PFZZRie07u9Ek0ynfyY8KEBq8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJSUeuOUxW%2BETByByrcAwK4I70Wj5SRuYvqf%2FNUM1J6t9PxdxLl4JY3fTBucRvIWwDXycyP2h5fvhsfJuiG2kSGCQNHgDH3rFVYAWQC6CZlhRH7246t%2BJjTBj4Hlo2RcwpapCf0Ns1qWf%2Bkvve0PfOtii42dz6xK6yf2axwpRQiWvljIDszRDMu5Y%2Fo3OCMHwrzufWQJK6SRhPr6D23uI8EFno%2BiXe4L%2FM9trpoMu1tCirX4r1uykgAAVSeU70fBs8eZt%2FxlROaMzAtvqEkaqvUUt5exQVMGl1INdYvf8ah%2FI17ZWwq7PPZeFZWvEcqkIlg%2FUH8izQIe5uGU069iCUlAPr0%2BOCVjNHUjiS0vQJ9F5jNOjZcWt%2FaBRoKpylMNMUvw%2BYa9uadqEIHYidYOibqJrPHqnzr4SWf%2B4wK7ckzpMLHZZWQorNqku4wqfG93npMIjljGJfjgJFMzIuRSjQ26Nz711Mvn%2FtMkc66yDALbUX3EaQT48tZSx2L9f%2FqJEKMqXxc46XxtNdt72XiuEncdvNwbMKWIMEgcwaIucoMmZGtSe4CEjO8d9JkWfAAK7DblutclMFGVq1IyUPuYdvPBlArO9HN4IbKlvZohlG3rzxNlE7tpbMmF5E4J0hPfQJx2rB8lMuXEef6MOn1hb4GOqUBi1MI1kB6cE8EfuwXmJCpyK%2FahiIY%2F82W5AdGUrhkKTRMBmvB6yVy1IM9zmD8kd717A1Cp7DgABpZBPLx7p8b6o3mQ4HRdVsdcXfb8hX4jN4j5wv3Sx3vjBdwMgAJ9z2EjWj7E1KLCgPrNf2sxTMSXuHCGefj9O9Z4ael9sGCpl%2BIFVQYL%2Bx0Nkjhz8hMkaa7lH6hJEDXkdptPDL1ZBnkmTlrb4Oq&X-Amz-Signature=434650bd46f7be4ace9271b7c6e27af5de8c009475ba32b4fb230260ec3d1e10&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCOYZK7%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEsR4iarOcIvGEuvkgo7nONoy3LF%2BdmDtUk0QQNti9oIAiEAwy9OjhptY6RspRs3M5PFZZRie07u9Ek0ynfyY8KEBq8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJSUeuOUxW%2BETByByrcAwK4I70Wj5SRuYvqf%2FNUM1J6t9PxdxLl4JY3fTBucRvIWwDXycyP2h5fvhsfJuiG2kSGCQNHgDH3rFVYAWQC6CZlhRH7246t%2BJjTBj4Hlo2RcwpapCf0Ns1qWf%2Bkvve0PfOtii42dz6xK6yf2axwpRQiWvljIDszRDMu5Y%2Fo3OCMHwrzufWQJK6SRhPr6D23uI8EFno%2BiXe4L%2FM9trpoMu1tCirX4r1uykgAAVSeU70fBs8eZt%2FxlROaMzAtvqEkaqvUUt5exQVMGl1INdYvf8ah%2FI17ZWwq7PPZeFZWvEcqkIlg%2FUH8izQIe5uGU069iCUlAPr0%2BOCVjNHUjiS0vQJ9F5jNOjZcWt%2FaBRoKpylMNMUvw%2BYa9uadqEIHYidYOibqJrPHqnzr4SWf%2B4wK7ckzpMLHZZWQorNqku4wqfG93npMIjljGJfjgJFMzIuRSjQ26Nz711Mvn%2FtMkc66yDALbUX3EaQT48tZSx2L9f%2FqJEKMqXxc46XxtNdt72XiuEncdvNwbMKWIMEgcwaIucoMmZGtSe4CEjO8d9JkWfAAK7DblutclMFGVq1IyUPuYdvPBlArO9HN4IbKlvZohlG3rzxNlE7tpbMmF5E4J0hPfQJx2rB8lMuXEef6MOn1hb4GOqUBi1MI1kB6cE8EfuwXmJCpyK%2FahiIY%2F82W5AdGUrhkKTRMBmvB6yVy1IM9zmD8kd717A1Cp7DgABpZBPLx7p8b6o3mQ4HRdVsdcXfb8hX4jN4j5wv3Sx3vjBdwMgAJ9z2EjWj7E1KLCgPrNf2sxTMSXuHCGefj9O9Z4ael9sGCpl%2BIFVQYL%2Bx0Nkjhz8hMkaa7lH6hJEDXkdptPDL1ZBnkmTlrb4Oq&X-Amz-Signature=9da27a3e31a76e94a64ba2b3123b969629e16a943cd36c248cc0348aa45f8314&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCOYZK7%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEsR4iarOcIvGEuvkgo7nONoy3LF%2BdmDtUk0QQNti9oIAiEAwy9OjhptY6RspRs3M5PFZZRie07u9Ek0ynfyY8KEBq8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJSUeuOUxW%2BETByByrcAwK4I70Wj5SRuYvqf%2FNUM1J6t9PxdxLl4JY3fTBucRvIWwDXycyP2h5fvhsfJuiG2kSGCQNHgDH3rFVYAWQC6CZlhRH7246t%2BJjTBj4Hlo2RcwpapCf0Ns1qWf%2Bkvve0PfOtii42dz6xK6yf2axwpRQiWvljIDszRDMu5Y%2Fo3OCMHwrzufWQJK6SRhPr6D23uI8EFno%2BiXe4L%2FM9trpoMu1tCirX4r1uykgAAVSeU70fBs8eZt%2FxlROaMzAtvqEkaqvUUt5exQVMGl1INdYvf8ah%2FI17ZWwq7PPZeFZWvEcqkIlg%2FUH8izQIe5uGU069iCUlAPr0%2BOCVjNHUjiS0vQJ9F5jNOjZcWt%2FaBRoKpylMNMUvw%2BYa9uadqEIHYidYOibqJrPHqnzr4SWf%2B4wK7ckzpMLHZZWQorNqku4wqfG93npMIjljGJfjgJFMzIuRSjQ26Nz711Mvn%2FtMkc66yDALbUX3EaQT48tZSx2L9f%2FqJEKMqXxc46XxtNdt72XiuEncdvNwbMKWIMEgcwaIucoMmZGtSe4CEjO8d9JkWfAAK7DblutclMFGVq1IyUPuYdvPBlArO9HN4IbKlvZohlG3rzxNlE7tpbMmF5E4J0hPfQJx2rB8lMuXEef6MOn1hb4GOqUBi1MI1kB6cE8EfuwXmJCpyK%2FahiIY%2F82W5AdGUrhkKTRMBmvB6yVy1IM9zmD8kd717A1Cp7DgABpZBPLx7p8b6o3mQ4HRdVsdcXfb8hX4jN4j5wv3Sx3vjBdwMgAJ9z2EjWj7E1KLCgPrNf2sxTMSXuHCGefj9O9Z4ael9sGCpl%2BIFVQYL%2Bx0Nkjhz8hMkaa7lH6hJEDXkdptPDL1ZBnkmTlrb4Oq&X-Amz-Signature=b00ec99dbc04d2ed68f274a2c70935d3d5c202fbf2c2b9201c831aea0296e486&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
