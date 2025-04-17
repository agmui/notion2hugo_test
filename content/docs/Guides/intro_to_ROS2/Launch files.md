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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SMYOCB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuYElntWq6sBhlmGCPLAG%2Fc8BvrN3xXDSoMMEES0rPgIgNjp9DRESj3trMiYOFapo7txlEDy3xDyIbZFWEa3EL9Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIhQlfYzIOs3PXr5IircA8bkvmJelF4HdCejVXx3z4aMPINQpdFA0b0tg6YqcDpzWFtEfPAgcbk4Gl0GxsJ%2BsOExGZWcBU6qUl5%2BrNTwbJhkTr5LIot65P8QSuU9vq7UO%2FEw7ehNpxH9OU1SptnIIuHkCNnEg2LzzwZTDEH7ekB2gTJSImvae1AciEGwruSEBPu0bphZJRCQGWU%2BW8tJs3Cm1L%2B%2BEHJrR7JG81keO%2BV%2FR5J555tyGExQpes4nU2TAr72ESR6Hk981GG7Kav28xP2BJZXTH2oNtCMSCae2qIoY%2BOltLTGa11XcOSx%2BhzmOJ5KHRBLJIZxyvifelrHU1esY8Mt8Co%2FLUiutmmOBYs%2FwEYNjZF7yNZSvAkU8G%2B6xy%2BCutwprlAT%2FCQjOppVFrjq%2BQKqx8XtdFY92ST0vdac2hMsUzTN%2Bgbo7pC%2FCPPmNx3DJI9sf6R5396ZvVQxejZGO%2FPn2MaL9A4o0kuGycNHpeL5mjKaV5ea53CHhgUEaO0wzwukcLXEa5KxZLwWEqWdjUJMnS8XnURVoEBT6VZiPrJkN6xHES5gugbjbsHLTbj8rqzUb5LWlgVxNQyKGMgx1IV5fqmnxz1V4cvTtbqskrap3NxwzPJL6nbQ048%2BEQkB5ZVUIPEnHW6NMODHg8AGOqUB%2Fjf1T%2FCnqPsxCfZ9xFu1hDCZp2DpaX8uC4AFHqhlEPMNSRcNbZ1zKrH%2FySKj7%2FLb2akkzYtT1mzwPmwsYjumnr%2B4y0rXWLE1SvoocUxVyyM78RxWkbP7Nj5wTGTsJWRhhjbG0zoh%2BYbG5sBlX13EPwucDcuZ6mkmBJl%2FuZfe%2FHdas%2Fc8n4cTuGw%2FOgHMkIwHsirtd4rhQE6tXA4GpMtdmVuJfbrx&X-Amz-Signature=ed88a9e24feb06ac938f4cded6fbbd86a695f198160cc4551f8cf417308c4ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SMYOCB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuYElntWq6sBhlmGCPLAG%2Fc8BvrN3xXDSoMMEES0rPgIgNjp9DRESj3trMiYOFapo7txlEDy3xDyIbZFWEa3EL9Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIhQlfYzIOs3PXr5IircA8bkvmJelF4HdCejVXx3z4aMPINQpdFA0b0tg6YqcDpzWFtEfPAgcbk4Gl0GxsJ%2BsOExGZWcBU6qUl5%2BrNTwbJhkTr5LIot65P8QSuU9vq7UO%2FEw7ehNpxH9OU1SptnIIuHkCNnEg2LzzwZTDEH7ekB2gTJSImvae1AciEGwruSEBPu0bphZJRCQGWU%2BW8tJs3Cm1L%2B%2BEHJrR7JG81keO%2BV%2FR5J555tyGExQpes4nU2TAr72ESR6Hk981GG7Kav28xP2BJZXTH2oNtCMSCae2qIoY%2BOltLTGa11XcOSx%2BhzmOJ5KHRBLJIZxyvifelrHU1esY8Mt8Co%2FLUiutmmOBYs%2FwEYNjZF7yNZSvAkU8G%2B6xy%2BCutwprlAT%2FCQjOppVFrjq%2BQKqx8XtdFY92ST0vdac2hMsUzTN%2Bgbo7pC%2FCPPmNx3DJI9sf6R5396ZvVQxejZGO%2FPn2MaL9A4o0kuGycNHpeL5mjKaV5ea53CHhgUEaO0wzwukcLXEa5KxZLwWEqWdjUJMnS8XnURVoEBT6VZiPrJkN6xHES5gugbjbsHLTbj8rqzUb5LWlgVxNQyKGMgx1IV5fqmnxz1V4cvTtbqskrap3NxwzPJL6nbQ048%2BEQkB5ZVUIPEnHW6NMODHg8AGOqUB%2Fjf1T%2FCnqPsxCfZ9xFu1hDCZp2DpaX8uC4AFHqhlEPMNSRcNbZ1zKrH%2FySKj7%2FLb2akkzYtT1mzwPmwsYjumnr%2B4y0rXWLE1SvoocUxVyyM78RxWkbP7Nj5wTGTsJWRhhjbG0zoh%2BYbG5sBlX13EPwucDcuZ6mkmBJl%2FuZfe%2FHdas%2Fc8n4cTuGw%2FOgHMkIwHsirtd4rhQE6tXA4GpMtdmVuJfbrx&X-Amz-Signature=6593d8b4243ac78b15b83d7d75c748ea33300f86fddf7b03be53da7423f6b33f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SMYOCB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuYElntWq6sBhlmGCPLAG%2Fc8BvrN3xXDSoMMEES0rPgIgNjp9DRESj3trMiYOFapo7txlEDy3xDyIbZFWEa3EL9Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIhQlfYzIOs3PXr5IircA8bkvmJelF4HdCejVXx3z4aMPINQpdFA0b0tg6YqcDpzWFtEfPAgcbk4Gl0GxsJ%2BsOExGZWcBU6qUl5%2BrNTwbJhkTr5LIot65P8QSuU9vq7UO%2FEw7ehNpxH9OU1SptnIIuHkCNnEg2LzzwZTDEH7ekB2gTJSImvae1AciEGwruSEBPu0bphZJRCQGWU%2BW8tJs3Cm1L%2B%2BEHJrR7JG81keO%2BV%2FR5J555tyGExQpes4nU2TAr72ESR6Hk981GG7Kav28xP2BJZXTH2oNtCMSCae2qIoY%2BOltLTGa11XcOSx%2BhzmOJ5KHRBLJIZxyvifelrHU1esY8Mt8Co%2FLUiutmmOBYs%2FwEYNjZF7yNZSvAkU8G%2B6xy%2BCutwprlAT%2FCQjOppVFrjq%2BQKqx8XtdFY92ST0vdac2hMsUzTN%2Bgbo7pC%2FCPPmNx3DJI9sf6R5396ZvVQxejZGO%2FPn2MaL9A4o0kuGycNHpeL5mjKaV5ea53CHhgUEaO0wzwukcLXEa5KxZLwWEqWdjUJMnS8XnURVoEBT6VZiPrJkN6xHES5gugbjbsHLTbj8rqzUb5LWlgVxNQyKGMgx1IV5fqmnxz1V4cvTtbqskrap3NxwzPJL6nbQ048%2BEQkB5ZVUIPEnHW6NMODHg8AGOqUB%2Fjf1T%2FCnqPsxCfZ9xFu1hDCZp2DpaX8uC4AFHqhlEPMNSRcNbZ1zKrH%2FySKj7%2FLb2akkzYtT1mzwPmwsYjumnr%2B4y0rXWLE1SvoocUxVyyM78RxWkbP7Nj5wTGTsJWRhhjbG0zoh%2BYbG5sBlX13EPwucDcuZ6mkmBJl%2FuZfe%2FHdas%2Fc8n4cTuGw%2FOgHMkIwHsirtd4rhQE6tXA4GpMtdmVuJfbrx&X-Amz-Signature=dd812892a956900c1aca2160899b23bdbef6ef9fda07a5449c678320b2de6974&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
