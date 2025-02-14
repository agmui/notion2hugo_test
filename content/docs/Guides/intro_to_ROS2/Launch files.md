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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CRWKDZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFuYysy6jykNQ2I2BM5PJeJAiD7vO8juzAOhuMWIKvXVAiAsIp9lBRpq8svgV7Acro9i2UNrtl0buslhB7nzauwqWSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2T%2Fp8p0ar8X6t4XXKtwDJVvVqO3Cu%2Bfqi5tN1KGWhQC5%2B9G7W7t4D4FqEoGIODLEWkO76Bp%2FVm1XWSgpZe%2FZ0c5Cmc4BAV%2Bny9A6ZigPgiqko3AJpENffoqcXk%2F%2B2lsVrS5iavR5ipSRs07NQp264BBdhGW4JOPT9ZChNVM7T9D1mZmrTQSa8ljEPI6%2Fro972NqfI9k0FU0IXnQWXhlyiOiPzbU3hXyRfa0cpTxTqW%2FZxh8EBEnvSNkKx9EBPTcwwCknM3zvnunVAkpe%2B%2F930Jsg%2FZZpUNmhOnvUVk7sK%2Fkwu4VUQQA459wm9SKTnrhLmRbu5nOojxLoT6DzoyBdPZPEL9OxYJz%2BHPGB5fhamZ8aAwazbpgJqMqbHJRc9EKI15DugVe75kG9I4asYlSuc7UuiizWkythH%2FRxVhrKZ2Y7UkM7ctJJ14SxHuLUuAYWuPWjlffKckuijfq6MbUG1nIw1Pqkw%2Fr%2Bgj4uRxt0chRj4TXRU3Fr4UW15C08w4WxM4vH0hmSbl70w%2FRVvZh5mV1eoBpOcLWy4V0wtbDRZl7YqslnvoakEwrdgFKKraV785SnfdQSH3R7vHWKtLLt4%2Fdy5zwRgkB3bKPJNCkSn%2B0q%2BRB38FiHB3OUaZ26XdHCcNOXjMylxqKBDuYwgba%2BvQY6pgGbhdiHcwGABbeKR%2FOPfguD7rJD0tGPiBkGHAxY7jcIwoz943cEVYMpXj0Hc07%2FCxZbI8BX3gvC3%2BJJKwDfUEtoaDcWb%2BI51ZQtSmFYl0TU7c9uPHDCLyzF9q%2BPn2PO%2B9IAOk0HpBem7%2BBjvWhOYXF1Df8Q1amQfTma59nyD%2BeWu4%2Ft6XTKWAHfV54Aotk3tad%2Bx7RArpwCui8b6AHAFgn1K9dmM%2F2n&X-Amz-Signature=539011deb783114eb5da4d168488afe4fb3bea14d8e620c5cf8d6319f55fa2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CRWKDZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFuYysy6jykNQ2I2BM5PJeJAiD7vO8juzAOhuMWIKvXVAiAsIp9lBRpq8svgV7Acro9i2UNrtl0buslhB7nzauwqWSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2T%2Fp8p0ar8X6t4XXKtwDJVvVqO3Cu%2Bfqi5tN1KGWhQC5%2B9G7W7t4D4FqEoGIODLEWkO76Bp%2FVm1XWSgpZe%2FZ0c5Cmc4BAV%2Bny9A6ZigPgiqko3AJpENffoqcXk%2F%2B2lsVrS5iavR5ipSRs07NQp264BBdhGW4JOPT9ZChNVM7T9D1mZmrTQSa8ljEPI6%2Fro972NqfI9k0FU0IXnQWXhlyiOiPzbU3hXyRfa0cpTxTqW%2FZxh8EBEnvSNkKx9EBPTcwwCknM3zvnunVAkpe%2B%2F930Jsg%2FZZpUNmhOnvUVk7sK%2Fkwu4VUQQA459wm9SKTnrhLmRbu5nOojxLoT6DzoyBdPZPEL9OxYJz%2BHPGB5fhamZ8aAwazbpgJqMqbHJRc9EKI15DugVe75kG9I4asYlSuc7UuiizWkythH%2FRxVhrKZ2Y7UkM7ctJJ14SxHuLUuAYWuPWjlffKckuijfq6MbUG1nIw1Pqkw%2Fr%2Bgj4uRxt0chRj4TXRU3Fr4UW15C08w4WxM4vH0hmSbl70w%2FRVvZh5mV1eoBpOcLWy4V0wtbDRZl7YqslnvoakEwrdgFKKraV785SnfdQSH3R7vHWKtLLt4%2Fdy5zwRgkB3bKPJNCkSn%2B0q%2BRB38FiHB3OUaZ26XdHCcNOXjMylxqKBDuYwgba%2BvQY6pgGbhdiHcwGABbeKR%2FOPfguD7rJD0tGPiBkGHAxY7jcIwoz943cEVYMpXj0Hc07%2FCxZbI8BX3gvC3%2BJJKwDfUEtoaDcWb%2BI51ZQtSmFYl0TU7c9uPHDCLyzF9q%2BPn2PO%2B9IAOk0HpBem7%2BBjvWhOYXF1Df8Q1amQfTma59nyD%2BeWu4%2Ft6XTKWAHfV54Aotk3tad%2Bx7RArpwCui8b6AHAFgn1K9dmM%2F2n&X-Amz-Signature=aeb25e191bab9b5393920765725de9d2eca3af7683ad6e639ac583706b286acf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CRWKDZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFuYysy6jykNQ2I2BM5PJeJAiD7vO8juzAOhuMWIKvXVAiAsIp9lBRpq8svgV7Acro9i2UNrtl0buslhB7nzauwqWSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2T%2Fp8p0ar8X6t4XXKtwDJVvVqO3Cu%2Bfqi5tN1KGWhQC5%2B9G7W7t4D4FqEoGIODLEWkO76Bp%2FVm1XWSgpZe%2FZ0c5Cmc4BAV%2Bny9A6ZigPgiqko3AJpENffoqcXk%2F%2B2lsVrS5iavR5ipSRs07NQp264BBdhGW4JOPT9ZChNVM7T9D1mZmrTQSa8ljEPI6%2Fro972NqfI9k0FU0IXnQWXhlyiOiPzbU3hXyRfa0cpTxTqW%2FZxh8EBEnvSNkKx9EBPTcwwCknM3zvnunVAkpe%2B%2F930Jsg%2FZZpUNmhOnvUVk7sK%2Fkwu4VUQQA459wm9SKTnrhLmRbu5nOojxLoT6DzoyBdPZPEL9OxYJz%2BHPGB5fhamZ8aAwazbpgJqMqbHJRc9EKI15DugVe75kG9I4asYlSuc7UuiizWkythH%2FRxVhrKZ2Y7UkM7ctJJ14SxHuLUuAYWuPWjlffKckuijfq6MbUG1nIw1Pqkw%2Fr%2Bgj4uRxt0chRj4TXRU3Fr4UW15C08w4WxM4vH0hmSbl70w%2FRVvZh5mV1eoBpOcLWy4V0wtbDRZl7YqslnvoakEwrdgFKKraV785SnfdQSH3R7vHWKtLLt4%2Fdy5zwRgkB3bKPJNCkSn%2B0q%2BRB38FiHB3OUaZ26XdHCcNOXjMylxqKBDuYwgba%2BvQY6pgGbhdiHcwGABbeKR%2FOPfguD7rJD0tGPiBkGHAxY7jcIwoz943cEVYMpXj0Hc07%2FCxZbI8BX3gvC3%2BJJKwDfUEtoaDcWb%2BI51ZQtSmFYl0TU7c9uPHDCLyzF9q%2BPn2PO%2B9IAOk0HpBem7%2BBjvWhOYXF1Df8Q1amQfTma59nyD%2BeWu4%2Ft6XTKWAHfV54Aotk3tad%2Bx7RArpwCui8b6AHAFgn1K9dmM%2F2n&X-Amz-Signature=0467626b51a395e36e7ad282fbf94dc944457de377959d22e9b90beeb816de20&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
