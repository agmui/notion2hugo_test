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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CDY6JS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD1uegJpVh9BgIpw2B8vQxTXhJAzgrZ9%2F7ImfvjvqKCUwIhAOHaICGZEVMJ7YGsCzHbOQSN9%2Btc4LFTYoYxRlsZHrrYKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrUV0j%2Brd8h7%2Bw%2FFgq3ANa%2BfhA2%2FwRP8dDCXKW8Cf9JDI79k9j%2FcdFSGlCyr7XSEs6%2Bp9AP0sEudqyNeuC5aFjwb8sX9BIp3kmHw6yMo958u6Q3WCYOIJab7aQyoEwAWJwV2tHxohzrk9Ovxme0YUbfITTG2Bl3gMaGYt45Re3qHoDONYT1sh7e9n7MQygvsHjPzN1OWQ3RMoLllqLmiK8ZHvdwD29p632xdH1LBkps1Gg75TtYJjYzMzjvFKeSXeWWWZhBlbGBV%2FDB578wMmFcjlHcBzUs5KNgrk8mDQ1luvc7FzXBzW9mQ81kgfTaq7gpQ%2Btx%2BUDp5kJxEax%2BWLyJ%2Fai%2F%2BoZyDZaAcQsBUpwSNCdutbc%2BR2Mz52520%2BgeJ3BDV8LyaR%2BOvw581Mbq0u9ZdxRKv84qaf%2BFdnuFl8xo0E3PCDuTWxsFhex8Zf2wkLcW9KiXlWpUzsX6cuIA%2B%2BfQEZ9uyMG2YYMIGgKq7DuzeIxYYCaob1B3D%2BkLpnK7YL85ieDPWWGMxs5F84KXLogNVOJQmnIcJ1ai3E5M13CDeaq3SdKvKvYS3oom6ixWLuCCO449ugdadJyBK2%2BL1a3vnKPvMzG2%2BsE%2BPPrU2C79SiVBfvADIfKrlfZwKIXAxVU4SCcv9feqY%2FNMTCm%2FvbBBjqkAXJM41bRNi5rvsy90pNCretNaz6gLI2MRin2whPR%2BFBfwc7Pt5f0jE2rwqGweQ%2BDPPHT9%2F%2B10LdAXN3e6pSafdxkry%2FL6uQh%2F94DiFBJkHHJg7ZiLipYg7DjQ0TQVTnxAPWraQb6zz8Zmvh0TJduDvBjxGu9NP38C2y9K43LECOQKclTmcUq4btNfklXO5HoCS3WQ2%2BcQJGk2bCjmIT1Lchqd04a&X-Amz-Signature=c470b91785e103c1640c2e50c3f94f2a9787be3cf497bc52e675556d2114c19a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CDY6JS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD1uegJpVh9BgIpw2B8vQxTXhJAzgrZ9%2F7ImfvjvqKCUwIhAOHaICGZEVMJ7YGsCzHbOQSN9%2Btc4LFTYoYxRlsZHrrYKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrUV0j%2Brd8h7%2Bw%2FFgq3ANa%2BfhA2%2FwRP8dDCXKW8Cf9JDI79k9j%2FcdFSGlCyr7XSEs6%2Bp9AP0sEudqyNeuC5aFjwb8sX9BIp3kmHw6yMo958u6Q3WCYOIJab7aQyoEwAWJwV2tHxohzrk9Ovxme0YUbfITTG2Bl3gMaGYt45Re3qHoDONYT1sh7e9n7MQygvsHjPzN1OWQ3RMoLllqLmiK8ZHvdwD29p632xdH1LBkps1Gg75TtYJjYzMzjvFKeSXeWWWZhBlbGBV%2FDB578wMmFcjlHcBzUs5KNgrk8mDQ1luvc7FzXBzW9mQ81kgfTaq7gpQ%2Btx%2BUDp5kJxEax%2BWLyJ%2Fai%2F%2BoZyDZaAcQsBUpwSNCdutbc%2BR2Mz52520%2BgeJ3BDV8LyaR%2BOvw581Mbq0u9ZdxRKv84qaf%2BFdnuFl8xo0E3PCDuTWxsFhex8Zf2wkLcW9KiXlWpUzsX6cuIA%2B%2BfQEZ9uyMG2YYMIGgKq7DuzeIxYYCaob1B3D%2BkLpnK7YL85ieDPWWGMxs5F84KXLogNVOJQmnIcJ1ai3E5M13CDeaq3SdKvKvYS3oom6ixWLuCCO449ugdadJyBK2%2BL1a3vnKPvMzG2%2BsE%2BPPrU2C79SiVBfvADIfKrlfZwKIXAxVU4SCcv9feqY%2FNMTCm%2FvbBBjqkAXJM41bRNi5rvsy90pNCretNaz6gLI2MRin2whPR%2BFBfwc7Pt5f0jE2rwqGweQ%2BDPPHT9%2F%2B10LdAXN3e6pSafdxkry%2FL6uQh%2F94DiFBJkHHJg7ZiLipYg7DjQ0TQVTnxAPWraQb6zz8Zmvh0TJduDvBjxGu9NP38C2y9K43LECOQKclTmcUq4btNfklXO5HoCS3WQ2%2BcQJGk2bCjmIT1Lchqd04a&X-Amz-Signature=6966e84180b2f55e8189e3a5593b25f5e13a8453287f17b22fbec84500d1b9d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CDY6JS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD1uegJpVh9BgIpw2B8vQxTXhJAzgrZ9%2F7ImfvjvqKCUwIhAOHaICGZEVMJ7YGsCzHbOQSN9%2Btc4LFTYoYxRlsZHrrYKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrUV0j%2Brd8h7%2Bw%2FFgq3ANa%2BfhA2%2FwRP8dDCXKW8Cf9JDI79k9j%2FcdFSGlCyr7XSEs6%2Bp9AP0sEudqyNeuC5aFjwb8sX9BIp3kmHw6yMo958u6Q3WCYOIJab7aQyoEwAWJwV2tHxohzrk9Ovxme0YUbfITTG2Bl3gMaGYt45Re3qHoDONYT1sh7e9n7MQygvsHjPzN1OWQ3RMoLllqLmiK8ZHvdwD29p632xdH1LBkps1Gg75TtYJjYzMzjvFKeSXeWWWZhBlbGBV%2FDB578wMmFcjlHcBzUs5KNgrk8mDQ1luvc7FzXBzW9mQ81kgfTaq7gpQ%2Btx%2BUDp5kJxEax%2BWLyJ%2Fai%2F%2BoZyDZaAcQsBUpwSNCdutbc%2BR2Mz52520%2BgeJ3BDV8LyaR%2BOvw581Mbq0u9ZdxRKv84qaf%2BFdnuFl8xo0E3PCDuTWxsFhex8Zf2wkLcW9KiXlWpUzsX6cuIA%2B%2BfQEZ9uyMG2YYMIGgKq7DuzeIxYYCaob1B3D%2BkLpnK7YL85ieDPWWGMxs5F84KXLogNVOJQmnIcJ1ai3E5M13CDeaq3SdKvKvYS3oom6ixWLuCCO449ugdadJyBK2%2BL1a3vnKPvMzG2%2BsE%2BPPrU2C79SiVBfvADIfKrlfZwKIXAxVU4SCcv9feqY%2FNMTCm%2FvbBBjqkAXJM41bRNi5rvsy90pNCretNaz6gLI2MRin2whPR%2BFBfwc7Pt5f0jE2rwqGweQ%2BDPPHT9%2F%2B10LdAXN3e6pSafdxkry%2FL6uQh%2F94DiFBJkHHJg7ZiLipYg7DjQ0TQVTnxAPWraQb6zz8Zmvh0TJduDvBjxGu9NP38C2y9K43LECOQKclTmcUq4btNfklXO5HoCS3WQ2%2BcQJGk2bCjmIT1Lchqd04a&X-Amz-Signature=1e0646bdc499ed5e923038f7b8d5dc93e3602114917e5fee5eec048a5260c8da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
