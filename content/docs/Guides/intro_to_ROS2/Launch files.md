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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5GWYIV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEJODeJq%2F76R6CqA%2BewDVBFkDgbcGUSotwjubbhgQKmaAiBpKtFLDuo1SutKSPdHZdv%2BnYC2kEKpDWeai7XQi14iLyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92vUnxkKita1LFzyKtwDlaAPBK1PLj2ypPUnt4%2BjAYL%2BpVo8GsBzKQwH1TV9SOVOYe0m%2BMKX4txcV7RaPfuc54AjhPT%2Fjd6d%2BlnBJAbHKcZYUrbZI1EYkf4YGgaNk53agx84KAS3Ceu72GegCn%2BMMZCLC88Cs8XqqkdSalEzQxNMkeIV4bM%2Fnrp8PhCXvpkqoTDVU6%2BGxFkHD%2Bo5B76Ta9WyabqgPTJSd%2BfaCE9TI1IP3f8APjLl0SnSP0LQC9sfQDouRCn%2BBknuGQk1NM%2FFy0EtopjiAjlNrjIWZl2pzQr0yljtkLyDkjCaNfBPL5h1adS1IhCOW2uHZvb4RzUUTKZuORMTekpv%2FoaGAUiM4HSqSzytG%2F%2FTtsnYoxNVu8e1iZe4Hl01gkcbo8NSp0tNfjS8GdV7%2F0F86id7uylHdxLsDeJIAtdThNdrOVsZfO041qSmvIbcbkRQesMTWN3zDyLwuiJOeoA%2Bx%2FQVoWeEPclBmByd2Ufs6XZPv%2B6peTsWF1lDuPPfBBtZi%2Bf6mFDo7ie%2Ba6%2FTjWDJ3j8vD6TNfzSHeKkOmF6rvtotRHPFLsr04uG1E4t8V2sLB8c9VcjxPHs%2Be1Ljrv1xKaUfblkNsJkyGsejHtfD5D4qyID%2F4ZInjeKtQqT6ZtBLPLkwypPivwY6pgEtwQGvpwpfkJCNCpQHJwrlZDmtYh7vh0x4eN%2Fno4E%2FE88PCPRAW4iD0wgvk2OAjBX2dqSvxZxX14Q8Wmg6aiwoaTd3dGfb9gT3YFl6OHopAUcaIYQcTS4O3XlT8mR%2BSv9AzwGigpD9XCVHXQghOELZrsZLl2SOvAqICGL0HGW9ABfOqSGeOGx1D%2FO%2BYnL4DKhNdhLYaFOYkbQapjWt%2BxMGPhkTTa2k&X-Amz-Signature=6acc3517b7333907d0816426c4fe0948eb455efd1d676565086736a688e38d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5GWYIV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEJODeJq%2F76R6CqA%2BewDVBFkDgbcGUSotwjubbhgQKmaAiBpKtFLDuo1SutKSPdHZdv%2BnYC2kEKpDWeai7XQi14iLyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92vUnxkKita1LFzyKtwDlaAPBK1PLj2ypPUnt4%2BjAYL%2BpVo8GsBzKQwH1TV9SOVOYe0m%2BMKX4txcV7RaPfuc54AjhPT%2Fjd6d%2BlnBJAbHKcZYUrbZI1EYkf4YGgaNk53agx84KAS3Ceu72GegCn%2BMMZCLC88Cs8XqqkdSalEzQxNMkeIV4bM%2Fnrp8PhCXvpkqoTDVU6%2BGxFkHD%2Bo5B76Ta9WyabqgPTJSd%2BfaCE9TI1IP3f8APjLl0SnSP0LQC9sfQDouRCn%2BBknuGQk1NM%2FFy0EtopjiAjlNrjIWZl2pzQr0yljtkLyDkjCaNfBPL5h1adS1IhCOW2uHZvb4RzUUTKZuORMTekpv%2FoaGAUiM4HSqSzytG%2F%2FTtsnYoxNVu8e1iZe4Hl01gkcbo8NSp0tNfjS8GdV7%2F0F86id7uylHdxLsDeJIAtdThNdrOVsZfO041qSmvIbcbkRQesMTWN3zDyLwuiJOeoA%2Bx%2FQVoWeEPclBmByd2Ufs6XZPv%2B6peTsWF1lDuPPfBBtZi%2Bf6mFDo7ie%2Ba6%2FTjWDJ3j8vD6TNfzSHeKkOmF6rvtotRHPFLsr04uG1E4t8V2sLB8c9VcjxPHs%2Be1Ljrv1xKaUfblkNsJkyGsejHtfD5D4qyID%2F4ZInjeKtQqT6ZtBLPLkwypPivwY6pgEtwQGvpwpfkJCNCpQHJwrlZDmtYh7vh0x4eN%2Fno4E%2FE88PCPRAW4iD0wgvk2OAjBX2dqSvxZxX14Q8Wmg6aiwoaTd3dGfb9gT3YFl6OHopAUcaIYQcTS4O3XlT8mR%2BSv9AzwGigpD9XCVHXQghOELZrsZLl2SOvAqICGL0HGW9ABfOqSGeOGx1D%2FO%2BYnL4DKhNdhLYaFOYkbQapjWt%2BxMGPhkTTa2k&X-Amz-Signature=a60d8e64ea75934f7c4dd1f5b1a4639a584836f46568b65d8d9f9fdde38e78e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5GWYIV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEJODeJq%2F76R6CqA%2BewDVBFkDgbcGUSotwjubbhgQKmaAiBpKtFLDuo1SutKSPdHZdv%2BnYC2kEKpDWeai7XQi14iLyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92vUnxkKita1LFzyKtwDlaAPBK1PLj2ypPUnt4%2BjAYL%2BpVo8GsBzKQwH1TV9SOVOYe0m%2BMKX4txcV7RaPfuc54AjhPT%2Fjd6d%2BlnBJAbHKcZYUrbZI1EYkf4YGgaNk53agx84KAS3Ceu72GegCn%2BMMZCLC88Cs8XqqkdSalEzQxNMkeIV4bM%2Fnrp8PhCXvpkqoTDVU6%2BGxFkHD%2Bo5B76Ta9WyabqgPTJSd%2BfaCE9TI1IP3f8APjLl0SnSP0LQC9sfQDouRCn%2BBknuGQk1NM%2FFy0EtopjiAjlNrjIWZl2pzQr0yljtkLyDkjCaNfBPL5h1adS1IhCOW2uHZvb4RzUUTKZuORMTekpv%2FoaGAUiM4HSqSzytG%2F%2FTtsnYoxNVu8e1iZe4Hl01gkcbo8NSp0tNfjS8GdV7%2F0F86id7uylHdxLsDeJIAtdThNdrOVsZfO041qSmvIbcbkRQesMTWN3zDyLwuiJOeoA%2Bx%2FQVoWeEPclBmByd2Ufs6XZPv%2B6peTsWF1lDuPPfBBtZi%2Bf6mFDo7ie%2Ba6%2FTjWDJ3j8vD6TNfzSHeKkOmF6rvtotRHPFLsr04uG1E4t8V2sLB8c9VcjxPHs%2Be1Ljrv1xKaUfblkNsJkyGsejHtfD5D4qyID%2F4ZInjeKtQqT6ZtBLPLkwypPivwY6pgEtwQGvpwpfkJCNCpQHJwrlZDmtYh7vh0x4eN%2Fno4E%2FE88PCPRAW4iD0wgvk2OAjBX2dqSvxZxX14Q8Wmg6aiwoaTd3dGfb9gT3YFl6OHopAUcaIYQcTS4O3XlT8mR%2BSv9AzwGigpD9XCVHXQghOELZrsZLl2SOvAqICGL0HGW9ABfOqSGeOGx1D%2FO%2BYnL4DKhNdhLYaFOYkbQapjWt%2BxMGPhkTTa2k&X-Amz-Signature=3d2d69202bbdc342b95014a8df135b6f47ddcdbe338cd975ee3defe18c507390&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
