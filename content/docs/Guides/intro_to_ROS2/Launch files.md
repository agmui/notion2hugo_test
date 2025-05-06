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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXBW2JN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8Z8Dh5wyMyqNTsQ8bgCc2fh9%2BuyHnH1lC%2FeN5uripZAiB8jH7ytyERi6wFb8vQaKDLaC6UiGa0igkwjpqLPYea9ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQWWu2ZZO8fjWe1SiKtwDBNfMoZVRvtVnMK8f9VY4ajPU4ZSD25%2BEhu0OlUZNvi%2FDdeDSLUMQroBMpOBr2qkZ7wOtBg3GCndlnybGwiuN1SKnJwD57dYfDLCSwfXDYsBj%2BXVHGG6yIublJenaiw9oeKhyBNQ0hGnq1TCJ6xPwfkBKll3N0soYjjpUSA%2BPaBshlBSJ4oCiL4kiYJhGBGTqJPl7q1TXwSn3Zf1WAkpNUOTusZkjWy02dBUEuNtuc5P3uIk8RZnPj7I%2BfNwW3aF1nQ46IyUXy2P7OgYnikrDQ%2F2T5t5PD6C3PDg7EgKCLKlm4SbLZ53y987ymHKgInZqPBN46TctCA8YwPydAoDnHGwLMEg9tHzQzqaTvRKMCsnYPCeI3goj6zvHykbmtCHsnUgG9J2tqKnhXvukONOYqKbenayEUQOOnl4NjCoLEekDtRZfUp8sIiws5UjoDiFZ%2FA5pRfd7NAFK0WucYBg%2F4FRofIfDQ5%2B%2BWtbOwyix2C2iYK5fLRZMhlDSEczPg2wKCrQy8%2FDXIZiWBEtrep21tVctsvwZhQ2JdaE0qK5INN3yMwAKRd13mFVfrOWgty8bDnlOZveEZMr6XAJ2amc24ujUCGhOCFiCPtWa0ONBipO043ltmMZ8X8%2FAXcswoLHmwAY6pgGZs3A3TCkG7nHOmCCZY0NFy7nW80r8gltS7spuhowUfj5ZDrYxAymeAsee6KYgwJu6kcABibe5zbTOA86UQVnDdAh%2FWbqBtTPmFRCGIl4H653C5qAhTZXqdHz6e4nEPxYE0ZMhmxgQ072cVNOtv5N%2FExatL%2F%2Bk8DxEpGYwkgMOBlDR3U0Qa6JuvyzUQ48IqlR0vXSxBWCir3J4WHBOwYeabyL%2BEPl%2F&X-Amz-Signature=d0c4f449fed6fd24f90902b77fad938523ea226d6b6bcc0aa18c46d76d7fb81c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXBW2JN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8Z8Dh5wyMyqNTsQ8bgCc2fh9%2BuyHnH1lC%2FeN5uripZAiB8jH7ytyERi6wFb8vQaKDLaC6UiGa0igkwjpqLPYea9ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQWWu2ZZO8fjWe1SiKtwDBNfMoZVRvtVnMK8f9VY4ajPU4ZSD25%2BEhu0OlUZNvi%2FDdeDSLUMQroBMpOBr2qkZ7wOtBg3GCndlnybGwiuN1SKnJwD57dYfDLCSwfXDYsBj%2BXVHGG6yIublJenaiw9oeKhyBNQ0hGnq1TCJ6xPwfkBKll3N0soYjjpUSA%2BPaBshlBSJ4oCiL4kiYJhGBGTqJPl7q1TXwSn3Zf1WAkpNUOTusZkjWy02dBUEuNtuc5P3uIk8RZnPj7I%2BfNwW3aF1nQ46IyUXy2P7OgYnikrDQ%2F2T5t5PD6C3PDg7EgKCLKlm4SbLZ53y987ymHKgInZqPBN46TctCA8YwPydAoDnHGwLMEg9tHzQzqaTvRKMCsnYPCeI3goj6zvHykbmtCHsnUgG9J2tqKnhXvukONOYqKbenayEUQOOnl4NjCoLEekDtRZfUp8sIiws5UjoDiFZ%2FA5pRfd7NAFK0WucYBg%2F4FRofIfDQ5%2B%2BWtbOwyix2C2iYK5fLRZMhlDSEczPg2wKCrQy8%2FDXIZiWBEtrep21tVctsvwZhQ2JdaE0qK5INN3yMwAKRd13mFVfrOWgty8bDnlOZveEZMr6XAJ2amc24ujUCGhOCFiCPtWa0ONBipO043ltmMZ8X8%2FAXcswoLHmwAY6pgGZs3A3TCkG7nHOmCCZY0NFy7nW80r8gltS7spuhowUfj5ZDrYxAymeAsee6KYgwJu6kcABibe5zbTOA86UQVnDdAh%2FWbqBtTPmFRCGIl4H653C5qAhTZXqdHz6e4nEPxYE0ZMhmxgQ072cVNOtv5N%2FExatL%2F%2Bk8DxEpGYwkgMOBlDR3U0Qa6JuvyzUQ48IqlR0vXSxBWCir3J4WHBOwYeabyL%2BEPl%2F&X-Amz-Signature=e9d2d2ddc8b81db3b8c28c2b7ec22d3259b35ddcc2057e5bf2ac457df275e462&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXBW2JN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8Z8Dh5wyMyqNTsQ8bgCc2fh9%2BuyHnH1lC%2FeN5uripZAiB8jH7ytyERi6wFb8vQaKDLaC6UiGa0igkwjpqLPYea9ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQWWu2ZZO8fjWe1SiKtwDBNfMoZVRvtVnMK8f9VY4ajPU4ZSD25%2BEhu0OlUZNvi%2FDdeDSLUMQroBMpOBr2qkZ7wOtBg3GCndlnybGwiuN1SKnJwD57dYfDLCSwfXDYsBj%2BXVHGG6yIublJenaiw9oeKhyBNQ0hGnq1TCJ6xPwfkBKll3N0soYjjpUSA%2BPaBshlBSJ4oCiL4kiYJhGBGTqJPl7q1TXwSn3Zf1WAkpNUOTusZkjWy02dBUEuNtuc5P3uIk8RZnPj7I%2BfNwW3aF1nQ46IyUXy2P7OgYnikrDQ%2F2T5t5PD6C3PDg7EgKCLKlm4SbLZ53y987ymHKgInZqPBN46TctCA8YwPydAoDnHGwLMEg9tHzQzqaTvRKMCsnYPCeI3goj6zvHykbmtCHsnUgG9J2tqKnhXvukONOYqKbenayEUQOOnl4NjCoLEekDtRZfUp8sIiws5UjoDiFZ%2FA5pRfd7NAFK0WucYBg%2F4FRofIfDQ5%2B%2BWtbOwyix2C2iYK5fLRZMhlDSEczPg2wKCrQy8%2FDXIZiWBEtrep21tVctsvwZhQ2JdaE0qK5INN3yMwAKRd13mFVfrOWgty8bDnlOZveEZMr6XAJ2amc24ujUCGhOCFiCPtWa0ONBipO043ltmMZ8X8%2FAXcswoLHmwAY6pgGZs3A3TCkG7nHOmCCZY0NFy7nW80r8gltS7spuhowUfj5ZDrYxAymeAsee6KYgwJu6kcABibe5zbTOA86UQVnDdAh%2FWbqBtTPmFRCGIl4H653C5qAhTZXqdHz6e4nEPxYE0ZMhmxgQ072cVNOtv5N%2FExatL%2F%2Bk8DxEpGYwkgMOBlDR3U0Qa6JuvyzUQ48IqlR0vXSxBWCir3J4WHBOwYeabyL%2BEPl%2F&X-Amz-Signature=1e93f89b369ecf3b18a8ba2a3c996e4e02078a030d141e2b91b0a83ea1a13e65&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
