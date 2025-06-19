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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIEG3CU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmVtVNM86QOaJP1kLO61wP8yedl%2FmtP31Grla5AnSwZwIhAPryjOS63awKpDpYKYYn%2B21bKEYPZHB%2BkvghKqPAuSoAKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5vJdBDTqtrOJ%2F3mgq3ANEAV37vjihgDBvsUkjMMtOsxHIVVvYamN0eL1wCCmYIgUkMKhj97bllbDATue%2BEVirphAIUrBnDAuWufI25tQ3svO9bzPhXsDf7G%2BwLxJMSqxSMWrhObBo08MAbnVhj2Lz1ECPzu4IfUtTRqoMjx1iEckeMp0%2BvZd2yDdXDQYsIjAgB3aSfT0rAlta88I4652XGAdURG%2BQoCmZQ%2Bwbchnc6dDlPbyunyGI4%2FXr8z3rGqVBdAPYlLxH8CRexC6Ms0Y0Jo7ZMutlEK%2FhOw3ktES89MBOhA2t0NFI43S87oyWq6h68RdNzqcIU5QOWSl7ywOUkl5I%2FEEeoRZj03uV0WRkoHxookN%2FyLStVy%2FSoKKQwaemc1hewI%2BFe0IBIqJkU0WWs8mzN3LoKCVxKRbvsNzIXzSwBXoh7mQCnlS%2B86yUtmgwxD8NRytwc1oKV25gGXkihM5gH4jpEKAhmVXsuOes2cgoO4G%2BWVtn2gCN0%2Fyli5CRtaNO2XcMJ3efv%2FxHQdZmfJ1e2yvcsfIaK22ApZmd%2Bx%2Bp8hVUH2hRYy%2ByR7LswXn5R18zKdzxhhsgdnLVoJ%2FtOKE76BioEmJzVpbb03J8XpWQpJZZqafJNJj8jr%2BeuqztHHTFtbudRuUgZjDk0c%2FCBjqkAaeYNhoihO7mn7xVtsMAiVkjXCjdhPnbE%2FY%2Be97Fb0QVwcIvc7cx4gmLozw2KmttfZLtqGznqDDvLwpBPVuQiIGLqlTz6cw2IzjjcJODwMzWp5wgS3ONmD7Xn%2B8HeXMRtt3ITPIAkYE5xiWYfyWCs99mcuneHKAk0Kf21fl%2Fd4V2gZo%2FA5F1Mix9%2BRpQqHieX3BY%2FFXfj1vkJOKM6NiMae76UATA&X-Amz-Signature=b1e949aaf69471a2da5f5ade9e5d9d33a64f1cfd791fda8adcf6c8e1b8234f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIEG3CU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmVtVNM86QOaJP1kLO61wP8yedl%2FmtP31Grla5AnSwZwIhAPryjOS63awKpDpYKYYn%2B21bKEYPZHB%2BkvghKqPAuSoAKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5vJdBDTqtrOJ%2F3mgq3ANEAV37vjihgDBvsUkjMMtOsxHIVVvYamN0eL1wCCmYIgUkMKhj97bllbDATue%2BEVirphAIUrBnDAuWufI25tQ3svO9bzPhXsDf7G%2BwLxJMSqxSMWrhObBo08MAbnVhj2Lz1ECPzu4IfUtTRqoMjx1iEckeMp0%2BvZd2yDdXDQYsIjAgB3aSfT0rAlta88I4652XGAdURG%2BQoCmZQ%2Bwbchnc6dDlPbyunyGI4%2FXr8z3rGqVBdAPYlLxH8CRexC6Ms0Y0Jo7ZMutlEK%2FhOw3ktES89MBOhA2t0NFI43S87oyWq6h68RdNzqcIU5QOWSl7ywOUkl5I%2FEEeoRZj03uV0WRkoHxookN%2FyLStVy%2FSoKKQwaemc1hewI%2BFe0IBIqJkU0WWs8mzN3LoKCVxKRbvsNzIXzSwBXoh7mQCnlS%2B86yUtmgwxD8NRytwc1oKV25gGXkihM5gH4jpEKAhmVXsuOes2cgoO4G%2BWVtn2gCN0%2Fyli5CRtaNO2XcMJ3efv%2FxHQdZmfJ1e2yvcsfIaK22ApZmd%2Bx%2Bp8hVUH2hRYy%2ByR7LswXn5R18zKdzxhhsgdnLVoJ%2FtOKE76BioEmJzVpbb03J8XpWQpJZZqafJNJj8jr%2BeuqztHHTFtbudRuUgZjDk0c%2FCBjqkAaeYNhoihO7mn7xVtsMAiVkjXCjdhPnbE%2FY%2Be97Fb0QVwcIvc7cx4gmLozw2KmttfZLtqGznqDDvLwpBPVuQiIGLqlTz6cw2IzjjcJODwMzWp5wgS3ONmD7Xn%2B8HeXMRtt3ITPIAkYE5xiWYfyWCs99mcuneHKAk0Kf21fl%2Fd4V2gZo%2FA5F1Mix9%2BRpQqHieX3BY%2FFXfj1vkJOKM6NiMae76UATA&X-Amz-Signature=dcabba8d3605e6dc4ee3b5452cd3e26ffe5c2283806fa31d6f800b34a7596cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIEG3CU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmVtVNM86QOaJP1kLO61wP8yedl%2FmtP31Grla5AnSwZwIhAPryjOS63awKpDpYKYYn%2B21bKEYPZHB%2BkvghKqPAuSoAKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5vJdBDTqtrOJ%2F3mgq3ANEAV37vjihgDBvsUkjMMtOsxHIVVvYamN0eL1wCCmYIgUkMKhj97bllbDATue%2BEVirphAIUrBnDAuWufI25tQ3svO9bzPhXsDf7G%2BwLxJMSqxSMWrhObBo08MAbnVhj2Lz1ECPzu4IfUtTRqoMjx1iEckeMp0%2BvZd2yDdXDQYsIjAgB3aSfT0rAlta88I4652XGAdURG%2BQoCmZQ%2Bwbchnc6dDlPbyunyGI4%2FXr8z3rGqVBdAPYlLxH8CRexC6Ms0Y0Jo7ZMutlEK%2FhOw3ktES89MBOhA2t0NFI43S87oyWq6h68RdNzqcIU5QOWSl7ywOUkl5I%2FEEeoRZj03uV0WRkoHxookN%2FyLStVy%2FSoKKQwaemc1hewI%2BFe0IBIqJkU0WWs8mzN3LoKCVxKRbvsNzIXzSwBXoh7mQCnlS%2B86yUtmgwxD8NRytwc1oKV25gGXkihM5gH4jpEKAhmVXsuOes2cgoO4G%2BWVtn2gCN0%2Fyli5CRtaNO2XcMJ3efv%2FxHQdZmfJ1e2yvcsfIaK22ApZmd%2Bx%2Bp8hVUH2hRYy%2ByR7LswXn5R18zKdzxhhsgdnLVoJ%2FtOKE76BioEmJzVpbb03J8XpWQpJZZqafJNJj8jr%2BeuqztHHTFtbudRuUgZjDk0c%2FCBjqkAaeYNhoihO7mn7xVtsMAiVkjXCjdhPnbE%2FY%2Be97Fb0QVwcIvc7cx4gmLozw2KmttfZLtqGznqDDvLwpBPVuQiIGLqlTz6cw2IzjjcJODwMzWp5wgS3ONmD7Xn%2B8HeXMRtt3ITPIAkYE5xiWYfyWCs99mcuneHKAk0Kf21fl%2Fd4V2gZo%2FA5F1Mix9%2BRpQqHieX3BY%2FFXfj1vkJOKM6NiMae76UATA&X-Amz-Signature=c97d8f33ae879584870d9f4f6b8c5e40292668494d5150d98ddf7833398ed8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
