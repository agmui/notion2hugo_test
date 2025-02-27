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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7VHK63%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDh3tayXz69dL1CQ0zSb%2FTPpuM3cJhObXH16oBJ55%2BC0AiEAgNFLw1vA9dfBf21fJoChe75AVeZ%2BPA8Ycc0xbtmyMzsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCCVGvRq%2B8%2BwscgvJyrcA9gX1AptGYnQFCqg8p3YWFJzERk1K5KlmY6dP6dTPqIxRxJxHWC7ZaGlQ1%2B6UCWr2BA6QDQkwIbG2cJRfvErFnhw7%2BVWjFGBCY%2F9reKYDQZXBPWoI4BT8vhXwJTptNae7%2BKjou%2BlwxYwZDEZr3X%2FiQ1ueedySxSDgel%2F0A71DHDT395Ae0%2FjUZrNNuz3Mb1Ay29hSrIkAM9dbEv%2Bu6ON44aaEsuZ9QrdCNKlzNBF%2BAn88%2F%2B5%2B9FNm3I8iWvS%2BSlJP40McWGS9jO%2F5xFMB4gC6NJG7d0ooqor%2B3QXT1k8g72%2BA6Cu5F8IlqOfqd3yY84MaI32%2B6sgCmoct6cKMXiQ4QDcCcQT3zjyr2c6%2B1aKp3h950G8%2B7kopijP4GRFX%2BsZds%2FqM%2Bq8KqrZ8f6XYszUifUklaeVrajG1Ng5Q279T6oFNdJd3NvVnVEPEypME5G9E23XDtOfSu6LuAa%2BfKX1GgHjdkdYzxuaURHxW6frYyQyIkm1jV61blGzUJQJkAOsnr21Xn4wrrbYNMuO%2Fhn8GNdZaIAI2R7W0mG3bdcq6PzdbpALfH1K9xVOYgRWrdTgv6E7ya2%2FH27Y%2FvPnKlyynakMASIq6%2FgYgsUMnfJFkIRLhhfGKGSjlzlrP62WMKOy%2F70GOqUBFChsd5Ds7r2z5aVbD4oE1%2BcKxNr3Pn0u3X2m8uNVXj%2BsSMqlx9Qlnc96%2FsqN%2Fuv20Ji051CjAy2x4UQO5btei%2FFh9MPfL%2BIuG0OLe6PuoQx1yg5j081xzjHIQg%2FsBAsm%2B3ReLfDGwqsefyLewRnDplIEwFyhB%2BMYgbj9fQh%2FHJXrRcPgmcahrb%2B1uHdwz3P0UDCMz60rkCt%2BCNPSreIKmB9ZYz7f&X-Amz-Signature=c4528ea53459a04451f94dc23f3b953b02b50d185811744f53742a7dc8207f16&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7VHK63%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDh3tayXz69dL1CQ0zSb%2FTPpuM3cJhObXH16oBJ55%2BC0AiEAgNFLw1vA9dfBf21fJoChe75AVeZ%2BPA8Ycc0xbtmyMzsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCCVGvRq%2B8%2BwscgvJyrcA9gX1AptGYnQFCqg8p3YWFJzERk1K5KlmY6dP6dTPqIxRxJxHWC7ZaGlQ1%2B6UCWr2BA6QDQkwIbG2cJRfvErFnhw7%2BVWjFGBCY%2F9reKYDQZXBPWoI4BT8vhXwJTptNae7%2BKjou%2BlwxYwZDEZr3X%2FiQ1ueedySxSDgel%2F0A71DHDT395Ae0%2FjUZrNNuz3Mb1Ay29hSrIkAM9dbEv%2Bu6ON44aaEsuZ9QrdCNKlzNBF%2BAn88%2F%2B5%2B9FNm3I8iWvS%2BSlJP40McWGS9jO%2F5xFMB4gC6NJG7d0ooqor%2B3QXT1k8g72%2BA6Cu5F8IlqOfqd3yY84MaI32%2B6sgCmoct6cKMXiQ4QDcCcQT3zjyr2c6%2B1aKp3h950G8%2B7kopijP4GRFX%2BsZds%2FqM%2Bq8KqrZ8f6XYszUifUklaeVrajG1Ng5Q279T6oFNdJd3NvVnVEPEypME5G9E23XDtOfSu6LuAa%2BfKX1GgHjdkdYzxuaURHxW6frYyQyIkm1jV61blGzUJQJkAOsnr21Xn4wrrbYNMuO%2Fhn8GNdZaIAI2R7W0mG3bdcq6PzdbpALfH1K9xVOYgRWrdTgv6E7ya2%2FH27Y%2FvPnKlyynakMASIq6%2FgYgsUMnfJFkIRLhhfGKGSjlzlrP62WMKOy%2F70GOqUBFChsd5Ds7r2z5aVbD4oE1%2BcKxNr3Pn0u3X2m8uNVXj%2BsSMqlx9Qlnc96%2FsqN%2Fuv20Ji051CjAy2x4UQO5btei%2FFh9MPfL%2BIuG0OLe6PuoQx1yg5j081xzjHIQg%2FsBAsm%2B3ReLfDGwqsefyLewRnDplIEwFyhB%2BMYgbj9fQh%2FHJXrRcPgmcahrb%2B1uHdwz3P0UDCMz60rkCt%2BCNPSreIKmB9ZYz7f&X-Amz-Signature=4c8ce978a5780487a91554a3f04c90e24499388284db1d39a3168b0bb9a42519&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7VHK63%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDh3tayXz69dL1CQ0zSb%2FTPpuM3cJhObXH16oBJ55%2BC0AiEAgNFLw1vA9dfBf21fJoChe75AVeZ%2BPA8Ycc0xbtmyMzsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCCVGvRq%2B8%2BwscgvJyrcA9gX1AptGYnQFCqg8p3YWFJzERk1K5KlmY6dP6dTPqIxRxJxHWC7ZaGlQ1%2B6UCWr2BA6QDQkwIbG2cJRfvErFnhw7%2BVWjFGBCY%2F9reKYDQZXBPWoI4BT8vhXwJTptNae7%2BKjou%2BlwxYwZDEZr3X%2FiQ1ueedySxSDgel%2F0A71DHDT395Ae0%2FjUZrNNuz3Mb1Ay29hSrIkAM9dbEv%2Bu6ON44aaEsuZ9QrdCNKlzNBF%2BAn88%2F%2B5%2B9FNm3I8iWvS%2BSlJP40McWGS9jO%2F5xFMB4gC6NJG7d0ooqor%2B3QXT1k8g72%2BA6Cu5F8IlqOfqd3yY84MaI32%2B6sgCmoct6cKMXiQ4QDcCcQT3zjyr2c6%2B1aKp3h950G8%2B7kopijP4GRFX%2BsZds%2FqM%2Bq8KqrZ8f6XYszUifUklaeVrajG1Ng5Q279T6oFNdJd3NvVnVEPEypME5G9E23XDtOfSu6LuAa%2BfKX1GgHjdkdYzxuaURHxW6frYyQyIkm1jV61blGzUJQJkAOsnr21Xn4wrrbYNMuO%2Fhn8GNdZaIAI2R7W0mG3bdcq6PzdbpALfH1K9xVOYgRWrdTgv6E7ya2%2FH27Y%2FvPnKlyynakMASIq6%2FgYgsUMnfJFkIRLhhfGKGSjlzlrP62WMKOy%2F70GOqUBFChsd5Ds7r2z5aVbD4oE1%2BcKxNr3Pn0u3X2m8uNVXj%2BsSMqlx9Qlnc96%2FsqN%2Fuv20Ji051CjAy2x4UQO5btei%2FFh9MPfL%2BIuG0OLe6PuoQx1yg5j081xzjHIQg%2FsBAsm%2B3ReLfDGwqsefyLewRnDplIEwFyhB%2BMYgbj9fQh%2FHJXrRcPgmcahrb%2B1uHdwz3P0UDCMz60rkCt%2BCNPSreIKmB9ZYz7f&X-Amz-Signature=c1792cf2c8e6b914ea5db540e6e3cf0667dd4824be35d63160f345736cf3f226&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
