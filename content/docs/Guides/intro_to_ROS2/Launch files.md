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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZVGPQVP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQCdP5DbdF2TtI1OpTK%2FRLQMokmZl7BcU7SNuiJkO%2F9AiEA8GsRsQS5Wcw6KsbnVh8K%2Fzw8xfzWBLIY8ozZeQNVq9Eq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5HZDTx2sQ3BieO6yrcAyK%2Bxf0JSed9rj%2BILdGh2fu53FDVv%2FJwymkt7PhJKbL3iFehTvKJg41APwSw8yRPysRzmyBrgIkxU2zpZ5MR7XG0mktXHjiy8eBdAAvkAawj2sE3PTK8dkqTN%2FZNs%2BmeqeY4BjaesUZ99D5g7F2DTkveKx4EPisqiWOaqEEpEQxbvxD%2BgYH%2FD8ObcOsW6tPMlimW7TsBoz4EETGr0UKhhXHQ95wom26cysyPOMlNwILzdp2xXmvqEz6YsGHk2XZOmq9x%2Fce%2FAvkJ0O0HRfj6oidovkJsBMQCJ2k%2FWxkCb8ymPy0Es4cfjGxIw4TKaj5wDFwKASu3lmjXjwtJPuj%2FrL6UPdX5Fyhzmqb36yXMwetYdKvShUVOIL9GysGsygXLIBnRijML8gouFhrixNR4dpvwYU5K5xaKdKg1bU%2FmJe%2FxCpKHIF3dClYjlEZPB2FJHaPrTq5DwCaZFuO4M7At%2FkHDSuMr0uzZWupQzZg%2FjGYdPVaz8BZUSnpm29r%2BpJH0LcFTHoRbRUv1Rz%2Btd8N6W2qFtWFR2Pnq%2BtPXewDbGoT1huGadtvT4RLd99c5pjMXQXJS0cOHnv%2Bv%2FX3Q4QGAXj9PxYdBtOy4%2B5%2B%2FH52vHvmtFipwGmwMbeYIkkCKMKur474GOqUBHC4v2XIgYXMqZBnaaK8YXNGqz1Bbq50kjmMr0yBYZ29Pr5qX6k5frpWnn8THn96QuccC9xfxTLzYrQgj6h9Du8QqFZQU8rAbQ%2B8agU36LiudUw2Mi0ojDNPl%2FJes66SLeAY%2FcdMwn4HIhfGKU5GO1vj%2B6IVEZfAtlz4OYNFBIVKDrj56cIZ9feL5mlBcfPB0rRwin8haN15NxwcVxQJfkSTmMbkW&X-Amz-Signature=f65d2b7e5b69954bf79ddc05b52680afe1aada2de4ffa0f6dc036cf82de11965&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZVGPQVP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQCdP5DbdF2TtI1OpTK%2FRLQMokmZl7BcU7SNuiJkO%2F9AiEA8GsRsQS5Wcw6KsbnVh8K%2Fzw8xfzWBLIY8ozZeQNVq9Eq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5HZDTx2sQ3BieO6yrcAyK%2Bxf0JSed9rj%2BILdGh2fu53FDVv%2FJwymkt7PhJKbL3iFehTvKJg41APwSw8yRPysRzmyBrgIkxU2zpZ5MR7XG0mktXHjiy8eBdAAvkAawj2sE3PTK8dkqTN%2FZNs%2BmeqeY4BjaesUZ99D5g7F2DTkveKx4EPisqiWOaqEEpEQxbvxD%2BgYH%2FD8ObcOsW6tPMlimW7TsBoz4EETGr0UKhhXHQ95wom26cysyPOMlNwILzdp2xXmvqEz6YsGHk2XZOmq9x%2Fce%2FAvkJ0O0HRfj6oidovkJsBMQCJ2k%2FWxkCb8ymPy0Es4cfjGxIw4TKaj5wDFwKASu3lmjXjwtJPuj%2FrL6UPdX5Fyhzmqb36yXMwetYdKvShUVOIL9GysGsygXLIBnRijML8gouFhrixNR4dpvwYU5K5xaKdKg1bU%2FmJe%2FxCpKHIF3dClYjlEZPB2FJHaPrTq5DwCaZFuO4M7At%2FkHDSuMr0uzZWupQzZg%2FjGYdPVaz8BZUSnpm29r%2BpJH0LcFTHoRbRUv1Rz%2Btd8N6W2qFtWFR2Pnq%2BtPXewDbGoT1huGadtvT4RLd99c5pjMXQXJS0cOHnv%2Bv%2FX3Q4QGAXj9PxYdBtOy4%2B5%2B%2FH52vHvmtFipwGmwMbeYIkkCKMKur474GOqUBHC4v2XIgYXMqZBnaaK8YXNGqz1Bbq50kjmMr0yBYZ29Pr5qX6k5frpWnn8THn96QuccC9xfxTLzYrQgj6h9Du8QqFZQU8rAbQ%2B8agU36LiudUw2Mi0ojDNPl%2FJes66SLeAY%2FcdMwn4HIhfGKU5GO1vj%2B6IVEZfAtlz4OYNFBIVKDrj56cIZ9feL5mlBcfPB0rRwin8haN15NxwcVxQJfkSTmMbkW&X-Amz-Signature=1a882369863772f29981d86d08c4e6bf23562bb6d2f50d017cc4e3cfec683230&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZVGPQVP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQCdP5DbdF2TtI1OpTK%2FRLQMokmZl7BcU7SNuiJkO%2F9AiEA8GsRsQS5Wcw6KsbnVh8K%2Fzw8xfzWBLIY8ozZeQNVq9Eq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5HZDTx2sQ3BieO6yrcAyK%2Bxf0JSed9rj%2BILdGh2fu53FDVv%2FJwymkt7PhJKbL3iFehTvKJg41APwSw8yRPysRzmyBrgIkxU2zpZ5MR7XG0mktXHjiy8eBdAAvkAawj2sE3PTK8dkqTN%2FZNs%2BmeqeY4BjaesUZ99D5g7F2DTkveKx4EPisqiWOaqEEpEQxbvxD%2BgYH%2FD8ObcOsW6tPMlimW7TsBoz4EETGr0UKhhXHQ95wom26cysyPOMlNwILzdp2xXmvqEz6YsGHk2XZOmq9x%2Fce%2FAvkJ0O0HRfj6oidovkJsBMQCJ2k%2FWxkCb8ymPy0Es4cfjGxIw4TKaj5wDFwKASu3lmjXjwtJPuj%2FrL6UPdX5Fyhzmqb36yXMwetYdKvShUVOIL9GysGsygXLIBnRijML8gouFhrixNR4dpvwYU5K5xaKdKg1bU%2FmJe%2FxCpKHIF3dClYjlEZPB2FJHaPrTq5DwCaZFuO4M7At%2FkHDSuMr0uzZWupQzZg%2FjGYdPVaz8BZUSnpm29r%2BpJH0LcFTHoRbRUv1Rz%2Btd8N6W2qFtWFR2Pnq%2BtPXewDbGoT1huGadtvT4RLd99c5pjMXQXJS0cOHnv%2Bv%2FX3Q4QGAXj9PxYdBtOy4%2B5%2B%2FH52vHvmtFipwGmwMbeYIkkCKMKur474GOqUBHC4v2XIgYXMqZBnaaK8YXNGqz1Bbq50kjmMr0yBYZ29Pr5qX6k5frpWnn8THn96QuccC9xfxTLzYrQgj6h9Du8QqFZQU8rAbQ%2B8agU36LiudUw2Mi0ojDNPl%2FJes66SLeAY%2FcdMwn4HIhfGKU5GO1vj%2B6IVEZfAtlz4OYNFBIVKDrj56cIZ9feL5mlBcfPB0rRwin8haN15NxwcVxQJfkSTmMbkW&X-Amz-Signature=a3c355bf8441df678c50e04c070821c7cc7cd0d6cedfd4aae844bdc3899f254e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
