---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6NDZG2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0nSEvjyJnlZDON7YssTVx4pgJB2MMmMswPWrcJpkOsAiEAm3htdgz4wEpzf0Cgz5ECw%2FpHR6xZmcddLvpDhcmf%2BUIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1AquXogkazYEHDUyrcA2ogIjjoye%2FN0Yo8Ad2v9cpRF0sSQf8FZbJPNpy%2BMY%2Bb9MCIFpykzfHU4C3eELtu85RkLtyFGWXFN%2FNsy865b4bPYsDXO4c08w5O7yfIvp%2BqRf7LWBGs2gIGBkKar0bKNZS8BmTWLSkhI58m13k3vzORbeFw0042cG9K0IJC%2FGeP8ibv455fqTwpQPAiHvEl1GVOPPYGtA8jLPzd09v8AEzu%2BpZqp8%2Boz%2BhegxZlZ7wYe3Tj23RRYenWSQDBri1%2FgJyQakNXSSzinoOfiOT3TD33wa8h6naUw6s53ihgR8MMXaK8UuQBfvkM2Z16X1pdP50knKjirnGdG8vVbagWXndDjW5TxEpBVj5ct2dxtadeJTGW0W6BWf7dXac1CO2dTf%2F0G78y%2BojWKbaztgxPXEzfRHUpXTryT6wtegNoYLLGVyrV%2BwiM%2BtmSaDRps9Q56mAef8CicCGI0QIT5WTQKqsqHafL6G3j%2Bki8k%2FWtl6vq73Wh1jA93bD3PlCTJjnyyV9iKGAnW3C%2BVPhndBp2eeaVmG7960P3mZdC6auFrvbRCOlsIvaQr30ZSRw4W6skZp5Rc0EqvzHwhXywDku68KDjgVz%2BoZNpX7%2BlpQ8YbMw0lsTJrPEFMSz6qbDDMJvypcQGOqUBTdJ6UX6VhJ%2F0nDluTqurw0hNQek%2F%2Fp98LYqVx%2BXQp3JnHnY7px6kg%2FOC9tWfLCHoPaHIL6qEvR8y0h1vn3K5bmWDdWh%2Bd%2B%2FXK8H3rIhjTDTPMY9ljf6y3ckovmYcFRSszmmVSqbA3qWttDzNyYlsESPa%2BttN3w07OF%2BvxOF8RM0hS6AgEg24%2FEFi95BGaEvf16jHky5Kvcd8ds19t1TO0BDSZtK6&X-Amz-Signature=29549fce445611a7430d5d83128c16f76d8bb18dd55c3378619309850decbf5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6NDZG2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0nSEvjyJnlZDON7YssTVx4pgJB2MMmMswPWrcJpkOsAiEAm3htdgz4wEpzf0Cgz5ECw%2FpHR6xZmcddLvpDhcmf%2BUIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1AquXogkazYEHDUyrcA2ogIjjoye%2FN0Yo8Ad2v9cpRF0sSQf8FZbJPNpy%2BMY%2Bb9MCIFpykzfHU4C3eELtu85RkLtyFGWXFN%2FNsy865b4bPYsDXO4c08w5O7yfIvp%2BqRf7LWBGs2gIGBkKar0bKNZS8BmTWLSkhI58m13k3vzORbeFw0042cG9K0IJC%2FGeP8ibv455fqTwpQPAiHvEl1GVOPPYGtA8jLPzd09v8AEzu%2BpZqp8%2Boz%2BhegxZlZ7wYe3Tj23RRYenWSQDBri1%2FgJyQakNXSSzinoOfiOT3TD33wa8h6naUw6s53ihgR8MMXaK8UuQBfvkM2Z16X1pdP50knKjirnGdG8vVbagWXndDjW5TxEpBVj5ct2dxtadeJTGW0W6BWf7dXac1CO2dTf%2F0G78y%2BojWKbaztgxPXEzfRHUpXTryT6wtegNoYLLGVyrV%2BwiM%2BtmSaDRps9Q56mAef8CicCGI0QIT5WTQKqsqHafL6G3j%2Bki8k%2FWtl6vq73Wh1jA93bD3PlCTJjnyyV9iKGAnW3C%2BVPhndBp2eeaVmG7960P3mZdC6auFrvbRCOlsIvaQr30ZSRw4W6skZp5Rc0EqvzHwhXywDku68KDjgVz%2BoZNpX7%2BlpQ8YbMw0lsTJrPEFMSz6qbDDMJvypcQGOqUBTdJ6UX6VhJ%2F0nDluTqurw0hNQek%2F%2Fp98LYqVx%2BXQp3JnHnY7px6kg%2FOC9tWfLCHoPaHIL6qEvR8y0h1vn3K5bmWDdWh%2Bd%2B%2FXK8H3rIhjTDTPMY9ljf6y3ckovmYcFRSszmmVSqbA3qWttDzNyYlsESPa%2BttN3w07OF%2BvxOF8RM0hS6AgEg24%2FEFi95BGaEvf16jHky5Kvcd8ds19t1TO0BDSZtK6&X-Amz-Signature=d71fd665a4bf0a63bac88deff212aa534f82c6fbb7018f59bf18daead8c0e164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6NDZG2W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0nSEvjyJnlZDON7YssTVx4pgJB2MMmMswPWrcJpkOsAiEAm3htdgz4wEpzf0Cgz5ECw%2FpHR6xZmcddLvpDhcmf%2BUIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1AquXogkazYEHDUyrcA2ogIjjoye%2FN0Yo8Ad2v9cpRF0sSQf8FZbJPNpy%2BMY%2Bb9MCIFpykzfHU4C3eELtu85RkLtyFGWXFN%2FNsy865b4bPYsDXO4c08w5O7yfIvp%2BqRf7LWBGs2gIGBkKar0bKNZS8BmTWLSkhI58m13k3vzORbeFw0042cG9K0IJC%2FGeP8ibv455fqTwpQPAiHvEl1GVOPPYGtA8jLPzd09v8AEzu%2BpZqp8%2Boz%2BhegxZlZ7wYe3Tj23RRYenWSQDBri1%2FgJyQakNXSSzinoOfiOT3TD33wa8h6naUw6s53ihgR8MMXaK8UuQBfvkM2Z16X1pdP50knKjirnGdG8vVbagWXndDjW5TxEpBVj5ct2dxtadeJTGW0W6BWf7dXac1CO2dTf%2F0G78y%2BojWKbaztgxPXEzfRHUpXTryT6wtegNoYLLGVyrV%2BwiM%2BtmSaDRps9Q56mAef8CicCGI0QIT5WTQKqsqHafL6G3j%2Bki8k%2FWtl6vq73Wh1jA93bD3PlCTJjnyyV9iKGAnW3C%2BVPhndBp2eeaVmG7960P3mZdC6auFrvbRCOlsIvaQr30ZSRw4W6skZp5Rc0EqvzHwhXywDku68KDjgVz%2BoZNpX7%2BlpQ8YbMw0lsTJrPEFMSz6qbDDMJvypcQGOqUBTdJ6UX6VhJ%2F0nDluTqurw0hNQek%2F%2Fp98LYqVx%2BXQp3JnHnY7px6kg%2FOC9tWfLCHoPaHIL6qEvR8y0h1vn3K5bmWDdWh%2Bd%2B%2FXK8H3rIhjTDTPMY9ljf6y3ckovmYcFRSszmmVSqbA3qWttDzNyYlsESPa%2BttN3w07OF%2BvxOF8RM0hS6AgEg24%2FEFi95BGaEvf16jHky5Kvcd8ds19t1TO0BDSZtK6&X-Amz-Signature=938f85b210d1dfd468728f6195236a931e660b1338c56cfd61dcb96a4086e168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
