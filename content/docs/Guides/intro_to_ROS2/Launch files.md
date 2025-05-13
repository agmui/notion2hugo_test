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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44YUTMQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfQ%2FbsZxHSlcWv6GGBjChNmwYXDDprQ%2FvLAxDGNoEZIAiEAsLkViI6sTIF0D27IPhSRDKcHWTHtShZpm%2B72RBgHTl0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6v7EP7UOVs5itq4CrcA6iySII2gROLE677B5Z2Vaz2fCPlNZKPkKvNcIkrAnmp3MggUjIFbxqjY%2Frg9ObYdB16SmKDK4UI8sDoNJAhynIkXzSNEt72L9KfxRNA3lCb6eKp8SeMXoKSEa7%2FDe0thJCvRymqIks%2Brdftgw68ewGzPiV5tYCa22iVgWRLu3B7FFMxfZJKyEWgdMtzYlmzUQzer68khkSPFycEpai57CM3YB9W2ARnttbE8TQn%2FUIpmCn3pVL3eO1MvzIXkeGgxl%2FlXCVEZPBpXT%2FxLSIw5RJdJK61%2BdGn3xXsz%2FXgp0u9b%2BqlLPKfcUMH4STiWUOqfogw4sDLxU00Ni6RAnGQ%2BKd72eFRXO3GVlb8WxGvyD%2BbfHMz6LOi8vkegmTMPbTAs1sC%2BfKD0hTGegcMw44zfjflmCgBURtsYlRv9DP4JnQfbL%2BkuFKhVo513aSYDq6em2qeDrSw%2FSxht%2Fz8DBJ4ptK1e5H9ZLb9ik0xCeO1yXtXI4MlpGDikhGb9uHMdAvewTHqguJzKfaZzhEbUx5yoYp32imBha2nVIoJkxgAp99urSKdpXEULSydJzIGbCXBx7G9uTRY5YNpB7GMhwcaQR2chw9WSZHNnmEkXHiq7roqX%2BE9%2FR0q00ts8EpNMP%2BMjcEGOqUBGFqPJaCuX%2ByS6ZGcNuO7s1oauA7nmlYtYI83afi5qe1bunYY2H%2F7IjUXUg2XYcaN48J%2FCwpMlEcPVKHDw9Ot4su%2BYvQclOYxUCcpIaTq2SBSPzmttPOcc1Y01Ft6%2BVN7LTR30Uz79FEPONjndMN0wUWAcQvvF7%2BxRVokKD00snpl3YPCnX1RYivbUFKawiSUUuBky6c1acsiGYdnzWmSWrc9LQLt&X-Amz-Signature=86e5ee09637df8d0987bcfe1c4bcb78334bfb6b55a56f4da97a028e73e9ebc3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44YUTMQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfQ%2FbsZxHSlcWv6GGBjChNmwYXDDprQ%2FvLAxDGNoEZIAiEAsLkViI6sTIF0D27IPhSRDKcHWTHtShZpm%2B72RBgHTl0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6v7EP7UOVs5itq4CrcA6iySII2gROLE677B5Z2Vaz2fCPlNZKPkKvNcIkrAnmp3MggUjIFbxqjY%2Frg9ObYdB16SmKDK4UI8sDoNJAhynIkXzSNEt72L9KfxRNA3lCb6eKp8SeMXoKSEa7%2FDe0thJCvRymqIks%2Brdftgw68ewGzPiV5tYCa22iVgWRLu3B7FFMxfZJKyEWgdMtzYlmzUQzer68khkSPFycEpai57CM3YB9W2ARnttbE8TQn%2FUIpmCn3pVL3eO1MvzIXkeGgxl%2FlXCVEZPBpXT%2FxLSIw5RJdJK61%2BdGn3xXsz%2FXgp0u9b%2BqlLPKfcUMH4STiWUOqfogw4sDLxU00Ni6RAnGQ%2BKd72eFRXO3GVlb8WxGvyD%2BbfHMz6LOi8vkegmTMPbTAs1sC%2BfKD0hTGegcMw44zfjflmCgBURtsYlRv9DP4JnQfbL%2BkuFKhVo513aSYDq6em2qeDrSw%2FSxht%2Fz8DBJ4ptK1e5H9ZLb9ik0xCeO1yXtXI4MlpGDikhGb9uHMdAvewTHqguJzKfaZzhEbUx5yoYp32imBha2nVIoJkxgAp99urSKdpXEULSydJzIGbCXBx7G9uTRY5YNpB7GMhwcaQR2chw9WSZHNnmEkXHiq7roqX%2BE9%2FR0q00ts8EpNMP%2BMjcEGOqUBGFqPJaCuX%2ByS6ZGcNuO7s1oauA7nmlYtYI83afi5qe1bunYY2H%2F7IjUXUg2XYcaN48J%2FCwpMlEcPVKHDw9Ot4su%2BYvQclOYxUCcpIaTq2SBSPzmttPOcc1Y01Ft6%2BVN7LTR30Uz79FEPONjndMN0wUWAcQvvF7%2BxRVokKD00snpl3YPCnX1RYivbUFKawiSUUuBky6c1acsiGYdnzWmSWrc9LQLt&X-Amz-Signature=0d7c4afa7c0f3869484dbb79b7e1b23d863e271aee2edc8dff05679b976b4b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44YUTMQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIBfQ%2FbsZxHSlcWv6GGBjChNmwYXDDprQ%2FvLAxDGNoEZIAiEAsLkViI6sTIF0D27IPhSRDKcHWTHtShZpm%2B72RBgHTl0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6v7EP7UOVs5itq4CrcA6iySII2gROLE677B5Z2Vaz2fCPlNZKPkKvNcIkrAnmp3MggUjIFbxqjY%2Frg9ObYdB16SmKDK4UI8sDoNJAhynIkXzSNEt72L9KfxRNA3lCb6eKp8SeMXoKSEa7%2FDe0thJCvRymqIks%2Brdftgw68ewGzPiV5tYCa22iVgWRLu3B7FFMxfZJKyEWgdMtzYlmzUQzer68khkSPFycEpai57CM3YB9W2ARnttbE8TQn%2FUIpmCn3pVL3eO1MvzIXkeGgxl%2FlXCVEZPBpXT%2FxLSIw5RJdJK61%2BdGn3xXsz%2FXgp0u9b%2BqlLPKfcUMH4STiWUOqfogw4sDLxU00Ni6RAnGQ%2BKd72eFRXO3GVlb8WxGvyD%2BbfHMz6LOi8vkegmTMPbTAs1sC%2BfKD0hTGegcMw44zfjflmCgBURtsYlRv9DP4JnQfbL%2BkuFKhVo513aSYDq6em2qeDrSw%2FSxht%2Fz8DBJ4ptK1e5H9ZLb9ik0xCeO1yXtXI4MlpGDikhGb9uHMdAvewTHqguJzKfaZzhEbUx5yoYp32imBha2nVIoJkxgAp99urSKdpXEULSydJzIGbCXBx7G9uTRY5YNpB7GMhwcaQR2chw9WSZHNnmEkXHiq7roqX%2BE9%2FR0q00ts8EpNMP%2BMjcEGOqUBGFqPJaCuX%2ByS6ZGcNuO7s1oauA7nmlYtYI83afi5qe1bunYY2H%2F7IjUXUg2XYcaN48J%2FCwpMlEcPVKHDw9Ot4su%2BYvQclOYxUCcpIaTq2SBSPzmttPOcc1Y01Ft6%2BVN7LTR30Uz79FEPONjndMN0wUWAcQvvF7%2BxRVokKD00snpl3YPCnX1RYivbUFKawiSUUuBky6c1acsiGYdnzWmSWrc9LQLt&X-Amz-Signature=f31e2c77f9e197791a73deecb2b8cccf202141914d3a4be543de54d0227be1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
