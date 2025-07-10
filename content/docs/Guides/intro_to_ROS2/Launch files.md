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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V747WSLG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDmPMmZ5wBAQ%2BOpiQHvkB8IzrycEVSL45PwBYcADFQAiEA49m%2B4%2BOyvMHSAppBt9dr3HNyqE5GYnIYEmQxtfST5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHF19e4OmJZ2ZGMrCircA%2FADgss6Pr9ivBtqP%2FPXU%2FKNNuHucV7YiB1TeIhlwQBHHbjE9SJ4n72RYEviZ84thZnzqZ60S8PvgNbJnn2LQddjDmUlJjTA3xkUewsN28pdj4IAucTwDDb1777f6O3YGVe9WhcCINglFU2cbDlnq7wJz%2FnsF6TNR%2Bpu1Lj5YGnrr%2Fi1BVagtqurVt85ya3VEMrU6oX0HLEiUsTZF0ciMXMy7i0th4MVKAd3wY2F50fEmOmergOSFjvBGtOEeOesL7gLq1bVSSAvk7e217yiXbAWw8YaOk%2B41vc2EMyIkFdByn551RTTVCvIDga4xiWtzKwjxa9bGgrDHmc5dltZG23RZslTeCplxRzX2Lqs%2BUZ8Pw69lSnRvkA8e3vd99Wp0cCB7szTAfocu8UIfG1tYIQAdIPT5r2LQh2HR9PudVpws0PK1NctIvq8UobRfid%2B29nI%2BvO44ke4iVJYSkt8LQJtQNXClM%2BkvtccetsH%2Fm6mPPFr%2FsmRB2arN6kpUgKtYSo6zFu%2B8VZmMsBbk%2FEnkOMp2jXpx6OV7Nwt9p%2BwduX%2FzxMPRB%2BUzaAx%2BUmdQlfo4JagIA57WhYGcEEpcfrEwhdRzFgAHObc%2BtyTteL7aBjhWKyEvnr%2B7tf7Ch3bMIqpvcMGOqUBOR3QBv%2BQA275tRFi5A0PwxjY1BdeOEuGCRblDjB6aiZrp4oI5kxQXvR2yx%2BX58APwXkIfx%2Fnj31%2BUDG5Ajfku4FvAtV32TLHhWX9c0j%2F7%2BlRFWYOL3TxtTBhv2iMqzRWFlK9nAwGICDYlTZBCXWzr3s9iIRGHa%2BV%2Fc0y2xTuFh5olGe2eKmTpxKKsHbMXKiLwuU7cSBirY%2FvKqfjF9n814zCzpjg&X-Amz-Signature=2ad631d1d57105043f7c61a24be0ea5301e0f93710dc838908fa972f4aed2819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V747WSLG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDmPMmZ5wBAQ%2BOpiQHvkB8IzrycEVSL45PwBYcADFQAiEA49m%2B4%2BOyvMHSAppBt9dr3HNyqE5GYnIYEmQxtfST5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHF19e4OmJZ2ZGMrCircA%2FADgss6Pr9ivBtqP%2FPXU%2FKNNuHucV7YiB1TeIhlwQBHHbjE9SJ4n72RYEviZ84thZnzqZ60S8PvgNbJnn2LQddjDmUlJjTA3xkUewsN28pdj4IAucTwDDb1777f6O3YGVe9WhcCINglFU2cbDlnq7wJz%2FnsF6TNR%2Bpu1Lj5YGnrr%2Fi1BVagtqurVt85ya3VEMrU6oX0HLEiUsTZF0ciMXMy7i0th4MVKAd3wY2F50fEmOmergOSFjvBGtOEeOesL7gLq1bVSSAvk7e217yiXbAWw8YaOk%2B41vc2EMyIkFdByn551RTTVCvIDga4xiWtzKwjxa9bGgrDHmc5dltZG23RZslTeCplxRzX2Lqs%2BUZ8Pw69lSnRvkA8e3vd99Wp0cCB7szTAfocu8UIfG1tYIQAdIPT5r2LQh2HR9PudVpws0PK1NctIvq8UobRfid%2B29nI%2BvO44ke4iVJYSkt8LQJtQNXClM%2BkvtccetsH%2Fm6mPPFr%2FsmRB2arN6kpUgKtYSo6zFu%2B8VZmMsBbk%2FEnkOMp2jXpx6OV7Nwt9p%2BwduX%2FzxMPRB%2BUzaAx%2BUmdQlfo4JagIA57WhYGcEEpcfrEwhdRzFgAHObc%2BtyTteL7aBjhWKyEvnr%2B7tf7Ch3bMIqpvcMGOqUBOR3QBv%2BQA275tRFi5A0PwxjY1BdeOEuGCRblDjB6aiZrp4oI5kxQXvR2yx%2BX58APwXkIfx%2Fnj31%2BUDG5Ajfku4FvAtV32TLHhWX9c0j%2F7%2BlRFWYOL3TxtTBhv2iMqzRWFlK9nAwGICDYlTZBCXWzr3s9iIRGHa%2BV%2Fc0y2xTuFh5olGe2eKmTpxKKsHbMXKiLwuU7cSBirY%2FvKqfjF9n814zCzpjg&X-Amz-Signature=fa5281859a104b9e6d4254e8ca3ac631223e99c4fc7fb39f6c01a87d7af73bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V747WSLG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDmPMmZ5wBAQ%2BOpiQHvkB8IzrycEVSL45PwBYcADFQAiEA49m%2B4%2BOyvMHSAppBt9dr3HNyqE5GYnIYEmQxtfST5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHF19e4OmJZ2ZGMrCircA%2FADgss6Pr9ivBtqP%2FPXU%2FKNNuHucV7YiB1TeIhlwQBHHbjE9SJ4n72RYEviZ84thZnzqZ60S8PvgNbJnn2LQddjDmUlJjTA3xkUewsN28pdj4IAucTwDDb1777f6O3YGVe9WhcCINglFU2cbDlnq7wJz%2FnsF6TNR%2Bpu1Lj5YGnrr%2Fi1BVagtqurVt85ya3VEMrU6oX0HLEiUsTZF0ciMXMy7i0th4MVKAd3wY2F50fEmOmergOSFjvBGtOEeOesL7gLq1bVSSAvk7e217yiXbAWw8YaOk%2B41vc2EMyIkFdByn551RTTVCvIDga4xiWtzKwjxa9bGgrDHmc5dltZG23RZslTeCplxRzX2Lqs%2BUZ8Pw69lSnRvkA8e3vd99Wp0cCB7szTAfocu8UIfG1tYIQAdIPT5r2LQh2HR9PudVpws0PK1NctIvq8UobRfid%2B29nI%2BvO44ke4iVJYSkt8LQJtQNXClM%2BkvtccetsH%2Fm6mPPFr%2FsmRB2arN6kpUgKtYSo6zFu%2B8VZmMsBbk%2FEnkOMp2jXpx6OV7Nwt9p%2BwduX%2FzxMPRB%2BUzaAx%2BUmdQlfo4JagIA57WhYGcEEpcfrEwhdRzFgAHObc%2BtyTteL7aBjhWKyEvnr%2B7tf7Ch3bMIqpvcMGOqUBOR3QBv%2BQA275tRFi5A0PwxjY1BdeOEuGCRblDjB6aiZrp4oI5kxQXvR2yx%2BX58APwXkIfx%2Fnj31%2BUDG5Ajfku4FvAtV32TLHhWX9c0j%2F7%2BlRFWYOL3TxtTBhv2iMqzRWFlK9nAwGICDYlTZBCXWzr3s9iIRGHa%2BV%2Fc0y2xTuFh5olGe2eKmTpxKKsHbMXKiLwuU7cSBirY%2FvKqfjF9n814zCzpjg&X-Amz-Signature=6ad1140b77cac2bff4192f3d10e2281876aa075f69e8bc3b2455153c6b19bc15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
