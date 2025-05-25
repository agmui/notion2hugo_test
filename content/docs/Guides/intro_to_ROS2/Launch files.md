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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEEAHBKK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCm%2BGKQpIvYMf23534haLNZZuWPo4Q1YVvEbkvDLIlRLgIgDpveg2%2BZa8We6zFfVaZJUHgr4FZMhZEz4YCvCYPUT40q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDPx7DOfA1%2B2DAzQQzyrcA5K%2BEQwzFNTcosG6WcEQiPjaFCz3P5oosUxKwKESKQ9GA4X%2BTJdETt1eW4nNcJ3XrUwqv8psEczMcYIEHrYVPH4oWmzRwEQZhL429qedVHLGIfCIlavPJKFvZ0dcfXux6sE6704HcHFw95avN9%2Fc3FJXNVM5T%2FTJlFe4ri%2B7H3pxEdvs20TivzsXjPf5KAuLlOl69fpVTguMr1NYaQUhLxUdrs4sxZzzaNwsqWLY1%2BB7T5XZp3LOfipRKhrHawakQXRzildEOOHrg%2FPhpIpJhZ8PhE%2F8tQ%2B%2Bz0AgWag5VQhjhwsDMLrFULkGHv%2Fyf0h06xR8ep66mKoW%2F6q4U0seqCysdsiorQy06HBmHcMi6MbhDC54ZNYCunREtcdTuVou95UU%2FuBy%2FFfFOgpZJygrw8dfsvMVSAfwCKNjH3SZrjGfY%2FAFjaioXXQ3NGJ4LWL2OXAJSy9y49RdoUXFCmgZQTae5aaWWuduV5FCFBjG7THJ5P1Rj6nHfrW6oC7Hl3alNBp%2Bxhrey%2Flyn22iJ9wtCUADCny6MVlwrRCZ92hwdN8bOuKdRidEzwAGn0pRmD0M%2BO4IDXkWyLP59GWzRIQHl1uFqKchoYh9zZC448pS0d%2FIeEwgEj8W1QbHbleLMOT0zcEGOqUB4oTn1Um5XK%2F%2B%2FNrngoiUf2PgvYJ4Oe9t0fdM90vwTPPd1jzhHL5Kjqk3KuK3ZSCfWgpp%2BGzTO5%2FMqgVE1GbuKAgtZ%2FeABHHNoRSSYDsHGcUVDnY4rSFtinHQKE%2BWs0U%2FUX3PqDHAFetOZyze3z0TALocO%2FoTwzu%2FmDMF%2FkD%2FAL%2BMOCi%2B2fWPKg8nRRnrL7oRL31tklE4rTcgDBgGLFDuFMGZ4x7e&X-Amz-Signature=7cbd486170fe3bc7d0c12cfc50c6c9f809543cd28c43888f01917e2f06b84e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEEAHBKK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCm%2BGKQpIvYMf23534haLNZZuWPo4Q1YVvEbkvDLIlRLgIgDpveg2%2BZa8We6zFfVaZJUHgr4FZMhZEz4YCvCYPUT40q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDPx7DOfA1%2B2DAzQQzyrcA5K%2BEQwzFNTcosG6WcEQiPjaFCz3P5oosUxKwKESKQ9GA4X%2BTJdETt1eW4nNcJ3XrUwqv8psEczMcYIEHrYVPH4oWmzRwEQZhL429qedVHLGIfCIlavPJKFvZ0dcfXux6sE6704HcHFw95avN9%2Fc3FJXNVM5T%2FTJlFe4ri%2B7H3pxEdvs20TivzsXjPf5KAuLlOl69fpVTguMr1NYaQUhLxUdrs4sxZzzaNwsqWLY1%2BB7T5XZp3LOfipRKhrHawakQXRzildEOOHrg%2FPhpIpJhZ8PhE%2F8tQ%2B%2Bz0AgWag5VQhjhwsDMLrFULkGHv%2Fyf0h06xR8ep66mKoW%2F6q4U0seqCysdsiorQy06HBmHcMi6MbhDC54ZNYCunREtcdTuVou95UU%2FuBy%2FFfFOgpZJygrw8dfsvMVSAfwCKNjH3SZrjGfY%2FAFjaioXXQ3NGJ4LWL2OXAJSy9y49RdoUXFCmgZQTae5aaWWuduV5FCFBjG7THJ5P1Rj6nHfrW6oC7Hl3alNBp%2Bxhrey%2Flyn22iJ9wtCUADCny6MVlwrRCZ92hwdN8bOuKdRidEzwAGn0pRmD0M%2BO4IDXkWyLP59GWzRIQHl1uFqKchoYh9zZC448pS0d%2FIeEwgEj8W1QbHbleLMOT0zcEGOqUB4oTn1Um5XK%2F%2B%2FNrngoiUf2PgvYJ4Oe9t0fdM90vwTPPd1jzhHL5Kjqk3KuK3ZSCfWgpp%2BGzTO5%2FMqgVE1GbuKAgtZ%2FeABHHNoRSSYDsHGcUVDnY4rSFtinHQKE%2BWs0U%2FUX3PqDHAFetOZyze3z0TALocO%2FoTwzu%2FmDMF%2FkD%2FAL%2BMOCi%2B2fWPKg8nRRnrL7oRL31tklE4rTcgDBgGLFDuFMGZ4x7e&X-Amz-Signature=8e26e1d4874741fcd742b768df7e2b306e6646f09717c4a4059d9b1d87e7cdf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEEAHBKK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCm%2BGKQpIvYMf23534haLNZZuWPo4Q1YVvEbkvDLIlRLgIgDpveg2%2BZa8We6zFfVaZJUHgr4FZMhZEz4YCvCYPUT40q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDPx7DOfA1%2B2DAzQQzyrcA5K%2BEQwzFNTcosG6WcEQiPjaFCz3P5oosUxKwKESKQ9GA4X%2BTJdETt1eW4nNcJ3XrUwqv8psEczMcYIEHrYVPH4oWmzRwEQZhL429qedVHLGIfCIlavPJKFvZ0dcfXux6sE6704HcHFw95avN9%2Fc3FJXNVM5T%2FTJlFe4ri%2B7H3pxEdvs20TivzsXjPf5KAuLlOl69fpVTguMr1NYaQUhLxUdrs4sxZzzaNwsqWLY1%2BB7T5XZp3LOfipRKhrHawakQXRzildEOOHrg%2FPhpIpJhZ8PhE%2F8tQ%2B%2Bz0AgWag5VQhjhwsDMLrFULkGHv%2Fyf0h06xR8ep66mKoW%2F6q4U0seqCysdsiorQy06HBmHcMi6MbhDC54ZNYCunREtcdTuVou95UU%2FuBy%2FFfFOgpZJygrw8dfsvMVSAfwCKNjH3SZrjGfY%2FAFjaioXXQ3NGJ4LWL2OXAJSy9y49RdoUXFCmgZQTae5aaWWuduV5FCFBjG7THJ5P1Rj6nHfrW6oC7Hl3alNBp%2Bxhrey%2Flyn22iJ9wtCUADCny6MVlwrRCZ92hwdN8bOuKdRidEzwAGn0pRmD0M%2BO4IDXkWyLP59GWzRIQHl1uFqKchoYh9zZC448pS0d%2FIeEwgEj8W1QbHbleLMOT0zcEGOqUB4oTn1Um5XK%2F%2B%2FNrngoiUf2PgvYJ4Oe9t0fdM90vwTPPd1jzhHL5Kjqk3KuK3ZSCfWgpp%2BGzTO5%2FMqgVE1GbuKAgtZ%2FeABHHNoRSSYDsHGcUVDnY4rSFtinHQKE%2BWs0U%2FUX3PqDHAFetOZyze3z0TALocO%2FoTwzu%2FmDMF%2FkD%2FAL%2BMOCi%2B2fWPKg8nRRnrL7oRL31tklE4rTcgDBgGLFDuFMGZ4x7e&X-Amz-Signature=9ce85265de6241eba40c79a690e2313ae2b1f6e0e1ae7002f866000226a07573&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
