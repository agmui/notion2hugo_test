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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TML7ZLWN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV477%2BMq95IBXLN4JHyERcaC8fhXmqcjDXH9D2Dum5BAiAzNDMokBU0A9rRywS8b04voSlKJri2r1XKtdD1tMHYhCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgwmYJGSg5loUE2QKtwDrLv1kSofWp6zddvM7w1cYJoFZSW0bmfddPzcKPxt9Ij%2FrSWwu6DuDH8u%2FAaUoqH2dC6tQX%2FwaHx6Ej9En4GsBOtcEbYzHKGyq03Ci5iTmGse396fM%2FrUl0XkyL%2B1AmgFArtBzsSFGqmKDANbuou0hek3IntTLoclS1yWNWx3DXuUfcA63oqQ9prjvm%2BGG%2FCAWqQ%2FJjT%2BKEGljJ01VS4V3BjVg5ReuVweAAYjnh4Kz%2FodyAnxquGnV22HGGOhyunPImo4XmSvkIoez%2BErXHPlF2pWDk03nWvw%2FUDiV9ozRGsaxRVgq7CAqplyqYezKS%2BcfY2papRnH4M9KG3U7oiOsAd9HMycFAr2TDFj4MgjSfMxGE2vyvNmRAD2cyDW2sMkHaqtrtgQlxXAg8G0%2Fe6KhIvSs1IkbmfmjIpGfitAXVjGNfSBXZDUE4sjXtCpmBvwYOqEHQRJ41kWzzdd1Ab7C%2FIK1SWdXaNzVET2mM0tjz8%2B1GxPJUJsOChLz2qkyq%2FjCyGITeADJWLXTD1Z4atziZ9ZqtZXvhEYtpqN9CxmJ1POhYN%2FfImuUzxnEqD%2BikprUjkt768tKmpyM6r7ILwksOADeNdsRw9DPAAAit2QceBQ97TJNr4CyE3wO8Mws7HdvQY6pgEmzS0ZDU%2BqRysFkHkdli%2F2dXOoZQD6KEvWqGMteIJlmwIM59NUTcC7BtIVhNImlK47uOBRdyc2sxg8xXVP45y60lfqHgjP%2F0%2BzCgRfMTNuQi%2BCwLU%2F0OgCV5JWhmP%2BNCpXaUJFk2nPBt7Q6CfyUvGZGitX7iWOTB2jB94CzKHopzOZgVSap%2BS8ASKbVDPWxA2Vz2yaIJ9xzPoUsATVoDtDilsjssKL&X-Amz-Signature=3ac26b8c786095584c07507e00a8683cf29de9c468177818ed31a071803f3cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TML7ZLWN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV477%2BMq95IBXLN4JHyERcaC8fhXmqcjDXH9D2Dum5BAiAzNDMokBU0A9rRywS8b04voSlKJri2r1XKtdD1tMHYhCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgwmYJGSg5loUE2QKtwDrLv1kSofWp6zddvM7w1cYJoFZSW0bmfddPzcKPxt9Ij%2FrSWwu6DuDH8u%2FAaUoqH2dC6tQX%2FwaHx6Ej9En4GsBOtcEbYzHKGyq03Ci5iTmGse396fM%2FrUl0XkyL%2B1AmgFArtBzsSFGqmKDANbuou0hek3IntTLoclS1yWNWx3DXuUfcA63oqQ9prjvm%2BGG%2FCAWqQ%2FJjT%2BKEGljJ01VS4V3BjVg5ReuVweAAYjnh4Kz%2FodyAnxquGnV22HGGOhyunPImo4XmSvkIoez%2BErXHPlF2pWDk03nWvw%2FUDiV9ozRGsaxRVgq7CAqplyqYezKS%2BcfY2papRnH4M9KG3U7oiOsAd9HMycFAr2TDFj4MgjSfMxGE2vyvNmRAD2cyDW2sMkHaqtrtgQlxXAg8G0%2Fe6KhIvSs1IkbmfmjIpGfitAXVjGNfSBXZDUE4sjXtCpmBvwYOqEHQRJ41kWzzdd1Ab7C%2FIK1SWdXaNzVET2mM0tjz8%2B1GxPJUJsOChLz2qkyq%2FjCyGITeADJWLXTD1Z4atziZ9ZqtZXvhEYtpqN9CxmJ1POhYN%2FfImuUzxnEqD%2BikprUjkt768tKmpyM6r7ILwksOADeNdsRw9DPAAAit2QceBQ97TJNr4CyE3wO8Mws7HdvQY6pgEmzS0ZDU%2BqRysFkHkdli%2F2dXOoZQD6KEvWqGMteIJlmwIM59NUTcC7BtIVhNImlK47uOBRdyc2sxg8xXVP45y60lfqHgjP%2F0%2BzCgRfMTNuQi%2BCwLU%2F0OgCV5JWhmP%2BNCpXaUJFk2nPBt7Q6CfyUvGZGitX7iWOTB2jB94CzKHopzOZgVSap%2BS8ASKbVDPWxA2Vz2yaIJ9xzPoUsATVoDtDilsjssKL&X-Amz-Signature=9c981797d47050a0cfcd8ff4ea941a5076ec38c8036fab190be24ab88796c1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TML7ZLWN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV477%2BMq95IBXLN4JHyERcaC8fhXmqcjDXH9D2Dum5BAiAzNDMokBU0A9rRywS8b04voSlKJri2r1XKtdD1tMHYhCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxgwmYJGSg5loUE2QKtwDrLv1kSofWp6zddvM7w1cYJoFZSW0bmfddPzcKPxt9Ij%2FrSWwu6DuDH8u%2FAaUoqH2dC6tQX%2FwaHx6Ej9En4GsBOtcEbYzHKGyq03Ci5iTmGse396fM%2FrUl0XkyL%2B1AmgFArtBzsSFGqmKDANbuou0hek3IntTLoclS1yWNWx3DXuUfcA63oqQ9prjvm%2BGG%2FCAWqQ%2FJjT%2BKEGljJ01VS4V3BjVg5ReuVweAAYjnh4Kz%2FodyAnxquGnV22HGGOhyunPImo4XmSvkIoez%2BErXHPlF2pWDk03nWvw%2FUDiV9ozRGsaxRVgq7CAqplyqYezKS%2BcfY2papRnH4M9KG3U7oiOsAd9HMycFAr2TDFj4MgjSfMxGE2vyvNmRAD2cyDW2sMkHaqtrtgQlxXAg8G0%2Fe6KhIvSs1IkbmfmjIpGfitAXVjGNfSBXZDUE4sjXtCpmBvwYOqEHQRJ41kWzzdd1Ab7C%2FIK1SWdXaNzVET2mM0tjz8%2B1GxPJUJsOChLz2qkyq%2FjCyGITeADJWLXTD1Z4atziZ9ZqtZXvhEYtpqN9CxmJ1POhYN%2FfImuUzxnEqD%2BikprUjkt768tKmpyM6r7ILwksOADeNdsRw9DPAAAit2QceBQ97TJNr4CyE3wO8Mws7HdvQY6pgEmzS0ZDU%2BqRysFkHkdli%2F2dXOoZQD6KEvWqGMteIJlmwIM59NUTcC7BtIVhNImlK47uOBRdyc2sxg8xXVP45y60lfqHgjP%2F0%2BzCgRfMTNuQi%2BCwLU%2F0OgCV5JWhmP%2BNCpXaUJFk2nPBt7Q6CfyUvGZGitX7iWOTB2jB94CzKHopzOZgVSap%2BS8ASKbVDPWxA2Vz2yaIJ9xzPoUsATVoDtDilsjssKL&X-Amz-Signature=0e59468aacba15b975eb4aeb9ed5a5e7e4df15170bf50813923d6e2200d7afd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
