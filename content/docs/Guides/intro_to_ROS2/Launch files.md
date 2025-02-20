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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYTNSPZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqCTFVcT%2FL%2F9W5%2FM4CPrwBVrL2hmwk2VrK1IOFJwjUIgIhAIRgjdQW0Kv776xD2Ci8yvXrLQPBQD3%2Bjvc%2BTp%2FKErxLKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgtfpK%2B6cJB9KaHmwq3AM39OdFixJmxot2iXRrqIL8LDTd%2BK82ck7QVTSoIAyCcQKnMkqhtjVc4VbQC3yIU7MfoE1J8yyMES8TIPoJgDzZ5jpko8A9z66wIFbwN7T0t%2BqEaX2vuB6LRu6YO3PinowUAe5PsyS9krMOf7Dnz7M6EeuC6cf6he5ssIwSkcBJb%2BWggLwc%2FkATKL24dD59RxFvBuSSTBjEWTKM6x7mXd3R%2FVzWCBGXTGhootSPf92%2FW93cliK1X29HVpI1FASE7X1pT3lI0kpu4b8HamEbsMYAeGSEGK5ZRdU8aM9y34kUTQFpa1b1VuX4aiJMvMQlgxVRmnNrM0GIjlYNiqzE%2FXnAP%2FLvRtaPkiwiE7xfys6L%2FNAZQ6Jh0cN7rukc%2FJ8FcZlOKuNMjnMBg56J4gJakfIAZL1x0toBZLQMBRagPJkoNKahbZD%2B5CqTEgn%2BjlWgu%2FL71vwnXESozJF7zO1l9Bt%2Bvikv6Hnz3Sc614WygQHZcr63BfjKGMrFF3nVsIam6%2Ftl%2Bt%2BOdfSWgj6hLx9eINm7aSfK2SIAl4Llufas4Qxx%2BDL1E35eLfulbS4Hzr%2BUmIvIUHrm7bBgfXhbrufpNW5hgLDlrpdJkYJTy82QB4iaSomdIRaZHhZg79U7ZzDB8d29BjqkAfNwgiPk%2BES4O0L5ETiXFqPix9vNQKk%2FMsX0aLfc24rUxJxoUA0zo5LmUTe17PGSiwCpj1jq4RZfJIhryEtQg7I44OX08G178Sz5hah%2FEB5ai76Gum37mDhKkYQ8%2BKUnDQjY9nHfrpFlENtCeYcVejstwZorvitMEdFcdyL3K8lXiC8wNHpZTHk6Pdmta9z1e7oAnUN4upZUALk0ntwNvjG%2BL5Le&X-Amz-Signature=8e8be7d96b98b8b53808e00e7302eef24f53a82c198cc39d193127ed9c2bc71b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYTNSPZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqCTFVcT%2FL%2F9W5%2FM4CPrwBVrL2hmwk2VrK1IOFJwjUIgIhAIRgjdQW0Kv776xD2Ci8yvXrLQPBQD3%2Bjvc%2BTp%2FKErxLKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgtfpK%2B6cJB9KaHmwq3AM39OdFixJmxot2iXRrqIL8LDTd%2BK82ck7QVTSoIAyCcQKnMkqhtjVc4VbQC3yIU7MfoE1J8yyMES8TIPoJgDzZ5jpko8A9z66wIFbwN7T0t%2BqEaX2vuB6LRu6YO3PinowUAe5PsyS9krMOf7Dnz7M6EeuC6cf6he5ssIwSkcBJb%2BWggLwc%2FkATKL24dD59RxFvBuSSTBjEWTKM6x7mXd3R%2FVzWCBGXTGhootSPf92%2FW93cliK1X29HVpI1FASE7X1pT3lI0kpu4b8HamEbsMYAeGSEGK5ZRdU8aM9y34kUTQFpa1b1VuX4aiJMvMQlgxVRmnNrM0GIjlYNiqzE%2FXnAP%2FLvRtaPkiwiE7xfys6L%2FNAZQ6Jh0cN7rukc%2FJ8FcZlOKuNMjnMBg56J4gJakfIAZL1x0toBZLQMBRagPJkoNKahbZD%2B5CqTEgn%2BjlWgu%2FL71vwnXESozJF7zO1l9Bt%2Bvikv6Hnz3Sc614WygQHZcr63BfjKGMrFF3nVsIam6%2Ftl%2Bt%2BOdfSWgj6hLx9eINm7aSfK2SIAl4Llufas4Qxx%2BDL1E35eLfulbS4Hzr%2BUmIvIUHrm7bBgfXhbrufpNW5hgLDlrpdJkYJTy82QB4iaSomdIRaZHhZg79U7ZzDB8d29BjqkAfNwgiPk%2BES4O0L5ETiXFqPix9vNQKk%2FMsX0aLfc24rUxJxoUA0zo5LmUTe17PGSiwCpj1jq4RZfJIhryEtQg7I44OX08G178Sz5hah%2FEB5ai76Gum37mDhKkYQ8%2BKUnDQjY9nHfrpFlENtCeYcVejstwZorvitMEdFcdyL3K8lXiC8wNHpZTHk6Pdmta9z1e7oAnUN4upZUALk0ntwNvjG%2BL5Le&X-Amz-Signature=23fb9e66a609bb09b1f7a8841407e61f72141c2d5a0ff53461715dd9c4e9eb71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYTNSPZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqCTFVcT%2FL%2F9W5%2FM4CPrwBVrL2hmwk2VrK1IOFJwjUIgIhAIRgjdQW0Kv776xD2Ci8yvXrLQPBQD3%2Bjvc%2BTp%2FKErxLKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgtfpK%2B6cJB9KaHmwq3AM39OdFixJmxot2iXRrqIL8LDTd%2BK82ck7QVTSoIAyCcQKnMkqhtjVc4VbQC3yIU7MfoE1J8yyMES8TIPoJgDzZ5jpko8A9z66wIFbwN7T0t%2BqEaX2vuB6LRu6YO3PinowUAe5PsyS9krMOf7Dnz7M6EeuC6cf6he5ssIwSkcBJb%2BWggLwc%2FkATKL24dD59RxFvBuSSTBjEWTKM6x7mXd3R%2FVzWCBGXTGhootSPf92%2FW93cliK1X29HVpI1FASE7X1pT3lI0kpu4b8HamEbsMYAeGSEGK5ZRdU8aM9y34kUTQFpa1b1VuX4aiJMvMQlgxVRmnNrM0GIjlYNiqzE%2FXnAP%2FLvRtaPkiwiE7xfys6L%2FNAZQ6Jh0cN7rukc%2FJ8FcZlOKuNMjnMBg56J4gJakfIAZL1x0toBZLQMBRagPJkoNKahbZD%2B5CqTEgn%2BjlWgu%2FL71vwnXESozJF7zO1l9Bt%2Bvikv6Hnz3Sc614WygQHZcr63BfjKGMrFF3nVsIam6%2Ftl%2Bt%2BOdfSWgj6hLx9eINm7aSfK2SIAl4Llufas4Qxx%2BDL1E35eLfulbS4Hzr%2BUmIvIUHrm7bBgfXhbrufpNW5hgLDlrpdJkYJTy82QB4iaSomdIRaZHhZg79U7ZzDB8d29BjqkAfNwgiPk%2BES4O0L5ETiXFqPix9vNQKk%2FMsX0aLfc24rUxJxoUA0zo5LmUTe17PGSiwCpj1jq4RZfJIhryEtQg7I44OX08G178Sz5hah%2FEB5ai76Gum37mDhKkYQ8%2BKUnDQjY9nHfrpFlENtCeYcVejstwZorvitMEdFcdyL3K8lXiC8wNHpZTHk6Pdmta9z1e7oAnUN4upZUALk0ntwNvjG%2BL5Le&X-Amz-Signature=c5afb9b7e8d613fef5863e97096bebaf2430783832f5126b57ca83c8adcf7c55&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
