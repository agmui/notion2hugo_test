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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTOHJ6A%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVe8gEkoXwiFS6m5Uiof8IHsoUuH4EOBchYtJFFL%2F5lAiEAy6DvrjRu5G6aLXhsjUg%2B4CZ4CA%2FYBVFgEZ2C51CGgcEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIe%2B7%2FoUZPbs4PWmCrcAxq51oGXD2slXTyCLY6ENWM9cF4gqO%2FhZkaPBOnfN%2BNaOwYPYyxOdtpBihZHpyYadYiWebwXNElTDyHpXxRWsuABm2IMMNy2zW02H7x1IpimAis1%2FfdNsKFWC6aVFhbO9pi6I%2BUe8PK%2FurumdcAjbFekMcQQpEtFnTEXU%2BaNlwVQba3RQfF6fdA50aMPFD5GDJd79%2FxXoQBpG1IoSxjED8I6z3eAQl%2FmnWLCeLmVmSgpi31M%2F7SSZTAyMy3AOUNUmaEiXfwCEAiIxa7t6uoNspiOxtdRSrcO2YYZL6BjL3OAocSig45JOGTpEPoKflPdFe%2FJOOVc3xtnP7bmIJtqg2AS1XT4Gjl34YCfMLM5RGfiMK36oN1RnD%2Bb0cZhMGQzNZamns5%2Fs7gBBnI5kUtmjeOF3UXyOzW%2Bmeo0YEjG3Wlvq7up985shTmebcYXrNh6CqQjK%2FDHsf19C5rxsc9ctfx%2FSk89IwZK6lM%2BkxySFduwLFcmBgBKkcHpRRjZwAoPvdi5h9CgAZfEslghFXA%2FpwPJPtAJWkgEyKzZMTGEGEdjw1W8Kd30Hcy5Md9Ly%2BkOopdV45XO0wgX0B%2BvmsOBETW56WncTzd31U7tEyy06zjNLfRoTeetz7gXqYSOMMX6pb0GOqUBsgBahJo1oj0bHShRzcxQ4oDtMYqqN9mqAlby7uP9kUNQaKTXV1ZjFxy8zmhisCWYKxZvCuPDreKWUhzLf3j7s%2Bgj0w%2FZ93XNJHiEyX6lk%2BFDL%2FDdT5qpu0ySVnOAugxCym%2F9h75uXyh%2BQWxKFD30ZcWT%2BL%2BElRIMcVKA2pvggWS7qj1VdbOC2CF5QTquHjL3vfqc8TW3JngLE207p2sVeeb8t5ex&X-Amz-Signature=f12a60e03dc5e8dc7cf91d56f886cf4908e374c63bcf06ad37ab0ccd27782c81&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTOHJ6A%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVe8gEkoXwiFS6m5Uiof8IHsoUuH4EOBchYtJFFL%2F5lAiEAy6DvrjRu5G6aLXhsjUg%2B4CZ4CA%2FYBVFgEZ2C51CGgcEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIe%2B7%2FoUZPbs4PWmCrcAxq51oGXD2slXTyCLY6ENWM9cF4gqO%2FhZkaPBOnfN%2BNaOwYPYyxOdtpBihZHpyYadYiWebwXNElTDyHpXxRWsuABm2IMMNy2zW02H7x1IpimAis1%2FfdNsKFWC6aVFhbO9pi6I%2BUe8PK%2FurumdcAjbFekMcQQpEtFnTEXU%2BaNlwVQba3RQfF6fdA50aMPFD5GDJd79%2FxXoQBpG1IoSxjED8I6z3eAQl%2FmnWLCeLmVmSgpi31M%2F7SSZTAyMy3AOUNUmaEiXfwCEAiIxa7t6uoNspiOxtdRSrcO2YYZL6BjL3OAocSig45JOGTpEPoKflPdFe%2FJOOVc3xtnP7bmIJtqg2AS1XT4Gjl34YCfMLM5RGfiMK36oN1RnD%2Bb0cZhMGQzNZamns5%2Fs7gBBnI5kUtmjeOF3UXyOzW%2Bmeo0YEjG3Wlvq7up985shTmebcYXrNh6CqQjK%2FDHsf19C5rxsc9ctfx%2FSk89IwZK6lM%2BkxySFduwLFcmBgBKkcHpRRjZwAoPvdi5h9CgAZfEslghFXA%2FpwPJPtAJWkgEyKzZMTGEGEdjw1W8Kd30Hcy5Md9Ly%2BkOopdV45XO0wgX0B%2BvmsOBETW56WncTzd31U7tEyy06zjNLfRoTeetz7gXqYSOMMX6pb0GOqUBsgBahJo1oj0bHShRzcxQ4oDtMYqqN9mqAlby7uP9kUNQaKTXV1ZjFxy8zmhisCWYKxZvCuPDreKWUhzLf3j7s%2Bgj0w%2FZ93XNJHiEyX6lk%2BFDL%2FDdT5qpu0ySVnOAugxCym%2F9h75uXyh%2BQWxKFD30ZcWT%2BL%2BElRIMcVKA2pvggWS7qj1VdbOC2CF5QTquHjL3vfqc8TW3JngLE207p2sVeeb8t5ex&X-Amz-Signature=4ed3610af857486188dcea72018aac26bcb86ff208a6b01245566988e939c9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTOHJ6A%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVe8gEkoXwiFS6m5Uiof8IHsoUuH4EOBchYtJFFL%2F5lAiEAy6DvrjRu5G6aLXhsjUg%2B4CZ4CA%2FYBVFgEZ2C51CGgcEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIe%2B7%2FoUZPbs4PWmCrcAxq51oGXD2slXTyCLY6ENWM9cF4gqO%2FhZkaPBOnfN%2BNaOwYPYyxOdtpBihZHpyYadYiWebwXNElTDyHpXxRWsuABm2IMMNy2zW02H7x1IpimAis1%2FfdNsKFWC6aVFhbO9pi6I%2BUe8PK%2FurumdcAjbFekMcQQpEtFnTEXU%2BaNlwVQba3RQfF6fdA50aMPFD5GDJd79%2FxXoQBpG1IoSxjED8I6z3eAQl%2FmnWLCeLmVmSgpi31M%2F7SSZTAyMy3AOUNUmaEiXfwCEAiIxa7t6uoNspiOxtdRSrcO2YYZL6BjL3OAocSig45JOGTpEPoKflPdFe%2FJOOVc3xtnP7bmIJtqg2AS1XT4Gjl34YCfMLM5RGfiMK36oN1RnD%2Bb0cZhMGQzNZamns5%2Fs7gBBnI5kUtmjeOF3UXyOzW%2Bmeo0YEjG3Wlvq7up985shTmebcYXrNh6CqQjK%2FDHsf19C5rxsc9ctfx%2FSk89IwZK6lM%2BkxySFduwLFcmBgBKkcHpRRjZwAoPvdi5h9CgAZfEslghFXA%2FpwPJPtAJWkgEyKzZMTGEGEdjw1W8Kd30Hcy5Md9Ly%2BkOopdV45XO0wgX0B%2BvmsOBETW56WncTzd31U7tEyy06zjNLfRoTeetz7gXqYSOMMX6pb0GOqUBsgBahJo1oj0bHShRzcxQ4oDtMYqqN9mqAlby7uP9kUNQaKTXV1ZjFxy8zmhisCWYKxZvCuPDreKWUhzLf3j7s%2Bgj0w%2FZ93XNJHiEyX6lk%2BFDL%2FDdT5qpu0ySVnOAugxCym%2F9h75uXyh%2BQWxKFD30ZcWT%2BL%2BElRIMcVKA2pvggWS7qj1VdbOC2CF5QTquHjL3vfqc8TW3JngLE207p2sVeeb8t5ex&X-Amz-Signature=f53f938e4fd0cef74921533469d8687b8964130c96533534a0d408fcf443d0a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
