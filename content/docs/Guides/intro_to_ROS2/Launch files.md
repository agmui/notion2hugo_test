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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUN5IOR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxtA2zXOLDnJ8HEfERTz%2BloC%2BrInOLR1bCicxSRgTi0AiEA1vLp0XTxLVs3006wOjJX6giPRaGjqCw%2FlnXCCb1grHUq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNr01DCoKOkS6rgn%2FSrcA4V9aftkJDJM8yn4w4uT9IjYNW3KwwTTVrPtS%2FJeHw0vOM1hssd4j5OZpIWuovAFDG4vztjbxbtaMtXcotvNHGgrX%2Fwo0R6j0gBA7HGDWPMrOp6ejWI0hadCy47soslREeGpqTAcT1TLM2d9gp7gFaf27Ou3kLD8yYZjBkJLcE1OL80Mer7c5g4frUxojKvh3G1ssn6vq7cU1FIfnw5fmbXcFWoVUY2NK8MirZIHbNqOZiVqLrbDyCA4512mi1G53g9lFGbwovSbItDd3BxPw9gEIRCGX%2FiM%2BNzUGx2rxxFt1EMpkX1AXymFBHmhPprMI5kN19kkG5QiyJsmbMKyU59aaebJoRq44h7BvPvIzBzpLsaA84iPrJ6Qa%2Byr%2BhDF%2B7zlMDRfltJhTp0L36ZVDl5R3zuVnk%2FT4ap%2BXSbGIV9XH3X5aKAAmEtFAFeYBPPMkIEtetvvHGTIwVl7wSuLInOm1j%2Fx9xtnz5mrBXdVwWO8HAdjSW%2Bh3Wb5DqkxY7scyf%2BOZuhfve3f3qUUe6Awcq%2BiLf0CcRXGKXMjgfonfds2Uc0eVnHXMp5ZQEUCR1hqhyGLKaIQb5x9eXeAkeSNcd8z%2FZg1Nprmqwhc4lzmDqzYUFUiXeYWHtzZXetqMPCf7b0GOqUBSGYx1l7ubLBlVCTl9yA9XUnt0r96eQGDAIkMiJAdng5QYg7qxyUBtilW714vTuZ97UNVViRXJR4QwZiGmE0W3%2BNb%2Bjd%2FR9v1PSqI%2BEinC9DzPhhGvNc1NuACJGJlDGkeVz1sd7gWs6cxDGGYvX2HYZhhrOo9SRKNqJO14oymsGUME9aJjXwWjayK47AdJsFh4ra9R%2Bhc0LqFd6V2rtv%2BzLhjZxjj&X-Amz-Signature=d17f719c48fdaa3362f8d588e9f61878c3dfba91decc606103cfc03068396c39&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUN5IOR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxtA2zXOLDnJ8HEfERTz%2BloC%2BrInOLR1bCicxSRgTi0AiEA1vLp0XTxLVs3006wOjJX6giPRaGjqCw%2FlnXCCb1grHUq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNr01DCoKOkS6rgn%2FSrcA4V9aftkJDJM8yn4w4uT9IjYNW3KwwTTVrPtS%2FJeHw0vOM1hssd4j5OZpIWuovAFDG4vztjbxbtaMtXcotvNHGgrX%2Fwo0R6j0gBA7HGDWPMrOp6ejWI0hadCy47soslREeGpqTAcT1TLM2d9gp7gFaf27Ou3kLD8yYZjBkJLcE1OL80Mer7c5g4frUxojKvh3G1ssn6vq7cU1FIfnw5fmbXcFWoVUY2NK8MirZIHbNqOZiVqLrbDyCA4512mi1G53g9lFGbwovSbItDd3BxPw9gEIRCGX%2FiM%2BNzUGx2rxxFt1EMpkX1AXymFBHmhPprMI5kN19kkG5QiyJsmbMKyU59aaebJoRq44h7BvPvIzBzpLsaA84iPrJ6Qa%2Byr%2BhDF%2B7zlMDRfltJhTp0L36ZVDl5R3zuVnk%2FT4ap%2BXSbGIV9XH3X5aKAAmEtFAFeYBPPMkIEtetvvHGTIwVl7wSuLInOm1j%2Fx9xtnz5mrBXdVwWO8HAdjSW%2Bh3Wb5DqkxY7scyf%2BOZuhfve3f3qUUe6Awcq%2BiLf0CcRXGKXMjgfonfds2Uc0eVnHXMp5ZQEUCR1hqhyGLKaIQb5x9eXeAkeSNcd8z%2FZg1Nprmqwhc4lzmDqzYUFUiXeYWHtzZXetqMPCf7b0GOqUBSGYx1l7ubLBlVCTl9yA9XUnt0r96eQGDAIkMiJAdng5QYg7qxyUBtilW714vTuZ97UNVViRXJR4QwZiGmE0W3%2BNb%2Bjd%2FR9v1PSqI%2BEinC9DzPhhGvNc1NuACJGJlDGkeVz1sd7gWs6cxDGGYvX2HYZhhrOo9SRKNqJO14oymsGUME9aJjXwWjayK47AdJsFh4ra9R%2Bhc0LqFd6V2rtv%2BzLhjZxjj&X-Amz-Signature=658cbbf2fa01a1d666eb896d3d4263b06793020cd495015352b03d8e83352cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUN5IOR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxtA2zXOLDnJ8HEfERTz%2BloC%2BrInOLR1bCicxSRgTi0AiEA1vLp0XTxLVs3006wOjJX6giPRaGjqCw%2FlnXCCb1grHUq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNr01DCoKOkS6rgn%2FSrcA4V9aftkJDJM8yn4w4uT9IjYNW3KwwTTVrPtS%2FJeHw0vOM1hssd4j5OZpIWuovAFDG4vztjbxbtaMtXcotvNHGgrX%2Fwo0R6j0gBA7HGDWPMrOp6ejWI0hadCy47soslREeGpqTAcT1TLM2d9gp7gFaf27Ou3kLD8yYZjBkJLcE1OL80Mer7c5g4frUxojKvh3G1ssn6vq7cU1FIfnw5fmbXcFWoVUY2NK8MirZIHbNqOZiVqLrbDyCA4512mi1G53g9lFGbwovSbItDd3BxPw9gEIRCGX%2FiM%2BNzUGx2rxxFt1EMpkX1AXymFBHmhPprMI5kN19kkG5QiyJsmbMKyU59aaebJoRq44h7BvPvIzBzpLsaA84iPrJ6Qa%2Byr%2BhDF%2B7zlMDRfltJhTp0L36ZVDl5R3zuVnk%2FT4ap%2BXSbGIV9XH3X5aKAAmEtFAFeYBPPMkIEtetvvHGTIwVl7wSuLInOm1j%2Fx9xtnz5mrBXdVwWO8HAdjSW%2Bh3Wb5DqkxY7scyf%2BOZuhfve3f3qUUe6Awcq%2BiLf0CcRXGKXMjgfonfds2Uc0eVnHXMp5ZQEUCR1hqhyGLKaIQb5x9eXeAkeSNcd8z%2FZg1Nprmqwhc4lzmDqzYUFUiXeYWHtzZXetqMPCf7b0GOqUBSGYx1l7ubLBlVCTl9yA9XUnt0r96eQGDAIkMiJAdng5QYg7qxyUBtilW714vTuZ97UNVViRXJR4QwZiGmE0W3%2BNb%2Bjd%2FR9v1PSqI%2BEinC9DzPhhGvNc1NuACJGJlDGkeVz1sd7gWs6cxDGGYvX2HYZhhrOo9SRKNqJO14oymsGUME9aJjXwWjayK47AdJsFh4ra9R%2Bhc0LqFd6V2rtv%2BzLhjZxjj&X-Amz-Signature=bf65806a22568ce5afbee25bf418f4fc0c48bd0ecfe73716263e4e25809e9360&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
