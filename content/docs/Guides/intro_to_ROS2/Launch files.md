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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPVTTY3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2IXcA4e3YnxcSfVDM%2BYpiP%2F%2F9oeCV8VCwE%2FEF%2Bs3vpwIhAMzMX7T3oNNkMb5ut6D8CGOFbxICJEaV4OoWEZiajgkAKv8DCBEQABoMNjM3NDIzMTgzODA1IgwDvG8A52s3GB8YrLoq3AOvyFswev3sbDO7yLxzZ2G3mz%2FEq3yZKq1FHLUvBg4Zu57%2B%2BcRlEP%2Bd%2FxXyqFNA%2B76AXfM6byHcy57rR%2B9YK1XOnpNmKGFhW%2B6kdcLIwWXC4H1DLu1n5v15xky%2Bh8dZd2drsuCOPTK3IX53qPc%2FQSBhZIg44X85XPxKdjzwFGSDqw7wFYNj0myU2c3ElrwqUMzcsInZGjN9%2FdVuoiqpGSHkK8KpUDovT%2FNLaigu%2F%2BfIpsgonYiS4weF5YsSu3j4nsJ8lXyy7ck5UAuLIOSofa3hzNvr97QEMo1m1YRVJA2SkOmY6PijBHd192UEUj0ZajcjKT5AOFGzWn9sl0B66FgpMgzfwtSEF7H2zKWWkh817uH7UlYgNac547qbw9rIkGIwOaBVD5rEiL6mJysX8%2BI6gkLDffYVRoXOtccI9dDAj4F7tXHOgko6DaxNYIOaM3G0RPxbdqOkkYxU7IaIJvXNNcCO2XESPJ1qGrgoR%2BFMYZWHwF0Fe4ojHEDeIHj6r12LwthIvb%2F7GvZ3oAu583mEMxKn0Cic8nx1bAkG2jtRRc%2FDBcY9G431WRbsnq6Jk%2BDwz92vnNS1CB22eGNBv2kYuSpMaRrMHndn3K9Li8oXlYrYFyozeNwtGVRyyTDQnZHBBjqkAWHQv%2Fz9VF3VVORmMB6MKRSJZ2uI2ANdTFW76IoGbtbft7QCyyiCP%2B8VQhlm9wJfuqVV1O4ZY%2FiqV99B8xf6i441ZXSn85i%2BfOAuJgkbVzQku6Iz95LppbsSQgXKLPQtcxmCPYeej3VWmkyVB7xr6RgORXWRj76yMuwUvn9coMZQtk9WSnXkZ8j4WmIdx98RWcRgwkJBBzPoB3Y5oQ6XQMjGMBQ0&X-Amz-Signature=81d59b205c135b1e86dd195bf0eab7addf020c4ab899b35e2188a2466c066de3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPVTTY3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2IXcA4e3YnxcSfVDM%2BYpiP%2F%2F9oeCV8VCwE%2FEF%2Bs3vpwIhAMzMX7T3oNNkMb5ut6D8CGOFbxICJEaV4OoWEZiajgkAKv8DCBEQABoMNjM3NDIzMTgzODA1IgwDvG8A52s3GB8YrLoq3AOvyFswev3sbDO7yLxzZ2G3mz%2FEq3yZKq1FHLUvBg4Zu57%2B%2BcRlEP%2Bd%2FxXyqFNA%2B76AXfM6byHcy57rR%2B9YK1XOnpNmKGFhW%2B6kdcLIwWXC4H1DLu1n5v15xky%2Bh8dZd2drsuCOPTK3IX53qPc%2FQSBhZIg44X85XPxKdjzwFGSDqw7wFYNj0myU2c3ElrwqUMzcsInZGjN9%2FdVuoiqpGSHkK8KpUDovT%2FNLaigu%2F%2BfIpsgonYiS4weF5YsSu3j4nsJ8lXyy7ck5UAuLIOSofa3hzNvr97QEMo1m1YRVJA2SkOmY6PijBHd192UEUj0ZajcjKT5AOFGzWn9sl0B66FgpMgzfwtSEF7H2zKWWkh817uH7UlYgNac547qbw9rIkGIwOaBVD5rEiL6mJysX8%2BI6gkLDffYVRoXOtccI9dDAj4F7tXHOgko6DaxNYIOaM3G0RPxbdqOkkYxU7IaIJvXNNcCO2XESPJ1qGrgoR%2BFMYZWHwF0Fe4ojHEDeIHj6r12LwthIvb%2F7GvZ3oAu583mEMxKn0Cic8nx1bAkG2jtRRc%2FDBcY9G431WRbsnq6Jk%2BDwz92vnNS1CB22eGNBv2kYuSpMaRrMHndn3K9Li8oXlYrYFyozeNwtGVRyyTDQnZHBBjqkAWHQv%2Fz9VF3VVORmMB6MKRSJZ2uI2ANdTFW76IoGbtbft7QCyyiCP%2B8VQhlm9wJfuqVV1O4ZY%2FiqV99B8xf6i441ZXSn85i%2BfOAuJgkbVzQku6Iz95LppbsSQgXKLPQtcxmCPYeej3VWmkyVB7xr6RgORXWRj76yMuwUvn9coMZQtk9WSnXkZ8j4WmIdx98RWcRgwkJBBzPoB3Y5oQ6XQMjGMBQ0&X-Amz-Signature=2bf0fef7477117f17348699ebd9cf5902cc7c49565c46106937c23daaff80750&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPVTTY3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2IXcA4e3YnxcSfVDM%2BYpiP%2F%2F9oeCV8VCwE%2FEF%2Bs3vpwIhAMzMX7T3oNNkMb5ut6D8CGOFbxICJEaV4OoWEZiajgkAKv8DCBEQABoMNjM3NDIzMTgzODA1IgwDvG8A52s3GB8YrLoq3AOvyFswev3sbDO7yLxzZ2G3mz%2FEq3yZKq1FHLUvBg4Zu57%2B%2BcRlEP%2Bd%2FxXyqFNA%2B76AXfM6byHcy57rR%2B9YK1XOnpNmKGFhW%2B6kdcLIwWXC4H1DLu1n5v15xky%2Bh8dZd2drsuCOPTK3IX53qPc%2FQSBhZIg44X85XPxKdjzwFGSDqw7wFYNj0myU2c3ElrwqUMzcsInZGjN9%2FdVuoiqpGSHkK8KpUDovT%2FNLaigu%2F%2BfIpsgonYiS4weF5YsSu3j4nsJ8lXyy7ck5UAuLIOSofa3hzNvr97QEMo1m1YRVJA2SkOmY6PijBHd192UEUj0ZajcjKT5AOFGzWn9sl0B66FgpMgzfwtSEF7H2zKWWkh817uH7UlYgNac547qbw9rIkGIwOaBVD5rEiL6mJysX8%2BI6gkLDffYVRoXOtccI9dDAj4F7tXHOgko6DaxNYIOaM3G0RPxbdqOkkYxU7IaIJvXNNcCO2XESPJ1qGrgoR%2BFMYZWHwF0Fe4ojHEDeIHj6r12LwthIvb%2F7GvZ3oAu583mEMxKn0Cic8nx1bAkG2jtRRc%2FDBcY9G431WRbsnq6Jk%2BDwz92vnNS1CB22eGNBv2kYuSpMaRrMHndn3K9Li8oXlYrYFyozeNwtGVRyyTDQnZHBBjqkAWHQv%2Fz9VF3VVORmMB6MKRSJZ2uI2ANdTFW76IoGbtbft7QCyyiCP%2B8VQhlm9wJfuqVV1O4ZY%2FiqV99B8xf6i441ZXSn85i%2BfOAuJgkbVzQku6Iz95LppbsSQgXKLPQtcxmCPYeej3VWmkyVB7xr6RgORXWRj76yMuwUvn9coMZQtk9WSnXkZ8j4WmIdx98RWcRgwkJBBzPoB3Y5oQ6XQMjGMBQ0&X-Amz-Signature=555687614a17cce3619f6b90892f3f04c800add8d6fee5d7f0caadcc369b9a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
