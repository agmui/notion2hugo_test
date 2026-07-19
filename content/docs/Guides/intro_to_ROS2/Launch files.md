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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HM33SP4%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMTsvg3oLqpfz7vzQ3%2F4wEUz5209eVrCySTP6BdfcoGAiAKn%2Bw3LMtELmL2L4Hp5BaRRw%2BvSLr2E3k4WegQK3Ux7SqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXUrbeQVjFZJIK%2FY4KtwDZC%2BcL5oHSWDP6tOf%2FG%2FeObvK384QA49YQryREEK4OS4ToRs3qLO85qoArMMAePwzt1QFyGGpcZTuT58sGe7tEL9CFkTPIGIdfy5rvN5kvpXici%2F0Wvm5Fh6LeU%2FyebzI82txg1tN9LdN9CFNTeTnkPsbWdU%2Bb80PzrBKFDRCbm%2Fe%2BLll1xi1f5TvPfCxaYLxqb%2F3GcLId5G5qDMJ6yeIt70OY1fbaba6omedvVtKezPZtYiXLqYZ7b7MCcbJM3rSGQd2D89hwxjAxADiV616YlU5fLqfwntKj6TERoqRb5GoPfM8bq%2FFOV8c1cIEolf5JrhZkd03m%2BdKRxYyFKc9zw2F%2BVsGDJpn2cD%2F4acpiuoNICt017PISX8WM9AZjWmoQrvut%2FdDO7d3S%2BWyVM18BJ2NMiN%2BJ3hnUr%2BQiDnv53NfO6yoeD03Y5YqEY%2BF6UUQSvhVvq8oh%2Fy4L57lgv6wf5XLx2jhvZxA2M7v231JxbrRZ7yAcU4YXWaR7IvSQf8G0N4%2FVRN1Jehcwvw6Xu4%2FYbP5X4X0U6E7hdmTKfQ95fAVeXYuTGbdwQfsSYfgmCu0Vct6EC52%2B3Uwj9OFQEtQiB8k%2FCC1nF5YNjC370t4eSwEvMaP8J4k1HTns1Ewq9bw0gY6pgE%2FFIm5XENlybfQb87PqU%2F14%2BLRaEJlteys4a6CibdnCMZ45NMIBNDeB8eKQLqRlqSQr7cTAY2fw7fQFaHDjT0c4I0tDDEI7INyXdEzYO%2FSVYLLN6cFSXUtXvdMef2zz0CU77DIgUvtxdN31%2B8%2B6A6EnOLencWYPQOtfooGvrcVi3Ny0N%2BSKXieiF9DtFeerMhqqO1u3d9OyXupvMAAqeNszvi%2BupK2&X-Amz-Signature=a8a952c0549c72fe713d02cb5427f5c2e6ef03736be8fccbfb59119917c13a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HM33SP4%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMTsvg3oLqpfz7vzQ3%2F4wEUz5209eVrCySTP6BdfcoGAiAKn%2Bw3LMtELmL2L4Hp5BaRRw%2BvSLr2E3k4WegQK3Ux7SqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXUrbeQVjFZJIK%2FY4KtwDZC%2BcL5oHSWDP6tOf%2FG%2FeObvK384QA49YQryREEK4OS4ToRs3qLO85qoArMMAePwzt1QFyGGpcZTuT58sGe7tEL9CFkTPIGIdfy5rvN5kvpXici%2F0Wvm5Fh6LeU%2FyebzI82txg1tN9LdN9CFNTeTnkPsbWdU%2Bb80PzrBKFDRCbm%2Fe%2BLll1xi1f5TvPfCxaYLxqb%2F3GcLId5G5qDMJ6yeIt70OY1fbaba6omedvVtKezPZtYiXLqYZ7b7MCcbJM3rSGQd2D89hwxjAxADiV616YlU5fLqfwntKj6TERoqRb5GoPfM8bq%2FFOV8c1cIEolf5JrhZkd03m%2BdKRxYyFKc9zw2F%2BVsGDJpn2cD%2F4acpiuoNICt017PISX8WM9AZjWmoQrvut%2FdDO7d3S%2BWyVM18BJ2NMiN%2BJ3hnUr%2BQiDnv53NfO6yoeD03Y5YqEY%2BF6UUQSvhVvq8oh%2Fy4L57lgv6wf5XLx2jhvZxA2M7v231JxbrRZ7yAcU4YXWaR7IvSQf8G0N4%2FVRN1Jehcwvw6Xu4%2FYbP5X4X0U6E7hdmTKfQ95fAVeXYuTGbdwQfsSYfgmCu0Vct6EC52%2B3Uwj9OFQEtQiB8k%2FCC1nF5YNjC370t4eSwEvMaP8J4k1HTns1Ewq9bw0gY6pgE%2FFIm5XENlybfQb87PqU%2F14%2BLRaEJlteys4a6CibdnCMZ45NMIBNDeB8eKQLqRlqSQr7cTAY2fw7fQFaHDjT0c4I0tDDEI7INyXdEzYO%2FSVYLLN6cFSXUtXvdMef2zz0CU77DIgUvtxdN31%2B8%2B6A6EnOLencWYPQOtfooGvrcVi3Ny0N%2BSKXieiF9DtFeerMhqqO1u3d9OyXupvMAAqeNszvi%2BupK2&X-Amz-Signature=c0f97e655c03ffd8d1d5490c161cbed71668100792f511509ec9d8904d69fa19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HM33SP4%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMTsvg3oLqpfz7vzQ3%2F4wEUz5209eVrCySTP6BdfcoGAiAKn%2Bw3LMtELmL2L4Hp5BaRRw%2BvSLr2E3k4WegQK3Ux7SqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXUrbeQVjFZJIK%2FY4KtwDZC%2BcL5oHSWDP6tOf%2FG%2FeObvK384QA49YQryREEK4OS4ToRs3qLO85qoArMMAePwzt1QFyGGpcZTuT58sGe7tEL9CFkTPIGIdfy5rvN5kvpXici%2F0Wvm5Fh6LeU%2FyebzI82txg1tN9LdN9CFNTeTnkPsbWdU%2Bb80PzrBKFDRCbm%2Fe%2BLll1xi1f5TvPfCxaYLxqb%2F3GcLId5G5qDMJ6yeIt70OY1fbaba6omedvVtKezPZtYiXLqYZ7b7MCcbJM3rSGQd2D89hwxjAxADiV616YlU5fLqfwntKj6TERoqRb5GoPfM8bq%2FFOV8c1cIEolf5JrhZkd03m%2BdKRxYyFKc9zw2F%2BVsGDJpn2cD%2F4acpiuoNICt017PISX8WM9AZjWmoQrvut%2FdDO7d3S%2BWyVM18BJ2NMiN%2BJ3hnUr%2BQiDnv53NfO6yoeD03Y5YqEY%2BF6UUQSvhVvq8oh%2Fy4L57lgv6wf5XLx2jhvZxA2M7v231JxbrRZ7yAcU4YXWaR7IvSQf8G0N4%2FVRN1Jehcwvw6Xu4%2FYbP5X4X0U6E7hdmTKfQ95fAVeXYuTGbdwQfsSYfgmCu0Vct6EC52%2B3Uwj9OFQEtQiB8k%2FCC1nF5YNjC370t4eSwEvMaP8J4k1HTns1Ewq9bw0gY6pgE%2FFIm5XENlybfQb87PqU%2F14%2BLRaEJlteys4a6CibdnCMZ45NMIBNDeB8eKQLqRlqSQr7cTAY2fw7fQFaHDjT0c4I0tDDEI7INyXdEzYO%2FSVYLLN6cFSXUtXvdMef2zz0CU77DIgUvtxdN31%2B8%2B6A6EnOLencWYPQOtfooGvrcVi3Ny0N%2BSKXieiF9DtFeerMhqqO1u3d9OyXupvMAAqeNszvi%2BupK2&X-Amz-Signature=11bd3f61a411e3dc788d52d8d363417a2fa6c7b2bae2aa1162d5e0b7e6769a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
