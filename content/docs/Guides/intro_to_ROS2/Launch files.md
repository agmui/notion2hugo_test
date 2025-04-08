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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DF5RLG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDQSNYmtTiLzKmR%2BQxLRniuDQrJvZCZaLSY4vV3B8LcpwIgCmhcGQm91OOTW7bbQ9wJctsYcgyDe23pJBlXRW1yq3Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHwI0WTpALymFK5K3CrcA%2BUzFl1kJoFsIoi3%2BN4U2aGuutCvzhLQ4A5ZqlWlrsSJM%2F1oDA%2FvanWogob3Z4qvt8UE%2FkQpGylRe1%2F7%2B1T%2FoEq8607d%2BkdrQS6tfWS51W9fGwQEgTbGjy4AaGS8Q6JpBj%2F9SufM7VOyYrWLhzwzLmC07%2FU%2BTPD52AafdS7Xv5rRHLNFJeT0IBluiEoiUOoDIWMcpY697danw4LaU5R3G2GaTNmsSfuY0cXYH%2Bz0EhcgxG%2FhIzyAXcWZyphAbewODcmqZCktPPsxJpO5ijkusIz7q4aHR9SrN0Yed%2FciijFX5UXUQF0lLJiKZn7eVBm4MPbB1IjN5ZYHxbfJbsJvTEBwGEVzRSXLuAd2o4yMsy%2FYBgKfIqQRr9DrDVDJYx1ssqLBXm21kQnWAvxFSi2FBMrSo1kpNJhN8VXERaPTK0488z8ZrJ22rcyf7MeMys3VjlToxesU7w9OsDXnL4UnloViTE%2FVWIpZmn5c2aQ6G8CYpSJGh7lVqZGRuCzr9%2B46vbawWTibbfe37rmpi4UKvQdD6aQtaNXFCfBH7H3XGpKE%2BFPQDWra9ztaxDozrELILOUFGSaowBxD1mE64BeSRfaeffZiVXY8rAbEhpGBZpis3JS9DhUQtU551MPSMPPV1b8GOqUBQporphiaHGeVEQG9vN0fUo3Gw4Nb%2FRgxKJzjTxrrHadfu5%2F53iEnJtHW70EMYihIjHRWKfXNzOG3DMauKGjaduwulRvqRAnRbd%2Bxjy5F0sAUkEB9mUHKO1K3tYf6CHXL1zhLCa%2BX5NUzu77folLm8XM%2Bka9ku5xAWN6o8dMq1sZEURbRfB%2Bzm1xTEYxpKAgdUCp%2FEC5NdrddwjJ2FnPmGiNSxF5M&X-Amz-Signature=c0a9bbec5c47e49601f4d14e623f7a079775d32e6a24012ee450a2853870f343&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DF5RLG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDQSNYmtTiLzKmR%2BQxLRniuDQrJvZCZaLSY4vV3B8LcpwIgCmhcGQm91OOTW7bbQ9wJctsYcgyDe23pJBlXRW1yq3Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHwI0WTpALymFK5K3CrcA%2BUzFl1kJoFsIoi3%2BN4U2aGuutCvzhLQ4A5ZqlWlrsSJM%2F1oDA%2FvanWogob3Z4qvt8UE%2FkQpGylRe1%2F7%2B1T%2FoEq8607d%2BkdrQS6tfWS51W9fGwQEgTbGjy4AaGS8Q6JpBj%2F9SufM7VOyYrWLhzwzLmC07%2FU%2BTPD52AafdS7Xv5rRHLNFJeT0IBluiEoiUOoDIWMcpY697danw4LaU5R3G2GaTNmsSfuY0cXYH%2Bz0EhcgxG%2FhIzyAXcWZyphAbewODcmqZCktPPsxJpO5ijkusIz7q4aHR9SrN0Yed%2FciijFX5UXUQF0lLJiKZn7eVBm4MPbB1IjN5ZYHxbfJbsJvTEBwGEVzRSXLuAd2o4yMsy%2FYBgKfIqQRr9DrDVDJYx1ssqLBXm21kQnWAvxFSi2FBMrSo1kpNJhN8VXERaPTK0488z8ZrJ22rcyf7MeMys3VjlToxesU7w9OsDXnL4UnloViTE%2FVWIpZmn5c2aQ6G8CYpSJGh7lVqZGRuCzr9%2B46vbawWTibbfe37rmpi4UKvQdD6aQtaNXFCfBH7H3XGpKE%2BFPQDWra9ztaxDozrELILOUFGSaowBxD1mE64BeSRfaeffZiVXY8rAbEhpGBZpis3JS9DhUQtU551MPSMPPV1b8GOqUBQporphiaHGeVEQG9vN0fUo3Gw4Nb%2FRgxKJzjTxrrHadfu5%2F53iEnJtHW70EMYihIjHRWKfXNzOG3DMauKGjaduwulRvqRAnRbd%2Bxjy5F0sAUkEB9mUHKO1K3tYf6CHXL1zhLCa%2BX5NUzu77folLm8XM%2Bka9ku5xAWN6o8dMq1sZEURbRfB%2Bzm1xTEYxpKAgdUCp%2FEC5NdrddwjJ2FnPmGiNSxF5M&X-Amz-Signature=7a2a7698805c67ce7ab337e333cf484e6c4b12c4150fa7214fcc299717f06216&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DF5RLG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDQSNYmtTiLzKmR%2BQxLRniuDQrJvZCZaLSY4vV3B8LcpwIgCmhcGQm91OOTW7bbQ9wJctsYcgyDe23pJBlXRW1yq3Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHwI0WTpALymFK5K3CrcA%2BUzFl1kJoFsIoi3%2BN4U2aGuutCvzhLQ4A5ZqlWlrsSJM%2F1oDA%2FvanWogob3Z4qvt8UE%2FkQpGylRe1%2F7%2B1T%2FoEq8607d%2BkdrQS6tfWS51W9fGwQEgTbGjy4AaGS8Q6JpBj%2F9SufM7VOyYrWLhzwzLmC07%2FU%2BTPD52AafdS7Xv5rRHLNFJeT0IBluiEoiUOoDIWMcpY697danw4LaU5R3G2GaTNmsSfuY0cXYH%2Bz0EhcgxG%2FhIzyAXcWZyphAbewODcmqZCktPPsxJpO5ijkusIz7q4aHR9SrN0Yed%2FciijFX5UXUQF0lLJiKZn7eVBm4MPbB1IjN5ZYHxbfJbsJvTEBwGEVzRSXLuAd2o4yMsy%2FYBgKfIqQRr9DrDVDJYx1ssqLBXm21kQnWAvxFSi2FBMrSo1kpNJhN8VXERaPTK0488z8ZrJ22rcyf7MeMys3VjlToxesU7w9OsDXnL4UnloViTE%2FVWIpZmn5c2aQ6G8CYpSJGh7lVqZGRuCzr9%2B46vbawWTibbfe37rmpi4UKvQdD6aQtaNXFCfBH7H3XGpKE%2BFPQDWra9ztaxDozrELILOUFGSaowBxD1mE64BeSRfaeffZiVXY8rAbEhpGBZpis3JS9DhUQtU551MPSMPPV1b8GOqUBQporphiaHGeVEQG9vN0fUo3Gw4Nb%2FRgxKJzjTxrrHadfu5%2F53iEnJtHW70EMYihIjHRWKfXNzOG3DMauKGjaduwulRvqRAnRbd%2Bxjy5F0sAUkEB9mUHKO1K3tYf6CHXL1zhLCa%2BX5NUzu77folLm8XM%2Bka9ku5xAWN6o8dMq1sZEURbRfB%2Bzm1xTEYxpKAgdUCp%2FEC5NdrddwjJ2FnPmGiNSxF5M&X-Amz-Signature=892924cba1b8200ef4d5b2ef3966687e4bc9345b526ed78b0296f618cf309a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
