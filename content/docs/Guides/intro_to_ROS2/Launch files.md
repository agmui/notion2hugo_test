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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFAFD6O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPolfJHL9Drrl7zzJ74J%2FhEaixQ%2FSosFiyRmv0LclwiAIhAOfexWYKJqdwTql5Tv4HrrH%2BfgLPUGkbS7jsmDOEC9f%2FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXO9uZ%2BlSH%2By6aCOYq3AOd6uIT98sax%2FpSePahE3Kb5BarjDawQeKhTkq7pyFmE%2FzKEJObnhSdwUJsWys22mkYtpbWt7p3eAlVPzMhKqf%2Bzyoqa%2Bmkjc0%2Bkg6DwByD2kEawBEw8ZEl5jnN%2BneaT3gmJJ7iokelk4GOYkH2Tr6rlYm6RlRsvfoffb0gpwv2yOx7Twhw8%2BTwT7UBGMzKew0XgJR48p5DsAnKw4V6g9AJMfZwnXODPAa7ulugnXkdnmIG4d3th2%2BA0TYqHx15oYga%2FNNykrMlZ9uZHO7M%2BpiMgJ%2BIb6Op4DjtWVqvg239KsKReyqY%2BSBPVY4%2FvMi%2FPdom5X%2B8nHOXggSBpLhx1GILMzCJd%2FlHMfX298DoEpJ1SKSP2iLdIIvtSoZNn07XNim5eGP8gdExSt1Pb1hmhef7h1%2BCh8tIkrtwfglifovVmsux%2FQFlyfAZV9Nd6UWN0CEj28EEWcCMrl74KN7oCun4TLBnFa0rTdPWWYHoJ6b%2BD69mw2diXjX5xC%2FEK7L4G8QxVjDK9r5B%2Fz8%2BSiLv7uXPK78C1GmV%2FasDmCxaqORywWYMBxYYf8GDlp6drXnP7kwjQtG1d3lOLLynUA4zISFxha%2Bu7RFgh6qlfvUzOU%2BQ5Aix1rT0OLgV1FtQkDCotsHABjqkAdaN3shhB19PuV6bMU%2Bqa75ByKQmau5wJr1J5Nzhlh9ty%2FYNgYPb2Pe3dcKPsJsyOHtcR70pEFaUHD7gKS8jZsZ1gimgFRT9qLJh4k18zEx1Fp0zob5hYNsBzW81OzmabSYzr7X%2B4GLsYbPzcl%2BwdT5Rv9koWdtzf%2FObvc6CHlInUomT9gFFIW%2F8Uk3p9KLlhtRZegdRQEGHYPu7V28nZhVnwH%2Fl&X-Amz-Signature=0eafaa495c9209204eb65a2aa9e63d3dbe954cf73572fb3005a058a8e19ecf61&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFAFD6O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPolfJHL9Drrl7zzJ74J%2FhEaixQ%2FSosFiyRmv0LclwiAIhAOfexWYKJqdwTql5Tv4HrrH%2BfgLPUGkbS7jsmDOEC9f%2FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXO9uZ%2BlSH%2By6aCOYq3AOd6uIT98sax%2FpSePahE3Kb5BarjDawQeKhTkq7pyFmE%2FzKEJObnhSdwUJsWys22mkYtpbWt7p3eAlVPzMhKqf%2Bzyoqa%2Bmkjc0%2Bkg6DwByD2kEawBEw8ZEl5jnN%2BneaT3gmJJ7iokelk4GOYkH2Tr6rlYm6RlRsvfoffb0gpwv2yOx7Twhw8%2BTwT7UBGMzKew0XgJR48p5DsAnKw4V6g9AJMfZwnXODPAa7ulugnXkdnmIG4d3th2%2BA0TYqHx15oYga%2FNNykrMlZ9uZHO7M%2BpiMgJ%2BIb6Op4DjtWVqvg239KsKReyqY%2BSBPVY4%2FvMi%2FPdom5X%2B8nHOXggSBpLhx1GILMzCJd%2FlHMfX298DoEpJ1SKSP2iLdIIvtSoZNn07XNim5eGP8gdExSt1Pb1hmhef7h1%2BCh8tIkrtwfglifovVmsux%2FQFlyfAZV9Nd6UWN0CEj28EEWcCMrl74KN7oCun4TLBnFa0rTdPWWYHoJ6b%2BD69mw2diXjX5xC%2FEK7L4G8QxVjDK9r5B%2Fz8%2BSiLv7uXPK78C1GmV%2FasDmCxaqORywWYMBxYYf8GDlp6drXnP7kwjQtG1d3lOLLynUA4zISFxha%2Bu7RFgh6qlfvUzOU%2BQ5Aix1rT0OLgV1FtQkDCotsHABjqkAdaN3shhB19PuV6bMU%2Bqa75ByKQmau5wJr1J5Nzhlh9ty%2FYNgYPb2Pe3dcKPsJsyOHtcR70pEFaUHD7gKS8jZsZ1gimgFRT9qLJh4k18zEx1Fp0zob5hYNsBzW81OzmabSYzr7X%2B4GLsYbPzcl%2BwdT5Rv9koWdtzf%2FObvc6CHlInUomT9gFFIW%2F8Uk3p9KLlhtRZegdRQEGHYPu7V28nZhVnwH%2Fl&X-Amz-Signature=be30cad25fde6e2159d940c90b40ee3b254a4faf140ac943604de22ae72af383&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFAFD6O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPolfJHL9Drrl7zzJ74J%2FhEaixQ%2FSosFiyRmv0LclwiAIhAOfexWYKJqdwTql5Tv4HrrH%2BfgLPUGkbS7jsmDOEC9f%2FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXO9uZ%2BlSH%2By6aCOYq3AOd6uIT98sax%2FpSePahE3Kb5BarjDawQeKhTkq7pyFmE%2FzKEJObnhSdwUJsWys22mkYtpbWt7p3eAlVPzMhKqf%2Bzyoqa%2Bmkjc0%2Bkg6DwByD2kEawBEw8ZEl5jnN%2BneaT3gmJJ7iokelk4GOYkH2Tr6rlYm6RlRsvfoffb0gpwv2yOx7Twhw8%2BTwT7UBGMzKew0XgJR48p5DsAnKw4V6g9AJMfZwnXODPAa7ulugnXkdnmIG4d3th2%2BA0TYqHx15oYga%2FNNykrMlZ9uZHO7M%2BpiMgJ%2BIb6Op4DjtWVqvg239KsKReyqY%2BSBPVY4%2FvMi%2FPdom5X%2B8nHOXggSBpLhx1GILMzCJd%2FlHMfX298DoEpJ1SKSP2iLdIIvtSoZNn07XNim5eGP8gdExSt1Pb1hmhef7h1%2BCh8tIkrtwfglifovVmsux%2FQFlyfAZV9Nd6UWN0CEj28EEWcCMrl74KN7oCun4TLBnFa0rTdPWWYHoJ6b%2BD69mw2diXjX5xC%2FEK7L4G8QxVjDK9r5B%2Fz8%2BSiLv7uXPK78C1GmV%2FasDmCxaqORywWYMBxYYf8GDlp6drXnP7kwjQtG1d3lOLLynUA4zISFxha%2Bu7RFgh6qlfvUzOU%2BQ5Aix1rT0OLgV1FtQkDCotsHABjqkAdaN3shhB19PuV6bMU%2Bqa75ByKQmau5wJr1J5Nzhlh9ty%2FYNgYPb2Pe3dcKPsJsyOHtcR70pEFaUHD7gKS8jZsZ1gimgFRT9qLJh4k18zEx1Fp0zob5hYNsBzW81OzmabSYzr7X%2B4GLsYbPzcl%2BwdT5Rv9koWdtzf%2FObvc6CHlInUomT9gFFIW%2F8Uk3p9KLlhtRZegdRQEGHYPu7V28nZhVnwH%2Fl&X-Amz-Signature=9a542644dcabeb5040653e77015336b8399ba82331dfba97229163c0c19258f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
