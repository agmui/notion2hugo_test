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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4MHRZE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDl1m7CPm0cuap%2BQaXFzEpf0qh0U1P6heM4MYREk2phSAiEAwwtjMT5kOnmIpy7IKVIyaoD7URYera8%2BDdkKHliUpDAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2vsFuOHjESb%2BeNSCrcA7J3E%2BDVpBtvhAOToPmWveqXM%2FepcovpXB%2B22wQVMGyoJFiqpGDK6vRQdHSFfL9EaSI8tT5h9KyhMia7OuDsPsAGYPFI1%2B%2FrxSuS9IGjN1F4yQBJuNBgN78VgDRFDVrLe1tGzkpPJoDv2aU8Obr8kVnPQZWXii2d963iDxzG%2B8ZyoF6hxVeXO3A6CxwnS4Y25dnuhfviy2o6B7DgDURSxfii9RkxfLzVF5riTWyPpCleInwV5ITl6a1ADwmGMRRjYN0HxQ1XISJJRnL1JkFIiL5MrJbT2fYAnM3lEmhLqjcjrd6xqZpS7JFW1ErFkJA76NhxceMnlf95FoZ1kqngvB1AarQnST6sIb%2FireZIa2oNv4pEs4kMozNyODfttHPRHERC3a%2BYj%2B%2BVwj759vbIGnz0vbEWi%2FB1z3u9Fd%2FsjwFU52yRZjZRD7kmAMLC%2BnKzAmh3xQJpDpG4nuA%2BNMslgH6zdrHsMDUYPSuXJEvvvb4tqDAD36TDpxrd17Wyf08zKl8xGliRuPW1IMMVoL47WQFcig55F7eMhzhs34g5SKxtv85hOIJ94bzfqMoL7AYnQGZiIScDAUbJR8EYnWu1xhZEh8mfh6DIPGHkuKfFyy194tNYCBn9ycVUTcylMKPr28AGOqUBrqw1YcnH2LZhhIhQ1sHq3DWLCiMXitNRKrHVB6rn7mMJP3wL3jzxbNbY8NY29Ft1ghys7AMdQz6Ed7PBlxkO%2BF2RrHS8M81NCBnRgdfkS5UCYUUies7v7hslb%2FcY0rJOj9jPcRjUuoHEr0gZBGt5L%2B95qSGWolcM2xMRhaL6vSPIyd80EO7FVNhIb%2BtIE6SULt2R%2BwsU%2FRUQOyx6W3xJEGmPrLRA&X-Amz-Signature=adb710f5dde0bfce33c34a94a2db57a37768445da98b19730e75fafda11e1d52&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4MHRZE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDl1m7CPm0cuap%2BQaXFzEpf0qh0U1P6heM4MYREk2phSAiEAwwtjMT5kOnmIpy7IKVIyaoD7URYera8%2BDdkKHliUpDAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2vsFuOHjESb%2BeNSCrcA7J3E%2BDVpBtvhAOToPmWveqXM%2FepcovpXB%2B22wQVMGyoJFiqpGDK6vRQdHSFfL9EaSI8tT5h9KyhMia7OuDsPsAGYPFI1%2B%2FrxSuS9IGjN1F4yQBJuNBgN78VgDRFDVrLe1tGzkpPJoDv2aU8Obr8kVnPQZWXii2d963iDxzG%2B8ZyoF6hxVeXO3A6CxwnS4Y25dnuhfviy2o6B7DgDURSxfii9RkxfLzVF5riTWyPpCleInwV5ITl6a1ADwmGMRRjYN0HxQ1XISJJRnL1JkFIiL5MrJbT2fYAnM3lEmhLqjcjrd6xqZpS7JFW1ErFkJA76NhxceMnlf95FoZ1kqngvB1AarQnST6sIb%2FireZIa2oNv4pEs4kMozNyODfttHPRHERC3a%2BYj%2B%2BVwj759vbIGnz0vbEWi%2FB1z3u9Fd%2FsjwFU52yRZjZRD7kmAMLC%2BnKzAmh3xQJpDpG4nuA%2BNMslgH6zdrHsMDUYPSuXJEvvvb4tqDAD36TDpxrd17Wyf08zKl8xGliRuPW1IMMVoL47WQFcig55F7eMhzhs34g5SKxtv85hOIJ94bzfqMoL7AYnQGZiIScDAUbJR8EYnWu1xhZEh8mfh6DIPGHkuKfFyy194tNYCBn9ycVUTcylMKPr28AGOqUBrqw1YcnH2LZhhIhQ1sHq3DWLCiMXitNRKrHVB6rn7mMJP3wL3jzxbNbY8NY29Ft1ghys7AMdQz6Ed7PBlxkO%2BF2RrHS8M81NCBnRgdfkS5UCYUUies7v7hslb%2FcY0rJOj9jPcRjUuoHEr0gZBGt5L%2B95qSGWolcM2xMRhaL6vSPIyd80EO7FVNhIb%2BtIE6SULt2R%2BwsU%2FRUQOyx6W3xJEGmPrLRA&X-Amz-Signature=595b5d53c571c05ddc2f5b34872853791abc56deb8d91d6f3bfb1b7e00598232&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4MHRZE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDl1m7CPm0cuap%2BQaXFzEpf0qh0U1P6heM4MYREk2phSAiEAwwtjMT5kOnmIpy7IKVIyaoD7URYera8%2BDdkKHliUpDAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2vsFuOHjESb%2BeNSCrcA7J3E%2BDVpBtvhAOToPmWveqXM%2FepcovpXB%2B22wQVMGyoJFiqpGDK6vRQdHSFfL9EaSI8tT5h9KyhMia7OuDsPsAGYPFI1%2B%2FrxSuS9IGjN1F4yQBJuNBgN78VgDRFDVrLe1tGzkpPJoDv2aU8Obr8kVnPQZWXii2d963iDxzG%2B8ZyoF6hxVeXO3A6CxwnS4Y25dnuhfviy2o6B7DgDURSxfii9RkxfLzVF5riTWyPpCleInwV5ITl6a1ADwmGMRRjYN0HxQ1XISJJRnL1JkFIiL5MrJbT2fYAnM3lEmhLqjcjrd6xqZpS7JFW1ErFkJA76NhxceMnlf95FoZ1kqngvB1AarQnST6sIb%2FireZIa2oNv4pEs4kMozNyODfttHPRHERC3a%2BYj%2B%2BVwj759vbIGnz0vbEWi%2FB1z3u9Fd%2FsjwFU52yRZjZRD7kmAMLC%2BnKzAmh3xQJpDpG4nuA%2BNMslgH6zdrHsMDUYPSuXJEvvvb4tqDAD36TDpxrd17Wyf08zKl8xGliRuPW1IMMVoL47WQFcig55F7eMhzhs34g5SKxtv85hOIJ94bzfqMoL7AYnQGZiIScDAUbJR8EYnWu1xhZEh8mfh6DIPGHkuKfFyy194tNYCBn9ycVUTcylMKPr28AGOqUBrqw1YcnH2LZhhIhQ1sHq3DWLCiMXitNRKrHVB6rn7mMJP3wL3jzxbNbY8NY29Ft1ghys7AMdQz6Ed7PBlxkO%2BF2RrHS8M81NCBnRgdfkS5UCYUUies7v7hslb%2FcY0rJOj9jPcRjUuoHEr0gZBGt5L%2B95qSGWolcM2xMRhaL6vSPIyd80EO7FVNhIb%2BtIE6SULt2R%2BwsU%2FRUQOyx6W3xJEGmPrLRA&X-Amz-Signature=94d63fe18d112e9a30c360de4fd63b4fff6b2acbde96fe49dc85ad7faf97bf72&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
