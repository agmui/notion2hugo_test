---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZZTEMW%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCatuwpB9wdG5llTf6VrsEl0vtzO3gsxUpwrHRbr6CGzwIgHFe0empR6Qz0unVCgMO%2BAm7RabKRatoWpP2aU3VcKusqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5tiNC%2BlpsDjw1%2FKCrcAyWXp3R6lX%2FdeOOdyyb%2FlC4Y4Avvn0Ktb9AH9gDNLPxUXYbDTKzudpv4JjenMy1y8v81bOh1Ri8RuGI2%2BVf9uwOccVioXaMJs%2FGJr%2BAVN9wimX4IkRCnO55K8DQcUui31DeR2p73l%2B8XvesEHLtr09Xdm0NwMRpTZCNoAA3t%2Fe5eSt99CuZavViTkkeVZeG3xk7yJ8N%2FA5hOVlc2cZVroXlmOIOoJ%2B%2Fl7lVg6Y1UAB2fTr2wYxtagM5%2FW9Egpe0zKlonst3o%2F9dWPrZj2ZSUH1fndb606u1H0Izs%2Be%2BWgwreQ9Be%2FkpH0GHyN%2FF1U%2BglMUproeGLfahK4yQRcEgUsxEw2CEBjq9eEGg359TvdvzCvPq9Tx1cllak8oPjefb6wrdSoIiIflBdWLxhM7U06M%2B24bzUScdl%2Ff3BdO3F5qbPY5QN1tJaO%2FJV0l6%2Fw37m4NzfWnq3R9TyHoMb3bDPhN8JF9ylIEmcoMNxv15oqZPKkf2p9%2BqVBRxjRhIyDtOh0ShNNFxLScv%2FQKsZRRalQ%2BVOQrFVXT2E66KGPCbLCgS0r7qZXONpu5E5Y7i3ZFC0kaOUOYnjlh6kLJ8290JYaAIc5jevE855o%2FdlQKJ4uObKLlCv%2Fh3kK6oiaXH2MIz0jM4GOqUBdqcN3RokMnXzqxEYPLdpLJnOLIfwzaA1%2Bdf5vT9tO0OY98YnB3nv6U4uu01s05VWDt27krBGNGrwsAZPzzmIipcuJB8UpndkIuFvRNouWGtjss2CBspFbrF%2FMgz%2FRovDVqbnnUQ7G8eEIkFJ11qZd0mVg4077nvrVUaPAo%2FlW4jqfB6N0xrOaXY686gvbLFlcRB6qYYLusDdEgH%2F1tmd7PtP7bU7&X-Amz-Signature=8f599f7cf50f09e5b5b99e4d0d123009e1506f1d000edf2c8e4a96240e279618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZZTEMW%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCatuwpB9wdG5llTf6VrsEl0vtzO3gsxUpwrHRbr6CGzwIgHFe0empR6Qz0unVCgMO%2BAm7RabKRatoWpP2aU3VcKusqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5tiNC%2BlpsDjw1%2FKCrcAyWXp3R6lX%2FdeOOdyyb%2FlC4Y4Avvn0Ktb9AH9gDNLPxUXYbDTKzudpv4JjenMy1y8v81bOh1Ri8RuGI2%2BVf9uwOccVioXaMJs%2FGJr%2BAVN9wimX4IkRCnO55K8DQcUui31DeR2p73l%2B8XvesEHLtr09Xdm0NwMRpTZCNoAA3t%2Fe5eSt99CuZavViTkkeVZeG3xk7yJ8N%2FA5hOVlc2cZVroXlmOIOoJ%2B%2Fl7lVg6Y1UAB2fTr2wYxtagM5%2FW9Egpe0zKlonst3o%2F9dWPrZj2ZSUH1fndb606u1H0Izs%2Be%2BWgwreQ9Be%2FkpH0GHyN%2FF1U%2BglMUproeGLfahK4yQRcEgUsxEw2CEBjq9eEGg359TvdvzCvPq9Tx1cllak8oPjefb6wrdSoIiIflBdWLxhM7U06M%2B24bzUScdl%2Ff3BdO3F5qbPY5QN1tJaO%2FJV0l6%2Fw37m4NzfWnq3R9TyHoMb3bDPhN8JF9ylIEmcoMNxv15oqZPKkf2p9%2BqVBRxjRhIyDtOh0ShNNFxLScv%2FQKsZRRalQ%2BVOQrFVXT2E66KGPCbLCgS0r7qZXONpu5E5Y7i3ZFC0kaOUOYnjlh6kLJ8290JYaAIc5jevE855o%2FdlQKJ4uObKLlCv%2Fh3kK6oiaXH2MIz0jM4GOqUBdqcN3RokMnXzqxEYPLdpLJnOLIfwzaA1%2Bdf5vT9tO0OY98YnB3nv6U4uu01s05VWDt27krBGNGrwsAZPzzmIipcuJB8UpndkIuFvRNouWGtjss2CBspFbrF%2FMgz%2FRovDVqbnnUQ7G8eEIkFJ11qZd0mVg4077nvrVUaPAo%2FlW4jqfB6N0xrOaXY686gvbLFlcRB6qYYLusDdEgH%2F1tmd7PtP7bU7&X-Amz-Signature=3f57a9e0992ffbf72d2838a6c318378edf09083f653fe04b369ddeb130dd929b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZZTEMW%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCatuwpB9wdG5llTf6VrsEl0vtzO3gsxUpwrHRbr6CGzwIgHFe0empR6Qz0unVCgMO%2BAm7RabKRatoWpP2aU3VcKusqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5tiNC%2BlpsDjw1%2FKCrcAyWXp3R6lX%2FdeOOdyyb%2FlC4Y4Avvn0Ktb9AH9gDNLPxUXYbDTKzudpv4JjenMy1y8v81bOh1Ri8RuGI2%2BVf9uwOccVioXaMJs%2FGJr%2BAVN9wimX4IkRCnO55K8DQcUui31DeR2p73l%2B8XvesEHLtr09Xdm0NwMRpTZCNoAA3t%2Fe5eSt99CuZavViTkkeVZeG3xk7yJ8N%2FA5hOVlc2cZVroXlmOIOoJ%2B%2Fl7lVg6Y1UAB2fTr2wYxtagM5%2FW9Egpe0zKlonst3o%2F9dWPrZj2ZSUH1fndb606u1H0Izs%2Be%2BWgwreQ9Be%2FkpH0GHyN%2FF1U%2BglMUproeGLfahK4yQRcEgUsxEw2CEBjq9eEGg359TvdvzCvPq9Tx1cllak8oPjefb6wrdSoIiIflBdWLxhM7U06M%2B24bzUScdl%2Ff3BdO3F5qbPY5QN1tJaO%2FJV0l6%2Fw37m4NzfWnq3R9TyHoMb3bDPhN8JF9ylIEmcoMNxv15oqZPKkf2p9%2BqVBRxjRhIyDtOh0ShNNFxLScv%2FQKsZRRalQ%2BVOQrFVXT2E66KGPCbLCgS0r7qZXONpu5E5Y7i3ZFC0kaOUOYnjlh6kLJ8290JYaAIc5jevE855o%2FdlQKJ4uObKLlCv%2Fh3kK6oiaXH2MIz0jM4GOqUBdqcN3RokMnXzqxEYPLdpLJnOLIfwzaA1%2Bdf5vT9tO0OY98YnB3nv6U4uu01s05VWDt27krBGNGrwsAZPzzmIipcuJB8UpndkIuFvRNouWGtjss2CBspFbrF%2FMgz%2FRovDVqbnnUQ7G8eEIkFJ11qZd0mVg4077nvrVUaPAo%2FlW4jqfB6N0xrOaXY686gvbLFlcRB6qYYLusDdEgH%2F1tmd7PtP7bU7&X-Amz-Signature=a953a506fb06f8ba0b044472ede2994be4ccb26b78f69fd520be27a30794298e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
