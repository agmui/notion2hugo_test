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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGGFSLX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIA%2FA5MNLOBy6FXBpoSOfGFr7UUHp5FFhbnOEJcsDxNfwAiBWn%2FSwWZfCXvwdabGvi21v%2BM%2Fs%2BRND6BUHUcObH0vIaCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhSGZj2zVSHTbKgsKtwD4xbPxxtKo0CLu6ToziB2mLbGUxlJigvN0HyX0TgPZ%2FXI0%2B7N3RtSlbVE5s7MDTN29VpcVXt9gKFZfBUp7zkMVWTlQ%2Fr3RFeQSmdJFjtYG2N8wz4bwwDm7BeoOJgr0rbZkkKmv1zcS2Ye3eLSMibMx6cVmILf9q9BmeuisP57S5mkLmMPdeRessSYRliVAy5OAmsnPUFVkxbB6icmeXQtoiltqP4lDGykvZ3PWtpB8sfDwxC2s8Kg0QbjY%2Bf6k0venWQOCZVcZRLos6TTwmyWWY4jEJ5bdEr9fBcmknlJ6lnvPyXizgY2eQQCvCLotXOjX4f5dxm6zkXgsUTDJnNdXYPqbN%2BDQXlUAv0tivs91UXmk6xd8pbLXY8WV4JpIYRQdsHoufS0XXXXkYYl0KFnu2c41bCY1RYfU6HmJLMRYY%2BbnxKUsZQl%2BQwto7xZoolAXyQzH1cvgjZ3tZEt44K3kQhelmFn2wjOqiI1gDVrfhFYcopWw4Uu6%2FK1C1pJOIfbIHGX12D80GGZWyazOWj7fGChK2CoNPaJR2zrSa4JEldGMgmgzWgOEZuBAn8%2F6Ordfmf87z53Pfk0SW3IQHkejwncMqHqFDeBszitOxMRMVdTj%2FmzYjepENWFtO8wh%2FfTvQY6pgF3cpcvyFKPk%2FjmJQdudbFuMmkmTYtOlsmS0VpLH1VdoUGS6hHR2DQ%2FC%2FUjt8Lp1vem3EGyn0S38fku%2BLylfb4UrtP6GZzCawHBcBP1Zdf6kdMywp4p6kadzx4yWI5mnNcqud%2Bd1DjG1j%2BLYAMZ3lBXrl5Depe3J9dwuMGVP8nIQ1ydFuJtFJxfUSZT3FjQYhl8Ryu8bzB1YvTQYvoXHTlW2VAfDj7A&X-Amz-Signature=e201d93eb780066c6b45485b0e9cd314e566dbfb5c10dcea1459259746839521&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGGFSLX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIA%2FA5MNLOBy6FXBpoSOfGFr7UUHp5FFhbnOEJcsDxNfwAiBWn%2FSwWZfCXvwdabGvi21v%2BM%2Fs%2BRND6BUHUcObH0vIaCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhSGZj2zVSHTbKgsKtwD4xbPxxtKo0CLu6ToziB2mLbGUxlJigvN0HyX0TgPZ%2FXI0%2B7N3RtSlbVE5s7MDTN29VpcVXt9gKFZfBUp7zkMVWTlQ%2Fr3RFeQSmdJFjtYG2N8wz4bwwDm7BeoOJgr0rbZkkKmv1zcS2Ye3eLSMibMx6cVmILf9q9BmeuisP57S5mkLmMPdeRessSYRliVAy5OAmsnPUFVkxbB6icmeXQtoiltqP4lDGykvZ3PWtpB8sfDwxC2s8Kg0QbjY%2Bf6k0venWQOCZVcZRLos6TTwmyWWY4jEJ5bdEr9fBcmknlJ6lnvPyXizgY2eQQCvCLotXOjX4f5dxm6zkXgsUTDJnNdXYPqbN%2BDQXlUAv0tivs91UXmk6xd8pbLXY8WV4JpIYRQdsHoufS0XXXXkYYl0KFnu2c41bCY1RYfU6HmJLMRYY%2BbnxKUsZQl%2BQwto7xZoolAXyQzH1cvgjZ3tZEt44K3kQhelmFn2wjOqiI1gDVrfhFYcopWw4Uu6%2FK1C1pJOIfbIHGX12D80GGZWyazOWj7fGChK2CoNPaJR2zrSa4JEldGMgmgzWgOEZuBAn8%2F6Ordfmf87z53Pfk0SW3IQHkejwncMqHqFDeBszitOxMRMVdTj%2FmzYjepENWFtO8wh%2FfTvQY6pgF3cpcvyFKPk%2FjmJQdudbFuMmkmTYtOlsmS0VpLH1VdoUGS6hHR2DQ%2FC%2FUjt8Lp1vem3EGyn0S38fku%2BLylfb4UrtP6GZzCawHBcBP1Zdf6kdMywp4p6kadzx4yWI5mnNcqud%2Bd1DjG1j%2BLYAMZ3lBXrl5Depe3J9dwuMGVP8nIQ1ydFuJtFJxfUSZT3FjQYhl8Ryu8bzB1YvTQYvoXHTlW2VAfDj7A&X-Amz-Signature=2e876fe32eea8eb67267be6ed679b3232ec7b45a1eccd9a3cebdd5a33b281a71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGGFSLX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIA%2FA5MNLOBy6FXBpoSOfGFr7UUHp5FFhbnOEJcsDxNfwAiBWn%2FSwWZfCXvwdabGvi21v%2BM%2Fs%2BRND6BUHUcObH0vIaCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHhSGZj2zVSHTbKgsKtwD4xbPxxtKo0CLu6ToziB2mLbGUxlJigvN0HyX0TgPZ%2FXI0%2B7N3RtSlbVE5s7MDTN29VpcVXt9gKFZfBUp7zkMVWTlQ%2Fr3RFeQSmdJFjtYG2N8wz4bwwDm7BeoOJgr0rbZkkKmv1zcS2Ye3eLSMibMx6cVmILf9q9BmeuisP57S5mkLmMPdeRessSYRliVAy5OAmsnPUFVkxbB6icmeXQtoiltqP4lDGykvZ3PWtpB8sfDwxC2s8Kg0QbjY%2Bf6k0venWQOCZVcZRLos6TTwmyWWY4jEJ5bdEr9fBcmknlJ6lnvPyXizgY2eQQCvCLotXOjX4f5dxm6zkXgsUTDJnNdXYPqbN%2BDQXlUAv0tivs91UXmk6xd8pbLXY8WV4JpIYRQdsHoufS0XXXXkYYl0KFnu2c41bCY1RYfU6HmJLMRYY%2BbnxKUsZQl%2BQwto7xZoolAXyQzH1cvgjZ3tZEt44K3kQhelmFn2wjOqiI1gDVrfhFYcopWw4Uu6%2FK1C1pJOIfbIHGX12D80GGZWyazOWj7fGChK2CoNPaJR2zrSa4JEldGMgmgzWgOEZuBAn8%2F6Ordfmf87z53Pfk0SW3IQHkejwncMqHqFDeBszitOxMRMVdTj%2FmzYjepENWFtO8wh%2FfTvQY6pgF3cpcvyFKPk%2FjmJQdudbFuMmkmTYtOlsmS0VpLH1VdoUGS6hHR2DQ%2FC%2FUjt8Lp1vem3EGyn0S38fku%2BLylfb4UrtP6GZzCawHBcBP1Zdf6kdMywp4p6kadzx4yWI5mnNcqud%2Bd1DjG1j%2BLYAMZ3lBXrl5Depe3J9dwuMGVP8nIQ1ydFuJtFJxfUSZT3FjQYhl8Ryu8bzB1YvTQYvoXHTlW2VAfDj7A&X-Amz-Signature=10c045675fe70c21bb5d85b9aaae79c0f704a6fbf32bd3a2f16335087748e8e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
