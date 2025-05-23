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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3OH5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCM16tXwEuAT6oUaCeFRoxoaGy3sAZUP3DKCueIGPgOggIgPP4WhMvOSrdeLhZbVOUhOrkXA%2Biyk2uWtnY5aWvKmgQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhm%2BFC%2BRN8nwLs%2BQSrcA1%2B2tn%2Flt2VzpUYApQAahB%2F7Aa0SIAH8tOgkSSHSJ8zhguY%2FQ6QsieGVh8H0Brh40Kfics9toRRNYxUw72lKw5r4udzbFlnphWUPF65ulK7tas169tLJ2FImkM3IgkMnn6Fce7Ya0xQFp8%2F517fTfFbVDcNt9MAY5737CsxAniCqyam3Mkr3Sj9KfiyLaeQoSC85yQ10QE%2BrOV0QQTCGTD7sAFBECHMkhCzdqDQtxrMIuYCqt9oPeIvQ4IHt8vneD3A0Vf5Es7Jo1%2FEurl8YWC4XX5%2F7s1UpqyJ2%2FCZ05hZzxi8oo60ZdqM6ANp5yOr1HPZe9wuFq0dOtXLN2lYeX%2B5J0xt8%2BEW4les2RxumLYJsdk68zlvKpbBOmq7AwS4lRJDrU8B6lxEO%2B42nEfEQIni9TqncoooksHHIjj8J3FemJmajDNQGroGmqciXUGu5YtBdjQa63SiksVgzGo552dZ8kRKHVZMRPiUbjblDvRgtOBTS9DvDWCH9R%2BwN4MfIDRJ%2FcBHoZD%2FKh4ETKuSTgeUcAy%2FSgBnSxFolDYXk0cDCiETDx8h405nhzV0q%2FsqbVCtFJpuReWzEaUpkqgq3EloiDWKOQkIAc%2FQSS3u0pTgKngCa6sL4Rn763GT0MOOpwcEGOqUBKQMEyqafHuhJZbMbb%2BA2jc3qrjIDKJO%2FCKsHvvuJSfQs4Ur9NRmKuklxJe7oA9PagcKOE%2FhxJoggaitNMdm78yR04WXfngvSKvQ7rteDgCbUN8QHKk4U4vTbsFDlHSXSEcEd6XeG%2FXY8%2Bmsy8obkvLO1DEGaQTQkZ0UBKCErSECch9gB2Bqh%2B3tSHve98UhJMxX55uoI9fDpOE3Cz%2BBkvGDpY4I1&X-Amz-Signature=8cb4c4e8e2cb2a7742ac9cecd051286f28a27d76fd5fdd26f6df6b2030265372&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3OH5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCM16tXwEuAT6oUaCeFRoxoaGy3sAZUP3DKCueIGPgOggIgPP4WhMvOSrdeLhZbVOUhOrkXA%2Biyk2uWtnY5aWvKmgQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhm%2BFC%2BRN8nwLs%2BQSrcA1%2B2tn%2Flt2VzpUYApQAahB%2F7Aa0SIAH8tOgkSSHSJ8zhguY%2FQ6QsieGVh8H0Brh40Kfics9toRRNYxUw72lKw5r4udzbFlnphWUPF65ulK7tas169tLJ2FImkM3IgkMnn6Fce7Ya0xQFp8%2F517fTfFbVDcNt9MAY5737CsxAniCqyam3Mkr3Sj9KfiyLaeQoSC85yQ10QE%2BrOV0QQTCGTD7sAFBECHMkhCzdqDQtxrMIuYCqt9oPeIvQ4IHt8vneD3A0Vf5Es7Jo1%2FEurl8YWC4XX5%2F7s1UpqyJ2%2FCZ05hZzxi8oo60ZdqM6ANp5yOr1HPZe9wuFq0dOtXLN2lYeX%2B5J0xt8%2BEW4les2RxumLYJsdk68zlvKpbBOmq7AwS4lRJDrU8B6lxEO%2B42nEfEQIni9TqncoooksHHIjj8J3FemJmajDNQGroGmqciXUGu5YtBdjQa63SiksVgzGo552dZ8kRKHVZMRPiUbjblDvRgtOBTS9DvDWCH9R%2BwN4MfIDRJ%2FcBHoZD%2FKh4ETKuSTgeUcAy%2FSgBnSxFolDYXk0cDCiETDx8h405nhzV0q%2FsqbVCtFJpuReWzEaUpkqgq3EloiDWKOQkIAc%2FQSS3u0pTgKngCa6sL4Rn763GT0MOOpwcEGOqUBKQMEyqafHuhJZbMbb%2BA2jc3qrjIDKJO%2FCKsHvvuJSfQs4Ur9NRmKuklxJe7oA9PagcKOE%2FhxJoggaitNMdm78yR04WXfngvSKvQ7rteDgCbUN8QHKk4U4vTbsFDlHSXSEcEd6XeG%2FXY8%2Bmsy8obkvLO1DEGaQTQkZ0UBKCErSECch9gB2Bqh%2B3tSHve98UhJMxX55uoI9fDpOE3Cz%2BBkvGDpY4I1&X-Amz-Signature=3dc8f0b5992f2f35985dcb18d5c0c7987b8c524617a03faa4e9274567b6682f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3OH5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCM16tXwEuAT6oUaCeFRoxoaGy3sAZUP3DKCueIGPgOggIgPP4WhMvOSrdeLhZbVOUhOrkXA%2Biyk2uWtnY5aWvKmgQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhm%2BFC%2BRN8nwLs%2BQSrcA1%2B2tn%2Flt2VzpUYApQAahB%2F7Aa0SIAH8tOgkSSHSJ8zhguY%2FQ6QsieGVh8H0Brh40Kfics9toRRNYxUw72lKw5r4udzbFlnphWUPF65ulK7tas169tLJ2FImkM3IgkMnn6Fce7Ya0xQFp8%2F517fTfFbVDcNt9MAY5737CsxAniCqyam3Mkr3Sj9KfiyLaeQoSC85yQ10QE%2BrOV0QQTCGTD7sAFBECHMkhCzdqDQtxrMIuYCqt9oPeIvQ4IHt8vneD3A0Vf5Es7Jo1%2FEurl8YWC4XX5%2F7s1UpqyJ2%2FCZ05hZzxi8oo60ZdqM6ANp5yOr1HPZe9wuFq0dOtXLN2lYeX%2B5J0xt8%2BEW4les2RxumLYJsdk68zlvKpbBOmq7AwS4lRJDrU8B6lxEO%2B42nEfEQIni9TqncoooksHHIjj8J3FemJmajDNQGroGmqciXUGu5YtBdjQa63SiksVgzGo552dZ8kRKHVZMRPiUbjblDvRgtOBTS9DvDWCH9R%2BwN4MfIDRJ%2FcBHoZD%2FKh4ETKuSTgeUcAy%2FSgBnSxFolDYXk0cDCiETDx8h405nhzV0q%2FsqbVCtFJpuReWzEaUpkqgq3EloiDWKOQkIAc%2FQSS3u0pTgKngCa6sL4Rn763GT0MOOpwcEGOqUBKQMEyqafHuhJZbMbb%2BA2jc3qrjIDKJO%2FCKsHvvuJSfQs4Ur9NRmKuklxJe7oA9PagcKOE%2FhxJoggaitNMdm78yR04WXfngvSKvQ7rteDgCbUN8QHKk4U4vTbsFDlHSXSEcEd6XeG%2FXY8%2Bmsy8obkvLO1DEGaQTQkZ0UBKCErSECch9gB2Bqh%2B3tSHve98UhJMxX55uoI9fDpOE3Cz%2BBkvGDpY4I1&X-Amz-Signature=9204e5eb2092438f09517232753596fc55ec7147d1449f38715dd961e80e0938&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
