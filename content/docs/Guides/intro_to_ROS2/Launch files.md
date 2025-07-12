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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USOOLC2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFLW4sdGeLRliBYKNlP4HKUBuY17wxINAH3%2FA3aRJAvwIhAPZ6XMc3MiWN8atE%2BLWakfPzkvikyPv86YMgH4%2FrjivPKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTTArv5aWpHrrtBMoq3ANKLW02RTC7sihjelyYPEu3NZSZri85YUPI6UE%2BSqPc4VzDtRhfcj8dzGEjoFl4AcBb8HlELVcOzaEQCce9q2T2Ty%2FDHbkH6C1ADrIhVkwnjeL2vbdVlMdafVuawauWMokkcthspO6NfEKKAO7IwVntMg5JKa0im%2BqnmngQHXzQq1M5BqgIxEA8vGYmS9W6HPYWMmUrX6K3jQxC%2BhGNUA2n5oL8Acy%2BQc0x0i751YInO7F17NOge57ZkpkCuB3WyKYDJe5NOCP%2Fvue%2BwukERmDCnVAAu%2FyxLH3YhSIqWU2tf3pmB4ma9wbSr6Dt%2B0cHDquIuWUkYaJn%2Ba0GOWZBb8nAj9e8JiOcpfESuB%2BhOO%2Bdk5G1jOnTVQ6KOwJIiRbuQLH0lI9ZLIMUi2c8emQgNOttGJxBZpQHyFFF0RQN%2FFAVepDcAaP4c2Sh%2FRfBHooPwT0nU0WqbU0%2BEeXlcIsOhQcJAgWTHGnnCeCmaAo1N2UnkFgI2PhoBc%2FeBUTYU3Fy6yQ4vVuOgPqGA915q%2BM6Wj90qoA%2Fdlh%2FdqMSzspVyTVN3OEUX1KkS32GkI7PZW2eGDmaI1hVKwGckvpaBULsf1zOBL%2FqK%2BxsHFnvD6iC5KFtOzLxMZNEIjvHmJhm3zDA%2BcfDBjqkAcobq7sN8ZscDDq1zoKG4eroftbX8Npez%2FdCEO8A9CbNktx92cOP0aNaeulZVTtabYM3K72ogx8PG3rQ%2FevomQAYs1AaddHIcvdcjoq0apVr%2B9DVk6qR5EntLWklt0tLsnq4RL%2B81C0ailtz4yEzlEbvAJIrNyCh7FBqlehTiZ7eVGA4Z4zU3Vv5rXQx141HD%2Bdae5KCMMD5uD2e813vxbasp3qw&X-Amz-Signature=2dd8c92635b33bf98a4e31a1be46a6169282e0325ec98a5b352cf43068c2f93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USOOLC2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFLW4sdGeLRliBYKNlP4HKUBuY17wxINAH3%2FA3aRJAvwIhAPZ6XMc3MiWN8atE%2BLWakfPzkvikyPv86YMgH4%2FrjivPKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTTArv5aWpHrrtBMoq3ANKLW02RTC7sihjelyYPEu3NZSZri85YUPI6UE%2BSqPc4VzDtRhfcj8dzGEjoFl4AcBb8HlELVcOzaEQCce9q2T2Ty%2FDHbkH6C1ADrIhVkwnjeL2vbdVlMdafVuawauWMokkcthspO6NfEKKAO7IwVntMg5JKa0im%2BqnmngQHXzQq1M5BqgIxEA8vGYmS9W6HPYWMmUrX6K3jQxC%2BhGNUA2n5oL8Acy%2BQc0x0i751YInO7F17NOge57ZkpkCuB3WyKYDJe5NOCP%2Fvue%2BwukERmDCnVAAu%2FyxLH3YhSIqWU2tf3pmB4ma9wbSr6Dt%2B0cHDquIuWUkYaJn%2Ba0GOWZBb8nAj9e8JiOcpfESuB%2BhOO%2Bdk5G1jOnTVQ6KOwJIiRbuQLH0lI9ZLIMUi2c8emQgNOttGJxBZpQHyFFF0RQN%2FFAVepDcAaP4c2Sh%2FRfBHooPwT0nU0WqbU0%2BEeXlcIsOhQcJAgWTHGnnCeCmaAo1N2UnkFgI2PhoBc%2FeBUTYU3Fy6yQ4vVuOgPqGA915q%2BM6Wj90qoA%2Fdlh%2FdqMSzspVyTVN3OEUX1KkS32GkI7PZW2eGDmaI1hVKwGckvpaBULsf1zOBL%2FqK%2BxsHFnvD6iC5KFtOzLxMZNEIjvHmJhm3zDA%2BcfDBjqkAcobq7sN8ZscDDq1zoKG4eroftbX8Npez%2FdCEO8A9CbNktx92cOP0aNaeulZVTtabYM3K72ogx8PG3rQ%2FevomQAYs1AaddHIcvdcjoq0apVr%2B9DVk6qR5EntLWklt0tLsnq4RL%2B81C0ailtz4yEzlEbvAJIrNyCh7FBqlehTiZ7eVGA4Z4zU3Vv5rXQx141HD%2Bdae5KCMMD5uD2e813vxbasp3qw&X-Amz-Signature=645d9171197d41c88f62417b89133af7ca804a3f83cda222e008b0518850286b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USOOLC2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFLW4sdGeLRliBYKNlP4HKUBuY17wxINAH3%2FA3aRJAvwIhAPZ6XMc3MiWN8atE%2BLWakfPzkvikyPv86YMgH4%2FrjivPKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTTArv5aWpHrrtBMoq3ANKLW02RTC7sihjelyYPEu3NZSZri85YUPI6UE%2BSqPc4VzDtRhfcj8dzGEjoFl4AcBb8HlELVcOzaEQCce9q2T2Ty%2FDHbkH6C1ADrIhVkwnjeL2vbdVlMdafVuawauWMokkcthspO6NfEKKAO7IwVntMg5JKa0im%2BqnmngQHXzQq1M5BqgIxEA8vGYmS9W6HPYWMmUrX6K3jQxC%2BhGNUA2n5oL8Acy%2BQc0x0i751YInO7F17NOge57ZkpkCuB3WyKYDJe5NOCP%2Fvue%2BwukERmDCnVAAu%2FyxLH3YhSIqWU2tf3pmB4ma9wbSr6Dt%2B0cHDquIuWUkYaJn%2Ba0GOWZBb8nAj9e8JiOcpfESuB%2BhOO%2Bdk5G1jOnTVQ6KOwJIiRbuQLH0lI9ZLIMUi2c8emQgNOttGJxBZpQHyFFF0RQN%2FFAVepDcAaP4c2Sh%2FRfBHooPwT0nU0WqbU0%2BEeXlcIsOhQcJAgWTHGnnCeCmaAo1N2UnkFgI2PhoBc%2FeBUTYU3Fy6yQ4vVuOgPqGA915q%2BM6Wj90qoA%2Fdlh%2FdqMSzspVyTVN3OEUX1KkS32GkI7PZW2eGDmaI1hVKwGckvpaBULsf1zOBL%2FqK%2BxsHFnvD6iC5KFtOzLxMZNEIjvHmJhm3zDA%2BcfDBjqkAcobq7sN8ZscDDq1zoKG4eroftbX8Npez%2FdCEO8A9CbNktx92cOP0aNaeulZVTtabYM3K72ogx8PG3rQ%2FevomQAYs1AaddHIcvdcjoq0apVr%2B9DVk6qR5EntLWklt0tLsnq4RL%2B81C0ailtz4yEzlEbvAJIrNyCh7FBqlehTiZ7eVGA4Z4zU3Vv5rXQx141HD%2Bdae5KCMMD5uD2e813vxbasp3qw&X-Amz-Signature=b6c8a294b94351547b23ca22d310cd1c06c33d125b148497fe445b6a0a5e60c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
