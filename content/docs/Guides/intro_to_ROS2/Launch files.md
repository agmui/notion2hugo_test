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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BI5IKSC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE02Vh6M8mnkm63U6YBG2EJKdU8mv3bZiCO%2Bv2KhddaGAiEA9YLzm8P6RBGiXxK3iWp%2FWhYUKeG6x%2FMtt0Wkzj%2B0loUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBlnGfcj3vtmZz9vRSrcA5%2FdjL%2FwmrmwM8fVFWN6FoRjMEQbdO2Ufe7pXqE%2FF1ua47u5ycYFW5I9Nr31Ghn5okH94q1wTpvuEIqkqqUgknq%2FtoW6wERNhGK6w04Fa5jzgo79UIkGQAz34neWKpA178kK5g3vUfWOAlNI7Xhww%2BA1Px5uLtr4SAyWasIlE80iigB3v07Ebpqf1CnfkZDxLrp6NYsJ0v0oWrjzTto%2B0PBwaG6Qbqo%2FzCwscBQlXbm3zaOMw9P%2FOGfAHEpnRReEFeT2lS9V135kwlROYDiuojy3eyvNnGUQW9NN6SK4sOMfm68ipVBHiPdn2eq83FtvfGxE31FvZoDKjH79fmgvHBNnYtfrwN3ibH%2FCHhg7t%2FN2sIKP01XdCgthz%2Fg1U40djpWT7nWvUkCVHrL7%2Fel3sqQ8VbLYpqHb%2FZm%2FXXhn9yRS6vKGamy%2B37%2BdX8jtmpPQ6jo%2FxCSMf%2FCDs%2Fnae8qMGPeqsRJCgyeZSTWgpKj0tQTWuwuIuxpwa5sVasUB6vxoUVgjo0ml5Tu1tEVyPVTa%2BHv9PctPkAC4xosTzcvzqIx9mgc7Dr4448BJ0o9BAvF9HH0HLMmjA2Wszd2pQz1Oa9296YrygJb86MCAbqasoJEfcsoz01QEP8Tz0ZoGMNjGmL0GOqUBErL48lzsjz%2Fpo09jwLm4f1u1NBLrbH0h848aGvDaJ4oYozBTuZB0NbEg8g%2B94CMESidygkN8rhuOFerADBzHGz%2BgcaUXH5wzxTPgkkde8F3aHBBTIxoJNVwgOWwyeDeFXXiUkcrrnNYrxp9U2yKS1OhHEKzgrCHmsyoZ94XKRV4UMDzcAAdCDekf040bSUXx84l%2FCemPwZv%2BNrYK2h0ArVhgeL7j&X-Amz-Signature=b1ec33f12b10b2f597c6e7c43fb84c91ba0246435194070965e5ae6e8c401dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BI5IKSC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE02Vh6M8mnkm63U6YBG2EJKdU8mv3bZiCO%2Bv2KhddaGAiEA9YLzm8P6RBGiXxK3iWp%2FWhYUKeG6x%2FMtt0Wkzj%2B0loUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBlnGfcj3vtmZz9vRSrcA5%2FdjL%2FwmrmwM8fVFWN6FoRjMEQbdO2Ufe7pXqE%2FF1ua47u5ycYFW5I9Nr31Ghn5okH94q1wTpvuEIqkqqUgknq%2FtoW6wERNhGK6w04Fa5jzgo79UIkGQAz34neWKpA178kK5g3vUfWOAlNI7Xhww%2BA1Px5uLtr4SAyWasIlE80iigB3v07Ebpqf1CnfkZDxLrp6NYsJ0v0oWrjzTto%2B0PBwaG6Qbqo%2FzCwscBQlXbm3zaOMw9P%2FOGfAHEpnRReEFeT2lS9V135kwlROYDiuojy3eyvNnGUQW9NN6SK4sOMfm68ipVBHiPdn2eq83FtvfGxE31FvZoDKjH79fmgvHBNnYtfrwN3ibH%2FCHhg7t%2FN2sIKP01XdCgthz%2Fg1U40djpWT7nWvUkCVHrL7%2Fel3sqQ8VbLYpqHb%2FZm%2FXXhn9yRS6vKGamy%2B37%2BdX8jtmpPQ6jo%2FxCSMf%2FCDs%2Fnae8qMGPeqsRJCgyeZSTWgpKj0tQTWuwuIuxpwa5sVasUB6vxoUVgjo0ml5Tu1tEVyPVTa%2BHv9PctPkAC4xosTzcvzqIx9mgc7Dr4448BJ0o9BAvF9HH0HLMmjA2Wszd2pQz1Oa9296YrygJb86MCAbqasoJEfcsoz01QEP8Tz0ZoGMNjGmL0GOqUBErL48lzsjz%2Fpo09jwLm4f1u1NBLrbH0h848aGvDaJ4oYozBTuZB0NbEg8g%2B94CMESidygkN8rhuOFerADBzHGz%2BgcaUXH5wzxTPgkkde8F3aHBBTIxoJNVwgOWwyeDeFXXiUkcrrnNYrxp9U2yKS1OhHEKzgrCHmsyoZ94XKRV4UMDzcAAdCDekf040bSUXx84l%2FCemPwZv%2BNrYK2h0ArVhgeL7j&X-Amz-Signature=c621f2191e1803c9fd4424940a6e000de64c6c6b2964d5f3ec4eb1a929b6c128&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BI5IKSC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE02Vh6M8mnkm63U6YBG2EJKdU8mv3bZiCO%2Bv2KhddaGAiEA9YLzm8P6RBGiXxK3iWp%2FWhYUKeG6x%2FMtt0Wkzj%2B0loUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBlnGfcj3vtmZz9vRSrcA5%2FdjL%2FwmrmwM8fVFWN6FoRjMEQbdO2Ufe7pXqE%2FF1ua47u5ycYFW5I9Nr31Ghn5okH94q1wTpvuEIqkqqUgknq%2FtoW6wERNhGK6w04Fa5jzgo79UIkGQAz34neWKpA178kK5g3vUfWOAlNI7Xhww%2BA1Px5uLtr4SAyWasIlE80iigB3v07Ebpqf1CnfkZDxLrp6NYsJ0v0oWrjzTto%2B0PBwaG6Qbqo%2FzCwscBQlXbm3zaOMw9P%2FOGfAHEpnRReEFeT2lS9V135kwlROYDiuojy3eyvNnGUQW9NN6SK4sOMfm68ipVBHiPdn2eq83FtvfGxE31FvZoDKjH79fmgvHBNnYtfrwN3ibH%2FCHhg7t%2FN2sIKP01XdCgthz%2Fg1U40djpWT7nWvUkCVHrL7%2Fel3sqQ8VbLYpqHb%2FZm%2FXXhn9yRS6vKGamy%2B37%2BdX8jtmpPQ6jo%2FxCSMf%2FCDs%2Fnae8qMGPeqsRJCgyeZSTWgpKj0tQTWuwuIuxpwa5sVasUB6vxoUVgjo0ml5Tu1tEVyPVTa%2BHv9PctPkAC4xosTzcvzqIx9mgc7Dr4448BJ0o9BAvF9HH0HLMmjA2Wszd2pQz1Oa9296YrygJb86MCAbqasoJEfcsoz01QEP8Tz0ZoGMNjGmL0GOqUBErL48lzsjz%2Fpo09jwLm4f1u1NBLrbH0h848aGvDaJ4oYozBTuZB0NbEg8g%2B94CMESidygkN8rhuOFerADBzHGz%2BgcaUXH5wzxTPgkkde8F3aHBBTIxoJNVwgOWwyeDeFXXiUkcrrnNYrxp9U2yKS1OhHEKzgrCHmsyoZ94XKRV4UMDzcAAdCDekf040bSUXx84l%2FCemPwZv%2BNrYK2h0ArVhgeL7j&X-Amz-Signature=080586d75a2d94975a8301a1fc29edbe5f26c1eb9804beaca1fb3cfc94561fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
