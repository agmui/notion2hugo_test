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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMY2NY3J%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGGLettHbGpnpQQBPHP%2BUyB89lBN7eP1A86Awr%2B8NnIAiAZtW1FaWmlnbGxVGKfpusuOTpyUtcqnfay0NVjqL7rBiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOVSwjMSuNREYGCqeKtwDjBmsMPaVT011E9mwKYfDy9CD6Kcaa1pH7tXhti54HXQ1In4pCbtiHyhc930QnBbCEgfyC%2BSWEVpAEY2uwdqXjHwps08qNRf2QAFYWwyyQBYnW6SdKz9qMsJeNaUBB71yWZRf%2BdEsKbndQEj1QHCPKqeF9ENuv7Q4joo9uR3SRCkM73iMxrlpPsKed5RXDvD8o4n2tvhtRDBocqmjGWE2k77qsMW7hmI4aZHKUCAlTQN8zQhWz9ve2OTtLVa6Rx%2BzfCdeeMu960uenL0DKytEXwZ3gGURz28Ef7X7YQ3h8V9iiFGCYIDPmcG3hsfUu6X2kFoVuxY%2FwuU2IK%2BqaFjYZk4t7BxU8ukvKXpDOM31Hy%2BlSLfzXfdlOR2qw5HMAyUllfmd3tZGml4QimZyB0wyKOHLnAbLWAZ%2BUfIUrGe2JKAldI8wztea7N60a5xXhYW2YAnq2v%2BQMAPZ0Bs1vUa02q2VfuSUtf9t%2BOdLipk6B0OWXRqQUfeB7UfF5U%2FR3GVhtFYzBHAuj%2BYeHC55UtMnUh%2BfNBVh4S0Aa8dxO%2Ba2jtGTlW1MCE6uttuEFp9Hdhg0OYuMMmjw8%2BhH9MyAh3tcUyQHjsw2ykA7vXTPXhetV7TAik%2BKGq%2FXBUfDdjwwnpjuvAY6pgHC1teMH9TiZk9r%2Fc5mHnHkf6fGdcsl7amh%2BqgvgQweZrb9IQfpbKzND3FTDSSdtYpjvTEY3ZaHdGhItAK2RsaFBk%2BByrZtGorzdTs4WTnJRKiXAR7hwF%2BJEitZlhYOmkm4eKSf3rRbeXf%2FwuB9Qpq6tTwoMT3DEpu1Ckqn3nrQz%2BaX3B%2BCMMMH3S%2F2kdW1bBYxBO9C57G1GJ9uEhfdPcw979r1Ir%2FC&X-Amz-Signature=b79f9986d215f6286946a29512edb0e1dea8a5de3335efc35604c3633b372f26&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMY2NY3J%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGGLettHbGpnpQQBPHP%2BUyB89lBN7eP1A86Awr%2B8NnIAiAZtW1FaWmlnbGxVGKfpusuOTpyUtcqnfay0NVjqL7rBiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOVSwjMSuNREYGCqeKtwDjBmsMPaVT011E9mwKYfDy9CD6Kcaa1pH7tXhti54HXQ1In4pCbtiHyhc930QnBbCEgfyC%2BSWEVpAEY2uwdqXjHwps08qNRf2QAFYWwyyQBYnW6SdKz9qMsJeNaUBB71yWZRf%2BdEsKbndQEj1QHCPKqeF9ENuv7Q4joo9uR3SRCkM73iMxrlpPsKed5RXDvD8o4n2tvhtRDBocqmjGWE2k77qsMW7hmI4aZHKUCAlTQN8zQhWz9ve2OTtLVa6Rx%2BzfCdeeMu960uenL0DKytEXwZ3gGURz28Ef7X7YQ3h8V9iiFGCYIDPmcG3hsfUu6X2kFoVuxY%2FwuU2IK%2BqaFjYZk4t7BxU8ukvKXpDOM31Hy%2BlSLfzXfdlOR2qw5HMAyUllfmd3tZGml4QimZyB0wyKOHLnAbLWAZ%2BUfIUrGe2JKAldI8wztea7N60a5xXhYW2YAnq2v%2BQMAPZ0Bs1vUa02q2VfuSUtf9t%2BOdLipk6B0OWXRqQUfeB7UfF5U%2FR3GVhtFYzBHAuj%2BYeHC55UtMnUh%2BfNBVh4S0Aa8dxO%2Ba2jtGTlW1MCE6uttuEFp9Hdhg0OYuMMmjw8%2BhH9MyAh3tcUyQHjsw2ykA7vXTPXhetV7TAik%2BKGq%2FXBUfDdjwwnpjuvAY6pgHC1teMH9TiZk9r%2Fc5mHnHkf6fGdcsl7amh%2BqgvgQweZrb9IQfpbKzND3FTDSSdtYpjvTEY3ZaHdGhItAK2RsaFBk%2BByrZtGorzdTs4WTnJRKiXAR7hwF%2BJEitZlhYOmkm4eKSf3rRbeXf%2FwuB9Qpq6tTwoMT3DEpu1Ckqn3nrQz%2BaX3B%2BCMMMH3S%2F2kdW1bBYxBO9C57G1GJ9uEhfdPcw979r1Ir%2FC&X-Amz-Signature=bb5f48a79bbdd1d445224cbcafe94dbcd276d0d4abeeb02fee091be3f8598f25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMY2NY3J%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGGLettHbGpnpQQBPHP%2BUyB89lBN7eP1A86Awr%2B8NnIAiAZtW1FaWmlnbGxVGKfpusuOTpyUtcqnfay0NVjqL7rBiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOVSwjMSuNREYGCqeKtwDjBmsMPaVT011E9mwKYfDy9CD6Kcaa1pH7tXhti54HXQ1In4pCbtiHyhc930QnBbCEgfyC%2BSWEVpAEY2uwdqXjHwps08qNRf2QAFYWwyyQBYnW6SdKz9qMsJeNaUBB71yWZRf%2BdEsKbndQEj1QHCPKqeF9ENuv7Q4joo9uR3SRCkM73iMxrlpPsKed5RXDvD8o4n2tvhtRDBocqmjGWE2k77qsMW7hmI4aZHKUCAlTQN8zQhWz9ve2OTtLVa6Rx%2BzfCdeeMu960uenL0DKytEXwZ3gGURz28Ef7X7YQ3h8V9iiFGCYIDPmcG3hsfUu6X2kFoVuxY%2FwuU2IK%2BqaFjYZk4t7BxU8ukvKXpDOM31Hy%2BlSLfzXfdlOR2qw5HMAyUllfmd3tZGml4QimZyB0wyKOHLnAbLWAZ%2BUfIUrGe2JKAldI8wztea7N60a5xXhYW2YAnq2v%2BQMAPZ0Bs1vUa02q2VfuSUtf9t%2BOdLipk6B0OWXRqQUfeB7UfF5U%2FR3GVhtFYzBHAuj%2BYeHC55UtMnUh%2BfNBVh4S0Aa8dxO%2Ba2jtGTlW1MCE6uttuEFp9Hdhg0OYuMMmjw8%2BhH9MyAh3tcUyQHjsw2ykA7vXTPXhetV7TAik%2BKGq%2FXBUfDdjwwnpjuvAY6pgHC1teMH9TiZk9r%2Fc5mHnHkf6fGdcsl7amh%2BqgvgQweZrb9IQfpbKzND3FTDSSdtYpjvTEY3ZaHdGhItAK2RsaFBk%2BByrZtGorzdTs4WTnJRKiXAR7hwF%2BJEitZlhYOmkm4eKSf3rRbeXf%2FwuB9Qpq6tTwoMT3DEpu1Ckqn3nrQz%2BaX3B%2BCMMMH3S%2F2kdW1bBYxBO9C57G1GJ9uEhfdPcw979r1Ir%2FC&X-Amz-Signature=dc151047f82caee2c7cce55bd612b8461f0f5e24bf064f13499224abbabdffec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
