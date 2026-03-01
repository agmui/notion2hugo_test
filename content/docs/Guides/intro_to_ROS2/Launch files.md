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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJY7JSWA%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgKl8DXt4M30q8EGr1i53Sem4mZp9O33GV7oT%2FyJ09TAiA2PlCg74Aqeyi9Gtetyhr2Wcp09shDzt9KSVX9oQ%2F8ZSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKbZnGflh251loPwhKtwDjwjGdrl7nrAlZwfkSXkKZtab9CVhprZ8Li72jp%2BMSxmWOuG80LlAzfnpsH9pwAp%2Bjw2ViIXPN%2BBc3E3spaNrWmk0e3yoVndm1GzwLKSo6gGPw8ODaOdYR27RC6XIXy7%2BT%2B0zjUIhzgWJ%2Bl78Nfjb896AYo0Hjp373l4NVCQ1CJ9M%2F8J2d0Ed0D0XgsP%2FD4RtsRksPjcxN5s4PfqqvrY56fxRaFXIo1pSpQWbUJUcfe3c6shPaT5tE94731U7sa%2FCwDlrmhCw%2BSV4p0Tsgb1VRBF6pEmWv4TfIqEbVdLQP7ZswsJCa3z9z1RkuQhs%2FVvzwEVMDyAegWU6M73pkw7ZFpifAysLMCoL9EtgWNIegttJ0AhHO4MUpbM%2FNsZoHY0P5MZUE3yXSgQhnd4a48%2FIn7TodqUg6GwevMf9iYSzUFT5Vi5%2Bk5453pykR%2F1phzKDdi1RKKHX648hPz7hEFvsm6Pg0%2Brr%2BPUdTGCzTrKOKEB37YwajKR5hvRHRZPVrjHC2PUt1amV7llfIIa%2BoU25U0B3%2Fgoc%2BRybT%2F4OupHgRqki8tD45zjeM2N%2B6H0jWJbrtmKev920%2BwTqhOdSC%2FA%2FUrocSNe6qBZlEpWG9xbE8o7H%2FzwbP61%2BgiGtBhswwa6OzQY6pgGs9JFwtrO%2B5mjvovjr9pOl3TOnAhgRAktqmwLbCCu8MOO9IiISFb9xMtJiH1D4PYchkCnn%2FtGVQcGF3okutIKWjb6wA2GVhozG%2Fk2zdQelb2zm24F4Ih3pOHxbzhcKr%2F9aejkMVCtf3e3CSvsClnN26q%2FLmNHy4AnjKCZ4MfwAOfLkYST2nJDOd0C%2FN8jzTxg%2BfLMxdZcvEb1%2FcfpQYqe%2FZxLVI0Ot&X-Amz-Signature=7725a4a4906665dd7829cb1a2dd4502ee69d21b6b5f478fdbf786f8697d717ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJY7JSWA%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgKl8DXt4M30q8EGr1i53Sem4mZp9O33GV7oT%2FyJ09TAiA2PlCg74Aqeyi9Gtetyhr2Wcp09shDzt9KSVX9oQ%2F8ZSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKbZnGflh251loPwhKtwDjwjGdrl7nrAlZwfkSXkKZtab9CVhprZ8Li72jp%2BMSxmWOuG80LlAzfnpsH9pwAp%2Bjw2ViIXPN%2BBc3E3spaNrWmk0e3yoVndm1GzwLKSo6gGPw8ODaOdYR27RC6XIXy7%2BT%2B0zjUIhzgWJ%2Bl78Nfjb896AYo0Hjp373l4NVCQ1CJ9M%2F8J2d0Ed0D0XgsP%2FD4RtsRksPjcxN5s4PfqqvrY56fxRaFXIo1pSpQWbUJUcfe3c6shPaT5tE94731U7sa%2FCwDlrmhCw%2BSV4p0Tsgb1VRBF6pEmWv4TfIqEbVdLQP7ZswsJCa3z9z1RkuQhs%2FVvzwEVMDyAegWU6M73pkw7ZFpifAysLMCoL9EtgWNIegttJ0AhHO4MUpbM%2FNsZoHY0P5MZUE3yXSgQhnd4a48%2FIn7TodqUg6GwevMf9iYSzUFT5Vi5%2Bk5453pykR%2F1phzKDdi1RKKHX648hPz7hEFvsm6Pg0%2Brr%2BPUdTGCzTrKOKEB37YwajKR5hvRHRZPVrjHC2PUt1amV7llfIIa%2BoU25U0B3%2Fgoc%2BRybT%2F4OupHgRqki8tD45zjeM2N%2B6H0jWJbrtmKev920%2BwTqhOdSC%2FA%2FUrocSNe6qBZlEpWG9xbE8o7H%2FzwbP61%2BgiGtBhswwa6OzQY6pgGs9JFwtrO%2B5mjvovjr9pOl3TOnAhgRAktqmwLbCCu8MOO9IiISFb9xMtJiH1D4PYchkCnn%2FtGVQcGF3okutIKWjb6wA2GVhozG%2Fk2zdQelb2zm24F4Ih3pOHxbzhcKr%2F9aejkMVCtf3e3CSvsClnN26q%2FLmNHy4AnjKCZ4MfwAOfLkYST2nJDOd0C%2FN8jzTxg%2BfLMxdZcvEb1%2FcfpQYqe%2FZxLVI0Ot&X-Amz-Signature=d39fd77ee6f722cd662788e290eceadcef3ee0cad2c460e1030735b8b329fa29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJY7JSWA%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgKl8DXt4M30q8EGr1i53Sem4mZp9O33GV7oT%2FyJ09TAiA2PlCg74Aqeyi9Gtetyhr2Wcp09shDzt9KSVX9oQ%2F8ZSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMKbZnGflh251loPwhKtwDjwjGdrl7nrAlZwfkSXkKZtab9CVhprZ8Li72jp%2BMSxmWOuG80LlAzfnpsH9pwAp%2Bjw2ViIXPN%2BBc3E3spaNrWmk0e3yoVndm1GzwLKSo6gGPw8ODaOdYR27RC6XIXy7%2BT%2B0zjUIhzgWJ%2Bl78Nfjb896AYo0Hjp373l4NVCQ1CJ9M%2F8J2d0Ed0D0XgsP%2FD4RtsRksPjcxN5s4PfqqvrY56fxRaFXIo1pSpQWbUJUcfe3c6shPaT5tE94731U7sa%2FCwDlrmhCw%2BSV4p0Tsgb1VRBF6pEmWv4TfIqEbVdLQP7ZswsJCa3z9z1RkuQhs%2FVvzwEVMDyAegWU6M73pkw7ZFpifAysLMCoL9EtgWNIegttJ0AhHO4MUpbM%2FNsZoHY0P5MZUE3yXSgQhnd4a48%2FIn7TodqUg6GwevMf9iYSzUFT5Vi5%2Bk5453pykR%2F1phzKDdi1RKKHX648hPz7hEFvsm6Pg0%2Brr%2BPUdTGCzTrKOKEB37YwajKR5hvRHRZPVrjHC2PUt1amV7llfIIa%2BoU25U0B3%2Fgoc%2BRybT%2F4OupHgRqki8tD45zjeM2N%2B6H0jWJbrtmKev920%2BwTqhOdSC%2FA%2FUrocSNe6qBZlEpWG9xbE8o7H%2FzwbP61%2BgiGtBhswwa6OzQY6pgGs9JFwtrO%2B5mjvovjr9pOl3TOnAhgRAktqmwLbCCu8MOO9IiISFb9xMtJiH1D4PYchkCnn%2FtGVQcGF3okutIKWjb6wA2GVhozG%2Fk2zdQelb2zm24F4Ih3pOHxbzhcKr%2F9aejkMVCtf3e3CSvsClnN26q%2FLmNHy4AnjKCZ4MfwAOfLkYST2nJDOd0C%2FN8jzTxg%2BfLMxdZcvEb1%2FcfpQYqe%2FZxLVI0Ot&X-Amz-Signature=6b47f0ce2b6f708af81f6cdfffee786173006819ce9fd6c01e6b64c64cba03e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
