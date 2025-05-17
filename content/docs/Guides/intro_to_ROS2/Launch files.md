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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PH62CFQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDJiRQmgg3KL04br4JWWqjq6bu6s%2BSjkRLBvjPOFf4oAiEAmEXucl%2B%2BoYrzkfKoSrJo9deRvozPAIw%2F8%2BzGtDIykGcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJO9tfK6otluHJgcpyrcA1%2Bl7x0Vkk%2F51pHcyi7NSkt4N0AbGfMUQk%2FbfvqwY6Tgd1TMcC0%2By5AbdVv7zQoVjI2EiP0%2FGY4dVd9hwp%2BDPOQ9IhWmQPu5Chhscpb%2BPVlVY4%2FSzvAfCcMwHEjFcZcLlR0%2FzVvdgJ2Hn2lB5AkpRcbQXE19eV99KDqazKnGxyGkmY1%2BuyjPu3%2Fpk1awMeYaMJWENJDzWyaUCQLjf3%2BfvvvvLKynx7POAhcS8pXzp5IwfiWNHwa8zNUMIx8vqVNn4hb5rzFMSEL47j80himkCFXe66YNjBuYSk05hgBfhpYEwGxmxF9%2BYcdbJMN8pZkcKf9OTL5t7iDk8KKu14VeOopbFTaSVVXhjwOjrucmWe%2F4CyHupUNBFwZWOcPE8BTqAZETYXs83Iolj4r9wSFAtcvokueXoHUZWfvS4U8oDsxo5QK3BYow0yU4yB8TBGI%2FNaJF8H%2B42fhmgIpC6BG3pIQovQIjmf8xpQNREOzFB5DxofYjP5SwtJAueyw8cMbSQvjU2M7Txsq8KgIdHxzu2w4sjHAW%2FQAwf3EZo6xAU0XBAVDd%2FTU3IvHfuXllOe095%2BQdacGSuVPMf4%2B9WLud3vGisQd0hmLq55DV8hE91KK1oNVBEfnP0yrZMRiJMO7socEGOqUB6xGkfBOm5IJWYhIKkL%2BI%2FVz60ApvCqCKsIkYx9%2BaQ29xCRD0D%2F1KNyi8csL7IIe%2FUvGRkUzYg6eSIqtlf81%2BWMDvm%2FZN6nrSIjZr2Jv%2BgCo2%2Fhb5mu3vo%2FvsL0V98sGpwswHZweZjJ8kn4X5C1ie42cZsCVGh6ik41PkGk4nTiU38fPPJyjfhSTEKeWNvlhCLif%2FrsbSmo1%2F284%2FYYp1PTAGDBxd&X-Amz-Signature=b8458e9a5d7883ff03ea3175af6566f827d69da2ca3a9f6ed4bbbcb9b3a9fc61&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PH62CFQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDJiRQmgg3KL04br4JWWqjq6bu6s%2BSjkRLBvjPOFf4oAiEAmEXucl%2B%2BoYrzkfKoSrJo9deRvozPAIw%2F8%2BzGtDIykGcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJO9tfK6otluHJgcpyrcA1%2Bl7x0Vkk%2F51pHcyi7NSkt4N0AbGfMUQk%2FbfvqwY6Tgd1TMcC0%2By5AbdVv7zQoVjI2EiP0%2FGY4dVd9hwp%2BDPOQ9IhWmQPu5Chhscpb%2BPVlVY4%2FSzvAfCcMwHEjFcZcLlR0%2FzVvdgJ2Hn2lB5AkpRcbQXE19eV99KDqazKnGxyGkmY1%2BuyjPu3%2Fpk1awMeYaMJWENJDzWyaUCQLjf3%2BfvvvvLKynx7POAhcS8pXzp5IwfiWNHwa8zNUMIx8vqVNn4hb5rzFMSEL47j80himkCFXe66YNjBuYSk05hgBfhpYEwGxmxF9%2BYcdbJMN8pZkcKf9OTL5t7iDk8KKu14VeOopbFTaSVVXhjwOjrucmWe%2F4CyHupUNBFwZWOcPE8BTqAZETYXs83Iolj4r9wSFAtcvokueXoHUZWfvS4U8oDsxo5QK3BYow0yU4yB8TBGI%2FNaJF8H%2B42fhmgIpC6BG3pIQovQIjmf8xpQNREOzFB5DxofYjP5SwtJAueyw8cMbSQvjU2M7Txsq8KgIdHxzu2w4sjHAW%2FQAwf3EZo6xAU0XBAVDd%2FTU3IvHfuXllOe095%2BQdacGSuVPMf4%2B9WLud3vGisQd0hmLq55DV8hE91KK1oNVBEfnP0yrZMRiJMO7socEGOqUB6xGkfBOm5IJWYhIKkL%2BI%2FVz60ApvCqCKsIkYx9%2BaQ29xCRD0D%2F1KNyi8csL7IIe%2FUvGRkUzYg6eSIqtlf81%2BWMDvm%2FZN6nrSIjZr2Jv%2BgCo2%2Fhb5mu3vo%2FvsL0V98sGpwswHZweZjJ8kn4X5C1ie42cZsCVGh6ik41PkGk4nTiU38fPPJyjfhSTEKeWNvlhCLif%2FrsbSmo1%2F284%2FYYp1PTAGDBxd&X-Amz-Signature=328bb99210090b1b56a04e25a25a343bbb6581d67b01a8e6650e783bb0ec7292&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PH62CFQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDJiRQmgg3KL04br4JWWqjq6bu6s%2BSjkRLBvjPOFf4oAiEAmEXucl%2B%2BoYrzkfKoSrJo9deRvozPAIw%2F8%2BzGtDIykGcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJO9tfK6otluHJgcpyrcA1%2Bl7x0Vkk%2F51pHcyi7NSkt4N0AbGfMUQk%2FbfvqwY6Tgd1TMcC0%2By5AbdVv7zQoVjI2EiP0%2FGY4dVd9hwp%2BDPOQ9IhWmQPu5Chhscpb%2BPVlVY4%2FSzvAfCcMwHEjFcZcLlR0%2FzVvdgJ2Hn2lB5AkpRcbQXE19eV99KDqazKnGxyGkmY1%2BuyjPu3%2Fpk1awMeYaMJWENJDzWyaUCQLjf3%2BfvvvvLKynx7POAhcS8pXzp5IwfiWNHwa8zNUMIx8vqVNn4hb5rzFMSEL47j80himkCFXe66YNjBuYSk05hgBfhpYEwGxmxF9%2BYcdbJMN8pZkcKf9OTL5t7iDk8KKu14VeOopbFTaSVVXhjwOjrucmWe%2F4CyHupUNBFwZWOcPE8BTqAZETYXs83Iolj4r9wSFAtcvokueXoHUZWfvS4U8oDsxo5QK3BYow0yU4yB8TBGI%2FNaJF8H%2B42fhmgIpC6BG3pIQovQIjmf8xpQNREOzFB5DxofYjP5SwtJAueyw8cMbSQvjU2M7Txsq8KgIdHxzu2w4sjHAW%2FQAwf3EZo6xAU0XBAVDd%2FTU3IvHfuXllOe095%2BQdacGSuVPMf4%2B9WLud3vGisQd0hmLq55DV8hE91KK1oNVBEfnP0yrZMRiJMO7socEGOqUB6xGkfBOm5IJWYhIKkL%2BI%2FVz60ApvCqCKsIkYx9%2BaQ29xCRD0D%2F1KNyi8csL7IIe%2FUvGRkUzYg6eSIqtlf81%2BWMDvm%2FZN6nrSIjZr2Jv%2BgCo2%2Fhb5mu3vo%2FvsL0V98sGpwswHZweZjJ8kn4X5C1ie42cZsCVGh6ik41PkGk4nTiU38fPPJyjfhSTEKeWNvlhCLif%2FrsbSmo1%2F284%2FYYp1PTAGDBxd&X-Amz-Signature=ad54163bf1ba4738674e4ae3cde11763933410475a607dae62057e77142fc964&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
