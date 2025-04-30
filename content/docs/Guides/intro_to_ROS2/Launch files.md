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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNGBUTZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGWWkkITRhtLTUrVzoVmHSr5CthqYVbnKMLwOk1w9wh0AiEAlid2SbjPklxOEf%2BquD3zlKzj1worHk2CuZeFyUTNHh4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgu9qg4l9m8nofx0ircA2N3gYg4b1G%2BHGFI%2Ft2quok47j6PuEqyoifVfAm0lrhoRL7N1vz2bXl6h4A73KlYHK4s6l6PNimbcTUshhXBr0b2xDAUMe2mbRBrG85Na7%2B4t5dlB%2F3AHLjik2z9kuZwuRW7%2BZw6DwTAnYfZMhCA4S8J8w8ghShdKw472HTl2ptyb4s7iVnIj6Y%2BW3TEGJr8MbQBKXe2WJJjVthEDqG07VPBUQIV9gdV%2BjesFnBYn13NdddxpJfXwYq%2BYBldCJrIW5OMWjMM1bw3tzw0ZBC0YiNMcnPXntgvsJbkfIUGUquMRVgBiklWOSRAtGS1aogkU9OZR%2FZa8nZKoiOzX0VbzjxOL83tcF9te1CWKLSEX7kD6p%2BUipeV1ADz0QjBhdJt%2Fc53r3YMkYuYAC94lE8zleHd%2BpJFJ8C1Tp5VeVPUm%2BK%2FPKAoJhszh6dLzS%2Fo3lHpxJ9%2BrGo4qsJdLYzWcqkP9OsmqEFGWxaO5qwqB8WMH0Q82t31XI9aw5m68IczcRzz8bW%2FVEgdl2u1fzzBz3a%2BzxFG1aILMjsbqXtJy6i9A6gESekcN%2F9%2FTyPPXxFPKn7pEMwjH4oQ6cow30NzY%2FpHMltpWX4DQWJCSl55s6foRP%2BKUb6zfxxOKJdY6tHCMMbcxsAGOqUBpz03k9e0fFymFlE6%2FpDl7BGjpJ4EwTgmX5ihEcpilz0z6Inzc3yVhuet96VnEuw9QtQ9q4UUKsuthvnYjyiYcTOcuXCp6qw4w8WeqIS38m7pCLXqDPvcekzZzXxnX2nrDxwAA8CVj0X%2FAaF%2B17X%2BMUKBqhEJOSuFAe%2Bl%2Bo9aXgONMV1S99n7lfUyNusPwLg0vKKOFUYypJ7S9BJTgtAXgT72FvZU&X-Amz-Signature=083c27c5bd6e192d55685ab78ae3bd26252e0313243b436d49312b489bede2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNGBUTZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGWWkkITRhtLTUrVzoVmHSr5CthqYVbnKMLwOk1w9wh0AiEAlid2SbjPklxOEf%2BquD3zlKzj1worHk2CuZeFyUTNHh4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgu9qg4l9m8nofx0ircA2N3gYg4b1G%2BHGFI%2Ft2quok47j6PuEqyoifVfAm0lrhoRL7N1vz2bXl6h4A73KlYHK4s6l6PNimbcTUshhXBr0b2xDAUMe2mbRBrG85Na7%2B4t5dlB%2F3AHLjik2z9kuZwuRW7%2BZw6DwTAnYfZMhCA4S8J8w8ghShdKw472HTl2ptyb4s7iVnIj6Y%2BW3TEGJr8MbQBKXe2WJJjVthEDqG07VPBUQIV9gdV%2BjesFnBYn13NdddxpJfXwYq%2BYBldCJrIW5OMWjMM1bw3tzw0ZBC0YiNMcnPXntgvsJbkfIUGUquMRVgBiklWOSRAtGS1aogkU9OZR%2FZa8nZKoiOzX0VbzjxOL83tcF9te1CWKLSEX7kD6p%2BUipeV1ADz0QjBhdJt%2Fc53r3YMkYuYAC94lE8zleHd%2BpJFJ8C1Tp5VeVPUm%2BK%2FPKAoJhszh6dLzS%2Fo3lHpxJ9%2BrGo4qsJdLYzWcqkP9OsmqEFGWxaO5qwqB8WMH0Q82t31XI9aw5m68IczcRzz8bW%2FVEgdl2u1fzzBz3a%2BzxFG1aILMjsbqXtJy6i9A6gESekcN%2F9%2FTyPPXxFPKn7pEMwjH4oQ6cow30NzY%2FpHMltpWX4DQWJCSl55s6foRP%2BKUb6zfxxOKJdY6tHCMMbcxsAGOqUBpz03k9e0fFymFlE6%2FpDl7BGjpJ4EwTgmX5ihEcpilz0z6Inzc3yVhuet96VnEuw9QtQ9q4UUKsuthvnYjyiYcTOcuXCp6qw4w8WeqIS38m7pCLXqDPvcekzZzXxnX2nrDxwAA8CVj0X%2FAaF%2B17X%2BMUKBqhEJOSuFAe%2Bl%2Bo9aXgONMV1S99n7lfUyNusPwLg0vKKOFUYypJ7S9BJTgtAXgT72FvZU&X-Amz-Signature=8b1c8c6debc86a08298fbeae40510d9270493c7c25e76b1a95e126ca9f29f938&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNGBUTZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGWWkkITRhtLTUrVzoVmHSr5CthqYVbnKMLwOk1w9wh0AiEAlid2SbjPklxOEf%2BquD3zlKzj1worHk2CuZeFyUTNHh4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgu9qg4l9m8nofx0ircA2N3gYg4b1G%2BHGFI%2Ft2quok47j6PuEqyoifVfAm0lrhoRL7N1vz2bXl6h4A73KlYHK4s6l6PNimbcTUshhXBr0b2xDAUMe2mbRBrG85Na7%2B4t5dlB%2F3AHLjik2z9kuZwuRW7%2BZw6DwTAnYfZMhCA4S8J8w8ghShdKw472HTl2ptyb4s7iVnIj6Y%2BW3TEGJr8MbQBKXe2WJJjVthEDqG07VPBUQIV9gdV%2BjesFnBYn13NdddxpJfXwYq%2BYBldCJrIW5OMWjMM1bw3tzw0ZBC0YiNMcnPXntgvsJbkfIUGUquMRVgBiklWOSRAtGS1aogkU9OZR%2FZa8nZKoiOzX0VbzjxOL83tcF9te1CWKLSEX7kD6p%2BUipeV1ADz0QjBhdJt%2Fc53r3YMkYuYAC94lE8zleHd%2BpJFJ8C1Tp5VeVPUm%2BK%2FPKAoJhszh6dLzS%2Fo3lHpxJ9%2BrGo4qsJdLYzWcqkP9OsmqEFGWxaO5qwqB8WMH0Q82t31XI9aw5m68IczcRzz8bW%2FVEgdl2u1fzzBz3a%2BzxFG1aILMjsbqXtJy6i9A6gESekcN%2F9%2FTyPPXxFPKn7pEMwjH4oQ6cow30NzY%2FpHMltpWX4DQWJCSl55s6foRP%2BKUb6zfxxOKJdY6tHCMMbcxsAGOqUBpz03k9e0fFymFlE6%2FpDl7BGjpJ4EwTgmX5ihEcpilz0z6Inzc3yVhuet96VnEuw9QtQ9q4UUKsuthvnYjyiYcTOcuXCp6qw4w8WeqIS38m7pCLXqDPvcekzZzXxnX2nrDxwAA8CVj0X%2FAaF%2B17X%2BMUKBqhEJOSuFAe%2Bl%2Bo9aXgONMV1S99n7lfUyNusPwLg0vKKOFUYypJ7S9BJTgtAXgT72FvZU&X-Amz-Signature=9bc71f5bc2d80377e5d997c80977e007287974479f310ca5daaabe90e6388c18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
