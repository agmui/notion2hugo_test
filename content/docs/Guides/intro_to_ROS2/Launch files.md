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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMAZEZZV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGj1zYwdRAbEPaQxfVt4Wa5GprrNqo2n%2Blkz1jGCmP2FAiAOMN61aQpmme7zFrMfQ28eU756uP%2BHtebNnDA%2BMd7opSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCZcIvkU5G8hGw8kKtwDHpRDeA%2BgEZAAoK0%2F62GBLaWIwgc4l3dzwm8jGT0ON8JBiL3XbwZtlf7icjaw%2BKspAiy6pEjYc2OogCxTcC%2FiKzPkzcN%2BFCs%2FP5iD%2FN4RaVkooW7x1OMcawPZ7xzTX9IGl7jnkFsJOVcwt%2B4Jg73L6LUr4HCdul1rMMRWdF49HZD%2FsTON3tYElhpik2cm%2FMYKEvaWseXTj5wO%2FaC3iRl9%2FAA9rkEU03tWT5s%2FR%2BFa5HsT%2B7q%2B8jEpXKZ8Wfxlgn2FqjRigfmvA4h0IRyLbEemLy4%2B1pGFzv5Q7Fe08j4lAqEasQIyJmR%2F8HBaqUIhMW0JEiL%2B3v46HrWlm1pREB%2BBxaq4SFXC2Xp33dAtVr%2BwivwYkdymjvl6kqkGUU5MLCHATNWQOsPTXIIjajAGC1eY9pu%2BmX%2FpO2yH3nkZ19p%2F8MX4Y3A%2B2oo1qCjf6pJAy2IOIJvkJke2%2BjjMTEfrmsCYHamp4%2FOfl2geNv7db%2B2RG%2BfK5%2Fol4xVEHFD7nVgR2suqhM2yesZOyapW%2FrKFobLB1qKpHjMT7%2BhM%2FR0kwBtUt%2F9E%2FH3AHjzXwP52j3VGFSxIwk1vHqWnPwnSfSJG93YYBPJzco68KsFCBXsONbmPEdTYg0Y7AgNrO9tT4kowlKGDwQY6pgHI4HOOxzDTTczKM4hFwiE9XnEa6LsEQ%2F8ZiEkmBrtFOmg%2F4QiJZDKUGpucqu3eyorRHCJyjVVeuOIeHjAkuvAv6%2B2jJ6lQuUbuMyy88P6hxE7WZnP9BcpxxWccbUW2zryciqeejgH6PY4nnH5DQ%2BLFiLmiowgt075jns%2BRNU14libROKU0WR20Nsq%2BhOxRIk41Sgh%2F33Rsj0BzDDpwuO4ciq9f395D&X-Amz-Signature=91ce64b496f21d1cf22551362eda07abee5cec38ee75d929c9ce050e9bace75d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMAZEZZV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGj1zYwdRAbEPaQxfVt4Wa5GprrNqo2n%2Blkz1jGCmP2FAiAOMN61aQpmme7zFrMfQ28eU756uP%2BHtebNnDA%2BMd7opSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCZcIvkU5G8hGw8kKtwDHpRDeA%2BgEZAAoK0%2F62GBLaWIwgc4l3dzwm8jGT0ON8JBiL3XbwZtlf7icjaw%2BKspAiy6pEjYc2OogCxTcC%2FiKzPkzcN%2BFCs%2FP5iD%2FN4RaVkooW7x1OMcawPZ7xzTX9IGl7jnkFsJOVcwt%2B4Jg73L6LUr4HCdul1rMMRWdF49HZD%2FsTON3tYElhpik2cm%2FMYKEvaWseXTj5wO%2FaC3iRl9%2FAA9rkEU03tWT5s%2FR%2BFa5HsT%2B7q%2B8jEpXKZ8Wfxlgn2FqjRigfmvA4h0IRyLbEemLy4%2B1pGFzv5Q7Fe08j4lAqEasQIyJmR%2F8HBaqUIhMW0JEiL%2B3v46HrWlm1pREB%2BBxaq4SFXC2Xp33dAtVr%2BwivwYkdymjvl6kqkGUU5MLCHATNWQOsPTXIIjajAGC1eY9pu%2BmX%2FpO2yH3nkZ19p%2F8MX4Y3A%2B2oo1qCjf6pJAy2IOIJvkJke2%2BjjMTEfrmsCYHamp4%2FOfl2geNv7db%2B2RG%2BfK5%2Fol4xVEHFD7nVgR2suqhM2yesZOyapW%2FrKFobLB1qKpHjMT7%2BhM%2FR0kwBtUt%2F9E%2FH3AHjzXwP52j3VGFSxIwk1vHqWnPwnSfSJG93YYBPJzco68KsFCBXsONbmPEdTYg0Y7AgNrO9tT4kowlKGDwQY6pgHI4HOOxzDTTczKM4hFwiE9XnEa6LsEQ%2F8ZiEkmBrtFOmg%2F4QiJZDKUGpucqu3eyorRHCJyjVVeuOIeHjAkuvAv6%2B2jJ6lQuUbuMyy88P6hxE7WZnP9BcpxxWccbUW2zryciqeejgH6PY4nnH5DQ%2BLFiLmiowgt075jns%2BRNU14libROKU0WR20Nsq%2BhOxRIk41Sgh%2F33Rsj0BzDDpwuO4ciq9f395D&X-Amz-Signature=07ff1bfe37eef58f006a4fb21032bf358a1660634c5eee42cddbcf7f8328930b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMAZEZZV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGj1zYwdRAbEPaQxfVt4Wa5GprrNqo2n%2Blkz1jGCmP2FAiAOMN61aQpmme7zFrMfQ28eU756uP%2BHtebNnDA%2BMd7opSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCZcIvkU5G8hGw8kKtwDHpRDeA%2BgEZAAoK0%2F62GBLaWIwgc4l3dzwm8jGT0ON8JBiL3XbwZtlf7icjaw%2BKspAiy6pEjYc2OogCxTcC%2FiKzPkzcN%2BFCs%2FP5iD%2FN4RaVkooW7x1OMcawPZ7xzTX9IGl7jnkFsJOVcwt%2B4Jg73L6LUr4HCdul1rMMRWdF49HZD%2FsTON3tYElhpik2cm%2FMYKEvaWseXTj5wO%2FaC3iRl9%2FAA9rkEU03tWT5s%2FR%2BFa5HsT%2B7q%2B8jEpXKZ8Wfxlgn2FqjRigfmvA4h0IRyLbEemLy4%2B1pGFzv5Q7Fe08j4lAqEasQIyJmR%2F8HBaqUIhMW0JEiL%2B3v46HrWlm1pREB%2BBxaq4SFXC2Xp33dAtVr%2BwivwYkdymjvl6kqkGUU5MLCHATNWQOsPTXIIjajAGC1eY9pu%2BmX%2FpO2yH3nkZ19p%2F8MX4Y3A%2B2oo1qCjf6pJAy2IOIJvkJke2%2BjjMTEfrmsCYHamp4%2FOfl2geNv7db%2B2RG%2BfK5%2Fol4xVEHFD7nVgR2suqhM2yesZOyapW%2FrKFobLB1qKpHjMT7%2BhM%2FR0kwBtUt%2F9E%2FH3AHjzXwP52j3VGFSxIwk1vHqWnPwnSfSJG93YYBPJzco68KsFCBXsONbmPEdTYg0Y7AgNrO9tT4kowlKGDwQY6pgHI4HOOxzDTTczKM4hFwiE9XnEa6LsEQ%2F8ZiEkmBrtFOmg%2F4QiJZDKUGpucqu3eyorRHCJyjVVeuOIeHjAkuvAv6%2B2jJ6lQuUbuMyy88P6hxE7WZnP9BcpxxWccbUW2zryciqeejgH6PY4nnH5DQ%2BLFiLmiowgt075jns%2BRNU14libROKU0WR20Nsq%2BhOxRIk41Sgh%2F33Rsj0BzDDpwuO4ciq9f395D&X-Amz-Signature=ffdae0c62d1581ed7c081cb328cce728fd232b7bd5ee033068aac56319fd3f25&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
