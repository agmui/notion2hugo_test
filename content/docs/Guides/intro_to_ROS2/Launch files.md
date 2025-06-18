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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJYW5QV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCv7YyqQt1b8KoHOLjWeJJrpSg2h4Cz3JGoO5uOGFajgIhAOwopRiI4c5kvQ%2BMvZNwScB%2Bh8SzbzHDqv6u8dYMDfhdKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1gZmlcOVRxxjUYN0q3AO4cS1NiyiWgjkZqbXKMHpmSvkz4IK70eew0QbdQv2SNaNbOTtCWWdiReAnHSY%2FXduMg2XXMMoOepNF1tedTFKcnERWp0342eaPo0xp4oCMrjGr6xXHRiBClRxvLokdz6Ao7KvpRV4h%2FB4j94I0TkBKNwbU4Pd3Qh6CUqVNeR4lsHUmTLNTb2fROh7XlIY584xGFWcstAn%2BBczn12ST0G9id3Ty43aisDp8%2FV67gzbKR3mllPqyojoyuxjM0Mkn7JMVp7zkuTzsMz6saxeXaMXyximVnFWa2vGOpRyCOzxA9BF7Et6IwTTR9aUoHlFuaTcIyoMUNMGIucSsMDqbuNyxNjpIW1gfHzUiGBv7B7cTtzmo1Nv7Zj845Ib%2FUg7rc5rQFe9JL3EC2jpXXqHv4BitqECU%2Bo6FrK78Btr0BXAuV4BB6jP9C0%2F%2FklF18fRdI2%2BCb%2BE3ZDyRkNcPqYW5SI%2FppvdapORWVlrnHZfG%2BhqGcoPpRwnQxq1R7ANKmxM1P%2BfWtMOYRdPPTl7MT%2FLEceTvs4%2FxKY0ztyVwpohf2I2rKxIL0EeAWI1Ks6m%2FGZ%2FwegLsoLN9yy%2FFPvZnKeuifzRaN8AMaSQhngMwYBBnSLdsVTuG9NCWkyKyJJd2TzDroMjCBjqkAVs%2FGcXdDOMxk6Nkgnz4W9CxrLNmYFe%2FJLj205lEknXceUb8byB%2FNq9wCZQKqQkSNOUpF%2Bgl4wevedFIJQfE5%2FmQtWKg3zoOYEgmmnZwHfSoTt%2FMvFta4URC5FlIUtt9jDQYllUj49H8lOMfVUwVo6KrjYt%2FxGP6eBssjdFiZ6EIFtqBriGbm5QrIeHPhVenwsDTnaqxrulUzmsvaRFA4xYs%2BeTc&X-Amz-Signature=bfd609727835d86e40255836a2ef2e040f08964b90901b5ad1cdd59118b67f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJYW5QV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCv7YyqQt1b8KoHOLjWeJJrpSg2h4Cz3JGoO5uOGFajgIhAOwopRiI4c5kvQ%2BMvZNwScB%2Bh8SzbzHDqv6u8dYMDfhdKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1gZmlcOVRxxjUYN0q3AO4cS1NiyiWgjkZqbXKMHpmSvkz4IK70eew0QbdQv2SNaNbOTtCWWdiReAnHSY%2FXduMg2XXMMoOepNF1tedTFKcnERWp0342eaPo0xp4oCMrjGr6xXHRiBClRxvLokdz6Ao7KvpRV4h%2FB4j94I0TkBKNwbU4Pd3Qh6CUqVNeR4lsHUmTLNTb2fROh7XlIY584xGFWcstAn%2BBczn12ST0G9id3Ty43aisDp8%2FV67gzbKR3mllPqyojoyuxjM0Mkn7JMVp7zkuTzsMz6saxeXaMXyximVnFWa2vGOpRyCOzxA9BF7Et6IwTTR9aUoHlFuaTcIyoMUNMGIucSsMDqbuNyxNjpIW1gfHzUiGBv7B7cTtzmo1Nv7Zj845Ib%2FUg7rc5rQFe9JL3EC2jpXXqHv4BitqECU%2Bo6FrK78Btr0BXAuV4BB6jP9C0%2F%2FklF18fRdI2%2BCb%2BE3ZDyRkNcPqYW5SI%2FppvdapORWVlrnHZfG%2BhqGcoPpRwnQxq1R7ANKmxM1P%2BfWtMOYRdPPTl7MT%2FLEceTvs4%2FxKY0ztyVwpohf2I2rKxIL0EeAWI1Ks6m%2FGZ%2FwegLsoLN9yy%2FFPvZnKeuifzRaN8AMaSQhngMwYBBnSLdsVTuG9NCWkyKyJJd2TzDroMjCBjqkAVs%2FGcXdDOMxk6Nkgnz4W9CxrLNmYFe%2FJLj205lEknXceUb8byB%2FNq9wCZQKqQkSNOUpF%2Bgl4wevedFIJQfE5%2FmQtWKg3zoOYEgmmnZwHfSoTt%2FMvFta4URC5FlIUtt9jDQYllUj49H8lOMfVUwVo6KrjYt%2FxGP6eBssjdFiZ6EIFtqBriGbm5QrIeHPhVenwsDTnaqxrulUzmsvaRFA4xYs%2BeTc&X-Amz-Signature=b5bb9412b102bf1d7f20b6c93c88eddbd40da4d40ab2662c3a43390ac613fb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJYW5QV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCv7YyqQt1b8KoHOLjWeJJrpSg2h4Cz3JGoO5uOGFajgIhAOwopRiI4c5kvQ%2BMvZNwScB%2Bh8SzbzHDqv6u8dYMDfhdKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1gZmlcOVRxxjUYN0q3AO4cS1NiyiWgjkZqbXKMHpmSvkz4IK70eew0QbdQv2SNaNbOTtCWWdiReAnHSY%2FXduMg2XXMMoOepNF1tedTFKcnERWp0342eaPo0xp4oCMrjGr6xXHRiBClRxvLokdz6Ao7KvpRV4h%2FB4j94I0TkBKNwbU4Pd3Qh6CUqVNeR4lsHUmTLNTb2fROh7XlIY584xGFWcstAn%2BBczn12ST0G9id3Ty43aisDp8%2FV67gzbKR3mllPqyojoyuxjM0Mkn7JMVp7zkuTzsMz6saxeXaMXyximVnFWa2vGOpRyCOzxA9BF7Et6IwTTR9aUoHlFuaTcIyoMUNMGIucSsMDqbuNyxNjpIW1gfHzUiGBv7B7cTtzmo1Nv7Zj845Ib%2FUg7rc5rQFe9JL3EC2jpXXqHv4BitqECU%2Bo6FrK78Btr0BXAuV4BB6jP9C0%2F%2FklF18fRdI2%2BCb%2BE3ZDyRkNcPqYW5SI%2FppvdapORWVlrnHZfG%2BhqGcoPpRwnQxq1R7ANKmxM1P%2BfWtMOYRdPPTl7MT%2FLEceTvs4%2FxKY0ztyVwpohf2I2rKxIL0EeAWI1Ks6m%2FGZ%2FwegLsoLN9yy%2FFPvZnKeuifzRaN8AMaSQhngMwYBBnSLdsVTuG9NCWkyKyJJd2TzDroMjCBjqkAVs%2FGcXdDOMxk6Nkgnz4W9CxrLNmYFe%2FJLj205lEknXceUb8byB%2FNq9wCZQKqQkSNOUpF%2Bgl4wevedFIJQfE5%2FmQtWKg3zoOYEgmmnZwHfSoTt%2FMvFta4URC5FlIUtt9jDQYllUj49H8lOMfVUwVo6KrjYt%2FxGP6eBssjdFiZ6EIFtqBriGbm5QrIeHPhVenwsDTnaqxrulUzmsvaRFA4xYs%2BeTc&X-Amz-Signature=4792dcaa45b98ecdf68def5036fe92b4089c50d5556e74f94b7c223b7a58a81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
