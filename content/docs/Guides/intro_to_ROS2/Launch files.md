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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNBFENO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOQqagscZ27Z13fSRIUOhqdaiKWgrn71MDB8UZZf1ORAiBx4XX2YrFEKrQD7CT%2BJ2V%2BVwXqN0752SmZrdd7ZA1RyiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbiEe5QacY3qhDY%2BKtwDittZTJGU6AnciGcLyJ3v%2BQMBBBP3KQ098bIQGD85F%2Bmo7AHxZe3JCujF97PEAwlvrWVw%2FYfJnABieCB8aOC3bR2rb%2BuTzb2tRH77oOPbpoJbUzWJDvPScDpYr2kYo8QI6tlrELSJdQuLGmnCdGxstFcBPIx%2F740DtcgOfMLYS58T53jdM5iLiNUgIVvAlRT8koQVI5MJ8Ehy3%2B7j1dzhk28w%2BorPvkp%2BgtrlYAFYLrQ94RSYnSAmy9ijqd7WEBqeq9u9s91aCsDvpFKvmXLrh2UnXiEIiiex8rEMz7B7fQpoc3W2OlOFYYgEu0IfcNlFQSuhJ02MDjGSG59jl3AoNzRxhiD6s5Q8Jpx5eXFo7gxIqL462vjux4O9u2rYq30qpVrv2%2B%2FxfpsAiCk918SWUhPunjyWYO1jfAKgLxwjiDIISJZGOvHsWR%2B0IEXN6BK%2BjYi4zCllp9CAqOyJ030Uw7f8MLVt9I2nUvkaTOXrbKaDKQRM1ds7NyCHGBwb2nkZQHlZ6bM2IIdZdHdO7i9X%2FWGhkDxybS7kFhppuH8bh8Ehc9L%2BcfsoIeD2xz0mRXfXTbVkVvG%2Fe97rPQ8xwQQqbVp6MxeEoDfEXWB1QqdSu7PlUn40BNnXsZ19WjYw9OWlwgY6pgEDr2Fj32NLGGiPRvvayXaCB%2Fj%2BCloITlAzZMzOZVoyZvWYAXqzkclmkCf2dUwKWQOcvmRFryenz8ZEcmbKXjtw9JktVk6ycG%2BQVSo5P27WWkQ44Mtq3UieE81SNlhGhZ01BIUYSPkt0V2usD%2FKT1f7Rkyu40aYzHpasfCvFl6nobY9T384B2y%2BWcCz%2F6hyfzKnGgvM%2FevS%2BXqmtVXrpcyxebBIbE2D&X-Amz-Signature=39d730c12663d71788a26bd5617adc70b6d8b7cee137e0b91222fb97633e37cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNBFENO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOQqagscZ27Z13fSRIUOhqdaiKWgrn71MDB8UZZf1ORAiBx4XX2YrFEKrQD7CT%2BJ2V%2BVwXqN0752SmZrdd7ZA1RyiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbiEe5QacY3qhDY%2BKtwDittZTJGU6AnciGcLyJ3v%2BQMBBBP3KQ098bIQGD85F%2Bmo7AHxZe3JCujF97PEAwlvrWVw%2FYfJnABieCB8aOC3bR2rb%2BuTzb2tRH77oOPbpoJbUzWJDvPScDpYr2kYo8QI6tlrELSJdQuLGmnCdGxstFcBPIx%2F740DtcgOfMLYS58T53jdM5iLiNUgIVvAlRT8koQVI5MJ8Ehy3%2B7j1dzhk28w%2BorPvkp%2BgtrlYAFYLrQ94RSYnSAmy9ijqd7WEBqeq9u9s91aCsDvpFKvmXLrh2UnXiEIiiex8rEMz7B7fQpoc3W2OlOFYYgEu0IfcNlFQSuhJ02MDjGSG59jl3AoNzRxhiD6s5Q8Jpx5eXFo7gxIqL462vjux4O9u2rYq30qpVrv2%2B%2FxfpsAiCk918SWUhPunjyWYO1jfAKgLxwjiDIISJZGOvHsWR%2B0IEXN6BK%2BjYi4zCllp9CAqOyJ030Uw7f8MLVt9I2nUvkaTOXrbKaDKQRM1ds7NyCHGBwb2nkZQHlZ6bM2IIdZdHdO7i9X%2FWGhkDxybS7kFhppuH8bh8Ehc9L%2BcfsoIeD2xz0mRXfXTbVkVvG%2Fe97rPQ8xwQQqbVp6MxeEoDfEXWB1QqdSu7PlUn40BNnXsZ19WjYw9OWlwgY6pgEDr2Fj32NLGGiPRvvayXaCB%2Fj%2BCloITlAzZMzOZVoyZvWYAXqzkclmkCf2dUwKWQOcvmRFryenz8ZEcmbKXjtw9JktVk6ycG%2BQVSo5P27WWkQ44Mtq3UieE81SNlhGhZ01BIUYSPkt0V2usD%2FKT1f7Rkyu40aYzHpasfCvFl6nobY9T384B2y%2BWcCz%2F6hyfzKnGgvM%2FevS%2BXqmtVXrpcyxebBIbE2D&X-Amz-Signature=a11e30f992b3f782aaf64503c14aa787f47f527cfc90245ce2ab858bcfd7a684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNBFENO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOQqagscZ27Z13fSRIUOhqdaiKWgrn71MDB8UZZf1ORAiBx4XX2YrFEKrQD7CT%2BJ2V%2BVwXqN0752SmZrdd7ZA1RyiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbiEe5QacY3qhDY%2BKtwDittZTJGU6AnciGcLyJ3v%2BQMBBBP3KQ098bIQGD85F%2Bmo7AHxZe3JCujF97PEAwlvrWVw%2FYfJnABieCB8aOC3bR2rb%2BuTzb2tRH77oOPbpoJbUzWJDvPScDpYr2kYo8QI6tlrELSJdQuLGmnCdGxstFcBPIx%2F740DtcgOfMLYS58T53jdM5iLiNUgIVvAlRT8koQVI5MJ8Ehy3%2B7j1dzhk28w%2BorPvkp%2BgtrlYAFYLrQ94RSYnSAmy9ijqd7WEBqeq9u9s91aCsDvpFKvmXLrh2UnXiEIiiex8rEMz7B7fQpoc3W2OlOFYYgEu0IfcNlFQSuhJ02MDjGSG59jl3AoNzRxhiD6s5Q8Jpx5eXFo7gxIqL462vjux4O9u2rYq30qpVrv2%2B%2FxfpsAiCk918SWUhPunjyWYO1jfAKgLxwjiDIISJZGOvHsWR%2B0IEXN6BK%2BjYi4zCllp9CAqOyJ030Uw7f8MLVt9I2nUvkaTOXrbKaDKQRM1ds7NyCHGBwb2nkZQHlZ6bM2IIdZdHdO7i9X%2FWGhkDxybS7kFhppuH8bh8Ehc9L%2BcfsoIeD2xz0mRXfXTbVkVvG%2Fe97rPQ8xwQQqbVp6MxeEoDfEXWB1QqdSu7PlUn40BNnXsZ19WjYw9OWlwgY6pgEDr2Fj32NLGGiPRvvayXaCB%2Fj%2BCloITlAzZMzOZVoyZvWYAXqzkclmkCf2dUwKWQOcvmRFryenz8ZEcmbKXjtw9JktVk6ycG%2BQVSo5P27WWkQ44Mtq3UieE81SNlhGhZ01BIUYSPkt0V2usD%2FKT1f7Rkyu40aYzHpasfCvFl6nobY9T384B2y%2BWcCz%2F6hyfzKnGgvM%2FevS%2BXqmtVXrpcyxebBIbE2D&X-Amz-Signature=c02dcbe29b99683d0d50540ba8498664ab1c6fb88038f5b711ec0d93bba408a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
