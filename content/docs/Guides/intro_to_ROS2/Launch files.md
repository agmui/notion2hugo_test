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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWVU374%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDCf7mJtv7lVG4uew6%2B%2FcLdI%2B7GB62ORoPKuEkjxgiqQgIhAPtp%2Fyp89XlkFY1In5KmQq9ysvkycyRhK%2Bmt%2FJ50WK6fKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu1WcT%2ByBqSxLy6UYq3AO7x6RCAmaBIQEJ%2FiVv58BuwzNjTiF2SYMa4iL2rM%2FDa0DfLWv9nPKh4uu7khqB4rmSYblb6gUJx%2B7W%2B7ygtiA7ehhypO0zKD99f8%2BBaQmKhLjH1iZzGCKQohVecnlfPrMdoXnhtMaFtYMX7uVKimG6NTbNne9oDmt7SK95%2BcH42f3Vfa9oOxndwJs69MC0Gx0ochZRjK4%2BhmIluR1jsua5ocYocJIH3XO8aU2SD1kzMzuQfRoYq1bzyU3GHpt16fTr997yKyddJhARy6R54q1QHEWLRb8O3Ea8r7b2pDV5zW5ucW1nZgYTZPXNBYD%2FtgZXdwvJmVsRYey8rV%2Bwimmq4tjGEFcvLezjsarvuJh28ZpPFv35JWaZrq7X387TUqGurg5D0dc62xn%2FxJSHB96mmnPUUfe%2BZsfZBO5gvjbOMhzJr55TbTnuyH%2Fq0WXJOgcHR5yl1Aq2XzLDyq1GmrKFR7eDJiv1BcFsts19vHEOWiVBA7Bow6YgNO2MJEmREmPsCh2J%2FrSS7NVqlABE9UAEP%2BXYz%2BlTvET8ZffShQ345t861W0sowZsmId8pMiD%2B29iBGyUm4Dipr4a6d0ylLsmMgsXFvLN9170TnKdnE%2FJnTydpxlXAZKZC%2FPaMTCni53ABjqkARDBsg2eJ9Ydj52ed948eVJ4WBK7%2BCqFRwxB5HKAjNNQ9wJ%2Blk7DdGRGlqA6Q26beeQOZ96l351lMX%2Fot2t4%2BhwbJfgAXNyOb02IQTmYLJMyvSBy0UxSczJX7MQ7fzHhfMBmTq%2F5X8PuDGQeHJJz08lCHONjJ6OxQjLNBrp%2FlP3iYBVXgTLsl9Fvt%2BaoUNjleVw%2FP5%2BVX1YjFOl3nvrGBD139jVh&X-Amz-Signature=fe3e5e7e9ff54123c9a1e9631cdd5f220ad4e708089028e4056073fc804239ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWVU374%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDCf7mJtv7lVG4uew6%2B%2FcLdI%2B7GB62ORoPKuEkjxgiqQgIhAPtp%2Fyp89XlkFY1In5KmQq9ysvkycyRhK%2Bmt%2FJ50WK6fKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu1WcT%2ByBqSxLy6UYq3AO7x6RCAmaBIQEJ%2FiVv58BuwzNjTiF2SYMa4iL2rM%2FDa0DfLWv9nPKh4uu7khqB4rmSYblb6gUJx%2B7W%2B7ygtiA7ehhypO0zKD99f8%2BBaQmKhLjH1iZzGCKQohVecnlfPrMdoXnhtMaFtYMX7uVKimG6NTbNne9oDmt7SK95%2BcH42f3Vfa9oOxndwJs69MC0Gx0ochZRjK4%2BhmIluR1jsua5ocYocJIH3XO8aU2SD1kzMzuQfRoYq1bzyU3GHpt16fTr997yKyddJhARy6R54q1QHEWLRb8O3Ea8r7b2pDV5zW5ucW1nZgYTZPXNBYD%2FtgZXdwvJmVsRYey8rV%2Bwimmq4tjGEFcvLezjsarvuJh28ZpPFv35JWaZrq7X387TUqGurg5D0dc62xn%2FxJSHB96mmnPUUfe%2BZsfZBO5gvjbOMhzJr55TbTnuyH%2Fq0WXJOgcHR5yl1Aq2XzLDyq1GmrKFR7eDJiv1BcFsts19vHEOWiVBA7Bow6YgNO2MJEmREmPsCh2J%2FrSS7NVqlABE9UAEP%2BXYz%2BlTvET8ZffShQ345t861W0sowZsmId8pMiD%2B29iBGyUm4Dipr4a6d0ylLsmMgsXFvLN9170TnKdnE%2FJnTydpxlXAZKZC%2FPaMTCni53ABjqkARDBsg2eJ9Ydj52ed948eVJ4WBK7%2BCqFRwxB5HKAjNNQ9wJ%2Blk7DdGRGlqA6Q26beeQOZ96l351lMX%2Fot2t4%2BhwbJfgAXNyOb02IQTmYLJMyvSBy0UxSczJX7MQ7fzHhfMBmTq%2F5X8PuDGQeHJJz08lCHONjJ6OxQjLNBrp%2FlP3iYBVXgTLsl9Fvt%2BaoUNjleVw%2FP5%2BVX1YjFOl3nvrGBD139jVh&X-Amz-Signature=e619711548007084dee1bc2d9024c7492314efd47da82d2826e4cd6b79583922&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWVU374%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDCf7mJtv7lVG4uew6%2B%2FcLdI%2B7GB62ORoPKuEkjxgiqQgIhAPtp%2Fyp89XlkFY1In5KmQq9ysvkycyRhK%2Bmt%2FJ50WK6fKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu1WcT%2ByBqSxLy6UYq3AO7x6RCAmaBIQEJ%2FiVv58BuwzNjTiF2SYMa4iL2rM%2FDa0DfLWv9nPKh4uu7khqB4rmSYblb6gUJx%2B7W%2B7ygtiA7ehhypO0zKD99f8%2BBaQmKhLjH1iZzGCKQohVecnlfPrMdoXnhtMaFtYMX7uVKimG6NTbNne9oDmt7SK95%2BcH42f3Vfa9oOxndwJs69MC0Gx0ochZRjK4%2BhmIluR1jsua5ocYocJIH3XO8aU2SD1kzMzuQfRoYq1bzyU3GHpt16fTr997yKyddJhARy6R54q1QHEWLRb8O3Ea8r7b2pDV5zW5ucW1nZgYTZPXNBYD%2FtgZXdwvJmVsRYey8rV%2Bwimmq4tjGEFcvLezjsarvuJh28ZpPFv35JWaZrq7X387TUqGurg5D0dc62xn%2FxJSHB96mmnPUUfe%2BZsfZBO5gvjbOMhzJr55TbTnuyH%2Fq0WXJOgcHR5yl1Aq2XzLDyq1GmrKFR7eDJiv1BcFsts19vHEOWiVBA7Bow6YgNO2MJEmREmPsCh2J%2FrSS7NVqlABE9UAEP%2BXYz%2BlTvET8ZffShQ345t861W0sowZsmId8pMiD%2B29iBGyUm4Dipr4a6d0ylLsmMgsXFvLN9170TnKdnE%2FJnTydpxlXAZKZC%2FPaMTCni53ABjqkARDBsg2eJ9Ydj52ed948eVJ4WBK7%2BCqFRwxB5HKAjNNQ9wJ%2Blk7DdGRGlqA6Q26beeQOZ96l351lMX%2Fot2t4%2BhwbJfgAXNyOb02IQTmYLJMyvSBy0UxSczJX7MQ7fzHhfMBmTq%2F5X8PuDGQeHJJz08lCHONjJ6OxQjLNBrp%2FlP3iYBVXgTLsl9Fvt%2BaoUNjleVw%2FP5%2BVX1YjFOl3nvrGBD139jVh&X-Amz-Signature=a62a067dc4b71226f6fb6a8a28921f6c58d1934939b85a0417ce0ec5296d062e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
