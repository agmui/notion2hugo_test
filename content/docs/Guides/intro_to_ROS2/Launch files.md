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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXDHEXQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE1EWvsEDH8bm1FKkYuL4mqiAk5KVvVvWBqOYCrT861gIhAMxXiJQDbxmyyf8IyoO59XZjamMvIbgsWhUxGlzfxvNcKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEuOq3w3tKDQfFwvcq3AMayRTeib0RLf%2BmqUWpfeifv0653bnOFzaZ8cWO81CP3%2Bvlo8FNx8wf74YwSikSbtmEZHwok4y0V4QY45OpcQW0lTDuN%2B3DoDABLE3O9U5r%2B%2BrCCowtv9ZEy0UYQ2pfnYEa%2BBYqVLYBUUyFs3p4X9hX%2BIWSpwmZNDjsK2XwIrxtgSWHL%2FwaxUJah7kokebyer1Y1S7rjS151ZnYVN4XQr0XFUkadfOLvzGymzUu%2BoD9lriyZf8v9UWMZqpOx2BYDhxdzX8l8hWdcCuMVjBYFmFTo7gMwaTT%2BMC%2FUTp4H7MUSh3NkhzYTGqaMnmGtg6%2BUIt%2ByyF1jZd0M%2BWzzI%2FPFKg8dPb1ezi%2BVFdKAaW8aU%2BT9IatJtZDYe4lX6ofAbWo3GcCFeM6bPTri8IhLsagbJatqICWDEAT2w2oHunhN%2FwARyX921b3ELLe0QLJrt0pS3%2B7Mlsvpm7U%2FJgnRSvz34wTTHTCvpGBNFSWIj3rscmOPWqzgNVoKE8IbpkNgpLQtDtAkmGF%2FRvldY5oP294BjQayIu1rSbXz9GprbghJRBMDsyAnGqaBBsn0zv6SKMNkgrQDh%2FemqW2O0lR6e1XC5FnVkCIGk9iy8u5S%2FZVpobWhi8jwBlP0gtyyQtbyjDbh5%2FCBjqkAVB0NDiLXuMe0bmrwQscXwMQB%2F73Eiqtaof7IaAAxn4H7tUrbMIA8318AO1kbQ3ouDh9EYkdYD%2Ftn%2FwwPFydt9F2AG%2B6p%2FLjVaUHrTYec1sLVAJNFbO1QCfd4IKUVhV57igyjT2demV5bssHxwNOQkRcr07kbXGeqGhwAgKq2Wr74MI9iCymk5V8f65ygLfuteQsNwu5SQkbo9kXoiBHqUZb0lpU&X-Amz-Signature=6a4fc9af900d49fb919a663d3e7ccc1ed4d718fcbff6867ac2e4c49d9bb59b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXDHEXQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE1EWvsEDH8bm1FKkYuL4mqiAk5KVvVvWBqOYCrT861gIhAMxXiJQDbxmyyf8IyoO59XZjamMvIbgsWhUxGlzfxvNcKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEuOq3w3tKDQfFwvcq3AMayRTeib0RLf%2BmqUWpfeifv0653bnOFzaZ8cWO81CP3%2Bvlo8FNx8wf74YwSikSbtmEZHwok4y0V4QY45OpcQW0lTDuN%2B3DoDABLE3O9U5r%2B%2BrCCowtv9ZEy0UYQ2pfnYEa%2BBYqVLYBUUyFs3p4X9hX%2BIWSpwmZNDjsK2XwIrxtgSWHL%2FwaxUJah7kokebyer1Y1S7rjS151ZnYVN4XQr0XFUkadfOLvzGymzUu%2BoD9lriyZf8v9UWMZqpOx2BYDhxdzX8l8hWdcCuMVjBYFmFTo7gMwaTT%2BMC%2FUTp4H7MUSh3NkhzYTGqaMnmGtg6%2BUIt%2ByyF1jZd0M%2BWzzI%2FPFKg8dPb1ezi%2BVFdKAaW8aU%2BT9IatJtZDYe4lX6ofAbWo3GcCFeM6bPTri8IhLsagbJatqICWDEAT2w2oHunhN%2FwARyX921b3ELLe0QLJrt0pS3%2B7Mlsvpm7U%2FJgnRSvz34wTTHTCvpGBNFSWIj3rscmOPWqzgNVoKE8IbpkNgpLQtDtAkmGF%2FRvldY5oP294BjQayIu1rSbXz9GprbghJRBMDsyAnGqaBBsn0zv6SKMNkgrQDh%2FemqW2O0lR6e1XC5FnVkCIGk9iy8u5S%2FZVpobWhi8jwBlP0gtyyQtbyjDbh5%2FCBjqkAVB0NDiLXuMe0bmrwQscXwMQB%2F73Eiqtaof7IaAAxn4H7tUrbMIA8318AO1kbQ3ouDh9EYkdYD%2Ftn%2FwwPFydt9F2AG%2B6p%2FLjVaUHrTYec1sLVAJNFbO1QCfd4IKUVhV57igyjT2demV5bssHxwNOQkRcr07kbXGeqGhwAgKq2Wr74MI9iCymk5V8f65ygLfuteQsNwu5SQkbo9kXoiBHqUZb0lpU&X-Amz-Signature=6ba53c3ac5273623db43431ae93cc6cf0d9cb469620371a39325000cb04f3416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXDHEXQ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE1EWvsEDH8bm1FKkYuL4mqiAk5KVvVvWBqOYCrT861gIhAMxXiJQDbxmyyf8IyoO59XZjamMvIbgsWhUxGlzfxvNcKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEuOq3w3tKDQfFwvcq3AMayRTeib0RLf%2BmqUWpfeifv0653bnOFzaZ8cWO81CP3%2Bvlo8FNx8wf74YwSikSbtmEZHwok4y0V4QY45OpcQW0lTDuN%2B3DoDABLE3O9U5r%2B%2BrCCowtv9ZEy0UYQ2pfnYEa%2BBYqVLYBUUyFs3p4X9hX%2BIWSpwmZNDjsK2XwIrxtgSWHL%2FwaxUJah7kokebyer1Y1S7rjS151ZnYVN4XQr0XFUkadfOLvzGymzUu%2BoD9lriyZf8v9UWMZqpOx2BYDhxdzX8l8hWdcCuMVjBYFmFTo7gMwaTT%2BMC%2FUTp4H7MUSh3NkhzYTGqaMnmGtg6%2BUIt%2ByyF1jZd0M%2BWzzI%2FPFKg8dPb1ezi%2BVFdKAaW8aU%2BT9IatJtZDYe4lX6ofAbWo3GcCFeM6bPTri8IhLsagbJatqICWDEAT2w2oHunhN%2FwARyX921b3ELLe0QLJrt0pS3%2B7Mlsvpm7U%2FJgnRSvz34wTTHTCvpGBNFSWIj3rscmOPWqzgNVoKE8IbpkNgpLQtDtAkmGF%2FRvldY5oP294BjQayIu1rSbXz9GprbghJRBMDsyAnGqaBBsn0zv6SKMNkgrQDh%2FemqW2O0lR6e1XC5FnVkCIGk9iy8u5S%2FZVpobWhi8jwBlP0gtyyQtbyjDbh5%2FCBjqkAVB0NDiLXuMe0bmrwQscXwMQB%2F73Eiqtaof7IaAAxn4H7tUrbMIA8318AO1kbQ3ouDh9EYkdYD%2Ftn%2FwwPFydt9F2AG%2B6p%2FLjVaUHrTYec1sLVAJNFbO1QCfd4IKUVhV57igyjT2demV5bssHxwNOQkRcr07kbXGeqGhwAgKq2Wr74MI9iCymk5V8f65ygLfuteQsNwu5SQkbo9kXoiBHqUZb0lpU&X-Amz-Signature=0eaffc8996c408cf1abb00fcda0317015dd43a47198ed9336b9e66d226d88ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
