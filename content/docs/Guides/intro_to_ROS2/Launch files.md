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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOVR47O%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8fxlXhO23Qi1rFWtNn3PhOBnKRU7okMXcAlXixtbJ7AiAoMVL7%2BaEnmcV5qhhRHn4SGF1sKFrTDzs5%2BHIFFuPcCSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6vGU4biaGx4wMD4uKtwDINLUDBKbHIehnm2Jzqs%2FzXbeX5zOBdzPC3fVdsXMnL%2FOYfOMpnIRPkLgEsMeueHoDjzzHHsKeDri3gTJZKI5HYcTz%2Bbre952nZSGFiwyTkf2LZfED2iKPEBlRBRF8VWw3f2GjfwI7ctHCJynO6gWel7LJqNSWzP8Z3mvGPINIbKkytvde1N4sGd7E%2BBkOnfH8OnwMNRlY%2F71yrET%2FWfBe3c0kLbRIxQXbw3%2FP%2Fs6LVZNr%2FY%2Fx2uG3aiEFqsZPeFr%2Bi9d6xpVOLlDzYAwRtAD3O8DbdbstC0THHv3lkZZ0YL7VmMLOZzHlplhzQuKDVb%2FR%2B8QaAjKShLup2RTc0MvuSkYI%2B3Ac0531Rlv%2FiOwOaSR57TNwaYQ0Vcln2VSuVn7LfoyA8z0TbOMTHJtY%2FzImSma7pNK4zQdxtm8STzStYufD9sUYYphHbzfGqDvLJZwzQ1nnYhhDXxB3OzmKwE7Xk%2BM7CGvS6IXbCcPYHgSv5zy%2FU2XBWrRATYlKMJJ%2FB4vjGD2bCXuOGK73OgvLfCvljXhr%2F1sU92TUcVYhNXf6OhKE4NXD8PFpA0Qcvf7EUUABc6v4gqNYgsRYZ2wAkxEvE0uOhyqobtkLlup4SgJyXFtaOiJie9VUTMRgYAw2oXKvgY6pgEbAjyX09NgCfVaf84afuY1QgeFXQIErWlm3HQEIBaSh4GxcHTLVG5P1Un3IcKKFn0ygUk%2FNcgkOnVV%2BApGetzKBeznBk%2BxgdU8aEseawtTBw3dab7KWEY7wbsuiC4r6R5siO%2BQ7vpYg2u75AQCAWKQZvl5wvgVvzy3KJW3S4sdRI5JjddZ5tEo%2FLJCmX1Dweezdq1W6Nz4jdmdns5fTRkd6zGqzuiz&X-Amz-Signature=03486af5d00bff02ec8c26a12a85c59e91db816c39da8db501338fc26482ded5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOVR47O%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8fxlXhO23Qi1rFWtNn3PhOBnKRU7okMXcAlXixtbJ7AiAoMVL7%2BaEnmcV5qhhRHn4SGF1sKFrTDzs5%2BHIFFuPcCSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6vGU4biaGx4wMD4uKtwDINLUDBKbHIehnm2Jzqs%2FzXbeX5zOBdzPC3fVdsXMnL%2FOYfOMpnIRPkLgEsMeueHoDjzzHHsKeDri3gTJZKI5HYcTz%2Bbre952nZSGFiwyTkf2LZfED2iKPEBlRBRF8VWw3f2GjfwI7ctHCJynO6gWel7LJqNSWzP8Z3mvGPINIbKkytvde1N4sGd7E%2BBkOnfH8OnwMNRlY%2F71yrET%2FWfBe3c0kLbRIxQXbw3%2FP%2Fs6LVZNr%2FY%2Fx2uG3aiEFqsZPeFr%2Bi9d6xpVOLlDzYAwRtAD3O8DbdbstC0THHv3lkZZ0YL7VmMLOZzHlplhzQuKDVb%2FR%2B8QaAjKShLup2RTc0MvuSkYI%2B3Ac0531Rlv%2FiOwOaSR57TNwaYQ0Vcln2VSuVn7LfoyA8z0TbOMTHJtY%2FzImSma7pNK4zQdxtm8STzStYufD9sUYYphHbzfGqDvLJZwzQ1nnYhhDXxB3OzmKwE7Xk%2BM7CGvS6IXbCcPYHgSv5zy%2FU2XBWrRATYlKMJJ%2FB4vjGD2bCXuOGK73OgvLfCvljXhr%2F1sU92TUcVYhNXf6OhKE4NXD8PFpA0Qcvf7EUUABc6v4gqNYgsRYZ2wAkxEvE0uOhyqobtkLlup4SgJyXFtaOiJie9VUTMRgYAw2oXKvgY6pgEbAjyX09NgCfVaf84afuY1QgeFXQIErWlm3HQEIBaSh4GxcHTLVG5P1Un3IcKKFn0ygUk%2FNcgkOnVV%2BApGetzKBeznBk%2BxgdU8aEseawtTBw3dab7KWEY7wbsuiC4r6R5siO%2BQ7vpYg2u75AQCAWKQZvl5wvgVvzy3KJW3S4sdRI5JjddZ5tEo%2FLJCmX1Dweezdq1W6Nz4jdmdns5fTRkd6zGqzuiz&X-Amz-Signature=8c70977ba5b6959248dcfdcfa456a11a4b573fc4a41a1d089a03aecc68e22e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOVR47O%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8fxlXhO23Qi1rFWtNn3PhOBnKRU7okMXcAlXixtbJ7AiAoMVL7%2BaEnmcV5qhhRHn4SGF1sKFrTDzs5%2BHIFFuPcCSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6vGU4biaGx4wMD4uKtwDINLUDBKbHIehnm2Jzqs%2FzXbeX5zOBdzPC3fVdsXMnL%2FOYfOMpnIRPkLgEsMeueHoDjzzHHsKeDri3gTJZKI5HYcTz%2Bbre952nZSGFiwyTkf2LZfED2iKPEBlRBRF8VWw3f2GjfwI7ctHCJynO6gWel7LJqNSWzP8Z3mvGPINIbKkytvde1N4sGd7E%2BBkOnfH8OnwMNRlY%2F71yrET%2FWfBe3c0kLbRIxQXbw3%2FP%2Fs6LVZNr%2FY%2Fx2uG3aiEFqsZPeFr%2Bi9d6xpVOLlDzYAwRtAD3O8DbdbstC0THHv3lkZZ0YL7VmMLOZzHlplhzQuKDVb%2FR%2B8QaAjKShLup2RTc0MvuSkYI%2B3Ac0531Rlv%2FiOwOaSR57TNwaYQ0Vcln2VSuVn7LfoyA8z0TbOMTHJtY%2FzImSma7pNK4zQdxtm8STzStYufD9sUYYphHbzfGqDvLJZwzQ1nnYhhDXxB3OzmKwE7Xk%2BM7CGvS6IXbCcPYHgSv5zy%2FU2XBWrRATYlKMJJ%2FB4vjGD2bCXuOGK73OgvLfCvljXhr%2F1sU92TUcVYhNXf6OhKE4NXD8PFpA0Qcvf7EUUABc6v4gqNYgsRYZ2wAkxEvE0uOhyqobtkLlup4SgJyXFtaOiJie9VUTMRgYAw2oXKvgY6pgEbAjyX09NgCfVaf84afuY1QgeFXQIErWlm3HQEIBaSh4GxcHTLVG5P1Un3IcKKFn0ygUk%2FNcgkOnVV%2BApGetzKBeznBk%2BxgdU8aEseawtTBw3dab7KWEY7wbsuiC4r6R5siO%2BQ7vpYg2u75AQCAWKQZvl5wvgVvzy3KJW3S4sdRI5JjddZ5tEo%2FLJCmX1Dweezdq1W6Nz4jdmdns5fTRkd6zGqzuiz&X-Amz-Signature=4c47aebf86d9fc0b79d86d0fb7a75b349d62dd47afba4c0b07cfe9dc51cdda9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
