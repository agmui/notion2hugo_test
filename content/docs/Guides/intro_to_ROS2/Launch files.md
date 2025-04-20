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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4FT32W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBX2n0Yw6q6TmphKIJkmSS%2BEWT4IyFZyrsxhdEYZ%2FJYkAiEAyznVWobvU6hV5Uoul4hVYHvJrK38pTZUdhioV%2FE4GS8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL%2Ff09NBcM7DkOhKCrcA68BpkZbJdAVTawYj8uQx%2Fo8glJmfmRg3VRJp84FQOueCJDREgguTUDmgwZKqespCV3OgHpVeaWMHM4tKGgbS2I2qaJsb1YR8UJasEzFp5rl3nB%2BAD9mtLqtKrdQ3XH8lTjI52iMtwF1jgF%2FTBauTwFbRzNJS86ymLyppUtV%2B94ok2LbYKYlonImNsyDZczBQNZ8ZOwr18VrMXNqFGGMjlEUSAqRD%2BNnw%2BOFRuPP9PWHtTY9rcF%2FMLSJxjoZB2Uz%2BhSdrwGbByBgmdg2pQO8cutJgt%2FZaFL3PZ9gq37sfOU2ipBsCido9Y7We%2FJZPPK%2FwnVCfRlgVwBtOHKZtLf4uVENLO8JSFLKjI3KXfnFrmXkyecpX7VE9fgBZHcgUDgPbAZ7kgb7RsWqwwJMS9b7ANk%2Bw3hp61NiVzIRZNa1s0752yF2kzbT3Rti9lKSCOSSfHF%2Bc6Kyjcnx4L1mAdgOZ39Y8Jz%2FGuI7bLLGZ2cbetv8Jsp90Em5h7%2FexPwpxoen4REIio0TGF3GdzCaDnUNSNQV4GVosKplG%2Fcg8sBqLi30mh4G2mdI4XeV3FW%2BpZ5h3tsOb2s9q5wijINO8UsCe%2BxCAEQf02ljCTWf7tPe%2BYGHN30TVBDusbX1C2iVMI%2BrlMAGOqUBfiiIZuDsW%2BIppiTvpT6cSG%2BG4nRxHt3vZjUes1eqiK2SykgHUXLLJRM%2FuvfIUey5oUN%2FNPeSQMgkFA8aeLA06E4xfgt5c2X%2B9YKyFvXoAwdNgh%2BJ92ND5J5Ns6Ylw968G3UzvFSq3wN1aSL0PVzNr25VZDYI6CBsLy7PWR9lf03AVKkqmRIjnhX4fUe77MeWRMhnz7alBjvGrkyR1dGPb%2Fgt6djJ&X-Amz-Signature=b864ed232f79e8cefa06202245a57da4380b74c1b92ed51a650d1eeb7813e149&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4FT32W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBX2n0Yw6q6TmphKIJkmSS%2BEWT4IyFZyrsxhdEYZ%2FJYkAiEAyznVWobvU6hV5Uoul4hVYHvJrK38pTZUdhioV%2FE4GS8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL%2Ff09NBcM7DkOhKCrcA68BpkZbJdAVTawYj8uQx%2Fo8glJmfmRg3VRJp84FQOueCJDREgguTUDmgwZKqespCV3OgHpVeaWMHM4tKGgbS2I2qaJsb1YR8UJasEzFp5rl3nB%2BAD9mtLqtKrdQ3XH8lTjI52iMtwF1jgF%2FTBauTwFbRzNJS86ymLyppUtV%2B94ok2LbYKYlonImNsyDZczBQNZ8ZOwr18VrMXNqFGGMjlEUSAqRD%2BNnw%2BOFRuPP9PWHtTY9rcF%2FMLSJxjoZB2Uz%2BhSdrwGbByBgmdg2pQO8cutJgt%2FZaFL3PZ9gq37sfOU2ipBsCido9Y7We%2FJZPPK%2FwnVCfRlgVwBtOHKZtLf4uVENLO8JSFLKjI3KXfnFrmXkyecpX7VE9fgBZHcgUDgPbAZ7kgb7RsWqwwJMS9b7ANk%2Bw3hp61NiVzIRZNa1s0752yF2kzbT3Rti9lKSCOSSfHF%2Bc6Kyjcnx4L1mAdgOZ39Y8Jz%2FGuI7bLLGZ2cbetv8Jsp90Em5h7%2FexPwpxoen4REIio0TGF3GdzCaDnUNSNQV4GVosKplG%2Fcg8sBqLi30mh4G2mdI4XeV3FW%2BpZ5h3tsOb2s9q5wijINO8UsCe%2BxCAEQf02ljCTWf7tPe%2BYGHN30TVBDusbX1C2iVMI%2BrlMAGOqUBfiiIZuDsW%2BIppiTvpT6cSG%2BG4nRxHt3vZjUes1eqiK2SykgHUXLLJRM%2FuvfIUey5oUN%2FNPeSQMgkFA8aeLA06E4xfgt5c2X%2B9YKyFvXoAwdNgh%2BJ92ND5J5Ns6Ylw968G3UzvFSq3wN1aSL0PVzNr25VZDYI6CBsLy7PWR9lf03AVKkqmRIjnhX4fUe77MeWRMhnz7alBjvGrkyR1dGPb%2Fgt6djJ&X-Amz-Signature=392291d3d95a0e2be070949a73871ed4dd91e83f5aac28e592311067510ea6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4FT32W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBX2n0Yw6q6TmphKIJkmSS%2BEWT4IyFZyrsxhdEYZ%2FJYkAiEAyznVWobvU6hV5Uoul4hVYHvJrK38pTZUdhioV%2FE4GS8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL%2Ff09NBcM7DkOhKCrcA68BpkZbJdAVTawYj8uQx%2Fo8glJmfmRg3VRJp84FQOueCJDREgguTUDmgwZKqespCV3OgHpVeaWMHM4tKGgbS2I2qaJsb1YR8UJasEzFp5rl3nB%2BAD9mtLqtKrdQ3XH8lTjI52iMtwF1jgF%2FTBauTwFbRzNJS86ymLyppUtV%2B94ok2LbYKYlonImNsyDZczBQNZ8ZOwr18VrMXNqFGGMjlEUSAqRD%2BNnw%2BOFRuPP9PWHtTY9rcF%2FMLSJxjoZB2Uz%2BhSdrwGbByBgmdg2pQO8cutJgt%2FZaFL3PZ9gq37sfOU2ipBsCido9Y7We%2FJZPPK%2FwnVCfRlgVwBtOHKZtLf4uVENLO8JSFLKjI3KXfnFrmXkyecpX7VE9fgBZHcgUDgPbAZ7kgb7RsWqwwJMS9b7ANk%2Bw3hp61NiVzIRZNa1s0752yF2kzbT3Rti9lKSCOSSfHF%2Bc6Kyjcnx4L1mAdgOZ39Y8Jz%2FGuI7bLLGZ2cbetv8Jsp90Em5h7%2FexPwpxoen4REIio0TGF3GdzCaDnUNSNQV4GVosKplG%2Fcg8sBqLi30mh4G2mdI4XeV3FW%2BpZ5h3tsOb2s9q5wijINO8UsCe%2BxCAEQf02ljCTWf7tPe%2BYGHN30TVBDusbX1C2iVMI%2BrlMAGOqUBfiiIZuDsW%2BIppiTvpT6cSG%2BG4nRxHt3vZjUes1eqiK2SykgHUXLLJRM%2FuvfIUey5oUN%2FNPeSQMgkFA8aeLA06E4xfgt5c2X%2B9YKyFvXoAwdNgh%2BJ92ND5J5Ns6Ylw968G3UzvFSq3wN1aSL0PVzNr25VZDYI6CBsLy7PWR9lf03AVKkqmRIjnhX4fUe77MeWRMhnz7alBjvGrkyR1dGPb%2Fgt6djJ&X-Amz-Signature=9c26d218a077516141a4eefd8318ffb59a983c53d363856c1c27af68b75e8b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
