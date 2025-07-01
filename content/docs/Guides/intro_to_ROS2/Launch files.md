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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666774SBZO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcc0S7Kop090Bc3gxZsqOIn3O4k4JbaFUYVrpbsvBIEAiBL7bFyCTMywXWimcWOR%2Bfm5UZTPyFGTZAWhvnduKdjPCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM30bDi2StI%2BVcDfQCKtwDefwL0WHpK4B3OOcjAi09xlyWpI7Ocs4biIXYE0XiTxoHFWqlJ4YzQ40l1h7nN7EUNzInV%2B8Jaf%2BK3L%2FGsCobqev6bIchFqkAHKYLmQAe9oOnDQrsTH1PENwjf0LWmQs0SGFOLvVojS8i0C5XvUNUq7n%2FPH1Yp8gQWq2FIwljUk9F1yxk03oRuy94lbmu2a36Z4nbiAiGPM9ouU034Wypp80YjQMcoxZizdL6eXiZqFfclSNLe6MQJ7vbrPg6uKL6PrgSAvA3uSONCIyHEF2s64gGhAmPsZJWnjPcQ2HP6M%2FrSnEtMicaT4iSD1q9dqc24MWlVKM38Nx7WV2Q76wUgoZRwAZcO5rDr3EgsVU4FEH25pW4Asoy%2FhcbhUp7Rh4yzC32L0vjEg9iyK9olhvxhe6CQDi7JbHi4iIBUGUnVwM2QCxRyYpxjPjDfgzMTkrm6Qw4%2B4YcSzaM7XEKifc3V7J9ZL6WvGcO%2F2BSxyOQQQB7BKX71StS9NoAflZX%2Ffe%2FfIvA3nny6d4V%2FapsRK9SXfrEDP5rs8capv%2BskB6peMF9S0aC2fayEqgyb6r2nQhDJjN5b%2BMxYUYlnBdmpUgRCyTzaZFGcdepgutnOe5U5K6JDUAiFAlB3jdzx90whMSQwwY6pgFyjWP%2FoTfTa7cvjNigjXogWCOGz45xqFYq7iLxmO%2BcNBY4g%2F%2FB%2FxKrw9i7eHeBe7r0ko9yzOIyZgNNd6ert01%2BSJ4ucUiP0AxfdWxBeUVISjrYPG1%2BhJ5g4uNn6M6bQpqq74g07ov%2F5QCMQBGVWgA33oJsD4PIwJHKHK6uIzqlWqkcorxhuIkYWGySTCP19yyhwqWmKvvzZMWIpJUzk5aMim8z63Ca&X-Amz-Signature=0c403159e40e43580d9ee2ba9d9057894e8afdde59e444cbeb376f230442d660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666774SBZO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcc0S7Kop090Bc3gxZsqOIn3O4k4JbaFUYVrpbsvBIEAiBL7bFyCTMywXWimcWOR%2Bfm5UZTPyFGTZAWhvnduKdjPCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM30bDi2StI%2BVcDfQCKtwDefwL0WHpK4B3OOcjAi09xlyWpI7Ocs4biIXYE0XiTxoHFWqlJ4YzQ40l1h7nN7EUNzInV%2B8Jaf%2BK3L%2FGsCobqev6bIchFqkAHKYLmQAe9oOnDQrsTH1PENwjf0LWmQs0SGFOLvVojS8i0C5XvUNUq7n%2FPH1Yp8gQWq2FIwljUk9F1yxk03oRuy94lbmu2a36Z4nbiAiGPM9ouU034Wypp80YjQMcoxZizdL6eXiZqFfclSNLe6MQJ7vbrPg6uKL6PrgSAvA3uSONCIyHEF2s64gGhAmPsZJWnjPcQ2HP6M%2FrSnEtMicaT4iSD1q9dqc24MWlVKM38Nx7WV2Q76wUgoZRwAZcO5rDr3EgsVU4FEH25pW4Asoy%2FhcbhUp7Rh4yzC32L0vjEg9iyK9olhvxhe6CQDi7JbHi4iIBUGUnVwM2QCxRyYpxjPjDfgzMTkrm6Qw4%2B4YcSzaM7XEKifc3V7J9ZL6WvGcO%2F2BSxyOQQQB7BKX71StS9NoAflZX%2Ffe%2FfIvA3nny6d4V%2FapsRK9SXfrEDP5rs8capv%2BskB6peMF9S0aC2fayEqgyb6r2nQhDJjN5b%2BMxYUYlnBdmpUgRCyTzaZFGcdepgutnOe5U5K6JDUAiFAlB3jdzx90whMSQwwY6pgFyjWP%2FoTfTa7cvjNigjXogWCOGz45xqFYq7iLxmO%2BcNBY4g%2F%2FB%2FxKrw9i7eHeBe7r0ko9yzOIyZgNNd6ert01%2BSJ4ucUiP0AxfdWxBeUVISjrYPG1%2BhJ5g4uNn6M6bQpqq74g07ov%2F5QCMQBGVWgA33oJsD4PIwJHKHK6uIzqlWqkcorxhuIkYWGySTCP19yyhwqWmKvvzZMWIpJUzk5aMim8z63Ca&X-Amz-Signature=cc0ac765a0058ef6ea26eecee80a2716fa0aff687a9a98b05d557e6c96b890bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666774SBZO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcc0S7Kop090Bc3gxZsqOIn3O4k4JbaFUYVrpbsvBIEAiBL7bFyCTMywXWimcWOR%2Bfm5UZTPyFGTZAWhvnduKdjPCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM30bDi2StI%2BVcDfQCKtwDefwL0WHpK4B3OOcjAi09xlyWpI7Ocs4biIXYE0XiTxoHFWqlJ4YzQ40l1h7nN7EUNzInV%2B8Jaf%2BK3L%2FGsCobqev6bIchFqkAHKYLmQAe9oOnDQrsTH1PENwjf0LWmQs0SGFOLvVojS8i0C5XvUNUq7n%2FPH1Yp8gQWq2FIwljUk9F1yxk03oRuy94lbmu2a36Z4nbiAiGPM9ouU034Wypp80YjQMcoxZizdL6eXiZqFfclSNLe6MQJ7vbrPg6uKL6PrgSAvA3uSONCIyHEF2s64gGhAmPsZJWnjPcQ2HP6M%2FrSnEtMicaT4iSD1q9dqc24MWlVKM38Nx7WV2Q76wUgoZRwAZcO5rDr3EgsVU4FEH25pW4Asoy%2FhcbhUp7Rh4yzC32L0vjEg9iyK9olhvxhe6CQDi7JbHi4iIBUGUnVwM2QCxRyYpxjPjDfgzMTkrm6Qw4%2B4YcSzaM7XEKifc3V7J9ZL6WvGcO%2F2BSxyOQQQB7BKX71StS9NoAflZX%2Ffe%2FfIvA3nny6d4V%2FapsRK9SXfrEDP5rs8capv%2BskB6peMF9S0aC2fayEqgyb6r2nQhDJjN5b%2BMxYUYlnBdmpUgRCyTzaZFGcdepgutnOe5U5K6JDUAiFAlB3jdzx90whMSQwwY6pgFyjWP%2FoTfTa7cvjNigjXogWCOGz45xqFYq7iLxmO%2BcNBY4g%2F%2FB%2FxKrw9i7eHeBe7r0ko9yzOIyZgNNd6ert01%2BSJ4ucUiP0AxfdWxBeUVISjrYPG1%2BhJ5g4uNn6M6bQpqq74g07ov%2F5QCMQBGVWgA33oJsD4PIwJHKHK6uIzqlWqkcorxhuIkYWGySTCP19yyhwqWmKvvzZMWIpJUzk5aMim8z63Ca&X-Amz-Signature=ed7447dee09402bb31f0677a874f46a7d44a60e33b54b3a238c9dd80f201b4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
