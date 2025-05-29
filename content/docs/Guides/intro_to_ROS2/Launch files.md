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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOS3HJH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2pN83jzlXnMoxeu4Wixm0U2a%2Fpkf3BeYUTFlVqxkkfgIgAyBjOjxuWESG5x35ugF3CDONLdnoFACcNg%2BhrOUdUl0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUpdxrUAa26YskmyCrcA9rNm%2BCHzc60d%2F%2BSc01ZcGSYnrj7CebUsnlIKr9gVYS96uibhQNeBR36WvA3jhoA1SsbRzfU4%2BEesTH6P4uWJuESbyfO3XsEEH2V6k1h%2FRnhagKaWyMkuHl2j4m1Snv960M3mNwWrV3I3SngUFhfmh6S43UGDSCfNDiJ9O6f%2B9NjtQe3oWHvamz61PuDAHUChThxOgTPvrQfq4SfhUvJQqXdnfEUkSV0XOyYFK%2F%2FlNMjFhbiMtpWsAU3L3XjKZvRpQJfEhVb0fN6YATEOjtcwfVYu7RWRvq9Frjrp983h871dlfSGvwOh8SIxKnGOlKrUGsvgsqTl3sCsOv1BdD0VRsdUeEAJk74UOp94y9KapUkXNmuvDw8u2QsEKD4DW7nHpyDVTAJndKzwRlt9RMMunMYLD%2BdACSANuUIlB%2BBurupzsktEP%2Bcc9741HJH4J8uP6bgMw3AkQPZY1wFxqgfv%2F5YL9PwA5%2BYYU20cQF6x7SPcvIkGwfgdCsFHTCTLYwhV%2FI4EOEmGye%2FSwxDh5A%2FMtl5A7I%2FQrH4vOSPrKl8BKzsc0qKA7wTFgVSe5AW1UuCKD1Ypu99y7UqLa45IDsgiyCT08QNNqb%2FtIZGQa5yULpgxLJxBVlQxD1q2esOMKLj4sEGOqUBvO1Oqca71UGYH8B0ro7emb7fMXTBEktlayBG%2FA76OF1UKjgfNVKd46i8uZLkwZU6CxYvRWiH5cZYj8d%2FiUejn6cX3F4M9uc9tV%2F8vhguIZ1ujruT0urrfSByhLaodW8IDmCENd8jIudbpUIi8kf9VcAYZmxXDdfJIybWZZyO38fGRfwyFbEnP%2FUoTGDNNfWTVai4vOislo0uNISERUwZumjHyLl%2F&X-Amz-Signature=0399b7d80d2ccd9403dc37b261e8992fda8524c61da1d3737fcdbccef8353d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOS3HJH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2pN83jzlXnMoxeu4Wixm0U2a%2Fpkf3BeYUTFlVqxkkfgIgAyBjOjxuWESG5x35ugF3CDONLdnoFACcNg%2BhrOUdUl0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUpdxrUAa26YskmyCrcA9rNm%2BCHzc60d%2F%2BSc01ZcGSYnrj7CebUsnlIKr9gVYS96uibhQNeBR36WvA3jhoA1SsbRzfU4%2BEesTH6P4uWJuESbyfO3XsEEH2V6k1h%2FRnhagKaWyMkuHl2j4m1Snv960M3mNwWrV3I3SngUFhfmh6S43UGDSCfNDiJ9O6f%2B9NjtQe3oWHvamz61PuDAHUChThxOgTPvrQfq4SfhUvJQqXdnfEUkSV0XOyYFK%2F%2FlNMjFhbiMtpWsAU3L3XjKZvRpQJfEhVb0fN6YATEOjtcwfVYu7RWRvq9Frjrp983h871dlfSGvwOh8SIxKnGOlKrUGsvgsqTl3sCsOv1BdD0VRsdUeEAJk74UOp94y9KapUkXNmuvDw8u2QsEKD4DW7nHpyDVTAJndKzwRlt9RMMunMYLD%2BdACSANuUIlB%2BBurupzsktEP%2Bcc9741HJH4J8uP6bgMw3AkQPZY1wFxqgfv%2F5YL9PwA5%2BYYU20cQF6x7SPcvIkGwfgdCsFHTCTLYwhV%2FI4EOEmGye%2FSwxDh5A%2FMtl5A7I%2FQrH4vOSPrKl8BKzsc0qKA7wTFgVSe5AW1UuCKD1Ypu99y7UqLa45IDsgiyCT08QNNqb%2FtIZGQa5yULpgxLJxBVlQxD1q2esOMKLj4sEGOqUBvO1Oqca71UGYH8B0ro7emb7fMXTBEktlayBG%2FA76OF1UKjgfNVKd46i8uZLkwZU6CxYvRWiH5cZYj8d%2FiUejn6cX3F4M9uc9tV%2F8vhguIZ1ujruT0urrfSByhLaodW8IDmCENd8jIudbpUIi8kf9VcAYZmxXDdfJIybWZZyO38fGRfwyFbEnP%2FUoTGDNNfWTVai4vOislo0uNISERUwZumjHyLl%2F&X-Amz-Signature=fc26c976103de5701fea29917bff4586b29ec891f2e773980d8ffe8238bf039e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOS3HJH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2pN83jzlXnMoxeu4Wixm0U2a%2Fpkf3BeYUTFlVqxkkfgIgAyBjOjxuWESG5x35ugF3CDONLdnoFACcNg%2BhrOUdUl0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUpdxrUAa26YskmyCrcA9rNm%2BCHzc60d%2F%2BSc01ZcGSYnrj7CebUsnlIKr9gVYS96uibhQNeBR36WvA3jhoA1SsbRzfU4%2BEesTH6P4uWJuESbyfO3XsEEH2V6k1h%2FRnhagKaWyMkuHl2j4m1Snv960M3mNwWrV3I3SngUFhfmh6S43UGDSCfNDiJ9O6f%2B9NjtQe3oWHvamz61PuDAHUChThxOgTPvrQfq4SfhUvJQqXdnfEUkSV0XOyYFK%2F%2FlNMjFhbiMtpWsAU3L3XjKZvRpQJfEhVb0fN6YATEOjtcwfVYu7RWRvq9Frjrp983h871dlfSGvwOh8SIxKnGOlKrUGsvgsqTl3sCsOv1BdD0VRsdUeEAJk74UOp94y9KapUkXNmuvDw8u2QsEKD4DW7nHpyDVTAJndKzwRlt9RMMunMYLD%2BdACSANuUIlB%2BBurupzsktEP%2Bcc9741HJH4J8uP6bgMw3AkQPZY1wFxqgfv%2F5YL9PwA5%2BYYU20cQF6x7SPcvIkGwfgdCsFHTCTLYwhV%2FI4EOEmGye%2FSwxDh5A%2FMtl5A7I%2FQrH4vOSPrKl8BKzsc0qKA7wTFgVSe5AW1UuCKD1Ypu99y7UqLa45IDsgiyCT08QNNqb%2FtIZGQa5yULpgxLJxBVlQxD1q2esOMKLj4sEGOqUBvO1Oqca71UGYH8B0ro7emb7fMXTBEktlayBG%2FA76OF1UKjgfNVKd46i8uZLkwZU6CxYvRWiH5cZYj8d%2FiUejn6cX3F4M9uc9tV%2F8vhguIZ1ujruT0urrfSByhLaodW8IDmCENd8jIudbpUIi8kf9VcAYZmxXDdfJIybWZZyO38fGRfwyFbEnP%2FUoTGDNNfWTVai4vOislo0uNISERUwZumjHyLl%2F&X-Amz-Signature=ef2b0f77d411bcb8fc3410162bb2b0b57d93661c1a556d4ebd4976950a9b6fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
