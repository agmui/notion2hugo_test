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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL2MVWB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY769%2F8b6W91YYul7ng3DXHifWSvkOiy18YDLkRzaUMgIgSWBgDIGN3q64xUut%2BdSLMLj8E4ggcVr4jyJudXIrAsQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHmYfHN28grFakaGeCrcA8%2BSUhoKqqSJ1vV5%2FvkjCNg5bNTuJdwU8zXcShEDPm6DFufhWXYAfsAMfuIA0mhCsx7bkUKrG8fONSMqfQh0IGJWRsMKZYsnHkpPIEna9b%2BGOzhA%2F4fIdUzFZVxhE7ypFBza68qRm8BAyVB%2BnBeDd9GyfZtRq6P7q7Y%2F2TQQ2YrnYTzoQuMYZBG5pNx8nzoQ5PQ7G4cTyJ%2Fb3jr50kjSy9pzlShTHPF92MudZetGRycUD0XD6gjswuGgpctUIIb8q9niWtcgmADhFX3RbtXgcQh%2FRswx1BF6YbngPM2%2Frwza1EEN64XZB7uvnwO3ShpfSjXJ4U9zAWiPhCYwWl%2FlfuAkWiMKKRfyMiO19%2FNU%2BT9MPEclsKQSFLzo6QcqqnD9bbMukYHi09yHwdeMdDu0Nn1zRQmZi2lf1C8yrzNACxMHvTxTphTLVf23ylNLmZYikYlyqm%2BpLKO5C0vBaiAGNVmU8ZNE4OzODyUJnxfR%2F%2BDs0q7U6%2BCQYzw1b7A58%2BiS3kQY4%2BwUFpwMLC%2FiH6OAwQ%2B8QiKvu9qo9tasonHWEKbgtgsdGEiWFXW8Sxv7OSxNm0UA7dRBz99WE%2BhgBiqWrHLaCEEof6mfvo%2BWgubX0A2iXvaOjhV0cfy8CX%2BiMLaQnsEGOqUBynx6rpYnmR2POOOumdOLMqqz9P81%2F%2FUcNzqoAU9Oonp2fy%2FB9P6ZBb%2B%2FoC10iJ1oi0LPlxtzAErAlB1M00tY5cJ2YO9ywHXVEoQMe%2F6mpd8AtB0PKnhqjJFPqZlrQQZHNoqF%2Bq6Q7EzE%2Bc%2FRcZ7d6EP6ePAGfuVcLWSv1YfptLod1PPd7ovbpeq%2BiXF0YX8Ju%2F6%2FIYuONnmgUr9%2BHr1ed0nd%2BCAH&X-Amz-Signature=25d62aff4e56b3496d49214cb62a954d0ba8a0157710bda0d7cc085a81f42f19&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL2MVWB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY769%2F8b6W91YYul7ng3DXHifWSvkOiy18YDLkRzaUMgIgSWBgDIGN3q64xUut%2BdSLMLj8E4ggcVr4jyJudXIrAsQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHmYfHN28grFakaGeCrcA8%2BSUhoKqqSJ1vV5%2FvkjCNg5bNTuJdwU8zXcShEDPm6DFufhWXYAfsAMfuIA0mhCsx7bkUKrG8fONSMqfQh0IGJWRsMKZYsnHkpPIEna9b%2BGOzhA%2F4fIdUzFZVxhE7ypFBza68qRm8BAyVB%2BnBeDd9GyfZtRq6P7q7Y%2F2TQQ2YrnYTzoQuMYZBG5pNx8nzoQ5PQ7G4cTyJ%2Fb3jr50kjSy9pzlShTHPF92MudZetGRycUD0XD6gjswuGgpctUIIb8q9niWtcgmADhFX3RbtXgcQh%2FRswx1BF6YbngPM2%2Frwza1EEN64XZB7uvnwO3ShpfSjXJ4U9zAWiPhCYwWl%2FlfuAkWiMKKRfyMiO19%2FNU%2BT9MPEclsKQSFLzo6QcqqnD9bbMukYHi09yHwdeMdDu0Nn1zRQmZi2lf1C8yrzNACxMHvTxTphTLVf23ylNLmZYikYlyqm%2BpLKO5C0vBaiAGNVmU8ZNE4OzODyUJnxfR%2F%2BDs0q7U6%2BCQYzw1b7A58%2BiS3kQY4%2BwUFpwMLC%2FiH6OAwQ%2B8QiKvu9qo9tasonHWEKbgtgsdGEiWFXW8Sxv7OSxNm0UA7dRBz99WE%2BhgBiqWrHLaCEEof6mfvo%2BWgubX0A2iXvaOjhV0cfy8CX%2BiMLaQnsEGOqUBynx6rpYnmR2POOOumdOLMqqz9P81%2F%2FUcNzqoAU9Oonp2fy%2FB9P6ZBb%2B%2FoC10iJ1oi0LPlxtzAErAlB1M00tY5cJ2YO9ywHXVEoQMe%2F6mpd8AtB0PKnhqjJFPqZlrQQZHNoqF%2Bq6Q7EzE%2Bc%2FRcZ7d6EP6ePAGfuVcLWSv1YfptLod1PPd7ovbpeq%2BiXF0YX8Ju%2F6%2FIYuONnmgUr9%2BHr1ed0nd%2BCAH&X-Amz-Signature=af7e0e0d215b73709d74a7311a273108f7227036c52c9d361a245dea809d1ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL2MVWB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY769%2F8b6W91YYul7ng3DXHifWSvkOiy18YDLkRzaUMgIgSWBgDIGN3q64xUut%2BdSLMLj8E4ggcVr4jyJudXIrAsQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHmYfHN28grFakaGeCrcA8%2BSUhoKqqSJ1vV5%2FvkjCNg5bNTuJdwU8zXcShEDPm6DFufhWXYAfsAMfuIA0mhCsx7bkUKrG8fONSMqfQh0IGJWRsMKZYsnHkpPIEna9b%2BGOzhA%2F4fIdUzFZVxhE7ypFBza68qRm8BAyVB%2BnBeDd9GyfZtRq6P7q7Y%2F2TQQ2YrnYTzoQuMYZBG5pNx8nzoQ5PQ7G4cTyJ%2Fb3jr50kjSy9pzlShTHPF92MudZetGRycUD0XD6gjswuGgpctUIIb8q9niWtcgmADhFX3RbtXgcQh%2FRswx1BF6YbngPM2%2Frwza1EEN64XZB7uvnwO3ShpfSjXJ4U9zAWiPhCYwWl%2FlfuAkWiMKKRfyMiO19%2FNU%2BT9MPEclsKQSFLzo6QcqqnD9bbMukYHi09yHwdeMdDu0Nn1zRQmZi2lf1C8yrzNACxMHvTxTphTLVf23ylNLmZYikYlyqm%2BpLKO5C0vBaiAGNVmU8ZNE4OzODyUJnxfR%2F%2BDs0q7U6%2BCQYzw1b7A58%2BiS3kQY4%2BwUFpwMLC%2FiH6OAwQ%2B8QiKvu9qo9tasonHWEKbgtgsdGEiWFXW8Sxv7OSxNm0UA7dRBz99WE%2BhgBiqWrHLaCEEof6mfvo%2BWgubX0A2iXvaOjhV0cfy8CX%2BiMLaQnsEGOqUBynx6rpYnmR2POOOumdOLMqqz9P81%2F%2FUcNzqoAU9Oonp2fy%2FB9P6ZBb%2B%2FoC10iJ1oi0LPlxtzAErAlB1M00tY5cJ2YO9ywHXVEoQMe%2F6mpd8AtB0PKnhqjJFPqZlrQQZHNoqF%2Bq6Q7EzE%2Bc%2FRcZ7d6EP6ePAGfuVcLWSv1YfptLod1PPd7ovbpeq%2BiXF0YX8Ju%2F6%2FIYuONnmgUr9%2BHr1ed0nd%2BCAH&X-Amz-Signature=1c936750a2f6f1703b372118fcff12eb00b5b6e09eb786839c0b42704c054c39&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
