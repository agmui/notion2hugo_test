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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVDH2FJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsUYzL036J4Jvd7SqEzCro32DznSPW8t4ic%2FV328DuhAiEA7%2Bcl7IQeZfhM1jSkpijt9fQA7tgkEoYAltnYOZzNHCAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI1DJKy7ZzV7xMmn9yrcAzeWHCxNIFZKIavREd0fa1RM84MYGaEgG7GLmil2OQxJtIBYF7gEXDYiQMnRNK%2FNcGeO%2FtI8K99u7budAI9nvrpsnXtgqCMS%2FNcbP64nVe1D6tVJQ60sk83ujq4S5PumWEDLOUWrFC2ACSBwKMkZcDeIqWU7jX5VH6U8FeUT2iJtSLNtCKYuDRlm9%2FwhtU7NEY80KSPSSLd%2Bdo%2B4JIwuJldgPbIWPwVBQjm0U%2BpTx4uqHSbulhGNgbKvgc5ufcyRBHgfwAn%2FijvFL4XwBJk8yVpG0UlYDp5OeyncCbhr4OJkCI%2FiXUWshKn3H5LhsEaWlVZbcnwpIKLmEJnKDny2s6aDjlJqWxqhb11C%2FMfcpNasxpX7FOzeW0YhnVAdd5HCQrT7WxseDxkU42i7G8Y4pBNZONU80bsq0LReH%2B2lVMZGR8GCkhtEaPHbMKyWrVfvo4xH2yKJixl9kfxeqtpALR52uJdjjd5pE9AavCmggJ7Rw9rVWisSA1tCvl%2B5JCfoZoEUj%2Fbi%2FvkLKjJINIHAnn8TroOTNqgRNg%2Bf1VvKNbNPEYlorfeUbEsW62dqzmQG%2BhMscrpqaHg0ELuZYW3sPZelWPkOyLSDt3FfpyATc17U%2FFGu8k4JziZiwme7MNqLuMQGOqUBcks4ebr3SO8DgOSbHrTyqIBfF12ZYQizdbukGz8XGWG3ZLHGhpFDkq4qRWRIclGUGeKzHmRpdy%2B88LlXOStFgR7AwYilc634pv1Ng1P6emamyMRc7ry6%2Bs30wrbOfuWTB9IFrTYfZ7BcLBtLyOCScJ1RhZYQminN0fpcBxruyGX2B5hcivla2VDL9%2Fo5ITpnR2PLqt2bC7vSujo4%2FShatBapj3YR&X-Amz-Signature=183af070d76ddf5cbc0c0b3689bb119febf46deeb7d7d63b63e2403142e1d1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVDH2FJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsUYzL036J4Jvd7SqEzCro32DznSPW8t4ic%2FV328DuhAiEA7%2Bcl7IQeZfhM1jSkpijt9fQA7tgkEoYAltnYOZzNHCAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI1DJKy7ZzV7xMmn9yrcAzeWHCxNIFZKIavREd0fa1RM84MYGaEgG7GLmil2OQxJtIBYF7gEXDYiQMnRNK%2FNcGeO%2FtI8K99u7budAI9nvrpsnXtgqCMS%2FNcbP64nVe1D6tVJQ60sk83ujq4S5PumWEDLOUWrFC2ACSBwKMkZcDeIqWU7jX5VH6U8FeUT2iJtSLNtCKYuDRlm9%2FwhtU7NEY80KSPSSLd%2Bdo%2B4JIwuJldgPbIWPwVBQjm0U%2BpTx4uqHSbulhGNgbKvgc5ufcyRBHgfwAn%2FijvFL4XwBJk8yVpG0UlYDp5OeyncCbhr4OJkCI%2FiXUWshKn3H5LhsEaWlVZbcnwpIKLmEJnKDny2s6aDjlJqWxqhb11C%2FMfcpNasxpX7FOzeW0YhnVAdd5HCQrT7WxseDxkU42i7G8Y4pBNZONU80bsq0LReH%2B2lVMZGR8GCkhtEaPHbMKyWrVfvo4xH2yKJixl9kfxeqtpALR52uJdjjd5pE9AavCmggJ7Rw9rVWisSA1tCvl%2B5JCfoZoEUj%2Fbi%2FvkLKjJINIHAnn8TroOTNqgRNg%2Bf1VvKNbNPEYlorfeUbEsW62dqzmQG%2BhMscrpqaHg0ELuZYW3sPZelWPkOyLSDt3FfpyATc17U%2FFGu8k4JziZiwme7MNqLuMQGOqUBcks4ebr3SO8DgOSbHrTyqIBfF12ZYQizdbukGz8XGWG3ZLHGhpFDkq4qRWRIclGUGeKzHmRpdy%2B88LlXOStFgR7AwYilc634pv1Ng1P6emamyMRc7ry6%2Bs30wrbOfuWTB9IFrTYfZ7BcLBtLyOCScJ1RhZYQminN0fpcBxruyGX2B5hcivla2VDL9%2Fo5ITpnR2PLqt2bC7vSujo4%2FShatBapj3YR&X-Amz-Signature=162f01dd6abfe5a1a94d2200cd86e6a43c9c86221d20c243d01c0b501ca0257b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GVDH2FJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsUYzL036J4Jvd7SqEzCro32DznSPW8t4ic%2FV328DuhAiEA7%2Bcl7IQeZfhM1jSkpijt9fQA7tgkEoYAltnYOZzNHCAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI1DJKy7ZzV7xMmn9yrcAzeWHCxNIFZKIavREd0fa1RM84MYGaEgG7GLmil2OQxJtIBYF7gEXDYiQMnRNK%2FNcGeO%2FtI8K99u7budAI9nvrpsnXtgqCMS%2FNcbP64nVe1D6tVJQ60sk83ujq4S5PumWEDLOUWrFC2ACSBwKMkZcDeIqWU7jX5VH6U8FeUT2iJtSLNtCKYuDRlm9%2FwhtU7NEY80KSPSSLd%2Bdo%2B4JIwuJldgPbIWPwVBQjm0U%2BpTx4uqHSbulhGNgbKvgc5ufcyRBHgfwAn%2FijvFL4XwBJk8yVpG0UlYDp5OeyncCbhr4OJkCI%2FiXUWshKn3H5LhsEaWlVZbcnwpIKLmEJnKDny2s6aDjlJqWxqhb11C%2FMfcpNasxpX7FOzeW0YhnVAdd5HCQrT7WxseDxkU42i7G8Y4pBNZONU80bsq0LReH%2B2lVMZGR8GCkhtEaPHbMKyWrVfvo4xH2yKJixl9kfxeqtpALR52uJdjjd5pE9AavCmggJ7Rw9rVWisSA1tCvl%2B5JCfoZoEUj%2Fbi%2FvkLKjJINIHAnn8TroOTNqgRNg%2Bf1VvKNbNPEYlorfeUbEsW62dqzmQG%2BhMscrpqaHg0ELuZYW3sPZelWPkOyLSDt3FfpyATc17U%2FFGu8k4JziZiwme7MNqLuMQGOqUBcks4ebr3SO8DgOSbHrTyqIBfF12ZYQizdbukGz8XGWG3ZLHGhpFDkq4qRWRIclGUGeKzHmRpdy%2B88LlXOStFgR7AwYilc634pv1Ng1P6emamyMRc7ry6%2Bs30wrbOfuWTB9IFrTYfZ7BcLBtLyOCScJ1RhZYQminN0fpcBxruyGX2B5hcivla2VDL9%2Fo5ITpnR2PLqt2bC7vSujo4%2FShatBapj3YR&X-Amz-Signature=999d680eb0d42c0dcedd7328607550073c4c640d89ff4ae41c93813a87b381d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
