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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZXACRI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDt3Q1zkssS3f05r0v78oYU0VGYLx9rAwgFag9UmorSDAiAzDvw4sVc5lIW5wMFy1tyJp%2BFbdfP6KT4wAYO%2BRfsRair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMX%2BZXkFtloVG7dUF1KtwDlku1FY7bgNHnxZ60mIpeMxTEqcjHy3EBPHRCvQ1QKhw0rLsEDZz%2Fn93k5DloW10ZVXTOMVW%2FMyroaCigopYxJFcft3hvAgl3mh1XZWTpND%2FkH1sItEvPI6C2sc%2BtUKACE%2F8QssbfIr2boqeb0dCtmXACp1IfNgwcSctZELYw4C2vqKoSU%2Bgz7n%2Fc5ngqfRX7SoDGlSszlX9Eue90U5WbNkPPV7aL6OEjqnsMYKBdQ7jYAZFZTAWJL93%2BmItK7cBmoOVf5oZ%2FsMs5p6HEcjsKpl8%2BTRcTFyw7eu31YZyZLFJLhjOtqovLvq26kn7gsTJJIJSDHhDoqtPdorSaTmWqJ5TKtVr69aVG2hzm%2FjcUC8dekWhXHeUAMOmV6wxjgKBA%2BWSSnFk1BYpB%2FZdwjuVmkVVBLcyNFhDsVx8dBqHESqY0Nn3BysDF5RGL0mnV7ZuLrQUTc%2BhSqROL7u%2FcU6y6wu3gZ4UYRA4yNQ6dScNOlFcjs601wzHPUHVmgW0yaNoEIdMicw%2FKN1Khv5cvmgxVJ9shJ7%2FpLvAvytUS6WRRTrwGnYBcPJ6aZ60ZuCNKnD3DO2kxn2JL6pdg2gshGYUj0Zxs7kd%2ByvWwrbSJbMAFhowIeOkYPNzBYRIgejkw0rTlvgY6pgE%2B66rZceVD8z7%2By0xPFNSCPf7fLVfU5%2B4uNr4buU6tzPGXLwh7f4S6uCd%2BuHeih0yMY61YhkuNbRnnYpa57%2FlxP93cc1ALgsX80FfesEiPNhUyCoVh8y%2BUbhf2bvkgFIp0EoMoxt0ratwzQVTapqp9cD6txeBxpSKGje40reEa8Gu%2BvteFMxzq%2FPMQt9ZwzmPL%2Fy8b1DKcazRK7z6yXvEm84kRNLFl&X-Amz-Signature=51c037b41405e31d8d69a19f9669c3094469e59f4955fe26d8f35fdccf9a2b79&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZXACRI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDt3Q1zkssS3f05r0v78oYU0VGYLx9rAwgFag9UmorSDAiAzDvw4sVc5lIW5wMFy1tyJp%2BFbdfP6KT4wAYO%2BRfsRair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMX%2BZXkFtloVG7dUF1KtwDlku1FY7bgNHnxZ60mIpeMxTEqcjHy3EBPHRCvQ1QKhw0rLsEDZz%2Fn93k5DloW10ZVXTOMVW%2FMyroaCigopYxJFcft3hvAgl3mh1XZWTpND%2FkH1sItEvPI6C2sc%2BtUKACE%2F8QssbfIr2boqeb0dCtmXACp1IfNgwcSctZELYw4C2vqKoSU%2Bgz7n%2Fc5ngqfRX7SoDGlSszlX9Eue90U5WbNkPPV7aL6OEjqnsMYKBdQ7jYAZFZTAWJL93%2BmItK7cBmoOVf5oZ%2FsMs5p6HEcjsKpl8%2BTRcTFyw7eu31YZyZLFJLhjOtqovLvq26kn7gsTJJIJSDHhDoqtPdorSaTmWqJ5TKtVr69aVG2hzm%2FjcUC8dekWhXHeUAMOmV6wxjgKBA%2BWSSnFk1BYpB%2FZdwjuVmkVVBLcyNFhDsVx8dBqHESqY0Nn3BysDF5RGL0mnV7ZuLrQUTc%2BhSqROL7u%2FcU6y6wu3gZ4UYRA4yNQ6dScNOlFcjs601wzHPUHVmgW0yaNoEIdMicw%2FKN1Khv5cvmgxVJ9shJ7%2FpLvAvytUS6WRRTrwGnYBcPJ6aZ60ZuCNKnD3DO2kxn2JL6pdg2gshGYUj0Zxs7kd%2ByvWwrbSJbMAFhowIeOkYPNzBYRIgejkw0rTlvgY6pgE%2B66rZceVD8z7%2By0xPFNSCPf7fLVfU5%2B4uNr4buU6tzPGXLwh7f4S6uCd%2BuHeih0yMY61YhkuNbRnnYpa57%2FlxP93cc1ALgsX80FfesEiPNhUyCoVh8y%2BUbhf2bvkgFIp0EoMoxt0ratwzQVTapqp9cD6txeBxpSKGje40reEa8Gu%2BvteFMxzq%2FPMQt9ZwzmPL%2Fy8b1DKcazRK7z6yXvEm84kRNLFl&X-Amz-Signature=8151e9ec772e8a9ecb8fe5178d7dd56975b590048019b1fb7539e671313b3a23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZXACRI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDt3Q1zkssS3f05r0v78oYU0VGYLx9rAwgFag9UmorSDAiAzDvw4sVc5lIW5wMFy1tyJp%2BFbdfP6KT4wAYO%2BRfsRair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMX%2BZXkFtloVG7dUF1KtwDlku1FY7bgNHnxZ60mIpeMxTEqcjHy3EBPHRCvQ1QKhw0rLsEDZz%2Fn93k5DloW10ZVXTOMVW%2FMyroaCigopYxJFcft3hvAgl3mh1XZWTpND%2FkH1sItEvPI6C2sc%2BtUKACE%2F8QssbfIr2boqeb0dCtmXACp1IfNgwcSctZELYw4C2vqKoSU%2Bgz7n%2Fc5ngqfRX7SoDGlSszlX9Eue90U5WbNkPPV7aL6OEjqnsMYKBdQ7jYAZFZTAWJL93%2BmItK7cBmoOVf5oZ%2FsMs5p6HEcjsKpl8%2BTRcTFyw7eu31YZyZLFJLhjOtqovLvq26kn7gsTJJIJSDHhDoqtPdorSaTmWqJ5TKtVr69aVG2hzm%2FjcUC8dekWhXHeUAMOmV6wxjgKBA%2BWSSnFk1BYpB%2FZdwjuVmkVVBLcyNFhDsVx8dBqHESqY0Nn3BysDF5RGL0mnV7ZuLrQUTc%2BhSqROL7u%2FcU6y6wu3gZ4UYRA4yNQ6dScNOlFcjs601wzHPUHVmgW0yaNoEIdMicw%2FKN1Khv5cvmgxVJ9shJ7%2FpLvAvytUS6WRRTrwGnYBcPJ6aZ60ZuCNKnD3DO2kxn2JL6pdg2gshGYUj0Zxs7kd%2ByvWwrbSJbMAFhowIeOkYPNzBYRIgejkw0rTlvgY6pgE%2B66rZceVD8z7%2By0xPFNSCPf7fLVfU5%2B4uNr4buU6tzPGXLwh7f4S6uCd%2BuHeih0yMY61YhkuNbRnnYpa57%2FlxP93cc1ALgsX80FfesEiPNhUyCoVh8y%2BUbhf2bvkgFIp0EoMoxt0ratwzQVTapqp9cD6txeBxpSKGje40reEa8Gu%2BvteFMxzq%2FPMQt9ZwzmPL%2Fy8b1DKcazRK7z6yXvEm84kRNLFl&X-Amz-Signature=27f4a631630c5c45284f29615023e6f96e76f2aa4d6a582529a51f13a2a6675e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
