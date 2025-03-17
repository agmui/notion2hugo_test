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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2PLVN2N%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbDJh2qJNm7pN0y27xfy%2BT8mEgaodMaVM9D2F4Wxi4SAIgNJVd2fsfK2uqfHge1pDCQgL1cPSlq%2FEG1UYxTsv0EIAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDG6OsLUlzb9YoBgFKCrcA6sxV3oO6X41zZD1dQA%2F02tOtB0JWBJYPuWMCn%2FewC1Pk3hhAcG%2Bpdg2UTG%2BLfb0B%2F4LXA%2FY4HSisfZ97fbrzuXY0jLaUiuhI8e5uvQljFGsKC%2Bh7dHxNqcNRZNFVbxJUwWblZVV8hXlaaPPacisObmwla08Xq%2F6shyhsiwmCz2YWTZbPVqfxPxWb0MVRxix9KJZcYNMrcmfwHTEock3VoiSWDkn99H3vzgj8oKc3Kg6vj4Ew7t2gpqxEJxBX9knZJCeL0aFQO026WFgV%2BhXJqblLzoXkuB271hCQwHE%2BN73zsQUzOgTG2Or%2BICC1n7jZVIHtcYhKlDXA%2BgzrfcvRx7Cmg5RYrEgYMcCkig1Cg6TC7GWAILaFuLv%2B4mFlr9zHAufwGPmqnSzPXz0uGMgaHeuDKj3fWkAkz2TpglhDa6hXK3Ks5neDbLqY0J0UB51OI3pcHTQRYatSsfHtwNWHEql8%2F91mu7fGNnhYUWdRX5AP3tZfYki4rkh%2FziOnDAOaDaR7IAayg%2B6HNKbbgrNxU%2F%2BUFZx%2B%2B0b2y1KNnsCj0PrJv%2FDzWh%2Bn1ZoRFFtbrASQipA%2FHv%2BT0qiTuIHojd%2FbA3h0YBx%2Blg7qRc6f7z3elzYfYGC6GYm9VCfAnVpMNDO374GOqUBpY9I1V81YQ545jqoOa5Jm19r3bb2pdC6z2i15H8ZplbhyCBNLjB7fgJmK6x4idlocGTDDCruDfEYZ3WkkSADEbGIXSAVoP5DPN9z4cwEVtm4WmHwQLjYGxwT7mhbi%2BlyYv9jtD1%2F%2B6xBLVYGrqpXXsHmV1xzUAOumDf8TduLwb6KE0%2BDe6AHY1ApvnBlVHC1TyolU4fUznEk6jQJOE84m1fbMYPF&X-Amz-Signature=06e7f5f103ac71b568585fa047c4641747833485457d1aa2706fc28ff51063d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2PLVN2N%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbDJh2qJNm7pN0y27xfy%2BT8mEgaodMaVM9D2F4Wxi4SAIgNJVd2fsfK2uqfHge1pDCQgL1cPSlq%2FEG1UYxTsv0EIAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDG6OsLUlzb9YoBgFKCrcA6sxV3oO6X41zZD1dQA%2F02tOtB0JWBJYPuWMCn%2FewC1Pk3hhAcG%2Bpdg2UTG%2BLfb0B%2F4LXA%2FY4HSisfZ97fbrzuXY0jLaUiuhI8e5uvQljFGsKC%2Bh7dHxNqcNRZNFVbxJUwWblZVV8hXlaaPPacisObmwla08Xq%2F6shyhsiwmCz2YWTZbPVqfxPxWb0MVRxix9KJZcYNMrcmfwHTEock3VoiSWDkn99H3vzgj8oKc3Kg6vj4Ew7t2gpqxEJxBX9knZJCeL0aFQO026WFgV%2BhXJqblLzoXkuB271hCQwHE%2BN73zsQUzOgTG2Or%2BICC1n7jZVIHtcYhKlDXA%2BgzrfcvRx7Cmg5RYrEgYMcCkig1Cg6TC7GWAILaFuLv%2B4mFlr9zHAufwGPmqnSzPXz0uGMgaHeuDKj3fWkAkz2TpglhDa6hXK3Ks5neDbLqY0J0UB51OI3pcHTQRYatSsfHtwNWHEql8%2F91mu7fGNnhYUWdRX5AP3tZfYki4rkh%2FziOnDAOaDaR7IAayg%2B6HNKbbgrNxU%2F%2BUFZx%2B%2B0b2y1KNnsCj0PrJv%2FDzWh%2Bn1ZoRFFtbrASQipA%2FHv%2BT0qiTuIHojd%2FbA3h0YBx%2Blg7qRc6f7z3elzYfYGC6GYm9VCfAnVpMNDO374GOqUBpY9I1V81YQ545jqoOa5Jm19r3bb2pdC6z2i15H8ZplbhyCBNLjB7fgJmK6x4idlocGTDDCruDfEYZ3WkkSADEbGIXSAVoP5DPN9z4cwEVtm4WmHwQLjYGxwT7mhbi%2BlyYv9jtD1%2F%2B6xBLVYGrqpXXsHmV1xzUAOumDf8TduLwb6KE0%2BDe6AHY1ApvnBlVHC1TyolU4fUznEk6jQJOE84m1fbMYPF&X-Amz-Signature=3dd8c0728828db11c72ebdcffd150507ffbc85d0c7fc82ba58035e2dd5ea560e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2PLVN2N%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbDJh2qJNm7pN0y27xfy%2BT8mEgaodMaVM9D2F4Wxi4SAIgNJVd2fsfK2uqfHge1pDCQgL1cPSlq%2FEG1UYxTsv0EIAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDG6OsLUlzb9YoBgFKCrcA6sxV3oO6X41zZD1dQA%2F02tOtB0JWBJYPuWMCn%2FewC1Pk3hhAcG%2Bpdg2UTG%2BLfb0B%2F4LXA%2FY4HSisfZ97fbrzuXY0jLaUiuhI8e5uvQljFGsKC%2Bh7dHxNqcNRZNFVbxJUwWblZVV8hXlaaPPacisObmwla08Xq%2F6shyhsiwmCz2YWTZbPVqfxPxWb0MVRxix9KJZcYNMrcmfwHTEock3VoiSWDkn99H3vzgj8oKc3Kg6vj4Ew7t2gpqxEJxBX9knZJCeL0aFQO026WFgV%2BhXJqblLzoXkuB271hCQwHE%2BN73zsQUzOgTG2Or%2BICC1n7jZVIHtcYhKlDXA%2BgzrfcvRx7Cmg5RYrEgYMcCkig1Cg6TC7GWAILaFuLv%2B4mFlr9zHAufwGPmqnSzPXz0uGMgaHeuDKj3fWkAkz2TpglhDa6hXK3Ks5neDbLqY0J0UB51OI3pcHTQRYatSsfHtwNWHEql8%2F91mu7fGNnhYUWdRX5AP3tZfYki4rkh%2FziOnDAOaDaR7IAayg%2B6HNKbbgrNxU%2F%2BUFZx%2B%2B0b2y1KNnsCj0PrJv%2FDzWh%2Bn1ZoRFFtbrASQipA%2FHv%2BT0qiTuIHojd%2FbA3h0YBx%2Blg7qRc6f7z3elzYfYGC6GYm9VCfAnVpMNDO374GOqUBpY9I1V81YQ545jqoOa5Jm19r3bb2pdC6z2i15H8ZplbhyCBNLjB7fgJmK6x4idlocGTDDCruDfEYZ3WkkSADEbGIXSAVoP5DPN9z4cwEVtm4WmHwQLjYGxwT7mhbi%2BlyYv9jtD1%2F%2B6xBLVYGrqpXXsHmV1xzUAOumDf8TduLwb6KE0%2BDe6AHY1ApvnBlVHC1TyolU4fUznEk6jQJOE84m1fbMYPF&X-Amz-Signature=5d81de3053704ba881786282d665c9360c8cd193dcfe19387fb866164c948449&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
