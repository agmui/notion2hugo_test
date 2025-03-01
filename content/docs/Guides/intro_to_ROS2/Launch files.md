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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVZIBME%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGmFDWDljvbYuQ5wshbXeyQcDuxDnGFHxwZvt6vKOlMNAiBl2r0EpUHxOakENvn7xVxzoBBpLEOmqYLJkskv49DJpiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtUGCaDGbjFk9FapKtwDDuJdaPlJREnPAEqTQufZ9o5rQYJAsGRucH5OAs06e5mJzDJyptE9SAbfdkzmpla4wdxpHGtwgbh4RMxpPvR2u9h%2FNlC6vXMpoIrAnJpK8bkhF0PioVfyBf%2F5a9slpRe1PMqI%2FQIUp2yGCSjZsCAEp1I%2FAIjQQTWJCF80CnJqf95HXfFYL5MLUt3xD70Nn2wJPvfe2qHjuquy0gTU4Gyj6WWBaLMoZqr5A65dzlaUYffWzfrUdDlxuPAbKJktMDDPbmFsf5fj38llAD3q26Qpkcm6Q4VDsWBYmlDUeMT4j0BjBGrZnzqukiaFzR9AdckHLhmcjrnpAeK2PbA6ipyzEReCXbbW62ntlObuby56BjM8IMOJLnGPSLjeZ71QR%2FFBDIvYPwQTeukQkghL7JGkzHXNGrWfGIxKWcayeb3BiRWhu10u%2BcJMUn9dY8tSVG9BsAsTgBxOdSKM3z90mVo86wot23aa4Wtg4nvvV4hPI5R9CPtR%2Ft3Aa6GK3LBHlYviqZBqjrhQTjjjWdrLzGH9aSPYCrGqzGAoZU2S2r%2BDzu4ZiS8%2Fu%2Bvxh9CIZv4QYZUUXalc87gxOrbsvdfLJcZNKs77bpj6Igsss4q4YduQkQL2NcxI2ZgulS2MZ0QwrbWLvgY6pgGbpRc7pFPDoM21hD9fuFZFMj0bKkRUsbKMeHfcjjQQJGcZ72PdMyPZTg%2FyULrgCqJpeAoqp%2FhgCeJ5hmpggSDpcW2g4B86gUpGGu9VC3eqGg62bMJCWkdITkKwR8%2FIRLf74gupmhmnKEswypG75Y0NY%2BxyOO05G72ejXXpofQzrKTTDHAgohAHXa1Yaz7SUqxGQY4sKiwNXSvvC418BIxoVmK5rqvm&X-Amz-Signature=0249c7bdb8564a8b7b348fbf6479d06ce6b5c5d4bfd55bca456199dec961e9a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVZIBME%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGmFDWDljvbYuQ5wshbXeyQcDuxDnGFHxwZvt6vKOlMNAiBl2r0EpUHxOakENvn7xVxzoBBpLEOmqYLJkskv49DJpiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtUGCaDGbjFk9FapKtwDDuJdaPlJREnPAEqTQufZ9o5rQYJAsGRucH5OAs06e5mJzDJyptE9SAbfdkzmpla4wdxpHGtwgbh4RMxpPvR2u9h%2FNlC6vXMpoIrAnJpK8bkhF0PioVfyBf%2F5a9slpRe1PMqI%2FQIUp2yGCSjZsCAEp1I%2FAIjQQTWJCF80CnJqf95HXfFYL5MLUt3xD70Nn2wJPvfe2qHjuquy0gTU4Gyj6WWBaLMoZqr5A65dzlaUYffWzfrUdDlxuPAbKJktMDDPbmFsf5fj38llAD3q26Qpkcm6Q4VDsWBYmlDUeMT4j0BjBGrZnzqukiaFzR9AdckHLhmcjrnpAeK2PbA6ipyzEReCXbbW62ntlObuby56BjM8IMOJLnGPSLjeZ71QR%2FFBDIvYPwQTeukQkghL7JGkzHXNGrWfGIxKWcayeb3BiRWhu10u%2BcJMUn9dY8tSVG9BsAsTgBxOdSKM3z90mVo86wot23aa4Wtg4nvvV4hPI5R9CPtR%2Ft3Aa6GK3LBHlYviqZBqjrhQTjjjWdrLzGH9aSPYCrGqzGAoZU2S2r%2BDzu4ZiS8%2Fu%2Bvxh9CIZv4QYZUUXalc87gxOrbsvdfLJcZNKs77bpj6Igsss4q4YduQkQL2NcxI2ZgulS2MZ0QwrbWLvgY6pgGbpRc7pFPDoM21hD9fuFZFMj0bKkRUsbKMeHfcjjQQJGcZ72PdMyPZTg%2FyULrgCqJpeAoqp%2FhgCeJ5hmpggSDpcW2g4B86gUpGGu9VC3eqGg62bMJCWkdITkKwR8%2FIRLf74gupmhmnKEswypG75Y0NY%2BxyOO05G72ejXXpofQzrKTTDHAgohAHXa1Yaz7SUqxGQY4sKiwNXSvvC418BIxoVmK5rqvm&X-Amz-Signature=4b91bbdf9950edf872c4ff04ec555e84840967ce5b251306b7a5d3cf21b3283d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVZIBME%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGmFDWDljvbYuQ5wshbXeyQcDuxDnGFHxwZvt6vKOlMNAiBl2r0EpUHxOakENvn7xVxzoBBpLEOmqYLJkskv49DJpiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtUGCaDGbjFk9FapKtwDDuJdaPlJREnPAEqTQufZ9o5rQYJAsGRucH5OAs06e5mJzDJyptE9SAbfdkzmpla4wdxpHGtwgbh4RMxpPvR2u9h%2FNlC6vXMpoIrAnJpK8bkhF0PioVfyBf%2F5a9slpRe1PMqI%2FQIUp2yGCSjZsCAEp1I%2FAIjQQTWJCF80CnJqf95HXfFYL5MLUt3xD70Nn2wJPvfe2qHjuquy0gTU4Gyj6WWBaLMoZqr5A65dzlaUYffWzfrUdDlxuPAbKJktMDDPbmFsf5fj38llAD3q26Qpkcm6Q4VDsWBYmlDUeMT4j0BjBGrZnzqukiaFzR9AdckHLhmcjrnpAeK2PbA6ipyzEReCXbbW62ntlObuby56BjM8IMOJLnGPSLjeZ71QR%2FFBDIvYPwQTeukQkghL7JGkzHXNGrWfGIxKWcayeb3BiRWhu10u%2BcJMUn9dY8tSVG9BsAsTgBxOdSKM3z90mVo86wot23aa4Wtg4nvvV4hPI5R9CPtR%2Ft3Aa6GK3LBHlYviqZBqjrhQTjjjWdrLzGH9aSPYCrGqzGAoZU2S2r%2BDzu4ZiS8%2Fu%2Bvxh9CIZv4QYZUUXalc87gxOrbsvdfLJcZNKs77bpj6Igsss4q4YduQkQL2NcxI2ZgulS2MZ0QwrbWLvgY6pgGbpRc7pFPDoM21hD9fuFZFMj0bKkRUsbKMeHfcjjQQJGcZ72PdMyPZTg%2FyULrgCqJpeAoqp%2FhgCeJ5hmpggSDpcW2g4B86gUpGGu9VC3eqGg62bMJCWkdITkKwR8%2FIRLf74gupmhmnKEswypG75Y0NY%2BxyOO05G72ejXXpofQzrKTTDHAgohAHXa1Yaz7SUqxGQY4sKiwNXSvvC418BIxoVmK5rqvm&X-Amz-Signature=ced97bab124c728fe605e57e0a37e41a44435beefafe9af7c7714f6a6adf0445&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
