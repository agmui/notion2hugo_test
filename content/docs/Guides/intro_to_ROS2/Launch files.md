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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XBKUKI%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoFHBZnvayLiXD1Lh3KLodhE9pqFkJra3eeT%2BfnNVbuAIhAIBAI7gVs%2BnhpmZLnm%2BgKSi4YJdhq72Vo9kAw0nShzhPKv8DCB0QABoMNjM3NDIzMTgzODA1IgzmT3O2wME6cjt%2Fi4wq3AMCwIdB8izxLRIDbNINis76FQPfc4pH%2FNvWjFvk0U3pPg1Qb5LLOT%2B4dxhxbCJDViFPxHlKWO2qe3c2a3cqxdgw8ID%2BsKDbygSatywFEPLEqNQzbDuRYPVCVePtpa33rQ%2FMNSuWmRKHwWZFR0GflHP08urdmeoRKx4SfNDylHjhG6ZCjSK2CFKPT2UdHMGYHhUPnJu5%2B8y%2BWIZ%2BUGoKlH0MQeVbbCWI9XZidbGTncNeqjFiW1eAy1x314xb5AJnJMcT7Fz0bJtp98mndocNynmpbLY0yPDc%2FlZYp7BQYEQH0Dlx5YdG3e2B7CllbbexhrJUY6iMg2BqMmtSrM3pdPCZf1heoo1QrfT5bem9jusPUzYmUirXOz1SMinocwS2IdiIuY1Hthyo4avg8ztw75lHMlchcjdBaaQbREMoHxpVSn5FypTpheLXNEwp8gLYAOKpOulQbYME1IbTUpYJJxAki5UU2icOgyCjQRKrAu7odaM9bjyT3n7NOY7NU5nnvo%2B%2F4vw1GcpllnbvZuKsEQWdAz5Sr0SikVeKEcncEgHCTBmKk2sPvqM4%2FUq6gOktt7%2FCW0L%2FJRCYCRQzHlaaU0ZjhXTANqQp2QGb4MBP0VudRpdJMdqIgUhjasck5DD%2Bl4y%2FBjqkAaHjNT9PLZN%2BnYzOGvg1Fu6pJ22kEbETm9ZtSyKtfXAisDWaenu7Q%2Bx%2BrWFuuuyl8y9FILWv2PHD0Ao26fJ%2BYsYLz6H6oSETXo2KCJm14tmqsQGZ9eHn8Pyox%2B%2FnD8YSct9Iv1rKX2%2BSm6XHW68XxR%2Bce2%2FPMaUeC9AD4SrzkMVJMHI5xW1vK9zWlGRfGaN4Kp3A3BLg%2BzCxTJRuzk0593aUT8pp&X-Amz-Signature=2ad4727a81a224e39829afc5664ca8219a50bee78339605afe991849ad1c5dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XBKUKI%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoFHBZnvayLiXD1Lh3KLodhE9pqFkJra3eeT%2BfnNVbuAIhAIBAI7gVs%2BnhpmZLnm%2BgKSi4YJdhq72Vo9kAw0nShzhPKv8DCB0QABoMNjM3NDIzMTgzODA1IgzmT3O2wME6cjt%2Fi4wq3AMCwIdB8izxLRIDbNINis76FQPfc4pH%2FNvWjFvk0U3pPg1Qb5LLOT%2B4dxhxbCJDViFPxHlKWO2qe3c2a3cqxdgw8ID%2BsKDbygSatywFEPLEqNQzbDuRYPVCVePtpa33rQ%2FMNSuWmRKHwWZFR0GflHP08urdmeoRKx4SfNDylHjhG6ZCjSK2CFKPT2UdHMGYHhUPnJu5%2B8y%2BWIZ%2BUGoKlH0MQeVbbCWI9XZidbGTncNeqjFiW1eAy1x314xb5AJnJMcT7Fz0bJtp98mndocNynmpbLY0yPDc%2FlZYp7BQYEQH0Dlx5YdG3e2B7CllbbexhrJUY6iMg2BqMmtSrM3pdPCZf1heoo1QrfT5bem9jusPUzYmUirXOz1SMinocwS2IdiIuY1Hthyo4avg8ztw75lHMlchcjdBaaQbREMoHxpVSn5FypTpheLXNEwp8gLYAOKpOulQbYME1IbTUpYJJxAki5UU2icOgyCjQRKrAu7odaM9bjyT3n7NOY7NU5nnvo%2B%2F4vw1GcpllnbvZuKsEQWdAz5Sr0SikVeKEcncEgHCTBmKk2sPvqM4%2FUq6gOktt7%2FCW0L%2FJRCYCRQzHlaaU0ZjhXTANqQp2QGb4MBP0VudRpdJMdqIgUhjasck5DD%2Bl4y%2FBjqkAaHjNT9PLZN%2BnYzOGvg1Fu6pJ22kEbETm9ZtSyKtfXAisDWaenu7Q%2Bx%2BrWFuuuyl8y9FILWv2PHD0Ao26fJ%2BYsYLz6H6oSETXo2KCJm14tmqsQGZ9eHn8Pyox%2B%2FnD8YSct9Iv1rKX2%2BSm6XHW68XxR%2Bce2%2FPMaUeC9AD4SrzkMVJMHI5xW1vK9zWlGRfGaN4Kp3A3BLg%2BzCxTJRuzk0593aUT8pp&X-Amz-Signature=60081f7f0d2bd466d5f3baf599c6ff916a0d67651293544b98b6904815846f79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XBKUKI%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoFHBZnvayLiXD1Lh3KLodhE9pqFkJra3eeT%2BfnNVbuAIhAIBAI7gVs%2BnhpmZLnm%2BgKSi4YJdhq72Vo9kAw0nShzhPKv8DCB0QABoMNjM3NDIzMTgzODA1IgzmT3O2wME6cjt%2Fi4wq3AMCwIdB8izxLRIDbNINis76FQPfc4pH%2FNvWjFvk0U3pPg1Qb5LLOT%2B4dxhxbCJDViFPxHlKWO2qe3c2a3cqxdgw8ID%2BsKDbygSatywFEPLEqNQzbDuRYPVCVePtpa33rQ%2FMNSuWmRKHwWZFR0GflHP08urdmeoRKx4SfNDylHjhG6ZCjSK2CFKPT2UdHMGYHhUPnJu5%2B8y%2BWIZ%2BUGoKlH0MQeVbbCWI9XZidbGTncNeqjFiW1eAy1x314xb5AJnJMcT7Fz0bJtp98mndocNynmpbLY0yPDc%2FlZYp7BQYEQH0Dlx5YdG3e2B7CllbbexhrJUY6iMg2BqMmtSrM3pdPCZf1heoo1QrfT5bem9jusPUzYmUirXOz1SMinocwS2IdiIuY1Hthyo4avg8ztw75lHMlchcjdBaaQbREMoHxpVSn5FypTpheLXNEwp8gLYAOKpOulQbYME1IbTUpYJJxAki5UU2icOgyCjQRKrAu7odaM9bjyT3n7NOY7NU5nnvo%2B%2F4vw1GcpllnbvZuKsEQWdAz5Sr0SikVeKEcncEgHCTBmKk2sPvqM4%2FUq6gOktt7%2FCW0L%2FJRCYCRQzHlaaU0ZjhXTANqQp2QGb4MBP0VudRpdJMdqIgUhjasck5DD%2Bl4y%2FBjqkAaHjNT9PLZN%2BnYzOGvg1Fu6pJ22kEbETm9ZtSyKtfXAisDWaenu7Q%2Bx%2BrWFuuuyl8y9FILWv2PHD0Ao26fJ%2BYsYLz6H6oSETXo2KCJm14tmqsQGZ9eHn8Pyox%2B%2FnD8YSct9Iv1rKX2%2BSm6XHW68XxR%2Bce2%2FPMaUeC9AD4SrzkMVJMHI5xW1vK9zWlGRfGaN4Kp3A3BLg%2BzCxTJRuzk0593aUT8pp&X-Amz-Signature=edb43e6bf298333668cfc8f9e34ed54626e885cec32ce137f3609552e0d8161e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
