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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BXMVRB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDRjO4Q6CE1zU%2BeK7qVt0Rf9RbfyR7yoLhXS%2BD9u0%2FPcAIgSjd1Uqj%2BdBj0LcX%2FXqvmosAtTCQYjSA0Eb%2FxvAFmzV8qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE1zoOX3V8zzmnptSrcA%2BJl%2BgDVmmZ%2Bai9U5xALj%2BtcMSNUCvENuqru5Z7rffU3gTPJflkPdTTsJze%2F%2FoTwZsNByoPLMLBDOUywropDUt10vwDblPCwVGLthaKo0zAPpGm9zGG%2Bv%2BHi9xdZWIh%2BswbpCZg3N439wZHvXwWrCKy9Choxh96tcEOAfgGRqMXpvM6%2BbTqhPWYyVeQiGIi3K%2BZuxbHCf1fccIGPhBvxwSSIwrbxnn9brq5JVJ%2Be%2FtShFE4u2Yo6lUa14XbI8ao%2BW3DQ7dw8DS6iz007k31b9B7HLyRCFKD%2Fb890IYITrz3ZbMJYiSPaixbitK4ItucIl3QPVB53%2BZDFTB5GAvCrrTYuzt5p7DkrH0ZzNmjpONroG0MRTYpe9%2F0%2F26Utxqi%2BLZlp8CuT9WL7Djh0Q6m82ygksseMqorTIqXvdgafdIQo0Ym1cgPbPnFPKM9MVxRLv2KZWWbEkuknyTUh4U4eCSJN9TiOEwiTedoxpX%2Biq%2BHcBhXd2%2BDExkVtfbK045imoNZnRuGUuo2%2BuQuPxupNziiIm2fa6WKB4NTfFFfNqCHRR4NUhsaPiHaebfApYhSeN12A36%2BK%2F8Xn61vhN7Lyf5WD5iy%2Bs%2FmY0QvZEYIDdCY%2BktTZIdFzvDDmY0YqMMKGnb0GOqUBkGpeiByePnokmIoW1JxS5IiOIh82VnMqqxzh7HucGeVsmS7d1ocPTuwGi5mDC%2Fg9RdWOoQ0FuBQIEfrkjUtuHXdZ1Inbpm2LKaq6jmZuhMACMCqxQyv8zSShs4WLf7UR%2F6XBBHPqYk%2FGU00sEXpKPr8L4smS16fvdKj0c1aNGySsvIG7I10%2FouMPqH1kqJ%2FvclKD66r9rmAf6JIwInsvUY6mcDav&X-Amz-Signature=b744f541a3c4597c7644adb64bee6ff115f1bb60434982cee38305b7956c6b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BXMVRB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDRjO4Q6CE1zU%2BeK7qVt0Rf9RbfyR7yoLhXS%2BD9u0%2FPcAIgSjd1Uqj%2BdBj0LcX%2FXqvmosAtTCQYjSA0Eb%2FxvAFmzV8qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE1zoOX3V8zzmnptSrcA%2BJl%2BgDVmmZ%2Bai9U5xALj%2BtcMSNUCvENuqru5Z7rffU3gTPJflkPdTTsJze%2F%2FoTwZsNByoPLMLBDOUywropDUt10vwDblPCwVGLthaKo0zAPpGm9zGG%2Bv%2BHi9xdZWIh%2BswbpCZg3N439wZHvXwWrCKy9Choxh96tcEOAfgGRqMXpvM6%2BbTqhPWYyVeQiGIi3K%2BZuxbHCf1fccIGPhBvxwSSIwrbxnn9brq5JVJ%2Be%2FtShFE4u2Yo6lUa14XbI8ao%2BW3DQ7dw8DS6iz007k31b9B7HLyRCFKD%2Fb890IYITrz3ZbMJYiSPaixbitK4ItucIl3QPVB53%2BZDFTB5GAvCrrTYuzt5p7DkrH0ZzNmjpONroG0MRTYpe9%2F0%2F26Utxqi%2BLZlp8CuT9WL7Djh0Q6m82ygksseMqorTIqXvdgafdIQo0Ym1cgPbPnFPKM9MVxRLv2KZWWbEkuknyTUh4U4eCSJN9TiOEwiTedoxpX%2Biq%2BHcBhXd2%2BDExkVtfbK045imoNZnRuGUuo2%2BuQuPxupNziiIm2fa6WKB4NTfFFfNqCHRR4NUhsaPiHaebfApYhSeN12A36%2BK%2F8Xn61vhN7Lyf5WD5iy%2Bs%2FmY0QvZEYIDdCY%2BktTZIdFzvDDmY0YqMMKGnb0GOqUBkGpeiByePnokmIoW1JxS5IiOIh82VnMqqxzh7HucGeVsmS7d1ocPTuwGi5mDC%2Fg9RdWOoQ0FuBQIEfrkjUtuHXdZ1Inbpm2LKaq6jmZuhMACMCqxQyv8zSShs4WLf7UR%2F6XBBHPqYk%2FGU00sEXpKPr8L4smS16fvdKj0c1aNGySsvIG7I10%2FouMPqH1kqJ%2FvclKD66r9rmAf6JIwInsvUY6mcDav&X-Amz-Signature=b6aeec314b782f8ed39dfb7757fc029ab6cf87a3d99de7c77d7d6a8be0adca42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BXMVRB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDRjO4Q6CE1zU%2BeK7qVt0Rf9RbfyR7yoLhXS%2BD9u0%2FPcAIgSjd1Uqj%2BdBj0LcX%2FXqvmosAtTCQYjSA0Eb%2FxvAFmzV8qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE1zoOX3V8zzmnptSrcA%2BJl%2BgDVmmZ%2Bai9U5xALj%2BtcMSNUCvENuqru5Z7rffU3gTPJflkPdTTsJze%2F%2FoTwZsNByoPLMLBDOUywropDUt10vwDblPCwVGLthaKo0zAPpGm9zGG%2Bv%2BHi9xdZWIh%2BswbpCZg3N439wZHvXwWrCKy9Choxh96tcEOAfgGRqMXpvM6%2BbTqhPWYyVeQiGIi3K%2BZuxbHCf1fccIGPhBvxwSSIwrbxnn9brq5JVJ%2Be%2FtShFE4u2Yo6lUa14XbI8ao%2BW3DQ7dw8DS6iz007k31b9B7HLyRCFKD%2Fb890IYITrz3ZbMJYiSPaixbitK4ItucIl3QPVB53%2BZDFTB5GAvCrrTYuzt5p7DkrH0ZzNmjpONroG0MRTYpe9%2F0%2F26Utxqi%2BLZlp8CuT9WL7Djh0Q6m82ygksseMqorTIqXvdgafdIQo0Ym1cgPbPnFPKM9MVxRLv2KZWWbEkuknyTUh4U4eCSJN9TiOEwiTedoxpX%2Biq%2BHcBhXd2%2BDExkVtfbK045imoNZnRuGUuo2%2BuQuPxupNziiIm2fa6WKB4NTfFFfNqCHRR4NUhsaPiHaebfApYhSeN12A36%2BK%2F8Xn61vhN7Lyf5WD5iy%2Bs%2FmY0QvZEYIDdCY%2BktTZIdFzvDDmY0YqMMKGnb0GOqUBkGpeiByePnokmIoW1JxS5IiOIh82VnMqqxzh7HucGeVsmS7d1ocPTuwGi5mDC%2Fg9RdWOoQ0FuBQIEfrkjUtuHXdZ1Inbpm2LKaq6jmZuhMACMCqxQyv8zSShs4WLf7UR%2F6XBBHPqYk%2FGU00sEXpKPr8L4smS16fvdKj0c1aNGySsvIG7I10%2FouMPqH1kqJ%2FvclKD66r9rmAf6JIwInsvUY6mcDav&X-Amz-Signature=2e6ce2e6dec872589476515ea68c644ace9273b42aef7f0ff8f4b334562b4bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
