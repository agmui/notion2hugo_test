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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U37LAOI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCBAL%2F2HkGP9WsLnSmpQFOdBbbkR30proO%2Fk6T4ThxbeQIhAI2JyhKH3vdBh9hAXBW8YpQ6vlIH0RNyF6O0X3oRxGh5Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxDz1odVAlgHMP7qIcq3APr2ttLe1TRgP9u3S20OYbhfdnh0qZIK4WHTd4naovbVTj2n9f2qr43Uh9iElA9t6AtQAArMpcvixw6COsBLFQWXn8XNG5mRtoSuAJfS0%2B6lNoMgT5MgzMRHHdEmpurK0OGOB%2Btwj2%2BTFt3VhhJBqcAfxpzb5bjB3a4LzLsPgMApCe23EyUWbhd9gRJb%2FBJpmyK%2FYEej2cNB%2BfcUQu%2BFffIrDz%2FCaG4z%2BZJ%2FF4T1odJUdSzzQevtIeWyblPJt2HxmC7DepSf3l%2BuChI63cPf46wfxotIMg%2FOLzBUBr3mSedDpk7pavHS4gCe36QdO6z%2Ff7mzrOY%2BxbFvsT2E0GulYg21W0taNNxYX7%2Bq%2FIhtsfaLu%2Bs0hC%2B1jtQYYPQBzRYiXQugbyRK13L8nfC2IMPotfGiU7n5JwGZQqgxp3TNiFA7mmeg6cJqwfxoK6k5SBJy0duVDVt9%2BqB55sPcrjXF955lvDSINwQbbNk3KDsU8J6oarJrzddBBhB%2BKOzBHn7dG7u1nyW1Y8HDOERMS9kPmUarT5pViZGY99rhaBr9FHi4yM%2BES4A7hQFpg%2F2suxJ6F3%2FY2B5G%2BUlQS7%2Fe7mwBxR37BHeFu43zq1wKLWdriE5HS4Eb4VWWY%2FcISZICTC29rfCBjqkAV0CGJayR83g%2BdrB5ABC2F%2Bma5fpb2ngnDa39I3QtZqcEIgR7N%2BXrGjeDWgWhuwdTozF5lbtLpFbNeoIcftu490GttDgph%2FBKvw07%2F4i1xut54ry9hnt%2F%2FjPjxmO84dUGZ0OIUeKnAJ1FFnkxqM%2Fv1F6Izz1Z%2Bw4Q1KDo1DZzx2YvoeBJVt2%2F0MudLf49xNo3Ertj3nE7z%2FDdBrPdxuRkFqgzBui&X-Amz-Signature=a554be5128dd9bbf68b97094016cdcb1461ad2616d431fed80922443997e1392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U37LAOI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCBAL%2F2HkGP9WsLnSmpQFOdBbbkR30proO%2Fk6T4ThxbeQIhAI2JyhKH3vdBh9hAXBW8YpQ6vlIH0RNyF6O0X3oRxGh5Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxDz1odVAlgHMP7qIcq3APr2ttLe1TRgP9u3S20OYbhfdnh0qZIK4WHTd4naovbVTj2n9f2qr43Uh9iElA9t6AtQAArMpcvixw6COsBLFQWXn8XNG5mRtoSuAJfS0%2B6lNoMgT5MgzMRHHdEmpurK0OGOB%2Btwj2%2BTFt3VhhJBqcAfxpzb5bjB3a4LzLsPgMApCe23EyUWbhd9gRJb%2FBJpmyK%2FYEej2cNB%2BfcUQu%2BFffIrDz%2FCaG4z%2BZJ%2FF4T1odJUdSzzQevtIeWyblPJt2HxmC7DepSf3l%2BuChI63cPf46wfxotIMg%2FOLzBUBr3mSedDpk7pavHS4gCe36QdO6z%2Ff7mzrOY%2BxbFvsT2E0GulYg21W0taNNxYX7%2Bq%2FIhtsfaLu%2Bs0hC%2B1jtQYYPQBzRYiXQugbyRK13L8nfC2IMPotfGiU7n5JwGZQqgxp3TNiFA7mmeg6cJqwfxoK6k5SBJy0duVDVt9%2BqB55sPcrjXF955lvDSINwQbbNk3KDsU8J6oarJrzddBBhB%2BKOzBHn7dG7u1nyW1Y8HDOERMS9kPmUarT5pViZGY99rhaBr9FHi4yM%2BES4A7hQFpg%2F2suxJ6F3%2FY2B5G%2BUlQS7%2Fe7mwBxR37BHeFu43zq1wKLWdriE5HS4Eb4VWWY%2FcISZICTC29rfCBjqkAV0CGJayR83g%2BdrB5ABC2F%2Bma5fpb2ngnDa39I3QtZqcEIgR7N%2BXrGjeDWgWhuwdTozF5lbtLpFbNeoIcftu490GttDgph%2FBKvw07%2F4i1xut54ry9hnt%2F%2FjPjxmO84dUGZ0OIUeKnAJ1FFnkxqM%2Fv1F6Izz1Z%2Bw4Q1KDo1DZzx2YvoeBJVt2%2F0MudLf49xNo3Ertj3nE7z%2FDdBrPdxuRkFqgzBui&X-Amz-Signature=d809a6f8d59e2cc74b21f508ccd22981ec27f4a329f692e565fb5b6ae566141e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U37LAOI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCBAL%2F2HkGP9WsLnSmpQFOdBbbkR30proO%2Fk6T4ThxbeQIhAI2JyhKH3vdBh9hAXBW8YpQ6vlIH0RNyF6O0X3oRxGh5Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxDz1odVAlgHMP7qIcq3APr2ttLe1TRgP9u3S20OYbhfdnh0qZIK4WHTd4naovbVTj2n9f2qr43Uh9iElA9t6AtQAArMpcvixw6COsBLFQWXn8XNG5mRtoSuAJfS0%2B6lNoMgT5MgzMRHHdEmpurK0OGOB%2Btwj2%2BTFt3VhhJBqcAfxpzb5bjB3a4LzLsPgMApCe23EyUWbhd9gRJb%2FBJpmyK%2FYEej2cNB%2BfcUQu%2BFffIrDz%2FCaG4z%2BZJ%2FF4T1odJUdSzzQevtIeWyblPJt2HxmC7DepSf3l%2BuChI63cPf46wfxotIMg%2FOLzBUBr3mSedDpk7pavHS4gCe36QdO6z%2Ff7mzrOY%2BxbFvsT2E0GulYg21W0taNNxYX7%2Bq%2FIhtsfaLu%2Bs0hC%2B1jtQYYPQBzRYiXQugbyRK13L8nfC2IMPotfGiU7n5JwGZQqgxp3TNiFA7mmeg6cJqwfxoK6k5SBJy0duVDVt9%2BqB55sPcrjXF955lvDSINwQbbNk3KDsU8J6oarJrzddBBhB%2BKOzBHn7dG7u1nyW1Y8HDOERMS9kPmUarT5pViZGY99rhaBr9FHi4yM%2BES4A7hQFpg%2F2suxJ6F3%2FY2B5G%2BUlQS7%2Fe7mwBxR37BHeFu43zq1wKLWdriE5HS4Eb4VWWY%2FcISZICTC29rfCBjqkAV0CGJayR83g%2BdrB5ABC2F%2Bma5fpb2ngnDa39I3QtZqcEIgR7N%2BXrGjeDWgWhuwdTozF5lbtLpFbNeoIcftu490GttDgph%2FBKvw07%2F4i1xut54ry9hnt%2F%2FjPjxmO84dUGZ0OIUeKnAJ1FFnkxqM%2Fv1F6Izz1Z%2Bw4Q1KDo1DZzx2YvoeBJVt2%2F0MudLf49xNo3Ertj3nE7z%2FDdBrPdxuRkFqgzBui&X-Amz-Signature=16682fa21e7456356bd587608ec5a42c1550bf598c2773025a46fafec6107e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
