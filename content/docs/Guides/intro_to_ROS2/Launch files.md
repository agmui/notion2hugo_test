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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ROMKKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHnbaJSUZQFQ9KYre8jYw9HgcAkG5MSUwBPlqs5dQ6kAiBhy%2BdJ83b8uIozj8jFSZL24Mpn9rUN1v0TDt2aokeAdyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM90FSW1PHMzX1HIyeKtwDn%2F1NFBDZuJBj0rP%2FCDFiYb2HAyUEjAfE%2BEkgvJ12jOEGMThdE2UBTGqU2dAIlrm5pAt15uf8A0fCnqY%2FLlqhLaadletgCFretb%2B744fZWkqa%2FFqz7MTPpyweQz14gLpZH98WY5nMFRnLlv9%2Bj01ZkGaEQ2I4uueuw8FoWgoNK1qQ9%2BNTlvkgpyejf%2FSXm75%2FlZlguRVke7jIwAUQjsIWm44m%2BlbNE4SCU8WLxqb1LeOvLa0sV5zr4%2FzCD4kuChr2JzumVvzc3Mrr10s9aBFuuR91%2BvNlWKiphUTvcgVyVQDdntPxdQmkqZan3Cs5sofbHDND7uENVhfcYz5gb3GtmPmVX4i7HSbVjo5WeTpDRjcYhU4oI0LIMMORywqZZ8IHJDs7qLlUY018FMAXLjboWCukK5trmWsnUJQYgHPCp9bxeDCW10lZuL0o31B0aw%2BthJ8YASH7ewIztkcDFNXuZ2hQ9TM70UCJiX%2BLv4ekOhhWnOFyP3FQ8WvoU3o5hGEtVzMszlA88Vhkcl4Px4bwoIeQruenf57wLYjhZinhM5OQ7dF9%2FflA3U6ca0LCycudn3qf%2BK4OBsOkxWCNoxOeKH0IikF2kU4GmCqE3%2BI%2BatSfds0zeuZTQcDDIcAw143evQY6pgHVL4BUAb93Uq12uy%2BL4OiJ%2F3f2hO%2BU8FU%2BlJxI%2FhjPcU8U%2B%2B2RPXDA1ioWh7Ga8A7vfRqIiOANHmT6gho6cLK%2BDP6z5LWwXxalbbAQP2ICQ4b%2BN4ypflKldLWyq4mNidOQMxe4RgJPUQdABXdHifDt7BHadOiT3IvEor6qcivF7RZKjDnvttLV%2F9R%2FSmwL33fsaD7nw4%2BDoK1tW6Tf3zlfyGIb%2FOZw&X-Amz-Signature=08839c70b67b0a6547704b8bff8f9c39b32b04a4cc69c0bbf425b694d04b31ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ROMKKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHnbaJSUZQFQ9KYre8jYw9HgcAkG5MSUwBPlqs5dQ6kAiBhy%2BdJ83b8uIozj8jFSZL24Mpn9rUN1v0TDt2aokeAdyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM90FSW1PHMzX1HIyeKtwDn%2F1NFBDZuJBj0rP%2FCDFiYb2HAyUEjAfE%2BEkgvJ12jOEGMThdE2UBTGqU2dAIlrm5pAt15uf8A0fCnqY%2FLlqhLaadletgCFretb%2B744fZWkqa%2FFqz7MTPpyweQz14gLpZH98WY5nMFRnLlv9%2Bj01ZkGaEQ2I4uueuw8FoWgoNK1qQ9%2BNTlvkgpyejf%2FSXm75%2FlZlguRVke7jIwAUQjsIWm44m%2BlbNE4SCU8WLxqb1LeOvLa0sV5zr4%2FzCD4kuChr2JzumVvzc3Mrr10s9aBFuuR91%2BvNlWKiphUTvcgVyVQDdntPxdQmkqZan3Cs5sofbHDND7uENVhfcYz5gb3GtmPmVX4i7HSbVjo5WeTpDRjcYhU4oI0LIMMORywqZZ8IHJDs7qLlUY018FMAXLjboWCukK5trmWsnUJQYgHPCp9bxeDCW10lZuL0o31B0aw%2BthJ8YASH7ewIztkcDFNXuZ2hQ9TM70UCJiX%2BLv4ekOhhWnOFyP3FQ8WvoU3o5hGEtVzMszlA88Vhkcl4Px4bwoIeQruenf57wLYjhZinhM5OQ7dF9%2FflA3U6ca0LCycudn3qf%2BK4OBsOkxWCNoxOeKH0IikF2kU4GmCqE3%2BI%2BatSfds0zeuZTQcDDIcAw143evQY6pgHVL4BUAb93Uq12uy%2BL4OiJ%2F3f2hO%2BU8FU%2BlJxI%2FhjPcU8U%2B%2B2RPXDA1ioWh7Ga8A7vfRqIiOANHmT6gho6cLK%2BDP6z5LWwXxalbbAQP2ICQ4b%2BN4ypflKldLWyq4mNidOQMxe4RgJPUQdABXdHifDt7BHadOiT3IvEor6qcivF7RZKjDnvttLV%2F9R%2FSmwL33fsaD7nw4%2BDoK1tW6Tf3zlfyGIb%2FOZw&X-Amz-Signature=14142d7dc6ab62124137ce8b15769a21e91dcdede268b649bf76f28c7c80cff7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ROMKKN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHnbaJSUZQFQ9KYre8jYw9HgcAkG5MSUwBPlqs5dQ6kAiBhy%2BdJ83b8uIozj8jFSZL24Mpn9rUN1v0TDt2aokeAdyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM90FSW1PHMzX1HIyeKtwDn%2F1NFBDZuJBj0rP%2FCDFiYb2HAyUEjAfE%2BEkgvJ12jOEGMThdE2UBTGqU2dAIlrm5pAt15uf8A0fCnqY%2FLlqhLaadletgCFretb%2B744fZWkqa%2FFqz7MTPpyweQz14gLpZH98WY5nMFRnLlv9%2Bj01ZkGaEQ2I4uueuw8FoWgoNK1qQ9%2BNTlvkgpyejf%2FSXm75%2FlZlguRVke7jIwAUQjsIWm44m%2BlbNE4SCU8WLxqb1LeOvLa0sV5zr4%2FzCD4kuChr2JzumVvzc3Mrr10s9aBFuuR91%2BvNlWKiphUTvcgVyVQDdntPxdQmkqZan3Cs5sofbHDND7uENVhfcYz5gb3GtmPmVX4i7HSbVjo5WeTpDRjcYhU4oI0LIMMORywqZZ8IHJDs7qLlUY018FMAXLjboWCukK5trmWsnUJQYgHPCp9bxeDCW10lZuL0o31B0aw%2BthJ8YASH7ewIztkcDFNXuZ2hQ9TM70UCJiX%2BLv4ekOhhWnOFyP3FQ8WvoU3o5hGEtVzMszlA88Vhkcl4Px4bwoIeQruenf57wLYjhZinhM5OQ7dF9%2FflA3U6ca0LCycudn3qf%2BK4OBsOkxWCNoxOeKH0IikF2kU4GmCqE3%2BI%2BatSfds0zeuZTQcDDIcAw143evQY6pgHVL4BUAb93Uq12uy%2BL4OiJ%2F3f2hO%2BU8FU%2BlJxI%2FhjPcU8U%2B%2B2RPXDA1ioWh7Ga8A7vfRqIiOANHmT6gho6cLK%2BDP6z5LWwXxalbbAQP2ICQ4b%2BN4ypflKldLWyq4mNidOQMxe4RgJPUQdABXdHifDt7BHadOiT3IvEor6qcivF7RZKjDnvttLV%2F9R%2FSmwL33fsaD7nw4%2BDoK1tW6Tf3zlfyGIb%2FOZw&X-Amz-Signature=18aeb1e5b9b783e230a40a4f0cda31276549a0403826c760a99a0cbf35a77d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
