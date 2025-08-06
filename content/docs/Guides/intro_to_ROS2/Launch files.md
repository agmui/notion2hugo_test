---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJEZ7RU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDXsnNWmQXDir1O0KOUNoGT%2Bv8j7b%2BZRNXX%2Bh5dchHqpQIhAKTrH0DNF8MoDuqND3GpJ0gyS2le1UV6cJ9HkRuG7S3nKv8DCHwQABoMNjM3NDIzMTgzODA1Igxd%2BGkb4zdfIUeO%2FQYq3AMJp5AP3YuFHmyr6JIT7QdC%2FPNEbpL2wK0keccfHB5ecruKMnxZTMHgNrTfMGHopuh7LJK1JyTC1oM3OUSXuNebeWUUXM7y42KoVgB%2BQYWlxdqm0ZA0JArfDdhWUn1VK9Al0LonIfIoN%2Bf%2Bx3%2BpnxCe0eQCcVBWzx%2BtQ6zQHyQMsnT8Lam96KZ7cXfDpKxF9gNTyjSCtE10OYbfp8KA8go1jzoSWFPBJxtma4aZUbjiZXymjDkFsPlFDNyomN03ZiKOqZ5G%2FBpZiKeBpzYO7wmnQRpGASNtL2BfKnbFaKLqP6h37v0r1BDChuYHmA%2Fc3sTXnhUSNqIGUCHHJXj935W84C60fyAguK9GY6XeGNJGOZX7cco3JeRX30iuNHOF5YPwRplYGtmt%2BbalPbjz856Pc%2FlBY%2FVqAopuWta%2BcJc%2Bt3RFcLNRRJe1U42rQdE6PPOA%2F10wIn9VJ7H0O8QEi5T73aZfrd%2B%2B3YrCV2Lli%2Fsg8YoYPbCmigLvIgS2pHDujjqO%2Fzo7SJIPV2a0SrxPz9N%2FsVawh52Q8UBaQ%2B7qScWcJZ8yOmjvMqe4K7gdC7PyaJkWwICiI01D6FB1l2KQdiyJhDJluQ5Z8uGeRXCxmgKRDHJJvRNOA3dVomFniTDZxc7EBjqkAW%2BrofwOeNAC%2B1kwi5Fc7ucErWNzVGgd2xn5nD1PwbX9jbR%2FO%2FsNfKl9zrxmUaLYWetBqn9w4L6EfXVPRY3%2BoBcVxu5%2Fn2fm%2F4yHym13LeGl%2BcdIddB7%2BUiqxvDzlh0ri9AHYfCW45w2njaK2ZImhQQHxYS2hoq5Exyf9f7yWcDFWGJswkTLw8ayaKg6rOvIkY3MrX80CcioNj5b1nx2o6TFN0SV&X-Amz-Signature=1264e5ccf87037d76671c5927a250f5598fa048e27900f07d274f60be548ae46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJEZ7RU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDXsnNWmQXDir1O0KOUNoGT%2Bv8j7b%2BZRNXX%2Bh5dchHqpQIhAKTrH0DNF8MoDuqND3GpJ0gyS2le1UV6cJ9HkRuG7S3nKv8DCHwQABoMNjM3NDIzMTgzODA1Igxd%2BGkb4zdfIUeO%2FQYq3AMJp5AP3YuFHmyr6JIT7QdC%2FPNEbpL2wK0keccfHB5ecruKMnxZTMHgNrTfMGHopuh7LJK1JyTC1oM3OUSXuNebeWUUXM7y42KoVgB%2BQYWlxdqm0ZA0JArfDdhWUn1VK9Al0LonIfIoN%2Bf%2Bx3%2BpnxCe0eQCcVBWzx%2BtQ6zQHyQMsnT8Lam96KZ7cXfDpKxF9gNTyjSCtE10OYbfp8KA8go1jzoSWFPBJxtma4aZUbjiZXymjDkFsPlFDNyomN03ZiKOqZ5G%2FBpZiKeBpzYO7wmnQRpGASNtL2BfKnbFaKLqP6h37v0r1BDChuYHmA%2Fc3sTXnhUSNqIGUCHHJXj935W84C60fyAguK9GY6XeGNJGOZX7cco3JeRX30iuNHOF5YPwRplYGtmt%2BbalPbjz856Pc%2FlBY%2FVqAopuWta%2BcJc%2Bt3RFcLNRRJe1U42rQdE6PPOA%2F10wIn9VJ7H0O8QEi5T73aZfrd%2B%2B3YrCV2Lli%2Fsg8YoYPbCmigLvIgS2pHDujjqO%2Fzo7SJIPV2a0SrxPz9N%2FsVawh52Q8UBaQ%2B7qScWcJZ8yOmjvMqe4K7gdC7PyaJkWwICiI01D6FB1l2KQdiyJhDJluQ5Z8uGeRXCxmgKRDHJJvRNOA3dVomFniTDZxc7EBjqkAW%2BrofwOeNAC%2B1kwi5Fc7ucErWNzVGgd2xn5nD1PwbX9jbR%2FO%2FsNfKl9zrxmUaLYWetBqn9w4L6EfXVPRY3%2BoBcVxu5%2Fn2fm%2F4yHym13LeGl%2BcdIddB7%2BUiqxvDzlh0ri9AHYfCW45w2njaK2ZImhQQHxYS2hoq5Exyf9f7yWcDFWGJswkTLw8ayaKg6rOvIkY3MrX80CcioNj5b1nx2o6TFN0SV&X-Amz-Signature=c6750a0e6314f8bf96d97aed7abb92842afe33ef6b1e59aab42bfc888b85410a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJEZ7RU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDXsnNWmQXDir1O0KOUNoGT%2Bv8j7b%2BZRNXX%2Bh5dchHqpQIhAKTrH0DNF8MoDuqND3GpJ0gyS2le1UV6cJ9HkRuG7S3nKv8DCHwQABoMNjM3NDIzMTgzODA1Igxd%2BGkb4zdfIUeO%2FQYq3AMJp5AP3YuFHmyr6JIT7QdC%2FPNEbpL2wK0keccfHB5ecruKMnxZTMHgNrTfMGHopuh7LJK1JyTC1oM3OUSXuNebeWUUXM7y42KoVgB%2BQYWlxdqm0ZA0JArfDdhWUn1VK9Al0LonIfIoN%2Bf%2Bx3%2BpnxCe0eQCcVBWzx%2BtQ6zQHyQMsnT8Lam96KZ7cXfDpKxF9gNTyjSCtE10OYbfp8KA8go1jzoSWFPBJxtma4aZUbjiZXymjDkFsPlFDNyomN03ZiKOqZ5G%2FBpZiKeBpzYO7wmnQRpGASNtL2BfKnbFaKLqP6h37v0r1BDChuYHmA%2Fc3sTXnhUSNqIGUCHHJXj935W84C60fyAguK9GY6XeGNJGOZX7cco3JeRX30iuNHOF5YPwRplYGtmt%2BbalPbjz856Pc%2FlBY%2FVqAopuWta%2BcJc%2Bt3RFcLNRRJe1U42rQdE6PPOA%2F10wIn9VJ7H0O8QEi5T73aZfrd%2B%2B3YrCV2Lli%2Fsg8YoYPbCmigLvIgS2pHDujjqO%2Fzo7SJIPV2a0SrxPz9N%2FsVawh52Q8UBaQ%2B7qScWcJZ8yOmjvMqe4K7gdC7PyaJkWwICiI01D6FB1l2KQdiyJhDJluQ5Z8uGeRXCxmgKRDHJJvRNOA3dVomFniTDZxc7EBjqkAW%2BrofwOeNAC%2B1kwi5Fc7ucErWNzVGgd2xn5nD1PwbX9jbR%2FO%2FsNfKl9zrxmUaLYWetBqn9w4L6EfXVPRY3%2BoBcVxu5%2Fn2fm%2F4yHym13LeGl%2BcdIddB7%2BUiqxvDzlh0ri9AHYfCW45w2njaK2ZImhQQHxYS2hoq5Exyf9f7yWcDFWGJswkTLw8ayaKg6rOvIkY3MrX80CcioNj5b1nx2o6TFN0SV&X-Amz-Signature=670112d7424326388aa8d9f539d4412ae99a1dd9aa6f60bf2b21b416d3b27269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
