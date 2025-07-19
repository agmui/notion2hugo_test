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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAWFZZN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNUMEkqT3oRGPsn5cTcz6ibaurtWRnCgHG9rHK4qzDVAIhANZzmGM18K3xpYah6LyC3dSdolCc2b69UoFUm1r3k%2FbKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7hgwwk%2BoB7xH53u8q3AOiA8x2yptgA4bVNBsm%2Bl%2FHZIQflv%2FMdAb6EbADm23eHH6TYI8coQKHTsr81LC3Snmzhsglf7CS2qlFyctschqRzIqBjGMBbE%2F3%2BRlxKVKj7t%2B0mJlVSKctYjMeCOrc1qv5r5t7hFGBK%2BqHphhRoveds7DzBiJY%2Fq60uEk1m0JCjXm1WE33UZXx8naIpjI9VrvKx6Kni9w2vnKtXZ9AiUDZ%2BCu92s%2B36gmFrupGpikB1RmqSBFCN60ZrknAEPH%2BACg7ziiy8Dip4GsJ6y7euY78lS8xhTHPS4TsauyGscG78fu1OBmKtLApBzJmRh8iq5cxvY4zhY7O1Jw4QL9bHS0ltaDcAHy%2FmZT07ba9x7pcfwhvoLhBcuqFWzsOiWeczVWhWNnS32hgvo5cYUHM%2FuC0B181sx2M0JTRqEpJlhp1kK2z51N9czZBlOXiFNQjqNikqHmJG3fPHweOpKOv%2BZsSuSxki%2BqkyuRfod%2BQrgXshcANC%2F4DkmPLDI4R%2BrhUX7p%2FxQooHh91ysydcAejhH%2FiKrNful9ustoNL%2FGC0ZuNyYj7ByYqYksnt3LfcTVlf3ZvWKYFDeHK7IHgvw%2BSjnmh%2BMudN44%2FBffQOKM8tdLjEbrs6R%2Bxj0CFe9HBOzC%2F9e%2FDBjqkAYSTk7ugX%2BSFhfG%2F7GIXZJRBBUN%2FKCWk7BxDrGw8YrBvdOKx30Cqhq2JADLpdL%2BJFOEIA9mMF%2FsSDbHF2MRq%2BhmASrla31HJ91OSJSvpJTz%2FN2WiQu6pIwjVmgUwZJFrRZi3a%2FTHyI1zNxYgmUR1t%2BmY0NVt%2BfXMg8BXBmwgArNH2j1wcxwh1dNhAOK8wj9EcQanRwuFV76fU7yQr1te%2B0ODZgOd&X-Amz-Signature=7b432e57068abda853c311fd0e964b518ba115968869dec7c45300c2372bc29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAWFZZN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNUMEkqT3oRGPsn5cTcz6ibaurtWRnCgHG9rHK4qzDVAIhANZzmGM18K3xpYah6LyC3dSdolCc2b69UoFUm1r3k%2FbKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7hgwwk%2BoB7xH53u8q3AOiA8x2yptgA4bVNBsm%2Bl%2FHZIQflv%2FMdAb6EbADm23eHH6TYI8coQKHTsr81LC3Snmzhsglf7CS2qlFyctschqRzIqBjGMBbE%2F3%2BRlxKVKj7t%2B0mJlVSKctYjMeCOrc1qv5r5t7hFGBK%2BqHphhRoveds7DzBiJY%2Fq60uEk1m0JCjXm1WE33UZXx8naIpjI9VrvKx6Kni9w2vnKtXZ9AiUDZ%2BCu92s%2B36gmFrupGpikB1RmqSBFCN60ZrknAEPH%2BACg7ziiy8Dip4GsJ6y7euY78lS8xhTHPS4TsauyGscG78fu1OBmKtLApBzJmRh8iq5cxvY4zhY7O1Jw4QL9bHS0ltaDcAHy%2FmZT07ba9x7pcfwhvoLhBcuqFWzsOiWeczVWhWNnS32hgvo5cYUHM%2FuC0B181sx2M0JTRqEpJlhp1kK2z51N9czZBlOXiFNQjqNikqHmJG3fPHweOpKOv%2BZsSuSxki%2BqkyuRfod%2BQrgXshcANC%2F4DkmPLDI4R%2BrhUX7p%2FxQooHh91ysydcAejhH%2FiKrNful9ustoNL%2FGC0ZuNyYj7ByYqYksnt3LfcTVlf3ZvWKYFDeHK7IHgvw%2BSjnmh%2BMudN44%2FBffQOKM8tdLjEbrs6R%2Bxj0CFe9HBOzC%2F9e%2FDBjqkAYSTk7ugX%2BSFhfG%2F7GIXZJRBBUN%2FKCWk7BxDrGw8YrBvdOKx30Cqhq2JADLpdL%2BJFOEIA9mMF%2FsSDbHF2MRq%2BhmASrla31HJ91OSJSvpJTz%2FN2WiQu6pIwjVmgUwZJFrRZi3a%2FTHyI1zNxYgmUR1t%2BmY0NVt%2BfXMg8BXBmwgArNH2j1wcxwh1dNhAOK8wj9EcQanRwuFV76fU7yQr1te%2B0ODZgOd&X-Amz-Signature=df250640a539479f5c0345158172d2bbc5232d3437447024fff641f08916faac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAWFZZN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNUMEkqT3oRGPsn5cTcz6ibaurtWRnCgHG9rHK4qzDVAIhANZzmGM18K3xpYah6LyC3dSdolCc2b69UoFUm1r3k%2FbKKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7hgwwk%2BoB7xH53u8q3AOiA8x2yptgA4bVNBsm%2Bl%2FHZIQflv%2FMdAb6EbADm23eHH6TYI8coQKHTsr81LC3Snmzhsglf7CS2qlFyctschqRzIqBjGMBbE%2F3%2BRlxKVKj7t%2B0mJlVSKctYjMeCOrc1qv5r5t7hFGBK%2BqHphhRoveds7DzBiJY%2Fq60uEk1m0JCjXm1WE33UZXx8naIpjI9VrvKx6Kni9w2vnKtXZ9AiUDZ%2BCu92s%2B36gmFrupGpikB1RmqSBFCN60ZrknAEPH%2BACg7ziiy8Dip4GsJ6y7euY78lS8xhTHPS4TsauyGscG78fu1OBmKtLApBzJmRh8iq5cxvY4zhY7O1Jw4QL9bHS0ltaDcAHy%2FmZT07ba9x7pcfwhvoLhBcuqFWzsOiWeczVWhWNnS32hgvo5cYUHM%2FuC0B181sx2M0JTRqEpJlhp1kK2z51N9czZBlOXiFNQjqNikqHmJG3fPHweOpKOv%2BZsSuSxki%2BqkyuRfod%2BQrgXshcANC%2F4DkmPLDI4R%2BrhUX7p%2FxQooHh91ysydcAejhH%2FiKrNful9ustoNL%2FGC0ZuNyYj7ByYqYksnt3LfcTVlf3ZvWKYFDeHK7IHgvw%2BSjnmh%2BMudN44%2FBffQOKM8tdLjEbrs6R%2Bxj0CFe9HBOzC%2F9e%2FDBjqkAYSTk7ugX%2BSFhfG%2F7GIXZJRBBUN%2FKCWk7BxDrGw8YrBvdOKx30Cqhq2JADLpdL%2BJFOEIA9mMF%2FsSDbHF2MRq%2BhmASrla31HJ91OSJSvpJTz%2FN2WiQu6pIwjVmgUwZJFrRZi3a%2FTHyI1zNxYgmUR1t%2BmY0NVt%2BfXMg8BXBmwgArNH2j1wcxwh1dNhAOK8wj9EcQanRwuFV76fU7yQr1te%2B0ODZgOd&X-Amz-Signature=e146a50218bf7420ce0561c1153709205aeb861046927bab3a1ff308ac4241ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
