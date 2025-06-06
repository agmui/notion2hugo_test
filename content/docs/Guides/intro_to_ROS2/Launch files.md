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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KCOWNP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtr3yQixfWrOf0HZuYcj9dk61wd2jeHv2dil4%2BWLMm5QIhAJPyXt2AwCO1GqCDP7B8gpt%2FVPbaOpffH%2BRJmkYHZONdKv8DCGUQABoMNjM3NDIzMTgzODA1IgyzliM7E2sq%2FPnZB5kq3AN%2Bdj8J%2FobqoorsM7frG6UNcSAX7MtenSvgrIFGe7vtMmg7tgoK3xylIH9bXBF42mKPG4I23BwKh9Dh2osYDmV3lXAlqjfhZkL%2FlhQrQpRmBOxdO6zFCrie%2F84nsFiQIYjxlHCpCkxpIT3%2FQuCX5Y0r%2F8taTPbnUQVCvT1ersmt5vj5TZA%2F3gLMQR9X2TbhRRuYUIqelh%2BXGh2PkgXDoZTQ1K%2BOA7pfARNEd%2Biz4DwMRrSV5KxMwzXQyuQ1jZfSq6l99xQY3DdFnJrmpp62vDITeejNyYSqpEyPze0vptA8i1Bx87d%2BR%2F5SN4p%2FhY2Mp7tExcKQqjM7FJg5nWYbfyQxBcE33%2FrGGWlOWU%2Bvy4zY0dyL4qDBPCWVDuezSMtTl6Qsywm0GK1lwKdrS2cRbBg1IemENqGcejXjaEJ5X4LLo3%2BhGpMvpWWM5t6WeiSHU0BGf6BLvB2cfcEECUo0IG1PSUab9z6Y%2FQ3vACZN5UhCtt6v31X%2BFkZxZfCrlBp3TjBcCAXhurSskUedXlpHcb%2BWkWwSoagCTY75bYHfx3geQ8yMHRW07rqsJGPlKJM7Qnm8YzOL%2BoMhAvqyE%2B05mhZ0FKXkSBqDdymDIN0nIjGYNsV4GVKSx7%2FK3BBnHjC6kY3CBjqkAWtdTX0Bl1N0mBmgNmyXXlvaYYk0VZzQtxTWTbRgMjFGeo3jkY4eRQIuckMYKPzHmMe7YiixaC3b5zMon6m%2FeEUKfXnL%2BzhD3%2FP%2Fx0lbwKRei03Zrc4npBJCk3zCYwS10dpTeatQG0VOqHLDXgkKXlqYkU90TCYsnc7ZbqMX6SACgbtlWpTbPvBKCo0aJdZqeUe6cQsWmLgbt4%2Fk9wSQyfWKp6%2Bb&X-Amz-Signature=7c74259ca563c6c82a1141c1d3f30288de5cd1db8fb0e4f507f1bb321dead690&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KCOWNP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtr3yQixfWrOf0HZuYcj9dk61wd2jeHv2dil4%2BWLMm5QIhAJPyXt2AwCO1GqCDP7B8gpt%2FVPbaOpffH%2BRJmkYHZONdKv8DCGUQABoMNjM3NDIzMTgzODA1IgyzliM7E2sq%2FPnZB5kq3AN%2Bdj8J%2FobqoorsM7frG6UNcSAX7MtenSvgrIFGe7vtMmg7tgoK3xylIH9bXBF42mKPG4I23BwKh9Dh2osYDmV3lXAlqjfhZkL%2FlhQrQpRmBOxdO6zFCrie%2F84nsFiQIYjxlHCpCkxpIT3%2FQuCX5Y0r%2F8taTPbnUQVCvT1ersmt5vj5TZA%2F3gLMQR9X2TbhRRuYUIqelh%2BXGh2PkgXDoZTQ1K%2BOA7pfARNEd%2Biz4DwMRrSV5KxMwzXQyuQ1jZfSq6l99xQY3DdFnJrmpp62vDITeejNyYSqpEyPze0vptA8i1Bx87d%2BR%2F5SN4p%2FhY2Mp7tExcKQqjM7FJg5nWYbfyQxBcE33%2FrGGWlOWU%2Bvy4zY0dyL4qDBPCWVDuezSMtTl6Qsywm0GK1lwKdrS2cRbBg1IemENqGcejXjaEJ5X4LLo3%2BhGpMvpWWM5t6WeiSHU0BGf6BLvB2cfcEECUo0IG1PSUab9z6Y%2FQ3vACZN5UhCtt6v31X%2BFkZxZfCrlBp3TjBcCAXhurSskUedXlpHcb%2BWkWwSoagCTY75bYHfx3geQ8yMHRW07rqsJGPlKJM7Qnm8YzOL%2BoMhAvqyE%2B05mhZ0FKXkSBqDdymDIN0nIjGYNsV4GVKSx7%2FK3BBnHjC6kY3CBjqkAWtdTX0Bl1N0mBmgNmyXXlvaYYk0VZzQtxTWTbRgMjFGeo3jkY4eRQIuckMYKPzHmMe7YiixaC3b5zMon6m%2FeEUKfXnL%2BzhD3%2FP%2Fx0lbwKRei03Zrc4npBJCk3zCYwS10dpTeatQG0VOqHLDXgkKXlqYkU90TCYsnc7ZbqMX6SACgbtlWpTbPvBKCo0aJdZqeUe6cQsWmLgbt4%2Fk9wSQyfWKp6%2Bb&X-Amz-Signature=70d780bcffc6fb514de09a253683cc93ba326dc32cd1ed1b201808683ec3e8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KCOWNP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtr3yQixfWrOf0HZuYcj9dk61wd2jeHv2dil4%2BWLMm5QIhAJPyXt2AwCO1GqCDP7B8gpt%2FVPbaOpffH%2BRJmkYHZONdKv8DCGUQABoMNjM3NDIzMTgzODA1IgyzliM7E2sq%2FPnZB5kq3AN%2Bdj8J%2FobqoorsM7frG6UNcSAX7MtenSvgrIFGe7vtMmg7tgoK3xylIH9bXBF42mKPG4I23BwKh9Dh2osYDmV3lXAlqjfhZkL%2FlhQrQpRmBOxdO6zFCrie%2F84nsFiQIYjxlHCpCkxpIT3%2FQuCX5Y0r%2F8taTPbnUQVCvT1ersmt5vj5TZA%2F3gLMQR9X2TbhRRuYUIqelh%2BXGh2PkgXDoZTQ1K%2BOA7pfARNEd%2Biz4DwMRrSV5KxMwzXQyuQ1jZfSq6l99xQY3DdFnJrmpp62vDITeejNyYSqpEyPze0vptA8i1Bx87d%2BR%2F5SN4p%2FhY2Mp7tExcKQqjM7FJg5nWYbfyQxBcE33%2FrGGWlOWU%2Bvy4zY0dyL4qDBPCWVDuezSMtTl6Qsywm0GK1lwKdrS2cRbBg1IemENqGcejXjaEJ5X4LLo3%2BhGpMvpWWM5t6WeiSHU0BGf6BLvB2cfcEECUo0IG1PSUab9z6Y%2FQ3vACZN5UhCtt6v31X%2BFkZxZfCrlBp3TjBcCAXhurSskUedXlpHcb%2BWkWwSoagCTY75bYHfx3geQ8yMHRW07rqsJGPlKJM7Qnm8YzOL%2BoMhAvqyE%2B05mhZ0FKXkSBqDdymDIN0nIjGYNsV4GVKSx7%2FK3BBnHjC6kY3CBjqkAWtdTX0Bl1N0mBmgNmyXXlvaYYk0VZzQtxTWTbRgMjFGeo3jkY4eRQIuckMYKPzHmMe7YiixaC3b5zMon6m%2FeEUKfXnL%2BzhD3%2FP%2Fx0lbwKRei03Zrc4npBJCk3zCYwS10dpTeatQG0VOqHLDXgkKXlqYkU90TCYsnc7ZbqMX6SACgbtlWpTbPvBKCo0aJdZqeUe6cQsWmLgbt4%2Fk9wSQyfWKp6%2Bb&X-Amz-Signature=0ffd930423b54cbb50490d591aca5bf15a3270240e9d904656c5216dd36b9a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
