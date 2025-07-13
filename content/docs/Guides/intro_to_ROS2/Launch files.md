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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYXC6AO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBLv3iVUWCxOHz%2FiR8%2F2NjVn6WEoRT5PPo5DibRpw309AiBdoR47eBUIKaf9xQuNkkQt5wRxhdI7WodISW2eYa82fCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqGhpV%2BJ1c1cD4WbOKtwDB9ADFtkS0FRIs414v5CcKVbT%2FIWZDeQOQatbsBkZXrcHB5Wyikm8LNPZeLf8Cl9Vi25UQ6RfPNCylJ3zKnRN3wE2OqdICy2pOtV7YoIzZ7jA4QVJAwihZscfLvd68qu8tUBXzwGlbuaF1bJXxKzVAlxxDZg8H65pZzCtwfcVPGV0ksfpqA%2BXztKuoavPOoz8pulL6wj1zYl1dkwYepa18hMy%2B%2BgQnzLiiPcz7vcfgZdNOQZKlHuYzs2bO0hYFYNTj672oFhQPwgqOxdkaDYsj%2FIGh8J%2FGwQ6nGIhzaIhHmHFfblQle%2BaLyHWvILekM%2B87EqU0mZyJEcPXxOEBL5GhmFNd3302xh1FVxiLx8IUjmlEKb%2FjFOQAkh1p0BFKBASNlYyYirebny6bJikWJRLNdMqTRcriD7k5gzzGXRp4dVb0hALD6J87u6oz6Vey8hXpB0Rh1irKin%2BwIPSAoy5%2BHL8DHCfEr81WOyII02RxZ7jnWfIE%2F%2Bm%2BG%2F6X5KFiHwtJOb3r%2FlGIC0fY1jriF%2BdWCGQbKbMclc8PxVnCxJsH91jCZuP7xDUjQFboZVBJ5PlRbKfQ9%2F9fFkZcFU9aJSwtefzGoQIHMq04VHUoYh44UzFewnFRkXBjugaALEwjJDQwwY6pgG8divhCPqo8vO4KHOWwAQCcH1DwiDvnedxfq5krWSSH8dsD19LTp%2BI%2FLXCAn%2B%2FFeWbQNxlJyHB8gqon2Me531w54HWUU%2B0i61BcmhdUXbe%2FcJv6xx1rkjla1fG%2FQEHytAkqk4QQcfBlV8ZTLQngjVLbyNXhj9lufgCUqM8y55RLoa1xjoHfTGiSPR%2FtOFkhY6esTNDGm11ue3kPrR8z1i0L527XNq3&X-Amz-Signature=8fe40ac0bb2bad271bb7b38dea1e5a3c536e809a2baffc347a5f7edf7b516725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYXC6AO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBLv3iVUWCxOHz%2FiR8%2F2NjVn6WEoRT5PPo5DibRpw309AiBdoR47eBUIKaf9xQuNkkQt5wRxhdI7WodISW2eYa82fCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqGhpV%2BJ1c1cD4WbOKtwDB9ADFtkS0FRIs414v5CcKVbT%2FIWZDeQOQatbsBkZXrcHB5Wyikm8LNPZeLf8Cl9Vi25UQ6RfPNCylJ3zKnRN3wE2OqdICy2pOtV7YoIzZ7jA4QVJAwihZscfLvd68qu8tUBXzwGlbuaF1bJXxKzVAlxxDZg8H65pZzCtwfcVPGV0ksfpqA%2BXztKuoavPOoz8pulL6wj1zYl1dkwYepa18hMy%2B%2BgQnzLiiPcz7vcfgZdNOQZKlHuYzs2bO0hYFYNTj672oFhQPwgqOxdkaDYsj%2FIGh8J%2FGwQ6nGIhzaIhHmHFfblQle%2BaLyHWvILekM%2B87EqU0mZyJEcPXxOEBL5GhmFNd3302xh1FVxiLx8IUjmlEKb%2FjFOQAkh1p0BFKBASNlYyYirebny6bJikWJRLNdMqTRcriD7k5gzzGXRp4dVb0hALD6J87u6oz6Vey8hXpB0Rh1irKin%2BwIPSAoy5%2BHL8DHCfEr81WOyII02RxZ7jnWfIE%2F%2Bm%2BG%2F6X5KFiHwtJOb3r%2FlGIC0fY1jriF%2BdWCGQbKbMclc8PxVnCxJsH91jCZuP7xDUjQFboZVBJ5PlRbKfQ9%2F9fFkZcFU9aJSwtefzGoQIHMq04VHUoYh44UzFewnFRkXBjugaALEwjJDQwwY6pgG8divhCPqo8vO4KHOWwAQCcH1DwiDvnedxfq5krWSSH8dsD19LTp%2BI%2FLXCAn%2B%2FFeWbQNxlJyHB8gqon2Me531w54HWUU%2B0i61BcmhdUXbe%2FcJv6xx1rkjla1fG%2FQEHytAkqk4QQcfBlV8ZTLQngjVLbyNXhj9lufgCUqM8y55RLoa1xjoHfTGiSPR%2FtOFkhY6esTNDGm11ue3kPrR8z1i0L527XNq3&X-Amz-Signature=80dea50eb7b9bb9baef0c359b0e6c0434fd25e9766091c59f263d8f2601ad0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYXC6AO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBLv3iVUWCxOHz%2FiR8%2F2NjVn6WEoRT5PPo5DibRpw309AiBdoR47eBUIKaf9xQuNkkQt5wRxhdI7WodISW2eYa82fCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqGhpV%2BJ1c1cD4WbOKtwDB9ADFtkS0FRIs414v5CcKVbT%2FIWZDeQOQatbsBkZXrcHB5Wyikm8LNPZeLf8Cl9Vi25UQ6RfPNCylJ3zKnRN3wE2OqdICy2pOtV7YoIzZ7jA4QVJAwihZscfLvd68qu8tUBXzwGlbuaF1bJXxKzVAlxxDZg8H65pZzCtwfcVPGV0ksfpqA%2BXztKuoavPOoz8pulL6wj1zYl1dkwYepa18hMy%2B%2BgQnzLiiPcz7vcfgZdNOQZKlHuYzs2bO0hYFYNTj672oFhQPwgqOxdkaDYsj%2FIGh8J%2FGwQ6nGIhzaIhHmHFfblQle%2BaLyHWvILekM%2B87EqU0mZyJEcPXxOEBL5GhmFNd3302xh1FVxiLx8IUjmlEKb%2FjFOQAkh1p0BFKBASNlYyYirebny6bJikWJRLNdMqTRcriD7k5gzzGXRp4dVb0hALD6J87u6oz6Vey8hXpB0Rh1irKin%2BwIPSAoy5%2BHL8DHCfEr81WOyII02RxZ7jnWfIE%2F%2Bm%2BG%2F6X5KFiHwtJOb3r%2FlGIC0fY1jriF%2BdWCGQbKbMclc8PxVnCxJsH91jCZuP7xDUjQFboZVBJ5PlRbKfQ9%2F9fFkZcFU9aJSwtefzGoQIHMq04VHUoYh44UzFewnFRkXBjugaALEwjJDQwwY6pgG8divhCPqo8vO4KHOWwAQCcH1DwiDvnedxfq5krWSSH8dsD19LTp%2BI%2FLXCAn%2B%2FFeWbQNxlJyHB8gqon2Me531w54HWUU%2B0i61BcmhdUXbe%2FcJv6xx1rkjla1fG%2FQEHytAkqk4QQcfBlV8ZTLQngjVLbyNXhj9lufgCUqM8y55RLoa1xjoHfTGiSPR%2FtOFkhY6esTNDGm11ue3kPrR8z1i0L527XNq3&X-Amz-Signature=2ea6f94571d9ecd66550c2d56db8c5ccb58088222438c6bd62d9fdc9c8f00b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
