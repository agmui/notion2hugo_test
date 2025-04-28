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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3VLOKAI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W2OnY0Gqhmk7EoR%2FhBjHAQ0vOnbxVjZ%2B4TTGavvyPgIhAKxKuxKPgAWA0r%2Bgc%2FZirdKBHMqPLaQj3JkKPCDe%2Bl3pKv8DCG4QABoMNjM3NDIzMTgzODA1IgxLM00jzjVBp5S6Ihkq3APbq%2BACXnnax%2FdmAZXjBIquiQg9VBprcJFK%2FHOzwMSlAh4YDqVwXsWcFEPqXueP3T6K%2FC2M1%2FtGRupgtR2CWfJCREusOp%2FBOzhMbWB1CG7GnYGbZZv0YwI9SLSo7MELnXPgMEodapj4e%2B6t9adEKRswSPHhB%2BJU7xPo0haoUFCcHI43JH984fOcmV6EC1w7nIIytBf9KppZ6iOUdiZTk9bULuzsUJEN%2F5hi873iTs5pp9vlENhKzeLVcPaRsh5L%2FxQ1AhPbr9NZpBanuKsj%2Bssre2RYcA%2B5bq%2ByXSZ40ZA7Ie28qS5VZpMSaruisHu%2Bh3MqeJ0TRSTHcZ9Xdb86yrjZ8EnQQrvC1CnrgNuGx6IwTN54ZSWxz0JTbEYU9uQD%2BT%2F%2BdAA9SSGeBFcHyxYg0h%2Bd8AgHLff%2FmiAiYH3BARS2Fyg1aDQQF6%2BGbPniPzF8WieJABqr7e2qIUAnoNxlVZ%2BrOxb1f%2BkWZTxwe9IgaiLigJVz6qGk3sMLREWB4g0haksHvFUaIQUmzrlF8UJy2KagaSwq6nP5m4yyv4Q5buMP7aS2Pp4yD8wv5ZHsZgT0Hx%2Fk%2FDhJfjU6MRG08YAb0%2FYVlqxRPpjxDVGxnks9X3t6A4Nfhd%2B%2B4JrcY7pxeTCYlLzABjqkAR%2F5ppSNPeUYnJVx4c9IaPM6X4dyl4cM1vB7GSR9KpGuEr%2FEl6T%2FKSprAaJRuTHkid5M3QQMAKDpvq17W3gkxW15VZMmJni3exmO0n7hJQr%2FLZSMPocCWVi%2FU3ZwZbeIghJD91mOzDYsMajO%2BP%2FbpSLyrKkDqN%2FAkntENFvaS22TcEV7iJb0TSyyR3Glt5LTEF%2FRKtu%2FdS959%2FscObBVwldw24a%2F&X-Amz-Signature=75347e524b2d49ce31a2d9e5b23809953c60f82253fcb79296051f7baec28920&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3VLOKAI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W2OnY0Gqhmk7EoR%2FhBjHAQ0vOnbxVjZ%2B4TTGavvyPgIhAKxKuxKPgAWA0r%2Bgc%2FZirdKBHMqPLaQj3JkKPCDe%2Bl3pKv8DCG4QABoMNjM3NDIzMTgzODA1IgxLM00jzjVBp5S6Ihkq3APbq%2BACXnnax%2FdmAZXjBIquiQg9VBprcJFK%2FHOzwMSlAh4YDqVwXsWcFEPqXueP3T6K%2FC2M1%2FtGRupgtR2CWfJCREusOp%2FBOzhMbWB1CG7GnYGbZZv0YwI9SLSo7MELnXPgMEodapj4e%2B6t9adEKRswSPHhB%2BJU7xPo0haoUFCcHI43JH984fOcmV6EC1w7nIIytBf9KppZ6iOUdiZTk9bULuzsUJEN%2F5hi873iTs5pp9vlENhKzeLVcPaRsh5L%2FxQ1AhPbr9NZpBanuKsj%2Bssre2RYcA%2B5bq%2ByXSZ40ZA7Ie28qS5VZpMSaruisHu%2Bh3MqeJ0TRSTHcZ9Xdb86yrjZ8EnQQrvC1CnrgNuGx6IwTN54ZSWxz0JTbEYU9uQD%2BT%2F%2BdAA9SSGeBFcHyxYg0h%2Bd8AgHLff%2FmiAiYH3BARS2Fyg1aDQQF6%2BGbPniPzF8WieJABqr7e2qIUAnoNxlVZ%2BrOxb1f%2BkWZTxwe9IgaiLigJVz6qGk3sMLREWB4g0haksHvFUaIQUmzrlF8UJy2KagaSwq6nP5m4yyv4Q5buMP7aS2Pp4yD8wv5ZHsZgT0Hx%2Fk%2FDhJfjU6MRG08YAb0%2FYVlqxRPpjxDVGxnks9X3t6A4Nfhd%2B%2B4JrcY7pxeTCYlLzABjqkAR%2F5ppSNPeUYnJVx4c9IaPM6X4dyl4cM1vB7GSR9KpGuEr%2FEl6T%2FKSprAaJRuTHkid5M3QQMAKDpvq17W3gkxW15VZMmJni3exmO0n7hJQr%2FLZSMPocCWVi%2FU3ZwZbeIghJD91mOzDYsMajO%2BP%2FbpSLyrKkDqN%2FAkntENFvaS22TcEV7iJb0TSyyR3Glt5LTEF%2FRKtu%2FdS959%2FscObBVwldw24a%2F&X-Amz-Signature=d894d1a1c4824b400c4bc4be618274a91dc73459774b45e9de038f0cdda92ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3VLOKAI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W2OnY0Gqhmk7EoR%2FhBjHAQ0vOnbxVjZ%2B4TTGavvyPgIhAKxKuxKPgAWA0r%2Bgc%2FZirdKBHMqPLaQj3JkKPCDe%2Bl3pKv8DCG4QABoMNjM3NDIzMTgzODA1IgxLM00jzjVBp5S6Ihkq3APbq%2BACXnnax%2FdmAZXjBIquiQg9VBprcJFK%2FHOzwMSlAh4YDqVwXsWcFEPqXueP3T6K%2FC2M1%2FtGRupgtR2CWfJCREusOp%2FBOzhMbWB1CG7GnYGbZZv0YwI9SLSo7MELnXPgMEodapj4e%2B6t9adEKRswSPHhB%2BJU7xPo0haoUFCcHI43JH984fOcmV6EC1w7nIIytBf9KppZ6iOUdiZTk9bULuzsUJEN%2F5hi873iTs5pp9vlENhKzeLVcPaRsh5L%2FxQ1AhPbr9NZpBanuKsj%2Bssre2RYcA%2B5bq%2ByXSZ40ZA7Ie28qS5VZpMSaruisHu%2Bh3MqeJ0TRSTHcZ9Xdb86yrjZ8EnQQrvC1CnrgNuGx6IwTN54ZSWxz0JTbEYU9uQD%2BT%2F%2BdAA9SSGeBFcHyxYg0h%2Bd8AgHLff%2FmiAiYH3BARS2Fyg1aDQQF6%2BGbPniPzF8WieJABqr7e2qIUAnoNxlVZ%2BrOxb1f%2BkWZTxwe9IgaiLigJVz6qGk3sMLREWB4g0haksHvFUaIQUmzrlF8UJy2KagaSwq6nP5m4yyv4Q5buMP7aS2Pp4yD8wv5ZHsZgT0Hx%2Fk%2FDhJfjU6MRG08YAb0%2FYVlqxRPpjxDVGxnks9X3t6A4Nfhd%2B%2B4JrcY7pxeTCYlLzABjqkAR%2F5ppSNPeUYnJVx4c9IaPM6X4dyl4cM1vB7GSR9KpGuEr%2FEl6T%2FKSprAaJRuTHkid5M3QQMAKDpvq17W3gkxW15VZMmJni3exmO0n7hJQr%2FLZSMPocCWVi%2FU3ZwZbeIghJD91mOzDYsMajO%2BP%2FbpSLyrKkDqN%2FAkntENFvaS22TcEV7iJb0TSyyR3Glt5LTEF%2FRKtu%2FdS959%2FscObBVwldw24a%2F&X-Amz-Signature=cd503f0b2c7c9441effdb9993d54680b982c8d28915ac72fc16641119e28400f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
