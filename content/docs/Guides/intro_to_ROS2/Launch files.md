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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKDB2KA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuWS%2FW9%2FqREguppqztblkMjvzWvkea3FyQN6G%2BoFhaMAiEAot6sZCW9PRST2K20fbcZzg6AgYS5UgzsQaofOWXRe7UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOgDAfbjJGfu9QxMSrcA8oEYhxYb7RHfMc39KK4qRG8EED2852G8OKicwYCRIjVJK9ZJnWJLOnqpEpAgKGI5qIFUs52A9bXRlvfFsRh0ARxTIWmkUmXMx3DCAi8%2F9mjkHpRpkQN0D0dK7jjXDKscY0e35fRPDURIzrB7beGmkcSsr0fcDeXz1mvyqL%2B8c7Wi246dHE8GvtTOvGfz%2BYoAptIBNaLk%2B7tlBUfYFk6cpqSxtif%2FLzCbcB27DlKEAcIo6UW%2F1JFU2%2FZwSrQKttP99trWF7YJCG7MqK%2FeIkiN%2FlVuSfd9uPJc7%2FkLxM9zmrR2ateZU4hDWINE6mx4rb6utYERyQYbyhyrYii%2B6DvEIMJoz0ajF4%2BM4a0rIh7EwIQRJf58BFACXC3SUtE4JLvriaSFcfsGzPdC0T0ElGMePT7nvv9Nx5z%2Fy1PHPd98zJ028SnR%2BZWczBa%2BZH9RUuhRgPqTbbUU7XQ%2FDqAG83p9v8axUtdNtZ6C42qZBoRCdOkvRq6sP9nQkutVhuvoTqPJ8JT1SaQSr%2B2xQJL1rIH1YlQRPI7aKZAyPsissRQvNW26%2BK0cFuRY0F9La4NSs1CpndPlXSYWqNifxzyJlwbvP5exYFY71Q4eJ9ap3KOC5kYIlyfj1h%2FFMY0j%2FbtMI%2F7rcEGOqUBpued4sRqGHFabYWyNYIUkNg0yZLrxym0BphqQOwzrA%2B1BTbyMCSjlLffZ6DSuT9w5IVXIxvZs70r79ZsPa4ZO05S6%2FWpTXI%2BJ42erx4XDXis2AONUAJWNdsbvvcTJYBtkcSI%2BUj505ZXdyYSfmYgj6U5dwS%2Fqd5qbpZi5VHk%2Fgtkj5CJM4Lz5593vNttFydChJ3hm3L4ujfSObA47naBh0DCnhmd&X-Amz-Signature=2f841913c8e273d8522224aa4ab49f7236eec063a6f99886e542af0de5f6af6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKDB2KA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuWS%2FW9%2FqREguppqztblkMjvzWvkea3FyQN6G%2BoFhaMAiEAot6sZCW9PRST2K20fbcZzg6AgYS5UgzsQaofOWXRe7UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOgDAfbjJGfu9QxMSrcA8oEYhxYb7RHfMc39KK4qRG8EED2852G8OKicwYCRIjVJK9ZJnWJLOnqpEpAgKGI5qIFUs52A9bXRlvfFsRh0ARxTIWmkUmXMx3DCAi8%2F9mjkHpRpkQN0D0dK7jjXDKscY0e35fRPDURIzrB7beGmkcSsr0fcDeXz1mvyqL%2B8c7Wi246dHE8GvtTOvGfz%2BYoAptIBNaLk%2B7tlBUfYFk6cpqSxtif%2FLzCbcB27DlKEAcIo6UW%2F1JFU2%2FZwSrQKttP99trWF7YJCG7MqK%2FeIkiN%2FlVuSfd9uPJc7%2FkLxM9zmrR2ateZU4hDWINE6mx4rb6utYERyQYbyhyrYii%2B6DvEIMJoz0ajF4%2BM4a0rIh7EwIQRJf58BFACXC3SUtE4JLvriaSFcfsGzPdC0T0ElGMePT7nvv9Nx5z%2Fy1PHPd98zJ028SnR%2BZWczBa%2BZH9RUuhRgPqTbbUU7XQ%2FDqAG83p9v8axUtdNtZ6C42qZBoRCdOkvRq6sP9nQkutVhuvoTqPJ8JT1SaQSr%2B2xQJL1rIH1YlQRPI7aKZAyPsissRQvNW26%2BK0cFuRY0F9La4NSs1CpndPlXSYWqNifxzyJlwbvP5exYFY71Q4eJ9ap3KOC5kYIlyfj1h%2FFMY0j%2FbtMI%2F7rcEGOqUBpued4sRqGHFabYWyNYIUkNg0yZLrxym0BphqQOwzrA%2B1BTbyMCSjlLffZ6DSuT9w5IVXIxvZs70r79ZsPa4ZO05S6%2FWpTXI%2BJ42erx4XDXis2AONUAJWNdsbvvcTJYBtkcSI%2BUj505ZXdyYSfmYgj6U5dwS%2Fqd5qbpZi5VHk%2Fgtkj5CJM4Lz5593vNttFydChJ3hm3L4ujfSObA47naBh0DCnhmd&X-Amz-Signature=0fde15e59cb041ea7e17b1c64969a7fd2bb5a62b21c2c40871b5517b0701d7de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKDB2KA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuWS%2FW9%2FqREguppqztblkMjvzWvkea3FyQN6G%2BoFhaMAiEAot6sZCW9PRST2K20fbcZzg6AgYS5UgzsQaofOWXRe7UqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOgDAfbjJGfu9QxMSrcA8oEYhxYb7RHfMc39KK4qRG8EED2852G8OKicwYCRIjVJK9ZJnWJLOnqpEpAgKGI5qIFUs52A9bXRlvfFsRh0ARxTIWmkUmXMx3DCAi8%2F9mjkHpRpkQN0D0dK7jjXDKscY0e35fRPDURIzrB7beGmkcSsr0fcDeXz1mvyqL%2B8c7Wi246dHE8GvtTOvGfz%2BYoAptIBNaLk%2B7tlBUfYFk6cpqSxtif%2FLzCbcB27DlKEAcIo6UW%2F1JFU2%2FZwSrQKttP99trWF7YJCG7MqK%2FeIkiN%2FlVuSfd9uPJc7%2FkLxM9zmrR2ateZU4hDWINE6mx4rb6utYERyQYbyhyrYii%2B6DvEIMJoz0ajF4%2BM4a0rIh7EwIQRJf58BFACXC3SUtE4JLvriaSFcfsGzPdC0T0ElGMePT7nvv9Nx5z%2Fy1PHPd98zJ028SnR%2BZWczBa%2BZH9RUuhRgPqTbbUU7XQ%2FDqAG83p9v8axUtdNtZ6C42qZBoRCdOkvRq6sP9nQkutVhuvoTqPJ8JT1SaQSr%2B2xQJL1rIH1YlQRPI7aKZAyPsissRQvNW26%2BK0cFuRY0F9La4NSs1CpndPlXSYWqNifxzyJlwbvP5exYFY71Q4eJ9ap3KOC5kYIlyfj1h%2FFMY0j%2FbtMI%2F7rcEGOqUBpued4sRqGHFabYWyNYIUkNg0yZLrxym0BphqQOwzrA%2B1BTbyMCSjlLffZ6DSuT9w5IVXIxvZs70r79ZsPa4ZO05S6%2FWpTXI%2BJ42erx4XDXis2AONUAJWNdsbvvcTJYBtkcSI%2BUj505ZXdyYSfmYgj6U5dwS%2Fqd5qbpZi5VHk%2Fgtkj5CJM4Lz5593vNttFydChJ3hm3L4ujfSObA47naBh0DCnhmd&X-Amz-Signature=f966d09150dad4ee1d769e6769fe800b5f3ece415ded8e3dc45edccca45e48a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
