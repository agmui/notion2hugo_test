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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOEX6N4U%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1BWMZM48uW9MZQgnnuCcMtX8lkjmEA3AE3wp7bL2qAIhAKc2pxms8JTR1zX4dK%2Fgyu8RQFF5Y17NebCiB%2FeevmybKv8DCBsQABoMNjM3NDIzMTgzODA1IgwzJ1YUsqv5VNkUgrgq3AO1TTk5%2B36yRsgZS3Tg%2B5Ot7GnpMVP3YjyyMCExvSuhptRMak7SSGYEoRckZB8NuyhOcDVNySV8cgLc2G20bzD4jymJA9J6%2BbHQrdvrUcaYZzNuKJPD3yLttJgCCEON8VBQnpTsJCsdF5MIkuXkhqOYtWRVi0W8pvw5PI%2FqZxD%2BxC4RUqDIkUMZCdjfkpCuP2VsZ0IBeNGuVIjZ1K5KpDvXJkq1JO0XntTApL9GCp5L8QkQcoy0wGnCSUsHgU2Je6z9JpDec1NKGqFA3lLciXHgRnLLNcFQKfTyPqd%2BLQImyYemB%2BYvNtyWHo78MJkA8ErKL9Kek7qfc8M24XgWHDT9CbXF70hjJ9Ey1hfM10F3wt%2B0isuVgUqEsNmOFsWJHURwLBNGsw7jONMqUPM%2BHdloTSGx5YUcexckk1Usg1KqLHj89jZmpq6SJXHiZcZydhjPS09xOAL1vVoTAczLVKYGZqoqqyw6im2%2F1zCFNlO3TqxT%2BxHbsE9ZS1UdFDqNAk3apd77V2uKihEg%2FcfDyiKBDvzPDKEu%2Fu5rz6o8Dmq5ftxMwRHU1PIupYsUlaFGX7ua6OqSoWkImEloGTyDZQ%2BvYPwE%2B7dUBobeee32%2FuE3P8sX1X86NtFO7gvpnTCr8anABjqkAQSlml1o%2FFZKaWqr%2Fg3OnvYhdjjHhkFYQWzL4b3aH28okgDnXt%2BImMuhGy34MfdPyhTTb512MToenJnHn7th79%2FL9Q82fatfVdH7C0BpwP%2B1NOn0OIP0tcNbll1rHf9rviQNceSN6Y%2F1bnzwBkDXRCHuBlwrho%2FrkyY3mWyalzI94wEyY4yghUL5HGExXdkU%2B6gqU59pp6nsh12J468iRs%2BV8u1B&X-Amz-Signature=977b9ffec7fc32a2ed24edd58d5affa18881e761fc822a541526d0ae357f5314&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOEX6N4U%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1BWMZM48uW9MZQgnnuCcMtX8lkjmEA3AE3wp7bL2qAIhAKc2pxms8JTR1zX4dK%2Fgyu8RQFF5Y17NebCiB%2FeevmybKv8DCBsQABoMNjM3NDIzMTgzODA1IgwzJ1YUsqv5VNkUgrgq3AO1TTk5%2B36yRsgZS3Tg%2B5Ot7GnpMVP3YjyyMCExvSuhptRMak7SSGYEoRckZB8NuyhOcDVNySV8cgLc2G20bzD4jymJA9J6%2BbHQrdvrUcaYZzNuKJPD3yLttJgCCEON8VBQnpTsJCsdF5MIkuXkhqOYtWRVi0W8pvw5PI%2FqZxD%2BxC4RUqDIkUMZCdjfkpCuP2VsZ0IBeNGuVIjZ1K5KpDvXJkq1JO0XntTApL9GCp5L8QkQcoy0wGnCSUsHgU2Je6z9JpDec1NKGqFA3lLciXHgRnLLNcFQKfTyPqd%2BLQImyYemB%2BYvNtyWHo78MJkA8ErKL9Kek7qfc8M24XgWHDT9CbXF70hjJ9Ey1hfM10F3wt%2B0isuVgUqEsNmOFsWJHURwLBNGsw7jONMqUPM%2BHdloTSGx5YUcexckk1Usg1KqLHj89jZmpq6SJXHiZcZydhjPS09xOAL1vVoTAczLVKYGZqoqqyw6im2%2F1zCFNlO3TqxT%2BxHbsE9ZS1UdFDqNAk3apd77V2uKihEg%2FcfDyiKBDvzPDKEu%2Fu5rz6o8Dmq5ftxMwRHU1PIupYsUlaFGX7ua6OqSoWkImEloGTyDZQ%2BvYPwE%2B7dUBobeee32%2FuE3P8sX1X86NtFO7gvpnTCr8anABjqkAQSlml1o%2FFZKaWqr%2Fg3OnvYhdjjHhkFYQWzL4b3aH28okgDnXt%2BImMuhGy34MfdPyhTTb512MToenJnHn7th79%2FL9Q82fatfVdH7C0BpwP%2B1NOn0OIP0tcNbll1rHf9rviQNceSN6Y%2F1bnzwBkDXRCHuBlwrho%2FrkyY3mWyalzI94wEyY4yghUL5HGExXdkU%2B6gqU59pp6nsh12J468iRs%2BV8u1B&X-Amz-Signature=c7d41020cfed406c96882d3a6a47c85b607d7c8fa6f54af4d8a39c1f23035712&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOEX6N4U%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1BWMZM48uW9MZQgnnuCcMtX8lkjmEA3AE3wp7bL2qAIhAKc2pxms8JTR1zX4dK%2Fgyu8RQFF5Y17NebCiB%2FeevmybKv8DCBsQABoMNjM3NDIzMTgzODA1IgwzJ1YUsqv5VNkUgrgq3AO1TTk5%2B36yRsgZS3Tg%2B5Ot7GnpMVP3YjyyMCExvSuhptRMak7SSGYEoRckZB8NuyhOcDVNySV8cgLc2G20bzD4jymJA9J6%2BbHQrdvrUcaYZzNuKJPD3yLttJgCCEON8VBQnpTsJCsdF5MIkuXkhqOYtWRVi0W8pvw5PI%2FqZxD%2BxC4RUqDIkUMZCdjfkpCuP2VsZ0IBeNGuVIjZ1K5KpDvXJkq1JO0XntTApL9GCp5L8QkQcoy0wGnCSUsHgU2Je6z9JpDec1NKGqFA3lLciXHgRnLLNcFQKfTyPqd%2BLQImyYemB%2BYvNtyWHo78MJkA8ErKL9Kek7qfc8M24XgWHDT9CbXF70hjJ9Ey1hfM10F3wt%2B0isuVgUqEsNmOFsWJHURwLBNGsw7jONMqUPM%2BHdloTSGx5YUcexckk1Usg1KqLHj89jZmpq6SJXHiZcZydhjPS09xOAL1vVoTAczLVKYGZqoqqyw6im2%2F1zCFNlO3TqxT%2BxHbsE9ZS1UdFDqNAk3apd77V2uKihEg%2FcfDyiKBDvzPDKEu%2Fu5rz6o8Dmq5ftxMwRHU1PIupYsUlaFGX7ua6OqSoWkImEloGTyDZQ%2BvYPwE%2B7dUBobeee32%2FuE3P8sX1X86NtFO7gvpnTCr8anABjqkAQSlml1o%2FFZKaWqr%2Fg3OnvYhdjjHhkFYQWzL4b3aH28okgDnXt%2BImMuhGy34MfdPyhTTb512MToenJnHn7th79%2FL9Q82fatfVdH7C0BpwP%2B1NOn0OIP0tcNbll1rHf9rviQNceSN6Y%2F1bnzwBkDXRCHuBlwrho%2FrkyY3mWyalzI94wEyY4yghUL5HGExXdkU%2B6gqU59pp6nsh12J468iRs%2BV8u1B&X-Amz-Signature=541d0f67e7536901752c1a1778f5eba47a2807aa8d1750efe557885e2d0276ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
