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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSQAU6P%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqP177uTSa7agGVxwQi8hYWWJeBM2blqY8UE%2B3d835pAiEA2iJ2OrRfni3iOH3CVMqlV7PvcHzsE%2BtfjOD9podC16QqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfXbXS7pN5Ho06vmyrcA3bJGKToSz6MEWT15MyHhGX%2BU4xm4j%2FxqSwritj9v6xF432hBp%2FKEBHUPPLid8Rcw4jDEOYjD6x%2B%2F6gbj6jW3u4LsG2xWTV%2F%2FpfEorEV7IEMcv4%2ByN4lRvQXWKKKw0UMuN%2BikTwKoTpYqQ%2Fxke8XUl7Mx7xlgjsuFF1KBie9pNtQEHjbBkfECxbqYahJ28ZyCeYiKcfaWEkcBOr5G3g4YRGxTfozp65PwZslKiNTbKBKG5GY1b1UqVsGakwUe8l1Bn7f2810AzzBnNzBtrkhZtnWfYTHutyDeyyhhwzoTIzvVRWfHj7R5wWNyCOLAEd18oKmekE7L%2BJDhZc5vS5gynaFIm3Zwb611Q%2BrLyXhVKNkeImI8Fw2o7CpKVU9uMQtsPnz4rmsgBpB7Pjnu%2Fh6qbryz3pZXUG2hqisu2m2YNOH3%2Byl9XC4W4VOehLSKGREQuQ0yBbG7jWHFosW8D2qlWJ2sbRwaHmLJDXVvxtCIUf438q%2B4iMMGS5TIs4JDHa3g5KFIxV3XlYyHBBGcaSZo6hUd%2FwBV3ORKYfgVAZBKcEsIfXzVq3okV08k1DLvKee5TYLpdjDUdIHNJo1McFtNwAj3nvjFVAdXruXgAsYyClSsBPhH5zXVxWP%2B22TMLnLgb8GOqUB%2BlCpCUuN2YeKlY739ecj8%2Fxa7r%2Bkjknw5mJHuDnwvEttw47K2uA56jiYXNgpaVaN0YKGIIE%2F8yPKrhx%2F2BL9XMaMpCaIvhd%2FCT3GNYJiDhVpcNcmchPSl9VB%2F9zmuC4nvY0DdZ7Rk0qLLLBnupsG9ZaZOL3xDfKycYWBlNhK3FBrvEE35dcD9pG4vGORmiW4m6jzz2qVRzc%2BToLbkjAcVvUClAb3&X-Amz-Signature=ac7783bccce66c9b75f031ff93c74b3744def24d9c393490e6108d9b7f18d921&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSQAU6P%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqP177uTSa7agGVxwQi8hYWWJeBM2blqY8UE%2B3d835pAiEA2iJ2OrRfni3iOH3CVMqlV7PvcHzsE%2BtfjOD9podC16QqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfXbXS7pN5Ho06vmyrcA3bJGKToSz6MEWT15MyHhGX%2BU4xm4j%2FxqSwritj9v6xF432hBp%2FKEBHUPPLid8Rcw4jDEOYjD6x%2B%2F6gbj6jW3u4LsG2xWTV%2F%2FpfEorEV7IEMcv4%2ByN4lRvQXWKKKw0UMuN%2BikTwKoTpYqQ%2Fxke8XUl7Mx7xlgjsuFF1KBie9pNtQEHjbBkfECxbqYahJ28ZyCeYiKcfaWEkcBOr5G3g4YRGxTfozp65PwZslKiNTbKBKG5GY1b1UqVsGakwUe8l1Bn7f2810AzzBnNzBtrkhZtnWfYTHutyDeyyhhwzoTIzvVRWfHj7R5wWNyCOLAEd18oKmekE7L%2BJDhZc5vS5gynaFIm3Zwb611Q%2BrLyXhVKNkeImI8Fw2o7CpKVU9uMQtsPnz4rmsgBpB7Pjnu%2Fh6qbryz3pZXUG2hqisu2m2YNOH3%2Byl9XC4W4VOehLSKGREQuQ0yBbG7jWHFosW8D2qlWJ2sbRwaHmLJDXVvxtCIUf438q%2B4iMMGS5TIs4JDHa3g5KFIxV3XlYyHBBGcaSZo6hUd%2FwBV3ORKYfgVAZBKcEsIfXzVq3okV08k1DLvKee5TYLpdjDUdIHNJo1McFtNwAj3nvjFVAdXruXgAsYyClSsBPhH5zXVxWP%2B22TMLnLgb8GOqUB%2BlCpCUuN2YeKlY739ecj8%2Fxa7r%2Bkjknw5mJHuDnwvEttw47K2uA56jiYXNgpaVaN0YKGIIE%2F8yPKrhx%2F2BL9XMaMpCaIvhd%2FCT3GNYJiDhVpcNcmchPSl9VB%2F9zmuC4nvY0DdZ7Rk0qLLLBnupsG9ZaZOL3xDfKycYWBlNhK3FBrvEE35dcD9pG4vGORmiW4m6jzz2qVRzc%2BToLbkjAcVvUClAb3&X-Amz-Signature=1712dc973f4d95ff9a35501e92f9ed28314ce19caf0d348b353c3d0be3f55947&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSQAU6P%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqP177uTSa7agGVxwQi8hYWWJeBM2blqY8UE%2B3d835pAiEA2iJ2OrRfni3iOH3CVMqlV7PvcHzsE%2BtfjOD9podC16QqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfXbXS7pN5Ho06vmyrcA3bJGKToSz6MEWT15MyHhGX%2BU4xm4j%2FxqSwritj9v6xF432hBp%2FKEBHUPPLid8Rcw4jDEOYjD6x%2B%2F6gbj6jW3u4LsG2xWTV%2F%2FpfEorEV7IEMcv4%2ByN4lRvQXWKKKw0UMuN%2BikTwKoTpYqQ%2Fxke8XUl7Mx7xlgjsuFF1KBie9pNtQEHjbBkfECxbqYahJ28ZyCeYiKcfaWEkcBOr5G3g4YRGxTfozp65PwZslKiNTbKBKG5GY1b1UqVsGakwUe8l1Bn7f2810AzzBnNzBtrkhZtnWfYTHutyDeyyhhwzoTIzvVRWfHj7R5wWNyCOLAEd18oKmekE7L%2BJDhZc5vS5gynaFIm3Zwb611Q%2BrLyXhVKNkeImI8Fw2o7CpKVU9uMQtsPnz4rmsgBpB7Pjnu%2Fh6qbryz3pZXUG2hqisu2m2YNOH3%2Byl9XC4W4VOehLSKGREQuQ0yBbG7jWHFosW8D2qlWJ2sbRwaHmLJDXVvxtCIUf438q%2B4iMMGS5TIs4JDHa3g5KFIxV3XlYyHBBGcaSZo6hUd%2FwBV3ORKYfgVAZBKcEsIfXzVq3okV08k1DLvKee5TYLpdjDUdIHNJo1McFtNwAj3nvjFVAdXruXgAsYyClSsBPhH5zXVxWP%2B22TMLnLgb8GOqUB%2BlCpCUuN2YeKlY739ecj8%2Fxa7r%2Bkjknw5mJHuDnwvEttw47K2uA56jiYXNgpaVaN0YKGIIE%2F8yPKrhx%2F2BL9XMaMpCaIvhd%2FCT3GNYJiDhVpcNcmchPSl9VB%2F9zmuC4nvY0DdZ7Rk0qLLLBnupsG9ZaZOL3xDfKycYWBlNhK3FBrvEE35dcD9pG4vGORmiW4m6jzz2qVRzc%2BToLbkjAcVvUClAb3&X-Amz-Signature=c35f895e7322932742392175c072b9450177759ef3c9bda295d3f9314ae50cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
