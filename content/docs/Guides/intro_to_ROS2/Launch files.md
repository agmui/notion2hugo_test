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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4TZ7QR%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiY9EdXM2gOogKJDOTeg%2F2m%2FUABRgHeAJ%2B1mVrMpoG3AIhAP%2FFbPArbb98LLyNqqkWa6gf7YzXGafs2oOcLVwjLgJLKv8DCHwQABoMNjM3NDIzMTgzODA1IgwzfDbe8vyzJwSnPpQq3AOtR85IAFozJtGrGanGXlUJGX4Dlq2u0YZG7Pg%2BwtON0JFTd2EPxbH%2FZUNdJt9jzLv30BAgQm8tNYZaldTbHQloIx9T%2BqXzLUDm%2Ft7laphPzzFCUkAABBfAwoA0CFkFvBVRAlE1t2V8RTYWk%2B1%2BwDyE7SzsCGBudoc64%2Flhi5UGE38PdXC8owelOgm5MZgFJGxODkiWHNwdr7S2%2FxPzeiAl06xzobPcg3WBc2dvmvhXdVacLfyVUX0HxgwUNaAVCfIDZ9Vxa2fZTUiWpxsx9Xjr02VVTH3dM2qxCWjXSBUbeigIsR41Oem%2BRo5sW0ducttdPp1HbzvG3P0W99ThzePPfFi8sMOk91ZN%2BgKjK%2BHtfzaesey5CVlQZ%2FUxolXwoWmU1%2BGBEy5yPX5LfZSW9SZv0GyPKvR4RKh6CRqRaMVY4kMTvcsKcK9NAPx%2BogAjYoRc4isfSfJ2HZRo2zggVvIPTXevRBLSaqPTmoDBBwyQgCHJNNM0XA7omMXoyISsx79bam6QTB0WukI4EhmqLwnr%2BZ1Z6xOmV1XnlytxEvPuDAnZ3vkEYuXaYJBsygG%2FjvoH0O%2BL7oKNNDAY%2FXrxYpug%2FKQkl1SE7AKLssQo3pjjz5eEmoaIsz8wGhr5pDCCyvvCBjqkAVO3kgEYBbuIAzZw6peIHehuAL36n%2FMahfmVEt9coZsPhQDjR9F%2B%2Bdhaj0pGHRBw4G4KpyXous2OCCsD67ICSKQaWrWZph2VhUMwN8ZlSMlnhxSUrpUSIP212sa1TVtUMKcWUeO8HNJfkxG5Om3DwzEFFGj1eBwgcIl9oaM9QWtf3srFnyp%2BMrgPXzQirWYtOZ4e5vPvUi042cD48q8GH6321nJ%2B&X-Amz-Signature=055bbadbdf51a075fbec9bf2070382b65b119a0beddcb97991af5bd13e064287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4TZ7QR%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiY9EdXM2gOogKJDOTeg%2F2m%2FUABRgHeAJ%2B1mVrMpoG3AIhAP%2FFbPArbb98LLyNqqkWa6gf7YzXGafs2oOcLVwjLgJLKv8DCHwQABoMNjM3NDIzMTgzODA1IgwzfDbe8vyzJwSnPpQq3AOtR85IAFozJtGrGanGXlUJGX4Dlq2u0YZG7Pg%2BwtON0JFTd2EPxbH%2FZUNdJt9jzLv30BAgQm8tNYZaldTbHQloIx9T%2BqXzLUDm%2Ft7laphPzzFCUkAABBfAwoA0CFkFvBVRAlE1t2V8RTYWk%2B1%2BwDyE7SzsCGBudoc64%2Flhi5UGE38PdXC8owelOgm5MZgFJGxODkiWHNwdr7S2%2FxPzeiAl06xzobPcg3WBc2dvmvhXdVacLfyVUX0HxgwUNaAVCfIDZ9Vxa2fZTUiWpxsx9Xjr02VVTH3dM2qxCWjXSBUbeigIsR41Oem%2BRo5sW0ducttdPp1HbzvG3P0W99ThzePPfFi8sMOk91ZN%2BgKjK%2BHtfzaesey5CVlQZ%2FUxolXwoWmU1%2BGBEy5yPX5LfZSW9SZv0GyPKvR4RKh6CRqRaMVY4kMTvcsKcK9NAPx%2BogAjYoRc4isfSfJ2HZRo2zggVvIPTXevRBLSaqPTmoDBBwyQgCHJNNM0XA7omMXoyISsx79bam6QTB0WukI4EhmqLwnr%2BZ1Z6xOmV1XnlytxEvPuDAnZ3vkEYuXaYJBsygG%2FjvoH0O%2BL7oKNNDAY%2FXrxYpug%2FKQkl1SE7AKLssQo3pjjz5eEmoaIsz8wGhr5pDCCyvvCBjqkAVO3kgEYBbuIAzZw6peIHehuAL36n%2FMahfmVEt9coZsPhQDjR9F%2B%2Bdhaj0pGHRBw4G4KpyXous2OCCsD67ICSKQaWrWZph2VhUMwN8ZlSMlnhxSUrpUSIP212sa1TVtUMKcWUeO8HNJfkxG5Om3DwzEFFGj1eBwgcIl9oaM9QWtf3srFnyp%2BMrgPXzQirWYtOZ4e5vPvUi042cD48q8GH6321nJ%2B&X-Amz-Signature=83bf4e0ea3a1099c33b4416e14165193cd067635c4cb9d4ee8a81e543ab9d009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4TZ7QR%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiY9EdXM2gOogKJDOTeg%2F2m%2FUABRgHeAJ%2B1mVrMpoG3AIhAP%2FFbPArbb98LLyNqqkWa6gf7YzXGafs2oOcLVwjLgJLKv8DCHwQABoMNjM3NDIzMTgzODA1IgwzfDbe8vyzJwSnPpQq3AOtR85IAFozJtGrGanGXlUJGX4Dlq2u0YZG7Pg%2BwtON0JFTd2EPxbH%2FZUNdJt9jzLv30BAgQm8tNYZaldTbHQloIx9T%2BqXzLUDm%2Ft7laphPzzFCUkAABBfAwoA0CFkFvBVRAlE1t2V8RTYWk%2B1%2BwDyE7SzsCGBudoc64%2Flhi5UGE38PdXC8owelOgm5MZgFJGxODkiWHNwdr7S2%2FxPzeiAl06xzobPcg3WBc2dvmvhXdVacLfyVUX0HxgwUNaAVCfIDZ9Vxa2fZTUiWpxsx9Xjr02VVTH3dM2qxCWjXSBUbeigIsR41Oem%2BRo5sW0ducttdPp1HbzvG3P0W99ThzePPfFi8sMOk91ZN%2BgKjK%2BHtfzaesey5CVlQZ%2FUxolXwoWmU1%2BGBEy5yPX5LfZSW9SZv0GyPKvR4RKh6CRqRaMVY4kMTvcsKcK9NAPx%2BogAjYoRc4isfSfJ2HZRo2zggVvIPTXevRBLSaqPTmoDBBwyQgCHJNNM0XA7omMXoyISsx79bam6QTB0WukI4EhmqLwnr%2BZ1Z6xOmV1XnlytxEvPuDAnZ3vkEYuXaYJBsygG%2FjvoH0O%2BL7oKNNDAY%2FXrxYpug%2FKQkl1SE7AKLssQo3pjjz5eEmoaIsz8wGhr5pDCCyvvCBjqkAVO3kgEYBbuIAzZw6peIHehuAL36n%2FMahfmVEt9coZsPhQDjR9F%2B%2Bdhaj0pGHRBw4G4KpyXous2OCCsD67ICSKQaWrWZph2VhUMwN8ZlSMlnhxSUrpUSIP212sa1TVtUMKcWUeO8HNJfkxG5Om3DwzEFFGj1eBwgcIl9oaM9QWtf3srFnyp%2BMrgPXzQirWYtOZ4e5vPvUi042cD48q8GH6321nJ%2B&X-Amz-Signature=878447522889392883b7b168a941264f8733db8c698e6b82b7e58bf08273cd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
