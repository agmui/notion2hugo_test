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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGOWZO2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDS5amZJ%2BEQ02acBkoIaabbnFisp%2FlTtJ5gRk4qmaMwogIgATOB97YYllRnFcvdoJdVIept3g0vPDKk1THdt0iR%2BoQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiUwYIoUP3IXhr%2BtCrcAw3QFtvQHUeBkEtAsdgxXdZQyTRi7VtO5qUVLAeJSiz9eVcauL0d0kBgHeSMbXh01n8wVRurTUqxCzR5xhyoeTnhF%2Fs%2ByAMXO7wipbStA4oAjU5%2BDKOynbgDPQxE7hjo5Iaj6Ef9u1fkE694y4%2BBJ6KiB7DK2j%2FD28YXKzCgN1queP6Jpg58evCnjV93TQQY%2B1iZKlPVKhtoBris%2FlJ7aNHibYO3xJw0qPmWNtZsMKVb9dZnfOwxNPXXhFCn98Vs8vD6H5MqHKJKb4va5eKF4e33bgyzyD5MwLBIC3525wnGeO337kuErYmIzt5s7o4WJQWUtjq9GZpT%2BaUnCBRCYCi5dEBDL%2FsjQvnEpGw%2FtsmSEaOOhkRLyM9in2%2B0PBA%2FHkIz6%2FRpWkRApW1YoopctHvpMhxdhmVPDSpf8hF2BL8nC0T0vqwPrTo5DdyTZHlaELaR1fukyp%2BfYzWRvLnSGl0s6oeBsLASRxibF%2FDbzpsMiY8nMSoPKE1SySbEc8arTxGGrGe%2Boi%2BJCn4BlDP3s05u2VU81ELB8ccoHjfp9FQk5Ag66%2FNt63cvPQksxvl9Rd3ZFbg2kvgvkJU8jWKQcVxnJCTyWdHoXd2bD3V1IX8axLxLb9SubJalWTCIMJGJmMAGOqUBucBBdTjEQZiInzmmeHiCdgEL5RxRomulDgxGaMsmV%2ByY37yGdsfr4Xcx6EsKks54t4EmuWFEyvePS4gv1oBSC8iUiVmfY3HsYctx5QQ3AZIM%2BD3a6TBosLA7tiPMHpxMt8kZKCLrDK50HBQfSnY8yMUdqZklSSFT45pcAjsWr3n5AAIn1N2M%2BgTpmNRDR6oQXDNDMBSlsaVFev%2FZI%2Bvn6Ku6IihS&X-Amz-Signature=cadf7b83aa0ada5a3f3362d35e0550885f7c74a9b289b9c7c90d34da3c20fbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGOWZO2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDS5amZJ%2BEQ02acBkoIaabbnFisp%2FlTtJ5gRk4qmaMwogIgATOB97YYllRnFcvdoJdVIept3g0vPDKk1THdt0iR%2BoQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiUwYIoUP3IXhr%2BtCrcAw3QFtvQHUeBkEtAsdgxXdZQyTRi7VtO5qUVLAeJSiz9eVcauL0d0kBgHeSMbXh01n8wVRurTUqxCzR5xhyoeTnhF%2Fs%2ByAMXO7wipbStA4oAjU5%2BDKOynbgDPQxE7hjo5Iaj6Ef9u1fkE694y4%2BBJ6KiB7DK2j%2FD28YXKzCgN1queP6Jpg58evCnjV93TQQY%2B1iZKlPVKhtoBris%2FlJ7aNHibYO3xJw0qPmWNtZsMKVb9dZnfOwxNPXXhFCn98Vs8vD6H5MqHKJKb4va5eKF4e33bgyzyD5MwLBIC3525wnGeO337kuErYmIzt5s7o4WJQWUtjq9GZpT%2BaUnCBRCYCi5dEBDL%2FsjQvnEpGw%2FtsmSEaOOhkRLyM9in2%2B0PBA%2FHkIz6%2FRpWkRApW1YoopctHvpMhxdhmVPDSpf8hF2BL8nC0T0vqwPrTo5DdyTZHlaELaR1fukyp%2BfYzWRvLnSGl0s6oeBsLASRxibF%2FDbzpsMiY8nMSoPKE1SySbEc8arTxGGrGe%2Boi%2BJCn4BlDP3s05u2VU81ELB8ccoHjfp9FQk5Ag66%2FNt63cvPQksxvl9Rd3ZFbg2kvgvkJU8jWKQcVxnJCTyWdHoXd2bD3V1IX8axLxLb9SubJalWTCIMJGJmMAGOqUBucBBdTjEQZiInzmmeHiCdgEL5RxRomulDgxGaMsmV%2ByY37yGdsfr4Xcx6EsKks54t4EmuWFEyvePS4gv1oBSC8iUiVmfY3HsYctx5QQ3AZIM%2BD3a6TBosLA7tiPMHpxMt8kZKCLrDK50HBQfSnY8yMUdqZklSSFT45pcAjsWr3n5AAIn1N2M%2BgTpmNRDR6oQXDNDMBSlsaVFev%2FZI%2Bvn6Ku6IihS&X-Amz-Signature=002f40ea4d3b87003b1e73eefefa96ce0b7496967ccc6d30698b00cc34f64b69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGOWZO2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDS5amZJ%2BEQ02acBkoIaabbnFisp%2FlTtJ5gRk4qmaMwogIgATOB97YYllRnFcvdoJdVIept3g0vPDKk1THdt0iR%2BoQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiUwYIoUP3IXhr%2BtCrcAw3QFtvQHUeBkEtAsdgxXdZQyTRi7VtO5qUVLAeJSiz9eVcauL0d0kBgHeSMbXh01n8wVRurTUqxCzR5xhyoeTnhF%2Fs%2ByAMXO7wipbStA4oAjU5%2BDKOynbgDPQxE7hjo5Iaj6Ef9u1fkE694y4%2BBJ6KiB7DK2j%2FD28YXKzCgN1queP6Jpg58evCnjV93TQQY%2B1iZKlPVKhtoBris%2FlJ7aNHibYO3xJw0qPmWNtZsMKVb9dZnfOwxNPXXhFCn98Vs8vD6H5MqHKJKb4va5eKF4e33bgyzyD5MwLBIC3525wnGeO337kuErYmIzt5s7o4WJQWUtjq9GZpT%2BaUnCBRCYCi5dEBDL%2FsjQvnEpGw%2FtsmSEaOOhkRLyM9in2%2B0PBA%2FHkIz6%2FRpWkRApW1YoopctHvpMhxdhmVPDSpf8hF2BL8nC0T0vqwPrTo5DdyTZHlaELaR1fukyp%2BfYzWRvLnSGl0s6oeBsLASRxibF%2FDbzpsMiY8nMSoPKE1SySbEc8arTxGGrGe%2Boi%2BJCn4BlDP3s05u2VU81ELB8ccoHjfp9FQk5Ag66%2FNt63cvPQksxvl9Rd3ZFbg2kvgvkJU8jWKQcVxnJCTyWdHoXd2bD3V1IX8axLxLb9SubJalWTCIMJGJmMAGOqUBucBBdTjEQZiInzmmeHiCdgEL5RxRomulDgxGaMsmV%2ByY37yGdsfr4Xcx6EsKks54t4EmuWFEyvePS4gv1oBSC8iUiVmfY3HsYctx5QQ3AZIM%2BD3a6TBosLA7tiPMHpxMt8kZKCLrDK50HBQfSnY8yMUdqZklSSFT45pcAjsWr3n5AAIn1N2M%2BgTpmNRDR6oQXDNDMBSlsaVFev%2FZI%2Bvn6Ku6IihS&X-Amz-Signature=54712ffc999d6798c2602904d7dcc03ad60e91e71226b672f1885862937700b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
