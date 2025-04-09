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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHRYZBY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGHdsZqVJO26hbQ9x92ZApD7KTvHgu0RnpG5Joxk%2B5BRAiEA6F7cViq94y0qqAdrxqEVL%2F5loNNtE8GbE67l%2BlSgQuIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYzxVqBhsMnoTqPiyrcA%2F6O9w1ifPE0HVrQaaLplK0Jyx%2Bcu22r3CzsZQo7%2FefJk7r1LThP0dvFiY5rEBV8m8K4JJHExtNate4nMSaFbd5pMskLC2Nvikoe4puPwM1vtmKto%2BfzL0iBr3DKj%2FGeavpIWh0slBsMBrwmNls8uSir834FS%2FJDUaVHK7%2FpUjqJI0Np4fsys8ji2PYQ3gn4WR2xiQnUBhoLNIPhAgATrY4Vonv3adXhay4261NDi%2FnHDYqN%2BI2IjMh5VvjMWF0sgnqW9%2BDSX48Y64cyNHsKdhiPtAgozHmqtS20gTHyooix%2BP2fcv1atWj6gSo%2Bs3ihKkWPocnWAw0Cv2fykqstUFua0nAiuYoEbJdOsrz5kikqMRtLWUv26LYS7WpHibPey8pjigIGPG9s6G%2BG2aUV4iYPF4lB2SD2zz4K6imU2Zn6GW7hbWcZdMs0ePZdt8nnRSuIPP3hsHAvRZRomkzDjsTAQyim7DROWBaW7kdXkmmWXbICNWlFjv1of%2Ff4GX6kdVppRWgFO9UaZKW5be%2BmoGnc1tVpW9quYM3bS8ifuJFN42pbDdbf%2BUQh3E1cZU8NIpT43E%2FpN2u2Yg6sgvP%2F0uusxJHYB7GJcWUFENZCa0A2AKkdU1yQ6oEORn40MOWy2b8GOqUB7TrFdP88KjqkdVoua42k%2FE7Ca1mF%2BrUqU9HL6kLP1DJOALZfhkFVTYUR21yYKVN2FZTU%2BaG8XnqSS2Mu%2F6p%2B8xCtbQMxtEK8JcZ6lc%2Fu8NQcQoMmtEiJcD2HwGRe1se4QESRWD3zTr4ZpenxQZGIgFd3KeQsfh%2FNTiG5giGMLAMWoE8MoIaMm3rJCGxrWFKIr4iTiUkLR4hBbyrBPyzhuM%2BY3ykQ&X-Amz-Signature=cc1852cf90c48f06a763cfe4814517d2538800cf47fe85b98f8921a7acbdff6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHRYZBY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGHdsZqVJO26hbQ9x92ZApD7KTvHgu0RnpG5Joxk%2B5BRAiEA6F7cViq94y0qqAdrxqEVL%2F5loNNtE8GbE67l%2BlSgQuIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYzxVqBhsMnoTqPiyrcA%2F6O9w1ifPE0HVrQaaLplK0Jyx%2Bcu22r3CzsZQo7%2FefJk7r1LThP0dvFiY5rEBV8m8K4JJHExtNate4nMSaFbd5pMskLC2Nvikoe4puPwM1vtmKto%2BfzL0iBr3DKj%2FGeavpIWh0slBsMBrwmNls8uSir834FS%2FJDUaVHK7%2FpUjqJI0Np4fsys8ji2PYQ3gn4WR2xiQnUBhoLNIPhAgATrY4Vonv3adXhay4261NDi%2FnHDYqN%2BI2IjMh5VvjMWF0sgnqW9%2BDSX48Y64cyNHsKdhiPtAgozHmqtS20gTHyooix%2BP2fcv1atWj6gSo%2Bs3ihKkWPocnWAw0Cv2fykqstUFua0nAiuYoEbJdOsrz5kikqMRtLWUv26LYS7WpHibPey8pjigIGPG9s6G%2BG2aUV4iYPF4lB2SD2zz4K6imU2Zn6GW7hbWcZdMs0ePZdt8nnRSuIPP3hsHAvRZRomkzDjsTAQyim7DROWBaW7kdXkmmWXbICNWlFjv1of%2Ff4GX6kdVppRWgFO9UaZKW5be%2BmoGnc1tVpW9quYM3bS8ifuJFN42pbDdbf%2BUQh3E1cZU8NIpT43E%2FpN2u2Yg6sgvP%2F0uusxJHYB7GJcWUFENZCa0A2AKkdU1yQ6oEORn40MOWy2b8GOqUB7TrFdP88KjqkdVoua42k%2FE7Ca1mF%2BrUqU9HL6kLP1DJOALZfhkFVTYUR21yYKVN2FZTU%2BaG8XnqSS2Mu%2F6p%2B8xCtbQMxtEK8JcZ6lc%2Fu8NQcQoMmtEiJcD2HwGRe1se4QESRWD3zTr4ZpenxQZGIgFd3KeQsfh%2FNTiG5giGMLAMWoE8MoIaMm3rJCGxrWFKIr4iTiUkLR4hBbyrBPyzhuM%2BY3ykQ&X-Amz-Signature=f0be537a5d1f88819b58e9ce61b5a39fc35ec86230546a27d36fb82aae2396b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHRYZBY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGHdsZqVJO26hbQ9x92ZApD7KTvHgu0RnpG5Joxk%2B5BRAiEA6F7cViq94y0qqAdrxqEVL%2F5loNNtE8GbE67l%2BlSgQuIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYzxVqBhsMnoTqPiyrcA%2F6O9w1ifPE0HVrQaaLplK0Jyx%2Bcu22r3CzsZQo7%2FefJk7r1LThP0dvFiY5rEBV8m8K4JJHExtNate4nMSaFbd5pMskLC2Nvikoe4puPwM1vtmKto%2BfzL0iBr3DKj%2FGeavpIWh0slBsMBrwmNls8uSir834FS%2FJDUaVHK7%2FpUjqJI0Np4fsys8ji2PYQ3gn4WR2xiQnUBhoLNIPhAgATrY4Vonv3adXhay4261NDi%2FnHDYqN%2BI2IjMh5VvjMWF0sgnqW9%2BDSX48Y64cyNHsKdhiPtAgozHmqtS20gTHyooix%2BP2fcv1atWj6gSo%2Bs3ihKkWPocnWAw0Cv2fykqstUFua0nAiuYoEbJdOsrz5kikqMRtLWUv26LYS7WpHibPey8pjigIGPG9s6G%2BG2aUV4iYPF4lB2SD2zz4K6imU2Zn6GW7hbWcZdMs0ePZdt8nnRSuIPP3hsHAvRZRomkzDjsTAQyim7DROWBaW7kdXkmmWXbICNWlFjv1of%2Ff4GX6kdVppRWgFO9UaZKW5be%2BmoGnc1tVpW9quYM3bS8ifuJFN42pbDdbf%2BUQh3E1cZU8NIpT43E%2FpN2u2Yg6sgvP%2F0uusxJHYB7GJcWUFENZCa0A2AKkdU1yQ6oEORn40MOWy2b8GOqUB7TrFdP88KjqkdVoua42k%2FE7Ca1mF%2BrUqU9HL6kLP1DJOALZfhkFVTYUR21yYKVN2FZTU%2BaG8XnqSS2Mu%2F6p%2B8xCtbQMxtEK8JcZ6lc%2Fu8NQcQoMmtEiJcD2HwGRe1se4QESRWD3zTr4ZpenxQZGIgFd3KeQsfh%2FNTiG5giGMLAMWoE8MoIaMm3rJCGxrWFKIr4iTiUkLR4hBbyrBPyzhuM%2BY3ykQ&X-Amz-Signature=8b9e9e0886458c4e8ac20181c3d3fb884f41712b1da14fd872f86dca9b640bba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
