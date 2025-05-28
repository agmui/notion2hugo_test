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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJPPQ6Q%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNQwInTHwMw14i1SeLMffRAESKBVUUAqXrXqJU09irMQIgWkT%2F56%2F0QasuS9wdZbcgwxWcHJCdB7dSrzr28gkkXQgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIEHwrlrP7oQ3PK18ircA2ZlQrmCBqT6SqgqLynvIX2%2F4E1fzwQiNIKFTHoCLWg0aHP6dqZ%2Brc%2F%2FheBHccJzsmCbnWczqD%2B40HiGFFLF4T%2BwzSV25PxMyahpedShgr6vKai%2FvtQBHvL4HuW5O04qyCBHKrHbIzCMKKVJCUeDCnt3z7yBMq5VTZBv99xRoU3tVVhApHTsOBQOwQA61pxN9qLt52XGlMDG6BxOz5edJ%2FiYHQmtgT8G2tbN66J9LQW%2FxzaeuNBCnJnPDlZ00u49KbIeL0YxGVFoRs80GWQTFiPQdr1Bhfmhr1ZmQ%2BUxF43R9rAiYcJJdWuRXxmrRhVgm9dUF7Pcs5%2BLkFpsyiX1uVZOK%2B3v80w23zSpIm5KnBDdItXIcjvJewgq7FguZiTotM0lEUnUMaE8e%2FodidO2CcjEusHFiTB3YPcOmFlCjLq3eBPpj7PC2U3XZhD%2FfLSqxMu2hpQZeNX84xUvc%2FMtuLcyPU7%2FH9nzUL3sfi0IMftxrou3f1y7WUYYFXqTwZoy201rhcDuhiIXN4wfjLTcRGmEDeIRQyv05dPL5Squek0bbypGD2Nku%2B2EA%2Fx5jJ7aVODhMi3xqkXFkrxf1na%2FOLIe7ZsOTRqQCo4RMm4zAS9Kd912nkqfggcKSNolMJD43MEGOqUB5Bxce4WM41%2BROW%2FdWCYxGoRZlRMlLKzGieDjSeDgKNRVAg6Yuv0uRAI%2BqWBWF5N6gqAmeWBil1uN9ofMuYHxGljGPHL7xrl7xyCYyVNOEB96U5JUe2gPwgZ21%2Fj9ZLOjd6RoTuciPEj7arneugPN3Q2A89XIK%2B5oDBtoSlERrTYc%2BlEna%2FaUXK%2FwSuKenxvDYu5iD2KVNXhwhvCaHtDf0kvPc2df&X-Amz-Signature=694e803d33b632d51e61aa562cc732f452b52344fdbcbd57fa502cf113579f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJPPQ6Q%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNQwInTHwMw14i1SeLMffRAESKBVUUAqXrXqJU09irMQIgWkT%2F56%2F0QasuS9wdZbcgwxWcHJCdB7dSrzr28gkkXQgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIEHwrlrP7oQ3PK18ircA2ZlQrmCBqT6SqgqLynvIX2%2F4E1fzwQiNIKFTHoCLWg0aHP6dqZ%2Brc%2F%2FheBHccJzsmCbnWczqD%2B40HiGFFLF4T%2BwzSV25PxMyahpedShgr6vKai%2FvtQBHvL4HuW5O04qyCBHKrHbIzCMKKVJCUeDCnt3z7yBMq5VTZBv99xRoU3tVVhApHTsOBQOwQA61pxN9qLt52XGlMDG6BxOz5edJ%2FiYHQmtgT8G2tbN66J9LQW%2FxzaeuNBCnJnPDlZ00u49KbIeL0YxGVFoRs80GWQTFiPQdr1Bhfmhr1ZmQ%2BUxF43R9rAiYcJJdWuRXxmrRhVgm9dUF7Pcs5%2BLkFpsyiX1uVZOK%2B3v80w23zSpIm5KnBDdItXIcjvJewgq7FguZiTotM0lEUnUMaE8e%2FodidO2CcjEusHFiTB3YPcOmFlCjLq3eBPpj7PC2U3XZhD%2FfLSqxMu2hpQZeNX84xUvc%2FMtuLcyPU7%2FH9nzUL3sfi0IMftxrou3f1y7WUYYFXqTwZoy201rhcDuhiIXN4wfjLTcRGmEDeIRQyv05dPL5Squek0bbypGD2Nku%2B2EA%2Fx5jJ7aVODhMi3xqkXFkrxf1na%2FOLIe7ZsOTRqQCo4RMm4zAS9Kd912nkqfggcKSNolMJD43MEGOqUB5Bxce4WM41%2BROW%2FdWCYxGoRZlRMlLKzGieDjSeDgKNRVAg6Yuv0uRAI%2BqWBWF5N6gqAmeWBil1uN9ofMuYHxGljGPHL7xrl7xyCYyVNOEB96U5JUe2gPwgZ21%2Fj9ZLOjd6RoTuciPEj7arneugPN3Q2A89XIK%2B5oDBtoSlERrTYc%2BlEna%2FaUXK%2FwSuKenxvDYu5iD2KVNXhwhvCaHtDf0kvPc2df&X-Amz-Signature=ba794280db5effd44ce042c4c26546d01ad3b4fe5c4913a67a50a87fb2469589&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJPPQ6Q%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNQwInTHwMw14i1SeLMffRAESKBVUUAqXrXqJU09irMQIgWkT%2F56%2F0QasuS9wdZbcgwxWcHJCdB7dSrzr28gkkXQgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIEHwrlrP7oQ3PK18ircA2ZlQrmCBqT6SqgqLynvIX2%2F4E1fzwQiNIKFTHoCLWg0aHP6dqZ%2Brc%2F%2FheBHccJzsmCbnWczqD%2B40HiGFFLF4T%2BwzSV25PxMyahpedShgr6vKai%2FvtQBHvL4HuW5O04qyCBHKrHbIzCMKKVJCUeDCnt3z7yBMq5VTZBv99xRoU3tVVhApHTsOBQOwQA61pxN9qLt52XGlMDG6BxOz5edJ%2FiYHQmtgT8G2tbN66J9LQW%2FxzaeuNBCnJnPDlZ00u49KbIeL0YxGVFoRs80GWQTFiPQdr1Bhfmhr1ZmQ%2BUxF43R9rAiYcJJdWuRXxmrRhVgm9dUF7Pcs5%2BLkFpsyiX1uVZOK%2B3v80w23zSpIm5KnBDdItXIcjvJewgq7FguZiTotM0lEUnUMaE8e%2FodidO2CcjEusHFiTB3YPcOmFlCjLq3eBPpj7PC2U3XZhD%2FfLSqxMu2hpQZeNX84xUvc%2FMtuLcyPU7%2FH9nzUL3sfi0IMftxrou3f1y7WUYYFXqTwZoy201rhcDuhiIXN4wfjLTcRGmEDeIRQyv05dPL5Squek0bbypGD2Nku%2B2EA%2Fx5jJ7aVODhMi3xqkXFkrxf1na%2FOLIe7ZsOTRqQCo4RMm4zAS9Kd912nkqfggcKSNolMJD43MEGOqUB5Bxce4WM41%2BROW%2FdWCYxGoRZlRMlLKzGieDjSeDgKNRVAg6Yuv0uRAI%2BqWBWF5N6gqAmeWBil1uN9ofMuYHxGljGPHL7xrl7xyCYyVNOEB96U5JUe2gPwgZ21%2Fj9ZLOjd6RoTuciPEj7arneugPN3Q2A89XIK%2B5oDBtoSlERrTYc%2BlEna%2FaUXK%2FwSuKenxvDYu5iD2KVNXhwhvCaHtDf0kvPc2df&X-Amz-Signature=ff6d6d0178dbdcca3b27244af26f07a5b03f6e934fd55b4d309780d5fb32a6af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
