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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RASOKPK6%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC9BZbwJJWqs0eEWXk5jiyh%2B3KkCKUif0fT5TVxV%2BpTAiAaoQ6gIeVr33Ka4kzCttYetqgabSq8cZArqvCUekjj5iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDubg65%2BGHizrAeX%2FKtwDlyUM7zk41MmbHM%2Bzj2oce%2BoV0Pd2f1RRjmFV%2BcBQxJPCPmIElCaDwc2UfCBhXXiLKDN96NmYJLmWxGlAlLfH8hkzpixRry5VjSXKhbmiJPEMQs0dr%2Bn1qSJg22kj7yEVyQhx7Ef3SbR4r83BjNY031t3VaZxdHks3QDuF%2F9Pc6FDXADwlNkObxsBnVHY%2FXSilA37Y83p%2BsYep9iXAmMpYiuPCeBBHMVm4s6op7HhhM0c7yuLdvAwuFKepOl8HIaW5CN7pSia%2Bksk9usdQNuIkgbE1%2Fsdj1u0hbFnXOCiHngmca9czuN7fcdBKcsY4EeS6QEMc5MAF%2F012C%2BSwj4ZHzy0QrS86IdZNviFwVnP7oe2w20yIFr8u81haDAx6dJQqtfRWalqN%2FsywHrwc6w3XeMFCQfXIciiFikODSc%2BBUQ3vFBTqp%2B%2BA5XNgaK98wyDjiU%2F6c%2B8W3b44cNlxysmOCngaFb0q8%2FeluAnmN77qlXSYWXPXuSjPg%2FQkeCcOJyWRxytmNb%2FUdkPE4RdzNkfA%2B8xqcAXMD2BnpFgi%2FErWNWHYq%2BCiw43HOz7n44JjgdRbxt0N9MRdXxHpTwRs4MCbZCc32%2B4zmIf1z3apxws4zqqEqmSmxqddVMMgPsw2pjvyAY6pgEmLxfrwadMb%2FTIiZRtWCx2VeEC1K%2B8fY4gCp7GIpdX%2FYGuXNzMBpLvT7lwUxCUjBJAkLVQ3a%2BEzbQGdGZtKayuglCFl6b8XPHo0ciGQjSC7XxlJz487IvvVO0BPGPHJllAZBy5MOGWgJSSweknuhq0Fct4MqCT7mc8hZwOZXQ6myzuljA9%2FfeNHo0aznfP3cifHeoqSTJdgcvc80n3TbUn2xo90cyg&X-Amz-Signature=5b8e010fe4a4e7123e122148860231be27a6203f98dde8ec6f5ecc6efd8af87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RASOKPK6%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC9BZbwJJWqs0eEWXk5jiyh%2B3KkCKUif0fT5TVxV%2BpTAiAaoQ6gIeVr33Ka4kzCttYetqgabSq8cZArqvCUekjj5iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDubg65%2BGHizrAeX%2FKtwDlyUM7zk41MmbHM%2Bzj2oce%2BoV0Pd2f1RRjmFV%2BcBQxJPCPmIElCaDwc2UfCBhXXiLKDN96NmYJLmWxGlAlLfH8hkzpixRry5VjSXKhbmiJPEMQs0dr%2Bn1qSJg22kj7yEVyQhx7Ef3SbR4r83BjNY031t3VaZxdHks3QDuF%2F9Pc6FDXADwlNkObxsBnVHY%2FXSilA37Y83p%2BsYep9iXAmMpYiuPCeBBHMVm4s6op7HhhM0c7yuLdvAwuFKepOl8HIaW5CN7pSia%2Bksk9usdQNuIkgbE1%2Fsdj1u0hbFnXOCiHngmca9czuN7fcdBKcsY4EeS6QEMc5MAF%2F012C%2BSwj4ZHzy0QrS86IdZNviFwVnP7oe2w20yIFr8u81haDAx6dJQqtfRWalqN%2FsywHrwc6w3XeMFCQfXIciiFikODSc%2BBUQ3vFBTqp%2B%2BA5XNgaK98wyDjiU%2F6c%2B8W3b44cNlxysmOCngaFb0q8%2FeluAnmN77qlXSYWXPXuSjPg%2FQkeCcOJyWRxytmNb%2FUdkPE4RdzNkfA%2B8xqcAXMD2BnpFgi%2FErWNWHYq%2BCiw43HOz7n44JjgdRbxt0N9MRdXxHpTwRs4MCbZCc32%2B4zmIf1z3apxws4zqqEqmSmxqddVMMgPsw2pjvyAY6pgEmLxfrwadMb%2FTIiZRtWCx2VeEC1K%2B8fY4gCp7GIpdX%2FYGuXNzMBpLvT7lwUxCUjBJAkLVQ3a%2BEzbQGdGZtKayuglCFl6b8XPHo0ciGQjSC7XxlJz487IvvVO0BPGPHJllAZBy5MOGWgJSSweknuhq0Fct4MqCT7mc8hZwOZXQ6myzuljA9%2FfeNHo0aznfP3cifHeoqSTJdgcvc80n3TbUn2xo90cyg&X-Amz-Signature=4ab2f3a3362fadd429c770c7cecb496af4d07820c556d2046164787750333039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RASOKPK6%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC9BZbwJJWqs0eEWXk5jiyh%2B3KkCKUif0fT5TVxV%2BpTAiAaoQ6gIeVr33Ka4kzCttYetqgabSq8cZArqvCUekjj5iqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDubg65%2BGHizrAeX%2FKtwDlyUM7zk41MmbHM%2Bzj2oce%2BoV0Pd2f1RRjmFV%2BcBQxJPCPmIElCaDwc2UfCBhXXiLKDN96NmYJLmWxGlAlLfH8hkzpixRry5VjSXKhbmiJPEMQs0dr%2Bn1qSJg22kj7yEVyQhx7Ef3SbR4r83BjNY031t3VaZxdHks3QDuF%2F9Pc6FDXADwlNkObxsBnVHY%2FXSilA37Y83p%2BsYep9iXAmMpYiuPCeBBHMVm4s6op7HhhM0c7yuLdvAwuFKepOl8HIaW5CN7pSia%2Bksk9usdQNuIkgbE1%2Fsdj1u0hbFnXOCiHngmca9czuN7fcdBKcsY4EeS6QEMc5MAF%2F012C%2BSwj4ZHzy0QrS86IdZNviFwVnP7oe2w20yIFr8u81haDAx6dJQqtfRWalqN%2FsywHrwc6w3XeMFCQfXIciiFikODSc%2BBUQ3vFBTqp%2B%2BA5XNgaK98wyDjiU%2F6c%2B8W3b44cNlxysmOCngaFb0q8%2FeluAnmN77qlXSYWXPXuSjPg%2FQkeCcOJyWRxytmNb%2FUdkPE4RdzNkfA%2B8xqcAXMD2BnpFgi%2FErWNWHYq%2BCiw43HOz7n44JjgdRbxt0N9MRdXxHpTwRs4MCbZCc32%2B4zmIf1z3apxws4zqqEqmSmxqddVMMgPsw2pjvyAY6pgEmLxfrwadMb%2FTIiZRtWCx2VeEC1K%2B8fY4gCp7GIpdX%2FYGuXNzMBpLvT7lwUxCUjBJAkLVQ3a%2BEzbQGdGZtKayuglCFl6b8XPHo0ciGQjSC7XxlJz487IvvVO0BPGPHJllAZBy5MOGWgJSSweknuhq0Fct4MqCT7mc8hZwOZXQ6myzuljA9%2FfeNHo0aznfP3cifHeoqSTJdgcvc80n3TbUn2xo90cyg&X-Amz-Signature=0e5ee7a27d9a2cbce64acb0c77e1330607fba7e64de75aa432af805484de10f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
