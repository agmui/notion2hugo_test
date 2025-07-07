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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHF2H6C%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCzkserUUeDU2X9YoTNkWydl%2FrH1QWOU84NwQ%2Fmk9PPKQIhAJzqoeGh2Mjdg%2BCh8Sg151Ui%2F9lEJM43u9BrfKquqPwRKv8DCG4QABoMNjM3NDIzMTgzODA1Igz2d5NIF%2Fftp8KhilAq3AM78oyguDEjKmebfNFrC5HxMPKk7NZEqdhVxJEJlDXhBmFlfaCB1dBL%2B1LMo5serBFTb5cTCWdgPDEb6zjdDVUL5FTqhFZUvQ4X1xBdZDM3RApvDUNunIquOKpzif3tpLL6g6wZohY7KRLqha%2FjOHr3M%2Bfkj8RIjNWxCbMAbeEiphceUg6lz0%2FJq6WLj1ihSx%2B5hEM4w5Ax01Y3%2Bj%2B2MbM1DYJUg7W7FvPzp2L%2FKgsrRM%2FYSZ9Q6yQPDFS1xzidFj0VQHItuZBc1%2BH15eUiFE0v9YzN43IpIaW%2Fv8piV%2FEvCfzDMKtPM584AO8uzJM5IU%2FuhEqIsCePOGMqXR1Wrp2cknBDFFB9%2Fwj%2BF55UxpDp9jp7Bqv71vNICKfj1SplborKzxj3uWO0r8HDE3QiQN9DGTD7xYH62j5mrk5cxrEMqmp%2FQSqgixUxktltxv%2BuEtbLLPkkqf%2F2xJx%2FwwBMj%2F7a%2Fv%2F8hxvruV09mr7CwSADSMMwEdqahEElG3thQOiR30YNlCJEXCauStjIGnDxajxh81hd1ny%2FXinwoh33wk86HGe%2FDPYuK1NgSADpEP%2F2S1jRFBPrs3YCAyW5RZEUfaKT%2B%2FSiePFaOkIgx7ueQGdAYiEs6NU80PZV19hF%2FDCrrK3DBjqkAbmU6%2BZvqwoozycMl4OPyHwhZigxqn91OA4N%2B87B%2BQkbDFDuoxey%2BaEsrng3oL%2B%2BifFIWIN7ALaP6uSCElPi%2F9EDRCRRUfpojYOmzGh5kHgLZsLBWVapbrW1VxnsGlR8mIJMm1IAKEKHHSqSLbOlDfJ7VP5pRHO7BoaxIJ9Gi0nivVi6QM5YBodz%2BxOkAFphc%2F6tPhaJ%2B3Exkb6aAIDByPLXpQjq&X-Amz-Signature=deb22c98b7f7c2db09dc03d25f07bcceb114132338117b8f39982add27ed2e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHF2H6C%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCzkserUUeDU2X9YoTNkWydl%2FrH1QWOU84NwQ%2Fmk9PPKQIhAJzqoeGh2Mjdg%2BCh8Sg151Ui%2F9lEJM43u9BrfKquqPwRKv8DCG4QABoMNjM3NDIzMTgzODA1Igz2d5NIF%2Fftp8KhilAq3AM78oyguDEjKmebfNFrC5HxMPKk7NZEqdhVxJEJlDXhBmFlfaCB1dBL%2B1LMo5serBFTb5cTCWdgPDEb6zjdDVUL5FTqhFZUvQ4X1xBdZDM3RApvDUNunIquOKpzif3tpLL6g6wZohY7KRLqha%2FjOHr3M%2Bfkj8RIjNWxCbMAbeEiphceUg6lz0%2FJq6WLj1ihSx%2B5hEM4w5Ax01Y3%2Bj%2B2MbM1DYJUg7W7FvPzp2L%2FKgsrRM%2FYSZ9Q6yQPDFS1xzidFj0VQHItuZBc1%2BH15eUiFE0v9YzN43IpIaW%2Fv8piV%2FEvCfzDMKtPM584AO8uzJM5IU%2FuhEqIsCePOGMqXR1Wrp2cknBDFFB9%2Fwj%2BF55UxpDp9jp7Bqv71vNICKfj1SplborKzxj3uWO0r8HDE3QiQN9DGTD7xYH62j5mrk5cxrEMqmp%2FQSqgixUxktltxv%2BuEtbLLPkkqf%2F2xJx%2FwwBMj%2F7a%2Fv%2F8hxvruV09mr7CwSADSMMwEdqahEElG3thQOiR30YNlCJEXCauStjIGnDxajxh81hd1ny%2FXinwoh33wk86HGe%2FDPYuK1NgSADpEP%2F2S1jRFBPrs3YCAyW5RZEUfaKT%2B%2FSiePFaOkIgx7ueQGdAYiEs6NU80PZV19hF%2FDCrrK3DBjqkAbmU6%2BZvqwoozycMl4OPyHwhZigxqn91OA4N%2B87B%2BQkbDFDuoxey%2BaEsrng3oL%2B%2BifFIWIN7ALaP6uSCElPi%2F9EDRCRRUfpojYOmzGh5kHgLZsLBWVapbrW1VxnsGlR8mIJMm1IAKEKHHSqSLbOlDfJ7VP5pRHO7BoaxIJ9Gi0nivVi6QM5YBodz%2BxOkAFphc%2F6tPhaJ%2B3Exkb6aAIDByPLXpQjq&X-Amz-Signature=fc0b33627264fa9b7e22c086bfb2762d003dce13b7be3da514cc8cb416d9a4ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHF2H6C%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCzkserUUeDU2X9YoTNkWydl%2FrH1QWOU84NwQ%2Fmk9PPKQIhAJzqoeGh2Mjdg%2BCh8Sg151Ui%2F9lEJM43u9BrfKquqPwRKv8DCG4QABoMNjM3NDIzMTgzODA1Igz2d5NIF%2Fftp8KhilAq3AM78oyguDEjKmebfNFrC5HxMPKk7NZEqdhVxJEJlDXhBmFlfaCB1dBL%2B1LMo5serBFTb5cTCWdgPDEb6zjdDVUL5FTqhFZUvQ4X1xBdZDM3RApvDUNunIquOKpzif3tpLL6g6wZohY7KRLqha%2FjOHr3M%2Bfkj8RIjNWxCbMAbeEiphceUg6lz0%2FJq6WLj1ihSx%2B5hEM4w5Ax01Y3%2Bj%2B2MbM1DYJUg7W7FvPzp2L%2FKgsrRM%2FYSZ9Q6yQPDFS1xzidFj0VQHItuZBc1%2BH15eUiFE0v9YzN43IpIaW%2Fv8piV%2FEvCfzDMKtPM584AO8uzJM5IU%2FuhEqIsCePOGMqXR1Wrp2cknBDFFB9%2Fwj%2BF55UxpDp9jp7Bqv71vNICKfj1SplborKzxj3uWO0r8HDE3QiQN9DGTD7xYH62j5mrk5cxrEMqmp%2FQSqgixUxktltxv%2BuEtbLLPkkqf%2F2xJx%2FwwBMj%2F7a%2Fv%2F8hxvruV09mr7CwSADSMMwEdqahEElG3thQOiR30YNlCJEXCauStjIGnDxajxh81hd1ny%2FXinwoh33wk86HGe%2FDPYuK1NgSADpEP%2F2S1jRFBPrs3YCAyW5RZEUfaKT%2B%2FSiePFaOkIgx7ueQGdAYiEs6NU80PZV19hF%2FDCrrK3DBjqkAbmU6%2BZvqwoozycMl4OPyHwhZigxqn91OA4N%2B87B%2BQkbDFDuoxey%2BaEsrng3oL%2B%2BifFIWIN7ALaP6uSCElPi%2F9EDRCRRUfpojYOmzGh5kHgLZsLBWVapbrW1VxnsGlR8mIJMm1IAKEKHHSqSLbOlDfJ7VP5pRHO7BoaxIJ9Gi0nivVi6QM5YBodz%2BxOkAFphc%2F6tPhaJ%2B3Exkb6aAIDByPLXpQjq&X-Amz-Signature=d0a9d53b735a140b0c45861b09c7538fbf1844456d68bb770b4c2a8da7235f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
