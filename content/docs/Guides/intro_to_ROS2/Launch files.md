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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7Z5VKW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICSB4N2rAf%2FrPYSOSrPgQvDDj6J7V5PaiS7kBVTie%2BmkAiEA4zYwAB4JQBdWADsVCwzKcPNqWyS%2BCH7bcMUqLD%2FZCy0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7biOW5i9yDyxULircAyd%2BnNBo0dUs%2FhIutNsSKt5TW6shIxSljs5TvYfWUBnsypus5x1pO%2BjSIkhZB3NXIBaJ3JPkKiofHzjH5rPwoaWtNRpDvp22P72F55XuCRTN2CfAOYoQLFNojQPAwyOV5zMHqeGByB1LMzPsQHnbL5p2yUnvGNAioQVC1Y1ZfSI2FzAfJPGlEjwzkyo4tGd%2BlS7K5HL2RU3ZpMshuoX6Pfy2r1RruxUq9EDE1i2ZihmurPf5Xg6S14i%2BtOYNUF5pQzX57UpbnhGq3YYlZDZRhZK8K4D99dBB%2FL5zc0EcRGh9fmCmmThyx2%2FqWvl6fgKmF3rUL2z9ZcHDfu8MGzphMze9nbX9y8MBofu6v5S7m6HO0YBuJYYCw%2Bq74%2FCAP63opzcKkdNgFiejsrF5xk36spL4StA77Dl1ngUxv1pwck8%2FlABjNYAaL8gAPUHmGFOH5%2FI1Kd5Q4a5eqte1wVw9KZEfh%2BdPGUA%2Fne0461LohvKglGu0v%2FypXgGg2dnBkDwQ69IK1RN9ppnzuwpkXJ%2FJ4R9n1d1gOjyI5EXHlGwLC88fbO%2BwJHCZTqEeziQJwbDbasM7VBr5Mt%2B25Y2QaQj%2BSmH02ca7S0%2FpEBFATwQuOp%2BVZ%2FAjUhA1BoQp3EcoMMaK%2F8AGOqUBcmi7%2BQREeq1nb1muV%2BSzMwkdU11FsMI57YOX%2BFmh9iPzzlT2TQvNRWlMqP3%2BMzaWCjjtaoDUZlSRucI2HumHN89UuNWobc8zYMSDfj7sXk7dV4xKv3SllQK%2Bhf3H3bOlw0PC%2BRw7GIq1gDv0d6er8UjYMlkQjVWMFhWCum5pP%2BYpKXUpL%2FZaxd0zcoK07Nu2WNqa3mTUa%2FegAWMPBI6YtgeDXd8a&X-Amz-Signature=0419c1a58530d6fac841031b38ab1cb0c15d3422f6f96cc79b526a4cdf4fd519&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7Z5VKW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICSB4N2rAf%2FrPYSOSrPgQvDDj6J7V5PaiS7kBVTie%2BmkAiEA4zYwAB4JQBdWADsVCwzKcPNqWyS%2BCH7bcMUqLD%2FZCy0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7biOW5i9yDyxULircAyd%2BnNBo0dUs%2FhIutNsSKt5TW6shIxSljs5TvYfWUBnsypus5x1pO%2BjSIkhZB3NXIBaJ3JPkKiofHzjH5rPwoaWtNRpDvp22P72F55XuCRTN2CfAOYoQLFNojQPAwyOV5zMHqeGByB1LMzPsQHnbL5p2yUnvGNAioQVC1Y1ZfSI2FzAfJPGlEjwzkyo4tGd%2BlS7K5HL2RU3ZpMshuoX6Pfy2r1RruxUq9EDE1i2ZihmurPf5Xg6S14i%2BtOYNUF5pQzX57UpbnhGq3YYlZDZRhZK8K4D99dBB%2FL5zc0EcRGh9fmCmmThyx2%2FqWvl6fgKmF3rUL2z9ZcHDfu8MGzphMze9nbX9y8MBofu6v5S7m6HO0YBuJYYCw%2Bq74%2FCAP63opzcKkdNgFiejsrF5xk36spL4StA77Dl1ngUxv1pwck8%2FlABjNYAaL8gAPUHmGFOH5%2FI1Kd5Q4a5eqte1wVw9KZEfh%2BdPGUA%2Fne0461LohvKglGu0v%2FypXgGg2dnBkDwQ69IK1RN9ppnzuwpkXJ%2FJ4R9n1d1gOjyI5EXHlGwLC88fbO%2BwJHCZTqEeziQJwbDbasM7VBr5Mt%2B25Y2QaQj%2BSmH02ca7S0%2FpEBFATwQuOp%2BVZ%2FAjUhA1BoQp3EcoMMaK%2F8AGOqUBcmi7%2BQREeq1nb1muV%2BSzMwkdU11FsMI57YOX%2BFmh9iPzzlT2TQvNRWlMqP3%2BMzaWCjjtaoDUZlSRucI2HumHN89UuNWobc8zYMSDfj7sXk7dV4xKv3SllQK%2Bhf3H3bOlw0PC%2BRw7GIq1gDv0d6er8UjYMlkQjVWMFhWCum5pP%2BYpKXUpL%2FZaxd0zcoK07Nu2WNqa3mTUa%2FegAWMPBI6YtgeDXd8a&X-Amz-Signature=d684daac002ceb0c409b9af6fd907eab2a9c60fa30455522f5b1e4c7e30979ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7Z5VKW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICSB4N2rAf%2FrPYSOSrPgQvDDj6J7V5PaiS7kBVTie%2BmkAiEA4zYwAB4JQBdWADsVCwzKcPNqWyS%2BCH7bcMUqLD%2FZCy0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc7biOW5i9yDyxULircAyd%2BnNBo0dUs%2FhIutNsSKt5TW6shIxSljs5TvYfWUBnsypus5x1pO%2BjSIkhZB3NXIBaJ3JPkKiofHzjH5rPwoaWtNRpDvp22P72F55XuCRTN2CfAOYoQLFNojQPAwyOV5zMHqeGByB1LMzPsQHnbL5p2yUnvGNAioQVC1Y1ZfSI2FzAfJPGlEjwzkyo4tGd%2BlS7K5HL2RU3ZpMshuoX6Pfy2r1RruxUq9EDE1i2ZihmurPf5Xg6S14i%2BtOYNUF5pQzX57UpbnhGq3YYlZDZRhZK8K4D99dBB%2FL5zc0EcRGh9fmCmmThyx2%2FqWvl6fgKmF3rUL2z9ZcHDfu8MGzphMze9nbX9y8MBofu6v5S7m6HO0YBuJYYCw%2Bq74%2FCAP63opzcKkdNgFiejsrF5xk36spL4StA77Dl1ngUxv1pwck8%2FlABjNYAaL8gAPUHmGFOH5%2FI1Kd5Q4a5eqte1wVw9KZEfh%2BdPGUA%2Fne0461LohvKglGu0v%2FypXgGg2dnBkDwQ69IK1RN9ppnzuwpkXJ%2FJ4R9n1d1gOjyI5EXHlGwLC88fbO%2BwJHCZTqEeziQJwbDbasM7VBr5Mt%2B25Y2QaQj%2BSmH02ca7S0%2FpEBFATwQuOp%2BVZ%2FAjUhA1BoQp3EcoMMaK%2F8AGOqUBcmi7%2BQREeq1nb1muV%2BSzMwkdU11FsMI57YOX%2BFmh9iPzzlT2TQvNRWlMqP3%2BMzaWCjjtaoDUZlSRucI2HumHN89UuNWobc8zYMSDfj7sXk7dV4xKv3SllQK%2Bhf3H3bOlw0PC%2BRw7GIq1gDv0d6er8UjYMlkQjVWMFhWCum5pP%2BYpKXUpL%2FZaxd0zcoK07Nu2WNqa3mTUa%2FegAWMPBI6YtgeDXd8a&X-Amz-Signature=8e111181ba5ddc62fd3c121156f4605eef6d054537e6a811c606b585697960d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
