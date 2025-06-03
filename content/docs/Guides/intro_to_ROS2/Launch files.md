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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVAXMOE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFSE6I%2FRLcCsWK1CKEgq6qbEV3MV0Uf7iPzTJG%2F%2FyQ4TAiEAxmdWTdsymKiHMCgfN76p6ZVM8x%2BRPFWbS4sFFZz9F90q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIBOhNXffgwSuxt4zCrcA%2FE2b%2FgVuy2OGSSJUDCT5NVisZ7eBolXSdixaGMdMIe1frUH60t6FfaJAOnez%2BkCA92xcdlATj8CrCIVVA9XnZRXDhCRFnlu3WSUmPG%2BGcTlhpJjTU836cJZ%2BxnL8Uw7SLySRti9h3AHCDe0lKx3J6FmxMNRuy4URVZbdV0bKJ1uTw0uXPRxvdH9cKzMAGLGD6So2Qq5NxNW7WhDeC%2BC%2FBOVcltGHg3FK76X8PdQ0bRbeZKUAgS3cB2ItJenrkWmXqrf%2F%2BslvoWdkzrh0qeDBiORToHFh%2FZaAY8UF0LHXvdX6oe%2FbFMZtltQpr1CustU1iZpboB5MuuD5jrLpaIUI7ryGJC8fr3xWuHsgQQqvm8NHplq676%2BhoRl1JRS42dUkrPIikzRmiXUxY3ySe5o1lK3zA%2F2hX%2BZc%2B0X0UVZw970Wo7nHTtjl5y4vClU8b7K3l9TA3W%2Bx25e2jY%2F4ZTdZauFMuUAKdtDk92DEIZrr%2FZznM7Nv8R9XaMonYS042dcAZyrQKHV7FRP5DkEAYPYUUSvknEGiczCuJnFsLUpHl1qDySWjrkM5XVV8GaqqtOAfNQIuH6IB9Stdjhjy7n8wWndlLVx1VRBYhLaqvwdJ9m9iLV93LM%2BsawMHh%2FHMLP8%2BsEGOqUByZu7qS2A5yAzbaPCgJuXZuUZew63stSgXrSwwRHPWG1SyYFve3SCPEGlPWkLjG2q1mzG0qep7sJD6JlDV4nbYoRvTbhZns5cs3pfeNgOs3g0hCFDCITQYHHd0gHrT%2FqOrzAeWBEZreaFIqOAKjG5KXrFI%2Bvc5rGiimVsVUF8v2%2F52Z8ZLk0ePvmEjGN6nbGxUBhdsGwajjUcwESIL2z45GX5QI3L&X-Amz-Signature=3c6764aebc16438d97f5cd99b0bf23d0102449f34cbf32a213125ab34ada6775&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVAXMOE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFSE6I%2FRLcCsWK1CKEgq6qbEV3MV0Uf7iPzTJG%2F%2FyQ4TAiEAxmdWTdsymKiHMCgfN76p6ZVM8x%2BRPFWbS4sFFZz9F90q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIBOhNXffgwSuxt4zCrcA%2FE2b%2FgVuy2OGSSJUDCT5NVisZ7eBolXSdixaGMdMIe1frUH60t6FfaJAOnez%2BkCA92xcdlATj8CrCIVVA9XnZRXDhCRFnlu3WSUmPG%2BGcTlhpJjTU836cJZ%2BxnL8Uw7SLySRti9h3AHCDe0lKx3J6FmxMNRuy4URVZbdV0bKJ1uTw0uXPRxvdH9cKzMAGLGD6So2Qq5NxNW7WhDeC%2BC%2FBOVcltGHg3FK76X8PdQ0bRbeZKUAgS3cB2ItJenrkWmXqrf%2F%2BslvoWdkzrh0qeDBiORToHFh%2FZaAY8UF0LHXvdX6oe%2FbFMZtltQpr1CustU1iZpboB5MuuD5jrLpaIUI7ryGJC8fr3xWuHsgQQqvm8NHplq676%2BhoRl1JRS42dUkrPIikzRmiXUxY3ySe5o1lK3zA%2F2hX%2BZc%2B0X0UVZw970Wo7nHTtjl5y4vClU8b7K3l9TA3W%2Bx25e2jY%2F4ZTdZauFMuUAKdtDk92DEIZrr%2FZznM7Nv8R9XaMonYS042dcAZyrQKHV7FRP5DkEAYPYUUSvknEGiczCuJnFsLUpHl1qDySWjrkM5XVV8GaqqtOAfNQIuH6IB9Stdjhjy7n8wWndlLVx1VRBYhLaqvwdJ9m9iLV93LM%2BsawMHh%2FHMLP8%2BsEGOqUByZu7qS2A5yAzbaPCgJuXZuUZew63stSgXrSwwRHPWG1SyYFve3SCPEGlPWkLjG2q1mzG0qep7sJD6JlDV4nbYoRvTbhZns5cs3pfeNgOs3g0hCFDCITQYHHd0gHrT%2FqOrzAeWBEZreaFIqOAKjG5KXrFI%2Bvc5rGiimVsVUF8v2%2F52Z8ZLk0ePvmEjGN6nbGxUBhdsGwajjUcwESIL2z45GX5QI3L&X-Amz-Signature=7721a96a845f1d130fc1dd37ce1399a6eb42fbe6f59c221a33008de0f2562cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVAXMOE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFSE6I%2FRLcCsWK1CKEgq6qbEV3MV0Uf7iPzTJG%2F%2FyQ4TAiEAxmdWTdsymKiHMCgfN76p6ZVM8x%2BRPFWbS4sFFZz9F90q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIBOhNXffgwSuxt4zCrcA%2FE2b%2FgVuy2OGSSJUDCT5NVisZ7eBolXSdixaGMdMIe1frUH60t6FfaJAOnez%2BkCA92xcdlATj8CrCIVVA9XnZRXDhCRFnlu3WSUmPG%2BGcTlhpJjTU836cJZ%2BxnL8Uw7SLySRti9h3AHCDe0lKx3J6FmxMNRuy4URVZbdV0bKJ1uTw0uXPRxvdH9cKzMAGLGD6So2Qq5NxNW7WhDeC%2BC%2FBOVcltGHg3FK76X8PdQ0bRbeZKUAgS3cB2ItJenrkWmXqrf%2F%2BslvoWdkzrh0qeDBiORToHFh%2FZaAY8UF0LHXvdX6oe%2FbFMZtltQpr1CustU1iZpboB5MuuD5jrLpaIUI7ryGJC8fr3xWuHsgQQqvm8NHplq676%2BhoRl1JRS42dUkrPIikzRmiXUxY3ySe5o1lK3zA%2F2hX%2BZc%2B0X0UVZw970Wo7nHTtjl5y4vClU8b7K3l9TA3W%2Bx25e2jY%2F4ZTdZauFMuUAKdtDk92DEIZrr%2FZznM7Nv8R9XaMonYS042dcAZyrQKHV7FRP5DkEAYPYUUSvknEGiczCuJnFsLUpHl1qDySWjrkM5XVV8GaqqtOAfNQIuH6IB9Stdjhjy7n8wWndlLVx1VRBYhLaqvwdJ9m9iLV93LM%2BsawMHh%2FHMLP8%2BsEGOqUByZu7qS2A5yAzbaPCgJuXZuUZew63stSgXrSwwRHPWG1SyYFve3SCPEGlPWkLjG2q1mzG0qep7sJD6JlDV4nbYoRvTbhZns5cs3pfeNgOs3g0hCFDCITQYHHd0gHrT%2FqOrzAeWBEZreaFIqOAKjG5KXrFI%2Bvc5rGiimVsVUF8v2%2F52Z8ZLk0ePvmEjGN6nbGxUBhdsGwajjUcwESIL2z45GX5QI3L&X-Amz-Signature=e3b4aae501a62ecda0fd3554b48284ffe6c9ed78e27530e9f02fe54d8899f9fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
