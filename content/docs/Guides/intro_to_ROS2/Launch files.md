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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSSCIWT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDjD%2FxxXUx5AL8f7okeMih9op%2Fi2hG3lB8IzDsrD66UpAiBxzGdD4TZcp8eUUXIoUV0pbfgdIjKLgiOFhlS%2Ffplh1yqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJA7rK68iEBOVyb0gKtwDtdjFr6tHw3ks1USA07qKHuH559uR6WF1lMB9ci5Ww7xaxONqHAE6Axwbf3ey33O4dlz6VKl%2BsVZBKCea7xNyOWmLV8ocsu%2Bw2sR5UvBeeX8vtbSwLho8h7iar5XDjSUGd3hmEajb7%2BMYg1dEjBgWyJ4NdF%2F3PMZA5IL3QWhbJ78RUrNYlo5mpbDPjxYDQ3T2DOk7eE9xsxe6MNxZiSIua1y6dI9%2F%2FLJ4cQF1pmtTTlDnwJJOJJWwFGiTKyBbZ4O9glaiF4c08xRw1LeW78iRcrgki%2B4ZH6WDq91sJVSKHR6xbKOkzUfoPnoXxHednow5KILBQciQxOJh4s%2FPjZaxDWNJbYHOlRlP%2FjdL%2FUBiRNrey23pRfgzy57F4tkACABl0WNodRMiO5i9JhhW39HD04gE5PbOlQ8Q2hxXLA7dBrOErVYWaA5FJtStB0fd8jZQwnBB9UKmcXLhBCppcEi56ckmPstNShenvE4qARMSzCUdixQQAAKgm0dVXDVJJr2u8pJRZFT5jWABQRsGUI3eCmrYSaZskfUpEpefrWiePl%2BC6TIp8Mf85me2g1BmqtZ%2F3EyKTk7dJNZTbQmJp58eBl33uKkYIAejQ4iemLWhWkg3xmbmMqkF5A7ZhGUwxqKcwAY6pgFDQfbtSgZ5r3O4Eh1wJfBLXe%2Fe%2FK65f9D0BZfMbCn98wQekUmhyCE3OiMitGlexu8%2BCpu2i%2B0LT2MD1EVIlOEYwP6z1RlM3tpmtjGoJyVuP1u9Mn3YEmlAj0GcXrK8tNF%2F7rFz%2FpIwmrPlA0lpPPqRRe9yQLLb7Zw42eBRjZsZAoWxGwTIoZcYHbhKs5C3DbmtgXLYoWwOHic1oS5reYkvx%2FtORi4Y&X-Amz-Signature=b8aaad3bef7a19c96a400c5a85819ab84bcecbb762b7ce79a34e0bf77750c7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSSCIWT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDjD%2FxxXUx5AL8f7okeMih9op%2Fi2hG3lB8IzDsrD66UpAiBxzGdD4TZcp8eUUXIoUV0pbfgdIjKLgiOFhlS%2Ffplh1yqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJA7rK68iEBOVyb0gKtwDtdjFr6tHw3ks1USA07qKHuH559uR6WF1lMB9ci5Ww7xaxONqHAE6Axwbf3ey33O4dlz6VKl%2BsVZBKCea7xNyOWmLV8ocsu%2Bw2sR5UvBeeX8vtbSwLho8h7iar5XDjSUGd3hmEajb7%2BMYg1dEjBgWyJ4NdF%2F3PMZA5IL3QWhbJ78RUrNYlo5mpbDPjxYDQ3T2DOk7eE9xsxe6MNxZiSIua1y6dI9%2F%2FLJ4cQF1pmtTTlDnwJJOJJWwFGiTKyBbZ4O9glaiF4c08xRw1LeW78iRcrgki%2B4ZH6WDq91sJVSKHR6xbKOkzUfoPnoXxHednow5KILBQciQxOJh4s%2FPjZaxDWNJbYHOlRlP%2FjdL%2FUBiRNrey23pRfgzy57F4tkACABl0WNodRMiO5i9JhhW39HD04gE5PbOlQ8Q2hxXLA7dBrOErVYWaA5FJtStB0fd8jZQwnBB9UKmcXLhBCppcEi56ckmPstNShenvE4qARMSzCUdixQQAAKgm0dVXDVJJr2u8pJRZFT5jWABQRsGUI3eCmrYSaZskfUpEpefrWiePl%2BC6TIp8Mf85me2g1BmqtZ%2F3EyKTk7dJNZTbQmJp58eBl33uKkYIAejQ4iemLWhWkg3xmbmMqkF5A7ZhGUwxqKcwAY6pgFDQfbtSgZ5r3O4Eh1wJfBLXe%2Fe%2FK65f9D0BZfMbCn98wQekUmhyCE3OiMitGlexu8%2BCpu2i%2B0LT2MD1EVIlOEYwP6z1RlM3tpmtjGoJyVuP1u9Mn3YEmlAj0GcXrK8tNF%2F7rFz%2FpIwmrPlA0lpPPqRRe9yQLLb7Zw42eBRjZsZAoWxGwTIoZcYHbhKs5C3DbmtgXLYoWwOHic1oS5reYkvx%2FtORi4Y&X-Amz-Signature=60f385fc9b8337cc49cbd51bee259ec1dd977fa2c0374ddd87d4de41b645b85f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDSSCIWT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDjD%2FxxXUx5AL8f7okeMih9op%2Fi2hG3lB8IzDsrD66UpAiBxzGdD4TZcp8eUUXIoUV0pbfgdIjKLgiOFhlS%2Ffplh1yqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJA7rK68iEBOVyb0gKtwDtdjFr6tHw3ks1USA07qKHuH559uR6WF1lMB9ci5Ww7xaxONqHAE6Axwbf3ey33O4dlz6VKl%2BsVZBKCea7xNyOWmLV8ocsu%2Bw2sR5UvBeeX8vtbSwLho8h7iar5XDjSUGd3hmEajb7%2BMYg1dEjBgWyJ4NdF%2F3PMZA5IL3QWhbJ78RUrNYlo5mpbDPjxYDQ3T2DOk7eE9xsxe6MNxZiSIua1y6dI9%2F%2FLJ4cQF1pmtTTlDnwJJOJJWwFGiTKyBbZ4O9glaiF4c08xRw1LeW78iRcrgki%2B4ZH6WDq91sJVSKHR6xbKOkzUfoPnoXxHednow5KILBQciQxOJh4s%2FPjZaxDWNJbYHOlRlP%2FjdL%2FUBiRNrey23pRfgzy57F4tkACABl0WNodRMiO5i9JhhW39HD04gE5PbOlQ8Q2hxXLA7dBrOErVYWaA5FJtStB0fd8jZQwnBB9UKmcXLhBCppcEi56ckmPstNShenvE4qARMSzCUdixQQAAKgm0dVXDVJJr2u8pJRZFT5jWABQRsGUI3eCmrYSaZskfUpEpefrWiePl%2BC6TIp8Mf85me2g1BmqtZ%2F3EyKTk7dJNZTbQmJp58eBl33uKkYIAejQ4iemLWhWkg3xmbmMqkF5A7ZhGUwxqKcwAY6pgFDQfbtSgZ5r3O4Eh1wJfBLXe%2Fe%2FK65f9D0BZfMbCn98wQekUmhyCE3OiMitGlexu8%2BCpu2i%2B0LT2MD1EVIlOEYwP6z1RlM3tpmtjGoJyVuP1u9Mn3YEmlAj0GcXrK8tNF%2F7rFz%2FpIwmrPlA0lpPPqRRe9yQLLb7Zw42eBRjZsZAoWxGwTIoZcYHbhKs5C3DbmtgXLYoWwOHic1oS5reYkvx%2FtORi4Y&X-Amz-Signature=de2f0d57f9ff6c4db390b242ba18d184462ebdb64b7e1c12fd950874aa76100b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
