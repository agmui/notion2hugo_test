---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIU7BZL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIH1NKMTI84uzAIkn2wc0dYsqFLGjHI4I1wRLurFIJBgmAiBgjrKFMkhe8QjCDP4FGJoIK2Fjh6h65yi9mtVB7i0LPyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn1ldcn2jg6uNXs2KtwD2IS7zeOMzaqPAV7GDvoqd35zgpI%2BO5%2BkWy4ilRku6IJD%2BYy5CGLOUFtn5Tita9%2Bar%2B5RmY1wAeRIhQSH2et1j61uwja302GBl0Ae39ZjctKNE6RYRqW0SbxViNpwIKgj%2Byl%2BECiuCo3I1lQsMbLl6Q5l3s7Nlv9h%2BN7JOGZQ%2FXumDbowjZ2rxxgfXN0QTXFmHLMRToO2aVl7NqF7wS6pR3XxbEaZZT5lbzhWwC117rwvIUpLvj0v66hxU5Gmg2Y51lVbO4BrKJkqNLjbLe0EN06D67OI9rSfqk14fxHo7vGPu4hiTL6nIyYQ6A4Im1IHZWHu9mvBw9t4vUR8jd6z%2FGG100xqWpJpoLIqDACXRIF6eTo7jx7hlVLmZiPppOxcLmqf7AO2a4wWSgfrdWCb1bN5xg3BQdi6WOcaCKWJBLcWzmLVciZGeN97xzA0o0UjfzVSY0BtiX5BNx1EPTRxH5bt2AXy0NgYQuj3J7yEexwCnDu4A6CEC0ymhASLlBrIspnGXzwAIQupiSXs9YXu2lSVOl5T1ukfnJKt%2BXNWKl5xXbptLZVzbCkBzc6O7yMx5qccBgOPl%2Bar8d2Gmk13BfArJIsw5oMilyGLHEdUz11dLKa0%2B6qyfFcOMDEw2NTtyQY6pgHV0KErPryUFYeBtNJ8klclonUPQWtO%2FIGfI6TOuOxv%2BNitN8%2FpgGbXNvJ1uiT2jDvjfbZB22%2BXWhnUCSTCJStj%2FryUvEhF0thEcTmDpjwCcdM20BNxNZvmnJDm64CPSvoEBec1hf6eBPgYLOxaGjer4ES%2Fu%2BV3wbo8Yn%2BagORGsZOR7s%2BdYuVSOWWRqoGvs43fDgjNI8Gv0YMPWfF9X8Apc5%2FdqJ%2B9&X-Amz-Signature=dc0cda3b18c42394eeb15526faa3028d33929c7c14032360ca12c99d70c7f0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIU7BZL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIH1NKMTI84uzAIkn2wc0dYsqFLGjHI4I1wRLurFIJBgmAiBgjrKFMkhe8QjCDP4FGJoIK2Fjh6h65yi9mtVB7i0LPyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn1ldcn2jg6uNXs2KtwD2IS7zeOMzaqPAV7GDvoqd35zgpI%2BO5%2BkWy4ilRku6IJD%2BYy5CGLOUFtn5Tita9%2Bar%2B5RmY1wAeRIhQSH2et1j61uwja302GBl0Ae39ZjctKNE6RYRqW0SbxViNpwIKgj%2Byl%2BECiuCo3I1lQsMbLl6Q5l3s7Nlv9h%2BN7JOGZQ%2FXumDbowjZ2rxxgfXN0QTXFmHLMRToO2aVl7NqF7wS6pR3XxbEaZZT5lbzhWwC117rwvIUpLvj0v66hxU5Gmg2Y51lVbO4BrKJkqNLjbLe0EN06D67OI9rSfqk14fxHo7vGPu4hiTL6nIyYQ6A4Im1IHZWHu9mvBw9t4vUR8jd6z%2FGG100xqWpJpoLIqDACXRIF6eTo7jx7hlVLmZiPppOxcLmqf7AO2a4wWSgfrdWCb1bN5xg3BQdi6WOcaCKWJBLcWzmLVciZGeN97xzA0o0UjfzVSY0BtiX5BNx1EPTRxH5bt2AXy0NgYQuj3J7yEexwCnDu4A6CEC0ymhASLlBrIspnGXzwAIQupiSXs9YXu2lSVOl5T1ukfnJKt%2BXNWKl5xXbptLZVzbCkBzc6O7yMx5qccBgOPl%2Bar8d2Gmk13BfArJIsw5oMilyGLHEdUz11dLKa0%2B6qyfFcOMDEw2NTtyQY6pgHV0KErPryUFYeBtNJ8klclonUPQWtO%2FIGfI6TOuOxv%2BNitN8%2FpgGbXNvJ1uiT2jDvjfbZB22%2BXWhnUCSTCJStj%2FryUvEhF0thEcTmDpjwCcdM20BNxNZvmnJDm64CPSvoEBec1hf6eBPgYLOxaGjer4ES%2Fu%2BV3wbo8Yn%2BagORGsZOR7s%2BdYuVSOWWRqoGvs43fDgjNI8Gv0YMPWfF9X8Apc5%2FdqJ%2B9&X-Amz-Signature=72b0c3b487bc206ed82fdba181bad07a1c42ba3dcef34ff6ef78800e42bae826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAIU7BZL%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIH1NKMTI84uzAIkn2wc0dYsqFLGjHI4I1wRLurFIJBgmAiBgjrKFMkhe8QjCDP4FGJoIK2Fjh6h65yi9mtVB7i0LPyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxn1ldcn2jg6uNXs2KtwD2IS7zeOMzaqPAV7GDvoqd35zgpI%2BO5%2BkWy4ilRku6IJD%2BYy5CGLOUFtn5Tita9%2Bar%2B5RmY1wAeRIhQSH2et1j61uwja302GBl0Ae39ZjctKNE6RYRqW0SbxViNpwIKgj%2Byl%2BECiuCo3I1lQsMbLl6Q5l3s7Nlv9h%2BN7JOGZQ%2FXumDbowjZ2rxxgfXN0QTXFmHLMRToO2aVl7NqF7wS6pR3XxbEaZZT5lbzhWwC117rwvIUpLvj0v66hxU5Gmg2Y51lVbO4BrKJkqNLjbLe0EN06D67OI9rSfqk14fxHo7vGPu4hiTL6nIyYQ6A4Im1IHZWHu9mvBw9t4vUR8jd6z%2FGG100xqWpJpoLIqDACXRIF6eTo7jx7hlVLmZiPppOxcLmqf7AO2a4wWSgfrdWCb1bN5xg3BQdi6WOcaCKWJBLcWzmLVciZGeN97xzA0o0UjfzVSY0BtiX5BNx1EPTRxH5bt2AXy0NgYQuj3J7yEexwCnDu4A6CEC0ymhASLlBrIspnGXzwAIQupiSXs9YXu2lSVOl5T1ukfnJKt%2BXNWKl5xXbptLZVzbCkBzc6O7yMx5qccBgOPl%2Bar8d2Gmk13BfArJIsw5oMilyGLHEdUz11dLKa0%2B6qyfFcOMDEw2NTtyQY6pgHV0KErPryUFYeBtNJ8klclonUPQWtO%2FIGfI6TOuOxv%2BNitN8%2FpgGbXNvJ1uiT2jDvjfbZB22%2BXWhnUCSTCJStj%2FryUvEhF0thEcTmDpjwCcdM20BNxNZvmnJDm64CPSvoEBec1hf6eBPgYLOxaGjer4ES%2Fu%2BV3wbo8Yn%2BagORGsZOR7s%2BdYuVSOWWRqoGvs43fDgjNI8Gv0YMPWfF9X8Apc5%2FdqJ%2B9&X-Amz-Signature=1619f6916448ab8e4edb3c33a5098dc5cd9e96dbf046ef47052da6e3c574927c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
