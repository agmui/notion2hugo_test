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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUVF2UC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVy8say1cCFR9UWj3WAXK3cO%2FLmeQJvjUvLPzLffHl%2FgIgbD70ll%2FYUf9tJzOBRlqYIpfd554kS9%2B189NvlwARYVsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKxpSZhSqD1klXSA2yrcAz8QDLN3oqihIadXWd2zsLU74J94k6pynkB1NxkXD3CvF8Ij3fn8Tox8biLLRssoxejF6aw%2BpjhRgibHFdSqQLxKl4WmDC6XuPusImps1jIlqTFG1DBp%2B81qgbcz6KV6LaXQI9PDyD3TFOPVElo8TmAMUKrs91j51S9RFbfRXKPKKRitKCM2nKr4VJvVXtrVoTtvAHzjfoV68PdU8rLwIZw6%2FG25PZFWko29gdICr2ybOWsW7QagBgtDkRhgKZIHwwdIkuO%2FbANUNG%2Bf9B2fmDvNCxVRN0Am71fXTuvA5D4liE4NwfGrhgThjKMH4EdM%2Fmh5V7Ap25w8UkZCj%2B0cAiRCT3SzpvMlnwTdQ1w9otGaOWJbak6mH0oMJILqS0Dau5JrSEgv%2B%2BkQVB%2FBe9PaH3CLtdBJtUWVKyxpWVxzPJFa7Qn9h3aA%2Bf7mPGUA9bbrzGtRJZHeZLZ0z6uruiCn%2B6wzCZbfm8bwPLPbt%2FY9CCOau1bmw4dnbcG6ZbJxtpwWaVp6SIW5r2slPkk%2Bhpzz7mOGboZMtv6%2FA53DHY%2BanGapfj0y7froAH6vTMcQXcYX%2FMuQhE2o8HJEvfkGpPFnW6C1BFmWzTSrIsgYW2sLCoQhnB%2FNBho2fj35HXDFMK7En78GOqUBmOs0gyr%2Fh4zEnfEZ5NSWKTSBRiiAki0JsPKLPhl8T%2BHTJ3en0M0Vli%2FzlzYJ9Fw5zB%2Fma7MsqF4i8H64MX6n%2FBTxmhF0utIG%2FCxTV578jcosjtPrn3MfBk1rwqWKwTKAb9P8lb%2FUfrqXR2rz3bj3%2BcAw8wRB2nsNRn2QveCR0lWRKiAwLlB7MG9vpBMue%2BGhi0V1TAkusYDs4gpDNDClK13yY2M3&X-Amz-Signature=3a9cafff11d0e38a38c51b3192d8719671c706533438cc7685065b30eb18f1bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUVF2UC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVy8say1cCFR9UWj3WAXK3cO%2FLmeQJvjUvLPzLffHl%2FgIgbD70ll%2FYUf9tJzOBRlqYIpfd554kS9%2B189NvlwARYVsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKxpSZhSqD1klXSA2yrcAz8QDLN3oqihIadXWd2zsLU74J94k6pynkB1NxkXD3CvF8Ij3fn8Tox8biLLRssoxejF6aw%2BpjhRgibHFdSqQLxKl4WmDC6XuPusImps1jIlqTFG1DBp%2B81qgbcz6KV6LaXQI9PDyD3TFOPVElo8TmAMUKrs91j51S9RFbfRXKPKKRitKCM2nKr4VJvVXtrVoTtvAHzjfoV68PdU8rLwIZw6%2FG25PZFWko29gdICr2ybOWsW7QagBgtDkRhgKZIHwwdIkuO%2FbANUNG%2Bf9B2fmDvNCxVRN0Am71fXTuvA5D4liE4NwfGrhgThjKMH4EdM%2Fmh5V7Ap25w8UkZCj%2B0cAiRCT3SzpvMlnwTdQ1w9otGaOWJbak6mH0oMJILqS0Dau5JrSEgv%2B%2BkQVB%2FBe9PaH3CLtdBJtUWVKyxpWVxzPJFa7Qn9h3aA%2Bf7mPGUA9bbrzGtRJZHeZLZ0z6uruiCn%2B6wzCZbfm8bwPLPbt%2FY9CCOau1bmw4dnbcG6ZbJxtpwWaVp6SIW5r2slPkk%2Bhpzz7mOGboZMtv6%2FA53DHY%2BanGapfj0y7froAH6vTMcQXcYX%2FMuQhE2o8HJEvfkGpPFnW6C1BFmWzTSrIsgYW2sLCoQhnB%2FNBho2fj35HXDFMK7En78GOqUBmOs0gyr%2Fh4zEnfEZ5NSWKTSBRiiAki0JsPKLPhl8T%2BHTJ3en0M0Vli%2FzlzYJ9Fw5zB%2Fma7MsqF4i8H64MX6n%2FBTxmhF0utIG%2FCxTV578jcosjtPrn3MfBk1rwqWKwTKAb9P8lb%2FUfrqXR2rz3bj3%2BcAw8wRB2nsNRn2QveCR0lWRKiAwLlB7MG9vpBMue%2BGhi0V1TAkusYDs4gpDNDClK13yY2M3&X-Amz-Signature=495db40cc8962879430bddd6151a285779ec537f024a62304d451baf2a727f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUVF2UC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVy8say1cCFR9UWj3WAXK3cO%2FLmeQJvjUvLPzLffHl%2FgIgbD70ll%2FYUf9tJzOBRlqYIpfd554kS9%2B189NvlwARYVsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKxpSZhSqD1klXSA2yrcAz8QDLN3oqihIadXWd2zsLU74J94k6pynkB1NxkXD3CvF8Ij3fn8Tox8biLLRssoxejF6aw%2BpjhRgibHFdSqQLxKl4WmDC6XuPusImps1jIlqTFG1DBp%2B81qgbcz6KV6LaXQI9PDyD3TFOPVElo8TmAMUKrs91j51S9RFbfRXKPKKRitKCM2nKr4VJvVXtrVoTtvAHzjfoV68PdU8rLwIZw6%2FG25PZFWko29gdICr2ybOWsW7QagBgtDkRhgKZIHwwdIkuO%2FbANUNG%2Bf9B2fmDvNCxVRN0Am71fXTuvA5D4liE4NwfGrhgThjKMH4EdM%2Fmh5V7Ap25w8UkZCj%2B0cAiRCT3SzpvMlnwTdQ1w9otGaOWJbak6mH0oMJILqS0Dau5JrSEgv%2B%2BkQVB%2FBe9PaH3CLtdBJtUWVKyxpWVxzPJFa7Qn9h3aA%2Bf7mPGUA9bbrzGtRJZHeZLZ0z6uruiCn%2B6wzCZbfm8bwPLPbt%2FY9CCOau1bmw4dnbcG6ZbJxtpwWaVp6SIW5r2slPkk%2Bhpzz7mOGboZMtv6%2FA53DHY%2BanGapfj0y7froAH6vTMcQXcYX%2FMuQhE2o8HJEvfkGpPFnW6C1BFmWzTSrIsgYW2sLCoQhnB%2FNBho2fj35HXDFMK7En78GOqUBmOs0gyr%2Fh4zEnfEZ5NSWKTSBRiiAki0JsPKLPhl8T%2BHTJ3en0M0Vli%2FzlzYJ9Fw5zB%2Fma7MsqF4i8H64MX6n%2FBTxmhF0utIG%2FCxTV578jcosjtPrn3MfBk1rwqWKwTKAb9P8lb%2FUfrqXR2rz3bj3%2BcAw8wRB2nsNRn2QveCR0lWRKiAwLlB7MG9vpBMue%2BGhi0V1TAkusYDs4gpDNDClK13yY2M3&X-Amz-Signature=a5c3849ed3d90f63bab2c796844876977b5334203273c9addb107f9d72b66f63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
