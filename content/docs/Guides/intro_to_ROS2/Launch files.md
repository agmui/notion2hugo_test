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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56YRRJO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFu0PLT%2BTIPnXsOM8jvdgoTlhii85t07G0XB2WIXbbZ9AiEAyiJIilZyb6WCHAG4HUa0l5g2DrVdvxNueXWWHtYP2hUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKJqculTZ%2FOl8QbYeircA1VIUg%2F%2BwiEZf0IzB8yRMoklaVOdTa2IHF0ochXkZiRHwJnio5DvyppyUspPPgYyM37ZBNb2YeXKJ9gZt6vm2%2Fdzu5JrVucSGuqLgaWGiEKcJ8G2%2Bj7Zci61y%2FUaIHHMeRMsh4fJbudz1tvpyYBxG1ehvB7Q5teW9%2ByXKSurDW7dyhJbRg6UT7JY4TUeJkWr4N7M97r9NzRD0cUtefXAo%2F4YTxdXzdjt1TT4FL3yZCO0TSkhvngwFMvavB3v2vM1bCAOCH98hukwszQYgptZvJNLAlTm8qvwYtlG82SAI3gy1yspNpx6IGubk0cJeb%2BvRhze9t7AzNFRU%2BWWzj7xyZzotPlCsi6RAXlF0H8vhlQs821COliiHjeoepvZBI0cCsbONoqFnUlXzAtQfu2%2Ba1A2jU9XwVlLctJigISTBWQ3iANO2J9pfNtfxC6PeJnq3Py9Q67T0Qk%2BZ6hk9NUUusafFoNiyFmN6iOlqNSvrUT5y7AIMde4tp3xz3RDINTpE82kWMsHlMv%2FagZkMO3hI1tR2bHTd5BX87XeGuRooXTRMDCiTTcF8RZLxurj2lXwUa7pQuHp02KOV6NVNs8uMvWkjOxScDGQtBANmEHb%2FgNaGZFZ14wZ9foFY22nMJPby8EGOqUBEPLivmMY99BwIPk8PAt1qDvOccdTyMpFkGp3kmpBG4EK4LIlF0exJvRw34j%2BNmBKA0g365I6%2BGqNJXpbgua1t0X%2FshXoDtZNWzqn1J9NnMMEIOtUyg1QzWhi0sXg%2B65QHwSXmeWgdhlXcQp7EUKvTNSzWviPFYlAj6APIq6jsFUa9Ty0y3vSwL5DKuXfw3cRJ2WaCDEIrO1Dic%2BAF8WeU%2B4AQq1Z&X-Amz-Signature=e394cd40422575b2184419562740b5fef73db8f5efb353ec6c7930873f55ec6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56YRRJO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFu0PLT%2BTIPnXsOM8jvdgoTlhii85t07G0XB2WIXbbZ9AiEAyiJIilZyb6WCHAG4HUa0l5g2DrVdvxNueXWWHtYP2hUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKJqculTZ%2FOl8QbYeircA1VIUg%2F%2BwiEZf0IzB8yRMoklaVOdTa2IHF0ochXkZiRHwJnio5DvyppyUspPPgYyM37ZBNb2YeXKJ9gZt6vm2%2Fdzu5JrVucSGuqLgaWGiEKcJ8G2%2Bj7Zci61y%2FUaIHHMeRMsh4fJbudz1tvpyYBxG1ehvB7Q5teW9%2ByXKSurDW7dyhJbRg6UT7JY4TUeJkWr4N7M97r9NzRD0cUtefXAo%2F4YTxdXzdjt1TT4FL3yZCO0TSkhvngwFMvavB3v2vM1bCAOCH98hukwszQYgptZvJNLAlTm8qvwYtlG82SAI3gy1yspNpx6IGubk0cJeb%2BvRhze9t7AzNFRU%2BWWzj7xyZzotPlCsi6RAXlF0H8vhlQs821COliiHjeoepvZBI0cCsbONoqFnUlXzAtQfu2%2Ba1A2jU9XwVlLctJigISTBWQ3iANO2J9pfNtfxC6PeJnq3Py9Q67T0Qk%2BZ6hk9NUUusafFoNiyFmN6iOlqNSvrUT5y7AIMde4tp3xz3RDINTpE82kWMsHlMv%2FagZkMO3hI1tR2bHTd5BX87XeGuRooXTRMDCiTTcF8RZLxurj2lXwUa7pQuHp02KOV6NVNs8uMvWkjOxScDGQtBANmEHb%2FgNaGZFZ14wZ9foFY22nMJPby8EGOqUBEPLivmMY99BwIPk8PAt1qDvOccdTyMpFkGp3kmpBG4EK4LIlF0exJvRw34j%2BNmBKA0g365I6%2BGqNJXpbgua1t0X%2FshXoDtZNWzqn1J9NnMMEIOtUyg1QzWhi0sXg%2B65QHwSXmeWgdhlXcQp7EUKvTNSzWviPFYlAj6APIq6jsFUa9Ty0y3vSwL5DKuXfw3cRJ2WaCDEIrO1Dic%2BAF8WeU%2B4AQq1Z&X-Amz-Signature=26f7e5a797c5c19d6d3429c5b4b01e2a7db0d25a3ec7d29ec3a87198bddf067b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56YRRJO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFu0PLT%2BTIPnXsOM8jvdgoTlhii85t07G0XB2WIXbbZ9AiEAyiJIilZyb6WCHAG4HUa0l5g2DrVdvxNueXWWHtYP2hUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKJqculTZ%2FOl8QbYeircA1VIUg%2F%2BwiEZf0IzB8yRMoklaVOdTa2IHF0ochXkZiRHwJnio5DvyppyUspPPgYyM37ZBNb2YeXKJ9gZt6vm2%2Fdzu5JrVucSGuqLgaWGiEKcJ8G2%2Bj7Zci61y%2FUaIHHMeRMsh4fJbudz1tvpyYBxG1ehvB7Q5teW9%2ByXKSurDW7dyhJbRg6UT7JY4TUeJkWr4N7M97r9NzRD0cUtefXAo%2F4YTxdXzdjt1TT4FL3yZCO0TSkhvngwFMvavB3v2vM1bCAOCH98hukwszQYgptZvJNLAlTm8qvwYtlG82SAI3gy1yspNpx6IGubk0cJeb%2BvRhze9t7AzNFRU%2BWWzj7xyZzotPlCsi6RAXlF0H8vhlQs821COliiHjeoepvZBI0cCsbONoqFnUlXzAtQfu2%2Ba1A2jU9XwVlLctJigISTBWQ3iANO2J9pfNtfxC6PeJnq3Py9Q67T0Qk%2BZ6hk9NUUusafFoNiyFmN6iOlqNSvrUT5y7AIMde4tp3xz3RDINTpE82kWMsHlMv%2FagZkMO3hI1tR2bHTd5BX87XeGuRooXTRMDCiTTcF8RZLxurj2lXwUa7pQuHp02KOV6NVNs8uMvWkjOxScDGQtBANmEHb%2FgNaGZFZ14wZ9foFY22nMJPby8EGOqUBEPLivmMY99BwIPk8PAt1qDvOccdTyMpFkGp3kmpBG4EK4LIlF0exJvRw34j%2BNmBKA0g365I6%2BGqNJXpbgua1t0X%2FshXoDtZNWzqn1J9NnMMEIOtUyg1QzWhi0sXg%2B65QHwSXmeWgdhlXcQp7EUKvTNSzWviPFYlAj6APIq6jsFUa9Ty0y3vSwL5DKuXfw3cRJ2WaCDEIrO1Dic%2BAF8WeU%2B4AQq1Z&X-Amz-Signature=c270df331b8ab116d18efa87284d03634eca8c2021b7364f607472fb924ccc77&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
