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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BVUE2K%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEczPvoW9amBWXE7tqXJUDG84sOaes%2FMUdsYJ2ZWKVnhAiEA4TEKRGKF15CkiMOGZHblbwR4vS7w7YQRwS0TFT7QEsQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuX8llx2ORLJyDecSrcA4jmA5FGcP1KL746WicmBy%2FV18srA7Lr8mhMbQOME7RAAk%2FpjvvQxZiM1NA%2F2W8ZOuuPNA%2BBQQPcasdyQc%2FjcuxF137wTd6MImVEY1Bfs1FGQwoRPh0FEJIQq%2BkocCB9QOfKNSxAx1VCEkbbk4yoy%2FGaVxYDZl4XV7ZHUzwsABhifJnMwewQR6m3i1Ec88fT9xwjIcedXhpp%2BoyDoG9hLR%2Bydr9GIEzTj0qkue8%2B9VDZhPjuCfNn9Xu%2FjrObb%2BXTIzdltZYqAqMvusy5yx9jh2i0Vo0PD%2FFyCKM46Y0R0GTEJoayfBroOq5iDhw3b%2F3FTDbbOP%2BKcU6s1IefXb5tU7DMItwX5h0SQArz6tnJpGlNcU7FCUoFlP46EOrMTNUFMBpuc5cMKCDo%2Bme%2FZCyJzqA9NA9wLfPblW3RRJYk9Vs6XNhHkFtacC25cWPS1%2BwM3nFv8rBxYl2%2BgeM5eaSJF6CLNQbPJlJ53woSr%2FfDLUFFMFHLQTNeoKqLiBQis8nd1hM1zTRH9A9gAHhkVkbX0sHAwAlbQy0t5ufceCCs4MpQM%2B6RZzFQmDobDSjJ2fDk2cUYb0DHH9pKvT3IBuVBzvftbKEoplkNJzXRrtXLcGvTRvpZzdXE6M4z8QjBMPuhqr8GOqUB8mqhduY5SyQzDqQVEEyHC0uqfGe3ZpZNteQnq4J3u2MasfJDi36CBO%2Fs2XGCYKFSsfs50odgzhdN%2BXwPBYb4a%2B6RfMzPnFkCUWNSF4EzzAFsFBYHCOj2lwhPiPu%2BWBejMEj3lowFEyQ129jh79v0R8ahFvaSbqa35bn1KwYBwUGBxfsjBVlPVNewvxdRkm78VRGT4o1JbIeZjCAEjrmkfgS1KCA%2B&X-Amz-Signature=c951604f89796c8fa2c3c7d51baf63ffe065c3c0c46edd880855b295333f197e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BVUE2K%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEczPvoW9amBWXE7tqXJUDG84sOaes%2FMUdsYJ2ZWKVnhAiEA4TEKRGKF15CkiMOGZHblbwR4vS7w7YQRwS0TFT7QEsQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuX8llx2ORLJyDecSrcA4jmA5FGcP1KL746WicmBy%2FV18srA7Lr8mhMbQOME7RAAk%2FpjvvQxZiM1NA%2F2W8ZOuuPNA%2BBQQPcasdyQc%2FjcuxF137wTd6MImVEY1Bfs1FGQwoRPh0FEJIQq%2BkocCB9QOfKNSxAx1VCEkbbk4yoy%2FGaVxYDZl4XV7ZHUzwsABhifJnMwewQR6m3i1Ec88fT9xwjIcedXhpp%2BoyDoG9hLR%2Bydr9GIEzTj0qkue8%2B9VDZhPjuCfNn9Xu%2FjrObb%2BXTIzdltZYqAqMvusy5yx9jh2i0Vo0PD%2FFyCKM46Y0R0GTEJoayfBroOq5iDhw3b%2F3FTDbbOP%2BKcU6s1IefXb5tU7DMItwX5h0SQArz6tnJpGlNcU7FCUoFlP46EOrMTNUFMBpuc5cMKCDo%2Bme%2FZCyJzqA9NA9wLfPblW3RRJYk9Vs6XNhHkFtacC25cWPS1%2BwM3nFv8rBxYl2%2BgeM5eaSJF6CLNQbPJlJ53woSr%2FfDLUFFMFHLQTNeoKqLiBQis8nd1hM1zTRH9A9gAHhkVkbX0sHAwAlbQy0t5ufceCCs4MpQM%2B6RZzFQmDobDSjJ2fDk2cUYb0DHH9pKvT3IBuVBzvftbKEoplkNJzXRrtXLcGvTRvpZzdXE6M4z8QjBMPuhqr8GOqUB8mqhduY5SyQzDqQVEEyHC0uqfGe3ZpZNteQnq4J3u2MasfJDi36CBO%2Fs2XGCYKFSsfs50odgzhdN%2BXwPBYb4a%2B6RfMzPnFkCUWNSF4EzzAFsFBYHCOj2lwhPiPu%2BWBejMEj3lowFEyQ129jh79v0R8ahFvaSbqa35bn1KwYBwUGBxfsjBVlPVNewvxdRkm78VRGT4o1JbIeZjCAEjrmkfgS1KCA%2B&X-Amz-Signature=ab15435f1a58391c77427508c22443c56dfcd8d21a2144e9ddf874d198ff898c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BVUE2K%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEczPvoW9amBWXE7tqXJUDG84sOaes%2FMUdsYJ2ZWKVnhAiEA4TEKRGKF15CkiMOGZHblbwR4vS7w7YQRwS0TFT7QEsQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuX8llx2ORLJyDecSrcA4jmA5FGcP1KL746WicmBy%2FV18srA7Lr8mhMbQOME7RAAk%2FpjvvQxZiM1NA%2F2W8ZOuuPNA%2BBQQPcasdyQc%2FjcuxF137wTd6MImVEY1Bfs1FGQwoRPh0FEJIQq%2BkocCB9QOfKNSxAx1VCEkbbk4yoy%2FGaVxYDZl4XV7ZHUzwsABhifJnMwewQR6m3i1Ec88fT9xwjIcedXhpp%2BoyDoG9hLR%2Bydr9GIEzTj0qkue8%2B9VDZhPjuCfNn9Xu%2FjrObb%2BXTIzdltZYqAqMvusy5yx9jh2i0Vo0PD%2FFyCKM46Y0R0GTEJoayfBroOq5iDhw3b%2F3FTDbbOP%2BKcU6s1IefXb5tU7DMItwX5h0SQArz6tnJpGlNcU7FCUoFlP46EOrMTNUFMBpuc5cMKCDo%2Bme%2FZCyJzqA9NA9wLfPblW3RRJYk9Vs6XNhHkFtacC25cWPS1%2BwM3nFv8rBxYl2%2BgeM5eaSJF6CLNQbPJlJ53woSr%2FfDLUFFMFHLQTNeoKqLiBQis8nd1hM1zTRH9A9gAHhkVkbX0sHAwAlbQy0t5ufceCCs4MpQM%2B6RZzFQmDobDSjJ2fDk2cUYb0DHH9pKvT3IBuVBzvftbKEoplkNJzXRrtXLcGvTRvpZzdXE6M4z8QjBMPuhqr8GOqUB8mqhduY5SyQzDqQVEEyHC0uqfGe3ZpZNteQnq4J3u2MasfJDi36CBO%2Fs2XGCYKFSsfs50odgzhdN%2BXwPBYb4a%2B6RfMzPnFkCUWNSF4EzzAFsFBYHCOj2lwhPiPu%2BWBejMEj3lowFEyQ129jh79v0R8ahFvaSbqa35bn1KwYBwUGBxfsjBVlPVNewvxdRkm78VRGT4o1JbIeZjCAEjrmkfgS1KCA%2B&X-Amz-Signature=6fdb16b1d1de99fb96372e1b5a3019240aa795f9d33d68a91464570b1e12e633&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
