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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMLLBAK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCu2wgBx8VbXW2ywwLBzFk34YE%2BSmybRajE%2FRZRevlOFQIgUxvWuQrA4106FWIMyD4e7T90gCN%2FvNwssT8gMjNdorYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcE3IIxELB62J%2F8eircA8fVw9W5gw99yIRxd%2FBk0qZN6MUWGhi65rcix5AbnZgpoXaX2MDoBiTVn1dbH%2FW6Ilnqck9qifFWxWJaMIZx80jZO5SOKLSbN0OGhtEAG3MZLR6dHSJfOu2AW21Ildl3jG2KvzYgvkGo2y9lxIS6ou0e5vDBEmBBfWe6%2BhMaKxUVuIrQGAF83mwbNbGVvqbXucV3JCle%2F%2FBHLatgJRzqdQHrc0enBKZa6im9jqGPe0Zbk00JRvopW4G7eCr9qLqb604staSgcfHZxEBPHaaf5%2BPhyI8RYCn83vh6ZVRPsm7MqO6zohV6oMfmBcUVjtbx6EzInnMhkXItnglHEdJOZpYdfNNqKZmp3EtAr6wRcpInvwaqdDngT%2F16e7PGeWuOJ4e6bQIqdAs72birDIkmpHcpQFYa%2Fl2wpC2neiWnIz9bD8Xvh%2FYuWyifHtDxutOGQ%2FEJNkc1GF4YUKtqRMR8qrvxhBr7bFyrbj7PLm5z7vFVvos1i2Argg19b6YVoeYt31Y%2FmBMCzf7qLQYP92dOc%2FUkVAdD4JEWm1L4%2FyQxxVxBUu1CLEcMy7afQHwhTMTfm%2FkIeLdbnu14ouKdZuk9yvZKTGydSrdh1IxyyE6tFMHyoElL7TNuvdLUKXsXMIGC%2BsEGOqUBcvbmKGLN3SoFnF21NHeAgqVnE%2B4%2BXuBG9iOZkwR%2F8QHML%2BJWNCK%2FJD5%2FGtGmO3PySvNDIxlP75Xq5roxtvWcQnlLreScBv8Iu781OgF7Cjl9lurdPSu3N2BeXw2zt7WKleQorc0g8w2He6VY6gm1ZnFU6PPqahwc2%2FCZmF3bXMn7OQxkSwlEdLnllWTH9VIZ%2BSeshL8nfVkY0ywhtb9F%2Fwk5Jld1&X-Amz-Signature=76dc81800e2655967c7207496c4d53b14df398ce20ebdd2dd064cc4791d5363d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMLLBAK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCu2wgBx8VbXW2ywwLBzFk34YE%2BSmybRajE%2FRZRevlOFQIgUxvWuQrA4106FWIMyD4e7T90gCN%2FvNwssT8gMjNdorYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcE3IIxELB62J%2F8eircA8fVw9W5gw99yIRxd%2FBk0qZN6MUWGhi65rcix5AbnZgpoXaX2MDoBiTVn1dbH%2FW6Ilnqck9qifFWxWJaMIZx80jZO5SOKLSbN0OGhtEAG3MZLR6dHSJfOu2AW21Ildl3jG2KvzYgvkGo2y9lxIS6ou0e5vDBEmBBfWe6%2BhMaKxUVuIrQGAF83mwbNbGVvqbXucV3JCle%2F%2FBHLatgJRzqdQHrc0enBKZa6im9jqGPe0Zbk00JRvopW4G7eCr9qLqb604staSgcfHZxEBPHaaf5%2BPhyI8RYCn83vh6ZVRPsm7MqO6zohV6oMfmBcUVjtbx6EzInnMhkXItnglHEdJOZpYdfNNqKZmp3EtAr6wRcpInvwaqdDngT%2F16e7PGeWuOJ4e6bQIqdAs72birDIkmpHcpQFYa%2Fl2wpC2neiWnIz9bD8Xvh%2FYuWyifHtDxutOGQ%2FEJNkc1GF4YUKtqRMR8qrvxhBr7bFyrbj7PLm5z7vFVvos1i2Argg19b6YVoeYt31Y%2FmBMCzf7qLQYP92dOc%2FUkVAdD4JEWm1L4%2FyQxxVxBUu1CLEcMy7afQHwhTMTfm%2FkIeLdbnu14ouKdZuk9yvZKTGydSrdh1IxyyE6tFMHyoElL7TNuvdLUKXsXMIGC%2BsEGOqUBcvbmKGLN3SoFnF21NHeAgqVnE%2B4%2BXuBG9iOZkwR%2F8QHML%2BJWNCK%2FJD5%2FGtGmO3PySvNDIxlP75Xq5roxtvWcQnlLreScBv8Iu781OgF7Cjl9lurdPSu3N2BeXw2zt7WKleQorc0g8w2He6VY6gm1ZnFU6PPqahwc2%2FCZmF3bXMn7OQxkSwlEdLnllWTH9VIZ%2BSeshL8nfVkY0ywhtb9F%2Fwk5Jld1&X-Amz-Signature=175c3d6b08007057cbbcc7bcfe3c88fb3ceb4adfc91b67fc12f342fdd40e01f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMLLBAK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCu2wgBx8VbXW2ywwLBzFk34YE%2BSmybRajE%2FRZRevlOFQIgUxvWuQrA4106FWIMyD4e7T90gCN%2FvNwssT8gMjNdorYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcE3IIxELB62J%2F8eircA8fVw9W5gw99yIRxd%2FBk0qZN6MUWGhi65rcix5AbnZgpoXaX2MDoBiTVn1dbH%2FW6Ilnqck9qifFWxWJaMIZx80jZO5SOKLSbN0OGhtEAG3MZLR6dHSJfOu2AW21Ildl3jG2KvzYgvkGo2y9lxIS6ou0e5vDBEmBBfWe6%2BhMaKxUVuIrQGAF83mwbNbGVvqbXucV3JCle%2F%2FBHLatgJRzqdQHrc0enBKZa6im9jqGPe0Zbk00JRvopW4G7eCr9qLqb604staSgcfHZxEBPHaaf5%2BPhyI8RYCn83vh6ZVRPsm7MqO6zohV6oMfmBcUVjtbx6EzInnMhkXItnglHEdJOZpYdfNNqKZmp3EtAr6wRcpInvwaqdDngT%2F16e7PGeWuOJ4e6bQIqdAs72birDIkmpHcpQFYa%2Fl2wpC2neiWnIz9bD8Xvh%2FYuWyifHtDxutOGQ%2FEJNkc1GF4YUKtqRMR8qrvxhBr7bFyrbj7PLm5z7vFVvos1i2Argg19b6YVoeYt31Y%2FmBMCzf7qLQYP92dOc%2FUkVAdD4JEWm1L4%2FyQxxVxBUu1CLEcMy7afQHwhTMTfm%2FkIeLdbnu14ouKdZuk9yvZKTGydSrdh1IxyyE6tFMHyoElL7TNuvdLUKXsXMIGC%2BsEGOqUBcvbmKGLN3SoFnF21NHeAgqVnE%2B4%2BXuBG9iOZkwR%2F8QHML%2BJWNCK%2FJD5%2FGtGmO3PySvNDIxlP75Xq5roxtvWcQnlLreScBv8Iu781OgF7Cjl9lurdPSu3N2BeXw2zt7WKleQorc0g8w2He6VY6gm1ZnFU6PPqahwc2%2FCZmF3bXMn7OQxkSwlEdLnllWTH9VIZ%2BSeshL8nfVkY0ywhtb9F%2Fwk5Jld1&X-Amz-Signature=c16a7382f940800ba3b9083195e9cce9e63ed09c4f5d3820270d2bb1e460f50c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
