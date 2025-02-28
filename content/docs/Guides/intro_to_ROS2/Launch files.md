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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKLV6BA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHmROh2WDE2DeSCvMa66gsaiTG%2BwqEQ1ut0cr4Huv%2B2aAiADkVTg8C3F6gfc7E3ouS4mUNn4ktmyTyojc9cVH%2BFFUiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc9V0wv7o7qJQv3z3KtwD7HQWMcRARPXd56RByqa%2FFyIjHx6urmreQ0C8xb%2FO8Y3gvfqny1g%2BydS%2FQ5sqmorOPDNg3e3j32nchVMTdYugVNIuqeY%2BwDy8qffl1h8wqZ41H0yglJvPBWlJJ91LwKadin2rk1YuK5FFl4bakjBjXRws2s%2BYIySoQvWOeSxSrM5kXtgUto7OHHa%2B48wynan4L12yQt8omeEMX0cvWg8SDBJYjlgnQf%2FdPFWNIh3whhoEJWG2xOsxYXX2z3mxCMgByMZATzpZ9XOZi4BwgpAdwKjNMX7GC3trOZT%2Fs%2B%2BZBgV9mkSmFHTXW%2BS4AkndaE03Wv4xNx1bBM%2BTiDz%2FwEo8044oun2QRYX2AZLOwcuwj1WYdkMEUx2okAUbMSb%2B3vw20tSz68PwuHk5S%2Bxh%2BMKqGNNFfrv9tze2NBpFysHIwhzDem3RGMrRqOI8a%2FUd87zvrdxtgP1N7jMzlSsK%2F6c9yS7FD3iPlbaRMDAm3GZxElA4U8bINQpj6Yx%2BpHINO%2FPemQqwwx2jT1t1g%2BgkwSknejNWM%2BfZLQNUNwYACj2z0fhN7LPuO5SIlkPSfWYJPhGNNQWMknQP1rs84tEWOv68CKODCCcESI8SXWatmN25MIUR7DTUu4voskVd%2BL8w7c2HvgY6pgEPkOK8PFs9v7ApmUltAMVJOL0kkwHpDq1JOphNujQYGPl8TTmfSxXMzyYo3CPWX8usmnvAImXT6USW3oE9B4XWz77nVF5pXY5u9T8xGYl75itvI%2B8MVghgpmREnsl2FEzX3Is2ZCoGPA4swiDVfBoma9yWoSJz6M8AIXcMIdWcHCaqtWhWnughm0gtN4RT2uLOfalNNs8q%2FMKY5gwkDihaEdaBkxu6&X-Amz-Signature=ea48ee2c62ddbdd2d37158ff6c5c7c45cd1664f1679389fac845bc9031ef1cae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKLV6BA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHmROh2WDE2DeSCvMa66gsaiTG%2BwqEQ1ut0cr4Huv%2B2aAiADkVTg8C3F6gfc7E3ouS4mUNn4ktmyTyojc9cVH%2BFFUiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc9V0wv7o7qJQv3z3KtwD7HQWMcRARPXd56RByqa%2FFyIjHx6urmreQ0C8xb%2FO8Y3gvfqny1g%2BydS%2FQ5sqmorOPDNg3e3j32nchVMTdYugVNIuqeY%2BwDy8qffl1h8wqZ41H0yglJvPBWlJJ91LwKadin2rk1YuK5FFl4bakjBjXRws2s%2BYIySoQvWOeSxSrM5kXtgUto7OHHa%2B48wynan4L12yQt8omeEMX0cvWg8SDBJYjlgnQf%2FdPFWNIh3whhoEJWG2xOsxYXX2z3mxCMgByMZATzpZ9XOZi4BwgpAdwKjNMX7GC3trOZT%2Fs%2B%2BZBgV9mkSmFHTXW%2BS4AkndaE03Wv4xNx1bBM%2BTiDz%2FwEo8044oun2QRYX2AZLOwcuwj1WYdkMEUx2okAUbMSb%2B3vw20tSz68PwuHk5S%2Bxh%2BMKqGNNFfrv9tze2NBpFysHIwhzDem3RGMrRqOI8a%2FUd87zvrdxtgP1N7jMzlSsK%2F6c9yS7FD3iPlbaRMDAm3GZxElA4U8bINQpj6Yx%2BpHINO%2FPemQqwwx2jT1t1g%2BgkwSknejNWM%2BfZLQNUNwYACj2z0fhN7LPuO5SIlkPSfWYJPhGNNQWMknQP1rs84tEWOv68CKODCCcESI8SXWatmN25MIUR7DTUu4voskVd%2BL8w7c2HvgY6pgEPkOK8PFs9v7ApmUltAMVJOL0kkwHpDq1JOphNujQYGPl8TTmfSxXMzyYo3CPWX8usmnvAImXT6USW3oE9B4XWz77nVF5pXY5u9T8xGYl75itvI%2B8MVghgpmREnsl2FEzX3Is2ZCoGPA4swiDVfBoma9yWoSJz6M8AIXcMIdWcHCaqtWhWnughm0gtN4RT2uLOfalNNs8q%2FMKY5gwkDihaEdaBkxu6&X-Amz-Signature=6e29e0ee6a24a9a1c96500d6221bb80c9c6faccf8cd83f2131d9dc919a810e20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKLV6BA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHmROh2WDE2DeSCvMa66gsaiTG%2BwqEQ1ut0cr4Huv%2B2aAiADkVTg8C3F6gfc7E3ouS4mUNn4ktmyTyojc9cVH%2BFFUiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc9V0wv7o7qJQv3z3KtwD7HQWMcRARPXd56RByqa%2FFyIjHx6urmreQ0C8xb%2FO8Y3gvfqny1g%2BydS%2FQ5sqmorOPDNg3e3j32nchVMTdYugVNIuqeY%2BwDy8qffl1h8wqZ41H0yglJvPBWlJJ91LwKadin2rk1YuK5FFl4bakjBjXRws2s%2BYIySoQvWOeSxSrM5kXtgUto7OHHa%2B48wynan4L12yQt8omeEMX0cvWg8SDBJYjlgnQf%2FdPFWNIh3whhoEJWG2xOsxYXX2z3mxCMgByMZATzpZ9XOZi4BwgpAdwKjNMX7GC3trOZT%2Fs%2B%2BZBgV9mkSmFHTXW%2BS4AkndaE03Wv4xNx1bBM%2BTiDz%2FwEo8044oun2QRYX2AZLOwcuwj1WYdkMEUx2okAUbMSb%2B3vw20tSz68PwuHk5S%2Bxh%2BMKqGNNFfrv9tze2NBpFysHIwhzDem3RGMrRqOI8a%2FUd87zvrdxtgP1N7jMzlSsK%2F6c9yS7FD3iPlbaRMDAm3GZxElA4U8bINQpj6Yx%2BpHINO%2FPemQqwwx2jT1t1g%2BgkwSknejNWM%2BfZLQNUNwYACj2z0fhN7LPuO5SIlkPSfWYJPhGNNQWMknQP1rs84tEWOv68CKODCCcESI8SXWatmN25MIUR7DTUu4voskVd%2BL8w7c2HvgY6pgEPkOK8PFs9v7ApmUltAMVJOL0kkwHpDq1JOphNujQYGPl8TTmfSxXMzyYo3CPWX8usmnvAImXT6USW3oE9B4XWz77nVF5pXY5u9T8xGYl75itvI%2B8MVghgpmREnsl2FEzX3Is2ZCoGPA4swiDVfBoma9yWoSJz6M8AIXcMIdWcHCaqtWhWnughm0gtN4RT2uLOfalNNs8q%2FMKY5gwkDihaEdaBkxu6&X-Amz-Signature=45ae2aec13bc5a9114ce63c269e92f7b6143d02c410e6bdb5236393fe19981da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
