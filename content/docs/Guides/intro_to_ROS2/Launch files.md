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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJZC43C%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQKj7HSQ9En6o4xa8DMZCkJXdbmOVLfWBLPS88IqtWaQIgJhBl5qE6Owtr489MxX6okpF%2Bvlp%2B6ds02qWKHoRJWHcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2B4VFLVIN9unowsuCrcAxRZF3TPEAzBqMxgK2E39uTWi33T5C7MzXRQDy%2F60CkGstNhEBNyFvIsKIZYziKnKK7xvAMgvzFrAJWRtE2j%2B4QnFz2OJ6lhV5p0YqYti9rJs4EQ7enN2C8HDfamGZjmDu21t0Laggsk5w717KsE6nH84wXx%2FYaE1j3%2F6fiVPgOg5owZ3GnxtiiWdyOW2uJBSMN3aA8Frsx4SYdbh%2BfciiVTFKst4VvQ2CYzaFeGo6DQiskKyw38cKA%2FOkq8fcnFvzNZNOGVYhJJXilYjSbJq%2BH7OuGbaNJ9hFlzsoXn%2FKdP9PljEstR%2BQ1HNmR7YGAn%2BXsSnuYzE7l3PW87l%2FtpQfv05P%2B8tP0IwnYJiDwgbguWh5wpBq91%2B3B8hkY4x4Uo%2BObCOOZi82Yw68imUbSsuCsgCPwBvIsy%2BBgz1aSxHkrtwaHn%2FclgwvQ5levXfs4KU0Y2KYRGRB5E4CNPCKEhtLrH9TwLFrmyC%2FiLK%2B7243zUKlJtwfULr%2FL2No%2F%2FBzP5wKMB6gK7lge1QUnYuzoaComQCGkWZ%2BLA6zjcikxQ08Zt9At%2Fmpma5zaXhd27U9fJqzkoL4V50CiPiPP8tZMiH5cL2Rel6HyAgPzaedaXFaY9MGEHfnf3r7uuVlYrMJPsw8IGOqUBMb8d0DIsOyDdo1R2w4ho4ekOOjiQujTVGdYO8wgIrz%2FNihpTv%2BbmHib6%2Ber4ZLXagIDD12hRWjQNbZT39n6YzJSFudRimCUbERMhGIVdkFGFYFgCv8mHZwdbkleDK3GkNud2Zy54WJqmeHzFNdUnyKJ%2FM%2FfaTzgmsAjVhy1pRaBogMvSPbnMneId0mc68Tp7wtZnlSGhgBbVNLdlPYQ7n76wJ7bG&X-Amz-Signature=372a62fbb306ba36d9167e9e5116823ae21a936395f047705a24d0ac420fe904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJZC43C%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQKj7HSQ9En6o4xa8DMZCkJXdbmOVLfWBLPS88IqtWaQIgJhBl5qE6Owtr489MxX6okpF%2Bvlp%2B6ds02qWKHoRJWHcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2B4VFLVIN9unowsuCrcAxRZF3TPEAzBqMxgK2E39uTWi33T5C7MzXRQDy%2F60CkGstNhEBNyFvIsKIZYziKnKK7xvAMgvzFrAJWRtE2j%2B4QnFz2OJ6lhV5p0YqYti9rJs4EQ7enN2C8HDfamGZjmDu21t0Laggsk5w717KsE6nH84wXx%2FYaE1j3%2F6fiVPgOg5owZ3GnxtiiWdyOW2uJBSMN3aA8Frsx4SYdbh%2BfciiVTFKst4VvQ2CYzaFeGo6DQiskKyw38cKA%2FOkq8fcnFvzNZNOGVYhJJXilYjSbJq%2BH7OuGbaNJ9hFlzsoXn%2FKdP9PljEstR%2BQ1HNmR7YGAn%2BXsSnuYzE7l3PW87l%2FtpQfv05P%2B8tP0IwnYJiDwgbguWh5wpBq91%2B3B8hkY4x4Uo%2BObCOOZi82Yw68imUbSsuCsgCPwBvIsy%2BBgz1aSxHkrtwaHn%2FclgwvQ5levXfs4KU0Y2KYRGRB5E4CNPCKEhtLrH9TwLFrmyC%2FiLK%2B7243zUKlJtwfULr%2FL2No%2F%2FBzP5wKMB6gK7lge1QUnYuzoaComQCGkWZ%2BLA6zjcikxQ08Zt9At%2Fmpma5zaXhd27U9fJqzkoL4V50CiPiPP8tZMiH5cL2Rel6HyAgPzaedaXFaY9MGEHfnf3r7uuVlYrMJPsw8IGOqUBMb8d0DIsOyDdo1R2w4ho4ekOOjiQujTVGdYO8wgIrz%2FNihpTv%2BbmHib6%2Ber4ZLXagIDD12hRWjQNbZT39n6YzJSFudRimCUbERMhGIVdkFGFYFgCv8mHZwdbkleDK3GkNud2Zy54WJqmeHzFNdUnyKJ%2FM%2FfaTzgmsAjVhy1pRaBogMvSPbnMneId0mc68Tp7wtZnlSGhgBbVNLdlPYQ7n76wJ7bG&X-Amz-Signature=3a045f11dce81c13c2b1c49f0347d9e1c304f7a627cfa628aed8a4222c3cdedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJZC43C%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQKj7HSQ9En6o4xa8DMZCkJXdbmOVLfWBLPS88IqtWaQIgJhBl5qE6Owtr489MxX6okpF%2Bvlp%2B6ds02qWKHoRJWHcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJ%2B4VFLVIN9unowsuCrcAxRZF3TPEAzBqMxgK2E39uTWi33T5C7MzXRQDy%2F60CkGstNhEBNyFvIsKIZYziKnKK7xvAMgvzFrAJWRtE2j%2B4QnFz2OJ6lhV5p0YqYti9rJs4EQ7enN2C8HDfamGZjmDu21t0Laggsk5w717KsE6nH84wXx%2FYaE1j3%2F6fiVPgOg5owZ3GnxtiiWdyOW2uJBSMN3aA8Frsx4SYdbh%2BfciiVTFKst4VvQ2CYzaFeGo6DQiskKyw38cKA%2FOkq8fcnFvzNZNOGVYhJJXilYjSbJq%2BH7OuGbaNJ9hFlzsoXn%2FKdP9PljEstR%2BQ1HNmR7YGAn%2BXsSnuYzE7l3PW87l%2FtpQfv05P%2B8tP0IwnYJiDwgbguWh5wpBq91%2B3B8hkY4x4Uo%2BObCOOZi82Yw68imUbSsuCsgCPwBvIsy%2BBgz1aSxHkrtwaHn%2FclgwvQ5levXfs4KU0Y2KYRGRB5E4CNPCKEhtLrH9TwLFrmyC%2FiLK%2B7243zUKlJtwfULr%2FL2No%2F%2FBzP5wKMB6gK7lge1QUnYuzoaComQCGkWZ%2BLA6zjcikxQ08Zt9At%2Fmpma5zaXhd27U9fJqzkoL4V50CiPiPP8tZMiH5cL2Rel6HyAgPzaedaXFaY9MGEHfnf3r7uuVlYrMJPsw8IGOqUBMb8d0DIsOyDdo1R2w4ho4ekOOjiQujTVGdYO8wgIrz%2FNihpTv%2BbmHib6%2Ber4ZLXagIDD12hRWjQNbZT39n6YzJSFudRimCUbERMhGIVdkFGFYFgCv8mHZwdbkleDK3GkNud2Zy54WJqmeHzFNdUnyKJ%2FM%2FfaTzgmsAjVhy1pRaBogMvSPbnMneId0mc68Tp7wtZnlSGhgBbVNLdlPYQ7n76wJ7bG&X-Amz-Signature=308c30351a02bd90385e4875e7965d7051f81d3fe44dc9378035064a54cbcb1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
