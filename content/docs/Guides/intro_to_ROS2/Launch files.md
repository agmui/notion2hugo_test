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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWHG64K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAThjOWP6XibepbuwThQ82MUQm9itM3yrW8B61MoKyqSAiA7veD1c82YQBoXRit%2BVB1ZPS5t90%2FGaboXE64mYWAzgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigYpHNaNy%2F253CxvKtwDbDaJFFAMc0jstvSGQD0TRzrzA9HdnypxvnJka9knhq4WLbvEOlYyRwbOoOzBtIQSIh2c5DWaHGylZfS20btu7vCuNAESm1X0vz6fWHa9WgzfhBqn%2B0DtgLV%2FbHZtbLscMFn2hw8%2FilOxZ6oZQev6qd7Xtssn03WtaizLrK%2F8VVahaicGrOJrnpNEMhdojr1I6fL4JojvxaraM9o7PTA9cfYako5CoUJ1n5FD%2FDoy7jqmqbe%2FS60ecUkZlVjpJw2Wz89%2FoO32FVmhFoawSg4RhuoaUjN1iHJAXQXeS4pCjdDIzSqpWf3FQQU0yo90pPS81HnDS2c3kpruzgvM%2BCMbqfD11shFzQHDk4BjM%2FRP7%2Bc%2FjbBtAh4s7I4yFDmKYSvQnQaAc1RNrh4YVPfvCGRf%2B22aYYrsIdJRzDn9a2LcAXyg1u%2BmHmSGLlEg5KKQBKOll2AA%2BMqizuIABJLenfuO%2FTGT9Yhm0205Q9%2Bhv0Saat3UrUjDxfp9udgNLFZxcizsR1dEF8VuMYidTB5t7iAB2cExBOyF3m91TzTT%2B81qBvSdkY3BHTb21g4mY4QrmjfpY6hob3tyu5VvM2KCB0n1TnLQHfMyeJq6eg%2FldSqKuasRY3QURTI5FXtnUCgwi8eNvgY6pgFSdMkc9%2BFdNtrVS6jlw7HOA5N2W7RG8Cr6IDTgoRLS%2BF4dDDa5jRU2YN4GpxQclDYLKY4zwngSVzn5tzLSWXM6AD0IiVUJV9CIfvsx4Vl4AB96hJVXMbyEL%2F3X63vAroQ1R%2B3oZvKhPTS1Z92JNUO7ZmycN0hv9%2FNB3s1ZQva9TBaUsTweRE6V7rkm0EqoRnMm8CMouXtLbcSRdAulvdo82sMTSqKO&X-Amz-Signature=76785378c8854b03657d3c16097bdc945483afe963216b7f8b0179ee803d2028&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWHG64K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAThjOWP6XibepbuwThQ82MUQm9itM3yrW8B61MoKyqSAiA7veD1c82YQBoXRit%2BVB1ZPS5t90%2FGaboXE64mYWAzgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigYpHNaNy%2F253CxvKtwDbDaJFFAMc0jstvSGQD0TRzrzA9HdnypxvnJka9knhq4WLbvEOlYyRwbOoOzBtIQSIh2c5DWaHGylZfS20btu7vCuNAESm1X0vz6fWHa9WgzfhBqn%2B0DtgLV%2FbHZtbLscMFn2hw8%2FilOxZ6oZQev6qd7Xtssn03WtaizLrK%2F8VVahaicGrOJrnpNEMhdojr1I6fL4JojvxaraM9o7PTA9cfYako5CoUJ1n5FD%2FDoy7jqmqbe%2FS60ecUkZlVjpJw2Wz89%2FoO32FVmhFoawSg4RhuoaUjN1iHJAXQXeS4pCjdDIzSqpWf3FQQU0yo90pPS81HnDS2c3kpruzgvM%2BCMbqfD11shFzQHDk4BjM%2FRP7%2Bc%2FjbBtAh4s7I4yFDmKYSvQnQaAc1RNrh4YVPfvCGRf%2B22aYYrsIdJRzDn9a2LcAXyg1u%2BmHmSGLlEg5KKQBKOll2AA%2BMqizuIABJLenfuO%2FTGT9Yhm0205Q9%2Bhv0Saat3UrUjDxfp9udgNLFZxcizsR1dEF8VuMYidTB5t7iAB2cExBOyF3m91TzTT%2B81qBvSdkY3BHTb21g4mY4QrmjfpY6hob3tyu5VvM2KCB0n1TnLQHfMyeJq6eg%2FldSqKuasRY3QURTI5FXtnUCgwi8eNvgY6pgFSdMkc9%2BFdNtrVS6jlw7HOA5N2W7RG8Cr6IDTgoRLS%2BF4dDDa5jRU2YN4GpxQclDYLKY4zwngSVzn5tzLSWXM6AD0IiVUJV9CIfvsx4Vl4AB96hJVXMbyEL%2F3X63vAroQ1R%2B3oZvKhPTS1Z92JNUO7ZmycN0hv9%2FNB3s1ZQva9TBaUsTweRE6V7rkm0EqoRnMm8CMouXtLbcSRdAulvdo82sMTSqKO&X-Amz-Signature=189a5cdd185a90877d1610da9f99d7ccbbf8805c3e657a8ec44c9002a1dd8c20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWHG64K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAThjOWP6XibepbuwThQ82MUQm9itM3yrW8B61MoKyqSAiA7veD1c82YQBoXRit%2BVB1ZPS5t90%2FGaboXE64mYWAzgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigYpHNaNy%2F253CxvKtwDbDaJFFAMc0jstvSGQD0TRzrzA9HdnypxvnJka9knhq4WLbvEOlYyRwbOoOzBtIQSIh2c5DWaHGylZfS20btu7vCuNAESm1X0vz6fWHa9WgzfhBqn%2B0DtgLV%2FbHZtbLscMFn2hw8%2FilOxZ6oZQev6qd7Xtssn03WtaizLrK%2F8VVahaicGrOJrnpNEMhdojr1I6fL4JojvxaraM9o7PTA9cfYako5CoUJ1n5FD%2FDoy7jqmqbe%2FS60ecUkZlVjpJw2Wz89%2FoO32FVmhFoawSg4RhuoaUjN1iHJAXQXeS4pCjdDIzSqpWf3FQQU0yo90pPS81HnDS2c3kpruzgvM%2BCMbqfD11shFzQHDk4BjM%2FRP7%2Bc%2FjbBtAh4s7I4yFDmKYSvQnQaAc1RNrh4YVPfvCGRf%2B22aYYrsIdJRzDn9a2LcAXyg1u%2BmHmSGLlEg5KKQBKOll2AA%2BMqizuIABJLenfuO%2FTGT9Yhm0205Q9%2Bhv0Saat3UrUjDxfp9udgNLFZxcizsR1dEF8VuMYidTB5t7iAB2cExBOyF3m91TzTT%2B81qBvSdkY3BHTb21g4mY4QrmjfpY6hob3tyu5VvM2KCB0n1TnLQHfMyeJq6eg%2FldSqKuasRY3QURTI5FXtnUCgwi8eNvgY6pgFSdMkc9%2BFdNtrVS6jlw7HOA5N2W7RG8Cr6IDTgoRLS%2BF4dDDa5jRU2YN4GpxQclDYLKY4zwngSVzn5tzLSWXM6AD0IiVUJV9CIfvsx4Vl4AB96hJVXMbyEL%2F3X63vAroQ1R%2B3oZvKhPTS1Z92JNUO7ZmycN0hv9%2FNB3s1ZQva9TBaUsTweRE6V7rkm0EqoRnMm8CMouXtLbcSRdAulvdo82sMTSqKO&X-Amz-Signature=cd8f5a0ce31fbd2d17df82482888aa6aa6527ba8d76f113732d8463327f4be96&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
