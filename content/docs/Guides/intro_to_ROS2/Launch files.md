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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSZKPR3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GZ3%2F6mYNn6hlR%2B%2Ffpf10CAT7KZJqXKb7wT4ZHa3ruQIgCQsWcBcGqOUVzCP5ylop335WeYbZFRhApGidk70Kv7gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI09PkwXSRmqbtYGxyrcAx%2FZObVBs4vaGlbd%2BF7yXWkNSVFIFQB1A8WZWAcsifTZ3uLLTqVK5gK7P6cthNHHY8FhtOR2PTmypsabgoxNBF1WIdndKgMmzY%2FkyeFlQGkPiOCtw7ss9hFjc7%2Ba0UXtFfvjOmTds6T%2F32TuncUQLVf52pOZX3wWQ43ITHiIPfLJBibiM7rDIVsPrys%2Bk0fQ8QNYNu9uvDOAZS9vd%2BcenoT21iA7MhLqpPokbOvL5morjvHkd9wZGPhIRFYBKBFFR0t3SzW9bKMgWYizTFHRtgTZUYMWS5ABm0D5g%2B7ltEXlNEbflAoG0npnJXZjbD5bGUAo9GQJx8%2F3RVBDE3b6BaZ3UbzQ0jh3KBTGJEbuhBagX64BEwh%2FHp0TXV5QkbVBaY2ELJ3ZZON7%2FsmeeFroY%2BJ2HuaJAZmvS2cedBsggUhURpEME8co3V3rEr0Wiyj8ea8lMvR8FXZWtkwmd4%2Fuo87U2ausK2hmCQuDS%2Bzp%2FdILj1cJ%2FR0lhxdiBuiaCGCrupGs2iUpp%2FV0ojObSDlJ9vt%2BWa19j45LpGOwiT3c3WZYm5SpJeMIvkYuOd9KeS7FoLjg0HGdTcdfY99V3DgkaM20oaSRcykpbZ7bfwXPaUkk7uKaBGM99kLxnemTML%2BTzb4GOqUBMCOEaXSsvLTDOM%2BRUQnWld%2BX62ATA4hAMmP6ovu6Rh4A057T8M1SMhlTWAvRxq1SEkOQpd17xsxIWxPRgeV3CHbFZeLJnyjEj3rIlx%2F8IsPndiBukLm81HhlwU4uLK7oYj41vGTDMswR%2BrGLg1AaRtaLepqD13YbjFWw7GQF7ctWPp%2B7%2FPS9Dtxdbc7VZFm4h%2FpjIrJNr4NLKKQbAXSffCfrISCA&X-Amz-Signature=0a188991e3ab60803b75c732376f4961ca5cab35244c656ef503a5ae871eb294&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSZKPR3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GZ3%2F6mYNn6hlR%2B%2Ffpf10CAT7KZJqXKb7wT4ZHa3ruQIgCQsWcBcGqOUVzCP5ylop335WeYbZFRhApGidk70Kv7gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI09PkwXSRmqbtYGxyrcAx%2FZObVBs4vaGlbd%2BF7yXWkNSVFIFQB1A8WZWAcsifTZ3uLLTqVK5gK7P6cthNHHY8FhtOR2PTmypsabgoxNBF1WIdndKgMmzY%2FkyeFlQGkPiOCtw7ss9hFjc7%2Ba0UXtFfvjOmTds6T%2F32TuncUQLVf52pOZX3wWQ43ITHiIPfLJBibiM7rDIVsPrys%2Bk0fQ8QNYNu9uvDOAZS9vd%2BcenoT21iA7MhLqpPokbOvL5morjvHkd9wZGPhIRFYBKBFFR0t3SzW9bKMgWYizTFHRtgTZUYMWS5ABm0D5g%2B7ltEXlNEbflAoG0npnJXZjbD5bGUAo9GQJx8%2F3RVBDE3b6BaZ3UbzQ0jh3KBTGJEbuhBagX64BEwh%2FHp0TXV5QkbVBaY2ELJ3ZZON7%2FsmeeFroY%2BJ2HuaJAZmvS2cedBsggUhURpEME8co3V3rEr0Wiyj8ea8lMvR8FXZWtkwmd4%2Fuo87U2ausK2hmCQuDS%2Bzp%2FdILj1cJ%2FR0lhxdiBuiaCGCrupGs2iUpp%2FV0ojObSDlJ9vt%2BWa19j45LpGOwiT3c3WZYm5SpJeMIvkYuOd9KeS7FoLjg0HGdTcdfY99V3DgkaM20oaSRcykpbZ7bfwXPaUkk7uKaBGM99kLxnemTML%2BTzb4GOqUBMCOEaXSsvLTDOM%2BRUQnWld%2BX62ATA4hAMmP6ovu6Rh4A057T8M1SMhlTWAvRxq1SEkOQpd17xsxIWxPRgeV3CHbFZeLJnyjEj3rIlx%2F8IsPndiBukLm81HhlwU4uLK7oYj41vGTDMswR%2BrGLg1AaRtaLepqD13YbjFWw7GQF7ctWPp%2B7%2FPS9Dtxdbc7VZFm4h%2FpjIrJNr4NLKKQbAXSffCfrISCA&X-Amz-Signature=cda2a4e1282800f884502fbae849c50c5717db15e87442ee065aed933f05fc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSZKPR3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GZ3%2F6mYNn6hlR%2B%2Ffpf10CAT7KZJqXKb7wT4ZHa3ruQIgCQsWcBcGqOUVzCP5ylop335WeYbZFRhApGidk70Kv7gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI09PkwXSRmqbtYGxyrcAx%2FZObVBs4vaGlbd%2BF7yXWkNSVFIFQB1A8WZWAcsifTZ3uLLTqVK5gK7P6cthNHHY8FhtOR2PTmypsabgoxNBF1WIdndKgMmzY%2FkyeFlQGkPiOCtw7ss9hFjc7%2Ba0UXtFfvjOmTds6T%2F32TuncUQLVf52pOZX3wWQ43ITHiIPfLJBibiM7rDIVsPrys%2Bk0fQ8QNYNu9uvDOAZS9vd%2BcenoT21iA7MhLqpPokbOvL5morjvHkd9wZGPhIRFYBKBFFR0t3SzW9bKMgWYizTFHRtgTZUYMWS5ABm0D5g%2B7ltEXlNEbflAoG0npnJXZjbD5bGUAo9GQJx8%2F3RVBDE3b6BaZ3UbzQ0jh3KBTGJEbuhBagX64BEwh%2FHp0TXV5QkbVBaY2ELJ3ZZON7%2FsmeeFroY%2BJ2HuaJAZmvS2cedBsggUhURpEME8co3V3rEr0Wiyj8ea8lMvR8FXZWtkwmd4%2Fuo87U2ausK2hmCQuDS%2Bzp%2FdILj1cJ%2FR0lhxdiBuiaCGCrupGs2iUpp%2FV0ojObSDlJ9vt%2BWa19j45LpGOwiT3c3WZYm5SpJeMIvkYuOd9KeS7FoLjg0HGdTcdfY99V3DgkaM20oaSRcykpbZ7bfwXPaUkk7uKaBGM99kLxnemTML%2BTzb4GOqUBMCOEaXSsvLTDOM%2BRUQnWld%2BX62ATA4hAMmP6ovu6Rh4A057T8M1SMhlTWAvRxq1SEkOQpd17xsxIWxPRgeV3CHbFZeLJnyjEj3rIlx%2F8IsPndiBukLm81HhlwU4uLK7oYj41vGTDMswR%2BrGLg1AaRtaLepqD13YbjFWw7GQF7ctWPp%2B7%2FPS9Dtxdbc7VZFm4h%2FpjIrJNr4NLKKQbAXSffCfrISCA&X-Amz-Signature=78824fed65ad3c3ea33ae90fcfde1c2d1e2d8b083e69cab4b28d6da69de47c04&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
