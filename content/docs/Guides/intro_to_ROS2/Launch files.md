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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPSRNMY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIC2alnuWlg5iImReaPkcELd2PfXUwnTpKWgBsrukQqZ6AiBOtE5vmVxUMOx1ZSM1OV3oT2tS%2Bm8Eb%2FVU8aL9pqkUYyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMJqCu187Yfu6scrV9KtwDsnrvbpfRG7FvOWALaoyU0pUtBEAcacTSQ47npOureEwSo%2B0csRIWDzBG2UeQn3jQrgZy%2FpFgMhDmEpb472DNUIFfGUnBMS41mJF9W7N3GY1c%2F5vEkWJbXar4iyU6QnycQavkCXPThNn2mhe0RAYviPUfGG3vegBeY8IIN4QdGArtRLSrQG9etAul4u2%2Fn1LcGZPz7mwSQT7UiX5bkVn27lRK2bliEk9kwnUO8D2sHIUZzMrREoBM1YXKKSJF8gDMENSMDt%2BVxK5uixS5UXCj6B%2BAdQUnoVRVOcpf0F93dci2uO7kspBpTSRPCgXdwkomYURxg6DlVmZszgEjf%2FMyT7svjfBwzw%2BDo%2BggEKFrXXb279mJmgt23OrS0eXWkDnJG01t9fR%2FxIcFgzpU6ZD4YJzS7ld0OjUcxLNm81VQW6MVMQxgsXLXiIXmelK77JQZYPAug5oG1ECHrYxsxfkVE0YJ7pdrBGfRM2oU3NZevHOU07%2B0Lv1DsqPcCn9SBCCeOXnjcUvpIk5LHqcCdxMGfelu9Y0TGyIAnZLoOynNPwYTc6AvLNRzMeEeB5TS9Rbc1LKLAakVefwDMDmXudqMHAypX6j%2FK5tZ%2B2k5J7fRY5fSvKBSoM7VEHeScBYwua6CwgY6pgEN3ibk%2F9dUll8xOC5AAD5yA2C0zb4bUdRyRZAiqW2%2F7m3tUyrNdbsRpZIFkmrwUEATyNghRS2cOQSgf%2FSeSjJ5IOWtBMQ1P9hCKa2egyCUxzf9kW%2FvmwXoO0ERuD7MIvFgW2BA%2B12cUrtotbgA94EXeRMsRaBLyZnvF3jha%2B2VbHgrIXBRfGXf8xt%2FP%2BI2romeomAa%2BTZQZZ%2FVEXByUkqAAVVDAorU&X-Amz-Signature=bba20f0986927fec751389cdd7661df2d779a6e9a2d9796b897bc48db5b6edd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPSRNMY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIC2alnuWlg5iImReaPkcELd2PfXUwnTpKWgBsrukQqZ6AiBOtE5vmVxUMOx1ZSM1OV3oT2tS%2Bm8Eb%2FVU8aL9pqkUYyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMJqCu187Yfu6scrV9KtwDsnrvbpfRG7FvOWALaoyU0pUtBEAcacTSQ47npOureEwSo%2B0csRIWDzBG2UeQn3jQrgZy%2FpFgMhDmEpb472DNUIFfGUnBMS41mJF9W7N3GY1c%2F5vEkWJbXar4iyU6QnycQavkCXPThNn2mhe0RAYviPUfGG3vegBeY8IIN4QdGArtRLSrQG9etAul4u2%2Fn1LcGZPz7mwSQT7UiX5bkVn27lRK2bliEk9kwnUO8D2sHIUZzMrREoBM1YXKKSJF8gDMENSMDt%2BVxK5uixS5UXCj6B%2BAdQUnoVRVOcpf0F93dci2uO7kspBpTSRPCgXdwkomYURxg6DlVmZszgEjf%2FMyT7svjfBwzw%2BDo%2BggEKFrXXb279mJmgt23OrS0eXWkDnJG01t9fR%2FxIcFgzpU6ZD4YJzS7ld0OjUcxLNm81VQW6MVMQxgsXLXiIXmelK77JQZYPAug5oG1ECHrYxsxfkVE0YJ7pdrBGfRM2oU3NZevHOU07%2B0Lv1DsqPcCn9SBCCeOXnjcUvpIk5LHqcCdxMGfelu9Y0TGyIAnZLoOynNPwYTc6AvLNRzMeEeB5TS9Rbc1LKLAakVefwDMDmXudqMHAypX6j%2FK5tZ%2B2k5J7fRY5fSvKBSoM7VEHeScBYwua6CwgY6pgEN3ibk%2F9dUll8xOC5AAD5yA2C0zb4bUdRyRZAiqW2%2F7m3tUyrNdbsRpZIFkmrwUEATyNghRS2cOQSgf%2FSeSjJ5IOWtBMQ1P9hCKa2egyCUxzf9kW%2FvmwXoO0ERuD7MIvFgW2BA%2B12cUrtotbgA94EXeRMsRaBLyZnvF3jha%2B2VbHgrIXBRfGXf8xt%2FP%2BI2romeomAa%2BTZQZZ%2FVEXByUkqAAVVDAorU&X-Amz-Signature=e988095ace484b670397646260996e00e171686f579703ad3f793344616aa708&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPSRNMY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIC2alnuWlg5iImReaPkcELd2PfXUwnTpKWgBsrukQqZ6AiBOtE5vmVxUMOx1ZSM1OV3oT2tS%2Bm8Eb%2FVU8aL9pqkUYyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMJqCu187Yfu6scrV9KtwDsnrvbpfRG7FvOWALaoyU0pUtBEAcacTSQ47npOureEwSo%2B0csRIWDzBG2UeQn3jQrgZy%2FpFgMhDmEpb472DNUIFfGUnBMS41mJF9W7N3GY1c%2F5vEkWJbXar4iyU6QnycQavkCXPThNn2mhe0RAYviPUfGG3vegBeY8IIN4QdGArtRLSrQG9etAul4u2%2Fn1LcGZPz7mwSQT7UiX5bkVn27lRK2bliEk9kwnUO8D2sHIUZzMrREoBM1YXKKSJF8gDMENSMDt%2BVxK5uixS5UXCj6B%2BAdQUnoVRVOcpf0F93dci2uO7kspBpTSRPCgXdwkomYURxg6DlVmZszgEjf%2FMyT7svjfBwzw%2BDo%2BggEKFrXXb279mJmgt23OrS0eXWkDnJG01t9fR%2FxIcFgzpU6ZD4YJzS7ld0OjUcxLNm81VQW6MVMQxgsXLXiIXmelK77JQZYPAug5oG1ECHrYxsxfkVE0YJ7pdrBGfRM2oU3NZevHOU07%2B0Lv1DsqPcCn9SBCCeOXnjcUvpIk5LHqcCdxMGfelu9Y0TGyIAnZLoOynNPwYTc6AvLNRzMeEeB5TS9Rbc1LKLAakVefwDMDmXudqMHAypX6j%2FK5tZ%2B2k5J7fRY5fSvKBSoM7VEHeScBYwua6CwgY6pgEN3ibk%2F9dUll8xOC5AAD5yA2C0zb4bUdRyRZAiqW2%2F7m3tUyrNdbsRpZIFkmrwUEATyNghRS2cOQSgf%2FSeSjJ5IOWtBMQ1P9hCKa2egyCUxzf9kW%2FvmwXoO0ERuD7MIvFgW2BA%2B12cUrtotbgA94EXeRMsRaBLyZnvF3jha%2B2VbHgrIXBRfGXf8xt%2FP%2BI2romeomAa%2BTZQZZ%2FVEXByUkqAAVVDAorU&X-Amz-Signature=d04175a34ab819a886f28086c6558d5de896a39025e2cd105e55d54195bb5a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
