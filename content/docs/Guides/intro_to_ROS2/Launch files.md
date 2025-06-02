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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UOGGTNI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGOyHF0Wt3hyMrPW8p2Anv5loGpWs67XEzBEKNx%2B6nnvAiEAkmZdFWwtcBBiZEOScplQbDe%2BhYV87OmWjsE1C6X%2BxoMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCMEKbfFaEKCVtJqCrcA9EJ%2FcG7Y7Xsp6JRWRQl3hgTpxIZd4Gh%2FxJbOiBMBXOPDFfrq2ZvWoMLptfJqVE1bNVcBzevzsNr2WgU38%2B22%2FgNOp75fNHhJn1p9yu5B7FEVoA043mtQsW52ftpfjpo09VdNOlHTvf4S1WzlGM3GRWiGjFWpiQpGXx5tToYdZfbQm%2Bt2IdRWAxTNLyjSLeyULNpcIb7AiIoq%2BOg18X6VGQcra4fffrl5w77aFaEUFhwoHCHb9ar56u5ou0I88GpEMJW1zpFFafMhjUMJf4MGDzY4MgMEj%2F5zcEPOfipvW4gcvG9ooyRmRHhFxf%2B1diB6OAKdHaGDbh95OHIY7D95LAl8dF1zDomHdwPkKSFcPot60HTLuHkf%2Fp43fANBjflaAutzSj0LKxWC7Jvd14TekzUGQUMo44p48PNYiNM1NLbJ09y1VoxtEWW6QOFYiNljHcTZJNA6eqE3Bu3xxiHgFj790iBALyd4QGcVvOaDUUCYnsiNZqFWN53QCq87oZRt98NVCGs7eXzHR2Xelm7GxQT9n3yOfEh7fmMBD0%2BU72FQLM6Zt10DH8RqVGv8OuicUcfR1OV%2F%2BpW%2FHSpqIuwT0Sn1IZ0hzO86Tto0PmoXjdNdcLx2wDI%2FzntHa8NMKLB%2BMEGOqUB6PKVsezysFBEo0PEhF%2BMGDX1krZb7g81ZBHXBAb8DOngYZTWycJDcBMEjHmkfBvJmy%2FBbkDba01zHZlzvh7vzd4uV%2FlioPTePeKMqV%2BX3r079KYI0X2N8n%2BkW7YkeBqH6g19kRPxNrFlZm7eovF9bIRQgxTdDNiiSNbW1UORAX6%2FmtdoNtvV4B3L2HQcyDXO8jE0r4l7olax5u02yqU0WCXpSdvm&X-Amz-Signature=366463cd86e6761b8a37b1ee99923f6f096d2258849f1c8a1f0ccbc3427d8442&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UOGGTNI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGOyHF0Wt3hyMrPW8p2Anv5loGpWs67XEzBEKNx%2B6nnvAiEAkmZdFWwtcBBiZEOScplQbDe%2BhYV87OmWjsE1C6X%2BxoMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCMEKbfFaEKCVtJqCrcA9EJ%2FcG7Y7Xsp6JRWRQl3hgTpxIZd4Gh%2FxJbOiBMBXOPDFfrq2ZvWoMLptfJqVE1bNVcBzevzsNr2WgU38%2B22%2FgNOp75fNHhJn1p9yu5B7FEVoA043mtQsW52ftpfjpo09VdNOlHTvf4S1WzlGM3GRWiGjFWpiQpGXx5tToYdZfbQm%2Bt2IdRWAxTNLyjSLeyULNpcIb7AiIoq%2BOg18X6VGQcra4fffrl5w77aFaEUFhwoHCHb9ar56u5ou0I88GpEMJW1zpFFafMhjUMJf4MGDzY4MgMEj%2F5zcEPOfipvW4gcvG9ooyRmRHhFxf%2B1diB6OAKdHaGDbh95OHIY7D95LAl8dF1zDomHdwPkKSFcPot60HTLuHkf%2Fp43fANBjflaAutzSj0LKxWC7Jvd14TekzUGQUMo44p48PNYiNM1NLbJ09y1VoxtEWW6QOFYiNljHcTZJNA6eqE3Bu3xxiHgFj790iBALyd4QGcVvOaDUUCYnsiNZqFWN53QCq87oZRt98NVCGs7eXzHR2Xelm7GxQT9n3yOfEh7fmMBD0%2BU72FQLM6Zt10DH8RqVGv8OuicUcfR1OV%2F%2BpW%2FHSpqIuwT0Sn1IZ0hzO86Tto0PmoXjdNdcLx2wDI%2FzntHa8NMKLB%2BMEGOqUB6PKVsezysFBEo0PEhF%2BMGDX1krZb7g81ZBHXBAb8DOngYZTWycJDcBMEjHmkfBvJmy%2FBbkDba01zHZlzvh7vzd4uV%2FlioPTePeKMqV%2BX3r079KYI0X2N8n%2BkW7YkeBqH6g19kRPxNrFlZm7eovF9bIRQgxTdDNiiSNbW1UORAX6%2FmtdoNtvV4B3L2HQcyDXO8jE0r4l7olax5u02yqU0WCXpSdvm&X-Amz-Signature=0393bbd8ebe36aed539b9d62c5dd5983ea7a870fb033afa2ceb9afef4b350eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UOGGTNI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGOyHF0Wt3hyMrPW8p2Anv5loGpWs67XEzBEKNx%2B6nnvAiEAkmZdFWwtcBBiZEOScplQbDe%2BhYV87OmWjsE1C6X%2BxoMqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCMEKbfFaEKCVtJqCrcA9EJ%2FcG7Y7Xsp6JRWRQl3hgTpxIZd4Gh%2FxJbOiBMBXOPDFfrq2ZvWoMLptfJqVE1bNVcBzevzsNr2WgU38%2B22%2FgNOp75fNHhJn1p9yu5B7FEVoA043mtQsW52ftpfjpo09VdNOlHTvf4S1WzlGM3GRWiGjFWpiQpGXx5tToYdZfbQm%2Bt2IdRWAxTNLyjSLeyULNpcIb7AiIoq%2BOg18X6VGQcra4fffrl5w77aFaEUFhwoHCHb9ar56u5ou0I88GpEMJW1zpFFafMhjUMJf4MGDzY4MgMEj%2F5zcEPOfipvW4gcvG9ooyRmRHhFxf%2B1diB6OAKdHaGDbh95OHIY7D95LAl8dF1zDomHdwPkKSFcPot60HTLuHkf%2Fp43fANBjflaAutzSj0LKxWC7Jvd14TekzUGQUMo44p48PNYiNM1NLbJ09y1VoxtEWW6QOFYiNljHcTZJNA6eqE3Bu3xxiHgFj790iBALyd4QGcVvOaDUUCYnsiNZqFWN53QCq87oZRt98NVCGs7eXzHR2Xelm7GxQT9n3yOfEh7fmMBD0%2BU72FQLM6Zt10DH8RqVGv8OuicUcfR1OV%2F%2BpW%2FHSpqIuwT0Sn1IZ0hzO86Tto0PmoXjdNdcLx2wDI%2FzntHa8NMKLB%2BMEGOqUB6PKVsezysFBEo0PEhF%2BMGDX1krZb7g81ZBHXBAb8DOngYZTWycJDcBMEjHmkfBvJmy%2FBbkDba01zHZlzvh7vzd4uV%2FlioPTePeKMqV%2BX3r079KYI0X2N8n%2BkW7YkeBqH6g19kRPxNrFlZm7eovF9bIRQgxTdDNiiSNbW1UORAX6%2FmtdoNtvV4B3L2HQcyDXO8jE0r4l7olax5u02yqU0WCXpSdvm&X-Amz-Signature=bef05d33666087cb45a0f0540ab47a29eb4c7aca9b6ca76efb3bffea6e1d7533&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
