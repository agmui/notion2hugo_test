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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EF3Y3SE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQ%2BZ6h6pPI9CNs76GIWn5yHvupJBuOTk4g2Wvujs8U%2FAiBJAcYeaM64tRnzJrhKWfGcjeq46mzzzjR1ADg54b%2BRDCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMaxei8k1c%2FFkSLfPPKtwDsQkgUkAm2gdXfkSf%2BrkeGKkA%2BAznxBoNWrnsJSMkFYW90g1MgxrQMYDU2lFkVKoI9oSrtZXeBa5UgQa60W%2F1DfhH34VGMoxi4WV%2B%2BR17%2FE90aXylCAnw%2F1Rz%2BRWRtVuim6wtP4%2Bd4Ws4pnPjpPBT3fOvEV%2Fihb%2FhKmb1OB5HcJyKbcxZwlY3rh5NEV2JCSeWYPlGNO2fruP9u5hdiJvztarNAx%2FM3okJgT8U%2By6kTznZpeYEQjaHW5HTKv7F3KtXiCEEUL7peUkj4r5%2FEZYGlJ6Q2cDop4lvR5bW%2BSRVdIA%2BGpleG2EIhRdD%2BHYlyV%2Fbdm2FCTh4iltZkbyZBeGDwwXqyh8bTCpDA%2BehtYgO24zxSXAgMJbin80nYcEAByqYf8AU8S%2B8QjPzFY8CjMm59cqKxhaMej5lqyD2vvbmwuFNc8kRyojkyhD8HqOc9B138ZpPGY6s8heS%2FBpLmD6FM%2FPGc0BdoVbrxJXSANdAERcj0OZ8Dk080BTJDEFY%2FdkKUw9oC2aWAyOcR8UK4JIWCU0WPpAd6VdprBXZ2xntvhebD%2BiIgMUIHc1cNtcQ8YqFWQioiaeOiQQMhTnegodZWzGRk9Jns5D7VJxjj523ZMF5NaofgXmGuwopQGkwstrVwQY6pgEPF1KRVVlIBvx9yH3iGj9zTzsJZn5XN5zLXVGcrFq3QqnW9o6zyJ4E1S0i2uiYIFPX4zFePHc%2B%2BNyVip8a%2BRPTMbNLIh8Cgr4F4sQxufa1QeIUXv9HRh4xiOdf54foOzw1sYaNl3UCRm6%2BbSJOV%2BkW5q6DYikVHsmhk7mH3s6FavC%2Bmr8fXwlucC6mTbkCd73QK366dngIQPbQkj9gxCfw16vVbdGm&X-Amz-Signature=08c898436eff854f81a7431ea1dcebc01aef6bf4aa92c3a9c8117ad2a3a98afa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EF3Y3SE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQ%2BZ6h6pPI9CNs76GIWn5yHvupJBuOTk4g2Wvujs8U%2FAiBJAcYeaM64tRnzJrhKWfGcjeq46mzzzjR1ADg54b%2BRDCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMaxei8k1c%2FFkSLfPPKtwDsQkgUkAm2gdXfkSf%2BrkeGKkA%2BAznxBoNWrnsJSMkFYW90g1MgxrQMYDU2lFkVKoI9oSrtZXeBa5UgQa60W%2F1DfhH34VGMoxi4WV%2B%2BR17%2FE90aXylCAnw%2F1Rz%2BRWRtVuim6wtP4%2Bd4Ws4pnPjpPBT3fOvEV%2Fihb%2FhKmb1OB5HcJyKbcxZwlY3rh5NEV2JCSeWYPlGNO2fruP9u5hdiJvztarNAx%2FM3okJgT8U%2By6kTznZpeYEQjaHW5HTKv7F3KtXiCEEUL7peUkj4r5%2FEZYGlJ6Q2cDop4lvR5bW%2BSRVdIA%2BGpleG2EIhRdD%2BHYlyV%2Fbdm2FCTh4iltZkbyZBeGDwwXqyh8bTCpDA%2BehtYgO24zxSXAgMJbin80nYcEAByqYf8AU8S%2B8QjPzFY8CjMm59cqKxhaMej5lqyD2vvbmwuFNc8kRyojkyhD8HqOc9B138ZpPGY6s8heS%2FBpLmD6FM%2FPGc0BdoVbrxJXSANdAERcj0OZ8Dk080BTJDEFY%2FdkKUw9oC2aWAyOcR8UK4JIWCU0WPpAd6VdprBXZ2xntvhebD%2BiIgMUIHc1cNtcQ8YqFWQioiaeOiQQMhTnegodZWzGRk9Jns5D7VJxjj523ZMF5NaofgXmGuwopQGkwstrVwQY6pgEPF1KRVVlIBvx9yH3iGj9zTzsJZn5XN5zLXVGcrFq3QqnW9o6zyJ4E1S0i2uiYIFPX4zFePHc%2B%2BNyVip8a%2BRPTMbNLIh8Cgr4F4sQxufa1QeIUXv9HRh4xiOdf54foOzw1sYaNl3UCRm6%2BbSJOV%2BkW5q6DYikVHsmhk7mH3s6FavC%2Bmr8fXwlucC6mTbkCd73QK366dngIQPbQkj9gxCfw16vVbdGm&X-Amz-Signature=9621f5c9fd9e805a6083e6d4f3cd7b906e4ef56ca806e189844d6030a5b6e6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EF3Y3SE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQ%2BZ6h6pPI9CNs76GIWn5yHvupJBuOTk4g2Wvujs8U%2FAiBJAcYeaM64tRnzJrhKWfGcjeq46mzzzjR1ADg54b%2BRDCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMaxei8k1c%2FFkSLfPPKtwDsQkgUkAm2gdXfkSf%2BrkeGKkA%2BAznxBoNWrnsJSMkFYW90g1MgxrQMYDU2lFkVKoI9oSrtZXeBa5UgQa60W%2F1DfhH34VGMoxi4WV%2B%2BR17%2FE90aXylCAnw%2F1Rz%2BRWRtVuim6wtP4%2Bd4Ws4pnPjpPBT3fOvEV%2Fihb%2FhKmb1OB5HcJyKbcxZwlY3rh5NEV2JCSeWYPlGNO2fruP9u5hdiJvztarNAx%2FM3okJgT8U%2By6kTznZpeYEQjaHW5HTKv7F3KtXiCEEUL7peUkj4r5%2FEZYGlJ6Q2cDop4lvR5bW%2BSRVdIA%2BGpleG2EIhRdD%2BHYlyV%2Fbdm2FCTh4iltZkbyZBeGDwwXqyh8bTCpDA%2BehtYgO24zxSXAgMJbin80nYcEAByqYf8AU8S%2B8QjPzFY8CjMm59cqKxhaMej5lqyD2vvbmwuFNc8kRyojkyhD8HqOc9B138ZpPGY6s8heS%2FBpLmD6FM%2FPGc0BdoVbrxJXSANdAERcj0OZ8Dk080BTJDEFY%2FdkKUw9oC2aWAyOcR8UK4JIWCU0WPpAd6VdprBXZ2xntvhebD%2BiIgMUIHc1cNtcQ8YqFWQioiaeOiQQMhTnegodZWzGRk9Jns5D7VJxjj523ZMF5NaofgXmGuwopQGkwstrVwQY6pgEPF1KRVVlIBvx9yH3iGj9zTzsJZn5XN5zLXVGcrFq3QqnW9o6zyJ4E1S0i2uiYIFPX4zFePHc%2B%2BNyVip8a%2BRPTMbNLIh8Cgr4F4sQxufa1QeIUXv9HRh4xiOdf54foOzw1sYaNl3UCRm6%2BbSJOV%2BkW5q6DYikVHsmhk7mH3s6FavC%2Bmr8fXwlucC6mTbkCd73QK366dngIQPbQkj9gxCfw16vVbdGm&X-Amz-Signature=bf5b83e2a4099557553b8108f2bcf14bca439fd49b3b83d49ad48bbd1192aa7a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
