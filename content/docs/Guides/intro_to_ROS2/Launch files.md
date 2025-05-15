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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXAYR6NS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCSKzcFkJRtNv4QzgJqb0AdkztGT9dET3sCk%2FiupywaIgIhALJI4v6aGsF%2BwPmYmLVQrDLJA5KLI990KdETPvthFdz%2FKv8DCCQQABoMNjM3NDIzMTgzODA1IgxU7ZEpgwTn6gVaS%2Fwq3AMre19rbrtjmpIQStan68mx9Q9fw8CShJDfd8i4wj5mTPfHm%2BMEPEoV1Ovz8pvep065AGxsXkveQOULdiSIB9pVI9uqS%2FTSbobYyD6FIXy8DZdeaGSXV8cFc1BKTO1fAldKAq9rHGHB2dvFyOMKJTh1A5HRd3CqLIJivTnuTAUIsonuy4mXUDoOrV8t9Cynr7I3f7g4uJgbDJDqTSrzzKCIz07re9k7xmcYLuzfvxR4lrCh5ErhS7RQWZFw5zMRBpj62xMGxDUbcvq6%2F0MrGRq9V81GyMpGCeOS5cX3sWO%2FmqAB0NFnKu7eimNA97ofJLGxSLW1y2mzS3esZhk12Do9G2HVoCIqgtIDzqLdtFqFRPU%2FKZsXeGpnJ%2B9sV9IWOKx9htkS2Y0DmINKH%2BNsCoUuJyIjs6HmCP5%2BjKxC7GL%2FrTfpdqgtQLCuLrHxNf1Qq71ja%2B1yXhCwERiVRRBeLktR%2BmB08o3rtx9Al4h%2Bx1a%2BFdJsQTaOE83jEeh6qKTfVZHwvl%2BoXJCMW3nToLQ90qEfdsZq%2F%2BGhv54tNVG7c1qBa%2FIRZck%2BgbcTc7CPb6dPp%2BrnP3LcnJvnaro%2B4L86%2B9Aj%2BVWQMHt%2FgDvoCNuAfNN9ht8SLvWNf0JNpSpX6zCLtpXBBjqkAYviExV711v0LYHuJpM0lnYfM0bklgVdLZ2IU%2BcTlsw7oOrclOyVSPXjRXXyuPPK4lm5cPDzq1B6jOh8IIsmbPgENYcmvoytHW5wkldTCaXyroRJCzqpCddxB9fibbgEJEIy8NQPcaitwDhIczVtE%2BYeDL9aMvnCICSXyDDbZvDNd9xDTNXKAPmNBmV6yzCD7LbMXgocBpgreb6KJRq0LqmXN%2BI0&X-Amz-Signature=f9fd87975567ba05e02a788c67ccd7ecf658876a3a63c83eb314ce467ab205b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXAYR6NS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCSKzcFkJRtNv4QzgJqb0AdkztGT9dET3sCk%2FiupywaIgIhALJI4v6aGsF%2BwPmYmLVQrDLJA5KLI990KdETPvthFdz%2FKv8DCCQQABoMNjM3NDIzMTgzODA1IgxU7ZEpgwTn6gVaS%2Fwq3AMre19rbrtjmpIQStan68mx9Q9fw8CShJDfd8i4wj5mTPfHm%2BMEPEoV1Ovz8pvep065AGxsXkveQOULdiSIB9pVI9uqS%2FTSbobYyD6FIXy8DZdeaGSXV8cFc1BKTO1fAldKAq9rHGHB2dvFyOMKJTh1A5HRd3CqLIJivTnuTAUIsonuy4mXUDoOrV8t9Cynr7I3f7g4uJgbDJDqTSrzzKCIz07re9k7xmcYLuzfvxR4lrCh5ErhS7RQWZFw5zMRBpj62xMGxDUbcvq6%2F0MrGRq9V81GyMpGCeOS5cX3sWO%2FmqAB0NFnKu7eimNA97ofJLGxSLW1y2mzS3esZhk12Do9G2HVoCIqgtIDzqLdtFqFRPU%2FKZsXeGpnJ%2B9sV9IWOKx9htkS2Y0DmINKH%2BNsCoUuJyIjs6HmCP5%2BjKxC7GL%2FrTfpdqgtQLCuLrHxNf1Qq71ja%2B1yXhCwERiVRRBeLktR%2BmB08o3rtx9Al4h%2Bx1a%2BFdJsQTaOE83jEeh6qKTfVZHwvl%2BoXJCMW3nToLQ90qEfdsZq%2F%2BGhv54tNVG7c1qBa%2FIRZck%2BgbcTc7CPb6dPp%2BrnP3LcnJvnaro%2B4L86%2B9Aj%2BVWQMHt%2FgDvoCNuAfNN9ht8SLvWNf0JNpSpX6zCLtpXBBjqkAYviExV711v0LYHuJpM0lnYfM0bklgVdLZ2IU%2BcTlsw7oOrclOyVSPXjRXXyuPPK4lm5cPDzq1B6jOh8IIsmbPgENYcmvoytHW5wkldTCaXyroRJCzqpCddxB9fibbgEJEIy8NQPcaitwDhIczVtE%2BYeDL9aMvnCICSXyDDbZvDNd9xDTNXKAPmNBmV6yzCD7LbMXgocBpgreb6KJRq0LqmXN%2BI0&X-Amz-Signature=f15d5769b2d350bfe6b737b834218b4773957023464e57f48c0c22fa3d03ca51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXAYR6NS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCSKzcFkJRtNv4QzgJqb0AdkztGT9dET3sCk%2FiupywaIgIhALJI4v6aGsF%2BwPmYmLVQrDLJA5KLI990KdETPvthFdz%2FKv8DCCQQABoMNjM3NDIzMTgzODA1IgxU7ZEpgwTn6gVaS%2Fwq3AMre19rbrtjmpIQStan68mx9Q9fw8CShJDfd8i4wj5mTPfHm%2BMEPEoV1Ovz8pvep065AGxsXkveQOULdiSIB9pVI9uqS%2FTSbobYyD6FIXy8DZdeaGSXV8cFc1BKTO1fAldKAq9rHGHB2dvFyOMKJTh1A5HRd3CqLIJivTnuTAUIsonuy4mXUDoOrV8t9Cynr7I3f7g4uJgbDJDqTSrzzKCIz07re9k7xmcYLuzfvxR4lrCh5ErhS7RQWZFw5zMRBpj62xMGxDUbcvq6%2F0MrGRq9V81GyMpGCeOS5cX3sWO%2FmqAB0NFnKu7eimNA97ofJLGxSLW1y2mzS3esZhk12Do9G2HVoCIqgtIDzqLdtFqFRPU%2FKZsXeGpnJ%2B9sV9IWOKx9htkS2Y0DmINKH%2BNsCoUuJyIjs6HmCP5%2BjKxC7GL%2FrTfpdqgtQLCuLrHxNf1Qq71ja%2B1yXhCwERiVRRBeLktR%2BmB08o3rtx9Al4h%2Bx1a%2BFdJsQTaOE83jEeh6qKTfVZHwvl%2BoXJCMW3nToLQ90qEfdsZq%2F%2BGhv54tNVG7c1qBa%2FIRZck%2BgbcTc7CPb6dPp%2BrnP3LcnJvnaro%2B4L86%2B9Aj%2BVWQMHt%2FgDvoCNuAfNN9ht8SLvWNf0JNpSpX6zCLtpXBBjqkAYviExV711v0LYHuJpM0lnYfM0bklgVdLZ2IU%2BcTlsw7oOrclOyVSPXjRXXyuPPK4lm5cPDzq1B6jOh8IIsmbPgENYcmvoytHW5wkldTCaXyroRJCzqpCddxB9fibbgEJEIy8NQPcaitwDhIczVtE%2BYeDL9aMvnCICSXyDDbZvDNd9xDTNXKAPmNBmV6yzCD7LbMXgocBpgreb6KJRq0LqmXN%2BI0&X-Amz-Signature=0a342801fb7ebf830ea9af3d0817d58e0abde14362e4b27e10f3f8f3961903bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
