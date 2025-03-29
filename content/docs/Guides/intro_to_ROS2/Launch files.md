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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HHI6MU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD5bNN%2BIG6ETFh8BfaUgHGLJJfyeq%2FQtIR983fQzEcLiwIhAN5EFhMygQ3w9QGd5eAodrxF%2FZPhKkFQ0KQKZNlxTC%2BZKv8DCHUQABoMNjM3NDIzMTgzODA1IgzWauG0nvOfujbDt%2BEq3AMqU9CPNEI1nimn7R4lRIyeQvla7v318GgHHdULkFxZkEWq2wbByt5X096eNxulYDQOVzeiY5ni0DrYzHfmXo2hpyUCRHcSiwYGHEkRocEZGuwvvSmeVx3xgV4JlfrqPqc8q2mG9Al%2FMyaR2y8mXbZV8%2BhAwIEIGgvdlxhXG8EoNGPmzLPVqcDuFfwIV4sCszIJCMGIvMmAWw5DcAf%2BmLOzU5bZHalFhAyl1GM85WOlDKYufWhYhBhRbXqF3b0OVsAU5hkaZngvlObzNRXahTANQnZ1sx9j6omJ8w45EAMS50FixFX7fn%2BdcKu2Pehw7PBlMYMGzO38OKmFS7yKqUa0iAy241%2FWKMC6IyJAb7g2CaPqJKEyGYQUOLMWm1dlSOdstmBNkQ%2BnselAhKjmIIFW%2BKKQzL4ma4DySEcKXK5TwJk%2BgagYY0cfKJ8T%2BmKE6gdCJ1rNJVvqWTxRaF557%2B%2FUVtdsJsh7UZaObpVRnDgUSixNl06cJvcl2Xns8QnkU3qd8082vCAa6vntU6VJ5AUmMXy9xJdESm8ejy1ljZdIP7IJ%2F2PbmSJis5MdrOhzK%2FsX%2B4B9TNvqqhWYQsNTq1slkujdDq4Z21wws1zRgB67UIQJ1JCQKAhV88OuTTCBtZ%2B%2FBjqkAT9BtYdcZHlQmNkttkqm8tgJ4Jhk9hT%2FwTHdq5BpDaIJxWxuDUUVMElSKIoinHfW2JBPBE4bObZm%2B4UeOFXU%2BHF78pgBYAqj9%2F5YPw0vLHak6l0vIW3WVRPIRd5YSFMGt0xj%2BqTugaPCLsBp78we0uxmqDsPdy%2BexXZQWblxWl86%2FJ1EHdi7IlwL4q4PfxEuqSVy6mBlF%2FNXE8%2FYbfUgexTLKXR7&X-Amz-Signature=f47b35306d8aec5e38d92cd3f008c37772f0575276b41fd3a897d75254437302&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HHI6MU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD5bNN%2BIG6ETFh8BfaUgHGLJJfyeq%2FQtIR983fQzEcLiwIhAN5EFhMygQ3w9QGd5eAodrxF%2FZPhKkFQ0KQKZNlxTC%2BZKv8DCHUQABoMNjM3NDIzMTgzODA1IgzWauG0nvOfujbDt%2BEq3AMqU9CPNEI1nimn7R4lRIyeQvla7v318GgHHdULkFxZkEWq2wbByt5X096eNxulYDQOVzeiY5ni0DrYzHfmXo2hpyUCRHcSiwYGHEkRocEZGuwvvSmeVx3xgV4JlfrqPqc8q2mG9Al%2FMyaR2y8mXbZV8%2BhAwIEIGgvdlxhXG8EoNGPmzLPVqcDuFfwIV4sCszIJCMGIvMmAWw5DcAf%2BmLOzU5bZHalFhAyl1GM85WOlDKYufWhYhBhRbXqF3b0OVsAU5hkaZngvlObzNRXahTANQnZ1sx9j6omJ8w45EAMS50FixFX7fn%2BdcKu2Pehw7PBlMYMGzO38OKmFS7yKqUa0iAy241%2FWKMC6IyJAb7g2CaPqJKEyGYQUOLMWm1dlSOdstmBNkQ%2BnselAhKjmIIFW%2BKKQzL4ma4DySEcKXK5TwJk%2BgagYY0cfKJ8T%2BmKE6gdCJ1rNJVvqWTxRaF557%2B%2FUVtdsJsh7UZaObpVRnDgUSixNl06cJvcl2Xns8QnkU3qd8082vCAa6vntU6VJ5AUmMXy9xJdESm8ejy1ljZdIP7IJ%2F2PbmSJis5MdrOhzK%2FsX%2B4B9TNvqqhWYQsNTq1slkujdDq4Z21wws1zRgB67UIQJ1JCQKAhV88OuTTCBtZ%2B%2FBjqkAT9BtYdcZHlQmNkttkqm8tgJ4Jhk9hT%2FwTHdq5BpDaIJxWxuDUUVMElSKIoinHfW2JBPBE4bObZm%2B4UeOFXU%2BHF78pgBYAqj9%2F5YPw0vLHak6l0vIW3WVRPIRd5YSFMGt0xj%2BqTugaPCLsBp78we0uxmqDsPdy%2BexXZQWblxWl86%2FJ1EHdi7IlwL4q4PfxEuqSVy6mBlF%2FNXE8%2FYbfUgexTLKXR7&X-Amz-Signature=9db7b769b6a0102833ccbd7fbc1495bcd45486e89de3caa48cb827cefbf67a90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HHI6MU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD5bNN%2BIG6ETFh8BfaUgHGLJJfyeq%2FQtIR983fQzEcLiwIhAN5EFhMygQ3w9QGd5eAodrxF%2FZPhKkFQ0KQKZNlxTC%2BZKv8DCHUQABoMNjM3NDIzMTgzODA1IgzWauG0nvOfujbDt%2BEq3AMqU9CPNEI1nimn7R4lRIyeQvla7v318GgHHdULkFxZkEWq2wbByt5X096eNxulYDQOVzeiY5ni0DrYzHfmXo2hpyUCRHcSiwYGHEkRocEZGuwvvSmeVx3xgV4JlfrqPqc8q2mG9Al%2FMyaR2y8mXbZV8%2BhAwIEIGgvdlxhXG8EoNGPmzLPVqcDuFfwIV4sCszIJCMGIvMmAWw5DcAf%2BmLOzU5bZHalFhAyl1GM85WOlDKYufWhYhBhRbXqF3b0OVsAU5hkaZngvlObzNRXahTANQnZ1sx9j6omJ8w45EAMS50FixFX7fn%2BdcKu2Pehw7PBlMYMGzO38OKmFS7yKqUa0iAy241%2FWKMC6IyJAb7g2CaPqJKEyGYQUOLMWm1dlSOdstmBNkQ%2BnselAhKjmIIFW%2BKKQzL4ma4DySEcKXK5TwJk%2BgagYY0cfKJ8T%2BmKE6gdCJ1rNJVvqWTxRaF557%2B%2FUVtdsJsh7UZaObpVRnDgUSixNl06cJvcl2Xns8QnkU3qd8082vCAa6vntU6VJ5AUmMXy9xJdESm8ejy1ljZdIP7IJ%2F2PbmSJis5MdrOhzK%2FsX%2B4B9TNvqqhWYQsNTq1slkujdDq4Z21wws1zRgB67UIQJ1JCQKAhV88OuTTCBtZ%2B%2FBjqkAT9BtYdcZHlQmNkttkqm8tgJ4Jhk9hT%2FwTHdq5BpDaIJxWxuDUUVMElSKIoinHfW2JBPBE4bObZm%2B4UeOFXU%2BHF78pgBYAqj9%2F5YPw0vLHak6l0vIW3WVRPIRd5YSFMGt0xj%2BqTugaPCLsBp78we0uxmqDsPdy%2BexXZQWblxWl86%2FJ1EHdi7IlwL4q4PfxEuqSVy6mBlF%2FNXE8%2FYbfUgexTLKXR7&X-Amz-Signature=31b224f83b396b3c3d7d2851bc52de2286451d16e69793178b5d46293a64e0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
