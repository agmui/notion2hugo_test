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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JHD4EL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcC3ReommnBI7GJmdUUKgYCa9%2Bs%2BMuoIp1bW7s5MCPDAiBh93PVYVk5JVmsaXPUql9U5V9svlBoJD4zKM4sO%2BOa7Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJ%2BnD%2F2mn2Nfx7%2FwBKtwD1SlIFwK87NV39jiIYUKfQU1%2ByruJiuk0xYcmYtKo222axeauH7eO1G8%2BFY9tnPJfDHIUvpHOfbH3oEUDmWK%2FJuskeqnswHSipQXM3wWRYWUQ8V4A9yuaAAClPK86l6cpytQ3R81vb7O5fu8s6QPSO17zQyCuVTdj1k3w1LvPPP5WAUy%2FmjLueKJ3y5SSsX5yptqi%2ByizD2AB0VDAE9CPOhilKsg1ozGZqp3h%2Fhnewt43%2FpgIbWn9Ijq0j5QCRRSdNPxDr8bnMi3RerHRd0HtdevHxiFLRu2iGm3GzyhnJnzcb0AEzX0rdRV8eWYAVqaVGsusF6n3P2UrrxCoh9gM4Yu0spGYWn%2BIRGbJlxn%2F8l0%2BbIMyLgYTYYvr6bzVcOAm4UYhy8%2BRqP1%2BCGjiAjLpmeXSpW%2BZeMxuDleCzrG0nsPhElkdeIwlhdmpQLaHq0XKtZzgrPDPnBOC%2By2LIlG1pBnwnRTupPGceIEas86k2qSw8PZDPUK4Yp2OliQtd%2FBMTHKNuNSlpXVBrqG%2Fm9st4Nhen6lzQuqupcCOA%2FpseEBAaKnCivcLPvR285AWHH27LE54BHrTw864jiUkN4r35gDJsibNl65WJ2ZBk4kAv%2B4a17ZD%2FcoSocKs350wmKyAwAY6pgFC7EIydvDJlBok0YIw2Sa0F%2BPf%2BkaK5VPkweq6Y1n7YCyB395R7fMhotuSaqMlZ%2FLErWM2CvEkV8mbpLuQ20dTh7crPNEL0HhqdI%2FDHO78mlzuJgps8qr2GiSGCA3C7%2FCjNlb5mKToZxdViN1HPVz5iV6ErrTNkX9R3wh5%2FOaubr9nKEOlQEfS%2F%2FKRV2mWq2RPbgVUw4J75yQST17Ik%2FMuOapznohQ&X-Amz-Signature=c8dcd6283f6dd69008d4add21ab4d2619d429692a7cf3eebc20cd01868ae4ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JHD4EL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcC3ReommnBI7GJmdUUKgYCa9%2Bs%2BMuoIp1bW7s5MCPDAiBh93PVYVk5JVmsaXPUql9U5V9svlBoJD4zKM4sO%2BOa7Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJ%2BnD%2F2mn2Nfx7%2FwBKtwD1SlIFwK87NV39jiIYUKfQU1%2ByruJiuk0xYcmYtKo222axeauH7eO1G8%2BFY9tnPJfDHIUvpHOfbH3oEUDmWK%2FJuskeqnswHSipQXM3wWRYWUQ8V4A9yuaAAClPK86l6cpytQ3R81vb7O5fu8s6QPSO17zQyCuVTdj1k3w1LvPPP5WAUy%2FmjLueKJ3y5SSsX5yptqi%2ByizD2AB0VDAE9CPOhilKsg1ozGZqp3h%2Fhnewt43%2FpgIbWn9Ijq0j5QCRRSdNPxDr8bnMi3RerHRd0HtdevHxiFLRu2iGm3GzyhnJnzcb0AEzX0rdRV8eWYAVqaVGsusF6n3P2UrrxCoh9gM4Yu0spGYWn%2BIRGbJlxn%2F8l0%2BbIMyLgYTYYvr6bzVcOAm4UYhy8%2BRqP1%2BCGjiAjLpmeXSpW%2BZeMxuDleCzrG0nsPhElkdeIwlhdmpQLaHq0XKtZzgrPDPnBOC%2By2LIlG1pBnwnRTupPGceIEas86k2qSw8PZDPUK4Yp2OliQtd%2FBMTHKNuNSlpXVBrqG%2Fm9st4Nhen6lzQuqupcCOA%2FpseEBAaKnCivcLPvR285AWHH27LE54BHrTw864jiUkN4r35gDJsibNl65WJ2ZBk4kAv%2B4a17ZD%2FcoSocKs350wmKyAwAY6pgFC7EIydvDJlBok0YIw2Sa0F%2BPf%2BkaK5VPkweq6Y1n7YCyB395R7fMhotuSaqMlZ%2FLErWM2CvEkV8mbpLuQ20dTh7crPNEL0HhqdI%2FDHO78mlzuJgps8qr2GiSGCA3C7%2FCjNlb5mKToZxdViN1HPVz5iV6ErrTNkX9R3wh5%2FOaubr9nKEOlQEfS%2F%2FKRV2mWq2RPbgVUw4J75yQST17Ik%2FMuOapznohQ&X-Amz-Signature=76b54a988857d479f93c1b99aec340edb3817cff63c19e7f2a33204b29941b15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JHD4EL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcC3ReommnBI7GJmdUUKgYCa9%2Bs%2BMuoIp1bW7s5MCPDAiBh93PVYVk5JVmsaXPUql9U5V9svlBoJD4zKM4sO%2BOa7Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMJ%2BnD%2F2mn2Nfx7%2FwBKtwD1SlIFwK87NV39jiIYUKfQU1%2ByruJiuk0xYcmYtKo222axeauH7eO1G8%2BFY9tnPJfDHIUvpHOfbH3oEUDmWK%2FJuskeqnswHSipQXM3wWRYWUQ8V4A9yuaAAClPK86l6cpytQ3R81vb7O5fu8s6QPSO17zQyCuVTdj1k3w1LvPPP5WAUy%2FmjLueKJ3y5SSsX5yptqi%2ByizD2AB0VDAE9CPOhilKsg1ozGZqp3h%2Fhnewt43%2FpgIbWn9Ijq0j5QCRRSdNPxDr8bnMi3RerHRd0HtdevHxiFLRu2iGm3GzyhnJnzcb0AEzX0rdRV8eWYAVqaVGsusF6n3P2UrrxCoh9gM4Yu0spGYWn%2BIRGbJlxn%2F8l0%2BbIMyLgYTYYvr6bzVcOAm4UYhy8%2BRqP1%2BCGjiAjLpmeXSpW%2BZeMxuDleCzrG0nsPhElkdeIwlhdmpQLaHq0XKtZzgrPDPnBOC%2By2LIlG1pBnwnRTupPGceIEas86k2qSw8PZDPUK4Yp2OliQtd%2FBMTHKNuNSlpXVBrqG%2Fm9st4Nhen6lzQuqupcCOA%2FpseEBAaKnCivcLPvR285AWHH27LE54BHrTw864jiUkN4r35gDJsibNl65WJ2ZBk4kAv%2B4a17ZD%2FcoSocKs350wmKyAwAY6pgFC7EIydvDJlBok0YIw2Sa0F%2BPf%2BkaK5VPkweq6Y1n7YCyB395R7fMhotuSaqMlZ%2FLErWM2CvEkV8mbpLuQ20dTh7crPNEL0HhqdI%2FDHO78mlzuJgps8qr2GiSGCA3C7%2FCjNlb5mKToZxdViN1HPVz5iV6ErrTNkX9R3wh5%2FOaubr9nKEOlQEfS%2F%2FKRV2mWq2RPbgVUw4J75yQST17Ik%2FMuOapznohQ&X-Amz-Signature=4d1b3454d543fd6c851a2e51cd9d08c5b231f71496ed1251456f8f4ea1b8a6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
