---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAA673GI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCcJFzUpIKkp5Y%2FHSxP5a6%2Fb0Q12Qa0x6amErLbN7HArwIgaNewtOxRpGiQx%2Fp0agCNoYkTmUbJFpUMdTU5kUtWU%2BcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9AD0V4HlC5f2hNhyrcA9%2FXLfS3m6cuMuSJQX%2FFG2cZsMnHO9D%2BmU22Y6CYP7LpDau6ydkFol%2BVHR0SAx9uP2j%2FE5u2un%2BRx82pn%2FPQWjkjgZKMyO8XTzO92NPingudjWYfs0qEGEfMl1WD0Xuop7ZM7IBnYIs9CPCZCsX7wmBEguTfI2rXNVY7Q6TLVLQdx67ZobbSsQx6qjFj97EiAatkn2KM2RIa6FsttgOpIEYTsm5frgfqkhbBU4meCgc3%2FfM8GLHXSRHAfU9opnqNxdzJblqfTPwOFWdIPXwPp%2BVgeqT70%2Bv1TZqovsQuu2c9%2FIAw3zj6iO4lHN4DxuDSCbJ0gIx8tXY8b9Np6Cz%2FnSMzMafWZucdmzT1On3P8%2FxJDXoxTlMcM538Vpgt%2BH%2FV1fsq21hToj%2FBzNkk5Xw1w81t8I%2FMTrwBh32V5WBFqembXTY9BZa6Bu6Jn3edqFHTMo7Q6RAKF8CAIVdPX8vse0iw8JTs30itDW10wvNPbtga%2BnvLXIJI187oH%2BSaYVnGfng0Uv9uq%2B9DoTCRRpVAXprTq2ue9m9qVFr4bcaPqrsJsE1TLrLECtTOJXxwZWYrMjf2qgPNSfzHjV0yP2gZ09skhuXcSgHw2HDIz0PoFpkNxZGwgV%2FNawKWkI9iMP36m8cGOqUBtFdHT8pSDRBYajb0RxENXhj1L%2Bm%2FL1PTBrNkg0Ljc0VAV9oKwTjrB2nDXH2XaVXHVFjVhJ9EDt9QcpcQCyDU8CtNwCYXbvf8gMzzNaBXIfibnoLoYeNRCTitb3gF%2FemXKXwRm8BzHn0EFCqGJLia8nv5y4F5G6l7Und1wlDQWMcjbCb4SBjrr%2FQyv6%2B4N4naoCClauMv7%2F9hXey9AIujDey7Dbkr&X-Amz-Signature=6b5ab179229858e8da3e79124bb2c5b2300076370d488ed573daac54fdbd7736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAA673GI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCcJFzUpIKkp5Y%2FHSxP5a6%2Fb0Q12Qa0x6amErLbN7HArwIgaNewtOxRpGiQx%2Fp0agCNoYkTmUbJFpUMdTU5kUtWU%2BcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9AD0V4HlC5f2hNhyrcA9%2FXLfS3m6cuMuSJQX%2FFG2cZsMnHO9D%2BmU22Y6CYP7LpDau6ydkFol%2BVHR0SAx9uP2j%2FE5u2un%2BRx82pn%2FPQWjkjgZKMyO8XTzO92NPingudjWYfs0qEGEfMl1WD0Xuop7ZM7IBnYIs9CPCZCsX7wmBEguTfI2rXNVY7Q6TLVLQdx67ZobbSsQx6qjFj97EiAatkn2KM2RIa6FsttgOpIEYTsm5frgfqkhbBU4meCgc3%2FfM8GLHXSRHAfU9opnqNxdzJblqfTPwOFWdIPXwPp%2BVgeqT70%2Bv1TZqovsQuu2c9%2FIAw3zj6iO4lHN4DxuDSCbJ0gIx8tXY8b9Np6Cz%2FnSMzMafWZucdmzT1On3P8%2FxJDXoxTlMcM538Vpgt%2BH%2FV1fsq21hToj%2FBzNkk5Xw1w81t8I%2FMTrwBh32V5WBFqembXTY9BZa6Bu6Jn3edqFHTMo7Q6RAKF8CAIVdPX8vse0iw8JTs30itDW10wvNPbtga%2BnvLXIJI187oH%2BSaYVnGfng0Uv9uq%2B9DoTCRRpVAXprTq2ue9m9qVFr4bcaPqrsJsE1TLrLECtTOJXxwZWYrMjf2qgPNSfzHjV0yP2gZ09skhuXcSgHw2HDIz0PoFpkNxZGwgV%2FNawKWkI9iMP36m8cGOqUBtFdHT8pSDRBYajb0RxENXhj1L%2Bm%2FL1PTBrNkg0Ljc0VAV9oKwTjrB2nDXH2XaVXHVFjVhJ9EDt9QcpcQCyDU8CtNwCYXbvf8gMzzNaBXIfibnoLoYeNRCTitb3gF%2FemXKXwRm8BzHn0EFCqGJLia8nv5y4F5G6l7Und1wlDQWMcjbCb4SBjrr%2FQyv6%2B4N4naoCClauMv7%2F9hXey9AIujDey7Dbkr&X-Amz-Signature=18856e1cfd7446e584e0e3b52c01eebba2497586ce6c27f81c2f705bd526590e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAA673GI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCcJFzUpIKkp5Y%2FHSxP5a6%2Fb0Q12Qa0x6amErLbN7HArwIgaNewtOxRpGiQx%2Fp0agCNoYkTmUbJFpUMdTU5kUtWU%2BcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9AD0V4HlC5f2hNhyrcA9%2FXLfS3m6cuMuSJQX%2FFG2cZsMnHO9D%2BmU22Y6CYP7LpDau6ydkFol%2BVHR0SAx9uP2j%2FE5u2un%2BRx82pn%2FPQWjkjgZKMyO8XTzO92NPingudjWYfs0qEGEfMl1WD0Xuop7ZM7IBnYIs9CPCZCsX7wmBEguTfI2rXNVY7Q6TLVLQdx67ZobbSsQx6qjFj97EiAatkn2KM2RIa6FsttgOpIEYTsm5frgfqkhbBU4meCgc3%2FfM8GLHXSRHAfU9opnqNxdzJblqfTPwOFWdIPXwPp%2BVgeqT70%2Bv1TZqovsQuu2c9%2FIAw3zj6iO4lHN4DxuDSCbJ0gIx8tXY8b9Np6Cz%2FnSMzMafWZucdmzT1On3P8%2FxJDXoxTlMcM538Vpgt%2BH%2FV1fsq21hToj%2FBzNkk5Xw1w81t8I%2FMTrwBh32V5WBFqembXTY9BZa6Bu6Jn3edqFHTMo7Q6RAKF8CAIVdPX8vse0iw8JTs30itDW10wvNPbtga%2BnvLXIJI187oH%2BSaYVnGfng0Uv9uq%2B9DoTCRRpVAXprTq2ue9m9qVFr4bcaPqrsJsE1TLrLECtTOJXxwZWYrMjf2qgPNSfzHjV0yP2gZ09skhuXcSgHw2HDIz0PoFpkNxZGwgV%2FNawKWkI9iMP36m8cGOqUBtFdHT8pSDRBYajb0RxENXhj1L%2Bm%2FL1PTBrNkg0Ljc0VAV9oKwTjrB2nDXH2XaVXHVFjVhJ9EDt9QcpcQCyDU8CtNwCYXbvf8gMzzNaBXIfibnoLoYeNRCTitb3gF%2FemXKXwRm8BzHn0EFCqGJLia8nv5y4F5G6l7Und1wlDQWMcjbCb4SBjrr%2FQyv6%2B4N4naoCClauMv7%2F9hXey9AIujDey7Dbkr&X-Amz-Signature=91338a65e420c14e87fd624a344325cf9f4d6d33fb0f1f49fbc468d9084e2721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
