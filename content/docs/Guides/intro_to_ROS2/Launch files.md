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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPFVVVE5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTsGTAXAUbvk7KmkbFfr%2FAsDNKGtOYufloSyeOXFfjKAiEA1%2FiM5XCZXTjLwvgxEFNKZr5AhZHUTokWv360TjLLm3IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLmhS33F54ejFeidCrcA1y%2BHbeLlm%2BWFgscjlV2lhTNUKsQQMxyo3KRsY90quM4al8VYCnkD%2Bm%2FmFBHQ4qwFiV%2FlPwXUzyZj14ZKohFeW9Zih3j6nCFEb0P7pvt1umm%2FWlIxWOPBHP8AgN%2Bdp24BFhiZpvfQJGle%2FV4d4Pg9HDBkybx1OgjQRdSz4nae%2FYZ77oZ1IafMelWR7pPFlRZZ1R5uYBKm5KJcWHdouZgfNjJhE%2BcoaX%2BDKZUelTtQFvuqQgPNX9Vuq28aCTNP3P8ydpKMxIa%2F2wxrZBZo%2BBVjdT92n%2FhymGvhvrK0GOqlrrhbbUB1QV5QLisStyV4%2B7TA66QxrmN9gDktg5kuNfqizcpeBGwNsz5mmFV4SIs9ifUVe9cDWGSrdps1aK0ARVttg56DEizcVVQYNuTuL%2BqqXJ%2BrB4LsubljTurVlR8PKuIXUP9Zd8UFIlfawnDPCtXIc7PrfSdD0pUIM6D6MvDBS05l1HY2Wqodyrm0xo2S7DriZkidmQLCvmZIWj0BYQrygtsRjhzOsLMxe9xZz8%2B9BYq34EXiBbXJgMQrYxAz2SQrvCplLLR4MO16gbdLiEdI6IXBhHZ9ktF6Vi3l%2B%2BDa%2Be7ohwan9aW48VrZ62j%2FkiG936XVCHL3jxzjPE%2BMLPb4MEGOqUBRFgSlOaZY%2FXrAiGWFnbFL%2B2Vy9pZyuCrPRABy2ej8I4UXOYnxqfzFiSFAbJJXB2UWzEvbIjsYvJlYkwZeV%2FCAtvCOTBTNqNqpZNAvF%2BJi6JABj34yXwDe8CKxxqqQMcFOD7unGNLREYN%2B8bm%2FcNdJ27i6RbaGQo1ppbhh%2B4cUbMeWlBAwq2N1%2BHeo2Oc54c5hIJb7rTsNyeyN4Q48NMyNBaNh0hh&X-Amz-Signature=199c04ad50e276a887103f0489b764a6be11f2ce5b9f2ae3ebd1a28ff0dde3be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPFVVVE5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTsGTAXAUbvk7KmkbFfr%2FAsDNKGtOYufloSyeOXFfjKAiEA1%2FiM5XCZXTjLwvgxEFNKZr5AhZHUTokWv360TjLLm3IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLmhS33F54ejFeidCrcA1y%2BHbeLlm%2BWFgscjlV2lhTNUKsQQMxyo3KRsY90quM4al8VYCnkD%2Bm%2FmFBHQ4qwFiV%2FlPwXUzyZj14ZKohFeW9Zih3j6nCFEb0P7pvt1umm%2FWlIxWOPBHP8AgN%2Bdp24BFhiZpvfQJGle%2FV4d4Pg9HDBkybx1OgjQRdSz4nae%2FYZ77oZ1IafMelWR7pPFlRZZ1R5uYBKm5KJcWHdouZgfNjJhE%2BcoaX%2BDKZUelTtQFvuqQgPNX9Vuq28aCTNP3P8ydpKMxIa%2F2wxrZBZo%2BBVjdT92n%2FhymGvhvrK0GOqlrrhbbUB1QV5QLisStyV4%2B7TA66QxrmN9gDktg5kuNfqizcpeBGwNsz5mmFV4SIs9ifUVe9cDWGSrdps1aK0ARVttg56DEizcVVQYNuTuL%2BqqXJ%2BrB4LsubljTurVlR8PKuIXUP9Zd8UFIlfawnDPCtXIc7PrfSdD0pUIM6D6MvDBS05l1HY2Wqodyrm0xo2S7DriZkidmQLCvmZIWj0BYQrygtsRjhzOsLMxe9xZz8%2B9BYq34EXiBbXJgMQrYxAz2SQrvCplLLR4MO16gbdLiEdI6IXBhHZ9ktF6Vi3l%2B%2BDa%2Be7ohwan9aW48VrZ62j%2FkiG936XVCHL3jxzjPE%2BMLPb4MEGOqUBRFgSlOaZY%2FXrAiGWFnbFL%2B2Vy9pZyuCrPRABy2ej8I4UXOYnxqfzFiSFAbJJXB2UWzEvbIjsYvJlYkwZeV%2FCAtvCOTBTNqNqpZNAvF%2BJi6JABj34yXwDe8CKxxqqQMcFOD7unGNLREYN%2B8bm%2FcNdJ27i6RbaGQo1ppbhh%2B4cUbMeWlBAwq2N1%2BHeo2Oc54c5hIJb7rTsNyeyN4Q48NMyNBaNh0hh&X-Amz-Signature=6bb5ec75b619fa734356f5a60cf422689e73ed3ef3324992c12cd48c94b6fe5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPFVVVE5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTsGTAXAUbvk7KmkbFfr%2FAsDNKGtOYufloSyeOXFfjKAiEA1%2FiM5XCZXTjLwvgxEFNKZr5AhZHUTokWv360TjLLm3IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLmhS33F54ejFeidCrcA1y%2BHbeLlm%2BWFgscjlV2lhTNUKsQQMxyo3KRsY90quM4al8VYCnkD%2Bm%2FmFBHQ4qwFiV%2FlPwXUzyZj14ZKohFeW9Zih3j6nCFEb0P7pvt1umm%2FWlIxWOPBHP8AgN%2Bdp24BFhiZpvfQJGle%2FV4d4Pg9HDBkybx1OgjQRdSz4nae%2FYZ77oZ1IafMelWR7pPFlRZZ1R5uYBKm5KJcWHdouZgfNjJhE%2BcoaX%2BDKZUelTtQFvuqQgPNX9Vuq28aCTNP3P8ydpKMxIa%2F2wxrZBZo%2BBVjdT92n%2FhymGvhvrK0GOqlrrhbbUB1QV5QLisStyV4%2B7TA66QxrmN9gDktg5kuNfqizcpeBGwNsz5mmFV4SIs9ifUVe9cDWGSrdps1aK0ARVttg56DEizcVVQYNuTuL%2BqqXJ%2BrB4LsubljTurVlR8PKuIXUP9Zd8UFIlfawnDPCtXIc7PrfSdD0pUIM6D6MvDBS05l1HY2Wqodyrm0xo2S7DriZkidmQLCvmZIWj0BYQrygtsRjhzOsLMxe9xZz8%2B9BYq34EXiBbXJgMQrYxAz2SQrvCplLLR4MO16gbdLiEdI6IXBhHZ9ktF6Vi3l%2B%2BDa%2Be7ohwan9aW48VrZ62j%2FkiG936XVCHL3jxzjPE%2BMLPb4MEGOqUBRFgSlOaZY%2FXrAiGWFnbFL%2B2Vy9pZyuCrPRABy2ej8I4UXOYnxqfzFiSFAbJJXB2UWzEvbIjsYvJlYkwZeV%2FCAtvCOTBTNqNqpZNAvF%2BJi6JABj34yXwDe8CKxxqqQMcFOD7unGNLREYN%2B8bm%2FcNdJ27i6RbaGQo1ppbhh%2B4cUbMeWlBAwq2N1%2BHeo2Oc54c5hIJb7rTsNyeyN4Q48NMyNBaNh0hh&X-Amz-Signature=b237a00a5d4fb6b50322d924a97132f1296c6cabf0a2fcd70bcd69b7bc09a40b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
