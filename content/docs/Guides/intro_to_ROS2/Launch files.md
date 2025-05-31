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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKP5N3FD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaI71BGB30VP0Had0tNbGoyojKMh0CHhsrAoSmzV9HdgIhAOgsLablXU%2BXGAO2bVTGiLk2kNLZ6IZbCKmF%2FlU8Bql5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygjKNN4k%2B%2B7Kg7%2BGoq3ANyY%2FFyDlN%2FX2r44k1SOxIZ%2F6Rs0k7Sa7H68rgVZQQwKqeWeKtZ6w57u%2Fg1M9WM%2FDAQmgCS7E8qku8%2Bv04NzFTtA5ksFeGQe17VhATFswkq9hfy3Umdq6PsGuexlX5KfpC2qNc0LPBV7yxdlg%2FScVlFF97u3%2B73KHHQ%2BGkPjd7K76TbgIrsR62VMpm3Jqll8WStBzpjRO47zc5CCawsjmgOJ8xfre5DrB%2BRABX%2FB5k%2BwYZp6%2FTqIt8agNBlfSPCgTg0EuT0glPgf8Rcd3zeAqpDz6ZtV9fMJkeM6httADmR5a7gfy3LbNLEx3iP%2FxonTMTnffuc5eALzLV45p8LUJy3M6%2B1gHdDY1AeQPlKGeLd7U4SCK5APq%2FjpjHXSMa0UB0b%2FIdAoOLdqezsrhwQj9NqEaXYFbRh7q8ECBwkG8BtlpXe8O0Yp7nwDJrVsx3dUwS%2FtUdmPGAVHaLPHlL%2BFo019C7cVFjzymEmxgwG0PeyI5lVK7vC6TPttCnOTRDsdxWXmOE4ulgWhTWn1DHk9IA6OyDBmrG5UA0DX3iY2jURUFmizJPc1Eky0uBlZA7Phio0zAQAv7qJzrpCcpztJsjESdXtqQ0DK1eEXx8v6r8NiHnjyu5viVx81A11ijCv8erBBjqkAfr7f8JZ39abbihbA2izYe4SeorVRHjX9gssnzxj7x99SkaJtzzmZywPRzSQm%2F2jjVp%2BUf69DpwZ5WfdmVsi9i6seSiDpVhA2xDtVhXxISqJOVIBU%2BPbEEB35dwuES5jBL1413%2BBumCvisE0SlDZU0KX0jZblTLplg608a1fk240RZ%2F5LGlR3qfPitN64k7NsQ9WKzaQhbVxEvsMQBDFnPI%2BMWeU&X-Amz-Signature=ec29b9b5ae99fbbb98f8652e75155e303dfd0275e40d58ecacd494ef581bed16&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKP5N3FD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaI71BGB30VP0Had0tNbGoyojKMh0CHhsrAoSmzV9HdgIhAOgsLablXU%2BXGAO2bVTGiLk2kNLZ6IZbCKmF%2FlU8Bql5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygjKNN4k%2B%2B7Kg7%2BGoq3ANyY%2FFyDlN%2FX2r44k1SOxIZ%2F6Rs0k7Sa7H68rgVZQQwKqeWeKtZ6w57u%2Fg1M9WM%2FDAQmgCS7E8qku8%2Bv04NzFTtA5ksFeGQe17VhATFswkq9hfy3Umdq6PsGuexlX5KfpC2qNc0LPBV7yxdlg%2FScVlFF97u3%2B73KHHQ%2BGkPjd7K76TbgIrsR62VMpm3Jqll8WStBzpjRO47zc5CCawsjmgOJ8xfre5DrB%2BRABX%2FB5k%2BwYZp6%2FTqIt8agNBlfSPCgTg0EuT0glPgf8Rcd3zeAqpDz6ZtV9fMJkeM6httADmR5a7gfy3LbNLEx3iP%2FxonTMTnffuc5eALzLV45p8LUJy3M6%2B1gHdDY1AeQPlKGeLd7U4SCK5APq%2FjpjHXSMa0UB0b%2FIdAoOLdqezsrhwQj9NqEaXYFbRh7q8ECBwkG8BtlpXe8O0Yp7nwDJrVsx3dUwS%2FtUdmPGAVHaLPHlL%2BFo019C7cVFjzymEmxgwG0PeyI5lVK7vC6TPttCnOTRDsdxWXmOE4ulgWhTWn1DHk9IA6OyDBmrG5UA0DX3iY2jURUFmizJPc1Eky0uBlZA7Phio0zAQAv7qJzrpCcpztJsjESdXtqQ0DK1eEXx8v6r8NiHnjyu5viVx81A11ijCv8erBBjqkAfr7f8JZ39abbihbA2izYe4SeorVRHjX9gssnzxj7x99SkaJtzzmZywPRzSQm%2F2jjVp%2BUf69DpwZ5WfdmVsi9i6seSiDpVhA2xDtVhXxISqJOVIBU%2BPbEEB35dwuES5jBL1413%2BBumCvisE0SlDZU0KX0jZblTLplg608a1fk240RZ%2F5LGlR3qfPitN64k7NsQ9WKzaQhbVxEvsMQBDFnPI%2BMWeU&X-Amz-Signature=a3a83532fa6294ca217eaa8179ab8fa6dc3bec249c13e425d70606a757a3c518&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKP5N3FD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaI71BGB30VP0Had0tNbGoyojKMh0CHhsrAoSmzV9HdgIhAOgsLablXU%2BXGAO2bVTGiLk2kNLZ6IZbCKmF%2FlU8Bql5KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygjKNN4k%2B%2B7Kg7%2BGoq3ANyY%2FFyDlN%2FX2r44k1SOxIZ%2F6Rs0k7Sa7H68rgVZQQwKqeWeKtZ6w57u%2Fg1M9WM%2FDAQmgCS7E8qku8%2Bv04NzFTtA5ksFeGQe17VhATFswkq9hfy3Umdq6PsGuexlX5KfpC2qNc0LPBV7yxdlg%2FScVlFF97u3%2B73KHHQ%2BGkPjd7K76TbgIrsR62VMpm3Jqll8WStBzpjRO47zc5CCawsjmgOJ8xfre5DrB%2BRABX%2FB5k%2BwYZp6%2FTqIt8agNBlfSPCgTg0EuT0glPgf8Rcd3zeAqpDz6ZtV9fMJkeM6httADmR5a7gfy3LbNLEx3iP%2FxonTMTnffuc5eALzLV45p8LUJy3M6%2B1gHdDY1AeQPlKGeLd7U4SCK5APq%2FjpjHXSMa0UB0b%2FIdAoOLdqezsrhwQj9NqEaXYFbRh7q8ECBwkG8BtlpXe8O0Yp7nwDJrVsx3dUwS%2FtUdmPGAVHaLPHlL%2BFo019C7cVFjzymEmxgwG0PeyI5lVK7vC6TPttCnOTRDsdxWXmOE4ulgWhTWn1DHk9IA6OyDBmrG5UA0DX3iY2jURUFmizJPc1Eky0uBlZA7Phio0zAQAv7qJzrpCcpztJsjESdXtqQ0DK1eEXx8v6r8NiHnjyu5viVx81A11ijCv8erBBjqkAfr7f8JZ39abbihbA2izYe4SeorVRHjX9gssnzxj7x99SkaJtzzmZywPRzSQm%2F2jjVp%2BUf69DpwZ5WfdmVsi9i6seSiDpVhA2xDtVhXxISqJOVIBU%2BPbEEB35dwuES5jBL1413%2BBumCvisE0SlDZU0KX0jZblTLplg608a1fk240RZ%2F5LGlR3qfPitN64k7NsQ9WKzaQhbVxEvsMQBDFnPI%2BMWeU&X-Amz-Signature=4d53f86896f198f185d4e858b573adef8d7b25a7854a13a09706491fe17492a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
