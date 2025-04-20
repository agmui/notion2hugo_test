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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUJDN7P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDTeeeuuMSpyBO9Qp8yfSPpAZxqoDlBTAfDqf3akBdFIgIgeIrmdkTFgDGiluJN6c16Jub0%2FLVRWn7C%2FYGUyGhPGD8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmdFzXkNnKlCAF7zSrcA8F2Hoq6Bd5hJ6J8AAqYk%2FgTPa3536KiG6RIUwCAHfnv0ZN9%2FvwfePPRUT%2F8L1cW77DQtdikm1OO0l%2BdWzOuq4peIcA37daDjWVGJ2iXX3W3bAmDRTkJk75iaZYHCwNmOS6BQa0Dnbm056NF4JUqMcVugWxHmIgmTLv6NCrBPmQVLkhyPHoSsL8B1g0dcNP0uzD%2FlL%2FOlOVrndjhSBcmieb4sxl%2BPz%2FNPbyE7nH%2Fy6qYCY7SfFjCFgIq5ZChHSAuwyGvsmlxzXlaqjbF1lq9Vigz%2F9CWt3nkJnGPATlF6ZLySGTdxQTRc4wxJSpH3TrySBbesUhlSLe3HFln4CsCmBYIErqjjDnDCQcFHzdrpu%2FVSx24AlsLoclLlFJA5khIov5%2FGFsUhLEb5CVKvOHJmhkVFL5gjMEX1CCEBdp967p0j%2BhFmOkIdxmzfaEchM2OnHSbhP0G7hxM6109tzE5yGHX8UvPekj9gNjZTQlxwpTFWSWJ4uBDliPNOoA9GOOa6HlkDy7OGvObJcvNniiPE1lI1b5KwNMqEf9DLZvzozunXeth%2B%2BBPWxYuL8RW4NRG71h5lmuZQ8VvBFw7c%2B9SoOyYTS26lQJTTWr1fuCdZTM2fe%2Bi8YG4GpL0u2lyMJDElMAGOqUBeVjcmkai5DHxGf%2FAMwm1dj15JyI9zXVNiC5E3zXVZZkwtd3933c3UWcPERjNpaIUhU6IIZyWXUzSyuzYzUgTrFEssHrj%2FW%2Fit8oXtQvWzu05kX7uDwvR9qMg47unqZH1pDPO0%2F%2FwF1rWWBU46fMervv7PcXjKQ4%2FYmhgvVQz4DW%2BecvH5rBg648Fkn3cjOthrxz2gC0j3lzpX6X2I8kSTOat5PUx&X-Amz-Signature=8e4c9203717dfc0b5bf82fd6be385f070ecb352bddd741d1c8b29a2ddb75b860&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUJDN7P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDTeeeuuMSpyBO9Qp8yfSPpAZxqoDlBTAfDqf3akBdFIgIgeIrmdkTFgDGiluJN6c16Jub0%2FLVRWn7C%2FYGUyGhPGD8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmdFzXkNnKlCAF7zSrcA8F2Hoq6Bd5hJ6J8AAqYk%2FgTPa3536KiG6RIUwCAHfnv0ZN9%2FvwfePPRUT%2F8L1cW77DQtdikm1OO0l%2BdWzOuq4peIcA37daDjWVGJ2iXX3W3bAmDRTkJk75iaZYHCwNmOS6BQa0Dnbm056NF4JUqMcVugWxHmIgmTLv6NCrBPmQVLkhyPHoSsL8B1g0dcNP0uzD%2FlL%2FOlOVrndjhSBcmieb4sxl%2BPz%2FNPbyE7nH%2Fy6qYCY7SfFjCFgIq5ZChHSAuwyGvsmlxzXlaqjbF1lq9Vigz%2F9CWt3nkJnGPATlF6ZLySGTdxQTRc4wxJSpH3TrySBbesUhlSLe3HFln4CsCmBYIErqjjDnDCQcFHzdrpu%2FVSx24AlsLoclLlFJA5khIov5%2FGFsUhLEb5CVKvOHJmhkVFL5gjMEX1CCEBdp967p0j%2BhFmOkIdxmzfaEchM2OnHSbhP0G7hxM6109tzE5yGHX8UvPekj9gNjZTQlxwpTFWSWJ4uBDliPNOoA9GOOa6HlkDy7OGvObJcvNniiPE1lI1b5KwNMqEf9DLZvzozunXeth%2B%2BBPWxYuL8RW4NRG71h5lmuZQ8VvBFw7c%2B9SoOyYTS26lQJTTWr1fuCdZTM2fe%2Bi8YG4GpL0u2lyMJDElMAGOqUBeVjcmkai5DHxGf%2FAMwm1dj15JyI9zXVNiC5E3zXVZZkwtd3933c3UWcPERjNpaIUhU6IIZyWXUzSyuzYzUgTrFEssHrj%2FW%2Fit8oXtQvWzu05kX7uDwvR9qMg47unqZH1pDPO0%2F%2FwF1rWWBU46fMervv7PcXjKQ4%2FYmhgvVQz4DW%2BecvH5rBg648Fkn3cjOthrxz2gC0j3lzpX6X2I8kSTOat5PUx&X-Amz-Signature=18ab1396a932fd99117b3c0b8628bc27faadd87a65ab05c9484f20149fb415eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUJDN7P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDTeeeuuMSpyBO9Qp8yfSPpAZxqoDlBTAfDqf3akBdFIgIgeIrmdkTFgDGiluJN6c16Jub0%2FLVRWn7C%2FYGUyGhPGD8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmdFzXkNnKlCAF7zSrcA8F2Hoq6Bd5hJ6J8AAqYk%2FgTPa3536KiG6RIUwCAHfnv0ZN9%2FvwfePPRUT%2F8L1cW77DQtdikm1OO0l%2BdWzOuq4peIcA37daDjWVGJ2iXX3W3bAmDRTkJk75iaZYHCwNmOS6BQa0Dnbm056NF4JUqMcVugWxHmIgmTLv6NCrBPmQVLkhyPHoSsL8B1g0dcNP0uzD%2FlL%2FOlOVrndjhSBcmieb4sxl%2BPz%2FNPbyE7nH%2Fy6qYCY7SfFjCFgIq5ZChHSAuwyGvsmlxzXlaqjbF1lq9Vigz%2F9CWt3nkJnGPATlF6ZLySGTdxQTRc4wxJSpH3TrySBbesUhlSLe3HFln4CsCmBYIErqjjDnDCQcFHzdrpu%2FVSx24AlsLoclLlFJA5khIov5%2FGFsUhLEb5CVKvOHJmhkVFL5gjMEX1CCEBdp967p0j%2BhFmOkIdxmzfaEchM2OnHSbhP0G7hxM6109tzE5yGHX8UvPekj9gNjZTQlxwpTFWSWJ4uBDliPNOoA9GOOa6HlkDy7OGvObJcvNniiPE1lI1b5KwNMqEf9DLZvzozunXeth%2B%2BBPWxYuL8RW4NRG71h5lmuZQ8VvBFw7c%2B9SoOyYTS26lQJTTWr1fuCdZTM2fe%2Bi8YG4GpL0u2lyMJDElMAGOqUBeVjcmkai5DHxGf%2FAMwm1dj15JyI9zXVNiC5E3zXVZZkwtd3933c3UWcPERjNpaIUhU6IIZyWXUzSyuzYzUgTrFEssHrj%2FW%2Fit8oXtQvWzu05kX7uDwvR9qMg47unqZH1pDPO0%2F%2FwF1rWWBU46fMervv7PcXjKQ4%2FYmhgvVQz4DW%2BecvH5rBg648Fkn3cjOthrxz2gC0j3lzpX6X2I8kSTOat5PUx&X-Amz-Signature=329a50310b34a53588578e9e5e8ba6df3a1c3ee75484d04d182138847c268beb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
