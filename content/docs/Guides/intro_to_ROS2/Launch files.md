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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJLX4MS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCFjZRranyGSVtauITKp%2F856%2FeyUTj4PbDFDtwMrfDJ2QIhAJvDvJoyaz7AG1ZiBX%2B6buavHqTcknJNe%2BwCa%2Fc58dWPKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkkBtEWwekihv0r4q3AOEpYBmTwnkQ8U7TieWb5TAWuTG5%2BgxqD02AmSZlnGEFFlNl8%2BxxoKnmihoDn8wLF5GeqiU38A%2B6jmgg5HmRnhCFO6VDev1tmI1ZIG%2B3ts4ZrPiCPdHXllghUj7YA5hOOU39SRAhWgT2ERR3Ss%2F4wqXsq6gLq0YJp4NI1IONUBa07QUvIvn6iUHkuEzAhYLMu6Y45pxrsxEUl01OofDp%2FCZ2cXPyevZJeq%2B9MOK1jRvTVLo49ti%2FeqZfqGGRwngn8VZ33LTBIPkNRrsv8MWW2cs1vt8iqBJAJ%2B42qSVTGWerBxDQELMoKRH%2BiB%2B3U%2BeuhwH4%2B7SkuhAJxt%2BW1gxR5Njdg%2BLM4b5iLnQrRDV7wO4AlBLVejaPKy0OvGxYANWbWcXZEa3eS7bLioqX%2FsVT%2BGtAlsvIcDviCcr6A0zYeggNqL5Je7PGwGhgZt%2B5a%2BztB9xoHjrV1%2FC%2Bf4qPIMzJufGrBF2TI00I6uxPPXoMBccn8cGj28vLpHRdZioui9XZMex%2F1JWQdk9mdAihEea6x16O3KNJUBcv2adRnLxh%2BlT11E3rC8c76SJkkbpc0erAL4YofCNLmPdyMbB%2Bd18cinLtZkNP7v7ANdsINoG2qkL%2BGrFUNRwDHX%2FlJlkwjDqlOu%2FBjqkAZ52aMR5%2Bh5Vx9GPFhl%2F6ISOL3QT8Y91zc708YrMOVFOq4PYwX4CSdPS%2FM5TtFZRMRjw8HjYrOx0oJFkSnGJl1SefF7SdIE6ETGUMBpJLm%2BpE0nMFmMoH%2BusmgzUO0DS5oQ3071dCb%2Bf2BiWvypVmAXC220bSL9WBSAi6204nq%2FS6RVKlV63EHXQGVQJ18I4fMNh7CFdIESSli8Q9mIF12aTnv9l&X-Amz-Signature=9fe3bea77860cf41770b917ed1e115cb57f285cc6e3facb8c348a083f4412c82&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJLX4MS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCFjZRranyGSVtauITKp%2F856%2FeyUTj4PbDFDtwMrfDJ2QIhAJvDvJoyaz7AG1ZiBX%2B6buavHqTcknJNe%2BwCa%2Fc58dWPKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkkBtEWwekihv0r4q3AOEpYBmTwnkQ8U7TieWb5TAWuTG5%2BgxqD02AmSZlnGEFFlNl8%2BxxoKnmihoDn8wLF5GeqiU38A%2B6jmgg5HmRnhCFO6VDev1tmI1ZIG%2B3ts4ZrPiCPdHXllghUj7YA5hOOU39SRAhWgT2ERR3Ss%2F4wqXsq6gLq0YJp4NI1IONUBa07QUvIvn6iUHkuEzAhYLMu6Y45pxrsxEUl01OofDp%2FCZ2cXPyevZJeq%2B9MOK1jRvTVLo49ti%2FeqZfqGGRwngn8VZ33LTBIPkNRrsv8MWW2cs1vt8iqBJAJ%2B42qSVTGWerBxDQELMoKRH%2BiB%2B3U%2BeuhwH4%2B7SkuhAJxt%2BW1gxR5Njdg%2BLM4b5iLnQrRDV7wO4AlBLVejaPKy0OvGxYANWbWcXZEa3eS7bLioqX%2FsVT%2BGtAlsvIcDviCcr6A0zYeggNqL5Je7PGwGhgZt%2B5a%2BztB9xoHjrV1%2FC%2Bf4qPIMzJufGrBF2TI00I6uxPPXoMBccn8cGj28vLpHRdZioui9XZMex%2F1JWQdk9mdAihEea6x16O3KNJUBcv2adRnLxh%2BlT11E3rC8c76SJkkbpc0erAL4YofCNLmPdyMbB%2Bd18cinLtZkNP7v7ANdsINoG2qkL%2BGrFUNRwDHX%2FlJlkwjDqlOu%2FBjqkAZ52aMR5%2Bh5Vx9GPFhl%2F6ISOL3QT8Y91zc708YrMOVFOq4PYwX4CSdPS%2FM5TtFZRMRjw8HjYrOx0oJFkSnGJl1SefF7SdIE6ETGUMBpJLm%2BpE0nMFmMoH%2BusmgzUO0DS5oQ3071dCb%2Bf2BiWvypVmAXC220bSL9WBSAi6204nq%2FS6RVKlV63EHXQGVQJ18I4fMNh7CFdIESSli8Q9mIF12aTnv9l&X-Amz-Signature=0d09c3c7adc27ad5f107bb1b54031becea2af4b5c5a4b520973e55298031ebd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJLX4MS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCFjZRranyGSVtauITKp%2F856%2FeyUTj4PbDFDtwMrfDJ2QIhAJvDvJoyaz7AG1ZiBX%2B6buavHqTcknJNe%2BwCa%2Fc58dWPKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTkkBtEWwekihv0r4q3AOEpYBmTwnkQ8U7TieWb5TAWuTG5%2BgxqD02AmSZlnGEFFlNl8%2BxxoKnmihoDn8wLF5GeqiU38A%2B6jmgg5HmRnhCFO6VDev1tmI1ZIG%2B3ts4ZrPiCPdHXllghUj7YA5hOOU39SRAhWgT2ERR3Ss%2F4wqXsq6gLq0YJp4NI1IONUBa07QUvIvn6iUHkuEzAhYLMu6Y45pxrsxEUl01OofDp%2FCZ2cXPyevZJeq%2B9MOK1jRvTVLo49ti%2FeqZfqGGRwngn8VZ33LTBIPkNRrsv8MWW2cs1vt8iqBJAJ%2B42qSVTGWerBxDQELMoKRH%2BiB%2B3U%2BeuhwH4%2B7SkuhAJxt%2BW1gxR5Njdg%2BLM4b5iLnQrRDV7wO4AlBLVejaPKy0OvGxYANWbWcXZEa3eS7bLioqX%2FsVT%2BGtAlsvIcDviCcr6A0zYeggNqL5Je7PGwGhgZt%2B5a%2BztB9xoHjrV1%2FC%2Bf4qPIMzJufGrBF2TI00I6uxPPXoMBccn8cGj28vLpHRdZioui9XZMex%2F1JWQdk9mdAihEea6x16O3KNJUBcv2adRnLxh%2BlT11E3rC8c76SJkkbpc0erAL4YofCNLmPdyMbB%2Bd18cinLtZkNP7v7ANdsINoG2qkL%2BGrFUNRwDHX%2FlJlkwjDqlOu%2FBjqkAZ52aMR5%2Bh5Vx9GPFhl%2F6ISOL3QT8Y91zc708YrMOVFOq4PYwX4CSdPS%2FM5TtFZRMRjw8HjYrOx0oJFkSnGJl1SefF7SdIE6ETGUMBpJLm%2BpE0nMFmMoH%2BusmgzUO0DS5oQ3071dCb%2Bf2BiWvypVmAXC220bSL9WBSAi6204nq%2FS6RVKlV63EHXQGVQJ18I4fMNh7CFdIESSli8Q9mIF12aTnv9l&X-Amz-Signature=0c9cd504383e0c7d9db9dc93ed6164e56bf793d9f5dbb48c0d529b5e454f62af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
