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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KHRMSEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCGj4eFg626azGZdvBxp7CZrtSWNh2HdpKwaaQIuLhL%2FAIgYQ6R9vi5rzIio2jxk5d%2FmkqqlZog3q9mhYpv8N0pc8wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNiVi57uQnJfm81npircA61hX%2BCE65OW%2Fm2tQ0PB4BjI%2FG0lGcPzLc0iEUfA59pTAqRU4L%2BxFt%2FbTGoAYMW7eZ2Qktj4juDqUp5qcLKdK5OgaQoZiDcFNlbrN%2F7ABoAbLNeshEMKE4AeYiazL8m32pFJourR90RURtg0sTm6fRy0KtsAS%2B4T0mC2Fskpl0oBvL%2FSxLjEMfllQPEB7nVm3HcH4T%2B6uL8NM%2B9tC5E8rDHVasntg99mklS%2BnjzdRkizxLzJBSEL39TpRvlJoueK8kkLCGjRz8qsoB3cq76xv9ikhmRFY%2BCmvIZ4DKP27KFmecD7zx5BIPkHybZAEhx0HC%2BmmOzbVE8OeWLvdu8bjsAar%2BJwziD5%2BwDX0NVtudEpb8ssAxl90axjb3I91j4iYEMwbajb8ivBEXU5MafUiMySKc6%2BuqQCpMo6v7pa7has8YFFpyBkcVJGIr0miljnbBbv%2FKMSeE6XyvNy6g5zMhuY8EUcjmZlaKWrispM%2BJsBT0DCTJrtoB0maHsMR6b6JDhn44dvxJu4VG1Suy%2FrHikXuH9FaYNIl3dLpqMTev%2FsPL9IA37IKURCkG6QGpJHJdlUa4NkrY8uKy%2FVpdiSw6YIc0sbRW0vQ4f2Ql4jLawbHxJxe8v7LV6UBoaOMIeUp8MGOqUBfVefPwlw2nVF3qMz%2FOhFnT%2FgS7ojEgjXOdDhIHGexy2%2Fsy3qMEKSc9S79uDlmreLs%2FSgCZPy4HC2FXLfoqqGfgdKvvvj%2B0EVWLU9YPKaAGbqMSgU9PIvLMY%2BP%2FlBrbCObrOP%2FcyigfjlKRb18PRmR0L5HOfiOHjImqYEJ4NsVhuNMogr7Vh73RqVhmwXNgZk58cHqyBxIdKdNEu9OwwKhemkmY0O&X-Amz-Signature=70819c974dc19a20c39bf11cf85b4b9d2697e414752778a0d4315acd3d29a774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KHRMSEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCGj4eFg626azGZdvBxp7CZrtSWNh2HdpKwaaQIuLhL%2FAIgYQ6R9vi5rzIio2jxk5d%2FmkqqlZog3q9mhYpv8N0pc8wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNiVi57uQnJfm81npircA61hX%2BCE65OW%2Fm2tQ0PB4BjI%2FG0lGcPzLc0iEUfA59pTAqRU4L%2BxFt%2FbTGoAYMW7eZ2Qktj4juDqUp5qcLKdK5OgaQoZiDcFNlbrN%2F7ABoAbLNeshEMKE4AeYiazL8m32pFJourR90RURtg0sTm6fRy0KtsAS%2B4T0mC2Fskpl0oBvL%2FSxLjEMfllQPEB7nVm3HcH4T%2B6uL8NM%2B9tC5E8rDHVasntg99mklS%2BnjzdRkizxLzJBSEL39TpRvlJoueK8kkLCGjRz8qsoB3cq76xv9ikhmRFY%2BCmvIZ4DKP27KFmecD7zx5BIPkHybZAEhx0HC%2BmmOzbVE8OeWLvdu8bjsAar%2BJwziD5%2BwDX0NVtudEpb8ssAxl90axjb3I91j4iYEMwbajb8ivBEXU5MafUiMySKc6%2BuqQCpMo6v7pa7has8YFFpyBkcVJGIr0miljnbBbv%2FKMSeE6XyvNy6g5zMhuY8EUcjmZlaKWrispM%2BJsBT0DCTJrtoB0maHsMR6b6JDhn44dvxJu4VG1Suy%2FrHikXuH9FaYNIl3dLpqMTev%2FsPL9IA37IKURCkG6QGpJHJdlUa4NkrY8uKy%2FVpdiSw6YIc0sbRW0vQ4f2Ql4jLawbHxJxe8v7LV6UBoaOMIeUp8MGOqUBfVefPwlw2nVF3qMz%2FOhFnT%2FgS7ojEgjXOdDhIHGexy2%2Fsy3qMEKSc9S79uDlmreLs%2FSgCZPy4HC2FXLfoqqGfgdKvvvj%2B0EVWLU9YPKaAGbqMSgU9PIvLMY%2BP%2FlBrbCObrOP%2FcyigfjlKRb18PRmR0L5HOfiOHjImqYEJ4NsVhuNMogr7Vh73RqVhmwXNgZk58cHqyBxIdKdNEu9OwwKhemkmY0O&X-Amz-Signature=bd818de8b568ca25680aaf573a4ae1006e822d712cf5cdc78fbd3d39a0c16009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KHRMSEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCGj4eFg626azGZdvBxp7CZrtSWNh2HdpKwaaQIuLhL%2FAIgYQ6R9vi5rzIio2jxk5d%2FmkqqlZog3q9mhYpv8N0pc8wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNiVi57uQnJfm81npircA61hX%2BCE65OW%2Fm2tQ0PB4BjI%2FG0lGcPzLc0iEUfA59pTAqRU4L%2BxFt%2FbTGoAYMW7eZ2Qktj4juDqUp5qcLKdK5OgaQoZiDcFNlbrN%2F7ABoAbLNeshEMKE4AeYiazL8m32pFJourR90RURtg0sTm6fRy0KtsAS%2B4T0mC2Fskpl0oBvL%2FSxLjEMfllQPEB7nVm3HcH4T%2B6uL8NM%2B9tC5E8rDHVasntg99mklS%2BnjzdRkizxLzJBSEL39TpRvlJoueK8kkLCGjRz8qsoB3cq76xv9ikhmRFY%2BCmvIZ4DKP27KFmecD7zx5BIPkHybZAEhx0HC%2BmmOzbVE8OeWLvdu8bjsAar%2BJwziD5%2BwDX0NVtudEpb8ssAxl90axjb3I91j4iYEMwbajb8ivBEXU5MafUiMySKc6%2BuqQCpMo6v7pa7has8YFFpyBkcVJGIr0miljnbBbv%2FKMSeE6XyvNy6g5zMhuY8EUcjmZlaKWrispM%2BJsBT0DCTJrtoB0maHsMR6b6JDhn44dvxJu4VG1Suy%2FrHikXuH9FaYNIl3dLpqMTev%2FsPL9IA37IKURCkG6QGpJHJdlUa4NkrY8uKy%2FVpdiSw6YIc0sbRW0vQ4f2Ql4jLawbHxJxe8v7LV6UBoaOMIeUp8MGOqUBfVefPwlw2nVF3qMz%2FOhFnT%2FgS7ojEgjXOdDhIHGexy2%2Fsy3qMEKSc9S79uDlmreLs%2FSgCZPy4HC2FXLfoqqGfgdKvvvj%2B0EVWLU9YPKaAGbqMSgU9PIvLMY%2BP%2FlBrbCObrOP%2FcyigfjlKRb18PRmR0L5HOfiOHjImqYEJ4NsVhuNMogr7Vh73RqVhmwXNgZk58cHqyBxIdKdNEu9OwwKhemkmY0O&X-Amz-Signature=0e87843db4f2ea96b4f9f534aafa3e3587cec6bfd784b5dd4cf1c4e64a10d687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
