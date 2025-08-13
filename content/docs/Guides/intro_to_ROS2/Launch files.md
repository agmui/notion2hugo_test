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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP5XHOE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5EsGvBB9COYDeo%2B1dtKe2WCIYKS8CUjbjDVxmsGXVxAIhANeMFX9RAXC1I0FrXqMJuHNkDbueA73EV5LMK3jgN5tVKv8DCCoQABoMNjM3NDIzMTgzODA1IgwlYnZ03XFa2s9SPk0q3ANCkjyoNeKPpO5EEB6eU9%2FK1MHqgC4MItUVrtafVd2XSlnVbGMn4Z4%2BjmDQQNx90vo%2FuFrePanAhudB884Uz0qgCiX38dXvB5sTXRLUMLUMeGalvWDjN7wayJ43H9xBWntUTTtno55GpzZAOaS6szUKmmBdLqMFYhEIJi0nj2KljKxGm6fdN4th%2BA0jOU73h7FFcq6FmJWOHKyxBi0WwlgmrFeANh3569wCk4GLqmJcjBXC4jTLv309LhPC5BXIgEkInUSBXyRsP5pSdAI5cU%2Bqcbww8vwu3fcncUtI5NujmVqnSmaJnpxybEQt%2BL7aYCdS6mPEcx2ViX7Gz3aklobDGx%2Bq%2BwisA%2F%2Bn4aRufVTm2rlGglnW8FTxlMmnZy%2ByUfbwOInSLAk8aoQqcJyTojHU%2FVL55IcO7m64HoalZp7zJCX4RDJUbLzBlB7bvou1ekrfDlN8XgnwdjpUGGwuoJ%2BsHQ7hzPGStaZaHxxPBGjggeU8Rn1syuZT4vmLElUgWYfbjM3nS%2FynQxt4UKRV5L%2FEl4KptybVJTxHPUi095SgaX%2B%2FSUsyNyN1g6MHz06P1usDBKzFtU28vgpBzszgGbl3J37QdCQ1pGrRWXqeO%2BXdvzRo0d%2FgeFb%2BvkWY8zC7nvHEBjqkAWQqGu45GwnIcqWFWtzWZDPqzDth4qnl7xMOflUHo8n2r6REF51qZQYzMx9f%2B6HxnmCgd6YGM7l7m5mrb51kg9D9xoOJDUlxELcWAc1K%2BSKgnvbQKlG%2B3izsQyi4oWm4S1cDXM%2BmTo3zfy1QgvviW20%2BSczR1FeJnJxvlU%2FJ6w6wd5kndkl%2FXxqnfJbuiCsgz5jmTCwaVRk%2FcjoDd2%2B0OcBzKOCI&X-Amz-Signature=b894290aa307bb674e6cc2793647391664e820edabc195097fac416ff586a019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP5XHOE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5EsGvBB9COYDeo%2B1dtKe2WCIYKS8CUjbjDVxmsGXVxAIhANeMFX9RAXC1I0FrXqMJuHNkDbueA73EV5LMK3jgN5tVKv8DCCoQABoMNjM3NDIzMTgzODA1IgwlYnZ03XFa2s9SPk0q3ANCkjyoNeKPpO5EEB6eU9%2FK1MHqgC4MItUVrtafVd2XSlnVbGMn4Z4%2BjmDQQNx90vo%2FuFrePanAhudB884Uz0qgCiX38dXvB5sTXRLUMLUMeGalvWDjN7wayJ43H9xBWntUTTtno55GpzZAOaS6szUKmmBdLqMFYhEIJi0nj2KljKxGm6fdN4th%2BA0jOU73h7FFcq6FmJWOHKyxBi0WwlgmrFeANh3569wCk4GLqmJcjBXC4jTLv309LhPC5BXIgEkInUSBXyRsP5pSdAI5cU%2Bqcbww8vwu3fcncUtI5NujmVqnSmaJnpxybEQt%2BL7aYCdS6mPEcx2ViX7Gz3aklobDGx%2Bq%2BwisA%2F%2Bn4aRufVTm2rlGglnW8FTxlMmnZy%2ByUfbwOInSLAk8aoQqcJyTojHU%2FVL55IcO7m64HoalZp7zJCX4RDJUbLzBlB7bvou1ekrfDlN8XgnwdjpUGGwuoJ%2BsHQ7hzPGStaZaHxxPBGjggeU8Rn1syuZT4vmLElUgWYfbjM3nS%2FynQxt4UKRV5L%2FEl4KptybVJTxHPUi095SgaX%2B%2FSUsyNyN1g6MHz06P1usDBKzFtU28vgpBzszgGbl3J37QdCQ1pGrRWXqeO%2BXdvzRo0d%2FgeFb%2BvkWY8zC7nvHEBjqkAWQqGu45GwnIcqWFWtzWZDPqzDth4qnl7xMOflUHo8n2r6REF51qZQYzMx9f%2B6HxnmCgd6YGM7l7m5mrb51kg9D9xoOJDUlxELcWAc1K%2BSKgnvbQKlG%2B3izsQyi4oWm4S1cDXM%2BmTo3zfy1QgvviW20%2BSczR1FeJnJxvlU%2FJ6w6wd5kndkl%2FXxqnfJbuiCsgz5jmTCwaVRk%2FcjoDd2%2B0OcBzKOCI&X-Amz-Signature=bcb9ffd73766c5c4072568a1be70da480c4e9dac55b04ad28f928268bfd9c99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP5XHOE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5EsGvBB9COYDeo%2B1dtKe2WCIYKS8CUjbjDVxmsGXVxAIhANeMFX9RAXC1I0FrXqMJuHNkDbueA73EV5LMK3jgN5tVKv8DCCoQABoMNjM3NDIzMTgzODA1IgwlYnZ03XFa2s9SPk0q3ANCkjyoNeKPpO5EEB6eU9%2FK1MHqgC4MItUVrtafVd2XSlnVbGMn4Z4%2BjmDQQNx90vo%2FuFrePanAhudB884Uz0qgCiX38dXvB5sTXRLUMLUMeGalvWDjN7wayJ43H9xBWntUTTtno55GpzZAOaS6szUKmmBdLqMFYhEIJi0nj2KljKxGm6fdN4th%2BA0jOU73h7FFcq6FmJWOHKyxBi0WwlgmrFeANh3569wCk4GLqmJcjBXC4jTLv309LhPC5BXIgEkInUSBXyRsP5pSdAI5cU%2Bqcbww8vwu3fcncUtI5NujmVqnSmaJnpxybEQt%2BL7aYCdS6mPEcx2ViX7Gz3aklobDGx%2Bq%2BwisA%2F%2Bn4aRufVTm2rlGglnW8FTxlMmnZy%2ByUfbwOInSLAk8aoQqcJyTojHU%2FVL55IcO7m64HoalZp7zJCX4RDJUbLzBlB7bvou1ekrfDlN8XgnwdjpUGGwuoJ%2BsHQ7hzPGStaZaHxxPBGjggeU8Rn1syuZT4vmLElUgWYfbjM3nS%2FynQxt4UKRV5L%2FEl4KptybVJTxHPUi095SgaX%2B%2FSUsyNyN1g6MHz06P1usDBKzFtU28vgpBzszgGbl3J37QdCQ1pGrRWXqeO%2BXdvzRo0d%2FgeFb%2BvkWY8zC7nvHEBjqkAWQqGu45GwnIcqWFWtzWZDPqzDth4qnl7xMOflUHo8n2r6REF51qZQYzMx9f%2B6HxnmCgd6YGM7l7m5mrb51kg9D9xoOJDUlxELcWAc1K%2BSKgnvbQKlG%2B3izsQyi4oWm4S1cDXM%2BmTo3zfy1QgvviW20%2BSczR1FeJnJxvlU%2FJ6w6wd5kndkl%2FXxqnfJbuiCsgz5jmTCwaVRk%2FcjoDd2%2B0OcBzKOCI&X-Amz-Signature=83d248a908b087fdddb756d867d8831d52348f229c42ed41e37e93c8c3b010d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
