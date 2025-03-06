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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7MGA7N%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2BhNr1sCSy9fv7xRuONvhXPzoD5XkgNzJtk9MJRs8%2BgIhALZiA8MMq2Avnu1UQz80ZlIwVbPKsbDb8v%2FS6jDbNlhwKv8DCCQQABoMNjM3NDIzMTgzODA1IgwRscMOz90c9fP0PJ8q3AN6Bt6%2BEA%2FGJnGtYe8csiMZMTFs3Fqoh1Qzs0UrldAtcF3WfKfGc4tC4VRjExiKr%2BL9pk50GzDCykH3q3c5qXfH%2B7hBNgOfxM33E3zFxL7sBC9Jyvlm%2F60jqJZA1%2FxkdSgJ6zPh1Uws458IvbaOjs990mDT9JLElyuxV7gKhZXs9rvXSCGor6BaHbuGt%2FV2MNBbBFfJKSSiisgYVBt4HZEW2rYXRwxnaBjBgZKEXbck3vSo0B2cJFPpho9nW6zn7l19%2BWw9nUA4i5MyVs6IfqtntpUe%2FlZN93mC1ZK1c81muAZ0uMG08tMGDhAaoWF6SPwy4IMx3qfApRk1RGSuTkvrImSN25hzcaaIMITRXQLYnz5pR71psKGfsnoJ2gzjnvkD9jHkY7aKmgv7cQRXEfPn%2FUX8uq97bfo%2FAsOgq0dQhx%2B9Amm89rfmcV5A9WvsGgEn26HUrTpZJYgYdb7lXATrLCbGpggP1UhBA1GZAsjI34881z5MVQJJUFHWkg2niLZJKsxDxCKsTqQGHNXX0B9ZkjixvHVMVBvfJYcXw17fN5Kn%2FcYkkzMCAM%2BoLywYKjbp7FOvzbBnIvAx6ji3vaZKXqClVXOkbnLDb5kVLbMybOnOt30xmJ3Bzw7vtTDdlaS%2BBjqkARV7Kx1O07m7Crt6BjCElM0OVdXDOUaoenNDJI%2F2zrCcwstaRHjf8bX%2BarbtZn14qNlmaoCYfmE%2FGYA8hub4HoWR%2FVjNZPQRkBfmo37DtXPsbcnMbqwA41PUMv0n3qOaLz4gZiAi1eeo6ZbLdtPioc3cIP0LySxjaO69rJKbxfAwXEq%2B5zzCa4EA3ZeM6MfTPmANOINBbA9K%2FFKqsBLZ6QtQd7tQ&X-Amz-Signature=ff3f02f9f2eee5c098c03882377301feb7ea4d243699589e1815e2e095d57dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7MGA7N%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2BhNr1sCSy9fv7xRuONvhXPzoD5XkgNzJtk9MJRs8%2BgIhALZiA8MMq2Avnu1UQz80ZlIwVbPKsbDb8v%2FS6jDbNlhwKv8DCCQQABoMNjM3NDIzMTgzODA1IgwRscMOz90c9fP0PJ8q3AN6Bt6%2BEA%2FGJnGtYe8csiMZMTFs3Fqoh1Qzs0UrldAtcF3WfKfGc4tC4VRjExiKr%2BL9pk50GzDCykH3q3c5qXfH%2B7hBNgOfxM33E3zFxL7sBC9Jyvlm%2F60jqJZA1%2FxkdSgJ6zPh1Uws458IvbaOjs990mDT9JLElyuxV7gKhZXs9rvXSCGor6BaHbuGt%2FV2MNBbBFfJKSSiisgYVBt4HZEW2rYXRwxnaBjBgZKEXbck3vSo0B2cJFPpho9nW6zn7l19%2BWw9nUA4i5MyVs6IfqtntpUe%2FlZN93mC1ZK1c81muAZ0uMG08tMGDhAaoWF6SPwy4IMx3qfApRk1RGSuTkvrImSN25hzcaaIMITRXQLYnz5pR71psKGfsnoJ2gzjnvkD9jHkY7aKmgv7cQRXEfPn%2FUX8uq97bfo%2FAsOgq0dQhx%2B9Amm89rfmcV5A9WvsGgEn26HUrTpZJYgYdb7lXATrLCbGpggP1UhBA1GZAsjI34881z5MVQJJUFHWkg2niLZJKsxDxCKsTqQGHNXX0B9ZkjixvHVMVBvfJYcXw17fN5Kn%2FcYkkzMCAM%2BoLywYKjbp7FOvzbBnIvAx6ji3vaZKXqClVXOkbnLDb5kVLbMybOnOt30xmJ3Bzw7vtTDdlaS%2BBjqkARV7Kx1O07m7Crt6BjCElM0OVdXDOUaoenNDJI%2F2zrCcwstaRHjf8bX%2BarbtZn14qNlmaoCYfmE%2FGYA8hub4HoWR%2FVjNZPQRkBfmo37DtXPsbcnMbqwA41PUMv0n3qOaLz4gZiAi1eeo6ZbLdtPioc3cIP0LySxjaO69rJKbxfAwXEq%2B5zzCa4EA3ZeM6MfTPmANOINBbA9K%2FFKqsBLZ6QtQd7tQ&X-Amz-Signature=48b865fddd2c46c10fe4b0c9b7eeec4eaa48652266b55d3b0f97dcd7798284b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7MGA7N%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2%2BhNr1sCSy9fv7xRuONvhXPzoD5XkgNzJtk9MJRs8%2BgIhALZiA8MMq2Avnu1UQz80ZlIwVbPKsbDb8v%2FS6jDbNlhwKv8DCCQQABoMNjM3NDIzMTgzODA1IgwRscMOz90c9fP0PJ8q3AN6Bt6%2BEA%2FGJnGtYe8csiMZMTFs3Fqoh1Qzs0UrldAtcF3WfKfGc4tC4VRjExiKr%2BL9pk50GzDCykH3q3c5qXfH%2B7hBNgOfxM33E3zFxL7sBC9Jyvlm%2F60jqJZA1%2FxkdSgJ6zPh1Uws458IvbaOjs990mDT9JLElyuxV7gKhZXs9rvXSCGor6BaHbuGt%2FV2MNBbBFfJKSSiisgYVBt4HZEW2rYXRwxnaBjBgZKEXbck3vSo0B2cJFPpho9nW6zn7l19%2BWw9nUA4i5MyVs6IfqtntpUe%2FlZN93mC1ZK1c81muAZ0uMG08tMGDhAaoWF6SPwy4IMx3qfApRk1RGSuTkvrImSN25hzcaaIMITRXQLYnz5pR71psKGfsnoJ2gzjnvkD9jHkY7aKmgv7cQRXEfPn%2FUX8uq97bfo%2FAsOgq0dQhx%2B9Amm89rfmcV5A9WvsGgEn26HUrTpZJYgYdb7lXATrLCbGpggP1UhBA1GZAsjI34881z5MVQJJUFHWkg2niLZJKsxDxCKsTqQGHNXX0B9ZkjixvHVMVBvfJYcXw17fN5Kn%2FcYkkzMCAM%2BoLywYKjbp7FOvzbBnIvAx6ji3vaZKXqClVXOkbnLDb5kVLbMybOnOt30xmJ3Bzw7vtTDdlaS%2BBjqkARV7Kx1O07m7Crt6BjCElM0OVdXDOUaoenNDJI%2F2zrCcwstaRHjf8bX%2BarbtZn14qNlmaoCYfmE%2FGYA8hub4HoWR%2FVjNZPQRkBfmo37DtXPsbcnMbqwA41PUMv0n3qOaLz4gZiAi1eeo6ZbLdtPioc3cIP0LySxjaO69rJKbxfAwXEq%2B5zzCa4EA3ZeM6MfTPmANOINBbA9K%2FFKqsBLZ6QtQd7tQ&X-Amz-Signature=5b3604425b2cb04b73e7ab9e7d596ee1323c665e35e72dcfc6b280914e10246a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
