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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567ZNEPR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIA8amwfI8heOk00YYBXSf%2BSGMfoVQceocXf9T7NlgcCHAiAs5CbWQP%2BC2pTjx0uoDLDnyAJiex5%2Bwk%2B54xRJjgjXXSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOpTuOJBaUaqRy4tYKtwD00fIZFl2DxNkGO2ltZpd54kiFYZGFhuexg1Az3yi0HR%2F0R3uYiYwrPMLM%2Fqn7xULjTp%2F9ebjjwBJ89ngzwDGc4QdZA6K4%2FqZnXyj1gGQZKKzmvmTWdQEkB5jMnj9v1CJ6m2yafEZ2HdEIFrdoTGRD%2FC2SEM5ox2kTlIJDGKkXHwM6gwC%2FUlHBimnB47kL19ZPIRp%2BqRRaMnBSGh3ETVMgl2GhA5eeE%2Bb9OnFKZsT3O5xfLI50l6uXuEe0XB4FszakA5I%2FyXbxoqx7Sz0ZRdzfOG4X%2BSFvNoi18mOnMMx%2BiUmIeEsM%2FC4XjiZEbKhLfTeVfpu9DkGjtsfOTfUVde6b2EPVdpIIFv51YPJYGzYhmzcZ7FJpbB%2BrwhbyuvOM3hrWBreFw56KEOivBao2tD%2B2d%2B2tfAvspeQRnRL%2FEACs%2FGmMBIeEd2%2FeJr7Qg82C%2B7WXlqTRMXYqD7AU%2FpiWUJ%2FDdebxanwchE0mTZMYe17U0p1UwNSMIkS0P3RCItX3%2BOPTaBepxYpNPtxN8QevZ%2Btu6i711RAfirgXSV%2BzoSFQRKDiekxhrzNQ4NTznuA1CtvcmnToG0fclYw8shjEZ%2BYInEwyBb7PB1nxH7OlNoRHRho9B8BYaONX3FePb4w2c%2FowwY6pgHndS0WqX50m3pdDD6w79owSKKg2MzVNuGIX2pFhg3fz71Vmd1RYYWtS0j0PfNmLwIS26Ss0AqUb%2FLtUcxWF7fNwBxKO6SEV%2BxkrU7e8JKj7j%2FnXZYPqfWwb0C6Xup8iuNo5UwrvtY52bl5%2Bw1DMjbfd149SJaYKwxTx5km5AfaMSACZa5gEzpCDwWzTms25Hg5oFn6VTrXuZISbV5Ekbl%2FiRA3VtbP&X-Amz-Signature=560cda3f6d14d49fe2be6131eb91ca4243514a8c115d21f62042ec1dace0be8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567ZNEPR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIA8amwfI8heOk00YYBXSf%2BSGMfoVQceocXf9T7NlgcCHAiAs5CbWQP%2BC2pTjx0uoDLDnyAJiex5%2Bwk%2B54xRJjgjXXSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOpTuOJBaUaqRy4tYKtwD00fIZFl2DxNkGO2ltZpd54kiFYZGFhuexg1Az3yi0HR%2F0R3uYiYwrPMLM%2Fqn7xULjTp%2F9ebjjwBJ89ngzwDGc4QdZA6K4%2FqZnXyj1gGQZKKzmvmTWdQEkB5jMnj9v1CJ6m2yafEZ2HdEIFrdoTGRD%2FC2SEM5ox2kTlIJDGKkXHwM6gwC%2FUlHBimnB47kL19ZPIRp%2BqRRaMnBSGh3ETVMgl2GhA5eeE%2Bb9OnFKZsT3O5xfLI50l6uXuEe0XB4FszakA5I%2FyXbxoqx7Sz0ZRdzfOG4X%2BSFvNoi18mOnMMx%2BiUmIeEsM%2FC4XjiZEbKhLfTeVfpu9DkGjtsfOTfUVde6b2EPVdpIIFv51YPJYGzYhmzcZ7FJpbB%2BrwhbyuvOM3hrWBreFw56KEOivBao2tD%2B2d%2B2tfAvspeQRnRL%2FEACs%2FGmMBIeEd2%2FeJr7Qg82C%2B7WXlqTRMXYqD7AU%2FpiWUJ%2FDdebxanwchE0mTZMYe17U0p1UwNSMIkS0P3RCItX3%2BOPTaBepxYpNPtxN8QevZ%2Btu6i711RAfirgXSV%2BzoSFQRKDiekxhrzNQ4NTznuA1CtvcmnToG0fclYw8shjEZ%2BYInEwyBb7PB1nxH7OlNoRHRho9B8BYaONX3FePb4w2c%2FowwY6pgHndS0WqX50m3pdDD6w79owSKKg2MzVNuGIX2pFhg3fz71Vmd1RYYWtS0j0PfNmLwIS26Ss0AqUb%2FLtUcxWF7fNwBxKO6SEV%2BxkrU7e8JKj7j%2FnXZYPqfWwb0C6Xup8iuNo5UwrvtY52bl5%2Bw1DMjbfd149SJaYKwxTx5km5AfaMSACZa5gEzpCDwWzTms25Hg5oFn6VTrXuZISbV5Ekbl%2FiRA3VtbP&X-Amz-Signature=621176f3810afc11d3812d8fb196036b85f58a3fadfcb9b31d0528d07f7d7ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567ZNEPR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIA8amwfI8heOk00YYBXSf%2BSGMfoVQceocXf9T7NlgcCHAiAs5CbWQP%2BC2pTjx0uoDLDnyAJiex5%2Bwk%2B54xRJjgjXXSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOpTuOJBaUaqRy4tYKtwD00fIZFl2DxNkGO2ltZpd54kiFYZGFhuexg1Az3yi0HR%2F0R3uYiYwrPMLM%2Fqn7xULjTp%2F9ebjjwBJ89ngzwDGc4QdZA6K4%2FqZnXyj1gGQZKKzmvmTWdQEkB5jMnj9v1CJ6m2yafEZ2HdEIFrdoTGRD%2FC2SEM5ox2kTlIJDGKkXHwM6gwC%2FUlHBimnB47kL19ZPIRp%2BqRRaMnBSGh3ETVMgl2GhA5eeE%2Bb9OnFKZsT3O5xfLI50l6uXuEe0XB4FszakA5I%2FyXbxoqx7Sz0ZRdzfOG4X%2BSFvNoi18mOnMMx%2BiUmIeEsM%2FC4XjiZEbKhLfTeVfpu9DkGjtsfOTfUVde6b2EPVdpIIFv51YPJYGzYhmzcZ7FJpbB%2BrwhbyuvOM3hrWBreFw56KEOivBao2tD%2B2d%2B2tfAvspeQRnRL%2FEACs%2FGmMBIeEd2%2FeJr7Qg82C%2B7WXlqTRMXYqD7AU%2FpiWUJ%2FDdebxanwchE0mTZMYe17U0p1UwNSMIkS0P3RCItX3%2BOPTaBepxYpNPtxN8QevZ%2Btu6i711RAfirgXSV%2BzoSFQRKDiekxhrzNQ4NTznuA1CtvcmnToG0fclYw8shjEZ%2BYInEwyBb7PB1nxH7OlNoRHRho9B8BYaONX3FePb4w2c%2FowwY6pgHndS0WqX50m3pdDD6w79owSKKg2MzVNuGIX2pFhg3fz71Vmd1RYYWtS0j0PfNmLwIS26Ss0AqUb%2FLtUcxWF7fNwBxKO6SEV%2BxkrU7e8JKj7j%2FnXZYPqfWwb0C6Xup8iuNo5UwrvtY52bl5%2Bw1DMjbfd149SJaYKwxTx5km5AfaMSACZa5gEzpCDwWzTms25Hg5oFn6VTrXuZISbV5Ekbl%2FiRA3VtbP&X-Amz-Signature=6e257dd82dd6bfb162ca85eba3ffdf30815589f7d4c1b2f8d6bccbba2fbdf34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
