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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUXDED5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQY9vjXWLWSvf0YA4mAY%2FFXIaI7Bud24DN84NtKOLwkAiEAoRGi14b4X2jBeVIkXGwqlgXiQL50G36Af8cOM5mDbjAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF3ev1p%2BDI0X5CXqMircAzHVMSubdSaUILASQLHKKXvWj0sVIe24sC%2BWNzU6gzBxQmx5F1MGflfvfuh2m%2BiNnKbH%2BB15KWstvienZj9Iism%2FsU8Et0InPEP3QCybns8qteye6oKLze7tJ0OfQE7ctZlvPoEBV%2BkEelJdGDaM9evgWPDs4FGkVfxwxr%2FpP1CkPivJ530xIew0UfUfOKEfql46Uamj%2BOqmQSrcWKEZ4eAIsMZKLwycY3z8DK0PFmjoUxZHzWTI2oEk087VPCPYqZqaW9Vv7g5pJievimqXzy%2FV5wxl8REPit9H8fKfOPeBYldUmbtuqbGimErl1b5J270X5UGz8QJgCTsKId7QgMn%2BDHXWeJDyhJRyqaJuM%2FncEAjqqsGWio2FeGyfklLtb16huqAmTGXltqnwHAUGjPDsotXPt3vSkxAQInTrKihq6Jdgyp6EbfWNVQXp72f46hplDCHGDgYT%2FbbOM4ra7VTdHhac%2Fb3IEQ2Zr72ZSSYBMpdSiwnD2wDVgtCKUn64F7td7aM%2BflL0Aw3JLZnU9VGHScCZ4q1mF3uPi1Zl%2BXehO1X7cPV7byTCSo7jgez1DTPM4Ay9QELU7WDZTCVioEYqHGk3f7hpPMD1V8L4xXjaWYHXRQZ8d2kaJHMYMLmGm8EGOqUB7mB1Y%2FxP4rdsoihAPiVTZlVu7kFJmolZTYTe1ftztJrJDkl9W%2BjaoGvNPCV4mLtQIRPIgHvs74E7MIrxqv96sUt%2FIeXrdabylo0eiz9EmPDe9elfmzRsVwo2o1e2qNr1AfHx4Q9rDO8Bjq%2FsZOVEyqWbhKfyuqLQUYADT3p8qEtprS2M069qqOaRTTOLY3DMioR9Fh0ESaYut7jCdK7gHkEU%2BVoR&X-Amz-Signature=c9a181744b05b051b86c3e87d0ce2dd02f273bc735968e02497b189c9d076eff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUXDED5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQY9vjXWLWSvf0YA4mAY%2FFXIaI7Bud24DN84NtKOLwkAiEAoRGi14b4X2jBeVIkXGwqlgXiQL50G36Af8cOM5mDbjAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF3ev1p%2BDI0X5CXqMircAzHVMSubdSaUILASQLHKKXvWj0sVIe24sC%2BWNzU6gzBxQmx5F1MGflfvfuh2m%2BiNnKbH%2BB15KWstvienZj9Iism%2FsU8Et0InPEP3QCybns8qteye6oKLze7tJ0OfQE7ctZlvPoEBV%2BkEelJdGDaM9evgWPDs4FGkVfxwxr%2FpP1CkPivJ530xIew0UfUfOKEfql46Uamj%2BOqmQSrcWKEZ4eAIsMZKLwycY3z8DK0PFmjoUxZHzWTI2oEk087VPCPYqZqaW9Vv7g5pJievimqXzy%2FV5wxl8REPit9H8fKfOPeBYldUmbtuqbGimErl1b5J270X5UGz8QJgCTsKId7QgMn%2BDHXWeJDyhJRyqaJuM%2FncEAjqqsGWio2FeGyfklLtb16huqAmTGXltqnwHAUGjPDsotXPt3vSkxAQInTrKihq6Jdgyp6EbfWNVQXp72f46hplDCHGDgYT%2FbbOM4ra7VTdHhac%2Fb3IEQ2Zr72ZSSYBMpdSiwnD2wDVgtCKUn64F7td7aM%2BflL0Aw3JLZnU9VGHScCZ4q1mF3uPi1Zl%2BXehO1X7cPV7byTCSo7jgez1DTPM4Ay9QELU7WDZTCVioEYqHGk3f7hpPMD1V8L4xXjaWYHXRQZ8d2kaJHMYMLmGm8EGOqUB7mB1Y%2FxP4rdsoihAPiVTZlVu7kFJmolZTYTe1ftztJrJDkl9W%2BjaoGvNPCV4mLtQIRPIgHvs74E7MIrxqv96sUt%2FIeXrdabylo0eiz9EmPDe9elfmzRsVwo2o1e2qNr1AfHx4Q9rDO8Bjq%2FsZOVEyqWbhKfyuqLQUYADT3p8qEtprS2M069qqOaRTTOLY3DMioR9Fh0ESaYut7jCdK7gHkEU%2BVoR&X-Amz-Signature=a23b22db158d0d21f5d3c56f4cadd3f6b577637dddc0a0fb47b8d8ab9875cf24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUXDED5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQY9vjXWLWSvf0YA4mAY%2FFXIaI7Bud24DN84NtKOLwkAiEAoRGi14b4X2jBeVIkXGwqlgXiQL50G36Af8cOM5mDbjAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF3ev1p%2BDI0X5CXqMircAzHVMSubdSaUILASQLHKKXvWj0sVIe24sC%2BWNzU6gzBxQmx5F1MGflfvfuh2m%2BiNnKbH%2BB15KWstvienZj9Iism%2FsU8Et0InPEP3QCybns8qteye6oKLze7tJ0OfQE7ctZlvPoEBV%2BkEelJdGDaM9evgWPDs4FGkVfxwxr%2FpP1CkPivJ530xIew0UfUfOKEfql46Uamj%2BOqmQSrcWKEZ4eAIsMZKLwycY3z8DK0PFmjoUxZHzWTI2oEk087VPCPYqZqaW9Vv7g5pJievimqXzy%2FV5wxl8REPit9H8fKfOPeBYldUmbtuqbGimErl1b5J270X5UGz8QJgCTsKId7QgMn%2BDHXWeJDyhJRyqaJuM%2FncEAjqqsGWio2FeGyfklLtb16huqAmTGXltqnwHAUGjPDsotXPt3vSkxAQInTrKihq6Jdgyp6EbfWNVQXp72f46hplDCHGDgYT%2FbbOM4ra7VTdHhac%2Fb3IEQ2Zr72ZSSYBMpdSiwnD2wDVgtCKUn64F7td7aM%2BflL0Aw3JLZnU9VGHScCZ4q1mF3uPi1Zl%2BXehO1X7cPV7byTCSo7jgez1DTPM4Ay9QELU7WDZTCVioEYqHGk3f7hpPMD1V8L4xXjaWYHXRQZ8d2kaJHMYMLmGm8EGOqUB7mB1Y%2FxP4rdsoihAPiVTZlVu7kFJmolZTYTe1ftztJrJDkl9W%2BjaoGvNPCV4mLtQIRPIgHvs74E7MIrxqv96sUt%2FIeXrdabylo0eiz9EmPDe9elfmzRsVwo2o1e2qNr1AfHx4Q9rDO8Bjq%2FsZOVEyqWbhKfyuqLQUYADT3p8qEtprS2M069qqOaRTTOLY3DMioR9Fh0ESaYut7jCdK7gHkEU%2BVoR&X-Amz-Signature=cee151c3d394c1fd7d5fcf640baa015b58c3b6ded56f63c7af430ffd03b3d44e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
