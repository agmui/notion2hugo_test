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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKMD6WV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHIwm91GjSf4bSwojfuBPdfpxsvdEaTWWE8wh4FYODWLAiEAk6DXlnqqPIXBvReA3uMwHmIwC1ZiiZ8VqR8ALxCywR0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd1GQ6ReI318w%2F0aSrcA%2B2zOpJRsRGOx%2FpKjMSnGFml95ewCEby1EkWnjhVChZb%2FcJFse2%2BnVzDejZ1gXymZig5lRHrqioaIXT7tYT30pu114gIkUpK3KRixKCuBAhQG2WhqcEvNjjB33EmLS2GrQZVNayAGA0SLnzklr9zpMU05SDv%2FysztKfw3WPUf8B1K2TiRYBQHvs%2BDaHgeqxi6fXXePGrH4Ha3OpJji8BCgchHjk2Z1sJB0m%2BbiGDcid27dVFFFDJu%2BmQuQUfn5tLotPsn%2BAz%2Fb2OtEdRnlyoV5q5y5%2BnZvqQ%2FoeqymNwCnFzhdUs2hb%2B6vowstpJkeNaN8B6gQZhjghn59%2Fwrk%2B3DHXohO1xnR5oNJCOh09ITpooD2SxEKTfavFyIh66O8yHGEnaZbN4PY0uAKw5eXpj4A7wKtTuNNicXk74OeUK2ryTqrPRm5VpmJRP5xwlMTfSk6hmi33DBXjqU1fzo0Hi6b2FPmS1hlBVzXPniSzzCjoQELnPDxIw%2FrQppaDv%2BVyMFEY2rHrru0P5sGSPgtQVSdDWYRURrSbiCGf2pAGlfniu%2B3NvNSJXMgdUnHg2uK6ozj3p1my2ZMv0%2BU%2B2Jb%2B8MkvwGNhZFOJ6tcJVAZNueEth0pH5VfuXZr6JmshQMLPBjMEGOqUB12ohrJ8juKgLKR87tY11ej7PKLywQ0baUZ2thvhgoerx5zOiwgtz7smVo8Swh%2FMQ5Jwrzc6Jrt63HkLC%2FElzYzq0dcX5WeJzwiplvJW%2BI0Nqx0VSRel%2BNRbYdS%2BvJiy72RWRh9r9nSeprRdedbc%2F1v%2B%2FnwF7EYyxWobHg4mbUprzqdZFGcAl91HkJnfKqYjcGP28FET7q%2BOdILNzEFBtoC83v1Ly&X-Amz-Signature=393b22edc0983aac7bf8aeba62ca142df7ea2eb9ce6d9730acd2c0e30e863361&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKMD6WV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHIwm91GjSf4bSwojfuBPdfpxsvdEaTWWE8wh4FYODWLAiEAk6DXlnqqPIXBvReA3uMwHmIwC1ZiiZ8VqR8ALxCywR0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd1GQ6ReI318w%2F0aSrcA%2B2zOpJRsRGOx%2FpKjMSnGFml95ewCEby1EkWnjhVChZb%2FcJFse2%2BnVzDejZ1gXymZig5lRHrqioaIXT7tYT30pu114gIkUpK3KRixKCuBAhQG2WhqcEvNjjB33EmLS2GrQZVNayAGA0SLnzklr9zpMU05SDv%2FysztKfw3WPUf8B1K2TiRYBQHvs%2BDaHgeqxi6fXXePGrH4Ha3OpJji8BCgchHjk2Z1sJB0m%2BbiGDcid27dVFFFDJu%2BmQuQUfn5tLotPsn%2BAz%2Fb2OtEdRnlyoV5q5y5%2BnZvqQ%2FoeqymNwCnFzhdUs2hb%2B6vowstpJkeNaN8B6gQZhjghn59%2Fwrk%2B3DHXohO1xnR5oNJCOh09ITpooD2SxEKTfavFyIh66O8yHGEnaZbN4PY0uAKw5eXpj4A7wKtTuNNicXk74OeUK2ryTqrPRm5VpmJRP5xwlMTfSk6hmi33DBXjqU1fzo0Hi6b2FPmS1hlBVzXPniSzzCjoQELnPDxIw%2FrQppaDv%2BVyMFEY2rHrru0P5sGSPgtQVSdDWYRURrSbiCGf2pAGlfniu%2B3NvNSJXMgdUnHg2uK6ozj3p1my2ZMv0%2BU%2B2Jb%2B8MkvwGNhZFOJ6tcJVAZNueEth0pH5VfuXZr6JmshQMLPBjMEGOqUB12ohrJ8juKgLKR87tY11ej7PKLywQ0baUZ2thvhgoerx5zOiwgtz7smVo8Swh%2FMQ5Jwrzc6Jrt63HkLC%2FElzYzq0dcX5WeJzwiplvJW%2BI0Nqx0VSRel%2BNRbYdS%2BvJiy72RWRh9r9nSeprRdedbc%2F1v%2B%2FnwF7EYyxWobHg4mbUprzqdZFGcAl91HkJnfKqYjcGP28FET7q%2BOdILNzEFBtoC83v1Ly&X-Amz-Signature=390edd3f2c501f80aad69d50e868cbbcbe4dbf64b8bf6513dda09f11679d4f14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKMD6WV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHIwm91GjSf4bSwojfuBPdfpxsvdEaTWWE8wh4FYODWLAiEAk6DXlnqqPIXBvReA3uMwHmIwC1ZiiZ8VqR8ALxCywR0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd1GQ6ReI318w%2F0aSrcA%2B2zOpJRsRGOx%2FpKjMSnGFml95ewCEby1EkWnjhVChZb%2FcJFse2%2BnVzDejZ1gXymZig5lRHrqioaIXT7tYT30pu114gIkUpK3KRixKCuBAhQG2WhqcEvNjjB33EmLS2GrQZVNayAGA0SLnzklr9zpMU05SDv%2FysztKfw3WPUf8B1K2TiRYBQHvs%2BDaHgeqxi6fXXePGrH4Ha3OpJji8BCgchHjk2Z1sJB0m%2BbiGDcid27dVFFFDJu%2BmQuQUfn5tLotPsn%2BAz%2Fb2OtEdRnlyoV5q5y5%2BnZvqQ%2FoeqymNwCnFzhdUs2hb%2B6vowstpJkeNaN8B6gQZhjghn59%2Fwrk%2B3DHXohO1xnR5oNJCOh09ITpooD2SxEKTfavFyIh66O8yHGEnaZbN4PY0uAKw5eXpj4A7wKtTuNNicXk74OeUK2ryTqrPRm5VpmJRP5xwlMTfSk6hmi33DBXjqU1fzo0Hi6b2FPmS1hlBVzXPniSzzCjoQELnPDxIw%2FrQppaDv%2BVyMFEY2rHrru0P5sGSPgtQVSdDWYRURrSbiCGf2pAGlfniu%2B3NvNSJXMgdUnHg2uK6ozj3p1my2ZMv0%2BU%2B2Jb%2B8MkvwGNhZFOJ6tcJVAZNueEth0pH5VfuXZr6JmshQMLPBjMEGOqUB12ohrJ8juKgLKR87tY11ej7PKLywQ0baUZ2thvhgoerx5zOiwgtz7smVo8Swh%2FMQ5Jwrzc6Jrt63HkLC%2FElzYzq0dcX5WeJzwiplvJW%2BI0Nqx0VSRel%2BNRbYdS%2BvJiy72RWRh9r9nSeprRdedbc%2F1v%2B%2FnwF7EYyxWobHg4mbUprzqdZFGcAl91HkJnfKqYjcGP28FET7q%2BOdILNzEFBtoC83v1Ly&X-Amz-Signature=5a6eadf592997fd2375a50e9b20b619020008c19209486205012fd6d911439ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
