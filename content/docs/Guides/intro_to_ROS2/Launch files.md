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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTJSUR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFVAeHtvuwFromAfxW%2FIOCPDvNBIE4ehjzL%2BHcPYD3NTAiEA7IbUCnvj3%2FTfAN%2FrFqRhB2x%2F6EXadls6hUQHYfi%2F8U0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOblrq1eOGKNAzAbSSrcA92vbAD%2FeBZVYacL4Fx3YpudikVL%2BjyNGeDpOb%2Fb7WnkJsLVkMyG09GNx6lKZzFH%2BcLekoal6uggpIqnyDWZXz9E2VONZ%2Fd9hvkHZpinm9%2BUd4cqqnikqOB2gbwSXjAKLCLqkg7vBym4Jy94bdQqt5rngZBv%2FqixSLKiJcs9AmHrPCsJNS%2FfbSBx7lX%2BPCH8V9N3PKU0w6FitCYYPBGOk1pQZ1skgK73Wiz%2BZ6O4hC7TAG1q7j87X96g1nfcVtScAntXp5jas8gab%2FeaLoSx6cWJIrcIJ9Q7HHydqViLooh7nbPvMo67Z3db%2By0jUDeduag7H4XzwnPrtxrsTSUUAEuQLxnVW5bFnS4j6JVTJ56guxqlLONls7OkhGDYNV9nHE4%2BKeGvxC3UsR%2FZIygzlNWfSyUUBlLcHDMJKFpGlrO4zX4VP44A9e3ON24ZRTxkJFW9ohDIrwl83p%2Bh2nAPO%2BF1hmQbgHO5xMH%2BEiDeqOTOclv8inHybwvNZ4COjEzzaNK72DTHiYwcY%2FcWRwRnVUHT2hdXZjyNqRTwMbub%2FXYxoRFdBMQT8T7wKW9MVgNUzjsRDjXzTgbGO%2F0ehdms%2BeUgFfdEJGxR2NmKxfmOhTDf04Epnq0MwSHygGltMPLrqcIGOqUBwGVwlCznqWBUoCotpkbBXkLT9fo18Y3DFiXXflb8ILv9mYgM1IcEx7hPSR9wkwMimgYwvPExWOn3l%2B9F5DDbTvDlxmXJPxk5WhoJHA3NHKDfzon62o3yllDUr1sI6Hb%2B1nhVx4TjT%2FCfMzHLtJmlSk8EwkcCLAZ6SEubMQXEGEc2NIvNzHwU%2Fwb0YbYsXm4lCT8Bdy2vhqIk%2FISg3OYPuKTOT%2FwD&X-Amz-Signature=3ffb0f0a47900e3dfc327552918058cad4ae4267d3c86eb60939aa5e3d1894e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTJSUR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFVAeHtvuwFromAfxW%2FIOCPDvNBIE4ehjzL%2BHcPYD3NTAiEA7IbUCnvj3%2FTfAN%2FrFqRhB2x%2F6EXadls6hUQHYfi%2F8U0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOblrq1eOGKNAzAbSSrcA92vbAD%2FeBZVYacL4Fx3YpudikVL%2BjyNGeDpOb%2Fb7WnkJsLVkMyG09GNx6lKZzFH%2BcLekoal6uggpIqnyDWZXz9E2VONZ%2Fd9hvkHZpinm9%2BUd4cqqnikqOB2gbwSXjAKLCLqkg7vBym4Jy94bdQqt5rngZBv%2FqixSLKiJcs9AmHrPCsJNS%2FfbSBx7lX%2BPCH8V9N3PKU0w6FitCYYPBGOk1pQZ1skgK73Wiz%2BZ6O4hC7TAG1q7j87X96g1nfcVtScAntXp5jas8gab%2FeaLoSx6cWJIrcIJ9Q7HHydqViLooh7nbPvMo67Z3db%2By0jUDeduag7H4XzwnPrtxrsTSUUAEuQLxnVW5bFnS4j6JVTJ56guxqlLONls7OkhGDYNV9nHE4%2BKeGvxC3UsR%2FZIygzlNWfSyUUBlLcHDMJKFpGlrO4zX4VP44A9e3ON24ZRTxkJFW9ohDIrwl83p%2Bh2nAPO%2BF1hmQbgHO5xMH%2BEiDeqOTOclv8inHybwvNZ4COjEzzaNK72DTHiYwcY%2FcWRwRnVUHT2hdXZjyNqRTwMbub%2FXYxoRFdBMQT8T7wKW9MVgNUzjsRDjXzTgbGO%2F0ehdms%2BeUgFfdEJGxR2NmKxfmOhTDf04Epnq0MwSHygGltMPLrqcIGOqUBwGVwlCznqWBUoCotpkbBXkLT9fo18Y3DFiXXflb8ILv9mYgM1IcEx7hPSR9wkwMimgYwvPExWOn3l%2B9F5DDbTvDlxmXJPxk5WhoJHA3NHKDfzon62o3yllDUr1sI6Hb%2B1nhVx4TjT%2FCfMzHLtJmlSk8EwkcCLAZ6SEubMQXEGEc2NIvNzHwU%2Fwb0YbYsXm4lCT8Bdy2vhqIk%2FISg3OYPuKTOT%2FwD&X-Amz-Signature=cdc26e1f46594cd7d6e479cf8454add5bf8d172b6b6ee0caaa0b020b3e5a83fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTJSUR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFVAeHtvuwFromAfxW%2FIOCPDvNBIE4ehjzL%2BHcPYD3NTAiEA7IbUCnvj3%2FTfAN%2FrFqRhB2x%2F6EXadls6hUQHYfi%2F8U0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOblrq1eOGKNAzAbSSrcA92vbAD%2FeBZVYacL4Fx3YpudikVL%2BjyNGeDpOb%2Fb7WnkJsLVkMyG09GNx6lKZzFH%2BcLekoal6uggpIqnyDWZXz9E2VONZ%2Fd9hvkHZpinm9%2BUd4cqqnikqOB2gbwSXjAKLCLqkg7vBym4Jy94bdQqt5rngZBv%2FqixSLKiJcs9AmHrPCsJNS%2FfbSBx7lX%2BPCH8V9N3PKU0w6FitCYYPBGOk1pQZ1skgK73Wiz%2BZ6O4hC7TAG1q7j87X96g1nfcVtScAntXp5jas8gab%2FeaLoSx6cWJIrcIJ9Q7HHydqViLooh7nbPvMo67Z3db%2By0jUDeduag7H4XzwnPrtxrsTSUUAEuQLxnVW5bFnS4j6JVTJ56guxqlLONls7OkhGDYNV9nHE4%2BKeGvxC3UsR%2FZIygzlNWfSyUUBlLcHDMJKFpGlrO4zX4VP44A9e3ON24ZRTxkJFW9ohDIrwl83p%2Bh2nAPO%2BF1hmQbgHO5xMH%2BEiDeqOTOclv8inHybwvNZ4COjEzzaNK72DTHiYwcY%2FcWRwRnVUHT2hdXZjyNqRTwMbub%2FXYxoRFdBMQT8T7wKW9MVgNUzjsRDjXzTgbGO%2F0ehdms%2BeUgFfdEJGxR2NmKxfmOhTDf04Epnq0MwSHygGltMPLrqcIGOqUBwGVwlCznqWBUoCotpkbBXkLT9fo18Y3DFiXXflb8ILv9mYgM1IcEx7hPSR9wkwMimgYwvPExWOn3l%2B9F5DDbTvDlxmXJPxk5WhoJHA3NHKDfzon62o3yllDUr1sI6Hb%2B1nhVx4TjT%2FCfMzHLtJmlSk8EwkcCLAZ6SEubMQXEGEc2NIvNzHwU%2Fwb0YbYsXm4lCT8Bdy2vhqIk%2FISg3OYPuKTOT%2FwD&X-Amz-Signature=a9fcc3e6a05b6653aedea79fa2ddc4caf1c3489e63b22357075c899e6c83e3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
