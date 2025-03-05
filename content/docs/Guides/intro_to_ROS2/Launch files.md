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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJFM66D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECjEB4sawvLHmY8oVOs5Lqh6%2B4dsM91MGl6iO4BH%2FrVAiAYc2TA%2F7t5RRM6lrY6zkz8x1oLtAdvWciFvueon6PqZir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMfpwKYpz2tQsIjO%2FJKtwDFzRsb60jUCwVxZMwn7008QH9brj2ca9HebzbXgnUwgdyAElRaaXIyJxw1yClhL5y5uBP9VZdc%2BnFvw1mTtjMpATMI%2B5cWDFHCovnPji6ok5SyB965D7Fg3uk5UGqy3YTFhExPAL0LDlKoAjlmozaIWUMOcUOhkwIacoBHC1X9gzhcw9udSIRKml9mdXZAM%2Fit%2F8%2BiW8qbB5lwYO3x4PbZkscfgGs3pfeK1wIA6%2Bgyubs97qmafV6ywPgBBerUg3t0RoMNSXUOjRT87Hb7fQRwGfxinsY5SOG5HM9RK5%2FPe34P%2Fj8OpSbnJ5ZH3O86SOOhI%2Faz21RBjZrQEY90F0%2F9x9m3q%2BWYxvMOY136j3fdjTBsyeB%2FjNemIzMhzhcY18AAYxHVxQbMM0kw25BQOihQZdDqlo0zcdqXKUuHHVZWqitvtshXTnmQVITaBToBM%2F%2BmvtlPL3Z6CVvHjxQiwlIuA2IMf7u1OWWbULM9Vsxq%2BpLrzLtb5hcHPQjTZuCxrj6R%2Fq%2BPAyJ3DDuE9WT3Y9vfEEP8a4UDeDXCAxBAW9JkecDxytxhKes4xsZgSyPa2H09Ef8OEMBc8q4zXr%2BPDzJ3dk83dNgM%2FMxSLd0OA%2FaByy%2FZ%2BOdo5v9YOyyj4Uw4ZahvgY6pgHzuKmngxiykiEyV1hj5uBBRKqpmx3gkRR7cyyWA1mWvldQzyefQ%2BM6fjUd06UZ0fWFSjiZKSUv%2BqK9oeRNPjLMUx0a1lmSmcD7k9kHhgFvbslw4Bg4TeRT027JT%2BSn8NGV%2FFSw8yFmyqqA8H72FIy9Lxqhz6ZOwR3gVeOXVup%2FwfE%2FBYxb5I18GBoa5eX5eS5UPp%2BqAo9AjUBulVQJ5itpX5XUqYUJ&X-Amz-Signature=97fcc6d8adb2758f01181b8233c6f65228175cf70f41f1743325dc314d2e7ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJFM66D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECjEB4sawvLHmY8oVOs5Lqh6%2B4dsM91MGl6iO4BH%2FrVAiAYc2TA%2F7t5RRM6lrY6zkz8x1oLtAdvWciFvueon6PqZir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMfpwKYpz2tQsIjO%2FJKtwDFzRsb60jUCwVxZMwn7008QH9brj2ca9HebzbXgnUwgdyAElRaaXIyJxw1yClhL5y5uBP9VZdc%2BnFvw1mTtjMpATMI%2B5cWDFHCovnPji6ok5SyB965D7Fg3uk5UGqy3YTFhExPAL0LDlKoAjlmozaIWUMOcUOhkwIacoBHC1X9gzhcw9udSIRKml9mdXZAM%2Fit%2F8%2BiW8qbB5lwYO3x4PbZkscfgGs3pfeK1wIA6%2Bgyubs97qmafV6ywPgBBerUg3t0RoMNSXUOjRT87Hb7fQRwGfxinsY5SOG5HM9RK5%2FPe34P%2Fj8OpSbnJ5ZH3O86SOOhI%2Faz21RBjZrQEY90F0%2F9x9m3q%2BWYxvMOY136j3fdjTBsyeB%2FjNemIzMhzhcY18AAYxHVxQbMM0kw25BQOihQZdDqlo0zcdqXKUuHHVZWqitvtshXTnmQVITaBToBM%2F%2BmvtlPL3Z6CVvHjxQiwlIuA2IMf7u1OWWbULM9Vsxq%2BpLrzLtb5hcHPQjTZuCxrj6R%2Fq%2BPAyJ3DDuE9WT3Y9vfEEP8a4UDeDXCAxBAW9JkecDxytxhKes4xsZgSyPa2H09Ef8OEMBc8q4zXr%2BPDzJ3dk83dNgM%2FMxSLd0OA%2FaByy%2FZ%2BOdo5v9YOyyj4Uw4ZahvgY6pgHzuKmngxiykiEyV1hj5uBBRKqpmx3gkRR7cyyWA1mWvldQzyefQ%2BM6fjUd06UZ0fWFSjiZKSUv%2BqK9oeRNPjLMUx0a1lmSmcD7k9kHhgFvbslw4Bg4TeRT027JT%2BSn8NGV%2FFSw8yFmyqqA8H72FIy9Lxqhz6ZOwR3gVeOXVup%2FwfE%2FBYxb5I18GBoa5eX5eS5UPp%2BqAo9AjUBulVQJ5itpX5XUqYUJ&X-Amz-Signature=ea754397b34cb699f127681ec7912b843d147a485a093050c3698b4da0dfcb26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJFM66D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECjEB4sawvLHmY8oVOs5Lqh6%2B4dsM91MGl6iO4BH%2FrVAiAYc2TA%2F7t5RRM6lrY6zkz8x1oLtAdvWciFvueon6PqZir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMfpwKYpz2tQsIjO%2FJKtwDFzRsb60jUCwVxZMwn7008QH9brj2ca9HebzbXgnUwgdyAElRaaXIyJxw1yClhL5y5uBP9VZdc%2BnFvw1mTtjMpATMI%2B5cWDFHCovnPji6ok5SyB965D7Fg3uk5UGqy3YTFhExPAL0LDlKoAjlmozaIWUMOcUOhkwIacoBHC1X9gzhcw9udSIRKml9mdXZAM%2Fit%2F8%2BiW8qbB5lwYO3x4PbZkscfgGs3pfeK1wIA6%2Bgyubs97qmafV6ywPgBBerUg3t0RoMNSXUOjRT87Hb7fQRwGfxinsY5SOG5HM9RK5%2FPe34P%2Fj8OpSbnJ5ZH3O86SOOhI%2Faz21RBjZrQEY90F0%2F9x9m3q%2BWYxvMOY136j3fdjTBsyeB%2FjNemIzMhzhcY18AAYxHVxQbMM0kw25BQOihQZdDqlo0zcdqXKUuHHVZWqitvtshXTnmQVITaBToBM%2F%2BmvtlPL3Z6CVvHjxQiwlIuA2IMf7u1OWWbULM9Vsxq%2BpLrzLtb5hcHPQjTZuCxrj6R%2Fq%2BPAyJ3DDuE9WT3Y9vfEEP8a4UDeDXCAxBAW9JkecDxytxhKes4xsZgSyPa2H09Ef8OEMBc8q4zXr%2BPDzJ3dk83dNgM%2FMxSLd0OA%2FaByy%2FZ%2BOdo5v9YOyyj4Uw4ZahvgY6pgHzuKmngxiykiEyV1hj5uBBRKqpmx3gkRR7cyyWA1mWvldQzyefQ%2BM6fjUd06UZ0fWFSjiZKSUv%2BqK9oeRNPjLMUx0a1lmSmcD7k9kHhgFvbslw4Bg4TeRT027JT%2BSn8NGV%2FFSw8yFmyqqA8H72FIy9Lxqhz6ZOwR3gVeOXVup%2FwfE%2FBYxb5I18GBoa5eX5eS5UPp%2BqAo9AjUBulVQJ5itpX5XUqYUJ&X-Amz-Signature=74fa776f308fa12f631ad8dcdc667cdff3caa8801598fdd42cc9f66e75568a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
