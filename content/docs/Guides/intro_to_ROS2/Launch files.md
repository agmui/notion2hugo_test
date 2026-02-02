---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDCWKJ2%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCICPy4xb%2BVhinT5%2F%2FOyrFkR%2BlRw%2FSJKX3DoOlSNqgzSlOAiAPEHgIsLunvoFtahFAMeaSS3mEYjK8u8%2B6dcJ2GXv0HiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalTm%2BBq0n9LA0U78KtwDBhQ9G%2FFljEHmb8lkDosaz6AdtTmOGsrdx4YDK80J0o6FRpXWiwtI568Gmwj59rdLIIbXwJOB3CXiL6npXtSxPtk9lUSmrGqIitqv%2BawOJjo87c8b2D%2BGFqlcjsNx2q9Jo0BD72k%2BEFGv6SPTNGVtM5QvhZCdXF5guwvB%2FhvAD5diptC0RFXtvrnNFJq3hRpm7%2BmwGVPHpZjlrWpl5APmhGSfwjRvHFU6Ebx0EuQluMSxeW%2BQlNCeeZdSIdWqgFpSk60CbjQgnFoSSBOLN1fI93Yp89o7qdCq1CuaSYgE%2Bg4bQv1i71aCajDnGtyYT1SrJfOtpxQou1BpTfi33KNaRcKkswQtY00CNEB%2FmYbkY2ADX3aYK0VqEs4KqjTksWpQUqL%2F86hea5ZBi7axdauQDPTD8j0rYV7lsoEcnjVrcti5AzsdJJGqOy7nyQC2P6dYOi96Bx7MXh4GgA%2B0Zcry7ewBkXypyOMfPOSWlp0P2tkqYRM5V3gP3NQ6ol%2FvB%2B9Va59OU%2BFrg4IdQX4ItgH20zXYLHup%2FmD%2B%2BnYvPr5A1t4EyJlIivA82vURIlFbGBpFC8sW1nLV%2FscIZaejDZTebOq9yCBiBzgYnn211HvATmMjqe3blTQ9gyFLQt4w34eAzAY6pgH6UrlHz7DVT2Ykn2c8yVot4HJoaZ6TB69gBeLzP%2BOroLUtZGsed4TW49UaQkuulz%2BIPEGryOHeiWxyGvR%2BFn2VlyfPWVUEs4LkCD5QR1DZGi6gee8YVpKFlnWxzFloDnRA8F0bhnpvwHoMZjnz0O3rvvm8r3CneLMFMnOnQmNsgDyrWpx%2F3cvIfPMn8ieaeBjmKLLpEshYKpLTaevj3kSlmzEm%2FCkR&X-Amz-Signature=813e6a362524f4b93f683e114c108998fef7504081bc7343fa928d29c489289f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDCWKJ2%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCICPy4xb%2BVhinT5%2F%2FOyrFkR%2BlRw%2FSJKX3DoOlSNqgzSlOAiAPEHgIsLunvoFtahFAMeaSS3mEYjK8u8%2B6dcJ2GXv0HiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalTm%2BBq0n9LA0U78KtwDBhQ9G%2FFljEHmb8lkDosaz6AdtTmOGsrdx4YDK80J0o6FRpXWiwtI568Gmwj59rdLIIbXwJOB3CXiL6npXtSxPtk9lUSmrGqIitqv%2BawOJjo87c8b2D%2BGFqlcjsNx2q9Jo0BD72k%2BEFGv6SPTNGVtM5QvhZCdXF5guwvB%2FhvAD5diptC0RFXtvrnNFJq3hRpm7%2BmwGVPHpZjlrWpl5APmhGSfwjRvHFU6Ebx0EuQluMSxeW%2BQlNCeeZdSIdWqgFpSk60CbjQgnFoSSBOLN1fI93Yp89o7qdCq1CuaSYgE%2Bg4bQv1i71aCajDnGtyYT1SrJfOtpxQou1BpTfi33KNaRcKkswQtY00CNEB%2FmYbkY2ADX3aYK0VqEs4KqjTksWpQUqL%2F86hea5ZBi7axdauQDPTD8j0rYV7lsoEcnjVrcti5AzsdJJGqOy7nyQC2P6dYOi96Bx7MXh4GgA%2B0Zcry7ewBkXypyOMfPOSWlp0P2tkqYRM5V3gP3NQ6ol%2FvB%2B9Va59OU%2BFrg4IdQX4ItgH20zXYLHup%2FmD%2B%2BnYvPr5A1t4EyJlIivA82vURIlFbGBpFC8sW1nLV%2FscIZaejDZTebOq9yCBiBzgYnn211HvATmMjqe3blTQ9gyFLQt4w34eAzAY6pgH6UrlHz7DVT2Ykn2c8yVot4HJoaZ6TB69gBeLzP%2BOroLUtZGsed4TW49UaQkuulz%2BIPEGryOHeiWxyGvR%2BFn2VlyfPWVUEs4LkCD5QR1DZGi6gee8YVpKFlnWxzFloDnRA8F0bhnpvwHoMZjnz0O3rvvm8r3CneLMFMnOnQmNsgDyrWpx%2F3cvIfPMn8ieaeBjmKLLpEshYKpLTaevj3kSlmzEm%2FCkR&X-Amz-Signature=4f24af9e8d24f8a6e8169caedb7b07504a8ba5fcaacf8474a7b5e69c1ef145de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDCWKJ2%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCICPy4xb%2BVhinT5%2F%2FOyrFkR%2BlRw%2FSJKX3DoOlSNqgzSlOAiAPEHgIsLunvoFtahFAMeaSS3mEYjK8u8%2B6dcJ2GXv0HiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMalTm%2BBq0n9LA0U78KtwDBhQ9G%2FFljEHmb8lkDosaz6AdtTmOGsrdx4YDK80J0o6FRpXWiwtI568Gmwj59rdLIIbXwJOB3CXiL6npXtSxPtk9lUSmrGqIitqv%2BawOJjo87c8b2D%2BGFqlcjsNx2q9Jo0BD72k%2BEFGv6SPTNGVtM5QvhZCdXF5guwvB%2FhvAD5diptC0RFXtvrnNFJq3hRpm7%2BmwGVPHpZjlrWpl5APmhGSfwjRvHFU6Ebx0EuQluMSxeW%2BQlNCeeZdSIdWqgFpSk60CbjQgnFoSSBOLN1fI93Yp89o7qdCq1CuaSYgE%2Bg4bQv1i71aCajDnGtyYT1SrJfOtpxQou1BpTfi33KNaRcKkswQtY00CNEB%2FmYbkY2ADX3aYK0VqEs4KqjTksWpQUqL%2F86hea5ZBi7axdauQDPTD8j0rYV7lsoEcnjVrcti5AzsdJJGqOy7nyQC2P6dYOi96Bx7MXh4GgA%2B0Zcry7ewBkXypyOMfPOSWlp0P2tkqYRM5V3gP3NQ6ol%2FvB%2B9Va59OU%2BFrg4IdQX4ItgH20zXYLHup%2FmD%2B%2BnYvPr5A1t4EyJlIivA82vURIlFbGBpFC8sW1nLV%2FscIZaejDZTebOq9yCBiBzgYnn211HvATmMjqe3blTQ9gyFLQt4w34eAzAY6pgH6UrlHz7DVT2Ykn2c8yVot4HJoaZ6TB69gBeLzP%2BOroLUtZGsed4TW49UaQkuulz%2BIPEGryOHeiWxyGvR%2BFn2VlyfPWVUEs4LkCD5QR1DZGi6gee8YVpKFlnWxzFloDnRA8F0bhnpvwHoMZjnz0O3rvvm8r3CneLMFMnOnQmNsgDyrWpx%2F3cvIfPMn8ieaeBjmKLLpEshYKpLTaevj3kSlmzEm%2FCkR&X-Amz-Signature=c054c6e2fd67c1387cafc7094140efe1234709e1e741d90de5e04144ed3fd820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
