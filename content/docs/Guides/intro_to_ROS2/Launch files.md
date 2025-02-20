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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TY2D224%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCFa%2Fscun4MM6v77KlhRy5iMxxZnoewB7Tb1R4du0MWgIhAKXjJTNwYpWZk7W56%2F9POjNapT%2BFVGvCEbHBILRxAawiKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygKyrGRgQUkd1Kh2kq3AOsBNpUAQ%2FVzhCseTbxpkro2k3S3A28R1fVCjDIhIrgU1kMlZ1VZYnL%2BNc%2FAHvkK6j3DBs1QnvRaJz0EGMSRraamgekbVV%2BXjBtUQw2%2FbfoA5nuXYTzJ4DjoQAUsG3rlrAPDaArwkXiYwzwmiAtj%2FZ7cXEe8AoSr%2BGwL0BP0obhYD1Cas0ZfZe39nugbbRVcPfnZvH6ATTOi0fSjfnycC4Q5scOY963MrNoIT4QMKPn0a2wer86TJHSAiQVOajSDH4gD4l7c%2BRdJQnmKig%2FTXkLhtHkgfpUFUwHhzHOM%2B9S3V0aySeZJLEeu%2BJ%2B5LSLO2ZTSsxzDHTEPu2U0oLTBgr0KI3RWr8xM8U0lZAUOi25XPH4tPTpGUK6N%2Bhfdq0TUWfoDL%2Blsb0M7uCw3oh1CcWIxZ%2BnFEXWn0X%2BpjFf3i4t3CkT26%2Fbv8VDLzEOiXSLAbwwl8pMT5AzsOMV84ZhFM8Y1%2BskURHdksCuvxsPXdEdlS4Sf0y7oNx8jfBnpliPB3J%2BhRINc2ug4S071ovvJADq5AqSroYHYsm%2BluKaQEgf1%2BHBKSO%2F1ESljZQ405Ha25bnV%2FHw64elkRP6XgQsWhz5UbS5E2pgoXFLKQIOyfYDXPlBWBVuMqToHjns2jDDjd69BjqkAR%2FEhUpWdi6qPe%2F%2Bne4o1BOBI5Of39phIykVGdGuEjBfP68fhxdn%2FFPxTTMOg%2BzIZh8ma7noxYiiGPIUgIw%2FpNi86Lg4g%2BZOLTKOn%2BzpLCon8yUAwHjdvS3s%2B3C7QzFtU27kRX2yN3qWxpD9wL%2FGEI6vup7SOD91DRHKtq%2Baq%2ByhrAfkAWxtecufK08gp8nTYHy7y44zAe4GfprEgSm30IqJ30vH&X-Amz-Signature=1b261e7e40c8d1c9b5e0f170349c85676171c94573d510c4cc5cc87b5f1092b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TY2D224%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCFa%2Fscun4MM6v77KlhRy5iMxxZnoewB7Tb1R4du0MWgIhAKXjJTNwYpWZk7W56%2F9POjNapT%2BFVGvCEbHBILRxAawiKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygKyrGRgQUkd1Kh2kq3AOsBNpUAQ%2FVzhCseTbxpkro2k3S3A28R1fVCjDIhIrgU1kMlZ1VZYnL%2BNc%2FAHvkK6j3DBs1QnvRaJz0EGMSRraamgekbVV%2BXjBtUQw2%2FbfoA5nuXYTzJ4DjoQAUsG3rlrAPDaArwkXiYwzwmiAtj%2FZ7cXEe8AoSr%2BGwL0BP0obhYD1Cas0ZfZe39nugbbRVcPfnZvH6ATTOi0fSjfnycC4Q5scOY963MrNoIT4QMKPn0a2wer86TJHSAiQVOajSDH4gD4l7c%2BRdJQnmKig%2FTXkLhtHkgfpUFUwHhzHOM%2B9S3V0aySeZJLEeu%2BJ%2B5LSLO2ZTSsxzDHTEPu2U0oLTBgr0KI3RWr8xM8U0lZAUOi25XPH4tPTpGUK6N%2Bhfdq0TUWfoDL%2Blsb0M7uCw3oh1CcWIxZ%2BnFEXWn0X%2BpjFf3i4t3CkT26%2Fbv8VDLzEOiXSLAbwwl8pMT5AzsOMV84ZhFM8Y1%2BskURHdksCuvxsPXdEdlS4Sf0y7oNx8jfBnpliPB3J%2BhRINc2ug4S071ovvJADq5AqSroYHYsm%2BluKaQEgf1%2BHBKSO%2F1ESljZQ405Ha25bnV%2FHw64elkRP6XgQsWhz5UbS5E2pgoXFLKQIOyfYDXPlBWBVuMqToHjns2jDDjd69BjqkAR%2FEhUpWdi6qPe%2F%2Bne4o1BOBI5Of39phIykVGdGuEjBfP68fhxdn%2FFPxTTMOg%2BzIZh8ma7noxYiiGPIUgIw%2FpNi86Lg4g%2BZOLTKOn%2BzpLCon8yUAwHjdvS3s%2B3C7QzFtU27kRX2yN3qWxpD9wL%2FGEI6vup7SOD91DRHKtq%2Baq%2ByhrAfkAWxtecufK08gp8nTYHy7y44zAe4GfprEgSm30IqJ30vH&X-Amz-Signature=153b5486bbaeb90436d4d90d096d4984915a3cfa86fcb3365dfa546e6245b757&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TY2D224%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCFa%2Fscun4MM6v77KlhRy5iMxxZnoewB7Tb1R4du0MWgIhAKXjJTNwYpWZk7W56%2F9POjNapT%2BFVGvCEbHBILRxAawiKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygKyrGRgQUkd1Kh2kq3AOsBNpUAQ%2FVzhCseTbxpkro2k3S3A28R1fVCjDIhIrgU1kMlZ1VZYnL%2BNc%2FAHvkK6j3DBs1QnvRaJz0EGMSRraamgekbVV%2BXjBtUQw2%2FbfoA5nuXYTzJ4DjoQAUsG3rlrAPDaArwkXiYwzwmiAtj%2FZ7cXEe8AoSr%2BGwL0BP0obhYD1Cas0ZfZe39nugbbRVcPfnZvH6ATTOi0fSjfnycC4Q5scOY963MrNoIT4QMKPn0a2wer86TJHSAiQVOajSDH4gD4l7c%2BRdJQnmKig%2FTXkLhtHkgfpUFUwHhzHOM%2B9S3V0aySeZJLEeu%2BJ%2B5LSLO2ZTSsxzDHTEPu2U0oLTBgr0KI3RWr8xM8U0lZAUOi25XPH4tPTpGUK6N%2Bhfdq0TUWfoDL%2Blsb0M7uCw3oh1CcWIxZ%2BnFEXWn0X%2BpjFf3i4t3CkT26%2Fbv8VDLzEOiXSLAbwwl8pMT5AzsOMV84ZhFM8Y1%2BskURHdksCuvxsPXdEdlS4Sf0y7oNx8jfBnpliPB3J%2BhRINc2ug4S071ovvJADq5AqSroYHYsm%2BluKaQEgf1%2BHBKSO%2F1ESljZQ405Ha25bnV%2FHw64elkRP6XgQsWhz5UbS5E2pgoXFLKQIOyfYDXPlBWBVuMqToHjns2jDDjd69BjqkAR%2FEhUpWdi6qPe%2F%2Bne4o1BOBI5Of39phIykVGdGuEjBfP68fhxdn%2FFPxTTMOg%2BzIZh8ma7noxYiiGPIUgIw%2FpNi86Lg4g%2BZOLTKOn%2BzpLCon8yUAwHjdvS3s%2B3C7QzFtU27kRX2yN3qWxpD9wL%2FGEI6vup7SOD91DRHKtq%2Baq%2ByhrAfkAWxtecufK08gp8nTYHy7y44zAe4GfprEgSm30IqJ30vH&X-Amz-Signature=5d3190e99ec941b4e2ee7691cab387e95c19ec80ddcd0a414a7486525e70bd54&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
