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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAOYXHS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDryycie%2Fguq9FZDQHnY0WEwlJX7j9iFiWYzROWxVPnQwIgBz%2FbTnfHL%2B9nfxEHy%2FHE1RpsXhwxII10L337eAVcrlwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHLuAhWy9o%2FlzdwwdyrcA%2BdfXSa1Ba622rTFWnJG53zLC5LnH48dH%2BrYX55FaV1MtG7fNft2Tuem58hirERCQt18aBVBg4p1mNaZ4ToPgpadp2KZwC%2BROv0PXLMe9qlxohDlsFhB4Cz4xgUhPDhJbImYBgtuWQYOexzKp9NXoKt7r7Az2vSDxpwYjbdw%2FhU1Qd1%2FQdKJ1r04s8Xlj94G4p1m0k9zy8JxxxJBle1AWYWkHz%2B0rVfEEqG2Z39wEQCxVY2AqolhgLCloDzYplTG%2Fnfo%2F5JDa2XVbOWVFRtCIEstJaVhwkl4sNMjqpgkbDJroBINZrmRbXAW5SLn3KlDJr5scVGRlRC6o2XxlWAWXbd%2FrOu66mwLfQs6F%2B%2FFkrlZTOeY88OPSck2c42QAWoOBDNq35sMSgNagSQz6Cz0cpQZQQvQCBbu8BY409ZVlPAftdXD9X5FRZl5iJO1EayI6EBqkMWJUfMxaUNTzcVL5n98cLIgLUp30GWDyh4HLKem66PBfn7pdmh00Gm4jNYvXbyXXdSvEuV65xtsj%2FITZy31by49Yq5bkrEzj3vmw0hUV1uCbJJyUGvo4pFGMNaKTkrfufikMzL9aztjc2IGFcbmTS2hV0z8c%2FcYSvWYC40roLsFP4kXIqpfIwKFMP%2Bx88IGOqUBAxcX5fsbBVPDmowApTkz%2BaCS3hcsAKcXe0v0oEO%2BDGGkd%2BbqopoQE7dK4xoEf0VW0und%2Bg%2FJEDSlmnPOAp5%2F1xGMjI16bbcEt3POBMOTL0qmSlr3Ax4lvRG1s3NXRHa%2F%2FVYyBjaA4qmiSDWUFQeQ7IPF9f7Zam8TLD1sulKRdrO8dsi9NC3%2FvgaN9WzrNatyozC1MAv8klu14JlBiR4u1wniGB%2BR&X-Amz-Signature=e1a08972c7d05971d671b3e4e58d569920a2ab244b4a4ddb4af38a41b34e67e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAOYXHS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDryycie%2Fguq9FZDQHnY0WEwlJX7j9iFiWYzROWxVPnQwIgBz%2FbTnfHL%2B9nfxEHy%2FHE1RpsXhwxII10L337eAVcrlwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHLuAhWy9o%2FlzdwwdyrcA%2BdfXSa1Ba622rTFWnJG53zLC5LnH48dH%2BrYX55FaV1MtG7fNft2Tuem58hirERCQt18aBVBg4p1mNaZ4ToPgpadp2KZwC%2BROv0PXLMe9qlxohDlsFhB4Cz4xgUhPDhJbImYBgtuWQYOexzKp9NXoKt7r7Az2vSDxpwYjbdw%2FhU1Qd1%2FQdKJ1r04s8Xlj94G4p1m0k9zy8JxxxJBle1AWYWkHz%2B0rVfEEqG2Z39wEQCxVY2AqolhgLCloDzYplTG%2Fnfo%2F5JDa2XVbOWVFRtCIEstJaVhwkl4sNMjqpgkbDJroBINZrmRbXAW5SLn3KlDJr5scVGRlRC6o2XxlWAWXbd%2FrOu66mwLfQs6F%2B%2FFkrlZTOeY88OPSck2c42QAWoOBDNq35sMSgNagSQz6Cz0cpQZQQvQCBbu8BY409ZVlPAftdXD9X5FRZl5iJO1EayI6EBqkMWJUfMxaUNTzcVL5n98cLIgLUp30GWDyh4HLKem66PBfn7pdmh00Gm4jNYvXbyXXdSvEuV65xtsj%2FITZy31by49Yq5bkrEzj3vmw0hUV1uCbJJyUGvo4pFGMNaKTkrfufikMzL9aztjc2IGFcbmTS2hV0z8c%2FcYSvWYC40roLsFP4kXIqpfIwKFMP%2Bx88IGOqUBAxcX5fsbBVPDmowApTkz%2BaCS3hcsAKcXe0v0oEO%2BDGGkd%2BbqopoQE7dK4xoEf0VW0und%2Bg%2FJEDSlmnPOAp5%2F1xGMjI16bbcEt3POBMOTL0qmSlr3Ax4lvRG1s3NXRHa%2F%2FVYyBjaA4qmiSDWUFQeQ7IPF9f7Zam8TLD1sulKRdrO8dsi9NC3%2FvgaN9WzrNatyozC1MAv8klu14JlBiR4u1wniGB%2BR&X-Amz-Signature=723b98b77eab514d9d522437c356b510b3b38357307409fb90a98c783c253efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAOYXHS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDryycie%2Fguq9FZDQHnY0WEwlJX7j9iFiWYzROWxVPnQwIgBz%2FbTnfHL%2B9nfxEHy%2FHE1RpsXhwxII10L337eAVcrlwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHLuAhWy9o%2FlzdwwdyrcA%2BdfXSa1Ba622rTFWnJG53zLC5LnH48dH%2BrYX55FaV1MtG7fNft2Tuem58hirERCQt18aBVBg4p1mNaZ4ToPgpadp2KZwC%2BROv0PXLMe9qlxohDlsFhB4Cz4xgUhPDhJbImYBgtuWQYOexzKp9NXoKt7r7Az2vSDxpwYjbdw%2FhU1Qd1%2FQdKJ1r04s8Xlj94G4p1m0k9zy8JxxxJBle1AWYWkHz%2B0rVfEEqG2Z39wEQCxVY2AqolhgLCloDzYplTG%2Fnfo%2F5JDa2XVbOWVFRtCIEstJaVhwkl4sNMjqpgkbDJroBINZrmRbXAW5SLn3KlDJr5scVGRlRC6o2XxlWAWXbd%2FrOu66mwLfQs6F%2B%2FFkrlZTOeY88OPSck2c42QAWoOBDNq35sMSgNagSQz6Cz0cpQZQQvQCBbu8BY409ZVlPAftdXD9X5FRZl5iJO1EayI6EBqkMWJUfMxaUNTzcVL5n98cLIgLUp30GWDyh4HLKem66PBfn7pdmh00Gm4jNYvXbyXXdSvEuV65xtsj%2FITZy31by49Yq5bkrEzj3vmw0hUV1uCbJJyUGvo4pFGMNaKTkrfufikMzL9aztjc2IGFcbmTS2hV0z8c%2FcYSvWYC40roLsFP4kXIqpfIwKFMP%2Bx88IGOqUBAxcX5fsbBVPDmowApTkz%2BaCS3hcsAKcXe0v0oEO%2BDGGkd%2BbqopoQE7dK4xoEf0VW0und%2Bg%2FJEDSlmnPOAp5%2F1xGMjI16bbcEt3POBMOTL0qmSlr3Ax4lvRG1s3NXRHa%2F%2FVYyBjaA4qmiSDWUFQeQ7IPF9f7Zam8TLD1sulKRdrO8dsi9NC3%2FvgaN9WzrNatyozC1MAv8klu14JlBiR4u1wniGB%2BR&X-Amz-Signature=8a9bb33397cfbd18f069cfa089caf13c7108515d78937aa004eef8d6ed9563a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
