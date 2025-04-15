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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CODC44M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq6yExshC1o18oa1wW1hPEPtmWkmdL5i1S9Aac%2FbK0jgIgaP1nTvoE9ikypKuQPaheITpUiETf68nXqOi4T3M3I00q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMgmgsqD%2Bk0G5rAnxircA%2B5VMpAvLk7B2uYrhxfah5lcl6KURd4QkECHdddEBGyi8kd6RuKFLYKZPexB9EDiYdKCvuRVCL6%2FrgpiCcr06w0TC1YM72fK9PLGInpQ0g1NViJ6b1yAWCCQy%2FcgUNX%2BJEDFSeR73Y9hv%2B3HJHxADpineI9zuDiVAjgaDHYLyXFUu7WowDMmniBMx9c9yfs%2BdJFylJFLaIJP30%2FqhriiTwanY2BYTcKKL1LGjsMEdODFIdQt%2F7MnlmJGuK5jD6Vu7MiD6mmChCkK2TbHGpfw6uDtiSEaOR5XjtLakkiqEdDt4ou6f%2BwRQEP3KrjJmmzHmos%2FTdCDp6FjcYmpKI4epcCb4A6ppCZiTfRXQsWFDC2lRkuhk12%2FDcxp3UENOZR6hkKBuBh0Cm%2BfNj6EaHi1p7X1Ochz7X2aWFT%2F3po6DrCeqejUhNarugPYcCBITmwCqz%2F8gBrZOu2pWHdmvoW%2FAsCwYPhZ3fz35EQafuasO1evO1RWDK0O%2BH6YXQuakI00vRu8ciMI4kyoULxZxaRLjS2G2L%2BBFRX6gpqToyR%2BKyyEAQ30OhEVgF1Ht61%2FOQwiMz9k%2Fhb60ClepMQuzSjGYrFLP%2FU744r5bCNxMsmxTy2lOXj4srNST4I3PzccMKSm%2Bb8GOqUBj25xpO62VvP6LsjDqvK9An0Y1Dw4QvyRd7gjt5ajm9NP1rG%2Byea%2BYrroi3wjV%2B1DfbvOXLWVHH%2BXVyRUztDCJ851lkbd5grSVMmWj%2FYnfndfzgQU1F41IZZwtX7Rwrz3PBeUOhKyhmoBitcVYtvWV7OZ%2F3tsQ5p1%2FAM%2Foo2Ah4nyrbsn%2Bs3TuWRcNi%2FrMqPhwm3eCTSxvgObSuCUw%2B8jgPV1L0sE&X-Amz-Signature=46669099212aa31ae4bbb6c53b58e0f1e29ce0179ff87f01f90784daf0c20665&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CODC44M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq6yExshC1o18oa1wW1hPEPtmWkmdL5i1S9Aac%2FbK0jgIgaP1nTvoE9ikypKuQPaheITpUiETf68nXqOi4T3M3I00q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMgmgsqD%2Bk0G5rAnxircA%2B5VMpAvLk7B2uYrhxfah5lcl6KURd4QkECHdddEBGyi8kd6RuKFLYKZPexB9EDiYdKCvuRVCL6%2FrgpiCcr06w0TC1YM72fK9PLGInpQ0g1NViJ6b1yAWCCQy%2FcgUNX%2BJEDFSeR73Y9hv%2B3HJHxADpineI9zuDiVAjgaDHYLyXFUu7WowDMmniBMx9c9yfs%2BdJFylJFLaIJP30%2FqhriiTwanY2BYTcKKL1LGjsMEdODFIdQt%2F7MnlmJGuK5jD6Vu7MiD6mmChCkK2TbHGpfw6uDtiSEaOR5XjtLakkiqEdDt4ou6f%2BwRQEP3KrjJmmzHmos%2FTdCDp6FjcYmpKI4epcCb4A6ppCZiTfRXQsWFDC2lRkuhk12%2FDcxp3UENOZR6hkKBuBh0Cm%2BfNj6EaHi1p7X1Ochz7X2aWFT%2F3po6DrCeqejUhNarugPYcCBITmwCqz%2F8gBrZOu2pWHdmvoW%2FAsCwYPhZ3fz35EQafuasO1evO1RWDK0O%2BH6YXQuakI00vRu8ciMI4kyoULxZxaRLjS2G2L%2BBFRX6gpqToyR%2BKyyEAQ30OhEVgF1Ht61%2FOQwiMz9k%2Fhb60ClepMQuzSjGYrFLP%2FU744r5bCNxMsmxTy2lOXj4srNST4I3PzccMKSm%2Bb8GOqUBj25xpO62VvP6LsjDqvK9An0Y1Dw4QvyRd7gjt5ajm9NP1rG%2Byea%2BYrroi3wjV%2B1DfbvOXLWVHH%2BXVyRUztDCJ851lkbd5grSVMmWj%2FYnfndfzgQU1F41IZZwtX7Rwrz3PBeUOhKyhmoBitcVYtvWV7OZ%2F3tsQ5p1%2FAM%2Foo2Ah4nyrbsn%2Bs3TuWRcNi%2FrMqPhwm3eCTSxvgObSuCUw%2B8jgPV1L0sE&X-Amz-Signature=4fe65fd0975e5d286d7f6b02458207c8158530f65d0fadad8d9355bfa7f8c76e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CODC44M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq6yExshC1o18oa1wW1hPEPtmWkmdL5i1S9Aac%2FbK0jgIgaP1nTvoE9ikypKuQPaheITpUiETf68nXqOi4T3M3I00q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMgmgsqD%2Bk0G5rAnxircA%2B5VMpAvLk7B2uYrhxfah5lcl6KURd4QkECHdddEBGyi8kd6RuKFLYKZPexB9EDiYdKCvuRVCL6%2FrgpiCcr06w0TC1YM72fK9PLGInpQ0g1NViJ6b1yAWCCQy%2FcgUNX%2BJEDFSeR73Y9hv%2B3HJHxADpineI9zuDiVAjgaDHYLyXFUu7WowDMmniBMx9c9yfs%2BdJFylJFLaIJP30%2FqhriiTwanY2BYTcKKL1LGjsMEdODFIdQt%2F7MnlmJGuK5jD6Vu7MiD6mmChCkK2TbHGpfw6uDtiSEaOR5XjtLakkiqEdDt4ou6f%2BwRQEP3KrjJmmzHmos%2FTdCDp6FjcYmpKI4epcCb4A6ppCZiTfRXQsWFDC2lRkuhk12%2FDcxp3UENOZR6hkKBuBh0Cm%2BfNj6EaHi1p7X1Ochz7X2aWFT%2F3po6DrCeqejUhNarugPYcCBITmwCqz%2F8gBrZOu2pWHdmvoW%2FAsCwYPhZ3fz35EQafuasO1evO1RWDK0O%2BH6YXQuakI00vRu8ciMI4kyoULxZxaRLjS2G2L%2BBFRX6gpqToyR%2BKyyEAQ30OhEVgF1Ht61%2FOQwiMz9k%2Fhb60ClepMQuzSjGYrFLP%2FU744r5bCNxMsmxTy2lOXj4srNST4I3PzccMKSm%2Bb8GOqUBj25xpO62VvP6LsjDqvK9An0Y1Dw4QvyRd7gjt5ajm9NP1rG%2Byea%2BYrroi3wjV%2B1DfbvOXLWVHH%2BXVyRUztDCJ851lkbd5grSVMmWj%2FYnfndfzgQU1F41IZZwtX7Rwrz3PBeUOhKyhmoBitcVYtvWV7OZ%2F3tsQ5p1%2FAM%2Foo2Ah4nyrbsn%2Bs3TuWRcNi%2FrMqPhwm3eCTSxvgObSuCUw%2B8jgPV1L0sE&X-Amz-Signature=f4d18f9a00ecee57f4dddbce160c108a1386cb0abf42e88595b9e81303eac2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
