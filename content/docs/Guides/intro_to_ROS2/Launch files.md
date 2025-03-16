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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WEVK4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0aGd71OPkpPHW8miV8un8Yamy4x%2F%2FUbXYp%2F%2F7mkzX8AiB4zN3rmvY5NIXaaYT1UnRk%2Bv25Drc1sYrWcv%2FX0ENVfCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMqaIN9mo%2F%2BrdH1PJLKtwDAHQn8PuZ0qqdMrIhP12fehQ%2BMQpXv6c4NOpnio0nL%2Ftr6NIL0zOQ%2FFxxX84v%2BY6m2Z4%2Fom0myzsCA1t5Z5i38s7Yz0klgNVRIWd3nlYwwN58rbTM4anNNC6%2BEEf77QmUVyhZDkSDPt4oMnFmUU52ky0Dz89ICHbYL9fzpmFAYX%2FjwaKLkHrSrR7BAvaTI4M7F0ZyOPcIGQODzjx%2Bv4Y0OMqotyiYuHYX4ZvxJoZa2pe4kx0WjQatGf3HZ%2FXtpUKjyJaeJGZWPYdkJRvdSFYKqj9UE9K7PTK7vwW6GRSsnL9HjDVbgesRmqYx4vU6M4j7xRIQyBZb9BDaw6A%2FtM5iXtShKOQS1hAxw1kz2478CSGA9AZfPy%2B7U3aVUTnpgJFj3yq1irjb%2F6o2RT6ixyA2ayHAZnJB9ZtHt4IUFehZpONog8PecJW8%2F7678rWxcO46z8RAuWM8a7iYcIrJR7BmmtG%2BLVH0vvdNNfox6UI9jUH1UKG9QpAtOeUT2u4oSQ1SsHQe4e3Kt8wwDkZ%2BSbJOGes6zffLbxWywswptoqMc%2BUdeVcoci1Wt7v87hQIcKxSiDOtioR6chbOHI7eNKVSI%2FxzdaPzqpUC5IM7uiJlIKHTnOfhyOrLs9xFjtMwm9javgY6pgETX0EW0t9PYXyOwpNKbsld%2F9%2BbPeqRiWgHF0khqI6Qn%2FI2jnbeDOSEg%2FgHzK7%2FyxfmEGOOlwYDF2GMC0mE5xadSz%2F3%2FXRVzAvR6OBXbagRAIKym70lQN0fqM9NUTs8BAcOFhljA6llh31GQNHC5eHRV6LmOkfglVV43H3oI3ocg6LJn5PaevPtANmOtuI1gP7474IdoRnRcjNmHvWmeeicNy8gJbKy&X-Amz-Signature=2a6f34952531729783ddd6af0b997d4f309f7ca0b83586f3a27e7deab50d5ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WEVK4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0aGd71OPkpPHW8miV8un8Yamy4x%2F%2FUbXYp%2F%2F7mkzX8AiB4zN3rmvY5NIXaaYT1UnRk%2Bv25Drc1sYrWcv%2FX0ENVfCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMqaIN9mo%2F%2BrdH1PJLKtwDAHQn8PuZ0qqdMrIhP12fehQ%2BMQpXv6c4NOpnio0nL%2Ftr6NIL0zOQ%2FFxxX84v%2BY6m2Z4%2Fom0myzsCA1t5Z5i38s7Yz0klgNVRIWd3nlYwwN58rbTM4anNNC6%2BEEf77QmUVyhZDkSDPt4oMnFmUU52ky0Dz89ICHbYL9fzpmFAYX%2FjwaKLkHrSrR7BAvaTI4M7F0ZyOPcIGQODzjx%2Bv4Y0OMqotyiYuHYX4ZvxJoZa2pe4kx0WjQatGf3HZ%2FXtpUKjyJaeJGZWPYdkJRvdSFYKqj9UE9K7PTK7vwW6GRSsnL9HjDVbgesRmqYx4vU6M4j7xRIQyBZb9BDaw6A%2FtM5iXtShKOQS1hAxw1kz2478CSGA9AZfPy%2B7U3aVUTnpgJFj3yq1irjb%2F6o2RT6ixyA2ayHAZnJB9ZtHt4IUFehZpONog8PecJW8%2F7678rWxcO46z8RAuWM8a7iYcIrJR7BmmtG%2BLVH0vvdNNfox6UI9jUH1UKG9QpAtOeUT2u4oSQ1SsHQe4e3Kt8wwDkZ%2BSbJOGes6zffLbxWywswptoqMc%2BUdeVcoci1Wt7v87hQIcKxSiDOtioR6chbOHI7eNKVSI%2FxzdaPzqpUC5IM7uiJlIKHTnOfhyOrLs9xFjtMwm9javgY6pgETX0EW0t9PYXyOwpNKbsld%2F9%2BbPeqRiWgHF0khqI6Qn%2FI2jnbeDOSEg%2FgHzK7%2FyxfmEGOOlwYDF2GMC0mE5xadSz%2F3%2FXRVzAvR6OBXbagRAIKym70lQN0fqM9NUTs8BAcOFhljA6llh31GQNHC5eHRV6LmOkfglVV43H3oI3ocg6LJn5PaevPtANmOtuI1gP7474IdoRnRcjNmHvWmeeicNy8gJbKy&X-Amz-Signature=fcbe9b17aecd51d4b0e2a347de4e743740db798537da2fb60b2e6814129bc4c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WEVK4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0aGd71OPkpPHW8miV8un8Yamy4x%2F%2FUbXYp%2F%2F7mkzX8AiB4zN3rmvY5NIXaaYT1UnRk%2Bv25Drc1sYrWcv%2FX0ENVfCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMqaIN9mo%2F%2BrdH1PJLKtwDAHQn8PuZ0qqdMrIhP12fehQ%2BMQpXv6c4NOpnio0nL%2Ftr6NIL0zOQ%2FFxxX84v%2BY6m2Z4%2Fom0myzsCA1t5Z5i38s7Yz0klgNVRIWd3nlYwwN58rbTM4anNNC6%2BEEf77QmUVyhZDkSDPt4oMnFmUU52ky0Dz89ICHbYL9fzpmFAYX%2FjwaKLkHrSrR7BAvaTI4M7F0ZyOPcIGQODzjx%2Bv4Y0OMqotyiYuHYX4ZvxJoZa2pe4kx0WjQatGf3HZ%2FXtpUKjyJaeJGZWPYdkJRvdSFYKqj9UE9K7PTK7vwW6GRSsnL9HjDVbgesRmqYx4vU6M4j7xRIQyBZb9BDaw6A%2FtM5iXtShKOQS1hAxw1kz2478CSGA9AZfPy%2B7U3aVUTnpgJFj3yq1irjb%2F6o2RT6ixyA2ayHAZnJB9ZtHt4IUFehZpONog8PecJW8%2F7678rWxcO46z8RAuWM8a7iYcIrJR7BmmtG%2BLVH0vvdNNfox6UI9jUH1UKG9QpAtOeUT2u4oSQ1SsHQe4e3Kt8wwDkZ%2BSbJOGes6zffLbxWywswptoqMc%2BUdeVcoci1Wt7v87hQIcKxSiDOtioR6chbOHI7eNKVSI%2FxzdaPzqpUC5IM7uiJlIKHTnOfhyOrLs9xFjtMwm9javgY6pgETX0EW0t9PYXyOwpNKbsld%2F9%2BbPeqRiWgHF0khqI6Qn%2FI2jnbeDOSEg%2FgHzK7%2FyxfmEGOOlwYDF2GMC0mE5xadSz%2F3%2FXRVzAvR6OBXbagRAIKym70lQN0fqM9NUTs8BAcOFhljA6llh31GQNHC5eHRV6LmOkfglVV43H3oI3ocg6LJn5PaevPtANmOtuI1gP7474IdoRnRcjNmHvWmeeicNy8gJbKy&X-Amz-Signature=b765eefe1ee32cc7552de6c1ddae4b3f980115cf3aa9597a159c9549952ca10d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
