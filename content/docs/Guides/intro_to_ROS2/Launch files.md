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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJW3RPE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDtJJZdfpGHOSXNttzQBkc7lKvU7efy5iaa11IUaRizAQIhAIkgHOBQ29TQXWhBOiTub9Y7ZRxfhzR7Db%2FwpuZfLnfhKv8DCHEQABoMNjM3NDIzMTgzODA1IgzUiIqc%2FTkMZH25Ugcq3AO9fiJnk1%2FL3RE4YfSoE%2BKyoOaGqahHDC%2Bdyi8GbbNc%2Bw8TNDtYzcP%2F6VURbCLVggbg%2BgPdzyF6M4UHNrDGe0ls%2BmgWkQgE5%2BakmvqWKMXdXan1Pe6gFo8Du94f4%2FHT%2BS9LPbcyzxsQoHVDu%2BrmAfnnCSCifVdmuJ3KHudmmBtjpL%2FS9FlRtZfRoBcX35OLFfmED5Swv%2F4K1JDiPy8cRd2HwoH3qRVpPpn1ZuyQWHOJmCaFXeRPsgYV2TwzXWOENuB3zyw%2FvJ7YQsVXi5ayP9ecPWTqEUmDj8ojEOoa1qNG5Aw6YfxzDJ2DeNhofAqGEuvYgQdqFj8z0J%2FahXxN9Nd4nw%2FDbjWgt6liv0C5PviziulxdrIjPwA9Su%2BUOUvcjraOAdB%2BTLA2VSHaGlgg%2BEspTTjzSR99wTFbJ0zWRrljhAUJlBoShI63V1zasWl9s8swvq2%2FKN71dpMN3eSwvEQiuRT4zoVb%2BLCLVKu8gfmHulOJgAW%2Fd%2B7xvUguq0LeHozWWiug07dAYXnL9iUj%2BnuQQAg%2BitP72m7CGKi3mho5lqXrKaSqc6tDrQO%2FSk%2FnnFqFmTXtTuS2ZyJ1QJbu7WX5yPR509rk4avPBzoIuPKTzhqZpLgEZzQrBtTg5TCkzsu9BjqkAdqo%2FtAqE04m3XBfzcjdPfoqanUl%2F6VdpaKJS8z8BTjAkLQk50e2c905tTlboYmb7icXspsY7VKXPHQBTk71PgPjsYZXL0TbzgEavmIa%2BSyXf2sTg9vVlbu%2FS7qBz8lAVsW%2FRCxrd62QiZWNOt%2Bt%2BWoBBzdotvo%2F%2FxFpfdXKDnkLIgc8rTwCIwLVpT79nTmq8JgIhBztPcU65ok284HipaJHJ9K5&X-Amz-Signature=773d81e8bd41758ce5eef2d1dd9163ec695a40ada04ab9061bf65ab8e0d7bdf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJW3RPE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDtJJZdfpGHOSXNttzQBkc7lKvU7efy5iaa11IUaRizAQIhAIkgHOBQ29TQXWhBOiTub9Y7ZRxfhzR7Db%2FwpuZfLnfhKv8DCHEQABoMNjM3NDIzMTgzODA1IgzUiIqc%2FTkMZH25Ugcq3AO9fiJnk1%2FL3RE4YfSoE%2BKyoOaGqahHDC%2Bdyi8GbbNc%2Bw8TNDtYzcP%2F6VURbCLVggbg%2BgPdzyF6M4UHNrDGe0ls%2BmgWkQgE5%2BakmvqWKMXdXan1Pe6gFo8Du94f4%2FHT%2BS9LPbcyzxsQoHVDu%2BrmAfnnCSCifVdmuJ3KHudmmBtjpL%2FS9FlRtZfRoBcX35OLFfmED5Swv%2F4K1JDiPy8cRd2HwoH3qRVpPpn1ZuyQWHOJmCaFXeRPsgYV2TwzXWOENuB3zyw%2FvJ7YQsVXi5ayP9ecPWTqEUmDj8ojEOoa1qNG5Aw6YfxzDJ2DeNhofAqGEuvYgQdqFj8z0J%2FahXxN9Nd4nw%2FDbjWgt6liv0C5PviziulxdrIjPwA9Su%2BUOUvcjraOAdB%2BTLA2VSHaGlgg%2BEspTTjzSR99wTFbJ0zWRrljhAUJlBoShI63V1zasWl9s8swvq2%2FKN71dpMN3eSwvEQiuRT4zoVb%2BLCLVKu8gfmHulOJgAW%2Fd%2B7xvUguq0LeHozWWiug07dAYXnL9iUj%2BnuQQAg%2BitP72m7CGKi3mho5lqXrKaSqc6tDrQO%2FSk%2FnnFqFmTXtTuS2ZyJ1QJbu7WX5yPR509rk4avPBzoIuPKTzhqZpLgEZzQrBtTg5TCkzsu9BjqkAdqo%2FtAqE04m3XBfzcjdPfoqanUl%2F6VdpaKJS8z8BTjAkLQk50e2c905tTlboYmb7icXspsY7VKXPHQBTk71PgPjsYZXL0TbzgEavmIa%2BSyXf2sTg9vVlbu%2FS7qBz8lAVsW%2FRCxrd62QiZWNOt%2Bt%2BWoBBzdotvo%2F%2FxFpfdXKDnkLIgc8rTwCIwLVpT79nTmq8JgIhBztPcU65ok284HipaJHJ9K5&X-Amz-Signature=0a388232d766b94a79615711754cb4ebeb461cc882c7443489e94721d871b416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJW3RPE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDtJJZdfpGHOSXNttzQBkc7lKvU7efy5iaa11IUaRizAQIhAIkgHOBQ29TQXWhBOiTub9Y7ZRxfhzR7Db%2FwpuZfLnfhKv8DCHEQABoMNjM3NDIzMTgzODA1IgzUiIqc%2FTkMZH25Ugcq3AO9fiJnk1%2FL3RE4YfSoE%2BKyoOaGqahHDC%2Bdyi8GbbNc%2Bw8TNDtYzcP%2F6VURbCLVggbg%2BgPdzyF6M4UHNrDGe0ls%2BmgWkQgE5%2BakmvqWKMXdXan1Pe6gFo8Du94f4%2FHT%2BS9LPbcyzxsQoHVDu%2BrmAfnnCSCifVdmuJ3KHudmmBtjpL%2FS9FlRtZfRoBcX35OLFfmED5Swv%2F4K1JDiPy8cRd2HwoH3qRVpPpn1ZuyQWHOJmCaFXeRPsgYV2TwzXWOENuB3zyw%2FvJ7YQsVXi5ayP9ecPWTqEUmDj8ojEOoa1qNG5Aw6YfxzDJ2DeNhofAqGEuvYgQdqFj8z0J%2FahXxN9Nd4nw%2FDbjWgt6liv0C5PviziulxdrIjPwA9Su%2BUOUvcjraOAdB%2BTLA2VSHaGlgg%2BEspTTjzSR99wTFbJ0zWRrljhAUJlBoShI63V1zasWl9s8swvq2%2FKN71dpMN3eSwvEQiuRT4zoVb%2BLCLVKu8gfmHulOJgAW%2Fd%2B7xvUguq0LeHozWWiug07dAYXnL9iUj%2BnuQQAg%2BitP72m7CGKi3mho5lqXrKaSqc6tDrQO%2FSk%2FnnFqFmTXtTuS2ZyJ1QJbu7WX5yPR509rk4avPBzoIuPKTzhqZpLgEZzQrBtTg5TCkzsu9BjqkAdqo%2FtAqE04m3XBfzcjdPfoqanUl%2F6VdpaKJS8z8BTjAkLQk50e2c905tTlboYmb7icXspsY7VKXPHQBTk71PgPjsYZXL0TbzgEavmIa%2BSyXf2sTg9vVlbu%2FS7qBz8lAVsW%2FRCxrd62QiZWNOt%2Bt%2BWoBBzdotvo%2F%2FxFpfdXKDnkLIgc8rTwCIwLVpT79nTmq8JgIhBztPcU65ok284HipaJHJ9K5&X-Amz-Signature=0453e0520bf6e7e4f8ef97c59ce4d37530bb7681cc29f01a4e3049800029f047&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
