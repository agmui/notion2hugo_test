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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U552EWO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIBSQgej5DEQIuh4Iqxpgdw5cYEdvuUHSPWdpoA0Q8HphAiEAu15EvTPG2IcbtGq4KCM8Jz5jVr3vfP%2Bk30EQgBVGW9wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTUEJivHZ8QX2KrSrcAzjKn9zwKFiJUNqYG74jyzVAhJ0XATQGOb1sdFnCGRwezrzmIpCRqO%2FKWOQgjY9eyKkeRcYj2JWPyRyi9DOwNsir4nY%2BOEIcpzsFJSlZuiqeBc8CFuvve9wPW%2BXhapfqsE73XZc8%2FSizFjyoieuwqZJrjhRmCd75URyX5XQ6FIXE3JKoCNAyR3T%2F9NBQS2pPqRPqIkbhzLKeTlBpQsFl5sM61XoAxEYEj9KU36RJ5kK3bV1MnFhNimFcI%2BAVM2nI%2BIUCvvLwr9wimjsHUdEGPt59k%2Bd5%2FOTCy4D96SLNRr%2BzfrVtLPK4Jfu%2BjvOHtew6UE7Fjp3%2BWRuyIUySxdZYONmLD7fiozXj319gSh882QhDHnsw1db5wdvIl0kuyr5bIwfwpRejlSetfYgg9qxoDLMTxrpXEH6VLCuPXmFWAAlMKm38FdjRuOurQ0ue87DzCwRaM5GJKWNMi1HZcOjqpOqHFY9aLIJTblSf4%2FKuRRcZBeVcR0pI9WtBxbiU45VAOblGMCznin7LcY1vKUGF6OU5zKUZQhfcOMp9ha25je24%2FftRTlBDLfr%2F5fFQbJo1sqyUZewuHMckDcv3FW1M%2F2AO4wzwgFW3ayeSY1FiuCxAESEuoUHcaWi%2FfxgKMN%2BjjMEGOqUBvpnyyc9BvtCjEQlOM%2B3VSAxPLPNzI51rdVujoUKoce7HepmnhMqt8yry73UfdxS9c%2FBfEXV%2FyDpGxeR7CAs3w6rf%2FgxOIoQfeMxH%2FFmKCz06BVJ6IGBINTnLdx63c1S0MQPh60i9yAUH8fIL2%2F9N7H4Ih3cat2PC3JNfwBAXyH3rs4Klwe3U%2BbsayqEDy8%2B9t0kqNerVxPldt0BeMr24EIykVIKS&X-Amz-Signature=983b44476790bfd58ce62309e6f869fd1b677734a32a9aef0af27966cb324415&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U552EWO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIBSQgej5DEQIuh4Iqxpgdw5cYEdvuUHSPWdpoA0Q8HphAiEAu15EvTPG2IcbtGq4KCM8Jz5jVr3vfP%2Bk30EQgBVGW9wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTUEJivHZ8QX2KrSrcAzjKn9zwKFiJUNqYG74jyzVAhJ0XATQGOb1sdFnCGRwezrzmIpCRqO%2FKWOQgjY9eyKkeRcYj2JWPyRyi9DOwNsir4nY%2BOEIcpzsFJSlZuiqeBc8CFuvve9wPW%2BXhapfqsE73XZc8%2FSizFjyoieuwqZJrjhRmCd75URyX5XQ6FIXE3JKoCNAyR3T%2F9NBQS2pPqRPqIkbhzLKeTlBpQsFl5sM61XoAxEYEj9KU36RJ5kK3bV1MnFhNimFcI%2BAVM2nI%2BIUCvvLwr9wimjsHUdEGPt59k%2Bd5%2FOTCy4D96SLNRr%2BzfrVtLPK4Jfu%2BjvOHtew6UE7Fjp3%2BWRuyIUySxdZYONmLD7fiozXj319gSh882QhDHnsw1db5wdvIl0kuyr5bIwfwpRejlSetfYgg9qxoDLMTxrpXEH6VLCuPXmFWAAlMKm38FdjRuOurQ0ue87DzCwRaM5GJKWNMi1HZcOjqpOqHFY9aLIJTblSf4%2FKuRRcZBeVcR0pI9WtBxbiU45VAOblGMCznin7LcY1vKUGF6OU5zKUZQhfcOMp9ha25je24%2FftRTlBDLfr%2F5fFQbJo1sqyUZewuHMckDcv3FW1M%2F2AO4wzwgFW3ayeSY1FiuCxAESEuoUHcaWi%2FfxgKMN%2BjjMEGOqUBvpnyyc9BvtCjEQlOM%2B3VSAxPLPNzI51rdVujoUKoce7HepmnhMqt8yry73UfdxS9c%2FBfEXV%2FyDpGxeR7CAs3w6rf%2FgxOIoQfeMxH%2FFmKCz06BVJ6IGBINTnLdx63c1S0MQPh60i9yAUH8fIL2%2F9N7H4Ih3cat2PC3JNfwBAXyH3rs4Klwe3U%2BbsayqEDy8%2B9t0kqNerVxPldt0BeMr24EIykVIKS&X-Amz-Signature=fe68a07fb814c5ec0d065cd22e9b409c8c9fcfe816b501fa7c72ab39498d7f53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U552EWO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIBSQgej5DEQIuh4Iqxpgdw5cYEdvuUHSPWdpoA0Q8HphAiEAu15EvTPG2IcbtGq4KCM8Jz5jVr3vfP%2Bk30EQgBVGW9wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuTUEJivHZ8QX2KrSrcAzjKn9zwKFiJUNqYG74jyzVAhJ0XATQGOb1sdFnCGRwezrzmIpCRqO%2FKWOQgjY9eyKkeRcYj2JWPyRyi9DOwNsir4nY%2BOEIcpzsFJSlZuiqeBc8CFuvve9wPW%2BXhapfqsE73XZc8%2FSizFjyoieuwqZJrjhRmCd75URyX5XQ6FIXE3JKoCNAyR3T%2F9NBQS2pPqRPqIkbhzLKeTlBpQsFl5sM61XoAxEYEj9KU36RJ5kK3bV1MnFhNimFcI%2BAVM2nI%2BIUCvvLwr9wimjsHUdEGPt59k%2Bd5%2FOTCy4D96SLNRr%2BzfrVtLPK4Jfu%2BjvOHtew6UE7Fjp3%2BWRuyIUySxdZYONmLD7fiozXj319gSh882QhDHnsw1db5wdvIl0kuyr5bIwfwpRejlSetfYgg9qxoDLMTxrpXEH6VLCuPXmFWAAlMKm38FdjRuOurQ0ue87DzCwRaM5GJKWNMi1HZcOjqpOqHFY9aLIJTblSf4%2FKuRRcZBeVcR0pI9WtBxbiU45VAOblGMCznin7LcY1vKUGF6OU5zKUZQhfcOMp9ha25je24%2FftRTlBDLfr%2F5fFQbJo1sqyUZewuHMckDcv3FW1M%2F2AO4wzwgFW3ayeSY1FiuCxAESEuoUHcaWi%2FfxgKMN%2BjjMEGOqUBvpnyyc9BvtCjEQlOM%2B3VSAxPLPNzI51rdVujoUKoce7HepmnhMqt8yry73UfdxS9c%2FBfEXV%2FyDpGxeR7CAs3w6rf%2FgxOIoQfeMxH%2FFmKCz06BVJ6IGBINTnLdx63c1S0MQPh60i9yAUH8fIL2%2F9N7H4Ih3cat2PC3JNfwBAXyH3rs4Klwe3U%2BbsayqEDy8%2B9t0kqNerVxPldt0BeMr24EIykVIKS&X-Amz-Signature=6dd4dc07fa56dd80f7878912fc875a768ddb862fb7676a09d0b0dc18264e2b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
