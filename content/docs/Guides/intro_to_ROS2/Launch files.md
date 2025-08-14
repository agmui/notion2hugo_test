---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPD4I6P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7XGGBZqXF0GMIRSKParURkGqlRvyCjFcWMIcOuVSjTwIgbpjKvzqODz73QpylpIf70Qrxxr2POl4PzH%2FZAlfUmSYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEP7f5BE3ixyqxT0%2BircA138IvOmoV1o0vmJYJdSQ7sANfeTQ8QXFoStBKTgojRRRR2X2TeDpivWBIiSikTHmqI92K07PCvumSJv%2FX5nQg52%2FtCZZT%2FIM6wceJRHbaHUAo4gJj2ls8eAzNWXVdWJVL7oE6URexibMHUPRL7brcuYa1WhNXPE%2B0t55cBUeG8%2FAi4S68Vmdc1hB%2BBzgYynfhDFuvGF0EtUrgUyftmxBGRqgt18uuTis2Y5HiOaw1mFceCYZkvTpm2KlZP1dxEh7QNRr3D%2Fi17Oo4N45TNmUrv6iknxQWlwoI%2FMlde8J7nOsm3gRP3%2FaoRUKE7qPe7D0uyxTSHpyg%2BSHfpbLRmdB3SJEc95kadMwrNvAxTFuX4Gif%2FlpIBVi1mTBpAQbQeLNFWDxVopgYrg4OhMStduQqW7TR76xCx8AsI6Ntao2WsY8v%2BKCrwY%2BePICXIse8GxAavrrf%2BedMxydJgHmjN1jlKtEXXmc5GsYNNylBj9TYqqBXkVsh6JWhP5Rdhiltd4UgOn1hibepgu8iKYbeB5oRc59w7XrZSszgQqh8A3nsSMdxoPOIAV1uBTnx7WwercZPu6G%2B89i%2FklofNf76iICyqNVJ5apFxJGbXu4LmfIIpUFx2KZYgwc9%2FC%2Fmf2MJyL9cQGOqUBP3oYnApaO6GkLLxRvSK7xvzZSoz6jcUDR3wABrfvj1y9bLOMar%2Fctu0PeCFzNV%2F%2Bvl3byOcJkIQUBvBBmQZ1UWLGCY8Vqv49omCpXO8S8RiMvBRqWxhVvoc8PmTY0EKOXjerpxF8TynPG5k6jQ%2Fm5kg%2FDGtn9MnQZP%2B78Ozfq0lD5VIS%2FVowB1HYKLz7KigRrC7CyEKqAKJ6hCVwlEBtoPRQvVJp&X-Amz-Signature=3029b5067427c1b68b6fd4b78b4cec127666e78baa0e0c22272a4bfb838593ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPD4I6P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7XGGBZqXF0GMIRSKParURkGqlRvyCjFcWMIcOuVSjTwIgbpjKvzqODz73QpylpIf70Qrxxr2POl4PzH%2FZAlfUmSYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEP7f5BE3ixyqxT0%2BircA138IvOmoV1o0vmJYJdSQ7sANfeTQ8QXFoStBKTgojRRRR2X2TeDpivWBIiSikTHmqI92K07PCvumSJv%2FX5nQg52%2FtCZZT%2FIM6wceJRHbaHUAo4gJj2ls8eAzNWXVdWJVL7oE6URexibMHUPRL7brcuYa1WhNXPE%2B0t55cBUeG8%2FAi4S68Vmdc1hB%2BBzgYynfhDFuvGF0EtUrgUyftmxBGRqgt18uuTis2Y5HiOaw1mFceCYZkvTpm2KlZP1dxEh7QNRr3D%2Fi17Oo4N45TNmUrv6iknxQWlwoI%2FMlde8J7nOsm3gRP3%2FaoRUKE7qPe7D0uyxTSHpyg%2BSHfpbLRmdB3SJEc95kadMwrNvAxTFuX4Gif%2FlpIBVi1mTBpAQbQeLNFWDxVopgYrg4OhMStduQqW7TR76xCx8AsI6Ntao2WsY8v%2BKCrwY%2BePICXIse8GxAavrrf%2BedMxydJgHmjN1jlKtEXXmc5GsYNNylBj9TYqqBXkVsh6JWhP5Rdhiltd4UgOn1hibepgu8iKYbeB5oRc59w7XrZSszgQqh8A3nsSMdxoPOIAV1uBTnx7WwercZPu6G%2B89i%2FklofNf76iICyqNVJ5apFxJGbXu4LmfIIpUFx2KZYgwc9%2FC%2Fmf2MJyL9cQGOqUBP3oYnApaO6GkLLxRvSK7xvzZSoz6jcUDR3wABrfvj1y9bLOMar%2Fctu0PeCFzNV%2F%2Bvl3byOcJkIQUBvBBmQZ1UWLGCY8Vqv49omCpXO8S8RiMvBRqWxhVvoc8PmTY0EKOXjerpxF8TynPG5k6jQ%2Fm5kg%2FDGtn9MnQZP%2B78Ozfq0lD5VIS%2FVowB1HYKLz7KigRrC7CyEKqAKJ6hCVwlEBtoPRQvVJp&X-Amz-Signature=14db51e610135f57d0640e96e538584d5dda3b087f1e12529332f6f94bd86474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPD4I6P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7XGGBZqXF0GMIRSKParURkGqlRvyCjFcWMIcOuVSjTwIgbpjKvzqODz73QpylpIf70Qrxxr2POl4PzH%2FZAlfUmSYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEP7f5BE3ixyqxT0%2BircA138IvOmoV1o0vmJYJdSQ7sANfeTQ8QXFoStBKTgojRRRR2X2TeDpivWBIiSikTHmqI92K07PCvumSJv%2FX5nQg52%2FtCZZT%2FIM6wceJRHbaHUAo4gJj2ls8eAzNWXVdWJVL7oE6URexibMHUPRL7brcuYa1WhNXPE%2B0t55cBUeG8%2FAi4S68Vmdc1hB%2BBzgYynfhDFuvGF0EtUrgUyftmxBGRqgt18uuTis2Y5HiOaw1mFceCYZkvTpm2KlZP1dxEh7QNRr3D%2Fi17Oo4N45TNmUrv6iknxQWlwoI%2FMlde8J7nOsm3gRP3%2FaoRUKE7qPe7D0uyxTSHpyg%2BSHfpbLRmdB3SJEc95kadMwrNvAxTFuX4Gif%2FlpIBVi1mTBpAQbQeLNFWDxVopgYrg4OhMStduQqW7TR76xCx8AsI6Ntao2WsY8v%2BKCrwY%2BePICXIse8GxAavrrf%2BedMxydJgHmjN1jlKtEXXmc5GsYNNylBj9TYqqBXkVsh6JWhP5Rdhiltd4UgOn1hibepgu8iKYbeB5oRc59w7XrZSszgQqh8A3nsSMdxoPOIAV1uBTnx7WwercZPu6G%2B89i%2FklofNf76iICyqNVJ5apFxJGbXu4LmfIIpUFx2KZYgwc9%2FC%2Fmf2MJyL9cQGOqUBP3oYnApaO6GkLLxRvSK7xvzZSoz6jcUDR3wABrfvj1y9bLOMar%2Fctu0PeCFzNV%2F%2Bvl3byOcJkIQUBvBBmQZ1UWLGCY8Vqv49omCpXO8S8RiMvBRqWxhVvoc8PmTY0EKOXjerpxF8TynPG5k6jQ%2Fm5kg%2FDGtn9MnQZP%2B78Ozfq0lD5VIS%2FVowB1HYKLz7KigRrC7CyEKqAKJ6hCVwlEBtoPRQvVJp&X-Amz-Signature=44d6db4b86343da3389dca6cd755c2e3d03048b4b3becd096161c90c81573e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
