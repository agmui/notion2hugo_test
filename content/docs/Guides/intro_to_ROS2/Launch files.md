---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GFZ3ZO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgndHDJGcOacNMBJy%2BixSwecuU7WMZ6tH5OvttjzH%2BAAiAKKVvw4oPlWXHIl3cQJGHt9jlQUMB64Y6mY2zKS8q2WyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOW1vK71hW8VP0KS4KtwDsXEAsF%2FttRzn9yne%2BuJiJWQqVSjasze6jPdAJfsaAeQ1VXZVCq52gUlSU37TquECDaojIIAND4qBxFySDpPauCL5QTd%2BSFat5o4B5BldhAWJwDVca0TXEh4FTEKVIOJdmHbvx4MIXZqvxFhkV7ntWT13alK0IvJW%2BNoXjK4BtoqM%2BZBjZ1cULGa1nSpl8cxz4%2BKjh9mrPOpsRT%2BJn8TLqd4hmkzrgnIov3t0YbcRyMpDaA3Zw%2FCDo8jvRBynlwXm4asLIiFkdv0LJB8HzY%2BY5P7kMKqHupKWDrm1sdu%2B4r3BmAqy7XINwkb9QoOVdsFd9kRcLFlf5tsJs60f5nWQI9g5QbdAROr7yM71yHGLtDJKP7Jyd9w%2BhrJf0xN4BNC0fOk3hrdmboHcWjxDnZPnJ%2FMxbb7tE8TjpzMsF9BKh9qQCPd9VJeb5wB9ZyDs29wmkIzho2D71cc03vd6MqiifnRkqALsRWARDD37IRJdx%2BWBdqnev7T2VuvQKpI4BqptKV%2B7KXrwVpTqysycJMbJmCgAMpnWr%2BlnyFE2BFxzAJzMRWirPiaoH%2BVRlsbrykdG%2B0RIt5xsEIp%2BGsDKLSo8M4Y3HJNFvdYswuHsc3DrUgQbZYCwPWkPMUatYc0wmdWzxAY6pgGg2tETUOoLazYFryotZqMPffzHgYqCLLzMzlkPkBYM7GuoTE0dXjvUwDtMYhRt7khRs2SaU92rn%2B7wmXUZNz7M2Y9aOYJsTxcQ0NeAsWWlF15eqN6TI0iL7JoAMyxaRXioNrPVuHJzNkNymgB9TJL7JSYFhBfCI29kvYadLEqkwUCB3HAlNLyjAYvmgy0hJ2a%2FMK29krg6FrZRjFVUUm%2BswF5EaJls&X-Amz-Signature=ac723c18ff46913b832d15e41739ebc40da5a7feb045145534a111aafe9d38fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GFZ3ZO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgndHDJGcOacNMBJy%2BixSwecuU7WMZ6tH5OvttjzH%2BAAiAKKVvw4oPlWXHIl3cQJGHt9jlQUMB64Y6mY2zKS8q2WyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOW1vK71hW8VP0KS4KtwDsXEAsF%2FttRzn9yne%2BuJiJWQqVSjasze6jPdAJfsaAeQ1VXZVCq52gUlSU37TquECDaojIIAND4qBxFySDpPauCL5QTd%2BSFat5o4B5BldhAWJwDVca0TXEh4FTEKVIOJdmHbvx4MIXZqvxFhkV7ntWT13alK0IvJW%2BNoXjK4BtoqM%2BZBjZ1cULGa1nSpl8cxz4%2BKjh9mrPOpsRT%2BJn8TLqd4hmkzrgnIov3t0YbcRyMpDaA3Zw%2FCDo8jvRBynlwXm4asLIiFkdv0LJB8HzY%2BY5P7kMKqHupKWDrm1sdu%2B4r3BmAqy7XINwkb9QoOVdsFd9kRcLFlf5tsJs60f5nWQI9g5QbdAROr7yM71yHGLtDJKP7Jyd9w%2BhrJf0xN4BNC0fOk3hrdmboHcWjxDnZPnJ%2FMxbb7tE8TjpzMsF9BKh9qQCPd9VJeb5wB9ZyDs29wmkIzho2D71cc03vd6MqiifnRkqALsRWARDD37IRJdx%2BWBdqnev7T2VuvQKpI4BqptKV%2B7KXrwVpTqysycJMbJmCgAMpnWr%2BlnyFE2BFxzAJzMRWirPiaoH%2BVRlsbrykdG%2B0RIt5xsEIp%2BGsDKLSo8M4Y3HJNFvdYswuHsc3DrUgQbZYCwPWkPMUatYc0wmdWzxAY6pgGg2tETUOoLazYFryotZqMPffzHgYqCLLzMzlkPkBYM7GuoTE0dXjvUwDtMYhRt7khRs2SaU92rn%2B7wmXUZNz7M2Y9aOYJsTxcQ0NeAsWWlF15eqN6TI0iL7JoAMyxaRXioNrPVuHJzNkNymgB9TJL7JSYFhBfCI29kvYadLEqkwUCB3HAlNLyjAYvmgy0hJ2a%2FMK29krg6FrZRjFVUUm%2BswF5EaJls&X-Amz-Signature=f432fc89b45b25e5aac7664ee712878bce6e64decc4f01fd496e1596c9a250ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GFZ3ZO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgndHDJGcOacNMBJy%2BixSwecuU7WMZ6tH5OvttjzH%2BAAiAKKVvw4oPlWXHIl3cQJGHt9jlQUMB64Y6mY2zKS8q2WyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOW1vK71hW8VP0KS4KtwDsXEAsF%2FttRzn9yne%2BuJiJWQqVSjasze6jPdAJfsaAeQ1VXZVCq52gUlSU37TquECDaojIIAND4qBxFySDpPauCL5QTd%2BSFat5o4B5BldhAWJwDVca0TXEh4FTEKVIOJdmHbvx4MIXZqvxFhkV7ntWT13alK0IvJW%2BNoXjK4BtoqM%2BZBjZ1cULGa1nSpl8cxz4%2BKjh9mrPOpsRT%2BJn8TLqd4hmkzrgnIov3t0YbcRyMpDaA3Zw%2FCDo8jvRBynlwXm4asLIiFkdv0LJB8HzY%2BY5P7kMKqHupKWDrm1sdu%2B4r3BmAqy7XINwkb9QoOVdsFd9kRcLFlf5tsJs60f5nWQI9g5QbdAROr7yM71yHGLtDJKP7Jyd9w%2BhrJf0xN4BNC0fOk3hrdmboHcWjxDnZPnJ%2FMxbb7tE8TjpzMsF9BKh9qQCPd9VJeb5wB9ZyDs29wmkIzho2D71cc03vd6MqiifnRkqALsRWARDD37IRJdx%2BWBdqnev7T2VuvQKpI4BqptKV%2B7KXrwVpTqysycJMbJmCgAMpnWr%2BlnyFE2BFxzAJzMRWirPiaoH%2BVRlsbrykdG%2B0RIt5xsEIp%2BGsDKLSo8M4Y3HJNFvdYswuHsc3DrUgQbZYCwPWkPMUatYc0wmdWzxAY6pgGg2tETUOoLazYFryotZqMPffzHgYqCLLzMzlkPkBYM7GuoTE0dXjvUwDtMYhRt7khRs2SaU92rn%2B7wmXUZNz7M2Y9aOYJsTxcQ0NeAsWWlF15eqN6TI0iL7JoAMyxaRXioNrPVuHJzNkNymgB9TJL7JSYFhBfCI29kvYadLEqkwUCB3HAlNLyjAYvmgy0hJ2a%2FMK29krg6FrZRjFVUUm%2BswF5EaJls&X-Amz-Signature=81577cbeba4ffa3c25bc6e5b3ab2fd22df7435063c284b5559bb86daa298b07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
