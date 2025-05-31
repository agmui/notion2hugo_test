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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637T7WGXS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb1RLRIC2kIe81aM65BZ%2BfixEtf77LS7bbk5IQHn4JhAiBD5G2Vanviy%2B0uwXk2qj9NcTPkfBcHgQ5vS%2F5UAkEWRiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdraptMrQIa82IhbLKtwDx9nZhEHv3jnslZa0MsqdXXAHuBQNa4w%2BabKgox7N8CcU3shpX55DUqzfPFVi5Jy%2FNSwEOKmHP7ccZarijGpNS6VWyZqKSENydXda2C88paKkRhd91CePezW%2FcipN1aD87naMEZ4pwgrqfBYvhKPYphuAjC8XNhQ0iBvX%2FLRfoGDOZ4ywE%2FaNXmmfOVA9AR0Fsi6zG2B7%2FBjUglNNxthvaYU%2Bw3aW14WLN6XCwcpJOVa4Kbom%2FQt9girWmRAAyPEYE8HX%2FR6RPwEuqR8UxJCBzwugcLHCAdqo2SssI%2Fx9cLYITmNxun9S62trRO%2BMw7MsDrDZoXgDxZD1LQB0h9StweaZp51C2Tvhe%2FnXm5hceB11yuDxQrSFYsCb%2Fv9%2Bu4ZqdHWQbgEtXyJuHIJAXV6ngp1e3HUWeBizalfvLfeiipjxq5MSVlPejPg5MXxfS%2Bf3oJQUAnpg1VyBzsW%2BioL5T9XuBHck5jTt%2FrZQNtIR%2FxiJd8xihg8CuC%2BwAIRKQ%2FLYF5fdSMQZ3cPvzymUaGh32SZif6RqvYJNwXppGBlOjxH3FZSaBxwz%2BY50iiLlrkBFArD02AIGYp%2FmgKfavk3%2B%2BD9PyCfo5KeucHHCuN7bEjip5FNFP14HAL1pJHwwreXpwQY6pgHhTcJkiCI197oAf79dnGh69adyX0uQY%2FiMTJiieIDnNWp%2FuojydBy7liUYMj4ER50mLbguzbEFkHxe3hBm%2BTgA52j0deFk9p8XJpezA2jxey2RFmStJjIrD0en7sseIOYkOSpZVA2iGQwKFAN0ZmFlVqNJ2cce%2FLhrCkJrx0h63AZ9WZsvNitkdU%2FDaAMxyvMEwAHKdmBBpGXGp2WB9dD8BgAOJ49N&X-Amz-Signature=28ee5cf16ca4ae151af32115f3cceae8f7f078dc2ce77b9c9bcffb3cde2a74b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637T7WGXS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb1RLRIC2kIe81aM65BZ%2BfixEtf77LS7bbk5IQHn4JhAiBD5G2Vanviy%2B0uwXk2qj9NcTPkfBcHgQ5vS%2F5UAkEWRiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdraptMrQIa82IhbLKtwDx9nZhEHv3jnslZa0MsqdXXAHuBQNa4w%2BabKgox7N8CcU3shpX55DUqzfPFVi5Jy%2FNSwEOKmHP7ccZarijGpNS6VWyZqKSENydXda2C88paKkRhd91CePezW%2FcipN1aD87naMEZ4pwgrqfBYvhKPYphuAjC8XNhQ0iBvX%2FLRfoGDOZ4ywE%2FaNXmmfOVA9AR0Fsi6zG2B7%2FBjUglNNxthvaYU%2Bw3aW14WLN6XCwcpJOVa4Kbom%2FQt9girWmRAAyPEYE8HX%2FR6RPwEuqR8UxJCBzwugcLHCAdqo2SssI%2Fx9cLYITmNxun9S62trRO%2BMw7MsDrDZoXgDxZD1LQB0h9StweaZp51C2Tvhe%2FnXm5hceB11yuDxQrSFYsCb%2Fv9%2Bu4ZqdHWQbgEtXyJuHIJAXV6ngp1e3HUWeBizalfvLfeiipjxq5MSVlPejPg5MXxfS%2Bf3oJQUAnpg1VyBzsW%2BioL5T9XuBHck5jTt%2FrZQNtIR%2FxiJd8xihg8CuC%2BwAIRKQ%2FLYF5fdSMQZ3cPvzymUaGh32SZif6RqvYJNwXppGBlOjxH3FZSaBxwz%2BY50iiLlrkBFArD02AIGYp%2FmgKfavk3%2B%2BD9PyCfo5KeucHHCuN7bEjip5FNFP14HAL1pJHwwreXpwQY6pgHhTcJkiCI197oAf79dnGh69adyX0uQY%2FiMTJiieIDnNWp%2FuojydBy7liUYMj4ER50mLbguzbEFkHxe3hBm%2BTgA52j0deFk9p8XJpezA2jxey2RFmStJjIrD0en7sseIOYkOSpZVA2iGQwKFAN0ZmFlVqNJ2cce%2FLhrCkJrx0h63AZ9WZsvNitkdU%2FDaAMxyvMEwAHKdmBBpGXGp2WB9dD8BgAOJ49N&X-Amz-Signature=7e6effc46cf3b1b3afe3fcd48417a8ca10d2368996fe85dced32aa8b46306d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637T7WGXS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb1RLRIC2kIe81aM65BZ%2BfixEtf77LS7bbk5IQHn4JhAiBD5G2Vanviy%2B0uwXk2qj9NcTPkfBcHgQ5vS%2F5UAkEWRiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdraptMrQIa82IhbLKtwDx9nZhEHv3jnslZa0MsqdXXAHuBQNa4w%2BabKgox7N8CcU3shpX55DUqzfPFVi5Jy%2FNSwEOKmHP7ccZarijGpNS6VWyZqKSENydXda2C88paKkRhd91CePezW%2FcipN1aD87naMEZ4pwgrqfBYvhKPYphuAjC8XNhQ0iBvX%2FLRfoGDOZ4ywE%2FaNXmmfOVA9AR0Fsi6zG2B7%2FBjUglNNxthvaYU%2Bw3aW14WLN6XCwcpJOVa4Kbom%2FQt9girWmRAAyPEYE8HX%2FR6RPwEuqR8UxJCBzwugcLHCAdqo2SssI%2Fx9cLYITmNxun9S62trRO%2BMw7MsDrDZoXgDxZD1LQB0h9StweaZp51C2Tvhe%2FnXm5hceB11yuDxQrSFYsCb%2Fv9%2Bu4ZqdHWQbgEtXyJuHIJAXV6ngp1e3HUWeBizalfvLfeiipjxq5MSVlPejPg5MXxfS%2Bf3oJQUAnpg1VyBzsW%2BioL5T9XuBHck5jTt%2FrZQNtIR%2FxiJd8xihg8CuC%2BwAIRKQ%2FLYF5fdSMQZ3cPvzymUaGh32SZif6RqvYJNwXppGBlOjxH3FZSaBxwz%2BY50iiLlrkBFArD02AIGYp%2FmgKfavk3%2B%2BD9PyCfo5KeucHHCuN7bEjip5FNFP14HAL1pJHwwreXpwQY6pgHhTcJkiCI197oAf79dnGh69adyX0uQY%2FiMTJiieIDnNWp%2FuojydBy7liUYMj4ER50mLbguzbEFkHxe3hBm%2BTgA52j0deFk9p8XJpezA2jxey2RFmStJjIrD0en7sseIOYkOSpZVA2iGQwKFAN0ZmFlVqNJ2cce%2FLhrCkJrx0h63AZ9WZsvNitkdU%2FDaAMxyvMEwAHKdmBBpGXGp2WB9dD8BgAOJ49N&X-Amz-Signature=b8d792f16f8bb2aab9bf3e1faf4b1724fb803745de0da8f70d41887b0eef23f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
