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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3AQRWF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDqnzlO1wR9UjvXm8R0ZYC%2B9IZKR24NMfppHVpQsLfwdgIhAMqbcTnXIyrXEuUUPD3JZn6oL7Kwvfqsti6cPjQkhnWBKv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2F6mFNWIwJT%2BBaV48q3AOZtoi7NBbRYQ8bC%2FufUNcyISJ5nRYDC95LIi8DU4qnSY6yanOvMrc1zIufVsT%2FymmlEwLr%2B4fl1yKwUImsayDNpmwwCPFODr9kUCQwkRBA2Bporr2TvF1WJwJ2xYMMEz6moIH57nhIt1EY5ZN2kNh4TxHvs8cBXDMhuhAIlpbN98KLcbrEwVIyiTRT422l7kHiLCUGGO63E9RIanX4jArgmdes%2FUf9ntH5M7QOklomzvgF03KHaPHmi5kJgmj8Hjhu3g51AP0bsxWIi9jf61Y8XgeU6IKGn1wTJDbvtHELX%2FMgxg5YjGjBe3x80c5sktjGx0kmg%2BD1sKsKUATSA4CC9z9PQGYhqZrayspRLBDEE0o6YJMqwqxeXoXgLaFThnkFbE%2BuYaZtwKlgm%2FOHnn1rpgTnMBH%2BG1RGj697yzcOhhldzIKY2atsy%2F3wD9b8fkyaSXv7kjHHDf1crA9USaIR%2FPQ9jy8MVSevh10XnUpifc62lFDqtzohPfbELFRj30JZb%2BRWxA4HCucnikxNUspZ5oFrexZEmiAkDgCcjyF1%2Bcqp%2Bry3zz13SjUEXTOex%2B8eMiq2vZc4n0OpAORzgeiHDMRag6mo8LrdVtkuHkoSjYIe1BnFiVs9haD63DDYrYG%2BBjqkAewB0%2Bq1QTLdIagExjYMN9ytw5waVZQUj7dNJDH%2Fvg%2BQvue3OQgZISlBgLWhgedcXVdV8NvTf87EziIMa7xw5M4YYqKm4EToRVtoI7yfajnS22JnJn58yNDd9x9UX2ljXZX3xJtAHUM2fTVL0DjI1zvUrrvufbCWSJ2CADLVA1%2FuDPCpCxXn7mNlHu7O%2B2YY54KBf3AvwSpbhPoyyy%2Fg3tUQScqs&X-Amz-Signature=e70e4c7f7ed405e739034f4934e916c8a338dc748d5c916bbedfb92c877af1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3AQRWF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDqnzlO1wR9UjvXm8R0ZYC%2B9IZKR24NMfppHVpQsLfwdgIhAMqbcTnXIyrXEuUUPD3JZn6oL7Kwvfqsti6cPjQkhnWBKv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2F6mFNWIwJT%2BBaV48q3AOZtoi7NBbRYQ8bC%2FufUNcyISJ5nRYDC95LIi8DU4qnSY6yanOvMrc1zIufVsT%2FymmlEwLr%2B4fl1yKwUImsayDNpmwwCPFODr9kUCQwkRBA2Bporr2TvF1WJwJ2xYMMEz6moIH57nhIt1EY5ZN2kNh4TxHvs8cBXDMhuhAIlpbN98KLcbrEwVIyiTRT422l7kHiLCUGGO63E9RIanX4jArgmdes%2FUf9ntH5M7QOklomzvgF03KHaPHmi5kJgmj8Hjhu3g51AP0bsxWIi9jf61Y8XgeU6IKGn1wTJDbvtHELX%2FMgxg5YjGjBe3x80c5sktjGx0kmg%2BD1sKsKUATSA4CC9z9PQGYhqZrayspRLBDEE0o6YJMqwqxeXoXgLaFThnkFbE%2BuYaZtwKlgm%2FOHnn1rpgTnMBH%2BG1RGj697yzcOhhldzIKY2atsy%2F3wD9b8fkyaSXv7kjHHDf1crA9USaIR%2FPQ9jy8MVSevh10XnUpifc62lFDqtzohPfbELFRj30JZb%2BRWxA4HCucnikxNUspZ5oFrexZEmiAkDgCcjyF1%2Bcqp%2Bry3zz13SjUEXTOex%2B8eMiq2vZc4n0OpAORzgeiHDMRag6mo8LrdVtkuHkoSjYIe1BnFiVs9haD63DDYrYG%2BBjqkAewB0%2Bq1QTLdIagExjYMN9ytw5waVZQUj7dNJDH%2Fvg%2BQvue3OQgZISlBgLWhgedcXVdV8NvTf87EziIMa7xw5M4YYqKm4EToRVtoI7yfajnS22JnJn58yNDd9x9UX2ljXZX3xJtAHUM2fTVL0DjI1zvUrrvufbCWSJ2CADLVA1%2FuDPCpCxXn7mNlHu7O%2B2YY54KBf3AvwSpbhPoyyy%2Fg3tUQScqs&X-Amz-Signature=dd55f9706c827de8f35b31e376e6d185d17ccf4948627b41581802029f40fdf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3AQRWF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDqnzlO1wR9UjvXm8R0ZYC%2B9IZKR24NMfppHVpQsLfwdgIhAMqbcTnXIyrXEuUUPD3JZn6oL7Kwvfqsti6cPjQkhnWBKv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2F6mFNWIwJT%2BBaV48q3AOZtoi7NBbRYQ8bC%2FufUNcyISJ5nRYDC95LIi8DU4qnSY6yanOvMrc1zIufVsT%2FymmlEwLr%2B4fl1yKwUImsayDNpmwwCPFODr9kUCQwkRBA2Bporr2TvF1WJwJ2xYMMEz6moIH57nhIt1EY5ZN2kNh4TxHvs8cBXDMhuhAIlpbN98KLcbrEwVIyiTRT422l7kHiLCUGGO63E9RIanX4jArgmdes%2FUf9ntH5M7QOklomzvgF03KHaPHmi5kJgmj8Hjhu3g51AP0bsxWIi9jf61Y8XgeU6IKGn1wTJDbvtHELX%2FMgxg5YjGjBe3x80c5sktjGx0kmg%2BD1sKsKUATSA4CC9z9PQGYhqZrayspRLBDEE0o6YJMqwqxeXoXgLaFThnkFbE%2BuYaZtwKlgm%2FOHnn1rpgTnMBH%2BG1RGj697yzcOhhldzIKY2atsy%2F3wD9b8fkyaSXv7kjHHDf1crA9USaIR%2FPQ9jy8MVSevh10XnUpifc62lFDqtzohPfbELFRj30JZb%2BRWxA4HCucnikxNUspZ5oFrexZEmiAkDgCcjyF1%2Bcqp%2Bry3zz13SjUEXTOex%2B8eMiq2vZc4n0OpAORzgeiHDMRag6mo8LrdVtkuHkoSjYIe1BnFiVs9haD63DDYrYG%2BBjqkAewB0%2Bq1QTLdIagExjYMN9ytw5waVZQUj7dNJDH%2Fvg%2BQvue3OQgZISlBgLWhgedcXVdV8NvTf87EziIMa7xw5M4YYqKm4EToRVtoI7yfajnS22JnJn58yNDd9x9UX2ljXZX3xJtAHUM2fTVL0DjI1zvUrrvufbCWSJ2CADLVA1%2FuDPCpCxXn7mNlHu7O%2B2YY54KBf3AvwSpbhPoyyy%2Fg3tUQScqs&X-Amz-Signature=ea8e87843e95f609b06fa8c50040c201d50f1f8de0eba2f2ddf129570ed79513&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
