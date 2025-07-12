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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF44HXH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F0xpJhTs%2ByVvydbF85ED%2FhbFcI0OSx0pmw1jPlalmHAiEA63Yh5O8aGsQ0ZM5acUScGceRgaB4pdThC4Dfd2%2FjgZwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBbPdwNz5%2FMu3aZpSrcA3Kh5V7p6tboy1tDEb0NDaksrWeQztbiG6aUbzjNptDpfjP%2FktNr99B6QfWxldjIXZzzBg0SCq7lLNF6d8PdHao%2FNG5GcrABH1TiFGSGyWznEmI%2Fu5AuGPCay5s%2B58Pxjh6YTTr%2FbLjIc2zi7nmstXO7%2Bq21c6N3m2bsbOCnY1pXTwfXgtfnh276LWb1lmCbDH0NmIVsBzcWqUixXOhu4hE001pW%2BKc1mqvM9rCNRoETiy%2BX3bPS3HeTUo9Lb2ULGI1Lwd2guREMHQYdUooMxaDD%2FjpGJtCYmW96K78xixTL3mqsrJPA8ncIgdxc3TnLyzreeAs2%2F3011bCRbJB4yszcZcpu6FTu1z89GlE3m5o8hpSpXbO9dF0Ib3%2Bl2N3rQjHW9i%2B10PT9I9%2FIybLpvUqTqkHbqwdmnvMIS591CJOsE5O7CAuaENwwtXXksqB2IcTQcShUJ3x2y5dhYLnthgFGABmPdKzOWr49%2FfV5p%2BV2%2BioeVf5BcaNI72zk6yMe%2BQAces%2Fxn2xu6oxYNDDof5%2FIV7EtkPFvoiAh56En5xokRIEQD2Gx62hT4XYHQzW590GyCKVbgM5vxVSKeS6MQCRnBEubhhdg3Av%2FD1hnTDUE%2FVqYSYUOimwLpUDhMM7ZysMGOqUBDVrTdVYKdhBE%2FkPJltDtXItlimS931%2B%2BUcO5UwJm03DX6pCYU%2FHkTVlA4kVEbaXtML2PyxbekPasefwwj4YNnnNYnEGK95cqcuuAhjhM6pxv%2BsTb2mKXahhX7AksrQsI1WJzpc9oVIGQFS1NMnaq0D31YtnzqSnj3FlvFX28NxpUoK11bhu2LtGP5Po%2FxmcmNjJVs3LA2BqRShIfC%2B5pUm%2F48hGI&X-Amz-Signature=76355a22a7af287a0115926d78603c16d4c4e7e2f15e0251ce24dd869ce47ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF44HXH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F0xpJhTs%2ByVvydbF85ED%2FhbFcI0OSx0pmw1jPlalmHAiEA63Yh5O8aGsQ0ZM5acUScGceRgaB4pdThC4Dfd2%2FjgZwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBbPdwNz5%2FMu3aZpSrcA3Kh5V7p6tboy1tDEb0NDaksrWeQztbiG6aUbzjNptDpfjP%2FktNr99B6QfWxldjIXZzzBg0SCq7lLNF6d8PdHao%2FNG5GcrABH1TiFGSGyWznEmI%2Fu5AuGPCay5s%2B58Pxjh6YTTr%2FbLjIc2zi7nmstXO7%2Bq21c6N3m2bsbOCnY1pXTwfXgtfnh276LWb1lmCbDH0NmIVsBzcWqUixXOhu4hE001pW%2BKc1mqvM9rCNRoETiy%2BX3bPS3HeTUo9Lb2ULGI1Lwd2guREMHQYdUooMxaDD%2FjpGJtCYmW96K78xixTL3mqsrJPA8ncIgdxc3TnLyzreeAs2%2F3011bCRbJB4yszcZcpu6FTu1z89GlE3m5o8hpSpXbO9dF0Ib3%2Bl2N3rQjHW9i%2B10PT9I9%2FIybLpvUqTqkHbqwdmnvMIS591CJOsE5O7CAuaENwwtXXksqB2IcTQcShUJ3x2y5dhYLnthgFGABmPdKzOWr49%2FfV5p%2BV2%2BioeVf5BcaNI72zk6yMe%2BQAces%2Fxn2xu6oxYNDDof5%2FIV7EtkPFvoiAh56En5xokRIEQD2Gx62hT4XYHQzW590GyCKVbgM5vxVSKeS6MQCRnBEubhhdg3Av%2FD1hnTDUE%2FVqYSYUOimwLpUDhMM7ZysMGOqUBDVrTdVYKdhBE%2FkPJltDtXItlimS931%2B%2BUcO5UwJm03DX6pCYU%2FHkTVlA4kVEbaXtML2PyxbekPasefwwj4YNnnNYnEGK95cqcuuAhjhM6pxv%2BsTb2mKXahhX7AksrQsI1WJzpc9oVIGQFS1NMnaq0D31YtnzqSnj3FlvFX28NxpUoK11bhu2LtGP5Po%2FxmcmNjJVs3LA2BqRShIfC%2B5pUm%2F48hGI&X-Amz-Signature=7fc2b6d4c13b219607f4da59d382f2209accca0e78314895943364bb60a7a221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF44HXH4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F0xpJhTs%2ByVvydbF85ED%2FhbFcI0OSx0pmw1jPlalmHAiEA63Yh5O8aGsQ0ZM5acUScGceRgaB4pdThC4Dfd2%2FjgZwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBbPdwNz5%2FMu3aZpSrcA3Kh5V7p6tboy1tDEb0NDaksrWeQztbiG6aUbzjNptDpfjP%2FktNr99B6QfWxldjIXZzzBg0SCq7lLNF6d8PdHao%2FNG5GcrABH1TiFGSGyWznEmI%2Fu5AuGPCay5s%2B58Pxjh6YTTr%2FbLjIc2zi7nmstXO7%2Bq21c6N3m2bsbOCnY1pXTwfXgtfnh276LWb1lmCbDH0NmIVsBzcWqUixXOhu4hE001pW%2BKc1mqvM9rCNRoETiy%2BX3bPS3HeTUo9Lb2ULGI1Lwd2guREMHQYdUooMxaDD%2FjpGJtCYmW96K78xixTL3mqsrJPA8ncIgdxc3TnLyzreeAs2%2F3011bCRbJB4yszcZcpu6FTu1z89GlE3m5o8hpSpXbO9dF0Ib3%2Bl2N3rQjHW9i%2B10PT9I9%2FIybLpvUqTqkHbqwdmnvMIS591CJOsE5O7CAuaENwwtXXksqB2IcTQcShUJ3x2y5dhYLnthgFGABmPdKzOWr49%2FfV5p%2BV2%2BioeVf5BcaNI72zk6yMe%2BQAces%2Fxn2xu6oxYNDDof5%2FIV7EtkPFvoiAh56En5xokRIEQD2Gx62hT4XYHQzW590GyCKVbgM5vxVSKeS6MQCRnBEubhhdg3Av%2FD1hnTDUE%2FVqYSYUOimwLpUDhMM7ZysMGOqUBDVrTdVYKdhBE%2FkPJltDtXItlimS931%2B%2BUcO5UwJm03DX6pCYU%2FHkTVlA4kVEbaXtML2PyxbekPasefwwj4YNnnNYnEGK95cqcuuAhjhM6pxv%2BsTb2mKXahhX7AksrQsI1WJzpc9oVIGQFS1NMnaq0D31YtnzqSnj3FlvFX28NxpUoK11bhu2LtGP5Po%2FxmcmNjJVs3LA2BqRShIfC%2B5pUm%2F48hGI&X-Amz-Signature=e4ca06e5de8f02d55e0a1b4b2e096c77c6d54bc25fcac96862ea107947416572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
