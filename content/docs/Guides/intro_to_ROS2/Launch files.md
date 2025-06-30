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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCYC3MX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDo2w8kaBBvbu0Wd3XJB9bUdnrWOOO7Aa1gDaE9TNY%2BAiEA47kzNs%2F59q7vAVTy%2FTSQAW6T%2Fvn%2FPpwzKqN9RMi33%2BoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPkILHF%2Fski41kt%2FCrcAzBMH00v5JMbGnd%2F1gkck5A0TIpkfXvllKnW4ZSxwBIKLbZ3UJmcQ%2B6zxIYmT60%2F8mvegeNXXn07FQvkCVoF4WYiEeZcbjN%2Bi4aA%2Fo%2Bh4%2FaDkYl8o%2FxUWvCU5URlvZ2Op6xF6584xD5P0GOiSFOFu1vLDNCPO6%2FYOIJZqTfAJEAthKmOn7beu2R3lR8iBB4VpIwGW5hvIex1Sh4Isomnp32BNJbnO%2FQdWwKDRpd9tXlbFn0m3H1vFfrwotOwm4%2FDbSALHqvAQGxoj0eHHQB8UsQxDFvs6%2BOkcGUb%2FbrcypwtmJ7L%2BnJ57OHlzXM0S5T9uk7t%2Fc4CO3oq9Cp3Ma6CFLLq4%2BIJc0%2BumoEKM8D2WLQbgZel2kRJDJcaGl8aSJjiNSd8BWSx8nqUGv%2B2eMkfgNFI2dD2t2vHkoxMsHfVSxMYCdznD6tIKn6zTlxdE7cGVxOsifykQcab61cTI8CXsDHobgh4kZppzeKLfng2ZAaX0RPyMWTW90xwj70QiH1eQWI%2BmiIBEoiTpvczg1UmcoD2HPxzkE2P9RTB8TSh1UjF7LGUkAPCb8ApB4KMPC7SzEq4SQIcBJqoLPcTEDZUVomP8Xrey3PDW4fY2N5Cn46JxJR%2Fwhoo8BIE9pcmMNbrisMGOqUBooYiADI1CP8Fv284wRdnYFczLQxYpqRKSOMV5O9K%2BkVqgeKJs7YLnsMTVlnS8U53Wh9TnXWcv%2Bm%2FRFssL4mSHOUOql62lP4gDJ2MC3mEblzkCbBwZARVTBF%2BkvtlneO3P8nWCq25e2YFQsmU2FPCPpMBchi91cHnhNbkfOJO8mDH3x%2FLFecF1wyxNeb0YD2RSQsIQx80spxQ%2BN4JPlUpgKif273u&X-Amz-Signature=c1e594125f4d35efcf7b254c5e8ae04b954f6051dd4dddcbbf0b8265f8011d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCYC3MX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDo2w8kaBBvbu0Wd3XJB9bUdnrWOOO7Aa1gDaE9TNY%2BAiEA47kzNs%2F59q7vAVTy%2FTSQAW6T%2Fvn%2FPpwzKqN9RMi33%2BoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPkILHF%2Fski41kt%2FCrcAzBMH00v5JMbGnd%2F1gkck5A0TIpkfXvllKnW4ZSxwBIKLbZ3UJmcQ%2B6zxIYmT60%2F8mvegeNXXn07FQvkCVoF4WYiEeZcbjN%2Bi4aA%2Fo%2Bh4%2FaDkYl8o%2FxUWvCU5URlvZ2Op6xF6584xD5P0GOiSFOFu1vLDNCPO6%2FYOIJZqTfAJEAthKmOn7beu2R3lR8iBB4VpIwGW5hvIex1Sh4Isomnp32BNJbnO%2FQdWwKDRpd9tXlbFn0m3H1vFfrwotOwm4%2FDbSALHqvAQGxoj0eHHQB8UsQxDFvs6%2BOkcGUb%2FbrcypwtmJ7L%2BnJ57OHlzXM0S5T9uk7t%2Fc4CO3oq9Cp3Ma6CFLLq4%2BIJc0%2BumoEKM8D2WLQbgZel2kRJDJcaGl8aSJjiNSd8BWSx8nqUGv%2B2eMkfgNFI2dD2t2vHkoxMsHfVSxMYCdznD6tIKn6zTlxdE7cGVxOsifykQcab61cTI8CXsDHobgh4kZppzeKLfng2ZAaX0RPyMWTW90xwj70QiH1eQWI%2BmiIBEoiTpvczg1UmcoD2HPxzkE2P9RTB8TSh1UjF7LGUkAPCb8ApB4KMPC7SzEq4SQIcBJqoLPcTEDZUVomP8Xrey3PDW4fY2N5Cn46JxJR%2Fwhoo8BIE9pcmMNbrisMGOqUBooYiADI1CP8Fv284wRdnYFczLQxYpqRKSOMV5O9K%2BkVqgeKJs7YLnsMTVlnS8U53Wh9TnXWcv%2Bm%2FRFssL4mSHOUOql62lP4gDJ2MC3mEblzkCbBwZARVTBF%2BkvtlneO3P8nWCq25e2YFQsmU2FPCPpMBchi91cHnhNbkfOJO8mDH3x%2FLFecF1wyxNeb0YD2RSQsIQx80spxQ%2BN4JPlUpgKif273u&X-Amz-Signature=eb957c3e050a1d0ea2600c98b5b1ab1bcfd43805d7fac44ebb96e490dc591121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCYC3MX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDo2w8kaBBvbu0Wd3XJB9bUdnrWOOO7Aa1gDaE9TNY%2BAiEA47kzNs%2F59q7vAVTy%2FTSQAW6T%2Fvn%2FPpwzKqN9RMi33%2BoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPkILHF%2Fski41kt%2FCrcAzBMH00v5JMbGnd%2F1gkck5A0TIpkfXvllKnW4ZSxwBIKLbZ3UJmcQ%2B6zxIYmT60%2F8mvegeNXXn07FQvkCVoF4WYiEeZcbjN%2Bi4aA%2Fo%2Bh4%2FaDkYl8o%2FxUWvCU5URlvZ2Op6xF6584xD5P0GOiSFOFu1vLDNCPO6%2FYOIJZqTfAJEAthKmOn7beu2R3lR8iBB4VpIwGW5hvIex1Sh4Isomnp32BNJbnO%2FQdWwKDRpd9tXlbFn0m3H1vFfrwotOwm4%2FDbSALHqvAQGxoj0eHHQB8UsQxDFvs6%2BOkcGUb%2FbrcypwtmJ7L%2BnJ57OHlzXM0S5T9uk7t%2Fc4CO3oq9Cp3Ma6CFLLq4%2BIJc0%2BumoEKM8D2WLQbgZel2kRJDJcaGl8aSJjiNSd8BWSx8nqUGv%2B2eMkfgNFI2dD2t2vHkoxMsHfVSxMYCdznD6tIKn6zTlxdE7cGVxOsifykQcab61cTI8CXsDHobgh4kZppzeKLfng2ZAaX0RPyMWTW90xwj70QiH1eQWI%2BmiIBEoiTpvczg1UmcoD2HPxzkE2P9RTB8TSh1UjF7LGUkAPCb8ApB4KMPC7SzEq4SQIcBJqoLPcTEDZUVomP8Xrey3PDW4fY2N5Cn46JxJR%2Fwhoo8BIE9pcmMNbrisMGOqUBooYiADI1CP8Fv284wRdnYFczLQxYpqRKSOMV5O9K%2BkVqgeKJs7YLnsMTVlnS8U53Wh9TnXWcv%2Bm%2FRFssL4mSHOUOql62lP4gDJ2MC3mEblzkCbBwZARVTBF%2BkvtlneO3P8nWCq25e2YFQsmU2FPCPpMBchi91cHnhNbkfOJO8mDH3x%2FLFecF1wyxNeb0YD2RSQsIQx80spxQ%2BN4JPlUpgKif273u&X-Amz-Signature=8a87fbdd5e563fa55557e7c590f59d7e4f2b23cb264baf6da72028e939c79713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
