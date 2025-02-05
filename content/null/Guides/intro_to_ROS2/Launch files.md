---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Launch files.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSN6CXXW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHex46c50K1FiLF11vZXgUtxS8N%2F%2Fn7HSEhg2zrKYfElAiEAm%2BAAdpQm5aN7RRQSLbtvL7ct3fA47wR0rioaGZntCx4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIptWKQSp7C80yT9LSrcA6iF0Kx4KGk6Ga%2BoP7gXFxlQ7huluG7t4v9nisjg0KeOZ2%2FU1Hfwp%2Fgdht9ubkJzqkC4CaqDws49XEYNniH3IsCQ89uRQKrnbPl4ZFJEKtvD7t9C7TTFKyQ%2FqVM7EmfMUsiqmY1Fw82S3iyMeNGDv%2FgtcINrbZUXPT0pe5U%2F%2BQFI6oDuihUQEghNQuuD1JKI13KDS%2F6fyvLyawheaFaK70zka%2BwOgut545l%2FUR4TbTAVqP08InFRejMTkXDb3eNyL%2BEfrRf172uzROGb86p9ebY599dJ%2BFLLq9k5MzFI%2FQQZiTbjRgY8pgLapwelWwNfqTHbfbDqSsCvoIY5jrIDfbdVyn8ojFANUwv6rAUkHNGDKUNjKlIjpZjy%2BTsbhp4NxsR2WkbZRBH%2FEwegWAZKYytPtzRSzfSrHnVvUUwlmIZbNU9XQdcElEE8PScxLAlMW13B3HSCZMPYo6tgSxwggAT%2BUB8y00NL4X0n23oswNM3vGLgCPWtf6GZyPkmMfw4aUdbwtwcgLmX00iFFOZxe7owwFdPYtU8bbyPFnopEjoHdXSyJb%2FiyjEOmBWnzDIHYTlrdNbYWFuO8RazT3HAmdVnqQp0bAfLazREmreiz4p07SNEZl%2Fj1fjiGEqYMNXPir0GOqUBqSkdF%2FTfcNS9o3EbwdX0RClNePXTnQ9RHg5wk1zg2wWeNUzWWa6UAqgjqfIOcnithSW42BpeYduB%2BKSUiAovqgxm2jU1FGDZKKYAY4CznrtujeO43AQNPsGHS8Xn%2BqkD1n%2B2hsxtrSxYzlB6k8gE7l2FL%2FRDTjDMb77iOQ3vkiZaHPmUvhp2Bg6ndhDGqSHxt14pOrr0I57icMjT9EcE%2FLfhigLK&X-Amz-Signature=89d95136e62b8179934d7305ed82f5b92ac9f0e9264bc864336662bf5bdcb0da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSN6CXXW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHex46c50K1FiLF11vZXgUtxS8N%2F%2Fn7HSEhg2zrKYfElAiEAm%2BAAdpQm5aN7RRQSLbtvL7ct3fA47wR0rioaGZntCx4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIptWKQSp7C80yT9LSrcA6iF0Kx4KGk6Ga%2BoP7gXFxlQ7huluG7t4v9nisjg0KeOZ2%2FU1Hfwp%2Fgdht9ubkJzqkC4CaqDws49XEYNniH3IsCQ89uRQKrnbPl4ZFJEKtvD7t9C7TTFKyQ%2FqVM7EmfMUsiqmY1Fw82S3iyMeNGDv%2FgtcINrbZUXPT0pe5U%2F%2BQFI6oDuihUQEghNQuuD1JKI13KDS%2F6fyvLyawheaFaK70zka%2BwOgut545l%2FUR4TbTAVqP08InFRejMTkXDb3eNyL%2BEfrRf172uzROGb86p9ebY599dJ%2BFLLq9k5MzFI%2FQQZiTbjRgY8pgLapwelWwNfqTHbfbDqSsCvoIY5jrIDfbdVyn8ojFANUwv6rAUkHNGDKUNjKlIjpZjy%2BTsbhp4NxsR2WkbZRBH%2FEwegWAZKYytPtzRSzfSrHnVvUUwlmIZbNU9XQdcElEE8PScxLAlMW13B3HSCZMPYo6tgSxwggAT%2BUB8y00NL4X0n23oswNM3vGLgCPWtf6GZyPkmMfw4aUdbwtwcgLmX00iFFOZxe7owwFdPYtU8bbyPFnopEjoHdXSyJb%2FiyjEOmBWnzDIHYTlrdNbYWFuO8RazT3HAmdVnqQp0bAfLazREmreiz4p07SNEZl%2Fj1fjiGEqYMNXPir0GOqUBqSkdF%2FTfcNS9o3EbwdX0RClNePXTnQ9RHg5wk1zg2wWeNUzWWa6UAqgjqfIOcnithSW42BpeYduB%2BKSUiAovqgxm2jU1FGDZKKYAY4CznrtujeO43AQNPsGHS8Xn%2BqkD1n%2B2hsxtrSxYzlB6k8gE7l2FL%2FRDTjDMb77iOQ3vkiZaHPmUvhp2Bg6ndhDGqSHxt14pOrr0I57icMjT9EcE%2FLfhigLK&X-Amz-Signature=821180f595692bf4cead38a764291c72d78321c91d27a093f87670ce43fb3775&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSN6CXXW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHex46c50K1FiLF11vZXgUtxS8N%2F%2Fn7HSEhg2zrKYfElAiEAm%2BAAdpQm5aN7RRQSLbtvL7ct3fA47wR0rioaGZntCx4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIptWKQSp7C80yT9LSrcA6iF0Kx4KGk6Ga%2BoP7gXFxlQ7huluG7t4v9nisjg0KeOZ2%2FU1Hfwp%2Fgdht9ubkJzqkC4CaqDws49XEYNniH3IsCQ89uRQKrnbPl4ZFJEKtvD7t9C7TTFKyQ%2FqVM7EmfMUsiqmY1Fw82S3iyMeNGDv%2FgtcINrbZUXPT0pe5U%2F%2BQFI6oDuihUQEghNQuuD1JKI13KDS%2F6fyvLyawheaFaK70zka%2BwOgut545l%2FUR4TbTAVqP08InFRejMTkXDb3eNyL%2BEfrRf172uzROGb86p9ebY599dJ%2BFLLq9k5MzFI%2FQQZiTbjRgY8pgLapwelWwNfqTHbfbDqSsCvoIY5jrIDfbdVyn8ojFANUwv6rAUkHNGDKUNjKlIjpZjy%2BTsbhp4NxsR2WkbZRBH%2FEwegWAZKYytPtzRSzfSrHnVvUUwlmIZbNU9XQdcElEE8PScxLAlMW13B3HSCZMPYo6tgSxwggAT%2BUB8y00NL4X0n23oswNM3vGLgCPWtf6GZyPkmMfw4aUdbwtwcgLmX00iFFOZxe7owwFdPYtU8bbyPFnopEjoHdXSyJb%2FiyjEOmBWnzDIHYTlrdNbYWFuO8RazT3HAmdVnqQp0bAfLazREmreiz4p07SNEZl%2Fj1fjiGEqYMNXPir0GOqUBqSkdF%2FTfcNS9o3EbwdX0RClNePXTnQ9RHg5wk1zg2wWeNUzWWa6UAqgjqfIOcnithSW42BpeYduB%2BKSUiAovqgxm2jU1FGDZKKYAY4CznrtujeO43AQNPsGHS8Xn%2BqkD1n%2B2hsxtrSxYzlB6k8gE7l2FL%2FRDTjDMb77iOQ3vkiZaHPmUvhp2Bg6ndhDGqSHxt14pOrr0I57icMjT9EcE%2FLfhigLK&X-Amz-Signature=0070092d984e2b7523dca1693cc6d07a93217ecfe6a10224b3c9a6bd81bd9e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
