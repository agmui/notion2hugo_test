---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHH3AA4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBjXT5UOd%2FMEnCX98RpsOYcDsMg1ogoj836bHk7jBLVeAiEAoSJBWTmVe60%2BfCaKja%2Bk2rnraNrD3Cv4RfA3SkCPRUoqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEThRBXlXq12Wpb%2BGCrcA3A36zkR0Sh1v2oaG5cor06mUFY1WZ27bNuyAZ2UcHeOMI4FtS2KyJChtU7t4vFw7dDOjTOVt1notDZHkjTbaSOWEnmpWGqziyn6ResCiqpw558NIidjtnHmrlv5NBLX%2Bp4rPqUCwQV4IWsDNApvfAOV33fwxds2rPnCMu3FP5tpF0bvrmQc9f4pHnLHS4iSDUzA0KdnJBnffxlS4m91WOhn8vt1TgxV1LsIYHVQ%2BKWGTMzdKZK8FXekk1XBxhPn%2FhwepW2KaqFvaDDzYXhz0fPUhrLoch%2B%2F1CSjhb2I6oZwYAs5cN0C2JUbva6WvapZBrAgGHsqpEri2BKvUGL8I2OmlWpJ8MnCChEUQqoEztX6qQB5hxUc5UR33D%2FoyqE85lQ%2B0AtcDwFe8P3sso1kymy1eronPqirmOKc4pSaib0dS%2FXysqXNTeHjNs1ocE4bZuEbL9MhARB9aG1kjp94gVrBKaD697u4m4c5Kjw1KHdm7nb4Vj9JXymybaJHrImTK7CnZ8bradiOra2r0B89WVfoPEq9mKmWxAWrq7EnlAPzNSdeY%2Fo7B68r1Ptj7Lmmj19NeqZssi76we33bvWyOjZiF3l2hoCvT1jwKoqipwciT0RRimQvRDj8sx16MOTxn8QGOqUBcnRM6giz1dsv7qNRWzDzOZr3bZNIntCw1m4CuIpR5GyMzP3pPsu3G3TeEhBoOIo9vydHQIY8LntusJ5sgSh0p%2BEIu79wyrTuix4r4b341P1orj7z1lgpZEUaWrz%2BVp7EER6ZUy4aVmwSjY7amsP5j9ft1Of4Cx8Rm2cl%2FgFL0ZV2wdy%2Fx6wRHwX1jvltMFCsMKtbNRxHnPCXiMHYjN2RJi%2BVytWy&X-Amz-Signature=f2ac0e7afcf8b47b3ea78142e4cbce818db88c0d74cc2ef71f8ec9dfc32df644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHH3AA4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBjXT5UOd%2FMEnCX98RpsOYcDsMg1ogoj836bHk7jBLVeAiEAoSJBWTmVe60%2BfCaKja%2Bk2rnraNrD3Cv4RfA3SkCPRUoqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEThRBXlXq12Wpb%2BGCrcA3A36zkR0Sh1v2oaG5cor06mUFY1WZ27bNuyAZ2UcHeOMI4FtS2KyJChtU7t4vFw7dDOjTOVt1notDZHkjTbaSOWEnmpWGqziyn6ResCiqpw558NIidjtnHmrlv5NBLX%2Bp4rPqUCwQV4IWsDNApvfAOV33fwxds2rPnCMu3FP5tpF0bvrmQc9f4pHnLHS4iSDUzA0KdnJBnffxlS4m91WOhn8vt1TgxV1LsIYHVQ%2BKWGTMzdKZK8FXekk1XBxhPn%2FhwepW2KaqFvaDDzYXhz0fPUhrLoch%2B%2F1CSjhb2I6oZwYAs5cN0C2JUbva6WvapZBrAgGHsqpEri2BKvUGL8I2OmlWpJ8MnCChEUQqoEztX6qQB5hxUc5UR33D%2FoyqE85lQ%2B0AtcDwFe8P3sso1kymy1eronPqirmOKc4pSaib0dS%2FXysqXNTeHjNs1ocE4bZuEbL9MhARB9aG1kjp94gVrBKaD697u4m4c5Kjw1KHdm7nb4Vj9JXymybaJHrImTK7CnZ8bradiOra2r0B89WVfoPEq9mKmWxAWrq7EnlAPzNSdeY%2Fo7B68r1Ptj7Lmmj19NeqZssi76we33bvWyOjZiF3l2hoCvT1jwKoqipwciT0RRimQvRDj8sx16MOTxn8QGOqUBcnRM6giz1dsv7qNRWzDzOZr3bZNIntCw1m4CuIpR5GyMzP3pPsu3G3TeEhBoOIo9vydHQIY8LntusJ5sgSh0p%2BEIu79wyrTuix4r4b341P1orj7z1lgpZEUaWrz%2BVp7EER6ZUy4aVmwSjY7amsP5j9ft1Of4Cx8Rm2cl%2FgFL0ZV2wdy%2Fx6wRHwX1jvltMFCsMKtbNRxHnPCXiMHYjN2RJi%2BVytWy&X-Amz-Signature=06244cd31c3f1e6250cf8606787e3c4c9dd7c9085fe4d30d30e372d60b270079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHH3AA4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBjXT5UOd%2FMEnCX98RpsOYcDsMg1ogoj836bHk7jBLVeAiEAoSJBWTmVe60%2BfCaKja%2Bk2rnraNrD3Cv4RfA3SkCPRUoqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEThRBXlXq12Wpb%2BGCrcA3A36zkR0Sh1v2oaG5cor06mUFY1WZ27bNuyAZ2UcHeOMI4FtS2KyJChtU7t4vFw7dDOjTOVt1notDZHkjTbaSOWEnmpWGqziyn6ResCiqpw558NIidjtnHmrlv5NBLX%2Bp4rPqUCwQV4IWsDNApvfAOV33fwxds2rPnCMu3FP5tpF0bvrmQc9f4pHnLHS4iSDUzA0KdnJBnffxlS4m91WOhn8vt1TgxV1LsIYHVQ%2BKWGTMzdKZK8FXekk1XBxhPn%2FhwepW2KaqFvaDDzYXhz0fPUhrLoch%2B%2F1CSjhb2I6oZwYAs5cN0C2JUbva6WvapZBrAgGHsqpEri2BKvUGL8I2OmlWpJ8MnCChEUQqoEztX6qQB5hxUc5UR33D%2FoyqE85lQ%2B0AtcDwFe8P3sso1kymy1eronPqirmOKc4pSaib0dS%2FXysqXNTeHjNs1ocE4bZuEbL9MhARB9aG1kjp94gVrBKaD697u4m4c5Kjw1KHdm7nb4Vj9JXymybaJHrImTK7CnZ8bradiOra2r0B89WVfoPEq9mKmWxAWrq7EnlAPzNSdeY%2Fo7B68r1Ptj7Lmmj19NeqZssi76we33bvWyOjZiF3l2hoCvT1jwKoqipwciT0RRimQvRDj8sx16MOTxn8QGOqUBcnRM6giz1dsv7qNRWzDzOZr3bZNIntCw1m4CuIpR5GyMzP3pPsu3G3TeEhBoOIo9vydHQIY8LntusJ5sgSh0p%2BEIu79wyrTuix4r4b341P1orj7z1lgpZEUaWrz%2BVp7EER6ZUy4aVmwSjY7amsP5j9ft1Of4Cx8Rm2cl%2FgFL0ZV2wdy%2Fx6wRHwX1jvltMFCsMKtbNRxHnPCXiMHYjN2RJi%2BVytWy&X-Amz-Signature=10bf86b6948a2fddc87d9eb32cb220c1a0263f98ce47064b3b9081e7538630b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
