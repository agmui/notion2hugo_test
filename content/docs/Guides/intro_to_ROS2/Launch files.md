---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JACRT6V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH5PSCYWGLtu9x1nuQatS5vzJYlkoXiajSe83KSHkmkpAiB5cF%2Fzu8Fv6fRlg%2FNHkAUVW%2BYZNg8%2BfWVDBPGIL2wukiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebxnuz9YN4DcczXTKtwDPPNR1X7%2Bq5JqZjQX%2F1EM6CD5LYGtOr9fzQNhgOsA0KgLYBOc%2F9fxwDCYRcJstOZeNXcA1H%2BEv66JWueUuy5Y82%2FVUObib%2BYOkGGZ9A2DexU4%2B%2FOLaCQ2c1gJhDdgFwOkBoEhnex%2BV29h3WzsSY0X5cCiSlxoQdC0Mb2o2tkafcg%2BbqI3D85BWrvC%2F%2Bm%2F1m%2FbUEKdJxyI9P4eKeQH%2F445MDPZsQudaF%2FsJbvidXQ8UF%2BiOiRO3l5uzgB%2FL6%2BIlcDNIrBy4gJAvqHZbh%2F5kk3JKY0SckyA8bRL2%2FCJLQSPaUDUK59pgg4e2MOPA3pHKRNkpPcrrQ%2BccD5hp1Ntbb4LDeR3NEowFqpy1ie6y9JUGiljRKd%2BDkxCaiMNmDCzmR70%2BGFTB6YuPVvSO9Ubz5Vc7%2FBs7cEtll5fsG8P8pkg1QqiUT92rvP3WqGvebzSql%2FpDoXpDpuIyo4xLeaJMLKKxhpwJNJ2%2ByA8ZE5fW3hVKR0a6GghEzM9e54ddvhOVrohflvjW%2Fk3JPNrJQCYZHm5xLvKJYn8WL3S1pQaOnBwaQG53Yjt2PGFD6svhIiloSf5Oy1stYTD16rD%2FQmeY2ejNMrWW7Ybrh6d7gJsqAD8ehJzMGUzvBYDQj7FoeMw7tadxAY6pgHfORR5PT3KNwcjA1deU2S7LIQBkDBQ4NDY48cLKvn7dK2PI5k8NeoS8F67WMhwDCOtufX6kc5CoIqd%2BjdDTYQ0atlq4VI%2BCqiglQRHA7pbwhSTZckRJ7YFR0eoMAKk3FgipL4NngrmycjP7rtsRQXhVh66MlQTXSYVyOrBRD7BmCalcRAfXcvM71ZRloTxP4fIBReCU%2BmsSdt5UNgYK%2ByrpuCQheLA&X-Amz-Signature=7e812289ebcf146771247303cccb0b7eefbfb983bb0bfacd27615d7c3c8127fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JACRT6V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH5PSCYWGLtu9x1nuQatS5vzJYlkoXiajSe83KSHkmkpAiB5cF%2Fzu8Fv6fRlg%2FNHkAUVW%2BYZNg8%2BfWVDBPGIL2wukiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebxnuz9YN4DcczXTKtwDPPNR1X7%2Bq5JqZjQX%2F1EM6CD5LYGtOr9fzQNhgOsA0KgLYBOc%2F9fxwDCYRcJstOZeNXcA1H%2BEv66JWueUuy5Y82%2FVUObib%2BYOkGGZ9A2DexU4%2B%2FOLaCQ2c1gJhDdgFwOkBoEhnex%2BV29h3WzsSY0X5cCiSlxoQdC0Mb2o2tkafcg%2BbqI3D85BWrvC%2F%2Bm%2F1m%2FbUEKdJxyI9P4eKeQH%2F445MDPZsQudaF%2FsJbvidXQ8UF%2BiOiRO3l5uzgB%2FL6%2BIlcDNIrBy4gJAvqHZbh%2F5kk3JKY0SckyA8bRL2%2FCJLQSPaUDUK59pgg4e2MOPA3pHKRNkpPcrrQ%2BccD5hp1Ntbb4LDeR3NEowFqpy1ie6y9JUGiljRKd%2BDkxCaiMNmDCzmR70%2BGFTB6YuPVvSO9Ubz5Vc7%2FBs7cEtll5fsG8P8pkg1QqiUT92rvP3WqGvebzSql%2FpDoXpDpuIyo4xLeaJMLKKxhpwJNJ2%2ByA8ZE5fW3hVKR0a6GghEzM9e54ddvhOVrohflvjW%2Fk3JPNrJQCYZHm5xLvKJYn8WL3S1pQaOnBwaQG53Yjt2PGFD6svhIiloSf5Oy1stYTD16rD%2FQmeY2ejNMrWW7Ybrh6d7gJsqAD8ehJzMGUzvBYDQj7FoeMw7tadxAY6pgHfORR5PT3KNwcjA1deU2S7LIQBkDBQ4NDY48cLKvn7dK2PI5k8NeoS8F67WMhwDCOtufX6kc5CoIqd%2BjdDTYQ0atlq4VI%2BCqiglQRHA7pbwhSTZckRJ7YFR0eoMAKk3FgipL4NngrmycjP7rtsRQXhVh66MlQTXSYVyOrBRD7BmCalcRAfXcvM71ZRloTxP4fIBReCU%2BmsSdt5UNgYK%2ByrpuCQheLA&X-Amz-Signature=14f779acb9af9c64ab491a7dc64de9f5eaf2a484bbe486c22fd6bfe96277956e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JACRT6V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH5PSCYWGLtu9x1nuQatS5vzJYlkoXiajSe83KSHkmkpAiB5cF%2Fzu8Fv6fRlg%2FNHkAUVW%2BYZNg8%2BfWVDBPGIL2wukiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebxnuz9YN4DcczXTKtwDPPNR1X7%2Bq5JqZjQX%2F1EM6CD5LYGtOr9fzQNhgOsA0KgLYBOc%2F9fxwDCYRcJstOZeNXcA1H%2BEv66JWueUuy5Y82%2FVUObib%2BYOkGGZ9A2DexU4%2B%2FOLaCQ2c1gJhDdgFwOkBoEhnex%2BV29h3WzsSY0X5cCiSlxoQdC0Mb2o2tkafcg%2BbqI3D85BWrvC%2F%2Bm%2F1m%2FbUEKdJxyI9P4eKeQH%2F445MDPZsQudaF%2FsJbvidXQ8UF%2BiOiRO3l5uzgB%2FL6%2BIlcDNIrBy4gJAvqHZbh%2F5kk3JKY0SckyA8bRL2%2FCJLQSPaUDUK59pgg4e2MOPA3pHKRNkpPcrrQ%2BccD5hp1Ntbb4LDeR3NEowFqpy1ie6y9JUGiljRKd%2BDkxCaiMNmDCzmR70%2BGFTB6YuPVvSO9Ubz5Vc7%2FBs7cEtll5fsG8P8pkg1QqiUT92rvP3WqGvebzSql%2FpDoXpDpuIyo4xLeaJMLKKxhpwJNJ2%2ByA8ZE5fW3hVKR0a6GghEzM9e54ddvhOVrohflvjW%2Fk3JPNrJQCYZHm5xLvKJYn8WL3S1pQaOnBwaQG53Yjt2PGFD6svhIiloSf5Oy1stYTD16rD%2FQmeY2ejNMrWW7Ybrh6d7gJsqAD8ehJzMGUzvBYDQj7FoeMw7tadxAY6pgHfORR5PT3KNwcjA1deU2S7LIQBkDBQ4NDY48cLKvn7dK2PI5k8NeoS8F67WMhwDCOtufX6kc5CoIqd%2BjdDTYQ0atlq4VI%2BCqiglQRHA7pbwhSTZckRJ7YFR0eoMAKk3FgipL4NngrmycjP7rtsRQXhVh66MlQTXSYVyOrBRD7BmCalcRAfXcvM71ZRloTxP4fIBReCU%2BmsSdt5UNgYK%2ByrpuCQheLA&X-Amz-Signature=bd7477eeb8beb3b295395978ecc504c40cca6214ca342ed879924626254322e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
