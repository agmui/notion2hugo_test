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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K3NW5NK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Sj1%2FO0R7LIOSoT2Vn9bBE5LT4D2h0ycvET%2BGGmvQ0gIhAJgafPJEAX8MWhW1AZTjKpH2LmCeXyIc9HLAdKrSVeFWKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3XtiJg%2FIPny7Gq6cq3AN86rTWV9xQXqOnUGIGyGED1LK%2FeR98CCSVg4CjIGcpXIuKXfd8k1Qq%2FxIXhNFXt9CUgUctDEZr3%2B%2BMQrFrCCxal19YKfCbqdwHJVLrzzsa9d9bDKpOM2HZw3qUHGUd90CvdV8oSoXdaxthKZCeo2%2FJe21Ckmf9OCq28ILtCuXLQ31tXaiU7%2B8K3mIp0QRCcVQeF0IoET%2BhdUu619Py1%2BBgVEKpXzPp5NQ6u8oxrbVBUbKitTl9%2Fy0%2FVJOphIgifdYI1mlq17YBJsQm9o%2FuLDHrPTYcwZWHxYSG10OoGvJrrodAW2uXN6Wly2RKxXvVKvkLyL3WVc4z6lZejWFvr7OFmPHHaBvPT%2Bv48q1oUrRUJc4axW4%2BTptoUoxNFxxdfL1zTfzIhnfsT4sS1RbBUxBAmZ4AhuOBCVu9GUoW64mdxAM5xLXcUX5HEsmHs6SgqrtHln4xmKRLzfsA%2BBuMCpz7tMRUrtb9hXhLsH5j8TxD8XMTHUNZVIod2kmqESf0WWQHUSR4HM4g%2BbEIWnamc5SQj%2BwKb6wt383UMlduxgWxV9TvF%2BLJp3DrYO5WzScObbmz7CW4Ft99zdtrb%2B4T0f%2F0C59zMZY7ALmXwzBASKmjLnVXCDV0R%2FAHj0AzcTCHrsvDBjqkAWtbI6mIACrkIdrTZeYnd089Jdboqb8I0%2Fd82bLYG8UirbIto3KfdAF8d3rY%2B55WlYamhGGRiX2m%2Bu2rrLyCWPFY8Xr%2FbYrzfAIGmIm6fXMPzOcTZ8Fh9%2FVlEjKYGmVosR8zYG3R0u%2FIukLBu9YNntg%2FMm5SrsgVBumwiVqt1aq8QOlEoUbdgF5U75R9XKjKAGSW0zluj4a%2BLnl69MMCLgWIqpZv&X-Amz-Signature=aea70c169877679687ee818df8f4bdfde814b3ce46b68856cdfa52ecac1ac6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K3NW5NK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Sj1%2FO0R7LIOSoT2Vn9bBE5LT4D2h0ycvET%2BGGmvQ0gIhAJgafPJEAX8MWhW1AZTjKpH2LmCeXyIc9HLAdKrSVeFWKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3XtiJg%2FIPny7Gq6cq3AN86rTWV9xQXqOnUGIGyGED1LK%2FeR98CCSVg4CjIGcpXIuKXfd8k1Qq%2FxIXhNFXt9CUgUctDEZr3%2B%2BMQrFrCCxal19YKfCbqdwHJVLrzzsa9d9bDKpOM2HZw3qUHGUd90CvdV8oSoXdaxthKZCeo2%2FJe21Ckmf9OCq28ILtCuXLQ31tXaiU7%2B8K3mIp0QRCcVQeF0IoET%2BhdUu619Py1%2BBgVEKpXzPp5NQ6u8oxrbVBUbKitTl9%2Fy0%2FVJOphIgifdYI1mlq17YBJsQm9o%2FuLDHrPTYcwZWHxYSG10OoGvJrrodAW2uXN6Wly2RKxXvVKvkLyL3WVc4z6lZejWFvr7OFmPHHaBvPT%2Bv48q1oUrRUJc4axW4%2BTptoUoxNFxxdfL1zTfzIhnfsT4sS1RbBUxBAmZ4AhuOBCVu9GUoW64mdxAM5xLXcUX5HEsmHs6SgqrtHln4xmKRLzfsA%2BBuMCpz7tMRUrtb9hXhLsH5j8TxD8XMTHUNZVIod2kmqESf0WWQHUSR4HM4g%2BbEIWnamc5SQj%2BwKb6wt383UMlduxgWxV9TvF%2BLJp3DrYO5WzScObbmz7CW4Ft99zdtrb%2B4T0f%2F0C59zMZY7ALmXwzBASKmjLnVXCDV0R%2FAHj0AzcTCHrsvDBjqkAWtbI6mIACrkIdrTZeYnd089Jdboqb8I0%2Fd82bLYG8UirbIto3KfdAF8d3rY%2B55WlYamhGGRiX2m%2Bu2rrLyCWPFY8Xr%2FbYrzfAIGmIm6fXMPzOcTZ8Fh9%2FVlEjKYGmVosR8zYG3R0u%2FIukLBu9YNntg%2FMm5SrsgVBumwiVqt1aq8QOlEoUbdgF5U75R9XKjKAGSW0zluj4a%2BLnl69MMCLgWIqpZv&X-Amz-Signature=7e5c25fb5140c1e9cdb622f2fe17e09120774fa9e2c72b6df187a2941c160b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K3NW5NK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Sj1%2FO0R7LIOSoT2Vn9bBE5LT4D2h0ycvET%2BGGmvQ0gIhAJgafPJEAX8MWhW1AZTjKpH2LmCeXyIc9HLAdKrSVeFWKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3XtiJg%2FIPny7Gq6cq3AN86rTWV9xQXqOnUGIGyGED1LK%2FeR98CCSVg4CjIGcpXIuKXfd8k1Qq%2FxIXhNFXt9CUgUctDEZr3%2B%2BMQrFrCCxal19YKfCbqdwHJVLrzzsa9d9bDKpOM2HZw3qUHGUd90CvdV8oSoXdaxthKZCeo2%2FJe21Ckmf9OCq28ILtCuXLQ31tXaiU7%2B8K3mIp0QRCcVQeF0IoET%2BhdUu619Py1%2BBgVEKpXzPp5NQ6u8oxrbVBUbKitTl9%2Fy0%2FVJOphIgifdYI1mlq17YBJsQm9o%2FuLDHrPTYcwZWHxYSG10OoGvJrrodAW2uXN6Wly2RKxXvVKvkLyL3WVc4z6lZejWFvr7OFmPHHaBvPT%2Bv48q1oUrRUJc4axW4%2BTptoUoxNFxxdfL1zTfzIhnfsT4sS1RbBUxBAmZ4AhuOBCVu9GUoW64mdxAM5xLXcUX5HEsmHs6SgqrtHln4xmKRLzfsA%2BBuMCpz7tMRUrtb9hXhLsH5j8TxD8XMTHUNZVIod2kmqESf0WWQHUSR4HM4g%2BbEIWnamc5SQj%2BwKb6wt383UMlduxgWxV9TvF%2BLJp3DrYO5WzScObbmz7CW4Ft99zdtrb%2B4T0f%2F0C59zMZY7ALmXwzBASKmjLnVXCDV0R%2FAHj0AzcTCHrsvDBjqkAWtbI6mIACrkIdrTZeYnd089Jdboqb8I0%2Fd82bLYG8UirbIto3KfdAF8d3rY%2B55WlYamhGGRiX2m%2Bu2rrLyCWPFY8Xr%2FbYrzfAIGmIm6fXMPzOcTZ8Fh9%2FVlEjKYGmVosR8zYG3R0u%2FIukLBu9YNntg%2FMm5SrsgVBumwiVqt1aq8QOlEoUbdgF5U75R9XKjKAGSW0zluj4a%2BLnl69MMCLgWIqpZv&X-Amz-Signature=064fe4a028657c008eccc8e90fb35b82d8d4a9972292897a2dded42bf6bb75fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
