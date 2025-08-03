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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=9455a81c1bfa173ff126afd496fe2071f42d21109691fd3dc5076c56bdd6be24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=f6b619d7608232a653dc10a1961db4c2a9505fd00174a89fb208258b42819ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=f0d4aa0ae4afc07a81257d0728913b1307ca34bd9b13b09e97ffc35f17d675cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
