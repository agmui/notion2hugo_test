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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWZ3JJA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6an9ST4Ak4yfv0366gPMf2bynCDjgzgpDuQlU8lN9RQIhANPxaGX7HUx%2BTRYcPq1JxeLSKvqdF9z0grBIBuogYzWkKv8DCBgQABoMNjM3NDIzMTgzODA1IgzwsuigdL6xYZaFi1Aq3AN4fy5O9aqBK3eJhRz9JWLP35qNvc0yGa9Rm6u7y%2BQammwHXIp6mvMxJDLnP1PUAyTcJ8ikWVeyYzh4SVkY%2BG%2B%2BT5wFfrgc3R7lOFbu3CYbkz1HjjjJgcu%2BEeSxSDE6d6kDpTG6KowXjiTwtVaStcIRpV0Pe6Vw6NXZP1iiq9L%2BOzO%2FvZK35u%2BDNuk%2Fgx2eOOoPFSzFPuTsOJEK5jSzyTJR96DI90DUuAQY%2FxVMo%2BIwU3krodqlhUYHALFrx6fx5MDjJhipExLDRQ%2FCknRSbScJV7BiQo1hJcpHzhCLdLba1uYmaWX5Hj5lpMzk%2BY%2FA%2F9ZppIAsQhd0ndIt7jASQBWMfLE%2BL%2BUxRGP1UGcoQbq7FgZLmfJrcTFrONdVemuvUqK94DKDkNXRyx2sTOhOQEzecP7d1wSdQjFdnoSN6TLuqhgSV8yYtzU44YwbAFKN%2BxhXUVq%2BEYHwy5yovX7dG%2BSB9We9x7fba7IMyizY8LIL%2FNmiERfIvZqV1KXgjUUt8Q2bObgKI2yM5eXyxUYBU2FN0CBXeJ1sA9ILloLAWDKCAMRnl%2Fktdp7V%2B1u5PEQHw7TbxbFAkaq%2FTdQFoPkNrlv59YDzs1XSU%2F1txm7XAyqRJ9HcVPYdPIGBosQMXTCtls%2FDBjqkAdL4SkgVA4C3bxfex0N%2FRKIjEicQhUWYn8eOXYu%2FQFFjNmFjDZDy8JPX%2BYkjPAIUuW%2FWMve2PTQ1qLII5IFOoV9BCUFdwy0pxDthfxammzTmIBZZ86d2JRvh%2Flk1KRFMTPVNlO8wS8YeMKBu1eSNOyadNqJcE2S0kuvtGKyeZn6oYQZSKqNmWKBpQlYKZxPA6%2B7dyG8sSb9nHRKKMin%2F65Wutj%2FK&X-Amz-Signature=1a50cba23769ef63ed3508104fca9bc42a85aead84c2d37d4b365ab9b3f3e845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWZ3JJA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6an9ST4Ak4yfv0366gPMf2bynCDjgzgpDuQlU8lN9RQIhANPxaGX7HUx%2BTRYcPq1JxeLSKvqdF9z0grBIBuogYzWkKv8DCBgQABoMNjM3NDIzMTgzODA1IgzwsuigdL6xYZaFi1Aq3AN4fy5O9aqBK3eJhRz9JWLP35qNvc0yGa9Rm6u7y%2BQammwHXIp6mvMxJDLnP1PUAyTcJ8ikWVeyYzh4SVkY%2BG%2B%2BT5wFfrgc3R7lOFbu3CYbkz1HjjjJgcu%2BEeSxSDE6d6kDpTG6KowXjiTwtVaStcIRpV0Pe6Vw6NXZP1iiq9L%2BOzO%2FvZK35u%2BDNuk%2Fgx2eOOoPFSzFPuTsOJEK5jSzyTJR96DI90DUuAQY%2FxVMo%2BIwU3krodqlhUYHALFrx6fx5MDjJhipExLDRQ%2FCknRSbScJV7BiQo1hJcpHzhCLdLba1uYmaWX5Hj5lpMzk%2BY%2FA%2F9ZppIAsQhd0ndIt7jASQBWMfLE%2BL%2BUxRGP1UGcoQbq7FgZLmfJrcTFrONdVemuvUqK94DKDkNXRyx2sTOhOQEzecP7d1wSdQjFdnoSN6TLuqhgSV8yYtzU44YwbAFKN%2BxhXUVq%2BEYHwy5yovX7dG%2BSB9We9x7fba7IMyizY8LIL%2FNmiERfIvZqV1KXgjUUt8Q2bObgKI2yM5eXyxUYBU2FN0CBXeJ1sA9ILloLAWDKCAMRnl%2Fktdp7V%2B1u5PEQHw7TbxbFAkaq%2FTdQFoPkNrlv59YDzs1XSU%2F1txm7XAyqRJ9HcVPYdPIGBosQMXTCtls%2FDBjqkAdL4SkgVA4C3bxfex0N%2FRKIjEicQhUWYn8eOXYu%2FQFFjNmFjDZDy8JPX%2BYkjPAIUuW%2FWMve2PTQ1qLII5IFOoV9BCUFdwy0pxDthfxammzTmIBZZ86d2JRvh%2Flk1KRFMTPVNlO8wS8YeMKBu1eSNOyadNqJcE2S0kuvtGKyeZn6oYQZSKqNmWKBpQlYKZxPA6%2B7dyG8sSb9nHRKKMin%2F65Wutj%2FK&X-Amz-Signature=371073df4c063776e1200e87229981d584617b274e7367769748a6dd57b5f3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWZ3JJA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6an9ST4Ak4yfv0366gPMf2bynCDjgzgpDuQlU8lN9RQIhANPxaGX7HUx%2BTRYcPq1JxeLSKvqdF9z0grBIBuogYzWkKv8DCBgQABoMNjM3NDIzMTgzODA1IgzwsuigdL6xYZaFi1Aq3AN4fy5O9aqBK3eJhRz9JWLP35qNvc0yGa9Rm6u7y%2BQammwHXIp6mvMxJDLnP1PUAyTcJ8ikWVeyYzh4SVkY%2BG%2B%2BT5wFfrgc3R7lOFbu3CYbkz1HjjjJgcu%2BEeSxSDE6d6kDpTG6KowXjiTwtVaStcIRpV0Pe6Vw6NXZP1iiq9L%2BOzO%2FvZK35u%2BDNuk%2Fgx2eOOoPFSzFPuTsOJEK5jSzyTJR96DI90DUuAQY%2FxVMo%2BIwU3krodqlhUYHALFrx6fx5MDjJhipExLDRQ%2FCknRSbScJV7BiQo1hJcpHzhCLdLba1uYmaWX5Hj5lpMzk%2BY%2FA%2F9ZppIAsQhd0ndIt7jASQBWMfLE%2BL%2BUxRGP1UGcoQbq7FgZLmfJrcTFrONdVemuvUqK94DKDkNXRyx2sTOhOQEzecP7d1wSdQjFdnoSN6TLuqhgSV8yYtzU44YwbAFKN%2BxhXUVq%2BEYHwy5yovX7dG%2BSB9We9x7fba7IMyizY8LIL%2FNmiERfIvZqV1KXgjUUt8Q2bObgKI2yM5eXyxUYBU2FN0CBXeJ1sA9ILloLAWDKCAMRnl%2Fktdp7V%2B1u5PEQHw7TbxbFAkaq%2FTdQFoPkNrlv59YDzs1XSU%2F1txm7XAyqRJ9HcVPYdPIGBosQMXTCtls%2FDBjqkAdL4SkgVA4C3bxfex0N%2FRKIjEicQhUWYn8eOXYu%2FQFFjNmFjDZDy8JPX%2BYkjPAIUuW%2FWMve2PTQ1qLII5IFOoV9BCUFdwy0pxDthfxammzTmIBZZ86d2JRvh%2Flk1KRFMTPVNlO8wS8YeMKBu1eSNOyadNqJcE2S0kuvtGKyeZn6oYQZSKqNmWKBpQlYKZxPA6%2B7dyG8sSb9nHRKKMin%2F65Wutj%2FK&X-Amz-Signature=cb9380b5badff481c29ddc888827c967a11c14485abc52e60128109355e48d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
