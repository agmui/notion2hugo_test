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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2GDBRN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yYnISRlzfLNof%2FEPtsTjjC3KaFJHg0R7wRbnRLMmGwIhALbf%2FjwcAetW20MBX4s6nTeoUcd3EVEv%2Bp22HE%2BK6eB2Kv8DCCEQABoMNjM3NDIzMTgzODA1IgzLSQbMWGyf6yqGGbcq3AM7CA2drKf4KrgJx2tmHwes4lsZkblXzoV79n%2BXqAWu9YgatahGcsU8THR%2FGDzIDf4BpJOcONJ9kCxJQNBaciI15nWredlU%2FfnDUmup%2F1rLWfqySdNW1EuXHS1Ou0ipTSE6FmE3Krc5l%2FpLdgeDMKQ%2FEIqsapWMkibBQvJ1xN9sR0inPGG9KqF6Ymv4DjCpw8CN0pNS55f1dq3FAbuOGvLPskLqVaqfkqC8k%2B3tqm9FyY4NjMcYqkLmv8kwLmG%2Bmjbbs1x7t%2BpuRwEJ2aweEpwJ6zB42d%2FgSrKn0o1cNkq2qtPfkP2o5SGoW1h791%2BsRX6n8loEMCyO1baXAWYF9FKtyIPrhNKh0ORxvn1BqEVmy%2Bzd6yHmRcgo2xcQvwHR%2BhPufta7arAk1joDjlRwPvRqo9BlAGTdU%2B4cSFgPD%2FJxXAjTCplEgc2yXLccykB3UYVaveq4H0XQdXW%2BBDi9sFgUwzgDg2%2F%2FnzVr0axu4peuqm1vG9BZI9v15%2B6EVqwkR2FVW2ym%2BD2DH94Bdwvk5%2Fox%2FonfxdxrxU6O4TZve5EhsApMg1QzGTiJAeUyPGtbcvGLTix4UM%2FYGyjTC49tBXAmob9JWvinmXWVFKCKl7jClWMnkDLc4PbEjMiwUTCw78G%2FBjqkAZfGmuX4M%2Bwy6zzjMv0ESjEh8ozZcAIIrTzGEubiEDxkEHlYxvPQoAc6cM0%2FY9nDV7zK2Fo2OQaEsT1gStCAqvAzXF4IRpEUY3gKRLdgLBP7EWKJqDyPWSlMMwo%2BOPzZZjEphw68XO2NnQCiezDkuV%2B4NE2SjPwCIDeJ91fsowOdWBCumgvOqd1Rk%2BrhOWuLN%2BOR3j1varPQ2SWTFzfyJIIxVeOw&X-Amz-Signature=28fcd2a65a2acbe4e0bbef883fd63664aeec27c30c161415b7f0aa330091a5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2GDBRN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yYnISRlzfLNof%2FEPtsTjjC3KaFJHg0R7wRbnRLMmGwIhALbf%2FjwcAetW20MBX4s6nTeoUcd3EVEv%2Bp22HE%2BK6eB2Kv8DCCEQABoMNjM3NDIzMTgzODA1IgzLSQbMWGyf6yqGGbcq3AM7CA2drKf4KrgJx2tmHwes4lsZkblXzoV79n%2BXqAWu9YgatahGcsU8THR%2FGDzIDf4BpJOcONJ9kCxJQNBaciI15nWredlU%2FfnDUmup%2F1rLWfqySdNW1EuXHS1Ou0ipTSE6FmE3Krc5l%2FpLdgeDMKQ%2FEIqsapWMkibBQvJ1xN9sR0inPGG9KqF6Ymv4DjCpw8CN0pNS55f1dq3FAbuOGvLPskLqVaqfkqC8k%2B3tqm9FyY4NjMcYqkLmv8kwLmG%2Bmjbbs1x7t%2BpuRwEJ2aweEpwJ6zB42d%2FgSrKn0o1cNkq2qtPfkP2o5SGoW1h791%2BsRX6n8loEMCyO1baXAWYF9FKtyIPrhNKh0ORxvn1BqEVmy%2Bzd6yHmRcgo2xcQvwHR%2BhPufta7arAk1joDjlRwPvRqo9BlAGTdU%2B4cSFgPD%2FJxXAjTCplEgc2yXLccykB3UYVaveq4H0XQdXW%2BBDi9sFgUwzgDg2%2F%2FnzVr0axu4peuqm1vG9BZI9v15%2B6EVqwkR2FVW2ym%2BD2DH94Bdwvk5%2Fox%2FonfxdxrxU6O4TZve5EhsApMg1QzGTiJAeUyPGtbcvGLTix4UM%2FYGyjTC49tBXAmob9JWvinmXWVFKCKl7jClWMnkDLc4PbEjMiwUTCw78G%2FBjqkAZfGmuX4M%2Bwy6zzjMv0ESjEh8ozZcAIIrTzGEubiEDxkEHlYxvPQoAc6cM0%2FY9nDV7zK2Fo2OQaEsT1gStCAqvAzXF4IRpEUY3gKRLdgLBP7EWKJqDyPWSlMMwo%2BOPzZZjEphw68XO2NnQCiezDkuV%2B4NE2SjPwCIDeJ91fsowOdWBCumgvOqd1Rk%2BrhOWuLN%2BOR3j1varPQ2SWTFzfyJIIxVeOw&X-Amz-Signature=cecaa3fea999b36b4fb1b91fa9f2b5c923190cf381e9cfec7a2a51b5318f3227&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2GDBRN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0yYnISRlzfLNof%2FEPtsTjjC3KaFJHg0R7wRbnRLMmGwIhALbf%2FjwcAetW20MBX4s6nTeoUcd3EVEv%2Bp22HE%2BK6eB2Kv8DCCEQABoMNjM3NDIzMTgzODA1IgzLSQbMWGyf6yqGGbcq3AM7CA2drKf4KrgJx2tmHwes4lsZkblXzoV79n%2BXqAWu9YgatahGcsU8THR%2FGDzIDf4BpJOcONJ9kCxJQNBaciI15nWredlU%2FfnDUmup%2F1rLWfqySdNW1EuXHS1Ou0ipTSE6FmE3Krc5l%2FpLdgeDMKQ%2FEIqsapWMkibBQvJ1xN9sR0inPGG9KqF6Ymv4DjCpw8CN0pNS55f1dq3FAbuOGvLPskLqVaqfkqC8k%2B3tqm9FyY4NjMcYqkLmv8kwLmG%2Bmjbbs1x7t%2BpuRwEJ2aweEpwJ6zB42d%2FgSrKn0o1cNkq2qtPfkP2o5SGoW1h791%2BsRX6n8loEMCyO1baXAWYF9FKtyIPrhNKh0ORxvn1BqEVmy%2Bzd6yHmRcgo2xcQvwHR%2BhPufta7arAk1joDjlRwPvRqo9BlAGTdU%2B4cSFgPD%2FJxXAjTCplEgc2yXLccykB3UYVaveq4H0XQdXW%2BBDi9sFgUwzgDg2%2F%2FnzVr0axu4peuqm1vG9BZI9v15%2B6EVqwkR2FVW2ym%2BD2DH94Bdwvk5%2Fox%2FonfxdxrxU6O4TZve5EhsApMg1QzGTiJAeUyPGtbcvGLTix4UM%2FYGyjTC49tBXAmob9JWvinmXWVFKCKl7jClWMnkDLc4PbEjMiwUTCw78G%2FBjqkAZfGmuX4M%2Bwy6zzjMv0ESjEh8ozZcAIIrTzGEubiEDxkEHlYxvPQoAc6cM0%2FY9nDV7zK2Fo2OQaEsT1gStCAqvAzXF4IRpEUY3gKRLdgLBP7EWKJqDyPWSlMMwo%2BOPzZZjEphw68XO2NnQCiezDkuV%2B4NE2SjPwCIDeJ91fsowOdWBCumgvOqd1Rk%2BrhOWuLN%2BOR3j1varPQ2SWTFzfyJIIxVeOw&X-Amz-Signature=2d03f01333ab7c8a1d169a98815607666d131f3e54baac47379a2a4a162a5f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
