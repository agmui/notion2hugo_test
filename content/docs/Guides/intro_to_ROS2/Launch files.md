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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKD7A4TO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKjnBh6uQ5bpa9z2mwXrp1cUfemdOyITDw%2B0EMDYy38wIhAKvGZJpJi5uy50%2FC%2BUnWeh93kTyhf3bdvR97LHVFKbJWKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVxj5%2F15RoeH3idKgq3APewkYevYeZYLqbSc2Ga8%2FH4%2FDBedyfM04ZwqILek%2BK9SsNYhmSMUNV9H77s0ukL1hHhr9XD%2Bs7Jch5czdNwTrrstlh%2B8SrMFw2bR7MLG9b6iLuUQhOUj3VdwbeiTTrVn2lY%2Br81kubm%2BpDYi2Q7fbix4D3lAwRbkdgpSVWeQtmTnRVogl3SiBymaK4QEzXjEOgg5gNPecdCy5%2BWparWVzsCk8kouZ0AoRH51y8Eou1%2BSMIur6R5umfBObxpVv0uCuPKaBcwyEsQQtKc9PD%2FKeS7hIkS7Bf5rUMrfp%2B%2BIRB4ZlWMbWtWcTizS7serNDyIfk6TQPmML7wxXu0QabVWTcxo7wZjFZO8phfG5kvcbE%2BL3WJiL9PY8pkUb6cayopTilH241WlpER3IJldatwK5gnyST3CVomdG%2FQYQNTwAo%2B21pJj1wZ29cjvSSZ2eVL3tvpgqXiVi9tvO2%2BYNfld8S64k0aDMDgxZySw6E7V58Vvrmd0iGeMrHuSC6t%2BlOWN4mQu5LucFPCzs8kig2Wot6sESMRrtMd6jIy5V0KlnBvlp7ntN2%2FwE4v8AIvDJjGWLW7T7EQs%2BSPvg%2BBW5ZDOpu%2F9NPhH%2B7YTNQMLb6W7VpDoEZWpiftZ5y%2B5%2FRtzD5%2Fr7DBjqkAcgSyhHhwWbzJRhSWjErLQJhQtm%2BTMc%2B%2BvzXxceP%2BwQa3YYcZUpdCPL%2BAgRSjugt%2BwlSn8VeEM616wnoS5rbwGCtSqi50tOPHK2np7fYrmDySbOrQw6yeiLRkpRg2fYgXZ40gktVnMYGMZ6MSKZMK%2Bo26LttwKQohVA1jsULzUGEDsLKbZcOepsAZyCZ%2BS5s0sDqwb8Isz3ySYo70IpYh%2BfiKRKp&X-Amz-Signature=3904b6cd178e941ec5df6b11538b15150cb7f95e6722273a9300500deb186a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKD7A4TO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKjnBh6uQ5bpa9z2mwXrp1cUfemdOyITDw%2B0EMDYy38wIhAKvGZJpJi5uy50%2FC%2BUnWeh93kTyhf3bdvR97LHVFKbJWKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVxj5%2F15RoeH3idKgq3APewkYevYeZYLqbSc2Ga8%2FH4%2FDBedyfM04ZwqILek%2BK9SsNYhmSMUNV9H77s0ukL1hHhr9XD%2Bs7Jch5czdNwTrrstlh%2B8SrMFw2bR7MLG9b6iLuUQhOUj3VdwbeiTTrVn2lY%2Br81kubm%2BpDYi2Q7fbix4D3lAwRbkdgpSVWeQtmTnRVogl3SiBymaK4QEzXjEOgg5gNPecdCy5%2BWparWVzsCk8kouZ0AoRH51y8Eou1%2BSMIur6R5umfBObxpVv0uCuPKaBcwyEsQQtKc9PD%2FKeS7hIkS7Bf5rUMrfp%2B%2BIRB4ZlWMbWtWcTizS7serNDyIfk6TQPmML7wxXu0QabVWTcxo7wZjFZO8phfG5kvcbE%2BL3WJiL9PY8pkUb6cayopTilH241WlpER3IJldatwK5gnyST3CVomdG%2FQYQNTwAo%2B21pJj1wZ29cjvSSZ2eVL3tvpgqXiVi9tvO2%2BYNfld8S64k0aDMDgxZySw6E7V58Vvrmd0iGeMrHuSC6t%2BlOWN4mQu5LucFPCzs8kig2Wot6sESMRrtMd6jIy5V0KlnBvlp7ntN2%2FwE4v8AIvDJjGWLW7T7EQs%2BSPvg%2BBW5ZDOpu%2F9NPhH%2B7YTNQMLb6W7VpDoEZWpiftZ5y%2B5%2FRtzD5%2Fr7DBjqkAcgSyhHhwWbzJRhSWjErLQJhQtm%2BTMc%2B%2BvzXxceP%2BwQa3YYcZUpdCPL%2BAgRSjugt%2BwlSn8VeEM616wnoS5rbwGCtSqi50tOPHK2np7fYrmDySbOrQw6yeiLRkpRg2fYgXZ40gktVnMYGMZ6MSKZMK%2Bo26LttwKQohVA1jsULzUGEDsLKbZcOepsAZyCZ%2BS5s0sDqwb8Isz3ySYo70IpYh%2BfiKRKp&X-Amz-Signature=921235bfc131bde7ad64c8548d29851e9cf78bf60b36b44e3e201e6a2d00d2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKD7A4TO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKjnBh6uQ5bpa9z2mwXrp1cUfemdOyITDw%2B0EMDYy38wIhAKvGZJpJi5uy50%2FC%2BUnWeh93kTyhf3bdvR97LHVFKbJWKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVxj5%2F15RoeH3idKgq3APewkYevYeZYLqbSc2Ga8%2FH4%2FDBedyfM04ZwqILek%2BK9SsNYhmSMUNV9H77s0ukL1hHhr9XD%2Bs7Jch5czdNwTrrstlh%2B8SrMFw2bR7MLG9b6iLuUQhOUj3VdwbeiTTrVn2lY%2Br81kubm%2BpDYi2Q7fbix4D3lAwRbkdgpSVWeQtmTnRVogl3SiBymaK4QEzXjEOgg5gNPecdCy5%2BWparWVzsCk8kouZ0AoRH51y8Eou1%2BSMIur6R5umfBObxpVv0uCuPKaBcwyEsQQtKc9PD%2FKeS7hIkS7Bf5rUMrfp%2B%2BIRB4ZlWMbWtWcTizS7serNDyIfk6TQPmML7wxXu0QabVWTcxo7wZjFZO8phfG5kvcbE%2BL3WJiL9PY8pkUb6cayopTilH241WlpER3IJldatwK5gnyST3CVomdG%2FQYQNTwAo%2B21pJj1wZ29cjvSSZ2eVL3tvpgqXiVi9tvO2%2BYNfld8S64k0aDMDgxZySw6E7V58Vvrmd0iGeMrHuSC6t%2BlOWN4mQu5LucFPCzs8kig2Wot6sESMRrtMd6jIy5V0KlnBvlp7ntN2%2FwE4v8AIvDJjGWLW7T7EQs%2BSPvg%2BBW5ZDOpu%2F9NPhH%2B7YTNQMLb6W7VpDoEZWpiftZ5y%2B5%2FRtzD5%2Fr7DBjqkAcgSyhHhwWbzJRhSWjErLQJhQtm%2BTMc%2B%2BvzXxceP%2BwQa3YYcZUpdCPL%2BAgRSjugt%2BwlSn8VeEM616wnoS5rbwGCtSqi50tOPHK2np7fYrmDySbOrQw6yeiLRkpRg2fYgXZ40gktVnMYGMZ6MSKZMK%2Bo26LttwKQohVA1jsULzUGEDsLKbZcOepsAZyCZ%2BS5s0sDqwb8Isz3ySYo70IpYh%2BfiKRKp&X-Amz-Signature=523dc2cab51796fde5d6c3dcc4538b3a02e499f04baafb83e0d5d51fc9939f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
