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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KT6KZ5I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGxLlGQMmL7saKYc5%2F3cOlUJRUEpeJENqEZ6wC5uu8ewIgEBFAAewJZK5kwvTP9BNpCLxuktUE4LC77TdY5Jq7Ib8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHps1Ni%2FVOOTDzOLxCrcA2NV%2BDRNmfHYu%2Fa%2FGaV0erMKTwnb2nREe0fIxwJ3x7bqWVBycRKp9lOpcUltTH656j8nBvFAFfNCj0Fv9EY4iSCf%2BPulPwIopERInl%2FxDIwCE4WIk9exdt3RmuRHZFMMeP6pjIoI4IBWglYoSC69BX6H0RRcIWvnbKVqX1aBUy%2FEuw9x4CL5FokJK8ukd4%2FIkDC6O6McI%2F%2FOrU%2FcQJaBarbugFOVPuTidmOiiFK36moSlW0QzulvDP%2BMB4dhCFU%2BmW96yk4xXaLdFYlYmkT9Stln70PEko8G4L3298ubCEBczrW8WtPCZ%2FzC5Kn2gl%2FWttztCaPfuUCkpOmoMjFXT4SjFthKHOJx5vmpJ1mas99lqfsFcFvoYbRqvm7V89sBMnvtBQnkLQlu15zX0KajAtYNKMb%2F8ndGfxZfMiY1BmMcmB47sHXICa%2FA8IwHBG7C8F%2F%2FUFDUkLQgCqXggxVO%2F6g%2FnhV3J7WWeuWXAaOKJrJBZ8AgHSlObGO%2FborEVkI2RCE%2BFB8LFQO5JIVhGtNaPSi1kWKZxHBHjsFq3mbI%2BANvE15hFWKwHpfXiGUnmYYflzzeoEOZ1IJ%2B7hJ%2Fao9o%2FUoNejT3%2FTwAP4ugwX3c6jJN13brUvY7FwpPjUfCMOeTisAGOqUBgDBsqXwOtbA7tXqaVwTMgctUw6ugV80Umd5bYbUjWCYjFLujYMVUpugmtfCDesQCBKx0EVvxiIO9%2Bocg3oruvIRIO2F8YikCIxTS44Pby8OC3X020OChWdu06kPUiYFYp8e4%2F%2BUk8Zcwu1EfDEUfExkxGX0Wmh%2FEhzIV1%2B5SRTQV3XZnQi%2F7w9eXM2EMk4hly%2Fzr6KVmJgpN57ThXhF0bEnLEijW&X-Amz-Signature=88a37c37744ae6ec169ee710e13cd0779106096d7b25a25ac5f7bf1061c03283&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KT6KZ5I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGxLlGQMmL7saKYc5%2F3cOlUJRUEpeJENqEZ6wC5uu8ewIgEBFAAewJZK5kwvTP9BNpCLxuktUE4LC77TdY5Jq7Ib8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHps1Ni%2FVOOTDzOLxCrcA2NV%2BDRNmfHYu%2Fa%2FGaV0erMKTwnb2nREe0fIxwJ3x7bqWVBycRKp9lOpcUltTH656j8nBvFAFfNCj0Fv9EY4iSCf%2BPulPwIopERInl%2FxDIwCE4WIk9exdt3RmuRHZFMMeP6pjIoI4IBWglYoSC69BX6H0RRcIWvnbKVqX1aBUy%2FEuw9x4CL5FokJK8ukd4%2FIkDC6O6McI%2F%2FOrU%2FcQJaBarbugFOVPuTidmOiiFK36moSlW0QzulvDP%2BMB4dhCFU%2BmW96yk4xXaLdFYlYmkT9Stln70PEko8G4L3298ubCEBczrW8WtPCZ%2FzC5Kn2gl%2FWttztCaPfuUCkpOmoMjFXT4SjFthKHOJx5vmpJ1mas99lqfsFcFvoYbRqvm7V89sBMnvtBQnkLQlu15zX0KajAtYNKMb%2F8ndGfxZfMiY1BmMcmB47sHXICa%2FA8IwHBG7C8F%2F%2FUFDUkLQgCqXggxVO%2F6g%2FnhV3J7WWeuWXAaOKJrJBZ8AgHSlObGO%2FborEVkI2RCE%2BFB8LFQO5JIVhGtNaPSi1kWKZxHBHjsFq3mbI%2BANvE15hFWKwHpfXiGUnmYYflzzeoEOZ1IJ%2B7hJ%2Fao9o%2FUoNejT3%2FTwAP4ugwX3c6jJN13brUvY7FwpPjUfCMOeTisAGOqUBgDBsqXwOtbA7tXqaVwTMgctUw6ugV80Umd5bYbUjWCYjFLujYMVUpugmtfCDesQCBKx0EVvxiIO9%2Bocg3oruvIRIO2F8YikCIxTS44Pby8OC3X020OChWdu06kPUiYFYp8e4%2F%2BUk8Zcwu1EfDEUfExkxGX0Wmh%2FEhzIV1%2B5SRTQV3XZnQi%2F7w9eXM2EMk4hly%2Fzr6KVmJgpN57ThXhF0bEnLEijW&X-Amz-Signature=d8d873bb0c23ffa3247a791c0c24c0ce91afca58a4bc91d877db90ed8b6787f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KT6KZ5I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGxLlGQMmL7saKYc5%2F3cOlUJRUEpeJENqEZ6wC5uu8ewIgEBFAAewJZK5kwvTP9BNpCLxuktUE4LC77TdY5Jq7Ib8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHps1Ni%2FVOOTDzOLxCrcA2NV%2BDRNmfHYu%2Fa%2FGaV0erMKTwnb2nREe0fIxwJ3x7bqWVBycRKp9lOpcUltTH656j8nBvFAFfNCj0Fv9EY4iSCf%2BPulPwIopERInl%2FxDIwCE4WIk9exdt3RmuRHZFMMeP6pjIoI4IBWglYoSC69BX6H0RRcIWvnbKVqX1aBUy%2FEuw9x4CL5FokJK8ukd4%2FIkDC6O6McI%2F%2FOrU%2FcQJaBarbugFOVPuTidmOiiFK36moSlW0QzulvDP%2BMB4dhCFU%2BmW96yk4xXaLdFYlYmkT9Stln70PEko8G4L3298ubCEBczrW8WtPCZ%2FzC5Kn2gl%2FWttztCaPfuUCkpOmoMjFXT4SjFthKHOJx5vmpJ1mas99lqfsFcFvoYbRqvm7V89sBMnvtBQnkLQlu15zX0KajAtYNKMb%2F8ndGfxZfMiY1BmMcmB47sHXICa%2FA8IwHBG7C8F%2F%2FUFDUkLQgCqXggxVO%2F6g%2FnhV3J7WWeuWXAaOKJrJBZ8AgHSlObGO%2FborEVkI2RCE%2BFB8LFQO5JIVhGtNaPSi1kWKZxHBHjsFq3mbI%2BANvE15hFWKwHpfXiGUnmYYflzzeoEOZ1IJ%2B7hJ%2Fao9o%2FUoNejT3%2FTwAP4ugwX3c6jJN13brUvY7FwpPjUfCMOeTisAGOqUBgDBsqXwOtbA7tXqaVwTMgctUw6ugV80Umd5bYbUjWCYjFLujYMVUpugmtfCDesQCBKx0EVvxiIO9%2Bocg3oruvIRIO2F8YikCIxTS44Pby8OC3X020OChWdu06kPUiYFYp8e4%2F%2BUk8Zcwu1EfDEUfExkxGX0Wmh%2FEhzIV1%2B5SRTQV3XZnQi%2F7w9eXM2EMk4hly%2Fzr6KVmJgpN57ThXhF0bEnLEijW&X-Amz-Signature=3506d90d6624ee79ce351f1f132b78746a5207cbdbfefcd5b63f0e39f99ec477&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
