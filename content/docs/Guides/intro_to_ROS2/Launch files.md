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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27T7QWG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4B9%2B29IpmXJJj%2BWnUvTWzLzj6AhcQpP0wGqdrleZ0VAiEAhCeutrGxmzkiAmX1McVhNQV7%2F3z59cdmnJkxeLjoacMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoEMfXFmr7bFGcqUircA6EwgUgmsr2FBUZZcrPBn3mvJ5Wv1mTQAAokc%2BDCXi2vJfEFFhOWnaQ1Df9bTe6DrDlIvd68aYqrwGpHufCRUXRNwm9efsxmCvJQwjEtCRYVQ8T0AgpASCvxIMaTUkwX465NxwRxUA98BTL9qSYlOTmqC%2Fpg75Llft2QPoULlbkL4Cm93K37DtWTXINXj%2FkJplNEQlzv9KwUq%2B3Ob9YXrZc6l6ObtiuiQMBVl61BCcMkNwPDQRkJOTP3v4gA1q4ZlbcRuDxAKUZmfcribkG79GsXiAUpkvbKW1rpft87xg%2BDTDvJhzfwdHe5b97OoPdukYH4YloFyRV7pP%2BqfcaSd%2FjfUbj5g9poSIb6rU33o53NhUbsi6vGSsZmwN76fFCbhzzCbb4IOD8hA0JTQfx44KhP9Zk1k2DqANyhk0q21lnfqzV74MQ5TkM6zK4Eo9avkly2LHet1ye2xTwQTWv7k%2BPceNSvCqaqqwizMxweKWmQyhMIGRoAni9x%2FT5gW%2F6%2BHNY3Zt7vjxYc1FcxpWUaK7mXVuvERF3MFuUJ84%2B5CM5BtK4a44pSKSOOZVUl%2BMrSMthFBRBhSggvBaZqU8%2B8iRcE5YBtHDl6B0j5QG3cYLS5pt7plwaCpTZ%2F9iAtMNrx1MIGOqUBFIzeuuxenwk1Qrp4X%2BsHgWp1cABBWn19G62zZBp0z%2Fvo3Al5AtQIFnP8QSsC%2BB5J73qXNCnDW8QdLXq2IfmG%2BjCePLkkJTmyJ5cy4C3WsNjDG1eL02wXQ6ipSLsUNe7Y7XTSAnekUAXm%2BFXlC91OebwEIEuxWD95UHMsdIc5Uno6hd48gEYnoGoD934LQXy7VFR2%2BrsIOYzkM9N27SDUytMDWUxs&X-Amz-Signature=a79be1bfb85cb0ef1a98c88530b955cfc794c93a1c2578580cb5b77b40ed4bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27T7QWG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4B9%2B29IpmXJJj%2BWnUvTWzLzj6AhcQpP0wGqdrleZ0VAiEAhCeutrGxmzkiAmX1McVhNQV7%2F3z59cdmnJkxeLjoacMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoEMfXFmr7bFGcqUircA6EwgUgmsr2FBUZZcrPBn3mvJ5Wv1mTQAAokc%2BDCXi2vJfEFFhOWnaQ1Df9bTe6DrDlIvd68aYqrwGpHufCRUXRNwm9efsxmCvJQwjEtCRYVQ8T0AgpASCvxIMaTUkwX465NxwRxUA98BTL9qSYlOTmqC%2Fpg75Llft2QPoULlbkL4Cm93K37DtWTXINXj%2FkJplNEQlzv9KwUq%2B3Ob9YXrZc6l6ObtiuiQMBVl61BCcMkNwPDQRkJOTP3v4gA1q4ZlbcRuDxAKUZmfcribkG79GsXiAUpkvbKW1rpft87xg%2BDTDvJhzfwdHe5b97OoPdukYH4YloFyRV7pP%2BqfcaSd%2FjfUbj5g9poSIb6rU33o53NhUbsi6vGSsZmwN76fFCbhzzCbb4IOD8hA0JTQfx44KhP9Zk1k2DqANyhk0q21lnfqzV74MQ5TkM6zK4Eo9avkly2LHet1ye2xTwQTWv7k%2BPceNSvCqaqqwizMxweKWmQyhMIGRoAni9x%2FT5gW%2F6%2BHNY3Zt7vjxYc1FcxpWUaK7mXVuvERF3MFuUJ84%2B5CM5BtK4a44pSKSOOZVUl%2BMrSMthFBRBhSggvBaZqU8%2B8iRcE5YBtHDl6B0j5QG3cYLS5pt7plwaCpTZ%2F9iAtMNrx1MIGOqUBFIzeuuxenwk1Qrp4X%2BsHgWp1cABBWn19G62zZBp0z%2Fvo3Al5AtQIFnP8QSsC%2BB5J73qXNCnDW8QdLXq2IfmG%2BjCePLkkJTmyJ5cy4C3WsNjDG1eL02wXQ6ipSLsUNe7Y7XTSAnekUAXm%2BFXlC91OebwEIEuxWD95UHMsdIc5Uno6hd48gEYnoGoD934LQXy7VFR2%2BrsIOYzkM9N27SDUytMDWUxs&X-Amz-Signature=144e02a6408067c0bd229419f469403aba0c5c2fe1ac8e530c39187d8fdcc8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27T7QWG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4B9%2B29IpmXJJj%2BWnUvTWzLzj6AhcQpP0wGqdrleZ0VAiEAhCeutrGxmzkiAmX1McVhNQV7%2F3z59cdmnJkxeLjoacMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoEMfXFmr7bFGcqUircA6EwgUgmsr2FBUZZcrPBn3mvJ5Wv1mTQAAokc%2BDCXi2vJfEFFhOWnaQ1Df9bTe6DrDlIvd68aYqrwGpHufCRUXRNwm9efsxmCvJQwjEtCRYVQ8T0AgpASCvxIMaTUkwX465NxwRxUA98BTL9qSYlOTmqC%2Fpg75Llft2QPoULlbkL4Cm93K37DtWTXINXj%2FkJplNEQlzv9KwUq%2B3Ob9YXrZc6l6ObtiuiQMBVl61BCcMkNwPDQRkJOTP3v4gA1q4ZlbcRuDxAKUZmfcribkG79GsXiAUpkvbKW1rpft87xg%2BDTDvJhzfwdHe5b97OoPdukYH4YloFyRV7pP%2BqfcaSd%2FjfUbj5g9poSIb6rU33o53NhUbsi6vGSsZmwN76fFCbhzzCbb4IOD8hA0JTQfx44KhP9Zk1k2DqANyhk0q21lnfqzV74MQ5TkM6zK4Eo9avkly2LHet1ye2xTwQTWv7k%2BPceNSvCqaqqwizMxweKWmQyhMIGRoAni9x%2FT5gW%2F6%2BHNY3Zt7vjxYc1FcxpWUaK7mXVuvERF3MFuUJ84%2B5CM5BtK4a44pSKSOOZVUl%2BMrSMthFBRBhSggvBaZqU8%2B8iRcE5YBtHDl6B0j5QG3cYLS5pt7plwaCpTZ%2F9iAtMNrx1MIGOqUBFIzeuuxenwk1Qrp4X%2BsHgWp1cABBWn19G62zZBp0z%2Fvo3Al5AtQIFnP8QSsC%2BB5J73qXNCnDW8QdLXq2IfmG%2BjCePLkkJTmyJ5cy4C3WsNjDG1eL02wXQ6ipSLsUNe7Y7XTSAnekUAXm%2BFXlC91OebwEIEuxWD95UHMsdIc5Uno6hd48gEYnoGoD934LQXy7VFR2%2BrsIOYzkM9N27SDUytMDWUxs&X-Amz-Signature=4df307feb2dfe50215d5358ec3035bdc410b7150a786eeb0e82d5c6a58a6a6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
