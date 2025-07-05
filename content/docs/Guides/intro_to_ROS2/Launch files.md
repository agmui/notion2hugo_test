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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLAINQ6L%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC6Tifx5uEImK9f5Y4cYlbqIPuupkpjQYREeCVQXX3FbAIhAOxoGTesKq1afoXhr%2B0NSpDJ5lZe5dH90S53NWUHOen3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwDihv7BxJtd2MyxIAq3APDymJ3DwixIYxZ2VnifZqSk3m546u7AOqnMaD6%2FLTHBHbNb%2F1JJq4PVXBXgUiip3oGDKHEK0HiJ3%2BmTPsxyWpjobNLoXcsfR9GIuaSjqnv0EQI2dLBxo6%2FBuhFd%2BMtcVDeqncMrlG7Sr2JoVN939K8XC6ds96dqSQD9LVnywI0XAWDDcQ3Caotu5NZ2BbIYw5IX%2FIl4JU93JhipQJVAKU%2FIRwGE5zyBTrdAOP29%2Ftwmh9BmSn5InqwGfQ0GSfVAytpt60PSg7J0sv6XNm8K7L3DpTH%2FbDz8MgivR3ONx%2FT5vnBvhAXuBV%2F6D2%2BUtjm5i1p8NHJcmvimAV7tV72uCKa4TLfnQ9okhuF%2BCCYi1n3LA8NGGlfIoqgfj7%2FDAwdt3CCut8%2Bjre%2B7mGak%2FylmTwksMdTjsrIzCkjxRhfv3aDrvfnrhAlImWXVxatbRi7i6AC70ivjvXUFiku%2FtZsEoIt3ueGIDE8Bq%2Fe1AuMsx0mc42%2FF4op%2BgMxZPKbeQvFX9R%2FbQ1isu2%2FfimEKF%2BaUuEy%2Fgp6Xrg7SJfgPsQQo9uAK7YLnF3ozVlAGiY8N7vFnBdL3QL9gYT38QSvAtPUkdDNQza8JGmDsqupACWSC9h7098BA%2B3a%2B%2B4yhNTLMjDdo6PDBjqkAcCip%2FrWqmNqXEjGRUAIMhvWYgXlP8q2HxZQpsZxxN8Z%2FEBo3oGQkTdvurz2OOTleXcc6CgA8m0rQp%2BKJnM%2BCdUfg%2FbtUcgYZ3X8GL1wUiILHT3FDI08LUHqHbqw6897aJCWUXUSqZZV3MZ3d92yMn8KJ7EDX%2FX1B5RHmy%2FE9Z8hARDLEI5BUeTDpfFtxLi1vQX9H5E46opOq4BIgYJi%2F3xXJ6i6&X-Amz-Signature=3bc50746a573d492def583976e83976178827bdd6e0e9add40cfe9a7ba39d00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLAINQ6L%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC6Tifx5uEImK9f5Y4cYlbqIPuupkpjQYREeCVQXX3FbAIhAOxoGTesKq1afoXhr%2B0NSpDJ5lZe5dH90S53NWUHOen3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwDihv7BxJtd2MyxIAq3APDymJ3DwixIYxZ2VnifZqSk3m546u7AOqnMaD6%2FLTHBHbNb%2F1JJq4PVXBXgUiip3oGDKHEK0HiJ3%2BmTPsxyWpjobNLoXcsfR9GIuaSjqnv0EQI2dLBxo6%2FBuhFd%2BMtcVDeqncMrlG7Sr2JoVN939K8XC6ds96dqSQD9LVnywI0XAWDDcQ3Caotu5NZ2BbIYw5IX%2FIl4JU93JhipQJVAKU%2FIRwGE5zyBTrdAOP29%2Ftwmh9BmSn5InqwGfQ0GSfVAytpt60PSg7J0sv6XNm8K7L3DpTH%2FbDz8MgivR3ONx%2FT5vnBvhAXuBV%2F6D2%2BUtjm5i1p8NHJcmvimAV7tV72uCKa4TLfnQ9okhuF%2BCCYi1n3LA8NGGlfIoqgfj7%2FDAwdt3CCut8%2Bjre%2B7mGak%2FylmTwksMdTjsrIzCkjxRhfv3aDrvfnrhAlImWXVxatbRi7i6AC70ivjvXUFiku%2FtZsEoIt3ueGIDE8Bq%2Fe1AuMsx0mc42%2FF4op%2BgMxZPKbeQvFX9R%2FbQ1isu2%2FfimEKF%2BaUuEy%2Fgp6Xrg7SJfgPsQQo9uAK7YLnF3ozVlAGiY8N7vFnBdL3QL9gYT38QSvAtPUkdDNQza8JGmDsqupACWSC9h7098BA%2B3a%2B%2B4yhNTLMjDdo6PDBjqkAcCip%2FrWqmNqXEjGRUAIMhvWYgXlP8q2HxZQpsZxxN8Z%2FEBo3oGQkTdvurz2OOTleXcc6CgA8m0rQp%2BKJnM%2BCdUfg%2FbtUcgYZ3X8GL1wUiILHT3FDI08LUHqHbqw6897aJCWUXUSqZZV3MZ3d92yMn8KJ7EDX%2FX1B5RHmy%2FE9Z8hARDLEI5BUeTDpfFtxLi1vQX9H5E46opOq4BIgYJi%2F3xXJ6i6&X-Amz-Signature=e96ea943207d1fbe997864f537092a044a6f5746bfc56bbc93e452a8b3312c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLAINQ6L%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC6Tifx5uEImK9f5Y4cYlbqIPuupkpjQYREeCVQXX3FbAIhAOxoGTesKq1afoXhr%2B0NSpDJ5lZe5dH90S53NWUHOen3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwDihv7BxJtd2MyxIAq3APDymJ3DwixIYxZ2VnifZqSk3m546u7AOqnMaD6%2FLTHBHbNb%2F1JJq4PVXBXgUiip3oGDKHEK0HiJ3%2BmTPsxyWpjobNLoXcsfR9GIuaSjqnv0EQI2dLBxo6%2FBuhFd%2BMtcVDeqncMrlG7Sr2JoVN939K8XC6ds96dqSQD9LVnywI0XAWDDcQ3Caotu5NZ2BbIYw5IX%2FIl4JU93JhipQJVAKU%2FIRwGE5zyBTrdAOP29%2Ftwmh9BmSn5InqwGfQ0GSfVAytpt60PSg7J0sv6XNm8K7L3DpTH%2FbDz8MgivR3ONx%2FT5vnBvhAXuBV%2F6D2%2BUtjm5i1p8NHJcmvimAV7tV72uCKa4TLfnQ9okhuF%2BCCYi1n3LA8NGGlfIoqgfj7%2FDAwdt3CCut8%2Bjre%2B7mGak%2FylmTwksMdTjsrIzCkjxRhfv3aDrvfnrhAlImWXVxatbRi7i6AC70ivjvXUFiku%2FtZsEoIt3ueGIDE8Bq%2Fe1AuMsx0mc42%2FF4op%2BgMxZPKbeQvFX9R%2FbQ1isu2%2FfimEKF%2BaUuEy%2Fgp6Xrg7SJfgPsQQo9uAK7YLnF3ozVlAGiY8N7vFnBdL3QL9gYT38QSvAtPUkdDNQza8JGmDsqupACWSC9h7098BA%2B3a%2B%2B4yhNTLMjDdo6PDBjqkAcCip%2FrWqmNqXEjGRUAIMhvWYgXlP8q2HxZQpsZxxN8Z%2FEBo3oGQkTdvurz2OOTleXcc6CgA8m0rQp%2BKJnM%2BCdUfg%2FbtUcgYZ3X8GL1wUiILHT3FDI08LUHqHbqw6897aJCWUXUSqZZV3MZ3d92yMn8KJ7EDX%2FX1B5RHmy%2FE9Z8hARDLEI5BUeTDpfFtxLi1vQX9H5E46opOq4BIgYJi%2F3xXJ6i6&X-Amz-Signature=b66cde9f514ac3614d179275c062c60e608f613cb6366bd9f849a173062f13fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
