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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2J4Z3J%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBeVwHNBnHyuf2mZ%2B0oqy%2FHYRGRL52YfnXCYioEDR1bAAiBG%2BV16gglvo%2F0yTjvnM3FaEHb6W1et%2FKDOSBgDUzgcbyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIFpZc8xgNiLU9TTKtwDFRwpGbt%2BFuJQwp4%2Ft02kiyIdFuf393qRtYNQgqhimvI7n93yksgoYous4EA9fVJcM8I61Zmn899iL80tRol1OqvIBY1WwJlmwuDOoU%2FlBffz%2FXKJaYCI1Zw1BqWLesFNt69LUiqobf88HI7qhEFDjQ8h%2FRpqXtOMHJj9vO0f%2Fd%2BCyD6MoOK4Tg%2BmCy0GuPfS%2F5C0gNLMIMCZnIdKQIekZJVrThl0KogDuqo2Oi7vjYEzf1pa8x2n4wS1cMLVuxQSEtAnRGNwfEtsXZBao4iIKqAL8%2Bju5tFgS8Iu6X%2FNZ8UhJZnLgQ0BrsHxpLj%2FVgQph862pxpKcZxvpzW3E%2FP5mL7BrZ4rLjucGJ5SZctJpn0NNZahpP6QgDdCnHwxPzj4i0wLnG7ufMGZWmScgipggNiXRSMWOnQIAyUunr6iOAdwEt9j9yOVEWB2uup9NAWlfMoMUj6DSU5mSzRnpjwGTg4XEgvN4ryyYiPS0cvbQFv93HXFEnSBSMsvucIHUZPAAwd%2Bkrxq6HLG6VFwHqYeG1XLuYiBQrmVuY%2BCd59%2Fd3loyJmgOGLJo7gzDY9%2FllICOknIR6UV%2BbIUn%2FLQz8fDQZU4Sod7rwt%2FDvYeE1O8hq7iHKFb0ck5h%2B17Lh0w7YnuvwY6pgE5rogMrQaEaFTRyDYdwlPDBWt0SM%2BnOmi678iseQjdiDGGP4C2pqd4YwS7vE%2FqewR3pVlgSgB2md5ZJhFgNKngyOlI9yr2R4185gZQW3v6s7H5aKu%2BA%2BWdS34G%2FvYI0Wjpg3Vqh21VHDvMGXcTL4P5vHDnyo0Y95i7Kacg%2BjF5pftB7L2LxY%2BZuMCzaCGAHsVeVt%2FB%2FfabqjpCwJssGi6OSLVc%2FkQS&X-Amz-Signature=5103f2d23b0ea84b20a86ce689cc4f41cce870f7aca72ac197e147e222917fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2J4Z3J%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBeVwHNBnHyuf2mZ%2B0oqy%2FHYRGRL52YfnXCYioEDR1bAAiBG%2BV16gglvo%2F0yTjvnM3FaEHb6W1et%2FKDOSBgDUzgcbyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIFpZc8xgNiLU9TTKtwDFRwpGbt%2BFuJQwp4%2Ft02kiyIdFuf393qRtYNQgqhimvI7n93yksgoYous4EA9fVJcM8I61Zmn899iL80tRol1OqvIBY1WwJlmwuDOoU%2FlBffz%2FXKJaYCI1Zw1BqWLesFNt69LUiqobf88HI7qhEFDjQ8h%2FRpqXtOMHJj9vO0f%2Fd%2BCyD6MoOK4Tg%2BmCy0GuPfS%2F5C0gNLMIMCZnIdKQIekZJVrThl0KogDuqo2Oi7vjYEzf1pa8x2n4wS1cMLVuxQSEtAnRGNwfEtsXZBao4iIKqAL8%2Bju5tFgS8Iu6X%2FNZ8UhJZnLgQ0BrsHxpLj%2FVgQph862pxpKcZxvpzW3E%2FP5mL7BrZ4rLjucGJ5SZctJpn0NNZahpP6QgDdCnHwxPzj4i0wLnG7ufMGZWmScgipggNiXRSMWOnQIAyUunr6iOAdwEt9j9yOVEWB2uup9NAWlfMoMUj6DSU5mSzRnpjwGTg4XEgvN4ryyYiPS0cvbQFv93HXFEnSBSMsvucIHUZPAAwd%2Bkrxq6HLG6VFwHqYeG1XLuYiBQrmVuY%2BCd59%2Fd3loyJmgOGLJo7gzDY9%2FllICOknIR6UV%2BbIUn%2FLQz8fDQZU4Sod7rwt%2FDvYeE1O8hq7iHKFb0ck5h%2B17Lh0w7YnuvwY6pgE5rogMrQaEaFTRyDYdwlPDBWt0SM%2BnOmi678iseQjdiDGGP4C2pqd4YwS7vE%2FqewR3pVlgSgB2md5ZJhFgNKngyOlI9yr2R4185gZQW3v6s7H5aKu%2BA%2BWdS34G%2FvYI0Wjpg3Vqh21VHDvMGXcTL4P5vHDnyo0Y95i7Kacg%2BjF5pftB7L2LxY%2BZuMCzaCGAHsVeVt%2FB%2FfabqjpCwJssGi6OSLVc%2FkQS&X-Amz-Signature=79353e20c4ece56d27a4c6f8aa07e0c92d5963ca5871a5692f152b1fc0c80903&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2J4Z3J%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBeVwHNBnHyuf2mZ%2B0oqy%2FHYRGRL52YfnXCYioEDR1bAAiBG%2BV16gglvo%2F0yTjvnM3FaEHb6W1et%2FKDOSBgDUzgcbyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIFpZc8xgNiLU9TTKtwDFRwpGbt%2BFuJQwp4%2Ft02kiyIdFuf393qRtYNQgqhimvI7n93yksgoYous4EA9fVJcM8I61Zmn899iL80tRol1OqvIBY1WwJlmwuDOoU%2FlBffz%2FXKJaYCI1Zw1BqWLesFNt69LUiqobf88HI7qhEFDjQ8h%2FRpqXtOMHJj9vO0f%2Fd%2BCyD6MoOK4Tg%2BmCy0GuPfS%2F5C0gNLMIMCZnIdKQIekZJVrThl0KogDuqo2Oi7vjYEzf1pa8x2n4wS1cMLVuxQSEtAnRGNwfEtsXZBao4iIKqAL8%2Bju5tFgS8Iu6X%2FNZ8UhJZnLgQ0BrsHxpLj%2FVgQph862pxpKcZxvpzW3E%2FP5mL7BrZ4rLjucGJ5SZctJpn0NNZahpP6QgDdCnHwxPzj4i0wLnG7ufMGZWmScgipggNiXRSMWOnQIAyUunr6iOAdwEt9j9yOVEWB2uup9NAWlfMoMUj6DSU5mSzRnpjwGTg4XEgvN4ryyYiPS0cvbQFv93HXFEnSBSMsvucIHUZPAAwd%2Bkrxq6HLG6VFwHqYeG1XLuYiBQrmVuY%2BCd59%2Fd3loyJmgOGLJo7gzDY9%2FllICOknIR6UV%2BbIUn%2FLQz8fDQZU4Sod7rwt%2FDvYeE1O8hq7iHKFb0ck5h%2B17Lh0w7YnuvwY6pgE5rogMrQaEaFTRyDYdwlPDBWt0SM%2BnOmi678iseQjdiDGGP4C2pqd4YwS7vE%2FqewR3pVlgSgB2md5ZJhFgNKngyOlI9yr2R4185gZQW3v6s7H5aKu%2BA%2BWdS34G%2FvYI0Wjpg3Vqh21VHDvMGXcTL4P5vHDnyo0Y95i7Kacg%2BjF5pftB7L2LxY%2BZuMCzaCGAHsVeVt%2FB%2FfabqjpCwJssGi6OSLVc%2FkQS&X-Amz-Signature=ee7d53503b4c0a0be64e57310afc4293644704d73b7980c6bfec23e921bcb814&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
