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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHOSBIQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDKxTrFqh6dG%2Fs8jjKrHug%2B7Rc1NFmek4rZ7RP070rBpQIhAJmaSbNCJWmVVxbOXn0gGJ%2BNwS1Hab1YwcXe72XG4t9QKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5Bs8ibOgFK36hA4q3AN7obm4qUsh42mGs4qzInmGKM%2FkFTc%2F3MFCSSCVuQgMiKqpIVz6P63yILBuVEt0RTtkqBW%2Bg4mlmPZ%2FEJVj6kru2WGA6U5vCkw44Io9GHDSvJ%2B7zJJmsCZEj7Fp7n2Stfi2IHGBdkWQrlbtUogu7KHzuV29egYKYt7lZoBOO%2BXfy%2BjRYIPzWLjeso3JPph5%2FUvSeqVuxRD3sqE1z4z1rlhMAt8%2Ff2UYV1TJGa0f2eNvRYjh1AXHqu4EsIa8Kun1LueqVtLM53Ri7qzXUECzWohIDZOxnjnZPURJU0dFh8rLkPoG8GCfuTFQ%2FyfzUujtZTR7yrS49lrRndWTRLOwK5bPklT2%2BUzTfIo5aViIPNJi0iF29XwyBZ7%2BjVph23icj%2FEQc%2BqBfrLBv5TPKHu59kAULbBm0rz%2FJ%2BLicxeytiPwtgqNwSUAHbMQBgEQ9HAq14uLuTqxTKRYVGvOMJkoQSuLly5THI3Zn8ZXoLrj8KQ7DBg7OXY9kmFKzVlPMVi8QOLJPIX2ymYibAV09qC4DWWNDO5xBfP7UE6GlimXwPOtQEJPaGtkww%2F1%2FWIbkU1Zhh8gFbesmuu1Ln5%2FhWYShC%2B57BWAcyePjkeX0Th1n7%2F4R9i8UCxvFdo4zvTS3jDe0v7ABjqkAduNsAklxM%2Bb77z%2F5kSdO%2F47sJjKPzKJMCwdfvMeM3uTESbhY1oRNH9s9niihysW%2FrHidINLbDtHQ6M7AWeGgCurDGk8Ub%2BcAP%2Bf7NMkZG52MyxFth5qoHM68NCP%2F9aU0UfKxjpA2x1HFgFAkSzhagn7O5FhcuZDRNXVVgvou4oxYOJsL0ItsVmJDpPw84OH%2Bxapuwyv4uCYeB%2FRGcaRBQb1YGBW&X-Amz-Signature=63f196daafb11aee8fc65ad993536b91c278bd97c358fe1207e5b80c9a3b9fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHOSBIQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDKxTrFqh6dG%2Fs8jjKrHug%2B7Rc1NFmek4rZ7RP070rBpQIhAJmaSbNCJWmVVxbOXn0gGJ%2BNwS1Hab1YwcXe72XG4t9QKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5Bs8ibOgFK36hA4q3AN7obm4qUsh42mGs4qzInmGKM%2FkFTc%2F3MFCSSCVuQgMiKqpIVz6P63yILBuVEt0RTtkqBW%2Bg4mlmPZ%2FEJVj6kru2WGA6U5vCkw44Io9GHDSvJ%2B7zJJmsCZEj7Fp7n2Stfi2IHGBdkWQrlbtUogu7KHzuV29egYKYt7lZoBOO%2BXfy%2BjRYIPzWLjeso3JPph5%2FUvSeqVuxRD3sqE1z4z1rlhMAt8%2Ff2UYV1TJGa0f2eNvRYjh1AXHqu4EsIa8Kun1LueqVtLM53Ri7qzXUECzWohIDZOxnjnZPURJU0dFh8rLkPoG8GCfuTFQ%2FyfzUujtZTR7yrS49lrRndWTRLOwK5bPklT2%2BUzTfIo5aViIPNJi0iF29XwyBZ7%2BjVph23icj%2FEQc%2BqBfrLBv5TPKHu59kAULbBm0rz%2FJ%2BLicxeytiPwtgqNwSUAHbMQBgEQ9HAq14uLuTqxTKRYVGvOMJkoQSuLly5THI3Zn8ZXoLrj8KQ7DBg7OXY9kmFKzVlPMVi8QOLJPIX2ymYibAV09qC4DWWNDO5xBfP7UE6GlimXwPOtQEJPaGtkww%2F1%2FWIbkU1Zhh8gFbesmuu1Ln5%2FhWYShC%2B57BWAcyePjkeX0Th1n7%2F4R9i8UCxvFdo4zvTS3jDe0v7ABjqkAduNsAklxM%2Bb77z%2F5kSdO%2F47sJjKPzKJMCwdfvMeM3uTESbhY1oRNH9s9niihysW%2FrHidINLbDtHQ6M7AWeGgCurDGk8Ub%2BcAP%2Bf7NMkZG52MyxFth5qoHM68NCP%2F9aU0UfKxjpA2x1HFgFAkSzhagn7O5FhcuZDRNXVVgvou4oxYOJsL0ItsVmJDpPw84OH%2Bxapuwyv4uCYeB%2FRGcaRBQb1YGBW&X-Amz-Signature=01289cfd16f97f415a7fc94ccdc1c88867a868150a15c69bce5ba31a79e7c95e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHOSBIQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDKxTrFqh6dG%2Fs8jjKrHug%2B7Rc1NFmek4rZ7RP070rBpQIhAJmaSbNCJWmVVxbOXn0gGJ%2BNwS1Hab1YwcXe72XG4t9QKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5Bs8ibOgFK36hA4q3AN7obm4qUsh42mGs4qzInmGKM%2FkFTc%2F3MFCSSCVuQgMiKqpIVz6P63yILBuVEt0RTtkqBW%2Bg4mlmPZ%2FEJVj6kru2WGA6U5vCkw44Io9GHDSvJ%2B7zJJmsCZEj7Fp7n2Stfi2IHGBdkWQrlbtUogu7KHzuV29egYKYt7lZoBOO%2BXfy%2BjRYIPzWLjeso3JPph5%2FUvSeqVuxRD3sqE1z4z1rlhMAt8%2Ff2UYV1TJGa0f2eNvRYjh1AXHqu4EsIa8Kun1LueqVtLM53Ri7qzXUECzWohIDZOxnjnZPURJU0dFh8rLkPoG8GCfuTFQ%2FyfzUujtZTR7yrS49lrRndWTRLOwK5bPklT2%2BUzTfIo5aViIPNJi0iF29XwyBZ7%2BjVph23icj%2FEQc%2BqBfrLBv5TPKHu59kAULbBm0rz%2FJ%2BLicxeytiPwtgqNwSUAHbMQBgEQ9HAq14uLuTqxTKRYVGvOMJkoQSuLly5THI3Zn8ZXoLrj8KQ7DBg7OXY9kmFKzVlPMVi8QOLJPIX2ymYibAV09qC4DWWNDO5xBfP7UE6GlimXwPOtQEJPaGtkww%2F1%2FWIbkU1Zhh8gFbesmuu1Ln5%2FhWYShC%2B57BWAcyePjkeX0Th1n7%2F4R9i8UCxvFdo4zvTS3jDe0v7ABjqkAduNsAklxM%2Bb77z%2F5kSdO%2F47sJjKPzKJMCwdfvMeM3uTESbhY1oRNH9s9niihysW%2FrHidINLbDtHQ6M7AWeGgCurDGk8Ub%2BcAP%2Bf7NMkZG52MyxFth5qoHM68NCP%2F9aU0UfKxjpA2x1HFgFAkSzhagn7O5FhcuZDRNXVVgvou4oxYOJsL0ItsVmJDpPw84OH%2Bxapuwyv4uCYeB%2FRGcaRBQb1YGBW&X-Amz-Signature=5378a4a94cfce01734aae0e80747655b330c8be86da9f8218fd251d5569329ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
