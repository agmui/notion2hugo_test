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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZGSQZN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH92se0WPPCQkeSL8C7Kx6fw8TDeBQ2p1NLWH9zZyQvGAiEA6e32ItvBiL4gibhCMYx7vP88AMp2Uqmaevuw2n57ENkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMrSi3w33TqmA5A7zyrcA0K%2FNY%2FsfypJ7aOWo921EDg%2FNITeOtPZ7IekmUy6neLjHRxTUDRl%2FAu23fENtOMvcxxJrKJcFSaMFJr2aYYIokFNFiR387uRmarBbN7Up7tprgCIuUuDtzSTxmyr7a47l2YrBLIMxJITikRqwmTDUJXJ2hPop3nkKJ8uYv28QL1Epy7QExyfhHgC6EHKyGyInlYRj%2B%2B%2FmaynWaSQY0BTPj43rhFokTIQvYcjdlrYYQu0ZIajBvokblyH9lRcIqd2KfHY5mBGWEgKNnLqXpaam%2B8bdW3MjPm3etoEZ4MNgTvrMJShBBiibLMOeKKvv3saWn4jLlfv8aZL03PhXc7HaFpt9WBuiKfuPCLMqW6%2BZcOFwATyNWzpt4dNCj9yrVdSATSGQHxoQjW2bFF9B2qrY%2FQs45j16%2F17QzCIdoMorTI4gUBiYa9%2FpAb3gReA0a093pMI0wPtTpFJs2gpQ0b8JpO%2FFyJ5liikHMdqhhzkT39U8NMnkxlNO4pVgHP85MjZnKAh7K5MSrVeBf%2BfeXUlPLAU95DFG4sz6wxB84W5Y%2FJ%2BDL%2F2aF%2Blyoec7cSzfkfVkKWjmQ3q0BV01tsXX8dJq%2Bj%2BkH0w3ixd0ZODv68snvhTy6DgLg5NFhkpdNoAMKyS0sEGOqUBvyro0xZQY55B0a7X9WIkSEPp9wEAxzDugXiyA3MN%2B%2FXRZdjCtCMZRHzXtSFfBOZ9PDxQURJiLdiMN3PTlZKN%2FsRW7mv1jFMAmga5EV3XGCMf8v8u2axRjO7LFp7vfrpsXv%2Fl89NpvgPbx8hl2TGH%2F9na1W7MUd%2BH5aU4xM0ec%2B1mOCJ7O6OhlcOuDgb5Di2pwY%2BjN7pJWYLvxho9xQXzYQn8PUyX&X-Amz-Signature=e62a7d45861b61e9652ffb5da86d3a1605a0e2864175b0be7c04a29fff289ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZGSQZN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH92se0WPPCQkeSL8C7Kx6fw8TDeBQ2p1NLWH9zZyQvGAiEA6e32ItvBiL4gibhCMYx7vP88AMp2Uqmaevuw2n57ENkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMrSi3w33TqmA5A7zyrcA0K%2FNY%2FsfypJ7aOWo921EDg%2FNITeOtPZ7IekmUy6neLjHRxTUDRl%2FAu23fENtOMvcxxJrKJcFSaMFJr2aYYIokFNFiR387uRmarBbN7Up7tprgCIuUuDtzSTxmyr7a47l2YrBLIMxJITikRqwmTDUJXJ2hPop3nkKJ8uYv28QL1Epy7QExyfhHgC6EHKyGyInlYRj%2B%2B%2FmaynWaSQY0BTPj43rhFokTIQvYcjdlrYYQu0ZIajBvokblyH9lRcIqd2KfHY5mBGWEgKNnLqXpaam%2B8bdW3MjPm3etoEZ4MNgTvrMJShBBiibLMOeKKvv3saWn4jLlfv8aZL03PhXc7HaFpt9WBuiKfuPCLMqW6%2BZcOFwATyNWzpt4dNCj9yrVdSATSGQHxoQjW2bFF9B2qrY%2FQs45j16%2F17QzCIdoMorTI4gUBiYa9%2FpAb3gReA0a093pMI0wPtTpFJs2gpQ0b8JpO%2FFyJ5liikHMdqhhzkT39U8NMnkxlNO4pVgHP85MjZnKAh7K5MSrVeBf%2BfeXUlPLAU95DFG4sz6wxB84W5Y%2FJ%2BDL%2F2aF%2Blyoec7cSzfkfVkKWjmQ3q0BV01tsXX8dJq%2Bj%2BkH0w3ixd0ZODv68snvhTy6DgLg5NFhkpdNoAMKyS0sEGOqUBvyro0xZQY55B0a7X9WIkSEPp9wEAxzDugXiyA3MN%2B%2FXRZdjCtCMZRHzXtSFfBOZ9PDxQURJiLdiMN3PTlZKN%2FsRW7mv1jFMAmga5EV3XGCMf8v8u2axRjO7LFp7vfrpsXv%2Fl89NpvgPbx8hl2TGH%2F9na1W7MUd%2BH5aU4xM0ec%2B1mOCJ7O6OhlcOuDgb5Di2pwY%2BjN7pJWYLvxho9xQXzYQn8PUyX&X-Amz-Signature=9225093c559e52e42ac7736a0e060adabfb675309097beee2e6c65c25545000c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZGSQZN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH92se0WPPCQkeSL8C7Kx6fw8TDeBQ2p1NLWH9zZyQvGAiEA6e32ItvBiL4gibhCMYx7vP88AMp2Uqmaevuw2n57ENkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMrSi3w33TqmA5A7zyrcA0K%2FNY%2FsfypJ7aOWo921EDg%2FNITeOtPZ7IekmUy6neLjHRxTUDRl%2FAu23fENtOMvcxxJrKJcFSaMFJr2aYYIokFNFiR387uRmarBbN7Up7tprgCIuUuDtzSTxmyr7a47l2YrBLIMxJITikRqwmTDUJXJ2hPop3nkKJ8uYv28QL1Epy7QExyfhHgC6EHKyGyInlYRj%2B%2B%2FmaynWaSQY0BTPj43rhFokTIQvYcjdlrYYQu0ZIajBvokblyH9lRcIqd2KfHY5mBGWEgKNnLqXpaam%2B8bdW3MjPm3etoEZ4MNgTvrMJShBBiibLMOeKKvv3saWn4jLlfv8aZL03PhXc7HaFpt9WBuiKfuPCLMqW6%2BZcOFwATyNWzpt4dNCj9yrVdSATSGQHxoQjW2bFF9B2qrY%2FQs45j16%2F17QzCIdoMorTI4gUBiYa9%2FpAb3gReA0a093pMI0wPtTpFJs2gpQ0b8JpO%2FFyJ5liikHMdqhhzkT39U8NMnkxlNO4pVgHP85MjZnKAh7K5MSrVeBf%2BfeXUlPLAU95DFG4sz6wxB84W5Y%2FJ%2BDL%2F2aF%2Blyoec7cSzfkfVkKWjmQ3q0BV01tsXX8dJq%2Bj%2BkH0w3ixd0ZODv68snvhTy6DgLg5NFhkpdNoAMKyS0sEGOqUBvyro0xZQY55B0a7X9WIkSEPp9wEAxzDugXiyA3MN%2B%2FXRZdjCtCMZRHzXtSFfBOZ9PDxQURJiLdiMN3PTlZKN%2FsRW7mv1jFMAmga5EV3XGCMf8v8u2axRjO7LFp7vfrpsXv%2Fl89NpvgPbx8hl2TGH%2F9na1W7MUd%2BH5aU4xM0ec%2B1mOCJ7O6OhlcOuDgb5Di2pwY%2BjN7pJWYLvxho9xQXzYQn8PUyX&X-Amz-Signature=fde7e67f40f32d9ceecee2a7f50df9b0738f1f09ed12362b806fbf0ea333a1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
