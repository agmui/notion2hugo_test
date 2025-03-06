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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPKOOGY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgq1PmTetbWHiLXdlG3o89SIf8eIusSAyRkNrIZcfNZgIgHHLX5Y%2FHzWO2Z29%2FIgZtNG7fvJFX%2F3MSa4UvUvTpA%2Fcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFldWHpg3VCPTkaN2ircA4%2FkVYmG9RGMMov%2BOzmyKOPW5ih%2FNPYMyyHcwSOCCnBE6am%2F6sf8bGlbQZ1GOSjEXPcldWeHq0%2FMhBCJ9gnMpB51RuRaM0CL8JK6JQLU6NBo%2BAZi2uMLaW3YM5q1HwgK3HeM7nY2dGBi7hNYKg%2Fw2J7ljUFpPYjuna1da73Ru2rWMPDSu7z93SB8rDaSc4etE%2FcPNbYDDCvSSlxGMlyAzNM6v2ouFBNdVAGaxrEvWuAHAZOmfwvLNM0pfdh5%2FBziJ%2Fz1TvU1vcJ%2BgP0kM2d%2FX5kbIrPxtB9NKGA%2BvhoM0%2FG5QPE0VsfGTdSpio4Bpc9COFpKfJ8vjQy9Z08Jo9vF79vqDkVVLPCAFxtdZPHJ48FfjnSu09UTZnovJTTlXa%2BjVAJu434h4VYOqw%2BMukRYWZ2pKr2AIAwreSqP3q%2FloXf%2BB3Y%2B72R2rv5SF85fm%2FCdlxo%2BCXII3BI%2ByryrzxfOZEsBNZATqejV2pi15qT%2FF14l6l6K9gsaWa%2BjIf52C3gszRprlOk2EzJ9IWrzz5%2FOMIFd8wtjZWKisEvpVILfNmVD9Wlu1FA2M1D12N4GIPAjoxzvbmdTp%2BTfTP%2FsVRgBLQTcgld6zwy%2BkolcBQGyOygfWr4i%2FZQiXLLARjWUMPiQpr4GOqUB%2FOpi9OPAHfI0Cecs2hMioeqwysX7Xrv1bp12AHBvxAnQli798%2FKCvVbACFJBlDH2tLkadEvHjSuTDlNl83%2BB7X3GmGF%2BiM1UtWZ4DwSyr%2BlnGE8iyWB5WtGjkyAi%2BYjfWt%2FLtSvze5MNx8vOBb0J3xd3UiDGQAUYR48CeNZzXpcjLPky%2FvHu3IK5zYE87lDzUo6VQjNn52OavHoksArFa3Kr9hey&X-Amz-Signature=21386f53a38431efbe070df7a94ae5468d78beae35498994355031614d6793d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPKOOGY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgq1PmTetbWHiLXdlG3o89SIf8eIusSAyRkNrIZcfNZgIgHHLX5Y%2FHzWO2Z29%2FIgZtNG7fvJFX%2F3MSa4UvUvTpA%2Fcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFldWHpg3VCPTkaN2ircA4%2FkVYmG9RGMMov%2BOzmyKOPW5ih%2FNPYMyyHcwSOCCnBE6am%2F6sf8bGlbQZ1GOSjEXPcldWeHq0%2FMhBCJ9gnMpB51RuRaM0CL8JK6JQLU6NBo%2BAZi2uMLaW3YM5q1HwgK3HeM7nY2dGBi7hNYKg%2Fw2J7ljUFpPYjuna1da73Ru2rWMPDSu7z93SB8rDaSc4etE%2FcPNbYDDCvSSlxGMlyAzNM6v2ouFBNdVAGaxrEvWuAHAZOmfwvLNM0pfdh5%2FBziJ%2Fz1TvU1vcJ%2BgP0kM2d%2FX5kbIrPxtB9NKGA%2BvhoM0%2FG5QPE0VsfGTdSpio4Bpc9COFpKfJ8vjQy9Z08Jo9vF79vqDkVVLPCAFxtdZPHJ48FfjnSu09UTZnovJTTlXa%2BjVAJu434h4VYOqw%2BMukRYWZ2pKr2AIAwreSqP3q%2FloXf%2BB3Y%2B72R2rv5SF85fm%2FCdlxo%2BCXII3BI%2ByryrzxfOZEsBNZATqejV2pi15qT%2FF14l6l6K9gsaWa%2BjIf52C3gszRprlOk2EzJ9IWrzz5%2FOMIFd8wtjZWKisEvpVILfNmVD9Wlu1FA2M1D12N4GIPAjoxzvbmdTp%2BTfTP%2FsVRgBLQTcgld6zwy%2BkolcBQGyOygfWr4i%2FZQiXLLARjWUMPiQpr4GOqUB%2FOpi9OPAHfI0Cecs2hMioeqwysX7Xrv1bp12AHBvxAnQli798%2FKCvVbACFJBlDH2tLkadEvHjSuTDlNl83%2BB7X3GmGF%2BiM1UtWZ4DwSyr%2BlnGE8iyWB5WtGjkyAi%2BYjfWt%2FLtSvze5MNx8vOBb0J3xd3UiDGQAUYR48CeNZzXpcjLPky%2FvHu3IK5zYE87lDzUo6VQjNn52OavHoksArFa3Kr9hey&X-Amz-Signature=57be22e3a50da7d1212836ca5215d52e19caeeed2be65d7cba159d211696dd68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPKOOGY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgq1PmTetbWHiLXdlG3o89SIf8eIusSAyRkNrIZcfNZgIgHHLX5Y%2FHzWO2Z29%2FIgZtNG7fvJFX%2F3MSa4UvUvTpA%2Fcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFldWHpg3VCPTkaN2ircA4%2FkVYmG9RGMMov%2BOzmyKOPW5ih%2FNPYMyyHcwSOCCnBE6am%2F6sf8bGlbQZ1GOSjEXPcldWeHq0%2FMhBCJ9gnMpB51RuRaM0CL8JK6JQLU6NBo%2BAZi2uMLaW3YM5q1HwgK3HeM7nY2dGBi7hNYKg%2Fw2J7ljUFpPYjuna1da73Ru2rWMPDSu7z93SB8rDaSc4etE%2FcPNbYDDCvSSlxGMlyAzNM6v2ouFBNdVAGaxrEvWuAHAZOmfwvLNM0pfdh5%2FBziJ%2Fz1TvU1vcJ%2BgP0kM2d%2FX5kbIrPxtB9NKGA%2BvhoM0%2FG5QPE0VsfGTdSpio4Bpc9COFpKfJ8vjQy9Z08Jo9vF79vqDkVVLPCAFxtdZPHJ48FfjnSu09UTZnovJTTlXa%2BjVAJu434h4VYOqw%2BMukRYWZ2pKr2AIAwreSqP3q%2FloXf%2BB3Y%2B72R2rv5SF85fm%2FCdlxo%2BCXII3BI%2ByryrzxfOZEsBNZATqejV2pi15qT%2FF14l6l6K9gsaWa%2BjIf52C3gszRprlOk2EzJ9IWrzz5%2FOMIFd8wtjZWKisEvpVILfNmVD9Wlu1FA2M1D12N4GIPAjoxzvbmdTp%2BTfTP%2FsVRgBLQTcgld6zwy%2BkolcBQGyOygfWr4i%2FZQiXLLARjWUMPiQpr4GOqUB%2FOpi9OPAHfI0Cecs2hMioeqwysX7Xrv1bp12AHBvxAnQli798%2FKCvVbACFJBlDH2tLkadEvHjSuTDlNl83%2BB7X3GmGF%2BiM1UtWZ4DwSyr%2BlnGE8iyWB5WtGjkyAi%2BYjfWt%2FLtSvze5MNx8vOBb0J3xd3UiDGQAUYR48CeNZzXpcjLPky%2FvHu3IK5zYE87lDzUo6VQjNn52OavHoksArFa3Kr9hey&X-Amz-Signature=a688f20cc55cc1640c9bdd89e0ddc86c82da08a6c6c8314fc7f4cfd3d272fdb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
