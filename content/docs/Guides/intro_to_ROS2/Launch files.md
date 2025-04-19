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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5YS5KL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXUQ84sJUj3X45meaMV77qGwCxn3vYB18ttYtWONDfsAiEAggyq%2BXKAfyjlh8lvCjkH8GzcZoEncZfKnCnkSWSbeCEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON6wL01W59EnWIxYyrcA0FFVGXSW4Xdzm8vOzWmiVEk2oIPH%2BRfzZN2b34OyJqtUxG9s3NuQm9SJQI3sDn0NVe83L4NLrgJ7sHUoPYG0OeUAZ6DZcvjZKvno9PY8CwOwotnHLvs2JmyhJzpbi%2FoZgDkjwcTWE54AGqzNk%2FhJ%2BF94cmoA862NSJonnfMapFBfmMXm%2FRNVY%2FLrieK%2Bo822FwtvhG%2Fp2RBKjAZMkJZqDqvrpdG2Jy9ISgINe3S5WIzVI48Hm25EEtubqx7XAXTIy80%2Ftxmd%2BXKpiIHnAOxqF2q%2FEM3MoEhXIODp2o7RMZGCMYz4k7MLfslFSyMgHZazunt1tRevEiL%2FvR30%2B%2F9JrawUArl11JeOSn0a%2BstUm%2F%2Bp9I0gSzj6AXWNCjnYWAKQOA7RoUD7ggSicMjt2TPqg8aLjasGwI6r8puiLltia8dlNPCxDIFPt%2FsVaSftRyJjZV%2Bm6wUvj3B3tkgWFUW86ra0SG6m3zWCJU3hfGuFrEoyYTTPvZVtlXZEAYIrwQUJJmYXl5ff05pwAsJSM4bTJFg72i9SAvhtwNvYFIR62crwSdP83VrNdvn3onWfyWeCHxi8cPcn%2FuWju5peD6Fn9hq7NwwHa6UD2u4e%2FvodmfegWozK0o76QQVgE56MPm7jMAGOqUB5xEnhdWbpa9iSJdoAa5n9c1oULxrZFX%2FLRM0XuMpq4Vx09VKYYORkovi9ybY3C0wQBOlYeE4kr9CS9pX%2FDhVtVscDJ9Al%2F3fwqz2PP6ovIhRKNRIFnByFOJPBLA59ZbvsZav0OhfZVB06AeGJKPogG9vgte%2BtfBcNZCgrb4uH0WCPZwUo1lWGoEJmnX8zpx7R8JLWkhIQVUmUxERzZXL0NaStnPC&X-Amz-Signature=d08c8fb54e146a2d04746bd4e34f9ace723de71e4c381a7c373fe5c71fe07171&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5YS5KL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXUQ84sJUj3X45meaMV77qGwCxn3vYB18ttYtWONDfsAiEAggyq%2BXKAfyjlh8lvCjkH8GzcZoEncZfKnCnkSWSbeCEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON6wL01W59EnWIxYyrcA0FFVGXSW4Xdzm8vOzWmiVEk2oIPH%2BRfzZN2b34OyJqtUxG9s3NuQm9SJQI3sDn0NVe83L4NLrgJ7sHUoPYG0OeUAZ6DZcvjZKvno9PY8CwOwotnHLvs2JmyhJzpbi%2FoZgDkjwcTWE54AGqzNk%2FhJ%2BF94cmoA862NSJonnfMapFBfmMXm%2FRNVY%2FLrieK%2Bo822FwtvhG%2Fp2RBKjAZMkJZqDqvrpdG2Jy9ISgINe3S5WIzVI48Hm25EEtubqx7XAXTIy80%2Ftxmd%2BXKpiIHnAOxqF2q%2FEM3MoEhXIODp2o7RMZGCMYz4k7MLfslFSyMgHZazunt1tRevEiL%2FvR30%2B%2F9JrawUArl11JeOSn0a%2BstUm%2F%2Bp9I0gSzj6AXWNCjnYWAKQOA7RoUD7ggSicMjt2TPqg8aLjasGwI6r8puiLltia8dlNPCxDIFPt%2FsVaSftRyJjZV%2Bm6wUvj3B3tkgWFUW86ra0SG6m3zWCJU3hfGuFrEoyYTTPvZVtlXZEAYIrwQUJJmYXl5ff05pwAsJSM4bTJFg72i9SAvhtwNvYFIR62crwSdP83VrNdvn3onWfyWeCHxi8cPcn%2FuWju5peD6Fn9hq7NwwHa6UD2u4e%2FvodmfegWozK0o76QQVgE56MPm7jMAGOqUB5xEnhdWbpa9iSJdoAa5n9c1oULxrZFX%2FLRM0XuMpq4Vx09VKYYORkovi9ybY3C0wQBOlYeE4kr9CS9pX%2FDhVtVscDJ9Al%2F3fwqz2PP6ovIhRKNRIFnByFOJPBLA59ZbvsZav0OhfZVB06AeGJKPogG9vgte%2BtfBcNZCgrb4uH0WCPZwUo1lWGoEJmnX8zpx7R8JLWkhIQVUmUxERzZXL0NaStnPC&X-Amz-Signature=182ec0c479894d65f80a1031f98fbff00e60254ac294665e5318881bc89255eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5YS5KL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXUQ84sJUj3X45meaMV77qGwCxn3vYB18ttYtWONDfsAiEAggyq%2BXKAfyjlh8lvCjkH8GzcZoEncZfKnCnkSWSbeCEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON6wL01W59EnWIxYyrcA0FFVGXSW4Xdzm8vOzWmiVEk2oIPH%2BRfzZN2b34OyJqtUxG9s3NuQm9SJQI3sDn0NVe83L4NLrgJ7sHUoPYG0OeUAZ6DZcvjZKvno9PY8CwOwotnHLvs2JmyhJzpbi%2FoZgDkjwcTWE54AGqzNk%2FhJ%2BF94cmoA862NSJonnfMapFBfmMXm%2FRNVY%2FLrieK%2Bo822FwtvhG%2Fp2RBKjAZMkJZqDqvrpdG2Jy9ISgINe3S5WIzVI48Hm25EEtubqx7XAXTIy80%2Ftxmd%2BXKpiIHnAOxqF2q%2FEM3MoEhXIODp2o7RMZGCMYz4k7MLfslFSyMgHZazunt1tRevEiL%2FvR30%2B%2F9JrawUArl11JeOSn0a%2BstUm%2F%2Bp9I0gSzj6AXWNCjnYWAKQOA7RoUD7ggSicMjt2TPqg8aLjasGwI6r8puiLltia8dlNPCxDIFPt%2FsVaSftRyJjZV%2Bm6wUvj3B3tkgWFUW86ra0SG6m3zWCJU3hfGuFrEoyYTTPvZVtlXZEAYIrwQUJJmYXl5ff05pwAsJSM4bTJFg72i9SAvhtwNvYFIR62crwSdP83VrNdvn3onWfyWeCHxi8cPcn%2FuWju5peD6Fn9hq7NwwHa6UD2u4e%2FvodmfegWozK0o76QQVgE56MPm7jMAGOqUB5xEnhdWbpa9iSJdoAa5n9c1oULxrZFX%2FLRM0XuMpq4Vx09VKYYORkovi9ybY3C0wQBOlYeE4kr9CS9pX%2FDhVtVscDJ9Al%2F3fwqz2PP6ovIhRKNRIFnByFOJPBLA59ZbvsZav0OhfZVB06AeGJKPogG9vgte%2BtfBcNZCgrb4uH0WCPZwUo1lWGoEJmnX8zpx7R8JLWkhIQVUmUxERzZXL0NaStnPC&X-Amz-Signature=2b3311e97ecbdf6b116caad755da59f8f6ed6542b773497fee6e2b7300e561d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
