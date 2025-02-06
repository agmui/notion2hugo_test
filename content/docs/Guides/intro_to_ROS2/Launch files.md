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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLWQZS6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDjC1WU1%2F%2BGtW9nYC87%2BoOxzg9RaTValE59oiG6POfdHAiBkY4uJ9am%2FEi0a16r22LOIXT1Zzz87Jxi%2B16KJUgsZ%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMGti4izPPMdcZVLmFKtwDfJxwbOyK5rbxEqXhRZVR1ry6vtL4GHAbWUjM2yvaI5ly5bVH6usmCNfmAfMvq7gZrgFQX0k1ROeBIR1SG4FLsRQLLxBKNSkYNNr0KQ7r4TsK27Y4Jf8S3A9nmw%2B0EGa2TX7xJqox3IphH%2Bz1kdAgztf3HARwvN3lgdDHEUdJrBHhZL6G9xsSax%2Fu0qSZVVUSzp3I%2BAzMBrHkXJaGJOL0Vojf7%2BKaP00VeNgcRfuCq9uQDH3P6BAlqK32058ZVkzvPh%2BV3KgXq%2B8G43%2BYvTkSOl5mj2HCGGqpwRPiwMne%2BjioE18Obowb7e1OtNBJPdwYYzPOSjTHaz8Mass557fHW%2BhrsnxflgAJ4yoqbKPQhjCIrGEmVGTTOlURqbyIxaiswtoyWTq4ekGiy6Nj2S%2BwwoVmbpm8NalPXk7bt%2FlfDedLPLJGjIVuO1VsF8dxVpMo5PJswlQUT1PsEGfQhn7giFx33kbM0ssIZiRVc5fAtzLOgP4IQ%2BEwQTaZD6mSzS4GbH0ZjkWhop6w13leDywklt5IVu1%2FrUEj4F5fFGfZH3NhViP34wQxexFmyg7BnQiA9Gl2tJsK9d%2BSge%2Bt5W8%2Bm%2BN91K7gp8aUE%2FxseF%2FlYz%2B6meNf0%2B6Hx4E7uHEwnu6RvQY6pgGJYbotbmODoklAhtv%2Bt9GDcMeuRquo8BNJoFzFpXq7aOnBkMPRoI5Nh%2BkvXKM9RPL25Spn2mEXJ4kQxNoMygMydjRscprSEl%2BMskJhWaaTo1%2BeF5EvsRodUwAqGM7ZxaHmY7VVeouxdPQ20Pw6SifzedURc5auZQfDCm1wV0so9%2FxFJNfPaCVyMfKXnR%2Bcp3LEGO%2FLCWC6UXH8cfvKCxSjD5hzo4FV&X-Amz-Signature=251f5b86b4b58d586b1ebd66dd9fb7c5bb4969265b1cd76ea4de89faa2d1edf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLWQZS6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDjC1WU1%2F%2BGtW9nYC87%2BoOxzg9RaTValE59oiG6POfdHAiBkY4uJ9am%2FEi0a16r22LOIXT1Zzz87Jxi%2B16KJUgsZ%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMGti4izPPMdcZVLmFKtwDfJxwbOyK5rbxEqXhRZVR1ry6vtL4GHAbWUjM2yvaI5ly5bVH6usmCNfmAfMvq7gZrgFQX0k1ROeBIR1SG4FLsRQLLxBKNSkYNNr0KQ7r4TsK27Y4Jf8S3A9nmw%2B0EGa2TX7xJqox3IphH%2Bz1kdAgztf3HARwvN3lgdDHEUdJrBHhZL6G9xsSax%2Fu0qSZVVUSzp3I%2BAzMBrHkXJaGJOL0Vojf7%2BKaP00VeNgcRfuCq9uQDH3P6BAlqK32058ZVkzvPh%2BV3KgXq%2B8G43%2BYvTkSOl5mj2HCGGqpwRPiwMne%2BjioE18Obowb7e1OtNBJPdwYYzPOSjTHaz8Mass557fHW%2BhrsnxflgAJ4yoqbKPQhjCIrGEmVGTTOlURqbyIxaiswtoyWTq4ekGiy6Nj2S%2BwwoVmbpm8NalPXk7bt%2FlfDedLPLJGjIVuO1VsF8dxVpMo5PJswlQUT1PsEGfQhn7giFx33kbM0ssIZiRVc5fAtzLOgP4IQ%2BEwQTaZD6mSzS4GbH0ZjkWhop6w13leDywklt5IVu1%2FrUEj4F5fFGfZH3NhViP34wQxexFmyg7BnQiA9Gl2tJsK9d%2BSge%2Bt5W8%2Bm%2BN91K7gp8aUE%2FxseF%2FlYz%2B6meNf0%2B6Hx4E7uHEwnu6RvQY6pgGJYbotbmODoklAhtv%2Bt9GDcMeuRquo8BNJoFzFpXq7aOnBkMPRoI5Nh%2BkvXKM9RPL25Spn2mEXJ4kQxNoMygMydjRscprSEl%2BMskJhWaaTo1%2BeF5EvsRodUwAqGM7ZxaHmY7VVeouxdPQ20Pw6SifzedURc5auZQfDCm1wV0so9%2FxFJNfPaCVyMfKXnR%2Bcp3LEGO%2FLCWC6UXH8cfvKCxSjD5hzo4FV&X-Amz-Signature=bb64af80479cd290b82f65561e863c7227d3043948541888595d3d2a42b50136&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLWQZS6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDjC1WU1%2F%2BGtW9nYC87%2BoOxzg9RaTValE59oiG6POfdHAiBkY4uJ9am%2FEi0a16r22LOIXT1Zzz87Jxi%2B16KJUgsZ%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMGti4izPPMdcZVLmFKtwDfJxwbOyK5rbxEqXhRZVR1ry6vtL4GHAbWUjM2yvaI5ly5bVH6usmCNfmAfMvq7gZrgFQX0k1ROeBIR1SG4FLsRQLLxBKNSkYNNr0KQ7r4TsK27Y4Jf8S3A9nmw%2B0EGa2TX7xJqox3IphH%2Bz1kdAgztf3HARwvN3lgdDHEUdJrBHhZL6G9xsSax%2Fu0qSZVVUSzp3I%2BAzMBrHkXJaGJOL0Vojf7%2BKaP00VeNgcRfuCq9uQDH3P6BAlqK32058ZVkzvPh%2BV3KgXq%2B8G43%2BYvTkSOl5mj2HCGGqpwRPiwMne%2BjioE18Obowb7e1OtNBJPdwYYzPOSjTHaz8Mass557fHW%2BhrsnxflgAJ4yoqbKPQhjCIrGEmVGTTOlURqbyIxaiswtoyWTq4ekGiy6Nj2S%2BwwoVmbpm8NalPXk7bt%2FlfDedLPLJGjIVuO1VsF8dxVpMo5PJswlQUT1PsEGfQhn7giFx33kbM0ssIZiRVc5fAtzLOgP4IQ%2BEwQTaZD6mSzS4GbH0ZjkWhop6w13leDywklt5IVu1%2FrUEj4F5fFGfZH3NhViP34wQxexFmyg7BnQiA9Gl2tJsK9d%2BSge%2Bt5W8%2Bm%2BN91K7gp8aUE%2FxseF%2FlYz%2B6meNf0%2B6Hx4E7uHEwnu6RvQY6pgGJYbotbmODoklAhtv%2Bt9GDcMeuRquo8BNJoFzFpXq7aOnBkMPRoI5Nh%2BkvXKM9RPL25Spn2mEXJ4kQxNoMygMydjRscprSEl%2BMskJhWaaTo1%2BeF5EvsRodUwAqGM7ZxaHmY7VVeouxdPQ20Pw6SifzedURc5auZQfDCm1wV0so9%2FxFJNfPaCVyMfKXnR%2Bcp3LEGO%2FLCWC6UXH8cfvKCxSjD5hzo4FV&X-Amz-Signature=2452888199444bca391066003d423ab678de94d3d26a37bdd5f30e86f584bf07&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
