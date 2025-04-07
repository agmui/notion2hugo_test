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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHIMOZ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJxOlRXQYo%2FymY%2F2U203xnE5V85zECQPbuFHUIYVquzwIhAJQQkTnix7MvUxbiPVcEH6g5mIj%2FWDJtT8BtxnMQXJxmKv8DCFQQABoMNjM3NDIzMTgzODA1Igx7%2F3xnl6%2FjuYXGOeYq3AMb28npADTSpqAKwFV3quS2ezEGBf4nLBiK7uCF%2BOCqqsAEI%2Fq9yqUO8PxdC35FW3GGMgvFV4PgopqeWElioqCgb%2BvKOG8WQbm9CGTL%2FMst%2FOIC%2FxhtGiInsH4BaXdCTqQjS1OZn7oUAr2EiYeTY2HbOZeHCkg1SRF0QKzOVHWxNephdj%2BlpZSmOZpXgHOvId8YYrTR4za0LH9rRzSoJ0qDL2pOrs4hoGpjTFweStmiVsSp%2Fw1BYAmOEJ0wEC1fD8SwfdVUsSkKcADDPgV8vZ8T9h5kzPWPRu%2BlO1Su2hw7hA%2BU1wykebPrxnHr3C8Joryv%2FX9be9wqi4hNRo5XgxmeHd4m1TZLdOQecIMHU%2FovBlhg4DiKZP9NfEY%2F1CCDBlDWkL6CyZNwLsLmDJkIvuyH0mX0iN0mvxbQ3Zh%2FrhRNzp87b1lRYVsOTpxSy1CmWvZv%2F3qmJXuhWp40jVCWVKBgBmjmqmfWDDQNQ551tfrtB2zNm3Cr%2Fvf1BEZAUkt8B5m0HinnQXxQuFZqoHQage3M8U2kM6HBCxs2PcZqkOzAROuqHZuBCHfqfr1miSsDUpRqED44J3hpNG%2BUWTAIGa3UEZ8aa1fF%2BclOqUzeZdaIHpMVMW%2B58HyfveIY8zDdg82%2FBjqkAcrIw%2FhmXdfhdqHBckEsdmtpWTnweMoPuedsX1z7lwcVZY9hLXvUTs124EkFpG3To6EWzMvbnr5uW8RBSYUSdepLsGY2ySUklPPgj1cAHhQCr%2Bix7nhi3hrMWPcf2dHdt241UEBtPJuqKUvQ6SSJYdnL%2BA7RyB1QNIqCrDAHLPOK8vcoVCIImr0cPDN2fEazjwpVaSGlXI8TAzqbD7KfS28LsqyY&X-Amz-Signature=552bd12aa019f44b1621f8054a94cf962cce19d9a6a6221d06f91a39314fb58d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHIMOZ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJxOlRXQYo%2FymY%2F2U203xnE5V85zECQPbuFHUIYVquzwIhAJQQkTnix7MvUxbiPVcEH6g5mIj%2FWDJtT8BtxnMQXJxmKv8DCFQQABoMNjM3NDIzMTgzODA1Igx7%2F3xnl6%2FjuYXGOeYq3AMb28npADTSpqAKwFV3quS2ezEGBf4nLBiK7uCF%2BOCqqsAEI%2Fq9yqUO8PxdC35FW3GGMgvFV4PgopqeWElioqCgb%2BvKOG8WQbm9CGTL%2FMst%2FOIC%2FxhtGiInsH4BaXdCTqQjS1OZn7oUAr2EiYeTY2HbOZeHCkg1SRF0QKzOVHWxNephdj%2BlpZSmOZpXgHOvId8YYrTR4za0LH9rRzSoJ0qDL2pOrs4hoGpjTFweStmiVsSp%2Fw1BYAmOEJ0wEC1fD8SwfdVUsSkKcADDPgV8vZ8T9h5kzPWPRu%2BlO1Su2hw7hA%2BU1wykebPrxnHr3C8Joryv%2FX9be9wqi4hNRo5XgxmeHd4m1TZLdOQecIMHU%2FovBlhg4DiKZP9NfEY%2F1CCDBlDWkL6CyZNwLsLmDJkIvuyH0mX0iN0mvxbQ3Zh%2FrhRNzp87b1lRYVsOTpxSy1CmWvZv%2F3qmJXuhWp40jVCWVKBgBmjmqmfWDDQNQ551tfrtB2zNm3Cr%2Fvf1BEZAUkt8B5m0HinnQXxQuFZqoHQage3M8U2kM6HBCxs2PcZqkOzAROuqHZuBCHfqfr1miSsDUpRqED44J3hpNG%2BUWTAIGa3UEZ8aa1fF%2BclOqUzeZdaIHpMVMW%2B58HyfveIY8zDdg82%2FBjqkAcrIw%2FhmXdfhdqHBckEsdmtpWTnweMoPuedsX1z7lwcVZY9hLXvUTs124EkFpG3To6EWzMvbnr5uW8RBSYUSdepLsGY2ySUklPPgj1cAHhQCr%2Bix7nhi3hrMWPcf2dHdt241UEBtPJuqKUvQ6SSJYdnL%2BA7RyB1QNIqCrDAHLPOK8vcoVCIImr0cPDN2fEazjwpVaSGlXI8TAzqbD7KfS28LsqyY&X-Amz-Signature=b578a556cebbbfe02ccc483b7176b630b812d6931f494b97164eb661a6d76226&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHIMOZ6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJxOlRXQYo%2FymY%2F2U203xnE5V85zECQPbuFHUIYVquzwIhAJQQkTnix7MvUxbiPVcEH6g5mIj%2FWDJtT8BtxnMQXJxmKv8DCFQQABoMNjM3NDIzMTgzODA1Igx7%2F3xnl6%2FjuYXGOeYq3AMb28npADTSpqAKwFV3quS2ezEGBf4nLBiK7uCF%2BOCqqsAEI%2Fq9yqUO8PxdC35FW3GGMgvFV4PgopqeWElioqCgb%2BvKOG8WQbm9CGTL%2FMst%2FOIC%2FxhtGiInsH4BaXdCTqQjS1OZn7oUAr2EiYeTY2HbOZeHCkg1SRF0QKzOVHWxNephdj%2BlpZSmOZpXgHOvId8YYrTR4za0LH9rRzSoJ0qDL2pOrs4hoGpjTFweStmiVsSp%2Fw1BYAmOEJ0wEC1fD8SwfdVUsSkKcADDPgV8vZ8T9h5kzPWPRu%2BlO1Su2hw7hA%2BU1wykebPrxnHr3C8Joryv%2FX9be9wqi4hNRo5XgxmeHd4m1TZLdOQecIMHU%2FovBlhg4DiKZP9NfEY%2F1CCDBlDWkL6CyZNwLsLmDJkIvuyH0mX0iN0mvxbQ3Zh%2FrhRNzp87b1lRYVsOTpxSy1CmWvZv%2F3qmJXuhWp40jVCWVKBgBmjmqmfWDDQNQ551tfrtB2zNm3Cr%2Fvf1BEZAUkt8B5m0HinnQXxQuFZqoHQage3M8U2kM6HBCxs2PcZqkOzAROuqHZuBCHfqfr1miSsDUpRqED44J3hpNG%2BUWTAIGa3UEZ8aa1fF%2BclOqUzeZdaIHpMVMW%2B58HyfveIY8zDdg82%2FBjqkAcrIw%2FhmXdfhdqHBckEsdmtpWTnweMoPuedsX1z7lwcVZY9hLXvUTs124EkFpG3To6EWzMvbnr5uW8RBSYUSdepLsGY2ySUklPPgj1cAHhQCr%2Bix7nhi3hrMWPcf2dHdt241UEBtPJuqKUvQ6SSJYdnL%2BA7RyB1QNIqCrDAHLPOK8vcoVCIImr0cPDN2fEazjwpVaSGlXI8TAzqbD7KfS28LsqyY&X-Amz-Signature=0b96920032972f1af92f59bf399824edf6f6218f595ef36fe1cb61b469b43e39&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
