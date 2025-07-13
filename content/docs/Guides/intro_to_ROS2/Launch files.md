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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTCI2PL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzggbRGNaEkYPgrh4xyjdcTmuzrud3Yny7mxuwHZK0CgIhAP0lhVd%2FCfaZ5FIJon6skhGPLdprTK73jlwkw0eMQB6VKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FSlhMY7zNNLqFf%2BIq3AMPMKz5ymcw%2FuEnkOAASzwOhOjmSH0rzhuXhB9AZ9hMDx99bvHTgCgNCaIL%2FNmgNNzJ%2B1iDmn4KNlRNtw9Az9y9HmXuFr6H%2BU2tLDGuTG4CUnnh6oeD1NNDmQNEfAVklEqTYLOqWJ9SSADpSVNfD9vV20KyckVgnyxkqeV5ylYbRwMXHLpM6BSmHFS6lyK0MZEf33XJFn772TZWd84wcrZNSJE7ZWgO0qW8gcvAO0Y9Fe%2BpqSAk%2FjlMwqu7O9wvHNZnT%2BZVYoPR3RnUuVlBKYBHhuRwLt8SFBvBav9mQpaT2ctTMxEP75xKQZOagsVq7NFyXJZMCgg6%2Fz%2F%2Fvm7%2Br0SfEUHc4tzaMqv6QdhFuiLYMpyV824bX2KSR3DsycgbKdACrWrfGB0%2BoXyMYrFps8PmYuq1nspkwTwFpvYtZOcUt5I0HJnEYX7rvRHLT3OIng9afmJjk4oxPJNfu%2Bc7XDMbloNAZ5sbjKQQuA9bP7lnUPuv8sbkfc5%2F61ooXkDN86yVBqzaukXf%2F6AMbsJVSYD2cu8ZojCgmT3xdQn%2FPX%2FetnK9H4VeLi9bQJG37%2Fst3ZzRLxL6hWLtFVsKtpSA92EPQ5BxrP9cHYZxi5tgQtFzUVLv4yQjdE6BVUlDrTDvgMzDBjqkARg9ZB8WZdtd5orW8sEG1UzB2reOtva5iLORaytJAneCYSbCqkSdN9hIo7yMbqfDpvMPCyKIxgYwTIT2GVlOXz7zz9xKifoNQ18XSAsfrFyh30lI3qHtKxAgsonORkpKnAXaRqN4p9OEwESNPOGOj4S%2F7YQ8Nk3BfDSoug%2FWPzASUHLznJCq1prWQsdwfM%2FnwabwoU5R8WsjIBEJmi8LVh6I9nfp&X-Amz-Signature=95ade5cb0dbd29198527890d6d2c4cb304fcd204ce67f2937d4901d0bb9bd667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTCI2PL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzggbRGNaEkYPgrh4xyjdcTmuzrud3Yny7mxuwHZK0CgIhAP0lhVd%2FCfaZ5FIJon6skhGPLdprTK73jlwkw0eMQB6VKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FSlhMY7zNNLqFf%2BIq3AMPMKz5ymcw%2FuEnkOAASzwOhOjmSH0rzhuXhB9AZ9hMDx99bvHTgCgNCaIL%2FNmgNNzJ%2B1iDmn4KNlRNtw9Az9y9HmXuFr6H%2BU2tLDGuTG4CUnnh6oeD1NNDmQNEfAVklEqTYLOqWJ9SSADpSVNfD9vV20KyckVgnyxkqeV5ylYbRwMXHLpM6BSmHFS6lyK0MZEf33XJFn772TZWd84wcrZNSJE7ZWgO0qW8gcvAO0Y9Fe%2BpqSAk%2FjlMwqu7O9wvHNZnT%2BZVYoPR3RnUuVlBKYBHhuRwLt8SFBvBav9mQpaT2ctTMxEP75xKQZOagsVq7NFyXJZMCgg6%2Fz%2F%2Fvm7%2Br0SfEUHc4tzaMqv6QdhFuiLYMpyV824bX2KSR3DsycgbKdACrWrfGB0%2BoXyMYrFps8PmYuq1nspkwTwFpvYtZOcUt5I0HJnEYX7rvRHLT3OIng9afmJjk4oxPJNfu%2Bc7XDMbloNAZ5sbjKQQuA9bP7lnUPuv8sbkfc5%2F61ooXkDN86yVBqzaukXf%2F6AMbsJVSYD2cu8ZojCgmT3xdQn%2FPX%2FetnK9H4VeLi9bQJG37%2Fst3ZzRLxL6hWLtFVsKtpSA92EPQ5BxrP9cHYZxi5tgQtFzUVLv4yQjdE6BVUlDrTDvgMzDBjqkARg9ZB8WZdtd5orW8sEG1UzB2reOtva5iLORaytJAneCYSbCqkSdN9hIo7yMbqfDpvMPCyKIxgYwTIT2GVlOXz7zz9xKifoNQ18XSAsfrFyh30lI3qHtKxAgsonORkpKnAXaRqN4p9OEwESNPOGOj4S%2F7YQ8Nk3BfDSoug%2FWPzASUHLznJCq1prWQsdwfM%2FnwabwoU5R8WsjIBEJmi8LVh6I9nfp&X-Amz-Signature=129b5d0bb52331375a748543900e31dbaad495d391b58757d6251848f2dc38f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTCI2PL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzggbRGNaEkYPgrh4xyjdcTmuzrud3Yny7mxuwHZK0CgIhAP0lhVd%2FCfaZ5FIJon6skhGPLdprTK73jlwkw0eMQB6VKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FSlhMY7zNNLqFf%2BIq3AMPMKz5ymcw%2FuEnkOAASzwOhOjmSH0rzhuXhB9AZ9hMDx99bvHTgCgNCaIL%2FNmgNNzJ%2B1iDmn4KNlRNtw9Az9y9HmXuFr6H%2BU2tLDGuTG4CUnnh6oeD1NNDmQNEfAVklEqTYLOqWJ9SSADpSVNfD9vV20KyckVgnyxkqeV5ylYbRwMXHLpM6BSmHFS6lyK0MZEf33XJFn772TZWd84wcrZNSJE7ZWgO0qW8gcvAO0Y9Fe%2BpqSAk%2FjlMwqu7O9wvHNZnT%2BZVYoPR3RnUuVlBKYBHhuRwLt8SFBvBav9mQpaT2ctTMxEP75xKQZOagsVq7NFyXJZMCgg6%2Fz%2F%2Fvm7%2Br0SfEUHc4tzaMqv6QdhFuiLYMpyV824bX2KSR3DsycgbKdACrWrfGB0%2BoXyMYrFps8PmYuq1nspkwTwFpvYtZOcUt5I0HJnEYX7rvRHLT3OIng9afmJjk4oxPJNfu%2Bc7XDMbloNAZ5sbjKQQuA9bP7lnUPuv8sbkfc5%2F61ooXkDN86yVBqzaukXf%2F6AMbsJVSYD2cu8ZojCgmT3xdQn%2FPX%2FetnK9H4VeLi9bQJG37%2Fst3ZzRLxL6hWLtFVsKtpSA92EPQ5BxrP9cHYZxi5tgQtFzUVLv4yQjdE6BVUlDrTDvgMzDBjqkARg9ZB8WZdtd5orW8sEG1UzB2reOtva5iLORaytJAneCYSbCqkSdN9hIo7yMbqfDpvMPCyKIxgYwTIT2GVlOXz7zz9xKifoNQ18XSAsfrFyh30lI3qHtKxAgsonORkpKnAXaRqN4p9OEwESNPOGOj4S%2F7YQ8Nk3BfDSoug%2FWPzASUHLznJCq1prWQsdwfM%2FnwabwoU5R8WsjIBEJmi8LVh6I9nfp&X-Amz-Signature=112e93d68b59a453a28d3ad6b32c245fbdf03b5532caa7f3733b96725d8cec57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
