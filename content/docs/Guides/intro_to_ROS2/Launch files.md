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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU5OXEW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIC4SVyUPATVLNufsd6ipiIWmbB3MPMJbbbM3TEX%2F%2BbWpAiEA8uz16jjctARtoAnERC0eGG8rAAv0gMTLxS6i6akgrG4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPO633dz9pLags2TYyrcA8Cu4B6jEw5gT%2FkBOuxlCD6%2FGonQb3qyslozvfNon8MBPlHqDgfsmWigkB4B%2Bg7voq9SoKfxr8qYtZwWXdTOVMAWjIpzo8SE3OfnB%2FOkOpi%2FAEgFfZgPYMJsqk4LKKGKpWCJ7D9KFRpxz18ZZM7CBiglIped%2FEm9TO%2Br3zfovOzX1924zmC8zlq8aNi8Oxz4jm1SKsj2SLlk1PeCT2DQloGzsI0YlYI79vnkE7yCt0taO8N0i7TM6wjJndvKPHpdtcPCQDbwKMXI2j%2F2mEyAhzk7MxErkBtuuNPiCNzAcRYZ9YywGs1trE5cEkSQDaA9NAHq2fqzBptjtVjTmXqtRxQL%2B80LMMMKcc3QQo6UoHzhT6blpq17CQpDo93CRlGGvsTMPUn6zsuweyQJhlM0rCMe6242Ooffoz9GRVp0YtikMTg%2Fx2Pyd4Xb33IuZ3WsQFDLsIJvVQz18p51QFzjM434NwFMn8UEcV4afA1Z3%2BhObViA8HxJySArNBsgQRjblM6bMBy6bdHOPWMCAZGhUqA3duaNUFVWJYnzeEqEMYpiQ9edw4BwFiB1t%2Bha6RrIW0yr7MJQwRWnfaIi3trzTW9v0PJldkGitwbkwnpPmma5x5IpIghgNUKD1TBqMPft4cMGOqUBbJd6nseW6kvC0uM5cKmT3Qzq%2FaS90pg96PzhL2QMRTAmlKTjR0F1sj3e4ChZ6zdLeSb%2BZs5ez8GEqxgdjK74FHevYilOGDUA%2F%2B2GKvU2ln2KE8tNZQ9gD32itKuxFNCzkjH0RdHARkvqNzxJXUI2bc%2BW%2BoAGu%2BuRPetBpb%2BaNb6D0V989ABTQxa2TO2MP%2F1j5amz20R%2BycHFo5QPvct04RHejUnQ&X-Amz-Signature=b590766b883e4457c20b3bce9f86c3af502d93b06bcb4e18082d04ca6f5c46f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU5OXEW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIC4SVyUPATVLNufsd6ipiIWmbB3MPMJbbbM3TEX%2F%2BbWpAiEA8uz16jjctARtoAnERC0eGG8rAAv0gMTLxS6i6akgrG4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPO633dz9pLags2TYyrcA8Cu4B6jEw5gT%2FkBOuxlCD6%2FGonQb3qyslozvfNon8MBPlHqDgfsmWigkB4B%2Bg7voq9SoKfxr8qYtZwWXdTOVMAWjIpzo8SE3OfnB%2FOkOpi%2FAEgFfZgPYMJsqk4LKKGKpWCJ7D9KFRpxz18ZZM7CBiglIped%2FEm9TO%2Br3zfovOzX1924zmC8zlq8aNi8Oxz4jm1SKsj2SLlk1PeCT2DQloGzsI0YlYI79vnkE7yCt0taO8N0i7TM6wjJndvKPHpdtcPCQDbwKMXI2j%2F2mEyAhzk7MxErkBtuuNPiCNzAcRYZ9YywGs1trE5cEkSQDaA9NAHq2fqzBptjtVjTmXqtRxQL%2B80LMMMKcc3QQo6UoHzhT6blpq17CQpDo93CRlGGvsTMPUn6zsuweyQJhlM0rCMe6242Ooffoz9GRVp0YtikMTg%2Fx2Pyd4Xb33IuZ3WsQFDLsIJvVQz18p51QFzjM434NwFMn8UEcV4afA1Z3%2BhObViA8HxJySArNBsgQRjblM6bMBy6bdHOPWMCAZGhUqA3duaNUFVWJYnzeEqEMYpiQ9edw4BwFiB1t%2Bha6RrIW0yr7MJQwRWnfaIi3trzTW9v0PJldkGitwbkwnpPmma5x5IpIghgNUKD1TBqMPft4cMGOqUBbJd6nseW6kvC0uM5cKmT3Qzq%2FaS90pg96PzhL2QMRTAmlKTjR0F1sj3e4ChZ6zdLeSb%2BZs5ez8GEqxgdjK74FHevYilOGDUA%2F%2B2GKvU2ln2KE8tNZQ9gD32itKuxFNCzkjH0RdHARkvqNzxJXUI2bc%2BW%2BoAGu%2BuRPetBpb%2BaNb6D0V989ABTQxa2TO2MP%2F1j5amz20R%2BycHFo5QPvct04RHejUnQ&X-Amz-Signature=df83716e9239ca8851e650f3877cbbe2a59f8250f4914aa4176f7b09315c3677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU5OXEW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIC4SVyUPATVLNufsd6ipiIWmbB3MPMJbbbM3TEX%2F%2BbWpAiEA8uz16jjctARtoAnERC0eGG8rAAv0gMTLxS6i6akgrG4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPO633dz9pLags2TYyrcA8Cu4B6jEw5gT%2FkBOuxlCD6%2FGonQb3qyslozvfNon8MBPlHqDgfsmWigkB4B%2Bg7voq9SoKfxr8qYtZwWXdTOVMAWjIpzo8SE3OfnB%2FOkOpi%2FAEgFfZgPYMJsqk4LKKGKpWCJ7D9KFRpxz18ZZM7CBiglIped%2FEm9TO%2Br3zfovOzX1924zmC8zlq8aNi8Oxz4jm1SKsj2SLlk1PeCT2DQloGzsI0YlYI79vnkE7yCt0taO8N0i7TM6wjJndvKPHpdtcPCQDbwKMXI2j%2F2mEyAhzk7MxErkBtuuNPiCNzAcRYZ9YywGs1trE5cEkSQDaA9NAHq2fqzBptjtVjTmXqtRxQL%2B80LMMMKcc3QQo6UoHzhT6blpq17CQpDo93CRlGGvsTMPUn6zsuweyQJhlM0rCMe6242Ooffoz9GRVp0YtikMTg%2Fx2Pyd4Xb33IuZ3WsQFDLsIJvVQz18p51QFzjM434NwFMn8UEcV4afA1Z3%2BhObViA8HxJySArNBsgQRjblM6bMBy6bdHOPWMCAZGhUqA3duaNUFVWJYnzeEqEMYpiQ9edw4BwFiB1t%2Bha6RrIW0yr7MJQwRWnfaIi3trzTW9v0PJldkGitwbkwnpPmma5x5IpIghgNUKD1TBqMPft4cMGOqUBbJd6nseW6kvC0uM5cKmT3Qzq%2FaS90pg96PzhL2QMRTAmlKTjR0F1sj3e4ChZ6zdLeSb%2BZs5ez8GEqxgdjK74FHevYilOGDUA%2F%2B2GKvU2ln2KE8tNZQ9gD32itKuxFNCzkjH0RdHARkvqNzxJXUI2bc%2BW%2BoAGu%2BuRPetBpb%2BaNb6D0V989ABTQxa2TO2MP%2F1j5amz20R%2BycHFo5QPvct04RHejUnQ&X-Amz-Signature=c56897c56480445c1c8afa23fbf6cc66650730564f872bf9675781a58784b5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
