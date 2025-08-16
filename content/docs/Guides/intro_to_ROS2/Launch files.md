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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHV5OL3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD1DEPep7TYQFToVXcqIM%2FW2%2FBC6SyT8Y3FgzBmAddtEAIhAO1%2BcgLR4aB61aXzFKOk9Wdyb5LFwYgtOMmx9RNfLKjsKv8DCHcQABoMNjM3NDIzMTgzODA1IgxtBkSCQHA8ZLPEjhcq3AMDsbJqxvRrV93T%2BQ%2BahtInRsH4DZIZj7XnZ%2B60YU2nLzmt3AS1sEq8maKGH%2FppDmnYDj60ybwkwBoJwqhAR7WqENN1Bi%2FCYp9jW3efYZrA2EOGUKIU0OykSqgavUzh3B%2BdBiGhK2cU3qluhXAUMjDiV0aMPRhBtNpzbVNCqDXtSdBZiGsTwurORuBZwxtx3j%2BmYJw4hLkay9zguPJXwNML3lvcjRHlodTgFbcoJ2LP%2BIINRSvI0ChbH69bevbTcqnESaocnUl%2FzP%2BV4DCKNI3mvGS%2BiwodpuLVx0Wj3ABOxhn3ao04irmP%2BNGufieD%2FlwM2s4iFSUFY15AoB4QDBXF7WAKnNzCzBOOR1GRVfWsKRLXPxpxwdQMc2haQ6lSgqN6z6CBtsjbpyveMt%2BgxB8GekT7daJy2XQWhFEFaoXJPa5Fe5P9uPdA2CihrcyCxdYSa4hSic3TnGQ%2F%2FGt7PK5uKZNikStaY9QvKLtHnFFVaG5TDdmHQWr4AuN1TuEZT6JDRF1yPPnas3ugwdm0bdugdcT78LUd3v5Sb21pJJuZWSxqL1ErJaNBbzm1luUkk60xG9S%2FMF5WsTsReEmWE3jbAR9n2lsGsreAoE0QIedLeFWLHZptMKEExrzsGTCJmoLFBjqkAd0VWqyBPlJECw0ZrLbWfEYCyaLzJ6ryj4OLUvJLCyMJ00jvFnYWkZUZV5wdrSyPFfxg14CoE3ZHWeesDPrv0Ih56EoPspXhDe%2FOxHOFRYoEaMNLRworAcn0TqzUg5Jl%2FNsdVRdBDdHOqWfnIp0c62jl6vZXai%2B5rdcuHmq8P8nW%2FEvWYdkOZtl1dbgdi%2BEUGMsF2sImWFuGO%2F0yRXiOlC2vSXUr&X-Amz-Signature=7c7d4bc93c13772b898610668c5556c4832457dcb54ec207389b68ad5fc9a53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHV5OL3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD1DEPep7TYQFToVXcqIM%2FW2%2FBC6SyT8Y3FgzBmAddtEAIhAO1%2BcgLR4aB61aXzFKOk9Wdyb5LFwYgtOMmx9RNfLKjsKv8DCHcQABoMNjM3NDIzMTgzODA1IgxtBkSCQHA8ZLPEjhcq3AMDsbJqxvRrV93T%2BQ%2BahtInRsH4DZIZj7XnZ%2B60YU2nLzmt3AS1sEq8maKGH%2FppDmnYDj60ybwkwBoJwqhAR7WqENN1Bi%2FCYp9jW3efYZrA2EOGUKIU0OykSqgavUzh3B%2BdBiGhK2cU3qluhXAUMjDiV0aMPRhBtNpzbVNCqDXtSdBZiGsTwurORuBZwxtx3j%2BmYJw4hLkay9zguPJXwNML3lvcjRHlodTgFbcoJ2LP%2BIINRSvI0ChbH69bevbTcqnESaocnUl%2FzP%2BV4DCKNI3mvGS%2BiwodpuLVx0Wj3ABOxhn3ao04irmP%2BNGufieD%2FlwM2s4iFSUFY15AoB4QDBXF7WAKnNzCzBOOR1GRVfWsKRLXPxpxwdQMc2haQ6lSgqN6z6CBtsjbpyveMt%2BgxB8GekT7daJy2XQWhFEFaoXJPa5Fe5P9uPdA2CihrcyCxdYSa4hSic3TnGQ%2F%2FGt7PK5uKZNikStaY9QvKLtHnFFVaG5TDdmHQWr4AuN1TuEZT6JDRF1yPPnas3ugwdm0bdugdcT78LUd3v5Sb21pJJuZWSxqL1ErJaNBbzm1luUkk60xG9S%2FMF5WsTsReEmWE3jbAR9n2lsGsreAoE0QIedLeFWLHZptMKEExrzsGTCJmoLFBjqkAd0VWqyBPlJECw0ZrLbWfEYCyaLzJ6ryj4OLUvJLCyMJ00jvFnYWkZUZV5wdrSyPFfxg14CoE3ZHWeesDPrv0Ih56EoPspXhDe%2FOxHOFRYoEaMNLRworAcn0TqzUg5Jl%2FNsdVRdBDdHOqWfnIp0c62jl6vZXai%2B5rdcuHmq8P8nW%2FEvWYdkOZtl1dbgdi%2BEUGMsF2sImWFuGO%2F0yRXiOlC2vSXUr&X-Amz-Signature=ee9ae6080c4b03c88188f6fc77c20007f19f1a9b58b5e6e2fa6e6ca7a12a58a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHV5OL3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD1DEPep7TYQFToVXcqIM%2FW2%2FBC6SyT8Y3FgzBmAddtEAIhAO1%2BcgLR4aB61aXzFKOk9Wdyb5LFwYgtOMmx9RNfLKjsKv8DCHcQABoMNjM3NDIzMTgzODA1IgxtBkSCQHA8ZLPEjhcq3AMDsbJqxvRrV93T%2BQ%2BahtInRsH4DZIZj7XnZ%2B60YU2nLzmt3AS1sEq8maKGH%2FppDmnYDj60ybwkwBoJwqhAR7WqENN1Bi%2FCYp9jW3efYZrA2EOGUKIU0OykSqgavUzh3B%2BdBiGhK2cU3qluhXAUMjDiV0aMPRhBtNpzbVNCqDXtSdBZiGsTwurORuBZwxtx3j%2BmYJw4hLkay9zguPJXwNML3lvcjRHlodTgFbcoJ2LP%2BIINRSvI0ChbH69bevbTcqnESaocnUl%2FzP%2BV4DCKNI3mvGS%2BiwodpuLVx0Wj3ABOxhn3ao04irmP%2BNGufieD%2FlwM2s4iFSUFY15AoB4QDBXF7WAKnNzCzBOOR1GRVfWsKRLXPxpxwdQMc2haQ6lSgqN6z6CBtsjbpyveMt%2BgxB8GekT7daJy2XQWhFEFaoXJPa5Fe5P9uPdA2CihrcyCxdYSa4hSic3TnGQ%2F%2FGt7PK5uKZNikStaY9QvKLtHnFFVaG5TDdmHQWr4AuN1TuEZT6JDRF1yPPnas3ugwdm0bdugdcT78LUd3v5Sb21pJJuZWSxqL1ErJaNBbzm1luUkk60xG9S%2FMF5WsTsReEmWE3jbAR9n2lsGsreAoE0QIedLeFWLHZptMKEExrzsGTCJmoLFBjqkAd0VWqyBPlJECw0ZrLbWfEYCyaLzJ6ryj4OLUvJLCyMJ00jvFnYWkZUZV5wdrSyPFfxg14CoE3ZHWeesDPrv0Ih56EoPspXhDe%2FOxHOFRYoEaMNLRworAcn0TqzUg5Jl%2FNsdVRdBDdHOqWfnIp0c62jl6vZXai%2B5rdcuHmq8P8nW%2FEvWYdkOZtl1dbgdi%2BEUGMsF2sImWFuGO%2F0yRXiOlC2vSXUr&X-Amz-Signature=a1d6438d465832fff7dbb23f5a61d7483d6170391aad20c327df0c805e72a42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
