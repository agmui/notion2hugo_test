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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=b90ab5883f3219d1e3a62f2f73c02cad1d1592c502aefbe24dcb7ef4ca1febfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=82cb1e156797f9fd4a26befeeb8c302a7b4f621fbe613e4b1532f434267ec57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2G4PA5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICB6ISHLHjSrZDg8nHikP1BBtj%2BQCIbDWtalGaNcbbatAiEA2gi7VFZIaY1bOvZh%2B37rYg9Od0%2B8dLfBeN1i6GZLe1IqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK73XE5qpeqzPV2UgCrcA1uEfEGDrAziLitPGkIGkyUtqG4Nw58GC3prnyP7AONGoVS%2FR0yGtam0vV07Eg8AiDovCmRQEKkea0qBz%2BDS7q%2FBRi1jYOAx384sHRZKSPo1yBravL09tlHxytr2p4YAEhkUbcQcnq7Z%2BBoyeDfLhHeq7njy%2BLI0pJiJHSzz5hTNJoFe67ULZGAum6cK32PRiADg5ZqtP4kJzyfIL5q7UMyoZr6T2vQDWaBRI%2BoqcsXoxZeQtN9S26lQQxAMAh2sV2%2FQAzChFEuf9xd7hUv6PAveIK6TPWrUykE3sORTVCxKlyHVrQTceNVGSlDiuydG2TYbdzO2b0QSD%2FMVsZcb%2F65NXyRM8%2Bq9CCUEth8%2BfGSoVavBXcdfiMeVMpf8Vc2gM3idraM8MNv9e6g%2BNjw%2FAVh0nA0ADnExzmFzkZBmgY%2FT6yg55PRUEjwHH9jFjgkRvRKhheswWYWKCKNIMTBE8FXhJJHAyAprVPcTOqLaMVC24rtxYqxz7b7aqQ%2BdEwdy4QeV23BZanNEC64QJC3ZEsTC%2BvE7yxDyIbGrXcwlE89mSh4VCInSLBxvNx5Nh5IaDhhpc9h78TP%2FPLFQI%2B%2BesWQqPgXAAz5vDrxpqJHm4dCNuakVWzHP9q7XV6X8MM2EssMGOqUBNgy%2BHbribq%2BMtuJuYsNQrVuyCMSdxubzZF3bhPPo9BDGNn4eOrlJEOjymLx%2Bk1wl%2BgAcRyB1wY5L7v7YObw%2BgTkau6ru4ldZ5nyc61YmG7zdHZMRAjK7vmBoTXz6V%2F8T2NO%2BYziyR5Y1BfQeblEWYF5qTmNOfc7dwH3IBAGIjEaLl2PoM5G9MjHnoEFoQyRrlTvLoo%2FEM7dq%2Fmqrj6hTkYoMRsVD&X-Amz-Signature=bf0ae37a2ea9bee86e94fa0db8eb31ce6de44548de52535490ad05ab9bffb9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
