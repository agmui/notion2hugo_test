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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPYA75T%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDerkuLKd8xJiUYo7rdvAcJT4wmEC6BlfEGX%2BzL7ZT1LAiEA8O9IWZQT68%2BbsTBEGFoZEIlpTIB4TnvlWJOOwX6M%2BRUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq6FLXqKjI48i0xaCrcAy6XDJMtcRhnkPBMemkiv%2BZkAj9dHqyPQ4pm6rQoYWWUbUZ5JSvhILeD6UVCsLqdN%2BLnQ6GK4lky0xKkGll%2FLbc5uDCBgv10tYd6PFCuaKU9p6B8TBhy9Y0708bR7tshsWaPth9f4Q8K1BIQHbHnm5ym%2BhMiDQ4nnZD6kKDO%2FjW0OgVa%2Bd91dtetjzXvg9r4l6k2mgmdYWuxrzLrVBz5Y6%2F8rp9PB32TmdNO%2FzuqIHYOIVlx%2BaHXtI7RZB851yO2GsPGrEiM9rUfkfD8iwSehhWohtktvG4ulMQztKSZxF0WEwnaYwYb%2B9ic%2F%2FonLd7cNKIqMbXVC1bJxVRkCm7ehCXBP8gLMrYvViQXP%2B%2BzBSpMOg1nntgetCqdgFDnHMFwZ9xTJuVT7fQbXMWqy9DSvJL4yP1MnJdV6H2gORzhM%2FK3w0KoTG6cnqzwfKfUs4eythwOcPqDkiPl6Wgu5fb%2BecsbqEQs9VOrub6bGeIbafL1Zhy40GWWp9bYVkj6NoJiaAngfQYR3SZ7bCw5WWe8GIY6cKsGu7BdLjCglPG4tciEzwhqRQgAUs35U74N9DFjtOLEQ%2FX2dWyxMeVkLp%2FvqoLwYtzewWQ5ZHASpVW2FTcnd2qN1t4hrxTDh50cML29%2BMAGOqUB5rerLiGk77F4Hz6x%2FwoIR2c9bqZmo08lNIhqdzj96JrAXv4O%2B2kE7MPgVNY%2BWhtO89VmcVnj2ehopsx0B%2Fz4wjYy8eMj%2BVbom59PrSM8RqypyuTwbqR7RDKZe8WP9hH3Zgj4GhKsl71Yq2xmP2sx84lWeZzwHzTvh1dT3KV%2BRxG5wjeT0zAq0hkReEzlCsmHm1mCc1OaBg3kGJ%2BCf%2F4Uwg%2BBUdGL&X-Amz-Signature=e1786025915231f3c727a4dd8aeef8f5f5d067735cccf69f8b02d255bbd88d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPYA75T%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDerkuLKd8xJiUYo7rdvAcJT4wmEC6BlfEGX%2BzL7ZT1LAiEA8O9IWZQT68%2BbsTBEGFoZEIlpTIB4TnvlWJOOwX6M%2BRUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq6FLXqKjI48i0xaCrcAy6XDJMtcRhnkPBMemkiv%2BZkAj9dHqyPQ4pm6rQoYWWUbUZ5JSvhILeD6UVCsLqdN%2BLnQ6GK4lky0xKkGll%2FLbc5uDCBgv10tYd6PFCuaKU9p6B8TBhy9Y0708bR7tshsWaPth9f4Q8K1BIQHbHnm5ym%2BhMiDQ4nnZD6kKDO%2FjW0OgVa%2Bd91dtetjzXvg9r4l6k2mgmdYWuxrzLrVBz5Y6%2F8rp9PB32TmdNO%2FzuqIHYOIVlx%2BaHXtI7RZB851yO2GsPGrEiM9rUfkfD8iwSehhWohtktvG4ulMQztKSZxF0WEwnaYwYb%2B9ic%2F%2FonLd7cNKIqMbXVC1bJxVRkCm7ehCXBP8gLMrYvViQXP%2B%2BzBSpMOg1nntgetCqdgFDnHMFwZ9xTJuVT7fQbXMWqy9DSvJL4yP1MnJdV6H2gORzhM%2FK3w0KoTG6cnqzwfKfUs4eythwOcPqDkiPl6Wgu5fb%2BecsbqEQs9VOrub6bGeIbafL1Zhy40GWWp9bYVkj6NoJiaAngfQYR3SZ7bCw5WWe8GIY6cKsGu7BdLjCglPG4tciEzwhqRQgAUs35U74N9DFjtOLEQ%2FX2dWyxMeVkLp%2FvqoLwYtzewWQ5ZHASpVW2FTcnd2qN1t4hrxTDh50cML29%2BMAGOqUB5rerLiGk77F4Hz6x%2FwoIR2c9bqZmo08lNIhqdzj96JrAXv4O%2B2kE7MPgVNY%2BWhtO89VmcVnj2ehopsx0B%2Fz4wjYy8eMj%2BVbom59PrSM8RqypyuTwbqR7RDKZe8WP9hH3Zgj4GhKsl71Yq2xmP2sx84lWeZzwHzTvh1dT3KV%2BRxG5wjeT0zAq0hkReEzlCsmHm1mCc1OaBg3kGJ%2BCf%2F4Uwg%2BBUdGL&X-Amz-Signature=298c743dc37bbe217f52627f2b03e9eccc298aae65cf2c593b6ffead6ea50228&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPYA75T%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDerkuLKd8xJiUYo7rdvAcJT4wmEC6BlfEGX%2BzL7ZT1LAiEA8O9IWZQT68%2BbsTBEGFoZEIlpTIB4TnvlWJOOwX6M%2BRUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq6FLXqKjI48i0xaCrcAy6XDJMtcRhnkPBMemkiv%2BZkAj9dHqyPQ4pm6rQoYWWUbUZ5JSvhILeD6UVCsLqdN%2BLnQ6GK4lky0xKkGll%2FLbc5uDCBgv10tYd6PFCuaKU9p6B8TBhy9Y0708bR7tshsWaPth9f4Q8K1BIQHbHnm5ym%2BhMiDQ4nnZD6kKDO%2FjW0OgVa%2Bd91dtetjzXvg9r4l6k2mgmdYWuxrzLrVBz5Y6%2F8rp9PB32TmdNO%2FzuqIHYOIVlx%2BaHXtI7RZB851yO2GsPGrEiM9rUfkfD8iwSehhWohtktvG4ulMQztKSZxF0WEwnaYwYb%2B9ic%2F%2FonLd7cNKIqMbXVC1bJxVRkCm7ehCXBP8gLMrYvViQXP%2B%2BzBSpMOg1nntgetCqdgFDnHMFwZ9xTJuVT7fQbXMWqy9DSvJL4yP1MnJdV6H2gORzhM%2FK3w0KoTG6cnqzwfKfUs4eythwOcPqDkiPl6Wgu5fb%2BecsbqEQs9VOrub6bGeIbafL1Zhy40GWWp9bYVkj6NoJiaAngfQYR3SZ7bCw5WWe8GIY6cKsGu7BdLjCglPG4tciEzwhqRQgAUs35U74N9DFjtOLEQ%2FX2dWyxMeVkLp%2FvqoLwYtzewWQ5ZHASpVW2FTcnd2qN1t4hrxTDh50cML29%2BMAGOqUB5rerLiGk77F4Hz6x%2FwoIR2c9bqZmo08lNIhqdzj96JrAXv4O%2B2kE7MPgVNY%2BWhtO89VmcVnj2ehopsx0B%2Fz4wjYy8eMj%2BVbom59PrSM8RqypyuTwbqR7RDKZe8WP9hH3Zgj4GhKsl71Yq2xmP2sx84lWeZzwHzTvh1dT3KV%2BRxG5wjeT0zAq0hkReEzlCsmHm1mCc1OaBg3kGJ%2BCf%2F4Uwg%2BBUdGL&X-Amz-Signature=a1067b76478d1d91240864f2f9abe8e8509a4087341ddbe7715786cba81e97e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
