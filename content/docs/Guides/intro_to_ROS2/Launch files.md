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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765ADXJT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoGoLl82RsrgV2jf5PBm1TVblSmWH7oFckZdbgQ5cNjAiEAyky5LKj3Cn7cva%2B6BmWTOSDboNeilcQGKnWHlU1rShwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQtgGtD0JiSvshB8ircA48SnNvgvZslrcBeT%2B%2BEuKknbdu3QghyZS6CckZSLp6h33s0oy2zKVrVF7dyqNvt9kAaV9TZr5p9PZY%2F%2FKdufVlHCJ%2F%2B60tsSKWhlsW4vkyEpbt6RH6LgLjOTvIDTmDaYV3UK%2FCHCC3mUjLT0hFqEitMtuf2oUZzMeFEbT7yyw4JZ2LopvAxnFxRHs5ZodzzPIUaY4eikeNOQIm4ONkbSpx8MtbqjUo8JAkIG%2FSME5ZmsAbjaEKmRu1rcDBiekmWs1ulFQKbWpDa6Vpu4jrGoWEusLXABmCH145KW%2FFSfBSiOeG4%2Bs9zMTeS%2B5SOTykHDkNs8PC6DOc61%2BeZE6aEN%2BdAIdikUiFAehoodfjH%2BYKEJWAB0%2FREDZQCf0mui5pE%2BFpiRHrllk8ZstwL3Q14H6wY1ldwLaqfYc%2BWmNnUWUcr6AB5pKClYxdOt%2BlR%2FC2kd%2FVWc91EqhJB60uRKLQEWMc%2FJgCeJiOk2u5cogQ%2FEAzwY05FTOlSgfPpR4HBAP37CNu8TVKqbAMs6zHaangVjK4E4ugzt9q8jAszOiD4lF49lvNP61uY6j%2FjRvGwen0yxu72Cst3lL2NfoemPc164JGRjP7Z2aSidtQL92vhaK8cn%2BpiOYPjB3OdDTJPMJGg%2B7wGOqUB2rPNRvBsC8fj6aghkb4onLhyF%2BHCN%2FZhh9H25NLh2J%2Fxv4SxqMINGRBIk682sTZfRrGWEYR5%2B0a1UtbiaiOfe%2FUhm%2B4tgfNSGsNckq5Tojky3eTiwuibRBE4C08qiN%2BVUgvFlUkDesQH5MTbQszqDGjVY5aqTnRWGQ3l0xuvqKLmM7tmeBF5zfoq%2BwimE602nrzIMP2oUUp1aQyJDE8qhmmOQuow&X-Amz-Signature=d99e087b1446296f54389ff84b738728957b925b06f832b39fdf88754a607a00&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765ADXJT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoGoLl82RsrgV2jf5PBm1TVblSmWH7oFckZdbgQ5cNjAiEAyky5LKj3Cn7cva%2B6BmWTOSDboNeilcQGKnWHlU1rShwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQtgGtD0JiSvshB8ircA48SnNvgvZslrcBeT%2B%2BEuKknbdu3QghyZS6CckZSLp6h33s0oy2zKVrVF7dyqNvt9kAaV9TZr5p9PZY%2F%2FKdufVlHCJ%2F%2B60tsSKWhlsW4vkyEpbt6RH6LgLjOTvIDTmDaYV3UK%2FCHCC3mUjLT0hFqEitMtuf2oUZzMeFEbT7yyw4JZ2LopvAxnFxRHs5ZodzzPIUaY4eikeNOQIm4ONkbSpx8MtbqjUo8JAkIG%2FSME5ZmsAbjaEKmRu1rcDBiekmWs1ulFQKbWpDa6Vpu4jrGoWEusLXABmCH145KW%2FFSfBSiOeG4%2Bs9zMTeS%2B5SOTykHDkNs8PC6DOc61%2BeZE6aEN%2BdAIdikUiFAehoodfjH%2BYKEJWAB0%2FREDZQCf0mui5pE%2BFpiRHrllk8ZstwL3Q14H6wY1ldwLaqfYc%2BWmNnUWUcr6AB5pKClYxdOt%2BlR%2FC2kd%2FVWc91EqhJB60uRKLQEWMc%2FJgCeJiOk2u5cogQ%2FEAzwY05FTOlSgfPpR4HBAP37CNu8TVKqbAMs6zHaangVjK4E4ugzt9q8jAszOiD4lF49lvNP61uY6j%2FjRvGwen0yxu72Cst3lL2NfoemPc164JGRjP7Z2aSidtQL92vhaK8cn%2BpiOYPjB3OdDTJPMJGg%2B7wGOqUB2rPNRvBsC8fj6aghkb4onLhyF%2BHCN%2FZhh9H25NLh2J%2Fxv4SxqMINGRBIk682sTZfRrGWEYR5%2B0a1UtbiaiOfe%2FUhm%2B4tgfNSGsNckq5Tojky3eTiwuibRBE4C08qiN%2BVUgvFlUkDesQH5MTbQszqDGjVY5aqTnRWGQ3l0xuvqKLmM7tmeBF5zfoq%2BwimE602nrzIMP2oUUp1aQyJDE8qhmmOQuow&X-Amz-Signature=4dca0c10b0f437e32958574f42f51095679201936a9299b266354f4e7da71e52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765ADXJT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoGoLl82RsrgV2jf5PBm1TVblSmWH7oFckZdbgQ5cNjAiEAyky5LKj3Cn7cva%2B6BmWTOSDboNeilcQGKnWHlU1rShwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQtgGtD0JiSvshB8ircA48SnNvgvZslrcBeT%2B%2BEuKknbdu3QghyZS6CckZSLp6h33s0oy2zKVrVF7dyqNvt9kAaV9TZr5p9PZY%2F%2FKdufVlHCJ%2F%2B60tsSKWhlsW4vkyEpbt6RH6LgLjOTvIDTmDaYV3UK%2FCHCC3mUjLT0hFqEitMtuf2oUZzMeFEbT7yyw4JZ2LopvAxnFxRHs5ZodzzPIUaY4eikeNOQIm4ONkbSpx8MtbqjUo8JAkIG%2FSME5ZmsAbjaEKmRu1rcDBiekmWs1ulFQKbWpDa6Vpu4jrGoWEusLXABmCH145KW%2FFSfBSiOeG4%2Bs9zMTeS%2B5SOTykHDkNs8PC6DOc61%2BeZE6aEN%2BdAIdikUiFAehoodfjH%2BYKEJWAB0%2FREDZQCf0mui5pE%2BFpiRHrllk8ZstwL3Q14H6wY1ldwLaqfYc%2BWmNnUWUcr6AB5pKClYxdOt%2BlR%2FC2kd%2FVWc91EqhJB60uRKLQEWMc%2FJgCeJiOk2u5cogQ%2FEAzwY05FTOlSgfPpR4HBAP37CNu8TVKqbAMs6zHaangVjK4E4ugzt9q8jAszOiD4lF49lvNP61uY6j%2FjRvGwen0yxu72Cst3lL2NfoemPc164JGRjP7Z2aSidtQL92vhaK8cn%2BpiOYPjB3OdDTJPMJGg%2B7wGOqUB2rPNRvBsC8fj6aghkb4onLhyF%2BHCN%2FZhh9H25NLh2J%2Fxv4SxqMINGRBIk682sTZfRrGWEYR5%2B0a1UtbiaiOfe%2FUhm%2B4tgfNSGsNckq5Tojky3eTiwuibRBE4C08qiN%2BVUgvFlUkDesQH5MTbQszqDGjVY5aqTnRWGQ3l0xuvqKLmM7tmeBF5zfoq%2BwimE602nrzIMP2oUUp1aQyJDE8qhmmOQuow&X-Amz-Signature=95fbae1b0493cc1189e2e81245b4d3861b40a32c8a975af1d275b1768749a72c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
