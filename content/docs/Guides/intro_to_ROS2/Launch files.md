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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIPYF2I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCl2TVoNqoru1znJJaEKYJvqtcLGaWBcDiQXGEkkcW9aAIhAJgVyJ4c4hh8Kw6JxtiGG0hvvmMeoF8R2gAyw2jq9U3cKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJCeKMmazitea1G%2BYq3AO5eW%2F067gujOssCKy5jEAyVNDHf3cxwgXgacQL2Fygjlj%2Fs0S5t4qzTyMYzyesr6dBbwpEZe55xnrhcH0TeFxqcr%2FhX%2Fiq7g1g5kSUCGBKJDGja4KAYPnjtKhffRjLqxyl2sxbOJ%2BzwooDrABVCyVHdyWf4xgseyODy9gtkrpdgz0p6gOyFlvRGzVf87effmz%2B3%2BIRBlH%2BwiIrwZ3LNYFselq2qGZLx%2B2A%2Fcnn2VghhVSuo3hS4kps5qgti%2F2THDmF8JvsgBnhv2V6fuTurrrVAKkRHnEULs9tDZVnKOUP3llF3NMNCQIyNQ6WJw9ZuAFGe2AdxgXU0FA%2FeGLeH%2FdiAKKH%2Bky3zvSpvkog1BwN18arbVRmriTMU6uvPB6RN5PLCzUqB4qj%2BasDvCpbDpjE2Dw7Chnjnn031EU52QuLqaA2NZIWm5aeW83kT7Woru4f24uLWVPYxPPZDO9I0hRMtSqj%2Bju0CgtjuKtUtDWMmCMjELho5NK2O4VfNo3rbFhIrWFEFe4T7CH%2F5BBsL%2BXb12RZDrkLrGolR7ammntVISUxdm51W0HAoT7DvwyfiuucGTTz3AeknOYkg13UpBFJWxuuuqryasRKsgBtx6URC%2F29IXwj11jWWuhIITDu2YvBBjqkAZnGPwZmCRqnYSBAdC0bczIvojLg6pxZAQsJ2AUUira07%2Bn8%2FN5DTdmJAVHWi%2FPgowHpT0fbejDxwbpP3Q%2FEN%2FVFljoVb%2BG%2BYhBpTmidQFw6j0Iqx%2Bezk29qCvhjFKHtzKOk2rWkDgjUabZ%2FR3wc7lQnZrFMn9mcl9zbDxFf0aiF9kNrnZxQvZgSgCkWNl95%2FybCCS4hzeVcCg4fhMryrzTjcwaU&X-Amz-Signature=4f575a2db124254268ec4d222efdad439a987324c6b461d50e853ab2f9a98691&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIPYF2I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCl2TVoNqoru1znJJaEKYJvqtcLGaWBcDiQXGEkkcW9aAIhAJgVyJ4c4hh8Kw6JxtiGG0hvvmMeoF8R2gAyw2jq9U3cKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJCeKMmazitea1G%2BYq3AO5eW%2F067gujOssCKy5jEAyVNDHf3cxwgXgacQL2Fygjlj%2Fs0S5t4qzTyMYzyesr6dBbwpEZe55xnrhcH0TeFxqcr%2FhX%2Fiq7g1g5kSUCGBKJDGja4KAYPnjtKhffRjLqxyl2sxbOJ%2BzwooDrABVCyVHdyWf4xgseyODy9gtkrpdgz0p6gOyFlvRGzVf87effmz%2B3%2BIRBlH%2BwiIrwZ3LNYFselq2qGZLx%2B2A%2Fcnn2VghhVSuo3hS4kps5qgti%2F2THDmF8JvsgBnhv2V6fuTurrrVAKkRHnEULs9tDZVnKOUP3llF3NMNCQIyNQ6WJw9ZuAFGe2AdxgXU0FA%2FeGLeH%2FdiAKKH%2Bky3zvSpvkog1BwN18arbVRmriTMU6uvPB6RN5PLCzUqB4qj%2BasDvCpbDpjE2Dw7Chnjnn031EU52QuLqaA2NZIWm5aeW83kT7Woru4f24uLWVPYxPPZDO9I0hRMtSqj%2Bju0CgtjuKtUtDWMmCMjELho5NK2O4VfNo3rbFhIrWFEFe4T7CH%2F5BBsL%2BXb12RZDrkLrGolR7ammntVISUxdm51W0HAoT7DvwyfiuucGTTz3AeknOYkg13UpBFJWxuuuqryasRKsgBtx6URC%2F29IXwj11jWWuhIITDu2YvBBjqkAZnGPwZmCRqnYSBAdC0bczIvojLg6pxZAQsJ2AUUira07%2Bn8%2FN5DTdmJAVHWi%2FPgowHpT0fbejDxwbpP3Q%2FEN%2FVFljoVb%2BG%2BYhBpTmidQFw6j0Iqx%2Bezk29qCvhjFKHtzKOk2rWkDgjUabZ%2FR3wc7lQnZrFMn9mcl9zbDxFf0aiF9kNrnZxQvZgSgCkWNl95%2FybCCS4hzeVcCg4fhMryrzTjcwaU&X-Amz-Signature=4c7a8ced6132fc8abda5b55f6ec33409035d98dcc7a59e60041ccd5e0d65a74a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIPYF2I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCl2TVoNqoru1znJJaEKYJvqtcLGaWBcDiQXGEkkcW9aAIhAJgVyJ4c4hh8Kw6JxtiGG0hvvmMeoF8R2gAyw2jq9U3cKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJCeKMmazitea1G%2BYq3AO5eW%2F067gujOssCKy5jEAyVNDHf3cxwgXgacQL2Fygjlj%2Fs0S5t4qzTyMYzyesr6dBbwpEZe55xnrhcH0TeFxqcr%2FhX%2Fiq7g1g5kSUCGBKJDGja4KAYPnjtKhffRjLqxyl2sxbOJ%2BzwooDrABVCyVHdyWf4xgseyODy9gtkrpdgz0p6gOyFlvRGzVf87effmz%2B3%2BIRBlH%2BwiIrwZ3LNYFselq2qGZLx%2B2A%2Fcnn2VghhVSuo3hS4kps5qgti%2F2THDmF8JvsgBnhv2V6fuTurrrVAKkRHnEULs9tDZVnKOUP3llF3NMNCQIyNQ6WJw9ZuAFGe2AdxgXU0FA%2FeGLeH%2FdiAKKH%2Bky3zvSpvkog1BwN18arbVRmriTMU6uvPB6RN5PLCzUqB4qj%2BasDvCpbDpjE2Dw7Chnjnn031EU52QuLqaA2NZIWm5aeW83kT7Woru4f24uLWVPYxPPZDO9I0hRMtSqj%2Bju0CgtjuKtUtDWMmCMjELho5NK2O4VfNo3rbFhIrWFEFe4T7CH%2F5BBsL%2BXb12RZDrkLrGolR7ammntVISUxdm51W0HAoT7DvwyfiuucGTTz3AeknOYkg13UpBFJWxuuuqryasRKsgBtx6URC%2F29IXwj11jWWuhIITDu2YvBBjqkAZnGPwZmCRqnYSBAdC0bczIvojLg6pxZAQsJ2AUUira07%2Bn8%2FN5DTdmJAVHWi%2FPgowHpT0fbejDxwbpP3Q%2FEN%2FVFljoVb%2BG%2BYhBpTmidQFw6j0Iqx%2Bezk29qCvhjFKHtzKOk2rWkDgjUabZ%2FR3wc7lQnZrFMn9mcl9zbDxFf0aiF9kNrnZxQvZgSgCkWNl95%2FybCCS4hzeVcCg4fhMryrzTjcwaU&X-Amz-Signature=287138e4550a58d0c621590d909400710e8a0b246e2e75f49d87e1f331c1330b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
