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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIW54HW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDOwXTLbfwA%2B2ZmZ3n%2BCG6Qiamwq2vHo8hZFSOEIdSHGAiA2%2BK6W%2FtCDTeWq9J%2B8uvGMN9iB6%2FEWgc8TWMVKMec6ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm53R7mV0i1N7GKpiKtwDtlydIQUcKC%2FqHyM12lE67NZ6Cb9SandTHQKGTkUkfqumodc6HybRP3NR08XaGgNo%2F%2BAg4bYUDZ6LmxPLWM1lCRo70SBt8XlGxlxu%2B4XjyCC3vhBnNiiix0lpzGRYbmDlVZR8rWqknrIoH33cuaf4BPORhaTbQ64WqlwRGhGVCknF9wnf9qOXs0tp7nBak%2Fcpmwr%2Fd6Tb%2FHV3QBMo3u44wtUyXrk%2Fy0czNQFAnPo%2FZgXmtgSok7aVUDncvQUT7Tfvu7BcTzOfuESnMHgPLy%2FTu6Qsx6FMmxsQCDlTWG0CPCx6oFTEROZ%2FFvw%2BUPpPx2lJpW5ItOa8HYRBOozNs8zip4B%2BBx6pVLZVlsZ7qpdMROzmTMLmhBxxJadje%2F4dTUcWjVEDksS%2FBm%2BabNfpZWQTtDmnBXptexDNZpBXYTQTFv1HaHwARaWIWe4bpedt%2F7hZanrFHgetun7%2FC3q%2BxMA0frzK%2BU%2BJB8VLz8IKBFZEIZthSkMjTR1LlB7Dr75tLShwj71o3u4Orc2Do60SgFgUvW9o5g0tCNgtVHlzfmOrz8TTjvvpZvFvUTQaVM%2FFJODJ6A8cPTlUj0pyn8CnTIJsoDQWbD9z829mOhhPXSPRhi1d9DiBrJzBJDc8LJcw%2BpKGvgY6pgFv3edKVGtk8vL%2FCay8KHpZly1hdaKrbPsWDuvoYCX3uvwMbCblP6IqffGESA7QsGkAYroyaas6uXwFWmvdynowbBdkJQE%2Fg2iPuttN8lQdynYktp3ZRROqi%2FLMJLZLIMiteOaOTnaNn6l06TMHdaaP4YM8aPjKLW3qxcymzsEeH0Q0wWofbp4HXhLEC%2Flcoe%2F6qAq2gfQIoEuLJVJWDAcED3RjW%2FpT&X-Amz-Signature=41308796928f41bdcfdd1aafbfab121625885332b9adae2d27f790220cbb168f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIW54HW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDOwXTLbfwA%2B2ZmZ3n%2BCG6Qiamwq2vHo8hZFSOEIdSHGAiA2%2BK6W%2FtCDTeWq9J%2B8uvGMN9iB6%2FEWgc8TWMVKMec6ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm53R7mV0i1N7GKpiKtwDtlydIQUcKC%2FqHyM12lE67NZ6Cb9SandTHQKGTkUkfqumodc6HybRP3NR08XaGgNo%2F%2BAg4bYUDZ6LmxPLWM1lCRo70SBt8XlGxlxu%2B4XjyCC3vhBnNiiix0lpzGRYbmDlVZR8rWqknrIoH33cuaf4BPORhaTbQ64WqlwRGhGVCknF9wnf9qOXs0tp7nBak%2Fcpmwr%2Fd6Tb%2FHV3QBMo3u44wtUyXrk%2Fy0czNQFAnPo%2FZgXmtgSok7aVUDncvQUT7Tfvu7BcTzOfuESnMHgPLy%2FTu6Qsx6FMmxsQCDlTWG0CPCx6oFTEROZ%2FFvw%2BUPpPx2lJpW5ItOa8HYRBOozNs8zip4B%2BBx6pVLZVlsZ7qpdMROzmTMLmhBxxJadje%2F4dTUcWjVEDksS%2FBm%2BabNfpZWQTtDmnBXptexDNZpBXYTQTFv1HaHwARaWIWe4bpedt%2F7hZanrFHgetun7%2FC3q%2BxMA0frzK%2BU%2BJB8VLz8IKBFZEIZthSkMjTR1LlB7Dr75tLShwj71o3u4Orc2Do60SgFgUvW9o5g0tCNgtVHlzfmOrz8TTjvvpZvFvUTQaVM%2FFJODJ6A8cPTlUj0pyn8CnTIJsoDQWbD9z829mOhhPXSPRhi1d9DiBrJzBJDc8LJcw%2BpKGvgY6pgFv3edKVGtk8vL%2FCay8KHpZly1hdaKrbPsWDuvoYCX3uvwMbCblP6IqffGESA7QsGkAYroyaas6uXwFWmvdynowbBdkJQE%2Fg2iPuttN8lQdynYktp3ZRROqi%2FLMJLZLIMiteOaOTnaNn6l06TMHdaaP4YM8aPjKLW3qxcymzsEeH0Q0wWofbp4HXhLEC%2Flcoe%2F6qAq2gfQIoEuLJVJWDAcED3RjW%2FpT&X-Amz-Signature=eaa1c0f0119f5d87f7f8be7b4f282d1029e744d40bdd190b466efcf833052b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIW54HW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDOwXTLbfwA%2B2ZmZ3n%2BCG6Qiamwq2vHo8hZFSOEIdSHGAiA2%2BK6W%2FtCDTeWq9J%2B8uvGMN9iB6%2FEWgc8TWMVKMec6ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm53R7mV0i1N7GKpiKtwDtlydIQUcKC%2FqHyM12lE67NZ6Cb9SandTHQKGTkUkfqumodc6HybRP3NR08XaGgNo%2F%2BAg4bYUDZ6LmxPLWM1lCRo70SBt8XlGxlxu%2B4XjyCC3vhBnNiiix0lpzGRYbmDlVZR8rWqknrIoH33cuaf4BPORhaTbQ64WqlwRGhGVCknF9wnf9qOXs0tp7nBak%2Fcpmwr%2Fd6Tb%2FHV3QBMo3u44wtUyXrk%2Fy0czNQFAnPo%2FZgXmtgSok7aVUDncvQUT7Tfvu7BcTzOfuESnMHgPLy%2FTu6Qsx6FMmxsQCDlTWG0CPCx6oFTEROZ%2FFvw%2BUPpPx2lJpW5ItOa8HYRBOozNs8zip4B%2BBx6pVLZVlsZ7qpdMROzmTMLmhBxxJadje%2F4dTUcWjVEDksS%2FBm%2BabNfpZWQTtDmnBXptexDNZpBXYTQTFv1HaHwARaWIWe4bpedt%2F7hZanrFHgetun7%2FC3q%2BxMA0frzK%2BU%2BJB8VLz8IKBFZEIZthSkMjTR1LlB7Dr75tLShwj71o3u4Orc2Do60SgFgUvW9o5g0tCNgtVHlzfmOrz8TTjvvpZvFvUTQaVM%2FFJODJ6A8cPTlUj0pyn8CnTIJsoDQWbD9z829mOhhPXSPRhi1d9DiBrJzBJDc8LJcw%2BpKGvgY6pgFv3edKVGtk8vL%2FCay8KHpZly1hdaKrbPsWDuvoYCX3uvwMbCblP6IqffGESA7QsGkAYroyaas6uXwFWmvdynowbBdkJQE%2Fg2iPuttN8lQdynYktp3ZRROqi%2FLMJLZLIMiteOaOTnaNn6l06TMHdaaP4YM8aPjKLW3qxcymzsEeH0Q0wWofbp4HXhLEC%2Flcoe%2F6qAq2gfQIoEuLJVJWDAcED3RjW%2FpT&X-Amz-Signature=c28790f96993404ba17784ee97d0de80376e675dabfc7d3a0deb146b5dc43d93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
