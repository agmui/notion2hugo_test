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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666G5G3EZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCUo6%2B3D7sFDdO6Pbk6moAlOBIfhmkH3S7gL10aTFUpIQIgMV1rE44yTF2X72Vk899xFCttb1VfCKnOuw0HHkFB5gQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAxvyeajksW6i9wmtCrcA3632jlXjaMKYOTdJavOwXHjMvX0JCmeCdM9mGTV%2BqjSRxJ%2BVq%2BFEIeUh5u7dYD2ZY6kznRE3FxekPa34AqpnWZ8RrXJ4dAmcIUHjzlBFA88V6D2EiLJ1axzvbJ6cphggNGnVKQgdYSS2EICOsPExmL8HnAgjv8QkG5ibY3sEzZNlvnRYZl7SiFmd2dm6NNJBK9A67lku5WXrJ1GeJszbfjMusvqKh3dMzs1GQlpja%2FnVhejH35%2BXrj1fr21La%2BIwA1rHMX3BUO%2FeFJXyHpKlm3sMHQmWIvuiMXe4dSBEHXSe8JagIPHsBYB%2BgwpHNdHcXE9tXHrDOKx8g8KkDzDaBmISaGPtS1HLUoH6K4z7k8Pq5LoQpF3M4gYBXMqcwfgP5HyxaVv1vQyNK7E8J%2FGHrjypaW%2Fo7UxkL8gK%2Bj9bKXwjLPFKTUsSP5efmGaBIfF48n7jLw86gP1UcIRhkclrRMEtjjWrXsf4acE7nErsxCfR38Ql9JU09r2x1KFDqdRrvsuazU4KscHyfG9kqW4VJDh2Oy2bFpQbkxYvg7Wjx5aqsEc5vgIa800FXwBJEwPGlbgfTh9JGn6GQbEIVpJAeFAMf6C%2B%2BeUJwyf%2FGSSisUFeAbLbW66KJFPDdyeMJKA%2B70GOqUBQWxBFuqO44fJ7QP3kMDtSg2%2FRKi3%2BDfaWqW78HLZOS%2B5elPw54b6%2FEwTlnzWFTiGNKr7LU2xP409PtZX5GTzf5DGzFJduP5hhaSJAsHjGBXenREhcXcKmozaWulP7eVJPwozJgCyfF1WkeBR7wqAeDCgRweMLZOE%2BWreTGFKxTeuzP4BD7xtegFFPMPVeyqUrD1YW54duwa%2Fai2LXa3E6taAzShK&X-Amz-Signature=d7214c84909e8c2093db63d033dc34beb72f143c1166e3f93a4a455f6b024581&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666G5G3EZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCUo6%2B3D7sFDdO6Pbk6moAlOBIfhmkH3S7gL10aTFUpIQIgMV1rE44yTF2X72Vk899xFCttb1VfCKnOuw0HHkFB5gQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAxvyeajksW6i9wmtCrcA3632jlXjaMKYOTdJavOwXHjMvX0JCmeCdM9mGTV%2BqjSRxJ%2BVq%2BFEIeUh5u7dYD2ZY6kznRE3FxekPa34AqpnWZ8RrXJ4dAmcIUHjzlBFA88V6D2EiLJ1axzvbJ6cphggNGnVKQgdYSS2EICOsPExmL8HnAgjv8QkG5ibY3sEzZNlvnRYZl7SiFmd2dm6NNJBK9A67lku5WXrJ1GeJszbfjMusvqKh3dMzs1GQlpja%2FnVhejH35%2BXrj1fr21La%2BIwA1rHMX3BUO%2FeFJXyHpKlm3sMHQmWIvuiMXe4dSBEHXSe8JagIPHsBYB%2BgwpHNdHcXE9tXHrDOKx8g8KkDzDaBmISaGPtS1HLUoH6K4z7k8Pq5LoQpF3M4gYBXMqcwfgP5HyxaVv1vQyNK7E8J%2FGHrjypaW%2Fo7UxkL8gK%2Bj9bKXwjLPFKTUsSP5efmGaBIfF48n7jLw86gP1UcIRhkclrRMEtjjWrXsf4acE7nErsxCfR38Ql9JU09r2x1KFDqdRrvsuazU4KscHyfG9kqW4VJDh2Oy2bFpQbkxYvg7Wjx5aqsEc5vgIa800FXwBJEwPGlbgfTh9JGn6GQbEIVpJAeFAMf6C%2B%2BeUJwyf%2FGSSisUFeAbLbW66KJFPDdyeMJKA%2B70GOqUBQWxBFuqO44fJ7QP3kMDtSg2%2FRKi3%2BDfaWqW78HLZOS%2B5elPw54b6%2FEwTlnzWFTiGNKr7LU2xP409PtZX5GTzf5DGzFJduP5hhaSJAsHjGBXenREhcXcKmozaWulP7eVJPwozJgCyfF1WkeBR7wqAeDCgRweMLZOE%2BWreTGFKxTeuzP4BD7xtegFFPMPVeyqUrD1YW54duwa%2Fai2LXa3E6taAzShK&X-Amz-Signature=8ea3805e9b424733a69e289ae3aa918eb18076d1ca9bccbc6cf48d1062f464ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666G5G3EZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCUo6%2B3D7sFDdO6Pbk6moAlOBIfhmkH3S7gL10aTFUpIQIgMV1rE44yTF2X72Vk899xFCttb1VfCKnOuw0HHkFB5gQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAxvyeajksW6i9wmtCrcA3632jlXjaMKYOTdJavOwXHjMvX0JCmeCdM9mGTV%2BqjSRxJ%2BVq%2BFEIeUh5u7dYD2ZY6kznRE3FxekPa34AqpnWZ8RrXJ4dAmcIUHjzlBFA88V6D2EiLJ1axzvbJ6cphggNGnVKQgdYSS2EICOsPExmL8HnAgjv8QkG5ibY3sEzZNlvnRYZl7SiFmd2dm6NNJBK9A67lku5WXrJ1GeJszbfjMusvqKh3dMzs1GQlpja%2FnVhejH35%2BXrj1fr21La%2BIwA1rHMX3BUO%2FeFJXyHpKlm3sMHQmWIvuiMXe4dSBEHXSe8JagIPHsBYB%2BgwpHNdHcXE9tXHrDOKx8g8KkDzDaBmISaGPtS1HLUoH6K4z7k8Pq5LoQpF3M4gYBXMqcwfgP5HyxaVv1vQyNK7E8J%2FGHrjypaW%2Fo7UxkL8gK%2Bj9bKXwjLPFKTUsSP5efmGaBIfF48n7jLw86gP1UcIRhkclrRMEtjjWrXsf4acE7nErsxCfR38Ql9JU09r2x1KFDqdRrvsuazU4KscHyfG9kqW4VJDh2Oy2bFpQbkxYvg7Wjx5aqsEc5vgIa800FXwBJEwPGlbgfTh9JGn6GQbEIVpJAeFAMf6C%2B%2BeUJwyf%2FGSSisUFeAbLbW66KJFPDdyeMJKA%2B70GOqUBQWxBFuqO44fJ7QP3kMDtSg2%2FRKi3%2BDfaWqW78HLZOS%2B5elPw54b6%2FEwTlnzWFTiGNKr7LU2xP409PtZX5GTzf5DGzFJduP5hhaSJAsHjGBXenREhcXcKmozaWulP7eVJPwozJgCyfF1WkeBR7wqAeDCgRweMLZOE%2BWreTGFKxTeuzP4BD7xtegFFPMPVeyqUrD1YW54duwa%2Fai2LXa3E6taAzShK&X-Amz-Signature=e462e990a6dc79539d30b29f45307b8a91885463bb0e1578d38aa658ae8c1426&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
