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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654WKT5TY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGq9IZd2zjlBtD2Xecvou%2FPdsolAkS%2BawlF1GDZh5jOGAiEArlLcC3xI83PeYz63XI9ikHlo7dkcsxX0JYZJtJdddgMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKAym3EY4SmDqezBHyrcA36B4wWDHNdbpNaiokhBegoZC44ixMIr%2B4d2scvfsPInTP9xAA%2B%2BOplTAxxDzj9zBV%2By63iIpwglDRh4Gzlsv%2Fpy9a%2FhfcQ4RCT%2Bm9Q04oL2jmIZwaWNrkc2x%2FebWXYsS1yuKaEG%2FOagqo461lzzrd%2BxLezEmoTODvWuEK9EdDKWPR%2Bzwvu9dbqg12%2BMGVpAY31zX9KgbwAW1kjxsqD7F%2BoTbSjtmtofFzTMHJCMpynOjNJM3MQ8BC1GyF97rbPs%2F2ImZcuVT6IbsXPh0E5ozTTqxL%2B2Mjs32MvxCy%2BFqmTxbJahQleBvOyuC2gu%2F1FpiT%2BpD6v03Q0CsFzUclmbjJf%2F2pEwARGYIT8WZ4MrPgghULV36QRbbn%2F%2FGCJYz0n0H0hO2BAmpj11fcwYMW2XO3Zh%2BPPOYXDppLEAvnn7f4hBODdxrPHtKcfafu7O8YBzDQIYYf7278m84Jdv5jXPMn40l0HtYLWC%2BT2BD7Ynb4cr1puuOZWkNmRXA3I8iFpJQ1pjACwsfxAqKG78FRTWQZ39lDS0bpyXhgDjfeOaqxlkA15gRuUNYhDbYavn%2BaJ2S5e2PB69dO6ACP72Jynit5MWXlns4JBuKdAv31nMmIFoxX8LUcEVk%2BZwQ%2B%2BSMK%2BG2sMGOqUB9SwnN8rg7ZdaFkl9ua1Vu4OLDF5AISQQDpEYmkRST3A2glGWiZ9LQ0mWpnv%2FVQRnNzQwGAzind1gQOxpROmZqw9SV9Wiqdr19yZUaPhJ%2BSEYWBEPSp8TsAsMmZZ5tMMcEes8BD3QspmpqWRaQnRl08tWlLqTOSZQfCDJFLqNJUe27V1nkRHu6fU47Ms3W%2B%2FGQ0sO6TjgDEJYmld9aY9zh3IgPDgc&X-Amz-Signature=9edc0b469e8aa89e3b32f081b9e0655e96068c68bb6965f1863a23b5b0c628e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654WKT5TY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGq9IZd2zjlBtD2Xecvou%2FPdsolAkS%2BawlF1GDZh5jOGAiEArlLcC3xI83PeYz63XI9ikHlo7dkcsxX0JYZJtJdddgMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKAym3EY4SmDqezBHyrcA36B4wWDHNdbpNaiokhBegoZC44ixMIr%2B4d2scvfsPInTP9xAA%2B%2BOplTAxxDzj9zBV%2By63iIpwglDRh4Gzlsv%2Fpy9a%2FhfcQ4RCT%2Bm9Q04oL2jmIZwaWNrkc2x%2FebWXYsS1yuKaEG%2FOagqo461lzzrd%2BxLezEmoTODvWuEK9EdDKWPR%2Bzwvu9dbqg12%2BMGVpAY31zX9KgbwAW1kjxsqD7F%2BoTbSjtmtofFzTMHJCMpynOjNJM3MQ8BC1GyF97rbPs%2F2ImZcuVT6IbsXPh0E5ozTTqxL%2B2Mjs32MvxCy%2BFqmTxbJahQleBvOyuC2gu%2F1FpiT%2BpD6v03Q0CsFzUclmbjJf%2F2pEwARGYIT8WZ4MrPgghULV36QRbbn%2F%2FGCJYz0n0H0hO2BAmpj11fcwYMW2XO3Zh%2BPPOYXDppLEAvnn7f4hBODdxrPHtKcfafu7O8YBzDQIYYf7278m84Jdv5jXPMn40l0HtYLWC%2BT2BD7Ynb4cr1puuOZWkNmRXA3I8iFpJQ1pjACwsfxAqKG78FRTWQZ39lDS0bpyXhgDjfeOaqxlkA15gRuUNYhDbYavn%2BaJ2S5e2PB69dO6ACP72Jynit5MWXlns4JBuKdAv31nMmIFoxX8LUcEVk%2BZwQ%2B%2BSMK%2BG2sMGOqUB9SwnN8rg7ZdaFkl9ua1Vu4OLDF5AISQQDpEYmkRST3A2glGWiZ9LQ0mWpnv%2FVQRnNzQwGAzind1gQOxpROmZqw9SV9Wiqdr19yZUaPhJ%2BSEYWBEPSp8TsAsMmZZ5tMMcEes8BD3QspmpqWRaQnRl08tWlLqTOSZQfCDJFLqNJUe27V1nkRHu6fU47Ms3W%2B%2FGQ0sO6TjgDEJYmld9aY9zh3IgPDgc&X-Amz-Signature=883add312a6ddfd55ff6f152c186bf52679e7dd6ea48ea060ee7fe3136ac728a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654WKT5TY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGq9IZd2zjlBtD2Xecvou%2FPdsolAkS%2BawlF1GDZh5jOGAiEArlLcC3xI83PeYz63XI9ikHlo7dkcsxX0JYZJtJdddgMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDKAym3EY4SmDqezBHyrcA36B4wWDHNdbpNaiokhBegoZC44ixMIr%2B4d2scvfsPInTP9xAA%2B%2BOplTAxxDzj9zBV%2By63iIpwglDRh4Gzlsv%2Fpy9a%2FhfcQ4RCT%2Bm9Q04oL2jmIZwaWNrkc2x%2FebWXYsS1yuKaEG%2FOagqo461lzzrd%2BxLezEmoTODvWuEK9EdDKWPR%2Bzwvu9dbqg12%2BMGVpAY31zX9KgbwAW1kjxsqD7F%2BoTbSjtmtofFzTMHJCMpynOjNJM3MQ8BC1GyF97rbPs%2F2ImZcuVT6IbsXPh0E5ozTTqxL%2B2Mjs32MvxCy%2BFqmTxbJahQleBvOyuC2gu%2F1FpiT%2BpD6v03Q0CsFzUclmbjJf%2F2pEwARGYIT8WZ4MrPgghULV36QRbbn%2F%2FGCJYz0n0H0hO2BAmpj11fcwYMW2XO3Zh%2BPPOYXDppLEAvnn7f4hBODdxrPHtKcfafu7O8YBzDQIYYf7278m84Jdv5jXPMn40l0HtYLWC%2BT2BD7Ynb4cr1puuOZWkNmRXA3I8iFpJQ1pjACwsfxAqKG78FRTWQZ39lDS0bpyXhgDjfeOaqxlkA15gRuUNYhDbYavn%2BaJ2S5e2PB69dO6ACP72Jynit5MWXlns4JBuKdAv31nMmIFoxX8LUcEVk%2BZwQ%2B%2BSMK%2BG2sMGOqUB9SwnN8rg7ZdaFkl9ua1Vu4OLDF5AISQQDpEYmkRST3A2glGWiZ9LQ0mWpnv%2FVQRnNzQwGAzind1gQOxpROmZqw9SV9Wiqdr19yZUaPhJ%2BSEYWBEPSp8TsAsMmZZ5tMMcEes8BD3QspmpqWRaQnRl08tWlLqTOSZQfCDJFLqNJUe27V1nkRHu6fU47Ms3W%2B%2FGQ0sO6TjgDEJYmld9aY9zh3IgPDgc&X-Amz-Signature=714551646cc0267edf90ebf5fc11dc1344c8486974eb139ff7345e6f77c558f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
