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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BBUDIZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDbQMpYW2m6r8GMy6%2BcY41WNaYbSWKbgIb7t3DDsCftkgIhAJLhi718STVYxpx8kG%2BZ7mYIT7J02Q2d70AsGoaTLQlTKv8DCBoQABoMNjM3NDIzMTgzODA1Igwk0fwG7ZjnjPNUcsEq3APA5UoePdqnsRem2bc0QMrVCuC%2Bw2ttU%2BVZ%2BonmhHqS0AFrlEf5Cz4Ob6U%2BnAFC7AtXNm08OFFP4Pwly%2BqdEuZHVfGBHf1rONj%2B1QjpCa8peX%2FcfRYVrz82XyZfY9%2FraoH%2FjcC8ZTYhT5lBNxeegHTTDgm83iibntkAP2knf%2Fxnv6BWGfiZWoAGVMyRCSYKlJfJjwv4gucuq7PoeBmPIufm8l7BGfG5PjRFAm7Qfr7%2F9QqOfunyKyLXx0IKc2TVdTiU%2BQvLv4lLSly40pDbPGdP7qDglz1ALjsipDdp3JFyfaMsg3Kq8yMYO9suOrLTM8SYqTP0VsTSeyGQIellnDSKyV3pgpvcj7FfhVfYmzcJ%2BwGdLpnuhJ5JKckk7RZuP0i8whA%2Bztbg9yYFcSn0AGIcO6P2IoTrG1tOjbv0kxD9AtHyaFLc2ki6hSELtnX%2Bpyz9nzqcpTv6p96mn9HfwQy7EkkdzC3x1w2%2BNffMASrkan3L0fEBY2CJxb6gT%2BnEaBjQBAnJQceasEqVf2RMnCF%2FlM96g1tYTdpMqwv1Wq2uvLon60o0uJvTJ4k8EuIh%2FWxayUyqX5w07%2FAQTPfS3vMOuRRr6bG1KJ%2FuA9Z2HA0wy9TEpl2y5C7GB1E22jDy0vzBBjqkAdD8mdQFD6zqikcxdi8KoGJYcLxOS3JQZSTVgk6sNsc5ZfvXkmjPyVtOfeIjxyCk15o9Oxbs%2BqXQeIOJMHdytMAc8hYoLqzQAu5ALFW0blrPTurrGvAis%2FkE5ZUhVILDgUWkgLOzAMEfRCfEc27Iee5P%2Fh%2B0Z10VWtm%2BaozYy%2FZmyxsefHeZUVOHNQPo9cB%2FhdcLf0Ogpr47EDo8YTXuj%2BZ6%2BJ6U&X-Amz-Signature=8cb7dd7727900f4ee3ff05d1ebb42107f58bee5b8389266722a905379001c58a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BBUDIZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDbQMpYW2m6r8GMy6%2BcY41WNaYbSWKbgIb7t3DDsCftkgIhAJLhi718STVYxpx8kG%2BZ7mYIT7J02Q2d70AsGoaTLQlTKv8DCBoQABoMNjM3NDIzMTgzODA1Igwk0fwG7ZjnjPNUcsEq3APA5UoePdqnsRem2bc0QMrVCuC%2Bw2ttU%2BVZ%2BonmhHqS0AFrlEf5Cz4Ob6U%2BnAFC7AtXNm08OFFP4Pwly%2BqdEuZHVfGBHf1rONj%2B1QjpCa8peX%2FcfRYVrz82XyZfY9%2FraoH%2FjcC8ZTYhT5lBNxeegHTTDgm83iibntkAP2knf%2Fxnv6BWGfiZWoAGVMyRCSYKlJfJjwv4gucuq7PoeBmPIufm8l7BGfG5PjRFAm7Qfr7%2F9QqOfunyKyLXx0IKc2TVdTiU%2BQvLv4lLSly40pDbPGdP7qDglz1ALjsipDdp3JFyfaMsg3Kq8yMYO9suOrLTM8SYqTP0VsTSeyGQIellnDSKyV3pgpvcj7FfhVfYmzcJ%2BwGdLpnuhJ5JKckk7RZuP0i8whA%2Bztbg9yYFcSn0AGIcO6P2IoTrG1tOjbv0kxD9AtHyaFLc2ki6hSELtnX%2Bpyz9nzqcpTv6p96mn9HfwQy7EkkdzC3x1w2%2BNffMASrkan3L0fEBY2CJxb6gT%2BnEaBjQBAnJQceasEqVf2RMnCF%2FlM96g1tYTdpMqwv1Wq2uvLon60o0uJvTJ4k8EuIh%2FWxayUyqX5w07%2FAQTPfS3vMOuRRr6bG1KJ%2FuA9Z2HA0wy9TEpl2y5C7GB1E22jDy0vzBBjqkAdD8mdQFD6zqikcxdi8KoGJYcLxOS3JQZSTVgk6sNsc5ZfvXkmjPyVtOfeIjxyCk15o9Oxbs%2BqXQeIOJMHdytMAc8hYoLqzQAu5ALFW0blrPTurrGvAis%2FkE5ZUhVILDgUWkgLOzAMEfRCfEc27Iee5P%2Fh%2B0Z10VWtm%2BaozYy%2FZmyxsefHeZUVOHNQPo9cB%2FhdcLf0Ogpr47EDo8YTXuj%2BZ6%2BJ6U&X-Amz-Signature=83302211708181725df9af05f489fb9d2999d78691b038103eb38f6a0c0c84a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BBUDIZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T170925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDbQMpYW2m6r8GMy6%2BcY41WNaYbSWKbgIb7t3DDsCftkgIhAJLhi718STVYxpx8kG%2BZ7mYIT7J02Q2d70AsGoaTLQlTKv8DCBoQABoMNjM3NDIzMTgzODA1Igwk0fwG7ZjnjPNUcsEq3APA5UoePdqnsRem2bc0QMrVCuC%2Bw2ttU%2BVZ%2BonmhHqS0AFrlEf5Cz4Ob6U%2BnAFC7AtXNm08OFFP4Pwly%2BqdEuZHVfGBHf1rONj%2B1QjpCa8peX%2FcfRYVrz82XyZfY9%2FraoH%2FjcC8ZTYhT5lBNxeegHTTDgm83iibntkAP2knf%2Fxnv6BWGfiZWoAGVMyRCSYKlJfJjwv4gucuq7PoeBmPIufm8l7BGfG5PjRFAm7Qfr7%2F9QqOfunyKyLXx0IKc2TVdTiU%2BQvLv4lLSly40pDbPGdP7qDglz1ALjsipDdp3JFyfaMsg3Kq8yMYO9suOrLTM8SYqTP0VsTSeyGQIellnDSKyV3pgpvcj7FfhVfYmzcJ%2BwGdLpnuhJ5JKckk7RZuP0i8whA%2Bztbg9yYFcSn0AGIcO6P2IoTrG1tOjbv0kxD9AtHyaFLc2ki6hSELtnX%2Bpyz9nzqcpTv6p96mn9HfwQy7EkkdzC3x1w2%2BNffMASrkan3L0fEBY2CJxb6gT%2BnEaBjQBAnJQceasEqVf2RMnCF%2FlM96g1tYTdpMqwv1Wq2uvLon60o0uJvTJ4k8EuIh%2FWxayUyqX5w07%2FAQTPfS3vMOuRRr6bG1KJ%2FuA9Z2HA0wy9TEpl2y5C7GB1E22jDy0vzBBjqkAdD8mdQFD6zqikcxdi8KoGJYcLxOS3JQZSTVgk6sNsc5ZfvXkmjPyVtOfeIjxyCk15o9Oxbs%2BqXQeIOJMHdytMAc8hYoLqzQAu5ALFW0blrPTurrGvAis%2FkE5ZUhVILDgUWkgLOzAMEfRCfEc27Iee5P%2Fh%2B0Z10VWtm%2BaozYy%2FZmyxsefHeZUVOHNQPo9cB%2FhdcLf0Ogpr47EDo8YTXuj%2BZ6%2BJ6U&X-Amz-Signature=ed92213c14de730bf8864d2ebed4b3ac6ec863df47f1ffc3ddb735715c82633d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
