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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425TY32G%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEHKXy54pOBKLJy%2FjlPRk6Bg5k6NEHoleDx4bo7WmdIYAiA054IOM6vg0WQSyprzrh5M10EQxQgykPDHGqXxUh8RliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JUC3k7HD%2BivkgZ0KtwDixgObE7FDQAsattDwZDubGe8Mvvq%2FR1pKzYe78jlCuzcYoxGb0ACIlEcei4zPzJ8U4IaFG0LTcdtVnrWlK5UrkLgLWpcS8jlWdld%2BNFJ%2BesVWbsdBTPkMhv%2BDNvlHjN8I%2FoRqxv9Zz%2FCaiwdjsQbYRpkDmG232F1vXelA64TK8%2F%2FHux64sVu7jTWwiYy5%2Be84DJZx3L862DJx67gUUudCgGKj3RY5cHQBQn5JDyANJGgQ4VVarPmVI5wNvN0wvN9kIWpkYg4JbJzpS7Tw4sz05x6c2wSbaBu57cGb9kgU9p0K90EXxgFc8KZI%2B9ckop6MpYgYoibjeww7PSaxPnVWd%2BliMFAy0Uo%2F%2FKlhp9K4aGQ1tOMQ2LSGmxzo8hQmgcGbGTb4yegS3qJ1xj4FysWiI9hwxHQNJTS1jLZTj%2F1HYHTSKwB%2FvPrBUeNoxKkPt1dc1zFcT8ucupsKTSlUKe9NhjFmSBcqcUZGAFK5kC6f9ElUbtGS4wZHBrV3criLE9r80wdweHfRtcLVYbaNGCF9TFJeTknty%2FWxrMiNkVc%2FHmY6SmAHM7W9kgvWZfGnvh6UJRtH%2BVfsn2owOMFTgyGcAX0yEw7ZmnTRUO9UHlrpGEahDx%2BQ2MsMyegR%2Bkwns3%2FvgY6pgGA6t12RsTu9baeb9qJWcMe4g%2BzJ7FehmKtlumVbm7HXEuVWNYNKH2yJbiM3z6ujpS%2Bjd7qVpP7n8dpeYhOdSTDYj5CVPEzaS%2BhF7jD3Rop9Tiw3p%2Fav4NBHEdVZan9jU9BwtoVEQEK7wGqAlZoltmFZIoHnzV445T%2FD2FaxkWTymK1HHNdCRF6DHwCvrfb61UtfVtx4dQdHA5814%2BjcbzpIXU4ryvQ&X-Amz-Signature=465de26b4b5642cf6a907be69d44fe59255d710d086d43cd50da9a66cc247a42&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425TY32G%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEHKXy54pOBKLJy%2FjlPRk6Bg5k6NEHoleDx4bo7WmdIYAiA054IOM6vg0WQSyprzrh5M10EQxQgykPDHGqXxUh8RliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JUC3k7HD%2BivkgZ0KtwDixgObE7FDQAsattDwZDubGe8Mvvq%2FR1pKzYe78jlCuzcYoxGb0ACIlEcei4zPzJ8U4IaFG0LTcdtVnrWlK5UrkLgLWpcS8jlWdld%2BNFJ%2BesVWbsdBTPkMhv%2BDNvlHjN8I%2FoRqxv9Zz%2FCaiwdjsQbYRpkDmG232F1vXelA64TK8%2F%2FHux64sVu7jTWwiYy5%2Be84DJZx3L862DJx67gUUudCgGKj3RY5cHQBQn5JDyANJGgQ4VVarPmVI5wNvN0wvN9kIWpkYg4JbJzpS7Tw4sz05x6c2wSbaBu57cGb9kgU9p0K90EXxgFc8KZI%2B9ckop6MpYgYoibjeww7PSaxPnVWd%2BliMFAy0Uo%2F%2FKlhp9K4aGQ1tOMQ2LSGmxzo8hQmgcGbGTb4yegS3qJ1xj4FysWiI9hwxHQNJTS1jLZTj%2F1HYHTSKwB%2FvPrBUeNoxKkPt1dc1zFcT8ucupsKTSlUKe9NhjFmSBcqcUZGAFK5kC6f9ElUbtGS4wZHBrV3criLE9r80wdweHfRtcLVYbaNGCF9TFJeTknty%2FWxrMiNkVc%2FHmY6SmAHM7W9kgvWZfGnvh6UJRtH%2BVfsn2owOMFTgyGcAX0yEw7ZmnTRUO9UHlrpGEahDx%2BQ2MsMyegR%2Bkwns3%2FvgY6pgGA6t12RsTu9baeb9qJWcMe4g%2BzJ7FehmKtlumVbm7HXEuVWNYNKH2yJbiM3z6ujpS%2Bjd7qVpP7n8dpeYhOdSTDYj5CVPEzaS%2BhF7jD3Rop9Tiw3p%2Fav4NBHEdVZan9jU9BwtoVEQEK7wGqAlZoltmFZIoHnzV445T%2FD2FaxkWTymK1HHNdCRF6DHwCvrfb61UtfVtx4dQdHA5814%2BjcbzpIXU4ryvQ&X-Amz-Signature=e8b9a10867286413e013d4800ab8fd52b35fdff286a38a80786369b4c1c61736&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425TY32G%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEHKXy54pOBKLJy%2FjlPRk6Bg5k6NEHoleDx4bo7WmdIYAiA054IOM6vg0WQSyprzrh5M10EQxQgykPDHGqXxUh8RliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JUC3k7HD%2BivkgZ0KtwDixgObE7FDQAsattDwZDubGe8Mvvq%2FR1pKzYe78jlCuzcYoxGb0ACIlEcei4zPzJ8U4IaFG0LTcdtVnrWlK5UrkLgLWpcS8jlWdld%2BNFJ%2BesVWbsdBTPkMhv%2BDNvlHjN8I%2FoRqxv9Zz%2FCaiwdjsQbYRpkDmG232F1vXelA64TK8%2F%2FHux64sVu7jTWwiYy5%2Be84DJZx3L862DJx67gUUudCgGKj3RY5cHQBQn5JDyANJGgQ4VVarPmVI5wNvN0wvN9kIWpkYg4JbJzpS7Tw4sz05x6c2wSbaBu57cGb9kgU9p0K90EXxgFc8KZI%2B9ckop6MpYgYoibjeww7PSaxPnVWd%2BliMFAy0Uo%2F%2FKlhp9K4aGQ1tOMQ2LSGmxzo8hQmgcGbGTb4yegS3qJ1xj4FysWiI9hwxHQNJTS1jLZTj%2F1HYHTSKwB%2FvPrBUeNoxKkPt1dc1zFcT8ucupsKTSlUKe9NhjFmSBcqcUZGAFK5kC6f9ElUbtGS4wZHBrV3criLE9r80wdweHfRtcLVYbaNGCF9TFJeTknty%2FWxrMiNkVc%2FHmY6SmAHM7W9kgvWZfGnvh6UJRtH%2BVfsn2owOMFTgyGcAX0yEw7ZmnTRUO9UHlrpGEahDx%2BQ2MsMyegR%2Bkwns3%2FvgY6pgGA6t12RsTu9baeb9qJWcMe4g%2BzJ7FehmKtlumVbm7HXEuVWNYNKH2yJbiM3z6ujpS%2Bjd7qVpP7n8dpeYhOdSTDYj5CVPEzaS%2BhF7jD3Rop9Tiw3p%2Fav4NBHEdVZan9jU9BwtoVEQEK7wGqAlZoltmFZIoHnzV445T%2FD2FaxkWTymK1HHNdCRF6DHwCvrfb61UtfVtx4dQdHA5814%2BjcbzpIXU4ryvQ&X-Amz-Signature=20edc498eb98893557861cc5653e6348035bba1ac8dbdbee1ef33eac50ea9b89&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
