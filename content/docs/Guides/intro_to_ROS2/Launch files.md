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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636MDPPC7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDk4umhNnZrzZe4TykfGEgT3BTU03a7qbJqgDfm4CUIzAiEAyiR3C5c2%2BgVlh4blXcawmYNc7l%2FwmBP95pRmdvFQcrEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCmab0%2FtbbUUC0uUbircA05XJZTb%2BfjJ1crXt45eXbizjpBR74OSskdBBBAdkNFSf7WEgp9fOR8ydHXWaDbjagaRwmjlRyQVmcVyMTLHuHlv4vCCU57hB2H1%2FIPCmCzpSb4b1vU5LpjG2pSfhKDyi%2ByuGAKMVhpFxQG7F%2FpT6Dkdu3f701G8uCQs176uLFQOs9SYs88qh25wFjnhGEzl68hZ51T8cQMdRRgkUfqehIsHsDl6dBpVufjY43dtKkFZZQptm7jlHpLEUXyqUvP3GuXb6uTr7EaMzcOOEaDsKhUV4Mo6kL9xpuo%2BTCu5bddug5m6KBubFrDrrVAIQvycyo1QA5TxzwPmhwuo8MQXixX0PDwMunmzIT2Dca%2BIuMK8hBL255oSX7Gwbge1GBXO3MrISELlff73Zqe1Ig2WG5yXKrQhMZLXYoy2Tf0vH%2FGss%2BRTVt7eA2tIakCbYFOTHG94f0hXswDUkqX62hW5KWWcjaVd%2FIq5razYdBdIwaCyb6yp%2BbIUwPyYFWjBI6AdSubg4Y4Uoipj5008P6fIjm11MVvZCIk5GzkPcrwqphFvTUeveBx%2BiDShjPNnWFBrgPPgeLPFWOo9DWbi6qXeGuAO%2FoZWaPctl7JqlR9pT9F1oxf19rYUfK30%2BB6KMIar18MGOqUB%2FKK4BBb27gU%2FFd5deYuMBP0LUO7CJs8SoC%2FvL%2BstCH1y8gxciutOsRWzk561jPr0ku%2B07NgxI4E4ufzvxYW8ovDnY61wpzi4FOJs6K7LHGRZ1edCC6KwEyIq0XFNvv%2B%2FVf6t2HG06T1rhXae%2F3Erc9Fs0jJMRRSQvH%2F43uF55WQremXz0ssbPGlhpitnbMgz66AakLejOuXrGnnBd0rFdjRLNIyn&X-Amz-Signature=0c2d37c619ccfc1acc72e55d973c59baf8e96236e4ba23701d02b093943659b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636MDPPC7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDk4umhNnZrzZe4TykfGEgT3BTU03a7qbJqgDfm4CUIzAiEAyiR3C5c2%2BgVlh4blXcawmYNc7l%2FwmBP95pRmdvFQcrEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCmab0%2FtbbUUC0uUbircA05XJZTb%2BfjJ1crXt45eXbizjpBR74OSskdBBBAdkNFSf7WEgp9fOR8ydHXWaDbjagaRwmjlRyQVmcVyMTLHuHlv4vCCU57hB2H1%2FIPCmCzpSb4b1vU5LpjG2pSfhKDyi%2ByuGAKMVhpFxQG7F%2FpT6Dkdu3f701G8uCQs176uLFQOs9SYs88qh25wFjnhGEzl68hZ51T8cQMdRRgkUfqehIsHsDl6dBpVufjY43dtKkFZZQptm7jlHpLEUXyqUvP3GuXb6uTr7EaMzcOOEaDsKhUV4Mo6kL9xpuo%2BTCu5bddug5m6KBubFrDrrVAIQvycyo1QA5TxzwPmhwuo8MQXixX0PDwMunmzIT2Dca%2BIuMK8hBL255oSX7Gwbge1GBXO3MrISELlff73Zqe1Ig2WG5yXKrQhMZLXYoy2Tf0vH%2FGss%2BRTVt7eA2tIakCbYFOTHG94f0hXswDUkqX62hW5KWWcjaVd%2FIq5razYdBdIwaCyb6yp%2BbIUwPyYFWjBI6AdSubg4Y4Uoipj5008P6fIjm11MVvZCIk5GzkPcrwqphFvTUeveBx%2BiDShjPNnWFBrgPPgeLPFWOo9DWbi6qXeGuAO%2FoZWaPctl7JqlR9pT9F1oxf19rYUfK30%2BB6KMIar18MGOqUB%2FKK4BBb27gU%2FFd5deYuMBP0LUO7CJs8SoC%2FvL%2BstCH1y8gxciutOsRWzk561jPr0ku%2B07NgxI4E4ufzvxYW8ovDnY61wpzi4FOJs6K7LHGRZ1edCC6KwEyIq0XFNvv%2B%2FVf6t2HG06T1rhXae%2F3Erc9Fs0jJMRRSQvH%2F43uF55WQremXz0ssbPGlhpitnbMgz66AakLejOuXrGnnBd0rFdjRLNIyn&X-Amz-Signature=9f54de45427b45eb7de06f44ca2cba08a716376f910597cf313f309a60854c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636MDPPC7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDk4umhNnZrzZe4TykfGEgT3BTU03a7qbJqgDfm4CUIzAiEAyiR3C5c2%2BgVlh4blXcawmYNc7l%2FwmBP95pRmdvFQcrEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCmab0%2FtbbUUC0uUbircA05XJZTb%2BfjJ1crXt45eXbizjpBR74OSskdBBBAdkNFSf7WEgp9fOR8ydHXWaDbjagaRwmjlRyQVmcVyMTLHuHlv4vCCU57hB2H1%2FIPCmCzpSb4b1vU5LpjG2pSfhKDyi%2ByuGAKMVhpFxQG7F%2FpT6Dkdu3f701G8uCQs176uLFQOs9SYs88qh25wFjnhGEzl68hZ51T8cQMdRRgkUfqehIsHsDl6dBpVufjY43dtKkFZZQptm7jlHpLEUXyqUvP3GuXb6uTr7EaMzcOOEaDsKhUV4Mo6kL9xpuo%2BTCu5bddug5m6KBubFrDrrVAIQvycyo1QA5TxzwPmhwuo8MQXixX0PDwMunmzIT2Dca%2BIuMK8hBL255oSX7Gwbge1GBXO3MrISELlff73Zqe1Ig2WG5yXKrQhMZLXYoy2Tf0vH%2FGss%2BRTVt7eA2tIakCbYFOTHG94f0hXswDUkqX62hW5KWWcjaVd%2FIq5razYdBdIwaCyb6yp%2BbIUwPyYFWjBI6AdSubg4Y4Uoipj5008P6fIjm11MVvZCIk5GzkPcrwqphFvTUeveBx%2BiDShjPNnWFBrgPPgeLPFWOo9DWbi6qXeGuAO%2FoZWaPctl7JqlR9pT9F1oxf19rYUfK30%2BB6KMIar18MGOqUB%2FKK4BBb27gU%2FFd5deYuMBP0LUO7CJs8SoC%2FvL%2BstCH1y8gxciutOsRWzk561jPr0ku%2B07NgxI4E4ufzvxYW8ovDnY61wpzi4FOJs6K7LHGRZ1edCC6KwEyIq0XFNvv%2B%2FVf6t2HG06T1rhXae%2F3Erc9Fs0jJMRRSQvH%2F43uF55WQremXz0ssbPGlhpitnbMgz66AakLejOuXrGnnBd0rFdjRLNIyn&X-Amz-Signature=9d5bd3b533e21511104cec39fdec7d1b42f6e1c98bfede70cdf8e19987108d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
