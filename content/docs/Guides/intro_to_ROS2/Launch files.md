---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5QNT44%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHhpNFYy4vnv3QkqodR0EAbvBzmA8QUPA%2BOnBuzR%2BdTWAiB1oUyacxad79WJ%2FSJ1gXBu%2FZaI7RZ3tCVDPbXCGRux%2FCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMi%2FlRRwfVeVs4Wad2KtwDnj9pYtHReqybg6q9RM37D%2BHoAUc6X3G8v2HCBIFo99zUvxF54RmdgiW3Q7Pqpm5F11xbIJRw4l9JWAWgublY4mxvK2VKSHQlD1NeYqgN9%2FwwcgR9Ozpg060%2BXc%2FOWBr41CfvEffKCXqpGR3d25n4VhE6xmLOnmv3gRpfud2KsHgbdRN6aAl9LQ%2B6wmnc3j82spqLWZaNQwpSQWjf3YYO3HYxq8VWOgYkUGNVA4EOEx59NqdsyvF0OSmt1R9QbP4dVQ28T04EHGzUivYhOCtGJdOWSRNfW883G5plv0wPz5mSiMuZFtd1Cf2WCzDfot7Oz8ao8f8rsCpeaqzcM%2FeEoS6n9QS0ZOQij3jyCVZlV37iwg6hVreu7PqJdQMu4f7Nc5XZp2%2FZHKIVS4ennX1uIkhrO1d0CWlpXzX6ymHTNNkpFtU60zZY1e%2FOBHyphK3Xy%2F%2FO%2BKS62UTQlEfvO5iEv%2FWUNgcTYPO8GEqnX8g34pas0BDeln1C6Hm0X%2FkP85lB%2BW55O1o4n%2F3DXHmCooEHyOK0qjD6kd%2B2dlfe62ysaPsga9d8cKgi1MN0YDtVyTSqJMYfcISyovUsZlZy23leSPLEX%2By7zZ%2BHZW3V79mSqqbPhxKpUx%2FJfjWD7Gcw0cDrygY6pgH0Rax1lIbgCFakLZOAu77U%2FpeThEwh8vOBewwxtI8rnV5FHbY0rGBzFMkiYPap9Cl6GKb3pkNgCr9g7fXdTfts0TuCDKN1EsnaGhtGULTGUCtVIAw0t8iBdelTjmNqI2u%2BH3eU8lT8j3PMP%2F2kH213qPpWS%2F%2FDhjmil98994z3tY2D7CgWkGM9SK5O%2F5tFoNfmTyIQf4SS1mYHD%2FCTYXjYSsxwqgpp&X-Amz-Signature=f78539e1d2ae4857b4f63240472d7ecf1b3f93a69c0eadce58f3c69ef9de163a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5QNT44%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHhpNFYy4vnv3QkqodR0EAbvBzmA8QUPA%2BOnBuzR%2BdTWAiB1oUyacxad79WJ%2FSJ1gXBu%2FZaI7RZ3tCVDPbXCGRux%2FCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMi%2FlRRwfVeVs4Wad2KtwDnj9pYtHReqybg6q9RM37D%2BHoAUc6X3G8v2HCBIFo99zUvxF54RmdgiW3Q7Pqpm5F11xbIJRw4l9JWAWgublY4mxvK2VKSHQlD1NeYqgN9%2FwwcgR9Ozpg060%2BXc%2FOWBr41CfvEffKCXqpGR3d25n4VhE6xmLOnmv3gRpfud2KsHgbdRN6aAl9LQ%2B6wmnc3j82spqLWZaNQwpSQWjf3YYO3HYxq8VWOgYkUGNVA4EOEx59NqdsyvF0OSmt1R9QbP4dVQ28T04EHGzUivYhOCtGJdOWSRNfW883G5plv0wPz5mSiMuZFtd1Cf2WCzDfot7Oz8ao8f8rsCpeaqzcM%2FeEoS6n9QS0ZOQij3jyCVZlV37iwg6hVreu7PqJdQMu4f7Nc5XZp2%2FZHKIVS4ennX1uIkhrO1d0CWlpXzX6ymHTNNkpFtU60zZY1e%2FOBHyphK3Xy%2F%2FO%2BKS62UTQlEfvO5iEv%2FWUNgcTYPO8GEqnX8g34pas0BDeln1C6Hm0X%2FkP85lB%2BW55O1o4n%2F3DXHmCooEHyOK0qjD6kd%2B2dlfe62ysaPsga9d8cKgi1MN0YDtVyTSqJMYfcISyovUsZlZy23leSPLEX%2By7zZ%2BHZW3V79mSqqbPhxKpUx%2FJfjWD7Gcw0cDrygY6pgH0Rax1lIbgCFakLZOAu77U%2FpeThEwh8vOBewwxtI8rnV5FHbY0rGBzFMkiYPap9Cl6GKb3pkNgCr9g7fXdTfts0TuCDKN1EsnaGhtGULTGUCtVIAw0t8iBdelTjmNqI2u%2BH3eU8lT8j3PMP%2F2kH213qPpWS%2F%2FDhjmil98994z3tY2D7CgWkGM9SK5O%2F5tFoNfmTyIQf4SS1mYHD%2FCTYXjYSsxwqgpp&X-Amz-Signature=49314bca45da673c9dfc6650b805280197c0fcbbf608789de1c1bb94d0caf5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW5QNT44%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHhpNFYy4vnv3QkqodR0EAbvBzmA8QUPA%2BOnBuzR%2BdTWAiB1oUyacxad79WJ%2FSJ1gXBu%2FZaI7RZ3tCVDPbXCGRux%2FCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMi%2FlRRwfVeVs4Wad2KtwDnj9pYtHReqybg6q9RM37D%2BHoAUc6X3G8v2HCBIFo99zUvxF54RmdgiW3Q7Pqpm5F11xbIJRw4l9JWAWgublY4mxvK2VKSHQlD1NeYqgN9%2FwwcgR9Ozpg060%2BXc%2FOWBr41CfvEffKCXqpGR3d25n4VhE6xmLOnmv3gRpfud2KsHgbdRN6aAl9LQ%2B6wmnc3j82spqLWZaNQwpSQWjf3YYO3HYxq8VWOgYkUGNVA4EOEx59NqdsyvF0OSmt1R9QbP4dVQ28T04EHGzUivYhOCtGJdOWSRNfW883G5plv0wPz5mSiMuZFtd1Cf2WCzDfot7Oz8ao8f8rsCpeaqzcM%2FeEoS6n9QS0ZOQij3jyCVZlV37iwg6hVreu7PqJdQMu4f7Nc5XZp2%2FZHKIVS4ennX1uIkhrO1d0CWlpXzX6ymHTNNkpFtU60zZY1e%2FOBHyphK3Xy%2F%2FO%2BKS62UTQlEfvO5iEv%2FWUNgcTYPO8GEqnX8g34pas0BDeln1C6Hm0X%2FkP85lB%2BW55O1o4n%2F3DXHmCooEHyOK0qjD6kd%2B2dlfe62ysaPsga9d8cKgi1MN0YDtVyTSqJMYfcISyovUsZlZy23leSPLEX%2By7zZ%2BHZW3V79mSqqbPhxKpUx%2FJfjWD7Gcw0cDrygY6pgH0Rax1lIbgCFakLZOAu77U%2FpeThEwh8vOBewwxtI8rnV5FHbY0rGBzFMkiYPap9Cl6GKb3pkNgCr9g7fXdTfts0TuCDKN1EsnaGhtGULTGUCtVIAw0t8iBdelTjmNqI2u%2BH3eU8lT8j3PMP%2F2kH213qPpWS%2F%2FDhjmil98994z3tY2D7CgWkGM9SK5O%2F5tFoNfmTyIQf4SS1mYHD%2FCTYXjYSsxwqgpp&X-Amz-Signature=9b67be70676a2c94324539377c3b1ef0b6e965bfed0f102a6496d9b47b130b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
