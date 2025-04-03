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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOZC3TX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4dbR%2FuWaRZh5orkDa60p3lwbXQbpByRXrt3rL9X7IQAIgEf5yi%2FnkOXU%2FBnhkItxT92xncbizJPics5KbuaPT5YMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgaCrHxBaxNLpBAcircA8pCBUUxIDxY31Pmib%2BGkINUe7ietg%2FHlA4shUrJ6TuM4Tm9GG14%2F8O1L7R8t0SIzwQvCRCESK3dgUUYDLdk580c20VOd07d1vj%2Fo%2FKB8WgGSx6BE2pYr21J4jCyrRNPBrelk8PSOY8ohXM%2FmOXMTj%2FF9UR86%2B8UbcMmoYy268NPh%2BQduW%2BWEZKPV3JEmtwAXXbH5axXtaTk7RSKCrjy9XaGDm20yPBY0WM0g07k%2BP7X9wMY5Qw%2B29UTZ%2FNDd5%2Bmpq%2BzdMzTscPkYdWH2PYDH%2BVMds8N2nTNTil9rC38HeQ7ksFLGj%2B8tEM21FCIiBrjREqqpgzy9wPRGfKpwiFJe5MOLbFvFtp5YPBN%2BXKiE0DbIETX16i4veZCgOxqMxjs5u%2BrXOIVGj0LPSUHIYKRVHHiWAnQM1tSPyJXDkp%2BlIaoVERCUd3oODGgpZKP21rZZdYHG8a35QOboSQZ1pAYRUSqkKZCJU6ogrq5ITjiiIKPSQpvE6W6CqT0iDRw%2B%2Fq1hRd7AMI8xtc%2BeYUUa8G1J0Jj9xuJPbYcovIlKxKPt%2BSwR8KrYY0zjqjT7KHk0lN0J8MP4AgrQ4KRpQaY32teLyT3oSQJMbMQgIK1%2BLYDEVr0P1Nr8spdkpNVgDASMMnOur8GOqUBmgvAYlF61A0hZK1MWsy5iDLCJbTrIzDPxAH4%2BRiorZiL1p8q5NSa9Vh2UsvF%2FAHL%2Bo5dpXv5gPW%2Bg%2B9J%2BvAk3%2Fofv%2Frph0yHUijwMcQOpvxpuXRwnhg79klAAkTuFaGWMPjkBvssIti71twopDpMCwfDQ95f8GcZwelP%2Fq8a9pumCbhUTgSeBNhprFK1s9u9eLuUGY5i%2B32e4RBr81WdlwgLDZZH&X-Amz-Signature=329e406c38f1aa25d2d34f53e8244ad7fb5ac77cd0566bf9fd78f3fccd327ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOZC3TX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4dbR%2FuWaRZh5orkDa60p3lwbXQbpByRXrt3rL9X7IQAIgEf5yi%2FnkOXU%2FBnhkItxT92xncbizJPics5KbuaPT5YMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgaCrHxBaxNLpBAcircA8pCBUUxIDxY31Pmib%2BGkINUe7ietg%2FHlA4shUrJ6TuM4Tm9GG14%2F8O1L7R8t0SIzwQvCRCESK3dgUUYDLdk580c20VOd07d1vj%2Fo%2FKB8WgGSx6BE2pYr21J4jCyrRNPBrelk8PSOY8ohXM%2FmOXMTj%2FF9UR86%2B8UbcMmoYy268NPh%2BQduW%2BWEZKPV3JEmtwAXXbH5axXtaTk7RSKCrjy9XaGDm20yPBY0WM0g07k%2BP7X9wMY5Qw%2B29UTZ%2FNDd5%2Bmpq%2BzdMzTscPkYdWH2PYDH%2BVMds8N2nTNTil9rC38HeQ7ksFLGj%2B8tEM21FCIiBrjREqqpgzy9wPRGfKpwiFJe5MOLbFvFtp5YPBN%2BXKiE0DbIETX16i4veZCgOxqMxjs5u%2BrXOIVGj0LPSUHIYKRVHHiWAnQM1tSPyJXDkp%2BlIaoVERCUd3oODGgpZKP21rZZdYHG8a35QOboSQZ1pAYRUSqkKZCJU6ogrq5ITjiiIKPSQpvE6W6CqT0iDRw%2B%2Fq1hRd7AMI8xtc%2BeYUUa8G1J0Jj9xuJPbYcovIlKxKPt%2BSwR8KrYY0zjqjT7KHk0lN0J8MP4AgrQ4KRpQaY32teLyT3oSQJMbMQgIK1%2BLYDEVr0P1Nr8spdkpNVgDASMMnOur8GOqUBmgvAYlF61A0hZK1MWsy5iDLCJbTrIzDPxAH4%2BRiorZiL1p8q5NSa9Vh2UsvF%2FAHL%2Bo5dpXv5gPW%2Bg%2B9J%2BvAk3%2Fofv%2Frph0yHUijwMcQOpvxpuXRwnhg79klAAkTuFaGWMPjkBvssIti71twopDpMCwfDQ95f8GcZwelP%2Fq8a9pumCbhUTgSeBNhprFK1s9u9eLuUGY5i%2B32e4RBr81WdlwgLDZZH&X-Amz-Signature=93ee9a5844dca9e09771f95dd83c7ba431645a2ec4a13040d75f7bfaa7964373&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QOZC3TX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4dbR%2FuWaRZh5orkDa60p3lwbXQbpByRXrt3rL9X7IQAIgEf5yi%2FnkOXU%2FBnhkItxT92xncbizJPics5KbuaPT5YMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgaCrHxBaxNLpBAcircA8pCBUUxIDxY31Pmib%2BGkINUe7ietg%2FHlA4shUrJ6TuM4Tm9GG14%2F8O1L7R8t0SIzwQvCRCESK3dgUUYDLdk580c20VOd07d1vj%2Fo%2FKB8WgGSx6BE2pYr21J4jCyrRNPBrelk8PSOY8ohXM%2FmOXMTj%2FF9UR86%2B8UbcMmoYy268NPh%2BQduW%2BWEZKPV3JEmtwAXXbH5axXtaTk7RSKCrjy9XaGDm20yPBY0WM0g07k%2BP7X9wMY5Qw%2B29UTZ%2FNDd5%2Bmpq%2BzdMzTscPkYdWH2PYDH%2BVMds8N2nTNTil9rC38HeQ7ksFLGj%2B8tEM21FCIiBrjREqqpgzy9wPRGfKpwiFJe5MOLbFvFtp5YPBN%2BXKiE0DbIETX16i4veZCgOxqMxjs5u%2BrXOIVGj0LPSUHIYKRVHHiWAnQM1tSPyJXDkp%2BlIaoVERCUd3oODGgpZKP21rZZdYHG8a35QOboSQZ1pAYRUSqkKZCJU6ogrq5ITjiiIKPSQpvE6W6CqT0iDRw%2B%2Fq1hRd7AMI8xtc%2BeYUUa8G1J0Jj9xuJPbYcovIlKxKPt%2BSwR8KrYY0zjqjT7KHk0lN0J8MP4AgrQ4KRpQaY32teLyT3oSQJMbMQgIK1%2BLYDEVr0P1Nr8spdkpNVgDASMMnOur8GOqUBmgvAYlF61A0hZK1MWsy5iDLCJbTrIzDPxAH4%2BRiorZiL1p8q5NSa9Vh2UsvF%2FAHL%2Bo5dpXv5gPW%2Bg%2B9J%2BvAk3%2Fofv%2Frph0yHUijwMcQOpvxpuXRwnhg79klAAkTuFaGWMPjkBvssIti71twopDpMCwfDQ95f8GcZwelP%2Fq8a9pumCbhUTgSeBNhprFK1s9u9eLuUGY5i%2B32e4RBr81WdlwgLDZZH&X-Amz-Signature=832e45abc1b795ed02d1a73f03b4fd3c7c039eb6f6c737be9139976a6baa933d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
