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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JLECWD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj9aNm98WnT6w19%2Bm2QCtkBCpiR8e6wDyq%2BPFGsaRDMAiEAsWiCLDFnFOwifXh%2BDOU0alKpzXqUNoMOFQIsU6WD63EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSVJXl06bYrKpR86SrcA%2Fgh4Gm5WkrLGf0phaBrz5P32XW7ta0ocjH0CZSVe0ubaGn%2FWXptUPmHJ%2B%2F5Cxs3jlHx01B2diNTYWDK%2BCbsY2FO0Ur6cw6WAo46JE5ixJk94w6K0wB3Rb1nl2cbRB6mJJMqwjYXoezAGh3OwBCYmy2omnU8sfzb6F2c%2B1LLH3DyQdFG4Ld%2FaBuIfiMYMDzzLo%2BaL84VTYzDj3u7WPf2mgh3Fpw%2FcGHxdAcEvfe%2Bm815Wmxzx7HNiG7lHxzHvAZj6svDTlMeUuvlFaH7hfYQFtH7QYkpNq9FQydsz7IwPpF11Bh8ljfp43EXCFuJrpR8cTQUl7dP51G1WzIqvVPc%2BLxgCqKrm7nDa%2FrclGdUqs9YCg%2FjIaOmtjhbIG519oHzSWXoVens%2FE%2FjmFAx%2FaybCp5qhB4TNISKGmCwyIq1l0q9lFt5ksUu9qjkhHeufXFor%2F96Ig33o8hNzCIsOFElf2zprauagTJHB2mdX3Xa2OUaHzat8T91SkAsP7Q%2BJROypW5TT73nvnwfO82YQ7oBJhsnNEDc7Y8DUzFa4D5%2FJ66AcvadNtZ4sUraR59gKEuCESTP%2FoJHxylXon%2FsJQUgyOT97oUbvax%2BgBZ5Fs32dmyA68RCV8w4bvHSdDUdMKf0n70GOqUBrANn%2FIhQBlP1dYJS4RxVnnEX8y8%2BYj7shshFQ0EEIVCzkbS4tWmc4uPdcFF58LF%2Ba0pdBqgd%2Bf1SyjzahCS8ZHbdySyLz5uVG8pFkxyVm3BHy0Z7LjeTNCSqL83EGyeqwmEaoTu7HQYP87HUfaLSucN7g7CI0rOM9eMvpd1zT1vKMlzWRPq%2B1pxi7%2B2F9W%2FCrH4CVySiC6LbAviDuf%2BibZtmWMjl&X-Amz-Signature=93da64966b3e6c7c14daeed6bb90607af21dd65420b315c66b374de32776ccc7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JLECWD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj9aNm98WnT6w19%2Bm2QCtkBCpiR8e6wDyq%2BPFGsaRDMAiEAsWiCLDFnFOwifXh%2BDOU0alKpzXqUNoMOFQIsU6WD63EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSVJXl06bYrKpR86SrcA%2Fgh4Gm5WkrLGf0phaBrz5P32XW7ta0ocjH0CZSVe0ubaGn%2FWXptUPmHJ%2B%2F5Cxs3jlHx01B2diNTYWDK%2BCbsY2FO0Ur6cw6WAo46JE5ixJk94w6K0wB3Rb1nl2cbRB6mJJMqwjYXoezAGh3OwBCYmy2omnU8sfzb6F2c%2B1LLH3DyQdFG4Ld%2FaBuIfiMYMDzzLo%2BaL84VTYzDj3u7WPf2mgh3Fpw%2FcGHxdAcEvfe%2Bm815Wmxzx7HNiG7lHxzHvAZj6svDTlMeUuvlFaH7hfYQFtH7QYkpNq9FQydsz7IwPpF11Bh8ljfp43EXCFuJrpR8cTQUl7dP51G1WzIqvVPc%2BLxgCqKrm7nDa%2FrclGdUqs9YCg%2FjIaOmtjhbIG519oHzSWXoVens%2FE%2FjmFAx%2FaybCp5qhB4TNISKGmCwyIq1l0q9lFt5ksUu9qjkhHeufXFor%2F96Ig33o8hNzCIsOFElf2zprauagTJHB2mdX3Xa2OUaHzat8T91SkAsP7Q%2BJROypW5TT73nvnwfO82YQ7oBJhsnNEDc7Y8DUzFa4D5%2FJ66AcvadNtZ4sUraR59gKEuCESTP%2FoJHxylXon%2FsJQUgyOT97oUbvax%2BgBZ5Fs32dmyA68RCV8w4bvHSdDUdMKf0n70GOqUBrANn%2FIhQBlP1dYJS4RxVnnEX8y8%2BYj7shshFQ0EEIVCzkbS4tWmc4uPdcFF58LF%2Ba0pdBqgd%2Bf1SyjzahCS8ZHbdySyLz5uVG8pFkxyVm3BHy0Z7LjeTNCSqL83EGyeqwmEaoTu7HQYP87HUfaLSucN7g7CI0rOM9eMvpd1zT1vKMlzWRPq%2B1pxi7%2B2F9W%2FCrH4CVySiC6LbAviDuf%2BibZtmWMjl&X-Amz-Signature=4d00b53a90859b98de434d90b0ea57e8c45eb415548a64bd3350d0ce5e850050&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JLECWD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj9aNm98WnT6w19%2Bm2QCtkBCpiR8e6wDyq%2BPFGsaRDMAiEAsWiCLDFnFOwifXh%2BDOU0alKpzXqUNoMOFQIsU6WD63EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSVJXl06bYrKpR86SrcA%2Fgh4Gm5WkrLGf0phaBrz5P32XW7ta0ocjH0CZSVe0ubaGn%2FWXptUPmHJ%2B%2F5Cxs3jlHx01B2diNTYWDK%2BCbsY2FO0Ur6cw6WAo46JE5ixJk94w6K0wB3Rb1nl2cbRB6mJJMqwjYXoezAGh3OwBCYmy2omnU8sfzb6F2c%2B1LLH3DyQdFG4Ld%2FaBuIfiMYMDzzLo%2BaL84VTYzDj3u7WPf2mgh3Fpw%2FcGHxdAcEvfe%2Bm815Wmxzx7HNiG7lHxzHvAZj6svDTlMeUuvlFaH7hfYQFtH7QYkpNq9FQydsz7IwPpF11Bh8ljfp43EXCFuJrpR8cTQUl7dP51G1WzIqvVPc%2BLxgCqKrm7nDa%2FrclGdUqs9YCg%2FjIaOmtjhbIG519oHzSWXoVens%2FE%2FjmFAx%2FaybCp5qhB4TNISKGmCwyIq1l0q9lFt5ksUu9qjkhHeufXFor%2F96Ig33o8hNzCIsOFElf2zprauagTJHB2mdX3Xa2OUaHzat8T91SkAsP7Q%2BJROypW5TT73nvnwfO82YQ7oBJhsnNEDc7Y8DUzFa4D5%2FJ66AcvadNtZ4sUraR59gKEuCESTP%2FoJHxylXon%2FsJQUgyOT97oUbvax%2BgBZ5Fs32dmyA68RCV8w4bvHSdDUdMKf0n70GOqUBrANn%2FIhQBlP1dYJS4RxVnnEX8y8%2BYj7shshFQ0EEIVCzkbS4tWmc4uPdcFF58LF%2Ba0pdBqgd%2Bf1SyjzahCS8ZHbdySyLz5uVG8pFkxyVm3BHy0Z7LjeTNCSqL83EGyeqwmEaoTu7HQYP87HUfaLSucN7g7CI0rOM9eMvpd1zT1vKMlzWRPq%2B1pxi7%2B2F9W%2FCrH4CVySiC6LbAviDuf%2BibZtmWMjl&X-Amz-Signature=9909ec5756cc0a7e272537fdabe439c240846045eab2bf518821c25337a7ccda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
