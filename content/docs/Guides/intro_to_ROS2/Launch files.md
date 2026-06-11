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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5OQK2F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFsGYCXfkQOz9BEi7DhcForHsQNQkzMagX11h2obYiEuAiBjHrbbAk8UQ%2FpRi26eyJIV00DtaJVsEUpUW%2BZZJETo%2FyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmhBzjEzL0WIDk5s3KtwDKlNNP%2ByIW3rvIXyRTWBtn511SZ5nJ7DrTeMv62%2FXJvLGBfu3Smnx5MlQWjm5ype%2BVJ%2B1FdZiNRc6gnFA8wtIlKTaEk1f1ckSDtES2dOrb3wUw8ggfsXQeZHJFqRSVQ5NZsJE12GlaH3rLdrm1Wu9xj4PAFn3dVrqj1AYVnxtdNwC00zZCnQzDsGC%2FJOynubjrJ70Rf%2FtR2xjfLVxbHvYd3VanRQq8eL6e7YaxkTcu7wzW2cgke1OBJbObCYsBzuIi8gQwvEgkL8s8uqw4iZU3Zv1rjeYtPy77bjYBk2gLF3dH8u5HQyiTiKRYEYI9aKSl1fbJqtEadXK7iSX8eaWX67AOH912lRyG4cnS5VdyLyZ01tsyXGjh6ypCuc9VjoaJ6gi9%2Filc7lex8WEa6DnyZiRBe5%2BvVwiC1tuWuFXfccol4ceMVvbvT1ZtTFZrUts98SyDqHeot1hsb1RSdBoVBVT2ZYsraPibqXFHk1yr3E2p7PKLNsZIRdChfSFeagAteOCGMfA0LSoIXdpWXLtzPpmJvdg14DiX8LUtGuGh0RgyxZuaWxchdqWbztia5UtwwML2QeF%2FW9ZLblsOqK6liLy4u772gAg5%2Fo1r6pecHX26PW6VYZO8FuBxLkwnqao0QY6pgFuOgOoXgBorP3lyQTVitxcKxodn15w2490SFwrnyVnJ3ZV2dAXWk9oM0finqJkkAhVFv1Etqzo1VGtAdqIPGDGt7sjRcJRJVhLDY%2FMSybQ1jIa1Pf%2F8JpP4S6CmzqJ%2BIlVXGf1ujsL7P8YmvS1h2kZ4KBcY7V1BR7FBvxx3VJTf5ryMo%2B0F3Z7io29974EZGzz97pIC9qhTIJEVXdPo1Dve2AvCliL&X-Amz-Signature=9d089ad581bb15d4280b13405317f7c64dea0f5680151b4485c7e40d697de429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5OQK2F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFsGYCXfkQOz9BEi7DhcForHsQNQkzMagX11h2obYiEuAiBjHrbbAk8UQ%2FpRi26eyJIV00DtaJVsEUpUW%2BZZJETo%2FyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmhBzjEzL0WIDk5s3KtwDKlNNP%2ByIW3rvIXyRTWBtn511SZ5nJ7DrTeMv62%2FXJvLGBfu3Smnx5MlQWjm5ype%2BVJ%2B1FdZiNRc6gnFA8wtIlKTaEk1f1ckSDtES2dOrb3wUw8ggfsXQeZHJFqRSVQ5NZsJE12GlaH3rLdrm1Wu9xj4PAFn3dVrqj1AYVnxtdNwC00zZCnQzDsGC%2FJOynubjrJ70Rf%2FtR2xjfLVxbHvYd3VanRQq8eL6e7YaxkTcu7wzW2cgke1OBJbObCYsBzuIi8gQwvEgkL8s8uqw4iZU3Zv1rjeYtPy77bjYBk2gLF3dH8u5HQyiTiKRYEYI9aKSl1fbJqtEadXK7iSX8eaWX67AOH912lRyG4cnS5VdyLyZ01tsyXGjh6ypCuc9VjoaJ6gi9%2Filc7lex8WEa6DnyZiRBe5%2BvVwiC1tuWuFXfccol4ceMVvbvT1ZtTFZrUts98SyDqHeot1hsb1RSdBoVBVT2ZYsraPibqXFHk1yr3E2p7PKLNsZIRdChfSFeagAteOCGMfA0LSoIXdpWXLtzPpmJvdg14DiX8LUtGuGh0RgyxZuaWxchdqWbztia5UtwwML2QeF%2FW9ZLblsOqK6liLy4u772gAg5%2Fo1r6pecHX26PW6VYZO8FuBxLkwnqao0QY6pgFuOgOoXgBorP3lyQTVitxcKxodn15w2490SFwrnyVnJ3ZV2dAXWk9oM0finqJkkAhVFv1Etqzo1VGtAdqIPGDGt7sjRcJRJVhLDY%2FMSybQ1jIa1Pf%2F8JpP4S6CmzqJ%2BIlVXGf1ujsL7P8YmvS1h2kZ4KBcY7V1BR7FBvxx3VJTf5ryMo%2B0F3Z7io29974EZGzz97pIC9qhTIJEVXdPo1Dve2AvCliL&X-Amz-Signature=976e4bf23c10b152e18bbf5643c728f1609ef27ec836226f68a01e014ffb1a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5OQK2F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFsGYCXfkQOz9BEi7DhcForHsQNQkzMagX11h2obYiEuAiBjHrbbAk8UQ%2FpRi26eyJIV00DtaJVsEUpUW%2BZZJETo%2FyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmhBzjEzL0WIDk5s3KtwDKlNNP%2ByIW3rvIXyRTWBtn511SZ5nJ7DrTeMv62%2FXJvLGBfu3Smnx5MlQWjm5ype%2BVJ%2B1FdZiNRc6gnFA8wtIlKTaEk1f1ckSDtES2dOrb3wUw8ggfsXQeZHJFqRSVQ5NZsJE12GlaH3rLdrm1Wu9xj4PAFn3dVrqj1AYVnxtdNwC00zZCnQzDsGC%2FJOynubjrJ70Rf%2FtR2xjfLVxbHvYd3VanRQq8eL6e7YaxkTcu7wzW2cgke1OBJbObCYsBzuIi8gQwvEgkL8s8uqw4iZU3Zv1rjeYtPy77bjYBk2gLF3dH8u5HQyiTiKRYEYI9aKSl1fbJqtEadXK7iSX8eaWX67AOH912lRyG4cnS5VdyLyZ01tsyXGjh6ypCuc9VjoaJ6gi9%2Filc7lex8WEa6DnyZiRBe5%2BvVwiC1tuWuFXfccol4ceMVvbvT1ZtTFZrUts98SyDqHeot1hsb1RSdBoVBVT2ZYsraPibqXFHk1yr3E2p7PKLNsZIRdChfSFeagAteOCGMfA0LSoIXdpWXLtzPpmJvdg14DiX8LUtGuGh0RgyxZuaWxchdqWbztia5UtwwML2QeF%2FW9ZLblsOqK6liLy4u772gAg5%2Fo1r6pecHX26PW6VYZO8FuBxLkwnqao0QY6pgFuOgOoXgBorP3lyQTVitxcKxodn15w2490SFwrnyVnJ3ZV2dAXWk9oM0finqJkkAhVFv1Etqzo1VGtAdqIPGDGt7sjRcJRJVhLDY%2FMSybQ1jIa1Pf%2F8JpP4S6CmzqJ%2BIlVXGf1ujsL7P8YmvS1h2kZ4KBcY7V1BR7FBvxx3VJTf5ryMo%2B0F3Z7io29974EZGzz97pIC9qhTIJEVXdPo1Dve2AvCliL&X-Amz-Signature=81c8cc7d46a48ec3685eeb56cd2bdb2153469ca5349a118fc5fc05e0005b6e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
