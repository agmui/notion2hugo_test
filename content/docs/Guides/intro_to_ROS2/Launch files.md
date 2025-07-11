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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUOYHZP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLZCm%2Bgh90%2BFo%2BbLXlNafPR5eS329luRlbUBS%2BvP%2BkvQIhAJhtcI2%2BtCA0%2BAmlzVH8gl2aDoRGxhL%2F6bhTLxlVY97tKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd%2FiPsDih%2BGW%2Fxm%2B8q3APmUN4wv1WN51c2QUIvC2OZpAi7y4pWfIW3MQIypj1d9%2BI%2FvpyRfdZu1yggA%2BBVa9wHelJG9Tkf5byRJ%2FGMpK%2BlV4sPam%2BZFmOWuzVb3pLBcI0TtVrEdrgb1wOReqrlRHtIYbE2hGt1f8Ru4OQkffyMMqz3xC2N3gv%2FqZiTFth06e1nnY0BVhn2tcHiu4N0rn4kmpag9qaQGkdSCBJcTCPLpZB8dGyed%2F9%2FIGULympPF9gaFsgTqcJaTY5bEh4RFIDumCGCUt2DCiOUJKRDE%2Fh%2BrlNaRtTaaxWhpjrobm78efEB4iZMVDss4RCF7s5pToFqsIWgz3S36kpVwyvLvfpVeSJyuNvqWYkGgxJl2mFNKNR%2Flp3oR3AuS4Nhn3QpNDv9ozuxVd4JJpAbEg%2BLY6mW3mwWoJ3ZKnnHDgghXbWpWy9Xe4yazNcFeWcR8PTJKhHWuPpRL8LL6sj5xcqRFWDLu8T7vL0%2FR0gkCV4N9eh4XC%2BdGcc%2Bw9C9KJvuMlLE6emidnTPJotMl6SqR%2BIP2NnO9CgW6MuholhBSsBgMCCudjgp%2FIPLM7p6K31s1EsDdr6CvPaysPZvaX1%2BNFBWsDfvUPWBUFZseDDRzhcqdRp8LhXQXviAjg9qWFH4TjCo%2F8TDBjqkASR5sDRnz%2F0x%2Fr4xEDwwgbm6q82JuS0VgVGUKQhPBqTHBh2IxBFn%2Bj51aalg01%2FIOpViGeJFn9ZMHK%2BCvz5DejkOOECph6cqB2CdxmE4PuJ6svGFX0UqSzNOq2FX337Lp1sG6ExKeo0L9tlmOoVGL9wv7smVsFdnizRA0xhNwdjQ0BGH8IXEMY%2FUzVreMZ4MEek1zZv2U8iNhhnpFFBZHXY0VF97&X-Amz-Signature=ee3d6b67b068aea807ec99bcf48a27cb6ebe4fc61a03bf5887c2920df8168275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUOYHZP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLZCm%2Bgh90%2BFo%2BbLXlNafPR5eS329luRlbUBS%2BvP%2BkvQIhAJhtcI2%2BtCA0%2BAmlzVH8gl2aDoRGxhL%2F6bhTLxlVY97tKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd%2FiPsDih%2BGW%2Fxm%2B8q3APmUN4wv1WN51c2QUIvC2OZpAi7y4pWfIW3MQIypj1d9%2BI%2FvpyRfdZu1yggA%2BBVa9wHelJG9Tkf5byRJ%2FGMpK%2BlV4sPam%2BZFmOWuzVb3pLBcI0TtVrEdrgb1wOReqrlRHtIYbE2hGt1f8Ru4OQkffyMMqz3xC2N3gv%2FqZiTFth06e1nnY0BVhn2tcHiu4N0rn4kmpag9qaQGkdSCBJcTCPLpZB8dGyed%2F9%2FIGULympPF9gaFsgTqcJaTY5bEh4RFIDumCGCUt2DCiOUJKRDE%2Fh%2BrlNaRtTaaxWhpjrobm78efEB4iZMVDss4RCF7s5pToFqsIWgz3S36kpVwyvLvfpVeSJyuNvqWYkGgxJl2mFNKNR%2Flp3oR3AuS4Nhn3QpNDv9ozuxVd4JJpAbEg%2BLY6mW3mwWoJ3ZKnnHDgghXbWpWy9Xe4yazNcFeWcR8PTJKhHWuPpRL8LL6sj5xcqRFWDLu8T7vL0%2FR0gkCV4N9eh4XC%2BdGcc%2Bw9C9KJvuMlLE6emidnTPJotMl6SqR%2BIP2NnO9CgW6MuholhBSsBgMCCudjgp%2FIPLM7p6K31s1EsDdr6CvPaysPZvaX1%2BNFBWsDfvUPWBUFZseDDRzhcqdRp8LhXQXviAjg9qWFH4TjCo%2F8TDBjqkASR5sDRnz%2F0x%2Fr4xEDwwgbm6q82JuS0VgVGUKQhPBqTHBh2IxBFn%2Bj51aalg01%2FIOpViGeJFn9ZMHK%2BCvz5DejkOOECph6cqB2CdxmE4PuJ6svGFX0UqSzNOq2FX337Lp1sG6ExKeo0L9tlmOoVGL9wv7smVsFdnizRA0xhNwdjQ0BGH8IXEMY%2FUzVreMZ4MEek1zZv2U8iNhhnpFFBZHXY0VF97&X-Amz-Signature=cf62ed1a89ecff7a8af615e0525794a489ffbf6181c10290f5c5e90e5a56b386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUOYHZP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLZCm%2Bgh90%2BFo%2BbLXlNafPR5eS329luRlbUBS%2BvP%2BkvQIhAJhtcI2%2BtCA0%2BAmlzVH8gl2aDoRGxhL%2F6bhTLxlVY97tKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd%2FiPsDih%2BGW%2Fxm%2B8q3APmUN4wv1WN51c2QUIvC2OZpAi7y4pWfIW3MQIypj1d9%2BI%2FvpyRfdZu1yggA%2BBVa9wHelJG9Tkf5byRJ%2FGMpK%2BlV4sPam%2BZFmOWuzVb3pLBcI0TtVrEdrgb1wOReqrlRHtIYbE2hGt1f8Ru4OQkffyMMqz3xC2N3gv%2FqZiTFth06e1nnY0BVhn2tcHiu4N0rn4kmpag9qaQGkdSCBJcTCPLpZB8dGyed%2F9%2FIGULympPF9gaFsgTqcJaTY5bEh4RFIDumCGCUt2DCiOUJKRDE%2Fh%2BrlNaRtTaaxWhpjrobm78efEB4iZMVDss4RCF7s5pToFqsIWgz3S36kpVwyvLvfpVeSJyuNvqWYkGgxJl2mFNKNR%2Flp3oR3AuS4Nhn3QpNDv9ozuxVd4JJpAbEg%2BLY6mW3mwWoJ3ZKnnHDgghXbWpWy9Xe4yazNcFeWcR8PTJKhHWuPpRL8LL6sj5xcqRFWDLu8T7vL0%2FR0gkCV4N9eh4XC%2BdGcc%2Bw9C9KJvuMlLE6emidnTPJotMl6SqR%2BIP2NnO9CgW6MuholhBSsBgMCCudjgp%2FIPLM7p6K31s1EsDdr6CvPaysPZvaX1%2BNFBWsDfvUPWBUFZseDDRzhcqdRp8LhXQXviAjg9qWFH4TjCo%2F8TDBjqkASR5sDRnz%2F0x%2Fr4xEDwwgbm6q82JuS0VgVGUKQhPBqTHBh2IxBFn%2Bj51aalg01%2FIOpViGeJFn9ZMHK%2BCvz5DejkOOECph6cqB2CdxmE4PuJ6svGFX0UqSzNOq2FX337Lp1sG6ExKeo0L9tlmOoVGL9wv7smVsFdnizRA0xhNwdjQ0BGH8IXEMY%2FUzVreMZ4MEek1zZv2U8iNhhnpFFBZHXY0VF97&X-Amz-Signature=e1c1a636ea2a685abb0c14bb6519184087d99efbe1c4a3ebe30ae8c67185b2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
