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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RXDQBI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFyaAwh7%2B0A23YBMh5U0uSO%2BRqAQlom8AmtnK9apORCJAiEAp5dqpz%2FJ%2BEYOPTEdBiyc2yD7vWNlU04ghn5zXYQS54gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHqhjtccxM7fsH5oPircA%2FUvUTCLKLFidiJkPXI77Ac09daqJVR%2F6lFkhcWD1sKN%2BHxnHIo7kKbraJLlbDKodGaizgZbzF8csKcrxjzciC8yRv9HrzudEdWBNi39ZRWs%2BKhJLmvLyUghUUsRBZC3ef4zjeE4G%2FX8ozUq8MtPCLcHRlSEhBSlBUzI%2FV3LnYhlJB19K5Qmf1DwBxiSyyXxNP5xrFmTRW2YagUR3d%2FH1QYxAMUbH5ZEd1N04bDAD69X1aoAXwyxRdJgwOeHEj%2FwudVEyKH3L%2FXn1fk7k2%2FVR%2Ff5KAk47eeifQSgVOsjwYY72c9mM3HiAGt6rygLByE1LSGYPjac235cXaoxtRNW%2FH4R4p4T4hSjG8zsqxEnUJbCem%2F2xBq9wb39IrBmCJtDQ3SYc4uOi7lCgGIBj4rKs1gBdXAkrQEazJIMCSoieAWu8iACqtWjDW0cCj2Rswd736vpaKhJm3i%2FbEXbevDBkVBFQiBsXJDKtg1%2Fr7LxDvr1pPAzc9i9HW9rJBTqTz5lvHaf3ZmTa1Z3y1pe0LiBS%2BdA8Hu%2BJLP5I83dqPpQ3wM1Xx3ETwQ47PF%2FQ%2BXJWsIF%2Fpl9V%2FqSq3GvLczmbF%2FtqAurR2RvtpTipoMtaXlWHfQn%2B0sFQJjpc81cOnuzMNP09sIGOqUBTkVaDUEDxn%2BFhfIy6GbsJjVvv3G8EYYdZ5gYh9fb%2Bi4jfh6T0qX8uD6MU3jduMAPR9ws9jRj4xwVbycgz7XI3BS%2FeA7GnNYu7%2FaWH%2FLmhtSNGWoogBzOmZK7kB1cDCy1ktJvUU1n1EgOy0lMRomGi1KQtT%2FcopqsjRx240KmM42SnMsaMmbB3mYGSMMt7pK0uhvjUpGFFMQYer9CuBTlqLWWoknR&X-Amz-Signature=a865d7553734998cbceabb89684e8091d7dc80a1356521fcb179eb1b46854a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RXDQBI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFyaAwh7%2B0A23YBMh5U0uSO%2BRqAQlom8AmtnK9apORCJAiEAp5dqpz%2FJ%2BEYOPTEdBiyc2yD7vWNlU04ghn5zXYQS54gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHqhjtccxM7fsH5oPircA%2FUvUTCLKLFidiJkPXI77Ac09daqJVR%2F6lFkhcWD1sKN%2BHxnHIo7kKbraJLlbDKodGaizgZbzF8csKcrxjzciC8yRv9HrzudEdWBNi39ZRWs%2BKhJLmvLyUghUUsRBZC3ef4zjeE4G%2FX8ozUq8MtPCLcHRlSEhBSlBUzI%2FV3LnYhlJB19K5Qmf1DwBxiSyyXxNP5xrFmTRW2YagUR3d%2FH1QYxAMUbH5ZEd1N04bDAD69X1aoAXwyxRdJgwOeHEj%2FwudVEyKH3L%2FXn1fk7k2%2FVR%2Ff5KAk47eeifQSgVOsjwYY72c9mM3HiAGt6rygLByE1LSGYPjac235cXaoxtRNW%2FH4R4p4T4hSjG8zsqxEnUJbCem%2F2xBq9wb39IrBmCJtDQ3SYc4uOi7lCgGIBj4rKs1gBdXAkrQEazJIMCSoieAWu8iACqtWjDW0cCj2Rswd736vpaKhJm3i%2FbEXbevDBkVBFQiBsXJDKtg1%2Fr7LxDvr1pPAzc9i9HW9rJBTqTz5lvHaf3ZmTa1Z3y1pe0LiBS%2BdA8Hu%2BJLP5I83dqPpQ3wM1Xx3ETwQ47PF%2FQ%2BXJWsIF%2Fpl9V%2FqSq3GvLczmbF%2FtqAurR2RvtpTipoMtaXlWHfQn%2B0sFQJjpc81cOnuzMNP09sIGOqUBTkVaDUEDxn%2BFhfIy6GbsJjVvv3G8EYYdZ5gYh9fb%2Bi4jfh6T0qX8uD6MU3jduMAPR9ws9jRj4xwVbycgz7XI3BS%2FeA7GnNYu7%2FaWH%2FLmhtSNGWoogBzOmZK7kB1cDCy1ktJvUU1n1EgOy0lMRomGi1KQtT%2FcopqsjRx240KmM42SnMsaMmbB3mYGSMMt7pK0uhvjUpGFFMQYer9CuBTlqLWWoknR&X-Amz-Signature=f56cc58bb5e902cce99169498cf1eab34b04e14a5ce7414e0e1535e3f32042d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RXDQBI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFyaAwh7%2B0A23YBMh5U0uSO%2BRqAQlom8AmtnK9apORCJAiEAp5dqpz%2FJ%2BEYOPTEdBiyc2yD7vWNlU04ghn5zXYQS54gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHqhjtccxM7fsH5oPircA%2FUvUTCLKLFidiJkPXI77Ac09daqJVR%2F6lFkhcWD1sKN%2BHxnHIo7kKbraJLlbDKodGaizgZbzF8csKcrxjzciC8yRv9HrzudEdWBNi39ZRWs%2BKhJLmvLyUghUUsRBZC3ef4zjeE4G%2FX8ozUq8MtPCLcHRlSEhBSlBUzI%2FV3LnYhlJB19K5Qmf1DwBxiSyyXxNP5xrFmTRW2YagUR3d%2FH1QYxAMUbH5ZEd1N04bDAD69X1aoAXwyxRdJgwOeHEj%2FwudVEyKH3L%2FXn1fk7k2%2FVR%2Ff5KAk47eeifQSgVOsjwYY72c9mM3HiAGt6rygLByE1LSGYPjac235cXaoxtRNW%2FH4R4p4T4hSjG8zsqxEnUJbCem%2F2xBq9wb39IrBmCJtDQ3SYc4uOi7lCgGIBj4rKs1gBdXAkrQEazJIMCSoieAWu8iACqtWjDW0cCj2Rswd736vpaKhJm3i%2FbEXbevDBkVBFQiBsXJDKtg1%2Fr7LxDvr1pPAzc9i9HW9rJBTqTz5lvHaf3ZmTa1Z3y1pe0LiBS%2BdA8Hu%2BJLP5I83dqPpQ3wM1Xx3ETwQ47PF%2FQ%2BXJWsIF%2Fpl9V%2FqSq3GvLczmbF%2FtqAurR2RvtpTipoMtaXlWHfQn%2B0sFQJjpc81cOnuzMNP09sIGOqUBTkVaDUEDxn%2BFhfIy6GbsJjVvv3G8EYYdZ5gYh9fb%2Bi4jfh6T0qX8uD6MU3jduMAPR9ws9jRj4xwVbycgz7XI3BS%2FeA7GnNYu7%2FaWH%2FLmhtSNGWoogBzOmZK7kB1cDCy1ktJvUU1n1EgOy0lMRomGi1KQtT%2FcopqsjRx240KmM42SnMsaMmbB3mYGSMMt7pK0uhvjUpGFFMQYer9CuBTlqLWWoknR&X-Amz-Signature=faaa470b7e8661a5000bcfe79094af9e64d2a285996cea2eaadd041977f53346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
