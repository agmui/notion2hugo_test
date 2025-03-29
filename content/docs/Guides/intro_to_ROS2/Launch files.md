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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEXBROZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBfFiN6Md6KebAWeVMGK%2FJLIuG3z6t7NkFRzMACu2zq%2FAiBW4tC8wK3pe1lfVUaxxNvITx3dx%2FgTO6c9NCTlZ%2FkIjSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBNjJcyPEkEmHXUsnKtwDzVh5xoD5tQp8GYo1H%2Fr7Hr8HTYUKUQbFvMvh22dCY137JSV8qQAtOgJ5GJy0VcJ%2F0x3NDDSKiX6X5K%2FUhhx9Z01yOQMaSygIax9s%2BO6d2ZJLtS5v0Arg4YTzmYHOK9Re2LzBrLiHiyrRyf3e1x%2BMYvLR%2FquQClCXpn%2BqNVJUSmSIAEQLSKiPR5r2bve2b4UKY0rN613I7wUpwi3ZG4zyj6E2MS%2FqAEbrx4t43S9229yc8EDvIw70JbT5Ou%2FVEEgVd07azP8Ijie%2FdxQ6lyfmCajYK5YH0QmhfEcMtLDQRxBwSQEO4BWNqLlR5SDckD5VqQjyILDXM1GysQ0%2FTbTnnqY6FSz%2FAnGZJcZxWdX1mGWwmyxDL%2B6BurlMXbCQ2Bxgis7FueQ4gWGGzMKQslN1gi1Gnd2qSVTR0bjOCK1LSAfLEOr86Mx50FzxFsR%2FHl2HVFS%2FnrpFxeyEBFIgpDZAMpiJ5ULH7nrX3q4LgETOZoDy557RV%2F8BTxTbX0qNq85IcKBwrauNretk9VSA5G26X%2B5%2FuNfHZIqkSdojIojM50QnOCtlQ8iBsUd3D6dhka2Dqe7ggW2FDFeiTIU2rEU2cT2CLEAxki1MSYg3d0BP8gl2R%2BdgMNcL6yvQAi0wu9yhvwY6pgEEEDUidEVnzktaS%2FXqVvOfJWJsGbB4EPR%2FLiSjFwX%2B7DZ9llfa8JAJNbXb3FG6C7OJGdaeKkpi0N7byYSqmMedqQEa7zqiCtOV%2BSwRQQvJkuho4IkghYyyDoesJfzDOJ5AkOsfQ8lFslFDdd26301WEtRDiJ9aTXX7ncMaMfIYrz%2BxGAWIEkmnxbYRkJNII5p6hpKhe%2BeHAdnid7tj4GziUfPOo%2BK9&X-Amz-Signature=1e5162dee72dea997f58bb0691f2d0a5e0af4fbbffd9a9354e9b788105c1bc4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEXBROZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBfFiN6Md6KebAWeVMGK%2FJLIuG3z6t7NkFRzMACu2zq%2FAiBW4tC8wK3pe1lfVUaxxNvITx3dx%2FgTO6c9NCTlZ%2FkIjSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBNjJcyPEkEmHXUsnKtwDzVh5xoD5tQp8GYo1H%2Fr7Hr8HTYUKUQbFvMvh22dCY137JSV8qQAtOgJ5GJy0VcJ%2F0x3NDDSKiX6X5K%2FUhhx9Z01yOQMaSygIax9s%2BO6d2ZJLtS5v0Arg4YTzmYHOK9Re2LzBrLiHiyrRyf3e1x%2BMYvLR%2FquQClCXpn%2BqNVJUSmSIAEQLSKiPR5r2bve2b4UKY0rN613I7wUpwi3ZG4zyj6E2MS%2FqAEbrx4t43S9229yc8EDvIw70JbT5Ou%2FVEEgVd07azP8Ijie%2FdxQ6lyfmCajYK5YH0QmhfEcMtLDQRxBwSQEO4BWNqLlR5SDckD5VqQjyILDXM1GysQ0%2FTbTnnqY6FSz%2FAnGZJcZxWdX1mGWwmyxDL%2B6BurlMXbCQ2Bxgis7FueQ4gWGGzMKQslN1gi1Gnd2qSVTR0bjOCK1LSAfLEOr86Mx50FzxFsR%2FHl2HVFS%2FnrpFxeyEBFIgpDZAMpiJ5ULH7nrX3q4LgETOZoDy557RV%2F8BTxTbX0qNq85IcKBwrauNretk9VSA5G26X%2B5%2FuNfHZIqkSdojIojM50QnOCtlQ8iBsUd3D6dhka2Dqe7ggW2FDFeiTIU2rEU2cT2CLEAxki1MSYg3d0BP8gl2R%2BdgMNcL6yvQAi0wu9yhvwY6pgEEEDUidEVnzktaS%2FXqVvOfJWJsGbB4EPR%2FLiSjFwX%2B7DZ9llfa8JAJNbXb3FG6C7OJGdaeKkpi0N7byYSqmMedqQEa7zqiCtOV%2BSwRQQvJkuho4IkghYyyDoesJfzDOJ5AkOsfQ8lFslFDdd26301WEtRDiJ9aTXX7ncMaMfIYrz%2BxGAWIEkmnxbYRkJNII5p6hpKhe%2BeHAdnid7tj4GziUfPOo%2BK9&X-Amz-Signature=33cd98b1de60de68b7433943e3f9ac1a1329aa01c9a0a1cd447125f4dbbbbb8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEXBROZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBfFiN6Md6KebAWeVMGK%2FJLIuG3z6t7NkFRzMACu2zq%2FAiBW4tC8wK3pe1lfVUaxxNvITx3dx%2FgTO6c9NCTlZ%2FkIjSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBNjJcyPEkEmHXUsnKtwDzVh5xoD5tQp8GYo1H%2Fr7Hr8HTYUKUQbFvMvh22dCY137JSV8qQAtOgJ5GJy0VcJ%2F0x3NDDSKiX6X5K%2FUhhx9Z01yOQMaSygIax9s%2BO6d2ZJLtS5v0Arg4YTzmYHOK9Re2LzBrLiHiyrRyf3e1x%2BMYvLR%2FquQClCXpn%2BqNVJUSmSIAEQLSKiPR5r2bve2b4UKY0rN613I7wUpwi3ZG4zyj6E2MS%2FqAEbrx4t43S9229yc8EDvIw70JbT5Ou%2FVEEgVd07azP8Ijie%2FdxQ6lyfmCajYK5YH0QmhfEcMtLDQRxBwSQEO4BWNqLlR5SDckD5VqQjyILDXM1GysQ0%2FTbTnnqY6FSz%2FAnGZJcZxWdX1mGWwmyxDL%2B6BurlMXbCQ2Bxgis7FueQ4gWGGzMKQslN1gi1Gnd2qSVTR0bjOCK1LSAfLEOr86Mx50FzxFsR%2FHl2HVFS%2FnrpFxeyEBFIgpDZAMpiJ5ULH7nrX3q4LgETOZoDy557RV%2F8BTxTbX0qNq85IcKBwrauNretk9VSA5G26X%2B5%2FuNfHZIqkSdojIojM50QnOCtlQ8iBsUd3D6dhka2Dqe7ggW2FDFeiTIU2rEU2cT2CLEAxki1MSYg3d0BP8gl2R%2BdgMNcL6yvQAi0wu9yhvwY6pgEEEDUidEVnzktaS%2FXqVvOfJWJsGbB4EPR%2FLiSjFwX%2B7DZ9llfa8JAJNbXb3FG6C7OJGdaeKkpi0N7byYSqmMedqQEa7zqiCtOV%2BSwRQQvJkuho4IkghYyyDoesJfzDOJ5AkOsfQ8lFslFDdd26301WEtRDiJ9aTXX7ncMaMfIYrz%2BxGAWIEkmnxbYRkJNII5p6hpKhe%2BeHAdnid7tj4GziUfPOo%2BK9&X-Amz-Signature=ded8c5e880fbb7d724b9dacd83ed795d85fe2c1d8852db85a9e210a774eced64&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
