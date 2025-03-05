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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636TEC3FX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEZAI4XpqvXoeXNcCTTBPjaLqGRM6zekGm1qDW%2FX0w9AiEAjM%2BoqG4CBIezX%2FEUaIfyVTxOsUhZOaxEWZy64VpH00UqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYg7blyy3WAH2SjRSrcAwWfI%2FeaOHneGaxDvBKniclQE6EBPtash8YMG7BSQHKN%2FGh34xXMfRx5qOJD3Ms5kQiDErxWLgnRJ%2FrPVDhBOZkskMH12zukAF65xkr3folwKO5u%2FFBVPqnoyWP2MarHYVFEjaCT%2FAULqaikVUZwQx0aSiMaXlQUgfi3xuiNjJiqRnktxkQD%2Ft5SdnmR1VWUbkHLdeUGlawoC8ZztOqeKAcxJbhp%2F46DgkDpsE8s9EMzQXjeQ23IliB73tGI74L4gmF0E%2BH3%2B1dAlK2va%2F7otp8gkuHCQs%2BlVwD5nwJbOp1gpHm8UNqc26%2B5Rzy8VOB2O53c5kZSlqsr13A%2F4hGvNIAqsxLAfoIBn4DIK4ZFdQO1G0Nzq7cF4Akn4xKxN6xUtisuFqco0MIKpJq8K7Mjy%2FEHozrQnsUINV%2F3cNABRQXWFTrCOv4TFcU6vrVKx5Od6ZHa5Mgry4FYq79JHFVV7SB621atG9uY%2BEr6oFKWhS5E%2F2npIunZJJRietvvDD2Vvlir5C7o8Feq%2F7ZQoFt%2FK82ifc6mQuhahjwjknQLJgQAfpkcrBh7ZmJE4r3JkIijZKsiYt3JpHYe7tgmuy7LOTN5e3lfoK0n97lndxLc1TGqYzVZi6oe8G6xbxLTMLWpn74GOqUBjv25rRQRXMXIhVYWXaJIELVZQZs%2FcEQ37xho7ynqW4PbH%2Bv1C0UKyYXr30v7RZsJve%2FX0KI85lDW4%2BvcpaKPykV2ZzIiNSx0LT1mxVG%2FBPmM%2BjRLmjJ02TJgp8n%2BbL0YQywz4f4Qs2oGghXo6cLN7XLtRvQ1JtIXNd%2BTKHYlGkIJAkIa03ciKHwdq6Ntf4kAvRRrdJpgK%2FrcK%2B3gQaPR%2FahsSifh&X-Amz-Signature=a08d71fdb5ec647c3d74074cb2fbceda261f6665febd4c1dc2aeb906df54b1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636TEC3FX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEZAI4XpqvXoeXNcCTTBPjaLqGRM6zekGm1qDW%2FX0w9AiEAjM%2BoqG4CBIezX%2FEUaIfyVTxOsUhZOaxEWZy64VpH00UqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYg7blyy3WAH2SjRSrcAwWfI%2FeaOHneGaxDvBKniclQE6EBPtash8YMG7BSQHKN%2FGh34xXMfRx5qOJD3Ms5kQiDErxWLgnRJ%2FrPVDhBOZkskMH12zukAF65xkr3folwKO5u%2FFBVPqnoyWP2MarHYVFEjaCT%2FAULqaikVUZwQx0aSiMaXlQUgfi3xuiNjJiqRnktxkQD%2Ft5SdnmR1VWUbkHLdeUGlawoC8ZztOqeKAcxJbhp%2F46DgkDpsE8s9EMzQXjeQ23IliB73tGI74L4gmF0E%2BH3%2B1dAlK2va%2F7otp8gkuHCQs%2BlVwD5nwJbOp1gpHm8UNqc26%2B5Rzy8VOB2O53c5kZSlqsr13A%2F4hGvNIAqsxLAfoIBn4DIK4ZFdQO1G0Nzq7cF4Akn4xKxN6xUtisuFqco0MIKpJq8K7Mjy%2FEHozrQnsUINV%2F3cNABRQXWFTrCOv4TFcU6vrVKx5Od6ZHa5Mgry4FYq79JHFVV7SB621atG9uY%2BEr6oFKWhS5E%2F2npIunZJJRietvvDD2Vvlir5C7o8Feq%2F7ZQoFt%2FK82ifc6mQuhahjwjknQLJgQAfpkcrBh7ZmJE4r3JkIijZKsiYt3JpHYe7tgmuy7LOTN5e3lfoK0n97lndxLc1TGqYzVZi6oe8G6xbxLTMLWpn74GOqUBjv25rRQRXMXIhVYWXaJIELVZQZs%2FcEQ37xho7ynqW4PbH%2Bv1C0UKyYXr30v7RZsJve%2FX0KI85lDW4%2BvcpaKPykV2ZzIiNSx0LT1mxVG%2FBPmM%2BjRLmjJ02TJgp8n%2BbL0YQywz4f4Qs2oGghXo6cLN7XLtRvQ1JtIXNd%2BTKHYlGkIJAkIa03ciKHwdq6Ntf4kAvRRrdJpgK%2FrcK%2B3gQaPR%2FahsSifh&X-Amz-Signature=d6a92af5792adadf7606ba038caf23cfa060f8835dd9c336e5c5b400a08cb95f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636TEC3FX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEZAI4XpqvXoeXNcCTTBPjaLqGRM6zekGm1qDW%2FX0w9AiEAjM%2BoqG4CBIezX%2FEUaIfyVTxOsUhZOaxEWZy64VpH00UqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYg7blyy3WAH2SjRSrcAwWfI%2FeaOHneGaxDvBKniclQE6EBPtash8YMG7BSQHKN%2FGh34xXMfRx5qOJD3Ms5kQiDErxWLgnRJ%2FrPVDhBOZkskMH12zukAF65xkr3folwKO5u%2FFBVPqnoyWP2MarHYVFEjaCT%2FAULqaikVUZwQx0aSiMaXlQUgfi3xuiNjJiqRnktxkQD%2Ft5SdnmR1VWUbkHLdeUGlawoC8ZztOqeKAcxJbhp%2F46DgkDpsE8s9EMzQXjeQ23IliB73tGI74L4gmF0E%2BH3%2B1dAlK2va%2F7otp8gkuHCQs%2BlVwD5nwJbOp1gpHm8UNqc26%2B5Rzy8VOB2O53c5kZSlqsr13A%2F4hGvNIAqsxLAfoIBn4DIK4ZFdQO1G0Nzq7cF4Akn4xKxN6xUtisuFqco0MIKpJq8K7Mjy%2FEHozrQnsUINV%2F3cNABRQXWFTrCOv4TFcU6vrVKx5Od6ZHa5Mgry4FYq79JHFVV7SB621atG9uY%2BEr6oFKWhS5E%2F2npIunZJJRietvvDD2Vvlir5C7o8Feq%2F7ZQoFt%2FK82ifc6mQuhahjwjknQLJgQAfpkcrBh7ZmJE4r3JkIijZKsiYt3JpHYe7tgmuy7LOTN5e3lfoK0n97lndxLc1TGqYzVZi6oe8G6xbxLTMLWpn74GOqUBjv25rRQRXMXIhVYWXaJIELVZQZs%2FcEQ37xho7ynqW4PbH%2Bv1C0UKyYXr30v7RZsJve%2FX0KI85lDW4%2BvcpaKPykV2ZzIiNSx0LT1mxVG%2FBPmM%2BjRLmjJ02TJgp8n%2BbL0YQywz4f4Qs2oGghXo6cLN7XLtRvQ1JtIXNd%2BTKHYlGkIJAkIa03ciKHwdq6Ntf4kAvRRrdJpgK%2FrcK%2B3gQaPR%2FahsSifh&X-Amz-Signature=771ad0f969d55448c94299c6ba2209fc9a5f7ca588d47071c94a576cb8917f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
