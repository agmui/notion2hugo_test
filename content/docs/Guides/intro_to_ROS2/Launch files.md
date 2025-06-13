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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU6MMQ3Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHRBUbStA6vmsoSckIktc1%2BMT5kSVoBa0hExYUavGi7hAiEAxBXVLn%2F9rrv9pMENJ%2BS7YK%2BsJk1dvQE6dAAsEDJQZlIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGxERBXDP4oA8XAACircA4sJ%2BblDi3k9cAvC5CmUjDnbZ%2BCndDwow53pNNhVePQoJ6qZlSP84YKMq6lcwRr9pwxqmB6GmZ5oVInnC63%2BqjwJbRaIO36jCL9hzAo7N09YVF%2FqkcC0GxDR93YaOZGsa97Z1E8%2BRQjXC4845Z%2FoJM6kCmc7MjYUskWsxTPGG0T1oO%2Fr0TxokIcFu5QVQXLUijREkafwDf44poBgdACy2UfAiZYvoZIYabC3gT4g1MHpd0dmofeXjhfTB9Y5uWYAsf%2BdJOtwjBcBwClqjJgrgaFDl%2BHBNvEG%2FN9iDMJPChWqlYJbBRzvGMvtt%2BScWf2nKYeUmcGBpO3U29gKt7heO9WGcFRnHJ%2FiEAWHbrmKwanViQhH9q0qhkPCxN9%2Fmk8nPzQdY1NwUAK3YPP6qohps9IzAAq1g6zaXCtHAqbL5xLvo4L9%2BynDv%2Bs4XyVZxy%2F272gIlqs6S%2F44dDxpvhLGQkSAgY3LIFpgjOJqdJt6CxH%2BLEh8NZGolN%2BD1X9KMXwvu9Sy6vN%2Fwb16D6BZgfN4qkVFBxGNrXm9JEe3YfzFK6Y20%2Bmgg71rxjbxEq%2FdPKzcuvzbEtFQlvbrn0Ppxz0AF6zb%2BPQZBWiOnQpNf3BLTC84%2FkiDRmNg2gOroJxKMKCpsMIGOqUBPRp23ICH9r3G48srAQ4N2rAzgG1x8FDVJjpAj6yLdj3Gy%2B%2BFHzvYE4blLW5pSmGF3HiWHR%2FTzEqNLR9AOFMdF724DPv8fCNu6N2K46XNjOqx7tA%2B%2BzxwkAsJtW83BjVG6GAWseGYg5j9yoyC1bMVjLOdSmhzG0YOczlA8PikNXbG19TSCV1v%2BuHiqgvAAzrDKQcD%2B2tHru%2F1M9uuoAQxXGVc9Clh&X-Amz-Signature=bfc2349f1352c725486120fc8d4f25015834d008d1bd69197550213d750ff232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU6MMQ3Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHRBUbStA6vmsoSckIktc1%2BMT5kSVoBa0hExYUavGi7hAiEAxBXVLn%2F9rrv9pMENJ%2BS7YK%2BsJk1dvQE6dAAsEDJQZlIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGxERBXDP4oA8XAACircA4sJ%2BblDi3k9cAvC5CmUjDnbZ%2BCndDwow53pNNhVePQoJ6qZlSP84YKMq6lcwRr9pwxqmB6GmZ5oVInnC63%2BqjwJbRaIO36jCL9hzAo7N09YVF%2FqkcC0GxDR93YaOZGsa97Z1E8%2BRQjXC4845Z%2FoJM6kCmc7MjYUskWsxTPGG0T1oO%2Fr0TxokIcFu5QVQXLUijREkafwDf44poBgdACy2UfAiZYvoZIYabC3gT4g1MHpd0dmofeXjhfTB9Y5uWYAsf%2BdJOtwjBcBwClqjJgrgaFDl%2BHBNvEG%2FN9iDMJPChWqlYJbBRzvGMvtt%2BScWf2nKYeUmcGBpO3U29gKt7heO9WGcFRnHJ%2FiEAWHbrmKwanViQhH9q0qhkPCxN9%2Fmk8nPzQdY1NwUAK3YPP6qohps9IzAAq1g6zaXCtHAqbL5xLvo4L9%2BynDv%2Bs4XyVZxy%2F272gIlqs6S%2F44dDxpvhLGQkSAgY3LIFpgjOJqdJt6CxH%2BLEh8NZGolN%2BD1X9KMXwvu9Sy6vN%2Fwb16D6BZgfN4qkVFBxGNrXm9JEe3YfzFK6Y20%2Bmgg71rxjbxEq%2FdPKzcuvzbEtFQlvbrn0Ppxz0AF6zb%2BPQZBWiOnQpNf3BLTC84%2FkiDRmNg2gOroJxKMKCpsMIGOqUBPRp23ICH9r3G48srAQ4N2rAzgG1x8FDVJjpAj6yLdj3Gy%2B%2BFHzvYE4blLW5pSmGF3HiWHR%2FTzEqNLR9AOFMdF724DPv8fCNu6N2K46XNjOqx7tA%2B%2BzxwkAsJtW83BjVG6GAWseGYg5j9yoyC1bMVjLOdSmhzG0YOczlA8PikNXbG19TSCV1v%2BuHiqgvAAzrDKQcD%2B2tHru%2F1M9uuoAQxXGVc9Clh&X-Amz-Signature=f8fd3e6f08125f098f855fdf414ac3d5af8d2ae3eea35e8bb43c447ad955418b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU6MMQ3Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHRBUbStA6vmsoSckIktc1%2BMT5kSVoBa0hExYUavGi7hAiEAxBXVLn%2F9rrv9pMENJ%2BS7YK%2BsJk1dvQE6dAAsEDJQZlIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGxERBXDP4oA8XAACircA4sJ%2BblDi3k9cAvC5CmUjDnbZ%2BCndDwow53pNNhVePQoJ6qZlSP84YKMq6lcwRr9pwxqmB6GmZ5oVInnC63%2BqjwJbRaIO36jCL9hzAo7N09YVF%2FqkcC0GxDR93YaOZGsa97Z1E8%2BRQjXC4845Z%2FoJM6kCmc7MjYUskWsxTPGG0T1oO%2Fr0TxokIcFu5QVQXLUijREkafwDf44poBgdACy2UfAiZYvoZIYabC3gT4g1MHpd0dmofeXjhfTB9Y5uWYAsf%2BdJOtwjBcBwClqjJgrgaFDl%2BHBNvEG%2FN9iDMJPChWqlYJbBRzvGMvtt%2BScWf2nKYeUmcGBpO3U29gKt7heO9WGcFRnHJ%2FiEAWHbrmKwanViQhH9q0qhkPCxN9%2Fmk8nPzQdY1NwUAK3YPP6qohps9IzAAq1g6zaXCtHAqbL5xLvo4L9%2BynDv%2Bs4XyVZxy%2F272gIlqs6S%2F44dDxpvhLGQkSAgY3LIFpgjOJqdJt6CxH%2BLEh8NZGolN%2BD1X9KMXwvu9Sy6vN%2Fwb16D6BZgfN4qkVFBxGNrXm9JEe3YfzFK6Y20%2Bmgg71rxjbxEq%2FdPKzcuvzbEtFQlvbrn0Ppxz0AF6zb%2BPQZBWiOnQpNf3BLTC84%2FkiDRmNg2gOroJxKMKCpsMIGOqUBPRp23ICH9r3G48srAQ4N2rAzgG1x8FDVJjpAj6yLdj3Gy%2B%2BFHzvYE4blLW5pSmGF3HiWHR%2FTzEqNLR9AOFMdF724DPv8fCNu6N2K46XNjOqx7tA%2B%2BzxwkAsJtW83BjVG6GAWseGYg5j9yoyC1bMVjLOdSmhzG0YOczlA8PikNXbG19TSCV1v%2BuHiqgvAAzrDKQcD%2B2tHru%2F1M9uuoAQxXGVc9Clh&X-Amz-Signature=931a4a8a42ac6ef2266b7878aaf700d835c1f4a5d5610f304cf272d9d3593a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
