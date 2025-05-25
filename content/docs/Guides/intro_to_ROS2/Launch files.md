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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPU55RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDW2%2FKHNLQbdBjfdzfYNx%2BKGky2HU%2BDiMsYF44AFmjgNwIgRZdvb%2FzJbw4ynbmGJCNc%2FG4StowBg%2B6Y9ebDnWBoSAwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKvGOklGqD760GSSMCrcA9VG3aUijZ%2FF80H4Y9FICSj8Cyr7P2sVsPkcOsSUM%2F3BYeoGRHQIa%2FPbXeqHFDyTJQnk2aP7aq0lId5GHZxVAAaqOA%2FXw%2BhnKSjU7wSKQgpWWZ1YtwhGM7%2FTF%2B6dg62KY1dNlpHVBW9dhoJIAHhccCcrslsSl1IWZdO5HAhINZcLOQOPi%2BZfJ4oH8ISEB04ck6ZPP%2FAGlaNIyU4%2FPrMm9wJh41D8tVNfH38KQhi1bPGVt7qbmGcfGgFEMKTeTPbBOnoSmCYm94kGwybnZej4jT59nvdtJ6ZbaPJZL4dkKDAT3kFaYCigqmb8EPPR1Hvyc5GoHTkUj0lNHia1Px5NfenBrPfP5CgmzoTe8MFTBJiQfVp9UZj34S0RKEokOHDrI2Kd8OSxIFaf14OrU7Ep2tt6EPS1q6IzdlgXtiW3VRnSBuJRrC54LUSzXE8RP1LCTu14OvxuBFafQaFEKmvJji79hnsQmakWK%2F%2FzNSesZgURFXHfvSF6Rwk8pedA64kaKoBPRk9vlJy37TAzNj08A20s6j0k1iQyFtPAgeOZzKvE0HlTPZNUmKnKjxk6gTMd1qnEeJn5IhpLZDur%2F%2Fj3je8DkwOnzXwvvTs85FzkC5BCX0V%2Fi9IMJnkE8FlWMMKEzMEGOqUBKYpY9bxCFqfbF6fceVPCExDAAnj5exJ%2B48V4d6i3Ew%2BCwiil4plHt1FNpn1gl7LzF0EBOSAAlmzx5peM322lRVn9FvA5as%2Blpxd%2B7MJw9%2FWA%2BN7WyPz%2BJhgSmwiz9ki3CndkpRgsGbEQsyoULPNlnhYbSK%2B%2FyoIh1VWQl5tOHfhQYHJ7Bq6frx5PQOCd5JNRRNzQCoza%2FJltatBO9ziQtgoTpBp1&X-Amz-Signature=91b28471682d8635ae3d7c48817cc78746fe24bee313b0bc6f20594c362e7cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPU55RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDW2%2FKHNLQbdBjfdzfYNx%2BKGky2HU%2BDiMsYF44AFmjgNwIgRZdvb%2FzJbw4ynbmGJCNc%2FG4StowBg%2B6Y9ebDnWBoSAwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKvGOklGqD760GSSMCrcA9VG3aUijZ%2FF80H4Y9FICSj8Cyr7P2sVsPkcOsSUM%2F3BYeoGRHQIa%2FPbXeqHFDyTJQnk2aP7aq0lId5GHZxVAAaqOA%2FXw%2BhnKSjU7wSKQgpWWZ1YtwhGM7%2FTF%2B6dg62KY1dNlpHVBW9dhoJIAHhccCcrslsSl1IWZdO5HAhINZcLOQOPi%2BZfJ4oH8ISEB04ck6ZPP%2FAGlaNIyU4%2FPrMm9wJh41D8tVNfH38KQhi1bPGVt7qbmGcfGgFEMKTeTPbBOnoSmCYm94kGwybnZej4jT59nvdtJ6ZbaPJZL4dkKDAT3kFaYCigqmb8EPPR1Hvyc5GoHTkUj0lNHia1Px5NfenBrPfP5CgmzoTe8MFTBJiQfVp9UZj34S0RKEokOHDrI2Kd8OSxIFaf14OrU7Ep2tt6EPS1q6IzdlgXtiW3VRnSBuJRrC54LUSzXE8RP1LCTu14OvxuBFafQaFEKmvJji79hnsQmakWK%2F%2FzNSesZgURFXHfvSF6Rwk8pedA64kaKoBPRk9vlJy37TAzNj08A20s6j0k1iQyFtPAgeOZzKvE0HlTPZNUmKnKjxk6gTMd1qnEeJn5IhpLZDur%2F%2Fj3je8DkwOnzXwvvTs85FzkC5BCX0V%2Fi9IMJnkE8FlWMMKEzMEGOqUBKYpY9bxCFqfbF6fceVPCExDAAnj5exJ%2B48V4d6i3Ew%2BCwiil4plHt1FNpn1gl7LzF0EBOSAAlmzx5peM322lRVn9FvA5as%2Blpxd%2B7MJw9%2FWA%2BN7WyPz%2BJhgSmwiz9ki3CndkpRgsGbEQsyoULPNlnhYbSK%2B%2FyoIh1VWQl5tOHfhQYHJ7Bq6frx5PQOCd5JNRRNzQCoza%2FJltatBO9ziQtgoTpBp1&X-Amz-Signature=67cb47ff869e7c852be6710df4c2c9241bf301c6a5dddbdafdc24d1a4b02fb28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPU55RG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDW2%2FKHNLQbdBjfdzfYNx%2BKGky2HU%2BDiMsYF44AFmjgNwIgRZdvb%2FzJbw4ynbmGJCNc%2FG4StowBg%2B6Y9ebDnWBoSAwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKvGOklGqD760GSSMCrcA9VG3aUijZ%2FF80H4Y9FICSj8Cyr7P2sVsPkcOsSUM%2F3BYeoGRHQIa%2FPbXeqHFDyTJQnk2aP7aq0lId5GHZxVAAaqOA%2FXw%2BhnKSjU7wSKQgpWWZ1YtwhGM7%2FTF%2B6dg62KY1dNlpHVBW9dhoJIAHhccCcrslsSl1IWZdO5HAhINZcLOQOPi%2BZfJ4oH8ISEB04ck6ZPP%2FAGlaNIyU4%2FPrMm9wJh41D8tVNfH38KQhi1bPGVt7qbmGcfGgFEMKTeTPbBOnoSmCYm94kGwybnZej4jT59nvdtJ6ZbaPJZL4dkKDAT3kFaYCigqmb8EPPR1Hvyc5GoHTkUj0lNHia1Px5NfenBrPfP5CgmzoTe8MFTBJiQfVp9UZj34S0RKEokOHDrI2Kd8OSxIFaf14OrU7Ep2tt6EPS1q6IzdlgXtiW3VRnSBuJRrC54LUSzXE8RP1LCTu14OvxuBFafQaFEKmvJji79hnsQmakWK%2F%2FzNSesZgURFXHfvSF6Rwk8pedA64kaKoBPRk9vlJy37TAzNj08A20s6j0k1iQyFtPAgeOZzKvE0HlTPZNUmKnKjxk6gTMd1qnEeJn5IhpLZDur%2F%2Fj3je8DkwOnzXwvvTs85FzkC5BCX0V%2Fi9IMJnkE8FlWMMKEzMEGOqUBKYpY9bxCFqfbF6fceVPCExDAAnj5exJ%2B48V4d6i3Ew%2BCwiil4plHt1FNpn1gl7LzF0EBOSAAlmzx5peM322lRVn9FvA5as%2Blpxd%2B7MJw9%2FWA%2BN7WyPz%2BJhgSmwiz9ki3CndkpRgsGbEQsyoULPNlnhYbSK%2B%2FyoIh1VWQl5tOHfhQYHJ7Bq6frx5PQOCd5JNRRNzQCoza%2FJltatBO9ziQtgoTpBp1&X-Amz-Signature=23fbd6a1d38eb6fefa564437f009632678fd71578197035e405c004a7ba5c6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
