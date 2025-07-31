---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTVZMCG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUd1vmvrtKivYpmRUOy%2BJn6uV%2Br8QfP2cGADzEY1CXAiB6v2zR6IoaABjkMFbNXMt6raWtJ1r%2FCar5LpEgg9vYviqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36Uqa47Kr5jjFWnuKtwDg7nl1Ew15fZkG71PEID8YaQecfE2iWtdum9Q7Z9ZEJNMgmAK3lJntBxK34%2FEYrZKTd3wyry5DsKKFjDUBHEEC9I0mAzkhIbdNr07lcB9xZxeUaIQzQNU1tgPbleQVeAQxHQu%2Frj%2FZy8Yzo2%2FPfZ5cp0cvV2yLcLNMND%2F1kT5TDpUCNqdNpLfATezVecCldqYV5Bp9OcC0heNS%2BvM2ED5VhedO9gc2afaplc4p96l2q1lsz3FN3NsSUK1T9AW3Fi9FmwmlobsJDsR8XnDtHG6WfCwUzNTj6rb3%2FeVtUZcc7Y5OtxwhfIqtknl91zLr9igvp1W9m5aB1KVagLuoNIE%2BSPeBoMsggn15wkg6T7EFW4UH92docQFq93IZsOJmk1iLXqJA%2FaDBY6NeSmffhmMDjjTDGXwpKysB9iagpqb9vSPJRmwO3kvSp4z1xMmc%2BHZr1SnJ5ymVJ00oSgJLDAbrinP33oxme6WwBYEpiNByxhYZ38bnA2Ca26vfV2gBsGFow1JK0JK8UWeeT5NzfOoz4fkVeyYcIejrfPpPaL8VxgrDb355sG%2B5W0j%2BP3JQ80auVQLCu30v%2FEkC4fywdVHEinn2ZZlgPl6ZB7AHuAYTXrRpEi%2B%2BVHpZELGn%2FkwrKCqxAY6pgFWRzjhXY%2BE0WGKFOF9%2FkSW3lI8EWvQFHvikY9N3pHUkDm45uukOwFbL2chrHkgZ9Jix%2Fh6qQxMHRydqPSdbYXNn2BonUtzv2RwnlPsTuUu%2FnWx%2BS%2BpYyE0h%2BYKQI2CjvmKDkEQU06bHysTtVmRxl4poThz7fx0PfMroty%2FQxmL8zotpa3qgsdJnFJcVnQmaiIuYRcYN8HlMV63aAsZEC5Tu6DoblFh&X-Amz-Signature=23c842bc4449e4d3a114a2dbac2cf040230321ca1a91e6ab619b4e1362465664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTVZMCG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUd1vmvrtKivYpmRUOy%2BJn6uV%2Br8QfP2cGADzEY1CXAiB6v2zR6IoaABjkMFbNXMt6raWtJ1r%2FCar5LpEgg9vYviqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36Uqa47Kr5jjFWnuKtwDg7nl1Ew15fZkG71PEID8YaQecfE2iWtdum9Q7Z9ZEJNMgmAK3lJntBxK34%2FEYrZKTd3wyry5DsKKFjDUBHEEC9I0mAzkhIbdNr07lcB9xZxeUaIQzQNU1tgPbleQVeAQxHQu%2Frj%2FZy8Yzo2%2FPfZ5cp0cvV2yLcLNMND%2F1kT5TDpUCNqdNpLfATezVecCldqYV5Bp9OcC0heNS%2BvM2ED5VhedO9gc2afaplc4p96l2q1lsz3FN3NsSUK1T9AW3Fi9FmwmlobsJDsR8XnDtHG6WfCwUzNTj6rb3%2FeVtUZcc7Y5OtxwhfIqtknl91zLr9igvp1W9m5aB1KVagLuoNIE%2BSPeBoMsggn15wkg6T7EFW4UH92docQFq93IZsOJmk1iLXqJA%2FaDBY6NeSmffhmMDjjTDGXwpKysB9iagpqb9vSPJRmwO3kvSp4z1xMmc%2BHZr1SnJ5ymVJ00oSgJLDAbrinP33oxme6WwBYEpiNByxhYZ38bnA2Ca26vfV2gBsGFow1JK0JK8UWeeT5NzfOoz4fkVeyYcIejrfPpPaL8VxgrDb355sG%2B5W0j%2BP3JQ80auVQLCu30v%2FEkC4fywdVHEinn2ZZlgPl6ZB7AHuAYTXrRpEi%2B%2BVHpZELGn%2FkwrKCqxAY6pgFWRzjhXY%2BE0WGKFOF9%2FkSW3lI8EWvQFHvikY9N3pHUkDm45uukOwFbL2chrHkgZ9Jix%2Fh6qQxMHRydqPSdbYXNn2BonUtzv2RwnlPsTuUu%2FnWx%2BS%2BpYyE0h%2BYKQI2CjvmKDkEQU06bHysTtVmRxl4poThz7fx0PfMroty%2FQxmL8zotpa3qgsdJnFJcVnQmaiIuYRcYN8HlMV63aAsZEC5Tu6DoblFh&X-Amz-Signature=f48a642579a7541f98d1e42433f15aae239232eb7ed54df23d1b4de07b8bb2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTVZMCG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUd1vmvrtKivYpmRUOy%2BJn6uV%2Br8QfP2cGADzEY1CXAiB6v2zR6IoaABjkMFbNXMt6raWtJ1r%2FCar5LpEgg9vYviqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36Uqa47Kr5jjFWnuKtwDg7nl1Ew15fZkG71PEID8YaQecfE2iWtdum9Q7Z9ZEJNMgmAK3lJntBxK34%2FEYrZKTd3wyry5DsKKFjDUBHEEC9I0mAzkhIbdNr07lcB9xZxeUaIQzQNU1tgPbleQVeAQxHQu%2Frj%2FZy8Yzo2%2FPfZ5cp0cvV2yLcLNMND%2F1kT5TDpUCNqdNpLfATezVecCldqYV5Bp9OcC0heNS%2BvM2ED5VhedO9gc2afaplc4p96l2q1lsz3FN3NsSUK1T9AW3Fi9FmwmlobsJDsR8XnDtHG6WfCwUzNTj6rb3%2FeVtUZcc7Y5OtxwhfIqtknl91zLr9igvp1W9m5aB1KVagLuoNIE%2BSPeBoMsggn15wkg6T7EFW4UH92docQFq93IZsOJmk1iLXqJA%2FaDBY6NeSmffhmMDjjTDGXwpKysB9iagpqb9vSPJRmwO3kvSp4z1xMmc%2BHZr1SnJ5ymVJ00oSgJLDAbrinP33oxme6WwBYEpiNByxhYZ38bnA2Ca26vfV2gBsGFow1JK0JK8UWeeT5NzfOoz4fkVeyYcIejrfPpPaL8VxgrDb355sG%2B5W0j%2BP3JQ80auVQLCu30v%2FEkC4fywdVHEinn2ZZlgPl6ZB7AHuAYTXrRpEi%2B%2BVHpZELGn%2FkwrKCqxAY6pgFWRzjhXY%2BE0WGKFOF9%2FkSW3lI8EWvQFHvikY9N3pHUkDm45uukOwFbL2chrHkgZ9Jix%2Fh6qQxMHRydqPSdbYXNn2BonUtzv2RwnlPsTuUu%2FnWx%2BS%2BpYyE0h%2BYKQI2CjvmKDkEQU06bHysTtVmRxl4poThz7fx0PfMroty%2FQxmL8zotpa3qgsdJnFJcVnQmaiIuYRcYN8HlMV63aAsZEC5Tu6DoblFh&X-Amz-Signature=9e87fdb09ea668ad1a9b898562a6c9d6595a36599f6d4b79a758838fb7e66f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
