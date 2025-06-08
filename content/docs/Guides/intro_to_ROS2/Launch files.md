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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZA3S7L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtW7Ee8tUq8MQI3IltJza%2Bxr94R0Gcu8yV%2BBgtNFyZaAiAUSxjw6LvzD4iQvLbKyGhiS3dcVLOrL9FtXP7x2fvIpyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7gFE95U7ds3p9N8KtwDShLMciqewp20L4iYV%2FxRvJnxS89HtqkcgJDypVBu2bmPua95yZBFKK0DDKDZg%2Fc%2F%2BHwQSqADNeow7pNIg3B3bOd0xiRUeS7yDaIjI4IDSSaZuD%2F9Bv%2FWdl%2FZUEr5kM5DrYhh5W3nSjFjrxVqk1YubCVfYhY2H0P6FwB8wqUzp5%2BNgvIlk%2B9ceEAAI1aV0prBa3DApzimZQBwGjGwzMVxvuZJnMPaLjTnSHgr3k%2F2FkXQ0FKArvvjUTj6EFXybZNGIQK8OWzSUDTXuotdA2lkOkbj4jWHc5hotnInRgHGJKW496jhBQVC2aDE2n2HxnFMDFTRklrZKEy72b90IoEn%2FXSiufT5RUjW6hIhFgeDbht9Icgk7v%2BU0J6uz9Dy5bJT%2FjCq7hYXWxgjI53TGUdAfcT%2Bon6qqjOXtkAD4tcDNilbobquaxj77v3cbK6z0MwI9iLSEcSuy8CA7ucDmzXPEaYePYtvzfvSofC%2BVLCpYTEh8gk4%2Fbl3dYc6q7IUnbkgO45%2BA1FCUXdKCKBgQCfXVKnexaljv%2FV1oLDn5aIXF52DGN%2BmoCk4fJNqHMd7ije%2B2DHJ461vUo8tkbCBXsO6R8cE%2BGANImU0zKgY0t29v8Uf8ekTIyMJ8K2E6FMwvbKWwgY6pgFe0m3MqJ1AccRKK2rqLj0lzq%2FnvrpoKq%2F6cXLa%2BRqXhWRk%2FxDE%2BNCm%2BXbBb6x5kANscfXskCRQbmMJeYA8e%2Fnv7eAyWxOjjqRSXXOy6s5a2HlezNMXbj1P1D0%2Blx23yEA%2F1PjM4%2ByTPlL3XE81%2FtKOOMdG03F22UMk7BcwWW4GdkR7u0TzyCNYahpjxqh1SbW7lwLI%2Bq%2B%2B7ZmQ4LE%2B9l1b%2Fs0%2BeVF%2F&X-Amz-Signature=8940beb102b19e8051c054cf8f243e95b37d7580bb9e03c8a07afc4fb6310a19&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZA3S7L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtW7Ee8tUq8MQI3IltJza%2Bxr94R0Gcu8yV%2BBgtNFyZaAiAUSxjw6LvzD4iQvLbKyGhiS3dcVLOrL9FtXP7x2fvIpyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7gFE95U7ds3p9N8KtwDShLMciqewp20L4iYV%2FxRvJnxS89HtqkcgJDypVBu2bmPua95yZBFKK0DDKDZg%2Fc%2F%2BHwQSqADNeow7pNIg3B3bOd0xiRUeS7yDaIjI4IDSSaZuD%2F9Bv%2FWdl%2FZUEr5kM5DrYhh5W3nSjFjrxVqk1YubCVfYhY2H0P6FwB8wqUzp5%2BNgvIlk%2B9ceEAAI1aV0prBa3DApzimZQBwGjGwzMVxvuZJnMPaLjTnSHgr3k%2F2FkXQ0FKArvvjUTj6EFXybZNGIQK8OWzSUDTXuotdA2lkOkbj4jWHc5hotnInRgHGJKW496jhBQVC2aDE2n2HxnFMDFTRklrZKEy72b90IoEn%2FXSiufT5RUjW6hIhFgeDbht9Icgk7v%2BU0J6uz9Dy5bJT%2FjCq7hYXWxgjI53TGUdAfcT%2Bon6qqjOXtkAD4tcDNilbobquaxj77v3cbK6z0MwI9iLSEcSuy8CA7ucDmzXPEaYePYtvzfvSofC%2BVLCpYTEh8gk4%2Fbl3dYc6q7IUnbkgO45%2BA1FCUXdKCKBgQCfXVKnexaljv%2FV1oLDn5aIXF52DGN%2BmoCk4fJNqHMd7ije%2B2DHJ461vUo8tkbCBXsO6R8cE%2BGANImU0zKgY0t29v8Uf8ekTIyMJ8K2E6FMwvbKWwgY6pgFe0m3MqJ1AccRKK2rqLj0lzq%2FnvrpoKq%2F6cXLa%2BRqXhWRk%2FxDE%2BNCm%2BXbBb6x5kANscfXskCRQbmMJeYA8e%2Fnv7eAyWxOjjqRSXXOy6s5a2HlezNMXbj1P1D0%2Blx23yEA%2F1PjM4%2ByTPlL3XE81%2FtKOOMdG03F22UMk7BcwWW4GdkR7u0TzyCNYahpjxqh1SbW7lwLI%2Bq%2B%2B7ZmQ4LE%2B9l1b%2Fs0%2BeVF%2F&X-Amz-Signature=ea285d8750a331d0f45e6d8dd4c8d23e253447de736af6e889dace07ef3accaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZA3S7L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtW7Ee8tUq8MQI3IltJza%2Bxr94R0Gcu8yV%2BBgtNFyZaAiAUSxjw6LvzD4iQvLbKyGhiS3dcVLOrL9FtXP7x2fvIpyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7gFE95U7ds3p9N8KtwDShLMciqewp20L4iYV%2FxRvJnxS89HtqkcgJDypVBu2bmPua95yZBFKK0DDKDZg%2Fc%2F%2BHwQSqADNeow7pNIg3B3bOd0xiRUeS7yDaIjI4IDSSaZuD%2F9Bv%2FWdl%2FZUEr5kM5DrYhh5W3nSjFjrxVqk1YubCVfYhY2H0P6FwB8wqUzp5%2BNgvIlk%2B9ceEAAI1aV0prBa3DApzimZQBwGjGwzMVxvuZJnMPaLjTnSHgr3k%2F2FkXQ0FKArvvjUTj6EFXybZNGIQK8OWzSUDTXuotdA2lkOkbj4jWHc5hotnInRgHGJKW496jhBQVC2aDE2n2HxnFMDFTRklrZKEy72b90IoEn%2FXSiufT5RUjW6hIhFgeDbht9Icgk7v%2BU0J6uz9Dy5bJT%2FjCq7hYXWxgjI53TGUdAfcT%2Bon6qqjOXtkAD4tcDNilbobquaxj77v3cbK6z0MwI9iLSEcSuy8CA7ucDmzXPEaYePYtvzfvSofC%2BVLCpYTEh8gk4%2Fbl3dYc6q7IUnbkgO45%2BA1FCUXdKCKBgQCfXVKnexaljv%2FV1oLDn5aIXF52DGN%2BmoCk4fJNqHMd7ije%2B2DHJ461vUo8tkbCBXsO6R8cE%2BGANImU0zKgY0t29v8Uf8ekTIyMJ8K2E6FMwvbKWwgY6pgFe0m3MqJ1AccRKK2rqLj0lzq%2FnvrpoKq%2F6cXLa%2BRqXhWRk%2FxDE%2BNCm%2BXbBb6x5kANscfXskCRQbmMJeYA8e%2Fnv7eAyWxOjjqRSXXOy6s5a2HlezNMXbj1P1D0%2Blx23yEA%2F1PjM4%2ByTPlL3XE81%2FtKOOMdG03F22UMk7BcwWW4GdkR7u0TzyCNYahpjxqh1SbW7lwLI%2Bq%2B%2B7ZmQ4LE%2B9l1b%2Fs0%2BeVF%2F&X-Amz-Signature=fb97056242dacbf83d2899674eec855883cb57beaf1e5c47cac167c92475bcd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
