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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MAEFX66%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM70XrmdY%2B6%2FWiKd2NvJU%2BLc1JMBtEDtLLgtGxzvE79gIgdVccDDLS1uEwtvxifSKcJ1oYuko0tvaQfFF8Qx4nOFQq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDCrdp2dgr5rue5RB3ircA1g19jGiYmjHClS1t81HJO9YQkEROkENGxArhOGEA7stU984bm8NQ2nQl3M3UtYEiTAwfAlvjG5zOEPLBg%2Ftee4hp%2B4lB4AjMSz1bY%2FChwEz%2B32DAFR%2BsS1HGaCpmqw0knnQ82gTYBAxulMcqmO73o%2FCJwETnHXUPWSfRVQWCB8XtTKlrViyHROfAJOW%2BiuWIFOte9lpBou81KAp25gpJYNPmLENPcO5xzzo8QlrLaoAMJ1dpu5jSPMKArqsmhlyvxj0mciqADAeMtv4qNzEmfvNQpgOOpkQpSC%2BZrss8I1y5%2BZro97rzjzCVoj7cHQmegtgXysoRo56BxSopFx1dxURpt7tdToNwCfUNMKzRsrgNewznnBCPwH%2FZWVhosMi6qiqcTdxpezwGMHuZ1DaEyPMoa%2BAiOOdJnr8PrChImdL%2B5QQv4sJm7KXRdFaUa9n%2FGy3oDF4hv91KUQonGZeJ7GEnI9sQh6IojYj9FwqHRXPhcksN9srMoFhpouDic7fGf2k5s4OC12qism6gSYR%2FdR4OfmJQuJSK3RD6wL39z0TzEPuRVJEfRd3f9fFXt2sH4N8ffrrv5ew7H4pM09S%2FDSfL%2BdRTHxpbA0nsrvbhP3WfJhCi4T6nBuczSfYMLLxucAGOqUBImp4ogzDR6XnZTPp7AwZAYWXdgsDoFQMdiMMnqx1IAvoWbrnf9h1ooRMCy5ot8BNsSAYmARO%2F9K1iuKGHQFiGFKAVowHX6%2FN%2FqFohwqRyQgxqU9vjY4aMVs0%2FhiktGebu29EdbcMNJKlwr%2FaPl%2BpOR%2B6WbK83y4aKAWDgDiBdXaagMdkp0iQRonBDAZmYqG07hrCAC1VGin79d0lPZWEbl%2F6Kual&X-Amz-Signature=b8e2d1339502391c7c9cf93ef45f48bc9992a00601fcbeea03a59aa3fc797159&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MAEFX66%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM70XrmdY%2B6%2FWiKd2NvJU%2BLc1JMBtEDtLLgtGxzvE79gIgdVccDDLS1uEwtvxifSKcJ1oYuko0tvaQfFF8Qx4nOFQq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDCrdp2dgr5rue5RB3ircA1g19jGiYmjHClS1t81HJO9YQkEROkENGxArhOGEA7stU984bm8NQ2nQl3M3UtYEiTAwfAlvjG5zOEPLBg%2Ftee4hp%2B4lB4AjMSz1bY%2FChwEz%2B32DAFR%2BsS1HGaCpmqw0knnQ82gTYBAxulMcqmO73o%2FCJwETnHXUPWSfRVQWCB8XtTKlrViyHROfAJOW%2BiuWIFOte9lpBou81KAp25gpJYNPmLENPcO5xzzo8QlrLaoAMJ1dpu5jSPMKArqsmhlyvxj0mciqADAeMtv4qNzEmfvNQpgOOpkQpSC%2BZrss8I1y5%2BZro97rzjzCVoj7cHQmegtgXysoRo56BxSopFx1dxURpt7tdToNwCfUNMKzRsrgNewznnBCPwH%2FZWVhosMi6qiqcTdxpezwGMHuZ1DaEyPMoa%2BAiOOdJnr8PrChImdL%2B5QQv4sJm7KXRdFaUa9n%2FGy3oDF4hv91KUQonGZeJ7GEnI9sQh6IojYj9FwqHRXPhcksN9srMoFhpouDic7fGf2k5s4OC12qism6gSYR%2FdR4OfmJQuJSK3RD6wL39z0TzEPuRVJEfRd3f9fFXt2sH4N8ffrrv5ew7H4pM09S%2FDSfL%2BdRTHxpbA0nsrvbhP3WfJhCi4T6nBuczSfYMLLxucAGOqUBImp4ogzDR6XnZTPp7AwZAYWXdgsDoFQMdiMMnqx1IAvoWbrnf9h1ooRMCy5ot8BNsSAYmARO%2F9K1iuKGHQFiGFKAVowHX6%2FN%2FqFohwqRyQgxqU9vjY4aMVs0%2FhiktGebu29EdbcMNJKlwr%2FaPl%2BpOR%2B6WbK83y4aKAWDgDiBdXaagMdkp0iQRonBDAZmYqG07hrCAC1VGin79d0lPZWEbl%2F6Kual&X-Amz-Signature=238de90fbf9280f873c8e240801c3baf3ce4f257e8474bcdad530a24042ffaff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MAEFX66%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM70XrmdY%2B6%2FWiKd2NvJU%2BLc1JMBtEDtLLgtGxzvE79gIgdVccDDLS1uEwtvxifSKcJ1oYuko0tvaQfFF8Qx4nOFQq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDCrdp2dgr5rue5RB3ircA1g19jGiYmjHClS1t81HJO9YQkEROkENGxArhOGEA7stU984bm8NQ2nQl3M3UtYEiTAwfAlvjG5zOEPLBg%2Ftee4hp%2B4lB4AjMSz1bY%2FChwEz%2B32DAFR%2BsS1HGaCpmqw0knnQ82gTYBAxulMcqmO73o%2FCJwETnHXUPWSfRVQWCB8XtTKlrViyHROfAJOW%2BiuWIFOte9lpBou81KAp25gpJYNPmLENPcO5xzzo8QlrLaoAMJ1dpu5jSPMKArqsmhlyvxj0mciqADAeMtv4qNzEmfvNQpgOOpkQpSC%2BZrss8I1y5%2BZro97rzjzCVoj7cHQmegtgXysoRo56BxSopFx1dxURpt7tdToNwCfUNMKzRsrgNewznnBCPwH%2FZWVhosMi6qiqcTdxpezwGMHuZ1DaEyPMoa%2BAiOOdJnr8PrChImdL%2B5QQv4sJm7KXRdFaUa9n%2FGy3oDF4hv91KUQonGZeJ7GEnI9sQh6IojYj9FwqHRXPhcksN9srMoFhpouDic7fGf2k5s4OC12qism6gSYR%2FdR4OfmJQuJSK3RD6wL39z0TzEPuRVJEfRd3f9fFXt2sH4N8ffrrv5ew7H4pM09S%2FDSfL%2BdRTHxpbA0nsrvbhP3WfJhCi4T6nBuczSfYMLLxucAGOqUBImp4ogzDR6XnZTPp7AwZAYWXdgsDoFQMdiMMnqx1IAvoWbrnf9h1ooRMCy5ot8BNsSAYmARO%2F9K1iuKGHQFiGFKAVowHX6%2FN%2FqFohwqRyQgxqU9vjY4aMVs0%2FhiktGebu29EdbcMNJKlwr%2FaPl%2BpOR%2B6WbK83y4aKAWDgDiBdXaagMdkp0iQRonBDAZmYqG07hrCAC1VGin79d0lPZWEbl%2F6Kual&X-Amz-Signature=f8df24809ae1d9dd4636df19f2e32aaf6f49f3c829b5930ae07fa8826ac98f61&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
