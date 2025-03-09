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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3XKQA4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCfoPWhewaYEOp3CKo%2BJwN03HOypHB8hDQEE3ea%2FTAqCAIgJMSl8k8GplVCdJn1Ofuu2kVxw3I4tJgySQLbPL%2F8TA4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLW1jYhSv%2F89jMQbiSrcA9Jp79QNZ9aluek0GB5SOI2ZnfVTUk5wLuDMvWqczs0zjUmfGcaBiLIcRAfSXL0P9TK8CFLygvNBw9s6JEACERI7sTFVTpuArs9EcgdV8Oo7XBjhZa24EnasSK1XYzfA4NORGYLFPEoxEdPh9b7ad6GjCLh2rATEZZy1q3Y7wL3RclFy4%2FFsFrYY0lw6xMASd4Qaa91rgYv1CBGH75elOBsxDdfUMDVf%2FKQCzuuKDZEXLZG0QOl2b0dEAdCxKlmWsNCuhFFnc4jcYscZmmQF%2BS%2FFoFjxA1fNl6i3xatf8zZL4S7HX3wcMgmvuQQE1qSehjczzgWw1DFRO%2BtXG0RxL97hHsjnoJBcA%2FXLtAqYZPPEtvPt25INmnpjSE80lEvVprQi7kKEGUrPtrdO0xwG55dxEQAXpjHyLHdr3N8NsYstGIzJ25J2Vfvcv3%2BT%2FdObEqM0hqJNNAWTj3CZ5dfDsI9xTK%2FSE6XTigL4MWHvnjUleDBryhDP64dqrhtzJJYU4qRouEpReNByGby%2BhzOD6y%2F2U%2BltaA%2BmTEE5HVF8NxruIk2CsiRqcoorWQWHH2nSr0mtESeWZS6%2FoOI9ZB6DLFMIBE1%2FW45Kg2xHHdZBiV%2F4j47nww4eFpTPK4FuMMOPtr4GOqUBMfCmFzChnAmnJAuH2PCvm7IH7Zkr9chE1%2BG334u0KcByMc1pJUcvJAw5CmlJ%2Bsd0ZG0pMFII3zrBcSXX3M6o9%2BLpcJwMnUyvygFKxStcOEalHgQKXo0OINvCZXbFTSH5WiZiVV17P6uYKwWarBRspbnZ3tp1fxq0vqHNcFjji9aullh%2FBJBeaUhWA2yfmJqsfcUaPFgmUT55XU4XgsO5HZLkxIqr&X-Amz-Signature=02324f9a66e950e330d00680f39be308f8e28526e8d62a05d6a163be2cde4d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3XKQA4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCfoPWhewaYEOp3CKo%2BJwN03HOypHB8hDQEE3ea%2FTAqCAIgJMSl8k8GplVCdJn1Ofuu2kVxw3I4tJgySQLbPL%2F8TA4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLW1jYhSv%2F89jMQbiSrcA9Jp79QNZ9aluek0GB5SOI2ZnfVTUk5wLuDMvWqczs0zjUmfGcaBiLIcRAfSXL0P9TK8CFLygvNBw9s6JEACERI7sTFVTpuArs9EcgdV8Oo7XBjhZa24EnasSK1XYzfA4NORGYLFPEoxEdPh9b7ad6GjCLh2rATEZZy1q3Y7wL3RclFy4%2FFsFrYY0lw6xMASd4Qaa91rgYv1CBGH75elOBsxDdfUMDVf%2FKQCzuuKDZEXLZG0QOl2b0dEAdCxKlmWsNCuhFFnc4jcYscZmmQF%2BS%2FFoFjxA1fNl6i3xatf8zZL4S7HX3wcMgmvuQQE1qSehjczzgWw1DFRO%2BtXG0RxL97hHsjnoJBcA%2FXLtAqYZPPEtvPt25INmnpjSE80lEvVprQi7kKEGUrPtrdO0xwG55dxEQAXpjHyLHdr3N8NsYstGIzJ25J2Vfvcv3%2BT%2FdObEqM0hqJNNAWTj3CZ5dfDsI9xTK%2FSE6XTigL4MWHvnjUleDBryhDP64dqrhtzJJYU4qRouEpReNByGby%2BhzOD6y%2F2U%2BltaA%2BmTEE5HVF8NxruIk2CsiRqcoorWQWHH2nSr0mtESeWZS6%2FoOI9ZB6DLFMIBE1%2FW45Kg2xHHdZBiV%2F4j47nww4eFpTPK4FuMMOPtr4GOqUBMfCmFzChnAmnJAuH2PCvm7IH7Zkr9chE1%2BG334u0KcByMc1pJUcvJAw5CmlJ%2Bsd0ZG0pMFII3zrBcSXX3M6o9%2BLpcJwMnUyvygFKxStcOEalHgQKXo0OINvCZXbFTSH5WiZiVV17P6uYKwWarBRspbnZ3tp1fxq0vqHNcFjji9aullh%2FBJBeaUhWA2yfmJqsfcUaPFgmUT55XU4XgsO5HZLkxIqr&X-Amz-Signature=c21a37340f9ba9559de5ae8fac72340d07690fb22f94ea305e35ecbce586c0e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3XKQA4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCfoPWhewaYEOp3CKo%2BJwN03HOypHB8hDQEE3ea%2FTAqCAIgJMSl8k8GplVCdJn1Ofuu2kVxw3I4tJgySQLbPL%2F8TA4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLW1jYhSv%2F89jMQbiSrcA9Jp79QNZ9aluek0GB5SOI2ZnfVTUk5wLuDMvWqczs0zjUmfGcaBiLIcRAfSXL0P9TK8CFLygvNBw9s6JEACERI7sTFVTpuArs9EcgdV8Oo7XBjhZa24EnasSK1XYzfA4NORGYLFPEoxEdPh9b7ad6GjCLh2rATEZZy1q3Y7wL3RclFy4%2FFsFrYY0lw6xMASd4Qaa91rgYv1CBGH75elOBsxDdfUMDVf%2FKQCzuuKDZEXLZG0QOl2b0dEAdCxKlmWsNCuhFFnc4jcYscZmmQF%2BS%2FFoFjxA1fNl6i3xatf8zZL4S7HX3wcMgmvuQQE1qSehjczzgWw1DFRO%2BtXG0RxL97hHsjnoJBcA%2FXLtAqYZPPEtvPt25INmnpjSE80lEvVprQi7kKEGUrPtrdO0xwG55dxEQAXpjHyLHdr3N8NsYstGIzJ25J2Vfvcv3%2BT%2FdObEqM0hqJNNAWTj3CZ5dfDsI9xTK%2FSE6XTigL4MWHvnjUleDBryhDP64dqrhtzJJYU4qRouEpReNByGby%2BhzOD6y%2F2U%2BltaA%2BmTEE5HVF8NxruIk2CsiRqcoorWQWHH2nSr0mtESeWZS6%2FoOI9ZB6DLFMIBE1%2FW45Kg2xHHdZBiV%2F4j47nww4eFpTPK4FuMMOPtr4GOqUBMfCmFzChnAmnJAuH2PCvm7IH7Zkr9chE1%2BG334u0KcByMc1pJUcvJAw5CmlJ%2Bsd0ZG0pMFII3zrBcSXX3M6o9%2BLpcJwMnUyvygFKxStcOEalHgQKXo0OINvCZXbFTSH5WiZiVV17P6uYKwWarBRspbnZ3tp1fxq0vqHNcFjji9aullh%2FBJBeaUhWA2yfmJqsfcUaPFgmUT55XU4XgsO5HZLkxIqr&X-Amz-Signature=9c1d45801f2611823429baec6798238250a55e3f57393b2b60f877f7a89c6727&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
