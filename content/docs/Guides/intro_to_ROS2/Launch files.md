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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG6H5FZ7%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2F6khQU5iOfpbpb5B5X5WZZ622iJs%2FNTkBbxf1n70GlAiEAma96ZgOyrwP8WP8MAj2hfp3SE4hHHCdaK8mnPXxPWm0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5bH8pEbsvKupH0tSrcA73vF5c17oT%2BOmliqdazH160d5htUDknLZaYXIxDBooC86udqge4gX5r80UWMBsKt6UZLabDSnec1iXXcCCKNu1cZ8DBmXnVjUEFp4NeyXZr68qwJ3WCN%2BcF74MmnGi8rUZKeMxfkPgj3A6DBS5B0cCd%2FOWorsdrouhwkiaGuN4%2F51cVZnatxn4gLNDgQTDvT%2Bz%2Fi8rfGDOgIgdp%2BXzcli1spw%2Fm%2Bjhb%2FGDWVfpnozl8cBHCG0zBw5ARMtbpItnm6no3j0KuC1sFYq%2Fs8d1uAMQTIVVwI6jYeQ4klo485Xqm7lhKkRIeRXS87kr4jsRInncCwV3go0Rr2aFwgmtRbNOlalK3BqQ%2Fn04%2BcACxbVvicYUYcwqrGLDJHAq29O8xAy6Wbj2KI6ty%2BNslKQ%2B9QPl0pbidt7LjqbSmnnI%2BD3QcyUCmtQndY0uyqNwWq19iWLnhOuxkvdzfZXirHPDEUYm2Uep5D%2BFKnGZI76alnLLFvCy%2BzRW6OzPKGCV5nNaWyiQZzh%2Bu5G4cuC79Ep7cbx6FEEqBMxaVb5eB2X%2BgtbiZAZDSPMYYhMyIBa%2FXj%2FCF9ZvaPo6rjYB7Oj5yHKmUlw%2FRmHVgHJCIjk7AMGL6%2BCVzA3Nany9XRF8%2FW7kuMNS2ysIGOqUBKhJY6v4cxwO6QHsWQKgdstvZZaOwg9UoAoqXDi0bhf1ylHqL%2B9DK6uQJ9h8eVKYwKKTlnw4bKY%2BUw0pHPKlPkEorfnM8BSWldGkRgOdi2%2BF339X7I%2FFMKRxLLPLB%2F%2FdrO0uBjXImIF%2BWDkatUU6GAUIRki9Y5Qld8%2FYimnueO0Q1XJyzpg7gu9FfO3AaI6HdVdWEBCG90%2Br7fLdQdSQfySncGPbL&X-Amz-Signature=ceae0e82791d1673d4fb76827ba26afea383344167c617db5f7f117288a3cced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG6H5FZ7%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2F6khQU5iOfpbpb5B5X5WZZ622iJs%2FNTkBbxf1n70GlAiEAma96ZgOyrwP8WP8MAj2hfp3SE4hHHCdaK8mnPXxPWm0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5bH8pEbsvKupH0tSrcA73vF5c17oT%2BOmliqdazH160d5htUDknLZaYXIxDBooC86udqge4gX5r80UWMBsKt6UZLabDSnec1iXXcCCKNu1cZ8DBmXnVjUEFp4NeyXZr68qwJ3WCN%2BcF74MmnGi8rUZKeMxfkPgj3A6DBS5B0cCd%2FOWorsdrouhwkiaGuN4%2F51cVZnatxn4gLNDgQTDvT%2Bz%2Fi8rfGDOgIgdp%2BXzcli1spw%2Fm%2Bjhb%2FGDWVfpnozl8cBHCG0zBw5ARMtbpItnm6no3j0KuC1sFYq%2Fs8d1uAMQTIVVwI6jYeQ4klo485Xqm7lhKkRIeRXS87kr4jsRInncCwV3go0Rr2aFwgmtRbNOlalK3BqQ%2Fn04%2BcACxbVvicYUYcwqrGLDJHAq29O8xAy6Wbj2KI6ty%2BNslKQ%2B9QPl0pbidt7LjqbSmnnI%2BD3QcyUCmtQndY0uyqNwWq19iWLnhOuxkvdzfZXirHPDEUYm2Uep5D%2BFKnGZI76alnLLFvCy%2BzRW6OzPKGCV5nNaWyiQZzh%2Bu5G4cuC79Ep7cbx6FEEqBMxaVb5eB2X%2BgtbiZAZDSPMYYhMyIBa%2FXj%2FCF9ZvaPo6rjYB7Oj5yHKmUlw%2FRmHVgHJCIjk7AMGL6%2BCVzA3Nany9XRF8%2FW7kuMNS2ysIGOqUBKhJY6v4cxwO6QHsWQKgdstvZZaOwg9UoAoqXDi0bhf1ylHqL%2B9DK6uQJ9h8eVKYwKKTlnw4bKY%2BUw0pHPKlPkEorfnM8BSWldGkRgOdi2%2BF339X7I%2FFMKRxLLPLB%2F%2FdrO0uBjXImIF%2BWDkatUU6GAUIRki9Y5Qld8%2FYimnueO0Q1XJyzpg7gu9FfO3AaI6HdVdWEBCG90%2Br7fLdQdSQfySncGPbL&X-Amz-Signature=18321f87b63fadb09135bb913d5f5d88052cf29dd298bbd81c589c6972502673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG6H5FZ7%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2F6khQU5iOfpbpb5B5X5WZZ622iJs%2FNTkBbxf1n70GlAiEAma96ZgOyrwP8WP8MAj2hfp3SE4hHHCdaK8mnPXxPWm0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5bH8pEbsvKupH0tSrcA73vF5c17oT%2BOmliqdazH160d5htUDknLZaYXIxDBooC86udqge4gX5r80UWMBsKt6UZLabDSnec1iXXcCCKNu1cZ8DBmXnVjUEFp4NeyXZr68qwJ3WCN%2BcF74MmnGi8rUZKeMxfkPgj3A6DBS5B0cCd%2FOWorsdrouhwkiaGuN4%2F51cVZnatxn4gLNDgQTDvT%2Bz%2Fi8rfGDOgIgdp%2BXzcli1spw%2Fm%2Bjhb%2FGDWVfpnozl8cBHCG0zBw5ARMtbpItnm6no3j0KuC1sFYq%2Fs8d1uAMQTIVVwI6jYeQ4klo485Xqm7lhKkRIeRXS87kr4jsRInncCwV3go0Rr2aFwgmtRbNOlalK3BqQ%2Fn04%2BcACxbVvicYUYcwqrGLDJHAq29O8xAy6Wbj2KI6ty%2BNslKQ%2B9QPl0pbidt7LjqbSmnnI%2BD3QcyUCmtQndY0uyqNwWq19iWLnhOuxkvdzfZXirHPDEUYm2Uep5D%2BFKnGZI76alnLLFvCy%2BzRW6OzPKGCV5nNaWyiQZzh%2Bu5G4cuC79Ep7cbx6FEEqBMxaVb5eB2X%2BgtbiZAZDSPMYYhMyIBa%2FXj%2FCF9ZvaPo6rjYB7Oj5yHKmUlw%2FRmHVgHJCIjk7AMGL6%2BCVzA3Nany9XRF8%2FW7kuMNS2ysIGOqUBKhJY6v4cxwO6QHsWQKgdstvZZaOwg9UoAoqXDi0bhf1ylHqL%2B9DK6uQJ9h8eVKYwKKTlnw4bKY%2BUw0pHPKlPkEorfnM8BSWldGkRgOdi2%2BF339X7I%2FFMKRxLLPLB%2F%2FdrO0uBjXImIF%2BWDkatUU6GAUIRki9Y5Qld8%2FYimnueO0Q1XJyzpg7gu9FfO3AaI6HdVdWEBCG90%2Br7fLdQdSQfySncGPbL&X-Amz-Signature=1bda3e3ebda832ab405be27a2f5d12d7dc4cf23870847335053fe53836854de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
