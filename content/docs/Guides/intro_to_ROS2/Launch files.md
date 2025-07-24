---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7SIZZZH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBxrySMgWNJ4NEOY2xn%2BpYNrdZdb3aT7rZYxItsRXp4SAiEAu0ROxpqoxfxgV9vsw1lYdSSxuGNkSTl%2FRIeUUtiRM4cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIdYdETOLJ%2BRaJeSTCrcA8X6nMX2Ida5jm6uXiq2vPSXF8xZWVeOYjdBEUStarvZIRKaIsGbG0jsNJAqdM5BchPNpyQ80Zetq5FQZytoFWg2Qsdw7nTNjdKkRMNz9aiGVTUc3ukQoVPJs%2BJsbYomAR2ntfhEVApdiQ82fo%2BkIO6mMZjUByODd839RHy3yqxZoseB5lQFFLCDs1Ou5YB1EDyonit4uNLzytO3%2F5Z%2FApdLITXETpSb2QOEyojPmLc4fHLGAQdMDFHkEZ4UUn4beKvCbrCUhUMta5ZsobMh787GKbVQSlwqVP6iyOmNLK1eMf%2Bee4QgDzduorOq3LbqLK0HxduAnmNCuNdDEvD2x9UlkBIoXU%2FTK2r9gaBLlEoVWlHCukSdyBknP02prqKyK2Iz19kfHTlicdkoThHaCZppYSxrcGfJM71H5gs3h%2FF1VtA9VSlazXI3MSRLUir4th2x5zbQu253cyVpqNsbFQB9EtvFR9dKeIjmdE2ZakHMh13CT4Dpz2fTeUmKfMJMAaADlCzaU90hKHXlWxQ8Z0jEp8Im79Y60oeWqDNtc1Vf%2F1I2FsmQGMGLqPJP%2BrOTyJTV2gPp0ONbS3x%2FSruYvfB4m%2FoJdy18730KCMNu%2BLmx%2BxPd9cOYOIvznesyMKuPiMQGOqUBD36SlDDleHxg6t7Zs5Z%2BRmTYRbQyxgtdRvC7tGAK2lhztnxW9JG%2F6gGm7qFH2IglEQ8uVy0cYVmbUeoV4qCmKo6MXIRQwXZbmzuupBnH9QQPpsOmLHOUer6oQE9%2FSCNZ21Gt56ieMmRjm10imirMacJFHj7hopO1ORBxqLyin%2FihDlnMYgcMAgHABkxaVTvegL1v6dFZ9ycgSw%2BgVIboQzEwLyYg&X-Amz-Signature=dfc849f44ca31ff4643ca7f3d588a0be0bf87724aab253ddf622b8d18fcbccf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7SIZZZH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBxrySMgWNJ4NEOY2xn%2BpYNrdZdb3aT7rZYxItsRXp4SAiEAu0ROxpqoxfxgV9vsw1lYdSSxuGNkSTl%2FRIeUUtiRM4cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIdYdETOLJ%2BRaJeSTCrcA8X6nMX2Ida5jm6uXiq2vPSXF8xZWVeOYjdBEUStarvZIRKaIsGbG0jsNJAqdM5BchPNpyQ80Zetq5FQZytoFWg2Qsdw7nTNjdKkRMNz9aiGVTUc3ukQoVPJs%2BJsbYomAR2ntfhEVApdiQ82fo%2BkIO6mMZjUByODd839RHy3yqxZoseB5lQFFLCDs1Ou5YB1EDyonit4uNLzytO3%2F5Z%2FApdLITXETpSb2QOEyojPmLc4fHLGAQdMDFHkEZ4UUn4beKvCbrCUhUMta5ZsobMh787GKbVQSlwqVP6iyOmNLK1eMf%2Bee4QgDzduorOq3LbqLK0HxduAnmNCuNdDEvD2x9UlkBIoXU%2FTK2r9gaBLlEoVWlHCukSdyBknP02prqKyK2Iz19kfHTlicdkoThHaCZppYSxrcGfJM71H5gs3h%2FF1VtA9VSlazXI3MSRLUir4th2x5zbQu253cyVpqNsbFQB9EtvFR9dKeIjmdE2ZakHMh13CT4Dpz2fTeUmKfMJMAaADlCzaU90hKHXlWxQ8Z0jEp8Im79Y60oeWqDNtc1Vf%2F1I2FsmQGMGLqPJP%2BrOTyJTV2gPp0ONbS3x%2FSruYvfB4m%2FoJdy18730KCMNu%2BLmx%2BxPd9cOYOIvznesyMKuPiMQGOqUBD36SlDDleHxg6t7Zs5Z%2BRmTYRbQyxgtdRvC7tGAK2lhztnxW9JG%2F6gGm7qFH2IglEQ8uVy0cYVmbUeoV4qCmKo6MXIRQwXZbmzuupBnH9QQPpsOmLHOUer6oQE9%2FSCNZ21Gt56ieMmRjm10imirMacJFHj7hopO1ORBxqLyin%2FihDlnMYgcMAgHABkxaVTvegL1v6dFZ9ycgSw%2BgVIboQzEwLyYg&X-Amz-Signature=7dd3505fa3003108300bbe917bb569fa17dcecf556671e4e897379a7c88533c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7SIZZZH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBxrySMgWNJ4NEOY2xn%2BpYNrdZdb3aT7rZYxItsRXp4SAiEAu0ROxpqoxfxgV9vsw1lYdSSxuGNkSTl%2FRIeUUtiRM4cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIdYdETOLJ%2BRaJeSTCrcA8X6nMX2Ida5jm6uXiq2vPSXF8xZWVeOYjdBEUStarvZIRKaIsGbG0jsNJAqdM5BchPNpyQ80Zetq5FQZytoFWg2Qsdw7nTNjdKkRMNz9aiGVTUc3ukQoVPJs%2BJsbYomAR2ntfhEVApdiQ82fo%2BkIO6mMZjUByODd839RHy3yqxZoseB5lQFFLCDs1Ou5YB1EDyonit4uNLzytO3%2F5Z%2FApdLITXETpSb2QOEyojPmLc4fHLGAQdMDFHkEZ4UUn4beKvCbrCUhUMta5ZsobMh787GKbVQSlwqVP6iyOmNLK1eMf%2Bee4QgDzduorOq3LbqLK0HxduAnmNCuNdDEvD2x9UlkBIoXU%2FTK2r9gaBLlEoVWlHCukSdyBknP02prqKyK2Iz19kfHTlicdkoThHaCZppYSxrcGfJM71H5gs3h%2FF1VtA9VSlazXI3MSRLUir4th2x5zbQu253cyVpqNsbFQB9EtvFR9dKeIjmdE2ZakHMh13CT4Dpz2fTeUmKfMJMAaADlCzaU90hKHXlWxQ8Z0jEp8Im79Y60oeWqDNtc1Vf%2F1I2FsmQGMGLqPJP%2BrOTyJTV2gPp0ONbS3x%2FSruYvfB4m%2FoJdy18730KCMNu%2BLmx%2BxPd9cOYOIvznesyMKuPiMQGOqUBD36SlDDleHxg6t7Zs5Z%2BRmTYRbQyxgtdRvC7tGAK2lhztnxW9JG%2F6gGm7qFH2IglEQ8uVy0cYVmbUeoV4qCmKo6MXIRQwXZbmzuupBnH9QQPpsOmLHOUer6oQE9%2FSCNZ21Gt56ieMmRjm10imirMacJFHj7hopO1ORBxqLyin%2FihDlnMYgcMAgHABkxaVTvegL1v6dFZ9ycgSw%2BgVIboQzEwLyYg&X-Amz-Signature=65ae1db4d09ab0f7b2a22588081f7ec00f882d239b303021546b0855f329664d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
