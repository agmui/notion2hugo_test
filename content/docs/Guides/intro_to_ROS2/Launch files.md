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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=6e979a41a5e1bfc823b75b05740769853f515cae2571bc8cfbf8804f1f22c89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=4cf00312a281021d38b89dd19ad8c156f3bb8b8f80daf39ebbe2cc05fd579b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=1659635ab6e2fcc1912bd47c55318386f750fce951ffa223aae5e66b6262de55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
