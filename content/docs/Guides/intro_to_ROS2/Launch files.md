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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKBLAON%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDisZrzNrsNxcbUYuTqSMRiZlAXdrKWhqKc6xlHGeqoVgIgUMmJilSM6QvBnn4VXb0fNi6rSv%2FZfHgfEEFpd%2BeINJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJrQPBKe6t1bWnYjircA%2Fncw3FwcIUnBUFiPYaH%2F4CGZR6KVD8ob1vC605YENkxQKM4Ufdtxbg6WQmRv8w%2BDBn%2FE2W4LJq0UQlfC1Qhq8XGH5b33Oc2SsSdB7MDR5w9euNFMjyVxnEWe6EBRageGTyEjN6cXZVQDpxqSv4Wn3MT5WDWeIYEX7pTau0XCReIJCNeefNQCjr7mbbXXqGkh2xkBkPCtwXE5aPdbiVDIaJXhXxzS1F7hfuMCLahb29HqUuooMsz%2F6j4OsH2r%2FtsBjV1hgQ8DUxb%2FmzriXMtir9rr5Y8xcF2grDmTiP35Yp9m5NtCFs9qQXJI5FsLZqIY2WMAv9qTMjR8FiXJSStq4lWxkbAQNZ5lbaVBq3vfab8dPHvNs1k8OBTP9X4Q%2Fo%2BFrcLGVAz3UXSeM8KLwbBeEPvZVSCYC05ITzNToJpD4IXhZpvKdQkDWRXiU%2BcvYHaqbYzUfu7Qx8vTuo6LUn%2Fwcdizh%2FPKuFWGNvnUnTeqxYfGYVngRZseWNlUmKLAJmmMsiq33iYXNj2ZqOJIcOhgIH173%2BK7iZwnw5GVjrmJ7ukaYUFKHLV%2Bj2VGuUhmsQbiLKA7NFHeef2PhSpzprSSzXJscAHSQC%2BFVnKLOuMhFfgpjl0z%2F2OLoH0CgkTMK%2FBnr0GOqUBfINDYRkyspfIo%2BP9DcyuhNIPGOPtZGRu90XuYH1ToI1xYRpAgng%2FC4zluKzgHzXaksxFnxtUBY6PUaoxNnU4pcYkPb%2FDIvfSK7Q9dUqUgRH82O4xIpB7whOsi63HpeNFTUcVEobUApqUQMwl0yH9rss9jUmaJWF85%2BX13hW7D%2FxJcGBf7SkDPHGXtptc9PxTiAL6DdBHLWfACnRctGqfXXuy61V6&X-Amz-Signature=098fda39fcc84c9de160809e13cac7778dc0ebe0b1e51c1b50e116e94dfdb2ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKBLAON%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDisZrzNrsNxcbUYuTqSMRiZlAXdrKWhqKc6xlHGeqoVgIgUMmJilSM6QvBnn4VXb0fNi6rSv%2FZfHgfEEFpd%2BeINJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJrQPBKe6t1bWnYjircA%2Fncw3FwcIUnBUFiPYaH%2F4CGZR6KVD8ob1vC605YENkxQKM4Ufdtxbg6WQmRv8w%2BDBn%2FE2W4LJq0UQlfC1Qhq8XGH5b33Oc2SsSdB7MDR5w9euNFMjyVxnEWe6EBRageGTyEjN6cXZVQDpxqSv4Wn3MT5WDWeIYEX7pTau0XCReIJCNeefNQCjr7mbbXXqGkh2xkBkPCtwXE5aPdbiVDIaJXhXxzS1F7hfuMCLahb29HqUuooMsz%2F6j4OsH2r%2FtsBjV1hgQ8DUxb%2FmzriXMtir9rr5Y8xcF2grDmTiP35Yp9m5NtCFs9qQXJI5FsLZqIY2WMAv9qTMjR8FiXJSStq4lWxkbAQNZ5lbaVBq3vfab8dPHvNs1k8OBTP9X4Q%2Fo%2BFrcLGVAz3UXSeM8KLwbBeEPvZVSCYC05ITzNToJpD4IXhZpvKdQkDWRXiU%2BcvYHaqbYzUfu7Qx8vTuo6LUn%2Fwcdizh%2FPKuFWGNvnUnTeqxYfGYVngRZseWNlUmKLAJmmMsiq33iYXNj2ZqOJIcOhgIH173%2BK7iZwnw5GVjrmJ7ukaYUFKHLV%2Bj2VGuUhmsQbiLKA7NFHeef2PhSpzprSSzXJscAHSQC%2BFVnKLOuMhFfgpjl0z%2F2OLoH0CgkTMK%2FBnr0GOqUBfINDYRkyspfIo%2BP9DcyuhNIPGOPtZGRu90XuYH1ToI1xYRpAgng%2FC4zluKzgHzXaksxFnxtUBY6PUaoxNnU4pcYkPb%2FDIvfSK7Q9dUqUgRH82O4xIpB7whOsi63HpeNFTUcVEobUApqUQMwl0yH9rss9jUmaJWF85%2BX13hW7D%2FxJcGBf7SkDPHGXtptc9PxTiAL6DdBHLWfACnRctGqfXXuy61V6&X-Amz-Signature=c3e4dd45ee5135e85e1e0a224dc9b96257cccf8279c5f5c95b8b695fb45241cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKBLAON%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDisZrzNrsNxcbUYuTqSMRiZlAXdrKWhqKc6xlHGeqoVgIgUMmJilSM6QvBnn4VXb0fNi6rSv%2FZfHgfEEFpd%2BeINJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJrQPBKe6t1bWnYjircA%2Fncw3FwcIUnBUFiPYaH%2F4CGZR6KVD8ob1vC605YENkxQKM4Ufdtxbg6WQmRv8w%2BDBn%2FE2W4LJq0UQlfC1Qhq8XGH5b33Oc2SsSdB7MDR5w9euNFMjyVxnEWe6EBRageGTyEjN6cXZVQDpxqSv4Wn3MT5WDWeIYEX7pTau0XCReIJCNeefNQCjr7mbbXXqGkh2xkBkPCtwXE5aPdbiVDIaJXhXxzS1F7hfuMCLahb29HqUuooMsz%2F6j4OsH2r%2FtsBjV1hgQ8DUxb%2FmzriXMtir9rr5Y8xcF2grDmTiP35Yp9m5NtCFs9qQXJI5FsLZqIY2WMAv9qTMjR8FiXJSStq4lWxkbAQNZ5lbaVBq3vfab8dPHvNs1k8OBTP9X4Q%2Fo%2BFrcLGVAz3UXSeM8KLwbBeEPvZVSCYC05ITzNToJpD4IXhZpvKdQkDWRXiU%2BcvYHaqbYzUfu7Qx8vTuo6LUn%2Fwcdizh%2FPKuFWGNvnUnTeqxYfGYVngRZseWNlUmKLAJmmMsiq33iYXNj2ZqOJIcOhgIH173%2BK7iZwnw5GVjrmJ7ukaYUFKHLV%2Bj2VGuUhmsQbiLKA7NFHeef2PhSpzprSSzXJscAHSQC%2BFVnKLOuMhFfgpjl0z%2F2OLoH0CgkTMK%2FBnr0GOqUBfINDYRkyspfIo%2BP9DcyuhNIPGOPtZGRu90XuYH1ToI1xYRpAgng%2FC4zluKzgHzXaksxFnxtUBY6PUaoxNnU4pcYkPb%2FDIvfSK7Q9dUqUgRH82O4xIpB7whOsi63HpeNFTUcVEobUApqUQMwl0yH9rss9jUmaJWF85%2BX13hW7D%2FxJcGBf7SkDPHGXtptc9PxTiAL6DdBHLWfACnRctGqfXXuy61V6&X-Amz-Signature=4a10d6625519467e4a4a5533fba45cb6856482e32242d216adeb73fbb5012e01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
