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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRXYOL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDgH%2BJv3CkYEXqtELUZ25NrDRnXR29dTzQkawefm71NRQIgTTtLHMhHesvglethbq9iksvZgihHma0FBe2pZZpp8uAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8sI%2FU4YQAhYlyd%2FyrcAyoc5FlNMqh6WTQgN8klL1UAk63p9Fw1KAW7u5VISSRG%2Fp8l83%2BPKP7y3vCtES8qvhD3G%2FmRHmsBP%2BTzlGCQgk4RUo%2FMt2GLjANFcBrdcrbP%2BVqyCwpI7IFNb4eFM30nyOTNwXm7QHpFU8M46V%2FD7wOnQde9xiPGNM%2F4eVX88knEc5w3PA6n5H8kXLvNK3xR1lUyTAPFneioppL3lyCBuGfyDfRisri%2Fp4LP8FyxfaENj%2BjMrDEEwZQ4dzMwJCefg3I8aBVgD%2F9xjglKKdc%2BUX1aAn9c%2BLcSKsuOMGxUVhlV1kMnAiPETlQe2woh9S%2B%2BlTUTMMm%2F9gDNfg8mGTrFFkLCtg5Jdu4VUOKTsSlnLRlJmBlHb8%2BCqpJfqTe7lgHf7pgxmoOd6YmxsFP%2F47mOLgw9iyyWdqdUHEO1LO8pIXfqHyvf%2F%2BXEC95iLiFDLqko6ah8F%2BaeYNOL%2BgfUj0zshXw2yrijwe67AaASdVDfIsw1s%2Fui9hKLCN1vNQiKcxIosezBE3rfaLizGRG4lzsHWYtD05sl5Tj8NUFdpEniztITN9PXpgFIJds1BJC8F8YPxOZHGAw8XARNPz43jLCIcj39MgRAkR0YLnt4tJWd68cjQSbowgoIInxR3OyRMN%2FZy8AGOqUBA9VnspJbUbPnhDc5cJVCJxP%2FxqNSBsb0RNZ3zZXkBtYdE5rrfYEIXY6vZ%2F2nwmL5m6ry3JCkeRFjpRDfNbIsnuCRGeye3npuhdaI8BfPydBKVikjoN2zRx%2F1H5UvCNJS9ajx58SBO2N0F%2BCahfYRtH3r3mptuwFbT83sFBiTPKQPD00tDwLXnNP6M7Jcu17WGZ873TD48GncpGKylZ71UipLyqDN&X-Amz-Signature=d76ef1195d9122beef89a031d2950bc8a3d71465a35be6538de6806db392b095&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRXYOL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDgH%2BJv3CkYEXqtELUZ25NrDRnXR29dTzQkawefm71NRQIgTTtLHMhHesvglethbq9iksvZgihHma0FBe2pZZpp8uAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8sI%2FU4YQAhYlyd%2FyrcAyoc5FlNMqh6WTQgN8klL1UAk63p9Fw1KAW7u5VISSRG%2Fp8l83%2BPKP7y3vCtES8qvhD3G%2FmRHmsBP%2BTzlGCQgk4RUo%2FMt2GLjANFcBrdcrbP%2BVqyCwpI7IFNb4eFM30nyOTNwXm7QHpFU8M46V%2FD7wOnQde9xiPGNM%2F4eVX88knEc5w3PA6n5H8kXLvNK3xR1lUyTAPFneioppL3lyCBuGfyDfRisri%2Fp4LP8FyxfaENj%2BjMrDEEwZQ4dzMwJCefg3I8aBVgD%2F9xjglKKdc%2BUX1aAn9c%2BLcSKsuOMGxUVhlV1kMnAiPETlQe2woh9S%2B%2BlTUTMMm%2F9gDNfg8mGTrFFkLCtg5Jdu4VUOKTsSlnLRlJmBlHb8%2BCqpJfqTe7lgHf7pgxmoOd6YmxsFP%2F47mOLgw9iyyWdqdUHEO1LO8pIXfqHyvf%2F%2BXEC95iLiFDLqko6ah8F%2BaeYNOL%2BgfUj0zshXw2yrijwe67AaASdVDfIsw1s%2Fui9hKLCN1vNQiKcxIosezBE3rfaLizGRG4lzsHWYtD05sl5Tj8NUFdpEniztITN9PXpgFIJds1BJC8F8YPxOZHGAw8XARNPz43jLCIcj39MgRAkR0YLnt4tJWd68cjQSbowgoIInxR3OyRMN%2FZy8AGOqUBA9VnspJbUbPnhDc5cJVCJxP%2FxqNSBsb0RNZ3zZXkBtYdE5rrfYEIXY6vZ%2F2nwmL5m6ry3JCkeRFjpRDfNbIsnuCRGeye3npuhdaI8BfPydBKVikjoN2zRx%2F1H5UvCNJS9ajx58SBO2N0F%2BCahfYRtH3r3mptuwFbT83sFBiTPKQPD00tDwLXnNP6M7Jcu17WGZ873TD48GncpGKylZ71UipLyqDN&X-Amz-Signature=4a36790a35213e9295fa6ceba591dfb6de5f4a4444562332ff1b3359c2207571&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRXYOL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDgH%2BJv3CkYEXqtELUZ25NrDRnXR29dTzQkawefm71NRQIgTTtLHMhHesvglethbq9iksvZgihHma0FBe2pZZpp8uAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8sI%2FU4YQAhYlyd%2FyrcAyoc5FlNMqh6WTQgN8klL1UAk63p9Fw1KAW7u5VISSRG%2Fp8l83%2BPKP7y3vCtES8qvhD3G%2FmRHmsBP%2BTzlGCQgk4RUo%2FMt2GLjANFcBrdcrbP%2BVqyCwpI7IFNb4eFM30nyOTNwXm7QHpFU8M46V%2FD7wOnQde9xiPGNM%2F4eVX88knEc5w3PA6n5H8kXLvNK3xR1lUyTAPFneioppL3lyCBuGfyDfRisri%2Fp4LP8FyxfaENj%2BjMrDEEwZQ4dzMwJCefg3I8aBVgD%2F9xjglKKdc%2BUX1aAn9c%2BLcSKsuOMGxUVhlV1kMnAiPETlQe2woh9S%2B%2BlTUTMMm%2F9gDNfg8mGTrFFkLCtg5Jdu4VUOKTsSlnLRlJmBlHb8%2BCqpJfqTe7lgHf7pgxmoOd6YmxsFP%2F47mOLgw9iyyWdqdUHEO1LO8pIXfqHyvf%2F%2BXEC95iLiFDLqko6ah8F%2BaeYNOL%2BgfUj0zshXw2yrijwe67AaASdVDfIsw1s%2Fui9hKLCN1vNQiKcxIosezBE3rfaLizGRG4lzsHWYtD05sl5Tj8NUFdpEniztITN9PXpgFIJds1BJC8F8YPxOZHGAw8XARNPz43jLCIcj39MgRAkR0YLnt4tJWd68cjQSbowgoIInxR3OyRMN%2FZy8AGOqUBA9VnspJbUbPnhDc5cJVCJxP%2FxqNSBsb0RNZ3zZXkBtYdE5rrfYEIXY6vZ%2F2nwmL5m6ry3JCkeRFjpRDfNbIsnuCRGeye3npuhdaI8BfPydBKVikjoN2zRx%2F1H5UvCNJS9ajx58SBO2N0F%2BCahfYRtH3r3mptuwFbT83sFBiTPKQPD00tDwLXnNP6M7Jcu17WGZ873TD48GncpGKylZ71UipLyqDN&X-Amz-Signature=1a647b84d6bb5ab8987d7fbee804b43835363024ac34cf3a12235b90e177f683&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
