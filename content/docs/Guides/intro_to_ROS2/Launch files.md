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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN4BPML6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ84fvZMg21uA6978AKKEQgsNi1NZtvthv1Dye3zLgyQIgChX6j%2BzHTlZO6E8xr5Nb%2FQesBd4udNLhtRy%2BMriu9w4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCuCvd619Ddz0OoUyrcAxaeyfbBksKPaf4%2FJcF%2F22lW4KJMlJ642MY89tled6oyJ%2BENXtqocfDO3tbBS8ta2eOoEozpx41r3nu4p8%2BhaMv0ao6z2Mymbk7hokcYaesaKNXIZUns9zgERrpe6I1vx9u9sbIbufx8wll2OAqWuSYO0s6DVDtH3h1XuekEGT8EJmJCvZgdcYF8zV%2B9dus4cs%2B7PeauJVIyB0p38TU1dBcmLzABuFRb7JwviN1BLDYvbvpLYT2CZqG6DC%2FUc6xrdNoY44XjmDXBdLhd7r8rWke24xW4%2BE547v8qD%2FKNJO9Aml7VoK44XFP12E6IcYqipAALhuEGWXqh4bOAQSdaePcNwx0KRdqTcOezkcY%2BNAWm3zj0ScCbIEiHEM8Gmz%2F9hS1yN5WH3O590FevYQP%2Fev2ew%2B3KnKJYE0iLk%2BLfCBE0tRN4yORxyz1GO9oaEwEh2yh2bGsrWghfRpisxFAasC5%2FWTQvGmo8N4ZOyiTyWdtVyLwHkOqLPOQqJBj%2BuwboE6Ia5Nfvv%2FV5Gi%2FRRlnFVTuwdXCH3wfMxXnYymYudmbGxBTBMiaQuu%2F%2BkaBeXxGMUV%2BC418AbYO5q%2FgNyGrgS%2BUwSNEILsV%2FsBDV0IDw2WXxwrJ33fQy%2FD8nRpX4MPry58QGOqUBtrYKoNwz6SbzoLso5TIlN4bmd%2B%2B9mxfb8zW%2FImCCpPiGivyCEMQEISHvLR7usCbGSOjvup1rJbiQqRY2gMryx4NedwkyMuGpCbUSptcE2I6bvi%2BynoS8s%2BdxJJyyMXvfv1koECBl1T%2BAsgGPgqX%2BHQDBFWJjOibZclu9F%2BV4Ww5T6pSYMtU92QjIaHlppDH3Au07qvgEhr8OiK7EPjeHVOtxR86T&X-Amz-Signature=3efedd14cb146aa1ac93fcf36ed618506a23bdadaf70112a5f7e4f0af3a518c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN4BPML6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ84fvZMg21uA6978AKKEQgsNi1NZtvthv1Dye3zLgyQIgChX6j%2BzHTlZO6E8xr5Nb%2FQesBd4udNLhtRy%2BMriu9w4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCuCvd619Ddz0OoUyrcAxaeyfbBksKPaf4%2FJcF%2F22lW4KJMlJ642MY89tled6oyJ%2BENXtqocfDO3tbBS8ta2eOoEozpx41r3nu4p8%2BhaMv0ao6z2Mymbk7hokcYaesaKNXIZUns9zgERrpe6I1vx9u9sbIbufx8wll2OAqWuSYO0s6DVDtH3h1XuekEGT8EJmJCvZgdcYF8zV%2B9dus4cs%2B7PeauJVIyB0p38TU1dBcmLzABuFRb7JwviN1BLDYvbvpLYT2CZqG6DC%2FUc6xrdNoY44XjmDXBdLhd7r8rWke24xW4%2BE547v8qD%2FKNJO9Aml7VoK44XFP12E6IcYqipAALhuEGWXqh4bOAQSdaePcNwx0KRdqTcOezkcY%2BNAWm3zj0ScCbIEiHEM8Gmz%2F9hS1yN5WH3O590FevYQP%2Fev2ew%2B3KnKJYE0iLk%2BLfCBE0tRN4yORxyz1GO9oaEwEh2yh2bGsrWghfRpisxFAasC5%2FWTQvGmo8N4ZOyiTyWdtVyLwHkOqLPOQqJBj%2BuwboE6Ia5Nfvv%2FV5Gi%2FRRlnFVTuwdXCH3wfMxXnYymYudmbGxBTBMiaQuu%2F%2BkaBeXxGMUV%2BC418AbYO5q%2FgNyGrgS%2BUwSNEILsV%2FsBDV0IDw2WXxwrJ33fQy%2FD8nRpX4MPry58QGOqUBtrYKoNwz6SbzoLso5TIlN4bmd%2B%2B9mxfb8zW%2FImCCpPiGivyCEMQEISHvLR7usCbGSOjvup1rJbiQqRY2gMryx4NedwkyMuGpCbUSptcE2I6bvi%2BynoS8s%2BdxJJyyMXvfv1koECBl1T%2BAsgGPgqX%2BHQDBFWJjOibZclu9F%2BV4Ww5T6pSYMtU92QjIaHlppDH3Au07qvgEhr8OiK7EPjeHVOtxR86T&X-Amz-Signature=1197bf42bffa9c6750d7a8be2c0c73da18fde68d14dc0074b8526412b194c1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN4BPML6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ84fvZMg21uA6978AKKEQgsNi1NZtvthv1Dye3zLgyQIgChX6j%2BzHTlZO6E8xr5Nb%2FQesBd4udNLhtRy%2BMriu9w4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCuCvd619Ddz0OoUyrcAxaeyfbBksKPaf4%2FJcF%2F22lW4KJMlJ642MY89tled6oyJ%2BENXtqocfDO3tbBS8ta2eOoEozpx41r3nu4p8%2BhaMv0ao6z2Mymbk7hokcYaesaKNXIZUns9zgERrpe6I1vx9u9sbIbufx8wll2OAqWuSYO0s6DVDtH3h1XuekEGT8EJmJCvZgdcYF8zV%2B9dus4cs%2B7PeauJVIyB0p38TU1dBcmLzABuFRb7JwviN1BLDYvbvpLYT2CZqG6DC%2FUc6xrdNoY44XjmDXBdLhd7r8rWke24xW4%2BE547v8qD%2FKNJO9Aml7VoK44XFP12E6IcYqipAALhuEGWXqh4bOAQSdaePcNwx0KRdqTcOezkcY%2BNAWm3zj0ScCbIEiHEM8Gmz%2F9hS1yN5WH3O590FevYQP%2Fev2ew%2B3KnKJYE0iLk%2BLfCBE0tRN4yORxyz1GO9oaEwEh2yh2bGsrWghfRpisxFAasC5%2FWTQvGmo8N4ZOyiTyWdtVyLwHkOqLPOQqJBj%2BuwboE6Ia5Nfvv%2FV5Gi%2FRRlnFVTuwdXCH3wfMxXnYymYudmbGxBTBMiaQuu%2F%2BkaBeXxGMUV%2BC418AbYO5q%2FgNyGrgS%2BUwSNEILsV%2FsBDV0IDw2WXxwrJ33fQy%2FD8nRpX4MPry58QGOqUBtrYKoNwz6SbzoLso5TIlN4bmd%2B%2B9mxfb8zW%2FImCCpPiGivyCEMQEISHvLR7usCbGSOjvup1rJbiQqRY2gMryx4NedwkyMuGpCbUSptcE2I6bvi%2BynoS8s%2BdxJJyyMXvfv1koECBl1T%2BAsgGPgqX%2BHQDBFWJjOibZclu9F%2BV4Ww5T6pSYMtU92QjIaHlppDH3Au07qvgEhr8OiK7EPjeHVOtxR86T&X-Amz-Signature=b9bde0ed283c6b2660945be0269a1e3700b83321ce72989be24c0641feaf0150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
