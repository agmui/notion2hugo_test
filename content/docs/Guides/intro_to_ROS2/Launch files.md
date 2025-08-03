---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQTTGIT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXYYJpNiyuRIZnn4xjmR%2Bm7W2p6yA%2FZYIMc9UNrWnWQIgW07qOFFcdb5I2D%2BhBh8R9duDzUkoXZnTbXhzsZhsJXEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIZyOgG5gFwyUX6tPyrcAyvVvkrYvxSI%2Fh2fLw6pEkVhL5YaB6JLsl24pkYKKk%2FzBeN%2FXXGZhcgWhE63Ee9oGGAEyYdqu5zdPMlWIK6WN8qPjlRmD5UNpBxQZF7htQ2bqMj3IiYAIIrfbkA2pjWpymaqulbf66SaBTUZdP3A%2FUWujP7Og3ExItwiTxrjp5ycyPrTv9vaTFfftXwIU31xvPxCO5CnhZyEmifpCIN9UmwrdjcdWurO1ipRLLt%2FQH5TVSpEAAVRnrzu9ZkmAuS9b%2BFcwxMPOUd%2BtD2iLClfUFCJz4%2Bt3w9ROCeZvfl3j3dUvcTN9hgtvqrj%2Bb26cEn2lTzA6NZjPlyE4o%2FLF%2BHVcmEsq%2Fcjpw11e3u62b7O75qS%2Bj98z9Eu4KFehYs%2FDTKxCABC25Uwo5m1uQu1bufUbzTN9ulCQSRtE2t1Muu8HOgUbTjj6b0xosE9V9wYzH3D8Dpx1zxn1UWsNajLFj8ozhDQPyw62F8n%2Bet641FrS0cjpwJmZk6fs3ig5yHCzn77A6gcTcKVK2yUPzgo5X9BH5KdXDIbdXN5qTPoC6gjt2I8j8K09eZ7reh3DinSOvrigVwyEGYnUdeeAKQmuo%2FTp9qV%2BFHr09Y3DcESGmx5qtNi6hk6JUVtvuiLthRqMPKqvsQGOqUB3mQMvEoiwtgC%2Bh5uPtKLpuY8NsYoRdhuT%2BvYpnYacSCAVl3H9kb9IrPpiHwjdr3AGWa%2F3r2OHftScSYNPhyH7DtuAnOKbdkE5qfb5SJnLW4F5KprK4edVk4XnqynOoOxVhieKvvZOWN2ZggeteDVdS%2F5yYW5lZhRVd6upIKqyBlTC54iJaPuxpv%2Bf6C0xA6iozcuIUfH3SReR4%2F1UN8Rssy4jcK7&X-Amz-Signature=ccd58f999d05270608ceaa73256636acc3fc6719650f79af37d5b0bbf495b3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQTTGIT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXYYJpNiyuRIZnn4xjmR%2Bm7W2p6yA%2FZYIMc9UNrWnWQIgW07qOFFcdb5I2D%2BhBh8R9duDzUkoXZnTbXhzsZhsJXEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIZyOgG5gFwyUX6tPyrcAyvVvkrYvxSI%2Fh2fLw6pEkVhL5YaB6JLsl24pkYKKk%2FzBeN%2FXXGZhcgWhE63Ee9oGGAEyYdqu5zdPMlWIK6WN8qPjlRmD5UNpBxQZF7htQ2bqMj3IiYAIIrfbkA2pjWpymaqulbf66SaBTUZdP3A%2FUWujP7Og3ExItwiTxrjp5ycyPrTv9vaTFfftXwIU31xvPxCO5CnhZyEmifpCIN9UmwrdjcdWurO1ipRLLt%2FQH5TVSpEAAVRnrzu9ZkmAuS9b%2BFcwxMPOUd%2BtD2iLClfUFCJz4%2Bt3w9ROCeZvfl3j3dUvcTN9hgtvqrj%2Bb26cEn2lTzA6NZjPlyE4o%2FLF%2BHVcmEsq%2Fcjpw11e3u62b7O75qS%2Bj98z9Eu4KFehYs%2FDTKxCABC25Uwo5m1uQu1bufUbzTN9ulCQSRtE2t1Muu8HOgUbTjj6b0xosE9V9wYzH3D8Dpx1zxn1UWsNajLFj8ozhDQPyw62F8n%2Bet641FrS0cjpwJmZk6fs3ig5yHCzn77A6gcTcKVK2yUPzgo5X9BH5KdXDIbdXN5qTPoC6gjt2I8j8K09eZ7reh3DinSOvrigVwyEGYnUdeeAKQmuo%2FTp9qV%2BFHr09Y3DcESGmx5qtNi6hk6JUVtvuiLthRqMPKqvsQGOqUB3mQMvEoiwtgC%2Bh5uPtKLpuY8NsYoRdhuT%2BvYpnYacSCAVl3H9kb9IrPpiHwjdr3AGWa%2F3r2OHftScSYNPhyH7DtuAnOKbdkE5qfb5SJnLW4F5KprK4edVk4XnqynOoOxVhieKvvZOWN2ZggeteDVdS%2F5yYW5lZhRVd6upIKqyBlTC54iJaPuxpv%2Bf6C0xA6iozcuIUfH3SReR4%2F1UN8Rssy4jcK7&X-Amz-Signature=627dc9f4b75d143ef8b5107b390b0b4c078ef307f8936c6a68adbbc96b58d02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQTTGIT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXYYJpNiyuRIZnn4xjmR%2Bm7W2p6yA%2FZYIMc9UNrWnWQIgW07qOFFcdb5I2D%2BhBh8R9duDzUkoXZnTbXhzsZhsJXEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIZyOgG5gFwyUX6tPyrcAyvVvkrYvxSI%2Fh2fLw6pEkVhL5YaB6JLsl24pkYKKk%2FzBeN%2FXXGZhcgWhE63Ee9oGGAEyYdqu5zdPMlWIK6WN8qPjlRmD5UNpBxQZF7htQ2bqMj3IiYAIIrfbkA2pjWpymaqulbf66SaBTUZdP3A%2FUWujP7Og3ExItwiTxrjp5ycyPrTv9vaTFfftXwIU31xvPxCO5CnhZyEmifpCIN9UmwrdjcdWurO1ipRLLt%2FQH5TVSpEAAVRnrzu9ZkmAuS9b%2BFcwxMPOUd%2BtD2iLClfUFCJz4%2Bt3w9ROCeZvfl3j3dUvcTN9hgtvqrj%2Bb26cEn2lTzA6NZjPlyE4o%2FLF%2BHVcmEsq%2Fcjpw11e3u62b7O75qS%2Bj98z9Eu4KFehYs%2FDTKxCABC25Uwo5m1uQu1bufUbzTN9ulCQSRtE2t1Muu8HOgUbTjj6b0xosE9V9wYzH3D8Dpx1zxn1UWsNajLFj8ozhDQPyw62F8n%2Bet641FrS0cjpwJmZk6fs3ig5yHCzn77A6gcTcKVK2yUPzgo5X9BH5KdXDIbdXN5qTPoC6gjt2I8j8K09eZ7reh3DinSOvrigVwyEGYnUdeeAKQmuo%2FTp9qV%2BFHr09Y3DcESGmx5qtNi6hk6JUVtvuiLthRqMPKqvsQGOqUB3mQMvEoiwtgC%2Bh5uPtKLpuY8NsYoRdhuT%2BvYpnYacSCAVl3H9kb9IrPpiHwjdr3AGWa%2F3r2OHftScSYNPhyH7DtuAnOKbdkE5qfb5SJnLW4F5KprK4edVk4XnqynOoOxVhieKvvZOWN2ZggeteDVdS%2F5yYW5lZhRVd6upIKqyBlTC54iJaPuxpv%2Bf6C0xA6iozcuIUfH3SReR4%2F1UN8Rssy4jcK7&X-Amz-Signature=0ddf7e11b921f347edb7513d88ef613e01aaaa14e0bde227e52a539c4b795140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
