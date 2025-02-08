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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTXKUYA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIC2IZ9L6J%2Bb%2BPjX5aVoHM6laomxuzoljsfU7KeMycAb3AiBLVhMIi%2Fp%2FXkUODF313PvBcyKJSrC%2B4YGyG2kbGc4ltCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1fONmkA%2BcnTHg%2F7FKtwDkVNcCFNQceWsz95GjToJJ1HwhHxrALtzwxgVV5fE4fgW1xMT3MLzOhBt2R14pE9P13BlJsSevIQSSKebrde2asEh9pd%2FrwEymqrUTEr2rdkJ8u%2Fp0U8RSyg8lxWxZ%2BsDUIJekTPL7H6IGjb9kL1fCEkuYY9tWYS38vU%2BVAeo6VkqmP3akWAttkYf8gkHUfED4%2Bl%2FdAxfaBLMdgAIgllnxVxKm3RfZWybPoXBEz79A9HI7Xpcu%2BYrpEcxq0d29Uicsb9FhPtLA7sK4afr7crShv5MEvkiINtfpNertp9nIg0F4biwevQfNAqHRQH6ltLECPQLHVS0BY0w7DZLGocyLsvyA9cbDWUwUvDvgxUDb88LcjY5v1MOCsPnl5GH1DURN1oFKGKJlSgVmcRHvzCx%2FCiW7iqSRpot8lOnk4IjI8P%2BGiaTUCn9%2B8augA03mkzSPvT6%2BpQKDMcGZ8HzZT%2BEuja5kEp8kx4tiOcINWrlrP7sJ5KjI6vvb1HXuNsik%2ByCA6JUqtj%2BBn5BT4idUGQKeOeskH%2B5tb27yZkiYK2I2xCb0rBt1J9rynaYYHj%2FzAPiYhlKJGNSQt3zO9LFhurWDX1ePweoJAIn5cMn8StoXQ7CmTgt7FTZ2WFue%2Bkw0oedvQY6pgEL%2BkTsPWMOVDYn6TU0QhaKSw0RTRuutBGakfzVn34EkQeDcw6XsCvxwBzCOoydSaKrJPZeDDdxO9jf85HY268VcHbyDu8dSBAv3sD9xWd6GhAAMJNJQqedVYvAb8hzYUG%2Fs3ALHXL4Q7rcE4wSaV5Nl3MEpW7IK%2Fwip33A01%2FjpneTlxl7X%2BkuyXkZrdEjsnSLqQjXSg4QIXsvDYbVF5w36IF4CGsq&X-Amz-Signature=4cfd1becd380d2d6f4ec1a1189ba3f745e8ff03b644b3a534357c10c44386bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTXKUYA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIC2IZ9L6J%2Bb%2BPjX5aVoHM6laomxuzoljsfU7KeMycAb3AiBLVhMIi%2Fp%2FXkUODF313PvBcyKJSrC%2B4YGyG2kbGc4ltCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1fONmkA%2BcnTHg%2F7FKtwDkVNcCFNQceWsz95GjToJJ1HwhHxrALtzwxgVV5fE4fgW1xMT3MLzOhBt2R14pE9P13BlJsSevIQSSKebrde2asEh9pd%2FrwEymqrUTEr2rdkJ8u%2Fp0U8RSyg8lxWxZ%2BsDUIJekTPL7H6IGjb9kL1fCEkuYY9tWYS38vU%2BVAeo6VkqmP3akWAttkYf8gkHUfED4%2Bl%2FdAxfaBLMdgAIgllnxVxKm3RfZWybPoXBEz79A9HI7Xpcu%2BYrpEcxq0d29Uicsb9FhPtLA7sK4afr7crShv5MEvkiINtfpNertp9nIg0F4biwevQfNAqHRQH6ltLECPQLHVS0BY0w7DZLGocyLsvyA9cbDWUwUvDvgxUDb88LcjY5v1MOCsPnl5GH1DURN1oFKGKJlSgVmcRHvzCx%2FCiW7iqSRpot8lOnk4IjI8P%2BGiaTUCn9%2B8augA03mkzSPvT6%2BpQKDMcGZ8HzZT%2BEuja5kEp8kx4tiOcINWrlrP7sJ5KjI6vvb1HXuNsik%2ByCA6JUqtj%2BBn5BT4idUGQKeOeskH%2B5tb27yZkiYK2I2xCb0rBt1J9rynaYYHj%2FzAPiYhlKJGNSQt3zO9LFhurWDX1ePweoJAIn5cMn8StoXQ7CmTgt7FTZ2WFue%2Bkw0oedvQY6pgEL%2BkTsPWMOVDYn6TU0QhaKSw0RTRuutBGakfzVn34EkQeDcw6XsCvxwBzCOoydSaKrJPZeDDdxO9jf85HY268VcHbyDu8dSBAv3sD9xWd6GhAAMJNJQqedVYvAb8hzYUG%2Fs3ALHXL4Q7rcE4wSaV5Nl3MEpW7IK%2Fwip33A01%2FjpneTlxl7X%2BkuyXkZrdEjsnSLqQjXSg4QIXsvDYbVF5w36IF4CGsq&X-Amz-Signature=9a19ca89bf9e702a2b9a8e9c2a3d11bdae21c4c3a64e307db340e7073fadf3bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTXKUYA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIC2IZ9L6J%2Bb%2BPjX5aVoHM6laomxuzoljsfU7KeMycAb3AiBLVhMIi%2Fp%2FXkUODF313PvBcyKJSrC%2B4YGyG2kbGc4ltCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1fONmkA%2BcnTHg%2F7FKtwDkVNcCFNQceWsz95GjToJJ1HwhHxrALtzwxgVV5fE4fgW1xMT3MLzOhBt2R14pE9P13BlJsSevIQSSKebrde2asEh9pd%2FrwEymqrUTEr2rdkJ8u%2Fp0U8RSyg8lxWxZ%2BsDUIJekTPL7H6IGjb9kL1fCEkuYY9tWYS38vU%2BVAeo6VkqmP3akWAttkYf8gkHUfED4%2Bl%2FdAxfaBLMdgAIgllnxVxKm3RfZWybPoXBEz79A9HI7Xpcu%2BYrpEcxq0d29Uicsb9FhPtLA7sK4afr7crShv5MEvkiINtfpNertp9nIg0F4biwevQfNAqHRQH6ltLECPQLHVS0BY0w7DZLGocyLsvyA9cbDWUwUvDvgxUDb88LcjY5v1MOCsPnl5GH1DURN1oFKGKJlSgVmcRHvzCx%2FCiW7iqSRpot8lOnk4IjI8P%2BGiaTUCn9%2B8augA03mkzSPvT6%2BpQKDMcGZ8HzZT%2BEuja5kEp8kx4tiOcINWrlrP7sJ5KjI6vvb1HXuNsik%2ByCA6JUqtj%2BBn5BT4idUGQKeOeskH%2B5tb27yZkiYK2I2xCb0rBt1J9rynaYYHj%2FzAPiYhlKJGNSQt3zO9LFhurWDX1ePweoJAIn5cMn8StoXQ7CmTgt7FTZ2WFue%2Bkw0oedvQY6pgEL%2BkTsPWMOVDYn6TU0QhaKSw0RTRuutBGakfzVn34EkQeDcw6XsCvxwBzCOoydSaKrJPZeDDdxO9jf85HY268VcHbyDu8dSBAv3sD9xWd6GhAAMJNJQqedVYvAb8hzYUG%2Fs3ALHXL4Q7rcE4wSaV5Nl3MEpW7IK%2Fwip33A01%2FjpneTlxl7X%2BkuyXkZrdEjsnSLqQjXSg4QIXsvDYbVF5w36IF4CGsq&X-Amz-Signature=79e0c6d873a2382a5fd65f4b91118229b63859c4262ba92ec807f98a44dac7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
