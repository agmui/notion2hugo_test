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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSDX67D%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuthvxV4mMegxINXyaTzlL3Kr%2FO0NnBib8zbKkjXMLwAiEAigs9h4pl3CrtMUI4PYpEfGbnT8K5kVTDvLT3axfobQYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy4LJ2o6SUbRWZKBSrcAy5JHvGkEfzEfVG92YCto3yyJYdyu7pCDmNPJhiTaTs2WWpZNU3m%2BUlCRwiCSYmzTtpQyE3kXl7akTj3VL1ICy6OAhj0Shf7azrQjHIUKdI6Bim%2B4eOLNozLqvplWo%2BmpE5LrWd2FfJ1qQD9QImgdyq7hZtjRCGsx8531ckok%2Fxn%2BR%2BzNhsiy1Zy9jg%2BbDOg%2F4vKEXoAQpyFdVgc01%2Fr1%2BPZrC8pvY%2FWXhtyeJD%2Ba88rfEipeRvqMVQKHuukkGvzDnAKdFa885nbE%2Fe1PxGQ5AJsvQkLcKI9y4iWcNQin0OQ%2BEuqOo79Z6UKh3i7TocrrVPxEUiWMg03Umqzh8IRSuag1OnG64%2Brmk2Z60WD0Ro%2F%2FXngfbiDAW09b3PDHt%2Bmr9sNBkVnVD2afUBI0aRHtOPWgURLUsfZQSvM%2BR%2FByquCV0Mm2HwFS4zunfKhiTJqMEcDgzCG7fRrstN%2FeF8d%2BWHeO6XLTVELITVIJ3HBKjm%2Bn7%2BJli9%2BuiY99nw%2Ffq3uOPdt9g4fwhY1ZhGQYTBtukQAmlzt25wkCCWddyOBd%2Bu1ad9dV9nkZBPdWRT%2FGMr5%2B53lmAOqPKqvcymZ%2BeA0wFlbIpSyOkhrHisNbKZO1uadmEPHmVP91b9a8YKUMJvV2cIGOqUBOhXzwJDiGrIiz4SWcPVQ3dizCgD37bnjZjuRlxXXGXE38mrnXJfZEr4y%2FF7KqXn5T2EnL2HDOxUw%2ForlYjj%2FqLYiQlkqqdnl6rdvyrXBIeRV5rpjlzA0eA2XAK8e22Thrp7ydKJZHd99fLS%2FzUKgLI6xUHwDkL9y1RpDB4H5jSR%2BUFBhIehHtIBYq2HNl1HJZ3MupppPfAobZnKmQ9CcD%2F1uEsIV&X-Amz-Signature=862988bfeabcecf9491d8b2bb54f375e8e935e1b2ad00d12a07b4d21707c8236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSDX67D%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuthvxV4mMegxINXyaTzlL3Kr%2FO0NnBib8zbKkjXMLwAiEAigs9h4pl3CrtMUI4PYpEfGbnT8K5kVTDvLT3axfobQYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy4LJ2o6SUbRWZKBSrcAy5JHvGkEfzEfVG92YCto3yyJYdyu7pCDmNPJhiTaTs2WWpZNU3m%2BUlCRwiCSYmzTtpQyE3kXl7akTj3VL1ICy6OAhj0Shf7azrQjHIUKdI6Bim%2B4eOLNozLqvplWo%2BmpE5LrWd2FfJ1qQD9QImgdyq7hZtjRCGsx8531ckok%2Fxn%2BR%2BzNhsiy1Zy9jg%2BbDOg%2F4vKEXoAQpyFdVgc01%2Fr1%2BPZrC8pvY%2FWXhtyeJD%2Ba88rfEipeRvqMVQKHuukkGvzDnAKdFa885nbE%2Fe1PxGQ5AJsvQkLcKI9y4iWcNQin0OQ%2BEuqOo79Z6UKh3i7TocrrVPxEUiWMg03Umqzh8IRSuag1OnG64%2Brmk2Z60WD0Ro%2F%2FXngfbiDAW09b3PDHt%2Bmr9sNBkVnVD2afUBI0aRHtOPWgURLUsfZQSvM%2BR%2FByquCV0Mm2HwFS4zunfKhiTJqMEcDgzCG7fRrstN%2FeF8d%2BWHeO6XLTVELITVIJ3HBKjm%2Bn7%2BJli9%2BuiY99nw%2Ffq3uOPdt9g4fwhY1ZhGQYTBtukQAmlzt25wkCCWddyOBd%2Bu1ad9dV9nkZBPdWRT%2FGMr5%2B53lmAOqPKqvcymZ%2BeA0wFlbIpSyOkhrHisNbKZO1uadmEPHmVP91b9a8YKUMJvV2cIGOqUBOhXzwJDiGrIiz4SWcPVQ3dizCgD37bnjZjuRlxXXGXE38mrnXJfZEr4y%2FF7KqXn5T2EnL2HDOxUw%2ForlYjj%2FqLYiQlkqqdnl6rdvyrXBIeRV5rpjlzA0eA2XAK8e22Thrp7ydKJZHd99fLS%2FzUKgLI6xUHwDkL9y1RpDB4H5jSR%2BUFBhIehHtIBYq2HNl1HJZ3MupppPfAobZnKmQ9CcD%2F1uEsIV&X-Amz-Signature=f789a4be06db9ed27e9a57676a784abaa968fbc472bb3a4ecd6a8bc4cd5805d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSDX67D%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuthvxV4mMegxINXyaTzlL3Kr%2FO0NnBib8zbKkjXMLwAiEAigs9h4pl3CrtMUI4PYpEfGbnT8K5kVTDvLT3axfobQYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy4LJ2o6SUbRWZKBSrcAy5JHvGkEfzEfVG92YCto3yyJYdyu7pCDmNPJhiTaTs2WWpZNU3m%2BUlCRwiCSYmzTtpQyE3kXl7akTj3VL1ICy6OAhj0Shf7azrQjHIUKdI6Bim%2B4eOLNozLqvplWo%2BmpE5LrWd2FfJ1qQD9QImgdyq7hZtjRCGsx8531ckok%2Fxn%2BR%2BzNhsiy1Zy9jg%2BbDOg%2F4vKEXoAQpyFdVgc01%2Fr1%2BPZrC8pvY%2FWXhtyeJD%2Ba88rfEipeRvqMVQKHuukkGvzDnAKdFa885nbE%2Fe1PxGQ5AJsvQkLcKI9y4iWcNQin0OQ%2BEuqOo79Z6UKh3i7TocrrVPxEUiWMg03Umqzh8IRSuag1OnG64%2Brmk2Z60WD0Ro%2F%2FXngfbiDAW09b3PDHt%2Bmr9sNBkVnVD2afUBI0aRHtOPWgURLUsfZQSvM%2BR%2FByquCV0Mm2HwFS4zunfKhiTJqMEcDgzCG7fRrstN%2FeF8d%2BWHeO6XLTVELITVIJ3HBKjm%2Bn7%2BJli9%2BuiY99nw%2Ffq3uOPdt9g4fwhY1ZhGQYTBtukQAmlzt25wkCCWddyOBd%2Bu1ad9dV9nkZBPdWRT%2FGMr5%2B53lmAOqPKqvcymZ%2BeA0wFlbIpSyOkhrHisNbKZO1uadmEPHmVP91b9a8YKUMJvV2cIGOqUBOhXzwJDiGrIiz4SWcPVQ3dizCgD37bnjZjuRlxXXGXE38mrnXJfZEr4y%2FF7KqXn5T2EnL2HDOxUw%2ForlYjj%2FqLYiQlkqqdnl6rdvyrXBIeRV5rpjlzA0eA2XAK8e22Thrp7ydKJZHd99fLS%2FzUKgLI6xUHwDkL9y1RpDB4H5jSR%2BUFBhIehHtIBYq2HNl1HJZ3MupppPfAobZnKmQ9CcD%2F1uEsIV&X-Amz-Signature=5148310868473645f4303971898caf7ab025e648cd787113e26e24060db41d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
