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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DA277N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjsFhEVK1fVKPoBTNe3amINljWXXSalJ8VAK0bnixKEAiAOsVg1gpC%2F6kOwy%2BVsfwVWEczkWU%2FGhn8YHPQyO67KYSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmzaDQDOznGPJMizKtwDsCkPUQZvaQCYBORChxt9L8g2VGR1snLQo8aXUHcKl0R0fZ38CowyhjSYtNUkvR5Emo8goPD%2FbmpY2MzyFvAR9Jl%2Fntmw%2FMfiIbNFEbea9hUeXqL1pv0FMxsZdHfeiwDeFJU%2FXC7JQjYQjoHmjZzIc6y8rlYeTq6ypzMKX81umHUFifKF9ywu2soSggsrkWkudK75QIb5FZQZGx5yJjg4rpU2P4%2Bh5p%2BL%2Fvr11hna3hBv%2BRzA90i9aLpwCn1vsl%2BmqqA45q5i4pJiyKXeLILVUlGdGM1kOUmVBXEI%2FR0WUY4C7KxxT%2FxmTTkf1TVFNzxBCGROpTzY73nUJtmGo9WJ%2F3y4lqcAUMmhqGVYAq443YC5BKBtrHQkPR8PhZkdHECKSw7vJ3QeflEWN3m7%2Bsy7GN0ZEiWG%2FhnO9%2BMqVYaI3d0AxLr0xXyxNed4fZqRqSCeCRpP4NSI6ILkE6gqB6NS2A%2FVdPQ1fx2mBecpjYZ6GqU%2BnKxEq5k0lLq6Sm69MIW%2B6H39nXRx%2F7OfJWYsmejPzXqLd8fzafD8HIYLL%2BfDCNZdxK%2BmzIUR13G0jzCULinrD0E6Y0L%2Bd2wAgyJae0D6hlgWZJrFYCGbA0Jwy%2B6SB08IWN%2FKnCHWy7SO0q4w5KHIwwY6pgG3pr4bLvAzOy6MKFBC%2Fs%2FZjdC3N50x1grPW%2BNH09VN3pjLaYUf1vUSLtVWmni2DrfrW9iz0%2BUCJXKcnPUvFGBy5UJLfXv6IVpU8%2Fzl5BnqMkdrL774ZgnfFVOU52yquqHJ8KDuk2eKkUOoA6aB0lS8JlesBMXtyo5lZKopnQ6qpwxEwCLAxqlDCZ6VAKl3NbtIXFwv5RLlSrRh0E3kyNDAzakFuPaw&X-Amz-Signature=3ea0e298884e26a3ccba2b06ad6d37067c50aa00f0081db6de271f28d05fffe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DA277N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjsFhEVK1fVKPoBTNe3amINljWXXSalJ8VAK0bnixKEAiAOsVg1gpC%2F6kOwy%2BVsfwVWEczkWU%2FGhn8YHPQyO67KYSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmzaDQDOznGPJMizKtwDsCkPUQZvaQCYBORChxt9L8g2VGR1snLQo8aXUHcKl0R0fZ38CowyhjSYtNUkvR5Emo8goPD%2FbmpY2MzyFvAR9Jl%2Fntmw%2FMfiIbNFEbea9hUeXqL1pv0FMxsZdHfeiwDeFJU%2FXC7JQjYQjoHmjZzIc6y8rlYeTq6ypzMKX81umHUFifKF9ywu2soSggsrkWkudK75QIb5FZQZGx5yJjg4rpU2P4%2Bh5p%2BL%2Fvr11hna3hBv%2BRzA90i9aLpwCn1vsl%2BmqqA45q5i4pJiyKXeLILVUlGdGM1kOUmVBXEI%2FR0WUY4C7KxxT%2FxmTTkf1TVFNzxBCGROpTzY73nUJtmGo9WJ%2F3y4lqcAUMmhqGVYAq443YC5BKBtrHQkPR8PhZkdHECKSw7vJ3QeflEWN3m7%2Bsy7GN0ZEiWG%2FhnO9%2BMqVYaI3d0AxLr0xXyxNed4fZqRqSCeCRpP4NSI6ILkE6gqB6NS2A%2FVdPQ1fx2mBecpjYZ6GqU%2BnKxEq5k0lLq6Sm69MIW%2B6H39nXRx%2F7OfJWYsmejPzXqLd8fzafD8HIYLL%2BfDCNZdxK%2BmzIUR13G0jzCULinrD0E6Y0L%2Bd2wAgyJae0D6hlgWZJrFYCGbA0Jwy%2B6SB08IWN%2FKnCHWy7SO0q4w5KHIwwY6pgG3pr4bLvAzOy6MKFBC%2Fs%2FZjdC3N50x1grPW%2BNH09VN3pjLaYUf1vUSLtVWmni2DrfrW9iz0%2BUCJXKcnPUvFGBy5UJLfXv6IVpU8%2Fzl5BnqMkdrL774ZgnfFVOU52yquqHJ8KDuk2eKkUOoA6aB0lS8JlesBMXtyo5lZKopnQ6qpwxEwCLAxqlDCZ6VAKl3NbtIXFwv5RLlSrRh0E3kyNDAzakFuPaw&X-Amz-Signature=9139d14e4f6f021e3b6357d454a30908f4aed8ba6a62b34f5352fe517a8e0a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DA277N%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjsFhEVK1fVKPoBTNe3amINljWXXSalJ8VAK0bnixKEAiAOsVg1gpC%2F6kOwy%2BVsfwVWEczkWU%2FGhn8YHPQyO67KYSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmzaDQDOznGPJMizKtwDsCkPUQZvaQCYBORChxt9L8g2VGR1snLQo8aXUHcKl0R0fZ38CowyhjSYtNUkvR5Emo8goPD%2FbmpY2MzyFvAR9Jl%2Fntmw%2FMfiIbNFEbea9hUeXqL1pv0FMxsZdHfeiwDeFJU%2FXC7JQjYQjoHmjZzIc6y8rlYeTq6ypzMKX81umHUFifKF9ywu2soSggsrkWkudK75QIb5FZQZGx5yJjg4rpU2P4%2Bh5p%2BL%2Fvr11hna3hBv%2BRzA90i9aLpwCn1vsl%2BmqqA45q5i4pJiyKXeLILVUlGdGM1kOUmVBXEI%2FR0WUY4C7KxxT%2FxmTTkf1TVFNzxBCGROpTzY73nUJtmGo9WJ%2F3y4lqcAUMmhqGVYAq443YC5BKBtrHQkPR8PhZkdHECKSw7vJ3QeflEWN3m7%2Bsy7GN0ZEiWG%2FhnO9%2BMqVYaI3d0AxLr0xXyxNed4fZqRqSCeCRpP4NSI6ILkE6gqB6NS2A%2FVdPQ1fx2mBecpjYZ6GqU%2BnKxEq5k0lLq6Sm69MIW%2B6H39nXRx%2F7OfJWYsmejPzXqLd8fzafD8HIYLL%2BfDCNZdxK%2BmzIUR13G0jzCULinrD0E6Y0L%2Bd2wAgyJae0D6hlgWZJrFYCGbA0Jwy%2B6SB08IWN%2FKnCHWy7SO0q4w5KHIwwY6pgG3pr4bLvAzOy6MKFBC%2Fs%2FZjdC3N50x1grPW%2BNH09VN3pjLaYUf1vUSLtVWmni2DrfrW9iz0%2BUCJXKcnPUvFGBy5UJLfXv6IVpU8%2Fzl5BnqMkdrL774ZgnfFVOU52yquqHJ8KDuk2eKkUOoA6aB0lS8JlesBMXtyo5lZKopnQ6qpwxEwCLAxqlDCZ6VAKl3NbtIXFwv5RLlSrRh0E3kyNDAzakFuPaw&X-Amz-Signature=bee45758e8a7b4520f05b2563a340c52bba7855c24484fe1bba3686eab75eb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
