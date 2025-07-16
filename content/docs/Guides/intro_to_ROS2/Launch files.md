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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPRYQV2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDDep8%2BekwIORIToZoQ4yfN%2F6x%2BHl3MZILxG2I3aJ%2BhwAiEA5wQsb3fFXMsCRavo20HFGZXPkS%2FGf%2Facvf1buSicaIEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMH4mcJnrdgqkjv3uCrcA3Bpch1ZK5QWOL%2B10rhrJNedqQDnoPCtLFc1Oqv0k648VGuRH7bFpj5av4xGoKCEPtIGochUOHTLR55FLzERe1L9z9i2GF3n55XF22reTKclNd0ambcy8RiH%2BkoxuTuiCXTXcMIepIOwuDZH6DywGtZ4AIrUqLwjDJswf%2Bwb1WNovCn9j6zcRx4u%2FyIyVaex5XaoRLlYiZT6Vtqjow%2F%2Bl35gXG63Vz190WvNK8qGcaC4ONepVwYY5eRkaP9XdFQlOe%2BT6GxCd3x2Nw607T3XIj5ZSNI8YZU24jOLVWLq2ZxrbsdkJGb%2F6tXnozTZTAYej%2FqqhNkYtrc%2FEoPBhEZI19MCzSw4DW%2Fa8%2FGe2%2BqI1chJ%2BO0eaUCIGKfWuSg8q4Z4hyElAWFTHboavPluwg1i4O6qhlzauZVwKQe4QryVXT7IuWJyuYAk2%2B3hqI0T2iRtx38eGrIHeETI%2BZ7B8PyH8%2FgYERFoYG9RfIy9eM9PucH6Sw94lraUFOgSG%2FLi%2B6tjwXRCRxuQqiwt8rHhrvEyfHJUrSg0J1q1Ld%2BvMAEbVx4aDpVAieRF2%2BKUCcEiPz%2BGVphLCGjmRMNwkcfdYuwd2Uvg1yfuSYKA%2FSHusOvtgU9CMIV%2FDPEJzY%2FGgIt4MMro3cMGOqUBKJ2rNJpnP5yHvzI%2FKOe26LVYQYBr9pmhT%2Fr3wUMPbMjHCQbpA9miqhFhFxaiskqiKZbgCAUSZbss7cA6sRM%2FC6Iiys7%2BtoXoG3U3Uw0ed577%2Fnwsrz2BN3sb5i8s1dJd8atCxrm9MUQRf5NFxP43aK4b2DNDo26VRHJZUjhgjJGoHDr223uO4TWKgL6eX80GquceTu%2B%2FtxKB13y0bWpAsgXWYHcB&X-Amz-Signature=f79cde127950433f97e69f5009aa6b454643522cd48fc9cc30cb5149945d542f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPRYQV2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDDep8%2BekwIORIToZoQ4yfN%2F6x%2BHl3MZILxG2I3aJ%2BhwAiEA5wQsb3fFXMsCRavo20HFGZXPkS%2FGf%2Facvf1buSicaIEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMH4mcJnrdgqkjv3uCrcA3Bpch1ZK5QWOL%2B10rhrJNedqQDnoPCtLFc1Oqv0k648VGuRH7bFpj5av4xGoKCEPtIGochUOHTLR55FLzERe1L9z9i2GF3n55XF22reTKclNd0ambcy8RiH%2BkoxuTuiCXTXcMIepIOwuDZH6DywGtZ4AIrUqLwjDJswf%2Bwb1WNovCn9j6zcRx4u%2FyIyVaex5XaoRLlYiZT6Vtqjow%2F%2Bl35gXG63Vz190WvNK8qGcaC4ONepVwYY5eRkaP9XdFQlOe%2BT6GxCd3x2Nw607T3XIj5ZSNI8YZU24jOLVWLq2ZxrbsdkJGb%2F6tXnozTZTAYej%2FqqhNkYtrc%2FEoPBhEZI19MCzSw4DW%2Fa8%2FGe2%2BqI1chJ%2BO0eaUCIGKfWuSg8q4Z4hyElAWFTHboavPluwg1i4O6qhlzauZVwKQe4QryVXT7IuWJyuYAk2%2B3hqI0T2iRtx38eGrIHeETI%2BZ7B8PyH8%2FgYERFoYG9RfIy9eM9PucH6Sw94lraUFOgSG%2FLi%2B6tjwXRCRxuQqiwt8rHhrvEyfHJUrSg0J1q1Ld%2BvMAEbVx4aDpVAieRF2%2BKUCcEiPz%2BGVphLCGjmRMNwkcfdYuwd2Uvg1yfuSYKA%2FSHusOvtgU9CMIV%2FDPEJzY%2FGgIt4MMro3cMGOqUBKJ2rNJpnP5yHvzI%2FKOe26LVYQYBr9pmhT%2Fr3wUMPbMjHCQbpA9miqhFhFxaiskqiKZbgCAUSZbss7cA6sRM%2FC6Iiys7%2BtoXoG3U3Uw0ed577%2Fnwsrz2BN3sb5i8s1dJd8atCxrm9MUQRf5NFxP43aK4b2DNDo26VRHJZUjhgjJGoHDr223uO4TWKgL6eX80GquceTu%2B%2FtxKB13y0bWpAsgXWYHcB&X-Amz-Signature=f5eddfbf25c102e3a4438c7fe574b10375503fbc0e0ec498f5c7a505b68f2e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPRYQV2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDDep8%2BekwIORIToZoQ4yfN%2F6x%2BHl3MZILxG2I3aJ%2BhwAiEA5wQsb3fFXMsCRavo20HFGZXPkS%2FGf%2Facvf1buSicaIEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMH4mcJnrdgqkjv3uCrcA3Bpch1ZK5QWOL%2B10rhrJNedqQDnoPCtLFc1Oqv0k648VGuRH7bFpj5av4xGoKCEPtIGochUOHTLR55FLzERe1L9z9i2GF3n55XF22reTKclNd0ambcy8RiH%2BkoxuTuiCXTXcMIepIOwuDZH6DywGtZ4AIrUqLwjDJswf%2Bwb1WNovCn9j6zcRx4u%2FyIyVaex5XaoRLlYiZT6Vtqjow%2F%2Bl35gXG63Vz190WvNK8qGcaC4ONepVwYY5eRkaP9XdFQlOe%2BT6GxCd3x2Nw607T3XIj5ZSNI8YZU24jOLVWLq2ZxrbsdkJGb%2F6tXnozTZTAYej%2FqqhNkYtrc%2FEoPBhEZI19MCzSw4DW%2Fa8%2FGe2%2BqI1chJ%2BO0eaUCIGKfWuSg8q4Z4hyElAWFTHboavPluwg1i4O6qhlzauZVwKQe4QryVXT7IuWJyuYAk2%2B3hqI0T2iRtx38eGrIHeETI%2BZ7B8PyH8%2FgYERFoYG9RfIy9eM9PucH6Sw94lraUFOgSG%2FLi%2B6tjwXRCRxuQqiwt8rHhrvEyfHJUrSg0J1q1Ld%2BvMAEbVx4aDpVAieRF2%2BKUCcEiPz%2BGVphLCGjmRMNwkcfdYuwd2Uvg1yfuSYKA%2FSHusOvtgU9CMIV%2FDPEJzY%2FGgIt4MMro3cMGOqUBKJ2rNJpnP5yHvzI%2FKOe26LVYQYBr9pmhT%2Fr3wUMPbMjHCQbpA9miqhFhFxaiskqiKZbgCAUSZbss7cA6sRM%2FC6Iiys7%2BtoXoG3U3Uw0ed577%2Fnwsrz2BN3sb5i8s1dJd8atCxrm9MUQRf5NFxP43aK4b2DNDo26VRHJZUjhgjJGoHDr223uO4TWKgL6eX80GquceTu%2B%2FtxKB13y0bWpAsgXWYHcB&X-Amz-Signature=c6b9e06629bdb3d11ad635df7dfd36c99e72e583a60c5d259e7efb818a7a1955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
