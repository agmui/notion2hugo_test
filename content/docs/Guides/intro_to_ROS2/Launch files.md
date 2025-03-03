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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67ACLRU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDXxagluvvrVZZawUuC4B1EWdhJyTz9qKO3x2X02MPgAiA7i%2BW738F6nelaUHQLy%2B9%2ByXxIHPxEkmTOI%2BpHnEkZ2iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBW9vc9Vkv%2FOImXWaKtwD6%2BEWTlelM26GV4eAbBGdMqFVoa9xJDz0t4vxTmhj5uaA36DdwdKCCm64Ryif4NTLaqk3vXauYzKpN4JpkPPG2Vcakm%2FOh6uRIKFw8owznGwHe2N5pdQcoJulOe9OcxZxufYl8GPKdlvbtjTtfIaUOO6ZR2Pz%2FH4Qa5bqtRZjdSUc%2BeCf612RHKG2XyTtX98b0UF9bFKZ55ezXfhppafatWwezI40jt1%2F36qgWTZSApFD2rTTy9lYe40HbtBVRuv7CcvK6rdw9VGJ%2FdBmtewYRNcKUP6l1JfL9tMKM4CW7ZGgKgnimDUGTjMN82nq4%2Bcbsd7P3aFVUuqLrblQvAEKSBTjAWuo3vlbnB37KfLW5w5YUXeu3SIlx5%2FKVA4YFhSgCUgd9AGHkaPlA7LqI0NjMzEG47JLvRBrz7T%2Fq97pjE6jXBEaT8L2yNJsI%2Fx%2BpKVPA3xOf98ibQevxjmek93XTHoWgpTEkVMBV4TgJpmeovqv0Mcw%2BzLkbjlzP7rMdPuu9PqZHVXf8hntM9Fgm7%2BEAiNjxJ0cBXcIIWIBaOdgDHS7nW8FmLH6JaDRRJF1Ra%2BfuYE7FpluIvNW1Ov9IzJubbkd%2BnFtnE12plkInv00Kj5KUHBbNlxrdZxg0pUwkdmYvgY6pgEZYW5V41JPhcG5Xh0AUovYWPYgCKo9LdG95zEQQRCpOhPbETwbXAv9lDjTeYR%2FrXXc0axin1nHj%2FrIvZqdSFnCQB2siiRER7Y11lpoXmxdNEICfh3YIh6DxsZXxTCXvr0s5feZx1NfKz1L%2BcxeriLMcnkNssG%2B6kFpjyMwbXVdxJYGIxcTMRdPmxZIr8YL6oB1ORVNdTltPaPShA54p0lzRz246bmg&X-Amz-Signature=e1547fed22e14b7c54e4f6dc3cf04307963d39109d3a689b2f60b8df0e8c441d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67ACLRU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDXxagluvvrVZZawUuC4B1EWdhJyTz9qKO3x2X02MPgAiA7i%2BW738F6nelaUHQLy%2B9%2ByXxIHPxEkmTOI%2BpHnEkZ2iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBW9vc9Vkv%2FOImXWaKtwD6%2BEWTlelM26GV4eAbBGdMqFVoa9xJDz0t4vxTmhj5uaA36DdwdKCCm64Ryif4NTLaqk3vXauYzKpN4JpkPPG2Vcakm%2FOh6uRIKFw8owznGwHe2N5pdQcoJulOe9OcxZxufYl8GPKdlvbtjTtfIaUOO6ZR2Pz%2FH4Qa5bqtRZjdSUc%2BeCf612RHKG2XyTtX98b0UF9bFKZ55ezXfhppafatWwezI40jt1%2F36qgWTZSApFD2rTTy9lYe40HbtBVRuv7CcvK6rdw9VGJ%2FdBmtewYRNcKUP6l1JfL9tMKM4CW7ZGgKgnimDUGTjMN82nq4%2Bcbsd7P3aFVUuqLrblQvAEKSBTjAWuo3vlbnB37KfLW5w5YUXeu3SIlx5%2FKVA4YFhSgCUgd9AGHkaPlA7LqI0NjMzEG47JLvRBrz7T%2Fq97pjE6jXBEaT8L2yNJsI%2Fx%2BpKVPA3xOf98ibQevxjmek93XTHoWgpTEkVMBV4TgJpmeovqv0Mcw%2BzLkbjlzP7rMdPuu9PqZHVXf8hntM9Fgm7%2BEAiNjxJ0cBXcIIWIBaOdgDHS7nW8FmLH6JaDRRJF1Ra%2BfuYE7FpluIvNW1Ov9IzJubbkd%2BnFtnE12plkInv00Kj5KUHBbNlxrdZxg0pUwkdmYvgY6pgEZYW5V41JPhcG5Xh0AUovYWPYgCKo9LdG95zEQQRCpOhPbETwbXAv9lDjTeYR%2FrXXc0axin1nHj%2FrIvZqdSFnCQB2siiRER7Y11lpoXmxdNEICfh3YIh6DxsZXxTCXvr0s5feZx1NfKz1L%2BcxeriLMcnkNssG%2B6kFpjyMwbXVdxJYGIxcTMRdPmxZIr8YL6oB1ORVNdTltPaPShA54p0lzRz246bmg&X-Amz-Signature=043c905617e3dd44b5505d11ab1bd7a0d49ccf695a2f887a3fbb2bef899fb682&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67ACLRU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDXxagluvvrVZZawUuC4B1EWdhJyTz9qKO3x2X02MPgAiA7i%2BW738F6nelaUHQLy%2B9%2ByXxIHPxEkmTOI%2BpHnEkZ2iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBW9vc9Vkv%2FOImXWaKtwD6%2BEWTlelM26GV4eAbBGdMqFVoa9xJDz0t4vxTmhj5uaA36DdwdKCCm64Ryif4NTLaqk3vXauYzKpN4JpkPPG2Vcakm%2FOh6uRIKFw8owznGwHe2N5pdQcoJulOe9OcxZxufYl8GPKdlvbtjTtfIaUOO6ZR2Pz%2FH4Qa5bqtRZjdSUc%2BeCf612RHKG2XyTtX98b0UF9bFKZ55ezXfhppafatWwezI40jt1%2F36qgWTZSApFD2rTTy9lYe40HbtBVRuv7CcvK6rdw9VGJ%2FdBmtewYRNcKUP6l1JfL9tMKM4CW7ZGgKgnimDUGTjMN82nq4%2Bcbsd7P3aFVUuqLrblQvAEKSBTjAWuo3vlbnB37KfLW5w5YUXeu3SIlx5%2FKVA4YFhSgCUgd9AGHkaPlA7LqI0NjMzEG47JLvRBrz7T%2Fq97pjE6jXBEaT8L2yNJsI%2Fx%2BpKVPA3xOf98ibQevxjmek93XTHoWgpTEkVMBV4TgJpmeovqv0Mcw%2BzLkbjlzP7rMdPuu9PqZHVXf8hntM9Fgm7%2BEAiNjxJ0cBXcIIWIBaOdgDHS7nW8FmLH6JaDRRJF1Ra%2BfuYE7FpluIvNW1Ov9IzJubbkd%2BnFtnE12plkInv00Kj5KUHBbNlxrdZxg0pUwkdmYvgY6pgEZYW5V41JPhcG5Xh0AUovYWPYgCKo9LdG95zEQQRCpOhPbETwbXAv9lDjTeYR%2FrXXc0axin1nHj%2FrIvZqdSFnCQB2siiRER7Y11lpoXmxdNEICfh3YIh6DxsZXxTCXvr0s5feZx1NfKz1L%2BcxeriLMcnkNssG%2B6kFpjyMwbXVdxJYGIxcTMRdPmxZIr8YL6oB1ORVNdTltPaPShA54p0lzRz246bmg&X-Amz-Signature=db8656ca017687b9d78c2658b73df2671dedd89cdeb1c0d42b93f3f131a66b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
