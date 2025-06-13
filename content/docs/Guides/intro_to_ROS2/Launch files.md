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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3SDSBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCOOejWB%2F%2BiEo4qIL7tLQOzyE9%2FUBkLuwQ%2FCls92Bln9AIgYOdNJODhfCqlyuTNr9Ar%2FBBg%2BbMlT4Q6NIK1%2B4T9q1UqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBObLeYc8esb36oGJSrcAx5tDjuz15UdHZvM%2BZ9aL5NimARp669EG0RHVNyBkjrlqQWs2KitXjxxqGLS9mG4MUCZZ%2B0Sqd8AvIYBQ8Gb30Qy3YM1d2RNBw8mlaUQU%2B1IEfwi%2FK5Cc0JEVDWcJq4swirzakXmeNcrfak8b4fzZ%2BqVZHdV1cSFqf4IP%2F2PenR%2BkE1E5sOArAHSsKT82m4mn%2B7FNV8KDEnQAUPXfT0v9U5XSbf6VnaH%2Bp3doN%2BTbJ3Wta8kliVhwpVrt5D7I44CnTtQWsm1ELKbiVt7aLFI42LKwmQg%2BkhcO8RclLJpdCM8ERX3bY53vaseN8PBpYTvb527SKjd%2BlUfp49w5b%2B312Y%2Bkvrt4IO70D6DJXoOtt9722ojpAbn%2FG1NiU8EnODjokUtk3hDSf%2FchilzqSHtEodu%2Fa6bRjXOIktGPQuhPINdQQsh%2BBG%2BOpGq2vWzNTVJ8LcJCHPPy3m3uJJrVUEW18Xf1rQWs2Aez7%2Bp43cjgmkbzWb8TOAsuSZFYh93N5V%2BkNarQT2CEQ44uM56qfTU5qOd2Bd5YwQcd%2FjQDbScPsFzsLKnv7Q3ju0kMI6IDIBmmEBqK8wm78hsBYBO2APL7Ku8LKRVppBACdGHyN4%2FG%2BMESCxDo9x8mgrS7g%2BVML64rcIGOqUBRatHxuqhA%2FjFK56h05gPMOsxHeLRagegHb5PNW7exfQXAqbm%2FsEE0HpKmYzT%2FNE%2F6BNrj2Dp24nC1OUKN9Cr85f2%2FT553tgnUVTzEFMUP1ducmBwwxMymZxOMPmJM8xmA6sp%2B%2FjhFYYPPf0hdaZXRimjaeAE3cl7NrauUXFMEFPZTGBXq3xQ3jP8cG2sSc%2Fvx57yyZTASeIlvRYSb%2BytdQeqINQA&X-Amz-Signature=ae14f8f4cb80168637721badef71760ec734a6159b0a64af6c01025d63a45355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3SDSBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCOOejWB%2F%2BiEo4qIL7tLQOzyE9%2FUBkLuwQ%2FCls92Bln9AIgYOdNJODhfCqlyuTNr9Ar%2FBBg%2BbMlT4Q6NIK1%2B4T9q1UqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBObLeYc8esb36oGJSrcAx5tDjuz15UdHZvM%2BZ9aL5NimARp669EG0RHVNyBkjrlqQWs2KitXjxxqGLS9mG4MUCZZ%2B0Sqd8AvIYBQ8Gb30Qy3YM1d2RNBw8mlaUQU%2B1IEfwi%2FK5Cc0JEVDWcJq4swirzakXmeNcrfak8b4fzZ%2BqVZHdV1cSFqf4IP%2F2PenR%2BkE1E5sOArAHSsKT82m4mn%2B7FNV8KDEnQAUPXfT0v9U5XSbf6VnaH%2Bp3doN%2BTbJ3Wta8kliVhwpVrt5D7I44CnTtQWsm1ELKbiVt7aLFI42LKwmQg%2BkhcO8RclLJpdCM8ERX3bY53vaseN8PBpYTvb527SKjd%2BlUfp49w5b%2B312Y%2Bkvrt4IO70D6DJXoOtt9722ojpAbn%2FG1NiU8EnODjokUtk3hDSf%2FchilzqSHtEodu%2Fa6bRjXOIktGPQuhPINdQQsh%2BBG%2BOpGq2vWzNTVJ8LcJCHPPy3m3uJJrVUEW18Xf1rQWs2Aez7%2Bp43cjgmkbzWb8TOAsuSZFYh93N5V%2BkNarQT2CEQ44uM56qfTU5qOd2Bd5YwQcd%2FjQDbScPsFzsLKnv7Q3ju0kMI6IDIBmmEBqK8wm78hsBYBO2APL7Ku8LKRVppBACdGHyN4%2FG%2BMESCxDo9x8mgrS7g%2BVML64rcIGOqUBRatHxuqhA%2FjFK56h05gPMOsxHeLRagegHb5PNW7exfQXAqbm%2FsEE0HpKmYzT%2FNE%2F6BNrj2Dp24nC1OUKN9Cr85f2%2FT553tgnUVTzEFMUP1ducmBwwxMymZxOMPmJM8xmA6sp%2B%2FjhFYYPPf0hdaZXRimjaeAE3cl7NrauUXFMEFPZTGBXq3xQ3jP8cG2sSc%2Fvx57yyZTASeIlvRYSb%2BytdQeqINQA&X-Amz-Signature=bbcbef8622589d6bb7be3085e17df261d741139e35ff781c4fe6e5635c7dad1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3SDSBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCOOejWB%2F%2BiEo4qIL7tLQOzyE9%2FUBkLuwQ%2FCls92Bln9AIgYOdNJODhfCqlyuTNr9Ar%2FBBg%2BbMlT4Q6NIK1%2B4T9q1UqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBObLeYc8esb36oGJSrcAx5tDjuz15UdHZvM%2BZ9aL5NimARp669EG0RHVNyBkjrlqQWs2KitXjxxqGLS9mG4MUCZZ%2B0Sqd8AvIYBQ8Gb30Qy3YM1d2RNBw8mlaUQU%2B1IEfwi%2FK5Cc0JEVDWcJq4swirzakXmeNcrfak8b4fzZ%2BqVZHdV1cSFqf4IP%2F2PenR%2BkE1E5sOArAHSsKT82m4mn%2B7FNV8KDEnQAUPXfT0v9U5XSbf6VnaH%2Bp3doN%2BTbJ3Wta8kliVhwpVrt5D7I44CnTtQWsm1ELKbiVt7aLFI42LKwmQg%2BkhcO8RclLJpdCM8ERX3bY53vaseN8PBpYTvb527SKjd%2BlUfp49w5b%2B312Y%2Bkvrt4IO70D6DJXoOtt9722ojpAbn%2FG1NiU8EnODjokUtk3hDSf%2FchilzqSHtEodu%2Fa6bRjXOIktGPQuhPINdQQsh%2BBG%2BOpGq2vWzNTVJ8LcJCHPPy3m3uJJrVUEW18Xf1rQWs2Aez7%2Bp43cjgmkbzWb8TOAsuSZFYh93N5V%2BkNarQT2CEQ44uM56qfTU5qOd2Bd5YwQcd%2FjQDbScPsFzsLKnv7Q3ju0kMI6IDIBmmEBqK8wm78hsBYBO2APL7Ku8LKRVppBACdGHyN4%2FG%2BMESCxDo9x8mgrS7g%2BVML64rcIGOqUBRatHxuqhA%2FjFK56h05gPMOsxHeLRagegHb5PNW7exfQXAqbm%2FsEE0HpKmYzT%2FNE%2F6BNrj2Dp24nC1OUKN9Cr85f2%2FT553tgnUVTzEFMUP1ducmBwwxMymZxOMPmJM8xmA6sp%2B%2FjhFYYPPf0hdaZXRimjaeAE3cl7NrauUXFMEFPZTGBXq3xQ3jP8cG2sSc%2Fvx57yyZTASeIlvRYSb%2BytdQeqINQA&X-Amz-Signature=99008925a2e84ac0475b9aee51c13c10be2cc4d70c9c0ba1a9b3a319329a1b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
