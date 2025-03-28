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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGQ7ETP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu4MoPa6X8wrVMyAXSjRzoc0PO8mfwOPYfDBiRWZ6u7gIgMZb6JuluEqeVai3CTIYlAxN%2FdmhMRZOHreYZGQRCfbUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNaR8kDZeykBmN9kByrcA%2FMVjEKVFTWKxMNzpU%2FegLJr3BrJJFf6lqu78EDTZ2YvWLXPQ5um7x2ezjp6R2IxlysbvYUE6BNqFaWYq0gcO0VISkTdPPehT4ig7lE3ihT4Mur3vxVb31Clre15KVbgr%2BNGxk0GY54k0ai0sBWM8F9WnxIokxWRMbuPKuE3lxwUedRaOL8RgS9UYN2ZSDDVrEaKyYxdKouPvENt9AOrvyhzhLoecJCCEqP698SSHW2Sx7rVIMSzO7k%2BJN1YPCfYfr8ed3uLPL0fXmX2CuKnMLtNC%2BI%2FwEMpccGymoV9mAVg%2FYc9YcnFDgJ1LO8M55U1KJ%2Fe84J0YFPTtE8rDOWDf3%2FkvCRrktgHiYVeuHDIay2vyZcAbqDeaCem0CAT7OKLvRb6GDU4ztV3DvLj8r%2FzqnVf%2FIPyUkheYYJ14PfrWS9vkVEku1fRhULJs8BT7BKgdgXkPXsjNp9EcWVcoN2G3aCgCTJnMsOQTyymG3f5l61f2gXMPhma6tB8dYLkn9eGJIir9Km8v65xM5Ai%2F16oOO6DaAnJ3E2GBEEAEqZymlTp%2B1JOSDUfAj2A5UoEnx69ffpZ%2FKuAoFn1O2uD0SfYy1n1Pns6r1ZQX1WhWmUcN1e1XXPYCvn5MpzRWnmXMPLQmr8GOqUB39O57c5Laq%2FCZ2bwdG9F75fASKNIlK0hLpK0zt7nGkRCkO8IWfkzMCSI1cO3%2BDS2at2cYHwxBF5tlDCG7XoecT5BIcGbUiIPIn1R7jgulIvVW%2FX6b7sXRYeYZOPD5ba4Am%2BVOY5BQNnzssvDGyV3woyKM5zrZjl2cfqBxfWGLnLguQ2MMSfwE3t6TJ3venHvAgjCWqN4yGUeRYtmynwnkvUOzsGg&X-Amz-Signature=2832456be28867b3e70884cf136b23c5453c7102c2ff3e8a4930ba228225e73f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGQ7ETP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu4MoPa6X8wrVMyAXSjRzoc0PO8mfwOPYfDBiRWZ6u7gIgMZb6JuluEqeVai3CTIYlAxN%2FdmhMRZOHreYZGQRCfbUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNaR8kDZeykBmN9kByrcA%2FMVjEKVFTWKxMNzpU%2FegLJr3BrJJFf6lqu78EDTZ2YvWLXPQ5um7x2ezjp6R2IxlysbvYUE6BNqFaWYq0gcO0VISkTdPPehT4ig7lE3ihT4Mur3vxVb31Clre15KVbgr%2BNGxk0GY54k0ai0sBWM8F9WnxIokxWRMbuPKuE3lxwUedRaOL8RgS9UYN2ZSDDVrEaKyYxdKouPvENt9AOrvyhzhLoecJCCEqP698SSHW2Sx7rVIMSzO7k%2BJN1YPCfYfr8ed3uLPL0fXmX2CuKnMLtNC%2BI%2FwEMpccGymoV9mAVg%2FYc9YcnFDgJ1LO8M55U1KJ%2Fe84J0YFPTtE8rDOWDf3%2FkvCRrktgHiYVeuHDIay2vyZcAbqDeaCem0CAT7OKLvRb6GDU4ztV3DvLj8r%2FzqnVf%2FIPyUkheYYJ14PfrWS9vkVEku1fRhULJs8BT7BKgdgXkPXsjNp9EcWVcoN2G3aCgCTJnMsOQTyymG3f5l61f2gXMPhma6tB8dYLkn9eGJIir9Km8v65xM5Ai%2F16oOO6DaAnJ3E2GBEEAEqZymlTp%2B1JOSDUfAj2A5UoEnx69ffpZ%2FKuAoFn1O2uD0SfYy1n1Pns6r1ZQX1WhWmUcN1e1XXPYCvn5MpzRWnmXMPLQmr8GOqUB39O57c5Laq%2FCZ2bwdG9F75fASKNIlK0hLpK0zt7nGkRCkO8IWfkzMCSI1cO3%2BDS2at2cYHwxBF5tlDCG7XoecT5BIcGbUiIPIn1R7jgulIvVW%2FX6b7sXRYeYZOPD5ba4Am%2BVOY5BQNnzssvDGyV3woyKM5zrZjl2cfqBxfWGLnLguQ2MMSfwE3t6TJ3venHvAgjCWqN4yGUeRYtmynwnkvUOzsGg&X-Amz-Signature=5acd98e54ca4be42995efc8e33017ee40706b71e289180b7f06bdf6f1567914e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGQ7ETP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu4MoPa6X8wrVMyAXSjRzoc0PO8mfwOPYfDBiRWZ6u7gIgMZb6JuluEqeVai3CTIYlAxN%2FdmhMRZOHreYZGQRCfbUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNaR8kDZeykBmN9kByrcA%2FMVjEKVFTWKxMNzpU%2FegLJr3BrJJFf6lqu78EDTZ2YvWLXPQ5um7x2ezjp6R2IxlysbvYUE6BNqFaWYq0gcO0VISkTdPPehT4ig7lE3ihT4Mur3vxVb31Clre15KVbgr%2BNGxk0GY54k0ai0sBWM8F9WnxIokxWRMbuPKuE3lxwUedRaOL8RgS9UYN2ZSDDVrEaKyYxdKouPvENt9AOrvyhzhLoecJCCEqP698SSHW2Sx7rVIMSzO7k%2BJN1YPCfYfr8ed3uLPL0fXmX2CuKnMLtNC%2BI%2FwEMpccGymoV9mAVg%2FYc9YcnFDgJ1LO8M55U1KJ%2Fe84J0YFPTtE8rDOWDf3%2FkvCRrktgHiYVeuHDIay2vyZcAbqDeaCem0CAT7OKLvRb6GDU4ztV3DvLj8r%2FzqnVf%2FIPyUkheYYJ14PfrWS9vkVEku1fRhULJs8BT7BKgdgXkPXsjNp9EcWVcoN2G3aCgCTJnMsOQTyymG3f5l61f2gXMPhma6tB8dYLkn9eGJIir9Km8v65xM5Ai%2F16oOO6DaAnJ3E2GBEEAEqZymlTp%2B1JOSDUfAj2A5UoEnx69ffpZ%2FKuAoFn1O2uD0SfYy1n1Pns6r1ZQX1WhWmUcN1e1XXPYCvn5MpzRWnmXMPLQmr8GOqUB39O57c5Laq%2FCZ2bwdG9F75fASKNIlK0hLpK0zt7nGkRCkO8IWfkzMCSI1cO3%2BDS2at2cYHwxBF5tlDCG7XoecT5BIcGbUiIPIn1R7jgulIvVW%2FX6b7sXRYeYZOPD5ba4Am%2BVOY5BQNnzssvDGyV3woyKM5zrZjl2cfqBxfWGLnLguQ2MMSfwE3t6TJ3venHvAgjCWqN4yGUeRYtmynwnkvUOzsGg&X-Amz-Signature=b497fcb12e50a87970a27144e3eb8e5996e18bc22dd8e81c1a3dae917901f504&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
