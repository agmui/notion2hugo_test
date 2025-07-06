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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFLUV63%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDQ71VC4E6SSu3WJIQQo7Bl41vIT3tgxeb8t9D3MqyS6AIhAJiToHZum7V7C2lQrDc0iQgewG203FUA9gHVEdmeR9QPKv8DCFgQABoMNjM3NDIzMTgzODA1Igw5OPEJTbgbH%2BCzNxEq3APlN0Jy7XljN6kkzw2x1KXZl3MMNQjEZESHbpEGoBORT6aAONYItfuT5QdXx5xnkkk1V9hBdMa%2FtWYPiKbSZSc%2F%2BGG7HjZUHdeTfeWPlFqVjfuB375oxs94y0Acqqt%2FGAnKV0MedKVZxi%2BOe6X%2FZusDOoxWeFpcyJXc4umbnbug7KA97iX2m83POSam7JVaIEyO81RMHANEpaEyUAsYuDjC9xiFfUfYYLsfYPLP21hqF6bLMXW2gPsJ0EFjO%2FQ9widQ9NuOb0486qEs7mzY3fWzfnff01d3q7TnzajzsXpKgqqwKqcpndSLLVm4jdsEARuP259%2F%2BHI43RplGjW2HErgZfzvJkRm4h7i0rX3iABqc97yw1mYm09SqiNvP4Q6rfJqJU2KPRgeXIpVYVFAfKR%2FyJXCUASdsfP7qy3MwKUbcAbeZPETfyB6%2BOdjgtj8XOi5oBdXh9%2F8d4ifd%2FPfgMzDf56ze0f24n2Sbxo4qjhT2ISQ5M3cg7qm7IS%2BQwfI9L%2FASm6GvFvmsmvHzdyFG6PBsmxAtj85WXbfq6xYsP%2FRGaiQM%2BrvMOPRfoU5T7dg1fuNBZBT9xr9SDh8ySCxKbHk35ON%2FWq00qCuZu86ZrmQTSLzlgxiKv6D%2BChz3jCRu6jDBjqkAYEwtvlLGzPz7jD4U9UMTX743g8HKyoGniTUhGZKWgA0xQNw6GKz0ADivRlkl1HmkImKX4dDzK5mbFUd19OAjVpVpnQWt36Q%2FR1H451ejNan4IpnUqsUHiiIeVCBFHdBzVsBB4eUrJckoHlEedP4uIYql%2BbhR%2F%2FYyWzOBGXHBCtDK9b%2Br1aCijA3YIEWsg7nZYJYfRVFbYoE4kPcGJcs5j6AbpqW&X-Amz-Signature=eec065fda8ff9918222296e70ed2a40f5c17a3f39cc1d4c0e3460b91f7e8632e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFLUV63%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDQ71VC4E6SSu3WJIQQo7Bl41vIT3tgxeb8t9D3MqyS6AIhAJiToHZum7V7C2lQrDc0iQgewG203FUA9gHVEdmeR9QPKv8DCFgQABoMNjM3NDIzMTgzODA1Igw5OPEJTbgbH%2BCzNxEq3APlN0Jy7XljN6kkzw2x1KXZl3MMNQjEZESHbpEGoBORT6aAONYItfuT5QdXx5xnkkk1V9hBdMa%2FtWYPiKbSZSc%2F%2BGG7HjZUHdeTfeWPlFqVjfuB375oxs94y0Acqqt%2FGAnKV0MedKVZxi%2BOe6X%2FZusDOoxWeFpcyJXc4umbnbug7KA97iX2m83POSam7JVaIEyO81RMHANEpaEyUAsYuDjC9xiFfUfYYLsfYPLP21hqF6bLMXW2gPsJ0EFjO%2FQ9widQ9NuOb0486qEs7mzY3fWzfnff01d3q7TnzajzsXpKgqqwKqcpndSLLVm4jdsEARuP259%2F%2BHI43RplGjW2HErgZfzvJkRm4h7i0rX3iABqc97yw1mYm09SqiNvP4Q6rfJqJU2KPRgeXIpVYVFAfKR%2FyJXCUASdsfP7qy3MwKUbcAbeZPETfyB6%2BOdjgtj8XOi5oBdXh9%2F8d4ifd%2FPfgMzDf56ze0f24n2Sbxo4qjhT2ISQ5M3cg7qm7IS%2BQwfI9L%2FASm6GvFvmsmvHzdyFG6PBsmxAtj85WXbfq6xYsP%2FRGaiQM%2BrvMOPRfoU5T7dg1fuNBZBT9xr9SDh8ySCxKbHk35ON%2FWq00qCuZu86ZrmQTSLzlgxiKv6D%2BChz3jCRu6jDBjqkAYEwtvlLGzPz7jD4U9UMTX743g8HKyoGniTUhGZKWgA0xQNw6GKz0ADivRlkl1HmkImKX4dDzK5mbFUd19OAjVpVpnQWt36Q%2FR1H451ejNan4IpnUqsUHiiIeVCBFHdBzVsBB4eUrJckoHlEedP4uIYql%2BbhR%2F%2FYyWzOBGXHBCtDK9b%2Br1aCijA3YIEWsg7nZYJYfRVFbYoE4kPcGJcs5j6AbpqW&X-Amz-Signature=a46318f697ffc01fce480200738eff7149120832bfc30f2070eab2584f1e39a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFLUV63%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDQ71VC4E6SSu3WJIQQo7Bl41vIT3tgxeb8t9D3MqyS6AIhAJiToHZum7V7C2lQrDc0iQgewG203FUA9gHVEdmeR9QPKv8DCFgQABoMNjM3NDIzMTgzODA1Igw5OPEJTbgbH%2BCzNxEq3APlN0Jy7XljN6kkzw2x1KXZl3MMNQjEZESHbpEGoBORT6aAONYItfuT5QdXx5xnkkk1V9hBdMa%2FtWYPiKbSZSc%2F%2BGG7HjZUHdeTfeWPlFqVjfuB375oxs94y0Acqqt%2FGAnKV0MedKVZxi%2BOe6X%2FZusDOoxWeFpcyJXc4umbnbug7KA97iX2m83POSam7JVaIEyO81RMHANEpaEyUAsYuDjC9xiFfUfYYLsfYPLP21hqF6bLMXW2gPsJ0EFjO%2FQ9widQ9NuOb0486qEs7mzY3fWzfnff01d3q7TnzajzsXpKgqqwKqcpndSLLVm4jdsEARuP259%2F%2BHI43RplGjW2HErgZfzvJkRm4h7i0rX3iABqc97yw1mYm09SqiNvP4Q6rfJqJU2KPRgeXIpVYVFAfKR%2FyJXCUASdsfP7qy3MwKUbcAbeZPETfyB6%2BOdjgtj8XOi5oBdXh9%2F8d4ifd%2FPfgMzDf56ze0f24n2Sbxo4qjhT2ISQ5M3cg7qm7IS%2BQwfI9L%2FASm6GvFvmsmvHzdyFG6PBsmxAtj85WXbfq6xYsP%2FRGaiQM%2BrvMOPRfoU5T7dg1fuNBZBT9xr9SDh8ySCxKbHk35ON%2FWq00qCuZu86ZrmQTSLzlgxiKv6D%2BChz3jCRu6jDBjqkAYEwtvlLGzPz7jD4U9UMTX743g8HKyoGniTUhGZKWgA0xQNw6GKz0ADivRlkl1HmkImKX4dDzK5mbFUd19OAjVpVpnQWt36Q%2FR1H451ejNan4IpnUqsUHiiIeVCBFHdBzVsBB4eUrJckoHlEedP4uIYql%2BbhR%2F%2FYyWzOBGXHBCtDK9b%2Br1aCijA3YIEWsg7nZYJYfRVFbYoE4kPcGJcs5j6AbpqW&X-Amz-Signature=7489390de3f1f7304c85c42da9f864da269ebe7839d50fb354cd1d14e854aff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
