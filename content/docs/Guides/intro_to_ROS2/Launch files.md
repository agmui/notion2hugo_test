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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IS6NMQN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSfrVNHjItZVQDe8rAFp2HwR6pWN9cYlYxQP2vFQc%2BCAiEA77ySzTBdL8%2FYC6HynveDzPlo0tD%2BIw1m6Y3PLJjGY%2Bcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAJIewbNYbujRa1oCyrcAy1kyGflMzTVfbK1vR70p4LCN2DPODimtt0e3UTJz%2Fft0hBmgj2f1jtW8ye3BSHEbl1PNXaekKKxftzLJvS1SbmXYx1b1d8i%2Blvp%2FjvYNnGzvGX7RommMwrPS%2BtbHCmn422HvHdeCpXbzJOHOZx4VNX1wJ%2BQaCa7nCIW5Br3XEGOsqnnlZvScdmUvgdLQLU4ul3QnOpLAM8Nn4OpQtxQ8icFPGV%2BHbH0tz5Bn%2BGwUDDUGuCNq60os00xHhc%2F1T37MeHO2ZRFloXzpQLPVwh4wEaz%2BksHZzisCVNdU9KID3dXDYnqPutqoywzWI%2BEuHKMJoLjdD566pEu5km0tGTAfXoYhmpo84mM7rEMh1xLN5lH6j8Gl6tVW5nB%2FnllCLduiZByRUpsKoNQAHDEZDnEUZOBGHl9S7ora3L5rj77FYKt0NdpUTyi1bQTEILxrYN90952uxOFiWXQJaNeNo0jzmD9mjjRCVTtMhStNkgSg%2BfIcEsd9y4o7NLlD0PQ3jzwABnbU01QrQ1v1%2FZ0TWqhC7LpYPY4jHk%2FwQzf%2FGT6XVaSoyVQegwk60qMnIHloNtH%2FsuNvbrvAj5%2BzcybmaNK0SFYzSm2L9S3dP5g3fJFBE6S6MxB9u2rldXN7FpSMI%2FfuL0GOqUBVbmlrRKO5tLOhdJ%2BpE4uCTKMELAWMefXawv9fTADe6UyfuzS0bx%2FJM55n1W7nZSppbMtKdqVEIZmKWloWhIHxqadKjq5E%2BlTcmL8ioZQeHjA5X01QSRZkiZqbK72s1sOnF%2BVYqCWcKpVXQl%2BHGVMYJ6rCx65aMH4AWKFHBJRItn%2B9NvxyjnDQSj0zlP%2Fl3ZGWkmfc8mjStyq4%2BosV%2BG6605S9YOe&X-Amz-Signature=5071be0cf7f080bace186664074102e9ae03bfbf31fa763ab5c694c7627b1d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IS6NMQN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSfrVNHjItZVQDe8rAFp2HwR6pWN9cYlYxQP2vFQc%2BCAiEA77ySzTBdL8%2FYC6HynveDzPlo0tD%2BIw1m6Y3PLJjGY%2Bcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAJIewbNYbujRa1oCyrcAy1kyGflMzTVfbK1vR70p4LCN2DPODimtt0e3UTJz%2Fft0hBmgj2f1jtW8ye3BSHEbl1PNXaekKKxftzLJvS1SbmXYx1b1d8i%2Blvp%2FjvYNnGzvGX7RommMwrPS%2BtbHCmn422HvHdeCpXbzJOHOZx4VNX1wJ%2BQaCa7nCIW5Br3XEGOsqnnlZvScdmUvgdLQLU4ul3QnOpLAM8Nn4OpQtxQ8icFPGV%2BHbH0tz5Bn%2BGwUDDUGuCNq60os00xHhc%2F1T37MeHO2ZRFloXzpQLPVwh4wEaz%2BksHZzisCVNdU9KID3dXDYnqPutqoywzWI%2BEuHKMJoLjdD566pEu5km0tGTAfXoYhmpo84mM7rEMh1xLN5lH6j8Gl6tVW5nB%2FnllCLduiZByRUpsKoNQAHDEZDnEUZOBGHl9S7ora3L5rj77FYKt0NdpUTyi1bQTEILxrYN90952uxOFiWXQJaNeNo0jzmD9mjjRCVTtMhStNkgSg%2BfIcEsd9y4o7NLlD0PQ3jzwABnbU01QrQ1v1%2FZ0TWqhC7LpYPY4jHk%2FwQzf%2FGT6XVaSoyVQegwk60qMnIHloNtH%2FsuNvbrvAj5%2BzcybmaNK0SFYzSm2L9S3dP5g3fJFBE6S6MxB9u2rldXN7FpSMI%2FfuL0GOqUBVbmlrRKO5tLOhdJ%2BpE4uCTKMELAWMefXawv9fTADe6UyfuzS0bx%2FJM55n1W7nZSppbMtKdqVEIZmKWloWhIHxqadKjq5E%2BlTcmL8ioZQeHjA5X01QSRZkiZqbK72s1sOnF%2BVYqCWcKpVXQl%2BHGVMYJ6rCx65aMH4AWKFHBJRItn%2B9NvxyjnDQSj0zlP%2Fl3ZGWkmfc8mjStyq4%2BosV%2BG6605S9YOe&X-Amz-Signature=40bbddce22836d7525e2a1859b80da42929ac893b5b43e8c7e4ab500cf5ea55e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IS6NMQN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSfrVNHjItZVQDe8rAFp2HwR6pWN9cYlYxQP2vFQc%2BCAiEA77ySzTBdL8%2FYC6HynveDzPlo0tD%2BIw1m6Y3PLJjGY%2Bcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAJIewbNYbujRa1oCyrcAy1kyGflMzTVfbK1vR70p4LCN2DPODimtt0e3UTJz%2Fft0hBmgj2f1jtW8ye3BSHEbl1PNXaekKKxftzLJvS1SbmXYx1b1d8i%2Blvp%2FjvYNnGzvGX7RommMwrPS%2BtbHCmn422HvHdeCpXbzJOHOZx4VNX1wJ%2BQaCa7nCIW5Br3XEGOsqnnlZvScdmUvgdLQLU4ul3QnOpLAM8Nn4OpQtxQ8icFPGV%2BHbH0tz5Bn%2BGwUDDUGuCNq60os00xHhc%2F1T37MeHO2ZRFloXzpQLPVwh4wEaz%2BksHZzisCVNdU9KID3dXDYnqPutqoywzWI%2BEuHKMJoLjdD566pEu5km0tGTAfXoYhmpo84mM7rEMh1xLN5lH6j8Gl6tVW5nB%2FnllCLduiZByRUpsKoNQAHDEZDnEUZOBGHl9S7ora3L5rj77FYKt0NdpUTyi1bQTEILxrYN90952uxOFiWXQJaNeNo0jzmD9mjjRCVTtMhStNkgSg%2BfIcEsd9y4o7NLlD0PQ3jzwABnbU01QrQ1v1%2FZ0TWqhC7LpYPY4jHk%2FwQzf%2FGT6XVaSoyVQegwk60qMnIHloNtH%2FsuNvbrvAj5%2BzcybmaNK0SFYzSm2L9S3dP5g3fJFBE6S6MxB9u2rldXN7FpSMI%2FfuL0GOqUBVbmlrRKO5tLOhdJ%2BpE4uCTKMELAWMefXawv9fTADe6UyfuzS0bx%2FJM55n1W7nZSppbMtKdqVEIZmKWloWhIHxqadKjq5E%2BlTcmL8ioZQeHjA5X01QSRZkiZqbK72s1sOnF%2BVYqCWcKpVXQl%2BHGVMYJ6rCx65aMH4AWKFHBJRItn%2B9NvxyjnDQSj0zlP%2Fl3ZGWkmfc8mjStyq4%2BosV%2BG6605S9YOe&X-Amz-Signature=bbe7b53fe3796e08aac02c9ea9dda7a44f377be7d5472b6b584a5ce8b31afb59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
