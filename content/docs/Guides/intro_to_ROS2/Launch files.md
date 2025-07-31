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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY65HOCG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzwjwESBl8EHSVUkO0L9qsSvPq8KZWPNGa8r%2FqmrlQDAiEAw1wFgh8im5hwIfQwV7LK5xgQEp00lNuckh5kOTJGLTgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC29acN%2BSALbj%2B25eCrcA5ZJC223rjhsz2Wx3OcaAGjq7mRcHRS%2FEow%2BdzBiT5IFzMuS0fKYv%2FQAew1o0I0g6iN68xF5%2B%2F42jrO3wqtRAhxwEFv8FOGqiq1%2ByfBBedoy8KGdtK4AaIiSlzr%2FhJ6P0%2BnLolENMr%2FwphXAaaKxuRYcI%2BlSs5VkjhOIwxLPDgPfQL4iT7OadjpgXWnZNy4zG3dIbmq3kRpQrDQjlZPJiUurQsGXDVXyaVSnRUk5neoN%2F1mdHuHgk15bFHrcMY1xEVFgeqDen4qSbt6S2WjlXEH4IhWVXrTNlZzRg7Ue9hAyeFeNGz5Y44be5tY4PnD2G2R469%2BmN4Y5KEZSSW2%2FYvYSJ2dgZJX7tANCpl1AW7eHH%2BIVun%2BimOvBBmPGf%2BoKGc8wLUsgLFzY1fVFUrDAODT40HjlV8of8z1TVcucE3cpCPHzXdZRX%2FKYvDdgVi573VRV7sbUE2goR2RqAkzGjeVgnRQjOui23wrEgARsS3QiTiXT7e%2FIBdZVlmlxkSe4y8of8HetxqBWkk9lJYeNHkO72ToY7v0ZskGTudKMZYCqGefME9cUAZwVzcTzt3qHqDjF12mIXQlnA9g36peZ41sRdUa50GBGLW5aD7kfPRJLo7q1IHBRLG6DmS1aMMOmr8QGOqUBN2LIbLziSkQpFO5QlXePRDTnMluoWDISCRL0Dm5PIBrZW5%2BAt%2BYvXLcwsVLuBmdN66FfwwrQL0g7CVDoGOGmLIrPgUZrUHcEtcrFIEvgO%2F6St6G17Edh2ot9oWL7d1lGcez86mCoIvqRxDG39n2FKkd3R1WwgyhkPbfGwLUgpxQnL1nMwNdjfmSsyftmR6Z2Yij%2F%2B%2BuoLgWpFxOi6IlXeGcRfqM%2B&X-Amz-Signature=aa7522c595b4f9eea49ac8abb767eed7cb098ee318601b03ed1ea58f527ea481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY65HOCG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzwjwESBl8EHSVUkO0L9qsSvPq8KZWPNGa8r%2FqmrlQDAiEAw1wFgh8im5hwIfQwV7LK5xgQEp00lNuckh5kOTJGLTgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC29acN%2BSALbj%2B25eCrcA5ZJC223rjhsz2Wx3OcaAGjq7mRcHRS%2FEow%2BdzBiT5IFzMuS0fKYv%2FQAew1o0I0g6iN68xF5%2B%2F42jrO3wqtRAhxwEFv8FOGqiq1%2ByfBBedoy8KGdtK4AaIiSlzr%2FhJ6P0%2BnLolENMr%2FwphXAaaKxuRYcI%2BlSs5VkjhOIwxLPDgPfQL4iT7OadjpgXWnZNy4zG3dIbmq3kRpQrDQjlZPJiUurQsGXDVXyaVSnRUk5neoN%2F1mdHuHgk15bFHrcMY1xEVFgeqDen4qSbt6S2WjlXEH4IhWVXrTNlZzRg7Ue9hAyeFeNGz5Y44be5tY4PnD2G2R469%2BmN4Y5KEZSSW2%2FYvYSJ2dgZJX7tANCpl1AW7eHH%2BIVun%2BimOvBBmPGf%2BoKGc8wLUsgLFzY1fVFUrDAODT40HjlV8of8z1TVcucE3cpCPHzXdZRX%2FKYvDdgVi573VRV7sbUE2goR2RqAkzGjeVgnRQjOui23wrEgARsS3QiTiXT7e%2FIBdZVlmlxkSe4y8of8HetxqBWkk9lJYeNHkO72ToY7v0ZskGTudKMZYCqGefME9cUAZwVzcTzt3qHqDjF12mIXQlnA9g36peZ41sRdUa50GBGLW5aD7kfPRJLo7q1IHBRLG6DmS1aMMOmr8QGOqUBN2LIbLziSkQpFO5QlXePRDTnMluoWDISCRL0Dm5PIBrZW5%2BAt%2BYvXLcwsVLuBmdN66FfwwrQL0g7CVDoGOGmLIrPgUZrUHcEtcrFIEvgO%2F6St6G17Edh2ot9oWL7d1lGcez86mCoIvqRxDG39n2FKkd3R1WwgyhkPbfGwLUgpxQnL1nMwNdjfmSsyftmR6Z2Yij%2F%2B%2BuoLgWpFxOi6IlXeGcRfqM%2B&X-Amz-Signature=88c87fc71500f98aca2ac266734a6cd08d7d4ee01cf99ab7ae2d92ee462e38f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY65HOCG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzwjwESBl8EHSVUkO0L9qsSvPq8KZWPNGa8r%2FqmrlQDAiEAw1wFgh8im5hwIfQwV7LK5xgQEp00lNuckh5kOTJGLTgqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC29acN%2BSALbj%2B25eCrcA5ZJC223rjhsz2Wx3OcaAGjq7mRcHRS%2FEow%2BdzBiT5IFzMuS0fKYv%2FQAew1o0I0g6iN68xF5%2B%2F42jrO3wqtRAhxwEFv8FOGqiq1%2ByfBBedoy8KGdtK4AaIiSlzr%2FhJ6P0%2BnLolENMr%2FwphXAaaKxuRYcI%2BlSs5VkjhOIwxLPDgPfQL4iT7OadjpgXWnZNy4zG3dIbmq3kRpQrDQjlZPJiUurQsGXDVXyaVSnRUk5neoN%2F1mdHuHgk15bFHrcMY1xEVFgeqDen4qSbt6S2WjlXEH4IhWVXrTNlZzRg7Ue9hAyeFeNGz5Y44be5tY4PnD2G2R469%2BmN4Y5KEZSSW2%2FYvYSJ2dgZJX7tANCpl1AW7eHH%2BIVun%2BimOvBBmPGf%2BoKGc8wLUsgLFzY1fVFUrDAODT40HjlV8of8z1TVcucE3cpCPHzXdZRX%2FKYvDdgVi573VRV7sbUE2goR2RqAkzGjeVgnRQjOui23wrEgARsS3QiTiXT7e%2FIBdZVlmlxkSe4y8of8HetxqBWkk9lJYeNHkO72ToY7v0ZskGTudKMZYCqGefME9cUAZwVzcTzt3qHqDjF12mIXQlnA9g36peZ41sRdUa50GBGLW5aD7kfPRJLo7q1IHBRLG6DmS1aMMOmr8QGOqUBN2LIbLziSkQpFO5QlXePRDTnMluoWDISCRL0Dm5PIBrZW5%2BAt%2BYvXLcwsVLuBmdN66FfwwrQL0g7CVDoGOGmLIrPgUZrUHcEtcrFIEvgO%2F6St6G17Edh2ot9oWL7d1lGcez86mCoIvqRxDG39n2FKkd3R1WwgyhkPbfGwLUgpxQnL1nMwNdjfmSsyftmR6Z2Yij%2F%2B%2BuoLgWpFxOi6IlXeGcRfqM%2B&X-Amz-Signature=565aa329e6c14dd5c6d0a5056770bc5914e987e8f093e87365cd696bf90d3b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
