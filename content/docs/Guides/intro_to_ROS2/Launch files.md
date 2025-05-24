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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPDN6AXZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBZNW9I9hI%2FWiEApsLB9%2BfETpMadyL5s1NtA7oydzU5tAiB%2B7J8AWBLYIRVbhkaeJ7uGJ5NL%2F%2BxHWVma88FRLFj2pyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMFwX8ljt%2B0Vm2UzlLKtwDyvcOyz8BOgEQKIkLAxPn%2BW2qGKVId6zjQvol5H9kof920Bd0TvDl%2FTdiupX7Pjn0qVO%2FYD2DnKxEtKmjsLrjQmHkgdKs8ExvtQrZrpkjNP53ysfghpvSEK2bjRB1YfjZ5CZWzXPamjMbWDL3cppiLfMs%2FbRWPyFvG%2BIlrx%2F2rvpWEs0oyWxiEJA53YWwFSkO%2FO0H2pJWb5p8Gy4dilNbpNmeJJlTSg1rcF4ySnEjS1U4NL1yn07nxepoDjZOItpEYpaFYiqTqBszHhv%2BYJl0nu63j0utJTZRrwbxmHUK3fKfEplg5rnVi%2BTZfaklmQndvJoq1Rc4UTXfTY8MnvIi1vIVmKwiwbaE15K9zWy02%2BtC6Er3m7lLxZMYsPRDZNQwUec8Chkoq%2FE55JV3sCl9onIIC66COuYGceTP64w1WONaAAkcEp3IjIuvlMuo7M8zGMxMxKB%2BNUemHN8gQHTJKdJuiN7lHN%2Bl1QnmVbUJP72NvOZ2OU3alUWD9prQ47g1Y7fP%2FvS6Vb1BueAT4B1BOpdycBzxFHUptAENyAogSgpLJCj1SfnVcJoCNAggeRHa%2BkgLS1YSWBAh%2BFTMTTzjViWZ7ijJv8zi4dO2PQ29rgA64j30%2F5HJ4Ymq3nsw7bnIwQY6pgFJFRMD%2F%2FUEMg9el1Vksgeq6h8jbSh6wpppZGZDN8U4YkvbQL7fS54jvI8jttysTk3nTXJbH1yK7VEgp%2BA5pAugINcm6Frpwf0MBtfa12eCfQQJ7xev25PgGgoHA%2BE3GEw2GT8%2BeW%2BNY56crltlPJexnvAJtxOpGBFOeH52oLf%2BJrUtjNC8PiWtHTyx1Dysa%2BQ6mtwVmwF9kuueswnDYPrkAiWxqJhf&X-Amz-Signature=bfe891e9f3aeecadfce3124148577af65f96f4a0a20f5a7a92c80fb14d8021fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPDN6AXZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBZNW9I9hI%2FWiEApsLB9%2BfETpMadyL5s1NtA7oydzU5tAiB%2B7J8AWBLYIRVbhkaeJ7uGJ5NL%2F%2BxHWVma88FRLFj2pyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMFwX8ljt%2B0Vm2UzlLKtwDyvcOyz8BOgEQKIkLAxPn%2BW2qGKVId6zjQvol5H9kof920Bd0TvDl%2FTdiupX7Pjn0qVO%2FYD2DnKxEtKmjsLrjQmHkgdKs8ExvtQrZrpkjNP53ysfghpvSEK2bjRB1YfjZ5CZWzXPamjMbWDL3cppiLfMs%2FbRWPyFvG%2BIlrx%2F2rvpWEs0oyWxiEJA53YWwFSkO%2FO0H2pJWb5p8Gy4dilNbpNmeJJlTSg1rcF4ySnEjS1U4NL1yn07nxepoDjZOItpEYpaFYiqTqBszHhv%2BYJl0nu63j0utJTZRrwbxmHUK3fKfEplg5rnVi%2BTZfaklmQndvJoq1Rc4UTXfTY8MnvIi1vIVmKwiwbaE15K9zWy02%2BtC6Er3m7lLxZMYsPRDZNQwUec8Chkoq%2FE55JV3sCl9onIIC66COuYGceTP64w1WONaAAkcEp3IjIuvlMuo7M8zGMxMxKB%2BNUemHN8gQHTJKdJuiN7lHN%2Bl1QnmVbUJP72NvOZ2OU3alUWD9prQ47g1Y7fP%2FvS6Vb1BueAT4B1BOpdycBzxFHUptAENyAogSgpLJCj1SfnVcJoCNAggeRHa%2BkgLS1YSWBAh%2BFTMTTzjViWZ7ijJv8zi4dO2PQ29rgA64j30%2F5HJ4Ymq3nsw7bnIwQY6pgFJFRMD%2F%2FUEMg9el1Vksgeq6h8jbSh6wpppZGZDN8U4YkvbQL7fS54jvI8jttysTk3nTXJbH1yK7VEgp%2BA5pAugINcm6Frpwf0MBtfa12eCfQQJ7xev25PgGgoHA%2BE3GEw2GT8%2BeW%2BNY56crltlPJexnvAJtxOpGBFOeH52oLf%2BJrUtjNC8PiWtHTyx1Dysa%2BQ6mtwVmwF9kuueswnDYPrkAiWxqJhf&X-Amz-Signature=e8242a6fdc1475798ebf58eed032f1025e5e2fa1b25f25a7245727b09d95e3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPDN6AXZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBZNW9I9hI%2FWiEApsLB9%2BfETpMadyL5s1NtA7oydzU5tAiB%2B7J8AWBLYIRVbhkaeJ7uGJ5NL%2F%2BxHWVma88FRLFj2pyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMFwX8ljt%2B0Vm2UzlLKtwDyvcOyz8BOgEQKIkLAxPn%2BW2qGKVId6zjQvol5H9kof920Bd0TvDl%2FTdiupX7Pjn0qVO%2FYD2DnKxEtKmjsLrjQmHkgdKs8ExvtQrZrpkjNP53ysfghpvSEK2bjRB1YfjZ5CZWzXPamjMbWDL3cppiLfMs%2FbRWPyFvG%2BIlrx%2F2rvpWEs0oyWxiEJA53YWwFSkO%2FO0H2pJWb5p8Gy4dilNbpNmeJJlTSg1rcF4ySnEjS1U4NL1yn07nxepoDjZOItpEYpaFYiqTqBszHhv%2BYJl0nu63j0utJTZRrwbxmHUK3fKfEplg5rnVi%2BTZfaklmQndvJoq1Rc4UTXfTY8MnvIi1vIVmKwiwbaE15K9zWy02%2BtC6Er3m7lLxZMYsPRDZNQwUec8Chkoq%2FE55JV3sCl9onIIC66COuYGceTP64w1WONaAAkcEp3IjIuvlMuo7M8zGMxMxKB%2BNUemHN8gQHTJKdJuiN7lHN%2Bl1QnmVbUJP72NvOZ2OU3alUWD9prQ47g1Y7fP%2FvS6Vb1BueAT4B1BOpdycBzxFHUptAENyAogSgpLJCj1SfnVcJoCNAggeRHa%2BkgLS1YSWBAh%2BFTMTTzjViWZ7ijJv8zi4dO2PQ29rgA64j30%2F5HJ4Ymq3nsw7bnIwQY6pgFJFRMD%2F%2FUEMg9el1Vksgeq6h8jbSh6wpppZGZDN8U4YkvbQL7fS54jvI8jttysTk3nTXJbH1yK7VEgp%2BA5pAugINcm6Frpwf0MBtfa12eCfQQJ7xev25PgGgoHA%2BE3GEw2GT8%2BeW%2BNY56crltlPJexnvAJtxOpGBFOeH52oLf%2BJrUtjNC8PiWtHTyx1Dysa%2BQ6mtwVmwF9kuueswnDYPrkAiWxqJhf&X-Amz-Signature=6b81ae5d4158e7c031e6f912884f6d73ef4b0471091997170b35d9b3fa873aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
