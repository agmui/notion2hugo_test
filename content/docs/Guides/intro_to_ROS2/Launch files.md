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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5SOZKS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0EHRjyxrWeTcvgV1Md9akBebZ5R%2BCF5%2Fpa3lMZGZCKwIgV%2BCbN8hKomy5d9jrCs3exRSzslg9LpnFV8OK%2Foo6Ubwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAQgX1eBa%2F8AOm1IACrcAzpES37oYmpOUN7m46Q9fmC4ysI%2BTsd1t70QNwWTsr4PHdEpGjj1gjtlJgdqT5WMLkiN%2FEIopbwybel28h1C%2F9X1icpiy2kVvDeQraClAsyIU3D%2Fw7c36CKYWKBGJjkj5mV2NqiW9OoLaVrZZGpuxcNAXw47CWQAeDPnqSGoeJcp4WdGLuG7uxHV3woRwa8UdXt5jHu08ngqSnATQdI61kYr32DPHXIwJvUFu8DOPVE7D6ienzLkvpyczRiVvhE1Acly8UMXjsG%2FpTUx6NQizCZcr%2B%2BsczDQ48LFTT03Uoao4Rmbora8yELH%2FrTd1MhaCZLJCJ0iB027Qq6GGC9ZSEHN6JIsDXi6FSzbmv1aFn9DwscemRxTE7x%2B0dxM0EDIKyLV01U3z%2FXRDKHoHTh613PYFSBU9yqNtyvNWJmZE%2Fu1aPXaI%2BdHTjhomeNF8nJzHFnVQ8z9XmsFZXKJiRU2DuvMebJD7Zj%2FrquK25yqgmkgxhRurYafkiFYkoCg%2BmfUTwME81VyeBBCBZgqjQ5K%2FhusnUmZ9mmM2fCKucPvw7t6yWXbidMhM6dTH3ppVF%2Fcr8cKZjAFvjciXSe1nLIP83qMyHB5Mq74ADw2UUmUvRR2iy4q0fyd2H44jdZfMLSvrMAGOqUBSOX5LkfpASd28yVZoBtyj2gR9AJZfGmcJ2Mv6Bn8hJkNLSeI8CirJP3KGmykt8qd3qd2WxXUKnrfyIPk%2BucQYNpJp0gf4yIvcSihf8aDzxfmFck5jswey2pttJaLq6%2BJGYRZwM8Y%2BJGjEG9AMJVJeyF3SPu9rBtmSlcT6a7h%2F0wdYZYEYMryf1hb1e9BojMRK%2FDskRtXiLK8g7XN5M%2Bx7EB0qcBw&X-Amz-Signature=4660809ab72d63689e378af1596e237ff28d6d1be3234c8edd3492ca09bebc72&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5SOZKS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0EHRjyxrWeTcvgV1Md9akBebZ5R%2BCF5%2Fpa3lMZGZCKwIgV%2BCbN8hKomy5d9jrCs3exRSzslg9LpnFV8OK%2Foo6Ubwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAQgX1eBa%2F8AOm1IACrcAzpES37oYmpOUN7m46Q9fmC4ysI%2BTsd1t70QNwWTsr4PHdEpGjj1gjtlJgdqT5WMLkiN%2FEIopbwybel28h1C%2F9X1icpiy2kVvDeQraClAsyIU3D%2Fw7c36CKYWKBGJjkj5mV2NqiW9OoLaVrZZGpuxcNAXw47CWQAeDPnqSGoeJcp4WdGLuG7uxHV3woRwa8UdXt5jHu08ngqSnATQdI61kYr32DPHXIwJvUFu8DOPVE7D6ienzLkvpyczRiVvhE1Acly8UMXjsG%2FpTUx6NQizCZcr%2B%2BsczDQ48LFTT03Uoao4Rmbora8yELH%2FrTd1MhaCZLJCJ0iB027Qq6GGC9ZSEHN6JIsDXi6FSzbmv1aFn9DwscemRxTE7x%2B0dxM0EDIKyLV01U3z%2FXRDKHoHTh613PYFSBU9yqNtyvNWJmZE%2Fu1aPXaI%2BdHTjhomeNF8nJzHFnVQ8z9XmsFZXKJiRU2DuvMebJD7Zj%2FrquK25yqgmkgxhRurYafkiFYkoCg%2BmfUTwME81VyeBBCBZgqjQ5K%2FhusnUmZ9mmM2fCKucPvw7t6yWXbidMhM6dTH3ppVF%2Fcr8cKZjAFvjciXSe1nLIP83qMyHB5Mq74ADw2UUmUvRR2iy4q0fyd2H44jdZfMLSvrMAGOqUBSOX5LkfpASd28yVZoBtyj2gR9AJZfGmcJ2Mv6Bn8hJkNLSeI8CirJP3KGmykt8qd3qd2WxXUKnrfyIPk%2BucQYNpJp0gf4yIvcSihf8aDzxfmFck5jswey2pttJaLq6%2BJGYRZwM8Y%2BJGjEG9AMJVJeyF3SPu9rBtmSlcT6a7h%2F0wdYZYEYMryf1hb1e9BojMRK%2FDskRtXiLK8g7XN5M%2Bx7EB0qcBw&X-Amz-Signature=4b9625b02b677cd4137acdd67150709516ba57d5c3ff7732d3f4f1d3e33dc78c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5SOZKS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0EHRjyxrWeTcvgV1Md9akBebZ5R%2BCF5%2Fpa3lMZGZCKwIgV%2BCbN8hKomy5d9jrCs3exRSzslg9LpnFV8OK%2Foo6Ubwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAQgX1eBa%2F8AOm1IACrcAzpES37oYmpOUN7m46Q9fmC4ysI%2BTsd1t70QNwWTsr4PHdEpGjj1gjtlJgdqT5WMLkiN%2FEIopbwybel28h1C%2F9X1icpiy2kVvDeQraClAsyIU3D%2Fw7c36CKYWKBGJjkj5mV2NqiW9OoLaVrZZGpuxcNAXw47CWQAeDPnqSGoeJcp4WdGLuG7uxHV3woRwa8UdXt5jHu08ngqSnATQdI61kYr32DPHXIwJvUFu8DOPVE7D6ienzLkvpyczRiVvhE1Acly8UMXjsG%2FpTUx6NQizCZcr%2B%2BsczDQ48LFTT03Uoao4Rmbora8yELH%2FrTd1MhaCZLJCJ0iB027Qq6GGC9ZSEHN6JIsDXi6FSzbmv1aFn9DwscemRxTE7x%2B0dxM0EDIKyLV01U3z%2FXRDKHoHTh613PYFSBU9yqNtyvNWJmZE%2Fu1aPXaI%2BdHTjhomeNF8nJzHFnVQ8z9XmsFZXKJiRU2DuvMebJD7Zj%2FrquK25yqgmkgxhRurYafkiFYkoCg%2BmfUTwME81VyeBBCBZgqjQ5K%2FhusnUmZ9mmM2fCKucPvw7t6yWXbidMhM6dTH3ppVF%2Fcr8cKZjAFvjciXSe1nLIP83qMyHB5Mq74ADw2UUmUvRR2iy4q0fyd2H44jdZfMLSvrMAGOqUBSOX5LkfpASd28yVZoBtyj2gR9AJZfGmcJ2Mv6Bn8hJkNLSeI8CirJP3KGmykt8qd3qd2WxXUKnrfyIPk%2BucQYNpJp0gf4yIvcSihf8aDzxfmFck5jswey2pttJaLq6%2BJGYRZwM8Y%2BJGjEG9AMJVJeyF3SPu9rBtmSlcT6a7h%2F0wdYZYEYMryf1hb1e9BojMRK%2FDskRtXiLK8g7XN5M%2Bx7EB0qcBw&X-Amz-Signature=31b46fd298aca2d208cb3b2e3f8dd29da4985dcc12a7a136e021828928e00ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
