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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSKQORN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBQ542sZZyGAsR%2BtJmP2l4JLBUOjhC%2BBndiUlB9YOKtiAiEAmoNIN9KRo6S732Zz3NQa55M4LDaAuynKkD3pimx3tbQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKMMM%2F%2F29KrgkZ%2B1OyrcA%2BmBKtIAR9pgzO3Xvzjc9nVoMoGT8sgzpsMOg2yV7ziibJfWYG1O1FwBI5FthOqbcFSojP5MErOqAdentkUrjpsyc9pDoBlDEjM4STzvLlrgt5I5%2FssoCc2gpmN04%2B5pGd5LBarwSkheVRS2WgraE6C10DrEzIpmiSge79End1ODaLCegLmgtiJjS%2F230WkSvl17gFJldaflP%2F5IbX%2BhfR9l8Hv1PQ3%2BIukJptkz71d7U4%2BtkpEyc2FBqTn3TX0eJ6iFCg5QT9l0sNanK4%2F%2B9JvpMwllCwTje4ZC3KbKeN5cmmMcSCq9XAdC8LEZ%2FExAyT3ZEk0MHH6oS%2BtpbWy%2BnutVrHes8S8x0%2FAa%2FZGfu7gNt7gm0YMeMd5dyhiQSVcZZwAWO4sGDg3tsm82CVs%2BUf39UZihqiIxH9cxSEBAiLg5NrfBU0gDH7%2F34M3UcNp64ZRHAuo2t2sjh1H2wko3cW5SYehDnAfvy%2BsCr7Wxpv0jCB4mWZhjfV7wOy%2BCU8%2FihDMBn1%2BWRwl0ER7jkHLqjsq1ffDJ%2FG%2FNP4QfA9XWKx5clhdOQg%2FuECMBn4IAYc4M1wJ6SvH0TYqSaWhVA4A6kzSmY9VqV7TR06XgXpDwCjWrpZkpEKDAMSeFSEfyMOOTtMIGOqUBliCkbXeOumk6o1w%2BGHylJtiJq7KNys%2BxT0jwyiX%2FTPvFX0%2FQDNsQFOUAqZY547XRyO4wkwN8mfWDzRYhP7TfU4NAUPsd63jAUzA5HojZVUa%2BNHVyHZeEIIUUnXMnA%2BNVoEjsw%2FL4mH0CU8Ocb3cjwLa3SDznTD%2Bk%2BBdbw5U3c9zBEXswCXxuwUseVWEfLlPc%2FTUOt6O32JAqM%2Bag9cT0BzhCnJws&X-Amz-Signature=9aa15cf8a8877dca77ff72b08d2a6f9b19ac3fa1222963e26ea5a0fe3240c445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSKQORN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBQ542sZZyGAsR%2BtJmP2l4JLBUOjhC%2BBndiUlB9YOKtiAiEAmoNIN9KRo6S732Zz3NQa55M4LDaAuynKkD3pimx3tbQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKMMM%2F%2F29KrgkZ%2B1OyrcA%2BmBKtIAR9pgzO3Xvzjc9nVoMoGT8sgzpsMOg2yV7ziibJfWYG1O1FwBI5FthOqbcFSojP5MErOqAdentkUrjpsyc9pDoBlDEjM4STzvLlrgt5I5%2FssoCc2gpmN04%2B5pGd5LBarwSkheVRS2WgraE6C10DrEzIpmiSge79End1ODaLCegLmgtiJjS%2F230WkSvl17gFJldaflP%2F5IbX%2BhfR9l8Hv1PQ3%2BIukJptkz71d7U4%2BtkpEyc2FBqTn3TX0eJ6iFCg5QT9l0sNanK4%2F%2B9JvpMwllCwTje4ZC3KbKeN5cmmMcSCq9XAdC8LEZ%2FExAyT3ZEk0MHH6oS%2BtpbWy%2BnutVrHes8S8x0%2FAa%2FZGfu7gNt7gm0YMeMd5dyhiQSVcZZwAWO4sGDg3tsm82CVs%2BUf39UZihqiIxH9cxSEBAiLg5NrfBU0gDH7%2F34M3UcNp64ZRHAuo2t2sjh1H2wko3cW5SYehDnAfvy%2BsCr7Wxpv0jCB4mWZhjfV7wOy%2BCU8%2FihDMBn1%2BWRwl0ER7jkHLqjsq1ffDJ%2FG%2FNP4QfA9XWKx5clhdOQg%2FuECMBn4IAYc4M1wJ6SvH0TYqSaWhVA4A6kzSmY9VqV7TR06XgXpDwCjWrpZkpEKDAMSeFSEfyMOOTtMIGOqUBliCkbXeOumk6o1w%2BGHylJtiJq7KNys%2BxT0jwyiX%2FTPvFX0%2FQDNsQFOUAqZY547XRyO4wkwN8mfWDzRYhP7TfU4NAUPsd63jAUzA5HojZVUa%2BNHVyHZeEIIUUnXMnA%2BNVoEjsw%2FL4mH0CU8Ocb3cjwLa3SDznTD%2Bk%2BBdbw5U3c9zBEXswCXxuwUseVWEfLlPc%2FTUOt6O32JAqM%2Bag9cT0BzhCnJws&X-Amz-Signature=14cc01580b45af5e7237e0603aa1aacfb4521f8aadef24a57d06d4c3b176a685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSKQORN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBQ542sZZyGAsR%2BtJmP2l4JLBUOjhC%2BBndiUlB9YOKtiAiEAmoNIN9KRo6S732Zz3NQa55M4LDaAuynKkD3pimx3tbQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKMMM%2F%2F29KrgkZ%2B1OyrcA%2BmBKtIAR9pgzO3Xvzjc9nVoMoGT8sgzpsMOg2yV7ziibJfWYG1O1FwBI5FthOqbcFSojP5MErOqAdentkUrjpsyc9pDoBlDEjM4STzvLlrgt5I5%2FssoCc2gpmN04%2B5pGd5LBarwSkheVRS2WgraE6C10DrEzIpmiSge79End1ODaLCegLmgtiJjS%2F230WkSvl17gFJldaflP%2F5IbX%2BhfR9l8Hv1PQ3%2BIukJptkz71d7U4%2BtkpEyc2FBqTn3TX0eJ6iFCg5QT9l0sNanK4%2F%2B9JvpMwllCwTje4ZC3KbKeN5cmmMcSCq9XAdC8LEZ%2FExAyT3ZEk0MHH6oS%2BtpbWy%2BnutVrHes8S8x0%2FAa%2FZGfu7gNt7gm0YMeMd5dyhiQSVcZZwAWO4sGDg3tsm82CVs%2BUf39UZihqiIxH9cxSEBAiLg5NrfBU0gDH7%2F34M3UcNp64ZRHAuo2t2sjh1H2wko3cW5SYehDnAfvy%2BsCr7Wxpv0jCB4mWZhjfV7wOy%2BCU8%2FihDMBn1%2BWRwl0ER7jkHLqjsq1ffDJ%2FG%2FNP4QfA9XWKx5clhdOQg%2FuECMBn4IAYc4M1wJ6SvH0TYqSaWhVA4A6kzSmY9VqV7TR06XgXpDwCjWrpZkpEKDAMSeFSEfyMOOTtMIGOqUBliCkbXeOumk6o1w%2BGHylJtiJq7KNys%2BxT0jwyiX%2FTPvFX0%2FQDNsQFOUAqZY547XRyO4wkwN8mfWDzRYhP7TfU4NAUPsd63jAUzA5HojZVUa%2BNHVyHZeEIIUUnXMnA%2BNVoEjsw%2FL4mH0CU8Ocb3cjwLa3SDznTD%2Bk%2BBdbw5U3c9zBEXswCXxuwUseVWEfLlPc%2FTUOt6O32JAqM%2Bag9cT0BzhCnJws&X-Amz-Signature=7a7e2025feb56e250a0f3a5e7b81e095384f5f127afb5d95063602a94856343e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
