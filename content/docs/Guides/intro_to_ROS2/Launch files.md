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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2AXYD5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFbgHrPqYDqIJV1SKG5m5jxLkNSIvThQ4vJnVJFzxqXAiBSySx56sFTTQIadoWK2gO3jCRxXvgOMU3gsL2HLZJf9iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCyjHBSUu7HkJDK6KtwDmR1PnyenmrTamGYCsTqZz4c0EU0%2F9jzZan%2B2tJmi4fc0F9i639VfHBt4jdZ4qrR0%2Foc3maGn0Cg1im3AijL4h7ObXHYmI5g107VbXoQo17aGHXng991wylo4H%2B3HBQ4UHJ2Hi5xodxe8KQ0PnCPtSlKITCDn9XCMVTdlIobnl4gaBod7jrWV1zPbu3voDkXOae%2B%2FnD35gPvu5NicaghZnJNXzOasQirmppUQv4GLMQdlcJyN9oxSMdnYkAYUuBqbWzwvH2yPZK3PX%2BIcOo49IJd08OdW3ocXZwELZzL8luEL7sh1bi3HoVifng12Q%2BDtSuxf3c5o%2FZfWlwb%2BvNk6GiHyqoiphSd8yWA7QDM8omT8aEXZ%2FZ9%2FcNtcZdNgNQDDKWPWkNfXck%2Fbk9IEKeCvcU7bMaWPZ9boxEGXuE4feEndmcZhc1LqbSkEipgAiQwYz8mFdJ%2F%2BQQ3Ztn0kVRyCXV0jhy8NtBLVRTwgVv7rgvJdk8H%2BJuuw%2FKIKY91yWPNd7eNFQiM%2F08IbtAdFvjpmwNFJYIabn9VDaRHxRI6SyqwgfOK%2FQHZOYBtR0CycabJIQ2Vq%2BVb2PaKk73LUFaFY9SJimM3RhBr6qMzVSNYruBlkuYUYar5oAfMimGkwsvnrwwY6pgFO5DxQqBIrYspSGad0dJ%2B8PTVZwlH3aQ7NZxw7a1t5qmqo%2F9wwwqR%2Bs7uVi%2BnzJi4Fhu4P4A7gzkF97s2p3b6V0AWyvAD7zLUxKmIXhvUHqMZPGQoW5SIzE%2BHRX50BGFcCc4jKFQUpwIcWyaZMVS6Mr2AgvmVnPVFAigKZ2H5HaBuWJTr8ExZHG5paru6tsHmnDfoBiiTry2h5T5p1uFw1wtt3JnxY&X-Amz-Signature=1cbdb9b85a4f5aa2103fb0c452fc9e9956d77f64087e9147830b17d755759157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2AXYD5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFbgHrPqYDqIJV1SKG5m5jxLkNSIvThQ4vJnVJFzxqXAiBSySx56sFTTQIadoWK2gO3jCRxXvgOMU3gsL2HLZJf9iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCyjHBSUu7HkJDK6KtwDmR1PnyenmrTamGYCsTqZz4c0EU0%2F9jzZan%2B2tJmi4fc0F9i639VfHBt4jdZ4qrR0%2Foc3maGn0Cg1im3AijL4h7ObXHYmI5g107VbXoQo17aGHXng991wylo4H%2B3HBQ4UHJ2Hi5xodxe8KQ0PnCPtSlKITCDn9XCMVTdlIobnl4gaBod7jrWV1zPbu3voDkXOae%2B%2FnD35gPvu5NicaghZnJNXzOasQirmppUQv4GLMQdlcJyN9oxSMdnYkAYUuBqbWzwvH2yPZK3PX%2BIcOo49IJd08OdW3ocXZwELZzL8luEL7sh1bi3HoVifng12Q%2BDtSuxf3c5o%2FZfWlwb%2BvNk6GiHyqoiphSd8yWA7QDM8omT8aEXZ%2FZ9%2FcNtcZdNgNQDDKWPWkNfXck%2Fbk9IEKeCvcU7bMaWPZ9boxEGXuE4feEndmcZhc1LqbSkEipgAiQwYz8mFdJ%2F%2BQQ3Ztn0kVRyCXV0jhy8NtBLVRTwgVv7rgvJdk8H%2BJuuw%2FKIKY91yWPNd7eNFQiM%2F08IbtAdFvjpmwNFJYIabn9VDaRHxRI6SyqwgfOK%2FQHZOYBtR0CycabJIQ2Vq%2BVb2PaKk73LUFaFY9SJimM3RhBr6qMzVSNYruBlkuYUYar5oAfMimGkwsvnrwwY6pgFO5DxQqBIrYspSGad0dJ%2B8PTVZwlH3aQ7NZxw7a1t5qmqo%2F9wwwqR%2Bs7uVi%2BnzJi4Fhu4P4A7gzkF97s2p3b6V0AWyvAD7zLUxKmIXhvUHqMZPGQoW5SIzE%2BHRX50BGFcCc4jKFQUpwIcWyaZMVS6Mr2AgvmVnPVFAigKZ2H5HaBuWJTr8ExZHG5paru6tsHmnDfoBiiTry2h5T5p1uFw1wtt3JnxY&X-Amz-Signature=b96f82e49fc97ccf0418811bc7ca6c4a0987370b1b0aaebd9bcbb699a6096199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2AXYD5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFbgHrPqYDqIJV1SKG5m5jxLkNSIvThQ4vJnVJFzxqXAiBSySx56sFTTQIadoWK2gO3jCRxXvgOMU3gsL2HLZJf9iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCyjHBSUu7HkJDK6KtwDmR1PnyenmrTamGYCsTqZz4c0EU0%2F9jzZan%2B2tJmi4fc0F9i639VfHBt4jdZ4qrR0%2Foc3maGn0Cg1im3AijL4h7ObXHYmI5g107VbXoQo17aGHXng991wylo4H%2B3HBQ4UHJ2Hi5xodxe8KQ0PnCPtSlKITCDn9XCMVTdlIobnl4gaBod7jrWV1zPbu3voDkXOae%2B%2FnD35gPvu5NicaghZnJNXzOasQirmppUQv4GLMQdlcJyN9oxSMdnYkAYUuBqbWzwvH2yPZK3PX%2BIcOo49IJd08OdW3ocXZwELZzL8luEL7sh1bi3HoVifng12Q%2BDtSuxf3c5o%2FZfWlwb%2BvNk6GiHyqoiphSd8yWA7QDM8omT8aEXZ%2FZ9%2FcNtcZdNgNQDDKWPWkNfXck%2Fbk9IEKeCvcU7bMaWPZ9boxEGXuE4feEndmcZhc1LqbSkEipgAiQwYz8mFdJ%2F%2BQQ3Ztn0kVRyCXV0jhy8NtBLVRTwgVv7rgvJdk8H%2BJuuw%2FKIKY91yWPNd7eNFQiM%2F08IbtAdFvjpmwNFJYIabn9VDaRHxRI6SyqwgfOK%2FQHZOYBtR0CycabJIQ2Vq%2BVb2PaKk73LUFaFY9SJimM3RhBr6qMzVSNYruBlkuYUYar5oAfMimGkwsvnrwwY6pgFO5DxQqBIrYspSGad0dJ%2B8PTVZwlH3aQ7NZxw7a1t5qmqo%2F9wwwqR%2Bs7uVi%2BnzJi4Fhu4P4A7gzkF97s2p3b6V0AWyvAD7zLUxKmIXhvUHqMZPGQoW5SIzE%2BHRX50BGFcCc4jKFQUpwIcWyaZMVS6Mr2AgvmVnPVFAigKZ2H5HaBuWJTr8ExZHG5paru6tsHmnDfoBiiTry2h5T5p1uFw1wtt3JnxY&X-Amz-Signature=58f988849bf1a3d7914119d8f7fd4760bc10a86d6dba1737638b3677161dfdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
