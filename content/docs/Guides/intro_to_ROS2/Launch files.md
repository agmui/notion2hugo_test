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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6QWGMBG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0we26dZ%2ByS5j1KittB9cAif%2BXcgHAwBkPXMLvvCPUwQIhAJzkrRZWt610OQN8UJJt9EWRExILdn3x%2BCBaCTm7P5LWKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztKLCmS6EUtZWT%2BNMq3APGnBijx1R7zVfPgijoAUljg%2FL2vPsITO5g16hMrrGJgcq5eRGSoMSFvs3qqr2gjHohie7Zzq6pTKJKX4rb%2FQqJua00SEemPU67iC1uIzXfGQUnDesqSCcm8NV881KPLr8TPsvmVOsR2SZMRajDW5M0zzJq2bOV%2BprvM5X4kqxNJsBKqluykfzKNcMkyQG%2F8N0a8o94RImAlqm80aoFL%2F3tOm6wkw82g3IYtShQGkdknj%2FcgAR2YnFjS6ROQwp4na2Iu%2BZ826BPG0COga801qiCvT5SfM2mAqpaBbh062ai0uZEbMKCqV6pFqpauHvDTBcgVvCoox1GqJePP93YKeNPfsSricAJ9P7gLPZH%2BFbLgB%2Bm0qS4CTymrwjlrrJplp34urYAplrUMRwx0lVUGeTn3jjYHNEXqk13RN%2BcvlWKvH%2Be7Gop4qqigqw3Dp6hMv3hrBVyMpEjfz6ZHbQlYXL5kfzP%2BvzTTsHwXCmur4NKQy9brmgnaaMDWVNsGKL7okh8O49aI6Toth1zha3Dx8vs4ZMq8wc%2F4JIi1aCF9SJAuxZmL9IxhP9MVP4W6K3S2MvdUD%2Bbvm%2FlwgxZwPT5kTDcMGExzWepVn0XptIKM%2FGzUcSi640toThMV4BDbzCBguTBBjqkAQGOKbhL6xZ2qZCRsdWwZolu%2BV1Jd0KTw37aqIzsOG5AEy727LIhyltFPzZzEXcgjeRr2mo5zeol386LfE10yQq1YmfglNTDWgU73vDZhnKOgvDFZ6hbw3AyZuoHpBKBgMAv43SqpD3sqo6G2itsoqsqdEzh5G%2B0y4Bs%2Bo%2BZi1BNWBxBT5V3GmTTbMS3zR75WJO3pHmZ5VhNc2Qqhq6%2BAfWd5FEW&X-Amz-Signature=ab3ee341299b7fa296551866f1c3cb7e93f5cfaca7d789b383dffbd29cc21fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6QWGMBG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0we26dZ%2ByS5j1KittB9cAif%2BXcgHAwBkPXMLvvCPUwQIhAJzkrRZWt610OQN8UJJt9EWRExILdn3x%2BCBaCTm7P5LWKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztKLCmS6EUtZWT%2BNMq3APGnBijx1R7zVfPgijoAUljg%2FL2vPsITO5g16hMrrGJgcq5eRGSoMSFvs3qqr2gjHohie7Zzq6pTKJKX4rb%2FQqJua00SEemPU67iC1uIzXfGQUnDesqSCcm8NV881KPLr8TPsvmVOsR2SZMRajDW5M0zzJq2bOV%2BprvM5X4kqxNJsBKqluykfzKNcMkyQG%2F8N0a8o94RImAlqm80aoFL%2F3tOm6wkw82g3IYtShQGkdknj%2FcgAR2YnFjS6ROQwp4na2Iu%2BZ826BPG0COga801qiCvT5SfM2mAqpaBbh062ai0uZEbMKCqV6pFqpauHvDTBcgVvCoox1GqJePP93YKeNPfsSricAJ9P7gLPZH%2BFbLgB%2Bm0qS4CTymrwjlrrJplp34urYAplrUMRwx0lVUGeTn3jjYHNEXqk13RN%2BcvlWKvH%2Be7Gop4qqigqw3Dp6hMv3hrBVyMpEjfz6ZHbQlYXL5kfzP%2BvzTTsHwXCmur4NKQy9brmgnaaMDWVNsGKL7okh8O49aI6Toth1zha3Dx8vs4ZMq8wc%2F4JIi1aCF9SJAuxZmL9IxhP9MVP4W6K3S2MvdUD%2Bbvm%2FlwgxZwPT5kTDcMGExzWepVn0XptIKM%2FGzUcSi640toThMV4BDbzCBguTBBjqkAQGOKbhL6xZ2qZCRsdWwZolu%2BV1Jd0KTw37aqIzsOG5AEy727LIhyltFPzZzEXcgjeRr2mo5zeol386LfE10yQq1YmfglNTDWgU73vDZhnKOgvDFZ6hbw3AyZuoHpBKBgMAv43SqpD3sqo6G2itsoqsqdEzh5G%2B0y4Bs%2Bo%2BZi1BNWBxBT5V3GmTTbMS3zR75WJO3pHmZ5VhNc2Qqhq6%2BAfWd5FEW&X-Amz-Signature=44b4605b6f2601c74cc67aaa728fb74a54208ee50d80ef667dd5ee47d9afe694&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6QWGMBG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0we26dZ%2ByS5j1KittB9cAif%2BXcgHAwBkPXMLvvCPUwQIhAJzkrRZWt610OQN8UJJt9EWRExILdn3x%2BCBaCTm7P5LWKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztKLCmS6EUtZWT%2BNMq3APGnBijx1R7zVfPgijoAUljg%2FL2vPsITO5g16hMrrGJgcq5eRGSoMSFvs3qqr2gjHohie7Zzq6pTKJKX4rb%2FQqJua00SEemPU67iC1uIzXfGQUnDesqSCcm8NV881KPLr8TPsvmVOsR2SZMRajDW5M0zzJq2bOV%2BprvM5X4kqxNJsBKqluykfzKNcMkyQG%2F8N0a8o94RImAlqm80aoFL%2F3tOm6wkw82g3IYtShQGkdknj%2FcgAR2YnFjS6ROQwp4na2Iu%2BZ826BPG0COga801qiCvT5SfM2mAqpaBbh062ai0uZEbMKCqV6pFqpauHvDTBcgVvCoox1GqJePP93YKeNPfsSricAJ9P7gLPZH%2BFbLgB%2Bm0qS4CTymrwjlrrJplp34urYAplrUMRwx0lVUGeTn3jjYHNEXqk13RN%2BcvlWKvH%2Be7Gop4qqigqw3Dp6hMv3hrBVyMpEjfz6ZHbQlYXL5kfzP%2BvzTTsHwXCmur4NKQy9brmgnaaMDWVNsGKL7okh8O49aI6Toth1zha3Dx8vs4ZMq8wc%2F4JIi1aCF9SJAuxZmL9IxhP9MVP4W6K3S2MvdUD%2Bbvm%2FlwgxZwPT5kTDcMGExzWepVn0XptIKM%2FGzUcSi640toThMV4BDbzCBguTBBjqkAQGOKbhL6xZ2qZCRsdWwZolu%2BV1Jd0KTw37aqIzsOG5AEy727LIhyltFPzZzEXcgjeRr2mo5zeol386LfE10yQq1YmfglNTDWgU73vDZhnKOgvDFZ6hbw3AyZuoHpBKBgMAv43SqpD3sqo6G2itsoqsqdEzh5G%2B0y4Bs%2Bo%2BZi1BNWBxBT5V3GmTTbMS3zR75WJO3pHmZ5VhNc2Qqhq6%2BAfWd5FEW&X-Amz-Signature=129ab9c79a65aea59a63695e420b3bf7d974a2f156021e882afe19a0ccca3a98&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
