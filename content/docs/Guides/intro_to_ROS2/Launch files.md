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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLS5I6P%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh2wQppD%2Fn2GV%2FJc47b1NPUb%2FJhWieQRTUUWIf2Xn1QgIgVoOwCosfjIoLazrJaA7UBOHLY76ncAjRPB03u65t0%2Fsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOjQn3jPs6RjSmvGJCrcA3GQZ3UfhzIFP8%2FKMjj9sp6qW1jy%2BTNBJBR3gbLq4cgRMY3DYoAHI0iFgvBmObM4X8u%2FF6%2BHDDiT7brwPDBmnAZgt4qtlUgimpSY6Zh%2BP5PAl2AA6xhMuboUr3IHLZS7O3iPqA0s43xzIAFkAoswFXB%2Byl8K4zU8BMkePJXQE10v6iLzVwxfCBFLcLVbo%2BjZZUMrIwr78ibyPl8nno9iY51%2F%2FrNGVulGLtZHqioQjtECcaxSHIOS8BLcD6CDqNxWCI7pcJlAPPh1ataRH9qa1TUEMy3byJ1RMSZofL29ZiRmRG28yay49q9kWzGPVHOSpV7Fjii57Q3KEBs%2F2%2BoDPB%2BV1bcIyrSQbWUGi93ckgrZEc56H7n0Em3sLiGaNXTh9%2Bn61tLHpiB0FVVP0veqsARhdo4WuUWPkwCvrM4IzvT4eScLV8GyEG2Q4wcJdACrkk7H52Dz9MCFVIIgv7%2B7D6YTiLWNdLbbz2PwonpzC7gec5lwIl5h%2BynesT5jc2UaW2TC0xmyv%2FgvpdLQEpUduMlZSctqKomwxFMJ7B5b8yZB%2Fs6HNSaLql9XAszrcwYTu5pmJCYqMfDUCMKKYk9qrb2SeQQj%2BRvXlFlPpcVkvpYkl7iUhxKVchfhy8DpMPrfgcAGOqUBg60nkkubjZs689zXiilkzJJt%2F7E%2BbNLDnN%2F%2BV3xzpTJcm%2B3R%2Fkoq3DSryNK0xlaqfHgMefIIviUyjlECzNoycIUkhxqocxyfQn9Xjmk1zbNwYfx5LDj7cmnTML%2FWn1vFYsYmDaz%2BhJ2%2BNZMk05ZfjLU96BzAgnaX3RzV6sbkie4VXYVV%2B2fnx38tITOZoUA3PrSJHH4A4hTw0%2FDPLm93m7bRdxHY&X-Amz-Signature=e422d3b58e15a57eb01de1e1471ecfb66cbd9bf23b655ae0bea2e524d4c502a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLS5I6P%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh2wQppD%2Fn2GV%2FJc47b1NPUb%2FJhWieQRTUUWIf2Xn1QgIgVoOwCosfjIoLazrJaA7UBOHLY76ncAjRPB03u65t0%2Fsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOjQn3jPs6RjSmvGJCrcA3GQZ3UfhzIFP8%2FKMjj9sp6qW1jy%2BTNBJBR3gbLq4cgRMY3DYoAHI0iFgvBmObM4X8u%2FF6%2BHDDiT7brwPDBmnAZgt4qtlUgimpSY6Zh%2BP5PAl2AA6xhMuboUr3IHLZS7O3iPqA0s43xzIAFkAoswFXB%2Byl8K4zU8BMkePJXQE10v6iLzVwxfCBFLcLVbo%2BjZZUMrIwr78ibyPl8nno9iY51%2F%2FrNGVulGLtZHqioQjtECcaxSHIOS8BLcD6CDqNxWCI7pcJlAPPh1ataRH9qa1TUEMy3byJ1RMSZofL29ZiRmRG28yay49q9kWzGPVHOSpV7Fjii57Q3KEBs%2F2%2BoDPB%2BV1bcIyrSQbWUGi93ckgrZEc56H7n0Em3sLiGaNXTh9%2Bn61tLHpiB0FVVP0veqsARhdo4WuUWPkwCvrM4IzvT4eScLV8GyEG2Q4wcJdACrkk7H52Dz9MCFVIIgv7%2B7D6YTiLWNdLbbz2PwonpzC7gec5lwIl5h%2BynesT5jc2UaW2TC0xmyv%2FgvpdLQEpUduMlZSctqKomwxFMJ7B5b8yZB%2Fs6HNSaLql9XAszrcwYTu5pmJCYqMfDUCMKKYk9qrb2SeQQj%2BRvXlFlPpcVkvpYkl7iUhxKVchfhy8DpMPrfgcAGOqUBg60nkkubjZs689zXiilkzJJt%2F7E%2BbNLDnN%2F%2BV3xzpTJcm%2B3R%2Fkoq3DSryNK0xlaqfHgMefIIviUyjlECzNoycIUkhxqocxyfQn9Xjmk1zbNwYfx5LDj7cmnTML%2FWn1vFYsYmDaz%2BhJ2%2BNZMk05ZfjLU96BzAgnaX3RzV6sbkie4VXYVV%2B2fnx38tITOZoUA3PrSJHH4A4hTw0%2FDPLm93m7bRdxHY&X-Amz-Signature=ba989376d2b8b435cdf2e4eddf4867f8519d1681b9ae9a55fa44f5b2d2bb4a75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLS5I6P%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh2wQppD%2Fn2GV%2FJc47b1NPUb%2FJhWieQRTUUWIf2Xn1QgIgVoOwCosfjIoLazrJaA7UBOHLY76ncAjRPB03u65t0%2Fsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOjQn3jPs6RjSmvGJCrcA3GQZ3UfhzIFP8%2FKMjj9sp6qW1jy%2BTNBJBR3gbLq4cgRMY3DYoAHI0iFgvBmObM4X8u%2FF6%2BHDDiT7brwPDBmnAZgt4qtlUgimpSY6Zh%2BP5PAl2AA6xhMuboUr3IHLZS7O3iPqA0s43xzIAFkAoswFXB%2Byl8K4zU8BMkePJXQE10v6iLzVwxfCBFLcLVbo%2BjZZUMrIwr78ibyPl8nno9iY51%2F%2FrNGVulGLtZHqioQjtECcaxSHIOS8BLcD6CDqNxWCI7pcJlAPPh1ataRH9qa1TUEMy3byJ1RMSZofL29ZiRmRG28yay49q9kWzGPVHOSpV7Fjii57Q3KEBs%2F2%2BoDPB%2BV1bcIyrSQbWUGi93ckgrZEc56H7n0Em3sLiGaNXTh9%2Bn61tLHpiB0FVVP0veqsARhdo4WuUWPkwCvrM4IzvT4eScLV8GyEG2Q4wcJdACrkk7H52Dz9MCFVIIgv7%2B7D6YTiLWNdLbbz2PwonpzC7gec5lwIl5h%2BynesT5jc2UaW2TC0xmyv%2FgvpdLQEpUduMlZSctqKomwxFMJ7B5b8yZB%2Fs6HNSaLql9XAszrcwYTu5pmJCYqMfDUCMKKYk9qrb2SeQQj%2BRvXlFlPpcVkvpYkl7iUhxKVchfhy8DpMPrfgcAGOqUBg60nkkubjZs689zXiilkzJJt%2F7E%2BbNLDnN%2F%2BV3xzpTJcm%2B3R%2Fkoq3DSryNK0xlaqfHgMefIIviUyjlECzNoycIUkhxqocxyfQn9Xjmk1zbNwYfx5LDj7cmnTML%2FWn1vFYsYmDaz%2BhJ2%2BNZMk05ZfjLU96BzAgnaX3RzV6sbkie4VXYVV%2B2fnx38tITOZoUA3PrSJHH4A4hTw0%2FDPLm93m7bRdxHY&X-Amz-Signature=b414696a6b508dfeb382e922a5f49737781634c922478282c7c6433cff982d34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
