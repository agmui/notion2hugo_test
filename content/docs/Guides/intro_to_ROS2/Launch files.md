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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55FIKFJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICPowCprm4TjFk%2BlHjwQ7jL2SSIj54agFnUJYOU4muE2AiEA9kF5ODkFBUxGipBNJD6Shb1QHvuV%2Fnz14r%2BlPisctnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIlEWVCSY5omMoeHoSrcA04jjUrcpb8cET5PJmcvJvWKhtLBA89Qhk2cyrBier52bf3PngMdGGuswqxQo3oe8LN8398xnzlBdOlZJ61gMMX0iiknLk9%2FgZ9fnJDVFbmpkFzBauinULoPqfJwzNbjSrKv52hnt%2F4gJ94kA9bjebQPUBs2xeTL5soOZwZj%2FhhBOJcJw01voYFiWpGle56xTKpzRBnfZpHVxXxvC5%2FjfzxEAjahgP9QZhzy09XIbwXXS4DC6F4ntB%2FmvPYRYTYU%2FUfIzPP%2B6qxwmQfIa9%2FL5zwDFI5GTGAhq5TsAJkqp%2B7jx7UNt0cQrD%2BsXOcN7hXVtkuIxzEN5qnWzSa3sN7tvqwYy2pnt3JHUbz65Ns%2B3GDmSC0oB3p4KY0dmqdLthIVjNVz6CAs5PjG%2FBKvl%2FmogXegXALmsIHNsafHgz4cV6oIRwcHCkwuX%2Fpt36%2BTsmKxhlbQl0bnOelT3p3en4rpT%2BrIKMk%2BpwQ3yQ327Mhh8WBD6VsLUjlyvx8kUq4yWbnunipdQMF5gRgHZZvgXegOoAmhBzYhEqEuwOVmryoZY2rVWOIlej1nGo%2FFrEGvsPrZfRwyh9oc%2FZMFsZ3HDWPbWTabn5M%2Bcj2LtK3wzPeE0Cv%2B06so3Wcn9PzJTgDIMJTiy8EGOqUBVq9aplqY2ggeC2NghZLCa6mIE7Biqp4QifrNpzaDxxAvZt60Z4BiPclGfPq71PL4qST9cZV2dvciiwfODhzToq08eD6KPnOALtQbA31b2DMOd09lg6abWgha%2F%2BZ1VAoAFpU1sYpHit7buOqmh%2FqiENq0veX%2BuyDqXCPIBpL0OVU0jlczHoU2XjJL6TycM231RWtvy4iLuAV%2FC%2BumUHw9ImhMwJ8q&X-Amz-Signature=4036b7312122da73d120c4893087a2a8cf2b268315d1e9c2a0815a282e4f2c14&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55FIKFJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICPowCprm4TjFk%2BlHjwQ7jL2SSIj54agFnUJYOU4muE2AiEA9kF5ODkFBUxGipBNJD6Shb1QHvuV%2Fnz14r%2BlPisctnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIlEWVCSY5omMoeHoSrcA04jjUrcpb8cET5PJmcvJvWKhtLBA89Qhk2cyrBier52bf3PngMdGGuswqxQo3oe8LN8398xnzlBdOlZJ61gMMX0iiknLk9%2FgZ9fnJDVFbmpkFzBauinULoPqfJwzNbjSrKv52hnt%2F4gJ94kA9bjebQPUBs2xeTL5soOZwZj%2FhhBOJcJw01voYFiWpGle56xTKpzRBnfZpHVxXxvC5%2FjfzxEAjahgP9QZhzy09XIbwXXS4DC6F4ntB%2FmvPYRYTYU%2FUfIzPP%2B6qxwmQfIa9%2FL5zwDFI5GTGAhq5TsAJkqp%2B7jx7UNt0cQrD%2BsXOcN7hXVtkuIxzEN5qnWzSa3sN7tvqwYy2pnt3JHUbz65Ns%2B3GDmSC0oB3p4KY0dmqdLthIVjNVz6CAs5PjG%2FBKvl%2FmogXegXALmsIHNsafHgz4cV6oIRwcHCkwuX%2Fpt36%2BTsmKxhlbQl0bnOelT3p3en4rpT%2BrIKMk%2BpwQ3yQ327Mhh8WBD6VsLUjlyvx8kUq4yWbnunipdQMF5gRgHZZvgXegOoAmhBzYhEqEuwOVmryoZY2rVWOIlej1nGo%2FFrEGvsPrZfRwyh9oc%2FZMFsZ3HDWPbWTabn5M%2Bcj2LtK3wzPeE0Cv%2B06so3Wcn9PzJTgDIMJTiy8EGOqUBVq9aplqY2ggeC2NghZLCa6mIE7Biqp4QifrNpzaDxxAvZt60Z4BiPclGfPq71PL4qST9cZV2dvciiwfODhzToq08eD6KPnOALtQbA31b2DMOd09lg6abWgha%2F%2BZ1VAoAFpU1sYpHit7buOqmh%2FqiENq0veX%2BuyDqXCPIBpL0OVU0jlczHoU2XjJL6TycM231RWtvy4iLuAV%2FC%2BumUHw9ImhMwJ8q&X-Amz-Signature=9e4387c5e991d96a82a3f30201eaf1a837eda4c64d2d0934c6231beff1470e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55FIKFJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICPowCprm4TjFk%2BlHjwQ7jL2SSIj54agFnUJYOU4muE2AiEA9kF5ODkFBUxGipBNJD6Shb1QHvuV%2Fnz14r%2BlPisctnAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIlEWVCSY5omMoeHoSrcA04jjUrcpb8cET5PJmcvJvWKhtLBA89Qhk2cyrBier52bf3PngMdGGuswqxQo3oe8LN8398xnzlBdOlZJ61gMMX0iiknLk9%2FgZ9fnJDVFbmpkFzBauinULoPqfJwzNbjSrKv52hnt%2F4gJ94kA9bjebQPUBs2xeTL5soOZwZj%2FhhBOJcJw01voYFiWpGle56xTKpzRBnfZpHVxXxvC5%2FjfzxEAjahgP9QZhzy09XIbwXXS4DC6F4ntB%2FmvPYRYTYU%2FUfIzPP%2B6qxwmQfIa9%2FL5zwDFI5GTGAhq5TsAJkqp%2B7jx7UNt0cQrD%2BsXOcN7hXVtkuIxzEN5qnWzSa3sN7tvqwYy2pnt3JHUbz65Ns%2B3GDmSC0oB3p4KY0dmqdLthIVjNVz6CAs5PjG%2FBKvl%2FmogXegXALmsIHNsafHgz4cV6oIRwcHCkwuX%2Fpt36%2BTsmKxhlbQl0bnOelT3p3en4rpT%2BrIKMk%2BpwQ3yQ327Mhh8WBD6VsLUjlyvx8kUq4yWbnunipdQMF5gRgHZZvgXegOoAmhBzYhEqEuwOVmryoZY2rVWOIlej1nGo%2FFrEGvsPrZfRwyh9oc%2FZMFsZ3HDWPbWTabn5M%2Bcj2LtK3wzPeE0Cv%2B06so3Wcn9PzJTgDIMJTiy8EGOqUBVq9aplqY2ggeC2NghZLCa6mIE7Biqp4QifrNpzaDxxAvZt60Z4BiPclGfPq71PL4qST9cZV2dvciiwfODhzToq08eD6KPnOALtQbA31b2DMOd09lg6abWgha%2F%2BZ1VAoAFpU1sYpHit7buOqmh%2FqiENq0veX%2BuyDqXCPIBpL0OVU0jlczHoU2XjJL6TycM231RWtvy4iLuAV%2FC%2BumUHw9ImhMwJ8q&X-Amz-Signature=535292882eaee3fbac00d884147f13bba556a21c0e118d606dfea9f6a68cf916&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
