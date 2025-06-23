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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LPFA3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIW753HkDUk6VpiClX96yWH9UFUg9iETzk%2FV2165h7vwIgRd2XEysWZoU1dGtLK4cooTrVyze5Ap%2BM3c1TEE4jzHwqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5wogA4GC0aAmu82CrcAxDyFeQNzMf9vUrKHhsF7%2Be7WfS6M1AegNZQeBwiuAJnQs3xMluAaaHz6%2BSRScjbRjrawE9gT3cc7jd8Yq1CiBHJrD%2F5ZtHiEhjERh70T2h1BBj9rKTDp0x2w96ng5wR4alUOGi7d3GGjX4tgdijOkUxEFFfN1VEQvkCqyk2m1nWKSk3ZpjTpLW%2FkC7FbFZaocr9wmcICp6MZ%2BpN1od6XOVZSKJ46i03%2B5OEHuQZJPlGeGzVJgha08PC%2FtslmYVz9n%2BwZO9BDWA63SULENpp484ZejeIjNCjWIv4p39Dvgy%2F7ydJxkL%2Br4ROA8Mx4wAWtSRJGzXq7A%2Ficz%2F5LfN%2FoFQMjWsXIlnT3scoJmL%2B6xjqB4NOuL0EC1xTM6tOa%2BAUpo3aXw4xxTafU1SqxOERw%2BWBUqtkc4r3UEt4ybAlp1T9lhnaytdzIysZuztbDa57L1hbpq6k3gkhd3GWc72RpDMaRBx0MUZLCq4LwxBHwj3FFdRnyoH8ihYwCOO50vaZhfAwWOy6UDOdm5iUKmpCZzAwc9RUU8D%2BZOlAspGoV8INym5odnK3uLoLsN8MzlOIX4OhXAELMUh5w4AZ6HfxJ41IBUGYhNmSgk8t2QXNGyipV9ZDQkyHFeIrldmkMPGm4sIGOqUBbzb63AQ%2FnXP08S55UvjWHTWDjBdGxC7Aza4L%2BTrlPobr5DwRRE%2FhruMNOtZevhvdz%2BVM93jztqV3YRiAnAoq8mzZ9L1Ov%2FNTxiP6BYazgLVwOCI0pfP93d%2F1x9vAdThNEaxC7iWHem8dB2IR9xgQmJwaWfaBEYAX5XYuSCqA6eHcBTvBnPT6p1bUw5VAVtU1%2FAXpNk%2FubIaJSqSdbezKARvMXf%2F%2F&X-Amz-Signature=a0e1c1827d2da21c4e8abba636c8bebe7bd983efb9137126acbf385e7a0b0b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LPFA3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIW753HkDUk6VpiClX96yWH9UFUg9iETzk%2FV2165h7vwIgRd2XEysWZoU1dGtLK4cooTrVyze5Ap%2BM3c1TEE4jzHwqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5wogA4GC0aAmu82CrcAxDyFeQNzMf9vUrKHhsF7%2Be7WfS6M1AegNZQeBwiuAJnQs3xMluAaaHz6%2BSRScjbRjrawE9gT3cc7jd8Yq1CiBHJrD%2F5ZtHiEhjERh70T2h1BBj9rKTDp0x2w96ng5wR4alUOGi7d3GGjX4tgdijOkUxEFFfN1VEQvkCqyk2m1nWKSk3ZpjTpLW%2FkC7FbFZaocr9wmcICp6MZ%2BpN1od6XOVZSKJ46i03%2B5OEHuQZJPlGeGzVJgha08PC%2FtslmYVz9n%2BwZO9BDWA63SULENpp484ZejeIjNCjWIv4p39Dvgy%2F7ydJxkL%2Br4ROA8Mx4wAWtSRJGzXq7A%2Ficz%2F5LfN%2FoFQMjWsXIlnT3scoJmL%2B6xjqB4NOuL0EC1xTM6tOa%2BAUpo3aXw4xxTafU1SqxOERw%2BWBUqtkc4r3UEt4ybAlp1T9lhnaytdzIysZuztbDa57L1hbpq6k3gkhd3GWc72RpDMaRBx0MUZLCq4LwxBHwj3FFdRnyoH8ihYwCOO50vaZhfAwWOy6UDOdm5iUKmpCZzAwc9RUU8D%2BZOlAspGoV8INym5odnK3uLoLsN8MzlOIX4OhXAELMUh5w4AZ6HfxJ41IBUGYhNmSgk8t2QXNGyipV9ZDQkyHFeIrldmkMPGm4sIGOqUBbzb63AQ%2FnXP08S55UvjWHTWDjBdGxC7Aza4L%2BTrlPobr5DwRRE%2FhruMNOtZevhvdz%2BVM93jztqV3YRiAnAoq8mzZ9L1Ov%2FNTxiP6BYazgLVwOCI0pfP93d%2F1x9vAdThNEaxC7iWHem8dB2IR9xgQmJwaWfaBEYAX5XYuSCqA6eHcBTvBnPT6p1bUw5VAVtU1%2FAXpNk%2FubIaJSqSdbezKARvMXf%2F%2F&X-Amz-Signature=6a43fd3194c8db6eb0259fd60322a51df7e624c6c744d8c0645bfe9155e79cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LPFA3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIW753HkDUk6VpiClX96yWH9UFUg9iETzk%2FV2165h7vwIgRd2XEysWZoU1dGtLK4cooTrVyze5Ap%2BM3c1TEE4jzHwqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5wogA4GC0aAmu82CrcAxDyFeQNzMf9vUrKHhsF7%2Be7WfS6M1AegNZQeBwiuAJnQs3xMluAaaHz6%2BSRScjbRjrawE9gT3cc7jd8Yq1CiBHJrD%2F5ZtHiEhjERh70T2h1BBj9rKTDp0x2w96ng5wR4alUOGi7d3GGjX4tgdijOkUxEFFfN1VEQvkCqyk2m1nWKSk3ZpjTpLW%2FkC7FbFZaocr9wmcICp6MZ%2BpN1od6XOVZSKJ46i03%2B5OEHuQZJPlGeGzVJgha08PC%2FtslmYVz9n%2BwZO9BDWA63SULENpp484ZejeIjNCjWIv4p39Dvgy%2F7ydJxkL%2Br4ROA8Mx4wAWtSRJGzXq7A%2Ficz%2F5LfN%2FoFQMjWsXIlnT3scoJmL%2B6xjqB4NOuL0EC1xTM6tOa%2BAUpo3aXw4xxTafU1SqxOERw%2BWBUqtkc4r3UEt4ybAlp1T9lhnaytdzIysZuztbDa57L1hbpq6k3gkhd3GWc72RpDMaRBx0MUZLCq4LwxBHwj3FFdRnyoH8ihYwCOO50vaZhfAwWOy6UDOdm5iUKmpCZzAwc9RUU8D%2BZOlAspGoV8INym5odnK3uLoLsN8MzlOIX4OhXAELMUh5w4AZ6HfxJ41IBUGYhNmSgk8t2QXNGyipV9ZDQkyHFeIrldmkMPGm4sIGOqUBbzb63AQ%2FnXP08S55UvjWHTWDjBdGxC7Aza4L%2BTrlPobr5DwRRE%2FhruMNOtZevhvdz%2BVM93jztqV3YRiAnAoq8mzZ9L1Ov%2FNTxiP6BYazgLVwOCI0pfP93d%2F1x9vAdThNEaxC7iWHem8dB2IR9xgQmJwaWfaBEYAX5XYuSCqA6eHcBTvBnPT6p1bUw5VAVtU1%2FAXpNk%2FubIaJSqSdbezKARvMXf%2F%2F&X-Amz-Signature=7ff48c5542d2a3c8a8e4fe9e5076bd9d892abdb13f25bfc401e2e625b057d81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
