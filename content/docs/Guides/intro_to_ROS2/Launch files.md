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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI52GTPP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIEl9iSQcEMIKWBCdohLCmR8JYF6uUykHoaOpLpWWjQ0HAiEA1VHg3%2FRb%2FcWG0lEOh2y%2Fuhi5TWRLbJaY4Pvh50xK%2FZkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOvxf8X%2F9flYgO5tiCrcA9v6m9WF7DcdRYv%2F32QTIC7XZIuFRNTavLaV0zLEFN2dZ01Va6GZQHcCKACBPtDntiuVBR1tebpqs3ahNkyb%2FRQmGsxcTE%2BlPPv3vQsRAAB6rbdvTHpXZpKKC%2BH5FiKiDcfqqjEx0RoUOA5sK5rjcZfNjleJSl5Hrh2eMd0c%2FrSS%2BEa0V04e9GIMPrjMpDA1WOedx5E6MwMb11cmoLfj0uugsH0TmvEDGVXnnNVrJvLTCwHYsO7QmH2KXtexg6T3fi9CAatSFiK9cpfO31MLPaKRSe3WxjEUOTBE8ivOJBsZBxROvNEtqt2fMmF9laDloibjXUhP%2FzUxQ0xQyVBcbzWPSyiF9HZtTY7kx1KmA1I%2B0Z%2FBo44dYepaIoh26O6%2B%2Fp7g%2BQIEpB9l9LC284WMViCp5ZQRhVVRjjKsit7o349TkrjwVXzKHj4cgRwvcOmQrMtv%2Bpaqs1668mvTOmMlI7GWqUt6O8iEfIkA25wKZewTo%2BWTNN4S5bRcitKMSOM2mnpDlwM0B8cWUnNh%2BoDPoaaXa3%2BLKT2NbYOuPYf5V3GGwrvHhBAtyr2tdeBj2KWzCOd7kdmTDDDNyPZD2Arw06wcn2a5nTP4W6wTOQo939VJSo8zbpfDOrUH%2FqsSMOiAxsEGOqUBwcFETIa99WmnKf6inHdDt3OqQ1Atd%2B6Re6pExV%2FLA0f8cqyoFY32SAVocGG88w4beqZRTc2nMA7DsRNC4l4pxlYA%2BsnCHEa%2BSAqDn6SFm0A0OIwpoelNUlzDqXvXDDXeIdYyW0OTvrm3fSDhA%2BuwsuYTjXz7InbN%2BNMJ1g4boSzK49dmhuAucc81lhc%2B4jfEO4JwKdrCuxu2WFZxSvNFO9Q68zLe&X-Amz-Signature=c88ef3912b6da7129c24cac5d3aa66f1eff82ee9053011082a23a786b3070aff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI52GTPP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIEl9iSQcEMIKWBCdohLCmR8JYF6uUykHoaOpLpWWjQ0HAiEA1VHg3%2FRb%2FcWG0lEOh2y%2Fuhi5TWRLbJaY4Pvh50xK%2FZkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOvxf8X%2F9flYgO5tiCrcA9v6m9WF7DcdRYv%2F32QTIC7XZIuFRNTavLaV0zLEFN2dZ01Va6GZQHcCKACBPtDntiuVBR1tebpqs3ahNkyb%2FRQmGsxcTE%2BlPPv3vQsRAAB6rbdvTHpXZpKKC%2BH5FiKiDcfqqjEx0RoUOA5sK5rjcZfNjleJSl5Hrh2eMd0c%2FrSS%2BEa0V04e9GIMPrjMpDA1WOedx5E6MwMb11cmoLfj0uugsH0TmvEDGVXnnNVrJvLTCwHYsO7QmH2KXtexg6T3fi9CAatSFiK9cpfO31MLPaKRSe3WxjEUOTBE8ivOJBsZBxROvNEtqt2fMmF9laDloibjXUhP%2FzUxQ0xQyVBcbzWPSyiF9HZtTY7kx1KmA1I%2B0Z%2FBo44dYepaIoh26O6%2B%2Fp7g%2BQIEpB9l9LC284WMViCp5ZQRhVVRjjKsit7o349TkrjwVXzKHj4cgRwvcOmQrMtv%2Bpaqs1668mvTOmMlI7GWqUt6O8iEfIkA25wKZewTo%2BWTNN4S5bRcitKMSOM2mnpDlwM0B8cWUnNh%2BoDPoaaXa3%2BLKT2NbYOuPYf5V3GGwrvHhBAtyr2tdeBj2KWzCOd7kdmTDDDNyPZD2Arw06wcn2a5nTP4W6wTOQo939VJSo8zbpfDOrUH%2FqsSMOiAxsEGOqUBwcFETIa99WmnKf6inHdDt3OqQ1Atd%2B6Re6pExV%2FLA0f8cqyoFY32SAVocGG88w4beqZRTc2nMA7DsRNC4l4pxlYA%2BsnCHEa%2BSAqDn6SFm0A0OIwpoelNUlzDqXvXDDXeIdYyW0OTvrm3fSDhA%2BuwsuYTjXz7InbN%2BNMJ1g4boSzK49dmhuAucc81lhc%2B4jfEO4JwKdrCuxu2WFZxSvNFO9Q68zLe&X-Amz-Signature=d68d5870404329c149af1cdd88403cf53683321c4b3d6a49fb8de1e738e27b18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI52GTPP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIEl9iSQcEMIKWBCdohLCmR8JYF6uUykHoaOpLpWWjQ0HAiEA1VHg3%2FRb%2FcWG0lEOh2y%2Fuhi5TWRLbJaY4Pvh50xK%2FZkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDOvxf8X%2F9flYgO5tiCrcA9v6m9WF7DcdRYv%2F32QTIC7XZIuFRNTavLaV0zLEFN2dZ01Va6GZQHcCKACBPtDntiuVBR1tebpqs3ahNkyb%2FRQmGsxcTE%2BlPPv3vQsRAAB6rbdvTHpXZpKKC%2BH5FiKiDcfqqjEx0RoUOA5sK5rjcZfNjleJSl5Hrh2eMd0c%2FrSS%2BEa0V04e9GIMPrjMpDA1WOedx5E6MwMb11cmoLfj0uugsH0TmvEDGVXnnNVrJvLTCwHYsO7QmH2KXtexg6T3fi9CAatSFiK9cpfO31MLPaKRSe3WxjEUOTBE8ivOJBsZBxROvNEtqt2fMmF9laDloibjXUhP%2FzUxQ0xQyVBcbzWPSyiF9HZtTY7kx1KmA1I%2B0Z%2FBo44dYepaIoh26O6%2B%2Fp7g%2BQIEpB9l9LC284WMViCp5ZQRhVVRjjKsit7o349TkrjwVXzKHj4cgRwvcOmQrMtv%2Bpaqs1668mvTOmMlI7GWqUt6O8iEfIkA25wKZewTo%2BWTNN4S5bRcitKMSOM2mnpDlwM0B8cWUnNh%2BoDPoaaXa3%2BLKT2NbYOuPYf5V3GGwrvHhBAtyr2tdeBj2KWzCOd7kdmTDDDNyPZD2Arw06wcn2a5nTP4W6wTOQo939VJSo8zbpfDOrUH%2FqsSMOiAxsEGOqUBwcFETIa99WmnKf6inHdDt3OqQ1Atd%2B6Re6pExV%2FLA0f8cqyoFY32SAVocGG88w4beqZRTc2nMA7DsRNC4l4pxlYA%2BsnCHEa%2BSAqDn6SFm0A0OIwpoelNUlzDqXvXDDXeIdYyW0OTvrm3fSDhA%2BuwsuYTjXz7InbN%2BNMJ1g4boSzK49dmhuAucc81lhc%2B4jfEO4JwKdrCuxu2WFZxSvNFO9Q68zLe&X-Amz-Signature=a8088f3d0a4a5fb4f5ee8d38d1a5c734f0756960aa536104638ca66f558fba42&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
