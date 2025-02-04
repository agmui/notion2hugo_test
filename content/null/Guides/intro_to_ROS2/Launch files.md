---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Launch files.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4PCJIA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDMX%2B%2FALd0z82AU86yoOktjKTb6GK4vK9tuehF5pFHKBQIhAL3XFHZmQ0sl2XpA2SKpC24ypKofFXMOfjgVtYAJSoysKv8DCDcQABoMNjM3NDIzMTgzODA1IgzxltjUHSB%2Fk%2BosJMwq3APCCParibglGgX3nqNukxj4%2B1fUkhuw57YxgRQ3CrSCZNQVkWpah7uwHyXdz1YDRJT07Ag3cAFh2ZVsSMWAii03sjj79PBnGyUQ3SuLKm1k8tz3gWLEazN%2FkFQQ1%2FLn0a6LcwTnYHus9zANEwptpl5NoiCmNqEF2kkFx5khQktXSqh56MjgOq2QPDXxAD%2FoQwve3IE5gMYxq5bgvnli1wd5dO4LV21EcQAUp%2Bc8BeVx%2BIkXzxdCzWIEFP%2BKxPvI6u9GySebKIOR29gbnGp8kV9mb%2Fcy0Nomv91lD3MmcqE0%2FALKgXcn1n0artyqvY0JruDVFLDQJX19WdZSIRzELS6qORhek7Fich%2Fgeyf2S7cvAGgSdaDvbzmft499PZYVY%2FP3maZwTGLxLF1OkUCrWXVemACCUZZAxPIaBM4ER2%2FlB1yi%2BUp0xrar3l4IMjHKsCoutJcP6P1rtc6tCEmUECk12dZ8lsCdbxvia5FMMrZVXqy2RJ34JEPub5W4iOEvtcG0NoA6307Om3ZpXsGwN%2BiaUgoS7bR5UMiX8e18pwQYFkJ9SYiduaO3Vz%2B64OuUyZrcHaJqCT8H1ZPJkihtn323xl5HmeFnt2dQHM00zJmETWaUg3Qb4bs5q%2FIkETCLlYq9BjqkAXVLbuMxG4qwTbjJlFxs6KFYwE3H9nRNKZEOBiFMD9biaOHrGhNMb72DrnFmT7QULplWM%2FbRGXjDA5oLUSOenKhtC%2BdBiyEOvUHpMVCypbR6cIqCKCvhF6YjFjdJd2jkWvjjyhTXrVfaTsa19si8WxBtis3au0rOLWt57QgYXFTy61G5Y%2BzSjWMjdFPXKWKIDAbqn0z0ue%2BXTUqYK3%2FtuilNMHoG&X-Amz-Signature=08a708fad30a587aadb8d9a52b488e22cb87ef20565a4a2f00021bf98b4e4385&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4PCJIA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDMX%2B%2FALd0z82AU86yoOktjKTb6GK4vK9tuehF5pFHKBQIhAL3XFHZmQ0sl2XpA2SKpC24ypKofFXMOfjgVtYAJSoysKv8DCDcQABoMNjM3NDIzMTgzODA1IgzxltjUHSB%2Fk%2BosJMwq3APCCParibglGgX3nqNukxj4%2B1fUkhuw57YxgRQ3CrSCZNQVkWpah7uwHyXdz1YDRJT07Ag3cAFh2ZVsSMWAii03sjj79PBnGyUQ3SuLKm1k8tz3gWLEazN%2FkFQQ1%2FLn0a6LcwTnYHus9zANEwptpl5NoiCmNqEF2kkFx5khQktXSqh56MjgOq2QPDXxAD%2FoQwve3IE5gMYxq5bgvnli1wd5dO4LV21EcQAUp%2Bc8BeVx%2BIkXzxdCzWIEFP%2BKxPvI6u9GySebKIOR29gbnGp8kV9mb%2Fcy0Nomv91lD3MmcqE0%2FALKgXcn1n0artyqvY0JruDVFLDQJX19WdZSIRzELS6qORhek7Fich%2Fgeyf2S7cvAGgSdaDvbzmft499PZYVY%2FP3maZwTGLxLF1OkUCrWXVemACCUZZAxPIaBM4ER2%2FlB1yi%2BUp0xrar3l4IMjHKsCoutJcP6P1rtc6tCEmUECk12dZ8lsCdbxvia5FMMrZVXqy2RJ34JEPub5W4iOEvtcG0NoA6307Om3ZpXsGwN%2BiaUgoS7bR5UMiX8e18pwQYFkJ9SYiduaO3Vz%2B64OuUyZrcHaJqCT8H1ZPJkihtn323xl5HmeFnt2dQHM00zJmETWaUg3Qb4bs5q%2FIkETCLlYq9BjqkAXVLbuMxG4qwTbjJlFxs6KFYwE3H9nRNKZEOBiFMD9biaOHrGhNMb72DrnFmT7QULplWM%2FbRGXjDA5oLUSOenKhtC%2BdBiyEOvUHpMVCypbR6cIqCKCvhF6YjFjdJd2jkWvjjyhTXrVfaTsa19si8WxBtis3au0rOLWt57QgYXFTy61G5Y%2BzSjWMjdFPXKWKIDAbqn0z0ue%2BXTUqYK3%2FtuilNMHoG&X-Amz-Signature=cbc0f11c56a80615e4aded7baca072a5cec91c67971fe319eea1db4675f7538b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4PCJIA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDMX%2B%2FALd0z82AU86yoOktjKTb6GK4vK9tuehF5pFHKBQIhAL3XFHZmQ0sl2XpA2SKpC24ypKofFXMOfjgVtYAJSoysKv8DCDcQABoMNjM3NDIzMTgzODA1IgzxltjUHSB%2Fk%2BosJMwq3APCCParibglGgX3nqNukxj4%2B1fUkhuw57YxgRQ3CrSCZNQVkWpah7uwHyXdz1YDRJT07Ag3cAFh2ZVsSMWAii03sjj79PBnGyUQ3SuLKm1k8tz3gWLEazN%2FkFQQ1%2FLn0a6LcwTnYHus9zANEwptpl5NoiCmNqEF2kkFx5khQktXSqh56MjgOq2QPDXxAD%2FoQwve3IE5gMYxq5bgvnli1wd5dO4LV21EcQAUp%2Bc8BeVx%2BIkXzxdCzWIEFP%2BKxPvI6u9GySebKIOR29gbnGp8kV9mb%2Fcy0Nomv91lD3MmcqE0%2FALKgXcn1n0artyqvY0JruDVFLDQJX19WdZSIRzELS6qORhek7Fich%2Fgeyf2S7cvAGgSdaDvbzmft499PZYVY%2FP3maZwTGLxLF1OkUCrWXVemACCUZZAxPIaBM4ER2%2FlB1yi%2BUp0xrar3l4IMjHKsCoutJcP6P1rtc6tCEmUECk12dZ8lsCdbxvia5FMMrZVXqy2RJ34JEPub5W4iOEvtcG0NoA6307Om3ZpXsGwN%2BiaUgoS7bR5UMiX8e18pwQYFkJ9SYiduaO3Vz%2B64OuUyZrcHaJqCT8H1ZPJkihtn323xl5HmeFnt2dQHM00zJmETWaUg3Qb4bs5q%2FIkETCLlYq9BjqkAXVLbuMxG4qwTbjJlFxs6KFYwE3H9nRNKZEOBiFMD9biaOHrGhNMb72DrnFmT7QULplWM%2FbRGXjDA5oLUSOenKhtC%2BdBiyEOvUHpMVCypbR6cIqCKCvhF6YjFjdJd2jkWvjjyhTXrVfaTsa19si8WxBtis3au0rOLWt57QgYXFTy61G5Y%2BzSjWMjdFPXKWKIDAbqn0z0ue%2BXTUqYK3%2FtuilNMHoG&X-Amz-Signature=669528f090d6511e3d721afeee22c2a404d369c5a7f6c54eda88f14718e839f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
