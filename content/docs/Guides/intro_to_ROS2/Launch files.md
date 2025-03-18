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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2K2XUL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF8vHomf41sJEew1rUBm%2FA874CPuW%2BJy2tdicI7%2FcZ7hAiEArIBY%2FJ%2BSo%2BnFFr1JlOpl%2F37nJmrBV0%2FwZtB1iqom24Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHgy3yHkbRIOkR41YSrcAx5Sb65NHy3JUctA21wVgPWPY8gZGv7La497ym628VwfepBjtBuupqB8%2BMn4oSfNCS38LTe%2BsxM%2BGWsX9gI6PtaV%2Be1q8v5lcx596XlDYoEZrLH9Msh%2B52XRNRQZSIyAavAYZhPujEgHtEgfsSZcQoIf%2B6adxwIGqvR0BsOmdgQiftKby0ZnOkGsyrXIk4C%2F4mYycv7KILiQF43uEnhZ8Fo8RajCUg04%2FUv6r8fjidjxE73bU83dSZQC%2BVTss2prwP%2FgTHB5RlxeNA%2FbLpN5BQ%2F5mdh4ZmznOejxGeV30IRH7%2Bk8knG%2BDR6gbpncY9fXuIl3K83dzKUZ%2FWavD0J7LPN0QMXIp1FCHvKVUN6DUFN%2FLfNyxMbnk6st9TC2OslYqIEswSFIp6MLmGOesxRJ444HUpwZAd7yU33eIc7uN1gV2MneMq7ZDEueQbzabC5R3UT3pHLG3O2Xz16fPHjX7oxEEnmYG7%2FJeCsPZp3VCQlLvm7Su3uddnlnOdhwZyqsQey6nE4i0F5RRnziSxin1xUrP8IG1xgpHxXui%2BRoNSDpLWpFFXM9Yh6F1YXlzmMeIJZ9t3HoxoYqy%2FO08JJfVdOMF8KikVOEDzpV%2FiL3WYcCBD4zcypeqQnlv%2BV3MNPz5r4GOqUBMLftQmTq8YvYW68hPMHOr36xotptbR2UUEao4%2FdWR4LT6GRkyLXjEzpj%2Fx6itpzGpXbhA5Bk%2BGZqtTb8XMtcfFj8yMmOpXKxEED4wFFxaJNflW9CVnkn6GOUI4aLCV818ql35lcnJK5hoEMQ1L51GVXe3zxFAMV81yVTTrS4Jf%2BZYZbyV0ua9hduwHrTSvQ3MlZbPXgpxxbJqPXGxLQ1FPjenf%2Fy&X-Amz-Signature=730dd0ae7f4c053b9210e4379b9794dc757ad11bc6610212c2e2b200d937da4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2K2XUL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF8vHomf41sJEew1rUBm%2FA874CPuW%2BJy2tdicI7%2FcZ7hAiEArIBY%2FJ%2BSo%2BnFFr1JlOpl%2F37nJmrBV0%2FwZtB1iqom24Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHgy3yHkbRIOkR41YSrcAx5Sb65NHy3JUctA21wVgPWPY8gZGv7La497ym628VwfepBjtBuupqB8%2BMn4oSfNCS38LTe%2BsxM%2BGWsX9gI6PtaV%2Be1q8v5lcx596XlDYoEZrLH9Msh%2B52XRNRQZSIyAavAYZhPujEgHtEgfsSZcQoIf%2B6adxwIGqvR0BsOmdgQiftKby0ZnOkGsyrXIk4C%2F4mYycv7KILiQF43uEnhZ8Fo8RajCUg04%2FUv6r8fjidjxE73bU83dSZQC%2BVTss2prwP%2FgTHB5RlxeNA%2FbLpN5BQ%2F5mdh4ZmznOejxGeV30IRH7%2Bk8knG%2BDR6gbpncY9fXuIl3K83dzKUZ%2FWavD0J7LPN0QMXIp1FCHvKVUN6DUFN%2FLfNyxMbnk6st9TC2OslYqIEswSFIp6MLmGOesxRJ444HUpwZAd7yU33eIc7uN1gV2MneMq7ZDEueQbzabC5R3UT3pHLG3O2Xz16fPHjX7oxEEnmYG7%2FJeCsPZp3VCQlLvm7Su3uddnlnOdhwZyqsQey6nE4i0F5RRnziSxin1xUrP8IG1xgpHxXui%2BRoNSDpLWpFFXM9Yh6F1YXlzmMeIJZ9t3HoxoYqy%2FO08JJfVdOMF8KikVOEDzpV%2FiL3WYcCBD4zcypeqQnlv%2BV3MNPz5r4GOqUBMLftQmTq8YvYW68hPMHOr36xotptbR2UUEao4%2FdWR4LT6GRkyLXjEzpj%2Fx6itpzGpXbhA5Bk%2BGZqtTb8XMtcfFj8yMmOpXKxEED4wFFxaJNflW9CVnkn6GOUI4aLCV818ql35lcnJK5hoEMQ1L51GVXe3zxFAMV81yVTTrS4Jf%2BZYZbyV0ua9hduwHrTSvQ3MlZbPXgpxxbJqPXGxLQ1FPjenf%2Fy&X-Amz-Signature=70e571fc2a5f76ee72d52f5db67552ec2b80c42b16048270289d0806109647ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2K2XUL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF8vHomf41sJEew1rUBm%2FA874CPuW%2BJy2tdicI7%2FcZ7hAiEArIBY%2FJ%2BSo%2BnFFr1JlOpl%2F37nJmrBV0%2FwZtB1iqom24Uq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHgy3yHkbRIOkR41YSrcAx5Sb65NHy3JUctA21wVgPWPY8gZGv7La497ym628VwfepBjtBuupqB8%2BMn4oSfNCS38LTe%2BsxM%2BGWsX9gI6PtaV%2Be1q8v5lcx596XlDYoEZrLH9Msh%2B52XRNRQZSIyAavAYZhPujEgHtEgfsSZcQoIf%2B6adxwIGqvR0BsOmdgQiftKby0ZnOkGsyrXIk4C%2F4mYycv7KILiQF43uEnhZ8Fo8RajCUg04%2FUv6r8fjidjxE73bU83dSZQC%2BVTss2prwP%2FgTHB5RlxeNA%2FbLpN5BQ%2F5mdh4ZmznOejxGeV30IRH7%2Bk8knG%2BDR6gbpncY9fXuIl3K83dzKUZ%2FWavD0J7LPN0QMXIp1FCHvKVUN6DUFN%2FLfNyxMbnk6st9TC2OslYqIEswSFIp6MLmGOesxRJ444HUpwZAd7yU33eIc7uN1gV2MneMq7ZDEueQbzabC5R3UT3pHLG3O2Xz16fPHjX7oxEEnmYG7%2FJeCsPZp3VCQlLvm7Su3uddnlnOdhwZyqsQey6nE4i0F5RRnziSxin1xUrP8IG1xgpHxXui%2BRoNSDpLWpFFXM9Yh6F1YXlzmMeIJZ9t3HoxoYqy%2FO08JJfVdOMF8KikVOEDzpV%2FiL3WYcCBD4zcypeqQnlv%2BV3MNPz5r4GOqUBMLftQmTq8YvYW68hPMHOr36xotptbR2UUEao4%2FdWR4LT6GRkyLXjEzpj%2Fx6itpzGpXbhA5Bk%2BGZqtTb8XMtcfFj8yMmOpXKxEED4wFFxaJNflW9CVnkn6GOUI4aLCV818ql35lcnJK5hoEMQ1L51GVXe3zxFAMV81yVTTrS4Jf%2BZYZbyV0ua9hduwHrTSvQ3MlZbPXgpxxbJqPXGxLQ1FPjenf%2Fy&X-Amz-Signature=ca856bb3c5135d77c945f4821e64cd65c0c3f7907eaae752b6f02782c6429767&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
