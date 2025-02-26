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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6WTSHI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD6fDt6dsNAJC2XELJ1detcWFh61kPVW%2FwyVsgy8QwHFgIhAK5YAoYVAl1ogELIgeBuo6IHGEIZroFDEivNrrNFSZNlKv8DCGMQABoMNjM3NDIzMTgzODA1Igw8z2EFSnBKlTrVOREq3APdAcptVSePqp%2BRRUnh9vde2I6Bu%2Bp2eph12F%2BY%2B0jvgFW5n%2BvIVUc%2FqdKgY%2FirZyXtaQqsYEO01BKpdJvc7P2FiH4wa6fXO7qzK7EAzohyky%2Bh5VaSo%2FN6MK6jZRMy5fZc1OgzcEDb5X8J4urS8SupyAoVWNDSs7oCMSQmayYo26CINmSSacrxnQLy%2BTDVEtV4j5dsv0ABq5sYQMXmZ5j9ETW4UONDAcbxz0oBnDm6DMmDH8qUAwEjPLiP2J4PjQS0QDBhm1h368wLgfIDTQTnQIiHJ12Bz7Y%2BQn0YC%2FQAmzZ6WBevfj1gV%2BGECNZXrmFCxWkdi45QKG5Xe3YWgsQ7Q%2FuZNqxnIbJML1GxK7rqWOMw8iztc4JRqHNlUGzFwHHdouiTrh0Zwbo2wjlPohOdBc1uUe%2FCc6twnGxxhShCXcJqkhops%2FollJYqU%2FMd9ULYNOe3xziGEBOqlWRooOiXQzjicsufUJ7tsxHn6V5ZixxbkDE0B%2B5j2cpv9GYns%2FKlYU249qYFiSo1%2Fg3tzcsjehAsnEv1pG2EdH8KLCgvpucVdtm2IjrrsW6EleqNkMtaafzmX0uqBDyzxQ%2BdLaT4MfX45xOgXQB2NKtbc815exJNXBKaJn8xpPs0jjCPrP29BjqkAQbmnpuCuR%2FeZ8MewqLrHsIBAyuQKr0zrgdcUsqJfCUchkUUPEzgvllnbGj%2B0nAl3NKLtU7b6SGFnp5XlYrHfkyy5Bo%2BcgPzoaEnZ6iwHokOdNX3GM6ce4FmM%2F3Yfo8WnINlG1qDGmYkL3H6aHfGQBW6Y4%2BiVECtVcmchOTDPPZ1nrGvaoLhgQ6J36b7yrrbVEG2%2B3622fdbEB%2B8v52%2BNbORmu01&X-Amz-Signature=348f9a240e85eca7dbab18c8048024813e7c3df9bb55665fcc442f1eda3f3b78&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6WTSHI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD6fDt6dsNAJC2XELJ1detcWFh61kPVW%2FwyVsgy8QwHFgIhAK5YAoYVAl1ogELIgeBuo6IHGEIZroFDEivNrrNFSZNlKv8DCGMQABoMNjM3NDIzMTgzODA1Igw8z2EFSnBKlTrVOREq3APdAcptVSePqp%2BRRUnh9vde2I6Bu%2Bp2eph12F%2BY%2B0jvgFW5n%2BvIVUc%2FqdKgY%2FirZyXtaQqsYEO01BKpdJvc7P2FiH4wa6fXO7qzK7EAzohyky%2Bh5VaSo%2FN6MK6jZRMy5fZc1OgzcEDb5X8J4urS8SupyAoVWNDSs7oCMSQmayYo26CINmSSacrxnQLy%2BTDVEtV4j5dsv0ABq5sYQMXmZ5j9ETW4UONDAcbxz0oBnDm6DMmDH8qUAwEjPLiP2J4PjQS0QDBhm1h368wLgfIDTQTnQIiHJ12Bz7Y%2BQn0YC%2FQAmzZ6WBevfj1gV%2BGECNZXrmFCxWkdi45QKG5Xe3YWgsQ7Q%2FuZNqxnIbJML1GxK7rqWOMw8iztc4JRqHNlUGzFwHHdouiTrh0Zwbo2wjlPohOdBc1uUe%2FCc6twnGxxhShCXcJqkhops%2FollJYqU%2FMd9ULYNOe3xziGEBOqlWRooOiXQzjicsufUJ7tsxHn6V5ZixxbkDE0B%2B5j2cpv9GYns%2FKlYU249qYFiSo1%2Fg3tzcsjehAsnEv1pG2EdH8KLCgvpucVdtm2IjrrsW6EleqNkMtaafzmX0uqBDyzxQ%2BdLaT4MfX45xOgXQB2NKtbc815exJNXBKaJn8xpPs0jjCPrP29BjqkAQbmnpuCuR%2FeZ8MewqLrHsIBAyuQKr0zrgdcUsqJfCUchkUUPEzgvllnbGj%2B0nAl3NKLtU7b6SGFnp5XlYrHfkyy5Bo%2BcgPzoaEnZ6iwHokOdNX3GM6ce4FmM%2F3Yfo8WnINlG1qDGmYkL3H6aHfGQBW6Y4%2BiVECtVcmchOTDPPZ1nrGvaoLhgQ6J36b7yrrbVEG2%2B3622fdbEB%2B8v52%2BNbORmu01&X-Amz-Signature=6ec51ad9d0e8a22b9b4ecc3f1d01b81dba68a21dc518468181dfaaae810c500e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6WTSHI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD6fDt6dsNAJC2XELJ1detcWFh61kPVW%2FwyVsgy8QwHFgIhAK5YAoYVAl1ogELIgeBuo6IHGEIZroFDEivNrrNFSZNlKv8DCGMQABoMNjM3NDIzMTgzODA1Igw8z2EFSnBKlTrVOREq3APdAcptVSePqp%2BRRUnh9vde2I6Bu%2Bp2eph12F%2BY%2B0jvgFW5n%2BvIVUc%2FqdKgY%2FirZyXtaQqsYEO01BKpdJvc7P2FiH4wa6fXO7qzK7EAzohyky%2Bh5VaSo%2FN6MK6jZRMy5fZc1OgzcEDb5X8J4urS8SupyAoVWNDSs7oCMSQmayYo26CINmSSacrxnQLy%2BTDVEtV4j5dsv0ABq5sYQMXmZ5j9ETW4UONDAcbxz0oBnDm6DMmDH8qUAwEjPLiP2J4PjQS0QDBhm1h368wLgfIDTQTnQIiHJ12Bz7Y%2BQn0YC%2FQAmzZ6WBevfj1gV%2BGECNZXrmFCxWkdi45QKG5Xe3YWgsQ7Q%2FuZNqxnIbJML1GxK7rqWOMw8iztc4JRqHNlUGzFwHHdouiTrh0Zwbo2wjlPohOdBc1uUe%2FCc6twnGxxhShCXcJqkhops%2FollJYqU%2FMd9ULYNOe3xziGEBOqlWRooOiXQzjicsufUJ7tsxHn6V5ZixxbkDE0B%2B5j2cpv9GYns%2FKlYU249qYFiSo1%2Fg3tzcsjehAsnEv1pG2EdH8KLCgvpucVdtm2IjrrsW6EleqNkMtaafzmX0uqBDyzxQ%2BdLaT4MfX45xOgXQB2NKtbc815exJNXBKaJn8xpPs0jjCPrP29BjqkAQbmnpuCuR%2FeZ8MewqLrHsIBAyuQKr0zrgdcUsqJfCUchkUUPEzgvllnbGj%2B0nAl3NKLtU7b6SGFnp5XlYrHfkyy5Bo%2BcgPzoaEnZ6iwHokOdNX3GM6ce4FmM%2F3Yfo8WnINlG1qDGmYkL3H6aHfGQBW6Y4%2BiVECtVcmchOTDPPZ1nrGvaoLhgQ6J36b7yrrbVEG2%2B3622fdbEB%2B8v52%2BNbORmu01&X-Amz-Signature=90ed8b042208ed6ac5596c78d13f26f63a16e24d222f3788e8bb7b40b5e709dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
