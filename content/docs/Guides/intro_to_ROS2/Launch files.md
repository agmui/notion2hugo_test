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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKSTCLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyEed6qNcw7yb990umeybyV6KVfA1nytJyvKmgmI%2B7sAiEA9BSGWq4420G56az%2BwZciwcvCdNK8L6081CqG1o2Lr%2FcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhsl4z%2FWS0ZlZfr1SrcA06tQbReyi505ow6KiUjXS9aoHrEo7uyg25n6JDz%2BrGJa%2FZfKYZJf5KXrbsHskBIrmUlVCyHrHHnA4sWlWJsx8Gcyvc58tI8lby6yGKipCAiVD%2FsIIUoA%2FwVNrCf%2BdVjaK63EkPYEbVm6r1lnJtsrtzjFj8sN%2BipWsfbE%2FTQC3M8I9oRvXs%2Fkk4VREuVjSoiVgKKfGuK8TStZeSfIFUyyLLKkqWPye1SBx7%2B4oWrBZssp0GCto9UmSRQwrOV3mayi0Wyu2hb1%2FjqLgm2nQg5ayv4%2BZGVoMKp59ZJS11vufyBJr0UomHvW7N%2B8H95NQcZYXpeIXW3fRJ4eT5DJWEnqbA6ApjpNJZHWRfGOXOlClekyVnZb50R802VhovPZ3YfFCedCP3Fv4IuQ6Z0Y2TbW0XcGmxqPUevAAU3zhEevi%2BLjlGqPJaO%2FR76YzFgvBYDZ51t6yJcsYsIqhD%2F8f%2FigvEAYM%2BU9jAiSUmErlkJea0JihW7VjReWN0PSOPJ6YbJGmvezVGgeY9FVModSvafN0xi3Y1GrgyR6anVDxh%2BrCohuZznYPHL8enzz0MfjtLC5%2Bne0e%2FsaVYC95pwCsLf6FRJPlKfp6LCa%2Bb0b7%2BRhMOt1QEtToxdRQkkvNN6MMPF7MMGOqUBjKCPujhnpIq1uJ3bnLBG0iEEMmExcx0OUBjp2J9Vtmc0DFSdik1eu9h7NmLrebB%2BcNRxpp7xkFZt4QreWcKCJwE%2Fy4OxaXP%2BpHmT8d3l7b1W3Qw%2BcBD8YyQYhzcIc5O6aF5Vf%2Fy7OqitURqmScPghRKTacXwP3%2FxQr5LP%2B2ODFNgAe6tzM3lsPTCg6TR07xyW5ZdftUtg0RshaK4oh1rKDdPZ%2B6k&X-Amz-Signature=c53cf0da170773452a511ea831118e28b339e970e7e0a812453fd9fcdfdd5908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKSTCLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyEed6qNcw7yb990umeybyV6KVfA1nytJyvKmgmI%2B7sAiEA9BSGWq4420G56az%2BwZciwcvCdNK8L6081CqG1o2Lr%2FcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhsl4z%2FWS0ZlZfr1SrcA06tQbReyi505ow6KiUjXS9aoHrEo7uyg25n6JDz%2BrGJa%2FZfKYZJf5KXrbsHskBIrmUlVCyHrHHnA4sWlWJsx8Gcyvc58tI8lby6yGKipCAiVD%2FsIIUoA%2FwVNrCf%2BdVjaK63EkPYEbVm6r1lnJtsrtzjFj8sN%2BipWsfbE%2FTQC3M8I9oRvXs%2Fkk4VREuVjSoiVgKKfGuK8TStZeSfIFUyyLLKkqWPye1SBx7%2B4oWrBZssp0GCto9UmSRQwrOV3mayi0Wyu2hb1%2FjqLgm2nQg5ayv4%2BZGVoMKp59ZJS11vufyBJr0UomHvW7N%2B8H95NQcZYXpeIXW3fRJ4eT5DJWEnqbA6ApjpNJZHWRfGOXOlClekyVnZb50R802VhovPZ3YfFCedCP3Fv4IuQ6Z0Y2TbW0XcGmxqPUevAAU3zhEevi%2BLjlGqPJaO%2FR76YzFgvBYDZ51t6yJcsYsIqhD%2F8f%2FigvEAYM%2BU9jAiSUmErlkJea0JihW7VjReWN0PSOPJ6YbJGmvezVGgeY9FVModSvafN0xi3Y1GrgyR6anVDxh%2BrCohuZznYPHL8enzz0MfjtLC5%2Bne0e%2FsaVYC95pwCsLf6FRJPlKfp6LCa%2Bb0b7%2BRhMOt1QEtToxdRQkkvNN6MMPF7MMGOqUBjKCPujhnpIq1uJ3bnLBG0iEEMmExcx0OUBjp2J9Vtmc0DFSdik1eu9h7NmLrebB%2BcNRxpp7xkFZt4QreWcKCJwE%2Fy4OxaXP%2BpHmT8d3l7b1W3Qw%2BcBD8YyQYhzcIc5O6aF5Vf%2Fy7OqitURqmScPghRKTacXwP3%2FxQr5LP%2B2ODFNgAe6tzM3lsPTCg6TR07xyW5ZdftUtg0RshaK4oh1rKDdPZ%2B6k&X-Amz-Signature=f975d6135b92500113502c62d1e662aca9d0363191bb8f46eda95a951e09d356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKSTCLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyEed6qNcw7yb990umeybyV6KVfA1nytJyvKmgmI%2B7sAiEA9BSGWq4420G56az%2BwZciwcvCdNK8L6081CqG1o2Lr%2FcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhsl4z%2FWS0ZlZfr1SrcA06tQbReyi505ow6KiUjXS9aoHrEo7uyg25n6JDz%2BrGJa%2FZfKYZJf5KXrbsHskBIrmUlVCyHrHHnA4sWlWJsx8Gcyvc58tI8lby6yGKipCAiVD%2FsIIUoA%2FwVNrCf%2BdVjaK63EkPYEbVm6r1lnJtsrtzjFj8sN%2BipWsfbE%2FTQC3M8I9oRvXs%2Fkk4VREuVjSoiVgKKfGuK8TStZeSfIFUyyLLKkqWPye1SBx7%2B4oWrBZssp0GCto9UmSRQwrOV3mayi0Wyu2hb1%2FjqLgm2nQg5ayv4%2BZGVoMKp59ZJS11vufyBJr0UomHvW7N%2B8H95NQcZYXpeIXW3fRJ4eT5DJWEnqbA6ApjpNJZHWRfGOXOlClekyVnZb50R802VhovPZ3YfFCedCP3Fv4IuQ6Z0Y2TbW0XcGmxqPUevAAU3zhEevi%2BLjlGqPJaO%2FR76YzFgvBYDZ51t6yJcsYsIqhD%2F8f%2FigvEAYM%2BU9jAiSUmErlkJea0JihW7VjReWN0PSOPJ6YbJGmvezVGgeY9FVModSvafN0xi3Y1GrgyR6anVDxh%2BrCohuZznYPHL8enzz0MfjtLC5%2Bne0e%2FsaVYC95pwCsLf6FRJPlKfp6LCa%2Bb0b7%2BRhMOt1QEtToxdRQkkvNN6MMPF7MMGOqUBjKCPujhnpIq1uJ3bnLBG0iEEMmExcx0OUBjp2J9Vtmc0DFSdik1eu9h7NmLrebB%2BcNRxpp7xkFZt4QreWcKCJwE%2Fy4OxaXP%2BpHmT8d3l7b1W3Qw%2BcBD8YyQYhzcIc5O6aF5Vf%2Fy7OqitURqmScPghRKTacXwP3%2FxQr5LP%2B2ODFNgAe6tzM3lsPTCg6TR07xyW5ZdftUtg0RshaK4oh1rKDdPZ%2B6k&X-Amz-Signature=f60ad41abb39393697b485e3346a1c0e58ad4c373ecc561ce8ccdff6c7c41fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
