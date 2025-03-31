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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PN2PDTU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIF7ZDAuqMRBKVYMFdA8xs%2FVcQ4O7FeyHlfgrk6GqvCqZAiEAv5kM0r1ORJ3fscN%2BnXK4QEaxncKHo%2Br4pGjJMy0bsXsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMshB%2BxBuWpJQIYOyircA1ByoUxZo4wqTQpwF%2B0rCzcVs7gV9F6BSHgI%2FVJmXtRStyPbgWztxl0PUQiksQRgODkkTUwLhgJ%2FpwVPtfD0BDz7rXjjc4XJdgRrhgARZFZYSFbEJkHJt8FTlKUgp7%2BRzlhtMHL0ZEgk4HFM1hzjljKWS4XMz95gypOW31LqlhKYITNQ74vX95iaDmUeV%2FWGxhpZS8xWwbBHO2F0fLXciC9Pv6K7J7923kj%2FiKcF%2BS7XqAPFd6eOAZOA7haYguQIaf5tuYYz0bnHM8NDe9snZmhLPKHAh%2FIn%2Fp8FdnJAuEkZsHiVIvKU5rRMHLvhYfiiD9%2BylJVr%2B7yIhkVEer%2Bo%2FkBCs2yVEsSq0vo%2B7JacqyZn8k%2FVnTwwL3Y6iM8Fp2O8o9yw4iAiydgLZVfJ%2Bsz9%2BO2ScrOH9G5%2BauJh9y4MLuIN9BvhZg10KWdIBJMOaCiVdt%2BlkW2MgXPksItkMnfbsDDK0cvSuJXzU13zzn2sq%2FUqODnbtu5bA4T3PStljSsOXVWxAs5O6uq4qfg4xuEamc6OrtXw7w4mQ3ryB9FGbPgRJ8pDiotDFtQ7ZMQhelWK4wMzgu8F01JREr4vGoyGesb4vUHl%2FOHq6DR3KOkDnq%2FBsw%2FOLXnbS4U%2FeIsHMLa4q78GOqUBOLPnxFVaXjODGJ3eqOd%2F%2Fa1OKp%2FbeHQVHEVfsxJgs6nbDXAkAtro93JOmPjINqdu2D9hWINQ7tiQJ532%2BCKC7mwSBJKWEf4PrWBSAoApHrTjDn%2B0X3mJcrBBVxijNubmZvHbzJiVY5bOpT%2FidqtH4ylN5GXFxJY5rGxAza5KIfyjppnbmMWr5HxRQqslyRRX1ksptwKMEySZU2PxKCBT3CgnuxOe&X-Amz-Signature=7480e8fdb3dc52bdb44ed24e5d4675a27b7f6f6ee3ae757159999929a9cc21e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PN2PDTU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIF7ZDAuqMRBKVYMFdA8xs%2FVcQ4O7FeyHlfgrk6GqvCqZAiEAv5kM0r1ORJ3fscN%2BnXK4QEaxncKHo%2Br4pGjJMy0bsXsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMshB%2BxBuWpJQIYOyircA1ByoUxZo4wqTQpwF%2B0rCzcVs7gV9F6BSHgI%2FVJmXtRStyPbgWztxl0PUQiksQRgODkkTUwLhgJ%2FpwVPtfD0BDz7rXjjc4XJdgRrhgARZFZYSFbEJkHJt8FTlKUgp7%2BRzlhtMHL0ZEgk4HFM1hzjljKWS4XMz95gypOW31LqlhKYITNQ74vX95iaDmUeV%2FWGxhpZS8xWwbBHO2F0fLXciC9Pv6K7J7923kj%2FiKcF%2BS7XqAPFd6eOAZOA7haYguQIaf5tuYYz0bnHM8NDe9snZmhLPKHAh%2FIn%2Fp8FdnJAuEkZsHiVIvKU5rRMHLvhYfiiD9%2BylJVr%2B7yIhkVEer%2Bo%2FkBCs2yVEsSq0vo%2B7JacqyZn8k%2FVnTwwL3Y6iM8Fp2O8o9yw4iAiydgLZVfJ%2Bsz9%2BO2ScrOH9G5%2BauJh9y4MLuIN9BvhZg10KWdIBJMOaCiVdt%2BlkW2MgXPksItkMnfbsDDK0cvSuJXzU13zzn2sq%2FUqODnbtu5bA4T3PStljSsOXVWxAs5O6uq4qfg4xuEamc6OrtXw7w4mQ3ryB9FGbPgRJ8pDiotDFtQ7ZMQhelWK4wMzgu8F01JREr4vGoyGesb4vUHl%2FOHq6DR3KOkDnq%2FBsw%2FOLXnbS4U%2FeIsHMLa4q78GOqUBOLPnxFVaXjODGJ3eqOd%2F%2Fa1OKp%2FbeHQVHEVfsxJgs6nbDXAkAtro93JOmPjINqdu2D9hWINQ7tiQJ532%2BCKC7mwSBJKWEf4PrWBSAoApHrTjDn%2B0X3mJcrBBVxijNubmZvHbzJiVY5bOpT%2FidqtH4ylN5GXFxJY5rGxAza5KIfyjppnbmMWr5HxRQqslyRRX1ksptwKMEySZU2PxKCBT3CgnuxOe&X-Amz-Signature=9af60f5a310f8f66a4c1c64dcb9856cb2593a614ce3f98e14585f5ed8c6d0306&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PN2PDTU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIF7ZDAuqMRBKVYMFdA8xs%2FVcQ4O7FeyHlfgrk6GqvCqZAiEAv5kM0r1ORJ3fscN%2BnXK4QEaxncKHo%2Br4pGjJMy0bsXsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMshB%2BxBuWpJQIYOyircA1ByoUxZo4wqTQpwF%2B0rCzcVs7gV9F6BSHgI%2FVJmXtRStyPbgWztxl0PUQiksQRgODkkTUwLhgJ%2FpwVPtfD0BDz7rXjjc4XJdgRrhgARZFZYSFbEJkHJt8FTlKUgp7%2BRzlhtMHL0ZEgk4HFM1hzjljKWS4XMz95gypOW31LqlhKYITNQ74vX95iaDmUeV%2FWGxhpZS8xWwbBHO2F0fLXciC9Pv6K7J7923kj%2FiKcF%2BS7XqAPFd6eOAZOA7haYguQIaf5tuYYz0bnHM8NDe9snZmhLPKHAh%2FIn%2Fp8FdnJAuEkZsHiVIvKU5rRMHLvhYfiiD9%2BylJVr%2B7yIhkVEer%2Bo%2FkBCs2yVEsSq0vo%2B7JacqyZn8k%2FVnTwwL3Y6iM8Fp2O8o9yw4iAiydgLZVfJ%2Bsz9%2BO2ScrOH9G5%2BauJh9y4MLuIN9BvhZg10KWdIBJMOaCiVdt%2BlkW2MgXPksItkMnfbsDDK0cvSuJXzU13zzn2sq%2FUqODnbtu5bA4T3PStljSsOXVWxAs5O6uq4qfg4xuEamc6OrtXw7w4mQ3ryB9FGbPgRJ8pDiotDFtQ7ZMQhelWK4wMzgu8F01JREr4vGoyGesb4vUHl%2FOHq6DR3KOkDnq%2FBsw%2FOLXnbS4U%2FeIsHMLa4q78GOqUBOLPnxFVaXjODGJ3eqOd%2F%2Fa1OKp%2FbeHQVHEVfsxJgs6nbDXAkAtro93JOmPjINqdu2D9hWINQ7tiQJ532%2BCKC7mwSBJKWEf4PrWBSAoApHrTjDn%2B0X3mJcrBBVxijNubmZvHbzJiVY5bOpT%2FidqtH4ylN5GXFxJY5rGxAza5KIfyjppnbmMWr5HxRQqslyRRX1ksptwKMEySZU2PxKCBT3CgnuxOe&X-Amz-Signature=b9a9b36b7be14694bf0418034171087a3b5b1ad49d23bfbde5a97d6fba23b17e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
