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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQINQEU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMfy4b9Ixta6HzRpx7wa7ssJeL%2B3SSP4zO55tTI%2FrA6AiEAwXYgwUny2ve7tHvj4zjCFygYvq1FHZaAwSWwkaLP50IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIaB3x6ez0D4NPFZCrcA4rkDESM5bSxQSfGIN83PpqDWR5e4z%2FHiyRVHQpWoCSvsw0J4%2BN6jWia9L%2Fjvv27Xg4iG53%2BWMZQSN49NA%2F%2Bq5Kx673UBzJPWigyX5dfXC%2BgqtA%2BMN78e8MDJpOjlLKcubf2UjkwpY8meeDjpdN0y6WBd2IwN%2BNvfJmaqeHxm%2FI8h%2FIY8nVXHAccbZxJLaWLhTZaBuRE4ATa%2FsASZI0xi39RzLQKPwhdLWEIMR%2Fyw9tOhwVaICBqlrz%2BTVWLJPvAN15aPa%2FIGYYwjjJjRrg5BKuP%2BNN3r2BSMRCPsWXUqeyvEoBiZUbT2%2Fu8A9zmajghj0hhM7rG4XaYjW5CdNQOa93%2FsidvgLiCqlwhYk8Hlm%2BkcWIcw1uXaUoYa7YzUzacdc8m0ugMW%2Frh0DT3btkqquQZDhWI2m4rhxI7BlvkGBvsUPraAXw6kEaQleLSt2u3gqnDb5rrL%2BJm7jRkbnqhsH1%2F%2FGk%2B7UsG05ZNGwC3xIyZi1bjC%2FCcmFZBGJEtOOpO48ASp0QvzhqVAfuJrZMOwl0V3rMseRST0cYYHMFKC6uAHBOUt1ZzWqd%2F%2Fzuvk1146KI%2BQMd5IrKUeCtmmAhJEVmM7o7GVbnVKpG%2Ffn5wGlea598pSGwyvuEhhMd4MJfA0b4GOqUBjjN9FkMXwWltTIVKS%2BCmDKk6bFQUUSCecFsmXi%2Bofz9TT3HHsG0iuRHNRfyvyfUr8ekbu3EooPQwzR0DUI1fgcbga9G%2FRx%2Fv05c7aaHx%2F6I37xmkypuE7KNBenRuJzswM7Im6XOeGwfAY9pu58U5sXO2ElZfEJIxhLOFHSPMfiQMosqPi%2BBjLvZQjNgFB3qzEmXLKf9quA65erEa%2Fsibo87%2BLZNg&X-Amz-Signature=119178e04820ef91a009d8b4caa1ff675e0fa7942e388e7a431000d9386ba22c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQINQEU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMfy4b9Ixta6HzRpx7wa7ssJeL%2B3SSP4zO55tTI%2FrA6AiEAwXYgwUny2ve7tHvj4zjCFygYvq1FHZaAwSWwkaLP50IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIaB3x6ez0D4NPFZCrcA4rkDESM5bSxQSfGIN83PpqDWR5e4z%2FHiyRVHQpWoCSvsw0J4%2BN6jWia9L%2Fjvv27Xg4iG53%2BWMZQSN49NA%2F%2Bq5Kx673UBzJPWigyX5dfXC%2BgqtA%2BMN78e8MDJpOjlLKcubf2UjkwpY8meeDjpdN0y6WBd2IwN%2BNvfJmaqeHxm%2FI8h%2FIY8nVXHAccbZxJLaWLhTZaBuRE4ATa%2FsASZI0xi39RzLQKPwhdLWEIMR%2Fyw9tOhwVaICBqlrz%2BTVWLJPvAN15aPa%2FIGYYwjjJjRrg5BKuP%2BNN3r2BSMRCPsWXUqeyvEoBiZUbT2%2Fu8A9zmajghj0hhM7rG4XaYjW5CdNQOa93%2FsidvgLiCqlwhYk8Hlm%2BkcWIcw1uXaUoYa7YzUzacdc8m0ugMW%2Frh0DT3btkqquQZDhWI2m4rhxI7BlvkGBvsUPraAXw6kEaQleLSt2u3gqnDb5rrL%2BJm7jRkbnqhsH1%2F%2FGk%2B7UsG05ZNGwC3xIyZi1bjC%2FCcmFZBGJEtOOpO48ASp0QvzhqVAfuJrZMOwl0V3rMseRST0cYYHMFKC6uAHBOUt1ZzWqd%2F%2Fzuvk1146KI%2BQMd5IrKUeCtmmAhJEVmM7o7GVbnVKpG%2Ffn5wGlea598pSGwyvuEhhMd4MJfA0b4GOqUBjjN9FkMXwWltTIVKS%2BCmDKk6bFQUUSCecFsmXi%2Bofz9TT3HHsG0iuRHNRfyvyfUr8ekbu3EooPQwzR0DUI1fgcbga9G%2FRx%2Fv05c7aaHx%2F6I37xmkypuE7KNBenRuJzswM7Im6XOeGwfAY9pu58U5sXO2ElZfEJIxhLOFHSPMfiQMosqPi%2BBjLvZQjNgFB3qzEmXLKf9quA65erEa%2Fsibo87%2BLZNg&X-Amz-Signature=be3304d2438a102542fb143569e80a9ddb25aecf5aba586f8e750cd331ac0963&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQINQEU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMfy4b9Ixta6HzRpx7wa7ssJeL%2B3SSP4zO55tTI%2FrA6AiEAwXYgwUny2ve7tHvj4zjCFygYvq1FHZaAwSWwkaLP50IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIaB3x6ez0D4NPFZCrcA4rkDESM5bSxQSfGIN83PpqDWR5e4z%2FHiyRVHQpWoCSvsw0J4%2BN6jWia9L%2Fjvv27Xg4iG53%2BWMZQSN49NA%2F%2Bq5Kx673UBzJPWigyX5dfXC%2BgqtA%2BMN78e8MDJpOjlLKcubf2UjkwpY8meeDjpdN0y6WBd2IwN%2BNvfJmaqeHxm%2FI8h%2FIY8nVXHAccbZxJLaWLhTZaBuRE4ATa%2FsASZI0xi39RzLQKPwhdLWEIMR%2Fyw9tOhwVaICBqlrz%2BTVWLJPvAN15aPa%2FIGYYwjjJjRrg5BKuP%2BNN3r2BSMRCPsWXUqeyvEoBiZUbT2%2Fu8A9zmajghj0hhM7rG4XaYjW5CdNQOa93%2FsidvgLiCqlwhYk8Hlm%2BkcWIcw1uXaUoYa7YzUzacdc8m0ugMW%2Frh0DT3btkqquQZDhWI2m4rhxI7BlvkGBvsUPraAXw6kEaQleLSt2u3gqnDb5rrL%2BJm7jRkbnqhsH1%2F%2FGk%2B7UsG05ZNGwC3xIyZi1bjC%2FCcmFZBGJEtOOpO48ASp0QvzhqVAfuJrZMOwl0V3rMseRST0cYYHMFKC6uAHBOUt1ZzWqd%2F%2Fzuvk1146KI%2BQMd5IrKUeCtmmAhJEVmM7o7GVbnVKpG%2Ffn5wGlea598pSGwyvuEhhMd4MJfA0b4GOqUBjjN9FkMXwWltTIVKS%2BCmDKk6bFQUUSCecFsmXi%2Bofz9TT3HHsG0iuRHNRfyvyfUr8ekbu3EooPQwzR0DUI1fgcbga9G%2FRx%2Fv05c7aaHx%2F6I37xmkypuE7KNBenRuJzswM7Im6XOeGwfAY9pu58U5sXO2ElZfEJIxhLOFHSPMfiQMosqPi%2BBjLvZQjNgFB3qzEmXLKf9quA65erEa%2Fsibo87%2BLZNg&X-Amz-Signature=83495c95af9169fff4c6678cde0c0f29464437a42e68a9539339554e49deea8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
