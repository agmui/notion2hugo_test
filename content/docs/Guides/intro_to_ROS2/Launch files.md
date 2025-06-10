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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY2VTZY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiIoD6i3rh6bz7%2BBil3qmo3j0ekOXYbLpy6MMor773jAiBfcBc6UCluqpnCWQvsEuZiSXU8ev7lCF4YrZdyvVR5ZyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEkc9uiubgLKlDHcKtwDXEpnLirZsTgUk6Cjq9SWVJQY%2B9XnjBCVobupSNAdBKNDCZSDkGB7t5ad4jQEjpPrARe8i64KwV%2FhtTGaVgbjCScX0hC5gRs%2F5RWlpBWvC36p6yp%2FltrfRBGGr30oli9fNPHscJcCTTnW992Znaid5xDkDpjVO1wNNHp0Cyvdf7yjheHX2erjJo76vVEcpY7oysb9kzkGSnWQi77dv3uxJxy%2FEilPJ7ZwAWCO0WLUTVC88B3U0TCOCFcmptFKBQoVhz8086lF%2BmiZVGCxxobA9K%2BBG4VQPn98yqjpfH2W1p8Qrpd6pT%2BoGDOc4GXo3azR9AysgNr%2BKoajRc1aZdP8%2Fq0Xk2absOh%2FXvIiomCcLl%2Ftww%2BmjTCePtmdBQDmgmVoztmO6eG5ZAuYlxLmhxee%2Bea0mHwDJgDSLPnlctcp9meCTIIohTDdpyUtfw85TQHxUXXMWAfMzdeYjxUJp4s7GzpAZmeYlmK2Hceb7oZQqrvx2YkcanqsjqvSx8aSgH6BoqgX5zLrNwj43KFAaWei%2BruYyhoKS%2B1%2BTsD865NTNA1fVCWgO%2BEsRpb%2BiL5YMALU8JFoyD5jx%2FhHtGeyc%2BRxTjQBfFJjvAq9amBqAHV%2FnwOY%2F4mxhK8rSAyGXj0wu7OiwgY6pgEMqBCcWDB9fCsR845hW0vYwFYwdMFRdiPuVyjwaI5n74GcqsmfHU1phX3Y%2FQb%2BzCDygUmdev3h4MhrWw1QwE8ITk8lLap5x08ADTebwdmxlNhOWJHFe0g%2B2gV6cAHuvJmOxWL%2F5eqARVGnU39OLicRR4ZaigTtfNrK9hhPUmf7L67Yp9abMmgny3g%2FDeaQ6zzawRa2rIWJRwRF6i31YlooeHMhEAen&X-Amz-Signature=8e23b7520bf7a5a9707a2c884ba581946194fa621c7bdec7d4a6a292a8d0c087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY2VTZY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiIoD6i3rh6bz7%2BBil3qmo3j0ekOXYbLpy6MMor773jAiBfcBc6UCluqpnCWQvsEuZiSXU8ev7lCF4YrZdyvVR5ZyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEkc9uiubgLKlDHcKtwDXEpnLirZsTgUk6Cjq9SWVJQY%2B9XnjBCVobupSNAdBKNDCZSDkGB7t5ad4jQEjpPrARe8i64KwV%2FhtTGaVgbjCScX0hC5gRs%2F5RWlpBWvC36p6yp%2FltrfRBGGr30oli9fNPHscJcCTTnW992Znaid5xDkDpjVO1wNNHp0Cyvdf7yjheHX2erjJo76vVEcpY7oysb9kzkGSnWQi77dv3uxJxy%2FEilPJ7ZwAWCO0WLUTVC88B3U0TCOCFcmptFKBQoVhz8086lF%2BmiZVGCxxobA9K%2BBG4VQPn98yqjpfH2W1p8Qrpd6pT%2BoGDOc4GXo3azR9AysgNr%2BKoajRc1aZdP8%2Fq0Xk2absOh%2FXvIiomCcLl%2Ftww%2BmjTCePtmdBQDmgmVoztmO6eG5ZAuYlxLmhxee%2Bea0mHwDJgDSLPnlctcp9meCTIIohTDdpyUtfw85TQHxUXXMWAfMzdeYjxUJp4s7GzpAZmeYlmK2Hceb7oZQqrvx2YkcanqsjqvSx8aSgH6BoqgX5zLrNwj43KFAaWei%2BruYyhoKS%2B1%2BTsD865NTNA1fVCWgO%2BEsRpb%2BiL5YMALU8JFoyD5jx%2FhHtGeyc%2BRxTjQBfFJjvAq9amBqAHV%2FnwOY%2F4mxhK8rSAyGXj0wu7OiwgY6pgEMqBCcWDB9fCsR845hW0vYwFYwdMFRdiPuVyjwaI5n74GcqsmfHU1phX3Y%2FQb%2BzCDygUmdev3h4MhrWw1QwE8ITk8lLap5x08ADTebwdmxlNhOWJHFe0g%2B2gV6cAHuvJmOxWL%2F5eqARVGnU39OLicRR4ZaigTtfNrK9hhPUmf7L67Yp9abMmgny3g%2FDeaQ6zzawRa2rIWJRwRF6i31YlooeHMhEAen&X-Amz-Signature=8b7ecdd4fb436c9f9bd20c2046a09b9c57f2145b43ef8161b6984772187fe91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY2VTZY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiIoD6i3rh6bz7%2BBil3qmo3j0ekOXYbLpy6MMor773jAiBfcBc6UCluqpnCWQvsEuZiSXU8ev7lCF4YrZdyvVR5ZyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEkc9uiubgLKlDHcKtwDXEpnLirZsTgUk6Cjq9SWVJQY%2B9XnjBCVobupSNAdBKNDCZSDkGB7t5ad4jQEjpPrARe8i64KwV%2FhtTGaVgbjCScX0hC5gRs%2F5RWlpBWvC36p6yp%2FltrfRBGGr30oli9fNPHscJcCTTnW992Znaid5xDkDpjVO1wNNHp0Cyvdf7yjheHX2erjJo76vVEcpY7oysb9kzkGSnWQi77dv3uxJxy%2FEilPJ7ZwAWCO0WLUTVC88B3U0TCOCFcmptFKBQoVhz8086lF%2BmiZVGCxxobA9K%2BBG4VQPn98yqjpfH2W1p8Qrpd6pT%2BoGDOc4GXo3azR9AysgNr%2BKoajRc1aZdP8%2Fq0Xk2absOh%2FXvIiomCcLl%2Ftww%2BmjTCePtmdBQDmgmVoztmO6eG5ZAuYlxLmhxee%2Bea0mHwDJgDSLPnlctcp9meCTIIohTDdpyUtfw85TQHxUXXMWAfMzdeYjxUJp4s7GzpAZmeYlmK2Hceb7oZQqrvx2YkcanqsjqvSx8aSgH6BoqgX5zLrNwj43KFAaWei%2BruYyhoKS%2B1%2BTsD865NTNA1fVCWgO%2BEsRpb%2BiL5YMALU8JFoyD5jx%2FhHtGeyc%2BRxTjQBfFJjvAq9amBqAHV%2FnwOY%2F4mxhK8rSAyGXj0wu7OiwgY6pgEMqBCcWDB9fCsR845hW0vYwFYwdMFRdiPuVyjwaI5n74GcqsmfHU1phX3Y%2FQb%2BzCDygUmdev3h4MhrWw1QwE8ITk8lLap5x08ADTebwdmxlNhOWJHFe0g%2B2gV6cAHuvJmOxWL%2F5eqARVGnU39OLicRR4ZaigTtfNrK9hhPUmf7L67Yp9abMmgny3g%2FDeaQ6zzawRa2rIWJRwRF6i31YlooeHMhEAen&X-Amz-Signature=5aa6d3548f2778ff220eefec3c9fd6623dc525754f60bafa527370bb265348a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
