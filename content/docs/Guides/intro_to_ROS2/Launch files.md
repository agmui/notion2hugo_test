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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKMLKZP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv58LtcgTpJx%2FNAo3eNy11VputKKmjXNqtdBaLtFcvJwIhANle3bYzc9iOr9icA1IbRNSwuYBmLIwgvm239eB5Q9ReKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ovciepOlRu3jFRYq3AOijCzuj5bGmVxh%2BWG%2F2cm9TNxHQbGA8pFe%2BAsM7m%2BF1BlaPMWnzatQE5FyKJMnv8KpRkw7SlLn%2F5WBmSESlb5JmxbIVOEk1Asq3cGItomaLJPGPShNEgEr%2BZvOEBv3Jsm7MOlcQeZIACUaB9It7N6zez%2Ft8Vp%2Bw17YqF4ZeVc47BNiGZdUJZ8yxyXy1SVxDktDbyrCw18fIsBbXlggOa3asEyWWohoyLTMK89q%2Fju%2BPI%2B8iaf3B1XsnubVqIzgQZKItSVmo9vrpaCAm8UdHQm2LkT1Koli%2F8Ez6C90%2BTy2D55ZBX1wioUKk1WDLCgIxTKeARDSI8RsVk3bKNc6mzZH6iEZ85nxcFkiUeP3JevSJWUDQYZxp2KpsjLmsV77QH8l68Ec6SbrY%2BLOJStYn168z%2F76m0G%2FoCJHgY2Yf658IhCVhb9uPASN8VqjMTQCi3MRgYAgORwP%2BMbg0S%2Fz5iVbigka4XI2mX5Q5%2Bsy1Qa7JnGqVFa1IE4morRlDgZ0ni9LxQkiowNaSdY77y%2F4gjNMLU%2FgIFMKVTQ5DdaRcIH6nhK5pc4fQyf1QVt21PzkWcgvy5U5jzBn97OGsqvSKC9XovaahelXuLm%2BX4FsK51ryBoxqVHlAJgN5bYRCzCOrs6%2BBjqkAaldheRvb2y1q6NdLcuvcJrkRPZdCoRPfjwD3uUPHorwAeaJ8tD5%2FNsAY2TMepfCGMrBCxBFlE7Gd7NZFTwQfpUCnaufuzwCMto7bhLxwoafSaW5F9pLCiXYFkSE5p9vW2Zx%2FoY1q5VSezvyL%2B4hZxkhF6hlXWuzbiBszm5lSPaG8hXwi2c1dRnk5vSFQqwrHXaFgyRs5W8DMCy7IgBIPGHA5uXn&X-Amz-Signature=07a142388e1a316cea8a0d32b97f9c061bb1935e01e74ccff31aa00931fa39b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKMLKZP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv58LtcgTpJx%2FNAo3eNy11VputKKmjXNqtdBaLtFcvJwIhANle3bYzc9iOr9icA1IbRNSwuYBmLIwgvm239eB5Q9ReKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ovciepOlRu3jFRYq3AOijCzuj5bGmVxh%2BWG%2F2cm9TNxHQbGA8pFe%2BAsM7m%2BF1BlaPMWnzatQE5FyKJMnv8KpRkw7SlLn%2F5WBmSESlb5JmxbIVOEk1Asq3cGItomaLJPGPShNEgEr%2BZvOEBv3Jsm7MOlcQeZIACUaB9It7N6zez%2Ft8Vp%2Bw17YqF4ZeVc47BNiGZdUJZ8yxyXy1SVxDktDbyrCw18fIsBbXlggOa3asEyWWohoyLTMK89q%2Fju%2BPI%2B8iaf3B1XsnubVqIzgQZKItSVmo9vrpaCAm8UdHQm2LkT1Koli%2F8Ez6C90%2BTy2D55ZBX1wioUKk1WDLCgIxTKeARDSI8RsVk3bKNc6mzZH6iEZ85nxcFkiUeP3JevSJWUDQYZxp2KpsjLmsV77QH8l68Ec6SbrY%2BLOJStYn168z%2F76m0G%2FoCJHgY2Yf658IhCVhb9uPASN8VqjMTQCi3MRgYAgORwP%2BMbg0S%2Fz5iVbigka4XI2mX5Q5%2Bsy1Qa7JnGqVFa1IE4morRlDgZ0ni9LxQkiowNaSdY77y%2F4gjNMLU%2FgIFMKVTQ5DdaRcIH6nhK5pc4fQyf1QVt21PzkWcgvy5U5jzBn97OGsqvSKC9XovaahelXuLm%2BX4FsK51ryBoxqVHlAJgN5bYRCzCOrs6%2BBjqkAaldheRvb2y1q6NdLcuvcJrkRPZdCoRPfjwD3uUPHorwAeaJ8tD5%2FNsAY2TMepfCGMrBCxBFlE7Gd7NZFTwQfpUCnaufuzwCMto7bhLxwoafSaW5F9pLCiXYFkSE5p9vW2Zx%2FoY1q5VSezvyL%2B4hZxkhF6hlXWuzbiBszm5lSPaG8hXwi2c1dRnk5vSFQqwrHXaFgyRs5W8DMCy7IgBIPGHA5uXn&X-Amz-Signature=0e20f23fa6127b3dfe5bc2389e176a8f5146fa9873e7e7b824d8235250b3b0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKMLKZP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv58LtcgTpJx%2FNAo3eNy11VputKKmjXNqtdBaLtFcvJwIhANle3bYzc9iOr9icA1IbRNSwuYBmLIwgvm239eB5Q9ReKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ovciepOlRu3jFRYq3AOijCzuj5bGmVxh%2BWG%2F2cm9TNxHQbGA8pFe%2BAsM7m%2BF1BlaPMWnzatQE5FyKJMnv8KpRkw7SlLn%2F5WBmSESlb5JmxbIVOEk1Asq3cGItomaLJPGPShNEgEr%2BZvOEBv3Jsm7MOlcQeZIACUaB9It7N6zez%2Ft8Vp%2Bw17YqF4ZeVc47BNiGZdUJZ8yxyXy1SVxDktDbyrCw18fIsBbXlggOa3asEyWWohoyLTMK89q%2Fju%2BPI%2B8iaf3B1XsnubVqIzgQZKItSVmo9vrpaCAm8UdHQm2LkT1Koli%2F8Ez6C90%2BTy2D55ZBX1wioUKk1WDLCgIxTKeARDSI8RsVk3bKNc6mzZH6iEZ85nxcFkiUeP3JevSJWUDQYZxp2KpsjLmsV77QH8l68Ec6SbrY%2BLOJStYn168z%2F76m0G%2FoCJHgY2Yf658IhCVhb9uPASN8VqjMTQCi3MRgYAgORwP%2BMbg0S%2Fz5iVbigka4XI2mX5Q5%2Bsy1Qa7JnGqVFa1IE4morRlDgZ0ni9LxQkiowNaSdY77y%2F4gjNMLU%2FgIFMKVTQ5DdaRcIH6nhK5pc4fQyf1QVt21PzkWcgvy5U5jzBn97OGsqvSKC9XovaahelXuLm%2BX4FsK51ryBoxqVHlAJgN5bYRCzCOrs6%2BBjqkAaldheRvb2y1q6NdLcuvcJrkRPZdCoRPfjwD3uUPHorwAeaJ8tD5%2FNsAY2TMepfCGMrBCxBFlE7Gd7NZFTwQfpUCnaufuzwCMto7bhLxwoafSaW5F9pLCiXYFkSE5p9vW2Zx%2FoY1q5VSezvyL%2B4hZxkhF6hlXWuzbiBszm5lSPaG8hXwi2c1dRnk5vSFQqwrHXaFgyRs5W8DMCy7IgBIPGHA5uXn&X-Amz-Signature=9b9fa3a5b2f9eb8a8586ad4146988ebcd0a3f7b93638d2ab162ccbc2a592f32a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
