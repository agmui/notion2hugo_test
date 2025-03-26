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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRIA25A%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1NkXN0%2Flkb0zURhzmA2JY8GABU5xcC1f%2FVdKF7URAVAiEAtnojUN29UkBifTlS3xmCcntba3bSfuBa9oTJpxvF4ksq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIAv4pNMHWVH%2F6Q4MSrcA5hhslVjCDDEUhWbmOcysqr%2BZp12PwPVov0KPeu%2BQ57kFoNcd3vbPMT7hGHFRWMYA3oNhDf3FFRDnTQHk1JQVbqe3Z%2BrubWvo9p9UNYTZjwsyxTn42tEAhdYPrOoRgIQIRtNYktfxe5bnVbfr8ReWnmhmiJb8HkmA81%2Bsuk%2FYC3xawo%2FQmrd8Wiw%2B0eS0dIwgvk%2B%2F%2FZvpBdwecZiM1YlViDp2NQiwIE0R3vNjhQ6j9RIGygk0w0ejMmsBzm5mdhEh8Lmf4q23mLfdWegZE4VInszzj5dnsNLQmwFL8Gg5jOAkfzQbeuylP0l%2FrtHa%2Bi1jit1veEV%2F4wJWM%2Bk03RfiCpLfJe6S84lCN8NrJTtbaPDFIbssXctOq%2BokwW2addaw%2BrMZoalYRpk1Y1ktnU6aqNrNfet0hofCVrlvUWzV6fkZYkdViNX6To%2B8ERrkoKZiLDkqDVKGDyfMp4w6dXHnW0tpPFsEpTZLXc8hhUhDX5lOPEj4xaB0Gjk0ecJPD3vsaL75DaxdeW%2BeiV95zONHbkK%2FuuKkbpip7Zf0Q12i4WrVZDAIoDw%2FCvuWey7lk6ZXH%2FQ7q7QdUP1fz4FyGI%2BO8giF5JW44urIe5t%2B1wHKqMMG7SlAQaN1iH7%2FCL0MNDaj78GOqUBBaO0SK%2FGTl1fEQmlgsprMlEk0w43jwlnMMOfoHNb%2B%2FigrNSoTX5uchhH3UlJ%2FIxQXTx5Pk7IE05857T08Q%2Be5LvqKalw7KV4CLqyooFefN02Po61%2BBiCeXszQYAGmWzh5ubuSdz6wGaY788XmuCXEu07f2jawxeO4lx1mb5ZsIlgFUvs%2By4qvapPWZ2qTPV29%2BQq8BPukUXDVT8rGY86g3RiT1hs&X-Amz-Signature=ed779f350052f183bcd0c4f811778ce08248aa7609bdc5ebb7b11d1fc1aab88b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRIA25A%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1NkXN0%2Flkb0zURhzmA2JY8GABU5xcC1f%2FVdKF7URAVAiEAtnojUN29UkBifTlS3xmCcntba3bSfuBa9oTJpxvF4ksq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIAv4pNMHWVH%2F6Q4MSrcA5hhslVjCDDEUhWbmOcysqr%2BZp12PwPVov0KPeu%2BQ57kFoNcd3vbPMT7hGHFRWMYA3oNhDf3FFRDnTQHk1JQVbqe3Z%2BrubWvo9p9UNYTZjwsyxTn42tEAhdYPrOoRgIQIRtNYktfxe5bnVbfr8ReWnmhmiJb8HkmA81%2Bsuk%2FYC3xawo%2FQmrd8Wiw%2B0eS0dIwgvk%2B%2F%2FZvpBdwecZiM1YlViDp2NQiwIE0R3vNjhQ6j9RIGygk0w0ejMmsBzm5mdhEh8Lmf4q23mLfdWegZE4VInszzj5dnsNLQmwFL8Gg5jOAkfzQbeuylP0l%2FrtHa%2Bi1jit1veEV%2F4wJWM%2Bk03RfiCpLfJe6S84lCN8NrJTtbaPDFIbssXctOq%2BokwW2addaw%2BrMZoalYRpk1Y1ktnU6aqNrNfet0hofCVrlvUWzV6fkZYkdViNX6To%2B8ERrkoKZiLDkqDVKGDyfMp4w6dXHnW0tpPFsEpTZLXc8hhUhDX5lOPEj4xaB0Gjk0ecJPD3vsaL75DaxdeW%2BeiV95zONHbkK%2FuuKkbpip7Zf0Q12i4WrVZDAIoDw%2FCvuWey7lk6ZXH%2FQ7q7QdUP1fz4FyGI%2BO8giF5JW44urIe5t%2B1wHKqMMG7SlAQaN1iH7%2FCL0MNDaj78GOqUBBaO0SK%2FGTl1fEQmlgsprMlEk0w43jwlnMMOfoHNb%2B%2FigrNSoTX5uchhH3UlJ%2FIxQXTx5Pk7IE05857T08Q%2Be5LvqKalw7KV4CLqyooFefN02Po61%2BBiCeXszQYAGmWzh5ubuSdz6wGaY788XmuCXEu07f2jawxeO4lx1mb5ZsIlgFUvs%2By4qvapPWZ2qTPV29%2BQq8BPukUXDVT8rGY86g3RiT1hs&X-Amz-Signature=a0ddbabaed7b8c2e6a442bb306d8427ef5f8cdd64855472209cc7156f51c9df8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRIA25A%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1NkXN0%2Flkb0zURhzmA2JY8GABU5xcC1f%2FVdKF7URAVAiEAtnojUN29UkBifTlS3xmCcntba3bSfuBa9oTJpxvF4ksq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIAv4pNMHWVH%2F6Q4MSrcA5hhslVjCDDEUhWbmOcysqr%2BZp12PwPVov0KPeu%2BQ57kFoNcd3vbPMT7hGHFRWMYA3oNhDf3FFRDnTQHk1JQVbqe3Z%2BrubWvo9p9UNYTZjwsyxTn42tEAhdYPrOoRgIQIRtNYktfxe5bnVbfr8ReWnmhmiJb8HkmA81%2Bsuk%2FYC3xawo%2FQmrd8Wiw%2B0eS0dIwgvk%2B%2F%2FZvpBdwecZiM1YlViDp2NQiwIE0R3vNjhQ6j9RIGygk0w0ejMmsBzm5mdhEh8Lmf4q23mLfdWegZE4VInszzj5dnsNLQmwFL8Gg5jOAkfzQbeuylP0l%2FrtHa%2Bi1jit1veEV%2F4wJWM%2Bk03RfiCpLfJe6S84lCN8NrJTtbaPDFIbssXctOq%2BokwW2addaw%2BrMZoalYRpk1Y1ktnU6aqNrNfet0hofCVrlvUWzV6fkZYkdViNX6To%2B8ERrkoKZiLDkqDVKGDyfMp4w6dXHnW0tpPFsEpTZLXc8hhUhDX5lOPEj4xaB0Gjk0ecJPD3vsaL75DaxdeW%2BeiV95zONHbkK%2FuuKkbpip7Zf0Q12i4WrVZDAIoDw%2FCvuWey7lk6ZXH%2FQ7q7QdUP1fz4FyGI%2BO8giF5JW44urIe5t%2B1wHKqMMG7SlAQaN1iH7%2FCL0MNDaj78GOqUBBaO0SK%2FGTl1fEQmlgsprMlEk0w43jwlnMMOfoHNb%2B%2FigrNSoTX5uchhH3UlJ%2FIxQXTx5Pk7IE05857T08Q%2Be5LvqKalw7KV4CLqyooFefN02Po61%2BBiCeXszQYAGmWzh5ubuSdz6wGaY788XmuCXEu07f2jawxeO4lx1mb5ZsIlgFUvs%2By4qvapPWZ2qTPV29%2BQq8BPukUXDVT8rGY86g3RiT1hs&X-Amz-Signature=324f29514516848a718827f505225995e7a04117d065dcf590b87c20cb9a4c15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
