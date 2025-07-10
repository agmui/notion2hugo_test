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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5ACHVP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDe4ciAApUe5y1pdcS%2FggJlgoqr40ELZxl0eof0QWVKgIgcP7kpoXpx792FnIJitvuL7gdATuSW82FDKIBO3KAP0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuUbpdhMR%2Ff1itH4yrcA2g%2BU8%2BMEpLyR5sL8miw1o3Kk5rMwPhA0QRKFmxikDjjNcsZ6vp%2BaQcDUH4g7TZJamn1yYYLHrO8RBR2oVzpOGN1j3Ud%2FJNZk7l4DUNcw8nbJVHUM2oYmOh8ZSufZrY31Ejtst2U4ctP8kbsIvbu45E%2FUarpkzP67OnK9Fp10k1UnAe2%2FpDPd0l8nYzm5hA8Q6Hs1bjbx6tjg9hH3axC9XrDj2YV1vQjFE9uAX0Kd2bSPizRmMLp%2B7D2Bj2sIG%2Fc8ZVCKzCUD5uwZZPipQ%2BgmNrarxxhfEHH5bu2PnklwES8BOvlZs1KFeWxlDqhbOJQqtMBOvD%2BNMdcjWpTc5f4%2BEdfliUjr13MhzlmT8XpLTCqfaxrQm9ohJmj9ATjmSkqqJInFRLQwa515qAMQVnabYs97NJi6LyaBV1L2OciMXCXK5r8z6ZdSX6Ibj7HLPeUAaw1rmmdK4BcumHmzvAr3DxF6aj9cqrBv4d4rbF1vJqJvi7NtkC5g96bIB2bDph2F2EW8uEoXHAGd7MDQzuvtFccIh6VevVj1%2FNIcM7mHTqIZX%2Fh0n6mydShGYZMLVhnmGOY%2FVTR5ajtwy6BG5vZPgQIqX1syOH2kfZi89Xq%2FHZ5je4nJ35AK1zQcpf4MJLRvMMGOqUBF47ENyX7WDTaudPg0W3VPUbzPkJw4fJjXMkKI7hdpVLSbp8WtuEtctSyGV3YXpYVIIhXOBtBjw%2Bqa7NniB8hJkxIV2qAqX3JV4Va0SxighYo6op2V0cCG9HXEd7jaJPOw88VUarg4dVhj54COVGWVaNzpzDNFtLMfxpe8X97t6MjSyUrBIXJonXVF4nCSObTVsLVIxAVEUnzCEbOSu7eIW3JwaI%2B&X-Amz-Signature=65b6d5e1334ae8f2237f8155e0e7b314adaeb77644de3cb8e9a1833e5a693aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5ACHVP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDe4ciAApUe5y1pdcS%2FggJlgoqr40ELZxl0eof0QWVKgIgcP7kpoXpx792FnIJitvuL7gdATuSW82FDKIBO3KAP0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuUbpdhMR%2Ff1itH4yrcA2g%2BU8%2BMEpLyR5sL8miw1o3Kk5rMwPhA0QRKFmxikDjjNcsZ6vp%2BaQcDUH4g7TZJamn1yYYLHrO8RBR2oVzpOGN1j3Ud%2FJNZk7l4DUNcw8nbJVHUM2oYmOh8ZSufZrY31Ejtst2U4ctP8kbsIvbu45E%2FUarpkzP67OnK9Fp10k1UnAe2%2FpDPd0l8nYzm5hA8Q6Hs1bjbx6tjg9hH3axC9XrDj2YV1vQjFE9uAX0Kd2bSPizRmMLp%2B7D2Bj2sIG%2Fc8ZVCKzCUD5uwZZPipQ%2BgmNrarxxhfEHH5bu2PnklwES8BOvlZs1KFeWxlDqhbOJQqtMBOvD%2BNMdcjWpTc5f4%2BEdfliUjr13MhzlmT8XpLTCqfaxrQm9ohJmj9ATjmSkqqJInFRLQwa515qAMQVnabYs97NJi6LyaBV1L2OciMXCXK5r8z6ZdSX6Ibj7HLPeUAaw1rmmdK4BcumHmzvAr3DxF6aj9cqrBv4d4rbF1vJqJvi7NtkC5g96bIB2bDph2F2EW8uEoXHAGd7MDQzuvtFccIh6VevVj1%2FNIcM7mHTqIZX%2Fh0n6mydShGYZMLVhnmGOY%2FVTR5ajtwy6BG5vZPgQIqX1syOH2kfZi89Xq%2FHZ5je4nJ35AK1zQcpf4MJLRvMMGOqUBF47ENyX7WDTaudPg0W3VPUbzPkJw4fJjXMkKI7hdpVLSbp8WtuEtctSyGV3YXpYVIIhXOBtBjw%2Bqa7NniB8hJkxIV2qAqX3JV4Va0SxighYo6op2V0cCG9HXEd7jaJPOw88VUarg4dVhj54COVGWVaNzpzDNFtLMfxpe8X97t6MjSyUrBIXJonXVF4nCSObTVsLVIxAVEUnzCEbOSu7eIW3JwaI%2B&X-Amz-Signature=df5aff7ed861c116eda89730db475a088163bba5117cac3afc82766079cd83ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5ACHVP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDe4ciAApUe5y1pdcS%2FggJlgoqr40ELZxl0eof0QWVKgIgcP7kpoXpx792FnIJitvuL7gdATuSW82FDKIBO3KAP0oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuUbpdhMR%2Ff1itH4yrcA2g%2BU8%2BMEpLyR5sL8miw1o3Kk5rMwPhA0QRKFmxikDjjNcsZ6vp%2BaQcDUH4g7TZJamn1yYYLHrO8RBR2oVzpOGN1j3Ud%2FJNZk7l4DUNcw8nbJVHUM2oYmOh8ZSufZrY31Ejtst2U4ctP8kbsIvbu45E%2FUarpkzP67OnK9Fp10k1UnAe2%2FpDPd0l8nYzm5hA8Q6Hs1bjbx6tjg9hH3axC9XrDj2YV1vQjFE9uAX0Kd2bSPizRmMLp%2B7D2Bj2sIG%2Fc8ZVCKzCUD5uwZZPipQ%2BgmNrarxxhfEHH5bu2PnklwES8BOvlZs1KFeWxlDqhbOJQqtMBOvD%2BNMdcjWpTc5f4%2BEdfliUjr13MhzlmT8XpLTCqfaxrQm9ohJmj9ATjmSkqqJInFRLQwa515qAMQVnabYs97NJi6LyaBV1L2OciMXCXK5r8z6ZdSX6Ibj7HLPeUAaw1rmmdK4BcumHmzvAr3DxF6aj9cqrBv4d4rbF1vJqJvi7NtkC5g96bIB2bDph2F2EW8uEoXHAGd7MDQzuvtFccIh6VevVj1%2FNIcM7mHTqIZX%2Fh0n6mydShGYZMLVhnmGOY%2FVTR5ajtwy6BG5vZPgQIqX1syOH2kfZi89Xq%2FHZ5je4nJ35AK1zQcpf4MJLRvMMGOqUBF47ENyX7WDTaudPg0W3VPUbzPkJw4fJjXMkKI7hdpVLSbp8WtuEtctSyGV3YXpYVIIhXOBtBjw%2Bqa7NniB8hJkxIV2qAqX3JV4Va0SxighYo6op2V0cCG9HXEd7jaJPOw88VUarg4dVhj54COVGWVaNzpzDNFtLMfxpe8X97t6MjSyUrBIXJonXVF4nCSObTVsLVIxAVEUnzCEbOSu7eIW3JwaI%2B&X-Amz-Signature=575fa689df4a87a28e2749c5ed8b8daea87e09f1e679ed555690f1a7447c52f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
