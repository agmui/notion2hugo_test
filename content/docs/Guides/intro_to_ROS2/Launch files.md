---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45734AY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDyHsSbRna7QlcFHJ2u2j3kC1EREfYEGDkq5y3kdfU17QIhAPw7szZ48uwxCoWoJea3jow2c%2FejgKIWT4TM%2Fz%2Fe%2BunWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZYaDyy7WhKzOadR0q3AMemG1BrYAq5KBrHdXG3xntzyTLJXuckuIr8XDtcHlYE9E52oIEgQvN77ibrdzxezqwQaBAFlCbRg5IPvlfTZcL0M8vXoTyvaVItQYM%2FgJdfTCeB2F2RwR59UCZQraUr%2FMvJJujKpgDavS85WHFI6XJp7POJm91HxQu%2FMl9iegQsAEYnz4Ti5cUyN701Nwu4au6Tk16U9JGenzkQrG0PKg2ufgYh%2BRhcn7kaRSl5iAhf%2F%2FLQzUunj2s7UVp9DhsaYE8g8bjcSFhJ3W%2BvhwwvUbyBlwFn52Mo%2Fx2BFMfxHMPmF4yB7KBBKa5HtbR1nyJH6TliI4KuUJEptg9hTu46TvsO5szfs5Ad%2BYHLfRMA3IwACy%2BeBrffERV%2FfMQ%2BiDVqr1ObqjKIyJ0x7SofPtKVfpP7i9zddvWwlUcOTUIqWptu%2Bem9oL%2FBct0VVWmqhO09UQaDDQX4ZZhtT8tJLAeU0ZsLypyg50stgalbBc7ovf8aTo3g%2FrTeFDIaatgrzJq9gzlCZx5u8HDUhxYFctou6j54lI0VubfVEL2ITl9pGwZceKuD3F5S1PIs1vz2TNFmZhgrMsa1mROGL6%2Ft7KM3W%2F5wQ2udhDkmDZWhFwWS%2BmtdihEXPaUVbtW2YVWuTDzpenQBjqkAZpt%2BslfvG1CMHW45nz4Btd%2F0WrTsFBYAk%2FdkU2J%2BoeHEdaAhZDsB2D5stHj6Q6TNE6ku8nYMSXEWi%2FYhmJAQxEjZrxu8cS5c%2BnVBh6Ux48Ympuyda%2FWsME154wfxWsm%2BKBlThPbYxO1BEOM3H9HkPVoNmbr%2BPPf0pKPGEu9F7mgVjZhWJmhGG9tFjwMj0YwCnjQtjX34ZL5fiB%2FAnKa16jUiDmg&X-Amz-Signature=71fa4e473d17d74409417d646d2a1221700273167c52f09327fae9a958c0ece8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45734AY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDyHsSbRna7QlcFHJ2u2j3kC1EREfYEGDkq5y3kdfU17QIhAPw7szZ48uwxCoWoJea3jow2c%2FejgKIWT4TM%2Fz%2Fe%2BunWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZYaDyy7WhKzOadR0q3AMemG1BrYAq5KBrHdXG3xntzyTLJXuckuIr8XDtcHlYE9E52oIEgQvN77ibrdzxezqwQaBAFlCbRg5IPvlfTZcL0M8vXoTyvaVItQYM%2FgJdfTCeB2F2RwR59UCZQraUr%2FMvJJujKpgDavS85WHFI6XJp7POJm91HxQu%2FMl9iegQsAEYnz4Ti5cUyN701Nwu4au6Tk16U9JGenzkQrG0PKg2ufgYh%2BRhcn7kaRSl5iAhf%2F%2FLQzUunj2s7UVp9DhsaYE8g8bjcSFhJ3W%2BvhwwvUbyBlwFn52Mo%2Fx2BFMfxHMPmF4yB7KBBKa5HtbR1nyJH6TliI4KuUJEptg9hTu46TvsO5szfs5Ad%2BYHLfRMA3IwACy%2BeBrffERV%2FfMQ%2BiDVqr1ObqjKIyJ0x7SofPtKVfpP7i9zddvWwlUcOTUIqWptu%2Bem9oL%2FBct0VVWmqhO09UQaDDQX4ZZhtT8tJLAeU0ZsLypyg50stgalbBc7ovf8aTo3g%2FrTeFDIaatgrzJq9gzlCZx5u8HDUhxYFctou6j54lI0VubfVEL2ITl9pGwZceKuD3F5S1PIs1vz2TNFmZhgrMsa1mROGL6%2Ft7KM3W%2F5wQ2udhDkmDZWhFwWS%2BmtdihEXPaUVbtW2YVWuTDzpenQBjqkAZpt%2BslfvG1CMHW45nz4Btd%2F0WrTsFBYAk%2FdkU2J%2BoeHEdaAhZDsB2D5stHj6Q6TNE6ku8nYMSXEWi%2FYhmJAQxEjZrxu8cS5c%2BnVBh6Ux48Ympuyda%2FWsME154wfxWsm%2BKBlThPbYxO1BEOM3H9HkPVoNmbr%2BPPf0pKPGEu9F7mgVjZhWJmhGG9tFjwMj0YwCnjQtjX34ZL5fiB%2FAnKa16jUiDmg&X-Amz-Signature=392104ab8a2a4cee6c28e117296672b12390a5eb07d035aada339d49764c9a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z45734AY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDyHsSbRna7QlcFHJ2u2j3kC1EREfYEGDkq5y3kdfU17QIhAPw7szZ48uwxCoWoJea3jow2c%2FejgKIWT4TM%2Fz%2Fe%2BunWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZYaDyy7WhKzOadR0q3AMemG1BrYAq5KBrHdXG3xntzyTLJXuckuIr8XDtcHlYE9E52oIEgQvN77ibrdzxezqwQaBAFlCbRg5IPvlfTZcL0M8vXoTyvaVItQYM%2FgJdfTCeB2F2RwR59UCZQraUr%2FMvJJujKpgDavS85WHFI6XJp7POJm91HxQu%2FMl9iegQsAEYnz4Ti5cUyN701Nwu4au6Tk16U9JGenzkQrG0PKg2ufgYh%2BRhcn7kaRSl5iAhf%2F%2FLQzUunj2s7UVp9DhsaYE8g8bjcSFhJ3W%2BvhwwvUbyBlwFn52Mo%2Fx2BFMfxHMPmF4yB7KBBKa5HtbR1nyJH6TliI4KuUJEptg9hTu46TvsO5szfs5Ad%2BYHLfRMA3IwACy%2BeBrffERV%2FfMQ%2BiDVqr1ObqjKIyJ0x7SofPtKVfpP7i9zddvWwlUcOTUIqWptu%2Bem9oL%2FBct0VVWmqhO09UQaDDQX4ZZhtT8tJLAeU0ZsLypyg50stgalbBc7ovf8aTo3g%2FrTeFDIaatgrzJq9gzlCZx5u8HDUhxYFctou6j54lI0VubfVEL2ITl9pGwZceKuD3F5S1PIs1vz2TNFmZhgrMsa1mROGL6%2Ft7KM3W%2F5wQ2udhDkmDZWhFwWS%2BmtdihEXPaUVbtW2YVWuTDzpenQBjqkAZpt%2BslfvG1CMHW45nz4Btd%2F0WrTsFBYAk%2FdkU2J%2BoeHEdaAhZDsB2D5stHj6Q6TNE6ku8nYMSXEWi%2FYhmJAQxEjZrxu8cS5c%2BnVBh6Ux48Ympuyda%2FWsME154wfxWsm%2BKBlThPbYxO1BEOM3H9HkPVoNmbr%2BPPf0pKPGEu9F7mgVjZhWJmhGG9tFjwMj0YwCnjQtjX34ZL5fiB%2FAnKa16jUiDmg&X-Amz-Signature=fd599a1607d86fce8a52ca10a127f95afcc0a86e03c621c0edc3f70c2ad30975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
