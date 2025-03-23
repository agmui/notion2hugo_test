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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAJR7IA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAowxJRhBKjYv46WJ7b48ect8E21VFLiVwValIMxKZiKAiA%2B3lRgfi1X%2F9oWOogPyS5m9c9PXkfal7gY36jTZP6LziqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7mxvmNA853Vjm4MKtwDNtrZfNewJ6mKzoMuvoUtbftLG1fzi8e6ATUYPufWduf2XhYtTq8K3WlXiMrquTsUHk2WbGkRm492ThYzIwcsHyW1FosXRhNIXnY6dYvG3rLh65cfy3IAV1Wp4ZSG6D7WHKMkbFKbDKjcOfrfwCMi9JCiY4l2w6eBvWuT6F%2BESoRP8tOw5AtgtHxM5GAMHoqlkRd6aPLtrh5YsNaTg%2BJKSu2zFjDzB0xKuiwzQbvZPsc0%2F0%2BVQ5lw9W9rwQoQUyh3jdF5yqFwkPlAk2uuSPPzrKlSlQsvIviKyDM2KPNjlffBh%2FH29jxUFh59iHJT09qdO0p3NeiNFb8q1g4AGT6dddb8pvS3dQIMZWoBNLym7OgvW%2FwudvC6DmlZGd4TK7cvgZiDBpn4%2Blxj0vF%2BZOwJiuqwgoYn%2F4zRhUUit3Zsu962XhiGlz%2FzVRWNibKsX%2FFnB44k9Q8FKH3bBSZhuWG0GAUk%2BRvdVSz8b%2BSTFh52T2Hq%2BLgcxAkVhdT%2Ffve7oUMzJkk1Mz6tUqF5U7kdirIbF%2BwJFblPegLzcJyzHQArFj8Mb592iAjncmc24MU6L%2Fsy7RvUcoSFduNPonQiHI3uSIjelQqbj8QaW9OjcMOlnH9z8TiYSbo3B%2F1j858wkc3%2FvgY6pgHIZcX8rr8UPvW%2BVphTSOZ4SYXE%2Ba0lj3Czyhu6xRW8WK1p3isiWE%2B5dG2Pe9On3%2BgxDLvyEeNy16vWeUcp%2BdIrRDhaG5vanmHbF3aURurD0GszWGIzT%2B1qT%2BfosdBHpnrDoX2nOQ%2FctsUvwmhR5apm13GcWZu1ME6LSq6sipPoWgO8%2BI4eSjuwRVD6vtUgKNWcvD9nNEL12NEqDD5nm1s0cEZG65UJ&X-Amz-Signature=f79e31bf5d4e7be44ecaa62e6432be7f6509017f45e112d56ef1446d0873c41e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAJR7IA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAowxJRhBKjYv46WJ7b48ect8E21VFLiVwValIMxKZiKAiA%2B3lRgfi1X%2F9oWOogPyS5m9c9PXkfal7gY36jTZP6LziqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7mxvmNA853Vjm4MKtwDNtrZfNewJ6mKzoMuvoUtbftLG1fzi8e6ATUYPufWduf2XhYtTq8K3WlXiMrquTsUHk2WbGkRm492ThYzIwcsHyW1FosXRhNIXnY6dYvG3rLh65cfy3IAV1Wp4ZSG6D7WHKMkbFKbDKjcOfrfwCMi9JCiY4l2w6eBvWuT6F%2BESoRP8tOw5AtgtHxM5GAMHoqlkRd6aPLtrh5YsNaTg%2BJKSu2zFjDzB0xKuiwzQbvZPsc0%2F0%2BVQ5lw9W9rwQoQUyh3jdF5yqFwkPlAk2uuSPPzrKlSlQsvIviKyDM2KPNjlffBh%2FH29jxUFh59iHJT09qdO0p3NeiNFb8q1g4AGT6dddb8pvS3dQIMZWoBNLym7OgvW%2FwudvC6DmlZGd4TK7cvgZiDBpn4%2Blxj0vF%2BZOwJiuqwgoYn%2F4zRhUUit3Zsu962XhiGlz%2FzVRWNibKsX%2FFnB44k9Q8FKH3bBSZhuWG0GAUk%2BRvdVSz8b%2BSTFh52T2Hq%2BLgcxAkVhdT%2Ffve7oUMzJkk1Mz6tUqF5U7kdirIbF%2BwJFblPegLzcJyzHQArFj8Mb592iAjncmc24MU6L%2Fsy7RvUcoSFduNPonQiHI3uSIjelQqbj8QaW9OjcMOlnH9z8TiYSbo3B%2F1j858wkc3%2FvgY6pgHIZcX8rr8UPvW%2BVphTSOZ4SYXE%2Ba0lj3Czyhu6xRW8WK1p3isiWE%2B5dG2Pe9On3%2BgxDLvyEeNy16vWeUcp%2BdIrRDhaG5vanmHbF3aURurD0GszWGIzT%2B1qT%2BfosdBHpnrDoX2nOQ%2FctsUvwmhR5apm13GcWZu1ME6LSq6sipPoWgO8%2BI4eSjuwRVD6vtUgKNWcvD9nNEL12NEqDD5nm1s0cEZG65UJ&X-Amz-Signature=025a4c1bb20185d2d64e5c2572abeaeada9b2de862b8380a32aa8d22dc420081&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAJR7IA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAowxJRhBKjYv46WJ7b48ect8E21VFLiVwValIMxKZiKAiA%2B3lRgfi1X%2F9oWOogPyS5m9c9PXkfal7gY36jTZP6LziqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7mxvmNA853Vjm4MKtwDNtrZfNewJ6mKzoMuvoUtbftLG1fzi8e6ATUYPufWduf2XhYtTq8K3WlXiMrquTsUHk2WbGkRm492ThYzIwcsHyW1FosXRhNIXnY6dYvG3rLh65cfy3IAV1Wp4ZSG6D7WHKMkbFKbDKjcOfrfwCMi9JCiY4l2w6eBvWuT6F%2BESoRP8tOw5AtgtHxM5GAMHoqlkRd6aPLtrh5YsNaTg%2BJKSu2zFjDzB0xKuiwzQbvZPsc0%2F0%2BVQ5lw9W9rwQoQUyh3jdF5yqFwkPlAk2uuSPPzrKlSlQsvIviKyDM2KPNjlffBh%2FH29jxUFh59iHJT09qdO0p3NeiNFb8q1g4AGT6dddb8pvS3dQIMZWoBNLym7OgvW%2FwudvC6DmlZGd4TK7cvgZiDBpn4%2Blxj0vF%2BZOwJiuqwgoYn%2F4zRhUUit3Zsu962XhiGlz%2FzVRWNibKsX%2FFnB44k9Q8FKH3bBSZhuWG0GAUk%2BRvdVSz8b%2BSTFh52T2Hq%2BLgcxAkVhdT%2Ffve7oUMzJkk1Mz6tUqF5U7kdirIbF%2BwJFblPegLzcJyzHQArFj8Mb592iAjncmc24MU6L%2Fsy7RvUcoSFduNPonQiHI3uSIjelQqbj8QaW9OjcMOlnH9z8TiYSbo3B%2F1j858wkc3%2FvgY6pgHIZcX8rr8UPvW%2BVphTSOZ4SYXE%2Ba0lj3Czyhu6xRW8WK1p3isiWE%2B5dG2Pe9On3%2BgxDLvyEeNy16vWeUcp%2BdIrRDhaG5vanmHbF3aURurD0GszWGIzT%2B1qT%2BfosdBHpnrDoX2nOQ%2FctsUvwmhR5apm13GcWZu1ME6LSq6sipPoWgO8%2BI4eSjuwRVD6vtUgKNWcvD9nNEL12NEqDD5nm1s0cEZG65UJ&X-Amz-Signature=0ff289fa0aa7dc1aff58b34cf45e12f861003e6db8c7844e7ed778a635c9e89c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
