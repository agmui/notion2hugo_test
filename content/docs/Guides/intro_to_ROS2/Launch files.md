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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XX4NJ22%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDunDxt06YPkBBxzqbjY3uauXOT4%2BIFJe6Prckps1WK%2BwIhAOHO07mVxa%2B64FsPOnxuUr1KZmN2gWq8KX70iVxTEltXKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQwTFR4jPvIZaHBjMq3AM2bhP7XSudY5aG0xt6uqxh6tJfBUfghPvgcV2enSyAQnP6sboGCRBA9qZerwbIC1Tft3RWTSaVDjLqlK7rSKEtQIff680i2sicqxq2fGwtpZEnV3V1ni6Dw7Wkd79WDnFjctGvyQHjJMtZ36MR1MZsz%2F3z33Jd1g5q0bV0p7BsoBvBAxgabnMTKb47LBEzsWWOpUu%2B6cIbl0fgozJqN%2B4Lrb3uH%2Fs66FnGW8uR1y6PcQqs74Kjoo3Z5fUcOmTzGMo8ijDkCc7tiq4RuierrjtsLqvQCaifOYnKfUxRbZC8KPCheqoul%2BkqOXPMI8vOOX2qHXMbRU1grOPO59MSw22X%2FXOic3tyYM10peWOpGAXJs0A59kYEtGJ3OdqLGyTXjmYcAMVJUtQs1B%2FsdcbmqiNrKH7Q7SxlzfDIIOsuCWe8T6m%2BERDds9rlyVtiQGJ78oKvNQLQo2P6u9osDh9eagJvgm2uLPCrpTG37QsVsXQ1KNoeZND%2B0xnAoC6JHdZ9oPJCDqd2gN1gw%2BefKIqo3WMSUQ6Q3K8Twgqg5MsYlOjmmUy0594Y55YdDd4eChJVZATJ3m%2FQw5Wv9t2pjp1iPQje1GhKPrgcqc8V6Hg1GF5%2BezO9YgmKE6a4vGbgjC%2BppO%2BBjqkAd2ptrCAAqxDX%2BSAP0znkFVkH2MJFJkC%2Fvq7bVKyfW562iS4otbLjk1dYru2bM1v673eGLeqG6wz7MAEeYkw8rcKGg7S1PkL%2BHIjPOJ1fPls4E6ye3kOKEzvR%2FXnHlieJt0vsaF33pqmMi%2BUZd6cvB4veGTHoqwpbWvSjh2jM6or7%2BOcn%2FAi8NefGJIKb9L2vMSd1klrYtRVBMv%2FzM6%2BcSuJxXsx&X-Amz-Signature=5e9e29e4ec594bba674e80776d4dfb1909ba532e46d8ae878dc3c59923206bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XX4NJ22%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDunDxt06YPkBBxzqbjY3uauXOT4%2BIFJe6Prckps1WK%2BwIhAOHO07mVxa%2B64FsPOnxuUr1KZmN2gWq8KX70iVxTEltXKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQwTFR4jPvIZaHBjMq3AM2bhP7XSudY5aG0xt6uqxh6tJfBUfghPvgcV2enSyAQnP6sboGCRBA9qZerwbIC1Tft3RWTSaVDjLqlK7rSKEtQIff680i2sicqxq2fGwtpZEnV3V1ni6Dw7Wkd79WDnFjctGvyQHjJMtZ36MR1MZsz%2F3z33Jd1g5q0bV0p7BsoBvBAxgabnMTKb47LBEzsWWOpUu%2B6cIbl0fgozJqN%2B4Lrb3uH%2Fs66FnGW8uR1y6PcQqs74Kjoo3Z5fUcOmTzGMo8ijDkCc7tiq4RuierrjtsLqvQCaifOYnKfUxRbZC8KPCheqoul%2BkqOXPMI8vOOX2qHXMbRU1grOPO59MSw22X%2FXOic3tyYM10peWOpGAXJs0A59kYEtGJ3OdqLGyTXjmYcAMVJUtQs1B%2FsdcbmqiNrKH7Q7SxlzfDIIOsuCWe8T6m%2BERDds9rlyVtiQGJ78oKvNQLQo2P6u9osDh9eagJvgm2uLPCrpTG37QsVsXQ1KNoeZND%2B0xnAoC6JHdZ9oPJCDqd2gN1gw%2BefKIqo3WMSUQ6Q3K8Twgqg5MsYlOjmmUy0594Y55YdDd4eChJVZATJ3m%2FQw5Wv9t2pjp1iPQje1GhKPrgcqc8V6Hg1GF5%2BezO9YgmKE6a4vGbgjC%2BppO%2BBjqkAd2ptrCAAqxDX%2BSAP0znkFVkH2MJFJkC%2Fvq7bVKyfW562iS4otbLjk1dYru2bM1v673eGLeqG6wz7MAEeYkw8rcKGg7S1PkL%2BHIjPOJ1fPls4E6ye3kOKEzvR%2FXnHlieJt0vsaF33pqmMi%2BUZd6cvB4veGTHoqwpbWvSjh2jM6or7%2BOcn%2FAi8NefGJIKb9L2vMSd1klrYtRVBMv%2FzM6%2BcSuJxXsx&X-Amz-Signature=79c3a873e92bf5e4f5c3de30b6633d082e1939ddc1213460d980fc10090e3bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XX4NJ22%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDunDxt06YPkBBxzqbjY3uauXOT4%2BIFJe6Prckps1WK%2BwIhAOHO07mVxa%2B64FsPOnxuUr1KZmN2gWq8KX70iVxTEltXKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQwTFR4jPvIZaHBjMq3AM2bhP7XSudY5aG0xt6uqxh6tJfBUfghPvgcV2enSyAQnP6sboGCRBA9qZerwbIC1Tft3RWTSaVDjLqlK7rSKEtQIff680i2sicqxq2fGwtpZEnV3V1ni6Dw7Wkd79WDnFjctGvyQHjJMtZ36MR1MZsz%2F3z33Jd1g5q0bV0p7BsoBvBAxgabnMTKb47LBEzsWWOpUu%2B6cIbl0fgozJqN%2B4Lrb3uH%2Fs66FnGW8uR1y6PcQqs74Kjoo3Z5fUcOmTzGMo8ijDkCc7tiq4RuierrjtsLqvQCaifOYnKfUxRbZC8KPCheqoul%2BkqOXPMI8vOOX2qHXMbRU1grOPO59MSw22X%2FXOic3tyYM10peWOpGAXJs0A59kYEtGJ3OdqLGyTXjmYcAMVJUtQs1B%2FsdcbmqiNrKH7Q7SxlzfDIIOsuCWe8T6m%2BERDds9rlyVtiQGJ78oKvNQLQo2P6u9osDh9eagJvgm2uLPCrpTG37QsVsXQ1KNoeZND%2B0xnAoC6JHdZ9oPJCDqd2gN1gw%2BefKIqo3WMSUQ6Q3K8Twgqg5MsYlOjmmUy0594Y55YdDd4eChJVZATJ3m%2FQw5Wv9t2pjp1iPQje1GhKPrgcqc8V6Hg1GF5%2BezO9YgmKE6a4vGbgjC%2BppO%2BBjqkAd2ptrCAAqxDX%2BSAP0znkFVkH2MJFJkC%2Fvq7bVKyfW562iS4otbLjk1dYru2bM1v673eGLeqG6wz7MAEeYkw8rcKGg7S1PkL%2BHIjPOJ1fPls4E6ye3kOKEzvR%2FXnHlieJt0vsaF33pqmMi%2BUZd6cvB4veGTHoqwpbWvSjh2jM6or7%2BOcn%2FAi8NefGJIKb9L2vMSd1klrYtRVBMv%2FzM6%2BcSuJxXsx&X-Amz-Signature=4a73585b6b87ca12ed261410c3af1a755cadbd8010264c684bd5f850e5923f82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
