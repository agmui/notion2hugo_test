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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOBKXY3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgH7xj32CPBSzC32PqDVs14E20bW8mk9OTZEgX0kku7AiEA2xR%2F9u1511wj4PGopTfSQh9kg%2Fei3vN8BV95ktOWahMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMe5Vw7w5PAXm82JircAwLR759JqR7NqAqA1tbgLI2WBVKCCs5jrHel4RPVOTxdcpMVhOm%2BNoiHOHpNFIc4naM1yS7YlxNjVmITTNfaP1sju%2FU%2B5%2FXGwuJ1PGoCvL7HP1hxRHev7rzNMJdUyuyih%2FCPheGbx38zL4Zgzv6mT5vtqBQgLgOWvt8WgCcntnYYgIWXKCPUKKRixeUfIl8e8QAgfFvrW1NM0mX8CGbzVsBWcUvS%2FQm0mjBnAu3WsEsUtUmKiyVPXdcDaSgJ4KpaHIY56ou18nKmrJll3fx%2Fd2EohjU3OqVdwn5BGuvP8UV9UOlWeQu7vRgTQ6uBjCnqvmM5mwgoc1cfurVxmGXXFPmUzqyG0IQLawxIop3%2FS5rMuMjoRBW28oc0J%2Buqb0chfN1TIvpIISpdaspY9IcoKK%2FGm8xiXXpaz2voYSyQECcWVy%2BER8nf157EkiL7sBFLj6F0Ui8%2FYP%2B17Y6079kg7%2FBIizA%2BCFUf0JImkntL7S%2Bg9a8Ev1c%2BAWue4OpSY2cGuPdRHBzGnv6lkI1G6tFXJKwhqoJY9Hn3EttqhO%2FdkVvBKkmZhmxjLPh4GuKnJhDqy0V0WZchmOv6eZ%2BZgLbR3wVxbjtFW1nOOEkAUJnlEtYXRuC%2BGTKfHpAKeVQgMPfO%2FMAGOqUB7w96A2i4pWxridP9yglvXHSFgzwh1fs0wxcHQ7UCAMFAOPlqhuWGFIPEJzKjWkq4Qzjhg%2FK6Q4Lk0xBuxRenSvxbBKs9rLfILx4Yn8tNmFxl0LCfwKJpK%2FRcMcjUm4KJKtZ6i6LnZaDo1DJEu3khhkNlG3m4EqeKxSavWnQYUUcv57XY2tUw1kgTqbMHv7Ew5tHa6u1ndGSYp2ITWQBhmSe4wqB2&X-Amz-Signature=1c4d368ac990a693146f13c21861efe166f2c5a7c41c61df7c7160bd6a315911&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOBKXY3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgH7xj32CPBSzC32PqDVs14E20bW8mk9OTZEgX0kku7AiEA2xR%2F9u1511wj4PGopTfSQh9kg%2Fei3vN8BV95ktOWahMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMe5Vw7w5PAXm82JircAwLR759JqR7NqAqA1tbgLI2WBVKCCs5jrHel4RPVOTxdcpMVhOm%2BNoiHOHpNFIc4naM1yS7YlxNjVmITTNfaP1sju%2FU%2B5%2FXGwuJ1PGoCvL7HP1hxRHev7rzNMJdUyuyih%2FCPheGbx38zL4Zgzv6mT5vtqBQgLgOWvt8WgCcntnYYgIWXKCPUKKRixeUfIl8e8QAgfFvrW1NM0mX8CGbzVsBWcUvS%2FQm0mjBnAu3WsEsUtUmKiyVPXdcDaSgJ4KpaHIY56ou18nKmrJll3fx%2Fd2EohjU3OqVdwn5BGuvP8UV9UOlWeQu7vRgTQ6uBjCnqvmM5mwgoc1cfurVxmGXXFPmUzqyG0IQLawxIop3%2FS5rMuMjoRBW28oc0J%2Buqb0chfN1TIvpIISpdaspY9IcoKK%2FGm8xiXXpaz2voYSyQECcWVy%2BER8nf157EkiL7sBFLj6F0Ui8%2FYP%2B17Y6079kg7%2FBIizA%2BCFUf0JImkntL7S%2Bg9a8Ev1c%2BAWue4OpSY2cGuPdRHBzGnv6lkI1G6tFXJKwhqoJY9Hn3EttqhO%2FdkVvBKkmZhmxjLPh4GuKnJhDqy0V0WZchmOv6eZ%2BZgLbR3wVxbjtFW1nOOEkAUJnlEtYXRuC%2BGTKfHpAKeVQgMPfO%2FMAGOqUB7w96A2i4pWxridP9yglvXHSFgzwh1fs0wxcHQ7UCAMFAOPlqhuWGFIPEJzKjWkq4Qzjhg%2FK6Q4Lk0xBuxRenSvxbBKs9rLfILx4Yn8tNmFxl0LCfwKJpK%2FRcMcjUm4KJKtZ6i6LnZaDo1DJEu3khhkNlG3m4EqeKxSavWnQYUUcv57XY2tUw1kgTqbMHv7Ew5tHa6u1ndGSYp2ITWQBhmSe4wqB2&X-Amz-Signature=c7d4785f1b3734a60bea144ac35e5a563c2b8fc04091dfe2e19b7e41c8d4a3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOBKXY3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgH7xj32CPBSzC32PqDVs14E20bW8mk9OTZEgX0kku7AiEA2xR%2F9u1511wj4PGopTfSQh9kg%2Fei3vN8BV95ktOWahMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMe5Vw7w5PAXm82JircAwLR759JqR7NqAqA1tbgLI2WBVKCCs5jrHel4RPVOTxdcpMVhOm%2BNoiHOHpNFIc4naM1yS7YlxNjVmITTNfaP1sju%2FU%2B5%2FXGwuJ1PGoCvL7HP1hxRHev7rzNMJdUyuyih%2FCPheGbx38zL4Zgzv6mT5vtqBQgLgOWvt8WgCcntnYYgIWXKCPUKKRixeUfIl8e8QAgfFvrW1NM0mX8CGbzVsBWcUvS%2FQm0mjBnAu3WsEsUtUmKiyVPXdcDaSgJ4KpaHIY56ou18nKmrJll3fx%2Fd2EohjU3OqVdwn5BGuvP8UV9UOlWeQu7vRgTQ6uBjCnqvmM5mwgoc1cfurVxmGXXFPmUzqyG0IQLawxIop3%2FS5rMuMjoRBW28oc0J%2Buqb0chfN1TIvpIISpdaspY9IcoKK%2FGm8xiXXpaz2voYSyQECcWVy%2BER8nf157EkiL7sBFLj6F0Ui8%2FYP%2B17Y6079kg7%2FBIizA%2BCFUf0JImkntL7S%2Bg9a8Ev1c%2BAWue4OpSY2cGuPdRHBzGnv6lkI1G6tFXJKwhqoJY9Hn3EttqhO%2FdkVvBKkmZhmxjLPh4GuKnJhDqy0V0WZchmOv6eZ%2BZgLbR3wVxbjtFW1nOOEkAUJnlEtYXRuC%2BGTKfHpAKeVQgMPfO%2FMAGOqUB7w96A2i4pWxridP9yglvXHSFgzwh1fs0wxcHQ7UCAMFAOPlqhuWGFIPEJzKjWkq4Qzjhg%2FK6Q4Lk0xBuxRenSvxbBKs9rLfILx4Yn8tNmFxl0LCfwKJpK%2FRcMcjUm4KJKtZ6i6LnZaDo1DJEu3khhkNlG3m4EqeKxSavWnQYUUcv57XY2tUw1kgTqbMHv7Ew5tHa6u1ndGSYp2ITWQBhmSe4wqB2&X-Amz-Signature=6a2e563c2ab3eb0735696cb055914d7a3a0dfbfcc4a2beccbcf82c62f14f5a53&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
