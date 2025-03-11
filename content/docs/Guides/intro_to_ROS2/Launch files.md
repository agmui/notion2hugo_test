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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGNCIC3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHRJfJu1PrlVtmYp8iOPI%2BBD52yul%2BOZFspanx%2FuH7KPAiBiS7QNi8Vd%2Bboc9O87PLV0K6ofWpUDjF23QwD6YiFHwyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXTKxG2fwlvwYgsxVKtwDbMnot3zv9wU1I7igUMNKB5fo3zPXHDcPszlDnI71efzOCCqr463hyd6qj96El4SnWiBXT1muWideX4WBD%2BzhU6Ij0QuCK3QPnWYEXsivM9NVST6lxeudFzNkXY5saqa57D6peFoSa2hvISZJATGUcmsTrMeXAIHyL94M7%2BuYwJdx6P3CE2DDdRDrcxhXxzDYnsERTG8m4C6HNc9SRZ9pzw399nDeOVGxeEUwwC9yyqWp287jKmXrw53UxqgjA27FN5cgNFaAwe95GeOMD5FhAWh4liztwIXHQXbjRru%2B1TQXj%2BeVY3lX%2B%2Bd1V4SGslrjR6XAkFHkSPmqAU1M4fcIOOEl7Hq9xyv394%2F%2Biakf3XosUG0tAFN7r%2F1vYMDMfMLZogZC86lF03B6x%2Bl6NBeF2o3sEw%2BEwJ%2FDD78u201yeWuRokfAHuJqrhsRUilHsWKB19WgUWnMYQMHxPQ4TsScBdTp4RKHn0wD%2BQEEf5jeNSh%2FmgCgxIU7hXz6MHXKpisunfkJn4QgyjIjgluAEezezmy0EjOg1u29XAbps5e9BwNg2Z%2FKu7V8SuPLMAgfFdg9LskwzlXAxfM%2FBscJ8ODrrK0KDq6S6SfOloTHOs%2Fr3yZiGdJDygF%2Bf4%2F3VeUwiPLCvgY6pgFpsQtrA9j7QSpV4Bjw%2BA3AC8X59D%2F%2BcaqVmEBCqEkQXlfOY%2BpGJ5hnV1I9D0EfbPMHIbFoYBOcd%2F%2B4Fd0tKZfI0H76qpBA4EQbhIEJoOJmcKt1XeXd7kTa8fKgr5u%2BaXUhxHNxUsvrc9wZDANB1W7Nsw9VD8B6%2FFc72j%2FJvo2bOO3tW2u867p1BYm6GPNLokZ9SxilsW9eSk%2BFb4rSjsGhkTgBAtCR&X-Amz-Signature=beffc9bd7ebd7942b66938e218f6f30b24922534bb0b27f4523931fbadd011b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGNCIC3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHRJfJu1PrlVtmYp8iOPI%2BBD52yul%2BOZFspanx%2FuH7KPAiBiS7QNi8Vd%2Bboc9O87PLV0K6ofWpUDjF23QwD6YiFHwyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXTKxG2fwlvwYgsxVKtwDbMnot3zv9wU1I7igUMNKB5fo3zPXHDcPszlDnI71efzOCCqr463hyd6qj96El4SnWiBXT1muWideX4WBD%2BzhU6Ij0QuCK3QPnWYEXsivM9NVST6lxeudFzNkXY5saqa57D6peFoSa2hvISZJATGUcmsTrMeXAIHyL94M7%2BuYwJdx6P3CE2DDdRDrcxhXxzDYnsERTG8m4C6HNc9SRZ9pzw399nDeOVGxeEUwwC9yyqWp287jKmXrw53UxqgjA27FN5cgNFaAwe95GeOMD5FhAWh4liztwIXHQXbjRru%2B1TQXj%2BeVY3lX%2B%2Bd1V4SGslrjR6XAkFHkSPmqAU1M4fcIOOEl7Hq9xyv394%2F%2Biakf3XosUG0tAFN7r%2F1vYMDMfMLZogZC86lF03B6x%2Bl6NBeF2o3sEw%2BEwJ%2FDD78u201yeWuRokfAHuJqrhsRUilHsWKB19WgUWnMYQMHxPQ4TsScBdTp4RKHn0wD%2BQEEf5jeNSh%2FmgCgxIU7hXz6MHXKpisunfkJn4QgyjIjgluAEezezmy0EjOg1u29XAbps5e9BwNg2Z%2FKu7V8SuPLMAgfFdg9LskwzlXAxfM%2FBscJ8ODrrK0KDq6S6SfOloTHOs%2Fr3yZiGdJDygF%2Bf4%2F3VeUwiPLCvgY6pgFpsQtrA9j7QSpV4Bjw%2BA3AC8X59D%2F%2BcaqVmEBCqEkQXlfOY%2BpGJ5hnV1I9D0EfbPMHIbFoYBOcd%2F%2B4Fd0tKZfI0H76qpBA4EQbhIEJoOJmcKt1XeXd7kTa8fKgr5u%2BaXUhxHNxUsvrc9wZDANB1W7Nsw9VD8B6%2FFc72j%2FJvo2bOO3tW2u867p1BYm6GPNLokZ9SxilsW9eSk%2BFb4rSjsGhkTgBAtCR&X-Amz-Signature=e2d2311e64b87018b28a97fa2107f43fa10cb279b84e33b52f9cd8d4e4d52136&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGNCIC3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHRJfJu1PrlVtmYp8iOPI%2BBD52yul%2BOZFspanx%2FuH7KPAiBiS7QNi8Vd%2Bboc9O87PLV0K6ofWpUDjF23QwD6YiFHwyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXTKxG2fwlvwYgsxVKtwDbMnot3zv9wU1I7igUMNKB5fo3zPXHDcPszlDnI71efzOCCqr463hyd6qj96El4SnWiBXT1muWideX4WBD%2BzhU6Ij0QuCK3QPnWYEXsivM9NVST6lxeudFzNkXY5saqa57D6peFoSa2hvISZJATGUcmsTrMeXAIHyL94M7%2BuYwJdx6P3CE2DDdRDrcxhXxzDYnsERTG8m4C6HNc9SRZ9pzw399nDeOVGxeEUwwC9yyqWp287jKmXrw53UxqgjA27FN5cgNFaAwe95GeOMD5FhAWh4liztwIXHQXbjRru%2B1TQXj%2BeVY3lX%2B%2Bd1V4SGslrjR6XAkFHkSPmqAU1M4fcIOOEl7Hq9xyv394%2F%2Biakf3XosUG0tAFN7r%2F1vYMDMfMLZogZC86lF03B6x%2Bl6NBeF2o3sEw%2BEwJ%2FDD78u201yeWuRokfAHuJqrhsRUilHsWKB19WgUWnMYQMHxPQ4TsScBdTp4RKHn0wD%2BQEEf5jeNSh%2FmgCgxIU7hXz6MHXKpisunfkJn4QgyjIjgluAEezezmy0EjOg1u29XAbps5e9BwNg2Z%2FKu7V8SuPLMAgfFdg9LskwzlXAxfM%2FBscJ8ODrrK0KDq6S6SfOloTHOs%2Fr3yZiGdJDygF%2Bf4%2F3VeUwiPLCvgY6pgFpsQtrA9j7QSpV4Bjw%2BA3AC8X59D%2F%2BcaqVmEBCqEkQXlfOY%2BpGJ5hnV1I9D0EfbPMHIbFoYBOcd%2F%2B4Fd0tKZfI0H76qpBA4EQbhIEJoOJmcKt1XeXd7kTa8fKgr5u%2BaXUhxHNxUsvrc9wZDANB1W7Nsw9VD8B6%2FFc72j%2FJvo2bOO3tW2u867p1BYm6GPNLokZ9SxilsW9eSk%2BFb4rSjsGhkTgBAtCR&X-Amz-Signature=9b954de4c8c6507613cdeaac91c13bfcbb1b0d09b69bb3428a1c38fac63487c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
