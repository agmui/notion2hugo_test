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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BB7Y7C%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDYGwy3QiFifDetxsxncrJ4uNrf69YKHQWQzsFdnac89AIhAPtsaBCFI1iID%2BtgaZ9zPYHzCb2PGMvd4R2OG70%2FkJNRKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkAsjz217oORVHfMcq3APr3vmDD39NZahH51sxPKgcjWYO91z%2BhoBwuour4gdt57%2BSvL%2F516tZQuSvtIY78tPr4v02eryIG48rXxaan8kRspsEZkOSroYHF0MC2ZjC7XkGPIlABe%2F%2B0%2BWMzJcF6WrZTOV878Xm9G9MTFuadaJHBY9FNy9x26rcnbFOMSm%2FnRkz0Bc%2B%2BVgPxTJUCopdwxcoFUgY3u5zlkPU8pjFj2YIlZ3TG%2FUXJXzKQWzTnEoCzqWP0MQ%2FxaQR3wpQxBTO5ySqK3PUMnjb48pnAI7Mz8pxK6eUYpCsLRlVgd%2BS6H4cD9h%2BGeV%2Fp4BCCrIUhT%2BnjI7%2FvPavyZdqCIm27Tzv2Cnb89QQEPcwRNv0q4ywtIpFw8pg83i0k%2FN%2BTC7%2FF4qqJgezY2z7%2FVUi%2BpK3QqsQCa9cjDr769Lczm9iqckizr4aRaJMzjmrKfZXQarPP1bFJTy80RAgKu3r21G7P7v5IC8LhXbNrCP2o%2BF5Lrcw1LeBF1zPzfNtRBm89xbPMVTy4kc0Thj2z%2FSVF2cL2OtF08ZVF%2B2UmBAxUyORpD2KnzIqWnNRysidLXgfOzbBn60G8rzkLtesB3BzGAfpuKJcXkxzZrv7Sq8MPuGUnU1sqS9eeJ46hoXHo0tQ5jC%2FBzCkhNzABjqkAetEtr8p8R2BZ1qFrSMui22QE%2BMr%2FoaYOSyZSHTF%2FOliafeIu%2Fm6iFjvjgFrixzWfmAdraeMtm6a%2BSKG7ryH%2FrFz2%2FgFeAjW%2FZQi%2BhJTB4ABmiEbcx8QUJRBJXmO7n3wWPzQOq%2BQK%2FwOS926dCyBgJlfbYJC52aWEpB0QAdaC31e7kivK%2Bxs36oby%2F5ou%2F1ba33R1P%2FLDCKQ0mO7woMWMWm7AXPC&X-Amz-Signature=a24af4fb89c8a47f5248228a4e058867a6a15d41ace3bcf787b97e5e1a1b9a50&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BB7Y7C%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDYGwy3QiFifDetxsxncrJ4uNrf69YKHQWQzsFdnac89AIhAPtsaBCFI1iID%2BtgaZ9zPYHzCb2PGMvd4R2OG70%2FkJNRKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkAsjz217oORVHfMcq3APr3vmDD39NZahH51sxPKgcjWYO91z%2BhoBwuour4gdt57%2BSvL%2F516tZQuSvtIY78tPr4v02eryIG48rXxaan8kRspsEZkOSroYHF0MC2ZjC7XkGPIlABe%2F%2B0%2BWMzJcF6WrZTOV878Xm9G9MTFuadaJHBY9FNy9x26rcnbFOMSm%2FnRkz0Bc%2B%2BVgPxTJUCopdwxcoFUgY3u5zlkPU8pjFj2YIlZ3TG%2FUXJXzKQWzTnEoCzqWP0MQ%2FxaQR3wpQxBTO5ySqK3PUMnjb48pnAI7Mz8pxK6eUYpCsLRlVgd%2BS6H4cD9h%2BGeV%2Fp4BCCrIUhT%2BnjI7%2FvPavyZdqCIm27Tzv2Cnb89QQEPcwRNv0q4ywtIpFw8pg83i0k%2FN%2BTC7%2FF4qqJgezY2z7%2FVUi%2BpK3QqsQCa9cjDr769Lczm9iqckizr4aRaJMzjmrKfZXQarPP1bFJTy80RAgKu3r21G7P7v5IC8LhXbNrCP2o%2BF5Lrcw1LeBF1zPzfNtRBm89xbPMVTy4kc0Thj2z%2FSVF2cL2OtF08ZVF%2B2UmBAxUyORpD2KnzIqWnNRysidLXgfOzbBn60G8rzkLtesB3BzGAfpuKJcXkxzZrv7Sq8MPuGUnU1sqS9eeJ46hoXHo0tQ5jC%2FBzCkhNzABjqkAetEtr8p8R2BZ1qFrSMui22QE%2BMr%2FoaYOSyZSHTF%2FOliafeIu%2Fm6iFjvjgFrixzWfmAdraeMtm6a%2BSKG7ryH%2FrFz2%2FgFeAjW%2FZQi%2BhJTB4ABmiEbcx8QUJRBJXmO7n3wWPzQOq%2BQK%2FwOS926dCyBgJlfbYJC52aWEpB0QAdaC31e7kivK%2Bxs36oby%2F5ou%2F1ba33R1P%2FLDCKQ0mO7woMWMWm7AXPC&X-Amz-Signature=a13d29df101532d09c5d929e4eab828a3778d0e9e69aa79a81965b6f7f3a820f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BB7Y7C%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDYGwy3QiFifDetxsxncrJ4uNrf69YKHQWQzsFdnac89AIhAPtsaBCFI1iID%2BtgaZ9zPYHzCb2PGMvd4R2OG70%2FkJNRKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkAsjz217oORVHfMcq3APr3vmDD39NZahH51sxPKgcjWYO91z%2BhoBwuour4gdt57%2BSvL%2F516tZQuSvtIY78tPr4v02eryIG48rXxaan8kRspsEZkOSroYHF0MC2ZjC7XkGPIlABe%2F%2B0%2BWMzJcF6WrZTOV878Xm9G9MTFuadaJHBY9FNy9x26rcnbFOMSm%2FnRkz0Bc%2B%2BVgPxTJUCopdwxcoFUgY3u5zlkPU8pjFj2YIlZ3TG%2FUXJXzKQWzTnEoCzqWP0MQ%2FxaQR3wpQxBTO5ySqK3PUMnjb48pnAI7Mz8pxK6eUYpCsLRlVgd%2BS6H4cD9h%2BGeV%2Fp4BCCrIUhT%2BnjI7%2FvPavyZdqCIm27Tzv2Cnb89QQEPcwRNv0q4ywtIpFw8pg83i0k%2FN%2BTC7%2FF4qqJgezY2z7%2FVUi%2BpK3QqsQCa9cjDr769Lczm9iqckizr4aRaJMzjmrKfZXQarPP1bFJTy80RAgKu3r21G7P7v5IC8LhXbNrCP2o%2BF5Lrcw1LeBF1zPzfNtRBm89xbPMVTy4kc0Thj2z%2FSVF2cL2OtF08ZVF%2B2UmBAxUyORpD2KnzIqWnNRysidLXgfOzbBn60G8rzkLtesB3BzGAfpuKJcXkxzZrv7Sq8MPuGUnU1sqS9eeJ46hoXHo0tQ5jC%2FBzCkhNzABjqkAetEtr8p8R2BZ1qFrSMui22QE%2BMr%2FoaYOSyZSHTF%2FOliafeIu%2Fm6iFjvjgFrixzWfmAdraeMtm6a%2BSKG7ryH%2FrFz2%2FgFeAjW%2FZQi%2BhJTB4ABmiEbcx8QUJRBJXmO7n3wWPzQOq%2BQK%2FwOS926dCyBgJlfbYJC52aWEpB0QAdaC31e7kivK%2Bxs36oby%2F5ou%2F1ba33R1P%2FLDCKQ0mO7woMWMWm7AXPC&X-Amz-Signature=80c472f4192cc44d336fe58d371c328038923274d9adf5f489b131d65a27ce0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
