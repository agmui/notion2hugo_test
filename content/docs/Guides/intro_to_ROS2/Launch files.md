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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCJJROC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2g65JIaESA0yxeq9TqqFFBNvUb3d8uaIIGUOtKoDRsAiBq4%2Bhh8u%2B4ooBr01vS6NCT2TuVvPqnJJ3KOwATOg48wiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIPN%2FFN9awBfAzHiKtwDDALra3zn6AYdNHOYJdyRh1HSNU2HUucjkrYiCiMGk5817UCMF6zPU0pzrheqQTcGRKOfUWDsW5FhTio%2B4QAaXEKW%2BXNAv3Jq2BIjKOvvJmKNPi7g3BAOd4cEVJuqXctYTk5bcdc9%2FRlJSFTxzmjvXfNFMUREU%2BDcnHgjPcfNo6dU5SotPozMb9QbSUWjwPkekA4bGFcTaHjL3m4aQ%2BzKsBcmSgAGy56T5jnQGn21vGtQlKCWqJidbjgiOuZhyoiXsV9Dbp%2FBNV6qsWFkZcDBG1JvTgeXOD6y1d2%2FhOH30KFaqPvynnirVNw1jF9y%2BZrN4%2FImG53z9RREB1DHvniUqsCH%2B%2B3xb1bWVOjwzZ03NjTv4ZYNJtZlf5cwPK0CjMl3HFnEXBIgi0ECNuFCutQIQNwJ%2F5TOknFGcR5fsXJr9P%2BK6B2g5%2BuKUbu757nZSTmt%2FpHGyn%2Bjy0NyjCVYGr1%2FbivzzysAUThPSwJyoiFqZKJI0Cx%2FZ7jeXJGtGfs4QNp1n0JzbJNHdTvjovt5%2BLVqP%2FbMyp5ABYmAr430sw8JMNAeOyJ12%2FhgM2biVjMjDWzQNFnE6Lg76e3vdhjrwcD9Ia69%2BkQj4QY5vFE7u3XzN77CuEi%2BfX1Hz5pEYPIw4a%2F2wAY6pgHRIVIOVkIX72JCRL3yNuOPG3%2FJTZ%2FIgVPlZO8hjc59rCwhRbFm%2FEo9VJB6PpnZnd5rymss5zTnwfKD1nk61X6nU9sUroCRgYCzgnXLQvbqRSzLXc52g57vYT%2BFnGe78vibQ6tuHMTuhqhYrFINHgyYBM4OPcxe8S862VKTwujzTWvg963WHJja7%2FzET6FtAStiz9vAM9jK1PYiz305%2FJUWUbcnT5lB&X-Amz-Signature=eb5d3fc1b9d979b2808207bdf9855e30f150b8124950df453c0b5135850100cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCJJROC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2g65JIaESA0yxeq9TqqFFBNvUb3d8uaIIGUOtKoDRsAiBq4%2Bhh8u%2B4ooBr01vS6NCT2TuVvPqnJJ3KOwATOg48wiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIPN%2FFN9awBfAzHiKtwDDALra3zn6AYdNHOYJdyRh1HSNU2HUucjkrYiCiMGk5817UCMF6zPU0pzrheqQTcGRKOfUWDsW5FhTio%2B4QAaXEKW%2BXNAv3Jq2BIjKOvvJmKNPi7g3BAOd4cEVJuqXctYTk5bcdc9%2FRlJSFTxzmjvXfNFMUREU%2BDcnHgjPcfNo6dU5SotPozMb9QbSUWjwPkekA4bGFcTaHjL3m4aQ%2BzKsBcmSgAGy56T5jnQGn21vGtQlKCWqJidbjgiOuZhyoiXsV9Dbp%2FBNV6qsWFkZcDBG1JvTgeXOD6y1d2%2FhOH30KFaqPvynnirVNw1jF9y%2BZrN4%2FImG53z9RREB1DHvniUqsCH%2B%2B3xb1bWVOjwzZ03NjTv4ZYNJtZlf5cwPK0CjMl3HFnEXBIgi0ECNuFCutQIQNwJ%2F5TOknFGcR5fsXJr9P%2BK6B2g5%2BuKUbu757nZSTmt%2FpHGyn%2Bjy0NyjCVYGr1%2FbivzzysAUThPSwJyoiFqZKJI0Cx%2FZ7jeXJGtGfs4QNp1n0JzbJNHdTvjovt5%2BLVqP%2FbMyp5ABYmAr430sw8JMNAeOyJ12%2FhgM2biVjMjDWzQNFnE6Lg76e3vdhjrwcD9Ia69%2BkQj4QY5vFE7u3XzN77CuEi%2BfX1Hz5pEYPIw4a%2F2wAY6pgHRIVIOVkIX72JCRL3yNuOPG3%2FJTZ%2FIgVPlZO8hjc59rCwhRbFm%2FEo9VJB6PpnZnd5rymss5zTnwfKD1nk61X6nU9sUroCRgYCzgnXLQvbqRSzLXc52g57vYT%2BFnGe78vibQ6tuHMTuhqhYrFINHgyYBM4OPcxe8S862VKTwujzTWvg963WHJja7%2FzET6FtAStiz9vAM9jK1PYiz305%2FJUWUbcnT5lB&X-Amz-Signature=177463a75ad56773159302285e4168efd07b60e1b3ef07b5c088f2755c16240f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCJJROC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2g65JIaESA0yxeq9TqqFFBNvUb3d8uaIIGUOtKoDRsAiBq4%2Bhh8u%2B4ooBr01vS6NCT2TuVvPqnJJ3KOwATOg48wiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIPN%2FFN9awBfAzHiKtwDDALra3zn6AYdNHOYJdyRh1HSNU2HUucjkrYiCiMGk5817UCMF6zPU0pzrheqQTcGRKOfUWDsW5FhTio%2B4QAaXEKW%2BXNAv3Jq2BIjKOvvJmKNPi7g3BAOd4cEVJuqXctYTk5bcdc9%2FRlJSFTxzmjvXfNFMUREU%2BDcnHgjPcfNo6dU5SotPozMb9QbSUWjwPkekA4bGFcTaHjL3m4aQ%2BzKsBcmSgAGy56T5jnQGn21vGtQlKCWqJidbjgiOuZhyoiXsV9Dbp%2FBNV6qsWFkZcDBG1JvTgeXOD6y1d2%2FhOH30KFaqPvynnirVNw1jF9y%2BZrN4%2FImG53z9RREB1DHvniUqsCH%2B%2B3xb1bWVOjwzZ03NjTv4ZYNJtZlf5cwPK0CjMl3HFnEXBIgi0ECNuFCutQIQNwJ%2F5TOknFGcR5fsXJr9P%2BK6B2g5%2BuKUbu757nZSTmt%2FpHGyn%2Bjy0NyjCVYGr1%2FbivzzysAUThPSwJyoiFqZKJI0Cx%2FZ7jeXJGtGfs4QNp1n0JzbJNHdTvjovt5%2BLVqP%2FbMyp5ABYmAr430sw8JMNAeOyJ12%2FhgM2biVjMjDWzQNFnE6Lg76e3vdhjrwcD9Ia69%2BkQj4QY5vFE7u3XzN77CuEi%2BfX1Hz5pEYPIw4a%2F2wAY6pgHRIVIOVkIX72JCRL3yNuOPG3%2FJTZ%2FIgVPlZO8hjc59rCwhRbFm%2FEo9VJB6PpnZnd5rymss5zTnwfKD1nk61X6nU9sUroCRgYCzgnXLQvbqRSzLXc52g57vYT%2BFnGe78vibQ6tuHMTuhqhYrFINHgyYBM4OPcxe8S862VKTwujzTWvg963WHJja7%2FzET6FtAStiz9vAM9jK1PYiz305%2FJUWUbcnT5lB&X-Amz-Signature=dbf9b8a7c41b4b4dc193efc6680082d6aec3df96a0cc3c8c0068c07f80770535&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
