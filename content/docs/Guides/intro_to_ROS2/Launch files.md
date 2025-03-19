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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVLWFJF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDDYt40UnNcVfbhHN5MdqD8kqDxsuFQBxRpRb2vEP433AIgC61oqFZfAdWnS2gtzHaX5LofoKrKP6InRyZrYtfsIHcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnjKPDywr%2BftPwHaCrcA7PqZxkJlkluJ8WiEd0YvEOrF3cWKDNsoWjIHbxEOrcvM2lvT8sOCYaRC8JQv0wE7vILiVyPM2zOaMmJ3FypvyAUxc3hkuJqEvcANzP9zAG9ag7MDKJmGY%2BNWd3%2BOcCPMcI6aiq%2F6bXPjIki1gubrBgJ0TINY0q6GCAoAY5A9Udbkkgb%2FpxNEQxTeqppHSiU7P43z2%2Bn3bjPnT4y2cQlMjqAw2N5%2FFcxzsvivQP0Pp3jIGPhVH4gFnY7fp1hQSpBFo0GCa6CvlXxWqqco28aZF6MvQ08RkQDFVCZw0MWGUP37OZN5u624Z9GzBYaIdx4c6paMCQS3LzGaR9512ASNnM8SU1RlK1UYH8M8U0JQdIrMvqdnTbhBU3%2FKWUIpHOHSYNW2%2BO7x4sTsuv%2FivfQ8BZwfD8Yl8RX9%2BGDHiKFdbBCzX7RZkK8t5%2BLF0QB0xfncd7yUslS0lmWl23FNA8UF9G2HoKEr8e6wDPM7h9bzu6%2FybAG5%2BtNBXOrPrMIBsbWq7MSJByEZVKZk%2B5m5nYUJ0w38EumsqyfxU9H34T5fohsVndLLfvuUHB1V82CBw4wNADX0zlB2Cdlxfv1iKLpA6x3Pm9C4XUwE2jCFEPKXiRg%2BbavXOR%2B%2FhJxXaRsMP2d674GOqUBh1kEY%2BXXWb%2Fl%2BKYan5tcrKOmR22FyNRJ1ekAk4T4B%2BEn46xF6kOFInlgJmx6Nw0VKltbsL%2BC%2Bf7C0mWQCM6j3GiB0qaQzVLVwHO%2BhQnpWEjZ0UJUY9PhwtgqWSD4N%2FBvauuzEttxFsNrwLCdNRYkEXHZZZOmxJA%2BrWD4Fhg91MTiRsDg%2BcuEnRDER1kwuNw6uYFSU4qSn7JGsx4dDOE2RuXF%2F8BE&X-Amz-Signature=54d6ee7171d891a3125c75a4aa990f60d58555de81a1e44ac4ae2387755151dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVLWFJF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDDYt40UnNcVfbhHN5MdqD8kqDxsuFQBxRpRb2vEP433AIgC61oqFZfAdWnS2gtzHaX5LofoKrKP6InRyZrYtfsIHcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnjKPDywr%2BftPwHaCrcA7PqZxkJlkluJ8WiEd0YvEOrF3cWKDNsoWjIHbxEOrcvM2lvT8sOCYaRC8JQv0wE7vILiVyPM2zOaMmJ3FypvyAUxc3hkuJqEvcANzP9zAG9ag7MDKJmGY%2BNWd3%2BOcCPMcI6aiq%2F6bXPjIki1gubrBgJ0TINY0q6GCAoAY5A9Udbkkgb%2FpxNEQxTeqppHSiU7P43z2%2Bn3bjPnT4y2cQlMjqAw2N5%2FFcxzsvivQP0Pp3jIGPhVH4gFnY7fp1hQSpBFo0GCa6CvlXxWqqco28aZF6MvQ08RkQDFVCZw0MWGUP37OZN5u624Z9GzBYaIdx4c6paMCQS3LzGaR9512ASNnM8SU1RlK1UYH8M8U0JQdIrMvqdnTbhBU3%2FKWUIpHOHSYNW2%2BO7x4sTsuv%2FivfQ8BZwfD8Yl8RX9%2BGDHiKFdbBCzX7RZkK8t5%2BLF0QB0xfncd7yUslS0lmWl23FNA8UF9G2HoKEr8e6wDPM7h9bzu6%2FybAG5%2BtNBXOrPrMIBsbWq7MSJByEZVKZk%2B5m5nYUJ0w38EumsqyfxU9H34T5fohsVndLLfvuUHB1V82CBw4wNADX0zlB2Cdlxfv1iKLpA6x3Pm9C4XUwE2jCFEPKXiRg%2BbavXOR%2B%2FhJxXaRsMP2d674GOqUBh1kEY%2BXXWb%2Fl%2BKYan5tcrKOmR22FyNRJ1ekAk4T4B%2BEn46xF6kOFInlgJmx6Nw0VKltbsL%2BC%2Bf7C0mWQCM6j3GiB0qaQzVLVwHO%2BhQnpWEjZ0UJUY9PhwtgqWSD4N%2FBvauuzEttxFsNrwLCdNRYkEXHZZZOmxJA%2BrWD4Fhg91MTiRsDg%2BcuEnRDER1kwuNw6uYFSU4qSn7JGsx4dDOE2RuXF%2F8BE&X-Amz-Signature=4534cf14705159b6921033dcd7f234ef60d727d641ef31789dd0e379ce7f3d37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVLWFJF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDDYt40UnNcVfbhHN5MdqD8kqDxsuFQBxRpRb2vEP433AIgC61oqFZfAdWnS2gtzHaX5LofoKrKP6InRyZrYtfsIHcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnjKPDywr%2BftPwHaCrcA7PqZxkJlkluJ8WiEd0YvEOrF3cWKDNsoWjIHbxEOrcvM2lvT8sOCYaRC8JQv0wE7vILiVyPM2zOaMmJ3FypvyAUxc3hkuJqEvcANzP9zAG9ag7MDKJmGY%2BNWd3%2BOcCPMcI6aiq%2F6bXPjIki1gubrBgJ0TINY0q6GCAoAY5A9Udbkkgb%2FpxNEQxTeqppHSiU7P43z2%2Bn3bjPnT4y2cQlMjqAw2N5%2FFcxzsvivQP0Pp3jIGPhVH4gFnY7fp1hQSpBFo0GCa6CvlXxWqqco28aZF6MvQ08RkQDFVCZw0MWGUP37OZN5u624Z9GzBYaIdx4c6paMCQS3LzGaR9512ASNnM8SU1RlK1UYH8M8U0JQdIrMvqdnTbhBU3%2FKWUIpHOHSYNW2%2BO7x4sTsuv%2FivfQ8BZwfD8Yl8RX9%2BGDHiKFdbBCzX7RZkK8t5%2BLF0QB0xfncd7yUslS0lmWl23FNA8UF9G2HoKEr8e6wDPM7h9bzu6%2FybAG5%2BtNBXOrPrMIBsbWq7MSJByEZVKZk%2B5m5nYUJ0w38EumsqyfxU9H34T5fohsVndLLfvuUHB1V82CBw4wNADX0zlB2Cdlxfv1iKLpA6x3Pm9C4XUwE2jCFEPKXiRg%2BbavXOR%2B%2FhJxXaRsMP2d674GOqUBh1kEY%2BXXWb%2Fl%2BKYan5tcrKOmR22FyNRJ1ekAk4T4B%2BEn46xF6kOFInlgJmx6Nw0VKltbsL%2BC%2Bf7C0mWQCM6j3GiB0qaQzVLVwHO%2BhQnpWEjZ0UJUY9PhwtgqWSD4N%2FBvauuzEttxFsNrwLCdNRYkEXHZZZOmxJA%2BrWD4Fhg91MTiRsDg%2BcuEnRDER1kwuNw6uYFSU4qSn7JGsx4dDOE2RuXF%2F8BE&X-Amz-Signature=932a8c0481ababb60eb4f3725c57507b917d1247df13e3454a609918f09797af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
