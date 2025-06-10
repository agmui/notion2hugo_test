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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ALJTZV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkgkpSrOV4Fb%2BCKnJu77EL3wS5NzzS2mLqzHZS0gG0XAiBeIEYaPlX0EoLkY87LnGTvZSAxrR5TZEHK7%2Fatcn%2F2aCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5sPpgxEPkVgbBJbhKtwDfWtYd%2FopEUePEGi0T6tKg%2FEvFTTqvd1iDJuMniEMLBG%2F5b0A3Vk6JGvSxEVqToGfqCiGNM4LwgQJg4GXknbU6%2FMoIpTR0w0eF8hbyd1sKIE3EbSqivPtDIr0Qaa3s8tAelMNaKcl9xlZ52blzEtny1bnl36jcFW2AkWdSVxrczkntzEtpIF2osNpT2w5l5r6Y%2F5szYdpS1BDQlRWnWqnw7p4WZmjs7f2uBW0mD%2Fied6e5OLNpG%2Bijw5iyEzoh8R2jzHLgilKpAwcFc2VNTYbRJY2l54gsq5ZN1d%2BQWHacOkZRJ2jmNqaAvJevL8fs3GQF%2BLRZW2zWDmRc6jy4oXjejVaHnHZqoKpejxCbETXeWdPUBIMvvfArqFygEnVHjBFvMkXtZgUAae3dMsHfP%2BArNOg5sxXEdzGfsihJL4XMZgunYQtL%2FRyQVrp%2FIcItHAwGS6g6DrbuXJKm9snSgT%2BnhllF3gPOQIHnYPOukPxk3xMSC9eWDoBue%2FL0zXwhcFwMcE2TlcHHaHGNoS3rlvAl%2FHHmwd%2BJOI8WiAUL8uiz1uZLX1sTHTodprzc2MkXqJXIi%2FL7WlLd3hWyAVgm%2BeQ%2B3d090TykrLG9sJhaUcQ8rFsiEJ%2Fg%2FZaOTNP%2BXww97KfwgY6pgFXwetG2QDtxcbfpRD72GiqiJfklvhkyb50gpwc669peRNv3LV3hVPupQ2D35upZRO%2BOnJ09Jdr8iJinq2a%2FsRA75PhXKi0U0Zu53wTaE%2BO80VBtH%2B8RFw%2B8p3mZTNi5Ad4EMtuxkPS4%2FF6Q0BQBUqzlVTbH59RRKUYvZjJ%2B6xj0WJ%2B4WozSCHASkC2IGyTUl4brktHk6bhMJgtMpyb0URKIlwyIjSB&X-Amz-Signature=9fce4eb1a219b088ac87e0c2b63aa67f24040b26624b5a56c9e0b1db729ba8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ALJTZV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkgkpSrOV4Fb%2BCKnJu77EL3wS5NzzS2mLqzHZS0gG0XAiBeIEYaPlX0EoLkY87LnGTvZSAxrR5TZEHK7%2Fatcn%2F2aCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5sPpgxEPkVgbBJbhKtwDfWtYd%2FopEUePEGi0T6tKg%2FEvFTTqvd1iDJuMniEMLBG%2F5b0A3Vk6JGvSxEVqToGfqCiGNM4LwgQJg4GXknbU6%2FMoIpTR0w0eF8hbyd1sKIE3EbSqivPtDIr0Qaa3s8tAelMNaKcl9xlZ52blzEtny1bnl36jcFW2AkWdSVxrczkntzEtpIF2osNpT2w5l5r6Y%2F5szYdpS1BDQlRWnWqnw7p4WZmjs7f2uBW0mD%2Fied6e5OLNpG%2Bijw5iyEzoh8R2jzHLgilKpAwcFc2VNTYbRJY2l54gsq5ZN1d%2BQWHacOkZRJ2jmNqaAvJevL8fs3GQF%2BLRZW2zWDmRc6jy4oXjejVaHnHZqoKpejxCbETXeWdPUBIMvvfArqFygEnVHjBFvMkXtZgUAae3dMsHfP%2BArNOg5sxXEdzGfsihJL4XMZgunYQtL%2FRyQVrp%2FIcItHAwGS6g6DrbuXJKm9snSgT%2BnhllF3gPOQIHnYPOukPxk3xMSC9eWDoBue%2FL0zXwhcFwMcE2TlcHHaHGNoS3rlvAl%2FHHmwd%2BJOI8WiAUL8uiz1uZLX1sTHTodprzc2MkXqJXIi%2FL7WlLd3hWyAVgm%2BeQ%2B3d090TykrLG9sJhaUcQ8rFsiEJ%2Fg%2FZaOTNP%2BXww97KfwgY6pgFXwetG2QDtxcbfpRD72GiqiJfklvhkyb50gpwc669peRNv3LV3hVPupQ2D35upZRO%2BOnJ09Jdr8iJinq2a%2FsRA75PhXKi0U0Zu53wTaE%2BO80VBtH%2B8RFw%2B8p3mZTNi5Ad4EMtuxkPS4%2FF6Q0BQBUqzlVTbH59RRKUYvZjJ%2B6xj0WJ%2B4WozSCHASkC2IGyTUl4brktHk6bhMJgtMpyb0URKIlwyIjSB&X-Amz-Signature=78c41551326f4259e29307817c85702cbaa9ec6cfd80d35bc8d2fcb1d0959b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ALJTZV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkgkpSrOV4Fb%2BCKnJu77EL3wS5NzzS2mLqzHZS0gG0XAiBeIEYaPlX0EoLkY87LnGTvZSAxrR5TZEHK7%2Fatcn%2F2aCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5sPpgxEPkVgbBJbhKtwDfWtYd%2FopEUePEGi0T6tKg%2FEvFTTqvd1iDJuMniEMLBG%2F5b0A3Vk6JGvSxEVqToGfqCiGNM4LwgQJg4GXknbU6%2FMoIpTR0w0eF8hbyd1sKIE3EbSqivPtDIr0Qaa3s8tAelMNaKcl9xlZ52blzEtny1bnl36jcFW2AkWdSVxrczkntzEtpIF2osNpT2w5l5r6Y%2F5szYdpS1BDQlRWnWqnw7p4WZmjs7f2uBW0mD%2Fied6e5OLNpG%2Bijw5iyEzoh8R2jzHLgilKpAwcFc2VNTYbRJY2l54gsq5ZN1d%2BQWHacOkZRJ2jmNqaAvJevL8fs3GQF%2BLRZW2zWDmRc6jy4oXjejVaHnHZqoKpejxCbETXeWdPUBIMvvfArqFygEnVHjBFvMkXtZgUAae3dMsHfP%2BArNOg5sxXEdzGfsihJL4XMZgunYQtL%2FRyQVrp%2FIcItHAwGS6g6DrbuXJKm9snSgT%2BnhllF3gPOQIHnYPOukPxk3xMSC9eWDoBue%2FL0zXwhcFwMcE2TlcHHaHGNoS3rlvAl%2FHHmwd%2BJOI8WiAUL8uiz1uZLX1sTHTodprzc2MkXqJXIi%2FL7WlLd3hWyAVgm%2BeQ%2B3d090TykrLG9sJhaUcQ8rFsiEJ%2Fg%2FZaOTNP%2BXww97KfwgY6pgFXwetG2QDtxcbfpRD72GiqiJfklvhkyb50gpwc669peRNv3LV3hVPupQ2D35upZRO%2BOnJ09Jdr8iJinq2a%2FsRA75PhXKi0U0Zu53wTaE%2BO80VBtH%2B8RFw%2B8p3mZTNi5Ad4EMtuxkPS4%2FF6Q0BQBUqzlVTbH59RRKUYvZjJ%2B6xj0WJ%2B4WozSCHASkC2IGyTUl4brktHk6bhMJgtMpyb0URKIlwyIjSB&X-Amz-Signature=8a5e1b845198cee5883675e98af1db8ecb5479d108bca297f12f8d0d4ef4828e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
