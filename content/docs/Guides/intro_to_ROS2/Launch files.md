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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WT4CRFG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCH2wGnHsN40ykdUHSiMgIbXiRjJsKAG9A9jMjcXYqqJACIQDCOOO0d2IVTrTLSUpAiJ%2BsXyjYEtr7hkABqnN5wkilMSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMON6ENbgGw5TSH3wMKtwDhtprDAQH4V8jUthKOJPZ38t4MrltGc%2FMrkgNhG6zksx3%2FTa6L8W9EZp1R9dYOATjEiCFyGjRaX5Yf8EQyGCSdQoMJC7ZwwiT625KjYqOFwwt2zGdztipNCnUnjp%2BpY6VIFh72OTqoelnxyqdcNPPC%2BqjbeEOkFcIG6jGSfZ7K9VcyGpVbRRdh9dP%2BvcvxNhcgto6mHxnC%2F%2BKLSqkKRpXOVXOB1EYirwtwcdbrq0Mm3EXGCtmO2Q%2BszY1Vr1yGmlWs1vK9vJ0zxJbb9qPwqRSeVg2LkjfE%2F1KUQvQHf21h43xZRxLA4pUXs7OLLo55v4j5L%2BM2l%2BjZXxlH1Lf5cDcHrfnd38ksFSVWqMB6eUOoT0I%2B0VSM5cCJ%2BJoMuEJSWx0Sb%2FMrktQKweuKbOSWqZswCHGZqTIW1EdfNv%2FppBl2rMmMvAeibXoYcacRjFc3Rg1BUbjl%2F4pU5y3%2BcxGHR3jCCnb1P6g4sQQBPuX00a6bvXs6L8VN%2FdP7ux635Lca%2BSJCOpTSBaoqSkRni7OIMjJ5iaG4fKmosxCcoCukwQR1KWZh5J3AykSGWXjYMXHjGL4CZw6IDwF154mWhyZhpBV1WFWss9iPggUHnDgzQKbr6BmMFpEkmetzvzFEOAwmLLTwwY6pgGvJoRqw%2FW5cw1MHrPlyoItm7bWaJm%2B%2BbGBp%2BeAJnHcXIRySqCTc%2BYfi5d%2BCvvyG2C4OBKFqPuwkt6TWgZdkQV1Tc%2BW6wyANVrUpCEiVpMUWkTi6AHfrsOi7DvoByqi6dZ2Bs74NBfUVBkZl3yhKMlLxmmbCiNfZYb0Tacl6svC6%2BYLgJEoKUkc79LFnF2eUD0PW4v761zeMZnwmcwjrcasuKyYW7mj&X-Amz-Signature=b21eebe872f08802a7a88747c68b4fa959599cfb6cb3d6221c183866404b56b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WT4CRFG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCH2wGnHsN40ykdUHSiMgIbXiRjJsKAG9A9jMjcXYqqJACIQDCOOO0d2IVTrTLSUpAiJ%2BsXyjYEtr7hkABqnN5wkilMSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMON6ENbgGw5TSH3wMKtwDhtprDAQH4V8jUthKOJPZ38t4MrltGc%2FMrkgNhG6zksx3%2FTa6L8W9EZp1R9dYOATjEiCFyGjRaX5Yf8EQyGCSdQoMJC7ZwwiT625KjYqOFwwt2zGdztipNCnUnjp%2BpY6VIFh72OTqoelnxyqdcNPPC%2BqjbeEOkFcIG6jGSfZ7K9VcyGpVbRRdh9dP%2BvcvxNhcgto6mHxnC%2F%2BKLSqkKRpXOVXOB1EYirwtwcdbrq0Mm3EXGCtmO2Q%2BszY1Vr1yGmlWs1vK9vJ0zxJbb9qPwqRSeVg2LkjfE%2F1KUQvQHf21h43xZRxLA4pUXs7OLLo55v4j5L%2BM2l%2BjZXxlH1Lf5cDcHrfnd38ksFSVWqMB6eUOoT0I%2B0VSM5cCJ%2BJoMuEJSWx0Sb%2FMrktQKweuKbOSWqZswCHGZqTIW1EdfNv%2FppBl2rMmMvAeibXoYcacRjFc3Rg1BUbjl%2F4pU5y3%2BcxGHR3jCCnb1P6g4sQQBPuX00a6bvXs6L8VN%2FdP7ux635Lca%2BSJCOpTSBaoqSkRni7OIMjJ5iaG4fKmosxCcoCukwQR1KWZh5J3AykSGWXjYMXHjGL4CZw6IDwF154mWhyZhpBV1WFWss9iPggUHnDgzQKbr6BmMFpEkmetzvzFEOAwmLLTwwY6pgGvJoRqw%2FW5cw1MHrPlyoItm7bWaJm%2B%2BbGBp%2BeAJnHcXIRySqCTc%2BYfi5d%2BCvvyG2C4OBKFqPuwkt6TWgZdkQV1Tc%2BW6wyANVrUpCEiVpMUWkTi6AHfrsOi7DvoByqi6dZ2Bs74NBfUVBkZl3yhKMlLxmmbCiNfZYb0Tacl6svC6%2BYLgJEoKUkc79LFnF2eUD0PW4v761zeMZnwmcwjrcasuKyYW7mj&X-Amz-Signature=83dedc4c0887aed0b2eeb8c2a0ba0614fe40586f1c90bc60894b70a789da6f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WT4CRFG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCH2wGnHsN40ykdUHSiMgIbXiRjJsKAG9A9jMjcXYqqJACIQDCOOO0d2IVTrTLSUpAiJ%2BsXyjYEtr7hkABqnN5wkilMSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMON6ENbgGw5TSH3wMKtwDhtprDAQH4V8jUthKOJPZ38t4MrltGc%2FMrkgNhG6zksx3%2FTa6L8W9EZp1R9dYOATjEiCFyGjRaX5Yf8EQyGCSdQoMJC7ZwwiT625KjYqOFwwt2zGdztipNCnUnjp%2BpY6VIFh72OTqoelnxyqdcNPPC%2BqjbeEOkFcIG6jGSfZ7K9VcyGpVbRRdh9dP%2BvcvxNhcgto6mHxnC%2F%2BKLSqkKRpXOVXOB1EYirwtwcdbrq0Mm3EXGCtmO2Q%2BszY1Vr1yGmlWs1vK9vJ0zxJbb9qPwqRSeVg2LkjfE%2F1KUQvQHf21h43xZRxLA4pUXs7OLLo55v4j5L%2BM2l%2BjZXxlH1Lf5cDcHrfnd38ksFSVWqMB6eUOoT0I%2B0VSM5cCJ%2BJoMuEJSWx0Sb%2FMrktQKweuKbOSWqZswCHGZqTIW1EdfNv%2FppBl2rMmMvAeibXoYcacRjFc3Rg1BUbjl%2F4pU5y3%2BcxGHR3jCCnb1P6g4sQQBPuX00a6bvXs6L8VN%2FdP7ux635Lca%2BSJCOpTSBaoqSkRni7OIMjJ5iaG4fKmosxCcoCukwQR1KWZh5J3AykSGWXjYMXHjGL4CZw6IDwF154mWhyZhpBV1WFWss9iPggUHnDgzQKbr6BmMFpEkmetzvzFEOAwmLLTwwY6pgGvJoRqw%2FW5cw1MHrPlyoItm7bWaJm%2B%2BbGBp%2BeAJnHcXIRySqCTc%2BYfi5d%2BCvvyG2C4OBKFqPuwkt6TWgZdkQV1Tc%2BW6wyANVrUpCEiVpMUWkTi6AHfrsOi7DvoByqi6dZ2Bs74NBfUVBkZl3yhKMlLxmmbCiNfZYb0Tacl6svC6%2BYLgJEoKUkc79LFnF2eUD0PW4v761zeMZnwmcwjrcasuKyYW7mj&X-Amz-Signature=ea4d1d9ac2a87877c7fce703310019d3f6db881978c926616a1139b86bf497e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
