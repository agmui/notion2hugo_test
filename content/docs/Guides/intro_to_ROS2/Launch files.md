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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q42K7UJE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARQ5TPgjfw0SFiD0OkMMU9cx5HPPYESwUhS4dwwwV40AiBgCJA%2BJ6pYF9iLyG5hUVKo57BdJUmjinA19m2x%2BbiHSCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3QTzJFz3APRLURVhKtwDXcF7nwiDxGU2y9TKANaIu9E7Yif5EkAy%2FEJjDYP%2B5%2F09HfUOXewW%2Bt4Vy%2FW6Xamgu1RiAwAqKOjUNXi0UNjIDAY02SqciveIk4vfadbhcrdqrWc6hNLTjKz7P0wzXdyillWp7%2BIYsRiOGJJTOu4QGjHFwYXu4jqeX%2FMal7raC4fHFafGdTU1gSfLq0ehWqqNY4bLcKRbaGsKqoVqV7Ka4a%2F2ggn%2BsIdKI9CN8Lje3gpZeadGOVMDBxa7TUCr9S%2FcTxkxq2FVpCp116Va02NUlK17lPPsiCJb6wV1xmU0Vxeg6nmTi5qRKA6SE80Yotf8fJ2PP0LB%2FA%2F3ZWx1fHEKuAL%2BwNQaeppogKqSkM8pHNhCtQwV8FQfz5Npv%2F1L49GufvG5dkopWLzCAfUOZlVaZuuDqZ4jz25P9ADutVybbAt37nmoY2njfDkjtJj8ZpLl426WTyCFntPOfxM8QyfOHtWmLGAfX37Ou1TbKbVjoKmGCSsrsX25H85UwwTyPZuNigxDPDHum6tzRwLUuUomINIJMhq9Ocg4mcralrXSxwHHBfpnZu8WO89hy4OX4mWJKYMGP5xj71MiYuQTm9xafc5J33kZo9xjBNDeymOGuLQiyRtIEn7HE%2FLno%2BYwzvi%2FwwY6pgE35ugzr%2F3WyfuLZAoJh6fVbbCKwESpusFj3GSBl8kdNh8PBWYOCFnMmdZSCcgVQs6cbYS1XvhTJQiQ69bdNW7NKGOcGtdMDKrAtRBpCBZG6LvbssTYDbboFqQlvmYWnxWMguE%2Fi%2FfO3vG4bwQvi6Csd4s07TusMTXiDkTw3utvHNa2teaLmQHyK6tMliZw1y5r%2F8HZfjEiDF%2FKaZuuwS4i7SgPS4AA&X-Amz-Signature=55cd810508aef1578b1cc4a748c72c01aea795b785dd6a2d3693a4cc26b08ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q42K7UJE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARQ5TPgjfw0SFiD0OkMMU9cx5HPPYESwUhS4dwwwV40AiBgCJA%2BJ6pYF9iLyG5hUVKo57BdJUmjinA19m2x%2BbiHSCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3QTzJFz3APRLURVhKtwDXcF7nwiDxGU2y9TKANaIu9E7Yif5EkAy%2FEJjDYP%2B5%2F09HfUOXewW%2Bt4Vy%2FW6Xamgu1RiAwAqKOjUNXi0UNjIDAY02SqciveIk4vfadbhcrdqrWc6hNLTjKz7P0wzXdyillWp7%2BIYsRiOGJJTOu4QGjHFwYXu4jqeX%2FMal7raC4fHFafGdTU1gSfLq0ehWqqNY4bLcKRbaGsKqoVqV7Ka4a%2F2ggn%2BsIdKI9CN8Lje3gpZeadGOVMDBxa7TUCr9S%2FcTxkxq2FVpCp116Va02NUlK17lPPsiCJb6wV1xmU0Vxeg6nmTi5qRKA6SE80Yotf8fJ2PP0LB%2FA%2F3ZWx1fHEKuAL%2BwNQaeppogKqSkM8pHNhCtQwV8FQfz5Npv%2F1L49GufvG5dkopWLzCAfUOZlVaZuuDqZ4jz25P9ADutVybbAt37nmoY2njfDkjtJj8ZpLl426WTyCFntPOfxM8QyfOHtWmLGAfX37Ou1TbKbVjoKmGCSsrsX25H85UwwTyPZuNigxDPDHum6tzRwLUuUomINIJMhq9Ocg4mcralrXSxwHHBfpnZu8WO89hy4OX4mWJKYMGP5xj71MiYuQTm9xafc5J33kZo9xjBNDeymOGuLQiyRtIEn7HE%2FLno%2BYwzvi%2FwwY6pgE35ugzr%2F3WyfuLZAoJh6fVbbCKwESpusFj3GSBl8kdNh8PBWYOCFnMmdZSCcgVQs6cbYS1XvhTJQiQ69bdNW7NKGOcGtdMDKrAtRBpCBZG6LvbssTYDbboFqQlvmYWnxWMguE%2Fi%2FfO3vG4bwQvi6Csd4s07TusMTXiDkTw3utvHNa2teaLmQHyK6tMliZw1y5r%2F8HZfjEiDF%2FKaZuuwS4i7SgPS4AA&X-Amz-Signature=fc887940eb4a11d30ecb070e504c0b40301013f419db184c1f03a271adda6e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q42K7UJE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARQ5TPgjfw0SFiD0OkMMU9cx5HPPYESwUhS4dwwwV40AiBgCJA%2BJ6pYF9iLyG5hUVKo57BdJUmjinA19m2x%2BbiHSCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3QTzJFz3APRLURVhKtwDXcF7nwiDxGU2y9TKANaIu9E7Yif5EkAy%2FEJjDYP%2B5%2F09HfUOXewW%2Bt4Vy%2FW6Xamgu1RiAwAqKOjUNXi0UNjIDAY02SqciveIk4vfadbhcrdqrWc6hNLTjKz7P0wzXdyillWp7%2BIYsRiOGJJTOu4QGjHFwYXu4jqeX%2FMal7raC4fHFafGdTU1gSfLq0ehWqqNY4bLcKRbaGsKqoVqV7Ka4a%2F2ggn%2BsIdKI9CN8Lje3gpZeadGOVMDBxa7TUCr9S%2FcTxkxq2FVpCp116Va02NUlK17lPPsiCJb6wV1xmU0Vxeg6nmTi5qRKA6SE80Yotf8fJ2PP0LB%2FA%2F3ZWx1fHEKuAL%2BwNQaeppogKqSkM8pHNhCtQwV8FQfz5Npv%2F1L49GufvG5dkopWLzCAfUOZlVaZuuDqZ4jz25P9ADutVybbAt37nmoY2njfDkjtJj8ZpLl426WTyCFntPOfxM8QyfOHtWmLGAfX37Ou1TbKbVjoKmGCSsrsX25H85UwwTyPZuNigxDPDHum6tzRwLUuUomINIJMhq9Ocg4mcralrXSxwHHBfpnZu8WO89hy4OX4mWJKYMGP5xj71MiYuQTm9xafc5J33kZo9xjBNDeymOGuLQiyRtIEn7HE%2FLno%2BYwzvi%2FwwY6pgE35ugzr%2F3WyfuLZAoJh6fVbbCKwESpusFj3GSBl8kdNh8PBWYOCFnMmdZSCcgVQs6cbYS1XvhTJQiQ69bdNW7NKGOcGtdMDKrAtRBpCBZG6LvbssTYDbboFqQlvmYWnxWMguE%2Fi%2FfO3vG4bwQvi6Csd4s07TusMTXiDkTw3utvHNa2teaLmQHyK6tMliZw1y5r%2F8HZfjEiDF%2FKaZuuwS4i7SgPS4AA&X-Amz-Signature=eb20a7a1278d7e7388874deab0ef2a408e3eec1f27d6f630bda59179aeacd82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
