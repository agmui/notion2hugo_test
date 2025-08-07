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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVAJEZF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCyJrlkM4tjQDl2yl3oLZ282hwjF5LsgEZeycakt7YK6gIgXz7477mO2kRkuT6L7B%2B62FQbumQeN4ZhsqspYiZBL6oqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHYaav1k3TCKTccFCrcA0f0YCuKITbiECz1etd2VbOel9UDt25PUciUvcy4tz0h5A31rGW7cg6bcLz4fGcBaCmwuoE54yZyWP2bADAlZ63DUQzn4rMiZ2LwXQrIWrXJ%2Fl%2BzYJlpObE%2FoX8n9UwP4cL5PtgAaj3d0%2FHJi0i7B%2FxKzFoS%2Fk8%2FLJtGj4aW2O%2F6CkwkOrzEhWbiVvIQI4GNOU59TQOIXjlMBOPTbcnsdd0kBl56rYesCPv7X1jWi5p8UU6I9t2bkF1rx4oIHjqkkrhAKzTC%2BHC7iTrmRBz8z5ymzZEVeXn2rAfz9Y6gxoz0UObN%2BL%2F8iiR2n6yPoCRbe7MlIT6RqM1t2JKSBk9teMWQIApwfzIaHxMxLoRYgWg%2Bxkffxm5TQ4j3R1HfionkqukqFdF%2FLLs4KJzzWmhtC4TkA82IcowQebj%2BFxHfkQ61IzJaxPUcZCF%2FoS3GOJZ0WoJZgBCCsZ7I7Tok64kHQHqyym16s3ZlCxm8lyuu7M88n04B4Ygj9q8Pfk3GBtJAKl1tdyJCoSmWgpkeexDwucNNTI9H5gHa9BSp5B8R6ppgSBYTBlAzQm1XdvSS0Ie1T3wOTzVWz0BLjvoggjwoSrn1sk0pfS4hsgKlCaLDzrKyetLXlDy%2Bimgle8Y%2BMOTj0cQGOqUBU5%2B7Sqvrt6%2BIf8DIjk808wBgCcZzOhYVjxioi0Ol8P0xMWZbkZJVbmmrVv3cPQRnyxP7620efLE7v20qgD6FZI5remYj0xY4YZuuIxNjOIGZh6tKBOJp87FfUoo5Zb1LrHdFMzTicI6MtuuVlJtVZEVzzcNue0ucCDJjeImnA25C5dieivMo5fUVfYhvVNPghfW%2BYkBgDGoFSF0veEbRaLmSEyXY&X-Amz-Signature=2e1df6ccf0ef7c21b11daf220851821cc1d0cd7f38d90f52ef9566668c276514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVAJEZF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCyJrlkM4tjQDl2yl3oLZ282hwjF5LsgEZeycakt7YK6gIgXz7477mO2kRkuT6L7B%2B62FQbumQeN4ZhsqspYiZBL6oqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHYaav1k3TCKTccFCrcA0f0YCuKITbiECz1etd2VbOel9UDt25PUciUvcy4tz0h5A31rGW7cg6bcLz4fGcBaCmwuoE54yZyWP2bADAlZ63DUQzn4rMiZ2LwXQrIWrXJ%2Fl%2BzYJlpObE%2FoX8n9UwP4cL5PtgAaj3d0%2FHJi0i7B%2FxKzFoS%2Fk8%2FLJtGj4aW2O%2F6CkwkOrzEhWbiVvIQI4GNOU59TQOIXjlMBOPTbcnsdd0kBl56rYesCPv7X1jWi5p8UU6I9t2bkF1rx4oIHjqkkrhAKzTC%2BHC7iTrmRBz8z5ymzZEVeXn2rAfz9Y6gxoz0UObN%2BL%2F8iiR2n6yPoCRbe7MlIT6RqM1t2JKSBk9teMWQIApwfzIaHxMxLoRYgWg%2Bxkffxm5TQ4j3R1HfionkqukqFdF%2FLLs4KJzzWmhtC4TkA82IcowQebj%2BFxHfkQ61IzJaxPUcZCF%2FoS3GOJZ0WoJZgBCCsZ7I7Tok64kHQHqyym16s3ZlCxm8lyuu7M88n04B4Ygj9q8Pfk3GBtJAKl1tdyJCoSmWgpkeexDwucNNTI9H5gHa9BSp5B8R6ppgSBYTBlAzQm1XdvSS0Ie1T3wOTzVWz0BLjvoggjwoSrn1sk0pfS4hsgKlCaLDzrKyetLXlDy%2Bimgle8Y%2BMOTj0cQGOqUBU5%2B7Sqvrt6%2BIf8DIjk808wBgCcZzOhYVjxioi0Ol8P0xMWZbkZJVbmmrVv3cPQRnyxP7620efLE7v20qgD6FZI5remYj0xY4YZuuIxNjOIGZh6tKBOJp87FfUoo5Zb1LrHdFMzTicI6MtuuVlJtVZEVzzcNue0ucCDJjeImnA25C5dieivMo5fUVfYhvVNPghfW%2BYkBgDGoFSF0veEbRaLmSEyXY&X-Amz-Signature=bb07d8ec5c3094cb76ad9116dd2c8c431ec5ebcbac73e41f8a8ac51572bf8b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVAJEZF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCyJrlkM4tjQDl2yl3oLZ282hwjF5LsgEZeycakt7YK6gIgXz7477mO2kRkuT6L7B%2B62FQbumQeN4ZhsqspYiZBL6oqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHYaav1k3TCKTccFCrcA0f0YCuKITbiECz1etd2VbOel9UDt25PUciUvcy4tz0h5A31rGW7cg6bcLz4fGcBaCmwuoE54yZyWP2bADAlZ63DUQzn4rMiZ2LwXQrIWrXJ%2Fl%2BzYJlpObE%2FoX8n9UwP4cL5PtgAaj3d0%2FHJi0i7B%2FxKzFoS%2Fk8%2FLJtGj4aW2O%2F6CkwkOrzEhWbiVvIQI4GNOU59TQOIXjlMBOPTbcnsdd0kBl56rYesCPv7X1jWi5p8UU6I9t2bkF1rx4oIHjqkkrhAKzTC%2BHC7iTrmRBz8z5ymzZEVeXn2rAfz9Y6gxoz0UObN%2BL%2F8iiR2n6yPoCRbe7MlIT6RqM1t2JKSBk9teMWQIApwfzIaHxMxLoRYgWg%2Bxkffxm5TQ4j3R1HfionkqukqFdF%2FLLs4KJzzWmhtC4TkA82IcowQebj%2BFxHfkQ61IzJaxPUcZCF%2FoS3GOJZ0WoJZgBCCsZ7I7Tok64kHQHqyym16s3ZlCxm8lyuu7M88n04B4Ygj9q8Pfk3GBtJAKl1tdyJCoSmWgpkeexDwucNNTI9H5gHa9BSp5B8R6ppgSBYTBlAzQm1XdvSS0Ie1T3wOTzVWz0BLjvoggjwoSrn1sk0pfS4hsgKlCaLDzrKyetLXlDy%2Bimgle8Y%2BMOTj0cQGOqUBU5%2B7Sqvrt6%2BIf8DIjk808wBgCcZzOhYVjxioi0Ol8P0xMWZbkZJVbmmrVv3cPQRnyxP7620efLE7v20qgD6FZI5remYj0xY4YZuuIxNjOIGZh6tKBOJp87FfUoo5Zb1LrHdFMzTicI6MtuuVlJtVZEVzzcNue0ucCDJjeImnA25C5dieivMo5fUVfYhvVNPghfW%2BYkBgDGoFSF0veEbRaLmSEyXY&X-Amz-Signature=76fe01f306bc618f1aaff9e82c4d6e80151897f83a7d9f8383642fc2f896906e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
