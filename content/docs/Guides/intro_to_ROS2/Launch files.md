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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GKAYJQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDRJaIVAZ8zxIe1J9WyqdFtGsbua2sxc4CAp0%2Bopv3zGAiEAmlq5qcInFlewp5zWTznwZmc38RIDxdh%2BDYDe5rzzOMcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPbp5JGdnGIv7d1wircA9qhIP8SvaFt7Dipw%2BznIbErztGD7dSJ5XYb1tYOcRm%2Fhe18OAnmwh365rghZF7duRRFfPvneJrEes0DOim5cjkhUg1hvYzcd6W4k6nCgph66GA5nwn8JFp7OjKymLRfCYutdXks8DgaKgUvgtZuPLpGUsks70Lym7qbY2SZyf%2FlZd1ufe05F2AP2GIeqrTTPrmBwP7AdVzKLNJI2JyJM2ABhLtm%2BeXFgi%2BrnAsiOwJZ5W4JvMO5ifV0KJ2gqSYqgMWo3DerLLgCpFDmFI8fTVapPsFzJOMVVSENepaSQ0QLb6%2BVhp1KRxR1v5sdhEB4CMmZ3RgcMjk50SqAUq%2FLSTn3FvKIJQCDyeuCRy336LltgSLUG%2F51GfG08oLWGEYglfZxQBrO8F7cn8y8DmIvfjMkwZ29obKioaWb8r2EZGodq4PrwunbT7aTs6V99kGIrRhe3QMErrwE1UhvWR9xfIHj%2BwUCAanTI%2BlSFR8uX%2BRVo%2BNxSq1N2pU67b4EQntp7ym6x%2BmaS8VH90N6mIn9YFT8lW5jafqnFxY7eTJDgMo7xjXZ8k0rDA5UOtZTWgv%2BzY2ncX8z1ZYszatHSoJUykTdS5coo5lwbQ7CzprpY5F7T4dgD1Zhmt9ijRkhMLnFu8EGOqUBLwBBaVPq7rOSjyPNPYnZTfsG%2FC0cC5OS7Z%2F%2F6pKA5A4%2Fk%2FE2K5S6F6BBQ8S5vvZrv51v2a2pqMhtNyhXroGoe9QrMg7RNc%2BYw6els38VpcHIqa9mVtKZ8PjuYciZQnP%2F4Ecdf8Is7fNDp9QeH66gxrgwx8MXpL0Ta7%2BmBBvrx6lYUhjY77%2BzJAg5AVGoRWeEKwTDTncXNR%2BNuVVb7fsdYKI5%2BSAR&X-Amz-Signature=67519f4686de33a13eea398ac6288ff3b9de31b8d581a72fa657d17d6f96d549&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GKAYJQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDRJaIVAZ8zxIe1J9WyqdFtGsbua2sxc4CAp0%2Bopv3zGAiEAmlq5qcInFlewp5zWTznwZmc38RIDxdh%2BDYDe5rzzOMcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPbp5JGdnGIv7d1wircA9qhIP8SvaFt7Dipw%2BznIbErztGD7dSJ5XYb1tYOcRm%2Fhe18OAnmwh365rghZF7duRRFfPvneJrEes0DOim5cjkhUg1hvYzcd6W4k6nCgph66GA5nwn8JFp7OjKymLRfCYutdXks8DgaKgUvgtZuPLpGUsks70Lym7qbY2SZyf%2FlZd1ufe05F2AP2GIeqrTTPrmBwP7AdVzKLNJI2JyJM2ABhLtm%2BeXFgi%2BrnAsiOwJZ5W4JvMO5ifV0KJ2gqSYqgMWo3DerLLgCpFDmFI8fTVapPsFzJOMVVSENepaSQ0QLb6%2BVhp1KRxR1v5sdhEB4CMmZ3RgcMjk50SqAUq%2FLSTn3FvKIJQCDyeuCRy336LltgSLUG%2F51GfG08oLWGEYglfZxQBrO8F7cn8y8DmIvfjMkwZ29obKioaWb8r2EZGodq4PrwunbT7aTs6V99kGIrRhe3QMErrwE1UhvWR9xfIHj%2BwUCAanTI%2BlSFR8uX%2BRVo%2BNxSq1N2pU67b4EQntp7ym6x%2BmaS8VH90N6mIn9YFT8lW5jafqnFxY7eTJDgMo7xjXZ8k0rDA5UOtZTWgv%2BzY2ncX8z1ZYszatHSoJUykTdS5coo5lwbQ7CzprpY5F7T4dgD1Zhmt9ijRkhMLnFu8EGOqUBLwBBaVPq7rOSjyPNPYnZTfsG%2FC0cC5OS7Z%2F%2F6pKA5A4%2Fk%2FE2K5S6F6BBQ8S5vvZrv51v2a2pqMhtNyhXroGoe9QrMg7RNc%2BYw6els38VpcHIqa9mVtKZ8PjuYciZQnP%2F4Ecdf8Is7fNDp9QeH66gxrgwx8MXpL0Ta7%2BmBBvrx6lYUhjY77%2BzJAg5AVGoRWeEKwTDTncXNR%2BNuVVb7fsdYKI5%2BSAR&X-Amz-Signature=1c8aec6c7ad797ac1fd37c5cd0ebb380d9cf5d1004c798f70bf9a8bed81a5059&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GKAYJQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDRJaIVAZ8zxIe1J9WyqdFtGsbua2sxc4CAp0%2Bopv3zGAiEAmlq5qcInFlewp5zWTznwZmc38RIDxdh%2BDYDe5rzzOMcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPbp5JGdnGIv7d1wircA9qhIP8SvaFt7Dipw%2BznIbErztGD7dSJ5XYb1tYOcRm%2Fhe18OAnmwh365rghZF7duRRFfPvneJrEes0DOim5cjkhUg1hvYzcd6W4k6nCgph66GA5nwn8JFp7OjKymLRfCYutdXks8DgaKgUvgtZuPLpGUsks70Lym7qbY2SZyf%2FlZd1ufe05F2AP2GIeqrTTPrmBwP7AdVzKLNJI2JyJM2ABhLtm%2BeXFgi%2BrnAsiOwJZ5W4JvMO5ifV0KJ2gqSYqgMWo3DerLLgCpFDmFI8fTVapPsFzJOMVVSENepaSQ0QLb6%2BVhp1KRxR1v5sdhEB4CMmZ3RgcMjk50SqAUq%2FLSTn3FvKIJQCDyeuCRy336LltgSLUG%2F51GfG08oLWGEYglfZxQBrO8F7cn8y8DmIvfjMkwZ29obKioaWb8r2EZGodq4PrwunbT7aTs6V99kGIrRhe3QMErrwE1UhvWR9xfIHj%2BwUCAanTI%2BlSFR8uX%2BRVo%2BNxSq1N2pU67b4EQntp7ym6x%2BmaS8VH90N6mIn9YFT8lW5jafqnFxY7eTJDgMo7xjXZ8k0rDA5UOtZTWgv%2BzY2ncX8z1ZYszatHSoJUykTdS5coo5lwbQ7CzprpY5F7T4dgD1Zhmt9ijRkhMLnFu8EGOqUBLwBBaVPq7rOSjyPNPYnZTfsG%2FC0cC5OS7Z%2F%2F6pKA5A4%2Fk%2FE2K5S6F6BBQ8S5vvZrv51v2a2pqMhtNyhXroGoe9QrMg7RNc%2BYw6els38VpcHIqa9mVtKZ8PjuYciZQnP%2F4Ecdf8Is7fNDp9QeH66gxrgwx8MXpL0Ta7%2BmBBvrx6lYUhjY77%2BzJAg5AVGoRWeEKwTDTncXNR%2BNuVVb7fsdYKI5%2BSAR&X-Amz-Signature=f11d4b83bdc122ab969505684fa260f3699799d21624d02c8e5445c91c048356&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
