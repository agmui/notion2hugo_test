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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NH6VAFW%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5CsP8Kys5vXuSTG5jg2AfYz%2FUm6bJT2mNdeVkkfQW9AiEAs9cwAg%2BBR9i1HgBhsbTdQXkiL1I9%2FnJ8xvbgkITrQaYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWN2DU2NZNX2KFfkircAxEZFObQsKxumdqJo56Ynx7jZM7VusSps6bn321PKirhqYv4uKxUxtLKJDHz%2FEWqOj2r5%2BcIVa%2FsaTjPgo7%2BPP396%2F4Dsjp%2Bh45Ad3XmWxtrXx6sOJI%2FIEmaEyL0RqxvHhBLSBMVLI1xxiRUXVVMTRsfiXKZVg5m5bWQxupbXB7ZfS23JTIkAgODhYBKrkXKM1RQiO%2FTxC1cyuxN2O6AlaqNkLJyBdlBpZvoz6ENat3RJ%2BUe8S1%2BxeI5gdOGEtcxdddABASa3PwsFLDIul%2Fl4vbUcz5UbhFq%2F5Qc3W%2BLS%2FxURm%2BA6F8tDpoTA7dYtY7yJlbmm7BAn5msEl8nI%2Fi%2BnrRb%2FUWoJtelTF6caifPTCtqEwqCxq0UBxDlIYBXhf%2BwvACv6jonNxytQoAXEvH9dgYtnc0R0a7hw%2BRO0FupVGOi6F75l7SmyHjx5CuxIz7mJ%2BSLzj2ANY4pLISOKPsatSKrp28dC7lrJ7MRhxGhUBq6Jdg9kUHvy1EXLp%2F3GeTrdAnLdpZs7hUUNQRpulZQXSmlSU3lI%2ByiClAwGyOJd%2FeTkgfagHtnkLsykY9RraAT4NdbuK91UODbQC3IWmbadzKBVSPi67JVjwP9oBS3mgleRKu8PnZzerCttFdWMKm6sM8GOqUBFytB3mKVAWHdRqbRKNhhTCWeIiePRPaho0%2BAzu5sGBPt8qBqyN7sc9tzkXk%2FLkoVWCz%2FzQ%2FvzZMDxe92OHmvXGhl9kjsmUzmS6f451ddAGxmn%2FVKcJsinJtWLXrd1n4JHruWIpo2Y9aL1h6cIsWBcN8l5XZ2wLiJxZGtQLT3SQZqDVJNJn3VWbVXplgcdOQ%2BVtIqXJZDJp2Mcs6RGxxEXMx5jspA&X-Amz-Signature=e3acf6e49984a657b59785c3e122751967593da6408da1334b97b8b46dc4baea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NH6VAFW%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5CsP8Kys5vXuSTG5jg2AfYz%2FUm6bJT2mNdeVkkfQW9AiEAs9cwAg%2BBR9i1HgBhsbTdQXkiL1I9%2FnJ8xvbgkITrQaYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWN2DU2NZNX2KFfkircAxEZFObQsKxumdqJo56Ynx7jZM7VusSps6bn321PKirhqYv4uKxUxtLKJDHz%2FEWqOj2r5%2BcIVa%2FsaTjPgo7%2BPP396%2F4Dsjp%2Bh45Ad3XmWxtrXx6sOJI%2FIEmaEyL0RqxvHhBLSBMVLI1xxiRUXVVMTRsfiXKZVg5m5bWQxupbXB7ZfS23JTIkAgODhYBKrkXKM1RQiO%2FTxC1cyuxN2O6AlaqNkLJyBdlBpZvoz6ENat3RJ%2BUe8S1%2BxeI5gdOGEtcxdddABASa3PwsFLDIul%2Fl4vbUcz5UbhFq%2F5Qc3W%2BLS%2FxURm%2BA6F8tDpoTA7dYtY7yJlbmm7BAn5msEl8nI%2Fi%2BnrRb%2FUWoJtelTF6caifPTCtqEwqCxq0UBxDlIYBXhf%2BwvACv6jonNxytQoAXEvH9dgYtnc0R0a7hw%2BRO0FupVGOi6F75l7SmyHjx5CuxIz7mJ%2BSLzj2ANY4pLISOKPsatSKrp28dC7lrJ7MRhxGhUBq6Jdg9kUHvy1EXLp%2F3GeTrdAnLdpZs7hUUNQRpulZQXSmlSU3lI%2ByiClAwGyOJd%2FeTkgfagHtnkLsykY9RraAT4NdbuK91UODbQC3IWmbadzKBVSPi67JVjwP9oBS3mgleRKu8PnZzerCttFdWMKm6sM8GOqUBFytB3mKVAWHdRqbRKNhhTCWeIiePRPaho0%2BAzu5sGBPt8qBqyN7sc9tzkXk%2FLkoVWCz%2FzQ%2FvzZMDxe92OHmvXGhl9kjsmUzmS6f451ddAGxmn%2FVKcJsinJtWLXrd1n4JHruWIpo2Y9aL1h6cIsWBcN8l5XZ2wLiJxZGtQLT3SQZqDVJNJn3VWbVXplgcdOQ%2BVtIqXJZDJp2Mcs6RGxxEXMx5jspA&X-Amz-Signature=dd7422386be8414b73cdd82304c0f304d3f987f76fcf5bd3c73b9b5cad120543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NH6VAFW%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5CsP8Kys5vXuSTG5jg2AfYz%2FUm6bJT2mNdeVkkfQW9AiEAs9cwAg%2BBR9i1HgBhsbTdQXkiL1I9%2FnJ8xvbgkITrQaYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWN2DU2NZNX2KFfkircAxEZFObQsKxumdqJo56Ynx7jZM7VusSps6bn321PKirhqYv4uKxUxtLKJDHz%2FEWqOj2r5%2BcIVa%2FsaTjPgo7%2BPP396%2F4Dsjp%2Bh45Ad3XmWxtrXx6sOJI%2FIEmaEyL0RqxvHhBLSBMVLI1xxiRUXVVMTRsfiXKZVg5m5bWQxupbXB7ZfS23JTIkAgODhYBKrkXKM1RQiO%2FTxC1cyuxN2O6AlaqNkLJyBdlBpZvoz6ENat3RJ%2BUe8S1%2BxeI5gdOGEtcxdddABASa3PwsFLDIul%2Fl4vbUcz5UbhFq%2F5Qc3W%2BLS%2FxURm%2BA6F8tDpoTA7dYtY7yJlbmm7BAn5msEl8nI%2Fi%2BnrRb%2FUWoJtelTF6caifPTCtqEwqCxq0UBxDlIYBXhf%2BwvACv6jonNxytQoAXEvH9dgYtnc0R0a7hw%2BRO0FupVGOi6F75l7SmyHjx5CuxIz7mJ%2BSLzj2ANY4pLISOKPsatSKrp28dC7lrJ7MRhxGhUBq6Jdg9kUHvy1EXLp%2F3GeTrdAnLdpZs7hUUNQRpulZQXSmlSU3lI%2ByiClAwGyOJd%2FeTkgfagHtnkLsykY9RraAT4NdbuK91UODbQC3IWmbadzKBVSPi67JVjwP9oBS3mgleRKu8PnZzerCttFdWMKm6sM8GOqUBFytB3mKVAWHdRqbRKNhhTCWeIiePRPaho0%2BAzu5sGBPt8qBqyN7sc9tzkXk%2FLkoVWCz%2FzQ%2FvzZMDxe92OHmvXGhl9kjsmUzmS6f451ddAGxmn%2FVKcJsinJtWLXrd1n4JHruWIpo2Y9aL1h6cIsWBcN8l5XZ2wLiJxZGtQLT3SQZqDVJNJn3VWbVXplgcdOQ%2BVtIqXJZDJp2Mcs6RGxxEXMx5jspA&X-Amz-Signature=39553c03cf6420b1e5c570e1348d3f79585e92c2bad83678f765f556b95644b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
