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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ7DDIL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCemeKl55rVSGvBicjJVQQP2la1iG9csOwXsafJoBDKnwIhAJQOEL0CtgnsKJO%2FnAAMsyAy3ihSiRXy2bk427346pqMKv8DCGcQABoMNjM3NDIzMTgzODA1IgzTQCplSzvzFnEnkpkq3AMlQiLxia94gL%2F9p1fgrbRovETR0c5%2FR6hr8xwZRXcUEw64NGkL4rUUnfm8kpY6mXSMLFZyE5SSGmOAXra5s4SFh9ySRdpF3zhxcmdoV0BtX7xIDexJC627zVAvbG%2BgizrX0BVkzFcjP2uj%2F2zy3rYZiI5RU5b2xgGTHaeTpAh0LM1424%2Byp4NAUFe9l8EZWH9EQPPYseSZbohsDwRyxExPdOfsmYC3dAotxW3g4tQeCnAL%2FbYIy%2B8Y32BS6SQc4BFxQvds6EK6p0VTSrOOZQod0VujqneDA28Ku17B7uYIfLK7nGkc5Yr0hKGE%2BG3QunZNYOF4uUjM4j6hePxIf6n%2F6EOxllnffQkuCgAMrWr3dI2xzNA3jjfFwA458gwgzE8NRlgTa0bko49S%2FH99S514zt8tMfIhNKfcB2UtWU8j%2FXqguXeBNyimi0baGsDoz4oJOri0RghwSSi688VRaybFiObfCLeLdWMJWxX8W0ockWhXeoognM3xEOUoPga9GgFPcxAR2m6FqaWKEr1uGpk7cjsWxvlcxZb3UdHGNW0gCfdQwqUrBs3bzHcm1NI3iOU%2B8WR1Gu1FzG5MOmpnsIKtHSSERxMCqRtZHnsfb763a%2FRvpMnBBVwvuYDEejDPqpy%2FBjqkAekSfVVgWLFAfxITyvmPDJPL0K1L9%2FL0I%2BYvDyLiTpuaAK%2FoLDEmzXkFYcJC3VkxUiHtxR%2B%2BcDnGmN9BjdI8wwrhrzlNxth67KrqWlA7%2Bizah9vKecd913pPH5F0LkFXrbhfocqCcAyogDRr0zbvBaSOnt3MpPGG4e6Wfq9deb6cXBMCz1yhNWcxd6%2BtBUlNxD7rw56NO%2F5OEkMCItqkUnFfHqdX&X-Amz-Signature=9bf1acc7c1e3926a79a181abba7955f207cfc75556588430ed996e6584957163&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ7DDIL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCemeKl55rVSGvBicjJVQQP2la1iG9csOwXsafJoBDKnwIhAJQOEL0CtgnsKJO%2FnAAMsyAy3ihSiRXy2bk427346pqMKv8DCGcQABoMNjM3NDIzMTgzODA1IgzTQCplSzvzFnEnkpkq3AMlQiLxia94gL%2F9p1fgrbRovETR0c5%2FR6hr8xwZRXcUEw64NGkL4rUUnfm8kpY6mXSMLFZyE5SSGmOAXra5s4SFh9ySRdpF3zhxcmdoV0BtX7xIDexJC627zVAvbG%2BgizrX0BVkzFcjP2uj%2F2zy3rYZiI5RU5b2xgGTHaeTpAh0LM1424%2Byp4NAUFe9l8EZWH9EQPPYseSZbohsDwRyxExPdOfsmYC3dAotxW3g4tQeCnAL%2FbYIy%2B8Y32BS6SQc4BFxQvds6EK6p0VTSrOOZQod0VujqneDA28Ku17B7uYIfLK7nGkc5Yr0hKGE%2BG3QunZNYOF4uUjM4j6hePxIf6n%2F6EOxllnffQkuCgAMrWr3dI2xzNA3jjfFwA458gwgzE8NRlgTa0bko49S%2FH99S514zt8tMfIhNKfcB2UtWU8j%2FXqguXeBNyimi0baGsDoz4oJOri0RghwSSi688VRaybFiObfCLeLdWMJWxX8W0ockWhXeoognM3xEOUoPga9GgFPcxAR2m6FqaWKEr1uGpk7cjsWxvlcxZb3UdHGNW0gCfdQwqUrBs3bzHcm1NI3iOU%2B8WR1Gu1FzG5MOmpnsIKtHSSERxMCqRtZHnsfb763a%2FRvpMnBBVwvuYDEejDPqpy%2FBjqkAekSfVVgWLFAfxITyvmPDJPL0K1L9%2FL0I%2BYvDyLiTpuaAK%2FoLDEmzXkFYcJC3VkxUiHtxR%2B%2BcDnGmN9BjdI8wwrhrzlNxth67KrqWlA7%2Bizah9vKecd913pPH5F0LkFXrbhfocqCcAyogDRr0zbvBaSOnt3MpPGG4e6Wfq9deb6cXBMCz1yhNWcxd6%2BtBUlNxD7rw56NO%2F5OEkMCItqkUnFfHqdX&X-Amz-Signature=136ccb3dbab0b31e92b961e6954b967ab6d271a3950b87d7a258d1d62204c249&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ7DDIL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCemeKl55rVSGvBicjJVQQP2la1iG9csOwXsafJoBDKnwIhAJQOEL0CtgnsKJO%2FnAAMsyAy3ihSiRXy2bk427346pqMKv8DCGcQABoMNjM3NDIzMTgzODA1IgzTQCplSzvzFnEnkpkq3AMlQiLxia94gL%2F9p1fgrbRovETR0c5%2FR6hr8xwZRXcUEw64NGkL4rUUnfm8kpY6mXSMLFZyE5SSGmOAXra5s4SFh9ySRdpF3zhxcmdoV0BtX7xIDexJC627zVAvbG%2BgizrX0BVkzFcjP2uj%2F2zy3rYZiI5RU5b2xgGTHaeTpAh0LM1424%2Byp4NAUFe9l8EZWH9EQPPYseSZbohsDwRyxExPdOfsmYC3dAotxW3g4tQeCnAL%2FbYIy%2B8Y32BS6SQc4BFxQvds6EK6p0VTSrOOZQod0VujqneDA28Ku17B7uYIfLK7nGkc5Yr0hKGE%2BG3QunZNYOF4uUjM4j6hePxIf6n%2F6EOxllnffQkuCgAMrWr3dI2xzNA3jjfFwA458gwgzE8NRlgTa0bko49S%2FH99S514zt8tMfIhNKfcB2UtWU8j%2FXqguXeBNyimi0baGsDoz4oJOri0RghwSSi688VRaybFiObfCLeLdWMJWxX8W0ockWhXeoognM3xEOUoPga9GgFPcxAR2m6FqaWKEr1uGpk7cjsWxvlcxZb3UdHGNW0gCfdQwqUrBs3bzHcm1NI3iOU%2B8WR1Gu1FzG5MOmpnsIKtHSSERxMCqRtZHnsfb763a%2FRvpMnBBVwvuYDEejDPqpy%2FBjqkAekSfVVgWLFAfxITyvmPDJPL0K1L9%2FL0I%2BYvDyLiTpuaAK%2FoLDEmzXkFYcJC3VkxUiHtxR%2B%2BcDnGmN9BjdI8wwrhrzlNxth67KrqWlA7%2Bizah9vKecd913pPH5F0LkFXrbhfocqCcAyogDRr0zbvBaSOnt3MpPGG4e6Wfq9deb6cXBMCz1yhNWcxd6%2BtBUlNxD7rw56NO%2F5OEkMCItqkUnFfHqdX&X-Amz-Signature=7a9f24f42412d8af1330ce0929fab6f8710a6b63178673a6710a8adb0195564c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
