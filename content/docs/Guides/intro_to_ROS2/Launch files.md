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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWFXVZI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAert1EmirCJCPzL9RJugn4pWqT49WMC%2BcB3ZgS75yJwAiA0jYThpDzpvb8j2RmExUJBfsJSq9l7Zj9tKIKUu%2Fl0kiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPJ2A4yPy1FS2MRzMKtwD3Xry5z3uUpB4QCUL8iK6ySmFgbekRblzZE5PBVZwvHeKry2IyeWeh1I9DH6PKW%2BeLXjKcikkfdl3udM%2BaTzj6epnAjIqN57eBQ0jQftE4uHcaGWjXTS%2FpiJHL3TkV0HguHq0QM%2B6xWtvRGYwAHRnm8%2FXfWyEuCm1xfy%2BuCILiCTNsgmc1xt7tLUPF11D1WoCDjhyE3qbzbvWZKcAQ2Ax1tA6e%2BPgEvSJQBj%2FusLLjOCrRhQ0hKHh2mhLCTXbn3ZWtJ2eOwvx9IVhTRH4snlfvTpBjEJpdMc0MFaLyTWWtiLlBrMi5Ovbuik9pBBkQhugh%2FPasK7ygos4Y9VYht4K%2F7wJEdzOvAfX8yPEluTR0oHN6AulBVg27N9rW2CZzSJZWQUVBWlnmUVxQDV0i7jwcZK4uGrlwMzlnErRTjotKaFnpLbjYx7fG%2BqL6TwfK%2Bx89uuNg0iE9bkXnt3%2FD0D5kMcczU9c23HpwWYH3YorjRojiBlMTqtaUVWDyG1tqhyYqCsQ169pbA87zPsI0c94N9nR4wvJs2bmjcn8CJFVueCfYL0bP47Yq%2FVmtCv6peXi5S5aez8Ni9adhHn3BBusCSOrdps26ypypyufXger0A9zapjy2KmErNe4AM0wqc2GwwY6pgF6fKwp5JyDsWTkAX%2FcFmrahZaUUqc%2FgKRyzrCA3aURoYiH6WsuA1JdRm9aVJtoGlprhFXVQVGwSj57eGi2PJ8kn7sU1pyflTMqbzZ2EkYo%2FEON7a%2BF%2BvYmG%2BXaOaLmZwnp6AAHq63Sa%2F8cikSXka1rzi5AN1lrc2iFPK0WzdS6kRYP6tPo%2FihqrQHNK%2BpQZHSGjo54NsXm0wgyUW0BBWw5vumJW9%2BO&X-Amz-Signature=5a83518b0635b2ccc64e8548bf48e4fb1c05801e665ae968d77d90da86e755d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWFXVZI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAert1EmirCJCPzL9RJugn4pWqT49WMC%2BcB3ZgS75yJwAiA0jYThpDzpvb8j2RmExUJBfsJSq9l7Zj9tKIKUu%2Fl0kiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPJ2A4yPy1FS2MRzMKtwD3Xry5z3uUpB4QCUL8iK6ySmFgbekRblzZE5PBVZwvHeKry2IyeWeh1I9DH6PKW%2BeLXjKcikkfdl3udM%2BaTzj6epnAjIqN57eBQ0jQftE4uHcaGWjXTS%2FpiJHL3TkV0HguHq0QM%2B6xWtvRGYwAHRnm8%2FXfWyEuCm1xfy%2BuCILiCTNsgmc1xt7tLUPF11D1WoCDjhyE3qbzbvWZKcAQ2Ax1tA6e%2BPgEvSJQBj%2FusLLjOCrRhQ0hKHh2mhLCTXbn3ZWtJ2eOwvx9IVhTRH4snlfvTpBjEJpdMc0MFaLyTWWtiLlBrMi5Ovbuik9pBBkQhugh%2FPasK7ygos4Y9VYht4K%2F7wJEdzOvAfX8yPEluTR0oHN6AulBVg27N9rW2CZzSJZWQUVBWlnmUVxQDV0i7jwcZK4uGrlwMzlnErRTjotKaFnpLbjYx7fG%2BqL6TwfK%2Bx89uuNg0iE9bkXnt3%2FD0D5kMcczU9c23HpwWYH3YorjRojiBlMTqtaUVWDyG1tqhyYqCsQ169pbA87zPsI0c94N9nR4wvJs2bmjcn8CJFVueCfYL0bP47Yq%2FVmtCv6peXi5S5aez8Ni9adhHn3BBusCSOrdps26ypypyufXger0A9zapjy2KmErNe4AM0wqc2GwwY6pgF6fKwp5JyDsWTkAX%2FcFmrahZaUUqc%2FgKRyzrCA3aURoYiH6WsuA1JdRm9aVJtoGlprhFXVQVGwSj57eGi2PJ8kn7sU1pyflTMqbzZ2EkYo%2FEON7a%2BF%2BvYmG%2BXaOaLmZwnp6AAHq63Sa%2F8cikSXka1rzi5AN1lrc2iFPK0WzdS6kRYP6tPo%2FihqrQHNK%2BpQZHSGjo54NsXm0wgyUW0BBWw5vumJW9%2BO&X-Amz-Signature=f57768c5575838ff973cfb0101269278209e68ba1b2e83439262818ca44a014f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWFXVZI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAert1EmirCJCPzL9RJugn4pWqT49WMC%2BcB3ZgS75yJwAiA0jYThpDzpvb8j2RmExUJBfsJSq9l7Zj9tKIKUu%2Fl0kiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPJ2A4yPy1FS2MRzMKtwD3Xry5z3uUpB4QCUL8iK6ySmFgbekRblzZE5PBVZwvHeKry2IyeWeh1I9DH6PKW%2BeLXjKcikkfdl3udM%2BaTzj6epnAjIqN57eBQ0jQftE4uHcaGWjXTS%2FpiJHL3TkV0HguHq0QM%2B6xWtvRGYwAHRnm8%2FXfWyEuCm1xfy%2BuCILiCTNsgmc1xt7tLUPF11D1WoCDjhyE3qbzbvWZKcAQ2Ax1tA6e%2BPgEvSJQBj%2FusLLjOCrRhQ0hKHh2mhLCTXbn3ZWtJ2eOwvx9IVhTRH4snlfvTpBjEJpdMc0MFaLyTWWtiLlBrMi5Ovbuik9pBBkQhugh%2FPasK7ygos4Y9VYht4K%2F7wJEdzOvAfX8yPEluTR0oHN6AulBVg27N9rW2CZzSJZWQUVBWlnmUVxQDV0i7jwcZK4uGrlwMzlnErRTjotKaFnpLbjYx7fG%2BqL6TwfK%2Bx89uuNg0iE9bkXnt3%2FD0D5kMcczU9c23HpwWYH3YorjRojiBlMTqtaUVWDyG1tqhyYqCsQ169pbA87zPsI0c94N9nR4wvJs2bmjcn8CJFVueCfYL0bP47Yq%2FVmtCv6peXi5S5aez8Ni9adhHn3BBusCSOrdps26ypypyufXger0A9zapjy2KmErNe4AM0wqc2GwwY6pgF6fKwp5JyDsWTkAX%2FcFmrahZaUUqc%2FgKRyzrCA3aURoYiH6WsuA1JdRm9aVJtoGlprhFXVQVGwSj57eGi2PJ8kn7sU1pyflTMqbzZ2EkYo%2FEON7a%2BF%2BvYmG%2BXaOaLmZwnp6AAHq63Sa%2F8cikSXka1rzi5AN1lrc2iFPK0WzdS6kRYP6tPo%2FihqrQHNK%2BpQZHSGjo54NsXm0wgyUW0BBWw5vumJW9%2BO&X-Amz-Signature=041a368c41252629101912dc38259b659c053404d5fdd03bcd699446239759ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
