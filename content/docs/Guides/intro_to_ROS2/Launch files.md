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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUA5SYB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSPa%2FNuH68w8w2KDqlowEQkkY7Bv7m%2FDmARZ1UiJEqJAIhAJnnRQcLsRg0sZNqX8Yy1IKQ6rsJfHRDzWaAdeCoGQsuKv8DCDUQABoMNjM3NDIzMTgzODA1IgzwD9RUy3O8pX04xDEq3APjU8BWqlL2R05J3GPAEnlxVT1t7KJck9CTUYXHlYRR6O0LKdGDUK2uaT1kTncCWNmGkYapf1TuUHyTXlv6JF4ZuQ2mAyRIyuVgBwXEWlgL%2F6tOltUvWvvs%2FrXH3HzKXLIyeuJGMFwm5Sn9%2BsJcNiINrUaNiHk2qxyQ6WPm%2Bxy0vEYVw3DVDCKTeIVplQt92zZkEnnQQTa1lA0wNJhK1rGu8dryIJQjF0KwoF2gqE5dk7UPvIkviPbShREw5YqCgnT1x33SIrwLA1w25sWTzjuRFGnQhUYqBd4F7DwO4VvCZIaJbZxhb4t%2FRPr1ITs3t9f%2FxNhb%2B3ti5JRFI82xjV2OHeZEUYHWd%2FfJcJ3rw1IgY2szYciM9mnyhGY%2BvWZrdzbCwD%2BJkgvMGPe0RkiMY%2F9JoQiISe9UrqwWWhtZtdcMzeYQEy%2B43hKNjanlicFw79bt5QxxWyvaDzQXgT35NgdanIIRfG60ce4GgmAFnFIs0NUkZS0yCUjjdJqTYbCytOm2M7X4hODVL76EwNJb3eZeBFH83SeGNpR8X2lMehAdYey1rxPx%2FjJrGLDgnproS0IIqOniKsSpyyX3Nyj0nA9%2B8%2FNUc6RkUUTDsu7JfhacH6QyRtaPcux08ZWRODCY3Ny%2BBjqkAR9VO3y1GzpU40P9anAdDDWfWgCiqBTiY8PmVAYBQxovpkXAcu4d90USDdvxJvrGEOfr3kd7iVqhgJjtWqGnPSzlnimDrVDXKjQauNk6psSjoSqRVecTiSZ8PbKnd18R37xJv96VRZ4kTFMTuIgs5synCbPFAGRvdKLBJJdybpQGAnrWZU4QWjuP0JMj3kA0%2Ftj9AvgEI4iGKPtwGEGtzn8bTbe4&X-Amz-Signature=09195c2c415a5f8f44833e4ff7e51d813484e54f855c8459b52db643f45992bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUA5SYB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSPa%2FNuH68w8w2KDqlowEQkkY7Bv7m%2FDmARZ1UiJEqJAIhAJnnRQcLsRg0sZNqX8Yy1IKQ6rsJfHRDzWaAdeCoGQsuKv8DCDUQABoMNjM3NDIzMTgzODA1IgzwD9RUy3O8pX04xDEq3APjU8BWqlL2R05J3GPAEnlxVT1t7KJck9CTUYXHlYRR6O0LKdGDUK2uaT1kTncCWNmGkYapf1TuUHyTXlv6JF4ZuQ2mAyRIyuVgBwXEWlgL%2F6tOltUvWvvs%2FrXH3HzKXLIyeuJGMFwm5Sn9%2BsJcNiINrUaNiHk2qxyQ6WPm%2Bxy0vEYVw3DVDCKTeIVplQt92zZkEnnQQTa1lA0wNJhK1rGu8dryIJQjF0KwoF2gqE5dk7UPvIkviPbShREw5YqCgnT1x33SIrwLA1w25sWTzjuRFGnQhUYqBd4F7DwO4VvCZIaJbZxhb4t%2FRPr1ITs3t9f%2FxNhb%2B3ti5JRFI82xjV2OHeZEUYHWd%2FfJcJ3rw1IgY2szYciM9mnyhGY%2BvWZrdzbCwD%2BJkgvMGPe0RkiMY%2F9JoQiISe9UrqwWWhtZtdcMzeYQEy%2B43hKNjanlicFw79bt5QxxWyvaDzQXgT35NgdanIIRfG60ce4GgmAFnFIs0NUkZS0yCUjjdJqTYbCytOm2M7X4hODVL76EwNJb3eZeBFH83SeGNpR8X2lMehAdYey1rxPx%2FjJrGLDgnproS0IIqOniKsSpyyX3Nyj0nA9%2B8%2FNUc6RkUUTDsu7JfhacH6QyRtaPcux08ZWRODCY3Ny%2BBjqkAR9VO3y1GzpU40P9anAdDDWfWgCiqBTiY8PmVAYBQxovpkXAcu4d90USDdvxJvrGEOfr3kd7iVqhgJjtWqGnPSzlnimDrVDXKjQauNk6psSjoSqRVecTiSZ8PbKnd18R37xJv96VRZ4kTFMTuIgs5synCbPFAGRvdKLBJJdybpQGAnrWZU4QWjuP0JMj3kA0%2Ftj9AvgEI4iGKPtwGEGtzn8bTbe4&X-Amz-Signature=b8f370a61d27780cb91dc5e69363e826e4d4f9a05d5c4302daaa332d677b0e76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUA5SYB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSPa%2FNuH68w8w2KDqlowEQkkY7Bv7m%2FDmARZ1UiJEqJAIhAJnnRQcLsRg0sZNqX8Yy1IKQ6rsJfHRDzWaAdeCoGQsuKv8DCDUQABoMNjM3NDIzMTgzODA1IgzwD9RUy3O8pX04xDEq3APjU8BWqlL2R05J3GPAEnlxVT1t7KJck9CTUYXHlYRR6O0LKdGDUK2uaT1kTncCWNmGkYapf1TuUHyTXlv6JF4ZuQ2mAyRIyuVgBwXEWlgL%2F6tOltUvWvvs%2FrXH3HzKXLIyeuJGMFwm5Sn9%2BsJcNiINrUaNiHk2qxyQ6WPm%2Bxy0vEYVw3DVDCKTeIVplQt92zZkEnnQQTa1lA0wNJhK1rGu8dryIJQjF0KwoF2gqE5dk7UPvIkviPbShREw5YqCgnT1x33SIrwLA1w25sWTzjuRFGnQhUYqBd4F7DwO4VvCZIaJbZxhb4t%2FRPr1ITs3t9f%2FxNhb%2B3ti5JRFI82xjV2OHeZEUYHWd%2FfJcJ3rw1IgY2szYciM9mnyhGY%2BvWZrdzbCwD%2BJkgvMGPe0RkiMY%2F9JoQiISe9UrqwWWhtZtdcMzeYQEy%2B43hKNjanlicFw79bt5QxxWyvaDzQXgT35NgdanIIRfG60ce4GgmAFnFIs0NUkZS0yCUjjdJqTYbCytOm2M7X4hODVL76EwNJb3eZeBFH83SeGNpR8X2lMehAdYey1rxPx%2FjJrGLDgnproS0IIqOniKsSpyyX3Nyj0nA9%2B8%2FNUc6RkUUTDsu7JfhacH6QyRtaPcux08ZWRODCY3Ny%2BBjqkAR9VO3y1GzpU40P9anAdDDWfWgCiqBTiY8PmVAYBQxovpkXAcu4d90USDdvxJvrGEOfr3kd7iVqhgJjtWqGnPSzlnimDrVDXKjQauNk6psSjoSqRVecTiSZ8PbKnd18R37xJv96VRZ4kTFMTuIgs5synCbPFAGRvdKLBJJdybpQGAnrWZU4QWjuP0JMj3kA0%2Ftj9AvgEI4iGKPtwGEGtzn8bTbe4&X-Amz-Signature=b0ef98270063ffcf3ac70dda0849c0806f817ab3aeae3602cad1cadbe4f9afee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
