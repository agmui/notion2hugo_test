---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Launch files.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUBBMFE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAUBstTIGXxcmjXwOEBbNRZA%2BMY5jvN5EH48JN0x4Fc%2FAiBDy4L7iS4G9FyuYv%2Bxi9lfKNevwNvoUNgdRoHsxvkO5ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEDWwSZqiinMh2em3KtwDKPWoog6Kh93iIvCCYQEvZ8oEoVrTEFzTO%2B9R3ypwB7AAvUrfiIr%2BxmXaXVDZERlX9YeU78wU76bZzCAuN4nslyeeuBnYvxf6ZpSqnMJ6YNvFH2upD6b8hF5ubw%2FeSAG9qPe4bwD0D%2BLmB15HXP2w6wr6QMdMkRiBNAamLhD0MlRsVRbgI2qM2gQzfuUEF%2FtTkzahb0BWL6tOjO%2FgqcL5rtZPQoy2y%2BS1qVsczw0dzFgyLu56s2VWaElnTEskWyJsKTCuVJ%2F2ZLVz0vW43XhgUTLQENQqGuGhoYfGrOqOWX2ZSpH6NNR7gYxe%2B%2FIVV88AqSRoDbPQ1XIW1k3cStRQpi5TXbykmoEvRB3bFdbQG2Z%2B5uy04EzWldkRVVYxdBv1xt6VuhR2%2F0kV%2FrQ8B8vnHKPkqcmNYHCPrKigWrE0i0zY9wRLVFtXvs%2BKus1PZd6V80RqH0CdGWfyvnnfFVhz1p1I0WslWmNT6EOBrm8%2FcrsWnLN%2Fhm20%2BNNYu56R69v0x0jYdUoKIUEMOcqS5iBStWJEBNkH7YP5In3sbrFevD2Mh%2BQS3zjrwsIG8uXKt8QVkYXi2GCGHDJhFQxU5p59esqQjOem1hJKH1x4Bh2QT11cbqdp1Ndu9ey91nQwv8%2BKvQY6pgHIA06UVU2K55rB%2BxM%2FUFic4UZ0j%2FKYclN2qU6OPDGdskPOSdcx9JUgXdHDkFk9Ut%2FVlPNO9hnhnKA3rY1dUWU%2B%2BaNchzdrEtka3MYx1%2Bk5g2BRSdaVtgPwUTMoLDTQNsLorzWNvuowVyQKobb81HeihA117ponSzSKdnntdOOtkfWTXqlOSCd1llO1HQQGw%2F6rQpLsQivQvnQ7soNlHi95Wqwc1Rwx&X-Amz-Signature=d072763b7ffc0cf2b717b4b2734cd05ac17ceb8541f0334b1ee7fd092d91ff17&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUBBMFE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAUBstTIGXxcmjXwOEBbNRZA%2BMY5jvN5EH48JN0x4Fc%2FAiBDy4L7iS4G9FyuYv%2Bxi9lfKNevwNvoUNgdRoHsxvkO5ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEDWwSZqiinMh2em3KtwDKPWoog6Kh93iIvCCYQEvZ8oEoVrTEFzTO%2B9R3ypwB7AAvUrfiIr%2BxmXaXVDZERlX9YeU78wU76bZzCAuN4nslyeeuBnYvxf6ZpSqnMJ6YNvFH2upD6b8hF5ubw%2FeSAG9qPe4bwD0D%2BLmB15HXP2w6wr6QMdMkRiBNAamLhD0MlRsVRbgI2qM2gQzfuUEF%2FtTkzahb0BWL6tOjO%2FgqcL5rtZPQoy2y%2BS1qVsczw0dzFgyLu56s2VWaElnTEskWyJsKTCuVJ%2F2ZLVz0vW43XhgUTLQENQqGuGhoYfGrOqOWX2ZSpH6NNR7gYxe%2B%2FIVV88AqSRoDbPQ1XIW1k3cStRQpi5TXbykmoEvRB3bFdbQG2Z%2B5uy04EzWldkRVVYxdBv1xt6VuhR2%2F0kV%2FrQ8B8vnHKPkqcmNYHCPrKigWrE0i0zY9wRLVFtXvs%2BKus1PZd6V80RqH0CdGWfyvnnfFVhz1p1I0WslWmNT6EOBrm8%2FcrsWnLN%2Fhm20%2BNNYu56R69v0x0jYdUoKIUEMOcqS5iBStWJEBNkH7YP5In3sbrFevD2Mh%2BQS3zjrwsIG8uXKt8QVkYXi2GCGHDJhFQxU5p59esqQjOem1hJKH1x4Bh2QT11cbqdp1Ndu9ey91nQwv8%2BKvQY6pgHIA06UVU2K55rB%2BxM%2FUFic4UZ0j%2FKYclN2qU6OPDGdskPOSdcx9JUgXdHDkFk9Ut%2FVlPNO9hnhnKA3rY1dUWU%2B%2BaNchzdrEtka3MYx1%2Bk5g2BRSdaVtgPwUTMoLDTQNsLorzWNvuowVyQKobb81HeihA117ponSzSKdnntdOOtkfWTXqlOSCd1llO1HQQGw%2F6rQpLsQivQvnQ7soNlHi95Wqwc1Rwx&X-Amz-Signature=fefee189ca856d32dd3608bb8f1f26e60616d5eee61997eead7836795fc3ade2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUBBMFE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAUBstTIGXxcmjXwOEBbNRZA%2BMY5jvN5EH48JN0x4Fc%2FAiBDy4L7iS4G9FyuYv%2Bxi9lfKNevwNvoUNgdRoHsxvkO5ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMEDWwSZqiinMh2em3KtwDKPWoog6Kh93iIvCCYQEvZ8oEoVrTEFzTO%2B9R3ypwB7AAvUrfiIr%2BxmXaXVDZERlX9YeU78wU76bZzCAuN4nslyeeuBnYvxf6ZpSqnMJ6YNvFH2upD6b8hF5ubw%2FeSAG9qPe4bwD0D%2BLmB15HXP2w6wr6QMdMkRiBNAamLhD0MlRsVRbgI2qM2gQzfuUEF%2FtTkzahb0BWL6tOjO%2FgqcL5rtZPQoy2y%2BS1qVsczw0dzFgyLu56s2VWaElnTEskWyJsKTCuVJ%2F2ZLVz0vW43XhgUTLQENQqGuGhoYfGrOqOWX2ZSpH6NNR7gYxe%2B%2FIVV88AqSRoDbPQ1XIW1k3cStRQpi5TXbykmoEvRB3bFdbQG2Z%2B5uy04EzWldkRVVYxdBv1xt6VuhR2%2F0kV%2FrQ8B8vnHKPkqcmNYHCPrKigWrE0i0zY9wRLVFtXvs%2BKus1PZd6V80RqH0CdGWfyvnnfFVhz1p1I0WslWmNT6EOBrm8%2FcrsWnLN%2Fhm20%2BNNYu56R69v0x0jYdUoKIUEMOcqS5iBStWJEBNkH7YP5In3sbrFevD2Mh%2BQS3zjrwsIG8uXKt8QVkYXi2GCGHDJhFQxU5p59esqQjOem1hJKH1x4Bh2QT11cbqdp1Ndu9ey91nQwv8%2BKvQY6pgHIA06UVU2K55rB%2BxM%2FUFic4UZ0j%2FKYclN2qU6OPDGdskPOSdcx9JUgXdHDkFk9Ut%2FVlPNO9hnhnKA3rY1dUWU%2B%2BaNchzdrEtka3MYx1%2Bk5g2BRSdaVtgPwUTMoLDTQNsLorzWNvuowVyQKobb81HeihA117ponSzSKdnntdOOtkfWTXqlOSCd1llO1HQQGw%2F6rQpLsQivQvnQ7soNlHi95Wqwc1Rwx&X-Amz-Signature=b1b27c6769b9cdd5ceb25da9bfa0f3d8ad1fbd321a3504a4a068db6cd3ccd82c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
