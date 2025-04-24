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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPZS4EE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE9DMKotpidOJ9gVfrbWfUEAPNw9PPInima25IAriqWZAiEAttzeC%2FJISrveEudU3pUgg9DJzfSsGe6qV%2BG2zuCdgbYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDedULWxO%2FD2oLzkQyrcA2NQZE9sTo5dFVA0txiZ6x0fwPtkDEGDc%2ByFq2cIbMQSQLjE6CZq9jTWH7IJ9eGDXoEO6dbI5F%2B6DEjcZ%2BXSUA6MMPORRuAvx0ficK8NTrhPnjNWC4uxBn%2FO78qUoLUYww%2B%2F8UR2qX5jjLGdPdlZNrCxiyv4xEdC6XO6h9hqXjRrjtT4XWbDU7YaOuDazfu3WRM8ATmfxe7tE2ME0B77MTB1QCA6CNIi0Z7ZjSzKmx686DbZAgOT4P5d9sLN2qy3futI5As3Vymo8ajHKGqbwsVr5J8I5ACneYJS8aqRbiSPnHjPw5xlskUwLWkhpb6WuOgBUvb%2Blh8eKwGTO6plLc%2F19APukkSUix74vDlORFx2fxFeDSplTkoZ8pvx02HVem1nBWWuZhsQMQvcEnxE%2BNb1ynpXiKsnSFzbS5ml%2FJOzI7djuc3ggQOljfqZQLF43rv%2BSzFBsCOWqOtWuI8Rs12XL0xTK6SD0FyEIThzaZslB%2FqgANI%2BgTS3HgB%2BqvE3Pr9XueL99FppJD1x09WaXMvSb420tDMaJsX67ah1mD5BAcG91GXIKKZDytPz844rlFqpbNutbllMXTp5W5vc0yMlySCx%2Bw%2FPrN3noNDPrdI8i2PYHjyovX8ARPvWMIugqMAGOqUBCw6T3BCT1EhgoEvxHBuzmbCQR4nLUUkRdn%2FrnUbsFG3uMHGhNrh3baC%2B33iCv0DrSZYgkUprATr6w5KT3GBS6AHa4Gy7h0G17vm18Peaot6KmksPxIUaV%2F%2B8aURcEGaE%2F%2F27ofRMgR%2BZTZrKtCP1CbtlgEjtg2zSQk3vipndAHlX5aZIMK6RyFOZbHW%2FmiTkZ2XFS4NdnkQJ%2FRdg62RYGscwV4VW&X-Amz-Signature=252e0ef1831af1c31d8cb49a38c6bb31a6f7cf94df662e5c494ddf947346c278&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPZS4EE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE9DMKotpidOJ9gVfrbWfUEAPNw9PPInima25IAriqWZAiEAttzeC%2FJISrveEudU3pUgg9DJzfSsGe6qV%2BG2zuCdgbYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDedULWxO%2FD2oLzkQyrcA2NQZE9sTo5dFVA0txiZ6x0fwPtkDEGDc%2ByFq2cIbMQSQLjE6CZq9jTWH7IJ9eGDXoEO6dbI5F%2B6DEjcZ%2BXSUA6MMPORRuAvx0ficK8NTrhPnjNWC4uxBn%2FO78qUoLUYww%2B%2F8UR2qX5jjLGdPdlZNrCxiyv4xEdC6XO6h9hqXjRrjtT4XWbDU7YaOuDazfu3WRM8ATmfxe7tE2ME0B77MTB1QCA6CNIi0Z7ZjSzKmx686DbZAgOT4P5d9sLN2qy3futI5As3Vymo8ajHKGqbwsVr5J8I5ACneYJS8aqRbiSPnHjPw5xlskUwLWkhpb6WuOgBUvb%2Blh8eKwGTO6plLc%2F19APukkSUix74vDlORFx2fxFeDSplTkoZ8pvx02HVem1nBWWuZhsQMQvcEnxE%2BNb1ynpXiKsnSFzbS5ml%2FJOzI7djuc3ggQOljfqZQLF43rv%2BSzFBsCOWqOtWuI8Rs12XL0xTK6SD0FyEIThzaZslB%2FqgANI%2BgTS3HgB%2BqvE3Pr9XueL99FppJD1x09WaXMvSb420tDMaJsX67ah1mD5BAcG91GXIKKZDytPz844rlFqpbNutbllMXTp5W5vc0yMlySCx%2Bw%2FPrN3noNDPrdI8i2PYHjyovX8ARPvWMIugqMAGOqUBCw6T3BCT1EhgoEvxHBuzmbCQR4nLUUkRdn%2FrnUbsFG3uMHGhNrh3baC%2B33iCv0DrSZYgkUprATr6w5KT3GBS6AHa4Gy7h0G17vm18Peaot6KmksPxIUaV%2F%2B8aURcEGaE%2F%2F27ofRMgR%2BZTZrKtCP1CbtlgEjtg2zSQk3vipndAHlX5aZIMK6RyFOZbHW%2FmiTkZ2XFS4NdnkQJ%2FRdg62RYGscwV4VW&X-Amz-Signature=edb97f6a0eccb2fab958ef7757e66efc8954977efb7dc4edd8dcf1db9183fd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPZS4EE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIE9DMKotpidOJ9gVfrbWfUEAPNw9PPInima25IAriqWZAiEAttzeC%2FJISrveEudU3pUgg9DJzfSsGe6qV%2BG2zuCdgbYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDedULWxO%2FD2oLzkQyrcA2NQZE9sTo5dFVA0txiZ6x0fwPtkDEGDc%2ByFq2cIbMQSQLjE6CZq9jTWH7IJ9eGDXoEO6dbI5F%2B6DEjcZ%2BXSUA6MMPORRuAvx0ficK8NTrhPnjNWC4uxBn%2FO78qUoLUYww%2B%2F8UR2qX5jjLGdPdlZNrCxiyv4xEdC6XO6h9hqXjRrjtT4XWbDU7YaOuDazfu3WRM8ATmfxe7tE2ME0B77MTB1QCA6CNIi0Z7ZjSzKmx686DbZAgOT4P5d9sLN2qy3futI5As3Vymo8ajHKGqbwsVr5J8I5ACneYJS8aqRbiSPnHjPw5xlskUwLWkhpb6WuOgBUvb%2Blh8eKwGTO6plLc%2F19APukkSUix74vDlORFx2fxFeDSplTkoZ8pvx02HVem1nBWWuZhsQMQvcEnxE%2BNb1ynpXiKsnSFzbS5ml%2FJOzI7djuc3ggQOljfqZQLF43rv%2BSzFBsCOWqOtWuI8Rs12XL0xTK6SD0FyEIThzaZslB%2FqgANI%2BgTS3HgB%2BqvE3Pr9XueL99FppJD1x09WaXMvSb420tDMaJsX67ah1mD5BAcG91GXIKKZDytPz844rlFqpbNutbllMXTp5W5vc0yMlySCx%2Bw%2FPrN3noNDPrdI8i2PYHjyovX8ARPvWMIugqMAGOqUBCw6T3BCT1EhgoEvxHBuzmbCQR4nLUUkRdn%2FrnUbsFG3uMHGhNrh3baC%2B33iCv0DrSZYgkUprATr6w5KT3GBS6AHa4Gy7h0G17vm18Peaot6KmksPxIUaV%2F%2B8aURcEGaE%2F%2F27ofRMgR%2BZTZrKtCP1CbtlgEjtg2zSQk3vipndAHlX5aZIMK6RyFOZbHW%2FmiTkZ2XFS4NdnkQJ%2FRdg62RYGscwV4VW&X-Amz-Signature=fd04d794088fc4a697b1655101c09a3940f36224c0fd33426be579c811304197&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
