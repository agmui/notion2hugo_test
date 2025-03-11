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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD74SYSB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDyojbNqmYL7ek5ajNFqZ%2B29I%2BxXXOTRygDgANe10U8BQIgA0MH3WE7Rqn602YbDnvSCYFJRISA0gseLYncIpmnm6AqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyzxk5HdVInY2YtkCrcAw1kV0aLper%2BAYwKT1nZgMaZnyZoXhl30E0Xtct9TJF6q1ZbU3u4wnVb8vY6BNYnyuHilO1dzMwb%2BiSdWbBfFRduwAvwrTWBSoDgktlAqh8LhdTRAC%2FNu5jO6obPKuch57YYwAi94iZcaaeCQoSRjvtlxxYpbQcwYJqddAv7Q7JOZCIq%2FN0c2%2BB0AfWojZEVveFLZPCCICuo0%2FxtEoV3odDQwHeA6OAmtqMr2sEhZxsilckXTfLUlHYXe9a%2BPQqAZqmCer8Psoz%2FaVXNjzOgK90crkeHHIhHdkFieoX8xOx5aH0nOja6bqv8JlKVqnnr7UD6c4nzjW8642gAxDnRICF%2BNMVEVaJiKiaTAi%2FeeiVH7lQVpzVlQHcsnXje4cSM%2BQjMVb5c8mLg%2FZNKQyio5MqgntE6CjgZrciOEWQA%2BIYSYpywuDqaiKOE1x6pe7NoYU3LTPJ9FbXMlBUuEDU1smgbZ9gPdNMiirIfohTQk8g87a1YDC9Ey5seSrzFbjlZmADuzV3AS1vHY8psj4cXCTJHZJwczTCsag7p8oLy4S0FbFMQ8%2FEwTKTt9uPetbVzpdAhpuWdHdR0VNOdKu%2BM0oJxcxiYv%2FFxYo1DIJJXydE%2FsmNUI7CJYRp%2FqCeZMOTPvr4GOqUBhbo4vuEHhoLke9O2HtUFcM14QhYaa1h9jQjUQ57KcoBP%2Bv%2BEXxyOw3YsN7jPTGMpTd4FOmDIZvTAPEa9RaQ%2F8Xpl%2FD4h0FxIW0emWFdBUt%2FEJn4rCnerNAxr7SEMRZ4GXHmIbtFQClCzvObWiMxeHvwcXX%2Fn2VlpMcT1d052InJ4ICFjZg8WhpltTY1x0ug%2B2RXrIjny4R5muqtu5eGPgpl7Q6zd&X-Amz-Signature=2e5c8f1ef60a30a95d68e28798c2a08de9b4fa0578f5465a0709788c6e5cd9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD74SYSB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDyojbNqmYL7ek5ajNFqZ%2B29I%2BxXXOTRygDgANe10U8BQIgA0MH3WE7Rqn602YbDnvSCYFJRISA0gseLYncIpmnm6AqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyzxk5HdVInY2YtkCrcAw1kV0aLper%2BAYwKT1nZgMaZnyZoXhl30E0Xtct9TJF6q1ZbU3u4wnVb8vY6BNYnyuHilO1dzMwb%2BiSdWbBfFRduwAvwrTWBSoDgktlAqh8LhdTRAC%2FNu5jO6obPKuch57YYwAi94iZcaaeCQoSRjvtlxxYpbQcwYJqddAv7Q7JOZCIq%2FN0c2%2BB0AfWojZEVveFLZPCCICuo0%2FxtEoV3odDQwHeA6OAmtqMr2sEhZxsilckXTfLUlHYXe9a%2BPQqAZqmCer8Psoz%2FaVXNjzOgK90crkeHHIhHdkFieoX8xOx5aH0nOja6bqv8JlKVqnnr7UD6c4nzjW8642gAxDnRICF%2BNMVEVaJiKiaTAi%2FeeiVH7lQVpzVlQHcsnXje4cSM%2BQjMVb5c8mLg%2FZNKQyio5MqgntE6CjgZrciOEWQA%2BIYSYpywuDqaiKOE1x6pe7NoYU3LTPJ9FbXMlBUuEDU1smgbZ9gPdNMiirIfohTQk8g87a1YDC9Ey5seSrzFbjlZmADuzV3AS1vHY8psj4cXCTJHZJwczTCsag7p8oLy4S0FbFMQ8%2FEwTKTt9uPetbVzpdAhpuWdHdR0VNOdKu%2BM0oJxcxiYv%2FFxYo1DIJJXydE%2FsmNUI7CJYRp%2FqCeZMOTPvr4GOqUBhbo4vuEHhoLke9O2HtUFcM14QhYaa1h9jQjUQ57KcoBP%2Bv%2BEXxyOw3YsN7jPTGMpTd4FOmDIZvTAPEa9RaQ%2F8Xpl%2FD4h0FxIW0emWFdBUt%2FEJn4rCnerNAxr7SEMRZ4GXHmIbtFQClCzvObWiMxeHvwcXX%2Fn2VlpMcT1d052InJ4ICFjZg8WhpltTY1x0ug%2B2RXrIjny4R5muqtu5eGPgpl7Q6zd&X-Amz-Signature=65b06713373bd2569635c5778187869a43897e10790db15af3349ac527a2d982&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD74SYSB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDyojbNqmYL7ek5ajNFqZ%2B29I%2BxXXOTRygDgANe10U8BQIgA0MH3WE7Rqn602YbDnvSCYFJRISA0gseLYncIpmnm6AqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyzxk5HdVInY2YtkCrcAw1kV0aLper%2BAYwKT1nZgMaZnyZoXhl30E0Xtct9TJF6q1ZbU3u4wnVb8vY6BNYnyuHilO1dzMwb%2BiSdWbBfFRduwAvwrTWBSoDgktlAqh8LhdTRAC%2FNu5jO6obPKuch57YYwAi94iZcaaeCQoSRjvtlxxYpbQcwYJqddAv7Q7JOZCIq%2FN0c2%2BB0AfWojZEVveFLZPCCICuo0%2FxtEoV3odDQwHeA6OAmtqMr2sEhZxsilckXTfLUlHYXe9a%2BPQqAZqmCer8Psoz%2FaVXNjzOgK90crkeHHIhHdkFieoX8xOx5aH0nOja6bqv8JlKVqnnr7UD6c4nzjW8642gAxDnRICF%2BNMVEVaJiKiaTAi%2FeeiVH7lQVpzVlQHcsnXje4cSM%2BQjMVb5c8mLg%2FZNKQyio5MqgntE6CjgZrciOEWQA%2BIYSYpywuDqaiKOE1x6pe7NoYU3LTPJ9FbXMlBUuEDU1smgbZ9gPdNMiirIfohTQk8g87a1YDC9Ey5seSrzFbjlZmADuzV3AS1vHY8psj4cXCTJHZJwczTCsag7p8oLy4S0FbFMQ8%2FEwTKTt9uPetbVzpdAhpuWdHdR0VNOdKu%2BM0oJxcxiYv%2FFxYo1DIJJXydE%2FsmNUI7CJYRp%2FqCeZMOTPvr4GOqUBhbo4vuEHhoLke9O2HtUFcM14QhYaa1h9jQjUQ57KcoBP%2Bv%2BEXxyOw3YsN7jPTGMpTd4FOmDIZvTAPEa9RaQ%2F8Xpl%2FD4h0FxIW0emWFdBUt%2FEJn4rCnerNAxr7SEMRZ4GXHmIbtFQClCzvObWiMxeHvwcXX%2Fn2VlpMcT1d052InJ4ICFjZg8WhpltTY1x0ug%2B2RXrIjny4R5muqtu5eGPgpl7Q6zd&X-Amz-Signature=1f69435b6cf7e713f7c2adda33217c87ccc6871db7bf4bc835c8f052d1e24f12&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
