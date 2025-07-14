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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHEVETH3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBCu9BRSR5P5B7HWWwXUbaH2gSkXfa2aX%2BbZqm6GfN5uAiAxsCzKCt6BnSY%2BZ8j89t1odbo6MHRAwAkNRDzbYwFkICr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMBW0E3kcvRdZ309svKtwD0NEBqQvebm9I5Yj5K7AiJI0jIzxivkc7jxdDsPVkTqxHRlPV41VujzGm%2Bp3vSgCzj%2BrUcvrJ0g8PlfEKWcCs9cCBLZyBRbo5Jh0HqClxbE6n7V6QIB7Jeb9%2BqpRXZRVH3GFwxsFNmCFSrIxVX9UAw%2BdxrNP7%2BqXwMmQLeQ0Pzv2ebRjweiy0bRYDAkY2xeYhgaCnRl70hAwPKR16sNr5IMosUd2mwW8MF0xphBKfCGQTI%2FovSDbeCfuiCh71a3U7mJSuuZByWOSDchfCznujg39XBscrq1tFqDUAQsF4L%2FapQdpY2Ez6BHfc5vr1Xws2zVmugQ1fz1KAMLd520817DbRYI5yCEbsDSaY9OJwBMGbz8PovefWWiycxw9cqVLaZBimHoFWPkZzwXGWsoLQLD2pxWO1P51IN2D8GCbuUbQM%2FHSuJyPCzVI9JNCfhBYkDeMA7JS7Slhy6ey8YqgVemzrwzsK3UwaBW2vkwY6x5wHx%2B4%2BCkzs6yX5L1mfrEpTRoAqwMEjhffqshx%2BqvXXjvTnIIHo0PxcWDsCf5MmNljEbVgqMN5G9ex5qUzOtSThAmIJMGzdOS92khG1hAHHt4G0Lbmumqzvz8cRZV%2BbYWbLpIuuoLrHPAcJ3y4w%2BdvTwwY6pgGL19AIq%2BvMez7EW0fWTa1mP%2BcrbK7w8PjThKreAw3%2F%2B5bC8TGs7FGIxviO5n65UlIFGCB0hfGnUxxtHHMeM%2Fad5DRy%2FEcEygqx2DkAiDMMXKk7HAcqFoj4YJhrDoonmXbqUA%2B%2FI8Uxug43Xc%2FFYOstLm4JZyl2706eDpO0PkArjO866khfexZKxg1Jv192k6l0DgfD7DwBMFawnr%2FrwijJOJNYuh0x&X-Amz-Signature=f86cfb45fed3dcaf7634231d59814fa30e71005b488bfa2d59bf463d11f4a95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHEVETH3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBCu9BRSR5P5B7HWWwXUbaH2gSkXfa2aX%2BbZqm6GfN5uAiAxsCzKCt6BnSY%2BZ8j89t1odbo6MHRAwAkNRDzbYwFkICr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMBW0E3kcvRdZ309svKtwD0NEBqQvebm9I5Yj5K7AiJI0jIzxivkc7jxdDsPVkTqxHRlPV41VujzGm%2Bp3vSgCzj%2BrUcvrJ0g8PlfEKWcCs9cCBLZyBRbo5Jh0HqClxbE6n7V6QIB7Jeb9%2BqpRXZRVH3GFwxsFNmCFSrIxVX9UAw%2BdxrNP7%2BqXwMmQLeQ0Pzv2ebRjweiy0bRYDAkY2xeYhgaCnRl70hAwPKR16sNr5IMosUd2mwW8MF0xphBKfCGQTI%2FovSDbeCfuiCh71a3U7mJSuuZByWOSDchfCznujg39XBscrq1tFqDUAQsF4L%2FapQdpY2Ez6BHfc5vr1Xws2zVmugQ1fz1KAMLd520817DbRYI5yCEbsDSaY9OJwBMGbz8PovefWWiycxw9cqVLaZBimHoFWPkZzwXGWsoLQLD2pxWO1P51IN2D8GCbuUbQM%2FHSuJyPCzVI9JNCfhBYkDeMA7JS7Slhy6ey8YqgVemzrwzsK3UwaBW2vkwY6x5wHx%2B4%2BCkzs6yX5L1mfrEpTRoAqwMEjhffqshx%2BqvXXjvTnIIHo0PxcWDsCf5MmNljEbVgqMN5G9ex5qUzOtSThAmIJMGzdOS92khG1hAHHt4G0Lbmumqzvz8cRZV%2BbYWbLpIuuoLrHPAcJ3y4w%2BdvTwwY6pgGL19AIq%2BvMez7EW0fWTa1mP%2BcrbK7w8PjThKreAw3%2F%2B5bC8TGs7FGIxviO5n65UlIFGCB0hfGnUxxtHHMeM%2Fad5DRy%2FEcEygqx2DkAiDMMXKk7HAcqFoj4YJhrDoonmXbqUA%2B%2FI8Uxug43Xc%2FFYOstLm4JZyl2706eDpO0PkArjO866khfexZKxg1Jv192k6l0DgfD7DwBMFawnr%2FrwijJOJNYuh0x&X-Amz-Signature=e5999dd53cd504a9b1015e135731d0e976e6a994ad9af1ab31409ed08d6085be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHEVETH3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBCu9BRSR5P5B7HWWwXUbaH2gSkXfa2aX%2BbZqm6GfN5uAiAxsCzKCt6BnSY%2BZ8j89t1odbo6MHRAwAkNRDzbYwFkICr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMBW0E3kcvRdZ309svKtwD0NEBqQvebm9I5Yj5K7AiJI0jIzxivkc7jxdDsPVkTqxHRlPV41VujzGm%2Bp3vSgCzj%2BrUcvrJ0g8PlfEKWcCs9cCBLZyBRbo5Jh0HqClxbE6n7V6QIB7Jeb9%2BqpRXZRVH3GFwxsFNmCFSrIxVX9UAw%2BdxrNP7%2BqXwMmQLeQ0Pzv2ebRjweiy0bRYDAkY2xeYhgaCnRl70hAwPKR16sNr5IMosUd2mwW8MF0xphBKfCGQTI%2FovSDbeCfuiCh71a3U7mJSuuZByWOSDchfCznujg39XBscrq1tFqDUAQsF4L%2FapQdpY2Ez6BHfc5vr1Xws2zVmugQ1fz1KAMLd520817DbRYI5yCEbsDSaY9OJwBMGbz8PovefWWiycxw9cqVLaZBimHoFWPkZzwXGWsoLQLD2pxWO1P51IN2D8GCbuUbQM%2FHSuJyPCzVI9JNCfhBYkDeMA7JS7Slhy6ey8YqgVemzrwzsK3UwaBW2vkwY6x5wHx%2B4%2BCkzs6yX5L1mfrEpTRoAqwMEjhffqshx%2BqvXXjvTnIIHo0PxcWDsCf5MmNljEbVgqMN5G9ex5qUzOtSThAmIJMGzdOS92khG1hAHHt4G0Lbmumqzvz8cRZV%2BbYWbLpIuuoLrHPAcJ3y4w%2BdvTwwY6pgGL19AIq%2BvMez7EW0fWTa1mP%2BcrbK7w8PjThKreAw3%2F%2B5bC8TGs7FGIxviO5n65UlIFGCB0hfGnUxxtHHMeM%2Fad5DRy%2FEcEygqx2DkAiDMMXKk7HAcqFoj4YJhrDoonmXbqUA%2B%2FI8Uxug43Xc%2FFYOstLm4JZyl2706eDpO0PkArjO866khfexZKxg1Jv192k6l0DgfD7DwBMFawnr%2FrwijJOJNYuh0x&X-Amz-Signature=fe477627733cad336a63d0b9c53a765f7aebedb8400d9894cb7a37e1f74176ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
