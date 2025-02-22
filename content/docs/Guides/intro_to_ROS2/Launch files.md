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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AO6NK57%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHuWL2sZDYp6BG%2FL4KUto1g%2BAI%2FcTfHsKk5ds%2Fbx7VOAiAGF56orJ8fDbJTjUvu%2BusyBEnjycYoAAtj4Ijl9Fo0hCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMllpVcW0nhVcWlTaWKtwDDKAEewxARL0e2GLZpBvnwHEwbw9wGBwMKpkK5CajhE%2BeKvQJkfrbS%2BYJYupZMiVJKK5FeuYcNmUg1fnsW7c%2Be4kIrvTGg9y3KfXJzM%2BTUF71iOpzcrOti5kGVDUo%2FkyWyCE%2BOKIvvyU8qJI5n%2BThkvku5W9z3xfK4Hr7ivZfY%2FfebnQRwGbipdLZqV%2BOb0KZYj1Ye%2FINvd8oSoN0PkBcOsMhcgn1bWKY8YbC49bJNxyUH6miAxszhSXuoDja%2B%2B%2FGOs%2B9B4lKZTwmoxZRRu3V9mx%2BwCUuDruTdIenRULVRUFFzlF3KmGCp9jcK7tbfWIAGhT9m2ciTFUzw8FaDWgeqVXJiDynp5IL%2BBwAq%2B5Udp%2FiQe26gjG4gCQqHyX6%2BDghQMvIddLN%2FMWZ05VBB0zasxNov449O4%2B8ifNjSIsD0XymPHVgl8Xgwuf1HwNVaVrpqGpzp7k7xt%2F4FdF5CzYp6Q%2FNjWsuPjB60xI8MuF76AALso%2BCxeA7vfRVlxX6pGU9nlI%2FXtYdZrcHhTnzKif4p%2F%2FBbgDefjqbzZHpi4CkyWFL9JZtEVORIxkRajeoeAmEN%2FzK%2F7wPyer3NNFJI5EGBlBgHDcZqdYIPvY9%2BKh16x%2FNoKHZ5f%2F0A0JlvyMwx4fovQY6pgHUnM6a2K5xatTLbGZFdAshgbDFAF3BbRwnoLIHYyQwepZay0Lhyp429m9tm6auiMnKzpMXBVj822sOu2j6WXlacqV11giB%2BG6Vt6BISZHQWmeXmHvFz0a4Mqdnqa19t5vJDCvXJqHDLxdYiEfsx1IncrZtpceWkde5aOkIga2LQs8FZNhHOuBK9fsWCfPvPgAZC74%2F3NVob2ZFw6YlOlx6xZ6HUs5C&X-Amz-Signature=7b7bbac70805f4a29e1bb81b8f2cd76c7e70a80b808d7301a37c1b02d665d5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AO6NK57%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHuWL2sZDYp6BG%2FL4KUto1g%2BAI%2FcTfHsKk5ds%2Fbx7VOAiAGF56orJ8fDbJTjUvu%2BusyBEnjycYoAAtj4Ijl9Fo0hCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMllpVcW0nhVcWlTaWKtwDDKAEewxARL0e2GLZpBvnwHEwbw9wGBwMKpkK5CajhE%2BeKvQJkfrbS%2BYJYupZMiVJKK5FeuYcNmUg1fnsW7c%2Be4kIrvTGg9y3KfXJzM%2BTUF71iOpzcrOti5kGVDUo%2FkyWyCE%2BOKIvvyU8qJI5n%2BThkvku5W9z3xfK4Hr7ivZfY%2FfebnQRwGbipdLZqV%2BOb0KZYj1Ye%2FINvd8oSoN0PkBcOsMhcgn1bWKY8YbC49bJNxyUH6miAxszhSXuoDja%2B%2B%2FGOs%2B9B4lKZTwmoxZRRu3V9mx%2BwCUuDruTdIenRULVRUFFzlF3KmGCp9jcK7tbfWIAGhT9m2ciTFUzw8FaDWgeqVXJiDynp5IL%2BBwAq%2B5Udp%2FiQe26gjG4gCQqHyX6%2BDghQMvIddLN%2FMWZ05VBB0zasxNov449O4%2B8ifNjSIsD0XymPHVgl8Xgwuf1HwNVaVrpqGpzp7k7xt%2F4FdF5CzYp6Q%2FNjWsuPjB60xI8MuF76AALso%2BCxeA7vfRVlxX6pGU9nlI%2FXtYdZrcHhTnzKif4p%2F%2FBbgDefjqbzZHpi4CkyWFL9JZtEVORIxkRajeoeAmEN%2FzK%2F7wPyer3NNFJI5EGBlBgHDcZqdYIPvY9%2BKh16x%2FNoKHZ5f%2F0A0JlvyMwx4fovQY6pgHUnM6a2K5xatTLbGZFdAshgbDFAF3BbRwnoLIHYyQwepZay0Lhyp429m9tm6auiMnKzpMXBVj822sOu2j6WXlacqV11giB%2BG6Vt6BISZHQWmeXmHvFz0a4Mqdnqa19t5vJDCvXJqHDLxdYiEfsx1IncrZtpceWkde5aOkIga2LQs8FZNhHOuBK9fsWCfPvPgAZC74%2F3NVob2ZFw6YlOlx6xZ6HUs5C&X-Amz-Signature=f06e60318c58841b895b8bfb0525b1198c7648070fd16f40b59764fa33d792b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AO6NK57%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHuWL2sZDYp6BG%2FL4KUto1g%2BAI%2FcTfHsKk5ds%2Fbx7VOAiAGF56orJ8fDbJTjUvu%2BusyBEnjycYoAAtj4Ijl9Fo0hCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMllpVcW0nhVcWlTaWKtwDDKAEewxARL0e2GLZpBvnwHEwbw9wGBwMKpkK5CajhE%2BeKvQJkfrbS%2BYJYupZMiVJKK5FeuYcNmUg1fnsW7c%2Be4kIrvTGg9y3KfXJzM%2BTUF71iOpzcrOti5kGVDUo%2FkyWyCE%2BOKIvvyU8qJI5n%2BThkvku5W9z3xfK4Hr7ivZfY%2FfebnQRwGbipdLZqV%2BOb0KZYj1Ye%2FINvd8oSoN0PkBcOsMhcgn1bWKY8YbC49bJNxyUH6miAxszhSXuoDja%2B%2B%2FGOs%2B9B4lKZTwmoxZRRu3V9mx%2BwCUuDruTdIenRULVRUFFzlF3KmGCp9jcK7tbfWIAGhT9m2ciTFUzw8FaDWgeqVXJiDynp5IL%2BBwAq%2B5Udp%2FiQe26gjG4gCQqHyX6%2BDghQMvIddLN%2FMWZ05VBB0zasxNov449O4%2B8ifNjSIsD0XymPHVgl8Xgwuf1HwNVaVrpqGpzp7k7xt%2F4FdF5CzYp6Q%2FNjWsuPjB60xI8MuF76AALso%2BCxeA7vfRVlxX6pGU9nlI%2FXtYdZrcHhTnzKif4p%2F%2FBbgDefjqbzZHpi4CkyWFL9JZtEVORIxkRajeoeAmEN%2FzK%2F7wPyer3NNFJI5EGBlBgHDcZqdYIPvY9%2BKh16x%2FNoKHZ5f%2F0A0JlvyMwx4fovQY6pgHUnM6a2K5xatTLbGZFdAshgbDFAF3BbRwnoLIHYyQwepZay0Lhyp429m9tm6auiMnKzpMXBVj822sOu2j6WXlacqV11giB%2BG6Vt6BISZHQWmeXmHvFz0a4Mqdnqa19t5vJDCvXJqHDLxdYiEfsx1IncrZtpceWkde5aOkIga2LQs8FZNhHOuBK9fsWCfPvPgAZC74%2F3NVob2ZFw6YlOlx6xZ6HUs5C&X-Amz-Signature=c14353c6ce200cc67bd159bb6541633ba63798099d7f4be73afdace6ca356866&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
