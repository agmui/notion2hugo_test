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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMSBTTC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGyecgZ22G2NEGEk3mXfjc0QzeuqHIRwQGczmiqdmxM%2BAiEAzivRP1XbhHfqHyiEP0Nr7NQuXbccpKDPSSwBnbGUsiAq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMJZxb3InOYtMoHYHircA96zSuWC%2BSbVM9TZR1YKsw3SznInOIwV24VoFxPGdsO41x%2B%2BrBbqzJL4YFui6Ox5EZGv2xuGbgGQcwsBYI02PE1D2VUvePjC7lNdxY%2FE4ZMAsuj8BsyccM053ZzFJM2iOlLlVMb9N%2FOz9F%2BQNP%2Fh3usAbHNfLmfY7HPnyJkmxdctj8MUW%2FTIQ4IRt59v2%2Fq6kqRnIM2mhD9jY%2Bk%2B%2BfIJRf1pdvCl9Z2okhpamRoCs%2FZtGw1h1IF7iXqMKSyOZQn1vaAKEHp7p6%2Faizd8hFtPTGFqTRq3HXU1gwzNxLeIbKSw5mENVO01EWeVsXJ4TZgoEDZ4jTqM%2FUPRr5cWrnmR7vIKfKKdUMjMFWSHH7yJQyXbWR3DK0Cujy8P8UeuvpM5lnvfyjxi%2FxwULdChMIn%2BB5oXp17du0CWxBbqVXyY5z0JlCcc7olDIzIonr5EeBhT%2BsB6dTwaUqiBEtUO%2BQjsh5bYtRaaYM3Ke208ZwgHho0vX2gKStNYVLJ9NZXkRyMQCbduD6C%2Fdo1KifxR543%2BG0hQfNzlOEFjZs4%2FIFHRG2Y0Rc18%2FdkxYcx1xCPsMpGm4BUO00%2B2fLJwcEqq7IC54twYIbM9ffg7KB2f3c15GYhzvME82pS6P8iAF%2Bb%2FMJOfx8EGOqUBZcM6Xy5FuWYzhQu3tuL6vNp2HHOEkGKUt2lTlbxaBuj0%2FAGgkvkwXtNRdy1dP2Pm0ce6DiUVwSyi1FT1kxsTWGSkUqbbKshIYaOI6O5NausmcpXDTCALENEDody6KhM7TLwxcpfMRk4TZadpjG%2B5QIvXhBboaOmi71TnzYUMRMf3Rd9GPcKelxJUjo%2Bypzp1JtD%2Br2Z76ZoGGvwZC6%2FgXCSi6xT%2B&X-Amz-Signature=715207e538b8ce5f2b1a0556e32cdb4dac2c09358cb8bfafed1dc4cb56ab74ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMSBTTC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGyecgZ22G2NEGEk3mXfjc0QzeuqHIRwQGczmiqdmxM%2BAiEAzivRP1XbhHfqHyiEP0Nr7NQuXbccpKDPSSwBnbGUsiAq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMJZxb3InOYtMoHYHircA96zSuWC%2BSbVM9TZR1YKsw3SznInOIwV24VoFxPGdsO41x%2B%2BrBbqzJL4YFui6Ox5EZGv2xuGbgGQcwsBYI02PE1D2VUvePjC7lNdxY%2FE4ZMAsuj8BsyccM053ZzFJM2iOlLlVMb9N%2FOz9F%2BQNP%2Fh3usAbHNfLmfY7HPnyJkmxdctj8MUW%2FTIQ4IRt59v2%2Fq6kqRnIM2mhD9jY%2Bk%2B%2BfIJRf1pdvCl9Z2okhpamRoCs%2FZtGw1h1IF7iXqMKSyOZQn1vaAKEHp7p6%2Faizd8hFtPTGFqTRq3HXU1gwzNxLeIbKSw5mENVO01EWeVsXJ4TZgoEDZ4jTqM%2FUPRr5cWrnmR7vIKfKKdUMjMFWSHH7yJQyXbWR3DK0Cujy8P8UeuvpM5lnvfyjxi%2FxwULdChMIn%2BB5oXp17du0CWxBbqVXyY5z0JlCcc7olDIzIonr5EeBhT%2BsB6dTwaUqiBEtUO%2BQjsh5bYtRaaYM3Ke208ZwgHho0vX2gKStNYVLJ9NZXkRyMQCbduD6C%2Fdo1KifxR543%2BG0hQfNzlOEFjZs4%2FIFHRG2Y0Rc18%2FdkxYcx1xCPsMpGm4BUO00%2B2fLJwcEqq7IC54twYIbM9ffg7KB2f3c15GYhzvME82pS6P8iAF%2Bb%2FMJOfx8EGOqUBZcM6Xy5FuWYzhQu3tuL6vNp2HHOEkGKUt2lTlbxaBuj0%2FAGgkvkwXtNRdy1dP2Pm0ce6DiUVwSyi1FT1kxsTWGSkUqbbKshIYaOI6O5NausmcpXDTCALENEDody6KhM7TLwxcpfMRk4TZadpjG%2B5QIvXhBboaOmi71TnzYUMRMf3Rd9GPcKelxJUjo%2Bypzp1JtD%2Br2Z76ZoGGvwZC6%2FgXCSi6xT%2B&X-Amz-Signature=46d69d5f791bb40b43df83856235170d487c1044e03b2752027409d7c87c2838&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEMSBTTC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGyecgZ22G2NEGEk3mXfjc0QzeuqHIRwQGczmiqdmxM%2BAiEAzivRP1XbhHfqHyiEP0Nr7NQuXbccpKDPSSwBnbGUsiAq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMJZxb3InOYtMoHYHircA96zSuWC%2BSbVM9TZR1YKsw3SznInOIwV24VoFxPGdsO41x%2B%2BrBbqzJL4YFui6Ox5EZGv2xuGbgGQcwsBYI02PE1D2VUvePjC7lNdxY%2FE4ZMAsuj8BsyccM053ZzFJM2iOlLlVMb9N%2FOz9F%2BQNP%2Fh3usAbHNfLmfY7HPnyJkmxdctj8MUW%2FTIQ4IRt59v2%2Fq6kqRnIM2mhD9jY%2Bk%2B%2BfIJRf1pdvCl9Z2okhpamRoCs%2FZtGw1h1IF7iXqMKSyOZQn1vaAKEHp7p6%2Faizd8hFtPTGFqTRq3HXU1gwzNxLeIbKSw5mENVO01EWeVsXJ4TZgoEDZ4jTqM%2FUPRr5cWrnmR7vIKfKKdUMjMFWSHH7yJQyXbWR3DK0Cujy8P8UeuvpM5lnvfyjxi%2FxwULdChMIn%2BB5oXp17du0CWxBbqVXyY5z0JlCcc7olDIzIonr5EeBhT%2BsB6dTwaUqiBEtUO%2BQjsh5bYtRaaYM3Ke208ZwgHho0vX2gKStNYVLJ9NZXkRyMQCbduD6C%2Fdo1KifxR543%2BG0hQfNzlOEFjZs4%2FIFHRG2Y0Rc18%2FdkxYcx1xCPsMpGm4BUO00%2B2fLJwcEqq7IC54twYIbM9ffg7KB2f3c15GYhzvME82pS6P8iAF%2Bb%2FMJOfx8EGOqUBZcM6Xy5FuWYzhQu3tuL6vNp2HHOEkGKUt2lTlbxaBuj0%2FAGgkvkwXtNRdy1dP2Pm0ce6DiUVwSyi1FT1kxsTWGSkUqbbKshIYaOI6O5NausmcpXDTCALENEDody6KhM7TLwxcpfMRk4TZadpjG%2B5QIvXhBboaOmi71TnzYUMRMf3Rd9GPcKelxJUjo%2Bypzp1JtD%2Br2Z76ZoGGvwZC6%2FgXCSi6xT%2B&X-Amz-Signature=16d60e9f433b218b6f4a2ec3ca178161f364b6960563e3a8a773dfba87cb1fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
