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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YRWDX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDYOHWw4t32gNiXK3ImhwBguuMr6vnDn7zKrNxWk%2BOKZAIhAIxv0vSUysFllZgeljEvTzA4L9A601EmtwabEMFlBGuYKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKjIKTxGWTfR1z6Hwq3APB5KLJMgob6vSgp4IQSQc8KDJdOLOk3l8VMe%2BdsEdPFBkf1qUKlt5O2NUJFXPYwjE1jQuTSe%2BIcI%2BSDIZKg27zKb4yF5juY0Iu%2F0LWm5MWkrtIwJ2pL5P24GWjfV3WZmEf%2BIEd%2FqW60EIz3NGcFysueipOED0Gb49cSFK67UP1ZTUSrCukL6k2w%2B9QLjFbQcmPCePuTfgcZWy%2FiApDTV4SNDglRZGOmwrzcgZdRAC1YwxPdjba0BsugNlQvbgVPXkKFaQagm8Izsjbjugy2fJiVP%2FVt44pJk5kzbqkOKVqNkU%2BrXjrqL3LrAJRpRgl23mQnuq%2Fk2yXf%2B4RqGjZijaMov5iAw1ZdjCY9uzmwilFBUfyGgtLMEx1%2BDda%2FeQ3xxKdb6h5mrWk9DYyYzjkneR%2BLJW3vHh7mPvOUg9luW%2Bi%2BKy%2FTk77Zc%2BFNgTYfzcjZSSQkhkCw3ItcHpLXXw297%2FGQ9YmN6BDvCvIAtncr0fzUj6gKdYVNh6VuR33zNH68Oc3IjPjqdtPopKaJPyxR73%2FCATHK2ySCDFEI8vInw5aqTO6R%2FfdiOl33Og6TnvSlXE4P6u8RK6YYKUsURDZvxNx3Z2Kujpg1HKYhf7d4wPsp3jNMmpq7HorOiSyWzCM7tXABjqkAeFk2QTDuN5JZ7dyowSqgErgebB2n7b5DeGNWHiCcyU5yCi9D0UdRp%2FKkXZtrz5AaQRPS7Yd7UtyTbOs2GjBSTCISlu5hGhi4dmdpfTexb7QsAY34y52yRYkidytygVF0p%2BCEAEljes%2FjerzisXvUBZrvLeW3Hf8aHwSSnqFd%2FYmNCt%2B2uYUxbvUGyCbVbI0bz3Des%2Fw9MYQNfHyhVmQkPBRKsR6&X-Amz-Signature=b7f5c57f0c3a98f10e0c414fc6aae1770eb92d4467fad3b4998f18ab29acb6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YRWDX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDYOHWw4t32gNiXK3ImhwBguuMr6vnDn7zKrNxWk%2BOKZAIhAIxv0vSUysFllZgeljEvTzA4L9A601EmtwabEMFlBGuYKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKjIKTxGWTfR1z6Hwq3APB5KLJMgob6vSgp4IQSQc8KDJdOLOk3l8VMe%2BdsEdPFBkf1qUKlt5O2NUJFXPYwjE1jQuTSe%2BIcI%2BSDIZKg27zKb4yF5juY0Iu%2F0LWm5MWkrtIwJ2pL5P24GWjfV3WZmEf%2BIEd%2FqW60EIz3NGcFysueipOED0Gb49cSFK67UP1ZTUSrCukL6k2w%2B9QLjFbQcmPCePuTfgcZWy%2FiApDTV4SNDglRZGOmwrzcgZdRAC1YwxPdjba0BsugNlQvbgVPXkKFaQagm8Izsjbjugy2fJiVP%2FVt44pJk5kzbqkOKVqNkU%2BrXjrqL3LrAJRpRgl23mQnuq%2Fk2yXf%2B4RqGjZijaMov5iAw1ZdjCY9uzmwilFBUfyGgtLMEx1%2BDda%2FeQ3xxKdb6h5mrWk9DYyYzjkneR%2BLJW3vHh7mPvOUg9luW%2Bi%2BKy%2FTk77Zc%2BFNgTYfzcjZSSQkhkCw3ItcHpLXXw297%2FGQ9YmN6BDvCvIAtncr0fzUj6gKdYVNh6VuR33zNH68Oc3IjPjqdtPopKaJPyxR73%2FCATHK2ySCDFEI8vInw5aqTO6R%2FfdiOl33Og6TnvSlXE4P6u8RK6YYKUsURDZvxNx3Z2Kujpg1HKYhf7d4wPsp3jNMmpq7HorOiSyWzCM7tXABjqkAeFk2QTDuN5JZ7dyowSqgErgebB2n7b5DeGNWHiCcyU5yCi9D0UdRp%2FKkXZtrz5AaQRPS7Yd7UtyTbOs2GjBSTCISlu5hGhi4dmdpfTexb7QsAY34y52yRYkidytygVF0p%2BCEAEljes%2FjerzisXvUBZrvLeW3Hf8aHwSSnqFd%2FYmNCt%2B2uYUxbvUGyCbVbI0bz3Des%2Fw9MYQNfHyhVmQkPBRKsR6&X-Amz-Signature=281ccaf1e9c495e92d7c46e0d1f0e673bafb76fddbff1d49a949c6a1ad3cffa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YRWDX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDYOHWw4t32gNiXK3ImhwBguuMr6vnDn7zKrNxWk%2BOKZAIhAIxv0vSUysFllZgeljEvTzA4L9A601EmtwabEMFlBGuYKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKjIKTxGWTfR1z6Hwq3APB5KLJMgob6vSgp4IQSQc8KDJdOLOk3l8VMe%2BdsEdPFBkf1qUKlt5O2NUJFXPYwjE1jQuTSe%2BIcI%2BSDIZKg27zKb4yF5juY0Iu%2F0LWm5MWkrtIwJ2pL5P24GWjfV3WZmEf%2BIEd%2FqW60EIz3NGcFysueipOED0Gb49cSFK67UP1ZTUSrCukL6k2w%2B9QLjFbQcmPCePuTfgcZWy%2FiApDTV4SNDglRZGOmwrzcgZdRAC1YwxPdjba0BsugNlQvbgVPXkKFaQagm8Izsjbjugy2fJiVP%2FVt44pJk5kzbqkOKVqNkU%2BrXjrqL3LrAJRpRgl23mQnuq%2Fk2yXf%2B4RqGjZijaMov5iAw1ZdjCY9uzmwilFBUfyGgtLMEx1%2BDda%2FeQ3xxKdb6h5mrWk9DYyYzjkneR%2BLJW3vHh7mPvOUg9luW%2Bi%2BKy%2FTk77Zc%2BFNgTYfzcjZSSQkhkCw3ItcHpLXXw297%2FGQ9YmN6BDvCvIAtncr0fzUj6gKdYVNh6VuR33zNH68Oc3IjPjqdtPopKaJPyxR73%2FCATHK2ySCDFEI8vInw5aqTO6R%2FfdiOl33Og6TnvSlXE4P6u8RK6YYKUsURDZvxNx3Z2Kujpg1HKYhf7d4wPsp3jNMmpq7HorOiSyWzCM7tXABjqkAeFk2QTDuN5JZ7dyowSqgErgebB2n7b5DeGNWHiCcyU5yCi9D0UdRp%2FKkXZtrz5AaQRPS7Yd7UtyTbOs2GjBSTCISlu5hGhi4dmdpfTexb7QsAY34y52yRYkidytygVF0p%2BCEAEljes%2FjerzisXvUBZrvLeW3Hf8aHwSSnqFd%2FYmNCt%2B2uYUxbvUGyCbVbI0bz3Des%2Fw9MYQNfHyhVmQkPBRKsR6&X-Amz-Signature=13020d96101bb7bd28eb19a934ce5c436d9ba9a29eff8e3dcf07cfd09f05b42f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
