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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2YZ2CW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEmhVWfQLBE0EiAR6ZzoPeOmchm9zCZ7sFU1QylHbc3IAiBlYU6RC7bwuD%2BQhmh0na0sz3ZGTql1I68%2F%2BC7lGzUpaSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh28DtsRpckNgwt41KtwDkGk1FHYO3NSUbRT15ezXApU8FfDHAbQx5pooICVpzW6luerulJQ1SbiRzNCD1%2B2%2FtdAqMbFr20CE8ovyxFBoZ0m2hrgcraBlccaq2TVvPWBNUgFeWK6L8iJzQxGl9f6eNFG0GjqmZUYII23Qni6fss5%2FievoVOjKbh0IcJ%2BURGuZFdFGU86Q2LXAbyqLi16CKCcXsaQF%2FWQpXePBZYyM8W8ikWhIoXSfCt0XrQCkU8HBhi2N%2FJVYaJJnL8DHirqMUyVxpuRCAjqA1FE69uspqWkzSL3egf38gyi33zXhc1xCAW2wd0zUUcYpXIQk5W55lKHDBTQpVsk12Yq9KjZEukam%2BL4KhYnu6M94J%2FPquf2Oiwhhy%2FxtDlMKeRguNsRd%2FaEewKK6R64z3fz3OJN%2FFJxxzkcO7oAVLi9mV36akhpJ69kY9agNhK4JEp3QdzvwJXemGy06tkel%2BlIhuyCxN8WluY%2FYfUTGs1%2BAQA2yaaB95qq1gXpGgZ50fTFUWrYCBBXbRuC7rRslIwZiPAq8DWNU%2BygnhJSXA%2FzS0%2BJ0gZwRJbdPSRsISSytEArYk1t24cIwjjR2uglGX75jZPu4JbLD7Y3mC6T%2FFfQF%2FvJIwCuR7DKWIbttqrJUC98w2em5vgY6pgGJgLBw7G3JRfX1%2F5GLF9FOjq0cdOTCYuFiq9POZSJH0PSHuQaIAHvJ2aAdYkqtb1UVg07KSSbwlDY4q%2B17d0AhmE7KCpUSOKy%2Fq0akzPajuJkO%2BWwJqAmxAQV7N65bADi7giWFcGDDBriSPA2N4I4EjfTkhBFsa8iXsPOzbEwVxrxOP07kUSiXrN0EIy%2BkGXMGbS%2FAnoI3ft4EgtMQqWqahJSu%2Bkkf&X-Amz-Signature=fbbdb28de01253ce7a51c276da1007509ba8655eb5407eebc782016acf85a7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2YZ2CW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEmhVWfQLBE0EiAR6ZzoPeOmchm9zCZ7sFU1QylHbc3IAiBlYU6RC7bwuD%2BQhmh0na0sz3ZGTql1I68%2F%2BC7lGzUpaSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh28DtsRpckNgwt41KtwDkGk1FHYO3NSUbRT15ezXApU8FfDHAbQx5pooICVpzW6luerulJQ1SbiRzNCD1%2B2%2FtdAqMbFr20CE8ovyxFBoZ0m2hrgcraBlccaq2TVvPWBNUgFeWK6L8iJzQxGl9f6eNFG0GjqmZUYII23Qni6fss5%2FievoVOjKbh0IcJ%2BURGuZFdFGU86Q2LXAbyqLi16CKCcXsaQF%2FWQpXePBZYyM8W8ikWhIoXSfCt0XrQCkU8HBhi2N%2FJVYaJJnL8DHirqMUyVxpuRCAjqA1FE69uspqWkzSL3egf38gyi33zXhc1xCAW2wd0zUUcYpXIQk5W55lKHDBTQpVsk12Yq9KjZEukam%2BL4KhYnu6M94J%2FPquf2Oiwhhy%2FxtDlMKeRguNsRd%2FaEewKK6R64z3fz3OJN%2FFJxxzkcO7oAVLi9mV36akhpJ69kY9agNhK4JEp3QdzvwJXemGy06tkel%2BlIhuyCxN8WluY%2FYfUTGs1%2BAQA2yaaB95qq1gXpGgZ50fTFUWrYCBBXbRuC7rRslIwZiPAq8DWNU%2BygnhJSXA%2FzS0%2BJ0gZwRJbdPSRsISSytEArYk1t24cIwjjR2uglGX75jZPu4JbLD7Y3mC6T%2FFfQF%2FvJIwCuR7DKWIbttqrJUC98w2em5vgY6pgGJgLBw7G3JRfX1%2F5GLF9FOjq0cdOTCYuFiq9POZSJH0PSHuQaIAHvJ2aAdYkqtb1UVg07KSSbwlDY4q%2B17d0AhmE7KCpUSOKy%2Fq0akzPajuJkO%2BWwJqAmxAQV7N65bADi7giWFcGDDBriSPA2N4I4EjfTkhBFsa8iXsPOzbEwVxrxOP07kUSiXrN0EIy%2BkGXMGbS%2FAnoI3ft4EgtMQqWqahJSu%2Bkkf&X-Amz-Signature=9018b2c539253df369814ba38d4acc17d386cade4b4f7b0676591096e23d001f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2YZ2CW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEmhVWfQLBE0EiAR6ZzoPeOmchm9zCZ7sFU1QylHbc3IAiBlYU6RC7bwuD%2BQhmh0na0sz3ZGTql1I68%2F%2BC7lGzUpaSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh28DtsRpckNgwt41KtwDkGk1FHYO3NSUbRT15ezXApU8FfDHAbQx5pooICVpzW6luerulJQ1SbiRzNCD1%2B2%2FtdAqMbFr20CE8ovyxFBoZ0m2hrgcraBlccaq2TVvPWBNUgFeWK6L8iJzQxGl9f6eNFG0GjqmZUYII23Qni6fss5%2FievoVOjKbh0IcJ%2BURGuZFdFGU86Q2LXAbyqLi16CKCcXsaQF%2FWQpXePBZYyM8W8ikWhIoXSfCt0XrQCkU8HBhi2N%2FJVYaJJnL8DHirqMUyVxpuRCAjqA1FE69uspqWkzSL3egf38gyi33zXhc1xCAW2wd0zUUcYpXIQk5W55lKHDBTQpVsk12Yq9KjZEukam%2BL4KhYnu6M94J%2FPquf2Oiwhhy%2FxtDlMKeRguNsRd%2FaEewKK6R64z3fz3OJN%2FFJxxzkcO7oAVLi9mV36akhpJ69kY9agNhK4JEp3QdzvwJXemGy06tkel%2BlIhuyCxN8WluY%2FYfUTGs1%2BAQA2yaaB95qq1gXpGgZ50fTFUWrYCBBXbRuC7rRslIwZiPAq8DWNU%2BygnhJSXA%2FzS0%2BJ0gZwRJbdPSRsISSytEArYk1t24cIwjjR2uglGX75jZPu4JbLD7Y3mC6T%2FFfQF%2FvJIwCuR7DKWIbttqrJUC98w2em5vgY6pgGJgLBw7G3JRfX1%2F5GLF9FOjq0cdOTCYuFiq9POZSJH0PSHuQaIAHvJ2aAdYkqtb1UVg07KSSbwlDY4q%2B17d0AhmE7KCpUSOKy%2Fq0akzPajuJkO%2BWwJqAmxAQV7N65bADi7giWFcGDDBriSPA2N4I4EjfTkhBFsa8iXsPOzbEwVxrxOP07kUSiXrN0EIy%2BkGXMGbS%2FAnoI3ft4EgtMQqWqahJSu%2Bkkf&X-Amz-Signature=00d719eb8834615c8b978ddca5a78fc1ad18a64da6db89f22ee184f77572c32a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
