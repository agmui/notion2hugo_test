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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XA6UACI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuWrYW05ccdeLA2J5oe5GXk3CtkB7W%2FptiVCjRCUk%2F5wIgE%2BwEN1%2F71%2BlJ2S8eN4RTsrwb8IeqJa0WKOlWJYtw5nMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCqvJlinEHxtAWcHircA1LfKQkrY0Z6uuRb%2F%2FW3NLBzdemxffv8g9DCGaP7%2Bqo6RKmSjrzRMvfaDs5%2FRvfycxFhcficId%2B1QnDpE%2BHNFmxI5qdd772pDU5bJJr%2FRemyXJpfVJmrCFq%2BNyjKePsVNxO8QxPSdO0W2vyZTptFcjgdVhlrLuRqjSL7RCZlMs55UQfuuShaXxLQ0aaYvJD%2Fphrzd%2BVRTyxa5ypb81cKZ9xkC4LBkp4sqHopYx%2BhUzK0hOi46%2B5UhWZvqFE43L7R8KprXmEV5k0NdH42EbYl1O2x34WJ%2Fsa6JIQBiJp5QPj0e9D2oQBAZbknCfVay69TuOBngqvONQ4M8HP8rEKdG11wgBQHXEwo8dTE8lT8CijxkZn9gdaWlzf2DyjNf5Tx4Q6k4c0qNyPV4xnNMeQF4sTpDcJOL0PDIa1wCq2juI6wuvCBaE1h9uVvxnUfO9ra2CWryFj3MjAYHdgcJtCS0tuNqZgGFqKkaJcc2AllizPlW%2B39sNzKY1AhP18Nx4CYPWB0koYMAe3ylyL7CQtAh65o71tlQOeGqUj6VgMr%2FrF%2B4wdSfhU5CN61o4vo5WzqFPpWqUtOGp0vT%2FQsHfwUB3bkEUyX%2F3WJzrYdXu3DsqmFQF6quiOv7mHE%2FXEUMKz178MGOqUBhRa7XhYePIAtRo7kb0f6M5hgDfEPwVzP1dqJ0RUchdeRxI1ojCyr5Kwl%2BWS1lmOuuiMBJiAbTnzmTtNQ27P%2BUeB0fY6E0r49vNiz4kNBYDXs3Mm6CtKkANGEV3f%2Bk69nRGSvi4be1QlBdxqk%2FLfKrTDdatfegil3FOmCr4s%2FaGixlbyjXlWxMOi8algVKrEGnhSKrK9blWq8bHNcRXZMUTqEBr2m&X-Amz-Signature=c4ce89ddbedce9358131e3d7b5bc264f558a22c71e982dffbf072ddd9ddd9e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XA6UACI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuWrYW05ccdeLA2J5oe5GXk3CtkB7W%2FptiVCjRCUk%2F5wIgE%2BwEN1%2F71%2BlJ2S8eN4RTsrwb8IeqJa0WKOlWJYtw5nMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCqvJlinEHxtAWcHircA1LfKQkrY0Z6uuRb%2F%2FW3NLBzdemxffv8g9DCGaP7%2Bqo6RKmSjrzRMvfaDs5%2FRvfycxFhcficId%2B1QnDpE%2BHNFmxI5qdd772pDU5bJJr%2FRemyXJpfVJmrCFq%2BNyjKePsVNxO8QxPSdO0W2vyZTptFcjgdVhlrLuRqjSL7RCZlMs55UQfuuShaXxLQ0aaYvJD%2Fphrzd%2BVRTyxa5ypb81cKZ9xkC4LBkp4sqHopYx%2BhUzK0hOi46%2B5UhWZvqFE43L7R8KprXmEV5k0NdH42EbYl1O2x34WJ%2Fsa6JIQBiJp5QPj0e9D2oQBAZbknCfVay69TuOBngqvONQ4M8HP8rEKdG11wgBQHXEwo8dTE8lT8CijxkZn9gdaWlzf2DyjNf5Tx4Q6k4c0qNyPV4xnNMeQF4sTpDcJOL0PDIa1wCq2juI6wuvCBaE1h9uVvxnUfO9ra2CWryFj3MjAYHdgcJtCS0tuNqZgGFqKkaJcc2AllizPlW%2B39sNzKY1AhP18Nx4CYPWB0koYMAe3ylyL7CQtAh65o71tlQOeGqUj6VgMr%2FrF%2B4wdSfhU5CN61o4vo5WzqFPpWqUtOGp0vT%2FQsHfwUB3bkEUyX%2F3WJzrYdXu3DsqmFQF6quiOv7mHE%2FXEUMKz178MGOqUBhRa7XhYePIAtRo7kb0f6M5hgDfEPwVzP1dqJ0RUchdeRxI1ojCyr5Kwl%2BWS1lmOuuiMBJiAbTnzmTtNQ27P%2BUeB0fY6E0r49vNiz4kNBYDXs3Mm6CtKkANGEV3f%2Bk69nRGSvi4be1QlBdxqk%2FLfKrTDdatfegil3FOmCr4s%2FaGixlbyjXlWxMOi8algVKrEGnhSKrK9blWq8bHNcRXZMUTqEBr2m&X-Amz-Signature=adc4ac1dcda16954e7fe8d6c4afa7a96774373c6b749a45ec7ecaee4ba12222b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XA6UACI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuWrYW05ccdeLA2J5oe5GXk3CtkB7W%2FptiVCjRCUk%2F5wIgE%2BwEN1%2F71%2BlJ2S8eN4RTsrwb8IeqJa0WKOlWJYtw5nMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCqvJlinEHxtAWcHircA1LfKQkrY0Z6uuRb%2F%2FW3NLBzdemxffv8g9DCGaP7%2Bqo6RKmSjrzRMvfaDs5%2FRvfycxFhcficId%2B1QnDpE%2BHNFmxI5qdd772pDU5bJJr%2FRemyXJpfVJmrCFq%2BNyjKePsVNxO8QxPSdO0W2vyZTptFcjgdVhlrLuRqjSL7RCZlMs55UQfuuShaXxLQ0aaYvJD%2Fphrzd%2BVRTyxa5ypb81cKZ9xkC4LBkp4sqHopYx%2BhUzK0hOi46%2B5UhWZvqFE43L7R8KprXmEV5k0NdH42EbYl1O2x34WJ%2Fsa6JIQBiJp5QPj0e9D2oQBAZbknCfVay69TuOBngqvONQ4M8HP8rEKdG11wgBQHXEwo8dTE8lT8CijxkZn9gdaWlzf2DyjNf5Tx4Q6k4c0qNyPV4xnNMeQF4sTpDcJOL0PDIa1wCq2juI6wuvCBaE1h9uVvxnUfO9ra2CWryFj3MjAYHdgcJtCS0tuNqZgGFqKkaJcc2AllizPlW%2B39sNzKY1AhP18Nx4CYPWB0koYMAe3ylyL7CQtAh65o71tlQOeGqUj6VgMr%2FrF%2B4wdSfhU5CN61o4vo5WzqFPpWqUtOGp0vT%2FQsHfwUB3bkEUyX%2F3WJzrYdXu3DsqmFQF6quiOv7mHE%2FXEUMKz178MGOqUBhRa7XhYePIAtRo7kb0f6M5hgDfEPwVzP1dqJ0RUchdeRxI1ojCyr5Kwl%2BWS1lmOuuiMBJiAbTnzmTtNQ27P%2BUeB0fY6E0r49vNiz4kNBYDXs3Mm6CtKkANGEV3f%2Bk69nRGSvi4be1QlBdxqk%2FLfKrTDdatfegil3FOmCr4s%2FaGixlbyjXlWxMOi8algVKrEGnhSKrK9blWq8bHNcRXZMUTqEBr2m&X-Amz-Signature=26a8e250fe3154103d8a049f5abe8a65d455042747e9a3ea8afba8b5eaf85cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
