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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYAYSX7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCXuPCm4PH7Kbx1e6JLVuZjqDTzav13qAokpiBUBqmDKQIgY%2F0%2F2MrVktcQcMlW0NJLFTA26KZxLy08LE5ZebMVEgsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0W%2BaLwLxanr%2Bx2ISrcAzVjD%2Ffpq1oCDJbvRhCL7LX%2FDTOkp14ncJlpb3vWrhUjlr%2FeNaU%2BuXUgMPkPwIWvFAN5hMzLMhRzftc7EL4KmIzBQEeUpwbQ3jgd%2FmJV5QzDlJOHyWmb00Moa1MBxDfdye%2BW%2FHf7V0FZiY1DXKl4%2FWr1eR0Cbw7QDHPbjbvKthVqHv8oWep4hukaxIbpPKr9Ocuxwlil%2BUVA06TjR60dJW3p4z%2F6DDd39P%2BrQt1bfk25tjicXHYWtCr6rod9XetdV43KrGH8SFf%2FDZYnqcE0DCAMXs8eQc1KuIs0IIO9ZMgPJDzhgVfho8Dn8OVM3kbOWUQ6qPDrAT4aIo%2Bb1K4eVWW%2BreajmN%2BU2WoT2mhrBIGhibWmcqSWc6JRRk%2BnaDBEU5sAcFrU8%2BuKnt8%2Bq5smbl2HJuE05nF7DGppC3Kiess60lC7JIOF6SS%2BNB%2BabhuwZingA7UqCnQ5f64Sw%2B7wMdWVz8gnRjUWwgTfPdsTcxelld5O%2BSCWviBUOnU9ihBPPXgOIdoBvRUX06A0e7HRUFP01qxMeRS4qRAZVLtPWPLZeK6nsYx2Ux%2BUv%2BghF%2B8g7g97FHy1CZbOn%2FiKo7B2BDpW7eF7ZYNN0V2LFRSdfTD%2FQmZTG%2FD8O%2Fb0KDmNMK2uuL8GOqUBt8vjqjA2vutd4DdkDBXtEye9fPU9ZP7jiG24PtptBKUll2Wgbr%2BH52vRxMmAu4T%2BfXFwdZyHADhvABHiQ755HQKHiaQNrTBt76rEacaArRMlaBWuTnWM5W7Ag4mli3IpGFjveRxHEKqv0sN6rJjuIVIE37Xj3A%2FYBh6HKkxMXniW%2F7HdaiN8PzhdnOs45GwTPeZShz3qnwEIg3Di70amuri%2BjO9h&X-Amz-Signature=5f4c0c53ba0105c6c85f41ea5482b704cc561e19a29fc2b356f9ce73b58e8c40&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYAYSX7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCXuPCm4PH7Kbx1e6JLVuZjqDTzav13qAokpiBUBqmDKQIgY%2F0%2F2MrVktcQcMlW0NJLFTA26KZxLy08LE5ZebMVEgsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0W%2BaLwLxanr%2Bx2ISrcAzVjD%2Ffpq1oCDJbvRhCL7LX%2FDTOkp14ncJlpb3vWrhUjlr%2FeNaU%2BuXUgMPkPwIWvFAN5hMzLMhRzftc7EL4KmIzBQEeUpwbQ3jgd%2FmJV5QzDlJOHyWmb00Moa1MBxDfdye%2BW%2FHf7V0FZiY1DXKl4%2FWr1eR0Cbw7QDHPbjbvKthVqHv8oWep4hukaxIbpPKr9Ocuxwlil%2BUVA06TjR60dJW3p4z%2F6DDd39P%2BrQt1bfk25tjicXHYWtCr6rod9XetdV43KrGH8SFf%2FDZYnqcE0DCAMXs8eQc1KuIs0IIO9ZMgPJDzhgVfho8Dn8OVM3kbOWUQ6qPDrAT4aIo%2Bb1K4eVWW%2BreajmN%2BU2WoT2mhrBIGhibWmcqSWc6JRRk%2BnaDBEU5sAcFrU8%2BuKnt8%2Bq5smbl2HJuE05nF7DGppC3Kiess60lC7JIOF6SS%2BNB%2BabhuwZingA7UqCnQ5f64Sw%2B7wMdWVz8gnRjUWwgTfPdsTcxelld5O%2BSCWviBUOnU9ihBPPXgOIdoBvRUX06A0e7HRUFP01qxMeRS4qRAZVLtPWPLZeK6nsYx2Ux%2BUv%2BghF%2B8g7g97FHy1CZbOn%2FiKo7B2BDpW7eF7ZYNN0V2LFRSdfTD%2FQmZTG%2FD8O%2Fb0KDmNMK2uuL8GOqUBt8vjqjA2vutd4DdkDBXtEye9fPU9ZP7jiG24PtptBKUll2Wgbr%2BH52vRxMmAu4T%2BfXFwdZyHADhvABHiQ755HQKHiaQNrTBt76rEacaArRMlaBWuTnWM5W7Ag4mli3IpGFjveRxHEKqv0sN6rJjuIVIE37Xj3A%2FYBh6HKkxMXniW%2F7HdaiN8PzhdnOs45GwTPeZShz3qnwEIg3Di70amuri%2BjO9h&X-Amz-Signature=ee15afd793b244823bf9fdfd4cc7851aaa0d5d5a854f9a3279bf77c025f4df91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYAYSX7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCXuPCm4PH7Kbx1e6JLVuZjqDTzav13qAokpiBUBqmDKQIgY%2F0%2F2MrVktcQcMlW0NJLFTA26KZxLy08LE5ZebMVEgsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0W%2BaLwLxanr%2Bx2ISrcAzVjD%2Ffpq1oCDJbvRhCL7LX%2FDTOkp14ncJlpb3vWrhUjlr%2FeNaU%2BuXUgMPkPwIWvFAN5hMzLMhRzftc7EL4KmIzBQEeUpwbQ3jgd%2FmJV5QzDlJOHyWmb00Moa1MBxDfdye%2BW%2FHf7V0FZiY1DXKl4%2FWr1eR0Cbw7QDHPbjbvKthVqHv8oWep4hukaxIbpPKr9Ocuxwlil%2BUVA06TjR60dJW3p4z%2F6DDd39P%2BrQt1bfk25tjicXHYWtCr6rod9XetdV43KrGH8SFf%2FDZYnqcE0DCAMXs8eQc1KuIs0IIO9ZMgPJDzhgVfho8Dn8OVM3kbOWUQ6qPDrAT4aIo%2Bb1K4eVWW%2BreajmN%2BU2WoT2mhrBIGhibWmcqSWc6JRRk%2BnaDBEU5sAcFrU8%2BuKnt8%2Bq5smbl2HJuE05nF7DGppC3Kiess60lC7JIOF6SS%2BNB%2BabhuwZingA7UqCnQ5f64Sw%2B7wMdWVz8gnRjUWwgTfPdsTcxelld5O%2BSCWviBUOnU9ihBPPXgOIdoBvRUX06A0e7HRUFP01qxMeRS4qRAZVLtPWPLZeK6nsYx2Ux%2BUv%2BghF%2B8g7g97FHy1CZbOn%2FiKo7B2BDpW7eF7ZYNN0V2LFRSdfTD%2FQmZTG%2FD8O%2Fb0KDmNMK2uuL8GOqUBt8vjqjA2vutd4DdkDBXtEye9fPU9ZP7jiG24PtptBKUll2Wgbr%2BH52vRxMmAu4T%2BfXFwdZyHADhvABHiQ755HQKHiaQNrTBt76rEacaArRMlaBWuTnWM5W7Ag4mli3IpGFjveRxHEKqv0sN6rJjuIVIE37Xj3A%2FYBh6HKkxMXniW%2F7HdaiN8PzhdnOs45GwTPeZShz3qnwEIg3Di70amuri%2BjO9h&X-Amz-Signature=6b9abfb95a75ca73df5c59cff4b0babe6cfd5ad7ba33322a19dfa9990d0c4d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
