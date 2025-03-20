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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YCGMZ2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICkMbQFSc%2BVORU37BJ98QUusdKbSOthNmMuFM1gHsbPOAiBc4vmVLzuPFv63eMgbkdt2qFSf%2FNgAdxONlHwfTQWNUSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzLA2bfZq43xC8KcKtwDLTNBwxHCG3GVljU6gIkgSH%2FUiTVOyapGN27guDiYvzzd1wtmT%2Bsz7CXLOVSIlqmajRmV36rWN8dYyZZa%2FPwxpudUj5DGGx3qMoPuRG0ZSK5qTcLPcM12MJQN6qIeDohzuHLr8vHF8R2OMjNCjmridqfHbJf%2FCyCEinDgHbTU7LqCz800Qs1F2CI8CBxcn96rirN%2FrOtvF%2Bi9SIXAk14vrlc32MhAk6WxKNHHdN2eIMPrcq4STtNZkBxT8zCvXtJHkxeeuUXCDcWEW0let1bOPIfzK8ONVrnDnMiTU8uhBHP5B0E7q4uK%2BIt08VuqYHF%2BeczM2lV2Lsnx1Z9AAE%2BfKyZOPuxv3IK%2FSVtq%2FQJkxyqJoF7mPoAQZX%2FOJaDY35exuSFLh9NGlM6TY0p5yHrLTP9%2B1vMVCqo0hm4yzfWH5nIABPCp6NIuHzroB0qJnUfWJQH9WjGn7GrJkhm9%2BNCAkwRSb8uhqFTxoCdxBehou2GF3Fycdp6TdCvkNEbUEofXRr88Gddo8vPuvQJu9oFwcry7dbcz5SWKvJMsLoy3CWB6AHzcSyY%2FeMoxUeZS4YohYGW3%2Bx6%2F6EudyOJj4Ji2D1dUoC2%2BStIp2D2R8mdlsp8R%2FjogvcKTO1M2ej0wj4fyvgY6pgF8mpbnUKxFzEfTQIVMwMM5ZXpxAsgEUq35qhyitt6YfORl7S08yW08iXzPKF7Zg9FF9fjvbRDnoIlftQZwhHNOi5bnfvcUqIEZCP2xXb62zFzvAAvx4ZNWjn%2Bnl1xAd8DhiHKmFYOKmmFWkHtev1ti2qSSX0lA2FiweQfWOv2NfVaV%2FqyOP3qfl%2F%2Bt0lP7pC%2BhSyBjgyQa9qXaX2FUCjDNPTshQqqs&X-Amz-Signature=a0ba411038fe62a8e68b0f9b3b192d383cdf7be5200a0799959904f165664d97&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YCGMZ2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICkMbQFSc%2BVORU37BJ98QUusdKbSOthNmMuFM1gHsbPOAiBc4vmVLzuPFv63eMgbkdt2qFSf%2FNgAdxONlHwfTQWNUSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzLA2bfZq43xC8KcKtwDLTNBwxHCG3GVljU6gIkgSH%2FUiTVOyapGN27guDiYvzzd1wtmT%2Bsz7CXLOVSIlqmajRmV36rWN8dYyZZa%2FPwxpudUj5DGGx3qMoPuRG0ZSK5qTcLPcM12MJQN6qIeDohzuHLr8vHF8R2OMjNCjmridqfHbJf%2FCyCEinDgHbTU7LqCz800Qs1F2CI8CBxcn96rirN%2FrOtvF%2Bi9SIXAk14vrlc32MhAk6WxKNHHdN2eIMPrcq4STtNZkBxT8zCvXtJHkxeeuUXCDcWEW0let1bOPIfzK8ONVrnDnMiTU8uhBHP5B0E7q4uK%2BIt08VuqYHF%2BeczM2lV2Lsnx1Z9AAE%2BfKyZOPuxv3IK%2FSVtq%2FQJkxyqJoF7mPoAQZX%2FOJaDY35exuSFLh9NGlM6TY0p5yHrLTP9%2B1vMVCqo0hm4yzfWH5nIABPCp6NIuHzroB0qJnUfWJQH9WjGn7GrJkhm9%2BNCAkwRSb8uhqFTxoCdxBehou2GF3Fycdp6TdCvkNEbUEofXRr88Gddo8vPuvQJu9oFwcry7dbcz5SWKvJMsLoy3CWB6AHzcSyY%2FeMoxUeZS4YohYGW3%2Bx6%2F6EudyOJj4Ji2D1dUoC2%2BStIp2D2R8mdlsp8R%2FjogvcKTO1M2ej0wj4fyvgY6pgF8mpbnUKxFzEfTQIVMwMM5ZXpxAsgEUq35qhyitt6YfORl7S08yW08iXzPKF7Zg9FF9fjvbRDnoIlftQZwhHNOi5bnfvcUqIEZCP2xXb62zFzvAAvx4ZNWjn%2Bnl1xAd8DhiHKmFYOKmmFWkHtev1ti2qSSX0lA2FiweQfWOv2NfVaV%2FqyOP3qfl%2F%2Bt0lP7pC%2BhSyBjgyQa9qXaX2FUCjDNPTshQqqs&X-Amz-Signature=255785672992b20d6abc887dd49db2e491f6e94c449338059899abe2a13110f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YCGMZ2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICkMbQFSc%2BVORU37BJ98QUusdKbSOthNmMuFM1gHsbPOAiBc4vmVLzuPFv63eMgbkdt2qFSf%2FNgAdxONlHwfTQWNUSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BzLA2bfZq43xC8KcKtwDLTNBwxHCG3GVljU6gIkgSH%2FUiTVOyapGN27guDiYvzzd1wtmT%2Bsz7CXLOVSIlqmajRmV36rWN8dYyZZa%2FPwxpudUj5DGGx3qMoPuRG0ZSK5qTcLPcM12MJQN6qIeDohzuHLr8vHF8R2OMjNCjmridqfHbJf%2FCyCEinDgHbTU7LqCz800Qs1F2CI8CBxcn96rirN%2FrOtvF%2Bi9SIXAk14vrlc32MhAk6WxKNHHdN2eIMPrcq4STtNZkBxT8zCvXtJHkxeeuUXCDcWEW0let1bOPIfzK8ONVrnDnMiTU8uhBHP5B0E7q4uK%2BIt08VuqYHF%2BeczM2lV2Lsnx1Z9AAE%2BfKyZOPuxv3IK%2FSVtq%2FQJkxyqJoF7mPoAQZX%2FOJaDY35exuSFLh9NGlM6TY0p5yHrLTP9%2B1vMVCqo0hm4yzfWH5nIABPCp6NIuHzroB0qJnUfWJQH9WjGn7GrJkhm9%2BNCAkwRSb8uhqFTxoCdxBehou2GF3Fycdp6TdCvkNEbUEofXRr88Gddo8vPuvQJu9oFwcry7dbcz5SWKvJMsLoy3CWB6AHzcSyY%2FeMoxUeZS4YohYGW3%2Bx6%2F6EudyOJj4Ji2D1dUoC2%2BStIp2D2R8mdlsp8R%2FjogvcKTO1M2ej0wj4fyvgY6pgF8mpbnUKxFzEfTQIVMwMM5ZXpxAsgEUq35qhyitt6YfORl7S08yW08iXzPKF7Zg9FF9fjvbRDnoIlftQZwhHNOi5bnfvcUqIEZCP2xXb62zFzvAAvx4ZNWjn%2Bnl1xAd8DhiHKmFYOKmmFWkHtev1ti2qSSX0lA2FiweQfWOv2NfVaV%2FqyOP3qfl%2F%2Bt0lP7pC%2BhSyBjgyQa9qXaX2FUCjDNPTshQqqs&X-Amz-Signature=aca5d5b5645eccfe4b9e91fbfab1b4f144be3bda84ce7e5c3548c705b0efaae1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
