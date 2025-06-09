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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LYVT6O%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO2rbiFYEPdYDzcU5vUgWmKbHuY%2BVglSQDbm6VtFc51AiEAtnLu9OkhZc%2FTdzVQaG97BhBN2%2FItaWETSzJXCUDUsOkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRP0%2BxYk1%2BUgzBYNircA2mwM3gbnxkis1drel2S9kmYWXGTrPzVk%2F8Pcd%2FNZyAgl5Xc2mcTAlajLA9TMqVNqSC21ZAt88uH8PKcfoznuAL0Th9wZNd2KXWL0C3dVRI5Hh%2FO%2BqXETGGpr2dmtA1SkP1xC9PX8wbpCctEyli3gmS%2FCWVIm%2BxWMADABGZUAdW%2F97PtQQtUB2pAIetnmmxYlPDMoMIeRinvd5Ps2qLp2zlIADlyVP4O5%2FqNnzdFECrSEa%2FiehZJFP8yxRiFwqImCw8sBwqwruTdJ9%2BY9sW37zqD8kXDaql2l4c0RNVphFx8K%2FjUY5Aqwg%2FYBvm6OkRkV0HjXioAZ2wqsDOzzSQTO4CDKj3zaFuq%2B1EUDLjfzkHw%2FlEW6Dg390hEhL1LM2gXCZYVyM9MSQI90TYwShRm9Y%2BiD3fTIA9yrx04kDBu1zzJ0f5vA2ByGf%2FZ9eQOSGb5wv1Ya3Rw6aKoWwzVFGEyewWXtHa9B7kfFoF3I%2F0k0BaJHFP27Sh8xkPv%2Fe2x5vW6PrAEG9VGFGVo2T21A0v6uNF1kNy4nHDgp0WovWYosD8zxHoZj6MXuFwRCuKaaQdc9ntvnDVUcTGsmn228%2F4R4og2MyRNSKBGmKK%2B65B7e7OzkLw9IXf6bjl4bJKyMJWem8IGOqUBQWFfq4Hp%2F5tM%2B7bvW47iZ6cDNIKzsWN%2FdDJoDZP9k8KbLl7CBmmrK96mhTm3UF7mBiF4Hd4Ap03p2rPsHAaaPdI7Sx4r8MHGmI5f3cNiw8d4%2FACdQqzuJhnGx1K6BVcgiVkOA9oBjLvBefjxKJgAKmKesT%2B5Pcl%2F5HNFIp9I0APc6vEZ%2BUlpNsJ%2Be6Km%2BpZ%2BiTfjmpdB5niWy%2FLMOQp0LsKulCdS&X-Amz-Signature=c9c305179b9becf5ddc4cc2a80d90f7ccd968033273ba6a4fda516f16d3229ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LYVT6O%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO2rbiFYEPdYDzcU5vUgWmKbHuY%2BVglSQDbm6VtFc51AiEAtnLu9OkhZc%2FTdzVQaG97BhBN2%2FItaWETSzJXCUDUsOkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRP0%2BxYk1%2BUgzBYNircA2mwM3gbnxkis1drel2S9kmYWXGTrPzVk%2F8Pcd%2FNZyAgl5Xc2mcTAlajLA9TMqVNqSC21ZAt88uH8PKcfoznuAL0Th9wZNd2KXWL0C3dVRI5Hh%2FO%2BqXETGGpr2dmtA1SkP1xC9PX8wbpCctEyli3gmS%2FCWVIm%2BxWMADABGZUAdW%2F97PtQQtUB2pAIetnmmxYlPDMoMIeRinvd5Ps2qLp2zlIADlyVP4O5%2FqNnzdFECrSEa%2FiehZJFP8yxRiFwqImCw8sBwqwruTdJ9%2BY9sW37zqD8kXDaql2l4c0RNVphFx8K%2FjUY5Aqwg%2FYBvm6OkRkV0HjXioAZ2wqsDOzzSQTO4CDKj3zaFuq%2B1EUDLjfzkHw%2FlEW6Dg390hEhL1LM2gXCZYVyM9MSQI90TYwShRm9Y%2BiD3fTIA9yrx04kDBu1zzJ0f5vA2ByGf%2FZ9eQOSGb5wv1Ya3Rw6aKoWwzVFGEyewWXtHa9B7kfFoF3I%2F0k0BaJHFP27Sh8xkPv%2Fe2x5vW6PrAEG9VGFGVo2T21A0v6uNF1kNy4nHDgp0WovWYosD8zxHoZj6MXuFwRCuKaaQdc9ntvnDVUcTGsmn228%2F4R4og2MyRNSKBGmKK%2B65B7e7OzkLw9IXf6bjl4bJKyMJWem8IGOqUBQWFfq4Hp%2F5tM%2B7bvW47iZ6cDNIKzsWN%2FdDJoDZP9k8KbLl7CBmmrK96mhTm3UF7mBiF4Hd4Ap03p2rPsHAaaPdI7Sx4r8MHGmI5f3cNiw8d4%2FACdQqzuJhnGx1K6BVcgiVkOA9oBjLvBefjxKJgAKmKesT%2B5Pcl%2F5HNFIp9I0APc6vEZ%2BUlpNsJ%2Be6Km%2BpZ%2BiTfjmpdB5niWy%2FLMOQp0LsKulCdS&X-Amz-Signature=dea18bc75f538fbbf788871095f9e611a19db8ca423a724bff64f74918d62ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LYVT6O%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO2rbiFYEPdYDzcU5vUgWmKbHuY%2BVglSQDbm6VtFc51AiEAtnLu9OkhZc%2FTdzVQaG97BhBN2%2FItaWETSzJXCUDUsOkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRP0%2BxYk1%2BUgzBYNircA2mwM3gbnxkis1drel2S9kmYWXGTrPzVk%2F8Pcd%2FNZyAgl5Xc2mcTAlajLA9TMqVNqSC21ZAt88uH8PKcfoznuAL0Th9wZNd2KXWL0C3dVRI5Hh%2FO%2BqXETGGpr2dmtA1SkP1xC9PX8wbpCctEyli3gmS%2FCWVIm%2BxWMADABGZUAdW%2F97PtQQtUB2pAIetnmmxYlPDMoMIeRinvd5Ps2qLp2zlIADlyVP4O5%2FqNnzdFECrSEa%2FiehZJFP8yxRiFwqImCw8sBwqwruTdJ9%2BY9sW37zqD8kXDaql2l4c0RNVphFx8K%2FjUY5Aqwg%2FYBvm6OkRkV0HjXioAZ2wqsDOzzSQTO4CDKj3zaFuq%2B1EUDLjfzkHw%2FlEW6Dg390hEhL1LM2gXCZYVyM9MSQI90TYwShRm9Y%2BiD3fTIA9yrx04kDBu1zzJ0f5vA2ByGf%2FZ9eQOSGb5wv1Ya3Rw6aKoWwzVFGEyewWXtHa9B7kfFoF3I%2F0k0BaJHFP27Sh8xkPv%2Fe2x5vW6PrAEG9VGFGVo2T21A0v6uNF1kNy4nHDgp0WovWYosD8zxHoZj6MXuFwRCuKaaQdc9ntvnDVUcTGsmn228%2F4R4og2MyRNSKBGmKK%2B65B7e7OzkLw9IXf6bjl4bJKyMJWem8IGOqUBQWFfq4Hp%2F5tM%2B7bvW47iZ6cDNIKzsWN%2FdDJoDZP9k8KbLl7CBmmrK96mhTm3UF7mBiF4Hd4Ap03p2rPsHAaaPdI7Sx4r8MHGmI5f3cNiw8d4%2FACdQqzuJhnGx1K6BVcgiVkOA9oBjLvBefjxKJgAKmKesT%2B5Pcl%2F5HNFIp9I0APc6vEZ%2BUlpNsJ%2Be6Km%2BpZ%2BiTfjmpdB5niWy%2FLMOQp0LsKulCdS&X-Amz-Signature=cf6900f61a164b514d2df5c7c6723d022ad59448af3532602c92fb78916e803a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
