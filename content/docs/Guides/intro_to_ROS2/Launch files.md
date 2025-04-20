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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DUJMW4C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGbFHcrL9BlYyO7n7FqxD0EDRZPOqsw7eTvysPyUTbCMAiAjTFbRTn5TzUrhi0Rlt25pk4JXhUaBvETs3%2FmrP8IGiiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTLtm6OwSPovFR8iKtwDoikk2ELgGrJMHZ4BXoIZHDbAaMLH%2FUcr9yTXllzKUWhItxbOQ2zNveWp%2BZj%2FUO4ISMyJIR%2Bw848Ms3inCyDIZlefU%2BXssXoLRBHygWKiSN2e%2BXxRNpm6%2FaUcptlK7JE6hbqrACzZM3VMcrRUYa0FtXfuQgQ9aPmVhpZiXDfWv6hlx5ipn7OREQ1hT%2B7ACtpqYPh%2BIHS%2FiOqc766GJIKA3JYFA2k190qop5TidNmqf0u%2F9Jaq%2BTC7y1nzKmR5G1lqtT5RugaLxiwQwHoYslgweP2PCo6APJQuCBNVPPjWXv3v2ftLayVupA28Jr8EmRU1sr6etG%2FDSs6hPo02yPcU%2B3386tOpvI7WyC%2FGNa8wSEdfih893ER57nGPh%2BxFxJPgz6Ey7YrHK0AXa1rHVQ4%2Fj9VwOMPc7nmruoOdREoh8iSFhvhGZu5Pvw1hRdaKZ%2FVBJxwQ3inDLJbkS4EOInrBp9SOjwdIG9Z%2FtcafU%2BxKHOXp05KwrVoeEUbSleQiXd9a7d6DFwpCiVlesjmI3bVI23ZLTBxbdjnNdpcgQoHv9c7WJhgENCdyIK1XI0GYA%2FzvWYlmyRpiS9lQ2qm650%2FWOdViRizccqThOZ%2FyG%2BmPttI8DvrOocKZH5emR2kw2I%2BUwAY6pgHrQ3ItScMhmT9%2FmgOoRJjvjPqOZ1r8ubKH1B6RX7c2qktbSmpt9CjJPWyLRLRPg2srIfOrr%2B8qzg1gR%2FvjswgDIzyCDv6jCDw%2FxDIClBmIqZNYv4e1XmQx5ex7i4NRgS7%2BfV0fDzHRTEjekaTi3pAQkOb529iqTLetsxf7v%2BxjqjLTvv5G%2BQjRXuvwNqrLKLCYVDel7x2W6bfRcwa2XbSbyOoZWhxv&X-Amz-Signature=3d83288e0aca34af3a5bdfc5c5110c9935527eeb76da117d4157b03b7f012cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DUJMW4C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGbFHcrL9BlYyO7n7FqxD0EDRZPOqsw7eTvysPyUTbCMAiAjTFbRTn5TzUrhi0Rlt25pk4JXhUaBvETs3%2FmrP8IGiiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTLtm6OwSPovFR8iKtwDoikk2ELgGrJMHZ4BXoIZHDbAaMLH%2FUcr9yTXllzKUWhItxbOQ2zNveWp%2BZj%2FUO4ISMyJIR%2Bw848Ms3inCyDIZlefU%2BXssXoLRBHygWKiSN2e%2BXxRNpm6%2FaUcptlK7JE6hbqrACzZM3VMcrRUYa0FtXfuQgQ9aPmVhpZiXDfWv6hlx5ipn7OREQ1hT%2B7ACtpqYPh%2BIHS%2FiOqc766GJIKA3JYFA2k190qop5TidNmqf0u%2F9Jaq%2BTC7y1nzKmR5G1lqtT5RugaLxiwQwHoYslgweP2PCo6APJQuCBNVPPjWXv3v2ftLayVupA28Jr8EmRU1sr6etG%2FDSs6hPo02yPcU%2B3386tOpvI7WyC%2FGNa8wSEdfih893ER57nGPh%2BxFxJPgz6Ey7YrHK0AXa1rHVQ4%2Fj9VwOMPc7nmruoOdREoh8iSFhvhGZu5Pvw1hRdaKZ%2FVBJxwQ3inDLJbkS4EOInrBp9SOjwdIG9Z%2FtcafU%2BxKHOXp05KwrVoeEUbSleQiXd9a7d6DFwpCiVlesjmI3bVI23ZLTBxbdjnNdpcgQoHv9c7WJhgENCdyIK1XI0GYA%2FzvWYlmyRpiS9lQ2qm650%2FWOdViRizccqThOZ%2FyG%2BmPttI8DvrOocKZH5emR2kw2I%2BUwAY6pgHrQ3ItScMhmT9%2FmgOoRJjvjPqOZ1r8ubKH1B6RX7c2qktbSmpt9CjJPWyLRLRPg2srIfOrr%2B8qzg1gR%2FvjswgDIzyCDv6jCDw%2FxDIClBmIqZNYv4e1XmQx5ex7i4NRgS7%2BfV0fDzHRTEjekaTi3pAQkOb529iqTLetsxf7v%2BxjqjLTvv5G%2BQjRXuvwNqrLKLCYVDel7x2W6bfRcwa2XbSbyOoZWhxv&X-Amz-Signature=12375fa0f7d9218966fbdae28f03a25bb912d25e6910c2ba6344910f97d4cf65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DUJMW4C%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGbFHcrL9BlYyO7n7FqxD0EDRZPOqsw7eTvysPyUTbCMAiAjTFbRTn5TzUrhi0Rlt25pk4JXhUaBvETs3%2FmrP8IGiiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbTLtm6OwSPovFR8iKtwDoikk2ELgGrJMHZ4BXoIZHDbAaMLH%2FUcr9yTXllzKUWhItxbOQ2zNveWp%2BZj%2FUO4ISMyJIR%2Bw848Ms3inCyDIZlefU%2BXssXoLRBHygWKiSN2e%2BXxRNpm6%2FaUcptlK7JE6hbqrACzZM3VMcrRUYa0FtXfuQgQ9aPmVhpZiXDfWv6hlx5ipn7OREQ1hT%2B7ACtpqYPh%2BIHS%2FiOqc766GJIKA3JYFA2k190qop5TidNmqf0u%2F9Jaq%2BTC7y1nzKmR5G1lqtT5RugaLxiwQwHoYslgweP2PCo6APJQuCBNVPPjWXv3v2ftLayVupA28Jr8EmRU1sr6etG%2FDSs6hPo02yPcU%2B3386tOpvI7WyC%2FGNa8wSEdfih893ER57nGPh%2BxFxJPgz6Ey7YrHK0AXa1rHVQ4%2Fj9VwOMPc7nmruoOdREoh8iSFhvhGZu5Pvw1hRdaKZ%2FVBJxwQ3inDLJbkS4EOInrBp9SOjwdIG9Z%2FtcafU%2BxKHOXp05KwrVoeEUbSleQiXd9a7d6DFwpCiVlesjmI3bVI23ZLTBxbdjnNdpcgQoHv9c7WJhgENCdyIK1XI0GYA%2FzvWYlmyRpiS9lQ2qm650%2FWOdViRizccqThOZ%2FyG%2BmPttI8DvrOocKZH5emR2kw2I%2BUwAY6pgHrQ3ItScMhmT9%2FmgOoRJjvjPqOZ1r8ubKH1B6RX7c2qktbSmpt9CjJPWyLRLRPg2srIfOrr%2B8qzg1gR%2FvjswgDIzyCDv6jCDw%2FxDIClBmIqZNYv4e1XmQx5ex7i4NRgS7%2BfV0fDzHRTEjekaTi3pAQkOb529iqTLetsxf7v%2BxjqjLTvv5G%2BQjRXuvwNqrLKLCYVDel7x2W6bfRcwa2XbSbyOoZWhxv&X-Amz-Signature=c54180b44f912d203c6b00a1c3ccd309bcfbbaf0b35ead2308e86f418d102891&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
