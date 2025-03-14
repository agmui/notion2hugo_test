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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPNBW5T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRYppjsNRpo8doQpLNUBYzRCcbrqfJSa9PeilIWl0FAwIgQ78sP7DQEE4%2FSfRvyCwWuBbVIaPFjCLtnQfDRU4JW0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPwN90%2FTK5TrJL5vCrcA7SNb1eytpB%2BL4QVrOmQ4bectZOJSNyismP3kkgs%2BJylqdD22xpJPrL5QJRN6mdoCiLLa%2BT5w8zfWoGcEbNtIbWW2%2F%2FP8EfCUDBASYkKPFDXJUrlMTeqcZXutTtCGm%2BwfilSumcI3yzXhLQtDajFqpLakpOGwiDHZP0khNpa1tC0B%2BheZhs%2FSVRfT8JU2uy%2F4vxtz4rQitK8cun2jV%2F8VFWB9krekIACzcuJDx4K%2FLGyzRBcu2OxhIpWnHHBmup9MjkOqYOC3tj8w1xr5iuCyt%2Bw%2FxdrQldj9iH%2Bd5tHitGhsSgf855CG4UIY1DIyy7Rm7Nk639XeIdiF10yYPUvDLkv7IY0RCYhl0y17DbJLYsBfYkrDx2NL4%2Bvnsi9oXH7CWdBAGxW4FYSndXYTXNx78FxPH3moeMNUhk2xnZQLRjH2PhEviezioy1TMdJJQjC5cdkP%2FSkkHtP3YA05wLximjxp1BRGTLiuptr1pYk%2Bpii6GK8%2FRMxc1HGGxabpXrF7k05zupvg70NGSl15VAoYbN3mC8zEP1gbr%2FGZXEPL6Ri5HrkJwTwVcxLS%2FUqChgL%2BNYbzefGgpkKSkKENrJ5g%2FOFsLYxHr4bQXVv1Y1%2FsxjzQbLnJzbUmfFWktPPMPm40L4GOqUBjxPV%2FzqTQci0PgMxdfH6jWI%2Bz%2BD6PojRjYiAHk6gpgGUw8aN7vhEEjLyvbf6IcqaodPPAW16Ac5WWrcQT%2F6zmXT6htt%2B8VRKrAyZZqX4WZaaoIW8Po1zs8EGOpMHofHcysGr4DaEWkrgeTLwUGdov26NDvC0%2Folkgyo2faCTeVJ6Q5%2BnI%2FFZwO7neiAWwSrN5Et3j77BK2w5wwbJ3%2Fioo6oxQeEY&X-Amz-Signature=a54cc1d77470c2d130bceae5789c7f9f2dce54d9be4810917a0355c5108c82ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPNBW5T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRYppjsNRpo8doQpLNUBYzRCcbrqfJSa9PeilIWl0FAwIgQ78sP7DQEE4%2FSfRvyCwWuBbVIaPFjCLtnQfDRU4JW0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPwN90%2FTK5TrJL5vCrcA7SNb1eytpB%2BL4QVrOmQ4bectZOJSNyismP3kkgs%2BJylqdD22xpJPrL5QJRN6mdoCiLLa%2BT5w8zfWoGcEbNtIbWW2%2F%2FP8EfCUDBASYkKPFDXJUrlMTeqcZXutTtCGm%2BwfilSumcI3yzXhLQtDajFqpLakpOGwiDHZP0khNpa1tC0B%2BheZhs%2FSVRfT8JU2uy%2F4vxtz4rQitK8cun2jV%2F8VFWB9krekIACzcuJDx4K%2FLGyzRBcu2OxhIpWnHHBmup9MjkOqYOC3tj8w1xr5iuCyt%2Bw%2FxdrQldj9iH%2Bd5tHitGhsSgf855CG4UIY1DIyy7Rm7Nk639XeIdiF10yYPUvDLkv7IY0RCYhl0y17DbJLYsBfYkrDx2NL4%2Bvnsi9oXH7CWdBAGxW4FYSndXYTXNx78FxPH3moeMNUhk2xnZQLRjH2PhEviezioy1TMdJJQjC5cdkP%2FSkkHtP3YA05wLximjxp1BRGTLiuptr1pYk%2Bpii6GK8%2FRMxc1HGGxabpXrF7k05zupvg70NGSl15VAoYbN3mC8zEP1gbr%2FGZXEPL6Ri5HrkJwTwVcxLS%2FUqChgL%2BNYbzefGgpkKSkKENrJ5g%2FOFsLYxHr4bQXVv1Y1%2FsxjzQbLnJzbUmfFWktPPMPm40L4GOqUBjxPV%2FzqTQci0PgMxdfH6jWI%2Bz%2BD6PojRjYiAHk6gpgGUw8aN7vhEEjLyvbf6IcqaodPPAW16Ac5WWrcQT%2F6zmXT6htt%2B8VRKrAyZZqX4WZaaoIW8Po1zs8EGOpMHofHcysGr4DaEWkrgeTLwUGdov26NDvC0%2Folkgyo2faCTeVJ6Q5%2BnI%2FFZwO7neiAWwSrN5Et3j77BK2w5wwbJ3%2Fioo6oxQeEY&X-Amz-Signature=d9138b5519d9183a7df1dc2e12e9819648497f6f9cf3a4ae6f766c47ae7a076f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPNBW5T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRYppjsNRpo8doQpLNUBYzRCcbrqfJSa9PeilIWl0FAwIgQ78sP7DQEE4%2FSfRvyCwWuBbVIaPFjCLtnQfDRU4JW0AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPwN90%2FTK5TrJL5vCrcA7SNb1eytpB%2BL4QVrOmQ4bectZOJSNyismP3kkgs%2BJylqdD22xpJPrL5QJRN6mdoCiLLa%2BT5w8zfWoGcEbNtIbWW2%2F%2FP8EfCUDBASYkKPFDXJUrlMTeqcZXutTtCGm%2BwfilSumcI3yzXhLQtDajFqpLakpOGwiDHZP0khNpa1tC0B%2BheZhs%2FSVRfT8JU2uy%2F4vxtz4rQitK8cun2jV%2F8VFWB9krekIACzcuJDx4K%2FLGyzRBcu2OxhIpWnHHBmup9MjkOqYOC3tj8w1xr5iuCyt%2Bw%2FxdrQldj9iH%2Bd5tHitGhsSgf855CG4UIY1DIyy7Rm7Nk639XeIdiF10yYPUvDLkv7IY0RCYhl0y17DbJLYsBfYkrDx2NL4%2Bvnsi9oXH7CWdBAGxW4FYSndXYTXNx78FxPH3moeMNUhk2xnZQLRjH2PhEviezioy1TMdJJQjC5cdkP%2FSkkHtP3YA05wLximjxp1BRGTLiuptr1pYk%2Bpii6GK8%2FRMxc1HGGxabpXrF7k05zupvg70NGSl15VAoYbN3mC8zEP1gbr%2FGZXEPL6Ri5HrkJwTwVcxLS%2FUqChgL%2BNYbzefGgpkKSkKENrJ5g%2FOFsLYxHr4bQXVv1Y1%2FsxjzQbLnJzbUmfFWktPPMPm40L4GOqUBjxPV%2FzqTQci0PgMxdfH6jWI%2Bz%2BD6PojRjYiAHk6gpgGUw8aN7vhEEjLyvbf6IcqaodPPAW16Ac5WWrcQT%2F6zmXT6htt%2B8VRKrAyZZqX4WZaaoIW8Po1zs8EGOpMHofHcysGr4DaEWkrgeTLwUGdov26NDvC0%2Folkgyo2faCTeVJ6Q5%2BnI%2FFZwO7neiAWwSrN5Et3j77BK2w5wwbJ3%2Fioo6oxQeEY&X-Amz-Signature=43f58ae39e4411949495bce2ad89af7997da55a4588f35454e36b968bf232bce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
