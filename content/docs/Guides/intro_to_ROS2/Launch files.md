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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG5IOFJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANDcc2vWJtVK53mLvBbX%2F2tAYC1QFY%2FWuHLTBT%2BySJgIhAKsCi7uMPuK6EpS1sbVCkWNTrlMZOJCHs4r61UTOqq41Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwLk2WHHhkdfGC1GQcq3AMRanAW0d56QNnXy5KsYPvupVIvjmUA1XptZw%2BhiHmscxL7nqcVrFgPHiR0OR4mCWWkteVdzZwIRYt7K4U5y0twnz8gzpxWlZX2syH1nC%2BV599%2Bo1JVEOvooyIjUIFnn7mkYXd7f5R5J87D4y9030m5yLD3D9vRA1%2BqpLCgq0bSKBsn0mIlDjSfFs3mdkZJo1Hv3ikfsBLaVrHp5ufRm0HTEdKqh%2BvWaaQNYQ1lgRAwYjSYnAg9SF9VY2vRbsXn5wkExXefd7GpXKkTccf4nfk6e9dN8hzs1Ur4eyNEGTu%2BB%2Fg9wCTV4LXwwO%2BA8edfMbxM1mUjQZ2k7XztHjOmSzdtjX6vt1V75yJ31mOPaOOCbPVHe1J9%2F7nOby18jhHp1YHPIkEOPZ2EmfmZ1wmvc22NfqutU94uaQRUiLPHCpY5PwvPzEbaMkkzhQFbS0tNMrGkTcw5i63NwowxwEt4hCMfmUc9UjB1yt5WZYwEZyhE%2FcAZ0wTj%2Bx5rx61s2Ic0X6JJwbOT4fIqZogMiqrLs5gwITNit33xw4sj0AYndERy%2BKTW7V3UiY00wxlewYOLkh1ej6nQXM5WhAvvdXx2IHtK4YEcB%2BapC5KxfGViaAti9EDC3%2B9di8WlmcVK5DCPrNu%2BBjqkAU10D3ImOWkfsujYZFJqjtZ3OQNrnOmh150Y08bQ0UHUMnItV5PkfEqJFbvWrOSTwuIGUPwKSmc8gv0Zu39MXD2BLBmL7EeeqstPrebwaZ33%2BM2adUDXtRUzUUfrtpAbSk%2Fnrm08A3icAolq8ZXy6b5QoGh5WUKSIDez2STuf4Q7V1yUp06eMZ0aSjdp72BBn3m89ueUFVOc1L7MVVOIcZcH2BBv&X-Amz-Signature=dd7c099cb0e5e5e63f73a5c5a7cea4cb3644153948a8e6ae9356a97dba258ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG5IOFJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANDcc2vWJtVK53mLvBbX%2F2tAYC1QFY%2FWuHLTBT%2BySJgIhAKsCi7uMPuK6EpS1sbVCkWNTrlMZOJCHs4r61UTOqq41Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwLk2WHHhkdfGC1GQcq3AMRanAW0d56QNnXy5KsYPvupVIvjmUA1XptZw%2BhiHmscxL7nqcVrFgPHiR0OR4mCWWkteVdzZwIRYt7K4U5y0twnz8gzpxWlZX2syH1nC%2BV599%2Bo1JVEOvooyIjUIFnn7mkYXd7f5R5J87D4y9030m5yLD3D9vRA1%2BqpLCgq0bSKBsn0mIlDjSfFs3mdkZJo1Hv3ikfsBLaVrHp5ufRm0HTEdKqh%2BvWaaQNYQ1lgRAwYjSYnAg9SF9VY2vRbsXn5wkExXefd7GpXKkTccf4nfk6e9dN8hzs1Ur4eyNEGTu%2BB%2Fg9wCTV4LXwwO%2BA8edfMbxM1mUjQZ2k7XztHjOmSzdtjX6vt1V75yJ31mOPaOOCbPVHe1J9%2F7nOby18jhHp1YHPIkEOPZ2EmfmZ1wmvc22NfqutU94uaQRUiLPHCpY5PwvPzEbaMkkzhQFbS0tNMrGkTcw5i63NwowxwEt4hCMfmUc9UjB1yt5WZYwEZyhE%2FcAZ0wTj%2Bx5rx61s2Ic0X6JJwbOT4fIqZogMiqrLs5gwITNit33xw4sj0AYndERy%2BKTW7V3UiY00wxlewYOLkh1ej6nQXM5WhAvvdXx2IHtK4YEcB%2BapC5KxfGViaAti9EDC3%2B9di8WlmcVK5DCPrNu%2BBjqkAU10D3ImOWkfsujYZFJqjtZ3OQNrnOmh150Y08bQ0UHUMnItV5PkfEqJFbvWrOSTwuIGUPwKSmc8gv0Zu39MXD2BLBmL7EeeqstPrebwaZ33%2BM2adUDXtRUzUUfrtpAbSk%2Fnrm08A3icAolq8ZXy6b5QoGh5WUKSIDez2STuf4Q7V1yUp06eMZ0aSjdp72BBn3m89ueUFVOc1L7MVVOIcZcH2BBv&X-Amz-Signature=39712c9c6d3a3ee4e2f12539a443e4a8184704a656a01c852bfeb22f0699fb41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG5IOFJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANDcc2vWJtVK53mLvBbX%2F2tAYC1QFY%2FWuHLTBT%2BySJgIhAKsCi7uMPuK6EpS1sbVCkWNTrlMZOJCHs4r61UTOqq41Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwLk2WHHhkdfGC1GQcq3AMRanAW0d56QNnXy5KsYPvupVIvjmUA1XptZw%2BhiHmscxL7nqcVrFgPHiR0OR4mCWWkteVdzZwIRYt7K4U5y0twnz8gzpxWlZX2syH1nC%2BV599%2Bo1JVEOvooyIjUIFnn7mkYXd7f5R5J87D4y9030m5yLD3D9vRA1%2BqpLCgq0bSKBsn0mIlDjSfFs3mdkZJo1Hv3ikfsBLaVrHp5ufRm0HTEdKqh%2BvWaaQNYQ1lgRAwYjSYnAg9SF9VY2vRbsXn5wkExXefd7GpXKkTccf4nfk6e9dN8hzs1Ur4eyNEGTu%2BB%2Fg9wCTV4LXwwO%2BA8edfMbxM1mUjQZ2k7XztHjOmSzdtjX6vt1V75yJ31mOPaOOCbPVHe1J9%2F7nOby18jhHp1YHPIkEOPZ2EmfmZ1wmvc22NfqutU94uaQRUiLPHCpY5PwvPzEbaMkkzhQFbS0tNMrGkTcw5i63NwowxwEt4hCMfmUc9UjB1yt5WZYwEZyhE%2FcAZ0wTj%2Bx5rx61s2Ic0X6JJwbOT4fIqZogMiqrLs5gwITNit33xw4sj0AYndERy%2BKTW7V3UiY00wxlewYOLkh1ej6nQXM5WhAvvdXx2IHtK4YEcB%2BapC5KxfGViaAti9EDC3%2B9di8WlmcVK5DCPrNu%2BBjqkAU10D3ImOWkfsujYZFJqjtZ3OQNrnOmh150Y08bQ0UHUMnItV5PkfEqJFbvWrOSTwuIGUPwKSmc8gv0Zu39MXD2BLBmL7EeeqstPrebwaZ33%2BM2adUDXtRUzUUfrtpAbSk%2Fnrm08A3icAolq8ZXy6b5QoGh5WUKSIDez2STuf4Q7V1yUp06eMZ0aSjdp72BBn3m89ueUFVOc1L7MVVOIcZcH2BBv&X-Amz-Signature=c1dbcfb679bb0ce45929c7dea44c0ba7eb578569e00103b73b7853b798e85dba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
