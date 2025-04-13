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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPKLVEA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIF%2BjytMHP1YnuFJRc%2FfnqxpbTcOQJ2W4RvIifuoFEA%2F%2BAiEA7L149GNn3T81sUzXfIuhAPS%2FnHROfwq8KH0bIG9hP8EqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImGuWqIlYF7YlftsircA1eAwgMfux3z9Zus5%2FpsdvAsGuMuSRSmgmP9iuXqE4hsMRyqqrTggrBhxXHyyj0y4RLXV%2B83IZncaS28abrzOk0DpSHw9RtfEPtRg9Dypkzus%2F%2BLM2nMOqw1wmsDSo8YylfidpY1K0GTxDd4%2FD9vIydcpPUfS8Q73rMVqIeXMYaqnsRFe2bKbrVbGcgPwHji%2FUJ4GeEnZrZJpQ0m4pOnl2oWVNxv3ppX%2BW7rwqjEwl7tfZMiyQ65M2PQjDtjxjjpVXKRyoa8Mo2%2FrV7n8e%2FaNqIQlK9Wc6lkkl%2B8BibTICJw2i7KV2GqoyLLBztPFBHYCQKvimsBps%2B%2FRodWCJts0dpo72tYnjIEpd%2BvTkhqS1CCTbd16u%2B4kiGlwePqY9E1pn91P%2ByeSgIB1NnwBUFx47BMV3DCTM1IVpracPCERnPcwTuxhllJoj0vMOYjKYqgHf8zwYXE069YXkxJJh9zNQlUTPaJpp8Q%2B47U4mCIVvhi%2F0PKOEHPJbKDzY5xvRogfoedvHWnkw0oZBhTbknbB%2BppBVebMO1wav81s1TDguHtDzJuc8dVCAmdTl%2BWewViSsRPCRPL6pW8e1uHTT%2BU17282TE1kMI3IuSKz%2BRtNQQuqg3WOtPlz54OLUrUMOKv8L8GOqUBAYwRgvefjO1p%2BQ75M33bysurYDkcWV4gKXxBNnIn1BJHijv7YRhH1%2FpyUcEkdKoz4Uti4tPpA1aFNLnh3XMklxN0cPQ0LnzACM6aYlreai%2BFy%2FYqYxHxfTnERaDkiTq77J1yg2xDH%2FBnD3S2nCm5pO6G6ZdhJV0aLHVNsgEcftg7kGGUZXy5LpbK3byxFgHzeipH9ewpMJHpsfyb8omc7N23p0Bz&X-Amz-Signature=a0b970846721a6edf05b7a1251d01412bf59f3f03ebce5bbf96b23145de75e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPKLVEA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIF%2BjytMHP1YnuFJRc%2FfnqxpbTcOQJ2W4RvIifuoFEA%2F%2BAiEA7L149GNn3T81sUzXfIuhAPS%2FnHROfwq8KH0bIG9hP8EqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImGuWqIlYF7YlftsircA1eAwgMfux3z9Zus5%2FpsdvAsGuMuSRSmgmP9iuXqE4hsMRyqqrTggrBhxXHyyj0y4RLXV%2B83IZncaS28abrzOk0DpSHw9RtfEPtRg9Dypkzus%2F%2BLM2nMOqw1wmsDSo8YylfidpY1K0GTxDd4%2FD9vIydcpPUfS8Q73rMVqIeXMYaqnsRFe2bKbrVbGcgPwHji%2FUJ4GeEnZrZJpQ0m4pOnl2oWVNxv3ppX%2BW7rwqjEwl7tfZMiyQ65M2PQjDtjxjjpVXKRyoa8Mo2%2FrV7n8e%2FaNqIQlK9Wc6lkkl%2B8BibTICJw2i7KV2GqoyLLBztPFBHYCQKvimsBps%2B%2FRodWCJts0dpo72tYnjIEpd%2BvTkhqS1CCTbd16u%2B4kiGlwePqY9E1pn91P%2ByeSgIB1NnwBUFx47BMV3DCTM1IVpracPCERnPcwTuxhllJoj0vMOYjKYqgHf8zwYXE069YXkxJJh9zNQlUTPaJpp8Q%2B47U4mCIVvhi%2F0PKOEHPJbKDzY5xvRogfoedvHWnkw0oZBhTbknbB%2BppBVebMO1wav81s1TDguHtDzJuc8dVCAmdTl%2BWewViSsRPCRPL6pW8e1uHTT%2BU17282TE1kMI3IuSKz%2BRtNQQuqg3WOtPlz54OLUrUMOKv8L8GOqUBAYwRgvefjO1p%2BQ75M33bysurYDkcWV4gKXxBNnIn1BJHijv7YRhH1%2FpyUcEkdKoz4Uti4tPpA1aFNLnh3XMklxN0cPQ0LnzACM6aYlreai%2BFy%2FYqYxHxfTnERaDkiTq77J1yg2xDH%2FBnD3S2nCm5pO6G6ZdhJV0aLHVNsgEcftg7kGGUZXy5LpbK3byxFgHzeipH9ewpMJHpsfyb8omc7N23p0Bz&X-Amz-Signature=8b6b6d3de008959ba14a896bfe9c556a5cb7dcccf20cb236f6f0d688bd397569&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPKLVEA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIF%2BjytMHP1YnuFJRc%2FfnqxpbTcOQJ2W4RvIifuoFEA%2F%2BAiEA7L149GNn3T81sUzXfIuhAPS%2FnHROfwq8KH0bIG9hP8EqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImGuWqIlYF7YlftsircA1eAwgMfux3z9Zus5%2FpsdvAsGuMuSRSmgmP9iuXqE4hsMRyqqrTggrBhxXHyyj0y4RLXV%2B83IZncaS28abrzOk0DpSHw9RtfEPtRg9Dypkzus%2F%2BLM2nMOqw1wmsDSo8YylfidpY1K0GTxDd4%2FD9vIydcpPUfS8Q73rMVqIeXMYaqnsRFe2bKbrVbGcgPwHji%2FUJ4GeEnZrZJpQ0m4pOnl2oWVNxv3ppX%2BW7rwqjEwl7tfZMiyQ65M2PQjDtjxjjpVXKRyoa8Mo2%2FrV7n8e%2FaNqIQlK9Wc6lkkl%2B8BibTICJw2i7KV2GqoyLLBztPFBHYCQKvimsBps%2B%2FRodWCJts0dpo72tYnjIEpd%2BvTkhqS1CCTbd16u%2B4kiGlwePqY9E1pn91P%2ByeSgIB1NnwBUFx47BMV3DCTM1IVpracPCERnPcwTuxhllJoj0vMOYjKYqgHf8zwYXE069YXkxJJh9zNQlUTPaJpp8Q%2B47U4mCIVvhi%2F0PKOEHPJbKDzY5xvRogfoedvHWnkw0oZBhTbknbB%2BppBVebMO1wav81s1TDguHtDzJuc8dVCAmdTl%2BWewViSsRPCRPL6pW8e1uHTT%2BU17282TE1kMI3IuSKz%2BRtNQQuqg3WOtPlz54OLUrUMOKv8L8GOqUBAYwRgvefjO1p%2BQ75M33bysurYDkcWV4gKXxBNnIn1BJHijv7YRhH1%2FpyUcEkdKoz4Uti4tPpA1aFNLnh3XMklxN0cPQ0LnzACM6aYlreai%2BFy%2FYqYxHxfTnERaDkiTq77J1yg2xDH%2FBnD3S2nCm5pO6G6ZdhJV0aLHVNsgEcftg7kGGUZXy5LpbK3byxFgHzeipH9ewpMJHpsfyb8omc7N23p0Bz&X-Amz-Signature=8630e606874fe14df030c780f7b462a4ca1a4ca15efa7d65c9e38ceb456cd60b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
