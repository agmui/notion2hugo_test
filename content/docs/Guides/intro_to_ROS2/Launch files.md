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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK7OWDHJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE1MXp7mw5uMIFmpPjAuv6dRA%2BpF04HHfymixuIZDExAIgaV%2F2P7RugUpszQ63LyPr4Dp8noDtH5%2F1uY80eHa0kq0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAThiZJDjZkDOzRgESrcA6tA5E3AkLAGpyE55%2FXYchoXMoZMgN6AK5sRDalB1QaFwDEKpNxcXFKU6i1quVc5m9SsOpKUl8TfJI7MnuffuwrUf5JsDfE1ztd%2F9CkWrePG1cL%2BbLadDdPUIYTAXnVQNJQQbszMLR5b18uYidJlDZ7EGrN7VboL6o%2FA2tESff2QPIw4EdD0K%2B9N7k%2BoeAqa%2F8XjZ8zMBb%2Fay8oEMHlzzpD9lyo8YyZo3lgv4PK5eugXUcTR9jQd3F0JD6a8TaistCebeiXKdsgwhUZJCSaSosTFIERV560VgrMujimi0XLzJmp1h162SALKrcCokuV5Mdkzcjjo1jU7DYP%2FLoCuKrY%2F7Uar5eMNWvVj46NuQvw26eqQgou3hdJ5EFVMtXIWFA8lqdNI2jLpj2P6IkgAhvWjNeQdyBRVwD3r2pEzB%2BOpjOgpnalDKFJRrYNp948Ec1Ftmo%2Fl%2Fm92UXx6NSwCpud1hmwh%2B%2FTCPlQCzrgUzWW68UMvREO6D5UhOVuXQT2ueKC96gsIpMs0a2Iva0rdgtOQTkyHnS65oibWWMCTMW4BbFvUQXHaWm%2BBF6eRcmPEXoS6sVWdjN2EkWrJURrnXBXRRMzlH3LdAowj6pEwYH7L1vCRnpDHVRbM2ensMIGjtMEGOqUB%2Fzwztq%2F4OuheipJIYxz7sH27m1griWjod%2B8IV7vNST7jQEqijdeZ%2BC8JwHgsgEz9s4cC3I8sfvtcj0VdjKWq5M9mkqEzSZV0VNbXnDfRTecI9jeiVchPj0difSka4pYr1iG4GHNq5kQ%2FONGABWwrA9tAlyeOaafKpjQtUe3jeaqv82mPIqigPhTUXDVyyn%2FzqHeKInCSzYQ29zZunspiDQdc528z&X-Amz-Signature=e41b86080f6bd8dae5768ce217d2d6df63fe39c2e342dd645476afdddaf25164&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK7OWDHJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE1MXp7mw5uMIFmpPjAuv6dRA%2BpF04HHfymixuIZDExAIgaV%2F2P7RugUpszQ63LyPr4Dp8noDtH5%2F1uY80eHa0kq0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAThiZJDjZkDOzRgESrcA6tA5E3AkLAGpyE55%2FXYchoXMoZMgN6AK5sRDalB1QaFwDEKpNxcXFKU6i1quVc5m9SsOpKUl8TfJI7MnuffuwrUf5JsDfE1ztd%2F9CkWrePG1cL%2BbLadDdPUIYTAXnVQNJQQbszMLR5b18uYidJlDZ7EGrN7VboL6o%2FA2tESff2QPIw4EdD0K%2B9N7k%2BoeAqa%2F8XjZ8zMBb%2Fay8oEMHlzzpD9lyo8YyZo3lgv4PK5eugXUcTR9jQd3F0JD6a8TaistCebeiXKdsgwhUZJCSaSosTFIERV560VgrMujimi0XLzJmp1h162SALKrcCokuV5Mdkzcjjo1jU7DYP%2FLoCuKrY%2F7Uar5eMNWvVj46NuQvw26eqQgou3hdJ5EFVMtXIWFA8lqdNI2jLpj2P6IkgAhvWjNeQdyBRVwD3r2pEzB%2BOpjOgpnalDKFJRrYNp948Ec1Ftmo%2Fl%2Fm92UXx6NSwCpud1hmwh%2B%2FTCPlQCzrgUzWW68UMvREO6D5UhOVuXQT2ueKC96gsIpMs0a2Iva0rdgtOQTkyHnS65oibWWMCTMW4BbFvUQXHaWm%2BBF6eRcmPEXoS6sVWdjN2EkWrJURrnXBXRRMzlH3LdAowj6pEwYH7L1vCRnpDHVRbM2ensMIGjtMEGOqUB%2Fzwztq%2F4OuheipJIYxz7sH27m1griWjod%2B8IV7vNST7jQEqijdeZ%2BC8JwHgsgEz9s4cC3I8sfvtcj0VdjKWq5M9mkqEzSZV0VNbXnDfRTecI9jeiVchPj0difSka4pYr1iG4GHNq5kQ%2FONGABWwrA9tAlyeOaafKpjQtUe3jeaqv82mPIqigPhTUXDVyyn%2FzqHeKInCSzYQ29zZunspiDQdc528z&X-Amz-Signature=ded2dd1df595a3bff42295db320520aab8fab2c96fb069c74686d4fe8ea8105f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK7OWDHJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE1MXp7mw5uMIFmpPjAuv6dRA%2BpF04HHfymixuIZDExAIgaV%2F2P7RugUpszQ63LyPr4Dp8noDtH5%2F1uY80eHa0kq0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAThiZJDjZkDOzRgESrcA6tA5E3AkLAGpyE55%2FXYchoXMoZMgN6AK5sRDalB1QaFwDEKpNxcXFKU6i1quVc5m9SsOpKUl8TfJI7MnuffuwrUf5JsDfE1ztd%2F9CkWrePG1cL%2BbLadDdPUIYTAXnVQNJQQbszMLR5b18uYidJlDZ7EGrN7VboL6o%2FA2tESff2QPIw4EdD0K%2B9N7k%2BoeAqa%2F8XjZ8zMBb%2Fay8oEMHlzzpD9lyo8YyZo3lgv4PK5eugXUcTR9jQd3F0JD6a8TaistCebeiXKdsgwhUZJCSaSosTFIERV560VgrMujimi0XLzJmp1h162SALKrcCokuV5Mdkzcjjo1jU7DYP%2FLoCuKrY%2F7Uar5eMNWvVj46NuQvw26eqQgou3hdJ5EFVMtXIWFA8lqdNI2jLpj2P6IkgAhvWjNeQdyBRVwD3r2pEzB%2BOpjOgpnalDKFJRrYNp948Ec1Ftmo%2Fl%2Fm92UXx6NSwCpud1hmwh%2B%2FTCPlQCzrgUzWW68UMvREO6D5UhOVuXQT2ueKC96gsIpMs0a2Iva0rdgtOQTkyHnS65oibWWMCTMW4BbFvUQXHaWm%2BBF6eRcmPEXoS6sVWdjN2EkWrJURrnXBXRRMzlH3LdAowj6pEwYH7L1vCRnpDHVRbM2ensMIGjtMEGOqUB%2Fzwztq%2F4OuheipJIYxz7sH27m1griWjod%2B8IV7vNST7jQEqijdeZ%2BC8JwHgsgEz9s4cC3I8sfvtcj0VdjKWq5M9mkqEzSZV0VNbXnDfRTecI9jeiVchPj0difSka4pYr1iG4GHNq5kQ%2FONGABWwrA9tAlyeOaafKpjQtUe3jeaqv82mPIqigPhTUXDVyyn%2FzqHeKInCSzYQ29zZunspiDQdc528z&X-Amz-Signature=83f1e10f45ead7359624a70b2d91c49689414c3e54a7a46b0edbb6af1d67ba9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
