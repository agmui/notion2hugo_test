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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZIPP2F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPe3J3qwAbLSyUz2KHQhGn%2FX3a63TnGb1%2BQQX3QESCHwIgQENMkIi5yl1rurhAm9wYz7rWm9LEw%2BjdeONIrOhXI3wq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1pQgdORpoE5dwGOCrcA%2FOodbO%2FxszDWAO3WcxbQ23Er3p91xZsRiyFDPrTamoxJfdOZXylsq6EOsFYVKuDNUZC67FNncUZG9agohtioXlglVitG7mcywakZH1fgg77O9XG67CqmIwjclTU82CmP5DeH2PwoV2K7jDyIo3AtGbgUChULa78pvvUo7VS669XpWXRIoGfPiWJwcennMoZbzP6%2FO4jkpeZTX%2F60WfTrraKUrBq2RQVvBwyN2YzbBSW5tDJX78PWbiQwqUqnYeu2M6dUsuNCNTCY9IKH0zLSJ4nYeTpWR97EWz1zLC7Fm3d4bcrHV%2BLEPdR9Cpi7HGv8jo%2FdwuQtDy0Wi7Pnchtyd8iXsCgZp4noaK9sUYKnsEoP6bYK%2B1IbhCRN%2B2%2F%2BSSyYCh%2Bj%2FIBHvKq70myVa4fvQ9qUKLC%2BvEmhgNAUxVuMWJ1iplfsmHcW9zfW8%2FxoI6OSrTCSlCnqQrMNUQ%2FVsjVEeRnynxtRO%2Fgdd3lUjJhB8OnX3ld%2F2UteI2%2Fmyt3dCc3u3T5aNmsEivTdJxfkEFe2Gw9VGxFQPiz%2FnXkiEDEgTsFKpuqXTFpafD1qHuN3493w%2BwgGaI1thC9jFlU2Risrgr0KFaSLMZPUxfgNPycsnNPjGlckG%2BeOmLGPs6VMOywpr4GOqUBw9yWiEFkHFCCAIfvfWFHm49TIzPKXNkYPFSCGJQvdK5RcvtvPHCCfUsyA7o%2F05qfH82w93Wgj3nzoqLdPU%2Bp%2FF1hQakYQwgeYSR5SEqopHyrVgrMz0zoltisgAfa1ls86v5hRK5vyPSR5tm%2FePwnjijYq%2B%2B6kFUABmWqMlcwMh6DFClcId6gqXCwJBgpvjFSJiNiMaDonESEn3chj5DQZhclTfjj&X-Amz-Signature=4745025c952f412d04bb6f8cf434c91759cbec07a9192d026b665d4b7e3a195c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZIPP2F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPe3J3qwAbLSyUz2KHQhGn%2FX3a63TnGb1%2BQQX3QESCHwIgQENMkIi5yl1rurhAm9wYz7rWm9LEw%2BjdeONIrOhXI3wq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1pQgdORpoE5dwGOCrcA%2FOodbO%2FxszDWAO3WcxbQ23Er3p91xZsRiyFDPrTamoxJfdOZXylsq6EOsFYVKuDNUZC67FNncUZG9agohtioXlglVitG7mcywakZH1fgg77O9XG67CqmIwjclTU82CmP5DeH2PwoV2K7jDyIo3AtGbgUChULa78pvvUo7VS669XpWXRIoGfPiWJwcennMoZbzP6%2FO4jkpeZTX%2F60WfTrraKUrBq2RQVvBwyN2YzbBSW5tDJX78PWbiQwqUqnYeu2M6dUsuNCNTCY9IKH0zLSJ4nYeTpWR97EWz1zLC7Fm3d4bcrHV%2BLEPdR9Cpi7HGv8jo%2FdwuQtDy0Wi7Pnchtyd8iXsCgZp4noaK9sUYKnsEoP6bYK%2B1IbhCRN%2B2%2F%2BSSyYCh%2Bj%2FIBHvKq70myVa4fvQ9qUKLC%2BvEmhgNAUxVuMWJ1iplfsmHcW9zfW8%2FxoI6OSrTCSlCnqQrMNUQ%2FVsjVEeRnynxtRO%2Fgdd3lUjJhB8OnX3ld%2F2UteI2%2Fmyt3dCc3u3T5aNmsEivTdJxfkEFe2Gw9VGxFQPiz%2FnXkiEDEgTsFKpuqXTFpafD1qHuN3493w%2BwgGaI1thC9jFlU2Risrgr0KFaSLMZPUxfgNPycsnNPjGlckG%2BeOmLGPs6VMOywpr4GOqUBw9yWiEFkHFCCAIfvfWFHm49TIzPKXNkYPFSCGJQvdK5RcvtvPHCCfUsyA7o%2F05qfH82w93Wgj3nzoqLdPU%2Bp%2FF1hQakYQwgeYSR5SEqopHyrVgrMz0zoltisgAfa1ls86v5hRK5vyPSR5tm%2FePwnjijYq%2B%2B6kFUABmWqMlcwMh6DFClcId6gqXCwJBgpvjFSJiNiMaDonESEn3chj5DQZhclTfjj&X-Amz-Signature=58ce77d0a38740b7574b5991d24e74566b33a487da700fcd1f6e5b59db83d8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZIPP2F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPe3J3qwAbLSyUz2KHQhGn%2FX3a63TnGb1%2BQQX3QESCHwIgQENMkIi5yl1rurhAm9wYz7rWm9LEw%2BjdeONIrOhXI3wq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1pQgdORpoE5dwGOCrcA%2FOodbO%2FxszDWAO3WcxbQ23Er3p91xZsRiyFDPrTamoxJfdOZXylsq6EOsFYVKuDNUZC67FNncUZG9agohtioXlglVitG7mcywakZH1fgg77O9XG67CqmIwjclTU82CmP5DeH2PwoV2K7jDyIo3AtGbgUChULa78pvvUo7VS669XpWXRIoGfPiWJwcennMoZbzP6%2FO4jkpeZTX%2F60WfTrraKUrBq2RQVvBwyN2YzbBSW5tDJX78PWbiQwqUqnYeu2M6dUsuNCNTCY9IKH0zLSJ4nYeTpWR97EWz1zLC7Fm3d4bcrHV%2BLEPdR9Cpi7HGv8jo%2FdwuQtDy0Wi7Pnchtyd8iXsCgZp4noaK9sUYKnsEoP6bYK%2B1IbhCRN%2B2%2F%2BSSyYCh%2Bj%2FIBHvKq70myVa4fvQ9qUKLC%2BvEmhgNAUxVuMWJ1iplfsmHcW9zfW8%2FxoI6OSrTCSlCnqQrMNUQ%2FVsjVEeRnynxtRO%2Fgdd3lUjJhB8OnX3ld%2F2UteI2%2Fmyt3dCc3u3T5aNmsEivTdJxfkEFe2Gw9VGxFQPiz%2FnXkiEDEgTsFKpuqXTFpafD1qHuN3493w%2BwgGaI1thC9jFlU2Risrgr0KFaSLMZPUxfgNPycsnNPjGlckG%2BeOmLGPs6VMOywpr4GOqUBw9yWiEFkHFCCAIfvfWFHm49TIzPKXNkYPFSCGJQvdK5RcvtvPHCCfUsyA7o%2F05qfH82w93Wgj3nzoqLdPU%2Bp%2FF1hQakYQwgeYSR5SEqopHyrVgrMz0zoltisgAfa1ls86v5hRK5vyPSR5tm%2FePwnjijYq%2B%2B6kFUABmWqMlcwMh6DFClcId6gqXCwJBgpvjFSJiNiMaDonESEn3chj5DQZhclTfjj&X-Amz-Signature=eea5d8b8dcaf0835a9e171233c904b4dd219bbeb40c8cbcf0bea7dc37563d75b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
