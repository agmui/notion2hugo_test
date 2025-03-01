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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDWUQFQK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCMXwXY7wHKu4S1ck5mcC4fHM4TzVxtXFRPqx8QjWtK%2FwIga%2B%2BnWOgP2IEI8JKYGwXYF1lMiil%2BpPysvwMS1XjfkYAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC36Lnxva7tZfcSh7SrcAz8eL1%2FYuhN3t1S5QX%2BppKCojsTvEhCQus7DnmHMuvVz0YJAPK%2FDcuE4x5XT7RHtyDwTvHynsCZLjH7YT70EX39DlKaTILyGT7LtXTLRA%2BRuMPKSu0liPwsz0ow1Dm1QcQp5vq0Ig7EJqpxR2LTISTyyFJ%2FA%2BHD4ly1VUySx7WZf9mLD9q21Uxgi5VmDqvRpHKjsDY4WLOFdUPyE0fagDAeBfJfvRLvv1kJrWfn9MmIs5DxMGS21bNOCRctwiv%2F13hcwDaU%2BrSDkq9eekQqFRluQP18S7OqbKyn9fWHCPyu2QnZjsQIFOeTV%2Bd8nRWGPwTKN%2BOqlGU9ZOOfhC1QukJOhVs6ehpd2acL5PBHmq0AT7QNOWYY%2BI64AYdHeNEAd%2Bqhil%2FKHbR1ectzJCxbuF6X0KOMVUrDBwY1dwW%2BxiLKyazN4XIZn5gaBTpAat4m1%2FmS7Yoo03rJ3hhdd4mYS4RTqGiFiaFKPnuxZmcnbgwx4SAPZ%2BGBC%2F6P4gGQBzonQANs3syd0%2F5Aai35FwVxvX2PSpY%2B8Hl6laBZJLJ4TTrSsUjyDzuwZsx%2FRwnUqIRudrVDAmyEHThM80DLLh0%2Fy2DD95A2XtF5dOUPtP49Cnn9p5AjLh9qoamEzlntHMPSUjL4GOqUBW6NHC%2BpRRVG30H8QMvlH1gL4%2F%2Fcj8OYCn%2F9Ia9s02dlE1Wg0ifkUCSRm1IzDcC5QAu1v3%2F0C1ToPK1TkUt0hn3%2F673Phgm8terWRKJeVQtcvisux5yVkxEPFlCzhz1925Uqpw8oAzbWKPusmzagBRj8TUossbYYcKIpUt2oopykNlce2dS%2BysHKjMQzMqPzXjouH4iHfGZ2r90BfQsnr20sa6Bcy&X-Amz-Signature=89bd864b6e883a5f84e2dff06ca6310beb5ef142fdae9da70443bad611bc074b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDWUQFQK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCMXwXY7wHKu4S1ck5mcC4fHM4TzVxtXFRPqx8QjWtK%2FwIga%2B%2BnWOgP2IEI8JKYGwXYF1lMiil%2BpPysvwMS1XjfkYAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC36Lnxva7tZfcSh7SrcAz8eL1%2FYuhN3t1S5QX%2BppKCojsTvEhCQus7DnmHMuvVz0YJAPK%2FDcuE4x5XT7RHtyDwTvHynsCZLjH7YT70EX39DlKaTILyGT7LtXTLRA%2BRuMPKSu0liPwsz0ow1Dm1QcQp5vq0Ig7EJqpxR2LTISTyyFJ%2FA%2BHD4ly1VUySx7WZf9mLD9q21Uxgi5VmDqvRpHKjsDY4WLOFdUPyE0fagDAeBfJfvRLvv1kJrWfn9MmIs5DxMGS21bNOCRctwiv%2F13hcwDaU%2BrSDkq9eekQqFRluQP18S7OqbKyn9fWHCPyu2QnZjsQIFOeTV%2Bd8nRWGPwTKN%2BOqlGU9ZOOfhC1QukJOhVs6ehpd2acL5PBHmq0AT7QNOWYY%2BI64AYdHeNEAd%2Bqhil%2FKHbR1ectzJCxbuF6X0KOMVUrDBwY1dwW%2BxiLKyazN4XIZn5gaBTpAat4m1%2FmS7Yoo03rJ3hhdd4mYS4RTqGiFiaFKPnuxZmcnbgwx4SAPZ%2BGBC%2F6P4gGQBzonQANs3syd0%2F5Aai35FwVxvX2PSpY%2B8Hl6laBZJLJ4TTrSsUjyDzuwZsx%2FRwnUqIRudrVDAmyEHThM80DLLh0%2Fy2DD95A2XtF5dOUPtP49Cnn9p5AjLh9qoamEzlntHMPSUjL4GOqUBW6NHC%2BpRRVG30H8QMvlH1gL4%2F%2Fcj8OYCn%2F9Ia9s02dlE1Wg0ifkUCSRm1IzDcC5QAu1v3%2F0C1ToPK1TkUt0hn3%2F673Phgm8terWRKJeVQtcvisux5yVkxEPFlCzhz1925Uqpw8oAzbWKPusmzagBRj8TUossbYYcKIpUt2oopykNlce2dS%2BysHKjMQzMqPzXjouH4iHfGZ2r90BfQsnr20sa6Bcy&X-Amz-Signature=024563de3740db301561e08c76ece72b96ad0472ed8f62e02bbad80d039f06fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDWUQFQK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCMXwXY7wHKu4S1ck5mcC4fHM4TzVxtXFRPqx8QjWtK%2FwIga%2B%2BnWOgP2IEI8JKYGwXYF1lMiil%2BpPysvwMS1XjfkYAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC36Lnxva7tZfcSh7SrcAz8eL1%2FYuhN3t1S5QX%2BppKCojsTvEhCQus7DnmHMuvVz0YJAPK%2FDcuE4x5XT7RHtyDwTvHynsCZLjH7YT70EX39DlKaTILyGT7LtXTLRA%2BRuMPKSu0liPwsz0ow1Dm1QcQp5vq0Ig7EJqpxR2LTISTyyFJ%2FA%2BHD4ly1VUySx7WZf9mLD9q21Uxgi5VmDqvRpHKjsDY4WLOFdUPyE0fagDAeBfJfvRLvv1kJrWfn9MmIs5DxMGS21bNOCRctwiv%2F13hcwDaU%2BrSDkq9eekQqFRluQP18S7OqbKyn9fWHCPyu2QnZjsQIFOeTV%2Bd8nRWGPwTKN%2BOqlGU9ZOOfhC1QukJOhVs6ehpd2acL5PBHmq0AT7QNOWYY%2BI64AYdHeNEAd%2Bqhil%2FKHbR1ectzJCxbuF6X0KOMVUrDBwY1dwW%2BxiLKyazN4XIZn5gaBTpAat4m1%2FmS7Yoo03rJ3hhdd4mYS4RTqGiFiaFKPnuxZmcnbgwx4SAPZ%2BGBC%2F6P4gGQBzonQANs3syd0%2F5Aai35FwVxvX2PSpY%2B8Hl6laBZJLJ4TTrSsUjyDzuwZsx%2FRwnUqIRudrVDAmyEHThM80DLLh0%2Fy2DD95A2XtF5dOUPtP49Cnn9p5AjLh9qoamEzlntHMPSUjL4GOqUBW6NHC%2BpRRVG30H8QMvlH1gL4%2F%2Fcj8OYCn%2F9Ia9s02dlE1Wg0ifkUCSRm1IzDcC5QAu1v3%2F0C1ToPK1TkUt0hn3%2F673Phgm8terWRKJeVQtcvisux5yVkxEPFlCzhz1925Uqpw8oAzbWKPusmzagBRj8TUossbYYcKIpUt2oopykNlce2dS%2BysHKjMQzMqPzXjouH4iHfGZ2r90BfQsnr20sa6Bcy&X-Amz-Signature=808c3d2b5e4c7beb95f081ef0de70d24229144b453460bac357493d3729b80f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
