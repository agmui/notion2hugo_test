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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDTGRX7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvF%2FHKnrYSd5IKVbJDjJJ194AmVdl3Sb0vns7axyvZrAiEA1c4r7waA4JcVidzkJWpO5BNtFcSMMszpoTfoG0bplp8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJp805cQ8d9apj6DYSrcAxoD2frsPMPVfFb6t8UM65oyk%2BPe4TPrP8HLti6BNQCNuhPY8Kg0JHFHmyrY5c%2BE3BtAqtxmpfUP8rKwxKnhtqxXsENjuOSQGQoJKHweyEvcBlws7S8o6EnDydEMg8P%2BVmNH%2BVoRmOiK7Jcc%2BXBde1MXsHZPlmlDFOAxyoMwiWLJSmEqB2fsY26vJ%2BtFM2EiEgDEQQ8YSZqPFWWUeDdKrq2LagE3EFY4%2BwYQrGjNfV7a6yy0L9fDorRfb50EmBz6o6gLVrqyFvPjIirkhw4V%2Fkbny%2BPEFvy%2BBgQm%2FVqxsOKJWUVPwQapoeFEl%2BgvJvF42LHuBLewF3BFntb2%2BsaLgE1IYq4aPElEUrmlRui2UokBCB1vJLbA7PmAbz3vcQs3pEhdDf1xJtVHX%2BAObstHUvW5Osrj57%2BoyM3cKfqULcl0XKIdMMyDWwGaRxVN9YpZO%2BjmozkhgUDFPZ7XUeNbCAf%2BHln%2BlRzQ2pNKqjQJWtgCvDdSxDGSrdyCbbeHE0NgQxy%2F3uawL5lzoIPdbx3xVHhROOG56YGI79hNCRz1KdwhOgVW1Hb7UeFcpsDE56Ih7TaQem6uAOAteZndwYTRo2Zr3baygI0%2BLb9OtWYP65vzj7Ga0jPSDbMIIjsBMLLZlL4GOqUBJor0NeIEF6nDjOrRgkDlGFDiof3zh34%2FD04bRrIBs5iHSXnh6UKsRn1CK1hGMY%2ByQwnennhmkm8BITrQKcrdvs9XpaAFl6snwLvxIWnu7cnho5xQITKWaF19TjYBEj9%2FTwucQLtT4msx935FNntkj5WeX%2BPyD%2BxpDISJ%2BUuCKR28gaOfocRBYV2kZFcyuKn3iFvV9VIBtI8fgLNmGZ0bnfa4f2Da&X-Amz-Signature=b2923afe5816aa16b8ff06080ef54406bfc815c26f3b322f6ad74ae3f25d853f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDTGRX7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvF%2FHKnrYSd5IKVbJDjJJ194AmVdl3Sb0vns7axyvZrAiEA1c4r7waA4JcVidzkJWpO5BNtFcSMMszpoTfoG0bplp8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJp805cQ8d9apj6DYSrcAxoD2frsPMPVfFb6t8UM65oyk%2BPe4TPrP8HLti6BNQCNuhPY8Kg0JHFHmyrY5c%2BE3BtAqtxmpfUP8rKwxKnhtqxXsENjuOSQGQoJKHweyEvcBlws7S8o6EnDydEMg8P%2BVmNH%2BVoRmOiK7Jcc%2BXBde1MXsHZPlmlDFOAxyoMwiWLJSmEqB2fsY26vJ%2BtFM2EiEgDEQQ8YSZqPFWWUeDdKrq2LagE3EFY4%2BwYQrGjNfV7a6yy0L9fDorRfb50EmBz6o6gLVrqyFvPjIirkhw4V%2Fkbny%2BPEFvy%2BBgQm%2FVqxsOKJWUVPwQapoeFEl%2BgvJvF42LHuBLewF3BFntb2%2BsaLgE1IYq4aPElEUrmlRui2UokBCB1vJLbA7PmAbz3vcQs3pEhdDf1xJtVHX%2BAObstHUvW5Osrj57%2BoyM3cKfqULcl0XKIdMMyDWwGaRxVN9YpZO%2BjmozkhgUDFPZ7XUeNbCAf%2BHln%2BlRzQ2pNKqjQJWtgCvDdSxDGSrdyCbbeHE0NgQxy%2F3uawL5lzoIPdbx3xVHhROOG56YGI79hNCRz1KdwhOgVW1Hb7UeFcpsDE56Ih7TaQem6uAOAteZndwYTRo2Zr3baygI0%2BLb9OtWYP65vzj7Ga0jPSDbMIIjsBMLLZlL4GOqUBJor0NeIEF6nDjOrRgkDlGFDiof3zh34%2FD04bRrIBs5iHSXnh6UKsRn1CK1hGMY%2ByQwnennhmkm8BITrQKcrdvs9XpaAFl6snwLvxIWnu7cnho5xQITKWaF19TjYBEj9%2FTwucQLtT4msx935FNntkj5WeX%2BPyD%2BxpDISJ%2BUuCKR28gaOfocRBYV2kZFcyuKn3iFvV9VIBtI8fgLNmGZ0bnfa4f2Da&X-Amz-Signature=2ed98511e1cf5edeb13730e46c9909d26f70c4ffd938111f23c790db0873ec48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDTGRX7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvF%2FHKnrYSd5IKVbJDjJJ194AmVdl3Sb0vns7axyvZrAiEA1c4r7waA4JcVidzkJWpO5BNtFcSMMszpoTfoG0bplp8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJp805cQ8d9apj6DYSrcAxoD2frsPMPVfFb6t8UM65oyk%2BPe4TPrP8HLti6BNQCNuhPY8Kg0JHFHmyrY5c%2BE3BtAqtxmpfUP8rKwxKnhtqxXsENjuOSQGQoJKHweyEvcBlws7S8o6EnDydEMg8P%2BVmNH%2BVoRmOiK7Jcc%2BXBde1MXsHZPlmlDFOAxyoMwiWLJSmEqB2fsY26vJ%2BtFM2EiEgDEQQ8YSZqPFWWUeDdKrq2LagE3EFY4%2BwYQrGjNfV7a6yy0L9fDorRfb50EmBz6o6gLVrqyFvPjIirkhw4V%2Fkbny%2BPEFvy%2BBgQm%2FVqxsOKJWUVPwQapoeFEl%2BgvJvF42LHuBLewF3BFntb2%2BsaLgE1IYq4aPElEUrmlRui2UokBCB1vJLbA7PmAbz3vcQs3pEhdDf1xJtVHX%2BAObstHUvW5Osrj57%2BoyM3cKfqULcl0XKIdMMyDWwGaRxVN9YpZO%2BjmozkhgUDFPZ7XUeNbCAf%2BHln%2BlRzQ2pNKqjQJWtgCvDdSxDGSrdyCbbeHE0NgQxy%2F3uawL5lzoIPdbx3xVHhROOG56YGI79hNCRz1KdwhOgVW1Hb7UeFcpsDE56Ih7TaQem6uAOAteZndwYTRo2Zr3baygI0%2BLb9OtWYP65vzj7Ga0jPSDbMIIjsBMLLZlL4GOqUBJor0NeIEF6nDjOrRgkDlGFDiof3zh34%2FD04bRrIBs5iHSXnh6UKsRn1CK1hGMY%2ByQwnennhmkm8BITrQKcrdvs9XpaAFl6snwLvxIWnu7cnho5xQITKWaF19TjYBEj9%2FTwucQLtT4msx935FNntkj5WeX%2BPyD%2BxpDISJ%2BUuCKR28gaOfocRBYV2kZFcyuKn3iFvV9VIBtI8fgLNmGZ0bnfa4f2Da&X-Amz-Signature=77f07584f88b5b13ff1cf2ff2326062fa78e319b4797f5bd74b0db2661f2db28&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
