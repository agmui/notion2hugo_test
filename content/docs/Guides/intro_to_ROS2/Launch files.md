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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJ7IW6V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC71jzgySA0FVCjn4l1fmaG88QL4WzSVQLQ5eZ2ZYDZ8wIgMidD4YGbKigoX%2F0seHpEgbbPHbZ0gKmOF3bHbZG47uYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBYQmbttcSHf2IBBeyrcA%2F%2B8Ih7dX0wiNg%2B8wSl0sm%2FzjQgBT5IO5knuiADMZgbvoWkExajqiK1n%2BnR6mCZNW2vvkhHmNUwImPSOABPY80YWzdCoKGAH5vkDURPBniB54IieMeYOp9kfDRvIuTcTw%2FvtDJHGxPi3zFnZOawZsB8PQ6Ds4abMTcNT3ueG69wEDXK0H7rl2uEfybFFexq%2F%2Fcgp2Mo0vBaNruwEkj%2Bghxf6jnn78FXD%2FF%2F6Zrt0Waa4IwhR1AahEuN7VwOwCE3qYinRL6IzsYXrQWhiQwxEQDSY%2BaOYZPjgp%2F7mvb2TB5FKvqbhNFhxTPQy3w%2FAyDpGJ%2BB2MHxdfzWsroS3CdMTXYLIwc1FlsnFXvrNlpFkqtqK20efCT3zQtWi2CUsaPM%2FIcwHbypOh3xXSXH1vXF83Y9Q0kNbZuq4Tp97b2F2ewRautF04GGWBPyBZWTFFghOV6BwWajS8HZigjaQ%2B03W50MqX5TTj84p8YqMDwBeRKRK5T7OfBo1DqQvUuYxVVLtWMEUsLvowbnoPFVconPoUOTrq%2BoxY6rrbTDNhLomT01BCQZlYpihkZb%2FdB1EJuoHxAB8oCkw42PIMx4a%2BpXD4xD9H%2FhamWqE6lW28jnV%2FWMb74vLbv%2BT4K2TJWnLMODuxMIGOqUBvNW3kyy4T7XBYrDD4pUoUBi1VgI42tEovLqVMJN3xa6hGZjA82SMz5T1p6Ng9RxGykAAzd3q6N9UxPNYVby%2B03bzNwNI7xQgCOWUqERnWwTmy7qTP2sBf8BhC0tPg2%2BvM1y3AMRHWK2c05WNYI33Adjxm%2FevlNuHPY2MycS2LFj4LLgbum1f3M4crifOCjcc7Mj2E4K4phUIUfCEVG6YIFoTqAAs&X-Amz-Signature=a4abe27c79887fac7a4146244ed108ce0ef41c7025a605e8d3a22aa1f426f3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJ7IW6V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC71jzgySA0FVCjn4l1fmaG88QL4WzSVQLQ5eZ2ZYDZ8wIgMidD4YGbKigoX%2F0seHpEgbbPHbZ0gKmOF3bHbZG47uYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBYQmbttcSHf2IBBeyrcA%2F%2B8Ih7dX0wiNg%2B8wSl0sm%2FzjQgBT5IO5knuiADMZgbvoWkExajqiK1n%2BnR6mCZNW2vvkhHmNUwImPSOABPY80YWzdCoKGAH5vkDURPBniB54IieMeYOp9kfDRvIuTcTw%2FvtDJHGxPi3zFnZOawZsB8PQ6Ds4abMTcNT3ueG69wEDXK0H7rl2uEfybFFexq%2F%2Fcgp2Mo0vBaNruwEkj%2Bghxf6jnn78FXD%2FF%2F6Zrt0Waa4IwhR1AahEuN7VwOwCE3qYinRL6IzsYXrQWhiQwxEQDSY%2BaOYZPjgp%2F7mvb2TB5FKvqbhNFhxTPQy3w%2FAyDpGJ%2BB2MHxdfzWsroS3CdMTXYLIwc1FlsnFXvrNlpFkqtqK20efCT3zQtWi2CUsaPM%2FIcwHbypOh3xXSXH1vXF83Y9Q0kNbZuq4Tp97b2F2ewRautF04GGWBPyBZWTFFghOV6BwWajS8HZigjaQ%2B03W50MqX5TTj84p8YqMDwBeRKRK5T7OfBo1DqQvUuYxVVLtWMEUsLvowbnoPFVconPoUOTrq%2BoxY6rrbTDNhLomT01BCQZlYpihkZb%2FdB1EJuoHxAB8oCkw42PIMx4a%2BpXD4xD9H%2FhamWqE6lW28jnV%2FWMb74vLbv%2BT4K2TJWnLMODuxMIGOqUBvNW3kyy4T7XBYrDD4pUoUBi1VgI42tEovLqVMJN3xa6hGZjA82SMz5T1p6Ng9RxGykAAzd3q6N9UxPNYVby%2B03bzNwNI7xQgCOWUqERnWwTmy7qTP2sBf8BhC0tPg2%2BvM1y3AMRHWK2c05WNYI33Adjxm%2FevlNuHPY2MycS2LFj4LLgbum1f3M4crifOCjcc7Mj2E4K4phUIUfCEVG6YIFoTqAAs&X-Amz-Signature=756d517c24cd1d9d470c5c8db8c5985030f0c39130b4c392b5298c11b5b51077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJ7IW6V%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC71jzgySA0FVCjn4l1fmaG88QL4WzSVQLQ5eZ2ZYDZ8wIgMidD4YGbKigoX%2F0seHpEgbbPHbZ0gKmOF3bHbZG47uYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBYQmbttcSHf2IBBeyrcA%2F%2B8Ih7dX0wiNg%2B8wSl0sm%2FzjQgBT5IO5knuiADMZgbvoWkExajqiK1n%2BnR6mCZNW2vvkhHmNUwImPSOABPY80YWzdCoKGAH5vkDURPBniB54IieMeYOp9kfDRvIuTcTw%2FvtDJHGxPi3zFnZOawZsB8PQ6Ds4abMTcNT3ueG69wEDXK0H7rl2uEfybFFexq%2F%2Fcgp2Mo0vBaNruwEkj%2Bghxf6jnn78FXD%2FF%2F6Zrt0Waa4IwhR1AahEuN7VwOwCE3qYinRL6IzsYXrQWhiQwxEQDSY%2BaOYZPjgp%2F7mvb2TB5FKvqbhNFhxTPQy3w%2FAyDpGJ%2BB2MHxdfzWsroS3CdMTXYLIwc1FlsnFXvrNlpFkqtqK20efCT3zQtWi2CUsaPM%2FIcwHbypOh3xXSXH1vXF83Y9Q0kNbZuq4Tp97b2F2ewRautF04GGWBPyBZWTFFghOV6BwWajS8HZigjaQ%2B03W50MqX5TTj84p8YqMDwBeRKRK5T7OfBo1DqQvUuYxVVLtWMEUsLvowbnoPFVconPoUOTrq%2BoxY6rrbTDNhLomT01BCQZlYpihkZb%2FdB1EJuoHxAB8oCkw42PIMx4a%2BpXD4xD9H%2FhamWqE6lW28jnV%2FWMb74vLbv%2BT4K2TJWnLMODuxMIGOqUBvNW3kyy4T7XBYrDD4pUoUBi1VgI42tEovLqVMJN3xa6hGZjA82SMz5T1p6Ng9RxGykAAzd3q6N9UxPNYVby%2B03bzNwNI7xQgCOWUqERnWwTmy7qTP2sBf8BhC0tPg2%2BvM1y3AMRHWK2c05WNYI33Adjxm%2FevlNuHPY2MycS2LFj4LLgbum1f3M4crifOCjcc7Mj2E4K4phUIUfCEVG6YIFoTqAAs&X-Amz-Signature=b4b5bc5ca146c7390a80ee45e96ad1df468758111b618c2be62f5618c53056e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
