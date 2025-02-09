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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=50e318a8a9d18f9706337c3d7d42744c5cc1927446444322389cdc5446e241b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=1e3b7bafe029cf7fbed3a16e448466cd21d572c2ebb8b4a9fe0545d56c508eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=1f8d8d8d227a3cdd23c24900370a6c398c9760f920b6611443f4600cef05b27c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
