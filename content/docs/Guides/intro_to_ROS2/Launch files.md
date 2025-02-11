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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEXTKBO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiG5IIPCWf3qbHFPV%2BtYIvEMe83rII6Bl%2F9gsxibRoRAiEAwhCGzRmORqCDGz2ft1mfqJswL9X%2B5zoKuogKRWijx%2BAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVdZ%2Fkt%2FNr3sAYyCrcAxdLzM22ojL62y4isXiPaOibE67lUyZksSUkOwiXb%2FKrobptgUaunATMAK6A0TAt%2BcXzs3LzQufBmnf3z72ANHS6BcmuJ0SBcQpAbekFJd8ft28cfPcYmwf0qX85Rr9bllOzeCJEg73LlAWTbLviOSTSuJkV5h3oXm5j7SkT89rWkBsrU5dUl9PwOzvf4BfLizkKtw7JnPf22vx5X%2FnnjS4NYDPb6%2B%2BGn7nwwdQVMMaH6MrXA20d35Zg%2BZ5w%2BsrTdLc1vqpSMrkOVnojoJ0M%2FcntYvk4zwZwzuaQmy47y8i%2B7aaOsTMHCzkgtkBmeCCbV7I3fQNTwfOl1x%2F2stl2B2qIEnTkDQovT8JyfUqfiBA5MSVzZ36l%2B2GYuicBuy1pI3YangO679sCSeCzwNTkpbmhP3OJQ40mGTqsjHbqvUL8HwP9R6CuqGBsrK6%2Bord1VcwPu9itfyolo%2FsA1WwMjj6M%2BHVUK%2BYFw9k6x1G6s3P6uGLabaeePCx0XSpJuj9DRtjrYXZBe2RRJ%2BlKkbTxsoV%2BFv24eEMIk1dXxjlJEelWbgdtDyUfqDmkhh3GUkUE%2B7HCYD4WMFi8kB3SaL9iTMyY6ljatjqySIkSQcQEsAMCbra4UWIgEUpYFQrUMKjurL0GOqUBBK%2FZmrJTFBbLOHnELocq8cqj9skWxY7XCrOkOm3k4IyJXaI8h9hhSApXGoZGw8eigxnJBNe7TwnKefeWybB7%2FWVRSx4Ik8aLw%2Flfh0K4yl6KhiJocCqtEYeWCTdRx3plWgCzy1K8awxivEbAIxT26%2FepvyKygf5wl9XLvW%2BQOOHLFCgmaUPPIe0dj4fdLwRXiIvUCMbkIPonPYQToKPHZLYiQ4fg&X-Amz-Signature=37f4854032196e891d5ef15c087db8899c326e30277816012d5e0651046a2780&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEXTKBO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiG5IIPCWf3qbHFPV%2BtYIvEMe83rII6Bl%2F9gsxibRoRAiEAwhCGzRmORqCDGz2ft1mfqJswL9X%2B5zoKuogKRWijx%2BAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVdZ%2Fkt%2FNr3sAYyCrcAxdLzM22ojL62y4isXiPaOibE67lUyZksSUkOwiXb%2FKrobptgUaunATMAK6A0TAt%2BcXzs3LzQufBmnf3z72ANHS6BcmuJ0SBcQpAbekFJd8ft28cfPcYmwf0qX85Rr9bllOzeCJEg73LlAWTbLviOSTSuJkV5h3oXm5j7SkT89rWkBsrU5dUl9PwOzvf4BfLizkKtw7JnPf22vx5X%2FnnjS4NYDPb6%2B%2BGn7nwwdQVMMaH6MrXA20d35Zg%2BZ5w%2BsrTdLc1vqpSMrkOVnojoJ0M%2FcntYvk4zwZwzuaQmy47y8i%2B7aaOsTMHCzkgtkBmeCCbV7I3fQNTwfOl1x%2F2stl2B2qIEnTkDQovT8JyfUqfiBA5MSVzZ36l%2B2GYuicBuy1pI3YangO679sCSeCzwNTkpbmhP3OJQ40mGTqsjHbqvUL8HwP9R6CuqGBsrK6%2Bord1VcwPu9itfyolo%2FsA1WwMjj6M%2BHVUK%2BYFw9k6x1G6s3P6uGLabaeePCx0XSpJuj9DRtjrYXZBe2RRJ%2BlKkbTxsoV%2BFv24eEMIk1dXxjlJEelWbgdtDyUfqDmkhh3GUkUE%2B7HCYD4WMFi8kB3SaL9iTMyY6ljatjqySIkSQcQEsAMCbra4UWIgEUpYFQrUMKjurL0GOqUBBK%2FZmrJTFBbLOHnELocq8cqj9skWxY7XCrOkOm3k4IyJXaI8h9hhSApXGoZGw8eigxnJBNe7TwnKefeWybB7%2FWVRSx4Ik8aLw%2Flfh0K4yl6KhiJocCqtEYeWCTdRx3plWgCzy1K8awxivEbAIxT26%2FepvyKygf5wl9XLvW%2BQOOHLFCgmaUPPIe0dj4fdLwRXiIvUCMbkIPonPYQToKPHZLYiQ4fg&X-Amz-Signature=991aee1c66ced1781719e61921191707faaf6909242c466a9bf150fdc140cecc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXEXTKBO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiG5IIPCWf3qbHFPV%2BtYIvEMe83rII6Bl%2F9gsxibRoRAiEAwhCGzRmORqCDGz2ft1mfqJswL9X%2B5zoKuogKRWijx%2BAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTVdZ%2Fkt%2FNr3sAYyCrcAxdLzM22ojL62y4isXiPaOibE67lUyZksSUkOwiXb%2FKrobptgUaunATMAK6A0TAt%2BcXzs3LzQufBmnf3z72ANHS6BcmuJ0SBcQpAbekFJd8ft28cfPcYmwf0qX85Rr9bllOzeCJEg73LlAWTbLviOSTSuJkV5h3oXm5j7SkT89rWkBsrU5dUl9PwOzvf4BfLizkKtw7JnPf22vx5X%2FnnjS4NYDPb6%2B%2BGn7nwwdQVMMaH6MrXA20d35Zg%2BZ5w%2BsrTdLc1vqpSMrkOVnojoJ0M%2FcntYvk4zwZwzuaQmy47y8i%2B7aaOsTMHCzkgtkBmeCCbV7I3fQNTwfOl1x%2F2stl2B2qIEnTkDQovT8JyfUqfiBA5MSVzZ36l%2B2GYuicBuy1pI3YangO679sCSeCzwNTkpbmhP3OJQ40mGTqsjHbqvUL8HwP9R6CuqGBsrK6%2Bord1VcwPu9itfyolo%2FsA1WwMjj6M%2BHVUK%2BYFw9k6x1G6s3P6uGLabaeePCx0XSpJuj9DRtjrYXZBe2RRJ%2BlKkbTxsoV%2BFv24eEMIk1dXxjlJEelWbgdtDyUfqDmkhh3GUkUE%2B7HCYD4WMFi8kB3SaL9iTMyY6ljatjqySIkSQcQEsAMCbra4UWIgEUpYFQrUMKjurL0GOqUBBK%2FZmrJTFBbLOHnELocq8cqj9skWxY7XCrOkOm3k4IyJXaI8h9hhSApXGoZGw8eigxnJBNe7TwnKefeWybB7%2FWVRSx4Ik8aLw%2Flfh0K4yl6KhiJocCqtEYeWCTdRx3plWgCzy1K8awxivEbAIxT26%2FepvyKygf5wl9XLvW%2BQOOHLFCgmaUPPIe0dj4fdLwRXiIvUCMbkIPonPYQToKPHZLYiQ4fg&X-Amz-Signature=b2292eb3b51c448428a1760f33c1e6fc693ca51d81686d36c24c9a3d86da9820&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
