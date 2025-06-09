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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652M3AZBQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXJmPM%2BcxgaLal9TqSibMPsTK0nVB0p6VrhoIBmCjhqQIgfr53Nn5vdBxrijrSr8c4VogE0SlHmilwdPfzhX%2BXCuIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNilUG0jzgvMoB4MircAwfLTOOAMH8oo8qcAtuqn3knjwxNufrZd4M7EWiwLtc6Cn%2BWBKrl7o%2FLwdDU74ny%2BOdZQZFXxdTvUs8VwHkn01WHeR9JrlxSM4Q0ml6Gtu3OwOaXixNcLs9XrNRsq7CNyJIzHgtT%2FggybRHyQnAsC%2BleMsy%2B%2BUMDQfmcFPDMT6Jp4xwLzA9AmBh9gm56xc2roQP2GoWCdhbKwEHvuos1q%2B%2B%2BteTIWXPmYOMS%2BORyOq5PGlhx3KNEHSuymX6wEFh3mQpPZNCbnnJ%2FXt7p%2FyXeme%2B%2Fmw2ETyBGyIj7G%2FOn8IHqwWzd8OcaAA6fA%2BPjClBtyY%2FEZ3S%2BVi0No5SlbgSjwN1hftnHZlKDA9SzM4cQI7j%2FLDDH17hZ3Io5wsAESE0DKrPTkD%2FAJ%2FDRQVvEQTRLvszfi10eePdDIRxCLXBtPA9wzK3eFzBbcbolxAbAp6gXmhCO%2F5aiCfdS1obcaTfblptEbsPVbu7Exu%2FCDxsLTpTxTnkXJtEEiGLiN8t%2Bbbc4eYhKuItKOdGxMgaJG93CUw4QY78JQRUzVh9eIKTMVz8yfrL4LE9CPrkalvlnXO2oA6xeXW5kRTglJ8SAx6jlAjEfIXtMoWcFz5nYjXoL1C2Db5V0KotS3XDZCTF9MILLnMIGOqUBbBxogDx47adPkPerIYyIYf804B7wr1m3aWsYyLNrVQk%2B5%2F%2BMALD4%2FLEJB6MhmNflzKA9tgRL60wzpe8EjcpNH1TarYWETxfCnIpZk3FhV5z6aGt2ibOyNqFwvDVgzhj5gYhnmBaJtQeZaU7vzI2ZYQzQeWke257HpNifbP2WnpAmsbQoYXPZ40Lq33lbHFnpGSmGMuQd8X%2BuqOA7XzLxPabBp0jZ&X-Amz-Signature=9a8ca1c60af81cb340bd90a477dd9f7718b918efbd5885c4d3b63b7ae694ae89&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652M3AZBQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXJmPM%2BcxgaLal9TqSibMPsTK0nVB0p6VrhoIBmCjhqQIgfr53Nn5vdBxrijrSr8c4VogE0SlHmilwdPfzhX%2BXCuIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNilUG0jzgvMoB4MircAwfLTOOAMH8oo8qcAtuqn3knjwxNufrZd4M7EWiwLtc6Cn%2BWBKrl7o%2FLwdDU74ny%2BOdZQZFXxdTvUs8VwHkn01WHeR9JrlxSM4Q0ml6Gtu3OwOaXixNcLs9XrNRsq7CNyJIzHgtT%2FggybRHyQnAsC%2BleMsy%2B%2BUMDQfmcFPDMT6Jp4xwLzA9AmBh9gm56xc2roQP2GoWCdhbKwEHvuos1q%2B%2B%2BteTIWXPmYOMS%2BORyOq5PGlhx3KNEHSuymX6wEFh3mQpPZNCbnnJ%2FXt7p%2FyXeme%2B%2Fmw2ETyBGyIj7G%2FOn8IHqwWzd8OcaAA6fA%2BPjClBtyY%2FEZ3S%2BVi0No5SlbgSjwN1hftnHZlKDA9SzM4cQI7j%2FLDDH17hZ3Io5wsAESE0DKrPTkD%2FAJ%2FDRQVvEQTRLvszfi10eePdDIRxCLXBtPA9wzK3eFzBbcbolxAbAp6gXmhCO%2F5aiCfdS1obcaTfblptEbsPVbu7Exu%2FCDxsLTpTxTnkXJtEEiGLiN8t%2Bbbc4eYhKuItKOdGxMgaJG93CUw4QY78JQRUzVh9eIKTMVz8yfrL4LE9CPrkalvlnXO2oA6xeXW5kRTglJ8SAx6jlAjEfIXtMoWcFz5nYjXoL1C2Db5V0KotS3XDZCTF9MILLnMIGOqUBbBxogDx47adPkPerIYyIYf804B7wr1m3aWsYyLNrVQk%2B5%2F%2BMALD4%2FLEJB6MhmNflzKA9tgRL60wzpe8EjcpNH1TarYWETxfCnIpZk3FhV5z6aGt2ibOyNqFwvDVgzhj5gYhnmBaJtQeZaU7vzI2ZYQzQeWke257HpNifbP2WnpAmsbQoYXPZ40Lq33lbHFnpGSmGMuQd8X%2BuqOA7XzLxPabBp0jZ&X-Amz-Signature=885da0df94df020b719aeda7b50f84c9e1a63c7d23705e432f2f965aad854314&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652M3AZBQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXJmPM%2BcxgaLal9TqSibMPsTK0nVB0p6VrhoIBmCjhqQIgfr53Nn5vdBxrijrSr8c4VogE0SlHmilwdPfzhX%2BXCuIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNilUG0jzgvMoB4MircAwfLTOOAMH8oo8qcAtuqn3knjwxNufrZd4M7EWiwLtc6Cn%2BWBKrl7o%2FLwdDU74ny%2BOdZQZFXxdTvUs8VwHkn01WHeR9JrlxSM4Q0ml6Gtu3OwOaXixNcLs9XrNRsq7CNyJIzHgtT%2FggybRHyQnAsC%2BleMsy%2B%2BUMDQfmcFPDMT6Jp4xwLzA9AmBh9gm56xc2roQP2GoWCdhbKwEHvuos1q%2B%2B%2BteTIWXPmYOMS%2BORyOq5PGlhx3KNEHSuymX6wEFh3mQpPZNCbnnJ%2FXt7p%2FyXeme%2B%2Fmw2ETyBGyIj7G%2FOn8IHqwWzd8OcaAA6fA%2BPjClBtyY%2FEZ3S%2BVi0No5SlbgSjwN1hftnHZlKDA9SzM4cQI7j%2FLDDH17hZ3Io5wsAESE0DKrPTkD%2FAJ%2FDRQVvEQTRLvszfi10eePdDIRxCLXBtPA9wzK3eFzBbcbolxAbAp6gXmhCO%2F5aiCfdS1obcaTfblptEbsPVbu7Exu%2FCDxsLTpTxTnkXJtEEiGLiN8t%2Bbbc4eYhKuItKOdGxMgaJG93CUw4QY78JQRUzVh9eIKTMVz8yfrL4LE9CPrkalvlnXO2oA6xeXW5kRTglJ8SAx6jlAjEfIXtMoWcFz5nYjXoL1C2Db5V0KotS3XDZCTF9MILLnMIGOqUBbBxogDx47adPkPerIYyIYf804B7wr1m3aWsYyLNrVQk%2B5%2F%2BMALD4%2FLEJB6MhmNflzKA9tgRL60wzpe8EjcpNH1TarYWETxfCnIpZk3FhV5z6aGt2ibOyNqFwvDVgzhj5gYhnmBaJtQeZaU7vzI2ZYQzQeWke257HpNifbP2WnpAmsbQoYXPZ40Lq33lbHFnpGSmGMuQd8X%2BuqOA7XzLxPabBp0jZ&X-Amz-Signature=37bb8aa1f6787eed6ab11ca2d4ea4cb42e617eeeb3ff83a0e0de278017fe881a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
