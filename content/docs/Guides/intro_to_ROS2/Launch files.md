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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OLQI57%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEUjS7Ysw65Le%2BqrtaZ1ZFz%2Ba%2FDvXQliS5NfKAFY4ICQAiEA6rLV40uodigGY%2FOtTODKs2K1iHsPF4LZG8A2D6%2Bsd44qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBrXibpKlTmHgW0BCrcA%2FJrRpAryOEvNSj%2BIijpKN%2FADLSZBnUN8udvaLZkm%2BNaxuJg5jYK%2FwxiEhRCSoVLw1X9xr4p%2BhFPd%2FiXKRATT%2FB3ixA37%2FH%2F%2FDihrpGSWx4wjJTcufZ1Or2BiVamCCnsNSNvYaLXyHynloZJhLJt68HwrKeVAzrQ6y8Ii1oeG5kF4h1iCBhCrP5dOROvdEOOo2YF1HqD4vd%2B9pfS8Pn4kwvm39w6i5M5UyyWsLUYF8JVq0AL%2FZaHLgmIvHfwIIgegl3hqRLuN%2FdyeQWNyWzaj6WKesYMH%2B8%2Fb4dRKKNMV%2BqE1Ap1pW0ftBPJosnE9%2BI5thzvEnFgXWTbb5QiGj1w%2FtxCXoAuNSj9%2Bp0ZrGomhwqBgCkRxkOm5CTrTXlzTY3QKqU%2BMniUjmUYt8%2F%2FlTPtu8O8fW8l3FQzJIsyTHvIPN%2BWu1oJmZl%2BXbTLnOBzw3cHL1qYHHs7B8nqP%2Fk8dLA24S%2Bf4G4h2%2F6oykYPv9XaJSc%2F6ClgH1ZmkK%2Btz8x8mlZnbgoRfPWkZHtvwkj0fhbaidPX0k7IE2HRXcbh3UxY2xBQ43QJp%2BT7Jq6Fdu%2Fu4FCrKj%2B1fGhPfWD37GAJLgktHy%2BbRy7CpPxZVIFHInn8ZaNwu3NwNAgzaIht9yWyML%2BVjL4GOqUB%2FSiKugmBfF46JRa27GdTkB1n436f2nvzXWaNtMYSl%2BcF3s6xDjfNgk6J8v4F3rWowgeaQlZowc6hUiL6U3OErNEVmlMdMlGbSAxqSC1w0tpBBTXw%2BtmvfZ8LqZMc0mMq7wsRcuYonl9f6NbGiG8m1ph5bRJMCcEF1Il9uxFTzX52pVv6iwBb%2Fp2e4GYg87CwRaAMQThUfmsror7410odrMP4cUsC&X-Amz-Signature=57e7ceccbac6c30b92b1cca0f91d4ebd08728fa08afd9de072d60fe56154aa2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OLQI57%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEUjS7Ysw65Le%2BqrtaZ1ZFz%2Ba%2FDvXQliS5NfKAFY4ICQAiEA6rLV40uodigGY%2FOtTODKs2K1iHsPF4LZG8A2D6%2Bsd44qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBrXibpKlTmHgW0BCrcA%2FJrRpAryOEvNSj%2BIijpKN%2FADLSZBnUN8udvaLZkm%2BNaxuJg5jYK%2FwxiEhRCSoVLw1X9xr4p%2BhFPd%2FiXKRATT%2FB3ixA37%2FH%2F%2FDihrpGSWx4wjJTcufZ1Or2BiVamCCnsNSNvYaLXyHynloZJhLJt68HwrKeVAzrQ6y8Ii1oeG5kF4h1iCBhCrP5dOROvdEOOo2YF1HqD4vd%2B9pfS8Pn4kwvm39w6i5M5UyyWsLUYF8JVq0AL%2FZaHLgmIvHfwIIgegl3hqRLuN%2FdyeQWNyWzaj6WKesYMH%2B8%2Fb4dRKKNMV%2BqE1Ap1pW0ftBPJosnE9%2BI5thzvEnFgXWTbb5QiGj1w%2FtxCXoAuNSj9%2Bp0ZrGomhwqBgCkRxkOm5CTrTXlzTY3QKqU%2BMniUjmUYt8%2F%2FlTPtu8O8fW8l3FQzJIsyTHvIPN%2BWu1oJmZl%2BXbTLnOBzw3cHL1qYHHs7B8nqP%2Fk8dLA24S%2Bf4G4h2%2F6oykYPv9XaJSc%2F6ClgH1ZmkK%2Btz8x8mlZnbgoRfPWkZHtvwkj0fhbaidPX0k7IE2HRXcbh3UxY2xBQ43QJp%2BT7Jq6Fdu%2Fu4FCrKj%2B1fGhPfWD37GAJLgktHy%2BbRy7CpPxZVIFHInn8ZaNwu3NwNAgzaIht9yWyML%2BVjL4GOqUB%2FSiKugmBfF46JRa27GdTkB1n436f2nvzXWaNtMYSl%2BcF3s6xDjfNgk6J8v4F3rWowgeaQlZowc6hUiL6U3OErNEVmlMdMlGbSAxqSC1w0tpBBTXw%2BtmvfZ8LqZMc0mMq7wsRcuYonl9f6NbGiG8m1ph5bRJMCcEF1Il9uxFTzX52pVv6iwBb%2Fp2e4GYg87CwRaAMQThUfmsror7410odrMP4cUsC&X-Amz-Signature=00095b6a4bbe9435e41e42d1e1b7a36adca62968bda378ea5fb737c6b688fc7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OLQI57%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEUjS7Ysw65Le%2BqrtaZ1ZFz%2Ba%2FDvXQliS5NfKAFY4ICQAiEA6rLV40uodigGY%2FOtTODKs2K1iHsPF4LZG8A2D6%2Bsd44qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBrXibpKlTmHgW0BCrcA%2FJrRpAryOEvNSj%2BIijpKN%2FADLSZBnUN8udvaLZkm%2BNaxuJg5jYK%2FwxiEhRCSoVLw1X9xr4p%2BhFPd%2FiXKRATT%2FB3ixA37%2FH%2F%2FDihrpGSWx4wjJTcufZ1Or2BiVamCCnsNSNvYaLXyHynloZJhLJt68HwrKeVAzrQ6y8Ii1oeG5kF4h1iCBhCrP5dOROvdEOOo2YF1HqD4vd%2B9pfS8Pn4kwvm39w6i5M5UyyWsLUYF8JVq0AL%2FZaHLgmIvHfwIIgegl3hqRLuN%2FdyeQWNyWzaj6WKesYMH%2B8%2Fb4dRKKNMV%2BqE1Ap1pW0ftBPJosnE9%2BI5thzvEnFgXWTbb5QiGj1w%2FtxCXoAuNSj9%2Bp0ZrGomhwqBgCkRxkOm5CTrTXlzTY3QKqU%2BMniUjmUYt8%2F%2FlTPtu8O8fW8l3FQzJIsyTHvIPN%2BWu1oJmZl%2BXbTLnOBzw3cHL1qYHHs7B8nqP%2Fk8dLA24S%2Bf4G4h2%2F6oykYPv9XaJSc%2F6ClgH1ZmkK%2Btz8x8mlZnbgoRfPWkZHtvwkj0fhbaidPX0k7IE2HRXcbh3UxY2xBQ43QJp%2BT7Jq6Fdu%2Fu4FCrKj%2B1fGhPfWD37GAJLgktHy%2BbRy7CpPxZVIFHInn8ZaNwu3NwNAgzaIht9yWyML%2BVjL4GOqUB%2FSiKugmBfF46JRa27GdTkB1n436f2nvzXWaNtMYSl%2BcF3s6xDjfNgk6J8v4F3rWowgeaQlZowc6hUiL6U3OErNEVmlMdMlGbSAxqSC1w0tpBBTXw%2BtmvfZ8LqZMc0mMq7wsRcuYonl9f6NbGiG8m1ph5bRJMCcEF1Il9uxFTzX52pVv6iwBb%2Fp2e4GYg87CwRaAMQThUfmsror7410odrMP4cUsC&X-Amz-Signature=5661d24cb69360b4115e3b8115052a6a466f8431a0d702f8f22696b3dcdb0be3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
