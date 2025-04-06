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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZT3OVK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiK2%2BbRhBu8C0M3%2F2hrCMFc5lJR%2FpolSFU50k7MzWc8gIhAKxw3ZPr8CHFtcSBmrd8nOQMzbv7%2BqHOm%2FunE1M5wH5WKv8DCEIQABoMNjM3NDIzMTgzODA1Igzk2IrItA842gzVaFMq3APQbrp54BL%2BpbUWU9Hk5vK%2BCNfLg%2FCuuTxZ7v3ikiQL6tEN2vddh4QALfX3ogbFb%2BD1MKk%2FEWlKMMv51sj5KOUA9GzK8%2FGcoV23VkQ5J5Xj%2F1%2BB6Uw27jUs5a%2FCjSrActoDvB6yf9n8xsapIEdmaRM%2FVpTg6jRSzTXJrxKx94w5PUQwcLXs1BRisks3FmkmfrOE66iF8%2BlasihXtmV0aLaOiTdIJaose93486xJ832ynLpNAbCgcuCEI5CS9SPM9L%2F%2FDXxbDaNfuR4xEoirCtj3qqjh6lpOQZuiFOfko74OLY5UW7n2g4kURerR1by%2Frivk26cmKKkxhrGwjxwHxJfuUBG9253bhXdQ9WGrXlEkPWEtTrSrfHbxTe%2FsWSOzF8zvvTgjX%2FAuUsiX3%2FADMsMYwWriVsaE9ThEys4GVtXCzhyi0qWQB%2BkBFUzlaa4tAfNoSaZPyLyVUsyGeSX6voyPRm2VFBTRJgVC9WQfzMQ3rH9MdNPuGmEr6dmCIJ7sFt8m61ILj5N9EotXNajtn0gel7ne2rZbwA3CvatTGae8ADcxgD8m6o0u88tx3KBIKymrtKE65MdDRNHpJSDz1TXSm%2FiUF%2FfiI6ryz6Wom2yMDytyeBYHX06RTG3JaDC1%2Fsi%2FBjqkATgDst60qVhN9dzcfoOXlDBs17p7QqsNAat7WXeYGaNmMnPwZt5cnBN8eJhNy1fKns6ofuASeZ62UiWWFhwwlWugAJVy5lx3nMvLuUJkO6vIrszvtjCSeRMG03%2Bdkvia5ngTqZgO68eFlmN1Jqmp3NiDW97Uy%2FbqUuoOBHjThMVAFHfVTdEDg5n9UO%2BkgEKHF98Tb1lAj%2FGcUxdx%2Bp0bLBQc7MGv&X-Amz-Signature=16d6f77672a34aa59112e5b608f1f96b927a893cc02a97ecc8cec67196878168&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZT3OVK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiK2%2BbRhBu8C0M3%2F2hrCMFc5lJR%2FpolSFU50k7MzWc8gIhAKxw3ZPr8CHFtcSBmrd8nOQMzbv7%2BqHOm%2FunE1M5wH5WKv8DCEIQABoMNjM3NDIzMTgzODA1Igzk2IrItA842gzVaFMq3APQbrp54BL%2BpbUWU9Hk5vK%2BCNfLg%2FCuuTxZ7v3ikiQL6tEN2vddh4QALfX3ogbFb%2BD1MKk%2FEWlKMMv51sj5KOUA9GzK8%2FGcoV23VkQ5J5Xj%2F1%2BB6Uw27jUs5a%2FCjSrActoDvB6yf9n8xsapIEdmaRM%2FVpTg6jRSzTXJrxKx94w5PUQwcLXs1BRisks3FmkmfrOE66iF8%2BlasihXtmV0aLaOiTdIJaose93486xJ832ynLpNAbCgcuCEI5CS9SPM9L%2F%2FDXxbDaNfuR4xEoirCtj3qqjh6lpOQZuiFOfko74OLY5UW7n2g4kURerR1by%2Frivk26cmKKkxhrGwjxwHxJfuUBG9253bhXdQ9WGrXlEkPWEtTrSrfHbxTe%2FsWSOzF8zvvTgjX%2FAuUsiX3%2FADMsMYwWriVsaE9ThEys4GVtXCzhyi0qWQB%2BkBFUzlaa4tAfNoSaZPyLyVUsyGeSX6voyPRm2VFBTRJgVC9WQfzMQ3rH9MdNPuGmEr6dmCIJ7sFt8m61ILj5N9EotXNajtn0gel7ne2rZbwA3CvatTGae8ADcxgD8m6o0u88tx3KBIKymrtKE65MdDRNHpJSDz1TXSm%2FiUF%2FfiI6ryz6Wom2yMDytyeBYHX06RTG3JaDC1%2Fsi%2FBjqkATgDst60qVhN9dzcfoOXlDBs17p7QqsNAat7WXeYGaNmMnPwZt5cnBN8eJhNy1fKns6ofuASeZ62UiWWFhwwlWugAJVy5lx3nMvLuUJkO6vIrszvtjCSeRMG03%2Bdkvia5ngTqZgO68eFlmN1Jqmp3NiDW97Uy%2FbqUuoOBHjThMVAFHfVTdEDg5n9UO%2BkgEKHF98Tb1lAj%2FGcUxdx%2Bp0bLBQc7MGv&X-Amz-Signature=d6f605778262764044adf33b73bf2c5461c74012e10d01f0e4883fcf5120bd7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZT3OVK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiK2%2BbRhBu8C0M3%2F2hrCMFc5lJR%2FpolSFU50k7MzWc8gIhAKxw3ZPr8CHFtcSBmrd8nOQMzbv7%2BqHOm%2FunE1M5wH5WKv8DCEIQABoMNjM3NDIzMTgzODA1Igzk2IrItA842gzVaFMq3APQbrp54BL%2BpbUWU9Hk5vK%2BCNfLg%2FCuuTxZ7v3ikiQL6tEN2vddh4QALfX3ogbFb%2BD1MKk%2FEWlKMMv51sj5KOUA9GzK8%2FGcoV23VkQ5J5Xj%2F1%2BB6Uw27jUs5a%2FCjSrActoDvB6yf9n8xsapIEdmaRM%2FVpTg6jRSzTXJrxKx94w5PUQwcLXs1BRisks3FmkmfrOE66iF8%2BlasihXtmV0aLaOiTdIJaose93486xJ832ynLpNAbCgcuCEI5CS9SPM9L%2F%2FDXxbDaNfuR4xEoirCtj3qqjh6lpOQZuiFOfko74OLY5UW7n2g4kURerR1by%2Frivk26cmKKkxhrGwjxwHxJfuUBG9253bhXdQ9WGrXlEkPWEtTrSrfHbxTe%2FsWSOzF8zvvTgjX%2FAuUsiX3%2FADMsMYwWriVsaE9ThEys4GVtXCzhyi0qWQB%2BkBFUzlaa4tAfNoSaZPyLyVUsyGeSX6voyPRm2VFBTRJgVC9WQfzMQ3rH9MdNPuGmEr6dmCIJ7sFt8m61ILj5N9EotXNajtn0gel7ne2rZbwA3CvatTGae8ADcxgD8m6o0u88tx3KBIKymrtKE65MdDRNHpJSDz1TXSm%2FiUF%2FfiI6ryz6Wom2yMDytyeBYHX06RTG3JaDC1%2Fsi%2FBjqkATgDst60qVhN9dzcfoOXlDBs17p7QqsNAat7WXeYGaNmMnPwZt5cnBN8eJhNy1fKns6ofuASeZ62UiWWFhwwlWugAJVy5lx3nMvLuUJkO6vIrszvtjCSeRMG03%2Bdkvia5ngTqZgO68eFlmN1Jqmp3NiDW97Uy%2FbqUuoOBHjThMVAFHfVTdEDg5n9UO%2BkgEKHF98Tb1lAj%2FGcUxdx%2Bp0bLBQc7MGv&X-Amz-Signature=2c635e3e97e8455c28e7a5db0d82db4b5c43f5d844746f788f12d26d8d672db9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
