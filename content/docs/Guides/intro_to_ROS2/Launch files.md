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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3R5V5F%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiVzhBiYdHyTIsUPIOyH%2B0gIsQIMru0HYVp0itlfkuGQIgYpE4meFRqXqYY309rlh5JfCgjbZRVLtCyrg8WX9uHpkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG91e3ngsXKa9SXY9SrcA47ZMseApCXRrPunoNnWTT0k1SaHNsTXtqutlAqcudN0ggZMiXKP8GauLHJfKwdesNOWzma84g7eYPwQpd3%2BHbQiq8I4dKe7Msg0FhpyTvd%2Ftpm9jcNx2Sd9WwVejIyxDe3CTguNWN2aIGPkd%2Bvv4XyarHxYjLukkUoLFuarvcOkquNgtvWWtKomXnjY%2FROEN63fnG2t%2B24%2FidqvpJWrbr1CpLigcpCmsg2%2BrtnFThPo8XCH0artQy3ktuEu3bDWmOIZKh7ug49Md%2BrIlslqp%2BzdAsEjbKxnBc%2FjgaX%2BocYM1dhoRb%2BFlzPybp4MMyQzXBR0xTi6%2Fs9qYw8lMUVlOWtmGqnM4c2a33NzCROMgUMddHpLfQF3rQaE63eO4ygieNyWDeWFfurQ8W86bHGNzNBDg4Kz6oOiJSTttQJqLht82GFnteLvv0PwZtalVa07fbDH5XRpOBWsfaPx6YfrOkd84htP9fkwSTyj91Xt1EDZgqXw7h0YKbtEG77sPSTci7jDIUpLbKbC3gMjtkaxmfpAzWmLBM3nYiIsG9uRH887SsgLu69x5D3tbM%2F8R8LyGOiHZoUpZsGEmLxJhjDQzRkKy%2BGfrDk8PsM9DEQoP%2BP4z%2FwrP4tNiVelFq5LMKW9%2B7wGOqUBE49s5CB0ayyzbWn3hqt%2F46StO402%2FvpmS8uJb0qyGOzljzLAh9ofm2R2GaKrrI%2FocCIavskG1qdHMklctMgcWiiLkoPa%2BtHORuQfcq0uJ%2BdutvQTv2D%2FXIupp2A57QGToi1Xa6qFPoDbSdxfeDYvTIb9ld%2BrYYgEfOt4maJvs7D5UkzfSuOtRPOMqDL36WH1b%2B5yTdLOGtU2R7R7WwHtJw9jIfzG&X-Amz-Signature=9fdc5ce80bf6d68fb63c7b7a666d84a1723c8471e371b6990b2f60cdc6af45f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3R5V5F%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiVzhBiYdHyTIsUPIOyH%2B0gIsQIMru0HYVp0itlfkuGQIgYpE4meFRqXqYY309rlh5JfCgjbZRVLtCyrg8WX9uHpkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG91e3ngsXKa9SXY9SrcA47ZMseApCXRrPunoNnWTT0k1SaHNsTXtqutlAqcudN0ggZMiXKP8GauLHJfKwdesNOWzma84g7eYPwQpd3%2BHbQiq8I4dKe7Msg0FhpyTvd%2Ftpm9jcNx2Sd9WwVejIyxDe3CTguNWN2aIGPkd%2Bvv4XyarHxYjLukkUoLFuarvcOkquNgtvWWtKomXnjY%2FROEN63fnG2t%2B24%2FidqvpJWrbr1CpLigcpCmsg2%2BrtnFThPo8XCH0artQy3ktuEu3bDWmOIZKh7ug49Md%2BrIlslqp%2BzdAsEjbKxnBc%2FjgaX%2BocYM1dhoRb%2BFlzPybp4MMyQzXBR0xTi6%2Fs9qYw8lMUVlOWtmGqnM4c2a33NzCROMgUMddHpLfQF3rQaE63eO4ygieNyWDeWFfurQ8W86bHGNzNBDg4Kz6oOiJSTttQJqLht82GFnteLvv0PwZtalVa07fbDH5XRpOBWsfaPx6YfrOkd84htP9fkwSTyj91Xt1EDZgqXw7h0YKbtEG77sPSTci7jDIUpLbKbC3gMjtkaxmfpAzWmLBM3nYiIsG9uRH887SsgLu69x5D3tbM%2F8R8LyGOiHZoUpZsGEmLxJhjDQzRkKy%2BGfrDk8PsM9DEQoP%2BP4z%2FwrP4tNiVelFq5LMKW9%2B7wGOqUBE49s5CB0ayyzbWn3hqt%2F46StO402%2FvpmS8uJb0qyGOzljzLAh9ofm2R2GaKrrI%2FocCIavskG1qdHMklctMgcWiiLkoPa%2BtHORuQfcq0uJ%2BdutvQTv2D%2FXIupp2A57QGToi1Xa6qFPoDbSdxfeDYvTIb9ld%2BrYYgEfOt4maJvs7D5UkzfSuOtRPOMqDL36WH1b%2B5yTdLOGtU2R7R7WwHtJw9jIfzG&X-Amz-Signature=122514a09d7de6146f002bff55e703444b292d5354894be200e7bb3ca9538bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3R5V5F%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiVzhBiYdHyTIsUPIOyH%2B0gIsQIMru0HYVp0itlfkuGQIgYpE4meFRqXqYY309rlh5JfCgjbZRVLtCyrg8WX9uHpkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG91e3ngsXKa9SXY9SrcA47ZMseApCXRrPunoNnWTT0k1SaHNsTXtqutlAqcudN0ggZMiXKP8GauLHJfKwdesNOWzma84g7eYPwQpd3%2BHbQiq8I4dKe7Msg0FhpyTvd%2Ftpm9jcNx2Sd9WwVejIyxDe3CTguNWN2aIGPkd%2Bvv4XyarHxYjLukkUoLFuarvcOkquNgtvWWtKomXnjY%2FROEN63fnG2t%2B24%2FidqvpJWrbr1CpLigcpCmsg2%2BrtnFThPo8XCH0artQy3ktuEu3bDWmOIZKh7ug49Md%2BrIlslqp%2BzdAsEjbKxnBc%2FjgaX%2BocYM1dhoRb%2BFlzPybp4MMyQzXBR0xTi6%2Fs9qYw8lMUVlOWtmGqnM4c2a33NzCROMgUMddHpLfQF3rQaE63eO4ygieNyWDeWFfurQ8W86bHGNzNBDg4Kz6oOiJSTttQJqLht82GFnteLvv0PwZtalVa07fbDH5XRpOBWsfaPx6YfrOkd84htP9fkwSTyj91Xt1EDZgqXw7h0YKbtEG77sPSTci7jDIUpLbKbC3gMjtkaxmfpAzWmLBM3nYiIsG9uRH887SsgLu69x5D3tbM%2F8R8LyGOiHZoUpZsGEmLxJhjDQzRkKy%2BGfrDk8PsM9DEQoP%2BP4z%2FwrP4tNiVelFq5LMKW9%2B7wGOqUBE49s5CB0ayyzbWn3hqt%2F46StO402%2FvpmS8uJb0qyGOzljzLAh9ofm2R2GaKrrI%2FocCIavskG1qdHMklctMgcWiiLkoPa%2BtHORuQfcq0uJ%2BdutvQTv2D%2FXIupp2A57QGToi1Xa6qFPoDbSdxfeDYvTIb9ld%2BrYYgEfOt4maJvs7D5UkzfSuOtRPOMqDL36WH1b%2B5yTdLOGtU2R7R7WwHtJw9jIfzG&X-Amz-Signature=13c9ae5fd91e36d4eb1a8a08d2f37075b2adec9d6d4b91355d6f7f2f5e290c72&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
