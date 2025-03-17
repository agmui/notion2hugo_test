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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGT6QTBU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFXHIln0PZEpT%2Ff%2F9QsCTfOTmgPTdTWSJmHnMCw3CQYAIhAO9K1FEpMnVAIBzDQGYk%2BV1yABCSHk%2FebIC9Sg8FFO6kKv8DCD4QABoMNjM3NDIzMTgzODA1IgwbB1aOeYSXBkQ7ADYq3AODKBHvA6u0I2I%2FKrY2N%2BgUsUM4nqFmsRjvMMWgT29QtqkPeif3cHWAzEADDoGYEE%2FOrCiaNOMUU6wDlm7Jwb8YggLdvqOcYk2jHU62%2B2ONK8JYAXtRcbGsLnNwYNL%2BjpCORM5DzbUoMuiki%2B3an44OKDRsckN7cuJ2%2BiU0hhMlo%2Fcd%2F34iLZUsXlxjxEULUKoTBRBjuv21YWMKNF9dazWecek0li%2BFarbvB%2FJycTP%2FOEqjOYiFUB2DhZ97rz0fEzBcn%2BWtFljtmzWxFp4XhyhXr1RF4EtOr%2FV%2FgTlivaorHnLEFjonmS3Jrc9EFTnKPcvxcfWQHdei61qlRIGK0U8%2F5yBtC9sp%2BfYdbSlt9hJuqnMAhIKuHg08bynCrppwXyKXwSR69%2BMaMEbls7x2PkX8RnMXtX35EOBatulP%2FxX3Qdlc4CSMDeC5a9LBRsjkJQU8L%2Fw%2FCmDngw6ptNYUSde81wNDLpd538ioZcFffAYuC6MpRg58J5k8RQQp0OOi2Ruz%2BkM7zDQq6r9e5c1LV6Ooty9Mu%2BfpstwXuxPeg9dM8HBLJXncEuAgdAWuMmgN0pxVTA0nWr9HItWlw4JPNYjHj7AnkQHr1%2F%2BHJxkjoVJQKrwPCg%2F4C01%2BT%2FjZPjDw296%2BBjqkAUAOHQRwTSNXN567AI%2B2QYi6Xy3qUjrh%2FQd%2ByQrqQmIWkTwBlRGsk2LnSJ8ateF3pLAs2sZQprGArGtZ9m116eFYrohdjl%2BqGI9C6W0ONmSJkJ5Mo8WTRGZ8SyfjRyHFLbRbmaVD3U4HBwQJ9B5N%2F%2FgRJjhofVADdtYwILEvIi5kw43WVNJ90bD7rBJpCCdM3Q%2BUtYKV2eyjkP7mbvSOAz1sZy%2Bs&X-Amz-Signature=fcf399b9605622fe42045fb4aafc6eab79d47b45460724395ea323e75d3fd725&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGT6QTBU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFXHIln0PZEpT%2Ff%2F9QsCTfOTmgPTdTWSJmHnMCw3CQYAIhAO9K1FEpMnVAIBzDQGYk%2BV1yABCSHk%2FebIC9Sg8FFO6kKv8DCD4QABoMNjM3NDIzMTgzODA1IgwbB1aOeYSXBkQ7ADYq3AODKBHvA6u0I2I%2FKrY2N%2BgUsUM4nqFmsRjvMMWgT29QtqkPeif3cHWAzEADDoGYEE%2FOrCiaNOMUU6wDlm7Jwb8YggLdvqOcYk2jHU62%2B2ONK8JYAXtRcbGsLnNwYNL%2BjpCORM5DzbUoMuiki%2B3an44OKDRsckN7cuJ2%2BiU0hhMlo%2Fcd%2F34iLZUsXlxjxEULUKoTBRBjuv21YWMKNF9dazWecek0li%2BFarbvB%2FJycTP%2FOEqjOYiFUB2DhZ97rz0fEzBcn%2BWtFljtmzWxFp4XhyhXr1RF4EtOr%2FV%2FgTlivaorHnLEFjonmS3Jrc9EFTnKPcvxcfWQHdei61qlRIGK0U8%2F5yBtC9sp%2BfYdbSlt9hJuqnMAhIKuHg08bynCrppwXyKXwSR69%2BMaMEbls7x2PkX8RnMXtX35EOBatulP%2FxX3Qdlc4CSMDeC5a9LBRsjkJQU8L%2Fw%2FCmDngw6ptNYUSde81wNDLpd538ioZcFffAYuC6MpRg58J5k8RQQp0OOi2Ruz%2BkM7zDQq6r9e5c1LV6Ooty9Mu%2BfpstwXuxPeg9dM8HBLJXncEuAgdAWuMmgN0pxVTA0nWr9HItWlw4JPNYjHj7AnkQHr1%2F%2BHJxkjoVJQKrwPCg%2F4C01%2BT%2FjZPjDw296%2BBjqkAUAOHQRwTSNXN567AI%2B2QYi6Xy3qUjrh%2FQd%2ByQrqQmIWkTwBlRGsk2LnSJ8ateF3pLAs2sZQprGArGtZ9m116eFYrohdjl%2BqGI9C6W0ONmSJkJ5Mo8WTRGZ8SyfjRyHFLbRbmaVD3U4HBwQJ9B5N%2F%2FgRJjhofVADdtYwILEvIi5kw43WVNJ90bD7rBJpCCdM3Q%2BUtYKV2eyjkP7mbvSOAz1sZy%2Bs&X-Amz-Signature=0e1e945743a4cf24547ec2c164d31ac2b082319e9bef0851b0ead3970dc520fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGT6QTBU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFXHIln0PZEpT%2Ff%2F9QsCTfOTmgPTdTWSJmHnMCw3CQYAIhAO9K1FEpMnVAIBzDQGYk%2BV1yABCSHk%2FebIC9Sg8FFO6kKv8DCD4QABoMNjM3NDIzMTgzODA1IgwbB1aOeYSXBkQ7ADYq3AODKBHvA6u0I2I%2FKrY2N%2BgUsUM4nqFmsRjvMMWgT29QtqkPeif3cHWAzEADDoGYEE%2FOrCiaNOMUU6wDlm7Jwb8YggLdvqOcYk2jHU62%2B2ONK8JYAXtRcbGsLnNwYNL%2BjpCORM5DzbUoMuiki%2B3an44OKDRsckN7cuJ2%2BiU0hhMlo%2Fcd%2F34iLZUsXlxjxEULUKoTBRBjuv21YWMKNF9dazWecek0li%2BFarbvB%2FJycTP%2FOEqjOYiFUB2DhZ97rz0fEzBcn%2BWtFljtmzWxFp4XhyhXr1RF4EtOr%2FV%2FgTlivaorHnLEFjonmS3Jrc9EFTnKPcvxcfWQHdei61qlRIGK0U8%2F5yBtC9sp%2BfYdbSlt9hJuqnMAhIKuHg08bynCrppwXyKXwSR69%2BMaMEbls7x2PkX8RnMXtX35EOBatulP%2FxX3Qdlc4CSMDeC5a9LBRsjkJQU8L%2Fw%2FCmDngw6ptNYUSde81wNDLpd538ioZcFffAYuC6MpRg58J5k8RQQp0OOi2Ruz%2BkM7zDQq6r9e5c1LV6Ooty9Mu%2BfpstwXuxPeg9dM8HBLJXncEuAgdAWuMmgN0pxVTA0nWr9HItWlw4JPNYjHj7AnkQHr1%2F%2BHJxkjoVJQKrwPCg%2F4C01%2BT%2FjZPjDw296%2BBjqkAUAOHQRwTSNXN567AI%2B2QYi6Xy3qUjrh%2FQd%2ByQrqQmIWkTwBlRGsk2LnSJ8ateF3pLAs2sZQprGArGtZ9m116eFYrohdjl%2BqGI9C6W0ONmSJkJ5Mo8WTRGZ8SyfjRyHFLbRbmaVD3U4HBwQJ9B5N%2F%2FgRJjhofVADdtYwILEvIi5kw43WVNJ90bD7rBJpCCdM3Q%2BUtYKV2eyjkP7mbvSOAz1sZy%2Bs&X-Amz-Signature=14e57c8932198470e3f1e9379f63240a95c37881d52a4ccad3cae26f7424a561&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
