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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGN4O6VQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIDcfVAyGMdMcO9u9uI1dNQTee3WRj8zJjnAXXLxTHIJQAiEA%2ByPn6sdvjZ7AyoIlAzrd0SVbVaWeRHmmHNvWt%2BahHsQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSmnvD0EKjxnLyMsSrcA5GWZbG7RtivndmwwIyK9bhLu8xNZoBaQn%2BQyz7%2Fkk0OJpqFahJHWc6g%2BzUMFd490YJO5r1OHkdspGJb8KEf1zl0Oqmy2wWJ0JEFISFki2SLztMWdX6wqV9%2FS3CZeDRlz5sxtlaBk8E4QV7%2FKQu3otAD8MiRlPhib5YYS9BWCGTSGnSFMvzng7RBySSFDBAWtPPzekYIAYUGuMA7uv%2BqgiABlKc14Zr1ie9QFE69kqfWRAQ9uNURypwDXf4hW7WbGmCB0ptRCabVENxEfEpRQAUrkMVugmPLtymWksgGu4LGjaWmqKGUdY1rSnuJj%2FaqXK1n9Zer7nkLPthXgS2uXHcJVNeCl4xDLr08eoapP%2BNt2J6CmU3nucSnrO7Eb5VUSIrpwv%2BmJ%2B%2BNz3CuAK8MIZ%2BWxYHn7YjSNGFe0XF0kXAR9NfNt2Pd8fQ%2BVPCW6J741kRuZFVz5tecKhGpt7%2Fb%2FUcq6xq7BYvvlYQdG%2FhZyMNyDhR5XdHZC6nNBiMLkx%2F5yUQJwemmvBwxS2nzMP4kVDZP%2BF4xTBVBIsYJA%2B9dUpmtIHWk%2B4H4wbRGTDHR1l9x69hMHdUhorNSQCQfZBs%2Fc4FRVkskOsUlBAtJGn3q721R%2BrjLX47TAoFYk%2FRmML3Ku74GOqUBYWBydo9hXo43Cgsho7oUYs1Mt0D87p5IYv8h2VfpSJ4hcHsxLFjEYr1OfDUAOzTBhdEk%2FLvV2QkeeqTvtV69ek4rPT33LmdYLLP8n1AZ7IT2ktWS09EJJAcb2OVgZz%2BevbCdQ6jdodY%2BY4%2B0tINFui2alMqoiRX2wKnQJCv%2FwtXpYQeOX0%2BtTsc7iUcjcF6Z5o8RXpnYfopptVZ3W9dDvWxWZUx8&X-Amz-Signature=c72f4afe81f7cfba8be0981784d9302b08ea3ba32535b985be95daee1725684c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGN4O6VQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIDcfVAyGMdMcO9u9uI1dNQTee3WRj8zJjnAXXLxTHIJQAiEA%2ByPn6sdvjZ7AyoIlAzrd0SVbVaWeRHmmHNvWt%2BahHsQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSmnvD0EKjxnLyMsSrcA5GWZbG7RtivndmwwIyK9bhLu8xNZoBaQn%2BQyz7%2Fkk0OJpqFahJHWc6g%2BzUMFd490YJO5r1OHkdspGJb8KEf1zl0Oqmy2wWJ0JEFISFki2SLztMWdX6wqV9%2FS3CZeDRlz5sxtlaBk8E4QV7%2FKQu3otAD8MiRlPhib5YYS9BWCGTSGnSFMvzng7RBySSFDBAWtPPzekYIAYUGuMA7uv%2BqgiABlKc14Zr1ie9QFE69kqfWRAQ9uNURypwDXf4hW7WbGmCB0ptRCabVENxEfEpRQAUrkMVugmPLtymWksgGu4LGjaWmqKGUdY1rSnuJj%2FaqXK1n9Zer7nkLPthXgS2uXHcJVNeCl4xDLr08eoapP%2BNt2J6CmU3nucSnrO7Eb5VUSIrpwv%2BmJ%2B%2BNz3CuAK8MIZ%2BWxYHn7YjSNGFe0XF0kXAR9NfNt2Pd8fQ%2BVPCW6J741kRuZFVz5tecKhGpt7%2Fb%2FUcq6xq7BYvvlYQdG%2FhZyMNyDhR5XdHZC6nNBiMLkx%2F5yUQJwemmvBwxS2nzMP4kVDZP%2BF4xTBVBIsYJA%2B9dUpmtIHWk%2B4H4wbRGTDHR1l9x69hMHdUhorNSQCQfZBs%2Fc4FRVkskOsUlBAtJGn3q721R%2BrjLX47TAoFYk%2FRmML3Ku74GOqUBYWBydo9hXo43Cgsho7oUYs1Mt0D87p5IYv8h2VfpSJ4hcHsxLFjEYr1OfDUAOzTBhdEk%2FLvV2QkeeqTvtV69ek4rPT33LmdYLLP8n1AZ7IT2ktWS09EJJAcb2OVgZz%2BevbCdQ6jdodY%2BY4%2B0tINFui2alMqoiRX2wKnQJCv%2FwtXpYQeOX0%2BtTsc7iUcjcF6Z5o8RXpnYfopptVZ3W9dDvWxWZUx8&X-Amz-Signature=f22d7f3a6d843820cc652467820ca57e99730f12a75081fdea9280582f1f8e36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGN4O6VQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIDcfVAyGMdMcO9u9uI1dNQTee3WRj8zJjnAXXLxTHIJQAiEA%2ByPn6sdvjZ7AyoIlAzrd0SVbVaWeRHmmHNvWt%2BahHsQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSmnvD0EKjxnLyMsSrcA5GWZbG7RtivndmwwIyK9bhLu8xNZoBaQn%2BQyz7%2Fkk0OJpqFahJHWc6g%2BzUMFd490YJO5r1OHkdspGJb8KEf1zl0Oqmy2wWJ0JEFISFki2SLztMWdX6wqV9%2FS3CZeDRlz5sxtlaBk8E4QV7%2FKQu3otAD8MiRlPhib5YYS9BWCGTSGnSFMvzng7RBySSFDBAWtPPzekYIAYUGuMA7uv%2BqgiABlKc14Zr1ie9QFE69kqfWRAQ9uNURypwDXf4hW7WbGmCB0ptRCabVENxEfEpRQAUrkMVugmPLtymWksgGu4LGjaWmqKGUdY1rSnuJj%2FaqXK1n9Zer7nkLPthXgS2uXHcJVNeCl4xDLr08eoapP%2BNt2J6CmU3nucSnrO7Eb5VUSIrpwv%2BmJ%2B%2BNz3CuAK8MIZ%2BWxYHn7YjSNGFe0XF0kXAR9NfNt2Pd8fQ%2BVPCW6J741kRuZFVz5tecKhGpt7%2Fb%2FUcq6xq7BYvvlYQdG%2FhZyMNyDhR5XdHZC6nNBiMLkx%2F5yUQJwemmvBwxS2nzMP4kVDZP%2BF4xTBVBIsYJA%2B9dUpmtIHWk%2B4H4wbRGTDHR1l9x69hMHdUhorNSQCQfZBs%2Fc4FRVkskOsUlBAtJGn3q721R%2BrjLX47TAoFYk%2FRmML3Ku74GOqUBYWBydo9hXo43Cgsho7oUYs1Mt0D87p5IYv8h2VfpSJ4hcHsxLFjEYr1OfDUAOzTBhdEk%2FLvV2QkeeqTvtV69ek4rPT33LmdYLLP8n1AZ7IT2ktWS09EJJAcb2OVgZz%2BevbCdQ6jdodY%2BY4%2B0tINFui2alMqoiRX2wKnQJCv%2FwtXpYQeOX0%2BtTsc7iUcjcF6Z5o8RXpnYfopptVZ3W9dDvWxWZUx8&X-Amz-Signature=3f2363dd675dbf1d7e5d83ec18842643d58bf6d2fe332bfe1d70036d345145af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
