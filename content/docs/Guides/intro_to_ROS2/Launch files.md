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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELK7VJA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDERJF4DZKj9ZI1L35ifOEePHFF7wZgtBCttnzaiaXqoAIhAIVVag3nIA8181rM0aauvzeFn7gAGV2N5GkJmV5%2BSfx7Kv8DCFAQABoMNjM3NDIzMTgzODA1Igw5Ee8UU6W2nheXl8Yq3ANYKCMG5eHmeXpjuEnP3TgLJzpc9wY%2FlBkD2hlCsXyPulD1xhAdo1D%2FW1T1jVInhPE0jrdEIHMDWnuKzs5AzmsIKLZ9uCG0snBno7JyQ6z4zfK9BfiXahWuM5h2tVN4C8fKR2rmtViu1QMx7qkKrj81sJSELQnYihmjbSYn%2FYUhP4GGBJr%2BSLZpy6WKjJudMO8j%2FpohTC0jZsvyTkDNNDGUcHIsyZBUpZDl60kPuj3hBr%2BFARbWH9AR94vyLGGyUmIiNXCxUrYge5tnG5kTFQuRabSwQfFKMkvPZQ7ecE1QO%2FFDJCKcW6kA037VzYSdb8YTMQo0%2Bk1axSxs6LQhkfjFKQ8ZxJLi0pAA5aJvSu876JAEw00fRSoNMa0L52obGx%2Fwp1Gl8hPQPhuBD6P%2BD%2BFZEfosQH3jZ8ZfIyJ4JCCfpgXFoBgnlpHFlOh0MIB8kNQBcvxrU17KPxBdAFAO2bFSPKt46L%2B0s9urhqW0vudEeFL2hHqpaE24daPUheEYUkPFYS2ykC8qtUMoz3a4TLtPWPV1CqmC8SEbyeEa8PsP%2Fs22Oo6oHttD5Kwr2oPmQib3xV0WifgZKpWWI7%2FX7evk1lL6DgGZNhqSik40MKQPq2jJtccb6waiZ3KuDzC0%2BZ7BBjqkAdCczd18nTNYi64UUrcDvOk2zBNabWeVOD1j%2FDoQxcTQqhrNvuVtSspRGaeohTM%2BLdOizLp3UZzvo1vDh1er3j7drihYklfYbVcuBCSV4Oia%2B%2B0XsdybvuFRy2HkjRxR%2B5cMb8Z%2FN7DY7%2F4UDqmLUuk0Ze9uIy6RuUjHjBE9OPrO%2BAgSkmgBbHNupxfCPcdM8izw3N2l0mjf0CwZlvQrPBIexXL1&X-Amz-Signature=46e65c72fe92ca653818673a9e9acae89831dc49780e6fed76716648c6c39d06&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELK7VJA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDERJF4DZKj9ZI1L35ifOEePHFF7wZgtBCttnzaiaXqoAIhAIVVag3nIA8181rM0aauvzeFn7gAGV2N5GkJmV5%2BSfx7Kv8DCFAQABoMNjM3NDIzMTgzODA1Igw5Ee8UU6W2nheXl8Yq3ANYKCMG5eHmeXpjuEnP3TgLJzpc9wY%2FlBkD2hlCsXyPulD1xhAdo1D%2FW1T1jVInhPE0jrdEIHMDWnuKzs5AzmsIKLZ9uCG0snBno7JyQ6z4zfK9BfiXahWuM5h2tVN4C8fKR2rmtViu1QMx7qkKrj81sJSELQnYihmjbSYn%2FYUhP4GGBJr%2BSLZpy6WKjJudMO8j%2FpohTC0jZsvyTkDNNDGUcHIsyZBUpZDl60kPuj3hBr%2BFARbWH9AR94vyLGGyUmIiNXCxUrYge5tnG5kTFQuRabSwQfFKMkvPZQ7ecE1QO%2FFDJCKcW6kA037VzYSdb8YTMQo0%2Bk1axSxs6LQhkfjFKQ8ZxJLi0pAA5aJvSu876JAEw00fRSoNMa0L52obGx%2Fwp1Gl8hPQPhuBD6P%2BD%2BFZEfosQH3jZ8ZfIyJ4JCCfpgXFoBgnlpHFlOh0MIB8kNQBcvxrU17KPxBdAFAO2bFSPKt46L%2B0s9urhqW0vudEeFL2hHqpaE24daPUheEYUkPFYS2ykC8qtUMoz3a4TLtPWPV1CqmC8SEbyeEa8PsP%2Fs22Oo6oHttD5Kwr2oPmQib3xV0WifgZKpWWI7%2FX7evk1lL6DgGZNhqSik40MKQPq2jJtccb6waiZ3KuDzC0%2BZ7BBjqkAdCczd18nTNYi64UUrcDvOk2zBNabWeVOD1j%2FDoQxcTQqhrNvuVtSspRGaeohTM%2BLdOizLp3UZzvo1vDh1er3j7drihYklfYbVcuBCSV4Oia%2B%2B0XsdybvuFRy2HkjRxR%2B5cMb8Z%2FN7DY7%2F4UDqmLUuk0Ze9uIy6RuUjHjBE9OPrO%2BAgSkmgBbHNupxfCPcdM8izw3N2l0mjf0CwZlvQrPBIexXL1&X-Amz-Signature=a23cf4129465e528d49fe9ce86bc8d6de883eab9ab75d77c68d843d37ba6372d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELK7VJA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDERJF4DZKj9ZI1L35ifOEePHFF7wZgtBCttnzaiaXqoAIhAIVVag3nIA8181rM0aauvzeFn7gAGV2N5GkJmV5%2BSfx7Kv8DCFAQABoMNjM3NDIzMTgzODA1Igw5Ee8UU6W2nheXl8Yq3ANYKCMG5eHmeXpjuEnP3TgLJzpc9wY%2FlBkD2hlCsXyPulD1xhAdo1D%2FW1T1jVInhPE0jrdEIHMDWnuKzs5AzmsIKLZ9uCG0snBno7JyQ6z4zfK9BfiXahWuM5h2tVN4C8fKR2rmtViu1QMx7qkKrj81sJSELQnYihmjbSYn%2FYUhP4GGBJr%2BSLZpy6WKjJudMO8j%2FpohTC0jZsvyTkDNNDGUcHIsyZBUpZDl60kPuj3hBr%2BFARbWH9AR94vyLGGyUmIiNXCxUrYge5tnG5kTFQuRabSwQfFKMkvPZQ7ecE1QO%2FFDJCKcW6kA037VzYSdb8YTMQo0%2Bk1axSxs6LQhkfjFKQ8ZxJLi0pAA5aJvSu876JAEw00fRSoNMa0L52obGx%2Fwp1Gl8hPQPhuBD6P%2BD%2BFZEfosQH3jZ8ZfIyJ4JCCfpgXFoBgnlpHFlOh0MIB8kNQBcvxrU17KPxBdAFAO2bFSPKt46L%2B0s9urhqW0vudEeFL2hHqpaE24daPUheEYUkPFYS2ykC8qtUMoz3a4TLtPWPV1CqmC8SEbyeEa8PsP%2Fs22Oo6oHttD5Kwr2oPmQib3xV0WifgZKpWWI7%2FX7evk1lL6DgGZNhqSik40MKQPq2jJtccb6waiZ3KuDzC0%2BZ7BBjqkAdCczd18nTNYi64UUrcDvOk2zBNabWeVOD1j%2FDoQxcTQqhrNvuVtSspRGaeohTM%2BLdOizLp3UZzvo1vDh1er3j7drihYklfYbVcuBCSV4Oia%2B%2B0XsdybvuFRy2HkjRxR%2B5cMb8Z%2FN7DY7%2F4UDqmLUuk0Ze9uIy6RuUjHjBE9OPrO%2BAgSkmgBbHNupxfCPcdM8izw3N2l0mjf0CwZlvQrPBIexXL1&X-Amz-Signature=c260b9e9db77757d9051c4c7cf6d89e85150ee9eb16e2f49771452410735c1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
