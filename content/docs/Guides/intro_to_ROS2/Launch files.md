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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB2DNTQB%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDd3swdwIkqfcA2sMW%2Fr2bBsYWho6Bf0k3zvAFJi8eJ9gIgRxbjyFYTy0Lw6U1IFauKAlWQKKV%2BOwcZH%2FVjubkx3U0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcyBikREzH7D%2FA%2BlircA5FmOM4B1kYoy6ne%2Fr%2BBqqCaB34%2BKXcJPuuTYh7okOLpaAkK7F%2FWDQ8purVZkxYHdmxeBy44YFWczFFnugpQ1tRGfQHBW4COYajDIWTLnwRzhWltq5opkpwf1sueAnj97B9lfhpubf29xsnjweTyJebyrF%2FagLksdXRv8Ip8bUSYdjS4kgYRlXbIotEoxKeA8QJghj9nwc%2FFFixdD%2BcHuob63Vtw8TYSTq7QpD31NVlk1xp8pctHxgkdrZIE0s4%2BzWA2HG2qZ%2BQbkCfN3er6TUs5Z%2FMP%2BF9lV%2Ff4G0IW0kxfgORDUdWAsBTx3xmUF5i78eqSrYg8F3daPUb0d%2FMmUqReb9idtYy4yFX0vfZ%2FmTswejPcpV%2BUdjrq3Q0y5P%2FMsxWU0cdOk%2BfI9f%2FM78w%2B5iFfPhf6jcIJc9vdGSz6asR3TTuVcULOX6X%2FWTMZcpcs3AKdNqLMmb%2Fl2iArIPO%2BWKEcTjmstGBgg2w%2BrExcTt%2F7ygEFq06n%2FasG6LKxgG04oGbcL%2BASMKDGX3OCUdHC%2F4BgufLIB6%2BuazUJeg3Cxucjy7xk%2BFjXzhIWTDH2PErFL7S4nTlEs%2F8474Oq%2BGTpGIgKnHWE0wNcvyU03An1La9XX80aGdu%2FFipmgFEiMOybl9IGOqUBVJw%2B8KWNsZ9RSDsskyuX6mt8Hlv3p%2By%2FhtS6Ie0srD8RxsqoWCpx7AHvDyT1ScHXMJz4rT6JamImZOmZXTz1RrCu0D%2BAERpVprrj%2BJMVAusfaFzUmRC9FSvgbm1drjZJMTbRzDgmfKdP%2BdYLEa3IUsRz4v5HWVcQ%2BjuKBLv2aZx8iK5c9x8PHtgbspgizKcywcYW0pNHneL7xZPiyo1lauzGF2J7&X-Amz-Signature=ebcc84cf275607e3e56f2fe29cd7cea218a6db55b275fb4f72873eb9a03d2166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB2DNTQB%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDd3swdwIkqfcA2sMW%2Fr2bBsYWho6Bf0k3zvAFJi8eJ9gIgRxbjyFYTy0Lw6U1IFauKAlWQKKV%2BOwcZH%2FVjubkx3U0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcyBikREzH7D%2FA%2BlircA5FmOM4B1kYoy6ne%2Fr%2BBqqCaB34%2BKXcJPuuTYh7okOLpaAkK7F%2FWDQ8purVZkxYHdmxeBy44YFWczFFnugpQ1tRGfQHBW4COYajDIWTLnwRzhWltq5opkpwf1sueAnj97B9lfhpubf29xsnjweTyJebyrF%2FagLksdXRv8Ip8bUSYdjS4kgYRlXbIotEoxKeA8QJghj9nwc%2FFFixdD%2BcHuob63Vtw8TYSTq7QpD31NVlk1xp8pctHxgkdrZIE0s4%2BzWA2HG2qZ%2BQbkCfN3er6TUs5Z%2FMP%2BF9lV%2Ff4G0IW0kxfgORDUdWAsBTx3xmUF5i78eqSrYg8F3daPUb0d%2FMmUqReb9idtYy4yFX0vfZ%2FmTswejPcpV%2BUdjrq3Q0y5P%2FMsxWU0cdOk%2BfI9f%2FM78w%2B5iFfPhf6jcIJc9vdGSz6asR3TTuVcULOX6X%2FWTMZcpcs3AKdNqLMmb%2Fl2iArIPO%2BWKEcTjmstGBgg2w%2BrExcTt%2F7ygEFq06n%2FasG6LKxgG04oGbcL%2BASMKDGX3OCUdHC%2F4BgufLIB6%2BuazUJeg3Cxucjy7xk%2BFjXzhIWTDH2PErFL7S4nTlEs%2F8474Oq%2BGTpGIgKnHWE0wNcvyU03An1La9XX80aGdu%2FFipmgFEiMOybl9IGOqUBVJw%2B8KWNsZ9RSDsskyuX6mt8Hlv3p%2By%2FhtS6Ie0srD8RxsqoWCpx7AHvDyT1ScHXMJz4rT6JamImZOmZXTz1RrCu0D%2BAERpVprrj%2BJMVAusfaFzUmRC9FSvgbm1drjZJMTbRzDgmfKdP%2BdYLEa3IUsRz4v5HWVcQ%2BjuKBLv2aZx8iK5c9x8PHtgbspgizKcywcYW0pNHneL7xZPiyo1lauzGF2J7&X-Amz-Signature=fb165e8c99049e06c1aa1bf36bc9fafb742832ed7216d079d7b29efc8bf3f8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB2DNTQB%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDd3swdwIkqfcA2sMW%2Fr2bBsYWho6Bf0k3zvAFJi8eJ9gIgRxbjyFYTy0Lw6U1IFauKAlWQKKV%2BOwcZH%2FVjubkx3U0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcyBikREzH7D%2FA%2BlircA5FmOM4B1kYoy6ne%2Fr%2BBqqCaB34%2BKXcJPuuTYh7okOLpaAkK7F%2FWDQ8purVZkxYHdmxeBy44YFWczFFnugpQ1tRGfQHBW4COYajDIWTLnwRzhWltq5opkpwf1sueAnj97B9lfhpubf29xsnjweTyJebyrF%2FagLksdXRv8Ip8bUSYdjS4kgYRlXbIotEoxKeA8QJghj9nwc%2FFFixdD%2BcHuob63Vtw8TYSTq7QpD31NVlk1xp8pctHxgkdrZIE0s4%2BzWA2HG2qZ%2BQbkCfN3er6TUs5Z%2FMP%2BF9lV%2Ff4G0IW0kxfgORDUdWAsBTx3xmUF5i78eqSrYg8F3daPUb0d%2FMmUqReb9idtYy4yFX0vfZ%2FmTswejPcpV%2BUdjrq3Q0y5P%2FMsxWU0cdOk%2BfI9f%2FM78w%2B5iFfPhf6jcIJc9vdGSz6asR3TTuVcULOX6X%2FWTMZcpcs3AKdNqLMmb%2Fl2iArIPO%2BWKEcTjmstGBgg2w%2BrExcTt%2F7ygEFq06n%2FasG6LKxgG04oGbcL%2BASMKDGX3OCUdHC%2F4BgufLIB6%2BuazUJeg3Cxucjy7xk%2BFjXzhIWTDH2PErFL7S4nTlEs%2F8474Oq%2BGTpGIgKnHWE0wNcvyU03An1La9XX80aGdu%2FFipmgFEiMOybl9IGOqUBVJw%2B8KWNsZ9RSDsskyuX6mt8Hlv3p%2By%2FhtS6Ie0srD8RxsqoWCpx7AHvDyT1ScHXMJz4rT6JamImZOmZXTz1RrCu0D%2BAERpVprrj%2BJMVAusfaFzUmRC9FSvgbm1drjZJMTbRzDgmfKdP%2BdYLEa3IUsRz4v5HWVcQ%2BjuKBLv2aZx8iK5c9x8PHtgbspgizKcywcYW0pNHneL7xZPiyo1lauzGF2J7&X-Amz-Signature=b597211dec2fc3a588a062d45e54da1360da57704f071ee1f113b1f47b81ec41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
