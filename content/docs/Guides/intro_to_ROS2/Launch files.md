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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DGQ5TZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGar3%2Fl8cYZNBMACvYyKeylEpUsYoH71HONVKTtNlLIBAiA8m79FwXHkZusrR%2BWUZQLQIEaK4ZSrMrg6dGFGb7c5DyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNCa38Etns%2BJOappKtwDZ2SOxpeOXXRFyS5TNLs%2BDrWyh8oSgurLUWBOgViKF6jR%2BrH8ekXdD75ks1n1r8pnX%2B%2FeKWTEf1c6T24x1XPKVN1mpAiFchRuN2DouhH4oVSavvJM%2FKyVyoM1rPE6iSx%2BSYHDJA27pmEql%2FCqRJW9B9Eu8SCiRXjrBQvDkc01DLkQ3UzYGoOj%2F9fqYiltHND%2BqP5AD1ROsRbuvthMVb%2FTODkCpSH4k51bjuqDoVRnFgxsEFz8%2BP3ooAln9xPIQA5vL1pe8jUnB5q8g95p0rh3U1hxQETX8miWhSOd21wDGxhLFsvJXqUdwpP61FpxbigW4DVtgJC8f4Ay0DpA11P64LIcBZFCAHc7AOnMdp%2FHYg%2FdAnfIh9068%2Fbm9ilpeBbf3YvLas9PbYEOGEiA7z1rjjNOUwo%2Bf2EujZB%2FdZyLA3mfKY1YMXe7HAdLOPgfFWUSaVqFYk6UxaExmgrMhn%2BUCCVzw6Qqv2%2BcJ4Iq52uqwWhb9cd8DjpUKx9XKjTv%2BuDY%2F%2Bku%2FNaygoLu9PGvxptwhFrQW90L0YLjxLk7i2RvZs56OzAu07A3LSCl58NNzp9Fyg4AyRWJbMLKwiwpHGrjqZ9%2BKTocDXXM0j1qkzXMj1tdmscRQEI%2BvRaPf1Yw%2BfDlvwY6pgFXM%2B2uYaMrBgSMxVXXeahHkR2NmcV9ocp8aAcThUy9LaCWbRex8zgPMiU%2FxEnn9QfZSC15Y%2FRmd%2BF255E3Ruti9W65B6LlX9cjUwXJqDmkTBJjxxYA0bOQ6eTUWY59Xhjbh5wUaDaQtiTzN%2B5hx5W6UrB96YTQAeO3UfWwu2BXsoiwQQ6eXPRS71Xi6afpqUZAEz8SqDsQd371m5Oxu5RO%2FmAmHpT8&X-Amz-Signature=7045dd3d6c7a4888ae891a7ed5f7c6034cbb87f9ca799ab9f21e41792e792617&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DGQ5TZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGar3%2Fl8cYZNBMACvYyKeylEpUsYoH71HONVKTtNlLIBAiA8m79FwXHkZusrR%2BWUZQLQIEaK4ZSrMrg6dGFGb7c5DyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNCa38Etns%2BJOappKtwDZ2SOxpeOXXRFyS5TNLs%2BDrWyh8oSgurLUWBOgViKF6jR%2BrH8ekXdD75ks1n1r8pnX%2B%2FeKWTEf1c6T24x1XPKVN1mpAiFchRuN2DouhH4oVSavvJM%2FKyVyoM1rPE6iSx%2BSYHDJA27pmEql%2FCqRJW9B9Eu8SCiRXjrBQvDkc01DLkQ3UzYGoOj%2F9fqYiltHND%2BqP5AD1ROsRbuvthMVb%2FTODkCpSH4k51bjuqDoVRnFgxsEFz8%2BP3ooAln9xPIQA5vL1pe8jUnB5q8g95p0rh3U1hxQETX8miWhSOd21wDGxhLFsvJXqUdwpP61FpxbigW4DVtgJC8f4Ay0DpA11P64LIcBZFCAHc7AOnMdp%2FHYg%2FdAnfIh9068%2Fbm9ilpeBbf3YvLas9PbYEOGEiA7z1rjjNOUwo%2Bf2EujZB%2FdZyLA3mfKY1YMXe7HAdLOPgfFWUSaVqFYk6UxaExmgrMhn%2BUCCVzw6Qqv2%2BcJ4Iq52uqwWhb9cd8DjpUKx9XKjTv%2BuDY%2F%2Bku%2FNaygoLu9PGvxptwhFrQW90L0YLjxLk7i2RvZs56OzAu07A3LSCl58NNzp9Fyg4AyRWJbMLKwiwpHGrjqZ9%2BKTocDXXM0j1qkzXMj1tdmscRQEI%2BvRaPf1Yw%2BfDlvwY6pgFXM%2B2uYaMrBgSMxVXXeahHkR2NmcV9ocp8aAcThUy9LaCWbRex8zgPMiU%2FxEnn9QfZSC15Y%2FRmd%2BF255E3Ruti9W65B6LlX9cjUwXJqDmkTBJjxxYA0bOQ6eTUWY59Xhjbh5wUaDaQtiTzN%2B5hx5W6UrB96YTQAeO3UfWwu2BXsoiwQQ6eXPRS71Xi6afpqUZAEz8SqDsQd371m5Oxu5RO%2FmAmHpT8&X-Amz-Signature=2288d0ee85fa92592e35cb4c1dbd53bef6da05b86b8c40b00747588f5ef0f371&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3DGQ5TZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGar3%2Fl8cYZNBMACvYyKeylEpUsYoH71HONVKTtNlLIBAiA8m79FwXHkZusrR%2BWUZQLQIEaK4ZSrMrg6dGFGb7c5DyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNCa38Etns%2BJOappKtwDZ2SOxpeOXXRFyS5TNLs%2BDrWyh8oSgurLUWBOgViKF6jR%2BrH8ekXdD75ks1n1r8pnX%2B%2FeKWTEf1c6T24x1XPKVN1mpAiFchRuN2DouhH4oVSavvJM%2FKyVyoM1rPE6iSx%2BSYHDJA27pmEql%2FCqRJW9B9Eu8SCiRXjrBQvDkc01DLkQ3UzYGoOj%2F9fqYiltHND%2BqP5AD1ROsRbuvthMVb%2FTODkCpSH4k51bjuqDoVRnFgxsEFz8%2BP3ooAln9xPIQA5vL1pe8jUnB5q8g95p0rh3U1hxQETX8miWhSOd21wDGxhLFsvJXqUdwpP61FpxbigW4DVtgJC8f4Ay0DpA11P64LIcBZFCAHc7AOnMdp%2FHYg%2FdAnfIh9068%2Fbm9ilpeBbf3YvLas9PbYEOGEiA7z1rjjNOUwo%2Bf2EujZB%2FdZyLA3mfKY1YMXe7HAdLOPgfFWUSaVqFYk6UxaExmgrMhn%2BUCCVzw6Qqv2%2BcJ4Iq52uqwWhb9cd8DjpUKx9XKjTv%2BuDY%2F%2Bku%2FNaygoLu9PGvxptwhFrQW90L0YLjxLk7i2RvZs56OzAu07A3LSCl58NNzp9Fyg4AyRWJbMLKwiwpHGrjqZ9%2BKTocDXXM0j1qkzXMj1tdmscRQEI%2BvRaPf1Yw%2BfDlvwY6pgFXM%2B2uYaMrBgSMxVXXeahHkR2NmcV9ocp8aAcThUy9LaCWbRex8zgPMiU%2FxEnn9QfZSC15Y%2FRmd%2BF255E3Ruti9W65B6LlX9cjUwXJqDmkTBJjxxYA0bOQ6eTUWY59Xhjbh5wUaDaQtiTzN%2B5hx5W6UrB96YTQAeO3UfWwu2BXsoiwQQ6eXPRS71Xi6afpqUZAEz8SqDsQd371m5Oxu5RO%2FmAmHpT8&X-Amz-Signature=6e62ed044db34d96bd6f2a1343650e6973c9faec06d026db3a03f78ea71f79b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
