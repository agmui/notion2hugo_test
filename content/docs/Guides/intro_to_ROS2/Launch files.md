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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIBOLYK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCNnkATXka6VVaeC0%2FH8pHJmdhM3L%2BPlH65SflLN%2BCUUwIhAIuWOpZ6qdTeXR811jRTNoDpUuz0uZLiYCSWDQCglTJRKv8DCEsQABoMNjM3NDIzMTgzODA1IgzBQNoG2nYpoTMIhvoq3AMOSwWVi6JYEWJV7u7Gh05d7TZxFWbv750L7aIsO5qNEakkeydZo3s1zH27re4jjlKGOXQ3W%2FIZOGBuv88Atmu1Aulw3Ksc%2B4PYy4c4LZRtdrnmM3Bqe9vPKovSQ6ayJ36DrLbQjQG4rYYxGoKUh4M0VDPNO%2B2BX6DGiuVzUwowkPhw1QDm21%2FrHBt5Yn0jb0gE29VIiQb%2B77qc1QnQoeDrymJQ56YiD6NAurWJ2EmospITGV9PhIhmcnKC9XlYycRFNGNzfEhYqbCb6xgS79hPKvrO7ZpRInol85CMnQBvoUUgBinUe3ZNfIIBQe8zcEpd6RKOFxngETJtwIRpgdxQR4e5A%2BXun043qoikIyOsxfPjr7WfRB3fr%2B8hfrkEyzszuOr5kS4zRfUquQVgSzfPqYspRbe7W0Dx1tDXVVsMCAyjpdq%2BcQpR0Pupu8ffFKVvHw%2FimLdXIEUkRCq9GFQPxxGwsSvFDerZLaO7gJZYO7f%2BPZ1kAk0iRcb33wJ0mtJjmnRxqzx7JoINup3sjQLZ%2BYpyzyS7iHDpLBaRGszZbKQ7Sg5AE3pEO4YuYciM1Auo0uGX28YKiQPA1W9A3KceyvJMTIn3sJZiCRtZZdpBeHThQ1xIj0qRI2%2B5NTCQqYfCBjqkAcYTD76smWaiLx%2BfvFRbOH%2BzM0NW0KxfQmbMJL20RHYMHtj7QEoDEh6BQoyNMxqtjkCxc1wFq%2F%2Bt0lkVA4wQoxJ%2BOthMOQyB91FSA5NsDf9CVYZxyKUCmaT84sp4J5BNvfA929DqMTFEOobjm4xTMyV1xLZt6RuCDDqgun0EKXQHgKIxNDitKrhbjga8eiEJbnG9maNjNaeXTXrE%2FwvNI3qmySrB&X-Amz-Signature=6507d121179f8ae0d9bd850228fece5127858fbbc08163f82fe6d887b70b8a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIBOLYK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCNnkATXka6VVaeC0%2FH8pHJmdhM3L%2BPlH65SflLN%2BCUUwIhAIuWOpZ6qdTeXR811jRTNoDpUuz0uZLiYCSWDQCglTJRKv8DCEsQABoMNjM3NDIzMTgzODA1IgzBQNoG2nYpoTMIhvoq3AMOSwWVi6JYEWJV7u7Gh05d7TZxFWbv750L7aIsO5qNEakkeydZo3s1zH27re4jjlKGOXQ3W%2FIZOGBuv88Atmu1Aulw3Ksc%2B4PYy4c4LZRtdrnmM3Bqe9vPKovSQ6ayJ36DrLbQjQG4rYYxGoKUh4M0VDPNO%2B2BX6DGiuVzUwowkPhw1QDm21%2FrHBt5Yn0jb0gE29VIiQb%2B77qc1QnQoeDrymJQ56YiD6NAurWJ2EmospITGV9PhIhmcnKC9XlYycRFNGNzfEhYqbCb6xgS79hPKvrO7ZpRInol85CMnQBvoUUgBinUe3ZNfIIBQe8zcEpd6RKOFxngETJtwIRpgdxQR4e5A%2BXun043qoikIyOsxfPjr7WfRB3fr%2B8hfrkEyzszuOr5kS4zRfUquQVgSzfPqYspRbe7W0Dx1tDXVVsMCAyjpdq%2BcQpR0Pupu8ffFKVvHw%2FimLdXIEUkRCq9GFQPxxGwsSvFDerZLaO7gJZYO7f%2BPZ1kAk0iRcb33wJ0mtJjmnRxqzx7JoINup3sjQLZ%2BYpyzyS7iHDpLBaRGszZbKQ7Sg5AE3pEO4YuYciM1Auo0uGX28YKiQPA1W9A3KceyvJMTIn3sJZiCRtZZdpBeHThQ1xIj0qRI2%2B5NTCQqYfCBjqkAcYTD76smWaiLx%2BfvFRbOH%2BzM0NW0KxfQmbMJL20RHYMHtj7QEoDEh6BQoyNMxqtjkCxc1wFq%2F%2Bt0lkVA4wQoxJ%2BOthMOQyB91FSA5NsDf9CVYZxyKUCmaT84sp4J5BNvfA929DqMTFEOobjm4xTMyV1xLZt6RuCDDqgun0EKXQHgKIxNDitKrhbjga8eiEJbnG9maNjNaeXTXrE%2FwvNI3qmySrB&X-Amz-Signature=632e8cf1c137fcc7f0cea7415ea439b94e09c70a51bcad58d25c1f7703c3efff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIBOLYK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCNnkATXka6VVaeC0%2FH8pHJmdhM3L%2BPlH65SflLN%2BCUUwIhAIuWOpZ6qdTeXR811jRTNoDpUuz0uZLiYCSWDQCglTJRKv8DCEsQABoMNjM3NDIzMTgzODA1IgzBQNoG2nYpoTMIhvoq3AMOSwWVi6JYEWJV7u7Gh05d7TZxFWbv750L7aIsO5qNEakkeydZo3s1zH27re4jjlKGOXQ3W%2FIZOGBuv88Atmu1Aulw3Ksc%2B4PYy4c4LZRtdrnmM3Bqe9vPKovSQ6ayJ36DrLbQjQG4rYYxGoKUh4M0VDPNO%2B2BX6DGiuVzUwowkPhw1QDm21%2FrHBt5Yn0jb0gE29VIiQb%2B77qc1QnQoeDrymJQ56YiD6NAurWJ2EmospITGV9PhIhmcnKC9XlYycRFNGNzfEhYqbCb6xgS79hPKvrO7ZpRInol85CMnQBvoUUgBinUe3ZNfIIBQe8zcEpd6RKOFxngETJtwIRpgdxQR4e5A%2BXun043qoikIyOsxfPjr7WfRB3fr%2B8hfrkEyzszuOr5kS4zRfUquQVgSzfPqYspRbe7W0Dx1tDXVVsMCAyjpdq%2BcQpR0Pupu8ffFKVvHw%2FimLdXIEUkRCq9GFQPxxGwsSvFDerZLaO7gJZYO7f%2BPZ1kAk0iRcb33wJ0mtJjmnRxqzx7JoINup3sjQLZ%2BYpyzyS7iHDpLBaRGszZbKQ7Sg5AE3pEO4YuYciM1Auo0uGX28YKiQPA1W9A3KceyvJMTIn3sJZiCRtZZdpBeHThQ1xIj0qRI2%2B5NTCQqYfCBjqkAcYTD76smWaiLx%2BfvFRbOH%2BzM0NW0KxfQmbMJL20RHYMHtj7QEoDEh6BQoyNMxqtjkCxc1wFq%2F%2Bt0lkVA4wQoxJ%2BOthMOQyB91FSA5NsDf9CVYZxyKUCmaT84sp4J5BNvfA929DqMTFEOobjm4xTMyV1xLZt6RuCDDqgun0EKXQHgKIxNDitKrhbjga8eiEJbnG9maNjNaeXTXrE%2FwvNI3qmySrB&X-Amz-Signature=2ed3f820ff3c9b3b825bb59bf267ca808c5bb0c86639936c7147fe8c08a10f32&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
