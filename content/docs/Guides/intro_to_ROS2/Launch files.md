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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFXN5RQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbG45Qbq1m%2B2uk%2BGpLjDhwInMDNDf1c7J1PehxlEcjoAiEA4BKsH3NhoilYffsEwh6LvPwbIS8zFaEvpuip4%2BkA0pgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFfSzMmbqgwqOMJ8ZSrcA9ONZLFzmR6ub9nk05G8H%2BZ%2FfnavZxrLoUhujl6AzXovOZYUbT2wp7UZNPay1SL4jYJQHPyWURf%2Bnu13TmxDAtP1xlnWmv4I6H75kA7PcW1Ljryh%2FUimEf78Mdx3lXiH9IvVyRqf0I1xk8FKbULoohl27D9hm27RwbM5ERQo2kkj0Jg5l9bgSkyUgy5w6NzkHkHM0eZrMei8vtZMvoSzVKPRA3EQKG%2FdOyPY1eh4zqfpIA%2Bsz%2Bo59aoGV%2FQTHzL55lB1fowYraZxK4jA9eRWMGlQTqObOY4dAzQ8467i%2B8I8yBeDYcmtAZB3OfucSzyXKsgxEJGVxkLTck%2BXZRmSrkW%2FsYMVYIUP76pQCcNuH7a8H0yX6l4T8m36%2BqER15yNoX9XE%2Baj6qurKsgfKc7sNwFIPR%2FmPznvjBvwmbuHTszlohbY7MYcx%2FEnl479cLyl5FdHFFO3ZfPs8UImBB91iS4dThGlupZjYAl2awd6MSHEVjyJ7R35GhSBp9uC3zvBGADjoxlixKejRIzAskRwqd3lpWeNU2czkt%2FHQRst82PnjSlUOcIxp%2BUQsmuJGFWCwgHgOT4En21Ya5DoR1x89MfG8QRpEBssBUmCdfyAjwH413eqQ7YKkJy%2FQan0MPKr7b0GOqUBX%2BbZd7xFc0P2Rt80v%2BDwBLhjeTNFgrNzCRbFHKZLfg5rOOYx%2FMYc5uqyxXwiutz8XgWT7s75YEDlBGJ5Qccekq3EsZEpXgZ2uFMsXu9J5oIfgNf7TJLkuwJGoJZ80MOy0XWy0aPXmiQvoeJO%2BFz9TWdRS1twfTkSG3xjyF%2BnrsWkyNV8v53%2F%2FepMwRiUv7N34fegNWNBv9Dpcx9n%2FzErx0jbKUbR&X-Amz-Signature=9e1370cc6645a85acf340ddbddf2b26629c971baa53e602089b4919516a6e8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFXN5RQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbG45Qbq1m%2B2uk%2BGpLjDhwInMDNDf1c7J1PehxlEcjoAiEA4BKsH3NhoilYffsEwh6LvPwbIS8zFaEvpuip4%2BkA0pgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFfSzMmbqgwqOMJ8ZSrcA9ONZLFzmR6ub9nk05G8H%2BZ%2FfnavZxrLoUhujl6AzXovOZYUbT2wp7UZNPay1SL4jYJQHPyWURf%2Bnu13TmxDAtP1xlnWmv4I6H75kA7PcW1Ljryh%2FUimEf78Mdx3lXiH9IvVyRqf0I1xk8FKbULoohl27D9hm27RwbM5ERQo2kkj0Jg5l9bgSkyUgy5w6NzkHkHM0eZrMei8vtZMvoSzVKPRA3EQKG%2FdOyPY1eh4zqfpIA%2Bsz%2Bo59aoGV%2FQTHzL55lB1fowYraZxK4jA9eRWMGlQTqObOY4dAzQ8467i%2B8I8yBeDYcmtAZB3OfucSzyXKsgxEJGVxkLTck%2BXZRmSrkW%2FsYMVYIUP76pQCcNuH7a8H0yX6l4T8m36%2BqER15yNoX9XE%2Baj6qurKsgfKc7sNwFIPR%2FmPznvjBvwmbuHTszlohbY7MYcx%2FEnl479cLyl5FdHFFO3ZfPs8UImBB91iS4dThGlupZjYAl2awd6MSHEVjyJ7R35GhSBp9uC3zvBGADjoxlixKejRIzAskRwqd3lpWeNU2czkt%2FHQRst82PnjSlUOcIxp%2BUQsmuJGFWCwgHgOT4En21Ya5DoR1x89MfG8QRpEBssBUmCdfyAjwH413eqQ7YKkJy%2FQan0MPKr7b0GOqUBX%2BbZd7xFc0P2Rt80v%2BDwBLhjeTNFgrNzCRbFHKZLfg5rOOYx%2FMYc5uqyxXwiutz8XgWT7s75YEDlBGJ5Qccekq3EsZEpXgZ2uFMsXu9J5oIfgNf7TJLkuwJGoJZ80MOy0XWy0aPXmiQvoeJO%2BFz9TWdRS1twfTkSG3xjyF%2BnrsWkyNV8v53%2F%2FepMwRiUv7N34fegNWNBv9Dpcx9n%2FzErx0jbKUbR&X-Amz-Signature=6756cc6fc1cee0f97309c3b542e2a3c4c86328a55d36f6f28e7bb2d76ffc9fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFXN5RQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbG45Qbq1m%2B2uk%2BGpLjDhwInMDNDf1c7J1PehxlEcjoAiEA4BKsH3NhoilYffsEwh6LvPwbIS8zFaEvpuip4%2BkA0pgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFfSzMmbqgwqOMJ8ZSrcA9ONZLFzmR6ub9nk05G8H%2BZ%2FfnavZxrLoUhujl6AzXovOZYUbT2wp7UZNPay1SL4jYJQHPyWURf%2Bnu13TmxDAtP1xlnWmv4I6H75kA7PcW1Ljryh%2FUimEf78Mdx3lXiH9IvVyRqf0I1xk8FKbULoohl27D9hm27RwbM5ERQo2kkj0Jg5l9bgSkyUgy5w6NzkHkHM0eZrMei8vtZMvoSzVKPRA3EQKG%2FdOyPY1eh4zqfpIA%2Bsz%2Bo59aoGV%2FQTHzL55lB1fowYraZxK4jA9eRWMGlQTqObOY4dAzQ8467i%2B8I8yBeDYcmtAZB3OfucSzyXKsgxEJGVxkLTck%2BXZRmSrkW%2FsYMVYIUP76pQCcNuH7a8H0yX6l4T8m36%2BqER15yNoX9XE%2Baj6qurKsgfKc7sNwFIPR%2FmPznvjBvwmbuHTszlohbY7MYcx%2FEnl479cLyl5FdHFFO3ZfPs8UImBB91iS4dThGlupZjYAl2awd6MSHEVjyJ7R35GhSBp9uC3zvBGADjoxlixKejRIzAskRwqd3lpWeNU2czkt%2FHQRst82PnjSlUOcIxp%2BUQsmuJGFWCwgHgOT4En21Ya5DoR1x89MfG8QRpEBssBUmCdfyAjwH413eqQ7YKkJy%2FQan0MPKr7b0GOqUBX%2BbZd7xFc0P2Rt80v%2BDwBLhjeTNFgrNzCRbFHKZLfg5rOOYx%2FMYc5uqyxXwiutz8XgWT7s75YEDlBGJ5Qccekq3EsZEpXgZ2uFMsXu9J5oIfgNf7TJLkuwJGoJZ80MOy0XWy0aPXmiQvoeJO%2BFz9TWdRS1twfTkSG3xjyF%2BnrsWkyNV8v53%2F%2FepMwRiUv7N34fegNWNBv9Dpcx9n%2FzErx0jbKUbR&X-Amz-Signature=af676a0f30021e50208c5a336f378116d495e1894e0952a59a3f7e222d585e90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
