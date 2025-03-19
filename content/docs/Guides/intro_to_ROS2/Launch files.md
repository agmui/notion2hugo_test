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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGBAMMO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCLW67aPlzLSDGG9Oywcp5ech7DOGMkxQATVjHAjMy7NQIgZeIb5F16QjCoV4Y1GTyFNLxx4X%2FMLbWQ9wZ0bOmhVbMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHTs3rWAaSus5IfSlyrcA2QhQfzWOUuq50ulQscWxc87nQZaxzRxxyosvRug42izLlx50bkkrMP32%2FX8xE6jIHFsL63DNs%2FpgKpuN8nUGOqmFwfnEijkMQ38v7zoESBoYU%2BTXAZ%2F4ckAAnWYv0%2Blt73xDe8xxf7c36Y6okINcIudys%2BkhTrCZyGRpkBwPodWm06riHlwF0VRrS5iJ7rUFe2wSVxbgn8gI2p%2BR57%2BNTAxtKU9iUywva9BA7bBKCsLjKfKvQWdtiSlubXXQiaQnmkZwI2a0ZIqWtADWiGBo41hk9%2FtpMiTVdT6X8l494HjK%2BQErsGQpSHDMnzSZbiJNaDRPn2aoDs9%2BTrg7hkbYDWWJEnxAVZ5xtL9fJuIlabBnJjCHSUFMxYLI4xqUtQ9DLy4GOlj0rWTZrwAu8y%2Bg6XPlSM0437iE5Pq9pOkMzanH5gC0WdgguYAMla5T0UCWxzfejC5a91bp3yoXk2kYGv6NseskzWRc%2BDr6Mczz6kzzNCYcDvz9k%2BHrgYwaDHHI2gpuHg7Rpg98PJEtyTUZr1lw6Be%2FfHRko0tlhCPkKYPZi%2BqeV%2FCIIG12y8%2FhKtHtfTAnS580Hq58KKvVRRI%2FVcwGbCQz2QV%2BAGu3wPnEtBaHsdlLUx6HGSkQ7YvMJjZ7L4GOqUBhte%2FByv9ngsYZLdm3SmsLgqsw%2BuA2Pb9JxRRyWow6qDuhhKtIOrn%2BnOKrQwNAaNA0YnLo5sLW9ieItJOcZS3qMbFZtmqiW3M%2Bwt%2Bt%2B90u3fiVKO4RxA%2FOhOZQP%2F2EroCE5tMzI%2FtA0MGiAxdqmdv4JY2bJX9IVRRNNfHmbo6C4p9O8ddodDzmU9%2BPfEEyBtxUGbNm%2Fv%2B7TniqYi0%2Fk8UfunQh3Qb&X-Amz-Signature=8a58c714e3180217ca7c2f23699829ba1a3d6d958de138965093e7711d505464&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGBAMMO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCLW67aPlzLSDGG9Oywcp5ech7DOGMkxQATVjHAjMy7NQIgZeIb5F16QjCoV4Y1GTyFNLxx4X%2FMLbWQ9wZ0bOmhVbMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHTs3rWAaSus5IfSlyrcA2QhQfzWOUuq50ulQscWxc87nQZaxzRxxyosvRug42izLlx50bkkrMP32%2FX8xE6jIHFsL63DNs%2FpgKpuN8nUGOqmFwfnEijkMQ38v7zoESBoYU%2BTXAZ%2F4ckAAnWYv0%2Blt73xDe8xxf7c36Y6okINcIudys%2BkhTrCZyGRpkBwPodWm06riHlwF0VRrS5iJ7rUFe2wSVxbgn8gI2p%2BR57%2BNTAxtKU9iUywva9BA7bBKCsLjKfKvQWdtiSlubXXQiaQnmkZwI2a0ZIqWtADWiGBo41hk9%2FtpMiTVdT6X8l494HjK%2BQErsGQpSHDMnzSZbiJNaDRPn2aoDs9%2BTrg7hkbYDWWJEnxAVZ5xtL9fJuIlabBnJjCHSUFMxYLI4xqUtQ9DLy4GOlj0rWTZrwAu8y%2Bg6XPlSM0437iE5Pq9pOkMzanH5gC0WdgguYAMla5T0UCWxzfejC5a91bp3yoXk2kYGv6NseskzWRc%2BDr6Mczz6kzzNCYcDvz9k%2BHrgYwaDHHI2gpuHg7Rpg98PJEtyTUZr1lw6Be%2FfHRko0tlhCPkKYPZi%2BqeV%2FCIIG12y8%2FhKtHtfTAnS580Hq58KKvVRRI%2FVcwGbCQz2QV%2BAGu3wPnEtBaHsdlLUx6HGSkQ7YvMJjZ7L4GOqUBhte%2FByv9ngsYZLdm3SmsLgqsw%2BuA2Pb9JxRRyWow6qDuhhKtIOrn%2BnOKrQwNAaNA0YnLo5sLW9ieItJOcZS3qMbFZtmqiW3M%2Bwt%2Bt%2B90u3fiVKO4RxA%2FOhOZQP%2F2EroCE5tMzI%2FtA0MGiAxdqmdv4JY2bJX9IVRRNNfHmbo6C4p9O8ddodDzmU9%2BPfEEyBtxUGbNm%2Fv%2B7TniqYi0%2Fk8UfunQh3Qb&X-Amz-Signature=23c7b14da935b7e1f2465c71e2ffd7091d1938b0662b2345f47d819d0b4d8c97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGBAMMO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCLW67aPlzLSDGG9Oywcp5ech7DOGMkxQATVjHAjMy7NQIgZeIb5F16QjCoV4Y1GTyFNLxx4X%2FMLbWQ9wZ0bOmhVbMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHTs3rWAaSus5IfSlyrcA2QhQfzWOUuq50ulQscWxc87nQZaxzRxxyosvRug42izLlx50bkkrMP32%2FX8xE6jIHFsL63DNs%2FpgKpuN8nUGOqmFwfnEijkMQ38v7zoESBoYU%2BTXAZ%2F4ckAAnWYv0%2Blt73xDe8xxf7c36Y6okINcIudys%2BkhTrCZyGRpkBwPodWm06riHlwF0VRrS5iJ7rUFe2wSVxbgn8gI2p%2BR57%2BNTAxtKU9iUywva9BA7bBKCsLjKfKvQWdtiSlubXXQiaQnmkZwI2a0ZIqWtADWiGBo41hk9%2FtpMiTVdT6X8l494HjK%2BQErsGQpSHDMnzSZbiJNaDRPn2aoDs9%2BTrg7hkbYDWWJEnxAVZ5xtL9fJuIlabBnJjCHSUFMxYLI4xqUtQ9DLy4GOlj0rWTZrwAu8y%2Bg6XPlSM0437iE5Pq9pOkMzanH5gC0WdgguYAMla5T0UCWxzfejC5a91bp3yoXk2kYGv6NseskzWRc%2BDr6Mczz6kzzNCYcDvz9k%2BHrgYwaDHHI2gpuHg7Rpg98PJEtyTUZr1lw6Be%2FfHRko0tlhCPkKYPZi%2BqeV%2FCIIG12y8%2FhKtHtfTAnS580Hq58KKvVRRI%2FVcwGbCQz2QV%2BAGu3wPnEtBaHsdlLUx6HGSkQ7YvMJjZ7L4GOqUBhte%2FByv9ngsYZLdm3SmsLgqsw%2BuA2Pb9JxRRyWow6qDuhhKtIOrn%2BnOKrQwNAaNA0YnLo5sLW9ieItJOcZS3qMbFZtmqiW3M%2Bwt%2Bt%2B90u3fiVKO4RxA%2FOhOZQP%2F2EroCE5tMzI%2FtA0MGiAxdqmdv4JY2bJX9IVRRNNfHmbo6C4p9O8ddodDzmU9%2BPfEEyBtxUGbNm%2Fv%2B7TniqYi0%2Fk8UfunQh3Qb&X-Amz-Signature=0e3e2e7d82f962ec8b1a733f0d34d1d32b3f8411ca0381069833c3ff4dd3aca5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
