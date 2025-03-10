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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EUPGGU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAZRefbCB3tXi%2FAv2dUgZwXzT5xHOmLfMA%2FEGzlzG6OZAiA3i4k6PdCzbYAHYS%2FnoZ8EmIKi9GkZUq5rYixkEGN0PSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn01XftgSaQLay01vKtwD6PZQswOU4HpmFsUGYv0W490C%2FTTHYbV3DUX0HWUmlLTbUytpEZtyu5Yun29j72eeqfKbbutL2JCf5EKoyO0T68Cj21ykmrMv%2B6gK5qCv2Af4Lza6l%2Bs1QiDDH%2FsceGK9Xx8q8l%2BEhkzrTvRrYZP0aGTWaV%2BGQflmTent3F3oosfaAGqFgsPK5bOCvGQBUnqFikfeRvJAh5jhaS6aauIzQskg6%2F4qmS89oylhgcHri0VZ8dDNRwIF0WCpS66tg1yt6rHmZrbE47VcVR07vMBpW42rnAstO%2FBmpOOCqZf%2F%2BbSh2%2Bf416SlKtWqxXLLI%2BiwTR4tGPL4cI%2FvpiSNg%2BSV3YCJrEqF6mwYw%2B0KQwFzdeM0vY58ieZcwTOkykeQ4VbgbGlRIoN%2Fc8q8RuMZJQlV5ilM4GqqGNXGVkwpfdpytj%2F0lPYDA%2BUezXAyLxurQ58EHr%2F33UdPuoH8fvSn23m0FWFK9ypcR1CgP73irTEqPz2fN0d6m2lJHyalNlkyWJgO9ML4RrDqFx6%2Fhmjxeu6EPIHXCkyUfJdj5j%2F9IAmCcKDdFPGHccElNmhz1RAXLg51KElX8QtIYkMA20INzZ10%2BBuGQQB2a6HwkU21GNs0TlcHAXM%2Bs0AzzAFS6xkwxsy5vgY6pgF9P0PlyaKa6zF4br6zCd%2BS1%2FHLVpJ3EKbes5vcxvSYGi22vSUZiWl5YE1n6ioJ93OF0kZFkbKa4PmSjvQOBTU5zpGxizDY39OLcsaCrAfpFLtGLb6GoiAJcQjpnxKwlGJHYkxcDFqayMBu44KfMjzGEVl%2F83HlXwfHVVp%2By9XcyaHIh7GJH5VMQtXg%2FGYO6wCQLXCx3FFixbL2%2FrkcF3U1uH1Bcq8A&X-Amz-Signature=6ec9180a5bc27a2c64b39152ae60a3517e90c8c27fe06a6c0364fd196c589e41&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EUPGGU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAZRefbCB3tXi%2FAv2dUgZwXzT5xHOmLfMA%2FEGzlzG6OZAiA3i4k6PdCzbYAHYS%2FnoZ8EmIKi9GkZUq5rYixkEGN0PSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn01XftgSaQLay01vKtwD6PZQswOU4HpmFsUGYv0W490C%2FTTHYbV3DUX0HWUmlLTbUytpEZtyu5Yun29j72eeqfKbbutL2JCf5EKoyO0T68Cj21ykmrMv%2B6gK5qCv2Af4Lza6l%2Bs1QiDDH%2FsceGK9Xx8q8l%2BEhkzrTvRrYZP0aGTWaV%2BGQflmTent3F3oosfaAGqFgsPK5bOCvGQBUnqFikfeRvJAh5jhaS6aauIzQskg6%2F4qmS89oylhgcHri0VZ8dDNRwIF0WCpS66tg1yt6rHmZrbE47VcVR07vMBpW42rnAstO%2FBmpOOCqZf%2F%2BbSh2%2Bf416SlKtWqxXLLI%2BiwTR4tGPL4cI%2FvpiSNg%2BSV3YCJrEqF6mwYw%2B0KQwFzdeM0vY58ieZcwTOkykeQ4VbgbGlRIoN%2Fc8q8RuMZJQlV5ilM4GqqGNXGVkwpfdpytj%2F0lPYDA%2BUezXAyLxurQ58EHr%2F33UdPuoH8fvSn23m0FWFK9ypcR1CgP73irTEqPz2fN0d6m2lJHyalNlkyWJgO9ML4RrDqFx6%2Fhmjxeu6EPIHXCkyUfJdj5j%2F9IAmCcKDdFPGHccElNmhz1RAXLg51KElX8QtIYkMA20INzZ10%2BBuGQQB2a6HwkU21GNs0TlcHAXM%2Bs0AzzAFS6xkwxsy5vgY6pgF9P0PlyaKa6zF4br6zCd%2BS1%2FHLVpJ3EKbes5vcxvSYGi22vSUZiWl5YE1n6ioJ93OF0kZFkbKa4PmSjvQOBTU5zpGxizDY39OLcsaCrAfpFLtGLb6GoiAJcQjpnxKwlGJHYkxcDFqayMBu44KfMjzGEVl%2F83HlXwfHVVp%2By9XcyaHIh7GJH5VMQtXg%2FGYO6wCQLXCx3FFixbL2%2FrkcF3U1uH1Bcq8A&X-Amz-Signature=2f70d2f91b24278f2772f8793d9370dace1828af7ac187b16ae486ccab1f9ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EUPGGU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAZRefbCB3tXi%2FAv2dUgZwXzT5xHOmLfMA%2FEGzlzG6OZAiA3i4k6PdCzbYAHYS%2FnoZ8EmIKi9GkZUq5rYixkEGN0PSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn01XftgSaQLay01vKtwD6PZQswOU4HpmFsUGYv0W490C%2FTTHYbV3DUX0HWUmlLTbUytpEZtyu5Yun29j72eeqfKbbutL2JCf5EKoyO0T68Cj21ykmrMv%2B6gK5qCv2Af4Lza6l%2Bs1QiDDH%2FsceGK9Xx8q8l%2BEhkzrTvRrYZP0aGTWaV%2BGQflmTent3F3oosfaAGqFgsPK5bOCvGQBUnqFikfeRvJAh5jhaS6aauIzQskg6%2F4qmS89oylhgcHri0VZ8dDNRwIF0WCpS66tg1yt6rHmZrbE47VcVR07vMBpW42rnAstO%2FBmpOOCqZf%2F%2BbSh2%2Bf416SlKtWqxXLLI%2BiwTR4tGPL4cI%2FvpiSNg%2BSV3YCJrEqF6mwYw%2B0KQwFzdeM0vY58ieZcwTOkykeQ4VbgbGlRIoN%2Fc8q8RuMZJQlV5ilM4GqqGNXGVkwpfdpytj%2F0lPYDA%2BUezXAyLxurQ58EHr%2F33UdPuoH8fvSn23m0FWFK9ypcR1CgP73irTEqPz2fN0d6m2lJHyalNlkyWJgO9ML4RrDqFx6%2Fhmjxeu6EPIHXCkyUfJdj5j%2F9IAmCcKDdFPGHccElNmhz1RAXLg51KElX8QtIYkMA20INzZ10%2BBuGQQB2a6HwkU21GNs0TlcHAXM%2Bs0AzzAFS6xkwxsy5vgY6pgF9P0PlyaKa6zF4br6zCd%2BS1%2FHLVpJ3EKbes5vcxvSYGi22vSUZiWl5YE1n6ioJ93OF0kZFkbKa4PmSjvQOBTU5zpGxizDY39OLcsaCrAfpFLtGLb6GoiAJcQjpnxKwlGJHYkxcDFqayMBu44KfMjzGEVl%2F83HlXwfHVVp%2By9XcyaHIh7GJH5VMQtXg%2FGYO6wCQLXCx3FFixbL2%2FrkcF3U1uH1Bcq8A&X-Amz-Signature=c12e3cc750b0154c8a682f32729b6dce15a73cf9f38e7d42900a3c6819a6206f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
