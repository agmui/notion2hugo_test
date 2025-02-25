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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OKJWCF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFPBEEcL93E3q8LDHsncoE5g28uPDw%2Fukq2%2Fl1rUS%2FGVAiEA69fZ2Wt5OIgWEDk%2B3tRsbG5NXLwDzzWIi1rq%2BWVGI2Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCKsJEDTLT7qNHA5NCrcA6g3IwKUfQ7rjzJGl3WQ01YGcTb%2BvNef4QvYY85wTtE17usIlnqjbmnRbyd0NiGS%2B3R%2F297%2BxbcTU1QFNu1Wc7D4Th63OsPgC1jbOlZaJkjyFjpFleQ2EXQX3vaI4V566JLHp4IKZ7urcINf5GHOjg81Tkm6J2VY0hxib9w0EUVTBT%2BTo%2BWvWdVM%2FOEQDcuV9jD6%2FJviaKMltuSLiL04es%2BaIOSCLLp%2FCLTe9Y9zCqPJhQNx6UuPrpzMfYxJJMzia2hzqRd2mGDXl3kUYsu5yLfLU6pvy4MbQglmnLPNlB2mGbBOAn5fN400OC%2BiDae7xoFUKqzSTpJPCy6u9BJlQi%2F%2Bvwyz3rh8nnafAGBVT%2FVXYvxH0pS70OlPu%2Bcw34iN2AgisUAaNlguxDk8SUdwZGlqmB%2BgWgz1tcm2OsukFkRiD%2FHHg7YjQ5P7LBUVspsxJNm7AOP0DX0KL4vR2uAGRda%2Bf9L%2BWgGq9TUhydaw7lzcQxlaUbkKCKijkBgdtA0nAYA%2FC%2B5F4LQM7NcRQxlCUpA8CfOl7zJiZdvFshBQ%2FjnX3rCSY7p2LjWhZdoUkeATRBm58PYtMELb5BCpLHhiocdgHTpCj8r5cTPo%2FpedUBTSb5F%2BzVfdrUemaq82MKTo9b0GOqUBm0qaWYngSpx6k60%2FcMIdszMGGSAVBu27ecSPAiRYN9X98TVmyru5i4SzxsGoOJYy2lu0ZlZ3F0VggxgB%2FR5nVCSGMTavdV%2Byuf37gnOKP5VvmadAuaI9O09yOzGq1uyuHCsVoA7RDVP72iHzo5G9IzI0b0q5tCk9gUe2QPk9KD7amLbG6gVKa7U%2F35BACDQfdbzJ38KgwqskZbVurDuFZHwRiEId&X-Amz-Signature=288ca21654f5fd09868a31cfc01aedf7cfb90a73fa2b29e8952d56ac309919c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OKJWCF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFPBEEcL93E3q8LDHsncoE5g28uPDw%2Fukq2%2Fl1rUS%2FGVAiEA69fZ2Wt5OIgWEDk%2B3tRsbG5NXLwDzzWIi1rq%2BWVGI2Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCKsJEDTLT7qNHA5NCrcA6g3IwKUfQ7rjzJGl3WQ01YGcTb%2BvNef4QvYY85wTtE17usIlnqjbmnRbyd0NiGS%2B3R%2F297%2BxbcTU1QFNu1Wc7D4Th63OsPgC1jbOlZaJkjyFjpFleQ2EXQX3vaI4V566JLHp4IKZ7urcINf5GHOjg81Tkm6J2VY0hxib9w0EUVTBT%2BTo%2BWvWdVM%2FOEQDcuV9jD6%2FJviaKMltuSLiL04es%2BaIOSCLLp%2FCLTe9Y9zCqPJhQNx6UuPrpzMfYxJJMzia2hzqRd2mGDXl3kUYsu5yLfLU6pvy4MbQglmnLPNlB2mGbBOAn5fN400OC%2BiDae7xoFUKqzSTpJPCy6u9BJlQi%2F%2Bvwyz3rh8nnafAGBVT%2FVXYvxH0pS70OlPu%2Bcw34iN2AgisUAaNlguxDk8SUdwZGlqmB%2BgWgz1tcm2OsukFkRiD%2FHHg7YjQ5P7LBUVspsxJNm7AOP0DX0KL4vR2uAGRda%2Bf9L%2BWgGq9TUhydaw7lzcQxlaUbkKCKijkBgdtA0nAYA%2FC%2B5F4LQM7NcRQxlCUpA8CfOl7zJiZdvFshBQ%2FjnX3rCSY7p2LjWhZdoUkeATRBm58PYtMELb5BCpLHhiocdgHTpCj8r5cTPo%2FpedUBTSb5F%2BzVfdrUemaq82MKTo9b0GOqUBm0qaWYngSpx6k60%2FcMIdszMGGSAVBu27ecSPAiRYN9X98TVmyru5i4SzxsGoOJYy2lu0ZlZ3F0VggxgB%2FR5nVCSGMTavdV%2Byuf37gnOKP5VvmadAuaI9O09yOzGq1uyuHCsVoA7RDVP72iHzo5G9IzI0b0q5tCk9gUe2QPk9KD7amLbG6gVKa7U%2F35BACDQfdbzJ38KgwqskZbVurDuFZHwRiEId&X-Amz-Signature=10de9ba6d5f0fbbb741b0a3a60e5eff946f7486a4922459742c4350d0a384c06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OKJWCF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFPBEEcL93E3q8LDHsncoE5g28uPDw%2Fukq2%2Fl1rUS%2FGVAiEA69fZ2Wt5OIgWEDk%2B3tRsbG5NXLwDzzWIi1rq%2BWVGI2Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCKsJEDTLT7qNHA5NCrcA6g3IwKUfQ7rjzJGl3WQ01YGcTb%2BvNef4QvYY85wTtE17usIlnqjbmnRbyd0NiGS%2B3R%2F297%2BxbcTU1QFNu1Wc7D4Th63OsPgC1jbOlZaJkjyFjpFleQ2EXQX3vaI4V566JLHp4IKZ7urcINf5GHOjg81Tkm6J2VY0hxib9w0EUVTBT%2BTo%2BWvWdVM%2FOEQDcuV9jD6%2FJviaKMltuSLiL04es%2BaIOSCLLp%2FCLTe9Y9zCqPJhQNx6UuPrpzMfYxJJMzia2hzqRd2mGDXl3kUYsu5yLfLU6pvy4MbQglmnLPNlB2mGbBOAn5fN400OC%2BiDae7xoFUKqzSTpJPCy6u9BJlQi%2F%2Bvwyz3rh8nnafAGBVT%2FVXYvxH0pS70OlPu%2Bcw34iN2AgisUAaNlguxDk8SUdwZGlqmB%2BgWgz1tcm2OsukFkRiD%2FHHg7YjQ5P7LBUVspsxJNm7AOP0DX0KL4vR2uAGRda%2Bf9L%2BWgGq9TUhydaw7lzcQxlaUbkKCKijkBgdtA0nAYA%2FC%2B5F4LQM7NcRQxlCUpA8CfOl7zJiZdvFshBQ%2FjnX3rCSY7p2LjWhZdoUkeATRBm58PYtMELb5BCpLHhiocdgHTpCj8r5cTPo%2FpedUBTSb5F%2BzVfdrUemaq82MKTo9b0GOqUBm0qaWYngSpx6k60%2FcMIdszMGGSAVBu27ecSPAiRYN9X98TVmyru5i4SzxsGoOJYy2lu0ZlZ3F0VggxgB%2FR5nVCSGMTavdV%2Byuf37gnOKP5VvmadAuaI9O09yOzGq1uyuHCsVoA7RDVP72iHzo5G9IzI0b0q5tCk9gUe2QPk9KD7amLbG6gVKa7U%2F35BACDQfdbzJ38KgwqskZbVurDuFZHwRiEId&X-Amz-Signature=15fe8aadccf1cb3beeb309a4f507c0db4fcfb17120302600fefad46acc9077eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
