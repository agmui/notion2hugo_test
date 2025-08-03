---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYCTSWGZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQY7mQT5y7xgH%2B706LiE2vrICcA7k3Lnc6ZVn4baM5wIgEpKNC%2FJEejHe9NqV8n9UpdCIdz0LyXwAqUzZ%2BqPxdYUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA%2FMFKxIMh8Bck0m3yrcA2Oir3gPOccPEt20Akh5mJW3o0tZMVXl1J8GOcrk88ouKw2K6KJG7R209bktUsP0fwb5yE48nKA0W5Dx61mamGSsUabYD4zzNmNVmxdDv5OAaImjuWNnWkJ9KIDnMTj58Br3XbEDFyDKE%2FtIPLPdzhRpj9nKwNIRg9970iMkwTkZq9luq6Tg3Iu0xboCmyuZ5c36bA4JcBmBV8%2Bu5zWf3QAp8RMIjzPBEGCDls2X4yLpOd%2BSi4Ga7lZwO7BcOYOCpSivGEh5yT%2F886u2UImjTnE8xpjB2DyVOUoA6xboWl0r9eK8Ow3%2BQBn8vrc5ppeQuOtOFddr9pIGIbb6gUkU0IIfGIrbHHEY9YIE2Pa7Gp2NrkOQ8Ka3qemMPuynO0MdRzpvaKa0L9n9XMMRx2wXgfEnm5gKZJflLxkOVTNOUPemMsl18Lec4BRm5OZQeDW6CuoAekz6Hz89fJ4TVNl8qS65nP5gPqb33QMvxgkKSo2IR6p6dcSjlfurL56eDUIgrwt66Zw%2FH0mF%2F7CwOfeD70%2BkrmXuE2w8PJNiXffYSUPO3qk%2B4uAfk6lwQO%2BSp7GwnkpZfcBMQwnU3NTvz3d4sopWqSX%2FZkj4DpDjrxRcWasA9dB5ywV3sOvvIs4nMKSju8QGOqUBPs%2BJhcHui7A67n08SZWeAMLDFosFr6KzjO1qtFVXj5JYqM2iRMO2DJc4RfCnKXF34VEPUBYVNjrNgMosurBG7t8RXYhht6V5290dIYhAAH5qdFfl3%2FbXlbKH6QNqjKvsOUmMCt66oFAnOGYJais%2Fh0rN0G%2FOgpa5xaPxydz7eAdjxyK3MSvkIorlJxhcXDoJy0kpKIz3a1HAY4s4O5tKzWybyZXM&X-Amz-Signature=92f5e9c0ed37ed5c13a1eddcac1e8a2ccf8d21026524e23ccdc7ba5597488b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYCTSWGZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQY7mQT5y7xgH%2B706LiE2vrICcA7k3Lnc6ZVn4baM5wIgEpKNC%2FJEejHe9NqV8n9UpdCIdz0LyXwAqUzZ%2BqPxdYUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA%2FMFKxIMh8Bck0m3yrcA2Oir3gPOccPEt20Akh5mJW3o0tZMVXl1J8GOcrk88ouKw2K6KJG7R209bktUsP0fwb5yE48nKA0W5Dx61mamGSsUabYD4zzNmNVmxdDv5OAaImjuWNnWkJ9KIDnMTj58Br3XbEDFyDKE%2FtIPLPdzhRpj9nKwNIRg9970iMkwTkZq9luq6Tg3Iu0xboCmyuZ5c36bA4JcBmBV8%2Bu5zWf3QAp8RMIjzPBEGCDls2X4yLpOd%2BSi4Ga7lZwO7BcOYOCpSivGEh5yT%2F886u2UImjTnE8xpjB2DyVOUoA6xboWl0r9eK8Ow3%2BQBn8vrc5ppeQuOtOFddr9pIGIbb6gUkU0IIfGIrbHHEY9YIE2Pa7Gp2NrkOQ8Ka3qemMPuynO0MdRzpvaKa0L9n9XMMRx2wXgfEnm5gKZJflLxkOVTNOUPemMsl18Lec4BRm5OZQeDW6CuoAekz6Hz89fJ4TVNl8qS65nP5gPqb33QMvxgkKSo2IR6p6dcSjlfurL56eDUIgrwt66Zw%2FH0mF%2F7CwOfeD70%2BkrmXuE2w8PJNiXffYSUPO3qk%2B4uAfk6lwQO%2BSp7GwnkpZfcBMQwnU3NTvz3d4sopWqSX%2FZkj4DpDjrxRcWasA9dB5ywV3sOvvIs4nMKSju8QGOqUBPs%2BJhcHui7A67n08SZWeAMLDFosFr6KzjO1qtFVXj5JYqM2iRMO2DJc4RfCnKXF34VEPUBYVNjrNgMosurBG7t8RXYhht6V5290dIYhAAH5qdFfl3%2FbXlbKH6QNqjKvsOUmMCt66oFAnOGYJais%2Fh0rN0G%2FOgpa5xaPxydz7eAdjxyK3MSvkIorlJxhcXDoJy0kpKIz3a1HAY4s4O5tKzWybyZXM&X-Amz-Signature=a6b8d108e83cc1da63c6cc2d2a6c79f5be894f5e3c4640e662e434d2051878da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYCTSWGZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQY7mQT5y7xgH%2B706LiE2vrICcA7k3Lnc6ZVn4baM5wIgEpKNC%2FJEejHe9NqV8n9UpdCIdz0LyXwAqUzZ%2BqPxdYUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA%2FMFKxIMh8Bck0m3yrcA2Oir3gPOccPEt20Akh5mJW3o0tZMVXl1J8GOcrk88ouKw2K6KJG7R209bktUsP0fwb5yE48nKA0W5Dx61mamGSsUabYD4zzNmNVmxdDv5OAaImjuWNnWkJ9KIDnMTj58Br3XbEDFyDKE%2FtIPLPdzhRpj9nKwNIRg9970iMkwTkZq9luq6Tg3Iu0xboCmyuZ5c36bA4JcBmBV8%2Bu5zWf3QAp8RMIjzPBEGCDls2X4yLpOd%2BSi4Ga7lZwO7BcOYOCpSivGEh5yT%2F886u2UImjTnE8xpjB2DyVOUoA6xboWl0r9eK8Ow3%2BQBn8vrc5ppeQuOtOFddr9pIGIbb6gUkU0IIfGIrbHHEY9YIE2Pa7Gp2NrkOQ8Ka3qemMPuynO0MdRzpvaKa0L9n9XMMRx2wXgfEnm5gKZJflLxkOVTNOUPemMsl18Lec4BRm5OZQeDW6CuoAekz6Hz89fJ4TVNl8qS65nP5gPqb33QMvxgkKSo2IR6p6dcSjlfurL56eDUIgrwt66Zw%2FH0mF%2F7CwOfeD70%2BkrmXuE2w8PJNiXffYSUPO3qk%2B4uAfk6lwQO%2BSp7GwnkpZfcBMQwnU3NTvz3d4sopWqSX%2FZkj4DpDjrxRcWasA9dB5ywV3sOvvIs4nMKSju8QGOqUBPs%2BJhcHui7A67n08SZWeAMLDFosFr6KzjO1qtFVXj5JYqM2iRMO2DJc4RfCnKXF34VEPUBYVNjrNgMosurBG7t8RXYhht6V5290dIYhAAH5qdFfl3%2FbXlbKH6QNqjKvsOUmMCt66oFAnOGYJais%2Fh0rN0G%2FOgpa5xaPxydz7eAdjxyK3MSvkIorlJxhcXDoJy0kpKIz3a1HAY4s4O5tKzWybyZXM&X-Amz-Signature=ff08486377fccae0cb775aff7a071e02efa4ec53f57c6d699516c2decdd52f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
