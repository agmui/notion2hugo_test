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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RPO5NJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRCElxDKHuk82Qk%2B5o5fb8IaIJJSiVyB%2Fg2RBXLGDqwIhAP9qaxJ6xm1GYWZUEI%2FYp7vtKMb%2F2LLZs8b%2BbQzNmiitKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT7XiuhbYmvaJrzaMq3AMRZZMcEvarY9m8SN70jwxSRY9HrZ4RkZGn8vE3TVmtJxtp5N34kbCUnEU922hhM7%2FsxryGUhxfVLy2nBBoCR%2F2jgThMg60a%2Bif13CMph59L2WGaJQdaKSD2YHagHuUy%2BTEG%2F1%2BuyLx9eJF3940djma5xV8P8wxbN4vK9lAxX0f6EIIXunce7TgYfaRSIfhdRcnIJbAml%2BYqrczvC3DosSD8Hk1icCkMbgT3Wb%2Fel4bJ0EfG3TgsgZ7rbURZP2MYnOnw3RHJ%2B3StJq0NEsUS1pzDPlKGCQnLCRWxDXF7a2%2FKy8fD5tZ7T18v4BTisGynB4%2BnYsWDjUyHygvleUguhWSp77QsssB6Hl0Lq%2Fu0Q7x5rUsZodsWuthykqOsP195L%2FvBMDx5yod5bARZlLFEEvoXX1tGeKgmSvph%2FAzicou35hnrFcuOPmpLw9N1Jr27vLT7V2jQ9O5CfdReMuT%2B3c%2FbHf61Uaur1Cf8VxA09m9Xkrf69b4yD9m6GWo0geXQz4E%2BHvsCy7fmMspbeqtV2JDYY1sLuZE2PfWYOaCJ%2FBCx7zF6qZhQATkThiCYsZQiHwcO49SGowrWAEZYIFLo9seZ665okugBu3MUUQhZf0G4I14J%2BlE8o9uzyVg0zDul7rDBjqkAVogXHmo0n%2B4arqhPdh94RESDhHggcn%2FUijyLGAS8Tk96lgRxBzO%2FOo1EzTbzQd2j8f7ErJ7DZYY4o2zGKbu4VB1eBBRlIk78aWL3AdlGumsgzCU6nrkDfWNrhSBZ7RBicQ%2B20Tee0MVhKFq8eL7JfXFD%2Fn1v1DTV10ZF%2FeNw3t9qYHfIHDwbmH5GSgp%2BCckUAzKHgJzxUZGRKqCP9o7GxEziNXh&X-Amz-Signature=7e86dcf9e5390ff15b7bdb6a59a53da74be18f52838fbc85a730d32e4e5c7585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RPO5NJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRCElxDKHuk82Qk%2B5o5fb8IaIJJSiVyB%2Fg2RBXLGDqwIhAP9qaxJ6xm1GYWZUEI%2FYp7vtKMb%2F2LLZs8b%2BbQzNmiitKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT7XiuhbYmvaJrzaMq3AMRZZMcEvarY9m8SN70jwxSRY9HrZ4RkZGn8vE3TVmtJxtp5N34kbCUnEU922hhM7%2FsxryGUhxfVLy2nBBoCR%2F2jgThMg60a%2Bif13CMph59L2WGaJQdaKSD2YHagHuUy%2BTEG%2F1%2BuyLx9eJF3940djma5xV8P8wxbN4vK9lAxX0f6EIIXunce7TgYfaRSIfhdRcnIJbAml%2BYqrczvC3DosSD8Hk1icCkMbgT3Wb%2Fel4bJ0EfG3TgsgZ7rbURZP2MYnOnw3RHJ%2B3StJq0NEsUS1pzDPlKGCQnLCRWxDXF7a2%2FKy8fD5tZ7T18v4BTisGynB4%2BnYsWDjUyHygvleUguhWSp77QsssB6Hl0Lq%2Fu0Q7x5rUsZodsWuthykqOsP195L%2FvBMDx5yod5bARZlLFEEvoXX1tGeKgmSvph%2FAzicou35hnrFcuOPmpLw9N1Jr27vLT7V2jQ9O5CfdReMuT%2B3c%2FbHf61Uaur1Cf8VxA09m9Xkrf69b4yD9m6GWo0geXQz4E%2BHvsCy7fmMspbeqtV2JDYY1sLuZE2PfWYOaCJ%2FBCx7zF6qZhQATkThiCYsZQiHwcO49SGowrWAEZYIFLo9seZ665okugBu3MUUQhZf0G4I14J%2BlE8o9uzyVg0zDul7rDBjqkAVogXHmo0n%2B4arqhPdh94RESDhHggcn%2FUijyLGAS8Tk96lgRxBzO%2FOo1EzTbzQd2j8f7ErJ7DZYY4o2zGKbu4VB1eBBRlIk78aWL3AdlGumsgzCU6nrkDfWNrhSBZ7RBicQ%2B20Tee0MVhKFq8eL7JfXFD%2Fn1v1DTV10ZF%2FeNw3t9qYHfIHDwbmH5GSgp%2BCckUAzKHgJzxUZGRKqCP9o7GxEziNXh&X-Amz-Signature=1c999628de66cf2e368e6cdeb18179f49236a7bf42c90fe9572da7981a35460b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RPO5NJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRCElxDKHuk82Qk%2B5o5fb8IaIJJSiVyB%2Fg2RBXLGDqwIhAP9qaxJ6xm1GYWZUEI%2FYp7vtKMb%2F2LLZs8b%2BbQzNmiitKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT7XiuhbYmvaJrzaMq3AMRZZMcEvarY9m8SN70jwxSRY9HrZ4RkZGn8vE3TVmtJxtp5N34kbCUnEU922hhM7%2FsxryGUhxfVLy2nBBoCR%2F2jgThMg60a%2Bif13CMph59L2WGaJQdaKSD2YHagHuUy%2BTEG%2F1%2BuyLx9eJF3940djma5xV8P8wxbN4vK9lAxX0f6EIIXunce7TgYfaRSIfhdRcnIJbAml%2BYqrczvC3DosSD8Hk1icCkMbgT3Wb%2Fel4bJ0EfG3TgsgZ7rbURZP2MYnOnw3RHJ%2B3StJq0NEsUS1pzDPlKGCQnLCRWxDXF7a2%2FKy8fD5tZ7T18v4BTisGynB4%2BnYsWDjUyHygvleUguhWSp77QsssB6Hl0Lq%2Fu0Q7x5rUsZodsWuthykqOsP195L%2FvBMDx5yod5bARZlLFEEvoXX1tGeKgmSvph%2FAzicou35hnrFcuOPmpLw9N1Jr27vLT7V2jQ9O5CfdReMuT%2B3c%2FbHf61Uaur1Cf8VxA09m9Xkrf69b4yD9m6GWo0geXQz4E%2BHvsCy7fmMspbeqtV2JDYY1sLuZE2PfWYOaCJ%2FBCx7zF6qZhQATkThiCYsZQiHwcO49SGowrWAEZYIFLo9seZ665okugBu3MUUQhZf0G4I14J%2BlE8o9uzyVg0zDul7rDBjqkAVogXHmo0n%2B4arqhPdh94RESDhHggcn%2FUijyLGAS8Tk96lgRxBzO%2FOo1EzTbzQd2j8f7ErJ7DZYY4o2zGKbu4VB1eBBRlIk78aWL3AdlGumsgzCU6nrkDfWNrhSBZ7RBicQ%2B20Tee0MVhKFq8eL7JfXFD%2Fn1v1DTV10ZF%2FeNw3t9qYHfIHDwbmH5GSgp%2BCckUAzKHgJzxUZGRKqCP9o7GxEziNXh&X-Amz-Signature=baa263553bc3d7e39d16a4b3f6f2a246966fcabc33be8a43609dc2dfcc79f2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
