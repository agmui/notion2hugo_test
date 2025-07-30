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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VZWVYAX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQIys7SsczR2bzzq5QY7M8LqKNBe32SfxukGKfSFt9owIhANp2kGJyGyG5zBTAu5WRmkbwSnsqmRiWqMecVSJ5zXGjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwiq8DST0DSFAB0WRkq3ANy4L2jrHmQrVjc6CnxKuWu%2BKEkO0%2BFSRpjV0FNseN6rhVqa86cuJhzbLxH4eOLqlapVPOHbAAWBIKpDD6umzcRRPtLdaE%2Bj6WtwDVCKizDxocPYt5nmW%2B1L14ilA8xuQDpwCJINox36eSQeJF1aH86RGTJjW74H5dovZkhdH5O8W%2BULjQALo0a2FffNgIUQXRe8pB7Fu010wMFlrPB4edDJoVphwltYwu8i%2F3a63MtlcJ3p2Ro5nBfMDSK6nL4rO3FHdt7MDAwDpoQ2kua3GJ3pH8zsx07BZ0e1eFjjMzrlD27qM%2BkngUPqy4c5rrdqkldEeuvBEElxB3CMqYJtrODzqRrEmKHBvSB9RlXGDHfWS14ICvG0r6NFnonhS9%2FBVMf3f%2B4WgTGmr95kUzlJW06OBdJlBwO39%2BsMxGZDGMrm0kwcB5X6AXRwr74WJpmSD%2BQBqIHfy7S2MBPyJthigU5pY0zYX9Mn7PMCLp4Kx9sGdx47hE%2BtE5Zywi6oSHjuheQjx65LQEjbnRcgynD9bbYAhGQfAPEUmqsaR780Rw%2FQeHpEpqLrJBDxoSLv0e3WVA6%2FMRzobHdjiB2TqDUg6AZEk1uka7B9nlS4Zu%2F2WCWPj0mDT8GMjm8P2hIVTC68qXEBjqkATqTOXStk4UKRiFhtp1bbipOFvVlviIli9rTVRKgBR2tANXHtXPKw2Marn9ACvma2YEjSw6DbMgyLLvo2hFDqyxJMoWbKiIRdvmIRzA6hjX5QO4sYw%2FAhHnxIqIcOec8XayeawIscsq5EEvboT2ogBE58cBKTS%2FMMJAfZyWIVY5zFEx5yM93P54BaHMapVXxhpxIiQ4EfP8Gybe7xCiMvOk%2FowzM&X-Amz-Signature=1eceea649cb46a85a9d9b413581c2cc1d89b4ea486e5f1104ef4d4b55f19076a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VZWVYAX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQIys7SsczR2bzzq5QY7M8LqKNBe32SfxukGKfSFt9owIhANp2kGJyGyG5zBTAu5WRmkbwSnsqmRiWqMecVSJ5zXGjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwiq8DST0DSFAB0WRkq3ANy4L2jrHmQrVjc6CnxKuWu%2BKEkO0%2BFSRpjV0FNseN6rhVqa86cuJhzbLxH4eOLqlapVPOHbAAWBIKpDD6umzcRRPtLdaE%2Bj6WtwDVCKizDxocPYt5nmW%2B1L14ilA8xuQDpwCJINox36eSQeJF1aH86RGTJjW74H5dovZkhdH5O8W%2BULjQALo0a2FffNgIUQXRe8pB7Fu010wMFlrPB4edDJoVphwltYwu8i%2F3a63MtlcJ3p2Ro5nBfMDSK6nL4rO3FHdt7MDAwDpoQ2kua3GJ3pH8zsx07BZ0e1eFjjMzrlD27qM%2BkngUPqy4c5rrdqkldEeuvBEElxB3CMqYJtrODzqRrEmKHBvSB9RlXGDHfWS14ICvG0r6NFnonhS9%2FBVMf3f%2B4WgTGmr95kUzlJW06OBdJlBwO39%2BsMxGZDGMrm0kwcB5X6AXRwr74WJpmSD%2BQBqIHfy7S2MBPyJthigU5pY0zYX9Mn7PMCLp4Kx9sGdx47hE%2BtE5Zywi6oSHjuheQjx65LQEjbnRcgynD9bbYAhGQfAPEUmqsaR780Rw%2FQeHpEpqLrJBDxoSLv0e3WVA6%2FMRzobHdjiB2TqDUg6AZEk1uka7B9nlS4Zu%2F2WCWPj0mDT8GMjm8P2hIVTC68qXEBjqkATqTOXStk4UKRiFhtp1bbipOFvVlviIli9rTVRKgBR2tANXHtXPKw2Marn9ACvma2YEjSw6DbMgyLLvo2hFDqyxJMoWbKiIRdvmIRzA6hjX5QO4sYw%2FAhHnxIqIcOec8XayeawIscsq5EEvboT2ogBE58cBKTS%2FMMJAfZyWIVY5zFEx5yM93P54BaHMapVXxhpxIiQ4EfP8Gybe7xCiMvOk%2FowzM&X-Amz-Signature=11914181f48342ac2e0d0638baef7bdbc257c934092c91dee0f13d8ad25872bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VZWVYAX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQIys7SsczR2bzzq5QY7M8LqKNBe32SfxukGKfSFt9owIhANp2kGJyGyG5zBTAu5WRmkbwSnsqmRiWqMecVSJ5zXGjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwiq8DST0DSFAB0WRkq3ANy4L2jrHmQrVjc6CnxKuWu%2BKEkO0%2BFSRpjV0FNseN6rhVqa86cuJhzbLxH4eOLqlapVPOHbAAWBIKpDD6umzcRRPtLdaE%2Bj6WtwDVCKizDxocPYt5nmW%2B1L14ilA8xuQDpwCJINox36eSQeJF1aH86RGTJjW74H5dovZkhdH5O8W%2BULjQALo0a2FffNgIUQXRe8pB7Fu010wMFlrPB4edDJoVphwltYwu8i%2F3a63MtlcJ3p2Ro5nBfMDSK6nL4rO3FHdt7MDAwDpoQ2kua3GJ3pH8zsx07BZ0e1eFjjMzrlD27qM%2BkngUPqy4c5rrdqkldEeuvBEElxB3CMqYJtrODzqRrEmKHBvSB9RlXGDHfWS14ICvG0r6NFnonhS9%2FBVMf3f%2B4WgTGmr95kUzlJW06OBdJlBwO39%2BsMxGZDGMrm0kwcB5X6AXRwr74WJpmSD%2BQBqIHfy7S2MBPyJthigU5pY0zYX9Mn7PMCLp4Kx9sGdx47hE%2BtE5Zywi6oSHjuheQjx65LQEjbnRcgynD9bbYAhGQfAPEUmqsaR780Rw%2FQeHpEpqLrJBDxoSLv0e3WVA6%2FMRzobHdjiB2TqDUg6AZEk1uka7B9nlS4Zu%2F2WCWPj0mDT8GMjm8P2hIVTC68qXEBjqkATqTOXStk4UKRiFhtp1bbipOFvVlviIli9rTVRKgBR2tANXHtXPKw2Marn9ACvma2YEjSw6DbMgyLLvo2hFDqyxJMoWbKiIRdvmIRzA6hjX5QO4sYw%2FAhHnxIqIcOec8XayeawIscsq5EEvboT2ogBE58cBKTS%2FMMJAfZyWIVY5zFEx5yM93P54BaHMapVXxhpxIiQ4EfP8Gybe7xCiMvOk%2FowzM&X-Amz-Signature=99f73a402a557ac138f59acfd5bbbad58fc6af9cf31733fc4f3bf1e1d180226e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
