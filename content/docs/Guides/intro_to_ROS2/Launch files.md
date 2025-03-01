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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUXWDDZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCHKEopb8wi6cgWuBlj3fLSyTU%2BD8P4GYeC9y67l2ROMAIgDyKuj1%2B9Mmxmww%2BXAD4D3zC%2BXw1D1AMHl0HPzuHf5GMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4Z2owKf4s%2B5Vc73yrcAx9DyG0JlC3yqFaXO4qxwnD9TUgAsMkP0uiFaOPf5pTDrGB9Fndt7rvRwOemZfUB1gLIudxtj3vP2sL%2F3v9advj%2FaGB5giX7En1rScB9IWKzDgGJpODkpNracD09p2iLrVrHteuAZWmkYFJvlJCxEFD4JcOY1RMVwHnOfQBd2ta48NLiweRYEA6%2FDGLvYQICpsXxuBw4TKHmXiE6aM48TNuq4yUNfLd1jVaKN2ywYFDq3r2HGt0pyXKhuzQwCnVJnk4aFsQ8LUuPmSQJsdZpTnCl4j4NDK2DdpQht7jVWCQyUhTFVDw5NOxyME45%2BIRguIL%2B%2Fs9v9%2BHb%2BeaPXhq1R8o2fLhnx6EXZgTmlIzhoo0MXYLo5boubwx6y9x2Q52e4LdvQ%2FUoP8896ZbA95hLjAdU913ttW%2BYku0Q%2ByAx49gapAf%2F64YnFLoyn5WClmWXf3hzJKeDnzFrdvOKYmlSBQ09iuH23BDI9nfUiab7N9wmk6ol%2FAKvvT4tYTWHl%2F8Y1Wr0jOoxStTDp3Ul8naTgnX2w5YGRqUB063W9uc%2Fg8y9x4XZw0Vh9tmNIhSgDrdf0%2Fz4qLO2iz5gqKYAXkURdg89WxgmVHZ4fhStdoj3jANfrFMuoZdBNo64gFgdMKOQir4GOqUBfBvscr%2B6SXdDL8ihL%2BNk55mxJXamNNutkXpjeMoYT%2FXK7qKXLjF9vBDmsAZ1nDwjA7vGI1Ndbyf7uM5HmH%2FIBuecJfnPPkYZjnfDLiF3eb9MA6BwZOHZ3ouPAutJv1W1fnKCoePgCLpdLvlv5wACaf%2F%2BqEMUyAec5XPy4Y7j38AchYm6OcrDSOclkMzLCCk1GrY5OmMf%2F54D%2FapX5qfdWr5gzUNJ&X-Amz-Signature=de683bc4bd1d86bae118e24890120e5dcaa18fa0bd794c92b9d38fecbd34d992&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUXWDDZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCHKEopb8wi6cgWuBlj3fLSyTU%2BD8P4GYeC9y67l2ROMAIgDyKuj1%2B9Mmxmww%2BXAD4D3zC%2BXw1D1AMHl0HPzuHf5GMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4Z2owKf4s%2B5Vc73yrcAx9DyG0JlC3yqFaXO4qxwnD9TUgAsMkP0uiFaOPf5pTDrGB9Fndt7rvRwOemZfUB1gLIudxtj3vP2sL%2F3v9advj%2FaGB5giX7En1rScB9IWKzDgGJpODkpNracD09p2iLrVrHteuAZWmkYFJvlJCxEFD4JcOY1RMVwHnOfQBd2ta48NLiweRYEA6%2FDGLvYQICpsXxuBw4TKHmXiE6aM48TNuq4yUNfLd1jVaKN2ywYFDq3r2HGt0pyXKhuzQwCnVJnk4aFsQ8LUuPmSQJsdZpTnCl4j4NDK2DdpQht7jVWCQyUhTFVDw5NOxyME45%2BIRguIL%2B%2Fs9v9%2BHb%2BeaPXhq1R8o2fLhnx6EXZgTmlIzhoo0MXYLo5boubwx6y9x2Q52e4LdvQ%2FUoP8896ZbA95hLjAdU913ttW%2BYku0Q%2ByAx49gapAf%2F64YnFLoyn5WClmWXf3hzJKeDnzFrdvOKYmlSBQ09iuH23BDI9nfUiab7N9wmk6ol%2FAKvvT4tYTWHl%2F8Y1Wr0jOoxStTDp3Ul8naTgnX2w5YGRqUB063W9uc%2Fg8y9x4XZw0Vh9tmNIhSgDrdf0%2Fz4qLO2iz5gqKYAXkURdg89WxgmVHZ4fhStdoj3jANfrFMuoZdBNo64gFgdMKOQir4GOqUBfBvscr%2B6SXdDL8ihL%2BNk55mxJXamNNutkXpjeMoYT%2FXK7qKXLjF9vBDmsAZ1nDwjA7vGI1Ndbyf7uM5HmH%2FIBuecJfnPPkYZjnfDLiF3eb9MA6BwZOHZ3ouPAutJv1W1fnKCoePgCLpdLvlv5wACaf%2F%2BqEMUyAec5XPy4Y7j38AchYm6OcrDSOclkMzLCCk1GrY5OmMf%2F54D%2FapX5qfdWr5gzUNJ&X-Amz-Signature=7f53e6e1cffba09adc3dac4ecef6775f01a38af8443e4f50219cf3331fe6553c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUXWDDZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCHKEopb8wi6cgWuBlj3fLSyTU%2BD8P4GYeC9y67l2ROMAIgDyKuj1%2B9Mmxmww%2BXAD4D3zC%2BXw1D1AMHl0HPzuHf5GMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4Z2owKf4s%2B5Vc73yrcAx9DyG0JlC3yqFaXO4qxwnD9TUgAsMkP0uiFaOPf5pTDrGB9Fndt7rvRwOemZfUB1gLIudxtj3vP2sL%2F3v9advj%2FaGB5giX7En1rScB9IWKzDgGJpODkpNracD09p2iLrVrHteuAZWmkYFJvlJCxEFD4JcOY1RMVwHnOfQBd2ta48NLiweRYEA6%2FDGLvYQICpsXxuBw4TKHmXiE6aM48TNuq4yUNfLd1jVaKN2ywYFDq3r2HGt0pyXKhuzQwCnVJnk4aFsQ8LUuPmSQJsdZpTnCl4j4NDK2DdpQht7jVWCQyUhTFVDw5NOxyME45%2BIRguIL%2B%2Fs9v9%2BHb%2BeaPXhq1R8o2fLhnx6EXZgTmlIzhoo0MXYLo5boubwx6y9x2Q52e4LdvQ%2FUoP8896ZbA95hLjAdU913ttW%2BYku0Q%2ByAx49gapAf%2F64YnFLoyn5WClmWXf3hzJKeDnzFrdvOKYmlSBQ09iuH23BDI9nfUiab7N9wmk6ol%2FAKvvT4tYTWHl%2F8Y1Wr0jOoxStTDp3Ul8naTgnX2w5YGRqUB063W9uc%2Fg8y9x4XZw0Vh9tmNIhSgDrdf0%2Fz4qLO2iz5gqKYAXkURdg89WxgmVHZ4fhStdoj3jANfrFMuoZdBNo64gFgdMKOQir4GOqUBfBvscr%2B6SXdDL8ihL%2BNk55mxJXamNNutkXpjeMoYT%2FXK7qKXLjF9vBDmsAZ1nDwjA7vGI1Ndbyf7uM5HmH%2FIBuecJfnPPkYZjnfDLiF3eb9MA6BwZOHZ3ouPAutJv1W1fnKCoePgCLpdLvlv5wACaf%2F%2BqEMUyAec5XPy4Y7j38AchYm6OcrDSOclkMzLCCk1GrY5OmMf%2F54D%2FapX5qfdWr5gzUNJ&X-Amz-Signature=9ca4c8df9a6b1702a62366e977f7bd58115ec52b08e730b098d5b12f9d56cdd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
