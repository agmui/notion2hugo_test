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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6SBIQ6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIC4YXJV34Xk08cwHJBrdfjFqL3GD73IutU%2BwxG4E2dzJAiBhjgkYdVzCBG%2BlqDKoaFKrZTz4Ud01atstnxxOFksvuCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMqsYnDIjPa4HxLyJUKtwDS3zGNMRWKUyjMxRQ3ATW31EWWVXRbp0s2gPTEhqMV7CJT63%2BrFcA6xUeSgEblJCq%2FAWfcvD4Anl0FXT9BtznqZub%2B45%2FO9o4kCpT9ABqCuWwDsAPuMHyh5pYkkAn%2B377g42ytteokEyDY%2BRy12bNiFOZHHiDq2GLGvymehrrmnbHWZb%2B2dbX4hDC21Bl78uCxKUPTt7w5Fpd7BlDZ%2FMCSED88zHwVdtbxjdbgCq3STMEUTDnWbLZ1XAsXp1sUmol%2F45kG5OqPvQMydt6MFisSIO3M6bW3YFY6EdSV%2FFWc%2FUVh5ceMZt2uVh%2FEJjxdwWaQN36qawh0IlZ5tJIq0aSTlOVeb5NIHkkcwL84h2ze%2Bx%2BLwQxPFEUtLRMwn6l4VWIs8rwJNTZK8imRboxGEbuL%2Fs00HsMzkDpkqpml4l8sxrkB%2Fo5AwrhkUFUNsY8erW9NHHzdVlO2zI2Wbtg1jyPcA2hEsXaaf%2FRSIBIB%2BUuqerOBSOWKZwQtQ33bR9YIFp0196boo3qTIigcx0p4%2F7wwQ3zDOlTyQBivrORcGos5yy9tT87Sn7idHCt0i06Rs61Os1wEAZ7cp4nHNDjBeRGgxC3V5oaa%2FCMDx8lJdYfIga0KhXUh%2FZVmjsZhd0woO6RvQY6pgHwZcfT3sCY0tVHw7XlbeppvyUKQ7As%2BX4n8knG6wsSZfvy7r0JqtJ8rWBAElxh%2F44WkHO5NQfI36y3zNkBBdkslsb6ATulpkBnH%2FmWfO1tDvpv0eRAYm4piuNx90Ae0H91kAKGH%2BpHslf4riFyx%2Bxpu6nkj0rMNK1JthffRqB3uG7%2BjPc4v5wpDw8C8TZG9mpMNXx%2BERI4wHhKnjbKadOcWV4MFrL0&X-Amz-Signature=e7dcb2c3e72266703a963575a9e8ea994b65f34ba693097dce547da1285eeb76&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6SBIQ6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIC4YXJV34Xk08cwHJBrdfjFqL3GD73IutU%2BwxG4E2dzJAiBhjgkYdVzCBG%2BlqDKoaFKrZTz4Ud01atstnxxOFksvuCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMqsYnDIjPa4HxLyJUKtwDS3zGNMRWKUyjMxRQ3ATW31EWWVXRbp0s2gPTEhqMV7CJT63%2BrFcA6xUeSgEblJCq%2FAWfcvD4Anl0FXT9BtznqZub%2B45%2FO9o4kCpT9ABqCuWwDsAPuMHyh5pYkkAn%2B377g42ytteokEyDY%2BRy12bNiFOZHHiDq2GLGvymehrrmnbHWZb%2B2dbX4hDC21Bl78uCxKUPTt7w5Fpd7BlDZ%2FMCSED88zHwVdtbxjdbgCq3STMEUTDnWbLZ1XAsXp1sUmol%2F45kG5OqPvQMydt6MFisSIO3M6bW3YFY6EdSV%2FFWc%2FUVh5ceMZt2uVh%2FEJjxdwWaQN36qawh0IlZ5tJIq0aSTlOVeb5NIHkkcwL84h2ze%2Bx%2BLwQxPFEUtLRMwn6l4VWIs8rwJNTZK8imRboxGEbuL%2Fs00HsMzkDpkqpml4l8sxrkB%2Fo5AwrhkUFUNsY8erW9NHHzdVlO2zI2Wbtg1jyPcA2hEsXaaf%2FRSIBIB%2BUuqerOBSOWKZwQtQ33bR9YIFp0196boo3qTIigcx0p4%2F7wwQ3zDOlTyQBivrORcGos5yy9tT87Sn7idHCt0i06Rs61Os1wEAZ7cp4nHNDjBeRGgxC3V5oaa%2FCMDx8lJdYfIga0KhXUh%2FZVmjsZhd0woO6RvQY6pgHwZcfT3sCY0tVHw7XlbeppvyUKQ7As%2BX4n8knG6wsSZfvy7r0JqtJ8rWBAElxh%2F44WkHO5NQfI36y3zNkBBdkslsb6ATulpkBnH%2FmWfO1tDvpv0eRAYm4piuNx90Ae0H91kAKGH%2BpHslf4riFyx%2Bxpu6nkj0rMNK1JthffRqB3uG7%2BjPc4v5wpDw8C8TZG9mpMNXx%2BERI4wHhKnjbKadOcWV4MFrL0&X-Amz-Signature=bfedf4647ad00e5885d989921f43122695f9448d4309b2c6a6cca509c1bcd881&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6SBIQ6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIC4YXJV34Xk08cwHJBrdfjFqL3GD73IutU%2BwxG4E2dzJAiBhjgkYdVzCBG%2BlqDKoaFKrZTz4Ud01atstnxxOFksvuCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMqsYnDIjPa4HxLyJUKtwDS3zGNMRWKUyjMxRQ3ATW31EWWVXRbp0s2gPTEhqMV7CJT63%2BrFcA6xUeSgEblJCq%2FAWfcvD4Anl0FXT9BtznqZub%2B45%2FO9o4kCpT9ABqCuWwDsAPuMHyh5pYkkAn%2B377g42ytteokEyDY%2BRy12bNiFOZHHiDq2GLGvymehrrmnbHWZb%2B2dbX4hDC21Bl78uCxKUPTt7w5Fpd7BlDZ%2FMCSED88zHwVdtbxjdbgCq3STMEUTDnWbLZ1XAsXp1sUmol%2F45kG5OqPvQMydt6MFisSIO3M6bW3YFY6EdSV%2FFWc%2FUVh5ceMZt2uVh%2FEJjxdwWaQN36qawh0IlZ5tJIq0aSTlOVeb5NIHkkcwL84h2ze%2Bx%2BLwQxPFEUtLRMwn6l4VWIs8rwJNTZK8imRboxGEbuL%2Fs00HsMzkDpkqpml4l8sxrkB%2Fo5AwrhkUFUNsY8erW9NHHzdVlO2zI2Wbtg1jyPcA2hEsXaaf%2FRSIBIB%2BUuqerOBSOWKZwQtQ33bR9YIFp0196boo3qTIigcx0p4%2F7wwQ3zDOlTyQBivrORcGos5yy9tT87Sn7idHCt0i06Rs61Os1wEAZ7cp4nHNDjBeRGgxC3V5oaa%2FCMDx8lJdYfIga0KhXUh%2FZVmjsZhd0woO6RvQY6pgHwZcfT3sCY0tVHw7XlbeppvyUKQ7As%2BX4n8knG6wsSZfvy7r0JqtJ8rWBAElxh%2F44WkHO5NQfI36y3zNkBBdkslsb6ATulpkBnH%2FmWfO1tDvpv0eRAYm4piuNx90Ae0H91kAKGH%2BpHslf4riFyx%2Bxpu6nkj0rMNK1JthffRqB3uG7%2BjPc4v5wpDw8C8TZG9mpMNXx%2BERI4wHhKnjbKadOcWV4MFrL0&X-Amz-Signature=2bfd94c43c4e732e7e56492a1150df331f1540b14427dfca60fd743a32343a02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
