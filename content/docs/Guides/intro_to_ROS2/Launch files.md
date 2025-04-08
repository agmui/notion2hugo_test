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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXBYQQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrcMEzp9yJP7CvQZKjSfMkB4UAcbfIBqr63degMxxzwIgSw%2BKPpCV6uq0Fc6eK2V%2F%2FtKr1m18%2FPz%2BXoyIAz86rbsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFxD1hPE5if2DATm8SrcA%2Bfot3ReahxOGVxQ2%2FhE%2BdP4ZrBwk00xtowNMGMEMEE5aRlGlfZ7AWCH4Ea7b02CmqHK2c5jU3lcLHkKtnQvGnZjHP0vypa0s2mMt2pHJs%2BlynlWI%2Fp95WvHdLeuFxw6QBcmOTnim3kQy7qsa5%2Bo5D1GKmZ%2F3Z%2B%2BOf%2B0z2N61p51Fcz0Ss6LBv%2BVGSXZ7ZB3NwvYURCUnVpiI1n5odxaFdk%2FZLi4a1Njs94kErxVJ7Crofk43agdIoP4kB31faUNN9Ai%2BNy4CVh6AjvGQ%2Fj4ri7QT6KCpqMgmpd5v%2FJVZsaDKleE4TvhBkHZkPpa42e9ZQWBZEQZwXp8zEMvTRF%2B0LdxNJzkNBRHn7LwYgQk7bPJdxilYe8xEecnYqBV13EJP0qAMQZttyfP6bPnMurpxKjdaifzv8QjASdfia7kyG4vYYciKlXEDKHUhyfw3KpHEmqtEe0XGzgvDr%2BNJx53Kd2mD0yCQJbooDjqx8umQBfJ%2BzBESY%2BvVJIHMDBn5tsygz9Ytj5FuvxPMuI1m2%2BWC1Ipmh6eCaEMRhyXzqFw3uP%2BGPIdN12AgjxB%2FRTo%2BF4A9IuY7ag1c8JQb%2BOHKdcXhRgx8v0dLCek6HiNHrzx3diF9s3lMH%2B8iFmyWsjEMO291L8GOqUBgeQcabsD%2Fe2gGiVFhrUn59UXCuqXkeoEHluueGw3skHBGldp3%2F3yOBJkNjN2Sffn3Bav4f%2BakCl174KagLEnecrwfRRWRlYN30jiiEg%2BxsX8SOKsZXTvHyH1K4i2ynA%2FbgFhF83tzXeFVCG%2FbGMdRu2WuTxlcDWInW8yJr2MxprYs9NO%2B82GSlaX0YPM0eGDTUBq4DIxpXjtpXVXWle4oZFqpeUz&X-Amz-Signature=a3442e16b26d58f1c59fc45e7c7d13dfdd64dbc68fc528eb0945bf8ae73061d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXBYQQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrcMEzp9yJP7CvQZKjSfMkB4UAcbfIBqr63degMxxzwIgSw%2BKPpCV6uq0Fc6eK2V%2F%2FtKr1m18%2FPz%2BXoyIAz86rbsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFxD1hPE5if2DATm8SrcA%2Bfot3ReahxOGVxQ2%2FhE%2BdP4ZrBwk00xtowNMGMEMEE5aRlGlfZ7AWCH4Ea7b02CmqHK2c5jU3lcLHkKtnQvGnZjHP0vypa0s2mMt2pHJs%2BlynlWI%2Fp95WvHdLeuFxw6QBcmOTnim3kQy7qsa5%2Bo5D1GKmZ%2F3Z%2B%2BOf%2B0z2N61p51Fcz0Ss6LBv%2BVGSXZ7ZB3NwvYURCUnVpiI1n5odxaFdk%2FZLi4a1Njs94kErxVJ7Crofk43agdIoP4kB31faUNN9Ai%2BNy4CVh6AjvGQ%2Fj4ri7QT6KCpqMgmpd5v%2FJVZsaDKleE4TvhBkHZkPpa42e9ZQWBZEQZwXp8zEMvTRF%2B0LdxNJzkNBRHn7LwYgQk7bPJdxilYe8xEecnYqBV13EJP0qAMQZttyfP6bPnMurpxKjdaifzv8QjASdfia7kyG4vYYciKlXEDKHUhyfw3KpHEmqtEe0XGzgvDr%2BNJx53Kd2mD0yCQJbooDjqx8umQBfJ%2BzBESY%2BvVJIHMDBn5tsygz9Ytj5FuvxPMuI1m2%2BWC1Ipmh6eCaEMRhyXzqFw3uP%2BGPIdN12AgjxB%2FRTo%2BF4A9IuY7ag1c8JQb%2BOHKdcXhRgx8v0dLCek6HiNHrzx3diF9s3lMH%2B8iFmyWsjEMO291L8GOqUBgeQcabsD%2Fe2gGiVFhrUn59UXCuqXkeoEHluueGw3skHBGldp3%2F3yOBJkNjN2Sffn3Bav4f%2BakCl174KagLEnecrwfRRWRlYN30jiiEg%2BxsX8SOKsZXTvHyH1K4i2ynA%2FbgFhF83tzXeFVCG%2FbGMdRu2WuTxlcDWInW8yJr2MxprYs9NO%2B82GSlaX0YPM0eGDTUBq4DIxpXjtpXVXWle4oZFqpeUz&X-Amz-Signature=7ed13b3d6732cfff1a469677094226bfcc3b2862a2052a8b5fecb34845198404&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXBYQQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrcMEzp9yJP7CvQZKjSfMkB4UAcbfIBqr63degMxxzwIgSw%2BKPpCV6uq0Fc6eK2V%2F%2FtKr1m18%2FPz%2BXoyIAz86rbsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFxD1hPE5if2DATm8SrcA%2Bfot3ReahxOGVxQ2%2FhE%2BdP4ZrBwk00xtowNMGMEMEE5aRlGlfZ7AWCH4Ea7b02CmqHK2c5jU3lcLHkKtnQvGnZjHP0vypa0s2mMt2pHJs%2BlynlWI%2Fp95WvHdLeuFxw6QBcmOTnim3kQy7qsa5%2Bo5D1GKmZ%2F3Z%2B%2BOf%2B0z2N61p51Fcz0Ss6LBv%2BVGSXZ7ZB3NwvYURCUnVpiI1n5odxaFdk%2FZLi4a1Njs94kErxVJ7Crofk43agdIoP4kB31faUNN9Ai%2BNy4CVh6AjvGQ%2Fj4ri7QT6KCpqMgmpd5v%2FJVZsaDKleE4TvhBkHZkPpa42e9ZQWBZEQZwXp8zEMvTRF%2B0LdxNJzkNBRHn7LwYgQk7bPJdxilYe8xEecnYqBV13EJP0qAMQZttyfP6bPnMurpxKjdaifzv8QjASdfia7kyG4vYYciKlXEDKHUhyfw3KpHEmqtEe0XGzgvDr%2BNJx53Kd2mD0yCQJbooDjqx8umQBfJ%2BzBESY%2BvVJIHMDBn5tsygz9Ytj5FuvxPMuI1m2%2BWC1Ipmh6eCaEMRhyXzqFw3uP%2BGPIdN12AgjxB%2FRTo%2BF4A9IuY7ag1c8JQb%2BOHKdcXhRgx8v0dLCek6HiNHrzx3diF9s3lMH%2B8iFmyWsjEMO291L8GOqUBgeQcabsD%2Fe2gGiVFhrUn59UXCuqXkeoEHluueGw3skHBGldp3%2F3yOBJkNjN2Sffn3Bav4f%2BakCl174KagLEnecrwfRRWRlYN30jiiEg%2BxsX8SOKsZXTvHyH1K4i2ynA%2FbgFhF83tzXeFVCG%2FbGMdRu2WuTxlcDWInW8yJr2MxprYs9NO%2B82GSlaX0YPM0eGDTUBq4DIxpXjtpXVXWle4oZFqpeUz&X-Amz-Signature=9e25882515def0b145e0891847334c48d900b64bdf132b430d4308e41a10aa1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
