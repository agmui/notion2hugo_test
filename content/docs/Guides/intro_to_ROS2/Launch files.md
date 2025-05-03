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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAZRVHG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICJOkECZjjMpi6mL8zErPP66FYCgR4%2FhJO72hg2UJ%2BA7AiBy3mkE5hBWFa400%2B0ujJFlONmmxhjsM6bQNDfnCiAclSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAAdB1OrCEtCfCVWYKtwD1EZBrReVH3vkdczTzNDpZ3dO5SeP2M0kb3fqNBLV0DrDdCtuyvSpZ33Rukfvq1Ru%2BJF6hPn4jFbk%2FDKEtE0uir50CZquIi4jlMmNi6axp%2F%2F33ompZAMYqvRipF6kmkt%2FzkAJpIE9FFozL%2BzFL8fuc7eWYdBdt2ZY78ridyBuTCFNLsK257mSGpR%2BwQ0P0%2BOODbysUYDkbYyOp1%2BcOG2dHdQXAcNf27Gv5AurnLopu9Nxm4NaaEGrzStT68orQ34NmwbSeto5krFPm4DuPxPLlNGgfcgBiI7xS3vAMJSH4%2BAkmy3zwZAxehBXyoKP1W7gnd8Iad5EXY1thBzBIQlWeoDztG8v%2BKMj69d1JnTPqKbowEg3e1PsD9rVFWW9hNj830dIOH%2FcuyuWyqO1b5Hh%2B3p7vd7JxKOMFxPnj92l1sLFxAkH6YmJUnad3PpokOmObte40IwdPVbSbvCMceMCQflDvu5AwvQ3PPPiJm3Oco3UVy1MTit5VhY0egN2iMm%2BHM44qpFDd9jILHOsmXzqhmi5j8DgPN9wlnHFirgpgiEh0XESEiywq%2FrgCFlvsuY4JbtfWDAUlyHkYVn6WZEPiULcEC8if%2FlpgxhtpZwpC17ILsgX7zJRyBpF2LAw6N7XwAY6pgF1MbREjXF8beePcgZwp0%2BoIRu3NirGZ2MWxdEGLRDgI0GTrRNxEqwOofTwPlZ2LXEHquzLhNPQC4xNdVbVoczFN9N%2FqTAMYacIrV9sgOyGgfA5yvK8%2FN3o7lubp2klXlRMLFbnhSLLIxGINgzxcP2csIC%2BT3WM8ODkCVavqmj%2BEt87UyAj1H6HwQz2BKnDqlyLStm4UoBI7Ao8AnBFRKtXSStaREsY&X-Amz-Signature=25af177b63894c03f069c0dd8a8f45584caa093d50f4300421cdd60a12c03efd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAZRVHG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICJOkECZjjMpi6mL8zErPP66FYCgR4%2FhJO72hg2UJ%2BA7AiBy3mkE5hBWFa400%2B0ujJFlONmmxhjsM6bQNDfnCiAclSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAAdB1OrCEtCfCVWYKtwD1EZBrReVH3vkdczTzNDpZ3dO5SeP2M0kb3fqNBLV0DrDdCtuyvSpZ33Rukfvq1Ru%2BJF6hPn4jFbk%2FDKEtE0uir50CZquIi4jlMmNi6axp%2F%2F33ompZAMYqvRipF6kmkt%2FzkAJpIE9FFozL%2BzFL8fuc7eWYdBdt2ZY78ridyBuTCFNLsK257mSGpR%2BwQ0P0%2BOODbysUYDkbYyOp1%2BcOG2dHdQXAcNf27Gv5AurnLopu9Nxm4NaaEGrzStT68orQ34NmwbSeto5krFPm4DuPxPLlNGgfcgBiI7xS3vAMJSH4%2BAkmy3zwZAxehBXyoKP1W7gnd8Iad5EXY1thBzBIQlWeoDztG8v%2BKMj69d1JnTPqKbowEg3e1PsD9rVFWW9hNj830dIOH%2FcuyuWyqO1b5Hh%2B3p7vd7JxKOMFxPnj92l1sLFxAkH6YmJUnad3PpokOmObte40IwdPVbSbvCMceMCQflDvu5AwvQ3PPPiJm3Oco3UVy1MTit5VhY0egN2iMm%2BHM44qpFDd9jILHOsmXzqhmi5j8DgPN9wlnHFirgpgiEh0XESEiywq%2FrgCFlvsuY4JbtfWDAUlyHkYVn6WZEPiULcEC8if%2FlpgxhtpZwpC17ILsgX7zJRyBpF2LAw6N7XwAY6pgF1MbREjXF8beePcgZwp0%2BoIRu3NirGZ2MWxdEGLRDgI0GTrRNxEqwOofTwPlZ2LXEHquzLhNPQC4xNdVbVoczFN9N%2FqTAMYacIrV9sgOyGgfA5yvK8%2FN3o7lubp2klXlRMLFbnhSLLIxGINgzxcP2csIC%2BT3WM8ODkCVavqmj%2BEt87UyAj1H6HwQz2BKnDqlyLStm4UoBI7Ao8AnBFRKtXSStaREsY&X-Amz-Signature=25e50ff995ad242829cf688e48c4257d054912cc440fef77fb51234adc1d75e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAZRVHG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICJOkECZjjMpi6mL8zErPP66FYCgR4%2FhJO72hg2UJ%2BA7AiBy3mkE5hBWFa400%2B0ujJFlONmmxhjsM6bQNDfnCiAclSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAAdB1OrCEtCfCVWYKtwD1EZBrReVH3vkdczTzNDpZ3dO5SeP2M0kb3fqNBLV0DrDdCtuyvSpZ33Rukfvq1Ru%2BJF6hPn4jFbk%2FDKEtE0uir50CZquIi4jlMmNi6axp%2F%2F33ompZAMYqvRipF6kmkt%2FzkAJpIE9FFozL%2BzFL8fuc7eWYdBdt2ZY78ridyBuTCFNLsK257mSGpR%2BwQ0P0%2BOODbysUYDkbYyOp1%2BcOG2dHdQXAcNf27Gv5AurnLopu9Nxm4NaaEGrzStT68orQ34NmwbSeto5krFPm4DuPxPLlNGgfcgBiI7xS3vAMJSH4%2BAkmy3zwZAxehBXyoKP1W7gnd8Iad5EXY1thBzBIQlWeoDztG8v%2BKMj69d1JnTPqKbowEg3e1PsD9rVFWW9hNj830dIOH%2FcuyuWyqO1b5Hh%2B3p7vd7JxKOMFxPnj92l1sLFxAkH6YmJUnad3PpokOmObte40IwdPVbSbvCMceMCQflDvu5AwvQ3PPPiJm3Oco3UVy1MTit5VhY0egN2iMm%2BHM44qpFDd9jILHOsmXzqhmi5j8DgPN9wlnHFirgpgiEh0XESEiywq%2FrgCFlvsuY4JbtfWDAUlyHkYVn6WZEPiULcEC8if%2FlpgxhtpZwpC17ILsgX7zJRyBpF2LAw6N7XwAY6pgF1MbREjXF8beePcgZwp0%2BoIRu3NirGZ2MWxdEGLRDgI0GTrRNxEqwOofTwPlZ2LXEHquzLhNPQC4xNdVbVoczFN9N%2FqTAMYacIrV9sgOyGgfA5yvK8%2FN3o7lubp2klXlRMLFbnhSLLIxGINgzxcP2csIC%2BT3WM8ODkCVavqmj%2BEt87UyAj1H6HwQz2BKnDqlyLStm4UoBI7Ao8AnBFRKtXSStaREsY&X-Amz-Signature=6fd2acedbf11ba17c9c70e692b710f33a05ad22e4d9c0983e9143b81fbfebeda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
