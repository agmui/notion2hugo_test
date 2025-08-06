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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK6XNJAS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICxnzMkm3TkUkA8ZTYfhZFFdFgWCmp9mlNloxjGW%2F24jAiAECKtN9eatq%2BfLDLm9Z%2B%2FMJjb%2FVnhpYpioW4uKmn%2Fb5ir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMiy1gnFqJLMnHEcgFKtwD%2B81L9fKk%2FqgkTWwJP29GZ58AoxUZhqXvYdicCZ8bQuaCjj31r0ZYQkqVIq2d0vqt0ynexlRnRGa09jiNTzBOkbRkLRS0Y4bKuQHL9aEaU9kCl%2B33pqrPkvXOkfJAtXsQLB3nccKe713yII1HKtRpBkXsemFW2iJ2Gbgw8rWrf2sgWNwOPk4aEl6txcqivExzLuKqLDuGPVmZky2fEh8DmUd2TBk8pSA5pFy3YBkR4osa1YEqbO%2F1RJxYh533%2BCWq0kwQlKPzxW9hFYOtsQ8Wtz7t74Q5Jw7z6qsgsmAaBcLA2IMgAaOwIyyJK2ZFKQRFrBWPRWQtwb6o0zUrBffjvQDWByEfLt%2BmYOBHUxQrGwL2yWsPIGqbmf%2BTnrhPhC94D6cu6qeUaBtrC8RErfLuI1eTWXC%2FVqyc24r%2BFaStDel5XlWm9os%2FNJ%2FhMHBqA1jljawwSC2ErpFqHDTsVVtRUCLCSeRtw1tEwziZVbNtg56YKnLbP4OOKDQKnYjABSW50oKWP1b0nXIMx301CFZRvibLjPe1WCJDtfrtgcVvtT7moSi3a9gVtXP5z8d0r6vzuFa3eMhhXfTPGJKrtkDU%2FhZepSB4CVfz%2F6%2Fvk1Mrxz6sbJkmogcs0aJCq2kwm8vLxAY6pgE9fXqOVH50HRY6QTxPOmL%2Fhvao5S2sF1HLagK66xWvtgNyrvzn%2FPXG9Ugho5P0hJK6KYmfyFucrhkwKrNx9QflDiRALsGwty0S1LxPtrAcr6Y02S%2FnPt076sghy9vPQeiGMu%2BtBdl5V7f%2BQq8dVyO7ayFKsKmazr%2BDF8JlJY5cK%2FVM3AGMiD%2BP4zibDSNNxdG%2F%2BAbxmwsirnQlGemPoR7PUiryUYlh&X-Amz-Signature=cccbc46c8a160350604975937f3b250beacc1c547842a0d82c942ff97e98eab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK6XNJAS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICxnzMkm3TkUkA8ZTYfhZFFdFgWCmp9mlNloxjGW%2F24jAiAECKtN9eatq%2BfLDLm9Z%2B%2FMJjb%2FVnhpYpioW4uKmn%2Fb5ir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMiy1gnFqJLMnHEcgFKtwD%2B81L9fKk%2FqgkTWwJP29GZ58AoxUZhqXvYdicCZ8bQuaCjj31r0ZYQkqVIq2d0vqt0ynexlRnRGa09jiNTzBOkbRkLRS0Y4bKuQHL9aEaU9kCl%2B33pqrPkvXOkfJAtXsQLB3nccKe713yII1HKtRpBkXsemFW2iJ2Gbgw8rWrf2sgWNwOPk4aEl6txcqivExzLuKqLDuGPVmZky2fEh8DmUd2TBk8pSA5pFy3YBkR4osa1YEqbO%2F1RJxYh533%2BCWq0kwQlKPzxW9hFYOtsQ8Wtz7t74Q5Jw7z6qsgsmAaBcLA2IMgAaOwIyyJK2ZFKQRFrBWPRWQtwb6o0zUrBffjvQDWByEfLt%2BmYOBHUxQrGwL2yWsPIGqbmf%2BTnrhPhC94D6cu6qeUaBtrC8RErfLuI1eTWXC%2FVqyc24r%2BFaStDel5XlWm9os%2FNJ%2FhMHBqA1jljawwSC2ErpFqHDTsVVtRUCLCSeRtw1tEwziZVbNtg56YKnLbP4OOKDQKnYjABSW50oKWP1b0nXIMx301CFZRvibLjPe1WCJDtfrtgcVvtT7moSi3a9gVtXP5z8d0r6vzuFa3eMhhXfTPGJKrtkDU%2FhZepSB4CVfz%2F6%2Fvk1Mrxz6sbJkmogcs0aJCq2kwm8vLxAY6pgE9fXqOVH50HRY6QTxPOmL%2Fhvao5S2sF1HLagK66xWvtgNyrvzn%2FPXG9Ugho5P0hJK6KYmfyFucrhkwKrNx9QflDiRALsGwty0S1LxPtrAcr6Y02S%2FnPt076sghy9vPQeiGMu%2BtBdl5V7f%2BQq8dVyO7ayFKsKmazr%2BDF8JlJY5cK%2FVM3AGMiD%2BP4zibDSNNxdG%2F%2BAbxmwsirnQlGemPoR7PUiryUYlh&X-Amz-Signature=a2ac87983296f0948d9d49e40e36fd8df35c2ccf3b0540e775bc3eb5e2ddcdec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK6XNJAS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICxnzMkm3TkUkA8ZTYfhZFFdFgWCmp9mlNloxjGW%2F24jAiAECKtN9eatq%2BfLDLm9Z%2B%2FMJjb%2FVnhpYpioW4uKmn%2Fb5ir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMiy1gnFqJLMnHEcgFKtwD%2B81L9fKk%2FqgkTWwJP29GZ58AoxUZhqXvYdicCZ8bQuaCjj31r0ZYQkqVIq2d0vqt0ynexlRnRGa09jiNTzBOkbRkLRS0Y4bKuQHL9aEaU9kCl%2B33pqrPkvXOkfJAtXsQLB3nccKe713yII1HKtRpBkXsemFW2iJ2Gbgw8rWrf2sgWNwOPk4aEl6txcqivExzLuKqLDuGPVmZky2fEh8DmUd2TBk8pSA5pFy3YBkR4osa1YEqbO%2F1RJxYh533%2BCWq0kwQlKPzxW9hFYOtsQ8Wtz7t74Q5Jw7z6qsgsmAaBcLA2IMgAaOwIyyJK2ZFKQRFrBWPRWQtwb6o0zUrBffjvQDWByEfLt%2BmYOBHUxQrGwL2yWsPIGqbmf%2BTnrhPhC94D6cu6qeUaBtrC8RErfLuI1eTWXC%2FVqyc24r%2BFaStDel5XlWm9os%2FNJ%2FhMHBqA1jljawwSC2ErpFqHDTsVVtRUCLCSeRtw1tEwziZVbNtg56YKnLbP4OOKDQKnYjABSW50oKWP1b0nXIMx301CFZRvibLjPe1WCJDtfrtgcVvtT7moSi3a9gVtXP5z8d0r6vzuFa3eMhhXfTPGJKrtkDU%2FhZepSB4CVfz%2F6%2Fvk1Mrxz6sbJkmogcs0aJCq2kwm8vLxAY6pgE9fXqOVH50HRY6QTxPOmL%2Fhvao5S2sF1HLagK66xWvtgNyrvzn%2FPXG9Ugho5P0hJK6KYmfyFucrhkwKrNx9QflDiRALsGwty0S1LxPtrAcr6Y02S%2FnPt076sghy9vPQeiGMu%2BtBdl5V7f%2BQq8dVyO7ayFKsKmazr%2BDF8JlJY5cK%2FVM3AGMiD%2BP4zibDSNNxdG%2F%2BAbxmwsirnQlGemPoR7PUiryUYlh&X-Amz-Signature=3053313f9c76fefbf7cef720ad2d4d2fecd6cdc47ae35a77b5146be5e3808319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
