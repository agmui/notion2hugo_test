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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSBWVUA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyqM5pW6fboCs%2F7mDxv8qYSkWnEt9Tf3Sn29DnN%2BAAiB%2FxITKnF%2Br9sSYu%2FXmtakJfsPhJvn9YvMB57yOa5i%2BUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMpm15YGXvku6%2FvukKtwDq2Qtc14Tn3%2F92MH5LTHPM8jH7HiDLCkSe%2FWiiy9hWUQE5YCHlUAdB3%2B7XVBbktG23gh4MOszK3K2Hw%2Fp02lGNXM%2F8K530ncM8joEx7GOP8oRe8MKDwmxGlJWpuhqo%2BmouE%2FaULpfe8D5%2FyThpM4553HM8P8l5S%2Bf70nsLKrvHx7BShh%2FYUqDPvAoN2F32xVxWswRkML0ZJfWSZNKYQ%2BNhHFh5gzndQqyKbxmPBeNwMcNCbwzTTHwDTjwbOm2XblPe%2FR324JNn69JLvuyyB%2FQFupvyw1b9if4h80%2FgHx7xaeYHCH1K9gaRha0lSXV5yFLjOVIDoeFT4KyMAC4NHQvcaDz9jspk1EPCMmQb013vGPeIRTBi99SsJpmte%2FXlcZXg%2FuCrn4z9aUazu8Z0QBb%2BSvccoDYfwVkErtLYk6n2xGcTFiwOLVWQwldYzBnmMgCFBrRjfxcrDwJL0AVMg95BNir6s1MvEbvUFTMN0aPfsKrCcK9tz4X4UXq%2Fv9CKqSZgd6lnaPBUScp7TnyoPppx7S0tWlKhSFx%2B%2BbGUlo%2FALVBfxs%2F%2Bf4ePl46wXugUy9%2BquIgIP7hjlNlIZ7udsgZmtnFI56xfhDlGBfF4SACzXP4tIXcYNI3rLYFrUIw5ZbUwQY6pgG6eXlYisGWQk7BJYUQdsn1U1WXu252wg4zuJO%2FPQuqWwtbC5hhks4qJjkXXhM5mayIEb%2Fc3KOCj%2BaFQXP59Wk5%2Bo%2BR1%2BbhN%2BymiGZypB8jmmx17MAezQn%2BnzNVBN0XxTVjiuDUNK8KpdU5ncy44PHqNRNwcwiyx8kYDsS6gJZ%2BU2s9UpZwWjvmePd9Ci2e0P4eD1P5MMYY9UwZteK%2BE6a5HP%2BMZ333&X-Amz-Signature=b4e6896e40cd1ba059158a55243a9c36ca7b01eab8126ed1087fd4a234eb54b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSBWVUA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyqM5pW6fboCs%2F7mDxv8qYSkWnEt9Tf3Sn29DnN%2BAAiB%2FxITKnF%2Br9sSYu%2FXmtakJfsPhJvn9YvMB57yOa5i%2BUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMpm15YGXvku6%2FvukKtwDq2Qtc14Tn3%2F92MH5LTHPM8jH7HiDLCkSe%2FWiiy9hWUQE5YCHlUAdB3%2B7XVBbktG23gh4MOszK3K2Hw%2Fp02lGNXM%2F8K530ncM8joEx7GOP8oRe8MKDwmxGlJWpuhqo%2BmouE%2FaULpfe8D5%2FyThpM4553HM8P8l5S%2Bf70nsLKrvHx7BShh%2FYUqDPvAoN2F32xVxWswRkML0ZJfWSZNKYQ%2BNhHFh5gzndQqyKbxmPBeNwMcNCbwzTTHwDTjwbOm2XblPe%2FR324JNn69JLvuyyB%2FQFupvyw1b9if4h80%2FgHx7xaeYHCH1K9gaRha0lSXV5yFLjOVIDoeFT4KyMAC4NHQvcaDz9jspk1EPCMmQb013vGPeIRTBi99SsJpmte%2FXlcZXg%2FuCrn4z9aUazu8Z0QBb%2BSvccoDYfwVkErtLYk6n2xGcTFiwOLVWQwldYzBnmMgCFBrRjfxcrDwJL0AVMg95BNir6s1MvEbvUFTMN0aPfsKrCcK9tz4X4UXq%2Fv9CKqSZgd6lnaPBUScp7TnyoPppx7S0tWlKhSFx%2B%2BbGUlo%2FALVBfxs%2F%2Bf4ePl46wXugUy9%2BquIgIP7hjlNlIZ7udsgZmtnFI56xfhDlGBfF4SACzXP4tIXcYNI3rLYFrUIw5ZbUwQY6pgG6eXlYisGWQk7BJYUQdsn1U1WXu252wg4zuJO%2FPQuqWwtbC5hhks4qJjkXXhM5mayIEb%2Fc3KOCj%2BaFQXP59Wk5%2Bo%2BR1%2BbhN%2BymiGZypB8jmmx17MAezQn%2BnzNVBN0XxTVjiuDUNK8KpdU5ncy44PHqNRNwcwiyx8kYDsS6gJZ%2BU2s9UpZwWjvmePd9Ci2e0P4eD1P5MMYY9UwZteK%2BE6a5HP%2BMZ333&X-Amz-Signature=0918d2e0e2ba44451ffff324c54fb3ca1128ba4aa8b97c2d8d9f0b0e56514190&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSBWVUA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsLyqM5pW6fboCs%2F7mDxv8qYSkWnEt9Tf3Sn29DnN%2BAAiB%2FxITKnF%2Br9sSYu%2FXmtakJfsPhJvn9YvMB57yOa5i%2BUCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMMpm15YGXvku6%2FvukKtwDq2Qtc14Tn3%2F92MH5LTHPM8jH7HiDLCkSe%2FWiiy9hWUQE5YCHlUAdB3%2B7XVBbktG23gh4MOszK3K2Hw%2Fp02lGNXM%2F8K530ncM8joEx7GOP8oRe8MKDwmxGlJWpuhqo%2BmouE%2FaULpfe8D5%2FyThpM4553HM8P8l5S%2Bf70nsLKrvHx7BShh%2FYUqDPvAoN2F32xVxWswRkML0ZJfWSZNKYQ%2BNhHFh5gzndQqyKbxmPBeNwMcNCbwzTTHwDTjwbOm2XblPe%2FR324JNn69JLvuyyB%2FQFupvyw1b9if4h80%2FgHx7xaeYHCH1K9gaRha0lSXV5yFLjOVIDoeFT4KyMAC4NHQvcaDz9jspk1EPCMmQb013vGPeIRTBi99SsJpmte%2FXlcZXg%2FuCrn4z9aUazu8Z0QBb%2BSvccoDYfwVkErtLYk6n2xGcTFiwOLVWQwldYzBnmMgCFBrRjfxcrDwJL0AVMg95BNir6s1MvEbvUFTMN0aPfsKrCcK9tz4X4UXq%2Fv9CKqSZgd6lnaPBUScp7TnyoPppx7S0tWlKhSFx%2B%2BbGUlo%2FALVBfxs%2F%2Bf4ePl46wXugUy9%2BquIgIP7hjlNlIZ7udsgZmtnFI56xfhDlGBfF4SACzXP4tIXcYNI3rLYFrUIw5ZbUwQY6pgG6eXlYisGWQk7BJYUQdsn1U1WXu252wg4zuJO%2FPQuqWwtbC5hhks4qJjkXXhM5mayIEb%2Fc3KOCj%2BaFQXP59Wk5%2Bo%2BR1%2BbhN%2BymiGZypB8jmmx17MAezQn%2BnzNVBN0XxTVjiuDUNK8KpdU5ncy44PHqNRNwcwiyx8kYDsS6gJZ%2BU2s9UpZwWjvmePd9Ci2e0P4eD1P5MMYY9UwZteK%2BE6a5HP%2BMZ333&X-Amz-Signature=0f1ab6f3c1565be9ff1fe68cc93ce7ae3730e99cc138dc5968f5c5a7ba9ed1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
