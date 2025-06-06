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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ75YX7W%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICyAuHJTf9QBeBcf%2FDF54aN%2Ft%2BPvIHG3k1E%2BvPzdufGBAiEAjh87LyFHQBF0E8PggRKm1GWer%2BCYKQrveAhW5vefqTkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPO8FP28Sl%2Bc%2FqjhcyrcA8epk6gxFAQMu9g28VSPfJbv%2BhPcWbJkUMRC%2FJJ5PrFp3X4drN%2BEy0J3zl9efrNGRg9QZXNCiTiNxKpq4lHv3RvEeSKIWqAZgjPiUwoxUH9totqWpb1wQXhiORn7IJFKfMHlaQR56ukJCarmIgeyeo2g8OS%2FsQR1F1WzwT79m0TXL%2BxN7QPvxmMGXytrdCh%2Bqn14c%2BKGRT%2FSXOjCx4HxXn1SqMT0eyEDTyrTeOtYOT%2FUW3jCAeII2DL8cefm%2FCd1G1sFLCDzlYF88bH5cK16D4NxDZoBLecqWOlAhAbZe9E%2FDk5MKBp1NgrbbwumvtvtX%2B9LUgBmB37YBnax8S%2FyXuiGJbd4zs3WCDLVTqXvzGPOZxpe7J1T5w9c3DmM0UR5ll8by7WPyLM0iur1YPe4xKybqNY8iYC%2F5%2FRUpK%2B2n7Ef9Mv1ZXv9G46NPCYgkVCiXvT6uN30vVfIj1O0LXtvPuUMtfKwTrMmd2Bx5Dj0FllXJ%2FlZcwQQ%2BLWRLlIHwbj0RViFknFUy6XES8i0w3cSmVmFBKyWZsGLs3fs9fB%2BqR8xShD4o66gvO3sATa3AHWOeCByJWMsVGda9ZrOTD%2BKT1JVdp9nPwfDg%2BsbIKXCLLO0Kpz%2BBYS6bzfzWwlYMIT6iMIGOqUB3pM3LGG52GviBdHLGvFu5TctSTnNi0r4wY89VpxAk8S2Iv3Sh%2FFWNs%2BYoQjf%2F8MV8Ap9XEWHzYW1glhGU0kbJ2DGWcr2cYDGdpXCCOM6u%2BkdP7V7zxLez%2FdaVrYrGrNb9GVgn2QbG9X7YpYSfu33KMgwQ9G1Rz73hxiqId7W%2FhMqCZuuaNn1b6Llvkl4t6QLCcdkJJWryokDqryKG%2Bl4hqVDQfqR&X-Amz-Signature=fc2d1d5cff26f51cfe34e40e845cfad643dc6dcafcf72020ddaaa33795504c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ75YX7W%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICyAuHJTf9QBeBcf%2FDF54aN%2Ft%2BPvIHG3k1E%2BvPzdufGBAiEAjh87LyFHQBF0E8PggRKm1GWer%2BCYKQrveAhW5vefqTkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPO8FP28Sl%2Bc%2FqjhcyrcA8epk6gxFAQMu9g28VSPfJbv%2BhPcWbJkUMRC%2FJJ5PrFp3X4drN%2BEy0J3zl9efrNGRg9QZXNCiTiNxKpq4lHv3RvEeSKIWqAZgjPiUwoxUH9totqWpb1wQXhiORn7IJFKfMHlaQR56ukJCarmIgeyeo2g8OS%2FsQR1F1WzwT79m0TXL%2BxN7QPvxmMGXytrdCh%2Bqn14c%2BKGRT%2FSXOjCx4HxXn1SqMT0eyEDTyrTeOtYOT%2FUW3jCAeII2DL8cefm%2FCd1G1sFLCDzlYF88bH5cK16D4NxDZoBLecqWOlAhAbZe9E%2FDk5MKBp1NgrbbwumvtvtX%2B9LUgBmB37YBnax8S%2FyXuiGJbd4zs3WCDLVTqXvzGPOZxpe7J1T5w9c3DmM0UR5ll8by7WPyLM0iur1YPe4xKybqNY8iYC%2F5%2FRUpK%2B2n7Ef9Mv1ZXv9G46NPCYgkVCiXvT6uN30vVfIj1O0LXtvPuUMtfKwTrMmd2Bx5Dj0FllXJ%2FlZcwQQ%2BLWRLlIHwbj0RViFknFUy6XES8i0w3cSmVmFBKyWZsGLs3fs9fB%2BqR8xShD4o66gvO3sATa3AHWOeCByJWMsVGda9ZrOTD%2BKT1JVdp9nPwfDg%2BsbIKXCLLO0Kpz%2BBYS6bzfzWwlYMIT6iMIGOqUB3pM3LGG52GviBdHLGvFu5TctSTnNi0r4wY89VpxAk8S2Iv3Sh%2FFWNs%2BYoQjf%2F8MV8Ap9XEWHzYW1glhGU0kbJ2DGWcr2cYDGdpXCCOM6u%2BkdP7V7zxLez%2FdaVrYrGrNb9GVgn2QbG9X7YpYSfu33KMgwQ9G1Rz73hxiqId7W%2FhMqCZuuaNn1b6Llvkl4t6QLCcdkJJWryokDqryKG%2Bl4hqVDQfqR&X-Amz-Signature=35c56f2cd699fb9507a94fcc9fd00e69204fe64275e5427da14a744f44d73763&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ75YX7W%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICyAuHJTf9QBeBcf%2FDF54aN%2Ft%2BPvIHG3k1E%2BvPzdufGBAiEAjh87LyFHQBF0E8PggRKm1GWer%2BCYKQrveAhW5vefqTkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPO8FP28Sl%2Bc%2FqjhcyrcA8epk6gxFAQMu9g28VSPfJbv%2BhPcWbJkUMRC%2FJJ5PrFp3X4drN%2BEy0J3zl9efrNGRg9QZXNCiTiNxKpq4lHv3RvEeSKIWqAZgjPiUwoxUH9totqWpb1wQXhiORn7IJFKfMHlaQR56ukJCarmIgeyeo2g8OS%2FsQR1F1WzwT79m0TXL%2BxN7QPvxmMGXytrdCh%2Bqn14c%2BKGRT%2FSXOjCx4HxXn1SqMT0eyEDTyrTeOtYOT%2FUW3jCAeII2DL8cefm%2FCd1G1sFLCDzlYF88bH5cK16D4NxDZoBLecqWOlAhAbZe9E%2FDk5MKBp1NgrbbwumvtvtX%2B9LUgBmB37YBnax8S%2FyXuiGJbd4zs3WCDLVTqXvzGPOZxpe7J1T5w9c3DmM0UR5ll8by7WPyLM0iur1YPe4xKybqNY8iYC%2F5%2FRUpK%2B2n7Ef9Mv1ZXv9G46NPCYgkVCiXvT6uN30vVfIj1O0LXtvPuUMtfKwTrMmd2Bx5Dj0FllXJ%2FlZcwQQ%2BLWRLlIHwbj0RViFknFUy6XES8i0w3cSmVmFBKyWZsGLs3fs9fB%2BqR8xShD4o66gvO3sATa3AHWOeCByJWMsVGda9ZrOTD%2BKT1JVdp9nPwfDg%2BsbIKXCLLO0Kpz%2BBYS6bzfzWwlYMIT6iMIGOqUB3pM3LGG52GviBdHLGvFu5TctSTnNi0r4wY89VpxAk8S2Iv3Sh%2FFWNs%2BYoQjf%2F8MV8Ap9XEWHzYW1glhGU0kbJ2DGWcr2cYDGdpXCCOM6u%2BkdP7V7zxLez%2FdaVrYrGrNb9GVgn2QbG9X7YpYSfu33KMgwQ9G1Rz73hxiqId7W%2FhMqCZuuaNn1b6Llvkl4t6QLCcdkJJWryokDqryKG%2Bl4hqVDQfqR&X-Amz-Signature=328cae8b8967dfad836431aa3de4cd63e08af8c39249074d3629a2bb7d2bd740&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
