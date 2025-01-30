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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVWA7W6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpmIasV1FMleTxizZbDA%2Bk56DoQD%2BBEzEKNWzVXgOQEAIgLEU1KwvoDVwaiKI38DwxXcHmcmie3PVhQ2bz2qct9nAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4e3Lq3SNibpMvEzSrcA6ipuUpY%2F6vR8M3ts79khB3D9aYj%2BEOnzaKGWfQEC%2FA%2Bpbdow2ZPpYfFGHa5GOc6k6BdAERs57K6aAxKhGT2sBmdg0OXpRgtaXGyM79OTP2ooIrxCgmfPYb51OdYDYCvL3kBoDNlqoJj8jiDrJUk7RbmfMFS8ctDA8tu1TFSk4wj2MU2ZkXsKVECruCC%2FrSeO1umtuRa8nsKMwXNz5CX50%2FlQRK0eh0BOJyjAnVC6n8MgZCnemNtvODtRZesUxUoPhZpGGWYjVlR9f%2F5VIeBuBUKlXuqFnwk%2FM%2FbuYRnJephY3Tc7mnDn17XrjotyydDPNp4aOteCaF6LQ%2BVahFAq5XkIriN%2BRlNhJAlT5AAcbe4wMnWdTIpS2JK%2B9YCmGqRjVo5jiqeX8yQuNlyqNPzIQg9cZ7l0L5vVkDC9aeFt0vTj3MoBVT4GtufM2OlI9Zul87o%2FxDFAFSOoGOK5tEifnt5qKhGOoHCHWm48nVXrvu0zumyV4RYHIDpNcsvi5S6p6yHxmgrQ8jiXQpYp5WFEvdaA4orZNJ7BHijUEZdgKNImVVSMCxTr%2FizMX%2BDnu7tzGoAtLdutnPgNUcV%2F4YrJ0%2B0%2Fy203aMLpn8auRElFqwMfHayBqL2YzUobbUNMLPF6rwGOqUBrRXooInpvmtQVNgv2ZomQkJkUP%2F2lrO%2BbzxS3IT2sVSQLe9O8x1tpeRhGxe8PD0JsQK6%2FxSwBlvcQB1izq5CvQrzwrPBj0o4CvdE4oC7UNAfOIbH2YP82ahRWYbit6g3wyadjMNcJJhkVsxBNFr%2F8BFpsBmbs%2BvsISkhL83O2KSmU5tpBrKxg2APccf9mLx8NumGX9lhLYZkGuAJC8L34j0Z6KGd&X-Amz-Signature=68ec7eb3ffaff68cae87c5630f6b03fdc63ee04d6d3fc764af10bf668d53b590&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVWA7W6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpmIasV1FMleTxizZbDA%2Bk56DoQD%2BBEzEKNWzVXgOQEAIgLEU1KwvoDVwaiKI38DwxXcHmcmie3PVhQ2bz2qct9nAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4e3Lq3SNibpMvEzSrcA6ipuUpY%2F6vR8M3ts79khB3D9aYj%2BEOnzaKGWfQEC%2FA%2Bpbdow2ZPpYfFGHa5GOc6k6BdAERs57K6aAxKhGT2sBmdg0OXpRgtaXGyM79OTP2ooIrxCgmfPYb51OdYDYCvL3kBoDNlqoJj8jiDrJUk7RbmfMFS8ctDA8tu1TFSk4wj2MU2ZkXsKVECruCC%2FrSeO1umtuRa8nsKMwXNz5CX50%2FlQRK0eh0BOJyjAnVC6n8MgZCnemNtvODtRZesUxUoPhZpGGWYjVlR9f%2F5VIeBuBUKlXuqFnwk%2FM%2FbuYRnJephY3Tc7mnDn17XrjotyydDPNp4aOteCaF6LQ%2BVahFAq5XkIriN%2BRlNhJAlT5AAcbe4wMnWdTIpS2JK%2B9YCmGqRjVo5jiqeX8yQuNlyqNPzIQg9cZ7l0L5vVkDC9aeFt0vTj3MoBVT4GtufM2OlI9Zul87o%2FxDFAFSOoGOK5tEifnt5qKhGOoHCHWm48nVXrvu0zumyV4RYHIDpNcsvi5S6p6yHxmgrQ8jiXQpYp5WFEvdaA4orZNJ7BHijUEZdgKNImVVSMCxTr%2FizMX%2BDnu7tzGoAtLdutnPgNUcV%2F4YrJ0%2B0%2Fy203aMLpn8auRElFqwMfHayBqL2YzUobbUNMLPF6rwGOqUBrRXooInpvmtQVNgv2ZomQkJkUP%2F2lrO%2BbzxS3IT2sVSQLe9O8x1tpeRhGxe8PD0JsQK6%2FxSwBlvcQB1izq5CvQrzwrPBj0o4CvdE4oC7UNAfOIbH2YP82ahRWYbit6g3wyadjMNcJJhkVsxBNFr%2F8BFpsBmbs%2BvsISkhL83O2KSmU5tpBrKxg2APccf9mLx8NumGX9lhLYZkGuAJC8L34j0Z6KGd&X-Amz-Signature=9fddd9a667c8afc5e56d89d753b0cde48a4ea737d549ffae4d642d2a80506144&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVWA7W6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpmIasV1FMleTxizZbDA%2Bk56DoQD%2BBEzEKNWzVXgOQEAIgLEU1KwvoDVwaiKI38DwxXcHmcmie3PVhQ2bz2qct9nAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4e3Lq3SNibpMvEzSrcA6ipuUpY%2F6vR8M3ts79khB3D9aYj%2BEOnzaKGWfQEC%2FA%2Bpbdow2ZPpYfFGHa5GOc6k6BdAERs57K6aAxKhGT2sBmdg0OXpRgtaXGyM79OTP2ooIrxCgmfPYb51OdYDYCvL3kBoDNlqoJj8jiDrJUk7RbmfMFS8ctDA8tu1TFSk4wj2MU2ZkXsKVECruCC%2FrSeO1umtuRa8nsKMwXNz5CX50%2FlQRK0eh0BOJyjAnVC6n8MgZCnemNtvODtRZesUxUoPhZpGGWYjVlR9f%2F5VIeBuBUKlXuqFnwk%2FM%2FbuYRnJephY3Tc7mnDn17XrjotyydDPNp4aOteCaF6LQ%2BVahFAq5XkIriN%2BRlNhJAlT5AAcbe4wMnWdTIpS2JK%2B9YCmGqRjVo5jiqeX8yQuNlyqNPzIQg9cZ7l0L5vVkDC9aeFt0vTj3MoBVT4GtufM2OlI9Zul87o%2FxDFAFSOoGOK5tEifnt5qKhGOoHCHWm48nVXrvu0zumyV4RYHIDpNcsvi5S6p6yHxmgrQ8jiXQpYp5WFEvdaA4orZNJ7BHijUEZdgKNImVVSMCxTr%2FizMX%2BDnu7tzGoAtLdutnPgNUcV%2F4YrJ0%2B0%2Fy203aMLpn8auRElFqwMfHayBqL2YzUobbUNMLPF6rwGOqUBrRXooInpvmtQVNgv2ZomQkJkUP%2F2lrO%2BbzxS3IT2sVSQLe9O8x1tpeRhGxe8PD0JsQK6%2FxSwBlvcQB1izq5CvQrzwrPBj0o4CvdE4oC7UNAfOIbH2YP82ahRWYbit6g3wyadjMNcJJhkVsxBNFr%2F8BFpsBmbs%2BvsISkhL83O2KSmU5tpBrKxg2APccf9mLx8NumGX9lhLYZkGuAJC8L34j0Z6KGd&X-Amz-Signature=9af30ebab4b9336e3e591b2d4ece96d48d3fc9fa31070d86b97d6e18176589d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
