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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEMRAME%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDO2WBfCaSOI4GNGZSz547ek5U7j1M31eVqjuwpOwARYQIgZVfs0lMuJDOUcYj7cwxHYCJUqRR4K1bMS%2Bdhl7uqqowq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCaqiO4FtHLquA6ibSrcA%2FuVdMNP5sPinMOzEnJQYFMtba0rDcnPEsF4wJ8h6PCfVLqJJdJA3MkyoRAkHv%2BJHjSSldbNpicOMrpt%2BwDD7XduVyCMlCcSWa8cWcm93ib%2BYsJ7amdbQT1O2u1cRSKZQoFCuE%2B%2BurP39dY0XjEYTl6D038fP9PIQkndUiCG%2FrC4CCw5m9CJauaIv6oBD6ONJlddpgbcsJwmrQ%2FDakuwRGVG4ZFO0rdFUvIaP3Y2yr%2B9Iwz4NPU2laatp6LiqA1sfRNHGA1itQdnw4aTIzsH49A7oseTLek%2Fa%2B1lkaz3YTvqkcp6OsdNZTANPoTOcmEDEGREmo0MePzL19EUsoLFZYEUd7GMCixNYBUM%2BZ7lJTsTnMBKjACYIK3CQ4tcWAc9hK1bmcdjrbI4gmSrgyoSIk6%2FQaTB0bvtUQMZ2VtCi4R7IqstOG863AX7wSFSUaRPduhKBnOzLyquxN50AfeuBX2NPIY55QrH8kGe%2FjfiuJVt4aPw%2Fsr%2FHJmV2rITgTXM8HDfBJu7HFxAOYpfZd7DkeK37uCNhRBHhd%2FDn0FTw%2FPvoKGfOfG64acPkxOLrnKtMdLaEtOukvMvv0YjZvH66VAwOIecXtO%2FDM4sE%2Feb3QLxIW9fkIg%2BVEgrQ%2BINMIDKyr0GOqUBxVW62HYLtwyRS1gCrytDiSxZG0Z4prTQW177gLbQcitqY0cgU8%2Bq06Wyy32f0%2BXMcJoCXrw3F6Ut15Cwh1Ho3r9wgfQG85Gon29UeITNCWMmm4yhlFFBraXoEorDCZkrHokDJCkOezMP7UzeLdBaHN3D%2FwDS8HFV4hfdZEBrKHlCtRYL7R148g8hZtYnXj9dd78JFfj0jE5D5lBbwYpMUo29YPtX&X-Amz-Signature=bb46e062ab16b4b9b7afbe8cff9f639ee03ab21d0c466db3ef44c7a6625e159e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEMRAME%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDO2WBfCaSOI4GNGZSz547ek5U7j1M31eVqjuwpOwARYQIgZVfs0lMuJDOUcYj7cwxHYCJUqRR4K1bMS%2Bdhl7uqqowq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCaqiO4FtHLquA6ibSrcA%2FuVdMNP5sPinMOzEnJQYFMtba0rDcnPEsF4wJ8h6PCfVLqJJdJA3MkyoRAkHv%2BJHjSSldbNpicOMrpt%2BwDD7XduVyCMlCcSWa8cWcm93ib%2BYsJ7amdbQT1O2u1cRSKZQoFCuE%2B%2BurP39dY0XjEYTl6D038fP9PIQkndUiCG%2FrC4CCw5m9CJauaIv6oBD6ONJlddpgbcsJwmrQ%2FDakuwRGVG4ZFO0rdFUvIaP3Y2yr%2B9Iwz4NPU2laatp6LiqA1sfRNHGA1itQdnw4aTIzsH49A7oseTLek%2Fa%2B1lkaz3YTvqkcp6OsdNZTANPoTOcmEDEGREmo0MePzL19EUsoLFZYEUd7GMCixNYBUM%2BZ7lJTsTnMBKjACYIK3CQ4tcWAc9hK1bmcdjrbI4gmSrgyoSIk6%2FQaTB0bvtUQMZ2VtCi4R7IqstOG863AX7wSFSUaRPduhKBnOzLyquxN50AfeuBX2NPIY55QrH8kGe%2FjfiuJVt4aPw%2Fsr%2FHJmV2rITgTXM8HDfBJu7HFxAOYpfZd7DkeK37uCNhRBHhd%2FDn0FTw%2FPvoKGfOfG64acPkxOLrnKtMdLaEtOukvMvv0YjZvH66VAwOIecXtO%2FDM4sE%2Feb3QLxIW9fkIg%2BVEgrQ%2BINMIDKyr0GOqUBxVW62HYLtwyRS1gCrytDiSxZG0Z4prTQW177gLbQcitqY0cgU8%2Bq06Wyy32f0%2BXMcJoCXrw3F6Ut15Cwh1Ho3r9wgfQG85Gon29UeITNCWMmm4yhlFFBraXoEorDCZkrHokDJCkOezMP7UzeLdBaHN3D%2FwDS8HFV4hfdZEBrKHlCtRYL7R148g8hZtYnXj9dd78JFfj0jE5D5lBbwYpMUo29YPtX&X-Amz-Signature=d9a28daa5257fb5dc381332f4637b5bb4727bad651d0c76936115d2b7229c1db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEMRAME%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDO2WBfCaSOI4GNGZSz547ek5U7j1M31eVqjuwpOwARYQIgZVfs0lMuJDOUcYj7cwxHYCJUqRR4K1bMS%2Bdhl7uqqowq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCaqiO4FtHLquA6ibSrcA%2FuVdMNP5sPinMOzEnJQYFMtba0rDcnPEsF4wJ8h6PCfVLqJJdJA3MkyoRAkHv%2BJHjSSldbNpicOMrpt%2BwDD7XduVyCMlCcSWa8cWcm93ib%2BYsJ7amdbQT1O2u1cRSKZQoFCuE%2B%2BurP39dY0XjEYTl6D038fP9PIQkndUiCG%2FrC4CCw5m9CJauaIv6oBD6ONJlddpgbcsJwmrQ%2FDakuwRGVG4ZFO0rdFUvIaP3Y2yr%2B9Iwz4NPU2laatp6LiqA1sfRNHGA1itQdnw4aTIzsH49A7oseTLek%2Fa%2B1lkaz3YTvqkcp6OsdNZTANPoTOcmEDEGREmo0MePzL19EUsoLFZYEUd7GMCixNYBUM%2BZ7lJTsTnMBKjACYIK3CQ4tcWAc9hK1bmcdjrbI4gmSrgyoSIk6%2FQaTB0bvtUQMZ2VtCi4R7IqstOG863AX7wSFSUaRPduhKBnOzLyquxN50AfeuBX2NPIY55QrH8kGe%2FjfiuJVt4aPw%2Fsr%2FHJmV2rITgTXM8HDfBJu7HFxAOYpfZd7DkeK37uCNhRBHhd%2FDn0FTw%2FPvoKGfOfG64acPkxOLrnKtMdLaEtOukvMvv0YjZvH66VAwOIecXtO%2FDM4sE%2Feb3QLxIW9fkIg%2BVEgrQ%2BINMIDKyr0GOqUBxVW62HYLtwyRS1gCrytDiSxZG0Z4prTQW177gLbQcitqY0cgU8%2Bq06Wyy32f0%2BXMcJoCXrw3F6Ut15Cwh1Ho3r9wgfQG85Gon29UeITNCWMmm4yhlFFBraXoEorDCZkrHokDJCkOezMP7UzeLdBaHN3D%2FwDS8HFV4hfdZEBrKHlCtRYL7R148g8hZtYnXj9dd78JFfj0jE5D5lBbwYpMUo29YPtX&X-Amz-Signature=2966deb5945fa307d11c436709871ea2fd2487574eaa4753af196413dff93ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
