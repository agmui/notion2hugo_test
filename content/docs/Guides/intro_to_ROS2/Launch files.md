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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QON4JZ6P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHWyzuWXDQ5dm4W2ulUqGnz5ByCknqwfsOaJVWKhgf3xAiA7DOvB5vB22zq2NL8dNgBoVfx2yeqVJEJkyLWll4YtnCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmbnGAGBrvD0IaydBKtwDItyAa9XPoYMp9L28dhrkcFNIr7vXLT36Msj4s422KUdCC9uXIw7NFGTL0guecHymM14MK2Ymmx3H3qQSUrDXZPR6UWt4j2gAlpDORkRWP60xcCzeMaF1xg9xNcnoP5cwT8Ax9BdE36u%2BeFeiEV9igJZ6zxgRNPZnGCZivyuxupIDJvb8OXtWWxlQXJLiaJ68cW1u88LBdM1KgJkP3svRx16soLPwLy3%2BgethXlKLB85pNODsYr7MuCQbQwyv5X9SWaBfuQPPjHewF58acA2jpz0TmozzhXELoKlmntUiZdS%2BmAVADsbybmWmuvUVGB9N26XQXEr4ItDTyQBZVe8xA%2Fwepuy5iZld9nO78ztb86FCt3FZ6v18njCZHHcKZL94zoSbVxXR545iVIm0md%2FH%2F0pT7fzTfxR%2Fc%2B1epX%2FP58%2BaPAx%2BkdyO8NbPLSsbviozcKtFzxwdtEtRhNNI5DnMYCwlX1zZ9ZxtxbazYjUTmj%2BLqxd84fzNqUEDQSNHhYWacLMTuLWwubQKi3%2FYe%2ByZNEI%2BMzWJLoxZdMLdZR1N1ixYWZ0Ft3WUCgeOUKiJ%2FwEz9oThxgcQO%2FrLwWXmV5KK6YRCR2w%2FWuXg5pxNPThqSFvzXCTZcwFU167t7WgwhpyVvQY6pgGG0tARAbdT2Yn99suuESZP3VjEMeKvUWh1Q4Jkqavf8YRqWJJ2m2liBv7bSKNbg5KwTi9X7M8AfVlO0cDzV6XCIstgY6DfDz3v4OmvpE%2FC5BFvxB%2F1rwJqT9i5KlxS%2FxOXMj4%2FydDULk9vL0g%2FObZzEEMidbVuFybSUGxyUvjk9SWFSmZuNk712dHRwNVpTgktvHB5EVyIBpGYZ9ZebR1UBxQtu%2FnH&X-Amz-Signature=d5176929cc9fb46e82a7d07f2d3144d14f90de2ec11910c9616c6623b3169bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QON4JZ6P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHWyzuWXDQ5dm4W2ulUqGnz5ByCknqwfsOaJVWKhgf3xAiA7DOvB5vB22zq2NL8dNgBoVfx2yeqVJEJkyLWll4YtnCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmbnGAGBrvD0IaydBKtwDItyAa9XPoYMp9L28dhrkcFNIr7vXLT36Msj4s422KUdCC9uXIw7NFGTL0guecHymM14MK2Ymmx3H3qQSUrDXZPR6UWt4j2gAlpDORkRWP60xcCzeMaF1xg9xNcnoP5cwT8Ax9BdE36u%2BeFeiEV9igJZ6zxgRNPZnGCZivyuxupIDJvb8OXtWWxlQXJLiaJ68cW1u88LBdM1KgJkP3svRx16soLPwLy3%2BgethXlKLB85pNODsYr7MuCQbQwyv5X9SWaBfuQPPjHewF58acA2jpz0TmozzhXELoKlmntUiZdS%2BmAVADsbybmWmuvUVGB9N26XQXEr4ItDTyQBZVe8xA%2Fwepuy5iZld9nO78ztb86FCt3FZ6v18njCZHHcKZL94zoSbVxXR545iVIm0md%2FH%2F0pT7fzTfxR%2Fc%2B1epX%2FP58%2BaPAx%2BkdyO8NbPLSsbviozcKtFzxwdtEtRhNNI5DnMYCwlX1zZ9ZxtxbazYjUTmj%2BLqxd84fzNqUEDQSNHhYWacLMTuLWwubQKi3%2FYe%2ByZNEI%2BMzWJLoxZdMLdZR1N1ixYWZ0Ft3WUCgeOUKiJ%2FwEz9oThxgcQO%2FrLwWXmV5KK6YRCR2w%2FWuXg5pxNPThqSFvzXCTZcwFU167t7WgwhpyVvQY6pgGG0tARAbdT2Yn99suuESZP3VjEMeKvUWh1Q4Jkqavf8YRqWJJ2m2liBv7bSKNbg5KwTi9X7M8AfVlO0cDzV6XCIstgY6DfDz3v4OmvpE%2FC5BFvxB%2F1rwJqT9i5KlxS%2FxOXMj4%2FydDULk9vL0g%2FObZzEEMidbVuFybSUGxyUvjk9SWFSmZuNk712dHRwNVpTgktvHB5EVyIBpGYZ9ZebR1UBxQtu%2FnH&X-Amz-Signature=ea23ee19b673e82958fe88aec7f353d53be2fea88aff93e834e740d834279329&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QON4JZ6P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHWyzuWXDQ5dm4W2ulUqGnz5ByCknqwfsOaJVWKhgf3xAiA7DOvB5vB22zq2NL8dNgBoVfx2yeqVJEJkyLWll4YtnCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMmbnGAGBrvD0IaydBKtwDItyAa9XPoYMp9L28dhrkcFNIr7vXLT36Msj4s422KUdCC9uXIw7NFGTL0guecHymM14MK2Ymmx3H3qQSUrDXZPR6UWt4j2gAlpDORkRWP60xcCzeMaF1xg9xNcnoP5cwT8Ax9BdE36u%2BeFeiEV9igJZ6zxgRNPZnGCZivyuxupIDJvb8OXtWWxlQXJLiaJ68cW1u88LBdM1KgJkP3svRx16soLPwLy3%2BgethXlKLB85pNODsYr7MuCQbQwyv5X9SWaBfuQPPjHewF58acA2jpz0TmozzhXELoKlmntUiZdS%2BmAVADsbybmWmuvUVGB9N26XQXEr4ItDTyQBZVe8xA%2Fwepuy5iZld9nO78ztb86FCt3FZ6v18njCZHHcKZL94zoSbVxXR545iVIm0md%2FH%2F0pT7fzTfxR%2Fc%2B1epX%2FP58%2BaPAx%2BkdyO8NbPLSsbviozcKtFzxwdtEtRhNNI5DnMYCwlX1zZ9ZxtxbazYjUTmj%2BLqxd84fzNqUEDQSNHhYWacLMTuLWwubQKi3%2FYe%2ByZNEI%2BMzWJLoxZdMLdZR1N1ixYWZ0Ft3WUCgeOUKiJ%2FwEz9oThxgcQO%2FrLwWXmV5KK6YRCR2w%2FWuXg5pxNPThqSFvzXCTZcwFU167t7WgwhpyVvQY6pgGG0tARAbdT2Yn99suuESZP3VjEMeKvUWh1Q4Jkqavf8YRqWJJ2m2liBv7bSKNbg5KwTi9X7M8AfVlO0cDzV6XCIstgY6DfDz3v4OmvpE%2FC5BFvxB%2F1rwJqT9i5KlxS%2FxOXMj4%2FydDULk9vL0g%2FObZzEEMidbVuFybSUGxyUvjk9SWFSmZuNk712dHRwNVpTgktvHB5EVyIBpGYZ9ZebR1UBxQtu%2FnH&X-Amz-Signature=0bffd8753e84b9ba11e4b520a994d0ec2c84029c8a874c1b63d2c4254ad84012&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
