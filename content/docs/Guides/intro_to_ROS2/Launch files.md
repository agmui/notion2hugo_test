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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IICRW76%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCoqEWbMF%2BBOX%2BAgldsWNBCmSY%2BsRkG9xkth3A7agGcVAIhAL1me6%2FxKGP2pbezKojIkxskq8qcUcnCImS1UGqIZr46Kv8DCH0QABoMNjM3NDIzMTgzODA1IgzYxyOkYpUy4QiFwAAq3APoyBXeHA8nOlfHUlURLJSWEJaIy4cPrEY2rgf3awv9pl3MuWbweUWBOWBabwzCXHQAHZmLPhwVy%2Fq6tnO8wSDj5em100b%2BVxCSOza9sGIE5z4RdrvsmNxON%2BxIuAEtV3mesY97mnPKC9hU6r8vLFjCY1w0y9hbxhFyjLW6tfN2yY5hTPzcaueO5oIRMrI531IpFrKyoBqYXzsVgWGyOnQ1ak0DyhwkdDNR3qLt2e54dj6LntAVi%2BIfA58yl3G%2B%2FxRL5nGvJOipwarA%2FxeisIfHcipMfTs%2BjONL3Hpp8yfMlWrCezIzTTPz%2FbQvDtKxenlBTj%2FjholFRp%2BssrIUtGTAu5rzrxLpev0g9FuChgQ%2BVRkEW08rT06brGd8tGWAhiA7tqIA6fZDDBWkt8IqhTEK3nzuXR5bqSQPBmCgetpy0ydTvZW6ljv6M4%2B%2BNFxtsK0D8T9BfWvCXMNmpFh2d47qVdIkZks%2BwSw1r2LKGC6%2BPso7zp4LdITBbmw4F3NmagdHKm%2FU8M6kN8kOHT%2FhzAqjeQarZFeLgNcGSzCFHIKMhS5EVmR%2BoifpVpCBwQUk6uJI442fmj2CAbJk2UNbEdo79U3r79qaX7EUjGWSeT8i2%2BDfi7Zca4d%2B2JZosDCz8NW%2FBjqkASdUswzasb7275ikveFPGnwp3HSIU0bjoDdCElWECN%2FP3bwA9%2F%2FRQiEcBBLB09eoLvDALk6rImZ4b8FeMcwWU97qCJsXw32sxzANgbUcGcvGaNlBpbIQhHRkVHqv1L9h7dfA7Osc2I%2FfFheYMMwJ2aV1gNTq46v%2BdPSFW64EWBPjhNLDXF48TOpReoWNtd1Bi9KYSaHOhzXp8Yso1ZN1g%2Fqi%2FBM9&X-Amz-Signature=43fecf90c9516ce80785cca685417044950291454e604a8e7d24781ce54033dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IICRW76%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCoqEWbMF%2BBOX%2BAgldsWNBCmSY%2BsRkG9xkth3A7agGcVAIhAL1me6%2FxKGP2pbezKojIkxskq8qcUcnCImS1UGqIZr46Kv8DCH0QABoMNjM3NDIzMTgzODA1IgzYxyOkYpUy4QiFwAAq3APoyBXeHA8nOlfHUlURLJSWEJaIy4cPrEY2rgf3awv9pl3MuWbweUWBOWBabwzCXHQAHZmLPhwVy%2Fq6tnO8wSDj5em100b%2BVxCSOza9sGIE5z4RdrvsmNxON%2BxIuAEtV3mesY97mnPKC9hU6r8vLFjCY1w0y9hbxhFyjLW6tfN2yY5hTPzcaueO5oIRMrI531IpFrKyoBqYXzsVgWGyOnQ1ak0DyhwkdDNR3qLt2e54dj6LntAVi%2BIfA58yl3G%2B%2FxRL5nGvJOipwarA%2FxeisIfHcipMfTs%2BjONL3Hpp8yfMlWrCezIzTTPz%2FbQvDtKxenlBTj%2FjholFRp%2BssrIUtGTAu5rzrxLpev0g9FuChgQ%2BVRkEW08rT06brGd8tGWAhiA7tqIA6fZDDBWkt8IqhTEK3nzuXR5bqSQPBmCgetpy0ydTvZW6ljv6M4%2B%2BNFxtsK0D8T9BfWvCXMNmpFh2d47qVdIkZks%2BwSw1r2LKGC6%2BPso7zp4LdITBbmw4F3NmagdHKm%2FU8M6kN8kOHT%2FhzAqjeQarZFeLgNcGSzCFHIKMhS5EVmR%2BoifpVpCBwQUk6uJI442fmj2CAbJk2UNbEdo79U3r79qaX7EUjGWSeT8i2%2BDfi7Zca4d%2B2JZosDCz8NW%2FBjqkASdUswzasb7275ikveFPGnwp3HSIU0bjoDdCElWECN%2FP3bwA9%2F%2FRQiEcBBLB09eoLvDALk6rImZ4b8FeMcwWU97qCJsXw32sxzANgbUcGcvGaNlBpbIQhHRkVHqv1L9h7dfA7Osc2I%2FfFheYMMwJ2aV1gNTq46v%2BdPSFW64EWBPjhNLDXF48TOpReoWNtd1Bi9KYSaHOhzXp8Yso1ZN1g%2Fqi%2FBM9&X-Amz-Signature=54dd05c3b825c80b43fa85ac9ce06804656968b09862a94beeab76dc5a0b7418&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IICRW76%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCoqEWbMF%2BBOX%2BAgldsWNBCmSY%2BsRkG9xkth3A7agGcVAIhAL1me6%2FxKGP2pbezKojIkxskq8qcUcnCImS1UGqIZr46Kv8DCH0QABoMNjM3NDIzMTgzODA1IgzYxyOkYpUy4QiFwAAq3APoyBXeHA8nOlfHUlURLJSWEJaIy4cPrEY2rgf3awv9pl3MuWbweUWBOWBabwzCXHQAHZmLPhwVy%2Fq6tnO8wSDj5em100b%2BVxCSOza9sGIE5z4RdrvsmNxON%2BxIuAEtV3mesY97mnPKC9hU6r8vLFjCY1w0y9hbxhFyjLW6tfN2yY5hTPzcaueO5oIRMrI531IpFrKyoBqYXzsVgWGyOnQ1ak0DyhwkdDNR3qLt2e54dj6LntAVi%2BIfA58yl3G%2B%2FxRL5nGvJOipwarA%2FxeisIfHcipMfTs%2BjONL3Hpp8yfMlWrCezIzTTPz%2FbQvDtKxenlBTj%2FjholFRp%2BssrIUtGTAu5rzrxLpev0g9FuChgQ%2BVRkEW08rT06brGd8tGWAhiA7tqIA6fZDDBWkt8IqhTEK3nzuXR5bqSQPBmCgetpy0ydTvZW6ljv6M4%2B%2BNFxtsK0D8T9BfWvCXMNmpFh2d47qVdIkZks%2BwSw1r2LKGC6%2BPso7zp4LdITBbmw4F3NmagdHKm%2FU8M6kN8kOHT%2FhzAqjeQarZFeLgNcGSzCFHIKMhS5EVmR%2BoifpVpCBwQUk6uJI442fmj2CAbJk2UNbEdo79U3r79qaX7EUjGWSeT8i2%2BDfi7Zca4d%2B2JZosDCz8NW%2FBjqkASdUswzasb7275ikveFPGnwp3HSIU0bjoDdCElWECN%2FP3bwA9%2F%2FRQiEcBBLB09eoLvDALk6rImZ4b8FeMcwWU97qCJsXw32sxzANgbUcGcvGaNlBpbIQhHRkVHqv1L9h7dfA7Osc2I%2FfFheYMMwJ2aV1gNTq46v%2BdPSFW64EWBPjhNLDXF48TOpReoWNtd1Bi9KYSaHOhzXp8Yso1ZN1g%2Fqi%2FBM9&X-Amz-Signature=8e0b58b31364a220803124283240d54c31f49e40bae2710d5006c3fc2860cf85&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
