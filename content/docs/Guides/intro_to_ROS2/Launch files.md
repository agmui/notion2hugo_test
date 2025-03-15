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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFK6LTCE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoKIIAPFXKfQHZusKo%2BC57%2BJVevUNoP9LYuxrdXms2gIhAPEuOm4yiyVXhHoDTdzv60Gi0DIdz7r90uzRfrpjHoLhKv8DCBIQABoMNjM3NDIzMTgzODA1IgyWaOzuUp7OO4cAOHAq3APUeUA63yrcbMJ9ZWeVHbKshsvpGQHb9TVAtipASYU1Ct9X7F8i8RawVqOIKz%2BoovCLMnXVfoUv5CN24h2IVhaooy7Ly7Gz8JkHextgPfgydjp6SnHbbJMvUs13rV1g2gZU1koqSkDt5y1wlXiq6mGVnTqjERdwHlLM%2FrAk2x%2Flhg4g5Tg6H2mRLzyiFgAOwnsJ4v%2FTdLUOxqBjpzxzxTsOIF5IAsYVx1VnQ%2FjPrIcj6UnyYcdkFVZZbKejUQ3OnYVr%2FwbhI5xd0fR8qw3L7Yb5cRRhyi0Tes%2BRO2rwNtfO7jH%2FBCVF9aqqdfQgvp47gDNs%2FIXNfksUTXAxuh0e1XeKz7xW6zqTx8ljRvq%2BvASd9ReIevJ59EpEgX2eMU6FUS9IhYkigjqyjILBIZmck6eJcnmxbUk1wsl%2B1CCI38uHW8tSPdQphUhNzAZub49U8MutrrnJJtiyFMgPTLA%2FXoiuw%2F0WyRjN0go4qvPa%2BYMPxP0hqPD6wqFoHkzvKnz6GFKQFJmBBNrwI2mE1PFKJS%2FIGUASk1IvDo8jAwcS36013iNd9zclxoW%2FmE5XYy0D4U0G4cX9sH77KApR3vzFTuGCqOQ3MV8vL1%2FRnEOoRVxWMGDWjdrwRHXHH8weLTDdhNW%2BBjqkAWeBSKYx6NzZrs98w1I%2BXLtKoGjrh6uZKrO7uJqgiJM%2FHgRdmTyw75bcGt9YLl6oxedtIZuvsbHlebcJ7vkERFPevnvFAmGmSsNkwNmNU7CcCUrp4yB1UAIegu9uokFZ4JsGlctrLN%2BA6ouTobpGLXhXMpT2tnXU11A0%2FjbgXM4OTlUyQRLHAnxSvmyYnVZK6gE4AaFaxKNWY%2FzgfT3anJkKfAaG&X-Amz-Signature=49ac7f4e28a5fb2b9d07967935e169e6ee693b6a4cab0f0dec8db506b9db47b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFK6LTCE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoKIIAPFXKfQHZusKo%2BC57%2BJVevUNoP9LYuxrdXms2gIhAPEuOm4yiyVXhHoDTdzv60Gi0DIdz7r90uzRfrpjHoLhKv8DCBIQABoMNjM3NDIzMTgzODA1IgyWaOzuUp7OO4cAOHAq3APUeUA63yrcbMJ9ZWeVHbKshsvpGQHb9TVAtipASYU1Ct9X7F8i8RawVqOIKz%2BoovCLMnXVfoUv5CN24h2IVhaooy7Ly7Gz8JkHextgPfgydjp6SnHbbJMvUs13rV1g2gZU1koqSkDt5y1wlXiq6mGVnTqjERdwHlLM%2FrAk2x%2Flhg4g5Tg6H2mRLzyiFgAOwnsJ4v%2FTdLUOxqBjpzxzxTsOIF5IAsYVx1VnQ%2FjPrIcj6UnyYcdkFVZZbKejUQ3OnYVr%2FwbhI5xd0fR8qw3L7Yb5cRRhyi0Tes%2BRO2rwNtfO7jH%2FBCVF9aqqdfQgvp47gDNs%2FIXNfksUTXAxuh0e1XeKz7xW6zqTx8ljRvq%2BvASd9ReIevJ59EpEgX2eMU6FUS9IhYkigjqyjILBIZmck6eJcnmxbUk1wsl%2B1CCI38uHW8tSPdQphUhNzAZub49U8MutrrnJJtiyFMgPTLA%2FXoiuw%2F0WyRjN0go4qvPa%2BYMPxP0hqPD6wqFoHkzvKnz6GFKQFJmBBNrwI2mE1PFKJS%2FIGUASk1IvDo8jAwcS36013iNd9zclxoW%2FmE5XYy0D4U0G4cX9sH77KApR3vzFTuGCqOQ3MV8vL1%2FRnEOoRVxWMGDWjdrwRHXHH8weLTDdhNW%2BBjqkAWeBSKYx6NzZrs98w1I%2BXLtKoGjrh6uZKrO7uJqgiJM%2FHgRdmTyw75bcGt9YLl6oxedtIZuvsbHlebcJ7vkERFPevnvFAmGmSsNkwNmNU7CcCUrp4yB1UAIegu9uokFZ4JsGlctrLN%2BA6ouTobpGLXhXMpT2tnXU11A0%2FjbgXM4OTlUyQRLHAnxSvmyYnVZK6gE4AaFaxKNWY%2FzgfT3anJkKfAaG&X-Amz-Signature=c43a3b4336f85ebfb1a6a5eb5b636653b838939bf95579e27aa3a1ab4cd88438&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFK6LTCE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoKIIAPFXKfQHZusKo%2BC57%2BJVevUNoP9LYuxrdXms2gIhAPEuOm4yiyVXhHoDTdzv60Gi0DIdz7r90uzRfrpjHoLhKv8DCBIQABoMNjM3NDIzMTgzODA1IgyWaOzuUp7OO4cAOHAq3APUeUA63yrcbMJ9ZWeVHbKshsvpGQHb9TVAtipASYU1Ct9X7F8i8RawVqOIKz%2BoovCLMnXVfoUv5CN24h2IVhaooy7Ly7Gz8JkHextgPfgydjp6SnHbbJMvUs13rV1g2gZU1koqSkDt5y1wlXiq6mGVnTqjERdwHlLM%2FrAk2x%2Flhg4g5Tg6H2mRLzyiFgAOwnsJ4v%2FTdLUOxqBjpzxzxTsOIF5IAsYVx1VnQ%2FjPrIcj6UnyYcdkFVZZbKejUQ3OnYVr%2FwbhI5xd0fR8qw3L7Yb5cRRhyi0Tes%2BRO2rwNtfO7jH%2FBCVF9aqqdfQgvp47gDNs%2FIXNfksUTXAxuh0e1XeKz7xW6zqTx8ljRvq%2BvASd9ReIevJ59EpEgX2eMU6FUS9IhYkigjqyjILBIZmck6eJcnmxbUk1wsl%2B1CCI38uHW8tSPdQphUhNzAZub49U8MutrrnJJtiyFMgPTLA%2FXoiuw%2F0WyRjN0go4qvPa%2BYMPxP0hqPD6wqFoHkzvKnz6GFKQFJmBBNrwI2mE1PFKJS%2FIGUASk1IvDo8jAwcS36013iNd9zclxoW%2FmE5XYy0D4U0G4cX9sH77KApR3vzFTuGCqOQ3MV8vL1%2FRnEOoRVxWMGDWjdrwRHXHH8weLTDdhNW%2BBjqkAWeBSKYx6NzZrs98w1I%2BXLtKoGjrh6uZKrO7uJqgiJM%2FHgRdmTyw75bcGt9YLl6oxedtIZuvsbHlebcJ7vkERFPevnvFAmGmSsNkwNmNU7CcCUrp4yB1UAIegu9uokFZ4JsGlctrLN%2BA6ouTobpGLXhXMpT2tnXU11A0%2FjbgXM4OTlUyQRLHAnxSvmyYnVZK6gE4AaFaxKNWY%2FzgfT3anJkKfAaG&X-Amz-Signature=ae880063446a52f3a858629018c78ba10c3244568e6058305855873e1ebf57ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
