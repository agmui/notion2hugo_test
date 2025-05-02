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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKNAEXOZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHKFt0jTPSyfGc40Lf8tjUCptNVGxd5zW8hgb6fKFr7TAiAU3uN56rfPP2n2VQ%2FDAYHHgBZmtfatgEe2qL3RHOC8pCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BjMtdiW1i%2FLuGWYGKtwDHlWwCAAbMEhbWPft5Gu%2BnXw3jpp5g1F2aWwMY%2F8YFv%2BMFTlhWQU6wmbhiVLpxqOw%2B1lhLn%2FuR6OzeKPVmIe3KEzSCSBA%2FOJSJopr5bQiDnWE9IAM7t4ewF3Bmo7DwUJpWN4pFjSmdY26pCDz1xPMIO4VTZhIdR9Z7gVWL1OuCEskegmgZyYwF8EhIIqNhgZRSQmEvjaF5waLpGbOeTFFGa8BtTSRmvIRexL7VX%2FwY8wBYqH0RUWuUOfmxTyMTS35eNTuoYQGfKBn7xcE6B4VwoSJlsJEIqxNpzcD%2FlKyy9RiJ71b5Jhq7XFnb%2B9uP7ANRmV44tMLZ9eCY8WJmDuT2Fv%2BjdZG%2FxXiCw8zm5o4SuPGraAqtjwqAprnD2AlSpTLMT9BGAu%2Bg7Hj6pmcGjdP329Tfou2x2aWKoLYJEFJWdzqIYMFNrisozKJvXu0msrOgSyPznY8ebCGTHySqMOeKcXMXz7tDDxOIuqfnmEd%2F0ZE%2FVYsSEEb8kN6hfj9t913tESiJBgQ1YE1SWbhp%2FshfxU5oHnDxcmp%2BuxuB4qgqUuNIw7emRvBrGmM9Bni8OZrhbkABbN8QwoeEz0ItS7%2F3EzlXuAjmf%2B0eWX5tIuen9yvDFcIcVVLR4%2BaA%2BcwluTTwAY6pgE%2FEDyADQcMugKJqimWQhkdwdh4XJDAJQsSDF8hVZIZw%2FzUWgO8Ob8bJ4LHBGCQOogN1isVXSDESfFvLfnmFc%2FiLPMvyWkl8%2FGWjEhKNVqRQ4dku9lHd%2BshFsd6P%2B1KOvLL%2FNLfU7LG9HtCDykK6IFVYNeI2DoVxv%2Fas7aRAz49C7zXCVJZ%2Bt6%2BFFQrQn9x78NXHsr7VYdymWOqsO6l9v7lhXHiDoOX&X-Amz-Signature=97e27523429ad0ee8d0ff2b23c5401f374c5d6c35ad9033fa3d26d7913f78799&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKNAEXOZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHKFt0jTPSyfGc40Lf8tjUCptNVGxd5zW8hgb6fKFr7TAiAU3uN56rfPP2n2VQ%2FDAYHHgBZmtfatgEe2qL3RHOC8pCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BjMtdiW1i%2FLuGWYGKtwDHlWwCAAbMEhbWPft5Gu%2BnXw3jpp5g1F2aWwMY%2F8YFv%2BMFTlhWQU6wmbhiVLpxqOw%2B1lhLn%2FuR6OzeKPVmIe3KEzSCSBA%2FOJSJopr5bQiDnWE9IAM7t4ewF3Bmo7DwUJpWN4pFjSmdY26pCDz1xPMIO4VTZhIdR9Z7gVWL1OuCEskegmgZyYwF8EhIIqNhgZRSQmEvjaF5waLpGbOeTFFGa8BtTSRmvIRexL7VX%2FwY8wBYqH0RUWuUOfmxTyMTS35eNTuoYQGfKBn7xcE6B4VwoSJlsJEIqxNpzcD%2FlKyy9RiJ71b5Jhq7XFnb%2B9uP7ANRmV44tMLZ9eCY8WJmDuT2Fv%2BjdZG%2FxXiCw8zm5o4SuPGraAqtjwqAprnD2AlSpTLMT9BGAu%2Bg7Hj6pmcGjdP329Tfou2x2aWKoLYJEFJWdzqIYMFNrisozKJvXu0msrOgSyPznY8ebCGTHySqMOeKcXMXz7tDDxOIuqfnmEd%2F0ZE%2FVYsSEEb8kN6hfj9t913tESiJBgQ1YE1SWbhp%2FshfxU5oHnDxcmp%2BuxuB4qgqUuNIw7emRvBrGmM9Bni8OZrhbkABbN8QwoeEz0ItS7%2F3EzlXuAjmf%2B0eWX5tIuen9yvDFcIcVVLR4%2BaA%2BcwluTTwAY6pgE%2FEDyADQcMugKJqimWQhkdwdh4XJDAJQsSDF8hVZIZw%2FzUWgO8Ob8bJ4LHBGCQOogN1isVXSDESfFvLfnmFc%2FiLPMvyWkl8%2FGWjEhKNVqRQ4dku9lHd%2BshFsd6P%2B1KOvLL%2FNLfU7LG9HtCDykK6IFVYNeI2DoVxv%2Fas7aRAz49C7zXCVJZ%2Bt6%2BFFQrQn9x78NXHsr7VYdymWOqsO6l9v7lhXHiDoOX&X-Amz-Signature=12e7b8ec6cfbe6613c783ed50903997756ca05e520a5baa7c47747615675f7d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKNAEXOZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHKFt0jTPSyfGc40Lf8tjUCptNVGxd5zW8hgb6fKFr7TAiAU3uN56rfPP2n2VQ%2FDAYHHgBZmtfatgEe2qL3RHOC8pCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BjMtdiW1i%2FLuGWYGKtwDHlWwCAAbMEhbWPft5Gu%2BnXw3jpp5g1F2aWwMY%2F8YFv%2BMFTlhWQU6wmbhiVLpxqOw%2B1lhLn%2FuR6OzeKPVmIe3KEzSCSBA%2FOJSJopr5bQiDnWE9IAM7t4ewF3Bmo7DwUJpWN4pFjSmdY26pCDz1xPMIO4VTZhIdR9Z7gVWL1OuCEskegmgZyYwF8EhIIqNhgZRSQmEvjaF5waLpGbOeTFFGa8BtTSRmvIRexL7VX%2FwY8wBYqH0RUWuUOfmxTyMTS35eNTuoYQGfKBn7xcE6B4VwoSJlsJEIqxNpzcD%2FlKyy9RiJ71b5Jhq7XFnb%2B9uP7ANRmV44tMLZ9eCY8WJmDuT2Fv%2BjdZG%2FxXiCw8zm5o4SuPGraAqtjwqAprnD2AlSpTLMT9BGAu%2Bg7Hj6pmcGjdP329Tfou2x2aWKoLYJEFJWdzqIYMFNrisozKJvXu0msrOgSyPznY8ebCGTHySqMOeKcXMXz7tDDxOIuqfnmEd%2F0ZE%2FVYsSEEb8kN6hfj9t913tESiJBgQ1YE1SWbhp%2FshfxU5oHnDxcmp%2BuxuB4qgqUuNIw7emRvBrGmM9Bni8OZrhbkABbN8QwoeEz0ItS7%2F3EzlXuAjmf%2B0eWX5tIuen9yvDFcIcVVLR4%2BaA%2BcwluTTwAY6pgE%2FEDyADQcMugKJqimWQhkdwdh4XJDAJQsSDF8hVZIZw%2FzUWgO8Ob8bJ4LHBGCQOogN1isVXSDESfFvLfnmFc%2FiLPMvyWkl8%2FGWjEhKNVqRQ4dku9lHd%2BshFsd6P%2B1KOvLL%2FNLfU7LG9HtCDykK6IFVYNeI2DoVxv%2Fas7aRAz49C7zXCVJZ%2Bt6%2BFFQrQn9x78NXHsr7VYdymWOqsO6l9v7lhXHiDoOX&X-Amz-Signature=40b7628bf55869d795068e88c33bc3b44791c8155f4b163fcb8356a74fafcd07&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
