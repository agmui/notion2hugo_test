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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKRPWC6T%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCowuGWWmr3Wrl1lw30zHHFAVSnMuObhSqh2xpu6hGobwIhAMuVuRfj%2Bu4A9c54ZFCd3OJ8xz8lfMIi8JJdS6DyjrVSKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1aCKKDKHiuGMBU4q3AMwvVxFGEGxintxIe4hZDrK%2BKKVhSumXlx%2BK8h5acyP6VDRDg2Tv5JCkXa5U6pQHoxpw%2B6S2Fc7DVrx4fTsXYYiDsBqtnMsfn2LDMa7xiU%2FDBtnZhdNUx4BhkeJqCllJipTKD5v80ZPj4Yja4gUas8w1sG56dvC0Hz4O1%2Fp%2BctDJnGrIaDjuHYNtKL1cuHI0KOpuLsUuG5pw%2BOhc9ConzpIU9SLp%2FJlwYHqOR87r28jahSZRTWGfLR9tq7caYOcRoa3%2FpARuQvuYA%2BiX3s10nJGkCpfoscC%2BNYrse4RPWJrBHWL1dHwlEhMG3YKfHcrjFX42uK1woBEG6AtbT%2FCUh0sQQ1OySGxxXAwrxPwiNnyyeLr2g%2B5lGwDmNlDdGEdYBlUP6VozxGqzeZTFGtd58EymZmyANauiyrMLbEjzZ1aiqkUh8u0gY008giX4R5CzPzS6yaRAS%2FOgRXAAjmsaogoV7Bi2yuEwRGw4%2Fr0RIV%2Bb1uy4XSriHiVZB3rV0Pu7hZqdcM7q5TefQ%2F9zwSxV1bbovD%2Fvb3%2Bw3ycYJqpRkW5dSS0fjIk3tDvHMJSBtTwl951qIUZmzM9Pp7vlgkcIGhj7zS98g7yeLvsBurkCRn5nrVqw5p41FiFZOAxBTCJzvW8BjqkAb2BkMgiQq92JoJL%2BKTzS2EtiLzixkyPoRgPma0DuUzcKLDsPKSeV%2B6BugYbN3%2FeKQeB2tBtVOmaltdh6FX5RhHYr2wwhaTDndQb7fyNrGiXNNbPWlJWVWzBprjXG86JwipgSdTSIEm6Hsf%2BQ1rWY%2Bg9GlCOnqlkbrdYNf4%2FnFqwIbonLNPGMt9ZW1AnmA8QaCQYIRqd7sLReR3w1UOYH7t1fx%2Fg&X-Amz-Signature=fecae4c6e290559ef5ef1a683ffeb07f0b878902c4026137ac5a9986fc0ce02b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKRPWC6T%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCowuGWWmr3Wrl1lw30zHHFAVSnMuObhSqh2xpu6hGobwIhAMuVuRfj%2Bu4A9c54ZFCd3OJ8xz8lfMIi8JJdS6DyjrVSKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1aCKKDKHiuGMBU4q3AMwvVxFGEGxintxIe4hZDrK%2BKKVhSumXlx%2BK8h5acyP6VDRDg2Tv5JCkXa5U6pQHoxpw%2B6S2Fc7DVrx4fTsXYYiDsBqtnMsfn2LDMa7xiU%2FDBtnZhdNUx4BhkeJqCllJipTKD5v80ZPj4Yja4gUas8w1sG56dvC0Hz4O1%2Fp%2BctDJnGrIaDjuHYNtKL1cuHI0KOpuLsUuG5pw%2BOhc9ConzpIU9SLp%2FJlwYHqOR87r28jahSZRTWGfLR9tq7caYOcRoa3%2FpARuQvuYA%2BiX3s10nJGkCpfoscC%2BNYrse4RPWJrBHWL1dHwlEhMG3YKfHcrjFX42uK1woBEG6AtbT%2FCUh0sQQ1OySGxxXAwrxPwiNnyyeLr2g%2B5lGwDmNlDdGEdYBlUP6VozxGqzeZTFGtd58EymZmyANauiyrMLbEjzZ1aiqkUh8u0gY008giX4R5CzPzS6yaRAS%2FOgRXAAjmsaogoV7Bi2yuEwRGw4%2Fr0RIV%2Bb1uy4XSriHiVZB3rV0Pu7hZqdcM7q5TefQ%2F9zwSxV1bbovD%2Fvb3%2Bw3ycYJqpRkW5dSS0fjIk3tDvHMJSBtTwl951qIUZmzM9Pp7vlgkcIGhj7zS98g7yeLvsBurkCRn5nrVqw5p41FiFZOAxBTCJzvW8BjqkAb2BkMgiQq92JoJL%2BKTzS2EtiLzixkyPoRgPma0DuUzcKLDsPKSeV%2B6BugYbN3%2FeKQeB2tBtVOmaltdh6FX5RhHYr2wwhaTDndQb7fyNrGiXNNbPWlJWVWzBprjXG86JwipgSdTSIEm6Hsf%2BQ1rWY%2Bg9GlCOnqlkbrdYNf4%2FnFqwIbonLNPGMt9ZW1AnmA8QaCQYIRqd7sLReR3w1UOYH7t1fx%2Fg&X-Amz-Signature=1d09da7ad416de2162612cfcc31124bb759357b0eb6317857bf5e5d1b1271bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKRPWC6T%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCowuGWWmr3Wrl1lw30zHHFAVSnMuObhSqh2xpu6hGobwIhAMuVuRfj%2Bu4A9c54ZFCd3OJ8xz8lfMIi8JJdS6DyjrVSKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1aCKKDKHiuGMBU4q3AMwvVxFGEGxintxIe4hZDrK%2BKKVhSumXlx%2BK8h5acyP6VDRDg2Tv5JCkXa5U6pQHoxpw%2B6S2Fc7DVrx4fTsXYYiDsBqtnMsfn2LDMa7xiU%2FDBtnZhdNUx4BhkeJqCllJipTKD5v80ZPj4Yja4gUas8w1sG56dvC0Hz4O1%2Fp%2BctDJnGrIaDjuHYNtKL1cuHI0KOpuLsUuG5pw%2BOhc9ConzpIU9SLp%2FJlwYHqOR87r28jahSZRTWGfLR9tq7caYOcRoa3%2FpARuQvuYA%2BiX3s10nJGkCpfoscC%2BNYrse4RPWJrBHWL1dHwlEhMG3YKfHcrjFX42uK1woBEG6AtbT%2FCUh0sQQ1OySGxxXAwrxPwiNnyyeLr2g%2B5lGwDmNlDdGEdYBlUP6VozxGqzeZTFGtd58EymZmyANauiyrMLbEjzZ1aiqkUh8u0gY008giX4R5CzPzS6yaRAS%2FOgRXAAjmsaogoV7Bi2yuEwRGw4%2Fr0RIV%2Bb1uy4XSriHiVZB3rV0Pu7hZqdcM7q5TefQ%2F9zwSxV1bbovD%2Fvb3%2Bw3ycYJqpRkW5dSS0fjIk3tDvHMJSBtTwl951qIUZmzM9Pp7vlgkcIGhj7zS98g7yeLvsBurkCRn5nrVqw5p41FiFZOAxBTCJzvW8BjqkAb2BkMgiQq92JoJL%2BKTzS2EtiLzixkyPoRgPma0DuUzcKLDsPKSeV%2B6BugYbN3%2FeKQeB2tBtVOmaltdh6FX5RhHYr2wwhaTDndQb7fyNrGiXNNbPWlJWVWzBprjXG86JwipgSdTSIEm6Hsf%2BQ1rWY%2Bg9GlCOnqlkbrdYNf4%2FnFqwIbonLNPGMt9ZW1AnmA8QaCQYIRqd7sLReR3w1UOYH7t1fx%2Fg&X-Amz-Signature=531808864e5cc5ae05d5826749260f0b65aae863ed80bf09f10aa69342e718f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
