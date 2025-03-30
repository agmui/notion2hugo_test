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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFBR7KA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIB9lugFYOO3xHDpWh72OC1i1qkQNbn7MnCrr427yh4FoAiEAsXC7mJDYo%2BrodHUSJCqf%2B9FHwmDxatt59TEzAhfEI8gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxL47kuMccH%2FivinircAz2zpQXJG3jYSXcVs5MPjUR3jVNuWbUKFZXQK1%2F1ZHnkRYBnOgNDr4Sw%2F%2FcVSFnCFn1rtZGwr%2BlwKZq%2F4LXEUBG1kHRyZqk2TBEMIdJJ16RLFctbN%2FJA75y445kz9h%2Fg9Ra8nTkYVUJFbUNxb6jR17A0whLa5Dv6TiKLpCVfKvnw7KHBoyiyGHONICT7cV1K4gs7nN2qt9aMB4QG1yMj3%2FrF58jzu64QObf8KbanlhgkzS1t1xMBzdo1JmYzs7m5fjlMeRpICqKHCGhYliPHwTV4M9E2MNVaUUhj5xk3JyerEciH69xBmltOuGOa13FRDFtffsjCR4pDw3Y86hhz%2BkS78XbIniV%2BANGnefqFpPNIZ3U80nau0E9g%2Fs%2BpjN3teiNUxUs2SOG4OTu7I5HyjSrOXtBTH7Cr40rqMFiXnvB64yeaxFPar9RGy4M0X8kLpNjAtx%2B%2Fy675HxTUh23cObfpbsWadUYeug%2B%2Bq7xXHPDu7nL7n%2BngRPA7d2AKVAj73mUWvoUkjfxD%2FjA3f6pkIfHoyhr6PagFGLYk40lW8r2W0NyUoTFHzX8VPUkRFcAZmEB15E8RXsjZSTXpEsPtfW2MLR8U8%2ByO051LbrVIBCn6OuIW8%2FGRC79ozMoTMPinpb8GOqUBvyjBG8wx3bHkHHiFSrow8RXfqfU%2B%2FUrHwnnndt4nl2%2Bve3zNOdj3hiYBnAfgvb1drb%2B2AoGQzwFCex5c9o8FifTY%2B91aISKzxA4uWh7tFQAppUCy3J1vHbglEeaG%2FX9D1hIt7IXfse8iCxwakkzqLPKmvjpz%2BYn5Q40%2FaYQOiP1AaJkenS1tSpPB0t037bPspCHNgw%2FQcIXHj7DHxQ4npR%2FOI52m&X-Amz-Signature=84869ad0e1e05804006167106e005d267846429dc0e847d8d7f8830a204e8ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFBR7KA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIB9lugFYOO3xHDpWh72OC1i1qkQNbn7MnCrr427yh4FoAiEAsXC7mJDYo%2BrodHUSJCqf%2B9FHwmDxatt59TEzAhfEI8gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxL47kuMccH%2FivinircAz2zpQXJG3jYSXcVs5MPjUR3jVNuWbUKFZXQK1%2F1ZHnkRYBnOgNDr4Sw%2F%2FcVSFnCFn1rtZGwr%2BlwKZq%2F4LXEUBG1kHRyZqk2TBEMIdJJ16RLFctbN%2FJA75y445kz9h%2Fg9Ra8nTkYVUJFbUNxb6jR17A0whLa5Dv6TiKLpCVfKvnw7KHBoyiyGHONICT7cV1K4gs7nN2qt9aMB4QG1yMj3%2FrF58jzu64QObf8KbanlhgkzS1t1xMBzdo1JmYzs7m5fjlMeRpICqKHCGhYliPHwTV4M9E2MNVaUUhj5xk3JyerEciH69xBmltOuGOa13FRDFtffsjCR4pDw3Y86hhz%2BkS78XbIniV%2BANGnefqFpPNIZ3U80nau0E9g%2Fs%2BpjN3teiNUxUs2SOG4OTu7I5HyjSrOXtBTH7Cr40rqMFiXnvB64yeaxFPar9RGy4M0X8kLpNjAtx%2B%2Fy675HxTUh23cObfpbsWadUYeug%2B%2Bq7xXHPDu7nL7n%2BngRPA7d2AKVAj73mUWvoUkjfxD%2FjA3f6pkIfHoyhr6PagFGLYk40lW8r2W0NyUoTFHzX8VPUkRFcAZmEB15E8RXsjZSTXpEsPtfW2MLR8U8%2ByO051LbrVIBCn6OuIW8%2FGRC79ozMoTMPinpb8GOqUBvyjBG8wx3bHkHHiFSrow8RXfqfU%2B%2FUrHwnnndt4nl2%2Bve3zNOdj3hiYBnAfgvb1drb%2B2AoGQzwFCex5c9o8FifTY%2B91aISKzxA4uWh7tFQAppUCy3J1vHbglEeaG%2FX9D1hIt7IXfse8iCxwakkzqLPKmvjpz%2BYn5Q40%2FaYQOiP1AaJkenS1tSpPB0t037bPspCHNgw%2FQcIXHj7DHxQ4npR%2FOI52m&X-Amz-Signature=c37dfbabfcde088ec4abc323f6f8309efbdd4525d1dcdc72aa726f20bcb96602&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFBR7KA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIB9lugFYOO3xHDpWh72OC1i1qkQNbn7MnCrr427yh4FoAiEAsXC7mJDYo%2BrodHUSJCqf%2B9FHwmDxatt59TEzAhfEI8gqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxL47kuMccH%2FivinircAz2zpQXJG3jYSXcVs5MPjUR3jVNuWbUKFZXQK1%2F1ZHnkRYBnOgNDr4Sw%2F%2FcVSFnCFn1rtZGwr%2BlwKZq%2F4LXEUBG1kHRyZqk2TBEMIdJJ16RLFctbN%2FJA75y445kz9h%2Fg9Ra8nTkYVUJFbUNxb6jR17A0whLa5Dv6TiKLpCVfKvnw7KHBoyiyGHONICT7cV1K4gs7nN2qt9aMB4QG1yMj3%2FrF58jzu64QObf8KbanlhgkzS1t1xMBzdo1JmYzs7m5fjlMeRpICqKHCGhYliPHwTV4M9E2MNVaUUhj5xk3JyerEciH69xBmltOuGOa13FRDFtffsjCR4pDw3Y86hhz%2BkS78XbIniV%2BANGnefqFpPNIZ3U80nau0E9g%2Fs%2BpjN3teiNUxUs2SOG4OTu7I5HyjSrOXtBTH7Cr40rqMFiXnvB64yeaxFPar9RGy4M0X8kLpNjAtx%2B%2Fy675HxTUh23cObfpbsWadUYeug%2B%2Bq7xXHPDu7nL7n%2BngRPA7d2AKVAj73mUWvoUkjfxD%2FjA3f6pkIfHoyhr6PagFGLYk40lW8r2W0NyUoTFHzX8VPUkRFcAZmEB15E8RXsjZSTXpEsPtfW2MLR8U8%2ByO051LbrVIBCn6OuIW8%2FGRC79ozMoTMPinpb8GOqUBvyjBG8wx3bHkHHiFSrow8RXfqfU%2B%2FUrHwnnndt4nl2%2Bve3zNOdj3hiYBnAfgvb1drb%2B2AoGQzwFCex5c9o8FifTY%2B91aISKzxA4uWh7tFQAppUCy3J1vHbglEeaG%2FX9D1hIt7IXfse8iCxwakkzqLPKmvjpz%2BYn5Q40%2FaYQOiP1AaJkenS1tSpPB0t037bPspCHNgw%2FQcIXHj7DHxQ4npR%2FOI52m&X-Amz-Signature=7f6858a9fd3085a252536c77640073c3ea254b7542c0fb63be71119e46ee9e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
