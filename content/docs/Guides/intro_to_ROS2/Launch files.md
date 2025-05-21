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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDKQTYD5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPDLz1%2B6zHEJvB8v6wInaUg5wBbbrla1UO84h4r%2BmiQIgZA882%2FxnhV8cytVFMdltKmCPRnBK8tQMNUQbfDI8S50qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuppvc%2BUOyxAFAqnyrcA%2B8Q%2F7FO2hlUoyZKEnV%2FrZSq%2BJ4YSWTm5pwm7Cd18ZKeOrG3ezwX6BIMXMWcyjjpI%2BJqhzAdyj1p0hQNk1H6gcghGefQDSwCekZEK0Fd8b9Eio8X%2BdcrBmL9539vqndceSqxFUe4lSNvjneGsnPpDwoICLbc%2Fxzx1O3UYqgvLWrBA2RiiZHpmeOhOPZGj2euLXpiWXwEs5zONLPYxB30dV2a%2Bk5nvxpBYAk0xQ7u3VelAjdV0f92rXQyJZfMxK9uTrjCwDv%2FU8lFwfWT8WcmSLN3pzpL6QLP%2FfzzpkloOBe%2FugnzIUGNDyt1Q5fiLB5EWa9fQYL4e8XBhnHCcLKhXa6hHit%2Bazv8sJWnHjq3DSgz%2BYJvvRUoXVTDFrYP0QfHz6bFYYamcZO7H4joDKtBRbv4inf%2B4A8jpkLUBAudYLrPtfppIbvjEmv474aaR4TfTPV%2BaO2wjS%2FxbswAsFZICwC7X4F%2F0yaZHGq%2FIFb085NlObOjbVsx5R7F5kIrtBdAb%2Fi72ZUA%2FttbWSR22GJoybp094ASmDDBkNPqLXq9R5KP%2Fmx6FM5Fpk3SvCmQBWkoyJJWh4B95hvEKv%2Fwr4bvh3EHnZxovs4FUagqs4HCr4b%2FVzKZ1DpcZM68XE5VMMfstcEGOqUB75qiDAT0YyinMZ3%2BeNpPYCA7XCO%2FUIinXRoUYBFT4D9I6x86mwwKtWlct7ODFg2KxJlCbXsv%2B4factfXtyylZq8gERnOF2z8bl37%2BGkBguxShxGtKhKDARiQ1%2Fow9NFgmEqOr1He877KM8kHwGdWnS2tffauqxIpwWLW6alOODx0qdRsNUD1XDzD04Mw0SXWX1pKNBJbhFLST46BFANcqM1Zoc0s&X-Amz-Signature=f31b5473ef44280b998c9a53102d51f2d6ab62c1ffbdc28572fbcac8ce9ad7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDKQTYD5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPDLz1%2B6zHEJvB8v6wInaUg5wBbbrla1UO84h4r%2BmiQIgZA882%2FxnhV8cytVFMdltKmCPRnBK8tQMNUQbfDI8S50qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuppvc%2BUOyxAFAqnyrcA%2B8Q%2F7FO2hlUoyZKEnV%2FrZSq%2BJ4YSWTm5pwm7Cd18ZKeOrG3ezwX6BIMXMWcyjjpI%2BJqhzAdyj1p0hQNk1H6gcghGefQDSwCekZEK0Fd8b9Eio8X%2BdcrBmL9539vqndceSqxFUe4lSNvjneGsnPpDwoICLbc%2Fxzx1O3UYqgvLWrBA2RiiZHpmeOhOPZGj2euLXpiWXwEs5zONLPYxB30dV2a%2Bk5nvxpBYAk0xQ7u3VelAjdV0f92rXQyJZfMxK9uTrjCwDv%2FU8lFwfWT8WcmSLN3pzpL6QLP%2FfzzpkloOBe%2FugnzIUGNDyt1Q5fiLB5EWa9fQYL4e8XBhnHCcLKhXa6hHit%2Bazv8sJWnHjq3DSgz%2BYJvvRUoXVTDFrYP0QfHz6bFYYamcZO7H4joDKtBRbv4inf%2B4A8jpkLUBAudYLrPtfppIbvjEmv474aaR4TfTPV%2BaO2wjS%2FxbswAsFZICwC7X4F%2F0yaZHGq%2FIFb085NlObOjbVsx5R7F5kIrtBdAb%2Fi72ZUA%2FttbWSR22GJoybp094ASmDDBkNPqLXq9R5KP%2Fmx6FM5Fpk3SvCmQBWkoyJJWh4B95hvEKv%2Fwr4bvh3EHnZxovs4FUagqs4HCr4b%2FVzKZ1DpcZM68XE5VMMfstcEGOqUB75qiDAT0YyinMZ3%2BeNpPYCA7XCO%2FUIinXRoUYBFT4D9I6x86mwwKtWlct7ODFg2KxJlCbXsv%2B4factfXtyylZq8gERnOF2z8bl37%2BGkBguxShxGtKhKDARiQ1%2Fow9NFgmEqOr1He877KM8kHwGdWnS2tffauqxIpwWLW6alOODx0qdRsNUD1XDzD04Mw0SXWX1pKNBJbhFLST46BFANcqM1Zoc0s&X-Amz-Signature=f04cf298dc48089791ea0117f1ec1d90b09258e8daf3a8bb1a70e0e6706ae907&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDKQTYD5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPDLz1%2B6zHEJvB8v6wInaUg5wBbbrla1UO84h4r%2BmiQIgZA882%2FxnhV8cytVFMdltKmCPRnBK8tQMNUQbfDI8S50qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuppvc%2BUOyxAFAqnyrcA%2B8Q%2F7FO2hlUoyZKEnV%2FrZSq%2BJ4YSWTm5pwm7Cd18ZKeOrG3ezwX6BIMXMWcyjjpI%2BJqhzAdyj1p0hQNk1H6gcghGefQDSwCekZEK0Fd8b9Eio8X%2BdcrBmL9539vqndceSqxFUe4lSNvjneGsnPpDwoICLbc%2Fxzx1O3UYqgvLWrBA2RiiZHpmeOhOPZGj2euLXpiWXwEs5zONLPYxB30dV2a%2Bk5nvxpBYAk0xQ7u3VelAjdV0f92rXQyJZfMxK9uTrjCwDv%2FU8lFwfWT8WcmSLN3pzpL6QLP%2FfzzpkloOBe%2FugnzIUGNDyt1Q5fiLB5EWa9fQYL4e8XBhnHCcLKhXa6hHit%2Bazv8sJWnHjq3DSgz%2BYJvvRUoXVTDFrYP0QfHz6bFYYamcZO7H4joDKtBRbv4inf%2B4A8jpkLUBAudYLrPtfppIbvjEmv474aaR4TfTPV%2BaO2wjS%2FxbswAsFZICwC7X4F%2F0yaZHGq%2FIFb085NlObOjbVsx5R7F5kIrtBdAb%2Fi72ZUA%2FttbWSR22GJoybp094ASmDDBkNPqLXq9R5KP%2Fmx6FM5Fpk3SvCmQBWkoyJJWh4B95hvEKv%2Fwr4bvh3EHnZxovs4FUagqs4HCr4b%2FVzKZ1DpcZM68XE5VMMfstcEGOqUB75qiDAT0YyinMZ3%2BeNpPYCA7XCO%2FUIinXRoUYBFT4D9I6x86mwwKtWlct7ODFg2KxJlCbXsv%2B4factfXtyylZq8gERnOF2z8bl37%2BGkBguxShxGtKhKDARiQ1%2Fow9NFgmEqOr1He877KM8kHwGdWnS2tffauqxIpwWLW6alOODx0qdRsNUD1XDzD04Mw0SXWX1pKNBJbhFLST46BFANcqM1Zoc0s&X-Amz-Signature=7fd3546f8a65ffe163934714531cf60d1c5dfb6282399839ed3dfdda4e99a0e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
