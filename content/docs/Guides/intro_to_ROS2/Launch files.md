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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HV6XBC6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDars%2FqU2uz7Ep%2FnolhPYwGtQ2EVCov%2BIM8jdR2aShtdgIgRjoC%2FITT9GhFphlLFKSLC%2FL7pzXTBlYYx%2BfiMxRDxjkq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDCLniG3OjR5baNDGZSrcA7gsO4hR5SZ5%2Fln3icegU1XTTniKcEbDaxY5yX7wrRR%2FArfgrM%2B3TN7mJu9DLnK25vdxoSJXgLTC58bSVKhfdNPaotWnUhCd5VmpvSXCOxvjw2UQCVr8CVNd%2B4JPOj03oPFmlNhxpyaHO64fYU5hVbX8wPADAgiF07Sy36gIfLQAILujh5XSaWfAdeJckmhEu9fOXualQsVx9wL%2F0DFTGvabAHCCvihF%2BZWaZD6eNDC47HeCOb6z4wQBF6hpHPTEYXGGC3CEbSolSaBaKqcSuNoXEvmSfEcQwzVFECLs8lLvn3bxOY%2FYuRCYytnB%2FUphHbxJnWblMk2hIWHQ80mCFEn%2BofmXBlneUI%2Fx9mqO%2Bp%2FnBmxhuSpAmIB8JGtC6uLTAJ7G0XrF1DvxHKEZbzuNDTYTk5uUO4aNi1Wo%2B2flQpKdtpgpyInCpURy43tkk8Z%2Fq2VrwXy6wALDM38%2BzZP4U449RPIodSZVManJrMyS64yfQ1DKnmaIdUBw9rtJNDjki5TKtiyOZPmH7pgUsXoGbkPWkwwLSBQ0nv3adyaqwKSdm3RnNkP%2BfOgUui1WaU448d0gNTPPYxuZHnU0OmJG4buiShoWoOog0amFzPVQeqcLxX%2Bdh7WPIa33giNzMJuHt70GOqUBpTAbt1q0ADFUmDk4%2F%2BDBss7S4xhtsEAHFebJZMRagK97Rub4E6YXKV5kdP1ym8rvEFHZDoxc90bLi8sLsy2GWVAoiCM8bqN0BjEHDXc511chhdvyqSVonOHK%2FupwzCJR2PGWNfa3d9VZFvdCcNEphQh7Y2vaKG8qx2U%2Bg6BOna5sfskCU1jWFWCtYO79VuQXK2muAMcCbT2Nj6Q7YDD5OqNDx%2FDd&X-Amz-Signature=e465545c64e79f6b24bd27a1768790fbdb2f61afb0ac91e9c18576535de92a52&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HV6XBC6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDars%2FqU2uz7Ep%2FnolhPYwGtQ2EVCov%2BIM8jdR2aShtdgIgRjoC%2FITT9GhFphlLFKSLC%2FL7pzXTBlYYx%2BfiMxRDxjkq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDCLniG3OjR5baNDGZSrcA7gsO4hR5SZ5%2Fln3icegU1XTTniKcEbDaxY5yX7wrRR%2FArfgrM%2B3TN7mJu9DLnK25vdxoSJXgLTC58bSVKhfdNPaotWnUhCd5VmpvSXCOxvjw2UQCVr8CVNd%2B4JPOj03oPFmlNhxpyaHO64fYU5hVbX8wPADAgiF07Sy36gIfLQAILujh5XSaWfAdeJckmhEu9fOXualQsVx9wL%2F0DFTGvabAHCCvihF%2BZWaZD6eNDC47HeCOb6z4wQBF6hpHPTEYXGGC3CEbSolSaBaKqcSuNoXEvmSfEcQwzVFECLs8lLvn3bxOY%2FYuRCYytnB%2FUphHbxJnWblMk2hIWHQ80mCFEn%2BofmXBlneUI%2Fx9mqO%2Bp%2FnBmxhuSpAmIB8JGtC6uLTAJ7G0XrF1DvxHKEZbzuNDTYTk5uUO4aNi1Wo%2B2flQpKdtpgpyInCpURy43tkk8Z%2Fq2VrwXy6wALDM38%2BzZP4U449RPIodSZVManJrMyS64yfQ1DKnmaIdUBw9rtJNDjki5TKtiyOZPmH7pgUsXoGbkPWkwwLSBQ0nv3adyaqwKSdm3RnNkP%2BfOgUui1WaU448d0gNTPPYxuZHnU0OmJG4buiShoWoOog0amFzPVQeqcLxX%2Bdh7WPIa33giNzMJuHt70GOqUBpTAbt1q0ADFUmDk4%2F%2BDBss7S4xhtsEAHFebJZMRagK97Rub4E6YXKV5kdP1ym8rvEFHZDoxc90bLi8sLsy2GWVAoiCM8bqN0BjEHDXc511chhdvyqSVonOHK%2FupwzCJR2PGWNfa3d9VZFvdCcNEphQh7Y2vaKG8qx2U%2Bg6BOna5sfskCU1jWFWCtYO79VuQXK2muAMcCbT2Nj6Q7YDD5OqNDx%2FDd&X-Amz-Signature=93900f187ff34988c30b428f46794bf60a40397ef0c15258ecfa0a759ab319ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HV6XBC6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDars%2FqU2uz7Ep%2FnolhPYwGtQ2EVCov%2BIM8jdR2aShtdgIgRjoC%2FITT9GhFphlLFKSLC%2FL7pzXTBlYYx%2BfiMxRDxjkq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDCLniG3OjR5baNDGZSrcA7gsO4hR5SZ5%2Fln3icegU1XTTniKcEbDaxY5yX7wrRR%2FArfgrM%2B3TN7mJu9DLnK25vdxoSJXgLTC58bSVKhfdNPaotWnUhCd5VmpvSXCOxvjw2UQCVr8CVNd%2B4JPOj03oPFmlNhxpyaHO64fYU5hVbX8wPADAgiF07Sy36gIfLQAILujh5XSaWfAdeJckmhEu9fOXualQsVx9wL%2F0DFTGvabAHCCvihF%2BZWaZD6eNDC47HeCOb6z4wQBF6hpHPTEYXGGC3CEbSolSaBaKqcSuNoXEvmSfEcQwzVFECLs8lLvn3bxOY%2FYuRCYytnB%2FUphHbxJnWblMk2hIWHQ80mCFEn%2BofmXBlneUI%2Fx9mqO%2Bp%2FnBmxhuSpAmIB8JGtC6uLTAJ7G0XrF1DvxHKEZbzuNDTYTk5uUO4aNi1Wo%2B2flQpKdtpgpyInCpURy43tkk8Z%2Fq2VrwXy6wALDM38%2BzZP4U449RPIodSZVManJrMyS64yfQ1DKnmaIdUBw9rtJNDjki5TKtiyOZPmH7pgUsXoGbkPWkwwLSBQ0nv3adyaqwKSdm3RnNkP%2BfOgUui1WaU448d0gNTPPYxuZHnU0OmJG4buiShoWoOog0amFzPVQeqcLxX%2Bdh7WPIa33giNzMJuHt70GOqUBpTAbt1q0ADFUmDk4%2F%2BDBss7S4xhtsEAHFebJZMRagK97Rub4E6YXKV5kdP1ym8rvEFHZDoxc90bLi8sLsy2GWVAoiCM8bqN0BjEHDXc511chhdvyqSVonOHK%2FupwzCJR2PGWNfa3d9VZFvdCcNEphQh7Y2vaKG8qx2U%2Bg6BOna5sfskCU1jWFWCtYO79VuQXK2muAMcCbT2Nj6Q7YDD5OqNDx%2FDd&X-Amz-Signature=9ae325efd406138c69a5da083d5484b837205481d2554e1fcf52dfe43707adee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
