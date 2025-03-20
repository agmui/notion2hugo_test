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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBS3ULAX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFaeXIrJ5GQzki5M1uU4tfJjpHMNEMH7XJB%2FsbVd%2FF1DAiEA3Rw6TYukphdhVtMj%2B%2BaVgt0FPhKbzjNEqPpIponoG84qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKc0SOLtknYDDsI9lyrcA5VqjDy7yXcoXWLvNE%2BOCSCzIP9PzW1VIQgIngvEmbr0IQ3%2B%2B2bFbJ4ZhdseqSzPc73yTM%2FCC832lRaabDUczBbyVWC7RODnxh12TWcCN3KaPoefYKMVE1jQmQ0wEUYYd4AAxQ1aA4cQ8COM%2B3scd2zb%2FjUiWVFFV%2FIuGzaiqgnyILLiacIBX7CDhcCcKiJlt9xKtAEGYplRu1SXr%2FDcgkk4bqF0tOHNbwTZA8vOt3FLMqppSrJ1YoyHOunIBrbt0NU430TKuGlbVW5oIgEbYNNkBu48ez5TzNwVwEb%2BaQnBeqRCRZ42FyV2l5yYSr0ocNIQfMH8ao9gt%2BZ2F3t%2FoPpKgNlhIRfN1jaIrcFEYAEnRXwh1npWc8UlT6fiZgUSQ5pH3SKrEmMOIeaIlpcggUAfe3XeAHbhCtWYAGoOCZkw6nzKBX3yfdiBZwC6zWPCu5T%2Fro535kz1SLfcIJvQVQBcOmpmjNkUWp9g0%2Fc5GkH64FekxrNJY15iEZJynEaLl5QmBQ3bQ5W00ObtMLyYUkclPOCfNyRblF017KRNS1DgjE9P2TCyYZiBPMHqXLOiDubqCw%2BpEFsotu5DiRls3yNDWgX6zN082jPr2jCjsu765Ugs0YhfhrTI55gaMOCm7r4GOqUB0Qq%2BJTV%2BorxxruRCGk%2Bdjp2iV5%2BwVf4YMIlJnI%2BiCO6huBllTLSSLgPrmOD%2BizhgUX9mxc06i%2FiakFUYrPkqagtW9cst%2FftOQjwfECSIdD7yjuZINDz8qyw%2F22H0XE2vsDY0triOrEJ7cxX753gVe3XNrMQz8zJHdJ1a0%2FQ70PZJzVKBmyu4Y3qQsUnbRcMVr3ooqel7OmpLNlVtBZtk4Yr2jokr&X-Amz-Signature=5848cf276226fd350f8e8261b3d03a51368c785f44ac43ddc9755685fbb07672&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBS3ULAX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFaeXIrJ5GQzki5M1uU4tfJjpHMNEMH7XJB%2FsbVd%2FF1DAiEA3Rw6TYukphdhVtMj%2B%2BaVgt0FPhKbzjNEqPpIponoG84qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKc0SOLtknYDDsI9lyrcA5VqjDy7yXcoXWLvNE%2BOCSCzIP9PzW1VIQgIngvEmbr0IQ3%2B%2B2bFbJ4ZhdseqSzPc73yTM%2FCC832lRaabDUczBbyVWC7RODnxh12TWcCN3KaPoefYKMVE1jQmQ0wEUYYd4AAxQ1aA4cQ8COM%2B3scd2zb%2FjUiWVFFV%2FIuGzaiqgnyILLiacIBX7CDhcCcKiJlt9xKtAEGYplRu1SXr%2FDcgkk4bqF0tOHNbwTZA8vOt3FLMqppSrJ1YoyHOunIBrbt0NU430TKuGlbVW5oIgEbYNNkBu48ez5TzNwVwEb%2BaQnBeqRCRZ42FyV2l5yYSr0ocNIQfMH8ao9gt%2BZ2F3t%2FoPpKgNlhIRfN1jaIrcFEYAEnRXwh1npWc8UlT6fiZgUSQ5pH3SKrEmMOIeaIlpcggUAfe3XeAHbhCtWYAGoOCZkw6nzKBX3yfdiBZwC6zWPCu5T%2Fro535kz1SLfcIJvQVQBcOmpmjNkUWp9g0%2Fc5GkH64FekxrNJY15iEZJynEaLl5QmBQ3bQ5W00ObtMLyYUkclPOCfNyRblF017KRNS1DgjE9P2TCyYZiBPMHqXLOiDubqCw%2BpEFsotu5DiRls3yNDWgX6zN082jPr2jCjsu765Ugs0YhfhrTI55gaMOCm7r4GOqUB0Qq%2BJTV%2BorxxruRCGk%2Bdjp2iV5%2BwVf4YMIlJnI%2BiCO6huBllTLSSLgPrmOD%2BizhgUX9mxc06i%2FiakFUYrPkqagtW9cst%2FftOQjwfECSIdD7yjuZINDz8qyw%2F22H0XE2vsDY0triOrEJ7cxX753gVe3XNrMQz8zJHdJ1a0%2FQ70PZJzVKBmyu4Y3qQsUnbRcMVr3ooqel7OmpLNlVtBZtk4Yr2jokr&X-Amz-Signature=9e61353d647b1cfe9defec7d921b1ebb0b46391154b5a384452ba94a92201b17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBS3ULAX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFaeXIrJ5GQzki5M1uU4tfJjpHMNEMH7XJB%2FsbVd%2FF1DAiEA3Rw6TYukphdhVtMj%2B%2BaVgt0FPhKbzjNEqPpIponoG84qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKc0SOLtknYDDsI9lyrcA5VqjDy7yXcoXWLvNE%2BOCSCzIP9PzW1VIQgIngvEmbr0IQ3%2B%2B2bFbJ4ZhdseqSzPc73yTM%2FCC832lRaabDUczBbyVWC7RODnxh12TWcCN3KaPoefYKMVE1jQmQ0wEUYYd4AAxQ1aA4cQ8COM%2B3scd2zb%2FjUiWVFFV%2FIuGzaiqgnyILLiacIBX7CDhcCcKiJlt9xKtAEGYplRu1SXr%2FDcgkk4bqF0tOHNbwTZA8vOt3FLMqppSrJ1YoyHOunIBrbt0NU430TKuGlbVW5oIgEbYNNkBu48ez5TzNwVwEb%2BaQnBeqRCRZ42FyV2l5yYSr0ocNIQfMH8ao9gt%2BZ2F3t%2FoPpKgNlhIRfN1jaIrcFEYAEnRXwh1npWc8UlT6fiZgUSQ5pH3SKrEmMOIeaIlpcggUAfe3XeAHbhCtWYAGoOCZkw6nzKBX3yfdiBZwC6zWPCu5T%2Fro535kz1SLfcIJvQVQBcOmpmjNkUWp9g0%2Fc5GkH64FekxrNJY15iEZJynEaLl5QmBQ3bQ5W00ObtMLyYUkclPOCfNyRblF017KRNS1DgjE9P2TCyYZiBPMHqXLOiDubqCw%2BpEFsotu5DiRls3yNDWgX6zN082jPr2jCjsu765Ugs0YhfhrTI55gaMOCm7r4GOqUB0Qq%2BJTV%2BorxxruRCGk%2Bdjp2iV5%2BwVf4YMIlJnI%2BiCO6huBllTLSSLgPrmOD%2BizhgUX9mxc06i%2FiakFUYrPkqagtW9cst%2FftOQjwfECSIdD7yjuZINDz8qyw%2F22H0XE2vsDY0triOrEJ7cxX753gVe3XNrMQz8zJHdJ1a0%2FQ70PZJzVKBmyu4Y3qQsUnbRcMVr3ooqel7OmpLNlVtBZtk4Yr2jokr&X-Amz-Signature=e94ab57bb60368116655a07d69aac16e3f9c475c48f4ec4a7d3d7e92c4ae6b78&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
