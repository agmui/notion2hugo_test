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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BALARR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD8BzPOXfBQjA1rWe5d3LhLIz1bPksfRdwzsgXwwxV8ngIhAPGMih%2Bd27Po7CJYky6SUNb1G0BeK216u8KTCEC9K2IlKv8DCD8QABoMNjM3NDIzMTgzODA1IgyjA1Zr%2Bn8aaLBfBCoq3AM2qyzveTE0DwvJXwEnFGmvUyTSJFgj42yueyNLwiYwfgud9TrmNqkzuTng72WOfFotI6Zwx%2F96%2FychjrDnvW5jZu3zKMOQx51KbMdzEqTDuA4QflKrrMZiW6XL7imFYgYdgwOC52HepdLG2UA20eKdaz7KLcCsv6XOuBT3nES%2FmG74xEdUH8x3ch0BLJHSxtc7BE%2BFBUIFWKQ4KSiZL8nmUHbO1VYv4Qlm8k5Fel3LWOeGKLbRRnliRdu%2B6ok81PiSGZlhaVz8NGTbFnKpddcQSaasEOJF0EsBI7oO46kMD7luf8yMbL2GK6ENdMUlYb%2F4wb7dvGtr4qruLkPH7SSSmBw5tjAk9YyQQ%2F8LDIfIxw4BX%2FH%2B5UXgm0%2FHtUx0FjP3W4acnrGZtLtHIhuuYkJyiRzRfe2x2WCH%2BadyT5wEhyY2AWbdWzI3%2FMnOwSvdgs%2FwyxLRGuQuxc2y05Ku00u45CDi%2FQQAWPztrkNC%2Baa5EHJaTSJuBWEEegh0xNTOCK6hMVy7YBc3OJP4%2BkoS3CE1rnpxVQrkfPVtzSYknqXtfw4l1RdDITlJbuy0NS1odbwEeqG%2BqVKIxgcBK4T9SQuKBISzEVUDvQ4YW7wNl94JtpKSeuniR1uCF8U6EDDQ1dfDBjqkARq6vnPBPp68z2H2PX8W9aqE3N6F5TaAdgGaDihjpV0eZr6Fe7wQoopd0y%2B1Ji%2F%2FLs8eh0FjIuHMtt6ZKpJ7O06ItTFlQNTj8Butd6GRmmOVH37Le%2B6vMz7xtwFhIRAane8WEY48%2FI%2FnHor8OyyshOqfOjthdJdOmc1wkSnGcq5awHzx0VCoLyDEJmQky01ryBFcQaF6enZ90ucg1mwJ4HPL4mKW&X-Amz-Signature=564e425d1c10499bf0179ae9fa8ffa60f0f610d092e318233cd08e4ae19f1bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BALARR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD8BzPOXfBQjA1rWe5d3LhLIz1bPksfRdwzsgXwwxV8ngIhAPGMih%2Bd27Po7CJYky6SUNb1G0BeK216u8KTCEC9K2IlKv8DCD8QABoMNjM3NDIzMTgzODA1IgyjA1Zr%2Bn8aaLBfBCoq3AM2qyzveTE0DwvJXwEnFGmvUyTSJFgj42yueyNLwiYwfgud9TrmNqkzuTng72WOfFotI6Zwx%2F96%2FychjrDnvW5jZu3zKMOQx51KbMdzEqTDuA4QflKrrMZiW6XL7imFYgYdgwOC52HepdLG2UA20eKdaz7KLcCsv6XOuBT3nES%2FmG74xEdUH8x3ch0BLJHSxtc7BE%2BFBUIFWKQ4KSiZL8nmUHbO1VYv4Qlm8k5Fel3LWOeGKLbRRnliRdu%2B6ok81PiSGZlhaVz8NGTbFnKpddcQSaasEOJF0EsBI7oO46kMD7luf8yMbL2GK6ENdMUlYb%2F4wb7dvGtr4qruLkPH7SSSmBw5tjAk9YyQQ%2F8LDIfIxw4BX%2FH%2B5UXgm0%2FHtUx0FjP3W4acnrGZtLtHIhuuYkJyiRzRfe2x2WCH%2BadyT5wEhyY2AWbdWzI3%2FMnOwSvdgs%2FwyxLRGuQuxc2y05Ku00u45CDi%2FQQAWPztrkNC%2Baa5EHJaTSJuBWEEegh0xNTOCK6hMVy7YBc3OJP4%2BkoS3CE1rnpxVQrkfPVtzSYknqXtfw4l1RdDITlJbuy0NS1odbwEeqG%2BqVKIxgcBK4T9SQuKBISzEVUDvQ4YW7wNl94JtpKSeuniR1uCF8U6EDDQ1dfDBjqkARq6vnPBPp68z2H2PX8W9aqE3N6F5TaAdgGaDihjpV0eZr6Fe7wQoopd0y%2B1Ji%2F%2FLs8eh0FjIuHMtt6ZKpJ7O06ItTFlQNTj8Butd6GRmmOVH37Le%2B6vMz7xtwFhIRAane8WEY48%2FI%2FnHor8OyyshOqfOjthdJdOmc1wkSnGcq5awHzx0VCoLyDEJmQky01ryBFcQaF6enZ90ucg1mwJ4HPL4mKW&X-Amz-Signature=267a96e37ab0cd06e7348c52bfded47e15ec4c59d2c63c76403f9281c373a3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BALARR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD8BzPOXfBQjA1rWe5d3LhLIz1bPksfRdwzsgXwwxV8ngIhAPGMih%2Bd27Po7CJYky6SUNb1G0BeK216u8KTCEC9K2IlKv8DCD8QABoMNjM3NDIzMTgzODA1IgyjA1Zr%2Bn8aaLBfBCoq3AM2qyzveTE0DwvJXwEnFGmvUyTSJFgj42yueyNLwiYwfgud9TrmNqkzuTng72WOfFotI6Zwx%2F96%2FychjrDnvW5jZu3zKMOQx51KbMdzEqTDuA4QflKrrMZiW6XL7imFYgYdgwOC52HepdLG2UA20eKdaz7KLcCsv6XOuBT3nES%2FmG74xEdUH8x3ch0BLJHSxtc7BE%2BFBUIFWKQ4KSiZL8nmUHbO1VYv4Qlm8k5Fel3LWOeGKLbRRnliRdu%2B6ok81PiSGZlhaVz8NGTbFnKpddcQSaasEOJF0EsBI7oO46kMD7luf8yMbL2GK6ENdMUlYb%2F4wb7dvGtr4qruLkPH7SSSmBw5tjAk9YyQQ%2F8LDIfIxw4BX%2FH%2B5UXgm0%2FHtUx0FjP3W4acnrGZtLtHIhuuYkJyiRzRfe2x2WCH%2BadyT5wEhyY2AWbdWzI3%2FMnOwSvdgs%2FwyxLRGuQuxc2y05Ku00u45CDi%2FQQAWPztrkNC%2Baa5EHJaTSJuBWEEegh0xNTOCK6hMVy7YBc3OJP4%2BkoS3CE1rnpxVQrkfPVtzSYknqXtfw4l1RdDITlJbuy0NS1odbwEeqG%2BqVKIxgcBK4T9SQuKBISzEVUDvQ4YW7wNl94JtpKSeuniR1uCF8U6EDDQ1dfDBjqkARq6vnPBPp68z2H2PX8W9aqE3N6F5TaAdgGaDihjpV0eZr6Fe7wQoopd0y%2B1Ji%2F%2FLs8eh0FjIuHMtt6ZKpJ7O06ItTFlQNTj8Butd6GRmmOVH37Le%2B6vMz7xtwFhIRAane8WEY48%2FI%2FnHor8OyyshOqfOjthdJdOmc1wkSnGcq5awHzx0VCoLyDEJmQky01ryBFcQaF6enZ90ucg1mwJ4HPL4mKW&X-Amz-Signature=f5b7ac4e644092fa4653c0d4994f9bed2edf8d4b60065e3d33ec86373d93576e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
