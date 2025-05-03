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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DNNQ3J%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCDxsl%2FKE1Aw1RONsrE0nkLVqoJfE1XnhRZ9YPQBVavMQIgdIIVraApMLfzP6gWpXPgDjspKOqMi%2FAZyfsVzyI8GZAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyVd7B7sfJGg1Um9ircA4Tf1oVb1Ka%2Bw4rxlYxJG3HxBYBHTB%2FA9L6LTucOcJCkdmIm5WNgDJEcUjJHG7cLyvXmxfMXG2SVCAxrPSv108CwrtOcswpnNZmhcWEM6FdXg9Us43Mkte1%2F8hSt%2BaIOqrntw4DMLY92LIYqEKUn1wkaQQLn76jRXkQQymU37SY2mkCPiyQPTJWd2%2BJ8Zyt4b8r7em%2BYJay4VXpNNMX4KQEfKSQjvX7ls57H5ZE2aEQWoFrRM4Bot%2FG25JtZyR5lpnuA8rPGCOJzaGUBGX0IPrgfBVSX3dUNSjvhvr%2FYTAZXKpsmFhlHgsYWUPGCcvZwhjzZr8YoQvFF0h1YrXL0wOuaS2wwl1S4X4rUM30MeSkoi%2FGM5ofswuVbXDDn42LW6elzzmgnU98zDwfeCYxRhJxSJpCQ9SJtAg%2FRsHguGSS6zK1HbGPreS3er84hYYdh55NCLjPrxD8JyImGTV1GTCAinEPFLy7G%2FP5qH3nK4jH0lFhj9N1nOtdQQR%2B2%2F26ehsvukZhf7pLrm479CD%2Fir%2FlKoMgx65yNtuaZ8ArMFTlJO4K3%2FOl2Jmy9EGvkcSyWZPOju3V024SIzOprO3EBvNHcWRS2mODjGLiCtkEpFsFPfi%2Besal7M8gXk6yvMLzz18AGOqUBlB6TSjeaSzYdwHCAW13%2FA0ELXcLO72ws4JZdQMsxWAehCexFFKHT6rilRdFKcjPDFvpzpvMImGhQuZFwD7u1lFgud%2B%2B60sDpmT8z94hBZIA8ZR3S5BxMEc8QgmIswQOmJmKtEscbOU4Vlz08hY0wv2MbT%2Bn5NA%2FCRaD%2F%2FCcyhbiTPVXRO7ffk0cR%2BFsXO9nfToyr52D5ie%2BhOkJqxH02q%2FXTWjWl&X-Amz-Signature=7c56150e0a5cebfad6273b913caeb9772da2743fd3e08853fd28b6561873601b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DNNQ3J%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCDxsl%2FKE1Aw1RONsrE0nkLVqoJfE1XnhRZ9YPQBVavMQIgdIIVraApMLfzP6gWpXPgDjspKOqMi%2FAZyfsVzyI8GZAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyVd7B7sfJGg1Um9ircA4Tf1oVb1Ka%2Bw4rxlYxJG3HxBYBHTB%2FA9L6LTucOcJCkdmIm5WNgDJEcUjJHG7cLyvXmxfMXG2SVCAxrPSv108CwrtOcswpnNZmhcWEM6FdXg9Us43Mkte1%2F8hSt%2BaIOqrntw4DMLY92LIYqEKUn1wkaQQLn76jRXkQQymU37SY2mkCPiyQPTJWd2%2BJ8Zyt4b8r7em%2BYJay4VXpNNMX4KQEfKSQjvX7ls57H5ZE2aEQWoFrRM4Bot%2FG25JtZyR5lpnuA8rPGCOJzaGUBGX0IPrgfBVSX3dUNSjvhvr%2FYTAZXKpsmFhlHgsYWUPGCcvZwhjzZr8YoQvFF0h1YrXL0wOuaS2wwl1S4X4rUM30MeSkoi%2FGM5ofswuVbXDDn42LW6elzzmgnU98zDwfeCYxRhJxSJpCQ9SJtAg%2FRsHguGSS6zK1HbGPreS3er84hYYdh55NCLjPrxD8JyImGTV1GTCAinEPFLy7G%2FP5qH3nK4jH0lFhj9N1nOtdQQR%2B2%2F26ehsvukZhf7pLrm479CD%2Fir%2FlKoMgx65yNtuaZ8ArMFTlJO4K3%2FOl2Jmy9EGvkcSyWZPOju3V024SIzOprO3EBvNHcWRS2mODjGLiCtkEpFsFPfi%2Besal7M8gXk6yvMLzz18AGOqUBlB6TSjeaSzYdwHCAW13%2FA0ELXcLO72ws4JZdQMsxWAehCexFFKHT6rilRdFKcjPDFvpzpvMImGhQuZFwD7u1lFgud%2B%2B60sDpmT8z94hBZIA8ZR3S5BxMEc8QgmIswQOmJmKtEscbOU4Vlz08hY0wv2MbT%2Bn5NA%2FCRaD%2F%2FCcyhbiTPVXRO7ffk0cR%2BFsXO9nfToyr52D5ie%2BhOkJqxH02q%2FXTWjWl&X-Amz-Signature=a23fad343fdc80b5e699f72e3b8fa72f8d682c667984542860149dbc158db7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DNNQ3J%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCDxsl%2FKE1Aw1RONsrE0nkLVqoJfE1XnhRZ9YPQBVavMQIgdIIVraApMLfzP6gWpXPgDjspKOqMi%2FAZyfsVzyI8GZAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyVd7B7sfJGg1Um9ircA4Tf1oVb1Ka%2Bw4rxlYxJG3HxBYBHTB%2FA9L6LTucOcJCkdmIm5WNgDJEcUjJHG7cLyvXmxfMXG2SVCAxrPSv108CwrtOcswpnNZmhcWEM6FdXg9Us43Mkte1%2F8hSt%2BaIOqrntw4DMLY92LIYqEKUn1wkaQQLn76jRXkQQymU37SY2mkCPiyQPTJWd2%2BJ8Zyt4b8r7em%2BYJay4VXpNNMX4KQEfKSQjvX7ls57H5ZE2aEQWoFrRM4Bot%2FG25JtZyR5lpnuA8rPGCOJzaGUBGX0IPrgfBVSX3dUNSjvhvr%2FYTAZXKpsmFhlHgsYWUPGCcvZwhjzZr8YoQvFF0h1YrXL0wOuaS2wwl1S4X4rUM30MeSkoi%2FGM5ofswuVbXDDn42LW6elzzmgnU98zDwfeCYxRhJxSJpCQ9SJtAg%2FRsHguGSS6zK1HbGPreS3er84hYYdh55NCLjPrxD8JyImGTV1GTCAinEPFLy7G%2FP5qH3nK4jH0lFhj9N1nOtdQQR%2B2%2F26ehsvukZhf7pLrm479CD%2Fir%2FlKoMgx65yNtuaZ8ArMFTlJO4K3%2FOl2Jmy9EGvkcSyWZPOju3V024SIzOprO3EBvNHcWRS2mODjGLiCtkEpFsFPfi%2Besal7M8gXk6yvMLzz18AGOqUBlB6TSjeaSzYdwHCAW13%2FA0ELXcLO72ws4JZdQMsxWAehCexFFKHT6rilRdFKcjPDFvpzpvMImGhQuZFwD7u1lFgud%2B%2B60sDpmT8z94hBZIA8ZR3S5BxMEc8QgmIswQOmJmKtEscbOU4Vlz08hY0wv2MbT%2Bn5NA%2FCRaD%2F%2FCcyhbiTPVXRO7ffk0cR%2BFsXO9nfToyr52D5ie%2BhOkJqxH02q%2FXTWjWl&X-Amz-Signature=56c38485655194b2eaae068e5adc2a1396ac964ed97a44c932254e84e8cb2768&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
