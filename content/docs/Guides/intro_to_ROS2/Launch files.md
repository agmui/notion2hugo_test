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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSURLUH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDztzICJRFtdgXINwuRi1vhWjVauqF3Gqq10lBua%2FYNcQIhAOdr%2Fr4NMKgWTEbcPWX%2BSXDKAMfnYxSE12aEVJfTBjAXKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMrEkc93aoTYg2MFQq3ANlERSFX3P1NjWf8RsSCYdA%2BwcHfusLy2l2edQxoznr56osouNcZWOfFF5DAxRPVR0%2B3QFZpZcckhb%2FYXddHl2PDxR8xULdut9yGN9%2FhGl0mwbTRWf3ZwCbZhee4js4cPsqChDR%2FdqxYg2qcrna0lys0QObxzyMtROHOuvzjlnqqhkBntFpemLHYW23d6L6TC6ysnyQ8tvFp8GpcqGXo3Ypp6PkyySWTt5fEwH3GZwKBOU%2FFjU1FG86DFR37EGAUWibTh3QRQFdUT37PHtHAqa%2FcpiL7HjxBKtRhvH4oJunlcGny904AW2uK%2Fx1KR0tE%2BbM81au05zqJpba8Op%2FDsB7pQAhWjvSEflLLO2j6cObIGL1e4GQUdX7elLNt52C85PR7YIV7bbim%2FQf1RU28t9H27HUxBLEWbPQi%2F31oZsHzSqgfW6L0GafZiB6lvByJv0iLgcvvPw1wEloqR0xgjqm3LIEXSY%2FqzSQ24UfEcWyR4eaUXW65tzwoJWhaNDsGRi%2BJ%2FUucCLK4g2PhkVZNfYsue0GlKn7kJw4GpInEdMJoFzO30VBTeyFmoPfjWKOuOWleUxfrPSbM51w7VFIHU5ZMsUJjfW73RNRGNI%2BD3Cd6v2HyF7%2FFBvCjH66DzDCr%2FK%2FBjqkATTN5%2B4MiTyo0aneLnQ88n4WbCNFUEKVo3BFCvYtldd5wNnsOfayR1DG0PN%2FNi04GqI25F9MPuI%2B0gyOCP7dpd6kreCX9a0RqKuyHK4XYCEc6DSBWZgFG517O7hBdy7xEuyRwuy9422EK1yA0S%2BnES6F3FdIr20UmNIHr6%2FFWa1yVa9lZRBVmKkLpCDC88gTwgga7hrP35kxtEkr%2Bk0QCuuW5O5q&X-Amz-Signature=b8840fda4c5276c0ae2291917d2f6cc12116f4563ef2f0c8503c78510c10fb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSURLUH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDztzICJRFtdgXINwuRi1vhWjVauqF3Gqq10lBua%2FYNcQIhAOdr%2Fr4NMKgWTEbcPWX%2BSXDKAMfnYxSE12aEVJfTBjAXKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMrEkc93aoTYg2MFQq3ANlERSFX3P1NjWf8RsSCYdA%2BwcHfusLy2l2edQxoznr56osouNcZWOfFF5DAxRPVR0%2B3QFZpZcckhb%2FYXddHl2PDxR8xULdut9yGN9%2FhGl0mwbTRWf3ZwCbZhee4js4cPsqChDR%2FdqxYg2qcrna0lys0QObxzyMtROHOuvzjlnqqhkBntFpemLHYW23d6L6TC6ysnyQ8tvFp8GpcqGXo3Ypp6PkyySWTt5fEwH3GZwKBOU%2FFjU1FG86DFR37EGAUWibTh3QRQFdUT37PHtHAqa%2FcpiL7HjxBKtRhvH4oJunlcGny904AW2uK%2Fx1KR0tE%2BbM81au05zqJpba8Op%2FDsB7pQAhWjvSEflLLO2j6cObIGL1e4GQUdX7elLNt52C85PR7YIV7bbim%2FQf1RU28t9H27HUxBLEWbPQi%2F31oZsHzSqgfW6L0GafZiB6lvByJv0iLgcvvPw1wEloqR0xgjqm3LIEXSY%2FqzSQ24UfEcWyR4eaUXW65tzwoJWhaNDsGRi%2BJ%2FUucCLK4g2PhkVZNfYsue0GlKn7kJw4GpInEdMJoFzO30VBTeyFmoPfjWKOuOWleUxfrPSbM51w7VFIHU5ZMsUJjfW73RNRGNI%2BD3Cd6v2HyF7%2FFBvCjH66DzDCr%2FK%2FBjqkATTN5%2B4MiTyo0aneLnQ88n4WbCNFUEKVo3BFCvYtldd5wNnsOfayR1DG0PN%2FNi04GqI25F9MPuI%2B0gyOCP7dpd6kreCX9a0RqKuyHK4XYCEc6DSBWZgFG517O7hBdy7xEuyRwuy9422EK1yA0S%2BnES6F3FdIr20UmNIHr6%2FFWa1yVa9lZRBVmKkLpCDC88gTwgga7hrP35kxtEkr%2Bk0QCuuW5O5q&X-Amz-Signature=7b9a6c699a28afa32075f1225f574aca9b1ae368bf5a3aebd324e1977e5dba13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSURLUH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDztzICJRFtdgXINwuRi1vhWjVauqF3Gqq10lBua%2FYNcQIhAOdr%2Fr4NMKgWTEbcPWX%2BSXDKAMfnYxSE12aEVJfTBjAXKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMrEkc93aoTYg2MFQq3ANlERSFX3P1NjWf8RsSCYdA%2BwcHfusLy2l2edQxoznr56osouNcZWOfFF5DAxRPVR0%2B3QFZpZcckhb%2FYXddHl2PDxR8xULdut9yGN9%2FhGl0mwbTRWf3ZwCbZhee4js4cPsqChDR%2FdqxYg2qcrna0lys0QObxzyMtROHOuvzjlnqqhkBntFpemLHYW23d6L6TC6ysnyQ8tvFp8GpcqGXo3Ypp6PkyySWTt5fEwH3GZwKBOU%2FFjU1FG86DFR37EGAUWibTh3QRQFdUT37PHtHAqa%2FcpiL7HjxBKtRhvH4oJunlcGny904AW2uK%2Fx1KR0tE%2BbM81au05zqJpba8Op%2FDsB7pQAhWjvSEflLLO2j6cObIGL1e4GQUdX7elLNt52C85PR7YIV7bbim%2FQf1RU28t9H27HUxBLEWbPQi%2F31oZsHzSqgfW6L0GafZiB6lvByJv0iLgcvvPw1wEloqR0xgjqm3LIEXSY%2FqzSQ24UfEcWyR4eaUXW65tzwoJWhaNDsGRi%2BJ%2FUucCLK4g2PhkVZNfYsue0GlKn7kJw4GpInEdMJoFzO30VBTeyFmoPfjWKOuOWleUxfrPSbM51w7VFIHU5ZMsUJjfW73RNRGNI%2BD3Cd6v2HyF7%2FFBvCjH66DzDCr%2FK%2FBjqkATTN5%2B4MiTyo0aneLnQ88n4WbCNFUEKVo3BFCvYtldd5wNnsOfayR1DG0PN%2FNi04GqI25F9MPuI%2B0gyOCP7dpd6kreCX9a0RqKuyHK4XYCEc6DSBWZgFG517O7hBdy7xEuyRwuy9422EK1yA0S%2BnES6F3FdIr20UmNIHr6%2FFWa1yVa9lZRBVmKkLpCDC88gTwgga7hrP35kxtEkr%2Bk0QCuuW5O5q&X-Amz-Signature=fb9ad39c519444c1908c84ca1b37e0554011531b12fa3b8143d2fc8b88e9c65f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
