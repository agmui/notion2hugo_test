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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RYYEAK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2F40lc8sgjKflUXD0r17t6IyZcTQU5VmnSWG401oLngIhAOhHysMyckTWMA1sd0Em6twtZp1yWENuQFW%2FBjtTPI%2BUKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYkrggj1Bi9dQj1W0q3APfa2tzGmSBehJNxwICyFgBzXVAvEnqzwryAELv8Dp9qlbTagR%2BUh%2BAjYZTWXp28%2FzxAw1Oke71gg6B%2BkdNsadWsBkxNas7caFsFmVjuj2N9WEqmDk4z1n1V3wevwSrk5xleGg1k9FVWQQeNNlu0RjD8uD5vvWl4%2BeYZ3DgngaTKEv25ZPi5Aqo75RZxur0OoLuLoIRMQb5rFYB5nM9F6Cp1tcMeav4pQKKfZWQxVPVwnxjdUlkzwtW0SpWOarFvlJDDmQG6Ptz8joHVWGdpG0cF%2BASq5hD4XUTu1TBHDXfLZmBUThyAh%2FUIlaG8U880RTXTR7v057QKqS9v4bJWTKpCuCiapLYUBMkH%2BNDxlo7cF2GafMYwkzHx7SAz64ECRLGp9i9555OIUCExj8EDwUfg4wwkgP%2Ffqs75by5kWrWUxEtDnrvk%2Bi%2BdPMcWb%2BKQ%2FEBUIXVnvPhlZ1eRZoU%2FMAKi75dU8CfINGo5hdJKS8wcson%2Fv5XfAm8Q%2BvlmtoJKIU%2FsJxVID1LgQ9SyI2JBeQPQPP%2FH%2BR5owDJQq%2FgvZuutwPJogT%2B3QdlexxUR9dR8%2F%2FE9SmTQ0E43e5gqH9fhqAg10CTumxNz%2BfeMCXWbyhiNVkhYZ0uRKKr6QDbODDWocO%2FBjqkAXEKw4wit2I0Na1ihnwpPBWuuEp%2BRyObFKv%2FiNzfkPLSE7U6mKkVRZO39TYbKp6NpHtDvmOMuFztbIWUP1WdJ481DdbaPb7p4bIvu3%2B5%2FyxDTqGh3HKNvy8HZWiwKIt82bDRZK5cZFZuQb8ylTgJkCI%2BU74%2BIjcQNKTvnxYSkR3iVXxo6S1AEFV1qs%2B111iKr5QbHpp0D%2FlptOVSswXZxOgVEFSV&X-Amz-Signature=823124106f265c3c5c758f13b6001b926521874e90e64a00846dc2650eff0f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RYYEAK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2F40lc8sgjKflUXD0r17t6IyZcTQU5VmnSWG401oLngIhAOhHysMyckTWMA1sd0Em6twtZp1yWENuQFW%2FBjtTPI%2BUKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYkrggj1Bi9dQj1W0q3APfa2tzGmSBehJNxwICyFgBzXVAvEnqzwryAELv8Dp9qlbTagR%2BUh%2BAjYZTWXp28%2FzxAw1Oke71gg6B%2BkdNsadWsBkxNas7caFsFmVjuj2N9WEqmDk4z1n1V3wevwSrk5xleGg1k9FVWQQeNNlu0RjD8uD5vvWl4%2BeYZ3DgngaTKEv25ZPi5Aqo75RZxur0OoLuLoIRMQb5rFYB5nM9F6Cp1tcMeav4pQKKfZWQxVPVwnxjdUlkzwtW0SpWOarFvlJDDmQG6Ptz8joHVWGdpG0cF%2BASq5hD4XUTu1TBHDXfLZmBUThyAh%2FUIlaG8U880RTXTR7v057QKqS9v4bJWTKpCuCiapLYUBMkH%2BNDxlo7cF2GafMYwkzHx7SAz64ECRLGp9i9555OIUCExj8EDwUfg4wwkgP%2Ffqs75by5kWrWUxEtDnrvk%2Bi%2BdPMcWb%2BKQ%2FEBUIXVnvPhlZ1eRZoU%2FMAKi75dU8CfINGo5hdJKS8wcson%2Fv5XfAm8Q%2BvlmtoJKIU%2FsJxVID1LgQ9SyI2JBeQPQPP%2FH%2BR5owDJQq%2FgvZuutwPJogT%2B3QdlexxUR9dR8%2F%2FE9SmTQ0E43e5gqH9fhqAg10CTumxNz%2BfeMCXWbyhiNVkhYZ0uRKKr6QDbODDWocO%2FBjqkAXEKw4wit2I0Na1ihnwpPBWuuEp%2BRyObFKv%2FiNzfkPLSE7U6mKkVRZO39TYbKp6NpHtDvmOMuFztbIWUP1WdJ481DdbaPb7p4bIvu3%2B5%2FyxDTqGh3HKNvy8HZWiwKIt82bDRZK5cZFZuQb8ylTgJkCI%2BU74%2BIjcQNKTvnxYSkR3iVXxo6S1AEFV1qs%2B111iKr5QbHpp0D%2FlptOVSswXZxOgVEFSV&X-Amz-Signature=8219e46d9bd50a8cd88cce95d4e4526a440963e4ba8656196abd58028a899b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RYYEAK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2F40lc8sgjKflUXD0r17t6IyZcTQU5VmnSWG401oLngIhAOhHysMyckTWMA1sd0Em6twtZp1yWENuQFW%2FBjtTPI%2BUKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYkrggj1Bi9dQj1W0q3APfa2tzGmSBehJNxwICyFgBzXVAvEnqzwryAELv8Dp9qlbTagR%2BUh%2BAjYZTWXp28%2FzxAw1Oke71gg6B%2BkdNsadWsBkxNas7caFsFmVjuj2N9WEqmDk4z1n1V3wevwSrk5xleGg1k9FVWQQeNNlu0RjD8uD5vvWl4%2BeYZ3DgngaTKEv25ZPi5Aqo75RZxur0OoLuLoIRMQb5rFYB5nM9F6Cp1tcMeav4pQKKfZWQxVPVwnxjdUlkzwtW0SpWOarFvlJDDmQG6Ptz8joHVWGdpG0cF%2BASq5hD4XUTu1TBHDXfLZmBUThyAh%2FUIlaG8U880RTXTR7v057QKqS9v4bJWTKpCuCiapLYUBMkH%2BNDxlo7cF2GafMYwkzHx7SAz64ECRLGp9i9555OIUCExj8EDwUfg4wwkgP%2Ffqs75by5kWrWUxEtDnrvk%2Bi%2BdPMcWb%2BKQ%2FEBUIXVnvPhlZ1eRZoU%2FMAKi75dU8CfINGo5hdJKS8wcson%2Fv5XfAm8Q%2BvlmtoJKIU%2FsJxVID1LgQ9SyI2JBeQPQPP%2FH%2BR5owDJQq%2FgvZuutwPJogT%2B3QdlexxUR9dR8%2F%2FE9SmTQ0E43e5gqH9fhqAg10CTumxNz%2BfeMCXWbyhiNVkhYZ0uRKKr6QDbODDWocO%2FBjqkAXEKw4wit2I0Na1ihnwpPBWuuEp%2BRyObFKv%2FiNzfkPLSE7U6mKkVRZO39TYbKp6NpHtDvmOMuFztbIWUP1WdJ481DdbaPb7p4bIvu3%2B5%2FyxDTqGh3HKNvy8HZWiwKIt82bDRZK5cZFZuQb8ylTgJkCI%2BU74%2BIjcQNKTvnxYSkR3iVXxo6S1AEFV1qs%2B111iKr5QbHpp0D%2FlptOVSswXZxOgVEFSV&X-Amz-Signature=009d9ce8efb9dcb299523392bb8a02f2a05e0e25699380639e0eb1c62e223953&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
