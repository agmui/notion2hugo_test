---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=9be35a9f3b33bb3c09ceb4802e1cac104bbdf165df05926ef517ed6bffe4b035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=e79fc87c7135671fb812c9b3ceee6a71ebfa27b727c1e9a8884b97c5b66e9917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CAZK5J%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFJi2Uls70pkBlyBmhxGpli9uMhZ20Yz3zPJRuUIeVbyAiAv3iqxQjtPsvC35PU1bDFifwfNKJKjSkPaa5AqSP%2BljSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMrcZSUtP1MowV8AVfKtwDftXdEJSxmzGIUJBlBPjBHPsvrIq6u5iNTMeowasNggEIfMt3FJ1XXefCeWIH72Bw4aBjjBOG96OQDyVpkCf4pOSPYskjEpbreYitWUpRqi1V5kHBYYZN8ALD2HPfd02x12CCWxoFVnt2P2lpCxDc6t%2FK0O57pcjJAgw46GC3TAmj%2B0f6LqJ2%2Be3O7ywqDv4vxt9C3Vr02BMerV1rS53WqZX2pjaP%2Bn0z4SKr9rSHiL4XwL1orwFftAtQVspNFXavifYI3zVQnurzXGqZ3XMvNs%2BkVMDFW1BYgnyvZMPIONiQDgj9zQ1eevBUfTbCHexVmnrvZtGUsbkKxhgifo8XLGCAj07sqYoB8EsvYLpN9jYJzjeD4HZY0t2I3b0%2BiEmHE7%2BD9KgwkINHFTMCqpWRS5tGWylRDGz6WdNPHrz2LsOjj7Om173wJparj9%2BICBo5u5pKh%2BlHbycPi3orSMycW7k%2BrEAa%2BpBRFTVj%2FT2ZRgMco9qu1DYQNLslHdRTsUV0ajGJ8pcwr3DxKFt3KlEJA8ClnjcB0TRj8SKX1uNfpBABjCNB23Gg%2FLd0HaJWZS3gWFBiDaoovpW3LmX3KPvb1uJHbSWhjnTy%2BfJix00me6rI%2B82z%2BENHs2JwgMQw696XxAY6pgEP2kJht%2BmvlPelIztL%2FWwC%2BpUFalV69mWxz1zDoY4JBhE7vGSiFqn4C8v5A3yiKkhNs461mSLKkLQFo%2Fb%2F4rVXk92uN2QGx6HFy3e8eShlwONiUCtb23HcPEE48zmQ5DNv498AaJYBdAadxrXslBQBNSZQw1A3qhGVdtL4qPKKoIeFANc%2FpTz4RZzbEnbFXe1gXq%2FvF9SeUOGyiPz1JOtTs4xfhgVV&X-Amz-Signature=ae5c6e81510fa7cfbd7c17025871ef0102832c532f0894768b2352bd428f3830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
