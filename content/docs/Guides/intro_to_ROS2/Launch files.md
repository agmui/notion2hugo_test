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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244HT7XX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Ay3i6siz0lZ%2Fn2HFNq2VkjISXC7XHNwFwuvb5BegdAIgc0Ew1UysiZxJ26EKVk10KPoVCgdjTHjO5QvK8rzSi0kqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNa430wj5ITOmrQ2ircA5d0s%2B1PnjzPjp8VniZc8Mt5%2Folrc0%2BDBNSbYtyYT1aeRdZ3eEupnBZCeNIV%2B7r%2F%2FWlNe2sutg0fV1zQaDtNxuqQR621ConRVbSDgmqgQhpdw%2FslwHg3LxAkIb3UWsPV4fYbICIY8nWO8GsQVWPFCGtFczWQpHx4hskQh4nZVQdB7nBLXlI9dIsQx7w6gZyWloEk0%2BU2LcYGhHOBlkCJ1JAK%2BGhC1iK%2Fl5vtjAAKwWyfP879kZjola5PyZJjslMvxxg%2F1SZEUbXMlj0dlDZ3fKnjQ3Bvb0fSx%2B4OfFeh8gnk9RqfA1bCYlco1qDMuszRZ7prNVzNB4lZ%2FPH20CG3dU6ji5oL4NumOcTGg0gGrp%2BM2i8vCy3geXNxjxkgCR2WGxKlVf0WOjqayiIAcGMy5kscs5mXYf1p4glURuIY50sPBb1%2F7rRPiVmnQV0yInnskBe3WpbfvbksWh%2BqOqJYaFe5v6%2Fm17EgdOqc29seo%2FXD5gwVP0lpkTtcpJC01Aj4HaAMsAhX7QFWEbltylrqaT1AM6nCsXc0bXHMRBWu9esan2z3kuUsA1wPzPgYDPta866CouT6rX%2B%2Ftp3j1a5087%2BBmpE7dXnsrvfEzV4Kvy9Nu2yoYSPg7RN6Xv7iMKLumMIGOqUBkntAxrblgqaCO9kBPVJtceREZEXYGVv7Ua4P77EnXtDC9M7cFjYTfoNmL4UvJXtfpPWWRRaJSRVOyAYsWR1q01pVhpIBkokjDQAhLku%2Fiu%2F8lkiLZGqfBtH8MaPxyVpMT7ba0bFuCqxyST0Ft2YTbCXGIHUUpdPXGPX9m%2BYwVdwSmaOacu%2FeWLFbWwYpJmt8qUn%2FZZtqNKxa9Pt8c1QsRBobJjzH&X-Amz-Signature=0f8cb04ffe00d87056f3f62612b6e1987d5526cf2da13c3f4bee5817f83c47d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244HT7XX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Ay3i6siz0lZ%2Fn2HFNq2VkjISXC7XHNwFwuvb5BegdAIgc0Ew1UysiZxJ26EKVk10KPoVCgdjTHjO5QvK8rzSi0kqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNa430wj5ITOmrQ2ircA5d0s%2B1PnjzPjp8VniZc8Mt5%2Folrc0%2BDBNSbYtyYT1aeRdZ3eEupnBZCeNIV%2B7r%2F%2FWlNe2sutg0fV1zQaDtNxuqQR621ConRVbSDgmqgQhpdw%2FslwHg3LxAkIb3UWsPV4fYbICIY8nWO8GsQVWPFCGtFczWQpHx4hskQh4nZVQdB7nBLXlI9dIsQx7w6gZyWloEk0%2BU2LcYGhHOBlkCJ1JAK%2BGhC1iK%2Fl5vtjAAKwWyfP879kZjola5PyZJjslMvxxg%2F1SZEUbXMlj0dlDZ3fKnjQ3Bvb0fSx%2B4OfFeh8gnk9RqfA1bCYlco1qDMuszRZ7prNVzNB4lZ%2FPH20CG3dU6ji5oL4NumOcTGg0gGrp%2BM2i8vCy3geXNxjxkgCR2WGxKlVf0WOjqayiIAcGMy5kscs5mXYf1p4glURuIY50sPBb1%2F7rRPiVmnQV0yInnskBe3WpbfvbksWh%2BqOqJYaFe5v6%2Fm17EgdOqc29seo%2FXD5gwVP0lpkTtcpJC01Aj4HaAMsAhX7QFWEbltylrqaT1AM6nCsXc0bXHMRBWu9esan2z3kuUsA1wPzPgYDPta866CouT6rX%2B%2Ftp3j1a5087%2BBmpE7dXnsrvfEzV4Kvy9Nu2yoYSPg7RN6Xv7iMKLumMIGOqUBkntAxrblgqaCO9kBPVJtceREZEXYGVv7Ua4P77EnXtDC9M7cFjYTfoNmL4UvJXtfpPWWRRaJSRVOyAYsWR1q01pVhpIBkokjDQAhLku%2Fiu%2F8lkiLZGqfBtH8MaPxyVpMT7ba0bFuCqxyST0Ft2YTbCXGIHUUpdPXGPX9m%2BYwVdwSmaOacu%2FeWLFbWwYpJmt8qUn%2FZZtqNKxa9Pt8c1QsRBobJjzH&X-Amz-Signature=d116b661bc2d02e4eb799cff3c2ab1a2ed2fbc723f65ea28a060000699c9a332&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244HT7XX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Ay3i6siz0lZ%2Fn2HFNq2VkjISXC7XHNwFwuvb5BegdAIgc0Ew1UysiZxJ26EKVk10KPoVCgdjTHjO5QvK8rzSi0kqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNa430wj5ITOmrQ2ircA5d0s%2B1PnjzPjp8VniZc8Mt5%2Folrc0%2BDBNSbYtyYT1aeRdZ3eEupnBZCeNIV%2B7r%2F%2FWlNe2sutg0fV1zQaDtNxuqQR621ConRVbSDgmqgQhpdw%2FslwHg3LxAkIb3UWsPV4fYbICIY8nWO8GsQVWPFCGtFczWQpHx4hskQh4nZVQdB7nBLXlI9dIsQx7w6gZyWloEk0%2BU2LcYGhHOBlkCJ1JAK%2BGhC1iK%2Fl5vtjAAKwWyfP879kZjola5PyZJjslMvxxg%2F1SZEUbXMlj0dlDZ3fKnjQ3Bvb0fSx%2B4OfFeh8gnk9RqfA1bCYlco1qDMuszRZ7prNVzNB4lZ%2FPH20CG3dU6ji5oL4NumOcTGg0gGrp%2BM2i8vCy3geXNxjxkgCR2WGxKlVf0WOjqayiIAcGMy5kscs5mXYf1p4glURuIY50sPBb1%2F7rRPiVmnQV0yInnskBe3WpbfvbksWh%2BqOqJYaFe5v6%2Fm17EgdOqc29seo%2FXD5gwVP0lpkTtcpJC01Aj4HaAMsAhX7QFWEbltylrqaT1AM6nCsXc0bXHMRBWu9esan2z3kuUsA1wPzPgYDPta866CouT6rX%2B%2Ftp3j1a5087%2BBmpE7dXnsrvfEzV4Kvy9Nu2yoYSPg7RN6Xv7iMKLumMIGOqUBkntAxrblgqaCO9kBPVJtceREZEXYGVv7Ua4P77EnXtDC9M7cFjYTfoNmL4UvJXtfpPWWRRaJSRVOyAYsWR1q01pVhpIBkokjDQAhLku%2Fiu%2F8lkiLZGqfBtH8MaPxyVpMT7ba0bFuCqxyST0Ft2YTbCXGIHUUpdPXGPX9m%2BYwVdwSmaOacu%2FeWLFbWwYpJmt8qUn%2FZZtqNKxa9Pt8c1QsRBobJjzH&X-Amz-Signature=03ce33d8dcdccbfe1b6641e5fe99bc3000a45331087f56f0083fec039fd0a53c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
