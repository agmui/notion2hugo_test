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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52T4UL5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFTd7uayabXq3CtgHLo%2F%2BCCHOZt22w1aXVDlU8PMoLFFAiBwaS5OfdHlZ6ek3A6BAkjLoIr7OFZNPPK8K9whzQdctiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSWvHEzoT89sxnDUdKtwDkknblmRhSWe9Fna7nDJAFEF8RfLbCiHPt3RyCx0YoLNZ1heHiDe1UyM6CmrJUsDsV56M7eqJ0kh1bhZSFeGuaSz1Aya7u3EB8pwtzn8MPAvZ6zHEiy8CbPfNnd3OzSNns72ilIBAeGurmDVw0byk1dWQxxjxRfwlhm56dmyC3aFgFBn2dyC%2B7HYv1guTen2F%2B2CQfswc%2F1pzNwdtkgofs1N2w7%2BkPw9kF1PrdYxZFwwhDhX%2FQ63wtgwgI%2BW6thGqC%2FvZNP0iBEQus6f2fw%2BJCMBjYwq2YKohOpxgbX69DK1DDoSNM02sM0VWEjXM9RrF7j5PmdAagKIFbyFSIUU9jB7lk3%2BwA80FNOkFaiLQwGhvfyGI45GQp9DjW%2BonGrJoKO06G7wRYm5Ww19L4%2ByMSBNEiMrlLYgA89bPDoNxgymMj0h420sr%2BGAzRBp%2Fzgv4z%2FjUXiXN6kWa%2FmGlQ2yJqq9a%2F58v4nyE6bUkZQY6nqXDZiNG648%2BaUZA3MxXpaLOvMjC22DxF27ag6b5TqbJO2TXcwaIuS3O2UapZMB4WG%2F4S3phjPlgTWH5C8nw%2Fu%2BwXPFAa%2FHefbUN3YsIDb7WrDmaBAdgsXc0lnueBt2RRU62ldvM4eyT8gb%2BzGgwtt6AwQY6pgHTTmq3iaM7EbydaTTbLDLZbJM45QZW8Tmdrb5uR8Wjnf8ocEuTmso21uRr%2BYqQ7TnWpqI0SYAelJyfu85IBImmtulvH8YHElMhbWe9hhYtEhEGhTJxr84sGLnJRs5OOvvMCpLJJsse2OaB%2BLBEknfM2FHdLd4oPfW6r2mfUSr7wD7i654fhpBfTBInO6nibG7RrYJ0xSnA0QrlOcYLa7lRsQZxHk6k&X-Amz-Signature=f6dd3a4667c67c468f4498b4d99f558738a09649bddba66b4d9edae07405919f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52T4UL5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFTd7uayabXq3CtgHLo%2F%2BCCHOZt22w1aXVDlU8PMoLFFAiBwaS5OfdHlZ6ek3A6BAkjLoIr7OFZNPPK8K9whzQdctiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSWvHEzoT89sxnDUdKtwDkknblmRhSWe9Fna7nDJAFEF8RfLbCiHPt3RyCx0YoLNZ1heHiDe1UyM6CmrJUsDsV56M7eqJ0kh1bhZSFeGuaSz1Aya7u3EB8pwtzn8MPAvZ6zHEiy8CbPfNnd3OzSNns72ilIBAeGurmDVw0byk1dWQxxjxRfwlhm56dmyC3aFgFBn2dyC%2B7HYv1guTen2F%2B2CQfswc%2F1pzNwdtkgofs1N2w7%2BkPw9kF1PrdYxZFwwhDhX%2FQ63wtgwgI%2BW6thGqC%2FvZNP0iBEQus6f2fw%2BJCMBjYwq2YKohOpxgbX69DK1DDoSNM02sM0VWEjXM9RrF7j5PmdAagKIFbyFSIUU9jB7lk3%2BwA80FNOkFaiLQwGhvfyGI45GQp9DjW%2BonGrJoKO06G7wRYm5Ww19L4%2ByMSBNEiMrlLYgA89bPDoNxgymMj0h420sr%2BGAzRBp%2Fzgv4z%2FjUXiXN6kWa%2FmGlQ2yJqq9a%2F58v4nyE6bUkZQY6nqXDZiNG648%2BaUZA3MxXpaLOvMjC22DxF27ag6b5TqbJO2TXcwaIuS3O2UapZMB4WG%2F4S3phjPlgTWH5C8nw%2Fu%2BwXPFAa%2FHefbUN3YsIDb7WrDmaBAdgsXc0lnueBt2RRU62ldvM4eyT8gb%2BzGgwtt6AwQY6pgHTTmq3iaM7EbydaTTbLDLZbJM45QZW8Tmdrb5uR8Wjnf8ocEuTmso21uRr%2BYqQ7TnWpqI0SYAelJyfu85IBImmtulvH8YHElMhbWe9hhYtEhEGhTJxr84sGLnJRs5OOvvMCpLJJsse2OaB%2BLBEknfM2FHdLd4oPfW6r2mfUSr7wD7i654fhpBfTBInO6nibG7RrYJ0xSnA0QrlOcYLa7lRsQZxHk6k&X-Amz-Signature=3093cfd0dd1fe2bd44bbf52e3c856158400454a8ed8dcdf751ffe13b3cbcfec4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52T4UL5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFTd7uayabXq3CtgHLo%2F%2BCCHOZt22w1aXVDlU8PMoLFFAiBwaS5OfdHlZ6ek3A6BAkjLoIr7OFZNPPK8K9whzQdctiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSWvHEzoT89sxnDUdKtwDkknblmRhSWe9Fna7nDJAFEF8RfLbCiHPt3RyCx0YoLNZ1heHiDe1UyM6CmrJUsDsV56M7eqJ0kh1bhZSFeGuaSz1Aya7u3EB8pwtzn8MPAvZ6zHEiy8CbPfNnd3OzSNns72ilIBAeGurmDVw0byk1dWQxxjxRfwlhm56dmyC3aFgFBn2dyC%2B7HYv1guTen2F%2B2CQfswc%2F1pzNwdtkgofs1N2w7%2BkPw9kF1PrdYxZFwwhDhX%2FQ63wtgwgI%2BW6thGqC%2FvZNP0iBEQus6f2fw%2BJCMBjYwq2YKohOpxgbX69DK1DDoSNM02sM0VWEjXM9RrF7j5PmdAagKIFbyFSIUU9jB7lk3%2BwA80FNOkFaiLQwGhvfyGI45GQp9DjW%2BonGrJoKO06G7wRYm5Ww19L4%2ByMSBNEiMrlLYgA89bPDoNxgymMj0h420sr%2BGAzRBp%2Fzgv4z%2FjUXiXN6kWa%2FmGlQ2yJqq9a%2F58v4nyE6bUkZQY6nqXDZiNG648%2BaUZA3MxXpaLOvMjC22DxF27ag6b5TqbJO2TXcwaIuS3O2UapZMB4WG%2F4S3phjPlgTWH5C8nw%2Fu%2BwXPFAa%2FHefbUN3YsIDb7WrDmaBAdgsXc0lnueBt2RRU62ldvM4eyT8gb%2BzGgwtt6AwQY6pgHTTmq3iaM7EbydaTTbLDLZbJM45QZW8Tmdrb5uR8Wjnf8ocEuTmso21uRr%2BYqQ7TnWpqI0SYAelJyfu85IBImmtulvH8YHElMhbWe9hhYtEhEGhTJxr84sGLnJRs5OOvvMCpLJJsse2OaB%2BLBEknfM2FHdLd4oPfW6r2mfUSr7wD7i654fhpBfTBInO6nibG7RrYJ0xSnA0QrlOcYLa7lRsQZxHk6k&X-Amz-Signature=75089dc1a407a645f3e9d7e50746953484eca747021209e448f2d2c5171d0a82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
