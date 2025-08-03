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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24W7YNG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkFt1gGyCdmy69mTEOhi3ZA2T0AeFpS1lqs156BVIkWAiEAhJBMLYsvqCZDHn15GbsvEX%2FU6R2ZWBE84hC7nAntCocq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0RY0zzj4uZIj22iSrcAyQ264HDIQneAkhxn3ttkdb%2B4zKQm4Kb%2F8VgvX3sL7sOT365T8KxRrqLZaviV%2BmqH5YuBHjeYpLNnRuJB1Pgm9XkoXcH1VOG%2BEI8nu1UMImVI9mnH3%2FMqMvFVizfOlGW68zrHoAgKNnewwcurug0qRRFEPjxWljnR71arbFdWYMrC860VFM1xGJ57AsXNoyB5IjVl%2BZ9cXJo9M5aB%2FAhOKgfjbDNGlSav3QX0eIAQUT8EL62h9%2Ffc1hPX%2BDo53%2F8U7mJKVp%2FLeDFEZpkt2nggw3ByTx4mnmIPJNdV9IUzYzrkPvrb1flkaeEz1qkakpCkMR6bZwD7JsfeoHd%2Bk%2FmiWDN5sJJR2ATGKgLarQoHVVk%2B1gbq85ODqbaSqSTZwhAUQAFZSoM%2Fuhi1Ai9htnlnF%2B15%2BntjU%2FkuLg4lIgpP0yp56nUWtV%2FLdxOvNd76mGUuQER3OT%2FOYPbwUzHMFr1AFNR5TXDhOEd%2Fcq7e4%2FOjgUpH%2BXon9b8%2FvRA7GRarACpZrfFpFoXaiHHhl2vM1C4Vi60RfA3gSVeOFAuQ5E4gTGkVdo3TdBJh%2B2npdyjlkahxtYeY3Jeawoqj5WHP39J7672UeQAXLv7wfNRbWoW4VxbQZbJGpxQVOjPL7JeMKPZvsQGOqUBIwfFBdK9D9RDxsXAh59FW64IbgxPlokzzkc4R0825qpaNuTCMGLCRPlgOkNfAo%2B7WNymCdqQXhreJK3FA7j9ekcdx2GhTJC6Dv5lUwaM5g5KpkryzX4Ur6ayircpkKWJZjvLR3Do8ylv77UhJQ%2FZ9auGh8Zo5RNHhGHKIBWH%2Fm6aUHWf5nIbING2KE45r%2BdoXefWgH1xF78an5XjxqXtoM0wbXoR&X-Amz-Signature=df579837434862a530d62e88910805855e3cefa0a0b5bd95e92f52c09086fdaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24W7YNG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkFt1gGyCdmy69mTEOhi3ZA2T0AeFpS1lqs156BVIkWAiEAhJBMLYsvqCZDHn15GbsvEX%2FU6R2ZWBE84hC7nAntCocq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0RY0zzj4uZIj22iSrcAyQ264HDIQneAkhxn3ttkdb%2B4zKQm4Kb%2F8VgvX3sL7sOT365T8KxRrqLZaviV%2BmqH5YuBHjeYpLNnRuJB1Pgm9XkoXcH1VOG%2BEI8nu1UMImVI9mnH3%2FMqMvFVizfOlGW68zrHoAgKNnewwcurug0qRRFEPjxWljnR71arbFdWYMrC860VFM1xGJ57AsXNoyB5IjVl%2BZ9cXJo9M5aB%2FAhOKgfjbDNGlSav3QX0eIAQUT8EL62h9%2Ffc1hPX%2BDo53%2F8U7mJKVp%2FLeDFEZpkt2nggw3ByTx4mnmIPJNdV9IUzYzrkPvrb1flkaeEz1qkakpCkMR6bZwD7JsfeoHd%2Bk%2FmiWDN5sJJR2ATGKgLarQoHVVk%2B1gbq85ODqbaSqSTZwhAUQAFZSoM%2Fuhi1Ai9htnlnF%2B15%2BntjU%2FkuLg4lIgpP0yp56nUWtV%2FLdxOvNd76mGUuQER3OT%2FOYPbwUzHMFr1AFNR5TXDhOEd%2Fcq7e4%2FOjgUpH%2BXon9b8%2FvRA7GRarACpZrfFpFoXaiHHhl2vM1C4Vi60RfA3gSVeOFAuQ5E4gTGkVdo3TdBJh%2B2npdyjlkahxtYeY3Jeawoqj5WHP39J7672UeQAXLv7wfNRbWoW4VxbQZbJGpxQVOjPL7JeMKPZvsQGOqUBIwfFBdK9D9RDxsXAh59FW64IbgxPlokzzkc4R0825qpaNuTCMGLCRPlgOkNfAo%2B7WNymCdqQXhreJK3FA7j9ekcdx2GhTJC6Dv5lUwaM5g5KpkryzX4Ur6ayircpkKWJZjvLR3Do8ylv77UhJQ%2FZ9auGh8Zo5RNHhGHKIBWH%2Fm6aUHWf5nIbING2KE45r%2BdoXefWgH1xF78an5XjxqXtoM0wbXoR&X-Amz-Signature=1879fb0368a1ef55813146a25a894cb3ce0605877b3fdfad9b10d922a313f032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24W7YNG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkFt1gGyCdmy69mTEOhi3ZA2T0AeFpS1lqs156BVIkWAiEAhJBMLYsvqCZDHn15GbsvEX%2FU6R2ZWBE84hC7nAntCocq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF0RY0zzj4uZIj22iSrcAyQ264HDIQneAkhxn3ttkdb%2B4zKQm4Kb%2F8VgvX3sL7sOT365T8KxRrqLZaviV%2BmqH5YuBHjeYpLNnRuJB1Pgm9XkoXcH1VOG%2BEI8nu1UMImVI9mnH3%2FMqMvFVizfOlGW68zrHoAgKNnewwcurug0qRRFEPjxWljnR71arbFdWYMrC860VFM1xGJ57AsXNoyB5IjVl%2BZ9cXJo9M5aB%2FAhOKgfjbDNGlSav3QX0eIAQUT8EL62h9%2Ffc1hPX%2BDo53%2F8U7mJKVp%2FLeDFEZpkt2nggw3ByTx4mnmIPJNdV9IUzYzrkPvrb1flkaeEz1qkakpCkMR6bZwD7JsfeoHd%2Bk%2FmiWDN5sJJR2ATGKgLarQoHVVk%2B1gbq85ODqbaSqSTZwhAUQAFZSoM%2Fuhi1Ai9htnlnF%2B15%2BntjU%2FkuLg4lIgpP0yp56nUWtV%2FLdxOvNd76mGUuQER3OT%2FOYPbwUzHMFr1AFNR5TXDhOEd%2Fcq7e4%2FOjgUpH%2BXon9b8%2FvRA7GRarACpZrfFpFoXaiHHhl2vM1C4Vi60RfA3gSVeOFAuQ5E4gTGkVdo3TdBJh%2B2npdyjlkahxtYeY3Jeawoqj5WHP39J7672UeQAXLv7wfNRbWoW4VxbQZbJGpxQVOjPL7JeMKPZvsQGOqUBIwfFBdK9D9RDxsXAh59FW64IbgxPlokzzkc4R0825qpaNuTCMGLCRPlgOkNfAo%2B7WNymCdqQXhreJK3FA7j9ekcdx2GhTJC6Dv5lUwaM5g5KpkryzX4Ur6ayircpkKWJZjvLR3Do8ylv77UhJQ%2FZ9auGh8Zo5RNHhGHKIBWH%2Fm6aUHWf5nIbING2KE45r%2BdoXefWgH1xF78an5XjxqXtoM0wbXoR&X-Amz-Signature=274cbdb1740ac81d0a00e9cb786e93b239d60fbcdb369533aeddbb6e2a1c88ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
