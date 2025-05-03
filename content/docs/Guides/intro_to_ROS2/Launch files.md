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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSEIU3G%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDj2Z2qDg2vShMizEYyATEgiBQ3%2FmozDp4sXrfnpvEmDgIgF932Uvd%2Bvu1ZB%2BBSWvDyLhSIN7qPcC7ZsPrCiyPnzOgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEvH%2FF9CcVmpbsp7SrcA4cJfwV1oPW4UvJBJsIrfI%2BptEyBfzHLTBO%2Bg%2Bd2LHqGsBQ0dXgRziAQrJ705tD1A0XhjNQ11%2FPQqmOwIrSPXJ4MWdGshNNO%2F%2Fg3HTCFEEtZVBamFOy%2F7Z783kemkrxQ5gIzATm%2BwSMkpkY3KNojWwC8ZusnxxiiE7VNwq%2BEHTLFFF7LbI5OXsqlM1sdnPSIZ2Z1WMVPN73vEu8OvbPhl93jxeQKaF5raxMXqeoiM3E2IkuNmDZe2z3nRj%2B4qjUNr6OKVGevintgceM4t8beU8fX0Z5%2Bi9hiXb2WscBeIZbEAIUKm2p9RaQX1W9FnyI1I6uzLAxmaMoVU4MJq0WoOsizY1HgJgkndeWfBkWv%2BdvCEvwiFywnJYvWK6Yrc60omIbiioNf%2F3E8amaspzwBpalypNcPQEIVXdn1Dw7FYopy52lxPBWi%2Fjt%2FugDiPYujHHhFLyL%2FkuGEjA5ecHrqnsExdyLZQnWWkYnZqwbqeQidOqH%2BdLNuYDGI2KsQMWjRk0ChkW5HXKOpf8Sy1ZQApy%2BI8yd6ZDuHqCUZ6YmHnPDmawSL4z8Jc6ZV6DE8%2BWz9HGohFfni9swDzGY9AY%2FqlX3BmDmOBLyJ59jhiiC4QfVcK4caoENDqTZjU%2BKlMNze18AGOqUB%2BiuV07jM8XJcBdsunrxyneTc7hV0freh1WMT%2BKTeRYtBKp4KE8o%2BO2lbbvsYNZKJjWFDTx7iBMEgtLtFfFTLMlcVjtDiOLoQiFGtM11QtQuIZl82mcMZev6wXgi3Cey%2BmIB9jnF84oDrsQPi%2Btw6vV6WVRaPuqofIBGDXBf2GmEx5YyK2zdJn4zZviwVz5CMvwlKZJaAeM6IEbzSSlVRX7Ln2VKN&X-Amz-Signature=757d3a838679f732d7ecf24091caa0ea625c123b64819c1732493fcad4eb18d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSEIU3G%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDj2Z2qDg2vShMizEYyATEgiBQ3%2FmozDp4sXrfnpvEmDgIgF932Uvd%2Bvu1ZB%2BBSWvDyLhSIN7qPcC7ZsPrCiyPnzOgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEvH%2FF9CcVmpbsp7SrcA4cJfwV1oPW4UvJBJsIrfI%2BptEyBfzHLTBO%2Bg%2Bd2LHqGsBQ0dXgRziAQrJ705tD1A0XhjNQ11%2FPQqmOwIrSPXJ4MWdGshNNO%2F%2Fg3HTCFEEtZVBamFOy%2F7Z783kemkrxQ5gIzATm%2BwSMkpkY3KNojWwC8ZusnxxiiE7VNwq%2BEHTLFFF7LbI5OXsqlM1sdnPSIZ2Z1WMVPN73vEu8OvbPhl93jxeQKaF5raxMXqeoiM3E2IkuNmDZe2z3nRj%2B4qjUNr6OKVGevintgceM4t8beU8fX0Z5%2Bi9hiXb2WscBeIZbEAIUKm2p9RaQX1W9FnyI1I6uzLAxmaMoVU4MJq0WoOsizY1HgJgkndeWfBkWv%2BdvCEvwiFywnJYvWK6Yrc60omIbiioNf%2F3E8amaspzwBpalypNcPQEIVXdn1Dw7FYopy52lxPBWi%2Fjt%2FugDiPYujHHhFLyL%2FkuGEjA5ecHrqnsExdyLZQnWWkYnZqwbqeQidOqH%2BdLNuYDGI2KsQMWjRk0ChkW5HXKOpf8Sy1ZQApy%2BI8yd6ZDuHqCUZ6YmHnPDmawSL4z8Jc6ZV6DE8%2BWz9HGohFfni9swDzGY9AY%2FqlX3BmDmOBLyJ59jhiiC4QfVcK4caoENDqTZjU%2BKlMNze18AGOqUB%2BiuV07jM8XJcBdsunrxyneTc7hV0freh1WMT%2BKTeRYtBKp4KE8o%2BO2lbbvsYNZKJjWFDTx7iBMEgtLtFfFTLMlcVjtDiOLoQiFGtM11QtQuIZl82mcMZev6wXgi3Cey%2BmIB9jnF84oDrsQPi%2Btw6vV6WVRaPuqofIBGDXBf2GmEx5YyK2zdJn4zZviwVz5CMvwlKZJaAeM6IEbzSSlVRX7Ln2VKN&X-Amz-Signature=1152b3a8483a329fe280afbd589c57015a8fe59886f1fbff968602651f7001a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSEIU3G%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDj2Z2qDg2vShMizEYyATEgiBQ3%2FmozDp4sXrfnpvEmDgIgF932Uvd%2Bvu1ZB%2BBSWvDyLhSIN7qPcC7ZsPrCiyPnzOgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEvH%2FF9CcVmpbsp7SrcA4cJfwV1oPW4UvJBJsIrfI%2BptEyBfzHLTBO%2Bg%2Bd2LHqGsBQ0dXgRziAQrJ705tD1A0XhjNQ11%2FPQqmOwIrSPXJ4MWdGshNNO%2F%2Fg3HTCFEEtZVBamFOy%2F7Z783kemkrxQ5gIzATm%2BwSMkpkY3KNojWwC8ZusnxxiiE7VNwq%2BEHTLFFF7LbI5OXsqlM1sdnPSIZ2Z1WMVPN73vEu8OvbPhl93jxeQKaF5raxMXqeoiM3E2IkuNmDZe2z3nRj%2B4qjUNr6OKVGevintgceM4t8beU8fX0Z5%2Bi9hiXb2WscBeIZbEAIUKm2p9RaQX1W9FnyI1I6uzLAxmaMoVU4MJq0WoOsizY1HgJgkndeWfBkWv%2BdvCEvwiFywnJYvWK6Yrc60omIbiioNf%2F3E8amaspzwBpalypNcPQEIVXdn1Dw7FYopy52lxPBWi%2Fjt%2FugDiPYujHHhFLyL%2FkuGEjA5ecHrqnsExdyLZQnWWkYnZqwbqeQidOqH%2BdLNuYDGI2KsQMWjRk0ChkW5HXKOpf8Sy1ZQApy%2BI8yd6ZDuHqCUZ6YmHnPDmawSL4z8Jc6ZV6DE8%2BWz9HGohFfni9swDzGY9AY%2FqlX3BmDmOBLyJ59jhiiC4QfVcK4caoENDqTZjU%2BKlMNze18AGOqUB%2BiuV07jM8XJcBdsunrxyneTc7hV0freh1WMT%2BKTeRYtBKp4KE8o%2BO2lbbvsYNZKJjWFDTx7iBMEgtLtFfFTLMlcVjtDiOLoQiFGtM11QtQuIZl82mcMZev6wXgi3Cey%2BmIB9jnF84oDrsQPi%2Btw6vV6WVRaPuqofIBGDXBf2GmEx5YyK2zdJn4zZviwVz5CMvwlKZJaAeM6IEbzSSlVRX7Ln2VKN&X-Amz-Signature=224a0d4fd066b85caf8ac38726fbcf332bda3c1357cae1297f41c3fb1e18052a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
