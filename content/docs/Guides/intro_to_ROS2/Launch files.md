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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y366FK53%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcKSE5GFd9%2F34pGL%2FztqyMf9TcxiA2o1jMgBnN1ipBPAiEA8%2FSw1Dy84iLS1eKv4rqcQAvs5cWiaEn6qsM%2F5l3ZAO0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVkKzZ%2BXhJVHoJwTSrcA4FphjMNt6S7Yq%2F6V%2F1g4kCkE0LfJljF%2BlOPMPej7MAGG%2BuF3p60swRyx%2Bvb6yd8ijKZXAR93KzVhFC7jjL6%2BDtM3gmJVIPNT6meFibkXAf0ZgrSkzrpcFfgT0zq70c9TBWUVXNFpS%2B59J4IT40b8VgBndvpUnRNF6h%2FBsI6ypduxAidzCNCSL6voZgQFrtctWbHjhUiHwWxmi2O%2FGQ2he%2F68fMtPBPRtuYiTj5HK7lEXjkUSxRSG9lruw9PaKtUI3ohMLGN8wJafVbIz45%2BXwhZYwp9Ho6e56LAuuEu7ldywRwPQlYL87NaX0m0ENULymyugzLFit2JeuCDyI6hQCDKf93CIpJ2J0PR%2Fiq1qS7fh4niKLp386wjxe%2BjXlRa3j7jILe4reB1P71uRMlvZi50niJcbbMbVRC4VtQBcy7OCIiCmZvUatOykEldZs3k2hawStvSiCLL8Dy0yvHCaWCx8cBmrACJhhjKilMoti8551nY6Ccudw0LweoyWAqMSKn6EguSPLobXYta1gLZbnsCgRChZk%2B9VJU4f9ENW0GHn8M%2BcLdiTYTRaBZE%2BnXUlJU428LDQGu5Sn9LLvFRG%2BCqZ%2FFyOM3BMylqtaBEto8cljtgzPBbBVmlySXNMMGMuMAGOqUBj%2BqLcelK6m%2BNeKiqGBXDdpN4XFvE8cieafrhuSbs5e9O1x4qudqyuvpQglWiYtaQEkKv55lYY%2Fb3App13zEuKgHGHTCvMTpcoYgzA7UqPLXH1ZB8giY4gUhasyXcOJm4Lqix8GVTaLdS9RoSIqqD6q%2Fez3H8t8Dd7yOrjURJqOf2thflKrVdLjsWVCaM14z%2BM3VumBZUwCBZlKcrlhNYPbR4s7z%2B&X-Amz-Signature=f7d9002cb83e98891547764caf1e9aa2bfbacdc8834ac079769fba3e1c165332&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y366FK53%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcKSE5GFd9%2F34pGL%2FztqyMf9TcxiA2o1jMgBnN1ipBPAiEA8%2FSw1Dy84iLS1eKv4rqcQAvs5cWiaEn6qsM%2F5l3ZAO0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVkKzZ%2BXhJVHoJwTSrcA4FphjMNt6S7Yq%2F6V%2F1g4kCkE0LfJljF%2BlOPMPej7MAGG%2BuF3p60swRyx%2Bvb6yd8ijKZXAR93KzVhFC7jjL6%2BDtM3gmJVIPNT6meFibkXAf0ZgrSkzrpcFfgT0zq70c9TBWUVXNFpS%2B59J4IT40b8VgBndvpUnRNF6h%2FBsI6ypduxAidzCNCSL6voZgQFrtctWbHjhUiHwWxmi2O%2FGQ2he%2F68fMtPBPRtuYiTj5HK7lEXjkUSxRSG9lruw9PaKtUI3ohMLGN8wJafVbIz45%2BXwhZYwp9Ho6e56LAuuEu7ldywRwPQlYL87NaX0m0ENULymyugzLFit2JeuCDyI6hQCDKf93CIpJ2J0PR%2Fiq1qS7fh4niKLp386wjxe%2BjXlRa3j7jILe4reB1P71uRMlvZi50niJcbbMbVRC4VtQBcy7OCIiCmZvUatOykEldZs3k2hawStvSiCLL8Dy0yvHCaWCx8cBmrACJhhjKilMoti8551nY6Ccudw0LweoyWAqMSKn6EguSPLobXYta1gLZbnsCgRChZk%2B9VJU4f9ENW0GHn8M%2BcLdiTYTRaBZE%2BnXUlJU428LDQGu5Sn9LLvFRG%2BCqZ%2FFyOM3BMylqtaBEto8cljtgzPBbBVmlySXNMMGMuMAGOqUBj%2BqLcelK6m%2BNeKiqGBXDdpN4XFvE8cieafrhuSbs5e9O1x4qudqyuvpQglWiYtaQEkKv55lYY%2Fb3App13zEuKgHGHTCvMTpcoYgzA7UqPLXH1ZB8giY4gUhasyXcOJm4Lqix8GVTaLdS9RoSIqqD6q%2Fez3H8t8Dd7yOrjURJqOf2thflKrVdLjsWVCaM14z%2BM3VumBZUwCBZlKcrlhNYPbR4s7z%2B&X-Amz-Signature=246373a7fecee6151c24da2e5432448126f19cbfa697af4fbbfcf9049b33d226&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y366FK53%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcKSE5GFd9%2F34pGL%2FztqyMf9TcxiA2o1jMgBnN1ipBPAiEA8%2FSw1Dy84iLS1eKv4rqcQAvs5cWiaEn6qsM%2F5l3ZAO0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVkKzZ%2BXhJVHoJwTSrcA4FphjMNt6S7Yq%2F6V%2F1g4kCkE0LfJljF%2BlOPMPej7MAGG%2BuF3p60swRyx%2Bvb6yd8ijKZXAR93KzVhFC7jjL6%2BDtM3gmJVIPNT6meFibkXAf0ZgrSkzrpcFfgT0zq70c9TBWUVXNFpS%2B59J4IT40b8VgBndvpUnRNF6h%2FBsI6ypduxAidzCNCSL6voZgQFrtctWbHjhUiHwWxmi2O%2FGQ2he%2F68fMtPBPRtuYiTj5HK7lEXjkUSxRSG9lruw9PaKtUI3ohMLGN8wJafVbIz45%2BXwhZYwp9Ho6e56LAuuEu7ldywRwPQlYL87NaX0m0ENULymyugzLFit2JeuCDyI6hQCDKf93CIpJ2J0PR%2Fiq1qS7fh4niKLp386wjxe%2BjXlRa3j7jILe4reB1P71uRMlvZi50niJcbbMbVRC4VtQBcy7OCIiCmZvUatOykEldZs3k2hawStvSiCLL8Dy0yvHCaWCx8cBmrACJhhjKilMoti8551nY6Ccudw0LweoyWAqMSKn6EguSPLobXYta1gLZbnsCgRChZk%2B9VJU4f9ENW0GHn8M%2BcLdiTYTRaBZE%2BnXUlJU428LDQGu5Sn9LLvFRG%2BCqZ%2FFyOM3BMylqtaBEto8cljtgzPBbBVmlySXNMMGMuMAGOqUBj%2BqLcelK6m%2BNeKiqGBXDdpN4XFvE8cieafrhuSbs5e9O1x4qudqyuvpQglWiYtaQEkKv55lYY%2Fb3App13zEuKgHGHTCvMTpcoYgzA7UqPLXH1ZB8giY4gUhasyXcOJm4Lqix8GVTaLdS9RoSIqqD6q%2Fez3H8t8Dd7yOrjURJqOf2thflKrVdLjsWVCaM14z%2BM3VumBZUwCBZlKcrlhNYPbR4s7z%2B&X-Amz-Signature=1bcccfc6bafd9ec16b8739627a1747d786daf4296c400f90028319715c33c8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
