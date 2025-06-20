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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHCNPPM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI%2BwKAQfmS%2BXW0uILlku3NOc4i7C4ihb82spPtNpjZMAiBkUhXxJoYzjMfko6gfoswK%2Fi0hk%2FYE9OCIQZnB1H3hdCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJwVvza%2FXMD1W2lhKtwDzmwxbcmB7qN7jYM4sXAmVf2shNlTPqLgJ8Pv1d%2FBsvqbCdIEhAa8jxLSnxXaPxJUUi4LriEru7Mz7U7JkX3h6IZzeChp9uzIs01kAQ%2B32efam5awewajNOIhY9OoVmJlt817w92qcErVuVhaRAoWQ9WpKXv16O4TAGfv80NyLGLNU0IAlwc6KrUC5NZEndHBSdudR0e%2FhwMOVLKwE7zVlJ2w1oqTsjASuPTUfa4ChwkZtXvRz8lYLIHqmkqxhsGSElBZ6j7MWfWOGdFThF2fikWTTFZ%2FKNTQE8fek%2BM7VUGPGaVGqpuL67ycbtash%2BDVS4KnkFWzN1xr%2BXlZ7vTVP6i11Qc%2FC5ca2UTrstssJufMaQJ8ievSUZqWMuwWOdk%2Fj6nZX7SRDtcQ%2FzfaJOtX191Jo%2B69X7wYxVLNwNSaiJyYCxcPVgS8KxgIAascIBWYk47wvXxTQDjuApcKVh9CUYqmLpuu3xQgtq4%2BBtfyaMS3IRA3DVrp%2F9Q0abvydTpz4%2FvT6rHfti92FPh%2BFXtOUXBj3TpqrSS2mVDIo8FnRFvzhwajZ1Jwtb%2B7BFZ9LOFYu9s6sn%2B%2FmjL1H6Hz%2BMS4IzSMO6VZ%2F9voFMN%2BvZZNpgSHIkWCcUvEUBbuakcwyKTVwgY6pgHElYbUnhrnbzqMuo%2FnEC2b6L4JUteIlfHAnqcV%2BCuCRcVKykodriGBb2iDJLq9udidjCjAqcyh34oXZdG84mfR%2FXpap%2F5KKxQAdtnXbjYNoRsCNsHglZW55jFywHeauYl8Q3G03XE5uDzQIpocaGaUGYKaHKIAIfGBUHwhFMm3YCQPQx3oZWkkHP%2BDvm1wggRsG6JXVsGv20AA%2FJjh1j2RMUKrMWKm&X-Amz-Signature=a67afb2c70af23625e06fac0a837594cbb3fcf9eb3dde326ee90790bc9f41438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHCNPPM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI%2BwKAQfmS%2BXW0uILlku3NOc4i7C4ihb82spPtNpjZMAiBkUhXxJoYzjMfko6gfoswK%2Fi0hk%2FYE9OCIQZnB1H3hdCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJwVvza%2FXMD1W2lhKtwDzmwxbcmB7qN7jYM4sXAmVf2shNlTPqLgJ8Pv1d%2FBsvqbCdIEhAa8jxLSnxXaPxJUUi4LriEru7Mz7U7JkX3h6IZzeChp9uzIs01kAQ%2B32efam5awewajNOIhY9OoVmJlt817w92qcErVuVhaRAoWQ9WpKXv16O4TAGfv80NyLGLNU0IAlwc6KrUC5NZEndHBSdudR0e%2FhwMOVLKwE7zVlJ2w1oqTsjASuPTUfa4ChwkZtXvRz8lYLIHqmkqxhsGSElBZ6j7MWfWOGdFThF2fikWTTFZ%2FKNTQE8fek%2BM7VUGPGaVGqpuL67ycbtash%2BDVS4KnkFWzN1xr%2BXlZ7vTVP6i11Qc%2FC5ca2UTrstssJufMaQJ8ievSUZqWMuwWOdk%2Fj6nZX7SRDtcQ%2FzfaJOtX191Jo%2B69X7wYxVLNwNSaiJyYCxcPVgS8KxgIAascIBWYk47wvXxTQDjuApcKVh9CUYqmLpuu3xQgtq4%2BBtfyaMS3IRA3DVrp%2F9Q0abvydTpz4%2FvT6rHfti92FPh%2BFXtOUXBj3TpqrSS2mVDIo8FnRFvzhwajZ1Jwtb%2B7BFZ9LOFYu9s6sn%2B%2FmjL1H6Hz%2BMS4IzSMO6VZ%2F9voFMN%2BvZZNpgSHIkWCcUvEUBbuakcwyKTVwgY6pgHElYbUnhrnbzqMuo%2FnEC2b6L4JUteIlfHAnqcV%2BCuCRcVKykodriGBb2iDJLq9udidjCjAqcyh34oXZdG84mfR%2FXpap%2F5KKxQAdtnXbjYNoRsCNsHglZW55jFywHeauYl8Q3G03XE5uDzQIpocaGaUGYKaHKIAIfGBUHwhFMm3YCQPQx3oZWkkHP%2BDvm1wggRsG6JXVsGv20AA%2FJjh1j2RMUKrMWKm&X-Amz-Signature=8d9d785b9ea2b3b650f8c96a9214d0f64fd2b0e0d524049ad2d5c9278bea8a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHCNPPM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI%2BwKAQfmS%2BXW0uILlku3NOc4i7C4ihb82spPtNpjZMAiBkUhXxJoYzjMfko6gfoswK%2Fi0hk%2FYE9OCIQZnB1H3hdCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJwVvza%2FXMD1W2lhKtwDzmwxbcmB7qN7jYM4sXAmVf2shNlTPqLgJ8Pv1d%2FBsvqbCdIEhAa8jxLSnxXaPxJUUi4LriEru7Mz7U7JkX3h6IZzeChp9uzIs01kAQ%2B32efam5awewajNOIhY9OoVmJlt817w92qcErVuVhaRAoWQ9WpKXv16O4TAGfv80NyLGLNU0IAlwc6KrUC5NZEndHBSdudR0e%2FhwMOVLKwE7zVlJ2w1oqTsjASuPTUfa4ChwkZtXvRz8lYLIHqmkqxhsGSElBZ6j7MWfWOGdFThF2fikWTTFZ%2FKNTQE8fek%2BM7VUGPGaVGqpuL67ycbtash%2BDVS4KnkFWzN1xr%2BXlZ7vTVP6i11Qc%2FC5ca2UTrstssJufMaQJ8ievSUZqWMuwWOdk%2Fj6nZX7SRDtcQ%2FzfaJOtX191Jo%2B69X7wYxVLNwNSaiJyYCxcPVgS8KxgIAascIBWYk47wvXxTQDjuApcKVh9CUYqmLpuu3xQgtq4%2BBtfyaMS3IRA3DVrp%2F9Q0abvydTpz4%2FvT6rHfti92FPh%2BFXtOUXBj3TpqrSS2mVDIo8FnRFvzhwajZ1Jwtb%2B7BFZ9LOFYu9s6sn%2B%2FmjL1H6Hz%2BMS4IzSMO6VZ%2F9voFMN%2BvZZNpgSHIkWCcUvEUBbuakcwyKTVwgY6pgHElYbUnhrnbzqMuo%2FnEC2b6L4JUteIlfHAnqcV%2BCuCRcVKykodriGBb2iDJLq9udidjCjAqcyh34oXZdG84mfR%2FXpap%2F5KKxQAdtnXbjYNoRsCNsHglZW55jFywHeauYl8Q3G03XE5uDzQIpocaGaUGYKaHKIAIfGBUHwhFMm3YCQPQx3oZWkkHP%2BDvm1wggRsG6JXVsGv20AA%2FJjh1j2RMUKrMWKm&X-Amz-Signature=9c7f7dd0cdf00c672334b76c6e2c6f1c2378ee251b63b3e816cf30ed862ee45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
