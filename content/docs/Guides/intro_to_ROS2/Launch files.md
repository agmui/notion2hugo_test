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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQ5PU3X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHPsDOea3Edb%2BeMNfk%2FCVY4hSM9nqrS4AxRciHfXZpgWAiAXxEqeqXb0pPLxHoy23ZEkCvc2vOXpl9NRDhDPvmndECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMoNeQUBAsKBnLEHudKtwDWcX9GsXhF%2FO4jbn%2F7dhTDb3oOcf9%2FyHZv2je9wbhm4J%2Bzv2qJBQ%2FgJDDiUXSSYKHsEycEvi2l0SxFgUCrUZZMUre3ABPMlfX7476%2BoUjA8Z4OR5g4lV2xA5S9iuHx9Y8CZz0Lr5gaLdViGhPdrOFNmNQ3r2%2Ffzwt1OEKrXuTRmMhYv2VTMH3%2BphOSElJmu%2Bkk2NEzzHTvbtqjoIdu5p6X%2BIw%2BUARfMMhjJD3kfHP0T6ZJKq4Fe9lGusjIhzV8e6T%2Bgy7b7LGyzRLQJ9QAVfwb9lpl6jrzgca0nVgftRYmQ74bfFtR4WPDGhaWm8UpRLsPnOoMDoCwpfxRc0TAAytrswNkIN0%2BWjefaZZyl2eA69OSp5EYzaB6mXSsHH8eTfh3i3BLOsRPWy5%2FGrriRU1y2xA6gqPMGO1V0X6LD7XE7bxu8FFygfNNczICLIMAMsMLDVATcRBPJBSYGFcJTRss9dumfjv%2BefasgVc9xhIZZUGZq5x3LYU3cqAWzz922Xsp8tcYFhJP0xJHQYgIpZiUUKO2BY2BQqabqzeBFksD3vAsIZL4vR3L05x036aT6CrBFzeM%2FzXeIBLYbMgcNosWU7R8AAt%2FBq%2FkHa44l14sXyHkkwVj1n1QwIWJ3Qw%2BdDgwwY6pgFY91k7Ihje9rKyYFIWvCCmBcZjH6ROwVv%2BtwsI6D%2B%2BvlrG%2FoTfKlAsvJKrPr1%2BJFOnOQsxU8ShrJz5y%2BpRm6uqSBiRj4EPQalHQgZAXMGVlBLclxC0i%2FWcGpaQzatSFb5Y393%2FJZzvisbyqQZ4kcYR1YL9%2B0KQyY4L%2F6tLHFIfHbZzPHyJkzEp1pn5ftnDcCoJVRAnHFha2uGGOr6Sjp7yF6fHScak&X-Amz-Signature=bbd87e79c3fd8c37d51fee1fdd455dd978c1b0ec0524a6c4689c99f394bfb911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQ5PU3X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHPsDOea3Edb%2BeMNfk%2FCVY4hSM9nqrS4AxRciHfXZpgWAiAXxEqeqXb0pPLxHoy23ZEkCvc2vOXpl9NRDhDPvmndECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMoNeQUBAsKBnLEHudKtwDWcX9GsXhF%2FO4jbn%2F7dhTDb3oOcf9%2FyHZv2je9wbhm4J%2Bzv2qJBQ%2FgJDDiUXSSYKHsEycEvi2l0SxFgUCrUZZMUre3ABPMlfX7476%2BoUjA8Z4OR5g4lV2xA5S9iuHx9Y8CZz0Lr5gaLdViGhPdrOFNmNQ3r2%2Ffzwt1OEKrXuTRmMhYv2VTMH3%2BphOSElJmu%2Bkk2NEzzHTvbtqjoIdu5p6X%2BIw%2BUARfMMhjJD3kfHP0T6ZJKq4Fe9lGusjIhzV8e6T%2Bgy7b7LGyzRLQJ9QAVfwb9lpl6jrzgca0nVgftRYmQ74bfFtR4WPDGhaWm8UpRLsPnOoMDoCwpfxRc0TAAytrswNkIN0%2BWjefaZZyl2eA69OSp5EYzaB6mXSsHH8eTfh3i3BLOsRPWy5%2FGrriRU1y2xA6gqPMGO1V0X6LD7XE7bxu8FFygfNNczICLIMAMsMLDVATcRBPJBSYGFcJTRss9dumfjv%2BefasgVc9xhIZZUGZq5x3LYU3cqAWzz922Xsp8tcYFhJP0xJHQYgIpZiUUKO2BY2BQqabqzeBFksD3vAsIZL4vR3L05x036aT6CrBFzeM%2FzXeIBLYbMgcNosWU7R8AAt%2FBq%2FkHa44l14sXyHkkwVj1n1QwIWJ3Qw%2BdDgwwY6pgFY91k7Ihje9rKyYFIWvCCmBcZjH6ROwVv%2BtwsI6D%2B%2BvlrG%2FoTfKlAsvJKrPr1%2BJFOnOQsxU8ShrJz5y%2BpRm6uqSBiRj4EPQalHQgZAXMGVlBLclxC0i%2FWcGpaQzatSFb5Y393%2FJZzvisbyqQZ4kcYR1YL9%2B0KQyY4L%2F6tLHFIfHbZzPHyJkzEp1pn5ftnDcCoJVRAnHFha2uGGOr6Sjp7yF6fHScak&X-Amz-Signature=71e841be6cc23adf4019f27ceebbe3e4a758022abf6e6bbec2b74f8ba22b0850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQ5PU3X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHPsDOea3Edb%2BeMNfk%2FCVY4hSM9nqrS4AxRciHfXZpgWAiAXxEqeqXb0pPLxHoy23ZEkCvc2vOXpl9NRDhDPvmndECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMoNeQUBAsKBnLEHudKtwDWcX9GsXhF%2FO4jbn%2F7dhTDb3oOcf9%2FyHZv2je9wbhm4J%2Bzv2qJBQ%2FgJDDiUXSSYKHsEycEvi2l0SxFgUCrUZZMUre3ABPMlfX7476%2BoUjA8Z4OR5g4lV2xA5S9iuHx9Y8CZz0Lr5gaLdViGhPdrOFNmNQ3r2%2Ffzwt1OEKrXuTRmMhYv2VTMH3%2BphOSElJmu%2Bkk2NEzzHTvbtqjoIdu5p6X%2BIw%2BUARfMMhjJD3kfHP0T6ZJKq4Fe9lGusjIhzV8e6T%2Bgy7b7LGyzRLQJ9QAVfwb9lpl6jrzgca0nVgftRYmQ74bfFtR4WPDGhaWm8UpRLsPnOoMDoCwpfxRc0TAAytrswNkIN0%2BWjefaZZyl2eA69OSp5EYzaB6mXSsHH8eTfh3i3BLOsRPWy5%2FGrriRU1y2xA6gqPMGO1V0X6LD7XE7bxu8FFygfNNczICLIMAMsMLDVATcRBPJBSYGFcJTRss9dumfjv%2BefasgVc9xhIZZUGZq5x3LYU3cqAWzz922Xsp8tcYFhJP0xJHQYgIpZiUUKO2BY2BQqabqzeBFksD3vAsIZL4vR3L05x036aT6CrBFzeM%2FzXeIBLYbMgcNosWU7R8AAt%2FBq%2FkHa44l14sXyHkkwVj1n1QwIWJ3Qw%2BdDgwwY6pgFY91k7Ihje9rKyYFIWvCCmBcZjH6ROwVv%2BtwsI6D%2B%2BvlrG%2FoTfKlAsvJKrPr1%2BJFOnOQsxU8ShrJz5y%2BpRm6uqSBiRj4EPQalHQgZAXMGVlBLclxC0i%2FWcGpaQzatSFb5Y393%2FJZzvisbyqQZ4kcYR1YL9%2B0KQyY4L%2F6tLHFIfHbZzPHyJkzEp1pn5ftnDcCoJVRAnHFha2uGGOr6Sjp7yF6fHScak&X-Amz-Signature=1d8d56247c7ba68110e59d6e0a95ba0b3e89f15a4e2b8460eabdf42f74ece0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
