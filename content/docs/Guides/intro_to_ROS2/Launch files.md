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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFN2XBU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWqaZ3oGIOhVJN8rN%2B9%2Bk%2FzLdVslyxcyxjbDUggv%2BEqAiAuazbmozxdVJ%2FD5P44w4OHi74CdnWUM57sWiaSOr%2Brvyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6vj%2F0ofNLAjmHQCtKtwDCP%2FZQuhKWItMSGeVvrj2uXKWxbTdZPy%2FTjfzN8zA1PYlPEoXAqjgzyN3TmJHnbeAZjY7fCTrzTWff7jMmFK8x%2FVqzbuVfzmCF%2BrXzA5gIxLr%2BrAZhm1u45bK0g6ompZxEYZQicwj6BwhdoihnFDEQasqUmel1UWRWeHlS31%2FwR%2FgD9EM%2Bsa5zjVnBw5881tY%2Bz%2FK7Fg5ENjG0f2IQbjeOAuYWFmwG59NXSg5R4jelYmQbT117ChsAKAWRIYQRJw3USZs4ELz2xcj2KMJBlgrkTOQju39SlUAVphnb9JamHFqeT%2Figcpkzog%2F4rOLrufU%2FufyqMydXRxbuJZjDbnbOmzJ6Jvs%2BgHErbGOgxl%2BkPa5CpCgU9yK1Xw8Xuetll2BE9fQ67R5wyUmZYYSPLlwzplblyplrWdmfEy8Iu9JxPM9URDA8jmpbFbj8HFArFw3%2F0NX4jS%2F7ybnWIaH7xqOH3VqIcVuMsRYoWooBh1QpTp4MnE3HiQFzXfp1JFWtQ6Gbk2ATkVKVajw5bofS%2B%2F62eE0G%2FDlgwzqm%2FjO9aapSxAYBg6Kst8Jc64qtnJCTg13gd%2BaG7ICJArimZU5ICt4XBjcxJd5edExzPCBoD3F1S2UX4UDDuH7MHoWBkAwhJ7LvwY6pgH2qasDDwTFZ73fPbiQyKqHfEfC7LgbDmLLCtt4FTONvTkja0jA4PZUZV%2BMuI8HK%2FfQW6%2FDJD2wNEKR0rINjbpTjgKZ2M1fQuwikUc%2BhHQ7LZ2qQiGCR3Ndvjob0Z%2FYY6uMgwW9Undtv%2F65pb50WZ6URB2P05fQamu2ms6t3FyQ%2F7LBkkXf6ht2ObtX5QkFC9pi7bl3301IimYYsIDpSo%2BzOdcnZa86&X-Amz-Signature=b9073e54a85645641c50fe9b968c6837bd7030f846af5f8dcad5305ac205cd6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFN2XBU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWqaZ3oGIOhVJN8rN%2B9%2Bk%2FzLdVslyxcyxjbDUggv%2BEqAiAuazbmozxdVJ%2FD5P44w4OHi74CdnWUM57sWiaSOr%2Brvyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6vj%2F0ofNLAjmHQCtKtwDCP%2FZQuhKWItMSGeVvrj2uXKWxbTdZPy%2FTjfzN8zA1PYlPEoXAqjgzyN3TmJHnbeAZjY7fCTrzTWff7jMmFK8x%2FVqzbuVfzmCF%2BrXzA5gIxLr%2BrAZhm1u45bK0g6ompZxEYZQicwj6BwhdoihnFDEQasqUmel1UWRWeHlS31%2FwR%2FgD9EM%2Bsa5zjVnBw5881tY%2Bz%2FK7Fg5ENjG0f2IQbjeOAuYWFmwG59NXSg5R4jelYmQbT117ChsAKAWRIYQRJw3USZs4ELz2xcj2KMJBlgrkTOQju39SlUAVphnb9JamHFqeT%2Figcpkzog%2F4rOLrufU%2FufyqMydXRxbuJZjDbnbOmzJ6Jvs%2BgHErbGOgxl%2BkPa5CpCgU9yK1Xw8Xuetll2BE9fQ67R5wyUmZYYSPLlwzplblyplrWdmfEy8Iu9JxPM9URDA8jmpbFbj8HFArFw3%2F0NX4jS%2F7ybnWIaH7xqOH3VqIcVuMsRYoWooBh1QpTp4MnE3HiQFzXfp1JFWtQ6Gbk2ATkVKVajw5bofS%2B%2F62eE0G%2FDlgwzqm%2FjO9aapSxAYBg6Kst8Jc64qtnJCTg13gd%2BaG7ICJArimZU5ICt4XBjcxJd5edExzPCBoD3F1S2UX4UDDuH7MHoWBkAwhJ7LvwY6pgH2qasDDwTFZ73fPbiQyKqHfEfC7LgbDmLLCtt4FTONvTkja0jA4PZUZV%2BMuI8HK%2FfQW6%2FDJD2wNEKR0rINjbpTjgKZ2M1fQuwikUc%2BhHQ7LZ2qQiGCR3Ndvjob0Z%2FYY6uMgwW9Undtv%2F65pb50WZ6URB2P05fQamu2ms6t3FyQ%2F7LBkkXf6ht2ObtX5QkFC9pi7bl3301IimYYsIDpSo%2BzOdcnZa86&X-Amz-Signature=b5aa8ada9d02c6479e0742fcf95880ce0981c09611bda9155a3f95106db829ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFN2XBU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWqaZ3oGIOhVJN8rN%2B9%2Bk%2FzLdVslyxcyxjbDUggv%2BEqAiAuazbmozxdVJ%2FD5P44w4OHi74CdnWUM57sWiaSOr%2Brvyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6vj%2F0ofNLAjmHQCtKtwDCP%2FZQuhKWItMSGeVvrj2uXKWxbTdZPy%2FTjfzN8zA1PYlPEoXAqjgzyN3TmJHnbeAZjY7fCTrzTWff7jMmFK8x%2FVqzbuVfzmCF%2BrXzA5gIxLr%2BrAZhm1u45bK0g6ompZxEYZQicwj6BwhdoihnFDEQasqUmel1UWRWeHlS31%2FwR%2FgD9EM%2Bsa5zjVnBw5881tY%2Bz%2FK7Fg5ENjG0f2IQbjeOAuYWFmwG59NXSg5R4jelYmQbT117ChsAKAWRIYQRJw3USZs4ELz2xcj2KMJBlgrkTOQju39SlUAVphnb9JamHFqeT%2Figcpkzog%2F4rOLrufU%2FufyqMydXRxbuJZjDbnbOmzJ6Jvs%2BgHErbGOgxl%2BkPa5CpCgU9yK1Xw8Xuetll2BE9fQ67R5wyUmZYYSPLlwzplblyplrWdmfEy8Iu9JxPM9URDA8jmpbFbj8HFArFw3%2F0NX4jS%2F7ybnWIaH7xqOH3VqIcVuMsRYoWooBh1QpTp4MnE3HiQFzXfp1JFWtQ6Gbk2ATkVKVajw5bofS%2B%2F62eE0G%2FDlgwzqm%2FjO9aapSxAYBg6Kst8Jc64qtnJCTg13gd%2BaG7ICJArimZU5ICt4XBjcxJd5edExzPCBoD3F1S2UX4UDDuH7MHoWBkAwhJ7LvwY6pgH2qasDDwTFZ73fPbiQyKqHfEfC7LgbDmLLCtt4FTONvTkja0jA4PZUZV%2BMuI8HK%2FfQW6%2FDJD2wNEKR0rINjbpTjgKZ2M1fQuwikUc%2BhHQ7LZ2qQiGCR3Ndvjob0Z%2FYY6uMgwW9Undtv%2F65pb50WZ6URB2P05fQamu2ms6t3FyQ%2F7LBkkXf6ht2ObtX5QkFC9pi7bl3301IimYYsIDpSo%2BzOdcnZa86&X-Amz-Signature=6ea79439cfc6153abab6af5e43ad80b80060ff7358cecf6463e60b23051e0fda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
