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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6LHBMB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqoIDequZmRDMm8tf7sErJrFILxMFFvKkMf1zCBQL51AiApG8bNR4yYEnMEkLFuCc2h%2BUQAwSb2F7ZSFGsqx7zvJyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaeqVG9Tat7K9clkCKtwDP8mExKqOhnjOFwn5I1weq%2BSyiikJhKVu553FwwrxSfJA6tf1x5G6yrirRySF6vFiQ76cM8DqkxiCFS7jcKzP%2Btx%2ByojK6ghMiCgKmIH2%2BnUp91KBhazpH36g4UFRmtqjfRbagMpLnnpkpgpguynSfrF%2Fr1cAIW0OCp63vy8OQ8elsJopyqosI1oqIpyxH4F4Uq5Gt8Ncpq8zL7OXmKYR2nH7m2Rtbecv9Dz0%2Bh%2Fli3Rcsy3f7oxWVDsVl4D5Qm%2Fnm4sy4rUdm9Uoahziu8mzgbpWKb3rAYrZ5RuBibxikrqdh21y1wIsCx6XueJRl5iYu%2F4Hopdj4gH0db%2BsC1EwoQ2bighDAKaj8gUzsc7q9T8MWC9KUoelVV1WlFU6QNlWNJVIWI4DMKUpFTVzsfjWb5R4XP7GFeQPxxDp9IJonDUPct0owqzFUF3yEPUr52ukxfF0COziNfwwYk2VAdi61fembFnA7BVDRgqd15CiTQLasJemBg97lEQMAXCy4azQ%2BQTByi4cwW5LzhwXCXK7ixCb1veAJT%2F9%2Bg%2FAUHf487utgaMjKFwim2T8L5HaKWkze6qaesZhezVydY0bUmwyVdV9S9ugprMYHEnmBoniZLavIYL5jblwIZZfqmcws6uBvwY6pgHa7cIApmN48EM0WfAelBRUC4eb2du%2FxDFfeUUurSCCtYIQXyvEjZoHJtwoPhVe8Cp0uKyyy%2BXcw%2FB1uHaAg1CkjIWiGddb3SGNAx7VoOgvJaYeHUCekuSW8My6w12ue%2BOmfxeKQBRmx8RFirGQSGTCusuhVDwKo%2B6S1N1DDce81Su57h3v5%2BGWCYGps0GNioNAs6viJplMYU6c5JJUzE%2F1iKVRO38k&X-Amz-Signature=a7a437174c7f4d6bb9b09cb69584df289160df492b29d98271d7a63824341133&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6LHBMB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqoIDequZmRDMm8tf7sErJrFILxMFFvKkMf1zCBQL51AiApG8bNR4yYEnMEkLFuCc2h%2BUQAwSb2F7ZSFGsqx7zvJyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaeqVG9Tat7K9clkCKtwDP8mExKqOhnjOFwn5I1weq%2BSyiikJhKVu553FwwrxSfJA6tf1x5G6yrirRySF6vFiQ76cM8DqkxiCFS7jcKzP%2Btx%2ByojK6ghMiCgKmIH2%2BnUp91KBhazpH36g4UFRmtqjfRbagMpLnnpkpgpguynSfrF%2Fr1cAIW0OCp63vy8OQ8elsJopyqosI1oqIpyxH4F4Uq5Gt8Ncpq8zL7OXmKYR2nH7m2Rtbecv9Dz0%2Bh%2Fli3Rcsy3f7oxWVDsVl4D5Qm%2Fnm4sy4rUdm9Uoahziu8mzgbpWKb3rAYrZ5RuBibxikrqdh21y1wIsCx6XueJRl5iYu%2F4Hopdj4gH0db%2BsC1EwoQ2bighDAKaj8gUzsc7q9T8MWC9KUoelVV1WlFU6QNlWNJVIWI4DMKUpFTVzsfjWb5R4XP7GFeQPxxDp9IJonDUPct0owqzFUF3yEPUr52ukxfF0COziNfwwYk2VAdi61fembFnA7BVDRgqd15CiTQLasJemBg97lEQMAXCy4azQ%2BQTByi4cwW5LzhwXCXK7ixCb1veAJT%2F9%2Bg%2FAUHf487utgaMjKFwim2T8L5HaKWkze6qaesZhezVydY0bUmwyVdV9S9ugprMYHEnmBoniZLavIYL5jblwIZZfqmcws6uBvwY6pgHa7cIApmN48EM0WfAelBRUC4eb2du%2FxDFfeUUurSCCtYIQXyvEjZoHJtwoPhVe8Cp0uKyyy%2BXcw%2FB1uHaAg1CkjIWiGddb3SGNAx7VoOgvJaYeHUCekuSW8My6w12ue%2BOmfxeKQBRmx8RFirGQSGTCusuhVDwKo%2B6S1N1DDce81Su57h3v5%2BGWCYGps0GNioNAs6viJplMYU6c5JJUzE%2F1iKVRO38k&X-Amz-Signature=a5d99db972146953cc5580daba8f72f1cfe8785fbfc390d46f34429673af45bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6LHBMB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqoIDequZmRDMm8tf7sErJrFILxMFFvKkMf1zCBQL51AiApG8bNR4yYEnMEkLFuCc2h%2BUQAwSb2F7ZSFGsqx7zvJyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaeqVG9Tat7K9clkCKtwDP8mExKqOhnjOFwn5I1weq%2BSyiikJhKVu553FwwrxSfJA6tf1x5G6yrirRySF6vFiQ76cM8DqkxiCFS7jcKzP%2Btx%2ByojK6ghMiCgKmIH2%2BnUp91KBhazpH36g4UFRmtqjfRbagMpLnnpkpgpguynSfrF%2Fr1cAIW0OCp63vy8OQ8elsJopyqosI1oqIpyxH4F4Uq5Gt8Ncpq8zL7OXmKYR2nH7m2Rtbecv9Dz0%2Bh%2Fli3Rcsy3f7oxWVDsVl4D5Qm%2Fnm4sy4rUdm9Uoahziu8mzgbpWKb3rAYrZ5RuBibxikrqdh21y1wIsCx6XueJRl5iYu%2F4Hopdj4gH0db%2BsC1EwoQ2bighDAKaj8gUzsc7q9T8MWC9KUoelVV1WlFU6QNlWNJVIWI4DMKUpFTVzsfjWb5R4XP7GFeQPxxDp9IJonDUPct0owqzFUF3yEPUr52ukxfF0COziNfwwYk2VAdi61fembFnA7BVDRgqd15CiTQLasJemBg97lEQMAXCy4azQ%2BQTByi4cwW5LzhwXCXK7ixCb1veAJT%2F9%2Bg%2FAUHf487utgaMjKFwim2T8L5HaKWkze6qaesZhezVydY0bUmwyVdV9S9ugprMYHEnmBoniZLavIYL5jblwIZZfqmcws6uBvwY6pgHa7cIApmN48EM0WfAelBRUC4eb2du%2FxDFfeUUurSCCtYIQXyvEjZoHJtwoPhVe8Cp0uKyyy%2BXcw%2FB1uHaAg1CkjIWiGddb3SGNAx7VoOgvJaYeHUCekuSW8My6w12ue%2BOmfxeKQBRmx8RFirGQSGTCusuhVDwKo%2B6S1N1DDce81Su57h3v5%2BGWCYGps0GNioNAs6viJplMYU6c5JJUzE%2F1iKVRO38k&X-Amz-Signature=66975d86d8566f77ac261a6a6e79c97ec587c6cb2c3b1de2bced2c0f908ea0e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
