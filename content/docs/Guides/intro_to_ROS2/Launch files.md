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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT23T33T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDTYR6%2BoS4iVs5kcU%2BOhONM%2FX3P%2FnOOqtamyJce7fL0fQIgHMnqkLN4BEa01DugPp45ZVtPk8sBBlTen66Dzq405hoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMqhsgT5HeiTKBliyrcA9DyJd1DnL21S0EHxi1N8G3d2w%2F0n0QnduX9LXIoWawyXb7%2BWzZuQPEnVZdBnJF5oOm4pAJ5%2BvorqiX2JqZwtD3bqHJp0MGc3BdyWsD42LqzVS%2BY2%2FRwXNIPjbpye9LI3bqrRSQZGhO3BE1C364TDmvmuschOrx8p%2BzUPwgtP%2FZTGthgs8kbl0O8IV4kD5OSDH8lFgq6wk0C91C7JlC5m0WKMU2BKonoP18gXNFS2BX8XRd2dVzafeXeCs2zJQVB4o6tU3BfoTJhoIBXifKJppEz8QOu0p7L9knD%2BxTQRoybwzHCfXMoQAkBZfrdRRVa54ow3syrDFLWE1UmcBhfGosG2qEBQ8Y8PboE%2FzyzIlJMvPxaZCT%2BhT%2BwypN9ejFhhER3uyllc%2FsZZMx52VoRP%2FFrUZnxZ0%2FoUxSWqJMXw%2BT9%2F5B%2B9JsK5dywLonVJs%2F4H6tg2BOCB%2B371yjvB7UBQCP8r%2B%2Fn85J7SlM6Ly0Za6uQ0VCss7wYqeu0IycSQsk7GeyCTXq22Phg75gE1IRXH7xj6iYHvOnrIDqxt3qwK8yS0LahIraNuy6HoNRQZYdXEZ8Ma5W0yHIvtZqGIneu7Gum9zM69Mh98pNkX%2FA5dDffxrlPhFbWR%2BfL8AP1MMPQ2sQGOqUBcUf6g0JTMwCCubbPJSFp%2F2geXwJZkwCB0csM0r7teZRfaUkCVcnO3MSOY0yGMWUGIRfi6sT6enhGrbx%2FGXa5GaQC0plxkqhwew1tHkDNjyO1RArD588NNu%2BOR9ym2id4njpXELu4kv5%2BVSee6Lp4doymUiy4mRl064gHR27FkqKui39aRH26eDMgmDNmMzw%2BsAIzPTcwd6D2zIWWGb7ZqyUtM32d&X-Amz-Signature=c91f8abb9de5a73f7076d439de03ca9d32334d4dbbb4742a5e1774b33083033f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT23T33T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDTYR6%2BoS4iVs5kcU%2BOhONM%2FX3P%2FnOOqtamyJce7fL0fQIgHMnqkLN4BEa01DugPp45ZVtPk8sBBlTen66Dzq405hoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMqhsgT5HeiTKBliyrcA9DyJd1DnL21S0EHxi1N8G3d2w%2F0n0QnduX9LXIoWawyXb7%2BWzZuQPEnVZdBnJF5oOm4pAJ5%2BvorqiX2JqZwtD3bqHJp0MGc3BdyWsD42LqzVS%2BY2%2FRwXNIPjbpye9LI3bqrRSQZGhO3BE1C364TDmvmuschOrx8p%2BzUPwgtP%2FZTGthgs8kbl0O8IV4kD5OSDH8lFgq6wk0C91C7JlC5m0WKMU2BKonoP18gXNFS2BX8XRd2dVzafeXeCs2zJQVB4o6tU3BfoTJhoIBXifKJppEz8QOu0p7L9knD%2BxTQRoybwzHCfXMoQAkBZfrdRRVa54ow3syrDFLWE1UmcBhfGosG2qEBQ8Y8PboE%2FzyzIlJMvPxaZCT%2BhT%2BwypN9ejFhhER3uyllc%2FsZZMx52VoRP%2FFrUZnxZ0%2FoUxSWqJMXw%2BT9%2F5B%2B9JsK5dywLonVJs%2F4H6tg2BOCB%2B371yjvB7UBQCP8r%2B%2Fn85J7SlM6Ly0Za6uQ0VCss7wYqeu0IycSQsk7GeyCTXq22Phg75gE1IRXH7xj6iYHvOnrIDqxt3qwK8yS0LahIraNuy6HoNRQZYdXEZ8Ma5W0yHIvtZqGIneu7Gum9zM69Mh98pNkX%2FA5dDffxrlPhFbWR%2BfL8AP1MMPQ2sQGOqUBcUf6g0JTMwCCubbPJSFp%2F2geXwJZkwCB0csM0r7teZRfaUkCVcnO3MSOY0yGMWUGIRfi6sT6enhGrbx%2FGXa5GaQC0plxkqhwew1tHkDNjyO1RArD588NNu%2BOR9ym2id4njpXELu4kv5%2BVSee6Lp4doymUiy4mRl064gHR27FkqKui39aRH26eDMgmDNmMzw%2BsAIzPTcwd6D2zIWWGb7ZqyUtM32d&X-Amz-Signature=bc244814cadd9c4257f9d02d0082523f434115d77ee537292379c0ff42d263a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT23T33T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDTYR6%2BoS4iVs5kcU%2BOhONM%2FX3P%2FnOOqtamyJce7fL0fQIgHMnqkLN4BEa01DugPp45ZVtPk8sBBlTen66Dzq405hoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMqhsgT5HeiTKBliyrcA9DyJd1DnL21S0EHxi1N8G3d2w%2F0n0QnduX9LXIoWawyXb7%2BWzZuQPEnVZdBnJF5oOm4pAJ5%2BvorqiX2JqZwtD3bqHJp0MGc3BdyWsD42LqzVS%2BY2%2FRwXNIPjbpye9LI3bqrRSQZGhO3BE1C364TDmvmuschOrx8p%2BzUPwgtP%2FZTGthgs8kbl0O8IV4kD5OSDH8lFgq6wk0C91C7JlC5m0WKMU2BKonoP18gXNFS2BX8XRd2dVzafeXeCs2zJQVB4o6tU3BfoTJhoIBXifKJppEz8QOu0p7L9knD%2BxTQRoybwzHCfXMoQAkBZfrdRRVa54ow3syrDFLWE1UmcBhfGosG2qEBQ8Y8PboE%2FzyzIlJMvPxaZCT%2BhT%2BwypN9ejFhhER3uyllc%2FsZZMx52VoRP%2FFrUZnxZ0%2FoUxSWqJMXw%2BT9%2F5B%2B9JsK5dywLonVJs%2F4H6tg2BOCB%2B371yjvB7UBQCP8r%2B%2Fn85J7SlM6Ly0Za6uQ0VCss7wYqeu0IycSQsk7GeyCTXq22Phg75gE1IRXH7xj6iYHvOnrIDqxt3qwK8yS0LahIraNuy6HoNRQZYdXEZ8Ma5W0yHIvtZqGIneu7Gum9zM69Mh98pNkX%2FA5dDffxrlPhFbWR%2BfL8AP1MMPQ2sQGOqUBcUf6g0JTMwCCubbPJSFp%2F2geXwJZkwCB0csM0r7teZRfaUkCVcnO3MSOY0yGMWUGIRfi6sT6enhGrbx%2FGXa5GaQC0plxkqhwew1tHkDNjyO1RArD588NNu%2BOR9ym2id4njpXELu4kv5%2BVSee6Lp4doymUiy4mRl064gHR27FkqKui39aRH26eDMgmDNmMzw%2BsAIzPTcwd6D2zIWWGb7ZqyUtM32d&X-Amz-Signature=dd686fc2c6275df8db74a50fdcaa6dcbf1d721a51a459e7080cc7ba6df4dcfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
