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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMW7SJ7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDxzLIejzX7opxyyTDq0Ky1hGW2iXIyvM%2BAfIA%2B7a6mMgIhALOR9%2FTDtPjb03JRhwPJHUunF06RET60T0GaEl7FFC5GKv8DCEcQABoMNjM3NDIzMTgzODA1IgznxsGJFiCKLOtp084q3ANYRnIzpUTL0wPNRjCSD7O5A6OlTo0zrBcNAIkkuR39Ol5JCe80jvz3ExX4Q8b0KOKBjywQtTf%2BvKZb9k8eNTzOPkbQhMnryViusWJFqwQ0F4IMGkqgL7gRqoewAR%2FTH%2BmOrD2gyEdHiTF9W9CFK1Q%2BRvhulh71vjRQQv0peNyIcny%2FUbPMfGd5eCJ2C6XNYxlgvE9%2FCgZDuZixD7Xgtj9kqIKa2Qlnh5uAAXmTbW%2BkrOT%2Fuc14O%2B%2FQeRruFw1Ipnsuq2DLFkr1wVf5EKnKx80FDZK%2B2bBC96NHZEEw5dT%2Byd12%2BU7D%2Bp%2BNU6W8pRJ0b1TEguwRlBIjX%2BvUKXVbQqW6L5R1%2Flr4jwVHz2YLCyHTBSBepYIcts3dj5k2uj%2FBx824Eq2JRAEcPWBzi0Q0KjE1gFcjgdPO134ByWfpSWE1IIxRV8KFtKuL9S4PaKK7VD1%2FtnVYrmDuh3jo766XedA8HK8OlETPSG8t2ANYF8efWk1ba2LnpNe2MmYLYQ4u5kWVCAJQzcKdiyY64W6cmXwch3yEHwq06Z1Frnk62r91XDWy9E200yU9hBxfFNuRWreGg95HECCRBn60X7qyxekFs0us040Biut%2Bhk9OYDynQcaKwsn%2Bvi%2B1W1GtZDDTxsK9BjqkAcGQtetWhez0qkSy7o50yy4YPr6VIKHhmX6lhuPSkh98d0hvF3eePc763k0PmhC83ldtilf6MUgChtV4I5OkN9E2FbAgRgitOzpzPaa47sz%2BTpcvCCRsVRRmJtWghCsGZ%2BwMj9WqQTdWVDzONdQBEYJFsHCYvXevHCp2tiiRJAit%2FKV0PA3bJAAHTkXivJU8m6rniQqQivVYg%2BeiEt33CMpYzeb1&X-Amz-Signature=ce61f1619bd0cb27654682769602f4d4fd3951491bf900febae5ef505ef32b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMW7SJ7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDxzLIejzX7opxyyTDq0Ky1hGW2iXIyvM%2BAfIA%2B7a6mMgIhALOR9%2FTDtPjb03JRhwPJHUunF06RET60T0GaEl7FFC5GKv8DCEcQABoMNjM3NDIzMTgzODA1IgznxsGJFiCKLOtp084q3ANYRnIzpUTL0wPNRjCSD7O5A6OlTo0zrBcNAIkkuR39Ol5JCe80jvz3ExX4Q8b0KOKBjywQtTf%2BvKZb9k8eNTzOPkbQhMnryViusWJFqwQ0F4IMGkqgL7gRqoewAR%2FTH%2BmOrD2gyEdHiTF9W9CFK1Q%2BRvhulh71vjRQQv0peNyIcny%2FUbPMfGd5eCJ2C6XNYxlgvE9%2FCgZDuZixD7Xgtj9kqIKa2Qlnh5uAAXmTbW%2BkrOT%2Fuc14O%2B%2FQeRruFw1Ipnsuq2DLFkr1wVf5EKnKx80FDZK%2B2bBC96NHZEEw5dT%2Byd12%2BU7D%2Bp%2BNU6W8pRJ0b1TEguwRlBIjX%2BvUKXVbQqW6L5R1%2Flr4jwVHz2YLCyHTBSBepYIcts3dj5k2uj%2FBx824Eq2JRAEcPWBzi0Q0KjE1gFcjgdPO134ByWfpSWE1IIxRV8KFtKuL9S4PaKK7VD1%2FtnVYrmDuh3jo766XedA8HK8OlETPSG8t2ANYF8efWk1ba2LnpNe2MmYLYQ4u5kWVCAJQzcKdiyY64W6cmXwch3yEHwq06Z1Frnk62r91XDWy9E200yU9hBxfFNuRWreGg95HECCRBn60X7qyxekFs0us040Biut%2Bhk9OYDynQcaKwsn%2Bvi%2B1W1GtZDDTxsK9BjqkAcGQtetWhez0qkSy7o50yy4YPr6VIKHhmX6lhuPSkh98d0hvF3eePc763k0PmhC83ldtilf6MUgChtV4I5OkN9E2FbAgRgitOzpzPaa47sz%2BTpcvCCRsVRRmJtWghCsGZ%2BwMj9WqQTdWVDzONdQBEYJFsHCYvXevHCp2tiiRJAit%2FKV0PA3bJAAHTkXivJU8m6rniQqQivVYg%2BeiEt33CMpYzeb1&X-Amz-Signature=ecc25609cfea37b1555744d119a1ec805d8adea6b34abff74fa9fe10b2044f41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMW7SJ7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDxzLIejzX7opxyyTDq0Ky1hGW2iXIyvM%2BAfIA%2B7a6mMgIhALOR9%2FTDtPjb03JRhwPJHUunF06RET60T0GaEl7FFC5GKv8DCEcQABoMNjM3NDIzMTgzODA1IgznxsGJFiCKLOtp084q3ANYRnIzpUTL0wPNRjCSD7O5A6OlTo0zrBcNAIkkuR39Ol5JCe80jvz3ExX4Q8b0KOKBjywQtTf%2BvKZb9k8eNTzOPkbQhMnryViusWJFqwQ0F4IMGkqgL7gRqoewAR%2FTH%2BmOrD2gyEdHiTF9W9CFK1Q%2BRvhulh71vjRQQv0peNyIcny%2FUbPMfGd5eCJ2C6XNYxlgvE9%2FCgZDuZixD7Xgtj9kqIKa2Qlnh5uAAXmTbW%2BkrOT%2Fuc14O%2B%2FQeRruFw1Ipnsuq2DLFkr1wVf5EKnKx80FDZK%2B2bBC96NHZEEw5dT%2Byd12%2BU7D%2Bp%2BNU6W8pRJ0b1TEguwRlBIjX%2BvUKXVbQqW6L5R1%2Flr4jwVHz2YLCyHTBSBepYIcts3dj5k2uj%2FBx824Eq2JRAEcPWBzi0Q0KjE1gFcjgdPO134ByWfpSWE1IIxRV8KFtKuL9S4PaKK7VD1%2FtnVYrmDuh3jo766XedA8HK8OlETPSG8t2ANYF8efWk1ba2LnpNe2MmYLYQ4u5kWVCAJQzcKdiyY64W6cmXwch3yEHwq06Z1Frnk62r91XDWy9E200yU9hBxfFNuRWreGg95HECCRBn60X7qyxekFs0us040Biut%2Bhk9OYDynQcaKwsn%2Bvi%2B1W1GtZDDTxsK9BjqkAcGQtetWhez0qkSy7o50yy4YPr6VIKHhmX6lhuPSkh98d0hvF3eePc763k0PmhC83ldtilf6MUgChtV4I5OkN9E2FbAgRgitOzpzPaa47sz%2BTpcvCCRsVRRmJtWghCsGZ%2BwMj9WqQTdWVDzONdQBEYJFsHCYvXevHCp2tiiRJAit%2FKV0PA3bJAAHTkXivJU8m6rniQqQivVYg%2BeiEt33CMpYzeb1&X-Amz-Signature=9a020a9513866c9c9dd40fc0f64e128c5690edf1312e9495796509dfd7f776a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
