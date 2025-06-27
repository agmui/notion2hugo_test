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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTIY2GO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHNX1KFb%2BJbkChBeIBgNGx7%2FJGMpbq%2FK55bkZBXbJTkrAiAFlrgJT%2BOYVe81o4kyruBWDGR3%2Fs9aSoIcuP1KO33KmSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhyHEh4U%2BYJp%2B31B6KtwDpMsHVkgyp0TH4r79oPsG%2Bo5Bn41KHU4GA90dQkOkuPSPx4AzFijd8l2iW01fb1tStMCthKfJeeZnwlnsO3COMG6XH7zx%2BW8kK38kVOnxyWig7boxT6%2BkWZbpSe3P0QhudyjKXv7P%2FkZaHYf0WWJUz1%2FjM4DsBTCDtmrzo8QsY1%2BN4L0%2FLdVDF6wn0YerR7FT9TPsznDh8ifkVwys5FVXU%2F2LFY%2BOWL5xj1pdW4%2F6vHS4aaHilnvbZlyua6GC6E8gCv93z0NAixnxE3XZlfDNwBo%2BTYZUKkKs949NJC4NoWPRjwUaObohIfCOd%2F4mmynclYoWFS4I1P28cWtJi50qWq%2BXYGlW4Cz8K2YTo%2BL9d15MCapOPn4%2BxjpWcOhcIy8T7TwwpuXf1gJwWEETBSlombyeWr2TfMnAreGtKpbMvruNUIkx%2FWzkZg%2F2ygG8M4e4G69%2BLMN%2FDh0g8WB%2BR%2BMmvtv2cy5W0%2B2mgMgzGIHH%2BHfTCRN%2Bu53NxSQu3UkuovCwgyOMtJCgj%2BQDPpJyZidELoBcsP1rDp7zBovqcDnjZNxbhJToLG%2FXCsbjVfCms3HT6UxcihH5MoA9ryZWvYqbYPHBLeiQQVOhnO82poQqpV6cq80WjlmPkppOJtgwmKf6wgY6pgGLoh392MXJHIDbUK98VZSfMusE%2BfrRgt1QVt3xMEd8hD0IXGG%2F39mIAR3WqpeVHXW8S5rHk2GutuCwmRXcJSUZ9yzaC53YAGsDENKcYhMokZr92nBc63dwvQCt1b9qlnBmF9qRD7jpNUeiodAOp5r4Y7A6NQgXpYEKSf4eFSKPw5bnhmQ4D0CYompsZfnmB0fdyBnpa0qZJKPnH7%2FcBOoKFjhwNaGi&X-Amz-Signature=75fd903f7a7ce191d3969b32883412a99efb7c68ad5339d53822e235bc02c0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTIY2GO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHNX1KFb%2BJbkChBeIBgNGx7%2FJGMpbq%2FK55bkZBXbJTkrAiAFlrgJT%2BOYVe81o4kyruBWDGR3%2Fs9aSoIcuP1KO33KmSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhyHEh4U%2BYJp%2B31B6KtwDpMsHVkgyp0TH4r79oPsG%2Bo5Bn41KHU4GA90dQkOkuPSPx4AzFijd8l2iW01fb1tStMCthKfJeeZnwlnsO3COMG6XH7zx%2BW8kK38kVOnxyWig7boxT6%2BkWZbpSe3P0QhudyjKXv7P%2FkZaHYf0WWJUz1%2FjM4DsBTCDtmrzo8QsY1%2BN4L0%2FLdVDF6wn0YerR7FT9TPsznDh8ifkVwys5FVXU%2F2LFY%2BOWL5xj1pdW4%2F6vHS4aaHilnvbZlyua6GC6E8gCv93z0NAixnxE3XZlfDNwBo%2BTYZUKkKs949NJC4NoWPRjwUaObohIfCOd%2F4mmynclYoWFS4I1P28cWtJi50qWq%2BXYGlW4Cz8K2YTo%2BL9d15MCapOPn4%2BxjpWcOhcIy8T7TwwpuXf1gJwWEETBSlombyeWr2TfMnAreGtKpbMvruNUIkx%2FWzkZg%2F2ygG8M4e4G69%2BLMN%2FDh0g8WB%2BR%2BMmvtv2cy5W0%2B2mgMgzGIHH%2BHfTCRN%2Bu53NxSQu3UkuovCwgyOMtJCgj%2BQDPpJyZidELoBcsP1rDp7zBovqcDnjZNxbhJToLG%2FXCsbjVfCms3HT6UxcihH5MoA9ryZWvYqbYPHBLeiQQVOhnO82poQqpV6cq80WjlmPkppOJtgwmKf6wgY6pgGLoh392MXJHIDbUK98VZSfMusE%2BfrRgt1QVt3xMEd8hD0IXGG%2F39mIAR3WqpeVHXW8S5rHk2GutuCwmRXcJSUZ9yzaC53YAGsDENKcYhMokZr92nBc63dwvQCt1b9qlnBmF9qRD7jpNUeiodAOp5r4Y7A6NQgXpYEKSf4eFSKPw5bnhmQ4D0CYompsZfnmB0fdyBnpa0qZJKPnH7%2FcBOoKFjhwNaGi&X-Amz-Signature=9d5ae83945ef976440d6f91f2a52dfde9111c6f367dbf942f1d64c6aa283db22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTIY2GO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHNX1KFb%2BJbkChBeIBgNGx7%2FJGMpbq%2FK55bkZBXbJTkrAiAFlrgJT%2BOYVe81o4kyruBWDGR3%2Fs9aSoIcuP1KO33KmSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMhyHEh4U%2BYJp%2B31B6KtwDpMsHVkgyp0TH4r79oPsG%2Bo5Bn41KHU4GA90dQkOkuPSPx4AzFijd8l2iW01fb1tStMCthKfJeeZnwlnsO3COMG6XH7zx%2BW8kK38kVOnxyWig7boxT6%2BkWZbpSe3P0QhudyjKXv7P%2FkZaHYf0WWJUz1%2FjM4DsBTCDtmrzo8QsY1%2BN4L0%2FLdVDF6wn0YerR7FT9TPsznDh8ifkVwys5FVXU%2F2LFY%2BOWL5xj1pdW4%2F6vHS4aaHilnvbZlyua6GC6E8gCv93z0NAixnxE3XZlfDNwBo%2BTYZUKkKs949NJC4NoWPRjwUaObohIfCOd%2F4mmynclYoWFS4I1P28cWtJi50qWq%2BXYGlW4Cz8K2YTo%2BL9d15MCapOPn4%2BxjpWcOhcIy8T7TwwpuXf1gJwWEETBSlombyeWr2TfMnAreGtKpbMvruNUIkx%2FWzkZg%2F2ygG8M4e4G69%2BLMN%2FDh0g8WB%2BR%2BMmvtv2cy5W0%2B2mgMgzGIHH%2BHfTCRN%2Bu53NxSQu3UkuovCwgyOMtJCgj%2BQDPpJyZidELoBcsP1rDp7zBovqcDnjZNxbhJToLG%2FXCsbjVfCms3HT6UxcihH5MoA9ryZWvYqbYPHBLeiQQVOhnO82poQqpV6cq80WjlmPkppOJtgwmKf6wgY6pgGLoh392MXJHIDbUK98VZSfMusE%2BfrRgt1QVt3xMEd8hD0IXGG%2F39mIAR3WqpeVHXW8S5rHk2GutuCwmRXcJSUZ9yzaC53YAGsDENKcYhMokZr92nBc63dwvQCt1b9qlnBmF9qRD7jpNUeiodAOp5r4Y7A6NQgXpYEKSf4eFSKPw5bnhmQ4D0CYompsZfnmB0fdyBnpa0qZJKPnH7%2FcBOoKFjhwNaGi&X-Amz-Signature=51deac4c558839c284396eb3c380792cc7ae9f8baaf99b91cf0c0207e4eec725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
