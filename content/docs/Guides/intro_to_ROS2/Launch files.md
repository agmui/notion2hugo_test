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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGTRCI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtgXQVXeww2KgO1whyqqOzje0Sir1Igc%2Fl2sXDgGhwqAIhAOiXwHTBrj8QY9nTHiTlspMcUhtPuOmzqaBzr1A%2B6VfvKv8DCBoQABoMNjM3NDIzMTgzODA1Igx5a9gIEkb0ArWQ7v4q3AO4anB0IUzXRFMHhWpfJhJbqiT9BVd4Z%2FmmMalEmLfy%2Fx1f4GNOkNE3SPyfxEODoGWDj8Zgs28jaMsmshR5sbwbdEcBbDL7QEMacVgnrEc%2Fv8j4rO4d0O5wsMuKNrzcenWpr%2F85vXCFKcZa29quFGrq6KQWhb9mlQC3YB0bgeob3zmmokJpRea7TWZ1eH0IT45ROmRLJxbTcQS1lHapOOtPf6ICtVu2VUTiW2of49y27mM6tTnaLHG4aUDUCurTLXd6V9s4F0PyxZoNp%2BRVbZgLR3XGGx%2BrhpvZ6MRC0soX%2FHHSOiPFOyr1DhNfdWu2ValFOtC97JO%2F4vi8qZG3bPTrjvqiRCvBqQKofV9Ub7CqqhlwK%2FTsh8K4I090fPKTEy2KWpPpUlL4eKO%2Fd8VY6wiEiNssLGVLWIFIQtXnPPA%2BUNZFJx%2BZMm8GTeWbdYvqo0puDZIt8wXHZR1tKLTSqN167Q7gmYy14LtkNNOv4WcAQGzX2r%2BzNknzksGdVbclJb%2Fk4FaUUS%2B7BW2skD2LaIdySEHpRzWKZvRMOcYANNbmDD6kEpyWLXU6XAVgIktffz6WESzyfKWBM%2F9U3esVivTnBVH5kVtbJAzh393hCgah9HXhgQSX00neZ2kyXjCM1anABjqkAd5ZThWoMgCSeRV6bN1RQlgkIG1FKudxUY8OBh9wGMZKX0zv8dgJ%2BrHIdnghqh0jwc5pif3abg%2BaBdNf%2Bfogy7MlhA7tePgfooVMI2VaT8Ck8dMpdLUJ%2F3dhjGKY0biyaHGnbBS7gixLkQ9Re6Z9TvbBrTsRK0ecYFpGw9v8Hv6pddyZZ0XAg0COoMr7wtC3FaxaI1GSr4GVM9VFOosbWdoSPUqp&X-Amz-Signature=60c5dca0bc797d853995b51f21d757ad853297b157be46a86e5803e04f177fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGTRCI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtgXQVXeww2KgO1whyqqOzje0Sir1Igc%2Fl2sXDgGhwqAIhAOiXwHTBrj8QY9nTHiTlspMcUhtPuOmzqaBzr1A%2B6VfvKv8DCBoQABoMNjM3NDIzMTgzODA1Igx5a9gIEkb0ArWQ7v4q3AO4anB0IUzXRFMHhWpfJhJbqiT9BVd4Z%2FmmMalEmLfy%2Fx1f4GNOkNE3SPyfxEODoGWDj8Zgs28jaMsmshR5sbwbdEcBbDL7QEMacVgnrEc%2Fv8j4rO4d0O5wsMuKNrzcenWpr%2F85vXCFKcZa29quFGrq6KQWhb9mlQC3YB0bgeob3zmmokJpRea7TWZ1eH0IT45ROmRLJxbTcQS1lHapOOtPf6ICtVu2VUTiW2of49y27mM6tTnaLHG4aUDUCurTLXd6V9s4F0PyxZoNp%2BRVbZgLR3XGGx%2BrhpvZ6MRC0soX%2FHHSOiPFOyr1DhNfdWu2ValFOtC97JO%2F4vi8qZG3bPTrjvqiRCvBqQKofV9Ub7CqqhlwK%2FTsh8K4I090fPKTEy2KWpPpUlL4eKO%2Fd8VY6wiEiNssLGVLWIFIQtXnPPA%2BUNZFJx%2BZMm8GTeWbdYvqo0puDZIt8wXHZR1tKLTSqN167Q7gmYy14LtkNNOv4WcAQGzX2r%2BzNknzksGdVbclJb%2Fk4FaUUS%2B7BW2skD2LaIdySEHpRzWKZvRMOcYANNbmDD6kEpyWLXU6XAVgIktffz6WESzyfKWBM%2F9U3esVivTnBVH5kVtbJAzh393hCgah9HXhgQSX00neZ2kyXjCM1anABjqkAd5ZThWoMgCSeRV6bN1RQlgkIG1FKudxUY8OBh9wGMZKX0zv8dgJ%2BrHIdnghqh0jwc5pif3abg%2BaBdNf%2Bfogy7MlhA7tePgfooVMI2VaT8Ck8dMpdLUJ%2F3dhjGKY0biyaHGnbBS7gixLkQ9Re6Z9TvbBrTsRK0ecYFpGw9v8Hv6pddyZZ0XAg0COoMr7wtC3FaxaI1GSr4GVM9VFOosbWdoSPUqp&X-Amz-Signature=3021e9f5315973f39b3dab030e3ddb33616361c6dee41457b7112422697d8afe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGTRCI6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtgXQVXeww2KgO1whyqqOzje0Sir1Igc%2Fl2sXDgGhwqAIhAOiXwHTBrj8QY9nTHiTlspMcUhtPuOmzqaBzr1A%2B6VfvKv8DCBoQABoMNjM3NDIzMTgzODA1Igx5a9gIEkb0ArWQ7v4q3AO4anB0IUzXRFMHhWpfJhJbqiT9BVd4Z%2FmmMalEmLfy%2Fx1f4GNOkNE3SPyfxEODoGWDj8Zgs28jaMsmshR5sbwbdEcBbDL7QEMacVgnrEc%2Fv8j4rO4d0O5wsMuKNrzcenWpr%2F85vXCFKcZa29quFGrq6KQWhb9mlQC3YB0bgeob3zmmokJpRea7TWZ1eH0IT45ROmRLJxbTcQS1lHapOOtPf6ICtVu2VUTiW2of49y27mM6tTnaLHG4aUDUCurTLXd6V9s4F0PyxZoNp%2BRVbZgLR3XGGx%2BrhpvZ6MRC0soX%2FHHSOiPFOyr1DhNfdWu2ValFOtC97JO%2F4vi8qZG3bPTrjvqiRCvBqQKofV9Ub7CqqhlwK%2FTsh8K4I090fPKTEy2KWpPpUlL4eKO%2Fd8VY6wiEiNssLGVLWIFIQtXnPPA%2BUNZFJx%2BZMm8GTeWbdYvqo0puDZIt8wXHZR1tKLTSqN167Q7gmYy14LtkNNOv4WcAQGzX2r%2BzNknzksGdVbclJb%2Fk4FaUUS%2B7BW2skD2LaIdySEHpRzWKZvRMOcYANNbmDD6kEpyWLXU6XAVgIktffz6WESzyfKWBM%2F9U3esVivTnBVH5kVtbJAzh393hCgah9HXhgQSX00neZ2kyXjCM1anABjqkAd5ZThWoMgCSeRV6bN1RQlgkIG1FKudxUY8OBh9wGMZKX0zv8dgJ%2BrHIdnghqh0jwc5pif3abg%2BaBdNf%2Bfogy7MlhA7tePgfooVMI2VaT8Ck8dMpdLUJ%2F3dhjGKY0biyaHGnbBS7gixLkQ9Re6Z9TvbBrTsRK0ecYFpGw9v8Hv6pddyZZ0XAg0COoMr7wtC3FaxaI1GSr4GVM9VFOosbWdoSPUqp&X-Amz-Signature=cb42025393a282349a465fb79e0c50df57474bd6092f20f20b7516c17589d73a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
