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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PY7OT7M%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDsVR3JkLWlIcB7ZLWIHqO8btQVzBP1uyT2viJa0W5nfAiAAukBvV61U%2B659qt9YVB6CGh10U1JZ6tygkKa1%2BPPr%2BCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfFj1%2BRuYTQUIr9tKtwD8Vh%2FZk4Aj7TPXgmWSiBknvhf78H72AYlJzHSH3gf4WCTx%2Bzdoxr5CZHIul7q6bXvACQemmyyoaWe0Gypf0Vr1%2BSx%2BpL08J9p5HhjIVVObt5yYmA7Z6Tg%2FTdi2fqqnXejK9FRoFsdz37WZAkV4OTf4GhRxx46j9faIGqjGRMqaTE39xQRbSJMOuMXSvvGLXtlWK%2B1yrmYwmgJnGPTzehku95k2rprgvXDYAcZ8nWTBxiEM8S79Lb5uh%2BTMnNgqSQhxvRvwdJkZJuPJB01u2zqoGNRzTNIq%2FsXgkGNpUv8TJcGZSs8WuZx7H0MLqKryIpB%2BEQmuYiobr%2Fot2uonSaomuxPMKpvRj1lNNzDrlmlPjYW48u%2FX5MPjE2dH%2FMdizfmPcCTf4mV92usc7Kbr%2Fq04CYfOOKUwamFStEtAfYrGwEFK7ZRImswHHyUpBpayaeF0sCeVk5p8nu%2B3VE3rcX2o6jaOKez7KFCIAFooG0JEROVOnTxlZdp3LfzAwQfUmvqm7xYHTDTfTtfjSyAL0Fxh9WTykb48QkQRCgb6tRZwbU5dp811%2B9U3iktg%2BBRs3qCh3kapazseFX95k%2B6LwWGK%2BekQeLvSwmWr4yPxrzWdrclflNheYUcO8l6wJMw1YmtvwY6pgGoCKylHBOELSX49hudtbw5eda6xqQSNKRITO%2FtawA0ITAJ%2BWVFI0HAhNEEu3j4OwhsoKL5v7vUgDWaxKMql7gcljyRrBmnkXx7H83mIn%2FC%2FlAQnEj6DvmU%2BlHyOynZbbTvI6Qd%2F4j4vLZaXtQunNAL74wffG8%2BmDUcbOnVcvFe%2Fp0m0aR1XXPMVpl5o8Zog5PXyhchqIOT%2Bq%2BC3VjPcKiu6LVpTchl&X-Amz-Signature=a292c217098788318839ed26adda223b9c1d59d67326b30cca3645807d4df7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PY7OT7M%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDsVR3JkLWlIcB7ZLWIHqO8btQVzBP1uyT2viJa0W5nfAiAAukBvV61U%2B659qt9YVB6CGh10U1JZ6tygkKa1%2BPPr%2BCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfFj1%2BRuYTQUIr9tKtwD8Vh%2FZk4Aj7TPXgmWSiBknvhf78H72AYlJzHSH3gf4WCTx%2Bzdoxr5CZHIul7q6bXvACQemmyyoaWe0Gypf0Vr1%2BSx%2BpL08J9p5HhjIVVObt5yYmA7Z6Tg%2FTdi2fqqnXejK9FRoFsdz37WZAkV4OTf4GhRxx46j9faIGqjGRMqaTE39xQRbSJMOuMXSvvGLXtlWK%2B1yrmYwmgJnGPTzehku95k2rprgvXDYAcZ8nWTBxiEM8S79Lb5uh%2BTMnNgqSQhxvRvwdJkZJuPJB01u2zqoGNRzTNIq%2FsXgkGNpUv8TJcGZSs8WuZx7H0MLqKryIpB%2BEQmuYiobr%2Fot2uonSaomuxPMKpvRj1lNNzDrlmlPjYW48u%2FX5MPjE2dH%2FMdizfmPcCTf4mV92usc7Kbr%2Fq04CYfOOKUwamFStEtAfYrGwEFK7ZRImswHHyUpBpayaeF0sCeVk5p8nu%2B3VE3rcX2o6jaOKez7KFCIAFooG0JEROVOnTxlZdp3LfzAwQfUmvqm7xYHTDTfTtfjSyAL0Fxh9WTykb48QkQRCgb6tRZwbU5dp811%2B9U3iktg%2BBRs3qCh3kapazseFX95k%2B6LwWGK%2BekQeLvSwmWr4yPxrzWdrclflNheYUcO8l6wJMw1YmtvwY6pgGoCKylHBOELSX49hudtbw5eda6xqQSNKRITO%2FtawA0ITAJ%2BWVFI0HAhNEEu3j4OwhsoKL5v7vUgDWaxKMql7gcljyRrBmnkXx7H83mIn%2FC%2FlAQnEj6DvmU%2BlHyOynZbbTvI6Qd%2F4j4vLZaXtQunNAL74wffG8%2BmDUcbOnVcvFe%2Fp0m0aR1XXPMVpl5o8Zog5PXyhchqIOT%2Bq%2BC3VjPcKiu6LVpTchl&X-Amz-Signature=3f6fdc59868e56d7b4c6e94189e1e3e32f2a7a3b0568e8a200bac83b416e0a67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PY7OT7M%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDsVR3JkLWlIcB7ZLWIHqO8btQVzBP1uyT2viJa0W5nfAiAAukBvV61U%2B659qt9YVB6CGh10U1JZ6tygkKa1%2BPPr%2BCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfFj1%2BRuYTQUIr9tKtwD8Vh%2FZk4Aj7TPXgmWSiBknvhf78H72AYlJzHSH3gf4WCTx%2Bzdoxr5CZHIul7q6bXvACQemmyyoaWe0Gypf0Vr1%2BSx%2BpL08J9p5HhjIVVObt5yYmA7Z6Tg%2FTdi2fqqnXejK9FRoFsdz37WZAkV4OTf4GhRxx46j9faIGqjGRMqaTE39xQRbSJMOuMXSvvGLXtlWK%2B1yrmYwmgJnGPTzehku95k2rprgvXDYAcZ8nWTBxiEM8S79Lb5uh%2BTMnNgqSQhxvRvwdJkZJuPJB01u2zqoGNRzTNIq%2FsXgkGNpUv8TJcGZSs8WuZx7H0MLqKryIpB%2BEQmuYiobr%2Fot2uonSaomuxPMKpvRj1lNNzDrlmlPjYW48u%2FX5MPjE2dH%2FMdizfmPcCTf4mV92usc7Kbr%2Fq04CYfOOKUwamFStEtAfYrGwEFK7ZRImswHHyUpBpayaeF0sCeVk5p8nu%2B3VE3rcX2o6jaOKez7KFCIAFooG0JEROVOnTxlZdp3LfzAwQfUmvqm7xYHTDTfTtfjSyAL0Fxh9WTykb48QkQRCgb6tRZwbU5dp811%2B9U3iktg%2BBRs3qCh3kapazseFX95k%2B6LwWGK%2BekQeLvSwmWr4yPxrzWdrclflNheYUcO8l6wJMw1YmtvwY6pgGoCKylHBOELSX49hudtbw5eda6xqQSNKRITO%2FtawA0ITAJ%2BWVFI0HAhNEEu3j4OwhsoKL5v7vUgDWaxKMql7gcljyRrBmnkXx7H83mIn%2FC%2FlAQnEj6DvmU%2BlHyOynZbbTvI6Qd%2F4j4vLZaXtQunNAL74wffG8%2BmDUcbOnVcvFe%2Fp0m0aR1XXPMVpl5o8Zog5PXyhchqIOT%2Bq%2BC3VjPcKiu6LVpTchl&X-Amz-Signature=639873dbaed9265a3f9e02fcf7496dc108e6f1dd099ca9e0bab4d552a6062821&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
