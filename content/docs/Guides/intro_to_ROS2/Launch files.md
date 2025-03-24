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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQKAL5C%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWB66PLbtmZMpGV4gIdmkzOIZjBXDNjQn1fDVAjxMWAiEAz3MawM3PY526Vyr2X62rdoX2e%2B5lCsF24jb1R6W5%2FBwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDvFPEXYwg12FolxSrcAwjzsCIkL0fCgC5S7O6ucdQBCxEMOc5eV5DVg6LgxPZlwByF4aDJY03%2FtIOVvtWKc62b7xntn2Rynvdno%2FmQkqhWxycHyNzr7JZm4lJJ7wXYgBazO8dNV0MBY9zzQhjW1Slj5qSQ3p9MFr6OkpWt2a5SYI9vFe1TtpiUM0v7KoodhAbapgxJ4QuLpu1WkdhK4pTxCwUpVkHykP5R3WGXUKwbtF198Ijk4koMHwizfglJ6uZ5Ijz2lodMd5M6G%2B5x2o%2FOREYIw41Xx1g9EVxpl5E7VQeIP448BFSRYbYmPJIdXv50oyKJftKFn%2FlIvBYEOyD5CndxAnbOZffD1dl%2B3z3WFFbg5Ip1STyvc9Vx%2Bn8eq8rTMsZ%2FfsRPIYbU3iTe3TzZfAwlSxp9TSceAhvJNL4gDce1%2BiWkqJZJ%2FbPc%2F5IRCqpdu6cp1n1NYAYBcuQwvSq2kx0AA3OFKzLSqXAv3YdE7DGiMWyvzDirgfWKa2gCebayCD9ZtwnAFO4vaG6khvDmT0mQ2IrFZU6NQktWd19Rn4Nk5mKi5aLWWVFohYOXA8z6RWcuvgkDZ1KKErUjKQqnb7JrzM7U8uimJQKQ%2BN2WsNTfQbr5%2Bc42PsIB7SU7mZyk6yikgokY4%2BaRMMDFhL8GOqUByVZN0leyYkqPnfieuZs7oMeQ8TK4im9%2BwZln%2BdkXDGHUKfwAVfp72bFMUQSIZsxH0%2BDW%2Bh1YBStqNMxw14uPhKndB212QCDS%2BNt8Sanxg5%2BproMFjTsgjp8uDg6c4%2BuyBfICtvr6poGLH0Ume1IDukTELkhGDklJqPycIzEukO2YWPbyGhWGtzFXX%2FRe%2BG5Qns7aHRFVtdKDp%2Fg%2FT5UlgByKBGOU&X-Amz-Signature=6d952c1b82d8fc313beecf6781f044e77c13ae5c990294853b0db4fc835dd4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQKAL5C%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWB66PLbtmZMpGV4gIdmkzOIZjBXDNjQn1fDVAjxMWAiEAz3MawM3PY526Vyr2X62rdoX2e%2B5lCsF24jb1R6W5%2FBwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDvFPEXYwg12FolxSrcAwjzsCIkL0fCgC5S7O6ucdQBCxEMOc5eV5DVg6LgxPZlwByF4aDJY03%2FtIOVvtWKc62b7xntn2Rynvdno%2FmQkqhWxycHyNzr7JZm4lJJ7wXYgBazO8dNV0MBY9zzQhjW1Slj5qSQ3p9MFr6OkpWt2a5SYI9vFe1TtpiUM0v7KoodhAbapgxJ4QuLpu1WkdhK4pTxCwUpVkHykP5R3WGXUKwbtF198Ijk4koMHwizfglJ6uZ5Ijz2lodMd5M6G%2B5x2o%2FOREYIw41Xx1g9EVxpl5E7VQeIP448BFSRYbYmPJIdXv50oyKJftKFn%2FlIvBYEOyD5CndxAnbOZffD1dl%2B3z3WFFbg5Ip1STyvc9Vx%2Bn8eq8rTMsZ%2FfsRPIYbU3iTe3TzZfAwlSxp9TSceAhvJNL4gDce1%2BiWkqJZJ%2FbPc%2F5IRCqpdu6cp1n1NYAYBcuQwvSq2kx0AA3OFKzLSqXAv3YdE7DGiMWyvzDirgfWKa2gCebayCD9ZtwnAFO4vaG6khvDmT0mQ2IrFZU6NQktWd19Rn4Nk5mKi5aLWWVFohYOXA8z6RWcuvgkDZ1KKErUjKQqnb7JrzM7U8uimJQKQ%2BN2WsNTfQbr5%2Bc42PsIB7SU7mZyk6yikgokY4%2BaRMMDFhL8GOqUByVZN0leyYkqPnfieuZs7oMeQ8TK4im9%2BwZln%2BdkXDGHUKfwAVfp72bFMUQSIZsxH0%2BDW%2Bh1YBStqNMxw14uPhKndB212QCDS%2BNt8Sanxg5%2BproMFjTsgjp8uDg6c4%2BuyBfICtvr6poGLH0Ume1IDukTELkhGDklJqPycIzEukO2YWPbyGhWGtzFXX%2FRe%2BG5Qns7aHRFVtdKDp%2Fg%2FT5UlgByKBGOU&X-Amz-Signature=6859fa18695fa974eb687bde44dc4a279baea1d821cc0448dbaa50cd62a8708a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQKAL5C%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsWB66PLbtmZMpGV4gIdmkzOIZjBXDNjQn1fDVAjxMWAiEAz3MawM3PY526Vyr2X62rdoX2e%2B5lCsF24jb1R6W5%2FBwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDvFPEXYwg12FolxSrcAwjzsCIkL0fCgC5S7O6ucdQBCxEMOc5eV5DVg6LgxPZlwByF4aDJY03%2FtIOVvtWKc62b7xntn2Rynvdno%2FmQkqhWxycHyNzr7JZm4lJJ7wXYgBazO8dNV0MBY9zzQhjW1Slj5qSQ3p9MFr6OkpWt2a5SYI9vFe1TtpiUM0v7KoodhAbapgxJ4QuLpu1WkdhK4pTxCwUpVkHykP5R3WGXUKwbtF198Ijk4koMHwizfglJ6uZ5Ijz2lodMd5M6G%2B5x2o%2FOREYIw41Xx1g9EVxpl5E7VQeIP448BFSRYbYmPJIdXv50oyKJftKFn%2FlIvBYEOyD5CndxAnbOZffD1dl%2B3z3WFFbg5Ip1STyvc9Vx%2Bn8eq8rTMsZ%2FfsRPIYbU3iTe3TzZfAwlSxp9TSceAhvJNL4gDce1%2BiWkqJZJ%2FbPc%2F5IRCqpdu6cp1n1NYAYBcuQwvSq2kx0AA3OFKzLSqXAv3YdE7DGiMWyvzDirgfWKa2gCebayCD9ZtwnAFO4vaG6khvDmT0mQ2IrFZU6NQktWd19Rn4Nk5mKi5aLWWVFohYOXA8z6RWcuvgkDZ1KKErUjKQqnb7JrzM7U8uimJQKQ%2BN2WsNTfQbr5%2Bc42PsIB7SU7mZyk6yikgokY4%2BaRMMDFhL8GOqUByVZN0leyYkqPnfieuZs7oMeQ8TK4im9%2BwZln%2BdkXDGHUKfwAVfp72bFMUQSIZsxH0%2BDW%2Bh1YBStqNMxw14uPhKndB212QCDS%2BNt8Sanxg5%2BproMFjTsgjp8uDg6c4%2BuyBfICtvr6poGLH0Ume1IDukTELkhGDklJqPycIzEukO2YWPbyGhWGtzFXX%2FRe%2BG5Qns7aHRFVtdKDp%2Fg%2FT5UlgByKBGOU&X-Amz-Signature=837101b7547356e4c1831e3409cc80afc6f36fc1fd453dd3d1bf2492f9bd1e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
