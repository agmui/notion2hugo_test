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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUTUQ2H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCU27gXZ%2BKNthr2TL8TLy0sFnyQVSXbw%2FN1TPUsfSngSQIhAMo0eMHY9yc8g%2B%2BVQT1XXp1GgNsOrAgAQqWVYRG1qrYcKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX6tIJ4%2BUMp7pdm1Iq3AN%2B7PHmBgouVcOWLVGwGoYsE%2Fd%2FEBQEljGMHl6wdXxPc8dCuYcFbPS4AWoR4AVS8AdVW46loQJuHRsmfrVrq1dO%2BwPejVQ%2BfAvPJ0n%2BBGHEqCEG6tj%2F3lt%2FQT4Um1kS46fKUM%2Fzky7VChM3WoPGs9OcyeJRKoRQL47YWS13AG%2FKVya8%2BgcxgZ3EjsJXHuXd9a3Q103N0w3qDbMI3s1pjWbVFj4mk0hpAgCDNGBWhxiDrye8QU1FM34Z6G%2FOov%2FWtBYgOaxGlxImqImE4gkCkyQczO7xwKK3yGghFJ8J%2BTqK6P7vR9B%2FflkYClTpKhnpenTp7FsWwRC88GAKdPKQfsaVSIsCnqnRxi1uYkIPBRqn7FErc%2BF4Q4aeE%2BgO5ncmUDC43BGYxSVVbTPXqLkX7k3TlgFfpxXLNGTH73gk80ZHHCmFdb%2FuXKxE3THxH2CFR1wmKnJS11J0yzC5hF%2BMI74PqyUoAKshiBHxOA2N21Bvl8JYSOZQUFCKFBMPd9SuUWpJlPunF88jvinF2KZiDzDHbYdJ%2ByN6nrUkGMaHtde12hHiHuVO7CBcdKCDuqvH6jyOdAkxoL7Wi4RMJhjk8MoswWTkEtk59dV3vJSIl3zdgQcZPXAyj5f40ogW1jDpp%2Bi%2FBjqkAVObITXxx4QaINL5Q%2FOb59dDsJZyH0grsWCnFmw5QO6ohu5gVxACMytkPSskd19CmTpcIfQDNh%2FhweM1I5vHV%2Fl1kqKEZRsUeA65T9O2XKgZxcvwAT3mcioaAQyji8Xc4ynk2cKKlevqZYudLYv14UA6kq6LeT6xm6F%2FfGRE3wEBvJMB5PyzSrbPHsC4PnTn3c5dRr92W40yzUi%2F%2F9X%2FApZEDUku&X-Amz-Signature=dd826b3e67a6ea25cbbe923abc07833390c414ec6be7a9832eea45cf66ccb9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUTUQ2H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCU27gXZ%2BKNthr2TL8TLy0sFnyQVSXbw%2FN1TPUsfSngSQIhAMo0eMHY9yc8g%2B%2BVQT1XXp1GgNsOrAgAQqWVYRG1qrYcKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX6tIJ4%2BUMp7pdm1Iq3AN%2B7PHmBgouVcOWLVGwGoYsE%2Fd%2FEBQEljGMHl6wdXxPc8dCuYcFbPS4AWoR4AVS8AdVW46loQJuHRsmfrVrq1dO%2BwPejVQ%2BfAvPJ0n%2BBGHEqCEG6tj%2F3lt%2FQT4Um1kS46fKUM%2Fzky7VChM3WoPGs9OcyeJRKoRQL47YWS13AG%2FKVya8%2BgcxgZ3EjsJXHuXd9a3Q103N0w3qDbMI3s1pjWbVFj4mk0hpAgCDNGBWhxiDrye8QU1FM34Z6G%2FOov%2FWtBYgOaxGlxImqImE4gkCkyQczO7xwKK3yGghFJ8J%2BTqK6P7vR9B%2FflkYClTpKhnpenTp7FsWwRC88GAKdPKQfsaVSIsCnqnRxi1uYkIPBRqn7FErc%2BF4Q4aeE%2BgO5ncmUDC43BGYxSVVbTPXqLkX7k3TlgFfpxXLNGTH73gk80ZHHCmFdb%2FuXKxE3THxH2CFR1wmKnJS11J0yzC5hF%2BMI74PqyUoAKshiBHxOA2N21Bvl8JYSOZQUFCKFBMPd9SuUWpJlPunF88jvinF2KZiDzDHbYdJ%2ByN6nrUkGMaHtde12hHiHuVO7CBcdKCDuqvH6jyOdAkxoL7Wi4RMJhjk8MoswWTkEtk59dV3vJSIl3zdgQcZPXAyj5f40ogW1jDpp%2Bi%2FBjqkAVObITXxx4QaINL5Q%2FOb59dDsJZyH0grsWCnFmw5QO6ohu5gVxACMytkPSskd19CmTpcIfQDNh%2FhweM1I5vHV%2Fl1kqKEZRsUeA65T9O2XKgZxcvwAT3mcioaAQyji8Xc4ynk2cKKlevqZYudLYv14UA6kq6LeT6xm6F%2FfGRE3wEBvJMB5PyzSrbPHsC4PnTn3c5dRr92W40yzUi%2F%2F9X%2FApZEDUku&X-Amz-Signature=4a6cc1026f6fce96a203234677452eb32959109bf075fe26ec315ed68dfa7c98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUTUQ2H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCU27gXZ%2BKNthr2TL8TLy0sFnyQVSXbw%2FN1TPUsfSngSQIhAMo0eMHY9yc8g%2B%2BVQT1XXp1GgNsOrAgAQqWVYRG1qrYcKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX6tIJ4%2BUMp7pdm1Iq3AN%2B7PHmBgouVcOWLVGwGoYsE%2Fd%2FEBQEljGMHl6wdXxPc8dCuYcFbPS4AWoR4AVS8AdVW46loQJuHRsmfrVrq1dO%2BwPejVQ%2BfAvPJ0n%2BBGHEqCEG6tj%2F3lt%2FQT4Um1kS46fKUM%2Fzky7VChM3WoPGs9OcyeJRKoRQL47YWS13AG%2FKVya8%2BgcxgZ3EjsJXHuXd9a3Q103N0w3qDbMI3s1pjWbVFj4mk0hpAgCDNGBWhxiDrye8QU1FM34Z6G%2FOov%2FWtBYgOaxGlxImqImE4gkCkyQczO7xwKK3yGghFJ8J%2BTqK6P7vR9B%2FflkYClTpKhnpenTp7FsWwRC88GAKdPKQfsaVSIsCnqnRxi1uYkIPBRqn7FErc%2BF4Q4aeE%2BgO5ncmUDC43BGYxSVVbTPXqLkX7k3TlgFfpxXLNGTH73gk80ZHHCmFdb%2FuXKxE3THxH2CFR1wmKnJS11J0yzC5hF%2BMI74PqyUoAKshiBHxOA2N21Bvl8JYSOZQUFCKFBMPd9SuUWpJlPunF88jvinF2KZiDzDHbYdJ%2ByN6nrUkGMaHtde12hHiHuVO7CBcdKCDuqvH6jyOdAkxoL7Wi4RMJhjk8MoswWTkEtk59dV3vJSIl3zdgQcZPXAyj5f40ogW1jDpp%2Bi%2FBjqkAVObITXxx4QaINL5Q%2FOb59dDsJZyH0grsWCnFmw5QO6ohu5gVxACMytkPSskd19CmTpcIfQDNh%2FhweM1I5vHV%2Fl1kqKEZRsUeA65T9O2XKgZxcvwAT3mcioaAQyji8Xc4ynk2cKKlevqZYudLYv14UA6kq6LeT6xm6F%2FfGRE3wEBvJMB5PyzSrbPHsC4PnTn3c5dRr92W40yzUi%2F%2F9X%2FApZEDUku&X-Amz-Signature=ad63bd89ebae7128d8a4340e0d917f82d3f6c96a580edcd254c796acb3a4a7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
