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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHXJMUT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCiNs5k2Qf%2BzLptiRGQQMqScCxkDYVV%2BZi2moPFF%2BlkywIhAJOIv5JQHIXJPV8SND2%2Fa6FQwnXMy6Ley%2FrEzjEDH0V5KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWYSRpjSUadVgQ0joq3AMVom1JcOyJoMtpb6IvxIFMwyj7ilZ9O%2B2sVLRL%2FDBCK7sYUFziFJMArT0bJfdoPyg4%2BQPI%2Brctnlae6YSFsYtoqgI6vUYeg0%2BFod%2FPefp7R47%2Bl33UF8oRmzCkwEVoEoMwpCIkfv1TY%2FG1DFfangAeuhdaDInvp9%2BUMoOLBj%2FXGtTBs7648gIUuw2EkqMwwWpjaPWLmzVkQGA0%2Bv8IDQkrxXndnoH%2Fa%2FiDKJ1Yzk4FKsPqHM6nSkernPiENyOG5rlahyhn2GpUgeuM%2FQXv8Md0JBYMPHcSwvYvYLX1VTZGQOq4nJwg8gkoy%2F2xZeMmB8dlEtqt4U6InJaC3KjZlAJDbgdf10CRRg6gaEs3bNl0EmDt9OUq9PIUr2SA%2F7ffsnbfz4wpKXl4w9ULv7tzQCAe3m53nILl5z1KyW9ILpMongnnhoNaIIJHggThscrCNNpkMa9xNuV4bfhB70z5hYt40VA04HRspehWDUYpk3%2BoEqvIIY365ptmLzUceUCzW4lOP%2ByuXeYPCMj8jU1wCsit6D153NESfulb7BOH7VcIAFj5bAt5OyHQlgJrY3dNydoTcprpY69zGJecnIBJZF4eIVKefWI69TsbKcpjnv07Rj701jwtf%2Btk1gcBSzCYlYy%2BBjqkAfzRARsT%2B8152KSgB1EqYM%2F0HL5iMWPq7fcM5tdyqR6EV1GtBvbtNEJ2ra%2BN3G7quoHad2QlNXlAWuYiakDlXka0fDtZ8%2F773ZbaEL%2FRVG%2BQ2Qsh9d6sxVu0pI4vb6qGbIy2exYjnz89DUW%2FI2uhzheFEMAH3dp72h41rEZ3QzF9GFOIy8miMjyBFVjz17qTyaYg8puI72xPShdrR10yz1jGmZeO&X-Amz-Signature=bd498ed396374cd9b91ccfd450a107636345570ec00602c63bca396ac02edc4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHXJMUT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCiNs5k2Qf%2BzLptiRGQQMqScCxkDYVV%2BZi2moPFF%2BlkywIhAJOIv5JQHIXJPV8SND2%2Fa6FQwnXMy6Ley%2FrEzjEDH0V5KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWYSRpjSUadVgQ0joq3AMVom1JcOyJoMtpb6IvxIFMwyj7ilZ9O%2B2sVLRL%2FDBCK7sYUFziFJMArT0bJfdoPyg4%2BQPI%2Brctnlae6YSFsYtoqgI6vUYeg0%2BFod%2FPefp7R47%2Bl33UF8oRmzCkwEVoEoMwpCIkfv1TY%2FG1DFfangAeuhdaDInvp9%2BUMoOLBj%2FXGtTBs7648gIUuw2EkqMwwWpjaPWLmzVkQGA0%2Bv8IDQkrxXndnoH%2Fa%2FiDKJ1Yzk4FKsPqHM6nSkernPiENyOG5rlahyhn2GpUgeuM%2FQXv8Md0JBYMPHcSwvYvYLX1VTZGQOq4nJwg8gkoy%2F2xZeMmB8dlEtqt4U6InJaC3KjZlAJDbgdf10CRRg6gaEs3bNl0EmDt9OUq9PIUr2SA%2F7ffsnbfz4wpKXl4w9ULv7tzQCAe3m53nILl5z1KyW9ILpMongnnhoNaIIJHggThscrCNNpkMa9xNuV4bfhB70z5hYt40VA04HRspehWDUYpk3%2BoEqvIIY365ptmLzUceUCzW4lOP%2ByuXeYPCMj8jU1wCsit6D153NESfulb7BOH7VcIAFj5bAt5OyHQlgJrY3dNydoTcprpY69zGJecnIBJZF4eIVKefWI69TsbKcpjnv07Rj701jwtf%2Btk1gcBSzCYlYy%2BBjqkAfzRARsT%2B8152KSgB1EqYM%2F0HL5iMWPq7fcM5tdyqR6EV1GtBvbtNEJ2ra%2BN3G7quoHad2QlNXlAWuYiakDlXka0fDtZ8%2F773ZbaEL%2FRVG%2BQ2Qsh9d6sxVu0pI4vb6qGbIy2exYjnz89DUW%2FI2uhzheFEMAH3dp72h41rEZ3QzF9GFOIy8miMjyBFVjz17qTyaYg8puI72xPShdrR10yz1jGmZeO&X-Amz-Signature=6dc2a595ff911129340bb0d44b5d040a1d4d7c9a4e4427438c040105112d6624&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHXJMUT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCiNs5k2Qf%2BzLptiRGQQMqScCxkDYVV%2BZi2moPFF%2BlkywIhAJOIv5JQHIXJPV8SND2%2Fa6FQwnXMy6Ley%2FrEzjEDH0V5KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWYSRpjSUadVgQ0joq3AMVom1JcOyJoMtpb6IvxIFMwyj7ilZ9O%2B2sVLRL%2FDBCK7sYUFziFJMArT0bJfdoPyg4%2BQPI%2Brctnlae6YSFsYtoqgI6vUYeg0%2BFod%2FPefp7R47%2Bl33UF8oRmzCkwEVoEoMwpCIkfv1TY%2FG1DFfangAeuhdaDInvp9%2BUMoOLBj%2FXGtTBs7648gIUuw2EkqMwwWpjaPWLmzVkQGA0%2Bv8IDQkrxXndnoH%2Fa%2FiDKJ1Yzk4FKsPqHM6nSkernPiENyOG5rlahyhn2GpUgeuM%2FQXv8Md0JBYMPHcSwvYvYLX1VTZGQOq4nJwg8gkoy%2F2xZeMmB8dlEtqt4U6InJaC3KjZlAJDbgdf10CRRg6gaEs3bNl0EmDt9OUq9PIUr2SA%2F7ffsnbfz4wpKXl4w9ULv7tzQCAe3m53nILl5z1KyW9ILpMongnnhoNaIIJHggThscrCNNpkMa9xNuV4bfhB70z5hYt40VA04HRspehWDUYpk3%2BoEqvIIY365ptmLzUceUCzW4lOP%2ByuXeYPCMj8jU1wCsit6D153NESfulb7BOH7VcIAFj5bAt5OyHQlgJrY3dNydoTcprpY69zGJecnIBJZF4eIVKefWI69TsbKcpjnv07Rj701jwtf%2Btk1gcBSzCYlYy%2BBjqkAfzRARsT%2B8152KSgB1EqYM%2F0HL5iMWPq7fcM5tdyqR6EV1GtBvbtNEJ2ra%2BN3G7quoHad2QlNXlAWuYiakDlXka0fDtZ8%2F773ZbaEL%2FRVG%2BQ2Qsh9d6sxVu0pI4vb6qGbIy2exYjnz89DUW%2FI2uhzheFEMAH3dp72h41rEZ3QzF9GFOIy8miMjyBFVjz17qTyaYg8puI72xPShdrR10yz1jGmZeO&X-Amz-Signature=580832e46067cee3fca9fc2b2e914c25e9a90a31fde681394c0a53b76c965511&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
