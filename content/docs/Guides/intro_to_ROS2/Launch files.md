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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VDZBQMY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BdM2GpAk46TY7mfDPZ2PgB%2BBYxOe7LlRsfMt5qFGDKAiEAg5WMdl2H6ZMl9VlkpA6wJwPR14B1Dolgt9jpfUeeS%2Fwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIo5dZBnEE7JM2hyJCrcA2aH99uwss%2FykknbQCerG6pC3IfLF1zNKvFGUxrI6pshpMbKuwqimtL5QAcvNkhy%2B1%2BLVSJq15vsyxorX28zX2xBzAfWXDFZRjRgQtwGd%2BatQHQcJoDTSAcFI7h1vbO7zWp9svKKU3KT%2B1qOwur1G5WcEfSQdEffRuo9QgiMzYGFWK31Si6abERJxXQTWQwtQCD2pL7N2WJRBUu6M0mkvmTIeqKpLpIYNPZSw%2BSnzHdA2WSoT%2BC6GzvUCk%2Bkl4qViFeqHCiZVZ6LDomrIRXEaO4Ipi50mY26sQ34pOxLxfyo4upW67QorDyDF1QWDvCMvAfjIWhkzVs2MtMI6Jaxkz04bTYyJwSEzcZNpM%2Bzg38bchgvw49ANlvM9gBk8S7Gp8zUzfyjf3mz3lXu%2Fr3vqv2YKLJKVdwB1AOjQDdeQtCX6IpO9%2FcdUBkdHMPdVVMiLBJmUMrPUM7wcN%2B2cEvrO83qcCeT4nvZt78WvdzzDE4tsgQpNM0zXRrSUjujJsc7UeV9OK%2B5uEOAs2xUCx5FT7l%2BIKRVhDkdB1i6dE%2FMMFoAWVYR%2BrA41Z%2FLPcBfB0jP3buy1g3sQ4I3DI3CCb6GHsbmXU25%2Bc%2BQNLm460DvCNr0eHvy5Yf4HtD4XWCDMJOqtr0GOqUBAikcF37vHOFmIuP%2F%2FnEpR0tejZXf0gC9m%2Bn6TucadNUR2z3nRZyh0Srgs3yVFxIQqxXHH6PG2Y9i0EdzzkGqOo%2Bp5o12Xx7kTVIJCSla%2BZhLjiM1i6QR9O2yXGl4GB7mtCfb5jkTI%2FFU1W58HLFTcbjxsZEQROhbLrB5BwUWgq%2BjFg10%2BjwZRJ6YacIJ5KY2rUepwI%2Bp375nKs0Qe2dE0KQ9q1p0&X-Amz-Signature=14135d4282ad768e247c79be2960cde19322ecbbf3dd04128684028b1c3d17e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VDZBQMY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BdM2GpAk46TY7mfDPZ2PgB%2BBYxOe7LlRsfMt5qFGDKAiEAg5WMdl2H6ZMl9VlkpA6wJwPR14B1Dolgt9jpfUeeS%2Fwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIo5dZBnEE7JM2hyJCrcA2aH99uwss%2FykknbQCerG6pC3IfLF1zNKvFGUxrI6pshpMbKuwqimtL5QAcvNkhy%2B1%2BLVSJq15vsyxorX28zX2xBzAfWXDFZRjRgQtwGd%2BatQHQcJoDTSAcFI7h1vbO7zWp9svKKU3KT%2B1qOwur1G5WcEfSQdEffRuo9QgiMzYGFWK31Si6abERJxXQTWQwtQCD2pL7N2WJRBUu6M0mkvmTIeqKpLpIYNPZSw%2BSnzHdA2WSoT%2BC6GzvUCk%2Bkl4qViFeqHCiZVZ6LDomrIRXEaO4Ipi50mY26sQ34pOxLxfyo4upW67QorDyDF1QWDvCMvAfjIWhkzVs2MtMI6Jaxkz04bTYyJwSEzcZNpM%2Bzg38bchgvw49ANlvM9gBk8S7Gp8zUzfyjf3mz3lXu%2Fr3vqv2YKLJKVdwB1AOjQDdeQtCX6IpO9%2FcdUBkdHMPdVVMiLBJmUMrPUM7wcN%2B2cEvrO83qcCeT4nvZt78WvdzzDE4tsgQpNM0zXRrSUjujJsc7UeV9OK%2B5uEOAs2xUCx5FT7l%2BIKRVhDkdB1i6dE%2FMMFoAWVYR%2BrA41Z%2FLPcBfB0jP3buy1g3sQ4I3DI3CCb6GHsbmXU25%2Bc%2BQNLm460DvCNr0eHvy5Yf4HtD4XWCDMJOqtr0GOqUBAikcF37vHOFmIuP%2F%2FnEpR0tejZXf0gC9m%2Bn6TucadNUR2z3nRZyh0Srgs3yVFxIQqxXHH6PG2Y9i0EdzzkGqOo%2Bp5o12Xx7kTVIJCSla%2BZhLjiM1i6QR9O2yXGl4GB7mtCfb5jkTI%2FFU1W58HLFTcbjxsZEQROhbLrB5BwUWgq%2BjFg10%2BjwZRJ6YacIJ5KY2rUepwI%2Bp375nKs0Qe2dE0KQ9q1p0&X-Amz-Signature=7b01655bc64fc01b75c1dff7661db0a9d9beb1b414638e371f023a957cd8a6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VDZBQMY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BdM2GpAk46TY7mfDPZ2PgB%2BBYxOe7LlRsfMt5qFGDKAiEAg5WMdl2H6ZMl9VlkpA6wJwPR14B1Dolgt9jpfUeeS%2Fwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIo5dZBnEE7JM2hyJCrcA2aH99uwss%2FykknbQCerG6pC3IfLF1zNKvFGUxrI6pshpMbKuwqimtL5QAcvNkhy%2B1%2BLVSJq15vsyxorX28zX2xBzAfWXDFZRjRgQtwGd%2BatQHQcJoDTSAcFI7h1vbO7zWp9svKKU3KT%2B1qOwur1G5WcEfSQdEffRuo9QgiMzYGFWK31Si6abERJxXQTWQwtQCD2pL7N2WJRBUu6M0mkvmTIeqKpLpIYNPZSw%2BSnzHdA2WSoT%2BC6GzvUCk%2Bkl4qViFeqHCiZVZ6LDomrIRXEaO4Ipi50mY26sQ34pOxLxfyo4upW67QorDyDF1QWDvCMvAfjIWhkzVs2MtMI6Jaxkz04bTYyJwSEzcZNpM%2Bzg38bchgvw49ANlvM9gBk8S7Gp8zUzfyjf3mz3lXu%2Fr3vqv2YKLJKVdwB1AOjQDdeQtCX6IpO9%2FcdUBkdHMPdVVMiLBJmUMrPUM7wcN%2B2cEvrO83qcCeT4nvZt78WvdzzDE4tsgQpNM0zXRrSUjujJsc7UeV9OK%2B5uEOAs2xUCx5FT7l%2BIKRVhDkdB1i6dE%2FMMFoAWVYR%2BrA41Z%2FLPcBfB0jP3buy1g3sQ4I3DI3CCb6GHsbmXU25%2Bc%2BQNLm460DvCNr0eHvy5Yf4HtD4XWCDMJOqtr0GOqUBAikcF37vHOFmIuP%2F%2FnEpR0tejZXf0gC9m%2Bn6TucadNUR2z3nRZyh0Srgs3yVFxIQqxXHH6PG2Y9i0EdzzkGqOo%2Bp5o12Xx7kTVIJCSla%2BZhLjiM1i6QR9O2yXGl4GB7mtCfb5jkTI%2FFU1W58HLFTcbjxsZEQROhbLrB5BwUWgq%2BjFg10%2BjwZRJ6YacIJ5KY2rUepwI%2Bp375nKs0Qe2dE0KQ9q1p0&X-Amz-Signature=c7105e1fdb8481d29fd51049ecdee7a59614f0f71dbf13e6d7349c86c0806049&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
