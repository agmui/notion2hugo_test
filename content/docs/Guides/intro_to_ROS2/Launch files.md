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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HAS43SD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTbRMSCCZx6db7TG5a2Av1%2FqJ3URQ6p9QgDmnBoO4B4AiAOQh79P%2Fh6FpZafG0OZFG0l58R3d61S5I0czST4qdxLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMvJ7FH7ABAGxIf0S%2BKtwDAInzFETz4Myq95LLGdgM6xyZFwjWb4xSb9UJXLdWXV5zou4eeQ2HyN0BGDHMbx8zNAsB7HFJRgzudvuJJ%2BPkZnVHStnjRhhIQ5omwQ769jchEazd0pQ0YZpAG5Uj%2FtHxjhdpBbMf1CwkzsjrEYl3e%2BjP9lb4xNxPk4mSUhpWkGYNEYojZc%2BTxLxnUA7mMX9echSGBZzZLEedEZi3m7TpGFGUH%2BAKJbR41kK%2F1aheHwTKqsbR%2BG5tZQeyJMDbg9V3GF2yXdtu4XEWVrvXx4R1upIL2YLcV8a6q%2BpCp0mHs9BhbSzOq6IMnWGtkEOYYks3CKxXekN1pez%2BPhJM966e3vVR3dUOvWn%2BqM5K95i8U9MEtSXaIJbcNENId4XXxe4OnUfzAGGk0eyz6N%2FtI8tp1KtC9wtHlcZhApG8HeXVreCkRi%2BcG%2Fg2wDnL%2FCxsY46DcyZdSt%2BdOonkWytrQHDvVmXVKfJJcYgs8IT1yBQRnKrGHPyHcE9zq1oR39aBgbNeSQNQX3Bv8c7AP4E1dpb%2FdWx2v0qTonFQAid6azhkoqc5QytBNh7qDHmPUVy5jEKLYB9Li3YvoUVYGmbkv2n9G%2FOqWlpQs28lW8WObsT8e5HWOgO7eqBoe4JvbuwwidfxvQY6pgFP6fp%2B71%2BetOTwDdymUAPwEE3n0oSzRkctEj%2F05%2FvvcwlkTVOJTaMl5v5KJixHDnUz7jeEXl0T4nT2gDcyBOOiFqAAmUzvL4zZKHIxDJ4SgWXYeC%2B47Yzg%2FHUZS2Pyh1o6az%2FgDVRNQApvIHSTzi22w%2BSHUmeHrWG7QPEdGg%2FFcSnhJ%2FCsjr3Jl38Np2eANXidyx4Jm6oWMwQkFpY3ftof9zoT0jOP&X-Amz-Signature=e0ba9d0ce1965b46e313385d25ea200b09a47f60620e96a6b8315be807650f12&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HAS43SD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTbRMSCCZx6db7TG5a2Av1%2FqJ3URQ6p9QgDmnBoO4B4AiAOQh79P%2Fh6FpZafG0OZFG0l58R3d61S5I0czST4qdxLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMvJ7FH7ABAGxIf0S%2BKtwDAInzFETz4Myq95LLGdgM6xyZFwjWb4xSb9UJXLdWXV5zou4eeQ2HyN0BGDHMbx8zNAsB7HFJRgzudvuJJ%2BPkZnVHStnjRhhIQ5omwQ769jchEazd0pQ0YZpAG5Uj%2FtHxjhdpBbMf1CwkzsjrEYl3e%2BjP9lb4xNxPk4mSUhpWkGYNEYojZc%2BTxLxnUA7mMX9echSGBZzZLEedEZi3m7TpGFGUH%2BAKJbR41kK%2F1aheHwTKqsbR%2BG5tZQeyJMDbg9V3GF2yXdtu4XEWVrvXx4R1upIL2YLcV8a6q%2BpCp0mHs9BhbSzOq6IMnWGtkEOYYks3CKxXekN1pez%2BPhJM966e3vVR3dUOvWn%2BqM5K95i8U9MEtSXaIJbcNENId4XXxe4OnUfzAGGk0eyz6N%2FtI8tp1KtC9wtHlcZhApG8HeXVreCkRi%2BcG%2Fg2wDnL%2FCxsY46DcyZdSt%2BdOonkWytrQHDvVmXVKfJJcYgs8IT1yBQRnKrGHPyHcE9zq1oR39aBgbNeSQNQX3Bv8c7AP4E1dpb%2FdWx2v0qTonFQAid6azhkoqc5QytBNh7qDHmPUVy5jEKLYB9Li3YvoUVYGmbkv2n9G%2FOqWlpQs28lW8WObsT8e5HWOgO7eqBoe4JvbuwwidfxvQY6pgFP6fp%2B71%2BetOTwDdymUAPwEE3n0oSzRkctEj%2F05%2FvvcwlkTVOJTaMl5v5KJixHDnUz7jeEXl0T4nT2gDcyBOOiFqAAmUzvL4zZKHIxDJ4SgWXYeC%2B47Yzg%2FHUZS2Pyh1o6az%2FgDVRNQApvIHSTzi22w%2BSHUmeHrWG7QPEdGg%2FFcSnhJ%2FCsjr3Jl38Np2eANXidyx4Jm6oWMwQkFpY3ftof9zoT0jOP&X-Amz-Signature=23296ef5f47fed8dfdbb07b1179942ae2d1846f679733a4e7d953f4e609f395d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HAS43SD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTbRMSCCZx6db7TG5a2Av1%2FqJ3URQ6p9QgDmnBoO4B4AiAOQh79P%2Fh6FpZafG0OZFG0l58R3d61S5I0czST4qdxLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMvJ7FH7ABAGxIf0S%2BKtwDAInzFETz4Myq95LLGdgM6xyZFwjWb4xSb9UJXLdWXV5zou4eeQ2HyN0BGDHMbx8zNAsB7HFJRgzudvuJJ%2BPkZnVHStnjRhhIQ5omwQ769jchEazd0pQ0YZpAG5Uj%2FtHxjhdpBbMf1CwkzsjrEYl3e%2BjP9lb4xNxPk4mSUhpWkGYNEYojZc%2BTxLxnUA7mMX9echSGBZzZLEedEZi3m7TpGFGUH%2BAKJbR41kK%2F1aheHwTKqsbR%2BG5tZQeyJMDbg9V3GF2yXdtu4XEWVrvXx4R1upIL2YLcV8a6q%2BpCp0mHs9BhbSzOq6IMnWGtkEOYYks3CKxXekN1pez%2BPhJM966e3vVR3dUOvWn%2BqM5K95i8U9MEtSXaIJbcNENId4XXxe4OnUfzAGGk0eyz6N%2FtI8tp1KtC9wtHlcZhApG8HeXVreCkRi%2BcG%2Fg2wDnL%2FCxsY46DcyZdSt%2BdOonkWytrQHDvVmXVKfJJcYgs8IT1yBQRnKrGHPyHcE9zq1oR39aBgbNeSQNQX3Bv8c7AP4E1dpb%2FdWx2v0qTonFQAid6azhkoqc5QytBNh7qDHmPUVy5jEKLYB9Li3YvoUVYGmbkv2n9G%2FOqWlpQs28lW8WObsT8e5HWOgO7eqBoe4JvbuwwidfxvQY6pgFP6fp%2B71%2BetOTwDdymUAPwEE3n0oSzRkctEj%2F05%2FvvcwlkTVOJTaMl5v5KJixHDnUz7jeEXl0T4nT2gDcyBOOiFqAAmUzvL4zZKHIxDJ4SgWXYeC%2B47Yzg%2FHUZS2Pyh1o6az%2FgDVRNQApvIHSTzi22w%2BSHUmeHrWG7QPEdGg%2FFcSnhJ%2FCsjr3Jl38Np2eANXidyx4Jm6oWMwQkFpY3ftof9zoT0jOP&X-Amz-Signature=b1e305e48a5197a6431b96739cc50442a614fa34ca949f67b5f691626f9b2e75&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
