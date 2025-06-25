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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDN4SNI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0EKu4lAWZIVlgNS%2Ba8mupABmmtmLJRVOFIG7NDzdkmwIgZMhcodxlZCrww6GezAjSn8tqEUOCxdzatZY90xuhsl0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKxxd5wIxzxucwfDgSrcA7a%2Bu2giAzi2eKxXdZ7XTfZtqpfEwj7qkPhs%2Fu2HU25rzPlecx84%2BZ%2FKTrncaRNOIA6ssZJhppfIQP3RVgtJe63KAyMqPZJWOoK%2BCnGsE8BuWMIGcikKJykr7YsoGDXa8N1k%2BRox7puE6EGjiEYWlwUuGA8lVn9Wjqk7jBMzrBZDuS9x2Wu6xRMUQhRbHnSN40J0zh%2BmOfLEKun6lIV0b6fEtTBOsk3bkGZ2PL72SvRNyk64MNkzxBrpIlGJeEUTpNuLkziRIM4IBulfOZaPJx%2B3mlaByXFvNRY8KqljRxnu66UE5XmCMd1U5dNUO6dnzIELNxdLyjfnDsTRe8ZZ5GwBhiwHA8xfBLVdgKrhe6k7Y3CNeFNmCSEWuy63dGva78T3cUehJsOUNQTzyx%2F1%2FoEph7FppHscPb6I82BhxUEEYH5hanIQ6OWnVRxVG5Y2k7IC5Bz%2FyvcQKi1UC1G%2Fy1DKcabX6jHiknToovEJBto9z3oWFepHyKw1ksj3G%2BsbmR94RpkiY%2F29mmp9ieZfDzZSSKkgPJtH0Mq5uKunyLFMGyqXEfkRlotgDzluS0%2FUQypHseg8%2FhpV7lvQWbqnf%2BdV4DmEFrV14sEqNk95iYib1eLK4X%2F13KOSszzZMP7d7sIGOqUB0MbYVR5jytOuGeGXVhx7pJNHMm8FrDzZh4SwLlPc4py%2FocTQzz%2BTqQDQRH2NGN5oGHdXma3zU4K18EeH4zrUyBHDS%2Bc9CrY%2FDsrGW0MT%2BMVWXwww6cA1GHO0FbM9L7FKQslllREWkqPTXWD5mTFs6WmD2GySJrHsNiPh5MjFrwx4%2F6OrK8MKOIOkvU8Edd0maLhKJ39R%2BItDZcBPtEYbNuUhKK8l&X-Amz-Signature=3c6273ce1e2800ff7299186ae084be113c9578a6a4646ed2a73dc11907ecda6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDN4SNI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0EKu4lAWZIVlgNS%2Ba8mupABmmtmLJRVOFIG7NDzdkmwIgZMhcodxlZCrww6GezAjSn8tqEUOCxdzatZY90xuhsl0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKxxd5wIxzxucwfDgSrcA7a%2Bu2giAzi2eKxXdZ7XTfZtqpfEwj7qkPhs%2Fu2HU25rzPlecx84%2BZ%2FKTrncaRNOIA6ssZJhppfIQP3RVgtJe63KAyMqPZJWOoK%2BCnGsE8BuWMIGcikKJykr7YsoGDXa8N1k%2BRox7puE6EGjiEYWlwUuGA8lVn9Wjqk7jBMzrBZDuS9x2Wu6xRMUQhRbHnSN40J0zh%2BmOfLEKun6lIV0b6fEtTBOsk3bkGZ2PL72SvRNyk64MNkzxBrpIlGJeEUTpNuLkziRIM4IBulfOZaPJx%2B3mlaByXFvNRY8KqljRxnu66UE5XmCMd1U5dNUO6dnzIELNxdLyjfnDsTRe8ZZ5GwBhiwHA8xfBLVdgKrhe6k7Y3CNeFNmCSEWuy63dGva78T3cUehJsOUNQTzyx%2F1%2FoEph7FppHscPb6I82BhxUEEYH5hanIQ6OWnVRxVG5Y2k7IC5Bz%2FyvcQKi1UC1G%2Fy1DKcabX6jHiknToovEJBto9z3oWFepHyKw1ksj3G%2BsbmR94RpkiY%2F29mmp9ieZfDzZSSKkgPJtH0Mq5uKunyLFMGyqXEfkRlotgDzluS0%2FUQypHseg8%2FhpV7lvQWbqnf%2BdV4DmEFrV14sEqNk95iYib1eLK4X%2F13KOSszzZMP7d7sIGOqUB0MbYVR5jytOuGeGXVhx7pJNHMm8FrDzZh4SwLlPc4py%2FocTQzz%2BTqQDQRH2NGN5oGHdXma3zU4K18EeH4zrUyBHDS%2Bc9CrY%2FDsrGW0MT%2BMVWXwww6cA1GHO0FbM9L7FKQslllREWkqPTXWD5mTFs6WmD2GySJrHsNiPh5MjFrwx4%2F6OrK8MKOIOkvU8Edd0maLhKJ39R%2BItDZcBPtEYbNuUhKK8l&X-Amz-Signature=6b27d11fdfe51de89cd644feee3b9148433931d176ad8429ff7b577c6f27187b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDN4SNI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0EKu4lAWZIVlgNS%2Ba8mupABmmtmLJRVOFIG7NDzdkmwIgZMhcodxlZCrww6GezAjSn8tqEUOCxdzatZY90xuhsl0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKxxd5wIxzxucwfDgSrcA7a%2Bu2giAzi2eKxXdZ7XTfZtqpfEwj7qkPhs%2Fu2HU25rzPlecx84%2BZ%2FKTrncaRNOIA6ssZJhppfIQP3RVgtJe63KAyMqPZJWOoK%2BCnGsE8BuWMIGcikKJykr7YsoGDXa8N1k%2BRox7puE6EGjiEYWlwUuGA8lVn9Wjqk7jBMzrBZDuS9x2Wu6xRMUQhRbHnSN40J0zh%2BmOfLEKun6lIV0b6fEtTBOsk3bkGZ2PL72SvRNyk64MNkzxBrpIlGJeEUTpNuLkziRIM4IBulfOZaPJx%2B3mlaByXFvNRY8KqljRxnu66UE5XmCMd1U5dNUO6dnzIELNxdLyjfnDsTRe8ZZ5GwBhiwHA8xfBLVdgKrhe6k7Y3CNeFNmCSEWuy63dGva78T3cUehJsOUNQTzyx%2F1%2FoEph7FppHscPb6I82BhxUEEYH5hanIQ6OWnVRxVG5Y2k7IC5Bz%2FyvcQKi1UC1G%2Fy1DKcabX6jHiknToovEJBto9z3oWFepHyKw1ksj3G%2BsbmR94RpkiY%2F29mmp9ieZfDzZSSKkgPJtH0Mq5uKunyLFMGyqXEfkRlotgDzluS0%2FUQypHseg8%2FhpV7lvQWbqnf%2BdV4DmEFrV14sEqNk95iYib1eLK4X%2F13KOSszzZMP7d7sIGOqUB0MbYVR5jytOuGeGXVhx7pJNHMm8FrDzZh4SwLlPc4py%2FocTQzz%2BTqQDQRH2NGN5oGHdXma3zU4K18EeH4zrUyBHDS%2Bc9CrY%2FDsrGW0MT%2BMVWXwww6cA1GHO0FbM9L7FKQslllREWkqPTXWD5mTFs6WmD2GySJrHsNiPh5MjFrwx4%2F6OrK8MKOIOkvU8Edd0maLhKJ39R%2BItDZcBPtEYbNuUhKK8l&X-Amz-Signature=5f427367a6e38d3976e643172d74222f760cbfb7c1675010625960c03d731b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
