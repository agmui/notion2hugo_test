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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLOW7MN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANHiSyb9H9r0%2Fuq26iSbQHSIBzmX%2BM8pFbcM2ZybqoJAiEAlSeSvLO%2BvyKBDiZR8Dg7y5sFK1ChGGZZsmM4fAuglwkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBozFWIKSjYOL165QSrcA0HN%2BaMGTvXjZNtLCKv27pVprt%2B8rOgG6dz3YCLUk2h%2FDbtABZC7J18VqZqtgTAgxchedi9Xgpr6PjYtdoRdpXxF7iST2%2BEQhnNZqE7maOefCm7GG9SPA2Kbiou%2BiWTavt7jYr0%2BG7yB%2FWfhUg9mC9a9FMsNCwyKXxF7q%2FlY%2FtBvllKynTFntPJyyEZLwXgJPqDe%2Bq5lOeiTA5eYYO6pOckvgibuY9TXgANWiksaRkNHWIdABkVC1eobWBWc4go6SKeH2SiBw9JbKp3mzSaDmOrc%2FrVyYylos%2FZ8OkxXgjIAKBpuStrsQsIzlRFrCWlmjyW5%2FkD5v10UdGa0ltEXwQz%2BFupr%2B3gPtSATPJj6nr91PBvT1N%2Fyv8EhgtRzLqb9hx55urKpn%2F7SMmkxTRDxIzWOK%2BTVlMnxGM92PrL%2B1leDEptFfisWOe3ow5BZT7X22mTOzYgcc9FyUmKZ%2FgyodKoJc83pGnrAKQWnNWE0R%2BSrnRaTviWdryXUP1VJ2n057XDkPO6gaCwznh2n3TScztj%2FsO1T5uCawodFMIvekDu6jUzEohhMhAAQor7SiDvmCEsuslhDxnBCQMOKB3s1fQBu6mJIYAKMYA%2FFqta1Lc0KxuhdmT%2F59HhQfa0lMM6e68cGOqUBRn12tYCcwt9%2FcnpvgmGiqTbbX2vKnECkSIOyfnmM9tyvjS0PwGwUCNvSb5zSnY9L1cS%2F2FCJ9T%2BozMqkOK9DV%2FsyB%2BokAX6VHI1nMiHqPmEKlVhrVP8UWok2wE7pUo1e%2FL%2F%2B2DK6tPAQvFNFOxU%2BrVlsTUFV%2FRsF63YOJe5T8WmEAFUUiV0dTZCzXItizsTh8maRj0aTMyF7RK74n3ziFiKaQGtn&X-Amz-Signature=12f186ef80504d97a574590e8813aa32c6e6e0e78a8de968bb29629ab778fc9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLOW7MN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANHiSyb9H9r0%2Fuq26iSbQHSIBzmX%2BM8pFbcM2ZybqoJAiEAlSeSvLO%2BvyKBDiZR8Dg7y5sFK1ChGGZZsmM4fAuglwkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBozFWIKSjYOL165QSrcA0HN%2BaMGTvXjZNtLCKv27pVprt%2B8rOgG6dz3YCLUk2h%2FDbtABZC7J18VqZqtgTAgxchedi9Xgpr6PjYtdoRdpXxF7iST2%2BEQhnNZqE7maOefCm7GG9SPA2Kbiou%2BiWTavt7jYr0%2BG7yB%2FWfhUg9mC9a9FMsNCwyKXxF7q%2FlY%2FtBvllKynTFntPJyyEZLwXgJPqDe%2Bq5lOeiTA5eYYO6pOckvgibuY9TXgANWiksaRkNHWIdABkVC1eobWBWc4go6SKeH2SiBw9JbKp3mzSaDmOrc%2FrVyYylos%2FZ8OkxXgjIAKBpuStrsQsIzlRFrCWlmjyW5%2FkD5v10UdGa0ltEXwQz%2BFupr%2B3gPtSATPJj6nr91PBvT1N%2Fyv8EhgtRzLqb9hx55urKpn%2F7SMmkxTRDxIzWOK%2BTVlMnxGM92PrL%2B1leDEptFfisWOe3ow5BZT7X22mTOzYgcc9FyUmKZ%2FgyodKoJc83pGnrAKQWnNWE0R%2BSrnRaTviWdryXUP1VJ2n057XDkPO6gaCwznh2n3TScztj%2FsO1T5uCawodFMIvekDu6jUzEohhMhAAQor7SiDvmCEsuslhDxnBCQMOKB3s1fQBu6mJIYAKMYA%2FFqta1Lc0KxuhdmT%2F59HhQfa0lMM6e68cGOqUBRn12tYCcwt9%2FcnpvgmGiqTbbX2vKnECkSIOyfnmM9tyvjS0PwGwUCNvSb5zSnY9L1cS%2F2FCJ9T%2BozMqkOK9DV%2FsyB%2BokAX6VHI1nMiHqPmEKlVhrVP8UWok2wE7pUo1e%2FL%2F%2B2DK6tPAQvFNFOxU%2BrVlsTUFV%2FRsF63YOJe5T8WmEAFUUiV0dTZCzXItizsTh8maRj0aTMyF7RK74n3ziFiKaQGtn&X-Amz-Signature=3290cdecda9daaedb728328dfec45f0a05bb24edc0917e2efbe4c84f63fb7421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLOW7MN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANHiSyb9H9r0%2Fuq26iSbQHSIBzmX%2BM8pFbcM2ZybqoJAiEAlSeSvLO%2BvyKBDiZR8Dg7y5sFK1ChGGZZsmM4fAuglwkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBozFWIKSjYOL165QSrcA0HN%2BaMGTvXjZNtLCKv27pVprt%2B8rOgG6dz3YCLUk2h%2FDbtABZC7J18VqZqtgTAgxchedi9Xgpr6PjYtdoRdpXxF7iST2%2BEQhnNZqE7maOefCm7GG9SPA2Kbiou%2BiWTavt7jYr0%2BG7yB%2FWfhUg9mC9a9FMsNCwyKXxF7q%2FlY%2FtBvllKynTFntPJyyEZLwXgJPqDe%2Bq5lOeiTA5eYYO6pOckvgibuY9TXgANWiksaRkNHWIdABkVC1eobWBWc4go6SKeH2SiBw9JbKp3mzSaDmOrc%2FrVyYylos%2FZ8OkxXgjIAKBpuStrsQsIzlRFrCWlmjyW5%2FkD5v10UdGa0ltEXwQz%2BFupr%2B3gPtSATPJj6nr91PBvT1N%2Fyv8EhgtRzLqb9hx55urKpn%2F7SMmkxTRDxIzWOK%2BTVlMnxGM92PrL%2B1leDEptFfisWOe3ow5BZT7X22mTOzYgcc9FyUmKZ%2FgyodKoJc83pGnrAKQWnNWE0R%2BSrnRaTviWdryXUP1VJ2n057XDkPO6gaCwznh2n3TScztj%2FsO1T5uCawodFMIvekDu6jUzEohhMhAAQor7SiDvmCEsuslhDxnBCQMOKB3s1fQBu6mJIYAKMYA%2FFqta1Lc0KxuhdmT%2F59HhQfa0lMM6e68cGOqUBRn12tYCcwt9%2FcnpvgmGiqTbbX2vKnECkSIOyfnmM9tyvjS0PwGwUCNvSb5zSnY9L1cS%2F2FCJ9T%2BozMqkOK9DV%2FsyB%2BokAX6VHI1nMiHqPmEKlVhrVP8UWok2wE7pUo1e%2FL%2F%2B2DK6tPAQvFNFOxU%2BrVlsTUFV%2FRsF63YOJe5T8WmEAFUUiV0dTZCzXItizsTh8maRj0aTMyF7RK74n3ziFiKaQGtn&X-Amz-Signature=2fb96dac16618346ffe44cf2adeddcf64d40d90106829f563bb565e5bfd025d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
