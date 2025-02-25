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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KCWDKH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAqNVjWUxmhm1eK4BnNY8r%2Ff1qRBia5o83q9SxO7TqYSAiEA1j3xSy%2BVUNul6amINhjAgTk7rWhg4iMceGde0OJiuqcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMZxT8XM45iMQOIARircA%2BrmNK1is%2BCmEU6ZN42uFT2IIDXfVeNiBYAyflGa7P%2BNVUy%2FNUTwZwYN1%2BQODGhMYB%2FB8N8SZ0Q9DD%2FWcnho3hwTuQ44gLDUV%2BZn1hrOtW3b3jICZlO3ACAF9IhaZfVqZV7wQvDjljctl9%2FjbEdikuWhCZn%2B5z93oo8PspZbDyGa7nPW39Z6SZp12pSe5Xkx0RlDPVSsPDTm9djNb%2BpEwNb4k0KX25tEPf5kdfpJhEFSvZGUmbHtcNrGLnT7LUyrYPzKpsaWOKsPlAu8iCWXteCcIQj%2BsR1iBPEIAoemLyYZVj5fqeviAPeBBwMg3jr8EDvu7FvvgsY7cLHgt87%2FcAFJflldu0J%2FSlrtiPt6eoCRuSFEI9yqlulVKB9CjGBqZ18RVd9kTSQ0C8sUmQDwUw9anciSlRY8EtfPXmzLXmV7J6ccuWyx%2BUX1rYPilVjf7ATaU87rktAv%2BR9cDVUvlqA3q%2BZ%2BviYV2BR4F8EIeiTf46O7bZFj17X390BZqvt34dcozguaIA8xEF7N3sDDo2CbOZ5ao7ymTk98fZUaNoKAZVsQWyOtRKuDgOnY0zVVT5%2BDAAlF1W3ow1CaEXAXonRLH9svr7eqC8dluOzyCs9aJL62dE0Jh%2FiZvkLrMNGz970GOqUBFbCckiTOvxFW2ZdfU4Mn7o6LWR%2F8%2B8JiewmFocKSyr5GbJhLqy5OcxeUmZlbNIetk6nXMLP0dbZYlIb2Ft%2F%2FR3wu9rlbDfw2VCLRweUt8eVZARvVqKTLi%2FXCmQBZN%2Fm4Zq8Ahi%2B8rzdA9a6T5D7fny3GcQG8x3iA1TSovB1MKuG1lhfYyxSQm0iISvIa7nOD6TGFutD3uHmZfV0PcYCh2WxUORJi&X-Amz-Signature=eed1e7a0b611f1c15c18747ba202e4b29eb11c3467bf78381e0edd54ef6dd9ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KCWDKH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAqNVjWUxmhm1eK4BnNY8r%2Ff1qRBia5o83q9SxO7TqYSAiEA1j3xSy%2BVUNul6amINhjAgTk7rWhg4iMceGde0OJiuqcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMZxT8XM45iMQOIARircA%2BrmNK1is%2BCmEU6ZN42uFT2IIDXfVeNiBYAyflGa7P%2BNVUy%2FNUTwZwYN1%2BQODGhMYB%2FB8N8SZ0Q9DD%2FWcnho3hwTuQ44gLDUV%2BZn1hrOtW3b3jICZlO3ACAF9IhaZfVqZV7wQvDjljctl9%2FjbEdikuWhCZn%2B5z93oo8PspZbDyGa7nPW39Z6SZp12pSe5Xkx0RlDPVSsPDTm9djNb%2BpEwNb4k0KX25tEPf5kdfpJhEFSvZGUmbHtcNrGLnT7LUyrYPzKpsaWOKsPlAu8iCWXteCcIQj%2BsR1iBPEIAoemLyYZVj5fqeviAPeBBwMg3jr8EDvu7FvvgsY7cLHgt87%2FcAFJflldu0J%2FSlrtiPt6eoCRuSFEI9yqlulVKB9CjGBqZ18RVd9kTSQ0C8sUmQDwUw9anciSlRY8EtfPXmzLXmV7J6ccuWyx%2BUX1rYPilVjf7ATaU87rktAv%2BR9cDVUvlqA3q%2BZ%2BviYV2BR4F8EIeiTf46O7bZFj17X390BZqvt34dcozguaIA8xEF7N3sDDo2CbOZ5ao7ymTk98fZUaNoKAZVsQWyOtRKuDgOnY0zVVT5%2BDAAlF1W3ow1CaEXAXonRLH9svr7eqC8dluOzyCs9aJL62dE0Jh%2FiZvkLrMNGz970GOqUBFbCckiTOvxFW2ZdfU4Mn7o6LWR%2F8%2B8JiewmFocKSyr5GbJhLqy5OcxeUmZlbNIetk6nXMLP0dbZYlIb2Ft%2F%2FR3wu9rlbDfw2VCLRweUt8eVZARvVqKTLi%2FXCmQBZN%2Fm4Zq8Ahi%2B8rzdA9a6T5D7fny3GcQG8x3iA1TSovB1MKuG1lhfYyxSQm0iISvIa7nOD6TGFutD3uHmZfV0PcYCh2WxUORJi&X-Amz-Signature=a12ff3c2002266072fda77ac265de36f6e90bdf35b9176fe8948d3ce2f1591a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KCWDKH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAqNVjWUxmhm1eK4BnNY8r%2Ff1qRBia5o83q9SxO7TqYSAiEA1j3xSy%2BVUNul6amINhjAgTk7rWhg4iMceGde0OJiuqcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMZxT8XM45iMQOIARircA%2BrmNK1is%2BCmEU6ZN42uFT2IIDXfVeNiBYAyflGa7P%2BNVUy%2FNUTwZwYN1%2BQODGhMYB%2FB8N8SZ0Q9DD%2FWcnho3hwTuQ44gLDUV%2BZn1hrOtW3b3jICZlO3ACAF9IhaZfVqZV7wQvDjljctl9%2FjbEdikuWhCZn%2B5z93oo8PspZbDyGa7nPW39Z6SZp12pSe5Xkx0RlDPVSsPDTm9djNb%2BpEwNb4k0KX25tEPf5kdfpJhEFSvZGUmbHtcNrGLnT7LUyrYPzKpsaWOKsPlAu8iCWXteCcIQj%2BsR1iBPEIAoemLyYZVj5fqeviAPeBBwMg3jr8EDvu7FvvgsY7cLHgt87%2FcAFJflldu0J%2FSlrtiPt6eoCRuSFEI9yqlulVKB9CjGBqZ18RVd9kTSQ0C8sUmQDwUw9anciSlRY8EtfPXmzLXmV7J6ccuWyx%2BUX1rYPilVjf7ATaU87rktAv%2BR9cDVUvlqA3q%2BZ%2BviYV2BR4F8EIeiTf46O7bZFj17X390BZqvt34dcozguaIA8xEF7N3sDDo2CbOZ5ao7ymTk98fZUaNoKAZVsQWyOtRKuDgOnY0zVVT5%2BDAAlF1W3ow1CaEXAXonRLH9svr7eqC8dluOzyCs9aJL62dE0Jh%2FiZvkLrMNGz970GOqUBFbCckiTOvxFW2ZdfU4Mn7o6LWR%2F8%2B8JiewmFocKSyr5GbJhLqy5OcxeUmZlbNIetk6nXMLP0dbZYlIb2Ft%2F%2FR3wu9rlbDfw2VCLRweUt8eVZARvVqKTLi%2FXCmQBZN%2Fm4Zq8Ahi%2B8rzdA9a6T5D7fny3GcQG8x3iA1TSovB1MKuG1lhfYyxSQm0iISvIa7nOD6TGFutD3uHmZfV0PcYCh2WxUORJi&X-Amz-Signature=d058a24848341dac0c9507988da9a12f3775249bca53857a2d055f4605fb8903&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
