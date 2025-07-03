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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2VIYFL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAC9%2F3rH0kXnM72aKOv%2FrZj%2BR9afMC%2FoYRhW%2B%2BvbdKc7AiBwdwGHmco0FsJVsSKV6ozXhzCh4FFNahPiO7ImOrAEzSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMWoeCpQOZr60H1TgYKtwDCyhI2GaEjWo53IYSgZumLoT8LVtUGURNGY6WhogS%2FLCyKjvX6fLu82uK%2FBBGFua%2BzmcI%2B18gGWnkWHRjqNRdPk%2BkJ5CakbSFnvf7Najm2GxesbTn%2FKJPY%2Bn8gvSQvMp5YvjBy68XVFfK78K2VyWnMKNR2n9uzjdYuDB6BqHX3ArfSVtN5dExdAWbitBKcqSUABA17SPiMFQnyQQPlN0VYCn0OdQaRGqY89EXQg0JlXXOfukFzbybvnmzf6Hs4h%2FSbaKbS3vjbq95OmIHyhl8yhA0a1JlXfBzGRe2tTNe7oQuh5mFqFHtRovk45316UqHJ8ne%2BQgLbvfLeRtldIrFxdlOhgfXw%2FbLOSLHlXM3G9vOqQjsAS5fJnArcf84eF7Jw753oqTnkt6KbhnsKokQ%2FkzIWNXKVmq7H6e5k9j%2BHGr%2B2Ia%2BbGQiM2QtEc1gH%2BB1NkRzTu2nuproXbkZEk47BQlYi4bTMKuH5BEnvzFcXOzkhoFaEtPfLZzQJEzwz%2FrSJSEQodcrcw2wz%2BZTwuCQJhFwYkXH80CBc%2FQpGDNtCk2RmscOEdXmci4%2FCL1%2B4E2TKK7kcZ2vBSpY4uvKZp5taCFoMd%2FvhO2Dy1x%2FJQwLBvv7i8mL4%2FShj3J8Y8cw2IiZwwY6pgHFdiITq1g3VTkOvYc5GOB4F2LBw17eD4f2cY4mSa4L9CYw1lH44HEwnZRyVDX10i%2FMeAa9ufHKXYL4UO08tn%2FTle3LQcPNLSajdscK1CcValcb6g%2BHrdcp7Rts4kQu08BdCbDHRRZM5ZXH7%2FC%2FRKQiSPBgvQiahgU%2BZFwfxENMwYJV1LxTmsgkscm8heC0yr81TlHoTy6qt7aLEbrbdcEDLFK1oUGL&X-Amz-Signature=30130a5fda92d3e6d652de5b62dd5ffe1970394e0598a63f4a65f89745b92581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2VIYFL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAC9%2F3rH0kXnM72aKOv%2FrZj%2BR9afMC%2FoYRhW%2B%2BvbdKc7AiBwdwGHmco0FsJVsSKV6ozXhzCh4FFNahPiO7ImOrAEzSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMWoeCpQOZr60H1TgYKtwDCyhI2GaEjWo53IYSgZumLoT8LVtUGURNGY6WhogS%2FLCyKjvX6fLu82uK%2FBBGFua%2BzmcI%2B18gGWnkWHRjqNRdPk%2BkJ5CakbSFnvf7Najm2GxesbTn%2FKJPY%2Bn8gvSQvMp5YvjBy68XVFfK78K2VyWnMKNR2n9uzjdYuDB6BqHX3ArfSVtN5dExdAWbitBKcqSUABA17SPiMFQnyQQPlN0VYCn0OdQaRGqY89EXQg0JlXXOfukFzbybvnmzf6Hs4h%2FSbaKbS3vjbq95OmIHyhl8yhA0a1JlXfBzGRe2tTNe7oQuh5mFqFHtRovk45316UqHJ8ne%2BQgLbvfLeRtldIrFxdlOhgfXw%2FbLOSLHlXM3G9vOqQjsAS5fJnArcf84eF7Jw753oqTnkt6KbhnsKokQ%2FkzIWNXKVmq7H6e5k9j%2BHGr%2B2Ia%2BbGQiM2QtEc1gH%2BB1NkRzTu2nuproXbkZEk47BQlYi4bTMKuH5BEnvzFcXOzkhoFaEtPfLZzQJEzwz%2FrSJSEQodcrcw2wz%2BZTwuCQJhFwYkXH80CBc%2FQpGDNtCk2RmscOEdXmci4%2FCL1%2B4E2TKK7kcZ2vBSpY4uvKZp5taCFoMd%2FvhO2Dy1x%2FJQwLBvv7i8mL4%2FShj3J8Y8cw2IiZwwY6pgHFdiITq1g3VTkOvYc5GOB4F2LBw17eD4f2cY4mSa4L9CYw1lH44HEwnZRyVDX10i%2FMeAa9ufHKXYL4UO08tn%2FTle3LQcPNLSajdscK1CcValcb6g%2BHrdcp7Rts4kQu08BdCbDHRRZM5ZXH7%2FC%2FRKQiSPBgvQiahgU%2BZFwfxENMwYJV1LxTmsgkscm8heC0yr81TlHoTy6qt7aLEbrbdcEDLFK1oUGL&X-Amz-Signature=0d039e6b58083786497d753f0ff72513ebcdd42e90cedfe53719a4bb24328a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2VIYFL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAC9%2F3rH0kXnM72aKOv%2FrZj%2BR9afMC%2FoYRhW%2B%2BvbdKc7AiBwdwGHmco0FsJVsSKV6ozXhzCh4FFNahPiO7ImOrAEzSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMWoeCpQOZr60H1TgYKtwDCyhI2GaEjWo53IYSgZumLoT8LVtUGURNGY6WhogS%2FLCyKjvX6fLu82uK%2FBBGFua%2BzmcI%2B18gGWnkWHRjqNRdPk%2BkJ5CakbSFnvf7Najm2GxesbTn%2FKJPY%2Bn8gvSQvMp5YvjBy68XVFfK78K2VyWnMKNR2n9uzjdYuDB6BqHX3ArfSVtN5dExdAWbitBKcqSUABA17SPiMFQnyQQPlN0VYCn0OdQaRGqY89EXQg0JlXXOfukFzbybvnmzf6Hs4h%2FSbaKbS3vjbq95OmIHyhl8yhA0a1JlXfBzGRe2tTNe7oQuh5mFqFHtRovk45316UqHJ8ne%2BQgLbvfLeRtldIrFxdlOhgfXw%2FbLOSLHlXM3G9vOqQjsAS5fJnArcf84eF7Jw753oqTnkt6KbhnsKokQ%2FkzIWNXKVmq7H6e5k9j%2BHGr%2B2Ia%2BbGQiM2QtEc1gH%2BB1NkRzTu2nuproXbkZEk47BQlYi4bTMKuH5BEnvzFcXOzkhoFaEtPfLZzQJEzwz%2FrSJSEQodcrcw2wz%2BZTwuCQJhFwYkXH80CBc%2FQpGDNtCk2RmscOEdXmci4%2FCL1%2B4E2TKK7kcZ2vBSpY4uvKZp5taCFoMd%2FvhO2Dy1x%2FJQwLBvv7i8mL4%2FShj3J8Y8cw2IiZwwY6pgHFdiITq1g3VTkOvYc5GOB4F2LBw17eD4f2cY4mSa4L9CYw1lH44HEwnZRyVDX10i%2FMeAa9ufHKXYL4UO08tn%2FTle3LQcPNLSajdscK1CcValcb6g%2BHrdcp7Rts4kQu08BdCbDHRRZM5ZXH7%2FC%2FRKQiSPBgvQiahgU%2BZFwfxENMwYJV1LxTmsgkscm8heC0yr81TlHoTy6qt7aLEbrbdcEDLFK1oUGL&X-Amz-Signature=94ca1fb3082e808a7cfc1ab6800c1f3dbd56938ae7f7216bc05c105bf40a9c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
