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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJBQO6S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX6EbNd6Y7bkb3GaaY3aKXc12AWL2dkg54sp7Tu%2BhOWwIhAPyszuVkymLlRqNAjYJJTQ9qtyauoA600oFlviAlc7hwKv8DCDMQABoMNjM3NDIzMTgzODA1IgzTC6k%2BkbAglSx2V58q3ANpngADalmWK1MwnLx1%2B0t4apJguTRTnuzOhlwuCuUo1HWfk715%2BlMCR39cxnGr0sX1LHxtEfQ16Gl9POcJ%2F42CwD8UHLVJPrZtfGxyuHmSTqIm5WvVtcM5TuTnMvYBHpB2afqMD2iBPACJM6hwyJuscwJsBlCEhohni9FBf8rr1CrMl7vXtqZ6fnMpmc5ymmvbd8BiZEjcSRrBgzRX%2B34fqZAX0U%2BdR7sFqEIDVc1dEKrNHWOB8rizUZJT6Xw3Q%2BeKkeK3W0FExgLmN2JtcjV4vkWHO2Edo%2BfhYz%2FsrLH%2BTz8X4Xx1wtUxUpft7Yta%2FOCG%2FYfqjpgobqOSFWD2sld7zRNsevsx4NzojSlDutlXdiW4%2BBr%2FXRwQ%2FLIF9JcMxDOmvhMDiO41Ux7i5%2BOspZZgfIKOZVw%2B9Vmjf3WSvEYAduPowC1xVnUmfruvkkExS2C%2BnyOL8bt%2B7j8WMODC3FxUl9f49thZnej1%2Fq%2F%2FIYICYWqYiZ3XPkBm6EUn3cYl1JrZBF6mX6%2BpQDIPvzY2KRKKyk%2Bw7sDTWUSZuVe2R9pNV0MR%2FUzhXnH6TgFZJ0TYIhogk%2BnXXo0GDJNieIjTm%2Fwts0vuQB1BlWvAD%2ByxRK%2BN9tGFzJ7lNDDiRPeKNjDg9pC%2FBjqkAUpMXUkTx230zv60ZjDLPECfVU9GeEKq5JHETcPcH1VxpGyFGX0uTm14yY71HcAfDOqU0jPQR7PLY79duE58ZeMbJtZVx8qp5zbz1VSc7Oaph%2Bi1bB%2BYIiAsGSqpd5qeP9FZU%2BtrwOQsZOoDhnbIXxzUgf0DuwDnFGlq7jq2FbXrtqDQ1hULQtqWNce%2F8G9N4wzU0W69Mvvc2GtUNErAQ5L2KfNC&X-Amz-Signature=a22aa0ff96e0c8896a863b6f2b00afcf7bfe50a2658f475cb3abd1466e59abe7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJBQO6S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX6EbNd6Y7bkb3GaaY3aKXc12AWL2dkg54sp7Tu%2BhOWwIhAPyszuVkymLlRqNAjYJJTQ9qtyauoA600oFlviAlc7hwKv8DCDMQABoMNjM3NDIzMTgzODA1IgzTC6k%2BkbAglSx2V58q3ANpngADalmWK1MwnLx1%2B0t4apJguTRTnuzOhlwuCuUo1HWfk715%2BlMCR39cxnGr0sX1LHxtEfQ16Gl9POcJ%2F42CwD8UHLVJPrZtfGxyuHmSTqIm5WvVtcM5TuTnMvYBHpB2afqMD2iBPACJM6hwyJuscwJsBlCEhohni9FBf8rr1CrMl7vXtqZ6fnMpmc5ymmvbd8BiZEjcSRrBgzRX%2B34fqZAX0U%2BdR7sFqEIDVc1dEKrNHWOB8rizUZJT6Xw3Q%2BeKkeK3W0FExgLmN2JtcjV4vkWHO2Edo%2BfhYz%2FsrLH%2BTz8X4Xx1wtUxUpft7Yta%2FOCG%2FYfqjpgobqOSFWD2sld7zRNsevsx4NzojSlDutlXdiW4%2BBr%2FXRwQ%2FLIF9JcMxDOmvhMDiO41Ux7i5%2BOspZZgfIKOZVw%2B9Vmjf3WSvEYAduPowC1xVnUmfruvkkExS2C%2BnyOL8bt%2B7j8WMODC3FxUl9f49thZnej1%2Fq%2F%2FIYICYWqYiZ3XPkBm6EUn3cYl1JrZBF6mX6%2BpQDIPvzY2KRKKyk%2Bw7sDTWUSZuVe2R9pNV0MR%2FUzhXnH6TgFZJ0TYIhogk%2BnXXo0GDJNieIjTm%2Fwts0vuQB1BlWvAD%2ByxRK%2BN9tGFzJ7lNDDiRPeKNjDg9pC%2FBjqkAUpMXUkTx230zv60ZjDLPECfVU9GeEKq5JHETcPcH1VxpGyFGX0uTm14yY71HcAfDOqU0jPQR7PLY79duE58ZeMbJtZVx8qp5zbz1VSc7Oaph%2Bi1bB%2BYIiAsGSqpd5qeP9FZU%2BtrwOQsZOoDhnbIXxzUgf0DuwDnFGlq7jq2FbXrtqDQ1hULQtqWNce%2F8G9N4wzU0W69Mvvc2GtUNErAQ5L2KfNC&X-Amz-Signature=c0801410707341e31a2f8bc35b9e6fe2b3b17e2505c9060100d1c62cf4106f19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJBQO6S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX6EbNd6Y7bkb3GaaY3aKXc12AWL2dkg54sp7Tu%2BhOWwIhAPyszuVkymLlRqNAjYJJTQ9qtyauoA600oFlviAlc7hwKv8DCDMQABoMNjM3NDIzMTgzODA1IgzTC6k%2BkbAglSx2V58q3ANpngADalmWK1MwnLx1%2B0t4apJguTRTnuzOhlwuCuUo1HWfk715%2BlMCR39cxnGr0sX1LHxtEfQ16Gl9POcJ%2F42CwD8UHLVJPrZtfGxyuHmSTqIm5WvVtcM5TuTnMvYBHpB2afqMD2iBPACJM6hwyJuscwJsBlCEhohni9FBf8rr1CrMl7vXtqZ6fnMpmc5ymmvbd8BiZEjcSRrBgzRX%2B34fqZAX0U%2BdR7sFqEIDVc1dEKrNHWOB8rizUZJT6Xw3Q%2BeKkeK3W0FExgLmN2JtcjV4vkWHO2Edo%2BfhYz%2FsrLH%2BTz8X4Xx1wtUxUpft7Yta%2FOCG%2FYfqjpgobqOSFWD2sld7zRNsevsx4NzojSlDutlXdiW4%2BBr%2FXRwQ%2FLIF9JcMxDOmvhMDiO41Ux7i5%2BOspZZgfIKOZVw%2B9Vmjf3WSvEYAduPowC1xVnUmfruvkkExS2C%2BnyOL8bt%2B7j8WMODC3FxUl9f49thZnej1%2Fq%2F%2FIYICYWqYiZ3XPkBm6EUn3cYl1JrZBF6mX6%2BpQDIPvzY2KRKKyk%2Bw7sDTWUSZuVe2R9pNV0MR%2FUzhXnH6TgFZJ0TYIhogk%2BnXXo0GDJNieIjTm%2Fwts0vuQB1BlWvAD%2ByxRK%2BN9tGFzJ7lNDDiRPeKNjDg9pC%2FBjqkAUpMXUkTx230zv60ZjDLPECfVU9GeEKq5JHETcPcH1VxpGyFGX0uTm14yY71HcAfDOqU0jPQR7PLY79duE58ZeMbJtZVx8qp5zbz1VSc7Oaph%2Bi1bB%2BYIiAsGSqpd5qeP9FZU%2BtrwOQsZOoDhnbIXxzUgf0DuwDnFGlq7jq2FbXrtqDQ1hULQtqWNce%2F8G9N4wzU0W69Mvvc2GtUNErAQ5L2KfNC&X-Amz-Signature=e8781d2c0c8b5257bce17055900e8e43de1653451ebb047c5c78e0113e7f7532&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
