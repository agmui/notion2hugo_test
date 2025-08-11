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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEKLCVV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK%2FZphpiY23re6UR6670oCza3ua516NJyBjMS0sMoACwIhAJvbiPKfdkKPDatTlqTut1GttMjQVXzrFxiQ5EUm64grKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXea9DvylReSQM0mIq3APTnLj5pPn2S0ri6XwmH0UYj1aizwxNtJx57EtpHkkq8%2BgV0%2F5CGeUV6K217tNL%2B%2BiBueikIhAsXH7rweBVR2O6NfYcM2eVw4o2kaFyas2sfkUzh0VkJrnhnjVslzojlZrcZZUze%2BeDo%2F47tGMVtM3g7ElPUXURUFXxSirxxZeoU6zmIefLTFj%2FaZPRv3Le2lBX2a7GhH8x5V%2BST1d5OgnhHrG%2FYQMfcy9aUo23vhCRu6DxFn3jEfP3YLCeYdYYBFaVTqDAlPT%2BY9rsJ5DSVsHXceBbvbYFf74S%2BcwTIV9yOmAArm3ye0%2BJ8Fd3N4%2F%2BHYxLpv%2B9Oi5dO7p1e8mVwr8L%2FET29uAOrHKLZiDHnQM1cpsPEwsg0HwSbt%2Fdgl53ZLST91j5RbXPdIBe6n1fykEIf2CD1%2BWf0%2FXY2y%2B5Sl35JT3cBCQ0hFtYNYywcPKxQh0mhaQ9Mm6oTbepp41PsF%2FwkKRXsqxU2wwFVGbnV40XTnZB5sQzZon3%2FrAD7DG8BYPK6K3KAD9V%2FvgboEgrEDjDrCi8nE0C5aEK1Ub%2FkdT0yAycdi03p8HqlGQdUeDfkHOg0w5%2FeufqC7YbyL4CTxUUmtweuAz%2FzQKCAWzbYBB00W539jIYyGXWi4cyGTCwnuXEBjqkAbuGcf%2F%2FeoqnYbUi3J7xTmkCech3AJ9OCmHuny8lcknfiNxeIpJ819XB547logmEFvBrucP%2BZf8Fz9VpgJQ%2FUX1rSVNNBVao2ohfJTgW5WUo3h3XeFmHOwaedNidHHsWvUWuRMxoI85%2FsqU5QCgp1KpIsePABN9WyWkq2IAoHcQc%2FUkXyLlcXHZ82VJxZVG8zfI%2FReXXtvVdl2hwvRwCfHI15GgF&X-Amz-Signature=04e13b431daba0f399a2095c1817dbd59e2da42a004441e591ef48c49124921f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEKLCVV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK%2FZphpiY23re6UR6670oCza3ua516NJyBjMS0sMoACwIhAJvbiPKfdkKPDatTlqTut1GttMjQVXzrFxiQ5EUm64grKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXea9DvylReSQM0mIq3APTnLj5pPn2S0ri6XwmH0UYj1aizwxNtJx57EtpHkkq8%2BgV0%2F5CGeUV6K217tNL%2B%2BiBueikIhAsXH7rweBVR2O6NfYcM2eVw4o2kaFyas2sfkUzh0VkJrnhnjVslzojlZrcZZUze%2BeDo%2F47tGMVtM3g7ElPUXURUFXxSirxxZeoU6zmIefLTFj%2FaZPRv3Le2lBX2a7GhH8x5V%2BST1d5OgnhHrG%2FYQMfcy9aUo23vhCRu6DxFn3jEfP3YLCeYdYYBFaVTqDAlPT%2BY9rsJ5DSVsHXceBbvbYFf74S%2BcwTIV9yOmAArm3ye0%2BJ8Fd3N4%2F%2BHYxLpv%2B9Oi5dO7p1e8mVwr8L%2FET29uAOrHKLZiDHnQM1cpsPEwsg0HwSbt%2Fdgl53ZLST91j5RbXPdIBe6n1fykEIf2CD1%2BWf0%2FXY2y%2B5Sl35JT3cBCQ0hFtYNYywcPKxQh0mhaQ9Mm6oTbepp41PsF%2FwkKRXsqxU2wwFVGbnV40XTnZB5sQzZon3%2FrAD7DG8BYPK6K3KAD9V%2FvgboEgrEDjDrCi8nE0C5aEK1Ub%2FkdT0yAycdi03p8HqlGQdUeDfkHOg0w5%2FeufqC7YbyL4CTxUUmtweuAz%2FzQKCAWzbYBB00W539jIYyGXWi4cyGTCwnuXEBjqkAbuGcf%2F%2FeoqnYbUi3J7xTmkCech3AJ9OCmHuny8lcknfiNxeIpJ819XB547logmEFvBrucP%2BZf8Fz9VpgJQ%2FUX1rSVNNBVao2ohfJTgW5WUo3h3XeFmHOwaedNidHHsWvUWuRMxoI85%2FsqU5QCgp1KpIsePABN9WyWkq2IAoHcQc%2FUkXyLlcXHZ82VJxZVG8zfI%2FReXXtvVdl2hwvRwCfHI15GgF&X-Amz-Signature=3ecf673053c893d79c711477686ee03d09b04b496f78b6b88056f48d3da3614a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEKLCVV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK%2FZphpiY23re6UR6670oCza3ua516NJyBjMS0sMoACwIhAJvbiPKfdkKPDatTlqTut1GttMjQVXzrFxiQ5EUm64grKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXea9DvylReSQM0mIq3APTnLj5pPn2S0ri6XwmH0UYj1aizwxNtJx57EtpHkkq8%2BgV0%2F5CGeUV6K217tNL%2B%2BiBueikIhAsXH7rweBVR2O6NfYcM2eVw4o2kaFyas2sfkUzh0VkJrnhnjVslzojlZrcZZUze%2BeDo%2F47tGMVtM3g7ElPUXURUFXxSirxxZeoU6zmIefLTFj%2FaZPRv3Le2lBX2a7GhH8x5V%2BST1d5OgnhHrG%2FYQMfcy9aUo23vhCRu6DxFn3jEfP3YLCeYdYYBFaVTqDAlPT%2BY9rsJ5DSVsHXceBbvbYFf74S%2BcwTIV9yOmAArm3ye0%2BJ8Fd3N4%2F%2BHYxLpv%2B9Oi5dO7p1e8mVwr8L%2FET29uAOrHKLZiDHnQM1cpsPEwsg0HwSbt%2Fdgl53ZLST91j5RbXPdIBe6n1fykEIf2CD1%2BWf0%2FXY2y%2B5Sl35JT3cBCQ0hFtYNYywcPKxQh0mhaQ9Mm6oTbepp41PsF%2FwkKRXsqxU2wwFVGbnV40XTnZB5sQzZon3%2FrAD7DG8BYPK6K3KAD9V%2FvgboEgrEDjDrCi8nE0C5aEK1Ub%2FkdT0yAycdi03p8HqlGQdUeDfkHOg0w5%2FeufqC7YbyL4CTxUUmtweuAz%2FzQKCAWzbYBB00W539jIYyGXWi4cyGTCwnuXEBjqkAbuGcf%2F%2FeoqnYbUi3J7xTmkCech3AJ9OCmHuny8lcknfiNxeIpJ819XB547logmEFvBrucP%2BZf8Fz9VpgJQ%2FUX1rSVNNBVao2ohfJTgW5WUo3h3XeFmHOwaedNidHHsWvUWuRMxoI85%2FsqU5QCgp1KpIsePABN9WyWkq2IAoHcQc%2FUkXyLlcXHZ82VJxZVG8zfI%2FReXXtvVdl2hwvRwCfHI15GgF&X-Amz-Signature=5b39a750eaabf75e44246c77b798d0faab891f6e7085b6ed623e7b1244ffb99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
