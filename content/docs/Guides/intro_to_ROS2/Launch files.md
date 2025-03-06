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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUDXV5T%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZgPEno1%2FRF2m9uKaWqCqX2uX3F8Km8tO7fEzt3loiQIhAPHhAIQjF2UBY8WxnofexhmiiczKu3gUS6hQt4DZxB1mKv8DCC8QABoMNjM3NDIzMTgzODA1Igww4wSeEU15H6ng0Ggq3AOJmw9FGlcCqm%2B1AzRCp9IcHUretpP0TayIdjT3GUjxdyLd%2BUQuK0asAxCVN7NyNZ57bsRU5N9E8VzCkph8wHj7MvXz5rhYG596TWSFun%2FPA2VPtpKIXXRClOEgCC%2BzUSwtd9y%2BgO1A2JtH1vph8TSknRGiPEsfVWErGoMRXEv%2BaTXY3RgAGJTdjLONdo4O4V6rKI6gJ6jrgXo305EDI2bBRg8RarY2gfZLwSl10b8XME2xBJkr35JiIKqcRQVZoXe7tR3XCUqcUisnguNt8CuxvCuvgueekxaX3bVCMUBJWu%2BRrIUBGBFD0UNUei6WM8HrRpCbtt5L165tqEAZIVzQ3k%2FkGnGIzau3CWM3yxV2sdmBRRcbCL3lZneRQ87kkfHeGTKrkTn544nUP0lx6NuMRiRkMzUKXi5CdMVZmvU78wBKCStL7ypTRvnqdZGeP%2FF2LHUFefHAiOdmnGZ9JfAuP1%2BiTyg5jDXgomUoi3IT%2Bu2Vc8ieyIc7zXMk8WXpK8qjwqpzVQ6bSQNT0WNIpK1aNqY%2FOw8YNDTasG6Z6SIeRGcsw0o3Ig1BTrGcuEoYhBFbp9Z6KQjIp7jZzkUIZg8l1zPSuDJbZQK5A9%2BlrYX%2BDN%2FOdhc6JPCjYAXhaDDpz6a%2BBjqkAZIx5BdMe3ON7xBtDUqEcQytye4ObJw0qGF33u6zWqkbqPTEUxhKKPT5M3BtNYsj9Vo5AaR7XisJNvszbp518YPHBkErXW7Gxt3NPGH%2Fo%2BMsGCV0ecaAL8DduMBtPD%2FL4xJeR47b9AWXvWqaJZmlgLMj2kmM0DVs8K%2B6MxADzZKXiNCpodE%2Fc7buthAs6lCtlRwhPHaTLP24h8DYPM6sJ1RcOoRf&X-Amz-Signature=924ecc41bb436ac2668b99249e72b2d80c2a8278a813df3b7b87c343b4841158&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUDXV5T%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZgPEno1%2FRF2m9uKaWqCqX2uX3F8Km8tO7fEzt3loiQIhAPHhAIQjF2UBY8WxnofexhmiiczKu3gUS6hQt4DZxB1mKv8DCC8QABoMNjM3NDIzMTgzODA1Igww4wSeEU15H6ng0Ggq3AOJmw9FGlcCqm%2B1AzRCp9IcHUretpP0TayIdjT3GUjxdyLd%2BUQuK0asAxCVN7NyNZ57bsRU5N9E8VzCkph8wHj7MvXz5rhYG596TWSFun%2FPA2VPtpKIXXRClOEgCC%2BzUSwtd9y%2BgO1A2JtH1vph8TSknRGiPEsfVWErGoMRXEv%2BaTXY3RgAGJTdjLONdo4O4V6rKI6gJ6jrgXo305EDI2bBRg8RarY2gfZLwSl10b8XME2xBJkr35JiIKqcRQVZoXe7tR3XCUqcUisnguNt8CuxvCuvgueekxaX3bVCMUBJWu%2BRrIUBGBFD0UNUei6WM8HrRpCbtt5L165tqEAZIVzQ3k%2FkGnGIzau3CWM3yxV2sdmBRRcbCL3lZneRQ87kkfHeGTKrkTn544nUP0lx6NuMRiRkMzUKXi5CdMVZmvU78wBKCStL7ypTRvnqdZGeP%2FF2LHUFefHAiOdmnGZ9JfAuP1%2BiTyg5jDXgomUoi3IT%2Bu2Vc8ieyIc7zXMk8WXpK8qjwqpzVQ6bSQNT0WNIpK1aNqY%2FOw8YNDTasG6Z6SIeRGcsw0o3Ig1BTrGcuEoYhBFbp9Z6KQjIp7jZzkUIZg8l1zPSuDJbZQK5A9%2BlrYX%2BDN%2FOdhc6JPCjYAXhaDDpz6a%2BBjqkAZIx5BdMe3ON7xBtDUqEcQytye4ObJw0qGF33u6zWqkbqPTEUxhKKPT5M3BtNYsj9Vo5AaR7XisJNvszbp518YPHBkErXW7Gxt3NPGH%2Fo%2BMsGCV0ecaAL8DduMBtPD%2FL4xJeR47b9AWXvWqaJZmlgLMj2kmM0DVs8K%2B6MxADzZKXiNCpodE%2Fc7buthAs6lCtlRwhPHaTLP24h8DYPM6sJ1RcOoRf&X-Amz-Signature=27c950e9083b3464c1883414f798a85386375888b20e5b55195b6eb691169c38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUDXV5T%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZgPEno1%2FRF2m9uKaWqCqX2uX3F8Km8tO7fEzt3loiQIhAPHhAIQjF2UBY8WxnofexhmiiczKu3gUS6hQt4DZxB1mKv8DCC8QABoMNjM3NDIzMTgzODA1Igww4wSeEU15H6ng0Ggq3AOJmw9FGlcCqm%2B1AzRCp9IcHUretpP0TayIdjT3GUjxdyLd%2BUQuK0asAxCVN7NyNZ57bsRU5N9E8VzCkph8wHj7MvXz5rhYG596TWSFun%2FPA2VPtpKIXXRClOEgCC%2BzUSwtd9y%2BgO1A2JtH1vph8TSknRGiPEsfVWErGoMRXEv%2BaTXY3RgAGJTdjLONdo4O4V6rKI6gJ6jrgXo305EDI2bBRg8RarY2gfZLwSl10b8XME2xBJkr35JiIKqcRQVZoXe7tR3XCUqcUisnguNt8CuxvCuvgueekxaX3bVCMUBJWu%2BRrIUBGBFD0UNUei6WM8HrRpCbtt5L165tqEAZIVzQ3k%2FkGnGIzau3CWM3yxV2sdmBRRcbCL3lZneRQ87kkfHeGTKrkTn544nUP0lx6NuMRiRkMzUKXi5CdMVZmvU78wBKCStL7ypTRvnqdZGeP%2FF2LHUFefHAiOdmnGZ9JfAuP1%2BiTyg5jDXgomUoi3IT%2Bu2Vc8ieyIc7zXMk8WXpK8qjwqpzVQ6bSQNT0WNIpK1aNqY%2FOw8YNDTasG6Z6SIeRGcsw0o3Ig1BTrGcuEoYhBFbp9Z6KQjIp7jZzkUIZg8l1zPSuDJbZQK5A9%2BlrYX%2BDN%2FOdhc6JPCjYAXhaDDpz6a%2BBjqkAZIx5BdMe3ON7xBtDUqEcQytye4ObJw0qGF33u6zWqkbqPTEUxhKKPT5M3BtNYsj9Vo5AaR7XisJNvszbp518YPHBkErXW7Gxt3NPGH%2Fo%2BMsGCV0ecaAL8DduMBtPD%2FL4xJeR47b9AWXvWqaJZmlgLMj2kmM0DVs8K%2B6MxADzZKXiNCpodE%2Fc7buthAs6lCtlRwhPHaTLP24h8DYPM6sJ1RcOoRf&X-Amz-Signature=13a4df9bde317de12c3d3877ff22dc75136c099a2f5a35c3d8d5365a4316a49d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
