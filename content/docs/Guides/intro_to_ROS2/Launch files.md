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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3NV4V5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFfEgVR%2F4%2FkL%2FWb2MXHj93dzPOHCMR7aHKREtAarF2%2BgAiEAqOJ4CcTDXkkykBVTF5UeSHNB0thyT0l5D4aXTqu9ttMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL85kOvOSQY2TGrNnyrcA2bDTmFB%2FT5T2tQ2jkKxRJi1Y5UB8FuXqPHSC1vnh3XkcahWQovek4kzk5qm%2Fa9cHm8FlJ8gzMEjZV7H6bH2goe%2FqgA%2FAQZGy%2BtAUSPrM%2BuXD5Kcn1IdvYTyWmwrcHdgZ1OXHQ0XotVZAT%2FPn1BjftZw9BCnWLg%2FFejjqH%2FWrqvNsyGD9efY52nSPRoQPU9Y0CSITX%2FnwvZTVbQ4%2FnTQA4myLRq4os2%2BRATYR2OBmjlyfuehe6htJHwPtFs8JhPXIQ0zw2CvmJQyoUQ4Ec8JGhibNFUc70VJ6kCMxCoIPCr8dZ8CUDR5itV5O0yGqwx2QGiv%2FU7WGbqe7KCXITUxXWdLJLGOnTlq%2Fz4ZNbP5rh7h1%2Fmt9d1cTT%2FTN93vDqLHXILY4YCFNERHge2XWU6g5aYySjwXrNaM1Eg4bxclawId7%2BBZtcAfO2bB%2BnD8hn%2B%2FC8DBd0hHTwAJUgkWyo%2FcCu4HTLgPJfxJIM4AhKM5xmTb7vk3KJpzwtS5CoqG0fUwIViDy7Fc%2BczzSacuS6zmsEd8HfXhAJpHklmWaTIh6ehJJ8I4SbYd1e4grKzMZ7aD0uN2PZUfCHGZXhfnvWWKDF9yUN%2BYoA0J0DeHDF15kFiXiabLllImS%2Fq3iPndMP2DssMGOqUB%2FKodBPb9C7ZZ6PPFE1TOIO1jh%2F4JMmx6QIy80M4NcWhoi%2BJtBVSv4Qbq7oe4zg9i7janZqtSmyzKhBj6oDzHsVEesMMGKJDjAY5e%2FmTeD3qdWom1hAvup27JLH%2BXNg3UWJQnDx%2BQeJf7SIj9ScxO3vw7G%2Fo0ECea65XYc3H5rr7cHq%2BgeEEhgCyQiJBawv7Y%2FHkBEH7Db%2Be%2B7yJxV2AFl4%2F6gO%2B7&X-Amz-Signature=b42859018e8e939cce630998ea5842a6ed7734bd022100c38d38d1670d9dc809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3NV4V5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFfEgVR%2F4%2FkL%2FWb2MXHj93dzPOHCMR7aHKREtAarF2%2BgAiEAqOJ4CcTDXkkykBVTF5UeSHNB0thyT0l5D4aXTqu9ttMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL85kOvOSQY2TGrNnyrcA2bDTmFB%2FT5T2tQ2jkKxRJi1Y5UB8FuXqPHSC1vnh3XkcahWQovek4kzk5qm%2Fa9cHm8FlJ8gzMEjZV7H6bH2goe%2FqgA%2FAQZGy%2BtAUSPrM%2BuXD5Kcn1IdvYTyWmwrcHdgZ1OXHQ0XotVZAT%2FPn1BjftZw9BCnWLg%2FFejjqH%2FWrqvNsyGD9efY52nSPRoQPU9Y0CSITX%2FnwvZTVbQ4%2FnTQA4myLRq4os2%2BRATYR2OBmjlyfuehe6htJHwPtFs8JhPXIQ0zw2CvmJQyoUQ4Ec8JGhibNFUc70VJ6kCMxCoIPCr8dZ8CUDR5itV5O0yGqwx2QGiv%2FU7WGbqe7KCXITUxXWdLJLGOnTlq%2Fz4ZNbP5rh7h1%2Fmt9d1cTT%2FTN93vDqLHXILY4YCFNERHge2XWU6g5aYySjwXrNaM1Eg4bxclawId7%2BBZtcAfO2bB%2BnD8hn%2B%2FC8DBd0hHTwAJUgkWyo%2FcCu4HTLgPJfxJIM4AhKM5xmTb7vk3KJpzwtS5CoqG0fUwIViDy7Fc%2BczzSacuS6zmsEd8HfXhAJpHklmWaTIh6ehJJ8I4SbYd1e4grKzMZ7aD0uN2PZUfCHGZXhfnvWWKDF9yUN%2BYoA0J0DeHDF15kFiXiabLllImS%2Fq3iPndMP2DssMGOqUB%2FKodBPb9C7ZZ6PPFE1TOIO1jh%2F4JMmx6QIy80M4NcWhoi%2BJtBVSv4Qbq7oe4zg9i7janZqtSmyzKhBj6oDzHsVEesMMGKJDjAY5e%2FmTeD3qdWom1hAvup27JLH%2BXNg3UWJQnDx%2BQeJf7SIj9ScxO3vw7G%2Fo0ECea65XYc3H5rr7cHq%2BgeEEhgCyQiJBawv7Y%2FHkBEH7Db%2Be%2B7yJxV2AFl4%2F6gO%2B7&X-Amz-Signature=76eb853a358a5ceaa9c2aa64a6803e49cea4e6752005447b6347b9de5290ebde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3NV4V5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFfEgVR%2F4%2FkL%2FWb2MXHj93dzPOHCMR7aHKREtAarF2%2BgAiEAqOJ4CcTDXkkykBVTF5UeSHNB0thyT0l5D4aXTqu9ttMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL85kOvOSQY2TGrNnyrcA2bDTmFB%2FT5T2tQ2jkKxRJi1Y5UB8FuXqPHSC1vnh3XkcahWQovek4kzk5qm%2Fa9cHm8FlJ8gzMEjZV7H6bH2goe%2FqgA%2FAQZGy%2BtAUSPrM%2BuXD5Kcn1IdvYTyWmwrcHdgZ1OXHQ0XotVZAT%2FPn1BjftZw9BCnWLg%2FFejjqH%2FWrqvNsyGD9efY52nSPRoQPU9Y0CSITX%2FnwvZTVbQ4%2FnTQA4myLRq4os2%2BRATYR2OBmjlyfuehe6htJHwPtFs8JhPXIQ0zw2CvmJQyoUQ4Ec8JGhibNFUc70VJ6kCMxCoIPCr8dZ8CUDR5itV5O0yGqwx2QGiv%2FU7WGbqe7KCXITUxXWdLJLGOnTlq%2Fz4ZNbP5rh7h1%2Fmt9d1cTT%2FTN93vDqLHXILY4YCFNERHge2XWU6g5aYySjwXrNaM1Eg4bxclawId7%2BBZtcAfO2bB%2BnD8hn%2B%2FC8DBd0hHTwAJUgkWyo%2FcCu4HTLgPJfxJIM4AhKM5xmTb7vk3KJpzwtS5CoqG0fUwIViDy7Fc%2BczzSacuS6zmsEd8HfXhAJpHklmWaTIh6ehJJ8I4SbYd1e4grKzMZ7aD0uN2PZUfCHGZXhfnvWWKDF9yUN%2BYoA0J0DeHDF15kFiXiabLllImS%2Fq3iPndMP2DssMGOqUB%2FKodBPb9C7ZZ6PPFE1TOIO1jh%2F4JMmx6QIy80M4NcWhoi%2BJtBVSv4Qbq7oe4zg9i7janZqtSmyzKhBj6oDzHsVEesMMGKJDjAY5e%2FmTeD3qdWom1hAvup27JLH%2BXNg3UWJQnDx%2BQeJf7SIj9ScxO3vw7G%2Fo0ECea65XYc3H5rr7cHq%2BgeEEhgCyQiJBawv7Y%2FHkBEH7Db%2Be%2B7yJxV2AFl4%2F6gO%2B7&X-Amz-Signature=344ab48c5da890ed3d10a77b7d3b5383a03639f62166b6f5366185b92c8a84e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
