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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664O7MCRR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDklhkA2u7r4gOm6vrfzGEQdyzQiBFBTmlsPYFshiysZwIgWwhEXZWmZyweaFOqY0r0p%2BJpd2SF8L9ZaiQehW7UC98qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs6tty9G7Z8WG9%2F0SrcAyiI30B7Fhy3OC7Mh0kYkunKHB51H5jvv3HOn1ZKxSXW5%2F3alEoK6Ryz1wa4iZ5%2BuBIdCGTtWYpNpHBZ%2B3UMgEcFEVIBgVqchTe802zrdX4S01c3or8dvGUUmSXmj3PAc%2F2sdVfGyGQnxI%2BWZ%2By2ffiTl738Xa4mHQjNguWEdHE8Owj%2Bhj6n%2FbfpIko%2Fs5t7TIFy1wZrqa1BvmejEV56xuAW7Hlx4HDLyfgYBYblmiv0RmR%2F%2BMKYEM%2F1waifHC2JDRaawkKgQMkvzxhYSHcJMzStwadTlvfzsiUGMZ2epHevvO%2BF%2BFr7JuTPv4Rt0b2hBWK5o0Ev6xprHXs7BFzABPkpAeN8xTm7dRMGoEpdt0w91ifAj8zc19W0ertVcj4SBndyNAA3z0n%2BdwY30tuHrBugc5U2q5OR3Mtcj6s0%2BRygsClCgdAfj38OqEZaP%2FxC1KdeF%2BiqmHXazi6XfvqJqKQzm71jBeKhCYnu8ASu8481g0W1D7LK3ZtoeaelHoL6DAxVs4%2FOKkeEEVIlbRgycXTBRv3B%2Fm9SX4x%2BYDynS2o7DlB7ssKR9DGJygex07kk4D%2FiHBA6Ooi9bx8vXgd9cAqBpEr%2BYEdJkXMg2YDi98bSFojMLTZV6isuJt6iMI6o6L8GOqUBeFc%2BfGliuHGSP3Yv5QSFpzpGhbaY6y9G2FAy0N0Qzj4eNGbkGNQmmW9J9hLNwH6PpNL14YdOBGf2HjKMIKMAHTO6gDdmNHrahIRumnN%2Bsh3auS%2FIPWT%2FYRjDAYHuwh8rSt7BD%2BCHf%2Bnms8z3ladIsh8Ne4B9iPhJIm7CvH9eDgsSbQeoh2oCDEZqtvVZ8RPcisJ77ohECm2MWClSJGutd9IUnqq%2F&X-Amz-Signature=1284c055775dc0c592506574916db23bfb8d989f307e9095bdb752364a359f18&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664O7MCRR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDklhkA2u7r4gOm6vrfzGEQdyzQiBFBTmlsPYFshiysZwIgWwhEXZWmZyweaFOqY0r0p%2BJpd2SF8L9ZaiQehW7UC98qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs6tty9G7Z8WG9%2F0SrcAyiI30B7Fhy3OC7Mh0kYkunKHB51H5jvv3HOn1ZKxSXW5%2F3alEoK6Ryz1wa4iZ5%2BuBIdCGTtWYpNpHBZ%2B3UMgEcFEVIBgVqchTe802zrdX4S01c3or8dvGUUmSXmj3PAc%2F2sdVfGyGQnxI%2BWZ%2By2ffiTl738Xa4mHQjNguWEdHE8Owj%2Bhj6n%2FbfpIko%2Fs5t7TIFy1wZrqa1BvmejEV56xuAW7Hlx4HDLyfgYBYblmiv0RmR%2F%2BMKYEM%2F1waifHC2JDRaawkKgQMkvzxhYSHcJMzStwadTlvfzsiUGMZ2epHevvO%2BF%2BFr7JuTPv4Rt0b2hBWK5o0Ev6xprHXs7BFzABPkpAeN8xTm7dRMGoEpdt0w91ifAj8zc19W0ertVcj4SBndyNAA3z0n%2BdwY30tuHrBugc5U2q5OR3Mtcj6s0%2BRygsClCgdAfj38OqEZaP%2FxC1KdeF%2BiqmHXazi6XfvqJqKQzm71jBeKhCYnu8ASu8481g0W1D7LK3ZtoeaelHoL6DAxVs4%2FOKkeEEVIlbRgycXTBRv3B%2Fm9SX4x%2BYDynS2o7DlB7ssKR9DGJygex07kk4D%2FiHBA6Ooi9bx8vXgd9cAqBpEr%2BYEdJkXMg2YDi98bSFojMLTZV6isuJt6iMI6o6L8GOqUBeFc%2BfGliuHGSP3Yv5QSFpzpGhbaY6y9G2FAy0N0Qzj4eNGbkGNQmmW9J9hLNwH6PpNL14YdOBGf2HjKMIKMAHTO6gDdmNHrahIRumnN%2Bsh3auS%2FIPWT%2FYRjDAYHuwh8rSt7BD%2BCHf%2Bnms8z3ladIsh8Ne4B9iPhJIm7CvH9eDgsSbQeoh2oCDEZqtvVZ8RPcisJ77ohECm2MWClSJGutd9IUnqq%2F&X-Amz-Signature=2786a31cc2d28557c69dac1d838538fabfb83ed162a8ab434e155f77b5f5709e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664O7MCRR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDklhkA2u7r4gOm6vrfzGEQdyzQiBFBTmlsPYFshiysZwIgWwhEXZWmZyweaFOqY0r0p%2BJpd2SF8L9ZaiQehW7UC98qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs6tty9G7Z8WG9%2F0SrcAyiI30B7Fhy3OC7Mh0kYkunKHB51H5jvv3HOn1ZKxSXW5%2F3alEoK6Ryz1wa4iZ5%2BuBIdCGTtWYpNpHBZ%2B3UMgEcFEVIBgVqchTe802zrdX4S01c3or8dvGUUmSXmj3PAc%2F2sdVfGyGQnxI%2BWZ%2By2ffiTl738Xa4mHQjNguWEdHE8Owj%2Bhj6n%2FbfpIko%2Fs5t7TIFy1wZrqa1BvmejEV56xuAW7Hlx4HDLyfgYBYblmiv0RmR%2F%2BMKYEM%2F1waifHC2JDRaawkKgQMkvzxhYSHcJMzStwadTlvfzsiUGMZ2epHevvO%2BF%2BFr7JuTPv4Rt0b2hBWK5o0Ev6xprHXs7BFzABPkpAeN8xTm7dRMGoEpdt0w91ifAj8zc19W0ertVcj4SBndyNAA3z0n%2BdwY30tuHrBugc5U2q5OR3Mtcj6s0%2BRygsClCgdAfj38OqEZaP%2FxC1KdeF%2BiqmHXazi6XfvqJqKQzm71jBeKhCYnu8ASu8481g0W1D7LK3ZtoeaelHoL6DAxVs4%2FOKkeEEVIlbRgycXTBRv3B%2Fm9SX4x%2BYDynS2o7DlB7ssKR9DGJygex07kk4D%2FiHBA6Ooi9bx8vXgd9cAqBpEr%2BYEdJkXMg2YDi98bSFojMLTZV6isuJt6iMI6o6L8GOqUBeFc%2BfGliuHGSP3Yv5QSFpzpGhbaY6y9G2FAy0N0Qzj4eNGbkGNQmmW9J9hLNwH6PpNL14YdOBGf2HjKMIKMAHTO6gDdmNHrahIRumnN%2Bsh3auS%2FIPWT%2FYRjDAYHuwh8rSt7BD%2BCHf%2Bnms8z3ladIsh8Ne4B9iPhJIm7CvH9eDgsSbQeoh2oCDEZqtvVZ8RPcisJ77ohECm2MWClSJGutd9IUnqq%2F&X-Amz-Signature=6b6d70dd99fb0b9a71af2e01f1234ad3f65c488e2436218e31b771c4378161a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
