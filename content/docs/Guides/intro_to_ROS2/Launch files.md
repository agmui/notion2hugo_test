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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GAYR44X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjgg5XFWasXN9zecAbuymcyAilDYKLgLSXZiaxhcB7kQIhAK5Nj%2F1XNOZQjh%2BX8MQy4wGIelwxQGT0o8%2Fjr%2BEBGwInKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8WreVBkml912LiDMq3AMlyW8P8MRqOb7qoKWSYev3J%2FJQn0qfCZCajyvLgn6oQQswjWTiFzE8%2BfShZXxDemtJI3mWAFdz4oU0nUH2KG1OvwAK7KksOuwDzpxMn5kzlDC%2BNxgS1V3JTEXCJHPxdEgURaxBU35Uqhzhfwe4pJ%2FGHnYFNyEQQDxFC2YNesp%2Bo42VTNDPQWuz3uZtLOyMO%2BwsvugH05cXwkUGu2jetFvA7sUFhe4zvg5UH%2BnNesHzo3fvKqI3h%2BOACqOApkJefDcJi2%2BvtqAE0S0PlBZZ196dtR6M2wp6ZmWlUnH2OPgs1iLZI6FQY1lBAWnPe4uZecBElACNDd%2FWCkoHGY87heGPtJ%2FBjirDRY0XPmoYBTD82I3ws5fo%2BIB3vSBiBhsAj%2FEsgXaQ5YdBS6r2ngHAf9O9CMBl2Jux9S1LWj7VeG5Q%2F8UGVLpV%2BzbRp%2BLNoYZnr0loJPPGVHQV9AmnQw9XJmY28PnkEapCZZoF6FH2AhBKn6%2FOxvHMbvtByHglVi80jcL2rVHWPyQcdL2Nuz8iu8EDLL4s%2BJZzOrzNCPw9DrhPOTiF8cjmp92QfM9uuD0h7bXKwGsaYQe%2FlZCx%2FhUh1o%2BJ6a616o0ZBApkxvPIbU1O0%2B7pS304WhFDSJZ4VDCGr5y%2BBjqkAVJnOzljo7JLQ6ZucH%2Fngq4z6tKeKH%2FRqKEW1d0z5nTGUCKbJlDBsWqRAZyFGyy0sslGsfhr3RNkM5rk0HuzxhLLk82ht8dcDuvGneVBrS91FRHfAmuNvo6D0GCZYgDpXT15gzMIXaVpQ25g%2FDNSdi1%2FqvLdSzd%2B4%2B1GUCxQo94jzH99bu1L%2BsKciy1M9KtDK%2BzDi5EompdzzZDcVjuG%2B2DPGMDc&X-Amz-Signature=0c684eccd454e41ee202c1c5209f4c78505ad4b50f3bc31779ef321f3281b563&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GAYR44X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjgg5XFWasXN9zecAbuymcyAilDYKLgLSXZiaxhcB7kQIhAK5Nj%2F1XNOZQjh%2BX8MQy4wGIelwxQGT0o8%2Fjr%2BEBGwInKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8WreVBkml912LiDMq3AMlyW8P8MRqOb7qoKWSYev3J%2FJQn0qfCZCajyvLgn6oQQswjWTiFzE8%2BfShZXxDemtJI3mWAFdz4oU0nUH2KG1OvwAK7KksOuwDzpxMn5kzlDC%2BNxgS1V3JTEXCJHPxdEgURaxBU35Uqhzhfwe4pJ%2FGHnYFNyEQQDxFC2YNesp%2Bo42VTNDPQWuz3uZtLOyMO%2BwsvugH05cXwkUGu2jetFvA7sUFhe4zvg5UH%2BnNesHzo3fvKqI3h%2BOACqOApkJefDcJi2%2BvtqAE0S0PlBZZ196dtR6M2wp6ZmWlUnH2OPgs1iLZI6FQY1lBAWnPe4uZecBElACNDd%2FWCkoHGY87heGPtJ%2FBjirDRY0XPmoYBTD82I3ws5fo%2BIB3vSBiBhsAj%2FEsgXaQ5YdBS6r2ngHAf9O9CMBl2Jux9S1LWj7VeG5Q%2F8UGVLpV%2BzbRp%2BLNoYZnr0loJPPGVHQV9AmnQw9XJmY28PnkEapCZZoF6FH2AhBKn6%2FOxvHMbvtByHglVi80jcL2rVHWPyQcdL2Nuz8iu8EDLL4s%2BJZzOrzNCPw9DrhPOTiF8cjmp92QfM9uuD0h7bXKwGsaYQe%2FlZCx%2FhUh1o%2BJ6a616o0ZBApkxvPIbU1O0%2B7pS304WhFDSJZ4VDCGr5y%2BBjqkAVJnOzljo7JLQ6ZucH%2Fngq4z6tKeKH%2FRqKEW1d0z5nTGUCKbJlDBsWqRAZyFGyy0sslGsfhr3RNkM5rk0HuzxhLLk82ht8dcDuvGneVBrS91FRHfAmuNvo6D0GCZYgDpXT15gzMIXaVpQ25g%2FDNSdi1%2FqvLdSzd%2B4%2B1GUCxQo94jzH99bu1L%2BsKciy1M9KtDK%2BzDi5EompdzzZDcVjuG%2B2DPGMDc&X-Amz-Signature=061d0a7fd73c0a2f68ab1ece59b1dea270849097ace42172513c815f809b1e10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GAYR44X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjgg5XFWasXN9zecAbuymcyAilDYKLgLSXZiaxhcB7kQIhAK5Nj%2F1XNOZQjh%2BX8MQy4wGIelwxQGT0o8%2Fjr%2BEBGwInKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8WreVBkml912LiDMq3AMlyW8P8MRqOb7qoKWSYev3J%2FJQn0qfCZCajyvLgn6oQQswjWTiFzE8%2BfShZXxDemtJI3mWAFdz4oU0nUH2KG1OvwAK7KksOuwDzpxMn5kzlDC%2BNxgS1V3JTEXCJHPxdEgURaxBU35Uqhzhfwe4pJ%2FGHnYFNyEQQDxFC2YNesp%2Bo42VTNDPQWuz3uZtLOyMO%2BwsvugH05cXwkUGu2jetFvA7sUFhe4zvg5UH%2BnNesHzo3fvKqI3h%2BOACqOApkJefDcJi2%2BvtqAE0S0PlBZZ196dtR6M2wp6ZmWlUnH2OPgs1iLZI6FQY1lBAWnPe4uZecBElACNDd%2FWCkoHGY87heGPtJ%2FBjirDRY0XPmoYBTD82I3ws5fo%2BIB3vSBiBhsAj%2FEsgXaQ5YdBS6r2ngHAf9O9CMBl2Jux9S1LWj7VeG5Q%2F8UGVLpV%2BzbRp%2BLNoYZnr0loJPPGVHQV9AmnQw9XJmY28PnkEapCZZoF6FH2AhBKn6%2FOxvHMbvtByHglVi80jcL2rVHWPyQcdL2Nuz8iu8EDLL4s%2BJZzOrzNCPw9DrhPOTiF8cjmp92QfM9uuD0h7bXKwGsaYQe%2FlZCx%2FhUh1o%2BJ6a616o0ZBApkxvPIbU1O0%2B7pS304WhFDSJZ4VDCGr5y%2BBjqkAVJnOzljo7JLQ6ZucH%2Fngq4z6tKeKH%2FRqKEW1d0z5nTGUCKbJlDBsWqRAZyFGyy0sslGsfhr3RNkM5rk0HuzxhLLk82ht8dcDuvGneVBrS91FRHfAmuNvo6D0GCZYgDpXT15gzMIXaVpQ25g%2FDNSdi1%2FqvLdSzd%2B4%2B1GUCxQo94jzH99bu1L%2BsKciy1M9KtDK%2BzDi5EompdzzZDcVjuG%2B2DPGMDc&X-Amz-Signature=3740f5e74883e71841eabd020ca9963e01d5f810a4ff1504b10f038e53efc275&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
