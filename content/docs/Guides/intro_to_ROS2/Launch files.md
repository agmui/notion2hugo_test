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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OJS25PF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC209vHbb7%2BksVhXHcXXiB6lHcsmpdtZK7c5wYSYsRp4QIhAOfCKsx%2F7JTwsnfYyam5YVeRQvcAHUUMGHoYq3%2BROpDoKv8DCG8QABoMNjM3NDIzMTgzODA1Igx42Q5tEpWdjrybd6Eq3AOAgTLOmN3rCiwvGX%2BbrdT5xYzY%2Bxp9JljYK2awZ4gBoG0BVEOapjzPOZ18%2B5SQEVEWvPdMtqLB1SfS1q%2Bs6wBN2r7dlsRDHX6CqlV20CZ%2F3QsGagyH19YY4fm89EN3LMqHCzkH9pHPhtPdbhPunEjQL%2FmZ3xNbwpIJY5KMn41eUeAFAei%2BCVhq3AMJ1KepuJ7gyWM2YqizigYjBmS%2BxLxAGorUFUikO%2F79scjId2mPi6DTvd%2BXkxnHjbKfGEcx5kUtYBKq46v8aaGXodIsoMQcSv0Krde%2F5yE71dG2%2BxH2PwvAydwkHRExwsAuw9GXz5oqDlfoPFhm0G5tT%2BxtdtQhUzeuSNLXsMAzSbvvngDGASDCpgCrR4%2FAj0OopeUDVFp7lw3t%2FCKXVgHZHnSmnccgGNoer4%2B37wpLjNwyPzVvUUhoma1aWscDBp467Jmz0dVj7AuBKX1GQtnwepvwm9rrqXpxAXf6wcCB8ABv00UifPWjQb%2B0xhXE5ZPLz0AsVHdcq%2BdX8dBbvSxw63eVoocvIxPkiIkQdja8kEIMJYZt50iWiWUtRN06VvVaRDLmVkrVBCyxEtqnM1XqRPLxIF%2FqrSCBo4Qzu9FTVTXkX549wHsghU5VxJBExH7RizDwxOm%2BBjqkAe9X9EfhsqfA5Fs6y%2BQtx8ErBtPIrOpFZDSsn2zz8itLCkOpCtpOp9nMylOV0JtE5KJh1c2pRcfwpDaWK6tPDoXekSly3KWUShxeerd25yXJMPJd80k1hUt5PaJDtRerYbh75OSB4co%2FZoq1sOgdBEwM513PBjYdptBBqYpuosumFd95jfZVQrU5x95iJ%2FMWJi672%2BUpjn2cdmInsNJ8PHva1cW2&X-Amz-Signature=934f598d8a197b8651c526520b9b670cca0ef3d197fbba8b7dfd6a0fa8b38115&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OJS25PF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC209vHbb7%2BksVhXHcXXiB6lHcsmpdtZK7c5wYSYsRp4QIhAOfCKsx%2F7JTwsnfYyam5YVeRQvcAHUUMGHoYq3%2BROpDoKv8DCG8QABoMNjM3NDIzMTgzODA1Igx42Q5tEpWdjrybd6Eq3AOAgTLOmN3rCiwvGX%2BbrdT5xYzY%2Bxp9JljYK2awZ4gBoG0BVEOapjzPOZ18%2B5SQEVEWvPdMtqLB1SfS1q%2Bs6wBN2r7dlsRDHX6CqlV20CZ%2F3QsGagyH19YY4fm89EN3LMqHCzkH9pHPhtPdbhPunEjQL%2FmZ3xNbwpIJY5KMn41eUeAFAei%2BCVhq3AMJ1KepuJ7gyWM2YqizigYjBmS%2BxLxAGorUFUikO%2F79scjId2mPi6DTvd%2BXkxnHjbKfGEcx5kUtYBKq46v8aaGXodIsoMQcSv0Krde%2F5yE71dG2%2BxH2PwvAydwkHRExwsAuw9GXz5oqDlfoPFhm0G5tT%2BxtdtQhUzeuSNLXsMAzSbvvngDGASDCpgCrR4%2FAj0OopeUDVFp7lw3t%2FCKXVgHZHnSmnccgGNoer4%2B37wpLjNwyPzVvUUhoma1aWscDBp467Jmz0dVj7AuBKX1GQtnwepvwm9rrqXpxAXf6wcCB8ABv00UifPWjQb%2B0xhXE5ZPLz0AsVHdcq%2BdX8dBbvSxw63eVoocvIxPkiIkQdja8kEIMJYZt50iWiWUtRN06VvVaRDLmVkrVBCyxEtqnM1XqRPLxIF%2FqrSCBo4Qzu9FTVTXkX549wHsghU5VxJBExH7RizDwxOm%2BBjqkAe9X9EfhsqfA5Fs6y%2BQtx8ErBtPIrOpFZDSsn2zz8itLCkOpCtpOp9nMylOV0JtE5KJh1c2pRcfwpDaWK6tPDoXekSly3KWUShxeerd25yXJMPJd80k1hUt5PaJDtRerYbh75OSB4co%2FZoq1sOgdBEwM513PBjYdptBBqYpuosumFd95jfZVQrU5x95iJ%2FMWJi672%2BUpjn2cdmInsNJ8PHva1cW2&X-Amz-Signature=5aeb52f6690491c9f292ee30e3b8097883b94c9c04f29dfc8723269b9be39764&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OJS25PF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC209vHbb7%2BksVhXHcXXiB6lHcsmpdtZK7c5wYSYsRp4QIhAOfCKsx%2F7JTwsnfYyam5YVeRQvcAHUUMGHoYq3%2BROpDoKv8DCG8QABoMNjM3NDIzMTgzODA1Igx42Q5tEpWdjrybd6Eq3AOAgTLOmN3rCiwvGX%2BbrdT5xYzY%2Bxp9JljYK2awZ4gBoG0BVEOapjzPOZ18%2B5SQEVEWvPdMtqLB1SfS1q%2Bs6wBN2r7dlsRDHX6CqlV20CZ%2F3QsGagyH19YY4fm89EN3LMqHCzkH9pHPhtPdbhPunEjQL%2FmZ3xNbwpIJY5KMn41eUeAFAei%2BCVhq3AMJ1KepuJ7gyWM2YqizigYjBmS%2BxLxAGorUFUikO%2F79scjId2mPi6DTvd%2BXkxnHjbKfGEcx5kUtYBKq46v8aaGXodIsoMQcSv0Krde%2F5yE71dG2%2BxH2PwvAydwkHRExwsAuw9GXz5oqDlfoPFhm0G5tT%2BxtdtQhUzeuSNLXsMAzSbvvngDGASDCpgCrR4%2FAj0OopeUDVFp7lw3t%2FCKXVgHZHnSmnccgGNoer4%2B37wpLjNwyPzVvUUhoma1aWscDBp467Jmz0dVj7AuBKX1GQtnwepvwm9rrqXpxAXf6wcCB8ABv00UifPWjQb%2B0xhXE5ZPLz0AsVHdcq%2BdX8dBbvSxw63eVoocvIxPkiIkQdja8kEIMJYZt50iWiWUtRN06VvVaRDLmVkrVBCyxEtqnM1XqRPLxIF%2FqrSCBo4Qzu9FTVTXkX549wHsghU5VxJBExH7RizDwxOm%2BBjqkAe9X9EfhsqfA5Fs6y%2BQtx8ErBtPIrOpFZDSsn2zz8itLCkOpCtpOp9nMylOV0JtE5KJh1c2pRcfwpDaWK6tPDoXekSly3KWUShxeerd25yXJMPJd80k1hUt5PaJDtRerYbh75OSB4co%2FZoq1sOgdBEwM513PBjYdptBBqYpuosumFd95jfZVQrU5x95iJ%2FMWJi672%2BUpjn2cdmInsNJ8PHva1cW2&X-Amz-Signature=1b9baadb81ccdd681387abd3dd21c31e890802e71a42350bdbfe9e66a68ff708&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
