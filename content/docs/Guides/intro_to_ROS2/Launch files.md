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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHJNIMI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCq5dXkQL2Qu1cWwU5S%2Buuq%2FpqpzjVRqKn0jKqGRLI0DgIhAPRLfc9cMO2tkmn7tsMCAgA8hT7WtclnkHBmHSkekI%2FBKv8DCEwQABoMNjM3NDIzMTgzODA1IgxKjnK8OnbdCSSbF3oq3APUcgybiDE%2BSHETNWDl1DnKkoJVeD6VKPM66qi7sI%2FbH6nGCu5BNJHWre46%2FVV4j2lFAe5fwVTxKhFsurqavc6DpTe%2FqXZCv47x%2BKy%2Bq%2Bi01rfWrNZtWHQnrviSrxjw2CRwRI4LtkkJAArppKZpWKm4nBFXTJO8WuzG%2FhfH2TldHsJgk%2BKkUAZFXd%2F1mZv04jCAxhDQht%2F96cotvPPewlTjv8J0ldv%2Bc3kEF9k3eQnQCYfqxvc3rCQr8dECVS3qRWLuPN%2FAPecYU5FFIIeQXUgpmv89QQCU3kYP6XRyGt0MYOsssueY70Ihgyj7hwouT%2BAIjFwjQ3FvM0fGg4SCIWv5iQoTyyYRYqGiLgiNvWk66ziW2WAWa2poi6KOCSkkpYI1Ca9AuH%2F%2Fin9RXCN0GrsXLVHTrvjjLv9Cwhfa91t8vx%2FUc9uiI%2BU2cU5zJmYU%2FwHSj6ONZPstbnqtSx1Sdzyngo6JcuRlVJhequeMh2K%2BD%2F8XmU2uf3%2FAwMrtsw%2FLqvzlwpAl5%2FKAdEtSczi91LiVa28dkSE%2B%2FAFHqvazYSZQpIp4HrW5ulmQkqMGUSy%2BwJ0BgUXHhmdIomg7obUTilTKfbPqYW3V8MXvwbSAEnI5s%2BJ9hVpdqi0xwunjNTD%2F14fCBjqkAeGTG1J33WvAan5djbL2IUsdcNcnNMSI7D16%2FI46cTUmGHWLKugAJDVA85flfBRtBu8PdspO97hxAVT5z9uI9hhfyEgM%2FgCtEieeRa8zGYfaPvumT67HAvtGFkpGUP%2BF8cuE%2B9LHQMLSdMhEH%2FiAqwUY0lnlOEH7xqlba2B6Cn4R6mUa54P4I3RHe%2B2tA62mFREO5%2FwSLIvGS8l%2FZ9GWk%2BKA6036&X-Amz-Signature=fcd0c2c6924ce3d76bb3ad541e3af7aaa561fded34afbf24dabe1f18d0d5d7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHJNIMI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCq5dXkQL2Qu1cWwU5S%2Buuq%2FpqpzjVRqKn0jKqGRLI0DgIhAPRLfc9cMO2tkmn7tsMCAgA8hT7WtclnkHBmHSkekI%2FBKv8DCEwQABoMNjM3NDIzMTgzODA1IgxKjnK8OnbdCSSbF3oq3APUcgybiDE%2BSHETNWDl1DnKkoJVeD6VKPM66qi7sI%2FbH6nGCu5BNJHWre46%2FVV4j2lFAe5fwVTxKhFsurqavc6DpTe%2FqXZCv47x%2BKy%2Bq%2Bi01rfWrNZtWHQnrviSrxjw2CRwRI4LtkkJAArppKZpWKm4nBFXTJO8WuzG%2FhfH2TldHsJgk%2BKkUAZFXd%2F1mZv04jCAxhDQht%2F96cotvPPewlTjv8J0ldv%2Bc3kEF9k3eQnQCYfqxvc3rCQr8dECVS3qRWLuPN%2FAPecYU5FFIIeQXUgpmv89QQCU3kYP6XRyGt0MYOsssueY70Ihgyj7hwouT%2BAIjFwjQ3FvM0fGg4SCIWv5iQoTyyYRYqGiLgiNvWk66ziW2WAWa2poi6KOCSkkpYI1Ca9AuH%2F%2Fin9RXCN0GrsXLVHTrvjjLv9Cwhfa91t8vx%2FUc9uiI%2BU2cU5zJmYU%2FwHSj6ONZPstbnqtSx1Sdzyngo6JcuRlVJhequeMh2K%2BD%2F8XmU2uf3%2FAwMrtsw%2FLqvzlwpAl5%2FKAdEtSczi91LiVa28dkSE%2B%2FAFHqvazYSZQpIp4HrW5ulmQkqMGUSy%2BwJ0BgUXHhmdIomg7obUTilTKfbPqYW3V8MXvwbSAEnI5s%2BJ9hVpdqi0xwunjNTD%2F14fCBjqkAeGTG1J33WvAan5djbL2IUsdcNcnNMSI7D16%2FI46cTUmGHWLKugAJDVA85flfBRtBu8PdspO97hxAVT5z9uI9hhfyEgM%2FgCtEieeRa8zGYfaPvumT67HAvtGFkpGUP%2BF8cuE%2B9LHQMLSdMhEH%2FiAqwUY0lnlOEH7xqlba2B6Cn4R6mUa54P4I3RHe%2B2tA62mFREO5%2FwSLIvGS8l%2FZ9GWk%2BKA6036&X-Amz-Signature=e73ab7017c6b50b574e2dd84642090e82e747860ca549670e93d228cbec97500&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHJNIMI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCq5dXkQL2Qu1cWwU5S%2Buuq%2FpqpzjVRqKn0jKqGRLI0DgIhAPRLfc9cMO2tkmn7tsMCAgA8hT7WtclnkHBmHSkekI%2FBKv8DCEwQABoMNjM3NDIzMTgzODA1IgxKjnK8OnbdCSSbF3oq3APUcgybiDE%2BSHETNWDl1DnKkoJVeD6VKPM66qi7sI%2FbH6nGCu5BNJHWre46%2FVV4j2lFAe5fwVTxKhFsurqavc6DpTe%2FqXZCv47x%2BKy%2Bq%2Bi01rfWrNZtWHQnrviSrxjw2CRwRI4LtkkJAArppKZpWKm4nBFXTJO8WuzG%2FhfH2TldHsJgk%2BKkUAZFXd%2F1mZv04jCAxhDQht%2F96cotvPPewlTjv8J0ldv%2Bc3kEF9k3eQnQCYfqxvc3rCQr8dECVS3qRWLuPN%2FAPecYU5FFIIeQXUgpmv89QQCU3kYP6XRyGt0MYOsssueY70Ihgyj7hwouT%2BAIjFwjQ3FvM0fGg4SCIWv5iQoTyyYRYqGiLgiNvWk66ziW2WAWa2poi6KOCSkkpYI1Ca9AuH%2F%2Fin9RXCN0GrsXLVHTrvjjLv9Cwhfa91t8vx%2FUc9uiI%2BU2cU5zJmYU%2FwHSj6ONZPstbnqtSx1Sdzyngo6JcuRlVJhequeMh2K%2BD%2F8XmU2uf3%2FAwMrtsw%2FLqvzlwpAl5%2FKAdEtSczi91LiVa28dkSE%2B%2FAFHqvazYSZQpIp4HrW5ulmQkqMGUSy%2BwJ0BgUXHhmdIomg7obUTilTKfbPqYW3V8MXvwbSAEnI5s%2BJ9hVpdqi0xwunjNTD%2F14fCBjqkAeGTG1J33WvAan5djbL2IUsdcNcnNMSI7D16%2FI46cTUmGHWLKugAJDVA85flfBRtBu8PdspO97hxAVT5z9uI9hhfyEgM%2FgCtEieeRa8zGYfaPvumT67HAvtGFkpGUP%2BF8cuE%2B9LHQMLSdMhEH%2FiAqwUY0lnlOEH7xqlba2B6Cn4R6mUa54P4I3RHe%2B2tA62mFREO5%2FwSLIvGS8l%2FZ9GWk%2BKA6036&X-Amz-Signature=db8d49d76cb19da24bd40f14c4881ce05afb0223888c7a9c313a9770ced9f6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
