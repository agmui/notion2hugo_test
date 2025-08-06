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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMRUKRM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICv1p%2BtYmJ165EjeXL9zIVJnD43UAxzHQqdGl8jLcBJBAiEA5zjA1XFXEcVxRygpUMukh8eUki11opB1KGtxZEUYcjAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIMEKnLeEYle4pTFryrcAzoVaQcOocxvAEHd6lW2Ze2l%2FlXByUC7S83nmr5fnG2JE2ZfyCjIgT%2FhtJFdmB5LfIWEQ9b0ktNtE9MqCXVWWCKURWmP0w7Z%2FqUvoqBBsXqiQblR5d5lzoQIvBIQLbS3PlvqB3BD07Ob5y836zGJAOmnKrnStZ30yHeTnu%2BQV2frevM2CxoHenav9t1F1EBl1SI5HBVJJh2L2SXXlL7RI2DjMvO%2F%2F4QPeUg5TSAplVgfn6jPzhyAP0oc7yy3zPTMbbB7p9MtT1KlBb1A%2Fv1FaWQ7gnr1Xms%2B%2BUqXLHSa9VQu9oCcruZY6Zr1YmGKlgkoqW66qSo0Hu%2BLglJwFUlcBY1qrzQ5JtojvkaNCj37VYVgxUQMyWYrNTfUYce4Smu1%2B453%2FoEd3yhpzXRZLfjn8x8IBv5XCWhOyKlyRumQnFZbFUjtmw069f1bHE3siWbktWN%2BWml7dbbnhmVA79an7LZxpoLk4sMEpCPJ3mw287lEKhgGWvfcHHoKi%2Fv7%2ByWOuVACrWzfDhIdqH1NpQdBIgCg8vHfvwuxhDMmiPSyr6OxY%2Fvya%2Fy4hrxtIOJV85K%2BsI3Wxb34iDItEoVxyc1%2FtKUsYxFJ2bgyPc9Fb%2BAZJ1lPVt8YfoqkUF9O7tIEMJyFzcQGOqUBd1Mb%2FK7UlEO2eIdP9b91GJgH1e7sdzabdHxnIMZoo1VN8xYsQbnHra0V5S7ZzEHpFtKdhx%2B95Za8crcK3o%2Ft7bjRyVFU6gJNGN0BZWC7eb1Mpnm8kr4rHo4i8UuT7BY9btoqWaMCGyttfcwbHqiOwAb7h1o%2FDWjKoC6HTEbeo71kjy%2FnCI7cBRes3pvBF%2BEIeGJphJS1jm%2Bdl8unZxctciJ9vut%2F&X-Amz-Signature=91b759a2b64ba9d5621a8127cb0a7fb45fd59b4456c39c1c3f192081d1b950a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMRUKRM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICv1p%2BtYmJ165EjeXL9zIVJnD43UAxzHQqdGl8jLcBJBAiEA5zjA1XFXEcVxRygpUMukh8eUki11opB1KGtxZEUYcjAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIMEKnLeEYle4pTFryrcAzoVaQcOocxvAEHd6lW2Ze2l%2FlXByUC7S83nmr5fnG2JE2ZfyCjIgT%2FhtJFdmB5LfIWEQ9b0ktNtE9MqCXVWWCKURWmP0w7Z%2FqUvoqBBsXqiQblR5d5lzoQIvBIQLbS3PlvqB3BD07Ob5y836zGJAOmnKrnStZ30yHeTnu%2BQV2frevM2CxoHenav9t1F1EBl1SI5HBVJJh2L2SXXlL7RI2DjMvO%2F%2F4QPeUg5TSAplVgfn6jPzhyAP0oc7yy3zPTMbbB7p9MtT1KlBb1A%2Fv1FaWQ7gnr1Xms%2B%2BUqXLHSa9VQu9oCcruZY6Zr1YmGKlgkoqW66qSo0Hu%2BLglJwFUlcBY1qrzQ5JtojvkaNCj37VYVgxUQMyWYrNTfUYce4Smu1%2B453%2FoEd3yhpzXRZLfjn8x8IBv5XCWhOyKlyRumQnFZbFUjtmw069f1bHE3siWbktWN%2BWml7dbbnhmVA79an7LZxpoLk4sMEpCPJ3mw287lEKhgGWvfcHHoKi%2Fv7%2ByWOuVACrWzfDhIdqH1NpQdBIgCg8vHfvwuxhDMmiPSyr6OxY%2Fvya%2Fy4hrxtIOJV85K%2BsI3Wxb34iDItEoVxyc1%2FtKUsYxFJ2bgyPc9Fb%2BAZJ1lPVt8YfoqkUF9O7tIEMJyFzcQGOqUBd1Mb%2FK7UlEO2eIdP9b91GJgH1e7sdzabdHxnIMZoo1VN8xYsQbnHra0V5S7ZzEHpFtKdhx%2B95Za8crcK3o%2Ft7bjRyVFU6gJNGN0BZWC7eb1Mpnm8kr4rHo4i8UuT7BY9btoqWaMCGyttfcwbHqiOwAb7h1o%2FDWjKoC6HTEbeo71kjy%2FnCI7cBRes3pvBF%2BEIeGJphJS1jm%2Bdl8unZxctciJ9vut%2F&X-Amz-Signature=298a8b2cd708c65a2caa00ff3f7f649b47789a86f9615681509e5d8467ff5b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMRUKRM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICv1p%2BtYmJ165EjeXL9zIVJnD43UAxzHQqdGl8jLcBJBAiEA5zjA1XFXEcVxRygpUMukh8eUki11opB1KGtxZEUYcjAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIMEKnLeEYle4pTFryrcAzoVaQcOocxvAEHd6lW2Ze2l%2FlXByUC7S83nmr5fnG2JE2ZfyCjIgT%2FhtJFdmB5LfIWEQ9b0ktNtE9MqCXVWWCKURWmP0w7Z%2FqUvoqBBsXqiQblR5d5lzoQIvBIQLbS3PlvqB3BD07Ob5y836zGJAOmnKrnStZ30yHeTnu%2BQV2frevM2CxoHenav9t1F1EBl1SI5HBVJJh2L2SXXlL7RI2DjMvO%2F%2F4QPeUg5TSAplVgfn6jPzhyAP0oc7yy3zPTMbbB7p9MtT1KlBb1A%2Fv1FaWQ7gnr1Xms%2B%2BUqXLHSa9VQu9oCcruZY6Zr1YmGKlgkoqW66qSo0Hu%2BLglJwFUlcBY1qrzQ5JtojvkaNCj37VYVgxUQMyWYrNTfUYce4Smu1%2B453%2FoEd3yhpzXRZLfjn8x8IBv5XCWhOyKlyRumQnFZbFUjtmw069f1bHE3siWbktWN%2BWml7dbbnhmVA79an7LZxpoLk4sMEpCPJ3mw287lEKhgGWvfcHHoKi%2Fv7%2ByWOuVACrWzfDhIdqH1NpQdBIgCg8vHfvwuxhDMmiPSyr6OxY%2Fvya%2Fy4hrxtIOJV85K%2BsI3Wxb34iDItEoVxyc1%2FtKUsYxFJ2bgyPc9Fb%2BAZJ1lPVt8YfoqkUF9O7tIEMJyFzcQGOqUBd1Mb%2FK7UlEO2eIdP9b91GJgH1e7sdzabdHxnIMZoo1VN8xYsQbnHra0V5S7ZzEHpFtKdhx%2B95Za8crcK3o%2Ft7bjRyVFU6gJNGN0BZWC7eb1Mpnm8kr4rHo4i8UuT7BY9btoqWaMCGyttfcwbHqiOwAb7h1o%2FDWjKoC6HTEbeo71kjy%2FnCI7cBRes3pvBF%2BEIeGJphJS1jm%2Bdl8unZxctciJ9vut%2F&X-Amz-Signature=ecf96ed87d5c79a0b5cee159313e2ab499d690f70559df2766a95c342bd1a3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
