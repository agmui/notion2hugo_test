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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5BWRHY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE4bFz8HndYYmUQElGIHzKuI3iZkAPlX1%2B6rtpSMQilAIgNSGW%2FFmUuBms35SF%2Bd6S%2F0VhaYJU2ZWGH3htDulab%2FUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHWbA36VHUUwmTSoHyrcA7cT6ZLTNnhY3L4soSn0IoVrhAvn3jmy%2FXVdTbfiNI1LSx6IwE5M67g258l%2FlG0wZ0nZ42SZ0A7FKqWsMhLPXdbX8DY27HliureL6yWpCA%2BRaJk0eaFADSkUMTZuSshfd%2FMmawPTJv83ku60b9U7BkaErLsqetHcA39sAHAibJ1%2BkIZ8RUH4IqdMtTeGNAcGlDwhtc8l%2FokHMyJC%2BF2eM8EQOsCvOW6%2B%2FkMqzzjqGku5DjEByobvsKY165jcFPQQmfKef2C7xa78p4%2BISIXJ49mnYc%2FOkrz6spp%2FLPEXN5%2FRGJIPB3JNMnEZES4e7Y7IFT%2FKFDqZ%2FF22cDHT3WP1SYDOXaj0UbOg6nhs0nmafNGWeeeHGsQ%2FknUrXGGXjrtFTNQv3NizH%2BXQdjZBq%2B0XDKKO8X3%2FYVf9seswX3oh3Z01NWJ%2FzfSYf93TC4NrpNic2mwdxgEHLdsrPm62%2Bk4yfz6otKCHJjEskrSuAlYJJKAhSyw35MyC0qKVW6%2FqEhktgR2D26cHK7c05bRDvoQUpDH5DX5foxx4iNTHX9kY%2FzIxdRETurSMZJQyWMzWQ%2B%2BlEqeiyny7%2FmSqORjlh60tePT6%2F3iliQs5SDN8%2BIOVQaw0EaQa3cBBasGyl09zMMu%2FhL0GOqUBJyc9Yzv8Ht2RciqlNT7mRkEQNxxj1Ue0FNhcvEOvl9aLT3yL7VOnq8BsDI4Jc0IOTnm1bx95LWNHFxXxcJRBLiucLOrKK61ilmAhwmEsRI6xgebNDBnQfz%2B1rq1%2BPd%2Bktw728nGU0OfpR%2BysPghTJX5uiCxrgNLp8Ht1ZuILylAPQkC%2FgCSy90mMTtr3RuCef%2FKu17ZwRBXiyoOes3Dk2rIcjl%2Bq&X-Amz-Signature=e2dd3ff6f391be3105d78d7bfbaa229c4d7ade39811add585ade494b872e18cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5BWRHY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE4bFz8HndYYmUQElGIHzKuI3iZkAPlX1%2B6rtpSMQilAIgNSGW%2FFmUuBms35SF%2Bd6S%2F0VhaYJU2ZWGH3htDulab%2FUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHWbA36VHUUwmTSoHyrcA7cT6ZLTNnhY3L4soSn0IoVrhAvn3jmy%2FXVdTbfiNI1LSx6IwE5M67g258l%2FlG0wZ0nZ42SZ0A7FKqWsMhLPXdbX8DY27HliureL6yWpCA%2BRaJk0eaFADSkUMTZuSshfd%2FMmawPTJv83ku60b9U7BkaErLsqetHcA39sAHAibJ1%2BkIZ8RUH4IqdMtTeGNAcGlDwhtc8l%2FokHMyJC%2BF2eM8EQOsCvOW6%2B%2FkMqzzjqGku5DjEByobvsKY165jcFPQQmfKef2C7xa78p4%2BISIXJ49mnYc%2FOkrz6spp%2FLPEXN5%2FRGJIPB3JNMnEZES4e7Y7IFT%2FKFDqZ%2FF22cDHT3WP1SYDOXaj0UbOg6nhs0nmafNGWeeeHGsQ%2FknUrXGGXjrtFTNQv3NizH%2BXQdjZBq%2B0XDKKO8X3%2FYVf9seswX3oh3Z01NWJ%2FzfSYf93TC4NrpNic2mwdxgEHLdsrPm62%2Bk4yfz6otKCHJjEskrSuAlYJJKAhSyw35MyC0qKVW6%2FqEhktgR2D26cHK7c05bRDvoQUpDH5DX5foxx4iNTHX9kY%2FzIxdRETurSMZJQyWMzWQ%2B%2BlEqeiyny7%2FmSqORjlh60tePT6%2F3iliQs5SDN8%2BIOVQaw0EaQa3cBBasGyl09zMMu%2FhL0GOqUBJyc9Yzv8Ht2RciqlNT7mRkEQNxxj1Ue0FNhcvEOvl9aLT3yL7VOnq8BsDI4Jc0IOTnm1bx95LWNHFxXxcJRBLiucLOrKK61ilmAhwmEsRI6xgebNDBnQfz%2B1rq1%2BPd%2Bktw728nGU0OfpR%2BysPghTJX5uiCxrgNLp8Ht1ZuILylAPQkC%2FgCSy90mMTtr3RuCef%2FKu17ZwRBXiyoOes3Dk2rIcjl%2Bq&X-Amz-Signature=51db714d03b09d4faef2c8cd968b7185e75f4184cd66a59f0c9692afe0085e91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5BWRHY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDE4bFz8HndYYmUQElGIHzKuI3iZkAPlX1%2B6rtpSMQilAIgNSGW%2FFmUuBms35SF%2Bd6S%2F0VhaYJU2ZWGH3htDulab%2FUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHWbA36VHUUwmTSoHyrcA7cT6ZLTNnhY3L4soSn0IoVrhAvn3jmy%2FXVdTbfiNI1LSx6IwE5M67g258l%2FlG0wZ0nZ42SZ0A7FKqWsMhLPXdbX8DY27HliureL6yWpCA%2BRaJk0eaFADSkUMTZuSshfd%2FMmawPTJv83ku60b9U7BkaErLsqetHcA39sAHAibJ1%2BkIZ8RUH4IqdMtTeGNAcGlDwhtc8l%2FokHMyJC%2BF2eM8EQOsCvOW6%2B%2FkMqzzjqGku5DjEByobvsKY165jcFPQQmfKef2C7xa78p4%2BISIXJ49mnYc%2FOkrz6spp%2FLPEXN5%2FRGJIPB3JNMnEZES4e7Y7IFT%2FKFDqZ%2FF22cDHT3WP1SYDOXaj0UbOg6nhs0nmafNGWeeeHGsQ%2FknUrXGGXjrtFTNQv3NizH%2BXQdjZBq%2B0XDKKO8X3%2FYVf9seswX3oh3Z01NWJ%2FzfSYf93TC4NrpNic2mwdxgEHLdsrPm62%2Bk4yfz6otKCHJjEskrSuAlYJJKAhSyw35MyC0qKVW6%2FqEhktgR2D26cHK7c05bRDvoQUpDH5DX5foxx4iNTHX9kY%2FzIxdRETurSMZJQyWMzWQ%2B%2BlEqeiyny7%2FmSqORjlh60tePT6%2F3iliQs5SDN8%2BIOVQaw0EaQa3cBBasGyl09zMMu%2FhL0GOqUBJyc9Yzv8Ht2RciqlNT7mRkEQNxxj1Ue0FNhcvEOvl9aLT3yL7VOnq8BsDI4Jc0IOTnm1bx95LWNHFxXxcJRBLiucLOrKK61ilmAhwmEsRI6xgebNDBnQfz%2B1rq1%2BPd%2Bktw728nGU0OfpR%2BysPghTJX5uiCxrgNLp8Ht1ZuILylAPQkC%2FgCSy90mMTtr3RuCef%2FKu17ZwRBXiyoOes3Dk2rIcjl%2Bq&X-Amz-Signature=4e39837f77516a52c8e5aa56f02d60e3173b51693af5323fb4c9675f565283b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
