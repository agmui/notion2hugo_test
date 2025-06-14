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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ENYJJX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD04EWpvu57Y97nC4QpSDZKmILsC0tjaQylewEb4gByOwIgTqJvfz%2Bber99YucB5H2u8pk7QucpGZf%2Fj%2Bv3ZRvGrL8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJEU0WuMGGxICM1afCrcA%2BS6JvvXSca%2BvPG4WT3Al%2FvcF%2FntboppVPEBIiCz%2BGiVWCI%2By6szsGO%2FnSuBkfodQl1%2FyruFULG%2Bm8V%2F3Encn7z8QcNQEl4rCpsn62err0fO61gH3JyfSwm7xgblsfyGL%2FQPJmTe9LwxFw3jknc36ybHD2xhRAzkFVmBSgdJy5rHzW75atN4S3m5kf5x6d4rTI%2BhBmN9V8Lt%2FVAWpItC7xVnOR%2FN9yOjGUHRuK8oscrdCHOIw4P4EWTkgaHU6u%2BLtrHXedIwDyJcgSe%2BHG35xSReIzNh3sK4brThGzAMF4WeprHlWwO2nMvrSPzhf5D5gjjcNKVzvdiQ1cTgZLxuMMvYwgHjBUyBYsV42z63TIEOk%2B%2BSIJtMiumvFMkIPpi9tVDRDQy3Sbjhd6CaW%2Fx7UtlVyhAW2Odza0PZm61oY4SxIUahL7YUZ3I0gXxuBPRmoil49f6ZrN5wPrPkHT2xsCnzxav46Cx3Y1q7mfak4WW1P9DTksEr6dH6oMHpn4zYKIX6k0jyeWCN3vcc0MbpFEgFWfYM0qhq7LOyAGRc97BVEAl%2F85ttVyqC9y%2FM7W8UA93PIaSlZzhCTOPGitdCVGxt7RPj3eO0GYaEZyuaqvNE8uD%2Bn%2B5gGtyo4eIwMNe6tsIGOqUBeds7vN%2ByPNtHUenRpiqrZ52q2UhEKi2LoUjA3N3vbfwA9OhV%2BV8qQJPh1YFeh%2F0OayZ%2FPvxasGUB9%2BJncgqFvmDCwADXeJOCok7CQL7a0ohWW9bh04dF64Rx3WApFbSzGHDn7aFmNIWijbtFg7C2El%2FUfTohywx36m0juIw65Lx0AdkIRb%2BnI%2BtMZ0tLu90%2Bj116ojs%2FwK%2BoBjBXQd0KtHJRV8z1&X-Amz-Signature=d63a43b25e70d562aed9a0f8fff1c7ce982bd037dd44c11d5d9c81a6cc80823c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ENYJJX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD04EWpvu57Y97nC4QpSDZKmILsC0tjaQylewEb4gByOwIgTqJvfz%2Bber99YucB5H2u8pk7QucpGZf%2Fj%2Bv3ZRvGrL8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJEU0WuMGGxICM1afCrcA%2BS6JvvXSca%2BvPG4WT3Al%2FvcF%2FntboppVPEBIiCz%2BGiVWCI%2By6szsGO%2FnSuBkfodQl1%2FyruFULG%2Bm8V%2F3Encn7z8QcNQEl4rCpsn62err0fO61gH3JyfSwm7xgblsfyGL%2FQPJmTe9LwxFw3jknc36ybHD2xhRAzkFVmBSgdJy5rHzW75atN4S3m5kf5x6d4rTI%2BhBmN9V8Lt%2FVAWpItC7xVnOR%2FN9yOjGUHRuK8oscrdCHOIw4P4EWTkgaHU6u%2BLtrHXedIwDyJcgSe%2BHG35xSReIzNh3sK4brThGzAMF4WeprHlWwO2nMvrSPzhf5D5gjjcNKVzvdiQ1cTgZLxuMMvYwgHjBUyBYsV42z63TIEOk%2B%2BSIJtMiumvFMkIPpi9tVDRDQy3Sbjhd6CaW%2Fx7UtlVyhAW2Odza0PZm61oY4SxIUahL7YUZ3I0gXxuBPRmoil49f6ZrN5wPrPkHT2xsCnzxav46Cx3Y1q7mfak4WW1P9DTksEr6dH6oMHpn4zYKIX6k0jyeWCN3vcc0MbpFEgFWfYM0qhq7LOyAGRc97BVEAl%2F85ttVyqC9y%2FM7W8UA93PIaSlZzhCTOPGitdCVGxt7RPj3eO0GYaEZyuaqvNE8uD%2Bn%2B5gGtyo4eIwMNe6tsIGOqUBeds7vN%2ByPNtHUenRpiqrZ52q2UhEKi2LoUjA3N3vbfwA9OhV%2BV8qQJPh1YFeh%2F0OayZ%2FPvxasGUB9%2BJncgqFvmDCwADXeJOCok7CQL7a0ohWW9bh04dF64Rx3WApFbSzGHDn7aFmNIWijbtFg7C2El%2FUfTohywx36m0juIw65Lx0AdkIRb%2BnI%2BtMZ0tLu90%2Bj116ojs%2FwK%2BoBjBXQd0KtHJRV8z1&X-Amz-Signature=8c100f62e8f29e5b2c35740a35561532369d270963a893c883b18ef99e81cd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ENYJJX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD04EWpvu57Y97nC4QpSDZKmILsC0tjaQylewEb4gByOwIgTqJvfz%2Bber99YucB5H2u8pk7QucpGZf%2Fj%2Bv3ZRvGrL8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJEU0WuMGGxICM1afCrcA%2BS6JvvXSca%2BvPG4WT3Al%2FvcF%2FntboppVPEBIiCz%2BGiVWCI%2By6szsGO%2FnSuBkfodQl1%2FyruFULG%2Bm8V%2F3Encn7z8QcNQEl4rCpsn62err0fO61gH3JyfSwm7xgblsfyGL%2FQPJmTe9LwxFw3jknc36ybHD2xhRAzkFVmBSgdJy5rHzW75atN4S3m5kf5x6d4rTI%2BhBmN9V8Lt%2FVAWpItC7xVnOR%2FN9yOjGUHRuK8oscrdCHOIw4P4EWTkgaHU6u%2BLtrHXedIwDyJcgSe%2BHG35xSReIzNh3sK4brThGzAMF4WeprHlWwO2nMvrSPzhf5D5gjjcNKVzvdiQ1cTgZLxuMMvYwgHjBUyBYsV42z63TIEOk%2B%2BSIJtMiumvFMkIPpi9tVDRDQy3Sbjhd6CaW%2Fx7UtlVyhAW2Odza0PZm61oY4SxIUahL7YUZ3I0gXxuBPRmoil49f6ZrN5wPrPkHT2xsCnzxav46Cx3Y1q7mfak4WW1P9DTksEr6dH6oMHpn4zYKIX6k0jyeWCN3vcc0MbpFEgFWfYM0qhq7LOyAGRc97BVEAl%2F85ttVyqC9y%2FM7W8UA93PIaSlZzhCTOPGitdCVGxt7RPj3eO0GYaEZyuaqvNE8uD%2Bn%2B5gGtyo4eIwMNe6tsIGOqUBeds7vN%2ByPNtHUenRpiqrZ52q2UhEKi2LoUjA3N3vbfwA9OhV%2BV8qQJPh1YFeh%2F0OayZ%2FPvxasGUB9%2BJncgqFvmDCwADXeJOCok7CQL7a0ohWW9bh04dF64Rx3WApFbSzGHDn7aFmNIWijbtFg7C2El%2FUfTohywx36m0juIw65Lx0AdkIRb%2BnI%2BtMZ0tLu90%2Bj116ojs%2FwK%2BoBjBXQd0KtHJRV8z1&X-Amz-Signature=99ad0678aa91f3765b50571b6d9bec2e04fc447ebeb49c0fe7f93f03ed0ef416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
