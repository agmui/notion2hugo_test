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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLA3H5AM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFgcxH4%2FTp%2Fp9RLem2fCbx%2Ba7FsMvqElAoPMp6lswctXAiAINc79mpb%2B%2BfqeNZMpADw%2BJDuRQKS%2BvX2dcYxTl76p5CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrL9rd8i0Gp8PO9YMKtwDukH9aiZ0U4uqvi%2FE4RaFnzd2nt5zBYohntqZM5q8KaBgFm4jZFEehYMzX14Jh4WnOGobvUFkM1%2F9LZq82SxxMTX1%2B9TD%2FheznCH7JQt6isGAwKfVynXYeTHIal6WBnC51iHPejyYIfxXtUgLhnJOaLYtrZyazyy9Aii7jgcZ96wl%2BiWSEf59lR%2FvZpBLb8X8nw6DrJk1RHnoq%2B7RJiG5cyKCD7d7EFj1TLcZVsKrXHKTNxzn77WGO5sr7y9kdb70SQ5vL8d9AV%2BwxI6XrbEOx2i4smPoVLwzLjH9UtUoyIFZaB9Ema5C%2BSA8rYBOwhkhp8UYp5oO7MxriQ3bG8Ot9tryEdQJ5poiP%2FbKTYEXij1YX%2FM10t2vfyr3ig3vT125vWaw6Up7SBYIYEAs9I1A6vUxZ0u1NYcCjtJxv3VDtI%2BLl0T06RwXM3Un19MHPEGANblkuca0R1lHqEw8i7YqIX2NkjhXGoVbBUgpcb2JnNFSgyh6ALrVXtXWcKy4ui6CgfbMZcIjnuuZmwxYq0jZjuIbEPqHNu%2FfGU4mQUy6RUfcoe30jHX1oqee5OfjVtKuz18Uyc833e8YerMNu%2Fj63YqC7TIK3JgxVnAlp5qTj1fEaYyg8%2BiyVUPdJ8Uwt5SovwY6pgEVBSmoRM3tzeY83V61ezvZbvcRcRS%2BBd7%2FUMOkh9JlewBBwV8lf3Hp8g6BmjAe%2FuOcHw8dmgaVhvaWzZ1bvYmDK%2BjRJ8SnNrA9HEGiXVoJw5xiUM7wpFM3dbrm0zZ%2F7BBpx6Y%2BKYFUTJq7p3EAzdk6WaIO87QKQyPbeb0qi01mfr5K0Nt26bGNli3KtjPS7UL0iKxZwyUlHO%2Fd%2BJ4yLb5pRtlIFlWA&X-Amz-Signature=04fefd2602c14f1281a1f8d4dec3a7ae3754a4c9e159130cb9864fbec926a897&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLA3H5AM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFgcxH4%2FTp%2Fp9RLem2fCbx%2Ba7FsMvqElAoPMp6lswctXAiAINc79mpb%2B%2BfqeNZMpADw%2BJDuRQKS%2BvX2dcYxTl76p5CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrL9rd8i0Gp8PO9YMKtwDukH9aiZ0U4uqvi%2FE4RaFnzd2nt5zBYohntqZM5q8KaBgFm4jZFEehYMzX14Jh4WnOGobvUFkM1%2F9LZq82SxxMTX1%2B9TD%2FheznCH7JQt6isGAwKfVynXYeTHIal6WBnC51iHPejyYIfxXtUgLhnJOaLYtrZyazyy9Aii7jgcZ96wl%2BiWSEf59lR%2FvZpBLb8X8nw6DrJk1RHnoq%2B7RJiG5cyKCD7d7EFj1TLcZVsKrXHKTNxzn77WGO5sr7y9kdb70SQ5vL8d9AV%2BwxI6XrbEOx2i4smPoVLwzLjH9UtUoyIFZaB9Ema5C%2BSA8rYBOwhkhp8UYp5oO7MxriQ3bG8Ot9tryEdQJ5poiP%2FbKTYEXij1YX%2FM10t2vfyr3ig3vT125vWaw6Up7SBYIYEAs9I1A6vUxZ0u1NYcCjtJxv3VDtI%2BLl0T06RwXM3Un19MHPEGANblkuca0R1lHqEw8i7YqIX2NkjhXGoVbBUgpcb2JnNFSgyh6ALrVXtXWcKy4ui6CgfbMZcIjnuuZmwxYq0jZjuIbEPqHNu%2FfGU4mQUy6RUfcoe30jHX1oqee5OfjVtKuz18Uyc833e8YerMNu%2Fj63YqC7TIK3JgxVnAlp5qTj1fEaYyg8%2BiyVUPdJ8Uwt5SovwY6pgEVBSmoRM3tzeY83V61ezvZbvcRcRS%2BBd7%2FUMOkh9JlewBBwV8lf3Hp8g6BmjAe%2FuOcHw8dmgaVhvaWzZ1bvYmDK%2BjRJ8SnNrA9HEGiXVoJw5xiUM7wpFM3dbrm0zZ%2F7BBpx6Y%2BKYFUTJq7p3EAzdk6WaIO87QKQyPbeb0qi01mfr5K0Nt26bGNli3KtjPS7UL0iKxZwyUlHO%2Fd%2BJ4yLb5pRtlIFlWA&X-Amz-Signature=beae145a04b459d5e5f5cd24505bd4c3c98c11a71f70a6627853d242728e7e89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLA3H5AM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFgcxH4%2FTp%2Fp9RLem2fCbx%2Ba7FsMvqElAoPMp6lswctXAiAINc79mpb%2B%2BfqeNZMpADw%2BJDuRQKS%2BvX2dcYxTl76p5CqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrL9rd8i0Gp8PO9YMKtwDukH9aiZ0U4uqvi%2FE4RaFnzd2nt5zBYohntqZM5q8KaBgFm4jZFEehYMzX14Jh4WnOGobvUFkM1%2F9LZq82SxxMTX1%2B9TD%2FheznCH7JQt6isGAwKfVynXYeTHIal6WBnC51iHPejyYIfxXtUgLhnJOaLYtrZyazyy9Aii7jgcZ96wl%2BiWSEf59lR%2FvZpBLb8X8nw6DrJk1RHnoq%2B7RJiG5cyKCD7d7EFj1TLcZVsKrXHKTNxzn77WGO5sr7y9kdb70SQ5vL8d9AV%2BwxI6XrbEOx2i4smPoVLwzLjH9UtUoyIFZaB9Ema5C%2BSA8rYBOwhkhp8UYp5oO7MxriQ3bG8Ot9tryEdQJ5poiP%2FbKTYEXij1YX%2FM10t2vfyr3ig3vT125vWaw6Up7SBYIYEAs9I1A6vUxZ0u1NYcCjtJxv3VDtI%2BLl0T06RwXM3Un19MHPEGANblkuca0R1lHqEw8i7YqIX2NkjhXGoVbBUgpcb2JnNFSgyh6ALrVXtXWcKy4ui6CgfbMZcIjnuuZmwxYq0jZjuIbEPqHNu%2FfGU4mQUy6RUfcoe30jHX1oqee5OfjVtKuz18Uyc833e8YerMNu%2Fj63YqC7TIK3JgxVnAlp5qTj1fEaYyg8%2BiyVUPdJ8Uwt5SovwY6pgEVBSmoRM3tzeY83V61ezvZbvcRcRS%2BBd7%2FUMOkh9JlewBBwV8lf3Hp8g6BmjAe%2FuOcHw8dmgaVhvaWzZ1bvYmDK%2BjRJ8SnNrA9HEGiXVoJw5xiUM7wpFM3dbrm0zZ%2F7BBpx6Y%2BKYFUTJq7p3EAzdk6WaIO87QKQyPbeb0qi01mfr5K0Nt26bGNli3KtjPS7UL0iKxZwyUlHO%2Fd%2BJ4yLb5pRtlIFlWA&X-Amz-Signature=025125e75b1da1ff4ada98e131e65fdef71b31d6ff725309f0f85ad316f21463&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
