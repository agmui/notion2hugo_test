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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNUNYMW%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXCn%2FqL6MNuyxw9zVSndDpclJ%2FwbZ9uYp6QL5AL6uQgIgarCev9ibT5CmRB1XdH%2Br1N7uveBXD7DlPgxKakJPKuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfGO6WQwjYQqR6nMCrcA%2B95plZz3U9JxoC3PvwyxnaVEhvbh7OuwAPOG3wBGdmXlBd5wUsr%2FDxqNmX2%2F%2F1258w48ju2dE5mqnXcIb1q85EJwokOJXuwLt1A52RijMHfGhwX8xSWtQa6OCmkFz6YZQ3SeFNnAZvgJup%2BZ3DUEUVmCWmCh5Gq%2BzPNqtJ%2Bz24WWnlZA84CaATpdlf2ezbpwyjZL17dBdXDelp%2Bt%2FZ6XbDGaSwFAQ2FtFS5RIxA59JXsFmcPV%2BymDUYH74KzNw2Xyg7n2AE5bCIPAZr7fIHWEYJxVTVfesZ267TOmSBT%2BMQoJdvQDo2PPKp5amPOVt1vWQLGb%2FVIKKlFAMzF7puFD0aAFbEtgAWW7quwHSFs%2FtIGcKS0pyM%2FJ0mphQi83ZoXF%2FBgvApsyduHSJQn%2FkuOCVXRI2n3ZOW%2BqoZ4d9OxJq4X%2B5EvPMKS8X%2FgAXu4mGCasDmr1Nq0%2FR5OPOmdfneTfUvophrcFxW1Czx70nYmalpfh9nY%2BspyQYaThwfTOvA3Bf%2B3PNbjIccXknNIeYyH9vnT5CUIN9Q7hBtGolgUBfYiCveckQgSfsKgQcFRoUYTMeUyV0%2BNc5jEIv08EQD6KWER3dLD%2BSK2Qyd4KJtx6f4nnzw03N38xl1Vu1WMLzdt70GOqUBsS5zWEWZq8LnGf9cJUgoVPkV%2FPRpr%2Bw%2B7ZzDurygAVNAA3q1YP0kwzDN3z2QnE2hlOxzg7zPWsH4GTFdnvaKiOL5atFQVQhvtLdxQE%2F8cCKAco9Bwt3D%2F78X5zdZYW7GTbsHhRc5TD97Q90YnXIEF%2Fsy2SiY0lKp07E5NlueHSbCwDlIC6X1nY3i7evisdz3S7WsvyVoq7IFP9ZoJVK2wEqKGORo&X-Amz-Signature=1b478a44d69214c601b1d2eeb4c23c1406b54b296bd16167087c9a3a43157997&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNUNYMW%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXCn%2FqL6MNuyxw9zVSndDpclJ%2FwbZ9uYp6QL5AL6uQgIgarCev9ibT5CmRB1XdH%2Br1N7uveBXD7DlPgxKakJPKuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfGO6WQwjYQqR6nMCrcA%2B95plZz3U9JxoC3PvwyxnaVEhvbh7OuwAPOG3wBGdmXlBd5wUsr%2FDxqNmX2%2F%2F1258w48ju2dE5mqnXcIb1q85EJwokOJXuwLt1A52RijMHfGhwX8xSWtQa6OCmkFz6YZQ3SeFNnAZvgJup%2BZ3DUEUVmCWmCh5Gq%2BzPNqtJ%2Bz24WWnlZA84CaATpdlf2ezbpwyjZL17dBdXDelp%2Bt%2FZ6XbDGaSwFAQ2FtFS5RIxA59JXsFmcPV%2BymDUYH74KzNw2Xyg7n2AE5bCIPAZr7fIHWEYJxVTVfesZ267TOmSBT%2BMQoJdvQDo2PPKp5amPOVt1vWQLGb%2FVIKKlFAMzF7puFD0aAFbEtgAWW7quwHSFs%2FtIGcKS0pyM%2FJ0mphQi83ZoXF%2FBgvApsyduHSJQn%2FkuOCVXRI2n3ZOW%2BqoZ4d9OxJq4X%2B5EvPMKS8X%2FgAXu4mGCasDmr1Nq0%2FR5OPOmdfneTfUvophrcFxW1Czx70nYmalpfh9nY%2BspyQYaThwfTOvA3Bf%2B3PNbjIccXknNIeYyH9vnT5CUIN9Q7hBtGolgUBfYiCveckQgSfsKgQcFRoUYTMeUyV0%2BNc5jEIv08EQD6KWER3dLD%2BSK2Qyd4KJtx6f4nnzw03N38xl1Vu1WMLzdt70GOqUBsS5zWEWZq8LnGf9cJUgoVPkV%2FPRpr%2Bw%2B7ZzDurygAVNAA3q1YP0kwzDN3z2QnE2hlOxzg7zPWsH4GTFdnvaKiOL5atFQVQhvtLdxQE%2F8cCKAco9Bwt3D%2F78X5zdZYW7GTbsHhRc5TD97Q90YnXIEF%2Fsy2SiY0lKp07E5NlueHSbCwDlIC6X1nY3i7evisdz3S7WsvyVoq7IFP9ZoJVK2wEqKGORo&X-Amz-Signature=4566fa34971deafba9c40738ae5f0a30ce38d122c9ca87acfc8f88181fd12602&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNUNYMW%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXCn%2FqL6MNuyxw9zVSndDpclJ%2FwbZ9uYp6QL5AL6uQgIgarCev9ibT5CmRB1XdH%2Br1N7uveBXD7DlPgxKakJPKuUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfGO6WQwjYQqR6nMCrcA%2B95plZz3U9JxoC3PvwyxnaVEhvbh7OuwAPOG3wBGdmXlBd5wUsr%2FDxqNmX2%2F%2F1258w48ju2dE5mqnXcIb1q85EJwokOJXuwLt1A52RijMHfGhwX8xSWtQa6OCmkFz6YZQ3SeFNnAZvgJup%2BZ3DUEUVmCWmCh5Gq%2BzPNqtJ%2Bz24WWnlZA84CaATpdlf2ezbpwyjZL17dBdXDelp%2Bt%2FZ6XbDGaSwFAQ2FtFS5RIxA59JXsFmcPV%2BymDUYH74KzNw2Xyg7n2AE5bCIPAZr7fIHWEYJxVTVfesZ267TOmSBT%2BMQoJdvQDo2PPKp5amPOVt1vWQLGb%2FVIKKlFAMzF7puFD0aAFbEtgAWW7quwHSFs%2FtIGcKS0pyM%2FJ0mphQi83ZoXF%2FBgvApsyduHSJQn%2FkuOCVXRI2n3ZOW%2BqoZ4d9OxJq4X%2B5EvPMKS8X%2FgAXu4mGCasDmr1Nq0%2FR5OPOmdfneTfUvophrcFxW1Czx70nYmalpfh9nY%2BspyQYaThwfTOvA3Bf%2B3PNbjIccXknNIeYyH9vnT5CUIN9Q7hBtGolgUBfYiCveckQgSfsKgQcFRoUYTMeUyV0%2BNc5jEIv08EQD6KWER3dLD%2BSK2Qyd4KJtx6f4nnzw03N38xl1Vu1WMLzdt70GOqUBsS5zWEWZq8LnGf9cJUgoVPkV%2FPRpr%2Bw%2B7ZzDurygAVNAA3q1YP0kwzDN3z2QnE2hlOxzg7zPWsH4GTFdnvaKiOL5atFQVQhvtLdxQE%2F8cCKAco9Bwt3D%2F78X5zdZYW7GTbsHhRc5TD97Q90YnXIEF%2Fsy2SiY0lKp07E5NlueHSbCwDlIC6X1nY3i7evisdz3S7WsvyVoq7IFP9ZoJVK2wEqKGORo&X-Amz-Signature=3ef30bb270664f8b950333fd81bc3bc055e51bec75bf77fe15a61526d8cfb52b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
