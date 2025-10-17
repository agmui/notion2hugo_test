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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKJYYEII%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL1F3OJ%2FNqZBPJNs5c2KrMkA29O%2BslogXI%2Bq7i9rUgBAiEA7UU6xXz8UVGVIjIDoCjuMVKBvaA3G9Vnre0tUoUa5MYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1ofuznJGjDE2l%2BoSrcA%2BuZd3l5TZAdMT1N7AcF%2FGmJAc6qL4MxHek4VzQQYYnOn4xO3QaLKJtgkwipkGkcDoK%2File1zjscE0ghNEimxvigMAIa0%2BM6n%2FnNDH0UHB0DTa9ei1dKcEBMQRtrJp%2FDvgJ6yFnnnjo%2FAw5OfZbb5UgaKkP%2F75oy8xDfakIWsYpZ64TL1LHVtHtPelBPix%2BJQQ%2BSh2IJoZRb6mn52vbNv5Co01vnh1a4ai4d74XNtmyag0AkO0ouNrvIAh7cNXCMPceSdd6T09qq5mYf%2FCIuzn9utXsJiKYN5w0q8ItMMS8Fijhwmz2ODzc8qhy8nzpa2c4MQ8OlputkNuwRxZlqFdVLKJqIgH7Q46SMJv141%2F1Q3593gFVjoqcB3fujCA2ZeGmCB%2B5qLpk0TlPMZX%2B6s6NFrZUkIPpCnuz5LM92CMs6BWro35csGGq1%2B6YR12NQMaR2ClD%2BvSk9wYGAoVbbnNQMuRok0M2kYsbVejxgNMjKXo5YZjhOvr5bTX7%2BhTmCZqvLBobbEd81If6AkeywsNC73opojltemKd6s%2FQ5vvzn%2F9Ur2fiart0MSqQmpmbK4VkV3mjzkPYZFADxESd6M2sE1wm4gcojfMqvjupnFlArpm6LA3MsT%2B140ApCMPuPxscGOqUBT6ygqOTS9jSsWdcM33hDCcMV1FxIREfcybZ%2FCQ%2FVr7TbYGPhrbl9%2F3ldbhU0k7f%2Bs660vEenpe3V8Q%2FWwl%2B9QsgRgMGmPYgOViHNa9yInR0TXAW536cD9fe%2FmHFs8g%2Bi%2B%2BUpXhpl0T2GWvhU%2F%2F9uU8aXOLX8Wd87rOAA%2FDrA%2BKkDRCBQBb1dwaE6FI1U5KS3QhwoxzZ2YZwjle%2FPsXAj0UhnYhPr&X-Amz-Signature=390980ba4f91b547976bd7fd152715b19ea0df9da6496130c83ce6fce62b3c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKJYYEII%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL1F3OJ%2FNqZBPJNs5c2KrMkA29O%2BslogXI%2Bq7i9rUgBAiEA7UU6xXz8UVGVIjIDoCjuMVKBvaA3G9Vnre0tUoUa5MYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1ofuznJGjDE2l%2BoSrcA%2BuZd3l5TZAdMT1N7AcF%2FGmJAc6qL4MxHek4VzQQYYnOn4xO3QaLKJtgkwipkGkcDoK%2File1zjscE0ghNEimxvigMAIa0%2BM6n%2FnNDH0UHB0DTa9ei1dKcEBMQRtrJp%2FDvgJ6yFnnnjo%2FAw5OfZbb5UgaKkP%2F75oy8xDfakIWsYpZ64TL1LHVtHtPelBPix%2BJQQ%2BSh2IJoZRb6mn52vbNv5Co01vnh1a4ai4d74XNtmyag0AkO0ouNrvIAh7cNXCMPceSdd6T09qq5mYf%2FCIuzn9utXsJiKYN5w0q8ItMMS8Fijhwmz2ODzc8qhy8nzpa2c4MQ8OlputkNuwRxZlqFdVLKJqIgH7Q46SMJv141%2F1Q3593gFVjoqcB3fujCA2ZeGmCB%2B5qLpk0TlPMZX%2B6s6NFrZUkIPpCnuz5LM92CMs6BWro35csGGq1%2B6YR12NQMaR2ClD%2BvSk9wYGAoVbbnNQMuRok0M2kYsbVejxgNMjKXo5YZjhOvr5bTX7%2BhTmCZqvLBobbEd81If6AkeywsNC73opojltemKd6s%2FQ5vvzn%2F9Ur2fiart0MSqQmpmbK4VkV3mjzkPYZFADxESd6M2sE1wm4gcojfMqvjupnFlArpm6LA3MsT%2B140ApCMPuPxscGOqUBT6ygqOTS9jSsWdcM33hDCcMV1FxIREfcybZ%2FCQ%2FVr7TbYGPhrbl9%2F3ldbhU0k7f%2Bs660vEenpe3V8Q%2FWwl%2B9QsgRgMGmPYgOViHNa9yInR0TXAW536cD9fe%2FmHFs8g%2Bi%2B%2BUpXhpl0T2GWvhU%2F%2F9uU8aXOLX8Wd87rOAA%2FDrA%2BKkDRCBQBb1dwaE6FI1U5KS3QhwoxzZ2YZwjle%2FPsXAj0UhnYhPr&X-Amz-Signature=c8db0a42f07ca7c94928eac0bbe37ee2cc4d134d6dd577fc8e912a5ee980bd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKJYYEII%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL1F3OJ%2FNqZBPJNs5c2KrMkA29O%2BslogXI%2Bq7i9rUgBAiEA7UU6xXz8UVGVIjIDoCjuMVKBvaA3G9Vnre0tUoUa5MYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1ofuznJGjDE2l%2BoSrcA%2BuZd3l5TZAdMT1N7AcF%2FGmJAc6qL4MxHek4VzQQYYnOn4xO3QaLKJtgkwipkGkcDoK%2File1zjscE0ghNEimxvigMAIa0%2BM6n%2FnNDH0UHB0DTa9ei1dKcEBMQRtrJp%2FDvgJ6yFnnnjo%2FAw5OfZbb5UgaKkP%2F75oy8xDfakIWsYpZ64TL1LHVtHtPelBPix%2BJQQ%2BSh2IJoZRb6mn52vbNv5Co01vnh1a4ai4d74XNtmyag0AkO0ouNrvIAh7cNXCMPceSdd6T09qq5mYf%2FCIuzn9utXsJiKYN5w0q8ItMMS8Fijhwmz2ODzc8qhy8nzpa2c4MQ8OlputkNuwRxZlqFdVLKJqIgH7Q46SMJv141%2F1Q3593gFVjoqcB3fujCA2ZeGmCB%2B5qLpk0TlPMZX%2B6s6NFrZUkIPpCnuz5LM92CMs6BWro35csGGq1%2B6YR12NQMaR2ClD%2BvSk9wYGAoVbbnNQMuRok0M2kYsbVejxgNMjKXo5YZjhOvr5bTX7%2BhTmCZqvLBobbEd81If6AkeywsNC73opojltemKd6s%2FQ5vvzn%2F9Ur2fiart0MSqQmpmbK4VkV3mjzkPYZFADxESd6M2sE1wm4gcojfMqvjupnFlArpm6LA3MsT%2B140ApCMPuPxscGOqUBT6ygqOTS9jSsWdcM33hDCcMV1FxIREfcybZ%2FCQ%2FVr7TbYGPhrbl9%2F3ldbhU0k7f%2Bs660vEenpe3V8Q%2FWwl%2B9QsgRgMGmPYgOViHNa9yInR0TXAW536cD9fe%2FmHFs8g%2Bi%2B%2BUpXhpl0T2GWvhU%2F%2F9uU8aXOLX8Wd87rOAA%2FDrA%2BKkDRCBQBb1dwaE6FI1U5KS3QhwoxzZ2YZwjle%2FPsXAj0UhnYhPr&X-Amz-Signature=a551ddc2b905ad9f1a1243e17e8ff3ae6973bb3c3683ef1b45bf91303c4e857b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
