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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSJBHPA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIDR5DukaexGWLasazE3tETIEMEY8rpI1wYIaxOjDd1CvAiAMsebZGyNa%2FVNZj8LtS1zoVGDnHi3uD2ScCYS4A10gaCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMztyvVrHut7nHZ%2BenKtwDF2p7Ln9%2FrIruKTWl5IzM3tTNbCTNlUAUKrAXzrC%2FZtLNlX9R5jqrJRSU5sIjK44AHsHsB%2B62E3jM2H4GffKtWlLpmE%2FL%2B%2BI%2FPlOKsyedEppPdIO6v%2Fvk2l3MxgZiNXgayzvwkcHTnFa8TEYlg7cne1r0v76LnnK5q1E6smHMKmNHMZblG%2BKzuWGoS4wQjJHkXs%2ByIMB7NgGDZKlHm0Eo1UA4RJS2pyR8sNm75L703B0%2BK35ZgLNXCfWZ2QDeexIKvur30CEt%2Fe6n9RIRNplpJ8cSesr6lFGmKF6hAiApSycJ6aKdH5VzTiLUUHTTndn9x2aDXYy2XWpoprSkTJiCqKYsOQs5%2FpoKx2pFug2aj6vdUSk05IEBhdOcOqGj0FnBy%2BbNzSs3sjBp8lhJMB6OVAASrfryGJ8%2F%2BDEEc%2BF9CKwxoiutdZcviZtcgvAzFexpETV9VkgRHgiPySF1yigh1N1nUil3XVXEhwcdwB5Npfa7wxETHUE%2F0QbHTw1VwaxYSFcMCFAuBAkk3qXLFsGTgWNK51SdbTf9xxhSLVD7%2FNmTTvhyz4lzwkeXy%2BaI0%2FaRxl5xWXOmaxb2NATPd7KFNGXU9HFfIABr%2Fyy6VzYRXeDnOGVSmHUWTQC3j6Uwn%2FnpwgY6pgF%2FOfMOhV9b9BQ%2F7LS63TFkGe%2BnsAbzsjTW8V4SIoAZ%2FB6kfdRMnfGBYKfXqJ0WcfYiRBuwVnTYzABdewV5tACwtcOybDq2XXRFnKS05w6xsWLdYb8EABCJtSCV6nDKWmFZOOT8hS81F7XCDS1WTfeA5V9KI2rladMarmmYi0vrM%2BN25%2F4KtmeQAWHXUi%2FTxEHMBYNSUSsvVe1feZW%2BfwdkgBizRhKp&X-Amz-Signature=d929256a3cc53ae6e2b38d06d1c4e121251e23b167d27bcc53a5786996bee675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSJBHPA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIDR5DukaexGWLasazE3tETIEMEY8rpI1wYIaxOjDd1CvAiAMsebZGyNa%2FVNZj8LtS1zoVGDnHi3uD2ScCYS4A10gaCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMztyvVrHut7nHZ%2BenKtwDF2p7Ln9%2FrIruKTWl5IzM3tTNbCTNlUAUKrAXzrC%2FZtLNlX9R5jqrJRSU5sIjK44AHsHsB%2B62E3jM2H4GffKtWlLpmE%2FL%2B%2BI%2FPlOKsyedEppPdIO6v%2Fvk2l3MxgZiNXgayzvwkcHTnFa8TEYlg7cne1r0v76LnnK5q1E6smHMKmNHMZblG%2BKzuWGoS4wQjJHkXs%2ByIMB7NgGDZKlHm0Eo1UA4RJS2pyR8sNm75L703B0%2BK35ZgLNXCfWZ2QDeexIKvur30CEt%2Fe6n9RIRNplpJ8cSesr6lFGmKF6hAiApSycJ6aKdH5VzTiLUUHTTndn9x2aDXYy2XWpoprSkTJiCqKYsOQs5%2FpoKx2pFug2aj6vdUSk05IEBhdOcOqGj0FnBy%2BbNzSs3sjBp8lhJMB6OVAASrfryGJ8%2F%2BDEEc%2BF9CKwxoiutdZcviZtcgvAzFexpETV9VkgRHgiPySF1yigh1N1nUil3XVXEhwcdwB5Npfa7wxETHUE%2F0QbHTw1VwaxYSFcMCFAuBAkk3qXLFsGTgWNK51SdbTf9xxhSLVD7%2FNmTTvhyz4lzwkeXy%2BaI0%2FaRxl5xWXOmaxb2NATPd7KFNGXU9HFfIABr%2Fyy6VzYRXeDnOGVSmHUWTQC3j6Uwn%2FnpwgY6pgF%2FOfMOhV9b9BQ%2F7LS63TFkGe%2BnsAbzsjTW8V4SIoAZ%2FB6kfdRMnfGBYKfXqJ0WcfYiRBuwVnTYzABdewV5tACwtcOybDq2XXRFnKS05w6xsWLdYb8EABCJtSCV6nDKWmFZOOT8hS81F7XCDS1WTfeA5V9KI2rladMarmmYi0vrM%2BN25%2F4KtmeQAWHXUi%2FTxEHMBYNSUSsvVe1feZW%2BfwdkgBizRhKp&X-Amz-Signature=2ad5c13051b543a14dd3875b8100f2e6bcc77a703f58c2bbcaedf2823e34b9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSJBHPA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIDR5DukaexGWLasazE3tETIEMEY8rpI1wYIaxOjDd1CvAiAMsebZGyNa%2FVNZj8LtS1zoVGDnHi3uD2ScCYS4A10gaCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMztyvVrHut7nHZ%2BenKtwDF2p7Ln9%2FrIruKTWl5IzM3tTNbCTNlUAUKrAXzrC%2FZtLNlX9R5jqrJRSU5sIjK44AHsHsB%2B62E3jM2H4GffKtWlLpmE%2FL%2B%2BI%2FPlOKsyedEppPdIO6v%2Fvk2l3MxgZiNXgayzvwkcHTnFa8TEYlg7cne1r0v76LnnK5q1E6smHMKmNHMZblG%2BKzuWGoS4wQjJHkXs%2ByIMB7NgGDZKlHm0Eo1UA4RJS2pyR8sNm75L703B0%2BK35ZgLNXCfWZ2QDeexIKvur30CEt%2Fe6n9RIRNplpJ8cSesr6lFGmKF6hAiApSycJ6aKdH5VzTiLUUHTTndn9x2aDXYy2XWpoprSkTJiCqKYsOQs5%2FpoKx2pFug2aj6vdUSk05IEBhdOcOqGj0FnBy%2BbNzSs3sjBp8lhJMB6OVAASrfryGJ8%2F%2BDEEc%2BF9CKwxoiutdZcviZtcgvAzFexpETV9VkgRHgiPySF1yigh1N1nUil3XVXEhwcdwB5Npfa7wxETHUE%2F0QbHTw1VwaxYSFcMCFAuBAkk3qXLFsGTgWNK51SdbTf9xxhSLVD7%2FNmTTvhyz4lzwkeXy%2BaI0%2FaRxl5xWXOmaxb2NATPd7KFNGXU9HFfIABr%2Fyy6VzYRXeDnOGVSmHUWTQC3j6Uwn%2FnpwgY6pgF%2FOfMOhV9b9BQ%2F7LS63TFkGe%2BnsAbzsjTW8V4SIoAZ%2FB6kfdRMnfGBYKfXqJ0WcfYiRBuwVnTYzABdewV5tACwtcOybDq2XXRFnKS05w6xsWLdYb8EABCJtSCV6nDKWmFZOOT8hS81F7XCDS1WTfeA5V9KI2rladMarmmYi0vrM%2BN25%2F4KtmeQAWHXUi%2FTxEHMBYNSUSsvVe1feZW%2BfwdkgBizRhKp&X-Amz-Signature=36a59daf25002232bab2edf0d50042175f8c1acccb6123c288fa17d697886a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
