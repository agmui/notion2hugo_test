---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CB5IIH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHSidiXCr2RsMvEuxi6igwdsVZ7G9aP8ZxqJFnoKySinAiAnugk73tgrhamHxtEbvAn5%2BY9NSEaJpFYhA3C2gORtqir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCJRlyx5hmf57oRdTKtwDEZyRGMTYaA3iC4pkma1Gd663UArGWf1G3tMS7NrBbJu0%2FNhSM45cBagg39NYxpQN1bsz6Py7XeRLGaAnK4fv5ydoQfdKitPSuOq22ureS%2BySgHKyr5c%2Fo8vuQ7dDd9mRlFXv0zzoguH1mn8PVwFV7nE9HdrQYJbPGwbfvatPWcftFCnrGYfHmPbm37MvGFuwwOEEbiHFlKgzrPEfoiaIMdDiFc5gqsL3Fs85xv6s2OlnyB0yrItias37WYQ6VbQALHcgapcMSC3HT%2BEcpYfuZdaR1HEkXUhlq4pctLWmTO1Bc9RwYWw8ycUCJ4zCLgGcKyYLpXr2l17xlKXOI76%2BnYWXM57EIc8X%2FFzlnbarXFjINJ%2BnktIQQpfeQbxguOyylzZKOec6vy8RxoYUzC480D2FRxUCsZzfrHt1JxNuhCjVZuO41tqJA6WuVQ%2BKWeLGaXFIRkjLhwaKr%2Bj37jvI5ZJ55Hl7ArkW7xGbKtn%2B2%2BM%2Bc8iFdJFuT%2F3nCwh4IZW15wD%2BNWWtD0KNO9kBgZbk6Tl99eTDRPqum%2Bizr1VxoRdksHQBllBcqUB26TxyYW8LrK30dfzlF5NiA%2BcxQLaAN1IbOHneoN%2FN%2BNcM6DRcD1hQJmOQ4yWYRQXAq7wwqL2OxAY6pgFA7GaCYA2QAitrdsGo1QdYWB7vLlET4QRH83t7is3kkTwue%2FtD77%2BdQWJsDJSWMrfr1j%2BXWYI11r2ODrKzmAsMCZBdWWalKgZueM4WwaV619DB1N%2F9tB6l5eywzpa%2F82It4Vbdrd2j8cSpdsNT6yVnDcAMlg19Ad%2F7%2FDdePOSpXOGrxHNSYEZnBS8o8gjMXvw6VgQ7PreoiqVrj%2BW3HSFUqjdGrBtu&X-Amz-Signature=5d2f8128bf6eb715ffb7549ead5f0c9f9f5893caa5da3c532b3576f20b433f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CB5IIH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHSidiXCr2RsMvEuxi6igwdsVZ7G9aP8ZxqJFnoKySinAiAnugk73tgrhamHxtEbvAn5%2BY9NSEaJpFYhA3C2gORtqir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCJRlyx5hmf57oRdTKtwDEZyRGMTYaA3iC4pkma1Gd663UArGWf1G3tMS7NrBbJu0%2FNhSM45cBagg39NYxpQN1bsz6Py7XeRLGaAnK4fv5ydoQfdKitPSuOq22ureS%2BySgHKyr5c%2Fo8vuQ7dDd9mRlFXv0zzoguH1mn8PVwFV7nE9HdrQYJbPGwbfvatPWcftFCnrGYfHmPbm37MvGFuwwOEEbiHFlKgzrPEfoiaIMdDiFc5gqsL3Fs85xv6s2OlnyB0yrItias37WYQ6VbQALHcgapcMSC3HT%2BEcpYfuZdaR1HEkXUhlq4pctLWmTO1Bc9RwYWw8ycUCJ4zCLgGcKyYLpXr2l17xlKXOI76%2BnYWXM57EIc8X%2FFzlnbarXFjINJ%2BnktIQQpfeQbxguOyylzZKOec6vy8RxoYUzC480D2FRxUCsZzfrHt1JxNuhCjVZuO41tqJA6WuVQ%2BKWeLGaXFIRkjLhwaKr%2Bj37jvI5ZJ55Hl7ArkW7xGbKtn%2B2%2BM%2Bc8iFdJFuT%2F3nCwh4IZW15wD%2BNWWtD0KNO9kBgZbk6Tl99eTDRPqum%2Bizr1VxoRdksHQBllBcqUB26TxyYW8LrK30dfzlF5NiA%2BcxQLaAN1IbOHneoN%2FN%2BNcM6DRcD1hQJmOQ4yWYRQXAq7wwqL2OxAY6pgFA7GaCYA2QAitrdsGo1QdYWB7vLlET4QRH83t7is3kkTwue%2FtD77%2BdQWJsDJSWMrfr1j%2BXWYI11r2ODrKzmAsMCZBdWWalKgZueM4WwaV619DB1N%2F9tB6l5eywzpa%2F82It4Vbdrd2j8cSpdsNT6yVnDcAMlg19Ad%2F7%2FDdePOSpXOGrxHNSYEZnBS8o8gjMXvw6VgQ7PreoiqVrj%2BW3HSFUqjdGrBtu&X-Amz-Signature=414fcca04dfbbf565cd3e8a14f198e86e9bcf417ef4a2183c611ebe41cf68ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CB5IIH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHSidiXCr2RsMvEuxi6igwdsVZ7G9aP8ZxqJFnoKySinAiAnugk73tgrhamHxtEbvAn5%2BY9NSEaJpFYhA3C2gORtqir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCJRlyx5hmf57oRdTKtwDEZyRGMTYaA3iC4pkma1Gd663UArGWf1G3tMS7NrBbJu0%2FNhSM45cBagg39NYxpQN1bsz6Py7XeRLGaAnK4fv5ydoQfdKitPSuOq22ureS%2BySgHKyr5c%2Fo8vuQ7dDd9mRlFXv0zzoguH1mn8PVwFV7nE9HdrQYJbPGwbfvatPWcftFCnrGYfHmPbm37MvGFuwwOEEbiHFlKgzrPEfoiaIMdDiFc5gqsL3Fs85xv6s2OlnyB0yrItias37WYQ6VbQALHcgapcMSC3HT%2BEcpYfuZdaR1HEkXUhlq4pctLWmTO1Bc9RwYWw8ycUCJ4zCLgGcKyYLpXr2l17xlKXOI76%2BnYWXM57EIc8X%2FFzlnbarXFjINJ%2BnktIQQpfeQbxguOyylzZKOec6vy8RxoYUzC480D2FRxUCsZzfrHt1JxNuhCjVZuO41tqJA6WuVQ%2BKWeLGaXFIRkjLhwaKr%2Bj37jvI5ZJ55Hl7ArkW7xGbKtn%2B2%2BM%2Bc8iFdJFuT%2F3nCwh4IZW15wD%2BNWWtD0KNO9kBgZbk6Tl99eTDRPqum%2Bizr1VxoRdksHQBllBcqUB26TxyYW8LrK30dfzlF5NiA%2BcxQLaAN1IbOHneoN%2FN%2BNcM6DRcD1hQJmOQ4yWYRQXAq7wwqL2OxAY6pgFA7GaCYA2QAitrdsGo1QdYWB7vLlET4QRH83t7is3kkTwue%2FtD77%2BdQWJsDJSWMrfr1j%2BXWYI11r2ODrKzmAsMCZBdWWalKgZueM4WwaV619DB1N%2F9tB6l5eywzpa%2F82It4Vbdrd2j8cSpdsNT6yVnDcAMlg19Ad%2F7%2FDdePOSpXOGrxHNSYEZnBS8o8gjMXvw6VgQ7PreoiqVrj%2BW3HSFUqjdGrBtu&X-Amz-Signature=53a50c131691152f1aea5e1faad51c511a06fc0959619484b57b886e9aeefd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
