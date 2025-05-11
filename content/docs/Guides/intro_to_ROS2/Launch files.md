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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHRGGM7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDBskak4JypnRS1rr%2Bh5Mu1Xeg37DdGFMqXHIdgM0m9RAiAszCiKA1lDUr5nyGW06SjpWnzqM14AsRe1lmyzxXqW5SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMUF9ZY7iKYE2qY5KtwDy2uTCbzMWI9laJwsftpocmFs9HnpRHoodZ%2BxaMoznF6sDrupFTMDW0NTXnYE3rTbxKb2Dw1RniQ05hFYIB%2FHp9auid6wXt2GwWJVDh73cO52J%2FKdK1uOX8Vpy8fOxf%2Bmj8RugWHTjCpS9o1KyKxPdCmhJwHfT142z1qtre9l9wLtyuAmZtDWS51wjtdjRSC0KRHPw%2BMMWWANuP9%2FZK8qugoXl%2B3O%2BtSneb1wh%2FcR1xqEdbkyVARfQXTDssfjWuNR4zAnjfy3jGgMx9J2xGOtTTw89kWKkzBUORe2mIpU9cztfDdibf5kavQDHoxDdrNlhjk3O5ECzmodRENoN21y5EKuGXXSvau%2B%2FCpJ4pmNpZmsWBpavsTPnRwC6Qrwq%2FMbz%2BkgGW3wnUCX%2FrxofdQC7aEl%2FeSXRIqkAg143QrhWci3mqNJDgUTZc0%2B5wqsIg88ZQxwTjM313ELkZeo2hPIeAbKAUACw9rYdes%2B%2FxZ8xbQ9TV47ycaQlfzpFJdls8nHNbNVelQVbfcj88Djn1yE1W%2BSTsHgJfBlgtN6u3fQcREDjA2Oj7dMhwOXLGG0Cj1MERXdQ4zwE2zl%2FESV5cbFTVdEImJHNrwy4OeeJyzpc%2FyhxnvPQ5megWl4oqIwobmBwQY6pgGrNaJl8wwihtAUZQuj4a47kH09PQPBY3OuBf2BG95W8JzUtJ4ei7oDSzn8ZNZuF8moFHYk9sW%2BAISHzEGm%2BGCRxavy8ReStRTq23sv%2FFkCgsIs7ZxjGT3HT7SvlEsPfpc%2FCS2ecveo7LYyYbsmvqlFA5JOD714PSJWA%2FBgXrMdhYr762cCBn8yh7SnPPYCF4T5k5MNmcLn5FA8ArUPyK2PHa3ln90N&X-Amz-Signature=418fcef6b9c8c5ed1f95f4a703248d45b3abc7115f04ba99f0b4bf83e1e6af7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHRGGM7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDBskak4JypnRS1rr%2Bh5Mu1Xeg37DdGFMqXHIdgM0m9RAiAszCiKA1lDUr5nyGW06SjpWnzqM14AsRe1lmyzxXqW5SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMUF9ZY7iKYE2qY5KtwDy2uTCbzMWI9laJwsftpocmFs9HnpRHoodZ%2BxaMoznF6sDrupFTMDW0NTXnYE3rTbxKb2Dw1RniQ05hFYIB%2FHp9auid6wXt2GwWJVDh73cO52J%2FKdK1uOX8Vpy8fOxf%2Bmj8RugWHTjCpS9o1KyKxPdCmhJwHfT142z1qtre9l9wLtyuAmZtDWS51wjtdjRSC0KRHPw%2BMMWWANuP9%2FZK8qugoXl%2B3O%2BtSneb1wh%2FcR1xqEdbkyVARfQXTDssfjWuNR4zAnjfy3jGgMx9J2xGOtTTw89kWKkzBUORe2mIpU9cztfDdibf5kavQDHoxDdrNlhjk3O5ECzmodRENoN21y5EKuGXXSvau%2B%2FCpJ4pmNpZmsWBpavsTPnRwC6Qrwq%2FMbz%2BkgGW3wnUCX%2FrxofdQC7aEl%2FeSXRIqkAg143QrhWci3mqNJDgUTZc0%2B5wqsIg88ZQxwTjM313ELkZeo2hPIeAbKAUACw9rYdes%2B%2FxZ8xbQ9TV47ycaQlfzpFJdls8nHNbNVelQVbfcj88Djn1yE1W%2BSTsHgJfBlgtN6u3fQcREDjA2Oj7dMhwOXLGG0Cj1MERXdQ4zwE2zl%2FESV5cbFTVdEImJHNrwy4OeeJyzpc%2FyhxnvPQ5megWl4oqIwobmBwQY6pgGrNaJl8wwihtAUZQuj4a47kH09PQPBY3OuBf2BG95W8JzUtJ4ei7oDSzn8ZNZuF8moFHYk9sW%2BAISHzEGm%2BGCRxavy8ReStRTq23sv%2FFkCgsIs7ZxjGT3HT7SvlEsPfpc%2FCS2ecveo7LYyYbsmvqlFA5JOD714PSJWA%2FBgXrMdhYr762cCBn8yh7SnPPYCF4T5k5MNmcLn5FA8ArUPyK2PHa3ln90N&X-Amz-Signature=31c1574a7cc02e60b6f2f7d3174ae1ca2d996391bbf755574b11132ef983033f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHRGGM7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDBskak4JypnRS1rr%2Bh5Mu1Xeg37DdGFMqXHIdgM0m9RAiAszCiKA1lDUr5nyGW06SjpWnzqM14AsRe1lmyzxXqW5SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsMUF9ZY7iKYE2qY5KtwDy2uTCbzMWI9laJwsftpocmFs9HnpRHoodZ%2BxaMoznF6sDrupFTMDW0NTXnYE3rTbxKb2Dw1RniQ05hFYIB%2FHp9auid6wXt2GwWJVDh73cO52J%2FKdK1uOX8Vpy8fOxf%2Bmj8RugWHTjCpS9o1KyKxPdCmhJwHfT142z1qtre9l9wLtyuAmZtDWS51wjtdjRSC0KRHPw%2BMMWWANuP9%2FZK8qugoXl%2B3O%2BtSneb1wh%2FcR1xqEdbkyVARfQXTDssfjWuNR4zAnjfy3jGgMx9J2xGOtTTw89kWKkzBUORe2mIpU9cztfDdibf5kavQDHoxDdrNlhjk3O5ECzmodRENoN21y5EKuGXXSvau%2B%2FCpJ4pmNpZmsWBpavsTPnRwC6Qrwq%2FMbz%2BkgGW3wnUCX%2FrxofdQC7aEl%2FeSXRIqkAg143QrhWci3mqNJDgUTZc0%2B5wqsIg88ZQxwTjM313ELkZeo2hPIeAbKAUACw9rYdes%2B%2FxZ8xbQ9TV47ycaQlfzpFJdls8nHNbNVelQVbfcj88Djn1yE1W%2BSTsHgJfBlgtN6u3fQcREDjA2Oj7dMhwOXLGG0Cj1MERXdQ4zwE2zl%2FESV5cbFTVdEImJHNrwy4OeeJyzpc%2FyhxnvPQ5megWl4oqIwobmBwQY6pgGrNaJl8wwihtAUZQuj4a47kH09PQPBY3OuBf2BG95W8JzUtJ4ei7oDSzn8ZNZuF8moFHYk9sW%2BAISHzEGm%2BGCRxavy8ReStRTq23sv%2FFkCgsIs7ZxjGT3HT7SvlEsPfpc%2FCS2ecveo7LYyYbsmvqlFA5JOD714PSJWA%2FBgXrMdhYr762cCBn8yh7SnPPYCF4T5k5MNmcLn5FA8ArUPyK2PHa3ln90N&X-Amz-Signature=00e702042c198ef2df310be62472a2e2efc934063d9a1791f6a0349ec0e4a861&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
