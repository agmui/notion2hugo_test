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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPD3BSS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDPL7v6ymVyRKgBLmCiPVhxEdgcDKRd9A6vHBZPDbTFTAiAlyPL75iZtmOQM3CISup3lOtsfvZJ1rQVhhFVuzVJqSyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkQdg1OrKg9%2FJ66IKtwDf%2F7IWkDRiPUdKEIoaH8uK5KCJ696yqF%2B0qVjzSMkJZ%2BrkeKGT6zWyo03LeV1PtBDdB83itlfmrO9gbYwxQjCrtRmTf4GuQpr01cTvkY4PGDnqPf965uf1ZIf1h2DgkQL0Nvq3qKPxJUAe9478En4nc0Cih7jLWUkPRGzBmCoyg31PTPWpaqZL0%2BbjnK1YmPwwmgBrS8dJe4RHPE1kx%2FRL0jtcrxbEhw8ohfSc%2BCzFAsBuLjh26yd3ZCAJj9fIzgeLLjYu3i%2Bt%2BPhIvp5We5JG8ONUSdJfCZW7fIVBf3RzvKwbkvoEMxj%2FqtTsUkhhQbCR2qm4T9dUnM9zj3t0Pz9NEQuwrra9YPEFCJ6C6AorRSUsVO146BXQ3xhalcPxq8u6kz4i4w%2Fnoc4gbA5fKtIyLPPXNTRK5pCIbNyPz0B5PbufgxwQz3HxZyGXBgWfW2KZECaQt3AVn43KrICDy23GlMkMud0f7lfnCrf4Uj5TJbCMyMao6kl4bniwZR96qez8s3ApUTlNch4O4j5JTMzowTRTIARnSpDHEbJZrMjJNC4VmXRhi%2BPfcUyxm41T2adr92BuHdJXX%2FrO%2FHxIM%2ByaehgBg4QKRgxMGV9pQqbM5tXVJq6YCH7wG5aPWEw35uRvQY6pgGhYuHDJDXPEzpAJoZ2SfEs6tI5GUe4%2Fez4U8gAGA0nwooT4HYJFEugiu4JLFide0BWbrPJq4gK%2F%2Fh4yy5g1P5HP8okBkrFXqHeGTfhD7oWMFYBwbTJOrV5t7dgHH9LcJljYJh%2Fho%2FKuxNA0Nf8rwtVoAeO88FVtGzfON8CGAG2w0ThatBJWDWbuVjejA05yFz7o9j68FiYmyLJd%2BTWg6Rqk%2B1B0ie1&X-Amz-Signature=62b48c5ecfbe9bb49b4356998d2c39da8f73e5b5a6203d8add6797e3a0c4650a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPD3BSS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDPL7v6ymVyRKgBLmCiPVhxEdgcDKRd9A6vHBZPDbTFTAiAlyPL75iZtmOQM3CISup3lOtsfvZJ1rQVhhFVuzVJqSyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkQdg1OrKg9%2FJ66IKtwDf%2F7IWkDRiPUdKEIoaH8uK5KCJ696yqF%2B0qVjzSMkJZ%2BrkeKGT6zWyo03LeV1PtBDdB83itlfmrO9gbYwxQjCrtRmTf4GuQpr01cTvkY4PGDnqPf965uf1ZIf1h2DgkQL0Nvq3qKPxJUAe9478En4nc0Cih7jLWUkPRGzBmCoyg31PTPWpaqZL0%2BbjnK1YmPwwmgBrS8dJe4RHPE1kx%2FRL0jtcrxbEhw8ohfSc%2BCzFAsBuLjh26yd3ZCAJj9fIzgeLLjYu3i%2Bt%2BPhIvp5We5JG8ONUSdJfCZW7fIVBf3RzvKwbkvoEMxj%2FqtTsUkhhQbCR2qm4T9dUnM9zj3t0Pz9NEQuwrra9YPEFCJ6C6AorRSUsVO146BXQ3xhalcPxq8u6kz4i4w%2Fnoc4gbA5fKtIyLPPXNTRK5pCIbNyPz0B5PbufgxwQz3HxZyGXBgWfW2KZECaQt3AVn43KrICDy23GlMkMud0f7lfnCrf4Uj5TJbCMyMao6kl4bniwZR96qez8s3ApUTlNch4O4j5JTMzowTRTIARnSpDHEbJZrMjJNC4VmXRhi%2BPfcUyxm41T2adr92BuHdJXX%2FrO%2FHxIM%2ByaehgBg4QKRgxMGV9pQqbM5tXVJq6YCH7wG5aPWEw35uRvQY6pgGhYuHDJDXPEzpAJoZ2SfEs6tI5GUe4%2Fez4U8gAGA0nwooT4HYJFEugiu4JLFide0BWbrPJq4gK%2F%2Fh4yy5g1P5HP8okBkrFXqHeGTfhD7oWMFYBwbTJOrV5t7dgHH9LcJljYJh%2Fho%2FKuxNA0Nf8rwtVoAeO88FVtGzfON8CGAG2w0ThatBJWDWbuVjejA05yFz7o9j68FiYmyLJd%2BTWg6Rqk%2B1B0ie1&X-Amz-Signature=707d19dcf2edd1c46c51e190fff42b052296f183ed44cc1aae9370ce8d21c9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPD3BSS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDPL7v6ymVyRKgBLmCiPVhxEdgcDKRd9A6vHBZPDbTFTAiAlyPL75iZtmOQM3CISup3lOtsfvZJ1rQVhhFVuzVJqSyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkQdg1OrKg9%2FJ66IKtwDf%2F7IWkDRiPUdKEIoaH8uK5KCJ696yqF%2B0qVjzSMkJZ%2BrkeKGT6zWyo03LeV1PtBDdB83itlfmrO9gbYwxQjCrtRmTf4GuQpr01cTvkY4PGDnqPf965uf1ZIf1h2DgkQL0Nvq3qKPxJUAe9478En4nc0Cih7jLWUkPRGzBmCoyg31PTPWpaqZL0%2BbjnK1YmPwwmgBrS8dJe4RHPE1kx%2FRL0jtcrxbEhw8ohfSc%2BCzFAsBuLjh26yd3ZCAJj9fIzgeLLjYu3i%2Bt%2BPhIvp5We5JG8ONUSdJfCZW7fIVBf3RzvKwbkvoEMxj%2FqtTsUkhhQbCR2qm4T9dUnM9zj3t0Pz9NEQuwrra9YPEFCJ6C6AorRSUsVO146BXQ3xhalcPxq8u6kz4i4w%2Fnoc4gbA5fKtIyLPPXNTRK5pCIbNyPz0B5PbufgxwQz3HxZyGXBgWfW2KZECaQt3AVn43KrICDy23GlMkMud0f7lfnCrf4Uj5TJbCMyMao6kl4bniwZR96qez8s3ApUTlNch4O4j5JTMzowTRTIARnSpDHEbJZrMjJNC4VmXRhi%2BPfcUyxm41T2adr92BuHdJXX%2FrO%2FHxIM%2ByaehgBg4QKRgxMGV9pQqbM5tXVJq6YCH7wG5aPWEw35uRvQY6pgGhYuHDJDXPEzpAJoZ2SfEs6tI5GUe4%2Fez4U8gAGA0nwooT4HYJFEugiu4JLFide0BWbrPJq4gK%2F%2Fh4yy5g1P5HP8okBkrFXqHeGTfhD7oWMFYBwbTJOrV5t7dgHH9LcJljYJh%2Fho%2FKuxNA0Nf8rwtVoAeO88FVtGzfON8CGAG2w0ThatBJWDWbuVjejA05yFz7o9j68FiYmyLJd%2BTWg6Rqk%2B1B0ie1&X-Amz-Signature=496c00b80d716a274917f068f24f82b8d6c3cba80f7e290cc203ecf22620f9d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
