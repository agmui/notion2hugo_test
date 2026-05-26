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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYFP4SY%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz2T%2BAY4LIwU8s5vzi4kOgRSMzUHrG4kziRpbAu%2Bk7EAiEAgOdygKaIuNzBxH725M7ZRjZ%2FA8erAEb6yca6SdX1cLsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyW26K16UppYuCWcircA1V83v0D9%2F3P4ssvvRNMalRj4vYdM3zuTNEVE%2Bvazc%2FuzqatBe3v0grnbnaaI5l5%2FyHGMh7tmEf0Y26KOxdwl8442FYlwLLrubNLwhpjbZScvLD4idJxQnkVQjxjRyxSGIpHKXSYmkPl0yR%2BCy%2BCcv9Ca0tJ9VEL54JQe3JHSukNdaA4iXcbdYwm3eqyadaT2L16nYBf7wOzKgWdJ58as3PZkk6niGk0UUK7VZtMNSL3ZyExJHcnYPoNC6GttzZ%2BiZguX5KGWDqUCITIfQLTWWuYeowaIgmW037FtgBuMn9%2BNfymlO%2FYlrk4aU9R0v48VBaedGA74eKm0mZSR4VonRdCegfyhOUmoWwOtIeaw1ab7Fq90xy6JjPq3zi3IM8JG5XNtsRBKxAyU0dq9ZY%2BcU4K9pMmfnqZRnwOmkKevtEDGoIBtMbosmeA%2BYKL55OwzUJbRsAP4LcFX2BYD3%2FsJWG93Hp1MRO0LsnMsKZNZ4y4jpLfsE4bCMo%2B2vt2y9gQmi40%2FbwgJWPpvDOzbDGLC2UYtpBjuNG3z%2FVLXTslxtjapT0i4Z89KzQV0stmvEEQhxrNFd%2Ba55vXOZBstRw8w1qb%2BolM51QCLA69ZKw8h0YUfzeh2ldP%2BAek%2BA4qMPj509AGOqUBnSi%2FMr5VpWz%2F3mttEkGF6XdwXa92z7uVpDfH3ooJiD%2FtfGGS70TJpLK5ljQZOaihFoV2w6PuNR0LfiT5m9FsPuRPkP2dAArtf%2BRl8TAxjOhsY3o2MGe32CkJKG0T0znAHJSKU%2BkLe9uACAynhPj9Yz7NWkV%2BxGdP214zbVqhnacPI0gGUYqI2dj8N6sp8nyIKKBqjhH6oCm9E3YcP%2F4brXWtN7R3&X-Amz-Signature=174e6074b333a5e3ec52d2870da081858395b60ef5bd067670e7afe3e26067a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYFP4SY%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz2T%2BAY4LIwU8s5vzi4kOgRSMzUHrG4kziRpbAu%2Bk7EAiEAgOdygKaIuNzBxH725M7ZRjZ%2FA8erAEb6yca6SdX1cLsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyW26K16UppYuCWcircA1V83v0D9%2F3P4ssvvRNMalRj4vYdM3zuTNEVE%2Bvazc%2FuzqatBe3v0grnbnaaI5l5%2FyHGMh7tmEf0Y26KOxdwl8442FYlwLLrubNLwhpjbZScvLD4idJxQnkVQjxjRyxSGIpHKXSYmkPl0yR%2BCy%2BCcv9Ca0tJ9VEL54JQe3JHSukNdaA4iXcbdYwm3eqyadaT2L16nYBf7wOzKgWdJ58as3PZkk6niGk0UUK7VZtMNSL3ZyExJHcnYPoNC6GttzZ%2BiZguX5KGWDqUCITIfQLTWWuYeowaIgmW037FtgBuMn9%2BNfymlO%2FYlrk4aU9R0v48VBaedGA74eKm0mZSR4VonRdCegfyhOUmoWwOtIeaw1ab7Fq90xy6JjPq3zi3IM8JG5XNtsRBKxAyU0dq9ZY%2BcU4K9pMmfnqZRnwOmkKevtEDGoIBtMbosmeA%2BYKL55OwzUJbRsAP4LcFX2BYD3%2FsJWG93Hp1MRO0LsnMsKZNZ4y4jpLfsE4bCMo%2B2vt2y9gQmi40%2FbwgJWPpvDOzbDGLC2UYtpBjuNG3z%2FVLXTslxtjapT0i4Z89KzQV0stmvEEQhxrNFd%2Ba55vXOZBstRw8w1qb%2BolM51QCLA69ZKw8h0YUfzeh2ldP%2BAek%2BA4qMPj509AGOqUBnSi%2FMr5VpWz%2F3mttEkGF6XdwXa92z7uVpDfH3ooJiD%2FtfGGS70TJpLK5ljQZOaihFoV2w6PuNR0LfiT5m9FsPuRPkP2dAArtf%2BRl8TAxjOhsY3o2MGe32CkJKG0T0znAHJSKU%2BkLe9uACAynhPj9Yz7NWkV%2BxGdP214zbVqhnacPI0gGUYqI2dj8N6sp8nyIKKBqjhH6oCm9E3YcP%2F4brXWtN7R3&X-Amz-Signature=9a5e72f5fb5a2efaa2e94b41f44d3b3b43a5b5a3867b5ab5eccd81df05863e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYFP4SY%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz2T%2BAY4LIwU8s5vzi4kOgRSMzUHrG4kziRpbAu%2Bk7EAiEAgOdygKaIuNzBxH725M7ZRjZ%2FA8erAEb6yca6SdX1cLsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyW26K16UppYuCWcircA1V83v0D9%2F3P4ssvvRNMalRj4vYdM3zuTNEVE%2Bvazc%2FuzqatBe3v0grnbnaaI5l5%2FyHGMh7tmEf0Y26KOxdwl8442FYlwLLrubNLwhpjbZScvLD4idJxQnkVQjxjRyxSGIpHKXSYmkPl0yR%2BCy%2BCcv9Ca0tJ9VEL54JQe3JHSukNdaA4iXcbdYwm3eqyadaT2L16nYBf7wOzKgWdJ58as3PZkk6niGk0UUK7VZtMNSL3ZyExJHcnYPoNC6GttzZ%2BiZguX5KGWDqUCITIfQLTWWuYeowaIgmW037FtgBuMn9%2BNfymlO%2FYlrk4aU9R0v48VBaedGA74eKm0mZSR4VonRdCegfyhOUmoWwOtIeaw1ab7Fq90xy6JjPq3zi3IM8JG5XNtsRBKxAyU0dq9ZY%2BcU4K9pMmfnqZRnwOmkKevtEDGoIBtMbosmeA%2BYKL55OwzUJbRsAP4LcFX2BYD3%2FsJWG93Hp1MRO0LsnMsKZNZ4y4jpLfsE4bCMo%2B2vt2y9gQmi40%2FbwgJWPpvDOzbDGLC2UYtpBjuNG3z%2FVLXTslxtjapT0i4Z89KzQV0stmvEEQhxrNFd%2Ba55vXOZBstRw8w1qb%2BolM51QCLA69ZKw8h0YUfzeh2ldP%2BAek%2BA4qMPj509AGOqUBnSi%2FMr5VpWz%2F3mttEkGF6XdwXa92z7uVpDfH3ooJiD%2FtfGGS70TJpLK5ljQZOaihFoV2w6PuNR0LfiT5m9FsPuRPkP2dAArtf%2BRl8TAxjOhsY3o2MGe32CkJKG0T0znAHJSKU%2BkLe9uACAynhPj9Yz7NWkV%2BxGdP214zbVqhnacPI0gGUYqI2dj8N6sp8nyIKKBqjhH6oCm9E3YcP%2F4brXWtN7R3&X-Amz-Signature=9e718ed490aeef3209e72c809a90c4f65c8bdb3dad78c17a552d3f6ef41026bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
