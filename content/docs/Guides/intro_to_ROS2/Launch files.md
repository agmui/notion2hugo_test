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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTP5QXM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXx8E%2FErJ8XC%2BIRR9m2uBvEnRv8YS7M5lrUcVs33mJKAiAPerbPN39kKgsj6nnp7Rjx93Qy5iUaHV6f2KfUg3f2PiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZupkgSab2euhQZrQKtwD%2BIn0GeFL2UAU%2FZT%2Fr7Cu8KQ2IZB0FSFA506IN3tuR8D3Q24zg6yXyYz3UscarCJfJrGY33ffOWNL3AQsxp2k20sF5YRUClMjV6R0fm9mOW38OkG%2FQrijzsr3KqIbn4mHkmsHb0x0%2FVDroRfBSt5%2Bw5BIJkU7OJi53BsJUR5kuYtBI7H8%2Bd3P%2BreFP2SBcyQys37JSvt%2BVaaf92UoE8N3EHhp8sMm8SkStLr8fciZDgqhT0jhTBZDByTnbyUdynN3EknOfLB4IkE5%2FZ%2BMJBJQrfAzYhGtLhTzTQa6A6Fl22VHwEjAiL0i%2BX8qbmSkgd7dg9C8gOxOzTQBiPLnpmBgHCZAKftMrST8F%2BluB0cd73rtpa9QP2%2BI9he8Z8EKts6xhTVbPLMkZ%2FS7EIYLobv7lhcRH3kZHQcJoB6Ci3A9BIYsb0ZDu9IS2v%2BreNRet%2FsISGCDy%2Fqe1lBCoGccYvbsIld40eMyNMCAkfzZTHgqsLPnwtsKK1Ya%2BVoQhE9DkmK%2B1U3Ywm0nd0Xo%2BuUufvp%2B0Zm%2FcRGuJ38DwvnCS4q%2B2brn5BYcTlWh7oj8yOp5DcIRwX5CpmzVsRhMGrKRNdDIvqOpkbU1bm2G%2B%2BkdmCXS5FYuqwyhB03TpSAtgysw6K%2FYwgY6pgGwygg9qmPc%2FgNg5OE0qzDBRL7yGp6rVYVU5T9n%2BKwsfAQ0758%2Fz3cgRsZUapkjL42unkMZlcHO45F269A73KUxpw8hNBewv2QlIQPzB47dh%2BXh%2ByVjCTm8qWBt2zGokho2nIZp7ph%2BzMTLsafZIv%2FRabIkOkjAjFTQWY8Vo5QyAS2WyZMtwSM6Nktt9krFHRfGs0SFmWpUFg%2BxwAYHEvr5UB%2BWNcZR&X-Amz-Signature=43b2c57f3559816cd0809e459a53586e077c2a5d8c79fab1abf5464a94b825a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTP5QXM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXx8E%2FErJ8XC%2BIRR9m2uBvEnRv8YS7M5lrUcVs33mJKAiAPerbPN39kKgsj6nnp7Rjx93Qy5iUaHV6f2KfUg3f2PiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZupkgSab2euhQZrQKtwD%2BIn0GeFL2UAU%2FZT%2Fr7Cu8KQ2IZB0FSFA506IN3tuR8D3Q24zg6yXyYz3UscarCJfJrGY33ffOWNL3AQsxp2k20sF5YRUClMjV6R0fm9mOW38OkG%2FQrijzsr3KqIbn4mHkmsHb0x0%2FVDroRfBSt5%2Bw5BIJkU7OJi53BsJUR5kuYtBI7H8%2Bd3P%2BreFP2SBcyQys37JSvt%2BVaaf92UoE8N3EHhp8sMm8SkStLr8fciZDgqhT0jhTBZDByTnbyUdynN3EknOfLB4IkE5%2FZ%2BMJBJQrfAzYhGtLhTzTQa6A6Fl22VHwEjAiL0i%2BX8qbmSkgd7dg9C8gOxOzTQBiPLnpmBgHCZAKftMrST8F%2BluB0cd73rtpa9QP2%2BI9he8Z8EKts6xhTVbPLMkZ%2FS7EIYLobv7lhcRH3kZHQcJoB6Ci3A9BIYsb0ZDu9IS2v%2BreNRet%2FsISGCDy%2Fqe1lBCoGccYvbsIld40eMyNMCAkfzZTHgqsLPnwtsKK1Ya%2BVoQhE9DkmK%2B1U3Ywm0nd0Xo%2BuUufvp%2B0Zm%2FcRGuJ38DwvnCS4q%2B2brn5BYcTlWh7oj8yOp5DcIRwX5CpmzVsRhMGrKRNdDIvqOpkbU1bm2G%2B%2BkdmCXS5FYuqwyhB03TpSAtgysw6K%2FYwgY6pgGwygg9qmPc%2FgNg5OE0qzDBRL7yGp6rVYVU5T9n%2BKwsfAQ0758%2Fz3cgRsZUapkjL42unkMZlcHO45F269A73KUxpw8hNBewv2QlIQPzB47dh%2BXh%2ByVjCTm8qWBt2zGokho2nIZp7ph%2BzMTLsafZIv%2FRabIkOkjAjFTQWY8Vo5QyAS2WyZMtwSM6Nktt9krFHRfGs0SFmWpUFg%2BxwAYHEvr5UB%2BWNcZR&X-Amz-Signature=8f7719d58acb4f7679afde1a01c1acce0722497f1c721093b9612702d0df3e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTP5QXM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXx8E%2FErJ8XC%2BIRR9m2uBvEnRv8YS7M5lrUcVs33mJKAiAPerbPN39kKgsj6nnp7Rjx93Qy5iUaHV6f2KfUg3f2PiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZupkgSab2euhQZrQKtwD%2BIn0GeFL2UAU%2FZT%2Fr7Cu8KQ2IZB0FSFA506IN3tuR8D3Q24zg6yXyYz3UscarCJfJrGY33ffOWNL3AQsxp2k20sF5YRUClMjV6R0fm9mOW38OkG%2FQrijzsr3KqIbn4mHkmsHb0x0%2FVDroRfBSt5%2Bw5BIJkU7OJi53BsJUR5kuYtBI7H8%2Bd3P%2BreFP2SBcyQys37JSvt%2BVaaf92UoE8N3EHhp8sMm8SkStLr8fciZDgqhT0jhTBZDByTnbyUdynN3EknOfLB4IkE5%2FZ%2BMJBJQrfAzYhGtLhTzTQa6A6Fl22VHwEjAiL0i%2BX8qbmSkgd7dg9C8gOxOzTQBiPLnpmBgHCZAKftMrST8F%2BluB0cd73rtpa9QP2%2BI9he8Z8EKts6xhTVbPLMkZ%2FS7EIYLobv7lhcRH3kZHQcJoB6Ci3A9BIYsb0ZDu9IS2v%2BreNRet%2FsISGCDy%2Fqe1lBCoGccYvbsIld40eMyNMCAkfzZTHgqsLPnwtsKK1Ya%2BVoQhE9DkmK%2B1U3Ywm0nd0Xo%2BuUufvp%2B0Zm%2FcRGuJ38DwvnCS4q%2B2brn5BYcTlWh7oj8yOp5DcIRwX5CpmzVsRhMGrKRNdDIvqOpkbU1bm2G%2B%2BkdmCXS5FYuqwyhB03TpSAtgysw6K%2FYwgY6pgGwygg9qmPc%2FgNg5OE0qzDBRL7yGp6rVYVU5T9n%2BKwsfAQ0758%2Fz3cgRsZUapkjL42unkMZlcHO45F269A73KUxpw8hNBewv2QlIQPzB47dh%2BXh%2ByVjCTm8qWBt2zGokho2nIZp7ph%2BzMTLsafZIv%2FRabIkOkjAjFTQWY8Vo5QyAS2WyZMtwSM6Nktt9krFHRfGs0SFmWpUFg%2BxwAYHEvr5UB%2BWNcZR&X-Amz-Signature=de74cc163b5f2d3f00d52df7a11479564fd978c8e9d07867cbfb851919fa5c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
