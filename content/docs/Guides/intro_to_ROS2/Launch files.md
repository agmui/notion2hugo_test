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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USR54P7X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNUtNrj5P%2BL9z0Kje8%2B%2BhGjTnfOVwGbIY9byviJ998aAiEAhB7EU1tfNQRCrXzd5VHH9oLfdkfvLmGzfcRuvfqT%2Bj8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIWXrvEW6kmTStgu4ircA0rk6idd5raRteYQvb2%2ByGjnQkdJ9MH6QEDOCM940i2%2B9o75uzu%2BY%2FJmyATFnRhVMXAiyCIlHkAUOgz8lpn01vb1Asl1phiTzcgc%2BHFWxZJthBSZnlrqj9Rwyv0s0Fcu%2F1zU1RU%2BX529HnE6vQcUlkHmfKM%2B0zN6jpp2FMJnclYEBl3R8GwcgtqKB%2FcslEAPbqkQR6SBbyg2yTggdTr2%2FgnNVTmxkrnNwfK1OSzG4C3oUXwzad5UGZH4oZbX138PiijtseOCqnPY7wk1AafdkYIozAeFCWHhaS165JEb3dQkkBQHxn00dod3S8wRrsQVAVvft09pggoilnqqZ8RqrblAr4Bm2LyIV54%2F36f1YzqgafmNsbURtQXCR0QfHKxDJ1FjMk7N1YFgOblIvCIi%2BLsOte0Fl0TSGrf1HPL%2FmOc8yth5%2Bx260nL4TJf2IXlNgmroaGOS%2F%2BuYiPxA7EWN26rXqQ3FhlA2eg9ECUkhNQ%2FIH3u73bP2Lvu8BJMqNlOke60tL3z6Cb73Oszhwxg6WPE4neF4adCF6oLrVPzM4m%2FV%2BJGc%2BLfTTQcdENanggDLVLgxLmM%2FQpLIMOH3gpw1Yw%2Bbsrl%2FfKiwoyrVQgU%2FdZGw6d67y%2Bhox%2FKgvpn5MLHCvMQGOqUBXYyd1RScTjYzBbeWkJQc6UzF02D2GOFKSztRZzEXMoanEauOnOIzt7ZxigwrOIxDy2nB8%2BHRadCO1GjKwVEq9hP0zmtz7KIU2loZtYc9JEsQYtTwxqcOq5Uy%2FiKdoCcPEJAaVJcJZi1HmuIDzdu4vM6BiOUUIR%2FmO8N9%2FJ1mS8n%2BGMK4bBoJGk0b%2BhtfGStPuBH8rlTiCns7DqgT7TV7wSoYDh%2BO&X-Amz-Signature=eb55f36311291ff383129acb09aadb1a9b1a5389dea0ef5779cd19bf4c520c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USR54P7X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNUtNrj5P%2BL9z0Kje8%2B%2BhGjTnfOVwGbIY9byviJ998aAiEAhB7EU1tfNQRCrXzd5VHH9oLfdkfvLmGzfcRuvfqT%2Bj8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIWXrvEW6kmTStgu4ircA0rk6idd5raRteYQvb2%2ByGjnQkdJ9MH6QEDOCM940i2%2B9o75uzu%2BY%2FJmyATFnRhVMXAiyCIlHkAUOgz8lpn01vb1Asl1phiTzcgc%2BHFWxZJthBSZnlrqj9Rwyv0s0Fcu%2F1zU1RU%2BX529HnE6vQcUlkHmfKM%2B0zN6jpp2FMJnclYEBl3R8GwcgtqKB%2FcslEAPbqkQR6SBbyg2yTggdTr2%2FgnNVTmxkrnNwfK1OSzG4C3oUXwzad5UGZH4oZbX138PiijtseOCqnPY7wk1AafdkYIozAeFCWHhaS165JEb3dQkkBQHxn00dod3S8wRrsQVAVvft09pggoilnqqZ8RqrblAr4Bm2LyIV54%2F36f1YzqgafmNsbURtQXCR0QfHKxDJ1FjMk7N1YFgOblIvCIi%2BLsOte0Fl0TSGrf1HPL%2FmOc8yth5%2Bx260nL4TJf2IXlNgmroaGOS%2F%2BuYiPxA7EWN26rXqQ3FhlA2eg9ECUkhNQ%2FIH3u73bP2Lvu8BJMqNlOke60tL3z6Cb73Oszhwxg6WPE4neF4adCF6oLrVPzM4m%2FV%2BJGc%2BLfTTQcdENanggDLVLgxLmM%2FQpLIMOH3gpw1Yw%2Bbsrl%2FfKiwoyrVQgU%2FdZGw6d67y%2Bhox%2FKgvpn5MLHCvMQGOqUBXYyd1RScTjYzBbeWkJQc6UzF02D2GOFKSztRZzEXMoanEauOnOIzt7ZxigwrOIxDy2nB8%2BHRadCO1GjKwVEq9hP0zmtz7KIU2loZtYc9JEsQYtTwxqcOq5Uy%2FiKdoCcPEJAaVJcJZi1HmuIDzdu4vM6BiOUUIR%2FmO8N9%2FJ1mS8n%2BGMK4bBoJGk0b%2BhtfGStPuBH8rlTiCns7DqgT7TV7wSoYDh%2BO&X-Amz-Signature=bfb5bed943771cfe11123a27a95090762ecfad12d72c9bc1e37039128c71f37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USR54P7X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNUtNrj5P%2BL9z0Kje8%2B%2BhGjTnfOVwGbIY9byviJ998aAiEAhB7EU1tfNQRCrXzd5VHH9oLfdkfvLmGzfcRuvfqT%2Bj8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIWXrvEW6kmTStgu4ircA0rk6idd5raRteYQvb2%2ByGjnQkdJ9MH6QEDOCM940i2%2B9o75uzu%2BY%2FJmyATFnRhVMXAiyCIlHkAUOgz8lpn01vb1Asl1phiTzcgc%2BHFWxZJthBSZnlrqj9Rwyv0s0Fcu%2F1zU1RU%2BX529HnE6vQcUlkHmfKM%2B0zN6jpp2FMJnclYEBl3R8GwcgtqKB%2FcslEAPbqkQR6SBbyg2yTggdTr2%2FgnNVTmxkrnNwfK1OSzG4C3oUXwzad5UGZH4oZbX138PiijtseOCqnPY7wk1AafdkYIozAeFCWHhaS165JEb3dQkkBQHxn00dod3S8wRrsQVAVvft09pggoilnqqZ8RqrblAr4Bm2LyIV54%2F36f1YzqgafmNsbURtQXCR0QfHKxDJ1FjMk7N1YFgOblIvCIi%2BLsOte0Fl0TSGrf1HPL%2FmOc8yth5%2Bx260nL4TJf2IXlNgmroaGOS%2F%2BuYiPxA7EWN26rXqQ3FhlA2eg9ECUkhNQ%2FIH3u73bP2Lvu8BJMqNlOke60tL3z6Cb73Oszhwxg6WPE4neF4adCF6oLrVPzM4m%2FV%2BJGc%2BLfTTQcdENanggDLVLgxLmM%2FQpLIMOH3gpw1Yw%2Bbsrl%2FfKiwoyrVQgU%2FdZGw6d67y%2Bhox%2FKgvpn5MLHCvMQGOqUBXYyd1RScTjYzBbeWkJQc6UzF02D2GOFKSztRZzEXMoanEauOnOIzt7ZxigwrOIxDy2nB8%2BHRadCO1GjKwVEq9hP0zmtz7KIU2loZtYc9JEsQYtTwxqcOq5Uy%2FiKdoCcPEJAaVJcJZi1HmuIDzdu4vM6BiOUUIR%2FmO8N9%2FJ1mS8n%2BGMK4bBoJGk0b%2BhtfGStPuBH8rlTiCns7DqgT7TV7wSoYDh%2BO&X-Amz-Signature=8b7a8d1e982ec77e3de87b28b4302ceb58154eb3406bf50b407b4b417b55d7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
