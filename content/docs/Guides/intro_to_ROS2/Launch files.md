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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7QZJ3K%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwG0t5jp%2BmqWOlD7xIBYLCX6S6cSuCJoElDDrunXZquQIhANF1L0tQmLM7gBPQvw9E1CWHVz%2Fsicwgnu%2Fq03EsX%2BpQKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNnTzuZKL8mnTc9Ekq3AOKO3oG7CWy6w1XOiMIrLjvaldOWmV6WSl5VrFPNisTolJArx6u3EXkxKkSwiImHS1YCAAGfF%2F8uiOrK1pekWo%2BSr1CnS6o8npooVJjQ85f5sR4jTHJZkMJraOlk%2BqGG6jlra2NEUBoW9zrFcWkexd0vOKtNO6WvfVh1lpaEHqpG4nA%2BfNRJalPhM3t6FL5qWfY9XIfLZmYEMhIPuo2b4S%2BWPXobHs04HDeneKx%2B81FqDFlrj6qZCMbTOrX6d8JnRfLbyUB5Dd5Uaj93XVlREt14QadoyscGHcxDwv%2B%2BY5BY95%2BonjtwmJNGjmqigDlSBjQvVen6sxr1lAB4Z1XEmsvVzEGlYnWavZgEgr2K3p3jRoO23OiK8CpK9sFM1IdVpr4QGeVKAImX%2BD4I5FcURdEorEYhzZkEdsgmtoW6a5%2FMiIfI4cKN2P65cLIUpzPL9On2uHP5a5IO9gjBt7P0rPzuhzSP6d992%2F%2FfwdiZ5hSxIkwqPLl5Y8pcUuBQqmYQY2AnnquqODJHyOK466SWKLpS5%2BTSj3LZaQrsKxOEZCcwM25n0qGr0o%2B%2FVkntDTAkKvppSbX0BMb6cLYLl9rKG7Ser6H8l9dAG7SsaZNpY7wrJwkFs569qkoHoIXqDCZ08LDBjqkAa0KvSaekbomxA8V09kPAh2se8g8Hvos3czRoPSADuIQWZ47lN1FM%2BYKcg%2BrPifeGYZEcM%2Bd98bpdy8KnNLlDH3bo3lRajrlcJ2QrCyEZOclygoJ06QekIrwKBCOwpqJ8yQGEc2%2F%2FN0J55mJfZbNy9zvTcKeAq3qZbeornZXX1AJgcGqgK0RFtWQVNBo5benCG8Fj6gqc2Bm8loOo58e2iQUPqPH&X-Amz-Signature=929a8d38ba4689c42a4610c30cddb3d1053b900eab80a60973deb554b00fc669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7QZJ3K%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwG0t5jp%2BmqWOlD7xIBYLCX6S6cSuCJoElDDrunXZquQIhANF1L0tQmLM7gBPQvw9E1CWHVz%2Fsicwgnu%2Fq03EsX%2BpQKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNnTzuZKL8mnTc9Ekq3AOKO3oG7CWy6w1XOiMIrLjvaldOWmV6WSl5VrFPNisTolJArx6u3EXkxKkSwiImHS1YCAAGfF%2F8uiOrK1pekWo%2BSr1CnS6o8npooVJjQ85f5sR4jTHJZkMJraOlk%2BqGG6jlra2NEUBoW9zrFcWkexd0vOKtNO6WvfVh1lpaEHqpG4nA%2BfNRJalPhM3t6FL5qWfY9XIfLZmYEMhIPuo2b4S%2BWPXobHs04HDeneKx%2B81FqDFlrj6qZCMbTOrX6d8JnRfLbyUB5Dd5Uaj93XVlREt14QadoyscGHcxDwv%2B%2BY5BY95%2BonjtwmJNGjmqigDlSBjQvVen6sxr1lAB4Z1XEmsvVzEGlYnWavZgEgr2K3p3jRoO23OiK8CpK9sFM1IdVpr4QGeVKAImX%2BD4I5FcURdEorEYhzZkEdsgmtoW6a5%2FMiIfI4cKN2P65cLIUpzPL9On2uHP5a5IO9gjBt7P0rPzuhzSP6d992%2F%2FfwdiZ5hSxIkwqPLl5Y8pcUuBQqmYQY2AnnquqODJHyOK466SWKLpS5%2BTSj3LZaQrsKxOEZCcwM25n0qGr0o%2B%2FVkntDTAkKvppSbX0BMb6cLYLl9rKG7Ser6H8l9dAG7SsaZNpY7wrJwkFs569qkoHoIXqDCZ08LDBjqkAa0KvSaekbomxA8V09kPAh2se8g8Hvos3czRoPSADuIQWZ47lN1FM%2BYKcg%2BrPifeGYZEcM%2Bd98bpdy8KnNLlDH3bo3lRajrlcJ2QrCyEZOclygoJ06QekIrwKBCOwpqJ8yQGEc2%2F%2FN0J55mJfZbNy9zvTcKeAq3qZbeornZXX1AJgcGqgK0RFtWQVNBo5benCG8Fj6gqc2Bm8loOo58e2iQUPqPH&X-Amz-Signature=d565eb20a194d21bf3d49dac242e62109ccbc733137f37ad958e5d0c8c5326ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7QZJ3K%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwG0t5jp%2BmqWOlD7xIBYLCX6S6cSuCJoElDDrunXZquQIhANF1L0tQmLM7gBPQvw9E1CWHVz%2Fsicwgnu%2Fq03EsX%2BpQKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNnTzuZKL8mnTc9Ekq3AOKO3oG7CWy6w1XOiMIrLjvaldOWmV6WSl5VrFPNisTolJArx6u3EXkxKkSwiImHS1YCAAGfF%2F8uiOrK1pekWo%2BSr1CnS6o8npooVJjQ85f5sR4jTHJZkMJraOlk%2BqGG6jlra2NEUBoW9zrFcWkexd0vOKtNO6WvfVh1lpaEHqpG4nA%2BfNRJalPhM3t6FL5qWfY9XIfLZmYEMhIPuo2b4S%2BWPXobHs04HDeneKx%2B81FqDFlrj6qZCMbTOrX6d8JnRfLbyUB5Dd5Uaj93XVlREt14QadoyscGHcxDwv%2B%2BY5BY95%2BonjtwmJNGjmqigDlSBjQvVen6sxr1lAB4Z1XEmsvVzEGlYnWavZgEgr2K3p3jRoO23OiK8CpK9sFM1IdVpr4QGeVKAImX%2BD4I5FcURdEorEYhzZkEdsgmtoW6a5%2FMiIfI4cKN2P65cLIUpzPL9On2uHP5a5IO9gjBt7P0rPzuhzSP6d992%2F%2FfwdiZ5hSxIkwqPLl5Y8pcUuBQqmYQY2AnnquqODJHyOK466SWKLpS5%2BTSj3LZaQrsKxOEZCcwM25n0qGr0o%2B%2FVkntDTAkKvppSbX0BMb6cLYLl9rKG7Ser6H8l9dAG7SsaZNpY7wrJwkFs569qkoHoIXqDCZ08LDBjqkAa0KvSaekbomxA8V09kPAh2se8g8Hvos3czRoPSADuIQWZ47lN1FM%2BYKcg%2BrPifeGYZEcM%2Bd98bpdy8KnNLlDH3bo3lRajrlcJ2QrCyEZOclygoJ06QekIrwKBCOwpqJ8yQGEc2%2F%2FN0J55mJfZbNy9zvTcKeAq3qZbeornZXX1AJgcGqgK0RFtWQVNBo5benCG8Fj6gqc2Bm8loOo58e2iQUPqPH&X-Amz-Signature=b16de44ffaad0cdfeb5fc758d1baf38941a756abb5647f04ffbfb14338c33fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
