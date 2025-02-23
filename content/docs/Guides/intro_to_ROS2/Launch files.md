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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXU4MJM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ9nq8fh%2BqS%2BM0paEcz8Zhuxjza%2FMsGuFbpcznG%2BDUJQIgKyj92%2BxMazK9SN5cVFBvDdhdrtMIASIJlh4AtAWpXwIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG7YLgEANVT2nc0oWCrcA2X0raZV3DMJOaCxHLbMD4l3%2BeeGzfPfOiiqsF4lIdWjN8xv2QOSTaFMCPeWIqUhd2QCtEnJxgKGVY8%2BNEIZOLJNxhf1JoUss0EKCu9ZIFSeyXK6y%2FSLC%2FpDcSJ55KZbN4OJuveS7WdORjg3WhVZpfTcpUgxyQen%2BXJuvuFYDZSaH%2BQZSU%2BsXwg63UC3MjiZrQeZMgzihywxz%2FnaUEGta10PkZmKvPqyDcFQmZn7fkg%2FtNEKtu7wU%2F9BL%2BvLzG%2Fenn%2FB%2BPrJoHWNys%2B%2FY2N8WsrmrM7UuyLwuMJ%2Br%2BAEt2u7z7AMGUVoor0MdUVd0BD%2B5ZLmQXR7h9%2BqGO%2ByYXAtlhUUyWu9KgmXE22yZ%2F6Mjppz4H2wLoMd%2FL7dU8zrjQf%2BOEDg9Rg4eIbnkSbKI5S%2BiWivsHBp4AV9RuPBKMY2%2FyHnsLpHBjWfImDn5Ad%2B3GHBooVFuBuhSFQq24UHglujMnH4dqzR%2BFdERHjh46vm4JlHcZc73oArQNF8uMrErntNvgd%2BwtZUdS21z9Odsk5razOpfT%2BAmyK9bVY9n68H%2BJE4Oos98gaovG8734ofgd0zO9GtoQwlm4Q%2BjDqwfdSoLRs64AOR%2FF3XgSvQHbMkpRKwu6tZEAbILfFJGSfQMJCg7r0GOqUBjxo1ONPehvRmfCYt8Q0eQtV9R6sYKFp9M58eSb%2BhGB%2BmjV6GrGHdcxUDOZGq6GxQY6V3zQrXZCIsmTIMDf7XHPn0W7CPv%2B6npLvsXaRaJhRgfhKjDdP46d1463pMhI3zsMjj1ObLL1uK22G5NiNF7fC8WiB7Tfu5zbtcfNWUap7wxzUJx9m6cM65koh5%2B6UrfxFdmZe1oC8ln%2BFmUpMURuC0I72k&X-Amz-Signature=4dc7414c1b70b41711b29581a983e3f20022d52c321ee11bf65fc1f3efbaf20f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXU4MJM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ9nq8fh%2BqS%2BM0paEcz8Zhuxjza%2FMsGuFbpcznG%2BDUJQIgKyj92%2BxMazK9SN5cVFBvDdhdrtMIASIJlh4AtAWpXwIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG7YLgEANVT2nc0oWCrcA2X0raZV3DMJOaCxHLbMD4l3%2BeeGzfPfOiiqsF4lIdWjN8xv2QOSTaFMCPeWIqUhd2QCtEnJxgKGVY8%2BNEIZOLJNxhf1JoUss0EKCu9ZIFSeyXK6y%2FSLC%2FpDcSJ55KZbN4OJuveS7WdORjg3WhVZpfTcpUgxyQen%2BXJuvuFYDZSaH%2BQZSU%2BsXwg63UC3MjiZrQeZMgzihywxz%2FnaUEGta10PkZmKvPqyDcFQmZn7fkg%2FtNEKtu7wU%2F9BL%2BvLzG%2Fenn%2FB%2BPrJoHWNys%2B%2FY2N8WsrmrM7UuyLwuMJ%2Br%2BAEt2u7z7AMGUVoor0MdUVd0BD%2B5ZLmQXR7h9%2BqGO%2ByYXAtlhUUyWu9KgmXE22yZ%2F6Mjppz4H2wLoMd%2FL7dU8zrjQf%2BOEDg9Rg4eIbnkSbKI5S%2BiWivsHBp4AV9RuPBKMY2%2FyHnsLpHBjWfImDn5Ad%2B3GHBooVFuBuhSFQq24UHglujMnH4dqzR%2BFdERHjh46vm4JlHcZc73oArQNF8uMrErntNvgd%2BwtZUdS21z9Odsk5razOpfT%2BAmyK9bVY9n68H%2BJE4Oos98gaovG8734ofgd0zO9GtoQwlm4Q%2BjDqwfdSoLRs64AOR%2FF3XgSvQHbMkpRKwu6tZEAbILfFJGSfQMJCg7r0GOqUBjxo1ONPehvRmfCYt8Q0eQtV9R6sYKFp9M58eSb%2BhGB%2BmjV6GrGHdcxUDOZGq6GxQY6V3zQrXZCIsmTIMDf7XHPn0W7CPv%2B6npLvsXaRaJhRgfhKjDdP46d1463pMhI3zsMjj1ObLL1uK22G5NiNF7fC8WiB7Tfu5zbtcfNWUap7wxzUJx9m6cM65koh5%2B6UrfxFdmZe1oC8ln%2BFmUpMURuC0I72k&X-Amz-Signature=55d6bc344cd6e294304646b7bf6cfc23e89ddc4da7b2d6e170a30083e97ba5af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXU4MJM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ9nq8fh%2BqS%2BM0paEcz8Zhuxjza%2FMsGuFbpcznG%2BDUJQIgKyj92%2BxMazK9SN5cVFBvDdhdrtMIASIJlh4AtAWpXwIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDG7YLgEANVT2nc0oWCrcA2X0raZV3DMJOaCxHLbMD4l3%2BeeGzfPfOiiqsF4lIdWjN8xv2QOSTaFMCPeWIqUhd2QCtEnJxgKGVY8%2BNEIZOLJNxhf1JoUss0EKCu9ZIFSeyXK6y%2FSLC%2FpDcSJ55KZbN4OJuveS7WdORjg3WhVZpfTcpUgxyQen%2BXJuvuFYDZSaH%2BQZSU%2BsXwg63UC3MjiZrQeZMgzihywxz%2FnaUEGta10PkZmKvPqyDcFQmZn7fkg%2FtNEKtu7wU%2F9BL%2BvLzG%2Fenn%2FB%2BPrJoHWNys%2B%2FY2N8WsrmrM7UuyLwuMJ%2Br%2BAEt2u7z7AMGUVoor0MdUVd0BD%2B5ZLmQXR7h9%2BqGO%2ByYXAtlhUUyWu9KgmXE22yZ%2F6Mjppz4H2wLoMd%2FL7dU8zrjQf%2BOEDg9Rg4eIbnkSbKI5S%2BiWivsHBp4AV9RuPBKMY2%2FyHnsLpHBjWfImDn5Ad%2B3GHBooVFuBuhSFQq24UHglujMnH4dqzR%2BFdERHjh46vm4JlHcZc73oArQNF8uMrErntNvgd%2BwtZUdS21z9Odsk5razOpfT%2BAmyK9bVY9n68H%2BJE4Oos98gaovG8734ofgd0zO9GtoQwlm4Q%2BjDqwfdSoLRs64AOR%2FF3XgSvQHbMkpRKwu6tZEAbILfFJGSfQMJCg7r0GOqUBjxo1ONPehvRmfCYt8Q0eQtV9R6sYKFp9M58eSb%2BhGB%2BmjV6GrGHdcxUDOZGq6GxQY6V3zQrXZCIsmTIMDf7XHPn0W7CPv%2B6npLvsXaRaJhRgfhKjDdP46d1463pMhI3zsMjj1ObLL1uK22G5NiNF7fC8WiB7Tfu5zbtcfNWUap7wxzUJx9m6cM65koh5%2B6UrfxFdmZe1oC8ln%2BFmUpMURuC0I72k&X-Amz-Signature=01be33951940364075c769f498e6eebc2ea6adabc9731c48f11f16d2e209458c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
