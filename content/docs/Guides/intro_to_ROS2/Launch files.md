---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJ7D2N6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCkedQzqYmak9fzuBHwSyHgAOWE4pp%2FtpW9awMTWu36EAIhANNzge2lr64gCzTWHDf3IGdXD%2Bd5qd22nMiPr5RtlDAYKv8DCD4QABoMNjM3NDIzMTgzODA1Igwa1bTkVVboSCJI%2BAYq3AMW0HBD4Th6Zxl7GzIsO%2FWXF4vWnXFR3KxwfuaejP8xDt3H%2BZaqcn%2FPU6m8nXbnX%2Bcz8vLkSeuI0T7UEk0XiTTMjEtSowbebQ32L%2Ba79WqKKEoSMb7D7Ff9oGkp%2F879z3KWQ6E2KUWT%2BxA%2FJmN%2FBZq7L7WlkkLvhjSEo%2BMpLsCzqMw1uzBe%2Fy1vmFiFWMgmVj1yCm9VX%2Bci%2BpddshH%2FfAXBBpoIEaEy%2FAr%2FbDYD01JcKd8pxg8Ae6DzRWu1o4YLm0kaykOQ3CBwqXb3zDrN1p%2B%2FVGYkxlRq5dHGiDYxu1Vu8FeQD2yv%2FNuiD%2FrmuhNbzC73P9HYtVcFH4GmCnQ4laDEV0CzDqThYv3BBg%2Fs9fZRH9EJCWdYwtILCIAStmflHH71DPQxYaCJEyzWMCFPjk1r4mTiOwiEPyGjsU6vI1S2BrFUzZEwiDteCi9UAhQWbcWa6xFy6c16ALz3gtWtKXc7iRev%2B0oXufk2JlGDnWXHLtuTVA2Um5vaOPavbH1KuFDH0vBP8CSN7mnXYSHkVQOh%2B2Go3Jb6XJ81tAiCdIxTXpq%2BpDxIbLbUq6TStPh9W%2FDLP8vqG4hyA0FhNxM8ygl7kTiezRDqfy7dHa51bUFki68J5Nvj1BdCOeUORDDhnIzEBjqkAZch5sOzy%2BAOJDmDTffDUsSVuQP6IWnGAvj8nh96VGW5XhH2qPc5sYaPR2Q9pIgI0%2FilldPPsd66VpArp4s5VXNhjckHJeDZIzpiJucXaCU5fpivmzHUFY9KPYQHMmEVK%2BPn8bGhndVvRw31hZws8BHj33AA4kreR2nCv1p97a7JsUkblUxcV1YS%2FKmUofm1nNVKbMUarTv%2F4gmZjiBG8Q5hbcVJ&X-Amz-Signature=a1c57d6e75b1f727d7961e7ac8d5a35acb69bfeb7a0d353de20ae18fa57b2d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJ7D2N6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCkedQzqYmak9fzuBHwSyHgAOWE4pp%2FtpW9awMTWu36EAIhANNzge2lr64gCzTWHDf3IGdXD%2Bd5qd22nMiPr5RtlDAYKv8DCD4QABoMNjM3NDIzMTgzODA1Igwa1bTkVVboSCJI%2BAYq3AMW0HBD4Th6Zxl7GzIsO%2FWXF4vWnXFR3KxwfuaejP8xDt3H%2BZaqcn%2FPU6m8nXbnX%2Bcz8vLkSeuI0T7UEk0XiTTMjEtSowbebQ32L%2Ba79WqKKEoSMb7D7Ff9oGkp%2F879z3KWQ6E2KUWT%2BxA%2FJmN%2FBZq7L7WlkkLvhjSEo%2BMpLsCzqMw1uzBe%2Fy1vmFiFWMgmVj1yCm9VX%2Bci%2BpddshH%2FfAXBBpoIEaEy%2FAr%2FbDYD01JcKd8pxg8Ae6DzRWu1o4YLm0kaykOQ3CBwqXb3zDrN1p%2B%2FVGYkxlRq5dHGiDYxu1Vu8FeQD2yv%2FNuiD%2FrmuhNbzC73P9HYtVcFH4GmCnQ4laDEV0CzDqThYv3BBg%2Fs9fZRH9EJCWdYwtILCIAStmflHH71DPQxYaCJEyzWMCFPjk1r4mTiOwiEPyGjsU6vI1S2BrFUzZEwiDteCi9UAhQWbcWa6xFy6c16ALz3gtWtKXc7iRev%2B0oXufk2JlGDnWXHLtuTVA2Um5vaOPavbH1KuFDH0vBP8CSN7mnXYSHkVQOh%2B2Go3Jb6XJ81tAiCdIxTXpq%2BpDxIbLbUq6TStPh9W%2FDLP8vqG4hyA0FhNxM8ygl7kTiezRDqfy7dHa51bUFki68J5Nvj1BdCOeUORDDhnIzEBjqkAZch5sOzy%2BAOJDmDTffDUsSVuQP6IWnGAvj8nh96VGW5XhH2qPc5sYaPR2Q9pIgI0%2FilldPPsd66VpArp4s5VXNhjckHJeDZIzpiJucXaCU5fpivmzHUFY9KPYQHMmEVK%2BPn8bGhndVvRw31hZws8BHj33AA4kreR2nCv1p97a7JsUkblUxcV1YS%2FKmUofm1nNVKbMUarTv%2F4gmZjiBG8Q5hbcVJ&X-Amz-Signature=5c229349055b365aecaaad1eca1568aeb408c58f306f93280013ae3c790f89bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJ7D2N6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCkedQzqYmak9fzuBHwSyHgAOWE4pp%2FtpW9awMTWu36EAIhANNzge2lr64gCzTWHDf3IGdXD%2Bd5qd22nMiPr5RtlDAYKv8DCD4QABoMNjM3NDIzMTgzODA1Igwa1bTkVVboSCJI%2BAYq3AMW0HBD4Th6Zxl7GzIsO%2FWXF4vWnXFR3KxwfuaejP8xDt3H%2BZaqcn%2FPU6m8nXbnX%2Bcz8vLkSeuI0T7UEk0XiTTMjEtSowbebQ32L%2Ba79WqKKEoSMb7D7Ff9oGkp%2F879z3KWQ6E2KUWT%2BxA%2FJmN%2FBZq7L7WlkkLvhjSEo%2BMpLsCzqMw1uzBe%2Fy1vmFiFWMgmVj1yCm9VX%2Bci%2BpddshH%2FfAXBBpoIEaEy%2FAr%2FbDYD01JcKd8pxg8Ae6DzRWu1o4YLm0kaykOQ3CBwqXb3zDrN1p%2B%2FVGYkxlRq5dHGiDYxu1Vu8FeQD2yv%2FNuiD%2FrmuhNbzC73P9HYtVcFH4GmCnQ4laDEV0CzDqThYv3BBg%2Fs9fZRH9EJCWdYwtILCIAStmflHH71DPQxYaCJEyzWMCFPjk1r4mTiOwiEPyGjsU6vI1S2BrFUzZEwiDteCi9UAhQWbcWa6xFy6c16ALz3gtWtKXc7iRev%2B0oXufk2JlGDnWXHLtuTVA2Um5vaOPavbH1KuFDH0vBP8CSN7mnXYSHkVQOh%2B2Go3Jb6XJ81tAiCdIxTXpq%2BpDxIbLbUq6TStPh9W%2FDLP8vqG4hyA0FhNxM8ygl7kTiezRDqfy7dHa51bUFki68J5Nvj1BdCOeUORDDhnIzEBjqkAZch5sOzy%2BAOJDmDTffDUsSVuQP6IWnGAvj8nh96VGW5XhH2qPc5sYaPR2Q9pIgI0%2FilldPPsd66VpArp4s5VXNhjckHJeDZIzpiJucXaCU5fpivmzHUFY9KPYQHMmEVK%2BPn8bGhndVvRw31hZws8BHj33AA4kreR2nCv1p97a7JsUkblUxcV1YS%2FKmUofm1nNVKbMUarTv%2F4gmZjiBG8Q5hbcVJ&X-Amz-Signature=8e9c48e6a998f59eac25dbfbacd403863b002ac67ad5bc586701b2f9ad9396a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
