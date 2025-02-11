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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HMDD64C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F3kOaevvJC8%2B%2F6QtPCmOTjB%2F1mTAPn2%2BdaErEX9cPWAiAHYGkcFWROTr9f8qJq65aYVtJ3l8QaVYEPImN8%2B7QV%2BCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM399ARrZeQnP%2FAH4mKtwDkeWk9MN95XJNJjOIygJYuVmgZ1ZQhiElfacpBcBHVT5xszLDpFP3f25g78X6fzrzW6zUEo4YzkyJ9JmdWYtc%2BKjdyl9BcoeOFowNs4fvE8sCGt3%2FtCm9wf%2BzabzWhO4gNNtstwFssz7aWsStB0Sur73RMQXYHHCmWp5DSrF1zEI5PpCs5NDRqrs0PhdUkY8Wl02mhSgnsBZLYNvuAYettO15BM6%2BxJUH84p89Q9%2Fx16R6768d83A8dnaXCSQZQ%2FtyYuG5dMm0T9IYJ6dtnFOqAEgUljtkpsWdHYTQ3gzqTIma5cX5wLrqzR1gpvTTWUxKTDtdkMSENvLtONwPafnSq8un%2FcuP0E95AbQFzHjOCovEaWAPWCRFl1RqgbTv92niVKvPcaxy5BTMmFNm3yxAhdPKMftOteRB6G4TT6I2su%2BPPuvCHnBapWb%2BhoqoK3%2FAj%2BzOyeJJgdEC%2BjpG%2B0eWzo5wOQL1iN6uAk2khFb%2FCHMTvp9Lpc5CNZZG8%2BflZkiiISAFtMWuiGrLY7OGgB26m2zmGKlOwt%2FG3D6cvcGnuRPzDt6P6Mzw5r1AlmVF5Xxvs5OVAzFXHlhHL%2B4kLE4tbewXqYifb%2FZKxfKlQa6tNi2wvYfrBhglJ4r6mswjsmuvQY6pgF00Z1Okomkl5hOrw1J%2F82Se8OQxC0J%2BID8qefEYTgITQwxBzSt4J5gBvBoO57G62RyYJ%2B5WYqI%2FHmQ1m1%2FLYevgBPelAfxO6EK0KksC%2BSr97f%2B%2BZ0JYG1G%2FSlIPSTgL8qttWaWV%2FinDz7YT%2BJ%2Fz7BDxBCV6EX5yZc6uocNxxCrc5u1UYDFWV7PSWFbwpKo9e%2BJ7vdxGOBfB%2BTvdjtM0rfPg9BzIRMK&X-Amz-Signature=52fdf511be2154cb5af7af77bbb0e952deb1b804abca77c0d32f5f3f6ef76749&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HMDD64C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F3kOaevvJC8%2B%2F6QtPCmOTjB%2F1mTAPn2%2BdaErEX9cPWAiAHYGkcFWROTr9f8qJq65aYVtJ3l8QaVYEPImN8%2B7QV%2BCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM399ARrZeQnP%2FAH4mKtwDkeWk9MN95XJNJjOIygJYuVmgZ1ZQhiElfacpBcBHVT5xszLDpFP3f25g78X6fzrzW6zUEo4YzkyJ9JmdWYtc%2BKjdyl9BcoeOFowNs4fvE8sCGt3%2FtCm9wf%2BzabzWhO4gNNtstwFssz7aWsStB0Sur73RMQXYHHCmWp5DSrF1zEI5PpCs5NDRqrs0PhdUkY8Wl02mhSgnsBZLYNvuAYettO15BM6%2BxJUH84p89Q9%2Fx16R6768d83A8dnaXCSQZQ%2FtyYuG5dMm0T9IYJ6dtnFOqAEgUljtkpsWdHYTQ3gzqTIma5cX5wLrqzR1gpvTTWUxKTDtdkMSENvLtONwPafnSq8un%2FcuP0E95AbQFzHjOCovEaWAPWCRFl1RqgbTv92niVKvPcaxy5BTMmFNm3yxAhdPKMftOteRB6G4TT6I2su%2BPPuvCHnBapWb%2BhoqoK3%2FAj%2BzOyeJJgdEC%2BjpG%2B0eWzo5wOQL1iN6uAk2khFb%2FCHMTvp9Lpc5CNZZG8%2BflZkiiISAFtMWuiGrLY7OGgB26m2zmGKlOwt%2FG3D6cvcGnuRPzDt6P6Mzw5r1AlmVF5Xxvs5OVAzFXHlhHL%2B4kLE4tbewXqYifb%2FZKxfKlQa6tNi2wvYfrBhglJ4r6mswjsmuvQY6pgF00Z1Okomkl5hOrw1J%2F82Se8OQxC0J%2BID8qefEYTgITQwxBzSt4J5gBvBoO57G62RyYJ%2B5WYqI%2FHmQ1m1%2FLYevgBPelAfxO6EK0KksC%2BSr97f%2B%2BZ0JYG1G%2FSlIPSTgL8qttWaWV%2FinDz7YT%2BJ%2Fz7BDxBCV6EX5yZc6uocNxxCrc5u1UYDFWV7PSWFbwpKo9e%2BJ7vdxGOBfB%2BTvdjtM0rfPg9BzIRMK&X-Amz-Signature=c7a6dbfd80c7a0aae51ce1ad41570610facebf9c2ba2c60d898c57133c4aa3a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HMDD64C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F3kOaevvJC8%2B%2F6QtPCmOTjB%2F1mTAPn2%2BdaErEX9cPWAiAHYGkcFWROTr9f8qJq65aYVtJ3l8QaVYEPImN8%2B7QV%2BCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM399ARrZeQnP%2FAH4mKtwDkeWk9MN95XJNJjOIygJYuVmgZ1ZQhiElfacpBcBHVT5xszLDpFP3f25g78X6fzrzW6zUEo4YzkyJ9JmdWYtc%2BKjdyl9BcoeOFowNs4fvE8sCGt3%2FtCm9wf%2BzabzWhO4gNNtstwFssz7aWsStB0Sur73RMQXYHHCmWp5DSrF1zEI5PpCs5NDRqrs0PhdUkY8Wl02mhSgnsBZLYNvuAYettO15BM6%2BxJUH84p89Q9%2Fx16R6768d83A8dnaXCSQZQ%2FtyYuG5dMm0T9IYJ6dtnFOqAEgUljtkpsWdHYTQ3gzqTIma5cX5wLrqzR1gpvTTWUxKTDtdkMSENvLtONwPafnSq8un%2FcuP0E95AbQFzHjOCovEaWAPWCRFl1RqgbTv92niVKvPcaxy5BTMmFNm3yxAhdPKMftOteRB6G4TT6I2su%2BPPuvCHnBapWb%2BhoqoK3%2FAj%2BzOyeJJgdEC%2BjpG%2B0eWzo5wOQL1iN6uAk2khFb%2FCHMTvp9Lpc5CNZZG8%2BflZkiiISAFtMWuiGrLY7OGgB26m2zmGKlOwt%2FG3D6cvcGnuRPzDt6P6Mzw5r1AlmVF5Xxvs5OVAzFXHlhHL%2B4kLE4tbewXqYifb%2FZKxfKlQa6tNi2wvYfrBhglJ4r6mswjsmuvQY6pgF00Z1Okomkl5hOrw1J%2F82Se8OQxC0J%2BID8qefEYTgITQwxBzSt4J5gBvBoO57G62RyYJ%2B5WYqI%2FHmQ1m1%2FLYevgBPelAfxO6EK0KksC%2BSr97f%2B%2BZ0JYG1G%2FSlIPSTgL8qttWaWV%2FinDz7YT%2BJ%2Fz7BDxBCV6EX5yZc6uocNxxCrc5u1UYDFWV7PSWFbwpKo9e%2BJ7vdxGOBfB%2BTvdjtM0rfPg9BzIRMK&X-Amz-Signature=f49915ee635444dd860624961cec6060d2b223d2de961a29ce238e12a5a98bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
