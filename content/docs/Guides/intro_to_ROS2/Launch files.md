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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4YS5KG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGkj7xh%2F3pBo2eklO%2F%2F29prK%2B17Gkh3Hkw9Ii4rSTRYGAiEA0BMsBcv1BuwGYg16dl7RFDsgX4O1ME8mBGgx8TaWe1Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLgjqDg%2BU4yUk2ZCoyrcAzlTinnambBSeLu9bgnpHT6Eafq38QFu4CaW2R3aBwubV6nj8g%2BFPE%2Fz4tUBeLnRzb%2Ftd%2F0BbHD0KAJ89fC%2FbZBkYtSBX5iMU%2FnhPOYfGF0B8Z47izPgAxUcEWSNLSgNqAPYL%2FXbYf3dLbTtx%2Fp9BdlrPxPSUE3g3I8OoIkrQYV3Ph%2BcApD9MMlxYZ%2BJnkGLKKI3y%2BDzrMBkLAjVD4AkFFtZXnPngnWWUq%2FSJ5dGPpI8bMHETFZhBbf%2BonUWDf4Zc%2BtigzX%2B%2FYVC6oWkZ37rSx7oZESqjP2iSlIoA2BatbVKD%2FjrRO05ZbqHcmDcc4dqTj1EVfTssGaxKJw14T01ILgTP0bhu9ulT9sCV982aFMW1%2Baca3zcztcf7S0nF6dA5vvgfIugd6JG9zcdQkj%2FuXFnKuOoYcJJvbCsD6CT%2BYaoasKb9HrYAwlAnLEtxswwU8aIbNsJKU%2BmqeHRG%2B%2FiOiFNEsa3CGtoQ088ZZYtHanvWWXfGhzPcjx5FIacpwdyjI05mGy4W6EP8FOzSgqwANANorpz2yDunQH%2BT3OO%2FnTyffmalMT3Hh7BaPtarAZ7JDH3zVkRh0pS5aqmydYXr%2BCnnqlqIwRAUCQfcAoCFUVS3rkA%2FowxemKZC4vsMMXps74GOqUBPK2WGFLEeVD1ptYLAOe8blUGMUwkhUDoGx46k05AyNkABPT1HC6x41ceC7lmdRZqYgqxiWYBUoqY2kPJXxradwpv%2FmA1n3MV5%2BCtu30ZuCpqVggQsXA2bgEZNq5MoNw4v9upgwvZt%2Fkn2M0pStzV%2B9dsZ2q7FJPMKppUblN7Bai3ObNdbK4pX6E%2Frg5siNSxcQjPRmtD%2B6AiIa8V1CRBdX5Y9ZnB&X-Amz-Signature=3e2a68f6596194c26c934aa3d10b1859945414a6245e0ef8d491813d3b410381&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4YS5KG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGkj7xh%2F3pBo2eklO%2F%2F29prK%2B17Gkh3Hkw9Ii4rSTRYGAiEA0BMsBcv1BuwGYg16dl7RFDsgX4O1ME8mBGgx8TaWe1Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLgjqDg%2BU4yUk2ZCoyrcAzlTinnambBSeLu9bgnpHT6Eafq38QFu4CaW2R3aBwubV6nj8g%2BFPE%2Fz4tUBeLnRzb%2Ftd%2F0BbHD0KAJ89fC%2FbZBkYtSBX5iMU%2FnhPOYfGF0B8Z47izPgAxUcEWSNLSgNqAPYL%2FXbYf3dLbTtx%2Fp9BdlrPxPSUE3g3I8OoIkrQYV3Ph%2BcApD9MMlxYZ%2BJnkGLKKI3y%2BDzrMBkLAjVD4AkFFtZXnPngnWWUq%2FSJ5dGPpI8bMHETFZhBbf%2BonUWDf4Zc%2BtigzX%2B%2FYVC6oWkZ37rSx7oZESqjP2iSlIoA2BatbVKD%2FjrRO05ZbqHcmDcc4dqTj1EVfTssGaxKJw14T01ILgTP0bhu9ulT9sCV982aFMW1%2Baca3zcztcf7S0nF6dA5vvgfIugd6JG9zcdQkj%2FuXFnKuOoYcJJvbCsD6CT%2BYaoasKb9HrYAwlAnLEtxswwU8aIbNsJKU%2BmqeHRG%2B%2FiOiFNEsa3CGtoQ088ZZYtHanvWWXfGhzPcjx5FIacpwdyjI05mGy4W6EP8FOzSgqwANANorpz2yDunQH%2BT3OO%2FnTyffmalMT3Hh7BaPtarAZ7JDH3zVkRh0pS5aqmydYXr%2BCnnqlqIwRAUCQfcAoCFUVS3rkA%2FowxemKZC4vsMMXps74GOqUBPK2WGFLEeVD1ptYLAOe8blUGMUwkhUDoGx46k05AyNkABPT1HC6x41ceC7lmdRZqYgqxiWYBUoqY2kPJXxradwpv%2FmA1n3MV5%2BCtu30ZuCpqVggQsXA2bgEZNq5MoNw4v9upgwvZt%2Fkn2M0pStzV%2B9dsZ2q7FJPMKppUblN7Bai3ObNdbK4pX6E%2Frg5siNSxcQjPRmtD%2B6AiIa8V1CRBdX5Y9ZnB&X-Amz-Signature=5f15a1836cc25fd59706f7c1634e8161138e6380791ae73f70bd54848e3e692f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4YS5KG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGkj7xh%2F3pBo2eklO%2F%2F29prK%2B17Gkh3Hkw9Ii4rSTRYGAiEA0BMsBcv1BuwGYg16dl7RFDsgX4O1ME8mBGgx8TaWe1Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLgjqDg%2BU4yUk2ZCoyrcAzlTinnambBSeLu9bgnpHT6Eafq38QFu4CaW2R3aBwubV6nj8g%2BFPE%2Fz4tUBeLnRzb%2Ftd%2F0BbHD0KAJ89fC%2FbZBkYtSBX5iMU%2FnhPOYfGF0B8Z47izPgAxUcEWSNLSgNqAPYL%2FXbYf3dLbTtx%2Fp9BdlrPxPSUE3g3I8OoIkrQYV3Ph%2BcApD9MMlxYZ%2BJnkGLKKI3y%2BDzrMBkLAjVD4AkFFtZXnPngnWWUq%2FSJ5dGPpI8bMHETFZhBbf%2BonUWDf4Zc%2BtigzX%2B%2FYVC6oWkZ37rSx7oZESqjP2iSlIoA2BatbVKD%2FjrRO05ZbqHcmDcc4dqTj1EVfTssGaxKJw14T01ILgTP0bhu9ulT9sCV982aFMW1%2Baca3zcztcf7S0nF6dA5vvgfIugd6JG9zcdQkj%2FuXFnKuOoYcJJvbCsD6CT%2BYaoasKb9HrYAwlAnLEtxswwU8aIbNsJKU%2BmqeHRG%2B%2FiOiFNEsa3CGtoQ088ZZYtHanvWWXfGhzPcjx5FIacpwdyjI05mGy4W6EP8FOzSgqwANANorpz2yDunQH%2BT3OO%2FnTyffmalMT3Hh7BaPtarAZ7JDH3zVkRh0pS5aqmydYXr%2BCnnqlqIwRAUCQfcAoCFUVS3rkA%2FowxemKZC4vsMMXps74GOqUBPK2WGFLEeVD1ptYLAOe8blUGMUwkhUDoGx46k05AyNkABPT1HC6x41ceC7lmdRZqYgqxiWYBUoqY2kPJXxradwpv%2FmA1n3MV5%2BCtu30ZuCpqVggQsXA2bgEZNq5MoNw4v9upgwvZt%2Fkn2M0pStzV%2B9dsZ2q7FJPMKppUblN7Bai3ObNdbK4pX6E%2Frg5siNSxcQjPRmtD%2B6AiIa8V1CRBdX5Y9ZnB&X-Amz-Signature=5b3c3654331af8fa7dabd2d7f18c068b2fb1ae57ad2222d40759d34f6ef895ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
