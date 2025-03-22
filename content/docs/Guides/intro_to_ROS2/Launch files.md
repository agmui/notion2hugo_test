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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7LW6XZV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDZ9lJTCcvwP1zqQSxiRW9%2Fm5A4jnBkdUfxD3FmUGo%2B3AiEAvZDAnNTNewM4p1L2ZiU9xdqPbsb4RhhHpJOW6h6PCecqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVQ6kH8F2SG60gOiircA%2B%2BuAQtMngnO%2FfCtOsDs50FA1apB0o%2FZLqjauB5fGCMKQWc6EZ4i%2BGUhv%2Bnwo5JFxoxt78bwIQWTpcX4VDWiAtKaQNdO%2FGFdjiRYQN%2FcbhssXdj3SNwNLUtSZxPzPOWZGms7fQzd11YmKX3A2cebSocAoFYxAh%2B%2Brz1%2BUniemRgWwfxS3gz5lLDqzeW9ZBpY9rK6zEPA1sbRr4U3JiR884u4z57P9OYAJkzQLKwFQb8N4HXnjTs3f1Zkss0Uj%2FasMWQrjIfNeu%2F3UmlvMg8DtkB9ak8NP7mUVewyrkvwSmJYXP1Hv3uhsqrBqh4wo3xZD8vDxlu0C01uw5i6JCvv34babITIyQkc7bOTqb9bJ%2Fcc1DmD79KGcGSkZOjq%2F08Bc%2FbL2OYZ0YGYQceC0YaROVALmLUgiJmio%2BhQF6p%2BNDNIgChNOmL%2FwBGx8UvEvghW4xOdpSurHaN9j7VYQTqN47WRx7k4kqWH19eZf2efFaAFiZ6nGzzLs0KLSun6M%2BBzNcag4J6cRXGG0U2Kl1fEq1tiMsEvEwXhaaz%2FMoK%2BegwFpGxZOCkwL1QVGNztbcrX01HbndEnRrM0oeSkXXKGxVkL%2BU0%2FZI3CQVpJWDymtibpZPy63WSlmhdB82TOMOXn%2BL4GOqUBrVx1bwzus39FZTwZc00wdtwSCDOU9Mq1ozVayqMUuI%2BNRNHxAi%2BqGReZgTs9d0NUVkp7tPMqZtvdPezno%2Bfu%2FvI8%2BHLanXjRLg02JYxS2zv%2FQdm76x8g%2FHqTRn1Ek388REpjVOHJ2oFqb8MhkSu%2Brtwe9A1GS6i54Z0qqoU0vRgVyc0%2FbGdDr4rCj78JLe5paTcEXG3TVnE4K%2Fb%2FEEyV7zJ13dKi&X-Amz-Signature=7a2d181c101f2c0eb504be2da7aa4ef01bac140986b5c8273f78a89786823907&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7LW6XZV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDZ9lJTCcvwP1zqQSxiRW9%2Fm5A4jnBkdUfxD3FmUGo%2B3AiEAvZDAnNTNewM4p1L2ZiU9xdqPbsb4RhhHpJOW6h6PCecqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVQ6kH8F2SG60gOiircA%2B%2BuAQtMngnO%2FfCtOsDs50FA1apB0o%2FZLqjauB5fGCMKQWc6EZ4i%2BGUhv%2Bnwo5JFxoxt78bwIQWTpcX4VDWiAtKaQNdO%2FGFdjiRYQN%2FcbhssXdj3SNwNLUtSZxPzPOWZGms7fQzd11YmKX3A2cebSocAoFYxAh%2B%2Brz1%2BUniemRgWwfxS3gz5lLDqzeW9ZBpY9rK6zEPA1sbRr4U3JiR884u4z57P9OYAJkzQLKwFQb8N4HXnjTs3f1Zkss0Uj%2FasMWQrjIfNeu%2F3UmlvMg8DtkB9ak8NP7mUVewyrkvwSmJYXP1Hv3uhsqrBqh4wo3xZD8vDxlu0C01uw5i6JCvv34babITIyQkc7bOTqb9bJ%2Fcc1DmD79KGcGSkZOjq%2F08Bc%2FbL2OYZ0YGYQceC0YaROVALmLUgiJmio%2BhQF6p%2BNDNIgChNOmL%2FwBGx8UvEvghW4xOdpSurHaN9j7VYQTqN47WRx7k4kqWH19eZf2efFaAFiZ6nGzzLs0KLSun6M%2BBzNcag4J6cRXGG0U2Kl1fEq1tiMsEvEwXhaaz%2FMoK%2BegwFpGxZOCkwL1QVGNztbcrX01HbndEnRrM0oeSkXXKGxVkL%2BU0%2FZI3CQVpJWDymtibpZPy63WSlmhdB82TOMOXn%2BL4GOqUBrVx1bwzus39FZTwZc00wdtwSCDOU9Mq1ozVayqMUuI%2BNRNHxAi%2BqGReZgTs9d0NUVkp7tPMqZtvdPezno%2Bfu%2FvI8%2BHLanXjRLg02JYxS2zv%2FQdm76x8g%2FHqTRn1Ek388REpjVOHJ2oFqb8MhkSu%2Brtwe9A1GS6i54Z0qqoU0vRgVyc0%2FbGdDr4rCj78JLe5paTcEXG3TVnE4K%2Fb%2FEEyV7zJ13dKi&X-Amz-Signature=e959d14519e00593c1695e27ca0ad7042ef86b3639b7b5386bd95333d6386ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7LW6XZV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDZ9lJTCcvwP1zqQSxiRW9%2Fm5A4jnBkdUfxD3FmUGo%2B3AiEAvZDAnNTNewM4p1L2ZiU9xdqPbsb4RhhHpJOW6h6PCecqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVQ6kH8F2SG60gOiircA%2B%2BuAQtMngnO%2FfCtOsDs50FA1apB0o%2FZLqjauB5fGCMKQWc6EZ4i%2BGUhv%2Bnwo5JFxoxt78bwIQWTpcX4VDWiAtKaQNdO%2FGFdjiRYQN%2FcbhssXdj3SNwNLUtSZxPzPOWZGms7fQzd11YmKX3A2cebSocAoFYxAh%2B%2Brz1%2BUniemRgWwfxS3gz5lLDqzeW9ZBpY9rK6zEPA1sbRr4U3JiR884u4z57P9OYAJkzQLKwFQb8N4HXnjTs3f1Zkss0Uj%2FasMWQrjIfNeu%2F3UmlvMg8DtkB9ak8NP7mUVewyrkvwSmJYXP1Hv3uhsqrBqh4wo3xZD8vDxlu0C01uw5i6JCvv34babITIyQkc7bOTqb9bJ%2Fcc1DmD79KGcGSkZOjq%2F08Bc%2FbL2OYZ0YGYQceC0YaROVALmLUgiJmio%2BhQF6p%2BNDNIgChNOmL%2FwBGx8UvEvghW4xOdpSurHaN9j7VYQTqN47WRx7k4kqWH19eZf2efFaAFiZ6nGzzLs0KLSun6M%2BBzNcag4J6cRXGG0U2Kl1fEq1tiMsEvEwXhaaz%2FMoK%2BegwFpGxZOCkwL1QVGNztbcrX01HbndEnRrM0oeSkXXKGxVkL%2BU0%2FZI3CQVpJWDymtibpZPy63WSlmhdB82TOMOXn%2BL4GOqUBrVx1bwzus39FZTwZc00wdtwSCDOU9Mq1ozVayqMUuI%2BNRNHxAi%2BqGReZgTs9d0NUVkp7tPMqZtvdPezno%2Bfu%2FvI8%2BHLanXjRLg02JYxS2zv%2FQdm76x8g%2FHqTRn1Ek388REpjVOHJ2oFqb8MhkSu%2Brtwe9A1GS6i54Z0qqoU0vRgVyc0%2FbGdDr4rCj78JLe5paTcEXG3TVnE4K%2Fb%2FEEyV7zJ13dKi&X-Amz-Signature=be42ac021f0e5fae46f81367f4064e4ce6231724fb32278a4b0446e0d352ecce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
