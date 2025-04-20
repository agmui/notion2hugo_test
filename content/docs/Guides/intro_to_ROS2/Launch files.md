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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6C37XYW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIB%2B5FbV6kbcl6Vi6zaSmPGDeS7JZ3tr5nteSSBo6L6nRAiAhFtdMG0MTYyRxcOsBWDisypmrtIU1psIc41mF5LafZCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fK6Cno3fnau6cXJKtwDFbya67RkwkoAcAAaoigJuWAYn%2FSBja0q85jEv5cJPTD%2FivwSU3CVwIom%2BwpPyOfC5CStyf4ijOYvZPs4DDilY6N6u7SEsLYVQbSvdODOmgQRIe2UXLUeDFU%2B5wfJRxFe8nHnMkXnvh%2B56838RYOUsxRfQG2vKLOOGHXYCReqi7AIW1JBn3pET6fSxyLpKEB222xfUdIwu2mWjeIXayMWmlP1RqQCM0Mycit%2FvVO8%2BWhTRm2oAZOz93y88hLDBWk5OYrNhGcw16kuVAp8CwadnUmtbAS8ncL7bmcqVe9zbEdqDGWNJ0Kif%2BIH21wH%2Bug%2FX0i4ekluN8LvSi%2BEwq2wvTeuyxi%2BRBAtHAhTx8VLqCb1OBo1pfmq8kg%2BU%2BLhIE9J%2Fo2BObEwAIKlcxFH9RTb%2F2wyZFien3cECurVVGD4XL9QVAeCA3GibtWOrtcGQsRWMuPoHS5BI8ayFAgxeJ1K1vJQAHlan%2Fw0l4hwnCIZAgIClqXt2doHJMqAjoljt0zJ74mOmLbqJ5a1wstTG8Odh7NIbdZ6eENtDTcsdUmEhrPhVnbw4gyGae4eOv8l1lSWm1LiGTJCWnes2Xi%2B4vZcRHezzCP84i7I8YhbKKYY99H2PulWmFDdE07TEUMwsIKRwAY6pgGdmXp7ZVZjlsBLn7oXn6Wb%2FqIre%2BZ2AY6iCp1FBzcuJKOR%2BUlxY%2FrM4YtQKS70HQL53Ae%2BzX7BV1EuFnQFoMcCVnStKRkRV8iqbY4ETx%2Bl3pec%2B%2FHEKyM3jcMuHnZzajY5i0aCFTnYM9YLD%2BgKeKHjaOpX7pxSjci4Tzla7mel8pwu8rOAzfyMKrto7CNoX8Dge72PhygHXCtsnMmw8PY3CpPM4k%2F5&X-Amz-Signature=27679be0030fa1c5d9f823660ae95cd317945df374d6686a50cbeeed4c1a9120&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6C37XYW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIB%2B5FbV6kbcl6Vi6zaSmPGDeS7JZ3tr5nteSSBo6L6nRAiAhFtdMG0MTYyRxcOsBWDisypmrtIU1psIc41mF5LafZCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fK6Cno3fnau6cXJKtwDFbya67RkwkoAcAAaoigJuWAYn%2FSBja0q85jEv5cJPTD%2FivwSU3CVwIom%2BwpPyOfC5CStyf4ijOYvZPs4DDilY6N6u7SEsLYVQbSvdODOmgQRIe2UXLUeDFU%2B5wfJRxFe8nHnMkXnvh%2B56838RYOUsxRfQG2vKLOOGHXYCReqi7AIW1JBn3pET6fSxyLpKEB222xfUdIwu2mWjeIXayMWmlP1RqQCM0Mycit%2FvVO8%2BWhTRm2oAZOz93y88hLDBWk5OYrNhGcw16kuVAp8CwadnUmtbAS8ncL7bmcqVe9zbEdqDGWNJ0Kif%2BIH21wH%2Bug%2FX0i4ekluN8LvSi%2BEwq2wvTeuyxi%2BRBAtHAhTx8VLqCb1OBo1pfmq8kg%2BU%2BLhIE9J%2Fo2BObEwAIKlcxFH9RTb%2F2wyZFien3cECurVVGD4XL9QVAeCA3GibtWOrtcGQsRWMuPoHS5BI8ayFAgxeJ1K1vJQAHlan%2Fw0l4hwnCIZAgIClqXt2doHJMqAjoljt0zJ74mOmLbqJ5a1wstTG8Odh7NIbdZ6eENtDTcsdUmEhrPhVnbw4gyGae4eOv8l1lSWm1LiGTJCWnes2Xi%2B4vZcRHezzCP84i7I8YhbKKYY99H2PulWmFDdE07TEUMwsIKRwAY6pgGdmXp7ZVZjlsBLn7oXn6Wb%2FqIre%2BZ2AY6iCp1FBzcuJKOR%2BUlxY%2FrM4YtQKS70HQL53Ae%2BzX7BV1EuFnQFoMcCVnStKRkRV8iqbY4ETx%2Bl3pec%2B%2FHEKyM3jcMuHnZzajY5i0aCFTnYM9YLD%2BgKeKHjaOpX7pxSjci4Tzla7mel8pwu8rOAzfyMKrto7CNoX8Dge72PhygHXCtsnMmw8PY3CpPM4k%2F5&X-Amz-Signature=01a9c9049a212ca6ddc3df7286a1b8eaa5cee268c2ce6bef3d72f55710b13f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6C37XYW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIB%2B5FbV6kbcl6Vi6zaSmPGDeS7JZ3tr5nteSSBo6L6nRAiAhFtdMG0MTYyRxcOsBWDisypmrtIU1psIc41mF5LafZCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9fK6Cno3fnau6cXJKtwDFbya67RkwkoAcAAaoigJuWAYn%2FSBja0q85jEv5cJPTD%2FivwSU3CVwIom%2BwpPyOfC5CStyf4ijOYvZPs4DDilY6N6u7SEsLYVQbSvdODOmgQRIe2UXLUeDFU%2B5wfJRxFe8nHnMkXnvh%2B56838RYOUsxRfQG2vKLOOGHXYCReqi7AIW1JBn3pET6fSxyLpKEB222xfUdIwu2mWjeIXayMWmlP1RqQCM0Mycit%2FvVO8%2BWhTRm2oAZOz93y88hLDBWk5OYrNhGcw16kuVAp8CwadnUmtbAS8ncL7bmcqVe9zbEdqDGWNJ0Kif%2BIH21wH%2Bug%2FX0i4ekluN8LvSi%2BEwq2wvTeuyxi%2BRBAtHAhTx8VLqCb1OBo1pfmq8kg%2BU%2BLhIE9J%2Fo2BObEwAIKlcxFH9RTb%2F2wyZFien3cECurVVGD4XL9QVAeCA3GibtWOrtcGQsRWMuPoHS5BI8ayFAgxeJ1K1vJQAHlan%2Fw0l4hwnCIZAgIClqXt2doHJMqAjoljt0zJ74mOmLbqJ5a1wstTG8Odh7NIbdZ6eENtDTcsdUmEhrPhVnbw4gyGae4eOv8l1lSWm1LiGTJCWnes2Xi%2B4vZcRHezzCP84i7I8YhbKKYY99H2PulWmFDdE07TEUMwsIKRwAY6pgGdmXp7ZVZjlsBLn7oXn6Wb%2FqIre%2BZ2AY6iCp1FBzcuJKOR%2BUlxY%2FrM4YtQKS70HQL53Ae%2BzX7BV1EuFnQFoMcCVnStKRkRV8iqbY4ETx%2Bl3pec%2B%2FHEKyM3jcMuHnZzajY5i0aCFTnYM9YLD%2BgKeKHjaOpX7pxSjci4Tzla7mel8pwu8rOAzfyMKrto7CNoX8Dge72PhygHXCtsnMmw8PY3CpPM4k%2F5&X-Amz-Signature=00820e83c9ed402c791947ca18fcf780efab5017009848b0adcec7fa51f65c47&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
