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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNXK2JC7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqRyH%2BhT9138ZnfNv6OBH0CX2Mro7JagZYB62RTWHsIgIhANK1%2FoApSZg8RGGzFni9%2FK9cZz%2BXhbxhqc0TGIAmUl6%2FKv8DCFgQABoMNjM3NDIzMTgzODA1IgwCJFJfp9Tvev32JZAq3AMhPDZ6RqcOynVpcs4HcqyoLWozMDwi2chY7X82XXVmNz%2BXGH%2Fnp7S0TOYeGViHv9tMQ6ox4gfUE0nM5zIrDWfK6b92OZNEknWWBwi23nYrBdpBEQf5YbAItzgnsxQgxygIy3uJAWKx4af6%2BaoNZQUDjR5Kd%2BjZBbQJFYgZcMbnokkDSwNQYvLE2B5XNfLFqug4zp8eirvZyYnIW3es7nNYcOOR491C2j0OQuA8p52hicQRjPuVWZQ%2BY1onVuGa8kbGnTBMtry6AN5K4W%2BEfdQPmxIhz3r47yTADY3tOK5VeuenFYTBc%2F8Wn1%2FgtEz1qNhtik7NklTUu6MyUIFkRc4vvlatXt0O2eqi6M5KPujWg9VDk6I2cEzbrShIOL0zHoLPkEjBuYGH7SNXSi5%2Bsixf%2F59JOrh4lC8DztWXFiRFgmSRFKOV%2F6vw4StR%2F00kZYcI4pJQ8Ws8A80TyvlfnITn13xZG1Qwnyd2Mxhxl7c4qYaJjQ%2BhN60ndAQoUjeB7RlblxW2kXTIgcXSo7%2FOVOmfHKsGoO7TNzg7%2BWiQZ%2BfV2g9jKUogKj4l1wpuqIiFcYNHPKryJijMEQkdTtwgaj8bCLJNzTHoK1ngrpxyQ95TXWHlwpdztEmZUNh6lDCW4aDBBjqkAabadr3TrUa7M%2BGmjCmkn3twucIfZWWSvWhi8nKm0Mkgqdb1ZrKt3damYyQV9%2BcsbRToAfGHp%2FeBp1NR4KHZlqa8OkIT0Pp%2FLyg4%2FLksHfRtzoR10ha6Pe3D7FyeSvLGpVjqV6d9AeYj5meRrIzW%2FxmUns%2FsiR8JGWDKenUkj%2BHv%2BVL6L8llDiHwNOYD5QpldVl7%2BSL8ou%2BiF1pjtvyb86oOK%2F4l&X-Amz-Signature=008b01002dc2ee7859fb440c3b4a552eb2b2215e97125c4f654a35461fa3e8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNXK2JC7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqRyH%2BhT9138ZnfNv6OBH0CX2Mro7JagZYB62RTWHsIgIhANK1%2FoApSZg8RGGzFni9%2FK9cZz%2BXhbxhqc0TGIAmUl6%2FKv8DCFgQABoMNjM3NDIzMTgzODA1IgwCJFJfp9Tvev32JZAq3AMhPDZ6RqcOynVpcs4HcqyoLWozMDwi2chY7X82XXVmNz%2BXGH%2Fnp7S0TOYeGViHv9tMQ6ox4gfUE0nM5zIrDWfK6b92OZNEknWWBwi23nYrBdpBEQf5YbAItzgnsxQgxygIy3uJAWKx4af6%2BaoNZQUDjR5Kd%2BjZBbQJFYgZcMbnokkDSwNQYvLE2B5XNfLFqug4zp8eirvZyYnIW3es7nNYcOOR491C2j0OQuA8p52hicQRjPuVWZQ%2BY1onVuGa8kbGnTBMtry6AN5K4W%2BEfdQPmxIhz3r47yTADY3tOK5VeuenFYTBc%2F8Wn1%2FgtEz1qNhtik7NklTUu6MyUIFkRc4vvlatXt0O2eqi6M5KPujWg9VDk6I2cEzbrShIOL0zHoLPkEjBuYGH7SNXSi5%2Bsixf%2F59JOrh4lC8DztWXFiRFgmSRFKOV%2F6vw4StR%2F00kZYcI4pJQ8Ws8A80TyvlfnITn13xZG1Qwnyd2Mxhxl7c4qYaJjQ%2BhN60ndAQoUjeB7RlblxW2kXTIgcXSo7%2FOVOmfHKsGoO7TNzg7%2BWiQZ%2BfV2g9jKUogKj4l1wpuqIiFcYNHPKryJijMEQkdTtwgaj8bCLJNzTHoK1ngrpxyQ95TXWHlwpdztEmZUNh6lDCW4aDBBjqkAabadr3TrUa7M%2BGmjCmkn3twucIfZWWSvWhi8nKm0Mkgqdb1ZrKt3damYyQV9%2BcsbRToAfGHp%2FeBp1NR4KHZlqa8OkIT0Pp%2FLyg4%2FLksHfRtzoR10ha6Pe3D7FyeSvLGpVjqV6d9AeYj5meRrIzW%2FxmUns%2FsiR8JGWDKenUkj%2BHv%2BVL6L8llDiHwNOYD5QpldVl7%2BSL8ou%2BiF1pjtvyb86oOK%2F4l&X-Amz-Signature=0aa456d5efa906a9f4447b976b98fae93446c0312da80dbc87bda5d6cb898992&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNXK2JC7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqRyH%2BhT9138ZnfNv6OBH0CX2Mro7JagZYB62RTWHsIgIhANK1%2FoApSZg8RGGzFni9%2FK9cZz%2BXhbxhqc0TGIAmUl6%2FKv8DCFgQABoMNjM3NDIzMTgzODA1IgwCJFJfp9Tvev32JZAq3AMhPDZ6RqcOynVpcs4HcqyoLWozMDwi2chY7X82XXVmNz%2BXGH%2Fnp7S0TOYeGViHv9tMQ6ox4gfUE0nM5zIrDWfK6b92OZNEknWWBwi23nYrBdpBEQf5YbAItzgnsxQgxygIy3uJAWKx4af6%2BaoNZQUDjR5Kd%2BjZBbQJFYgZcMbnokkDSwNQYvLE2B5XNfLFqug4zp8eirvZyYnIW3es7nNYcOOR491C2j0OQuA8p52hicQRjPuVWZQ%2BY1onVuGa8kbGnTBMtry6AN5K4W%2BEfdQPmxIhz3r47yTADY3tOK5VeuenFYTBc%2F8Wn1%2FgtEz1qNhtik7NklTUu6MyUIFkRc4vvlatXt0O2eqi6M5KPujWg9VDk6I2cEzbrShIOL0zHoLPkEjBuYGH7SNXSi5%2Bsixf%2F59JOrh4lC8DztWXFiRFgmSRFKOV%2F6vw4StR%2F00kZYcI4pJQ8Ws8A80TyvlfnITn13xZG1Qwnyd2Mxhxl7c4qYaJjQ%2BhN60ndAQoUjeB7RlblxW2kXTIgcXSo7%2FOVOmfHKsGoO7TNzg7%2BWiQZ%2BfV2g9jKUogKj4l1wpuqIiFcYNHPKryJijMEQkdTtwgaj8bCLJNzTHoK1ngrpxyQ95TXWHlwpdztEmZUNh6lDCW4aDBBjqkAabadr3TrUa7M%2BGmjCmkn3twucIfZWWSvWhi8nKm0Mkgqdb1ZrKt3damYyQV9%2BcsbRToAfGHp%2FeBp1NR4KHZlqa8OkIT0Pp%2FLyg4%2FLksHfRtzoR10ha6Pe3D7FyeSvLGpVjqV6d9AeYj5meRrIzW%2FxmUns%2FsiR8JGWDKenUkj%2BHv%2BVL6L8llDiHwNOYD5QpldVl7%2BSL8ou%2BiF1pjtvyb86oOK%2F4l&X-Amz-Signature=c16a309840b707016753302f274d95bb07e277e6be3f0247c4e4cd01a7ae7a29&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
