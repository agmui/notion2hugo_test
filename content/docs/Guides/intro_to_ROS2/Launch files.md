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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVP2MAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDzbDabVk5NxY%2Bk4rwJcofuBTqbmCzD6CfRAxD0SBGwsAIgPW27YeaCrMGt4H1eL1wYQ7JlU6W6t8rhc6t8DzCqeN8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHZ0H2AYifEYSSbzSrcA5Fl1TP9NAlMFjJ7rjOw1Oy2EXBAb%2FjqiqTYR7MEmIW1QclSB1IbN9g7qRkrYF6XjZGve9U4Uc8SibA%2FB4EwZwQXVjuu%2BUeLd1BQZS3Gv67ajtOfCMLTYF4USelc7Ti701tQznqHCfa0xFp9tfFqTcytru5zhfnBFQwhjh3NpWDdiE9sdiXBaywTB4woRBIoGnVO9IfwM8Uj3tYBbiJ3LmAGkxBhARrBtV7l7nMO7Yo2uzmQoiv4N1wKT8ZPNNLMZno94jf%2BccjHFcwFEapkPdsLP6MT6euwJ1FwngVH4ihDONfN%2FgwhEmOmCSUAIHc%2BP3ArboFTKNO8DFm4ggYtbEY63m43qIQkBPnXK5xxCmEryRMAiz%2FwU6bPJmvSaZ9asbze41gn0nGK937%2BkVHo25VzFW7LTUNCgbNMcwU4llBOu7saNos5geIB%2F%2FAL%2FLgSBkdy2q9C%2F%2BcKAzTwhAAesoTw%2BSx%2BGuw0%2FprYSDyPxgOwyEt3Yf7e3Pl8WfP%2F3qRGvFaI1yrzYsnwLDjZ%2FB2jXyvQFnEIM2UssvahYmvPs3tx4qqqrciEXfJapdxW4873gQUldlV%2BWt%2FfkCbvXyi8j8WHYck7JAwH4WoAXDuyIlFiHB5Th0FL75465IdcMNfDksAGOqUBr3wO6VaLTrWJJSwavSDR3ZfygdZB5mJKW%2BGNSUtP3OeTdPFKQIzWVBHlKk17%2Bs9cmmExg%2B%2BiullsVDGWsRUikihYL4FsqOBO3J0W5mOD1vRy0Ui%2Fu66ysz%2B8h34y71RXiQ7yWFG3Mci%2Bxd571AHQOGKSWbg6qPePQ54ml4V5rkeTMbyALRA7didO2Y7OTKd2XR2%2Bk1%2Fz34HFnIazrbteu%2BrgVGvM&X-Amz-Signature=3521c69b4eb153b408bd97683a3269ccabee79a75dec7aa8f76acfa4617adb87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVP2MAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDzbDabVk5NxY%2Bk4rwJcofuBTqbmCzD6CfRAxD0SBGwsAIgPW27YeaCrMGt4H1eL1wYQ7JlU6W6t8rhc6t8DzCqeN8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHZ0H2AYifEYSSbzSrcA5Fl1TP9NAlMFjJ7rjOw1Oy2EXBAb%2FjqiqTYR7MEmIW1QclSB1IbN9g7qRkrYF6XjZGve9U4Uc8SibA%2FB4EwZwQXVjuu%2BUeLd1BQZS3Gv67ajtOfCMLTYF4USelc7Ti701tQznqHCfa0xFp9tfFqTcytru5zhfnBFQwhjh3NpWDdiE9sdiXBaywTB4woRBIoGnVO9IfwM8Uj3tYBbiJ3LmAGkxBhARrBtV7l7nMO7Yo2uzmQoiv4N1wKT8ZPNNLMZno94jf%2BccjHFcwFEapkPdsLP6MT6euwJ1FwngVH4ihDONfN%2FgwhEmOmCSUAIHc%2BP3ArboFTKNO8DFm4ggYtbEY63m43qIQkBPnXK5xxCmEryRMAiz%2FwU6bPJmvSaZ9asbze41gn0nGK937%2BkVHo25VzFW7LTUNCgbNMcwU4llBOu7saNos5geIB%2F%2FAL%2FLgSBkdy2q9C%2F%2BcKAzTwhAAesoTw%2BSx%2BGuw0%2FprYSDyPxgOwyEt3Yf7e3Pl8WfP%2F3qRGvFaI1yrzYsnwLDjZ%2FB2jXyvQFnEIM2UssvahYmvPs3tx4qqqrciEXfJapdxW4873gQUldlV%2BWt%2FfkCbvXyi8j8WHYck7JAwH4WoAXDuyIlFiHB5Th0FL75465IdcMNfDksAGOqUBr3wO6VaLTrWJJSwavSDR3ZfygdZB5mJKW%2BGNSUtP3OeTdPFKQIzWVBHlKk17%2Bs9cmmExg%2B%2BiullsVDGWsRUikihYL4FsqOBO3J0W5mOD1vRy0Ui%2Fu66ysz%2B8h34y71RXiQ7yWFG3Mci%2Bxd571AHQOGKSWbg6qPePQ54ml4V5rkeTMbyALRA7didO2Y7OTKd2XR2%2Bk1%2Fz34HFnIazrbteu%2BrgVGvM&X-Amz-Signature=d75715beb084058ae1b52aa9aa0ea69ffe9ae880bc8f2c70b8260dfcaae46bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVP2MAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDzbDabVk5NxY%2Bk4rwJcofuBTqbmCzD6CfRAxD0SBGwsAIgPW27YeaCrMGt4H1eL1wYQ7JlU6W6t8rhc6t8DzCqeN8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHZ0H2AYifEYSSbzSrcA5Fl1TP9NAlMFjJ7rjOw1Oy2EXBAb%2FjqiqTYR7MEmIW1QclSB1IbN9g7qRkrYF6XjZGve9U4Uc8SibA%2FB4EwZwQXVjuu%2BUeLd1BQZS3Gv67ajtOfCMLTYF4USelc7Ti701tQznqHCfa0xFp9tfFqTcytru5zhfnBFQwhjh3NpWDdiE9sdiXBaywTB4woRBIoGnVO9IfwM8Uj3tYBbiJ3LmAGkxBhARrBtV7l7nMO7Yo2uzmQoiv4N1wKT8ZPNNLMZno94jf%2BccjHFcwFEapkPdsLP6MT6euwJ1FwngVH4ihDONfN%2FgwhEmOmCSUAIHc%2BP3ArboFTKNO8DFm4ggYtbEY63m43qIQkBPnXK5xxCmEryRMAiz%2FwU6bPJmvSaZ9asbze41gn0nGK937%2BkVHo25VzFW7LTUNCgbNMcwU4llBOu7saNos5geIB%2F%2FAL%2FLgSBkdy2q9C%2F%2BcKAzTwhAAesoTw%2BSx%2BGuw0%2FprYSDyPxgOwyEt3Yf7e3Pl8WfP%2F3qRGvFaI1yrzYsnwLDjZ%2FB2jXyvQFnEIM2UssvahYmvPs3tx4qqqrciEXfJapdxW4873gQUldlV%2BWt%2FfkCbvXyi8j8WHYck7JAwH4WoAXDuyIlFiHB5Th0FL75465IdcMNfDksAGOqUBr3wO6VaLTrWJJSwavSDR3ZfygdZB5mJKW%2BGNSUtP3OeTdPFKQIzWVBHlKk17%2Bs9cmmExg%2B%2BiullsVDGWsRUikihYL4FsqOBO3J0W5mOD1vRy0Ui%2Fu66ysz%2B8h34y71RXiQ7yWFG3Mci%2Bxd571AHQOGKSWbg6qPePQ54ml4V5rkeTMbyALRA7didO2Y7OTKd2XR2%2Bk1%2Fz34HFnIazrbteu%2BrgVGvM&X-Amz-Signature=29c179798ee907bb77c1e410c7808c28842a5b74d89aea3b75ef62a94b0822ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
