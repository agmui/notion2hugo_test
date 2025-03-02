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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6UQ7LNN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDQvFJn9DXpzBQnMImxDtFJNUu2LuGG5pPr%2BGhMR6A7IQIhAPcgRu5Wvsd9lAJISVW85D%2F08l%2F%2Bdez06KwmFPPVJg%2FZKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwMxFALIwwCHTMw4Qq3AOmI1shqLKjKx8wOlHtr5%2F5XfQDJp%2FUaz8NskrtoS5WZh3GGEFAxbtBqtuRmEInxyrcG3IgbOE0JdmopCv9fJucqsPYgoWdvOILmZvWFn9R7efbML0USNu8dqDA4ScFiBugkMYjJvF0141UfU7hiwgelTW1Cp6p1TtUR4uKYNHZ6wiWsXz5EzJZLOQTHlircBLXLkf%2FzMdd%2BnlqB31iN1otQSKb3pQCwQgq6jxiWHjejPb9FvkzhnhyFVVmC5LMPKaDr%2FNv7w3qbL%2F3Kv38kHLBu2YpYns9Cicz7CiiGhJFw%2Bga%2BkaYyAFbxczzebnon22wLirl6G7tpGKph1qxRu3tEppkGyipRAOuB6eXRuEyWAgtNrc5EUkT0CNW9xmAnGj8AyyQfvvw9kvaHOi8E8I7ViHCRGS8wXeNP3u6fhtv1Z02WS9aucIRH0nn8lmPWCtEDCVgxuiSbXvSgkxKPcda70njwQGQnyOZP%2F6HSzbS%2FFK3B2%2BOy7Mm1WiacMWG5kQQT3h%2FUM5nqRZl7wv%2FM5v7RPwki4wh5WFwuBvU0iUyjj4vIwjYR3fK8XbCG8P1uTzNA5m7g8z7wSLlk5n1lKYabutzSI%2FnNvC2ENBEhIf2Vl8XNPDWzXd5TqbD%2FTCg9o6%2BBjqkAXH4MP56qiBhb3G3QrdZb2og8ZyyBu%2BRR%2FGOJNgr3NCL028tdGNbdDY7OiK1mrY6Vkm%2BFFESv1tJQ2MSGE4Py86nipOZPXJ%2F5oAkGkjQWDhyQWL5mGBcph%2Bo4v8ScJbBs%2BoCzXCiFml%2FaUJ7QW4Ej0DIZeV4ZUzxunj1WO7rkN57Dvy1gRJtI6kPLRnmZodZkX33xjzofknEgACfCDlZxRamA2A8&X-Amz-Signature=bef6a321a077f4d273640b587c773973eb56accb68daacbf7e5d9556fc476134&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6UQ7LNN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDQvFJn9DXpzBQnMImxDtFJNUu2LuGG5pPr%2BGhMR6A7IQIhAPcgRu5Wvsd9lAJISVW85D%2F08l%2F%2Bdez06KwmFPPVJg%2FZKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwMxFALIwwCHTMw4Qq3AOmI1shqLKjKx8wOlHtr5%2F5XfQDJp%2FUaz8NskrtoS5WZh3GGEFAxbtBqtuRmEInxyrcG3IgbOE0JdmopCv9fJucqsPYgoWdvOILmZvWFn9R7efbML0USNu8dqDA4ScFiBugkMYjJvF0141UfU7hiwgelTW1Cp6p1TtUR4uKYNHZ6wiWsXz5EzJZLOQTHlircBLXLkf%2FzMdd%2BnlqB31iN1otQSKb3pQCwQgq6jxiWHjejPb9FvkzhnhyFVVmC5LMPKaDr%2FNv7w3qbL%2F3Kv38kHLBu2YpYns9Cicz7CiiGhJFw%2Bga%2BkaYyAFbxczzebnon22wLirl6G7tpGKph1qxRu3tEppkGyipRAOuB6eXRuEyWAgtNrc5EUkT0CNW9xmAnGj8AyyQfvvw9kvaHOi8E8I7ViHCRGS8wXeNP3u6fhtv1Z02WS9aucIRH0nn8lmPWCtEDCVgxuiSbXvSgkxKPcda70njwQGQnyOZP%2F6HSzbS%2FFK3B2%2BOy7Mm1WiacMWG5kQQT3h%2FUM5nqRZl7wv%2FM5v7RPwki4wh5WFwuBvU0iUyjj4vIwjYR3fK8XbCG8P1uTzNA5m7g8z7wSLlk5n1lKYabutzSI%2FnNvC2ENBEhIf2Vl8XNPDWzXd5TqbD%2FTCg9o6%2BBjqkAXH4MP56qiBhb3G3QrdZb2og8ZyyBu%2BRR%2FGOJNgr3NCL028tdGNbdDY7OiK1mrY6Vkm%2BFFESv1tJQ2MSGE4Py86nipOZPXJ%2F5oAkGkjQWDhyQWL5mGBcph%2Bo4v8ScJbBs%2BoCzXCiFml%2FaUJ7QW4Ej0DIZeV4ZUzxunj1WO7rkN57Dvy1gRJtI6kPLRnmZodZkX33xjzofknEgACfCDlZxRamA2A8&X-Amz-Signature=c25fe500c6c50f7b3f2189241aceede0f48c0c6535219586503b92cd63a71780&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6UQ7LNN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDQvFJn9DXpzBQnMImxDtFJNUu2LuGG5pPr%2BGhMR6A7IQIhAPcgRu5Wvsd9lAJISVW85D%2F08l%2F%2Bdez06KwmFPPVJg%2FZKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwMxFALIwwCHTMw4Qq3AOmI1shqLKjKx8wOlHtr5%2F5XfQDJp%2FUaz8NskrtoS5WZh3GGEFAxbtBqtuRmEInxyrcG3IgbOE0JdmopCv9fJucqsPYgoWdvOILmZvWFn9R7efbML0USNu8dqDA4ScFiBugkMYjJvF0141UfU7hiwgelTW1Cp6p1TtUR4uKYNHZ6wiWsXz5EzJZLOQTHlircBLXLkf%2FzMdd%2BnlqB31iN1otQSKb3pQCwQgq6jxiWHjejPb9FvkzhnhyFVVmC5LMPKaDr%2FNv7w3qbL%2F3Kv38kHLBu2YpYns9Cicz7CiiGhJFw%2Bga%2BkaYyAFbxczzebnon22wLirl6G7tpGKph1qxRu3tEppkGyipRAOuB6eXRuEyWAgtNrc5EUkT0CNW9xmAnGj8AyyQfvvw9kvaHOi8E8I7ViHCRGS8wXeNP3u6fhtv1Z02WS9aucIRH0nn8lmPWCtEDCVgxuiSbXvSgkxKPcda70njwQGQnyOZP%2F6HSzbS%2FFK3B2%2BOy7Mm1WiacMWG5kQQT3h%2FUM5nqRZl7wv%2FM5v7RPwki4wh5WFwuBvU0iUyjj4vIwjYR3fK8XbCG8P1uTzNA5m7g8z7wSLlk5n1lKYabutzSI%2FnNvC2ENBEhIf2Vl8XNPDWzXd5TqbD%2FTCg9o6%2BBjqkAXH4MP56qiBhb3G3QrdZb2og8ZyyBu%2BRR%2FGOJNgr3NCL028tdGNbdDY7OiK1mrY6Vkm%2BFFESv1tJQ2MSGE4Py86nipOZPXJ%2F5oAkGkjQWDhyQWL5mGBcph%2Bo4v8ScJbBs%2BoCzXCiFml%2FaUJ7QW4Ej0DIZeV4ZUzxunj1WO7rkN57Dvy1gRJtI6kPLRnmZodZkX33xjzofknEgACfCDlZxRamA2A8&X-Amz-Signature=4658fd1f249eeb073081b0f583b779c215f0991f137e43645dc68a472ccf899e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
