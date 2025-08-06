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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZQGHZV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD8Rs4wyXsmPFMzH3MvDxcGAhpN88dhQPzOtPQJtYYFkgIgYur6n1Hd%2Flw7NLuXuIm32lKFGLbO4zxxBkAMVhX2P9sqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKpKsEFfknN9DWcircA4730E%2BBu1APoTTTgNMBbJyd6tckzR798ls7kr19KxLFNz5lV6%2BQV02h0lNk%2FxJaxbNR68BQmeVXkfhqXc5mTJdAfMhdjZ4u4FZUTcMZTq5Rh%2BDWfkH5Ys20sRn%2BPOv9s0myK1YXeS1M0bp52%2B3LOp6WTmTH%2BpeqS88yx7TVq%2FYBxjwa92%2F4v%2BxYtV3mZ762nwitcjjtpET5ioq036xCCgXISuo52fFf%2FM0aHMJY8BLUZsM3WNKWbSLLCLNEDQVbi3RJI9qLRXM%2FV5P6cJSMycytgiyriccdMLZm9AjzMrqufwEs7MCiI1TPivLSoA%2Bp78E1ARk4%2Fp2QRVlZ%2F217F1DLkh7rPw5SIsIF7WAcpptc6XbPzDAeH8NosIJeQxVcXb3cLVT7j7FqC1aK1CbU2sNniNeODWLRee1Yyo2Np6tI5IkUCDxxxrUCrCAjdNq%2BmmYqRLalbPuZ2yoaMIfJ7UuAP4juY3LVoNnXp6suK%2BBJZwGAZs6Lb83%2F%2FZ2HRlER6AGq5UxTHzSLegZ90pKkfnyHFf7usyavwxQWLRwn6NdgwE3a%2BKz6BFOn1d7eJb1vy1O1S3Am9EqjHSYvbgVuBS6y4IDFzhJZPS%2FyDaCOYdSjAf3EF%2FXo5PyfeH3hMJS0z8QGOqUB7ZoxHEVoe8WxTkCm2Vq9vFdLlg8frEVAUDUnVYn%2FemVfqJc%2BCKS7KBh5PwDNPyATFrU6ZwJM84QCuv49dw35oJI3by9d%2F2cp%2Fki1UkOtFP%2FEoHMoRKXHerwqDSTaCxPL6fs9fMjV8pFyHpFWK%2FgGagN2v%2Fm7ymWRwc41TvWmvGEkpJ0xImQS%2F%2F22wPpHm6pd4%2B%2BctYkPvCEO8c4kjMb96HiDodMZ&X-Amz-Signature=bf7dc4b1cdf0b7a1e8bbab99edec6cfc24fcfbfc741eea1bd190e75ec14bf9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZQGHZV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD8Rs4wyXsmPFMzH3MvDxcGAhpN88dhQPzOtPQJtYYFkgIgYur6n1Hd%2Flw7NLuXuIm32lKFGLbO4zxxBkAMVhX2P9sqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKpKsEFfknN9DWcircA4730E%2BBu1APoTTTgNMBbJyd6tckzR798ls7kr19KxLFNz5lV6%2BQV02h0lNk%2FxJaxbNR68BQmeVXkfhqXc5mTJdAfMhdjZ4u4FZUTcMZTq5Rh%2BDWfkH5Ys20sRn%2BPOv9s0myK1YXeS1M0bp52%2B3LOp6WTmTH%2BpeqS88yx7TVq%2FYBxjwa92%2F4v%2BxYtV3mZ762nwitcjjtpET5ioq036xCCgXISuo52fFf%2FM0aHMJY8BLUZsM3WNKWbSLLCLNEDQVbi3RJI9qLRXM%2FV5P6cJSMycytgiyriccdMLZm9AjzMrqufwEs7MCiI1TPivLSoA%2Bp78E1ARk4%2Fp2QRVlZ%2F217F1DLkh7rPw5SIsIF7WAcpptc6XbPzDAeH8NosIJeQxVcXb3cLVT7j7FqC1aK1CbU2sNniNeODWLRee1Yyo2Np6tI5IkUCDxxxrUCrCAjdNq%2BmmYqRLalbPuZ2yoaMIfJ7UuAP4juY3LVoNnXp6suK%2BBJZwGAZs6Lb83%2F%2FZ2HRlER6AGq5UxTHzSLegZ90pKkfnyHFf7usyavwxQWLRwn6NdgwE3a%2BKz6BFOn1d7eJb1vy1O1S3Am9EqjHSYvbgVuBS6y4IDFzhJZPS%2FyDaCOYdSjAf3EF%2FXo5PyfeH3hMJS0z8QGOqUB7ZoxHEVoe8WxTkCm2Vq9vFdLlg8frEVAUDUnVYn%2FemVfqJc%2BCKS7KBh5PwDNPyATFrU6ZwJM84QCuv49dw35oJI3by9d%2F2cp%2Fki1UkOtFP%2FEoHMoRKXHerwqDSTaCxPL6fs9fMjV8pFyHpFWK%2FgGagN2v%2Fm7ymWRwc41TvWmvGEkpJ0xImQS%2F%2F22wPpHm6pd4%2B%2BctYkPvCEO8c4kjMb96HiDodMZ&X-Amz-Signature=6b1eac0d4f468f77d729bfeac1a283af90e625ea3fc0a254b1550d980a4e32ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZQGHZV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD8Rs4wyXsmPFMzH3MvDxcGAhpN88dhQPzOtPQJtYYFkgIgYur6n1Hd%2Flw7NLuXuIm32lKFGLbO4zxxBkAMVhX2P9sqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxKpKsEFfknN9DWcircA4730E%2BBu1APoTTTgNMBbJyd6tckzR798ls7kr19KxLFNz5lV6%2BQV02h0lNk%2FxJaxbNR68BQmeVXkfhqXc5mTJdAfMhdjZ4u4FZUTcMZTq5Rh%2BDWfkH5Ys20sRn%2BPOv9s0myK1YXeS1M0bp52%2B3LOp6WTmTH%2BpeqS88yx7TVq%2FYBxjwa92%2F4v%2BxYtV3mZ762nwitcjjtpET5ioq036xCCgXISuo52fFf%2FM0aHMJY8BLUZsM3WNKWbSLLCLNEDQVbi3RJI9qLRXM%2FV5P6cJSMycytgiyriccdMLZm9AjzMrqufwEs7MCiI1TPivLSoA%2Bp78E1ARk4%2Fp2QRVlZ%2F217F1DLkh7rPw5SIsIF7WAcpptc6XbPzDAeH8NosIJeQxVcXb3cLVT7j7FqC1aK1CbU2sNniNeODWLRee1Yyo2Np6tI5IkUCDxxxrUCrCAjdNq%2BmmYqRLalbPuZ2yoaMIfJ7UuAP4juY3LVoNnXp6suK%2BBJZwGAZs6Lb83%2F%2FZ2HRlER6AGq5UxTHzSLegZ90pKkfnyHFf7usyavwxQWLRwn6NdgwE3a%2BKz6BFOn1d7eJb1vy1O1S3Am9EqjHSYvbgVuBS6y4IDFzhJZPS%2FyDaCOYdSjAf3EF%2FXo5PyfeH3hMJS0z8QGOqUB7ZoxHEVoe8WxTkCm2Vq9vFdLlg8frEVAUDUnVYn%2FemVfqJc%2BCKS7KBh5PwDNPyATFrU6ZwJM84QCuv49dw35oJI3by9d%2F2cp%2Fki1UkOtFP%2FEoHMoRKXHerwqDSTaCxPL6fs9fMjV8pFyHpFWK%2FgGagN2v%2Fm7ymWRwc41TvWmvGEkpJ0xImQS%2F%2F22wPpHm6pd4%2B%2BctYkPvCEO8c4kjMb96HiDodMZ&X-Amz-Signature=ccdce2b7dc961917f2f18ddf4574ad43af09cb83a3cfea8c9eb51784076247f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
