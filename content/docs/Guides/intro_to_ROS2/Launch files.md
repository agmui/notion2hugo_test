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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZT64PSK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGdfw2PHUgpTZ%2FyvfJ3r9REz2sx%2FWTBXHW4SAaaZwgjPAiEAl%2BusKd6NcF7BilOoB2XqPY01ydAv1YUoyVSFAXgekz0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZysisn%2F7LsANjmACrcAyj9Xwf1q5SOK%2Fkxu1xfIQTf6CAKZFce1Xpd2aWgVajqxZ8RWc8EuDBc8Cup1a3VOjMBveSnsYrBeOfjMdihKpGgzcMZGaddQ12kmQ23XPFCzwLbS0TtpvjbHYOCmE%2FlmS1LmCw9jDwFMBDcpVg5B3zoi02tGI%2BjKeUuZs0Xg3QTM61m2%2FfGUV52Tiiw4XPFmPJc%2BWkbhrgLUxjqtyZXBdjajjhjQ7XjtnW9tUYoEBtWr7F1rPjz9Ww77NCOZOsxmQnNu0A2gW6W5X1SlVinPG9Gixj2NnQkQxjk82cRxMFz%2BLf8GeDzKhemILrgjOEGOzq7YmZOknAKR0kPYPDmntCfynTXgx2OIqJYsN77tP5Ac05EhwCCzcvpUn%2FxFergzqlAjeLODPl8hss37cmouuogVWhi01LNXBoG3eoVJosR%2FvEZdqZrVh0RdWV6aNQAnVE2YjrC%2BT6E%2BeBg6%2BPv1AJAwE%2FhCuyD641SYcsayku8VbqqaBpZN47%2B%2FtOxglVYQtmQz1fGDpP60R7vuSh71QSXjXpT6iYDNGsaMHOTf4Qol9RyFerbFE11%2F%2BiQ2rbMiwRyUzYyJf75jdXfuda1NWbKm5%2FNFG6pLLUfZ7iJycebKF9veysBGXRTwtclMLDsh74GOqUBM%2Fl1yOcwzBOVbU2Psh1TfWB36PgEJgnNP4uY6XDT7vfxOBdxxF%2BygWxjtWlMSC%2BYpDcGS68XFVKjWcUe0B47tXcgVLRzG17CzsvNXn%2Bj7g5OC5%2FOKNwhCff1886eI4WK8iGctKCxP%2BZgHQMsben9jDyKz4Ke0XGWHKsMhsB8gZreIvpkYKIMth83VVZrJaQfA1mbXy7SmqD%2FBVzqDfFcFhej%2FwCC&X-Amz-Signature=c9caca0869a2986202763e891ce535db5e20228d624d4bdd33af966d21f2900c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZT64PSK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGdfw2PHUgpTZ%2FyvfJ3r9REz2sx%2FWTBXHW4SAaaZwgjPAiEAl%2BusKd6NcF7BilOoB2XqPY01ydAv1YUoyVSFAXgekz0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZysisn%2F7LsANjmACrcAyj9Xwf1q5SOK%2Fkxu1xfIQTf6CAKZFce1Xpd2aWgVajqxZ8RWc8EuDBc8Cup1a3VOjMBveSnsYrBeOfjMdihKpGgzcMZGaddQ12kmQ23XPFCzwLbS0TtpvjbHYOCmE%2FlmS1LmCw9jDwFMBDcpVg5B3zoi02tGI%2BjKeUuZs0Xg3QTM61m2%2FfGUV52Tiiw4XPFmPJc%2BWkbhrgLUxjqtyZXBdjajjhjQ7XjtnW9tUYoEBtWr7F1rPjz9Ww77NCOZOsxmQnNu0A2gW6W5X1SlVinPG9Gixj2NnQkQxjk82cRxMFz%2BLf8GeDzKhemILrgjOEGOzq7YmZOknAKR0kPYPDmntCfynTXgx2OIqJYsN77tP5Ac05EhwCCzcvpUn%2FxFergzqlAjeLODPl8hss37cmouuogVWhi01LNXBoG3eoVJosR%2FvEZdqZrVh0RdWV6aNQAnVE2YjrC%2BT6E%2BeBg6%2BPv1AJAwE%2FhCuyD641SYcsayku8VbqqaBpZN47%2B%2FtOxglVYQtmQz1fGDpP60R7vuSh71QSXjXpT6iYDNGsaMHOTf4Qol9RyFerbFE11%2F%2BiQ2rbMiwRyUzYyJf75jdXfuda1NWbKm5%2FNFG6pLLUfZ7iJycebKF9veysBGXRTwtclMLDsh74GOqUBM%2Fl1yOcwzBOVbU2Psh1TfWB36PgEJgnNP4uY6XDT7vfxOBdxxF%2BygWxjtWlMSC%2BYpDcGS68XFVKjWcUe0B47tXcgVLRzG17CzsvNXn%2Bj7g5OC5%2FOKNwhCff1886eI4WK8iGctKCxP%2BZgHQMsben9jDyKz4Ke0XGWHKsMhsB8gZreIvpkYKIMth83VVZrJaQfA1mbXy7SmqD%2FBVzqDfFcFhej%2FwCC&X-Amz-Signature=e59cad31f9a6d6d0736e91106580d1c4f529ed2590fe354cd32657c4d00b65af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZT64PSK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGdfw2PHUgpTZ%2FyvfJ3r9REz2sx%2FWTBXHW4SAaaZwgjPAiEAl%2BusKd6NcF7BilOoB2XqPY01ydAv1YUoyVSFAXgekz0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZysisn%2F7LsANjmACrcAyj9Xwf1q5SOK%2Fkxu1xfIQTf6CAKZFce1Xpd2aWgVajqxZ8RWc8EuDBc8Cup1a3VOjMBveSnsYrBeOfjMdihKpGgzcMZGaddQ12kmQ23XPFCzwLbS0TtpvjbHYOCmE%2FlmS1LmCw9jDwFMBDcpVg5B3zoi02tGI%2BjKeUuZs0Xg3QTM61m2%2FfGUV52Tiiw4XPFmPJc%2BWkbhrgLUxjqtyZXBdjajjhjQ7XjtnW9tUYoEBtWr7F1rPjz9Ww77NCOZOsxmQnNu0A2gW6W5X1SlVinPG9Gixj2NnQkQxjk82cRxMFz%2BLf8GeDzKhemILrgjOEGOzq7YmZOknAKR0kPYPDmntCfynTXgx2OIqJYsN77tP5Ac05EhwCCzcvpUn%2FxFergzqlAjeLODPl8hss37cmouuogVWhi01LNXBoG3eoVJosR%2FvEZdqZrVh0RdWV6aNQAnVE2YjrC%2BT6E%2BeBg6%2BPv1AJAwE%2FhCuyD641SYcsayku8VbqqaBpZN47%2B%2FtOxglVYQtmQz1fGDpP60R7vuSh71QSXjXpT6iYDNGsaMHOTf4Qol9RyFerbFE11%2F%2BiQ2rbMiwRyUzYyJf75jdXfuda1NWbKm5%2FNFG6pLLUfZ7iJycebKF9veysBGXRTwtclMLDsh74GOqUBM%2Fl1yOcwzBOVbU2Psh1TfWB36PgEJgnNP4uY6XDT7vfxOBdxxF%2BygWxjtWlMSC%2BYpDcGS68XFVKjWcUe0B47tXcgVLRzG17CzsvNXn%2Bj7g5OC5%2FOKNwhCff1886eI4WK8iGctKCxP%2BZgHQMsben9jDyKz4Ke0XGWHKsMhsB8gZreIvpkYKIMth83VVZrJaQfA1mbXy7SmqD%2FBVzqDfFcFhej%2FwCC&X-Amz-Signature=049243a878aafac195abeb66c1dedf225bd48c7ca35fc2923e8ece2ec66cbf23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
