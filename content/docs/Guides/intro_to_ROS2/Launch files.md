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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2BUW2BB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDYIglitW5GMtrwcRLz9d7Pege1mDOv5ksnKRFS%2B9pCbQIhAKsW9aYNC%2Br4O1raMjAIhTkbH6gvip7kl360X8kbB5r5Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwoX%2FSOCm9vrI0Bi8cq3AOjCAFcG6%2FRbTAhLqMwXuSjLZ9Wry8uEpzytSihADKWwZqExnt0s9Dw5QLLMDKDSaKX6uK1brN7qwQLbHqvvTZM1bMan4N8vkIRDuntvMKSeEU8AzxXEmLqBPiu0Qx7E6Q7fryXmfE8qMD80MvUEUT1foQuySvCzDx9T%2B96j6WvfKK7Ilh9%2FVezD4ucCRboCfOD%2BeAZT2TWeNJ7okhRkFxndJBDuF6ZEJ4Z%2Bo7tC%2FnNU7CpSSUfEBZUXgY2VST9QeVb7eBY3G1qCEZ28zTQyPL31YDMN9StDU1QYBzigI%2BGMAxJrlFCgVAkN9s%2BiHQNQmKqSYNxYpTvvXvRfsRLsH9a5Q3QYJQ2TMIvqeSvGuzMsdK0i2Zosh7qCgt55WR78qMXHAdXeJ7xiMpBlLaMP4Gkduppeomor9z1KY1nup87BDXG8KYTZ5BEvJOFgVnQE54wfmUp9PI9gNJIxy3YL82k4NVqn5M90%2FoXX6Qnx7KOdxORQEykbTgpe6eIqSIpHrIhfgUU3prMdoX9FFr78l%2Bqv0RRukOlqD03Ng17iyv83YHk%2Fk8QxI3ImuANYEbMVnKGFBgOsn4NyFhPuo90cjvMxkQ8buKvJmjfdu6ZQ8NeYKeuxgRDS9hjbSUvKzDF0pO9BjqkAbn2yPBgzJbJvaJRsnPg29YtxuFpTZ9Tv8shQbX9cC5JKhPS24Kzmd9Hct6iYt%2FNtQBuDZHaG5xN6H%2BKTvJ%2FDu7856Jo540r6uO8aFu0xhYAEHft3yz%2F0sPgaxoJ6gFCMfGQx78NnD1TWxxfxlhYVAGQ2cI2LEBAd8Ec%2BTh0%2FlNP9fbyuOe%2Fk6fIYy8mrlfvvhvtDFU%2F2ZqBI%2F%2BaQlL69KS1eyL%2B&X-Amz-Signature=7ce100863fc2f6e4352b1fa40327253f25f78ffeddabd5fed65e69f6f9f0f132&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2BUW2BB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDYIglitW5GMtrwcRLz9d7Pege1mDOv5ksnKRFS%2B9pCbQIhAKsW9aYNC%2Br4O1raMjAIhTkbH6gvip7kl360X8kbB5r5Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwoX%2FSOCm9vrI0Bi8cq3AOjCAFcG6%2FRbTAhLqMwXuSjLZ9Wry8uEpzytSihADKWwZqExnt0s9Dw5QLLMDKDSaKX6uK1brN7qwQLbHqvvTZM1bMan4N8vkIRDuntvMKSeEU8AzxXEmLqBPiu0Qx7E6Q7fryXmfE8qMD80MvUEUT1foQuySvCzDx9T%2B96j6WvfKK7Ilh9%2FVezD4ucCRboCfOD%2BeAZT2TWeNJ7okhRkFxndJBDuF6ZEJ4Z%2Bo7tC%2FnNU7CpSSUfEBZUXgY2VST9QeVb7eBY3G1qCEZ28zTQyPL31YDMN9StDU1QYBzigI%2BGMAxJrlFCgVAkN9s%2BiHQNQmKqSYNxYpTvvXvRfsRLsH9a5Q3QYJQ2TMIvqeSvGuzMsdK0i2Zosh7qCgt55WR78qMXHAdXeJ7xiMpBlLaMP4Gkduppeomor9z1KY1nup87BDXG8KYTZ5BEvJOFgVnQE54wfmUp9PI9gNJIxy3YL82k4NVqn5M90%2FoXX6Qnx7KOdxORQEykbTgpe6eIqSIpHrIhfgUU3prMdoX9FFr78l%2Bqv0RRukOlqD03Ng17iyv83YHk%2Fk8QxI3ImuANYEbMVnKGFBgOsn4NyFhPuo90cjvMxkQ8buKvJmjfdu6ZQ8NeYKeuxgRDS9hjbSUvKzDF0pO9BjqkAbn2yPBgzJbJvaJRsnPg29YtxuFpTZ9Tv8shQbX9cC5JKhPS24Kzmd9Hct6iYt%2FNtQBuDZHaG5xN6H%2BKTvJ%2FDu7856Jo540r6uO8aFu0xhYAEHft3yz%2F0sPgaxoJ6gFCMfGQx78NnD1TWxxfxlhYVAGQ2cI2LEBAd8Ec%2BTh0%2FlNP9fbyuOe%2Fk6fIYy8mrlfvvhvtDFU%2F2ZqBI%2F%2BaQlL69KS1eyL%2B&X-Amz-Signature=cd2a1b13ec7357b000586583b01337ecebbd17d5509df7ebdc26edbadc9a6dab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2BUW2BB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDYIglitW5GMtrwcRLz9d7Pege1mDOv5ksnKRFS%2B9pCbQIhAKsW9aYNC%2Br4O1raMjAIhTkbH6gvip7kl360X8kbB5r5Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwoX%2FSOCm9vrI0Bi8cq3AOjCAFcG6%2FRbTAhLqMwXuSjLZ9Wry8uEpzytSihADKWwZqExnt0s9Dw5QLLMDKDSaKX6uK1brN7qwQLbHqvvTZM1bMan4N8vkIRDuntvMKSeEU8AzxXEmLqBPiu0Qx7E6Q7fryXmfE8qMD80MvUEUT1foQuySvCzDx9T%2B96j6WvfKK7Ilh9%2FVezD4ucCRboCfOD%2BeAZT2TWeNJ7okhRkFxndJBDuF6ZEJ4Z%2Bo7tC%2FnNU7CpSSUfEBZUXgY2VST9QeVb7eBY3G1qCEZ28zTQyPL31YDMN9StDU1QYBzigI%2BGMAxJrlFCgVAkN9s%2BiHQNQmKqSYNxYpTvvXvRfsRLsH9a5Q3QYJQ2TMIvqeSvGuzMsdK0i2Zosh7qCgt55WR78qMXHAdXeJ7xiMpBlLaMP4Gkduppeomor9z1KY1nup87BDXG8KYTZ5BEvJOFgVnQE54wfmUp9PI9gNJIxy3YL82k4NVqn5M90%2FoXX6Qnx7KOdxORQEykbTgpe6eIqSIpHrIhfgUU3prMdoX9FFr78l%2Bqv0RRukOlqD03Ng17iyv83YHk%2Fk8QxI3ImuANYEbMVnKGFBgOsn4NyFhPuo90cjvMxkQ8buKvJmjfdu6ZQ8NeYKeuxgRDS9hjbSUvKzDF0pO9BjqkAbn2yPBgzJbJvaJRsnPg29YtxuFpTZ9Tv8shQbX9cC5JKhPS24Kzmd9Hct6iYt%2FNtQBuDZHaG5xN6H%2BKTvJ%2FDu7856Jo540r6uO8aFu0xhYAEHft3yz%2F0sPgaxoJ6gFCMfGQx78NnD1TWxxfxlhYVAGQ2cI2LEBAd8Ec%2BTh0%2FlNP9fbyuOe%2Fk6fIYy8mrlfvvhvtDFU%2F2ZqBI%2F%2BaQlL69KS1eyL%2B&X-Amz-Signature=d89094aadd993d6c2e954ad897028ec909fc10e340a65716d1982f802ecefa1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
