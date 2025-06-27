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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZJCD7M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnE6wpvVVKlkPkR9w4VDQ1r27rVAdljjM4z6jJ6%2FewdwIgR5Vx7TDiiznXWKll5lTQWJdX5%2BYBaFiZ8GVqAR91Vzkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFDc1vRVPz0hwLNz3SrcA8WcZR3I4CntKqZoAwKn%2BEh48R8e3MHzpmTACXOP9QCwH%2B7rZvJTDIu1tmXDKczutNt%2FWkjYT1IF2DqG5bvrs04Po4%2FQfr%2FAHljhUWb0kvdNuDgPuENJVeRbsB1nEikB%2BUNba2yz50nXUDkQ%2FyfRWj5olOXexXcKAU7UzC%2BzofJ317mpBk6nF940%2B8DxVyq5FANj9QSfoe9c48KwmJYUUYJoukPfinfUDV84kd1v9CRPWcSjRoWXndfc%2FQJ1FhEizwJw7lkPqLTczZGpl9VrGWnMLcyQs5%2FUFbOSrV8xg%2B2ncoVAxuBDuzwUmzqxDn7keSw7HqNqMte%2F1e8Pd0ng1ZU9u6SUEflvoI1z20nNgdDAyt1zryGmQjf6TLaL9yVdtEVWVciuOSmngqAxlgXBUeBX3DdN2aAZZ%2FAG5t9g8q%2BHw3keayNqrFMfH%2FCpLaSjH7Ow9tKsH%2FgdQ5H7h7vL6kkJdppwkqI9LUl9mYR0Ads7J%2BXle%2FDpzwcAx7ZTHOFXqptj7tI5O%2Fmjx5weKamtQCfLsCk%2Fz1b4Ynbf8wwGJZVCWlqniBXXMIZ8NG4yprk9hzljICAKGcFjZOxtl7AgVxfXkbPogsHzqzFqOwGMPpzwwzOsTmqvkqYKscftMOLK%2B8IGOqUB9%2FasBHqwg45cFHKazv%2BA1wguIr0hvPDW%2BqIfQpU%2Bhix86oGAXCOXb5toZCGH8LT5rqQhXGqhsvHD6xjL4gB5W4m0T%2Bnd%2Fx2QkmVcYwadTMhUGggYumaPM9xdSUr%2FjxqmKUzan0eGDFUb9awjMat5hm05YMKE1V%2FJQ1Y6P%2BCBxx7hZJ9cX5Y5b8fMqNBnV%2FsFwJ2Ez4CBP3XVZNNCcEhRS%2FPd7iM9&X-Amz-Signature=01181988f2a05340723b6cd1092326e9648d63985445fd8cc3ff4a9c18d74d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZJCD7M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnE6wpvVVKlkPkR9w4VDQ1r27rVAdljjM4z6jJ6%2FewdwIgR5Vx7TDiiznXWKll5lTQWJdX5%2BYBaFiZ8GVqAR91Vzkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFDc1vRVPz0hwLNz3SrcA8WcZR3I4CntKqZoAwKn%2BEh48R8e3MHzpmTACXOP9QCwH%2B7rZvJTDIu1tmXDKczutNt%2FWkjYT1IF2DqG5bvrs04Po4%2FQfr%2FAHljhUWb0kvdNuDgPuENJVeRbsB1nEikB%2BUNba2yz50nXUDkQ%2FyfRWj5olOXexXcKAU7UzC%2BzofJ317mpBk6nF940%2B8DxVyq5FANj9QSfoe9c48KwmJYUUYJoukPfinfUDV84kd1v9CRPWcSjRoWXndfc%2FQJ1FhEizwJw7lkPqLTczZGpl9VrGWnMLcyQs5%2FUFbOSrV8xg%2B2ncoVAxuBDuzwUmzqxDn7keSw7HqNqMte%2F1e8Pd0ng1ZU9u6SUEflvoI1z20nNgdDAyt1zryGmQjf6TLaL9yVdtEVWVciuOSmngqAxlgXBUeBX3DdN2aAZZ%2FAG5t9g8q%2BHw3keayNqrFMfH%2FCpLaSjH7Ow9tKsH%2FgdQ5H7h7vL6kkJdppwkqI9LUl9mYR0Ads7J%2BXle%2FDpzwcAx7ZTHOFXqptj7tI5O%2Fmjx5weKamtQCfLsCk%2Fz1b4Ynbf8wwGJZVCWlqniBXXMIZ8NG4yprk9hzljICAKGcFjZOxtl7AgVxfXkbPogsHzqzFqOwGMPpzwwzOsTmqvkqYKscftMOLK%2B8IGOqUB9%2FasBHqwg45cFHKazv%2BA1wguIr0hvPDW%2BqIfQpU%2Bhix86oGAXCOXb5toZCGH8LT5rqQhXGqhsvHD6xjL4gB5W4m0T%2Bnd%2Fx2QkmVcYwadTMhUGggYumaPM9xdSUr%2FjxqmKUzan0eGDFUb9awjMat5hm05YMKE1V%2FJQ1Y6P%2BCBxx7hZJ9cX5Y5b8fMqNBnV%2FsFwJ2Ez4CBP3XVZNNCcEhRS%2FPd7iM9&X-Amz-Signature=d45a386eb92f3de2db03aa1a2b463813d1036122225b48c558f8671608a99652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZJCD7M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnE6wpvVVKlkPkR9w4VDQ1r27rVAdljjM4z6jJ6%2FewdwIgR5Vx7TDiiznXWKll5lTQWJdX5%2BYBaFiZ8GVqAR91Vzkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFDc1vRVPz0hwLNz3SrcA8WcZR3I4CntKqZoAwKn%2BEh48R8e3MHzpmTACXOP9QCwH%2B7rZvJTDIu1tmXDKczutNt%2FWkjYT1IF2DqG5bvrs04Po4%2FQfr%2FAHljhUWb0kvdNuDgPuENJVeRbsB1nEikB%2BUNba2yz50nXUDkQ%2FyfRWj5olOXexXcKAU7UzC%2BzofJ317mpBk6nF940%2B8DxVyq5FANj9QSfoe9c48KwmJYUUYJoukPfinfUDV84kd1v9CRPWcSjRoWXndfc%2FQJ1FhEizwJw7lkPqLTczZGpl9VrGWnMLcyQs5%2FUFbOSrV8xg%2B2ncoVAxuBDuzwUmzqxDn7keSw7HqNqMte%2F1e8Pd0ng1ZU9u6SUEflvoI1z20nNgdDAyt1zryGmQjf6TLaL9yVdtEVWVciuOSmngqAxlgXBUeBX3DdN2aAZZ%2FAG5t9g8q%2BHw3keayNqrFMfH%2FCpLaSjH7Ow9tKsH%2FgdQ5H7h7vL6kkJdppwkqI9LUl9mYR0Ads7J%2BXle%2FDpzwcAx7ZTHOFXqptj7tI5O%2Fmjx5weKamtQCfLsCk%2Fz1b4Ynbf8wwGJZVCWlqniBXXMIZ8NG4yprk9hzljICAKGcFjZOxtl7AgVxfXkbPogsHzqzFqOwGMPpzwwzOsTmqvkqYKscftMOLK%2B8IGOqUB9%2FasBHqwg45cFHKazv%2BA1wguIr0hvPDW%2BqIfQpU%2Bhix86oGAXCOXb5toZCGH8LT5rqQhXGqhsvHD6xjL4gB5W4m0T%2Bnd%2Fx2QkmVcYwadTMhUGggYumaPM9xdSUr%2FjxqmKUzan0eGDFUb9awjMat5hm05YMKE1V%2FJQ1Y6P%2BCBxx7hZJ9cX5Y5b8fMqNBnV%2FsFwJ2Ez4CBP3XVZNNCcEhRS%2FPd7iM9&X-Amz-Signature=3aefac92c55250099d84100a01294252179bc6ab77391ce78331ae265c69657d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
