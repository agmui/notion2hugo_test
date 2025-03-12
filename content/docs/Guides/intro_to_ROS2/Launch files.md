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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOF3LZN7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCoW5m2nHGpDT2ACkZL4eHDbTiiKT819svzug%2FQKwk5SQIgO0jK%2FF6o2p2xkh6EkGfhjsevCxKHsP85GwGHADELa8YqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7dIUix27rcIIta8yrcA1YtFhC4XRiUBQKSeYAjcqWh2ylmfdiWqBT%2F9ART7SeI6wS0E9m%2BsphsW%2FbCWtgR8cUngEgLEM%2BoS%2Fe%2BLDAKnNT3K1hI8NxQyZmE1ErM8uqUDbtB4Mqfp8TeibRG230HxMMuB7WhrlnYRNgQwEZougnktSJKUo4KdHN2e2K8tr4aWG3MjFEtsZbhmxm%2Fk3m9Db4b9QB4aA3389Wvqr7qBoTlMc1aGr2yLLz7MCuUYnI6vONqpbsXnIW4%2FP8UFwpGba3mDc90cNIWWruBylW9gG06X56NCkLeNLFtIqwpCXj9%2F%2BXbuoO3uCixfM28ttirYUH%2B%2Bhz1Ildtqapr0s7p7iMn896wi7RjawGVRP%2FU76qd20OZYmHpKv6NzI5fXR1R55oELlFc8nCijNMTa4CW0u11adSn0iVKfwDw8RdfR74RPPoHQAa4fyCf7FXdVTYzjFmRmgtu5zt7TuU83O7XVRRLED0hUPp1J5e%2Fz%2FhpfcVTfFT5cj1FCmQ1FZar1dji4BtN2qNnJH8nvrBYO8tj6EAeVwTpV1OMK9fAfzvIUGAbtW1PeMYX0j423RjmGM1vCoSZuf%2Bax%2BsUp6GOhiEn56UH43HFN7ZvQuo8TleegLU456%2BazkdIVsiGoJLeMNz7xL4GOqUB2iIQpbUSmr4A5BLjz6QMRQUZH6SiLJsucPwmwFfX6Cby0BhKL%2FLlf%2FHt9UbXpPDZ9aPfazQFvju5EdZUe7ehrGmruPDcYZzMVrUkN5PQAaWlflrF3RkhKNOEwHuMzbe0vlzZDKz3h%2FdZFmoWG8rYCK2aqzY8S5Qj2hcjhEs5NXVZEacORANIpZUYPomMS3XYf4i%2FA9rJIySeJTOYw0LZljt8J3zf&X-Amz-Signature=4755182a57b899c1414fa298789759974ce2edebd5610c6f1a59d1ef145f9937&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOF3LZN7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCoW5m2nHGpDT2ACkZL4eHDbTiiKT819svzug%2FQKwk5SQIgO0jK%2FF6o2p2xkh6EkGfhjsevCxKHsP85GwGHADELa8YqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7dIUix27rcIIta8yrcA1YtFhC4XRiUBQKSeYAjcqWh2ylmfdiWqBT%2F9ART7SeI6wS0E9m%2BsphsW%2FbCWtgR8cUngEgLEM%2BoS%2Fe%2BLDAKnNT3K1hI8NxQyZmE1ErM8uqUDbtB4Mqfp8TeibRG230HxMMuB7WhrlnYRNgQwEZougnktSJKUo4KdHN2e2K8tr4aWG3MjFEtsZbhmxm%2Fk3m9Db4b9QB4aA3389Wvqr7qBoTlMc1aGr2yLLz7MCuUYnI6vONqpbsXnIW4%2FP8UFwpGba3mDc90cNIWWruBylW9gG06X56NCkLeNLFtIqwpCXj9%2F%2BXbuoO3uCixfM28ttirYUH%2B%2Bhz1Ildtqapr0s7p7iMn896wi7RjawGVRP%2FU76qd20OZYmHpKv6NzI5fXR1R55oELlFc8nCijNMTa4CW0u11adSn0iVKfwDw8RdfR74RPPoHQAa4fyCf7FXdVTYzjFmRmgtu5zt7TuU83O7XVRRLED0hUPp1J5e%2Fz%2FhpfcVTfFT5cj1FCmQ1FZar1dji4BtN2qNnJH8nvrBYO8tj6EAeVwTpV1OMK9fAfzvIUGAbtW1PeMYX0j423RjmGM1vCoSZuf%2Bax%2BsUp6GOhiEn56UH43HFN7ZvQuo8TleegLU456%2BazkdIVsiGoJLeMNz7xL4GOqUB2iIQpbUSmr4A5BLjz6QMRQUZH6SiLJsucPwmwFfX6Cby0BhKL%2FLlf%2FHt9UbXpPDZ9aPfazQFvju5EdZUe7ehrGmruPDcYZzMVrUkN5PQAaWlflrF3RkhKNOEwHuMzbe0vlzZDKz3h%2FdZFmoWG8rYCK2aqzY8S5Qj2hcjhEs5NXVZEacORANIpZUYPomMS3XYf4i%2FA9rJIySeJTOYw0LZljt8J3zf&X-Amz-Signature=901bb24aa863ba07025c87872dffd1515dba529dacbedc2dcb3b077034b3ef85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOF3LZN7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCoW5m2nHGpDT2ACkZL4eHDbTiiKT819svzug%2FQKwk5SQIgO0jK%2FF6o2p2xkh6EkGfhjsevCxKHsP85GwGHADELa8YqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7dIUix27rcIIta8yrcA1YtFhC4XRiUBQKSeYAjcqWh2ylmfdiWqBT%2F9ART7SeI6wS0E9m%2BsphsW%2FbCWtgR8cUngEgLEM%2BoS%2Fe%2BLDAKnNT3K1hI8NxQyZmE1ErM8uqUDbtB4Mqfp8TeibRG230HxMMuB7WhrlnYRNgQwEZougnktSJKUo4KdHN2e2K8tr4aWG3MjFEtsZbhmxm%2Fk3m9Db4b9QB4aA3389Wvqr7qBoTlMc1aGr2yLLz7MCuUYnI6vONqpbsXnIW4%2FP8UFwpGba3mDc90cNIWWruBylW9gG06X56NCkLeNLFtIqwpCXj9%2F%2BXbuoO3uCixfM28ttirYUH%2B%2Bhz1Ildtqapr0s7p7iMn896wi7RjawGVRP%2FU76qd20OZYmHpKv6NzI5fXR1R55oELlFc8nCijNMTa4CW0u11adSn0iVKfwDw8RdfR74RPPoHQAa4fyCf7FXdVTYzjFmRmgtu5zt7TuU83O7XVRRLED0hUPp1J5e%2Fz%2FhpfcVTfFT5cj1FCmQ1FZar1dji4BtN2qNnJH8nvrBYO8tj6EAeVwTpV1OMK9fAfzvIUGAbtW1PeMYX0j423RjmGM1vCoSZuf%2Bax%2BsUp6GOhiEn56UH43HFN7ZvQuo8TleegLU456%2BazkdIVsiGoJLeMNz7xL4GOqUB2iIQpbUSmr4A5BLjz6QMRQUZH6SiLJsucPwmwFfX6Cby0BhKL%2FLlf%2FHt9UbXpPDZ9aPfazQFvju5EdZUe7ehrGmruPDcYZzMVrUkN5PQAaWlflrF3RkhKNOEwHuMzbe0vlzZDKz3h%2FdZFmoWG8rYCK2aqzY8S5Qj2hcjhEs5NXVZEacORANIpZUYPomMS3XYf4i%2FA9rJIySeJTOYw0LZljt8J3zf&X-Amz-Signature=bc1a05f33ede335776375bf46c96395ada00ffb6e1888775b82b58a41dedce32&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
