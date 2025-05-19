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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRYB2I5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbh0HIyYsVduHtPXGxgMbYUIcQaaZL%2BUEf6pj0WlQqIwIhANAZybxd7iWo8xpbYrSZD5mLa%2FyY%2BH%2FQ9eS%2Fx8knqeWYKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ9viipaYlTeNyY88q3AMwnJ6EEELbByNiR01mhYJ4e95ZzOEOkLRncVIMujYwZ3m%2Bn7ZH3bhbJcXs0ZGmENjBtW0Aq2ciLlDd7DZHOE%2FPrkz5574cplqsXYXJ1VHr4T0OEV6V5l08cE2mr6Vcg%2FTax1OQLO384VgI6NJ5dF6cEdVS13cdqlXoGIEV4K98eN%2FFgPjLN%2BgU6laLkCAiawK17ecJgwvBNQ9WVqZKEKXIM3FpFLaqbebYQQb87gf9BscEFUEUBOCSsC7Dit0kvpnsizDbIw%2B0orMBbmjRDcCj9xpufbw6J7Urq4KEUEJX9pBSPRcT4f0kqExz8%2FG7SRBLp7jJQsyOd2W2Lir5faOE9%2FURPqZ8GlkmeebolJx0cQsRNL1vXj4dJHILPYyq9rBsJIbhrpprdtWeXs143ydUMXMUf1HYsChGduS%2B9yCx42drnHqTl9lv%2FVamAkLxH6svyer4%2FqavaH9UhBLHEF3%2Fo1SQe0QSbPJwEoECub32B5ILKvSDgv9oIAZ4%2FktoF1lAqgCD%2Fe810F%2B6aoBnHDnnVI24oIlDYSidxEET1pMjwd%2FcY2%2Bm%2FSPEwkCy5k4mY113Y7pbd3jMKDsbcHxl4tSwWCX2PR18Q8plWbhA%2FzYhO%2BkCSOS5dfgYMI%2FegzDN6avBBjqkAeKrA4LdZRiLfqZdCZUena%2FHuqu2s33Q%2Bm14KzhT6XHPmIQtH6ZCGClhfcuqEDT3gx3EraRAcPpO2BPNit9mf9wAAbDsGEB%2BrPzzd%2FXB3J2r%2FiH3Sr1LLVFUesSwley4fDymAYkX%2FUtOV9fXz7r6gckFkm7pyG2l1GRe7gjym%2FU1fnFaEUqEQg1eEqxp%2FwH8I536VfUQauMibB0AUsTpMfQDKQ1h&X-Amz-Signature=484e442ff3710aa0db9768c954d241e6554056d8bb1e13faa45280e8be7846f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRYB2I5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbh0HIyYsVduHtPXGxgMbYUIcQaaZL%2BUEf6pj0WlQqIwIhANAZybxd7iWo8xpbYrSZD5mLa%2FyY%2BH%2FQ9eS%2Fx8knqeWYKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ9viipaYlTeNyY88q3AMwnJ6EEELbByNiR01mhYJ4e95ZzOEOkLRncVIMujYwZ3m%2Bn7ZH3bhbJcXs0ZGmENjBtW0Aq2ciLlDd7DZHOE%2FPrkz5574cplqsXYXJ1VHr4T0OEV6V5l08cE2mr6Vcg%2FTax1OQLO384VgI6NJ5dF6cEdVS13cdqlXoGIEV4K98eN%2FFgPjLN%2BgU6laLkCAiawK17ecJgwvBNQ9WVqZKEKXIM3FpFLaqbebYQQb87gf9BscEFUEUBOCSsC7Dit0kvpnsizDbIw%2B0orMBbmjRDcCj9xpufbw6J7Urq4KEUEJX9pBSPRcT4f0kqExz8%2FG7SRBLp7jJQsyOd2W2Lir5faOE9%2FURPqZ8GlkmeebolJx0cQsRNL1vXj4dJHILPYyq9rBsJIbhrpprdtWeXs143ydUMXMUf1HYsChGduS%2B9yCx42drnHqTl9lv%2FVamAkLxH6svyer4%2FqavaH9UhBLHEF3%2Fo1SQe0QSbPJwEoECub32B5ILKvSDgv9oIAZ4%2FktoF1lAqgCD%2Fe810F%2B6aoBnHDnnVI24oIlDYSidxEET1pMjwd%2FcY2%2Bm%2FSPEwkCy5k4mY113Y7pbd3jMKDsbcHxl4tSwWCX2PR18Q8plWbhA%2FzYhO%2BkCSOS5dfgYMI%2FegzDN6avBBjqkAeKrA4LdZRiLfqZdCZUena%2FHuqu2s33Q%2Bm14KzhT6XHPmIQtH6ZCGClhfcuqEDT3gx3EraRAcPpO2BPNit9mf9wAAbDsGEB%2BrPzzd%2FXB3J2r%2FiH3Sr1LLVFUesSwley4fDymAYkX%2FUtOV9fXz7r6gckFkm7pyG2l1GRe7gjym%2FU1fnFaEUqEQg1eEqxp%2FwH8I536VfUQauMibB0AUsTpMfQDKQ1h&X-Amz-Signature=a91d35bb5c147bee6484d16bd39da8f62184b42d15e2132147b9948b8834a726&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRYB2I5%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbh0HIyYsVduHtPXGxgMbYUIcQaaZL%2BUEf6pj0WlQqIwIhANAZybxd7iWo8xpbYrSZD5mLa%2FyY%2BH%2FQ9eS%2Fx8knqeWYKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ9viipaYlTeNyY88q3AMwnJ6EEELbByNiR01mhYJ4e95ZzOEOkLRncVIMujYwZ3m%2Bn7ZH3bhbJcXs0ZGmENjBtW0Aq2ciLlDd7DZHOE%2FPrkz5574cplqsXYXJ1VHr4T0OEV6V5l08cE2mr6Vcg%2FTax1OQLO384VgI6NJ5dF6cEdVS13cdqlXoGIEV4K98eN%2FFgPjLN%2BgU6laLkCAiawK17ecJgwvBNQ9WVqZKEKXIM3FpFLaqbebYQQb87gf9BscEFUEUBOCSsC7Dit0kvpnsizDbIw%2B0orMBbmjRDcCj9xpufbw6J7Urq4KEUEJX9pBSPRcT4f0kqExz8%2FG7SRBLp7jJQsyOd2W2Lir5faOE9%2FURPqZ8GlkmeebolJx0cQsRNL1vXj4dJHILPYyq9rBsJIbhrpprdtWeXs143ydUMXMUf1HYsChGduS%2B9yCx42drnHqTl9lv%2FVamAkLxH6svyer4%2FqavaH9UhBLHEF3%2Fo1SQe0QSbPJwEoECub32B5ILKvSDgv9oIAZ4%2FktoF1lAqgCD%2Fe810F%2B6aoBnHDnnVI24oIlDYSidxEET1pMjwd%2FcY2%2Bm%2FSPEwkCy5k4mY113Y7pbd3jMKDsbcHxl4tSwWCX2PR18Q8plWbhA%2FzYhO%2BkCSOS5dfgYMI%2FegzDN6avBBjqkAeKrA4LdZRiLfqZdCZUena%2FHuqu2s33Q%2Bm14KzhT6XHPmIQtH6ZCGClhfcuqEDT3gx3EraRAcPpO2BPNit9mf9wAAbDsGEB%2BrPzzd%2FXB3J2r%2FiH3Sr1LLVFUesSwley4fDymAYkX%2FUtOV9fXz7r6gckFkm7pyG2l1GRe7gjym%2FU1fnFaEUqEQg1eEqxp%2FwH8I536VfUQauMibB0AUsTpMfQDKQ1h&X-Amz-Signature=e8a4a88beadfb22724133029ce692229c5bb4e9f64fc23b076cf1d5a492ac2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
