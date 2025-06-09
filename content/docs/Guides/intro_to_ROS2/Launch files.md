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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLGIOTB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClQv4TFQjsUTLvxfpMz0KllJTPiIzuyLEtYkFMP6pORQIhANXpe8rp3SX06BiZFD4KY%2Bujo01KicB5LI87Zx3OxBSqKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwREAGzV0QQXQ8fCNUq3APSOfNNlCXzCLeDsIUMkpXELpZahiojCAYKI4QNTkogw%2BGjLoVGNLlFbjsSljae7UOD8%2Fy%2BqtiT2LxtBNpC6ES5SAvsRDtwLFZS1z1PNZjY5cNBgtIPWtuIYymBPtQqzCGZy%2FUV7vJqO3V3Z86L5H0iaeDa3gvKyRdrk7k2tDK3jE2%2FX0sgXorl%2Bxe1XVXXqNejg%2FhS2Qg5jlVTVrk8yamP4RO2tNqetUI%2FlQo7iyif6Ctnt%2BFViuF6DM1vFpyOU8T0ol%2B9%2Bm5JEtdGAT0CYUSR6rKm6rvLrEgi1oDqxmpkGpXYqgZEXc65zuqBBYLPRKUhft31ZJQif6t%2BjffBO1A3%2Fpk1KifoMl4MctQHHQyadeAVON8u0aqs7rLQW%2BtErZXdVeSJWYcGE05dpgah%2BAVJbyFuwh%2BjDelFtB52n1QHykVWqv7Ct9BBukB55Ve5sd0cVUOCHsY%2FkNXCHydncmzy6nlBVjhVaFcki5nE2LzkNJjiYOkso8yZX4pHPvfoyFFElVqxxRoEBmEJOCKzm7ZvlixhtKqxtObSIs56A8EQ07%2FNv4oH56rhjGPQnpn1uCl5aowaDJ5EZVvhFv%2BxUBdc3gJdtmsgjLETH0vuPwRzXcwdzOoMi0C6ymZ%2BxDCbopjCBjqkAaSog9MMKgnwnxfRXpoA0TBPtQCnzsmZAQiB5lKLYkA9%2BJmvCyDb7Da9RhIIQGiFAbc4U5UfJJr2jAFcHBrFjdjr6ImE0zw5mpN4EVE1GWI0215f23LiPGYscpcTxo%2BEFkpTQhcR8BT%2BnBM0Hc4jeDo5UJ%2B5nZ8NK86cu9%2FXx4ftakGNr03BxjSsml1ApycaFhXGFM84ajzc4p6PS%2FaFqbJ88T36&X-Amz-Signature=3e9f1c6beef2c6e44e8c282feace3f15f91138e3c4cbde633d01b1471cccf756&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLGIOTB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClQv4TFQjsUTLvxfpMz0KllJTPiIzuyLEtYkFMP6pORQIhANXpe8rp3SX06BiZFD4KY%2Bujo01KicB5LI87Zx3OxBSqKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwREAGzV0QQXQ8fCNUq3APSOfNNlCXzCLeDsIUMkpXELpZahiojCAYKI4QNTkogw%2BGjLoVGNLlFbjsSljae7UOD8%2Fy%2BqtiT2LxtBNpC6ES5SAvsRDtwLFZS1z1PNZjY5cNBgtIPWtuIYymBPtQqzCGZy%2FUV7vJqO3V3Z86L5H0iaeDa3gvKyRdrk7k2tDK3jE2%2FX0sgXorl%2Bxe1XVXXqNejg%2FhS2Qg5jlVTVrk8yamP4RO2tNqetUI%2FlQo7iyif6Ctnt%2BFViuF6DM1vFpyOU8T0ol%2B9%2Bm5JEtdGAT0CYUSR6rKm6rvLrEgi1oDqxmpkGpXYqgZEXc65zuqBBYLPRKUhft31ZJQif6t%2BjffBO1A3%2Fpk1KifoMl4MctQHHQyadeAVON8u0aqs7rLQW%2BtErZXdVeSJWYcGE05dpgah%2BAVJbyFuwh%2BjDelFtB52n1QHykVWqv7Ct9BBukB55Ve5sd0cVUOCHsY%2FkNXCHydncmzy6nlBVjhVaFcki5nE2LzkNJjiYOkso8yZX4pHPvfoyFFElVqxxRoEBmEJOCKzm7ZvlixhtKqxtObSIs56A8EQ07%2FNv4oH56rhjGPQnpn1uCl5aowaDJ5EZVvhFv%2BxUBdc3gJdtmsgjLETH0vuPwRzXcwdzOoMi0C6ymZ%2BxDCbopjCBjqkAaSog9MMKgnwnxfRXpoA0TBPtQCnzsmZAQiB5lKLYkA9%2BJmvCyDb7Da9RhIIQGiFAbc4U5UfJJr2jAFcHBrFjdjr6ImE0zw5mpN4EVE1GWI0215f23LiPGYscpcTxo%2BEFkpTQhcR8BT%2BnBM0Hc4jeDo5UJ%2B5nZ8NK86cu9%2FXx4ftakGNr03BxjSsml1ApycaFhXGFM84ajzc4p6PS%2FaFqbJ88T36&X-Amz-Signature=9ebf962ee0c7c340550ad1e3322228c44f6479e6bfc1ac0c98ec17f278c89bda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLGIOTB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClQv4TFQjsUTLvxfpMz0KllJTPiIzuyLEtYkFMP6pORQIhANXpe8rp3SX06BiZFD4KY%2Bujo01KicB5LI87Zx3OxBSqKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwREAGzV0QQXQ8fCNUq3APSOfNNlCXzCLeDsIUMkpXELpZahiojCAYKI4QNTkogw%2BGjLoVGNLlFbjsSljae7UOD8%2Fy%2BqtiT2LxtBNpC6ES5SAvsRDtwLFZS1z1PNZjY5cNBgtIPWtuIYymBPtQqzCGZy%2FUV7vJqO3V3Z86L5H0iaeDa3gvKyRdrk7k2tDK3jE2%2FX0sgXorl%2Bxe1XVXXqNejg%2FhS2Qg5jlVTVrk8yamP4RO2tNqetUI%2FlQo7iyif6Ctnt%2BFViuF6DM1vFpyOU8T0ol%2B9%2Bm5JEtdGAT0CYUSR6rKm6rvLrEgi1oDqxmpkGpXYqgZEXc65zuqBBYLPRKUhft31ZJQif6t%2BjffBO1A3%2Fpk1KifoMl4MctQHHQyadeAVON8u0aqs7rLQW%2BtErZXdVeSJWYcGE05dpgah%2BAVJbyFuwh%2BjDelFtB52n1QHykVWqv7Ct9BBukB55Ve5sd0cVUOCHsY%2FkNXCHydncmzy6nlBVjhVaFcki5nE2LzkNJjiYOkso8yZX4pHPvfoyFFElVqxxRoEBmEJOCKzm7ZvlixhtKqxtObSIs56A8EQ07%2FNv4oH56rhjGPQnpn1uCl5aowaDJ5EZVvhFv%2BxUBdc3gJdtmsgjLETH0vuPwRzXcwdzOoMi0C6ymZ%2BxDCbopjCBjqkAaSog9MMKgnwnxfRXpoA0TBPtQCnzsmZAQiB5lKLYkA9%2BJmvCyDb7Da9RhIIQGiFAbc4U5UfJJr2jAFcHBrFjdjr6ImE0zw5mpN4EVE1GWI0215f23LiPGYscpcTxo%2BEFkpTQhcR8BT%2BnBM0Hc4jeDo5UJ%2B5nZ8NK86cu9%2FXx4ftakGNr03BxjSsml1ApycaFhXGFM84ajzc4p6PS%2FaFqbJ88T36&X-Amz-Signature=49e7d5cd9078038649e61ffe80f761de99b4300f8ea97870adf5bdccd6745e09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
