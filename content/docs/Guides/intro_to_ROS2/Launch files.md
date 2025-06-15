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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76FC4EW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCUkqcDI5r3%2Bw4aDa66R%2F5EVi0HwLwCgl1yL73uqe9j8QIgXCXWrttPoKxS8BW2tHYMJuZNNd45FrAGeGm%2B2hLbIGoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMKphTTk4Jd0KmbqRircA3WAFwsBG7c9uO1JMlF8vVWvD735J7G5ZFFob5zDgtNaSS%2Bfl0YZDUkPmOg3RqQp6zlF3Lhd7T4qKP%2FI3dXABoUNgIJHzUuGw7ZMDcEQLyLnXbeh6k18FkFxZx8FSL%2FkEkcUOsvI7ZM8H32EtJ8lU3259a6D6Wq7zbGbailIL0uUs7UuaQvxQuPMDEq5xLeEitZuwhSIPnVF0eW2uFlw%2BM9meXrQmTugtgXn7DFNUmwfhkmqcDFz%2B1S4hay9t1rddKDvkx7aHo83%2Fd6YKS03IgHR990q%2FQgluekaTMpF2iB%2FxTAXeodN26b5pXEtgLUk7ofqt%2BNcM982vOxuQ4ey5Lg%2B6sYg1oklpho0JbfUu%2FrJdeJzHXrn3PgAGnGS9OBMMse5DAuXSJhbBR8LWMIfJ6xgNKcGlzzfIlaoIwKFh8d4RITo%2BejQB8yE3I2wF6mv%2BOElWjRRbQ7%2F3sD9Cx3Jk3fY2kEJ6yCFx2fo%2FnNtqMVZSC54U%2Fx8oDZ5nYrlZOo8BArUwLuzswQT24u0%2FohIcx11gc2P5dbmiFw0do5HELZfq9lt2L57TJn1JLd6A%2FFGk7VOvOT%2Fmit0Y8kw%2B%2B%2BPSLrvyOU5JEBoGXZJYCLlEMZYObXfa5YhRRXowun1MP6iu8IGOqUBtgVutT0RM8FDigu9pZGqy2Uy7N%2BL7SbCnZit6rur7HLfxvGoiN19dLAFcK0Gva7DV0IVcBSxCdBtCSJtfLCaB0UDCNXKXTcyEx%2FbeATCh6bp3IlRcfbHugiGP8NWLrEtF5V0UtPZI9lKB7rT51wxQXxePGSONHUvg9UPWH8rPDWlfYIQByf6%2Fuo0BcEd%2B4isqQSwKjRuJ64yjHQcrLwajdU7907Y&X-Amz-Signature=06d144708855110d301fadf6cd65f089ab425d927cf9f38818f29ee5a984ad5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76FC4EW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCUkqcDI5r3%2Bw4aDa66R%2F5EVi0HwLwCgl1yL73uqe9j8QIgXCXWrttPoKxS8BW2tHYMJuZNNd45FrAGeGm%2B2hLbIGoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMKphTTk4Jd0KmbqRircA3WAFwsBG7c9uO1JMlF8vVWvD735J7G5ZFFob5zDgtNaSS%2Bfl0YZDUkPmOg3RqQp6zlF3Lhd7T4qKP%2FI3dXABoUNgIJHzUuGw7ZMDcEQLyLnXbeh6k18FkFxZx8FSL%2FkEkcUOsvI7ZM8H32EtJ8lU3259a6D6Wq7zbGbailIL0uUs7UuaQvxQuPMDEq5xLeEitZuwhSIPnVF0eW2uFlw%2BM9meXrQmTugtgXn7DFNUmwfhkmqcDFz%2B1S4hay9t1rddKDvkx7aHo83%2Fd6YKS03IgHR990q%2FQgluekaTMpF2iB%2FxTAXeodN26b5pXEtgLUk7ofqt%2BNcM982vOxuQ4ey5Lg%2B6sYg1oklpho0JbfUu%2FrJdeJzHXrn3PgAGnGS9OBMMse5DAuXSJhbBR8LWMIfJ6xgNKcGlzzfIlaoIwKFh8d4RITo%2BejQB8yE3I2wF6mv%2BOElWjRRbQ7%2F3sD9Cx3Jk3fY2kEJ6yCFx2fo%2FnNtqMVZSC54U%2Fx8oDZ5nYrlZOo8BArUwLuzswQT24u0%2FohIcx11gc2P5dbmiFw0do5HELZfq9lt2L57TJn1JLd6A%2FFGk7VOvOT%2Fmit0Y8kw%2B%2B%2BPSLrvyOU5JEBoGXZJYCLlEMZYObXfa5YhRRXowun1MP6iu8IGOqUBtgVutT0RM8FDigu9pZGqy2Uy7N%2BL7SbCnZit6rur7HLfxvGoiN19dLAFcK0Gva7DV0IVcBSxCdBtCSJtfLCaB0UDCNXKXTcyEx%2FbeATCh6bp3IlRcfbHugiGP8NWLrEtF5V0UtPZI9lKB7rT51wxQXxePGSONHUvg9UPWH8rPDWlfYIQByf6%2Fuo0BcEd%2B4isqQSwKjRuJ64yjHQcrLwajdU7907Y&X-Amz-Signature=a4e35c7655c700a198986063093b60a47a8ed4b9833a7ef44ed380136642bd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76FC4EW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCUkqcDI5r3%2Bw4aDa66R%2F5EVi0HwLwCgl1yL73uqe9j8QIgXCXWrttPoKxS8BW2tHYMJuZNNd45FrAGeGm%2B2hLbIGoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMKphTTk4Jd0KmbqRircA3WAFwsBG7c9uO1JMlF8vVWvD735J7G5ZFFob5zDgtNaSS%2Bfl0YZDUkPmOg3RqQp6zlF3Lhd7T4qKP%2FI3dXABoUNgIJHzUuGw7ZMDcEQLyLnXbeh6k18FkFxZx8FSL%2FkEkcUOsvI7ZM8H32EtJ8lU3259a6D6Wq7zbGbailIL0uUs7UuaQvxQuPMDEq5xLeEitZuwhSIPnVF0eW2uFlw%2BM9meXrQmTugtgXn7DFNUmwfhkmqcDFz%2B1S4hay9t1rddKDvkx7aHo83%2Fd6YKS03IgHR990q%2FQgluekaTMpF2iB%2FxTAXeodN26b5pXEtgLUk7ofqt%2BNcM982vOxuQ4ey5Lg%2B6sYg1oklpho0JbfUu%2FrJdeJzHXrn3PgAGnGS9OBMMse5DAuXSJhbBR8LWMIfJ6xgNKcGlzzfIlaoIwKFh8d4RITo%2BejQB8yE3I2wF6mv%2BOElWjRRbQ7%2F3sD9Cx3Jk3fY2kEJ6yCFx2fo%2FnNtqMVZSC54U%2Fx8oDZ5nYrlZOo8BArUwLuzswQT24u0%2FohIcx11gc2P5dbmiFw0do5HELZfq9lt2L57TJn1JLd6A%2FFGk7VOvOT%2Fmit0Y8kw%2B%2B%2BPSLrvyOU5JEBoGXZJYCLlEMZYObXfa5YhRRXowun1MP6iu8IGOqUBtgVutT0RM8FDigu9pZGqy2Uy7N%2BL7SbCnZit6rur7HLfxvGoiN19dLAFcK0Gva7DV0IVcBSxCdBtCSJtfLCaB0UDCNXKXTcyEx%2FbeATCh6bp3IlRcfbHugiGP8NWLrEtF5V0UtPZI9lKB7rT51wxQXxePGSONHUvg9UPWH8rPDWlfYIQByf6%2Fuo0BcEd%2B4isqQSwKjRuJ64yjHQcrLwajdU7907Y&X-Amz-Signature=0a9fae5a6f6f9666727b9d7c7ff9e9bd6f91aa17e40cfc15f9646d420db2be2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
