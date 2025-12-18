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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4ALYAV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGUtJAR1a3I%2BFNhKJhd%2B%2B%2FfuGeSXUJd2rBiXMMYjgu%2BAIgOxeZQwv1yHG38FZHlLckwKIZU5snO%2BDaadpRoeFnVIwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq%2Basg8Ilaco1xv3CrcA79VIuKJA6WoFC16hX%2BSFoeGIU2n8pnvbO8MA%2BBmZYq%2BUT2OnwV3%2F6gAn3zDmCh9hM9r3bvbPOfMmdzzL2nVYz5Vbr5CbYXS%2Bjk%2FGdiUCCmSfpamIH7TUMzt4%2F8NaHBPyofNSaPAY%2FMYiNtrkueMvjPoBWK4iLQGFWTZTSMl3ESlupjJadlzjXP5smMZXsgfb1GZWGZGGQUCshqv2OLoDvMlmFqjKrcjoalEzVI1xZL6uWs59KNMhLsBugpagFyzD%2FSxjvZnQwWIacWNSJJX2NGhZohhF2FKneu5NpG2u%2Bk1rh%2F9v9MzpofqiHPaZKhJOcb06xL3pKAFP6%2FWGFYKjmQFmv4ReyzLJYeWuhZ4TjW3%2BLqUjY7GmuLm64gBwbo5v%2BZfcH73YoyZ5GLPFsCkgbw0CXDtsCFoBYxcQTsu%2B4qzSLi6RvJFVzxAY8OKXu8S8xyiRK6lrVUvWCb7Rp8%2BQkyfOCQ0VLt2xunKDGnWEsYg%2FTBQMYzJwwVTWNOoa89nD37r9x9T1IzMjYFdmWCO8eP25CznTMDjCuXyqyL3YfjJrgSZtQqsdOX0m1o2%2BKFJQuStPPKyboopM%2BOvRLJFGxasEqsnad7HHwnHX9qtHRQR3M2Yihmplc62dnt3MLutjcoGOqUBO%2BRkMroPMEwJV6gHqADc3pehNdALJLyMknLkDxygxdoKe6mq2fjeeBbhlIDHtGfDVCt4QUyQYvMlnqmMFyIFc2EFBYrlFnmdD%2FoU47mC4ioBMNSWFy12bSsqBV3vTSa404w0hQG%2FO%2BDQt4QxvFp7tUpSwNFaXn0lUf0JZCIUE2mSKxNhMrBrRmMgJQZTAVJLc9yfMkP4N0Q%2BF%2Fd1eH%2F8DLApg0mH&X-Amz-Signature=a5a0fc00acc9863a8af0ad28c049d664fd619df950009e18afb218aa7e29a8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4ALYAV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGUtJAR1a3I%2BFNhKJhd%2B%2B%2FfuGeSXUJd2rBiXMMYjgu%2BAIgOxeZQwv1yHG38FZHlLckwKIZU5snO%2BDaadpRoeFnVIwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq%2Basg8Ilaco1xv3CrcA79VIuKJA6WoFC16hX%2BSFoeGIU2n8pnvbO8MA%2BBmZYq%2BUT2OnwV3%2F6gAn3zDmCh9hM9r3bvbPOfMmdzzL2nVYz5Vbr5CbYXS%2Bjk%2FGdiUCCmSfpamIH7TUMzt4%2F8NaHBPyofNSaPAY%2FMYiNtrkueMvjPoBWK4iLQGFWTZTSMl3ESlupjJadlzjXP5smMZXsgfb1GZWGZGGQUCshqv2OLoDvMlmFqjKrcjoalEzVI1xZL6uWs59KNMhLsBugpagFyzD%2FSxjvZnQwWIacWNSJJX2NGhZohhF2FKneu5NpG2u%2Bk1rh%2F9v9MzpofqiHPaZKhJOcb06xL3pKAFP6%2FWGFYKjmQFmv4ReyzLJYeWuhZ4TjW3%2BLqUjY7GmuLm64gBwbo5v%2BZfcH73YoyZ5GLPFsCkgbw0CXDtsCFoBYxcQTsu%2B4qzSLi6RvJFVzxAY8OKXu8S8xyiRK6lrVUvWCb7Rp8%2BQkyfOCQ0VLt2xunKDGnWEsYg%2FTBQMYzJwwVTWNOoa89nD37r9x9T1IzMjYFdmWCO8eP25CznTMDjCuXyqyL3YfjJrgSZtQqsdOX0m1o2%2BKFJQuStPPKyboopM%2BOvRLJFGxasEqsnad7HHwnHX9qtHRQR3M2Yihmplc62dnt3MLutjcoGOqUBO%2BRkMroPMEwJV6gHqADc3pehNdALJLyMknLkDxygxdoKe6mq2fjeeBbhlIDHtGfDVCt4QUyQYvMlnqmMFyIFc2EFBYrlFnmdD%2FoU47mC4ioBMNSWFy12bSsqBV3vTSa404w0hQG%2FO%2BDQt4QxvFp7tUpSwNFaXn0lUf0JZCIUE2mSKxNhMrBrRmMgJQZTAVJLc9yfMkP4N0Q%2BF%2Fd1eH%2F8DLApg0mH&X-Amz-Signature=0f6b9d518ffb2124b95ac858586cbad50e1a69d3df62b535ad5b1caaa3e4e350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4ALYAV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGUtJAR1a3I%2BFNhKJhd%2B%2B%2FfuGeSXUJd2rBiXMMYjgu%2BAIgOxeZQwv1yHG38FZHlLckwKIZU5snO%2BDaadpRoeFnVIwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq%2Basg8Ilaco1xv3CrcA79VIuKJA6WoFC16hX%2BSFoeGIU2n8pnvbO8MA%2BBmZYq%2BUT2OnwV3%2F6gAn3zDmCh9hM9r3bvbPOfMmdzzL2nVYz5Vbr5CbYXS%2Bjk%2FGdiUCCmSfpamIH7TUMzt4%2F8NaHBPyofNSaPAY%2FMYiNtrkueMvjPoBWK4iLQGFWTZTSMl3ESlupjJadlzjXP5smMZXsgfb1GZWGZGGQUCshqv2OLoDvMlmFqjKrcjoalEzVI1xZL6uWs59KNMhLsBugpagFyzD%2FSxjvZnQwWIacWNSJJX2NGhZohhF2FKneu5NpG2u%2Bk1rh%2F9v9MzpofqiHPaZKhJOcb06xL3pKAFP6%2FWGFYKjmQFmv4ReyzLJYeWuhZ4TjW3%2BLqUjY7GmuLm64gBwbo5v%2BZfcH73YoyZ5GLPFsCkgbw0CXDtsCFoBYxcQTsu%2B4qzSLi6RvJFVzxAY8OKXu8S8xyiRK6lrVUvWCb7Rp8%2BQkyfOCQ0VLt2xunKDGnWEsYg%2FTBQMYzJwwVTWNOoa89nD37r9x9T1IzMjYFdmWCO8eP25CznTMDjCuXyqyL3YfjJrgSZtQqsdOX0m1o2%2BKFJQuStPPKyboopM%2BOvRLJFGxasEqsnad7HHwnHX9qtHRQR3M2Yihmplc62dnt3MLutjcoGOqUBO%2BRkMroPMEwJV6gHqADc3pehNdALJLyMknLkDxygxdoKe6mq2fjeeBbhlIDHtGfDVCt4QUyQYvMlnqmMFyIFc2EFBYrlFnmdD%2FoU47mC4ioBMNSWFy12bSsqBV3vTSa404w0hQG%2FO%2BDQt4QxvFp7tUpSwNFaXn0lUf0JZCIUE2mSKxNhMrBrRmMgJQZTAVJLc9yfMkP4N0Q%2BF%2Fd1eH%2F8DLApg0mH&X-Amz-Signature=0f11bbe566752e1cadbd19e8114e5b6aa740511f01a184a84c20985e662508f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
