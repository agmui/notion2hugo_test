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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIU4WWAO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqtxiv9HodsJQTiACiNiUO0vH9WkBXQpsK%2BmfCmsAiIwIhALKXgQvz2UljEovZf4ts6AIVHireYtqDNhCcecwfs9%2FtKv8DCCkQABoMNjM3NDIzMTgzODA1Igy7HWj8EkL9U%2B0Niswq3ANiFrkJWjZqD8Qo%2F39CBp2XA68bqCfzvrZ5SaYg3ynf2Kka1wVyk02pI9aBITlALF4hcVoBmWJRYXf3ro668TV2%2BzhYe4SHCgf5BL1Yehcl8QqS3JFETqnGps0wMFUWeKm%2F%2FlHzIoplnJkzPBF%2BhA4dm9ie744BhsqfDNILDA9%2BrvviOTTiwxI2%2FIq1QVfIcIicPco1fD%2Fe5e%2FQVZh4PjUXZWOXwM7Im0acVjYrcXONFMXLIFM0inKZVnU0wZKtN6Xyupo00knLYdP117PK4%2FpzVQ5gUnRQOxguogEn0%2Frih%2FfNBy2bbcXJmFSojfQlFNR9lMfZYQbruabl3%2BxS%2BY%2FPdZ6%2BXN7aguOArPkJWpZxgvO4b8RdiQquik3uIgBmVMa0Pd4l7tZJ2MULbEMPM1%2FSVyduZ1KIBD5qRNH0WAMvlZ1mjfj9UPdldw3xdyfTGE%2BqVYZP%2BzL36V9dKr3Dkaqf2eka%2BYi1VQxosAXp0Ie6rut9srFJICOYcXpvN9qB9UqnZ1W42HnT202baK7765kvoA8sdSyf1dIxIBgdJLBnUkFDhSNACs5wN9vZcs4xVrc0k%2FklsQAygYGFyKL1bZa1cbkk%2BIpkJ9DZeWtTpFjcQAJ3Oo%2FVAwWSAVIU7zDFgq3ABjqkAbLlZFg29DXrgDyMRz7dfO0OdFefczrSORNE6JKxFPIifuNioc7mB2ENpdDjhxnqeqsreB7%2F%2Fro9%2FHax7RBhZ8NYxuF1L34XvYuN8CAlWKvsec22Ih4qE%2BAN%2Fg%2FHNM3t%2FkdIRkiKGwdr9NSb4lvvF%2BvUHdH0Y69xV8m7EzxttHMgHWAw6ha8n1GkjSGubtlC9ez%2BaJ37gT6doTRiy8c5YJJPwdvk&X-Amz-Signature=d464e191d73452580ee55d79dd5031f708ebad8b7060332374c889c0b24e90cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIU4WWAO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqtxiv9HodsJQTiACiNiUO0vH9WkBXQpsK%2BmfCmsAiIwIhALKXgQvz2UljEovZf4ts6AIVHireYtqDNhCcecwfs9%2FtKv8DCCkQABoMNjM3NDIzMTgzODA1Igy7HWj8EkL9U%2B0Niswq3ANiFrkJWjZqD8Qo%2F39CBp2XA68bqCfzvrZ5SaYg3ynf2Kka1wVyk02pI9aBITlALF4hcVoBmWJRYXf3ro668TV2%2BzhYe4SHCgf5BL1Yehcl8QqS3JFETqnGps0wMFUWeKm%2F%2FlHzIoplnJkzPBF%2BhA4dm9ie744BhsqfDNILDA9%2BrvviOTTiwxI2%2FIq1QVfIcIicPco1fD%2Fe5e%2FQVZh4PjUXZWOXwM7Im0acVjYrcXONFMXLIFM0inKZVnU0wZKtN6Xyupo00knLYdP117PK4%2FpzVQ5gUnRQOxguogEn0%2Frih%2FfNBy2bbcXJmFSojfQlFNR9lMfZYQbruabl3%2BxS%2BY%2FPdZ6%2BXN7aguOArPkJWpZxgvO4b8RdiQquik3uIgBmVMa0Pd4l7tZJ2MULbEMPM1%2FSVyduZ1KIBD5qRNH0WAMvlZ1mjfj9UPdldw3xdyfTGE%2BqVYZP%2BzL36V9dKr3Dkaqf2eka%2BYi1VQxosAXp0Ie6rut9srFJICOYcXpvN9qB9UqnZ1W42HnT202baK7765kvoA8sdSyf1dIxIBgdJLBnUkFDhSNACs5wN9vZcs4xVrc0k%2FklsQAygYGFyKL1bZa1cbkk%2BIpkJ9DZeWtTpFjcQAJ3Oo%2FVAwWSAVIU7zDFgq3ABjqkAbLlZFg29DXrgDyMRz7dfO0OdFefczrSORNE6JKxFPIifuNioc7mB2ENpdDjhxnqeqsreB7%2F%2Fro9%2FHax7RBhZ8NYxuF1L34XvYuN8CAlWKvsec22Ih4qE%2BAN%2Fg%2FHNM3t%2FkdIRkiKGwdr9NSb4lvvF%2BvUHdH0Y69xV8m7EzxttHMgHWAw6ha8n1GkjSGubtlC9ez%2BaJ37gT6doTRiy8c5YJJPwdvk&X-Amz-Signature=e0bbcecc30f759eb5de42866cf34317248f8f3aff3cf9883f7a4761996d3e498&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIU4WWAO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqtxiv9HodsJQTiACiNiUO0vH9WkBXQpsK%2BmfCmsAiIwIhALKXgQvz2UljEovZf4ts6AIVHireYtqDNhCcecwfs9%2FtKv8DCCkQABoMNjM3NDIzMTgzODA1Igy7HWj8EkL9U%2B0Niswq3ANiFrkJWjZqD8Qo%2F39CBp2XA68bqCfzvrZ5SaYg3ynf2Kka1wVyk02pI9aBITlALF4hcVoBmWJRYXf3ro668TV2%2BzhYe4SHCgf5BL1Yehcl8QqS3JFETqnGps0wMFUWeKm%2F%2FlHzIoplnJkzPBF%2BhA4dm9ie744BhsqfDNILDA9%2BrvviOTTiwxI2%2FIq1QVfIcIicPco1fD%2Fe5e%2FQVZh4PjUXZWOXwM7Im0acVjYrcXONFMXLIFM0inKZVnU0wZKtN6Xyupo00knLYdP117PK4%2FpzVQ5gUnRQOxguogEn0%2Frih%2FfNBy2bbcXJmFSojfQlFNR9lMfZYQbruabl3%2BxS%2BY%2FPdZ6%2BXN7aguOArPkJWpZxgvO4b8RdiQquik3uIgBmVMa0Pd4l7tZJ2MULbEMPM1%2FSVyduZ1KIBD5qRNH0WAMvlZ1mjfj9UPdldw3xdyfTGE%2BqVYZP%2BzL36V9dKr3Dkaqf2eka%2BYi1VQxosAXp0Ie6rut9srFJICOYcXpvN9qB9UqnZ1W42HnT202baK7765kvoA8sdSyf1dIxIBgdJLBnUkFDhSNACs5wN9vZcs4xVrc0k%2FklsQAygYGFyKL1bZa1cbkk%2BIpkJ9DZeWtTpFjcQAJ3Oo%2FVAwWSAVIU7zDFgq3ABjqkAbLlZFg29DXrgDyMRz7dfO0OdFefczrSORNE6JKxFPIifuNioc7mB2ENpdDjhxnqeqsreB7%2F%2Fro9%2FHax7RBhZ8NYxuF1L34XvYuN8CAlWKvsec22Ih4qE%2BAN%2Fg%2FHNM3t%2FkdIRkiKGwdr9NSb4lvvF%2BvUHdH0Y69xV8m7EzxttHMgHWAw6ha8n1GkjSGubtlC9ez%2BaJ37gT6doTRiy8c5YJJPwdvk&X-Amz-Signature=afaae38322e0ca5479caa7fc54a6014b64d32dfc5dd310993e6afe8bd8940c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
