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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLGQYYM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUjNFBZV9S4aGhiOzSdV7DaPnV4%2FqN3w%2BJUZTvVGW0GAiEA1p11z245DhxRXelRRttTKaje%2Fi4J1q2EmGlBZLlb%2F6sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBENgFgHNTCcWlqFyrcA7SSoC6X7toOroHRpyrRVMJVZd%2Fbs2UhRaTPpsDbaSvBN2V6PwLhcGJ%2F5ojByZUPkw%2BmGF52OvS2i44sK8ZCR8dp6tX9tUhLv1aqowI%2BEWizE1DWJhP7EwLRGsSEtacqBhBaGcD48Z6iAjUD%2B8cJ008hZqXqqreak2s1Gsk58jz34Uj3SluoMHBpqKUgwFoquFRO7UxWcxWohHSBBLo6%2B6qnvZJZi5jhlGLSESincQ%2BXrxuDWRy6VPTHGVgkff1LmfOaOSxrqPGoGmZZfOkbi3sbXXNZBI0xwaOxdZIfA1GdX45AZFz71qfmrc0iyD474JsTm%2BsBhC0Y3HU0i5ScyxR1XsFOaFhzoiH665uJCYExumEx9Xqfqqt59cb6xAFlvpuYjm5aERAjqJKML4H5X9qd5gDu5wHi42C6Ml3gD1a%2FxI5SCsf6yQ%2FczqWgZPIM5Tz4Vzrx6FVj6k7YR%2Fm2diAVriXDF39fcx%2Bi%2FQZjQaeUAW%2FyMDunTkKqkpp36zRm38Zn4QsSiVVFTKIrbAohoktUj9fowupzul5HVER879tfr1QvdbrA%2FoMzVD4y%2BhDavpwVPNd%2FftfSbKuU1T%2FwSUwYUmm3jPNmZTiuDlREEsq%2F9eIeTesEoXn%2FqpTFMPK00MIGOqUBtLCejn518h8yadVQ6mNdJv%2FI5HVhM8YP185XX3yaJbUopOIIMRTonK4lFG%2BrzWooIgsnllWR%2BYenGBSjek%2B6JLhhFayrb6U1qvE9wjl0i1iv8WGaYxb2Hi9snSPQGzrhnXKj4B%2F3w2iftneH2vXEcT24NAI%2FsuiYRTtkTfp7Xybr16wjvKpa5tifHacCNAgSow5c41UwXzAiawJb%2FAxqX0z7vKLX&X-Amz-Signature=b54d3db2e19fa67389039d3e7050027d8e6e4f9c817c4ed4506fb6b765683eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLGQYYM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUjNFBZV9S4aGhiOzSdV7DaPnV4%2FqN3w%2BJUZTvVGW0GAiEA1p11z245DhxRXelRRttTKaje%2Fi4J1q2EmGlBZLlb%2F6sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBENgFgHNTCcWlqFyrcA7SSoC6X7toOroHRpyrRVMJVZd%2Fbs2UhRaTPpsDbaSvBN2V6PwLhcGJ%2F5ojByZUPkw%2BmGF52OvS2i44sK8ZCR8dp6tX9tUhLv1aqowI%2BEWizE1DWJhP7EwLRGsSEtacqBhBaGcD48Z6iAjUD%2B8cJ008hZqXqqreak2s1Gsk58jz34Uj3SluoMHBpqKUgwFoquFRO7UxWcxWohHSBBLo6%2B6qnvZJZi5jhlGLSESincQ%2BXrxuDWRy6VPTHGVgkff1LmfOaOSxrqPGoGmZZfOkbi3sbXXNZBI0xwaOxdZIfA1GdX45AZFz71qfmrc0iyD474JsTm%2BsBhC0Y3HU0i5ScyxR1XsFOaFhzoiH665uJCYExumEx9Xqfqqt59cb6xAFlvpuYjm5aERAjqJKML4H5X9qd5gDu5wHi42C6Ml3gD1a%2FxI5SCsf6yQ%2FczqWgZPIM5Tz4Vzrx6FVj6k7YR%2Fm2diAVriXDF39fcx%2Bi%2FQZjQaeUAW%2FyMDunTkKqkpp36zRm38Zn4QsSiVVFTKIrbAohoktUj9fowupzul5HVER879tfr1QvdbrA%2FoMzVD4y%2BhDavpwVPNd%2FftfSbKuU1T%2FwSUwYUmm3jPNmZTiuDlREEsq%2F9eIeTesEoXn%2FqpTFMPK00MIGOqUBtLCejn518h8yadVQ6mNdJv%2FI5HVhM8YP185XX3yaJbUopOIIMRTonK4lFG%2BrzWooIgsnllWR%2BYenGBSjek%2B6JLhhFayrb6U1qvE9wjl0i1iv8WGaYxb2Hi9snSPQGzrhnXKj4B%2F3w2iftneH2vXEcT24NAI%2FsuiYRTtkTfp7Xybr16wjvKpa5tifHacCNAgSow5c41UwXzAiawJb%2FAxqX0z7vKLX&X-Amz-Signature=023ddf2d2dfd7cc39cecd97224b245f7acb6d6bd123c71c95a84125744c296e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMLGQYYM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUjNFBZV9S4aGhiOzSdV7DaPnV4%2FqN3w%2BJUZTvVGW0GAiEA1p11z245DhxRXelRRttTKaje%2Fi4J1q2EmGlBZLlb%2F6sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBENgFgHNTCcWlqFyrcA7SSoC6X7toOroHRpyrRVMJVZd%2Fbs2UhRaTPpsDbaSvBN2V6PwLhcGJ%2F5ojByZUPkw%2BmGF52OvS2i44sK8ZCR8dp6tX9tUhLv1aqowI%2BEWizE1DWJhP7EwLRGsSEtacqBhBaGcD48Z6iAjUD%2B8cJ008hZqXqqreak2s1Gsk58jz34Uj3SluoMHBpqKUgwFoquFRO7UxWcxWohHSBBLo6%2B6qnvZJZi5jhlGLSESincQ%2BXrxuDWRy6VPTHGVgkff1LmfOaOSxrqPGoGmZZfOkbi3sbXXNZBI0xwaOxdZIfA1GdX45AZFz71qfmrc0iyD474JsTm%2BsBhC0Y3HU0i5ScyxR1XsFOaFhzoiH665uJCYExumEx9Xqfqqt59cb6xAFlvpuYjm5aERAjqJKML4H5X9qd5gDu5wHi42C6Ml3gD1a%2FxI5SCsf6yQ%2FczqWgZPIM5Tz4Vzrx6FVj6k7YR%2Fm2diAVriXDF39fcx%2Bi%2FQZjQaeUAW%2FyMDunTkKqkpp36zRm38Zn4QsSiVVFTKIrbAohoktUj9fowupzul5HVER879tfr1QvdbrA%2FoMzVD4y%2BhDavpwVPNd%2FftfSbKuU1T%2FwSUwYUmm3jPNmZTiuDlREEsq%2F9eIeTesEoXn%2FqpTFMPK00MIGOqUBtLCejn518h8yadVQ6mNdJv%2FI5HVhM8YP185XX3yaJbUopOIIMRTonK4lFG%2BrzWooIgsnllWR%2BYenGBSjek%2B6JLhhFayrb6U1qvE9wjl0i1iv8WGaYxb2Hi9snSPQGzrhnXKj4B%2F3w2iftneH2vXEcT24NAI%2FsuiYRTtkTfp7Xybr16wjvKpa5tifHacCNAgSow5c41UwXzAiawJb%2FAxqX0z7vKLX&X-Amz-Signature=51bf5fa1b37802a947a1de2c6c7d24c92e93e532e030f3c974c8c4d09002d0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
