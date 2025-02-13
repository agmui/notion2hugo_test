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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZKJVKZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICI0sBoM8Ei8SJkLXochlpRsH7v36WZxocvoDHJTCpOqAiEA9N37okndmS2WkswnycwgLOeLc7fb2j6e0jBF9Ac3ZlUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHH%2BnYWl1optdCYdircA9hgfkkoAKhTqw56Puy4HQqs6YCLqFktzXzOC89cH2%2B3MUFTJfrXrMn5D05YU3%2FajX8jzn5olONl0Nbi7aE2ygXu9W%2BMyRPxJ96r4KGhUkPeV8FsYV5%2BxIY33u7lCL7F51OytsNcraaH3D1DvAevO6zxKYnUqyU%2FgfC98FSEqTAzvz2vfutMm8SSZ4IufGiDMcAuhzLTIBUmCkZjBZxhHnKYjpN61kt4SSVstb9M6P15mMwTPFijFR08Vby%2FA2gR%2BRQcRxZqgvcmby94OKp8sHsjHr9xUDy%2FP%2FYKzPdRNiMN9JNza5gFfyPjUGxszHsZ7fE%2F3n43QpNV7jX2qQCUqFj28RmSK%2Fve6le%2BjpuleNP8nIlA7Yb%2F%2FNtdE3pd1uyuHhpZU4cEGaIqvg5aKdN707x9L3vNRrCGJQrJ2D0SsAc86Yqw%2FKdfedflQxo5X3%2F8vacorYYYJZBn5nOVDI9c94kH6gwNFwea5lSssxUQhbsUxF647zdnxhxtym5voq5F1q4ZCMU474mvyI%2FBthgKYfylzYP1B0SnAPQPot86fEAhqstHm%2FcSvKg0odmzkpPxzxEgE7cWQlnFnuXWfyYTFbbkNuFumzsrmuoRkAIMzIHJxCqViEsc6HRPw1F%2BMNaYtb0GOqUBcw1It%2B5PXuNPEPD2UvkvwP7k0PsSAcgaxb2OPvOS%2BRiDCQqPYjccN5WJFf2TnXtNAkLgO1Ss6dsX94gb8ExHPR5Qno4d3ecoU2CPY2vJkuUmXX0%2Fb5t1bJ%2FbMrzxYCI3lHCC%2Bny9qxDOqGZRRU6tTUik9hBxCPXSVZmrzZOq8jPOF390XWKJu8KXYMKErc6O%2Fx9y7wLRno9R8%2FC8UejHE7se%2BWY%2F&X-Amz-Signature=f81e7de361178d90966d5605f95088a633a7e94e877f31bc7c236a76798d61e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZKJVKZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICI0sBoM8Ei8SJkLXochlpRsH7v36WZxocvoDHJTCpOqAiEA9N37okndmS2WkswnycwgLOeLc7fb2j6e0jBF9Ac3ZlUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHH%2BnYWl1optdCYdircA9hgfkkoAKhTqw56Puy4HQqs6YCLqFktzXzOC89cH2%2B3MUFTJfrXrMn5D05YU3%2FajX8jzn5olONl0Nbi7aE2ygXu9W%2BMyRPxJ96r4KGhUkPeV8FsYV5%2BxIY33u7lCL7F51OytsNcraaH3D1DvAevO6zxKYnUqyU%2FgfC98FSEqTAzvz2vfutMm8SSZ4IufGiDMcAuhzLTIBUmCkZjBZxhHnKYjpN61kt4SSVstb9M6P15mMwTPFijFR08Vby%2FA2gR%2BRQcRxZqgvcmby94OKp8sHsjHr9xUDy%2FP%2FYKzPdRNiMN9JNza5gFfyPjUGxszHsZ7fE%2F3n43QpNV7jX2qQCUqFj28RmSK%2Fve6le%2BjpuleNP8nIlA7Yb%2F%2FNtdE3pd1uyuHhpZU4cEGaIqvg5aKdN707x9L3vNRrCGJQrJ2D0SsAc86Yqw%2FKdfedflQxo5X3%2F8vacorYYYJZBn5nOVDI9c94kH6gwNFwea5lSssxUQhbsUxF647zdnxhxtym5voq5F1q4ZCMU474mvyI%2FBthgKYfylzYP1B0SnAPQPot86fEAhqstHm%2FcSvKg0odmzkpPxzxEgE7cWQlnFnuXWfyYTFbbkNuFumzsrmuoRkAIMzIHJxCqViEsc6HRPw1F%2BMNaYtb0GOqUBcw1It%2B5PXuNPEPD2UvkvwP7k0PsSAcgaxb2OPvOS%2BRiDCQqPYjccN5WJFf2TnXtNAkLgO1Ss6dsX94gb8ExHPR5Qno4d3ecoU2CPY2vJkuUmXX0%2Fb5t1bJ%2FbMrzxYCI3lHCC%2Bny9qxDOqGZRRU6tTUik9hBxCPXSVZmrzZOq8jPOF390XWKJu8KXYMKErc6O%2Fx9y7wLRno9R8%2FC8UejHE7se%2BWY%2F&X-Amz-Signature=af880587259c52b15fa28ebf1531ca9489433022b2c9165b56cb028fc8f4c378&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZKJVKZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICI0sBoM8Ei8SJkLXochlpRsH7v36WZxocvoDHJTCpOqAiEA9N37okndmS2WkswnycwgLOeLc7fb2j6e0jBF9Ac3ZlUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHH%2BnYWl1optdCYdircA9hgfkkoAKhTqw56Puy4HQqs6YCLqFktzXzOC89cH2%2B3MUFTJfrXrMn5D05YU3%2FajX8jzn5olONl0Nbi7aE2ygXu9W%2BMyRPxJ96r4KGhUkPeV8FsYV5%2BxIY33u7lCL7F51OytsNcraaH3D1DvAevO6zxKYnUqyU%2FgfC98FSEqTAzvz2vfutMm8SSZ4IufGiDMcAuhzLTIBUmCkZjBZxhHnKYjpN61kt4SSVstb9M6P15mMwTPFijFR08Vby%2FA2gR%2BRQcRxZqgvcmby94OKp8sHsjHr9xUDy%2FP%2FYKzPdRNiMN9JNza5gFfyPjUGxszHsZ7fE%2F3n43QpNV7jX2qQCUqFj28RmSK%2Fve6le%2BjpuleNP8nIlA7Yb%2F%2FNtdE3pd1uyuHhpZU4cEGaIqvg5aKdN707x9L3vNRrCGJQrJ2D0SsAc86Yqw%2FKdfedflQxo5X3%2F8vacorYYYJZBn5nOVDI9c94kH6gwNFwea5lSssxUQhbsUxF647zdnxhxtym5voq5F1q4ZCMU474mvyI%2FBthgKYfylzYP1B0SnAPQPot86fEAhqstHm%2FcSvKg0odmzkpPxzxEgE7cWQlnFnuXWfyYTFbbkNuFumzsrmuoRkAIMzIHJxCqViEsc6HRPw1F%2BMNaYtb0GOqUBcw1It%2B5PXuNPEPD2UvkvwP7k0PsSAcgaxb2OPvOS%2BRiDCQqPYjccN5WJFf2TnXtNAkLgO1Ss6dsX94gb8ExHPR5Qno4d3ecoU2CPY2vJkuUmXX0%2Fb5t1bJ%2FbMrzxYCI3lHCC%2Bny9qxDOqGZRRU6tTUik9hBxCPXSVZmrzZOq8jPOF390XWKJu8KXYMKErc6O%2Fx9y7wLRno9R8%2FC8UejHE7se%2BWY%2F&X-Amz-Signature=37cbdc627462b0da671699550ef52eb48e9814e68846df12d8aa4b6c058c14e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
