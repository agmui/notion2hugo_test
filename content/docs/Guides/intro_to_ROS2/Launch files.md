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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTZSIAM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD19a44RHoyv8bh3WLXNNntYzbcHoKpYMekLYmPRG%2B%2BQwIhAMvwOVoLIsBy9aDDD58WbZ%2BhJLvRsmUlzhMNsjAU7J0TKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye3CidgbJe36Hjo6cq3APZ5ebQqX8MlTf%2Bez3uj0WgYrYUKIAvT30TdyzGag2RZiuNwgD64S2qRSzGdawxt234jfH2w1Z2hUdmulmVq2SJeYDtoS2DFqKSncQFMtDvf83oz%2FkdzjOAK%2FizBSfb20PZS8udxgc0F1PLi31CFu%2BeVzHt2SYP6uNjkb%2FsRPhsnbkifQh8whS0A98LledHcsx6PzyZivPwWAJMEiZ0usOVfESvznPkZvBH3h4PiT6bFxqpfsy8MVII7SA4JzLIt4yIj5%2FHyswDpMC%2FI5H2G4lY%2BBzfR%2FgSPTqHoqyQhyr8nJotn38RKLhpJJVqykUtt4ZmL42EhdAlSrHOXFINaf0fLFK9Z2PmtJKUCKHz9tHk8ULvaivX1MAghByQ%2BVJA5JiAn7%2BOhO1uhUvDy5wpIb2IvaZqTcaaUg44LKgeJc6yy8%2FLe9aqcz2fC6MzxBamAkh0MYzkN25MRm0gAL1nSKAFCaToIZQXX2GF57sJolaM2UAkzuG3motUZlcJL%2FzIOp7%2FOIAR%2FktppII6Pg0Wd%2F4fxCdRCGYep9ipbbUqWJ%2FK%2Fmn2seYJ7j90JQTCGwtPPECQ7vnBdCWS40xKgiJ%2BPLIlEWVxk9XVSHOUraH0oiJsCM5wZZ52KeLJ4sO6QTDNu4G9BjqkAeC3%2FALZWqRF%2BjC9ADBtQynHDMgi25BAkkf2S4Hmtu%2B8Q42NHC8ROz0bppJm1jV35cFiVGl4FaAqvMGd9cNc8Nie9n7fX%2BuxOl0dW%2BnlfPgwzvtuZh8tHy%2F0hjqQoijEWu6VyQbagrigPHHMoq2%2BzDHymZILSdVXrJ52dOpa8hKwnvqYljR40PpAShMJWvB6jS1ysts3RHcvI%2BlwiIdBpu3O1%2Fx1&X-Amz-Signature=a257917889bfa71c4e056677576d9c4d24c7134c408a56f3756d366cad0673ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTZSIAM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD19a44RHoyv8bh3WLXNNntYzbcHoKpYMekLYmPRG%2B%2BQwIhAMvwOVoLIsBy9aDDD58WbZ%2BhJLvRsmUlzhMNsjAU7J0TKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye3CidgbJe36Hjo6cq3APZ5ebQqX8MlTf%2Bez3uj0WgYrYUKIAvT30TdyzGag2RZiuNwgD64S2qRSzGdawxt234jfH2w1Z2hUdmulmVq2SJeYDtoS2DFqKSncQFMtDvf83oz%2FkdzjOAK%2FizBSfb20PZS8udxgc0F1PLi31CFu%2BeVzHt2SYP6uNjkb%2FsRPhsnbkifQh8whS0A98LledHcsx6PzyZivPwWAJMEiZ0usOVfESvznPkZvBH3h4PiT6bFxqpfsy8MVII7SA4JzLIt4yIj5%2FHyswDpMC%2FI5H2G4lY%2BBzfR%2FgSPTqHoqyQhyr8nJotn38RKLhpJJVqykUtt4ZmL42EhdAlSrHOXFINaf0fLFK9Z2PmtJKUCKHz9tHk8ULvaivX1MAghByQ%2BVJA5JiAn7%2BOhO1uhUvDy5wpIb2IvaZqTcaaUg44LKgeJc6yy8%2FLe9aqcz2fC6MzxBamAkh0MYzkN25MRm0gAL1nSKAFCaToIZQXX2GF57sJolaM2UAkzuG3motUZlcJL%2FzIOp7%2FOIAR%2FktppII6Pg0Wd%2F4fxCdRCGYep9ipbbUqWJ%2FK%2Fmn2seYJ7j90JQTCGwtPPECQ7vnBdCWS40xKgiJ%2BPLIlEWVxk9XVSHOUraH0oiJsCM5wZZ52KeLJ4sO6QTDNu4G9BjqkAeC3%2FALZWqRF%2BjC9ADBtQynHDMgi25BAkkf2S4Hmtu%2B8Q42NHC8ROz0bppJm1jV35cFiVGl4FaAqvMGd9cNc8Nie9n7fX%2BuxOl0dW%2BnlfPgwzvtuZh8tHy%2F0hjqQoijEWu6VyQbagrigPHHMoq2%2BzDHymZILSdVXrJ52dOpa8hKwnvqYljR40PpAShMJWvB6jS1ysts3RHcvI%2BlwiIdBpu3O1%2Fx1&X-Amz-Signature=cefa13d6fb226af8c9564352cfa423f63c49a9af7b11ef3e6cbfc7f9850fdab4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTZSIAM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD19a44RHoyv8bh3WLXNNntYzbcHoKpYMekLYmPRG%2B%2BQwIhAMvwOVoLIsBy9aDDD58WbZ%2BhJLvRsmUlzhMNsjAU7J0TKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye3CidgbJe36Hjo6cq3APZ5ebQqX8MlTf%2Bez3uj0WgYrYUKIAvT30TdyzGag2RZiuNwgD64S2qRSzGdawxt234jfH2w1Z2hUdmulmVq2SJeYDtoS2DFqKSncQFMtDvf83oz%2FkdzjOAK%2FizBSfb20PZS8udxgc0F1PLi31CFu%2BeVzHt2SYP6uNjkb%2FsRPhsnbkifQh8whS0A98LledHcsx6PzyZivPwWAJMEiZ0usOVfESvznPkZvBH3h4PiT6bFxqpfsy8MVII7SA4JzLIt4yIj5%2FHyswDpMC%2FI5H2G4lY%2BBzfR%2FgSPTqHoqyQhyr8nJotn38RKLhpJJVqykUtt4ZmL42EhdAlSrHOXFINaf0fLFK9Z2PmtJKUCKHz9tHk8ULvaivX1MAghByQ%2BVJA5JiAn7%2BOhO1uhUvDy5wpIb2IvaZqTcaaUg44LKgeJc6yy8%2FLe9aqcz2fC6MzxBamAkh0MYzkN25MRm0gAL1nSKAFCaToIZQXX2GF57sJolaM2UAkzuG3motUZlcJL%2FzIOp7%2FOIAR%2FktppII6Pg0Wd%2F4fxCdRCGYep9ipbbUqWJ%2FK%2Fmn2seYJ7j90JQTCGwtPPECQ7vnBdCWS40xKgiJ%2BPLIlEWVxk9XVSHOUraH0oiJsCM5wZZ52KeLJ4sO6QTDNu4G9BjqkAeC3%2FALZWqRF%2BjC9ADBtQynHDMgi25BAkkf2S4Hmtu%2B8Q42NHC8ROz0bppJm1jV35cFiVGl4FaAqvMGd9cNc8Nie9n7fX%2BuxOl0dW%2BnlfPgwzvtuZh8tHy%2F0hjqQoijEWu6VyQbagrigPHHMoq2%2BzDHymZILSdVXrJ52dOpa8hKwnvqYljR40PpAShMJWvB6jS1ysts3RHcvI%2BlwiIdBpu3O1%2Fx1&X-Amz-Signature=fd02a093e7057b099321f44b12b534916cbaea82b3358933353389f09638ecd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
