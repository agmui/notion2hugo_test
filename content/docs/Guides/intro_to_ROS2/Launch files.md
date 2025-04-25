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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIK5M46%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDog2%2FBVe42jIGOBFtP19vOm996UkwBBg2ms5HabQdSNAiEAhSKKJA%2B2aUwZY0FOQw9%2BqJwOLX99WuJooJn4E3Oe7Msq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2B94pDfNs6YJ4X%2FyCrcA6wWlYQCtWhdbWbKVwtCoNBQmKQot%2F3%2BOlCqtQXObQLFBJorSRs8Q00Y95QjBDV%2BQx04VM6DMGdJOu6uQWQiGY4tMHvLBCsASQEx6vWMwceY2T8pilFyMzI9LE1Aj8FhjsBeTHUeYTmkuwBVWSgL7WKof9wvoTjDY%2FSgQOMZnsA4W2nX48gJgqTUHlFt581qfj10ezhKo1XlUIkSHm25Z0Ov20aXlYzydg0RKahgvUf0uAvbyct7Gk7HpAarn1pzIngjz86iGwT6uu6iW9teT%2B0kHamNOuEYEa38OlsjGxA7hG8am2DhprNt5JNsIaDS%2BXiD7in62FcxrgBuM%2FitX%2Bp%2FNmqjLqdCbSqQVEgLZFGA2KEXS7%2FL410aISCp1JhURIQLMLD7%2F1Io%2B%2FTZktUmxpCd%2Fcm%2Fj2UenxS3ASPkFnVzBpZ7mYL%2BS6TdzM2QoO9MJ9C%2FNwuC6QfJWV2LfJJOmWnaTIuyewxfXn%2BfTbYa9Po8Z61%2BEr8z%2BWRBtd0jHDjorpZUXGIuWm8BL6C0Vsaew1Lpfy3Lk63RZJ0t1kzpI1PyFEqw%2F11PTSYvseJBo93xkue3Xa3GVGL6a%2FPycc5nX9Ssw0fl29VYZVfqNCTXVzgY%2FvlQyFHWNwtXQWinMOyVrMAGOqUBWIO%2BylkwrYgrTd93l1U6qw4eyJo8rK8Kl7af0ERfDGnNtr0IBJug0pmHl39%2BsplFUfCiLFfpG9itO2BnkympOrL8q%2Fac32AYb%2FmOpzsD8%2F6VnJcoPSHnGV4wNYX0VDoLsmXj%2BSl8mLKKNzw9yC9rdthzDhYiG8UUrHJJVtSTBvJBJ7Rkr%2BZU8cJAzUcC0BQGegiZyxB%2B3LtXryS0HvEmM2bAT0O1&X-Amz-Signature=513101ef16a49e56d0a38d140c26ddacba8f908987cfe750fed89a603f4a8644&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIK5M46%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDog2%2FBVe42jIGOBFtP19vOm996UkwBBg2ms5HabQdSNAiEAhSKKJA%2B2aUwZY0FOQw9%2BqJwOLX99WuJooJn4E3Oe7Msq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2B94pDfNs6YJ4X%2FyCrcA6wWlYQCtWhdbWbKVwtCoNBQmKQot%2F3%2BOlCqtQXObQLFBJorSRs8Q00Y95QjBDV%2BQx04VM6DMGdJOu6uQWQiGY4tMHvLBCsASQEx6vWMwceY2T8pilFyMzI9LE1Aj8FhjsBeTHUeYTmkuwBVWSgL7WKof9wvoTjDY%2FSgQOMZnsA4W2nX48gJgqTUHlFt581qfj10ezhKo1XlUIkSHm25Z0Ov20aXlYzydg0RKahgvUf0uAvbyct7Gk7HpAarn1pzIngjz86iGwT6uu6iW9teT%2B0kHamNOuEYEa38OlsjGxA7hG8am2DhprNt5JNsIaDS%2BXiD7in62FcxrgBuM%2FitX%2Bp%2FNmqjLqdCbSqQVEgLZFGA2KEXS7%2FL410aISCp1JhURIQLMLD7%2F1Io%2B%2FTZktUmxpCd%2Fcm%2Fj2UenxS3ASPkFnVzBpZ7mYL%2BS6TdzM2QoO9MJ9C%2FNwuC6QfJWV2LfJJOmWnaTIuyewxfXn%2BfTbYa9Po8Z61%2BEr8z%2BWRBtd0jHDjorpZUXGIuWm8BL6C0Vsaew1Lpfy3Lk63RZJ0t1kzpI1PyFEqw%2F11PTSYvseJBo93xkue3Xa3GVGL6a%2FPycc5nX9Ssw0fl29VYZVfqNCTXVzgY%2FvlQyFHWNwtXQWinMOyVrMAGOqUBWIO%2BylkwrYgrTd93l1U6qw4eyJo8rK8Kl7af0ERfDGnNtr0IBJug0pmHl39%2BsplFUfCiLFfpG9itO2BnkympOrL8q%2Fac32AYb%2FmOpzsD8%2F6VnJcoPSHnGV4wNYX0VDoLsmXj%2BSl8mLKKNzw9yC9rdthzDhYiG8UUrHJJVtSTBvJBJ7Rkr%2BZU8cJAzUcC0BQGegiZyxB%2B3LtXryS0HvEmM2bAT0O1&X-Amz-Signature=4dd414c8a9e292a621ae6ca89ed9c529851a8ced6320166c96ae93a5f0884cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIK5M46%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDog2%2FBVe42jIGOBFtP19vOm996UkwBBg2ms5HabQdSNAiEAhSKKJA%2B2aUwZY0FOQw9%2BqJwOLX99WuJooJn4E3Oe7Msq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO%2B94pDfNs6YJ4X%2FyCrcA6wWlYQCtWhdbWbKVwtCoNBQmKQot%2F3%2BOlCqtQXObQLFBJorSRs8Q00Y95QjBDV%2BQx04VM6DMGdJOu6uQWQiGY4tMHvLBCsASQEx6vWMwceY2T8pilFyMzI9LE1Aj8FhjsBeTHUeYTmkuwBVWSgL7WKof9wvoTjDY%2FSgQOMZnsA4W2nX48gJgqTUHlFt581qfj10ezhKo1XlUIkSHm25Z0Ov20aXlYzydg0RKahgvUf0uAvbyct7Gk7HpAarn1pzIngjz86iGwT6uu6iW9teT%2B0kHamNOuEYEa38OlsjGxA7hG8am2DhprNt5JNsIaDS%2BXiD7in62FcxrgBuM%2FitX%2Bp%2FNmqjLqdCbSqQVEgLZFGA2KEXS7%2FL410aISCp1JhURIQLMLD7%2F1Io%2B%2FTZktUmxpCd%2Fcm%2Fj2UenxS3ASPkFnVzBpZ7mYL%2BS6TdzM2QoO9MJ9C%2FNwuC6QfJWV2LfJJOmWnaTIuyewxfXn%2BfTbYa9Po8Z61%2BEr8z%2BWRBtd0jHDjorpZUXGIuWm8BL6C0Vsaew1Lpfy3Lk63RZJ0t1kzpI1PyFEqw%2F11PTSYvseJBo93xkue3Xa3GVGL6a%2FPycc5nX9Ssw0fl29VYZVfqNCTXVzgY%2FvlQyFHWNwtXQWinMOyVrMAGOqUBWIO%2BylkwrYgrTd93l1U6qw4eyJo8rK8Kl7af0ERfDGnNtr0IBJug0pmHl39%2BsplFUfCiLFfpG9itO2BnkympOrL8q%2Fac32AYb%2FmOpzsD8%2F6VnJcoPSHnGV4wNYX0VDoLsmXj%2BSl8mLKKNzw9yC9rdthzDhYiG8UUrHJJVtSTBvJBJ7Rkr%2BZU8cJAzUcC0BQGegiZyxB%2B3LtXryS0HvEmM2bAT0O1&X-Amz-Signature=d516e48a7c4b187633060520cadd06d549b561a390a9323b2d2252ae793969e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
