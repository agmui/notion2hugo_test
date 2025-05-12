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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJTPNZN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCip6lIRKTjIwga1Gm8KV%2BgJEgB5uUjfPa001%2BpB04oKwIhAJYZ%2BBNLh%2FE5hjCLfu6hFruBRq%2F6Y7igSTkx4vrpRsGQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcdIgMjhAyVzLEpakq3APYi7EoXvsMw61YDDJbUyjz1t261c%2Fh01Es0U8h4AikYLPePnnz0%2Bj37HIeoj2t2AVdj3CWvysPyVKtXmSs%2BlIpeYMBNWJ1ETZvE5%2B9E%2F7ojNascjQy38QQrPF%2Fue%2FfKP9QL3k5NoZRzf4VGwaNNoEsscbugilZvUMPBsQARIKFTTePCTveX0y4ZlrTrF7qAOOJ3j2wlZuTL45ikSTP%2FqIHTCqvkJ9%2F2iWSt0vQvWU4tzcDjSs4gW%2BjO5NkWAgqO53iVDRZ1bARu7yJZFsEWexdzDwBsgmvpYT8eD79kzNJzkMa495qORaoTEZlAXFkXTwWIah4WYD5syDDRYvleYU9tUsDDHVwIhezq5Ny3xf1TfDyOlrm4CY63Dr6%2B3WzafI7kL%2BQp4QbgWRXBaPJC4R9OD%2BxTRpj5OL4ayOI7s3dGlyHUlJS%2FweaExZ8boSVd4CXAwAxxhoORDiOnh%2F2LIlBgn3oOj4BNWVOSEWnuzPqrLBksWgIiRdO21e4luZBTVVpv5gxo2lgkJsyai6cE3PdwCfcU68VKFJmlHQcxOTC4J8q%2Fz%2FKaXGjtFVz88pqnvTfEkkTAEp6TID1RZ6KDzd%2BAGQ2y7d8ZwrlnG5PHmNqkOHpS2q4RekF6pKVcTD0hYbBBjqkAf%2B074BMVRlqPQkN%2FvZwnv5pZEP%2BfT0WFFSISHeM8EbhsZJQR%2FpfpXRB4ctx%2BsPq4z0XbdbN%2BOjXc1JD8eUTIYuRhqs%2Fg0I51NOB0ISM0uupS6WB2yY%2FKHdRcW1SxME1KZnFV0AitCcAnQUzqOR7WLRRi4YAYh1swGfGsQ%2B1ylLPwwRXpN0Y4RlgRTkTH8TTSkW7O9IGJakEYuTT3mmLSEtvnfbs&X-Amz-Signature=f54923ad02b7b1a9d71cfc2bca64be9b6f6aff563ea26cd491023ea3dfb3e8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJTPNZN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCip6lIRKTjIwga1Gm8KV%2BgJEgB5uUjfPa001%2BpB04oKwIhAJYZ%2BBNLh%2FE5hjCLfu6hFruBRq%2F6Y7igSTkx4vrpRsGQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcdIgMjhAyVzLEpakq3APYi7EoXvsMw61YDDJbUyjz1t261c%2Fh01Es0U8h4AikYLPePnnz0%2Bj37HIeoj2t2AVdj3CWvysPyVKtXmSs%2BlIpeYMBNWJ1ETZvE5%2B9E%2F7ojNascjQy38QQrPF%2Fue%2FfKP9QL3k5NoZRzf4VGwaNNoEsscbugilZvUMPBsQARIKFTTePCTveX0y4ZlrTrF7qAOOJ3j2wlZuTL45ikSTP%2FqIHTCqvkJ9%2F2iWSt0vQvWU4tzcDjSs4gW%2BjO5NkWAgqO53iVDRZ1bARu7yJZFsEWexdzDwBsgmvpYT8eD79kzNJzkMa495qORaoTEZlAXFkXTwWIah4WYD5syDDRYvleYU9tUsDDHVwIhezq5Ny3xf1TfDyOlrm4CY63Dr6%2B3WzafI7kL%2BQp4QbgWRXBaPJC4R9OD%2BxTRpj5OL4ayOI7s3dGlyHUlJS%2FweaExZ8boSVd4CXAwAxxhoORDiOnh%2F2LIlBgn3oOj4BNWVOSEWnuzPqrLBksWgIiRdO21e4luZBTVVpv5gxo2lgkJsyai6cE3PdwCfcU68VKFJmlHQcxOTC4J8q%2Fz%2FKaXGjtFVz88pqnvTfEkkTAEp6TID1RZ6KDzd%2BAGQ2y7d8ZwrlnG5PHmNqkOHpS2q4RekF6pKVcTD0hYbBBjqkAf%2B074BMVRlqPQkN%2FvZwnv5pZEP%2BfT0WFFSISHeM8EbhsZJQR%2FpfpXRB4ctx%2BsPq4z0XbdbN%2BOjXc1JD8eUTIYuRhqs%2Fg0I51NOB0ISM0uupS6WB2yY%2FKHdRcW1SxME1KZnFV0AitCcAnQUzqOR7WLRRi4YAYh1swGfGsQ%2B1ylLPwwRXpN0Y4RlgRTkTH8TTSkW7O9IGJakEYuTT3mmLSEtvnfbs&X-Amz-Signature=a0762b079992bfaee4dc615e68a02047b0703c6096bba3cbc235371bb9da26c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJTPNZN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCip6lIRKTjIwga1Gm8KV%2BgJEgB5uUjfPa001%2BpB04oKwIhAJYZ%2BBNLh%2FE5hjCLfu6hFruBRq%2F6Y7igSTkx4vrpRsGQKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcdIgMjhAyVzLEpakq3APYi7EoXvsMw61YDDJbUyjz1t261c%2Fh01Es0U8h4AikYLPePnnz0%2Bj37HIeoj2t2AVdj3CWvysPyVKtXmSs%2BlIpeYMBNWJ1ETZvE5%2B9E%2F7ojNascjQy38QQrPF%2Fue%2FfKP9QL3k5NoZRzf4VGwaNNoEsscbugilZvUMPBsQARIKFTTePCTveX0y4ZlrTrF7qAOOJ3j2wlZuTL45ikSTP%2FqIHTCqvkJ9%2F2iWSt0vQvWU4tzcDjSs4gW%2BjO5NkWAgqO53iVDRZ1bARu7yJZFsEWexdzDwBsgmvpYT8eD79kzNJzkMa495qORaoTEZlAXFkXTwWIah4WYD5syDDRYvleYU9tUsDDHVwIhezq5Ny3xf1TfDyOlrm4CY63Dr6%2B3WzafI7kL%2BQp4QbgWRXBaPJC4R9OD%2BxTRpj5OL4ayOI7s3dGlyHUlJS%2FweaExZ8boSVd4CXAwAxxhoORDiOnh%2F2LIlBgn3oOj4BNWVOSEWnuzPqrLBksWgIiRdO21e4luZBTVVpv5gxo2lgkJsyai6cE3PdwCfcU68VKFJmlHQcxOTC4J8q%2Fz%2FKaXGjtFVz88pqnvTfEkkTAEp6TID1RZ6KDzd%2BAGQ2y7d8ZwrlnG5PHmNqkOHpS2q4RekF6pKVcTD0hYbBBjqkAf%2B074BMVRlqPQkN%2FvZwnv5pZEP%2BfT0WFFSISHeM8EbhsZJQR%2FpfpXRB4ctx%2BsPq4z0XbdbN%2BOjXc1JD8eUTIYuRhqs%2Fg0I51NOB0ISM0uupS6WB2yY%2FKHdRcW1SxME1KZnFV0AitCcAnQUzqOR7WLRRi4YAYh1swGfGsQ%2B1ylLPwwRXpN0Y4RlgRTkTH8TTSkW7O9IGJakEYuTT3mmLSEtvnfbs&X-Amz-Signature=de3bf605d3e3846c878add42f7c4788202c37ba1ebef66a5da1d8cb56fc5d369&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
