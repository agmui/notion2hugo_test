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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJFFBQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGjVfD%2Bvv7wGkClCZuN1nuF7N%2BeEPE1%2BheeXg0e7bOrfAiAIhTWcloFnEn9tpj5rOZEDf3emHU6CUgFrCfIwPe9ueCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMtOPfm5LJyiabtXjMKtwD7WuyeKID5jLyGLs5ecCA15KqtTlB98eb3LSKv55L1%2F0MXWGNXkwSVvQUOAJ7Jus2hhlnIs7c40GOAwiMx3LcfCPesv9boeA5%2Bc%2FoMKAu7FkRHicAB6k1iV45Dm5mqAbH2PZmX0Q8IN4Fpnr6U0SS%2BV9piu%2FA8cicJnmX4ITUy8kawFSzK60S6ZrEtWjMHmZQnMT1qBssPe9v3x1RC2SFiPmRllVeudX2YQdK%2BWwWA8vKYdJzzs%2Btknt6iFbstJ%2FQqA1udPKk5gzTPV%2Fe3EP6QsVSsN6hCfxsl0G8fFBgW3yhNhEszQ6wFsSGmNfCGn8RnnBoBu4AszKuFwJzO99KKndH0Zk7%2Bl8t%2Fq6XAptYjZQ7eiV40u6eRKD%2FuZTd0VTAxzyi4Y3Rc6mO6uC5%2FJQ15HdpWBefY6SK8BNmPQN20MvPGWdNo1v64FvgwJHpM2qC4LSiXuOxGXVzmfJ1CfssUYbEK2cYyYSX9Wn3cgnTcduX%2FWYYiWWLpayuCvO5KOIwl43KTWUvtJ3SAMAzCGillOwqDvacLzsujQGOJQXahJz0A8rf0tDL2frhDDLnsbIXjZpFAu0gwTSVCNZ62UktqF9xOs9zbZtN40N4ZbUgAVuWhBUYWSupmdi0EgkwiI2NvQY6pgEmUqug56AQVyJ8Gg2MIQib6EySwx%2BWkzczCzz0PnLJgn1aoHNnDMhzay9Z3ivfe2N1JmwHvm84Ix5S%2F5QC3xMEeoup3Lu887HBoXFOBPZuulIPK9gQX2bPpwV8wpQHX25V%2BkVyfXxl4WG1i65p6ZQby5h5SGq1ptF87%2FWsH65NGvvBPlcegSLjF4%2BGjjL%2FQBvSNpMXM4p6R8mZpJb30Vxp2E6pcPR4&X-Amz-Signature=f2f094dcddae6c32288f8eccac1dcfbff33172c964d947a4ece62eae2db276e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJFFBQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGjVfD%2Bvv7wGkClCZuN1nuF7N%2BeEPE1%2BheeXg0e7bOrfAiAIhTWcloFnEn9tpj5rOZEDf3emHU6CUgFrCfIwPe9ueCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMtOPfm5LJyiabtXjMKtwD7WuyeKID5jLyGLs5ecCA15KqtTlB98eb3LSKv55L1%2F0MXWGNXkwSVvQUOAJ7Jus2hhlnIs7c40GOAwiMx3LcfCPesv9boeA5%2Bc%2FoMKAu7FkRHicAB6k1iV45Dm5mqAbH2PZmX0Q8IN4Fpnr6U0SS%2BV9piu%2FA8cicJnmX4ITUy8kawFSzK60S6ZrEtWjMHmZQnMT1qBssPe9v3x1RC2SFiPmRllVeudX2YQdK%2BWwWA8vKYdJzzs%2Btknt6iFbstJ%2FQqA1udPKk5gzTPV%2Fe3EP6QsVSsN6hCfxsl0G8fFBgW3yhNhEszQ6wFsSGmNfCGn8RnnBoBu4AszKuFwJzO99KKndH0Zk7%2Bl8t%2Fq6XAptYjZQ7eiV40u6eRKD%2FuZTd0VTAxzyi4Y3Rc6mO6uC5%2FJQ15HdpWBefY6SK8BNmPQN20MvPGWdNo1v64FvgwJHpM2qC4LSiXuOxGXVzmfJ1CfssUYbEK2cYyYSX9Wn3cgnTcduX%2FWYYiWWLpayuCvO5KOIwl43KTWUvtJ3SAMAzCGillOwqDvacLzsujQGOJQXahJz0A8rf0tDL2frhDDLnsbIXjZpFAu0gwTSVCNZ62UktqF9xOs9zbZtN40N4ZbUgAVuWhBUYWSupmdi0EgkwiI2NvQY6pgEmUqug56AQVyJ8Gg2MIQib6EySwx%2BWkzczCzz0PnLJgn1aoHNnDMhzay9Z3ivfe2N1JmwHvm84Ix5S%2F5QC3xMEeoup3Lu887HBoXFOBPZuulIPK9gQX2bPpwV8wpQHX25V%2BkVyfXxl4WG1i65p6ZQby5h5SGq1ptF87%2FWsH65NGvvBPlcegSLjF4%2BGjjL%2FQBvSNpMXM4p6R8mZpJb30Vxp2E6pcPR4&X-Amz-Signature=df11d5d4482191a5dd5634714d5c6b86e4775762115010468565a6cbdb6a96a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJFFBQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGjVfD%2Bvv7wGkClCZuN1nuF7N%2BeEPE1%2BheeXg0e7bOrfAiAIhTWcloFnEn9tpj5rOZEDf3emHU6CUgFrCfIwPe9ueCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMtOPfm5LJyiabtXjMKtwD7WuyeKID5jLyGLs5ecCA15KqtTlB98eb3LSKv55L1%2F0MXWGNXkwSVvQUOAJ7Jus2hhlnIs7c40GOAwiMx3LcfCPesv9boeA5%2Bc%2FoMKAu7FkRHicAB6k1iV45Dm5mqAbH2PZmX0Q8IN4Fpnr6U0SS%2BV9piu%2FA8cicJnmX4ITUy8kawFSzK60S6ZrEtWjMHmZQnMT1qBssPe9v3x1RC2SFiPmRllVeudX2YQdK%2BWwWA8vKYdJzzs%2Btknt6iFbstJ%2FQqA1udPKk5gzTPV%2Fe3EP6QsVSsN6hCfxsl0G8fFBgW3yhNhEszQ6wFsSGmNfCGn8RnnBoBu4AszKuFwJzO99KKndH0Zk7%2Bl8t%2Fq6XAptYjZQ7eiV40u6eRKD%2FuZTd0VTAxzyi4Y3Rc6mO6uC5%2FJQ15HdpWBefY6SK8BNmPQN20MvPGWdNo1v64FvgwJHpM2qC4LSiXuOxGXVzmfJ1CfssUYbEK2cYyYSX9Wn3cgnTcduX%2FWYYiWWLpayuCvO5KOIwl43KTWUvtJ3SAMAzCGillOwqDvacLzsujQGOJQXahJz0A8rf0tDL2frhDDLnsbIXjZpFAu0gwTSVCNZ62UktqF9xOs9zbZtN40N4ZbUgAVuWhBUYWSupmdi0EgkwiI2NvQY6pgEmUqug56AQVyJ8Gg2MIQib6EySwx%2BWkzczCzz0PnLJgn1aoHNnDMhzay9Z3ivfe2N1JmwHvm84Ix5S%2F5QC3xMEeoup3Lu887HBoXFOBPZuulIPK9gQX2bPpwV8wpQHX25V%2BkVyfXxl4WG1i65p6ZQby5h5SGq1ptF87%2FWsH65NGvvBPlcegSLjF4%2BGjjL%2FQBvSNpMXM4p6R8mZpJb30Vxp2E6pcPR4&X-Amz-Signature=df164490237950f770751387b5c7b4d4e12a11d7bea44aabd91c12615c647228&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
