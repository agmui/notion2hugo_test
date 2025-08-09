---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQU5XCY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDKBNgICWysPCeOeddoZuj039PNiokPifmBWCm5ppKqewIgWysmI1I3pWVg3zJiX7IqDkypIyDflZH8LQYfJONsXh8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhCQC5yEDHMeT8QwCrcA43yVqPZ1ssTVQ5AZ52zTpBfgZprr8KN76TlUW%2FH3FA0b%2FrqKD7fs9rDwOHA%2FdZd8GdvJtSLrhMQ2cAhuWqSkoMJ0vZqPI4mLu7gPmCi1fGu5oULhkpgFWKQ8mrA%2BGQZqMLb%2FwtT2DoMWxfz5eLdxkASTZgXVxtdiKCgcGP13yySqpv7tC5waWF3zJTPRktQP9%2BTkymIEfmLYLjfkwUGKOMogHkM6E22BpovHls54lUEw6M4ttLNSEIy%2FqsN5e0paBMWW%2FOHUcAHjgwM8G3BZXSXm%2FWUw3lFilSD8nk51BUVMu8z01tsXvtoqZ92eEkvj886tXZOH6cgqS6l2AfaWV%2BlPFDzq3YDc%2BQ5j9jJ9uoveMwbxnDl7x7lIXsoQVP%2Bl%2BqBL46pP5Ju3FmgtpAY%2FBCXIn8PzsPx8EPvMFj0QLoD7qaveBU4g1Sob8Y1uKPuAfhDN%2BfzJAosyZ0wbPCDus0jwZWuM3vRNhUZ4MnVDZck8pgKw2tWCU7dkkmmcko6%2Ba6e8fgSl1BWC2lL3h22AvplevE4JCfjEMpSxtoiHsws28Ja9%2BxE6ULGWBT6eiaw8fqkrlnxbTKmkB60rGvjWNQ205yDGpJEqBCVlLy1jj9BS7nytRsdDweZ%2FC4qMIGr2sQGOqUBCCcPmpqzy17kT%2BLZelN35zU7xhZgmbaqk8jd37fv6yiZhp%2BzJuzBVfeu9zA4x%2B8jOFhzfSQvCEi53YOmwhp9TkrIlPNLaNpncpq2DY7hmNArGe9I%2B4VW6dkMuqqfImE%2B0wrf3hQGLc%2FYthaVVQTUmPLRryyCTbJnGREd2OVihgb6XMEoJaVHlCdRKWX6QnEMjfo2%2B7%2FzT8vSP%2Bnyyh5StixfSCFu&X-Amz-Signature=62dba84356d0c9ae7ef3d2c456de0c6d5d4c29e6028782ac4f81f806abca45ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQU5XCY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDKBNgICWysPCeOeddoZuj039PNiokPifmBWCm5ppKqewIgWysmI1I3pWVg3zJiX7IqDkypIyDflZH8LQYfJONsXh8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhCQC5yEDHMeT8QwCrcA43yVqPZ1ssTVQ5AZ52zTpBfgZprr8KN76TlUW%2FH3FA0b%2FrqKD7fs9rDwOHA%2FdZd8GdvJtSLrhMQ2cAhuWqSkoMJ0vZqPI4mLu7gPmCi1fGu5oULhkpgFWKQ8mrA%2BGQZqMLb%2FwtT2DoMWxfz5eLdxkASTZgXVxtdiKCgcGP13yySqpv7tC5waWF3zJTPRktQP9%2BTkymIEfmLYLjfkwUGKOMogHkM6E22BpovHls54lUEw6M4ttLNSEIy%2FqsN5e0paBMWW%2FOHUcAHjgwM8G3BZXSXm%2FWUw3lFilSD8nk51BUVMu8z01tsXvtoqZ92eEkvj886tXZOH6cgqS6l2AfaWV%2BlPFDzq3YDc%2BQ5j9jJ9uoveMwbxnDl7x7lIXsoQVP%2Bl%2BqBL46pP5Ju3FmgtpAY%2FBCXIn8PzsPx8EPvMFj0QLoD7qaveBU4g1Sob8Y1uKPuAfhDN%2BfzJAosyZ0wbPCDus0jwZWuM3vRNhUZ4MnVDZck8pgKw2tWCU7dkkmmcko6%2Ba6e8fgSl1BWC2lL3h22AvplevE4JCfjEMpSxtoiHsws28Ja9%2BxE6ULGWBT6eiaw8fqkrlnxbTKmkB60rGvjWNQ205yDGpJEqBCVlLy1jj9BS7nytRsdDweZ%2FC4qMIGr2sQGOqUBCCcPmpqzy17kT%2BLZelN35zU7xhZgmbaqk8jd37fv6yiZhp%2BzJuzBVfeu9zA4x%2B8jOFhzfSQvCEi53YOmwhp9TkrIlPNLaNpncpq2DY7hmNArGe9I%2B4VW6dkMuqqfImE%2B0wrf3hQGLc%2FYthaVVQTUmPLRryyCTbJnGREd2OVihgb6XMEoJaVHlCdRKWX6QnEMjfo2%2B7%2FzT8vSP%2Bnyyh5StixfSCFu&X-Amz-Signature=b30deff571bdf676e0d6cd19bb00133c0dc2e8e69c02d0f6e1cd9e5659995af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQU5XCY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDKBNgICWysPCeOeddoZuj039PNiokPifmBWCm5ppKqewIgWysmI1I3pWVg3zJiX7IqDkypIyDflZH8LQYfJONsXh8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhCQC5yEDHMeT8QwCrcA43yVqPZ1ssTVQ5AZ52zTpBfgZprr8KN76TlUW%2FH3FA0b%2FrqKD7fs9rDwOHA%2FdZd8GdvJtSLrhMQ2cAhuWqSkoMJ0vZqPI4mLu7gPmCi1fGu5oULhkpgFWKQ8mrA%2BGQZqMLb%2FwtT2DoMWxfz5eLdxkASTZgXVxtdiKCgcGP13yySqpv7tC5waWF3zJTPRktQP9%2BTkymIEfmLYLjfkwUGKOMogHkM6E22BpovHls54lUEw6M4ttLNSEIy%2FqsN5e0paBMWW%2FOHUcAHjgwM8G3BZXSXm%2FWUw3lFilSD8nk51BUVMu8z01tsXvtoqZ92eEkvj886tXZOH6cgqS6l2AfaWV%2BlPFDzq3YDc%2BQ5j9jJ9uoveMwbxnDl7x7lIXsoQVP%2Bl%2BqBL46pP5Ju3FmgtpAY%2FBCXIn8PzsPx8EPvMFj0QLoD7qaveBU4g1Sob8Y1uKPuAfhDN%2BfzJAosyZ0wbPCDus0jwZWuM3vRNhUZ4MnVDZck8pgKw2tWCU7dkkmmcko6%2Ba6e8fgSl1BWC2lL3h22AvplevE4JCfjEMpSxtoiHsws28Ja9%2BxE6ULGWBT6eiaw8fqkrlnxbTKmkB60rGvjWNQ205yDGpJEqBCVlLy1jj9BS7nytRsdDweZ%2FC4qMIGr2sQGOqUBCCcPmpqzy17kT%2BLZelN35zU7xhZgmbaqk8jd37fv6yiZhp%2BzJuzBVfeu9zA4x%2B8jOFhzfSQvCEi53YOmwhp9TkrIlPNLaNpncpq2DY7hmNArGe9I%2B4VW6dkMuqqfImE%2B0wrf3hQGLc%2FYthaVVQTUmPLRryyCTbJnGREd2OVihgb6XMEoJaVHlCdRKWX6QnEMjfo2%2B7%2FzT8vSP%2Bnyyh5StixfSCFu&X-Amz-Signature=9139ad09e1315de94737d20344fa3ad00cc9928ed37f36f8191052ec74870806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
