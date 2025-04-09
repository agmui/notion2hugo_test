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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLD4T5L4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE8y3MhufuErH8TBa%2FChxsq8Y6meopBBtVjCJl2P7iCrAiBtNRJvghEEJreFcespHIeBvm6H%2FwmjK5GaGzxi0MNnDiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVX%2Byk0q0FIkWVABKtwDQzJks06r%2FB5CZUKCpPx1BZ2ReVgth3MS4j65SuZWRijEVVWrqT5ac73BO9D2vnUeiuk2mRiME%2BUsPc5jJVFTC8lLuboA%2Fy86ip0c6XA7iSCLr%2BMr%2FomqYHXyyXNuPl%2Bzb9VQNm1qKjqNDEOtH4udHxCy1Wv2LnQ4DIhjLy5UTWbJ1PA%2BSkR1JJcbsKnup8vqo95hohBM%2Fa0FQT1VDsZfgKn8Ymeag5PWX97Rlt%2FjZ4467Wp2S5q4QdGuuXjjq9yByEV3we5JrxduS7guzDndyqcjbIUW4%2BB3FNcbbINtoFNIX5n9rdF6fxQKll%2BOcEIwqv4gAU1CSQ9czR9VSgqGZ9hLAYI08TdRDq7im5bi8%2BqMw08uoGJqaBJoPGR0WFuocCYr8JIAtj0uWr6BI8hf2uD8A1Rg8ERJx2SZ4RnOCEZN4ryg11PdWFSTRh8TR%2B3kmniAm699XCu76B36rXgNu0JqeIhUviKR%2BqNwvrAvFUpQ1KD2SK4Gej5ZY65rYMSuX%2BrX%2FNRJUVN7lxSFC8k9jWT9q38GCScd7HMfxwS90JwG74qqCgqhtKiKQwu8hQEuTR7uqHKW9STv8j2pnVCydpEeSrnPJ8iTEp2FpbIxtvz8eayabEH%2BL%2FKEFRgwlq%2FbvwY6pgF%2B3sguJ4plxT8kTaXjtjVHczfnkKmctO2e1yj1lE0NHlGZZuBjlS8bsV0IjO%2F0NJnKfKvp6X2fUJNJoYD04iOBwuUX78kwrZYZH2eQUHI4Jimg8LQTM1q6jahwh4ncj0LZwft6%2BoLdS95WLncg%2BB%2BlNElW5iBT4h4dlnHMIN5vQJnpINmPB6Gv9KVJ4mZmAEgff7f7soe8U%2F69m83E%2FSMoRd6QrQJL&X-Amz-Signature=54f5499ddbb728bfb0d162488c596b83e9745aaa6c0dd790a99b414a02e92ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLD4T5L4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE8y3MhufuErH8TBa%2FChxsq8Y6meopBBtVjCJl2P7iCrAiBtNRJvghEEJreFcespHIeBvm6H%2FwmjK5GaGzxi0MNnDiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVX%2Byk0q0FIkWVABKtwDQzJks06r%2FB5CZUKCpPx1BZ2ReVgth3MS4j65SuZWRijEVVWrqT5ac73BO9D2vnUeiuk2mRiME%2BUsPc5jJVFTC8lLuboA%2Fy86ip0c6XA7iSCLr%2BMr%2FomqYHXyyXNuPl%2Bzb9VQNm1qKjqNDEOtH4udHxCy1Wv2LnQ4DIhjLy5UTWbJ1PA%2BSkR1JJcbsKnup8vqo95hohBM%2Fa0FQT1VDsZfgKn8Ymeag5PWX97Rlt%2FjZ4467Wp2S5q4QdGuuXjjq9yByEV3we5JrxduS7guzDndyqcjbIUW4%2BB3FNcbbINtoFNIX5n9rdF6fxQKll%2BOcEIwqv4gAU1CSQ9czR9VSgqGZ9hLAYI08TdRDq7im5bi8%2BqMw08uoGJqaBJoPGR0WFuocCYr8JIAtj0uWr6BI8hf2uD8A1Rg8ERJx2SZ4RnOCEZN4ryg11PdWFSTRh8TR%2B3kmniAm699XCu76B36rXgNu0JqeIhUviKR%2BqNwvrAvFUpQ1KD2SK4Gej5ZY65rYMSuX%2BrX%2FNRJUVN7lxSFC8k9jWT9q38GCScd7HMfxwS90JwG74qqCgqhtKiKQwu8hQEuTR7uqHKW9STv8j2pnVCydpEeSrnPJ8iTEp2FpbIxtvz8eayabEH%2BL%2FKEFRgwlq%2FbvwY6pgF%2B3sguJ4plxT8kTaXjtjVHczfnkKmctO2e1yj1lE0NHlGZZuBjlS8bsV0IjO%2F0NJnKfKvp6X2fUJNJoYD04iOBwuUX78kwrZYZH2eQUHI4Jimg8LQTM1q6jahwh4ncj0LZwft6%2BoLdS95WLncg%2BB%2BlNElW5iBT4h4dlnHMIN5vQJnpINmPB6Gv9KVJ4mZmAEgff7f7soe8U%2F69m83E%2FSMoRd6QrQJL&X-Amz-Signature=d6887e88429caf2c744abb0c510a81e7e82e84559818b69492ab8799940a1d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLD4T5L4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE8y3MhufuErH8TBa%2FChxsq8Y6meopBBtVjCJl2P7iCrAiBtNRJvghEEJreFcespHIeBvm6H%2FwmjK5GaGzxi0MNnDiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVX%2Byk0q0FIkWVABKtwDQzJks06r%2FB5CZUKCpPx1BZ2ReVgth3MS4j65SuZWRijEVVWrqT5ac73BO9D2vnUeiuk2mRiME%2BUsPc5jJVFTC8lLuboA%2Fy86ip0c6XA7iSCLr%2BMr%2FomqYHXyyXNuPl%2Bzb9VQNm1qKjqNDEOtH4udHxCy1Wv2LnQ4DIhjLy5UTWbJ1PA%2BSkR1JJcbsKnup8vqo95hohBM%2Fa0FQT1VDsZfgKn8Ymeag5PWX97Rlt%2FjZ4467Wp2S5q4QdGuuXjjq9yByEV3we5JrxduS7guzDndyqcjbIUW4%2BB3FNcbbINtoFNIX5n9rdF6fxQKll%2BOcEIwqv4gAU1CSQ9czR9VSgqGZ9hLAYI08TdRDq7im5bi8%2BqMw08uoGJqaBJoPGR0WFuocCYr8JIAtj0uWr6BI8hf2uD8A1Rg8ERJx2SZ4RnOCEZN4ryg11PdWFSTRh8TR%2B3kmniAm699XCu76B36rXgNu0JqeIhUviKR%2BqNwvrAvFUpQ1KD2SK4Gej5ZY65rYMSuX%2BrX%2FNRJUVN7lxSFC8k9jWT9q38GCScd7HMfxwS90JwG74qqCgqhtKiKQwu8hQEuTR7uqHKW9STv8j2pnVCydpEeSrnPJ8iTEp2FpbIxtvz8eayabEH%2BL%2FKEFRgwlq%2FbvwY6pgF%2B3sguJ4plxT8kTaXjtjVHczfnkKmctO2e1yj1lE0NHlGZZuBjlS8bsV0IjO%2F0NJnKfKvp6X2fUJNJoYD04iOBwuUX78kwrZYZH2eQUHI4Jimg8LQTM1q6jahwh4ncj0LZwft6%2BoLdS95WLncg%2BB%2BlNElW5iBT4h4dlnHMIN5vQJnpINmPB6Gv9KVJ4mZmAEgff7f7soe8U%2F69m83E%2FSMoRd6QrQJL&X-Amz-Signature=05bf63ca35d4d5a8da5c288d40d653ded71a4a4fa14b320b91f877e755c7eb1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
