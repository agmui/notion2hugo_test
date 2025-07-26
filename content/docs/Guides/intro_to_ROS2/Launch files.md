---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZFPAUR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDVFvdQk4QfMrkYh%2BkbzGUuKynZRkpcjO29UVfy0qbmPwIgVoxNma6tSPvBrjunOuiEB8pnySGVDcSdiGeEuviANNIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENR84JOC6tLhENeQSrcA%2BYHXruLxyKLRU1%2F8VEhyAlRs6kumBbOjPc6z8bLHD0aH2fBAclPxz%2ByaNyt5FuQeK46foJ4EV8z0WjxVvl%2BAZvkWWK0B%2FRMnViHX%2BVlFAQ0W8foLCgwUo6E3uUw1%2FCEOqDfGweftGH6Knum7r8rKo%2BFZQ%2BV2hVBhoPqpvhEBX1U0VvUN9bUwq0UCYoW6TdY7i6h0FcuiRROMYUimkNdulwzyUbGP%2F%2FvJi00Se%2BvfZcbusJEJLpxwfzStDBuXav6a1ynedYaotKwffZshyFmmxbjyf9LNRyKB2TURxXgaHWAdSy9hDmxU6l%2B7%2BkP7OWYF%2BrN7pe%2FF5HuhxQaC6qs1zYb0clK9QVvT00LB3Nerue%2FFtyEHZeM6pz7jrCJ6BiRR1bq7ujp9CDS9SrxLTnFlF69S2Av7sqQBN7QFZWbc6sAQOVouz0kDA6tvpi1df4MjoFoq%2Fgi30VFHUbdoEfz85cfx9sUt3QcnENT8RiNLKgaVV%2FTpwnuJXa%2BIIjPJfyEQWTnKxhb4HepXZdk9vQLKj8Xd499bN81pZYeNwPnxOnQRvzldhlB2wbgydNPSw%2FBs7AMqKHbjQC6Xq67MkOukgXq9wAzelRn6APxfnKzivveyn1KCzGiJQb2ZeQvMK6rksQGOqUByy76x0mcb0Qn%2BSlgBj7qVL5sezBD1b0g4s46oQl9qA%2BZmQ6WklMe1Lxc9AY484Fpoi%2F9XrxSNLECJTvSpezT5758iWjlS8MFZR%2FamWAMxtNyPRFPyWw%2B73NZFWivBooIj%2BHBvhZ3NMpKczIV7Nn1hwp%2BYX4uZjXRPM7hy3Iv%2B%2BLrK4kh1nOL%2BdWUtkMWLdHuCY0wS0pdtgx12HUbYVw533BimXhk&X-Amz-Signature=dd86e771d8560d7b7b237ecf6ca7c6009ecd2869c3f04c47253c117ab25c0693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZFPAUR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDVFvdQk4QfMrkYh%2BkbzGUuKynZRkpcjO29UVfy0qbmPwIgVoxNma6tSPvBrjunOuiEB8pnySGVDcSdiGeEuviANNIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENR84JOC6tLhENeQSrcA%2BYHXruLxyKLRU1%2F8VEhyAlRs6kumBbOjPc6z8bLHD0aH2fBAclPxz%2ByaNyt5FuQeK46foJ4EV8z0WjxVvl%2BAZvkWWK0B%2FRMnViHX%2BVlFAQ0W8foLCgwUo6E3uUw1%2FCEOqDfGweftGH6Knum7r8rKo%2BFZQ%2BV2hVBhoPqpvhEBX1U0VvUN9bUwq0UCYoW6TdY7i6h0FcuiRROMYUimkNdulwzyUbGP%2F%2FvJi00Se%2BvfZcbusJEJLpxwfzStDBuXav6a1ynedYaotKwffZshyFmmxbjyf9LNRyKB2TURxXgaHWAdSy9hDmxU6l%2B7%2BkP7OWYF%2BrN7pe%2FF5HuhxQaC6qs1zYb0clK9QVvT00LB3Nerue%2FFtyEHZeM6pz7jrCJ6BiRR1bq7ujp9CDS9SrxLTnFlF69S2Av7sqQBN7QFZWbc6sAQOVouz0kDA6tvpi1df4MjoFoq%2Fgi30VFHUbdoEfz85cfx9sUt3QcnENT8RiNLKgaVV%2FTpwnuJXa%2BIIjPJfyEQWTnKxhb4HepXZdk9vQLKj8Xd499bN81pZYeNwPnxOnQRvzldhlB2wbgydNPSw%2FBs7AMqKHbjQC6Xq67MkOukgXq9wAzelRn6APxfnKzivveyn1KCzGiJQb2ZeQvMK6rksQGOqUByy76x0mcb0Qn%2BSlgBj7qVL5sezBD1b0g4s46oQl9qA%2BZmQ6WklMe1Lxc9AY484Fpoi%2F9XrxSNLECJTvSpezT5758iWjlS8MFZR%2FamWAMxtNyPRFPyWw%2B73NZFWivBooIj%2BHBvhZ3NMpKczIV7Nn1hwp%2BYX4uZjXRPM7hy3Iv%2B%2BLrK4kh1nOL%2BdWUtkMWLdHuCY0wS0pdtgx12HUbYVw533BimXhk&X-Amz-Signature=d2b3bf891c29ba4d35d2434fc7097f75405a0c24acd96f128012e409870c6331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRZFPAUR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDVFvdQk4QfMrkYh%2BkbzGUuKynZRkpcjO29UVfy0qbmPwIgVoxNma6tSPvBrjunOuiEB8pnySGVDcSdiGeEuviANNIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENR84JOC6tLhENeQSrcA%2BYHXruLxyKLRU1%2F8VEhyAlRs6kumBbOjPc6z8bLHD0aH2fBAclPxz%2ByaNyt5FuQeK46foJ4EV8z0WjxVvl%2BAZvkWWK0B%2FRMnViHX%2BVlFAQ0W8foLCgwUo6E3uUw1%2FCEOqDfGweftGH6Knum7r8rKo%2BFZQ%2BV2hVBhoPqpvhEBX1U0VvUN9bUwq0UCYoW6TdY7i6h0FcuiRROMYUimkNdulwzyUbGP%2F%2FvJi00Se%2BvfZcbusJEJLpxwfzStDBuXav6a1ynedYaotKwffZshyFmmxbjyf9LNRyKB2TURxXgaHWAdSy9hDmxU6l%2B7%2BkP7OWYF%2BrN7pe%2FF5HuhxQaC6qs1zYb0clK9QVvT00LB3Nerue%2FFtyEHZeM6pz7jrCJ6BiRR1bq7ujp9CDS9SrxLTnFlF69S2Av7sqQBN7QFZWbc6sAQOVouz0kDA6tvpi1df4MjoFoq%2Fgi30VFHUbdoEfz85cfx9sUt3QcnENT8RiNLKgaVV%2FTpwnuJXa%2BIIjPJfyEQWTnKxhb4HepXZdk9vQLKj8Xd499bN81pZYeNwPnxOnQRvzldhlB2wbgydNPSw%2FBs7AMqKHbjQC6Xq67MkOukgXq9wAzelRn6APxfnKzivveyn1KCzGiJQb2ZeQvMK6rksQGOqUByy76x0mcb0Qn%2BSlgBj7qVL5sezBD1b0g4s46oQl9qA%2BZmQ6WklMe1Lxc9AY484Fpoi%2F9XrxSNLECJTvSpezT5758iWjlS8MFZR%2FamWAMxtNyPRFPyWw%2B73NZFWivBooIj%2BHBvhZ3NMpKczIV7Nn1hwp%2BYX4uZjXRPM7hy3Iv%2B%2BLrK4kh1nOL%2BdWUtkMWLdHuCY0wS0pdtgx12HUbYVw533BimXhk&X-Amz-Signature=799c84dd9f9956b6c9c1f5feb859f6c72954a3b20d2cd10df7e3cd1d67bb4a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
