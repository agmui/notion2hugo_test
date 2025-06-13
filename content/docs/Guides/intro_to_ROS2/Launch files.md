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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHJN5UZ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDItOCRXf%2F1XKEW5SNRHBRLIT%2BHNTLeJHzaPDPKiVkzSwIhAIDrkaj4FhY8XF4qa1iqT2NIiIuaM5%2FvVWAHDUckMLAuKv8DCBsQABoMNjM3NDIzMTgzODA1Igx7mVvzqc2T3JR8BTIq3ANHOu7rnDYh48pYX4OX1ThFosYisqkz6qAUJxTFwbD55%2FgDzNyaNJFVJ75v0MIvz6%2B%2FZ3ZScvTlkjboAb9H%2Bz746P14yxRgySNp9SDky11YN1a94miuJppcfKI%2B%2F8syhW%2BjTlv31tqr5x%2FjPIAQF4FFArICg4O7G274FApgA%2BlBX4h1zQYLi%2F8bhkMqWx4n6QkQSAnmucCShrwtddCiRaztBn0fVV1hur6IA3ASu1%2FznJ3eiKT4aJ4r0rOcspivxp4d%2FiK84pCY6jiEJjBrFEOIanl1k5Yk%2FUUPnX3AmLSsDqnw%2BQ6uEt0sYJ%2FitIle3ZZhefY9%2FfflJdqJOiXOje%2F%2FJIHX9slFtDvnrPUf3hFkWXESM38xLp%2FkQWQkqJ0BrmgVI4wmEAgTrW9xj4%2BM93N5QGTs2hqleObDEVvVNB6e6drNxvB8OHmjFgCBkdTBTJAn3EqMG0YugI5vGokhq4OI8UgwPar%2BqqcX7DEjLZ05BIkuqkZfJPh33SRj%2FMEf%2Fa2QLxbFsZJKDPkQo%2BusqR9dz3zilJOccirRTCQ4%2FvJHnsIPDfrZhs2%2FAsPs7UWhIYh9mfrZba77veRg7I2Ha%2BnZX8VzQueTxDe2h%2BQkRrp1tYRUsVuzYV4TWTIztjDy0rHCBjqkAWeVQ1MyDQbAqgQsxaMWP1Pt7mpfHHZ8GVfyblU9qtBV5QTUjAGlpdiCueOPdBFZbMRKzUwKCejkN7OECGSTYB9aqOvaei%2FahcU6UdPrYm7Ysl8nguojetj7%2BHT5HCuMWrkjliinTx%2BWR1WTy9SvHQTVvgf4ZRN3O%2F7UCVNHrFx2auoKUMMkBTIV%2F5bxeZc0dvcCSUxVkjS6Ld%2BU1GVk37cClM56&X-Amz-Signature=ab919dc0cae2a19d484c9b989d09cd8235b95a020b7677aaf93ec2bbf0e069c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHJN5UZ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDItOCRXf%2F1XKEW5SNRHBRLIT%2BHNTLeJHzaPDPKiVkzSwIhAIDrkaj4FhY8XF4qa1iqT2NIiIuaM5%2FvVWAHDUckMLAuKv8DCBsQABoMNjM3NDIzMTgzODA1Igx7mVvzqc2T3JR8BTIq3ANHOu7rnDYh48pYX4OX1ThFosYisqkz6qAUJxTFwbD55%2FgDzNyaNJFVJ75v0MIvz6%2B%2FZ3ZScvTlkjboAb9H%2Bz746P14yxRgySNp9SDky11YN1a94miuJppcfKI%2B%2F8syhW%2BjTlv31tqr5x%2FjPIAQF4FFArICg4O7G274FApgA%2BlBX4h1zQYLi%2F8bhkMqWx4n6QkQSAnmucCShrwtddCiRaztBn0fVV1hur6IA3ASu1%2FznJ3eiKT4aJ4r0rOcspivxp4d%2FiK84pCY6jiEJjBrFEOIanl1k5Yk%2FUUPnX3AmLSsDqnw%2BQ6uEt0sYJ%2FitIle3ZZhefY9%2FfflJdqJOiXOje%2F%2FJIHX9slFtDvnrPUf3hFkWXESM38xLp%2FkQWQkqJ0BrmgVI4wmEAgTrW9xj4%2BM93N5QGTs2hqleObDEVvVNB6e6drNxvB8OHmjFgCBkdTBTJAn3EqMG0YugI5vGokhq4OI8UgwPar%2BqqcX7DEjLZ05BIkuqkZfJPh33SRj%2FMEf%2Fa2QLxbFsZJKDPkQo%2BusqR9dz3zilJOccirRTCQ4%2FvJHnsIPDfrZhs2%2FAsPs7UWhIYh9mfrZba77veRg7I2Ha%2BnZX8VzQueTxDe2h%2BQkRrp1tYRUsVuzYV4TWTIztjDy0rHCBjqkAWeVQ1MyDQbAqgQsxaMWP1Pt7mpfHHZ8GVfyblU9qtBV5QTUjAGlpdiCueOPdBFZbMRKzUwKCejkN7OECGSTYB9aqOvaei%2FahcU6UdPrYm7Ysl8nguojetj7%2BHT5HCuMWrkjliinTx%2BWR1WTy9SvHQTVvgf4ZRN3O%2F7UCVNHrFx2auoKUMMkBTIV%2F5bxeZc0dvcCSUxVkjS6Ld%2BU1GVk37cClM56&X-Amz-Signature=1d641cf11c775aa5e1a753c3be17e2f99f69df647c1df151c0e46cea08637459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHJN5UZ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDItOCRXf%2F1XKEW5SNRHBRLIT%2BHNTLeJHzaPDPKiVkzSwIhAIDrkaj4FhY8XF4qa1iqT2NIiIuaM5%2FvVWAHDUckMLAuKv8DCBsQABoMNjM3NDIzMTgzODA1Igx7mVvzqc2T3JR8BTIq3ANHOu7rnDYh48pYX4OX1ThFosYisqkz6qAUJxTFwbD55%2FgDzNyaNJFVJ75v0MIvz6%2B%2FZ3ZScvTlkjboAb9H%2Bz746P14yxRgySNp9SDky11YN1a94miuJppcfKI%2B%2F8syhW%2BjTlv31tqr5x%2FjPIAQF4FFArICg4O7G274FApgA%2BlBX4h1zQYLi%2F8bhkMqWx4n6QkQSAnmucCShrwtddCiRaztBn0fVV1hur6IA3ASu1%2FznJ3eiKT4aJ4r0rOcspivxp4d%2FiK84pCY6jiEJjBrFEOIanl1k5Yk%2FUUPnX3AmLSsDqnw%2BQ6uEt0sYJ%2FitIle3ZZhefY9%2FfflJdqJOiXOje%2F%2FJIHX9slFtDvnrPUf3hFkWXESM38xLp%2FkQWQkqJ0BrmgVI4wmEAgTrW9xj4%2BM93N5QGTs2hqleObDEVvVNB6e6drNxvB8OHmjFgCBkdTBTJAn3EqMG0YugI5vGokhq4OI8UgwPar%2BqqcX7DEjLZ05BIkuqkZfJPh33SRj%2FMEf%2Fa2QLxbFsZJKDPkQo%2BusqR9dz3zilJOccirRTCQ4%2FvJHnsIPDfrZhs2%2FAsPs7UWhIYh9mfrZba77veRg7I2Ha%2BnZX8VzQueTxDe2h%2BQkRrp1tYRUsVuzYV4TWTIztjDy0rHCBjqkAWeVQ1MyDQbAqgQsxaMWP1Pt7mpfHHZ8GVfyblU9qtBV5QTUjAGlpdiCueOPdBFZbMRKzUwKCejkN7OECGSTYB9aqOvaei%2FahcU6UdPrYm7Ysl8nguojetj7%2BHT5HCuMWrkjliinTx%2BWR1WTy9SvHQTVvgf4ZRN3O%2F7UCVNHrFx2auoKUMMkBTIV%2F5bxeZc0dvcCSUxVkjS6Ld%2BU1GVk37cClM56&X-Amz-Signature=bae30b0fd19b1fe9e8dd78c0cf40e3fe7bc0d1b95e03a760c48bad2ac7ed549a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
