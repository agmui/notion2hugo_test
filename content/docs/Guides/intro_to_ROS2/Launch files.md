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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCUW5WH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F%2FZm3wKL1uKP4yeYTGWj9by4T0yiGCADi9RK6co3l8gIhAJlk%2BYKVBYaDtOvdxrLHDNwplfnNRQ6z3gt7T4x9mXLpKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKuJWpcqJuKmZ6QNAq3AOh%2F%2FuJXRdVUIS8r5r3y2MOjsWqAczSm8Mdj0t1MM%2F2OGLdHn5vjxh7wMgU%2F3FdVFcHBO7PDI7MDQzMkPbY7Uy%2B%2B1QCsKsnFathYYad8f02HH29pJ7EmOZzz6esghIDCMvmvRZf3ZC9INf%2B%2FIAOr3bqfTA3nT7CzWjZqxGRxSMva%2FwlBpL%2FYyuB6DhFOezyuKdEBST5%2FuS0umOm%2B4GX8EuXX7w6rlI9qeBcHE7N5TtbwOAuEmHkzpvG1QqOXO1yI1wrF9JLCkMAFp9OJZQbKN%2BQKpN8I5IGK3S%2FAt1zPMgMKk%2BzKq7ZvE6RUxn50JRvT3k5tH6R4NT1uqsImGADSQC2g4LTQsUK%2B1%2Be78cI1PjeEw3HptAckVc67%2FwVOlYyF6rpGJHnkMqFXnVmgqwxNEK8%2B%2BMebw%2BFVOUA8vDKIKW8m7O0GBAS9JeUnbS3RFM9SqP%2B1%2BSlnsNUMnYE2VVYpZ7EQWez9t5P7gEouCTPJs8%2FRV7wM1Sx2Pfvo48fUumDQcN93rUA8BsHI8hbwRA7ZzwhQPTYdqXM6sthheZz9%2BtYoV22gXXDC886sNRalyIkJFBjS2F%2FqhUdzUmao%2F2WlSoq%2FcRL1jFM5d6bAcN5ysWmDTantp6YfStKuvq4ujDlx67BBjqkATZLIRrC%2Bc%2FT7tCpjYvP2rnUAnyBcQAS4KGgG433UbdkCnrtcWplmUMYcMOA8QrIyKpv7R8AHk15jR6JG2HnMGTTX5%2FbjMavO8kHTa9F8ByzaLSfIyGEAaWE%2B7%2FG6ynyUINlF59J0O2yBBi6u0W1d4C2yR9cHQqAtW%2FJVWPciF5jBUWmvlRubwInNsss15KlpncFr3KRyskeWAd985Ijd7ZUk57N&X-Amz-Signature=4a649d30d55d5ecda97ec82d65c12cf50d64f9a040fc92f198c653e37d397c21&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCUW5WH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F%2FZm3wKL1uKP4yeYTGWj9by4T0yiGCADi9RK6co3l8gIhAJlk%2BYKVBYaDtOvdxrLHDNwplfnNRQ6z3gt7T4x9mXLpKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKuJWpcqJuKmZ6QNAq3AOh%2F%2FuJXRdVUIS8r5r3y2MOjsWqAczSm8Mdj0t1MM%2F2OGLdHn5vjxh7wMgU%2F3FdVFcHBO7PDI7MDQzMkPbY7Uy%2B%2B1QCsKsnFathYYad8f02HH29pJ7EmOZzz6esghIDCMvmvRZf3ZC9INf%2B%2FIAOr3bqfTA3nT7CzWjZqxGRxSMva%2FwlBpL%2FYyuB6DhFOezyuKdEBST5%2FuS0umOm%2B4GX8EuXX7w6rlI9qeBcHE7N5TtbwOAuEmHkzpvG1QqOXO1yI1wrF9JLCkMAFp9OJZQbKN%2BQKpN8I5IGK3S%2FAt1zPMgMKk%2BzKq7ZvE6RUxn50JRvT3k5tH6R4NT1uqsImGADSQC2g4LTQsUK%2B1%2Be78cI1PjeEw3HptAckVc67%2FwVOlYyF6rpGJHnkMqFXnVmgqwxNEK8%2B%2BMebw%2BFVOUA8vDKIKW8m7O0GBAS9JeUnbS3RFM9SqP%2B1%2BSlnsNUMnYE2VVYpZ7EQWez9t5P7gEouCTPJs8%2FRV7wM1Sx2Pfvo48fUumDQcN93rUA8BsHI8hbwRA7ZzwhQPTYdqXM6sthheZz9%2BtYoV22gXXDC886sNRalyIkJFBjS2F%2FqhUdzUmao%2F2WlSoq%2FcRL1jFM5d6bAcN5ysWmDTantp6YfStKuvq4ujDlx67BBjqkATZLIRrC%2Bc%2FT7tCpjYvP2rnUAnyBcQAS4KGgG433UbdkCnrtcWplmUMYcMOA8QrIyKpv7R8AHk15jR6JG2HnMGTTX5%2FbjMavO8kHTa9F8ByzaLSfIyGEAaWE%2B7%2FG6ynyUINlF59J0O2yBBi6u0W1d4C2yR9cHQqAtW%2FJVWPciF5jBUWmvlRubwInNsss15KlpncFr3KRyskeWAd985Ijd7ZUk57N&X-Amz-Signature=d84a658996fbf2ce0224c4e69d7dac36742aa2a48cae9c88c81a7ffbd73a78e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCUW5WH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F%2FZm3wKL1uKP4yeYTGWj9by4T0yiGCADi9RK6co3l8gIhAJlk%2BYKVBYaDtOvdxrLHDNwplfnNRQ6z3gt7T4x9mXLpKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKuJWpcqJuKmZ6QNAq3AOh%2F%2FuJXRdVUIS8r5r3y2MOjsWqAczSm8Mdj0t1MM%2F2OGLdHn5vjxh7wMgU%2F3FdVFcHBO7PDI7MDQzMkPbY7Uy%2B%2B1QCsKsnFathYYad8f02HH29pJ7EmOZzz6esghIDCMvmvRZf3ZC9INf%2B%2FIAOr3bqfTA3nT7CzWjZqxGRxSMva%2FwlBpL%2FYyuB6DhFOezyuKdEBST5%2FuS0umOm%2B4GX8EuXX7w6rlI9qeBcHE7N5TtbwOAuEmHkzpvG1QqOXO1yI1wrF9JLCkMAFp9OJZQbKN%2BQKpN8I5IGK3S%2FAt1zPMgMKk%2BzKq7ZvE6RUxn50JRvT3k5tH6R4NT1uqsImGADSQC2g4LTQsUK%2B1%2Be78cI1PjeEw3HptAckVc67%2FwVOlYyF6rpGJHnkMqFXnVmgqwxNEK8%2B%2BMebw%2BFVOUA8vDKIKW8m7O0GBAS9JeUnbS3RFM9SqP%2B1%2BSlnsNUMnYE2VVYpZ7EQWez9t5P7gEouCTPJs8%2FRV7wM1Sx2Pfvo48fUumDQcN93rUA8BsHI8hbwRA7ZzwhQPTYdqXM6sthheZz9%2BtYoV22gXXDC886sNRalyIkJFBjS2F%2FqhUdzUmao%2F2WlSoq%2FcRL1jFM5d6bAcN5ysWmDTantp6YfStKuvq4ujDlx67BBjqkATZLIRrC%2Bc%2FT7tCpjYvP2rnUAnyBcQAS4KGgG433UbdkCnrtcWplmUMYcMOA8QrIyKpv7R8AHk15jR6JG2HnMGTTX5%2FbjMavO8kHTa9F8ByzaLSfIyGEAaWE%2B7%2FG6ynyUINlF59J0O2yBBi6u0W1d4C2yR9cHQqAtW%2FJVWPciF5jBUWmvlRubwInNsss15KlpncFr3KRyskeWAd985Ijd7ZUk57N&X-Amz-Signature=ce5b3ca0c313ef8416e400fc806232c99b802daa6e532515cd385f9f1189eb3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
