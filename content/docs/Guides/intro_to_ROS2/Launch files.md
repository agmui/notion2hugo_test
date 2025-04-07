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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIMJUGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH4INULihZAg8kEWW1p61gbttlf55iPTdKZBIveC%2F7rwIhAORehfTTEYvLkYR4C1PU%2Fq0d%2BwbpdIcsf7tZZysTXD01Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxytVUVtWrhkX9x%2FB8q3APdsQWzs6flI84poIWDOvJUxNieNKoHYY%2Bkxg735OmvZ9D7u1A76%2FGcrY8mv0GPt%2Br9QLVKbjv6tO3FcJ%2FQNktAl9Kiwtru9W3I99TWM8BOd7i2NuTqeVi1Z9UcHrVQ%2FjTFdc3t01Lh%2FK%2FTJ2fkpWng%2BFMulkBQTJ0CdlocyroaKmQKDg7cX1lf2VykDcdn8AfmTRWlZtBkiw0W5ei3Q%2FutsUsPbXHZFB3YQX2oEpKkqej%2BOu67oP%2Bh6MVhUYor0A0s%2FZW8kEhESKD6ZJFq38YarjmCOpYPvCPOZ0f9e7dp%2FlxyJyya%2BQGJ9O%2BcdJzVEQAJLCAAtZm4E1eIpg1ZXt2sN4MH%2FzXTqtnmmf3NtDBrRlDHjm1gsPcNJ4ELpBpnoWJUpBF5dqfQXHjAJZYy4sClEp2rkfMzBDluu8m2XzPjVagVJ9odmjOB6UH2m1%2F59ocHobX%2BwtXRDoNIN3Ghq2e8N1G5QUuChjTbpmbLYiuiScjN9tyetqTOYN%2BDHJeWVE73aks2dQZ1BYimgQIRJPVMHsabrZ229y38gdisxZAEZVxSuw24EBplLVy7gPSVgHOKw6rPRYzLrLBJRwPNQUknaG6Cqpj7TekPLNZHBSjuABcU4kKwe6VpFpXfNTCroc6%2FBjqkATLBwabVoA3lxWGLs%2BapRCGIIz5xLsCdioM0wm2%2BTdvvhFEUR7rAKEn8GCrJNpPrJ4lfLkBzK7naosTC2vzXHvLosW7DeQ23EMbIVJz3anTAI1umbfI1lXp7r7lOAK1y5kwPnuv0X6J0%2BiTr1Qa4OsjPk%2BiLjYcogLV7yu8Xx9ZnYNJnYdg79QsxBJOfkto%2F%2BdUgxchO4WqYvVuYdK86jByTFCmQ&X-Amz-Signature=445a6fbbaa500c8cc8ad278e419e18e2c577f5beed7c1485ae1ec26733970000&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIMJUGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH4INULihZAg8kEWW1p61gbttlf55iPTdKZBIveC%2F7rwIhAORehfTTEYvLkYR4C1PU%2Fq0d%2BwbpdIcsf7tZZysTXD01Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxytVUVtWrhkX9x%2FB8q3APdsQWzs6flI84poIWDOvJUxNieNKoHYY%2Bkxg735OmvZ9D7u1A76%2FGcrY8mv0GPt%2Br9QLVKbjv6tO3FcJ%2FQNktAl9Kiwtru9W3I99TWM8BOd7i2NuTqeVi1Z9UcHrVQ%2FjTFdc3t01Lh%2FK%2FTJ2fkpWng%2BFMulkBQTJ0CdlocyroaKmQKDg7cX1lf2VykDcdn8AfmTRWlZtBkiw0W5ei3Q%2FutsUsPbXHZFB3YQX2oEpKkqej%2BOu67oP%2Bh6MVhUYor0A0s%2FZW8kEhESKD6ZJFq38YarjmCOpYPvCPOZ0f9e7dp%2FlxyJyya%2BQGJ9O%2BcdJzVEQAJLCAAtZm4E1eIpg1ZXt2sN4MH%2FzXTqtnmmf3NtDBrRlDHjm1gsPcNJ4ELpBpnoWJUpBF5dqfQXHjAJZYy4sClEp2rkfMzBDluu8m2XzPjVagVJ9odmjOB6UH2m1%2F59ocHobX%2BwtXRDoNIN3Ghq2e8N1G5QUuChjTbpmbLYiuiScjN9tyetqTOYN%2BDHJeWVE73aks2dQZ1BYimgQIRJPVMHsabrZ229y38gdisxZAEZVxSuw24EBplLVy7gPSVgHOKw6rPRYzLrLBJRwPNQUknaG6Cqpj7TekPLNZHBSjuABcU4kKwe6VpFpXfNTCroc6%2FBjqkATLBwabVoA3lxWGLs%2BapRCGIIz5xLsCdioM0wm2%2BTdvvhFEUR7rAKEn8GCrJNpPrJ4lfLkBzK7naosTC2vzXHvLosW7DeQ23EMbIVJz3anTAI1umbfI1lXp7r7lOAK1y5kwPnuv0X6J0%2BiTr1Qa4OsjPk%2BiLjYcogLV7yu8Xx9ZnYNJnYdg79QsxBJOfkto%2F%2BdUgxchO4WqYvVuYdK86jByTFCmQ&X-Amz-Signature=54d5aaa433709a0cd3b136edb73471119a580880bb9a755c9dc1e6182d9f5bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIMJUGA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH4INULihZAg8kEWW1p61gbttlf55iPTdKZBIveC%2F7rwIhAORehfTTEYvLkYR4C1PU%2Fq0d%2BwbpdIcsf7tZZysTXD01Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxytVUVtWrhkX9x%2FB8q3APdsQWzs6flI84poIWDOvJUxNieNKoHYY%2Bkxg735OmvZ9D7u1A76%2FGcrY8mv0GPt%2Br9QLVKbjv6tO3FcJ%2FQNktAl9Kiwtru9W3I99TWM8BOd7i2NuTqeVi1Z9UcHrVQ%2FjTFdc3t01Lh%2FK%2FTJ2fkpWng%2BFMulkBQTJ0CdlocyroaKmQKDg7cX1lf2VykDcdn8AfmTRWlZtBkiw0W5ei3Q%2FutsUsPbXHZFB3YQX2oEpKkqej%2BOu67oP%2Bh6MVhUYor0A0s%2FZW8kEhESKD6ZJFq38YarjmCOpYPvCPOZ0f9e7dp%2FlxyJyya%2BQGJ9O%2BcdJzVEQAJLCAAtZm4E1eIpg1ZXt2sN4MH%2FzXTqtnmmf3NtDBrRlDHjm1gsPcNJ4ELpBpnoWJUpBF5dqfQXHjAJZYy4sClEp2rkfMzBDluu8m2XzPjVagVJ9odmjOB6UH2m1%2F59ocHobX%2BwtXRDoNIN3Ghq2e8N1G5QUuChjTbpmbLYiuiScjN9tyetqTOYN%2BDHJeWVE73aks2dQZ1BYimgQIRJPVMHsabrZ229y38gdisxZAEZVxSuw24EBplLVy7gPSVgHOKw6rPRYzLrLBJRwPNQUknaG6Cqpj7TekPLNZHBSjuABcU4kKwe6VpFpXfNTCroc6%2FBjqkATLBwabVoA3lxWGLs%2BapRCGIIz5xLsCdioM0wm2%2BTdvvhFEUR7rAKEn8GCrJNpPrJ4lfLkBzK7naosTC2vzXHvLosW7DeQ23EMbIVJz3anTAI1umbfI1lXp7r7lOAK1y5kwPnuv0X6J0%2BiTr1Qa4OsjPk%2BiLjYcogLV7yu8Xx9ZnYNJnYdg79QsxBJOfkto%2F%2BdUgxchO4WqYvVuYdK86jByTFCmQ&X-Amz-Signature=3c194d86d9c7c385c4cc1b53254d5fee39c33db40d8e60a0d653342a781ad2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
