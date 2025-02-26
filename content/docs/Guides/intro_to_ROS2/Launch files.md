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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWVJTF6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDxrA4t2oRpp8VnkepUEBSocoKENZsCcVbUbkjWXCDupgIgLGKm2Mi2wYvL3MB%2FbnwJp%2Bebxe9T5HAOnZoKHUunmu8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMs9jeHnJUHeBvPSxCrcA923Gnkc94y04nj2wIYq%2FdPHk%2B%2FyVxcEc7AI6GYH0nZjk4oJAXb59sR0%2Bypfcf5OaIAliqwoSv80qTM2gwLFa7uoDbN7I6vXFnkA7F6jMuE4HYAQdrUQ3Kh7wtCpX%2BZXCNgEM%2BQJAWwRqUcxHcmU%2BkvX7Av8%2FWQpafZM%2BNX4MMD%2BnXxN52ADQYisnjkT2qQphjH4G%2F3174lq9Iuk%2BHLT2GF93H4HAbEyW6yzrNPLa0cNFLBtgywPtPKmOPNAeTKg2nXmx1gnB6dyTaaMYFDEACrN9R16gT5dNvTAMqlm34TKQ4FUZyHBwCHDMJDZrqgSGMGBeJAkl4bCOqiyEn7WFfr7U0f%2BMVNl%2Ba1eCn3DTNh3Y0b767Z7D6drzT%2BKPi7sTBhpaRJhXv8ukQSkmBW%2Bb6esWv4Ulh%2BSVnYwoQfHdBwjWvcoI7LqmV1SUY88aASCfkRhG5dUx1fHn2R60FM%2BQm5s6qMoMdlcO6DHdCoiyLpZjlRpY6w%2BDd0D%2BHSHo%2B4Mi62%2BVwjb9wTOMul%2FYYhAkF0QqUvgSE115zoXxJmcNKYtogrBW1IRvlB5LWEwa9fFJWtl0nQtA23iKCOIcUBXO4xfcQy%2FB1mafRcp6zhGAwLebwCZucZ6WWFjwcyVMPy%2F%2B70GOqUB9exLw%2Fro%2B6tubXL7qwVnz2KabfE1Xg7f5T%2BEm2UJGJyL6FFZD9l8o2GUJ%2Bv%2BduLPTuNFxp9VUatiVVZmQHrMDPqo6kCqXSAHbKYjYsddCbWnHjInIle3NT2n04oCWpih5M4z8pkMv044A382ha5aPWueWJshWcHfMTWpXJHQPWJ5EtW3IYn6wHAy%2BqlWRyLRVtEPLnF1nr79J0Qokih5cr3YtBkl&X-Amz-Signature=a2678e8c485e6ad82e12cac369e14c9929b538ba49c8721bb80d27bde2c9ff73&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWVJTF6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDxrA4t2oRpp8VnkepUEBSocoKENZsCcVbUbkjWXCDupgIgLGKm2Mi2wYvL3MB%2FbnwJp%2Bebxe9T5HAOnZoKHUunmu8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMs9jeHnJUHeBvPSxCrcA923Gnkc94y04nj2wIYq%2FdPHk%2B%2FyVxcEc7AI6GYH0nZjk4oJAXb59sR0%2Bypfcf5OaIAliqwoSv80qTM2gwLFa7uoDbN7I6vXFnkA7F6jMuE4HYAQdrUQ3Kh7wtCpX%2BZXCNgEM%2BQJAWwRqUcxHcmU%2BkvX7Av8%2FWQpafZM%2BNX4MMD%2BnXxN52ADQYisnjkT2qQphjH4G%2F3174lq9Iuk%2BHLT2GF93H4HAbEyW6yzrNPLa0cNFLBtgywPtPKmOPNAeTKg2nXmx1gnB6dyTaaMYFDEACrN9R16gT5dNvTAMqlm34TKQ4FUZyHBwCHDMJDZrqgSGMGBeJAkl4bCOqiyEn7WFfr7U0f%2BMVNl%2Ba1eCn3DTNh3Y0b767Z7D6drzT%2BKPi7sTBhpaRJhXv8ukQSkmBW%2Bb6esWv4Ulh%2BSVnYwoQfHdBwjWvcoI7LqmV1SUY88aASCfkRhG5dUx1fHn2R60FM%2BQm5s6qMoMdlcO6DHdCoiyLpZjlRpY6w%2BDd0D%2BHSHo%2B4Mi62%2BVwjb9wTOMul%2FYYhAkF0QqUvgSE115zoXxJmcNKYtogrBW1IRvlB5LWEwa9fFJWtl0nQtA23iKCOIcUBXO4xfcQy%2FB1mafRcp6zhGAwLebwCZucZ6WWFjwcyVMPy%2F%2B70GOqUB9exLw%2Fro%2B6tubXL7qwVnz2KabfE1Xg7f5T%2BEm2UJGJyL6FFZD9l8o2GUJ%2Bv%2BduLPTuNFxp9VUatiVVZmQHrMDPqo6kCqXSAHbKYjYsddCbWnHjInIle3NT2n04oCWpih5M4z8pkMv044A382ha5aPWueWJshWcHfMTWpXJHQPWJ5EtW3IYn6wHAy%2BqlWRyLRVtEPLnF1nr79J0Qokih5cr3YtBkl&X-Amz-Signature=57ba6ad1ddb9d573105547389a23159d971269172a0ee710f9afcef4dac1d668&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWVJTF6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDxrA4t2oRpp8VnkepUEBSocoKENZsCcVbUbkjWXCDupgIgLGKm2Mi2wYvL3MB%2FbnwJp%2Bebxe9T5HAOnZoKHUunmu8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMs9jeHnJUHeBvPSxCrcA923Gnkc94y04nj2wIYq%2FdPHk%2B%2FyVxcEc7AI6GYH0nZjk4oJAXb59sR0%2Bypfcf5OaIAliqwoSv80qTM2gwLFa7uoDbN7I6vXFnkA7F6jMuE4HYAQdrUQ3Kh7wtCpX%2BZXCNgEM%2BQJAWwRqUcxHcmU%2BkvX7Av8%2FWQpafZM%2BNX4MMD%2BnXxN52ADQYisnjkT2qQphjH4G%2F3174lq9Iuk%2BHLT2GF93H4HAbEyW6yzrNPLa0cNFLBtgywPtPKmOPNAeTKg2nXmx1gnB6dyTaaMYFDEACrN9R16gT5dNvTAMqlm34TKQ4FUZyHBwCHDMJDZrqgSGMGBeJAkl4bCOqiyEn7WFfr7U0f%2BMVNl%2Ba1eCn3DTNh3Y0b767Z7D6drzT%2BKPi7sTBhpaRJhXv8ukQSkmBW%2Bb6esWv4Ulh%2BSVnYwoQfHdBwjWvcoI7LqmV1SUY88aASCfkRhG5dUx1fHn2R60FM%2BQm5s6qMoMdlcO6DHdCoiyLpZjlRpY6w%2BDd0D%2BHSHo%2B4Mi62%2BVwjb9wTOMul%2FYYhAkF0QqUvgSE115zoXxJmcNKYtogrBW1IRvlB5LWEwa9fFJWtl0nQtA23iKCOIcUBXO4xfcQy%2FB1mafRcp6zhGAwLebwCZucZ6WWFjwcyVMPy%2F%2B70GOqUB9exLw%2Fro%2B6tubXL7qwVnz2KabfE1Xg7f5T%2BEm2UJGJyL6FFZD9l8o2GUJ%2Bv%2BduLPTuNFxp9VUatiVVZmQHrMDPqo6kCqXSAHbKYjYsddCbWnHjInIle3NT2n04oCWpih5M4z8pkMv044A382ha5aPWueWJshWcHfMTWpXJHQPWJ5EtW3IYn6wHAy%2BqlWRyLRVtEPLnF1nr79J0Qokih5cr3YtBkl&X-Amz-Signature=ab64b9b61e0e6e3d9bcbf9c93dc98724063c19b8fd556bf4f27ad40f6bed801b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
