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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD724KTS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgAYmXVi%2BwMHROL1DEaFGYUR95RbKIUMKcEnu9%2BFLioAIgQ6GRcfmy4bPGN9CiGAsZDyMYk%2BxBtZn79HBos%2B5p8TAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUdtJ17Gyg4c7AK%2BircA9qs%2F9a7PomHIDarwRVS3PKrQc9jUHJsqCZVE1g%2FI%2Fm80iJiOdQCFP3xXC0gSqoM%2BSsvO5%2FskgBXpQy04qMuddQ0cDYObe4i7Srm3DJ4N0rK1ZzZfmRnrZnADPQ29%2BUh0bYioYx1xfFq95f5h3LnXOHvdGjA2U2%2Fcgl3b5368mI3O62x6MxCH2EdSDe4KxeUtYNu1YSUxPpbd%2FVHEQa7dUHewG31kVFBRsqMj%2Bj3rrB83Pn2vUWDBHNyqFnkwhOCqfqt9ThWEkRc9golI84gGsGvEOF9Rr2tP7%2FNKSP94QIRFujb00aFr4J5y5XrhG3XYorU8hTOSM93C21RLnjC324hhScJxZBbIGPMuf7a8YsuA2MYdcOVD7Zpu2BGS3cWqow4omihE5zn%2FmKZAiZ3mzICZE%2BZCHOq0eI3ahjoIkV77xGmAlLaP14bdvoQURKL4puaAfsYe4StJaRFBB%2BM4pQsym1RXjmEiJn85EObLi7y5KGr45r1VneSpkAsQI5sXY%2B1qP5JS%2FkRM4usIQuO8Py%2F5FMAVO635ommMZ4nq%2FoWRLruobWmFoYw58G5BBi6zSbfXf0JN25eYPM7IpRqTp41knh3fPGCv%2F1Qkvs%2FjIxcP5KNRN7PZMvyv%2B%2FxMPPZpr0GOqUBcAqqTu%2F9l4iviBYv5Isp2Gaqqrop7gg9LrhV6lhnozQYKKlZIaKHJ%2BuZt3TSRKhaCJxd2pnmpOryBiJtHM7FTYkfgo6oOa0oDu6LY5oHbpnlb6u5K0nXMqaso4rw03vABh%2FCrPgr5vY7Eh60%2B1f6F5m8QBaOOI1jmpFd1MhDP6360btsn7pBsCYlY4Lgp0OKieWEsjh4g1ZZ6Zc4N42kqL7yb2bc&X-Amz-Signature=4755a11f3299325cb2493db48be98059078ddfb35ab8dcdf90151c511b0718f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD724KTS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgAYmXVi%2BwMHROL1DEaFGYUR95RbKIUMKcEnu9%2BFLioAIgQ6GRcfmy4bPGN9CiGAsZDyMYk%2BxBtZn79HBos%2B5p8TAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUdtJ17Gyg4c7AK%2BircA9qs%2F9a7PomHIDarwRVS3PKrQc9jUHJsqCZVE1g%2FI%2Fm80iJiOdQCFP3xXC0gSqoM%2BSsvO5%2FskgBXpQy04qMuddQ0cDYObe4i7Srm3DJ4N0rK1ZzZfmRnrZnADPQ29%2BUh0bYioYx1xfFq95f5h3LnXOHvdGjA2U2%2Fcgl3b5368mI3O62x6MxCH2EdSDe4KxeUtYNu1YSUxPpbd%2FVHEQa7dUHewG31kVFBRsqMj%2Bj3rrB83Pn2vUWDBHNyqFnkwhOCqfqt9ThWEkRc9golI84gGsGvEOF9Rr2tP7%2FNKSP94QIRFujb00aFr4J5y5XrhG3XYorU8hTOSM93C21RLnjC324hhScJxZBbIGPMuf7a8YsuA2MYdcOVD7Zpu2BGS3cWqow4omihE5zn%2FmKZAiZ3mzICZE%2BZCHOq0eI3ahjoIkV77xGmAlLaP14bdvoQURKL4puaAfsYe4StJaRFBB%2BM4pQsym1RXjmEiJn85EObLi7y5KGr45r1VneSpkAsQI5sXY%2B1qP5JS%2FkRM4usIQuO8Py%2F5FMAVO635ommMZ4nq%2FoWRLruobWmFoYw58G5BBi6zSbfXf0JN25eYPM7IpRqTp41knh3fPGCv%2F1Qkvs%2FjIxcP5KNRN7PZMvyv%2B%2FxMPPZpr0GOqUBcAqqTu%2F9l4iviBYv5Isp2Gaqqrop7gg9LrhV6lhnozQYKKlZIaKHJ%2BuZt3TSRKhaCJxd2pnmpOryBiJtHM7FTYkfgo6oOa0oDu6LY5oHbpnlb6u5K0nXMqaso4rw03vABh%2FCrPgr5vY7Eh60%2B1f6F5m8QBaOOI1jmpFd1MhDP6360btsn7pBsCYlY4Lgp0OKieWEsjh4g1ZZ6Zc4N42kqL7yb2bc&X-Amz-Signature=b9f7fb983c231d2d29f5685038af5d0a34056951a32ad98953aee2aa725ac5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD724KTS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgAYmXVi%2BwMHROL1DEaFGYUR95RbKIUMKcEnu9%2BFLioAIgQ6GRcfmy4bPGN9CiGAsZDyMYk%2BxBtZn79HBos%2B5p8TAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUdtJ17Gyg4c7AK%2BircA9qs%2F9a7PomHIDarwRVS3PKrQc9jUHJsqCZVE1g%2FI%2Fm80iJiOdQCFP3xXC0gSqoM%2BSsvO5%2FskgBXpQy04qMuddQ0cDYObe4i7Srm3DJ4N0rK1ZzZfmRnrZnADPQ29%2BUh0bYioYx1xfFq95f5h3LnXOHvdGjA2U2%2Fcgl3b5368mI3O62x6MxCH2EdSDe4KxeUtYNu1YSUxPpbd%2FVHEQa7dUHewG31kVFBRsqMj%2Bj3rrB83Pn2vUWDBHNyqFnkwhOCqfqt9ThWEkRc9golI84gGsGvEOF9Rr2tP7%2FNKSP94QIRFujb00aFr4J5y5XrhG3XYorU8hTOSM93C21RLnjC324hhScJxZBbIGPMuf7a8YsuA2MYdcOVD7Zpu2BGS3cWqow4omihE5zn%2FmKZAiZ3mzICZE%2BZCHOq0eI3ahjoIkV77xGmAlLaP14bdvoQURKL4puaAfsYe4StJaRFBB%2BM4pQsym1RXjmEiJn85EObLi7y5KGr45r1VneSpkAsQI5sXY%2B1qP5JS%2FkRM4usIQuO8Py%2F5FMAVO635ommMZ4nq%2FoWRLruobWmFoYw58G5BBi6zSbfXf0JN25eYPM7IpRqTp41knh3fPGCv%2F1Qkvs%2FjIxcP5KNRN7PZMvyv%2B%2FxMPPZpr0GOqUBcAqqTu%2F9l4iviBYv5Isp2Gaqqrop7gg9LrhV6lhnozQYKKlZIaKHJ%2BuZt3TSRKhaCJxd2pnmpOryBiJtHM7FTYkfgo6oOa0oDu6LY5oHbpnlb6u5K0nXMqaso4rw03vABh%2FCrPgr5vY7Eh60%2B1f6F5m8QBaOOI1jmpFd1MhDP6360btsn7pBsCYlY4Lgp0OKieWEsjh4g1ZZ6Zc4N42kqL7yb2bc&X-Amz-Signature=19db3d787dbc9b5468bd94a4cc6898e0207157b87708499e7153c6a4b7e42d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
