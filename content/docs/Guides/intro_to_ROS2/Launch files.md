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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJ4KNKB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD7X6Nbmup1GillSXWtwr%2B6C4XPj0JRVqUxQncl26pJtwIgWfZRzxu%2BP6443Jo5EoZ3oEG3ZR%2FcBKEbZya1cSUWcdsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDR2pjflv6sXBxz1TCrcA5OHRYIxWlPsBlmlGV5UeS0JnuNQgv4xfqV0mbJnONaiDcNVMBaH1XywXUwqZA0RJXGxvp3bqSjO9aiqFSlQ437CZaJEd2eUg9Gc9MuPDqMyvuZn4KonOZgYu2F8FDx2iv0QbMr7jRmwkVtqHWmt6XcvcH08Knyx8pWayraOOGaXXLqmXgj%2BE%2F6UH56UyW6McsGro8xeXn7bEZzNuNnjWLIJWJHIe6VPw4zhX3JjTnls%2Fca6b1K%2B%2BEQEjFbgwVO8WcMVVe2yBIwI9mqeMYT99vWaQE10VanpOzFcarJ%2Fa1RkuemmF03hMxaKcA64wzdRAz%2Fe%2FJbK170nmKyORBl3D9ekY3IAPP0uf66yWU3ajxjGCxbjYM42rI78tFAhgpnSiHCmg8nXnZM6RpqM5BZyGryxV1VlObeKYhgnqjWktsyi%2Bmu0yA35fC%2B3dp9GkKBhvP8lB%2BlExQasWDmE9%2BIwyzeATwNs%2BBoIY0cRbiMKM%2BVSZP3%2Bmib4NGWOPG7sEnEOiqkYUw6t1MnCTDhxnystQ%2FNdjt1jx8XKAjyQmQMe4p69fBY3GUsJw%2Ff%2B66ngssXQKvhpdvc96k2zF%2BEt1ERnH5KtvfV4eZ4c7EPjQbGz2D4Cq%2FBkMi%2Bn3W1MiL1qMImbisIGOqUBp0zm3CS1Ptp%2BAuwe1qic1UARNVrsYT6RmI0kYa%2B9WzSp3IuN0InEKBJ4cEp3GRZhxecv3r5D9RS%2BAENXw4Per8bb90q7dtgeySg02y9PO6cadk%2FuzyvHkBVUFfV2ZEfjaXnRORa6X%2BGHdRC4YBRbmTbkjiNP2VLDJXyDpDdGKLcblARKcjWo1Cy579CGEfNTqmvfz7RNgNDQSX5hOAQ68GtG4EAx&X-Amz-Signature=1f823ee69b6c634df08d82fa277206722c487ee8ce20d86eea6f62eca543a2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJ4KNKB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD7X6Nbmup1GillSXWtwr%2B6C4XPj0JRVqUxQncl26pJtwIgWfZRzxu%2BP6443Jo5EoZ3oEG3ZR%2FcBKEbZya1cSUWcdsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDR2pjflv6sXBxz1TCrcA5OHRYIxWlPsBlmlGV5UeS0JnuNQgv4xfqV0mbJnONaiDcNVMBaH1XywXUwqZA0RJXGxvp3bqSjO9aiqFSlQ437CZaJEd2eUg9Gc9MuPDqMyvuZn4KonOZgYu2F8FDx2iv0QbMr7jRmwkVtqHWmt6XcvcH08Knyx8pWayraOOGaXXLqmXgj%2BE%2F6UH56UyW6McsGro8xeXn7bEZzNuNnjWLIJWJHIe6VPw4zhX3JjTnls%2Fca6b1K%2B%2BEQEjFbgwVO8WcMVVe2yBIwI9mqeMYT99vWaQE10VanpOzFcarJ%2Fa1RkuemmF03hMxaKcA64wzdRAz%2Fe%2FJbK170nmKyORBl3D9ekY3IAPP0uf66yWU3ajxjGCxbjYM42rI78tFAhgpnSiHCmg8nXnZM6RpqM5BZyGryxV1VlObeKYhgnqjWktsyi%2Bmu0yA35fC%2B3dp9GkKBhvP8lB%2BlExQasWDmE9%2BIwyzeATwNs%2BBoIY0cRbiMKM%2BVSZP3%2Bmib4NGWOPG7sEnEOiqkYUw6t1MnCTDhxnystQ%2FNdjt1jx8XKAjyQmQMe4p69fBY3GUsJw%2Ff%2B66ngssXQKvhpdvc96k2zF%2BEt1ERnH5KtvfV4eZ4c7EPjQbGz2D4Cq%2FBkMi%2Bn3W1MiL1qMImbisIGOqUBp0zm3CS1Ptp%2BAuwe1qic1UARNVrsYT6RmI0kYa%2B9WzSp3IuN0InEKBJ4cEp3GRZhxecv3r5D9RS%2BAENXw4Per8bb90q7dtgeySg02y9PO6cadk%2FuzyvHkBVUFfV2ZEfjaXnRORa6X%2BGHdRC4YBRbmTbkjiNP2VLDJXyDpDdGKLcblARKcjWo1Cy579CGEfNTqmvfz7RNgNDQSX5hOAQ68GtG4EAx&X-Amz-Signature=7c963ee8e4fbd5ad62b0a0c641cdaa0bf783a5b14f5f5728e8e1e6e379108ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJ4KNKB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD7X6Nbmup1GillSXWtwr%2B6C4XPj0JRVqUxQncl26pJtwIgWfZRzxu%2BP6443Jo5EoZ3oEG3ZR%2FcBKEbZya1cSUWcdsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDR2pjflv6sXBxz1TCrcA5OHRYIxWlPsBlmlGV5UeS0JnuNQgv4xfqV0mbJnONaiDcNVMBaH1XywXUwqZA0RJXGxvp3bqSjO9aiqFSlQ437CZaJEd2eUg9Gc9MuPDqMyvuZn4KonOZgYu2F8FDx2iv0QbMr7jRmwkVtqHWmt6XcvcH08Knyx8pWayraOOGaXXLqmXgj%2BE%2F6UH56UyW6McsGro8xeXn7bEZzNuNnjWLIJWJHIe6VPw4zhX3JjTnls%2Fca6b1K%2B%2BEQEjFbgwVO8WcMVVe2yBIwI9mqeMYT99vWaQE10VanpOzFcarJ%2Fa1RkuemmF03hMxaKcA64wzdRAz%2Fe%2FJbK170nmKyORBl3D9ekY3IAPP0uf66yWU3ajxjGCxbjYM42rI78tFAhgpnSiHCmg8nXnZM6RpqM5BZyGryxV1VlObeKYhgnqjWktsyi%2Bmu0yA35fC%2B3dp9GkKBhvP8lB%2BlExQasWDmE9%2BIwyzeATwNs%2BBoIY0cRbiMKM%2BVSZP3%2Bmib4NGWOPG7sEnEOiqkYUw6t1MnCTDhxnystQ%2FNdjt1jx8XKAjyQmQMe4p69fBY3GUsJw%2Ff%2B66ngssXQKvhpdvc96k2zF%2BEt1ERnH5KtvfV4eZ4c7EPjQbGz2D4Cq%2FBkMi%2Bn3W1MiL1qMImbisIGOqUBp0zm3CS1Ptp%2BAuwe1qic1UARNVrsYT6RmI0kYa%2B9WzSp3IuN0InEKBJ4cEp3GRZhxecv3r5D9RS%2BAENXw4Per8bb90q7dtgeySg02y9PO6cadk%2FuzyvHkBVUFfV2ZEfjaXnRORa6X%2BGHdRC4YBRbmTbkjiNP2VLDJXyDpDdGKLcblARKcjWo1Cy579CGEfNTqmvfz7RNgNDQSX5hOAQ68GtG4EAx&X-Amz-Signature=cdcba0ed1026c708d81ed5c9631d21c3bc2ac26b85af42fba7b1421351907b93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
