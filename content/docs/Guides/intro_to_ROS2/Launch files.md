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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7VLVRN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXHnGCvIegiXvnHJquDBDUAWWJvl8bPnyVSG7Su5lNkAiAv8Ibd0bKxCsViXXwK0Bnj58Re5kBPJ4szIOM8N1%2FoFSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1PywLYrcQ%2FaoexKSKtwDO8Er9qgD13lFhrSQrzEWvyW1Hnij5qstLwATQn1dm9vNSOgtMFGi4PWRmWuSk%2BEAGgcii%2BH4rgxW7Aro3xZjJZ5gJti7H3bka7TYHEQKDmXlPyyZ1lLRWAmjP79hYyp9ereOMnsj1m4HOBO%2B5UdcX56FI73eaEgjFDB%2BqaCLCO%2B1hOwmusXlSyK8oxpPlckKRHnCq0%2Fn%2FcZUpo4iBjEg7xTJWHk1oPyp6dl7CkX85ggp4HIp9bZSyLgfiU4AWWe%2Bx%2F1aYhfDu39yQ%2B8t3GqwBL0Co0FjNLbXI8TpM40P%2FKiHd7j4pm48BvYqiA888S7%2BiZ6vRlhHFT9uZAx8Pne%2Bvg9wAk1aMdIfkEHAxDIc2mf7Mpz7Rksv29%2B1KeVdzEVwLnpnq%2FTd265ibX0B3a5XOalWttYjqsiIwZnKgRozYx3R3tc5Xru5sAE9RiNmvoph%2FPJ7s6zwMYcEb3NEPHeFRIQGAZ8YsXHV9XbDPK5yln90HAONYwYqvUmd62Jw71fzXRzC26%2B5Y%2BkNfyIgGfwYMLsfoxgQWpf%2BNpm3PgEVvs5ktazs5aKOnHt3Lzd1WIsxTul5I0QP1F%2FMvMzzuVQgYLHQk3jFt5cJ6QZT0Le7BTrzPgzCsxpzonUsy5Ywp5HPwgY6pgEGwxaCaYKUuJ6XB%2B9DNxEsATHSyvbuGu9CogrZ5F0ZwZn64dmhOullz5Iq89lIRgSR1wKdV%2FujaQyN7A8CA4BNrhFJRISbEzj3%2Fld7XIU3ATuAG1Wo1Cr71HG0lkxlidHg%2FcIuRUUWToobCzYKUhH7ya%2Fapx6%2F3EwGLVNHg9ZXgbIRjMCJOf3IjY2o%2Fi4YduQGh79pVcFStWCpwRsNRYeWRDTm9GRq&X-Amz-Signature=d7ad5b2d478bd4cfa083b8d95ec26f9b5a8ccc8a4c0bfcdc7fee7cc5419c7cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7VLVRN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXHnGCvIegiXvnHJquDBDUAWWJvl8bPnyVSG7Su5lNkAiAv8Ibd0bKxCsViXXwK0Bnj58Re5kBPJ4szIOM8N1%2FoFSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1PywLYrcQ%2FaoexKSKtwDO8Er9qgD13lFhrSQrzEWvyW1Hnij5qstLwATQn1dm9vNSOgtMFGi4PWRmWuSk%2BEAGgcii%2BH4rgxW7Aro3xZjJZ5gJti7H3bka7TYHEQKDmXlPyyZ1lLRWAmjP79hYyp9ereOMnsj1m4HOBO%2B5UdcX56FI73eaEgjFDB%2BqaCLCO%2B1hOwmusXlSyK8oxpPlckKRHnCq0%2Fn%2FcZUpo4iBjEg7xTJWHk1oPyp6dl7CkX85ggp4HIp9bZSyLgfiU4AWWe%2Bx%2F1aYhfDu39yQ%2B8t3GqwBL0Co0FjNLbXI8TpM40P%2FKiHd7j4pm48BvYqiA888S7%2BiZ6vRlhHFT9uZAx8Pne%2Bvg9wAk1aMdIfkEHAxDIc2mf7Mpz7Rksv29%2B1KeVdzEVwLnpnq%2FTd265ibX0B3a5XOalWttYjqsiIwZnKgRozYx3R3tc5Xru5sAE9RiNmvoph%2FPJ7s6zwMYcEb3NEPHeFRIQGAZ8YsXHV9XbDPK5yln90HAONYwYqvUmd62Jw71fzXRzC26%2B5Y%2BkNfyIgGfwYMLsfoxgQWpf%2BNpm3PgEVvs5ktazs5aKOnHt3Lzd1WIsxTul5I0QP1F%2FMvMzzuVQgYLHQk3jFt5cJ6QZT0Le7BTrzPgzCsxpzonUsy5Ywp5HPwgY6pgEGwxaCaYKUuJ6XB%2B9DNxEsATHSyvbuGu9CogrZ5F0ZwZn64dmhOullz5Iq89lIRgSR1wKdV%2FujaQyN7A8CA4BNrhFJRISbEzj3%2Fld7XIU3ATuAG1Wo1Cr71HG0lkxlidHg%2FcIuRUUWToobCzYKUhH7ya%2Fapx6%2F3EwGLVNHg9ZXgbIRjMCJOf3IjY2o%2Fi4YduQGh79pVcFStWCpwRsNRYeWRDTm9GRq&X-Amz-Signature=63a7cab81d3536a654fcd1039ef2d67aa690f3f9b12e52dae5bc16b3aaa1e501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7VLVRN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXHnGCvIegiXvnHJquDBDUAWWJvl8bPnyVSG7Su5lNkAiAv8Ibd0bKxCsViXXwK0Bnj58Re5kBPJ4szIOM8N1%2FoFSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1PywLYrcQ%2FaoexKSKtwDO8Er9qgD13lFhrSQrzEWvyW1Hnij5qstLwATQn1dm9vNSOgtMFGi4PWRmWuSk%2BEAGgcii%2BH4rgxW7Aro3xZjJZ5gJti7H3bka7TYHEQKDmXlPyyZ1lLRWAmjP79hYyp9ereOMnsj1m4HOBO%2B5UdcX56FI73eaEgjFDB%2BqaCLCO%2B1hOwmusXlSyK8oxpPlckKRHnCq0%2Fn%2FcZUpo4iBjEg7xTJWHk1oPyp6dl7CkX85ggp4HIp9bZSyLgfiU4AWWe%2Bx%2F1aYhfDu39yQ%2B8t3GqwBL0Co0FjNLbXI8TpM40P%2FKiHd7j4pm48BvYqiA888S7%2BiZ6vRlhHFT9uZAx8Pne%2Bvg9wAk1aMdIfkEHAxDIc2mf7Mpz7Rksv29%2B1KeVdzEVwLnpnq%2FTd265ibX0B3a5XOalWttYjqsiIwZnKgRozYx3R3tc5Xru5sAE9RiNmvoph%2FPJ7s6zwMYcEb3NEPHeFRIQGAZ8YsXHV9XbDPK5yln90HAONYwYqvUmd62Jw71fzXRzC26%2B5Y%2BkNfyIgGfwYMLsfoxgQWpf%2BNpm3PgEVvs5ktazs5aKOnHt3Lzd1WIsxTul5I0QP1F%2FMvMzzuVQgYLHQk3jFt5cJ6QZT0Le7BTrzPgzCsxpzonUsy5Ywp5HPwgY6pgEGwxaCaYKUuJ6XB%2B9DNxEsATHSyvbuGu9CogrZ5F0ZwZn64dmhOullz5Iq89lIRgSR1wKdV%2FujaQyN7A8CA4BNrhFJRISbEzj3%2Fld7XIU3ATuAG1Wo1Cr71HG0lkxlidHg%2FcIuRUUWToobCzYKUhH7ya%2Fapx6%2F3EwGLVNHg9ZXgbIRjMCJOf3IjY2o%2Fi4YduQGh79pVcFStWCpwRsNRYeWRDTm9GRq&X-Amz-Signature=62c6ab7fb22ea7dde132f548ea149c523e1bd3870fdcdae784324fc82b2c207d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
