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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4344S76%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID2ckGUk4YqiudbC12eVNjPXEfQlUixNU2cgmF0fMyGgAiBRm3m9A2PQBK7xat2TuhHiWkMOW3FRKqgTAfYofM9%2FPyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMR7DuAm8AJoYTGROuKtwD%2FV3HJBdplherN%2Ff5iqO3%2F8sLo2ND74uvzpLwYmEMl69i8hfsO7ZFLtGGCmZc87X%2BQIz2eaZMOvma6VeIQ%2Bfs%2BhbTR9Gnf2rAefPbkAtRgIDeJHtoZugZ6FfDnqUDdoufaYE%2BtfavB3C3ltzTGVj6tEAIB6k%2FTotbqTtoxlZgP5Xd2Of3seeJDdt9%2FvI3P9prA4oQLahq5IhBY5hQZPG9oNeXUVu72QuZ7KMh%2BFq6vNbQtWCICSGqUtS9y7hth52E64xocsksGvMGK1uKJ5v9tbvI3btum8u%2BOe7VNqn3QSnUQeElCQiDVF0atNMJ3QL3a5EgEuw9fdsssKVZsYmmFZie8jX6X0GOaskWLHs87zqc8ypkd%2BGXTde%2BNaJuQWSZR5NhJza74CdKEnlEm%2FH0ykjilwSW06UtFdmXOPj15mTlVgwDx%2B8HEvkS676jU0ASaDLNmBPRdiQIiCGb1V5sfZAww9kUm%2FFd5hvfpBxJs0VV9JHIKUVIGod2LOVWBH4XUXi3gcjO%2BgPmhy%2FegL6k%2BfbTVxelBUbC53TInezban0qEDs81CYMvTXE1SNBdok1pBMrYvEOZ6ULX4O3dRfadX4BtILu%2B37U8ypmigJGsJ6HfFURhTbCnGCwDTow0%2BKevwY6pgEqQ2GOVgTpmwufPdvfSQqPBUZRTv5ClCjbDAG6oxI%2Bw8hx7IukYBDCAF4yCjE7uaLrmP5DdZHXi068VYb3g9HnkHPgY46BEnvFhr8Q3IWTSy7GcPLjW89LN%2BhjXIdOv6JWHKlbkSN7HogkwvKpSwVouuii81a9fW9VtQuF18yoI8HQZ%2Br%2BeuUMnVu5ZxiJegF7DR7FBDBRVDbXgHf901xwwaPDBWsx&X-Amz-Signature=42f24a47373752605c540ad11d5a87e64abb8e5221edb13a0db331a194cb611f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4344S76%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID2ckGUk4YqiudbC12eVNjPXEfQlUixNU2cgmF0fMyGgAiBRm3m9A2PQBK7xat2TuhHiWkMOW3FRKqgTAfYofM9%2FPyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMR7DuAm8AJoYTGROuKtwD%2FV3HJBdplherN%2Ff5iqO3%2F8sLo2ND74uvzpLwYmEMl69i8hfsO7ZFLtGGCmZc87X%2BQIz2eaZMOvma6VeIQ%2Bfs%2BhbTR9Gnf2rAefPbkAtRgIDeJHtoZugZ6FfDnqUDdoufaYE%2BtfavB3C3ltzTGVj6tEAIB6k%2FTotbqTtoxlZgP5Xd2Of3seeJDdt9%2FvI3P9prA4oQLahq5IhBY5hQZPG9oNeXUVu72QuZ7KMh%2BFq6vNbQtWCICSGqUtS9y7hth52E64xocsksGvMGK1uKJ5v9tbvI3btum8u%2BOe7VNqn3QSnUQeElCQiDVF0atNMJ3QL3a5EgEuw9fdsssKVZsYmmFZie8jX6X0GOaskWLHs87zqc8ypkd%2BGXTde%2BNaJuQWSZR5NhJza74CdKEnlEm%2FH0ykjilwSW06UtFdmXOPj15mTlVgwDx%2B8HEvkS676jU0ASaDLNmBPRdiQIiCGb1V5sfZAww9kUm%2FFd5hvfpBxJs0VV9JHIKUVIGod2LOVWBH4XUXi3gcjO%2BgPmhy%2FegL6k%2BfbTVxelBUbC53TInezban0qEDs81CYMvTXE1SNBdok1pBMrYvEOZ6ULX4O3dRfadX4BtILu%2B37U8ypmigJGsJ6HfFURhTbCnGCwDTow0%2BKevwY6pgEqQ2GOVgTpmwufPdvfSQqPBUZRTv5ClCjbDAG6oxI%2Bw8hx7IukYBDCAF4yCjE7uaLrmP5DdZHXi068VYb3g9HnkHPgY46BEnvFhr8Q3IWTSy7GcPLjW89LN%2BhjXIdOv6JWHKlbkSN7HogkwvKpSwVouuii81a9fW9VtQuF18yoI8HQZ%2Br%2BeuUMnVu5ZxiJegF7DR7FBDBRVDbXgHf901xwwaPDBWsx&X-Amz-Signature=08a09fb3f5a658dd4a1dda6d919b2b6bdc78ee3cabc5fee7d7eaf6e6ca25b9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4344S76%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID2ckGUk4YqiudbC12eVNjPXEfQlUixNU2cgmF0fMyGgAiBRm3m9A2PQBK7xat2TuhHiWkMOW3FRKqgTAfYofM9%2FPyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMR7DuAm8AJoYTGROuKtwD%2FV3HJBdplherN%2Ff5iqO3%2F8sLo2ND74uvzpLwYmEMl69i8hfsO7ZFLtGGCmZc87X%2BQIz2eaZMOvma6VeIQ%2Bfs%2BhbTR9Gnf2rAefPbkAtRgIDeJHtoZugZ6FfDnqUDdoufaYE%2BtfavB3C3ltzTGVj6tEAIB6k%2FTotbqTtoxlZgP5Xd2Of3seeJDdt9%2FvI3P9prA4oQLahq5IhBY5hQZPG9oNeXUVu72QuZ7KMh%2BFq6vNbQtWCICSGqUtS9y7hth52E64xocsksGvMGK1uKJ5v9tbvI3btum8u%2BOe7VNqn3QSnUQeElCQiDVF0atNMJ3QL3a5EgEuw9fdsssKVZsYmmFZie8jX6X0GOaskWLHs87zqc8ypkd%2BGXTde%2BNaJuQWSZR5NhJza74CdKEnlEm%2FH0ykjilwSW06UtFdmXOPj15mTlVgwDx%2B8HEvkS676jU0ASaDLNmBPRdiQIiCGb1V5sfZAww9kUm%2FFd5hvfpBxJs0VV9JHIKUVIGod2LOVWBH4XUXi3gcjO%2BgPmhy%2FegL6k%2BfbTVxelBUbC53TInezban0qEDs81CYMvTXE1SNBdok1pBMrYvEOZ6ULX4O3dRfadX4BtILu%2B37U8ypmigJGsJ6HfFURhTbCnGCwDTow0%2BKevwY6pgEqQ2GOVgTpmwufPdvfSQqPBUZRTv5ClCjbDAG6oxI%2Bw8hx7IukYBDCAF4yCjE7uaLrmP5DdZHXi068VYb3g9HnkHPgY46BEnvFhr8Q3IWTSy7GcPLjW89LN%2BhjXIdOv6JWHKlbkSN7HogkwvKpSwVouuii81a9fW9VtQuF18yoI8HQZ%2Br%2BeuUMnVu5ZxiJegF7DR7FBDBRVDbXgHf901xwwaPDBWsx&X-Amz-Signature=c37ef51733e7e399ec48fa8b03184518e9f9ca0a3e17cc3fe96b747037405e41&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
