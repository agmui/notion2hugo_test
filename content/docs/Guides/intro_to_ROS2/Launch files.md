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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SNI7UDI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKbClkLmagDVCmbsLFSC0kKWUpjI2MeJVYXyRfVnXKyAiAlQXS1xTJfeVJKLQ1QPaEcxGk7SaMorTO3YOhnWwIwfyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMusWeQhxesujSYmXTKtwDLgJZYWL%2F8u7aHoDEFgoelddz8PUJKp5jlKeZQrugB9kKiBq3TCE4CQayZczh0NZMvz4cFbT6ui15Get3x%2F5AMgCjJE%2BS2pPPZfBMATbWngrhIetyMgpXcv4j3fp9YKW0YJtkkERlO1nbxxd%2B6zMwZ37Jt1LRZ%2B5nQ30fTXf86ZaxUpzDnwB6qZLkN0%2BcyVlPv%2F6vAVz2oZAtd38vIWvO999j58tj6E4a8JlP95P1748Wn7iYRWSzRSXL4Lv9v0xbg6zPVcFLjPfr8JQkZzbmmfC%2BZsAthKWe8RbFGKUvXdZ%2FSUO0s3MN2gRggHHxiKpsp%2FP4M26TlRinvPDwPg2G9mao6eJFDFauQEtYmojQeQnumJkm9Cfbuf8udLbgwsdSA6IDwlpiltpqTRxYQMQ9gEMJsmIUPq88Cf1gngACt9fQZlixzV6fCa4XSfs3nbflEeBO97I13MLh94EEbPRAodOSFqNIJczjCZ1LZxgr5qBnc17gGkLFK2up7H8QPgo%2BYtAke4Jew%2F%2FUWIFPXKTGxo4aCEjzk2hPka%2FLilU1gxgktCz4mLT8WYv%2FUswVfNZ0kP1LAa45QAnmFoSOaUL21eaWeHWe4hXXq42ZxxoOUQSHgq%2BDKKA5A3GIc%2FUw%2FqTNwwY6pgEHPKFw97%2BRl2ts0UTO0D5WSiJDhRLHIyMZA5cWoeno%2By5c5yuHRR5FFtVa1QEBcllsf9vKSw9C5%2BdQJy2upnJZv83MU9eWo%2Bro1K3G2klDjIt9VFCq8E3kwybKL7KMArGiBwYWPl2VH5drsceBOmCQh4OOsjcLXlbgv4sJoTiVL0i%2BhOtI%2Bd55RGLRDPzg4J1y7yjNCZdE7NgMn%2BZfMSEB3iHCAjDK&X-Amz-Signature=a2860e6d21ab2c5477eaa57d6d5cb4df4041b6803d74def5250c04cafc0329da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SNI7UDI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKbClkLmagDVCmbsLFSC0kKWUpjI2MeJVYXyRfVnXKyAiAlQXS1xTJfeVJKLQ1QPaEcxGk7SaMorTO3YOhnWwIwfyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMusWeQhxesujSYmXTKtwDLgJZYWL%2F8u7aHoDEFgoelddz8PUJKp5jlKeZQrugB9kKiBq3TCE4CQayZczh0NZMvz4cFbT6ui15Get3x%2F5AMgCjJE%2BS2pPPZfBMATbWngrhIetyMgpXcv4j3fp9YKW0YJtkkERlO1nbxxd%2B6zMwZ37Jt1LRZ%2B5nQ30fTXf86ZaxUpzDnwB6qZLkN0%2BcyVlPv%2F6vAVz2oZAtd38vIWvO999j58tj6E4a8JlP95P1748Wn7iYRWSzRSXL4Lv9v0xbg6zPVcFLjPfr8JQkZzbmmfC%2BZsAthKWe8RbFGKUvXdZ%2FSUO0s3MN2gRggHHxiKpsp%2FP4M26TlRinvPDwPg2G9mao6eJFDFauQEtYmojQeQnumJkm9Cfbuf8udLbgwsdSA6IDwlpiltpqTRxYQMQ9gEMJsmIUPq88Cf1gngACt9fQZlixzV6fCa4XSfs3nbflEeBO97I13MLh94EEbPRAodOSFqNIJczjCZ1LZxgr5qBnc17gGkLFK2up7H8QPgo%2BYtAke4Jew%2F%2FUWIFPXKTGxo4aCEjzk2hPka%2FLilU1gxgktCz4mLT8WYv%2FUswVfNZ0kP1LAa45QAnmFoSOaUL21eaWeHWe4hXXq42ZxxoOUQSHgq%2BDKKA5A3GIc%2FUw%2FqTNwwY6pgEHPKFw97%2BRl2ts0UTO0D5WSiJDhRLHIyMZA5cWoeno%2By5c5yuHRR5FFtVa1QEBcllsf9vKSw9C5%2BdQJy2upnJZv83MU9eWo%2Bro1K3G2klDjIt9VFCq8E3kwybKL7KMArGiBwYWPl2VH5drsceBOmCQh4OOsjcLXlbgv4sJoTiVL0i%2BhOtI%2Bd55RGLRDPzg4J1y7yjNCZdE7NgMn%2BZfMSEB3iHCAjDK&X-Amz-Signature=348e8719532b7ae1110dcfdb9bdf30b0a84b300c30d9c201bb42e0382dbb9fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SNI7UDI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKbClkLmagDVCmbsLFSC0kKWUpjI2MeJVYXyRfVnXKyAiAlQXS1xTJfeVJKLQ1QPaEcxGk7SaMorTO3YOhnWwIwfyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMusWeQhxesujSYmXTKtwDLgJZYWL%2F8u7aHoDEFgoelddz8PUJKp5jlKeZQrugB9kKiBq3TCE4CQayZczh0NZMvz4cFbT6ui15Get3x%2F5AMgCjJE%2BS2pPPZfBMATbWngrhIetyMgpXcv4j3fp9YKW0YJtkkERlO1nbxxd%2B6zMwZ37Jt1LRZ%2B5nQ30fTXf86ZaxUpzDnwB6qZLkN0%2BcyVlPv%2F6vAVz2oZAtd38vIWvO999j58tj6E4a8JlP95P1748Wn7iYRWSzRSXL4Lv9v0xbg6zPVcFLjPfr8JQkZzbmmfC%2BZsAthKWe8RbFGKUvXdZ%2FSUO0s3MN2gRggHHxiKpsp%2FP4M26TlRinvPDwPg2G9mao6eJFDFauQEtYmojQeQnumJkm9Cfbuf8udLbgwsdSA6IDwlpiltpqTRxYQMQ9gEMJsmIUPq88Cf1gngACt9fQZlixzV6fCa4XSfs3nbflEeBO97I13MLh94EEbPRAodOSFqNIJczjCZ1LZxgr5qBnc17gGkLFK2up7H8QPgo%2BYtAke4Jew%2F%2FUWIFPXKTGxo4aCEjzk2hPka%2FLilU1gxgktCz4mLT8WYv%2FUswVfNZ0kP1LAa45QAnmFoSOaUL21eaWeHWe4hXXq42ZxxoOUQSHgq%2BDKKA5A3GIc%2FUw%2FqTNwwY6pgEHPKFw97%2BRl2ts0UTO0D5WSiJDhRLHIyMZA5cWoeno%2By5c5yuHRR5FFtVa1QEBcllsf9vKSw9C5%2BdQJy2upnJZv83MU9eWo%2Bro1K3G2klDjIt9VFCq8E3kwybKL7KMArGiBwYWPl2VH5drsceBOmCQh4OOsjcLXlbgv4sJoTiVL0i%2BhOtI%2Bd55RGLRDPzg4J1y7yjNCZdE7NgMn%2BZfMSEB3iHCAjDK&X-Amz-Signature=3c150273b64d96c622de282076b06040a6b9ea8f372bfe275bcb922d32518960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
