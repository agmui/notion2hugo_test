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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNTV2AY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDKqyEy794xjRlfOYbw4WwZQu0fb31bOt2sSan0yD0y4wIge%2Bh3ctFsSLsrMBwxBq1CaiuST1O0I3oJFz3bRbq3tEcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrmz8bUvsHLXwYEyyrcA3jps0%2BwIYUVToICnxlmMASYdJZvcwbo7Q574xl1jRKJevAekxHfaKH0dAfC2lQxzvKC8zSWHBR38dic8i0gZKUrATUK91WyanvEK7GTq2zkIdPDFF8rQRXiTWfLHpAYzKgIt9tVuBjcOrgRBWxp0XNXNn1VhpwUaUQJBIM9ECcyXkFTWnlXDObJ6%2BZKTwO9TaAXsCNr452mbYul1cypO%2FmDjdPErdZ5glo1wROlbG%2Fmv4XW6AM7UmegNg9XZdYFC6dB4jezqTua8i0vRxkgfDFwVHIaPfoXb2O0o7P9JPeeSif5fjD%2Fhf5VcEpqZkXDQ5VO21Rf9XGWyxmINjN78tvbEIlcEGY6fLEtj%2BOQS5WCGLoxS7mRPHu1y%2BKGPxI0v7Mmj8lC5GrKJT%2F2tseGh%2BX%2BbatDmoTXwsiUUrTxeNgxWGGNZG8ZlTDLdz8cVVKVUJww3v5LYONYrxL8Y0j1ba0jR7Np9N1UwImdEb5lC2%2FQSammqfhoUbfCoiSOC9vBXPNKQAnqgcAkCgr2Gab2LLDPSIy8jCi%2BRHfQCiMiwrSLCTLBBJXfsEJLsVksAYZ9nK0GfwKhaL47jSJBZHASaC786ttUNMr0PECtdfb0O1SxT7kaTrI478cqQk%2FlMM2HmMMGOqUBGaPXcoi5jt5HRrCDRnOvmnvewQRwuRCW8PLh1VLPHSzOym%2BdgXorxVdzL7kXQHePHohRTvz09Wyx%2B7crhDgywrAl8MfcdZqwtWEV3lD6l8Kt2NsZyvk2B1I3Y1M2KBAb4UItKvv06xHtVvfTFcXznM2UYtg1hJdS2OFgYidDAVQB%2FMi0o1p%2FlJAMqmICwGZdHuFBtpDg5n53RUpJ%2BkTNWZBnuWj7&X-Amz-Signature=0cc419fbfe04be1957c9ac67ea348c55c68e35a55a16eda1855bc36baa1bf51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNTV2AY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDKqyEy794xjRlfOYbw4WwZQu0fb31bOt2sSan0yD0y4wIge%2Bh3ctFsSLsrMBwxBq1CaiuST1O0I3oJFz3bRbq3tEcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrmz8bUvsHLXwYEyyrcA3jps0%2BwIYUVToICnxlmMASYdJZvcwbo7Q574xl1jRKJevAekxHfaKH0dAfC2lQxzvKC8zSWHBR38dic8i0gZKUrATUK91WyanvEK7GTq2zkIdPDFF8rQRXiTWfLHpAYzKgIt9tVuBjcOrgRBWxp0XNXNn1VhpwUaUQJBIM9ECcyXkFTWnlXDObJ6%2BZKTwO9TaAXsCNr452mbYul1cypO%2FmDjdPErdZ5glo1wROlbG%2Fmv4XW6AM7UmegNg9XZdYFC6dB4jezqTua8i0vRxkgfDFwVHIaPfoXb2O0o7P9JPeeSif5fjD%2Fhf5VcEpqZkXDQ5VO21Rf9XGWyxmINjN78tvbEIlcEGY6fLEtj%2BOQS5WCGLoxS7mRPHu1y%2BKGPxI0v7Mmj8lC5GrKJT%2F2tseGh%2BX%2BbatDmoTXwsiUUrTxeNgxWGGNZG8ZlTDLdz8cVVKVUJww3v5LYONYrxL8Y0j1ba0jR7Np9N1UwImdEb5lC2%2FQSammqfhoUbfCoiSOC9vBXPNKQAnqgcAkCgr2Gab2LLDPSIy8jCi%2BRHfQCiMiwrSLCTLBBJXfsEJLsVksAYZ9nK0GfwKhaL47jSJBZHASaC786ttUNMr0PECtdfb0O1SxT7kaTrI478cqQk%2FlMM2HmMMGOqUBGaPXcoi5jt5HRrCDRnOvmnvewQRwuRCW8PLh1VLPHSzOym%2BdgXorxVdzL7kXQHePHohRTvz09Wyx%2B7crhDgywrAl8MfcdZqwtWEV3lD6l8Kt2NsZyvk2B1I3Y1M2KBAb4UItKvv06xHtVvfTFcXznM2UYtg1hJdS2OFgYidDAVQB%2FMi0o1p%2FlJAMqmICwGZdHuFBtpDg5n53RUpJ%2BkTNWZBnuWj7&X-Amz-Signature=2b2d75acd6bd0d52445346ec8b21d04472a68f0af8b7bbfd2f687d5ebfb2f83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNTV2AY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDKqyEy794xjRlfOYbw4WwZQu0fb31bOt2sSan0yD0y4wIge%2Bh3ctFsSLsrMBwxBq1CaiuST1O0I3oJFz3bRbq3tEcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrmz8bUvsHLXwYEyyrcA3jps0%2BwIYUVToICnxlmMASYdJZvcwbo7Q574xl1jRKJevAekxHfaKH0dAfC2lQxzvKC8zSWHBR38dic8i0gZKUrATUK91WyanvEK7GTq2zkIdPDFF8rQRXiTWfLHpAYzKgIt9tVuBjcOrgRBWxp0XNXNn1VhpwUaUQJBIM9ECcyXkFTWnlXDObJ6%2BZKTwO9TaAXsCNr452mbYul1cypO%2FmDjdPErdZ5glo1wROlbG%2Fmv4XW6AM7UmegNg9XZdYFC6dB4jezqTua8i0vRxkgfDFwVHIaPfoXb2O0o7P9JPeeSif5fjD%2Fhf5VcEpqZkXDQ5VO21Rf9XGWyxmINjN78tvbEIlcEGY6fLEtj%2BOQS5WCGLoxS7mRPHu1y%2BKGPxI0v7Mmj8lC5GrKJT%2F2tseGh%2BX%2BbatDmoTXwsiUUrTxeNgxWGGNZG8ZlTDLdz8cVVKVUJww3v5LYONYrxL8Y0j1ba0jR7Np9N1UwImdEb5lC2%2FQSammqfhoUbfCoiSOC9vBXPNKQAnqgcAkCgr2Gab2LLDPSIy8jCi%2BRHfQCiMiwrSLCTLBBJXfsEJLsVksAYZ9nK0GfwKhaL47jSJBZHASaC786ttUNMr0PECtdfb0O1SxT7kaTrI478cqQk%2FlMM2HmMMGOqUBGaPXcoi5jt5HRrCDRnOvmnvewQRwuRCW8PLh1VLPHSzOym%2BdgXorxVdzL7kXQHePHohRTvz09Wyx%2B7crhDgywrAl8MfcdZqwtWEV3lD6l8Kt2NsZyvk2B1I3Y1M2KBAb4UItKvv06xHtVvfTFcXznM2UYtg1hJdS2OFgYidDAVQB%2FMi0o1p%2FlJAMqmICwGZdHuFBtpDg5n53RUpJ%2BkTNWZBnuWj7&X-Amz-Signature=8dbe5e507860f637c7d32fce4c1e6273ffd42ee201e2553bf33ad98086125655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
