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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNATLQX4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGKNfvhOTgupBKS8weHiaF3Otej8x9d%2BKslIJ47o4O%2FDAiEA9s8Visdku7fAL4VpH6xH0AvNcga8TPmSOwk6cVCRz%2FQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBt5OMqS5wOI%2BH1I2yrcA5IqcPlfM3R6r3I6rSQit9xXB6%2FJtsiH28ssFTOTNwPbFwsD0qvWCkQIIe3sUtteLOWDFaufX0nR0XBR9utstNBeJuFxef%2FSKsv4%2FOb9BwAEbaNgxStwgMIihAv5lLkadtL6oNRfGkgl4SSEZew3Noyrx0G%2F79MEcO2yvBiSdCIcTTmQlr5WmF3ZcrsCoBxVXNsAgruElP5j%2FwTuMSUT6W%2Bpa17ZWkSiWk6UqsrvKF6M9HgfOYAkcwcVXWIsIwDppryNTeIIA73FcUz16iRIi%2F%2FqpiA5AF7yQlmj37SYGmyuDgz0mnXWXvw1EbsMLqtq%2FRPkpQ%2Ba6ywMGzkLYyvaOyG%2FPtREkDmsHstxem7N848N1k7Ox7q3114NHDiS18A0qQegX3mfEUrijsb6tJZCKB73YOzzg8u7L5qerN4ogC8NCnSMomaPKybS7dCgCcUi4P2Xb1xXuc0nGNw2EO5R07iN6bXuGMp0XhuCrJ%2FyfbnKXSu0gYmxmh3qg3fYkWzbkLMemnUIBXuW4hDm0jDUJij%2B586Pw7etuNECTpKljGJnbW9pM5ON9VbCmY2lSQIliZrTQn7Gq7jpgGMJpReDJjq4KALGp%2BTXfANPYlKcWrHGkcINnN50%2Fnrex2y7MIeEssMGOqUBdz2ARZuGGU0uaM0tFWoxDRq8BElFenm3tNwxY6Ft%2FcWfL7Lez6Vi6KZpsYty35bTsUZYFNpewJ0UzsTMdy2s2HBdtynnh564T74VxyfqogeEMgERZTNjoKz6IBVLpFWiJHr2qjaf%2FyugKmGa9u%2B1jiih9T5r9f%2FvhyoretO5cGvbfWVFHhVfheuP%2BMoQh%2F1c9fqDaKp3XPeJ%2BFM6MnjljeU8Uqnk&X-Amz-Signature=8216116b8751b99c706e02ff0594b1a30fc637f98bac059d4e4d8ac769d6eee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNATLQX4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGKNfvhOTgupBKS8weHiaF3Otej8x9d%2BKslIJ47o4O%2FDAiEA9s8Visdku7fAL4VpH6xH0AvNcga8TPmSOwk6cVCRz%2FQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBt5OMqS5wOI%2BH1I2yrcA5IqcPlfM3R6r3I6rSQit9xXB6%2FJtsiH28ssFTOTNwPbFwsD0qvWCkQIIe3sUtteLOWDFaufX0nR0XBR9utstNBeJuFxef%2FSKsv4%2FOb9BwAEbaNgxStwgMIihAv5lLkadtL6oNRfGkgl4SSEZew3Noyrx0G%2F79MEcO2yvBiSdCIcTTmQlr5WmF3ZcrsCoBxVXNsAgruElP5j%2FwTuMSUT6W%2Bpa17ZWkSiWk6UqsrvKF6M9HgfOYAkcwcVXWIsIwDppryNTeIIA73FcUz16iRIi%2F%2FqpiA5AF7yQlmj37SYGmyuDgz0mnXWXvw1EbsMLqtq%2FRPkpQ%2Ba6ywMGzkLYyvaOyG%2FPtREkDmsHstxem7N848N1k7Ox7q3114NHDiS18A0qQegX3mfEUrijsb6tJZCKB73YOzzg8u7L5qerN4ogC8NCnSMomaPKybS7dCgCcUi4P2Xb1xXuc0nGNw2EO5R07iN6bXuGMp0XhuCrJ%2FyfbnKXSu0gYmxmh3qg3fYkWzbkLMemnUIBXuW4hDm0jDUJij%2B586Pw7etuNECTpKljGJnbW9pM5ON9VbCmY2lSQIliZrTQn7Gq7jpgGMJpReDJjq4KALGp%2BTXfANPYlKcWrHGkcINnN50%2Fnrex2y7MIeEssMGOqUBdz2ARZuGGU0uaM0tFWoxDRq8BElFenm3tNwxY6Ft%2FcWfL7Lez6Vi6KZpsYty35bTsUZYFNpewJ0UzsTMdy2s2HBdtynnh564T74VxyfqogeEMgERZTNjoKz6IBVLpFWiJHr2qjaf%2FyugKmGa9u%2B1jiih9T5r9f%2FvhyoretO5cGvbfWVFHhVfheuP%2BMoQh%2F1c9fqDaKp3XPeJ%2BFM6MnjljeU8Uqnk&X-Amz-Signature=21b7461e698207a0eacc757a59c0a773661286abc6014162d7ee2adbc387668c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNATLQX4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGKNfvhOTgupBKS8weHiaF3Otej8x9d%2BKslIJ47o4O%2FDAiEA9s8Visdku7fAL4VpH6xH0AvNcga8TPmSOwk6cVCRz%2FQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBt5OMqS5wOI%2BH1I2yrcA5IqcPlfM3R6r3I6rSQit9xXB6%2FJtsiH28ssFTOTNwPbFwsD0qvWCkQIIe3sUtteLOWDFaufX0nR0XBR9utstNBeJuFxef%2FSKsv4%2FOb9BwAEbaNgxStwgMIihAv5lLkadtL6oNRfGkgl4SSEZew3Noyrx0G%2F79MEcO2yvBiSdCIcTTmQlr5WmF3ZcrsCoBxVXNsAgruElP5j%2FwTuMSUT6W%2Bpa17ZWkSiWk6UqsrvKF6M9HgfOYAkcwcVXWIsIwDppryNTeIIA73FcUz16iRIi%2F%2FqpiA5AF7yQlmj37SYGmyuDgz0mnXWXvw1EbsMLqtq%2FRPkpQ%2Ba6ywMGzkLYyvaOyG%2FPtREkDmsHstxem7N848N1k7Ox7q3114NHDiS18A0qQegX3mfEUrijsb6tJZCKB73YOzzg8u7L5qerN4ogC8NCnSMomaPKybS7dCgCcUi4P2Xb1xXuc0nGNw2EO5R07iN6bXuGMp0XhuCrJ%2FyfbnKXSu0gYmxmh3qg3fYkWzbkLMemnUIBXuW4hDm0jDUJij%2B586Pw7etuNECTpKljGJnbW9pM5ON9VbCmY2lSQIliZrTQn7Gq7jpgGMJpReDJjq4KALGp%2BTXfANPYlKcWrHGkcINnN50%2Fnrex2y7MIeEssMGOqUBdz2ARZuGGU0uaM0tFWoxDRq8BElFenm3tNwxY6Ft%2FcWfL7Lez6Vi6KZpsYty35bTsUZYFNpewJ0UzsTMdy2s2HBdtynnh564T74VxyfqogeEMgERZTNjoKz6IBVLpFWiJHr2qjaf%2FyugKmGa9u%2B1jiih9T5r9f%2FvhyoretO5cGvbfWVFHhVfheuP%2BMoQh%2F1c9fqDaKp3XPeJ%2BFM6MnjljeU8Uqnk&X-Amz-Signature=3c298c6e5fe8c028b4cd7e1bfcb8a8363a6267446f0eb1b81ab50507b01b632f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
