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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5KFKX6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHd3vr8NfkeSPIIxGebZXcgbDVdSEfaBLfVcVvpcrtXWAiBW4Gg82atMYuECC6H8nFfjL8UrF9din3THA4z5wqglKSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJGghmZzI8udlybIKtwDghxQECstLMIYRB5xC5eql694sGhjUmZrAMkkkRDkUPCoLuElEB2kTIcNL9c5m98ofkgzUt823V53%2B8HQvR%2FjF9BWma3voxTCGmjdWd%2Fe3tMaDCZIcHrYo5YtwLcrwYy0QrkULC4kiYRzgiLICjK7fqE7lcwSmWF8HgiM8YFEKp1OTIlXfWFUma8fAiTS%2BqNJtIJ%2F34gecHkC%2BKla%2BXd%2FVHWf6hg77Rg8cTULoIuqMq8PjQ3pCAhBVOKwCAWAo5cklegB2mQxqMz3GvF%2F0Ub2x2sfyFzC7qx0H3ANYWGbDB6LXhlPn2UX9sXeImmgaX%2BCuF7XTn2%2F0Zo5%2FL%2FEhE5MvoY5nxxKX7okm37LpZ9jqlqhRgKdVEIt%2F%2FkjH4y7%2FNHOZY02%2BdRekHHgMkx4IlknbUa2eNtq%2F%2FHgqkBxpW0A%2BHkfR%2Fm97aA%2Bjdx0y5hkyOu4yeqrT4PQec%2BJI1ETwijlu5H3KZLtZ9fLP%2B%2BYA9lRkOwecIbGz%2FT4paJIaJhp1S%2B7lEyBMN6pVBG8%2FlD7sKsq68nVDOTazro%2F2Xwt9yP9QF5youb9SS%2BAFwSiSrODP07THTVzOER8U7XrGH5xbQ%2FUAhDOTgg710bnMCyW45vROKM8i2zUU4y%2BhnMikL0wouK4vwY6pgF9VbBHxhtVWGopwKm5J0grB7ZA1XEG2FNejKWm0vZb%2FgJ5LCVjwrbHwJ9YGrVJjHKtrlME%2FNqLDGdVzWle%2F9DXnUnIOzuVY5aZvcEaWtPOd5F2dfNi5cXHLsLGJUXpAKh2OGSYMTETUi%2Bm1B4phrqdId8klNzSgbYWu3orMi9sVbqSFewVI6iggFRHxvUTBTsNQRv0fkkH9pkMTnhR9yahV%2BzWNAcl&X-Amz-Signature=08928187e350a368efde46c42270c5bc03a8c39ffc858706d811ea3de55debd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5KFKX6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHd3vr8NfkeSPIIxGebZXcgbDVdSEfaBLfVcVvpcrtXWAiBW4Gg82atMYuECC6H8nFfjL8UrF9din3THA4z5wqglKSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJGghmZzI8udlybIKtwDghxQECstLMIYRB5xC5eql694sGhjUmZrAMkkkRDkUPCoLuElEB2kTIcNL9c5m98ofkgzUt823V53%2B8HQvR%2FjF9BWma3voxTCGmjdWd%2Fe3tMaDCZIcHrYo5YtwLcrwYy0QrkULC4kiYRzgiLICjK7fqE7lcwSmWF8HgiM8YFEKp1OTIlXfWFUma8fAiTS%2BqNJtIJ%2F34gecHkC%2BKla%2BXd%2FVHWf6hg77Rg8cTULoIuqMq8PjQ3pCAhBVOKwCAWAo5cklegB2mQxqMz3GvF%2F0Ub2x2sfyFzC7qx0H3ANYWGbDB6LXhlPn2UX9sXeImmgaX%2BCuF7XTn2%2F0Zo5%2FL%2FEhE5MvoY5nxxKX7okm37LpZ9jqlqhRgKdVEIt%2F%2FkjH4y7%2FNHOZY02%2BdRekHHgMkx4IlknbUa2eNtq%2F%2FHgqkBxpW0A%2BHkfR%2Fm97aA%2Bjdx0y5hkyOu4yeqrT4PQec%2BJI1ETwijlu5H3KZLtZ9fLP%2B%2BYA9lRkOwecIbGz%2FT4paJIaJhp1S%2B7lEyBMN6pVBG8%2FlD7sKsq68nVDOTazro%2F2Xwt9yP9QF5youb9SS%2BAFwSiSrODP07THTVzOER8U7XrGH5xbQ%2FUAhDOTgg710bnMCyW45vROKM8i2zUU4y%2BhnMikL0wouK4vwY6pgF9VbBHxhtVWGopwKm5J0grB7ZA1XEG2FNejKWm0vZb%2FgJ5LCVjwrbHwJ9YGrVJjHKtrlME%2FNqLDGdVzWle%2F9DXnUnIOzuVY5aZvcEaWtPOd5F2dfNi5cXHLsLGJUXpAKh2OGSYMTETUi%2Bm1B4phrqdId8klNzSgbYWu3orMi9sVbqSFewVI6iggFRHxvUTBTsNQRv0fkkH9pkMTnhR9yahV%2BzWNAcl&X-Amz-Signature=1d51298d40cfc992fce45b16c3c5da9782a612b4a4158ad29e644f5f7978862d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5KFKX6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHd3vr8NfkeSPIIxGebZXcgbDVdSEfaBLfVcVvpcrtXWAiBW4Gg82atMYuECC6H8nFfjL8UrF9din3THA4z5wqglKSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJGghmZzI8udlybIKtwDghxQECstLMIYRB5xC5eql694sGhjUmZrAMkkkRDkUPCoLuElEB2kTIcNL9c5m98ofkgzUt823V53%2B8HQvR%2FjF9BWma3voxTCGmjdWd%2Fe3tMaDCZIcHrYo5YtwLcrwYy0QrkULC4kiYRzgiLICjK7fqE7lcwSmWF8HgiM8YFEKp1OTIlXfWFUma8fAiTS%2BqNJtIJ%2F34gecHkC%2BKla%2BXd%2FVHWf6hg77Rg8cTULoIuqMq8PjQ3pCAhBVOKwCAWAo5cklegB2mQxqMz3GvF%2F0Ub2x2sfyFzC7qx0H3ANYWGbDB6LXhlPn2UX9sXeImmgaX%2BCuF7XTn2%2F0Zo5%2FL%2FEhE5MvoY5nxxKX7okm37LpZ9jqlqhRgKdVEIt%2F%2FkjH4y7%2FNHOZY02%2BdRekHHgMkx4IlknbUa2eNtq%2F%2FHgqkBxpW0A%2BHkfR%2Fm97aA%2Bjdx0y5hkyOu4yeqrT4PQec%2BJI1ETwijlu5H3KZLtZ9fLP%2B%2BYA9lRkOwecIbGz%2FT4paJIaJhp1S%2B7lEyBMN6pVBG8%2FlD7sKsq68nVDOTazro%2F2Xwt9yP9QF5youb9SS%2BAFwSiSrODP07THTVzOER8U7XrGH5xbQ%2FUAhDOTgg710bnMCyW45vROKM8i2zUU4y%2BhnMikL0wouK4vwY6pgF9VbBHxhtVWGopwKm5J0grB7ZA1XEG2FNejKWm0vZb%2FgJ5LCVjwrbHwJ9YGrVJjHKtrlME%2FNqLDGdVzWle%2F9DXnUnIOzuVY5aZvcEaWtPOd5F2dfNi5cXHLsLGJUXpAKh2OGSYMTETUi%2Bm1B4phrqdId8klNzSgbYWu3orMi9sVbqSFewVI6iggFRHxvUTBTsNQRv0fkkH9pkMTnhR9yahV%2BzWNAcl&X-Amz-Signature=726c25e0837fa6f223ec73798a23b459572ff1059909382a6ee104dff052f212&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
