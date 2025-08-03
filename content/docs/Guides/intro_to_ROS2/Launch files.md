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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2YTH65%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BBnqV1RpYPM8PxDfGCdMJjSFbeG%2FEQ6i%2BufaYedOHngIhAP3CGLLAnf8mLShq5tNpoDlH6I4Zvc5IjOO5J8OUK4XpKv8DCDQQABoMNjM3NDIzMTgzODA1IgwJIfpuwvOBGUIpP6kq3ANBENpMcrfkY%2F%2FwUWLyX4NUKueWPBxRs35wUOxCVhc4qP%2Bmn8HC42hh31Kw8Wf5lAzz4kS2VoaLX7tlN9%2F861HuiwdSoEnN57u4YvUBt9Uzf15V%2Bt%2FmFLhp8xemf4LGqjWYo1Xo8%2FRONsDZU8FhYIDVArb3y3EZIzUkeF2bkIQO4Qfx4pgE1%2BeL2xgK63LcQBIVzSszuWrl1SIzBcCtd2pMLdukBKfgQm64cRBKsvhhCayryzLmZES%2BcbGoMQLBD9mNBOGKsAnzN5w2bMmHR21ZZmzH9AqT4G9vv6vOcJB%2BPlw6VbbO3vmyKJU4fdl3BSgW4lvhEJI49wmGsEw5FuAXbj6Nvnae%2B2PIM2oqW3TS2NOYRXXGYxPa0bFUhlmES3r9oECReq3nZye%2FfwJpB72clqjZeYDmxWM3%2BfmKbSGQbzvBYdmMySgBgHzd6umv5PZk1cn44veEb5rnoUpuHNw16kt6wSmZ%2BTISJ%2FW2HoISyrqKCJQP0To7RPkWwxGqMNcNi349BqMNnd4VodUYz7RqxbRtLsX2ji4ld1UPdDVhJEjD%2Boy5OV735hfqaOwr%2Ff1vh8tTIC0eELCyfhcq5cHE5wuoM3vggHT18dbEMNPF8RA6YTIlAFKv%2B2XgKzCG2b7EBjqkAXlTIND3cvXzyOk3ZvkKeo4MvSMAMbeRpt2dNfZPcIoA%2Fgt4DRAjKrJxwZ3gayUFUSSwjEZQkDUhPioq%2FlE1Lgt%2FyeG8FHK8XgmOPAAmcZYEVhgVzNGsO2kmrBZEK6mPAslW5G%2FfQKpTNbcbHpE8w%2FV4K8dhg%2FNHJLZ9R8zTw4uFlg1myfamVIb2R1kBivgwJ0xfZ8i1WM%2BSiqmPd5OYtmOsvyH1&X-Amz-Signature=e31e5abf82d08b9bd92556ed3c3811e9d4600a95c721f31d4bdc9bc815d534df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2YTH65%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BBnqV1RpYPM8PxDfGCdMJjSFbeG%2FEQ6i%2BufaYedOHngIhAP3CGLLAnf8mLShq5tNpoDlH6I4Zvc5IjOO5J8OUK4XpKv8DCDQQABoMNjM3NDIzMTgzODA1IgwJIfpuwvOBGUIpP6kq3ANBENpMcrfkY%2F%2FwUWLyX4NUKueWPBxRs35wUOxCVhc4qP%2Bmn8HC42hh31Kw8Wf5lAzz4kS2VoaLX7tlN9%2F861HuiwdSoEnN57u4YvUBt9Uzf15V%2Bt%2FmFLhp8xemf4LGqjWYo1Xo8%2FRONsDZU8FhYIDVArb3y3EZIzUkeF2bkIQO4Qfx4pgE1%2BeL2xgK63LcQBIVzSszuWrl1SIzBcCtd2pMLdukBKfgQm64cRBKsvhhCayryzLmZES%2BcbGoMQLBD9mNBOGKsAnzN5w2bMmHR21ZZmzH9AqT4G9vv6vOcJB%2BPlw6VbbO3vmyKJU4fdl3BSgW4lvhEJI49wmGsEw5FuAXbj6Nvnae%2B2PIM2oqW3TS2NOYRXXGYxPa0bFUhlmES3r9oECReq3nZye%2FfwJpB72clqjZeYDmxWM3%2BfmKbSGQbzvBYdmMySgBgHzd6umv5PZk1cn44veEb5rnoUpuHNw16kt6wSmZ%2BTISJ%2FW2HoISyrqKCJQP0To7RPkWwxGqMNcNi349BqMNnd4VodUYz7RqxbRtLsX2ji4ld1UPdDVhJEjD%2Boy5OV735hfqaOwr%2Ff1vh8tTIC0eELCyfhcq5cHE5wuoM3vggHT18dbEMNPF8RA6YTIlAFKv%2B2XgKzCG2b7EBjqkAXlTIND3cvXzyOk3ZvkKeo4MvSMAMbeRpt2dNfZPcIoA%2Fgt4DRAjKrJxwZ3gayUFUSSwjEZQkDUhPioq%2FlE1Lgt%2FyeG8FHK8XgmOPAAmcZYEVhgVzNGsO2kmrBZEK6mPAslW5G%2FfQKpTNbcbHpE8w%2FV4K8dhg%2FNHJLZ9R8zTw4uFlg1myfamVIb2R1kBivgwJ0xfZ8i1WM%2BSiqmPd5OYtmOsvyH1&X-Amz-Signature=ba5e575f261a1b7766ede57bfb776db0ab7a345b3080802877a7e0f70db4d35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2YTH65%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BBnqV1RpYPM8PxDfGCdMJjSFbeG%2FEQ6i%2BufaYedOHngIhAP3CGLLAnf8mLShq5tNpoDlH6I4Zvc5IjOO5J8OUK4XpKv8DCDQQABoMNjM3NDIzMTgzODA1IgwJIfpuwvOBGUIpP6kq3ANBENpMcrfkY%2F%2FwUWLyX4NUKueWPBxRs35wUOxCVhc4qP%2Bmn8HC42hh31Kw8Wf5lAzz4kS2VoaLX7tlN9%2F861HuiwdSoEnN57u4YvUBt9Uzf15V%2Bt%2FmFLhp8xemf4LGqjWYo1Xo8%2FRONsDZU8FhYIDVArb3y3EZIzUkeF2bkIQO4Qfx4pgE1%2BeL2xgK63LcQBIVzSszuWrl1SIzBcCtd2pMLdukBKfgQm64cRBKsvhhCayryzLmZES%2BcbGoMQLBD9mNBOGKsAnzN5w2bMmHR21ZZmzH9AqT4G9vv6vOcJB%2BPlw6VbbO3vmyKJU4fdl3BSgW4lvhEJI49wmGsEw5FuAXbj6Nvnae%2B2PIM2oqW3TS2NOYRXXGYxPa0bFUhlmES3r9oECReq3nZye%2FfwJpB72clqjZeYDmxWM3%2BfmKbSGQbzvBYdmMySgBgHzd6umv5PZk1cn44veEb5rnoUpuHNw16kt6wSmZ%2BTISJ%2FW2HoISyrqKCJQP0To7RPkWwxGqMNcNi349BqMNnd4VodUYz7RqxbRtLsX2ji4ld1UPdDVhJEjD%2Boy5OV735hfqaOwr%2Ff1vh8tTIC0eELCyfhcq5cHE5wuoM3vggHT18dbEMNPF8RA6YTIlAFKv%2B2XgKzCG2b7EBjqkAXlTIND3cvXzyOk3ZvkKeo4MvSMAMbeRpt2dNfZPcIoA%2Fgt4DRAjKrJxwZ3gayUFUSSwjEZQkDUhPioq%2FlE1Lgt%2FyeG8FHK8XgmOPAAmcZYEVhgVzNGsO2kmrBZEK6mPAslW5G%2FfQKpTNbcbHpE8w%2FV4K8dhg%2FNHJLZ9R8zTw4uFlg1myfamVIb2R1kBivgwJ0xfZ8i1WM%2BSiqmPd5OYtmOsvyH1&X-Amz-Signature=c8ca6fa53881be683b8a53198be7c483d516437dd9c45f61a4c11a6c529722b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
