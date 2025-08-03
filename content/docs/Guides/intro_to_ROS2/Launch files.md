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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FV2FNV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrDS%2Bv%2F8ZUvGx7oBfk5GtYqkGz5JCFEteXW1wLDoEWXAiA1IPVtVeugYhsf360rPCkZ%2Bgb67K5dp8yY9BGiOZQdOyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdeVAFpTab9Njnvg8KtwDVLiAGc6xrDGfbT56SS2wIHElLnZMJNzYutwv9doIsCfhRjgYx02gGJ18vwYGVrv%2BaY7KBQHjHTulwJlNriI%2BImkxKCSZhWPKmtyivJc%2BWFhwc8lsRUgkl5NEzbsZKHwIM0dN4GQ1pdzMdEFqe1mVdTxEf4RyjK1bXEfQ5OxOqC28%2FJsuZepJa6zLtLUIUAUOpipuxppvyWrEFtoGPT6r3xvAY6gEFPVqfaB8GGEDJx71kj2NruvcjWKYu1ZIWvUjFaN8SLXsbGZJbgYshIYESxCopuAtcGA4J5L%2FiB1mTEjHh3fZ%2F%2B%2FQEiiS5Y2d9IIPcG%2BnkRS4ZwUtSox06hMDkmlK2%2F4%2FL01bLaoasmeR84nEjOABtxBtpFKIQPbrVuc%2F3TLCD1g3TJ90o9vHfym72%2FwtmIl1AgfrtJtEV1o5N9gCBW%2BQRMV3TaPwwRTL1Df6nv3JAYxyjGkvpXBxUhOHylgQZIFX7VnXlQgBROk1Cyulsp3COKHjE5qpLaSfJ5SwzCtQa0dXBavSEKEZS5dkjFj9zBQEKhWnoggcxEGwzUSzI8yojyv%2BIjiBuum%2FrRgqLIcepG0iUgkSkkAXf1Ns%2BtZD5JAyMrl6DLmgZvmObK2CUZcpRqQ94jF0mGwwhcK8xAY6pgF82qS%2BR0Y8YUPPkkEkSKlVXodwTiHTfostAACBoJabzDf46DttOxXGLyMFRqx0%2FYwv1ulVgm8S60NlfWeL2B035S9JwIfbuVTBS%2BDlrQWzTVfVgDpJvtykd0wufFlR8X%2FhZ8hrscdXgyu%2BB0HKUdCRqqA%2FGiR%2FnY0L6V95qXg6eMemKSY9GwNYbeVvPdkIMjdaRljc5Sugwb5lTScR3tHcJP%2F5Ch3W&X-Amz-Signature=722f63e745350e8d0ecd9a1dd689e1c47c9723d4bb144caeb60aaeea02b13aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FV2FNV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrDS%2Bv%2F8ZUvGx7oBfk5GtYqkGz5JCFEteXW1wLDoEWXAiA1IPVtVeugYhsf360rPCkZ%2Bgb67K5dp8yY9BGiOZQdOyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdeVAFpTab9Njnvg8KtwDVLiAGc6xrDGfbT56SS2wIHElLnZMJNzYutwv9doIsCfhRjgYx02gGJ18vwYGVrv%2BaY7KBQHjHTulwJlNriI%2BImkxKCSZhWPKmtyivJc%2BWFhwc8lsRUgkl5NEzbsZKHwIM0dN4GQ1pdzMdEFqe1mVdTxEf4RyjK1bXEfQ5OxOqC28%2FJsuZepJa6zLtLUIUAUOpipuxppvyWrEFtoGPT6r3xvAY6gEFPVqfaB8GGEDJx71kj2NruvcjWKYu1ZIWvUjFaN8SLXsbGZJbgYshIYESxCopuAtcGA4J5L%2FiB1mTEjHh3fZ%2F%2B%2FQEiiS5Y2d9IIPcG%2BnkRS4ZwUtSox06hMDkmlK2%2F4%2FL01bLaoasmeR84nEjOABtxBtpFKIQPbrVuc%2F3TLCD1g3TJ90o9vHfym72%2FwtmIl1AgfrtJtEV1o5N9gCBW%2BQRMV3TaPwwRTL1Df6nv3JAYxyjGkvpXBxUhOHylgQZIFX7VnXlQgBROk1Cyulsp3COKHjE5qpLaSfJ5SwzCtQa0dXBavSEKEZS5dkjFj9zBQEKhWnoggcxEGwzUSzI8yojyv%2BIjiBuum%2FrRgqLIcepG0iUgkSkkAXf1Ns%2BtZD5JAyMrl6DLmgZvmObK2CUZcpRqQ94jF0mGwwhcK8xAY6pgF82qS%2BR0Y8YUPPkkEkSKlVXodwTiHTfostAACBoJabzDf46DttOxXGLyMFRqx0%2FYwv1ulVgm8S60NlfWeL2B035S9JwIfbuVTBS%2BDlrQWzTVfVgDpJvtykd0wufFlR8X%2FhZ8hrscdXgyu%2BB0HKUdCRqqA%2FGiR%2FnY0L6V95qXg6eMemKSY9GwNYbeVvPdkIMjdaRljc5Sugwb5lTScR3tHcJP%2F5Ch3W&X-Amz-Signature=7f98ede36d59d3c243b56b90a94dac760f1e6829da8282a42be7a5154ec5bb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FV2FNV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrDS%2Bv%2F8ZUvGx7oBfk5GtYqkGz5JCFEteXW1wLDoEWXAiA1IPVtVeugYhsf360rPCkZ%2Bgb67K5dp8yY9BGiOZQdOyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMdeVAFpTab9Njnvg8KtwDVLiAGc6xrDGfbT56SS2wIHElLnZMJNzYutwv9doIsCfhRjgYx02gGJ18vwYGVrv%2BaY7KBQHjHTulwJlNriI%2BImkxKCSZhWPKmtyivJc%2BWFhwc8lsRUgkl5NEzbsZKHwIM0dN4GQ1pdzMdEFqe1mVdTxEf4RyjK1bXEfQ5OxOqC28%2FJsuZepJa6zLtLUIUAUOpipuxppvyWrEFtoGPT6r3xvAY6gEFPVqfaB8GGEDJx71kj2NruvcjWKYu1ZIWvUjFaN8SLXsbGZJbgYshIYESxCopuAtcGA4J5L%2FiB1mTEjHh3fZ%2F%2B%2FQEiiS5Y2d9IIPcG%2BnkRS4ZwUtSox06hMDkmlK2%2F4%2FL01bLaoasmeR84nEjOABtxBtpFKIQPbrVuc%2F3TLCD1g3TJ90o9vHfym72%2FwtmIl1AgfrtJtEV1o5N9gCBW%2BQRMV3TaPwwRTL1Df6nv3JAYxyjGkvpXBxUhOHylgQZIFX7VnXlQgBROk1Cyulsp3COKHjE5qpLaSfJ5SwzCtQa0dXBavSEKEZS5dkjFj9zBQEKhWnoggcxEGwzUSzI8yojyv%2BIjiBuum%2FrRgqLIcepG0iUgkSkkAXf1Ns%2BtZD5JAyMrl6DLmgZvmObK2CUZcpRqQ94jF0mGwwhcK8xAY6pgF82qS%2BR0Y8YUPPkkEkSKlVXodwTiHTfostAACBoJabzDf46DttOxXGLyMFRqx0%2FYwv1ulVgm8S60NlfWeL2B035S9JwIfbuVTBS%2BDlrQWzTVfVgDpJvtykd0wufFlR8X%2FhZ8hrscdXgyu%2BB0HKUdCRqqA%2FGiR%2FnY0L6V95qXg6eMemKSY9GwNYbeVvPdkIMjdaRljc5Sugwb5lTScR3tHcJP%2F5Ch3W&X-Amz-Signature=f0088f28c1370eecb2e98af6ffdc8ccb90c65d985b1b477fa095ae31365d02a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
