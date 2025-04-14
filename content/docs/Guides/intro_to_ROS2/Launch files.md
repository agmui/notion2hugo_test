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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DOPPSA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZAxrbm9B4%2BH3lkv0AaFVGvpyN2rgKQy7WbckyfnlGuAiASqj6bpZ%2BkJK4Kf20ybYcksrRJsTJWx7W7yvvKnG%2BSfCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMutE6G7KFnQIztbARKtwDWfrkxq%2Bed7gBpgzsav8Lp2JrefSnm3qDUum87VGuI46xbaIHeEPJ39ex1RbWCh%2FwS098YckOf35eqgV6qGcs1EGmu7KKYHMiMbjVXFSbdTGms0wsxpULNI23lrHHMOENY%2BcG%2FSnYc9hQCNicp2Q%2Bzeg9P6G3P%2FGMsrj8hSvPiUAxr40yUpaHS1R916YPDXTIlmR8%2BigOg%2BlVtwzSQyg3w16HeFgQOMoqG4ywqPWPLHOjhPgG1GcCqA1S4f2%2Fh2KsmznT5fYmWMhMcFQiOu68J9qwo7zOxpl6dJzTesXZA8pibrOo33KvI3z73IrOtQAeOWHPgxyJ1IFvxod79N%2FNpMKSO9fwsrzjm1XUejsToI7aaVn3xURTjLzn%2F4lgQ35RbZnBEnwvwmHFUdAzveM%2F9jyuUvBUo6aeowNmXJ7YqHGCmbwdXLOu2qCO9v9siZ3sTLYflbmVh%2BSfB7VmdU15bFgjLRT%2BoE6yBIdQFhchX%2BunRnyvYuXY5%2FGzhu%2BxGUK3uOqCJtsSQ6oxmZfXWkn%2Bm7IBNx4q%2BQQS9h9oUzOOkNDutmSg6aO7TSlGZv%2FVaGGmIKRhhTQc%2Fc2Y6Bj2HMK%2B6O0dwd0FE%2BFzqpl0ai8ZUYvA99ps%2FnAoj%2Fid7DQw1Jv2vwY6pgGk7cYnRiF7C9BaizFAYNaNdfFfXtcyQ8v3Dz0GjqRJJ3ee2sFAEn0dhzUVFH8pQXK7OEyKYnT566uSAQsBd0Bn9Ff99hhnXRuZxX5dsE3kdJFjNoNOq%2Fu%2FS6Y7vKI%2Bm%2FAwY2Z%2BiH00wAnBduau1YNqrVOw%2BpEXFVznxYeqNFr1D6eDSKxc%2FrLmYSEDPoyrSzcHF4U7F2GfUbc3Afuu7Kf%2BZ9pLKRtp&X-Amz-Signature=271724c66049aeeaf8be8f15134cb05ab4c4e470334c8605ac9c4cdfe389406b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DOPPSA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZAxrbm9B4%2BH3lkv0AaFVGvpyN2rgKQy7WbckyfnlGuAiASqj6bpZ%2BkJK4Kf20ybYcksrRJsTJWx7W7yvvKnG%2BSfCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMutE6G7KFnQIztbARKtwDWfrkxq%2Bed7gBpgzsav8Lp2JrefSnm3qDUum87VGuI46xbaIHeEPJ39ex1RbWCh%2FwS098YckOf35eqgV6qGcs1EGmu7KKYHMiMbjVXFSbdTGms0wsxpULNI23lrHHMOENY%2BcG%2FSnYc9hQCNicp2Q%2Bzeg9P6G3P%2FGMsrj8hSvPiUAxr40yUpaHS1R916YPDXTIlmR8%2BigOg%2BlVtwzSQyg3w16HeFgQOMoqG4ywqPWPLHOjhPgG1GcCqA1S4f2%2Fh2KsmznT5fYmWMhMcFQiOu68J9qwo7zOxpl6dJzTesXZA8pibrOo33KvI3z73IrOtQAeOWHPgxyJ1IFvxod79N%2FNpMKSO9fwsrzjm1XUejsToI7aaVn3xURTjLzn%2F4lgQ35RbZnBEnwvwmHFUdAzveM%2F9jyuUvBUo6aeowNmXJ7YqHGCmbwdXLOu2qCO9v9siZ3sTLYflbmVh%2BSfB7VmdU15bFgjLRT%2BoE6yBIdQFhchX%2BunRnyvYuXY5%2FGzhu%2BxGUK3uOqCJtsSQ6oxmZfXWkn%2Bm7IBNx4q%2BQQS9h9oUzOOkNDutmSg6aO7TSlGZv%2FVaGGmIKRhhTQc%2Fc2Y6Bj2HMK%2B6O0dwd0FE%2BFzqpl0ai8ZUYvA99ps%2FnAoj%2Fid7DQw1Jv2vwY6pgGk7cYnRiF7C9BaizFAYNaNdfFfXtcyQ8v3Dz0GjqRJJ3ee2sFAEn0dhzUVFH8pQXK7OEyKYnT566uSAQsBd0Bn9Ff99hhnXRuZxX5dsE3kdJFjNoNOq%2Fu%2FS6Y7vKI%2Bm%2FAwY2Z%2BiH00wAnBduau1YNqrVOw%2BpEXFVznxYeqNFr1D6eDSKxc%2FrLmYSEDPoyrSzcHF4U7F2GfUbc3Afuu7Kf%2BZ9pLKRtp&X-Amz-Signature=0e34a132b05a8d5dd9e0f3828dcee053eb3faae29bdebbfe4715c87b77e46795&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DOPPSA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZAxrbm9B4%2BH3lkv0AaFVGvpyN2rgKQy7WbckyfnlGuAiASqj6bpZ%2BkJK4Kf20ybYcksrRJsTJWx7W7yvvKnG%2BSfCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMutE6G7KFnQIztbARKtwDWfrkxq%2Bed7gBpgzsav8Lp2JrefSnm3qDUum87VGuI46xbaIHeEPJ39ex1RbWCh%2FwS098YckOf35eqgV6qGcs1EGmu7KKYHMiMbjVXFSbdTGms0wsxpULNI23lrHHMOENY%2BcG%2FSnYc9hQCNicp2Q%2Bzeg9P6G3P%2FGMsrj8hSvPiUAxr40yUpaHS1R916YPDXTIlmR8%2BigOg%2BlVtwzSQyg3w16HeFgQOMoqG4ywqPWPLHOjhPgG1GcCqA1S4f2%2Fh2KsmznT5fYmWMhMcFQiOu68J9qwo7zOxpl6dJzTesXZA8pibrOo33KvI3z73IrOtQAeOWHPgxyJ1IFvxod79N%2FNpMKSO9fwsrzjm1XUejsToI7aaVn3xURTjLzn%2F4lgQ35RbZnBEnwvwmHFUdAzveM%2F9jyuUvBUo6aeowNmXJ7YqHGCmbwdXLOu2qCO9v9siZ3sTLYflbmVh%2BSfB7VmdU15bFgjLRT%2BoE6yBIdQFhchX%2BunRnyvYuXY5%2FGzhu%2BxGUK3uOqCJtsSQ6oxmZfXWkn%2Bm7IBNx4q%2BQQS9h9oUzOOkNDutmSg6aO7TSlGZv%2FVaGGmIKRhhTQc%2Fc2Y6Bj2HMK%2B6O0dwd0FE%2BFzqpl0ai8ZUYvA99ps%2FnAoj%2Fid7DQw1Jv2vwY6pgGk7cYnRiF7C9BaizFAYNaNdfFfXtcyQ8v3Dz0GjqRJJ3ee2sFAEn0dhzUVFH8pQXK7OEyKYnT566uSAQsBd0Bn9Ff99hhnXRuZxX5dsE3kdJFjNoNOq%2Fu%2FS6Y7vKI%2Bm%2FAwY2Z%2BiH00wAnBduau1YNqrVOw%2BpEXFVznxYeqNFr1D6eDSKxc%2FrLmYSEDPoyrSzcHF4U7F2GfUbc3Afuu7Kf%2BZ9pLKRtp&X-Amz-Signature=2ddfe06f5ed91e01135e0efd5ac0dcd62fade1301b2e7377157594f6127f3f83&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
