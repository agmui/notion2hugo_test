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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPQAFNM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX8stm5ER9z7ti4P%2Bi0AMbBMUICIuiJYARjbpyoecSbAiEAzukcl%2BvoNIq4IrakCel8HvL7y7x9RtsjByu09izd6yAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKZ142GvIR0mteTapSrcA7%2Fb7IrHT0z8U8PPpns0ldFBdNeT7S3SFzg2%2BAn4yKyn5LHms9EJMQ7zo5sCHIZYgqQ2em8hRJZXcEdf7vrSFHFRhtqeYUtZkWkJRvyUIP6%2BOEGLTOlFPSJRbx1m4HJ%2BtuL1Y8HPCle8roboIwouTrijApaUoOdZehrmFG6%2Fi%2FRsJ3kmWjJjDTORXpS4bsVzgw3DcE%2BDW5hZQzNxFewJm2%2BmRZyE21EyrdV%2BqdOQ94oDj8qhRi%2Bfz4hlMO%2FJ%2F%2BlObkcNRPfdCUd%2FaLFvdWOWBGMS2H43sNGbMslT0u5HLX9ldlXbi1j2FGFKVSN%2BdgnIjsvzdeJnW2Sil8W4hQ%2BSlvis67QQz1rw3mPmD5D3EtVowQazSdrU0M6uPnx3X55ItWiaVrqFIva28IdPc7pVc%2BEnjf1ccdF7%2BodnjFtpucgmjHY2JhjejvJKw9JH382PbMCf%2FjAC2pQdBh4kd6W%2BPa3VLOsK5Q292u31FKAd3ztfYTsn97RmOs9e0fT3YPnACYbbZKASMfvXp4vAhPTdLO5Umo%2B5I%2B%2FkVni9uKt6OSm3I2kMyJxhAEBamHEPn6UzvGbpz4SJ3QP7mzhXXGkJlMtujsrR44fz3mg%2BpgXusgmP79CXJZgFzR%2BBgcvRMJeUmL8GOqUB7Y2lN8LpZItQFCkt4aXn0il5FWOBjEOYJY9tE6C3jUWc9kP1RKAbdtdfUdQFwbUeH04pM0mnHDFjSIkfla%2B48u23zpjChUdko5y67Go8N%2Bfq2sbIaR7gmDGUsW98BtnJdDddlILRoF62BXglEJpf0FSBAoRwCj2K1H5fPb4j1D77kMuoY%2BP0y2q7KOnky8TseQlPLJdfJ9HVzp3F%2FR%2Frbyj6jqBi&X-Amz-Signature=c651c9b21df29fde72cd6f3c6c71b72969478e7251fa5859c76df1b7d88db204&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPQAFNM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX8stm5ER9z7ti4P%2Bi0AMbBMUICIuiJYARjbpyoecSbAiEAzukcl%2BvoNIq4IrakCel8HvL7y7x9RtsjByu09izd6yAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKZ142GvIR0mteTapSrcA7%2Fb7IrHT0z8U8PPpns0ldFBdNeT7S3SFzg2%2BAn4yKyn5LHms9EJMQ7zo5sCHIZYgqQ2em8hRJZXcEdf7vrSFHFRhtqeYUtZkWkJRvyUIP6%2BOEGLTOlFPSJRbx1m4HJ%2BtuL1Y8HPCle8roboIwouTrijApaUoOdZehrmFG6%2Fi%2FRsJ3kmWjJjDTORXpS4bsVzgw3DcE%2BDW5hZQzNxFewJm2%2BmRZyE21EyrdV%2BqdOQ94oDj8qhRi%2Bfz4hlMO%2FJ%2F%2BlObkcNRPfdCUd%2FaLFvdWOWBGMS2H43sNGbMslT0u5HLX9ldlXbi1j2FGFKVSN%2BdgnIjsvzdeJnW2Sil8W4hQ%2BSlvis67QQz1rw3mPmD5D3EtVowQazSdrU0M6uPnx3X55ItWiaVrqFIva28IdPc7pVc%2BEnjf1ccdF7%2BodnjFtpucgmjHY2JhjejvJKw9JH382PbMCf%2FjAC2pQdBh4kd6W%2BPa3VLOsK5Q292u31FKAd3ztfYTsn97RmOs9e0fT3YPnACYbbZKASMfvXp4vAhPTdLO5Umo%2B5I%2B%2FkVni9uKt6OSm3I2kMyJxhAEBamHEPn6UzvGbpz4SJ3QP7mzhXXGkJlMtujsrR44fz3mg%2BpgXusgmP79CXJZgFzR%2BBgcvRMJeUmL8GOqUB7Y2lN8LpZItQFCkt4aXn0il5FWOBjEOYJY9tE6C3jUWc9kP1RKAbdtdfUdQFwbUeH04pM0mnHDFjSIkfla%2B48u23zpjChUdko5y67Go8N%2Bfq2sbIaR7gmDGUsW98BtnJdDddlILRoF62BXglEJpf0FSBAoRwCj2K1H5fPb4j1D77kMuoY%2BP0y2q7KOnky8TseQlPLJdfJ9HVzp3F%2FR%2Frbyj6jqBi&X-Amz-Signature=f6a9af9c0a2f7d761b52b71a40defee0640bef48a42526247bc10dae81bf7af0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPQAFNM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEX8stm5ER9z7ti4P%2Bi0AMbBMUICIuiJYARjbpyoecSbAiEAzukcl%2BvoNIq4IrakCel8HvL7y7x9RtsjByu09izd6yAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKZ142GvIR0mteTapSrcA7%2Fb7IrHT0z8U8PPpns0ldFBdNeT7S3SFzg2%2BAn4yKyn5LHms9EJMQ7zo5sCHIZYgqQ2em8hRJZXcEdf7vrSFHFRhtqeYUtZkWkJRvyUIP6%2BOEGLTOlFPSJRbx1m4HJ%2BtuL1Y8HPCle8roboIwouTrijApaUoOdZehrmFG6%2Fi%2FRsJ3kmWjJjDTORXpS4bsVzgw3DcE%2BDW5hZQzNxFewJm2%2BmRZyE21EyrdV%2BqdOQ94oDj8qhRi%2Bfz4hlMO%2FJ%2F%2BlObkcNRPfdCUd%2FaLFvdWOWBGMS2H43sNGbMslT0u5HLX9ldlXbi1j2FGFKVSN%2BdgnIjsvzdeJnW2Sil8W4hQ%2BSlvis67QQz1rw3mPmD5D3EtVowQazSdrU0M6uPnx3X55ItWiaVrqFIva28IdPc7pVc%2BEnjf1ccdF7%2BodnjFtpucgmjHY2JhjejvJKw9JH382PbMCf%2FjAC2pQdBh4kd6W%2BPa3VLOsK5Q292u31FKAd3ztfYTsn97RmOs9e0fT3YPnACYbbZKASMfvXp4vAhPTdLO5Umo%2B5I%2B%2FkVni9uKt6OSm3I2kMyJxhAEBamHEPn6UzvGbpz4SJ3QP7mzhXXGkJlMtujsrR44fz3mg%2BpgXusgmP79CXJZgFzR%2BBgcvRMJeUmL8GOqUB7Y2lN8LpZItQFCkt4aXn0il5FWOBjEOYJY9tE6C3jUWc9kP1RKAbdtdfUdQFwbUeH04pM0mnHDFjSIkfla%2B48u23zpjChUdko5y67Go8N%2Bfq2sbIaR7gmDGUsW98BtnJdDddlILRoF62BXglEJpf0FSBAoRwCj2K1H5fPb4j1D77kMuoY%2BP0y2q7KOnky8TseQlPLJdfJ9HVzp3F%2FR%2Frbyj6jqBi&X-Amz-Signature=056cae5c820e993861af81baecebd6de09df096b8b75af610ce0281591e49dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
