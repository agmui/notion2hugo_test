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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGGF224%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU6oCpUGvy91VAL16d%2Bk8J%2BoWMEyY96sKuk4ORzKXNsAiEAzalvvtWGddPFTFyXCLxYj78Gwc2Q905sm40jQXzBQLoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FGmv24lQeG0QjWBCrcAyySQxeWNxmg2fSSV0YgmDDMpDNEqdFym0VZZ3Pg6eite0CTYOqUNctovQeJkzS5U%2BZr26K5H%2FDjTSJdd331zZFHoHYxvlz4%2FzclOs3Dk5%2BiqUtun4CKB6HXAeTqDFIoVEd7OnVlFSDO%2F%2FueGeuG%2BAyu%2BGXA%2Bz7KZIRxAQCxUMNheKq3NbFAFJyMLNXNJCI1DMsPNb87ov84S7HwwLqzXPUnWYHSc5g7jbhkdS39EzyXO5xVbVcxl8oXRIyiXPsJrdcocpKaH13AZwiqnN2l6FhJzH93ZK%2FadOh04nB8zIzcykiLzmFSnNxHiWyCY%2FUId5lsrPBTr9HyqbzwGNzEODuNurDAiABYI7nltGgYf7f8Ase8sRzKshPet32oTIsfHszZ0hXW2XBu55r%2BcizZHB%2FDCy9nL9glUOE818IpbV6IL6z2RTHf76Fznok06RB8kyEqWwYqYDP0hdeAlJKxH%2FL5ZpFFO%2B6IsOd4Af2zLqIENlGVJWsNKxtL9y8eOtH8ha9Pa1Qtbhj0ixuhTADnWTyeepq4%2BrkTxSuDXrSq8Yy2T2x2X9b7XqEOadhmBjJDBWodnJq6K43j8Wf%2Fip%2FoTdMWHMGQaysLHpLo0YR2CYlAH4OIXy4jR3zlPVX%2BMMDCrb0GOqUBaaVepaCB%2BrVkyXhiFaSphs89Eto6uo%2FBXhNjJqD6lQgPGPUxVZUn49XOflz7lk5oQZ0ASR4N%2BSfvl%2BSXn5ooREQj4%2FmfMOVFeCV%2BgfaPeiP4TwlffJ3fn4TR9vmmxJsOEqrrvYGGz2%2FSAaiWi0X0Kd3qax3ax8VZDYU%2BMxjoDbqzF8eRyIqifBH2MmMyZVHygVkQ5cfCWvAw5ToUVuNvODmAPBKq&X-Amz-Signature=9a9375251bffea5a6bf6612fa3387be75789b407001d1cc176fb3a78cf5f2641&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGGF224%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU6oCpUGvy91VAL16d%2Bk8J%2BoWMEyY96sKuk4ORzKXNsAiEAzalvvtWGddPFTFyXCLxYj78Gwc2Q905sm40jQXzBQLoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FGmv24lQeG0QjWBCrcAyySQxeWNxmg2fSSV0YgmDDMpDNEqdFym0VZZ3Pg6eite0CTYOqUNctovQeJkzS5U%2BZr26K5H%2FDjTSJdd331zZFHoHYxvlz4%2FzclOs3Dk5%2BiqUtun4CKB6HXAeTqDFIoVEd7OnVlFSDO%2F%2FueGeuG%2BAyu%2BGXA%2Bz7KZIRxAQCxUMNheKq3NbFAFJyMLNXNJCI1DMsPNb87ov84S7HwwLqzXPUnWYHSc5g7jbhkdS39EzyXO5xVbVcxl8oXRIyiXPsJrdcocpKaH13AZwiqnN2l6FhJzH93ZK%2FadOh04nB8zIzcykiLzmFSnNxHiWyCY%2FUId5lsrPBTr9HyqbzwGNzEODuNurDAiABYI7nltGgYf7f8Ase8sRzKshPet32oTIsfHszZ0hXW2XBu55r%2BcizZHB%2FDCy9nL9glUOE818IpbV6IL6z2RTHf76Fznok06RB8kyEqWwYqYDP0hdeAlJKxH%2FL5ZpFFO%2B6IsOd4Af2zLqIENlGVJWsNKxtL9y8eOtH8ha9Pa1Qtbhj0ixuhTADnWTyeepq4%2BrkTxSuDXrSq8Yy2T2x2X9b7XqEOadhmBjJDBWodnJq6K43j8Wf%2Fip%2FoTdMWHMGQaysLHpLo0YR2CYlAH4OIXy4jR3zlPVX%2BMMDCrb0GOqUBaaVepaCB%2BrVkyXhiFaSphs89Eto6uo%2FBXhNjJqD6lQgPGPUxVZUn49XOflz7lk5oQZ0ASR4N%2BSfvl%2BSXn5ooREQj4%2FmfMOVFeCV%2BgfaPeiP4TwlffJ3fn4TR9vmmxJsOEqrrvYGGz2%2FSAaiWi0X0Kd3qax3ax8VZDYU%2BMxjoDbqzF8eRyIqifBH2MmMyZVHygVkQ5cfCWvAw5ToUVuNvODmAPBKq&X-Amz-Signature=5b4da40daf9479a2fcc7c6762d44d3a7654c99791bfed548263db6ee8a42eb3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGGF224%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU6oCpUGvy91VAL16d%2Bk8J%2BoWMEyY96sKuk4ORzKXNsAiEAzalvvtWGddPFTFyXCLxYj78Gwc2Q905sm40jQXzBQLoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FGmv24lQeG0QjWBCrcAyySQxeWNxmg2fSSV0YgmDDMpDNEqdFym0VZZ3Pg6eite0CTYOqUNctovQeJkzS5U%2BZr26K5H%2FDjTSJdd331zZFHoHYxvlz4%2FzclOs3Dk5%2BiqUtun4CKB6HXAeTqDFIoVEd7OnVlFSDO%2F%2FueGeuG%2BAyu%2BGXA%2Bz7KZIRxAQCxUMNheKq3NbFAFJyMLNXNJCI1DMsPNb87ov84S7HwwLqzXPUnWYHSc5g7jbhkdS39EzyXO5xVbVcxl8oXRIyiXPsJrdcocpKaH13AZwiqnN2l6FhJzH93ZK%2FadOh04nB8zIzcykiLzmFSnNxHiWyCY%2FUId5lsrPBTr9HyqbzwGNzEODuNurDAiABYI7nltGgYf7f8Ase8sRzKshPet32oTIsfHszZ0hXW2XBu55r%2BcizZHB%2FDCy9nL9glUOE818IpbV6IL6z2RTHf76Fznok06RB8kyEqWwYqYDP0hdeAlJKxH%2FL5ZpFFO%2B6IsOd4Af2zLqIENlGVJWsNKxtL9y8eOtH8ha9Pa1Qtbhj0ixuhTADnWTyeepq4%2BrkTxSuDXrSq8Yy2T2x2X9b7XqEOadhmBjJDBWodnJq6K43j8Wf%2Fip%2FoTdMWHMGQaysLHpLo0YR2CYlAH4OIXy4jR3zlPVX%2BMMDCrb0GOqUBaaVepaCB%2BrVkyXhiFaSphs89Eto6uo%2FBXhNjJqD6lQgPGPUxVZUn49XOflz7lk5oQZ0ASR4N%2BSfvl%2BSXn5ooREQj4%2FmfMOVFeCV%2BgfaPeiP4TwlffJ3fn4TR9vmmxJsOEqrrvYGGz2%2FSAaiWi0X0Kd3qax3ax8VZDYU%2BMxjoDbqzF8eRyIqifBH2MmMyZVHygVkQ5cfCWvAw5ToUVuNvODmAPBKq&X-Amz-Signature=92f45babd742c96705de50a8fa24c35d54d37e1350678d7f7ab21f01eb6ee790&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
