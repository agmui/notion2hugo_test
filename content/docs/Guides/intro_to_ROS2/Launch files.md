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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZV2MYBP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3Lu40ikPnXA08HrD5PtnHq%2FBM4bDLTgeLMRceTTiDPAiBo1Vk3Pgn24%2FF9wjpey6cDiJBK3UT7oLh%2BDHb%2FSNxY8yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSfqF0cMcrCZb6Z%2FHKtwDVURW23PX%2BTRmNnrXMbWW1r6N25AWR2ZFzlk9Gycn3IDQuHM3jNyFpC1bZoWZinRgoYiePWVc4ZkiUqAZ3b7Bl9ZtmydbPzQDqS9FtyuLdtlcx%2BLNMjjcYuaDle%2BdTJaU99U45YR6IEm7xIvZzFXNBmUuugeTKJAzZyaUqanULYnBxiIs4%2FkKo32q96xoNr%2FjisY8mYGlHUpVAgCGMiMV6UxzZ449VYGEPSmD2Uq%2F4aufCyk%2BTfFYIKh2eRkXdeQiOUfbmUcdvVmJI65GeXRBD8QElKOa0Rx5o1UMOKgoZgbhq6RNODjtXDFMBN%2FfpFjBy8isHPqJRpDssDnfs6dT8pU2G7KrPTE0G%2BzIo2tJ2m2vS8q9lE%2FDP4c392QzxIbmzBs2kaj6j8sXig1EU1hPgXZHRA96pKsnuNzIfGzR7kcN1N06U7ME1%2BKCqBvfyGXZctqT3T%2FWMcrKiMv%2BIo%2F6aFrxbPfrB7wa9ld8En16tbz0O%2BjQnfkrEJx53GcJlom4V9pZfjejmbqBxjigShoSHTX%2B4ETNrgOrQ2Nq1CsU9RF%2BP9ATDUvgUpV45RdhqIaL0%2B1k6I1W5GmW0bQKoHUCfzXvudq3wuB%2FpvdH5W2XVX4mALmOuTWJWsnSQ%2FIw64WjvQY6pgE%2FMEVbBtHpYeYfsFeFbnCCLTBT1YDm5dCuPLOI7y%2FYEALQ6%2FfJ7mvgXp5lb%2BKPrklspv4xCkLQXMBVEgUPYO%2B18IYM%2FVWS9kQzYCnJ%2BrBsMgwiyM3hJDUQpfoZPzIbLjrAEOYspSMP5pZJycx61qCaiRfM%2FDCb69kA1RQ75egLlUEqrlOJAIKIzGGZ%2F7AjMKgJF3OXenSWdHPPngSwGdwzzsmBaqlm&X-Amz-Signature=00ee7f66cd9e59626ee7cf4b349a4e4cf6e3db59ddaf2dcb59fb15ccdc87a3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZV2MYBP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3Lu40ikPnXA08HrD5PtnHq%2FBM4bDLTgeLMRceTTiDPAiBo1Vk3Pgn24%2FF9wjpey6cDiJBK3UT7oLh%2BDHb%2FSNxY8yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSfqF0cMcrCZb6Z%2FHKtwDVURW23PX%2BTRmNnrXMbWW1r6N25AWR2ZFzlk9Gycn3IDQuHM3jNyFpC1bZoWZinRgoYiePWVc4ZkiUqAZ3b7Bl9ZtmydbPzQDqS9FtyuLdtlcx%2BLNMjjcYuaDle%2BdTJaU99U45YR6IEm7xIvZzFXNBmUuugeTKJAzZyaUqanULYnBxiIs4%2FkKo32q96xoNr%2FjisY8mYGlHUpVAgCGMiMV6UxzZ449VYGEPSmD2Uq%2F4aufCyk%2BTfFYIKh2eRkXdeQiOUfbmUcdvVmJI65GeXRBD8QElKOa0Rx5o1UMOKgoZgbhq6RNODjtXDFMBN%2FfpFjBy8isHPqJRpDssDnfs6dT8pU2G7KrPTE0G%2BzIo2tJ2m2vS8q9lE%2FDP4c392QzxIbmzBs2kaj6j8sXig1EU1hPgXZHRA96pKsnuNzIfGzR7kcN1N06U7ME1%2BKCqBvfyGXZctqT3T%2FWMcrKiMv%2BIo%2F6aFrxbPfrB7wa9ld8En16tbz0O%2BjQnfkrEJx53GcJlom4V9pZfjejmbqBxjigShoSHTX%2B4ETNrgOrQ2Nq1CsU9RF%2BP9ATDUvgUpV45RdhqIaL0%2B1k6I1W5GmW0bQKoHUCfzXvudq3wuB%2FpvdH5W2XVX4mALmOuTWJWsnSQ%2FIw64WjvQY6pgE%2FMEVbBtHpYeYfsFeFbnCCLTBT1YDm5dCuPLOI7y%2FYEALQ6%2FfJ7mvgXp5lb%2BKPrklspv4xCkLQXMBVEgUPYO%2B18IYM%2FVWS9kQzYCnJ%2BrBsMgwiyM3hJDUQpfoZPzIbLjrAEOYspSMP5pZJycx61qCaiRfM%2FDCb69kA1RQ75egLlUEqrlOJAIKIzGGZ%2F7AjMKgJF3OXenSWdHPPngSwGdwzzsmBaqlm&X-Amz-Signature=8ed6a259ace63502bd596bec5ce38a3ece3e68e6157c2a30ea19683e658305eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZV2MYBP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3Lu40ikPnXA08HrD5PtnHq%2FBM4bDLTgeLMRceTTiDPAiBo1Vk3Pgn24%2FF9wjpey6cDiJBK3UT7oLh%2BDHb%2FSNxY8yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSfqF0cMcrCZb6Z%2FHKtwDVURW23PX%2BTRmNnrXMbWW1r6N25AWR2ZFzlk9Gycn3IDQuHM3jNyFpC1bZoWZinRgoYiePWVc4ZkiUqAZ3b7Bl9ZtmydbPzQDqS9FtyuLdtlcx%2BLNMjjcYuaDle%2BdTJaU99U45YR6IEm7xIvZzFXNBmUuugeTKJAzZyaUqanULYnBxiIs4%2FkKo32q96xoNr%2FjisY8mYGlHUpVAgCGMiMV6UxzZ449VYGEPSmD2Uq%2F4aufCyk%2BTfFYIKh2eRkXdeQiOUfbmUcdvVmJI65GeXRBD8QElKOa0Rx5o1UMOKgoZgbhq6RNODjtXDFMBN%2FfpFjBy8isHPqJRpDssDnfs6dT8pU2G7KrPTE0G%2BzIo2tJ2m2vS8q9lE%2FDP4c392QzxIbmzBs2kaj6j8sXig1EU1hPgXZHRA96pKsnuNzIfGzR7kcN1N06U7ME1%2BKCqBvfyGXZctqT3T%2FWMcrKiMv%2BIo%2F6aFrxbPfrB7wa9ld8En16tbz0O%2BjQnfkrEJx53GcJlom4V9pZfjejmbqBxjigShoSHTX%2B4ETNrgOrQ2Nq1CsU9RF%2BP9ATDUvgUpV45RdhqIaL0%2B1k6I1W5GmW0bQKoHUCfzXvudq3wuB%2FpvdH5W2XVX4mALmOuTWJWsnSQ%2FIw64WjvQY6pgE%2FMEVbBtHpYeYfsFeFbnCCLTBT1YDm5dCuPLOI7y%2FYEALQ6%2FfJ7mvgXp5lb%2BKPrklspv4xCkLQXMBVEgUPYO%2B18IYM%2FVWS9kQzYCnJ%2BrBsMgwiyM3hJDUQpfoZPzIbLjrAEOYspSMP5pZJycx61qCaiRfM%2FDCb69kA1RQ75egLlUEqrlOJAIKIzGGZ%2F7AjMKgJF3OXenSWdHPPngSwGdwzzsmBaqlm&X-Amz-Signature=0ae9c5732873405d1f2d81a163bfdb1dc3ccf6443b038eb153f6409a91ba1b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
