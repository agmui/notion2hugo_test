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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAF6ZPJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC4vauTtqpy%2FKocRB0O8ZJrjin8mB5i5wgt81lqVk00CgIhAOTzVcrHmIQyJWisO9GfeRtn%2FOGpAkpuZs5bNWxm48ndKv8DCBwQABoMNjM3NDIzMTgzODA1IgxKieazov8SGdoV3kUq3AO7MON2fS1S5wRuXAkqvd3ujySkSZCRsh%2Fw6gzo6HN7Hj%2FfYnnmiZaasA421kfZjS51xiSso741gMng31k8bCOyT0Qy%2BPKIDIEPKJJttXGOPJ3wNYDZzLEv7NmgMRC8dUypnDk4CrGLTcQM0UPOHyaamLxsEjZfxm9H1ImQJ9us6%2BAX49rsSFrol3EQRVRvucQVxnQuJgvqzQ4i24dasN3sugMRU7622Jd1rx1kLG9uXeFOG2wS%2FALM8mETi9oZ6DpDuqLLRhLhuNIaB3M%2B8PXppvWjTYG4bp7Z12RMfFbo1k6Bin8tlsEMO2R%2FYOCdPFIIoA14KOGzdgr8F%2BAk9JxAWq894S%2F3Yv8X24fVnzJ87NDi4IggLK2MmQ%2Fm3Ty9FsZ8cxVPdwZn2Tql2hne%2BigBRYfdh1zhqGQv2apqIE8igfkbjxkL8jF6QcvDad9G2q1twBoD7XolkeZa6wmBzYWRiF1trkRaiejkPLAWB4VzIbaGP6LHeaLvZtNHpf8ZfAoS%2BFgMnbXAuzepWh3x1FZMfPnEKHwQn1QiBme5t73cw1nTosC5TsHh2cmjSPUIYCmrcWN8AExdftPir2%2BAu3WwXSJoKNsOWJl1v1NI4orvDzBYPSidL4JndiaFmTCKqcjBBjqkAXwEy4iuQ421frYpsamPcHpSPu7pEInrXn3kM3gu9BBcH4%2FTBzJ9dKFUa25xxM0%2FAMHxTyQeYFZQzHs2VgP%2BqkpzK5BarhSBYQGuSs00Y7zlBNp7maDv8c7UkUGgPv6%2Fogfq8wZNkT1ga%2BPiyVwDh6hCww5yjjaeD9Q%2B49iGQF3JWooDFA7AvB9UCx95deQNBodSugPOWcbNo4u2e%2FfESmBqxbLC&X-Amz-Signature=516f1eac0dc8f3fde48101fc3e6b04ae307c52af3b8ec01b0b4b7cc0a07d4c11&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAF6ZPJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC4vauTtqpy%2FKocRB0O8ZJrjin8mB5i5wgt81lqVk00CgIhAOTzVcrHmIQyJWisO9GfeRtn%2FOGpAkpuZs5bNWxm48ndKv8DCBwQABoMNjM3NDIzMTgzODA1IgxKieazov8SGdoV3kUq3AO7MON2fS1S5wRuXAkqvd3ujySkSZCRsh%2Fw6gzo6HN7Hj%2FfYnnmiZaasA421kfZjS51xiSso741gMng31k8bCOyT0Qy%2BPKIDIEPKJJttXGOPJ3wNYDZzLEv7NmgMRC8dUypnDk4CrGLTcQM0UPOHyaamLxsEjZfxm9H1ImQJ9us6%2BAX49rsSFrol3EQRVRvucQVxnQuJgvqzQ4i24dasN3sugMRU7622Jd1rx1kLG9uXeFOG2wS%2FALM8mETi9oZ6DpDuqLLRhLhuNIaB3M%2B8PXppvWjTYG4bp7Z12RMfFbo1k6Bin8tlsEMO2R%2FYOCdPFIIoA14KOGzdgr8F%2BAk9JxAWq894S%2F3Yv8X24fVnzJ87NDi4IggLK2MmQ%2Fm3Ty9FsZ8cxVPdwZn2Tql2hne%2BigBRYfdh1zhqGQv2apqIE8igfkbjxkL8jF6QcvDad9G2q1twBoD7XolkeZa6wmBzYWRiF1trkRaiejkPLAWB4VzIbaGP6LHeaLvZtNHpf8ZfAoS%2BFgMnbXAuzepWh3x1FZMfPnEKHwQn1QiBme5t73cw1nTosC5TsHh2cmjSPUIYCmrcWN8AExdftPir2%2BAu3WwXSJoKNsOWJl1v1NI4orvDzBYPSidL4JndiaFmTCKqcjBBjqkAXwEy4iuQ421frYpsamPcHpSPu7pEInrXn3kM3gu9BBcH4%2FTBzJ9dKFUa25xxM0%2FAMHxTyQeYFZQzHs2VgP%2BqkpzK5BarhSBYQGuSs00Y7zlBNp7maDv8c7UkUGgPv6%2Fogfq8wZNkT1ga%2BPiyVwDh6hCww5yjjaeD9Q%2B49iGQF3JWooDFA7AvB9UCx95deQNBodSugPOWcbNo4u2e%2FfESmBqxbLC&X-Amz-Signature=4cd86d75b42194c22d2f34360a885d77d954b4963378bb171b630571170f559b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAF6ZPJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC4vauTtqpy%2FKocRB0O8ZJrjin8mB5i5wgt81lqVk00CgIhAOTzVcrHmIQyJWisO9GfeRtn%2FOGpAkpuZs5bNWxm48ndKv8DCBwQABoMNjM3NDIzMTgzODA1IgxKieazov8SGdoV3kUq3AO7MON2fS1S5wRuXAkqvd3ujySkSZCRsh%2Fw6gzo6HN7Hj%2FfYnnmiZaasA421kfZjS51xiSso741gMng31k8bCOyT0Qy%2BPKIDIEPKJJttXGOPJ3wNYDZzLEv7NmgMRC8dUypnDk4CrGLTcQM0UPOHyaamLxsEjZfxm9H1ImQJ9us6%2BAX49rsSFrol3EQRVRvucQVxnQuJgvqzQ4i24dasN3sugMRU7622Jd1rx1kLG9uXeFOG2wS%2FALM8mETi9oZ6DpDuqLLRhLhuNIaB3M%2B8PXppvWjTYG4bp7Z12RMfFbo1k6Bin8tlsEMO2R%2FYOCdPFIIoA14KOGzdgr8F%2BAk9JxAWq894S%2F3Yv8X24fVnzJ87NDi4IggLK2MmQ%2Fm3Ty9FsZ8cxVPdwZn2Tql2hne%2BigBRYfdh1zhqGQv2apqIE8igfkbjxkL8jF6QcvDad9G2q1twBoD7XolkeZa6wmBzYWRiF1trkRaiejkPLAWB4VzIbaGP6LHeaLvZtNHpf8ZfAoS%2BFgMnbXAuzepWh3x1FZMfPnEKHwQn1QiBme5t73cw1nTosC5TsHh2cmjSPUIYCmrcWN8AExdftPir2%2BAu3WwXSJoKNsOWJl1v1NI4orvDzBYPSidL4JndiaFmTCKqcjBBjqkAXwEy4iuQ421frYpsamPcHpSPu7pEInrXn3kM3gu9BBcH4%2FTBzJ9dKFUa25xxM0%2FAMHxTyQeYFZQzHs2VgP%2BqkpzK5BarhSBYQGuSs00Y7zlBNp7maDv8c7UkUGgPv6%2Fogfq8wZNkT1ga%2BPiyVwDh6hCww5yjjaeD9Q%2B49iGQF3JWooDFA7AvB9UCx95deQNBodSugPOWcbNo4u2e%2FfESmBqxbLC&X-Amz-Signature=0972f036d5caec08f1c7d1ad497f94bdcfcb28ff1d27c6fef94263d3aa4b9780&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
