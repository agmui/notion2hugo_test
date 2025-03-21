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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7ID2V%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFZ94tZlyBZkxla2wkseH7be%2FuWIS3pAgtdBodmhefvhAiBsvrLT9oK60GCRSmYVpo%2FD2dvte%2BYpFn4DsroVgkXvoCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSUi4sMuN9mWJZg9kKtwDvPm%2BNmfr3t5YexY%2Ffvb17MeDsR8jByh9XLSJfneRwKCYVKd9U%2BwDPy1hZLSsdszrL8blgxXEt1NGjFVjfeVkvH4fW8ODjqPMiHfhZA%2FPUtQIGszbwOF%2BVMbZHk12ouK3Db7uHbjatk%2BJXJHs9fIKgpTQ088SGlU%2F4YSd7IwnEZmeYRBCZ9OMnt%2BlSuo4d9CYk9wbyqxhejYzG257dWDAwJ4EkphqmE39GR0kk2rOJT6BDKul6wqu0JUycuoK2KOtuSjLtr%2FFTbMuM3rToLFAH0Fb%2BZCe8In87oGDKRboFKANmLIPtUfXh3eEXVIbZH1CxIbvOQwoYvWQmYCVU05M1PIwhQuFom68qzTih6nPowi1Cxk5IWyAlbkY663Ciy1gJUGwWmMLGzc1MqNI1Vx62Vnm%2F1koJ8epvrye52JTm0q%2F6cTurv5fQdmOXelw3NWXlKvAQq2j1gUAUwhgcnqmktcx%2F0BHk%2B%2BC4zHHFXGxP9srRMjGWDx0NfVITB1Z9ILALcjsnyxMx85TDeDTtw14jMi9Z9bP9kjBhFZBNU8moV8GXEZrHpj4hKJvKrP%2BpOmsAltQ9VsqNllNf8RBvpODQOt4vW8g%2FzPCvB6G%2BhA%2B%2BZnCmOKlAH6g%2FIpFKHkwhpv2vgY6pgHeUzy2VbVC31v9xKgImO9GpijexssILhV7wRv%2F65%2B0BhvTxZr62JI9SMdvtB11%2Fn1zVGYOhd%2FsJ7b2%2FQ%2FK4gadZE0G%2BGOIpqPTaDgGkdLv1Zh8l32NOrjwDT4xCTF8k31G0oeZSXdqUP3I495hkkwgOS5YqKqvcZe5XnrWbbpHK%2FKVm%2FEMeEWwa%2BlVxrvWJaii8py39eo80xGuUFudL83wFsqrsj8G&X-Amz-Signature=eaf957b7d7626011dc1f114a5fb38c00a1677e14713bb4a124e443ce50ff374f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7ID2V%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFZ94tZlyBZkxla2wkseH7be%2FuWIS3pAgtdBodmhefvhAiBsvrLT9oK60GCRSmYVpo%2FD2dvte%2BYpFn4DsroVgkXvoCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSUi4sMuN9mWJZg9kKtwDvPm%2BNmfr3t5YexY%2Ffvb17MeDsR8jByh9XLSJfneRwKCYVKd9U%2BwDPy1hZLSsdszrL8blgxXEt1NGjFVjfeVkvH4fW8ODjqPMiHfhZA%2FPUtQIGszbwOF%2BVMbZHk12ouK3Db7uHbjatk%2BJXJHs9fIKgpTQ088SGlU%2F4YSd7IwnEZmeYRBCZ9OMnt%2BlSuo4d9CYk9wbyqxhejYzG257dWDAwJ4EkphqmE39GR0kk2rOJT6BDKul6wqu0JUycuoK2KOtuSjLtr%2FFTbMuM3rToLFAH0Fb%2BZCe8In87oGDKRboFKANmLIPtUfXh3eEXVIbZH1CxIbvOQwoYvWQmYCVU05M1PIwhQuFom68qzTih6nPowi1Cxk5IWyAlbkY663Ciy1gJUGwWmMLGzc1MqNI1Vx62Vnm%2F1koJ8epvrye52JTm0q%2F6cTurv5fQdmOXelw3NWXlKvAQq2j1gUAUwhgcnqmktcx%2F0BHk%2B%2BC4zHHFXGxP9srRMjGWDx0NfVITB1Z9ILALcjsnyxMx85TDeDTtw14jMi9Z9bP9kjBhFZBNU8moV8GXEZrHpj4hKJvKrP%2BpOmsAltQ9VsqNllNf8RBvpODQOt4vW8g%2FzPCvB6G%2BhA%2B%2BZnCmOKlAH6g%2FIpFKHkwhpv2vgY6pgHeUzy2VbVC31v9xKgImO9GpijexssILhV7wRv%2F65%2B0BhvTxZr62JI9SMdvtB11%2Fn1zVGYOhd%2FsJ7b2%2FQ%2FK4gadZE0G%2BGOIpqPTaDgGkdLv1Zh8l32NOrjwDT4xCTF8k31G0oeZSXdqUP3I495hkkwgOS5YqKqvcZe5XnrWbbpHK%2FKVm%2FEMeEWwa%2BlVxrvWJaii8py39eo80xGuUFudL83wFsqrsj8G&X-Amz-Signature=b7ebb1ea13fcdaae0c7aaae869b858371708078cf2c483ed024924ab4aed2cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7ID2V%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFZ94tZlyBZkxla2wkseH7be%2FuWIS3pAgtdBodmhefvhAiBsvrLT9oK60GCRSmYVpo%2FD2dvte%2BYpFn4DsroVgkXvoCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSUi4sMuN9mWJZg9kKtwDvPm%2BNmfr3t5YexY%2Ffvb17MeDsR8jByh9XLSJfneRwKCYVKd9U%2BwDPy1hZLSsdszrL8blgxXEt1NGjFVjfeVkvH4fW8ODjqPMiHfhZA%2FPUtQIGszbwOF%2BVMbZHk12ouK3Db7uHbjatk%2BJXJHs9fIKgpTQ088SGlU%2F4YSd7IwnEZmeYRBCZ9OMnt%2BlSuo4d9CYk9wbyqxhejYzG257dWDAwJ4EkphqmE39GR0kk2rOJT6BDKul6wqu0JUycuoK2KOtuSjLtr%2FFTbMuM3rToLFAH0Fb%2BZCe8In87oGDKRboFKANmLIPtUfXh3eEXVIbZH1CxIbvOQwoYvWQmYCVU05M1PIwhQuFom68qzTih6nPowi1Cxk5IWyAlbkY663Ciy1gJUGwWmMLGzc1MqNI1Vx62Vnm%2F1koJ8epvrye52JTm0q%2F6cTurv5fQdmOXelw3NWXlKvAQq2j1gUAUwhgcnqmktcx%2F0BHk%2B%2BC4zHHFXGxP9srRMjGWDx0NfVITB1Z9ILALcjsnyxMx85TDeDTtw14jMi9Z9bP9kjBhFZBNU8moV8GXEZrHpj4hKJvKrP%2BpOmsAltQ9VsqNllNf8RBvpODQOt4vW8g%2FzPCvB6G%2BhA%2B%2BZnCmOKlAH6g%2FIpFKHkwhpv2vgY6pgHeUzy2VbVC31v9xKgImO9GpijexssILhV7wRv%2F65%2B0BhvTxZr62JI9SMdvtB11%2Fn1zVGYOhd%2FsJ7b2%2FQ%2FK4gadZE0G%2BGOIpqPTaDgGkdLv1Zh8l32NOrjwDT4xCTF8k31G0oeZSXdqUP3I495hkkwgOS5YqKqvcZe5XnrWbbpHK%2FKVm%2FEMeEWwa%2BlVxrvWJaii8py39eo80xGuUFudL83wFsqrsj8G&X-Amz-Signature=c8be4f27ea01c9ec42d74b0f999ac0806ea6173b0a0bb44146e830d08a2e0616&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
