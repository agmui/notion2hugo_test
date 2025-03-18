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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSDB7I3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDW3%2Bzlh82oWKiDTs6BHQrBy8ZqRxUmHiLNegT3y1P1nAIhAJoiRv5LzLNS4hfLjzXuPSnXnnVlXXI4Kz%2Bv52oe3EHuKv8DCGYQABoMNjM3NDIzMTgzODA1Igy9oLczZ9ty2WUjqCoq3AP2gAolUm2aUr4qx4y4HipfB8oLB0ato%2FRMDD%2BtiO7SZcoWjnqV85iLLDrm86MhOjSBccgbLiC86MhEzh%2BHXy8ux1FEvPzw8XPD289LSL6GGp%2FrjdFHgK2gd5oFX%2BpZf6xF6Rgrmo4ixh%2FU%2B0gs1QnklTrUe4rG4hzh%2FjYscp37ocyqEwTca5E96eh7J2VyhdWPIYbZWj9uNL5l8tPdb3OkCuDZqv2MIsVNmKbnuzr6fBr7Vjvm1%2B5uVL8XgxObLEyffpyw2PcWOd5Py2m1rak%2BhKE4fkCPFALwHaWxmFfgIXjnZKC%2FCm394NKd2czgfTVLl2Mq6bMMN%2FM%2BJGNTJimiZkZXERlJIfOYZ4arKSs7LUfAmAdEk8%2BJMb6xvxF%2Fr94cOKRFkAJdhoH4DTbkSxFYiqlv4urXJZxjKN60dVucsZjiSp%2FMBYIPpJesh7FoORm7GtZpN0haGNA6YHvrLhYa4DyE4xAHSbECV5t%2Bz75oRJXSjWRz5mcE%2FXTjGg4CnIkBKdttlKXpDKi7D8RDGFughXj302a5kjMOnNvTp9X0KlG5pSkI3HBPd%2F6X5rLeXVftO5FVglwXojuQNtm2Jwb3%2BtVxSi1igeufqHupC02x5TBRldIhsjrrer1F0TD2sOe%2BBjqkAa6POD1i4eCOFH2KWV4TG1dJuAen0u4w%2B5EAmYcF4MOn7r2CqIIHkLSSxpd%2BU1hSAhoJzdRjNIpIkEP%2F3YgRXJ3JyN4C%2BbCDdayekoiug7XTawAge3B85zBIclEEPdgOk9UET0T3N9BPcDtox2DKvkIdHztyKhzCYjfYY%2FXDjzaumn7fnougczt5YNiETB3eTSfQN%2B6CeRaoZcr2V50fwgitWaha&X-Amz-Signature=a14d819ddecfc5b89589697b6df4d559fda54ebfce5a997da6ca0242f803e12a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSDB7I3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDW3%2Bzlh82oWKiDTs6BHQrBy8ZqRxUmHiLNegT3y1P1nAIhAJoiRv5LzLNS4hfLjzXuPSnXnnVlXXI4Kz%2Bv52oe3EHuKv8DCGYQABoMNjM3NDIzMTgzODA1Igy9oLczZ9ty2WUjqCoq3AP2gAolUm2aUr4qx4y4HipfB8oLB0ato%2FRMDD%2BtiO7SZcoWjnqV85iLLDrm86MhOjSBccgbLiC86MhEzh%2BHXy8ux1FEvPzw8XPD289LSL6GGp%2FrjdFHgK2gd5oFX%2BpZf6xF6Rgrmo4ixh%2FU%2B0gs1QnklTrUe4rG4hzh%2FjYscp37ocyqEwTca5E96eh7J2VyhdWPIYbZWj9uNL5l8tPdb3OkCuDZqv2MIsVNmKbnuzr6fBr7Vjvm1%2B5uVL8XgxObLEyffpyw2PcWOd5Py2m1rak%2BhKE4fkCPFALwHaWxmFfgIXjnZKC%2FCm394NKd2czgfTVLl2Mq6bMMN%2FM%2BJGNTJimiZkZXERlJIfOYZ4arKSs7LUfAmAdEk8%2BJMb6xvxF%2Fr94cOKRFkAJdhoH4DTbkSxFYiqlv4urXJZxjKN60dVucsZjiSp%2FMBYIPpJesh7FoORm7GtZpN0haGNA6YHvrLhYa4DyE4xAHSbECV5t%2Bz75oRJXSjWRz5mcE%2FXTjGg4CnIkBKdttlKXpDKi7D8RDGFughXj302a5kjMOnNvTp9X0KlG5pSkI3HBPd%2F6X5rLeXVftO5FVglwXojuQNtm2Jwb3%2BtVxSi1igeufqHupC02x5TBRldIhsjrrer1F0TD2sOe%2BBjqkAa6POD1i4eCOFH2KWV4TG1dJuAen0u4w%2B5EAmYcF4MOn7r2CqIIHkLSSxpd%2BU1hSAhoJzdRjNIpIkEP%2F3YgRXJ3JyN4C%2BbCDdayekoiug7XTawAge3B85zBIclEEPdgOk9UET0T3N9BPcDtox2DKvkIdHztyKhzCYjfYY%2FXDjzaumn7fnougczt5YNiETB3eTSfQN%2B6CeRaoZcr2V50fwgitWaha&X-Amz-Signature=8ede47acd99221cdc42878e251880e654c61a9fdbbd6e393c555d04664347839&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSDB7I3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDW3%2Bzlh82oWKiDTs6BHQrBy8ZqRxUmHiLNegT3y1P1nAIhAJoiRv5LzLNS4hfLjzXuPSnXnnVlXXI4Kz%2Bv52oe3EHuKv8DCGYQABoMNjM3NDIzMTgzODA1Igy9oLczZ9ty2WUjqCoq3AP2gAolUm2aUr4qx4y4HipfB8oLB0ato%2FRMDD%2BtiO7SZcoWjnqV85iLLDrm86MhOjSBccgbLiC86MhEzh%2BHXy8ux1FEvPzw8XPD289LSL6GGp%2FrjdFHgK2gd5oFX%2BpZf6xF6Rgrmo4ixh%2FU%2B0gs1QnklTrUe4rG4hzh%2FjYscp37ocyqEwTca5E96eh7J2VyhdWPIYbZWj9uNL5l8tPdb3OkCuDZqv2MIsVNmKbnuzr6fBr7Vjvm1%2B5uVL8XgxObLEyffpyw2PcWOd5Py2m1rak%2BhKE4fkCPFALwHaWxmFfgIXjnZKC%2FCm394NKd2czgfTVLl2Mq6bMMN%2FM%2BJGNTJimiZkZXERlJIfOYZ4arKSs7LUfAmAdEk8%2BJMb6xvxF%2Fr94cOKRFkAJdhoH4DTbkSxFYiqlv4urXJZxjKN60dVucsZjiSp%2FMBYIPpJesh7FoORm7GtZpN0haGNA6YHvrLhYa4DyE4xAHSbECV5t%2Bz75oRJXSjWRz5mcE%2FXTjGg4CnIkBKdttlKXpDKi7D8RDGFughXj302a5kjMOnNvTp9X0KlG5pSkI3HBPd%2F6X5rLeXVftO5FVglwXojuQNtm2Jwb3%2BtVxSi1igeufqHupC02x5TBRldIhsjrrer1F0TD2sOe%2BBjqkAa6POD1i4eCOFH2KWV4TG1dJuAen0u4w%2B5EAmYcF4MOn7r2CqIIHkLSSxpd%2BU1hSAhoJzdRjNIpIkEP%2F3YgRXJ3JyN4C%2BbCDdayekoiug7XTawAge3B85zBIclEEPdgOk9UET0T3N9BPcDtox2DKvkIdHztyKhzCYjfYY%2FXDjzaumn7fnougczt5YNiETB3eTSfQN%2B6CeRaoZcr2V50fwgitWaha&X-Amz-Signature=3fbe2b14f34de2326793869f088898a64628d0b78419f35710ccb310c082bbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
