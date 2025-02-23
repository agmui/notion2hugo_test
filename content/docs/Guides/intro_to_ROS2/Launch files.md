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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FE4CLL6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQShbYvdgVyQgYU3vu5S5uZNgIpBGSYmshtlDD4mLmxQIgX8Rj%2F8g99wqwOvaF0TceQIXvV6zvjk9Aol%2BAk1VQgmIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMlE9y1GH0KI77LvPSrcAyhei8LZqJ2iKeUguCqLWnc1n%2BIw7HWRXDClzl0D4KssSmIEusPvx6hHaKY%2BlOBpopOhApwVTfqv60cBQAprclw82yaGKnJHOEn%2FisWlBxtqws1sdhiim5Jp1zWS65G4O4qCRW%2BSDTtHf1eMmLWP%2FPSJfianVsp3U86C7UU19f%2Fp%2BAH4J8d1jgSsyqScm4ztyJtKp8%2FxjprmjH%2F4Z8iH0XRqEmT3eqLzx28jkbI7hc6noRqmxK8rSh5yE4NvHGFzQA%2Bz44%2FyM8eaiFfQJF4sM3RImel1BFUnvw0Ap3fD5jSm71vdFo6N9IGg4uW%2FZ%2BDUekvZ189xpyIbmTsJ41q59Pa92GkmxxcW4CQinQXjyQdDqaWGrA%2BbKQtXPGfNwgfuw4HrDu1BOAL%2FvWlHtNV5y7A%2FUS8iDG8NveveKYXsgLx10o6tTGCUIYYaPqD8Ups5VR8sYDBRcPiQ9k8d%2B3Q9c%2FM5ejZq4raUA691%2F2cnLntabry6PzhxOAn%2FkwTa%2FyNI52eL8OhzmAuS26JAwGErqvxVQIiKokQrbffBg5jeRyWe0Fy434Ast8cbqq6BJAQMLoVnubUhX99TDZX%2BH%2BNgG9hpjyP3%2FSTe4PW4MIkmS52lhMMAWgGKLkYn%2BWpjMNCP7L0GOqUBSVbCQO5epXmboB%2BykBZnAIcm1sW%2BEnKKR54ViIzXGph3nh3srG9q8x3lbKYUykNzgL22PA%2BfEiw20mJdpQqAKLr3PlWbOSCd0QSAWMTVQ4NUmdBvD5CGxhbB5NMCvd49gEM67%2Bz5SOEBbsTUL8GLYn4YfbvZ6QrTBkoS26zuTPREj2h5xWqqgPil3fsDkgPs4NAuL1LNDwaZni2CExysp2gbDmFo&X-Amz-Signature=a326b5315c1b4f97a52cca8893a830735ee83495ee1ceee518563cf66eb51963&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FE4CLL6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQShbYvdgVyQgYU3vu5S5uZNgIpBGSYmshtlDD4mLmxQIgX8Rj%2F8g99wqwOvaF0TceQIXvV6zvjk9Aol%2BAk1VQgmIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMlE9y1GH0KI77LvPSrcAyhei8LZqJ2iKeUguCqLWnc1n%2BIw7HWRXDClzl0D4KssSmIEusPvx6hHaKY%2BlOBpopOhApwVTfqv60cBQAprclw82yaGKnJHOEn%2FisWlBxtqws1sdhiim5Jp1zWS65G4O4qCRW%2BSDTtHf1eMmLWP%2FPSJfianVsp3U86C7UU19f%2Fp%2BAH4J8d1jgSsyqScm4ztyJtKp8%2FxjprmjH%2F4Z8iH0XRqEmT3eqLzx28jkbI7hc6noRqmxK8rSh5yE4NvHGFzQA%2Bz44%2FyM8eaiFfQJF4sM3RImel1BFUnvw0Ap3fD5jSm71vdFo6N9IGg4uW%2FZ%2BDUekvZ189xpyIbmTsJ41q59Pa92GkmxxcW4CQinQXjyQdDqaWGrA%2BbKQtXPGfNwgfuw4HrDu1BOAL%2FvWlHtNV5y7A%2FUS8iDG8NveveKYXsgLx10o6tTGCUIYYaPqD8Ups5VR8sYDBRcPiQ9k8d%2B3Q9c%2FM5ejZq4raUA691%2F2cnLntabry6PzhxOAn%2FkwTa%2FyNI52eL8OhzmAuS26JAwGErqvxVQIiKokQrbffBg5jeRyWe0Fy434Ast8cbqq6BJAQMLoVnubUhX99TDZX%2BH%2BNgG9hpjyP3%2FSTe4PW4MIkmS52lhMMAWgGKLkYn%2BWpjMNCP7L0GOqUBSVbCQO5epXmboB%2BykBZnAIcm1sW%2BEnKKR54ViIzXGph3nh3srG9q8x3lbKYUykNzgL22PA%2BfEiw20mJdpQqAKLr3PlWbOSCd0QSAWMTVQ4NUmdBvD5CGxhbB5NMCvd49gEM67%2Bz5SOEBbsTUL8GLYn4YfbvZ6QrTBkoS26zuTPREj2h5xWqqgPil3fsDkgPs4NAuL1LNDwaZni2CExysp2gbDmFo&X-Amz-Signature=d0f5577d83afc361af3f5459f0007d1a8031e741bb0a7ade1f4bb81e21b54e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FE4CLL6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQShbYvdgVyQgYU3vu5S5uZNgIpBGSYmshtlDD4mLmxQIgX8Rj%2F8g99wqwOvaF0TceQIXvV6zvjk9Aol%2BAk1VQgmIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMlE9y1GH0KI77LvPSrcAyhei8LZqJ2iKeUguCqLWnc1n%2BIw7HWRXDClzl0D4KssSmIEusPvx6hHaKY%2BlOBpopOhApwVTfqv60cBQAprclw82yaGKnJHOEn%2FisWlBxtqws1sdhiim5Jp1zWS65G4O4qCRW%2BSDTtHf1eMmLWP%2FPSJfianVsp3U86C7UU19f%2Fp%2BAH4J8d1jgSsyqScm4ztyJtKp8%2FxjprmjH%2F4Z8iH0XRqEmT3eqLzx28jkbI7hc6noRqmxK8rSh5yE4NvHGFzQA%2Bz44%2FyM8eaiFfQJF4sM3RImel1BFUnvw0Ap3fD5jSm71vdFo6N9IGg4uW%2FZ%2BDUekvZ189xpyIbmTsJ41q59Pa92GkmxxcW4CQinQXjyQdDqaWGrA%2BbKQtXPGfNwgfuw4HrDu1BOAL%2FvWlHtNV5y7A%2FUS8iDG8NveveKYXsgLx10o6tTGCUIYYaPqD8Ups5VR8sYDBRcPiQ9k8d%2B3Q9c%2FM5ejZq4raUA691%2F2cnLntabry6PzhxOAn%2FkwTa%2FyNI52eL8OhzmAuS26JAwGErqvxVQIiKokQrbffBg5jeRyWe0Fy434Ast8cbqq6BJAQMLoVnubUhX99TDZX%2BH%2BNgG9hpjyP3%2FSTe4PW4MIkmS52lhMMAWgGKLkYn%2BWpjMNCP7L0GOqUBSVbCQO5epXmboB%2BykBZnAIcm1sW%2BEnKKR54ViIzXGph3nh3srG9q8x3lbKYUykNzgL22PA%2BfEiw20mJdpQqAKLr3PlWbOSCd0QSAWMTVQ4NUmdBvD5CGxhbB5NMCvd49gEM67%2Bz5SOEBbsTUL8GLYn4YfbvZ6QrTBkoS26zuTPREj2h5xWqqgPil3fsDkgPs4NAuL1LNDwaZni2CExysp2gbDmFo&X-Amz-Signature=8aa99a8663dba4ef3c4d84b89fe3914b01df3c3b403212f6512f8a3d4aee0798&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
