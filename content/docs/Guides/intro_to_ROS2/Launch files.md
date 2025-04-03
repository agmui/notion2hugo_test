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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLFHHVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCQiHN0BGpvNUgyO4UHc6ufJDJ3qnxOxPdEuK2PnEJTDwIgblA8DFywvOJJ7FQDyZx4VILTar%2BaXCSUCO9e581let4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFA%2FE308E0dqk2HWgSrcAxTBy2lvJKaV%2BOKn1%2BQ0Wvv7imOB0Fi6oSUcZr7lGN437s2XPkGya1r1P1CJwW6lpZ7S9YzOWPRdHBCG2e79TAHi1FLxFcvirpR6jhC3QJE%2BYMmnPwUIuaUJtxE%2F506AdftGPfmavjmZx3vheJ1L1tfXMUBq4qAIv0p1Tv7kBWSBPZjxbKzj5bauNMGrKs0eMzusb%2By%2BeqwJy290i%2FMIvlNYfVwWOeOS97BYAGZsRj7I7I%2BAlQVMbCOJQOaCjBASp5M1asDBsKbePsppyjPvYrQ9%2Fpe0mU2I9tW%2FraeH%2F4xAWWb%2F3Y7vM8eonpLoClkYk%2FSRreWNoKkJY6jjknHd5ioUW7zmdkKRUk04UUCLoEH7HJjjwH1FmqblbR47o5kd8pXXK07XnKfcqOGllPSTR%2FWdu5h%2BF95n9Wt5ZlOQlWvAwcldu5Jk8CxrD7jFfhYKMVggKTFPcE3R%2BfLqiOGVqnBXIqFFi4Mb2BdRxetdOODo2pIthbsKtCXG6%2Fid3CZSZqBwncGo9ul%2BHicstjOK39Y83cUZuUnOu9oBYETlGaU4OsXcNmSzaj%2FdQsS16Xy%2BZ2R79kBHIeEb4xjQGnQoksAzhIL%2FpNaqJSlcru6VVj893PDD0loUIGHqPMx5MJCut78GOqUBAcMWOrhTnoxUS1RyD%2FO4BfDtzWqabMLBvNjfhuRjG21dnD9uJtEIcqWefcHjoI1oB1wUkN42HCQjdT6Q2XRfpwUXLYSzx6Jp1wlbpj3sLhkcNQcwAYu9YnuE7Rdc8jaKvD6z%2BPi%2FoTQxTEuta%2FegKC3AEB9A4vPc9dZBiYbdrPx6Ab4VMu%2BsMCKG%2Fiv4OOyI8PxFL1KVYC8FD7T%2Fvn%2BqJk1w8g70&X-Amz-Signature=6c618f677b152548e1343d8dd4a03c4af191b00e46f354dbe5c2ba6ff99e396d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLFHHVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCQiHN0BGpvNUgyO4UHc6ufJDJ3qnxOxPdEuK2PnEJTDwIgblA8DFywvOJJ7FQDyZx4VILTar%2BaXCSUCO9e581let4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFA%2FE308E0dqk2HWgSrcAxTBy2lvJKaV%2BOKn1%2BQ0Wvv7imOB0Fi6oSUcZr7lGN437s2XPkGya1r1P1CJwW6lpZ7S9YzOWPRdHBCG2e79TAHi1FLxFcvirpR6jhC3QJE%2BYMmnPwUIuaUJtxE%2F506AdftGPfmavjmZx3vheJ1L1tfXMUBq4qAIv0p1Tv7kBWSBPZjxbKzj5bauNMGrKs0eMzusb%2By%2BeqwJy290i%2FMIvlNYfVwWOeOS97BYAGZsRj7I7I%2BAlQVMbCOJQOaCjBASp5M1asDBsKbePsppyjPvYrQ9%2Fpe0mU2I9tW%2FraeH%2F4xAWWb%2F3Y7vM8eonpLoClkYk%2FSRreWNoKkJY6jjknHd5ioUW7zmdkKRUk04UUCLoEH7HJjjwH1FmqblbR47o5kd8pXXK07XnKfcqOGllPSTR%2FWdu5h%2BF95n9Wt5ZlOQlWvAwcldu5Jk8CxrD7jFfhYKMVggKTFPcE3R%2BfLqiOGVqnBXIqFFi4Mb2BdRxetdOODo2pIthbsKtCXG6%2Fid3CZSZqBwncGo9ul%2BHicstjOK39Y83cUZuUnOu9oBYETlGaU4OsXcNmSzaj%2FdQsS16Xy%2BZ2R79kBHIeEb4xjQGnQoksAzhIL%2FpNaqJSlcru6VVj893PDD0loUIGHqPMx5MJCut78GOqUBAcMWOrhTnoxUS1RyD%2FO4BfDtzWqabMLBvNjfhuRjG21dnD9uJtEIcqWefcHjoI1oB1wUkN42HCQjdT6Q2XRfpwUXLYSzx6Jp1wlbpj3sLhkcNQcwAYu9YnuE7Rdc8jaKvD6z%2BPi%2FoTQxTEuta%2FegKC3AEB9A4vPc9dZBiYbdrPx6Ab4VMu%2BsMCKG%2Fiv4OOyI8PxFL1KVYC8FD7T%2Fvn%2BqJk1w8g70&X-Amz-Signature=3bb0d500ad1fe8be4f291f02c13f9e6320034a72d366d05172c93707d35624a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLFHHVA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCQiHN0BGpvNUgyO4UHc6ufJDJ3qnxOxPdEuK2PnEJTDwIgblA8DFywvOJJ7FQDyZx4VILTar%2BaXCSUCO9e581let4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFA%2FE308E0dqk2HWgSrcAxTBy2lvJKaV%2BOKn1%2BQ0Wvv7imOB0Fi6oSUcZr7lGN437s2XPkGya1r1P1CJwW6lpZ7S9YzOWPRdHBCG2e79TAHi1FLxFcvirpR6jhC3QJE%2BYMmnPwUIuaUJtxE%2F506AdftGPfmavjmZx3vheJ1L1tfXMUBq4qAIv0p1Tv7kBWSBPZjxbKzj5bauNMGrKs0eMzusb%2By%2BeqwJy290i%2FMIvlNYfVwWOeOS97BYAGZsRj7I7I%2BAlQVMbCOJQOaCjBASp5M1asDBsKbePsppyjPvYrQ9%2Fpe0mU2I9tW%2FraeH%2F4xAWWb%2F3Y7vM8eonpLoClkYk%2FSRreWNoKkJY6jjknHd5ioUW7zmdkKRUk04UUCLoEH7HJjjwH1FmqblbR47o5kd8pXXK07XnKfcqOGllPSTR%2FWdu5h%2BF95n9Wt5ZlOQlWvAwcldu5Jk8CxrD7jFfhYKMVggKTFPcE3R%2BfLqiOGVqnBXIqFFi4Mb2BdRxetdOODo2pIthbsKtCXG6%2Fid3CZSZqBwncGo9ul%2BHicstjOK39Y83cUZuUnOu9oBYETlGaU4OsXcNmSzaj%2FdQsS16Xy%2BZ2R79kBHIeEb4xjQGnQoksAzhIL%2FpNaqJSlcru6VVj893PDD0loUIGHqPMx5MJCut78GOqUBAcMWOrhTnoxUS1RyD%2FO4BfDtzWqabMLBvNjfhuRjG21dnD9uJtEIcqWefcHjoI1oB1wUkN42HCQjdT6Q2XRfpwUXLYSzx6Jp1wlbpj3sLhkcNQcwAYu9YnuE7Rdc8jaKvD6z%2BPi%2FoTQxTEuta%2FegKC3AEB9A4vPc9dZBiYbdrPx6Ab4VMu%2BsMCKG%2Fiv4OOyI8PxFL1KVYC8FD7T%2Fvn%2BqJk1w8g70&X-Amz-Signature=2d5adcb0f2a667dc5f62c65c2cce70d4f82cc2db722579adf88cbc4940684078&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
