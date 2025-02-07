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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HH3TR2I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG8CQW4mbyHzW5e%2F5QajekhPKQYCvNA5cZxy0TvfMo5dAiEA4pt4U%2Bvcg8uNNac7Xz9oMRI%2FaaLbSJPHJcrZZkI1qLcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFVf4muRWvI1jLUFtyrcAzAVTxFQJ6bDBGRDY1oYkkqBK3UQOZ%2Bwcg3hWkBD9tO8%2FpI3m%2FJGqq%2Fqf2PffSNew5CLaeTA8fbduc5GQ%2F0NCR9Yuya6aT%2FXDWp8WwjpAd2eKWmVjUGius80nB7oLdTMbrEh%2FF8%2FCz7PO7jKhmcFg4QvdO1%2FK2olLfYle%2F18UTXepB8xfE3VYYpytm09a5kxrAAtTJo2%2BXLcxrN47G2fBfqtoQUJzRdME3eTlpQorRUyD1kA1HxjG%2BywTBPd39iUxbpKHyUHf1c3%2F4X5Q2XqXXJsScFKfzr9UG4kGRT6lhLPOlFlbzkA84bzstun9AoIjtgHJ3I433C0GXuqhaGTJh8kMb3XbhunnyycsNE6%2B9EwpqCfWMZC0qSGHfjB58szr7dWhExP3O7uS4Rl6clAZIuc%2BQzqCWDUKzDTSoa%2Fgj04%2BXRLuWks5PjOslCaVLAQipMQe7xalPqnAWiml98ptEtszNppgLVhlLzkWOGGQ3bpzJsX8U5eeM0927IBdZNllYvE92%2FEpZNZ6aMssNU5pb%2B5Z%2BOBvi1DsW2mtSrqo7Up7OzN7dvhElL%2BN6lNP%2BLSE4mUb5C0Tqr8%2FNsL3zd75mawC869BrmLjUOzlSwuIstALH1yHtO6cUUGUpkNMK6MmL0GOqUBOMHu%2Byu5RDglM77O7B7Xymy96opnalHaJmmIzkSNAXtnS0feLfa%2BJl1T0nv%2BzuC3tPMrNlGfzE2sW52HrbVyOqYZRfa16StLIkDCVOfZxb%2BbJ4Fd7qJn%2Bi9LVhEMUo6oRkMDvwXNuDrHV4PdCdaWBaZlK211fnO%2Bym1wpQzAXVmfdFSt5oS1HV4UFVSocRfeFn5vBSDgLp2GamRF21ngVohHpTKn&X-Amz-Signature=17d914d5fac9e447711782ec34f214fbf358ac9a98b45364efd7e2ecef2c7f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HH3TR2I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG8CQW4mbyHzW5e%2F5QajekhPKQYCvNA5cZxy0TvfMo5dAiEA4pt4U%2Bvcg8uNNac7Xz9oMRI%2FaaLbSJPHJcrZZkI1qLcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFVf4muRWvI1jLUFtyrcAzAVTxFQJ6bDBGRDY1oYkkqBK3UQOZ%2Bwcg3hWkBD9tO8%2FpI3m%2FJGqq%2Fqf2PffSNew5CLaeTA8fbduc5GQ%2F0NCR9Yuya6aT%2FXDWp8WwjpAd2eKWmVjUGius80nB7oLdTMbrEh%2FF8%2FCz7PO7jKhmcFg4QvdO1%2FK2olLfYle%2F18UTXepB8xfE3VYYpytm09a5kxrAAtTJo2%2BXLcxrN47G2fBfqtoQUJzRdME3eTlpQorRUyD1kA1HxjG%2BywTBPd39iUxbpKHyUHf1c3%2F4X5Q2XqXXJsScFKfzr9UG4kGRT6lhLPOlFlbzkA84bzstun9AoIjtgHJ3I433C0GXuqhaGTJh8kMb3XbhunnyycsNE6%2B9EwpqCfWMZC0qSGHfjB58szr7dWhExP3O7uS4Rl6clAZIuc%2BQzqCWDUKzDTSoa%2Fgj04%2BXRLuWks5PjOslCaVLAQipMQe7xalPqnAWiml98ptEtszNppgLVhlLzkWOGGQ3bpzJsX8U5eeM0927IBdZNllYvE92%2FEpZNZ6aMssNU5pb%2B5Z%2BOBvi1DsW2mtSrqo7Up7OzN7dvhElL%2BN6lNP%2BLSE4mUb5C0Tqr8%2FNsL3zd75mawC869BrmLjUOzlSwuIstALH1yHtO6cUUGUpkNMK6MmL0GOqUBOMHu%2Byu5RDglM77O7B7Xymy96opnalHaJmmIzkSNAXtnS0feLfa%2BJl1T0nv%2BzuC3tPMrNlGfzE2sW52HrbVyOqYZRfa16StLIkDCVOfZxb%2BbJ4Fd7qJn%2Bi9LVhEMUo6oRkMDvwXNuDrHV4PdCdaWBaZlK211fnO%2Bym1wpQzAXVmfdFSt5oS1HV4UFVSocRfeFn5vBSDgLp2GamRF21ngVohHpTKn&X-Amz-Signature=6af58d023b87d5800a8d36514c2aa9067e448798bb66a952e3d1599d187ae9c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HH3TR2I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIG8CQW4mbyHzW5e%2F5QajekhPKQYCvNA5cZxy0TvfMo5dAiEA4pt4U%2Bvcg8uNNac7Xz9oMRI%2FaaLbSJPHJcrZZkI1qLcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFVf4muRWvI1jLUFtyrcAzAVTxFQJ6bDBGRDY1oYkkqBK3UQOZ%2Bwcg3hWkBD9tO8%2FpI3m%2FJGqq%2Fqf2PffSNew5CLaeTA8fbduc5GQ%2F0NCR9Yuya6aT%2FXDWp8WwjpAd2eKWmVjUGius80nB7oLdTMbrEh%2FF8%2FCz7PO7jKhmcFg4QvdO1%2FK2olLfYle%2F18UTXepB8xfE3VYYpytm09a5kxrAAtTJo2%2BXLcxrN47G2fBfqtoQUJzRdME3eTlpQorRUyD1kA1HxjG%2BywTBPd39iUxbpKHyUHf1c3%2F4X5Q2XqXXJsScFKfzr9UG4kGRT6lhLPOlFlbzkA84bzstun9AoIjtgHJ3I433C0GXuqhaGTJh8kMb3XbhunnyycsNE6%2B9EwpqCfWMZC0qSGHfjB58szr7dWhExP3O7uS4Rl6clAZIuc%2BQzqCWDUKzDTSoa%2Fgj04%2BXRLuWks5PjOslCaVLAQipMQe7xalPqnAWiml98ptEtszNppgLVhlLzkWOGGQ3bpzJsX8U5eeM0927IBdZNllYvE92%2FEpZNZ6aMssNU5pb%2B5Z%2BOBvi1DsW2mtSrqo7Up7OzN7dvhElL%2BN6lNP%2BLSE4mUb5C0Tqr8%2FNsL3zd75mawC869BrmLjUOzlSwuIstALH1yHtO6cUUGUpkNMK6MmL0GOqUBOMHu%2Byu5RDglM77O7B7Xymy96opnalHaJmmIzkSNAXtnS0feLfa%2BJl1T0nv%2BzuC3tPMrNlGfzE2sW52HrbVyOqYZRfa16StLIkDCVOfZxb%2BbJ4Fd7qJn%2Bi9LVhEMUo6oRkMDvwXNuDrHV4PdCdaWBaZlK211fnO%2Bym1wpQzAXVmfdFSt5oS1HV4UFVSocRfeFn5vBSDgLp2GamRF21ngVohHpTKn&X-Amz-Signature=a6def546063655e06bb009dd89f6ab1e16bd84d130b55e17f4dcf39896d820a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
