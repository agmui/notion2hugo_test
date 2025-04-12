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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXJB5MP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIF4FcBIo2%2FMuC%2Bo4cni9E0tsCZjM7eDiL0JVo%2FxWUcuxAiEA2Hl9S%2FqyPjVPfQvW6BdTNFyI8FvHJFGMYpVGRJhxF7QqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP200cytG3IMpVkphircA8T2LXETNCVUYwmwmU2VfNEHj43cARXpkbUmyXOqJyb3UagDfcUJZzjoIPPhtj4b8aUOhQJS5tJhhPGTglOI617uNxjbzBVBRsyd5xxpoecs4FfmIeRYGwzKKBvS6F%2F%2BhJdDGnmglL3PfbP77DkPbbuLYPbENzRi0hKR6%2FDqIeIipeJ%2Burv1Zl6%2Bsgva9Iwy3AN7XX%2Fljn0TUMUPHsNnlLqMQfaHdTh0RZ5mzZCmB93hJwplCZhRK2dMHO56njB1IswcgTzKr8IIvJ9D2Nl4ku57pGSyqTah8PfaCcY6dyohaFrYE%2BQxGiNZPbhkaC3FyvIXFnpG9lj7VPaCirHGOiZ4jVL0Kl6oY0HPGVPNE3A5AqhsrPcOEzP3UCA0xzlpKv1lLPh8CId7A9HRfSPqQ5iNSpqkulLP80sC3bHsoP9wM0EbJdxm2djm215kF%2FH0WzSHehVn6S67zcVfkExKmC42k0m3q%2B5cf64W%2BTainrkNPOfZxdwyYOcmjfJRIimu3wNkjBFdDD8oTjH2Kz4RmanwUsgNQkfy8KPFP2F838PBizQj6tx%2BF36RHgQzqhFEFRtUZgE7Rw5TfQ82zosd90k4KYzD6l1WQ3xGMKqy4lq9Xs6VW5ca0qknGvqlMN%2FT578GOqUBdaYObWrlRuR0ybgJtsa%2BAOTsKETdJjO7oHg8W8pxWPTqcj64w4mlHZY9MUrlOM3VoNOBgaKgVXSlR5nz%2BP5gvu1W6th5c6oqwBYuWjxJLQWycETnxFXPeXdH71EKEx4swmmA0gppXJZMePSV4y3uEfCw%2BZXtu6WRWpq3UWVsYXo6DWSVP5IuhYhmbhTk7FNeMLHYtS8ACoL%2FWLLs9keFSSK8viq%2B&X-Amz-Signature=5c9f6b27219308036413c968f435033e11d7e949ba8ef41ea45453390d27daf4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXJB5MP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIF4FcBIo2%2FMuC%2Bo4cni9E0tsCZjM7eDiL0JVo%2FxWUcuxAiEA2Hl9S%2FqyPjVPfQvW6BdTNFyI8FvHJFGMYpVGRJhxF7QqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP200cytG3IMpVkphircA8T2LXETNCVUYwmwmU2VfNEHj43cARXpkbUmyXOqJyb3UagDfcUJZzjoIPPhtj4b8aUOhQJS5tJhhPGTglOI617uNxjbzBVBRsyd5xxpoecs4FfmIeRYGwzKKBvS6F%2F%2BhJdDGnmglL3PfbP77DkPbbuLYPbENzRi0hKR6%2FDqIeIipeJ%2Burv1Zl6%2Bsgva9Iwy3AN7XX%2Fljn0TUMUPHsNnlLqMQfaHdTh0RZ5mzZCmB93hJwplCZhRK2dMHO56njB1IswcgTzKr8IIvJ9D2Nl4ku57pGSyqTah8PfaCcY6dyohaFrYE%2BQxGiNZPbhkaC3FyvIXFnpG9lj7VPaCirHGOiZ4jVL0Kl6oY0HPGVPNE3A5AqhsrPcOEzP3UCA0xzlpKv1lLPh8CId7A9HRfSPqQ5iNSpqkulLP80sC3bHsoP9wM0EbJdxm2djm215kF%2FH0WzSHehVn6S67zcVfkExKmC42k0m3q%2B5cf64W%2BTainrkNPOfZxdwyYOcmjfJRIimu3wNkjBFdDD8oTjH2Kz4RmanwUsgNQkfy8KPFP2F838PBizQj6tx%2BF36RHgQzqhFEFRtUZgE7Rw5TfQ82zosd90k4KYzD6l1WQ3xGMKqy4lq9Xs6VW5ca0qknGvqlMN%2FT578GOqUBdaYObWrlRuR0ybgJtsa%2BAOTsKETdJjO7oHg8W8pxWPTqcj64w4mlHZY9MUrlOM3VoNOBgaKgVXSlR5nz%2BP5gvu1W6th5c6oqwBYuWjxJLQWycETnxFXPeXdH71EKEx4swmmA0gppXJZMePSV4y3uEfCw%2BZXtu6WRWpq3UWVsYXo6DWSVP5IuhYhmbhTk7FNeMLHYtS8ACoL%2FWLLs9keFSSK8viq%2B&X-Amz-Signature=f04bc9a6ef2d97dea2495003606be8548dd8984403bdcc91b369d36842b777c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXJB5MP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIF4FcBIo2%2FMuC%2Bo4cni9E0tsCZjM7eDiL0JVo%2FxWUcuxAiEA2Hl9S%2FqyPjVPfQvW6BdTNFyI8FvHJFGMYpVGRJhxF7QqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP200cytG3IMpVkphircA8T2LXETNCVUYwmwmU2VfNEHj43cARXpkbUmyXOqJyb3UagDfcUJZzjoIPPhtj4b8aUOhQJS5tJhhPGTglOI617uNxjbzBVBRsyd5xxpoecs4FfmIeRYGwzKKBvS6F%2F%2BhJdDGnmglL3PfbP77DkPbbuLYPbENzRi0hKR6%2FDqIeIipeJ%2Burv1Zl6%2Bsgva9Iwy3AN7XX%2Fljn0TUMUPHsNnlLqMQfaHdTh0RZ5mzZCmB93hJwplCZhRK2dMHO56njB1IswcgTzKr8IIvJ9D2Nl4ku57pGSyqTah8PfaCcY6dyohaFrYE%2BQxGiNZPbhkaC3FyvIXFnpG9lj7VPaCirHGOiZ4jVL0Kl6oY0HPGVPNE3A5AqhsrPcOEzP3UCA0xzlpKv1lLPh8CId7A9HRfSPqQ5iNSpqkulLP80sC3bHsoP9wM0EbJdxm2djm215kF%2FH0WzSHehVn6S67zcVfkExKmC42k0m3q%2B5cf64W%2BTainrkNPOfZxdwyYOcmjfJRIimu3wNkjBFdDD8oTjH2Kz4RmanwUsgNQkfy8KPFP2F838PBizQj6tx%2BF36RHgQzqhFEFRtUZgE7Rw5TfQ82zosd90k4KYzD6l1WQ3xGMKqy4lq9Xs6VW5ca0qknGvqlMN%2FT578GOqUBdaYObWrlRuR0ybgJtsa%2BAOTsKETdJjO7oHg8W8pxWPTqcj64w4mlHZY9MUrlOM3VoNOBgaKgVXSlR5nz%2BP5gvu1W6th5c6oqwBYuWjxJLQWycETnxFXPeXdH71EKEx4swmmA0gppXJZMePSV4y3uEfCw%2BZXtu6WRWpq3UWVsYXo6DWSVP5IuhYhmbhTk7FNeMLHYtS8ACoL%2FWLLs9keFSSK8viq%2B&X-Amz-Signature=6392a1282bbbc60c864947f130607a341128a0f50131f63d9bd2ab767d21e76b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
