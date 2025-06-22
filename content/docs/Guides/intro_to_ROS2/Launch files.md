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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYRAYIQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCN1TJkt5kmi9AjMYsUf3%2Fa2eW%2FobfdcIOuUY4QLqEn5QIhAKQ4IcHsg0rqgBwsxhGB7wjNpLFzbXnKz39qyHj3dMgnKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGonVHcrhf0AxxF7Aq3APKMBsHGUJhk9cecsJ8Kg7ZlK2kIPor02hT5f6HHjOYGvujcYitkItFj00kyW%2Bzey6t01qQ9JHbbazWHu1nAHboE65QvvkEIMa6fDvdjdRbNm%2Bx7DQYP8nIwR644WObZnS6UTloL9Ns9PksUpWDlZTU6G7jkfR1NB691mD2fWNhft3no5V024EOQBQ7BibZ%2Fuiek9cuirgNzgpDR7F5YZVGpw9nKbOCLu0WtBLuTVQ%2FUQdkbXkevYTBfCnErD8hN29Q%2FitlWZBwtzHo3TYiF1uC1tUE1Pw93cndSKJNfUnfvXKqbqbwmb4XEx3Eqbr4Tz%2B96M8wilVCeMxcrKhinBqXMjNcXnG2stRmpcLPIoD0amVKr4BHTbkDFGr%2FJZFuiAtC9p6AOmatDCK8GF%2BbgwB2qtYgfFnowb2gIlaSvn%2Fdba6cHNW0D0ivDlIeNlW5GmB2JazC%2BfkCxyhDvOt6L7lX0t%2B%2Be0p38Qqc11%2BM7YPy1ot%2F2HSqDOuI0LFfd3ZHF5snrs%2F08YTvfm%2FIUODeMstmwwZp4%2BrNPuHfD%2F5H5d7fw23QTsn6TJEMAjFPIGWbKBYtkqPRAKVraIbqYUywckWH6wy9SBj%2BEmkBarJXBJHAhhqo0Lx9Y9P6ZU%2FA3jDT6d7CBjqkAS%2FJ%2FntVvUFijc2F5npk6xzb5pZsV7hLGoJvvECQGSRqOWskXhAzE6z1gibNffQ6tS%2F1y8FQFzEqcA4HvU1B2lGEhRanIL7oQZ9OJXAp%2FbzFmPFOFIpj39w%2FW7212MUmyBM7At6bnlTWvoBJl4jVrDTbO4Lzzu3q%2FSqg51mfeMx2i28ZY%2FsCJhzX%2BtmaKdGMzoWxFLgt8anciuQzIfRBJubtv61u&X-Amz-Signature=e0950505d156adc067a6201e4f8bb0a7f46a3bd0f89b674e08a93ad2891a1524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYRAYIQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCN1TJkt5kmi9AjMYsUf3%2Fa2eW%2FobfdcIOuUY4QLqEn5QIhAKQ4IcHsg0rqgBwsxhGB7wjNpLFzbXnKz39qyHj3dMgnKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGonVHcrhf0AxxF7Aq3APKMBsHGUJhk9cecsJ8Kg7ZlK2kIPor02hT5f6HHjOYGvujcYitkItFj00kyW%2Bzey6t01qQ9JHbbazWHu1nAHboE65QvvkEIMa6fDvdjdRbNm%2Bx7DQYP8nIwR644WObZnS6UTloL9Ns9PksUpWDlZTU6G7jkfR1NB691mD2fWNhft3no5V024EOQBQ7BibZ%2Fuiek9cuirgNzgpDR7F5YZVGpw9nKbOCLu0WtBLuTVQ%2FUQdkbXkevYTBfCnErD8hN29Q%2FitlWZBwtzHo3TYiF1uC1tUE1Pw93cndSKJNfUnfvXKqbqbwmb4XEx3Eqbr4Tz%2B96M8wilVCeMxcrKhinBqXMjNcXnG2stRmpcLPIoD0amVKr4BHTbkDFGr%2FJZFuiAtC9p6AOmatDCK8GF%2BbgwB2qtYgfFnowb2gIlaSvn%2Fdba6cHNW0D0ivDlIeNlW5GmB2JazC%2BfkCxyhDvOt6L7lX0t%2B%2Be0p38Qqc11%2BM7YPy1ot%2F2HSqDOuI0LFfd3ZHF5snrs%2F08YTvfm%2FIUODeMstmwwZp4%2BrNPuHfD%2F5H5d7fw23QTsn6TJEMAjFPIGWbKBYtkqPRAKVraIbqYUywckWH6wy9SBj%2BEmkBarJXBJHAhhqo0Lx9Y9P6ZU%2FA3jDT6d7CBjqkAS%2FJ%2FntVvUFijc2F5npk6xzb5pZsV7hLGoJvvECQGSRqOWskXhAzE6z1gibNffQ6tS%2F1y8FQFzEqcA4HvU1B2lGEhRanIL7oQZ9OJXAp%2FbzFmPFOFIpj39w%2FW7212MUmyBM7At6bnlTWvoBJl4jVrDTbO4Lzzu3q%2FSqg51mfeMx2i28ZY%2FsCJhzX%2BtmaKdGMzoWxFLgt8anciuQzIfRBJubtv61u&X-Amz-Signature=14aa1432a97490deb5c990bf40fb63c7892ada200befa544f3bdce19856a93a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYRAYIQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCN1TJkt5kmi9AjMYsUf3%2Fa2eW%2FobfdcIOuUY4QLqEn5QIhAKQ4IcHsg0rqgBwsxhGB7wjNpLFzbXnKz39qyHj3dMgnKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGonVHcrhf0AxxF7Aq3APKMBsHGUJhk9cecsJ8Kg7ZlK2kIPor02hT5f6HHjOYGvujcYitkItFj00kyW%2Bzey6t01qQ9JHbbazWHu1nAHboE65QvvkEIMa6fDvdjdRbNm%2Bx7DQYP8nIwR644WObZnS6UTloL9Ns9PksUpWDlZTU6G7jkfR1NB691mD2fWNhft3no5V024EOQBQ7BibZ%2Fuiek9cuirgNzgpDR7F5YZVGpw9nKbOCLu0WtBLuTVQ%2FUQdkbXkevYTBfCnErD8hN29Q%2FitlWZBwtzHo3TYiF1uC1tUE1Pw93cndSKJNfUnfvXKqbqbwmb4XEx3Eqbr4Tz%2B96M8wilVCeMxcrKhinBqXMjNcXnG2stRmpcLPIoD0amVKr4BHTbkDFGr%2FJZFuiAtC9p6AOmatDCK8GF%2BbgwB2qtYgfFnowb2gIlaSvn%2Fdba6cHNW0D0ivDlIeNlW5GmB2JazC%2BfkCxyhDvOt6L7lX0t%2B%2Be0p38Qqc11%2BM7YPy1ot%2F2HSqDOuI0LFfd3ZHF5snrs%2F08YTvfm%2FIUODeMstmwwZp4%2BrNPuHfD%2F5H5d7fw23QTsn6TJEMAjFPIGWbKBYtkqPRAKVraIbqYUywckWH6wy9SBj%2BEmkBarJXBJHAhhqo0Lx9Y9P6ZU%2FA3jDT6d7CBjqkAS%2FJ%2FntVvUFijc2F5npk6xzb5pZsV7hLGoJvvECQGSRqOWskXhAzE6z1gibNffQ6tS%2F1y8FQFzEqcA4HvU1B2lGEhRanIL7oQZ9OJXAp%2FbzFmPFOFIpj39w%2FW7212MUmyBM7At6bnlTWvoBJl4jVrDTbO4Lzzu3q%2FSqg51mfeMx2i28ZY%2FsCJhzX%2BtmaKdGMzoWxFLgt8anciuQzIfRBJubtv61u&X-Amz-Signature=73328c1c62b06cbe3bc62acea5dd4dfb6d371c1cee1ae68547ba2a70544ad8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
