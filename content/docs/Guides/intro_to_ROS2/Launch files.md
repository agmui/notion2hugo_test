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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYU6KD5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADCLPaIW9Qdbrsl3GXdA%2BtVMCA%2F6PKe22dnTAgP%2F0TlAiEAwORstrBWR6wDf9uyRKyoX02JAso0eU2lNpHQSLJtensqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFPomZoHel%2FPKdWSrcA03%2FQybC4NacybzvrWgUaACeYtFudd8eqgKEarKvmRlSkiJcegkqU6p4MxTTw1BHY6fPW%2FrAwg9U2IbbPwYcsMC%2BM8%2B7CDJBNLD%2Fmr9rKK6HXez817pQXCEDY2uW9OD7G0KE7bgM%2FYwHL9OqK2C7MRihxVunggrORpjoCdJSypE6IP2BgC10X3zExDMceS4V13qTHw0VpQTSbe1h6tRfiYO3bCSN9UIh0gBd0wzzZ45oIvxsh2yKFC1W3RO5IAqX7PiPBCYqbyp4toHol37If9Lgv315EjRkrndcvgVNlKosG8S8uCcKR1OPxZOtTqrMqK6T%2FPENCW4YxYh4eoyJY2zJmJwIqh56sOu7uXiYC3buyStRL1ND2F5fe7AnqHM76AKzS5rB0FawJ9DZHOtu5jvMUsRP1Hcc0iQkjMw6lUlE4Yjzn%2Blj2tV2hRUlRyWl6g1HDrsDnWEHJZMxJzQJPNMRMIHeFmjGQRQ0UeRNuSVzjSPj4%2BIABYYBdqzZWUM8l%2BxRoykx%2BahQTrS60tVMXZSm1j5fFALr5Ws5k%2FJ4ImfrTPUDDbUfi51H0J8WlnSmMZQIH5OC2rmRhLC47CiRs2d9XVOG0wNnnBc%2FPxJavqWRbDqMeuWPz4qa8AUAMPTen8IGOqUBLF11C%2FEjESJkjYVVvPGHrUNQjii%2FuHMdNi3PWYsGn740FYgnQd%2FFKgATEP6JixwTX%2B7O3QUeGHjPw7LBJEeZVnwrC4q5U5ZKx93XuhAjP3JFIiru4Qhxg8Rro6lIjp%2BgpD4lvCqWg7ufOfaD9ZsZ6wUBZ74ezZOM4bDHGEoCY1QflkL07vX2uTiiI6Ucq6G81sxCVlecv0Xhpic7HJdm3p5h7opH&X-Amz-Signature=d9736e9a52fa2af736b6efe90aac1108117e08388ab67e09f5d69b10d091e877&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYU6KD5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADCLPaIW9Qdbrsl3GXdA%2BtVMCA%2F6PKe22dnTAgP%2F0TlAiEAwORstrBWR6wDf9uyRKyoX02JAso0eU2lNpHQSLJtensqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFPomZoHel%2FPKdWSrcA03%2FQybC4NacybzvrWgUaACeYtFudd8eqgKEarKvmRlSkiJcegkqU6p4MxTTw1BHY6fPW%2FrAwg9U2IbbPwYcsMC%2BM8%2B7CDJBNLD%2Fmr9rKK6HXez817pQXCEDY2uW9OD7G0KE7bgM%2FYwHL9OqK2C7MRihxVunggrORpjoCdJSypE6IP2BgC10X3zExDMceS4V13qTHw0VpQTSbe1h6tRfiYO3bCSN9UIh0gBd0wzzZ45oIvxsh2yKFC1W3RO5IAqX7PiPBCYqbyp4toHol37If9Lgv315EjRkrndcvgVNlKosG8S8uCcKR1OPxZOtTqrMqK6T%2FPENCW4YxYh4eoyJY2zJmJwIqh56sOu7uXiYC3buyStRL1ND2F5fe7AnqHM76AKzS5rB0FawJ9DZHOtu5jvMUsRP1Hcc0iQkjMw6lUlE4Yjzn%2Blj2tV2hRUlRyWl6g1HDrsDnWEHJZMxJzQJPNMRMIHeFmjGQRQ0UeRNuSVzjSPj4%2BIABYYBdqzZWUM8l%2BxRoykx%2BahQTrS60tVMXZSm1j5fFALr5Ws5k%2FJ4ImfrTPUDDbUfi51H0J8WlnSmMZQIH5OC2rmRhLC47CiRs2d9XVOG0wNnnBc%2FPxJavqWRbDqMeuWPz4qa8AUAMPTen8IGOqUBLF11C%2FEjESJkjYVVvPGHrUNQjii%2FuHMdNi3PWYsGn740FYgnQd%2FFKgATEP6JixwTX%2B7O3QUeGHjPw7LBJEeZVnwrC4q5U5ZKx93XuhAjP3JFIiru4Qhxg8Rro6lIjp%2BgpD4lvCqWg7ufOfaD9ZsZ6wUBZ74ezZOM4bDHGEoCY1QflkL07vX2uTiiI6Ucq6G81sxCVlecv0Xhpic7HJdm3p5h7opH&X-Amz-Signature=8414255de823c483532b0c1b8aa60b18a9280147fc1921aa676020b9dbb586d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYU6KD5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADCLPaIW9Qdbrsl3GXdA%2BtVMCA%2F6PKe22dnTAgP%2F0TlAiEAwORstrBWR6wDf9uyRKyoX02JAso0eU2lNpHQSLJtensqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOFPomZoHel%2FPKdWSrcA03%2FQybC4NacybzvrWgUaACeYtFudd8eqgKEarKvmRlSkiJcegkqU6p4MxTTw1BHY6fPW%2FrAwg9U2IbbPwYcsMC%2BM8%2B7CDJBNLD%2Fmr9rKK6HXez817pQXCEDY2uW9OD7G0KE7bgM%2FYwHL9OqK2C7MRihxVunggrORpjoCdJSypE6IP2BgC10X3zExDMceS4V13qTHw0VpQTSbe1h6tRfiYO3bCSN9UIh0gBd0wzzZ45oIvxsh2yKFC1W3RO5IAqX7PiPBCYqbyp4toHol37If9Lgv315EjRkrndcvgVNlKosG8S8uCcKR1OPxZOtTqrMqK6T%2FPENCW4YxYh4eoyJY2zJmJwIqh56sOu7uXiYC3buyStRL1ND2F5fe7AnqHM76AKzS5rB0FawJ9DZHOtu5jvMUsRP1Hcc0iQkjMw6lUlE4Yjzn%2Blj2tV2hRUlRyWl6g1HDrsDnWEHJZMxJzQJPNMRMIHeFmjGQRQ0UeRNuSVzjSPj4%2BIABYYBdqzZWUM8l%2BxRoykx%2BahQTrS60tVMXZSm1j5fFALr5Ws5k%2FJ4ImfrTPUDDbUfi51H0J8WlnSmMZQIH5OC2rmRhLC47CiRs2d9XVOG0wNnnBc%2FPxJavqWRbDqMeuWPz4qa8AUAMPTen8IGOqUBLF11C%2FEjESJkjYVVvPGHrUNQjii%2FuHMdNi3PWYsGn740FYgnQd%2FFKgATEP6JixwTX%2B7O3QUeGHjPw7LBJEeZVnwrC4q5U5ZKx93XuhAjP3JFIiru4Qhxg8Rro6lIjp%2BgpD4lvCqWg7ufOfaD9ZsZ6wUBZ74ezZOM4bDHGEoCY1QflkL07vX2uTiiI6Ucq6G81sxCVlecv0Xhpic7HJdm3p5h7opH&X-Amz-Signature=3173a381b3b8026f9d944ac6f60719eefb5f30c1008951762feb667ebadb8ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
