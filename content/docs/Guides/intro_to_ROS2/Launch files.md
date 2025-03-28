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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QJJYSE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9WM%2FgmUhaSHRDn0430fguxgj2SgT%2BJUfhBppL5nZAHAiEA1wMdSNY%2BHkuRnFwTVBO4s9bFw%2BqeJOa%2FH%2FJttUzrQbwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEA%2BELJj0ZDiMdc60yrcA2OC9%2FYqGH48UgWsOUP3ZzuktLZLJHcXz9tgSNx%2FTLcfQOE5SyUgyyNib68%2Bn6HMI9QWRD6uB2S%2FPULu5LryQyEG2ZxFLQFUcss8aFnfofwhKlCWTg8Ag%2Fu3QzFl8%2BEFbZlEQoqQqUQFM8yyJMk%2Fn08mFeF%2BCvTTRgj0CfL1MGS45GpgJ5LrOJEN2C7T3qo8n0ERt7SBQr2dWKypwPSC4XIPLxp5y4yvzZMBROe%2Brbuyiv6%2Bx26h1n0qVefhDWyVciLaKtREiPkncQvin2jpvuU%2BlQwkqTnkIceu5LHhBC%2F6AmtE3GDWoP7%2Fnls%2BkA4XaCg%2B0uhAHVvM5pEEZKR8IvXX%2BxNOIXhGG%2FDEbH8BZ92tydENe6U%2FKHpD4UMEZhVam052XrpTmNm0%2Fj1ypbT422hEkw%2BIYrFmwpjmC69YsewXFrHYuIkkNwBMNjR7BoMBdMyj7DL6GDlPKORDUASipSyjj0wlO81VAcyAvq1dnP0GZjb9TlZZpLpj896u%2BibhEVebP1c39l08E8T07k9niiItMrz%2FD9QCEVCyYpMj20PD6Gd9lSnnQOlfhdXAeSR2PloGQZG5a9bpVOunIcJ8VyLsYyBy2dzeuYikiG3BfcO0VsmKlzsBZj8ZsEOHMPKOnL8GOqUBrIjCF4JrTeGIaKy9I638bhUUrpOZDaxfWRLWc5zyd3fj7dR7HHRWSzLtiHxFry%2BDnqEe3uniJ5mZTOvEgA%2Fla3hYaISQ%2FvE9BRpdAoRAce0AZD0C%2FhbGFBiKmdJgRY5ctLtYEdUGwIWSJZK8Eh1BRhaOXsQxEoA3kn%2BAydBdHYUiZAA93kTkKDBpFq9p0HzZkuWa0hiVBg7BCET3TlY5EYu81DZU&X-Amz-Signature=f91a76e6dbb33341756d6f4c49db01a30cda30fb5796ca342fb9422499dd9209&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QJJYSE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9WM%2FgmUhaSHRDn0430fguxgj2SgT%2BJUfhBppL5nZAHAiEA1wMdSNY%2BHkuRnFwTVBO4s9bFw%2BqeJOa%2FH%2FJttUzrQbwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEA%2BELJj0ZDiMdc60yrcA2OC9%2FYqGH48UgWsOUP3ZzuktLZLJHcXz9tgSNx%2FTLcfQOE5SyUgyyNib68%2Bn6HMI9QWRD6uB2S%2FPULu5LryQyEG2ZxFLQFUcss8aFnfofwhKlCWTg8Ag%2Fu3QzFl8%2BEFbZlEQoqQqUQFM8yyJMk%2Fn08mFeF%2BCvTTRgj0CfL1MGS45GpgJ5LrOJEN2C7T3qo8n0ERt7SBQr2dWKypwPSC4XIPLxp5y4yvzZMBROe%2Brbuyiv6%2Bx26h1n0qVefhDWyVciLaKtREiPkncQvin2jpvuU%2BlQwkqTnkIceu5LHhBC%2F6AmtE3GDWoP7%2Fnls%2BkA4XaCg%2B0uhAHVvM5pEEZKR8IvXX%2BxNOIXhGG%2FDEbH8BZ92tydENe6U%2FKHpD4UMEZhVam052XrpTmNm0%2Fj1ypbT422hEkw%2BIYrFmwpjmC69YsewXFrHYuIkkNwBMNjR7BoMBdMyj7DL6GDlPKORDUASipSyjj0wlO81VAcyAvq1dnP0GZjb9TlZZpLpj896u%2BibhEVebP1c39l08E8T07k9niiItMrz%2FD9QCEVCyYpMj20PD6Gd9lSnnQOlfhdXAeSR2PloGQZG5a9bpVOunIcJ8VyLsYyBy2dzeuYikiG3BfcO0VsmKlzsBZj8ZsEOHMPKOnL8GOqUBrIjCF4JrTeGIaKy9I638bhUUrpOZDaxfWRLWc5zyd3fj7dR7HHRWSzLtiHxFry%2BDnqEe3uniJ5mZTOvEgA%2Fla3hYaISQ%2FvE9BRpdAoRAce0AZD0C%2FhbGFBiKmdJgRY5ctLtYEdUGwIWSJZK8Eh1BRhaOXsQxEoA3kn%2BAydBdHYUiZAA93kTkKDBpFq9p0HzZkuWa0hiVBg7BCET3TlY5EYu81DZU&X-Amz-Signature=c205a851247d5969a6a9e025e4512201df6f124a50a36a992f36df302712922a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QJJYSE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9WM%2FgmUhaSHRDn0430fguxgj2SgT%2BJUfhBppL5nZAHAiEA1wMdSNY%2BHkuRnFwTVBO4s9bFw%2BqeJOa%2FH%2FJttUzrQbwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEA%2BELJj0ZDiMdc60yrcA2OC9%2FYqGH48UgWsOUP3ZzuktLZLJHcXz9tgSNx%2FTLcfQOE5SyUgyyNib68%2Bn6HMI9QWRD6uB2S%2FPULu5LryQyEG2ZxFLQFUcss8aFnfofwhKlCWTg8Ag%2Fu3QzFl8%2BEFbZlEQoqQqUQFM8yyJMk%2Fn08mFeF%2BCvTTRgj0CfL1MGS45GpgJ5LrOJEN2C7T3qo8n0ERt7SBQr2dWKypwPSC4XIPLxp5y4yvzZMBROe%2Brbuyiv6%2Bx26h1n0qVefhDWyVciLaKtREiPkncQvin2jpvuU%2BlQwkqTnkIceu5LHhBC%2F6AmtE3GDWoP7%2Fnls%2BkA4XaCg%2B0uhAHVvM5pEEZKR8IvXX%2BxNOIXhGG%2FDEbH8BZ92tydENe6U%2FKHpD4UMEZhVam052XrpTmNm0%2Fj1ypbT422hEkw%2BIYrFmwpjmC69YsewXFrHYuIkkNwBMNjR7BoMBdMyj7DL6GDlPKORDUASipSyjj0wlO81VAcyAvq1dnP0GZjb9TlZZpLpj896u%2BibhEVebP1c39l08E8T07k9niiItMrz%2FD9QCEVCyYpMj20PD6Gd9lSnnQOlfhdXAeSR2PloGQZG5a9bpVOunIcJ8VyLsYyBy2dzeuYikiG3BfcO0VsmKlzsBZj8ZsEOHMPKOnL8GOqUBrIjCF4JrTeGIaKy9I638bhUUrpOZDaxfWRLWc5zyd3fj7dR7HHRWSzLtiHxFry%2BDnqEe3uniJ5mZTOvEgA%2Fla3hYaISQ%2FvE9BRpdAoRAce0AZD0C%2FhbGFBiKmdJgRY5ctLtYEdUGwIWSJZK8Eh1BRhaOXsQxEoA3kn%2BAydBdHYUiZAA93kTkKDBpFq9p0HzZkuWa0hiVBg7BCET3TlY5EYu81DZU&X-Amz-Signature=ec4c248294a347391b06afdac8b2a0e920b0c2589bf088559fed2f705fd49729&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
