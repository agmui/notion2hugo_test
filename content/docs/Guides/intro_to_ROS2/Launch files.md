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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=60f3b91d5adbb460e1b3079ea8367ef924c2b63b55911fd40bbc3e52a5174e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=842599da193ec71d74f97b3fd577568422a9bb10e21ca0290f2ef3df4e1ecf0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VRI2WE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoBAA7yWKaU0knZRXpHu2l3Q4%2Fz7LZSG%2BlJzNZsSpiwIhAPEJQm6hVsgwVuRyy08orWrULfB0sOzrhy9SDwJ9sN1mKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNDNnB7AxGa1Gx5Aq3AO69is3%2FIJ%2BKe2qf9LUdcUp6XZUYgfWBQp2xVYdKVIErGrXibuHybEK%2F7xP6yxvkKbE7DtWS7RvJQIeTkLscRTFxlWU6lLi7bNDjLp7UIonUjd7dwZw1cFimRszcswo9aqo5HpX3W3UT0TwR5oJZKNND959G6ODMwFYZkyKyku7G3IjWjAYjYAxlhO1gfmX2urzjqLWHZXiLq6JF6UYqQcPsyG%2BUuyS4RCmJ%2BK9vh%2FGzzt0WODALiLnAmqOV3OPcEuwMeHltJFOP9dlwyx%2FYPGT3BCajMAZSZieJ%2B56bUA%2B1lekIXBug9GWRoqUxNR1jKqyPYF6bNP8gjyQykB4GcqyOkAf1d4YIId8cbOpcN%2BX78bWmFlytS3whSmet592uNgl%2BoOZFJk6jofKS4xgy%2FRU4THl%2BOS%2FgLahS3CtWhE2dHt4b0r4GyloyQR3Ag6RQvU6yDgnbIPSCkY9z64nSfLyT%2BGvxXcNAtWmmyBiwkJrzIl74UIRxzQ54ofkyptF9yG4NjeyAehlqRJzY8V%2FWzbTJOWaK%2BIGf0roexsuiUCYvM6SoOevvC9inxC8sXDLo16GXoPFPsf7XCe9wUATvMWsm6YqlblOfScL18gUQdyK4Pcoxj2%2FWJSKqbx6xjCWuO7DBjqkARCcxSmVMuk4gUpVkXjOfcS20Dx4DcmUME9WybwRkzkZpQv43mneEM69LklwRwEBIAdn3CUJC9A7zw1qey5EAOKPbt8wT8ilVhT57Ef%2FZsXNpodWNePnyNyn7Es1qbpbuy%2FdIHewqENQv3LstxjE%2BoDcPc2RXgBKA%2FVW8evuki8bdFflSPgnNE%2FHZ1G3nQpwUEXdsW0BwRdqQvd%2B6ge%2F3Wk0333i&X-Amz-Signature=ba78ca1a3c6770313122b54bbfde7994be84e8305f6c945f44cb136c74ea5eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
