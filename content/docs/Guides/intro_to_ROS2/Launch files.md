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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CY5CC6Z%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD3UvhxZx4u9IKt8PciDYrTIN1utljhzpCy7Si6z2m49AIhAKf9IRsQp6w7Y06DeDe0L%2F8Ru0LaIN129isT3tcLQojVKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZs5TwfIFvh5EKmoAq3AOgDPC8sEWO6Raa1wuCu3RsRMZ3kZU3MYwyyDPpnsHWknxmLkJaKwIgCoi8yMY1OA2NE2qtug3%2F4uuE%2FJ2X5XYIRPzpG3l26HJiRQlk0DzJbvJlANHBu4iL8iNAPj91CHOuAWkrJ7HZIge5wrPqB9REacZj9CEKAcZAb8Q2xjsx8Ap4fJlHlzUPwMqouxvkvUmDp4ibK42AJ7m4HO5wgt27eWDV7i0jBf17%2Bt9R6%2B%2FcWjq9oVv07XiE6QDjLopo1g%2Ffyt9FormOlmivOPyO0yJw%2FXUwfHmlpYYm29RDzdwxGKXbrlmKDgZyowaSljZIWSnajaNkQtWVSd3QMXxFI%2Fj4wBTR5uViBzHrDCmCH1cNCAGc8gYhHp%2FFK2qkFGfFKiB%2FLLi3QBSYcmfJDJl0Yf%2FQBFO%2B0wS%2BNZU%2Ftat%2FOPxfloa1veesH10T8Mijr4HZHBY8%2BqomsaM95qWW2sB1GcEXmGbs0pTq7pJXmSRrqsybR0MzEXbiZsLOsIUtXpXkjgIYO2lSUBIlgGy2Zpw29ttyrew6K2tPC9Rrph2%2FIjYeO3SEH%2FJklVruKYBLv5qf7P82g3KDXLE6sCe4hPM8XqL7q%2B7NmZTOV2GILuv%2FX4s1Gcb%2FxSZJZaw0E88TPDDEhYm%2BBjqkARxV5ySswAgv1lH2TlZO40bIkaqAjAIt982F%2F4q72dSyrLF60BTkoUddMCuhMkiLRsc37QNLCPwUj66sLDm2XpPm385msIFYsAN%2BNayshuNvSFwFCJ5WdH8b2NJ4SE%2Ba9%2BcFJ508M0uzqvsuCsEnjmexgWWiYI9AARKxXonk2gW5dFuAM2M6tpr1EiWOQMZkd9j97aLVs6E4uV3slMLQiYE2aa%2Bq&X-Amz-Signature=d062724e70dbfd372ed9ac4f3a8463d0a81260e57965e76e3b99986414459f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CY5CC6Z%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD3UvhxZx4u9IKt8PciDYrTIN1utljhzpCy7Si6z2m49AIhAKf9IRsQp6w7Y06DeDe0L%2F8Ru0LaIN129isT3tcLQojVKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZs5TwfIFvh5EKmoAq3AOgDPC8sEWO6Raa1wuCu3RsRMZ3kZU3MYwyyDPpnsHWknxmLkJaKwIgCoi8yMY1OA2NE2qtug3%2F4uuE%2FJ2X5XYIRPzpG3l26HJiRQlk0DzJbvJlANHBu4iL8iNAPj91CHOuAWkrJ7HZIge5wrPqB9REacZj9CEKAcZAb8Q2xjsx8Ap4fJlHlzUPwMqouxvkvUmDp4ibK42AJ7m4HO5wgt27eWDV7i0jBf17%2Bt9R6%2B%2FcWjq9oVv07XiE6QDjLopo1g%2Ffyt9FormOlmivOPyO0yJw%2FXUwfHmlpYYm29RDzdwxGKXbrlmKDgZyowaSljZIWSnajaNkQtWVSd3QMXxFI%2Fj4wBTR5uViBzHrDCmCH1cNCAGc8gYhHp%2FFK2qkFGfFKiB%2FLLi3QBSYcmfJDJl0Yf%2FQBFO%2B0wS%2BNZU%2Ftat%2FOPxfloa1veesH10T8Mijr4HZHBY8%2BqomsaM95qWW2sB1GcEXmGbs0pTq7pJXmSRrqsybR0MzEXbiZsLOsIUtXpXkjgIYO2lSUBIlgGy2Zpw29ttyrew6K2tPC9Rrph2%2FIjYeO3SEH%2FJklVruKYBLv5qf7P82g3KDXLE6sCe4hPM8XqL7q%2B7NmZTOV2GILuv%2FX4s1Gcb%2FxSZJZaw0E88TPDDEhYm%2BBjqkARxV5ySswAgv1lH2TlZO40bIkaqAjAIt982F%2F4q72dSyrLF60BTkoUddMCuhMkiLRsc37QNLCPwUj66sLDm2XpPm385msIFYsAN%2BNayshuNvSFwFCJ5WdH8b2NJ4SE%2Ba9%2BcFJ508M0uzqvsuCsEnjmexgWWiYI9AARKxXonk2gW5dFuAM2M6tpr1EiWOQMZkd9j97aLVs6E4uV3slMLQiYE2aa%2Bq&X-Amz-Signature=a25024e71387eaff6a01971354477ed51b731123298de0ac47af3fc0702c5395&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CY5CC6Z%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD3UvhxZx4u9IKt8PciDYrTIN1utljhzpCy7Si6z2m49AIhAKf9IRsQp6w7Y06DeDe0L%2F8Ru0LaIN129isT3tcLQojVKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZs5TwfIFvh5EKmoAq3AOgDPC8sEWO6Raa1wuCu3RsRMZ3kZU3MYwyyDPpnsHWknxmLkJaKwIgCoi8yMY1OA2NE2qtug3%2F4uuE%2FJ2X5XYIRPzpG3l26HJiRQlk0DzJbvJlANHBu4iL8iNAPj91CHOuAWkrJ7HZIge5wrPqB9REacZj9CEKAcZAb8Q2xjsx8Ap4fJlHlzUPwMqouxvkvUmDp4ibK42AJ7m4HO5wgt27eWDV7i0jBf17%2Bt9R6%2B%2FcWjq9oVv07XiE6QDjLopo1g%2Ffyt9FormOlmivOPyO0yJw%2FXUwfHmlpYYm29RDzdwxGKXbrlmKDgZyowaSljZIWSnajaNkQtWVSd3QMXxFI%2Fj4wBTR5uViBzHrDCmCH1cNCAGc8gYhHp%2FFK2qkFGfFKiB%2FLLi3QBSYcmfJDJl0Yf%2FQBFO%2B0wS%2BNZU%2Ftat%2FOPxfloa1veesH10T8Mijr4HZHBY8%2BqomsaM95qWW2sB1GcEXmGbs0pTq7pJXmSRrqsybR0MzEXbiZsLOsIUtXpXkjgIYO2lSUBIlgGy2Zpw29ttyrew6K2tPC9Rrph2%2FIjYeO3SEH%2FJklVruKYBLv5qf7P82g3KDXLE6sCe4hPM8XqL7q%2B7NmZTOV2GILuv%2FX4s1Gcb%2FxSZJZaw0E88TPDDEhYm%2BBjqkARxV5ySswAgv1lH2TlZO40bIkaqAjAIt982F%2F4q72dSyrLF60BTkoUddMCuhMkiLRsc37QNLCPwUj66sLDm2XpPm385msIFYsAN%2BNayshuNvSFwFCJ5WdH8b2NJ4SE%2Ba9%2BcFJ508M0uzqvsuCsEnjmexgWWiYI9AARKxXonk2gW5dFuAM2M6tpr1EiWOQMZkd9j97aLVs6E4uV3slMLQiYE2aa%2Bq&X-Amz-Signature=af12d9ef56801b3d3a667683bc82cdaef2e911fd3287d1d20c45a10c8354b467&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
