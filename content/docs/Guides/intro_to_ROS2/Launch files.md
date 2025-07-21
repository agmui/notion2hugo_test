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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN2KVD5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQp69gYv6NFrfVQv67MAfIU92kQtU4dj2YLxDytx7nPwIhALMv%2BgKI4IHijIzV1Em%2FD8ift%2Bf0Z856ydAHWmW1UbEOKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3Bi6g%2BklmRa8a5Iq3ANzIIF5FaRA%2FSqHo2CuLa6%2F8vN5xX2zJCToJ%2FZ39RHC868%2FEG5MLdj8kfQE3md%2F8X%2Byi0B%2BtRSoVqq7Wad1wLMjfL2vgDolP8q%2FlEGg%2BPulxfx2uQYXff7iAjQ6ThQCJlCxTa3JlUWplaCFK8E5v84VT71tW3NXWC49%2BIQALV9MWIzK1O013XNXUzlYNzcGTfj5lFa8W%2FhCQJ5KdSSc3UNcn7kEX44LohPuxxknfU%2BTe7%2BvHV9vQU1WRuCz9rBDwpGzFIAtfBbwwy9Kp%2FsF0jmYcuE%2BdGtwC13moHjUMJrPDSe0ml%2FMvciqLDSQqRKWadwHUoM3ZwpXlBsirV3chtmYovOQvW3fz13f8G4jOrkpyApvBUfKRlAbbAHnJtKqc1K191uO62X6PcJZ4jRhw%2F4rtki3%2BQWzFqVg%2F4qlWKKIGUjIoniosnS4gVbrChnsW%2BvZKD02N2lf%2BxXBZJNTB5220Kb3ZiTfiOZwtxWwRSbZ7kkFGfogqmxR7VidC0Sr1RPIWgPW6%2BHI%2FmPIti0mHkq7hxxXRIiNJ8LCuFiJoTsvIJJ1zyRiGJXCFrMTtLBMYUGEjZ3sCIulHSw%2FtNLYEIuZYywISOd5JMYZZPg0NW3Whm9PyaYCtC2piyA%2F6TDmjvjDBjqkAYiCp7YEHdyKjZXIZg9MT2o%2Bj29IO4e5f%2FgQApye4CIKXWIPxkMwusw%2F6PcZtn0vKC1uvd7rkfVuGxGlRWmqGFb%2Bi3Hl%2BwQyK0AckgMQQPIDnd4%2FJMDuXzwM%2BVo9OQFyY8qDolveUkVvZj%2FYndWGl0T9rOc0A3tj%2B%2FHH3KLdAzGfkHBF9ma9W%2FmA5gX64DmXJqxeAL%2BYivBeWdfhqw3sNkBwztTN&X-Amz-Signature=af0964073c816ff425d7a7677b3e1694f6901e335fb2fb3019c99783a12a512f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN2KVD5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQp69gYv6NFrfVQv67MAfIU92kQtU4dj2YLxDytx7nPwIhALMv%2BgKI4IHijIzV1Em%2FD8ift%2Bf0Z856ydAHWmW1UbEOKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3Bi6g%2BklmRa8a5Iq3ANzIIF5FaRA%2FSqHo2CuLa6%2F8vN5xX2zJCToJ%2FZ39RHC868%2FEG5MLdj8kfQE3md%2F8X%2Byi0B%2BtRSoVqq7Wad1wLMjfL2vgDolP8q%2FlEGg%2BPulxfx2uQYXff7iAjQ6ThQCJlCxTa3JlUWplaCFK8E5v84VT71tW3NXWC49%2BIQALV9MWIzK1O013XNXUzlYNzcGTfj5lFa8W%2FhCQJ5KdSSc3UNcn7kEX44LohPuxxknfU%2BTe7%2BvHV9vQU1WRuCz9rBDwpGzFIAtfBbwwy9Kp%2FsF0jmYcuE%2BdGtwC13moHjUMJrPDSe0ml%2FMvciqLDSQqRKWadwHUoM3ZwpXlBsirV3chtmYovOQvW3fz13f8G4jOrkpyApvBUfKRlAbbAHnJtKqc1K191uO62X6PcJZ4jRhw%2F4rtki3%2BQWzFqVg%2F4qlWKKIGUjIoniosnS4gVbrChnsW%2BvZKD02N2lf%2BxXBZJNTB5220Kb3ZiTfiOZwtxWwRSbZ7kkFGfogqmxR7VidC0Sr1RPIWgPW6%2BHI%2FmPIti0mHkq7hxxXRIiNJ8LCuFiJoTsvIJJ1zyRiGJXCFrMTtLBMYUGEjZ3sCIulHSw%2FtNLYEIuZYywISOd5JMYZZPg0NW3Whm9PyaYCtC2piyA%2F6TDmjvjDBjqkAYiCp7YEHdyKjZXIZg9MT2o%2Bj29IO4e5f%2FgQApye4CIKXWIPxkMwusw%2F6PcZtn0vKC1uvd7rkfVuGxGlRWmqGFb%2Bi3Hl%2BwQyK0AckgMQQPIDnd4%2FJMDuXzwM%2BVo9OQFyY8qDolveUkVvZj%2FYndWGl0T9rOc0A3tj%2B%2FHH3KLdAzGfkHBF9ma9W%2FmA5gX64DmXJqxeAL%2BYivBeWdfhqw3sNkBwztTN&X-Amz-Signature=4437ba93d2dd466f82fb591f0d6007f35459f9aef0ba03ee0e80a30d0a786149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRN2KVD5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQp69gYv6NFrfVQv67MAfIU92kQtU4dj2YLxDytx7nPwIhALMv%2BgKI4IHijIzV1Em%2FD8ift%2Bf0Z856ydAHWmW1UbEOKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3Bi6g%2BklmRa8a5Iq3ANzIIF5FaRA%2FSqHo2CuLa6%2F8vN5xX2zJCToJ%2FZ39RHC868%2FEG5MLdj8kfQE3md%2F8X%2Byi0B%2BtRSoVqq7Wad1wLMjfL2vgDolP8q%2FlEGg%2BPulxfx2uQYXff7iAjQ6ThQCJlCxTa3JlUWplaCFK8E5v84VT71tW3NXWC49%2BIQALV9MWIzK1O013XNXUzlYNzcGTfj5lFa8W%2FhCQJ5KdSSc3UNcn7kEX44LohPuxxknfU%2BTe7%2BvHV9vQU1WRuCz9rBDwpGzFIAtfBbwwy9Kp%2FsF0jmYcuE%2BdGtwC13moHjUMJrPDSe0ml%2FMvciqLDSQqRKWadwHUoM3ZwpXlBsirV3chtmYovOQvW3fz13f8G4jOrkpyApvBUfKRlAbbAHnJtKqc1K191uO62X6PcJZ4jRhw%2F4rtki3%2BQWzFqVg%2F4qlWKKIGUjIoniosnS4gVbrChnsW%2BvZKD02N2lf%2BxXBZJNTB5220Kb3ZiTfiOZwtxWwRSbZ7kkFGfogqmxR7VidC0Sr1RPIWgPW6%2BHI%2FmPIti0mHkq7hxxXRIiNJ8LCuFiJoTsvIJJ1zyRiGJXCFrMTtLBMYUGEjZ3sCIulHSw%2FtNLYEIuZYywISOd5JMYZZPg0NW3Whm9PyaYCtC2piyA%2F6TDmjvjDBjqkAYiCp7YEHdyKjZXIZg9MT2o%2Bj29IO4e5f%2FgQApye4CIKXWIPxkMwusw%2F6PcZtn0vKC1uvd7rkfVuGxGlRWmqGFb%2Bi3Hl%2BwQyK0AckgMQQPIDnd4%2FJMDuXzwM%2BVo9OQFyY8qDolveUkVvZj%2FYndWGl0T9rOc0A3tj%2B%2FHH3KLdAzGfkHBF9ma9W%2FmA5gX64DmXJqxeAL%2BYivBeWdfhqw3sNkBwztTN&X-Amz-Signature=c70d9e669e9cdc22a3da68587193ea47c50ce667df70a07037bcd70f07da767e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
