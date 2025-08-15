---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOTINCOP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDLfHQnQCFJyzyiIMUsirSPfqiE2%2BY6M90Mt4sHCQpAcAiEAh0NsfGY43gIHNn%2FTn58LkE9NVTZswJ9E0ENmziSpiswq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAhe%2B8J3gPc35aPCYircAzl7iKn3yclLY5TDok6naWr9AIigPpkzyJbGMUXEi123DOwWC%2BVBEm7LrUluZ9tbHpDMTk1%2BFzw62GQciX%2BZX3VpVrwEai5%2Fjs%2B%2F0J%2FdCYwqx07cA7I1NF%2FTkJsJaJLzwyb%2FeIMbjPVu8zT16vwtLBKRVkpQ9Cioaqxs2yqkgs9221XAZUL3vszlofQcRgXqJZq1%2Bk7xy8IjPwgHCN7Y65WhICLTE7vz90VCmwcuwhNM744DZd%2Fj7FyKtyfJuV4wBeYNfC%2FaRm95EeLWVr6Bmtc%2FoxI%2BeKdExa3enxdlfYRfnPLkLb0JV3KroIXnOV9N%2FbP0xO7QOkDCM47R0dSOTaSL0OC4KXCIicv7mw2nMwcgcjEULCgdTmIiNwJr%2FGE4OF47MppH8sCk9Lzc%2FhuyUf02ETXvQmGaKaRudK0zEtm%2F8TLVWQ0%2FpvA%2BlL0bT69QSOWEWqIIw%2BdY94ovphmNtrjHoajEK3hjcb7LzBfutUljcPgGQG1i2zgq1uWe0HeHlsMkRL30%2BA6k%2BkQmDWn2EViUyOSKSL%2Bfx%2BBbwd9CttY4D8ttrQmrW%2BI%2F8ZLVRhK6xiuFwyd11c%2Bc5G5R4yiH4DQ40Vc%2F29xLxr4nEaLB9AYdRBdunDeqv2NaNsCMMPi0%2FcQGOqUBWTjQmmke7BnWnKmKo8YJvPlnAOByHYVYGbAR9Yvcvh%2FS97nPaR18rd3zajd%2FtP9g2jkCHuOM1kzbQ0xhRrhfDhSyuy8EPyydiC9amO%2Byfq8ZWol2d%2Bpnvxmt3iICo8KkNkO096MpWXOiD00cC%2Fu%2FABPD5ewIopUcX%2FEaONNaA4WsD%2BjCP%2FcBmFIU4k88cX7t9cpTdWsD%2B4JEw5SePLJMcRuKYlMz&X-Amz-Signature=6347078b095499716e67707b2b86ffaecc8496379cf04573b9398356d9d1ddd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOTINCOP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDLfHQnQCFJyzyiIMUsirSPfqiE2%2BY6M90Mt4sHCQpAcAiEAh0NsfGY43gIHNn%2FTn58LkE9NVTZswJ9E0ENmziSpiswq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAhe%2B8J3gPc35aPCYircAzl7iKn3yclLY5TDok6naWr9AIigPpkzyJbGMUXEi123DOwWC%2BVBEm7LrUluZ9tbHpDMTk1%2BFzw62GQciX%2BZX3VpVrwEai5%2Fjs%2B%2F0J%2FdCYwqx07cA7I1NF%2FTkJsJaJLzwyb%2FeIMbjPVu8zT16vwtLBKRVkpQ9Cioaqxs2yqkgs9221XAZUL3vszlofQcRgXqJZq1%2Bk7xy8IjPwgHCN7Y65WhICLTE7vz90VCmwcuwhNM744DZd%2Fj7FyKtyfJuV4wBeYNfC%2FaRm95EeLWVr6Bmtc%2FoxI%2BeKdExa3enxdlfYRfnPLkLb0JV3KroIXnOV9N%2FbP0xO7QOkDCM47R0dSOTaSL0OC4KXCIicv7mw2nMwcgcjEULCgdTmIiNwJr%2FGE4OF47MppH8sCk9Lzc%2FhuyUf02ETXvQmGaKaRudK0zEtm%2F8TLVWQ0%2FpvA%2BlL0bT69QSOWEWqIIw%2BdY94ovphmNtrjHoajEK3hjcb7LzBfutUljcPgGQG1i2zgq1uWe0HeHlsMkRL30%2BA6k%2BkQmDWn2EViUyOSKSL%2Bfx%2BBbwd9CttY4D8ttrQmrW%2BI%2F8ZLVRhK6xiuFwyd11c%2Bc5G5R4yiH4DQ40Vc%2F29xLxr4nEaLB9AYdRBdunDeqv2NaNsCMMPi0%2FcQGOqUBWTjQmmke7BnWnKmKo8YJvPlnAOByHYVYGbAR9Yvcvh%2FS97nPaR18rd3zajd%2FtP9g2jkCHuOM1kzbQ0xhRrhfDhSyuy8EPyydiC9amO%2Byfq8ZWol2d%2Bpnvxmt3iICo8KkNkO096MpWXOiD00cC%2Fu%2FABPD5ewIopUcX%2FEaONNaA4WsD%2BjCP%2FcBmFIU4k88cX7t9cpTdWsD%2B4JEw5SePLJMcRuKYlMz&X-Amz-Signature=85e26362a166789f17cb8a7ac7610e7637b9e1f03053b303e0cbaf0508d11bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOTINCOP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDLfHQnQCFJyzyiIMUsirSPfqiE2%2BY6M90Mt4sHCQpAcAiEAh0NsfGY43gIHNn%2FTn58LkE9NVTZswJ9E0ENmziSpiswq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAhe%2B8J3gPc35aPCYircAzl7iKn3yclLY5TDok6naWr9AIigPpkzyJbGMUXEi123DOwWC%2BVBEm7LrUluZ9tbHpDMTk1%2BFzw62GQciX%2BZX3VpVrwEai5%2Fjs%2B%2F0J%2FdCYwqx07cA7I1NF%2FTkJsJaJLzwyb%2FeIMbjPVu8zT16vwtLBKRVkpQ9Cioaqxs2yqkgs9221XAZUL3vszlofQcRgXqJZq1%2Bk7xy8IjPwgHCN7Y65WhICLTE7vz90VCmwcuwhNM744DZd%2Fj7FyKtyfJuV4wBeYNfC%2FaRm95EeLWVr6Bmtc%2FoxI%2BeKdExa3enxdlfYRfnPLkLb0JV3KroIXnOV9N%2FbP0xO7QOkDCM47R0dSOTaSL0OC4KXCIicv7mw2nMwcgcjEULCgdTmIiNwJr%2FGE4OF47MppH8sCk9Lzc%2FhuyUf02ETXvQmGaKaRudK0zEtm%2F8TLVWQ0%2FpvA%2BlL0bT69QSOWEWqIIw%2BdY94ovphmNtrjHoajEK3hjcb7LzBfutUljcPgGQG1i2zgq1uWe0HeHlsMkRL30%2BA6k%2BkQmDWn2EViUyOSKSL%2Bfx%2BBbwd9CttY4D8ttrQmrW%2BI%2F8ZLVRhK6xiuFwyd11c%2Bc5G5R4yiH4DQ40Vc%2F29xLxr4nEaLB9AYdRBdunDeqv2NaNsCMMPi0%2FcQGOqUBWTjQmmke7BnWnKmKo8YJvPlnAOByHYVYGbAR9Yvcvh%2FS97nPaR18rd3zajd%2FtP9g2jkCHuOM1kzbQ0xhRrhfDhSyuy8EPyydiC9amO%2Byfq8ZWol2d%2Bpnvxmt3iICo8KkNkO096MpWXOiD00cC%2Fu%2FABPD5ewIopUcX%2FEaONNaA4WsD%2BjCP%2FcBmFIU4k88cX7t9cpTdWsD%2B4JEw5SePLJMcRuKYlMz&X-Amz-Signature=e18c46f5381437d6178d0e3dd381b366c88057e4a7df7b17d25c63ffeef34b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
