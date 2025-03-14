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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXU34HEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDOrX4lgQsASvBZzp69MEuLVSavNOjngS7grALAjETlAiBwz7cRsYpKVCDM%2FQk1sfAfy9xSWun5JHYQo7byxXb6xSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw94SpEnOQA4%2FnT%2FEKtwDeGY2cZ7ZcjlURU%2FB%2BmLFMDzHAp4KmTh9GPKfRRJsHmhQvubF6GqKfWowJvdLqm16HDj2B0MWu%2F2eO415TeHpY6gMfOH7g69Ux0geyyxBllLjqViX0RpFxhIH3yrYoVA3ivjVRoeFRGxzm0gO16Ka2jtjXwi2iLgyhChYI7%2FVnI0NSOc9y5g%2F7moZiBCJAVJY08aoh7FpRCFdDDA%2FuYDFZzvWPFDwcmrqF%2FO3mlq84Wm1gpqULbhnCXPF1vFzjQsjvh5jnYysEX5%2BjqHnwsrNLYvLDxMO5WEXEIMSEuhmi%2F9Dy8MoeYr2xyrZUgabvaOPNmHy%2FFZuS%2B4gi3Q44OJkwfaN6M8rxqHk4hOWyMK4wHe%2BkAekZ%2ByvYJ9N6Z%2FCwGzSqlUMXbVZAwWB%2BcJtYr78yrbwHa83xVibJLWqO4Jk2VlF0DJtnk6sLM04bsXbDcByeXGPKRybuofYrwZLE0QCjNFBvwRywbGNjj5g3IMdqGXG3TRjmz694sK%2BOzcwEB%2F7EmRpZPMXwU%2BatMLF6o22pIEDts5lS5KcWHv6zLHiRDsuicpwucsQrFQlSoHc3qN7ncktR6Zj6mayz9XmOpdyP6I75Yjq3aHWsv5E6Gl%2B7nrGYZDGi4770I3Q46wwmMDRvgY6pgFNUi5S81wBge6a34lyjNY0%2BpBUPJGmki6L6DbhOTsxwQ3aKXqhqiIJDPLq7McMj3exUXN1DK9tH8%2BdAk9ykYqArVSPnucf0BegMK48NRMoB2S47mby8mlgTCEgPnz%2Fz9Vn3vm4mes8zFEuuL3HhpvOpIrfK54vLLM0jYjoIXVWZo1X2qcUCXavCRaAO93L4Rj9zLvifC1JvXeIlq%2B2qgTqPiJdMEZU&X-Amz-Signature=5efc7b46bd07304d8aeaba27f247b718402048a3cb0a2c096a1e838336885e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXU34HEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDOrX4lgQsASvBZzp69MEuLVSavNOjngS7grALAjETlAiBwz7cRsYpKVCDM%2FQk1sfAfy9xSWun5JHYQo7byxXb6xSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw94SpEnOQA4%2FnT%2FEKtwDeGY2cZ7ZcjlURU%2FB%2BmLFMDzHAp4KmTh9GPKfRRJsHmhQvubF6GqKfWowJvdLqm16HDj2B0MWu%2F2eO415TeHpY6gMfOH7g69Ux0geyyxBllLjqViX0RpFxhIH3yrYoVA3ivjVRoeFRGxzm0gO16Ka2jtjXwi2iLgyhChYI7%2FVnI0NSOc9y5g%2F7moZiBCJAVJY08aoh7FpRCFdDDA%2FuYDFZzvWPFDwcmrqF%2FO3mlq84Wm1gpqULbhnCXPF1vFzjQsjvh5jnYysEX5%2BjqHnwsrNLYvLDxMO5WEXEIMSEuhmi%2F9Dy8MoeYr2xyrZUgabvaOPNmHy%2FFZuS%2B4gi3Q44OJkwfaN6M8rxqHk4hOWyMK4wHe%2BkAekZ%2ByvYJ9N6Z%2FCwGzSqlUMXbVZAwWB%2BcJtYr78yrbwHa83xVibJLWqO4Jk2VlF0DJtnk6sLM04bsXbDcByeXGPKRybuofYrwZLE0QCjNFBvwRywbGNjj5g3IMdqGXG3TRjmz694sK%2BOzcwEB%2F7EmRpZPMXwU%2BatMLF6o22pIEDts5lS5KcWHv6zLHiRDsuicpwucsQrFQlSoHc3qN7ncktR6Zj6mayz9XmOpdyP6I75Yjq3aHWsv5E6Gl%2B7nrGYZDGi4770I3Q46wwmMDRvgY6pgFNUi5S81wBge6a34lyjNY0%2BpBUPJGmki6L6DbhOTsxwQ3aKXqhqiIJDPLq7McMj3exUXN1DK9tH8%2BdAk9ykYqArVSPnucf0BegMK48NRMoB2S47mby8mlgTCEgPnz%2Fz9Vn3vm4mes8zFEuuL3HhpvOpIrfK54vLLM0jYjoIXVWZo1X2qcUCXavCRaAO93L4Rj9zLvifC1JvXeIlq%2B2qgTqPiJdMEZU&X-Amz-Signature=8223bdd112eb923ab652f7a52e4176d9a08841ebf62627782d1a2ebe126b23eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXU34HEW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDOrX4lgQsASvBZzp69MEuLVSavNOjngS7grALAjETlAiBwz7cRsYpKVCDM%2FQk1sfAfy9xSWun5JHYQo7byxXb6xSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw94SpEnOQA4%2FnT%2FEKtwDeGY2cZ7ZcjlURU%2FB%2BmLFMDzHAp4KmTh9GPKfRRJsHmhQvubF6GqKfWowJvdLqm16HDj2B0MWu%2F2eO415TeHpY6gMfOH7g69Ux0geyyxBllLjqViX0RpFxhIH3yrYoVA3ivjVRoeFRGxzm0gO16Ka2jtjXwi2iLgyhChYI7%2FVnI0NSOc9y5g%2F7moZiBCJAVJY08aoh7FpRCFdDDA%2FuYDFZzvWPFDwcmrqF%2FO3mlq84Wm1gpqULbhnCXPF1vFzjQsjvh5jnYysEX5%2BjqHnwsrNLYvLDxMO5WEXEIMSEuhmi%2F9Dy8MoeYr2xyrZUgabvaOPNmHy%2FFZuS%2B4gi3Q44OJkwfaN6M8rxqHk4hOWyMK4wHe%2BkAekZ%2ByvYJ9N6Z%2FCwGzSqlUMXbVZAwWB%2BcJtYr78yrbwHa83xVibJLWqO4Jk2VlF0DJtnk6sLM04bsXbDcByeXGPKRybuofYrwZLE0QCjNFBvwRywbGNjj5g3IMdqGXG3TRjmz694sK%2BOzcwEB%2F7EmRpZPMXwU%2BatMLF6o22pIEDts5lS5KcWHv6zLHiRDsuicpwucsQrFQlSoHc3qN7ncktR6Zj6mayz9XmOpdyP6I75Yjq3aHWsv5E6Gl%2B7nrGYZDGi4770I3Q46wwmMDRvgY6pgFNUi5S81wBge6a34lyjNY0%2BpBUPJGmki6L6DbhOTsxwQ3aKXqhqiIJDPLq7McMj3exUXN1DK9tH8%2BdAk9ykYqArVSPnucf0BegMK48NRMoB2S47mby8mlgTCEgPnz%2Fz9Vn3vm4mes8zFEuuL3HhpvOpIrfK54vLLM0jYjoIXVWZo1X2qcUCXavCRaAO93L4Rj9zLvifC1JvXeIlq%2B2qgTqPiJdMEZU&X-Amz-Signature=2f1ee7d8056c91dce7e5db2ea96b69ab9b876b50085cef9695011f030dd479bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
