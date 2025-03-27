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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664MDFNVS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg9adm4CGvfprWeb61lgBAIwTtg1JwtjNdqkLL5lN9aAIhAMARQ29fSd3pByp1K%2FjR2uRRt6WMv25OdgMGIGBiSk5lKv8DCEUQABoMNjM3NDIzMTgzODA1IgzA7eP03I0xkv8%2BaVcq3AN9pv24m63scqg8YpZeLTsGoU4RELMV3opOhobULq1x4g13hBPJMk2QPrE4trEmoLBRaL6EbEhJDyqOoh2KTMOBWK2UJIixKOnePtg1y%2FrmAN0dlp7nmcp9Y4TzBgIVBGYw2RIkIoKyYp630mPNhAjYY1fsSPgkglj%2Berjs4Ru4MNWr5RitprOq%2Fzni%2BLqeExb58M5%2FJaXw9VpS8%2FajmpXjhSi48BAg20AMZWDFCK6OA2yR%2BzjX%2BNXeVaMiW0E90ydNxeJ0lGQ2WQhQz6gWDtM6Gd4iyvugcrYr77S7UoX0AVzIaOQLkv2YqHBTYi5sNqcklkDSU4RIgfgLbhV8u0%2BNSMh471r45%2F%2BeqrbiYRw50X0Dcisul6oAammQKGFmtFVuvkVUso58sRm4lG4QCSjJ54ksxJ0B1vxCew6rNjwbbzJw6IxmK8FEHFTNGWv6Opf0oyxvWQJwqTbS6%2Fbg5M8C4FPDDAjlhxKIJLHPS1i6yTDqmSVaPsAcoS6wzs4HCmc6q0bt%2BrCvm3wG5%2BTWEP60ULY3kW0F4kCKeW%2BeNX%2FccAgSj8%2BVovCCNd%2FJB7akyqHEjahv0qDmjt9te4Vqpt48KI46BZjz2YZ3x97UFmWg7Jq5Hos3iUoKPiN3PTCK95S%2FBjqkAS9pp0Fg%2BZt6CLUheTWXZ0b7wLHmSD9P7xZegjgGe1m9wyyvqOipNkJbbgV8jhHlYGZzTTuhdV3gREKqa9UefOk9hyplVUpm4h9q851nCV5E19YmzFFrFrb2kKAZ16iXoxedbSMRwtB5e%2Bc0fYZQ8ddtQ4MCDn1MAVms9ghuwXfTuSuNhgGHmvNYsEzXaMsAdkDhP9YK0arSQupRQVggoTr%2FUswn&X-Amz-Signature=0c490205deb4e7e83154072272f8c1aab44aa536e2ac76309c476a677cac8441&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664MDFNVS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg9adm4CGvfprWeb61lgBAIwTtg1JwtjNdqkLL5lN9aAIhAMARQ29fSd3pByp1K%2FjR2uRRt6WMv25OdgMGIGBiSk5lKv8DCEUQABoMNjM3NDIzMTgzODA1IgzA7eP03I0xkv8%2BaVcq3AN9pv24m63scqg8YpZeLTsGoU4RELMV3opOhobULq1x4g13hBPJMk2QPrE4trEmoLBRaL6EbEhJDyqOoh2KTMOBWK2UJIixKOnePtg1y%2FrmAN0dlp7nmcp9Y4TzBgIVBGYw2RIkIoKyYp630mPNhAjYY1fsSPgkglj%2Berjs4Ru4MNWr5RitprOq%2Fzni%2BLqeExb58M5%2FJaXw9VpS8%2FajmpXjhSi48BAg20AMZWDFCK6OA2yR%2BzjX%2BNXeVaMiW0E90ydNxeJ0lGQ2WQhQz6gWDtM6Gd4iyvugcrYr77S7UoX0AVzIaOQLkv2YqHBTYi5sNqcklkDSU4RIgfgLbhV8u0%2BNSMh471r45%2F%2BeqrbiYRw50X0Dcisul6oAammQKGFmtFVuvkVUso58sRm4lG4QCSjJ54ksxJ0B1vxCew6rNjwbbzJw6IxmK8FEHFTNGWv6Opf0oyxvWQJwqTbS6%2Fbg5M8C4FPDDAjlhxKIJLHPS1i6yTDqmSVaPsAcoS6wzs4HCmc6q0bt%2BrCvm3wG5%2BTWEP60ULY3kW0F4kCKeW%2BeNX%2FccAgSj8%2BVovCCNd%2FJB7akyqHEjahv0qDmjt9te4Vqpt48KI46BZjz2YZ3x97UFmWg7Jq5Hos3iUoKPiN3PTCK95S%2FBjqkAS9pp0Fg%2BZt6CLUheTWXZ0b7wLHmSD9P7xZegjgGe1m9wyyvqOipNkJbbgV8jhHlYGZzTTuhdV3gREKqa9UefOk9hyplVUpm4h9q851nCV5E19YmzFFrFrb2kKAZ16iXoxedbSMRwtB5e%2Bc0fYZQ8ddtQ4MCDn1MAVms9ghuwXfTuSuNhgGHmvNYsEzXaMsAdkDhP9YK0arSQupRQVggoTr%2FUswn&X-Amz-Signature=689d63abe3738b810b8625e91c914f93aef02452e51727765b71b513385c7230&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664MDFNVS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg9adm4CGvfprWeb61lgBAIwTtg1JwtjNdqkLL5lN9aAIhAMARQ29fSd3pByp1K%2FjR2uRRt6WMv25OdgMGIGBiSk5lKv8DCEUQABoMNjM3NDIzMTgzODA1IgzA7eP03I0xkv8%2BaVcq3AN9pv24m63scqg8YpZeLTsGoU4RELMV3opOhobULq1x4g13hBPJMk2QPrE4trEmoLBRaL6EbEhJDyqOoh2KTMOBWK2UJIixKOnePtg1y%2FrmAN0dlp7nmcp9Y4TzBgIVBGYw2RIkIoKyYp630mPNhAjYY1fsSPgkglj%2Berjs4Ru4MNWr5RitprOq%2Fzni%2BLqeExb58M5%2FJaXw9VpS8%2FajmpXjhSi48BAg20AMZWDFCK6OA2yR%2BzjX%2BNXeVaMiW0E90ydNxeJ0lGQ2WQhQz6gWDtM6Gd4iyvugcrYr77S7UoX0AVzIaOQLkv2YqHBTYi5sNqcklkDSU4RIgfgLbhV8u0%2BNSMh471r45%2F%2BeqrbiYRw50X0Dcisul6oAammQKGFmtFVuvkVUso58sRm4lG4QCSjJ54ksxJ0B1vxCew6rNjwbbzJw6IxmK8FEHFTNGWv6Opf0oyxvWQJwqTbS6%2Fbg5M8C4FPDDAjlhxKIJLHPS1i6yTDqmSVaPsAcoS6wzs4HCmc6q0bt%2BrCvm3wG5%2BTWEP60ULY3kW0F4kCKeW%2BeNX%2FccAgSj8%2BVovCCNd%2FJB7akyqHEjahv0qDmjt9te4Vqpt48KI46BZjz2YZ3x97UFmWg7Jq5Hos3iUoKPiN3PTCK95S%2FBjqkAS9pp0Fg%2BZt6CLUheTWXZ0b7wLHmSD9P7xZegjgGe1m9wyyvqOipNkJbbgV8jhHlYGZzTTuhdV3gREKqa9UefOk9hyplVUpm4h9q851nCV5E19YmzFFrFrb2kKAZ16iXoxedbSMRwtB5e%2Bc0fYZQ8ddtQ4MCDn1MAVms9ghuwXfTuSuNhgGHmvNYsEzXaMsAdkDhP9YK0arSQupRQVggoTr%2FUswn&X-Amz-Signature=ec7719c19ec83b0717ba0ec70890780630205bd00a3c9be01048bceea174e1d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
