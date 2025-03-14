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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRB5KXN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2Byxeyyz%2BffvDQfOsh0vgkOixe8TGPLmqE647aJD5YwIhAJ7TQJ1u3FDl1yoNNEK5tsVZemJjFwXobXbfQpjKfGhfKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxOcfhf54luRK8UQQq3AP0IdZ%2BPyr%2BCzvuTA8DGvPWwKdKkN82Nmb6Yd4Xp%2FY4qgskQoyoh3vde9RvGfLlMHDM%2BsSPqq9xNNoQoXlvx8MKfez5BS0dD3XWA4PMc2P5vAmCNdiJGcJUh3G4nrcxLzqSQG%2Bhu5TsxdaE9o%2B91SXyg0Ssax76vhJCYGmuM9M9kXkSyTvQY8MhfpHC5A%2FFLSRSXIDMJzfDjRH16Ujc4VvuzCLlMdWeznYYX4GdC8HJdNOk2UydPA5dTRS9Qrzsx2asKRFzpzXhGBoGPJNizklEwCq4j2hea5yI1QzF7VSRGTa0kMvRpp599%2F2GnpQrsJSpUJxVn0SUJk%2FaN4tsGpAemzQMsVvhlRHGYd59iCfjHDuoM5yYQt19sR2utDUREVmHKwxmb02BgCpI4vNH1YRJr21sXCUvn6IZKZuXmwHaVd8uPxmd3gxG%2FSiRK1Reqj5RTMMadWXB%2BvsrPlDZn3OysdwBVFWZhU5g7obBb86qGjO4tbg869u9xmN8467iHRnUmP2PBsnCZYP7%2By7M3trYuhVrzxP%2FlK3yLRCw5zvKpeDAQ%2Farvf2pMS24NW3hyCxr%2B9S6hxLyA0gtBap9jDcS%2FfryY0CXd6%2FGBYCD4R4lFdYcQkmJndv6EDYCxjCT686%2BBjqkARWc9Vmht8HHP1nXsulTiZJCYC66Kn%2FYSQofa7wQuM0rA27raz3UNwGEm3dNdR4JbL987g7nRQua0t7Gyomx3SzunUSBhp6pedMAfhSUxYpZ5Mid0D%2FXNJTEIxlRZBBqchXhT6WBJDg6N%2B95BJUCMcw6FbsRA%2F0pSZgiuAoTbpC06GieeenneILijLm4PqBhd%2ByhnvxQrx6Z4%2Fjgi4BvER7o3ndo&X-Amz-Signature=c7cb441ff87ee87f56b00f3844fc807efdc4e251dbcb542af9d7eb7434de13ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRB5KXN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2Byxeyyz%2BffvDQfOsh0vgkOixe8TGPLmqE647aJD5YwIhAJ7TQJ1u3FDl1yoNNEK5tsVZemJjFwXobXbfQpjKfGhfKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxOcfhf54luRK8UQQq3AP0IdZ%2BPyr%2BCzvuTA8DGvPWwKdKkN82Nmb6Yd4Xp%2FY4qgskQoyoh3vde9RvGfLlMHDM%2BsSPqq9xNNoQoXlvx8MKfez5BS0dD3XWA4PMc2P5vAmCNdiJGcJUh3G4nrcxLzqSQG%2Bhu5TsxdaE9o%2B91SXyg0Ssax76vhJCYGmuM9M9kXkSyTvQY8MhfpHC5A%2FFLSRSXIDMJzfDjRH16Ujc4VvuzCLlMdWeznYYX4GdC8HJdNOk2UydPA5dTRS9Qrzsx2asKRFzpzXhGBoGPJNizklEwCq4j2hea5yI1QzF7VSRGTa0kMvRpp599%2F2GnpQrsJSpUJxVn0SUJk%2FaN4tsGpAemzQMsVvhlRHGYd59iCfjHDuoM5yYQt19sR2utDUREVmHKwxmb02BgCpI4vNH1YRJr21sXCUvn6IZKZuXmwHaVd8uPxmd3gxG%2FSiRK1Reqj5RTMMadWXB%2BvsrPlDZn3OysdwBVFWZhU5g7obBb86qGjO4tbg869u9xmN8467iHRnUmP2PBsnCZYP7%2By7M3trYuhVrzxP%2FlK3yLRCw5zvKpeDAQ%2Farvf2pMS24NW3hyCxr%2B9S6hxLyA0gtBap9jDcS%2FfryY0CXd6%2FGBYCD4R4lFdYcQkmJndv6EDYCxjCT686%2BBjqkARWc9Vmht8HHP1nXsulTiZJCYC66Kn%2FYSQofa7wQuM0rA27raz3UNwGEm3dNdR4JbL987g7nRQua0t7Gyomx3SzunUSBhp6pedMAfhSUxYpZ5Mid0D%2FXNJTEIxlRZBBqchXhT6WBJDg6N%2B95BJUCMcw6FbsRA%2F0pSZgiuAoTbpC06GieeenneILijLm4PqBhd%2ByhnvxQrx6Z4%2Fjgi4BvER7o3ndo&X-Amz-Signature=29ab21cfc0a3a48d0526b2118b5ff4194d2726176aaea42bbc7ef96a7418c685&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRB5KXN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2Byxeyyz%2BffvDQfOsh0vgkOixe8TGPLmqE647aJD5YwIhAJ7TQJ1u3FDl1yoNNEK5tsVZemJjFwXobXbfQpjKfGhfKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxOcfhf54luRK8UQQq3AP0IdZ%2BPyr%2BCzvuTA8DGvPWwKdKkN82Nmb6Yd4Xp%2FY4qgskQoyoh3vde9RvGfLlMHDM%2BsSPqq9xNNoQoXlvx8MKfez5BS0dD3XWA4PMc2P5vAmCNdiJGcJUh3G4nrcxLzqSQG%2Bhu5TsxdaE9o%2B91SXyg0Ssax76vhJCYGmuM9M9kXkSyTvQY8MhfpHC5A%2FFLSRSXIDMJzfDjRH16Ujc4VvuzCLlMdWeznYYX4GdC8HJdNOk2UydPA5dTRS9Qrzsx2asKRFzpzXhGBoGPJNizklEwCq4j2hea5yI1QzF7VSRGTa0kMvRpp599%2F2GnpQrsJSpUJxVn0SUJk%2FaN4tsGpAemzQMsVvhlRHGYd59iCfjHDuoM5yYQt19sR2utDUREVmHKwxmb02BgCpI4vNH1YRJr21sXCUvn6IZKZuXmwHaVd8uPxmd3gxG%2FSiRK1Reqj5RTMMadWXB%2BvsrPlDZn3OysdwBVFWZhU5g7obBb86qGjO4tbg869u9xmN8467iHRnUmP2PBsnCZYP7%2By7M3trYuhVrzxP%2FlK3yLRCw5zvKpeDAQ%2Farvf2pMS24NW3hyCxr%2B9S6hxLyA0gtBap9jDcS%2FfryY0CXd6%2FGBYCD4R4lFdYcQkmJndv6EDYCxjCT686%2BBjqkARWc9Vmht8HHP1nXsulTiZJCYC66Kn%2FYSQofa7wQuM0rA27raz3UNwGEm3dNdR4JbL987g7nRQua0t7Gyomx3SzunUSBhp6pedMAfhSUxYpZ5Mid0D%2FXNJTEIxlRZBBqchXhT6WBJDg6N%2B95BJUCMcw6FbsRA%2F0pSZgiuAoTbpC06GieeenneILijLm4PqBhd%2ByhnvxQrx6Z4%2Fjgi4BvER7o3ndo&X-Amz-Signature=969678f451271c0f34c3a6e3b5b25b9a27817ba3bfd925beede78ea2f3f8610a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
