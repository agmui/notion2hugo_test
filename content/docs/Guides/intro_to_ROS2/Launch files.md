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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466366QM2LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbEGZfMrHZXuPcMQrxOVhGQ2ebyswX8iDyMgZKAEaCAAiEA%2FP1UeWajobKDwgPw%2Bb%2F2Lr9Wxcaregv6VMt%2FszvjArYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnlQawp9QKaJL9cQSrcAyWqXBCMFsqieXqYe8WmM741G071QhJzDlFZ87Tivmd1173Uab01TvV%2BMXuRLeiv69GHd7Nm9u%2Ff7Clp2AIzUT%2FIyMrSwT54VhFH4TICIMS%2BslZ8%2BrvoBWEwy65dSByVuRkACbWMmOVdwvAyJJfxjctQx4DSdhYj4i0tZNSsBzArrF60PbzUf008CL5JuqIxCYDxrUnGLnearO2uVfuLxL63jlrrrNeVyRV0ypRaNXpCFL4Ra1N18iHg6CFpkiEKWywMm8ehmn%2BB047cw85MJo%2B5pHbZE9uSJLgcS0Yp1sTxF9ehDF3ZsWGH8sAZ0vSFZx%2BrmfhOFaUw%2FJEkUPSP1eAXtXkz24nOKOD%2BQselxOK8UyNZuFYAOegqebyuDQFY4tcqUIAFMTW7EV5zFnOxFWnWaFTwVPy86DCg6VLSwO%2BKGIFZHOpQK8%2FRNteTLUtTwg9kM7ROQYdJsCqlsapF2RmcE2rXjnvIZ6wW90VTmzXkV%2BJV9yFvbXDOpacInSk0lzzImyjTVKqSE6k%2FIYfw2aiixyGun5Pm6nfLaSpt9%2FnuHGUBUQXaez%2Bn8SxyQPB1QeYxtFLxHZI5s6NYIvnWbtpuTmoATrAF9%2Bz1MHIC5roJLkAf3nNEpXAFU0XkMLqhyMIGOqUB%2F5hHiMc404XdCO2yXBbt6kbSxkUK1vReAmZjmf5fJCmE%2FLstd0OTm8ZYD0cAZih6L70MDsbvOCRuuytI9w2%2BJASFapsOcR1xPflE0RJuJZILtRE0Lw3lJUYXwl64miD6VKpi9uPX9uRSS8%2FGBTcBuK4MxK%2B2%2FOlwOCE7bEPjq08O0f8ng%2FyfZSwwevVLW2E8ubUAhdqPy4U93n6Eyvmr93H4A%2FPR&X-Amz-Signature=3eaf62be25a8cd1eaaadde090a523574a2de29d863a51c8bc08a4ac593581936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466366QM2LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbEGZfMrHZXuPcMQrxOVhGQ2ebyswX8iDyMgZKAEaCAAiEA%2FP1UeWajobKDwgPw%2Bb%2F2Lr9Wxcaregv6VMt%2FszvjArYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnlQawp9QKaJL9cQSrcAyWqXBCMFsqieXqYe8WmM741G071QhJzDlFZ87Tivmd1173Uab01TvV%2BMXuRLeiv69GHd7Nm9u%2Ff7Clp2AIzUT%2FIyMrSwT54VhFH4TICIMS%2BslZ8%2BrvoBWEwy65dSByVuRkACbWMmOVdwvAyJJfxjctQx4DSdhYj4i0tZNSsBzArrF60PbzUf008CL5JuqIxCYDxrUnGLnearO2uVfuLxL63jlrrrNeVyRV0ypRaNXpCFL4Ra1N18iHg6CFpkiEKWywMm8ehmn%2BB047cw85MJo%2B5pHbZE9uSJLgcS0Yp1sTxF9ehDF3ZsWGH8sAZ0vSFZx%2BrmfhOFaUw%2FJEkUPSP1eAXtXkz24nOKOD%2BQselxOK8UyNZuFYAOegqebyuDQFY4tcqUIAFMTW7EV5zFnOxFWnWaFTwVPy86DCg6VLSwO%2BKGIFZHOpQK8%2FRNteTLUtTwg9kM7ROQYdJsCqlsapF2RmcE2rXjnvIZ6wW90VTmzXkV%2BJV9yFvbXDOpacInSk0lzzImyjTVKqSE6k%2FIYfw2aiixyGun5Pm6nfLaSpt9%2FnuHGUBUQXaez%2Bn8SxyQPB1QeYxtFLxHZI5s6NYIvnWbtpuTmoATrAF9%2Bz1MHIC5roJLkAf3nNEpXAFU0XkMLqhyMIGOqUB%2F5hHiMc404XdCO2yXBbt6kbSxkUK1vReAmZjmf5fJCmE%2FLstd0OTm8ZYD0cAZih6L70MDsbvOCRuuytI9w2%2BJASFapsOcR1xPflE0RJuJZILtRE0Lw3lJUYXwl64miD6VKpi9uPX9uRSS8%2FGBTcBuK4MxK%2B2%2FOlwOCE7bEPjq08O0f8ng%2FyfZSwwevVLW2E8ubUAhdqPy4U93n6Eyvmr93H4A%2FPR&X-Amz-Signature=5187090343e290cc8da0e741755d33822bcce3f4487e8dc804dcf5971a28152e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466366QM2LX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbEGZfMrHZXuPcMQrxOVhGQ2ebyswX8iDyMgZKAEaCAAiEA%2FP1UeWajobKDwgPw%2Bb%2F2Lr9Wxcaregv6VMt%2FszvjArYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnlQawp9QKaJL9cQSrcAyWqXBCMFsqieXqYe8WmM741G071QhJzDlFZ87Tivmd1173Uab01TvV%2BMXuRLeiv69GHd7Nm9u%2Ff7Clp2AIzUT%2FIyMrSwT54VhFH4TICIMS%2BslZ8%2BrvoBWEwy65dSByVuRkACbWMmOVdwvAyJJfxjctQx4DSdhYj4i0tZNSsBzArrF60PbzUf008CL5JuqIxCYDxrUnGLnearO2uVfuLxL63jlrrrNeVyRV0ypRaNXpCFL4Ra1N18iHg6CFpkiEKWywMm8ehmn%2BB047cw85MJo%2B5pHbZE9uSJLgcS0Yp1sTxF9ehDF3ZsWGH8sAZ0vSFZx%2BrmfhOFaUw%2FJEkUPSP1eAXtXkz24nOKOD%2BQselxOK8UyNZuFYAOegqebyuDQFY4tcqUIAFMTW7EV5zFnOxFWnWaFTwVPy86DCg6VLSwO%2BKGIFZHOpQK8%2FRNteTLUtTwg9kM7ROQYdJsCqlsapF2RmcE2rXjnvIZ6wW90VTmzXkV%2BJV9yFvbXDOpacInSk0lzzImyjTVKqSE6k%2FIYfw2aiixyGun5Pm6nfLaSpt9%2FnuHGUBUQXaez%2Bn8SxyQPB1QeYxtFLxHZI5s6NYIvnWbtpuTmoATrAF9%2Bz1MHIC5roJLkAf3nNEpXAFU0XkMLqhyMIGOqUB%2F5hHiMc404XdCO2yXBbt6kbSxkUK1vReAmZjmf5fJCmE%2FLstd0OTm8ZYD0cAZih6L70MDsbvOCRuuytI9w2%2BJASFapsOcR1xPflE0RJuJZILtRE0Lw3lJUYXwl64miD6VKpi9uPX9uRSS8%2FGBTcBuK4MxK%2B2%2FOlwOCE7bEPjq08O0f8ng%2FyfZSwwevVLW2E8ubUAhdqPy4U93n6Eyvmr93H4A%2FPR&X-Amz-Signature=39adb44dff3a2f5cdfa45dcf72e4d4c6bc4b4a49504d942cc1b531b9bbb08fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
