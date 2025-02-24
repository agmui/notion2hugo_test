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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEDMEQH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fmj5vEq7TQ94OYwOs7kG1H%2BPw%2FgYeYZ42RVQBqutdpAiEAmrgllK2VM8WpR5HkhRGUr6V2uWDTZS%2BqP7VrWCRkOLMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFj%2BFLrE6O2EaN9bIircAw19kKi8E3q9zW3rWjVOFjqcc12pyfGKA1kbYFMzfVwfGS1Cyt%2BQb6z7iMxFQEg188URs3EQzR9SZFJwKuKcUtEtaB2xEbGRotYTdFcV8JBd62pHkynT7JFI6igG7tocPqvqmPBvnAm2BudmsWOUkNaxABcTj1mrP0xXDvdxZc7n1YLMge%2BZq0kYbV1p4KZ2xa8l%2FtckQ5kUXlu9GGpc8SbfFUt8ZJqxz1mJKoIgvO9oGd%2Fz5RIS49mmSjxOHjLm3ZzCZ6UtOJ5RdZgNYPIhG4ARJeajvTWseqfU%2F%2BS%2FskLZvmkixroslExhVyU1iWQ6EkjI8O7EEZh3cQ2heqO%2FFsSmfxJxaVqhBGXLz0dgVpi4PBUQjL1Jn4CpfbO7wKFShR8QsPW%2FM%2B3R049Ls2iVFST8b91kgcaEGMiTS0LQOoyf4WnJjgdXbsAxocHg%2BmQiOGJAm5RyvMAfSchydQ9yowfmPxirA6D2J%2BRIVksXS3t1LQNZfPSpVWDQ%2F2c7XO3k1oZDVHUnrTa22K%2BvpHvpHasaHbzuXIfGasHhRXQFXdZWmR2m3w002tLcitPJUXQa6u4c9fPr1vYy8Uf9aianLkCg4Et2pYI3yMTWcT7rSAWu3E9W%2BWRpy%2FqxnKSIMM%2BM8b0GOqUBbD3%2FNC3%2FvR6oTDKgBU7LNUKjxupQFV1z9n4V3nmZBQPvq4lNsJnaqc0NrpAZqVC5MtgSeQXzjzVzzPzTiO6miQF6%2BRdGoPu5z1TOShk1RwtTgCzcIoxoxCwU2P%2Bu%2BJ%2BqSEVCCE1XORFjmF08QHv%2FREVHi7WhFRYsIHFBYuoeISaLh5UytBwZ%2Bkkw8bJsr9zYcomH12zLZNJJnqcvS0XCIKgevVni&X-Amz-Signature=321c80ade9248987d3fbddc6673b81b81406bfdf02704226e04206e67756f022&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEDMEQH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fmj5vEq7TQ94OYwOs7kG1H%2BPw%2FgYeYZ42RVQBqutdpAiEAmrgllK2VM8WpR5HkhRGUr6V2uWDTZS%2BqP7VrWCRkOLMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFj%2BFLrE6O2EaN9bIircAw19kKi8E3q9zW3rWjVOFjqcc12pyfGKA1kbYFMzfVwfGS1Cyt%2BQb6z7iMxFQEg188URs3EQzR9SZFJwKuKcUtEtaB2xEbGRotYTdFcV8JBd62pHkynT7JFI6igG7tocPqvqmPBvnAm2BudmsWOUkNaxABcTj1mrP0xXDvdxZc7n1YLMge%2BZq0kYbV1p4KZ2xa8l%2FtckQ5kUXlu9GGpc8SbfFUt8ZJqxz1mJKoIgvO9oGd%2Fz5RIS49mmSjxOHjLm3ZzCZ6UtOJ5RdZgNYPIhG4ARJeajvTWseqfU%2F%2BS%2FskLZvmkixroslExhVyU1iWQ6EkjI8O7EEZh3cQ2heqO%2FFsSmfxJxaVqhBGXLz0dgVpi4PBUQjL1Jn4CpfbO7wKFShR8QsPW%2FM%2B3R049Ls2iVFST8b91kgcaEGMiTS0LQOoyf4WnJjgdXbsAxocHg%2BmQiOGJAm5RyvMAfSchydQ9yowfmPxirA6D2J%2BRIVksXS3t1LQNZfPSpVWDQ%2F2c7XO3k1oZDVHUnrTa22K%2BvpHvpHasaHbzuXIfGasHhRXQFXdZWmR2m3w002tLcitPJUXQa6u4c9fPr1vYy8Uf9aianLkCg4Et2pYI3yMTWcT7rSAWu3E9W%2BWRpy%2FqxnKSIMM%2BM8b0GOqUBbD3%2FNC3%2FvR6oTDKgBU7LNUKjxupQFV1z9n4V3nmZBQPvq4lNsJnaqc0NrpAZqVC5MtgSeQXzjzVzzPzTiO6miQF6%2BRdGoPu5z1TOShk1RwtTgCzcIoxoxCwU2P%2Bu%2BJ%2BqSEVCCE1XORFjmF08QHv%2FREVHi7WhFRYsIHFBYuoeISaLh5UytBwZ%2Bkkw8bJsr9zYcomH12zLZNJJnqcvS0XCIKgevVni&X-Amz-Signature=db8a408a152e729aed9b8607506eca234c6a6f24f8e72e5bc10a771bbb66bf91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEDMEQH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fmj5vEq7TQ94OYwOs7kG1H%2BPw%2FgYeYZ42RVQBqutdpAiEAmrgllK2VM8WpR5HkhRGUr6V2uWDTZS%2BqP7VrWCRkOLMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFj%2BFLrE6O2EaN9bIircAw19kKi8E3q9zW3rWjVOFjqcc12pyfGKA1kbYFMzfVwfGS1Cyt%2BQb6z7iMxFQEg188URs3EQzR9SZFJwKuKcUtEtaB2xEbGRotYTdFcV8JBd62pHkynT7JFI6igG7tocPqvqmPBvnAm2BudmsWOUkNaxABcTj1mrP0xXDvdxZc7n1YLMge%2BZq0kYbV1p4KZ2xa8l%2FtckQ5kUXlu9GGpc8SbfFUt8ZJqxz1mJKoIgvO9oGd%2Fz5RIS49mmSjxOHjLm3ZzCZ6UtOJ5RdZgNYPIhG4ARJeajvTWseqfU%2F%2BS%2FskLZvmkixroslExhVyU1iWQ6EkjI8O7EEZh3cQ2heqO%2FFsSmfxJxaVqhBGXLz0dgVpi4PBUQjL1Jn4CpfbO7wKFShR8QsPW%2FM%2B3R049Ls2iVFST8b91kgcaEGMiTS0LQOoyf4WnJjgdXbsAxocHg%2BmQiOGJAm5RyvMAfSchydQ9yowfmPxirA6D2J%2BRIVksXS3t1LQNZfPSpVWDQ%2F2c7XO3k1oZDVHUnrTa22K%2BvpHvpHasaHbzuXIfGasHhRXQFXdZWmR2m3w002tLcitPJUXQa6u4c9fPr1vYy8Uf9aianLkCg4Et2pYI3yMTWcT7rSAWu3E9W%2BWRpy%2FqxnKSIMM%2BM8b0GOqUBbD3%2FNC3%2FvR6oTDKgBU7LNUKjxupQFV1z9n4V3nmZBQPvq4lNsJnaqc0NrpAZqVC5MtgSeQXzjzVzzPzTiO6miQF6%2BRdGoPu5z1TOShk1RwtTgCzcIoxoxCwU2P%2Bu%2BJ%2BqSEVCCE1XORFjmF08QHv%2FREVHi7WhFRYsIHFBYuoeISaLh5UytBwZ%2Bkkw8bJsr9zYcomH12zLZNJJnqcvS0XCIKgevVni&X-Amz-Signature=6881bb0c0b6b909b44eeda5deac6e764d30302409213562d322f3b5c58c3c3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
