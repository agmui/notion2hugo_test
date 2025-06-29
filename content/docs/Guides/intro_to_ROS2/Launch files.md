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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRK5KTN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr83Aej2v4MQdOnViaqqkpOP9JKQzNRbh1puhbX8v3nAiEA7kcuuBkJ0Jski%2Fdi0x6%2FbkAiNhlR3QKw%2FO864vHmGswqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhzYk2bfQjaOUQEASrcA0RNYytLTrVNV6wg4gTfqRcwnfdHlHe8J3%2BJDX2dWhsyS%2Bd11iVefB1WQHiaDGhHGy%2Fc%2F30hthFSQSP0U91OsOJ8%2Fpj8eKFrenNkaICylY73DShvg9L5GA548QzZ42b6ing31innE%2FLXGqCFFtgMi%2B7AUbf6hqRHzjs6rOQc4QXXF1KwLdhFDJlhZ83MuAfrfLrOJc3oTS7cD%2F%2BwWZYi%2Fa61zTWjaQnVHMeqbM424LLOtTL5gN4Cn6%2Fo6aOsFrXOPDr03X%2BQckRaWda4N5wrTDChPUfPNl0ITGZNOiv9kSssvSGd%2FrGQr4Epw7vupggbDfr7YMzcdzxGeAgR0L35Gj2G%2BjexaML61ZZ3NQQ%2BBgnjBb5Onnw6xsb7rKT2yn3iv0Bfac7dTAIubnnmL%2BO%2FOAqWsyoN%2FLLmKtjFqiVuRS6r2nWvdr%2BoVFZHpWPRLNMxCHOW6b7X%2BcPmpsgNM3RyqtX0VjNTdMH0MJRfj6QbsYzs6KmmoeV2CKlZ9gM%2FJgD31LU%2FtXKGFDASoGpE4N5n9mc98RPEBcD0pFeal83kIuztTLXz1aqebveZJiMqaYgBDpbI4KWHE9OqC1dPcWzuO071l3%2Be30Iz5rXIiL7ZHlkWDK7lcG2%2Ft1sSsBaLMNuFhcMGOqUBRMNmPicSAVQHSOsRAgelADq6xuVD5MPhyv1FQlvOfJEXMyJAZxf3ISx%2B3EBjw6na%2Fnk92a%2Buv2o7V0U%2BhWAVU%2F12dw%2BdkNM8mMIQAzzN1ud4KR59c15DTUloTknNgHR7mqZr3w01sePoNdCj%2FFq7SQ3m6NdJ9FEuAcMgcX28%2B2fSl90CDIlo2koQBm4sFbG5mEZoBRBU26qHLQUPH4pF7koP5ABH&X-Amz-Signature=ef3507a2a022e99fb8d3f7001c7b405f5cbc1b3f2718e146c668cc26417b4d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRK5KTN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr83Aej2v4MQdOnViaqqkpOP9JKQzNRbh1puhbX8v3nAiEA7kcuuBkJ0Jski%2Fdi0x6%2FbkAiNhlR3QKw%2FO864vHmGswqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhzYk2bfQjaOUQEASrcA0RNYytLTrVNV6wg4gTfqRcwnfdHlHe8J3%2BJDX2dWhsyS%2Bd11iVefB1WQHiaDGhHGy%2Fc%2F30hthFSQSP0U91OsOJ8%2Fpj8eKFrenNkaICylY73DShvg9L5GA548QzZ42b6ing31innE%2FLXGqCFFtgMi%2B7AUbf6hqRHzjs6rOQc4QXXF1KwLdhFDJlhZ83MuAfrfLrOJc3oTS7cD%2F%2BwWZYi%2Fa61zTWjaQnVHMeqbM424LLOtTL5gN4Cn6%2Fo6aOsFrXOPDr03X%2BQckRaWda4N5wrTDChPUfPNl0ITGZNOiv9kSssvSGd%2FrGQr4Epw7vupggbDfr7YMzcdzxGeAgR0L35Gj2G%2BjexaML61ZZ3NQQ%2BBgnjBb5Onnw6xsb7rKT2yn3iv0Bfac7dTAIubnnmL%2BO%2FOAqWsyoN%2FLLmKtjFqiVuRS6r2nWvdr%2BoVFZHpWPRLNMxCHOW6b7X%2BcPmpsgNM3RyqtX0VjNTdMH0MJRfj6QbsYzs6KmmoeV2CKlZ9gM%2FJgD31LU%2FtXKGFDASoGpE4N5n9mc98RPEBcD0pFeal83kIuztTLXz1aqebveZJiMqaYgBDpbI4KWHE9OqC1dPcWzuO071l3%2Be30Iz5rXIiL7ZHlkWDK7lcG2%2Ft1sSsBaLMNuFhcMGOqUBRMNmPicSAVQHSOsRAgelADq6xuVD5MPhyv1FQlvOfJEXMyJAZxf3ISx%2B3EBjw6na%2Fnk92a%2Buv2o7V0U%2BhWAVU%2F12dw%2BdkNM8mMIQAzzN1ud4KR59c15DTUloTknNgHR7mqZr3w01sePoNdCj%2FFq7SQ3m6NdJ9FEuAcMgcX28%2B2fSl90CDIlo2koQBm4sFbG5mEZoBRBU26qHLQUPH4pF7koP5ABH&X-Amz-Signature=0e937249ba23546509a78c7ce496495c7bfef2a7ddedb50cf01afd7e818e159b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRK5KTN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr83Aej2v4MQdOnViaqqkpOP9JKQzNRbh1puhbX8v3nAiEA7kcuuBkJ0Jski%2Fdi0x6%2FbkAiNhlR3QKw%2FO864vHmGswqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhzYk2bfQjaOUQEASrcA0RNYytLTrVNV6wg4gTfqRcwnfdHlHe8J3%2BJDX2dWhsyS%2Bd11iVefB1WQHiaDGhHGy%2Fc%2F30hthFSQSP0U91OsOJ8%2Fpj8eKFrenNkaICylY73DShvg9L5GA548QzZ42b6ing31innE%2FLXGqCFFtgMi%2B7AUbf6hqRHzjs6rOQc4QXXF1KwLdhFDJlhZ83MuAfrfLrOJc3oTS7cD%2F%2BwWZYi%2Fa61zTWjaQnVHMeqbM424LLOtTL5gN4Cn6%2Fo6aOsFrXOPDr03X%2BQckRaWda4N5wrTDChPUfPNl0ITGZNOiv9kSssvSGd%2FrGQr4Epw7vupggbDfr7YMzcdzxGeAgR0L35Gj2G%2BjexaML61ZZ3NQQ%2BBgnjBb5Onnw6xsb7rKT2yn3iv0Bfac7dTAIubnnmL%2BO%2FOAqWsyoN%2FLLmKtjFqiVuRS6r2nWvdr%2BoVFZHpWPRLNMxCHOW6b7X%2BcPmpsgNM3RyqtX0VjNTdMH0MJRfj6QbsYzs6KmmoeV2CKlZ9gM%2FJgD31LU%2FtXKGFDASoGpE4N5n9mc98RPEBcD0pFeal83kIuztTLXz1aqebveZJiMqaYgBDpbI4KWHE9OqC1dPcWzuO071l3%2Be30Iz5rXIiL7ZHlkWDK7lcG2%2Ft1sSsBaLMNuFhcMGOqUBRMNmPicSAVQHSOsRAgelADq6xuVD5MPhyv1FQlvOfJEXMyJAZxf3ISx%2B3EBjw6na%2Fnk92a%2Buv2o7V0U%2BhWAVU%2F12dw%2BdkNM8mMIQAzzN1ud4KR59c15DTUloTknNgHR7mqZr3w01sePoNdCj%2FFq7SQ3m6NdJ9FEuAcMgcX28%2B2fSl90CDIlo2koQBm4sFbG5mEZoBRBU26qHLQUPH4pF7koP5ABH&X-Amz-Signature=43ca73f350bec7c5a9e0429005df7ea661e294d6a0abccdcc3c5a56464be5a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
