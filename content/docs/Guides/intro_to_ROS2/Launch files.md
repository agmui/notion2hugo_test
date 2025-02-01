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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD77FMUP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z2EFc2VciXw2e%2FFEUZqajZXBtmV3R7nMN1%2BKVrGbQgIhAMNO6UYl4nHo0zOR%2FTf36hbMJFhSG7vQJCy3xki8P7vzKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM73sw5gGvX8VJYJUq3APLxR0egGuu1Vrlpb0ZK9cTjgVTQ9NSIvQjpkk2Vwt0RuTIzE1siyf2NQyxQ4y0QT9toMbbXrvdeYk0OU8nkx9GKpFl%2FYOt10d2QBr9jc7ZkUt%2FLxqc7VdUfIaOjgvasWg9Mm1w58uyoyFdiGo27XK4VXt4iOQoRpxG51SdOgXKYF2HnwvqC7bbuwLt5z5NbzH%2BChL3fKIqVCrhzKLajBp0iE9P6pjnHEzVxo2Hecd1e7BxS8FxZVhQERmDocxXigyIp1CBJP1G83n%2B7Zkg67TiJxf7jYLLkqjwJnKmrYhVxfL9y90huyljqYv%2BOD2eygi1HCFvBlmgYemQa2KOfbwb3YzpEI4qqg0d%2F8AAt2B7j6zbLrLjpq3NUXmaHSdbCy3NdkC1i3hMXG7qdLW%2BktimZFyjD9fL%2Fjyk8GP%2B5vPLAmYxoS2ZPPG9k3ylMKoAFTkgjNS02IAMDNO6BNx4J8ylcNO%2FbVA1pDgVf70KWzeD8QEx%2FvOumvHWCTBCgO9CmBSbxeATwW72zAcQ9xKC%2FE6TBfEa8cTEkzMrPozXGO608LQhJolVrz8pvQ0OJpH59EBH0U4qiZQ5b3pfM%2BIDUCrzW4CPUzC%2F2y0eUW06yNB1pU7%2F1fgMeLgpqbzOnzDa%2BPm8BjqkAXRIniHexxF%2Fy3SlJ52ZXVVZQOg0LsRV%2FEuOuqR5ROkfXj%2FaTV0RChGEV8j4IAea6CRr3fr6XnGtgUMItaAt31mWMqcrOmdjNtcqb%2Bv%2FrzupvOUU7QvAQLXLD9E9D4WQwF%2FnigGHKGgYVwfTH48NE0TfVDVUb8ZQmoiIblizD32JPh5Qh3WftLMzY07fskh%2BF6OXblOL4Af00IzCItYJtJ7qse9K&X-Amz-Signature=a6240c773c22fb23e43fba4f7c90f54644960027ae7713f3c24de641a2bfd4ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD77FMUP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z2EFc2VciXw2e%2FFEUZqajZXBtmV3R7nMN1%2BKVrGbQgIhAMNO6UYl4nHo0zOR%2FTf36hbMJFhSG7vQJCy3xki8P7vzKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM73sw5gGvX8VJYJUq3APLxR0egGuu1Vrlpb0ZK9cTjgVTQ9NSIvQjpkk2Vwt0RuTIzE1siyf2NQyxQ4y0QT9toMbbXrvdeYk0OU8nkx9GKpFl%2FYOt10d2QBr9jc7ZkUt%2FLxqc7VdUfIaOjgvasWg9Mm1w58uyoyFdiGo27XK4VXt4iOQoRpxG51SdOgXKYF2HnwvqC7bbuwLt5z5NbzH%2BChL3fKIqVCrhzKLajBp0iE9P6pjnHEzVxo2Hecd1e7BxS8FxZVhQERmDocxXigyIp1CBJP1G83n%2B7Zkg67TiJxf7jYLLkqjwJnKmrYhVxfL9y90huyljqYv%2BOD2eygi1HCFvBlmgYemQa2KOfbwb3YzpEI4qqg0d%2F8AAt2B7j6zbLrLjpq3NUXmaHSdbCy3NdkC1i3hMXG7qdLW%2BktimZFyjD9fL%2Fjyk8GP%2B5vPLAmYxoS2ZPPG9k3ylMKoAFTkgjNS02IAMDNO6BNx4J8ylcNO%2FbVA1pDgVf70KWzeD8QEx%2FvOumvHWCTBCgO9CmBSbxeATwW72zAcQ9xKC%2FE6TBfEa8cTEkzMrPozXGO608LQhJolVrz8pvQ0OJpH59EBH0U4qiZQ5b3pfM%2BIDUCrzW4CPUzC%2F2y0eUW06yNB1pU7%2F1fgMeLgpqbzOnzDa%2BPm8BjqkAXRIniHexxF%2Fy3SlJ52ZXVVZQOg0LsRV%2FEuOuqR5ROkfXj%2FaTV0RChGEV8j4IAea6CRr3fr6XnGtgUMItaAt31mWMqcrOmdjNtcqb%2Bv%2FrzupvOUU7QvAQLXLD9E9D4WQwF%2FnigGHKGgYVwfTH48NE0TfVDVUb8ZQmoiIblizD32JPh5Qh3WftLMzY07fskh%2BF6OXblOL4Af00IzCItYJtJ7qse9K&X-Amz-Signature=997a1c043948a2a1f7640d73c4e3af1fad45765460b2ebb17c93e0226e4faf33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD77FMUP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Z2EFc2VciXw2e%2FFEUZqajZXBtmV3R7nMN1%2BKVrGbQgIhAMNO6UYl4nHo0zOR%2FTf36hbMJFhSG7vQJCy3xki8P7vzKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM73sw5gGvX8VJYJUq3APLxR0egGuu1Vrlpb0ZK9cTjgVTQ9NSIvQjpkk2Vwt0RuTIzE1siyf2NQyxQ4y0QT9toMbbXrvdeYk0OU8nkx9GKpFl%2FYOt10d2QBr9jc7ZkUt%2FLxqc7VdUfIaOjgvasWg9Mm1w58uyoyFdiGo27XK4VXt4iOQoRpxG51SdOgXKYF2HnwvqC7bbuwLt5z5NbzH%2BChL3fKIqVCrhzKLajBp0iE9P6pjnHEzVxo2Hecd1e7BxS8FxZVhQERmDocxXigyIp1CBJP1G83n%2B7Zkg67TiJxf7jYLLkqjwJnKmrYhVxfL9y90huyljqYv%2BOD2eygi1HCFvBlmgYemQa2KOfbwb3YzpEI4qqg0d%2F8AAt2B7j6zbLrLjpq3NUXmaHSdbCy3NdkC1i3hMXG7qdLW%2BktimZFyjD9fL%2Fjyk8GP%2B5vPLAmYxoS2ZPPG9k3ylMKoAFTkgjNS02IAMDNO6BNx4J8ylcNO%2FbVA1pDgVf70KWzeD8QEx%2FvOumvHWCTBCgO9CmBSbxeATwW72zAcQ9xKC%2FE6TBfEa8cTEkzMrPozXGO608LQhJolVrz8pvQ0OJpH59EBH0U4qiZQ5b3pfM%2BIDUCrzW4CPUzC%2F2y0eUW06yNB1pU7%2F1fgMeLgpqbzOnzDa%2BPm8BjqkAXRIniHexxF%2Fy3SlJ52ZXVVZQOg0LsRV%2FEuOuqR5ROkfXj%2FaTV0RChGEV8j4IAea6CRr3fr6XnGtgUMItaAt31mWMqcrOmdjNtcqb%2Bv%2FrzupvOUU7QvAQLXLD9E9D4WQwF%2FnigGHKGgYVwfTH48NE0TfVDVUb8ZQmoiIblizD32JPh5Qh3WftLMzY07fskh%2BF6OXblOL4Af00IzCItYJtJ7qse9K&X-Amz-Signature=c4d90af616107315e389b87aa76e87599e4367c33917dc49ce5a120797289d79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
