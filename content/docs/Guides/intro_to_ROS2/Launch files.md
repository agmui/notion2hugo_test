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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HJ3TKT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG36vfdh3ba9AEsWIjxJmixqynE58djGSOji2SzzdaD5AiAG9h6R3gEbHDR%2BC5eG6T8DlwTYNtRxj1opyUK%2BIoQ6uyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ngWNCipL%2FCbs4nBKtwD6aRS74zZR8WacqyYMgdxXQ3Stk17bD2ZPuX5MAnelx1Ho6CtPsbOUuKncFJT1wqxTZH8njm9D8CSNzJfSpoPSeUZLL0X5cErwcVt38wlWIMglT2kZ4O%2Fm0aSUHgjbaIRLNFw6HeMhGcbAyprVRPkNd5WRnj0U81Ymj9NHaOMGSQUV8i7nSEfzffPLGaM9MnhK5jMYXdbNDok%2FUDt31P5XbBqwtrtbKo74OWlL%2FcYKppi%2FzG2ZzBXdUkw0jqG5aoSq%2BpDMBnXzN8ErttdykCIfCKVVwPvqPM%2BrKtSwh2vDGH1eDXKFwcov4ltEgTiuLd%2FsZic5w1XEKf1sGMNJOGncGpviFgNZUK4toU4Epf5gToNgCE46doAIZCN6NcdmlA57QWezIu%2F9234Giac0m7ePiLPvEx9v7jue%2BE7ezXj4VZ7YVewHQ2OShee0AY14UgUEd9%2FN3JwzMNZGSzqsueDuo41ChpOd6j2gNe3AUSCjngx8%2BHjCjzrOkEn5BPGF6%2BDYP1407XNZL6KvUDjZISfKzKuD7tl%2F5NekoTjZHxYIpVCQahU2UXtks7pJiyP%2FJjGworgZqGDnkB6ps44Fdz%2Fuhdm53SRF07q%2Fp7ynfuht7TiEU5eFMNEHkZKIw4wupi1vQY6pgEM4%2B4fHAMpZjyacQQjs%2Byq%2B8UP2%2Ba9qdQqgHCtoGN6A4kRNKJlMSxlbgBhc92A6o3rWgyWDOP5t63mX4fZbVzKBFztPOrHHCIecuzvQxl%2B9XI8f8ZCVsNvkfjkUc6TJqLFpWDMn2AXK0ZE%2F1y0672%2F0UscPL%2B6D9PV5g0Hig9lA51ELXyJN%2BHnWWUrcrgRDQtUegYzzbwxtL3jWu0yyif3TiMx0Ziy&X-Amz-Signature=875adec8f7b40f76fa65dbd5f6bb54b38a0a562fe2c945377fff83613a6ae123&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HJ3TKT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG36vfdh3ba9AEsWIjxJmixqynE58djGSOji2SzzdaD5AiAG9h6R3gEbHDR%2BC5eG6T8DlwTYNtRxj1opyUK%2BIoQ6uyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ngWNCipL%2FCbs4nBKtwD6aRS74zZR8WacqyYMgdxXQ3Stk17bD2ZPuX5MAnelx1Ho6CtPsbOUuKncFJT1wqxTZH8njm9D8CSNzJfSpoPSeUZLL0X5cErwcVt38wlWIMglT2kZ4O%2Fm0aSUHgjbaIRLNFw6HeMhGcbAyprVRPkNd5WRnj0U81Ymj9NHaOMGSQUV8i7nSEfzffPLGaM9MnhK5jMYXdbNDok%2FUDt31P5XbBqwtrtbKo74OWlL%2FcYKppi%2FzG2ZzBXdUkw0jqG5aoSq%2BpDMBnXzN8ErttdykCIfCKVVwPvqPM%2BrKtSwh2vDGH1eDXKFwcov4ltEgTiuLd%2FsZic5w1XEKf1sGMNJOGncGpviFgNZUK4toU4Epf5gToNgCE46doAIZCN6NcdmlA57QWezIu%2F9234Giac0m7ePiLPvEx9v7jue%2BE7ezXj4VZ7YVewHQ2OShee0AY14UgUEd9%2FN3JwzMNZGSzqsueDuo41ChpOd6j2gNe3AUSCjngx8%2BHjCjzrOkEn5BPGF6%2BDYP1407XNZL6KvUDjZISfKzKuD7tl%2F5NekoTjZHxYIpVCQahU2UXtks7pJiyP%2FJjGworgZqGDnkB6ps44Fdz%2Fuhdm53SRF07q%2Fp7ynfuht7TiEU5eFMNEHkZKIw4wupi1vQY6pgEM4%2B4fHAMpZjyacQQjs%2Byq%2B8UP2%2Ba9qdQqgHCtoGN6A4kRNKJlMSxlbgBhc92A6o3rWgyWDOP5t63mX4fZbVzKBFztPOrHHCIecuzvQxl%2B9XI8f8ZCVsNvkfjkUc6TJqLFpWDMn2AXK0ZE%2F1y0672%2F0UscPL%2B6D9PV5g0Hig9lA51ELXyJN%2BHnWWUrcrgRDQtUegYzzbwxtL3jWu0yyif3TiMx0Ziy&X-Amz-Signature=a90321c5fddd977e9eaa1d7cb99ba8f03fe4830deeea0b6cdf18c555c8ab2f04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HJ3TKT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG36vfdh3ba9AEsWIjxJmixqynE58djGSOji2SzzdaD5AiAG9h6R3gEbHDR%2BC5eG6T8DlwTYNtRxj1opyUK%2BIoQ6uyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ngWNCipL%2FCbs4nBKtwD6aRS74zZR8WacqyYMgdxXQ3Stk17bD2ZPuX5MAnelx1Ho6CtPsbOUuKncFJT1wqxTZH8njm9D8CSNzJfSpoPSeUZLL0X5cErwcVt38wlWIMglT2kZ4O%2Fm0aSUHgjbaIRLNFw6HeMhGcbAyprVRPkNd5WRnj0U81Ymj9NHaOMGSQUV8i7nSEfzffPLGaM9MnhK5jMYXdbNDok%2FUDt31P5XbBqwtrtbKo74OWlL%2FcYKppi%2FzG2ZzBXdUkw0jqG5aoSq%2BpDMBnXzN8ErttdykCIfCKVVwPvqPM%2BrKtSwh2vDGH1eDXKFwcov4ltEgTiuLd%2FsZic5w1XEKf1sGMNJOGncGpviFgNZUK4toU4Epf5gToNgCE46doAIZCN6NcdmlA57QWezIu%2F9234Giac0m7ePiLPvEx9v7jue%2BE7ezXj4VZ7YVewHQ2OShee0AY14UgUEd9%2FN3JwzMNZGSzqsueDuo41ChpOd6j2gNe3AUSCjngx8%2BHjCjzrOkEn5BPGF6%2BDYP1407XNZL6KvUDjZISfKzKuD7tl%2F5NekoTjZHxYIpVCQahU2UXtks7pJiyP%2FJjGworgZqGDnkB6ps44Fdz%2Fuhdm53SRF07q%2Fp7ynfuht7TiEU5eFMNEHkZKIw4wupi1vQY6pgEM4%2B4fHAMpZjyacQQjs%2Byq%2B8UP2%2Ba9qdQqgHCtoGN6A4kRNKJlMSxlbgBhc92A6o3rWgyWDOP5t63mX4fZbVzKBFztPOrHHCIecuzvQxl%2B9XI8f8ZCVsNvkfjkUc6TJqLFpWDMn2AXK0ZE%2F1y0672%2F0UscPL%2B6D9PV5g0Hig9lA51ELXyJN%2BHnWWUrcrgRDQtUegYzzbwxtL3jWu0yyif3TiMx0Ziy&X-Amz-Signature=effeb4f6a71a205fc35c0cd1658adfd50a636129a94d85ee47c5c3775b13b3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
