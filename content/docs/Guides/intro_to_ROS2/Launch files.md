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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMPCYUL%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBt7ytm96Oe4uQokGzhjBWWcq6BU4qaGIl2XpM7F5NAwAiB80mDmlJOLw0BGCJr8R13A9u0ZPXWEuWkXTHy%2Bct%2BMZiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBYhfpQgNYprPv%2BOAKtwDyuR01cWT%2Fhqg6gJZWP9stZpqdQ6OZz7vCJ6Ptj9LPbSJFh80CO%2FTs1cPHvPMNMIGLN956OTfpbIU2tpq0oiK8Os0zZhktwhPggmXHbLCNd60C5h6ujt14yvj8et1gnvah5a%2B6rj6%2FAN%2ByjtODgAJQBOkfjFt%2Bt6GLBSRMfJckHT1%2FPYn2watu8q3tIuy6aYj%2FWOOFoQoFFnJJoIHyRtMPXwKvb9HIbg7qL7CYwHlqnE2GEu3b68SHugm%2FVIaFD%2B%2FV6XTG3YJs1okrkHLkcSIoQlN159AaeRpNU%2Fm3wVGY3JX%2BS2r%2B0RJ04QkFo1hyb0dFGZhOH1x3Q5l%2FIv%2FPc7Vo78bw%2FoJzmQD4As%2Fn6beeZ04WdZ6YslM8dBoOe1%2BacetCWxzd9i8HvSckfuJ9ub8Z0QZ9TAZNybOeaN1lJs7hbG1q3aMRD40Y%2FhxMLAS6rjcgUgc4FA79AlYZhYDGTnXUDKuTRVb1fzKahIc6qJazx38dfKRMgJRjWiz1DSBnBga5aOqm4zB0EJoGOEVxXoKYp8lIa6WOvEkmDbqI7uyJiCe7Ou0wP%2BMfTYhIJSUTQUmiHN0XUtfYfkAOdCLRF3LhcBwByMkXCIwOgb2w%2FtfHfomdRsSGUbxow3pmyYw7O%2BixgY6pgFivUmmHgZMQM1top8v%2FqLd6xTsn%2Bb8JvyCyK5WNVICN%2BSnv%2Ba%2BJCnFpostFM6ps6fAmuGy%2Bn0X9sqhR1osBszdjEMBdROton9OQ6o4MJX1k9aXy%2B5yg1d76Iao7jICxVDOwPr0548%2B9aRoVxFLEqsIxeeSLmDNsJ1c6fCvSsTmsVfiIjTX9MN8hiqPQaXYCwRxq4ZWpO3RzEjZcTzgjeiF1SYpL1dM&X-Amz-Signature=b1ccf155932f907e4b4ca226698baee8f76f3b2271737f8c4997b1a776bef8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMPCYUL%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBt7ytm96Oe4uQokGzhjBWWcq6BU4qaGIl2XpM7F5NAwAiB80mDmlJOLw0BGCJr8R13A9u0ZPXWEuWkXTHy%2Bct%2BMZiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBYhfpQgNYprPv%2BOAKtwDyuR01cWT%2Fhqg6gJZWP9stZpqdQ6OZz7vCJ6Ptj9LPbSJFh80CO%2FTs1cPHvPMNMIGLN956OTfpbIU2tpq0oiK8Os0zZhktwhPggmXHbLCNd60C5h6ujt14yvj8et1gnvah5a%2B6rj6%2FAN%2ByjtODgAJQBOkfjFt%2Bt6GLBSRMfJckHT1%2FPYn2watu8q3tIuy6aYj%2FWOOFoQoFFnJJoIHyRtMPXwKvb9HIbg7qL7CYwHlqnE2GEu3b68SHugm%2FVIaFD%2B%2FV6XTG3YJs1okrkHLkcSIoQlN159AaeRpNU%2Fm3wVGY3JX%2BS2r%2B0RJ04QkFo1hyb0dFGZhOH1x3Q5l%2FIv%2FPc7Vo78bw%2FoJzmQD4As%2Fn6beeZ04WdZ6YslM8dBoOe1%2BacetCWxzd9i8HvSckfuJ9ub8Z0QZ9TAZNybOeaN1lJs7hbG1q3aMRD40Y%2FhxMLAS6rjcgUgc4FA79AlYZhYDGTnXUDKuTRVb1fzKahIc6qJazx38dfKRMgJRjWiz1DSBnBga5aOqm4zB0EJoGOEVxXoKYp8lIa6WOvEkmDbqI7uyJiCe7Ou0wP%2BMfTYhIJSUTQUmiHN0XUtfYfkAOdCLRF3LhcBwByMkXCIwOgb2w%2FtfHfomdRsSGUbxow3pmyYw7O%2BixgY6pgFivUmmHgZMQM1top8v%2FqLd6xTsn%2Bb8JvyCyK5WNVICN%2BSnv%2Ba%2BJCnFpostFM6ps6fAmuGy%2Bn0X9sqhR1osBszdjEMBdROton9OQ6o4MJX1k9aXy%2B5yg1d76Iao7jICxVDOwPr0548%2B9aRoVxFLEqsIxeeSLmDNsJ1c6fCvSsTmsVfiIjTX9MN8hiqPQaXYCwRxq4ZWpO3RzEjZcTzgjeiF1SYpL1dM&X-Amz-Signature=d2a44b1055c49c75a561c168525b2787bf355d46a7c4094f4421466a45aa5612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMPCYUL%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBt7ytm96Oe4uQokGzhjBWWcq6BU4qaGIl2XpM7F5NAwAiB80mDmlJOLw0BGCJr8R13A9u0ZPXWEuWkXTHy%2Bct%2BMZiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBYhfpQgNYprPv%2BOAKtwDyuR01cWT%2Fhqg6gJZWP9stZpqdQ6OZz7vCJ6Ptj9LPbSJFh80CO%2FTs1cPHvPMNMIGLN956OTfpbIU2tpq0oiK8Os0zZhktwhPggmXHbLCNd60C5h6ujt14yvj8et1gnvah5a%2B6rj6%2FAN%2ByjtODgAJQBOkfjFt%2Bt6GLBSRMfJckHT1%2FPYn2watu8q3tIuy6aYj%2FWOOFoQoFFnJJoIHyRtMPXwKvb9HIbg7qL7CYwHlqnE2GEu3b68SHugm%2FVIaFD%2B%2FV6XTG3YJs1okrkHLkcSIoQlN159AaeRpNU%2Fm3wVGY3JX%2BS2r%2B0RJ04QkFo1hyb0dFGZhOH1x3Q5l%2FIv%2FPc7Vo78bw%2FoJzmQD4As%2Fn6beeZ04WdZ6YslM8dBoOe1%2BacetCWxzd9i8HvSckfuJ9ub8Z0QZ9TAZNybOeaN1lJs7hbG1q3aMRD40Y%2FhxMLAS6rjcgUgc4FA79AlYZhYDGTnXUDKuTRVb1fzKahIc6qJazx38dfKRMgJRjWiz1DSBnBga5aOqm4zB0EJoGOEVxXoKYp8lIa6WOvEkmDbqI7uyJiCe7Ou0wP%2BMfTYhIJSUTQUmiHN0XUtfYfkAOdCLRF3LhcBwByMkXCIwOgb2w%2FtfHfomdRsSGUbxow3pmyYw7O%2BixgY6pgFivUmmHgZMQM1top8v%2FqLd6xTsn%2Bb8JvyCyK5WNVICN%2BSnv%2Ba%2BJCnFpostFM6ps6fAmuGy%2Bn0X9sqhR1osBszdjEMBdROton9OQ6o4MJX1k9aXy%2B5yg1d76Iao7jICxVDOwPr0548%2B9aRoVxFLEqsIxeeSLmDNsJ1c6fCvSsTmsVfiIjTX9MN8hiqPQaXYCwRxq4ZWpO3RzEjZcTzgjeiF1SYpL1dM&X-Amz-Signature=2c4174d4ac83cbdd4db927f19b0c6ec171f85dc7f31aa3efd2321525ff4dc6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
