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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU7Z2C2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC1eyqUbk2toDDraf5NzNmp0PKHhHFnCUuJcMImEBlxgQIhAPa5cXmlrZiWm1yH4ZYFFf6ytWZQUtjnaN1kQ1K69q3fKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn76TDu%2FoSOak5y9Mq3AOt2skZW5SXxb%2FPZnw7bUDP%2FvrzqvlBSzkTw0WEiQ39p1gWvv4EavhD2rnZE0%2F2o7Nu%2F0tkdhszVKMfQGpkPpm1UoXW4zFwEisIW0uGCA%2BbHG%2Bfo2fa36DXlnV7QBrEZhabE4GuSCuJK0MeD4ewJDwRErtgbXdVcV4O%2Fh4fLIHbn%2FJGW%2Bmk0hAWcgwo17xbIassWOhPwlt8%2FCZx%2BwqUiERXGqX7xsPs6q5xUWeIue8yqM1wHiZh6bS0yFIDxLQMZi170t4F%2FMDW9bnwSs%2FcXAgFfAji2l%2FK7UMPO%2FPvq%2Fa0aGcZXTVhK%2FNtTpREYns7a5kKa6XYuZ3ld5u%2Bu9Di%2Bs23%2Fs5jN8CITqWRCnZEFmwBEUSr%2B4XWL02zIhvsfWlrpVXkms5SppTEK0rzurk9tQYpH1sGWCx%2BUFiNwN4tLkisEYFEINjHu9TmiCIC6y2pX7TxsgNiW%2FiBrZYW9%2BfZX3eLawTn2jq1%2FHZTjVGyXZf4H4qLcY2k%2B2q57155K2gV5KYGuqBvwkSv3M%2BMUUyIFfpec4VYBnWfYfE8%2FlnSjQvcunosVEe7x8u3DfVzrjvKwsmKfY7%2BExmA9DbZuL8k3dmI7rEdZ5%2BjsYl%2FIGBGx0SibLmYM0zlH0B4fX2dUDCq4ca%2BBjqkAar0hBSKJxKr42SPdttMMoY7tHneMKdwgrPHMpz8VklKH4TNuyP%2F%2FR0Z%2Ff6zC9mslPTnmdG3PMonlZCKevA%2BoaJfZN2z%2Fr1zQk135MESxISrStRyR0wMgMiGKyW%2B%2FmUrLENcBRXxD1OEylVEjBzPWuSLjSy5vWRNCdI10E77ygLc8sYYzkld7Exh6xQkdznv5Fvf6cKdBfKnJ32BMv55jMuKXNXJ&X-Amz-Signature=19eec50eda8ee37330a46872d3f2a735b9f7844dcd69c9a8f7fd4051efbdb5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU7Z2C2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC1eyqUbk2toDDraf5NzNmp0PKHhHFnCUuJcMImEBlxgQIhAPa5cXmlrZiWm1yH4ZYFFf6ytWZQUtjnaN1kQ1K69q3fKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn76TDu%2FoSOak5y9Mq3AOt2skZW5SXxb%2FPZnw7bUDP%2FvrzqvlBSzkTw0WEiQ39p1gWvv4EavhD2rnZE0%2F2o7Nu%2F0tkdhszVKMfQGpkPpm1UoXW4zFwEisIW0uGCA%2BbHG%2Bfo2fa36DXlnV7QBrEZhabE4GuSCuJK0MeD4ewJDwRErtgbXdVcV4O%2Fh4fLIHbn%2FJGW%2Bmk0hAWcgwo17xbIassWOhPwlt8%2FCZx%2BwqUiERXGqX7xsPs6q5xUWeIue8yqM1wHiZh6bS0yFIDxLQMZi170t4F%2FMDW9bnwSs%2FcXAgFfAji2l%2FK7UMPO%2FPvq%2Fa0aGcZXTVhK%2FNtTpREYns7a5kKa6XYuZ3ld5u%2Bu9Di%2Bs23%2Fs5jN8CITqWRCnZEFmwBEUSr%2B4XWL02zIhvsfWlrpVXkms5SppTEK0rzurk9tQYpH1sGWCx%2BUFiNwN4tLkisEYFEINjHu9TmiCIC6y2pX7TxsgNiW%2FiBrZYW9%2BfZX3eLawTn2jq1%2FHZTjVGyXZf4H4qLcY2k%2B2q57155K2gV5KYGuqBvwkSv3M%2BMUUyIFfpec4VYBnWfYfE8%2FlnSjQvcunosVEe7x8u3DfVzrjvKwsmKfY7%2BExmA9DbZuL8k3dmI7rEdZ5%2BjsYl%2FIGBGx0SibLmYM0zlH0B4fX2dUDCq4ca%2BBjqkAar0hBSKJxKr42SPdttMMoY7tHneMKdwgrPHMpz8VklKH4TNuyP%2F%2FR0Z%2Ff6zC9mslPTnmdG3PMonlZCKevA%2BoaJfZN2z%2Fr1zQk135MESxISrStRyR0wMgMiGKyW%2B%2FmUrLENcBRXxD1OEylVEjBzPWuSLjSy5vWRNCdI10E77ygLc8sYYzkld7Exh6xQkdznv5Fvf6cKdBfKnJ32BMv55jMuKXNXJ&X-Amz-Signature=9d5e6bdbc19d85cf8de160322c50d38bc4a802bd803365e5f6648185060279bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU7Z2C2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC1eyqUbk2toDDraf5NzNmp0PKHhHFnCUuJcMImEBlxgQIhAPa5cXmlrZiWm1yH4ZYFFf6ytWZQUtjnaN1kQ1K69q3fKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn76TDu%2FoSOak5y9Mq3AOt2skZW5SXxb%2FPZnw7bUDP%2FvrzqvlBSzkTw0WEiQ39p1gWvv4EavhD2rnZE0%2F2o7Nu%2F0tkdhszVKMfQGpkPpm1UoXW4zFwEisIW0uGCA%2BbHG%2Bfo2fa36DXlnV7QBrEZhabE4GuSCuJK0MeD4ewJDwRErtgbXdVcV4O%2Fh4fLIHbn%2FJGW%2Bmk0hAWcgwo17xbIassWOhPwlt8%2FCZx%2BwqUiERXGqX7xsPs6q5xUWeIue8yqM1wHiZh6bS0yFIDxLQMZi170t4F%2FMDW9bnwSs%2FcXAgFfAji2l%2FK7UMPO%2FPvq%2Fa0aGcZXTVhK%2FNtTpREYns7a5kKa6XYuZ3ld5u%2Bu9Di%2Bs23%2Fs5jN8CITqWRCnZEFmwBEUSr%2B4XWL02zIhvsfWlrpVXkms5SppTEK0rzurk9tQYpH1sGWCx%2BUFiNwN4tLkisEYFEINjHu9TmiCIC6y2pX7TxsgNiW%2FiBrZYW9%2BfZX3eLawTn2jq1%2FHZTjVGyXZf4H4qLcY2k%2B2q57155K2gV5KYGuqBvwkSv3M%2BMUUyIFfpec4VYBnWfYfE8%2FlnSjQvcunosVEe7x8u3DfVzrjvKwsmKfY7%2BExmA9DbZuL8k3dmI7rEdZ5%2BjsYl%2FIGBGx0SibLmYM0zlH0B4fX2dUDCq4ca%2BBjqkAar0hBSKJxKr42SPdttMMoY7tHneMKdwgrPHMpz8VklKH4TNuyP%2F%2FR0Z%2Ff6zC9mslPTnmdG3PMonlZCKevA%2BoaJfZN2z%2Fr1zQk135MESxISrStRyR0wMgMiGKyW%2B%2FmUrLENcBRXxD1OEylVEjBzPWuSLjSy5vWRNCdI10E77ygLc8sYYzkld7Exh6xQkdznv5Fvf6cKdBfKnJ32BMv55jMuKXNXJ&X-Amz-Signature=6fde771a2403716a99d76398e91916e1bc421d603d0b60586d7413df27e8dcf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
